/**
 * Multi-language code example extractor for Fern-generated SDKs.
 *
 * Extracts structured code examples by:
 * 1. Parsing client source files → endpoint-to-SDK-method mapping
 * 2. Parsing wire test files → example request/response data
 * 3. Combining into a code-examples.json manifest keyed by HTTP method + path
 *
 * Supports TypeScript, Python, and Java SDKs. Language is auto-detected
 * from .fern/metadata.json.
 *
 * Usage: npx tsx scripts/extract-code-examples.ts [--root /path/to/sdk]
 */

import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";

// ============================================================
// Types
// ============================================================

interface EndpointMapping {
    httpMethod: string;
    httpPath: string; // OpenAPI-style template, e.g., /agent/{id}
    methodChain: string[]; // e.g., ["agent", "create"]
    methodName: string; // e.g., "create"
}

interface TestExample {
    httpMethod: string;
    httpPath: string; // Concrete path from mock, e.g., /agent/id
    methodName: string;
    describeBlock: string;
    requestBody: unknown | null;
    responseBody: unknown | null;
    sdkCallArgs: unknown[];
    sdkCallSource: string;
}

interface CodeExample {
    httpMethod: string;
    httpPath: string;
    sdkMethodChain: string[];
    sdkMethodName: string;
    request: {
        body: unknown | null;
        sdkCallArgs: unknown[];
    };
    response: {
        body: unknown | null;
    };
    sdkCallSource: string;
}

interface Manifest {
    metadata: {
        language: string;
        packageName: string;
        sdkVersion: string;
        specCommit: string;
        generatorVersion: string;
    };
    examples: Record<string, CodeExample>;
}

type Language = "typescript" | "python" | "java";

interface LanguageParser {
    language: Language;
    parseEndpoints(rootDir: string): EndpointMapping[];
    parseTestExamples(rootDir: string): TestExample[];
}

// ============================================================
// Shared utilities
// ============================================================

function findFiles(dir: string, pattern: RegExp): string[] {
    const results: string[] = [];
    if (!fs.existsSync(dir)) return results;
    function walk(d: string) {
        for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
            const full = path.join(d, entry.name);
            if (entry.isDirectory()) walk(full);
            else if (pattern.test(full)) results.push(full);
        }
    }
    walk(dir);
    return results.sort();
}

function normalizePath(p: string): string {
    p = p.replace(/\\/g, "/");
    if (!p.startsWith("/")) p = "/" + p;
    if (p.endsWith("/") && p.length > 1) p = p.slice(0, -1);
    return p;
}

function camelToSnake(str: string): string {
    return str
        .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
        .toLowerCase();
}

/**
 * Normalize path parameter names in a URL template to snake_case.
 * e.g., /construe/codes/{codeID} → /construe/codes/{code_id}
 * Ensures consistent keys across TS/Python/Java manifests.
 */
function normalizePathParams(httpPath: string): string {
    return httpPath.replace(/\{(\w+)\}/g, (_, name) => `{${camelToSnake(name)}}`);
}

/**
 * Extract a balanced brace-delimited block from source text starting at an
 * opening brace. Returns the full text including the braces, or null if
 * the braces never balance.
 */
function extractBalancedBraces(source: string, startIndex: number): string | null {
    let depth = 0;
    for (let i = startIndex; i < source.length; i++) {
        if (source[i] === "{") depth++;
        else if (source[i] === "}") depth--;
        if (depth === 0) return source.slice(startIndex, i + 1);
    }
    return null;
}

/**
 * Convert a Python dict literal string to JSON by replacing Python-specific
 * syntax: True→true, False→false, None→null, single quotes→double quotes.
 */
function pythonDictToJson(dictStr: string): unknown {
    let json = dictStr
        .replace(/\bTrue\b/g, "true")
        .replace(/\bFalse\b/g, "false")
        .replace(/\bNone\b/g, "null");
    // Replace single-quoted strings with double-quoted, being careful about
    // strings that contain the other quote type.
    // Simple approach: replace ' with " when it's a dict key/value delimiter
    json = json.replace(/'/g, '"');
    try {
        return JSON.parse(json);
    } catch {
        return null;
    }
}

// ============================================================
// Language detection
// ============================================================

interface FernMetadata {
    generatorName: string;
    sdkVersion: string;
    originGitCommit: string;
}

function detectLanguage(rootDir: string): { language: Language; metadata: FernMetadata } {
    const metadataPath = path.join(rootDir, ".fern", "metadata.json");
    if (!fs.existsSync(metadataPath)) {
        throw new Error(`Fern metadata not found at ${metadataPath}`);
    }
    const metadata: FernMetadata = JSON.parse(fs.readFileSync(metadataPath, "utf-8"));

    if (metadata.generatorName.includes("typescript")) return { language: "typescript", metadata };
    if (metadata.generatorName.includes("python")) return { language: "python", metadata };
    if (metadata.generatorName.includes("java")) return { language: "java", metadata };

    throw new Error(`Unsupported generator: ${metadata.generatorName}`);
}

function getPackageName(rootDir: string, language: Language): string {
    switch (language) {
        case "typescript": {
            const pkgPath = path.join(rootDir, "package.json");
            if (fs.existsSync(pkgPath)) {
                return JSON.parse(fs.readFileSync(pkgPath, "utf-8")).name || "unknown";
            }
            return "unknown";
        }
        case "python": {
            const pyprojectPath = path.join(rootDir, "pyproject.toml");
            if (fs.existsSync(pyprojectPath)) {
                const content = fs.readFileSync(pyprojectPath, "utf-8");
                const match = content.match(/name\s*=\s*"([^"]+)"/);
                if (match) return match[1];
            }
            return "unknown";
        }
        case "java": {
            const gradlePath = path.join(rootDir, "build.gradle");
            if (fs.existsSync(gradlePath)) {
                const content = fs.readFileSync(gradlePath, "utf-8");
                const groupMatch = content.match(/group\s*=\s*['"]([^'"]+)['"]/);
                const artifactMatch = content.match(/artifactId\s*=\s*['"]([^'"]+)['"]/);
                if (groupMatch && artifactMatch) return `${groupMatch[1]}:${artifactMatch[1]}`;
                if (groupMatch) return groupMatch[1];
            }
            return "unknown";
        }
    }
}

// ============================================================
// TypeScript parser
// ============================================================

function createTypeScriptParser(): LanguageParser {
    return {
        language: "typescript",

        parseEndpoints(rootDir: string): EndpointMapping[] {
            const clientFiles = findFiles(path.join(rootDir, "src/api/resources"), /\/client\/Client\.ts$/);
            const endpoints: EndpointMapping[] = [];
            for (const file of clientFiles) {
                const fileEndpoints = tsExtractEndpoints(file);
                endpoints.push(...fileEndpoints);
                console.error(`  ${path.relative(rootDir, file)}: ${fileEndpoints.length} endpoints`);
            }
            return endpoints;
        },

        parseTestExamples(rootDir: string): TestExample[] {
            const testDir = path.join(rootDir, "tests/wire");
            if (!fs.existsSync(testDir)) {
                console.error("  No wire test directory found");
                return [];
            }
            const testFiles = findFiles(testDir, /\.test\.ts$/);
            const examples: TestExample[] = [];
            for (const file of testFiles) {
                const fileExamples = tsExtractTestExamples(file);
                examples.push(...fileExamples);
                console.error(`  ${path.relative(rootDir, file)}: ${fileExamples.length} examples`);
            }
            return examples;
        },
    };
}

function tsExtractEndpoints(filePath: string): EndpointMapping[] {
    const source = fs.readFileSync(filePath, "utf-8");
    const sourceFile = ts.createSourceFile(filePath, source, ts.ScriptTarget.Latest, true);
    const methodChainPrefix = tsDeriveMethodChain(filePath);
    const endpoints: EndpointMapping[] = [];

    function visit(node: ts.Node) {
        // Find handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/path")
        if (
            ts.isCallExpression(node) &&
            ts.isIdentifier(node.expression) &&
            node.expression.text === "handleNonStatusCodeError"
        ) {
            const args = node.arguments;
            if (args.length >= 4) {
                const httpMethodArg = args[2];
                const httpPathArg = args[3];
                if (ts.isStringLiteral(httpMethodArg) && ts.isStringLiteral(httpPathArg)) {
                    const methodName = tsFindEnclosingMethodName(node);
                    if (methodName) {
                        const publicName = methodName.replace(/^__/, "");
                        endpoints.push({
                            httpMethod: httpMethodArg.text,
                            httpPath: normalizePathParams(httpPathArg.text),
                            methodChain: [...methodChainPrefix, publicName],
                            methodName: publicName,
                        });
                    }
                }
            }
        }
        ts.forEachChild(node, visit);
    }

    visit(sourceFile);
    return endpoints;
}

function tsDeriveMethodChain(filePath: string): string[] {
    const normalized = filePath.replace(/\\/g, "/");
    const match = normalized.match(/\/resources\/(.+?)\/client\/Client\.ts$/);
    if (!match) return [];
    return match[1].split("/resources/");
}

function tsFindEnclosingMethodName(node: ts.Node): string | null {
    let current: ts.Node | undefined = node.parent;
    while (current) {
        if (ts.isMethodDeclaration(current) && current.name && ts.isIdentifier(current.name)) {
            return current.name.text;
        }
        current = current.parent;
    }
    return null;
}

function tsExtractTestExamples(filePath: string): TestExample[] {
    const source = fs.readFileSync(filePath, "utf-8");
    const sourceFile = ts.createSourceFile(filePath, source, ts.ScriptTarget.Latest, true);
    const examples: TestExample[] = [];
    let describeBlock = "";

    function visit(node: ts.Node) {
        if (tsIsCallTo(node, "describe")) {
            const call = node as ts.CallExpression;
            if (call.arguments.length >= 1 && ts.isStringLiteral(call.arguments[0])) {
                describeBlock = call.arguments[0].text;
            }
        }

        // Only extract "(1)" tests — the success cases
        if (tsIsCallTo(node, "test")) {
            const call = node as ts.CallExpression;
            if (call.arguments.length >= 2 && ts.isStringLiteral(call.arguments[0])) {
                const testName = call.arguments[0].text;
                const nameMatch = testName.match(/^(.+?)\s*\(1\)$/);
                if (nameMatch) {
                    const methodName = nameMatch[1].trim();
                    const example = tsExtractFromTestBody(call.arguments[1], methodName, describeBlock, source);
                    if (example) examples.push(example);
                }
            }
        }

        ts.forEachChild(node, visit);
    }

    visit(sourceFile);
    return examples;
}

function tsExtractFromTestBody(
    callbackNode: ts.Node,
    methodName: string,
    describeBlock: string,
    fullSource: string,
): TestExample | null {
    let body: ts.Node | undefined;
    if (ts.isArrowFunction(callbackNode) || ts.isFunctionExpression(callbackNode)) {
        body = callbackNode.body;
    }
    if (!body || !ts.isBlock(body)) return null;

    let requestBody: unknown | null = null;
    let responseBody: unknown | null = null;
    let httpMethod: string | null = null;
    let httpPath: string | null = null;
    let sdkCallArgs: unknown[] = [];
    let sdkCallSource = "";

    for (const stmt of body.statements) {
        if (ts.isVariableStatement(stmt)) {
            for (const decl of stmt.declarationList.declarations) {
                if (ts.isIdentifier(decl.name)) {
                    if (decl.name.text === "rawRequestBody" && decl.initializer) {
                        requestBody = tsEvalObjectLiteral(decl.initializer, fullSource);
                    }
                    if (decl.name.text === "rawResponseBody" && decl.initializer) {
                        responseBody = tsEvalObjectLiteral(decl.initializer, fullSource);
                    }
                }
                // SDK call in variable assignment
                if (decl.initializer) {
                    const callInfo = tsExtractSdkCall(decl.initializer, fullSource);
                    if (callInfo) {
                        sdkCallArgs = callInfo.args;
                        sdkCallSource = callInfo.source;
                    }
                }
            }
        }

        if (ts.isExpressionStatement(stmt)) {
            const mockInfo = tsExtractMockEndpoint(stmt.expression);
            if (mockInfo) {
                httpMethod = mockInfo.method;
                httpPath = mockInfo.path;
            }
            const callInfo = tsExtractSdkCall(stmt.expression, fullSource);
            if (callInfo) {
                sdkCallArgs = callInfo.args;
                sdkCallSource = callInfo.source;
            }
        }
    }

    if (!httpMethod || !httpPath) return null;
    return { httpMethod, httpPath, methodName, describeBlock, requestBody, responseBody, sdkCallArgs, sdkCallSource };
}

function tsExtractMockEndpoint(node: ts.Node): { method: string; path: string } | null {
    const httpMethods = ["get", "post", "put", "delete", "patch"];

    function findInChain(n: ts.Node): { method: string; path: string } | null {
        if (ts.isCallExpression(n)) {
            if (ts.isPropertyAccessExpression(n.expression)) {
                const name = n.expression.name.text;
                if (httpMethods.includes(name) && n.arguments.length >= 1) {
                    const arg = n.arguments[0];
                    if (ts.isStringLiteral(arg)) {
                        return { method: name.toUpperCase(), path: arg.text };
                    }
                }
            }
            if (ts.isPropertyAccessExpression(n.expression)) {
                const result = findInChain(n.expression.expression);
                if (result) return result;
            }
            const result = findInChain(n.expression);
            if (result) return result;
        }
        return null;
    }

    return findInChain(node);
}

function tsExtractSdkCall(node: ts.Node, fullSource: string): { args: unknown[]; source: string } | null {
    function findClientCall(n: ts.Node): ts.CallExpression | null {
        if (ts.isCallExpression(n)) {
            const chain = tsGetPropertyAccessChain(n.expression);
            if (chain.length > 0 && chain[0] === "client") return n;
        }
        if (ts.isAwaitExpression(n)) return findClientCall(n.expression);
        return null;
    }

    const callExpr = findClientCall(node);
    if (!callExpr) return null;
    const args = callExpr.arguments.map((arg) => tsEvalObjectLiteral(arg, fullSource));
    const source = fullSource.slice(callExpr.pos, callExpr.end).trim();
    return { args, source };
}

function tsGetPropertyAccessChain(node: ts.Node): string[] {
    if (ts.isIdentifier(node)) return [node.text];
    if (ts.isPropertyAccessExpression(node)) {
        return [...tsGetPropertyAccessChain(node.expression), node.name.text];
    }
    return [];
}

function tsIsCallTo(node: ts.Node, fnName: string): boolean {
    return ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === fnName;
}

function tsEvalObjectLiteral(node: ts.Node, fullSource: string): unknown {
    if (ts.isObjectLiteralExpression(node)) {
        const obj: Record<string, unknown> = {};
        for (const prop of node.properties) {
            if (ts.isPropertyAssignment(prop)) {
                const key = tsGetPropertyName(prop.name);
                if (key !== null) obj[key] = tsEvalObjectLiteral(prop.initializer, fullSource);
            }
            if (ts.isShorthandPropertyAssignment(prop)) obj[prop.name.text] = `<${prop.name.text}>`;
        }
        return obj;
    }
    if (ts.isArrayLiteralExpression(node)) return node.elements.map((el) => tsEvalObjectLiteral(el, fullSource));
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (node.kind === ts.SyntaxKind.NullKeyword) return null;
    if (node.kind === ts.SyntaxKind.UndefinedKeyword) return undefined;
    return `<expr:${fullSource.slice(node.pos, node.end).trim()}>`;
}

function tsGetPropertyName(node: ts.PropertyName): string | null {
    if (ts.isIdentifier(node)) return node.text;
    if (ts.isStringLiteral(node)) return node.text;
    if (ts.isNumericLiteral(node)) return node.text;
    return null;
}

// ============================================================
// Python parser
// ============================================================

function createPythonParser(): LanguageParser {
    return {
        language: "python",

        parseEndpoints(rootDir: string): EndpointMapping[] {
            // Find the package directory: src/{package_name}/
            const srcDir = path.join(rootDir, "src");
            if (!fs.existsSync(srcDir)) {
                console.error("  WARNING: No src/ directory found");
                return [];
            }
            const pkgDir = fs
                .readdirSync(srcDir, { withFileTypes: true })
                .find((e) => e.isDirectory() && !e.name.startsWith("_") && !e.name.startsWith("."))?.name;
            if (!pkgDir) {
                console.error("  WARNING: Could not find Python package directory");
                return [];
            }

            const pkgRoot = path.join(srcDir, pkgDir);
            const clientFiles = findFiles(pkgRoot, /raw_client\.py$/);
            const endpoints: EndpointMapping[] = [];
            for (const file of clientFiles) {
                const fileEndpoints = pyExtractEndpoints(file, pkgRoot);
                endpoints.push(...fileEndpoints);
                console.error(`  ${path.relative(rootDir, file)}: ${fileEndpoints.length} endpoints`);
            }
            return endpoints;
        },

        parseTestExamples(rootDir: string): TestExample[] {
            // Load WireMock mappings for response bodies
            const wiremockPath = path.join(rootDir, "wiremock", "wiremock-mappings.json");
            const wiremockMap = new Map<string, { responseBody: unknown }>();
            if (fs.existsSync(wiremockPath)) {
                const mappings = JSON.parse(fs.readFileSync(wiremockPath, "utf-8")).mappings as Array<{
                    request: { urlPathTemplate: string; method: string };
                    response: { body?: string; status: number };
                }>;
                for (const m of mappings) {
                    const key = `${m.request.method} ${normalizePathParams(m.request.urlPathTemplate)}`;
                    let responseBody: unknown = null;
                    if (m.response.body) {
                        try { responseBody = JSON.parse(m.response.body); } catch { responseBody = m.response.body; }
                    }
                    wiremockMap.set(key, { responseBody });
                }
                console.error(`  Loaded ${wiremockMap.size} WireMock mappings`);
            }

            // Parse test files for SDK calls
            const testDir = path.join(rootDir, "tests/wire");
            if (!fs.existsSync(testDir)) {
                console.error("  No wire test directory found");
                return [];
            }
            const testFiles = findFiles(testDir, /test_.*\.py$/);
            if (testFiles.length === 0) {
                console.error("  No wire test files found");
                return [];
            }
            const examples: TestExample[] = [];
            for (const file of testFiles) {
                const fileExamples = pyExtractTestExamples(file, wiremockMap);
                examples.push(...fileExamples);
                console.error(`  ${path.relative(rootDir, file)}: ${fileExamples.length} examples`);
            }
            return examples;
        },
    };
}

function pyExtractEndpoints(filePath: string, pkgRoot: string): EndpointMapping[] {
    const source = fs.readFileSync(filePath, "utf-8");
    const lines = source.split("\n");

    const relativePath = path.relative(pkgRoot, filePath).replace(/\\/g, "/");
    const chain = pyDeriveMethodChain(relativePath);
    if (chain.includes("core")) return [];

    const endpoints: EndpointMapping[] = [];
    let currentMethod: string | null = null;
    let inSyncClass = false;
    // Track methods we've already extracted to deduplicate (sync vs async)
    const seen = new Set<string>();

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Track sync vs async class — only parse the sync class
        if (/^class\s+AsyncRaw\w+Client/.test(line)) {
            inSyncClass = false;
            continue;
        }
        if (/^class\s+Raw\w+Client/.test(line)) {
            inSyncClass = true;
            continue;
        }

        if (!inSyncClass) continue;

        // Find method definitions (skip __init__ and private methods)
        const methodMatch = line.match(/^\s{4}def\s+(\w+)\s*\(/);
        if (methodMatch && !methodMatch[1].startsWith("_")) {
            currentMethod = methodMatch[1];
        }

        // Find httpx_client.request() or httpx_client.stream() call
        if (currentMethod && /self\._client_wrapper\.httpx_client\.(request|stream)\s*\(/.test(line)) {
            const httpPath = pyExtractRequestPath(lines, i);
            const httpMethod = pyExtractHttpMethod(lines, i);

            if (httpPath && httpMethod) {
                const key = `${httpMethod} ${httpPath}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    endpoints.push({
                        httpMethod,
                        httpPath: normalizePath(httpPath),
                        methodChain: [...chain, currentMethod],
                        methodName: currentMethod,
                    });
                }
            }
            currentMethod = null;
        }
    }

    return endpoints;
}

function pyDeriveMethodChain(relativePath: string): string[] {
    // "cohort/raw_client.py" → ["cohort"]
    // "agent/resources/prompts/raw_client.py" → ["agent", "prompts"]
    // "tools/resources/mcp_server/raw_client.py" → ["tools", "mcp_server"]
    const parts = relativePath.replace(/\/raw_client\.py$/, "").split("/");
    return parts.filter((p) => p !== "resources");
}

function pyExtractRequestPath(lines: string[], startLine: number): string | null {
    // Scan forward from the request() call to find the path argument.
    // It's the first positional argument, on the same line or next few lines.
    for (let i = startLine; i < Math.min(startLine + 5, lines.length); i++) {
        const line = lines[i].trim();
        // f-string path: f"path/{jsonable_encoder(id)}"
        const fMatch = line.match(/f"([^"]+)"/);
        if (fMatch) {
            return fMatch[1]
                .replace(/\{jsonable_encoder\((\w+)\)\}/g, "{$1}")
                .replace(/\{url_encode\((\w+)\)\}/g, "{$1}");
        }
        // Simple string path: "path/here"  (but not method="POST" or headers=)
        const simpleMatch = line.match(/^"([^"]+)"\s*,/);
        if (simpleMatch && !line.includes("=")) return simpleMatch[1];
    }
    return null;
}

function pyExtractHttpMethod(lines: string[], startLine: number): string | null {
    for (let i = startLine; i < Math.min(startLine + 15, lines.length); i++) {
        const match = lines[i].match(/method\s*=\s*"(\w+)"/);
        if (match) return match[1];
    }
    return null;
}

function pyExtractTestExamples(
    filePath: string,
    wiremockMap: Map<string, { responseBody: unknown }>,
): TestExample[] {
    const source = fs.readFileSync(filePath, "utf-8");
    const lines = source.split("\n");
    const examples: TestExample[] = [];

    // Pattern: def test_resource_method() -> None:
    //   ...
    //   client.resource.method(param=value, ...)
    //   verify_request_count(test_id, "METHOD", "/path", query_params, 1)
    for (let i = 0; i < lines.length; i++) {
        const testMatch = lines[i].match(/^def\s+(test_\w+)\s*\(\s*\)/);
        if (!testMatch) continue;

        let httpMethod: string | null = null;
        let httpPath: string | null = null;
        let sdkCallSource = "";

        for (let j = i + 1; j < Math.min(i + 60, lines.length); j++) {
            const line = lines[j].trim();
            // Next test function = end of this test
            if (/^def\s+test_/.test(line)) break;

            // verify_request_count(test_id, "METHOD", "/path", ...)
            const verifyMatch = line.match(/verify_request_count\s*\([^,]+,\s*"(\w+)"\s*,\s*"([^"]+)"/);
            if (verifyMatch) {
                httpMethod = verifyMatch[1];
                httpPath = verifyMatch[2];
            }

            // SDK call: client.resource.method(...)
            const sdkMatch = line.match(/(client\.\w[\w.]*\(.*)/);
            if (sdkMatch && !sdkCallSource) {
                sdkCallSource = sdkMatch[1];
                if (!isBalancedParens(sdkCallSource)) {
                    for (let k = j + 1; k < Math.min(j + 30, lines.length); k++) {
                        sdkCallSource += "\n" + lines[k];
                        if (isBalancedParens(sdkCallSource)) break;
                    }
                }
                sdkCallSource = sdkCallSource.trim();
            }
        }

        if (httpMethod && httpPath) {
            // Look up response body from WireMock mappings (template match)
            let responseBody: unknown = null;
            const exactKey = `${httpMethod} ${httpPath}`;
            const wmEntry = wiremockMap.get(exactKey);
            if (wmEntry) {
                responseBody = wmEntry.responseBody;
            } else {
                // Try template matching (concrete path like /agent/id → /agent/{id})
                for (const [wmKey, wm] of wiremockMap) {
                    if (!wmKey.startsWith(httpMethod + " ")) continue;
                    const wmPath = wmKey.slice(httpMethod.length + 1);
                    const wmSegs = wmPath.split("/");
                    const concreteSegs = httpPath.split("/");
                    if (wmSegs.length !== concreteSegs.length) continue;
                    let matches = true;
                    for (let s = 0; s < wmSegs.length; s++) {
                        if (wmSegs[s].startsWith("{") && wmSegs[s].endsWith("}")) continue;
                        if (wmSegs[s] !== concreteSegs[s]) { matches = false; break; }
                    }
                    if (matches) { responseBody = wm.responseBody; break; }
                }
            }

            const methodName = testMatch[1].replace(/^test_\w+?_/, "").replace(/_$/, "");
            examples.push({
                httpMethod,
                httpPath,
                methodName,
                describeBlock: "",
                requestBody: null,
                responseBody,
                sdkCallArgs: [],
                sdkCallSource,
            });
        }
    }

    return examples;
}

// ============================================================
// Java parser
// ============================================================

function createJavaParser(): LanguageParser {
    return {
        language: "java",

        parseEndpoints(rootDir: string): EndpointMapping[] {
            const javaDir = path.join(rootDir, "src/main/java");
            if (!fs.existsSync(javaDir)) {
                console.error("  WARNING: No src/main/java/ directory found");
                return [];
            }
            const rawClientFiles = findFiles(javaDir, /Raw\w+Client\.java$/);
            if (rawClientFiles.length === 0) {
                console.error("  WARNING: No RawClient files found");
                return [];
            }

            // Find the resources base directory
            const resourcesDir = javaFindResourcesDir(rawClientFiles);
            const endpoints: EndpointMapping[] = [];
            for (const file of rawClientFiles) {
                const fileEndpoints = javaExtractEndpoints(file, resourcesDir);
                endpoints.push(...fileEndpoints);
                console.error(`  ${path.relative(rootDir, file)}: ${fileEndpoints.length} endpoints`);
            }
            return endpoints;
        },

        parseTestExamples(rootDir: string): TestExample[] {
            // Wire tests are *WireTest.java files in src/test/
            const candidates = [path.join(rootDir, "src/test"), path.join(rootDir, "tests/wire")];
            for (const testDir of candidates) {
                if (!fs.existsSync(testDir)) continue;
                const wireTests = findFiles(testDir, /WireTest\.java$/);
                if (wireTests.length === 0) continue;

                const examples: TestExample[] = [];
                for (const file of wireTests) {
                    const fileExamples = javaExtractTestExamples(file);
                    // Tag each example with its source file name for chain-based matching
                    const fileName = path.basename(file);
                    for (const ex of fileExamples) {
                        ex.describeBlock = fileName;
                    }
                    examples.push(...fileExamples);
                    console.error(`  ${path.relative(rootDir, file)}: ${fileExamples.length} examples`);
                }
                return examples;
            }

            console.error("  No wire test files found");
            return [];
        },
    };
}

function javaFindResourcesDir(rawClientFiles: string[]): string {
    // Find the common "resources" parent directory
    for (const f of rawClientFiles) {
        const idx = f.indexOf("/resources/");
        if (idx >= 0) return f.substring(0, idx + "/resources".length);
    }
    // Fallback: use the first file's parent
    return path.dirname(rawClientFiles[0]);
}

function javaExtractEndpoints(filePath: string, resourcesDir: string): EndpointMapping[] {
    const source = fs.readFileSync(filePath, "utf-8");
    const lines = source.split("\n");
    const chain = javaDeriveMethodChain(filePath, resourcesDir);
    const endpoints: EndpointMapping[] = [];

    // Parse method by method: find public methods with HTTP implementations
    let currentMethod: string | null = null;
    let pathSegments: string[] = [];
    let httpMethod: string | null = null;
    let collectingPath = false;
    let braceDepth = 0;
    let methodBraceDepth = 0;
    const seen = new Set<string>();

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Track brace depth for method boundaries
        for (const ch of line) {
            if (ch === "{") braceDepth++;
            if (ch === "}") braceDepth--;
        }

        // Find method definition (only methods that return PhenomlClientHttpResponse)
        const methodMatch = line.match(
            /public\s+PhenomlClientHttpResponse<[^>]+>\s+(\w+)\s*\(/,
        );
        if (methodMatch) {
            // Save previous method if it had HTTP details
            if (currentMethod && httpMethod && pathSegments.length > 0) {
                const httpPath = normalizePath(pathSegments.join("/"));
                const key = `${httpMethod} ${httpPath}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    endpoints.push({ httpMethod, httpPath, methodChain: [...chain, currentMethod], methodName: currentMethod });
                }
            }
            currentMethod = methodMatch[1];
            pathSegments = [];
            httpMethod = null;
            collectingPath = false;
            methodBraceDepth = braceDepth;
        }

        // Reset on method exit (brace depth returns to pre-method level)
        if (currentMethod && braceDepth < methodBraceDepth) {
            if (httpMethod && pathSegments.length > 0) {
                const httpPath = normalizePath(pathSegments.join("/"));
                const key = `${httpMethod} ${httpPath}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    endpoints.push({ httpMethod, httpPath, methodChain: [...chain, currentMethod], methodName: currentMethod });
                }
            }
            currentMethod = null;
        }

        if (!currentMethod) continue;

        // Detect URL builder start
        if (line.includes(".newBuilder()")) {
            collectingPath = true;
            pathSegments = [];
        }

        if (collectingPath) {
            // .addPathSegments("path/here")
            const segsMatch = line.match(/\.addPathSegments\s*\(\s*"([^"]+)"\s*\)/);
            if (segsMatch) pathSegments.push(segsMatch[1]);

            // .addPathSegment(paramName)
            const segMatch = line.match(/\.addPathSegment\s*\(\s*(\w+)\s*\)/);
            if (segMatch) pathSegments.push(`{${camelToSnake(segMatch[1])}}`);

            if (line.includes(".build()")) collectingPath = false;
        }

        // .method("POST", body)
        const httpMethodMatch = line.match(/\.method\s*\(\s*"(\w+)"\s*,/);
        if (httpMethodMatch) httpMethod = httpMethodMatch[1];
    }

    // Save final method
    if (currentMethod && httpMethod && pathSegments.length > 0) {
        const httpPath = normalizePath(pathSegments.join("/"));
        const key = `${httpMethod} ${httpPath}`;
        if (!seen.has(key)) {
            seen.add(key);
            endpoints.push({ httpMethod, httpPath, methodChain: [...chain, currentMethod], methodName: currentMethod });
        }
    }

    return endpoints;
}

function javaDeriveMethodChain(filePath: string, resourcesDir: string): string[] {
    const relativePath = path.relative(resourcesDir, filePath).replace(/\\/g, "/");
    const parts = relativePath.split("/");
    parts.pop(); // Remove filename
    return parts;
}

function javaExtractTestExamples(filePath: string): TestExample[] {
    const source = fs.readFileSync(filePath, "utf-8");
    const lines = source.split("\n");
    const examples: TestExample[] = [];

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() !== "@Test") continue;

        let methodName: string | null = null;
        for (let k = i + 1; k < Math.min(i + 3, lines.length); k++) {
            const methodMatch = lines[k].match(/public\s+void\s+test(\w+)\s*\(/);
            if (methodMatch) {
                methodName = methodMatch[1][0].toLowerCase() + methodMatch[1].slice(1);
                i = k;
                break;
            }
        }
        if (!methodName) continue;

        let httpMethod: string | null = null;
        let sdkCallSource = "";
        let requestBody: unknown = null;
        let responseBody: unknown = null;
        let mockResponseCount = 0;

        for (let j = i + 1; j < Math.min(i + 200, lines.length); j++) {
            const line = lines[j].trim();
            if (line === "@Test") break;

            // Count mock responses (first=OAuth, second=actual)
            if (line.includes("server.enqueue")) {
                mockResponseCount++;
                if (mockResponseCount === 2) {
                    const bodyStr = javaExtractSetBody(lines, j);
                    if (bodyStr) {
                        try { responseBody = JSON.parse(bodyStr); } catch { responseBody = bodyStr; }
                    }
                }
            }

            // HTTP method: Assertions.assertEquals("POST", request.getMethod())
            const methodAssert = line.match(/assertEquals\s*\(\s*"(\w+)"\s*,\s*request\.getMethod\(\)/);
            if (methodAssert) httpMethod = methodAssert[1];

            // expectedRequestBody string
            if (line.includes("expectedRequestBody") && line.includes("=")) {
                const bodyStr = javaExtractConcatenatedString(lines, j);
                if (bodyStr) {
                    try { requestBody = JSON.parse(bodyStr); } catch { /* skip */ }
                }
            }

            // expectedResponseBody string (more reliable than mock)
            if (line.includes("expectedResponseBody") && line.includes("=")) {
                const bodyStr = javaExtractConcatenatedString(lines, j);
                if (bodyStr) {
                    try { responseBody = JSON.parse(bodyStr); } catch { /* keep mock version */ }
                }
            }

            // SDK call: ... = client.resource().method(...)
            // May span multiple lines with chained calls like client.tools()\n.mcpServer()\n.create(...)
            const sdkMatch = line.match(/(client\.\w[\w.()]*\(.*)/);
            if (sdkMatch && !sdkCallSource) {
                sdkCallSource = sdkMatch[1];
                for (let k = j + 1; k < Math.min(j + 30, lines.length); k++) {
                    const nextTrimmed = lines[k].trim();
                    // Continue if parens unbalanced or next line is a chained call
                    if (!isBalancedParens(sdkCallSource) || nextTrimmed.startsWith(".")) {
                        sdkCallSource += "\n" + lines[k];
                    } else {
                        break;
                    }
                }
                sdkCallSource = sdkCallSource.trim();
                if (sdkCallSource.endsWith(";")) sdkCallSource = sdkCallSource.slice(0, -1);
            }
        }

        if (httpMethod) {
            examples.push({
                httpMethod,
                httpPath: "",
                methodName,
                describeBlock: "",
                requestBody,
                responseBody,
                sdkCallArgs: [],
                sdkCallSource,
            });
        }
    }

    return examples;
}

function javaExtractSetBody(lines: string[], startLine: number): string | null {
    let combined = "";
    for (let i = startLine; i < Math.min(startLine + 10, lines.length); i++) {
        combined += lines[i];
        const match = combined.match(/\.setBody\s*\(\s*"((?:[^"\\]|\\.)*)"\s*\)/);
        if (match) {
            return match[1].replace(/\\"/g, '"').replace(/\\n/g, "\n").replace(/\\\\/g, "\\");
        }
    }
    return null;
}

function javaExtractConcatenatedString(lines: string[], startLine: number): string | null {
    let combined = "";
    for (let i = startLine; i < Math.min(startLine + 50, lines.length); i++) {
        combined += lines[i] + "\n";
        if (lines[i].trim().endsWith(";")) break;
    }
    const parts: string[] = [];
    const stringLiteralPattern = /"((?:[^"\\]|\\.)*)"/g;
    let m;
    while ((m = stringLiteralPattern.exec(combined)) !== null) {
        parts.push(m[1].replace(/\\"/g, '"').replace(/\\n/g, "\n").replace(/\\\\/g, "\\"));
    }
    if (parts.length === 0) return null;
    return parts.join("");
}

// ============================================================
// Shared helpers
// ============================================================

function sumLineOffsets(lines: string[], lineIndex: number): number {
    let offset = 0;
    for (let i = 0; i < lineIndex; i++) offset += lines[i].length + 1; // +1 for newline
    return offset;
}

function isBalancedParens(str: string): boolean {
    let depth = 0;
    for (const ch of str) {
        if (ch === "(") depth++;
        if (ch === ")") depth--;
        if (depth < 0) return false;
    }
    return depth === 0;
}

// ============================================================
// Manifest builder
// ============================================================

function findTemplateMatch(
    httpMethod: string,
    concretePath: string,
    endpointMap: Map<string, EndpointMapping>,
): EndpointMapping | undefined {
    const concreteSegments = concretePath.split("/");
    for (const [, endpoint] of endpointMap) {
        if (endpoint.httpMethod !== httpMethod) continue;
        const templateSegments = endpoint.httpPath.split("/");
        if (templateSegments.length !== concreteSegments.length) continue;
        let matches = true;
        for (let i = 0; i < templateSegments.length; i++) {
            const tmpl = templateSegments[i];
            const concrete = concreteSegments[i];
            if (tmpl.startsWith("{") && tmpl.endsWith("}")) continue;
            if (tmpl !== concrete) {
                matches = false;
                break;
            }
        }
        if (matches) return endpoint;
    }
    return undefined;
}

function buildManifest(
    allEndpoints: EndpointMapping[],
    allExamples: TestExample[],
    language: Language,
    packageName: string,
    metadata: FernMetadata,
): Manifest {
    const endpointMap = new Map<string, EndpointMapping>();
    // Secondary index for chain-based matching (Java tests don't have httpPath)
    // Key: method chain prefix (all but last segment) joined without separator + "." + method name
    const chainIndex = new Map<string, EndpointMapping>();
    for (const ep of allEndpoints) {
        endpointMap.set(`${ep.httpMethod} ${ep.httpPath}`, ep);
        const prefix = ep.methodChain.slice(0, -1).join("");
        chainIndex.set(`${prefix}.${ep.methodName}`, ep);
    }

    const manifest: Manifest = {
        metadata: {
            language,
            packageName,
            sdkVersion: metadata.sdkVersion,
            specCommit: metadata.originGitCommit || "unknown",
            generatorVersion: metadata.generatorName,
        },
        examples: {},
    };

    let matched = 0;
    let unmatched = 0;

    for (const example of allExamples) {
        const exactKey = `${example.httpMethod} ${example.httpPath}`;
        let endpoint = endpointMap.get(exactKey) ?? findTemplateMatch(example.httpMethod, example.httpPath, endpointMap);

        // Fallback: match by method chain (for Java tests that don't have httpPath)
        if (!endpoint && !example.httpPath && example.describeBlock) {
            const filePrefix = example.describeBlock.replace(/WireTest\.java$/, "").toLowerCase();
            const chainKey = `${filePrefix}.${example.methodName}`;
            endpoint = chainIndex.get(chainKey);
        }

        if (endpoint) {
            const key = `${endpoint.httpMethod} ${endpoint.httpPath}`;
            manifest.examples[key] = {
                httpMethod: endpoint.httpMethod,
                httpPath: endpoint.httpPath,
                sdkMethodChain: endpoint.methodChain,
                sdkMethodName: endpoint.methodName,
                request: { body: example.requestBody, sdkCallArgs: example.sdkCallArgs },
                response: { body: example.responseBody },
                sdkCallSource: example.sdkCallSource,
            };
            matched++;
        } else {
            console.error(`  WARNING: No endpoint match for test: ${exactKey}`);
            unmatched++;
        }
    }

    const coveredKeys = new Set(Object.keys(manifest.examples));
    const uncovered = allEndpoints.filter((ep) => !coveredKeys.has(`${ep.httpMethod} ${ep.httpPath}`));
    if (uncovered.length > 0) {
        console.error(`\n  Endpoints without test coverage:`);
        for (const ep of uncovered) {
            console.error(`    ${ep.httpMethod} ${ep.httpPath} (${ep.methodChain.join(".")})`);
        }
    }

    console.error(`\n  Matched: ${matched}, Unmatched: ${unmatched}`);
    console.error(`  Coverage: ${matched}/${allEndpoints.length} endpoints have examples`);
    return manifest;
}

// ============================================================
// Main
// ============================================================

function parseArgs(): { rootDir: string; language?: Language } {
    const args = process.argv.slice(2);
    let rootDir = process.cwd();
    let language: Language | undefined;
    for (let i = 0; i < args.length; i++) {
        if (args[i] === "--root" && args[i + 1]) rootDir = args[++i];
        if (args[i] === "--language" && args[i + 1]) language = args[++i] as Language;
    }
    return { rootDir, language };
}

async function main() {
    const { rootDir, language: languageOverride } = parseArgs();

    let language: Language;
    let metadata: FernMetadata;

    const metadataPath = path.join(rootDir, ".fern", "metadata.json");
    if (fs.existsSync(metadataPath)) {
        const detected = detectLanguage(rootDir);
        language = languageOverride ?? detected.language;
        metadata = detected.metadata;
    } else if (languageOverride) {
        language = languageOverride;
        metadata = { generatorName: `fernapi/fern-${language}-sdk`, sdkVersion: "unknown", originGitCommit: "unknown" };
        console.error(`WARNING: No .fern/metadata.json found, using --language ${language}`);
    } else {
        throw new Error("No .fern/metadata.json found and no --language specified");
    }

    console.error(`Language: ${language} (${metadata.generatorName})\n`);

    const parser: LanguageParser =
        language === "typescript"
            ? createTypeScriptParser()
            : language === "python"
              ? createPythonParser()
              : createJavaParser();

    // Phase 1: Extract endpoint mappings from client source
    console.error("Phase 1: Parsing client source files...");
    const allEndpoints = parser.parseEndpoints(rootDir);
    console.error(`  Total: ${allEndpoints.length} endpoints\n`);

    // Phase 2: Extract examples from wire tests
    console.error("Phase 2: Parsing wire test files...");
    const allExamples = parser.parseTestExamples(rootDir);
    console.error(`  Total: ${allExamples.length} examples\n`);

    // Phase 3: Build manifest
    console.error("Phase 3: Building manifest...");
    const packageName = getPackageName(rootDir, language);
    const manifest = buildManifest(allEndpoints, allExamples, language, packageName, metadata);

    // Write manifest
    const outputPath = path.join(rootDir, "code-examples.json");
    fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2) + "\n");
    console.error(`\nManifest written to ${outputPath}`);
}

main().catch((err) => {
    console.error("Error:", err);
    process.exit(1);
});

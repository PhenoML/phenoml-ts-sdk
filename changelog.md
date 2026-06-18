## [17.6.0] - 2026-06-18
### Added
- **`phenoml.agent.ConflictError`** — new typed error class thrown by `client.agent.chat.send()` and `client.agent.chat.stream()` for HTTP 409 responses when a session already has an active turn.

### Changed
- **`AgentChatRequest.session_id`** and **`AgentStreamChatRequest.session_id`** — JSDoc now states that only one request may be active per session at a time and overlapping turns return `409 Conflict`.
- **`client.fhir2Omop.create()`** — JSDoc now lists the supported FHIR resource-to-OMOP table mappings and clarifies that unsupported resource types are accepted but ignored.
- **`CreateOmopResponse.dropped`** — JSDoc now clarifies that only supported resources missing required subject/patient, code, or medication reference data appear in `dropped`; unsupported resource types are ignored.

## [17.5.0] - 2026-06-15
### Added
- **`Provider.Aidbox`** — `"aidbox"` is now a supported value in the `fhirProvider` `Provider` enum.

## [17.4.0] - 2026-06-15
### Added
- **`ConditionOccurrenceRow.visit_occurrence_id`**, **`DrugExposureRow.visit_occurrence_id`**, **`MeasurementRow.visit_occurrence_id`**, **`ObservationRow.visit_occurrence_id`**, and **`ProcedureOccurrenceRow.visit_occurrence_id`** — new optional field linking each clinical OMOP row back to its `visit_occurrence` row.
- **`MeasurementRow.operator_concept_id`** — new optional field carrying the OMOP "Meas Value Operator" standard concept (`<`, `<=`, `>`, `>=`) parsed from a FHIR `valueQuantity.comparator` or numeric-string value; `0` when no operator is present.

### Changed
- **`MappingEntry.target_code`** — value semantics updated: now the standard concept's own code for `ALREADY_STANDARD`, `MAPPED`, and `UNCHECKED` rows; omitted only for `UNMAPPED` rows.
- **`Summary`** — count-field docs clarify each `codes_*` total is counted once per resolved concept (not per coding), unlike `mappings`, which has one entry per coding.
- **`client.fhir2Omop.create()` docstring** — clarifies that a clinical `concept_id` of `0` covers both `UNMAPPED` and `UNCHECKED`, and that `operator_concept_id` is the one non-zero non-resolved concept on measurement rows.

## [17.3.0] - 2026-06-15
### Added
- **`client.fhir2Omop`** — new service client exposing `create()` to map FHIR R4 resources or Bundles to OMOP CDM v5.4 rows via `POST /fhir2omop/create`, supporting `resolved` and `structural` resolution modes.
- **`phenoml.fhir2Omop.OmopTables`** and typed row types (`PersonRow`, `VisitOccurrenceRow`, `ConditionOccurrenceRow`, `DrugExposureRow`, `ProcedureOccurrenceRow`, `MeasurementRow`, `ObservationRow`) — fully typed OMOP CDM v5.4 table output grouped by destination table.
- **`phenoml.fhir2Omop.MappingEntry`** / **`MappingReportEntry`** / **`ScanSummary`** / **`DroppedResource`** / **`Summary`** — per-coding resolution report, White Rabbit-style scan summary, and data-quality headline fields returned in the `create()` response.
- **`phenoml.fhir2Omop` typed errors** (`BadRequestError`, `UnauthorizedError`, `InternalServerError`, `ServiceUnavailableError`) — typed error classes thrown by `client.fhir2Omop.create()` for HTTP 400, 401, 500, and 503 responses.

### Fixed
- **`anySignal()`** — fixes a race condition where an `AbortSignal` that fired between the initial `aborted` check and `addEventListener` would silently fail to propagate to the combined controller.

## 17.2.0 - 2026-06-09
### Added
* **`phenoml.fhir2Omop.ScanSummary`** — five resolver-telemetry fields added (`resolved_vocab_version`, `concept_resolver_note`, `concepts_bridged`, `concept_candidates_truncated`, `construe_resolutions`) reporting the OMOP vocabulary release used and where concept resolution was degraded, bridged, truncated, or fell back to (and billed) the construe tier.
### Changed
* **`client.fhir2Omop.create()`** — now defaults to `mode: "resolved"`, filling clinical `concept_id`s via the concept-resolver service; the former structural-only behavior (all clinical `concept_id`s `0`) now occurs only when no resolver is configured and is reported as `mode: "structural"`.
* **`phenoml.fhir2Omop.MappingReportEntry.mapping_status`** — adds the `MAPPED` value, returned in resolved mode when a coding is mapped to a standard concept via the OMOP "Maps to" crosswalk or UMLS-CUI bridge.
* **`phenoml.fhir2Omop.MappingReportEntry.equivalence`** — field removed; per-coding mapping confidence is now conveyed by `mapping_status`. (Finalizes the fhir2omop response shape first shipped earlier today in 17.1.0.)
* **`phenoml.fhir2Omop.MappingReportEntry.target_code`** — now omitted for codings resolved directly by the concept-resolver (which returns the concept id/name/vocabulary but not its `concept_code`); still populated for structural / construe-tier matches.

## 17.1.0 - 2026-06-09
### Added
* **`client.fhir2Omop.create()`** — new method posting FHIR R4 resources or a Bundle to `POST /fhir2omop/create` and returning OMOP CDM v5.4 rows; structural mode only, so all clinical `concept_id`s are `0` (the vocabulary crosswalk is a later release).
* **`phenoml.fhir2Omop.CreateOmopRequest` / `CreateOmopResponse`** — request carries `fhir_resources` (single resource or Bundle); response exposes `tables`, `report`, and `scan_summary`.
* **`phenoml.fhir2Omop.OmopTables`** and the row types `PersonRow`, `ConditionOccurrenceRow`, `DrugExposureRow`, `MeasurementRow`, `ObservationRow`, `ProcedureOccurrenceRow`, `VisitOccurrenceRow` — typed OMOP CDM table output.
* **`phenoml.fhir2Omop.MappingReportEntry` / `DroppedResource` / `ScanSummary`** — Usagi-shaped per-coding mapping report and White Rabbit-style scan summary.

## 17.0.1 - 2026-06-06
### Fixed
* **`getResponseBody()` (`sse` / `streaming`)** — the returned `ReadableStream` now pins its parent `Response` via a non-enumerable `__fern_response_ref`, preventing undici's `FinalizationRegistry` from garbage-collecting the response and cancelling the body mid-stream; long-lived SSE/streaming consumers no longer see truncated streams.

## 17.0.0 - 2026-06-02
### Breaking Changes
* **`client.agent.chat()` / `streamChat()` / `getChatMessages()`** — removed from `AgentClient`; the three chat methods now live on a new `client.agent.chat` sub-client. Rewrite call sites as `client.agent.chat.send()` / `client.agent.chat.stream()` / `client.agent.chat.listMessages()`. HTTP routes are unchanged.
* **`phenoml.agent.GetChatMessagesRequest` / `GetChatMessagesResponse` / `GetChatMessagesRequestRole` / `GetChatMessagesRequestOrder`** — renamed to `ListMessagesRequest` / `ListMessagesResponse` / `ListMessagesRequestRole` / `ListMessagesRequestOrder` (still under `phenoml.agent`, now also under `phenoml.agent.chat`); enum values unchanged. Update imports.
* **`client.construe.uploadCodeSystem()` / `listCodeSystems()` / `getCodeSystem()` / `deleteCodeSystem()` / `exportCodeSystem()`** — removed from `ConstrueClient`; these now live on a new `client.construe.codeSystems` sub-client as `upload()` / `list()` / `find()` / `delete()` / `export()`. Rewrite call sites accordingly.
* **`client.construe.extractCodes()` / `listCodes()` / `getCode()` / `searchSemantic()` / `searchText()`** — removed from `ConstrueClient`; these now live on a new `client.construe.codes` sub-client as `extract()` / `list()` / `lookup()` / `searchSemantic()` / `searchText()`. Rewrite call sites accordingly. (`client.construe.submitFeedback()` remains on the parent client.)
* **`phenoml.construe.UploadCodeSystemResponse`** — renamed to `phenoml.construe.UploadResponse` (also exported from `phenoml.construe.codeSystems`); returned by `client.construe.codeSystems.upload()`. Update imports.
* **`phenoml.construe.GetCodeSystemRequest` / `DeleteCodeSystemRequest` / `ExportCodeSystemRequest`** — renamed to `FindRequest` / `DeleteRequest` / `ExportRequest` (parameters of the `codeSystems` sub-client methods). Update imports.
* **`phenoml.construe.ListCodesRequest` / `GetCodeRequest`** — renamed to `CodesListRequest` / `LookupRequest` (parameters of the `codes` sub-client methods). Update imports.
* **`client.fhirProvider.addAuthConfig()` / `setActiveAuthConfig()` / `removeAuthConfig()`** — removed from `FhirProviderClient`; these now live on a new `client.fhirProvider.authConfig` sub-client as `add()` / `setActive()` / `remove()`. Rewrite call sites accordingly.
* **`phenoml.fhirProvider.RemoveAuthConfigResponse`** — renamed to `phenoml.fhirProvider.RemoveResponse` and moved to the `phenoml.fhirProvider.authConfig` namespace; returned by `client.fhirProvider.authConfig.remove()`. Update imports.
* **`client.tools.mcpServer`** — removed; the sub-client was split into `client.tools.mcpServers` (`create()` / `list()` / `get()` / `delete()`) and `client.tools.mcpTools` (`list()` / `get()` / `delete()`). Rewrite `client.tools.mcpServer.*` call sites as `client.tools.mcpServers.*`, and the nested `client.tools.mcpServer.tools.*` call sites as `client.tools.mcpTools.*`.
* **`phenoml.summary.TemplatesListResponse` / `TemplatesGetResponse` / `TemplatesUpdateResponse` / `TemplatesDeleteResponse`** — renamed to `ListResponse` / `GetResponse` / `UpdateResponse` / `DeleteResponse` (the `Templates` prefix added in 16.0.0 is dropped; still under `phenoml.summary`, now also under `phenoml.summary.templates`). Update imports.
* **`phenoml.fhir.FhirResource` / `FhirBundle` / `SearchResponse` / `ErrorResponse`** — removed from the `fhir` namespace; the FHIR proxy is now opaque. Replace any imports with `Record<string, unknown>`, `unknown`, or your own local definitions.
* **`FhirClient.search()` / `create()` / `upsert()` / `delete()` / `patch()` / `executeBundle()`** — return type changed to `unknown`; the create/upsert request `body` changed from `phenoml.fhir.FhirResource` to optional `unknown`, and the executeBundle request `body` from `phenoml.fhir.FhirBundle` to optional `unknown`. Cast or validate the response and stop relying on the named body types.
* **`phenoml.fhir.SearchRequest.query_parameters`** — field removed; pass FHIR search parameters via the request-level `queryParams` option (the SDK escape hatch) instead of this typed field.
* **`phenoml.fhir.BadRequestError` / `UnauthorizedError` / `NotFoundError` / `InternalServerError` / `BadGatewayError` / `ServiceUnavailableError` / `TooManyRequestsError`** — all FHIR proxy error classes removed; these endpoints now throw the generic `phenomlError` on any non-2xx status. Remove imports and catch `phenomlError` (inspecting `statusCode`) instead.
* **`phenoml.lang2Fhir.FailedDependencyError`** — error class removed (the 424 response is gone); remove imports and 424-specific catch logic.
* **`phenoml.tools.FailedDependencyError`** — error class removed (the 424 response is gone); remove imports and 424-specific catch logic.
### Added
* **`client.agent.chat`** — new nested sub-client (`ChatClient`) exposing `send()`, `stream()`, and `listMessages()` for agent chat sessions.
* **`client.construe.codeSystems`** — new nested sub-client (`CodeSystemsClient`) exposing `upload()`, `list()`, `find()`, `delete()`, and `export()` for code-system management.
* **`client.construe.codes`** — new nested sub-client (`CodesClient`) exposing `extract()`, `list()`, `lookup()`, `searchSemantic()`, and `searchText()` for code operations.
* **`client.fhirProvider.authConfig`** — new nested sub-client (`AuthConfigClient`) exposing `add()`, `setActive()`, and `remove()` for FHIR provider auth configuration.
* **`client.tools.mcpServers`** and **`client.tools.mcpTools`** — new sub-clients (`McpServersClient`, `McpToolsClient`) replacing the former `client.tools.mcpServer` and its nested `tools` sub-client.
* **`phenoml.agent.GatewayTimeoutError`** — new error class thrown by the `client.agent.chat` methods on HTTP 504 responses.
* **`phenoml.lang2Fhir.NotFoundError`** — new error class thrown by `client.lang2Fhir.create()`, `createMulti()`, `document()`, and `documentMulti()` on HTTP 404 responses.
* **`phenoml.lang2Fhir.ClientClosedRequestError`** and **`phenoml.lang2Fhir.GatewayTimeoutError`** — new error classes thrown by `client.lang2Fhir.document()` and `documentMulti()` on HTTP 499 and 504 responses.
* **`phenoml.tools.NotFoundError`** — new error class available in the `tools` namespace.
### Changed
* **`client.agent.chat.send()` / `stream()` / `listMessages()`** — now also throw `phenoml.agent.NotFoundError` (404) and `phenoml.agent.GatewayTimeoutError` (504), which the former flat `agent.chat`/`streamChat`/`getChatMessages` methods did not surface.
* **`client.workflows.get()` / `update()` / `delete()`** — now throw `phenoml.workflows.GatewayTimeoutError` on HTTP 504 responses (previously only `client.workflows.execute()` did).

## 16.0.0 - 2026-05-25
### Breaking Changes
* **`client.summary.listTemplates()` / `createTemplate()` / `getTemplate()` / `updateTemplate()` / `deleteTemplate()`** — removed from `SummaryClient`; the five template CRUD methods now live on a new `client.summary.templates` sub-client. Rewrite call sites as `client.summary.templates.list()` / `create()` / `get(id)` / `update(id, ...)` / `delete(id)`. HTTP routes are unchanged.
* **`SummaryListTemplatesResponse` / `SummaryGetTemplateResponse` / `SummaryUpdateTemplateResponse` / `SummaryDeleteTemplateResponse`** — renamed to `TemplatesListResponse` / `TemplatesGetResponse` / `TemplatesUpdateResponse` / `TemplatesDeleteResponse`, now exported from `phenoml.summary.templates` (also re-exported from `phenoml.summary`). Update imports.
* **`client.authtoken.auth.getToken()`** — the intermediate `auth` sub-client was removed; call `client.authtoken.getToken()` directly. The `AuthClient` class is deleted; replace any direct imports with `AuthtokenClient`, and use `AuthtokenClient.RequestOptions` in place of `AuthClient.RequestOptions`.
* **`client.construe.listAvailableCodeSystems()` → `listCodeSystems()`** — method renamed.
* **`client.construe.getCodeSystemDetail()` → `getCodeSystem()`** — method renamed.
* **`client.construe.deleteCustomCodeSystem()` → `deleteCodeSystem()`** — method renamed.
* **`client.construe.exportCustomCodeSystem()` → `exportCodeSystem()`** — method renamed.
* **`client.construe.listCodesInACodeSystem()` → `listCodes()`** — method renamed.
* **`client.construe.getASpecificCode()` → `getCode()`** — method renamed.
* **`client.construe.semanticSearchEmbeddingBased()` → `searchSemantic()`** — method renamed.
* **`client.construe.terminologyServerTextSearch()` → `searchText()`** — method renamed.
* **`client.construe.submitFeedbackOnExtractionResults()` → `submitFeedback()`** — method renamed.
* **`client.lang2Fhir.extractMultipleFhirResourcesFromADocument()` → `documentMulti()`** — method renamed.
* **`phenoml.construe.*` request and response types** — redundant `Construe`/long-form prefixes dropped: `GetConstrueCodesSystemsCodesystemRequest` → `GetCodeSystemRequest`, `DeleteConstrueCodesSystemsCodesystemRequest` → `DeleteCodeSystemRequest`, `GetConstrueCodesSystemsCodesystemExportRequest` → `ExportCodeSystemRequest`, `GetConstrueCodesCodesystemRequest` → `ListCodesRequest`, `GetConstrueCodesCodesystemCodeIdRequest` → `GetCodeRequest`, `GetConstrueCodesCodesystemSearchSemanticRequest` → `SearchSemanticRequest`, `GetConstrueCodesCodesystemSearchTextRequest` → `SearchTextRequest`, `ConstrueUploadCodeSystemResponse` → `UploadCodeSystemResponse`. Update imports.
* **`phenoml.fhir.Fhir*Request` and FHIR response types** — `Fhir` prefix dropped: `FhirSearchRequest` → `SearchRequest`, `FhirCreateRequest` → `CreateRequest`, `FhirUpsertRequest` → `UpsertRequest`, `FhirDeleteRequest` → `DeleteRequest`, `FhirPatchRequest` → `PatchRequest`, `FhirExecuteBundleRequest` → `ExecuteBundleRequest`, `FhirSearchResponse` → `SearchResponse`, `FhirPatchRequestBodyItem` → `PatchRequestBodyItem`, `FhirPatchRequestBodyItemOp` → `PatchRequestBodyItemOp`. All still live under `phenoml.fhir`.
* **`phenoml.fhirProvider.FhirProviderDeleteResponse` / `FhirProviderRemoveAuthConfigResponse`** — renamed to `phenoml.fhirProvider.DeleteResponse` / `RemoveAuthConfigResponse`.
* **`phenoml.lang2Fhir.Lang2FhirUploadProfileResponse`** — renamed to `phenoml.lang2Fhir.UploadProfileResponse`.
* **`phenoml.agent.Agent*` request and response types** — `Agent` prefix dropped: `AgentListRequest` → `ListRequest`, `AgentListResponse` → `ListResponse`, `AgentDeleteResponse` → `DeleteResponse`, `AgentGetChatMessagesRequest` → `GetChatMessagesRequest`, `AgentGetChatMessagesResponse` → `GetChatMessagesResponse`, `AgentGetChatMessagesRequestRole` → `GetChatMessagesRequestRole`, `AgentGetChatMessagesRequestOrder` → `GetChatMessagesRequestOrder` (still under `phenoml.agent`; enum values unchanged).
* **`phenoml.workflows.Workflows*` request and response types** — `Workflows` prefix dropped: `WorkflowsListRequest` → `ListRequest`, `WorkflowsGetRequest` → `GetRequest`, `WorkflowsGetResponse` → `GetResponse`, `WorkflowsUpdateResponse` → `UpdateResponse`, `WorkflowsDeleteResponse` → `DeleteResponse` (still under `phenoml.workflows`).
### Added
* **`client.summary.templates`** — new nested sub-client (`TemplatesClient`) exposing `list()`, `create()`, `get(id)`, `update(id, ...)`, `delete(id)` for summary templates.
* **`phenoml.workflows.GatewayTimeoutError`** — new error class thrown by `client.workflows.execute()` on HTTP 504 responses; long-running workflow callers may catch it explicitly.

## 15.0.0 - 2026-05-15
### Breaking Changes
* **`ToolsClient.call()`** — method removed; delete all calls to `client.tools.mcpServer.tools.call()` from your codebase.
* **`McpServerToolCallRequest`** — interface removed; remove any imports or type references to this symbol.
* **`McpServerToolCallResponse`** — interface removed; remove any imports or type references to this symbol.
### Changed
* **`AgentChatRequest.enhanced_reasoning`** and **`AgentStreamChatRequest.enhanced_reasoning`** — JSDoc description reworded for clarity; no functional change.

## 14.0.0 - 2026-05-13
### Breaking Changes
* **`FhirBundle`** and **`FhirResource`** — removed from the `summary` namespace exports; replace any direct imports of these types with `Record<string, unknown>` or your own local definitions.
* **`CreateSummaryRequest.fhir_resources`** — type changed from `FhirResource | FhirBundle` to `Record<string, unknown>`; remove references to the named union types.
* **`FhirProviderTemplate`** — `id`, `name`, `provider`, `auth_configs`, and `last_updated` are now required fields; update any object literals that omit these properties.
* **`McpServerResponse.Data`** and **`McpServerToolResponse.Data`** — inline `Data` namespace removed; `data` now references `phenoml.tools.McpServer` / `phenoml.tools.McpServerTool`, and `mcp_servers` / `mcp_server_tools` list fields have been added; update any destructuring of the old `Data` shape.
* **`SearchResponse.resourceType`** and **`SearchResponse.searchParams`** — renamed to `resource_type` and `search_params` respectively; update all property accesses. **`PromptsClient.loadDefaults()`** — method removed; remove all invocations.
### Added
* **`McpServer`** — new exported interface with optional `id`, `name`, `description`, and `mcp_server_url` fields.
* **`McpServerTool`** — new exported interface with optional `id`, `name`, `description`, `input_schema`, `mcp_server_id`, and `mcp_server_url` fields.
### Changed
* **JSDoc examples** — updated across `Lang2FhirClient`, `SummaryClient`, `ToolsClient`, `WorkflowsClient`, and `AgentChatRequest` with richer, more realistic payloads covering fields such as `provider`, `version`, `count`, `preview`, `session_id`, and `enhanced_reasoning`.

## 13.1.0 - 2026-05-11
### Added
* **`Fetcher.TimeoutError.cause` / `Fetcher.UnknownError.cause`** — new optional `cause?: unknown` field on both error shapes so callers can inspect the underlying triggering error.
* **`phenomlError.cause` / `phenomlTimeoutError.cause`** — both error classes now accept and expose an optional `cause` property for improved error-chain diagnostics.
* **`QueryStringOptions` `"comma"` array format** — query-string serialization now supports `arrayFormat: "comma"`, serializing arrays as a single comma-separated parameter.
* **`isAuthProvider`** — new exported helper from `core/auth` for runtime `AuthProvider` type-narrowing.
* **`BaseClientOptions.auth`** — new optional field accepting `false`, a function, an `AuthProvider` instance, or auth options for per-client authentication overrides.
* **`core.url.queryBuilder()`** — new fluent `QueryStringBuilder` utility with `.add()`, `.addMany()`, `.mergeAdditional()`, and `.build()` methods for constructing URL query strings.
### Changed
* **All API client methods** — query parameters are now built via the `core.url.queryBuilder()` fluent API and passed as a pre-serialized `queryString`; observable behavior is unchanged for standard use cases.
* **`BasicAuth.username` / `BasicAuth.password`** — both fields are now optional; `toAuthorizationHeader` returns `undefined` when both are absent or empty instead of encoding empty credentials.

## 13.0.0 - 2026-05-08
### Breaking Changes
* **`Lang2FhirClient.extractMultipleFhirResourcesFromADocument`** — return type changed from `CreateMultiResponse` to `DocumentMultiResponse`; update any typed variable or destructuring that references `CreateMultiResponse` to use `DocumentMultiResponse` instead (it extends `CreateMultiResponse` so all existing fields remain).
* **`Lang2FhirAndSearchRequest.practitioner_id`** — field removed; callers passing this property must remove it from their request objects.
### Added
* **`DocumentMultiResponse`** — new interface extending `CreateMultiResponse` with an optional `page_classifications: PageClassification[]` field populated when a `page_filter` is supplied.
* **`DocumentConfig`** — new optional `config` field on `DocumentRequest` and `DocumentMultiRequest` accepting a `DocumentConfig` object with an optional `page_filter: PageFilter` for per-page relevance filtering before FHIR extraction.
* **`PageFilter`** and **`PageClassification`** — new exported types; `PageFilter` accepts a natural-language `context` string, and `PageClassification` reports each page's keep/drop decision with a reason.
### Changed
* **`CreateMultiResponse.ResourceItem.description`** — semantics updated to "context-enriched rewritten text excerpt"; a new sibling field `originalText` now carries the verbatim text from the original clinical document.
* **`Lang2FhirClient` JSDoc** — all four conversion methods (`create`, `createMultiple`, `document`, `documentMulti`) now document patient identifier handling, including the synthetic `urn:phenoml:lang2fhir-generated-id` fallback for US Core conformance.

## 12.5.0 - 2026-05-01
### Added
* **`CreateMultiRequest.validation_method`** — new optional field accepting a `ValidationMethod` enum (`"none"` | `"check"` | `"fix"`) that controls FHIR structure validation of the generated bundle; `"none"` is the default and skips validation.
* **`DocumentMultiRequest.validation_method`** — same optional `ValidationMethod` field added to the document-based multi-resource request.
* **`CreateMultiResponse.validation`** — new optional `Validation` object returned when `validation_method` is `"check"` or `"fix"`, containing per-pass issue details (severity, code, diagnostics, FHIRPath expressions), validation statistics, fix status, attempt count, and a human-readable summary.

## 12.4.0 - 2026-04-29
### Added
* **`ExtractRequestConfig.ChunkingMethod.Fasthpocr`** — new `"fasthpocr"` chunking method that extracts HPO concepts directly with category annotations; requires `system: HPO`, supports citations, and causes most other config options to be ignored.
* **`CodeCategory`** — new exported interface (`uri`, `label`) representing a higher-level grouping (e.g. an HPO category term) for an extracted code.
* **`ExtractedCodeResult.categories`** — new optional `CodeCategory[]` field populated by full-extraction chunking methods such as `"fasthpocr"`.
### Changed
* **`ExtractRequestConfig.include_citations`** — docs updated to reflect that citations are now also supported for the `"fasthpocr"` chunking method.

## 12.3.0 - 2026-04-24
### Added
* **`ExtractRequestConfig.ChunkingMethod.ClinicalNerExtract`** — new `"clinical_ner_extract"` chunking method that extracts clinical concepts (problems, tests, treatments) and uses each as an individual chunk; also supports source-text citations.
* **`ExtractRequestConfig.ValidationMethod.ChunkCodeJaccardSimilarity`** — new `"chunk_code_jaccard_similarity"` validation method that scores codes using token-level Jaccard similarity between the source text chunk and the code description.
* **`ExtractRequestConfig.chunk_code_jaccard_similarity_filtering_threshold`** — optional `number` field (0.0–1.0) that sets the minimum Jaccard similarity threshold when using the `chunk_code_jaccard_similarity` validation method.
### Changed
* **`ExtractRequestConfig.include_citations`** — docs updated to reflect that citations are now supported for both `"sentences"` and `"clinical_ner_extract"` chunking methods, not only `"sentences"`.

## 12.2.0 - 2026-04-14
* The `CreateMultiRequest` and `DocumentMultiRequest` types now support an optional `implementation_guide` parameter, allowing consumers to target custom FHIR Implementation Guide profiles during resource detection alongside the always-present US Core base layer. The `ProfileUploadRequest` type gains two new optional fields: `implementation_guide` (to group uploaded profiles into a named IG, defaulting to `"custom"`) and `profile_context` (a natural-language hint, up to 2000 characters, injected into the LLM prompt to improve profile selection across the IG).

## 12.1.0 - 2026-04-13
* The `CreateMultiRequest` and `DocumentMultiRequest` types now support an optional `detection_effort` parameter (`"standard"` or `"deep"`), giving consumers control over how thoroughly FHIR entities are detected. Use `"deep"` for higher recall at the cost of additional processing, or omit the field to retain the default `"standard"` behavior.

## 12.0.1 - 2026-04-13
* docs: expand JSDoc for consistency_effort parameter
* Update the documentation for `consistency_effort` in `ExtractRequestConfig`
* to clarify how consistency is applied depending on the active configuration.
* The updated docs explain the two distinct behaviors: when `validation_method`
* is set to a non-"none" value, consistency applies to the validation step
* (codes must be unanimously validated); when `validation_method` is "none"
* and `min_context_relevance` is above 0, consistency applies to the relevance
* ranking step instead.
* Key changes:
* Clarify "borderline codes" → "borderline results" for broader accuracy
* Document validation-step consistency behavior for non-"none" validation methods
* Document relevance-ranking consistency behavior when validation is disabled
* 🌿 Generated with Fern

## 12.0.0 - 2026-04-03
* The `generateToken` method has been removed from `AuthClient`. Migrate to the OAuth 2.0 client credentials endpoint method instead. The associated types `AuthGenerateTokenRequest`, `AuthGenerateTokenResponse`, `BadRequestErrorBody`, and `UnauthorizedErrorBody` have also been removed from the SDK's public API.

## 11.5.0 - 2026-04-02
* The SDK now supports a passthrough `fetch()` method on the client, enabling consumers to make arbitrary HTTP requests to any endpoint while automatically applying the SDK's configured authentication, retries, logging, and default headers. This is useful for accessing endpoints not yet covered by the SDK's typed methods.

## 11.4.0 - 2026-03-31
* The SDK now supports consistency effort control for extraction requests. Use the optional `consistency_effort` parameter in ExtractRequestConfig to specify how much effort to spend ensuring consistent results across repeated requests, with options for none, low, medium, or high consistency levels.

## 11.3.0 - 2026-03-26
* The SDK now supports context-aware extraction filtering. Use the optional `extraction_context` parameter to describe your extraction goal, and set `min_context_relevance` to filter out irrelevant chunks based on LLM-scored relevance. Additionally, SOAP note chunking is now available via the `"soap_note"` chunking method.

## 11.2.0 - 2026-03-17
* The SDK now supports Meditech as a FHIR provider. Use the `Provider.Meditech` value when configuring FHIR connections to Meditech systems.

## 11.1.0 - 2026-03-11
* The SDK now supports preview mode for workflow execution. Set the optional `preview` parameter to `true` in ExecuteWorkflowRequest to create mock resources instead of persisting to the FHIR server.

## 11.0.0 - 2026-03-11
* The `ErrorResponse` interface has been removed from the summary resources types. If your code imports or uses this type, you will need to define your own error response interface or use alternative error handling patterns.

## 10.1.0 - 2026-03-09
* feat: add support for 429 and 503 error handling in FHIR client
* Enhance the FHIR client with improved error handling by adding support for rate limiting (429 Too Many Requests) and service unavailability (503 Service Unavailable) errors. This provides better error handling coverage for common HTTP status codes encountered when interacting with FHIR APIs.
* Key changes:
* Add TooManyRequestsError and ServiceUnavailableError classes with proper TypeScript typing
* Update all FHIR client methods to handle 429 and 503 status codes appropriately
* Include comprehensive JSDoc error documentation for all affected methods
* Export new error classes through the errors index module
* 🌿 Generated with Fern

## 10.0.0 - 2026-03-04

### Breaking Changes

- **Authentication**: Replaced username/password authentication with OAuth 2.0 client credentials. The client now accepts `clientId` and `clientSecret` options (defaulting to `PHENOML_CLIENT_ID` and `PHENOML_CLIENT_SECRET` environment variables). Tokens are automatically obtained and refreshed via the `/v2/auth/token` endpoint. A `token` option is still supported for pre-existing tokens.
- **Client renamed**: The main exported client class is now `phenomlClient` (was `PhenoMLClient`).
- **Wrapper client removed**: The custom `WrapperClient` has been removed. Use `phenomlClient` directly.

### Migration Guide

**Authentication** — replace username/password with client credentials:
```ts
// Before
import { PhenoMLClient } from "phenoml";
const client = new PhenoMLClient({
  username: "user",
  password: "pass",
  baseUrl: "https://yourinstance.app.pheno.ml",
});

// After (option 1: env vars PHENOML_CLIENT_ID and PHENOML_CLIENT_SECRET)
import { phenomlClient } from "phenoml";
const client = new phenomlClient({
  baseUrl: "https://yourinstance.app.pheno.ml",
});

// After (option 2: explicit credentials)
import { phenomlClient } from "phenoml";
const client = new phenomlClient({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
  baseUrl: "https://yourinstance.app.pheno.ml",
});

// After (option 3: pre-existing token)
import { phenomlClient } from "phenoml";
const client = new phenomlClient({
  token: "YOUR_TOKEN",
  baseUrl: "https://yourinstance.app.pheno.ml",
});
```

**Import updates:**
```ts
// Before
import { PhenoMLClient } from "phenoml";

// After
import { phenomlClient } from "phenoml";
```

### Added

- New `/v2/auth/token` OAuth 2.0 client credentials endpoint with `TokenResponse` and `OAuthError` types.
- `BaseClient.ts` with centralized client options normalization and auth provider integration.
- Per-resource `exports.ts` modules for cleaner imports.

## 9.2.0 - 2026-03-03
* feat: add document multi-resource extraction endpoint
* Adds a new API endpoint for extracting multiple FHIR resources from documents (PDF or images).
* This endpoint combines document text extraction with multi-resource detection, automatically
* identifying Patient, Condition, MedicationRequest, Observation, and other resource types.
* Resources are returned as a transaction Bundle with proper references between related resources.
* Key changes:
* Add extractMultipleFhirResourcesFromADocument method to Lang2Fhir client
* Create DocumentMultiRequest interface for endpoint parameters
* Add UnprocessableEntityError (422) exception handling
* Include comprehensive test coverage for all response scenarios
* Update documentation with usage examples and parameter descriptions
* 🌿 Generated with Fern

## 9.1.0 - 2026-03-03
* feat: add user feedback endpoint for extraction results
* Implement a comprehensive feedback system that allows users to submit feedback on results from the Construe extraction endpoint. The new functionality enables collection of both received and expected results to improve the extraction quality over time.
* Key changes:
* Add submitFeedbackOnExtractionResults method to Construe client with complete error handling
* Create FeedbackRequest interface accepting text, received_result, expected_result, and optional detail
* Implement FeedbackResponse interface returning feedback ID for tracking
* Add comprehensive test suite with success and error scenarios (400, 401, 500, 503)
* Update API documentation with usage examples and parameter descriptions
* 🌿 Generated with Fern

## 9.0.0 - 2026-03-02
* feat: expand DocumentRequest resource parameter to accept any FHIR resource type
* Change the DocumentRequest.resource parameter from a constrained enum to a flexible string type, enabling support for any FHIR resource type or US Core profile name instead of being limited to questionnaire and questionnaireresponse.
* Key changes:
* Replace DocumentRequest.Resource enum with string type for resource parameter
* Update parameter documentation to reflect expanded support for all FHIR resource types
* Remove ResourceType namespace and constants definition
* Update test fixtures to use generic resource values
* 🌿 Generated with Fern

## 8.0.0 - 2026-02-26
* feat: restructure FHIR provider authentication configuration
* Refactor the FHIR provider authentication system to use a more structured and type-safe approach. The authentication configuration is now organized into specific auth types with dedicated interfaces, replacing the previous flat structure with embedded auth properties.
* Key changes:
* Replace flat auth properties with structured auth object in FhirProviderCreateRequest
* Convert FhirProviderAddAuthConfigRequest to discriminated union type pattern
* Add dedicated auth type interfaces: JwtAuth, ClientSecretAuth, OnBehalfOfAuth, GoogleHealthcareAuth, TokenPassthroughAuth, NoAuth
* Remove redundant FhirProviderAddAuthConfigRequest from client/requests directory
* Add ServiceRequest support to Lang2Fhir resource types
* Update CLI version to 3.88.4
* Enhance Role documentation with provider-specific scope details
* Update all test cases to use new structured auth configuration
* 🌿 Generated with Fern

## 7.1.0 - 2026-02-24
* feat: add OAuth client ID configuration support for FHIR auth
* Add support for OAuth client ID at auth configuration level while maintaining backward compatibility with provider-level client IDs. This enables more granular control over authentication credentials for different OAuth methods.
* Key changes:
* Add optional client_id field to FhirProviderAddAuthConfigRequest
* Add client_id field to FhirProviderAuthConfig with precedence over provider-level setting
* Deprecate client_id field in FhirProviderTemplate with backward compatibility
* Update test fixtures with new client_id configurations
* Add comprehensive test data for JSON web keys, SMART configurations, and service account metadata
* Update CLI version from 3.76.0 to 3.85.2
* 🌿 Generated with Fern

## 7.0.0 - 2026-02-23
* refactor: remove is_active field from API types and update deletion behavior
* This change removes the is_active field from multiple API types and updates the FHIR provider deletion behavior from soft delete to hard delete. The API now uses proper deletion semantics instead of status flags.
* Key changes:
* Remove is_active field from FhirProviderSandboxInfo, FhirProviderTemplate, McpServerResponse, and McpServerToolResponse types
* Update FHIR provider delete operation description from "soft deletes" to "deletes"
* Remove is_active references from all test files to maintain compatibility
* 🌿 Generated with Fern

## 6.5.0 - 2026-02-23
* feat: improve FHIR provider authentication configuration and documentation
* Enhance FHIR provider authentication with clearer scoping behavior, simplified role definitions, and improved documentation. The changes make authentication configuration more intuitive while maintaining backward compatibility.
* Key changes:
* Add comprehensive documentation for AuthMethod enum explaining scope behavior for each auth method
* Simplify Role enum from provider-specific roles to generic admin/read/write access levels
* Update field documentation to clarify auth method requirements and default behaviors
* Add credential_expiry field to FhirProviderCreateRequest for JWT authentication
* Refactor code formatting in Fetcher and Stream modules for better readability
* 🌿 Generated with Fern

## 6.4.0 - 2026-02-20
* feat: add streaming chat support for agent interactions
* This update introduces real-time streaming capabilities to the agent chat API, enabling server-sent events (SSE) for live chat interactions. The new streaming functionality provides a more responsive user experience for agent conversations.
* Key changes:
* Add streamChat method to agent client with SSE streaming support
* Implement AgentStreamChatRequest interface for streaming chat parameters
* Create AgentChatStreamEvent type system for handling stream events
* Add comprehensive Stream class with support for JSON and SSE event formats
* Include enhanced reasoning option for improved response quality
* Update existing chat method documentation for clarity
* Add Phenostore provider support in FHIR provider types
* Improve HTTP response header handling in fetcher
* 🌿 Generated with Fern

## 6.3.1 - 2026-02-17
* chore: update SDK generator and refactor parameter naming
* This commit updates the Fern TypeScript SDK generator from version 3.28.6 to 3.29.0, bringing improvements to code generation and internal SDK structure. Additionally, the change standardizes parameter naming conventions across the codebase for better consistency.
* Key changes:
* Update Fern generator version from 3.28.6 to 3.29.0
* Remove deprecated .npmignore file from package structure
* Standardize parameter naming from camelCase to snake_case in API method signatures
* Remove User-Agent header from default SDK headers
* Add Accept header handling in HTTP request processing
* Enhance test infrastructure with custom header matching utilities
* Update dependency versions across the lockfile for improved stability
* 🌿 Generated with Fern

## 6.3.0 - 2026-02-13
* feat: improve HTTP logging, redaction, and test infrastructure
* Enhance fetcher with response header logging and improved sensitive header redaction
* Fix Logger.shouldLog() level comparison logic for correct log filtering
* Improve URL credential redaction to handle multiple @ characters
* Add comprehensive test suites for logging integration and redaction edge cases
* Refactor existing unit tests to table-driven style for better maintainability

## 6.2.0 - 2026-02-13
* feat: add comprehensive logging support to SDK
* Add configurable logging capabilities to the PhenoML TypeScript SDK, providing developers with detailed request/response visibility and debugging capabilities.
* Key changes:
* Add logging configuration to BaseClientOptions with LogConfig or Logger support
* Implement comprehensive HTTP request/response logging in fetcher
* Add smart credential redaction for headers, query parameters, and URLs
* Create modular logging system with ConsoleLogger and customizable implementations
* Add dependency management and update package lockfile
* Pass logging configuration through all API client methods
* 🌿 Generated with Fern

## 6.1.0 - 2026-02-13
* feat: add custom fetch function support and improve client configuration
* Add support for custom fetch implementations through a new fetch option in BaseClientOptions.
* This enhancement enables better platform compatibility and allows users to provide their own
* fetch implementation when the built-in fetch is not available or when custom behavior is needed.
* Key changes:
* Add fetch option to BaseClientOptions interface for custom fetch implementations
* Remove hardcoded User-Agent header from client initialization
* Update all API client methods to pass custom fetch function to core fetcher
* Improve header handling with case-insensitive key processing in mergeOnlyDefinedHeaders
* Add comprehensive form-urlencoded body serialization support with nested object handling
* Add CONTRIBUTING.md with detailed guidelines for SDK customization and development workflow
* Update package manager to pnpm 10.20.0 and refresh dependency lock file
* 🌿 Generated with Fern

## 6.0.0 - 2026-02-13
* refactor: restructure construe upload API and remove user_id fields
* Refactored the construe upload code system API to simplify the request structure and improved overall type safety across multiple modules. The upload functionality now uses a unified request format with better error handling and asynchronous processing support.
* Key changes:
* Simplified construe upload API to use unified UploadRequest structure
* Removed user_id fields from all templates (agent, workflows, tools, etc.)
* Updated error handling with new GatewayTimeoutError and improved status codes
* Changed ExtractedCodeResult field from 'rationale' to 'reason' and removed 'longDescription'
* Updated User-Agent header from specific version to dynamic 'auto' versioning
* Enhanced upload response to include name and version fields
* 🌿 Generated with Fern

## 5.3.0 - 2026-02-09
* feat: add custom code system export endpoint
* Add new exportCustomCodeSystem method to the construe client that allows exporting custom (non-builtin) code systems as JSON files. This feature enables users to backup and transfer code systems between instances.
* Key changes:
* Add exportCustomCodeSystem method to Construe client with GET endpoint
* Create ExportCodeSystemResponse type definition for structured export data
* Add GetConstrueCodesSystemsCodesystemExportRequest for version parameter
* Include comprehensive test coverage for all HTTP response codes
* Remove ForbiddenError from fhirProvider.get method and related tests
* 🌿 Generated with Fern

## 5.2.0 - 2026-02-08
* feat: refactor upload request structure with format-specific types
* Refactor the upload code system functionality to use a discriminated union approach with format-specific request types. This improves type safety and API clarity by separating CSV and JSON upload requirements.
* Key changes:
* Split UploadRequest into format-specific types (UploadRequestCsv and UploadRequestJson)
* Make CSV format parameters (code_col, desc_col) required for CSV uploads
* Add async processing support with new status values ("processing", "failed")
* Update code system status to include processing states beyond just "ready"
* Restructure type exports and remove legacy request type from construe client
* 🌿 Generated with Fern

## 5.1.0 - 2026-02-08
* feat: add code system detail retrieval and deletion methods
* Add comprehensive code system management capabilities with two new API methods for
* retrieving detailed metadata and deleting custom code systems. Include enhanced
* error handling and documentation updates for better API availability clarity.
* Key changes:
* Add `getCodeSystemDetail()` method to retrieve full metadata including timestamps and builtin status
* Add `deleteCustomCodeSystem()` method to remove custom code systems with proper restrictions
* Introduce ForbiddenError class for HTTP 403 responses with validation against builtin systems
* Update upload request interface with replace option and enhanced validation documentation
* Enhance search method documentation with availability notes for built-in vs custom systems
* Add comprehensive test coverage for all new endpoints and error scenarios
* 🌿 Generated with Fern

## 5.0.0 - 2026-02-07
* feat: add workflow support to agents and simplify FHIR profile uploads
* This release adds workflow integration capabilities for agents and streamlines
* the FHIR profile upload API by removing redundant parameters and improving metadata
* handling. The upload process now derives all metadata directly from the StructureDefinition
* JSON, making it more robust and user-friendly.
* Key changes:
* Add workflows field to agent creation and templates for workflow integration
* Remove version and resource parameters from profile upload API - now derived from StructureDefinition
* Update profile upload response to include type field instead of separate version/resource fields
* Enhance profile upload documentation with detailed validation rules and usage instructions
* Update all tests and examples to reflect simplified profile upload interface
* 🌿 Generated with Fern

## 4.0.0 - 2026-02-03
* refactor: simplify document API by removing fileType parameter
* The Lang2Fhir document endpoint now auto-detects file types from content magic bytes,
* eliminating the need for manual MIME type specification. This change streamlines the
* API interface while maintaining support for PDF, PNG, and JPEG file formats.
* Key changes:
* Remove fileType parameter from DocumentRequest interface
* Update content parameter documentation to specify supported formats
* Remove FileType enum and associated type definitions
* Update all code examples and tests to use simplified API
* Maintain backward compatibility for file type detection
* 🌿 Generated with Fern

## 3.1.0 - 2026-01-29
* feat: add citation support and rename text search method
* Adds source text citation functionality to code extraction and renames the text search method for better clarity. Citations provide exact text spans with character offsets showing where each code was found in the source text, enabling precise traceability.
* Key changes:
* Add Citation interface with text spans and character offsets
* Add include_citations option to ExtractRequestConfig for sentence-based chunking
* Add is_ancestor and citations fields to ExtractedCodeResult
* Rename textSearchKeywordBased to terminologyServerTextSearch for clarity
* Add CPT usage disclaimers and paid plan requirements to documentation
* Add BadGatewayError (502) error handling to FHIR client methods
* 🌿 Generated with Fern

## 3.0.0 - 2026-01-21
* feat: make provider parameter required for agent operations
* This change makes the provider parameter required for agent create and update operations,
* ensuring that all agents must specify a FHIR provider. In shared/experiment environments,
* the default sandbox provider will be used if a different provider is not explicitly specified.
* Key changes:
* Change provider parameter from optional to required in AgentCreateRequest
* Update provider documentation to clarify requirement and default behavior
* Update all test cases to include required provider parameter
* Update client documentation and examples with provider parameter
* 🌿 Generated with Fern

## 2.0.0 - 2026-01-21
* feat: remove is_active field from agent prompts API
* Remove the is_active field from agent prompt models and API endpoints to simplify
* prompt management. This change affects both create and update operations, as well
* as the underlying data types and test fixtures. The delete operation now performs
* actual deletion rather than soft deletion.
* Key changes:
* Remove is_active field from AgentPromptsCreateRequest and AgentPromptsUpdateRequest
* Remove is_active field from PromptTemplate and AgentTemplate types
* Update prompt deletion to perform hard delete instead of soft delete
* Remove User-Agent header from client configuration
* Update documentation and examples to reflect simplified API
* Update all test fixtures to remove is_active references
* 🌿 Generated with Fern

## 1.1.0 - 2026-01-21
* feat: add code system management and search endpoints to Construe API
* This update adds comprehensive code system management and search capabilities to the Construe API client, enabling users to browse available code systems and perform different types of code searches.
* Key changes:
* Add listAvailableCodeSystems() method to retrieve metadata about all available code systems
* Add listCodesInACodeSystem() method for paginated browsing of codes within a specific system
* Add getASpecificCode() method to retrieve detailed information about individual codes
* Add semanticSearchEmbeddingBased() method for natural language queries using vector embeddings
* Add textSearchKeywordBased() method for fast keyword-based search with typo tolerance
* Add comprehensive error handling with new error types (NotFoundError, NotImplementedError, ServiceUnavailableError)
* Add corresponding request/response types and documentation for all new endpoints
* Remove User-Agent header from default client configuration
* Update reference documentation with detailed usage examples and API descriptions
* 🌿 Generated with Fern

## 1.0.1 - 2026-01-20
* refactor: remove User-Agent header from client configuration
* Remove the hardcoded User-Agent header from the default headers configuration in the phenomlClient. This simplifies the client setup by reducing the number of predefined headers while maintaining the essential Fern SDK identification headers.
* Key changes:
* Remove User-Agent header from default client headers
* Retain X-Fern SDK identification headers
* Simplify client configuration
* 🌿 Generated with Fern

## 1.0.0 - 2026-01-20
* refactor: remove deprecated is_active parameter from agent API
* Remove the is_active parameter from agent create, update, and list operations to simplify the API interface. This parameter was no longer needed and its removal streamlines agent management operations.
* Key changes:
* Remove is_active field from AgentCreateRequest type definition
* Remove is_active parameter from agent list request and query handling
* Update all client method signatures to exclude is_active parameter
* Update documentation examples to reflect simplified API
* Remove User-Agent header from client configuration
* Update test cases to match new API structure without is_active parameter
* 🌿 Generated with Fern

## 0.0.22 - 2026-01-20
* refactor: remove User-Agent header from client requests
* Clean up HTTP client configuration by removing the User-Agent header from default request headers. This change simplifies the header configuration while maintaining SDK identification through the remaining X-Fern headers.
* Key changes:
* Remove "User-Agent" header from default client headers
* Maintain SDK identification through X-Fern-* headers
* Simplify client initialization configuration
* 🌿 Generated with Fern

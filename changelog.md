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
const client = new PhenoMLClient({ username: "user", password: "pass" });

// After (option 1: env vars PHENOML_CLIENT_ID and PHENOML_CLIENT_SECRET)
import { phenomlClient } from "phenoml";
const client = new phenomlClient();

// After (option 2: explicit credentials)
import { phenomlClient } from "phenoml";
const client = new phenomlClient({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
});

// After (option 3: pre-existing token)
import { phenomlClient } from "phenoml";
const client = new phenomlClient({ token: "YOUR_TOKEN" });
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


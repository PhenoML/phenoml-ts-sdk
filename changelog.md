## 6.3.1 - 2026-02-14
* SDK regeneration
* Unable to analyze changes with AI, incrementing PATCH version.

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


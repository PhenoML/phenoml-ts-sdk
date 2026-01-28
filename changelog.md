## 4.0.0 - 2026-01-28
* refactor: rename textSearchKeywordBased to terminologyServerTextSearch
* Improves API clarity by renaming the text search method to better reflect its
* functionality as a terminology server search. Also updates documentation
* to include required compliance notices and clearer descriptions.
* Key changes:
* Rename textSearchKeywordBased method to terminologyServerTextSearch
* Update method documentation to clarify terminology server usage
* Add CPT usage compliance notices per AMA requirements
* Add BadGatewayError (502) error handling to FHIR client methods
* Update test names to reflect new method naming
* Enhance descriptions for code system operations with terminology server context
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


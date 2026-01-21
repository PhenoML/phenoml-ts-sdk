# Reference
## Agent
<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">create</a>({ ...params }) -> phenoml.AgentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new PhenoAgent with specified configuration
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.create({
    name: "name",
    prompts: ["prompt_123", "prompt_456"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.AgentCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">list</a>({ ...params }) -> phenoml.AgentListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of PhenoAgents belonging to the authenticated user
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.list({
    tags: "tags"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.agent.AgentListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">get</a>(id) -> phenoml.AgentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a specific agent by its ID
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Agent ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">update</a>(id, { ...params }) -> phenoml.AgentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing agent's configuration
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.update("id", {
    name: "name",
    prompts: ["prompt_123", "prompt_456"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Agent ID
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.AgentCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">delete</a>(id) -> phenoml.AgentDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an existing agent
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.delete("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Agent ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">patch</a>(id, { ...params }) -> phenoml.AgentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Patches an existing agent's configuration
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.patch("id", [{
        op: "replace",
        path: "/name",
        value: "Updated Agent Name"
    }, {
        op: "add",
        path: "/tags/-",
        value: "new-tag"
    }, {
        op: "remove",
        path: "/description"
    }]);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Agent ID
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.JsonPatch` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">chat</a>({ ...params }) -> phenoml.AgentChatResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a message to an agent and receive a response
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.chat({
    "X-Phenoml-On-Behalf-Of": "Patient/550e8400-e29b-41d4-a716-446655440000",
    "X-Phenoml-Fhir-Provider": "550e8400-e29b-41d4-a716-446655440000:eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c...",
    message: "What is the patient's current condition?",
    agent_id: "agent-123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.agent.AgentChatRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">getChatMessages</a>({ ...params }) -> phenoml.AgentGetChatMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of chat messages for a given chat session
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.getChatMessages({
    chat_session_id: "chat_session_id",
    num_messages: 1,
    role: "user",
    order: "asc"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.agent.AgentGetChatMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent Prompts
<details><summary><code>client.agent.prompts.<a href="/src/api/resources/agent/resources/prompts/client/Client.ts">create</a>({ ...params }) -> phenoml.AgentPromptsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new agent prompt
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.prompts.create({
    name: "Medical Assistant System Prompt",
    content: "You are a helpful medical assistant specialized in FHIR data processing..."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.agent.AgentPromptsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.prompts.<a href="/src/api/resources/agent/resources/prompts/client/Client.ts">list</a>() -> phenoml.PromptsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of agent prompts belonging to the authenticated user
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.prompts.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.prompts.<a href="/src/api/resources/agent/resources/prompts/client/Client.ts">get</a>(id) -> phenoml.AgentPromptsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a specific prompt by its ID
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.prompts.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Prompt ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.prompts.<a href="/src/api/resources/agent/resources/prompts/client/Client.ts">update</a>(id, { ...params }) -> phenoml.AgentPromptsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing prompt
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.prompts.update("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Prompt ID
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.agent.AgentPromptsUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.prompts.<a href="/src/api/resources/agent/resources/prompts/client/Client.ts">delete</a>(id) -> phenoml.PromptsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a prompt
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.prompts.delete("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Prompt ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.prompts.<a href="/src/api/resources/agent/resources/prompts/client/Client.ts">patch</a>(id, { ...params }) -> phenoml.AgentPromptsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Patches an existing prompt
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.prompts.patch("id", [{
        op: "replace",
        path: "/name",
        value: "Updated Agent Name"
    }, {
        op: "add",
        path: "/tags/-",
        value: "new-tag"
    }, {
        op: "remove",
        path: "/description"
    }]);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Agent Prompt ID
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.JsonPatch` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.prompts.<a href="/src/api/resources/agent/resources/prompts/client/Client.ts">loadDefaults</a>() -> phenoml.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Loads default agent prompts for the authenticated user
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.prompts.loadDefaults();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Authtoken Auth
<details><summary><code>client.authtoken.auth.<a href="/src/api/resources/authtoken/resources/auth/client/Client.ts">generateToken</a>({ ...params }) -> phenoml.AuthGenerateTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Obtain an access token using client credentials
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authtoken.auth.generateToken({
    username: "username",
    password: "password"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.authtoken.AuthGenerateTokenRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Cohort
<details><summary><code>client.cohort.<a href="/src/api/resources/cohort/client/Client.ts">analyze</a>({ ...params }) -> phenoml.CohortResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Converts natural language text into structured FHIR search queries for patient cohort analysis
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cohort.analyze({
    text: "female patients over 65 with diabetes but not hypertension"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.cohort.CohortRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cohort.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Construe
<details><summary><code>client.construe.<a href="/src/api/resources/construe/client/Client.ts">uploadCodeSystem</a>({ ...params }) -> phenoml.ConstrueUploadCodeSystemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a custom medical code system with codes and descriptions for use in code extraction.
Upon upload, construe generates embeddings for all of the codes in the code system and stores them in the vector database so you can
subsequently use the code system for construe/extract and lang2fhir/create (coming soon!)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.construe.uploadCodeSystem({
    name: "CUSTOM_CODES",
    version: "1.0",
    format: "json",
    file: "file"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.construe.UploadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Construe.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.<a href="/src/api/resources/construe/client/Client.ts">extractCodes</a>({ ...params }) -> phenoml.ExtractCodesResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Converts natural language text into structured medical codes
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.construe.extractCodes({
    text: "Patient is a 14-year-old female, previously healthy, who is here for evaluation of abnormal renal ultrasound with atrophic right kidney"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.construe.ExtractRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Construe.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.<a href="/src/api/resources/construe/client/Client.ts">listAvailableCodeSystems</a>() -> phenoml.ListCodeSystemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata about all available code systems including built-in and custom systems.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.construe.listAvailableCodeSystems();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Construe.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.<a href="/src/api/resources/construe/client/Client.ts">listCodesInACodeSystem</a>(codesystem, { ...params }) -> phenoml.ListCodesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of all codes in the specified code system.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.construe.listCodesInACodeSystem("ICD-10-CM", {
    version: "2025",
    cursor: "cursor",
    limit: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**codesystem:** `string` — Code system name (e.g., "ICD-10-CM", "SNOMED_CT_US_LITE")
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.construe.GetConstrueCodesCodesystemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Construe.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.<a href="/src/api/resources/construe/client/Client.ts">getASpecificCode</a>(codesystem, codeId, { ...params }) -> phenoml.GetCodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns details for a specific code within a code system.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.construe.getASpecificCode("ICD-10-CM", "E11.65", {
    version: "version"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**codesystem:** `string` — Code system name
    
</dd>
</dl>

<dl>
<dd>

**codeId:** `string` — The code identifier
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.construe.GetConstrueCodesCodesystemCodeIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Construe.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.<a href="/src/api/resources/construe/client/Client.ts">semanticSearchEmbeddingBased</a>(codesystem, { ...params }) -> phenoml.SemanticSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Performs semantic similarity search using vector embeddings.

**When to use**: Best for natural language queries where you want to find conceptually
related codes, even when different terminology is used. The search understands meaning,
not just keywords.

**Examples**:
- Query "trouble breathing at night" finds codes like "Sleep apnea", "Orthopnea",
  "Nocturnal dyspnea" — semantically related but no exact keyword matches
- Query "heart problems" finds "Myocardial infarction", "Cardiac arrest", "Arrhythmia"

**Trade-offs**: Slower than text search (requires embedding generation), but finds
conceptually similar results that keyword search would miss.

See also: `/search/text` for faster keyword-based lookup with typo tolerance.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.construe.semanticSearchEmbeddingBased("ICD-10-CM", {
    text: "patient has trouble breathing at night and wakes up gasping",
    version: "version",
    limit: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**codesystem:** `string` — Code system name
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.construe.GetConstrueCodesCodesystemSearchSemanticRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Construe.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.<a href="/src/api/resources/construe/client/Client.ts">textSearchKeywordBased</a>(codesystem, { ...params }) -> phenoml.TextSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Performs fast full-text search over code IDs and descriptions.

**When to use**: Best for autocomplete UIs, code lookup, or when users know part of
the code ID or specific keywords. Fast response times suitable for typeahead interfaces.

**Features**:
- Substring matching on code IDs (e.g., "11.65" finds "E11.65")
- Typo tolerance on descriptions (not on code IDs)
- Fast response times (~10-50ms)

**Examples**:
- Query "E11" finds all codes starting with E11 (diabetes codes)
- Query "diabtes" (typo) still finds "diabetes" codes

**Trade-offs**: Faster than semantic search, but only matches keywords/substrings.
Won't find conceptually related codes with different terminology.

See also: `/search/semantic` for finding conceptually similar codes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.construe.textSearchKeywordBased("ICD-10-CM", {
    q: "E11.65",
    version: "version",
    limit: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**codesystem:** `string` — Code system name
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.construe.GetConstrueCodesCodesystemSearchTextRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Construe.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Fhir
<details><summary><code>client.fhir.<a href="/src/api/resources/fhir/client/Client.ts">search</a>(fhirProviderId, fhirPath, { ...params }) -> phenoml.FhirSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves FHIR resources from the specified provider. Supports both individual resource retrieval and search operations based on the FHIR path and query parameters.

The request is proxied to the configured FHIR server with appropriate authentication headers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fhir.search("550e8400-e29b-41d4-a716-446655440000", "Patient", {
    "X-Phenoml-On-Behalf-Of": "Patient/550e8400-e29b-41d4-a716-446655440000",
    "X-Phenoml-Fhir-Provider": "550e8400-e29b-41d4-a716-446655440000:eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c..."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fhirProviderId:** `string` 

The ID of the FHIR provider to use. Can be either:
- A UUID representing the provider ID
- A provider name (legacy support - will just use the most recently updated provider with this name)
    
</dd>
</dl>

<dl>
<dd>

**fhirPath:** `string` 

The FHIR resource path to operate on. This follows FHIR RESTful API conventions.
Examples:
- "Patient" (for resource type operations)
- "Patient/123" (for specific resource operations)
- "Patient/123/_history" (for history operations)
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhir.FhirSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fhir.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhir.<a href="/src/api/resources/fhir/client/Client.ts">create</a>(fhirProviderId, fhirPath, { ...params }) -> phenoml.FhirResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new FHIR resource on the specified provider. The request body should contain a valid FHIR resource in JSON format.

The request is proxied to the configured FHIR server with appropriate authentication headers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fhir.create("550e8400-e29b-41d4-a716-446655440000", "Patient", {
    "X-Phenoml-On-Behalf-Of": "Patient/550e8400-e29b-41d4-a716-446655440000",
    "X-Phenoml-Fhir-Provider": "550e8400-e29b-41d4-a716-446655440000:eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c...",
    body: {
        resourceType: "Patient",
        name: [
            {
                "family": "Doe",
                "given": [
                    "Jane"
                ]
            }
        ],
        gender: "female",
        birthDate: "1990-01-01"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fhirProviderId:** `string` 

The ID of the FHIR provider to use. Can be either:
- A UUID representing the provider ID
- A provider name (legacy support - will just use the most recently updated provider with this name)
    
</dd>
</dl>

<dl>
<dd>

**fhirPath:** `string` 

The FHIR resource path to operate on. This follows FHIR RESTful API conventions.
Examples:
- "Patient" (for resource type operations)
- "Patient/123" (for specific resource operations)
- "Patient/123/_history" (for history operations)
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhir.FhirCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fhir.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhir.<a href="/src/api/resources/fhir/client/Client.ts">upsert</a>(fhirProviderId, fhirPath, { ...params }) -> phenoml.FhirResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates a FHIR resource on the specified provider. If the resource exists, it will be updated; otherwise, it will be created.

The request is proxied to the configured FHIR server with appropriate authentication headers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fhir.upsert("550e8400-e29b-41d4-a716-446655440000", "Patient", {
    "X-Phenoml-On-Behalf-Of": "Patient/550e8400-e29b-41d4-a716-446655440000",
    "X-Phenoml-Fhir-Provider": "550e8400-e29b-41d4-a716-446655440000:eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c...",
    body: {
        resourceType: "Patient",
        id: "123",
        name: [
            {
                "family": "Doe",
                "given": [
                    "John",
                    "Updated"
                ]
            }
        ],
        gender: "male",
        birthDate: "1985-05-15"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fhirProviderId:** `string` 

The ID of the FHIR provider to use. Can be either:
- A UUID representing the provider ID
- A provider name (legacy support - will just use the most recently updated provider with this name)
    
</dd>
</dl>

<dl>
<dd>

**fhirPath:** `string` 

The FHIR resource path to operate on. This follows FHIR RESTful API conventions.
Examples:
- "Patient" (for resource type operations)
- "Patient/123" (for specific resource operations)
- "Patient/123/_history" (for history operations)
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhir.FhirUpsertRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fhir.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhir.<a href="/src/api/resources/fhir/client/Client.ts">delete</a>(fhirProviderId, fhirPath, { ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a FHIR resource from the specified provider.

The request is proxied to the configured FHIR server with appropriate authentication headers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fhir.delete("550e8400-e29b-41d4-a716-446655440000", "Patient", {
    "X-Phenoml-On-Behalf-Of": "Patient/550e8400-e29b-41d4-a716-446655440000",
    "X-Phenoml-Fhir-Provider": "550e8400-e29b-41d4-a716-446655440000:eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c..."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fhirProviderId:** `string` 

The ID of the FHIR provider to use. Can be either:
- A UUID representing the provider ID
- A provider name (legacy support - will just use the most recently updated provider with this name)
    
</dd>
</dl>

<dl>
<dd>

**fhirPath:** `string` 

The FHIR resource path to operate on. This follows FHIR RESTful API conventions.
Examples:
- "Patient" (for resource type operations)
- "Patient/123" (for specific resource operations)
- "Patient/123/_history" (for history operations)
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhir.FhirDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fhir.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhir.<a href="/src/api/resources/fhir/client/Client.ts">patch</a>(fhirProviderId, fhirPath, { ...params }) -> phenoml.FhirResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Partially updates a FHIR resource on the specified provider using JSON Patch operations as defined in RFC 6902.

The request body should contain an array of JSON Patch operations. Each operation specifies:
- `op`: The operation type (add, remove, replace, move, copy, test)
- `path`: JSON Pointer to the target location in the resource
- `value`: The value to use (required for add, replace, and test operations)

The request is proxied to the configured FHIR server with appropriate authentication headers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fhir.patch("550e8400-e29b-41d4-a716-446655440000", "Patient", {
    "X-Phenoml-On-Behalf-Of": "Patient/550e8400-e29b-41d4-a716-446655440000",
    "X-Phenoml-Fhir-Provider": "550e8400-e29b-41d4-a716-446655440000:eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c...",
    body: [{
            op: "replace",
            path: "/name/0/family",
            value: "NewFamilyName"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fhirProviderId:** `string` 

The ID of the FHIR provider to use. Can be either:
- A UUID representing the provider ID
- A provider name (legacy support - will just use the most recently updated provider with this name)
    
</dd>
</dl>

<dl>
<dd>

**fhirPath:** `string` 

The FHIR resource path to operate on. This follows FHIR RESTful API conventions.
Examples:
- "Patient" (for resource type operations)
- "Patient/123" (for specific resource operations)
- "Patient/123/_history" (for history operations)
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhir.FhirPatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fhir.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhir.<a href="/src/api/resources/fhir/client/Client.ts">executeBundle</a>(fhirProviderId, { ...params }) -> phenoml.FhirBundle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Executes a FHIR Bundle transaction or batch operation on the specified provider. This allows multiple FHIR resources to be processed in a single request.

The request body should contain a valid FHIR Bundle resource with transaction or batch type.

The request is proxied to the configured FHIR server with appropriate authentication headers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fhir.executeBundle("550e8400-e29b-41d4-a716-446655440000", {
    "X-Phenoml-On-Behalf-Of": "Patient/550e8400-e29b-41d4-a716-446655440000",
    "X-Phenoml-Fhir-Provider": "550e8400-e29b-41d4-a716-446655440000:eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c...",
    body: {
        resourceType: "Bundle",
        entry: [{
                resource: {
                    "resourceType": "Patient",
                    "name": [
                        {
                            "family": "Doe",
                            "given": [
                                "John"
                            ]
                        }
                    ]
                },
                request: {
                    method: "POST",
                    url: "Patient"
                }
            }, {
                resource: {
                    "resourceType": "Observation",
                    "status": "final",
                    "subject": {
                        "reference": "Patient/123"
                    }
                },
                request: {
                    method: "POST",
                    url: "Observation"
                }
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fhirProviderId:** `string` 

The ID of the FHIR provider to use. Can be either:
- A UUID representing the provider ID
- A provider name (legacy support - will just use the most recently updated provider with this name)
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhir.FhirExecuteBundleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fhir.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## FhirProvider
<details><summary><code>client.fhirProvider.<a href="/src/api/resources/fhirProvider/client/Client.ts">create</a>({ ...params }) -> phenoml.FhirProviderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new FHIR provider configuration with authentication credentials.

Note: The "sandbox" provider type cannot be created via this API - it is managed internally.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fhirProvider.create({
    name: "Epic Sandbox",
    provider: "athenahealth",
    auth_method: "client_secret",
    base_url: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.fhirProvider.FhirProviderCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirProvider.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhirProvider.<a href="/src/api/resources/fhirProvider/client/Client.ts">list</a>() -> phenoml.FhirProviderListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of all active FHIR providers for the authenticated user.

On shared instances, only sandbox providers are returned.
Sandbox providers return FhirProviderSandboxInfo.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fhirProvider.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `FhirProvider.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhirProvider.<a href="/src/api/resources/fhirProvider/client/Client.ts">get</a>(fhirProviderId) -> phenoml.FhirProviderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a specific FHIR provider configuration by its ID.

Sandbox providers return FhirProviderSandboxInfo.
On shared instances, only sandbox providers can be accessed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fhirProvider.get("fhir_provider_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fhirProviderId:** `string` — ID of the FHIR provider to retrieve
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirProvider.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhirProvider.<a href="/src/api/resources/fhirProvider/client/Client.ts">delete</a>(fhirProviderId) -> phenoml.FhirProviderDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Soft deletes a FHIR provider by setting is_active to false.

Note: Sandbox providers cannot be deleted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fhirProvider.delete("fhir_provider_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fhirProviderId:** `string` — ID of the FHIR provider to delete
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirProvider.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhirProvider.<a href="/src/api/resources/fhirProvider/client/Client.ts">addAuthConfig</a>(fhirProviderId, { ...params }) -> phenoml.FhirProviderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a new authentication configuration to an existing FHIR provider.
This enables key rotation and multiple auth configurations per provider.

Note: Sandbox providers cannot be modified.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fhirProvider.addAuthConfig("1716d214-de93-43a4-aa6b-a878d864e2ad", {
    auth_method: "client_secret"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fhirProviderId:** `string` — ID of the FHIR provider to add auth config to
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhirProvider.FhirProviderAddAuthConfigRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirProvider.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhirProvider.<a href="/src/api/resources/fhirProvider/client/Client.ts">setActiveAuthConfig</a>(fhirProviderId, { ...params }) -> phenoml.FhirProviderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets which authentication configuration should be active for a FHIR provider.
Only one auth config can be active at a time.

If the specified auth config is already active, the request succeeds without
making any changes and returns a message indicating the config is already active.

Note: Sandbox providers cannot be modified.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fhirProvider.setActiveAuthConfig("1716d214-de93-43a4-aa6b-a878d864e2ad", {
    auth_config_id: "auth-config-123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fhirProviderId:** `string` — ID of the FHIR provider
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhirProvider.FhirProviderSetActiveAuthConfigRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirProvider.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhirProvider.<a href="/src/api/resources/fhirProvider/client/Client.ts">removeAuthConfig</a>(fhirProviderId, { ...params }) -> phenoml.FhirProviderRemoveAuthConfigResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes an authentication configuration from a FHIR provider.
Cannot remove the currently active auth configuration.

Note: Sandbox providers cannot be modified.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fhirProvider.removeAuthConfig("1716d214-de93-43a4-aa6b-a878d864e2ad", {
    auth_config_id: "auth-config-123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fhirProviderId:** `string` — ID of the FHIR provider
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhirProvider.FhirProviderRemoveAuthConfigRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirProvider.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Lang2Fhir
<details><summary><code>client.lang2Fhir.<a href="/src/api/resources/lang2Fhir/client/Client.ts">create</a>({ ...params }) -> phenoml.FhirResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Converts natural language text into a structured FHIR resource
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lang2Fhir.create({
    version: "R4",
    resource: "auto",
    text: "Patient has severe asthma with acute exacerbation"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.lang2Fhir.CreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2Fhir.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lang2Fhir.<a href="/src/api/resources/lang2Fhir/client/Client.ts">createMulti</a>({ ...params }) -> phenoml.CreateMultiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Analyzes natural language text and extracts multiple FHIR resources, returning them as a transaction Bundle.
Automatically detects Patient, Condition, MedicationRequest, Observation, and other resource types from the text.
Resources are linked with proper references (e.g., Conditions reference the Patient).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lang2Fhir.createMulti({
    text: "John Smith, 45-year-old male, diagnosed with Type 2 Diabetes. Prescribed Metformin 500mg twice daily."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.lang2Fhir.CreateMultiRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2Fhir.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lang2Fhir.<a href="/src/api/resources/lang2Fhir/client/Client.ts">search</a>({ ...params }) -> phenoml.SearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Converts natural language text into FHIR search parameters.
Automatically identifies the appropriate FHIR resource type and generates valid search query parameters.

Supported resource types include: AllergyIntolerance, Appointment, CarePlan, CareTeam, Condition,
Coverage, Device, DiagnosticReport, DocumentReference, Encounter, Goal, Immunization, Location,
Medication, MedicationRequest, Observation, Organization, Patient, PlanDefinition, Practitioner,
PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson,
Schedule, ServiceRequest, Slot, and Specimen.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lang2Fhir.search({
    text: "Appointments between March 2-9, 2025"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.lang2Fhir.SearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2Fhir.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lang2Fhir.<a href="/src/api/resources/lang2Fhir/client/Client.ts">uploadProfile</a>({ ...params }) -> phenoml.Lang2FhirUploadProfileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a custom FHIR StructureDefinition profile for use with the lang2fhir service
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lang2Fhir.uploadProfile({
    version: "R4",
    resource: "condition-encounter-diagnosis",
    profile: "(base64 encoded JSON string of the FHIR profile)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.lang2Fhir.ProfileUploadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2Fhir.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lang2Fhir.<a href="/src/api/resources/lang2Fhir/client/Client.ts">document</a>({ ...params }) -> phenoml.FhirResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Extracts text from a document (PDF or image) and converts it into a structured FHIR resource
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lang2Fhir.document({
    version: "R4",
    resource: "questionnaire",
    content: "content",
    fileType: "application/pdf"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.lang2Fhir.DocumentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2Fhir.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Summary
<details><summary><code>client.summary.<a href="/src/api/resources/summary/client/Client.ts">listTemplates</a>() -> phenoml.SummaryListTemplatesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves all summary templates for the authenticated user
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.summary.listTemplates();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Summary.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.summary.<a href="/src/api/resources/summary/client/Client.ts">createTemplate</a>({ ...params }) -> phenoml.CreateSummaryTemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a summary template from an example using LLM function calling
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.summary.createTemplate({
    name: "name",
    example_summary: "Patient John Doe, age 45, presents with hypertension diagnosed on 2024-01-15.",
    target_resources: ["Patient", "Condition", "Observation"],
    mode: "mode"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.summary.CreateSummaryTemplateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Summary.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.summary.<a href="/src/api/resources/summary/client/Client.ts">getTemplate</a>(id) -> phenoml.SummaryGetTemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a specific summary template
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.summary.getTemplate("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Template ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Summary.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.summary.<a href="/src/api/resources/summary/client/Client.ts">updateTemplate</a>(id, { ...params }) -> phenoml.SummaryUpdateTemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing summary template
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.summary.updateTemplate("id", {
    name: "name",
    template: "template",
    target_resources: ["target_resources"],
    mode: "mode"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Template ID
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.summary.UpdateSummaryTemplateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Summary.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.summary.<a href="/src/api/resources/summary/client/Client.ts">deleteTemplate</a>(id) -> phenoml.SummaryDeleteTemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a summary template
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.summary.deleteTemplate("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Template ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Summary.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.summary.<a href="/src/api/resources/summary/client/Client.ts">create</a>({ ...params }) -> phenoml.CreateSummaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a summary from FHIR resources using one of three modes:
- **narrative**: Uses a template to substitute FHIR data into placeholders (requires template_id)
- **flatten**: Flattens FHIR resources into a searchable format for RAG/search (no template needed)
- **ips**: Generates an International Patient Summary (IPS) narrative per ISO 27269/HL7 FHIR IPS IG. Requires a Bundle with exactly one Patient resource (returns 400 error if no Patient or multiple Patients are present). Automatically filters resources to those referencing the patient and generates sections for allergies, medications, problems, immunizations, procedures, and vital signs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.summary.create({
    fhir_resources: {
        resourceType: "resourceType"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.summary.CreateSummaryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Summary.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tools
<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">createFhirResource</a>({ ...params }) -> phenoml.Lang2FhirAndCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Converts natural language to FHIR resource and optionally stores it in a FHIR server
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.createFhirResource({
    "X-Phenoml-On-Behalf-Of": "Patient/550e8400-e29b-41d4-a716-446655440000",
    "X-Phenoml-Fhir-Provider": "550e8400-e29b-41d4-a716-446655440000:eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c...",
    resource: "auto",
    text: "Patient John Doe has severe asthma with acute exacerbation"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.tools.Lang2FhirAndCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">createFhirResourcesMulti</a>({ ...params }) -> phenoml.Lang2FhirAndCreateMultiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Extracts multiple FHIR resources from natural language text and stores them in a FHIR server.
Automatically detects Patient, Condition, MedicationRequest, Observation, and other resource types.
Resources are linked with proper references and submitted as a transaction bundle.
For FHIR servers that don't auto-resolve urn:uuid references, this endpoint will automatically
resolve them via PUT requests after the initial bundle creation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.createFhirResourcesMulti({
    "X-Phenoml-On-Behalf-Of": "Patient/550e8400-e29b-41d4-a716-446655440000",
    "X-Phenoml-Fhir-Provider": "550e8400-e29b-41d4-a716-446655440000:eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c...",
    text: "John Smith, 45-year-old male, diagnosed with Type 2 Diabetes. Prescribed Metformin 500mg twice daily.",
    provider: "medplum"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.tools.Lang2FhirAndCreateMultiRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">searchFhirResources</a>({ ...params }) -> phenoml.Lang2FhirAndSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Converts natural language to FHIR search parameters and executes search in FHIR server
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.searchFhirResources({
    "X-Phenoml-On-Behalf-Of": "Patient/550e8400-e29b-41d4-a716-446655440000",
    "X-Phenoml-Fhir-Provider": "550e8400-e29b-41d4-a716-446655440000:eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c...",
    text: "Find all appointments for patient John Doe next week"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.tools.Lang2FhirAndSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">analyzeCohort</a>({ ...params }) -> phenoml.CohortResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uses LLM to extract search concepts from natural language and builds patient cohorts with inclusion/exclusion criteria
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.analyzeCohort({
    "X-Phenoml-On-Behalf-Of": "Patient/550e8400-e29b-41d4-a716-446655440000",
    "X-Phenoml-Fhir-Provider": "550e8400-e29b-41d4-a716-446655440000:eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c...",
    text: "female patients over 20 with diabetes but not hypertension",
    provider: "550e8400-e29b-41d4-a716-446655440000"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.tools.CohortRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tools McpServer
<details><summary><code>client.tools.mcpServer.<a href="/src/api/resources/tools/resources/mcpServer/client/Client.ts">create</a>({ ...params }) -> phenoml.McpServerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new MCP server
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.mcpServer.create({
    name: "My MCP Server",
    mcp_server_url: "https://mcp.example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.tools.McpServerCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `McpServer.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.mcpServer.<a href="/src/api/resources/tools/resources/mcpServer/client/Client.ts">list</a>() -> phenoml.McpServerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all MCP servers for a specific user
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.mcpServer.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `McpServer.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.mcpServer.<a href="/src/api/resources/tools/resources/mcpServer/client/Client.ts">get</a>(mcpServerId) -> phenoml.McpServerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a MCP server by ID
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.mcpServer.get("mcp_server_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mcpServerId:** `string` — ID of the MCP server to retrieve
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `McpServer.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.mcpServer.<a href="/src/api/resources/tools/resources/mcpServer/client/Client.ts">delete</a>(mcpServerId) -> phenoml.McpServerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a MCP server by ID
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.mcpServer.delete("mcp_server_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mcpServerId:** `string` — ID of the MCP server to delete
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `McpServer.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tools McpServer Tools
<details><summary><code>client.tools.mcpServer.tools.<a href="/src/api/resources/tools/resources/mcpServer/resources/tools/client/Client.ts">list</a>(mcpServerId) -> phenoml.McpServerToolResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all MCP server tools for a specific MCP server
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.mcpServer.tools.list("mcp_server_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mcpServerId:** `string` — ID of the MCP server to list tools for
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.mcpServer.tools.<a href="/src/api/resources/tools/resources/mcpServer/resources/tools/client/Client.ts">get</a>(mcpServerToolId) -> phenoml.McpServerToolResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a MCP server tool by ID
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.mcpServer.tools.get("mcp_server_tool_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mcpServerToolId:** `string` — ID of the MCP server tool to retrieve
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.mcpServer.tools.<a href="/src/api/resources/tools/resources/mcpServer/resources/tools/client/Client.ts">delete</a>(mcpServerToolId) -> phenoml.McpServerToolResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a MCP server tool by ID
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.mcpServer.tools.delete("mcp_server_tool_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mcpServerToolId:** `string` — ID of the MCP server tool to delete
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.mcpServer.tools.<a href="/src/api/resources/tools/resources/mcpServer/resources/tools/client/Client.ts">call</a>(mcpServerToolId, { ...params }) -> phenoml.McpServerToolCallResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Calls a MCP server tool
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.mcpServer.tools.call("mcp_server_tool_id", {
    arguments: {
        "title": "PhenoML Agent API"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mcpServerToolId:** `string` — ID of the MCP server tool to call
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.tools.mcpServer.McpServerToolCallRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Workflows
<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">list</a>({ ...params }) -> phenoml.ListWorkflowsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves all workflow definitions for the authenticated user
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.list({
    verbose: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.workflows.WorkflowsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">create</a>({ ...params }) -> phenoml.CreateWorkflowResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new workflow definition with graph generation from workflow instructions
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.create({
    verbose: true,
    name: "Patient Data Mapping Workflow",
    workflow_instructions: "Given diagnosis data, find the patient and create condition record",
    sample_data: {
        "patient_last_name": "Rippin",
        "patient_first_name": "Clay",
        "diagnosis_code": "I10"
    },
    fhir_provider_id: "550e8400-e29b-41d4-a716-446655440000"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `phenoml.workflows.CreateWorkflowRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">get</a>(id, { ...params }) -> phenoml.WorkflowsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a workflow definition by its ID
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.get("id", {
    verbose: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — ID of the workflow to retrieve
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.workflows.WorkflowsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">update</a>(id, { ...params }) -> phenoml.WorkflowsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing workflow definition
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.update("id", {
    verbose: true,
    name: "Updated Patient Data Mapping Workflow",
    workflow_instructions: "Given diagnosis data, find the patient and create condition record",
    sample_data: {
        "patient_last_name": "Smith",
        "patient_first_name": "John",
        "diagnosis_code": "E11"
    },
    fhir_provider_id: "550e8400-e29b-41d4-a716-446655440000"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — ID of the workflow to update
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.workflows.UpdateWorkflowRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">delete</a>(id) -> phenoml.WorkflowsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a workflow definition by its ID
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.delete("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — ID of the workflow to delete
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">execute</a>(id, { ...params }) -> phenoml.ExecuteWorkflowResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Executes a workflow with provided input data and returns results
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.execute("id", {
    input_data: {
        "patient_last_name": "Johnson",
        "patient_first_name": "Mary",
        "diagnosis_code": "M79.3",
        "encounter_date": "2024-01-15"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — ID of the workflow to execute
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.workflows.ExecuteWorkflowRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

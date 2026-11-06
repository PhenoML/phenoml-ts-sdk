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
    name: "Medical Assistant",
    description: "An AI assistant for medical information processing",
    prompts: ["prompt_123"],
    tags: ["medical", "fhir"],
    provider: "7002b0b4-8d09-445a-bf65-0fafdaf26c35"
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

**requestOptions:** `AgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">list</a>({ ...params }) -> phenoml.ListResponse</code></summary>
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

**request:** `phenoml.agent.ListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentClient.RequestOptions` 
    
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

**requestOptions:** `AgentClient.RequestOptions` 
    
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
    name: "Medical Assistant",
    description: "Updated description for the medical assistant",
    prompts: ["prompt_123"],
    tags: ["medical", "fhir", "updated"],
    provider: "7002b0b4-8d09-445a-bf65-0fafdaf26c35"
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

**requestOptions:** `AgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">delete</a>(id) -> phenoml.DeleteResponse</code></summary>
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

**requestOptions:** `AgentClient.RequestOptions` 
    
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
        path: "/description",
        value: "patched description"
    }, {
        op: "add",
        path: "/tags/-",
        value: "updated"
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

**requestOptions:** `AgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Chat
<details><summary><code>client.agent.chat.<a href="/src/api/resources/agent/resources/chat/client/Client.ts">send</a>({ ...params }) -> phenoml.AgentChatResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a message to an agent and receive a JSON response.
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
await client.agent.chat.send({
    "X-Phenoml-On-Behalf-Of": "Patient/550e8400-e29b-41d4-a716-446655440000",
    "X-Phenoml-Fhir-Provider": "550e8400-e29b-41d4-a716-446655440000:eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c...",
    message: "What is the patient's current condition?",
    session_id: "session-abc123",
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

**requestOptions:** `ChatClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.chat.<a href="/src/api/resources/agent/resources/chat/client/Client.ts">stream</a>({ ...params }) -> core.Stream&lt;phenoml.AgentChatStreamEvent&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a message to an agent and receive the response as a Server-Sent Events
(SSE) stream. Events include message_start, content_delta, tool_use,
tool_result, message_end, and error.
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
const response = await client.agent.chat.stream({
    "X-Phenoml-On-Behalf-Of": "Patient/550e8400-e29b-41d4-a716-446655440000",
    "X-Phenoml-Fhir-Provider": "550e8400-e29b-41d4-a716-446655440000:eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c...",
    message: "What is the patient's current condition?",
    session_id: "session-abc123",
    agent_id: "agent-123"
});
for await (const item of response) {
    console.log(item);
}

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

**request:** `phenoml.agent.AgentStreamChatRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.chat.<a href="/src/api/resources/agent/resources/chat/client/Client.ts">listMessages</a>({ ...params }) -> phenoml.ListMessagesResponse</code></summary>
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
await client.agent.chat.listMessages({
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

**request:** `phenoml.agent.ListMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatClient.RequestOptions` 
    
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
    description: "System prompt for medical assistant agent",
    content: "You are a helpful medical assistant specialized in FHIR data processing.",
    is_default: false,
    tags: ["medical", "system"]
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

**requestOptions:** `PromptsClient.RequestOptions` 
    
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

**requestOptions:** `PromptsClient.RequestOptions` 
    
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

**requestOptions:** `PromptsClient.RequestOptions` 
    
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
await client.agent.prompts.update("id", {
    name: "Medical Assistant System Prompt",
    description: "Updated system prompt",
    content: "You are a helpful medical assistant. Always cite ICD-10 codes when discussing diagnoses.",
    is_default: false,
    tags: ["medical", "system", "updated"]
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

**requestOptions:** `PromptsClient.RequestOptions` 
    
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

**requestOptions:** `PromptsClient.RequestOptions` 
    
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
        path: "/content",
        value: "Updated prompt content."
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

**requestOptions:** `PromptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Authtoken
<details><summary><code>client.authtoken.<a href="/src/api/resources/authtoken/client/Client.ts">getToken</a>({ ...params }) -> phenoml.TokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

OAuth 2.0 client credentials token endpoint (RFC 6749 §4.4).
Accepts client_id and client_secret in the request body (JSON or
form-encoded) or via Basic Auth header (RFC 6749 §2.3.1), and
returns an access token with token expiration information.
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
await client.authtoken.getToken({
    client_id: "your_client_id",
    client_secret: "your_client_secret"
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

**request:** `phenoml.authtoken.ClientCredentialsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthtokenClient.RequestOptions` 
    
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

**requestOptions:** `CohortClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Construe
<details><summary><code>client.construe.<a href="/src/api/resources/construe/client/Client.ts">submitFeedback</a>({ ...params }) -> phenoml.FeedbackResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits user feedback on results from the Construe extraction endpoint.
Feedback includes the full extraction result received and the result the user expected.
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
await client.construe.submitFeedback({
    text: "Patient has type 2 diabetes with hyperglycemia",
    received_result: {
        system: {
            name: "ICD-10-CM",
            version: "2025"
        },
        codes: [{
                code: "E11.9",
                description: "Type 2 diabetes mellitus without complications",
                valid: true
            }]
    },
    expected_result: {
        system: {
            name: "ICD-10-CM",
            version: "2025"
        },
        codes: [{
                code: "E11.65",
                description: "Type 2 diabetes mellitus with hyperglycemia",
                valid: true
            }]
    },
    detail: "Expected code E11.65 because the text mentions hyperglycemia"
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

**request:** `phenoml.construe.FeedbackRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConstrueClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Code Systems
<details><summary><code>client.construe.codeSystems.<a href="/src/api/resources/construe/resources/codeSystems/client/Client.ts">upload</a>({ ...params }) -> phenoml.UploadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a custom medical code system with codes and descriptions for use in code extraction. Requires a paid plan.
Returns 202 immediately; embedding generation runs asynchronously. Poll
GET /construe/codes/systems/{codesystem}?version={version} to check when status
transitions from "processing" to "ready" or "failed".
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
await client.construe.codeSystems.upload({
    name: "CUSTOM_CODES",
    version: "1.0",
    format: "json",
    codes: [{
            code: "X001",
            description: "Example custom code 1"
        }, {
            code: "X002",
            description: "Example custom code 2"
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

**request:** `phenoml.construe.UploadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeSystemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.codeSystems.<a href="/src/api/resources/construe/resources/codeSystems/client/Client.ts">list</a>() -> phenoml.ListCodeSystemsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the catalog of available code systems, including both built-in standard terminologies and custom uploaded systems.
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
await client.construe.codeSystems.list();

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

**requestOptions:** `CodeSystemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.codeSystems.<a href="/src/api/resources/construe/resources/codeSystems/client/Client.ts">find</a>(codesystem, { ...params }) -> phenoml.GetCodeSystemDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns full metadata for a single code system, including timestamps and builtin status.
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
await client.construe.codeSystems.find("ICD-10-CM", {
    version: "2025"
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

**request:** `phenoml.construe.FindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeSystemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.codeSystems.<a href="/src/api/resources/construe/resources/codeSystems/client/Client.ts">delete</a>(codesystem, { ...params }) -> phenoml.DeleteCodeSystemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a custom (non-builtin) code system and all its codes. Builtin systems cannot be deleted.
Only available on dedicated instances. Large systems may take up to a minute to delete.
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
await client.construe.codeSystems.delete("CUSTOM_CODES", {
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

**request:** `phenoml.construe.DeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeSystemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.codeSystems.<a href="/src/api/resources/construe/resources/codeSystems/client/Client.ts">export</a>(codesystem, { ...params }) -> phenoml.ExportCodeSystemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exports a custom (non-builtin) code system as a JSON file compatible with the upload format.
The exported file can be re-uploaded directly via POST /construe/upload with format "json".
Only available on dedicated instances. Builtin systems cannot be exported.
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
await client.construe.codeSystems.export("CUSTOM_CODES", {
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

**request:** `phenoml.construe.ExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeSystemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Codes
<details><summary><code>client.construe.codes.<a href="/src/api/resources/construe/resources/codes/client/Client.ts">extract</a>({ ...params }) -> phenoml.ExtractCodesResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Converts natural language text into structured medical codes.

Pass `system.version` to select a specific code system version, for example
`umls-2026aa` for UMLS 2026AA-backed systems.

Usage of CPT is subject to AMA requirements: see PhenoML Terms of Service.
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
await client.construe.codes.extract({
    text: "Patient is a 14-year-old female, previously healthy, who is here for evaluation of abnormal renal ultrasound with atrophic right kidney.",
    system: {
        name: "ICD-10-CM",
        version: "2025"
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

**request:** `phenoml.construe.ExtractRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.codes.<a href="/src/api/resources/construe/resources/codes/client/Client.ts">phenocr</a>({ ...params }) -> phenoml.ExtractCodesResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

**Alpha:** phenocr is an alpha feature. Request parameters, response
shape, and results may change between releases. Do not depend on it for
production workloads yet.

Extracts medical codes from natural language clinical text using phenocr.

Supported code systems: HPO, ICD-10-CM, RXNORM, and SNOMED_CT_US. The
code system name and version are both required.
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
await client.construe.codes.phenocr({
    text: "5-year-old male with seizures, severe intellectual disability, microcephaly, and hypotonia.",
    system: {
        name: "HPO",
        version: "umls-2026AA"
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

**request:** `phenoml.construe.PhenoCrRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.codes.<a href="/src/api/resources/construe/resources/codes/client/Client.ts">crosswalk</a>({ ...params }) -> phenoml.CrosswalkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Maps one source medical code to one or more target code-system URIs using
shared UMLS CUIs. A successful response is HTTP 200 even when the source
code or a target has no matches; inspect `reason_code` on the item and
target entries for miss details.

Usage of CPT is subject to AMA requirements: see PhenoML Terms of Service.
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
await client.construe.codes.crosswalk({
    system: "http://hl7.org/fhir/sid/icd-10-cm",
    code: "A02.24",
    targets: ["http://human-phenotype-ontology.org"]
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

**request:** `phenoml.construe.CrosswalkRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.codes.<a href="/src/api/resources/construe/resources/codes/client/Client.ts">list</a>(codesystem, { ...params }) -> phenoml.ListCodesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of all codes in the specified code system.

Usage of CPT is subject to AMA requirements: see PhenoML Terms of Service.
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
await client.construe.codes.list("ICD-10-CM", {
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

**request:** `phenoml.construe.CodesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.codes.<a href="/src/api/resources/construe/resources/codes/client/Client.ts">lookup</a>(codesystem, codeID, { ...params }) -> phenoml.GetCodeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Looks up a specific code and returns its details.

Usage of CPT is subject to AMA requirements: see PhenoML Terms of Service.
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
await client.construe.codes.lookup("ICD-10-CM", "E1165", {
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

**codeID:** `string` 

The code identifier. ICD-10-CM codes are stored without their
cosmetic dot (use "E1165", not "E11.65").
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.construe.LookupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.codes.<a href="/src/api/resources/construe/resources/codes/client/Client.ts">searchSemantic</a>(codesystem, { ...params }) -> phenoml.SemanticSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Performs semantic similarity search using vector embeddings.

**Availability**: This endpoint works for both **built-in and custom** code systems.

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

Usage of CPT is subject to AMA requirements: see PhenoML Terms of Service.
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
await client.construe.codes.searchSemantic("ICD-10-CM", {
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

**request:** `phenoml.construe.SearchSemanticRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.construe.codes.<a href="/src/api/resources/construe/resources/codes/client/Client.ts">searchText</a>(codesystem, { ...params }) -> phenoml.TextSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Performs fast full-text search over code IDs and descriptions.

**Availability**: This endpoint is only available for **built-in code systems**.
Custom code systems uploaded via `/construe/upload` are not indexed for full-text search
and will return empty results. Use `/search/semantic` to search custom code systems.

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

Usage of CPT is subject to AMA requirements: see PhenoML Terms of Service.
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
await client.construe.codes.searchText("ICD-10-CM", {
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

**request:** `phenoml.construe.SearchTextRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Fhir
<details><summary><code>client.fhir.<a href="/src/api/resources/fhir/client/Client.ts">search</a>(fhir_provider_id, fhir_path, { ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves FHIR resources from the specified provider. Supports both individual resource retrieval (e.g. `Patient/123` via the path) and search operations.

FHIR search parameters are passed through to the upstream server verbatim as native query-string parameters; this proxy does not model, validate, or transform them. Append standard FHIR search parameters directly to the request URL. Supported parameters include:
- Resource-specific search parameters (e.g. `name` for Patient, `status` for Observation)
- Common search parameters (`_id`, `_lastUpdated`, `_tag`, `_profile`, `_security`, `_text`, `_content`, `_filter`)
- Result parameters (`_count`, `_offset`, `_sort`, `_include`, `_revinclude`, `_summary`, `_elements`)
- Search prefixes for dates, numbers, and quantities (`eq`, `ne`, `gt`, `ge`, `lt`, `le`, `sa`, `eb`, `ap`)

Examples:
- `Patient?name=John%20Doe&_count=10&_sort=family`
- `Observation?patient=Patient/123&date=ge2023-01-01&category=vital-signs&_sort=-date`

When using a generated SDK, supply these via the client's request-level query-parameter option (the SDK escape hatch) rather than a typed argument.

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

**fhir_provider_id:** `string` 

The ID of the FHIR provider to use. Can be either:
- A UUID representing the provider ID
- A provider name (legacy support - will just use the most recently updated provider with this name)
    
</dd>
</dl>

<dl>
<dd>

**fhir_path:** `string` 

The FHIR resource path to operate on. This follows FHIR RESTful API conventions.
Examples:
- "Patient" (for resource type operations)
- "Patient/123" (for specific resource operations)
- "Patient/123/_history" (for history operations)
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhir.SearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhir.<a href="/src/api/resources/fhir/client/Client.ts">create</a>(fhir_provider_id, fhir_path, { ...params }) -> unknown</code></summary>
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
        "resourceType": "Patient"
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

**fhir_provider_id:** `string` 

The ID of the FHIR provider to use. Can be either:
- A UUID representing the provider ID
- A provider name (legacy support - will just use the most recently updated provider with this name)
    
</dd>
</dl>

<dl>
<dd>

**fhir_path:** `string` 

The FHIR resource path to operate on. This follows FHIR RESTful API conventions.
Examples:
- "Patient" (for resource type operations)
- "Patient/123" (for specific resource operations)
- "Patient/123/_history" (for history operations)
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhir.CreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhir.<a href="/src/api/resources/fhir/client/Client.ts">upsert</a>(fhir_provider_id, fhir_path, { ...params }) -> unknown</code></summary>
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
        "resourceType": "Patient",
        "id": "123"
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

**fhir_provider_id:** `string` 

The ID of the FHIR provider to use. Can be either:
- A UUID representing the provider ID
- A provider name (legacy support - will just use the most recently updated provider with this name)
    
</dd>
</dl>

<dl>
<dd>

**fhir_path:** `string` 

The FHIR resource path to operate on. This follows FHIR RESTful API conventions.
Examples:
- "Patient" (for resource type operations)
- "Patient/123" (for specific resource operations)
- "Patient/123/_history" (for history operations)
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhir.UpsertRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhir.<a href="/src/api/resources/fhir/client/Client.ts">delete</a>(fhir_provider_id, fhir_path, { ...params }) -> unknown</code></summary>
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

**fhir_provider_id:** `string` 

The ID of the FHIR provider to use. Can be either:
- A UUID representing the provider ID
- A provider name (legacy support - will just use the most recently updated provider with this name)
    
</dd>
</dl>

<dl>
<dd>

**fhir_path:** `string` 

The FHIR resource path to operate on. This follows FHIR RESTful API conventions.
Examples:
- "Patient" (for resource type operations)
- "Patient/123" (for specific resource operations)
- "Patient/123/_history" (for history operations)
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhir.DeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhir.<a href="/src/api/resources/fhir/client/Client.ts">patch</a>(fhir_provider_id, fhir_path, { ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Partially updates a FHIR resource on the specified provider.

Two body formats are supported, selected by request content type:
- `application/json-patch+json` — an array of JSON Patch operations as defined in RFC 6902. Each operation specifies:
  - `op`: The operation type (add, remove, replace, move, copy, test)
  - `path`: JSON Pointer to the target location in the resource
  - `value`: The value to use (required for add, replace, and test operations)
- `application/fhir+json` — a partial FHIR resource for merge-patch semantics.

**Note:** This proxy currently forwards the request body to the upstream FHIR server with `Content-Type: application/fhir+json` regardless of the declared request content type. JSON Patch (RFC 6902) therefore only succeeds against upstream servers that accept patch arrays under `application/fhir+json`; servers that strictly enforce patch media types may reject or misinterpret it. Support for either format ultimately depends on the upstream FHIR server.

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

**fhir_provider_id:** `string` 

The ID of the FHIR provider to use. Can be either:
- A UUID representing the provider ID
- A provider name (legacy support - will just use the most recently updated provider with this name)
    
</dd>
</dl>

<dl>
<dd>

**fhir_path:** `string` 

The FHIR resource path to operate on. This follows FHIR RESTful API conventions.
Examples:
- "Patient" (for resource type operations)
- "Patient/123" (for specific resource operations)
- "Patient/123/_history" (for history operations)
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhir.PatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhir.<a href="/src/api/resources/fhir/client/Client.ts">executeBundle</a>(fhir_provider_id, { ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Executes a FHIR Bundle transaction or batch operation on the specified provider. This allows multiple FHIR resources to be processed in a single request.

The request body should contain a valid FHIR Bundle resource with transaction or batch type.

On shared instances, only the default sandbox provider is accessible. The Bundle must contain an `entry` array, and each entry must have a `request.method` of `POST` and a relative resource-type `request.url`, such as `Patient` or `Observation`. URLs must contain only a resource type starting with an uppercase letter followed by letters or digits; absolute URLs, query strings, resource IDs, custom operation paths, and nested bundle execution are not supported. Entry resources and references are forwarded unchanged.

On shared instances, invalid JSON, an invalid Bundle envelope, missing request fields, or duplicate property names in the Bundle, entry, or request objects return `400`. Unsupported entry methods or URLs return `403`, and a non-default provider returns `404`. If any entry is rejected, the entire Bundle is rejected without executing any entries. Dedicated instances support the upstream server's transaction and batch operations without these create-only restrictions.

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
        "resourceType": "Bundle",
        "type": "transaction",
        "entry": [
            {
                "request": {
                    "method": "POST",
                    "url": "Patient"
                },
                "resource": {
                    "resourceType": "Patient",
                    "name": [
                        {
                            "family": "Doe",
                            "given": [
                                "John"
                            ]
                        }
                    ]
                }
            },
            {
                "request": {
                    "method": "POST",
                    "url": "Observation"
                },
                "resource": {
                    "resourceType": "Observation",
                    "status": "final",
                    "subject": {
                        "reference": "Patient/123"
                    }
                }
            }
        ]
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

**fhir_provider_id:** `string` 

The ID of the FHIR provider to use. Can be either:
- A UUID representing the provider ID
- A provider name (legacy support - will just use the most recently updated provider with this name)
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhir.ExecuteBundleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Fhir2Omop
<details><summary><code>client.fhir2Omop.<a href="/src/api/resources/fhir2Omop/client/Client.ts">create</a>({ ...params }) -> phenoml.CreateOmopResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Maps a FHIR R4 resource or Bundle to OMOP CDM v5.4 rows, grouped by
destination table in `tables`. The request must include at least one
top-level Patient. Unsupported resource types are ignored; supported
resources that cannot produce a row are reported in `dropped`.

All shaped rows remain in `tables`, including partial rows and clinical
rows with uncertain status or unresolved primary concepts. Use
`rows_for_review` to identify the latter, `mappings` to inspect concept
resolution, and `diagnostics` to understand unusable data or links.
Resource-specific context arrays preserve source information linked to
the emitted rows; see the response schemas for their fields and outcomes.

Rows may lack CDM-required fields when the source cannot supply them.
Before loading a CDM dataset, callers must handle incomplete rows, assign
durable IDs, and remap primary and foreign keys together. Returned IDs
start at 1 within each table and are local to one response.

The source format is [FHIR R4 v4.0.1](https://hl7.org/fhir/R4/) and the
output follows [OMOP CDM v5.4](https://ohdsi.github.io/CommonDataModel/cdm54.html).
The informative [Vulcan FHIR-to-OMOP IG](https://hl7.org/fhir/uv/omop/)
provides an R5 baseline adapted here to R4 source fields. Full FHIR or
US Core profile conformance is not validated.

**Resource coverage**

| FHIR source | OMOP output |
| --- | --- |
| Patient | `person`; deceased status can produce `death`, the first address can produce `location`, and multiple resolved races produce race `observation` rows |
| Location | `location` and `care_site` |
| Organization | `care_site`; its first address can produce `location` |
| HealthcareService | `care_site` |
| Practitioner, PractitionerRole | `provider`, with role context retained separately |
| Encounter | `visit_occurrence`, or `visit_detail` for supported explicit components |
| Specimen | `specimen`, requiring an explicit Patient subject |
| DeviceUseStatement | `device_exposure`, using referenced Device details |
| Condition | Domain-selected clinical table; default `condition_occurrence` |
| Procedure | Domain-selected clinical table; default `procedure_occurrence` |
| MedicationRequest, MedicationStatement, MedicationAdministration, MedicationDispense, Immunization | Domain-selected clinical table; default `drug_exposure` |
| Observation | Domain-selected clinical table; numeric values default to `measurement`, other values to `observation` |
| AllergyIntolerance | Contextual allergy `observation` or another supported clinical table, excluding drug/device exposure; default `observation` |
| Medication, Device | Reference data; no independent row |

One request-local `observation_period` is derived per person with qualifying
dates. It spans visit/clinical rows not indexed for review, plus Specimen and Death rows,
including selected source end dates even when the destination has no end
column. Dates from `rows_for_review` do not expand it. This period is not
evidence of enrollment or complete data capture.

**Concept resolution and placement**

Use `vocab_version` to select the vocabulary release; omitted or empty
values use the default release. The response reports the release used
when vocabulary resolution occurred. Select a release explicitly for
reproducibility.

Resolved primary clinical concepts determine placement in
`condition_occurrence`, `procedure_occurrence`, `drug_exposure`,
`device_exposure`, `measurement`, or `observation`. For Observation,
numeric versus nonnumeric values break a tie between Measurement and
Observation placement. An unresolved or destination-invalid concept keeps
the resource's default table, concept ID 0, and `UNMAPPED` status.
Clinical records produce one row each, except the explicit DeviceUseStatement
Timing events described below; multiple vocabulary targets do not expand
a record into multiple rows. Note destinations and vocabulary `Maps to value`
decomposition are unsupported.

Source timing and eligibility apply regardless of the selected table.
Source-specific values populate only compatible columns: Condition status
in `condition_occurrence`, medication supply/dosage and Immunization lot
details in `drug_exposure`, and Observation values in `measurement` or
`observation`. Coded routes on other tables are resolved as mapping context;
Observation values on other tables are preserved without concept resolution.
Those entries omit `omop_field` and have `selected: false`.

Supported primary clinical concepts, specimen material, and unresolved
coded Observation results can use semantic mapping from descriptive text.
CodeableConcept text takes precedence over coding display; bare codes do
not supply descriptions. Deterministic mappings take precedence, and
ambiguous or domain-mismatched results are not reinterpreted. Inference
requires one validated, equivalent active standard concept valid for the
destination; a broader crosswalk target does not validate a suggestion.
Units, routes, visits, demographics, specialties, collection sites, and
contextual allergy findings follow their separate policies.

Inferred results have `resolution.semantic_mapping.status: MAPPED` in
their linked mappings; unsuccessful attempts report `UNMAPPED` with
concept ID 0. Original coding is preserved and no source coding is invented.
Successful inference does not remove uncertain-status review reasons.
Use mapping row links to filter inferred results if needed.

Clinical `*_source_value` fields contain the selected bare code, or text
for text-only inputs. The selected mapping preserves its coding provenance.
Unresolved source concept IDs are 0, except allergy rows can retain a known
original source identity even when the finding is unresolved. Known coding
system OIDs, bare or `urn:oid:`, resolve like their canonical URLs and are
reported canonically in coding mappings. Quantity unit mappings preserve
the supplied system spelling. Unknown OIDs remain unchanged.

**References and eligibility**

Top-level references resolve only within the request, by exact `Type/id`
or Bundle `fullUrl`, including URNs and absolute URLs. Contained references
are supported for medication lookup, DeviceUseStatement.device, and
PractitionerRole.practitioner. The latter also supports request-local
identifier matching. Resources are not fetched remotely.

Clinical subject/patient references must resolve unambiguously to a supplied
Patient. If the reference is absent, a sole Patient can supply attribution,
except for Specimen, DeviceUseStatement, and MedicationDispense, which
require explicit subjects. Unusable explicit patient references drop the
resource. Unusable optional links leave the link unset with a diagnostic
while retaining otherwise eligible rows. Every nonzero structural foreign
key targets a row in the same response, and clinical visit links must belong
to the same patient.

Eligibility follows the source resource's status policy. Other than the
absent/uncertain statuses explicitly supported below, missing or unrecognized
required statuses drop the resource. Entered-in-error and explicitly
non-performed events do not produce positive clinical-event rows.

| Resource | Eligible status or evidence | Retained for review |
| --- | --- | --- |
| Condition | Absent or confirmed canonical-HL7 verificationStatus; refuted and entered-in-error are dropped | Unconfirmed, provisional, differential, or unreadable supplied verificationStatus |
| Encounter | arrived, triaged, in-progress, onleave, finished; planned, cancelled, and entered-in-error are dropped | Unknown, missing, or unreadable status |
| Procedure | completed, stopped | Explicit unknown status |
| MedicationRequest | active, on-hold, completed, stopped, with authorizing intent: order, original-order, reflex-order, filler-order, or instance-order; doNotPerform excludes the request | None |
| MedicationStatement | active, completed, stopped, on-hold | Explicit unknown status |
| MedicationAdministration | completed, in-progress, stopped, or on-hold; on-hold also requires a usable effective start, including partial dates | None |
| MedicationDispense | completed, including partial fills; stopped also requires a valid whenHandedOver, including partial dates | None |
| Immunization | completed | None |
| Observation | final, amended, corrected | Explicit unknown status |
| AllergyIntolerance | Absent, unconfirmed, or confirmed canonical-HL7 verificationStatus; invalid supplied type/category drops the resource | None |
| Specimen | Absent, available, unavailable, unsatisfactory | None |
| DeviceUseStatement | active, completed, stopped, on-hold | None |

Condition clinical course is not a diagnosis-role mapping. Retained uncertain
rows preserve their supplied statuses without asserting that an event occurred
or medication was taken. Eligible clinical rows with primary concept 0 are
also indexed for review; unresolved secondary units, routes, or result concepts
alone do not index a mapped row. Administrative/demographic, Specimen, and
Death rows are excluded from the review index. See `rows_for_review` for
filtering and linked-visit requirements.

Device placement additionally requires eligible use evidence. MedicationRequest,
AllergyIntolerance, uncertain-status records, and explicit negative Observation
results cannot produce device exposure. Negative evidence includes false,
SNOMED Negative/Known absent/No, and `NEG` from
`http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation`.
Reporting actors such as recorder, asserter, or informationSource do not
supply a device event's treating provider.

**Timing**

Dates require at least day precision and use the source calendar date.
Datetimes are present only when time of day was supplied, as local wall-clock
time without a UTC offset, retaining fractional seconds to microseconds.
For example, `2024-01-15T23:30:00-05:00` becomes `2024-01-15T23:30:00`.
A timestamp without a timezone is read as local time.

A valid year/month-only date leaves date and datetime unset and stops a
fallback chain. Malformed dates and unsupported timing forms are ignored
so a later source can be used. Dates are not imputed from other resources.
Specimen, DeviceUseStatement, and MedicationDispense report unusable timing
through diagnostics; otherwise missing dates usually retain partial rows.
The effective-start and handover eligibility requirements above still apply.

| Source | Start/date source, in priority order | End or additional timing |
| --- | --- | --- |
| Patient | birthDate supplies year/month/day components; deceasedDateTime supplies death timing | birth_datetime is not set; boolean-only deceased status supplies no death date |
| Practitioner | birthDate supplies year_of_birth | — |
| Encounter | period.start | period.end |
| Condition | onsetDateTime, onsetPeriod.start, recordedDate | abatementDateTime or abatementPeriod.end |
| Procedure | performedDateTime or performedPeriod.start | performedPeriod.end |
| Observation | effectiveDateTime, effectivePeriod.start, effectiveInstant | — |
| AllergyIntolerance | recordedDate, onsetDateTime, onsetPeriod.start | — |
| MedicationRequest | authoredOn, as prescription timing | No exposure end; validity period is not exposure duration |
| MedicationStatement | effectiveDateTime or effectivePeriod.start | effectivePeriod.end; dateAsserted is not exposure timing |
| MedicationAdministration | effectiveDateTime or effectivePeriod.start | A single dateTime also sets the end; otherwise effectivePeriod.end |
| MedicationDispense | whenHandedOver | No exposure end, including from daysSupply; whenPrepared is not a fallback |
| Immunization | occurrenceDateTime | The same dateTime also sets the end; expirationDate is not used |
| Specimen | collection.collectedDateTime or collection.collectedPeriod.start | Period end and receivedTime are not collection-start fallbacks |
| DeviceUseStatement | timingDateTime, independent timingPeriod boundaries, or one start per timingTiming.event | No end is inferred for dateTime/Timing events; repeat-only schedules retain an undated row |

End columns are populated only where supported by the destination table.
For medication rows, `verbatim_end_date` comes only from an explicit
Period.end, not a single-event end.

**Providers and patient demographics**

Administrative links are best-effort. Patient.managingOrganization is a
record custodian and does not supply a care site. Address.country resolves
to `location.country_concept_id`; CMS Place of Service codings in Location.type
resolve to `care_site.place_of_service_concept_id`. Practitioner recorded
gender is separate from Person demographics: male/female can resolve to
Provider Gender concepts; other, unknown, or absent values stay 0.

Within a request, Practitioners and role-only providers sharing one confirmed
individual NPI (Type 1) merge only when their supplied rendered name, recorded
gender, DEA identifier, and parsed birth year are compatible. The first name
entry and first non-empty DEA identifier are used; supplied identity values
compare exactly. Missing attributes can enrich a compatible row. A conflict
keeps the entire NPI group separate with linked diagnostics. Multiple distinct
NPIs on a Practitioner also prevent merging and leave npi unset. No merge
occurs across requests.

NPI classification trims whitespace and validates ten digits and the NPI check
digit; returned source values and merge comparisons preserve the supplied
spelling. Known individual NPIs remain usable for historical care when deactivated.
An invalid or unconfirmed NPI retains a source-scoped Practitioner without npi,
with an UNRESOLVED diagnostic at identifier. No live public registry lookup is
performed; classification failures return HTTP 500. Accepted NPI system forms,
missing-value markers, and source-identity semantics are defined in ProviderRow.

A PractitionerRole can alias a supplied Practitioner by structural reference,
unambiguous parent-contained reference, or identifier match to a top-level
Practitioner. Supplied Reference.type must be Practitioner. NPI identifier
matching requires a confirmed individual NPI and accepts the NPI system aliases;
other identifiers match exactly. Unusable or ambiguous references have diagnostics.
A resolved Practitioner's identity takes precedence over the role's identifiers.

Without a resolvable supplied Practitioner, a role requires one confirmed
individual NPI in PractitionerRole.identifier or practitioner.identifier to emit
a provider. NPIs from both fields must agree exactly. A usable logical NPI
reference needs no supplied Practitioner and produces no missing-Practitioner
diagnostic. Role-only providers share the NPI grouping rules; names, gender, and
birth information are not invented. provider_role_contexts preserves every
emitted role's specialty and care-site context, including when roles share a provider.

Provider exclusions are reported in dropped:
- provider_npi_is_organization: a top-level Practitioner or role-only provider
  is identified by an organization NPI (Type 2).
- provider_role_requires_individual_npi: a role has neither a usable Practitioner
  nor a confirmed individual NPI.
- provider_role_conflicting_npis: a role without a usable Practitioner supplies
  multiple distinct NPIs across its identifier fields.
- provider_practitioner_is_not_individual: a role resolves to an organization
  Practitioner.

Clinical rows remain eligible when a provider is omitted; their provider links
stay unset, with UNRESOLVED diagnostics pointing to the provider's dropped entry.

Each role specialty resolves independently from supported codings, with
deterministic explicit-text fallback for text-only entries or complete codings
from unsupported systems. Incomplete/malformed codings or recognized systems
block text fallback; coding displays do not supply fallback text. Complete
unsupported companions do not block agreeing supported codings. Unsupported
systems must be well-formed absolute URIs without whitespace, credentials,
or fragments. `specialty_concept_id` is populated only when at least one
specialty is supplied and every distinct input resolves to the same standard
Provider concept; otherwise it stays 0. Each role's source and outcome remain
in mappings, including repeated inputs. Specialty mappings have `selected: false`;
see SpecialtyResolution for per-coding evidence and MappingResolution.via for
the reported matching route.

Patient sex at birth, race, and ethnicity use these US Core 6.1.0 extension
structures/value sets on any Patient; a US Core profile declaration is not
required. Other demographic extensions are ignored.

| Demographic | Extension URL | Supported value source |
| --- | --- | --- |
| Birth sex | http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex | valueCode, using http://hl7.org/fhir/us/core/ValueSet/birthsex |
| Race | http://hl7.org/fhir/us/core/StructureDefinition/us-core-race | ombCategory, using http://hl7.org/fhir/us/core/ValueSet/omb-race-category |
| Ethnicity | http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity | ombCategory, using http://hl7.org/fhir/us/core/ValueSet/omb-ethnicity-category |

- A supplied birth-sex extension takes precedence: M/F resolve, while unknown,
  unsupported, or conflicting values, or an extension without valueCode, leave
  concept 0 without falling back to Patient.gender. Without a birth-sex
  extension, male/female administrative gender is used under the OMOP
  sex-at-birth convention; other/unknown remain 0.
- One distinct resolved race sets the Person race concept. Multiple races use
  `1546847` (More than one race) and one observation per race: concept `4013886`
  (Race), type `32817`, and the race in `value_as_concept_id`. The category code
  is `value_source_value`; observation_source_value and observation_date are
  absent. Loaders must supply their own required-date policy.
- One non-null ethnicity category can resolve; conflicting categories leave
  concept 0. Multiple-ethnicity observations are not produced. Race/ethnicity
  null flavors are ignored, and detailed codes/text are preserved without
  resolution. Source codes are joined with `|` in source order, falling back
  to extension text when no code exists.
- Mappings preserve supplied demographic codes and indicate which were selected;
  overridden administrative gender is unselected. Conflicting birth sex/ethnicity
  and birth sex without valueCode also have diagnostics. Summary counts follow
  the field-level rules in Summary. Demographics are not inferred from other data.

**Allergies and observations**

Coded AllergyIntolerance statements use original codings, optional type, and
category to resolve an Observation finding and the causative substance
independently. A Drug-domain substance can be a value without implying drug
exposure or medication allergy. Contextual findings report `MAPPED` and
`resolution.via: CONTEXTUAL`; original source concept identity is retained.

The contextual finding policy is:

| Supplied type | Medication, optionally with biologic | Food alone | Other or unknown categories |
| --- | --- | --- | --- |
| allergy | Allergy to drug (439224) | Allergic disposition (43530807) | Allergic disposition (43530807) |
| intolerance | Intolerance to drug (4240582) | Intolerance to food (4340252) | Intolerance to substance (36684107) |
| Absent | Propensity to adverse reactions to drug (4305025) | Propensity to adverse reactions to food (4303802) | Propensity to adverse reaction (4172024) |

Selected findings must be active standard concepts in the requested release.
Limited reviewed substance mappings can supply an absent category; Drug-domain
membership alone does not. An absent type remains absent. Supported existing
findings and negative statements retain their meaning. Conflicting or ambiguous
evidence leaves the affected concept unresolved; the finding and substance can
resolve independently, so partial rows are retained. In particular, category
conflict need not prevent resolution of a single identified substance.
Unsupported contextual sources retain domain-based placement, excluding
drug/device exposure, with contextual coverage reported separately.

`resolution.allergy` preserves supplied context and interpretation evidence;
finding and substance mappings link to the same row and separate fields.
Text-only statements follow primary semantic mapping. Reaction-substance
fallback and `Maps to value` decomposition are not applied. Invalid supplied
type/category drops that AllergyIntolerance with `allergy_type_unrecognized`
or `allergy_category_unrecognized`, while other resources continue.

For Observation rows placed in Measurement or Observation, numeric Quantity,
Integer, and numeric-looking String values populate `value_as_number`.
Comparators are represented only by Measurement.operator_concept_id.
valueQuantity.value and valueInteger accept JSON numbers. Finite numeric
valueString results are interpreted equivalently, including optional
comparators, while preserving the original text in value_source_value.
Other non-coded values populate Observation.value_as_string or
Measurement.value_source_value. Coded valueCodeableConcept results resolve
to `value_as_concept_id` using active standard concepts from any domain;
the selected code becomes value_source_value. Unmapped coded results use 0,
and an Observation's value_as_string remains empty for coded results.
Text-only result concepts remain text without concept resolution.
Other unsupported value[x] forms and components do not produce separate values.

Quantity units on Measurement, Observation, and Specimen use exact,
case-sensitive coded UCUM, including accepted OID spellings. Matching may be
direct or through an active OMOP Maps to relationship; there is no UMLS bridge,
text guessing, alias correction, or numeric conversion. An absent unit is null;
a supplied unit without a valid standard Unit match is 0. Explicit UCUM `1`
is supplied unit evidence. Quantity.code supplies unit_source_value when present,
otherwise Quantity.unit. Unit mappings preserve Quantity.system/code/unit in
source_system/source_code/source_name. See unit field schemas for source-concept
and resolution metadata.
Observation units on other clinical destinations are not resolved separately.

**Specimens and devices**

Specimen requires an explicit top-level Patient subject using the shared
reference rules; supplied Reference.type must identify Patient. Missing
collection timing or material retains a partial row with diagnostics.
Material resolves against Specimen, collection quantity units against Unit,
and collection.bodySite against Spec Anatomic Site. Missing material produces
concept 0 without a terminology outcome; supplied unmapped material has its
own outcome. Text-only sites retain text and concept 0 without a suggestion.
Absent unit/site concepts are null; supplied unmapped values are 0.

Specimen quantity is copied without conversion when nonnegative and free of
a comparator; unusable quantities are omitted with diagnostics. Missing,
partial, invalid, or conflicting collection choices leave timing unset.
Parent/derived specimens require their own Patient and do not inherit missing
material/dates. Parent and Measurement-to-Specimen links are not represented.
`specimen_source_contexts` retains availability, identities, and original timing;
SpecimenRow describes source-ID precedence and required-date limitations.
For US Core Specimen 7.0.0 inputs, only the fields described here are mapped;
full profile conformance is not validated.

DeviceUseStatement requires an explicit emitted Patient and supports
request-local Device references, including unambiguous contained Devices.
Missing or unusable Device details retain a known-patient exposure with
concept 0 and diagnostics. Missing type evidence has no terminology outcome;
supplied unmapped type evidence has one. Inventory-only Devices produce no
exposure.

Each timingTiming.event produces a separate start-only exposure, even if the
event date is unusable; events plus repeat rules produce only those event rows.
A repeat-only schedule retains one undated row without expanding recurrence.
Competing timing choices or a provably reversed Period leave both bounds
unset. Partial or malformed individual dates leave their columns absent.
RecordedOn and status do not supply missing use dates.

Device exposure contexts group row links and source evidence per source record,
with event_index for Timing events. Distinct records remain separate, including
overlapping use and matching device/source identifiers; row counts do not count
distinct physical devices. An unambiguous UDI-DI supplies unique_device_id;
competing identifiers and production details remain in context, and production_id
is unset. Device source values identify clinical/type coding, not inventory IDs.

Device quantity defaults to 1 when quantity evidence is absent. Clinical
quantities, doses, rates, and numeric Observation results, including numeric
valueString, do not establish device counts and leave quantity omitted.
device_exposure_contexts retains the original evidence; quantity_basis and
diagnostics explain the result. Timing repeat count does not establish
quantity. Device unit IDs are always null.
DeviceUseStatement uses EHR type 32817 and has no provider or visit links;
routed clinical rows retain eligible performer and same-patient visit links.

**Medication and drug quantities**

MedicationRequest, MedicationStatement, and MedicationAdministration accept
inline medicationCodeableConcept, a request-local Medication reference, or
display-text fallback when a reference cannot resolve. A reference resolving
to a non-Medication is not rescued by display. MedicationDispense requires
usable inline code/text or a reference resolving to a Medication with usable
code/text; both choice forms together drop the dispense. Display-only or
unresolved references do not establish dispensing medication identity.

For MedicationDispense, context links to a supplied same-patient Encounter,
and the first resolvable Practitioner/PractitionerRole performer supplies the
provider. Authorizing prescriptions provide validated request-local linkage
only; dispensing values come from the dispense. Orders, dispenses, and
administrations emit independently without deduplication by drug.
Comparable handover/preparation dates proving handover before preparation
leave start timing unset with a conflict diagnostic. A completed dispense
can remain partial without usable handover, and no exposure end is derived.
For US Core MedicationDispense 7.0.0 inputs, only the fields described here
are mapped; full profile conformance is not validated.

For drug_exposure output:
- MedicationRequest.dispenseRequest.numberOfRepeatsAllowed supplies refills;
  its positive whole-day expectedSupplyDuration supplies days_supply.
- MedicationDispense.daysSupply requires positive whole coded UCUM `d` days,
  without a supplied comparator. Missing supply is allowed; unsupported values
  are omitted with diagnostics. It does not derive exposure end or refills.
- Non-empty dosage text supplies newline-joined sig. Coded dosage/Immunization
  routes resolve against Route; conflicting routes remain unset, while codings
  shared by all dosage instructions can select a route. Immunization.lotNumber
  supplies lot_number.
- MedicationRequest uses type 32838 (EHR prescription), MedicationDispense uses
  32825 (EHR dispensing record), and other current sources use 32817 (EHR).
  These are provenance classifications, not proof of medication consumption.

Direct quantities are supported at MedicationRequest.dispenseRequest.quantity,
MedicationDispense.quantity, MedicationAdministration.dosage.dose, and
Immunization.doseQuantity. Values must be positive finite numbers without a
supplied comparator and with a supported system/code. Rates and
MedicationStatement dosages do not establish a supported total quantity.

The selected drug must be Clinical Drug or Branded Drug with one active,
supported dose form and sufficient unambiguous vocabulary evidence.

| Quantity policy | Supported RxNorm dose forms | Output meaning |
| --- | --- | --- |
| fixed_dose_form_count | Oral Tablet (317541), Oral Capsule (316965), Extended Release Oral Tablet (316945), Extended Release Oral Capsule (316943), Delayed Release Oral Tablet (10312), Delayed Release Oral Capsule (316995) | Count of the selected form, copied from a matching coded count or derived from ingredient amount and per-unit strength; only whole, half, or third units are supported |
| clinical_injection_ingredient_amount | Injectable Solution (316949), Injectable Suspension (316950), Injection (1649574) | Ingredient amount in result_unit, copied/converted from ingredient amount or derived from volume and validated per-unit concentration |

Fixed-form counts accept `TAB`/`CAP` under
`http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm`, or
`{tbl}`/`{Capsule}` under `http://unitsofmeasure.org`, matching the selected
tablet/capsule family. Explicit counts do not require ingredient strength,
including for combination products. Strength-based conversions require one
ingredient strength; concentration-based strength cannot derive fixed-form
counts. Minor arithmetic roundoff is normalized to a supported fraction.

Ingredient amounts and injection volumes require coded UCUM, including its
bare/OID-URN forms. Exact vocabulary-backed strength units, including `[U]`,
are accepted. Differing-unit conversion is limited to compatible mass
(`ug`, `mg`, `g`), volume (`uL`, `mL`, `L`), and milliequivalent
(`meq`, `10*-3.eq`) groups. Codes are case-sensitive; free text, generic count
annotations, unsupported units, and cross-dimensional conversions are not
interpreted. Injection volume conversion requires explicit, consistent per-unit
concentration evidence; a missing denominator alone does not establish it.
Use `quantity_transformations.result_unit`: injection output is already the
ingredient amount and must not be multiplied by concentration again.

Unsupported formulations, quantified products, packs/prefilled syringes,
unsupported fractions, or insufficient/ambiguous evidence leave quantity unset
while retaining the row. QuantityTransformation.reason distinguishes omissions.
The audit records each supplied direct quantity, including null/malformed input,
on an emitted drug_exposure row as DIRECT, DERIVED, or OMITTED. Missing quantities,
dropped resources, other destination tables, and unsupported dosage/rate paths
have no audit entry. Result units, evidence, and intermediate unit conversion
use the response vocabulary release; quantity audits do not affect terminology
counts in Summary.

**Encounter classification and components**

Encounter classifications require both Coding.system and Coding.code.
The following class codes are supported under
`http://terminology.hl7.org/CodeSystem/v3-ActCode` or
`http://hl7.org/fhir/v3/ActCode`:

| Class | Visit concept |
| --- | --- |
| IMP | Inpatient Visit (9201) |
| AMB | Outpatient Visit (9202) |
| EMER | Emergency Room Visit (9203) |
| VR | Telehealth (722455) |
| HH | Home Visit (581476) |

OBSENC has no direct class mapping. Other class/type codes require a valid
standard Visit mapping in the selected release. Mapped class takes precedence;
a disagreeing mapped type produces a conflict diagnostic. If class is missing
or unmapped, type supplies the Visit only when all mapped type classifications
agree. Codings within one type are alternative encodings. Unresolved or
conflicting selection leaves concept 0 without defaulting to outpatient.
Source values/concepts identify the selected original classification.

An explicit Encounter.partOf can produce a child visit_detail linked to a
parent visit_occurrence when both are supplied top-level Encounters, explicitly
reference the same unambiguous Patient, have eligible known statuses, and form
a supported two-level parent/child structure. Supplied reference types must
agree. Details use their own timing, classification, and supported
provider/care-site links without inheriting parent values.

| Compatibility assessment | Output for the child |
| --- | --- |
| COMPATIBLE | visit_detail, including identical or parent-ancestor/detail-descendant Visit concepts |
| UNKNOWN | Partial visit_detail with an unsupported diagnostic explaining the limitation |
| INCOMPATIBLE | Independent visit_occurrence with a conflict diagnostic |

`visit_component_contexts` links each assessment to the final child row and
reports its concepts and vocabulary release. Assessment unavailability or
malformed results fail the request with HTTP 500. An UNKNOWN assessment alone
does not index a mapped row for review; primary concept 0 still does.
Classifications and source dates are preserved in all outcomes.

Period comparisons require matching precision and timezone presence; offset
timestamps compare as instants. Timing that proves reversed or disjoint periods
prevents grouping. Incomplete or incomparable timing can retain grouping
with diagnostics. Overlapping
periods may extend outside the parent, with a conflict diagnostic and no
clipping or expansion. Unsupported references, patient/status relationships,
cycles, and deeper hierarchies retain independently eligible standalone visits.
Encounters with unknown, missing, or unreadable status do not qualify as
components. ClassHistory, location-period segmentation, admission/discharge
concepts, and inferred sequencing are not mapped.

A clinical reference to a detail supplies both visit_detail_id and its parent
visit_occurrence_id; a parent reference supplies only the visit ID. These links
apply across all supported clinical destinations. Failed optional references
retain the clinical row without the link. DeviceUseStatement has no R4 Encounter
reference and receives neither link; dates alone never establish links.
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
await client.fhir2Omop.create({
    fhir_resources: {
        "resourceType": "Bundle",
        "type": "collection",
        "entry": [
            {
                "resource": {
                    "resourceType": "Patient",
                    "id": "patient-1",
                    "gender": "female",
                    "birthDate": "1985-07-22"
                }
            },
            {
                "resource": {
                    "resourceType": "Condition",
                    "id": "condition-1",
                    "subject": {
                        "reference": "Patient/patient-1"
                    },
                    "code": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "44054006",
                                "display": "Type 2 diabetes mellitus"
                            }
                        ]
                    },
                    "onsetDateTime": "2024-01-15"
                }
            },
            {
                "resource": {
                    "resourceType": "MedicationRequest",
                    "id": "medreq-1",
                    "status": "active",
                    "intent": "order",
                    "subject": {
                        "reference": "Patient/patient-1"
                    },
                    "medicationReference": {
                        "reference": "#med0"
                    },
                    "authoredOn": "2024-01-16",
                    "contained": [
                        {
                            "resourceType": "Medication",
                            "id": "med0",
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                                        "code": "860975",
                                        "display": "metformin hydrochloride 500 MG"
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
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

**request:** `phenoml.fhir2Omop.CreateOmopRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fhir2OmopClient.RequestOptions` 
    
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
    description: "Epic sandbox environment for testing",
    provider: "epic",
    base_url: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4",
    auth: {
        auth_method: "client_secret",
        client_id: "your-client-id",
        client_secret: "your-client-secret"
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

**request:** `phenoml.fhirProvider.FhirProviderCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirProviderClient.RequestOptions` 
    
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

**requestOptions:** `FhirProviderClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhirProvider.<a href="/src/api/resources/fhirProvider/client/Client.ts">get</a>(fhir_provider_id) -> phenoml.FhirProviderResponse</code></summary>
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

**fhir_provider_id:** `string` — ID of the FHIR provider to retrieve
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirProviderClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhirProvider.<a href="/src/api/resources/fhirProvider/client/Client.ts">delete</a>(fhir_provider_id) -> phenoml.DeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a FHIR provider.

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

**fhir_provider_id:** `string` — ID of the FHIR provider to delete
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FhirProviderClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Auth Config
<details><summary><code>client.fhirProvider.authConfig.<a href="/src/api/resources/fhirProvider/resources/authConfig/client/Client.ts">add</a>(fhir_provider_id, { ...params }) -> phenoml.FhirProviderResponse</code></summary>
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
await client.fhirProvider.authConfig.add("1716d214-de93-43a4-aa6b-a878d864e2ad", {
    auth_method: "client_secret",
    client_id: "your-client-id",
    client_secret: "your-client-secret"
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

**fhir_provider_id:** `string` — ID of the FHIR provider to add auth config to
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.FhirProviderAddAuthConfigRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthConfigClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhirProvider.authConfig.<a href="/src/api/resources/fhirProvider/resources/authConfig/client/Client.ts">setActive</a>(fhir_provider_id, { ...params }) -> phenoml.FhirProviderResponse</code></summary>
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
await client.fhirProvider.authConfig.setActive("1716d214-de93-43a4-aa6b-a878d864e2ad", {
    auth_config_id: "auth-config-456"
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

**fhir_provider_id:** `string` — ID of the FHIR provider
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhirProvider.FhirProviderSetActiveAuthConfigRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthConfigClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.fhirProvider.authConfig.<a href="/src/api/resources/fhirProvider/resources/authConfig/client/Client.ts">remove</a>(fhir_provider_id, { ...params }) -> phenoml.RemoveResponse</code></summary>
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
await client.fhirProvider.authConfig.remove("1716d214-de93-43a4-aa6b-a878d864e2ad", {
    auth_config_id: "auth-config-456"
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

**fhir_provider_id:** `string` — ID of the FHIR provider
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.fhirProvider.FhirProviderRemoveAuthConfigRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthConfigClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Implementation Guides
<details><summary><code>client.implementationGuides.implementationGuides.<a href="/src/api/resources/implementationGuides/resources/implementationGuides/client/Client.ts">list</a>() -> phenoml.ImplementationGuideListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns every implementation guide on this instance — both guides that
have stored metadata (a profile_context) and guides referenced by at
least one custom profile — with the number of profiles in each.
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
await client.implementationGuides.implementationGuides.list();

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

**requestOptions:** `ImplementationGuidesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.implementationGuides.implementationGuides.<a href="/src/api/resources/implementationGuides/resources/implementationGuides/client/Client.ts">get</a>(name) -> phenoml.ImplementationGuideDetail</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single implementation guide, including its profile_context and
the ids of the profiles that belong to it.
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
await client.implementationGuides.implementationGuides.get("acme-cardiology");

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

**name:** `string` — The implementation guide name.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ImplementationGuidesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.implementationGuides.implementationGuides.<a href="/src/api/resources/implementationGuides/resources/implementationGuides/client/Client.ts">update</a>(name, { ...params }) -> phenoml.ImplementationGuideSummary</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets (or clears, with an empty value) the natural-language profile_context
for an implementation guide. The context is injected into the LLM during
resource detection to help select the right profiles from this guide.
It applies to every profile in the guide.
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
await client.implementationGuides.implementationGuides.update("acme-cardiology");

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

**name:** `string` — The implementation guide name.
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.implementationGuides.UpdateImplementationGuideRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ImplementationGuidesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.implementationGuides.implementationGuides.<a href="/src/api/resources/implementationGuides/resources/implementationGuides/client/Client.ts">delete</a>(name) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the guide's metadata and all its canonical package versions.
Custom profiles and their implementation-guide assignments are preserved.
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
await client.implementationGuides.implementationGuides.delete("acme-cardiology");

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

**name:** `string` — The implementation guide name.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ImplementationGuidesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.implementationGuides.implementationGuides.<a href="/src/api/resources/implementationGuides/resources/implementationGuides/client/Client.ts">createVersion</a>(name, { ...params }) -> phenoml.ImplementationGuideVersionDetail</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Publishes an exact package beneath this guide family. Each guide family
supports one exact package version. Publishing another version returns
`409 Conflict`.
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
await client.implementationGuides.implementationGuides.createVersion("name", {
    implementation_guide: {
        resourceType: "ImplementationGuide",
        url: "url",
        version: "version"
    },
    profile_refs: ["profile_refs"]
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

**name:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.implementationGuides.CreateCanonicalImplementationGuideRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ImplementationGuidesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.implementationGuides.implementationGuides.<a href="/src/api/resources/implementationGuides/resources/implementationGuides/client/Client.ts">getVersion</a>(name, version) -> phenoml.ImplementationGuideVersionDetail</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.implementationGuides.implementationGuides.getVersion("name", "1.0.0");

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

**name:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**version:** `string` — The authored ImplementationGuide.version. It may contain letters, numbers, and the punctuation characters `.`, `_`, `~`, `+`, and `-`; it cannot be exactly `.` or `..`.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ImplementationGuidesClient.RequestOptions` 
    
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

Converts natural language text into a structured FHIR resource.

The complete JSON request body is limited to 32 MiB (33,554,432 bytes). The application enforces this whole-envelope limit.

**Patient identifier handling.** When generating a `patient` (or `patient-canvas`) resource, US Core requires `Patient.identifier` (a business identifier such as an MRN). When the source text contains an identifier, it is extracted with an appropriate URI system. When the source text does not contain a detectable identifier, a synthetic one is generated with `system: "urn:phenoml:lang2fhir-generated-id"` and a UUID `value` so the resource remains FHIR-valid and US Core conformant. Callers who need a tenant-specific namespace should rewrite the synthetic system after extraction.
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
    resource: "condition-encounter-diagnosis",
    text: "Patient has severe persistent asthma with acute exacerbation"
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

**requestOptions:** `Lang2FhirClient.RequestOptions` 
    
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

The complete JSON request body is limited to 32 MiB (33,554,432 bytes). The application enforces this whole-envelope limit.

**Patient handling.** Every bundle contains exactly one Patient, and every clinical resource references it. When the text names its patient, the Patient is built from the text. When it names several patients, the Patient is the one `primary_patient` names, otherwise the one most of the text is about; the others are not represented as Patients. Otherwise it is built from `primary_patient` when supplied, or is an unidentified Patient carrying only a synthetic identifier. When the text names its patient, the `primary_patient` identifier is added to that Patient unless its name, birth date, or gender contradicts the text's; the response `message` says whether it was added or did not match.

**Patient identifier handling.** US Core requires `Patient.identifier` (a business identifier such as an MRN). Every Patient carries a synthetic identifier with `system: "urn:phenoml:lang2fhir-generated-id"` and a UUID `value`, so the bundle remains FHIR-valid and US Core conformant. A medical record number stated in the text is added with `system: "urn:phenoml:lang2fhir-document-mrn"`, and the `primary_patient` identifier is added as described above. Callers who need a tenant-specific namespace should rewrite these systems after extraction.
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
    text: "John Smith, 45-year-old male, diagnosed with Type 2 Diabetes. Prescribed Metformin 500mg twice daily. Blood pressure 140/90.",
    version: "R4"
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

**requestOptions:** `Lang2FhirClient.RequestOptions` 
    
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

**requestOptions:** `Lang2FhirClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lang2Fhir.<a href="/src/api/resources/lang2Fhir/client/Client.ts">uploadProfile</a>({ ...params }) -> phenoml.UploadProfileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

**Deprecated — use `POST /fhir/profiles` instead.** This route continues to work
and operates on the same custom profiles, so no migration is required; it
will be removed in a future release. Note that `POST /fhir/profiles` does not
accept `profile_context`; set implementation-guide context with
`PUT /fhir/implementation-guides/{name}`.

Upload a custom FHIR StructureDefinition profile for use with the lang2fhir service.

All metadata is derived from the StructureDefinition JSON itself. The lowercase `id` field
from the StructureDefinition is used as the profile's unique identifier and lookup key.
To use the uploaded profile with `/lang2fhir/create`, pass this id as the `resource` parameter.

Uploads will be rejected if:
- A built-in profile (US Core, PhenoML HPO, or R4 base) already exists with the same id, or the id starts with a reserved prefix (`us-core-`, `phenoml-hpo-`)
- A custom profile with the same id has already been uploaded
- A custom profile with the same url has already been uploaded
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
    profile: "eyJyZXNvdXJjZVR5cGUiOiJTdHJ1Y3R1cmVEZWZpbml0aW9uIiwiaWQiOiJjdXN0b20tcGF0aWVudCIsInVybCI6Imh0dHA6Ly9waGVub21sLmNvbS9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY3VzdG9tLXBhdGllbnQiLCJuYW1lIjoiQ3VzdG9tUGF0aWVudCIsInN0YXR1cyI6ImFjdGl2ZSIsImZoaXJWZXJzaW9uIjoiNC4wLjEiLCJraW5kIjoicmVzb3VyY2UiLCJhYnN0cmFjdCI6ZmFsc2UsInR5cGUiOiJQYXRpZW50IiwiYmFzZURlZmluaXRpb24iOiJodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vUGF0aWVudCIsImRlcml2YXRpb24iOiJjb25zdHJhaW50Iiwic25hcHNob3QiOnsiZWxlbWVudCI6W3siaWQiOiJQYXRpZW50IiwicGF0aCI6IlBhdGllbnQiLCJtaW4iOjAsIm1heCI6IioifSx7ImlkIjoiUGF0aWVudC5uYW1lIiwicGF0aCI6IlBhdGllbnQubmFtZSIsIm1pbiI6MSwibWF4IjoiKiJ9XX19Cg==",
    implementation_guide: "acme-cardiology",
    profile_context: "When clinical text describes cardiology-specific findings, prefer this profile over the generic US Core Condition."
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

**request:** `phenoml.ProfileUploadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2FhirClient.RequestOptions` 
    
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

Extracts text from a PDF, image, RTF, or XML/C-CDA document and converts it into a structured FHIR resource.

The complete JSON request body is limited to 32 MiB (33,554,432 bytes). The application enforces this whole-envelope limit, including base64-encoded document `content`.

**Patient identifier handling.** When generating a `patient` (or `patient-canvas`) resource, US Core requires `Patient.identifier` (a business identifier such as an MRN). When the source text contains an identifier, it is extracted with an appropriate URI system. When the source text does not contain a detectable identifier, a synthetic one is generated with `system: "urn:phenoml:lang2fhir-generated-id"` and a UUID `value` so the resource remains FHIR-valid and US Core conformant. Callers who need a tenant-specific namespace should rewrite the synthetic system after extraction.
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
    content: "JVBERi0xLjQKJeLjz9MK...(base64-encoded document bytes)"
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

**requestOptions:** `Lang2FhirClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lang2Fhir.<a href="/src/api/resources/lang2Fhir/client/Client.ts">documentMulti</a>({ ...params }) -> phenoml.DocumentMultiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Extracts text from a PDF, image, RTF, or XML/C-CDA document and converts it into multiple FHIR resources,
returned as a transaction Bundle. Combines document text extraction with multi-resource detection.
Automatically detects Patient, Condition, MedicationRequest, Observation, and other resource types.
Resources are linked with proper references (e.g., Conditions reference the Patient).

The complete JSON request body is limited to 32 MiB (33,554,432 bytes). The application enforces this whole-envelope limit, including base64-encoded document `content`.

**Patient handling.** Every bundle contains exactly one Patient, and every clinical resource references it. When the document names its patient, the Patient is built from the document. When it names several patients, the Patient is the one `primary_patient` names, otherwise the one most of the document is about; the others are not represented as Patients. Otherwise it is built from `primary_patient` when supplied, or is an unidentified Patient carrying only a synthetic identifier. When the document names its patient, the `primary_patient` identifier is added to that Patient unless its name, birth date, or gender contradicts the document's; the response `message` says whether it was added or did not match.

**Patient identifier handling.** US Core requires `Patient.identifier` (a business identifier such as an MRN). Every Patient carries a synthetic identifier with `system: "urn:phenoml:lang2fhir-generated-id"` and a UUID `value`, so the bundle remains FHIR-valid and US Core conformant. A medical record number stated in the document is added with `system: "urn:phenoml:lang2fhir-document-mrn"`, and the `primary_patient` identifier is added as described above. Callers who need a tenant-specific namespace should rewrite these systems after extraction.

**Page classification (optional).** By default, every page with extracted text is used for extraction, and the response omits `page_classifications`. To classify pages so they can be grouped or dropped before extraction, set `config.split_classifications`. An empty list is the same as omitting it.

`split_classifications` is a list of up to 20 classifications that you define; there is no fixed taxonomy. Each classification has:
- `id`: your label for the classification. Ids must be non-blank, unique, up to 64 characters, and must not be the reserved value `__ungrouped__`.
- `description`: a non-blank description, up to 500 characters, of the pages that belong to the classification. Each page's text is compared against these descriptions, so describe what sets those pages apart from the rest of the document.
- `operation`: `group` keeps matching pages and labels the resources extracted from them; `drop` removes matching pages before extraction.

Each page is classified on its own text and assigned at most one classification. A page that does not clearly match any classification is left ungrouped. Ungrouped pages are kept, but resources extracted only from ungrouped pages are not labeled. A page that cannot be classified, for example because classification failed temporarily, is also kept and left ungrouped.

A resource's label comes from its `resources[].sourcePages`. When those pages include `group` pages, the resource carries the classification `id` in `resources[].group` and as a `meta.tag` with `system: "https://phenoml.com/fhir/split-classification"`. When its source pages span more than one group, it takes the group that covers the most of them; ties go to the group with the earliest source page. Resources without `sourcePages` are not labeled.

The response's `page_classifications` reports the decision for every page, kept or dropped. When every page is dropped, the response has `success: false`, a `message`, and `page_classifications`, with `bundle` and `resources` set to null.

For example, the `clinical` and `admin` classifications in the request example keep and label clinical pages and drop administrative pages. To skip lab or diagnostic order forms, add a `drop` classification that describes them.
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
await client.lang2Fhir.documentMulti({
    version: "R4",
    content: "JVBERi0xLjQKJeLjz9MK...(base64-encoded document bytes)",
    provider: "medplum",
    config: {
        split_classifications: [{
                id: "clinical",
                description: "Clinical notes, diagnoses, medications, observations, and patient demographics.",
                operation: "group"
            }, {
                id: "admin",
                description: "Administrative boilerplate, insurance forms, and cover sheets.",
                operation: "drop"
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

**request:** `phenoml.lang2Fhir.DocumentMultiRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2FhirClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Lang2FhirBatch
<details><summary><code>client.lang2FhirBatch.<a href="/src/api/resources/lang2FhirBatch/client/Client.ts">list</a>({ ...params }) -> phenoml.JobListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a page of the instance's batch jobs, newest first, without
per-job counts. Jobs are shared across the instance's credentials, so
this lists every batch job on the instance, not just the calling
credential's.
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
await client.lang2FhirBatch.list({
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

**request:** `phenoml.lang2FhirBatch.ListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2FhirBatchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lang2FhirBatch.<a href="/src/api/resources/lang2FhirBatch/client/Client.ts">create</a>({ ...params }) -> phenoml.BatchJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Opens an empty job; upload items, then finalize it to start processing.

`request_id` makes creation idempotent: a retry returns the original
job. A token is released when its job is canceled or fails before
finalization; otherwise it continues to resolve to that job.
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
await client.lang2FhirBatch.create({
    request_id: "submit-2025-09-02-batch-001"
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

**request:** `phenoml.lang2FhirBatch.CreateBatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2FhirBatchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lang2FhirBatch.<a href="/src/api/resources/lang2FhirBatch/client/Client.ts">uploadItem</a>(job_id, { ...params }) -> phenoml.UploadItemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Stores one multipart item. Set **either** `document` with a raw `file`,
or JSON-only `create`.

Set exactly one JSON object. `document` requires `file`; `create`
forbids it. Violations return `400`.

Upload validates only the envelope. Endpoint request validation happens
during processing: decoding failures are `invalid_input`; other pipeline
failures are `processing_failed`.

Use `request_id` for every upload so retries replace the same item.
`deduplicated` is true only for an unchanged payload; a changed payload
overwrites the item and returns false.

Uploads return `409` after finalization or at the item limit, and `413`
when the item is too large.
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
await client.lang2FhirBatch.uploadItem("job_id", {});

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

**job_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.lang2FhirBatch.UploadItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2FhirBatchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lang2FhirBatch.<a href="/src/api/resources/lang2FhirBatch/client/Client.ts">finalize</a>(job_id) -> phenoml.BatchJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Seals the job's item set and starts processing. Takes no request body.
Finalize is idempotent: a retried finalize succeeds again.

If a previous upload did not complete, finalize returns a `409`; re-send
the missing upload (with the same `request_id`), then finalize.
Finalizing a job with no items is a `400`.
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
await client.lang2FhirBatch.finalize("job_id");

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

**job_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2FhirBatchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lang2FhirBatch.<a href="/src/api/resources/lang2FhirBatch/client/Client.ts">cancel</a>(job_id) -> phenoml.BatchJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Drives a job to the terminal `canceled` state on request. Takes no
request body.

Cancel does not delete the job: the job record and any results already
produced are preserved for the normal retention window, the same as a
`completed` or `failed` job. Items stop being processed and keep the state
they held at cancellation, so a canceled job's `counts` may show
unfinished items that never resolve.

Cancel is idempotent: canceling an already-`canceled` job returns `200`
with the job. Canceling a job that has already `completed` or `failed` is
a `409`.
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
await client.lang2FhirBatch.cancel("job_id");

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

**job_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2FhirBatchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lang2FhirBatch.<a href="/src/api/resources/lang2FhirBatch/client/Client.ts">get</a>(job_id, { ...params }) -> phenoml.JobDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a job's record, its per-status item counts, and one page of
per-item statuses.

Items are listed in a stable order that is not upload order and is the
same across pages. Match each entry to your own records by its `id`
(your correlation label) or `item_id` (from the upload response),
never by position.
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
await client.lang2FhirBatch.get("job_id", {
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

**job_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.lang2FhirBatch.GetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2FhirBatchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lang2FhirBatch.<a href="/src/api/resources/lang2FhirBatch/client/Client.ts">getResults</a>(job_id, { ...params }) -> phenoml.ResultsPageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A lighter status page. Returns the same per-item status entries as
`GET /lang2fhir/batch/{job_id}`, but without the job record or counts,
and the entries carry `result_size` rather than any result content. Use
each entry's `item_id` to fetch that item's result from
`GET /lang2fhir/batch/{job_id}/results/{item_id}`.

Entries are listed in a stable order that is not upload order and is
the same across pages. Match each entry to your own records by its `id`
(your correlation label) or `item_id` (from the upload response),
never by position.
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
await client.lang2FhirBatch.getResults("job_id", {
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

**job_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.lang2FhirBatch.GetResultsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2FhirBatchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lang2FhirBatch.<a href="/src/api/resources/lang2FhirBatch/client/Client.ts">getResult</a>(job_id, item_id) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Streams one item's stored result bytes verbatim as `application/json`.
The body is the response the item's synchronous multi endpoint would have
returned — a `DocumentMultiResponse` for a document item or a
`CreateMultiResponse` for a create item.

Only a succeeded item has a result: an item that has not succeeded
(pending, processing, or failed) is a `409`, and a result that has
expired is a `404`.
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
await client.lang2FhirBatch.getResult("job_id", "item_id");

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

**job_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**item_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lang2FhirBatchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Profiles
<details><summary><code>client.profiles.profiles.<a href="/src/api/resources/profiles/resources/profiles/client/Client.ts">list</a>({ ...params }) -> phenoml.ProfileListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for every custom (uploaded) FHIR profile on this
instance, across all implementation guides. The full StructureDefinition
JSON is omitted from each entry; fetch a single profile by id to retrieve it.

The `url` query parameter filters by canonical URL. The canonical URL is the
stable key other platform features use to reference a profile (FHIR's
`meta.profile`, `baseDefinition`), since StructureDefinition ids are only
unique within a package. An unpinned `url` filter returns metadata for
the profile's current StructureDefinition. Pinned `url|version` filters
resolve a retained version when present; otherwise they can fall back to
the profile's current StructureDefinition, whose content can change
through the profile update endpoint. A non-matching filter returns an
empty list, not a 404.
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
await client.profiles.profiles.list({
    url: "http://phenoml.com/fhir/StructureDefinition/custom-patient|1.0.0"
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

**request:** `phenoml.profiles.ListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.profiles.profiles.<a href="/src/api/resources/profiles/resources/profiles/client/Client.ts">create</a>({ ...params }) -> phenoml.ProfileSummary</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a custom profile from a FHIR StructureDefinition supplied as a JSON
object. Metadata such as version, resource type, and url is read from the
StructureDefinition; the lowercase StructureDefinition id becomes the
profile's lookup key. When id is omitted, a random UUID is assigned.
Optionally group the profile under a named implementation guide.
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
await client.profiles.profiles.create({
    structure_definition: {
        "resourceType": "StructureDefinition",
        "id": "custom-patient",
        "url": "http://phenoml.com/fhir/StructureDefinition/custom-patient",
        "name": "CustomPatient",
        "status": "active",
        "fhirVersion": "4.0.1",
        "kind": "resource",
        "abstract": false,
        "type": "Patient",
        "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Patient",
        "derivation": "constraint",
        "snapshot": {
            "element": [
                {
                    "id": "Patient",
                    "path": "Patient",
                    "min": 0,
                    "max": "*"
                }
            ]
        }
    },
    implementation_guide: "acme-cardiology"
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

**request:** `phenoml.ProfileUploadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.profiles.profiles.<a href="/src/api/resources/profiles/resources/profiles/client/Client.ts">get</a>(id) -> phenoml.ProfileGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single custom profile by id, including its full StructureDefinition
JSON.
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
await client.profiles.profiles.get("custom-patient");

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

**id:** `string` — The lowercase StructureDefinition id of the custom profile.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.profiles.profiles.<a href="/src/api/resources/profiles/resources/profiles/client/Client.ts">update</a>(id, { ...params }) -> phenoml.ProfileSummary</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replaces an existing custom profile with a new StructureDefinition. The
`id` path parameter is authoritative: if the StructureDefinition includes
an `id` it must match the path parameter, and if it omits one the path
parameter is used. The FHIR resource type of the profile cannot change.
When `implementation_guide` is omitted, the profile keeps its existing
implementation guide. A retained version string is allowed only when
re-submitting the profile's current version with an unchanged
StructureDefinition; otherwise it returns a conflict. While the profile
has retained versions, its
canonical URL cannot be changed.
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
await client.profiles.profiles.update("custom-patient", {
    structure_definition: {
        "resourceType": "StructureDefinition",
        "id": "custom-patient",
        "url": "http://phenoml.com/fhir/StructureDefinition/custom-patient",
        "name": "CustomPatient",
        "status": "active",
        "fhirVersion": "4.0.1",
        "kind": "resource",
        "abstract": false,
        "type": "Patient",
        "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Patient",
        "derivation": "constraint",
        "snapshot": {
            "element": [
                {
                    "id": "Patient",
                    "path": "Patient",
                    "min": 0,
                    "max": "*"
                }
            ]
        }
    },
    implementation_guide: "acme-cardiology"
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

**id:** `string` — The lowercase StructureDefinition id of the custom profile.
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.ProfileUploadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.profiles.profiles.<a href="/src/api/resources/profiles/resources/profiles/client/Client.ts">delete</a>(id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently deletes a custom profile by id. This also deletes all retained
versions for that profile so the canonical URL can be reused by a later
upload.
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
await client.profiles.profiles.delete("custom-patient");

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

**id:** `string` — The lowercase StructureDefinition id of the custom profile.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Profiles Versions
<details><summary><code>client.profiles.versions.<a href="/src/api/resources/profiles/resources/versions/client/Client.ts">list</a>(id) -> phenoml.ProfileVersionListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns retained versions for a custom profile.
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
await client.profiles.versions.list("custom-patient");

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

**id:** `string` — The lowercase StructureDefinition id of the custom profile.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.profiles.versions.<a href="/src/api/resources/profiles/resources/versions/client/Client.ts">create</a>(id, { ...params }) -> phenoml.ProfileSummary</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds an immutable StructureDefinition version to a custom profile. If
the profile does not exist, it is created from the submitted version.
The StructureDefinition must include a non-empty `version`; its
canonical URL and resource type must match the profile when one already
exists. If it includes an `id`, that id must match the path parameter;
if it omits `id`, the path parameter is used. Profiles created through
this endpoint are grouped under `custom`. Posting the profile's current
StructureDefinition unchanged retains it as a version.
Version strings may contain letters, numbers, and the punctuation
characters `.`, `_`, `~`, `+`, and `-`; they cannot be exactly `.` or
`..`. Each profile can retain up to 250 versions; delete old
versions before adding more.
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
await client.profiles.versions.create("custom-patient", {
    "key": "value"
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

**id:** `string` — The lowercase StructureDefinition id of the custom profile.
    
</dd>
</dl>

<dl>
<dd>

**request:** `phenoml.ProfileVersionCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.profiles.versions.<a href="/src/api/resources/profiles/resources/versions/client/Client.ts">get</a>(id, version) -> phenoml.ProfileGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata and the full StructureDefinition for one retained
version. The returned StructureDefinition's id is the profile id. The
path version is the authored `StructureDefinition.version` value.
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
await client.profiles.versions.get("custom-patient", "2.0.0");

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

**id:** `string` — The lowercase StructureDefinition id of the custom profile.
    
</dd>
</dl>

<dl>
<dd>

**version:** `string` — The authored StructureDefinition.version. It may contain letters, numbers, and the punctuation characters `.`, `_`, `~`, `+`, and `-`; it cannot be exactly `.` or `..`.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.profiles.versions.<a href="/src/api/resources/profiles/resources/versions/client/Client.ts">delete</a>(id, version) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes one retained version from a custom profile. The path
version is the authored `StructureDefinition.version` value.
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
await client.profiles.versions.delete("custom-patient", "2.0.0");

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

**id:** `string` — The lowercase StructureDefinition id of the custom profile.
    
</dd>
</dl>

<dl>
<dd>

**version:** `string` — The authored StructureDefinition.version. It may contain letters, numbers, and the punctuation characters `.`, `_`, `~`, `+`, and `-`; it cannot be exactly `.` or `..`.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Summary
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
    mode: "narrative",
    template_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    fhir_resources: {
        "resourceType": "Bundle",
        "type": "collection",
        "entry": [
            {
                "resource": {
                    "resourceType": "Patient",
                    "name": [
                        {
                            "given": [
                                "John"
                            ],
                            "family": "Doe"
                        }
                    ],
                    "gender": "male",
                    "birthDate": "1979-03-15"
                }
            },
            {
                "resource": {
                    "resourceType": "Condition",
                    "code": {
                        "text": "Type 2 Diabetes Mellitus"
                    },
                    "onsetDateTime": "2024-01-15"
                }
            }
        ]
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

**requestOptions:** `SummaryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Templates
<details><summary><code>client.summary.templates.<a href="/src/api/resources/summary/resources/templates/client/Client.ts">list</a>() -> phenoml.ListResponse</code></summary>
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
await client.summary.templates.list();

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

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.summary.templates.<a href="/src/api/resources/summary/resources/templates/client/Client.ts">create</a>({ ...params }) -> phenoml.CreateSummaryTemplateResponse</code></summary>
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
await client.summary.templates.create({
    name: "Discharge Summary",
    example_summary: "Patient John Doe, age 45, was admitted on 2024-01-10 with Type 2 Diabetes. Discharged on 2024-01-15 with Metformin 500mg BID.",
    target_resources: ["Patient", "Condition", "MedicationRequest"],
    mode: "narrative"
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

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.summary.templates.<a href="/src/api/resources/summary/resources/templates/client/Client.ts">get</a>(id) -> phenoml.GetResponse</code></summary>
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
await client.summary.templates.get("id");

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

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.summary.templates.<a href="/src/api/resources/summary/resources/templates/client/Client.ts">update</a>(id, { ...params }) -> phenoml.UpdateResponse</code></summary>
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
await client.summary.templates.update("id", {
    name: "Discharge Summary",
    template: "Patient {{Patient.name[0].text}} was discharged on {{Encounter[0].period.end}} with {{MedicationRequest[0].medicationCodeableConcept.coding[0].display}} {{MedicationRequest[0].dosageInstruction[0].text}}.",
    target_resources: ["Patient", "Encounter", "MedicationRequest"],
    mode: "narrative"
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

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.summary.templates.<a href="/src/api/resources/summary/resources/templates/client/Client.ts">delete</a>(id) -> phenoml.DeleteResponse</code></summary>
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
await client.summary.templates.delete("id");

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

**requestOptions:** `TemplatesClient.RequestOptions` 
    
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
    resource: "condition-encounter-diagnosis",
    text: "Patient has severe persistent asthma with acute exacerbation",
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

**request:** `phenoml.tools.Lang2FhirAndCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ToolsClient.RequestOptions` 
    
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
    version: "R4",
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

**requestOptions:** `ToolsClient.RequestOptions` 
    
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
    text: "Find all appointments for patient John Doe next week",
    count: 10,
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

**request:** `phenoml.tools.Lang2FhirAndSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ToolsClient.RequestOptions` 
    
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

**requestOptions:** `ToolsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## MCP Servers
<details><summary><code>client.tools.mcpServers.<a href="/src/api/resources/tools/resources/mcpServers/client/Client.ts">create</a>({ ...params }) -> phenoml.McpServerResponse</code></summary>
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
await client.tools.mcpServers.create({
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

**requestOptions:** `McpServersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.mcpServers.<a href="/src/api/resources/tools/resources/mcpServers/client/Client.ts">list</a>() -> phenoml.McpServerResponse</code></summary>
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
await client.tools.mcpServers.list();

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

**requestOptions:** `McpServersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.mcpServers.<a href="/src/api/resources/tools/resources/mcpServers/client/Client.ts">get</a>(mcp_server_id) -> phenoml.McpServerResponse</code></summary>
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
await client.tools.mcpServers.get("mcp_server_id");

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

**mcp_server_id:** `string` — ID of the MCP server to retrieve
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `McpServersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.mcpServers.<a href="/src/api/resources/tools/resources/mcpServers/client/Client.ts">delete</a>(mcp_server_id) -> phenoml.McpServerResponse</code></summary>
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
await client.tools.mcpServers.delete("mcp_server_id");

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

**mcp_server_id:** `string` — ID of the MCP server to delete
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `McpServersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tools McpTools
<details><summary><code>client.tools.mcpTools.<a href="/src/api/resources/tools/resources/mcpTools/client/Client.ts">list</a>(mcp_server_id) -> phenoml.McpServerToolResponse</code></summary>
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
await client.tools.mcpTools.list("mcp_server_id");

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

**mcp_server_id:** `string` — ID of the MCP server to list tools for
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `McpToolsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.mcpTools.<a href="/src/api/resources/tools/resources/mcpTools/client/Client.ts">get</a>(mcp_server_tool_id) -> phenoml.McpServerToolResponse</code></summary>
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
await client.tools.mcpTools.get("mcp_server_tool_id");

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

**mcp_server_tool_id:** `string` — ID of the MCP server tool to retrieve
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `McpToolsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.mcpTools.<a href="/src/api/resources/tools/resources/mcpTools/client/Client.ts">delete</a>(mcp_server_tool_id) -> phenoml.McpServerToolResponse</code></summary>
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
await client.tools.mcpTools.delete("mcp_server_tool_id");

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

**mcp_server_tool_id:** `string` — ID of the MCP server tool to delete
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `McpToolsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Voice
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

**request:** `phenoml.workflows.ListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowsClient.RequestOptions` 
    
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
    workflow_instructions: "Given diagnosis data, find the patient and create a condition record linked to their encounter",
    sample_data: {
        "patient_last_name": "Rippin",
        "patient_first_name": "Clay",
        "diagnosis_code": "I10",
        "encounter_date": "2024-01-15"
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

**requestOptions:** `WorkflowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">get</a>(id, { ...params }) -> phenoml.GetResponse</code></summary>
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

**request:** `phenoml.workflows.GetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">update</a>(id, { ...params }) -> phenoml.UpdateResponse</code></summary>
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
    name: "Patient Data Mapping Workflow (v2)",
    workflow_instructions: "Given diagnosis data, find the patient and create a condition record linked to their encounter",
    sample_data: {
        "patient_last_name": "Rippin",
        "patient_first_name": "Clay",
        "diagnosis_code": "I10",
        "encounter_date": "2024-01-15"
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

**requestOptions:** `WorkflowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">delete</a>(id) -> phenoml.DeleteResponse</code></summary>
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

**requestOptions:** `WorkflowsClient.RequestOptions` 
    
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
await client.workflows.execute("7a8b9c0d-1234-5678-abcd-ef9876543210", {
    input_data: {
        "patient_last_name": "Johnson",
        "patient_first_name": "Mary",
        "diagnosis_code": "M79.3",
        "encounter_date": "2024-03-20"
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

**requestOptions:** `WorkflowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>


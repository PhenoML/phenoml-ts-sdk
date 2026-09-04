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

Returns the terminology server's catalog of available code systems, including both built-in standard terminologies and custom uploaded systems.
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

**Alpha:** phenocr is an alpha feature. The API contract — request
parameters and response shape — may change as its internals evolve, and
results may vary between releases. Do not depend on it for production
workloads yet.

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

Returns a paginated list of all codes in the specified code system from the terminology server.

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

Looks up a specific code in the terminology server and returns its details.

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

Maps a FHIR R4 resource or Bundle into OMOP Common Data Model v5.4 rows
(person, visit_occurrence, condition_occurrence, drug_exposure,
procedure_occurrence, measurement, observation).

Resource support is intentionally limited to the OMOP tables returned by
this endpoint:
- `Patient` -> `person`
- `Encounter` -> `visit_occurrence`
- `Condition` -> `condition_occurrence`
- `Procedure` -> `procedure_occurrence`
- `MedicationRequest`, `MedicationStatement`, and
  `MedicationAdministration` -> `drug_exposure`
- `Immunization` -> `drug_exposure`
- `Observation` with a numeric `valueQuantity`, `valueInteger`, or
  numeric-looking `valueString` (for example `"<2"`) -> `measurement`
- non-numeric `Observation` -> `observation`
- `AllergyIntolerance` -> `observation`

`Medication` is supported only as reference data for medication
resources; it is not emitted as its own row because OMOP CDM has no
Medication table. Other reference/admin resources such as `Practitioner`,
`Organization`, `Location`, `Coverage`, and `Claim`, and clinical
workflow/document resources such as `DiagnosticReport`, `ServiceRequest`,
`CarePlan`, `DocumentReference`, `Composition`, `Specimen`, and
`DeviceUseStatement`, are currently accepted in a Bundle but are not
shaped into OMOP rows. Unsupported resource types are ignored rather than
listed under `dropped`; `dropped` is reserved for supported resource types
that were missing the subject/patient, code, or medication reference data
needed to produce a valid row.

Each resource's primary clinical coding is resolved to a standard OMOP
`concept_id`. Alongside the OMOP rows grouped by table (`tables`), the
response carries `mappings` (how each source coding resolved, linked back
to the row it produced), `dropped` (resources that could not be shaped
into a row), `vocab_version` (the OMOP vocabulary release codes were
resolved against), and a small `summary` of the resolution outcomes.

A `concept_id` of `0` is reported, not omitted (OMOP "no matching
concept" semantics): it covers both a coding with no standard match
(`UNMAPPED`) and an unverified suggestion for a text-only resource
(`UNCHECKED`). Only the primary clinical coding is resolved, so
`gender`/`race`/`ethnicity`/`visit`/`value`/`unit` `concept_id`s are
always `0`; the one populated non-resolved concept is measurement
`operator_concept_id`, set from a value comparator (`<`, `<=`, `>`, `>=`)
rather than the resolver. Each `*_source_value` carries the verbatim FHIR
coding (`system#code`), and `*_type_concept_id` is set to `32817` (EHR).

Medication codes are resolved whether they appear inline
(`medicationCodeableConcept`) or via a `medicationReference` to a contained,
relative (`Type/id`), or bundle-entry (`urn:uuid`) `Medication` resource.
Resources that cannot be shaped into a row — a medication with no usable
code, resolvable reference, or display, or any clinical resource whose
subject/patient reference cannot be tied to a person — are reported under
`dropped` rather than emitted as blank rows. The
bundle must contain at least one Patient resource.
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

Deletes the stored metadata for an implementation guide — its
profile_context and timestamps. Member profiles keep their
implementation_guide assignment, so a guide still referenced by at least
one profile continues to appear in listings, just without context or
timestamps.
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

**Patient identifier handling.** US Core requires `Patient.identifier` (a business identifier such as an MRN). When the source text contains an identifier, it is extracted with an appropriate URI system. When the source text does not contain a detectable identifier, a synthetic one is generated with `system: "urn:phenoml:lang2fhir-generated-id"` and a UUID `value` so the bundle remains FHIR-valid and US Core conformant. Callers who need a tenant-specific namespace should rewrite the synthetic system after extraction.
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
- A built-in US Core or R4 base profile already exists with the same id
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

Extracts text from a document (PDF or image) and converts it into a structured FHIR resource.

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
    content: "JVBERi0xLjQKJeLjz9MK...(base64-encoded PDF or image bytes)"
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

Extracts text from a document (PDF or image) and converts it into multiple FHIR resources,
returned as a transaction Bundle. Combines document text extraction with multi-resource detection.
Automatically detects Patient, Condition, MedicationRequest, Observation, and other resource types.
Resources are linked with proper references (e.g., Conditions reference the Patient).

**Patient identifier handling.** US Core requires `Patient.identifier` (a business identifier such as an MRN). When the source text contains an identifier, it is extracted with an appropriate URI system. When the source text does not contain a detectable identifier, a synthetic one is generated with `system: "urn:phenoml:lang2fhir-generated-id"` and a UUID `value` so the bundle remains FHIR-valid and US Core conformant. Callers who need a tenant-specific namespace should rewrite the synthetic system after extraction.

**Split classifications (optional).** `config.split_classifications` is a caller-defined list, not a fixed taxonomy. Choose each classification `id` and write a natural-language `description` for the per-page classifier. For each page, the classifier assigns the best-matching classification or leaves the page ungrouped. Classifications with `operation: "group"` keep matching pages and label resources extracted from those pages; classifications with `operation: "drop"` remove matching pages before extraction. The `clinical` and `admin` ids in the example are illustrative, not a fixed set.
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
    content: "JVBERi0xLjQKJeLjz9MK...(base64-encoded PDF or image bytes)",
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

Opens an empty batch job. Items arrive on later upload calls and the set
is sealed at finalize.

Supplying `request_id` makes the create idempotent on that token: a
retried submit whose response was lost returns the original job rather
than opening a second one. This dedupe is scoped to the calling
credential.

An instance may hold at most 4 active (pending or processing) jobs at
once; a create past that limit returns `409`. The limit is instance-wide
— jobs are shared across the instance's credentials — so another
credential's jobs count against it.
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

Stores one item of a job from a multipart upload. A batch's items arrive
one per request. The item carries **either** a `document` extraction
(whose input file rides as raw bytes in the `file` part) **or** a
`create` extraction (JSON only, no file).

The upload enforces these rules:
- Set **exactly one** of `document` or `create`. Setting both, or
  neither, is a `400`.
- When `document` is set, `file` is **required** — it supplies the
  document's binary content (PDF or image).
- When `create` is set, `file` is **forbidden** — a create item carries
  no file.
- `document` and `create` must each be a JSON **object**.

Only the item's structure is checked here: the fields inside `document`
or `create` are not validated at upload. A body that is well-formed JSON
but not a valid request for its endpoint is still accepted with `202`
and fails later during processing, recorded as an item `error`. A
wrong-typed field the endpoint cannot decode fails as `invalid_input`; a
body that decodes but the pipeline rejects (for example, a missing
required field) fails as `processing_failed`.

Supplying `request_id` makes the upload idempotent on that token. A
re-upload under the same token overwrites the same item rather than
adding a second, so a client that lost an upload's response can safely
re-send it. The response's `deduplicated` is `true` only when the
re-uploaded payload matches the one already stored; a same-token upload
with a changed payload overwrites in place and returns `false`.

Set a `request_id` on **every** upload: re-sending under the same token
is the only way to repair a lost or incomplete upload, including the one
a finalize `409` reports. Without one, a re-send adds a new item instead
of replacing the missing one, and the job cannot be finalized.

Uploads are rejected once the job has been finalized (`409`), once it
holds its 500-item limit (`409`), or when the item is too large (`413` —
see the raw-file limit in the API description).
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


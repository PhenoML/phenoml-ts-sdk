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
    prompts: ["prompt_123", "prompt_456"],
    is_active: true,
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

**request:** `phenoml.agent.AgentCreateRequest`

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
await client.agent.list();
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
await client.agent.update("id");
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

**request:** `phenoml.agent.AgentUpdateRequest`

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
await client.agent.patch("id", [
    {
        op: "replace",
        path: "/name",
        value: "Updated Agent Name",
    },
    {
        op: "add",
        path: "/tags/-",
        value: "new-tag",
    },
    {
        op: "remove",
        path: "/description",
    },
]);
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
    message: "What is the patient's current condition?",
    agent_id: "agent-123",
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

## Agent Prompts

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
    content: "You are a helpful medical assistant specialized in FHIR data processing...",
    is_active: true,
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

Soft deletes a prompt by setting is_active to false

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
await client.agent.prompts.patch("id", [
    {
        op: "replace",
        path: "/name",
        value: "Updated Agent Name",
    },
    {
        op: "add",
        path: "/tags/-",
        value: "new-tag",
    },
    {
        op: "remove",
        path: "/description",
    },
]);
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
    identity: "identity",
    password: "password",
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
    text: "female patients over 65 with diabetes but not hypertension",
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
    file: "file",
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
    text: "Patient is a 14-year-old female, previously healthy, who is here for evaluation of abnormal renal ultrasound with atrophic right kidney",
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

<details><summary><code>client.construe.<a href="/src/api/resources/construe/client/Client.ts">cohort</a>({ ...params }) -> phenoml.ConstrueCohortResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a patient cohort based on a natural language description.
Translates the description into FHIR search queries and optional SQL queries.

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
await client.construe.cohort({
    text: "Between 20 and 40 years old with hyperlipidemia",
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

**request:** `phenoml.construe.ConstrueCohortRequest`

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
    text: "Patient has severe asthma with acute exacerbation",
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

<details><summary><code>client.lang2Fhir.<a href="/src/api/resources/lang2Fhir/client/Client.ts">search</a>({ ...params }) -> phenoml.SearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Converts natural language text into FHIR search parameters

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
    text: "Appointments between March 2-9, 2025",
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
    version: "version",
    resource: "custom-patient",
    profile: "profile",
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
    fileType: "application/pdf",
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
    resource: "auto",
    text: "Patient John Doe has severe asthma with acute exacerbation",
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
    text: "Find all appointments for patient John Doe next week",
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
    text: "female patients over 20 with diabetes but not hypertension",
    provider: "medplum",
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

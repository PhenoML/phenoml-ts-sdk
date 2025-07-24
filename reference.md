# Reference

<details><summary><code>client.<a href="/src/Client.ts">convertDocumentToFhirResource</a>({ ...params }) -> phenoml.FhirResource</code></summary>
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
await client.convertDocumentToFhirResource({
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

**request:** `phenoml.DocumentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `phenomlClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

##

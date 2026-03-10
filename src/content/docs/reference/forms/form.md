---
title: Form
description: API reference for the Form component — a schema-driven form builder backed by Cloudflare Workers and D1.
---

:::caution[Work in progress]
This page is a work in progress. Key fields are listed below. Full documentation with examples is coming soon.
:::

The `Form` component is a schema-driven form system. Define a form in config and Seemless generates the markup, handles validation (client-side with Zod and server-side in the Worker), stores submissions in D1, and optionally triggers notifications.

## `Form` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. Also used as the D1 table name prefix for submissions. |
| `fields` | `FormField[]` | The form field definitions (see below). |
| `submitLabel` | `string` | Submit button label. Defaults to `"Submit"`. |
| `successMessage` | `string` | Message shown on successful submission. |
| `errorMessage` | `string` | Message shown if the submission fails. |
| `action` | `string` | API route that handles the form POST. Defaults to `/api/forms/${id}`. |
| `notify` | `FormNotification` | Email or webhook notification on submission. |
| `storeSubmissions` | `boolean` | Persists submissions to D1. Defaults to `true`. |
| `honeypot` | `boolean` | Adds a hidden anti-spam honeypot field. Defaults to `true`. |
| `_version` | `number` | Revision counter. |

## `FormField` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique field identifier. Used as the `name` attribute. |
| `type` | `FormFieldType` | The input type. |
| `label` | `string` | Visible field label. |
| `placeholder` | `string` | Input placeholder text. |
| `required` | `boolean` | Adds required validation. |
| `validation` | `ZodSchema` | Custom Zod schema for advanced validation rules. |
| `width` | `"full" \| "half"` | Controls the field width in a two-column layout. |
| `options` | `string[]` | Allowed values — used for `select`, `radio`, and `checkbox` type fields. |

## `FormFieldType`

```ts
type FormFieldType =
  | "text"
  | "email"
  | "tel"
  | "url"
  | "textarea"
  | "select"
  | "radio"
  | "checkbox"
  | "number"
  | "date"
  | "file"
  | "hidden";
```

## `FormNotification` — planned fields

| Field | Type | Description |
|---|---|---|
| `email` | `string` | Send a notification email to this address on submission. |
| `webhookUrl` | `string` | POST submission data to this URL (e.g. a Slack or Discord webhook). |
| `replyToField` | `string` | Field `id` whose value is used as the reply-to address in notification emails. |

---
title: Button
description: API reference for the Button UI component — the atomic action element used throughout Seemless.
---

:::caution[Work in progress]
This page is a work in progress. Key fields are listed below. Full documentation with examples is coming soon.
:::

`Button` is the atomic action element. It covers both link buttons (`<a>`) and interaction buttons (`<button>`). The same type is reused as [`CtaButton`](/reference/header/#ctabutton) in the Header and [`CtaBanner`](/reference/sections/cta/) components.

## `Button` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. |
| `label` | `string` | Button text. |
| `href` | `string` | If provided, renders as an `<a>` tag. If omitted, renders as `<button type="button">`. |
| `target` | `LinkTarget` | `_blank`, `_self`, etc. Only applies when `href` is set. |
| `variant` | `ButtonVariant` | Visual style (see below). |
| `size` | `ButtonSize` | Size variant (see below). |
| `icon` | `Icon` | Optional icon rendered beside the label. |
| `loading` | `boolean` | Replaces the label with a spinner. Disables the button. |
| `disabled` | `boolean` | Renders the button in a disabled state. |
| `fullWidth` | `boolean` | Stretches the button to fill its container. |
| `trackingId` | `string` | Analytics event ID fired on click. |

## `ButtonVariant`

```ts
type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "destructive" | "link";
```

## `ButtonSize`

```ts
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
```

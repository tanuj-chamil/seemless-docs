---
title: Card
description: API reference for the Card UI component — a versatile container for content previews, product listings, and feature callouts.
---

:::caution[Work in progress]
This page is a work in progress. Key fields are listed below. Full documentation with examples is coming soon.
:::

`Card` is a general-purpose content container. It is used directly in layouts and also consumed internally by `FeatureItem` and `SubNavItem` in `"featured"` layout mode.

## `Card` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. |
| `title` | `string` | Card heading. |
| `description` | `string` | Supporting copy. |
| `image` | `Image` | Cover image rendered at the top of the card. |
| `icon` | `Icon` | Icon rendered in place of or above the title (used when no image). |
| `badge` | `Badge` | Label overlaid on the image or shown beside the title. |
| `link` | `Link` | Makes the entire card a clickable link. |
| `cta` | `Button` | Explicit CTA button rendered at the bottom of the card. |
| `variant` | `CardVariant` | Visual style variant (see below). |
| `_version` | `number` | Revision counter. |

## `CardVariant`

```ts
type CardVariant = "default" | "outlined" | "filled" | "ghost" | "elevated";
```

| Value | Description |
|---|---|
| `"default"` | Standard card with a subtle border. |
| `"outlined"` | Prominent border, no background fill. |
| `"filled"` | Solid background colour from the theme. |
| `"ghost"` | No border or background — content only. |
| `"elevated"` | Drop shadow for a raised, floating appearance. |

---
title: Badge
description: API reference for the Badge UI component — small inline labels used to communicate status, recency, or category.
---

:::caution[Work in progress]
This page is a work in progress. Key fields are listed below. Full documentation with examples is coming soon.
:::

`Badge` is an atomic inline label. The same type is reused across `NavItem`, `SubNavItem`, `Card`, `PricingPlan`, `Hero`, and more. Defined once in the shared types, used everywhere.

## `Badge` — fields

This is a fully defined type (not a placeholder — it is already used across the API).

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Badge text (e.g. `"New"`, `"Beta"`, `"Sale"`). Keep it short — 1–2 words. |
| `variant` | `BadgeVariant` | — | Preset colour scheme. Defaults to `"default"`. |
| `color` | `string` | — | CSS colour override. Overrides `variant` when both are set. |

## `BadgeVariant`

```ts
type BadgeVariant = "default" | "new" | "beta" | "sale" | "hot";
```

| Value | Suggested use |
|---|---|
| `"default"` | Neutral label — category or type tags |
| `"new"` | Recently added features or content |
| `"beta"` | Features in public beta |
| `"sale"` | Discounted pricing or promotions |
| `"hot"` | Trending or high-interest items |

## Usage examples

```ts
// On a NavItem
badge: { label: "New", variant: "new" }

// On a PricingPlan
badge: { label: "Most popular", variant: "hot" }

// Custom colour
badge: { label: "Internal", color: "#6366f1" }
```

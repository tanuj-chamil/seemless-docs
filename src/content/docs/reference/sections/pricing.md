---
title: Pricing
description: API reference for the Pricing section component — plan cards, feature comparison tables, and billing period toggles.
---

:::caution[Work in progress]
This page is a work in progress. Key fields are listed below. Full documentation with examples is coming soon.
:::

The `Pricing` component renders one or more plan cards with optional annual/monthly billing toggle and a feature comparison table. It is one of the highest-converting sections on a marketing site — the API is designed to make A/B testing and plan structure changes frictionless.

## `Pricing` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. |
| `heading` | `string` | Section heading. |
| `subheading` | `string` | Supporting paragraph. |
| `plans` | `PricingPlan[]` | The pricing tier definitions. |
| `billingToggle` | `boolean` | Shows a monthly/annual toggle. Enabling it requires both `monthlyPrice` and `annualPrice` on each plan. |
| `comparisonTable` | `ComparisonTable` | Optional detailed feature comparison rendered below the cards. |
| `background` | `string` | CSS colour or gradient for the section background. |
| `_version` | `number` | Revision counter. |

## `PricingPlan` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. |
| `name` | `string` | Plan name (e.g. `"Starter"`, `"Pro"`, `"Enterprise"`). |
| `description` | `string` | One-line plan summary. |
| `monthlyPrice` | `number \| "custom"` | Monthly price in the configured currency. `"custom"` shows a contact CTA. |
| `annualPrice` | `number \| "custom"` | Annual price (usually ~20% less than monthly × 12). |
| `currency` | `string` | ISO 4217 currency code (e.g. `"USD"`, `"GBP"`). Defaults to `"USD"`. |
| `period` | `string` | Billing period label (e.g. `"/ month"`, `"/ seat / month"`). |
| `features` | `string[]` | List of included features shown as checkmarks on the card. |
| `cta` | `CtaButton` | The plan's action button. |
| `highlighted` | `boolean` | Visually elevates this card as the recommended plan. |
| `badge` | `Badge` | Optional label (e.g. `"Most popular"`, `"Best value"`). |

## `ComparisonTable` — planned fields

| Field | Type | Description |
|---|---|---|
| `categories` | `ComparisonCategory[]` | Grouped rows of features with per-plan values (`true`, `false`, or a string). |
| `stickyHeader` | `boolean` | Keeps the plan name row visible while scrolling the table. |

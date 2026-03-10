---
title: CTA Banner
description: API reference for the CTA Banner section component — a focused conversion section with headline, supporting copy, and action buttons.
---

:::caution[Work in progress]
This page is a work in progress. Key fields are listed below. Full documentation with examples is coming soon.
:::

The `CtaBanner` component is a high-contrast, conversion-focused section — typically placed before the footer or between major content sections. It has a single job: get the visitor to click.

## `CtaBanner` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. |
| `headline` | `string` | Primary heading. Keep it short and action-oriented. |
| `subheading` | `string` | One or two supporting sentences. |
| `ctas` | `CtaButton[]` | One primary CTA and optionally one secondary. Reuses the [`CtaButton`](/reference/header/#ctabutton) type. |
| `layout` | `CtaBannerLayout` | Visual layout variant (see below). |
| `background` | `string` | CSS colour or gradient. A strong brand colour or dark background converts best. |
| `image` | `Image` | Optional decorative image or illustration. |
| `badge` | `Badge` | Optional small label above the headline (e.g. `"Free forever"`). |
| `_version` | `number` | Revision counter. |

## `CtaBannerLayout`

```ts
type CtaBannerLayout = "centered" | "split" | "inline";
```

| Value | Description |
|---|---|
| `"centered"` | Headline and CTAs centred. Full-width banner. Most common. |
| `"split"` | Text on the left, CTAs on the right. Good for mid-page banners. |
| `"inline"` | Compact single-line strip — headline + CTA on one row. |

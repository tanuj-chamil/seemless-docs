---
title: Testimonials
description: API reference for the Testimonials section component — customer quotes in carousel, grid, or masonry layouts.
---

:::caution[Work in progress]
This page is a work in progress. Key fields are listed below. Full documentation with examples is coming soon.
:::

The `Testimonials` component renders social proof content — customer quotes, star ratings, and company logos. Supports static grid and animated carousel layouts.

## `Testimonials` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. |
| `heading` | `string` | Section heading (e.g. `"Loved by teams everywhere"`). |
| `subheading` | `string` | Supporting paragraph. |
| `items` | `Testimonial[]` | The individual testimonial entries. |
| `layout` | `TestimonialsLayout` | Visual layout variant (see below). |
| `logoBar` | `Image[]` | Optional row of company logos rendered above or below the testimonials. |
| `background` | `string` | CSS colour or gradient for the section background. |
| `_version` | `number` | Revision counter. |

## `TestimonialsLayout`

```ts
type TestimonialsLayout = "grid" | "carousel" | "masonry" | "featured";
```

| Value | Description |
|---|---|
| `"grid"` | Uniform card grid. Best for 3–9 testimonials. |
| `"carousel"` | Auto-advancing carousel with pause-on-hover. |
| `"masonry"` | Variable-height cards for a Pinterest-style layout. |
| `"featured"` | One large testimonial with a supporting row of smaller ones. |

## `Testimonial` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. |
| `quote` | `string` | The testimonial text. |
| `author` | `string` | Author's full name. |
| `role` | `string` | Author's job title (e.g. `"CTO"`). |
| `company` | `string` | Author's company name. |
| `avatar` | `Image` | Author headshot. |
| `companyLogo` | `Image` | Company logo shown on the card. |
| `rating` | `1 \| 2 \| 3 \| 4 \| 5` | Star rating. |
| `link` | `Link` | Optional link to a full case study. |

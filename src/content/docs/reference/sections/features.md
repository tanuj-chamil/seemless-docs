---
title: Features
description: API reference for the Features section component — showcasing product capabilities in list, grid, or alternating layouts.
---

:::caution[Work in progress]
This page is a work in progress. Key fields are listed below. Full documentation with examples is coming soon.
:::

The `Features` component renders a section that showcases a product's capabilities. It supports multiple layout modes from a compact icon grid to a magazine-style alternating layout with screenshots.

## `Features` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. |
| `eyebrow` | `string` | Small label above the heading (e.g. `"Why Seemless"`). |
| `heading` | `string` | Section heading. |
| `subheading` | `string` | Supporting paragraph below the heading. |
| `items` | `FeatureItem[]` | The list of features to display. |
| `layout` | `FeaturesLayout` | Visual layout variant (see below). |
| `columns` | `2 \| 3 \| 4` | Number of columns for `"grid"` layout. Defaults to `3`. |
| `background` | `string` | CSS colour or gradient for the section background. |
| `_version` | `number` | Revision counter. |

## `FeaturesLayout`

```ts
type FeaturesLayout = "grid" | "list" | "alternating" | "bento";
```

| Value | Description |
|---|---|
| `"grid"` | Icon + title + description in a responsive column grid. |
| `"list"` | Compact vertical list. Good for dense feature lists. |
| `"alternating"` | Each feature alternates text/image left-right. Great for detailed explanations. |
| `"bento"` | Asymmetric bento-box grid. Cards vary in size for visual hierarchy. |

## `FeatureItem` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. |
| `title` | `string` | Feature name. |
| `description` | `string` | Short explanation of the feature. |
| `icon` | `Icon` | Icon representing the feature. |
| `image` | `Image` | Screenshot or illustration — used in `"alternating"` layout. |
| `badge` | `Badge` | Optional label (e.g. `"New"`, `"Pro"`). |
| `link` | `Link` | Optional "Learn more" link. |

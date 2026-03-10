---
title: Header — Search
description: API reference for SearchConfig and QuickLinks — the Seemless header search system.
---

The `search` field on `Header` enables an in-header search experience. It supports static quick links shown before the user types, live async results from an API endpoint, keyboard shortcuts, and a full-results page link.

## `SearchConfig`

| Field | Type | Required | Description |
|---|---|---|---|
| `placeholder` | `string` | — | Input placeholder text. Defaults to `"Search…"`. |
| `shortcutHint` | `string` | — | Keyboard shortcut hint displayed inside the input (e.g. `"⌘K"`). |
| `resultsEndpoint` | `string` | — | API route that receives a `?q=` query parameter and returns results. If omitted, search only shows quick links. |
| `minChars` | `number` | — | Minimum characters before issuing a live search request. Defaults to `2`. |
| `debounceMs` | `number` | — | Debounce delay in milliseconds for the live search request. Defaults to `300`. |
| `quickLinks` | [`QuickLinkGroup[]`](#quicklinkgroup) | — | Groups of pre-defined links shown in the search panel before the user types. |
| `viewAllLabel` | `string` | — | Label for the "see all results" link at the bottom of the results panel. |
| `viewAllHref` | `string` | — | Destination for the "see all results" link (e.g. `"/search"`). |

```ts
search: {
  placeholder: "Search docs, products…",
  shortcutHint: "⌘K",
  resultsEndpoint: "/api/search",
  minChars: 2,
  debounceMs: 200,
  viewAllLabel: "See all results",
  viewAllHref: "/search",
  quickLinks: [...],
}
```

---

## `QuickLinkGroup`

Quick link groups are shown in the search panel **before** the user starts typing. Use them to surface popular pages, recent items, or suggested destinations.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | ✅ | Unique identifier. |
| `label` | `string` | ✅ | Section heading (e.g. `"Popular"`, `"Recent"`, `"Suggested"`). |
| `items` | [`QuickLinkItem[]`](#quicklinkitem) | ✅ | The links in this group. |

---

## `QuickLinkItem`

| Field | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Link label. |
| `href` | `string` | ✅ | Link destination. |
| `icon` | [`Icon`](/reference/header/#icon) | — | Small icon rendered before the label. |
| `meta` | `string` | — | Secondary text rendered after the label (e.g. `"132 results"`, `"3 min read"`). |

```ts
quickLinks: [
  {
    id: "popular",
    label: "Popular",
    items: [
      { label: "Getting started",  href: "/docs/getting-started" },
      { label: "API reference",    href: "/docs/api" },
      { label: "Pricing",          href: "/pricing" },
    ],
  },
  {
    id: "recent",
    label: "Recent",
    items: [
      { label: "Dashboard overview", href: "/docs/dashboard/overview", meta: "2 min read" },
      { label: "Deploy guide",       href: "/docs/deployment/cloudflare" },
    ],
  },
]
```

---

## Results endpoint contract

When `resultsEndpoint` is set, the search input sends a `GET` request to the URL with a `q` query parameter:

```
GET /api/search?q=analytics
```

The endpoint must return JSON matching this shape:

```ts
interface SearchResponse {
  results: SearchResult[];
  total: number;
}

interface SearchResult {
  id: string;
  label: string;
  href: string;
  description?: string;
  /** Optional section/category label */
  group?: string;
  icon?: string;
}
```

### Example Cloudflare Worker handler (Astro API route)

```ts
// site/src/pages/api/search.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request, locals }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get('q')?.trim();

  if (!q || q.length < 2) {
    return Response.json({ results: [], total: 0 });
  }

  const { DB } = locals.runtime.env;

  const rows = await DB.prepare(
    `SELECT id, title AS label, slug AS href, excerpt AS description
     FROM pages
     WHERE title LIKE ?1 AND published = 1
     LIMIT 8`
  ).bind(`%${q}%`).all();

  return Response.json({
    results: rows.results,
    total: rows.results.length,
  });
};
```

:::caution[Input sanitisation]
The `q` parameter comes from user input. Always use parameterised queries (as above) and never interpolate it directly into SQL strings.
:::

---

## Keyboard behaviour

The search component implements the ARIA combobox pattern:

| Key | Action |
|---|---|
| `⌘K` / `Ctrl+K` | Opens the search panel from anywhere on the page |
| `↑` / `↓` | Navigates between results |
| `Enter` | Follows the focused result link |
| `Escape` | Closes the search panel |
| `Tab` | Moves focus out of the search panel |

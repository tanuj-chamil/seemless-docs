---
title: Content & Pages
description: How to create and manage pages and content collections in the Seemless admin dashboard.
---

Seemless gives you two ways to manage content: **Pages** (freeform, URL-based content) and **Content Collections** (structured, schema-driven entries like blog posts or team members).

## Pages

### Creating a page

1. In the dashboard, navigate to **Pages**
2. Click **New Page**
3. Set a **title**, **slug** (URL path), and optionally a **template**
4. Write content in the rich text editor
5. Click **Publish** to make the page live

### Page fields

| Field | Description |
|---|---|
| **Title** | The `<title>` tag and the main `<h1>` on the page |
| **Slug** | The URL path, e.g. `/about` or `/services/consulting` |
| **Template** | Selects which Astro layout template wraps the page |
| **Description** | The meta description used by search engines |
| **OG Image** | Open Graph image for social sharing previews |
| **Published** | Toggle — unpublished pages return 404 |
| **Content** | Rich text / MDX body content |

### Templates

Templates are Astro layout files in `site/src/layouts/`. You can create new templates by adding files there — they will appear in the template dropdown automatically.

### URL structure

Slugs map directly to URLs. A slug of `/services/consulting` creates the page at `yoursite.com/services/consulting`. There is no category prefix or slug collision detection — slugs must be unique.

## Content Collections

Content Collections are for structured, repeatable content — things like blog posts, case studies, team members, or testimonials.

### How they work

Collections are defined in `site/src/content.config.ts` using Astro's content collections API. Each collection has a Zod schema that defines its fields. The admin dashboard reads these schemas and generates the appropriate form fields automatically.

Example collection definition:

```ts
// site/src/content.config.ts
import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      publishedAt: z.date(),
      author: z.string(),
      excerpt: z.string().optional(),
      coverImage: z.string().optional(),
    }),
  }),
};
```

### Managing collection entries

1. Navigate to **Content** in the dashboard
2. Select the collection (e.g. **Blog**)
3. Click **New Entry**
4. Fill in the schema fields
5. Click **Save** or **Publish**

Entries are stored as records in D1 and are available to Astro pages via `getCollection()` at request time.

## Media

The **Media** section is an R2-backed file browser. You can:

- Upload images (JPEG, PNG, WebP, AVIF, SVG) and documents (PDF)
- Organise files into folders
- Copy the public URL of any file
- Delete files

Cloudflare's Image Resizing service automatically serves the optimal format and size based on the requesting device when you use the generated URLs.

### Uploading from the page editor

In the rich text editor, click the **Image** toolbar button. This opens the media picker, where you can select an existing R2 asset or upload a new one inline.

## Publishing & caching

When you publish a page or content entry, Seemless automatically purges the relevant Cloudflare cache keys so the updated content is live within seconds — no cache-busting headers to manage manually.

---
title: Admin Dashboard Overview
description: An overview of the Seemless Engine admin dashboard — the React-based control panel for managing your site.
---

The Seemless admin dashboard is a React SPA that gives non-technical users full control over their site without code. It communicates with the Astro API routes on the Worker and stores everything in Cloudflare D1.

## Accessing the dashboard

In development:

```
http://localhost:5173
```

In production, the dashboard is deployed to a separate URL (e.g. `admin.yoursite.com`) and is protected by Cloudflare Access or the built-in session authentication.

## Navigation

The dashboard is divided into five main sections:

| Section | Purpose |
|---|---|
| **Pages** | Create, edit, and publish pages |
| **Content** | Manage reusable content blocks and collections |
| **Media** | Upload and organise images and files in R2 |
| **Settings** | Site name, metadata, domains, integrations |
| **Users** | Manage team members and their roles |

## Authentication

The dashboard uses session-based authentication backed by Cloudflare KV. On login:

1. Credentials are verified against D1 (`users` table)
2. A signed session token is created and stored in KV with a TTL
3. The token is set as an `HttpOnly`, `Secure`, `SameSite=Strict` cookie
4. All subsequent requests to `/api/**` routes verify the session from KV

There are no JWTs exposed to the browser. Session invalidation is immediate (delete the KV key).

## Roles

| Role | Permissions |
|---|---|
| **Admin** | Full access — settings, users, all content |
| **Editor** | Create, edit, and publish pages and content. No settings or user management |
| **Viewer** | Read-only access to pages and content. Cannot publish |

## Tech stack

The admin is a standard Vite + React application. Key libraries:

- **React 19** — UI rendering
- **TanStack Query** — server state, caching, and mutations
- **TanStack Router** — type-safe client-side routing
- **Zod** — schema validation for forms and API responses
- **Bun** — dev server and build tool

## Running the admin locally

```bash
# From the workspace root
bun dev

# Admin only
cd admin && bun dev
```

The admin dev server proxies API calls to the Wrangler local Worker, so D1, KV, and R2 all work locally.

## Building the admin

```bash
cd admin && bun run build
```

Output goes to `admin/dist/`. In the deploy pipeline, this is uploaded to Cloudflare Pages automatically.

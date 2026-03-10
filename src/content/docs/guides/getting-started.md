---
title: Getting Started
description: Set up and run Seemless Engine locally in under five minutes.
---

Seemless Engine is a monorepo containing two main apps:

- **`/site`** — The Astro-powered front-end, deployed as a Cloudflare Worker
- **`/admin`** — The React dashboard, used to manage content

## Prerequisites

| Tool | Version |
|---|---|
| [Bun](https://bun.sh) | ≥ 1.1 |
| [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | ≥ 4 |
| Cloudflare account | Free tier is fine for development |
| Node.js | ≥ 20 (used by Wrangler internally) |

## 1. Clone the repository

```bash
git clone https://github.com/snap86/seemless-engine
cd seemless-engine
```

## 2. Install dependencies

```bash
bun install
```

This installs dependencies for both the site and admin workspaces in a single pass.

## 3. Set up local secrets

Copy the example env file and fill in your Cloudflare credentials:

```bash
cp .dev.vars.example .dev.vars
```

| Variable | Description |
|---|---|
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |
| `CF_API_TOKEN` | A Cloudflare API token with Workers and D1 permissions |
| `SESSION_SECRET` | A random secret for session signing (any long random string) |

## 4. Initialise the local database

```bash
bun run db:migrate
```

This runs D1 migrations locally using Wrangler's local SQLite proxy.

## 5. Start the development server

```bash
bun dev
```

This concurrently starts:
- The Astro site at **http://localhost:4321**
- The Wrangler local Worker proxy (D1, KV, R2)
- The admin dashboard at **http://localhost:5173**

## Project structure

```
seemless-engine/
├── site/               # Astro front-end
│   ├── src/
│   │   ├── content/    # Managed content collections
│   │   ├── pages/      # Astro pages & API routes
│   │   └── components/ # Astro + React components
│   ├── astro.config.mjs
│   └── wrangler.jsonc
├── admin/              # React dashboard
│   ├── src/
│   └── vite.config.ts
├── migrations/         # D1 SQL migrations
└── package.json        # Workspace root
```

## Next steps

- Read the [Architecture overview](/concepts/architecture/) to understand how all the pieces fit together
- Learn about [Edge & Performance](/concepts/edge-performance/) to understand why the stack is built this way
- See [Deploying to Cloudflare](/deployment/cloudflare/) when you're ready to go live

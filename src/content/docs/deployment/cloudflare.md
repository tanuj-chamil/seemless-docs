---
title: Deploying to Cloudflare
description: How to deploy Seemless Engine to production on Cloudflare Workers, D1, KV, R2, and Pages.
---

Seemless deploys entirely to Cloudflare. There are no origin servers, no VMs, and no containers to manage. The deploy takes under two minutes from a clean build.

## Prerequisites

- A Cloudflare account
- Wrangler CLI authenticated: `bunx wrangler login`
- A `wrangler.jsonc` configured for your account (see below)

## Configure `wrangler.jsonc`

At minimum, set your `account_id` and the names of your D1, KV, and R2 bindings:

```jsonc
{
  "name": "seemless-site",
  "account_id": "YOUR_ACCOUNT_ID",
  "compatibility_date": "2025-01-01",
  "main": "dist/_worker.js",

  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "seemless-prod",
      "database_id": "YOUR_D1_DATABASE_ID"
    }
  ],

  "kv_namespaces": [
    {
      "binding": "SESSION",
      "id": "YOUR_KV_NAMESPACE_ID"
    }
  ],

  "r2_buckets": [
    {
      "binding": "ASSETS",
      "bucket_name": "seemless-assets"
    }
  ]
}
```

## Create Cloudflare resources

Run these once to provision the required resources:

```bash
# Create D1 database
bunx wrangler d1 create seemless-prod

# Create KV namespace
bunx wrangler kv namespace create SESSION

# Create R2 bucket
bunx wrangler r2 bucket create seemless-assets
```

Copy the returned IDs into `wrangler.jsonc`.

## Run database migrations

```bash
# Apply migrations to production D1
bun run db:migrate:prod
```

This runs `wrangler d1 execute seemless-prod --file ./migrations/*.sql`.

## Deploy

```bash
bun run deploy
```

This runs:
```
astro build → wrangler deploy
```

The first deploy takes ~90 seconds. Subsequent deploys average 30–45 seconds.

## Environment variables / secrets

Never put secrets in `wrangler.jsonc`. Use Wrangler secrets instead:

```bash
bunx wrangler secret put SESSION_SECRET
bunx wrangler secret put CF_API_TOKEN
```

These are encrypted at rest and injected into the Worker at runtime as environment variables.

## Deploying the admin dashboard

The React admin SPA is deployed to Cloudflare Pages:

```bash
cd admin
bun run build
bunx wrangler pages deploy dist --project-name seemless-admin
```

Set the admin's API base URL to your Worker's production URL in `admin/.env.production`:

```
VITE_API_BASE_URL=https://yoursite.com
```

## Custom domains

1. In the Cloudflare dashboard, go to **Workers & Pages → your Worker → Settings → Domains & Routes**
2. Add your custom domain
3. Cloudflare provisions the SSL certificate automatically

## Rollbacks

Every deploy creates a versioned snapshot in Cloudflare. To roll back:

```bash
bunx wrangler deployments list
bunx wrangler rollback <DEPLOYMENT_ID>
```

Rollbacks complete in under 30 seconds globally.

## Zero-downtime deploys

Cloudflare Workers deploys are atomic. The new version goes live globally the instant the upload completes — there is no rolling restart, no health check delay, and no request dropped during the transition.

## Post-deploy checklist

- [ ] Verify the site loads at your custom domain
- [ ] Check Cloudflare Analytics for error rate spike
- [ ] Run `bun run lighthouse` to confirm Lighthouse scores
- [ ] Confirm the admin dashboard can read and write content
- [ ] Check D1 migrations ran successfully via the Cloudflare dashboard

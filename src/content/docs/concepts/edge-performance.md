---
title: Edge & Performance
description: Why Seemless is built on the edge, and what that means for speed, SEO, and revenue.
---

## The case for the edge

The traditional web stack — origin server, CDN, reverse proxy — was designed for a world where compute was centralised. That world is over. Cloudflare operates 330+ data centres globally. Seemless Engine puts your entire application — rendering, database reads, business logic — inside those data centres, as close to your visitors as the laws of physics allow.

The result is a Time to First Byte under 10ms for most visitors. Not 100ms. Not 50ms. Under 10ms.

## Why speed is a business metric

These are not hypothetical advantages:

| Study | Finding |
|---|---|
| Portent Research | Sites loading in 1s convert at **3× the rate** of sites loading in 5s |
| Amazon Internal | 1s slowdown = **$1.6B annual revenue loss** |
| Swappie (Google CWV) | 23% faster load → **42% mobile revenue increase** |
| Renault (Google CWV) | 1s LCP improvement → **13% conversion lift** |
| BBC Engineering | Every 1s = **10% audience loss** (35M monthly visitors) |

Seemless is built on this research. Every architectural decision exists to reduce latency.

## Lighthouse scores

Astro's islands architecture ships **zero JavaScript by default**. A Seemless page sends only the JS that a specific page actually needs. This is the reason for consistent perfect Lighthouse scores:

- **Performance 100** — minimal JS, edge-cached assets, no render-blocking resources
- **Accessibility 100** — semantic HTML from Astro's renderer
- **Best Practices 100** — HTTPS by default, no mixed content, modern image formats
- **SEO 100** — server-rendered HTML, structured metadata, fast TTFB for Googlebot

## Cloudflare performance features used

| Feature | How Seemless uses it |
|---|---|
| **Anycast routing** | Every request hits the nearest of 330+ PoPs |
| **Cache API** | Rendered pages cached at the edge, revalidated on publish |
| **Smart Tiered Cache** | Reduces Worker invocations for long-tail pages |
| **HTTP/3 + QUIC** | Enabled by default, eliminates head-of-line blocking |
| **Early Hints (103)** | Preloads fonts and CSS before the Worker finishes rendering |
| **Image Resizing** | Cloudflare resizes and converts images to WebP/AVIF on the fly |

## Benchmark comparison

| Site | Load Time |
|---|---|
| Seemless Engine | **< 1s** |
| Google.com | 1.1s |
| Amazon.com | 1.6s |
| Web average (desktop) | 2.5s |
| Web average (mobile) | 8.6s |
| Typical agency WordPress / Webflow | 8–14s |

*Sources: HTTP Archive Web Almanac 2025, Google CrUX, web.dev*

## Core Web Vitals targets

| Metric | Target | Why |
|---|---|---|
| **LCP** (Largest Contentful Paint) | < 1.2s | Google ranking signal, directly tied to conversion |
| **INP** (Interaction to Next Paint) | < 100ms | Replaces FID as primary interactivity metric from 2024 |
| **CLS** (Cumulative Layout Shift) | < 0.05 | Prevents accidental taps, reduces frustration |
| **TTFB** (Time to First Byte) | < 200ms | First signal of server speed to both users and Googlebot |

## What this means for SEO

Google confirmed that Core Web Vitals are a ranking signal. A Seemless site starts with maximal scores. Faster indexing by Googlebot (sub-100ms TTFB means instant crawl), combined with server-rendered HTML (no JS needed to see content), means your organic rankings improve without any additional SEO work.

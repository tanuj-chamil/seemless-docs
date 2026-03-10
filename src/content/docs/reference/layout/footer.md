---
title: Footer
description: API reference for the Footer component — site-wide bottom navigation, branding, social links, and legal copy.
---

:::caution[Work in progress]
This page is a work in progress. Key fields are listed below. Full documentation with examples is coming soon.
:::

The `Footer` component mirrors the structural philosophy of [`Header`](/reference/header/) — a single config object controls all visual and behavioural aspects of the site footer. It is typically rendered once in the root layout.

## `Footer` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. |
| `logo` | `Logo` | Footer logo — usually smaller or monochrome variant of the header logo. |
| `tagline` | `string` | Short brand statement shown beside or below the logo. |
| `columns` | `FooterColumn[]` | Navigation columns. Each column has a heading and a list of links. |
| `social` | `SocialLink[]` | Icon links to social media profiles (Twitter/X, GitHub, LinkedIn, etc.). |
| `bottomBar` | `FooterBottomBar` | Legal copy, secondary links, and locale selector. |
| `background` | `string` | CSS colour or gradient for the footer background. |
| `bordered` | `boolean` | Adds a top border/divider above the footer. |
| `_version` | `number` | Revision counter. |

## `FooterColumn` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. |
| `label` | `string` | Column heading (e.g. `"Product"`, `"Company"`). |
| `items` | `FooterLink[]` | List of links in this column. |

## `FooterBottomBar` — planned fields

| Field | Type | Description |
|---|---|---|
| `copyright` | `string` | Legal copyright string (e.g. `"© 2026 Acme Inc."`). |
| `links` | `Link[]` | Secondary links — Privacy Policy, Terms of Service, etc. |
| `localeSelector` | `boolean` | Shows a language/locale picker. |

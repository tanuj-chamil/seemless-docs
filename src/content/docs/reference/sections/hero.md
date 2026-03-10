---
title: Hero
description: API reference for the Hero section component — the primary above-the-fold page section with headline, subheading, CTAs, and media.
---

:::caution[Work in progress]
This page is a work in progress. Key fields are listed below. Full documentation with examples is coming soon.
:::

The `Hero` component is the primary above-the-fold section. It supports multiple layout variants, rich media backgrounds, and composable CTA buttons. Most pages in a Seemless site will have exactly one Hero.

## `Hero` — planned fields

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. |
| `headline` | `string` | Primary `<h1>` text. Supports inline HTML for emphasis. |
| `subheading` | `string` | Supporting paragraph below the headline. |
| `ctas` | `CtaButton[]` | One or more action buttons. Reuses the [`CtaButton`](/reference/header/#ctabutton) type. |
| `media` | `HeroMedia` | Image or video displayed in the hero. |
| `layout` | `HeroLayout` | Visual layout variant (see below). |
| `background` | `string` | CSS colour, gradient, or image URL for the section background. |
| `overlay` | `string` | CSS colour with opacity overlaid on a background image (e.g. `"rgba(0,0,0,0.4)"`). |
| `align` | `"left" \| "center" \| "right"` | Horizontal alignment of the text content. |
| `fullscreen` | `boolean` | Makes the hero fill 100vh. |
| `badge` | `Badge` | Small label shown above the headline (e.g. `"New — v3.0"`). |
| `_version` | `number` | Revision counter. |

## `HeroLayout`

```ts
type HeroLayout = "centered" | "split-left" | "split-right" | "background-image" | "video";
```

| Value | Description |
|---|---|
| `"centered"` | Text and CTAs centred, media below. Default. |
| `"split-left"` | Text on the left, media on the right. |
| `"split-right"` | Media on the left, text on the right. |
| `"background-image"` | Full-bleed background image with text overlaid. |
| `"video"` | Full-bleed background video with text overlaid. |

## `HeroMedia` — planned fields

| Field | Type | Description |
|---|---|---|
| `type` | `"image" \| "video" \| "lottie"` | Media type. |
| `image` | `Image` | Used when `type` is `"image"`. |
| `videoSrc` | `string` | URL to an MP4 file. Used when `type` is `"video"`. |
| `lottieSrc` | `string` | URL to a Lottie JSON animation. Used when `type` is `"lottie"`. |
| `autoplay` | `boolean` | Autoplays video or Lottie animation. |
| `loop` | `boolean` | Loops the animation or video. |

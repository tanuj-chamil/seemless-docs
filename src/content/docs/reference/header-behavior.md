---
title: Header — Scroll & Mobile
description: API reference for ScrollConfig and MobileNavConfig — controlling how the Seemless header reacts to scrolling and behaves on small screens.
---

## `ScrollConfig`

Controls how the header responds as the user scrolls the page.

| Field | Type | Required | Description |
|---|---|---|---|
| `behavior` | [`ScrollBehavior`](#scrollbehavior) | ✅ | The scroll reaction mode. |
| `offset` | `number` | — | Distance in px from the top before the behavior activates. Defaults to `0`. |
| `transparentAtTop` | `boolean` | — | Applies a transparent/no-background style when the page is scrolled to the very top. Useful over hero sections. |
| `backdropBlur` | `string` | — | CSS `backdrop-filter: blur()` value applied to the header when scrolled (e.g. `"12px"`). Creates a frosted-glass effect. |

### `ScrollBehavior`

```ts
type ScrollBehavior = "static" | "sticky" | "hide-on-scroll" | "shrink-on-scroll";
```

| Value | Description |
|---|---|
| `"static"` | Header scrolls with the page — no special behaviour. |
| `"sticky"` | Header stays fixed at the top of the viewport as the user scrolls down. |
| `"hide-on-scroll"` | Header hides when scrolling down, reappears when scrolling up. Maximises reading space. |
| `"shrink-on-scroll"` | Header reduces in height when scrolled, then returns to full size when at the top. |

### Examples

```ts
// Frosted-glass sticky header, transparent over the hero
scroll: {
  behavior: "sticky",
  offset: 0,
  transparentAtTop: true,
  backdropBlur: "12px",
}

// Hide-on-scroll for content-heavy pages
scroll: {
  behavior: "hide-on-scroll",
  offset: 80,
}

// Static — no scroll behaviour at all
scroll: {
  behavior: "static",
}
```

---

## `MobileNavConfig`

Controls the navigation experience on small screens (below `breakpoint` px).

| Field | Type | Required | Description |
|---|---|---|---|
| `style` | [`MobileNavStyle`](#mobilenavstyle) | ✅ | How the mobile nav is presented. |
| `drawerSide` | `"left" \| "right"` | — | Which side the drawer slides in from when `style` is `"drawer"`. Defaults to `"right"`. |
| `showSearch` | `boolean` | — | Includes the search input inside the mobile nav panel. |
| `showCtas` | `boolean` | — | Includes the CTA buttons inside the mobile nav panel. |
| `breakpoint` | `number` | — | Viewport width in px below which mobile nav activates. Defaults to `768`. |

### `MobileNavStyle`

```ts
type MobileNavStyle = "drawer" | "fullscreen" | "dropdown";
```

| Value | Description |
|---|---|
| `"drawer"` | A slide-in panel from the left or right edge. Most common pattern. |
| `"fullscreen"` | Nav expands to cover the entire screen. Good for large link sets. |
| `"dropdown"` | Nav drops down below the header bar. Minimal and compact. |

### Examples

```ts
// Standard right-side drawer with search and CTAs
mobile: {
  style: "drawer",
  drawerSide: "right",
  showSearch: true,
  showCtas: true,
  breakpoint: 768,
}

// Fullscreen overlay for content-heavy navigation
mobile: {
  style: "fullscreen",
  showSearch: true,
  showCtas: false,
  breakpoint: 1024,
}

// Compact dropdown for a simple nav
mobile: {
  style: "dropdown",
  showSearch: false,
  showCtas: true,
  breakpoint: 640,
}
```

---

## Combined usage

```ts
scroll: {
  behavior: "sticky",
  offset: 0,
  transparentAtTop: true,
  backdropBlur: "12px",
},

mobile: {
  style: "drawer",
  drawerSide: "right",
  showSearch: true,
  showCtas: true,
  breakpoint: 768,
},
```

When `transparentAtTop` is `true` on a sticky header, the component watches a `scrollY > 0` condition to toggle between the transparent and solid states. The transition is CSS-driven for maximum performance (no JS layout thrash).

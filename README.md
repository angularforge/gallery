<div align="center">

  <h1>@angularforge/gallery</h1>
  <p>A feature-rich, accessible Angular image gallery library built with **Angular 22 Signals**, **OnPush change detection**, and **standalone components**. Supports lightbox, full-gallery, keyboard navigation, social sharing, and multi-layout grid distributions.</p>

![angularforge](https://i.imgur.com/pb1qLqV.png)

  <p>
    <a href="https://www.npmjs.com/package/@angularforge/gallery">
      <img src="https://img.shields.io/npm/v/@angularforge/gallery.svg" alt="npm version" />
    </a>
    <a href="https://angular.dev">
      <img src="https://img.shields.io/badge/Angular-22+-red.svg" alt="Angular 22" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-5.5+-294E80.svg" alt="TypeScript" />
    </a>
    <a href="https://www.npmjs.com/package/@angularforge/gallery">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License: MIT" />
    </a>
    <a href="https://github.com/smerlyneusebio/angularforge/gallery">
      <img src="https://img.shields.io/badge/Repo-GitHub-brightgreen.svg" alt="GitHub" />
    </a>
    <a href="https://www.npmjs.com/package/@angularforge/gallery">
      <img src="https://img.shields.io/badge/Tree--shakable-yes-brightgreen.svg" alt="Tree-shakable" />
    </a>
        <a href="https://www.npmjs.com/package/@angularforge/gallery">
      <img src="https://img.shields.io/npm/dm/@angularforge/gallery.svg" alt="downloads" />
    </a>
  </p>
</div>

---

## Playground

Explore and customize the gallery in real time using the interactive [Playground](https://angularforge.com/playground/gallery).

<img src="https://i.imgur.com/tOHTSkx.png" width="100%"/>

## Features

**Devices Views**

**Vertical Orientation**

<div align="center" style="display:flex; justify-content:space-between; align-items:end;">

<img src="https://i.imgur.com/Asju3n3.png" width="60%" />
<img src="https://i.imgur.com/XNOFmo8.png" width="20%" />
<img src="https://i.imgur.com/LolakCO.png" width="10%" height="20%" />

</div>

<br/>

**Horizontal Orientation**

<div align="center" style="display:flex; justify-content:space-between; align-items:end;">

<img src="https://i.imgur.com/eH3lLC2.png" width="60%" />
<img src="https://i.imgur.com/DcN8rAv.png" width="20%" />
<img src="https://i.imgur.com/iX6Olxl.png" width="10%" height="20%" />

</div>

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Tailwind CSS Setup (required)](#tailwind-css-setup-required)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
  - [GalleryComponent Inputs](#gallerycomponent-inputs)
  - [GalleryImage](#galleryimage)
  - [GalleryOptions](#galleryoptions)
  - [DialogShareOptions](#dialogshareoptions)
  - [CustomStyles](#customstyles)
  - [Layout Distributions](#layout-distributions)
- [Examples](#examples)
  - [Basic Gallery](#basic-gallery)
  - [Custom Layout](#custom-layout)
  - [Lightbox with Controls](#lightbox-with-controls)
  - [Share Dialog](#share-dialog)
  - [Multi-language Support](#multi-language-support)
  - [Auto Play](#auto-play)
  - [Navigation Bullets](#navigation-bullets)
  - [Download Button](#download-button)
  - [Custom Actions](#custom-actions)
  - [Listening to Events](#listening-to-events)
- [Architecture](#architecture)
  - [Directory Structure](#directory-structure)
  - [Component Tree](#component-tree)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Local Development & Testing](#local-development--testing)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

---

## Features

- **50+ grid layout distributions** — vertical, horizontal, and mixed orientations
- **Lightbox** — slide/fade animations, keyboard navigation (←→ Escape)
- **Full-gallery overlay** — scroll-locked, animated slide-up panel
- **Auto play** — automatic slideshow with configurable interval and pause-on-hover (stops at the last image)
- **Navigation bullets** — dot indicators for current position, clickable
- **Download button** — direct download of the current image from the lightbox
- **Custom actions** — inject your own icon buttons into the lightbox toolbar
- **Events** — `imageChange`, `lightboxOpen`, `lightboxClose`, `lightboxImageChange` outputs
- **Social share dialog** — Facebook, Twitter, LinkedIn, WhatsApp, Telegram, Instagram, Email, Copy Link
- **Skeleton loading** — smooth loading states before images appear
- **Multi-language** — built-in `en` / `es` support (no HTTP dependency, zero external requests)
- **OnPush everywhere** — all components use `ChangeDetectionStrategy.OnPush`
- **Signal-first** — built with Angular Signals, `computed()`, and `effect()`
- **Standalone components** — zero NgModule, fully tree-shakable
- **SSR-compatible** — no direct `window`/`document` access
- **WCAG 2.2** — keyboard navigation, ARIA labels, focus management

---

## Requirements

| Dependency            | Version   |
| --------------------- | --------- |
| `@angular/core`       | `^22.0.0` |
| `@angular/common`     | `^22.0.0` |
| `@angular/animations` | `^22.0.0` |

---

## Installation

```bash
npm install @angularforge/gallery
```

Add `BrowserAnimationsModule` (or `provideAnimations()`) to your app:

```typescript
// app.config.ts
import { provideAnimations } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations()],
};
```

---

## Tailwind CSS Setup (required)

> ⚠️ **This is required.** Most of the library's UI (lightbox, controls, full‑gallery,
> share dialog, layout grid) is styled with **Tailwind CSS utility classes** that live
> **inside the published bundle**. Your application's Tailwind build does **not** scan
> `node_modules` by default, so those classes are never generated and the gallery
> renders **unstyled / broken** (overlapping elements, oversized buttons, no spacing).
>
> The fix is to point Tailwind at this package so it generates the classes it uses.

The published code is bundled to `node_modules/@angularforge/gallery/fesm2022/*.mjs`,
with all component templates inlined — so Tailwind only needs to scan that file.

### Tailwind v3

Add the package to your `content` globs in `tailwind.config.js`:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/@angularforge/gallery/fesm2022/*.mjs", // 👈 scan the library bundle
  ],
};
```

### Tailwind v4

v4 is configured from your CSS entry point with the `@source` directive (no JS config needed):

```css
/* styles.css */
@import "tailwindcss";

/* 👇 scan the library bundle so its utility classes are generated */
@source '../node_modules/@angularforge/gallery/fesm2022/*.mjs';
```

> Adjust the relative path so it resolves to your project's `node_modules` from the CSS file.

### Not using Tailwind?

If your app has no Tailwind pipeline, the gallery markup still renders but will be
**unstyled**. In that case you'll need to provide equivalent styling yourself, or add a
minimal Tailwind build solely to generate the classes the library consumes.

### Dark mode

All page-level surfaces (share dialog, full‑gallery view, header bar, toast, "show all
pictures" button, close/share buttons) ship with `dark:` variants, so the gallery adapts
to light and dark themes automatically — **using whatever dark‑mode strategy your Tailwind
build is configured for.**

- **System preference (Tailwind default):** nothing to do. The `dark:` classes respond to
  `@media (prefers-color-scheme: dark)`.
- **Class / toggle based** (e.g. you add a `.dark` class on `<html>`): opt in from your CSS
  entry point so `dark:` follows that class instead of the media query:

  ```css
  /* styles.css (Tailwind v4) */
  @import "tailwindcss";
  @custom-variant dark (&:where(.dark, .dark *));
  ```

  In Tailwind v3 set `darkMode: 'class'` (or `'selector'`) in `tailwind.config.js`.

### Theming the colors (match your project)

The gallery's surfaces read their colors from CSS custom properties, so you can make them
match your project's palette by overriding a few variables — no `::ng-deep` or `!important`
needed. The defaults reproduce the built‑in light/dark look:

| Token                                                  | Default (light) | Default (dark)          | Used by                                            |
| ------------------------------------------------------ | --------------- | ----------------------- | -------------------------------------------------- |
| `--ngx-gallery-surface` / `--ngx-gallery-surface-dark` | `#ffffff`       | `#111827`               | dialog / full‑gallery / header / toast backgrounds |
| `--ngx-gallery-text` / `--ngx-gallery-text-dark`       | `#111827`       | `#f3f4f6`               | primary text & icons                               |
| `--ngx-gallery-muted` / `--ngx-gallery-muted-dark`     | `#6b7280`       | `#9ca3af`               | secondary text (description)                       |
| `--ngx-gallery-border` / `--ngx-gallery-border-dark`   | `#e5e7eb`       | `#374151`               | borders                                            |
| `--ngx-gallery-hover` / `--ngx-gallery-hover-dark`     | `#f3f4f6`       | `rgb(255 255 255 / .1)` | hover backgrounds                                  |

Override them wherever the gallery is mounted (or globally on `:root`). Only set what you
need — usually just the dark surface to match your app's background:

```css
ngx-gallery {
  /* make the dark panels match your project's dark background */
  --ngx-gallery-surface-dark: #0d1117;
  --ngx-gallery-border-dark: #21262d;
  /* you can reuse your own design tokens, too */
  --ngx-gallery-surface: var(--app-bg);
  --ngx-gallery-text: var(--app-fg);
}
```

> Light/dark switching is still driven by Tailwind's `dark:` variant (see above); these
> variables only define the colors used in each mode.

### Icons

The gallery's UI icons (close, prev/next, share, grid, copy, email, download, check,
translate) are rendered with [`@ng-icons`](https://ng-icons.github.io/ng-icons/) and can be
switched between **three families** via the `iconFamily` option:

```typescript
options: GalleryOptions = {
  iconFamily: "lucide", // 'heroicons' (default) | 'lucide' | 'bootstrap'
};
```

The icon packs (`@ng-icons/core`, `@ng-icons/heroicons`, `@ng-icons/lucide`,
`@ng-icons/bootstrap-icons`) ship as dependencies and install automatically — **no extra
setup or `provideIcons` needed** in your app. Only the specific icons the gallery uses are
imported, so the footprint stays small. Icons inherit color from the theme tokens above, so
they adapt to light/dark automatically.

The **social/brand icons** in the share dialog (Facebook, X, WhatsApp, Telegram, LinkedIn,
Instagram) switch with the family too: the `bootstrap` family uses Bootstrap Icons' own brand
logos, while `heroicons` and `lucide` (which don't ship brand logos) fall back to a set of
dedicated official-style brand SVGs. All of them are monochrome and follow the theme tokens.

---

## Quick Start

```typescript
// app.component.ts
import { Component } from "@angular/core";
import { GalleryComponent, GalleryImage } from "@angularforge/gallery";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [GalleryComponent],
  template: `
    <ngx-gallery [galleryImages]="images" [options]="options" lang="en" />
  `,
})
export class AppComponent {
  images: GalleryImage[] = [
    {
      src: "https://example.com/photo1.jpg",
      alt: "Mountain view",
      width: 1920,
      height: 1080,
    },
    {
      src: "https://example.com/photo2.jpg",
      alt: "City skyline",
      width: 1200,
      height: 800,
    },
    {
      src: "https://example.com/photo3.jpg",
      alt: "Ocean sunset",
      width: 1600,
      height: 900,
    },
  ];

  options = {
    layout: { distribution: "1/2" as const, orientation: "vertical" as const },
    showAllPicturesBtn: true,
    showControls: true,
    showShareBtn: true,
  };
}
```

---

## API Reference

### GalleryComponent Inputs

| Input           | Type                 | Default   | Description                |
| --------------- | -------------------- | --------- | -------------------------- |
| `galleryImages` | `GalleryImage[]`  | `[]`      | Array of images to display |
| `options`       | `GalleryOptions`  | see below | Gallery configuration      |
| `dialog`        | `DialogShareOptions` | see below | Share dialog configuration |
| `lang`          | `'en' \| 'es'`       | `'en'`    | UI language                |

### GalleryComponent Outputs

| Output                | Type     | Description                                         |
| --------------------- | -------- | --------------------------------------------------- |
| `imageChange`         | `number` | Fired when a thumbnail is clicked — emits the index |
| `lightboxOpen`        | `number` | Fired when the lightbox opens — emits the index     |
| `lightboxClose`       | `void`   | Fired when the lightbox closes                      |
| `lightboxImageChange` | `number` | Fired when prev/next is used — emits the new index  |

```typescript
<ngx-gallery
  [galleryImages]="images"
  (imageChange)="onImageChange($event)"
  (lightboxOpen)="onLightboxOpen($event)"
  (lightboxClose)="onLightboxClose()"
  (lightboxImageChange)="onLightboxImageChange($event)"
/>
```

---

### GalleryImage

```typescript
interface GalleryImage {
  src: string; // Required — image URL
  width: number; // Required — intrinsic width in px
  height: number; // Required — intrinsic height in px
  alt?: string; // Recommended for accessibility
  caption?: string; // Optional caption text
  srcset?: string; // Responsive image srcset
  sizes?: string; // HTML sizes attribute
  loading?: "lazy" | "eager" | "auto"; // Image loading strategy
  objectFit?: "contain" | "cover" | "fill" | "none"; // CSS object-fit
  slug?: string; // Optional slug identifier
}
```

> **Note:** `width` and `height` are required because the component uses `NgOptimizedImage` (`ngSrc`) which enforces explicit dimensions to prevent layout shifts (CLS).

---

### GalleryOptions

```typescript
interface GalleryOptions {
  // Visibility
  showAllPicturesBtn?: boolean; // Show "View all photos" button — default: true
  showControls?: boolean; // Show prev/next arrows in lightbox — default: true
  fullGallery?: boolean; // Enable full-gallery overlay — default: true
  showCount?: boolean; // Show "X / Y" counter — default: true
  showShareBtn?: boolean; // Show share button — default: true
  showBullets?: boolean; // Show navigation dots — default: false

  // Icons
  iconFamily?: "heroicons" | "lucide" | "bootstrap"; // UI icon set — default: 'heroicons'

  // Layout
  layout?: {
    distribution: Distribution; // Grid layout key e.g. '1/2', '2/3', 'default'
    orientation: "horizontal" | "vertical";
  };
  customLayout?: CustomStyles; // Fully custom CSS Grid definition
  layoutStyles?: {
    border?: string;
    height?: string;
    width?: string;
    gap?: string;
  };
  allPictureBtnPosition?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  dialogShareOptions?: DialogShareOptions;

  // Navigation
  infinityLoop?: boolean; // ⚠️ DISABLED in this version — value is ignored, navigation never wraps
  closeOnBackdropClick?: boolean; // Close lightbox on backdrop click — default: false

  // Auto play
  autoPlay?: boolean; // Enable automatic slideshow — default: false
  autoPlayInterval?: number; // Interval in ms — default: 3000
  autoPlayPauseOnHover?: boolean; // Pause slideshow on hover — default: false

  // Lightbox actions
  allowDownload?: boolean; // Show download button — default: false
  customActions?: GalleryAction[]; // Custom icon buttons in the lightbox toolbar
}

interface GalleryAction {
  icon: string; // SVG string rendered as innerHTML
  label: string; // aria-label and title
  disabled?: boolean;
  onClick: (event: Event, index: number) => void;
}
```

---

### DialogShareOptions

```typescript
interface DialogShareOptions {
  shareButtons: Array<
    | "facebook"
    | "twitter"
    | "linkedin"
    | "whatsapp"
    | "email"
    | "copy"
    | "telegram"
    | "instagram"
  >;
  title: string; // Dialog heading
  subtitle: string; // Dialog subheading
  description: string; // Dialog body text
  picture: string; // Preview image URL for the dialog
}
```

---

### CustomStyles

Use `customLayout` inside `GalleryOptions` to define a fully custom CSS Grid layout:

```typescript
interface CustomStyles {
  orientation: "horizontal" | "vertical";
  templateAreas: string; // CSS grid-template-areas value
  maxItems: number; // Maximum images to display
  columns: { quantity: number; value: number; unit: CssUnit };
  rows: { quantity: number; value: number; unit: CssUnit };
  border: { value: number; unit: CssUnit };
  height: { value: number; unit: CssUnit };
  width: { value: number; unit: CssUnit };
  gap: { value: number; unit: CssUnit };
  layout: "custom";
}

type CssUnit =
  | "px"
  | "rem"
  | "em"
  | "%"
  | "fr"
  | "vw"
  | "vh"
  | "cm"
  | "mm"
  | "in"
  | "pt"
  | "pc";
```

---

### Layout Distributions

The library ships with **50+ named grid distributions**. A distribution is selected via `options.layout`:

```typescript
options = {
  layout: { distribution: "1/2", orientation: "vertical" },
};
```

#### Naming convention: `{top-row-count}/{bottom-row-count}`

| Distribution | Images | Description                       |
| ------------ | ------ | --------------------------------- |
| `default`    | 5      | 1 large hero + 4 thumbnails       |
| `1/1`        | 2      | Two equal-size rows               |
| `1/2`        | 3      | 1 large + 2 small                 |
| `1/3`        | 4      | 1 large + 3 small                 |
| `1/4`        | 5      | 1 large + 4 small                 |
| `2/2`        | 4      | 2+2 equal grid                    |
| `2/3`        | 5      | 2+3                               |
| `1/4/1`      | 6      | Mixed horizontal layout           |
| `5/5`        | 10     | 2-row 5-column grid               |
| …            | …      | All combinations from 2–10 images |

Both `horizontal` and `vertical` orientations are available for each distribution.

---

## Examples

### Basic Gallery

```html
<ngx-gallery [galleryImages]="images" />
```

### Custom Layout

```typescript
options: GalleryOptions = {
  customLayout: {
    orientation: "horizontal",
    templateAreas: '"hero hero thumb1" "hero hero thumb2"',
    maxItems: 3,
    columns: { quantity: 3, value: 1, unit: "fr" },
    rows: { quantity: 2, value: 200, unit: "px" },
    border: { value: 8, unit: "px" },
    height: { value: 500, unit: "px" },
    width: { value: 100, unit: "%" },
    gap: { value: 8, unit: "px" },
    layout: "custom",
  },
};
```

```html
<ngx-gallery [galleryImages]="images" [options]="options" />
```

### Lightbox with Controls

```typescript
options: GalleryOptions = {
  layout: { distribution: "1/4", orientation: "vertical" },
  showControls: true,
  showCount: true,
  allPictureBtnPosition: "bottom-right",
};
```

### Share Dialog

```typescript
dialog: DialogShareOptions = {
  shareButtons: ["copy", "whatsapp", "facebook", "email"],
  title: "Share this photo",
  subtitle: "Let others see this amazing shot",
  description: "Captured during the Alpine expedition, summer 2025.",
  picture: "https://example.com/preview.jpg",
};
```

```html
<ngx-gallery
  [galleryImages]="images"
  [options]="{ showShareBtn: true }"
  [dialog]="dialog"
/>
```

### Multi-language Support

```html
<!-- English (default) -->
<ngx-gallery [galleryImages]="images" lang="en" />

<!-- Spanish -->
<ngx-gallery [galleryImages]="images" lang="es" />
```

Supported keys: `share`, `close`, `copy`, `email`, `download`, `title`, `subtitle`, `description`, `copiedToast`, `emailSubject`, `emailBody`.

### Auto Play

```typescript
options: GalleryOptions = {
  autoPlay: true,
  autoPlayInterval: 4000, // change every 4 seconds
  autoPlayPauseOnHover: true, // pause when the user hovers
};
```

> **Note:** `infinityLoop` is disabled in this version, so auto play advances up to the
> last image and then stops (it does not wrap back to the first).

### Navigation Bullets

```typescript
options: GalleryOptions = {
  showBullets: true,
};
```

### Download Button

```typescript
options: GalleryOptions = {
  allowDownload: true,
};
```

When the user clicks the download button, the browser triggers a native download of `GalleryImage.src` using `GalleryImage.alt` as the filename.

### Custom Actions

```typescript
import { GalleryAction } from '@angularforge/gallery';

actions: GalleryAction[] = [
  {
    label: 'Add to favorites',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="2" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>`,
    onClick: (event, index) => console.log('Favorited image', index),
  },
];
```

```html
<ngx-gallery [galleryImages]="images" [options]="{ customActions: actions }" />
```

### Listening to Events

```typescript
@Component({
  template: `
    <ngx-gallery
      [galleryImages]="images"
      (imageChange)="onImageChange($event)"
      (lightboxOpen)="onLightboxOpen($event)"
      (lightboxClose)="onLightboxClose()"
      (lightboxImageChange)="onLightboxImageChange($event)"
    />
  `,
})
export class AppComponent {
  onImageChange(index: number) {
    console.log("Thumbnail clicked:", index);
  }
  onLightboxOpen(index: number) {
    console.log("Lightbox opened at:", index);
  }
  onLightboxClose() {
    console.log("Lightbox closed");
  }
  onLightboxImageChange(index: number) {
    console.log("Lightbox navigated to:", index);
  }
}
```

---

## Architecture

### Directory Structure

```
src/
├── public-api.ts                          ← Public API surface
└── lib/
    ├── gallery.component.ts           ← Root entry component (registers icons)
    ├── gallery.component.html
    ├── gallery.component.scss
    ├── components/
    │   ├── index.ts
    │   ├── gallery/                       ← Main gallery grid + state hub
    │   ├── lightbox/                      ← Lightbox overlay + slide animation
    │   ├── full-gallery/                  ← Scrollable full-screen gallery
    │   └── shared/
    │       ├── index.ts
    │       ├── bullets/                   ← Lightbox pagination bullets
    │       ├── buttons/
    │       │   ├── index.ts
    │       │   ├── all-pictures-btn/
    │       │   ├── close-btn/
    │       │   └── share-btn/             ← Web Share API + native fallback
    │       ├── controls/                  ← Prev/next navigation buttons
    │       ├── counter/                   ← Image counter display
    │       ├── dialog-share/              ← Social share modal
    │       ├── full-gallery-header-options/
    │       ├── gallery-image/             ← Single image with NgOptimizedImage
    │       ├── horizontal-gallery/        ← Thumbnail strip (horizontal scroll)
    │       ├── image-caption/             ← Caption overlay
    │       ├── image-filler/              ← Empty slot placeholder
    │       ├── image-skeleton/            ← Loading skeleton
    │       ├── lightbox-gallery/          ← Lightbox image display
    │       ├── lightbox-header-options/
    │       ├── overlay/                   ← Backdrop overlay
    │       └── toast/                     ← "Link copied" notification
    ├── constants/
    │   ├── index.ts
    │   ├── animations.ts                  ← Slide/fade Angular animations
    │   └── constants.ts
    ├── directives/
    │   ├── index.ts
    │   ├── click-outside.directive.ts
    │   ├── desktop.directive.ts
    │   ├── mobile.directive.ts
    │   └── prevent-back-navigation.directive.ts
    ├── interface/
    │   ├── index.ts
    │   ├── customStyles.interface.ts
    │   ├── dialogShare.interface.ts
    │   ├── image-object.interface.ts
    │   ├── gallery-image.interface.ts
    │   └── gallery-options.interface.ts
    ├── pipes/
    │   ├── index.ts
    │   └── translate.pipe.ts              ← Reactive `translate` pipe (impure)
    ├── providers/
    │   └── window.provider.ts             ← SSR-safe WINDOW InjectionToken
    ├── schema/
    │   ├── index.ts
    │   └── style.schema.ts
    ├── services/
    │   ├── index.ts
    │   ├── device.service.ts              ← Mobile/desktop breakpoint (signals)
    │   ├── icon.service.ts                ← Resolves icon family → ng-icon name
    │   ├── gallery.service.ts
    │   ├── overlay-history.service.ts     ← Back-button overlay history stack
    │   ├── scroll.service.ts              ← Body scroll lock/unlock
    │   └── translation.service.ts         ← Inline en/es translations (signals)
    ├── types/
    │   ├── index.ts
    │   ├── distribution.type.ts
    │   ├── icon.type.ts                   ← IconFamily / IconRole
    │   └── layoutDistribution.type.ts
    └── utils/
        ├── index.ts
        ├── brand-icons.utils.ts          ← Custom social/brand SVG icons
        ├── defaultCustomStyles.utils.ts
        ├── defaultDialogShareOptions.utils.ts
        ├── defaultGalleryImage.utils.ts
        ├── defaultOptions.utils.ts
        ├── distribution.utils.ts
        ├── icons.utils.ts                ← GALLERY_ICONS + role→name map
        └── imageLoader.utils.ts
```

> Translations are bundled inline in `translation.service.ts` (en/es) — there are no
> runtime `assets/i18n/*.json` files to copy or configure.

### Component Tree

```
GalleryComponent  (selector: ngx-gallery)          ← public entry component
│   providers: provideIcons(GALLERY_ICONS)   ← all ng-icons registered once here
└── GalleryGridComponent  (state hub — signals, computed, methods)
    │   providers: OverlayHistoryService      ← back-button stack, scoped per gallery
    ├── GalleryImageComponent × N        (OnPush, NgOptimizedImage)
    ├── ImageFillerComponent × N         (empty slots)
    ├── ImageSkeletonComponent × N       (loading placeholders)
    ├── AllPicturesBtnComponent          (opens full-gallery)
    ├── HorizontalGalleryComponent       (thumbnail strip)
    │   ├── GalleryImageComponent × N
    │   ├── ImageCaptionComponent
    │   └── CounterComponent
    ├── LightboxComponent                (slide-up modal)
    │   ├── LightboxHeaderOptionsComponent
    │   │   ├── CloseBtnComponent
    │   │   ├── ShareBtnComponent
    │   │   └── CounterComponent
    │   ├── ControlsComponent            (prev/next)
    │   ├── LightboxGalleryComponent
    │   │   └── GalleryImageComponent × N
    │   ├── HorizontalGalleryComponent
    │   ├── ImageCaptionComponent
    │   ├── BulletsComponent
    │   └── OverlayComponent
    ├── FullGalleryComponent             (full-screen overlay)
    │   ├── FullGalleryHeaderOptionsComponent
    │   │   ├── CloseBtnComponent
    │   │   └── ShareBtnComponent
    │   ├── GalleryImageComponent × N
    │   └── OverlayComponent
    ├── DialogShareComponent             (social share)
    │   ├── CloseBtnComponent
    │   └── ToastComponent
    └── OverlayComponent
```

---

## Accessibility

| Feature                          | Status                                     |
| -------------------------------- | ------------------------------------------ |
| Keyboard navigation (← → Escape) | Supported in lightbox and dialog           |
| `alt` text on all images         | Passed through via `GalleryImage.alt`   |
| `NgOptimizedImage` (`ngSrc`)     | Enforces explicit dimensions, improves LCP |
| Focus trap in lightbox/dialog    | Partial — to be improved in v1.1           |
| ARIA roles on modal overlays     | Planned for v1.1                           |
| `prefers-reduced-motion`         | Planned for v1.1                           |

Provide descriptive `alt` text for every image. Screen readers will read this text to visually impaired users:

```typescript
images: GalleryImage[] = [
  {
    src: 'mountain.jpg',
    alt: 'Snow-capped mountain peak at sunrise with pink sky', // descriptive!
    width: 1920,
    height: 1080,
  },
];
```

---

## Performance

- **OnPush change detection** on every component — Angular only checks when inputs change or signals emit
- **Signals & computed** — reactive state with no unnecessary re-renders
- **`NgOptimizedImage`** (`ngSrc`) — automatic lazy loading, explicit dimensions prevent CLS, optimized fetch priority
- **`@for` trackBy** — prevents full list re-renders
- **Skeleton placeholders** — perceived performance improvement
- **`sideEffects: false`** in `package.json` — enables full tree-shaking

---

## Local Development & Testing

This package is built with **ng-packagr**. The output goes to `./dist`.

```bash
npm run build         # build the library to ./dist
npm run build:watch   # rebuild on change
npm run pack:local    # build + `npm pack` → ./dist/angularforge-gallery-<version>.tgz
```

### Testing it in another project (avoid the `NG0203` trap)

Do **not** use `npm link` to test the library locally. Linking makes the bundler
resolve the library's `@angular/core` to the library's own `node_modules`, loading
**two copies of Angular**. The result is the runtime error:

```
NG0203: inject() must be called from an injection context …
```

Instead, install the packed tarball — it has no nested Angular and behaves exactly like
a real npm install:

```bash
# In this library
npm run pack:local

# In the consuming app
npm install /path/to/gallery/dist/angularforge-gallery-<version>.tgz
```

> Always run `npm run pack:local` (build **and** pack) before reinstalling — `npm run build`
> alone refreshes `dist/` but **not** the `.tgz`. If npm reuses a cached copy, install with
> `--force` or bump the version (`npm version patch --no-git-tag-version`) before packing.
>
> If you must use `npm link`, set `"preserveSymlinks": true` in the consuming app's
> `angular.json` build options so it loads a single Angular instance.

---

## Contributing

```bash
# Clone the repo
git clone https://github.com/angularforge/gallery
cd gallery

# Install dependencies
npm install

# Build the library (ng-packagr)
npm run build
```

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for all commit messages.

## Stay in touch

- Author - [Smerlyn Javier Eusebio Bonifacio](https://www.linkedin.com/in/smerlyn-javier-eusebio-bonifacio-aab15b418/)

---

## Support

If this library saved you time, consider buying me a coffee:

[![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://paypal.me/SmerlynJavierEB)

---

## License

MIT © [AngularForge](https://github.com/angularforge)

---

Forged with ⚒️❤️‍🔥 for the Angular community 🚀

# Changelog

All notable changes to [`@angularforge/gallery`](https://www.npmjs.com/package/@angularforge/gallery) are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2026-06-23

### Documentation
- Updated README with playground link, visual feature section, and screenshot placeholders
- Improved formatting consistency, corrected code-block markup, and removed accidental character prefixes from headings

## [1.0.0] - 2026-06-01

### Added
- `NgxGalleryComponent` — standalone, signals-first Angular image gallery
- Lightbox overlay with keyboard navigation (← → Esc) and swipe gestures on touch devices
- Full-gallery overlay displaying all images in a scrollable grid
- 50+ preconfigured layout distributions via `GalleryLayout`
- Social sharing via Web Share API with clipboard-copy fallback
- `GalleryConfig` with customisable ARIA labels, icon-set overrides, and CSS theming tokens
- Dark mode support via CSS custom properties — no extra setup required
- `GALLERY_PROVIDERS` helper and `provideGallery()` for application-level configuration
- OnPush change detection throughout for optimal render performance
- SSR compatibility — no `document` or `window` access at module load time
- WCAG 2.2 AA compliance: keyboard focus traps, focus restoration, live-region announcements
- Bundled icon support: Bootstrap Icons, Heroicons, Lucide (configurable)
- Angular 22 partial-compilation support

### Security
- All user-supplied image URLs and captions sanitised through Angular's `DomSanitizer`

---

*Older entries will appear here as new versions are released.*

[Unreleased]: https://github.com/angularforge/gallery/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/angularforge/gallery/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/angularforge/gallery/releases/tag/v1.0.0

# Migration Guide — v1.x → v2.0

`@angularforge/gallery` v2.0 removes the `Ngx` prefix from all public TypeScript
symbols, aligning with modern Angular naming conventions. The HTML selector
(`<ngx-gallery>`), CSS custom properties (`--ngx-gallery-*`), and all runtime
behaviour are **unchanged**.

---

## What changed

| v1.x (deprecated) | v2.0 (canonical) |
| ------------------- | --------------- |
| `NgxGalleryComponent` | `GalleryComponent` |
| `NgxGalleryImage` | `GalleryImage` |
| `NgxGalleryOptions` | `GalleryOptions` |

The old names are still exported as `@deprecated` aliases and will continue to
compile without errors until **v3.0**, so you can migrate incrementally.

---

## Step-by-step migration

### 1 — Update imports

**Before**

```ts
import {
  NgxGalleryComponent,
  NgxGalleryImage,
  NgxGalleryOptions,
} from '@angularforge/gallery';
```

**After**

```ts
import {
  GalleryComponent,
  GalleryImage,
  GalleryOptions,
} from '@angularforge/gallery';
```

### 2 — Update type annotations

**Before**

```ts
images: NgxGalleryImage[] = [...];
options: NgxGalleryOptions = { ... };
```

**After**

```ts
images: GalleryImage[] = [...];
options: GalleryOptions = { ... };
```

### 3 — Update `imports` array in Angular components

**Before**

```ts
@Component({
  imports: [NgxGalleryComponent],
  template: `<ngx-gallery [galleryImages]="images" />`,
})
```

**After**

```ts
@Component({
  imports: [GalleryComponent],
  template: `<ngx-gallery [galleryImages]="images" />`,
})
```

> The HTML selector `<ngx-gallery>` does **not** change.

### 4 — Update `TestBed.createComponent` calls (if applicable)

**Before**

```ts
fixture = TestBed.createComponent(NgxGalleryComponent);
```

**After**

```ts
fixture = TestBed.createComponent(GalleryComponent);
```

---

## Nothing else changes

- The `<ngx-gallery>` HTML selector stays the same.
- All `--ngx-gallery-*` CSS custom properties stay the same.
- All `@Input()` / `@Output()` names (`galleryImages`, `options`, `dialog`,
  `lang`, `imageChange`, `lightboxOpen`, `lightboxClose`, `lightboxImageChange`)
  stay the same.
- `GalleryAction`, `Distribution`, `Orientation`, `DialogShareOptions`,
  `CustomStyles`, `LightboxImage`, `IconFamily`, `IconRole`, `SupportedLang`,
  `TranslationService`, and `IconService` are unchanged.

---

## Automatic migration with `sed`

If your project is large you can bulk-rename with a single shell command from
your project root:

```bash
find src -type f \( -name "*.ts" -o -name "*.html" \) \
  -exec sed -i '' \
    's/NgxGalleryComponent/GalleryComponent/g;
     s/NgxGalleryImage/GalleryImage/g;
     s/NgxGalleryOptions/GalleryOptions/g' {} +
```

Review the diff carefully after running this — ensure no false positives in
comments or string literals.

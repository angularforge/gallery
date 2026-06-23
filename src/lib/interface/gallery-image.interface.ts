export interface GalleryImage {
  caption?: string;
  src: string;
  alt?: string;
  width: number
  height: number
  slug?: string,
  alternative_slugs?: AlternativeSlugs,
  sizes?: string,
  loading?: 'lazy' | 'eager' | 'auto',
  srcset?: string,
  objectFit?: 'contain' | 'cover' | 'fill' | 'none',
}

export interface AlternativeSlugs {
  en: string
  es: string
  ja: string
  fr: string
  it: string
  ko: string
  de: string
  pt: string
}

/**
 * @deprecated Use `GalleryImage` instead.
 * Will be removed in the next major version.
 */
export type NgxGalleryImage = GalleryImage;

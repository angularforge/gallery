import { GalleryImage } from "../interface";

export const defaultGalleryImage: Array<GalleryImage> = [{
  src: '',
  alt: '',
  caption: '',
  width: 0,
  height: 0,
  slug: '',
  alternative_slugs: {
    en: '',
    es: '',
    ja: '',
    fr: '',
    it: '',
    ko: '',
    de: '',
    pt: '',
  },
  sizes: '',
  loading: 'lazy',
  srcset: '',
  objectFit: 'contain',
}];

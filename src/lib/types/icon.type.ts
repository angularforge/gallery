/** Icon families the gallery can swap between via `NgxGalleryOptions.iconFamily`. */
export type IconFamily = 'heroicons' | 'lucide' | 'bootstrap';

/** Semantic UI icon roles used across the gallery. */
export type IconUiRole =
  | 'close'
  | 'prev'
  | 'next'
  | 'share'
  | 'grid'
  | 'copy'
  | 'email'
  | 'download'
  | 'check'
  | 'translate';

/** Social/brand icon roles used in the share dialog. */
export type IconBrandRole =
  | 'facebook'
  | 'twitter'
  | 'whatsapp'
  | 'telegram'
  | 'linkedin'
  | 'instagram';

/** Every icon role the gallery can resolve through the active family. */
export type IconRole = IconUiRole | IconBrandRole;

/*
 * Public API Surface of @angularforge/gallery
 */

// Root component
export { GalleryComponent } from './lib/gallery.component';

// Interfaces & types
export type { GalleryImage } from './lib/interface/gallery-image.interface';
export type { GalleryOptions, GalleryAction, Distribution, Orientation } from './lib/interface/gallery-options.interface';
export type { DialogShareOptions } from './lib/interface/dialogShare.interface';
export type { CustomStyles } from './lib/interface/customStyles.interface';
export type { LightboxImage } from './lib/interface/image-object.interface';
export type { IconFamily, IconRole } from './lib/types';

// Services (public facade)
export { TranslationService } from './lib/services/translation.service';
export type { SupportedLang } from './lib/services/translation.service';
export { IconService } from './lib/services/icon.service';

// ---------------------------------------------------------------------------
// Deprecated aliases — will be removed in the next major version.
// ---------------------------------------------------------------------------

/**
 * @deprecated Use `GalleryComponent` instead.
 * Will be removed in the next major version.
 */
export { GalleryComponent as NgxGalleryComponent } from './lib/gallery.component';

/**
 * @deprecated Use `GalleryImage` instead.
 * Will be removed in the next major version.
 */
export type { NgxGalleryImage } from './lib/interface/gallery-image.interface';

/**
 * @deprecated Use `GalleryOptions` instead.
 * Will be removed in the next major version.
 */
export type { NgxGalleryOptions } from './lib/interface/gallery-options.interface';

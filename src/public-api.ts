/*
 * Public API Surface of @angularforge/gallery
 */

// Root component
export * from './lib/ngx-gallery.component';

// Interfaces & types
export type { NgxGalleryImage } from './lib/interface/ngxGalleryImage.interface';
export type { NgxGalleryOptions, GalleryAction, Distribution, Orientation } from './lib/interface/ngxGalleryOptions.interface';
export type { DialogShareOptions } from './lib/interface/dialogShare.interface';
export type { CustomStyles } from './lib/interface/customStyles.interface';
export type { LightboxImage } from './lib/interface/image-object.interface';
export type { IconFamily, IconRole } from './lib/types';

// Services (public facade)
export { TranslationService } from './lib/services/translation.service';
export type { SupportedLang } from './lib/services/translation.service';
export { IconService } from './lib/services/icon.service';

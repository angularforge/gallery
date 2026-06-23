
import { Style } from "../schema";
import { IconFamily } from "../types";
import { CustomStyles } from "./customStyles.interface";
import { DialogShareOptions } from "./dialogShare.interface";

export interface GalleryOptions {
  // Visibility
  showAllPicturesBtn?: boolean;
  showControls?: boolean;
  fullGallery?: boolean;
  showCount?: boolean;
  showShareBtn?: boolean;
  showBullets?: boolean;

  // Icons
  /** Icon family used across the gallery UI. Defaults to `'heroicons'`. */
  iconFamily?: IconFamily;

  // Layout
  layout?: Layout;
  customLayout?: CustomStyles;
  dialogShareOptions?: DialogShareOptions;
  layoutStyles?: Partial<Pick<Style, 'border' | 'height' | 'width' | 'gap'>>;
  allPictureBtnPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

  // Navigation
  /** @deprecated Disabled in this version: value is ignored and navigation never wraps. */
  infinityLoop?: boolean;
  closeOnBackdropClick?: boolean;

  // Auto play
  autoPlay?: boolean;
  autoPlayInterval?: number;
  autoPlayPauseOnHover?: boolean;

  // Lightbox actions
  allowDownload?: boolean;
  customActions?: GalleryAction[];
}

export interface GalleryAction {
  icon: string;
  label: string;
  disabled?: boolean;
  onClick: (event: Event, index: number) => void;
}

export type Distribution = "1/1" | "1/2" | "1/3" | "1/4" | "1/5" | "1/6" | "1/7" | "1/8" | "1/9" | "2/1" | "2/2" | "2/3" | "2/4" | "2/5" | "2/6" | "2/7" | "2/8" | "3/1" | "3/2" | "3/3" | "3/4" | "3/5" | "3/6" | "3/7" | "4/1" | "4/2" | "4/3" | "4/4" | "4/5" | "4/6" | "5/1" | "5/2" | "5/3" | "5/4" | "5/5" | "6/1" | "6/2" | "6/3" | "6/4" | "7/1" | "7/2" | "7/3" | "8/1" | "8/2" | "9/1" | "1/4/1" | "default" | "custom"
export type Orientation = "horizontal" | "vertical"

interface Layout {
  distribution: Distribution;
  orientation: Orientation;
}

/**
 * @deprecated Use `GalleryOptions` instead.
 * Will be removed in the next major version.
 */
export type NgxGalleryOptions = GalleryOptions;

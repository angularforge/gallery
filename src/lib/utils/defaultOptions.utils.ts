import { GalleryOptions } from "../interface";
import { defaultCustomStyles } from "./defaultCustomStyles.utils";
import { defaultDialogShareOptions } from "./defaultDialogShareOptions.utils";


export const defaultOptions: GalleryOptions = {
  dialogShareOptions:defaultDialogShareOptions,
  allPictureBtnPosition: 'bottom-right',
  customLayout: defaultCustomStyles,
  showAllPicturesBtn: true,
  showControls: true,
  showShareBtn: true,
  fullGallery: true,
  showCount: true,
  iconFamily: 'heroicons',
}

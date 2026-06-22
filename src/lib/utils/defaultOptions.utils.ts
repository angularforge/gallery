import { NgxGalleryOptions } from "../interface";
import { defaultCustomStyles } from "./defaultCustomStyles.utils";
import { defaultDialogShareOptions } from "./defaultDialogShareOptions.utils";


export const defaultOptions: NgxGalleryOptions = {
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

import { ChangeDetectionStrategy, Component, computed, EventEmitter, inject, Input, Output, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgClass, NgStyle } from '@angular/common';

import { GalleryImage, GalleryOptions, DialogShareOptions } from '../../interface';
import { Style } from '../../schema';
import { AllPicturesBtnComponent } from '../shared/buttons';
import {
  DialogShareComponent,
  GalleryImageComponent,
  HorizontalGalleryComponent,
  ImageFillerComponent,
  ImageSkeletonComponent,
  OverlayComponent,
} from '../shared';
import { DeviceService, OverlayHistoryService } from '../../services';
import { FullGalleryComponent } from '../full-gallery/full-gallery.component';
import { LightboxComponent } from '../lightbox/lightbox.component';
import { DesktopDirective, MobileDirective } from '../../directives';
import { ZERO } from '../../constants';

@Component({
  selector: 'gallery',
  imports: [
    NgStyle,
    NgClass,
    DesktopDirective,
    MobileDirective,
    HorizontalGalleryComponent,
    AllPicturesBtnComponent,
    ImageSkeletonComponent,
    GalleryImageComponent,
    ImageFillerComponent,
    FullGalleryComponent,
    DialogShareComponent,
    LightboxComponent,
    OverlayComponent,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Scope the history stack to this gallery instance so the back button closes
  // its own overlays without interfering with other galleries on the page.
  providers: [OverlayHistoryService],
})
export class GalleryComponent {
  private readonly _dialogShareOptions = signal<DialogShareOptions | undefined>(undefined);
  get dialogShareOptions(): Signal<DialogShareOptions | undefined> { return this._dialogShareOptions; }
  @Input() set dialogShareOptions(v: DialogShareOptions | undefined) { this._dialogShareOptions.set(v); }

  private readonly _galleryImages = signal<Array<GalleryImage>>([]);
  get galleryImages(): Signal<Array<GalleryImage>> { return this._galleryImages; }
  @Input({ required: true }) set galleryImages(v: Array<GalleryImage>) { this._galleryImages.set(v); }

  private readonly _style = signal<Style>(undefined as any);
  get style(): Signal<Style> { return this._style; }
  @Input({ required: true }) set style(v: Style) { this._style.set(v); }

  private readonly _options = signal<GalleryOptions | undefined>(undefined);
  get options(): Signal<GalleryOptions | undefined> { return this._options; }
  @Input() set options(v: GalleryOptions | undefined) { this._options.set(v); }

  @Output() readonly imageChange = new EventEmitter<number>();
  @Output() readonly lightboxOpen = new EventEmitter<number>();
  @Output() readonly lightboxClose = new EventEmitter<void>();
  @Output() readonly lightboxImageChange = new EventEmitter<number>();

  readonly currentLightboxImage = signal<GalleryImage>({ src: '', alt: '', caption: '', width: ZERO, height: ZERO });
  readonly isFullGalleryOverlayOpen = signal<boolean>(false);
  readonly isLightboxOverlayOpen = signal<boolean>(false);
  readonly imageLoadStates = signal<Array<boolean>>([]);
  readonly isFullGalleryOpen = signal<boolean>(false);
  readonly isDialogShareOpen = signal<boolean>(false);
  readonly allImagesLoaded = signal<boolean>(false);
  readonly showFullGallery = signal<boolean>(false);
  readonly isLightboxOpen = signal<boolean>(false);
  readonly isFirstElement = signal<boolean>(false);
  readonly isLastElement = signal<boolean>(false);
  readonly isOverlayOpen = signal<boolean>(false);
  readonly isToScrolling = signal<boolean>(false);
  readonly wasReset = signal<boolean>(false);
  readonly currentIndex = signal<number>(ZERO);
  readonly isHorizontalGalleryLoaded = signal<boolean>(false);

  readonly fillerCount = computed<number>(() => this.style().maxItems - this.galleryImages().slice(ZERO, this.style().maxItems).length);
  readonly galleryImagesMaxItems = computed(() => this.galleryImages().slice(ZERO, this.style().maxItems));
  readonly imageLength = computed(() => this.galleryImagesMaxItems().length);
  readonly totalImageCount = computed(() => this.galleryImages().length);
  readonly fillers = computed(() => [].constructor(this.fillerCount()));
  readonly skeletonFillers = computed(() => [].constructor(this.galleryImagesMaxItems().concat(this.fillers())));
  readonly allPicturesBtnPosition = computed(() => {
    switch (this.options()?.allPictureBtnPosition) {
      case 'bottom-right': return ['bottom-4', 'right-4'];
      case 'top-left':     return ['top-4', 'left-4'];
      case 'top-right':    return ['top-4', 'right-4'];
      case 'bottom-left':  return ['bottom-4', 'left-4'];
      default:             return ['bottom-4', 'right-4'];
    }
  });

  readonly isMobile = toSignal<boolean>(inject(DeviceService).isMobile$);

  private readonly overlayHistory = inject(OverlayHistoryService);
  private lightboxHistoryId = -1;
  private fullGalleryHistoryId = -1;
  private dialogShareHistoryId = -1;

  galleryImageClick(image: GalleryImage, index: number): void {
    const wasOpen = this.isLightboxOverlayOpen();
    this.updateCurrentLightboxImage(image);
    this.updateCurrentIndex(index);
    this.openLightbox();
    this.isLightboxOverlayOpen.set(true);
    this.isToScrolling.set(true);
    this.imageChange.emit(index);
    this.lightboxOpen.emit(index);
    if (!wasOpen) this.lightboxHistoryId = this.overlayHistory.open(() => this.closeLightbox());
  }

  openFullGallery(image?: GalleryImage, index?: number): void {
    const wasOpen = this.isFullGalleryOpen();
    this.showFullGallery.set(true);
    this.isFullGalleryOpen.set(true);
    this.isFullGalleryOverlayOpen.set(true);
    if (index !== undefined) this.updateCurrentIndex(index);
    if (image) this.updateCurrentLightboxImage(image);
    if (!wasOpen) this.fullGalleryHistoryId = this.overlayHistory.open(() => this.closeFullGallery());
  }

  closeFullGallery(): void {
    this.reset();
    this.isFullGalleryOpen.set(false);
  }

  openLightbox(): void {
    this.isLightboxOpen.set(true);
  }

  closeLightbox(): void {
    this.isLightboxOpen.set(false);
    this.lightboxClose.emit();
  }

  slideDownAnimationDone(): void {
    this.showFullGallery.set(false);
  }

  openDialogShare(): void {
    const wasOpen = this.isDialogShareOpen();
    this.isOverlayOpen.set(true);
    this.isDialogShareOpen.set(true);
    if (!wasOpen) this.dialogShareHistoryId = this.overlayHistory.open(() => this.closeDialogShare());
  }

  closeDialogShare(): void {
    this.isDialogShareOpen.set(false);
  }

  /**
   * UI-initiated dismissals route through the history service so the pushed
   * history entry is unwound; the back button reuses the same close callbacks.
   */
  dismissLightbox(): void {
    this.overlayHistory.dismiss(this.lightboxHistoryId);
  }

  dismissFullGallery(): void {
    this.overlayHistory.dismiss(this.fullGalleryHistoryId);
  }

  dismissDialogShare(): void {
    this.overlayHistory.dismiss(this.dialogShareHistoryId);
  }

  closeLightboxOverlay(): void {
    this.isLightboxOverlayOpen.set(false);
  }

  closeFullGalleryOverlay(): void {
    this.isFullGalleryOverlayOpen.set(false);
  }

  closeOverlay(): void {
    this.isOverlayOpen.set(false);
  }

  onImageLoad(index: number): void {
    this.imageLoadStates.update(states => {
      const next = [...states];
      next[index] = true;
      return next;
    });
    this.checkAllImagesLoaded();
  }

  onImageError(index: number): void {
    this.imageLoadStates.update(states => {
      const next = [...states];
      next[index] = true;
      return next;
    });
    this.checkAllImagesLoaded();
  }

  checkAllImagesLoaded(): void {
    this.allImagesLoaded.set(this.imageLoadStates().every(state => state));
  }

  onNext(): void {
    const loop = this.options()?.infinityLoop;
    const isLast = this.currentIndex() >= this.totalImageCount() - 1;
    if (!isLast || loop) {
      const nextIndex = isLast ? ZERO : this.currentIndex() + 1;
      this.updateCurrentIndex(nextIndex);
      this.updateCurrentLightboxImage(this.galleryImages()[this.currentIndex()]);
      this.lightboxImageChange.emit(this.currentIndex());
    }
  }

  onPrev(): void {
    const loop = this.options()?.infinityLoop;
    const isFirst = this.currentIndex() <= ZERO;
    if (!isFirst || loop) {
      const prevIndex = isFirst ? this.totalImageCount() - 1 : this.currentIndex() - 1;
      this.updateCurrentIndex(prevIndex);
      this.updateCurrentLightboxImage(this.galleryImages()[this.currentIndex()]);
      this.lightboxImageChange.emit(this.currentIndex());
    }
  }

  reset(): void {
    this.wasReset.set(true);
    setTimeout(() => this.wasReset.set(false), 1000);
    this.currentIndex.set(ZERO);
  }

  showNextControl(value: boolean): void {
    this.isLastElement.set(value);
  }

  showPrevControl(value: boolean): void {
    this.isFirstElement.set(value);
  }

  updateCurrentIndex(index: number): void {
    this.currentIndex.set(index);
    const total = this.totalImageCount();
    const loop = this.options()?.infinityLoop;

    if (loop) {
      this.showPrevControl(false);
      this.showNextControl(false);
      return;
    }

    switch (index) {
      case ZERO:
        this.showPrevControl(true);
        this.showNextControl(false);
        break;
      case total - 1:
        this.showNextControl(true);
        this.showPrevControl(false);
        break;
      default:
        this.showPrevControl(false);
        this.showNextControl(false);
        break;
    }
  }

  updateCurrentLightboxImage(image: GalleryImage): void {
    this.currentLightboxImage.set(image);
  }

  horizontalGalleryLoaded(value: boolean): void {
    this.isHorizontalGalleryLoaded.set(value);
  }
}

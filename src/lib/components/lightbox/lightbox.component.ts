import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  EventEmitter,
  HostListener,
  inject,
  Input,
  Injector,
  OnDestroy,
  Output,
  Signal,
  signal,
} from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { toSignal } from '@angular/core/rxjs-interop';

import {
  BulletsComponent,
  ControlsComponent,
  HorizontalGalleryComponent,
  ImageCaptionComponent,
  LightboxGalleryComponent,
  LightboxHeaderOptionsComponent,
  OverlayComponent,
} from '../shared';
import { GalleryImage, LightboxImage, GalleryOptions } from '../../interface';
import { FADE_ANIMATION, SLIDE_ANIMATION } from '../../constants';
import { DeviceService, ScrollService } from '../../services';

@Component({
  selector: 'lightbox',
  imports: [
    LightboxHeaderOptionsComponent,
    ControlsComponent,
    LightboxGalleryComponent,
    HorizontalGalleryComponent,
    ImageCaptionComponent,
    OverlayComponent,
    BulletsComponent,
  ],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss',
  animations: [SLIDE_ANIMATION, FADE_ANIMATION],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightboxComponent implements OnDestroy {
  private readonly _currentLightboxImage = signal<GalleryImage>({ src: '', alt: '', caption: '', width: 0, height: 0 });
  get currentLightboxImage(): Signal<GalleryImage> { return this._currentLightboxImage; }
  @Input() set currentLightboxImage(v: GalleryImage) { this._currentLightboxImage.set(v); }

  private readonly _isDialogShareOpen = signal<boolean>(false);
  get isDialogShareOpen(): Signal<boolean> { return this._isDialogShareOpen; }
  @Input({ required: true }) set isDialogShareOpen(v: boolean) { this._isDialogShareOpen.set(v); }

  private readonly _galleryImages = signal<GalleryImage[]>([]);
  get galleryImages(): Signal<GalleryImage[]> { return this._galleryImages; }
  @Input({ required: true }) set galleryImages(v: GalleryImage[]) { this._galleryImages.set(v); }

  private readonly _isToScrolling = signal<boolean>(false);
  get isToScrolling(): Signal<boolean> { return this._isToScrolling; }
  @Input() set isToScrolling(v: boolean) { this._isToScrolling.set(v); }

  private readonly _totalImageCount = signal<number>(0);
  get totalImageCount(): Signal<number> { return this._totalImageCount; }
  @Input() set totalImageCount(v: number) { this._totalImageCount.set(v); }

  private readonly _currentIndex = signal<number>(0);
  get currentIndex(): Signal<number> { return this._currentIndex; }
  @Input() set currentIndex(v: number) { this._currentIndex.set(v); }

  private readonly _isOpen = signal<boolean>(false);
  get isOpen(): Signal<boolean> { return this._isOpen; }
  @Input() set isOpen(v: boolean) { this._isOpen.set(v); }

  private readonly _options = signal<GalleryOptions | undefined>(undefined);
  get options(): Signal<GalleryOptions | undefined> { return this._options; }
  @Input() set options(v: GalleryOptions | undefined) { this._options.set(v); }

  private readonly _isFirstElement = signal<boolean>(false);
  get isFirstElement(): Signal<boolean> { return this._isFirstElement; }
  @Input() set isFirstElement(v: boolean) { this._isFirstElement.set(v); }

  private readonly _isLastElement = signal<boolean>(false);
  get isLastElement(): Signal<boolean> { return this._isLastElement; }
  @Input() set isLastElement(v: boolean) { this._isLastElement.set(v); }

  private readonly _isOverlayOpen = signal<boolean>(false);
  get isOverlayOpen(): Signal<boolean> { return this._isOverlayOpen; }
  @Input({ required: true }) set isOverlayOpen(v: boolean) { this._isOverlayOpen.set(v); }

  @Output() readonly scroll = new EventEmitter<LightboxImage>();
  @Output() readonly closeOverlay = new EventEmitter<void>();
  @Output() readonly close = new EventEmitter<void>();
  @Output() readonly share = new EventEmitter<void>();
  @Output() readonly prev = new EventEmitter<void>();
  @Output() readonly next = new EventEmitter<void>();

  readonly isMobile = toSignal<boolean>(inject(DeviceService).isMobile$);

  readonly showLightbox = signal<boolean>(false);
  readonly onScrollIndex = signal(0);
  readonly fadeAnimationControl = signal<boolean>(true);
  readonly isAutoPlayPaused = signal<boolean>(false);

  private autoPlayTimer: ReturnType<typeof setInterval> | null = null;
  private readonly destroyRef = inject(DestroyRef);
  private readonly scrollService = inject(ScrollService);
  private isScrollLocked = false;

  index: number = 0;

  constructor() {
    const injector = inject(Injector);

    effect(() => { this.index = this.onScrollIndex(); }, { injector });
    effect(() => { this.index = this.currentIndex(); }, { injector });

    // Lock the page scroll while the lightbox is open, regardless of whether it
    // was opened from the gallery grid or from within the full gallery.
    effect(() => {
      if (this.isOpen()) {
        this.lockScroll();
      }
    }, { injector });

    effect(() => {
      const opts = this.options();
      const open = this.showLightbox();

      if (opts?.autoPlay && open) {
        this.startAutoPlay(opts.autoPlayInterval ?? 3000);
      } else {
        this.stopAutoPlay();
      }
    }, { injector });

    this.destroyRef.onDestroy(() => this.stopAutoPlay());
  }

  private lockScroll(): void {
    if (!this.isScrollLocked) {
      this.scrollService.lockScroll();
      this.isScrollLocked = true;
    }
  }

  private releaseScroll(): void {
    if (this.isScrollLocked) {
      this.scrollService.unlockScroll();
      this.isScrollLocked = false;
    }
  }

  private startAutoPlay(interval: number): void {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      if (!this.isAutoPlayPaused()) {
        this.onNext();
      }
    }, interval);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayTimer !== null) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  onMouseEnter(): void {
    if (this.options()?.autoPlayPauseOnHover) {
      this.isAutoPlayPaused.set(true);
    }
  }

  onMouseLeave(): void {
    this.isAutoPlayPaused.set(false);
  }

  slideAnimationStart(event: AnimationEvent): void {
    if (event.toState === 'slideUp') {
      this.showLightbox.set(true);
    }
  }

  slideAnimationDone(event: AnimationEvent): void {
    if (event.toState === 'slideDown') {
      this.showLightbox.set(false);
      this.releaseScroll();
      this.onCloseOverlay();
    }
  }

  setFadeAnimation(): void {
    this.fadeAnimationControl.set(false);
    setTimeout(() => this.fadeAnimationControl.set(true), 10);
  }

  onCloseLightbox(): void {
    this.close.emit();
  }

  onCloseOverlay(): void {
    this.closeOverlay.emit();
  }

  onPrev(): void {
    const canGoBack = !this.isFirstElement() || this.options()?.infinityLoop;
    if (canGoBack) {
      this.setFadeAnimation();
      this.prev.emit();
    }
  }

  onNext(): void {
    const canGoNext = !this.isLastElement() || this.options()?.infinityLoop;
    if (canGoNext) {
      this.setFadeAnimation();
      this.next.emit();
    }
  }

  onBulletSelect(index: number): void {
    const image = this.galleryImages()[index];
    if (image) {
      this.scroll.emit({ ...image, index });
    }
  }

  onScroll(imageObject: LightboxImage): void {
    this.onScrollIndex.set(imageObject.index);
    this.scroll.emit(imageObject);
  }

  onShare(): void {
    this.share.emit();
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowRight':
        this.onNext();
        break;
      case 'ArrowLeft':
        this.onPrev();
        break;
      case 'Escape':
        setTimeout(() => {
          if (!this.isDialogShareOpen()) {
            this.onCloseLightbox();
          }
        }, 100);
        break;
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
    this.releaseScroll();
  }
}

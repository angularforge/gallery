import { ChangeDetectionStrategy, Component, DestroyRef, effect, ElementRef, EventEmitter, HostListener, inject, Input, Injector, Output, QueryList, Signal, signal, ViewChildren } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { GalleryImageComponent, FullGalleryHeaderOptionsComponent, OverlayComponent } from '../shared';
import { FADE_ANIMATION, SLIDE_ANIMATION } from '../../constants';
import { ScrollService } from '../../services';
import { GalleryImage } from '../../interface';

@Component({
    selector: 'full-gallery',
    imports: [GalleryImageComponent, FullGalleryHeaderOptionsComponent, OverlayComponent],
    templateUrl: './full-gallery.component.html',
    styleUrl: './full-gallery.component.scss',
    animations: [
        SLIDE_ANIMATION,
        FADE_ANIMATION,
    ],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullGalleryComponent {
  @ViewChildren('listItem') listItems!: QueryList<ElementRef>;

  private readonly _galleryImages = signal<Array<GalleryImage>>([]);
  get galleryImages(): Signal<Array<GalleryImage>> { return this._galleryImages; }
  @Input({ required: true }) set galleryImages(v: Array<GalleryImage>) { this._galleryImages.set(v); }

  private readonly _currentImageIndex = signal<number>(0);
  get currentImageIndex(): Signal<number> { return this._currentImageIndex; }
  @Input({ required: true }) set currentImageIndex(v: number) { this._currentImageIndex.set(v); }

  private readonly _isOverlayOpen = signal<boolean>(false);
  get isOverlayOpen(): Signal<boolean> { return this._isOverlayOpen; }
  @Input({ required: true }) set isOverlayOpen(v: boolean) { this._isOverlayOpen.set(v); }

  private readonly _isDialogShareOpen = signal<boolean>(false);
  get isDialogShareOpen(): Signal<boolean> { return this._isDialogShareOpen; }
  @Input({ required: true }) set isDialogShareOpen(v: boolean) { this._isDialogShareOpen.set(v); }

  private readonly _isLightBoxOpen = signal<boolean>(false);
  get isLightBoxOpen(): Signal<boolean> { return this._isLightBoxOpen; }
  @Input({ required: true }) set isLightBoxOpen(v: boolean) { this._isLightBoxOpen.set(v); }

  private readonly _isOpen = signal<boolean>(false);
  get isOpen(): Signal<boolean> { return this._isOpen; }
  @Input() set isOpen(v: boolean) { this._isOpen.set(v); }

  private readonly _shareBtn = signal<any>(undefined);
  get shareBtn(): Signal<any> { return this._shareBtn; }
  @Input() set shareBtn(v: any) { this._shareBtn.set(v); }

  @Output() readonly animationDone = new EventEmitter<AnimationEvent>();
  @Output() readonly fullGalleryImageClick = new EventEmitter<{ image: GalleryImage, index: number }>();
  @Output() readonly slideDownAnimationDone = new EventEmitter<void>();
  @Output() readonly closeOverlay = new EventEmitter<void>();
  @Output() readonly close = new EventEmitter<void>();
  @Output() readonly share = new EventEmitter<void>();

  readonly showFullGallery = signal<boolean>(false);

  private readonly scrollService = inject(ScrollService);
  private isScrollLocked = false;

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        this.lockScroll();
      }
    }, { injector: inject(Injector) });

    inject(DestroyRef).onDestroy(() => this.releaseScroll());
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

  slideAnimationStart(event: AnimationEvent) {
    if (event.toState === 'slideUp') {
      this.showFullGallery.set(true);
      if (this.currentImageIndex() !== 0) {
        this.onScrollToSpecificImage(this.currentImageIndex());
      }
    }
  }

  slideAnimationDone(event: AnimationEvent) {
    if (event.toState === 'slideDown') {
      this.releaseScroll();
      this.onSlideDownAnimationDone();
      this.onCloseOverlay();
      this.showFullGallery.set(false);
    }
  }

  onCloseFullGallery() {
    this.close.emit();
  }
  onCloseOverlay() {
    this.closeOverlay.emit();
  }
  onSlideDownAnimationDone() {
    this.slideDownAnimationDone.emit();
  }
  onClick(image: GalleryImage, index: number) {
    this.fullGalleryImageClick.emit({ index, image });
  }
  onShare() {
    this.share.emit();
  }

  onScrollToSpecificImage(index: number) {
    setTimeout(() => {
      const target = this.listItems.toArray()[index];
      if (target) {
        target.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        if (!this.isLightBoxOpen() && !this.isDialogShareOpen()) {
          this.onCloseFullGallery();
        }
        break;
    }
  }
}

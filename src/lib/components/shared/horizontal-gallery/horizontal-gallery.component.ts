import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, EventEmitter, inject, Input, Injector, Output, Signal, signal, ViewChild } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { NgClass } from '@angular/common';

import { ImageCaptionComponent } from '../image-caption/image-caption.component';
import { GalleryImageComponent } from '../gallery-image/gallery-image.component';
import { CounterComponent } from '../counter/counter.component';
import { NgxGalleryImage, LightboxImage } from '../../../interface';

@Component({
    selector: 'div[horizontal-gallery]',
    imports: [
        NgClass,
        GalleryImageComponent,
        ImageCaptionComponent,
        CounterComponent,
    ],
    templateUrl: './horizontal-gallery.component.html',
    styleUrl: './horizontal-gallery.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalGalleryComponent {
  private readonly _carouselSignal = signal<ElementRef | undefined>(undefined);
  @ViewChild('carousel') set carousel(el: ElementRef | undefined) { this._carouselSignal.set(el); }

  private readonly _objectFit = signal<'contain' | 'cover' | 'fill' | 'none'>('cover');
  get objectFit(): Signal<'contain' | 'cover' | 'fill' | 'none'> { return this._objectFit; }
  @Input({ required: true }) set objectFit(v: 'contain' | 'cover' | 'fill' | 'none') { this._objectFit.set(v); }

  private readonly _galleryImages = signal<NgxGalleryImage[]>([]);
  get galleryImages(): Signal<NgxGalleryImage[]> { return this._galleryImages; }
  @Input({ required: true }) set galleryImages(v: NgxGalleryImage[]) { this._galleryImages.set(v); }

  private readonly _isToScrolling = signal<boolean>(false);
  get isToScrolling(): Signal<boolean> { return this._isToScrolling; }
  @Input() set isToScrolling(v: boolean) { this._isToScrolling.set(v); }

  private readonly _isLightbox = signal<boolean>(false);
  get isLightbox(): Signal<boolean> { return this._isLightbox; }
  @Input() set isLightbox(v: boolean) { this._isLightbox.set(v); }

  private readonly _wasReset = signal<boolean | undefined>(undefined);
  get wasReset(): Signal<boolean | undefined> { return this._wasReset; }
  @Input() set wasReset(v: boolean | undefined) { this._wasReset.set(v); }

  private readonly _totalImageCount = signal<number>(0);
  get totalImageCount(): Signal<number> { return this._totalImageCount; }
  @Input() set totalImageCount(v: number) { this._totalImageCount.set(v); }

  private readonly _currentIndex = signal<number>(0);
  get currentIndex(): Signal<number> { return this._currentIndex; }
  @Input() set currentIndex(v: number) { this._currentIndex.set(v); }

  @Output() readonly galleryImageClick = new EventEmitter<{ image: NgxGalleryImage, index: number }>();
  @Output() readonly AnimationEnd = new EventEmitter<AnimationEvent>();
  @Output() readonly scroll = new EventEmitter<LightboxImage>();
  @Output() readonly scrollStop = new EventEmitter<void>();
  @Output() readonly firstImageLoaded = new EventEmitter<boolean>();

  readonly nativeElement = computed(() => this._carouselSignal()?.nativeElement);
  readonly itemWidth = computed(() => this.nativeElement()?.offsetWidth);

  private scrollTimeout: any;

  constructor() {
    effect(() => {
      if (this.isToScrolling()) {
        this.scrollToIndex(this.currentIndex(), this.itemWidth());
      }
    }, { injector: inject(Injector) });

    effect(() => {
      if (this.currentIndex() === 0) {
        this.scroll.emit({ ...this.galleryImages()[this.currentIndex()], index: this.currentIndex() });
      }
    }, { injector: inject(Injector) });

    effect(() => {
      if (this.wasReset() && this.currentIndex() === 0) {
        this.scrollToIndex(this.currentIndex(), this.itemWidth());
      }
    }, { injector: inject(Injector) });
  }

  onAnimationEnd(event: AnimationEvent) {
    this.AnimationEnd.emit(event);
  }

  scrollToIndex(index: number = 0, itemWidth: number): void {
    const width = this.isLightbox() ? itemWidth + 16 : itemWidth;
    if (this.nativeElement()) {
      this.nativeElement().scrollTo({
        left: index * width,
        behavior: 'auto'
      });
    }
  }

  onScroll(): void {
    const width = this.isLightbox() ? this.nativeElement()?.offsetWidth + 16 : this.nativeElement()?.offsetWidth;
    const index = Math.round(this.nativeElement()?.scrollLeft / width);

    if (this.nativeElement()) {
      this.scroll.emit({ ...this.galleryImages()[index], index });
    }

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    this.scrollTimeout = setTimeout(() => {
      this.onScrollStop();
    }, 200);
  }

  onScrollStop() {
    this.scrollStop.emit();
  }

  onGalleryImageClick(image: NgxGalleryImage, index: number) {
    this.galleryImageClick.emit({ image, index });
  }

  onImageLoad(index: number) {
    if (index === 0) {
      this.firstImageLoaded.emit(true);
    }
  }

  onImageError(index: number) {
    if (index === 0) {
      this.firstImageLoaded.emit(true);
    }
  }
}

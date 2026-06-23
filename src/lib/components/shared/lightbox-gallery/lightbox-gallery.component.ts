import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Signal, signal } from '@angular/core';
import { GalleryImage } from '../../../interface';
import { AnimationEvent } from '@angular/animations';
import { GalleryImageComponent } from '../gallery-image/gallery-image.component';
import { FADE_ANIMATION } from '../../../constants';

@Component({
    selector: 'lightbox-gallery',
    imports: [GalleryImageComponent],
    animations: [
        FADE_ANIMATION
    ],
    templateUrl: './lightbox-gallery.component.html',
    styleUrl: './lightbox-gallery.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightboxGalleryComponent {
  private readonly _currentLightboxImage = signal<GalleryImage>({ src: '', alt: '', caption: '', width: 0, height: 0 });
  get currentLightboxImage(): Signal<GalleryImage> { return this._currentLightboxImage; }
  @Input() set currentLightboxImage(v: GalleryImage) { this._currentLightboxImage.set(v); }

  @Output() readonly AnimationEnd = new EventEmitter<AnimationEvent>();

  onAnimationEnd(event: AnimationEvent) {
    this.AnimationEnd.emit(event);
  }
}

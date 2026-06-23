import { NgClass, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Signal, signal } from '@angular/core';
import { GalleryImage } from '../../../interface';

@Component({
  selector: 'gallery-image',
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './gallery-image.component.html',
  styleUrl: './gallery-image.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryImageComponent {
  private readonly _objectFit = signal<'contain' | 'cover' | 'fill' | 'none'>('cover');
  get objectFit(): Signal<'contain' | 'cover' | 'fill' | 'none'> { return this._objectFit; }
  @Input() set objectFit(v: 'contain' | 'cover' | 'fill' | 'none') { this._objectFit.set(v); }

  private readonly _isInteractive = signal<boolean>(false);
  get isInteractive(): Signal<boolean> { return this._isInteractive; }
  @Input() set isInteractive(v: boolean) { this._isInteractive.set(v); }

  private readonly _image = signal<GalleryImage | undefined>(undefined);
  get image(): Signal<GalleryImage | undefined> { return this._image; }
  @Input() set image(v: GalleryImage | undefined) { this._image.set(v); }

  private readonly _srcset = signal<string>('');
  get srcset(): Signal<string> { return this._srcset; }
  @Input() set srcset(v: string) { this._srcset.set(v); }

  private readonly _height = signal<string | undefined>(undefined);
  get height(): Signal<string | undefined> { return this._height; }
  @Input() set height(v: string | undefined) { this._height.set(v); }

  private readonly _width = signal<string | undefined>(undefined);
  get width(): Signal<string | undefined> { return this._width; }
  @Input() set width(v: string | undefined) { this._width.set(v); }

  @Output() readonly imageError = new EventEmitter<void>();
  @Output() readonly imageLoad = new EventEmitter<void>();
  @Output() readonly click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
  onImageLoad() {
    this.imageLoad.emit();
  }
  onImageError() {
    this.imageError.emit();
  }
}

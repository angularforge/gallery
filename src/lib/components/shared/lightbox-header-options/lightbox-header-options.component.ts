import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, Signal, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

import { CloseBtnComponent, ShareBtnComponent } from '../buttons';
import { CounterComponent } from '../counter/counter.component';
import { TranslatePipe } from '../../../pipes';
import { IconService } from '../../../services';
import { NgxGalleryImage } from '../../../interface/ngxGalleryImage.interface';
import { NgxGalleryOptions } from '../../../interface';

@Component({
  selector: 'lightbox-header-options',
  imports: [
    CloseBtnComponent,
    ShareBtnComponent,
    CounterComponent,
    TranslatePipe,
    NgIcon,
  ],
  templateUrl: './lightbox-header-options.component.html',
  styleUrl: './lightbox-header-options.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightboxHeaderOptionsComponent {
  protected readonly icons = inject(IconService);

  private readonly _totalImageCount = signal<number>(0);
  get totalImageCount(): Signal<number> { return this._totalImageCount; }
  @Input() set totalImageCount(v: number) { this._totalImageCount.set(v); }

  private readonly _currentIndex = signal<number>(0);
  get currentIndex(): Signal<number> { return this._currentIndex; }
  @Input() set currentIndex(v: number) { this._currentIndex.set(v); }

  private readonly _currentImage = signal<NgxGalleryImage | undefined>(undefined);
  get currentImage(): Signal<NgxGalleryImage | undefined> { return this._currentImage; }
  @Input() set currentImage(v: NgxGalleryImage | undefined) { this._currentImage.set(v); }

  private readonly _options = signal<NgxGalleryOptions | undefined>(undefined);
  get options(): Signal<NgxGalleryOptions | undefined> { return this._options; }
  @Input() set options(v: NgxGalleryOptions | undefined) { this._options.set(v); }

  @Output() readonly close = new EventEmitter<void>();
  @Output() readonly share = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
  onShare(): void {
    this.share.emit();
  }
  onCustomAction(event: Event, index: number): void {
    this.options()?.customActions?.forEach(action => action.onClick(event, index));
  }
}

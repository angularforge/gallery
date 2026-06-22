import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Signal, signal } from '@angular/core';

@Component({
    selector: 'counter',
    imports: [NgClass],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  private readonly _currentIndex = signal<number>(1);
  get currentIndex(): Signal<number> { return this._currentIndex; }
  @Input() set currentIndex(v: number) { this._currentIndex.set(v + 1); }

  private readonly _isLightbox = signal<boolean>(false);
  get isLightbox(): Signal<boolean> { return this._isLightbox; }
  @Input({ required: true }) set isLightbox(v: boolean) { this._isLightbox.set(v); }

  private readonly _totalImageCount = signal<number>(0);
  get totalImageCount(): Signal<number> { return this._totalImageCount; }
  @Input() set totalImageCount(v: number) { this._totalImageCount.set(v); }
}

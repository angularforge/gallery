import { ChangeDetectionStrategy, Component, computed, EventEmitter, Input, Output, Signal, signal } from '@angular/core';

@Component({
  selector: 'af-gallery-bullets',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="af-bullets" role="tablist" [attr.aria-label]="'Image navigation'">
      @for (item of items(); track $index) {
        <button
          type="button"
          role="tab"
          class="af-bullet"
          [class.af-bullet--active]="$index === currentIndex()"
          [attr.aria-selected]="$index === currentIndex()"
          [attr.aria-label]="'Image ' + ($index + 1) + ' of ' + totalImageCount()"
          (click)="onSelect($index)"
        ></button>
      }
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
    .af-bullets {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
      align-items: center;
      max-width: 100%;
      padding: 12px 16px;
      box-sizing: border-box;
    }
    .af-bullet {
      flex: 0 0 auto;
      box-sizing: border-box;
      width: 8px;
      height: 8px;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 9999px;
      background-color: rgba(255, 255, 255, 0.4);
      cursor: pointer;
      transition: width 0.3s ease, background-color 0.3s ease;
      -webkit-appearance: none;
      appearance: none;
    }
    .af-bullet:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 2px;
    }
    .af-bullet--active {
      width: 16px;
      background-color: #fff;
    }
  `],
})
export class BulletsComponent {
  private readonly _totalImageCount = signal<number>(0);
  get totalImageCount(): Signal<number> { return this._totalImageCount; }
  @Input() set totalImageCount(v: number) { this._totalImageCount.set(v); }

  private readonly _currentIndex = signal<number>(0);
  get currentIndex(): Signal<number> { return this._currentIndex; }
  @Input() set currentIndex(v: number) { this._currentIndex.set(v); }

  @Output() readonly select = new EventEmitter<number>();

  readonly items = computed(() => Array(this.totalImageCount()).fill(null));

  onSelect(index: number): void {
    this.select.emit(index);
  }
}

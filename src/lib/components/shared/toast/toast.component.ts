import { ChangeDetectionStrategy, Component, effect, EventEmitter, inject, Input, Injector, Output, Signal, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '../../../pipes';
import { IconService } from '../../../services';

@Component({
    selector: 'toast',
    imports: [TranslatePipe, NgIcon],
    templateUrl: './toast.component.html',
    styleUrl: './toast.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  protected readonly icons = inject(IconService);

  private readonly _message = signal<string>('copiedToast');
  get message(): Signal<string> { return this._message; }
  @Input() set message(v: string) { this._message.set(v); }

  private readonly _duration = signal<number>(5000);
  get duration(): Signal<number> { return this._duration; }
  @Input() set duration(v: number) { this._duration.set(v); }

  private readonly _isOpen = signal<boolean>(false);
  get isOpen(): Signal<boolean> { return this._isOpen; }
  @Input() set isOpen(v: boolean) { this._isOpen.set(v); }

  @Output() readonly close = new EventEmitter<void>();

  readonly visible = signal<boolean>(false);

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        this.visible.set(true);
        setTimeout(() => {
          this.visible.set(false);
          this.onClose();
        }, this.duration());
      }
    }, { injector: inject(Injector) });
  }

  onClose() {
    this.close.emit();
  }
}

import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, Signal, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

import { IconService } from '../../../services';

@Component({
    selector: 'controls',
    imports: [NgIcon],
    templateUrl: './controls.component.html',
    styleUrl: './controls.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent {
  protected readonly icons = inject(IconService);

  private readonly _isFirstElement = signal<boolean>(false);
  get isFirstElement(): Signal<boolean> { return this._isFirstElement; }
  @Input() set isFirstElement(v: boolean) { this._isFirstElement.set(v); }

  private readonly _isLastElement = signal<boolean>(false);
  get isLastElement(): Signal<boolean> { return this._isLastElement; }
  @Input() set isLastElement(v: boolean) { this._isLastElement.set(v); }

  @Output() readonly prev = new EventEmitter<void>();
  @Output() readonly next = new EventEmitter<void>();

  onPrev() {
    this.prev.emit();
  }
  onNext() {
    this.next.emit();
  }
}

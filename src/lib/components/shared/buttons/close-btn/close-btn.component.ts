import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, Signal, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

import { IconRole } from '../../../../types';
import { IconService } from '../../../../services';

@Component({
    selector: 'close-btn',
    imports: [NgClass, NgIcon],
    templateUrl: './close-btn.component.html',
    styleUrl: './close-btn.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloseBtnComponent {
  protected readonly icons = inject(IconService);

  private readonly _icon = signal<IconRole>('close');
  get icon(): Signal<IconRole> { return this._icon; }
  @Input() set icon(v: IconRole) { this._icon.set(v); }

  private readonly _isLightbox = signal<boolean>(false);
  get isLightbox(): Signal<boolean> { return this._isLightbox; }
  @Input({ required: true }) set isLightbox(v: boolean) { this._isLightbox.set(v); }

  private readonly _btnLabel = signal<string | undefined>(undefined);
  get btnLabel(): Signal<string | undefined> { return this._btnLabel; }
  @Input() set btnLabel(v: string | undefined) { this._btnLabel.set(v); }

  @Output() readonly click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}

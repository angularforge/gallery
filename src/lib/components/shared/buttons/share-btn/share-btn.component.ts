import { DOCUMENT, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgIcon } from '@ng-icons/core';

import { DeviceService, IconService } from '../../../../services';
import { IconRole } from '../../../../types';

@Component({
  selector: 'share-btn',
  imports: [NgClass, NgIcon],
  templateUrl: './share-btn.component.html',
  styleUrl: './share-btn.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareBtnComponent {
  protected readonly icons = inject(IconService);

  private readonly _icon = signal<IconRole>('share');
  get icon(): Signal<IconRole> { return this._icon; }
  @Input() set icon(v: IconRole) { this._icon.set(v); }

  private readonly _isLightbox = signal<boolean>(false);
  get isLightbox(): Signal<boolean> { return this._isLightbox; }
  @Input({ required: true }) set isLightbox(v: boolean) { this._isLightbox.set(v); }

  private readonly _btnLabel = signal<string | undefined>(undefined);
  get btnLabel(): Signal<string | undefined> { return this._btnLabel; }
  @Input() set btnLabel(v: string | undefined) { this._btnLabel.set(v); }

  @Output() readonly share = new EventEmitter<void>();

  private readonly document = inject(DOCUMENT);
  readonly isMobile = toSignal<boolean>(inject(DeviceService).isMobile$);

  onShareClick(): void {
    if (navigator.share && this.isMobile()) {
      navigator.share({ url: this.document.location.href });
    } else {
      this.share.emit();
    }
  }
}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Signal, signal } from '@angular/core';
import { CloseBtnComponent, ShareBtnComponent } from '../buttons';
import { TranslatePipe } from '../../../pipes';

@Component({
    selector: 'full-gallery-header-options',
    imports: [CloseBtnComponent, ShareBtnComponent, TranslatePipe],
    templateUrl: './full-gallery-header-options.component.html',
    styleUrl: './full-gallery-header-options.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullGalleryHeaderOptionsComponent {
  private readonly _showShareBtn = signal<boolean>(false);
  get showShareBtn(): Signal<boolean> { return this._showShareBtn; }
  @Input() set showShareBtn(v: boolean) { this._showShareBtn.set(v); }

  @Output() readonly close = new EventEmitter<void>();
  @Output() readonly share = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
  onShare() {
    this.share.emit();
  }
}

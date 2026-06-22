import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Signal, signal, TemplateRef } from '@angular/core';

@Component({
    selector: 'overlay',
    imports: [NgTemplateOutlet],
    templateUrl: './overlay.component.html',
    styleUrl: './overlay.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent {
  private readonly _element = signal<TemplateRef<any> | null>(null);
  get element(): Signal<TemplateRef<any> | null> { return this._element; }
  @Input({ required: true }) set element(v: TemplateRef<any> | null) { this._element.set(v); }

  private readonly _isOpen = signal<any>(undefined);
  get isOpen(): Signal<any> { return this._isOpen; }
  @Input({ required: true }) set isOpen(v: any) { this._isOpen.set(v); }

  @Output() readonly clickOutSide = new EventEmitter<void>();

  onOverlayClick(event: MouseEvent): void {
    const overlay = event.currentTarget as HTMLElement;
    const target = event.target as HTMLElement;

    if (overlay === target) {
      this.clickOutSide.emit();
    }
  }
}

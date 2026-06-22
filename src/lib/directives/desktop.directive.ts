import { computed, DestroyRef, Directive, effect, EmbeddedViewRef, inject, Input, Injector, Signal, signal, TemplateRef, ViewContainerRef } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DeviceService } from '../services';

@Directive({
  selector: '[desktop]',
  standalone: true
})
export class DesktopDirective {
  private readonly _desktop = signal<boolean>(false);
  get desktop(): Signal<boolean> { return this._desktop; }
  @Input({ required: true, alias: 'desktop' }) set desktopInput(value: boolean) { this._desktop.set(value); }

  private readonly isDesktop = toSignal(inject(DeviceService).isDesktop$, { initialValue: false });
  private readonly shouldShow = computed(() => this.isDesktop() && this.desktop());

  private readonly vcr = inject(ViewContainerRef);
  private readonly template = inject(TemplateRef);
  private readonly destroyRef = inject(DestroyRef);
  private childView: EmbeddedViewRef<unknown> | null = null;

  constructor() {
    effect(() => {
      if (this.shouldShow() && !this.childView) {
        this.childView = this.vcr.createEmbeddedView(this.template);
      } else if (!this.shouldShow() && this.childView) {
        this.childView.destroy();
        this.childView = null;
        this.vcr.clear();
      }
    }, { injector: inject(Injector) });

    this.destroyRef.onDestroy(() => {
      if (this.childView) {
        this.childView.destroy();
        this.childView = null;
        this.vcr.clear();
      }
    });
  }
}

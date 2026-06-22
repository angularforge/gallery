import { computed, DestroyRef, Directive, effect, EmbeddedViewRef, inject, Input, Injector, Signal, signal, TemplateRef, ViewContainerRef } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DeviceService } from '../services';

@Directive({
  selector: '[mobile]',
  standalone: true
})
export class MobileDirective {
  private readonly _mobile = signal<boolean>(false);
  get mobile(): Signal<boolean> { return this._mobile; }
  @Input({ required: true, alias: 'mobile' }) set mobileInput(value: boolean) { this._mobile.set(value); }

  private readonly isMobile = toSignal(inject(DeviceService).isMobile$, { initialValue: false });
  private readonly shouldShow = computed(() => this.isMobile() && this.mobile());

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

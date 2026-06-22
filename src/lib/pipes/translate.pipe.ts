import { ChangeDetectorRef, effect, inject, Injector, Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  private readonly translationService = inject(TranslationService);
  private readonly cdr = inject(ChangeDetectorRef);

  constructor() {
    // Re-render the host view (even with OnPush) whenever the active language changes.
    effect(() => {
      this.translationService.currentLang();
      this.cdr.markForCheck();
    }, { injector: inject(Injector) });
  }

  transform(value: string): string {
    return this.translationService.translate(value);
  }
}

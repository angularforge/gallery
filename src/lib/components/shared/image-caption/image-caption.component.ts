import { ChangeDetectionStrategy, Component, computed, inject, Input, Signal, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '../../../pipes';
import { TranslationService, IconService } from '../../../services';

@Component({
  selector: 'image-caption',
  imports: [TranslatePipe, NgIcon],
  templateUrl: './image-caption.component.html',
  styleUrl: './image-caption.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCaptionComponent {
  protected readonly icons = inject(IconService);

  private readonly _caption = signal<string | undefined>(undefined);
  get caption(): Signal<string | undefined> { return this._caption; }
  @Input() set caption(v: string | undefined) { this._caption.set(v); }

  readonly isTranslated = signal<boolean>(true);

  private readonly translationService = inject(TranslationService);

  readonly lang = this.translationService.currentLang;

  readonly language = computed(() =>
    this.lang() === 'es' ? 'English' : 'Spanish',
  );

  translate(): void {
    this.isTranslated.set(!this.isTranslated());
  }
}

import { ChangeDetectionStrategy, Component, computed, DOCUMENT, EventEmitter, HostListener, inject, Input, Output, Signal, signal } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { NgIcon } from '@ng-icons/core';

import { ToastComponent } from '../toast/toast.component';
import { DialogShareOptions, NgxGalleryImage } from '../../../interface';
import { SLIDE_ANIMATION } from '../../../constants';
import { CloseBtnComponent } from '../buttons';
import { TranslatePipe } from '../../../pipes';
import { TranslationService, IconService } from '../../../services';

@Component({
  selector: 'dialog-share',
  imports: [
    NgOptimizedImage,
    CloseBtnComponent,
    ToastComponent,
    TranslatePipe,
    NgIcon,
  ],
  animations: [SLIDE_ANIMATION],
  templateUrl: './dialog-share.component.html',
  styleUrl: './dialog-share.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogShareComponent {
  private readonly _options = signal<DialogShareOptions | undefined>(undefined);
  get options(): Signal<DialogShareOptions | undefined> { return this._options; }
  @Input() set options(v: DialogShareOptions | undefined) { this._options.set(v); }

  private readonly _galleryImages = signal<Array<NgxGalleryImage>>([]);
  get galleryImages(): Signal<Array<NgxGalleryImage>> { return this._galleryImages; }
  @Input() set galleryImages(v: Array<NgxGalleryImage> | undefined) { this._galleryImages.set(v ?? []); }

  private readonly _isOpen = signal<boolean>(false);
  get isOpen(): Signal<boolean> { return this._isOpen; }
  @Input({ required: true }) set isOpen(v: boolean) { this._isOpen.set(v); }

  @Output() readonly clickCloseBtn = new EventEmitter<void>();
  @Output() readonly closeOverlay = new EventEmitter<void>();

  readonly showToast = signal<boolean>(false);

  private readonly document = inject(DOCUMENT);
  private readonly translationService = inject(TranslationService);
  protected readonly icons = inject(IconService);

  // Resolved fields: fall back to the page's own metadata / first gallery image
  // when the consumer doesn't provide an explicit value.
  readonly title = computed(() => this.options()?.title?.trim() || this.document.title);
  readonly description = computed(() => this.options()?.description?.trim() || this.pageDescription());
  readonly picture = computed(() => this.options()?.picture?.trim() || this.galleryImages()[0]?.src || '');

  private readonly pageDescription = computed(
    () => this.document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || '',
  );

  readonly href = computed(() => this.document.location.href);
  readonly subject = computed(() => this.translationService.translate('emailSubject'));
  readonly body = computed(() => `${this.translationService.translate('emailBody')} ${this.href()}`);
  readonly emailLink = computed(() => `?subject=${encodeURIComponent(this.subject())}&body=${encodeURIComponent(this.body())}`);

  onCloseShare(event: AnimationEvent): void {
    if (event.toState === 'slideDown') {
      this.closeDialog();
    }
  }

  onClickCloseBtn(): void {
    this.clickCloseBtn.emit();
  }

  closeDialog(): void {
    this.closeOverlay.emit();
  }

  copyToClipboard(): void {
    navigator.clipboard?.writeText(this.href()).then(
      () => this.showToast.set(true),
      () => {},
    );
  }

  setShowToast(value: boolean): void {
    this.showToast.set(value);
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      setTimeout(() => this.onClickCloseBtn(), 100);
    }
  }
}

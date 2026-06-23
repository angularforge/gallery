import { ChangeDetectionStrategy, Component, computed, effect, inject, Input, Output, Signal, signal, EventEmitter } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

import { defaultCustomStyles, defaultDialogShareOptions, defaultGalleryImage, defaultOptions, Distributions, GALLERY_ICONS } from './utils';
import { DialogShareOptions, GalleryImage, GalleryOptions } from './interface';
import { GridTemplate } from './types';
import { GalleryComponent as GalleryGridComponent } from './components';
import { TranslationService, SupportedLang, IconService } from './services';
import { Style } from './schema';
import { ONE_HUNDRED, ZERO } from './constants';


@Component({
  selector: 'ngx-gallery',
  imports: [GalleryGridComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Register the gallery's icons once here so every child `<ng-icon>` can resolve them.
  providers: [provideIcons(GALLERY_ICONS)],
})
export class GalleryComponent {
  readonly startGalleryItems = signal(ZERO);
  readonly maxGalleryItems = signal(ONE_HUNDRED);

  private readonly _galleryImages = signal<GalleryImage[]>(defaultGalleryImage);
  get galleryImages(): Signal<GalleryImage[]> { return this._galleryImages; }
  @Input() set galleryImages(value: GalleryImage[]) {
    this._galleryImages.set(
      value?.length > ZERO
        ? value.slice(this.startGalleryItems(), this.maxGalleryItems())
        : defaultGalleryImage
    );
  }

  private readonly _options = signal<GalleryOptions>(defaultOptions);
  get options(): Signal<GalleryOptions> { return this._options; }
  @Input() set options(value: GalleryOptions) {
    this._options.set(
      value && Object.keys(value).length > ZERO
        ? { ...defaultOptions, ...value, infinityLoop: false }
        : { ...defaultOptions, infinityLoop: false }
    );
  }

  private readonly _dialog = signal<DialogShareOptions>(defaultDialogShareOptions);
  get dialog(): Signal<DialogShareOptions> { return this._dialog; }
  @Input() set dialog(value: DialogShareOptions) {
    this._dialog.set(
      value && Object.keys(value).length > ZERO
        ? { ...defaultDialogShareOptions, ...value }
        : defaultDialogShareOptions
    );
  }

  private readonly _lang = signal<SupportedLang>('en');
  get lang(): Signal<SupportedLang> { return this._lang; }
  @Input() set lang(value: SupportedLang) { this._lang.set(value); }

  @Output() readonly imageChange = new EventEmitter<number>();
  @Output() readonly lightboxOpen = new EventEmitter<number>();
  @Output() readonly lightboxClose = new EventEmitter<void>();
  @Output() readonly lightboxImageChange = new EventEmitter<number>();

  readonly distributions = signal<Array<GridTemplate>>(Distributions);

  readonly customLayout = computed(() => {
    const cl = this.options().customLayout;
    return {
      templateAreas: cl?.templateAreas ?? defaultCustomStyles.templateAreas,
      orientation:   cl?.orientation   ?? defaultCustomStyles.orientation,
      maxItems:      cl?.maxItems      ?? defaultCustomStyles.maxItems,
      columns:       cl?.columns       ?? defaultCustomStyles.columns,
      border:        cl?.border        ?? defaultCustomStyles.border,
      layout:        cl?.layout        ?? defaultCustomStyles.layout,
      height:        cl?.height        ?? defaultCustomStyles.height,
      width:         cl?.width         ?? defaultCustomStyles.width,
      rows:          cl?.rows          ?? defaultCustomStyles.rows,
      gap:           cl?.gap           ?? defaultCustomStyles.gap,
    };
  });

  readonly attributes = computed(() => ({
    column: `repeat(${this.customLayout().columns.quantity},${this.customLayout().columns.value}${this.customLayout().columns.unit})`,
    rows:   `repeat(${this.customLayout().rows.quantity},${this.customLayout().rows.value}${this.customLayout().rows.unit})`,
    border: `${this.customLayout().border.value}${this.customLayout().border.unit}`,
    height: `${this.customLayout().height.value}${this.customLayout().height.unit}`,
    width:  `${this.customLayout().width.value}${this.customLayout().width.unit}`,
    gap:    `${this.customLayout().gap.value}${this.customLayout().gap.unit}`,
    templateAreas: this.customLayout().templateAreas,
    orientation:   this.customLayout().orientation,
    maxItems:      this.customLayout().maxItems,
    layout:        this.customLayout().layout,
  }));

  readonly newStyles = computed(() =>
    this.distributions().map(
      ({ template }) =>
        new Style(
          template.orientation,
          this.attributes().border,
          this.attributes().height,
          this.attributes().width,
          template.templateArea,
          template.distribution,
          this.attributes().gap,
          template.maxItems,
          `repeat(${template.columns},1fr)`,
          `repeat(${template.rows},1fr)`,
        ),
    ),
  );

  readonly newCustomStyle = computed(
    () =>
      new Style(
        this.attributes().orientation,
        this.attributes().border,
        this.attributes().height,
        this.attributes().width,
        this.attributes().templateAreas,
        this.attributes().layout,
        this.attributes().gap,
        this.attributes().maxItems,
        this.attributes().column,
        this.attributes().rows,
      ),
  );

  readonly styles = computed(() => [...this.newStyles(), this.newCustomStyle()]);

  readonly style = computed<Style>(() => {
    const found =
      this.styles().find(
        ({ layout, orientation }) =>
          layout === this.options().layout?.distribution &&
          orientation === this.options().layout?.orientation,
      ) ?? this.newCustomStyle();
    return {
      ...found,
      border: this.options().layoutStyles?.border ?? found.border,
      height: this.options().layoutStyles?.height ?? found.height,
      width:  this.options().layoutStyles?.width  ?? found.width,
      gap:    this.options().layoutStyles?.gap    ?? found.gap,
    };
  });

  readonly fillerCount = computed<number>(
    () => this.style().maxItems - this.galleryImages().slice(0, this.style().maxItems).length,
  );
  readonly totalImageCount = computed<number>(() => this.galleryImages().length);

  private readonly translationService: TranslationService;
  private readonly iconService = inject(IconService);

  constructor() {
    this.translationService = inject(TranslationService);

    // Keep the active language in sync with the `lang` input, reactively.
    effect(() => this.translationService.loadTranslations(this.lang()));

    // Keep the active icon family in sync with the `iconFamily` option, reactively.
    effect(() => this.iconService.setFamily(this.options().iconFamily));
  }

  changeLanguage(lang: SupportedLang): void {
    this.translationService.changeLanguage(lang);
  }
}

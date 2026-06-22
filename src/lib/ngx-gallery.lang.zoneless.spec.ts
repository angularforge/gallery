import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGalleryComponent } from './ngx-gallery.component';
import { TranslationService } from './services';

describe('NgxGalleryComponent lang input reactivity (zoneless, consumer scenario)', () => {
  let fixture: ComponentFixture<NgxGalleryComponent>;
  let service: TranslationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxGalleryComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    service = TestBed.inject(TranslationService);

    fixture = TestBed.createComponent(NgxGalleryComponent);
    fixture.componentRef.setInput('lang', 'en');
    await fixture.whenStable();
  });

  it('applies the initial lang input', () => {
    expect(service.currentLang()).toBe('en');
  });

  it('updates the active language when the lang input changes after init', async () => {
    fixture.componentRef.setInput('lang', 'es');
    await fixture.whenStable();

    expect(service.currentLang()).toBe('es');
  });
});

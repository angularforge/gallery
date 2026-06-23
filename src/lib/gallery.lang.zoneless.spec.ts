import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { TranslationService } from './services';

describe('GalleryComponent lang input reactivity (zoneless, consumer scenario)', () => {
  let fixture: ComponentFixture<GalleryComponent>;
  let service: TranslationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    service = TestBed.inject(TranslationService);

    fixture = TestBed.createComponent(GalleryComponent);
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

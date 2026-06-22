import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGalleryComponent } from './ngx-gallery.component';
import { IconService } from './services';

describe('NgxGalleryComponent iconFamily option (zoneless)', () => {
  let fixture: ComponentFixture<NgxGalleryComponent>;
  let icons: IconService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxGalleryComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    icons = TestBed.inject(IconService);

    fixture = TestBed.createComponent(NgxGalleryComponent);
    fixture.componentRef.setInput('options', { iconFamily: 'heroicons' });
    await fixture.whenStable();
  });

  it('applies the icon family from the options input', () => {
    expect(icons.family()).toBe('heroicons');
  });

  it('updates the active icon family reactively when the option changes', async () => {
    fixture.componentRef.setInput('options', { iconFamily: 'bootstrap' });
    await fixture.whenStable();

    expect(icons.family()).toBe('bootstrap');
    expect(icons.resolve('close')).toBe('bootstrapX');
  });
});

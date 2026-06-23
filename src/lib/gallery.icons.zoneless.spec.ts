import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { IconService } from './services';

describe('GalleryComponent iconFamily option (zoneless)', () => {
  let fixture: ComponentFixture<GalleryComponent>;
  let icons: IconService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    icons = TestBed.inject(IconService);

    fixture = TestBed.createComponent(GalleryComponent);
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

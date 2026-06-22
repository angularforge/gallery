import { ChangeDetectionStrategy, Component, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePipe } from './translate.pipe';
import { TranslationService } from '../services';

@Component({
  selector: 'host-translate-zoneless',
  standalone: true,
  imports: [TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span>{{ 'share' | translate }}</span>`,
})
class HostComponent {}

describe('TranslatePipe reactivity (OnPush + zoneless)', () => {
  let fixture: ComponentFixture<HostComponent>;
  let service: TranslationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    service = TestBed.inject(TranslationService);
    service.loadTranslations('en');

    fixture = TestBed.createComponent(HostComponent);
    await fixture.whenStable();
  });

  it('renders the initial language', () => {
    expect(fixture.nativeElement.textContent.trim()).toBe('Share');
  });

  it('updates the view reactively when language changes (zoneless, no manual detectChanges)', async () => {
    service.changeLanguage('es');
    await fixture.whenStable();

    expect(fixture.nativeElement.textContent.trim()).toBe('Compartir');
  });
});

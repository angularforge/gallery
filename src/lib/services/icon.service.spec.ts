import { TestBed } from '@angular/core/testing';

import { IconService } from './icon.service';
import { ICON_NAME_MAP } from '../utils/icons.utils';

describe('IconService', () => {
  let service: IconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconService);
  });

  it('defaults to the heroicons family', () => {
    expect(service.family()).toBe('heroicons');
    expect(service.resolve('close')).toBe('heroXMark');
    expect(service.resolve('share')).toBe('heroArrowUpTray');
  });

  it('resolves a role to the matching icon name for each family', () => {
    service.setFamily('lucide');
    expect(service.resolve('close')).toBe('lucideX');
    expect(service.resolve('grid')).toBe('lucideLayoutGrid');

    service.setFamily('bootstrap');
    expect(service.resolve('close')).toBe('bootstrapX');
    expect(service.resolve('translate')).toBe('bootstrapTranslate');
  });

  it('swaps brand icons with the family (bootstrap uses its own, others fall back)', () => {
    service.setFamily('heroicons');
    expect(service.resolve('facebook')).toBe('galleryFacebook');
    expect(service.resolve('linkedin')).toBe('galleryLinkedin');

    service.setFamily('lucide');
    expect(service.resolve('facebook')).toBe('galleryFacebook');

    service.setFamily('bootstrap');
    expect(service.resolve('facebook')).toBe('bootstrapFacebook');
    expect(service.resolve('twitter')).toBe('bootstrapTwitterX');
  });

  it('ignores undefined / unknown families and keeps the current one', () => {
    service.setFamily('lucide');
    service.setFamily(undefined);
    expect(service.family()).toBe('lucide');

    service.setFamily('does-not-exist' as never);
    expect(service.family()).toBe('lucide');
  });

  it('every family covers every role with a non-empty icon name', () => {
    const roles = Object.keys(ICON_NAME_MAP.heroicons);
    for (const family of Object.keys(ICON_NAME_MAP) as Array<keyof typeof ICON_NAME_MAP>) {
      for (const role of roles) {
        expect(ICON_NAME_MAP[family][role as never]).toBeTruthy();
      }
    }
  });
});

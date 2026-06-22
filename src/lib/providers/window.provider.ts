import { FactoryProvider, InjectionToken, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const WINDOW = new InjectionToken<Window | null>('window');

const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: (platformId: object) =>
    isPlatformBrowser(platformId) ? window : null,
  deps: [PLATFORM_ID],
};

export const WINDOW_PROVIDERS = [windowProvider];

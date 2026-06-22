import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, OnDestroy, PLATFORM_ID, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

const MOBILE_BREAKPOINT = 768;

@Injectable({ providedIn: 'root' })
export class DeviceService implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly destroy$ = new Subject<void>();

  private readonly _isMobile = signal(this.checkIsMobile());

  readonly isMobile$: Observable<boolean> = new Observable<boolean>(observer => {
    observer.next(this._isMobile());

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const onResize = () => {
      const value = this.checkIsMobile();
      this._isMobile.set(value);
      observer.next(value);
    };

    this.document.defaultView?.addEventListener('resize', onResize);
    return () => this.document.defaultView?.removeEventListener('resize', onResize);
  });

  readonly isDesktop$: Observable<boolean> = new Observable<boolean>(observer => {
    const sub = this.isMobile$.subscribe(isMobile => observer.next(!isMobile));
    return () => sub.unsubscribe();
  });

  private checkIsMobile(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    return (this.document.defaultView?.innerWidth ?? 0) <= MOBILE_BREAKPOINT;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

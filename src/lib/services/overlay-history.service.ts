import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, OnDestroy, PLATFORM_ID } from '@angular/core';

interface OverlayEntry {
  readonly id: number;
  readonly close: () => void;
}

/**
 * Keeps the stack of open gallery overlays (lightbox, full gallery, share dialog)
 * in sync with the browser history so the back button dismisses them one by one
 * instead of leaving the page.
 *
 * Every opened overlay pushes a history entry. Pressing the back button pops the
 * topmost overlay; closing an overlay from the UI unwinds the matching history
 * entry so both paths stay consistent.
 */
@Injectable()
export class OverlayHistoryService implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly window = inject(DOCUMENT).defaultView;

  private readonly stack: Array<OverlayEntry> = [];
  private readonly onPopState = (): void => this.handlePopState();

  private nextId = 0;
  private listening = false;
  private suppressNextPop = false;

  /**
   * Registers a newly opened overlay and pushes a history entry so the back
   * button targets the overlay. Returns an id used later to dismiss it.
   */
  open(close: () => void): number {
    if (!this.isBrowser()) return -1;
    const id = ++this.nextId;
    this.stack.push({ id, close });
    this.window!.history.pushState({ ngxGalleryOverlay: id }, '');
    this.startListening();
    return id;
  }

  /**
   * Dismisses an overlay closed through the UI, unwinding its history entry (and
   * any above it) without invoking the close callbacks twice.
   */
  dismiss(id: number): void {
    if (!this.isBrowser()) return;
    const index = this.stack.findIndex(entry => entry.id === id);
    if (index === -1) return;

    const removed = this.stack.splice(index);
    this.suppressNextPop = true;
    this.window!.history.go(-removed.length);

    for (let i = removed.length - 1; i >= 0; i--) {
      removed[i].close();
    }
  }

  ngOnDestroy(): void {
    if (this.window && this.listening) {
      this.window.removeEventListener('popstate', this.onPopState);
      this.listening = false;
    }
  }

  private handlePopState(): void {
    if (this.suppressNextPop) {
      this.suppressNextPop = false;
      return;
    }
    this.stack.pop()?.close();
  }

  private startListening(): void {
    if (!this.window || this.listening) return;
    this.window.addEventListener('popstate', this.onPopState);
    this.listening = true;
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId) && !!this.window;
  }
}

import { DOCUMENT } from '@angular/common';
import { inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  #document = inject(DOCUMENT);

  // Reference count so nested overlays (e.g. lightbox opened from the full gallery)
  // keep the scroll locked until the last one releases it.
  #lockCount = 0;

  lockScroll(): void {
    if (this.#lockCount === 0) {
      this.#document.body.style.overflow = 'hidden';
    }
    this.#lockCount++;
  }

  unlockScroll(): void {
    if (this.#lockCount === 0) return;
    this.#lockCount--;
    if (this.#lockCount === 0) {
      this.#document.body.style.overflow = 'auto';
    }
  }
}

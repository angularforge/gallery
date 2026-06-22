import { Injectable, signal } from '@angular/core';

import { IconFamily, IconRole } from '../types';
import { ICON_NAME_MAP } from '../utils/icons.utils';

const DEFAULT_FAMILY: IconFamily = 'heroicons';

@Injectable({ providedIn: 'root' })
export class IconService {
  readonly family = signal<IconFamily>(DEFAULT_FAMILY);

  setFamily(family: IconFamily | undefined): void {
    if (family && family in ICON_NAME_MAP) {
      this.family.set(family);
    }
  }

  /** Resolve a semantic role to the registered ng-icon name for the active family. */
  resolve(role: IconRole): string {
    return ICON_NAME_MAP[this.family()][role];
  }
}

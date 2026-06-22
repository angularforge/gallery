import {
  heroXMark, heroChevronLeft, heroChevronRight, heroArrowUpTray, heroSquaresPlus,
  heroDocumentDuplicate, heroEnvelope, heroArrowDownTray, heroCheck, heroLanguage,
} from '@ng-icons/heroicons/outline';
import {
  lucideX, lucideChevronLeft, lucideChevronRight, lucideShare2, lucideLayoutGrid,
  lucideCopy, lucideMail, lucideDownload, lucideCheck, lucideLanguages,
} from '@ng-icons/lucide';
import {
  bootstrapX, bootstrapChevronLeft, bootstrapChevronRight, bootstrapShare, bootstrapGrid,
  bootstrapCopy, bootstrapEnvelope, bootstrapDownload, bootstrapCheck, bootstrapTranslate,
  bootstrapFacebook, bootstrapTwitterX, bootstrapWhatsapp, bootstrapTelegram, bootstrapLinkedin, bootstrapInstagram,
} from '@ng-icons/bootstrap-icons';

import {
  galleryFacebook, galleryTwitter, galleryWhatsapp, galleryTelegram, galleryLinkedin, galleryInstagram,
} from './brand-icons.utils';
import { IconFamily, IconRole } from '../types';

/**
 * Every icon the gallery uses, from the three supported families. Only these
 * specific icons are imported (not the whole packs), so the bundle stays small.
 * Pass this to `provideIcons()` so `<ng-icon [name]="...">` can resolve them.
 */
export const GALLERY_ICONS = {
  heroXMark, heroChevronLeft, heroChevronRight, heroArrowUpTray, heroSquaresPlus,
  heroDocumentDuplicate, heroEnvelope, heroArrowDownTray, heroCheck, heroLanguage,
  lucideX, lucideChevronLeft, lucideChevronRight, lucideShare2, lucideLayoutGrid,
  lucideCopy, lucideMail, lucideDownload, lucideCheck, lucideLanguages,
  bootstrapX, bootstrapChevronLeft, bootstrapChevronRight, bootstrapShare, bootstrapGrid,
  bootstrapCopy, bootstrapEnvelope, bootstrapDownload, bootstrapCheck, bootstrapTranslate,
  // Brand icons: Bootstrap's own + the dedicated logos used by heroicons/lucide.
  bootstrapFacebook, bootstrapTwitterX, bootstrapWhatsapp, bootstrapTelegram, bootstrapLinkedin, bootstrapInstagram,
  galleryFacebook, galleryTwitter, galleryWhatsapp, galleryTelegram, galleryLinkedin, galleryInstagram,
};

/** Maps a semantic UI role to the registered icon name for each family. */
export const ICON_NAME_MAP: Record<IconFamily, Record<IconRole, string>> = {
  heroicons: {
    close: 'heroXMark', prev: 'heroChevronLeft', next: 'heroChevronRight', share: 'heroArrowUpTray',
    grid: 'heroSquaresPlus', copy: 'heroDocumentDuplicate', email: 'heroEnvelope',
    download: 'heroArrowDownTray', check: 'heroCheck', translate: 'heroLanguage',
    // heroicons has no brand logos → use the dedicated brand SVGs.
    facebook: 'galleryFacebook', twitter: 'galleryTwitter', whatsapp: 'galleryWhatsapp',
    telegram: 'galleryTelegram', linkedin: 'galleryLinkedin', instagram: 'galleryInstagram',
  },
  lucide: {
    close: 'lucideX', prev: 'lucideChevronLeft', next: 'lucideChevronRight', share: 'lucideShare2',
    grid: 'lucideLayoutGrid', copy: 'lucideCopy', email: 'lucideMail',
    download: 'lucideDownload', check: 'lucideCheck', translate: 'lucideLanguages',
    // lucide has no brand logos → use the dedicated brand SVGs.
    facebook: 'galleryFacebook', twitter: 'galleryTwitter', whatsapp: 'galleryWhatsapp',
    telegram: 'galleryTelegram', linkedin: 'galleryLinkedin', instagram: 'galleryInstagram',
  },
  bootstrap: {
    close: 'bootstrapX', prev: 'bootstrapChevronLeft', next: 'bootstrapChevronRight', share: 'bootstrapShare',
    grid: 'bootstrapGrid', copy: 'bootstrapCopy', email: 'bootstrapEnvelope',
    download: 'bootstrapDownload', check: 'bootstrapCheck', translate: 'bootstrapTranslate',
    // bootstrap-icons ships its own brand logos.
    facebook: 'bootstrapFacebook', twitter: 'bootstrapTwitterX', whatsapp: 'bootstrapWhatsapp',
    telegram: 'bootstrapTelegram', linkedin: 'bootstrapLinkedin', instagram: 'bootstrapInstagram',
  },
};

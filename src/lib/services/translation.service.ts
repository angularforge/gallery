import { Injectable, signal } from '@angular/core';

export type SupportedLang = 'en' | 'es';

const TRANSLATIONS: Record<SupportedLang, Record<string, string>> = {
  en: {
    share: 'Share',
    close: 'Close',
    copy: 'Copy Link',
    email: 'Email',
    translateTo: 'Translate to',
    translateOriginal: 'Show original',
    title: 'Share this page',
    subtitle: 'Share this image',
    description: 'Description',
    autoTranslate: 'It was translated automatically.',
    copiedToast: 'Link copied',
    download: 'Download image',
    showAllPictures: 'Show all pictures',
    emailSubject: 'Interesting link',
    emailBody: 'Hello, I want to share this link with you:',
  },
  es: {
    share: 'Compartir',
    close: 'Cerrar',
    copy: 'Copiar enlace',
    email: 'Correo',
    translateTo: 'Traducir a',
    translateOriginal: 'Mostrar original',
    title: 'Compartir esta página',
    subtitle: 'Comparte esta imagen',
    description: 'Descripción',
    autoTranslate: 'Se tradujo automáticamente.',
    copiedToast: 'Enlace copiado',
    download: 'Descargar imagen',
    showAllPictures: 'Ver todas las fotos',
    emailSubject: 'Enlace interesante',
    emailBody: 'Hola, quiero compartir contigo este enlace:',
  },
};

const DEFAULT_LANG: SupportedLang = 'en';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly currentLang = signal<SupportedLang>(DEFAULT_LANG);

  loadTranslations(lang: string): void {
    this.currentLang.set(this.normalizeLang(lang));
  }

  translate(key: string): string {
    const lang = this.currentLang();
    return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS[DEFAULT_LANG]?.[key] ?? key;
  }

  changeLanguage(lang: string): void {
    this.loadTranslations(lang);
  }

  private normalizeLang(lang: string): SupportedLang {
    return lang in TRANSLATIONS ? (lang as SupportedLang) : DEFAULT_LANG;
  }
}

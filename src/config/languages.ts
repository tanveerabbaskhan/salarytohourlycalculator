/**
 * Language Configuration
 * Multilingual support for the calculator and SEO alternates.
 */

export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  hreflangCode: string;
  direction: 'ltr' | 'rtl';
  locale: string;
}

export const LANGUAGES: Record<string, LanguageConfig> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    hreflangCode: 'en-US',
    direction: 'ltr',
    locale: 'en-US',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    hreflangCode: 'es-ES',
    direction: 'ltr',
    locale: 'es-ES',
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    hreflangCode: 'pt-PT',
    direction: 'ltr',
    locale: 'pt-PT',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    hreflangCode: 'fr-FR',
    direction: 'ltr',
    locale: 'fr-FR',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    hreflangCode: 'de-DE',
    direction: 'ltr',
    locale: 'de-DE',
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    hreflangCode: 'ja-JP',
    direction: 'ltr',
    locale: 'ja-JP',
  },
  zh: {
    code: 'zh',
    name: 'Chinese Simplified',
    nativeName: '简体中文',
    hreflangCode: 'zh-CN',
    direction: 'ltr',
    locale: 'zh-CN',
  },
  id: {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    hreflangCode: 'id-ID',
    direction: 'ltr',
    locale: 'id-ID',
  },
  tr: {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    hreflangCode: 'tr-TR',
    direction: 'ltr',
    locale: 'tr-TR',
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    hreflangCode: 'ru-RU',
    direction: 'ltr',
    locale: 'ru-RU',
  },
  it: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    hreflangCode: 'it-IT',
    direction: 'ltr',
    locale: 'it-IT',
  },
  nl: {
    code: 'nl',
    name: 'Dutch',
    nativeName: 'Nederlands',
    hreflangCode: 'nl-NL',
    direction: 'ltr',
    locale: 'nl-NL',
  },
  pl: {
    code: 'pl',
    name: 'Polish',
    nativeName: 'Polski',
    hreflangCode: 'pl-PL',
    direction: 'ltr',
    locale: 'pl-PL',
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    hreflangCode: 'ko-KR',
    direction: 'ltr',
    locale: 'ko-KR',
  },
};

export const DEFAULT_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = Object.keys(LANGUAGES);
export const ALL_HREFLANG_CODES = Object.values(LANGUAGES).map(language => language.hreflangCode);

export function getLanguageConfig(code: string): LanguageConfig {
  return LANGUAGES[code] || LANGUAGES[DEFAULT_LANGUAGE];
}

export function isSupportedLanguage(code: string): boolean {
  return code in LANGUAGES;
}

import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

export type LanguageCode = 'en' | 'pt' | 'fr';

type TranslationValue = string | TranslationMap;
type TranslationMap = {
  [key: string]: TranslationValue;
};

const STORAGE_KEY = 'portfolio-language';

const DEFAULT_TRANSLATIONS: TranslationMap = {
  nav: {
    about: 'About',
    work: 'Work',
    projects: 'Projects',
    skills: 'Skills',
    community: 'Community',
    contact: 'Contact',
    resume: 'Resume',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    selectLanguage: 'Select language. Current language: {{language}}'
  }
};

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: TranslationMap = DEFAULT_TRANSLATIONS;
  private readonly languageSubject = new BehaviorSubject<LanguageCode>(this.getInitialLanguage());

  readonly language$ = this.languageSubject.asObservable();

  constructor(
    private readonly http: HttpClient,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.applyDocumentLanguage(this.currentLanguage);
  }

  init(): Promise<void> {
    return this.loadLanguage(this.currentLanguage);
  }

  get currentLanguage(): LanguageCode {
    return this.languageSubject.value;
  }

  setLanguage(language: LanguageCode): void {
    if (language === this.currentLanguage) {
      return;
    }

    void this.loadLanguage(language);
  }

  translate(key: string, params: Record<string, string> = {}): string {
    const value = key.split('.').reduce<TranslationValue | undefined>((current, part) => {
      if (!current || typeof current === 'string') {
        return undefined;
      }

      return current[part];
    }, this.translations);

    if (typeof value !== 'string') {
      return key;
    }

    return Object.entries(params).reduce(
      (text, [paramKey, paramValue]) => text.replace(new RegExp(`{{\\s*${paramKey}\\s*}}`, 'g'), paramValue),
      value
    );
  }

  private loadLanguage(language: LanguageCode): Promise<void> {
    const englishTranslations = firstValueFrom(this.http.get<TranslationMap>('assets/i18n/en.json'));
    const selectedTranslations = language === 'en'
      ? englishTranslations
      : firstValueFrom(this.http.get<TranslationMap>(`assets/i18n/${language}.json`));

    return Promise.all([englishTranslations, selectedTranslations])
      .then(([english, selected]) => {
        this.translations = this.mergeTranslations(english, selected);
        this.languageSubject.next(language);
        this.persistLanguage(language);
        this.applyDocumentLanguage(language);
      })
      .catch(() => {
        this.translations = DEFAULT_TRANSLATIONS;
        this.languageSubject.next('en');
        this.persistLanguage('en');
        this.applyDocumentLanguage('en');
      });
  }

  private mergeTranslations(base: TranslationMap, overrides: TranslationMap): TranslationMap {
    const merged: TranslationMap = { ...base };

    Object.entries(overrides).forEach(([key, value]) => {
      const baseValue = merged[key];
      merged[key] = typeof baseValue === 'object' && typeof value === 'object'
        ? this.mergeTranslations(baseValue, value)
        : value;
    });

    return merged;
  }

  private getInitialLanguage(): LanguageCode {
    if (typeof window === 'undefined') {
      return 'en';
    }

    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return this.isSupportedLanguage(savedLanguage) ? savedLanguage : 'en';
  }

  private isSupportedLanguage(language: string | null): language is LanguageCode {
    return language === 'en' || language === 'pt' || language === 'fr';
  }

  private persistLanguage(language: LanguageCode): void {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
  }

  private applyDocumentLanguage(language: LanguageCode): void {
    this.document.documentElement.lang = language;
  }
}

import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import englishTranslations from '../../assets/i18n/en.json';

export type LanguageCode = 'en' | 'pt' | 'fr';

type TranslationValue = string | TranslationMap;
type TranslationMap = {
  [key: string]: TranslationValue;
};

const STORAGE_KEY = 'portfolio-language';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: TranslationMap = englishTranslations;
  private readonly languageSubject = new BehaviorSubject<LanguageCode>('en');
  private requestedLanguage = this.getInitialLanguage();
  private languageRequestId = 0;

  readonly language$ = this.languageSubject.asObservable();

  constructor(
    private readonly http: HttpClient,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.applyDocumentLanguage(this.currentLanguage);
  }

  init(): Promise<void> {
    return this.loadLanguage(this.requestedLanguage);
  }

  get currentLanguage(): LanguageCode {
    return this.languageSubject.value;
  }

  setLanguage(language: LanguageCode): void {
    if (language === this.requestedLanguage) {
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

  private async loadLanguage(language: LanguageCode): Promise<void> {
    const requestId = ++this.languageRequestId;
    this.requestedLanguage = language;

    try {
      // English is bundled so readable content never depends on a locale request.
      const selected = language === 'en' ? englishTranslations
        : await firstValueFrom(this.http.get<TranslationMap>(`assets/i18n/${language}.json`));
      if (requestId !== this.languageRequestId) {
        return;
      }

      this.translations = this.mergeTranslations(englishTranslations, selected);
      this.applyDocumentLanguage(language);
      this.persistLanguage(language);
      this.languageSubject.next(language);
    } catch {
      if (requestId !== this.languageRequestId) {
        return;
      }

      // Keep the last usable dictionary and allow retrying the failed choice.
      this.requestedLanguage = this.currentLanguage;
      this.persistLanguage(this.currentLanguage);
    }
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

    try {
      const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
      return this.isSupportedLanguage(savedLanguage) ? savedLanguage : 'en';
    } catch {
      return 'en';
    }
  }

  private isSupportedLanguage(language: string | null): language is LanguageCode {
    return language === 'en' || language === 'pt' || language === 'fr';
  }

  private persistLanguage(language: LanguageCode): void {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, language);
      } catch {
        // Storage is optional; the active preference still works in memory.
      }
    }
  }

  private applyDocumentLanguage(language: LanguageCode): void {
    this.document.documentElement.lang = language;
  }
}

import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
    this.loadLanguage(this.currentLanguage);
  }

  get currentLanguage(): LanguageCode {
    return this.languageSubject.value;
  }

  setLanguage(language: LanguageCode): void {
    if (language === this.currentLanguage) {
      return;
    }

    this.loadLanguage(language);
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

  private loadLanguage(language: LanguageCode): void {
    this.http.get<TranslationMap>(`assets/i18n/${language}.json`).subscribe({
      next: (translations) => {
        this.translations = translations;
        this.languageSubject.next(language);
        this.persistLanguage(language);
        this.applyDocumentLanguage(language);
      },
      error: () => {
        this.translations = DEFAULT_TRANSLATIONS;
        this.languageSubject.next('en');
        this.persistLanguage('en');
        this.applyDocumentLanguage('en');
      }
    });
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

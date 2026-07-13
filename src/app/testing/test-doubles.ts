import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { LanguageCode } from '../services/translation.service';

export const TEST_IMAGE_DATA_URL = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';

@Pipe({
  name: 'translate'
})
export class MockTranslatePipe implements PipeTransform {
  transform(key: string): string {
    return key;
  }
}

export class TranslationServiceStub {
  private readonly languageSubject = new BehaviorSubject<LanguageCode>('en');

  readonly language$ = this.languageSubject.asObservable();

  get currentLanguage(): LanguageCode {
    return this.languageSubject.value;
  }

  setLanguage(language: LanguageCode): void {
    this.languageSubject.next(language);
  }
}

export const activatedRouteStub = {
  snapshot: {
    routeConfig: {
      path: ''
    }
  },
  fragment: of(null)
};

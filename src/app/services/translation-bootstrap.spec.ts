import { DOCUMENT } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApplicationInitStatus } from '@angular/core';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import english from '../../assets/i18n/en.json';
import portuguese from '../../assets/i18n/pt.json';
import french from '../../assets/i18n/fr.json';

describe('Translation bootstrap', () => {
  let http: HttpTestingController;
  let document: Document;
  let originalTitle: string;

  afterEach(() => {
    http.verify();
    document.documentElement.lang = 'en';
    document.title = originalTitle;
    document.querySelector('link[rel="canonical"]')?.remove();
    document.getElementById('page-structured-data')?.remove();
  });

  for (const scenario of [
    { language: 'pt', dictionary: portuguese, fails: false, label: 'Português' },
    { language: 'fr', dictionary: french, fails: false, label: 'Français' },
    { language: 'pt', dictionary: portuguese, fails: true, label: 'Português' }
  ]) {
    it(`renders before saved ${scenario.language} settles, then handles ${scenario.fails ? 'failure' : 'success'}`, fakeAsync(() => {
      spyOn(Storage.prototype, 'getItem').and.returnValue(scenario.language);
      const writeStorage = spyOn(Storage.prototype, 'setItem');
      TestBed.configureTestingModule({ imports: [AppModule, HttpClientTestingModule, RouterTestingModule] });
      const initialization = TestBed.inject(ApplicationInitStatus);
      http = TestBed.inject(HttpTestingController);
      document = TestBed.inject(DOCUMENT);
      originalTitle = document.title;
      const request = http.expectOne(`assets/i18n/${scenario.language}.json`);
      flushMicrotasks();

      expect(initialization.done).toBeTrue();
      const fixture = TestBed.createComponent(AppComponent);
      void fixture.ngZone!.run(() => TestBed.inject(Router).navigateByUrl('/'));
      flushMicrotasks();
      fixture.detectChanges();
      const intro = () => fixture.nativeElement.querySelector('main .intro-description')?.textContent.trim();
      const selectedLabel = () => fixture.nativeElement.querySelector('.language-option.active span')?.textContent.trim();
      expect(intro()).toBe(english.home.hero.description);
      expect(selectedLabel()).toBe('English');
      expect(document.documentElement.lang).toBe('en');
      expect(writeStorage).not.toHaveBeenCalled();

      if (scenario.fails) {
        request.flush('Unavailable', { status: 503, statusText: 'Service Unavailable' });
      } else {
        request.flush(scenario.dictionary);
      }
      flushMicrotasks();
      fixture.detectChanges();
      expect(intro()).toBe((scenario.fails ? english : scenario.dictionary).home.hero.description);
      expect(selectedLabel()).toBe(scenario.fails ? 'English' : scenario.label);
      expect(document.documentElement.lang).toBe(scenario.fails ? 'en' : scenario.language);
      fixture.destroy();
    }));
  }
});

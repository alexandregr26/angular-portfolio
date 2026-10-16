import { DOCUMENT } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import english from '../../assets/i18n/en.json';
import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let service: TranslationService;
  let http: HttpTestingController;
  let document: Document;
  let readStorage: jasmine.Spy;
  let writeStorage: jasmine.Spy;

  beforeEach(() => {
    readStorage = spyOn(Storage.prototype, 'getItem').and.returnValue(null);
    writeStorage = spyOn(Storage.prototype, 'setItem');
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    http = TestBed.inject(HttpTestingController);
    document = TestBed.inject(DOCUMENT);
  });

  afterEach(() => {
    http.verify();
    document.documentElement.lang = 'en';
  });

  function createService(): void {
    service = TestBed.inject(TranslationService);
  }

  function expectEnglishDictionary(): void {
    function check(value: object, prefix = ''): void {
      Object.entries(value).forEach(([key, entry]) => {
        const path = prefix ? `${prefix}.${key}` : key;
        if (typeof entry === 'string') {
          expect(service.translate(path)).withContext(path).toBe(entry);
        } else {
          check(entry, path);
        }
      });
    }
    check(english);
    expect(service.currentLanguage).toBe('en');
    expect(document.documentElement.lang).toBe('en');
  }

  it('provides the complete English dictionary before initialization and without network access', fakeAsync(() => {
    createService();
    expectEnglishDictionary();
    let initialized = false;
    void service.init().then(() => initialized = true);
    flushMicrotasks();

    expect(initialized).toBeTrue();
    expectEnglishDictionary();
    http.expectNone('assets/i18n/en.json');
  }));

  it('falls back to complete English when the saved locale fails at bootstrap', fakeAsync(() => {
    readStorage.and.returnValue('pt');
    createService();
    let initialized = false;
    void service.init().then(() => initialized = true);
    http.expectOne('assets/i18n/pt.json').flush('Unavailable', { status: 503, statusText: 'Service Unavailable' });
    flushMicrotasks();

    expect(initialized).toBeTrue();
    expectEnglishDictionary();
    expect(writeStorage).toHaveBeenCalledWith('portfolio-language', 'en');
    http.expectNone('assets/i18n/en.json');

    service.setLanguage('pt');
    http.expectOne('assets/i18n/pt.json').flush({ nav: { about: 'Sobre' } });
    flushMicrotasks();
    expect(service.currentLanguage).toBe('pt');
    expect(service.translate('nav.about')).toBe('Sobre');
  }));

  it('merges missing locale strings with bundled English and interpolates parameters', fakeAsync(() => {
    createService();
    service.setLanguage('pt');
    http.expectOne('assets/i18n/pt.json').flush({ nav: { about: 'Sobre' } });
    flushMicrotasks();

    expect(service.translate('nav.about')).toBe('Sobre');
    expect(service.translate('home.hero.description')).toBe(english.home.hero.description);
    expect(service.translate('nav.selectLanguage', { language: 'Portuguese' }))
      .toBe('Select language. Current language: Portuguese');
    expect(service.translate('unknown.key')).toBe('unknown.key');
    expect(service.currentLanguage).toBe('pt');
    expect(document.documentElement.lang).toBe('pt');

    service.setLanguage('en');
    flushMicrotasks();
    expectEnglishDictionary();
  }));

  it('preserves the last usable dictionary, language and storage when a later locale fails', fakeAsync(() => {
    createService();
    service.setLanguage('pt');
    http.expectOne('assets/i18n/pt.json').flush({ home: { hero: { description: 'Texto em português' } } });
    flushMicrotasks();
    const emitted: string[] = [];
    const subscription = service.language$.subscribe(language => emitted.push(language));

    service.setLanguage('fr');
    expect(service.currentLanguage).toBe('pt');
    http.expectOne('assets/i18n/fr.json').error(new ProgressEvent('error'));
    flushMicrotasks();

    expect(service.translate('home.hero.description')).toBe('Texto em português');
    expect(service.currentLanguage).toBe('pt');
    expect(document.documentElement.lang).toBe('pt');
    expect(writeStorage.calls.mostRecent().args).toEqual(['portfolio-language', 'pt']);
    expect(emitted).toEqual(['pt']);
    subscription.unsubscribe();
  }));

  it('boots in English when reading the saved preference throws', fakeAsync(() => {
    readStorage.and.callFake(() => { throw new DOMException('Blocked', 'SecurityError'); });
    createService();
    void service.init();
    flushMicrotasks();
    expectEnglishDictionary();

    service.setLanguage('pt');
    http.expectOne('assets/i18n/pt.json').flush({ nav: { about: 'Sobre' } });
    flushMicrotasks();
    expect(service.currentLanguage).toBe('pt');
  }));

  it('boots and switches languages when access to localStorage itself throws', fakeAsync(() => {
    spyOnProperty(window, 'localStorage', 'get').and.callFake(() => {
      throw new DOMException('Blocked', 'SecurityError');
    });
    createService();
    void service.init();
    flushMicrotasks();
    expectEnglishDictionary();

    service.setLanguage('pt');
    http.expectOne('assets/i18n/pt.json').flush({ nav: { about: 'Sobre' } });
    flushMicrotasks();
    expect(service.currentLanguage).toBe('pt');
    expect(service.translate('nav.about')).toBe('Sobre');
    expect(document.documentElement.lang).toBe('pt');
  }));

  it('keeps successful changes in memory when writing the preference throws', fakeAsync(() => {
    writeStorage.and.callFake(() => { throw new DOMException('Blocked', 'SecurityError'); });
    createService();
    void service.init();
    flushMicrotasks();
    service.setLanguage('pt');
    http.expectOne('assets/i18n/pt.json').flush({ nav: { about: 'Sobre' } });
    flushMicrotasks();

    expect(service.currentLanguage).toBe('pt');
    expect(service.translate('nav.about')).toBe('Sobre');
    expect(document.documentElement.lang).toBe('pt');
    service.setLanguage('fr');
    http.expectOne('assets/i18n/fr.json').flush('Unavailable', { status: 503, statusText: 'Service Unavailable' });
    flushMicrotasks();
    expect(service.currentLanguage).toBe('pt');
    expect(service.translate('nav.about')).toBe('Sobre');
  }));

  it('ignores a slower previous response after the latest choice succeeds', fakeAsync(() => {
    createService();
    service.setLanguage('fr');
    const french = http.expectOne('assets/i18n/fr.json');
    service.setLanguage('pt');
    http.expectOne('assets/i18n/pt.json').flush({ nav: { about: 'Sobre' } });
    flushMicrotasks();
    french.flush({ nav: { about: 'À propos' } });
    flushMicrotasks();

    expect(service.currentLanguage).toBe('pt');
    expect(service.translate('nav.about')).toBe('Sobre');
    expect(document.documentElement.lang).toBe('pt');
    expect(writeStorage.calls.allArgs()).toEqual([['portfolio-language', 'pt']]);
  }));

  it('ignores a stale failure after the latest choice succeeds', fakeAsync(() => {
    createService();
    service.setLanguage('fr');
    const french = http.expectOne('assets/i18n/fr.json');
    service.setLanguage('pt');
    http.expectOne('assets/i18n/pt.json').flush({ nav: { about: 'Sobre' } });
    flushMicrotasks();
    french.flush('Unavailable', { status: 503, statusText: 'Service Unavailable' });
    flushMicrotasks();

    expect(service.currentLanguage).toBe('pt');
    expect(service.translate('nav.about')).toBe('Sobre');
    expect(writeStorage.calls.allArgs()).toEqual([['portfolio-language', 'pt']]);
  }));

  it('can return to the current English language while a different choice is pending', fakeAsync(() => {
    createService();
    service.setLanguage('fr');
    const french = http.expectOne('assets/i18n/fr.json');
    service.setLanguage('en');
    french.flush({ nav: { about: 'À propos' } });
    flushMicrotasks();

    expectEnglishDictionary();
    expect(writeStorage.calls.allArgs()).toEqual([['portfolio-language', 'en']]);
  }));

  it('does not apply an older success even when the latest choice fails', fakeAsync(() => {
    createService();
    service.setLanguage('fr');
    const french = http.expectOne('assets/i18n/fr.json');
    service.setLanguage('pt');
    http.expectOne('assets/i18n/pt.json').flush('Unavailable', { status: 503, statusText: 'Service Unavailable' });
    flushMicrotasks();
    french.flush({ nav: { about: 'À propos' } });
    flushMicrotasks();

    expectEnglishDictionary();
  }));

  it('does not request the same pending choice twice and ignores unsupported saved values', fakeAsync(() => {
    readStorage.and.returnValue('unsupported');
    createService();
    void service.init();
    flushMicrotasks();
    expectEnglishDictionary();

    service.setLanguage('pt');
    service.setLanguage('pt');
    http.expectOne('assets/i18n/pt.json').flush({ nav: { about: 'Sobre' } });
    flushMicrotasks();
    expect(service.currentLanguage).toBe('pt');
  }));
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { TranslationService } from '../../services/translation.service';
import { MockTranslatePipe, TranslationServiceStub } from '../../testing/test-doubles';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let translationService: TranslationServiceStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent, MockTranslatePipe],
      providers: [
        {
          provide: TranslationService,
          useClass: TranslationServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    translationService = TestBed.inject(TranslationService) as unknown as TranslationServiceStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the selected language', () => {
    const portuguese = component.languages.find(language => language.code === 'pt');

    component.selectLanguage(portuguese!, new MouseEvent('click'));

    expect(translationService.currentLanguage).toBe('pt');
    expect(component.selectedLanguage.code).toBe('pt');
    expect(component.isLanguageMenuOpen).toBeFalse();
  });

  it('keeps the flag on the displayed language until a requested language is applied', () => {
    const applyLanguage = translationService.setLanguage.bind(translationService);
    spyOn(translationService, 'setLanguage');
    const portuguese = component.languages.find(language => language.code === 'pt')!;

    component.selectLanguage(portuguese, new MouseEvent('click'));
    expect(component.selectedLanguage.code).toBe('en');

    applyLanguage('pt');
    expect(component.selectedLanguage.code).toBe('pt');
  });

  function trigger(): HTMLButtonElement {
    return fixture.nativeElement.querySelector('.language-trigger');
  }

  function options(): HTMLButtonElement[] {
    return Array.from(fixture.nativeElement.querySelectorAll('.language-option'));
  }

  function press(element: HTMLElement, key: string): KeyboardEvent {
    const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true });
    element.dispatchEvent(event);
    fixture.detectChanges();
    return event;
  }

  it('opens with focus on the first option and announces the current selection', () => {
    trigger().click();
    fixture.detectChanges();

    expect(document.activeElement).toBe(options()[0]);
    expect(trigger().getAttribute('aria-expanded')).toBe('true');
    expect(options().map(option => option.getAttribute('aria-checked'))).toEqual(['true', 'false', 'false']);
    expect(options().every(option => option.tabIndex === -1)).toBeTrue();
  });

  it('supports arrow wrapping, Home, End, letter navigation, and Escape focus restoration', () => {
    press(trigger(), 'ArrowUp');
    expect(document.activeElement).toBe(options()[2]);
    press(options()[2], 'ArrowDown');
    expect(document.activeElement).toBe(options()[0]);
    press(options()[0], 'ArrowUp');
    expect(document.activeElement).toBe(options()[2]);
    press(options()[2], 'Home');
    expect(document.activeElement).toBe(options()[0]);
    press(options()[0], 'End');
    expect(document.activeElement).toBe(options()[2]);
    press(options()[2], 'p');
    expect(document.activeElement).toBe(options()[1]);
    press(options()[1], 'Escape');
    expect(component.isLanguageMenuOpen).toBeFalse();
    expect(trigger().getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(trigger());
  });

  it('closes on Tab without preventing native focus movement', () => {
    trigger().click();
    const event = press(options()[0], 'Tab');

    expect(event.defaultPrevented).toBeFalse();
    expect(component.isLanguageMenuOpen).toBeFalse();
    expect(document.activeElement).toBe(trigger());
  });

  it('closes on selection, restores focus, and reflects the applied language', () => {
    trigger().click();
    options()[1].click();
    fixture.detectChanges();

    expect(document.activeElement).toBe(trigger());
    expect(component.isLanguageMenuOpen).toBeFalse();
    expect(options().map(option => option.getAttribute('aria-checked'))).toEqual(['false', 'true', 'false']);
  });

  it('closes on focus leaving or an outside click without taking focus back', () => {
    trigger().click();
    const logo = fixture.nativeElement.querySelector('.nav-logo') as HTMLAnchorElement;
    logo.focus();
    fixture.detectChanges();
    expect(component.isLanguageMenuOpen).toBeFalse();
    expect(document.activeElement).toBe(logo);

    trigger().click();
    logo.addEventListener('click', event => event.preventDefault(), { once: true });
    logo.click();
    fixture.detectChanges();
    expect(component.isLanguageMenuOpen).toBeFalse();
  });

  it('closes the mobile navigation after selecting a destination', () => {
    const details = fixture.nativeElement.querySelector('.mobile-nav') as HTMLDetailsElement;
    details.open = true;
    const event = new MouseEvent('click', { bubbles: true, cancelable: true });
    event.preventDefault();
    details.querySelector('.mobile-panel a')!.dispatchEvent(event);
    expect(details.open).toBeFalse();
  });

  it('keeps all list items inside lists', () => {
    const listItems: HTMLElement[] = Array.from(fixture.nativeElement.querySelectorAll('li'));
    expect(listItems.every(item => item.parentElement?.matches('ul,ol,menu'))).toBeTrue();
  });
});

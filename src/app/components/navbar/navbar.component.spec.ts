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
});

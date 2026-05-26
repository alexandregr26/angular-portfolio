import { Component, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageCode, TranslationService } from 'src/app/services/translation.service';

type LanguageOption = {
  code: LanguageCode;
  label: string;
  flag: string;
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  readonly languages: LanguageOption[] = [
    {
      code: 'en',
      label: 'English',
      flag: 'assets/img/skills/languages/flags/canada.jpg'
    },
    {
      code: 'pt',
      label: 'Portuguese',
      flag: 'assets/img/skills/languages/flags/brazil.png'
    },
    {
      code: 'fr',
      label: 'French',
      flag: 'assets/img/skills/languages/flags/france.png'
    }
  ];

  selectedLanguage = this.languages[0];
  isLanguageMenuOpen = false;
  private readonly languageSubscription: Subscription;

  constructor(private readonly translationService: TranslationService) {
    this.selectedLanguage = this.getLanguageOption(this.translationService.currentLanguage);
    this.languageSubscription = this.translationService.language$.subscribe((languageCode) => {
      this.selectedLanguage = this.getLanguageOption(languageCode);
    });
  }

  @HostListener('document:click')
  closeLanguageMenu(): void {
    this.isLanguageMenuOpen = false;
  }

  toggleLanguageMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  selectLanguage(language: LanguageOption, event: MouseEvent): void {
    event.stopPropagation();
    this.selectedLanguage = language;
    this.isLanguageMenuOpen = false;
    this.translationService.setLanguage(language.code);
  }

  moveLiquidGlass(event: PointerEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    target.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }

  resetLiquidGlass(event: PointerEvent): void {
    const target = event.currentTarget as HTMLElement;
    target.style.setProperty('--mx', '50%');
    target.style.setProperty('--my', '50%');
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  private getLanguageOption(languageCode: LanguageCode): LanguageOption {
    return this.languages.find((language) => language.code === languageCode) ?? this.languages[0];
  }
}

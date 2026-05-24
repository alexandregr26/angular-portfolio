import { Component, HostListener } from '@angular/core';

type LanguageOption = {
  code: string;
  label: string;
  flag: string;
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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

  constructor() {
    const savedLanguage = this.getSavedLanguage();
    if (savedLanguage) {
      this.selectedLanguage = savedLanguage;
    }
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

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('portfolio-language', language.code);
    }
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

  private getSavedLanguage(): LanguageOption | undefined {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const savedCode = window.localStorage.getItem('portfolio-language');
    return this.languages.find((language) => language.code === savedCode);
  }
}

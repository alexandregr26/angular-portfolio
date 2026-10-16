import { ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
  @ViewChild('languageTrigger', { static: true }) private languageTrigger!: ElementRef<HTMLButtonElement>;
  @ViewChild('languageSelector', { static: true }) private languageSelector!: ElementRef<HTMLElement>;
  @ViewChildren('languageOption') private languageOptions!: QueryList<ElementRef<HTMLButtonElement>>;

  constructor(
    private readonly translationService: TranslationService,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    this.selectedLanguage = this.getLanguageOption(this.translationService.currentLanguage);
    this.languageSubscription = this.translationService.language$.subscribe((languageCode) => {
      this.selectedLanguage = this.getLanguageOption(languageCode);
    });
  }

  @HostListener('document:click')
  closeLanguageMenu(restoreFocus = false): void {
    this.isLanguageMenuOpen = false;
    if (restoreFocus) {
      this.languageTrigger.nativeElement.focus();
    }
  }

  toggleLanguageMenu(event: MouseEvent): void {
    event.stopPropagation();
    if (this.isLanguageMenuOpen) {
      this.closeLanguageMenu(true);
    } else {
      this.openLanguageMenu(0);
    }
  }

  selectLanguage(language: LanguageOption, event: MouseEvent): void {
    event.stopPropagation();
    this.closeLanguageMenu(true);
    this.translationService.setLanguage(language.code);
  }

  onLanguageTriggerKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.openLanguageMenu(event.key === 'ArrowUp' ? this.languages.length - 1 : 0);
    } else if (event.key === 'Escape' && this.isLanguageMenuOpen) {
      event.preventDefault();
      this.closeLanguageMenu(true);
    }
  }

  onLanguageMenuKeydown(event: KeyboardEvent): void {
    const options = this.languageOptions.toArray().map(option => option.nativeElement);
    const index = options.indexOf(event.target as HTMLButtonElement);
    let nextIndex: number;
    switch (event.key) {
      case 'ArrowDown': nextIndex = (index + 1) % options.length; break;
      case 'ArrowUp': nextIndex = (index - 1 + options.length) % options.length; break;
      case 'Home': nextIndex = 0; break;
      case 'End': nextIndex = options.length - 1; break;
      case 'Escape':
        event.preventDefault();
        this.closeLanguageMenu(true);
        return;
      case 'Tab':
        // Native Tab proceeds from the trigger to the next/previous control.
        this.closeLanguageMenu(true);
        return;
      default:
        if (event.key.length !== 1 || event.ctrlKey || event.altKey || event.metaKey) {
          return;
        }
        nextIndex = this.languages.findIndex(language => language.label.toLowerCase().startsWith(event.key.toLowerCase()));
        if (nextIndex < 0) {
          return;
        }
    }
    event.preventDefault();
    options[nextIndex].focus();
  }

  onLanguageFocusOut(event: FocusEvent): void {
    if (!this.languageSelector.nativeElement.contains(event.relatedTarget as Node | null)) {
      this.closeLanguageMenu();
    }
  }

  closeMobileNavigation(event: MouseEvent, details: HTMLDetailsElement): void {
    if ((event.target as HTMLElement).closest('a')) {
      details.open = false;
      if (details.contains(details.ownerDocument.activeElement)) {
        details.querySelector('summary')?.focus();
      }
    }
  }

  private openLanguageMenu(index: number): void {
    this.isLanguageMenuOpen = true;
    // Reveal the items before moving focus; hidden elements cannot receive it.
    this.changeDetector.detectChanges();
    this.languageOptions.get(index)?.nativeElement.focus();
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

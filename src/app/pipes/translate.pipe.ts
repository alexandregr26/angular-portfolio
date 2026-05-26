import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private readonly subscription: Subscription;

  constructor(
    private readonly translationService: TranslationService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.subscription = this.translationService.language$.subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }

  transform(key: string, params: Record<string, string> = {}): string {
    return this.translationService.translate(key, params);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

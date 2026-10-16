import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import seoPages from '../../seo-pages.json';

type SeoPage = (typeof seoPages.pages)[number];

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  update(url: string): void {
    const pathname = url.split(/[?#]/, 1)[0].replace(/\/+$/, '') || '/';
    const page = seoPages.pages.find(candidate =>
      (candidate.path.replace(/\/+$/, '') || '/') === pathname
    ) ?? (pathname === '/contact' ? seoPages.pages[0] : undefined);

    if (!page) {
      this.title.setTitle('Page Not Found | Alexandre Gouveia Rodrigues');
      this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });
      this.removeCanonical();
      return;
    }

    this.meta.removeTag("name='robots'");
    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ property: 'og:type', content: page.kind });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: this.absoluteUrl(page.path) });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.setCanonical(page);
  }

  private absoluteUrl(path: string): string {
    return `${seoPages.siteUrl}${path}`;
  }

  private setCanonical(page: SeoPage): void {
    const canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?? this.document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = this.absoluteUrl(page.path);
    if (!canonical.parentNode) {
      this.document.head.appendChild(canonical);
    }
  }

  private removeCanonical(): void {
    this.document.querySelector('link[rel="canonical"]')?.remove();
  }
}

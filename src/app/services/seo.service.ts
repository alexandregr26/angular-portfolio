import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import seoPages from '../../seo-pages.json';
import { createStructuredData, structuredDataId } from '../../seo-structured-data.mjs';

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
      this.document.getElementById(structuredDataId)?.remove();
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
    this.setStructuredData(page);
  }

  private setStructuredData(page: SeoPage): void {
    const script = this.document.getElementById(structuredDataId)
      ?? this.document.createElement('script');
    script.id = structuredDataId;
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(createStructuredData(page, seoPages)).replace(/</g, '\\u003c');
    if (!script.parentNode) {
      this.document.head.appendChild(script);
    }
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

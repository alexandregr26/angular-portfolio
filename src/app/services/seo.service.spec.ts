import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';
import seoPages from '../../seo-pages.json';

describe('SeoService', () => {
  let service: SeoService;
  let document: Document;
  let meta: Meta;
  let title: Title;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoService);
    document = TestBed.inject(DOCUMENT);
    meta = TestBed.inject(Meta);
    title = TestBed.inject(Title);
  });

  afterEach(() => {
    document.querySelector('link[rel="canonical"]')?.remove();
    document.getElementById('page-structured-data')?.remove();
    document.getElementById('unrelated-structured-data')?.remove();
    meta.removeTag("name='robots'");
  });

  it('sets project-specific metadata and canonical URL', () => {
    service.update('/project/capstone/?ref=resume');

    expect(title.getTitle()).toBe('HealthChainON | Blockchain Electronic Health Records');
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href'))
      .toBe('https://alexandregr.com/project/capstone/');
    expect(meta.getTag("property='og:url'")?.content)
      .toBe('https://alexandregr.com/project/capstone/');
    expect(meta.getTag("name='description'")?.content).toContain('Hyperledger Fabric');
  });

  it('removes the canonical URL from unknown pages and restores it on valid pages', () => {
    service.update('/missing');
    expect(document.querySelector('link[rel="canonical"]')).toBeNull();
    expect(meta.getTag("name='robots'")?.content).toBe('noindex, follow');

    service.update('/');
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href'))
      .toBe('https://alexandregr.com/');
    expect(meta.getTag("name='robots'")).toBeNull();
  });

  function structuredData(): Record<string, unknown> {
    return JSON.parse(document.getElementById('page-structured-data')!.textContent!);
  }

  it('replaces the entry page schema in place when navigating to a project', () => {
    const entryScript = document.createElement('script');
    entryScript.id = 'page-structured-data';
    entryScript.type = 'application/ld+json';
    entryScript.textContent = JSON.stringify({ '@type': 'Person', name: 'Entry page' });
    document.head.appendChild(entryScript);

    service.update('/project/capstone/?ref=resume#architecture');

    expect(document.getElementById('page-structured-data')).toBe(entryScript);
    expect(structuredData()).toEqual({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'HealthChainON',
      description: seoPages.pages[1].description,
      url: 'https://alexandregr.com/project/capstone/',
      author: { '@type': 'Person', name: seoPages.siteName, url: seoPages.siteUrl }
    });
    expect(document.querySelectorAll('#page-structured-data').length).toBe(1);
  });

  it('keeps one current schema through every page and repeated navigation', () => {
    for (const page of [...seoPages.pages, ...seoPages.pages.slice().reverse()]) {
      service.update(page.path);

      expect(document.querySelectorAll('#page-structured-data').length).toBe(1);
      expect(structuredData()['@type']).toBe(page.path === '/' ? 'Person' : page.path.startsWith('/project/') ? 'CreativeWork' : 'WebPage');
      expect(structuredData()['name']).toBe(page.heading);
      expect(structuredData()['url']).toBe(page.path === '/' ? seoPages.siteUrl : `${seoPages.siteUrl}${page.path}`);
      if (page.path !== '/') {
        expect(structuredData()['description']).toBe(page.description);
        expect(structuredData()['sameAs']).toBeUndefined();
      }
    }
  });

  it('restores the Person schema for homepage fragments and the contact alias', () => {
    for (const url of ['/#contact', '/contact?ref=nav#contact']) {
      service.update('/work/coinbase/');
      service.update(url);

      expect(structuredData()).toEqual({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: seoPages.siteName,
        url: seoPages.siteUrl,
        sameAs: ['https://linkedin.com/in/alexandre-gouveia-rodrigues', 'https://github.com/alexandregr26/']
      });
    }
  });

  it('clears stale schema on unknown routes and restores it without touching unrelated scripts', () => {
    const unrelated = document.createElement('script');
    unrelated.id = 'unrelated-structured-data';
    unrelated.type = 'application/ld+json';
    unrelated.textContent = '{"@type":"WebSite"}';
    document.head.appendChild(unrelated);

    service.update('/project/splitz/');
    service.update('/missing?ref=test');
    expect(document.getElementById('page-structured-data')).toBeNull();
    expect(unrelated.textContent).toBe('{"@type":"WebSite"}');
    expect(unrelated.parentNode).toBe(document.head);

    service.update('/work/amazon/');
    expect(structuredData()['@type']).toBe('WebPage');
    expect(structuredData()['url']).toBe('https://alexandregr.com/work/amazon/');
  });
});

import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';

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
});

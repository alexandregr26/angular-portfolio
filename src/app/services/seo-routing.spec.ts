import { DOCUMENT } from '@angular/common';
import { ApplicationInitStatus } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { Router, UrlSerializer } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import seoPages from '../../seo-pages.json';
import { CanonicalUrlSerializer } from './canonical-url-serializer';

describe('Routed SEO metadata', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let title: Title;
  let meta: Meta;
  let document: Document;
  let originalTitle: string;

  beforeEach(async () => {
    spyOn(Storage.prototype, 'getItem').and.returnValue(null);
    spyOn(Storage.prototype, 'setItem');
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
      providers: [{ provide: UrlSerializer, useClass: CanonicalUrlSerializer }]
    });
    const initialization = TestBed.inject(ApplicationInitStatus);
    await initialization.donePromise;

    router = TestBed.inject(Router);
    title = TestBed.inject(Title);
    meta = TestBed.inject(Meta);
    document = TestBed.inject(DOCUMENT);
    originalTitle = title.getTitle();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    title.setTitle(originalTitle);
    document.querySelector('link[rel="canonical"]')?.remove();
    document.getElementById('page-structured-data')?.remove();
    meta.removeTag("name='robots'");
  });

  async function navigate(url: string): Promise<void> {
    // Match Location's initial URL normalization and RouterLink segment trees.
    const target = new URL(url, seoPages.siteUrl);
    const path = target.pathname.replace(/\/+$/, '') || '/';
    await router.navigateByUrl(path + target.search + target.hash);
    fixture.detectChanges();
    await fixture.whenStable();
  }

  function expectManifestTitle(path: string): void {
    const page = seoPages.pages.find(candidate => candidate.path === path)!;
    expect(title.getTitle()).withContext(path).toBe(page.title);
    expect(meta.getTag("property='og:title'")?.content).withContext(path).toBe(page.title);
    expect(meta.getTag("name='twitter:title'")?.content).withContext(path).toBe(page.title);
    expect(meta.getTag("name='description'")?.content).withContext(path).toBe(page.description);
    expect(meta.getTag("property='og:description'")?.content).withContext(path).toBe(page.description);
    expect(meta.getTag("name='twitter:description'")?.content).withContext(path).toBe(page.description);
    expect(fixture.nativeElement.querySelector('app-not-found')).withContext(path).toBeNull();
    expect(fixture.nativeElement.querySelector('main')).withContext(path).not.toBeNull();
  }

  it('keeps the manifest title after the real router completes every canonical route', async () => {
    for (const page of seoPages.pages) {
      await navigate(page.path);
      expectManifestTitle(page.path);
    }
  });

  it('keeps home and Coinbase titles consistent on repeated navigation and fragments', async () => {
    for (const url of ['/', '/work/coinbase/?ref=resume', '/#projects', '/work/coinbase/']) {
      await navigate(url);
      expectManifestTitle(url.startsWith('/work/') ? '/work/coinbase/' : '/');
    }
  });

  it('handles legacy redirects, the contact alias and recovery from an unknown route', async () => {
    await navigate('/work/utat');
    expect(router.url).toBe('/project/utat/');
    expectManifestTitle('/project/utat/');

    await navigate('/contact');
    expectManifestTitle('/');

    await navigate('/missing');
    expect(title.getTitle()).toBe('Page Not Found');
    expect(meta.getTag("name='robots'")?.content).toBe('noindex, follow');

    await navigate('/');
    expectManifestTitle('/');
    expect(meta.getTag("name='robots'")).toBeNull();
  });
});

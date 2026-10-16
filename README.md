# Alexandre's Online Portfolio

Welcome to my online portfolio, designed to display my technical skills and project portfolio to potential recruiters and employers. <br /> <br />
URL: www.alexandregr.com

## Build and SEO

Run `npm run build` to compile the Angular app and generate static HTML for each project and work page in `docs/`. GitHub Pages serves `docs/` directly. The page titles, descriptions, and canonical URLs are defined in `src/seo-pages.json`; the build also creates `sitemap.xml` and `robots.txt`. Run `npm run test:seo` after building to check the generated files.

Run `npm run test:seo:paths` to exercise generation and checking in a temporary repository path containing spaces. It verifies the actual output location and fails if a generated page is missing; it does not require an Angular build first.

Edit homepage and page descriptions only in `src/seo-pages.json`. `src/index.html` intentionally omits description tags: the build inserts the standard, Open Graph and Twitter descriptions from the manifest into every generated page. In local development, `SeoService` sets them from the same manifest after navigation. The SEO checks reject description tags added back to the source template and verify that all three generated descriptions match the manifest exactly.

`SeoService` sets browser titles and social metadata from that same manifest after completed navigation. Route definitions intentionally omit `title` so Angular's default title strategy does not overwrite them. Routing integration tests check the final metadata after the real router finishes navigation, including home, Coinbase, legacy redirects and the contact alias.

The category roots `/project` and `/work`, with or without trailing slashes, redirect to `/#projects` and `/#work`. They use the homepage metadata and canonical URL. Unknown case-study paths still show the not-found page.

Structured data uses the shared builder in `src/seo-structured-data.mjs`. The build embeds it in each page, and `SeoService` updates the same `page-structured-data` script after navigation. The homepage describes a Person, projects a CreativeWork, and work experience a WebPage. Unknown routes remove this script so they do not retain the previous page's structured data.

## Languages

English translations are bundled from `src/assets/i18n/en.json`, so the default language needs no network request. The app renders English immediately while any saved Portuguese or French preference loads in the background; the locale request never delays bootstrap. Portuguese and French also load on demand and use English for missing strings. Failed requests preserve the last working language; the flag and document language change only after a successful load. Superseded responses are ignored, including when switching back to English while another language loads. Saving the preference is optional: if browser storage is blocked, selection still works for the current session.

French covers every English translation key, including the case studies and 404 page. The unit suite checks key coverage, nonempty translations, interpolation parameters, and application of the real French dictionary. Add French translations whenever English keys are added. Language-menu options use their native names with explicit language annotations; the trigger announces the current language in the active interface language.

## Google Analytics

The Google tag loads in `src/index.html`. `AppComponent` configures property `G-5V86R1NRPZ` once, after the first successful Angular navigation, so the initial page view uses the resolved URL. GA4 Enhanced measurement handles later browser-history changes, including back and forward navigation. Do not add manual page-view events alongside it.

In the GA4 web stream, keep **Enhanced measurement → Page views → Page changes based on browser history events** enabled. This was verified against the tag during the analytics fix. To verify future changes, check for one `page_view` on initial load and each page transition, with the expected page location and referrer; Google documents this in its [SPA measurement guide](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications).

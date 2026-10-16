# Alexandre's Online Portfolio

Welcome to my online portfolio, designed to display my technical skills and project portfolio to potential recruiters and employers. <br /> <br />
URL: www.alexandregr.com

## Build and SEO

Run `npm run build` to compile the Angular app and generate static HTML for each project and work page in `docs/`. GitHub Pages serves `docs/` directly. The page titles, descriptions, and canonical URLs are defined in `src/seo-pages.json`; the build also creates `sitemap.xml` and `robots.txt`. Run `npm run test:seo` after building to check the generated files.

Structured data uses the shared builder in `src/seo-structured-data.mjs`. The build embeds it in each page, and `SeoService` updates the same `page-structured-data` script after navigation. The homepage describes a Person, projects a CreativeWork, and work experience a WebPage. Unknown routes remove this script so they do not retain the previous page's structured data.

## Google Analytics

The Google tag loads in `src/index.html`. `AppComponent` configures property `G-5V86R1NRPZ` once, after the first successful Angular navigation, so the initial page view uses the resolved URL. GA4 Enhanced measurement handles later browser-history changes, including back and forward navigation. Do not add manual page-view events alongside it.

In the GA4 web stream, keep **Enhanced measurement → Page views → Page changes based on browser history events** enabled. This was verified against the tag during the analytics fix. To verify future changes, check for one `page_view` on initial load and each page transition, with the expected page location and referrer; Google documents this in its [SPA measurement guide](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications).

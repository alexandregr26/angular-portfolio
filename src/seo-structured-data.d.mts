import seoPages from './seo-pages.json';

export const structuredDataId: 'page-structured-data';
export function createStructuredData(
  page: (typeof seoPages.pages)[number],
  site: Pick<typeof seoPages, 'siteUrl' | 'siteName'>
): Record<string, unknown>;

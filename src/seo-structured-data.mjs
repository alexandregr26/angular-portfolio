// Shared by the static page generator and Angular navigation.
export const structuredDataId = 'page-structured-data';

export function createStructuredData(page, { siteUrl, siteName }) {
  return page.path === '/'
    ? {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: siteName,
        url: siteUrl,
        sameAs: ['https://linkedin.com/in/alexandre-gouveia-rodrigues', 'https://github.com/alexandregr26/']
      }
    : {
        '@context': 'https://schema.org',
        '@type': page.path.startsWith('/project/') ? 'CreativeWork' : 'WebPage',
        name: page.heading,
        description: page.description,
        url: `${siteUrl}${page.path}`,
        author: { '@type': 'Person', name: siteName, url: siteUrl }
      };
}

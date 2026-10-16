import { DefaultUrlSerializer, UrlTree } from '@angular/router';
import seoPages from '../../seo-pages.json';

const canonicalPaths = new Set(
  seoPages.pages.filter(page => page.path !== '/').map(page => page.path.slice(0, -1))
);

export class CanonicalUrlSerializer extends DefaultUrlSerializer {
  override parse(url: string): UrlTree {
    // Treat category-root aliases equally in direct and programmatic navigation.
    return super.parse(url.replace(/^\/(project|work)\/(?=$|[?#])/, '/$1'));
  }

  override serialize(tree: UrlTree): string {
    const url = super.serialize(tree);
    const match = /^([^?#]*)(.*)$/.exec(url);
    if (!match || !canonicalPaths.has(match[1])) {
      return url;
    }
    return `${match[1]}/${match[2]}`;
  }
}

import { appRoutes } from './app.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

describe('Application routes', () => {
  it('should keep the wildcard route last', () => {
    const wildcardRoute = appRoutes[appRoutes.length - 1];

    expect(wildcardRoute.path).toBe('**');
    expect(wildcardRoute.component).toBe(NotFoundComponent);
  });

  it('should retain every legacy project redirect', () => {
    const redirects = appRoutes.filter(route => route.redirectTo);

    expect(redirects.length).toBe(6);
    expect(redirects).toContain(jasmine.objectContaining({
      path: 'work/capstone',
      redirectTo: 'project/capstone'
    }));
  });

  it('should lazy-load work experience and project pages', () => {
    const workRoute = appRoutes.find(route => route.path === 'work');
    const projectRoute = appRoutes.find(route => route.path === 'project');

    expect(workRoute?.loadChildren).toEqual(jasmine.any(Function));
    expect(projectRoute?.loadChildren).toEqual(jasmine.any(Function));
  });
});

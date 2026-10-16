import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AppComponent } from './app.component';
import { SeoService } from './services/seo.service';

describe('AppComponent', () => {
  let routerEvents: Subject<NavigationEnd | NavigationStart>;
  let component: AppComponent;
  let seo: jasmine.SpyObj<SeoService>;

  beforeEach(() => {
    routerEvents = new Subject<NavigationEnd | NavigationStart>();
    seo = jasmine.createSpyObj<SeoService>('SeoService', ['update']);
    component = new AppComponent({ events: routerEvents } as unknown as Router, seo);
  });

  afterEach(() => {
    delete (globalThis as typeof globalThis & { gtag?: jasmine.Spy }).gtag;
  });

  it('should create with the portfolio title', () => {
    expect(component).toBeTruthy();
    expect(component.title).toBe('angular-portfolio');
  });

  it('initializes the real Analytics property once after the first completed navigation', () => {
    const gtag = jasmine.createSpy('gtag');
    (globalThis as typeof globalThis & { gtag: jasmine.Spy }).gtag = gtag;

    routerEvents.next(new NavigationStart(1, '/work/capstone'));
    expect(gtag).not.toHaveBeenCalled();

    routerEvents.next(new NavigationEnd(1, '/work/capstone', '/project/capstone'));

    expect(gtag).toHaveBeenCalledOnceWith('config', 'G-5V86R1NRPZ');
    expect(seo.update).toHaveBeenCalledWith('/project/capstone');

    routerEvents.next(new NavigationEnd(2, '/work/coinbase/', '/work/coinbase/'));

    expect(gtag).toHaveBeenCalledTimes(1);
    expect(seo.update).toHaveBeenCalledWith('/work/coinbase/');
  });

  it('still updates page metadata when Analytics is unavailable', () => {
    expect(() => routerEvents.next(new NavigationEnd(1, '/', '/'))).not.toThrow();
    expect(seo.update).toHaveBeenCalledWith('/');
  });
});

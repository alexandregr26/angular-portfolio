import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let routerEvents: Subject<NavigationEnd>;
  let component: AppComponent;

  beforeEach(() => {
    routerEvents = new Subject<NavigationEnd>();
    component = new AppComponent({ events: routerEvents } as unknown as Router);
  });

  afterEach(() => {
    delete (globalThis as typeof globalThis & { gtag?: jasmine.Spy }).gtag;
  });

  it('should create with the portfolio title', () => {
    expect(component).toBeTruthy();
    expect(component.title).toBe('angular-portfolio');
  });

  it('should track completed route navigation', () => {
    const gtag = jasmine.createSpy('gtag');
    (globalThis as typeof globalThis & { gtag: jasmine.Spy }).gtag = gtag;

    routerEvents.next(new NavigationEnd(1, '/project/capstone', '/project/capstone'));

    expect(gtag).toHaveBeenCalledWith('config', 'MEASUREMENT-ID', {
      page_path: '/project/capstone'
    });
  });
});

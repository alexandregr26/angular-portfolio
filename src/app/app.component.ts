import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SeoService } from './services/seo.service';

declare const gtag: (command: 'config', measurementId: string) => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-portfolio';
  private analyticsInitialized = false;

  constructor(public router: Router, private readonly seo: SeoService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.seo.update(event.urlAfterRedirects);

        // Wait for initial redirects before the first view. GA4 Enhanced
        // measurement tracks subsequent browser history changes automatically.
        if (!this.analyticsInitialized && typeof gtag === 'function') {
          gtag('config', 'G-5V86R1NRPZ');
          this.analyticsInitialized = true;
        }
      }
    });
  }
}

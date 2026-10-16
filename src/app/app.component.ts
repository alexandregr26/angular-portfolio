import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SeoService } from './services/seo.service';

declare const gtag: Function;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-portfolio';

  constructor(public router: Router, private readonly seo: SeoService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.seo.update(event.urlAfterRedirects);
        gtag('config', 'MEASUREMENT-ID', { 'page_path': event.urlAfterRedirects });
      }      
    })
  }
}

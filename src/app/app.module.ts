import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CommunityBoxComponent } from './components/community-box/community-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkHeaderComponent } from './components/work-header/work-header.component';
import { TranslationService } from './services/translation.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PortfolioSharedModule } from './shared/portfolio-shared.module';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Alexandre Gouveia Rodrigues'
  },
  {
    path: 'contact',
    component: HomeComponent,
    title: 'Contact Me | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'work/splitz',
    redirectTo: 'project/splitz',
    pathMatch: 'full'
  },
  {
    path: 'work/utat',
    redirectTo: 'project/utat',
    pathMatch: 'full'
  },
  {
    path: 'work/ece243',
    redirectTo: 'project/ece243',
    pathMatch: 'full'
  },
  {
    path: 'work/ece297',
    redirectTo: 'project/ece297',
    pathMatch: 'full'
  },
  {
    path: 'work/capstone',
    redirectTo: 'project/capstone',
    pathMatch: 'full'
  },
  {
    path: 'work/aps360',
    redirectTo: 'project/aps360',
    pathMatch: 'full'
  },
  {
    path: 'work',
    loadChildren: () => import('./pages/work/work-experience.module').then(module => module.WorkExperienceModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./pages/work/project-pages.module').then(module => module.ProjectPagesModule)
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page Not Found | Alexandre Gouveia Rodrigues'
  }
];

function initializeTranslations(translationService: TranslationService): () => Promise<void> {
  return () => translationService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    CommunityBoxComponent,
    FooterComponent,
    WorkHeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PortfolioSharedModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslations,
      deps: [TranslationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

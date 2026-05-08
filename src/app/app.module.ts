import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CommunityBoxComponent } from './components/community-box/community-box.component';
import { SkillComponent } from './components/skill/skill.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectBoxComponent } from './components/project-box/project-box.component';
import { AmazonComponent } from './pages/work/amazon/amazon.component';
import { ThomsonReutersComponent } from './pages/work/thomson-reuters/thomson-reuters.component';
import { SplitzComponent } from './pages/work/splitz/splitz.component';
import { UtatComponent } from './pages/work/utat/utat.component';
import { WorkHeaderComponent } from './components/work-header/work-header.component';
import { FpsComponent } from './pages/work/fps/fps.component';
import { MappaComponent } from './pages/work/mappa/mappa.component';
import { Ece344Component } from './pages/work/ece344/ece344.component';
import { PortfolioComponent } from './pages/work/portfolio/portfolio.component';
import { CapstoneComponent } from './pages/work/capstone/capstone.component';
import { Aps360Component } from './pages/work/aps360/aps360.component';

const appRoutes: Routes = [
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
    path: 'work/amazon',
    component: AmazonComponent,
    title: 'Amazon | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'work/thomson-reuters',
    component: ThomsonReutersComponent,
    title: 'Thomson Reuters | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'project/splitz',
    component: SplitzComponent,
    title: 'Splitz | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'project/utat',
    component: UtatComponent,
    title: 'UTAT | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'project/ece243',
    component: FpsComponent,
    title: 'FPS | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'project/ece297',
    component: MappaComponent,
    title: 'Mappa | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'project/ece344',
    component: Ece344Component,
    title: 'ECE344 | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'project/capstone',
    component: CapstoneComponent,
    title: 'Capstone | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'project/aps360',
    component: Aps360Component,
    title: 'Song Popularity Predictor | Alexandre Gouveia Rodrigues'
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
    path: 'work/ece344',
    redirectTo: 'project/ece344',
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
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    CommunityBoxComponent,
    SkillComponent,
    FooterComponent,
    ProjectBoxComponent,
    AmazonComponent,
    ThomsonReutersComponent,
    SplitzComponent,
    UtatComponent,
    WorkHeaderComponent,
    FpsComponent,
    MappaComponent,
    Ece344Component,
    PortfolioComponent,
    CapstoneComponent,
    Aps360Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

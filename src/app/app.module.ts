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
import { ContactComponent } from './pages/contact/contact.component';
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
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'work/amazon', component: AmazonComponent },
  { path: 'work/tr', component: ThomsonReutersComponent },
  { path: 'work/splitz', component: SplitzComponent },
  { path: 'work/utat', component: UtatComponent },
  { path: 'work/ece243', component: FpsComponent },
  { path: 'work/ece297', component: MappaComponent },
  { path: 'work/ece344', component: Ece344Component },
  { path: 'work/capstone', component: CapstoneComponent },
  { path: 'work/aps360', component: Aps360Component }
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
    ContactComponent,
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

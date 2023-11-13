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

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'work/amazon', component: AmazonComponent},
  {path: 'work/reuters', component: ThomsonReutersComponent},
  {path: 'work/splitz', component: SplitzComponent},
  {path: 'work/utat', component: UtatComponent},
  {path: 'work/fps', component: FpsComponent},
  {path: 'work/mappa', component: MappaComponent},
  {path: 'work/ECE344', component: Ece344Component},
  {path: 'work/portfolio', component: PortfolioComponent},
  {path: 'work/capstone', component: CapstoneComponent}
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
    CapstoneComponent
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

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

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent}
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
    ContactComponent
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

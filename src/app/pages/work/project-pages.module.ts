import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

import { PortfolioSharedModule } from '../../shared/portfolio-shared.module';
import { Aps360Component } from './aps360/aps360.component';
import { CapstoneComponent } from './capstone/capstone.component';
import { FpsComponent } from './fps/fps.component';
import { MappaComponent } from './mappa/mappa.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SplitzComponent } from './splitz/splitz.component';
import { UtatComponent } from './utat/utat.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/#projects'
  },
  {
    path: 'splitz',
    component: SplitzComponent
  },
  {
    path: 'utat',
    component: UtatComponent
  },
  {
    path: 'ece243',
    component: FpsComponent
  },
  {
    path: 'ece297',
    component: MappaComponent
  },
  {
    path: 'capstone',
    component: CapstoneComponent
  },
  {
    path: 'aps360',
    component: Aps360Component
  }
];

@NgModule({
  declarations: [Aps360Component, CapstoneComponent, FpsComponent, MappaComponent, PortfolioComponent, SplitzComponent, UtatComponent],
  imports: [PortfolioSharedModule, LucideAngularModule, RouterModule.forChild(routes)]
})
export class ProjectPagesModule {}

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
    path: 'splitz',
    component: SplitzComponent,
    title: 'Splitz | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'utat',
    component: UtatComponent,
    title: 'UTAT | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'ece243',
    component: FpsComponent,
    title: 'FPS | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'ece297',
    component: MappaComponent,
    title: 'Mappa | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'capstone',
    component: CapstoneComponent,
    title: 'Capstone | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'aps360',
    component: Aps360Component,
    title: 'Deep Learning Model for Predicting Song Popularity | Alexandre Gouveia Rodrigues'
  }
];

@NgModule({
  declarations: [Aps360Component, CapstoneComponent, FpsComponent, MappaComponent, PortfolioComponent, SplitzComponent, UtatComponent],
  imports: [PortfolioSharedModule, LucideAngularModule, RouterModule.forChild(routes)]
})
export class ProjectPagesModule {}

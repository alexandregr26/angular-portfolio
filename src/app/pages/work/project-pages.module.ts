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
    title: 'Splitz | Chrome Tab Organizer Extension'
  },
  {
    path: 'utat',
    component: UtatComponent,
    title: 'UTAT | Low-Power Rocket Ground Station Sensor'
  },
  {
    path: 'ece243',
    component: FpsComponent,
    title: 'FPGA First-Person Shooter Game | DE1-SoC Project'
  },
  {
    path: 'ece297',
    component: MappaComponent,
    title: 'Mappa | Geographic Information System'
  },
  {
    path: 'capstone',
    component: CapstoneComponent,
    title: 'HealthChainON | Blockchain Electronic Health Records'
  },
  {
    path: 'aps360',
    component: Aps360Component,
    title: 'Predicting Song Popularity with Deep Learning'
  }
];

@NgModule({
  declarations: [Aps360Component, CapstoneComponent, FpsComponent, MappaComponent, PortfolioComponent, SplitzComponent, UtatComponent],
  imports: [PortfolioSharedModule, LucideAngularModule, RouterModule.forChild(routes)]
})
export class ProjectPagesModule {}

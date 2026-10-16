import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioSharedModule } from '../../shared/portfolio-shared.module';
import { AmazonComponent } from './amazon/amazon.component';
import { CoinbaseComponent } from './coinbase/coinbase.component';
import { ThomsonReutersComponent } from './thomson-reuters/thomson-reuters.component';

const routes: Routes = [
  {
    path: 'coinbase',
    component: CoinbaseComponent,
    title: 'Software Engineer at Coinbase'
  },
  {
    path: 'amazon',
    component: AmazonComponent,
    title: 'Software Development Engineer Intern at Amazon'
  },
  {
    path: 'thomson-reuters',
    component: ThomsonReutersComponent,
    title: 'Software Developer Intern at Thomson Reuters'
  }
];

@NgModule({
  declarations: [AmazonComponent, CoinbaseComponent, ThomsonReutersComponent],
  imports: [PortfolioSharedModule, RouterModule.forChild(routes)]
})
export class WorkExperienceModule {}

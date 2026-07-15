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
    title: 'Coinbase | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'amazon',
    component: AmazonComponent,
    title: 'Amazon | Alexandre Gouveia Rodrigues'
  },
  {
    path: 'thomson-reuters',
    component: ThomsonReutersComponent,
    title: 'Thomson Reuters | Alexandre Gouveia Rodrigues'
  }
];

@NgModule({
  declarations: [AmazonComponent, CoinbaseComponent, ThomsonReutersComponent],
  imports: [PortfolioSharedModule, RouterModule.forChild(routes)]
})
export class WorkExperienceModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioSharedModule } from '../../shared/portfolio-shared.module';
import { AmazonComponent } from './amazon/amazon.component';
import { CoinbaseComponent } from './coinbase/coinbase.component';
import { ThomsonReutersComponent } from './thomson-reuters/thomson-reuters.component';

const routes: Routes = [
  {
    path: 'coinbase',
    component: CoinbaseComponent
  },
  {
    path: 'amazon',
    component: AmazonComponent
  },
  {
    path: 'thomson-reuters',
    component: ThomsonReutersComponent
  }
];

@NgModule({
  declarations: [AmazonComponent, CoinbaseComponent, ThomsonReutersComponent],
  imports: [PortfolioSharedModule, RouterModule.forChild(routes)]
})
export class WorkExperienceModule {}

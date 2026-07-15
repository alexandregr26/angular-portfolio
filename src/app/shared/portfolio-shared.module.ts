import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectBoxComponent } from '../components/project-box/project-box.component';
import { SkillComponent } from '../components/skill/skill.component';
import { TranslatePipe } from '../pipes/translate.pipe';

@NgModule({
  declarations: [ProjectBoxComponent, SkillComponent, TranslatePipe],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, RouterModule, ProjectBoxComponent, SkillComponent, TranslatePipe]
})
export class PortfolioSharedModule {}

import { Component, Input } from '@angular/core';
import { Skill } from '../_models/Skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  @Input() skill = {} as Skill;
}

import { Component, Input } from '@angular/core';
import { ProjectBox } from '../_models/ProjectBox';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.css']
})
export class ProjectBoxComponent {
  @Input() projectbox = {} as ProjectBox;
}

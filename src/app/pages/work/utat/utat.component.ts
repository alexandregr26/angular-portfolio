import { Component } from '@angular/core';
import { WorkHeader } from '../../../_models/WorkHeader';
import { projects } from 'src/app/data/projects';

@Component({
  selector: 'app-utat',
  templateUrl: './utat.component.html',
  styleUrls: ['./utat.component.css']
})
export class UtatComponent {

  header: WorkHeader = {
    img: "assets/img/experience/UTAT/header.png"
  };

  projects = projects;

}

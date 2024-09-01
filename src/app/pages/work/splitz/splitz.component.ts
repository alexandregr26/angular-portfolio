import { Component } from '@angular/core';
import { WorkHeader } from '../../../_models/WorkHeader';
import { projects } from 'src/app/data/projects';

@Component({
  selector: 'app-splitz',
  templateUrl: './splitz.component.html',
  styleUrls: ['./splitz.component.css']
})
export class SplitzComponent {

  header: WorkHeader = {
    img: "assets/img/experience/Splitz/header.png"
  };

  projects = projects;

}

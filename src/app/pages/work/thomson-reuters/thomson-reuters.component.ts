import { Component } from '@angular/core';
import { WorkHeader } from 'src/app/_models/WorkHeader';
import { projects } from 'src/app/data/projects';

@Component({
  selector: 'app-thomson-reuters',
  templateUrl: './thomson-reuters.component.html',
  styleUrls: ['./thomson-reuters.component.css']
})
export class ThomsonReutersComponent {

  header: WorkHeader = {
    img: "assets/img/experience/ThomsonReuters/orange.png"
  };

  projects = projects;

}

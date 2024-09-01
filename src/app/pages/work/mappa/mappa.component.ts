import { Component } from '@angular/core';
import { projects } from 'src/app/data/projects';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent {

  projects = projects;

}

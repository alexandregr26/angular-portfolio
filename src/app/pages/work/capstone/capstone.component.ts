import { Component } from '@angular/core';
import { WorkHeader } from '../../../_models/WorkHeader';
import { projects } from 'src/app/data/projects';

@Component({
  selector: 'app-capstone',
  templateUrl: './capstone.component.html',
  styleUrls: ['./capstone.component.css']
})
export class CapstoneComponent {

  header: WorkHeader = {
    img: "assets/img/experience/Capstone/header.png"
  };

  projects = projects;

}

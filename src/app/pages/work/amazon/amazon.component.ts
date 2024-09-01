import { Component } from '@angular/core';
import { WorkHeader } from 'src/app/_models/WorkHeader';
import { projects } from 'src/app/data/projects';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {

  header: WorkHeader = {
    img: "assets/img/experience/Amazon/blue.png"
  };

  projects = projects;

}

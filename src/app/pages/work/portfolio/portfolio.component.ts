import { Component } from '@angular/core';
import { projects } from 'src/app/data/projects';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  projects = projects;

}

import { Component } from '@angular/core';
import { WorkHeader } from '../../../_models/WorkHeader';
import { getOtherWorks, projects } from 'src/app/data/projects';

@Component({
  selector: 'app-fps',
  templateUrl: './fps.component.html',
  styleUrls: ['./fps.component.css']
})
export class FpsComponent {

  header: WorkHeader = {
    img: "assets/img/education/uoft.png"
  };

  projects = projects;
  otherWorks = getOtherWorks('ece243');

}

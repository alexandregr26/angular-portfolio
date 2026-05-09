import { Component } from '@angular/core';
import { WorkHeader } from '../../../_models/WorkHeader';
import { getOtherWorks, projects } from 'src/app/data/projects';

@Component({
  selector: 'app-ece344',
  templateUrl: './ece344.component.html',
  styleUrls: ['./ece344.component.css']
})
export class Ece344Component {

  header: WorkHeader = {
    img: "assets/img/education/uoft.png"
  };

  projects = projects;
  otherWorks = getOtherWorks('ece344');

}

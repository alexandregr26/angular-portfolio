import { Component } from '@angular/core';
import { WorkHeader } from '../../../_models/WorkHeader';
import { getOtherWorks, projects } from 'src/app/data/projects';

@Component({
  selector: 'app-aps360',
  templateUrl: './aps360.component.html',
  styleUrls: ['./aps360.component.css']
})

export class Aps360Component {

  header: WorkHeader = {
    img: "assets/img/experience/Spotify/black-banner-lg.png"
  };

  projects = projects;
  otherWorks = getOtherWorks('aps360');

}

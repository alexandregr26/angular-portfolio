import { Component } from '@angular/core';
import {
  Box,
  Crosshair,
  FileCode2,
  Gamepad2,
  Monitor,
  MonitorUp,
  SlidersHorizontal
} from 'lucide-angular';
import { Skill } from 'src/app/_models/Skill';
import { getOtherWorks, projects } from 'src/app/data/projects';

@Component({
  selector: 'app-fps',
  templateUrl: './fps.component.html',
  styleUrls: ['./fps.component.css']
})
export class FpsComponent {

  sourceIcon = FileCode2;
  overviewIcon = Monitor;
  renderingIcon = Box;
  controlsIcon = SlidersHorizontal;
  gameplayIcon = Crosshair;
  vgaIcon = MonitorUp;
  arcadeIcon = Gamepad2;

  contributions = [
    'caseStudies.fps.contribution1',
    'caseStudies.fps.contribution2',
    'caseStudies.fps.contribution3',
    'caseStudies.fps.contribution4',
    'caseStudies.fps.contribution5',
    'caseStudies.fps.contribution6'
  ];

  technologies: Skill[] = [
    { img: 'assets/img/skills/hard/assembly.png', title: 'Assembly', level: '' },
    { img: 'assets/img/skills/hard/c.png', title: 'C', level: '' },
    { img: 'assets/img/skills/hard/git.png', title: 'Git', level: '' },
    { img: 'assets/img/skills/hard/altera.png', title: 'Altera DE1-SoC', level: '' }
  ];

  projects = projects;
  otherWorks = getOtherWorks('ece243');

}

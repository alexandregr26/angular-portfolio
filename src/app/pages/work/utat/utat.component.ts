import { Component } from '@angular/core';
import {
  Waves,
  Zap
} from 'lucide-angular';
import { Skill } from 'src/app/_models/Skill';
import { getOtherWorks, projects } from 'src/app/data/projects';

@Component({
  selector: 'app-utat',
  templateUrl: './utat.component.html',
  styleUrls: ['./utat.component.css']
})
export class UtatComponent {

  requirements = [
    {
      titleKey: 'caseStudies.utat.requirement1Title',
      bodyKey: 'caseStudies.utat.requirement1Body',
      icon: Zap
    },
    {
      titleKey: 'caseStudies.utat.requirement2Title',
      bodyKey: 'caseStudies.utat.requirement2Body',
      icon: Waves
    }
  ];

  coreComponents = [
    {
      name: '22.2V',
      labelKey: 'caseStudies.utat.battery',
      img: 'assets/img/experience/UTAT/battery.png'
    },
    {
      name: 'LT1495',
      labelKey: 'caseStudies.utat.opAmp',
      img: 'assets/img/experience/UTAT/op-amp.png'
    },
    {
      name: 'LT1389',
      labelKey: 'caseStudies.utat.zener',
      img: 'assets/img/experience/UTAT/diode.png'
    },
    {
      name: 'MOSFET',
      labelKey: 'caseStudies.utat.transistor',
      img: 'assets/img/experience/UTAT/mosfet.png'
    }
  ];

  technologies: Skill[] = [
    { img: 'assets/img/skills/hard/assembly.png', title: 'Assembly', level: '' },
    { img: 'assets/img/skills/hard/c.png', title: 'C', level: 'Advanced' },
    { img: 'assets/img/skills/hard/git.png', title: 'Git', level: '' }
  ];

  projects = projects;
  otherWorks = getOtherWorks('utat');

}

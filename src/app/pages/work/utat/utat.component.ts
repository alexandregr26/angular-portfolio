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
      title: 'Automatically shut off at 18V',
      body: 'Turn off the circuit when the 22V battery voltage reaches 18V to protect components.',
      icon: Zap
    },
    {
      title: 'Minimize current draw once off',
      body: 'Ensure the circuit draws only a minimal amount of current after shutdown.',
      icon: Waves
    }
  ];

  coreComponents = [
    {
      name: '22.2V',
      label: 'Lithium-Ion Battery',
      img: 'assets/img/experience/UTAT/battery.png'
    },
    {
      name: 'LT1495',
      label: 'Op Amp',
      img: 'assets/img/experience/UTAT/op-amp.png'
    },
    {
      name: 'LT1389',
      label: 'Zener Diode',
      img: 'assets/img/experience/UTAT/diode.png'
    },
    {
      name: 'MOSFET',
      label: 'Transistor',
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

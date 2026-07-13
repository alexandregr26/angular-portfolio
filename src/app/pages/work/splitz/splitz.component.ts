import { Component } from '@angular/core';
import {
  Download,
  FolderPlus,
  Lightbulb,
  Keyboard,
  MoonStar,
  MousePointer2,
  PlusCircle
} from 'lucide-angular';
import { Skill } from 'src/app/_models/Skill';
import { getOtherWorks, projects } from 'src/app/data/projects';

@Component({
  selector: 'app-splitz',
  templateUrl: './splitz.component.html',
  styleUrls: ['./splitz.component.css']
})
export class SplitzComponent {

  downloadIcon = Download;
  whyIcon = Lightbulb;

  features = [
    {
      titleKey: 'caseStudies.splitz.feature1Title',
      bodyKey: 'caseStudies.splitz.feature1Body',
      icon: FolderPlus
    },
    {
      titleKey: 'caseStudies.splitz.feature2Title',
      bodyKey: 'caseStudies.splitz.feature2Body',
      icon: MousePointer2
    },
    {
      titleKey: 'caseStudies.splitz.feature3Title',
      bodyKey: 'caseStudies.splitz.feature3Body',
      icon: Keyboard
    },
    {
      titleKey: 'caseStudies.splitz.feature4Title',
      bodyKey: 'caseStudies.splitz.feature4Body',
      icon: MoonStar
    }
  ];

  technologies: Skill[] = [
    { img: 'assets/img/skills/hard/css.png', title: 'CSS', level: 'Advanced' },
    { img: 'assets/img/skills/hard/git.png', title: 'Git', level: '' },
    { img: 'assets/img/skills/hard/html.png', title: 'HTML', level: 'Advanced' },
    { img: 'assets/img/skills/hard/javascript.png', title: 'JavaScript', level: 'Advanced' }
  ];

  projects = projects;
  otherWorks = getOtherWorks('splitz');

}

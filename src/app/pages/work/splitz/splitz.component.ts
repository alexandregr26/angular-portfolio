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
      title: 'Categories for tab organization',
      body: 'Create custom categories to group your tabs and keep everything in order.',
      icon: FolderPlus
    },
    {
      title: 'Drag-and-drop tab movement',
      body: 'Easily move tabs into the right category with a simple drag and drop.',
      icon: MousePointer2
    },
    {
      title: 'Keyboard shortcuts',
      body: 'Quickly switch between categories and manage tabs using shortcuts.',
      icon: Keyboard
    },
    {
      title: 'Light and dark modes',
      body: 'Choose between light and dark themes for a comfortable experience.',
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

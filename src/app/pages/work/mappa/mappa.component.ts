import { Component } from '@angular/core';
import {
  CheckCircle2,
  GraduationCap,
  Layers,
  Map,
  Palette,
  Search,
  Sparkles
} from 'lucide-angular';
import { Skill } from 'src/app/_models/Skill';
import { getOtherWorks, projects } from 'src/app/data/projects';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent {

  overviewIcon = Map;
  highlightsIcon = Sparkles;
  checkIcon = CheckCircle2;
  engineeringIcon = GraduationCap;
  developmentIcon = Layers;

  heroMeta = ['C++', 'OpenStreetMap API', 'EZGL', 'A*'];

  highlights = [
    'caseStudies.mappa.highlight1',
    'caseStudies.mappa.highlight2',
    'caseStudies.mappa.highlight3',
    'caseStudies.mappa.highlight4',
    'caseStudies.mappa.highlight5'
  ];

  features = [
    {
      titleKey: 'caseStudies.mappa.feature1Title',
      pointKeys: [
        'caseStudies.mappa.feature1Point1',
        'caseStudies.mappa.feature1Point2',
        'caseStudies.mappa.feature1Point3'
      ],
      img: 'assets/img/experience/ECE297/search.png',
      icon: Search
    },
    {
      titleKey: 'caseStudies.mappa.feature2Title',
      pointKeys: [
        'caseStudies.mappa.feature2Point1',
        'caseStudies.mappa.feature2Point2',
        'caseStudies.mappa.feature2Point3'
      ],
      img: 'assets/img/experience/ECE297/customizable.png',
      icon: Palette
    },
    {
      titleKey: 'caseStudies.mappa.feature3Title',
      pointKeys: [
        'caseStudies.mappa.feature3Point1',
        'caseStudies.mappa.feature3Point2',
        'caseStudies.mappa.feature3Point3',
        'caseStudies.mappa.feature3Point4'
      ],
      img: 'assets/img/experience/ECE297/visual.png',
      icon: Layers
    }
  ];

  technologies: Skill[] = [
    { img: 'assets/img/skills/hard/cpp.png', title: 'C++', level: '' },
    { img: 'assets/img/skills/hard/qtlogo.png', title: 'Qt Framework', level: '' },
    { img: 'assets/img/skills/hard/osm.png', title: 'OpenStreetMap', level: '' },
    { img: 'assets/img/skills/hard/git.png', title: 'Git', level: '' }
  ];

  projects = projects;
  otherWorks = getOtherWorks('ece297');

}

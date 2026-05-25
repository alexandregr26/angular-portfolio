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
    'Fast and intelligent search with partial and misspelled-name support',
    'Locate intersections and compute shortest paths',
    'Delete past search data to keep the map clean and responsive',
    '100% customizable map with colour schemes and filters',
    'Clear visual hierarchy with zoom-aware details and directions'
  ];

  features = [
    {
      title: 'Powerful Search and Map Interaction',
      points: [
        'Find locations using partial or misspelled queries',
        'Fast map loading and smooth navigation across large urban areas',
        'Responsive panning, zooming, and selection for an intuitive experience'
      ],
      img: 'assets/img/experience/ECE297/search.png',
      icon: Search
    },
    {
      title: 'Routing Algorithms',
      points: [
        'Implemented Dijkstras and A* to compute optimal routes',
        'Supports complex travel queries with high accuracy and efficiency',
        'Visualizes shortest paths with distance and estimated travel time'
      ],
      img: 'assets/img/experience/ECE297/customizable.png',
      icon: Palette
    },
    {
      title: 'Customization & Visualization',
      points: [
        'Customize colour schemes and map style',
        'Filter specific content and highlight features of interest',
        'Zoom-aware clarity at every scale',
        'Preserve visible street directions and clear visual hierarchy'
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

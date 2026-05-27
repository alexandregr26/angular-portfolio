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
    'Implemented a ray tracing engine in C for a 3D FPS game',
    'Developed hardware-level input handling through DE1-SoC switches and push buttons for movement, rotation, strafing, shooting, and game-state control',
    'Implemented distance-based wall and floor shading to create depth, perspective, and a clearer sense of movement through the environment',
    'Created sprite-based game objects for enemies and fireballs, including sampling logic, screen projection, object movement, and visibility checks',
    'Implemented collision behavior for both the player and moving objects, including wall blocking, projectile removal, and enemy movement reversal',
    'Tuned rendering resolution, movement speed, field of view, and distance stepping to balance performance and playability on limited embedded hardware'
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

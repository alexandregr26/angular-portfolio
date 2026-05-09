import { Component } from '@angular/core';
import { Skill } from 'src/app/_models/Skill';
import { WorkHeader } from 'src/app/_models/WorkHeader';
import { getOtherWorks, projects } from 'src/app/data/projects';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {

  header: WorkHeader = {
    img: "assets/img/experience/Amazon/blue.png"
  };

  technologies: Skill[] = [
    { img: "assets/img/skills/hard/css.png", title: "CSS", level: "Advanced" },
    { img: "assets/img/skills/hard/git.png", title: "Git", level: "" },
    { img: "assets/img/skills/hard/html.png", title: "HTML", level: "Advanced" },
    { img: "assets/img/skills/hard/javascript.png", title: "JavaScript", level: "Advanced" },
    { img: "assets/img/skills/hard/react.png", title: "React", level: "Intermediate" },
    { img: "assets/img/skills/hard/redux.png", title: "Redux", level: "Intermediate" }
  ];

  projects = projects;
  otherWorks = getOtherWorks('amazon');

}

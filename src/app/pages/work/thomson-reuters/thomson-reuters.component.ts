import { Component } from '@angular/core';
import { Skill } from 'src/app/_models/Skill';
import { WorkHeader } from 'src/app/_models/WorkHeader';
import { getOtherWorks, projects } from 'src/app/data/projects';

@Component({
  selector: 'app-thomson-reuters',
  templateUrl: './thomson-reuters.component.html',
  styleUrls: ['./thomson-reuters.component.css']
})
export class ThomsonReutersComponent {

  header: WorkHeader = {
    img: "assets/img/experience/ThomsonReuters/orange.png"
  };

  technologies: Skill[] = [
    { img: "assets/img/skills/hard/angular.png", title: "Angular", level: "Advanced" },
    { img: "assets/img/skills/hard/aws.png", title: "AWS", level: "Basic" },
    { img: "assets/img/skills/hard/csharp.png", title: "C#", level: "Advanced" },
    { img: "assets/img/skills/hard/css.png", title: "CSS", level: "Advanced" },
    { img: "assets/img/skills/hard/confluence.png", title: "Confluence", level: "" },
    { img: "assets/img/skills/hard/docker.png", title: "Docker", level: "Basic" },
    { img: "assets/img/skills/hard/git.png", title: "Git", level: "" },
    { img: "assets/img/skills/hard/html.png", title: "HTML", level: "Advanced" },
    { img: "assets/img/skills/hard/javascript.png", title: "JavaScript", level: "Advanced" },
    { img: "assets/img/skills/hard/jira.jpg", title: "Jira", level: "" },
    { img: "assets/img/skills/hard/dotnet.svg", title: ".NET", level: "Intermediate" },
    { img: "assets/img/skills/hard/postman.png", title: "Postman", level: "" },
    { img: "assets/img/skills/hard/swagger.png", title: "Swagger", level: "" }
  ];

  projects = projects;
  otherWorks = getOtherWorks('tr');

}

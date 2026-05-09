import { Component } from '@angular/core';
import { Skill } from 'src/app/_models/Skill';
import { WorkHeader } from 'src/app/_models/WorkHeader';
import { projects } from 'src/app/data/projects';

@Component({
  selector: 'app-coinbase',
  templateUrl: './coinbase.component.html',
  styleUrls: ['./coinbase.component.css']
})
export class CoinbaseComponent {

  header: WorkHeader = {
    img: "assets/img/experience/coinbase/logo-icon.png"
  };

  technologies: Skill[] = [
    { img: "assets/img/skills/hard/ansible.png", title: "Ansible", level: "" },
    { img: "assets/img/skills/hard/aws.png", title: "AWS", level: "Basic" },
    { img: "assets/img/skills/hard/datadog.png", title: "Datadog", level: "" },
    { img: "assets/img/skills/hard/docker.png", title: "Docker", level: "Basic" },
    { img: "assets/img/skills/hard/go.svg", title: "Go", level: "" },
    { img: "assets/img/skills/hard/kubernetes.png", title: "Kubernetes", level: "" },
    { img: "assets/img/skills/hard/langgraph.png", title: "LangGraph", level: "" },
    { img: "assets/img/skills/hard/mcp.png", title: "MCPs", level: "" },
    { img: "assets/img/skills/hard/python.png", title: "Python", level: "Advanced" }
  ];

  projects = projects;

}

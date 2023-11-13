import { Component } from '@angular/core';
import { ProjectBox } from '../../../_models/ProjectBox';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {

  blockchain: ProjectBox = {
    title: "Blockchain Application",
    company: "UofT Engineering Capstone",
    img: "assets/img/experience/Capstone/banner.png",
    route: "/"
  };

  tr: ProjectBox = {
    title: "Software Developer Intern",
    company: "Thomson Reuters",
    img: "assets/img/experience/ThomsonReuters/banner.png",
    route: "/work/reuters"
  };

  threads: ProjectBox = {
    title: "Multithreaded Web Server",
    company: "ECE344",
    img: "assets/img/experience/ECE344/banner.png",
    route: "/work/ECE344"
  };

  mappa: ProjectBox = {
    title: "GIS Application",
    company: "ECE297",
    img: "assets/img/experience/ECE297/banner.png",
    route: "/work/mappa"
  };

  splitz: ProjectBox = {
    title: "Chrome Extension",
    company: "Freelance",
    img: "assets/img/experience/Splitz/banner.png",
    route: "/work/splitz"
  };

  portfolio: ProjectBox = {
    title: "Online Portfolio",
    company: "Freelance",
    img: "assets/img/experience/Portfolio/banner.png",
    route: "/work/portfolio"
  };

  fps: ProjectBox = {
    title: "FPS Game",
    company: "ECE243",
    img: "assets/img/experience/ECE243/banner.png",
    route: "/work/fps"
  };

  utat: ProjectBox = {
    title: "Low Power Sensor",
    company: "UTAT",
    img: "assets/img/experience/UTAT/banner.png",
    route: "/work/utat"
  };

}

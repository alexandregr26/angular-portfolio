import { Component } from '@angular/core';
import { ProjectBox } from '../../../_models/ProjectBox';
import { WorkHeader } from '../../../_models/WorkHeader';

@Component({
  selector: 'app-aps360',
  templateUrl: './aps360.component.html',
  styleUrls: ['./aps360.component.css']
})

export class Aps360Component {

  header: WorkHeader = {
    img: "assets/img/experience/Spotify/black-banner-lg.png"
  };

  blockchain: ProjectBox = {
    title: "Blockchain Application",
    company: "UofT Engineering Capstone",
    img: "assets/img/experience/Capstone/banner.png",
    route: "/work/capstone"
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

  amazon: ProjectBox = {
    title: "Software Engineer Intern",
    company: "Amazon",
    img: "assets/img/experience/Amazon/banner.png",
    route: "/work/amazon"
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

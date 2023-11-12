import { Component } from '@angular/core';
import { ProjectBox } from '../../../_models/ProjectBox';
import { WorkHeader } from '../../../_models/WorkHeader';

@Component({
  selector: 'app-fps',
  templateUrl: './fps.component.html',
  styleUrls: ['./fps.component.css']
})
export class FpsComponent {

  header: WorkHeader = {
    img: "assets/img/education/uoft.png"
  };

  blockchain: ProjectBox = {
    title: "Blockchain Application",
    company: "UofT Engineering Capstone",
    img: "assets/img/experience/Capstone/banner.png",
    route: "/work/amazon"
  };

  tr: ProjectBox = {
    title: "Software Developer Intern",
    company: "Thomson Reuters",
    img: "assets/img/experience/ThomsonReuters/banner.png",
    route: "/work/reuters"
  };

  amazon: ProjectBox = {
    title: "Software Engineer Intern",
    company: "Amazon",
    img: "assets/img/experience/Amazon/banner.png",
    route: "/work/amazon"
  };

  threads: ProjectBox = {
    title: "Multithreaded Web Server",
    company: "ECE344",
    img: "assets/img/experience/ECE344/banner.png",
    route: "/work/amazon"
  };

  mappa: ProjectBox = {
    title: "GIS Application",
    company: "ECE297",
    img: "assets/img/experience/ECE297/banner.png",
    route: "/work/amazon"
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
    route: "/work/amazon"
  };

  utat: ProjectBox = {
    title: "Low Power Sensor",
    company: "UTAT",
    img: "assets/img/experience/UTAT/banner.png",
    route: "/work/utat"
  };

}

import { Component } from '@angular/core';
import { CommunityBox } from '../_models/CommunityBox';
import { Skill } from '../_models/Skill';
import { ProjectBox } from '../_models/ProjectBox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Work
  blockchain: ProjectBox = {
    title: "Blockchain Application",
    company: "UofT Engineering Capstone",
    img: "assets/img/experience/Capstone/banner.png"
  };

  tr: ProjectBox = {
    title: "Software Developer Intern",
    company: "Thomson Reuters",
    img: "assets/img/experience/ThomsonReuters/banner.png"
  };

  amazon: ProjectBox = {
    title: "Software Engineer Intern",
    company: "Amazon",
    img: "assets/img/experience/Amazon/banner.png"
  };

  threads: ProjectBox = {
    title: "Multithreaded Web Server",
    company: "ECE344",
    img: "assets/img/experience/ECE344/banner.png"
  };

  mappa: ProjectBox = {
    title: "GIS Application",
    company: "ECE297",
    img: "assets/img/experience/ECE297/banner.png"
  };

  splitz: ProjectBox = {
    title: "Chrome Extension",
    company: "Freelance",
    img: "assets/img/experience/Splitz/banner.png"
  };

  portfolio: ProjectBox = {
    title: "Online Portfolio",
    company: "Freelance",
    img: "assets/img/experience/Portfolio/banner.png"
  };

  fps: ProjectBox = {
    title: "FPS Game",
    company: "ECE243",
    img: "assets/img/experience/ECE243/banner.png"
  };

  utat: ProjectBox = {
    title: "Low Power Sensor",
    company: "UTAT",
    img: "assets/img/experience/UTAT/banner.png"
  };

  // Skills
  assembly: Skill = {
    img: "assets/img/skills/hard/assembly.png",
    title: "Assembly",
    level: "Advanced"
  };

  c: Skill = {
    img: "assets/img/skills/hard/c.png",
    title: "C",
    level: "Advanced"
  };

  cpp: Skill = {
    img: "assets/img/skills/hard/cpp.png",
    title: "C++",
    level: "Advanced"
  };

  csharp: Skill = {
    img: "assets/img/skills/hard/csharp.png",
    title: "C#",
    level: "Advanced"
  };

  javascript: Skill = {
    img: "assets/img/skills/hard/javascript.png",
    title: "JavaScript",
    level: "Advanced"
  };

  python: Skill = {
    img: "assets/img/skills/hard/python.png",
    title: "Python",
    level: "Advanced"
  };

  angular: Skill = {
    img: "assets/img/skills/hard/angular.png",
    title: "Angular",
    level: "Advanced"
  };

  aws: Skill = {
    img: "assets/img/skills/hard/aws.png",
    title: "AWS",
    level: "Basic"
  };

  css: Skill = {
    img: "assets/img/skills/hard/css.png",
    title: "CSS",
    level: "Advanced"
  };

  docker: Skill = {
    img: "assets/img/skills/hard/docker.png",
    title: "Docker",
    level: "Basic"
  };

  git: Skill = {
    img: "assets/img/skills/hard/git.png",
    title: "Git",
    level: "Advanced"
  };

  html: Skill = {
    img: "assets/img/skills/hard/html.png",
    title: "HTML",
    level: "Advanced"
  };

  matlab: Skill = {
    img: "assets/img/skills/hard/matlab.png",
    title: "Matlab",
    level: "Intermediate"
  };

  multisim: Skill = {
    img: "assets/img/skills/hard/multisim.png",
    title: "Multisim",
    level: "Intermediate"
  };

  mysql: Skill = {
    img: "assets/img/skills/hard/mysql.png",
    title: "MySQL",
    level: "Advanced"
  };

  dotnet: Skill = {
    img: "assets/img/skills/hard/dotnet.png",
    title: ".NET",
    level: "Advanced"
  };

  postgresql: Skill = {
    img: "assets/img/skills/hard/postgresql.png",
    title: "PostGreSQL",
    level: "Advanced"
  };

  react: Skill = {
    img: "assets/img/skills/hard/react.png",
    title: "React",
    level: "Basic"
  };

  english: Skill = {
    img: "assets/img/skills/languages/english.png",
    title: "English",
    level: "Fluent"
  };

  portuguese: Skill = {
    img: "assets/img/skills/languages/portuguese.png",
    title: "Portuguese",
    level: "Fluent"
  };

  spanish: Skill = {
    img: "assets/img/skills/languages/spanish.png",
    title: "Spanish",
    level: "Intermediate"
  };

  french: Skill = {
    img: "assets/img/skills/languages/french.png",
    title: "French",
    level: "Intermediate"
  };

  // Community

  brasa: CommunityBox = {
    img: "assets/img/community/brasa.JPG",
    title: "President - BRASA UofT",
    date: "September 2018 - April 2023",
    description: "My journey with BRASA UofT has been a remarkable odyssey of growth and cultural connection. My active role in promoting Brazilian culture was a rewarding experience and a great source of solace that allowed me to stay close to my roots despite being far from home. I'm proud to have increased BRASA UofT's reach within the Greater Toronto Area and across Canada, fostering a vibrant network of Brazilians. The growth I've witnessed during my time with BRASA, from 10 participants to over 150, stands as a testament to our collective impact on the organization and the enduring strength of our community."
  };

  frosh: CommunityBox = {
    img: "assets/img/community/frosh.JPG",
    title: "Orientation Leader - Engineering Frosh Week",
    date: "April 2020 - September 2022",
    description: "In my role as an orientation leader at the University of Toronto, I had the opportunity to welcome incoming students to our campus and help them embrace the values, customs, and atmosphere of the Faculty of Applied Science & Engineering. I helped lead a group of 44 first-year students throughout the Orientation program, serving as a positive example and assisting these students in their transition from high school to university life."
  };

  smc: CommunityBox = {
    img: "assets/img/community/smc.jpg",
    title: "House President - Sorbara Hall (SMC)",
    date: "September 2019 - April 2020",
    description: "As the House President for my residence floor, I organized and led various house events and meetings to boost the social atmosphere in our living space. Working alongside other residence leaders, I helped create a nurturing and inclusive environment that encouraged participation and mutual respect among all St. Michael's College residents."
  };

  ece: CommunityBox = {
    img: "assets/img/community/ececlub.JPG",
    title: "Finance Director - ECE Club",
    date: "September 2018 - April 2019",
    description: "As the Finance Director for the ECE Club, I assumed a pivotal role in ensuring financial stability and accountability within the ECE Club at the University of Toronto. During the 2018-2019 academic year, I meticulously crafted and managed a comprehensive budget of $40K, overseeing all club expenses with precision and care, contributing to the club's financial health and ability to carry out its mission effectively."
  };

  notl: CommunityBox = {
    img: "assets/img/community/notl.JPG",
    title: "Captain - Niagara-On-The-Lake Soccer Club",
    date: "May 2016 - September 2018",
    description: "My role as soccer captain reinforced my belief in the harmony of individual and collective efforts. As a player, I cultivated an unwavering work ethic and perseverance. These qualities were pivotal in our 2017 Niagara Region Cup win, a remarkable collective achievement. This experience highlighted the power of unity, showcasing that leadership involves inspiring others to reach their potential and fostering a culture where each player's strengths contribute to shared success."
  };

  hc: CommunityBox = {
    img: "assets/img/community/hc.jpg",
    title: "Fundraising Assistant - NCDSB",
    date: "September 2014 - September 2018",
    description: "I actively participated in an annual walk and helped raise funds for building schools in Haiti, supporting infrastructure projects, and helping to break the cycle of poverty. This walk unites students, staff, and local communities from across Niagara towards the common goal of making a positive impact in developing countries."
  };

}

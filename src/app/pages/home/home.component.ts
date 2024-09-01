import { Component } from '@angular/core';
import { CommunityBox } from '../../_models/CommunityBox';
import { Skill } from '../../_models/Skill';
import { projects } from 'src/app/data/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Work
  projects = projects;

  // Skills
  assembly: Skill = {
    img: "assets/img/skills/hard/assembly.png",
    title: "Assembly",
    level: "Intermediate"
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

  typescript: Skill = {
    img: "assets/img/skills/hard/typescript.png",
    title: "TypeScript",
    level: "Intermediate"
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

  expo: Skill = {
    img: "assets/img/skills/hard/expo.jfif",
    title: "Expo",
    level: "Basic"
  };

  express: Skill = {
    img: "assets/img/skills/hard/express.png",
    title: "Express",
    level: "Intermediate"
  };

  figma: Skill = {
    img: "assets/img/skills/hard/figma.png",
    title: "Figma",
    level: "Basic"
  };

  flask: Skill = {
    img: "assets/img/skills/hard/flask.png",
    title: "Flask",
    level: "Basic"
  };

  node: Skill = {
    img: "assets/img/skills/hard/node.jpg",
    title: "Node.js",
    level: "Advanced"
  };

  redux: Skill = {
    img: "assets/img/skills/hard/redux.png",
    title: "Redux",
    level: "Intermediate"
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
    level: ""
  };

  confluence: Skill = {
    img: "assets/img/skills/hard/confluence.png",
    title: "Confluence",
    level: ""
  };

  jira: Skill = {
    img: "assets/img/skills/hard/jira.jpg",
    title: "Jira",
    level: ""
  };

  postman: Skill = {
    img: "assets/img/skills/hard/postman.png",
    title: "Postman",
    level: ""
  };

  vs: Skill = {
    img: "assets/img/skills/hard/vs.png",
    title: "Visual Studio",
    level: ""
  };

  vscode: Skill = {
    img: "assets/img/skills/hard/vscode.jpg",
    title: "VS Code",
    level: ""
  };

  swagger: Skill = {
    img: "assets/img/skills/hard/swagger.png",
    title: "Swagger",
    level: ""
  };

  html: Skill = {
    img: "assets/img/skills/hard/html.png",
    title: "HTML",
    level: "Advanced"
  };

  matlab: Skill = {
    img: "assets/img/skills/hard/matlab.png",
    title: "MATLAB",
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
    img: "assets/img/skills/hard/dotnet.svg",
    title: ".NET",
    level: "Intermediate"
  };

  postgresql: Skill = {
    img: "assets/img/skills/hard/postgresql.png",
    title: "PostgreSQL",
    level: "Intermediate"
  };

  react: Skill = {
    img: "assets/img/skills/hard/react.png",
    title: "React",
    level: "Intermediate"
  };

  english: Skill = {
    img: "assets/img/skills/languages/flags/canada.jpg",
    title: "English",
    level: "Fluent"
  };

  portuguese: Skill = {
    img: "assets/img/skills/languages/flags/brazil.png",
    title: "Portuguese",
    level: "Fluent"
  };

  spanish: Skill = {
    img: "assets/img/skills/languages/flags/spain.png",
    title: "Spanish",
    level: "Beginner"
  };

  french: Skill = {
    img: "assets/img/skills/languages/flags/france.png",
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
    description: "As an orientation leader at the University of Toronto, I had the pleasure of welcoming incoming students to campus and introducing them to the values and culture of the Faculty of Applied Science & Engineering. Guiding a group of 44 first-year students through the Orientation program, I served as a positive role model, helping them transition smoothly from high school to university life."
  };

  smc: CommunityBox = {
    img: "assets/img/community/smc.jpg",
    title: "House President - Sorbara Hall (SMC)",
    date: "September 2019 - April 2020",
    description: "As House President of my residence floor, I organized and led events and meetings to enhance our community's social atmosphere. Collaborating with other residence leaders, I focused on fostering a welcoming and inclusive environment that encouraged participation and mutual respect among all St. Michael's College residents."
  };

  ece: CommunityBox = {
    img: "assets/img/community/ececlub.JPG",
    title: "Finance Director - ECE Club",
    date: "September 2018 - April 2019",
    description: "As Finance Director for the ECE Club, I played a crucial role in maintaining the club's financial stability and accountability. I carefully created and managed a $40K budget, overseeing all expenses with precision and diligence. My efforts ensured the club's financial health, enabling it to carry out its mission and support many student initiatives."
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
    description: "I participated in an annual walk to raise funds for building schools and supporting infrastructure projects in Haiti, contributing to efforts to break the cycle of poverty. This event brought together students, staff, and local communities across Niagara with the shared goal of making a positive impact in developing countries."
  };

}

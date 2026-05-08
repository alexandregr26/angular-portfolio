import { Component } from '@angular/core';
import { CommunityBox } from '../../_models/CommunityBox';
import { Skill } from '../../_models/Skill';
import { ProjectBox } from '../../_models/ProjectBox';
import { projects } from 'src/app/data/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Work
  projects = projects;

  professionalExperiences = [
    {
      company: "Coinbase",
      role: "Software Engineer",
      type: "Professional experience",
      img: this.projects['coinbase'].img,
      logoDesktop: "assets/img/experience/coinbase/logo-desktop.png",
      route: null,
      date: "Jan 2025 – Present",
      summary: "Software engineering experience in a high-stakes financial technology environment.",
      scope: "Product engineering, developer platforms, production infrastructure, and AI-powered operational tooling.",
      impact: "Built in environments where reliability, clarity, and execution quality matter.",
      technologies: ["Ansible", "AWS", "Datadog", "Docker", "Go", "Kubernetes", "LangGraph", "MCPs", "Python"]
    },
    {
      company: "Thomson Reuters",
      role: "Software Developer Intern",
      type: "Internship",
      img: this.projects['tr'].img,
      logoDesktop: "assets/img/experience/ThomsonReuters/logo-desktop.png",
      route: this.projects['tr'].route,
      date: "Sep 2021 – Sep 2022",
      summary: "Worked across backend APIs, authorization flows, onboarding automation, and responsive interfaces.",
      scope: "REST APIs, OAuth-oriented identity work, user session management, Angular UI development, and Agile delivery.",
      impact: "Improved usability, performance, and onboarding workflows across internal and user-facing services.",
      technologies: ["Angular", "AWS", "C#", "Docker", ".NET", "OAuth", "Swagger"]
    },
    {
      company: "Amazon",
      role: "Software Engineer Intern",
      type: "Internship",
      img: this.projects['amazon'].img,
      logoDesktop: "assets/img/experience/Amazon/logo-desktop.png",
      route: this.projects['amazon'].route,
      date: "May 2021 – Aug 2021",
      summary: "Built a React and Redux web feature for advertisers to visualize campaign performance.",
      scope: "Frontend feature development, design reviews, UAT, UI testing, and post-launch performance analysis.",
      impact: "Improved user engagement and conversion rates by 10%, based on the existing case-study writeup.",
      technologies: ["Figma", "React", "Redux"]
    }
  ];

  featuredProjects = [
    {
      ...this.projects['blockchain'],
      context: "Capstone · Healthcare systems",
      summary: "Patient-centric electronic health record sharing with Hyperledger Fabric and encrypted file distribution.",
      technologies: ["Hyperledger Fabric", "JavaScript", "API design", "Encryption"]
    },
    {
      ...this.projects['aps360'],
      context: "Applied machine learning",
      summary: "Neural network model for predicting song popularity from audio features and dataset preparation.",
      technologies: ["PyTorch", "Python", "NumPy", "Data modeling"]
    },
    {
      ...this.projects['ece297'],
      context: "GIS application",
      summary: "A desktop mapping application focused on search, visualization, route interaction, and user-centered design.",
      technologies: ["C++", "GIS", "UI design", "Algorithms"]
    }
  ];

  secondaryProjects: ProjectBox[] = [
    this.projects['ece344'],
    this.projects['splitz'],
    this.projects['ece243'],
    this.projects['utat']
  ];

  moveLiquidGlass(event: PointerEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    target.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }

  resetLiquidGlass(event: PointerEvent): void {
    const target = event.currentTarget as HTMLElement;
    target.style.setProperty('--mx', '50%');
    target.style.setProperty('--my', '50%');
  }

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

  ansible: Skill = {
    img: "assets/img/skills/hard/ansible.png",
    title: "Ansible",
    level: "Intermediate"
  };

  datadog: Skill = {
    img: "assets/img/skills/hard/datadog.png",
    title: "Datadog",
    level: "Intermediate"
  };

  kubernetes: Skill = {
    img: "assets/img/skills/hard/kubernetes.png",
    title: "Kubernetes",
    level: "Intermediate"
  };

  langgraph: Skill = {
    img: "assets/img/skills/hard/langgraph.png",
    title: "LangGraph",
    level: "Intermediate"
  };

  mcp: Skill = {
    img: "assets/img/skills/hard/mcp.png",
    title: "MCP",
    level: "Intermediate"
  };

  numpy: Skill = {
    img: "assets/img/skills/hard/numpy.png",
    title: "NumPy",
    level: "Intermediate"
  };

  pytorch: Skill = {
    img: "assets/img/skills/hard/pytorch.png",
    title: "PyTorch",
    level: "Intermediate"
  };

  skillGroups = [
    {
      title: "Core Engineering",
      description: "Languages and systems foundations used to reason about performance, correctness, and architecture.",
      skills: [this.python, this.c, this.cpp, this.csharp, this.typescript, this.javascript, this.postgresql, this.html, this.css]
    },
    {
      title: "Application Development",
      description: "Frameworks and tools for building polished, maintainable web and application experiences.",
      skills: [this.angular, this.react, this.redux, this.node, this.express, this.dotnet, this.figma, this.expo, this.flask, this.postman, this.swagger]
    },
    {
      title: "AI, Data & Infrastructure",
      description: "Practical tooling for AI workflows, cloud systems, deployment, observability, and platform work.",
      skills: [this.pytorch, this.numpy, this.langgraph, this.mcp, this.aws, this.docker, this.kubernetes, this.datadog, this.ansible, this.aws]
    },
    {
      title: "Communication",
      description: "Languages that support collaboration across teams, users, and international environments.",
      skills: [this.english, this.portuguese, this.french]
    }
  ];

  // Community

  brasa: CommunityBox = {
    img: "assets/img/community/brasa.JPG",
    title: "President - BRASA UofT",
    date: "September 2018 - April 2023",
    description: "My journey with BRASA UofT has been a remarkable odyssey of growth and cultural connection. My active role in promoting Brazilian culture was a rewarding experience and a great source of solace that allowed me to stay close to my roots despite being far from home. I'm proud to have increased BRASA UofT's reach within the GTA and across Canada, fostering a vibrant network of Brazilians. The growth I've witnessed during my time with BRASA, from 10 participants to 150+, stands as a testament to our collective impact on the organization and the enduring strength of our community."
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

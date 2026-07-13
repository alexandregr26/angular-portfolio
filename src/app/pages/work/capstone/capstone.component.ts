import { Component } from '@angular/core';
import { getOtherWorks, projects } from 'src/app/data/projects';
import {
  Blocks,
  Database,
  Eye,
  FileUp,
  FileLock,
  Fingerprint,
  Link,
  Monitor,
  Network,
  Route,
  Share2,
  ShieldCheck,
  UserRound
} from 'lucide-angular';
import { Skill } from 'src/app/_models/Skill';

@Component({
  selector: 'app-capstone',
  templateUrl: './capstone.component.html',
  styleUrls: ['./capstone.component.css']
})
export class CapstoneComponent {

  heroFlow = [
    {
      titleKey: 'caseStudies.capstone.flow1Title',
      descriptionKey: 'caseStudies.capstone.flow1Body',
      icon: FileUp
    },
    {
      titleKey: 'caseStudies.capstone.flow2Title',
      descriptionKey: 'caseStudies.capstone.flow2Body',
      icon: Database
    },
    {
      titleKey: 'caseStudies.capstone.flow3Title',
      descriptionKey: 'caseStudies.capstone.flow3Body',
      icon: Blocks
    },
    {
      titleKey: 'caseStudies.capstone.flow4Title',
      descriptionKey: 'caseStudies.capstone.flow4Body',
      icon: Share2
    }
  ];

  problemPillars = [
    {
      titleKey: 'caseStudies.capstone.pillar1Title',
      icon: UserRound,
      detailKey: 'caseStudies.capstone.pillar1Body'
    },
    {
      titleKey: 'caseStudies.capstone.pillar2Title',
      icon: ShieldCheck,
      detailKey: 'caseStudies.capstone.pillar2Body'
    },
    {
      titleKey: 'caseStudies.capstone.pillar3Title',
      icon: Network,
      detailKey: 'caseStudies.capstone.pillar3Body'
    }
  ];

  chainIcon = Link;

  blockchainReasons = [
    {
      titleKey: 'caseStudies.capstone.reason1Title',
      icon: Eye,
      textKey: 'caseStudies.capstone.reason1Body'
    },
    {
      titleKey: 'caseStudies.capstone.reason2Title',
      icon: Fingerprint,
      textKey: 'caseStudies.capstone.reason2Body'
    },
    {
      titleKey: 'caseStudies.capstone.reason3Title',
      icon: Blocks,
      textKey: 'caseStudies.capstone.reason3Body'
    }
  ];

  systemModules = [
    {
      titleKey: 'caseStudies.capstone.module1Title',
      icon: Monitor,
      bodyKey: 'caseStudies.capstone.module1Body'
    },
    {
      titleKey: 'caseStudies.capstone.module2Title',
      icon: FileLock,
      bodyKey: 'caseStudies.capstone.module2Body'
    },
    {
      titleKey: 'caseStudies.capstone.module3Title',
      icon: Database,
      bodyKey: 'caseStudies.capstone.module3Body'
    },
    {
      titleKey: 'caseStudies.capstone.module4Title',
      icon: Blocks,
      bodyKey: 'caseStudies.capstone.module4Body'
    },
    {
      titleKey: 'caseStudies.capstone.module5Title',
      icon: Route,
      bodyKey: 'caseStudies.capstone.module5Body'
    }
  ];

  contributions = [
    {
      titleKey: 'caseStudies.capstone.contribution1Title',
      summaryKey: 'caseStudies.capstone.contribution1Body'
    },
    {
      titleKey: 'caseStudies.capstone.contribution2Title',
      summaryKey: 'caseStudies.capstone.contribution2Body'
    },
    {
      titleKey: 'caseStudies.capstone.contribution3Title',
      summaryKey: 'caseStudies.capstone.contribution3Body'
    },
    {
      titleKey: 'caseStudies.capstone.contribution4Title',
      summaryKey: 'caseStudies.capstone.contribution4Body'
    }
  ];

  stackSummary = [
    {
      title: 'Git',
      img: 'assets/img/skills/hard/git.png',
      level: ''
    },
    {
      title: 'Hyperledger Fabric',
      img: 'assets/img/experience/Capstone/hyperledger.png',
      level: ''
    },
    {
      title: 'IPFS',
      img: 'assets/img/skills/hard/ipfs.png',
      level: ''
    },
    {
      title: 'JavaScript',
      img: 'assets/img/skills/hard/javascript.png',
      level: ''
    },
    {
      title: 'Node.js',
      img: 'assets/img/skills/hard/node.jpg',
      level: ''
    }
  ] as Skill[];

  projects = projects;
  otherWorks = getOtherWorks('blockchain');

}

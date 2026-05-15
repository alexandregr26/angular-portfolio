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
      title: 'Upload',
      description: 'Records are encrypted and prepared.',
      icon: FileUp
    },
    {
      title: 'Store',
      description: 'Encrypted files are stored on IPFS.',
      icon: Database
    },
    {
      title: 'Record',
      description: 'Transactions are recorded on Hyperledger Fabric.',
      icon: Blocks
    },
    {
      title: 'Share',
      description: 'Access is granted with permissions.',
      icon: Share2
    }
  ];

  problemPillars = [
    {
      title: 'Patient Centricity',
      icon: UserRound,
      detail: 'Patients often lack direct control over where their records are stored, who can access them, and how easily they can share them across providers.'
    },
    {
      title: 'Security Concerns',
      icon: ShieldCheck,
      detail: 'Health records contain sensitive personal information that must be protected from unauthorized access, tampering, and improper disclosure.'
    },
    {
      title: 'Interoperability',
      icon: Network,
      detail: 'Healthcare providers often rely on separate systems, making it difficult to exchange records cleanly across hospitals, labs, clinics, and patients.'
    }
  ];

  chainIcon = Link;

  blockchainReasons = [
    {
      title: 'Transparency',
      icon: Eye,
      text: 'All transactions are visible and verifiable across the network, ensuring that information flows openly and can be independently validated. This enhances accountability and prevents information blockage.'
    },
    {
      title: 'Immutability',
      icon: Fingerprint,
      text: 'Once a record is written to the blockchain, it cannot be altered or deleted. This preserves the integrity of past records, ensuring a trustworthy history and preventing information corruption.'
    },
    {
      title: 'Decentralization',
      icon: Blocks,
      text: 'Data is distributed across multiple nodes rather than stored in a single central authority. This removes single points of failure, reduces dependency on one entity, and improves resilience and information security.'
    }
  ];

  systemModules = [
    {
      title: 'Front End',
      icon: Monitor,
      body: 'Web interface for users to interact with the system securely.'
    },
    {
      title: 'File Encryption',
      icon: FileLock,
      body: 'AES256 + HMAC encryption for secure file & data protection.'
    },
    {
      title: 'IPFS Storage',
      icon: Database,
      body: 'Decentralized file storage for encrypted health records.'
    },
    {
      title: 'Hyperledger Fabric',
      icon: Blocks,
      body: 'Permissioned blockchain layer for immutable and verifiable records.'
    },
    {
      title: 'Web API',
      icon: Route,
      body: 'Exposes blockchain functions through a RESTful API.'
    }
  ];

  contributions = [
    {
      title: 'Blockchain Research',
      summary: 'Researched Hyperledger Fabrics architecture, transaction flow, user authentication model, and chaincode execution process to define how a permissioned blockchain layer could support the application.'
    },
    {
      title: 'Hyperledger Fabric Network Setup',
      summary: 'Configured and adapted a Hyperledger Fabric sample network for the project by modifying organizations, removing unnecessary resources, and resolving compatibility issues so the blockchain layer could support healthcare record workflows.'
    },
    {
      title: 'Chaincode Development',
      summary: 'Implemented the blockchain business logic for registration, authentication, record transactions, and data retrieval, creating 16 deterministic chaincode functions for network validation.'
    },
    {
      title: 'API Integration',
      summary: 'Built a 14-endpoint API that connected the web application to the Hyperledger Fabric chaincode, exposed blockchain actions to the front end, and enforced JWT-based role access control.'
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

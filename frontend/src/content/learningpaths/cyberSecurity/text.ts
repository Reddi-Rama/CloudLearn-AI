/*
 * CloudLearn AI — Cybersecurity Learning Path
 */

export interface LearningPathTopicGroup {
  title: string;
  items: string[];
}

export interface LearningPathStage {
  id: number;
  title: string;

  topics: string[];

  topicDetails: LearningPathTopicGroup[];

  understanding?: string;

  practice?: string;

  project: string;

  achievement?: string;
}

export interface CertificationGuidance {
  description: string[];

  priority: string[];

  conclusion: string;
}

export interface FinalCapstone {
  title: string;

  description: string;

  components: LearningPathTopicGroup[];

  outcome: string;
}

export interface LearningPathContent {
  title: string;

  subtitle: string;

  description: string;

  totalStages: number;

  stages: LearningPathStage[];

  projectProgression: string[];

  certificationGuidance: CertificationGuidance;

  finalCapstone: FinalCapstone;

  achievementPath: string[];

  learningPhilosophy: string[];
}

const cyberSecurityPath: LearningPathContent = {
  /* ============================================================
     PATH INFORMATION
     ============================================================ */

  title: "Cybersecurity Learning Path",

  subtitle:
    "From Security Foundations to Cybersecurity Engineering and Architecture",

  description:
    "A structured learning path that takes students from the fundamentals of cybersecurity to protecting applications, networks, systems, identities, cloud environments, and organizations against modern security threats.",

  totalStages: 23,

  /* ============================================================
     STAGES
     ============================================================ */

  stages: [
    {
      id: 1,

      title: "Cybersecurity Foundations",

      topics: [
        "What Is Cybersecurity",
        "CIA Triad",
        "Security Principles",
        "Threats & Risks",
        "Security Roles",
      ],

      topicDetails: [
        {
          title: "Cybersecurity Foundations",
          items: [
            "What Is Cybersecurity",
            "CIA Triad",
            "Security Principles",
            "Threats & Risks",
            "Security Roles",
          ],
        },
      ],

      understanding:
        "Learn what cybersecurity protects, why security matters, and how organizations think about threats and risk.",

      practice:
        "Identify common security risks and understand confidentiality, integrity, availability, authentication, authorization, and accountability.",

      project:
        "Build a Personal Security Assessment.",

      achievement:
        "Cybersecurity Foundations",
    },

    {
      id: 2,

      title: "Computer & Operating System Foundations",

      topics: [
        "Computer Architecture",
        "Operating Systems",
        "Processes & Services",
        "Files & Permissions",
        "System Administration",
      ],

      topicDetails: [
        {
          title: "Computer & Operating System Foundations",
          items: [
            "Computer Architecture",
            "Operating Systems",
            "Processes & Services",
            "Files & Permissions",
            "System Administration",
          ],
        },
      ],

      understanding:
        "Learn how computers and operating systems work so security problems can be understood at the system level.",

      practice:
        "Explore processes, services, permissions, users, files, and system configurations.",

      project:
        "Build a Secure System Configuration Lab.",

      achievement:
        "System Security Foundations",
    },

    {
      id: 3,

      title: "Networking Foundations",

      topics: [
        "OSI & TCP/IP",
        "IP Addressing",
        "Ports & Protocols",
        "DNS",
        "Network Devices",
      ],

      topicDetails: [
        {
          title: "Networking",
          items: [
            "OSI & TCP/IP",
            "IP Addressing",
            "Ports & Protocols",
            "DNS",
            "Network Devices",
          ],
        },
      ],

      understanding:
        "Learn how systems communicate and where security controls can be applied.",

      practice:
        "Understand network traffic, protocols, addressing, ports, and common network infrastructure.",

      project:
        "Build a Network Security Analysis Lab.",

      achievement:
        "Cyber Networking Foundations",
    },

    {
      id: 4,

      title: "Linux & Command Line",

      topics: [
        "Linux Fundamentals",
        "Shell Commands",
        "Users & Permissions",
        "Processes",
        "System Logs",
      ],

      topicDetails: [
        {
          title: "Linux Security",
          items: [
            "Linux Fundamentals",
            "Shell Commands",
            "Users & Permissions",
            "Processes",
            "System Logs",
          ],
        },
      ],

      understanding:
        "Learn the Linux skills commonly required for security administration and analysis.",

      practice:
        "Manage users, permissions, processes, services, files, and system logs.",

      project:
        "Build a Linux Security Administration Lab.",

      achievement:
        "Linux Security Administration",
    },

    {
      id: 5,

      title: "Security Fundamentals",

      topics: [
        "Authentication",
        "Authorization",
        "Access Control",
        "Least Privilege",
        "Defense in Depth",
      ],

      topicDetails: [
        {
          title: "Security Fundamentals",
          items: [
            "Authentication",
            "Authorization",
            "Access Control",
            "Least Privilege",
            "Defense in Depth",
          ],
        },
      ],

      understanding:
        "Learn the core principles used to protect systems and control access.",

      practice:
        "Design access controls based on roles, permissions, and least-privilege principles.",

      project:
        "Build an Access Control System.",

      achievement:
        "Security Principles",
    },

    {
      id: 6,

      title: "Cryptography",

      topics: [
        "Encryption",
        "Hashing",
        "Digital Signatures",
        "Public Key Cryptography",
        "TLS Fundamentals",
      ],

      topicDetails: [
        {
          title: "Cryptography",
          items: [
            "Encryption",
            "Hashing",
            "Digital Signatures",
            "Public Key Cryptography",
            "TLS Fundamentals",
          ],
        },
      ],

      understanding:
        "Learn how cryptography protects information and enables secure communication.",

      practice:
        "Understand encryption, hashing, keys, digital signatures, certificates, and TLS.",

      project:
        "Build a Secure Data Communication System.",

      achievement:
        "Applied Cryptography Foundations",
    },

    {
      id: 7,

      title: "Network Security",

      topics: [
        "Firewalls",
        "Network Segmentation",
        "VPN Concepts",
        "IDS & IPS",
        "Secure Network Architecture",
      ],

      topicDetails: [
        {
          title: "Network Security",
          items: [
            "Firewalls",
            "Network Segmentation",
            "VPN Concepts",
            "IDS & IPS",
            "Secure Network Architecture",
          ],
        },
      ],

      understanding:
        "Learn how organizations protect networks from unauthorized access and suspicious activity.",

      practice:
        "Design security zones, access controls, monitoring points, and network defenses.",

      project:
        "Build a Secure Network Design.",

      achievement:
        "Network Security",
    },

    {
      id: 8,

      title: "Web & Application Security",

      topics: [
        "Web Security Fundamentals",
        "Common Web Vulnerabilities",
        "Secure Authentication",
        "Input Validation",
        "Secure API Design",
      ],

      topicDetails: [
        {
          title: "Web Security",
          items: [
            "Web Security Fundamentals",
            "Common Web Vulnerabilities",
            "Secure Authentication",
            "Input Validation",
            "Secure API Design",
          ],
        },
      ],

      understanding:
        "Learn how web applications can introduce security risks and how developers can prevent them.",

      practice:
        "Identify security weaknesses in authorized learning environments and apply appropriate defensive fixes.",

      project:
        "Build a Security-Hardened Web Application.",

      achievement:
        "Web Application Security",
    },

    {
      id: 9,

      title: "Secure Programming",

      topics: [
        "Secure Coding Principles",
        "Input Validation",
        "Error Handling",
        "Dependency Security",
        "Secrets Management",
      ],

      topicDetails: [
        {
          title: "Secure Programming",
          items: [
            "Secure Coding Principles",
            "Input Validation",
            "Error Handling",
            "Dependency Security",
            "Secrets Management",
          ],
        },
      ],

      understanding:
        "Learn how security should be incorporated into software from the beginning rather than added only after development.",

      practice:
        "Apply secure coding practices and identify weaknesses in application code.",

      project:
        "Build a Secure Application Development Project.",

      achievement:
        "Secure Software Development",
    },

    {
      id: 10,

      title: "Identity & Access Management",

      topics: [
        "Identity",
        "Authentication",
        "Authorization",
        "MFA",
        "Identity Lifecycle",
      ],

      topicDetails: [
        {
          title: "Identity & Access",
          items: [
            "Identity",
            "Authentication",
            "Authorization",
            "MFA",
            "Identity Lifecycle",
          ],
        },
      ],

      understanding:
        "Learn how organizations manage digital identities and control access to resources.",

      practice:
        "Design roles, permissions, authentication methods, and identity lifecycle processes.",

      project:
        "Build an Enterprise IAM Design.",

      achievement:
        "Identity & Access Management",
    },

    {
      id: 11,

      title: "Vulnerability Management",

      topics: [
        "Vulnerability Concepts",
        "Asset Discovery",
        "Risk Assessment",
        "Vulnerability Prioritization",
        "Remediation",
      ],

      topicDetails: [
        {
          title: "Vulnerability Management",
          items: [
            "Vulnerability Concepts",
            "Asset Discovery",
            "Risk Assessment",
            "Vulnerability Prioritization",
            "Remediation",
          ],
        },
      ],

      understanding:
        "Learn how security teams identify weaknesses and prioritize them according to risk.",

      practice:
        "Assess authorized environments, document findings, prioritize risks, and recommend remediation.",

      project:
        "Create a Vulnerability Assessment Report.",

      achievement:
        "Vulnerability Management",
    },

    {
      id: 12,

      title: "Security Operations",

      topics: [
        "Security Monitoring",
        "Logs & Events",
        "SIEM Concepts",
        "Alert Analysis",
        "Security Operations Center",
      ],

      topicDetails: [
        {
          title: "Security Operations",
          items: [
            "Security Monitoring",
            "Logs & Events",
            "SIEM Concepts",
            "Alert Analysis",
            "Security Operations Center",
          ],
        },
      ],

      understanding:
        "Learn how security teams monitor systems and investigate suspicious activity.",

      practice:
        "Analyze logs, understand security events, investigate alerts, and document findings.",

      project:
        "Build a Security Monitoring Dashboard.",

      achievement:
        "Security Operations",
    },

    {
      id: 13,

      title: "Threat Intelligence",

      topics: [
        "Threat Intelligence",
        "Indicators of Compromise",
        "Threat Actors",
        "Threat Modeling",
        "Risk Intelligence",
      ],

      topicDetails: [
        {
          title: "Threat Intelligence",
          items: [
            "Threat Intelligence",
            "Indicators of Compromise",
            "Threat Actors",
            "Threat Modeling",
            "Risk Intelligence",
          ],
        },
      ],

      understanding:
        "Learn how organizations gather and interpret information about security threats.",

      practice:
        "Analyze threat information, identify relevant indicators, and connect threats with potential risks.",

      project:
        "Create a Threat Intelligence Report.",

      achievement:
        "Cyber Threat Intelligence",
    },

    {
      id: 14,

      title: "Incident Response",

      topics: [
        "Incident Preparation",
        "Detection",
        "Containment",
        "Eradication",
        "Recovery",
      ],

      topicDetails: [
        {
          title: "Incident Response",
          items: [
            "Incident Preparation",
            "Detection",
            "Containment",
            "Eradication",
            "Recovery",
          ],
        },
      ],

      understanding:
        "Learn how security teams respond to incidents in a structured and controlled manner.",

      practice:
        "Work through incident scenarios, analyze evidence, document decisions, and develop recovery plans.",

      project:
        "Conduct an Incident Response Simulation.",

      achievement:
        "Incident Response",
    },

    {
      id: 15,

      title: "Digital Forensics",

      topics: [
        "Digital Evidence",
        "Evidence Handling",
        "File & System Analysis",
        "Timeline Analysis",
        "Forensic Reporting",
      ],

      topicDetails: [
        {
          title: "Digital Forensics",
          items: [
            "Digital Evidence",
            "Evidence Handling",
            "File & System Analysis",
            "Timeline Analysis",
            "Forensic Reporting",
          ],
        },
      ],

      understanding:
        "Learn how digital evidence is collected, preserved, analyzed, and documented.",

      practice:
        "Analyze prepared forensic datasets and construct evidence-based timelines.",

      project:
        "Conduct a Digital Forensics Investigation.",

      achievement:
        "Digital Forensics Foundations",
    },

    {
      id: 16,

      title: "Security Testing",

      topics: [
        "Security Testing Concepts",
        "Security Assessment",
        "Web Security Testing",
        "API Security Testing",
        "Remediation",
      ],

      topicDetails: [
        {
          title: "Security Testing",
          items: [
            "Security Testing Concepts",
            "Security Assessment",
            "Web Security Testing",
            "API Security Testing",
            "Remediation",
          ],
        },
      ],

      understanding:
        "Learn how organizations safely evaluate the security of systems they own or are authorized to test.",

      practice:
        "Perform controlled security assessments in dedicated lab environments and document vulnerabilities and remediation steps.",

      project:
        "Conduct an Authorized Security Assessment.",

      achievement:
        "Security Testing",
    },

    {
      id: 17,

      title: "Security Engineering",

      topics: [
        "Security Architecture",
        "Secure Design",
        "Zero Trust",
        "Defense in Depth",
        "Security Controls",
      ],

      topicDetails: [
        {
          title: "Security Engineering",
          items: [
            "Security Architecture",
            "Secure Design",
            "Zero Trust",
            "Defense in Depth",
            "Security Controls",
          ],
        },
      ],

      understanding:
        "Move from identifying security problems to designing systems that are secure by design.",

      practice:
        "Design security controls, trust boundaries, access models, and layered defenses.",

      project:
        "Build a Secure Enterprise Architecture.",

      achievement:
        "Security Engineering",
    },

    {
      id: 18,

      title: "Cloud Security",

      topics: [
        "Cloud Security Fundamentals",
        "Cloud IAM",
        "Network Security",
        "Data Protection",
        "Cloud Monitoring",
      ],

      topicDetails: [
        {
          title: "Cloud Security",
          items: [
            "Cloud Security Fundamentals",
            "Cloud IAM",
            "Network Security",
            "Data Protection",
            "Cloud Monitoring",
          ],
        },
      ],

      understanding:
        "Learn how cloud environments introduce new security responsibilities and architectural considerations.",

      practice:
        "Secure identities, networks, data, workloads, and monitoring within controlled cloud environments.",

      project:
        "Build a Secure Cloud Environment.",

      achievement:
        "Cloud Security Engineering",
    },

    {
      id: 19,

      title: "DevSecOps",

      topics: [
        "Secure SDLC",
        "Security Automation",
        "Dependency Scanning",
        "Container Security",
        "CI/CD Security",
      ],

      topicDetails: [
        {
          title: "DevSecOps",
          items: [
            "Secure SDLC",
            "Security Automation",
            "Dependency Scanning",
            "Container Security",
            "CI/CD Security",
          ],
        },
      ],

      understanding:
        "Learn how security can become part of the software development and deployment lifecycle.",

      practice:
        "Integrate security checks into development and CI/CD workflows.",

      project:
        "Build a Secure CI/CD Pipeline.",

      achievement:
        "DevSecOps Engineering",
    },

    {
      id: 20,

      title: "Container & Kubernetes Security",

      topics: [
        "Container Security",
        "Image Security",
        "Kubernetes Security",
        "Secrets",
        "Runtime Security",
      ],

      topicDetails: [
        {
          title: "Container Security",
          items: [
            "Container Security",
            "Image Security",
            "Kubernetes Security",
            "Secrets",
            "Runtime Security",
          ],
        },
      ],

      understanding:
        "Learn how containerized and orchestrated environments introduce additional security considerations.",

      practice:
        "Secure container images, configurations, workloads, secrets, and runtime environments.",

      project:
        "Build a Secure Container Platform.",

      achievement:
        "Container Security Engineering",
    },

    {
      id: 21,

      title: "Security Governance & Risk",

      topics: [
        "Security Governance",
        "Risk Management",
        "Security Policies",
        "Compliance Concepts",
        "Security Auditing",
      ],

      topicDetails: [
        {
          title: "Security Governance",
          items: [
            "Security Governance",
            "Risk Management",
            "Security Policies",
            "Compliance Concepts",
            "Security Auditing",
          ],
        },
      ],

      understanding:
        "Learn how organizations establish security programs, manage risk, and maintain security standards.",

      practice:
        "Create security policies, assess risks, define controls, and document governance requirements.",

      project:
        "Build an Enterprise Security Program.",

      achievement:
        "Cybersecurity Governance",
    },

    {
      id: 22,

      title: "Advanced Cybersecurity",

      topics: [
        "Advanced Threat Detection",
        "Security Automation",
        "Detection Engineering",
        "Threat Hunting",
        "Advanced Security Architecture",
      ],

      topicDetails: [
        {
          title: "Advanced Cybersecurity",
          items: [
            "Advanced Threat Detection",
            "Security Automation",
            "Detection Engineering",
            "Threat Hunting",
            "Advanced Security Architecture",
          ],
        },
      ],

      understanding:
        "Learn advanced defensive techniques used to identify sophisticated threats and improve organizational security.",

      practice:
        "Develop detection logic, analyze security signals, automate defensive tasks, and conduct structured threat-hunting exercises in authorized environments.",

      project:
        "Build an Advanced Security Operations Platform.",

      achievement:
        "Advanced Cybersecurity Engineering",
    },

    {
      id: 23,

      title: "Cybersecurity Engineering & Architecture",

      topics: [
        "Enterprise Security Architecture",
        "Security Engineering",
        "Cyber Resilience",
        "Security Leadership",
        "Industry Preparation",
      ],

      topicDetails: [
        {
          title: "Cybersecurity Engineering",
          items: [
            "Enterprise Security Architecture",
            "Security Engineering",
            "Cyber Resilience",
            "Security Leadership",
            "Industry Preparation",
          ],
        },
      ],

      understanding:
        "Bring together security principles, networks, systems, applications, identity, cloud, DevSecOps, monitoring, incident response, governance, and risk management.",

      practice:
        "Design enterprise security environments that balance security, usability, resilience, operational requirements, scalability, and business objectives.",

      project:
        "Build an Enterprise Cybersecurity Capstone.",

      achievement:
        "CloudLearn AI Certified Cybersecurity Engineer & Architect",
    },
  ],

  /* ============================================================
     PROJECT PROGRESSION
     ============================================================ */

  projectProgression: [
    "Personal Security Assessment",
    "Secure System Configuration Lab",
    "Network Security Analysis Lab",
    "Linux Security Administration Lab",
    "Access Control System",
    "Secure Data Communication System",
    "Secure Network Design",
    "Security-Hardened Web Application",
    "Secure Application Development Project",
    "Enterprise IAM Design",
    "Vulnerability Assessment Report",
    "Security Monitoring Dashboard",
    "Threat Intelligence Report",
    "Incident Response Simulation",
    "Digital Forensics Investigation",
    "Authorized Security Assessment",
    "Secure Enterprise Architecture",
    "Secure Cloud Environment",
    "Secure CI/CD Pipeline",
    "Secure Container Platform",
    "Enterprise Security Program",
    "Advanced Security Operations Platform",
    "Enterprise Cybersecurity Capstone",
  ],

  /* ============================================================
     CERTIFICATION GUIDANCE
     ============================================================ */

  certificationGuidance: {
    description: [
      "CloudLearn AI provides achievement credentials throughout the cybersecurity learning path so students can demonstrate their progress.",

      "External certifications can be selected according to the learner's target role, specialization, technology stack, and career direction.",

      "Students do not need to collect every cybersecurity certification.",
    ],

    priority: [
      "Security Fundamentals",
      "Networking",
      "Linux",
      "Security Engineering",
      "Application Security",
      "Cloud Security",
      "Security Operations",
      "Practical Projects",
      "Portfolio & Communication",
    ],

    conclusion:
      "Certifications support the journey, but practical security knowledge, responsible testing, engineering ability, and real projects remain central.",
  },

  /* ============================================================
     FINAL CAPSTONE
     ============================================================ */

  finalCapstone: {
    title: "Enterprise Cybersecurity Platform",

    description:
      "The final capstone combines the major cybersecurity skills developed throughout the roadmap into one enterprise-oriented security program and architecture.",

    components: [
      {
        title: "Security Foundations",
        items: [
          "Security Principles",
          "Threat & Risk Assessment",
          "Security Requirements",
          "Security Policies",
        ],
      },

      {
        title: "Network Security",
        items: [
          "Network Architecture",
          "Segmentation",
          "Firewalls",
          "IDS & IPS",
          "Secure Remote Access",
        ],
      },

      {
        title: "Identity & Access",
        items: [
          "Authentication",
          "Authorization",
          "MFA",
          "RBAC",
          "Identity Lifecycle",
        ],
      },

      {
        title: "Application Security",
        items: [
          "Secure Development",
          "Web Security",
          "API Security",
          "Input Validation",
          "Dependency Security",
        ],
      },

      {
        title: "Cloud & Infrastructure Security",
        items: [
          "Cloud IAM",
          "Cloud Network Security",
          "Container Security",
          "Kubernetes Security",
          "Secrets Management",
        ],
      },

      {
        title: "Security Operations",
        items: [
          "Logging",
          "Monitoring",
          "SIEM",
          "Threat Detection",
          "Incident Response",
        ],
      },

      {
        title: "Governance & Risk",
        items: [
          "Risk Management",
          "Security Governance",
          "Compliance Concepts",
          "Security Auditing",
          "Security Policies",
        ],
      },

      {
        title: "Engineering & Resilience",
        items: [
          "Zero Trust",
          "Defense in Depth",
          "Security Automation",
          "Cyber Resilience",
          "Security Architecture",
        ],
      },
    ],

    outcome:
      "The learner finishes by demonstrating the ability to assess risk, design security controls, secure applications and infrastructure, protect cloud environments, operate security monitoring, respond to incidents, and design an enterprise cybersecurity architecture.",
  },

  /* ============================================================
     ACHIEVEMENT PATH
     ============================================================ */

  achievementPath: [
    "Cybersecurity Foundations",
    "System Security Foundations",
    "Cyber Networking Foundations",
    "Linux Security Administration",
    "Security Principles",
    "Applied Cryptography Foundations",
    "Network Security",
    "Web Application Security",
    "Secure Software Development",
    "Identity & Access Management",
    "Vulnerability Management",
    "Security Operations",
    "Cyber Threat Intelligence",
    "Incident Response",
    "Digital Forensics Foundations",
    "Security Testing",
    "Security Engineering",
    "Cloud Security Engineering",
    "DevSecOps Engineering",
    "Container Security Engineering",
    "Cybersecurity Governance",
    "Advanced Cybersecurity Engineering",
    "CloudLearn AI Certified Cybersecurity Engineer & Architect",
  ],

  /* ============================================================
     LEARNING PHILOSOPHY
     ============================================================ */

  learningPhilosophy: [
    "Understand",
    "Learn",
    "Practice",
    "Assess",
    "Protect",
    "Detect",
    "Respond",
    "Recover",
    "Automate",
    "Engineer",
    "Architect",
  ],
};

export default cyberSecurityPath;
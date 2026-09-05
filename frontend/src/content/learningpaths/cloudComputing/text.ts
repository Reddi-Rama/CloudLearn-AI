export interface LearningPathTopicGroup {
  title: string;
  items: string[];
}

export interface LearningPathStage {
  id: number;
  title: string;
  topics: string[];

  topicDetails: LearningPathTopicGroup[];

  purpose: string;
  understanding: string;
  practice: string;
  project: string;
  achievement: string;
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

  studentProgression: string[];

  projectProgression: string[];

  certificationGuidance: CertificationGuidance;

  finalCapstone: FinalCapstone;

  achievementPath: string[];

  learningPhilosophy: string[];
}

/* ============================================================
   CLOUD COMPUTING LEARNING PATH
   ============================================================ */

const cloudComputingPath: LearningPathContent = {
  /* ============================================================
     PATH INFORMATION
     ============================================================ */

  title: "Cloud Computing Learning Path",

  subtitle:
    "From Cloud Foundations to Cloud Engineering and Architecture",

  description:
    "A structured learning path that takes students from the fundamentals of cloud computing to designing, deploying, securing, automating, monitoring, and architecting modern cloud systems.",

  totalStages: 23,

  /* ============================================================
     STAGES
     ============================================================ */

  stages: [
    {
      id: 1,

      title: "Cloud Foundations",

      topics: [
        "What Is Cloud Computing",
        "Cloud Characteristics",
        "Benefits & Challenges",
        "Cloud Terminology",
        "Traditional IT vs Cloud",
      ],

      topicDetails: [
        {
          title: "Cloud Foundations",
          items: [
            "What Is Cloud Computing",
            "Cloud Characteristics",
            "Benefits & Challenges",
            "Cloud Terminology",
            "Traditional IT vs Cloud",
          ],
        },
      ],

      purpose:
        "Build a strong understanding of cloud computing before moving into infrastructure and services.",

      understanding:
        "Learn what cloud computing is, why organizations use it, and how cloud infrastructure differs from traditional on-premises infrastructure.",

      practice:
        "Understand resources such as compute, storage, networking, regions, availability zones, and managed services.",

      project:
        "Cloud Computing Fundamentals Lab",

      achievement:
        "Cloud Foundations",
    },

    {
      id: 2,

      title: "Linux & Computer Foundations",

      topics: [
        "Operating Systems",
        "Linux Fundamentals",
        "Files & Permissions",
        "Processes & Services",
        "Command Line",
      ],

      topicDetails: [
        {
          title: "Linux & Computing",
          items: [
            "Operating Systems",
            "Linux Fundamentals",
            "Files & Permissions",
            "Processes & Services",
            "Command Line",
          ],
        },
      ],

      purpose:
        "Build the operating-system foundation required to work with cloud servers.",

      understanding:
        "Learn the operating-system concepts required to work with cloud servers.",

      practice:
        "Use the Linux command line, manage files and permissions, inspect processes, and work with services.",

      project:
        "Linux Server Administration Lab",

      achievement:
        "Cloud Infrastructure Foundations",
    },

    {
      id: 3,

      title: "Networking Foundations",

      topics: [
        "IP Addresses",
        "TCP/IP",
        "Ports & Protocols",
        "DNS",
        "HTTP & HTTPS",
      ],

      topicDetails: [
        {
          title: "Networking",
          items: [
            "IP Addresses",
            "TCP/IP",
            "Ports & Protocols",
            "DNS",
            "HTTP & HTTPS",
          ],
        },
      ],

      purpose:
        "Build the networking foundation required to understand cloud communication.",

      understanding:
        "Learn how computers, applications, and cloud resources communicate.",

      practice:
        "Work with IP addresses, ports, DNS, HTTP, HTTPS, and basic network troubleshooting.",

      project:
        "Network & Server Lab",

      achievement:
        "Cloud Networking Foundations",
    },

    {
      id: 4,

      title: "Cloud Service & Deployment Models",

      topics: [
        "IaaS",
        "PaaS",
        "SaaS",
        "Serverless",
        "Public & Private Cloud",
        "Hybrid & Multi-Cloud",
      ],

      topicDetails: [
        {
          title: "Cloud Models",
          items: [
            "IaaS",
            "PaaS",
            "SaaS",
            "Serverless",
            "Public & Private Cloud",
            "Hybrid & Multi-Cloud",
          ],
        },
      ],

      purpose:
        "Understand how cloud services are delivered and how organizations choose different deployment approaches.",

      understanding:
        "Learn how cloud services are delivered and how organizations choose different deployment approaches.",

      practice:
        "Compare service and deployment models and select appropriate approaches for different requirements.",

      project:
        "Cloud Architecture Selection",

      achievement:
        "Cloud Services & Deployment",
    },

    {
      id: 5,

      title: "Cloud Compute",

      topics: [
        "Virtual Machines",
        "Images & Instances",
        "Compute Resources",
        "Auto Scaling",
        "Load Balancing",
      ],

      topicDetails: [
        {
          title: "Cloud Compute",
          items: [
            "Virtual Machines",
            "Images & Instances",
            "Compute Resources",
            "Auto Scaling",
            "Load Balancing",
          ],
        },
      ],

      purpose:
        "Learn how cloud platforms provide scalable computing resources.",

      understanding:
        "Learn how cloud platforms provide computing resources that can be created, configured, scaled, and managed on demand.",

      practice:
        "Deploy compute resources and understand scaling and traffic distribution.",

      project:
        "Scalable Cloud Web Server",

      achievement:
        "Cloud Compute",
    },

    {
      id: 6,

      title: "Cloud Storage",

      topics: [
        "Object Storage",
        "Block Storage",
        "File Storage",
        "Storage Classes",
        "Backup & Lifecycle",
      ],

      topicDetails: [
        {
          title: "Cloud Storage",
          items: [
            "Object Storage",
            "Block Storage",
            "File Storage",
            "Storage Classes",
            "Backup & Lifecycle",
          ],
        },
      ],

      purpose:
        "Understand the major cloud storage models and their uses.",

      understanding:
        "Learn how different storage technologies are used for application files, persistent data, backups, and large-scale content.",

      practice:
        "Work with different storage types and design appropriate storage strategies.",

      project:
        "Cloud File & Media Platform",

      achievement:
        "Cloud Storage",
    },

    {
      id: 7,

      title: "Cloud Databases",

      topics: [
        "Managed SQL Databases",
        "NoSQL Databases",
        "Backups",
        "Replication",
        "High Availability",
      ],

      topicDetails: [
        {
          title: "Cloud Databases",
          items: [
            "Managed SQL Databases",
            "NoSQL Databases",
            "Backups",
            "Replication",
            "High Availability",
          ],
        },
      ],

      purpose:
        "Learn how managed databases provide scalable cloud data services.",

      understanding:
        "Learn how managed databases reduce infrastructure management while providing scalable data services.",

      practice:
        "Create databases, configure backups, understand replication, and evaluate availability requirements.",

      project:
        "Cloud Database Application",

      achievement:
        "Cloud Database Engineering",
    },

    {
      id: 8,

      title: "Cloud Networking",

      topics: [
        "Virtual Networks",
        "Subnets",
        "Routing",
        "Firewalls",
        "NAT & Gateways",
      ],

      topicDetails: [
        {
          title: "Cloud Networking",
          items: [
            "Virtual Networks",
            "Subnets",
            "Routing",
            "Firewalls",
            "NAT & Gateways",
          ],
        },
      ],

      purpose:
        "Understand how cloud resources communicate securely inside and outside a virtual network.",

      understanding:
        "Learn how cloud resources communicate securely within a virtual network and with external systems.",

      practice:
        "Design subnets, routing rules, firewall policies, and network connectivity.",

      project:
        "Secure Cloud Network",

      achievement:
        "Cloud Networking",
    },

    {
      id: 9,

      title: "Cloud Security & IAM",

      topics: [
        "Identity & Access Management",
        "Roles & Policies",
        "Encryption",
        "Secrets Management",
        "Security Best Practices",
      ],

      topicDetails: [
        {
          title: "Cloud Security",
          items: [
            "Identity & Access Management",
            "Roles & Policies",
            "Encryption",
            "Secrets Management",
            "Security Best Practices",
          ],
        },
      ],

      purpose:
        "Build the security foundation required for cloud environments.",

      understanding:
        "Learn how cloud environments control access and protect resources and data.",

      practice:
        "Design least-privilege access, manage identities, protect secrets, and apply encryption.",

      project:
        "Secure Cloud Application",

      achievement:
        "Cloud Security Foundations",
    },

    {
      id: 10,

      title: "Containers & Docker",

      topics: [
        "Container Concepts",
        "Docker Images",
        "Dockerfiles",
        "Container Networking",
        "Container Registries",
      ],

      topicDetails: [
        {
          title: "Containers",
          items: [
            "Container Concepts",
            "Docker Images",
            "Dockerfiles",
            "Container Networking",
            "Container Registries",
          ],
        },
      ],

      purpose:
        "Understand containers as a foundation for modern cloud application deployment.",

      understanding:
        "Learn why containers are important for consistent application packaging and deployment.",

      practice:
        "Build images, run containers, configure networking, and manage containerized applications.",

      project:
        "Containerized Cloud Application",

      achievement:
        "Cloud Container Engineering",
    },

    {
      id: 11,

      title: "Kubernetes & Orchestration",

      topics: [
        "Kubernetes Architecture",
        "Pods & Deployments",
        "Services",
        "ConfigMaps & Secrets",
        "Scaling",
      ],

      topicDetails: [
        {
          title: "Kubernetes",
          items: [
            "Kubernetes Architecture",
            "Pods & Deployments",
            "Services",
            "ConfigMaps & Secrets",
            "Scaling",
          ],
        },
      ],

      purpose:
        "Learn how Kubernetes manages containerized applications across clusters.",

      understanding:
        "Learn how Kubernetes manages containerized applications across clusters.",

      practice:
        "Deploy applications, expose services, manage configuration, and scale workloads.",

      project:
        "Kubernetes Application",

      achievement:
        "Kubernetes Engineering",
    },

    {
      id: 12,

      title: "Serverless & Cloud-Native",

      topics: [
        "Functions as a Service",
        "API Gateways",
        "Event-Driven Applications",
        "Managed Services",
        "Cloud-Native Patterns",
      ],

      topicDetails: [
        {
          title: "Cloud-Native",
          items: [
            "Functions as a Service",
            "API Gateways",
            "Event-Driven Applications",
            "Managed Services",
            "Cloud-Native Patterns",
          ],
        },
      ],

      purpose:
        "Learn how applications can use managed services and event-driven architectures.",

      understanding:
        "Learn how applications can use managed services and event-driven architectures without requiring traditional server management.",

      practice:
        "Build serverless functions, APIs, and event-driven components.",

      project:
        "Serverless Cloud Application",

      achievement:
        "Cloud-Native Development",
    },

    {
      id: 13,

      title: "Infrastructure as Code",

      topics: [
        "IaC Concepts",
        "Terraform",
        "Configuration Management",
        "Reusable Infrastructure",
        "Infrastructure State",
      ],

      topicDetails: [
        {
          title: "Infrastructure as Code",
          items: [
            "IaC Concepts",
            "Terraform",
            "Configuration Management",
            "Reusable Infrastructure",
            "Infrastructure State",
          ],
        },
      ],

      purpose:
        "Learn how cloud infrastructure can be defined, reproduced, and managed through code.",

      understanding:
        "Learn how infrastructure can be defined and managed through code.",

      practice:
        "Create reusable infrastructure definitions and automate cloud resource creation.",

      project:
        "Automated Cloud Infrastructure",

      achievement:
        "Infrastructure as Code",
    },

    {
      id: 14,

      title: "DevOps & CI/CD",

      topics: [
        "Version Control",
        "Build Pipelines",
        "Automated Testing",
        "Continuous Integration",
        "Continuous Deployment",
      ],

      topicDetails: [
        {
          title: "DevOps & CI/CD",
          items: [
            "Version Control",
            "Build Pipelines",
            "Automated Testing",
            "Continuous Integration",
            "Continuous Deployment",
          ],
        },
      ],

      purpose:
        "Learn how modern engineering teams automate application delivery.",

      understanding:
        "Learn how modern engineering teams automate application delivery.",

      practice:
        "Create pipelines that build, test, and deploy applications automatically.",

      project:
        "Cloud CI/CD Pipeline",

      achievement:
        "Cloud DevOps",
    },

    {
      id: 15,

      title: "Cloud Observability",

      topics: [
        "Logging",
        "Metrics",
        "Tracing",
        "Monitoring",
        "Alerting",
      ],

      topicDetails: [
        {
          title: "Observability",
          items: [
            "Logging",
            "Metrics",
            "Tracing",
            "Monitoring",
            "Alerting",
          ],
        },
      ],

      purpose:
        "Learn how cloud systems are understood and operated after deployment.",

      understanding:
        "Learn how engineers understand system behavior after applications are deployed.",

      practice:
        "Collect logs and metrics, monitor services, create alerts, and investigate issues.",

      project:
        "Cloud Observability Platform",

      achievement:
        "Cloud Operations",
    },

    {
      id: 16,

      title: "Scalability & High Availability",

      topics: [
        "Horizontal & Vertical Scaling",
        "Load Balancing",
        "Fault Tolerance",
        "Disaster Recovery",
        "Business Continuity",
      ],

      topicDetails: [
        {
          title: "Scalability & Availability",
          items: [
            "Horizontal & Vertical Scaling",
            "Load Balancing",
            "Fault Tolerance",
            "Disaster Recovery",
            "Business Continuity",
          ],
        },
      ],

      purpose:
        "Learn how cloud systems remain available and responsive as demand increases or infrastructure fails.",

      understanding:
        "Learn how cloud systems remain available and responsive as demand increases or infrastructure fails.",

      practice:
        "Design scaling, backup, recovery, and high-availability strategies.",

      project:
        "Highly Available Cloud System",

      achievement:
        "Cloud Reliability Engineering",
    },

    {
      id: 17,

      title: "Cloud Architecture & System Design",

      topics: [
        "Architecture Patterns",
        "Microservices",
        "Distributed Systems",
        "Architecture Trade-Offs",
        "Well-Architected Design",
      ],

      topicDetails: [
        {
          title: "Cloud Architecture",
          items: [
            "Architecture Patterns",
            "Microservices",
            "Distributed Systems",
            "Architecture Trade-Offs",
            "Well-Architected Design",
          ],
        },
      ],

      purpose:
        "Move from managing individual cloud resources to designing complete cloud architectures.",

      understanding:
        "Move from managing individual resources to designing complete cloud architectures.",

      practice:
        "Design systems based on scalability, security, reliability, performance, operational requirements, and cost.",

      project:
        "Production Cloud Architecture",

      achievement:
        "Cloud Architecture",
    },

    {
      id: 18,

      title: "Cloud Cost & FinOps",

      topics: [
        "Cloud Pricing",
        "Resource Optimization",
        "Cost Monitoring",
        "Capacity Planning",
        "FinOps Fundamentals",
      ],

      topicDetails: [
        {
          title: "Cloud Cost",
          items: [
            "Cloud Pricing",
            "Resource Optimization",
            "Cost Monitoring",
            "Capacity Planning",
            "FinOps Fundamentals",
          ],
        },
      ],

      purpose:
        "Learn to manage cloud resources with technical and financial awareness.",

      understanding:
        "Learn that effective cloud engineering requires both technical and financial awareness.",

      practice:
        "Analyze resource usage, identify unnecessary costs, and make cost-aware architecture decisions.",

      project:
        "Cloud Cost Optimization",

      achievement:
        "Cloud Cost Engineering",
    },

    {
      id: 19,

      title: "Data & AI on the Cloud",

      topics: [
        "Cloud Data Services",
        "AI & ML Services",
        "Data Processing",
        "Vector Databases",
        "AI Application Deployment",
      ],

      topicDetails: [
        {
          title: "Cloud AI & Data",
          items: [
            "Cloud Data Services",
            "AI & ML Services",
            "Data Processing",
            "Vector Databases",
            "AI Application Deployment",
          ],
        },
      ],

      purpose:
        "Learn how cloud infrastructure supports modern data-intensive and AI-powered applications.",

      understanding:
        "Learn how cloud infrastructure supports modern data-intensive and AI-powered applications.",

      practice:
        "Work with cloud data services and deploy AI workloads using appropriate cloud infrastructure.",

      project:
        "Cloud-Based AI Application",

      achievement:
        "Cloud AI Engineering",
    },

    {
      id: 20,

      title: "Platform Engineering",

      topics: [
        "Internal Developer Platforms",
        "Developer Experience",
        "Infrastructure Automation",
        "Self-Service Infrastructure",
        "Platform Operations",
      ],

      topicDetails: [
        {
          title: "Platform Engineering",
          items: [
            "Internal Developer Platforms",
            "Developer Experience",
            "Infrastructure Automation",
            "Self-Service Infrastructure",
            "Platform Operations",
          ],
        },
      ],

      purpose:
        "Understand how internal cloud platforms help teams build and deploy software efficiently.",

      understanding:
        "Learn how organizations create internal platforms that allow development teams to deploy and manage applications more efficiently.",

      practice:
        "Automate common infrastructure and deployment workflows.",

      project:
        "Developer Cloud Platform",

      achievement:
        "Platform Engineering",
    },

    {
      id: 21,

      title: "Cloud Governance & Compliance",

      topics: [
        "Cloud Governance",
        "Policies & Controls",
        "Compliance Concepts",
        "Resource Governance",
        "Security Governance",
      ],

      topicDetails: [
        {
          title: "Cloud Governance",
          items: [
            "Cloud Governance",
            "Policies & Controls",
            "Compliance Concepts",
            "Resource Governance",
            "Security Governance",
          ],
        },
      ],

      purpose:
        "Learn how organizations manage cloud resources consistently and securely across teams and environments.",

      understanding:
        "Learn how organizations manage cloud resources consistently across teams and environments.",

      practice:
        "Create governance rules, resource policies, access controls, and organizational standards.",

      project:
        "Governed Cloud Environment",

      achievement:
        "Cloud Governance Engineering",
    },

    {
      id: 22,

      title: "Multi-Cloud & Hybrid Cloud",

      topics: [
        "Hybrid Cloud Architecture",
        "Multi-Cloud Strategy",
        "Workload Portability",
        "Cross-Cloud Networking",
        "Cloud Strategy",
      ],

      topicDetails: [
        {
          title: "Hybrid & Multi-Cloud",
          items: [
            "Hybrid Cloud Architecture",
            "Multi-Cloud Strategy",
            "Workload Portability",
            "Cross-Cloud Networking",
            "Cloud Strategy",
          ],
        },
      ],

      purpose:
        "Understand multi-cloud and hybrid cloud strategies and their architectural trade-offs.",

      understanding:
        "Learn when organizations may use multiple cloud environments or combine cloud infrastructure with on-premises systems.",

      practice:
        "Evaluate portability, connectivity, operational complexity, cost, and architectural trade-offs.",

      project:
        "Hybrid Cloud Architecture",

      achievement:
        "Hybrid & Multi-Cloud Engineering",
    },

    {
      id: 23,

      title: "Cloud Engineering & Architecture",

      topics: [
        "Enterprise Cloud Architecture",
        "Production Engineering",
        "Reliability & Security",
        "Platform Architecture",
        "Industry Preparation",
      ],

      topicDetails: [
        {
          title: "Cloud Engineering",
          items: [
            "Enterprise Cloud Architecture",
            "Production Engineering",
            "Reliability & Security",
            "Platform Architecture",
            "Industry Preparation",
          ],
        },
      ],

      purpose:
        "Bring together the major cloud engineering disciplines into enterprise-level architecture and engineering.",

      understanding:
        "Bring together infrastructure, networking, compute, storage, databases, security, containers, automation, DevOps, observability, scalability, governance, and architecture.",

      practice:
        "Design production-grade cloud environments while balancing security, reliability, scalability, performance, operational complexity, and cost.",

      project:
        "Enterprise Cloud Capstone",

      achievement:
        "CloudLearn Certified Cloud Engineer & Architect",
    },
  ],

  /* ============================================================
     HOW THE STUDENT PROGRESSES
     ============================================================ */

  studentProgression: [
    "Understand Cloud Computing",
    "Learn Linux",
    "Master Networking",
    "Understand Cloud Models",
    "Learn Cloud Compute",
    "Learn Cloud Storage",
    "Work with Cloud Databases",
    "Build Cloud Networks",
    "Secure Cloud Resources",
    "Work with Containers",
    "Learn Kubernetes",
    "Build Cloud-Native Systems",
    "Automate Infrastructure",
    "Build CI/CD Pipelines",
    "Monitor Cloud Systems",
    "Design Highly Available Systems",
    "Master Cloud Architecture",
    "Optimize Cloud Costs",
    "Deploy Data & AI Workloads",
    "Build Developer Platforms",
    "Understand Governance",
    "Design Hybrid & Multi-Cloud Systems",
    "Become a Cloud Engineer",
    "Progress Toward Cloud Architect",
  ],

  /* ============================================================
     PROJECT PROGRESSION
     ============================================================ */

  projectProgression: [
    "Cloud Computing Fundamentals Lab",
    "Linux Server Administration Lab",
    "Network & Server Lab",
    "Cloud Architecture Selection",
    "Scalable Cloud Web Server",
    "Cloud File & Media Platform",
    "Cloud Database Application",
    "Secure Cloud Network",
    "Secure Cloud Application",
    "Containerized Cloud Application",
    "Kubernetes Application",
    "Serverless Cloud Application",
    "Automated Cloud Infrastructure",
    "Cloud CI/CD Pipeline",
    "Cloud Observability Platform",
    "Highly Available Cloud System",
    "Production Cloud Architecture",
    "Cloud Cost Optimization",
    "Cloud-Based AI Application",
    "Developer Cloud Platform",
    "Governed Cloud Environment",
    "Hybrid Cloud Architecture",
    "Enterprise Cloud Capstone",
  ],

  /* ============================================================
     CERTIFICATION GUIDANCE
     ============================================================ */

  certificationGuidance: {
    description: [
      "CloudLearn provides achievement credentials throughout the learning path so students can demonstrate their progress.",

      "External certifications can be recommended according to the learner's target role, cloud platform, and specialization.",

      "Students do not need to collect every certification.",
    ],

    priority: [
      "Cloud Fundamentals",
      "Linux & Networking",
      "Cloud Infrastructure",
      "Security",
      "Containers",
      "Automation",
      "DevOps",
      "Cloud Architecture",
      "Real Projects",
    ],

    conclusion:
      "Certifications support the journey but do not replace practical cloud engineering ability.",
  },

  /* ============================================================
     FINAL CAPSTONE
     ============================================================ */

  finalCapstone: {
    title: "Enterprise Cloud Platform",

    description:
      "The final project combines the major concepts learned throughout the roadmap.",

    components: [
      {
        title: "Architecture",
        items: [
          "Requirements",
          "Architecture Design",
          "Service Selection",
          "Architecture Trade-Offs",
        ],
      },

      {
        title: "Networking",
        items: [
          "Virtual Network",
          "Subnets",
          "Routing",
          "Network Security",
        ],
      },

      {
        title: "Compute",
        items: [
          "Virtual Machines",
          "Containers",
          "Kubernetes",
          "Auto Scaling",
        ],
      },

      {
        title: "Storage & Data",
        items: [
          "Object Storage",
          "Databases",
          "Backup",
          "Data Processing",
        ],
      },

      {
        title: "Security",
        items: [
          "Identity",
          "Access Policies",
          "Encryption",
          "Secrets",
        ],
      },

      {
        title: "Automation",
        items: [
          "Infrastructure as Code",
          "CI/CD",
          "Automated Deployment",
        ],
      },

      {
        title: "Reliability",
        items: [
          "High Availability",
          "Disaster Recovery",
          "Monitoring",
          "Alerting",
        ],
      },

      {
        title: "Operations",
        items: [
          "Logging",
          "Metrics",
          "Tracing",
          "Observability",
        ],
      },

      {
        title: "Cost",
        items: [
          "Resource Optimization",
          "Cost Monitoring",
          "Capacity Planning",
        ],
      },

      {
        title: "Governance",
        items: [
          "Policies",
          "Resource Controls",
          "Security Governance",
        ],
      },

      {
        title: "AI",
        items: [
          "AI Services",
          "Data",
          "Vector Search",
          "AI Application Deployment",
        ],
      },
    ],

    outcome:
      "The learner finishes by demonstrating the ability to design, deploy, secure, automate, monitor, optimize, and operate a modern enterprise cloud environment.",
  },

  /* ============================================================
     ACHIEVEMENT PATH
     ============================================================ */

  achievementPath: [
    "Cloud Foundations",
    "Cloud Infrastructure Foundations",
    "Cloud Networking Foundations",
    "Cloud Services & Deployment",
    "Cloud Compute",
    "Cloud Storage",
    "Cloud Database Engineering",
    "Cloud Networking",
    "Cloud Security Foundations",
    "Cloud Container Engineering",
    "Kubernetes Engineering",
    "Cloud-Native Development",
    "Infrastructure as Code",
    "Cloud DevOps",
    "Cloud Operations",
    "Cloud Reliability Engineering",
    "Cloud Architecture",
    "Cloud Cost Engineering",
    "Cloud AI Engineering",
    "Platform Engineering",
    "Cloud Governance Engineering",
    "Hybrid & Multi-Cloud Engineering",
    "CloudLearn Certified Cloud Engineer & Architect",
  ],

  /* ============================================================
     LEARNING PHILOSOPHY
     ============================================================ */

  learningPhilosophy: [
    "Understand",
    "Learn",
    "Practice",
    "Build",
    "Deploy",
    "Secure",
    "Automate",
    "Monitor",
    "Scale",
    "Optimize",
    "Architect",
  ],
};

/* ============================================================
   DEFAULT EXPORT
   ============================================================ */

export default cloudComputingPath;
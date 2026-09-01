export interface LearningPathTopicGroup {
  title: string;
  items: string[];
}

export interface LearningPathStage {
  id: number;
  title: string;
  topics: string[];
  topicDetails: LearningPathTopicGroup[];

  purpose?: string;
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

  studentProgression: string[];

  projectProgression: string[];

  certificationGuidance: CertificationGuidance;

  finalCapstone: FinalCapstone;

  achievementPath: string[];

  learningPhilosophy: string[];
}

const frontendDevelopmentPath: LearningPathContent = {
  title: "Frontend Development Learning Path",

  subtitle:
    "From Web Foundations to Modern Frontend Engineering",

  description:
    "A structured learning path that takes students from the fundamentals of web development to building modern, responsive, accessible, secure, performant, and AI-powered frontend applications.",

  totalStages: 23,

  stages: [
    {
      id: 1,

      title: "Web Foundations",

      topics: [
        "Internet & Web",
        "Browser & Server",
        "HTTP & HTTPS",
        "Developer Tools",
      ],

      topicDetails: [
        {
          title: "Computer & Development Environment",
          items: [
            "Operating Systems",
            "Files & Directories",
            "Terminal Basics",
            "Code Editors",
            "Development Setup",
          ],
        },
        {
          title: "Internet Fundamentals",
          items: [
            "Networks",
            "Client & Server",
            "IP Addresses",
            "Ports",
            "DNS",
          ],
        },
        {
          title: "How the Web Works",
          items: [
            "Browser",
            "Server",
            "Request",
            "Response",
            "Rendering",
          ],
        },
        {
          title: "HTTP & HTTPS",
          items: [
            "Methods",
            "Status Codes",
            "Headers",
            "Request Body",
            "Response Body",
          ],
        },
      ],

      purpose:
        "Before writing frontend code, students need to understand the environment in which their code runs.",

      understanding:
        "The student should be able to explain what happens when a browser requests a webpage and how the browser receives and displays that information.",

      practice:
        "Use browser developer tools to inspect webpages and network requests.",

      project: "Personal Web Introduction",

      achievement: "Frontend Foundations",
    },

    {
      id: 2,

      title: "HTML",

      topics: [
        "HTML Structure",
        "Elements & Attributes",
        "Forms & Media",
        "Semantic HTML",
      ],

      topicDetails: [
        {
          title: "Fundamentals",
          items: [
            "Elements",
            "Attributes",
            "Nesting",
          ],
        },
        {
          title: "Document Structure",
          items: [
            "DOCTYPE",
            "Head",
            "Body",
          ],
        },
        {
          title: "Content",
          items: [
            "Headings",
            "Paragraphs",
            "Lists",
            "Text",
          ],
        },
        {
          title: "Navigation",
          items: [
            "Links",
            "Navigation Menus",
          ],
        },
        {
          title: "Media",
          items: [
            "Images",
            "Audio",
            "Video",
            "Embedded Content",
          ],
        },
        {
          title: "Forms",
          items: [
            "Inputs",
            "Labels",
            "Select",
            "Textarea",
            "Buttons",
          ],
        },
        {
          title: "Semantic HTML",
          items: [
            "Header",
            "Nav",
            "Main",
            "Section",
            "Article",
            "Aside",
            "Footer",
          ],
        },
      ],

      purpose:
        "Learn how to create the structure and meaning of web content.",

      understanding:
        "The student should be able to create a properly structured webpage without depending on CSS or JavaScript.",

      practice:
        "Create structured pages using semantic elements, forms, links, images, audio, video, and accessible HTML.",

      project: "Multi-Page Personal Website",

      achievement: "Semantic Web Development",
    },

    {
      id: 3,

      title: "CSS Foundations",

      topics: [
        "Selectors & Styling",
        "Box Model",
        "Typography",
        "Colors & Backgrounds",
        "Positioning",
      ],

      topicDetails: [
        {
          title: "Fundamentals",
          items: [
            "Selectors",
            "Properties",
            "Values",
            "Inheritance",
          ],
        },
        {
          title: "Cascade",
          items: [
            "Cascade",
            "Specificity",
            "Source Order",
          ],
        },
        {
          title: "Box Model",
          items: [
            "Width",
            "Height",
            "Padding",
            "Border",
            "Margin",
          ],
        },
        {
          title: "Layout",
          items: [
            "Display",
            "Position",
            "Overflow",
          ],
        },
        {
          title: "Flexbox",
          items: [
            "Direction",
            "Alignment",
            "Justification",
            "Wrapping",
          ],
        },
        {
          title: "Grid",
          items: [
            "Rows",
            "Columns",
            "Areas",
            "Placement",
          ],
        },
        {
          title: "Modern CSS",
          items: [
            "Custom Properties",
            "CSS Functions",
            "Modern Selectors",
            "Logical Properties",
          ],
        },
      ],

      purpose:
        "Learn how to control appearance, layout, spacing, and visual presentation.",

      understanding:
        "The student should be able to take a plain HTML structure and turn it into a well-organized interface.",

      practice:
        "Style pages using selectors, spacing, typography, colors, backgrounds, and positioning.",

      project: "Professional Landing Page",
    },

    {
      id: 4,

      title: "Modern CSS & Responsive Design",

      topics: [
        "Flexbox",
        "CSS Grid",
        "Media Queries",
        "Mobile-First Design",
        "Responsive Components",
      ],

      topicDetails: [
        {
          title: "Responsive Design",
          items: [
            "Mobile-First Design",
            "Media Queries",
            "Breakpoints",
            "Fluid Layouts",
            "Responsive Typography",
            "Responsive Images",
            "Flexible Components",
            "Container Queries",
          ],
        },
      ],

      purpose:
        "Learn how to make interfaces work across different screen sizes.",

      understanding:
        "The goal is not to design one desktop page and then shrink it. The student learns to design layouts that naturally adapt to different devices.",

      practice:
        "Build flexible layouts using Flexbox and Grid and adapt interfaces using responsive design techniques.",

      project: "Responsive E-Commerce Website",

      achievement: "Responsive Web Development",
    },

    {
      id: 5,

      title: "UI & UX Foundations",

      topics: [
        "Layout & Spacing",
        "Typography & Color",
        "Navigation",
        "Interaction Design",
        "User Experience",
      ],

      topicDetails: [
        {
          title: "UI & UX",
          items: [
            "Layout & Spacing",
            "Typography",
            "Color",
            "Navigation",
            "Interaction Design",
            "User Experience",
          ],
        },
      ],

      purpose:
        "Learn how to create interfaces that are understandable and easy to use.",

      understanding:
        "Learn how visual structure and interaction design affect the usability of an application.",

      practice:
        "Create clear layouts, navigation structures, interactions, and user flows.",

      project: "Modern Dashboard Interface",

      achievement: "UI Development",
    },

    {
      id: 6,

      title: "JavaScript Foundations",

      topics: [
        "Variables & Data Types",
        "Conditions & Loops",
        "Functions",
        "Arrays & Objects",
        "Modules",
      ],

      topicDetails: [
        {
          title: "JavaScript",
          items: [
            "Variables & Data Types",
            "Conditions & Loops",
            "Functions",
            "Arrays & Objects",
            "Modules",
          ],
        },
      ],

      purpose:
        "Learn the programming fundamentals required to make web interfaces interactive.",

      understanding:
        "Learn how JavaScript provides programming logic for interactive frontend applications.",

      practice:
        "Write JavaScript programs and work with data, functions, objects, arrays, and modules.",

      project: "Interactive Task Manager",

      achievement: "JavaScript Developer",
    },

    {
      id: 7,

      title: "Modern JavaScript",

      topics: [
        "DOM Manipulation",
        "Events",
        "Asynchronous JavaScript",
        "Promises & Async/Await",
        "APIs & Fetch",
      ],

      topicDetails: [
        {
          title: "Modern JavaScript",
          items: [
            "DOM Manipulation",
            "Events",
            "Asynchronous JavaScript",
            "Promises",
            "Async/Await",
            "APIs",
            "Fetch",
          ],
        },
      ],

      purpose:
        "Learn how frontend applications communicate with external services and respond to user interactions.",

      understanding:
        "Learn how frontend applications communicate with external services and respond to user interactions.",

      practice:
        "Manipulate the DOM, handle events, work with asynchronous operations, and consume APIs.",

      project: "API-Based Weather Dashboard",

      achievement: "Modern JavaScript",
    },

    {
      id: 8,

      title: "Git & Frontend Workflow",

      topics: [
        "Terminal",
        "Git",
        "GitHub",
        "Branching",
        "Collaboration",
      ],

      topicDetails: [
        {
          title: "Frontend Workflow",
          items: [
            "Terminal",
            "Git",
            "GitHub",
            "Branching",
            "Collaboration",
          ],
        },
      ],

      purpose:
        "Learn the tools and practices used by professional development teams.",

      understanding:
        "Learn how version control and collaboration fit into professional frontend development.",

      practice:
        "Track changes, create branches, manage repositories, and collaborate on projects.",

      project: "Collaborative Frontend Project",

      achievement: "Frontend Development Workflow",
    },

    {
      id: 9,

      title: "TypeScript",

      topics: [
        "Types",
        "Interfaces",
        "Unions & Generics",
        "Type-Safe APIs",
        "Advanced TypeScript",
      ],

      topicDetails: [
        {
          title: "TypeScript",
          items: [
            "Types",
            "Interfaces",
            "Unions",
            "Generics",
            "Type-Safe APIs",
            "Advanced TypeScript",
          ],
        },
      ],

      purpose:
        "Learn how static typing improves reliability and maintainability in larger frontend applications.",

      understanding:
        "Learn how static typing improves reliability and maintainability in larger frontend applications.",

      practice:
        "Add types to application data, components, functions, APIs, and reusable utilities.",

      project: "Type-Safe Application",

      achievement: "TypeScript Developer",
    },

    {
      id: 10,

      title: "React Foundations",

      topics: [
        "Components",
        "JSX",
        "Props",
        "State",
        "Events",
      ],

      topicDetails: [
        {
          title: "React",
          items: [
            "Components",
            "JSX",
            "Props",
            "State",
            "Events",
          ],
        },
      ],

      purpose:
        "Learn how component-based frontend applications are structured.",

      understanding:
        "Learn how component-based frontend applications are structured.",

      practice:
        "Create reusable components and manage application data and user interactions.",

      project: "React Productivity Application",

      achievement: "React Developer",
    },

    {
      id: 11,

      title: "Modern React",

      topics: [
        "Hooks",
        "Forms",
        "Component Composition",
        "Custom Hooks",
        "Reusable UI",
      ],

      topicDetails: [
        {
          title: "Modern React",
          items: [
            "Hooks",
            "Forms",
            "Component Composition",
            "Custom Hooks",
            "Reusable UI",
          ],
        },
      ],

      purpose:
        "Move from basic React components toward maintainable application-level React development.",

      understanding:
        "Learn how modern React patterns help create maintainable and reusable applications.",

      practice:
        "Build reusable components, custom hooks, forms, and composable interfaces.",

      project: "React Application Platform",

      achievement: "Modern React Engineering",
    },

    {
      id: 12,

      title: "Frontend Application Architecture",

      topics: [
        "Routing",
        "State Management",
        "API Integration",
        "Data Fetching",
        "Application Structure",
      ],

      topicDetails: [
        {
          title: "Application Architecture",
          items: [
            "Routing",
            "State Management",
            "API Integration",
            "Data Fetching",
            "Application Structure",
          ],
        },
      ],

      purpose:
        "Learn how larger frontend applications are organized and how different parts communicate.",

      understanding:
        "Learn how larger frontend applications are organized and how different parts communicate.",

      practice:
        "Design application structure, manage shared state, integrate APIs, and organize frontend modules.",

      project: "Full-Stack SaaS Frontend",

      achievement: "Frontend Application Engineering",
    },

    {
      id: 13,

      title: "Next.js & Modern Web Applications",

      topics: [
        "Next.js Fundamentals",
        "Rendering Strategies",
        "Server & Client Components",
        "Routing & Data Handling",
        "Full-Stack Web Patterns",
      ],

      topicDetails: [
        {
          title: "Next.js",
          items: [
            "Next.js Fundamentals",
            "Rendering Strategies",
            "Server & Client Components",
            "Routing & Data Handling",
            "Full-Stack Web Patterns",
          ],
        },
      ],

      purpose:
        "Learn modern web application patterns and different rendering approaches.",

      understanding:
        "Learn modern web application patterns and how frontend applications can combine different rendering approaches.",

      practice:
        "Build applications using modern routing, rendering, data handling, and deployment patterns.",

      project: "Production Web Application",

      achievement: "Modern Web Application Engineering",
    },

    {
      id: 14,

      title: "Accessibility & Frontend Quality",

      topics: [
        "Semantic Accessibility",
        "Keyboard Navigation",
        "Screen Reader Support",
        "Forms & Accessible Components",
        "Accessibility Testing",
      ],

      topicDetails: [
        {
          title: "Accessibility",
          items: [
            "Semantic Accessibility",
            "Keyboard Navigation",
            "Screen Reader Support",
            "Forms & Accessible Components",
            "Accessibility Testing",
          ],
        },
      ],

      purpose:
        "Learn how to build interfaces that can be used effectively by a wider range of users.",

      understanding:
        "Learn how to build interfaces that can be used effectively by a wider range of users.",

      practice:
        "Apply semantic HTML, keyboard support, accessible forms, and accessibility testing.",

      project: "Accessible Web Application",

      achievement: "Accessible Frontend Development",
    },

    {
      id: 15,

      title: "Testing & Code Quality",

      topics: [
        "Unit Testing",
        "Component Testing",
        "Integration Testing",
        "End-to-End Testing",
        "Code Quality",
      ],

      topicDetails: [
        {
          title: "Frontend Testing",
          items: [
            "Unit Testing",
            "Component Testing",
            "Integration Testing",
            "End-to-End Testing",
            "Code Quality",
          ],
        },
      ],

      purpose:
        "Learn how professional frontend teams verify application behavior and prevent regressions.",

      understanding:
        "Learn how professional frontend teams verify application behavior and prevent regressions.",

      practice:
        "Test components, user interactions, application flows, and important functionality.",

      project: "Fully Tested Frontend Application",

      achievement: "Frontend Quality Engineering",
    },

    {
      id: 16,

      title: "Performance Engineering",

      topics: [
        "Web Performance",
        "Code Splitting",
        "Lazy Loading",
        "Image Optimization",
        "Performance Monitoring",
      ],

      topicDetails: [
        {
          title: "Frontend Performance",
          items: [
            "Web Performance",
            "Code Splitting",
            "Lazy Loading",
            "Image Optimization",
            "Performance Monitoring",
          ],
        },
      ],

      purpose:
        "Learn how frontend performance affects user experience and application efficiency.",

      understanding:
        "Learn how frontend performance affects user experience and application efficiency.",

      practice:
        "Identify performance bottlenecks and optimize loading, rendering, assets, and application code.",

      project: "Performance-Optimized Web Application",

      achievement: "Frontend Performance Engineering",
    },

    {
      id: 17,

      title: "Frontend Security",

      topics: [
        "Browser Security",
        "XSS",
        "CSRF",
        "Secure Authentication",
        "Secure Data Handling",
      ],

      topicDetails: [
        {
          title: "Frontend Security",
          items: [
            "Browser Security",
            "XSS",
            "CSRF",
            "Secure Authentication",
            "Secure Data Handling",
          ],
        },
      ],

      purpose:
        "Learn the security responsibilities involved in building browser-based applications.",

      understanding:
        "Learn the security responsibilities involved in building browser-based applications.",

      practice:
        "Recognize common frontend security risks and apply secure development practices.",

      project: "Security-Hardened Frontend",

      achievement: "Frontend Security Engineering",
    },

    {
      id: 18,

      title: "Design Systems & Advanced UI",

      topics: [
        "Design Systems",
        "Component Libraries",
        "Design Tokens",
        "Theming",
        "Scalable UI Architecture",
      ],

      topicDetails: [
        {
          title: "Design Systems",
          items: [
            "Design Systems",
            "Component Libraries",
            "Design Tokens",
            "Theming",
            "Scalable UI Architecture",
          ],
        },
      ],

      purpose:
        "Learn how organizations create consistent and reusable interfaces across large applications.",

      understanding:
        "Learn how organizations create consistent and reusable interfaces across large applications.",

      practice:
        "Build reusable components, define design tokens, create themes, and organize a component library.",

      project: "Reusable Design System",

      achievement: "Design System Engineering",
    },

    {
      id: 19,

      title: "Advanced Web Applications",

      topics: [
        "Real-Time Applications",
        "WebSockets",
        "Offline Applications",
        "Progressive Web Apps",
        "Advanced Browser APIs",
      ],

      topicDetails: [
        {
          title: "Advanced Web",
          items: [
            "Real-Time Applications",
            "WebSockets",
            "Offline Applications",
            "Progressive Web Apps",
            "Advanced Browser APIs",
          ],
        },
      ],

      purpose:
        "Explore capabilities that allow web applications to behave like sophisticated application platforms.",

      understanding:
        "Explore capabilities that allow web applications to behave more like sophisticated application platforms.",

      practice:
        "Build real-time interactions, offline capabilities, and advanced browser-based functionality.",

      project: "Real-Time Collaborative Application",

      achievement: "Advanced Frontend Engineering",
    },

    {
      id: 20,

      title: "Frontend Deployment & DevOps",

      topics: [
        "Production Builds",
        "Environment Configuration",
        "CI/CD",
        "Hosting & Deployment",
        "Monitoring",
      ],

      topicDetails: [
        {
          title: "Frontend Deployment",
          items: [
            "Production Builds",
            "Environment Configuration",
            "CI/CD",
            "Hosting & Deployment",
            "Monitoring",
          ],
        },
      ],

      purpose:
        "Learn how frontend applications move from development into production.",

      understanding:
        "Learn how frontend applications move from development into production.",

      practice:
        "Create production builds, configure environments, automate deployment, and monitor applications.",

      project: "Production Deployment Pipeline",

      achievement: "Frontend DevOps",
    },

    {
      id: 21,

      title: "AI-Powered Frontend",

      topics: [
        "AI-Assisted Development",
        "LLM Integration",
        "AI Interfaces",
        "Streaming Responses",
        "AI User Experience",
      ],

      topicDetails: [
        {
          title: "AI-Powered Frontend",
          items: [
            "AI-Assisted Development",
            "LLM Integration",
            "AI Interfaces",
            "Streaming Responses",
            "AI User Experience",
          ],
        },
      ],

      purpose:
        "Learn how modern frontend applications can integrate AI capabilities into useful user experiences.",

      understanding:
        "Learn how modern frontend applications can integrate AI capabilities into useful user experiences.",

      practice:
        "Connect frontend interfaces with AI services, display streaming responses, and design effective AI interactions.",

      project: "AI-Powered Web Application",

      achievement: "AI-Powered Frontend Engineer",
    },

    {
      id: 22,

      title: "Frontend System Design",

      topics: [
        "Frontend Architecture",
        "Scalability",
        "State Architecture",
        "Performance Architecture",
        "Architecture Trade-Offs",
      ],

      topicDetails: [
        {
          title: "Frontend System Design",
          items: [
            "Frontend Architecture",
            "Scalability",
            "State Architecture",
            "Performance Architecture",
            "Architecture Trade-Offs",
          ],
        },
      ],

      purpose:
        "Learn how to make architectural decisions for large and complex frontend applications.",

      understanding:
        "Learn how to make architectural decisions for large and complex frontend applications.",

      practice:
        "Design application structures that balance maintainability, scalability, performance, and developer experience.",

      project: "Large-Scale Frontend Architecture",

      achievement: "Frontend System Designer",
    },

    {
      id: 23,

      title: "Frontend Engineering & Architecture",

      topics: [
        "Enterprise Frontend Architecture",
        "Production Engineering",
        "Platform Engineering",
        "Technical Leadership",
        "Industry Preparation",
      ],

      topicDetails: [
        {
          title: "Frontend Engineering",
          items: [
            "Enterprise Frontend Architecture",
            "Production Engineering",
            "Platform Engineering",
            "Technical Leadership",
            "Industry Preparation",
          ],
        },
      ],

      purpose:
        "Bring together web fundamentals, UI engineering, application architecture, performance, security, testing, deployment, and AI-powered experiences.",

      understanding:
        "Bring together web fundamentals, UI engineering, application architecture, performance, security, testing, deployment, and AI-powered experiences.",

      practice:
        "Design and build frontend platforms that can support large teams, complex products, and production requirements.",

      project: "Enterprise Frontend Capstone",

      achievement: "CloudLearn AI Certified Frontend Engineer & Architect",
    },
  ],

  /* ============================================================
     HOW THE STUDENT PROGRESSES
     ============================================================ */

  studentProgression: [
    "Understand the Web",
    "Learn HTML",
    "Master CSS",
    "Build Responsive Interfaces",
    "Understand UI & UX",
    "Learn JavaScript",
    "Master Modern JavaScript",
    "Learn Git & Development Workflow",
    "Learn TypeScript",
    "Learn React",
    "Master Modern React",
    "Learn Frontend Architecture",
    "Build Modern Web Applications",
    "Master Accessibility",
    "Test Frontend Applications",
    "Optimize Performance",
    "Secure Frontend Systems",
    "Build Design Systems",
    "Build Advanced Web Applications",
    "Deploy to Production",
    "Build AI-Powered Interfaces",
    "Master Frontend System Design",
    "Become a Frontend Engineer",
    "Progress Toward Frontend Architect",
  ],

  /* ============================================================
     PROJECT PROGRESSION
     ============================================================ */

  projectProgression: [
    "Personal Web Introduction",
    "Multi-Page Personal Website",
    "Professional Landing Page",
    "Responsive E-Commerce Website",
    "Modern Dashboard Interface",
    "Interactive Task Manager",
    "API-Based Weather Dashboard",
    "Collaborative Frontend Project",
    "Type-Safe Application",
    "React Productivity Application",
    "React Application Platform",
    "Full-Stack SaaS Frontend",
    "Production Web Application",
    "Accessible Web Application",
    "Fully Tested Frontend Application",
    "Performance-Optimized Web Application",
    "Security-Hardened Frontend",
    "Reusable Design System",
    "Real-Time Collaborative Application",
    "Production Deployment Pipeline",
    "AI-Powered Web Application",
    "Large-Scale Frontend Architecture",
    "Enterprise Frontend Capstone",
  ],

  /* ============================================================
     CERTIFICATION GUIDANCE
     ============================================================ */

  certificationGuidance: {
    description: [
      "CloudLearn AI provides achievement credentials throughout the learning path so students can demonstrate their progress.",

      "External certifications can be recommended according to the learner's target role, technology stack, and specialization.",

      "Students do not need to collect every certification.",
    ],

    priority: [
      "Strong Web Fundamentals",
      "HTML & CSS",
      "JavaScript & TypeScript",
      "React & Modern Frameworks",
      "UI & UX",
      "Accessibility",
      "Testing",
      "Performance",
      "Security",
      "Deployment",
      "Real Projects",
    ],

    conclusion:
      "Certifications support the journey but do not replace practical frontend engineering ability.",
  },

  /* ============================================================
     FINAL CAPSTONE
     ============================================================ */

  finalCapstone: {
    title: "Enterprise Frontend Platform",

    description:
      "The final project combines the major concepts learned throughout the roadmap.",

    components: [
      {
        title: "User Experience",
        items: [
          "Requirements",
          "User Flows",
          "UI Design",
          "Responsive Experience",
        ],
      },

      {
        title: "Application",
        items: [
          "Components",
          "Routing",
          "State Management",
          "Application Architecture",
        ],
      },

      {
        title: "Data",
        items: [
          "API Integration",
          "Data Fetching",
          "Caching",
          "Error Handling",
        ],
      },

      {
        title: "Design System",
        items: [
          "Components",
          "Design Tokens",
          "Theming",
          "Reusable Patterns",
        ],
      },

      {
        title: "Accessibility",
        items: [
          "Semantic HTML",
          "Keyboard Navigation",
          "Accessible Forms",
          "Accessibility Testing",
        ],
      },

      {
        title: "Quality",
        items: [
          "Unit Testing",
          "Component Testing",
          "Integration Testing",
          "End-to-End Testing",
        ],
      },

      {
        title: "Performance",
        items: [
          "Code Splitting",
          "Lazy Loading",
          "Asset Optimization",
          "Performance Monitoring",
        ],
      },

      {
        title: "Security",
        items: [
          "Secure Authentication",
          "Browser Security",
          "Secure Data Handling",
          "Security Practices",
        ],
      },

      {
        title: "Deployment",
        items: [
          "Production Build",
          "CI/CD",
          "Hosting",
          "Monitoring",
        ],
      },

      {
        title: "AI",
        items: [
          "LLM Integration",
          "AI Interfaces",
          "Streaming",
          "AI User Experience",
        ],
      },
    ],

    outcome:
      "The learner finishes by demonstrating the ability to design, build, test, secure, optimize, deploy, monitor, and scale a modern frontend application.",
  },

  /* ============================================================
     ACHIEVEMENT PATH
     ============================================================ */

  achievementPath: [
    "Frontend Foundations",
    "Semantic Web Development",
    "Responsive Web Development",
    "UI Development",
    "JavaScript Developer",
    "Modern JavaScript",
    "Frontend Development Workflow",
    "TypeScript Developer",
    "React Developer",
    "Modern React Engineering",
    "Frontend Application Engineering",
    "Modern Web Application Engineering",
    "Accessible Frontend Development",
    "Frontend Quality Engineering",
    "Frontend Performance Engineering",
    "Frontend Security Engineering",
    "Design System Engineering",
    "Advanced Frontend Engineering",
    "Frontend DevOps",
    "AI-Powered Frontend Engineer",
    "Frontend System Designer",
    "CloudLearn AI Certified Frontend Engineer & Architect",
  ],

  /* ============================================================
     LEARNING PHILOSOPHY
     ============================================================ */

  learningPhilosophy: [
    "Understand",
    "Learn",
    "Practice",
    "Design",
    "Build",
    "Test",
    "Secure",
    "Optimize",
    "Deploy",
    "Monitor",
    "Scale",
    "Architect",
  ],
};

export default frontendDevelopmentPath;
import lesson1 from "./lesson1";
import lesson2 from "./lesson2";
import lesson3 from "./lesson3";
import lesson4 from "./lesson4";
import lesson5 from "./lesson5";
import lesson6 from "./lesson6";
import lesson7 from "./lesson7";
import lesson8 from "./lesson8";
import lesson9 from "./lesson9";
import lesson10 from "./lesson10";
import lesson11 from "./lesson11";
import lesson12 from "./lesson12";

import about from "./about";
import practice from "./practice";
import project from "./project";

export const module6Lessons = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  lesson11,
  lesson12
];

const module6 = {
  id: "module6",

  moduleNumber: 6,

  title: "LLM APIs & Application Development",

  shortTitle: "LLM APIs & Application Development",

  subtitle:
    "From model APIs to production-ready LLM applications",

  description:
    "Learn how to integrate LLM APIs into real applications and engineer the surrounding systems required for secure, reliable, observable, scalable, and production-oriented AI software.",

  lessonCount: 12,

  estimatedTime: "45–55 hours",

  difficulty: "Intermediate → Advanced",

  lessons: module6Lessons,

  resources: [
    about,
    practice,
    project
  ],

  learningPath: [
    {
      stage: 1,
      title: "API Foundations",
      lessons: [
        "lesson1",
        "lesson2",
        "lesson3"
      ],
      outcome:
        "Understand LLM APIs and build the first application layer."
    },

    {
      stage: 2,
      title: "Prompt & Runtime Engineering",
      lessons: [
        "lesson4",
        "lesson5",
        "lesson6"
      ],
      outcome:
        "Manage prompts, conversations, streaming, structured outputs, and tools."
    },

    {
      stage: 3,
      title: "Production Engineering",
      lessons: [
        "lesson7",
        "lesson8",
        "lesson9"
      ],
      outcome:
        "Optimize, secure, evaluate, and observe LLM applications."
    },

    {
      stage: 4,
      title: "Architecture & Deployment",
      lessons: [
        "lesson10",
        "lesson11"
      ],
      outcome:
        "Design scalable and reliable production architectures."
    },

    {
      stage: 5,
      title: "Capstone",
      lessons: [
        "lesson12"
      ],
      outcome:
        "Integrate the complete Module 6 application-development workflow."
    }
  ],

  conceptMap: {
    apiLayer: [
      "LLM APIs",
      "Providers",
      "SDKs",
      "Authentication",
      "Requests",
      "Responses",
      "Errors"
    ],

    promptLayer: [
      "System instructions",
      "Prompt templates",
      "Conversation history",
      "Context windows",
      "Prompt versioning"
    ],

    generationLayer: [
      "Streaming",
      "Async execution",
      "Concurrency",
      "Cancellation",
      "Generation parameters"
    ],

    structuredGeneration: [
      "Schemas",
      "Structured outputs",
      "Validation",
      "Business rules"
    ],

    toolLayer: [
      "Tool definitions",
      "Tool selection",
      "Argument validation",
      "Authorization",
      "Execution",
      "Tool results"
    ],

    productionLayer: [
      "Model selection",
      "Cost optimization",
      "Security",
      "Guardrails",
      "Evaluation",
      "Observability",
      "Architecture",
      "Deployment",
      "Scaling",
      "Reliability"
    ]
  },

  mathematicalTopics: [
    "Token-based cost estimation",
    "Input/output token economics",
    "TTFT",
    "Total latency",
    "Throughput",
    "P50",
    "P95",
    "P99",
    "Exponential backoff",
    "Cache hit rate",
    "Cost per request"
  ],

  programmingTopics: [
    "HTTP APIs",
    "SDK integration",
    "Environment configuration",
    "Async programming",
    "Streaming",
    "Prompt construction",
    "Structured validation",
    "Tool dispatching",
    "Retry handling",
    "Caching",
    "Logging",
    "Testing",
    "Service architecture"
  ],

  applicationTopics: [
    "Chat applications",
    "AI assistants",
    "Study assistants",
    "Structured workflows",
    "Tool-enabled applications",
    "Real-time AI interfaces"
  ],

  architectureTopics: [
    "Layered architecture",
    "Provider abstraction",
    "Adapter pattern",
    "Application services",
    "Orchestration",
    "Repositories",
    "Stateless services",
    "Load balancing",
    "Queues",
    "Production architecture"
  ],

  securityTopics: [
    "Authentication",
    "Authorization",
    "Prompt injection",
    "Indirect injection",
    "Sensitive data",
    "Input validation",
    "Output validation",
    "Tool security",
    "Rate limiting",
    "Guardrails",
    "Defense in depth"
  ],

  evaluationTopics: [
    "Golden datasets",
    "Reference-based evaluation",
    "Reference-free evaluation",
    "LLM-as-judge",
    "Regression testing",
    "Failure taxonomy",
    "Latency monitoring",
    "Token monitoring",
    "Cost monitoring"
  ],

  productionTopics: [
    "Deployment",
    "Horizontal scaling",
    "Health checks",
    "Timeouts",
    "Retries",
    "Exponential backoff",
    "Circuit breakers",
    "Queues",
    "Caching",
    "Fallbacks",
    "Graceful degradation",
    "Rollback"
  ],

  assessmentAreas: [
    "LLM API fundamentals",
    "Secure API integration",
    "Prompt and context management",
    "Streaming and asynchronous applications",
    "Structured outputs",
    "Tool calling",
    "Model selection",
    "Cost optimization",
    "LLM security",
    "Testing",
    "Evaluation",
    "Observability",
    "Architecture",
    "Deployment",
    "Production reliability",
    "Capstone implementation"
  ],

  navigation: {
    previousModule: {
      id: "module5",
      title: "Embeddings & Vector Databases",
      href: "/lesson/aiml/generative-ai/module5/lesson14"
    },

    nextModule: {
      id: "module7",
      title: "Retrieval-Augmented Generation",
      href: "/lesson/aiml/generative-ai/module7/lesson1"
    },

    firstLesson:
      "/lesson/aiml/generative-ai/module6/lesson1",

    lastLesson:
      "/lesson/aiml/generative-ai/module6/lesson12",

    practice:
      "/lesson/aiml/generative-ai/module6/practice",

    project:
      "/lesson/aiml/generative-ai/module6/project"
  },

  completion: {
    totalLessons: 12,

    requiredLessons: [
      "lesson1",
      "lesson2",
      "lesson3",
      "lesson4",
      "lesson5",
      "lesson6",
      "lesson7",
      "lesson8",
      "lesson9",
      "lesson10",
      "lesson11",
      "lesson12"
    ],

    requiredResources: [
      "practice",
      "project"
    ],

    criteria: [
      "Complete all twelve lessons.",
      "Understand LLM API architecture.",
      "Build secure API integrations.",
      "Understand prompt and context management.",
      "Implement streaming and asynchronous workflows.",
      "Understand structured outputs and tool calling.",
      "Understand model selection and cost optimization.",
      "Understand LLM security and guardrails.",
      "Understand testing and evaluation.",
      "Understand observability.",
      "Design production application architecture.",
      "Understand deployment and scaling.",
      "Complete the practice exercises.",
      "Complete the capstone project."
    ]
  }
};

export {
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  lesson11,
  lesson12,
  about,
  practice,
  project
};

export default module6;
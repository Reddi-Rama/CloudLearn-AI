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
import lesson13 from "./lesson13";
import lesson14 from "./lesson14";
import lesson15 from "./lesson15";
import lesson16 from "./lesson16";

import about from "./about";
import practice from "./practice";
import project from "./project";

export const module9Lessons = [
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
  lesson13,
  lesson14,
  lesson15,
  lesson16
];

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
  lesson13,
  lesson14,
  lesson15,
  lesson16,
  about,
  practice,
  project
};

const module9 = {
  id: "module9",

  title: "LLM Application Engineering",

  subtitle:
    "Production Architecture, Reliability, Security, Evaluation & Scalable AI Systems",

  description:
    "Master the engineering practices required to transform large language models into reliable, secure, observable, scalable, and production-ready applications.",

  lessonCount: 16,

  lessons: module9Lessons,

  learningPath: [
    {
      id: "lesson1",
      number: 1,
      title: "LLM Application Engineering Foundations"
    },
    {
      id: "lesson2",
      number: 2,
      title: "LLM Application Architecture & Design Patterns"
    },
    {
      id: "lesson3",
      number: 3,
      title: "LLM Context, State & Memory Engineering"
    },
    {
      id: "lesson4",
      number: 4,
      title: "Prompt Engineering for Production Applications"
    },
    {
      id: "lesson5",
      number: 5,
      title: "Structured Outputs, Tool Calling & Function Execution"
    },
    {
      id: "lesson6",
      number: 6,
      title: "LLM Agents, Workflows & Orchestration"
    },
    {
      id: "lesson7",
      number: 7,
      title: "LLM Application Security & Guardrails"
    },
    {
      id: "lesson8",
      number: 8,
      title: "Testing, Evaluation & Quality Engineering"
    },
    {
      id: "lesson9",
      number: 9,
      title: "Observability, Tracing & LLMOps"
    },
    {
      id: "lesson10",
      number: 10,
      title: "Cost, Latency & Performance Optimization"
    },
    {
      id: "lesson11",
      number: 11,
      title: "Multi-Model Routing, Fallbacks & Reliability"
    },
    {
      id: "lesson12",
      number: 12,
      title: "Data, Feedback & Continuous Improvement"
    },
    {
      id: "lesson13",
      number: 13,
      title: "Deployment & Infrastructure for LLM Applications"
    },
    {
      id: "lesson14",
      number: 14,
      title: "Scaling, Queues, Caching & Distributed AI Systems"
    },
    {
      id: "lesson15",
      number: 15,
      title: "Advanced LLM Application System Design"
    },
    {
      id: "lesson16",
      number: 16,
      title: "End-to-End LLM Application Engineering Capstone"
    }
  ],

  conceptMap: {
    foundations: [
      "LLM application stack",
      "Application architecture",
      "Request lifecycle",
      "Model integration"
    ],

    contextEngineering: [
      "Context windows",
      "Prompt construction",
      "State",
      "Memory",
      "Context compression"
    ],

    toolsAndAgents: [
      "Structured outputs",
      "Tool calling",
      "Function execution",
      "Agents",
      "Workflows",
      "Orchestration"
    ],

    security: [
      "Prompt injection",
      "Input validation",
      "Authorization",
      "Data protection",
      "Guardrails"
    ],

    quality: [
      "Testing",
      "Evaluation",
      "Regression testing",
      "Observability",
      "Tracing",
      "LLMOps"
    ],

    optimization: [
      "Token optimization",
      "Caching",
      "Latency",
      "Throughput",
      "Cost optimization"
    ],

    reliability: [
      "Model routing",
      "Fallbacks",
      "Retries",
      "Graceful degradation",
      "Failure handling"
    ],

    production: [
      "Deployment",
      "Infrastructure",
      "Scaling",
      "Queues",
      "Workers",
      "Distributed systems"
    ],

    systemDesign: [
      "Requirements",
      "Capacity planning",
      "Architecture trade-offs",
      "Security",
      "Reliability",
      "Scalability"
    ]
  },

  mathematicalTopics: [
    "Token cost estimation",
    "Inference cost",
    "Latency decomposition",
    "Throughput",
    "Concurrency",
    "Cache hit rate",
    "Queue utilization",
    "Availability",
    "Error budgets",
    "Precision",
    "Recall",
    "Evaluation metrics",
    "Capacity planning",
    "Model routing cost"
  ],

  programmingTopics: [
    "LLM API integration",
    "Prompt templates",
    "Context management",
    "Structured outputs",
    "Tool calling",
    "Agent workflows",
    "Memory systems",
    "Caching",
    "Queues",
    "Workers",
    "Model routing",
    "Evaluation pipelines",
    "Observability",
    "Testing",
    "Deployment"
  ],

  architectureTopics: [
    "Layered LLM application architecture",
    "Model gateway",
    "Application services",
    "Repository patterns",
    "RAG integration",
    "Tool architecture",
    "Agent architecture",
    "Memory architecture",
    "Event-driven systems",
    "Distributed AI systems",
    "Production infrastructure"
  ],

  securityTopics: [
    "Prompt injection defense",
    "Input validation",
    "Output validation",
    "Authentication",
    "Authorization",
    "Secrets management",
    "Sensitive data protection",
    "Tool permissions",
    "Tenant isolation",
    "Audit logging"
  ],

  evaluationTopics: [
    "Test datasets",
    "Golden datasets",
    "Regression testing",
    "LLM evaluation",
    "Quality metrics",
    "Failure analysis",
    "Human feedback",
    "Automated evaluation",
    "Continuous improvement"
  ],

  productionTopics: [
    "Environment management",
    "Containerization",
    "CI/CD",
    "Health checks",
    "Load balancing",
    "Horizontal scaling",
    "Queues",
    "Caching",
    "Rate limiting",
    "Distributed workers",
    "Disaster recovery"
  ],

  specialPages: {
    about: "about",
    practice: "practice",
    project: "project"
  },

  navigation: {
    previousModule: {
      id: "module8",
      title: "Multimodal Generative AI"
    },

    nextModule: null,

    isFirstModule: false,
    isFinalModule: true
  },

  completion: {
    totalLessons: 16,
    practiceRequired: true,
    projectRequired: true,
    assessmentRequired: true,

    criteria: [
      "Complete all 16 lessons.",
      "Complete the practice and mastery activities.",
      "Demonstrate production-oriented LLM engineering knowledge.",
      "Complete the Module 9 capstone.",
      "Pass the final module assessment."
    ]
  }
};

export default module9;
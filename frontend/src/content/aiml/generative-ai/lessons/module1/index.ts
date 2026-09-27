import lesson1 from "./lesson1";
import lesson2 from "./lesson2";
import lesson3 from "./lesson3";
import lesson4 from "./lesson4";
import lesson5 from "./lesson5";
import lesson6 from "./lesson6";
import lesson7 from "./lesson7";
import lesson8 from "./lesson8";

import about from "./about";
import practice from "./practice";
import project from "./project";

/*
 * Generative AI Foundations
 *
 * Module 1 content index.
 *
 * This file provides one central entry point for:
 * - Module information
 * - All lessons
 * - Practice material
 * - Project
 *
 * Keeping the exports centralized makes the course
 * content easier to import from the lesson route,
 * course renderer, sidebar, assessment system,
 * search system, and future progress tracking.
 */

export const module1 = {
  id: "module1",

  moduleNumber: 1,

  title: "Generative AI Foundations",

  shortTitle: "GenAI Foundations",

  subtitle:
    "Build the conceptual and engineering foundation required to understand and build modern Generative AI systems.",

  description:
    "This module introduces Generative AI from first principles and gradually connects generative models, architecture, training, representations, inference, decoding, evaluation, reliability, and real-world application engineering.",

  difficulty: "Beginner → Intermediate",

  estimatedTime: "12–16 hours",

  lessonCount: 8,

  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
    lesson7,
    lesson8
  ],

  resources: {
    about,
    practice,
    project
  },

  learningPath: [
    {
      lessonNumber: 1,
      id: "lesson1",
      title: "What Is Generative AI?",
      focus:
        "Understand the definition, evolution, characteristics, and major applications of Generative AI."
    },

    {
      lessonNumber: 2,
      id: "lesson2",
      title: "Generative Models — How Machines Learn to Generate",
      focus:
        "Understand probability distributions, sampling, latent spaces, and major generative model families."
    },

    {
      lessonNumber: 3,
      id: "lesson3",
      title: "Generative AI Architecture & Model Families",
      focus:
        "Understand the major model architectures and the layers of a complete Generative AI stack."
    },

    {
      lessonNumber: 4,
      id: "lesson4",
      title: "Generative AI Training, Data & Compute",
      focus:
        "Understand datasets, tokenization, forward passes, loss, optimization, GPUs, distributed training, and model adaptation."
    },

    {
      lessonNumber: 5,
      id: "lesson5",
      title: "Generative AI Data Representation & Latent Spaces",
      focus:
        "Understand tokens, embeddings, vector spaces, similarity, contextual representations, and latent representations."
    },

    {
      lessonNumber: 6,
      id: "lesson6",
      title: "Generative AI Inference & Decoding",
      focus:
        "Understand logits, softmax, temperature, sampling, greedy decoding, top-k, top-p, beam search, caching, and generation."
    },

    {
      lessonNumber: 7,
      id: "lesson7",
      title: "Generative AI Evaluation, Reliability & Limitations",
      focus:
        "Understand hallucination, correctness, relevance, grounding, evaluation datasets, robustness, monitoring, and failure analysis."
    },

    {
      lessonNumber: 8,
      id: "lesson8",
      title: "Generative AI Ecosystem & Application Workflow",
      focus:
        "Connect models, APIs, embeddings, RAG, tools, agents, security, evaluation, monitoring, and application architecture."
    }
  ],

  conceptProgression: [
    {
      stage: 1,
      name: "Understand",
      lessons: ["lesson1", "lesson2"],
      concepts: [
        "Generative AI",
        "Generative models",
        "Probability",
        "Sampling",
        "Model families"
      ]
    },

    {
      stage: 2,
      name: "Understand the Architecture",
      lessons: ["lesson3"],
      concepts: [
        "Model architecture",
        "Generative AI stack",
        "Transformers",
        "Foundation models"
      ]
    },

    {
      stage: 3,
      name: "Understand How Models Learn",
      lessons: ["lesson4"],
      concepts: [
        "Training data",
        "Loss",
        "Optimization",
        "Compute",
        "Pretraining",
        "Fine-tuning"
      ]
    },

    {
      stage: 4,
      name: "Understand Representation",
      lessons: ["lesson5"],
      concepts: [
        "Tokens",
        "Embeddings",
        "Vector spaces",
        "Latent spaces",
        "Similarity"
      ]
    },

    {
      stage: 5,
      name: "Understand Generation",
      lessons: ["lesson6"],
      concepts: [
        "Inference",
        "Logits",
        "Softmax",
        "Decoding",
        "Sampling",
        "Generation loop"
      ]
    },

    {
      stage: 6,
      name: "Understand Reliability",
      lessons: ["lesson7"],
      concepts: [
        "Evaluation",
        "Hallucination",
        "Grounding",
        "Robustness",
        "Monitoring"
      ]
    },

    {
      stage: 7,
      name: "Build Applications",
      lessons: ["lesson8"],
      concepts: [
        "APIs",
        "RAG",
        "Tools",
        "Agents",
        "Security",
        "Application architecture"
      ]
    }
  ],

  coreTopics: [
    "Generative AI",
    "Generative modeling",
    "Foundation models",
    "Autoregressive generation",
    "Transformer models",
    "Training",
    "Inference",
    "Tokens",
    "Embeddings",
    "Latent spaces",
    "Logits",
    "Softmax",
    "Temperature",
    "Sampling",
    "Top-k",
    "Top-p",
    "Beam search",
    "Hallucination",
    "Evaluation",
    "Grounding",
    "RAG",
    "Vector databases",
    "Tools",
    "Function calling",
    "Agents",
    "Structured output",
    "AI orchestration",
    "Security",
    "Monitoring",
    "Production architecture"
  ],

  skillsDeveloped: [
    "Explain Generative AI clearly.",
    "Identify major generative model families.",
    "Understand the relationship between training and inference.",
    "Explain token and embedding representations.",
    "Understand vector similarity.",
    "Explain the LLM generation process.",
    "Compare decoding strategies.",
    "Design evaluation datasets.",
    "Identify hallucination and reliability failures.",
    "Design RAG workflows.",
    "Understand tool-calling architectures.",
    "Design AI application architecture.",
    "Reason about security, latency, and cost."
  ],

  visualTopics: [
    "AI → ML → DL → Generative AI hierarchy",
    "Generative model classification",
    "Generative AI architecture",
    "Training pipeline",
    "Representation pipeline",
    "Autoregressive generation loop",
    "Softmax probability flow",
    "Greedy decoding",
    "Top-k sampling",
    "Top-p sampling",
    "Beam search",
    "Evaluation pipeline",
    "RAG architecture",
    "Tool-calling workflow",
    "Agent loop",
    "Complete GenAI application architecture"
  ],

  mathematicalTopics: [
    "Probability distributions",
    "Conditional probability",
    "Chain rule",
    "Maximum likelihood",
    "Negative log likelihood",
    "Cross entropy",
    "Softmax",
    "Temperature",
    "Vector representation",
    "Dot product",
    "Vector norm",
    "Cosine similarity",
    "Optimization",
    "Gradient descent",
    "Evaluation metrics"
  ],

  programmingTopics: [
    "Python probability examples",
    "Softmax implementation",
    "Sampling",
    "Temperature transformation",
    "Top-k filtering",
    "Top-p filtering",
    "Toy autoregressive generation",
    "Embedding similarity",
    "Evaluation scripts",
    "RAG simulation",
    "Tool dispatching",
    "Structured output validation"
  ],

  applicationTopics: [
    "Model APIs",
    "SDKs",
    "Prompt construction",
    "Embeddings",
    "Vector databases",
    "RAG",
    "Function calling",
    "Tools",
    "Agents",
    "Structured outputs",
    "AI orchestration",
    "Authentication",
    "Authorization",
    "Error handling",
    "Observability",
    "Evaluation",
    "Monitoring",
    "Cost",
    "Latency"
  ],

  assessmentAreas: [
    "Definitions",
    "Conceptual explanations",
    "Classification trees",
    "Architecture diagrams",
    "Mathematical calculations",
    "Code tracing",
    "Python implementation",
    "RAG design",
    "Evaluation design",
    "Security reasoning",
    "System architecture",
    "Scenario-based questions"
  ],

  moduleResources: {
    about: {
      id: "about",
      title: "About Module",
      description:
        "Module overview, learning map, prerequisites, concepts, career connections, and mastery checklist.",
      data: about
    },

    practice: {
      id: "practice",
      title: "Module Practice",
      description:
        "Questions, mathematical exercises, diagrams, debugging tasks, coding exercises, architecture challenges, and interview preparation.",
      data: practice
    },

    project: {
      id: "project",
      title: "Module Project",
      description:
        "A complete Generative AI application project combining models, RAG, embeddings, evaluation, security, and production engineering.",
      data: project
    }
  },

  navigation: {
    firstLesson: {
      moduleId: "module1",
      lessonId: "lesson1",
      href: "/lesson/aiml/generative-ai/module1/lesson1"
    },

    lastLesson: {
      moduleId: "module1",
      lessonId: "lesson8",
      href: "/lesson/aiml/generative-ai/module1/lesson8"
    },

    resources: [
      {
        id: "about",
        label: "About Module",
        href: "/lesson/aiml/generative-ai/module1/about"
      },
      {
        id: "practice",
        label: "Practice",
        href: "/lesson/aiml/generative-ai/module1/practice"
      },
      {
        id: "project",
        label: "Project",
        href: "/lesson/aiml/generative-ai/module1/project"
      }
    ]
  },

  completion: {
    totalLessons: 8,

    requiredLessons: [
      "lesson1",
      "lesson2",
      "lesson3",
      "lesson4",
      "lesson5",
      "lesson6",
      "lesson7",
      "lesson8"
    ],

    requiredResources: [
      "practice",
      "project"
    ],

    criteria: [
      "Complete all eight lessons.",
      "Understand the major Generative AI model families.",
      "Understand training and inference.",
      "Understand embeddings and latent representations.",
      "Understand decoding strategies.",
      "Understand evaluation and reliability.",
      "Understand RAG and application architecture.",
      "Complete the practice exercises.",
      "Complete the module project."
    ]
  }
};

/*
 * Individual lesson exports
 *
 * These make it possible for routes and other
 * components to import a specific lesson without
 * loading the complete module object manually.
 */

export {
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  about,
  practice,
  project
};

/*
 * Default export
 *
 * Useful when a component wants the entire module
 * through one import.
 */

export default module1;

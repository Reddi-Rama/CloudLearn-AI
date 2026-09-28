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

/*
 * ============================================================
 * MODULE 7 — RETRIEVAL-AUGMENTED GENERATION
 * ============================================================
 *
 * Central content index for:
 *
 * - Module metadata
 * - 16 lessons
 * - About page
 * - Practice
 * - Project
 * - Learning progression
 * - Concept map
 * - Technical skills
 * - Assessment areas
 * - Navigation metadata
 *
 * This file acts as the single module-level entry point.
 */

export const module7Lessons = [
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

export const module7 = {
  id: "module7",

  moduleNumber: 7,

  title: "Retrieval-Augmented Generation",

  shortTitle: "RAG",

  subtitle:
    "Build retrieval systems that connect language models with external knowledge.",

  description:
    "This module teaches Retrieval-Augmented Generation from document processing and chunking through embeddings, vector retrieval, hybrid search, reranking, grounding, evaluation, adaptive retrieval, advanced RAG architectures, security, optimization, and production system design.",

  lessonCount: 16,

  estimatedTime: "45–60 hours",

  difficulty: "Advanced",

  lessons: module7Lessons,

  about,

  practice,

  project,

  learningPath: [
    {
      lesson: 1,
      title: "RAG Fundamentals",
      focus: "Understand the core RAG architecture and why external knowledge is useful."
    },
    {
      lesson: 2,
      title: "Document Processing",
      focus: "Convert raw documents into clean searchable knowledge."
    },
    {
      lesson: 3,
      title: "Chunking Strategies",
      focus: "Create retrieval units while preserving useful context."
    },
    {
      lesson: 4,
      title: "Embeddings and Vector Stores",
      focus: "Represent knowledge as vectors and perform similarity search."
    },
    {
      lesson: 5,
      title: "Retrieval and Generation",
      focus: "Connect retrieval with context construction and grounded generation."
    },
    {
      lesson: 6,
      title: "RAG Pipeline",
      focus: "Understand the complete retrieval-to-generation workflow."
    },
    {
      lesson: 7,
      title: "Grounding and Citations",
      focus: "Connect generated claims to supporting evidence."
    },
    {
      lesson: 8,
      title: "RAG Evaluation",
      focus: "Measure retrieval, grounding, answer quality, latency, and cost."
    },
    {
      lesson: 9,
      title: "Query Transformation & Advanced Retrieval",
      focus: "Transform difficult queries into retrieval-friendly search strategies."
    },
    {
      lesson: 10,
      title: "Hybrid Retrieval, Reranking & Retrieval Optimization",
      focus: "Combine lexical and semantic retrieval and improve candidate quality."
    },
    {
      lesson: 11,
      title: "Multi-Step, Multi-Hop & Agentic RAG",
      focus: "Retrieve information across multiple steps and information sources."
    },
    {
      lesson: 12,
      title: "Corrective, Self-Reflective & Adaptive RAG",
      focus: "Detect weak retrieval and adapt the retrieval workflow."
    },
    {
      lesson: 13,
      title: "Temporal, Hierarchical & Domain-Specific RAG",
      focus: "Handle time, document hierarchy, versions, and specialized domains."
    },
    {
      lesson: 14,
      title: "Production RAG Security, Governance & Cost Optimization",
      focus: "Secure and operate RAG systems in production."
    },
    {
      lesson: 15,
      title: "Advanced RAG System Design & Optimization",
      focus: "Balance retrieval quality, latency, cost, reliability, and maintainability."
    },
    {
      lesson: 16,
      title: "End-to-End RAG Capstone & Production Architecture",
      focus: "Design the complete Knowledge-Based AI Assistant."
    }
  ],

  conceptMap: {
    title: "Retrieval-Augmented Generation",

    structure: [
      {
        category: "Knowledge",
        topics: [
          "Documents",
          "Parsing",
          "Normalization",
          "Metadata",
          "Versions"
        ]
      },

      {
        category: "Representation",
        topics: [
          "Chunking",
          "Embeddings",
          "Vector Representations",
          "Parent-Child Representation"
        ]
      },

      {
        category: "Storage",
        topics: [
          "Vector Databases",
          "Indexes",
          "Namespaces",
          "Metadata Filters"
        ]
      },

      {
        category: "Retrieval",
        topics: [
          "Semantic Search",
          "Lexical Search",
          "Hybrid Search",
          "Query Transformation",
          "Reranking"
        ]
      },

      {
        category: "Advanced Retrieval",
        topics: [
          "Multi-Query",
          "Multi-Hop",
          "Corrective Retrieval",
          "Adaptive Retrieval",
          "Temporal Retrieval",
          "Hierarchical Retrieval",
          "Agentic RAG"
        ]
      },

      {
        category: "Grounding",
        topics: [
          "Context Construction",
          "Evidence",
          "Citations",
          "Provenance",
          "Abstention",
          "Claim Validation"
        ]
      },

      {
        category: "Evaluation",
        topics: [
          "Precision@k",
          "Recall@k",
          "MRR",
          "Grounding Evaluation",
          "Answer Evaluation",
          "Regression Testing"
        ]
      },

      {
        category: "Production",
        topics: [
          "Security",
          "Authorization",
          "Tenant Isolation",
          "Observability",
          "Reliability",
          "Cost Optimization",
          "Governance"
        ]
      }
    ]
  },

  mathematicalTopics: [
    "Vector spaces",
    "Dot product",
    "Cosine similarity",
    "Euclidean distance",
    "Precision@k",
    "Recall@k",
    "F1",
    "Mean Reciprocal Rank",
    "Evidence coverage",
    "Unsupported claim rate",
    "Context budgets",
    "Latency models",
    "Cost models",
    "Cache hit rate"
  ],

  programmingTopics: [
    "Document processing",
    "Text chunking",
    "Embedding pipelines",
    "Vector search",
    "Metadata filtering",
    "Hybrid retrieval",
    "Reranking",
    "Context construction",
    "Evaluation pipelines",
    "RAG APIs",
    "Tracing",
    "Cost tracking"
  ],

  retrievalTopics: [
    "Dense retrieval",
    "Lexical retrieval",
    "Hybrid search",
    "Query rewriting",
    "Query expansion",
    "Multi-query retrieval",
    "Query decomposition",
    "Query routing",
    "Reranking",
    "Multi-hop retrieval",
    "Corrective retrieval",
    "Adaptive retrieval",
    "Temporal retrieval",
    "Hierarchical retrieval"
  ],

  groundingTopics: [
    "Grounded generation",
    "Evidence selection",
    "Claim-to-evidence mapping",
    "Citation design",
    "Provenance",
    "Insufficient evidence",
    "Conflicting evidence",
    "Grounding validation"
  ],

  evaluationTopics: [
    "Golden datasets",
    "Precision@k",
    "Recall@k",
    "MRR",
    "Answer quality",
    "Grounding quality",
    "Unsupported claim rate",
    "Latency",
    "Cost",
    "Regression testing",
    "Continuous evaluation",
    "Failure analysis"
  ],

  securityTopics: [
    "Authentication",
    "Authorization",
    "Tenant isolation",
    "Access-controlled retrieval",
    "Retrieval-time prompt injection",
    "Data privacy",
    "Secret management",
    "Audit logging"
  ],

  productionTopics: [
    "Architecture",
    "Caching",
    "Latency optimization",
    "Cost optimization",
    "Reliability",
    "Timeouts",
    "Retries",
    "Circuit breakers",
    "Observability",
    "Governance",
    "Scalability"
  ],

  applicationTopics: [
    "Knowledge assistants",
    "Document assistants",
    "University assistants",
    "Enterprise knowledge systems",
    "Technical documentation assistants",
    "Policy assistants"
  ],

  assessmentAreas: [
    "RAG fundamentals",
    "Document processing",
    "Chunking",
    "Embeddings",
    "Vector databases",
    "Retrieval",
    "Hybrid search",
    "Reranking",
    "Grounding",
    "RAG evaluation",
    "Advanced retrieval",
    "Production security",
    "System design",
    "Capstone implementation"
  ],

  resources: {
    primaryProject: "Knowledge-Based AI Assistant",

    achievement: "CloudLearn AI RAG Engineer",

    recommendedArtifacts: [
      "Architecture diagram",
      "Evaluation dataset",
      "Retrieval experiment results",
      "Failure analysis",
      "Project README",
      "Demo application"
    ]
  },

  navigation: {
    previousModule: {
      id: "module6",
      title: "LLM APIs & Application Development"
    },

    nextModule: {
      id: "module8",
      title: "Multimodal Generative AI"
    },

    firstLesson: {
      id: lesson1.id,
      title: lesson1.title
    },

    lastLesson: {
      id: lesson16.id,
      title: lesson16.title
    },

    specialPages: [
      {
        id: "about",
        title: "About Module"
      },
      {
        id: "practice",
        title: "Module Practice"
      },
      {
        id: "project",
        title: "Module Project"
      }
    ]
  },

  completion: {
    requirements: [
      "Complete all 16 lessons.",
      "Complete Module Practice.",
      "Pass the Module Check.",
      "Complete the Knowledge-Based AI Assistant project.",
      "Document project architecture.",
      "Evaluate retrieval and answer quality.",
      "Document limitations and future improvements."
    ],

    achievement: "CloudLearn AI RAG Engineer"
  }
};

/*
 * Individual lesson exports
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

/*
 * Default module export
 */

export default module7;
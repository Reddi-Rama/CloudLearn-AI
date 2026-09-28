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

import about from "./about";
import practice from "./practice";
import project from "./project";

/*
 * ============================================================
 * MODULE 5
 * EMBEDDINGS & VECTOR DATABASES
 * ============================================================
 *
 * Central content index for Module 5.
 *
 * Provides:
 *
 * - Module metadata
 * - All 14 lessons
 * - Learning path
 * - Concept map
 * - Mathematical topics
 * - Programming topics
 * - Application topics
 * - Architecture topics
 * - Practice
 * - Project
 * - About
 * - Navigation
 * - Completion criteria
 */

export const module5 = {
  id: "module5",

  moduleNumber: 5,

  title: "Embeddings & Vector Databases",

  shortTitle: "Embeddings & Vector DBs",

  subtitle:
    "Understand how information becomes vectors and how modern systems store, index, retrieve, filter, evaluate, and operate those vectors at scale.",

  description:
    "This module develops a complete understanding of embeddings and vector databases, progressing from vector representations and similarity mathematics to embedding pipelines, vector storage, approximate nearest-neighbor search, metadata filtering, performance optimization, production reliability, and advanced retrieval system design.",

  difficulty: "Intermediate → Advanced",

  estimatedTime: "20–28 hours",

  lessonCount: 14,

  lessons: [
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
    lesson14
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
      title: "What Are Embeddings?",
      focus:
        "Understand embeddings as numerical representations that capture useful semantic relationships between objects."
    },

    {
      lessonNumber: 2,
      id: "lesson2",
      title: "Embedding Models & Semantic Representation",
      focus:
        "Understand how embedding models transform text and other inputs into dense semantic vector representations."
    },

    {
      lessonNumber: 3,
      id: "lesson3",
      title: "Vector Similarity & Distance Metrics",
      focus:
        "Understand vector geometry, dot product, cosine similarity, Euclidean distance, normalization, and nearest-neighbor ranking."
    },

    {
      lessonNumber: 4,
      id: "lesson4",
      title: "Text Embedding Pipelines & Chunk Representations",
      focus:
        "Build the connection between raw documents, chunking, metadata, embeddings, and searchable vector representations."
    },

    {
      lessonNumber: 5,
      id: "lesson5",
      title: "Vector Databases & Vector Indexes",
      focus:
        "Understand vector database architecture, collections, records, indexing, filtering, persistence, and retrieval workflows."
    },

    {
      lessonNumber: 6,
      id: "lesson6",
      title: "Approximate Nearest Neighbor Search",
      focus:
        "Understand exact versus approximate search and the major strategies used to make large-scale vector retrieval efficient."
    },

    {
      lessonNumber: 7,
      id: "lesson7",
      title: "HNSW & ANN Indexing in Practice",
      focus:
        "Understand graph-based ANN retrieval and the practical parameters that influence recall, latency, and memory."
    },

    {
      lessonNumber: 8,
      id: "lesson8",
      title: "Vector Database Operations & Data Lifecycle",
      focus:
        "Understand vector CRUD operations, updates, deletion, versioning, re-embedding, synchronization, and lifecycle management."
    },

    {
      lessonNumber: 9,
      id: "lesson9",
      title: "Metadata Filtering, Namespaces & Multi-Tenancy",
      focus:
        "Understand metadata-aware retrieval, filtering strategies, namespaces, tenant isolation, authorization, and secure vector search."
    },

    {
      lessonNumber: 10,
      id: "lesson10",
      title: "Vector Search Performance Optimization & Scaling",
      focus:
        "Understand latency, throughput, batching, caching, ANN tuning, quantization, sharding, replication, and horizontal scaling."
    },

    {
      lessonNumber: 11,
      id: "lesson11",
      title: "Vector Database Architecture, Index Maintenance & Production Reliability",
      focus:
        "Design reliable production vector systems with index maintenance, backups, recovery, monitoring, reconciliation, and capacity planning."
    },

    {
      lessonNumber: 12,
      id: "lesson12",
      title: "Advanced Vector Retrieval & Embedding System Design",
      focus:
        "Combine embedding selection, retrieval, filtering, reranking, evaluation, migration, and architecture trade-offs into complete system designs."
    },

    {
      lessonNumber: 13,
      id: "lesson13",
      title: "Advanced Embedding Optimization & Retrieval Quality",
      focus:
        "Optimize embedding models, vector representations, retrieval parameters, compression, reranking, and evaluation for real-world retrieval workloads."
    },

    {
      lessonNumber: 14,
      id: "lesson14",
      title: "Production Embedding & Vector Retrieval Capstone",
      focus:
        "Integrate embeddings, vector storage, ANN retrieval, filtering, evaluation, reliability, security, and observability into a production-oriented retrieval system."
    }
  ],

  conceptMap: {
    representation: [
      "Embeddings",
      "Dense vectors",
      "Vector dimensions",
      "Semantic representation",
      "Contextual representation",
      "Normalization"
    ],

    mathematics: [
      "Vectors",
      "Vector magnitude",
      "Dot product",
      "Cosine similarity",
      "Euclidean distance",
      "Manhattan distance",
      "Nearest neighbors",
      "Similarity ranking"
    ],

    embeddingSystems: [
      "Embedding models",
      "Text embeddings",
      "Document embeddings",
      "Query embeddings",
      "Chunk representations",
      "Batch embedding",
      "Embedding migration",
      "Embedding versioning"
    ],

    vectorDatabases: [
      "Vector records",
      "Collections",
      "Namespaces",
      "Indexes",
      "CRUD operations",
      "Persistence",
      "Metadata"
    ],

    retrieval: [
      "Exact nearest-neighbor search",
      "Approximate nearest-neighbor search",
      "HNSW",
      "Candidate generation",
      "Top-k retrieval",
      "Filtering",
      "Reranking"
    ],

    optimization: [
      "Embedding model selection",
      "Dimensionality",
      "Normalization",
      "Quantization",
      "Compression",
      "Caching",
      "ANN tuning",
      "Reranking",
      "Latency optimization"
    ],

    production: [
      "Latency",
      "Throughput",
      "Caching",
      "Quantization",
      "Sharding",
      "Replication",
      "Index maintenance",
      "Backups",
      "Recovery",
      "Monitoring",
      "Observability"
    ],

    evaluation: [
      "Recall@k",
      "Precision@k",
      "MRR",
      "NDCG",
      "Latency benchmarking",
      "Retrieval regression testing",
      "Quality analysis"
    ]
  },

  mathematicalTopics: [
    "Vector representation",
    "Vector dimensions",
    "Vector magnitude",
    "Dot product",
    "Cosine similarity",
    "Euclidean distance",
    "Manhattan distance",
    "L2 normalization",
    "Nearest-neighbor search",
    "Top-k ranking",
    "Recall@k",
    "Precision@k",
    "MRR",
    "NDCG",
    "Latency",
    "Throughput",
    "Memory estimation"
  ],

  programmingTopics: [
    "Python vectors",
    "Embedding generation",
    "Text chunking",
    "Vector normalization",
    "Cosine similarity",
    "Nearest-neighbor search",
    "Vector storage",
    "Upsert operations",
    "Delete operations",
    "Metadata filtering",
    "ANN retrieval",
    "HNSW configuration",
    "Caching",
    "Latency measurement",
    "Retrieval evaluation",
    "Health checks",
    "Data reconciliation"
  ],

  applicationTopics: [
    "Semantic search",
    "Document retrieval",
    "Recommendation systems",
    "RAG retrieval",
    "Knowledge bases",
    "Enterprise search",
    "Multilingual retrieval",
    "Hybrid search",
    "Reranking",
    "Multi-tenant retrieval",
    "Vector database architecture",
    "Production retrieval systems"
  ],

  architectureTopics: [
    "Document ingestion pipeline",
    "Embedding pipeline",
    "Vector storage architecture",
    "ANN indexing",
    "Search API",
    "Metadata filtering",
    "Reranking pipeline",
    "Evaluation pipeline",
    "Observability pipeline",
    "Production vector architecture"
  ],

  assessmentAreas: [
    "Embedding concepts",
    "Vector mathematics",
    "Similarity calculations",
    "Distance calculations",
    "Embedding pipeline design",
    "Vector database architecture",
    "ANN algorithms",
    "HNSW",
    "Metadata filtering",
    "Multi-tenancy",
    "Performance optimization",
    "Retrieval evaluation",
    "Production reliability",
    "System architecture",
    "Python implementation",
    "Scenario-based design"
  ],

  moduleResources: {
    about: {
      id: "about",
      title: "About Module",
      description:
        "Module overview, prerequisites, learning map, concepts, career connections, and mastery checklist.",
      data: about
    },

    practice: {
      id: "practice",
      title: "Module Practice",
      description:
        "Conceptual questions, vector mathematics, coding exercises, debugging tasks, retrieval challenges, architecture problems, and interview preparation.",
      data: practice
    },

    project: {
      id: "project",
      title: "Module Project",
      description:
        "Build a production-oriented semantic knowledge retrieval system using embeddings, vector search, metadata filtering, evaluation, and reliability engineering.",
      data: project
    }
  },

  navigation: {
    firstLesson: {
      moduleId: "module5",
      lessonId: "lesson1",
      href: "/lesson/aiml/generative-ai/module5/lesson1"
    },

    lastLesson: {
      moduleId: "module5",
      lessonId: "lesson14",
      href: "/lesson/aiml/generative-ai/module5/lesson14"
    },

    resources: [
      {
        id: "about",
        label: "About Module",
        href: "/lesson/aiml/generative-ai/module5/about"
      },
      {
        id: "practice",
        label: "Practice",
        href: "/lesson/aiml/generative-ai/module5/practice"
      },
      {
        id: "project",
        label: "Project",
        href: "/lesson/aiml/generative-ai/module5/project"
      }
    ]
  },

  completion: {
    totalLessons: 14,

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
      "lesson12",
      "lesson13",
      "lesson14"
    ],

    requiredResources: [
      "practice",
      "project"
    ],

    criteria: [
      "Understand what embeddings represent.",
      "Understand how embedding models create vector representations.",
      "Calculate and interpret vector similarity.",
      "Understand text-to-vector pipelines.",
      "Understand vector database architecture.",
      "Understand exact and approximate nearest-neighbor search.",
      "Understand HNSW and ANN indexing.",
      "Manage vector data throughout its lifecycle.",
      "Apply metadata filtering and tenant isolation.",
      "Optimize vector retrieval performance.",
      "Understand advanced embedding optimization.",
      "Evaluate retrieval quality quantitatively.",
      "Design reliable production vector infrastructure.",
      "Design complete embedding and retrieval systems."
    ]
  },

  progression: {
    stage1: {
      title: "Representation",
      lessons: [
        "lesson1",
        "lesson2",
        "lesson3"
      ]
    },

    stage2: {
      title: "Embedding Pipelines",
      lessons: [
        "lesson4"
      ]
    },

    stage3: {
      title: "Vector Storage & Search",
      lessons: [
        "lesson5",
        "lesson6",
        "lesson7"
      ]
    },

    stage4: {
      title: "Vector Operations & Security",
      lessons: [
        "lesson8",
        "lesson9"
      ]
    },

    stage5: {
      title: "Performance & Production",
      lessons: [
        "lesson10",
        "lesson11"
      ]
    },

    stage6: {
      title: "Advanced Retrieval & Capstone",
      lessons: [
        "lesson12",
        "lesson13",
        "lesson14"
      ]
    }
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
  lesson13,
  lesson14,
  about,
  practice,
  project
};

export default module5;
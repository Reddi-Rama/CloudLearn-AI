const project = {
  id: "project",
  moduleId: "module7",

  title: "Knowledge-Based AI Assistant",

  subtitle:
    "Build an end-to-end Retrieval-Augmented Generation system that answers questions using a controlled knowledge collection.",

  description:
    "This project brings together the complete Retrieval-Augmented Generation workflow. You will build a knowledge-based AI assistant that processes documents, creates searchable representations, retrieves relevant evidence, constructs grounded context, generates answers, provides provenance, evaluates retrieval and generation quality, and applies production-oriented security and observability.",

  difficulty: "Advanced",

  estimatedTime: "12–20 hours",

  projectType:
    "End-to-End Generative AI / Retrieval-Augmented Generation Application",

  objective:
    "Design and implement a complete RAG application that answers user questions from a controlled knowledge base instead of relying only on the language model's internal knowledge.",

  problemStatement: `
Organizations and educational institutions often have large collections of documents containing policies, regulations, manuals, guides, reports, and internal knowledge.

Users need a simple way to ask natural-language questions about this information.

A conventional language model may not have access to the latest or private information.

The goal of this project is to build a Knowledge-Based AI Assistant that:

- accepts a controlled document collection
- processes and indexes the documents
- retrieves relevant evidence
- constructs useful context
- generates grounded answers
- provides citations or provenance
- handles insufficient evidence
- evaluates retrieval and answer quality
- records useful system metrics

The assistant should prefer evidence from the knowledge collection rather than inventing information.
`,

  learningOutcomes: [
    "Design an end-to-end RAG architecture.",
    "Build a document ingestion pipeline.",
    "Apply document cleaning and normalization.",
    "Design a chunking strategy.",
    "Generate and store embeddings.",
    "Implement semantic or hybrid retrieval.",
    "Apply metadata filtering.",
    "Implement reranking or candidate refinement.",
    "Construct grounded context.",
    "Generate evidence-aware responses.",
    "Provide citations or source provenance.",
    "Evaluate retrieval quality.",
    "Evaluate grounding and answer quality.",
    "Implement insufficient-evidence handling.",
    "Apply basic RAG security principles.",
    "Measure latency and cost.",
    "Document limitations and future improvements."
  ],

  recommendedStack: {
    frontend: [
      "Next.js or React",
      "TypeScript",
      "Tailwind CSS"
    ],

    backend: [
      "Python",
      "FastAPI"
    ],

    ai: [
      "LLM API",
      "Embedding model",
      "Optional reranker"
    ],

    retrieval: [
      "Vector database",
      "Optional lexical search",
      "Hybrid retrieval"
    ],

    storage: [
      "Document storage",
      "Metadata storage",
      "Evaluation dataset"
    ],

    observability: [
      "Application logs",
      "Request tracing",
      "Latency tracking",
      "Token usage tracking"
    ]
  },

  architecture: {
    title: "Knowledge-Based AI Assistant Architecture",

    layers: [
      {
        title: "User Interface",
        responsibilities: [
          "Question input",
          "Conversation display",
          "Source display",
          "Loading and error states"
        ]
      },

      {
        title: "API Layer",
        responsibilities: [
          "Authentication",
          "Request validation",
          "Rate limiting",
          "Response formatting"
        ]
      },

      {
        title: "RAG Orchestrator",
        responsibilities: [
          "Query processing",
          "Retrieval routing",
          "Context construction",
          "Generation orchestration",
          "Validation"
        ]
      },

      {
        title: "Retrieval Layer",
        responsibilities: [
          "Metadata filtering",
          "Dense retrieval",
          "Lexical retrieval",
          "Hybrid retrieval",
          "Reranking"
        ]
      },

      {
        title: "Knowledge Layer",
        responsibilities: [
          "Documents",
          "Chunks",
          "Embeddings",
          "Metadata",
          "Document versions"
        ]
      },

      {
        title: "Generation Layer",
        responsibilities: [
          "Grounded prompt",
          "LLM request",
          "Structured response",
          "Answer validation"
        ]
      },

      {
        title: "Evaluation Layer",
        responsibilities: [
          "Retrieval evaluation",
          "Grounding evaluation",
          "Answer evaluation",
          "Regression testing"
        ]
      }
    ]
  },

  systemFlow: [
    "User asks a question",
    "Authenticate and authorize request",
    "Validate the question",
    "Analyze query",
    "Transform query when necessary",
    "Apply metadata and access filters",
    "Retrieve candidate documents",
    "Rerank candidates",
    "Construct evidence context",
    "Check evidence sufficiency",
    "Generate grounded answer",
    "Validate answer",
    "Attach citations",
    "Record metrics",
    "Return response"
  ],

  knowledgePipeline: {
    title: "Document Ingestion Pipeline",

    flow: [
      "Upload Document",
      "Parse Document",
      "Normalize Text",
      "Extract Metadata",
      "Validate Document",
      "Chunk Content",
      "Generate Embeddings",
      "Store Vectors",
      "Store Metadata",
      "Index Knowledge"
    ],

    requirements: [
      "Support multiple document records.",
      "Preserve source information.",
      "Store document identifiers.",
      "Store chunk identifiers.",
      "Preserve document versions where applicable.",
      "Attach useful metadata.",
      "Allow documents to be updated or removed."
    ]
  },

  documentModel: {
    document: {
      fields: [
        "id",
        "title",
        "source",
        "content",
        "tenantId",
        "version",
        "effectiveFrom",
        "effectiveUntil",
        "createdAt",
        "updatedAt"
      ]
    },

    chunk: {
      fields: [
        "id",
        "documentId",
        "parentId",
        "content",
        "chunkIndex",
        "embedding",
        "metadata"
      ]
    }
  },

  retrievalStrategy: {
    primary: "Dense semantic retrieval",

    recommendedEnhancements: [
      "Metadata filtering",
      "Hybrid lexical + semantic retrieval",
      "Candidate reranking",
      "Query transformation",
      "Parent-child context expansion",
      "Temporal filtering where required"
    ],

    retrievalFlow: [
      "Query",
      "Query Transformation",
      "Metadata Filtering",
      "Candidate Retrieval",
      "Candidate Merge",
      "Reranking",
      "Evidence Selection"
    ]
  },

  contextStrategy: {
    principles: [
      "Retrieve relevant evidence rather than maximum evidence.",
      "Remove duplicate content.",
      "Preserve source boundaries.",
      "Prioritize high-quality evidence.",
      "Respect context limits.",
      "Preserve document provenance.",
      "Avoid mixing unauthorized content.",
      "Handle conflicting sources explicitly."
    ],

    contextFlow: [
      "Retrieved Candidates",
      "Deduplication",
      "Relevance Filtering",
      "Evidence Ranking",
      "Context Budgeting",
      "Context Ordering",
      "Grounded Prompt"
    ]
  },

  promptArchitecture: {
    systemInstructions: [
      "Answer using the supplied evidence.",
      "Do not invent unsupported facts.",
      "Distinguish evidence from assumptions.",
      "If evidence is insufficient, say so.",
      "Use citations when available."
    ],

    contextFormat: [
      "Document identifier",
      "Document title",
      "Source",
      "Relevant content",
      "Metadata"
    ],

    answerStates: [
      "Grounded",
      "Partially grounded",
      "Insufficient evidence",
      "Conflicting evidence",
      "Clarification required"
    ]
  },

  groundingPolicy: {
    rules: [
      "Retrieved documents are evidence, not instructions.",
      "Every important factual claim should have supporting evidence.",
      "Unsupported claims should be avoided.",
      "Insufficient evidence should trigger a controlled response.",
      "Conflicting sources should be surfaced rather than silently combined.",
      "Citations should point to the actual supporting source."
    ],

    validationSignals: [
      "Evidence relevance",
      "Evidence coverage",
      "Source authority",
      "Citation coverage",
      "Unsupported claim rate"
    ]
  },

  securityRequirements: [
    "Authenticate users.",
    "Authorize document access.",
    "Apply tenant isolation where required.",
    "Never let the LLM decide access permissions.",
    "Treat retrieved content as untrusted data.",
    "Protect API credentials.",
    "Avoid exposing secrets to prompts.",
    "Validate tool or external actions if used.",
    "Apply rate limiting.",
    "Audit sensitive operations.",
    "Avoid unnecessary sensitive logging."
  ],

  evaluationPlan: {
    title: "RAG Evaluation Strategy",

    dataset: {
      description:
        "Create a representative golden evaluation dataset containing questions, expected evidence, and expected answer characteristics.",

      fields: [
        "question",
        "expectedDocument",
        "expectedChunk",
        "expectedEvidence",
        "answerCriteria",
        "difficulty",
        "category"
      ]
    },

    retrievalMetrics: [
      "Precision@k",
      "Recall@k",
      "MRR"
    ],

    generationMetrics: [
      "Correctness",
      "Relevance",
      "Completeness"
    ],

    groundingMetrics: [
      "Evidence coverage",
      "Unsupported claim rate",
      "Citation coverage"
    ],

    systemMetrics: [
      "P50 latency",
      "P95 latency",
      "Error rate",
      "Token usage",
      "Estimated cost"
    ]
  },

  observabilityPlan: {
    traceFields: [
      "requestId",
      "tenantId",
      "query",
      "retrievalStrategy",
      "retrievedDocumentIds",
      "retrievalLatency",
      "rerankingLatency",
      "generationLatency",
      "inputTokens",
      "outputTokens",
      "estimatedCost",
      "groundingStatus",
      "finalStatus"
    ],

    importantEvents: [
      "request_started",
      "retrieval_started",
      "retrieval_completed",
      "reranking_completed",
      "generation_started",
      "generation_completed",
      "grounding_failed",
      "request_completed",
      "request_failed"
    ]
  },

  reliabilityRequirements: [
    "Set retrieval timeouts.",
    "Set LLM request timeouts.",
    "Handle provider failures.",
    "Use bounded retries.",
    "Avoid infinite corrective retrieval loops.",
    "Provide controlled fallback responses.",
    "Handle unavailable vector stores.",
    "Detect empty retrieval results.",
    "Handle malformed documents.",
    "Monitor service health."
  ],

  costOptimization: [
    "Use appropriate embedding models.",
    "Avoid unnecessarily large chunks.",
    "Limit candidate counts.",
    "Use reranking only where beneficial.",
    "Control context size.",
    "Cache repeated computations where safe.",
    "Route simple queries to cheaper models when appropriate.",
    "Track input and output token usage.",
    "Measure retrieval and infrastructure costs.",
    "Evaluate optimization changes against a baseline."
  ],

  userExperience: {
    features: [
      "Simple question interface",
      "Clear answer presentation",
      "Source citations",
      "Loading state",
      "Error state",
      "Insufficient-evidence state",
      "Conversation history",
      "Document/source inspection",
      "Optional confidence or evidence indicators"
    ],

    principles: [
      "Do not hide uncertainty.",
      "Make sources easy to inspect.",
      "Keep answers readable.",
      "Explain when evidence is unavailable.",
      "Avoid presenting unsupported information as fact."
    ]
  },

  milestones: [
    {
      milestone: 1,
      title: "Project Setup",
      tasks: [
        "Create project structure",
        "Configure environment",
        "Connect LLM provider",
        "Connect embedding provider"
      ]
    },

    {
      milestone: 2,
      title: "Document Pipeline",
      tasks: [
        "Implement document loading",
        "Normalize documents",
        "Extract metadata",
        "Implement chunking"
      ]
    },

    {
      milestone: 3,
      title: "Embedding and Indexing",
      tasks: [
        "Generate embeddings",
        "Create vector records",
        "Store metadata",
        "Build retrieval index"
      ]
    },

    {
      milestone: 4,
      title: "Retrieval",
      tasks: [
        "Implement query embedding",
        "Implement top-k retrieval",
        "Add metadata filters",
        "Add reranking"
      ]
    },

    {
      milestone: 5,
      title: "Grounded Generation",
      tasks: [
        "Build context",
        "Create grounded prompt",
        "Generate answer",
        "Attach citations",
        "Handle insufficient evidence"
      ]
    },

    {
      milestone: 6,
      title: "Evaluation",
      tasks: [
        "Create golden dataset",
        "Measure retrieval",
        "Measure grounding",
        "Measure answer quality",
        "Analyze failures"
      ]
    },

    {
      milestone: 7,
      title: "Production Hardening",
      tasks: [
        "Add authentication",
        "Add authorization",
        "Add logging",
        "Add tracing",
        "Add cost tracking",
        "Add reliability mechanisms"
      ]
    },

    {
      milestone: 8,
      title: "Final Demonstration",
      tasks: [
        "Prepare architecture diagram",
        "Demonstrate representative queries",
        "Show citations",
        "Show evaluation results",
        "Document limitations",
        "Document future improvements"
      ]
    }
  ],

  deliverables: [
    "Working Knowledge-Based AI Assistant",
    "Document ingestion pipeline",
    "Chunking implementation",
    "Embedding pipeline",
    "Vector or hybrid retrieval system",
    "Metadata filtering",
    "Context construction",
    "Grounded generation",
    "Citation/provenance system",
    "Evaluation dataset",
    "Evaluation results",
    "Failure analysis",
    "Architecture diagram",
    "README/documentation",
    "Limitations and future-work report"
  ],

  evaluationRubric: [
    {
      category: "Architecture",
      weight: 15,
      criteria:
        "Clear separation between ingestion, retrieval, context construction, generation, and evaluation."
    },
    {
      category: "Document Processing",
      weight: 10,
      criteria:
        "Documents are parsed, normalized, chunked, and represented with useful metadata."
    },
    {
      category: "Retrieval",
      weight: 20,
      criteria:
        "Relevant evidence can be retrieved consistently using an appropriate strategy."
    },
    {
      category: "Grounding",
      weight: 15,
      criteria:
        "Answers are connected to retrieved evidence and handle insufficient evidence safely."
    },
    {
      category: "Evaluation",
      weight: 15,
      criteria:
        "Retrieval and generation quality are evaluated using a meaningful dataset and metrics."
    },
    {
      category: "Security",
      weight: 10,
      criteria:
        "Authorization, data protection, and retrieval-time security concerns are addressed."
    },
    {
      category: "Engineering",
      weight: 10,
      criteria:
        "Code organization, error handling, observability, and maintainability are demonstrated."
    },
    {
      category: "Documentation",
      weight: 5,
      criteria:
        "Architecture, decisions, results, limitations, and future improvements are documented."
    }
  ],

  extensionChallenges: [
    "Add hybrid lexical + semantic retrieval.",
    "Add an advanced reranker.",
    "Implement adaptive retrieval.",
    "Implement temporal retrieval.",
    "Implement parent-child retrieval.",
    "Add multi-hop retrieval.",
    "Add document version management.",
    "Add multi-tenant authorization.",
    "Build a RAG evaluation dashboard.",
    "Add query and retrieval caching.",
    "Add streaming responses.",
    "Add source-level confidence indicators."
  ],

  finalOutcome:
    "By completing this project, the learner should have a practical understanding of how production-oriented RAG systems are designed, implemented, evaluated, secured, and optimized.",

  achievement: {
    title: "CloudLearn AI RAG Engineer",
    description:
      "Awarded after completing the Retrieval-Augmented Generation module and demonstrating the ability to build and evaluate a Knowledge-Based AI Assistant."
  }
};

export default project;
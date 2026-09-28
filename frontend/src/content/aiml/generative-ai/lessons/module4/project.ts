const lesson = {
  id: "project",
  moduleId: "module4",
  title: "Module 4 Capstone Project",
  subtitle: "Build a production-oriented Retrieval-Augmented Generation knowledge assistant from ingestion to grounded answers.",

  overview: `
The Module 4 capstone combines the complete RAG learning path into one
end-to-end project.

The project is not simply about connecting a vector database to an LLM.

The objective is to build a system that can:

1. Ingest knowledge.
2. Process documents.
3. Create meaningful chunks.
4. Generate embeddings.
5. Store searchable representations.
6. Retrieve relevant evidence.
7. Combine lexical and semantic retrieval.
8. Rerank candidates.
9. Construct grounded context.
10. Generate evidence-based answers.
11. Provide source references.
12. Evaluate quality.
13. Handle failures.
14. Enforce access control.
15. Monitor performance.
16. Optimize cost and latency.

The final architecture should demonstrate understanding of RAG as a
complete production-oriented AI system.
`,

  projectTitle: "Grounded Knowledge Assistant",

  problemStatement: `
Organizations and institutions often store important information across
large collections of PDFs, documents, webpages, policies, manuals,
spreadsheets, and structured databases.

Traditional keyword search can be difficult to use for natural-language
questions, while a standalone language model may not have access to the
organization's private or current information.

Build a knowledge assistant that retrieves relevant organizational
information and generates answers grounded in the retrieved evidence.
`,

  projectGoals: [
    "Create a complete document ingestion pipeline.",
    "Build searchable document representations.",
    "Implement semantic retrieval.",
    "Implement lexical retrieval.",
    "Combine retrieval methods.",
    "Improve ranking using reranking.",
    "Construct controlled model context.",
    "Generate grounded responses.",
    "Display source information.",
    "Evaluate retrieval and generation quality.",
    "Handle missing evidence safely.",
    "Implement authentication and authorization concepts.",
    "Add monitoring and diagnostics.",
    "Optimize latency and cost."
  ],

  suggestedUseCases: [
    {
      name: "University Knowledge Assistant",
      description: "Answer questions about academic regulations, courses, examinations, attendance, departments, and student services."
    },
    {
      name: "Company Policy Assistant",
      description: "Answer employee questions using internal policies, manuals, HR documents, and organizational procedures."
    },
    {
      name: "Technical Documentation Assistant",
      description: "Answer developer questions using product documentation, API references, guides, and troubleshooting documents."
    },
    {
      name: "Research Knowledge Assistant",
      description: "Search and synthesize information from a controlled research document collection."
    }
  ],

  requiredFeatures: [
    {
      category: "Document Management",
      features: [
        "Document upload",
        "Document metadata",
        "Document IDs",
        "Version tracking",
        "Duplicate detection",
        "Document deletion"
      ]
    },
    {
      category: "Ingestion",
      features: [
        "PDF parsing",
        "Text extraction",
        "Cleaning",
        "Normalization",
        "Chunking",
        "Metadata propagation"
      ]
    },
    {
      category: "Representation",
      features: [
        "Embedding generation",
        "Vector storage",
        "Lexical index",
        "Compatible query/document representations"
      ]
    },
    {
      category: "Retrieval",
      features: [
        "Dense retrieval",
        "Keyword retrieval",
        "Hybrid retrieval",
        "Metadata filtering",
        "Top-k selection",
        "Reranking"
      ]
    },
    {
      category: "Generation",
      features: [
        "Grounded prompt",
        "Context construction",
        "Source references",
        "Insufficient-evidence handling",
        "Answer validation"
      ]
    },
    {
      category: "Evaluation",
      features: [
        "Golden dataset",
        "Recall@k",
        "Precision@k",
        "MRR",
        "Groundedness",
        "Correctness",
        "Regression tests"
      ]
    },
    {
      category: "Production",
      features: [
        "Authentication concept",
        "Authorization",
        "Tenant isolation concept",
        "Caching",
        "Logging",
        "Metrics",
        "Latency measurement",
        "Failure handling"
      ]
    }
  ],

  architecture: {
    title: "Complete Capstone Architecture",
    layers: [
      {
        name: "Client Layer",
        components: [
          "Next.js / React interface",
          "Search box",
          "Conversation interface",
          "Source display",
          "Feedback controls"
        ]
      },
      {
        name: "API Layer",
        components: [
          "FastAPI",
          "Authentication",
          "Request validation",
          "Rate limiting",
          "Request IDs"
        ]
      },
      {
        name: "Query Layer",
        components: [
          "Query normalization",
          "Query rewriting",
          "Intent routing",
          "Metadata filter extraction"
        ]
      },
      {
        name: "Retrieval Layer",
        components: [
          "Dense retrieval",
          "BM25 / lexical retrieval",
          "Hybrid fusion",
          "Metadata filtering",
          "Reranking"
        ]
      },
      {
        name: "Context Layer",
        components: [
          "Deduplication",
          "Context ordering",
          "Context compression",
          "Source tracking",
          "Context budget"
        ]
      },
      {
        name: "Generation Layer",
        components: [
          "LLM",
          "Grounded prompt",
          "Citation generation",
          "Answer formatting"
        ]
      },
      {
        name: "Validation Layer",
        components: [
          "Groundedness check",
          "Citation validation",
          "Output validation",
          "Abstention"
        ]
      },
      {
        name: "Knowledge Layer",
        components: [
          "Object/document storage",
          "Vector database",
          "Lexical index",
          "Metadata database"
        ]
      },
      {
        name: "Operations Layer",
        components: [
          "Logs",
          "Metrics",
          "Tracing",
          "Evaluation",
          "Caching",
          "Alerts"
        ]
      }
    ]
  },

  developmentPhases: [
    {
      phase: 1,
      title: "Project Setup",
      tasks: [
        "Create frontend and backend structure.",
        "Configure environment variables.",
        "Define API contracts.",
        "Define document and metadata schemas."
      ],
      deliverable: "Running project skeleton."
    },
    {
      phase: 2,
      title: "Document Ingestion",
      tasks: [
        "Implement document upload.",
        "Extract text.",
        "Clean text.",
        "Generate document metadata.",
        "Create stable document IDs."
      ],
      deliverable: "Working ingestion pipeline."
    },
    {
      phase: 3,
      title: "Chunking",
      tasks: [
        "Implement chunking.",
        "Preserve document metadata.",
        "Add chunk IDs.",
        "Experiment with chunk size and overlap."
      ],
      deliverable: "Searchable chunk dataset."
    },
    {
      phase: 4,
      title: "Embeddings",
      tasks: [
        "Select an embedding model.",
        "Generate document embeddings.",
        "Store embeddings.",
        "Implement query embedding."
      ],
      deliverable: "Embedding-based representation."
    },
    {
      phase: 5,
      title: "Vector Retrieval",
      tasks: [
        "Implement similarity search.",
        "Return top-k chunks.",
        "Expose scores and metadata."
      ],
      deliverable: "Working semantic retriever."
    },
    {
      phase: 6,
      title: "Lexical Retrieval",
      tasks: [
        "Implement keyword retrieval.",
        "Test exact identifiers and terminology.",
        "Compare lexical and semantic results."
      ],
      deliverable: "Working lexical retriever."
    },
    {
      phase: 7,
      title: "Hybrid Retrieval",
      tasks: [
        "Combine retrieval signals.",
        "Normalize scores.",
        "Implement fusion.",
        "Evaluate retrieval quality."
      ],
      deliverable: "Hybrid retriever."
    },
    {
      phase: 8,
      title: "Reranking",
      tasks: [
        "Generate candidate set.",
        "Apply reranking.",
        "Tune candidate count.",
        "Measure relevance improvement."
      ],
      deliverable: "Reranked evidence pipeline."
    },
    {
      phase: 9,
      title: "Grounded Generation",
      tasks: [
        "Construct context.",
        "Create grounded prompt.",
        "Generate answer.",
        "Attach source references.",
        "Handle insufficient evidence."
      ],
      deliverable: "Grounded knowledge assistant."
    },
    {
      phase: 10,
      title: "Evaluation",
      tasks: [
        "Create at least 30 evaluation questions.",
        "Define expected evidence.",
        "Calculate retrieval metrics.",
        "Evaluate groundedness.",
        "Evaluate answer quality."
      ],
      deliverable: "RAG evaluation report."
    },
    {
      phase: 11,
      title: "Production Engineering",
      tasks: [
        "Add authentication.",
        "Add authorization.",
        "Add logging.",
        "Add latency metrics.",
        "Add error handling.",
        "Add caching where useful."
      ],
      deliverable: "Production-oriented system."
    },
    {
      phase: 12,
      title: "Final Optimization",
      tasks: [
        "Optimize retrieval.",
        "Optimize context size.",
        "Measure latency.",
        "Measure cost.",
        "Run regression tests.",
        "Document architecture."
      ],
      deliverable: "Final capstone release."
    }
  ],

  evaluationPlan: {
    retrieval: [
      "Recall@5",
      "Precision@5",
      "MRR",
      "NDCG where applicable"
    ],
    generation: [
      "Groundedness",
      "Correctness",
      "Relevance",
      "Completeness",
      "Citation accuracy"
    ],
    system: [
      "Average latency",
      "P95 latency",
      "Error rate",
      "Cache hit rate",
      "Estimated token cost"
    ]
  },

  minimumEvaluationDataset: {
    totalQuestions: 30,
    categories: [
      "Direct factual questions",
      "Semantic questions",
      "Exact terminology questions",
      "Multi-document questions",
      "Multi-part questions",
      "No-answer questions",
      "Ambiguous questions",
      "Temporal questions",
      "Permission-sensitive questions",
      "Long-context questions"
    ]
  },

  expectedDeliverables: [
    "Complete source code",
    "System architecture diagram",
    "Data ingestion diagram",
    "Retrieval pipeline diagram",
    "Metadata schema",
    "Chunking strategy document",
    "Prompt design",
    "Evaluation dataset",
    "Evaluation results",
    "Latency measurements",
    "Cost analysis",
    "Security design",
    "Failure-handling design",
    "README",
    "Demo"
  ],

  projectReportStructure: [
    "1. Problem Statement",
    "2. Objectives",
    "3. System Requirements",
    "4. RAG Architecture",
    "5. Data Sources",
    "6. Ingestion Pipeline",
    "7. Chunking Strategy",
    "8. Embedding Model",
    "9. Vector Database",
    "10. Retrieval Strategy",
    "11. Hybrid Search",
    "12. Reranking",
    "13. Context Construction",
    "14. Grounded Generation",
    "15. Evaluation Methodology",
    "16. Results",
    "17. Failure Analysis",
    "18. Security",
    "19. Performance",
    "20. Cost",
    "21. Limitations",
    "22. Future Improvements",
    "23. Conclusion"
  ],

  successCriteria: [
    "The system can ingest the chosen knowledge sources.",
    "Documents are cleaned and chunked consistently.",
    "Metadata is preserved.",
    "Queries retrieve relevant evidence.",
    "Hybrid retrieval improves coverage where appropriate.",
    "Reranking improves candidate ordering where appropriate.",
    "Generated answers are grounded in retrieved evidence.",
    "Sources can be traced back to documents.",
    "The system handles insufficient evidence.",
    "Evaluation is repeatable.",
    "Security boundaries are documented and enforced where implemented.",
    "Performance is measured.",
    "Known limitations are documented."
  ],

  extensionIdeas: [
    "Multilingual RAG",
    "Graph-enhanced RAG",
    "Multimodal RAG",
    "Agentic retrieval",
    "Query rewriting",
    "Knowledge graph integration",
    "Streaming responses",
    "Feedback-driven evaluation",
    "Automatic regression testing",
    "Document version comparison",
    "Personalized retrieval",
    "Advanced observability dashboard"
  ],

  finalPresentation: {
    title: "Capstone Demonstration",
    sequence: [
      "Introduce the problem.",
      "Show the source documents.",
      "Demonstrate ingestion.",
      "Show chunking and metadata.",
      "Demonstrate retrieval.",
      "Show hybrid search and reranking.",
      "Ask a grounded question.",
      "Display retrieved sources.",
      "Demonstrate an insufficient-evidence case.",
      "Show evaluation results.",
      "Show architecture.",
      "Explain production considerations."
    ]
  },

  finalReflection: [
    "What retrieval strategy worked best for your dataset?",
    "Which queries failed and why?",
    "Did reranking improve measurable retrieval quality?",
    "How did chunk size affect results?",
    "How did context size affect generation?",
    "How did you detect unsupported answers?",
    "How would the architecture change at 10x the document volume?",
    "How would you protect private documents in a multi-tenant deployment?",
    "What is the largest remaining limitation of your system?"
  ],

  keyTakeaways: [
    "A strong RAG application is an end-to-end information system.",
    "Retrieval quality, context quality, and generation quality are interconnected.",
    "Production RAG requires more than a working prototype.",
    "Evaluation should be designed alongside the system.",
    "Security and authorization are fundamental for private knowledge bases.",
    "The capstone should demonstrate measurable retrieval and generation quality.",
    "Architecture decisions should be justified using quality, latency, cost, security, and complexity trade-offs."
  ]
};

export default lesson;
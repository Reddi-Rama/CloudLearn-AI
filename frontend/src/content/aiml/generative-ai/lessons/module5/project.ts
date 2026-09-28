const project = {
  id: "project",
  moduleId: "module5",

  title: "Production Semantic Knowledge Retrieval System",

  subtitle:
    "Build a complete embedding-powered semantic retrieval platform using document processing, embeddings, vector search, metadata filtering, evaluation, and production engineering.",

  description: `
This project brings together the major concepts from Module 5.

You will design and implement a production-oriented semantic retrieval
system capable of transforming raw documents into searchable vector
representations and returning relevant information for natural-language
queries.

The complete system connects:

Documents
    ↓
Extraction
    ↓
Cleaning
    ↓
Chunking
    ↓
Metadata
    ↓
Embeddings
    ↓
Vector Database
    ↓
ANN Index
    ↓
Metadata Filtering
    ↓
Semantic Retrieval
    ↓
Reranking
    ↓
Evaluation
    ↓
Monitoring
`,

  difficulty: "Advanced",

  estimatedTime: "12–20 hours",

  projectType: "Full-stack AI / Retrieval Engineering",

  prerequisites: [
    "Python fundamentals",
    "Basic data structures",
    "Understanding of vectors",
    "Cosine similarity",
    "Embeddings",
    "Vector databases",
    "ANN search",
    "Metadata filtering",
    "Basic API concepts"
  ],

  learningGoals: [
    "Build an end-to-end embedding pipeline.",
    "Convert documents into searchable chunks.",
    "Generate vector representations.",
    "Store vectors with metadata.",
    "Implement semantic similarity search.",
    "Implement top-k retrieval.",
    "Implement metadata filtering.",
    "Measure retrieval quality.",
    "Measure retrieval latency.",
    "Design a production-ready vector architecture."
  ],

  projectScenario: `
An organization has a large collection of technical documents.

Users should be able to ask natural-language questions such as:

    "How can I configure database connection pooling?"

    "Which documents explain authentication failures?"

    "Show me the latest deployment documentation."

The system should find semantically relevant document chunks even when
the query wording does not exactly match the document wording.

The platform must also support:

• document metadata
• source tracking
• category filtering
• tenant isolation
• document updates
• evaluation
• monitoring
• scalable retrieval
`,

  functionalRequirements: [
    {
      id: "FR-01",
      title: "Document Ingestion",
      description:
        "The system must accept documents and convert them into normalized text."
    },
    {
      id: "FR-02",
      title: "Chunking",
      description:
        "Documents must be divided into meaningful searchable chunks."
    },
    {
      id: "FR-03",
      title: "Metadata",
      description:
        "Each chunk must contain useful metadata such as document ID, title, category, tenant, and source."
    },
    {
      id: "FR-04",
      title: "Embedding Generation",
      description:
        "Each searchable chunk must be converted into a vector representation."
    },
    {
      id: "FR-05",
      title: "Vector Storage",
      description:
        "Vectors and their metadata must be stored in a vector-search system."
    },
    {
      id: "FR-06",
      title: "Semantic Search",
      description:
        "Users must be able to search using natural-language queries."
    },
    {
      id: "FR-07",
      title: "Top-K Retrieval",
      description:
        "The system must return the highest-ranked relevant chunks."
    },
    {
      id: "FR-08",
      title: "Metadata Filtering",
      description:
        "Users must be able to restrict results using structured metadata."
    },
    {
      id: "FR-09",
      title: "Evaluation",
      description:
        "The system must measure retrieval quality using a test dataset."
    },
    {
      id: "FR-10",
      title: "Monitoring",
      description:
        "The system must record retrieval latency and operational metrics."
    }
  ],

  architecture: {
    overview: `
CLIENT
  │
  ▼
SEARCH API
  │
  ├── Authentication
  │
  ├── Tenant Resolution
  │
  └── Query Validation
          │
          ▼
    QUERY EMBEDDING
          │
          ▼
    RETRIEVAL ENGINE
       │       │
       │       └── Metadata Filters
       │
       └── ANN Vector Search
              │
              ▼
        Candidate Results
              │
              ▼
          RERANKING
              │
              ▼
          TOP RESULTS
              │
              ▼
        API RESPONSE
`,

    ingestionPipeline: `
SOURCE DOCUMENT
      ↓
TEXT EXTRACTION
      ↓
NORMALIZATION
      ↓
CHUNKING
      ↓
METADATA ATTACHMENT
      ↓
EMBEDDING GENERATION
      ↓
VECTOR VALIDATION
      ↓
VECTOR DATABASE
      ↓
ANN INDEX
`
  },

  suggestedTechnology: {
    language: "Python",

    backendOptions: [
      "FastAPI",
      "Flask"
    ],

    embeddingOptions: [
      "Sentence Transformers",
      "Provider embedding API",
      "Local embedding model"
    ],

    vectorDatabaseOptions: [
      "FAISS",
      "Qdrant",
      "Chroma",
      "Milvus",
      "Weaviate",
      "pgvector"
    ],

    storageOptions: [
      "JSON for prototype",
      "SQLite",
      "PostgreSQL"
    ],

    frontendOptions: [
      "HTML/CSS/JavaScript",
      "React",
      "Next.js"
    ]
  },

  dataModel: {
    document: {
      id: "doc-001",
      title: "Database Administration Guide",
      source: "database-guide.pdf",
      category: "database",
      tenantId: "tenant-a",
      version: 1
    },

    chunk: {
      id: "doc-001-chunk-001",
      documentId: "doc-001",
      text: "Example document chunk...",
      category: "database",
      tenantId: "tenant-a",
      source: "database-guide.pdf",
      chunkIndex: 0,
      embedding: "[vector]"
    }
  },

  apiDesign: [
    {
      method: "POST",
      endpoint: "/documents",
      purpose: "Upload or register a document."
    },
    {
      method: "POST",
      endpoint: "/documents/index",
      purpose: "Process, chunk, embed, and index a document."
    },
    {
      method: "POST",
      endpoint: "/search",
      purpose: "Perform semantic vector search."
    },
    {
      method: "GET",
      endpoint: "/documents/:id",
      purpose: "Retrieve document metadata."
    },
    {
      method: "DELETE",
      endpoint: "/documents/:id",
      purpose: "Remove a document and associated vectors."
    },
    {
      method: "GET",
      endpoint: "/health",
      purpose: "Check service health."
    },
    {
      method: "GET",
      endpoint: "/metrics",
      purpose: "Return system and retrieval metrics."
    }
  ],

  searchRequestExample: {
    query: "How do I configure database connection pooling?",
    topK: 5,
    filters: {
      category: "database"
    }
  },

  searchResponseExample: {
    query: "How do I configure database connection pooling?",
    results: [
      {
        chunkId: "doc-17-chunk-04",
        score: 0.91,
        title: "Database Administration Guide",
        source: "database-guide.pdf"
      }
    ],
    latencyMs: 42
  },

  implementationPhases: [
    {
      phase: 1,
      title: "Project Setup",
      tasks: [
        "Create Python project.",
        "Create environment.",
        "Install dependencies.",
        "Create application structure."
      ]
    },
    {
      phase: 2,
      title: "Document Processing",
      tasks: [
        "Implement document loading.",
        "Normalize text.",
        "Implement chunking.",
        "Generate deterministic chunk IDs."
      ]
    },
    {
      phase: 3,
      title: "Embedding Pipeline",
      tasks: [
        "Select embedding model.",
        "Generate embeddings.",
        "Validate vector dimensions.",
        "Implement batching."
      ]
    },
    {
      phase: 4,
      title: "Vector Storage",
      tasks: [
        "Create vector collection.",
        "Store vectors.",
        "Store metadata.",
        "Implement update and delete."
      ]
    },
    {
      phase: 5,
      title: "Semantic Retrieval",
      tasks: [
        "Embed query.",
        "Run similarity search.",
        "Return top-k results.",
        "Display similarity scores."
      ]
    },
    {
      phase: 6,
      title: "Filtering",
      tasks: [
        "Implement metadata filtering.",
        "Implement category filtering.",
        "Implement tenant isolation.",
        "Test unauthorized retrieval."
      ]
    },
    {
      phase: 7,
      title: "Evaluation",
      tasks: [
        "Create golden query dataset.",
        "Measure Recall@k.",
        "Measure Precision@k.",
        "Measure MRR.",
        "Measure latency."
      ]
    },
    {
      phase: 8,
      title: "Optimization",
      tasks: [
        "Tune top-k.",
        "Tune ANN parameters.",
        "Add caching where appropriate.",
        "Measure P95 latency."
      ]
    },
    {
      phase: 9,
      title: "Production Hardening",
      tasks: [
        "Add logging.",
        "Add health checks.",
        "Add error handling.",
        "Add monitoring.",
        "Implement backup strategy.",
        "Document recovery procedures."
      ]
    }
  ],

  evaluation: {
    retrievalMetrics: [
      "Recall@1",
      "Recall@5",
      "Recall@10",
      "Precision@5",
      "MRR",
      "NDCG"
    ],

    systemMetrics: [
      "Average latency",
      "P50 latency",
      "P95 latency",
      "P99 latency",
      "Queries per second",
      "Error rate",
      "Cache hit rate"
    ],

    qualityChecks: [
      "Relevant documents appear near the top.",
      "Irrelevant documents are minimized.",
      "Metadata filters are respected.",
      "Tenant isolation is maintained.",
      "Updated documents replace stale content.",
      "Deleted documents no longer appear."
    ]
  },

  testCases: [
    {
      id: "TC-01",
      title: "Basic semantic query",
      expected:
        "Relevant document chunks appear in the top-k results."
    },
    {
      id: "TC-02",
      title: "Keyword mismatch",
      expected:
        "Semantically related documents are retrieved despite different wording."
    },
    {
      id: "TC-03",
      title: "Category filter",
      expected:
        "Only documents matching the requested category are returned."
    },
    {
      id: "TC-04",
      title: "Tenant isolation",
      expected:
        "Documents belonging to another tenant cannot be retrieved."
    },
    {
      id: "TC-05",
      title: "Document update",
      expected:
        "Updated content is reflected in subsequent retrieval."
    },
    {
      id: "TC-06",
      title: "Document deletion",
      expected:
        "Deleted content is removed from retrieval results."
    },
    {
      id: "TC-07",
      title: "Empty query",
      expected:
        "The API rejects invalid empty queries safely."
    },
    {
      id: "TC-08",
      title: "Large result set",
      expected:
        "The system remains within acceptable latency limits."
    }
  ],

  securityRequirements: [
    "Authenticate users before retrieval.",
    "Never trust tenant identifiers supplied directly by the client.",
    "Derive authorization context from authenticated identity.",
    "Apply tenant filters before returning results.",
    "Avoid exposing internal vector identifiers unnecessarily.",
    "Validate uploaded documents.",
    "Limit request sizes.",
    "Log security-sensitive failures.",
    "Prevent unauthorized document deletion."
  ],

  performanceTargets: {
    prototype: [
      "Functional semantic retrieval",
      "Correct top-k ranking",
      "Basic metadata filtering"
    ],

    productionOriented: [
      "Measured P95 latency",
      "Stable retrieval under concurrent requests",
      "Document update consistency",
      "Predictable memory usage",
      "Monitoring and health checks"
    ]
  },

  expectedDeliverables: [
    "Source code",
    "README",
    "Architecture diagram",
    "Embedding pipeline",
    "Vector database configuration",
    "Search API",
    "Metadata schema",
    "Evaluation dataset",
    "Evaluation report",
    "Performance measurements",
    "Security notes",
    "Test cases",
    "Deployment instructions"
  ],

  gradingRubric: [
    {
      category: "Document Processing",
      weight: 15,
      criteria:
        "Reliable extraction, cleaning, chunking, and metadata handling."
    },
    {
      category: "Embeddings",
      weight: 15,
      criteria:
        "Correct embedding generation and vector validation."
    },
    {
      category: "Vector Retrieval",
      weight: 20,
      criteria:
        "Correct similarity search and top-k ranking."
    },
    {
      category: "Filtering & Security",
      weight: 15,
      criteria:
        "Correct metadata filtering and tenant isolation."
    },
    {
      category: "Evaluation",
      weight: 15,
      criteria:
        "Meaningful retrieval-quality and latency evaluation."
    },
    {
      category: "Engineering",
      weight: 10,
      criteria:
        "Clean architecture, error handling, testing, and documentation."
    },
    {
      category: "Production Readiness",
      weight: 10,
      criteria:
        "Monitoring, reliability, scaling, backup, and recovery considerations."
    }
  ],

  advancedExtensions: [
    "Add hybrid keyword + vector retrieval.",
    "Add a reranking stage.",
    "Add multilingual embeddings.",
    "Add embedding-model migration.",
    "Add HNSW parameter tuning.",
    "Add vector quantization.",
    "Add query caching.",
    "Add distributed vector storage.",
    "Add automated retrieval regression tests.",
    "Add a retrieval observability dashboard."
  ],

  finalArchitectureChallenge: `
Design the final system so that it can evolve from:

        prototype
           ↓
      small dataset
           ↓
     production dataset
           ↓
      multi-tenant
           ↓
       distributed
           ↓
     highly available

The architecture should clearly separate:

DATA
REPRESENTATION
STORAGE
INDEXING
RETRIEVAL
SECURITY
EVALUATION
OBSERVABILITY
RELIABILITY
`
};

export default project;
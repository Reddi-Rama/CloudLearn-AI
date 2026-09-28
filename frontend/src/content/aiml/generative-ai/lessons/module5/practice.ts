const practice = {
  id: "practice",
  moduleId: "module5",

  title: "Module 5 Practice — Embeddings & Vector Databases",

  subtitle:
    "Comprehensive practice covering embeddings, vector mathematics, vector databases, ANN search, metadata filtering, optimization, reliability, and production retrieval architecture.",

  description: `
This practice module evaluates the complete knowledge developed across
Embeddings & Vector Databases.

It progresses from fundamentals to production architecture.

FOUNDATIONS
    ↓
VECTORS
    ↓
SIMILARITY
    ↓
EMBEDDING PIPELINES
    ↓
VECTOR DATABASES
    ↓
ANN
    ↓
FILTERING
    ↓
PERFORMANCE
    ↓
RELIABILITY
    ↓
ADVANCED RETRIEVAL
    ↓
SYSTEM DESIGN
`,

  estimatedTime: "6–10 hours",

  practiceStructure: [
    {
      stage: 1,
      title: "Foundations",
      lessons: ["lesson1", "lesson2"],
      focus: [
        "Embedding definitions",
        "Representation learning",
        "Semantic representation",
        "Embedding models"
      ]
    },
    {
      stage: 2,
      title: "Vector Mathematics",
      lessons: ["lesson3"],
      focus: [
        "Dot product",
        "Cosine similarity",
        "Euclidean distance",
        "Vector normalization"
      ]
    },
    {
      stage: 3,
      title: "Embedding Pipelines",
      lessons: ["lesson4"],
      focus: [
        "Chunking",
        "Metadata",
        "Embedding generation",
        "Ingestion"
      ]
    },
    {
      stage: 4,
      title: "Vector Storage",
      lessons: ["lesson5", "lesson6"],
      focus: [
        "Vector databases",
        "Indexes",
        "ANN",
        "HNSW",
        "IVF"
      ]
    },
    {
      stage: 5,
      title: "Retrieval Engineering",
      lessons: ["lesson7", "lesson8", "lesson9"],
      focus: [
        "Indexing",
        "Data lifecycle",
        "Metadata filtering",
        "Namespaces",
        "Multi-tenancy"
      ]
    },
    {
      stage: 6,
      title: "Production Systems",
      lessons: ["lesson10", "lesson11", "lesson12"],
      focus: [
        "Performance",
        "Reliability",
        "Scaling",
        "Advanced retrieval",
        "System design"
      ]
    }
  ],

  conceptualQuestions: [
    {
      id: 1,
      question: "What is an embedding?",
      expectedPoints: [
        "Numerical representation",
        "Vector representation",
        "Learned representation",
        "Semantic relationships"
      ]
    },
    {
      id: 2,
      question: "Why are embeddings useful for semantic search?",
      expectedPoints: [
        "Map content to vector space",
        "Related meanings can become geometrically closer",
        "Enable similarity-based retrieval"
      ]
    },
    {
      id: 3,
      question: "What is the difference between sparse and dense representations?",
      expectedPoints: [
        "Number of active dimensions",
        "Storage characteristics",
        "Typical semantic-search usage"
      ]
    },
    {
      id: 4,
      question: "Why does embedding dimensionality matter?",
      expectedPoints: [
        "Memory",
        "Computation",
        "Index size",
        "Potential representation capacity"
      ]
    },
    {
      id: 5,
      question: "What is semantic similarity?",
      expectedPoints: [
        "Meaning-based relatedness",
        "Representation-space relationship",
        "Difference from lexical overlap"
      ]
    },
    {
      id: 6,
      question: "What is vector normalization?",
      expectedPoints: [
        "Scaling vectors",
        "Unit norm",
        "Effect on cosine and dot-product retrieval"
      ]
    },
    {
      id: 7,
      question: "What is a vector database?",
      expectedPoints: [
        "Stores vectors",
        "Supports similarity retrieval",
        "Usually stores metadata",
        "Supports AI retrieval workloads"
      ]
    },
    {
      id: 8,
      question: "Why are vector indexes needed?",
      expectedPoints: [
        "Avoid exhaustive comparison",
        "Reduce search cost",
        "Support large-scale retrieval"
      ]
    },
    {
      id: 9,
      question: "What is ANN search?",
      expectedPoints: [
        "Approximate nearest-neighbor search",
        "Speed/quality trade-off",
        "Large-scale retrieval"
      ]
    },
    {
      id: 10,
      question: "What is HNSW?",
      expectedPoints: [
        "Graph-based ANN approach",
        "Hierarchical graph",
        "Search-effort parameters",
        "Recall-latency trade-off"
      ]
    },
    {
      id: 11,
      question: "What is metadata filtering?",
      expectedPoints: [
        "Restricts eligible records",
        "Works with similarity",
        "Supports structured constraints"
      ]
    },
    {
      id: 12,
      question: "Why is tenant isolation important?",
      expectedPoints: [
        "Data separation",
        "Authorization",
        "Privacy",
        "Prevent cross-tenant retrieval"
      ]
    }
  ],

  mathematicalQuestions: [
    {
      id: 1,
      question: "Calculate the dot product of [2, 3] and [4, 5].",
      answer: "23"
    },
    {
      id: 2,
      question: "Calculate the Euclidean distance between [0, 0] and [3, 4].",
      answer: "5"
    },
    {
      id: 3,
      question: "Calculate cosine similarity between [1, 0] and [1, 0].",
      answer: "1"
    },
    {
      id: 4,
      question: "Calculate cosine similarity between [1, 0] and [0, 1].",
      answer: "0"
    },
    {
      id: 5,
      question: "A vector has values [3, 4]. What is its L2 norm?",
      answer: "5"
    },
    {
      id: 6,
      question: "A system contains 1,000,000 vectors with 768 float32 dimensions. Estimate raw vector memory.",
      answer: "Approximately 3.072 GB before index and metadata overhead."
    },
    {
      id: 7,
      question: "If 850 out of 1,000 cache requests are hits, what is the cache hit rate?",
      answer: "85%"
    },
    {
      id: 8,
      question: "A retrieval system finds 8 relevant documents out of 10 known relevant documents. What is Recall?",
      answer: "0.8 or 80%"
    },
    {
      id: 9,
      question: "Five documents are retrieved and two are relevant. What is Precision@5?",
      answer: "0.4 or 40%"
    }
  ],

  formulaPractice: [
    {
      formula: "cosine(q,d) = (q · d) / (||q|| ||d||)",
      task: "Calculate cosine similarity for two two-dimensional vectors."
    },
    {
      formula: "Euclidean distance = sqrt(sum((x_i - y_i)^2))",
      task: "Calculate Euclidean distance for two vectors."
    },
    {
      formula: "Recall@k = relevant retrieved / total relevant",
      task: "Calculate Recall@k for several retrieval outputs."
    },
    {
      formula: "Precision@k = relevant retrieved / k",
      task: "Calculate Precision@k."
    },
    {
      formula: "MRR = average reciprocal rank",
      task: "Calculate MRR for a collection of queries."
    },
    {
      formula: "Raw memory ≈ N × D × B",
      task: "Estimate memory for different vector counts and dimensions."
    }
  ],

  comparisonQuestions: [
    {
      topic: "Dense vs Sparse",
      compare: [
        "Representation",
        "Storage",
        "Semantic retrieval",
        "Keyword retrieval",
        "Typical use"
      ]
    },
    {
      topic: "Exact vs Approximate Search",
      compare: [
        "Accuracy",
        "Latency",
        "Scalability",
        "Computational cost"
      ]
    },
    {
      topic: "HNSW vs IVF",
      compare: [
        "Index structure",
        "Search behavior",
        "Tuning",
        "Memory",
        "Recall-latency trade-off"
      ]
    },
    {
      topic: "Insert vs Upsert",
      compare: [
        "Existing record behavior",
        "Idempotency",
        "Use cases"
      ]
    },
    {
      topic: "Pre-filter vs Post-filter",
      compare: [
        "Filtering stage",
        "Recall implications",
        "Performance",
        "Index requirements"
      ]
    },
    {
      topic: "Sharding vs Replication",
      compare: [
        "Data distribution",
        "Availability",
        "Scaling",
        "Storage cost"
      ]
    },
    {
      topic: "General vs Domain-Specific Embeddings",
      compare: [
        "Coverage",
        "Specialization",
        "Evaluation",
        "Deployment"
      ]
    }
  ],

  diagramQuestions: [
    {
      question: "Draw the complete embedding pipeline.",
      requiredFlow: [
        "Source",
        "Cleaning",
        "Chunking",
        "Metadata",
        "Embedding",
        "Vector storage",
        "Index",
        "Retrieval"
      ]
    },
    {
      question: "Draw an ANN search architecture.",
      requiredFlow: [
        "Query embedding",
        "ANN index",
        "Candidates",
        "Ranking",
        "Top-k"
      ]
    },
    {
      question: "Draw a secure multi-tenant vector retrieval architecture.",
      requiredFlow: [
        "Authentication",
        "Tenant identification",
        "Authorization",
        "Metadata filtering",
        "Vector search",
        "Reranking",
        "Context"
      ]
    },
    {
      question: "Draw a vector database recovery workflow.",
      requiredFlow: [
        "Failure",
        "Detection",
        "Recovery",
        "Data restoration",
        "Index rebuild",
        "Validation",
        "Traffic restoration"
      ]
    }
  ],

  codingExercises: [
    {
      id: 1,
      title: "Cosine Similarity",
      task:
        "Implement cosine similarity without using a machine-learning library."
    },
    {
      id: 2,
      title: "Euclidean Distance",
      task:
        "Implement Euclidean distance between two vectors."
    },
    {
      id: 3,
      title: "Top-K Search",
      task:
        "Implement brute-force top-k vector retrieval."
    },
    {
      id: 4,
      title: "Recall@K",
      task:
        "Implement Recall@k for a retrieval evaluation dataset."
    },
    {
      id: 5,
      title: "Metadata Filtering",
      task:
        "Implement equality, range, and membership filters."
    },
    {
      id: 6,
      title: "Tenant Isolation",
      task:
        "Create a retrieval function that always derives tenant constraints from trusted identity."
    },
    {
      id: 7,
      title: "Vector Store",
      task:
        "Implement insert, upsert, get, delete, and search operations."
    },
    {
      id: 8,
      title: "Embedding Pipeline",
      task:
        "Build a small text → chunks → vectors → search simulation."
    },
    {
      id: 9,
      title: "Cache",
      task:
        "Implement a retrieval cache with hit-rate statistics."
    },
    {
      id: 10,
      title: "Capacity Calculator",
      task:
        "Estimate raw vector storage for different dimensions and precisions."
    }
  ],

  debuggingExercises: [
    {
      title: "Wrong Dimension",
      problem:
        "The embedding model produces 1536-dimensional vectors but the index expects 768 dimensions.",
      task:
        "Identify the problem and propose a safe migration."
    },
    {
      title: "Cross-Tenant Retrieval",
      problem:
        "A user from Tenant A receives a result belonging to Tenant B.",
      task:
        "Identify the security boundary failure and redesign the retrieval flow."
    },
    {
      title: "Stale Content",
      problem:
        "A document was updated but search continues returning the old information.",
      task:
        "Identify the lifecycle failure."
    },
    {
      title: "Low Recall",
      problem:
        "ANN retrieval returns relevant documents only occasionally.",
      task:
        "List possible causes and debugging steps."
    },
    {
      title: "High Latency",
      problem:
        "Vector search latency increases dramatically as the dataset grows.",
      task:
        "Identify possible index, filtering, infrastructure, and query-level causes."
    },
    {
      title: "Duplicate Vectors",
      problem:
        "Running ingestion twice creates duplicate chunks.",
      task:
        "Redesign the ingestion process using deterministic IDs and upsert semantics."
    }
  ],

  scenarioQuestions: [
    {
      id: 1,
      scenario:
        "You need to build semantic search for 10 million technical documents.",
      questions: [
        "Which embedding characteristics matter?",
        "Which ANN strategy would you investigate?",
        "How would you benchmark it?",
        "What metrics would you monitor?"
      ]
    },
    {
      id: 2,
      scenario:
        "A company has 500 organizations sharing one vector platform.",
      questions: [
        "How would you isolate tenants?",
        "Where should tenant identity come from?",
        "How would you prevent cross-tenant retrieval?"
      ]
    },
    {
      id: 3,
      scenario:
        "The embedding model must be replaced.",
      questions: [
        "Why can old and new vectors not simply be mixed?",
        "How would you migrate?",
        "How would you validate the new system?"
      ]
    },
    {
      id: 4,
      scenario:
        "Retrieval is fast but users report irrelevant results.",
      questions: [
        "Which quality signals would you inspect?",
        "Could the embedding model be responsible?",
        "Could chunking be responsible?",
        "Would reranking help?"
      ]
    },
    {
      id: 5,
      scenario:
        "Retrieval is accurate but too slow for an interactive assistant.",
      questions: [
        "Where could latency originate?",
        "How could caching help?",
        "Could candidate reduction help?",
        "What would P95 and P99 tell you?"
      ]
    }
  ],

  architectureChallenges: [
    {
      title: "Enterprise Knowledge Search",
      requirements: [
        "10 million document chunks",
        "Multiple organizations",
        "Semantic search",
        "Keyword search",
        "Metadata filtering",
        "Access control",
        "Citations",
        "Monitoring"
      ],
      deliverables: [
        "Architecture diagram",
        "Embedding strategy",
        "Vector database strategy",
        "Security model",
        "Evaluation plan"
      ]
    },
    {
      title: "Multilingual Knowledge Base",
      requirements: [
        "Multiple languages",
        "Cross-language retrieval",
        "Metadata",
        "Low latency"
      ],
      deliverables: [
        "Embedding strategy",
        "Index strategy",
        "Evaluation dataset",
        "Latency plan"
      ]
    },
    {
      title: "High-Scale Product Search",
      requirements: [
        "Millions of products",
        "Semantic search",
        "Exact filters",
        "Price filtering",
        "Category filtering",
        "High query volume"
      ],
      deliverables: [
        "Hybrid retrieval architecture",
        "Metadata schema",
        "ANN strategy",
        "Caching strategy"
      ]
    }
  ],

  interviewQuestions: [
    "What is an embedding?",
    "What makes embeddings useful for semantic search?",
    "What is cosine similarity?",
    "When would dot product be used?",
    "Why normalize vectors?",
    "What is a vector database?",
    "What is ANN search?",
    "How does HNSW work conceptually?",
    "What is IVF?",
    "Why is exact search expensive at scale?",
    "What is metadata filtering?",
    "What is a namespace?",
    "How do you implement tenant isolation?",
    "What causes stale embeddings?",
    "What is upsert?",
    "Why are deterministic IDs useful?",
    "What is reranking?",
    "Why use two-stage retrieval?",
    "What is Recall@k?",
    "What is Precision@k?",
    "What is MRR?",
    "What is NDCG?",
    "What is quantization?",
    "What is sharding?",
    "What is replication?",
    "What is P95 latency?",
    "What is cache hit rate?",
    "What is RPO?",
    "What is RTO?",
    "How would you migrate an embedding model?",
    "How would you design a multi-tenant vector database?"
  ],

  miniProjects: [
    {
      title: "Mini Project 1 — Semantic Search Engine",
      requirements: [
        "Load a small document collection.",
        "Create chunk representations.",
        "Generate or simulate embeddings.",
        "Store vectors.",
        "Implement cosine similarity.",
        "Return top-k results.",
        "Display similarity scores."
      ]
    },
    {
      title: "Mini Project 2 — Metadata-Aware Search",
      requirements: [
        "Add document metadata.",
        "Implement filters.",
        "Support tenant filtering.",
        "Return source metadata.",
        "Test unauthorized retrieval scenarios."
      ]
    },
    {
      title: "Mini Project 3 — Retrieval Evaluation",
      requirements: [
        "Create a golden query dataset.",
        "Implement Recall@k.",
        "Implement Precision@k.",
        "Implement MRR.",
        "Measure latency.",
        "Generate an evaluation report."
      ]
    }
  ],

  masteryChecklist: [
    "I can explain what an embedding is.",
    "I understand dense vector representations.",
    "I can calculate dot product.",
    "I can calculate cosine similarity.",
    "I understand vector normalization.",
    "I understand embedding models.",
    "I understand document chunk embeddings.",
    "I understand vector databases.",
    "I understand vector indexes.",
    "I understand exact nearest-neighbor search.",
    "I understand ANN search.",
    "I understand HNSW conceptually.",
    "I understand metadata filtering.",
    "I understand namespaces.",
    "I understand multi-tenancy.",
    "I understand authorization-aware retrieval.",
    "I understand vector data lifecycle.",
    "I understand stale embeddings.",
    "I understand re-embedding.",
    "I understand caching.",
    "I understand quantization.",
    "I understand sharding.",
    "I understand replication.",
    "I understand P95 and P99 latency.",
    "I understand retrieval evaluation.",
    "I can design a production vector retrieval architecture."
  ],

  finalChallenge: {
    title: "Module 5 Capstone Practice Challenge",

    scenario: `
Design the retrieval foundation for a production enterprise AI assistant.

The system must support:

• 20 million document chunks
• multiple organizations
• PDF and HTML documents
• semantic retrieval
• keyword retrieval
• metadata filtering
• tenant isolation
• document updates
• embedding-model migration
• low latency
• high availability
• evaluation
• monitoring
`,

    requiredDeliverables: [
      "System architecture diagram",
      "Embedding strategy",
      "Chunking strategy",
      "Metadata schema",
      "Vector database design",
      "ANN strategy",
      "Filtering strategy",
      "Tenant-isolation strategy",
      "Caching strategy",
      "Scaling strategy",
      "Evaluation dataset design",
      "Recall and precision metrics",
      "Latency targets",
      "Failure-handling strategy",
      "Backup and recovery strategy",
      "Embedding migration strategy"
    ]
  },

  summary: [
    "Module 5 connects mathematical vector concepts with production retrieval engineering.",
    "Embeddings transform information into machine-comparable representations.",
    "Vector databases provide storage and similarity retrieval.",
    "ANN indexes make large-scale search practical.",
    "Metadata provides structured constraints and security boundaries.",
    "Performance requires balancing recall, latency, throughput, memory, and cost.",
    "Production systems require lifecycle management, monitoring, backup, and recovery.",
    "Advanced systems combine embeddings, filters, hybrid retrieval, candidate generation, reranking, and evaluation."
  ],

  keyTakeaways: [
    "Embeddings are the representation layer of semantic retrieval.",
    "Similarity metrics determine geometric ranking.",
    "ANN makes large-scale retrieval computationally practical.",
    "Metadata is essential for filtering and authorization.",
    "Multi-tenant retrieval requires explicit security boundaries.",
    "Retrieval quality must be measured rather than assumed.",
    "Production vector systems must be designed for change, failure, and scale."
  ]
};

export default practice;
const practice = {
  id: "practice",
  moduleId: "module7",
  title: "Module 7 Practice",
  subtitle:
    "Master Retrieval-Augmented Generation through theory, retrieval experiments, system design, coding, debugging, and the Knowledge-Based AI Assistant",

  description:
    "This practice module consolidates the complete Retrieval-Augmented Generation journey. It moves from document processing and chunking through embeddings, vector retrieval, hybrid search, reranking, grounding, evaluation, adaptive retrieval, security, optimization, and production architecture.",

  objectives: [
    "Strengthen the complete RAG mental model.",
    "Practice retrieval and vector-search concepts.",
    "Apply mathematical evaluation metrics.",
    "Design chunking and embedding pipelines.",
    "Debug retrieval failures.",
    "Design grounded generation workflows.",
    "Evaluate RAG systems.",
    "Design secure production RAG architectures.",
    "Prepare for the Knowledge-Based AI Assistant project."
  ],

  practiceSections: [
    {
      title: "1. RAG Foundations",
      questions: [
        "What problem does Retrieval-Augmented Generation solve?",
        "Why can an LLM's internal knowledge be insufficient?",
        "Explain the difference between parametric knowledge and retrieved knowledge.",
        "Describe the complete RAG pipeline.",
        "What is the role of retrieval?",
        "What is the role of generation?",
        "Why is grounding important?",
        "When should a RAG system abstain?"
      ]
    },

    {
      title: "2. Document Processing",
      questions: [
        "Why must documents be processed before indexing?",
        "What is document normalization?",
        "Why is metadata important?",
        "What happens when document structure is destroyed?",
        "How would you process a PDF knowledge base?",
        "How would you detect malformed documents?",
        "Why should document versions be preserved?"
      ]
    },

    {
      title: "3. Chunking Practice",
      questions: [
        "Why is chunking required?",
        "Compare fixed-size and semantic chunking.",
        "What is chunk overlap?",
        "Why can very small chunks be problematic?",
        "Why can very large chunks be problematic?",
        "When would structure-aware chunking be useful?",
        "What is parent-child retrieval?",
        "How would you choose chunk size for university regulations?"
      ]
    },

    {
      title: "4. Embeddings and Vector Stores",
      questions: [
        "What is an embedding?",
        "Why do semantically similar texts have nearby representations?",
        "What is vector dimensionality?",
        "What is cosine similarity?",
        "What is the difference between vector similarity and factual correctness?",
        "What is a vector database?",
        "Why are metadata filters important?",
        "What is approximate nearest-neighbor search?"
      ]
    },

    {
      title: "5. Similarity and Retrieval Mathematics",
      formulas: [
        {
          name: "Cosine Similarity",
          formula: "cos(theta) = (A · B) / (||A|| ||B||)",
          task:
            "Explain why cosine similarity focuses on vector direction."
        },
        {
          name: "Precision@k",
          formula: "Precision@k = RelevantRetrieved@k / k",
          task:
            "Calculate Precision@5 when 4 retrieved documents are relevant."
        },
        {
          name: "Recall@k",
          formula: "Recall@k = RelevantRetrieved@k / TotalRelevantDocuments",
          task:
            "Calculate Recall@5 when 4 relevant documents were retrieved from 8 relevant documents."
        },
        {
          name: "F1",
          formula: "F1 = 2PR / (P + R)",
          task:
            "Calculate F1 when precision is 0.8 and recall is 0.6."
        }
      ]
    },

    {
      title: "6. Retrieval Pipeline Practice",
      questions: [
        "What happens between a user query and retrieved documents?",
        "Why is query transformation useful?",
        "What is query expansion?",
        "What is multi-query retrieval?",
        "What is query decomposition?",
        "What is query routing?",
        "When is hybrid retrieval useful?",
        "Why is reranking useful?"
      ]
    },

    {
      title: "7. Hybrid Search and Reranking",
      questions: [
        "Compare lexical and dense retrieval.",
        "Why can lexical retrieval outperform semantic search for exact identifiers?",
        "Why can dense retrieval outperform lexical retrieval for semantic questions?",
        "What is Reciprocal Rank Fusion?",
        "Why should candidate generation happen before expensive reranking?",
        "What is a two-stage retrieval system?",
        "Compare pre-filtering and post-filtering."
      ]
    },

    {
      title: "8. Context Construction",
      questions: [
        "What is context construction?",
        "Why should retrieved documents not simply be concatenated?",
        "Why is deduplication useful?",
        "What is context compression?",
        "What is the lost-in-the-middle problem?",
        "How should conflicting sources be handled?",
        "How should source authority affect context construction?",
        "What is a context budget?"
      ]
    },

    {
      title: "9. Grounding and Citations",
      questions: [
        "What does it mean for an answer to be grounded?",
        "Why is retrieval alone not sufficient for grounding?",
        "What is a claim-to-evidence mapping?",
        "What is evidence coverage?",
        "What should happen when evidence is insufficient?",
        "Why are citations not automatically proof of truth?",
        "How should conflicting evidence be represented?"
      ]
    },

    {
      title: "10. RAG Evaluation",
      questions: [
        "Why should retrieval and generation be evaluated separately?",
        "What is a golden evaluation dataset?",
        "What is Precision@k?",
        "What is Recall@k?",
        "What is MRR?",
        "What is grounding evaluation?",
        "What is unsupported claim rate?",
        "Why is regression testing important?"
      ]
    },

    {
      title: "11. Advanced Retrieval",
      questions: [
        "What is corrective retrieval?",
        "What is adaptive retrieval?",
        "What is self-reflective RAG?",
        "Why should corrective loops be bounded?",
        "What is temporal RAG?",
        "What is version-aware retrieval?",
        "What is hierarchical retrieval?",
        "What is parent-child retrieval?",
        "When is domain-specific RAG useful?"
      ]
    },

    {
      title: "12. Multi-Hop and Agentic RAG",
      questions: [
        "Why can a single retrieval step fail for complex questions?",
        "What is multi-hop retrieval?",
        "What is query decomposition?",
        "What is iterative retrieval?",
        "What is corrective retrieval?",
        "What is agentic RAG?",
        "Why should agentic retrieval have stopping conditions?",
        "How can knowledge graphs complement RAG?"
      ]
    },

    {
      title: "13. Production RAG",
      questions: [
        "What is tenant isolation?",
        "Why must authorization happen outside the LLM?",
        "What is retrieval-time prompt injection?",
        "Why should retrieved documents be treated as untrusted data?",
        "What should a RAG trace contain?",
        "How should RAG costs be measured?",
        "How can caching improve RAG performance?",
        "What security problems can an incorrectly designed cache introduce?"
      ]
    }
  ],

  mathematicalPractice: [
    {
      title: "Vector Similarity",
      tasks: [
        "Calculate cosine similarity for two small vectors.",
        "Compare cosine similarity and Euclidean distance.",
        "Explain why vector normalization changes dot-product interpretation."
      ]
    },
    {
      title: "Retrieval Metrics",
      tasks: [
        "Calculate Precision@k.",
        "Calculate Recall@k.",
        "Calculate F1.",
        "Calculate MRR for a ranked result list.",
        "Explain why retrieval metrics should be measured before generation."
      ]
    },
    {
      title: "Latency",
      tasks: [
        "Calculate total RAG latency from component latencies.",
        "Identify the largest latency contributor.",
        "Explain how parallel retrieval can reduce sequential latency."
      ]
    },
    {
      title: "Cost",
      tasks: [
        "Calculate cost from input and output tokens.",
        "Estimate cost of repeated corrective retrieval.",
        "Compare two RAG configurations using quality, latency, and cost."
      ]
    },
    {
      title: "Context Budget",
      tasks: [
        "Calculate remaining retrieval capacity after system instructions and conversation history.",
        "Explain why larger context does not always improve answer quality.",
        "Design a context budget policy."
      ]
    }
  ],

  comparisonPractice: [
    {
      topic: "Dense vs Lexical Retrieval",
      compare: [
        "Representation",
        "Strengths",
        "Weaknesses",
        "Exact-match behavior",
        "Semantic behavior",
        "Typical applications"
      ]
    },
    {
      topic: "Standard RAG vs Adaptive RAG",
      compare: [
        "Retrieval flow",
        "Complexity",
        "Latency",
        "Failure handling",
        "Use cases"
      ]
    },
    {
      topic: "Flat vs Hierarchical Retrieval",
      compare: [
        "Structure preservation",
        "Retrieval precision",
        "Context quality",
        "Implementation complexity"
      ]
    },
    {
      topic: "RAG vs Fine-Tuning",
      compare: [
        "Knowledge updates",
        "External knowledge",
        "Behavior adaptation",
        "Citation support",
        "Infrastructure",
        "Typical use cases"
      ]
    }
  ],

  diagramPractice: [
    {
      title: "Draw the Basic RAG Pipeline",
      steps: [
        "User Query",
        "Embedding",
        "Retrieval",
        "Context",
        "LLM",
        "Answer"
      ]
    },
    {
      title: "Draw the Production RAG Pipeline",
      steps: [
        "Authentication",
        "Authorization",
        "Query Processing",
        "Retrieval",
        "Filtering",
        "Reranking",
        "Context Construction",
        "Generation",
        "Validation",
        "Observability"
      ]
    },
    {
      title: "Draw a Corrective RAG Loop",
      steps: [
        "Query",
        "Retrieve",
        "Evaluate Evidence",
        "Strong?",
        "Generate",
        "Otherwise Rewrite and Retrieve Again"
      ]
    },
    {
      title: "Draw Parent-Child Retrieval",
      steps: [
        "Document",
        "Parent Section",
        "Child Chunks",
        "Retrieve Child",
        "Expand Parent",
        "Generate"
      ]
    }
  ],

  codingPractice: [
    {
      title: "Coding Exercise 1 — Chunking",
      task:
        "Implement fixed-size chunking with configurable chunk size and overlap."
    },
    {
      title: "Coding Exercise 2 — Cosine Similarity",
      task:
        "Implement cosine similarity without using a vector database."
    },
    {
      title: "Coding Exercise 3 — Top-k Retrieval",
      task:
        "Implement a simple in-memory top-k vector retrieval function."
    },
    {
      title: "Coding Exercise 4 — Metadata Filtering",
      task:
        "Filter documents by tenant, domain, version, and date."
    },
    {
      title: "Coding Exercise 5 — Reranking",
      task:
        "Combine retrieval score and reranking score into a final ranking."
    },
    {
      title: "Coding Exercise 6 — Evidence Validation",
      task:
        "Implement an evidence threshold that determines whether generation is allowed."
    },
    {
      title: "Coding Exercise 7 — Recall@k",
      task:
        "Implement Recall@k for a retrieval evaluation dataset."
    },
    {
      title: "Coding Exercise 8 — Cost Estimation",
      task:
        "Implement a simple end-to-end RAG cost estimator."
    }
  ],

  debuggingPractice: [
    {
      problem: "The correct document exists but is never retrieved.",
      investigate: [
        "Query wording",
        "Chunking",
        "Embedding model",
        "Metadata filters",
        "Top-k",
        "Index configuration"
      ]
    },
    {
      problem: "Retrieved documents are relevant but the answer is wrong.",
      investigate: [
        "Context construction",
        "Context ordering",
        "Prompt instructions",
        "Grounding validation",
        "Generation behavior"
      ]
    },
    {
      problem: "The system returns outdated information.",
      investigate: [
        "Document versions",
        "Effective dates",
        "Metadata filters",
        "Index freshness",
        "Cache invalidation"
      ]
    },
    {
      problem: "The RAG system is too expensive.",
      investigate: [
        "Context size",
        "Top-k",
        "Reranking",
        "Model selection",
        "Caching",
        "Repeated retrieval"
      ]
    },
    {
      problem: "The RAG system is too slow.",
      investigate: [
        "Retrieval latency",
        "Reranking latency",
        "Sequential operations",
        "Generation latency",
        "Network calls",
        "Caching"
      ]
    }
  ],

  scenarioPractice: [
    {
      scenario: "University Knowledge Assistant",
      requirements: [
        "Academic regulations",
        "Current and historical policies",
        "Student access control",
        "Citations",
        "Insufficient-evidence handling"
      ],
      task:
        "Design the complete RAG architecture."
    },
    {
      scenario: "Software Documentation Assistant",
      requirements: [
        "Multiple product versions",
        "Code examples",
        "Version-aware retrieval",
        "Exact terminology"
      ],
      task:
        "Design the retrieval and ranking strategy."
    },
    {
      scenario: "Enterprise Knowledge Assistant",
      requirements: [
        "Multiple tenants",
        "Confidential documents",
        "Role-based access",
        "Auditability"
      ],
      task:
        "Design the security architecture."
    }
  ],

  architectureChallenges: [
    {
      title: "Challenge 1 — Basic RAG",
      task:
        "Design a system that answers questions from a controlled collection of documents."
    },
    {
      title: "Challenge 2 — Hybrid RAG",
      task:
        "Add lexical search, dense retrieval, metadata filtering, and reranking."
    },
    {
      title: "Challenge 3 — Adaptive RAG",
      task:
        "Add query transformation and corrective retrieval."
    },
    {
      title: "Challenge 4 — Temporal RAG",
      task:
        "Add version and effective-date-aware retrieval."
    },
    {
      title: "Challenge 5 — Production RAG",
      task:
        "Add authentication, authorization, observability, caching, cost tracking, and failure handling."
    }
  ],

  interviewPractice: [
    "Explain RAG from first principles.",
    "Why does RAG reduce some hallucination risks?",
    "Why does RAG not eliminate hallucinations?",
    "Explain chunking trade-offs.",
    "Explain embeddings and vector databases.",
    "Explain cosine similarity.",
    "Explain approximate nearest-neighbor search.",
    "Explain hybrid search.",
    "Explain reranking.",
    "Explain grounding.",
    "Explain citations and provenance.",
    "Explain Precision@k and Recall@k.",
    "Explain MRR.",
    "Explain corrective RAG.",
    "Explain adaptive RAG.",
    "Explain multi-hop RAG.",
    "Explain temporal RAG.",
    "Explain parent-child retrieval.",
    "Explain retrieval-time prompt injection.",
    "Design a secure production RAG system.",
    "How would you debug a poor RAG answer?",
    "How would you optimize RAG cost?",
    "How would you optimize RAG latency?"
  ],

  miniProjects: [
    {
      title: "Mini Project 1 — Document Search",
      objective:
        "Build a searchable document collection using chunking and embeddings."
    },
    {
      title: "Mini Project 2 — Citation Assistant",
      objective:
        "Build an assistant that returns answers together with supporting evidence."
    },
    {
      title: "Mini Project 3 — Hybrid Search",
      objective:
        "Combine lexical and semantic retrieval."
    },
    {
      title: "Mini Project 4 — Evaluation Dashboard",
      objective:
        "Create a small dashboard showing retrieval and answer quality metrics."
    }
  ],

  finalChallenge: {
    title: "Knowledge-Based AI Assistant",
    objective:
      "Build an end-to-end RAG assistant using a controlled knowledge collection.",

    requiredComponents: [
      "Document ingestion",
      "Document processing",
      "Chunking",
      "Embeddings",
      "Vector storage",
      "Retrieval",
      "Metadata filtering",
      "Context construction",
      "Grounded generation",
      "Citations",
      "Evaluation",
      "Basic observability"
    ],

    requiredDocumentation: [
      "Problem statement",
      "Architecture diagram",
      "Technology choices",
      "Chunking strategy",
      "Embedding strategy",
      "Retrieval strategy",
      "Generation strategy",
      "Evaluation methodology",
      "Results",
      "Failure analysis",
      "Limitations",
      "Future improvements"
    ]
  },

  masteryChecklist: [
    {
      area: "RAG Foundations",
      checks: [
        "I can explain RAG without notes.",
        "I can describe the complete RAG pipeline.",
        "I understand why external knowledge is useful."
      ]
    },
    {
      area: "Documents and Chunking",
      checks: [
        "I can design a document processing pipeline.",
        "I can compare chunking strategies.",
        "I understand chunk size and overlap trade-offs."
      ]
    },
    {
      area: "Embeddings and Retrieval",
      checks: [
        "I understand embeddings.",
        "I can explain vector similarity.",
        "I can explain top-k retrieval.",
        "I understand ANN search."
      ]
    },
    {
      area: "Advanced Retrieval",
      checks: [
        "I understand hybrid retrieval.",
        "I understand reranking.",
        "I understand query transformation.",
        "I understand multi-hop retrieval."
      ]
    },
    {
      area: "Grounding",
      checks: [
        "I can explain grounding.",
        "I can design evidence-aware prompts.",
        "I understand insufficient-evidence handling."
      ]
    },
    {
      area: "Evaluation",
      checks: [
        "I can calculate Precision@k.",
        "I can calculate Recall@k.",
        "I understand grounding evaluation.",
        "I can design a golden dataset."
      ]
    },
    {
      area: "Production",
      checks: [
        "I understand authorization-aware retrieval.",
        "I understand tenant isolation.",
        "I understand observability.",
        "I can reason about latency and cost."
      ]
    }
  ],

  moduleCheck: [
    "Explain RAG completely without referring to notes.",
    "Draw the end-to-end RAG architecture.",
    "Explain the difference between retrieval failure and generation failure.",
    "Calculate Precision@k and Recall@k.",
    "Explain chunking trade-offs.",
    "Explain hybrid search and reranking.",
    "Explain grounding and evidence validation.",
    "Explain corrective and adaptive RAG.",
    "Explain temporal and hierarchical RAG.",
    "Explain production RAG security.",
    "Identify at least three RAG failure modes.",
    "Describe how you would improve a weak RAG system."
  ],

  summary: [
    "RAG connects generative models with external knowledge.",
    "Document processing determines the quality of searchable knowledge.",
    "Chunking controls retrieval granularity.",
    "Embeddings provide semantic representations.",
    "Vector and hybrid retrieval locate relevant evidence.",
    "Reranking improves candidate ordering.",
    "Context construction determines what reaches the model.",
    "Grounding connects generated claims to evidence.",
    "Evaluation separates retrieval, context, and generation problems.",
    "Advanced RAG can adapt retrieval based on query and evidence.",
    "Production RAG requires security, observability, reliability, governance, and cost control."
  ],

  keyTakeaways: [
    "RAG is an end-to-end engineering discipline.",
    "Retrieval quality is only one part of the system.",
    "Evidence should control generation.",
    "Evaluation should guide optimization.",
    "Production RAG must be measurable and secure.",
    "The Knowledge-Based AI Assistant integrates the complete module."
  ]
};

export default practice;
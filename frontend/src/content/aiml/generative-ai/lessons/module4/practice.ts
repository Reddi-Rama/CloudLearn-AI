const lesson = {
  id: "practice",
  moduleId: "module4",
  title: "Module 4 Practice Lab",
  subtitle: "Practice the complete RAG pipeline through retrieval, evaluation, debugging, and architecture exercises.",

  overview: `
This practice lab consolidates the complete Module 4 learning path.

The exercises move from individual concepts toward complete RAG system design.

Practice progression:

Fundamentals
    ↓
Document Processing
    ↓
Chunking
    ↓
Embeddings
    ↓
Retrieval
    ↓
Hybrid Search
    ↓
Reranking
    ↓
Grounding
    ↓
Evaluation
    ↓
Advanced RAG
    ↓
Production Design
`,

  instructions: [
    "Attempt each exercise before checking the reference concepts.",
    "Record your assumptions when designing retrieval systems.",
    "Measure retrieval quality instead of relying only on subjective answers.",
    "For every failure, identify the pipeline stage responsible.",
    "Prefer the simplest architecture that satisfies the requirement.",
    "Document trade-offs between quality, latency, cost, and complexity."
  ],

  practiceSections: [
    {
      title: "Practice 1 — RAG Fundamentals",
      exercises: [
        {
          id: "p1-e1",
          question: "Explain the difference between a language model's parametric knowledge and externally retrieved knowledge.",
          expectedFocus: "Model parameters, external documents, freshness, grounding."
        },
        {
          id: "p1-e2",
          question: "Draw the basic RAG pipeline from user question to final answer.",
          expectedFocus: "Query → retrieval → context → generation."
        },
        {
          id: "p1-e3",
          question: "Give three situations where RAG may be preferable to fine-tuning.",
          expectedFocus: "Frequently changing knowledge, private data, source-aware answers."
        }
      ]
    },

    {
      title: "Practice 2 — Ingestion",
      exercises: [
        {
          id: "p2-e1",
          question: "Design an ingestion pipeline for 500 PDF documents.",
          expectedFocus: "Upload → parsing → cleaning → metadata → chunking → embedding → indexing."
        },
        {
          id: "p2-e2",
          question: "List five metadata fields that could improve retrieval.",
          expectedFocus: "Document ID, title, department, date, document type, permissions."
        },
        {
          id: "p2-e3",
          question: "Explain why duplicate documents should be detected before indexing.",
          expectedFocus: "Duplicate evidence, storage, retrieval noise, ranking quality."
        }
      ]
    },

    {
      title: "Practice 3 — Chunking",
      exercises: [
        {
          id: "p3-e1",
          question: "Compare fixed-size, sentence-based, recursive, and semantic chunking.",
          expectedFocus: "Implementation simplicity, structure preservation, semantic coherence."
        },
        {
          id: "p3-e2",
          question: "Design a chunking strategy for technical documentation.",
          expectedFocus: "Headings, sections, code blocks, lists, tables, overlap."
        },
        {
          id: "p3-e3",
          question: "Explain why excessively large chunks can reduce retrieval quality.",
          expectedFocus: "Noise, weaker similarity, larger context, token cost."
        }
      ]
    },

    {
      title: "Practice 4 — Embeddings",
      exercises: [
        {
          id: "p4-e1",
          question: "Explain cosine similarity using a simple vector example.",
          expectedFocus: "Vector direction, dot product, magnitude."
        },
        {
          id: "p4-e2",
          question: "Why must query and document embeddings be compatible?",
          expectedFocus: "Same representation space and compatible embedding model."
        },
        {
          id: "p4-e3",
          question: "Explain why semantic similarity does not guarantee factual correctness.",
          expectedFocus: "Similarity measures representation closeness, not truth."
        }
      ]
    },

    {
      title: "Practice 5 — Retrieval",
      exercises: [
        {
          id: "p5-e1",
          question: "Compare dense retrieval and BM25.",
          expectedFocus: "Semantic vs lexical retrieval."
        },
        {
          id: "p5-e2",
          question: "Explain why top-k must be tuned.",
          expectedFocus: "Recall, noise, context size, latency, cost."
        },
        {
          id: "p5-e3",
          question: "Design a retrieval strategy for exact product IDs mixed with natural-language questions.",
          expectedFocus: "Hybrid search and metadata filtering."
        }
      ]
    },

    {
      title: "Practice 6 — Hybrid Search & Reranking",
      exercises: [
        {
          id: "p6-e1",
          question: "Explain why hybrid retrieval can outperform a single retrieval method.",
          expectedFocus: "Complementary lexical and semantic signals."
        },
        {
          id: "p6-e2",
          question: "What is reranking and why is it performed after candidate retrieval?",
          expectedFocus: "Expensive relevance scoring on smaller candidate set."
        },
        {
          id: "p6-e3",
          question: "Design a metadata filtering strategy for a multi-department knowledge base.",
          expectedFocus: "Authorization, department filters, document type, dates."
        }
      ]
    },

    {
      title: "Practice 7 — Grounded Generation",
      exercises: [
        {
          id: "p7-e1",
          question: "Design a prompt that tells the model to answer only from supplied evidence.",
          expectedFocus: "Evidence boundaries, abstention, citations."
        },
        {
          id: "p7-e2",
          question: "What should the system do when retrieved evidence is insufficient?",
          expectedFocus: "Abstain, ask clarification, or perform corrective retrieval."
        },
        {
          id: "p7-e3",
          question: "Explain the difference between groundedness and correctness.",
          expectedFocus: "Evidence support vs factual accuracy."
        }
      ]
    },

    {
      title: "Practice 8 — Evaluation",
      exercises: [
        {
          id: "p8-e1",
          question: "Calculate Precision@5 for a retrieval result containing three relevant documents.",
          expectedFocus: "3/5."
        },
        {
          id: "p8-e2",
          question: "Calculate Recall@5 when two of three relevant documents were retrieved.",
          expectedFocus: "2/3."
        },
        {
          id: "p8-e3",
          question: "Explain why a golden dataset is important.",
          expectedFocus: "Repeatable evaluation and regression testing."
        }
      ]
    },

    {
      title: "Practice 9 — Advanced RAG",
      exercises: [
        {
          id: "p9-e1",
          question: "Decompose a complex question into independent sub-questions.",
          expectedFocus: "Query decomposition."
        },
        {
          id: "p9-e2",
          question: "Design a two-hop retrieval workflow.",
          expectedFocus: "First evidence informs second query."
        },
        {
          id: "p9-e3",
          question: "Design a router for SQL, vector search, documentation, and calculator requests.",
          expectedFocus: "Intent classification and tool selection."
        }
      ]
    },

    {
      title: "Practice 10 — Production RAG",
      exercises: [
        {
          id: "p10-e1",
          question: "Design a production architecture for a company knowledge assistant.",
          expectedFocus: "Authentication, ingestion, retrieval, generation, validation, monitoring."
        },
        {
          id: "p10-e2",
          question: "Design fallback behavior when the vector database is unavailable.",
          expectedFocus: "Alternative retrieval, controlled failure, observability."
        },
        {
          id: "p10-e3",
          question: "List five ways to reduce RAG latency.",
          expectedFocus: "Caching, parallel retrieval, smaller candidates, optimized indexes, streaming."
        }
      ]
    }
  ],

  codingChallenges: [
    {
      title: "Challenge 1 — Cosine Similarity",
      task: "Implement cosine similarity between two vectors without using a high-level similarity function."
    },
    {
      title: "Challenge 2 — Top-K Retrieval",
      task: "Implement a simple top-k similarity retriever over a small in-memory dataset."
    },
    {
      title: "Challenge 3 — Metadata Filtering",
      task: "Implement retrieval that filters documents by department and year before ranking."
    },
    {
      title: "Challenge 4 — Hybrid Ranking",
      task: "Combine lexical and semantic scores using weighted fusion."
    },
    {
      title: "Challenge 5 — RAG Evaluation",
      task: "Implement Precision@k, Recall@k, and Reciprocal Rank."
    },
    {
      title: "Challenge 6 — Query Router",
      task: "Build a simple router that selects a retrieval source based on query intent."
    },
    {
      title: "Challenge 7 — Retrieval Debugger",
      task: "Create a diagnostic function that reports retrieved document IDs, scores, metadata, and final context."
    }
  ],

  debuggingScenarios: [
    {
      problem: "The model gives fluent but incorrect answers.",
      investigate: [
        "Retrieved documents",
        "Retrieval scores",
        "Context construction",
        "Grounding instructions",
        "Source freshness"
      ]
    },
    {
      problem: "The correct document exists but is never retrieved.",
      investigate: [
        "Chunking",
        "Embedding model",
        "Query formulation",
        "Top-k",
        "Hybrid retrieval"
      ]
    },
    {
      problem: "Retrieval works but answers are incomplete.",
      investigate: [
        "Context budget",
        "Reranking",
        "Chunk boundaries",
        "Evidence coverage",
        "Lost-in-context effects"
      ]
    },
    {
      problem: "The application is too slow.",
      investigate: [
        "Embedding latency",
        "Vector search",
        "Reranking",
        "LLM latency",
        "Sequential operations",
        "Caching"
      ]
    },
    {
      problem: "Different users see the same private documents.",
      investigate: [
        "Authentication",
        "Authorization",
        "Metadata filtering",
        "Tenant isolation",
        "Retrieval permissions"
      ]
    }
  ],

  architectureTasks: [
    {
      title: "Beginner Architecture",
      task: "Design a single-user document Q&A application."
    },
    {
      title: "Intermediate Architecture",
      task: "Design a company knowledge assistant with hybrid retrieval and citations."
    },
    {
      title: "Advanced Architecture",
      task: "Design a multi-tenant production RAG system with evaluation, observability, caching, and access control."
    }
  ],

  evaluationChecklist: [
    "Can explain the complete RAG pipeline.",
    "Can explain why chunking matters.",
    "Can calculate similarity.",
    "Can compare dense and lexical retrieval.",
    "Can explain hybrid retrieval.",
    "Can explain reranking.",
    "Can construct grounded context.",
    "Can calculate retrieval metrics.",
    "Can identify RAG failure stages.",
    "Can design advanced retrieval.",
    "Can design production reliability mechanisms."
  ],

  finalPracticeTask: {
    title: "Full RAG System Design Exercise",
    task: `
Design a complete RAG system for a university knowledge assistant.

The system should answer questions about:

• Academic regulations
• Course information
• Examination policies
• Attendance
• Department documents
• Student services

Your architecture must include:

1. Data sources
2. Ingestion
3. Cleaning
4. Chunking
5. Metadata
6. Embeddings
7. Vector search
8. Keyword search
9. Hybrid retrieval
10. Reranking
11. Context construction
12. Grounded generation
13. Citations
14. Evaluation
15. Authentication
16. Authorization
17. Monitoring
18. Failure handling

Also specify:

• Retrieval metrics
• Generation metrics
• Latency targets
• Cost controls
• Security boundaries
• Update strategy
`
  },

  reflectionQuestions: [
    "Which RAG stage has the largest effect on retrieval quality?",
    "When would you choose hybrid retrieval?",
    "When is reranking worth its additional latency?",
    "How should a RAG system behave when evidence is missing?",
    "What makes an evaluation dataset representative?",
    "When should a simple RAG pipeline be preferred over an agentic system?",
    "Which production failure would be most dangerous in a private knowledge system and why?"
  ],

  keyTakeaways: [
    "Practice should follow the complete RAG pipeline.",
    "Retrieval problems should be diagnosed before changing generation prompts.",
    "Every retrieval strategy has trade-offs.",
    "Evaluation converts subjective quality into measurable signals.",
    "Production design requires security, reliability, observability, and cost awareness.",
    "The final practice task should integrate all Module 4 concepts."
  ]
};

export default lesson;
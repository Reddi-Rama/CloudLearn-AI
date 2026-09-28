const lesson = {
  id: "about",
  moduleId: "module4",
  title: "About Module 4",
  subtitle: "Retrieval-Augmented Generation — from documents and embeddings to production-ready knowledge systems.",

  overview: `
Module 4 focuses on Retrieval-Augmented Generation (RAG), one of the most
important architectures for building knowledge-grounded Generative AI systems.

Instead of depending entirely on information stored inside a model's parameters,
RAG connects a language model to an external knowledge system.

The complete learning journey is:

Documents
    ↓
Ingestion
    ↓
Cleaning
    ↓
Chunking
    ↓
Embeddings
    ↓
Vector / Lexical Index
    ↓
Retrieval
    ↓
Reranking
    ↓
Context Construction
    ↓
Grounded Generation
    ↓
Evaluation
    ↓
Advanced Retrieval
    ↓
Production RAG

By the end of this module, learners should be able to reason about RAG as a
complete information-retrieval and generation pipeline rather than simply
"vector search + LLM".
`,

  learningOutcomes: [
    "Explain why retrieval is useful for Generative AI applications.",
    "Design an end-to-end RAG architecture.",
    "Build document ingestion pipelines.",
    "Choose appropriate chunking strategies.",
    "Understand embeddings and semantic representation.",
    "Work with vector databases and similarity search.",
    "Implement lexical, dense, and hybrid retrieval strategies.",
    "Understand metadata filtering and reranking.",
    "Construct grounded context for language models.",
    "Evaluate retrieval and generation quality.",
    "Design advanced multi-step and agentic retrieval workflows.",
    "Design production-ready RAG systems."
  ],

  moduleRoadmap: [
    {
      lesson: 1,
      title: "Introduction to RAG & Why Retrieval Matters",
      focus: "Understand RAG fundamentals, external knowledge, retrieval, grounding, and hallucination reduction."
    },
    {
      lesson: 2,
      title: "RAG Architecture & End-to-End Data Flow",
      focus: "Understand offline indexing and online query pipelines."
    },
    {
      lesson: 3,
      title: "Documents, Data Sources & Ingestion Pipelines",
      focus: "Learn how real-world data becomes searchable knowledge."
    },
    {
      lesson: 4,
      title: "Text Cleaning, Chunking & Document Segmentation",
      focus: "Design chunks that preserve useful retrieval context."
    },
    {
      lesson: 5,
      title: "Embeddings & Semantic Representation for Retrieval",
      focus: "Understand vectors, similarity, embedding models, and semantic search."
    },
    {
      lesson: 6,
      title: "Vector Databases & Similarity Search",
      focus: "Understand vector storage, ANN search, filtering, and indexing."
    },
    {
      lesson: 7,
      title: "Retrieval Strategies & Search Algorithms",
      focus: "Compare lexical, dense, query-transformed, hierarchical, and multi-hop retrieval."
    },
    {
      lesson: 8,
      title: "Hybrid Search, Metadata Filtering & Reranking",
      focus: "Combine retrieval signals and improve candidate ordering."
    },
    {
      lesson: 9,
      title: "Context Construction & Grounded Generation",
      focus: "Transform retrieved evidence into reliable model context."
    },
    {
      lesson: 10,
      title: "RAG Evaluation, Quality & Failure Analysis",
      focus: "Measure retrieval, grounding, correctness, latency, and cost."
    },
    {
      lesson: 11,
      title: "Advanced RAG: Query Transformation, Multi-Step & Agentic Retrieval",
      focus: "Build dynamic retrieval workflows for complex questions."
    },
    {
      lesson: 12,
      title: "Production RAG Systems, Optimization & Capstone Architecture",
      focus: "Design scalable, secure, observable, and production-ready RAG systems."
    }
  ],

  coreConcepts: [
    "Retrieval-Augmented Generation",
    "Knowledge ingestion",
    "Document processing",
    "Chunking",
    "Metadata",
    "Embeddings",
    "Vector search",
    "Lexical search",
    "Hybrid search",
    "Reranking",
    "Context construction",
    "Grounded generation",
    "Citations",
    "Retrieval evaluation",
    "Agentic retrieval",
    "Production architecture"
  ],

  knowledgeFlow: [
    {
      stage: "1. Source",
      question: "Where does the knowledge come from?",
      concepts: ["PDF", "DOCX", "HTML", "CSV", "JSON", "Database", "APIs"]
    },
    {
      stage: "2. Ingestion",
      question: "How does raw information enter the system?",
      concepts: ["Parsing", "Cleaning", "Normalization", "Metadata", "Deduplication"]
    },
    {
      stage: "3. Representation",
      question: "How is information represented for search?",
      concepts: ["Chunks", "Embeddings", "Sparse representations", "Metadata"]
    },
    {
      stage: "4. Retrieval",
      question: "How does the system find relevant evidence?",
      concepts: ["Dense search", "BM25", "Hybrid search", "Filters", "Reranking"]
    },
    {
      stage: "5. Context",
      question: "What evidence should reach the model?",
      concepts: ["Top-k", "Deduplication", "Ordering", "Compression", "Context budget"]
    },
    {
      stage: "6. Generation",
      question: "How should the model use the evidence?",
      concepts: ["Grounding", "Citations", "Abstention", "Evidence-based generation"]
    },
    {
      stage: "7. Evaluation",
      question: "How do we know the system works?",
      concepts: ["Recall", "Precision", "MRR", "Groundedness", "Correctness"]
    },
    {
      stage: "8. Production",
      question: "How do we operate the system reliably?",
      concepts: ["Security", "Caching", "Observability", "Scaling", "Cost", "Fallbacks"]
    }
  ],

  recommendedStudyOrder: [
    "Complete lessons 1–3 to understand the RAG pipeline.",
    "Complete lessons 4–6 to understand how knowledge becomes searchable.",
    "Complete lessons 7–9 to understand advanced retrieval and grounded generation.",
    "Complete lesson 10 to learn systematic evaluation.",
    "Complete lesson 11 to understand advanced and agentic retrieval.",
    "Complete lesson 12 to integrate the concepts into a production architecture.",
    "Complete the module practice work.",
    "Build the final RAG capstone."
  ],

  mathematicalTopics: [
    "Cosine similarity",
    "Dot product",
    "Euclidean distance",
    "Precision",
    "Recall",
    "F1 score",
    "MRR",
    "NDCG",
    "Latency",
    "Token cost",
    "Cache hit rate",
    "Availability"
  ],

  practicalSkills: [
    "Document ingestion",
    "Text preprocessing",
    "Chunking",
    "Embedding generation",
    "Vector search",
    "Keyword search",
    "Hybrid retrieval",
    "Reranking",
    "Metadata filtering",
    "Context construction",
    "Grounded prompting",
    "RAG evaluation",
    "Failure analysis",
    "Production architecture"
  ],

  recommendedStack: [
    "Python",
    "FastAPI",
    "Embedding models",
    "Vector databases",
    "BM25 / lexical search",
    "Reranking models",
    "LLM APIs",
    "Next.js or React",
    "PostgreSQL or equivalent metadata storage"
  ],

  finalGoal: `
The final goal of Module 4 is to make the learner capable of designing
a complete RAG system from raw documents to a validated, grounded response.

The learner should be able to explain not only how a RAG application works,
but also why each component exists, how it can fail, how it can be evaluated,
and how it can be operated in production.
`,

  keyTakeaways: [
    "RAG connects language models to external knowledge.",
    "Retrieval quality strongly affects generation quality.",
    "Chunking and metadata are foundational design decisions.",
    "Embeddings enable semantic retrieval.",
    "Hybrid search combines complementary retrieval signals.",
    "Reranking improves candidate ordering.",
    "Grounded generation requires careful context construction.",
    "Evaluation must measure both retrieval and generation.",
    "Advanced RAG can use query transformation and multiple retrieval steps.",
    "Production RAG requires security, observability, reliability, scalability, and cost control."
  ]
};

export default lesson;
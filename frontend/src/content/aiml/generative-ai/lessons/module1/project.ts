const project = {
  id: "project",
  moduleId: "module1",

  title: "Module 1 Project — Build a Production-Style Generative AI Knowledge Assistant",

  subtitle:
    "Design and build a complete Generative AI application that combines an LLM, retrieval, embeddings, structured output, evaluation, security, and production engineering.",

  description:
    "This capstone project brings together the concepts from all eight lessons of Generative AI Foundations. You will design a complete AI knowledge assistant that can answer questions from a private knowledge base, retrieve relevant information, generate grounded responses, validate outputs, evaluate system quality, and expose the system through a practical application architecture.",

  estimatedTime: "10–16 hours",

  difficulty: "Intermediate → Advanced",

  projectType: "Full-stack Generative AI application",

  prerequisites: [
    "Python fundamentals",
    "Basic APIs and JSON",
    "Basic databases",
    "Basic machine learning concepts",
    "Module 1 lessons 1–8"
  ],

  projectGoal:
    "Build an AI-powered knowledge assistant that answers questions using a controlled knowledge base instead of relying only on the model's internal knowledge.",

  realWorldProblem: {
    title: "The Knowledge Access Problem",

    scenario:
      "Organizations and educational institutions often have large collections of documents containing information that users need to find quickly. Traditional keyword search may return documents without explaining the answer. A Generative AI knowledge assistant can retrieve relevant information and generate a natural-language answer grounded in that information.",

    problems: [
      "Users must manually search through many documents.",
      "Relevant information may be distributed across multiple files.",
      "Keyword search may miss semantically related information.",
      "Users may not know which document contains the answer.",
      "A language model alone may not have access to private or current information.",
      "Generated answers need evaluation and grounding."
    ],

    proposedSolution:
      "Create a retrieval-augmented Generative AI assistant that converts documents into searchable representations, retrieves relevant information for each query, constructs a controlled context, generates an answer, validates the result, and records evaluation information."
  },

  projectLearningOutcomes: [
    "Design a complete Generative AI application.",
    "Understand the role of the LLM inside a larger system.",
    "Build a document ingestion pipeline.",
    "Understand chunking.",
    "Generate and store embeddings.",
    "Perform semantic retrieval.",
    "Construct a RAG prompt.",
    "Generate grounded answers.",
    "Validate structured output.",
    "Implement evaluation cases.",
    "Measure retrieval and generation quality.",
    "Design application-level security.",
    "Handle errors and failures.",
    "Think about latency and cost.",
    "Design production monitoring."
  ],

  coreFeatures: [
    "Document ingestion",
    "Document chunking",
    "Embedding generation",
    "Vector storage",
    "Semantic search",
    "RAG generation",
    "Source-aware answers",
    "Conversation interface",
    "Structured response handling",
    "Evaluation dataset",
    "Failure logging",
    "Basic observability",
    "Authentication-ready architecture",
    "Error handling"
  ],

  optionalAdvancedFeatures: [
    "Hybrid keyword + semantic retrieval",
    "Reranking",
    "Conversation memory",
    "Tool calling",
    "Agentic retrieval",
    "Streaming responses",
    "Feedback collection",
    "Evaluation dashboard",
    "Prompt versioning",
    "Model comparison",
    "Caching",
    "Rate limiting"
  ],

  architecture: {
    title: "Complete System Architecture",

    diagram: [
      "                         USER",
      "                           │",
      "                           ▼",
      "                    ┌─────────────┐",
      "                    │  Frontend   │",
      "                    │ Chat / UI   │",
      "                    └──────┬──────┘",
      "                           │",
      "                           ▼",
      "                    ┌─────────────┐",
      "                    │   Backend   │",
      "                    │    API      │",
      "                    └──────┬──────┘",
      "                           │",
      "                 ┌─────────┴─────────┐",
      "                 ▼                   ▼",
      "        ┌────────────────┐   ┌────────────────┐",
      "        │ AI Orchestrator│   │ Application DB │",
      "        └───────┬────────┘   └────────────────┘",
      "                │",
      "        ┌───────┼───────────┐",
      "        ▼       ▼           ▼",
      "    ┌──────┐ ┌───────┐ ┌──────────┐",
      "    │Prompt│ │Retrieval│ │Validation│",
      "    └──┬───┘ └───┬───┘ └──────────┘",
      "       │          │",
      "       │      ┌───▼────────────┐",
      "       │      │ Vector Database│",
      "       │      └──────┬─────────┘",
      "       │             │",
      "       │      ┌──────▼──────┐",
      "       │      │  Embeddings │",
      "       │      └─────────────┘",
      "       │",
      "       ▼",
      "   ┌──────────┐",
      "   │   LLM    │",
      "   └────┬─────┘",
      "        │",
      "        ▼",
      "   Grounded Answer",
      "        │",
      "        ▼",
      "      USER"
    ],

    components: [
      {
        name: "Frontend",
        responsibility:
          "Collect questions, display responses, show source information, and present errors or feedback."
      },
      {
        name: "Backend",
        responsibility:
          "Authenticate requests, validate inputs, coordinate AI operations, and expose application APIs."
      },
      {
        name: "AI Orchestrator",
        responsibility:
          "Coordinate retrieval, prompt construction, model calls, validation, and response processing."
      },
      {
        name: "Embedding Model",
        responsibility:
          "Convert documents and queries into vector representations."
      },
      {
        name: "Vector Database",
        responsibility:
          "Store embeddings and retrieve relevant chunks."
      },
      {
        name: "LLM",
        responsibility:
          "Generate a response using the user question and retrieved context."
      },
      {
        name: "Application Database",
        responsibility:
          "Store users, sessions, document metadata, feedback, and application state."
      },
      {
        name: "Evaluation System",
        responsibility:
          "Measure quality, grounding, correctness, and regression behavior."
      }
    ]
  },

  dataFlow: [
    {
      step: 1,
      title: "Document ingestion",
      description:
        "Documents enter the knowledge pipeline."
    },
    {
      step: 2,
      title: "Text extraction",
      description:
        "Text and metadata are extracted."
    },
    {
      step: 3,
      title: "Chunking",
      description:
        "Large documents are divided into retrieval-friendly chunks."
    },
    {
      step: 4,
      title: "Embedding",
      description:
        "Each chunk is converted into a numerical vector."
    },
    {
      step: 5,
      title: "Vector storage",
      description:
        "Vectors and metadata are stored."
    },
    {
      step: 6,
      title: "User question",
      description:
        "The user submits a question."
    },
    {
      step: 7,
      title: "Query embedding",
      description:
        "The question is converted into the same representation space."
    },
    {
      step: 8,
      title: "Retrieval",
      description:
        "Relevant document chunks are retrieved."
    },
    {
      step: 9,
      title: "Prompt construction",
      description:
        "Question, instructions, and retrieved context are combined."
    },
    {
      step: 10,
      title: "Generation",
      description:
        "The LLM generates an answer."
    },
    {
      step: 11,
      title: "Validation",
      description:
        "The application validates the response."
    },
    {
      step: 12,
      title: "Response",
      description:
        "The answer and relevant source information are returned."
    }
  ],

  ingestionPipeline: {
    flow: [
      "Raw document",
      "↓",
      "Text extraction",
      "↓",
      "Cleaning",
      "↓",
      "Chunking",
      "↓",
      "Metadata attachment",
      "↓",
      "Embedding",
      "↓",
      "Vector storage"
    ],

    chunkMetadata: [
      "documentId",
      "documentName",
      "pageNumber",
      "chunkId",
      "section",
      "source",
      "createdAt"
    ]
  },

  retrievalPipeline: {
    flow: [
      "User question",
      "↓",
      "Normalize query",
      "↓",
      "Generate query embedding",
      "↓",
      "Vector similarity search",
      "↓",
      "Retrieve top candidates",
      "↓",
      "Optional reranking",
      "↓",
      "Select context",
      "↓",
      "Send to LLM"
    ],

    retrievalFactors: [
      "Embedding quality",
      "Chunk size",
      "Chunk overlap",
      "Query quality",
      "Similarity metric",
      "Top-k",
      "Metadata filtering",
      "Reranking"
    ]
  },

  ragPromptArchitecture: {
    sections: [
      {
        name: "System instructions",
        purpose:
          "Define the assistant's behavior."
      },
      {
        name: "Grounding instructions",
        purpose:
          "Tell the model how to use supplied evidence."
      },
      {
        name: "Retrieved context",
        purpose:
          "Provide relevant source information."
      },
      {
        name: "User question",
        purpose:
          "Provide the actual task."
      },
      {
        name: "Output requirements",
        purpose:
          "Define the required response structure."
      }
    ],

    conceptualTemplate:
      "SYSTEM INSTRUCTIONS\n\nUse the supplied context as the primary evidence.\n\nCONTEXT\n{retrieved_chunks}\n\nUSER QUESTION\n{question}\n\nOUTPUT REQUIREMENTS\nProvide a clear answer and identify the supporting source information."
  },

  responseSchema: {
    answer: "string",
    sources: [
      {
        documentId: "string",
        documentName: "string",
        chunkId: "string"
      }
    ],
    confidenceNote: "string",
    status: "success | insufficient_context | error"
  },

  databaseDesign: {
    tables: [
      {
        name: "users",
        fields: [
          "id",
          "name",
          "email",
          "created_at"
        ]
      },
      {
        name: "documents",
        fields: [
          "id",
          "name",
          "source",
          "uploaded_by",
          "created_at"
        ]
      },
      {
        name: "document_chunks",
        fields: [
          "id",
          "document_id",
          "chunk_text",
          "metadata",
          "embedding_reference"
        ]
      },
      {
        name: "conversations",
        fields: [
          "id",
          "user_id",
          "created_at"
        ]
      },
      {
        name: "messages",
        fields: [
          "id",
          "conversation_id",
          "role",
          "content",
          "created_at"
        ]
      },
      {
        name: "evaluation_cases",
        fields: [
          "id",
          "question",
          "expected_behavior",
          "reference_context"
        ]
      },
      {
        name: "evaluation_results",
        fields: [
          "id",
          "case_id",
          "correctness",
          "grounding",
          "relevance",
          "notes"
        ]
      }
    ]
  },

  apiDesign: [
    {
      method: "POST",
      endpoint: "/api/chat",
      purpose: "Ask a question"
    },
    {
      method: "POST",
      endpoint: "/api/documents",
      purpose: "Upload a document"
    },
    {
      method: "GET",
      endpoint: "/api/documents",
      purpose: "List available documents"
    },
    {
      method: "GET",
      endpoint: "/api/conversations",
      purpose: "List conversations"
    },
    {
      method: "GET",
      endpoint: "/api/evaluations",
      purpose: "View evaluation results"
    },
    {
      method: "POST",
      endpoint: "/api/feedback",
      purpose: "Record user feedback"
    }
  ],

  requestExample: {
    endpoint: "/api/chat",
    method: "POST",
    body: {
      question: "What is retrieval-augmented generation?"
    }
  },

  responseExample: {
    answer:
      "Retrieval-augmented generation combines retrieval of relevant information with language-model generation.",
    sources: [
      {
        documentId: "doc-001",
        documentName: "Generative AI Foundations",
        chunkId: "chunk-014"
      }
    ],
    status: "success"
  },

  evaluation: {
    objective:
      "Determine whether the system retrieves useful evidence and generates answers that satisfy the application's requirements.",

    dimensions: [
      {
        name: "Retrieval relevance",
        question:
          "Did the system retrieve information relevant to the question?"
      },
      {
        name: "Correctness",
        question:
          "Is the generated answer correct?"
      },
      {
        name: "Faithfulness",
        question:
          "Are important claims supported by the retrieved context?"
      },
      {
        name: "Completeness",
        question:
          "Does the response contain the required information?"
      },
      {
        name: "Format compliance",
        question:
          "Does the response satisfy the required structure?"
      },
      {
        name: "Latency",
        question:
          "Is the response fast enough for the intended use?"
      }
    ],

    evaluationFlow: [
      "Evaluation dataset",
      "↓",
      "Run application",
      "↓",
      "Capture retrieval",
      "↓",
      "Capture response",
      "↓",
      "Evaluate",
      "↓",
      "Aggregate metrics",
      "↓",
      "Analyze failures",
      "↓",
      "Create regression tests"
    ],

    regressionStrategy: [
      "Every important production failure becomes a test case.",
      "Prompt changes are evaluated.",
      "Model changes are evaluated.",
      "Retrieval changes are evaluated.",
      "Chunking changes are evaluated.",
      "Decoding changes are evaluated."
    ]
  },

  security: {
    principles: [
      "Never expose private credentials to the frontend.",
      "Validate user input.",
      "Authenticate protected endpoints.",
      "Authorize document access.",
      "Validate tool arguments.",
      "Do not grant unnecessary tool permissions.",
      "Protect stored documents.",
      "Protect logs from unnecessary sensitive information.",
      "Rate-limit expensive operations.",
      "Validate model-generated structured data."
    ],

    architecture: [
      "User",
      "↓",
      "Authentication",
      "↓",
      "Authorization",
      "↓",
      "Application",
      "↓",
      "Validated AI operation",
      "↓",
      "Controlled data access"
    ]
  },

  failureHandling: [
    {
      failure: "No relevant documents found",
      response:
        "Return an insufficient-context state instead of inventing information."
    },
    {
      failure: "Model API unavailable",
      response:
        "Return a controlled error and optionally use an approved fallback."
    },
    {
      failure: "Invalid model output",
      response:
        "Validate, retry where appropriate, or return a controlled failure."
    },
    {
      failure: "Unauthorized document",
      response:
        "Reject access before retrieval."
    },
    {
      failure: "Vector search unavailable",
      response:
        "Return a controlled service error."
    },
    {
      failure: "Timeout",
      response:
        "Cancel or retry according to the application's policy."
    }
  ],

  observability: {
    signals: [
      "Request count",
      "Error rate",
      "Latency",
      "Input token count",
      "Output token count",
      "Retrieval count",
      "Retrieved document IDs",
      "Model identifier",
      "Evaluation results",
      "User feedback"
    ],

    traceFlow: [
      "Request",
      "→ Authentication",
      "→ Retrieval",
      "→ Prompt",
      "→ Model",
      "→ Validation",
      "→ Response"
    ]
  },

  performance: {
    latencyFormula:
      "Total latency ≈ network + retrieval + model processing + generation + post-processing",

    optimizationOptions: [
      "Use appropriate model size.",
      "Reduce unnecessary context.",
      "Use caching where safe.",
      "Optimize retrieval.",
      "Use streaming where appropriate.",
      "Avoid unnecessary model calls.",
      "Batch offline operations.",
      "Monitor slow components."
    ]
  },

  cost: {
    categories: [
      "Model inference",
      "Embedding generation",
      "Vector storage",
      "Database",
      "Compute",
      "Network",
      "Monitoring",
      "External tools"
    ],

    optimizationOptions: [
      "Avoid unnecessarily large prompts.",
      "Retrieve only relevant context.",
      "Cache reusable results.",
      "Use smaller models where evaluation shows they are sufficient.",
      "Control maximum output length.",
      "Monitor usage."
    ]
  },

  developmentMilestones: [
    {
      milestone: 1,
      title: "Problem and requirements",
      tasks: [
        "Define target users.",
        "Define documents.",
        "Define questions.",
        "Define success criteria."
      ]
    },
    {
      milestone: 2,
      title: "Document pipeline",
      tasks: [
        "Load documents.",
        "Extract text.",
        "Chunk documents.",
        "Attach metadata."
      ]
    },
    {
      milestone: 3,
      title: "Embeddings and retrieval",
      tasks: [
        "Generate embeddings.",
        "Store vectors.",
        "Implement similarity search.",
        "Return top results."
      ]
    },
    {
      milestone: 4,
      title: "LLM integration",
      tasks: [
        "Build prompt.",
        "Call model.",
        "Generate answer.",
        "Return source information."
      ]
    },
    {
      milestone: 5,
      title: "Application interface",
      tasks: [
        "Build chat interface.",
        "Display sources.",
        "Display loading state.",
        "Handle errors."
      ]
    },
    {
      milestone: 6,
      title: "Evaluation",
      tasks: [
        "Create evaluation dataset.",
        "Measure retrieval.",
        "Measure answer quality.",
        "Create regression cases."
      ]
    },
    {
      milestone: 7,
      title: "Production hardening",
      tasks: [
        "Authentication.",
        "Authorization.",
        "Rate limiting.",
        "Logging.",
        "Monitoring.",
        "Error handling."
      ]
    }
  ],

  testing: {
    unitTests: [
      "Chunking",
      "Embedding generation interface",
      "Similarity calculation",
      "Prompt construction",
      "Response parsing",
      "Schema validation"
    ],

    integrationTests: [
      "Question → retrieval",
      "Question → model",
      "RAG end-to-end",
      "Document upload → indexing",
      "Authentication → protected retrieval"
    ],

    evaluationTests: [
      "Known factual questions",
      "Multi-document questions",
      "No-answer questions",
      "Ambiguous questions",
      "Long questions",
      "Out-of-domain questions",
      "Regression questions"
    ]
  },

  sampleEvaluationCases: [
    {
      id: "eval-001",
      question: "What is Generative AI?",
      expected:
        "A clear definition supported by the knowledge base."
    },
    {
      id: "eval-002",
      question: "What is an embedding?",
      expected:
        "A vector-based representation explanation."
    },
    {
      id: "eval-003",
      question: "What is RAG?",
      expected:
        "An explanation of retrieval combined with generation."
    },
    {
      id: "eval-004",
      question: "What information is not present in the documents?",
      expected:
        "The system should state that the information is unavailable rather than inventing an answer."
    }
  ],

  deliverables: [
    "System architecture diagram",
    "Frontend",
    "Backend API",
    "Document ingestion pipeline",
    "Embedding pipeline",
    "Vector retrieval",
    "RAG generation",
    "Source-aware responses",
    "Evaluation dataset",
    "Evaluation report",
    "Security design",
    "Testing documentation",
    "README",
    "Deployment documentation"
  ],

  finalDemonstration: [
    "Upload a document.",
    "Show document processing.",
    "Ask a question.",
    "Show retrieved context or source information.",
    "Generate an answer.",
    "Demonstrate a question with insufficient context.",
    "Show evaluation results.",
    "Demonstrate error handling.",
    "Explain the architecture.",
    "Explain security controls."
  ],

  vivaQuestions: [
    "Why did you choose RAG?",
    "Why do you need embeddings?",
    "Why do you need a vector database?",
    "Why not simply put the entire document into the prompt?",
    "How does semantic search work?",
    "How does the LLM receive retrieved information?",
    "How do you reduce hallucination?",
    "How do you evaluate your system?",
    "How do you detect retrieval failure?",
    "What happens when no relevant document is found?",
    "How do you protect API keys?",
    "How do you protect private documents?",
    "How would you scale the system?",
    "How would you reduce latency?",
    "How would you reduce cost?",
    "How would you handle model API failure?",
    "How would you monitor the application?",
    "How would you test prompt changes?"
  ],

  extensionIdeas: [
    "Add multilingual retrieval.",
    "Add PDF processing.",
    "Add document access control.",
    "Add hybrid search.",
    "Add reranking.",
    "Add conversational memory.",
    "Add tool calling.",
    "Add agentic retrieval.",
    "Add streaming.",
    "Add evaluation dashboard.",
    "Add user feedback.",
    "Add model comparison."
  ],

  externalReferenceAreas: [
    {
      topic: "Generative AI application architecture",
      source:
        "Google Cloud generative AI application documentation",
      url:
        "https://docs.cloud.google.com/docs/ai-ml/generative-ai/develop-generative-ai-application"
    },
    {
      topic: "RAG architecture",
      source:
        "Google Cloud RAG application architecture documentation",
      url:
        "https://docs.cloud.google.com/application-design-center/docs/gen-ai-rag-with-sql"
    },
    {
      topic: "RAG evaluation",
      source:
        "Hugging Face Open-Source AI Cookbook",
      url:
        "https://huggingface.co/learn/cookbook/rag_evaluation"
    },
    {
      topic: "Agent architecture and tools",
      source:
        "Hugging Face Agents Course",
      url:
        "https://huggingface.co/learn/agents-course/unit1/introduction"
    }
  ],

  finalOutcome:
    "By completing this project, the learner should be able to explain and prototype a complete Generative AI application from user input through retrieval, model inference, validation, evaluation, security, monitoring, and deployment.",

  keyTakeaways: [
    "A production Generative AI application is much larger than an LLM call.",
    "RAG connects models to external knowledge.",
    "Embeddings provide a mathematical representation useful for semantic retrieval.",
    "Application code must control permissions and validation.",
    "Evaluation is required throughout the development lifecycle.",
    "Production readiness includes reliability, security, observability, latency, and cost."
  ]
};

export default project;

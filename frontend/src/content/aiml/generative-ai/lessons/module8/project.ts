const module8Project = {
  id: "project",
  moduleId: "module8",
  title: "Project — Multimodal AI Learning Assistant",
  subtitle: "Build a production-oriented multimodal knowledge and learning system",
  description:
    "Build an AI learning assistant that can understand text, images and documents, retrieve grounded knowledge, reason over multimodal evidence and provide structured educational responses.",

  difficulty: "Advanced",
  estimatedTime: "2–4 weeks",
  projectType: "Full-Stack Multimodal AI Application",

  objective: `
The objective is to build a complete multimodal AI application rather than a simple model demonstration.

The application should allow a learner to:

- ask questions using text
- upload images or screenshots
- upload educational documents
- retrieve relevant knowledge
- receive grounded explanations
- inspect supporting evidence
- maintain conversation context
- receive structured responses
- understand uncertainty
- interact with a safe AI system

The project should demonstrate the engineering concepts learned throughout Module 8.
`,

  problemStatement: `
Students often learn from heterogeneous materials.

A single topic may contain:

- textbook paragraphs
- diagrams
- screenshots
- tables
- lecture slides
- audio
- video

Traditional text-only assistants cannot always reason effectively over these sources.

The project solves this by creating a multimodal learning assistant capable of combining different information types.
`,

  coreFeatures: [
    "Text-based question answering",
    "Image and screenshot understanding",
    "Educational document upload",
    "Multimodal retrieval",
    "Grounded generation",
    "Source citations",
    "Conversation context",
    "Structured response generation",
    "Multimodal evidence display",
    "Safety validation",
    "Request logging",
    "Basic evaluation dashboard"
  ],

  optionalFeatures: [
    "Audio lecture summarization",
    "Video lecture analysis",
    "Timestamp-based citations",
    "Study-plan generation",
    "Quiz generation",
    "Flashcard generation",
    "Multimodal agent tools",
    "Voice interaction",
    "Image generation for explanations",
    "Personalized learning memory"
  ],

  recommendedStack: {
    frontend: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS"
    ],
    backend: [
      "FastAPI or Node.js",
      "REST API"
    ],
    ai: [
      "Multimodal LLM",
      "Embedding model",
      "Speech recognition when required"
    ],
    data: [
      "Vector database",
      "Document database",
      "Object storage"
    ],
    observability: [
      "Application logs",
      "Request tracing",
      "Latency metrics"
    ]
  },

  architecture: {
    title: "Project Architecture",
    layers: [
      {
        name: "Presentation Layer",
        responsibilities: [
          "Chat interface",
          "File upload",
          "Evidence display",
          "Conversation history",
          "Loading states",
          "Error states"
        ]
      },
      {
        name: "API Layer",
        responsibilities: [
          "Authentication",
          "Request validation",
          "File validation",
          "Rate limiting"
        ]
      },
      {
        name: "Application Layer",
        responsibilities: [
          "Request orchestration",
          "Prompt construction",
          "Context management",
          "Workflow coordination"
        ]
      },
      {
        name: "Multimodal Processing Layer",
        responsibilities: [
          "Image processing",
          "OCR",
          "Document parsing",
          "Audio processing",
          "Video processing"
        ]
      },
      {
        name: "Retrieval Layer",
        responsibilities: [
          "Embedding generation",
          "Vector search",
          "Metadata filtering",
          "Evidence ranking"
        ]
      },
      {
        name: "AI Layer",
        responsibilities: [
          "Multimodal model inference",
          "Structured output",
          "Reasoning"
        ]
      },
      {
        name: "Safety Layer",
        responsibilities: [
          "Input safety",
          "Prompt injection defense",
          "Output validation",
          "Tool authorization"
        ]
      },
      {
        name: "Observability Layer",
        responsibilities: [
          "Logs",
          "Metrics",
          "Tracing",
          "Cost tracking"
        ]
      }
    ]
  },

  dataModel: {
    users: [
      "id",
      "name",
      "email",
      "createdAt"
    ],
    documents: [
      "id",
      "userId",
      "name",
      "type",
      "storageUrl",
      "createdAt"
    ],
    chunks: [
      "id",
      "documentId",
      "content",
      "modality",
      "page",
      "embedding",
      "metadata"
    ],
    conversations: [
      "id",
      "userId",
      "createdAt"
    ],
    messages: [
      "id",
      "conversationId",
      "role",
      "content",
      "attachments",
      "createdAt"
    ],
    evidence: [
      "id",
      "messageId",
      "source",
      "page",
      "timestamp",
      "score"
    ]
  },

  apiDesign: [
    {
      method: "POST",
      endpoint: "/api/chat",
      purpose: "Send a multimodal question"
    },
    {
      method: "POST",
      endpoint: "/api/documents",
      purpose: "Upload a document"
    },
    {
      method: "POST",
      endpoint: "/api/search",
      purpose: "Search multimodal knowledge"
    },
    {
      method: "GET",
      endpoint: "/api/conversations/:id",
      purpose: "Retrieve conversation"
    },
    {
      method: "GET",
      endpoint: "/api/evidence/:id",
      purpose: "Retrieve supporting evidence"
    },
    {
      method: "GET",
      endpoint: "/api/health",
      purpose: "Health check"
    }
  ],

  requestFlow: [
    "User enters question",
    "User optionally attaches image/document",
    "Frontend sends request",
    "Backend authenticates user",
    "Backend validates input",
    "Attachments are processed",
    "Query is transformed",
    "Relevant evidence is retrieved",
    "Evidence is ranked",
    "Multimodal context is constructed",
    "Model generates structured response",
    "Response is validated",
    "Grounding is checked",
    "Safety checks are applied",
    "Response and citations are returned",
    "Telemetry is recorded"
  ],

  promptArchitecture: {
    system: [
      "Define assistant role",
      "Define safety requirements",
      "Define evidence rules",
      "Define output format"
    ],
    user: [
      "Question",
      "Requested task",
      "Optional preferences"
    ],
    evidence: [
      "Retrieved text",
      "Images",
      "Tables",
      "Metadata",
      "Source references"
    ],
    output: [
      "Answer",
      "Evidence",
      "Confidence",
      "Uncertainty",
      "Suggested next step"
    ]
  },

  multimodalCapabilities: {
    text: [
      "Question answering",
      "Explanation",
      "Summarization"
    ],
    image: [
      "Image understanding",
      "Diagram analysis",
      "Screenshot analysis",
      "OCR"
    ],
    document: [
      "PDF processing",
      "Table extraction",
      "Page retrieval",
      "Citation"
    ],
    audio: [
      "Transcription",
      "Lecture summarization"
    ],
    video: [
      "Frame analysis",
      "Transcript search",
      "Timestamp retrieval"
    ]
  },

  securityRequirements: [
    "Authentication",
    "Authorization",
    "File type validation",
    "File size limits",
    "Prompt injection defense",
    "Output validation",
    "Rate limiting",
    "Secure storage",
    "Sensitive-data protection",
    "Audit logging"
  ],

  reliabilityRequirements: [
    "Request timeout",
    "Retry policy",
    "Graceful degradation",
    "Health checks",
    "Error handling",
    "Job queue for long tasks",
    "Idempotent processing where appropriate"
  ],

  evaluationPlan: {
    categories: [
      {
        category: "Vision Understanding",
        metrics: [
          "Correctness",
          "Grounding",
          "Object identification"
        ]
      },
      {
        category: "Document Retrieval",
        metrics: [
          "Recall@K",
          "Precision@K",
          "Citation correctness"
        ]
      },
      {
        category: "Generation",
        metrics: [
          "Factuality",
          "Completeness",
          "Clarity"
        ]
      },
      {
        category: "Safety",
        metrics: [
          "Prompt injection resistance",
          "Unauthorized action prevention"
        ]
      },
      {
        category: "System",
        metrics: [
          "Latency",
          "Cost",
          "Availability"
        ]
      }
    ]
  },

  milestones: [
    {
      number: 1,
      title: "Project Setup",
      tasks: [
        "Create repository",
        "Create frontend",
        "Create backend",
        "Configure environment"
      ]
    },
    {
      number: 2,
      title: "Multimodal Input",
      tasks: [
        "Build chat interface",
        "Implement file upload",
        "Validate attachments"
      ]
    },
    {
      number: 3,
      title: "Document Pipeline",
      tasks: [
        "Parse documents",
        "Extract text",
        "Extract images",
        "Store metadata"
      ]
    },
    {
      number: 4,
      title: "Retrieval",
      tasks: [
        "Generate embeddings",
        "Create vector index",
        "Implement search",
        "Implement ranking"
      ]
    },
    {
      number: 5,
      title: "Multimodal Generation",
      tasks: [
        "Integrate multimodal model",
        "Construct context",
        "Generate structured responses"
      ]
    },
    {
      number: 6,
      title: "Grounding",
      tasks: [
        "Add citations",
        "Validate evidence",
        "Display source information"
      ]
    },
    {
      number: 7,
      title: "Safety",
      tasks: [
        "Add validation",
        "Implement prompt-injection defenses",
        "Secure file processing"
      ]
    },
    {
      number: 8,
      title: "Evaluation",
      tasks: [
        "Create golden dataset",
        "Run evaluation",
        "Measure latency",
        "Measure cost"
      ]
    },
    {
      number: 9,
      title: "Production Hardening",
      tasks: [
        "Add logging",
        "Add monitoring",
        "Add health checks",
        "Add failure handling"
      ]
    },
    {
      number: 10,
      title: "Final Demonstration",
      tasks: [
        "Demonstrate multimodal workflow",
        "Present architecture",
        "Present evaluation results",
        "Explain engineering decisions"
      ]
    }
  ],

  deliverables: [
    "Working frontend",
    "Working backend",
    "Multimodal input interface",
    "Document processing pipeline",
    "Multimodal retrieval",
    "Grounded generation",
    "Citation system",
    "Security layer",
    "Evaluation dataset",
    "Evaluation report",
    "Architecture diagram",
    "API documentation",
    "Deployment documentation"
  ],

  evaluationRubric: [
    {
      category: "Architecture",
      weight: 15
    },
    {
      category: "Multimodal Processing",
      weight: 15
    },
    {
      category: "Retrieval",
      weight: 15
    },
    {
      category: "Generation",
      weight: 10
    },
    {
      category: "Grounding",
      weight: 10
    },
    {
      category: "Security",
      weight: 10
    },
    {
      category: "Evaluation",
      weight: 10
    },
    {
      category: "Reliability",
      weight: 5
    },
    {
      category: "User Experience",
      weight: 5
    },
    {
      category: "Documentation",
      weight: 5
    }
  ],

  extensionChallenges: [
    "Add voice interaction.",
    "Add video understanding.",
    "Add multimodal agent tools.",
    "Add personalized learning memory.",
    "Add automatic quiz generation.",
    "Add image generation for visual explanations.",
    "Add streaming responses.",
    "Add asynchronous video processing.",
    "Add an evaluation dashboard.",
    "Add model routing based on task complexity."
  ],

  finalOutcome: `
After completing this project, the learner should be able to design and explain a complete multimodal AI application.

The learner should understand not only how to call a multimodal model, but also how to build the surrounding engineering system:

Input
→ Processing
→ Retrieval
→ Reasoning
→ Generation
→ Validation
→ Safety
→ Observability
→ User Experience

The project represents the transition from multimodal AI concepts to practical multimodal AI engineering.
`,

  achievement: "CloudLearn AI Multimodal AI Engineer"
};

export default module8Project;
const project = {
  id: "project",
  moduleId: "module6",

  title: "Project — Production AI Learning Assistant",

  subtitle:
    "Build an end-to-end LLM-powered learning application",

  description:
    "Build a production-oriented AI Learning Assistant that demonstrates the complete Module 6 application-development workflow: API integration, prompt engineering, conversation state, streaming, structured outputs, tool calling, security, evaluation, observability, and deployment.",

  difficulty: "Advanced",

  estimatedTime: "15–25 hours",

  projectType: "Full-Stack LLM Application",

  objective: `
The objective is to move from a simple LLM API call to a complete
application architecture.

The final system should allow a user to:

• ask technical questions
• maintain a conversation
• receive streamed responses
• request structured study plans
• use application tools
• receive validated outputs
• continue conversations safely

The application should also demonstrate:

• authentication
• authorization
• validation
• error handling
• observability
• evaluation
• cost tracking
• production architecture
`,

  problemStatement: `
Students can access powerful language models, but a model API alone does
not provide a complete learning platform.

The challenge is to build an application layer that safely converts
natural-language requests into useful educational workflows.

The system must combine:

USER INTERFACE
+
BACKEND API
+
PROMPT ENGINEERING
+
LLM
+
STRUCTURED OUTPUT
+
TOOLS
+
PERSISTENCE
+
SECURITY
+
OBSERVABILITY
+
EVALUATION
`,

  coreFeatures: [
    {
      title: "Conversational AI",
      description:
        "Users can ask technical questions and continue conversations."
    },
    {
      title: "Streaming",
      description:
        "Responses are progressively displayed as they are generated."
    },
    {
      title: "Prompt Templates",
      description:
        "System behavior is controlled through reusable versioned prompts."
    },
    {
      title: "Structured Study Plans",
      description:
        "The application can generate validated study-plan objects."
    },
    {
      title: "Tool Integration",
      description:
        "The assistant can call controlled application tools."
    },
    {
      title: "Conversation Persistence",
      description:
        "Conversation state is stored outside process memory."
    },
    {
      title: "Security",
      description:
        "Authentication, authorization, validation, rate limiting, and safe logging are included."
    },
    {
      title: "Observability",
      description:
        "Requests, latency, token usage, failures, and tool activity are traceable."
    },
    {
      title: "Evaluation",
      description:
        "A golden evaluation dataset is used to measure application quality."
    }
  ],

  recommendedStack: {
    frontend: [
      "Next.js",
      "React",
      "TypeScript"
    ],
    backend: [
      "Python",
      "FastAPI"
    ],
    llmLayer: [
      "LLM provider API",
      "Provider SDK",
      "Streaming API"
    ],
    storage: [
      "PostgreSQL or equivalent database",
      "Optional Redis-compatible cache"
    ],
    testing: [
      "Unit tests",
      "Integration tests",
      "Evaluation dataset"
    ]
  },

  architecture: {
    title: "System Architecture",

    layers: [
      {
        name: "Presentation",
        components: [
          "Chat UI",
          "Conversation UI",
          "Streaming renderer",
          "Study-plan viewer"
        ]
      },
      {
        name: "API",
        components: [
          "Authentication",
          "Request validation",
          "Rate limiting",
          "Response streaming"
        ]
      },
      {
        name: "Application",
        components: [
          "Chat service",
          "Prompt service",
          "Conversation service",
          "Tool service"
        ]
      },
      {
        name: "LLM",
        components: [
          "Model provider",
          "Model selection",
          "Generation parameters"
        ]
      },
      {
        name: "Data",
        components: [
          "Conversation repository",
          "User data",
          "Evaluation data"
        ]
      },
      {
        name: "Operations",
        components: [
          "Logs",
          "Metrics",
          "Tracing",
          "Cost monitoring"
        ]
      }
    ],

    diagram: `
                         ┌──────────────┐
                         │     USER     │
                         └──────┬───────┘
                                ↓
                         ┌──────────────┐
                         │  NEXT.JS UI  │
                         └──────┬───────┘
                                ↓
                       ┌─────────────────┐
                       │   API SERVER    │
                       └────────┬────────┘
                                ↓
                    ┌──────────────────────┐
                    │ APPLICATION SERVICE  │
                    └──────────┬───────────┘
                               ↓
                     ┌──────────────────┐
                     │   ORCHESTRATOR   │
                     └───┬────┬────┬────┘
                         ↓    ↓    ↓
                      PROMPT LLM  TOOLS
                         │    │    │
                         └────┼────┘
                              ↓
                       VALIDATION
                              ↓
                       STREAMING UI

                 ┌─────────────────────────┐
                 │ DATABASE / CACHE        │
                 └─────────────────────────┘

                 ┌─────────────────────────┐
                 │ OBSERVABILITY           │
                 └─────────────────────────┘
`
  },

  dataModel: {
    users: [
      "id",
      "email",
      "created_at"
    ],

    conversations: [
      "id",
      "user_id",
      "title",
      "created_at",
      "updated_at"
    ],

    messages: [
      "id",
      "conversation_id",
      "role",
      "content",
      "model",
      "prompt_version",
      "created_at"
    ],

    usage: [
      "id",
      "conversation_id",
      "input_tokens",
      "output_tokens",
      "latency_ms",
      "estimated_cost",
      "created_at"
    ]
  },

  apiDesign: [
    {
      method: "POST",
      endpoint: "/api/chat",
      purpose: "Start an LLM conversation request."
    },
    {
      method: "GET",
      endpoint: "/api/conversations",
      purpose: "List user conversations."
    },
    {
      method: "GET",
      endpoint: "/api/conversations/:id",
      purpose: "Retrieve conversation history."
    },
    {
      method: "POST",
      endpoint: "/api/study-plan",
      purpose: "Generate a structured study plan."
    },
    {
      method: "POST",
      endpoint: "/api/tools/:tool",
      purpose: "Controlled application tool execution."
    },
    {
      method: "GET",
      endpoint: "/health",
      purpose: "Application health check."
    }
  ],

  promptArchitecture: {
    system: [
      "Define assistant role.",
      "Define educational behavior.",
      "Define response requirements.",
      "Define safety and application rules."
    ],

    dynamic: [
      "User question",
      "Conversation history",
      "Optional application context",
      "Tool results"
    ],

    versioning: [
      "prompt_v1",
      "prompt_v2",
      "prompt_v3"
    ]
  },

  tools: [
    {
      name: "search_course_content",
      purpose:
        "Search approved educational content.",
      risk: "Read"
    },
    {
      name: "calculate",
      purpose:
        "Perform deterministic calculations.",
      risk: "Read"
    },
    {
      name: "get_progress",
      purpose:
        "Retrieve user learning progress.",
      risk: "Read"
    },
    {
      name: "save_study_plan",
      purpose:
        "Persist a generated study plan.",
      risk: "Write"
    }
  ],

  securityRequirements: [
    "Keep provider credentials on the backend.",
    "Authenticate users.",
    "Authorize access to conversations.",
    "Validate user inputs.",
    "Validate structured model outputs.",
    "Validate tool arguments.",
    "Authorize tool execution.",
    "Apply rate limits.",
    "Avoid logging unnecessary sensitive information.",
    "Protect database credentials.",
    "Treat external content as untrusted data."
  ],

  reliabilityRequirements: [
    "Set request timeouts.",
    "Use bounded retries.",
    "Use exponential backoff for appropriate temporary failures.",
    "Handle streaming interruption.",
    "Handle provider failures.",
    "Provide safe error responses.",
    "Use health checks.",
    "Design graceful degradation.",
    "Maintain deployment rollback capability."
  ],

  evaluationPlan: {
    datasetCategories: [
      "Basic technical questions",
      "Conceptual questions",
      "Coding questions",
      "Ambiguous questions",
      "Long-context questions",
      "Structured-output requests",
      "Tool-use requests",
      "Invalid inputs",
      "Security cases"
    ],

    metrics: [
      "Correctness",
      "Relevance",
      "Completeness",
      "Groundedness where applicable",
      "Structured-output validity",
      "Tool-call correctness",
      "Latency",
      "Token usage",
      "Estimated cost"
    ]
  },

  observabilityPlan: [
    "Generate a request ID.",
    "Record model name.",
    "Record prompt version.",
    "Record request latency.",
    "Record TTFT for streaming.",
    "Record token usage.",
    "Record tool calls.",
    "Record errors.",
    "Track estimated cost.",
    "Trace multi-step requests."
  ],

  milestones: [
    {
      phase: 1,
      title: "Project Setup",
      tasks: [
        "Create frontend.",
        "Create backend.",
        "Configure environment variables.",
        "Create basic health endpoint."
      ]
    },
    {
      phase: 2,
      title: "Basic LLM Integration",
      tasks: [
        "Connect provider.",
        "Create model service.",
        "Implement first chat request."
      ]
    },
    {
      phase: 3,
      title: "Prompt & Conversation",
      tasks: [
        "Create prompt service.",
        "Add conversation storage.",
        "Implement history management."
      ]
    },
    {
      phase: 4,
      title: "Streaming",
      tasks: [
        "Implement streaming backend.",
        "Implement streaming frontend.",
        "Handle cancellation and errors."
      ]
    },
    {
      phase: 5,
      title: "Structured Outputs",
      tasks: [
        "Create schemas.",
        "Implement validation.",
        "Build study-plan feature."
      ]
    },
    {
      phase: 6,
      title: "Tools",
      tasks: [
        "Create tool registry.",
        "Implement argument validation.",
        "Implement authorization.",
        "Add audit logging."
      ]
    },
    {
      phase: 7,
      title: "Security",
      tasks: [
        "Authentication.",
        "Authorization.",
        "Rate limiting.",
        "Safe logging."
      ]
    },
    {
      phase: 8,
      title: "Testing & Evaluation",
      tasks: [
        "Create unit tests.",
        "Create integration tests.",
        "Build golden dataset.",
        "Run regression evaluation."
      ]
    },
    {
      phase: 9,
      title: "Observability",
      tasks: [
        "Add request IDs.",
        "Add structured logging.",
        "Track latency.",
        "Track token usage.",
        "Track cost."
      ]
    },
    {
      phase: 10,
      title: "Production Readiness",
      tasks: [
        "Configure deployment.",
        "Add health checks.",
        "Add retry policies.",
        "Add fallback behavior.",
        "Test failure scenarios."
      ]
    }
  ],

  deliverables: [
    "Working frontend",
    "Working backend",
    "LLM API integration",
    "Prompt service",
    "Conversation persistence",
    "Streaming interface",
    "Structured study-plan feature",
    "At least one tool integration",
    "Authentication and authorization",
    "Automated tests",
    "Evaluation dataset",
    "Observability implementation",
    "Architecture diagram",
    "Production-readiness document"
  ],

  evaluationRubric: [
    {
      category: "Functionality",
      focus:
        "Core LLM interaction and application features work correctly."
    },
    {
      category: "Architecture",
      focus:
        "Responsibilities are clearly separated."
    },
    {
      category: "Security",
      focus:
        "Authentication, authorization, validation, and tool controls are implemented."
    },
    {
      category: "Reliability",
      focus:
        "Timeouts, retries, failures, and graceful degradation are handled."
    },
    {
      category: "Evaluation",
      focus:
        "The application has repeatable quality tests."
    },
    {
      category: "Observability",
      focus:
        "Important requests and operational metrics are traceable."
    },
    {
      category: "Engineering Quality",
      focus:
        "The code is maintainable, documented, and appropriately structured."
    }
  ],

  extensionChallenges: [
    "Add RAG to the assistant.",
    "Add multimodal document understanding.",
    "Add multiple model providers.",
    "Add model routing.",
    "Add a Redis-compatible cache.",
    "Add background evaluation jobs.",
    "Add an evaluation dashboard.",
    "Add user-level cost controls.",
    "Add advanced tool orchestration."
  ],

  finalOutcome: `
After completing this project, you should have a practical understanding
of how an LLM becomes part of a real software system.

The final architecture should demonstrate:

API
+
PROMPTS
+
CONTEXT
+
MODEL
+
STREAMING
+
STRUCTURED OUTPUT
+
TOOLS
+
SECURITY
+
EVALUATION
+
OBSERVABILITY
+
DEPLOYMENT

This project serves as the bridge from basic LLM API development toward
RAG, multimodal systems, agents, and advanced LLM application engineering.
`
};

export default project;
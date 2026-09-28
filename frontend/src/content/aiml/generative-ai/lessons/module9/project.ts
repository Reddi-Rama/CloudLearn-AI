const project = {
  id: "project",
  moduleId: "module9",
  type: "project",
  title: "Production LLM Application Engineering Capstone",
  subtitle: "Design and build a complete production-oriented LLM application",
  difficulty: "Advanced",
  duration: "3–5 weeks",

  overview: `
This project is the final engineering challenge for Module 9.

You will design and build a complete LLM-powered application that demonstrates
the principles of production AI engineering.

The project must go beyond a basic chatbot.

It should demonstrate:

- Model integration
- Prompt engineering
- Context engineering
- Conversation state
- RAG
- Structured outputs
- Tool calling
- Security
- Evaluation
- Observability
- Reliability
- Cost optimization
- Deployment
- Scalability

The recommended project is a Production AI Learning Assistant, but the same
architecture can be adapted to another serious LLM application.
`,

  projectLevel: "Advanced",

  projectGoal: `
Build a production-oriented AI Learning Assistant that can understand learner
questions, retrieve relevant learning material, maintain conversations,
generate structured learning information, use controlled tools, collect
feedback and expose measurable quality and operational signals.
`,

  problemStatement: `
Many AI learning applications stop at a chat interface.

A real production system must answer additional questions:

How is context selected?

How are documents retrieved?

How is user data protected?

What happens when the model fails?

How is quality measured?

How is cost controlled?

How is the system scaled?

How can engineers debug a bad response?

How are improvements validated?

This project solves these engineering problems as part of one complete system.
`,

  targetUsers: [
    "Students",
    "Technical learners",
    "Developers",
    "Self-directed learners",
    "Course platforms"
  ],

  coreFeatures: [
    {
      name: "AI Chat",
      description: "Users can ask technical questions and receive generated answers."
    },
    {
      name: "Conversation Management",
      description: "Users can create, continue and review conversations."
    },
    {
      name: "Document Upload",
      description: "Users can upload learning material for retrieval."
    },
    {
      name: "RAG",
      description: "The application retrieves relevant learning material before generation."
    },
    {
      name: "Grounded Answers",
      description: "Answers can reference the supplied learning context."
    },
    {
      name: "Structured Learning Plans",
      description: "The model can return structured study plans and learning information."
    },
    {
      name: "Tool Calling",
      description: "The application exposes controlled deterministic tools."
    },
    {
      name: "Feedback",
      description: "Users can rate answers and provide failure categories."
    },
    {
      name: "Evaluation",
      description: "The project includes an evaluation and regression dataset."
    },
    {
      name: "Observability",
      description: "Requests expose traces, latency, token and error information."
    }
  ],

  optionalFeatures: [
    "Streaming responses",
    "Voice input",
    "Multimodal document support",
    "Learning progress tracking",
    "Personalized recommendations",
    "Multi-model routing",
    "Agent-based research workflow",
    "Admin analytics",
    "Team or classroom workspaces"
  ],

  recommendedStack: {
    frontend: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS"
    ],
    backend: [
      "Node.js",
      "TypeScript",
      "REST API"
    ],
    ai: [
      "LLM API",
      "Embeddings",
      "Structured Outputs",
      "Tool Calling"
    ],
    data: [
      "PostgreSQL or equivalent relational database",
      "Vector database",
      "Object storage",
      "Redis or equivalent cache"
    ],
    infrastructure: [
      "Docker",
      "CI/CD",
      "Cloud deployment",
      "Monitoring"
    ]
  },

  architecture: {
    title: "Production AI Learning Assistant",
    diagram: `
                         USER
                           |
                           v
                    NEXT.JS FRONTEND
                           |
                           v
                     API GATEWAY
                           |
                 +---------+---------+
                 |                   |
                 v                   v
          Authentication        Rate Limiting
                 |
                 v
          Application Service
                 |
      +----------+----------+----------+----------+
      |          |          |          |          |
      v          v          v          v          v
   Context    RAG       Tools      Memory      Feedback
   Service   Service    Service    Service      Service
      |          |          |          |
      |          v          v          |
      |      Vector Store  APIs        |
      |                               |
      +---------------+---------------+
                      |
                      v
                MODEL GATEWAY
                      |
             +--------+--------+
             |        |        |
             v        v        v
          Model A  Model B  Fallback
                      |
                      v
               Output Validation
                      |
                      v
                  RESPONSE

 Background:
 Documents -> Queue -> Workers -> Parse -> Chunk -> Embed -> Vector Store

 Shared:
 Database + Cache + Object Storage

 Observability:
 Logs + Metrics + Traces + Evaluation
    `
  },

  dataModel: {
    users: [
      "id",
      "email",
      "role",
      "createdAt"
    ],
    conversations: [
      "id",
      "userId",
      "title",
      "createdAt",
      "updatedAt"
    ],
    messages: [
      "id",
      "conversationId",
      "role",
      "content",
      "model",
      "tokenUsage",
      "createdAt"
    ],
    documents: [
      "id",
      "userId",
      "name",
      "status",
      "createdAt"
    ],
    feedback: [
      "id",
      "messageId",
      "rating",
      "category",
      "comment",
      "createdAt"
    ],
    traces: [
      "id",
      "requestId",
      "model",
      "latencyMs",
      "inputTokens",
      "outputTokens",
      "estimatedCost",
      "status"
    ]
  },

  apiDesign: [
    {
      method: "POST",
      route: "/api/chat",
      purpose: "Send a user message and generate a response"
    },
    {
      method: "GET",
      route: "/api/conversations",
      purpose: "List user conversations"
    },
    {
      method: "POST",
      route: "/api/conversations",
      purpose: "Create a conversation"
    },
    {
      method: "POST",
      route: "/api/documents",
      purpose: "Upload a learning document"
    },
    {
      method: "GET",
      route: "/api/documents",
      purpose: "List accessible documents"
    },
    {
      method: "POST",
      route: "/api/feedback",
      purpose: "Submit answer feedback"
    },
    {
      method: "GET",
      route: "/api/jobs/:id",
      purpose: "Get background job status"
    },
    {
      method: "GET",
      route: "/api/health",
      purpose: "Application health"
    },
    {
      method: "GET",
      route: "/api/ready",
      purpose: "Application readiness"
    }
  ],

  promptArchitecture: {
    system: "Defines assistant behavior, boundaries and application rules.",
    context: "Contains authorized retrieved learning information.",
    history: "Contains relevant conversation state.",
    user: "Contains the current learner request.",
    output: "Defines the expected response format.",
    validation: "Checks the generated response before application use."
  },

  ragPipeline: [
    "Document upload",
    "File validation",
    "Text extraction",
    "Normalization",
    "Chunking",
    "Metadata generation",
    "Embedding generation",
    "Vector storage",
    "Query processing",
    "Retrieval",
    "Filtering",
    "Reranking",
    "Context construction",
    "Grounded generation",
    "Citation or source metadata"
  ],

  toolSystem: {
    recommendedTools: [
      {
        name: "searchLearningMaterial",
        purpose: "Search authorized learning content"
      },
      {
        name: "calculate",
        purpose: "Perform deterministic calculations"
      },
      {
        name: "getCourseProgress",
        purpose: "Retrieve learner progress"
      }
    ],
    securityRules: [
      "Validate tool arguments",
      "Authorize every sensitive tool",
      "Never expose unrestricted database access",
      "Log tool execution metadata",
      "Apply timeouts",
      "Limit tool calls",
      "Return controlled errors"
    ]
  },

  securityRequirements: [
    "Authentication",
    "Authorization",
    "Input validation",
    "Output validation",
    "Tenant/user data isolation",
    "Secure secret storage",
    "Prompt injection defenses",
    "RAG authorization",
    "Tool authorization",
    "Rate limiting",
    "Audit logging",
    "Sensitive-data protection"
  ],

  reliabilityRequirements: [
    "Model timeout",
    "Retry policy",
    "Exponential backoff",
    "Provider fallback",
    "Circuit breaker",
    "Graceful degradation",
    "Idempotency for side-effecting operations",
    "Queue retry policy",
    "Dead-letter handling"
  ],

  evaluationPlan: {
    categories: [
      "General correctness",
      "Groundedness",
      "Retrieval quality",
      "Structured output compliance",
      "Tool selection",
      "Tool safety",
      "Prompt injection resistance",
      "Response relevance",
      "Response completeness",
      "Latency",
      "Cost"
    ],
    minimumDataset: 50,
    datasetTypes: [
      "Normal cases",
      "Edge cases",
      "RAG cases",
      "Tool cases",
      "Adversarial cases",
      "Regression cases",
      "Safety cases"
    ]
  },

  observabilityPlan: {
    logs: [
      "Request lifecycle",
      "Model calls",
      "Tool calls",
      "Retrieval events",
      "Errors",
      "Security events",
      "Deployment events"
    ],
    metrics: [
      "Request count",
      "Error rate",
      "P50 latency",
      "P95 latency",
      "P99 latency",
      "Input tokens",
      "Output tokens",
      "Estimated cost",
      "Cache hit rate",
      "Tool success rate",
      "Fallback rate",
      "Evaluation score"
    ],
    traces: [
      "API request",
      "Authentication",
      "Retrieval",
      "Prompt construction",
      "Model call",
      "Tool call",
      "Validation",
      "Persistence"
    ]
  },

  milestones: [
    {
      phase: "Milestone 1",
      title: "Requirements & Architecture",
      deliverables: [
        "Problem definition",
        "Functional requirements",
        "Non-functional requirements",
        "Architecture diagram",
        "Technology decisions"
      ]
    },
    {
      phase: "Milestone 2",
      title: "Application Foundation",
      deliverables: [
        "Frontend",
        "Backend API",
        "Authentication",
        "Database"
      ]
    },
    {
      phase: "Milestone 3",
      title: "LLM Integration",
      deliverables: [
        "Model gateway",
        "Prompt templates",
        "Structured outputs",
        "Conversation handling"
      ]
    },
    {
      phase: "Milestone 4",
      title: "RAG",
      deliverables: [
        "Document upload",
        "Parsing",
        "Chunking",
        "Embeddings",
        "Vector search",
        "Grounded generation"
      ]
    },
    {
      phase: "Milestone 5",
      title: "Tools & Workflows",
      deliverables: [
        "Tool registry",
        "Validation",
        "Authorization",
        "Workflow execution"
      ]
    },
    {
      phase: "Milestone 6",
      title: "Security & Reliability",
      deliverables: [
        "Guardrails",
        "Rate limiting",
        "Timeouts",
        "Retries",
        "Fallbacks"
      ]
    },
    {
      phase: "Milestone 7",
      title: "Evaluation & Observability",
      deliverables: [
        "Evaluation dataset",
        "Regression tests",
        "Logging",
        "Metrics",
        "Tracing",
        "Dashboard"
      ]
    },
    {
      phase: "Milestone 8",
      title: "Production Deployment",
      deliverables: [
        "Containerization",
        "CI/CD",
        "Cloud deployment",
        "Health checks",
        "Rollback plan"
      ]
    }
  ],

  rubric: [
    {
      category: "Architecture",
      weight: 15
    },
    {
      category: "LLM Engineering",
      weight: 10
    },
    {
      category: "RAG",
      weight: 15
    },
    {
      category: "Tools & Workflows",
      weight: 10
    },
    {
      category: "Security",
      weight: 15
    },
    {
      category: "Evaluation",
      weight: 10
    },
    {
      category: "Observability",
      weight: 10
    },
    {
      category: "Reliability",
      weight: 5
    },
    {
      category: "Performance & Cost",
      weight: 5
    },
    {
      category: "Documentation",
      weight: 5
    }
  ],

  requiredDeliverables: [
    "Working application",
    "Source code",
    "Architecture diagram",
    "Database schema",
    "API documentation",
    "Prompt documentation",
    "RAG documentation",
    "Security documentation",
    "Evaluation dataset",
    "Evaluation report",
    "Observability screenshots",
    "Deployment documentation",
    "Production-readiness checklist",
    "Final project presentation"
  ],

  stretchGoals: [
    "Multi-model routing",
    "Multimodal input",
    "Agentic research workflow",
    "Streaming",
    "Voice interface",
    "Personalized memory",
    "Multi-tenant organizations",
    "Advanced RAG reranking",
    "Automated evaluation pipeline",
    "Cost-aware routing"
  ],

  finalChecklist: [
    "Application works locally",
    "Authentication works",
    "Authorization works",
    "Chat works",
    "Conversation state works",
    "RAG works",
    "Tools work",
    "Structured outputs are validated",
    "Security controls are implemented",
    "Evaluation dataset exists",
    "Regression testing works",
    "Logs exist",
    "Metrics exist",
    "Tracing exists",
    "Cost is measurable",
    "Latency is measurable",
    "Fallback exists",
    "Deployment works",
    "Rollback strategy exists",
    "Documentation is complete"
  ],

  outcome: `
After completing this project, the learner should be able to reason about an
LLM application as a complete production software system rather than simply
as a model API integration.

The learner should be capable of designing application architecture,
integrating models, engineering context, implementing RAG and tools, securing
AI workflows, evaluating quality, observing production behavior, optimizing
cost and latency, handling failures and deploying scalable AI systems.
`,

  achievement: "CloudLearn AI — LLM Application Engineer"
};

export default project;
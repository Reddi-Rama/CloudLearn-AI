const lesson2 = {
  id: "module9-lesson2",
  moduleId: "module9",
  title: "LLM Application Architecture & Design Patterns",
  subtitle: "Designing scalable architectures around language models",
  description:
    "Learn the architectural patterns used to build maintainable LLM applications, including service layers, model gateways, RAG pipelines, tool systems, state management and event-driven workflows.",

  sections: [
    {
      title: "1. Why Architecture Matters",
      content:
        "An LLM application can begin as a simple API call but quickly become a complex system containing prompts, databases, retrieval, tools, authentication, evaluation and monitoring. Architecture provides boundaries between these responsibilities."
    },

    {
      title: "2. Layered LLM Architecture",
      architecture: [
        "Presentation Layer",
        "API Layer",
        "Application Service Layer",
        "AI Orchestration Layer",
        "Data / Retrieval Layer",
        "Model Provider Layer",
        "Infrastructure Layer"
      ]
    },

    {
      title: "3. Presentation Layer",
      bullets: [
        "Web interface",
        "Mobile interface",
        "Chat interface",
        "File upload interface",
        "Streaming response display",
        "Feedback collection"
      ]
    },

    {
      title: "4. API Layer",
      content:
        "The API layer exposes controlled endpoints to clients and handles authentication, request validation and response formatting.",
      examples: [
        "POST /chat",
        "POST /documents",
        "POST /search",
        "POST /tools",
        "GET /health"
      ]
    },

    {
      title: "5. Application Service Layer",
      content:
        "The service layer contains application-specific business logic. It should not depend unnecessarily on the details of one particular model provider."
    },

    {
      title: "6. AI Orchestration Layer",
      architecture: [
        "Input",
        "Intent",
        "Context",
        "Prompt",
        "Model",
        "Tools",
        "Validation",
        "Response"
      ],
      content:
        "The orchestration layer coordinates the model, retrieval systems, tools and application rules."
    },

    {
      title: "7. Model Gateway Pattern",
      content:
        "A model gateway provides a common interface around one or more model providers.",
      code: `class ModelGateway {
  constructor(provider) {
    this.provider = provider;
  }

  async generate(request) {
    return this.provider.generate(request);
  }
}`
    },

    {
      title: "8. Why Use a Model Gateway?",
      bullets: [
        "Provider abstraction",
        "Centralized configuration",
        "Logging",
        "Retry handling",
        "Fallback models",
        "Cost tracking",
        "Model routing",
        "Easier testing"
      ]
    },

    {
      title: "9. Repository Pattern",
      content:
        "Repositories isolate application logic from storage implementation.",
      code: `class DocumentRepository {
  async findById(id) {
    // database implementation
  }

  async save(document) {
    // database implementation
  }
}`
    },

    {
      title: "10. RAG Architecture Pattern",
      architecture: [
        "User Query",
        "Query Transformation",
        "Retriever",
        "Reranker",
        "Context Builder",
        "Prompt",
        "LLM",
        "Grounded Response"
      ]
    },

    {
      title: "11. Tool Calling Pattern",
      architecture: [
        "User Request",
        "LLM",
        "Tool Selection",
        "Argument Validation",
        "Tool Execution",
        "Tool Result",
        "LLM",
        "Final Response"
      ]
    },

    {
      title: "12. Agent Architecture",
      content:
        "Agentic applications allow a model to plan or select actions across multiple steps.",
      architecture: [
        "Goal",
        "Planning",
        "Action",
        "Observation",
        "Evaluation",
        "Next Action",
        "Completion"
      ]
    },

    {
      title: "13. Stateless Architecture",
      content:
        "A stateless application server does not depend on local memory for persistent conversation or user state.",
      bullets: [
        "Easier horizontal scaling",
        "Better fault tolerance",
        "Requests can reach different server instances",
        "State is stored externally"
      ]
    },

    {
      title: "14. State Management",
      table: {
        headers: ["State", "Storage Example"],
        rows: [
          ["Conversation", "Database / cache"],
          ["User profile", "Database"],
          ["Session", "Cache"],
          ["Documents", "Object storage"],
          ["Embeddings", "Vector database"],
          ["Task progress", "Database / workflow engine"]
        ]
      }
    },

    {
      title: "15. Synchronous Architecture",
      architecture: [
        "Client",
        "API",
        "LLM",
        "Response",
        "Client"
      ],
      content:
        "Synchronous requests are appropriate when the operation can complete within a practical request-response period."
    },

    {
      title: "16. Asynchronous Architecture",
      architecture: [
        "Client",
        "API",
        "Job Queue",
        "Worker",
        "LLM / Tools",
        "Result Store",
        "Notification"
      ],
      content:
        "Long-running tasks such as document ingestion, large media processing and complex agent workflows may require asynchronous execution."
    },

    {
      title: "17. Event-Driven AI Applications",
      content:
        "Event-driven architectures allow components to react to events without requiring direct synchronous coupling.",
      examples: [
        "Document uploaded",
        "Embedding generation completed",
        "Evaluation finished",
        "Tool execution completed",
        "Background job failed"
      ]
    },

    {
      title: "18. Caching",
      content:
        "Caching can reduce latency and cost when identical or reusable computations occur repeatedly.",
      formula: "Hit Rate = Cache Hits / Total Requests",
      bullets: [
        "Cache embeddings.",
        "Cache stable retrieval results when appropriate.",
        "Cache expensive preprocessing.",
        "Use careful invalidation policies."
      ]
    },

    {
      title: "19. Model Routing",
      content:
        "Different tasks may benefit from different models. A routing layer can select a model according to task complexity, latency requirements, modality and cost.",
      architecture: [
        "Request",
        "Task Classification",
        "Model Router",
        "Fast Model / Powerful Model / Specialized Model",
        "Response"
      ]
    },

    {
      title: "20. Configuration Management",
      bullets: [
        "Model names",
        "API endpoints",
        "Temperature",
        "Token limits",
        "Timeouts",
        "Retry policy",
        "Feature flags",
        "Environment variables"
      ]
    },

    {
      title: "21. Dependency Injection",
      content:
        "Dependency injection allows services to receive their dependencies rather than creating them internally.",
      code: `class ChatService {
  constructor(model, retriever, validator) {
    this.model = model;
    this.retriever = retriever;
    this.validator = validator;
  }
}`
    },

    {
      title: "22. Testing Architecture",
      architecture: [
        "Unit Tests",
        "Integration Tests",
        "Model Tests",
        "Retrieval Tests",
        "Tool Tests",
        "End-to-End Tests",
        "Regression Evaluation"
      ]
    },

    {
      title: "23. Production Reference Architecture",
      architecture: [
        "Client",
        "CDN / Gateway",
        "API Service",
        "Authentication",
        "Application Services",
        "AI Orchestrator",
        "Model Gateway",
        "RAG / Vector Store",
        "Tool Services",
        "Database",
        "Cache",
        "Queue",
        "Observability"
      ]
    },

    {
      title: "24. Architecture Tradeoffs",
      table: {
        headers: ["Pattern", "Strength", "Tradeoff"],
        rows: [
          ["Monolith", "Simple to start", "Harder to scale independently"],
          ["Layered", "Clear boundaries", "More abstraction"],
          ["Microservices", "Independent scaling", "Operational complexity"],
          ["Event-driven", "Loose coupling", "Harder debugging"],
          ["Serverless", "Managed scaling", "Execution constraints"]
        ]
      }
    },

    {
      title: "25. Practical Architecture Example",
      code: `class AIApplication {
  constructor({ model, retriever, tools, validator }) {
    this.model = model;
    this.retriever = retriever;
    this.tools = tools;
    this.validator = validator;
  }

  async run(input) {
    const context = await this.retriever.search(input);

    const result = await this.model.generate({
      input,
      context,
      tools: this.tools
    });

    return this.validator.validate(result);
  }
}`
    }
  ],

  comparisons: [
    {
      title: "Monolithic vs Layered vs Service-Based",
      headers: ["Monolithic", "Layered", "Service-Based"],
      rows: [
        ["Simple deployment", "Clear internal boundaries", "Independent components"],
        ["Fast initial development", "Good maintainability", "Independent scaling"],
        ["Can become difficult to manage", "Moderate complexity", "Higher operational complexity"]
      ]
    }
  ],

  exercises: [
    "Draw a layered architecture for an AI assistant.",
    "Explain why a model gateway is useful.",
    "Explain the repository pattern.",
    "Compare synchronous and asynchronous AI workflows.",
    "Explain why stateless servers help scaling."
  ],

  codingExercises: [
    "Implement a model gateway interface.",
    "Create a repository abstraction.",
    "Implement a simple service layer.",
    "Create a model router based on task type.",
    "Implement dependency injection for an AI service."
  ],

  architectureExercises: [
    "Design a scalable RAG application.",
    "Design an AI agent with tool execution.",
    "Design an asynchronous document-processing pipeline.",
    "Design a multi-model AI gateway."
  ],

  interviewQuestions: [
    "What is an LLM application architecture?",
    "What is the model gateway pattern?",
    "Why should business logic be separated from model providers?",
    "What is the repository pattern?",
    "What is an agent architecture?",
    "Why are stateless services useful?",
    "When should an LLM workflow become asynchronous?",
    "Why is dependency injection useful?"
  ],

  commonMistakes: [
    "Putting all application logic inside one API route.",
    "Coupling the entire application to one provider.",
    "Storing persistent state only in server memory.",
    "Mixing retrieval, prompting and business logic.",
    "Ignoring asynchronous workflows.",
    "Skipping integration tests."
  ],

  summary:
    "Strong LLM applications require deliberate architecture. Layered services, model gateways, repositories, retrieval pipelines, tool systems, state management, queues, caching and observability create boundaries around probabilistic model behavior and make applications easier to test, scale and maintain.",

  keyTakeaways: [
    "Architecture separates responsibilities.",
    "Model gateways reduce provider coupling.",
    "RAG and tool calling are reusable application patterns.",
    "Stateless services support horizontal scaling.",
    "Queues support long-running AI workflows.",
    "Testing must cover both software and model behavior."
  ]
};

export default lesson2;
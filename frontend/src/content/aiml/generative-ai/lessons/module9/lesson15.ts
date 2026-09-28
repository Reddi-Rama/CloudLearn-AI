const lesson15 = {
  id: "lesson15",
  moduleId: "module9",
  lessonNumber: 15,
  title: "Advanced LLM Application System Design",
  subtitle: "Designing complete, scalable, secure and production-ready AI systems",
  duration: "90 min",
  difficulty: "Advanced",

  overview: `
System design brings together the concepts learned throughout LLM Application
Engineering.

A production LLM system is not simply a model connected to an API.

It is a collection of cooperating components responsible for:

- User interaction
- Authentication
- Authorization
- Prompt construction
- Context management
- Retrieval
- Tool execution
- Model routing
- State
- Memory
- Evaluation
- Observability
- Security
- Reliability
- Cost control
- Scaling
- Deployment

This lesson develops a systematic method for designing such systems.

It covers requirements analysis, functional and non-functional requirements,
capacity estimation, API design, data modeling, architecture selection,
synchronous and asynchronous workflows, model gateways, RAG integration,
agent orchestration, caching, queues, security, observability, reliability,
multi-tenancy and trade-off analysis.

The goal is to learn how to move from:

"Build an AI assistant"

to:

"Design an engineering system capable of safely operating an AI assistant at
production scale."
`,

  objectives: [
    "Understand LLM system-design methodology",
    "Translate product requirements into architecture",
    "Identify functional and non-functional requirements",
    "Estimate capacity, traffic and cost",
    "Design APIs and data models",
    "Design model gateways",
    "Integrate RAG and tools",
    "Design state and memory architecture",
    "Design security and multi-tenancy",
    "Design scalable and observable AI systems",
    "Evaluate architecture trade-offs",
    "Produce a complete production system design"
  ],

  sections: [
    {
      title: "1. What Is LLM System Design?",
      content: `
System design asks:

How should multiple components work together to satisfy a set of requirements?

For an LLM application, the system may contain:

Client
 |
API
 |
Application
 |
+---- Model
+---- Retrieval
+---- Tools
+---- Memory
+---- Database
+---- Cache
+---- Queue
+---- Observability

System design is about the relationships between these components.
      `
    },

    {
      title: "2. Start With Requirements",
      content: `
Before drawing architecture, identify requirements.

Functional requirements describe what the system must do.

Examples:

- Answer questions
- Search documents
- Create tickets
- Summarize files
- Remember conversations

Non-functional requirements describe how the system must operate.

Examples:

- Latency
- Availability
- Security
- Scalability
- Cost
- Privacy
- Reliability

A good system design begins with requirements rather than technology names.
      `
    },

    {
      title: "3. Functional Requirements",
      content: `
Example AI learning assistant:

1. User can ask questions.
2. User can upload documents.
3. System can retrieve relevant content.
4. System can generate grounded answers.
5. User can view conversation history.
6. User can provide feedback.
7. Administrators can monitor quality.

These requirements determine the core components.
      `
    },

    {
      title: "4. Non-Functional Requirements",
      content: `
Example targets:

Availability:
99.9%

Interactive latency:
P95 < defined target

Security:
Authenticated users only

Scalability:
Support expected concurrent traffic

Cost:
Stay within monthly budget

These values should come from product requirements rather than being arbitrary.
      `
    },

    {
      title: "5. Capacity Estimation",
      content: `
Suppose:

10,000 daily users

Average:
20 requests per user

Daily requests:

10,000 × 20 = 200,000 requests/day

Approximate average requests per second:

200,000 / 86,400 ≈ 2.31 requests/second

But average traffic is not enough.

Peak traffic may be much higher.

System design therefore considers:

Average Load
Peak Load
Concurrency
Request Duration
Token Volume
Storage Growth
      `
    },

    {
      title: "6. Token Capacity",
      content: `
Suppose:

200,000 requests/day

Average input:
2,000 tokens

Average output:
500 tokens

Total tokens/request:

2,500

Daily token volume:

200,000 × 2,500
= 500,000,000 tokens/day

This estimate helps determine model cost and provider capacity requirements.
      `
    },

    {
      title: "7. High-Level Architecture",
      content: `
A general production architecture may look like:

Users
 |
 v
Frontend
 |
 v
API Gateway
 |
 v
Application Service
 |
 +---- Authentication
 +---- Authorization
 +---- Context Service
 +---- Model Gateway
 +---- Retrieval Service
 +---- Tool Service
 +---- Memory Service
 |
 +---- Cache
 +---- Queue
 +---- Database
 +---- Vector Store
 +---- Object Storage
 |
 v
Observability
      `
    },

    {
      title: "8. API Design",
      content: `
APIs should represent application capabilities.

Example:

POST /chat
POST /documents
GET  /conversations
POST /feedback
GET  /jobs/:id

A request should contain only the information required by the operation.

For example:

POST /chat

{
  "conversationId": "...",
  "message": "Explain transformers"
}

The backend determines how to build context and which model to use.
      `
    },

    {
      title: "9. Model Gateway",
      content: `
The model gateway isolates application logic from provider-specific APIs.

Application
     |
     v
Model Gateway
     |
 +---+---+---+
 |   |   |   |
 v   v   v   v
P1  P2  P3  Local

Responsibilities may include:

- Model selection
- Provider routing
- Retries
- Timeouts
- Fallbacks
- Cost tracking
- Token tracking
- Request normalization
      `
    },

    {
      title: "10. Context Engineering Layer",
      content: `
The context layer decides what information reaches the model.

Sources:

User Message
Conversation State
Memory
Retrieved Documents
Tool Results
Application Instructions

        |
        v
Context Builder
        |
        v
Context Ranking
        |
        v
Context Compression
        |
        v
LLM Prompt
      `
    },

    {
      title: "11. RAG Integration",
      content: `
A RAG subsystem may contain:

Document Upload
      |
      v
Parsing
      |
      v
Chunking
      |
      v
Embedding
      |
      v
Vector Store
      |
      v
Retriever
      |
      v
Reranker
      |
      v
Context Builder
      |
      v
LLM

Authorization should happen before exposing documents to the model.
      `
    },

    {
      title: "12. Tool Integration",
      content: `
Tools should be treated as controlled application capabilities.

LLM
 |
 v
Tool Proposal
 |
 v
Schema Validation
 |
 v
Authorization
 |
 v
Execution
 |
 v
Tool Result
 |
 v
LLM

The model should not directly control infrastructure.
      `
    },

    {
      title: "13. State and Memory",
      content: `
System design should distinguish:

Request State
Conversation State
Long-Term Memory
Persistent Application Data

Example:

Conversation
 |
 +---- Recent messages
 |
 +---- Summary
 |
 +---- Retrieved memory
 |
 +---- User preferences

Only relevant information should enter the model context.
      `
    },

    {
      title: "14. Agent Integration",
      content: `
If the application requires dynamic multi-step reasoning:

User Goal
   |
   v
Agent Controller
   |
   +---- Model
   +---- Tools
   +---- State
   +---- Memory
   +---- Policy
   +---- Termination Rules
   |
   v
Result

Do not introduce an agent simply because an LLM is present.

A deterministic workflow may be easier to operate.
      `
    },

    {
      title: "15. Caching Strategy",
      content: `
Potential cache targets include:

User configuration
Retrieved documents
Embeddings
Model responses
Tool results
Computed summaries

Cache design must consider:

Freshness
Permissions
Tenant
Prompt version
Model version
Context
Expiration
      `
    },

    {
      title: "16. Asynchronous Processing",
      content: `
Long-running operations should be separated from interactive requests.

Example:

POST /documents
      |
      v
Create Job
      |
      v
Queue
      |
      v
Worker
      |
      +---- Parse
      +---- Chunk
      +---- Embed
      +---- Store
      |
      v
Completed

The client can query:

GET /jobs/:id
      `
    },

    {
      title: "17. Security Architecture",
      content: `
Security should exist at multiple layers.

Client
 |
 v
Authentication
 |
 v
Authorization
 |
 v
Input Validation
 |
 v
Application
 |
 +---- Data Access Control
 |
 +---- Tool Authorization
 |
 +---- Output Validation
 |
 +---- Audit Logging

The model is not the security boundary.
      `
    },

    {
      title: "18. Multi-Tenant Architecture",
      content: `
A multi-tenant system serves multiple organizations.

Every tenant-sensitive operation should maintain tenant context.

Request
 |
 v
Tenant Identity
 |
 v
Authorization
 |
 v
Tenant-Scoped Data
 |
 +---- Database
 +---- Vector Store
 +---- Cache
 +---- Storage

Tenant isolation should be deterministic.
      `
    },

    {
      title: "19. Observability Architecture",
      content: `
Every request should ideally produce a trace.

Trace
 |
 +---- API
 +---- Retrieval
 +---- Model Call
 +---- Tool Call
 +---- Validation
 +---- Response

Metrics:

Latency
Cost
Tokens
Errors
Quality
Fallbacks
Tool Success
Retrieval Quality

Logs:

Events
Errors
Security Events
Deployment Versions
      `
    },

    {
      title: "20. Reliability Architecture",
      content: `
Production dependencies should have failure handling.

Model
 |
 +---- Timeout
 +---- Retry
 +---- Fallback
 +---- Circuit Breaker

Database
 |
 +---- Connection Timeout
 +---- Retry
 +---- Replica / Recovery

Queue
 |
 +---- Retry
 +---- Dead-Letter Queue

Reliability is a property of the complete system.
      `
    },

    {
      title: "21. Cost Architecture",
      content: `
Cost should be visible at multiple levels.

Request
 |
 v
Feature
 |
 v
User
 |
 v
Tenant
 |
 v
Application
 |
 v
Monthly Budget

Optimization options:

- Model routing
- Context reduction
- Caching
- Batching
- Retrieval optimization
- Output limits
      `
    },

    {
      title: "22. Scaling Architecture",
      content: `
Interactive APIs can scale horizontally.

API
 |
 +---- Instance 1
 +---- Instance 2
 +---- Instance 3

Background processing scales through workers.

Queue
 |
 +---- Worker 1
 +---- Worker 2
 +---- Worker N

Different workloads should scale independently.
      `
    },

    {
      title: "23. Data Architecture",
      content: `
Different data types can use different storage systems.

Relational Database:
Users, transactions, metadata

Vector Store:
Embeddings and retrieval indexes

Object Storage:
Documents, images, audio, video

Cache:
Short-lived frequently accessed information

Queue:
Pending asynchronous work

Selecting storage according to workload is part of system design.
      `
    },

    {
      title: "24. Trade-Off Analysis",
      content: `
Every architecture has trade-offs.

Example:

More caching
+
Lower latency
-
More invalidation complexity

More models
+
Better routing and resilience
-
More operational complexity

More agents
+
More dynamic capability
-
Higher cost and unpredictability

More services
+
Independent scaling
-
More distributed-system complexity

Good system design explicitly discusses these trade-offs.
      `
    },

    {
      title: "25. Architecture Review Checklist",
      content: `
Before approving an architecture, ask:

Requirements:
Are functional requirements covered?

Performance:
Is latency understood?

Capacity:
Can expected traffic be handled?

Cost:
Is model and infrastructure cost estimated?

Security:
Are authentication and authorization enforced?

Reliability:
Are failures handled?

Scalability:
Can major components scale?

Data:
Is information stored appropriately?

Observability:
Can engineers debug failures?

Evaluation:
Can quality regressions be detected?

Deployment:
Can the system be safely released and rolled back?
      `
    },

    {
      title: "26. End-to-End Design Method",
      content: `
A useful interview and engineering method is:

1. Clarify requirements
2. Estimate scale
3. Define APIs
4. Draw high-level architecture
5. Design data layer
6. Design model layer
7. Add RAG if required
8. Add tools if required
9. Add state and memory
10. Add security
11. Add reliability
12. Add observability
13. Add scaling
14. Estimate cost
15. Discuss trade-offs
16. Identify failure modes
      `
    }
  ],

  architecture: {
    title: "Complete Production LLM Application",
    diagram: `
                              USERS
                                |
                                v
                       CDN / API Gateway
                                |
                                v
                       Authentication
                                |
                                v
                       Authorization
                                |
                                v
                       Application API
                                |
          +---------------------+---------------------+
          |                     |                     |
          v                     v                     v
    Context Service       Model Gateway         Tool Service
          |                     |                     |
    +-----+-----+        +------+------+          APIs
    |     |     |        |      |      |
    v     v     v        v      v      v
 History Memory RAG    Model A Model B Local
          |              |
          v              v
     Vector Store     Routing/Fallback
          |
          v
    Document Store

          Application State
                 |
        +--------+--------+
        |        |        |
        v        v        v
     Database Cache      Queue
                          |
                    +-----+-----+
                    |     |     |
                    v     v     v
                  Worker Worker Worker

                    ALL COMPONENTS
                           |
                           v
              Logs + Metrics + Traces
                           |
                           v
                    Observability
                           |
                           v
                    Evaluation Loop
                           |
                           v
                  Continuous Improvement
    `
  },

  codeExample: {
    title: "Simplified LLM Application Service",
    language: "typescript",
    code: `
type ChatRequest = {
  userId: string;
  conversationId: string;
  message: string;
};

type ChatResponse = {
  answer: string;
  traceId: string;
};

class LLMApplicationService {
  async chat(
    request: ChatRequest
  ): Promise<ChatResponse> {
    const traceId = crypto.randomUUID();

    const user = await this.authenticate(
      request.userId
    );

    await this.authorize(user);

    const history =
      await this.loadConversation(
        request.conversationId
      );

    const context =
      await this.buildContext(
        request.message,
        history
      );

    const modelResponse =
      await this.generate(context);

    const validated =
      this.validateOutput(modelResponse);

    await this.saveConversation(
      request.conversationId,
      request.message,
      validated
    );

    return {
      answer: validated,
      traceId
    };
  }

  async authenticate(userId: string) {
    return { id: userId };
  }

  async authorize(user: unknown) {
    return true;
  }

  async loadConversation(
    conversationId: string
  ) {
    return {
      conversationId,
      messages: []
    };
  }

  async buildContext(
    message: string,
    history: unknown
  ) {
    return {
      message,
      history
    };
  }

  async generate(context: unknown) {
    return "Generated response";
  }

  validateOutput(output: string) {
    if (!output) {
      throw new Error("Invalid model output");
    }

    return output;
  }

  async saveConversation(
    conversationId: string,
    message: string,
    response: string
  ) {
    return {
      conversationId,
      message,
      response
    };
  }
}
`
  },

  formulas: [
    {
      name: "Peak Requests Per Second",
      formula: "RPS_peak ≈ RPS_average × PeakFactor",
      explanation: "Peak traffic is often significantly higher than average traffic."
    },
    {
      name: "Daily Token Volume",
      formula: "Tokens_day = Requests_day × Tokens_request",
      explanation: "Estimates daily token consumption."
    },
    {
      name: "Model Cost",
      formula: "Cost = InputTokens × InputPrice + OutputTokens × OutputPrice",
      explanation: "Estimates model usage cost."
    },
    {
      name: "Concurrency",
      formula: "Concurrency ≈ Throughput × AverageLatency",
      explanation: "Provides a simplified estimate of concurrent active requests."
    },
    {
      name: "Availability",
      formula: "Availability = SuccessfulRequests / TotalRequests",
      explanation: "Measures application-level request success."
    },
    {
      name: "Cache Hit Rate",
      formula: "HitRate = CacheHits / CacheRequests",
      explanation: "Measures the effectiveness of caching."
    },
    {
      name: "Error Budget",
      formula: "ErrorBudget = 1 - TargetAvailability",
      explanation: "Represents the allowable fraction of unavailable service under a defined availability target."
    }
  ],

  comparisons: [
    {
      topic: "Workflow vs Agent",
      workflow: "Predictable controlled execution",
      agent: "Dynamic decision-making"
    },
    {
      topic: "Synchronous vs Asynchronous",
      synchronous: "Immediate request-response interaction",
      asynchronous: "Background processing through queues and workers"
    },
    {
      topic: "Single Model vs Model Gateway",
      singleModel: "Simple but tightly coupled",
      gateway: "Supports routing, fallback and provider abstraction"
    },
    {
      topic: "Monolith vs Distributed Services",
      monolith: "Simpler operational model",
      distributed: "Independent scaling and service boundaries with greater complexity"
    },
    {
      topic: "Short-Term State vs Long-Term Memory",
      shortTerm: "Current request or conversation context",
      longTerm: "Persisted information retrieved when relevant"
    },
    {
      topic: "Deterministic Workflow vs Agent",
      deterministic: "Easier to test and control",
      agent: "More flexible for dynamic tasks"
    }
  ],

  exercises: [
    "Design a complete AI learning assistant from requirements to infrastructure.",
    "Estimate capacity for an application with 100,000 daily users.",
    "Design the model gateway.",
    "Design the RAG subsystem.",
    "Design secure tool execution.",
    "Design multi-tenant data isolation.",
    "Design observability and evaluation.",
    "Identify five failure modes and their recovery strategies."
  ],

  codingTasks: [
    "Implement a model gateway interface.",
    "Implement a context-building service.",
    "Implement a structured application service.",
    "Implement a simple request-trace model.",
    "Implement a cost-estimation utility."
  ],

  architectureTasks: [
    "Design a production AI learning assistant.",
    "Design a multi-tenant enterprise RAG platform.",
    "Design an AI customer-support system with tools.",
    "Design a scalable multimodal LLM application.",
    "Design a multi-provider AI platform."
  ],

  systemDesignCaseStudy: {
    title: "Production AI Learning Assistant",
    requirements: [
      "Users can ask technical questions.",
      "Users can upload learning materials.",
      "The system retrieves relevant documents.",
      "Answers should be grounded in available learning material.",
      "Users can maintain conversations.",
      "The system supports feedback.",
      "The system records evaluation signals.",
      "The application should support horizontal scaling.",
      "Sensitive user data must be protected.",
      "Model providers should be replaceable."
    ],
    architectureSteps: [
      "Frontend sends an authenticated request.",
      "API validates identity and permissions.",
      "Application loads conversation state.",
      "Context service retrieves relevant information.",
      "Model gateway selects an appropriate model.",
      "LLM generates a structured response.",
      "Output validation checks the response.",
      "Conversation state is persisted.",
      "Trace and metrics are recorded.",
      "Feedback enters the evaluation pipeline."
    ]
  },

  interviewQuestions: [
    "How would you design a production LLM application from scratch?",
    "What requirements should be clarified before architecture design?",
    "How would you estimate LLM capacity?",
    "Why use a model gateway?",
    "How would you integrate RAG?",
    "How would you secure tool calling?",
    "How would you handle long-running jobs?",
    "How would you scale the application?",
    "How would you isolate multiple tenants?",
    "How would you monitor quality?",
    "How would you reduce cost?",
    "How would you design provider failure recovery?",
    "When would you choose a workflow over an agent?",
    "How would you design the data layer?",
    "What trade-offs would you discuss in an LLM system design interview?"
  ],

  commonMistakes: [
    "Starting with technology instead of requirements",
    "Using an agent for every problem",
    "Treating the model as a security boundary",
    "Ignoring token economics",
    "Ignoring peak traffic",
    "Putting all data into the model context",
    "Using synchronous processing for long jobs",
    "Having no fallback strategy",
    "Having no observability",
    "Ignoring evaluation",
    "Creating unnecessary microservices",
    "Ignoring multi-tenant isolation",
    "Designing for availability without considering cost"
  ],

  summary: [
    "LLM system design combines application engineering, AI infrastructure and distributed systems.",
    "Requirements should drive architecture.",
    "Capacity estimation helps determine model, infrastructure and storage needs.",
    "Model gateways provide abstraction and routing.",
    "Context engineering controls what information reaches the model.",
    "RAG and tools should be isolated behind controlled services.",
    "Security must be enforced outside the model.",
    "Caching, queues and horizontal scaling support production workloads.",
    "Observability and evaluation are required for reliable operation.",
    "Every major architectural decision involves trade-offs."
  ],

  keyTakeaways: [
    "Start system design with requirements.",
    "Separate functional and non-functional requirements.",
    "Estimate traffic, tokens, latency and cost.",
    "Design clear service boundaries.",
    "Use a model gateway for provider abstraction.",
    "Treat context as an engineered resource.",
    "Secure every data and tool boundary.",
    "Separate interactive and background workloads.",
    "Design observability from the beginning.",
    "Always discuss failure modes and trade-offs.",
    "Choose the simplest architecture that satisfies the requirements."
  ]
};

export default lesson15;
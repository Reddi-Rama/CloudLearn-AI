const practice = {
  id: "practice",
  moduleId: "module9",
  type: "practice",
  title: "LLM Application Engineering — Complete Practice & Mastery",
  subtitle: "Theory, architecture, mathematics, coding, debugging, system design and interview preparation",
  difficulty: "Advanced",

  overview: `
This practice section consolidates the complete Module 9 curriculum.

The objective is not simple memorization.

The learner should be able to:

Understand an LLM application
        |
Design the architecture
        |
Implement components
        |
Secure the system
        |
Evaluate quality
        |
Observe production behavior
        |
Optimize performance
        |
Scale the system
        |
Operate it reliably
        |
Continuously improve it

The practice material therefore combines conceptual questions, mathematical
problems, coding tasks, debugging exercises, architecture challenges,
system-design scenarios and interview questions.
`,

  objectives: [
    "Review all 16 lessons",
    "Strengthen LLM application architecture knowledge",
    "Practice context and memory engineering",
    "Practice prompt engineering",
    "Practice structured outputs and tools",
    "Practice agent architecture",
    "Practice LLM security",
    "Practice evaluation",
    "Practice observability",
    "Practice cost and latency optimization",
    "Practice model routing and reliability",
    "Practice deployment and scaling",
    "Practice complete system design"
  ],

  conceptMap: {
    title: "Module 9 Concept Map",
    branches: [
      {
        topic: "Foundations",
        concepts: [
          "LLM applications",
          "Application layers",
          "Request lifecycle",
          "Probabilistic vs deterministic components"
        ]
      },
      {
        topic: "Context",
        concepts: [
          "Context windows",
          "Conversation state",
          "Memory",
          "Context ranking",
          "Compression"
        ]
      },
      {
        topic: "Prompt Engineering",
        concepts: [
          "Prompt templates",
          "Instructions",
          "Few-shot prompting",
          "Output contracts",
          "Prompt versioning"
        ]
      },
      {
        topic: "Tools & Agents",
        concepts: [
          "Structured outputs",
          "Tool calling",
          "Validation",
          "Authorization",
          "Agent loops",
          "Orchestration"
        ]
      },
      {
        topic: "RAG",
        concepts: [
          "Document ingestion",
          "Chunking",
          "Embeddings",
          "Retrieval",
          "Reranking",
          "Grounding"
        ]
      },
      {
        topic: "Security",
        concepts: [
          "Authentication",
          "Authorization",
          "Prompt injection",
          "Data protection",
          "Guardrails"
        ]
      },
      {
        topic: "Quality",
        concepts: [
          "Testing",
          "Golden datasets",
          "Regression",
          "Evaluation",
          "Feedback"
        ]
      },
      {
        topic: "Operations",
        concepts: [
          "Observability",
          "LLMOps",
          "Cost",
          "Latency",
          "Routing",
          "Fallbacks"
        ]
      },
      {
        topic: "Infrastructure",
        concepts: [
          "Deployment",
          "Containers",
          "Queues",
          "Caching",
          "Scaling",
          "Distributed systems"
        ]
      },
      {
        topic: "System Design",
        concepts: [
          "Requirements",
          "Capacity",
          "Architecture",
          "Trade-offs",
          "Production design"
        ]
      }
    ]
  },

  lessonReview: [
    {
      lesson: 1,
      title: "LLM Application Engineering Foundations",
      questions: [
        "What makes an LLM application different from a direct model call?",
        "What are the major layers of an LLM application?",
        "Which components should remain deterministic?",
        "Why is output validation necessary?"
      ]
    },
    {
      lesson: 2,
      title: "LLM Application Architecture & Design Patterns",
      questions: [
        "What is layered architecture?",
        "Why use a model gateway?",
        "What is the repository pattern?",
        "When should services be separated?"
      ]
    },
    {
      lesson: 3,
      title: "LLM Context, State & Memory Engineering",
      questions: [
        "What is context engineering?",
        "How is state different from memory?",
        "Why compress conversation history?",
        "What is context ranking?"
      ]
    },
    {
      lesson: 4,
      title: "Prompt Engineering for Production Applications",
      questions: [
        "What makes a prompt production-ready?",
        "Why use prompt templates?",
        "What is few-shot prompting?",
        "Why version prompts?"
      ]
    },
    {
      lesson: 5,
      title: "Structured Outputs, Tool Calling & Function Execution",
      questions: [
        "Why use structured outputs?",
        "What is tool calling?",
        "Why must tool arguments be validated?",
        "Why is tool selection not authorization?"
      ]
    },
    {
      lesson: 6,
      title: "LLM Agents, Workflows & Orchestration",
      questions: [
        "What is an agent?",
        "How is a workflow different from an agent?",
        "Why are termination conditions required?",
        "When should human approval be introduced?"
      ]
    },
    {
      lesson: 7,
      title: "LLM Application Security & Guardrails",
      questions: [
        "What is prompt injection?",
        "What is indirect prompt injection?",
        "Why is the model not a security boundary?",
        "How should RAG permissions be enforced?"
      ]
    },
    {
      lesson: 8,
      title: "Testing, Evaluation & Quality Engineering",
      questions: [
        "What is a golden dataset?",
        "Why is LLM testing different from traditional testing?",
        "What is regression testing?",
        "How should RAG be evaluated?"
      ]
    },
    {
      lesson: 9,
      title: "Observability, Tracing & LLMOps",
      questions: [
        "What are logs, metrics and traces?",
        "What is a trace span?",
        "Why monitor token usage?",
        "What is LLMOps?"
      ]
    },
    {
      lesson: 10,
      title: "Cost, Latency & Performance Optimization",
      questions: [
        "What are the major sources of LLM cost?",
        "How can context optimization reduce cost?",
        "Why does parallelism reduce latency?",
        "What is cache hit rate?"
      ]
    },
    {
      lesson: 11,
      title: "Multi-Model Routing, Fallbacks & Reliability",
      questions: [
        "What is model routing?",
        "What is exponential backoff?",
        "What is a circuit breaker?",
        "Why is idempotency important?"
      ]
    },
    {
      lesson: 12,
      title: "Data, Feedback & Continuous Improvement",
      questions: [
        "What is explicit feedback?",
        "What is implicit feedback?",
        "How can production failures become test cases?",
        "What is evaluation leakage?"
      ]
    },
    {
      lesson: 13,
      title: "Deployment & Infrastructure for LLM Applications",
      questions: [
        "What is the difference between development, staging and production?",
        "What are liveness and readiness checks?",
        "What is blue-green deployment?",
        "What are RTO and RPO?"
      ]
    },
    {
      lesson: 14,
      title: "Scaling, Queues, Caching & Distributed AI Systems",
      questions: [
        "What is horizontal scaling?",
        "Why use queues?",
        "What is backpressure?",
        "Why are distributed systems difficult to operate?"
      ]
    },
    {
      lesson: 15,
      title: "Advanced LLM Application System Design",
      questions: [
        "How do you begin an LLM system-design problem?",
        "How do you estimate capacity?",
        "What trade-offs should be discussed?",
        "How do you design security and observability?"
      ]
    },
    {
      lesson: 16,
      title: "End-to-End LLM Application Engineering Capstone",
      questions: [
        "How do all components combine into one production system?",
        "What are the major capstone requirements?",
        "How should the system be evaluated?",
        "How should the final system be operated?"
      ]
    }
  ],

  mathematicalPractice: [
    {
      topic: "Token Cost",
      problem: `
A request contains 4,000 input tokens and generates 800 output tokens.

Input price:
$2 per million tokens

Output price:
$8 per million tokens

Calculate the approximate cost of one request.
      `,
      solution: `
Input cost:
4000 / 1,000,000 × 2 = $0.008

Output cost:
800 / 1,000,000 × 8 = $0.0064

Total:
$0.0144
      `
    },

    {
      topic: "Latency",
      problem: `
Three independent operations take:

Retrieval = 200 ms
Profile = 100 ms
Preferences = 150 ms

What is the approximate execution time if they run sequentially?
What is the ideal execution time if they run in parallel?
      `,
      solution: `
Sequential:

200 + 100 + 150 = 450 ms

Parallel:

max(200, 100, 150) = 200 ms

Ideal latency reduction:

450 - 200 = 250 ms
      `
    },

    {
      topic: "Cache Hit Rate",
      problem: `
A cache receives 2,000 requests.

1,500 are served from cache.

Calculate the hit rate.
      `,
      solution: `
HitRate =
1500 / 2000

= 0.75

= 75%
      `
    },

    {
      topic: "Queue Growth",
      problem: `
A queue receives 120 jobs per second.

Workers process 100 jobs per second.

What is the approximate backlog growth rate?
      `,
      solution: `
Queue growth:

120 - 100 = 20 jobs/second

The queue grows by approximately 20 jobs per second while these rates remain
constant.
      `
    },

    {
      topic: "Concurrency",
      problem: `
An application processes 20 requests per second.

Average latency is 0.5 seconds.

Estimate average concurrency.
      `,
      solution: `
Concurrency ≈ Throughput × Latency

20 × 0.5 = 10

Approximately 10 concurrent requests.
      `
    },

    {
      topic: "Availability",
      problem: `
An application successfully completes 99,500 requests out of 100,000.

Calculate availability.
      `,
      solution: `
Availability =
99,500 / 100,000

= 0.995

= 99.5%
      `
    },

    {
      topic: "Precision and Recall",
      problem: `
A retriever returns 20 documents.

15 are relevant.

There are 30 relevant documents in the complete collection.

Calculate precision and recall.
      `,
      solution: `
Precision:

15 / 20 = 0.75 = 75%

Recall:

15 / 30 = 0.50 = 50%
      `
    },

    {
      topic: "Evaluation Improvement",
      problem: `
Version A scores 0.80.

Version B scores 0.88.

Calculate absolute and relative improvement.
      `,
      solution: `
Absolute:

0.88 - 0.80 = 0.08

Relative:

0.08 / 0.80 = 0.10

= 10%
      `
    }
  ],

  architecturePractice: [
    {
      title: "Design a Production AI Tutor",
      requirements: [
        "Chat",
        "RAG",
        "Conversation memory",
        "Feedback",
        "Evaluation",
        "Observability",
        "Security"
      ],
      expectedComponents: [
        "Frontend",
        "API",
        "Authentication",
        "Context service",
        "Model gateway",
        "Vector store",
        "Database",
        "Cache",
        "Evaluation service"
      ]
    },

    {
      title: "Design an Enterprise RAG Platform",
      requirements: [
        "Multiple organizations",
        "Private documents",
        "Access control",
        "Document ingestion",
        "Search",
        "Grounded answers"
      ],
      expectedComponents: [
        "Tenant identity",
        "Authorization",
        "Document store",
        "Vector store",
        "Metadata filtering",
        "RAG service",
        "Audit logs"
      ]
    },

    {
      title: "Design an AI Customer Support Agent",
      requirements: [
        "Customer lookup",
        "Order lookup",
        "Ticket creation",
        "Human escalation"
      ],
      expectedComponents: [
        "Agent controller",
        "Tool registry",
        "Authorization",
        "Human approval",
        "State",
        "Observability"
      ]
    },

    {
      title: "Design a Large-Scale Document Processor",
      requirements: [
        "Large document uploads",
        "Asynchronous processing",
        "Embeddings",
        "Vector indexing"
      ],
      expectedComponents: [
        "Object storage",
        "Queue",
        "Worker pool",
        "Parser",
        "Chunker",
        "Embedding service",
        "Vector store",
        "Job status"
      ]
    }
  ],

  codingPractice: [
    {
      title: "Build a Prompt Template",
      task: "Create a reusable prompt function that accepts task, context, user input and output format."
    },
    {
      title: "Build a Tool Registry",
      task: "Implement registration, lookup, validation and execution for application tools."
    },
    {
      title: "Build a Model Router",
      task: "Route requests to different models based on task type."
    },
    {
      title: "Build a Retry Utility",
      task: "Implement exponential backoff with a maximum number of attempts."
    },
    {
      title: "Build a Cache",
      task: "Implement a simple cache with hit/miss statistics."
    },
    {
      title: "Build a Feedback System",
      task: "Record and aggregate positive and negative user feedback."
    },
    {
      title: "Build a Trace Context",
      task: "Create a trace object that measures request duration and component spans."
    },
    {
      title: "Build an Evaluation Runner",
      task: "Execute a collection of test cases and produce pass/fail results."
    },
    {
      title: "Build a Queue Worker",
      task: "Create a simple asynchronous job queue and worker."
    },
    {
      title: "Build a Context Builder",
      task: "Combine user input, history and retrieved documents under a token budget."
    }
  ],

  debuggingPractice: [
    {
      problem: "LLM responses are too expensive.",
      investigate: [
        "Input token count",
        "Output token count",
        "Conversation history",
        "Retrieved context",
        "Model selection",
        "Caching"
      ]
    },
    {
      problem: "RAG answers are irrelevant.",
      investigate: [
        "Chunk size",
        "Embedding quality",
        "Query transformation",
        "Retrieval filters",
        "Top-k",
        "Reranking"
      ]
    },
    {
      problem: "Tool calls execute incorrect operations.",
      investigate: [
        "Tool schema",
        "Argument validation",
        "Authorization",
        "Tool descriptions",
        "Application-side validation"
      ]
    },
    {
      problem: "Application becomes slow at high traffic.",
      investigate: [
        "Concurrency",
        "Queue depth",
        "Database connections",
        "Model provider latency",
        "Cache hit rate",
        "Worker capacity"
      ]
    },
    {
      problem: "Quality decreased after deployment.",
      investigate: [
        "Prompt version",
        "Model version",
        "Retriever version",
        "Evaluation regression",
        "Context changes",
        "Tool behavior"
      ]
    }
  ],

  scenarioPractice: [
    {
      scenario: "The model provider is unavailable.",
      expectedResponse: [
        "Detect provider failure",
        "Apply timeout",
        "Retry suitable temporary failures",
        "Use fallback provider",
        "Record telemetry",
        "Gracefully degrade if required"
      ]
    },
    {
      scenario: "A retrieved document contains malicious instructions.",
      expectedResponse: [
        "Treat document as untrusted data",
        "Separate it from application instructions",
        "Do not allow it to control tools",
        "Apply output validation",
        "Record security telemetry"
      ]
    },
    {
      scenario: "A user requests another tenant's document.",
      expectedResponse: [
        "Authenticate user",
        "Determine tenant",
        "Authorize document access",
        "Reject unauthorized retrieval",
        "Audit the event"
      ]
    },
    {
      scenario: "The background queue grows continuously.",
      expectedResponse: [
        "Measure arrival rate",
        "Measure worker processing rate",
        "Increase worker capacity if appropriate",
        "Apply backpressure",
        "Prioritize critical jobs",
        "Investigate downstream bottlenecks"
      ]
    }
  ],

  comparisonPractice: [
    {
      topic: "Workflow vs Agent",
      questions: [
        "Which is easier to test?",
        "Which provides more dynamic behavior?",
        "When should a workflow be preferred?"
      ]
    },
    {
      topic: "Caching vs Recalculation",
      questions: [
        "When is caching useful?",
        "What creates stale-data risk?",
        "What metadata should be part of a cache key?"
      ]
    },
    {
      topic: "Single Provider vs Multi-Provider",
      questions: [
        "What is simpler?",
        "What provides more resilience?",
        "What additional operational complexity appears?"
      ]
    },
    {
      topic: "Synchronous vs Asynchronous",
      questions: [
        "Which is appropriate for chat?",
        "Which is appropriate for document ingestion?",
        "Why?"
      ]
    }
  ],

  interviewMastery: [
    "Design a production LLM application from scratch.",
    "Explain the complete LLM request lifecycle.",
    "Explain context engineering.",
    "Explain state versus memory.",
    "Design a production prompt.",
    "Explain structured outputs.",
    "Explain safe tool calling.",
    "Design an LLM agent.",
    "Explain prompt injection.",
    "Design RAG authorization.",
    "Design an LLM evaluation pipeline.",
    "Explain logs, metrics and traces.",
    "Design LLM cost optimization.",
    "Design model routing.",
    "Explain circuit breakers.",
    "Design graceful degradation.",
    "Explain CI/CD for LLM applications.",
    "Design a queue-based AI system.",
    "Explain horizontal scaling.",
    "Design a multi-tenant AI platform.",
    "Perform an end-to-end LLM system-design interview."
  ],

  finalChallenge: {
    title: "Complete LLM Application System Design Challenge",
    problem: `
Design an AI learning platform that serves 100,000 registered learners.

Requirements:

- Users can ask technical questions.
- Users can upload documents.
- Documents are searchable.
- Answers should use authorized documents.
- Users can maintain conversations.
- The system supports tools.
- The system collects feedback.
- Quality is continuously evaluated.
- The system supports multiple model providers.
- Background document processing is required.
- The platform must scale horizontally.
- The system must monitor cost and latency.
    `,
    expectedAnalysis: [
      "Functional requirements",
      "Non-functional requirements",
      "Capacity estimation",
      "Token estimation",
      "API design",
      "Frontend architecture",
      "Backend architecture",
      "Model gateway",
      "RAG architecture",
      "Data architecture",
      "Queue architecture",
      "Caching",
      "Security",
      "Observability",
      "Evaluation",
      "Reliability",
      "Scaling",
      "Deployment",
      "Cost optimization",
      "Trade-offs"
    ]
  },

  masteryChecklist: [
    "I can explain LLM application architecture.",
    "I can design context pipelines.",
    "I can create production prompt templates.",
    "I can design structured outputs.",
    "I can safely integrate tools.",
    "I understand agent architecture.",
    "I can identify prompt injection risks.",
    "I can design RAG systems.",
    "I can build evaluation datasets.",
    "I understand regression testing.",
    "I can design observability.",
    "I can calculate model cost.",
    "I can reason about latency.",
    "I can design model routing.",
    "I understand retries and circuit breakers.",
    "I can design deployment infrastructure.",
    "I can use queues for background workloads.",
    "I understand horizontal scaling.",
    "I can design multi-tenant systems.",
    "I can perform complete LLM system design."
  ],

  finalAssessment: {
    title: "Module 9 Final Assessment",
    format: "One comprehensive assessment",
    sections: [
      {
        section: "A",
        title: "Conceptual Understanding",
        focus: [
          "Architecture",
          "Context",
          "Prompting",
          "Tools",
          "Agents",
          "RAG"
        ]
      },
      {
        section: "B",
        title: "Security & Reliability",
        focus: [
          "Prompt injection",
          "Authorization",
          "Guardrails",
          "Fallbacks",
          "Circuit breakers"
        ]
      },
      {
        section: "C",
        title: "Evaluation & Operations",
        focus: [
          "Testing",
          "Evaluation",
          "Observability",
          "LLMOps"
        ]
      },
      {
        section: "D",
        title: "Mathematical Reasoning",
        focus: [
          "Token cost",
          "Latency",
          "Cache hit rate",
          "Throughput",
          "Precision",
          "Recall",
          "Availability"
        ]
      },
      {
        section: "E",
        title: "Coding",
        focus: [
          "Prompt templates",
          "Tool registry",
          "Model routing",
          "Caching",
          "Evaluation"
        ]
      },
      {
        section: "F",
        title: "System Design",
        focus: [
          "Complete production LLM architecture"
        ]
      }
    ]
  },

  moduleCompletionCriteria: [
    "All 16 lessons completed",
    "Practice section completed",
    "Final assessment completed",
    "Capstone project submitted",
    "Architecture documented",
    "Evaluation report completed",
    "Production-readiness checklist completed"
  ],

  summary: [
    "Module 9 combines LLM concepts with serious software engineering.",
    "Production AI requires architecture, security, evaluation and operations.",
    "The model is one component of a larger system.",
    "Context, RAG, tools and memory must be deliberately engineered.",
    "Reliability requires explicit failure handling.",
    "Observability makes system behavior measurable.",
    "Scaling requires distributed-system concepts.",
    "Continuous improvement connects production evidence to engineering."
  ],

  keyTakeaways: [
    "Think of LLM applications as software systems, not prompts.",
    "Engineer the complete request lifecycle.",
    "Keep deterministic security and business logic outside the model.",
    "Measure quality, cost, latency and reliability.",
    "Design for failure and scale.",
    "Use evaluation to protect quality.",
    "Use observability to understand production behavior.",
    "Use feedback to continuously improve the system.",
    "The final goal is a maintainable production AI system."
  ]
};

export default practice;
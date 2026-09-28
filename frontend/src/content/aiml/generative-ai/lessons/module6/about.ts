const about = {
  id: "about",
  moduleId: "module6",

  title: "About Module 6",

  subtitle:
    "LLM APIs & Application Development",

  description:
    "This module transforms the theoretical understanding of Generative AI and Large Language Models into practical application-development skills. You will learn how applications communicate with LLM providers, construct prompts, manage conversations, stream responses, use structured outputs, integrate tools, secure model-powered systems, evaluate behavior, monitor production systems, and design reliable LLM applications.",

  overview: `
Module 6 focuses on the engineering layer between a language model and
a real software application.

A model by itself is not an application.

A useful LLM application combines:

USER INTERFACE
      ↓
APPLICATION API
      ↓
PROMPT + CONTEXT
      ↓
LLM
      ↓
VALIDATION
      ↓
TOOLS / DATA
      ↓
FINAL APPLICATION RESPONSE

This module explains every major engineering layer in that pipeline.

You will progress from a basic model API call to a complete
production-oriented LLM application architecture.
`,

  whyThisModuleMatters: [
    "Understanding an LLM is different from building an application around an LLM.",
    "Real applications require authentication, validation, prompt management, state, tools, security, testing, observability, and deployment.",
    "LLM APIs provide model capabilities, but application engineers are responsible for integrating those capabilities safely and reliably.",
    "The concepts in this module form the foundation for later RAG, multimodal, agentic, and advanced LLM application engineering."
  ],

  prerequisites: [
    "Generative AI fundamentals",
    "Basic understanding of Large Language Models",
    "Basic programming knowledge",
    "Basic HTTP/API concepts",
    "Basic Python or TypeScript knowledge",
    "Basic software architecture concepts"
  ],

  learningOutcomes: [
    "Understand how LLM APIs work.",
    "Work with model providers and SDKs.",
    "Build secure API request pipelines.",
    "Construct reusable prompt templates.",
    "Manage conversation context.",
    "Implement streaming responses.",
    "Use asynchronous LLM calls.",
    "Generate structured outputs.",
    "Integrate external tools.",
    "Select models based on application requirements.",
    "Optimize cost and latency.",
    "Secure LLM-powered applications.",
    "Test and evaluate LLM behavior.",
    "Monitor production applications.",
    "Design scalable LLM architectures.",
    "Deploy reliable LLM applications."
  ],

  lessonMap: [
    {
      number: 1,
      id: "lesson1",
      title: "LLM APIs & Model Providers",
      focus:
        "Understanding APIs, providers, hosted models, SDKs, requests, responses, and the LLM application stack."
    },
    {
      number: 2,
      id: "lesson2",
      title: "API Authentication, Requests & Responses",
      focus:
        "Authentication, request construction, validation, errors, retries, rate limits, and secure logging."
    },
    {
      number: 3,
      id: "lesson3",
      title: "Building Your First LLM Application",
      focus:
        "Moving from an API call to a complete application service."
    },
    {
      number: 4,
      id: "lesson4",
      title: "Prompt Templates, System Instructions & Conversation Management",
      focus:
        "Reusable prompts, instructions, history, context windows, summarization, and prompt versioning."
    },
    {
      number: 5,
      id: "lesson5",
      title: "Streaming, Async LLM Calls & Real-Time Applications",
      focus:
        "Streaming, TTFT, asynchronous execution, concurrency, cancellation, and responsive interfaces."
    },
    {
      number: 6,
      id: "lesson6",
      title: "Structured Outputs, Tool Calling & Function Integration",
      focus:
        "Schemas, validation, tools, function calling, authorization, and orchestration."
    },
    {
      number: 7,
      id: "lesson7",
      title: "Model Selection, Parameters & Cost Optimization",
      focus:
        "Model capability, latency, throughput, context, token economics, routing, and caching."
    },
    {
      number: 8,
      id: "lesson8",
      title: "LLM Application Security, Safety & Guardrails",
      focus:
        "Prompt injection, trust boundaries, authorization, sensitive data, guardrails, and defense in depth."
    },
    {
      number: 9,
      id: "lesson9",
      title: "Testing, Evaluation & Observability for LLM Applications",
      focus:
        "Golden datasets, evaluation, regression testing, tracing, metrics, and failure analysis."
    },
    {
      number: 10,
      id: "lesson10",
      title: "LLM Application Architecture & Design Patterns",
      focus:
        "Layered architecture, services, orchestration, provider abstraction, adapters, and maintainability."
    },
    {
      number: 11,
      id: "lesson11",
      title: "Deployment, Scaling & Production Reliability",
      focus:
        "Deployment, horizontal scaling, timeouts, retries, queues, health checks, and reliability."
    },
    {
      number: 12,
      id: "lesson12",
      title: "End-to-End LLM Application Capstone",
      focus:
        "Combining the complete module into a production-oriented LLM application."
    }
  ],

  conceptMap: `
LLM API
   │
   ├── Authentication
   │
   ├── Request / Response
   │
   ├── Prompt
   │      ├── System Instructions
   │      ├── User Input
   │      ├── History
   │      └── Context
   │
   ├── Generation
   │      ├── Streaming
   │      ├── Async
   │      └── Parameters
   │
   ├── Structured Output
   │      └── Validation
   │
   ├── Tools
   │      ├── Selection
   │      ├── Authorization
   │      └── Execution
   │
   ├── Security
   │      ├── Authentication
   │      ├── Authorization
   │      ├── Guardrails
   │      └── Validation
   │
   ├── Evaluation
   │      ├── Golden Dataset
   │      ├── Regression
   │      └── Quality Metrics
   │
   └── Production
          ├── Architecture
          ├── Deployment
          ├── Scaling
          ├── Observability
          └── Reliability
  `,

  mathematics: [
    "Token-based cost estimation",
    "Latency decomposition",
    "TTFT",
    "Throughput",
    "Exponential backoff",
    "P50 / P95 / P99",
    "Cache hit rate",
    "Cost-per-request estimation"
  ],

  programmingSkills: [
    "HTTP API integration",
    "Async programming",
    "Streaming",
    "Request validation",
    "Structured response validation",
    "Tool dispatching",
    "Error handling",
    "Retry mechanisms",
    "Caching",
    "Logging",
    "Testing",
    "Service-layer architecture"
  ],

  architectureSkills: [
    "Layered application architecture",
    "Provider abstraction",
    "Prompt service design",
    "Tool service design",
    "Conversation persistence",
    "Observability architecture",
    "Scalable API architecture",
    "Production deployment architecture"
  ],

  assessmentFocus: [
    "Explain the LLM API lifecycle.",
    "Design a secure LLM request pipeline.",
    "Construct reusable prompts.",
    "Explain streaming and asynchronous execution.",
    "Design structured-output validation.",
    "Design safe tool calling.",
    "Analyze model cost and latency.",
    "Identify LLM application security risks.",
    "Design evaluation and observability systems.",
    "Design a scalable production architecture."
  ],

  completionCriteria: [
    "Complete all 12 lessons.",
    "Understand the complete LLM API lifecycle.",
    "Build reusable prompt and context components.",
    "Understand streaming and asynchronous LLM calls.",
    "Implement structured outputs and tool integration.",
    "Understand security and guardrails.",
    "Understand testing and observability.",
    "Understand deployment and scaling.",
    "Complete the module practice.",
    "Complete the capstone project."
  ]
};

export default about;
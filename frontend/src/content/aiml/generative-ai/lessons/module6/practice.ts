const practice = {
  id: "practice",
  moduleId: "module6",

  title: "Module 6 Practice",

  subtitle:
    "LLM APIs & Application Development",

  description:
    "A comprehensive practice environment covering API fundamentals, prompt engineering, streaming, structured outputs, tools, security, evaluation, architecture, deployment, and production reliability.",

  instructions: [
    "Attempt conceptual questions before checking references.",
    "Write code for programming exercises.",
    "Draw architecture diagrams for architecture exercises.",
    "Calculate cost and latency examples manually.",
    "Explain security decisions rather than memorizing terminology.",
    "Treat every model output as potentially requiring validation.",
    "Use the capstone challenge as the final integration exercise."
  ],

  sections: [
    {
      id: "01",
      title: "Foundations & API Concepts",

      questions: [
        "What is an LLM API?",
        "What responsibilities belong to a model provider?",
        "What is the difference between a hosted model and a self-hosted model?",
        "What is an SDK?",
        "What is the purpose of an API key?",
        "Why should API credentials remain on the backend?",
        "What is the difference between a request and a response?",
        "What are common categories of API errors?"
      ]
    },

    {
      id: "02",
      title: "Authentication & Request Engineering",

      questions: [
        "Why should secrets be stored in environment configuration?",
        "What is request validation?",
        "Why are timeouts necessary?",
        "When should an application retry a request?",
        "What is exponential backoff?",
        "Why should retries be bounded?",
        "What information should be included in safe request logs?",
        "Why are request IDs useful?"
      ]
    },

    {
      id: "03",
      title: "Prompt & Context Engineering",

      questions: [
        "What is a system instruction?",
        "Why use prompt templates?",
        "What is dynamic prompt content?",
        "How does conversation history consume context?",
        "When should old messages be truncated?",
        "When is summarization useful?",
        "Why should retrieved content be separated from instructions?",
        "Why should prompts be versioned?"
      ]
    },

    {
      id: "04",
      title: "Streaming & Async Applications",

      questions: [
        "What is streaming generation?",
        "What is TTFT?",
        "How does total latency differ from TTFT?",
        "Why are LLM API calls often suitable for asynchronous programming?",
        "When can requests be executed concurrently?",
        "What is cancellation?",
        "What happens if a stream fails after partial output?",
        "Why is streaming not automatically a cost optimization?"
      ]
    },

    {
      id: "05",
      title: "Structured Outputs",

      questions: [
        "Why is free-form text difficult for software to consume?",
        "What is a schema?",
        "Why validate structured model output?",
        "What should happen after schema validation fails?",
        "What is the difference between parsing and validation?",
        "Why should business rules be validated separately from syntax?"
      ]
    },

    {
      id: "06",
      title: "Tool Calling",

      questions: [
        "What is tool calling?",
        "Who actually executes a tool?",
        "Why must tool arguments be validated?",
        "What is tool authorization?",
        "What is a tool dispatcher?",
        "Why are destructive tools higher risk?",
        "What is idempotency?",
        "Why should tool results also be validated?"
      ]
    },

    {
      id: "07",
      title: "Model Selection & Cost",

      questions: [
        "Which factors should influence model selection?",
        "Why is the largest model not automatically the correct choice?",
        "What are input tokens?",
        "What are output tokens?",
        "How is API cost estimated?",
        "What is model routing?",
        "What is caching?",
        "What is batching?",
        "Why can excessive context increase cost?"
      ]
    },

    {
      id: "08",
      title: "Security & Guardrails",

      questions: [
        "What is prompt injection?",
        "What is indirect prompt injection?",
        "Why should retrieved documents be treated as untrusted data?",
        "What is authentication?",
        "What is authorization?",
        "Why should model outputs be validated?",
        "What are guardrails?",
        "What is defense in depth?",
        "Why is rate limiting important?"
      ]
    },

    {
      id: "09",
      title: "Testing & Evaluation",

      questions: [
        "Why are exact-output tests insufficient for many LLM tasks?",
        "What is a golden dataset?",
        "What is regression testing?",
        "What is LLM-as-a-judge?",
        "What is reference-based evaluation?",
        "What is reference-free evaluation?",
        "Why should production failures become regression cases?",
        "What is a failure taxonomy?"
      ]
    },

    {
      id: "10",
      title: "Architecture",

      questions: [
        "What is layered architecture?",
        "What belongs in an API layer?",
        "What is an application service?",
        "What is orchestration?",
        "Why abstract model providers?",
        "What is an adapter?",
        "What is dependency injection?",
        "What is a repository?",
        "Why are stateless servers easier to scale?"
      ]
    },

    {
      id: "11",
      title: "Deployment & Reliability",

      questions: [
        "What is horizontal scaling?",
        "Why use a load balancer?",
        "What is a health check?",
        "What is a readiness check?",
        "What is a circuit breaker?",
        "Why use queues?",
        "What is graceful degradation?",
        "Why should production systems have rollback strategies?"
      ]
    }
  ],

  mathematicalPractice: [
    {
      topic: "Cost estimation",
      problem:
        "A request uses 7,500 input tokens and 1,800 output tokens. Express the total cost using input price P_in and output price P_out.",
      formula:
        "Cost = 7500 × P_in + 1800 × P_out"
    },

    {
      topic: "Latency",
      problem:
        "A request has 700 ms TTFT and 3.8 seconds of generation time. Calculate total generation latency.",
      formula:
        "Total latency = TTFT + generation time"
    },

    {
      topic: "Exponential backoff",
      problem:
        "Using base delay 1 second, calculate delays for attempts 0, 1, 2, and 3.",
      formula:
        "delay = base × 2^attempt"
    },

    {
      topic: "Throughput",
      problem:
        "An application completes 900 requests in 5 minutes. Calculate average requests per second.",
      formula:
        "throughput = completed requests / total seconds"
    },

    {
      topic: "Cache hit rate",
      problem:
        "A cache serves 7,800 requests out of 10,000 total requests. Calculate cache hit rate.",
      formula:
        "hit rate = cache hits / total requests"
    }
  ],

  comparisonPractice: [
    {
      compare: [
        "Synchronous vs asynchronous execution",
        "Streaming vs non-streaming generation",
        "Free text vs structured output",
        "Authentication vs authorization",
        "Model routing vs single-model architecture",
        "Caching vs batching",
        "Prompt injection vs traditional input validation",
        "Unit testing vs LLM evaluation",
        "Vertical vs horizontal scaling",
        "Retry vs circuit breaker"
      ]
    }
  ],

  diagramPractice: [
    "Draw an LLM API request lifecycle.",
    "Draw a secure LLM application architecture.",
    "Draw a streaming response pipeline.",
    "Draw a structured-output validation pipeline.",
    "Draw a tool-calling lifecycle.",
    "Draw a model-routing architecture.",
    "Draw an observability trace.",
    "Draw a horizontally scalable LLM application.",
    "Draw the complete Module 6 capstone architecture."
  ],

  codingPractice: [
    "Build an LLM API wrapper.",
    "Implement environment-based configuration.",
    "Implement request timeout handling.",
    "Implement exponential backoff.",
    "Build a prompt-template service.",
    "Implement conversation history management.",
    "Implement a streaming consumer.",
    "Create a structured-output validator.",
    "Build a tool dispatcher.",
    "Implement tool authorization.",
    "Build a cost estimator.",
    "Implement a simple cache.",
    "Create a model router.",
    "Build a request tracer.",
    "Create a golden-dataset evaluator.",
    "Implement a health check.",
    "Implement a circuit breaker."
  ],

  architecturePractice: [
    {
      title: "AI Chat Assistant",
      task:
        "Design a production architecture for a conversational AI assistant."
    },
    {
      title: "Tool-Enabled Assistant",
      task:
        "Design an assistant that can search documents and execute a calculator tool."
    },
    {
      title: "Enterprise Assistant",
      task:
        "Design an assistant with user authentication and authorization-aware document access."
    },
    {
      title: "Scalable API",
      task:
        "Design an architecture capable of distributing requests across multiple API instances."
    },
    {
      title: "Production Observability",
      task:
        "Design logs, metrics, traces, request IDs, token tracking, and evaluation monitoring."
    }
  ],

  debuggingPractice: [
    {
      problem:
        "The frontend exposes the model provider API key.",
      identify:
        "Security architecture failure.",
      expectedFix:
        "Move provider credentials to the backend."
    },
    {
      problem:
        "The application retries every failed request indefinitely.",
      identify:
        "Retry policy failure.",
      expectedFix:
        "Use bounded retries and appropriate backoff."
    },
    {
      problem:
        "The application trusts model-generated tool arguments.",
      identify:
        "Tool security failure.",
      expectedFix:
        "Validate and authorize every tool call."
    },
    {
      problem:
        "A long conversation eventually exceeds the model context limit.",
      identify:
        "Context management failure.",
      expectedFix:
        "Use truncation, summarization, or other context-management strategies."
    },
    {
      problem:
        "A prompt update improves one test but breaks several existing cases.",
      identify:
        "Regression failure.",
      expectedFix:
        "Run the complete evaluation dataset before deployment."
    }
  ],

  scenarioQuestions: [
    "Your LLM provider becomes temporarily unavailable. Design the application's response.",
    "Your application cost suddenly increases by 300%. What metrics would you inspect?",
    "Users complain that responses feel slow. Which latency metrics would you investigate?",
    "A retrieved document contains instructions attempting to change the assistant's behavior. How should the system treat that content?",
    "A tool call requests an unauthorized database operation. What should happen?",
    "A streaming response fails after several chunks. How should the frontend represent the state?",
    "Your application needs to support 10 times more traffic. What architectural changes would you consider?"
  ],

  interviewPractice: [
    "Explain the complete lifecycle of an LLM API request.",
    "Explain why an LLM application should separate model logic from application logic.",
    "Explain structured outputs and schema validation.",
    "Explain tool calling without treating the model as an unrestricted executor.",
    "Explain prompt injection and defense in depth.",
    "Explain model routing.",
    "Explain how you would evaluate an LLM application.",
    "Explain how you would monitor an LLM application in production.",
    "Explain how you would scale an LLM API.",
    "Design an LLM application from scratch."
  ],

  masteryChecklist: [
    "I understand LLM APIs.",
    "I understand provider abstractions.",
    "I can securely manage API credentials.",
    "I can construct reusable prompts.",
    "I understand conversation context management.",
    "I understand streaming.",
    "I understand asynchronous LLM calls.",
    "I can validate structured output.",
    "I understand tool calling.",
    "I understand tool authorization.",
    "I can estimate model costs.",
    "I understand model routing.",
    "I understand LLM application security.",
    "I can design guardrails.",
    "I understand LLM evaluation.",
    "I understand observability.",
    "I can design a scalable architecture.",
    "I understand deployment reliability.",
    "I can design an end-to-end LLM application."
  ],

  finalChallenge: {
    title: "Module 6 Engineering Challenge",

    task: `
Design a production-oriented AI Learning Assistant.

The system must:

1. Authenticate users.
2. Accept questions through an API.
3. Construct versioned prompts.
4. Maintain conversation state.
5. Stream LLM responses.
6. Produce structured study plans.
7. Call at least one external tool.
8. Validate tool arguments.
9. Apply authorization.
10. Track token usage and cost.
11. Handle timeouts and retries.
12. Implement observability.
13. Maintain an evaluation dataset.
14. Support regression testing.
15. Scale horizontally.
16. Provide graceful failure behavior.
`,

    requiredDeliverables: [
      "System architecture diagram",
      "API design",
      "Prompt design",
      "Data model",
      "Tool specification",
      "Security model",
      "Evaluation plan",
      "Observability plan",
      "Deployment architecture",
      "Production-readiness checklist"
    ]
  },

  summary: [
    "Module 6 connects LLM capabilities with software engineering.",
    "API integration is only the first layer of an LLM application.",
    "Prompts, context, streaming, structured outputs, and tools must be engineered carefully.",
    "Security and validation are application responsibilities.",
    "Evaluation and observability are necessary for reliable systems.",
    "Architecture and deployment determine how applications behave at scale."
  ],

  keyTakeaways: [
    "An LLM is a component, not the entire application.",
    "Treat model outputs as data that requires appropriate validation.",
    "Design explicit boundaries between users, models, tools, and data.",
    "Measure quality, latency, cost, reliability, and security together.",
    "Use the final challenge to integrate every major Module 6 concept."
  ]
};

export default practice;
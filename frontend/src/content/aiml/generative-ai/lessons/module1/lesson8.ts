const lesson8 = {
  id: "lesson8",
  moduleId: "module1",
  lessonNumber: 8,

  title: "Generative AI Ecosystem & Application Workflow",
  subtitle:
    "Understand the complete Generative AI ecosystem and learn how models, prompts, embeddings, retrieval, tools, APIs, evaluation, and deployment fit together into real applications.",

  description:
    "This lesson connects the concepts from Module 1 into one complete engineering workflow. It explains the Generative AI ecosystem, foundation models, model providers, open-source models, APIs, SDKs, model serving, prompt layers, embeddings, vector databases, retrieval, RAG, tools, agents, application logic, structured outputs, evaluation, observability, security, deployment, cost, and the complete lifecycle of building a production-ready Generative AI application.",

  estimatedTime: "140–180 min",
  difficulty: "Intermediate",

  learningObjectives: [
    "Understand the complete Generative AI ecosystem.",
    "Understand foundation models and model providers.",
    "Differentiate proprietary APIs from open-source model ecosystems.",
    "Understand model hosting and inference services.",
    "Understand APIs, SDKs, and application integration.",
    "Understand the role of prompts in AI applications.",
    "Understand embeddings and vector databases.",
    "Understand retrieval and RAG.",
    "Understand tools and function calling.",
    "Understand the difference between workflows and agents.",
    "Understand structured output.",
    "Understand evaluation and observability.",
    "Understand AI application security.",
    "Understand latency and cost considerations.",
    "Design an end-to-end Generative AI architecture.",
    "Understand the complete development lifecycle of a GenAI application."
  ],

  sections: [

    {
      heading: "1. What Is the Generative AI Ecosystem?",
      content: [
        "Generative AI is not a single technology. It is an ecosystem containing models, data, infrastructure, APIs, developer tools, retrieval systems, application frameworks, evaluation systems, and deployment infrastructure.",
        "A real-world AI application normally combines several of these components.",
        "Understanding the ecosystem helps developers decide which components should be built, purchased, hosted, or connected."
      ],

      classificationTree: [
        "Generative AI Ecosystem",
        "├── Models",
        "│   ├── Language models",
        "│   ├── Image models",
        "│   ├── Audio models",
        "│   ├── Video models",
        "│   └── Multimodal models",
        "├── Model Access",
        "│   ├── APIs",
        "│   ├── SDKs",
        "│   └── Self-hosting",
        "├── Knowledge",
        "│   ├── Embeddings",
        "│   ├── Vector databases",
        "│   └── Retrieval",
        "├── Application Logic",
        "│   ├── Prompts",
        "│   ├── Workflows",
        "│   ├── Tools",
        "│   └── Agents",
        "├── Evaluation",
        "├── Observability",
        "├── Security",
        "└── Infrastructure"
      ]
    },

    {
      heading: "2. Complete Generative AI Stack",
      process: [
        "User",
        "Application UI",
        "Application backend",
        "Prompt / workflow layer",
        "Model API or inference server",
        "Foundation model",
        "Optional retrieval layer",
        "Optional tools",
        "Evaluation and monitoring",
        "Infrastructure"
      ]
    },

    {
      heading: "3. Foundation Models",
      content: [
        "A foundation model is a broadly capable model trained on large and diverse datasets and intended to support multiple downstream applications.",
        "Developers can interact with a foundation model directly or adapt it using prompting, retrieval, fine-tuning, or other application techniques.",
        "The same underlying model can therefore support many different applications."
      ],

      table: [
        {
          concept: "Foundation model",
          meaning: "General-purpose trained model"
        },
        {
          concept: "Application",
          meaning: "Specific system built around one or more models"
        },
        {
          concept: "Prompt",
          meaning: "Instructions and context provided to the model"
        },
        {
          concept: "Fine-tuning",
          meaning: "Additional training that adapts model parameters"
        },
        {
          concept: "RAG",
          meaning: "External information retrieval combined with generation"
        }
      ]
    },

    {
      heading: "4. Model Families",
      classificationTree: [
        "Generative Models",
        "├── Text",
        "│   ├── Language models",
        "│   └── Code models",
        "├── Image",
        "│   ├── Diffusion",
        "│   └── Other generative architectures",
        "├── Audio",
        "│   ├── Speech generation",
        "│   └── Music generation",
        "├── Video",
        "└── Multimodal",
        "    ├── Text + Image",
        "    ├── Text + Audio",
        "    ├── Text + Video",
        "    └── Multiple modalities"
      ]
    },

    {
      heading: "5. Proprietary Model APIs",
      content: [
        "A model provider can expose a trained model through an API.",
        "The application sends structured input to the provider and receives a generated response.",
        "The application developer does not necessarily need to manage the model's underlying GPU infrastructure."
      ],

      process: [
        "Application",
        "API request",
        "Authentication",
        "Model provider",
        "Inference infrastructure",
        "Model",
        "Generated response",
        "API response",
        "Application"
      ]
    },

    {
      heading: "6. Open-Source and Open-Weight Ecosystems",
      content: [
        "Some model ecosystems provide models that developers can download, adapt, or deploy depending on the model's license and distribution terms.",
        "Self-hosting can provide more control over infrastructure and data flow but introduces operational responsibilities.",
        "Developers must always check the specific model's license and usage conditions."
      ],

      table: [
        {
          approach: "Hosted API",
          advantage: "Less infrastructure management",
          challenge: "External service dependency and usage costs"
        },
        {
          approach: "Self-hosted model",
          advantage: "More infrastructure and deployment control",
          challenge: "Hardware, serving, scaling, and maintenance"
        },
        {
          approach: "Hybrid",
          advantage: "Can combine hosted and self-managed components",
          challenge: "Greater architectural complexity"
        }
      ]
    },

    {
      heading: "7. Model Provider vs Model",
      content: [
        "A model is the computational system that produces predictions.",
        "A provider is the organization or service layer that makes one or more models available to applications.",
        "An application should not confuse the API provider with the underlying model."
      ]
    },

    {
      heading: "8. API and SDK",
      table: [
        {
          concept: "API",
          meaning: "Interface through which software communicates with a service"
        },
        {
          concept: "SDK",
          meaning: "Developer library that simplifies interaction with an API or platform"
        },
        {
          concept: "HTTP",
          meaning: "Common protocol used for web-based API communication"
        },
        {
          concept: "JSON",
          meaning: "Common structured data format used in APIs"
        }
      ]
    },

    {
      heading: "9. Generic LLM API Workflow",
      codeBlock: "Application\n   ↓\nCreate request\n   ↓\nSend API request\n   ↓\nAuthentication\n   ↓\nModel service\n   ↓\nModel inference\n   ↓\nResponse\n   ↓\nParse result\n   ↓\nApplication output"
    },

    {
      heading: "10. API Request Components",
      table: [
        {
          component: "Model",
          purpose: "Select model or model endpoint"
        },
        {
          component: "Input",
          purpose: "Provide user message or prompt"
        },
        {
          component: "Generation settings",
          purpose: "Control output behavior"
        },
        {
          component: "Tools",
          purpose: "Provide callable external capabilities"
        },
        {
          component: "Response format",
          purpose: "Specify or request structured output where supported"
        }
      ]
    },

    {
      heading: "11. Prompt Layer",
      content: [
        "The prompt layer translates application requirements into instructions and context that the model can process.",
        "A production prompt may contain system instructions, user input, retrieved information, tool information, examples, and output requirements."
      ],

      classificationTree: [
        "Prompt",
        "├── System instructions",
        "├── Developer instructions",
        "├── User input",
        "├── Retrieved context",
        "├── Examples",
        "├── Tool definitions",
        "└── Output requirements"
      ]
    },

    {
      heading: "12. Prompt Construction Pipeline",
      process: [
        "Application state",
        "User request",
        "Retrieve relevant information",
        "Add instructions",
        "Add constraints",
        "Add output schema",
        "Construct final model input",
        "Send to model"
      ]
    },

    {
      heading: "13. Embeddings",
      content: [
        "Embeddings represent information as numerical vectors.",
        "They allow applications to compare pieces of information mathematically.",
        "Embeddings are widely used for semantic retrieval, recommendation, clustering, classification, and other applications."
      ]
    },

    {
      heading: "14. Vector Database",
      content: [
        "A vector database stores vectors and provides mechanisms for searching vectors according to similarity or other retrieval criteria.",
        "In a typical RAG application, documents are transformed into embeddings and stored so that relevant information can later be retrieved for a user query."
      ],

      process: [
        "Document",
        "Split into chunks",
        "Generate embeddings",
        "Store vectors",
        "User query",
        "Generate query embedding",
        "Similarity search",
        "Retrieve relevant chunks"
      ]
    },

    {
      heading: "15. RAG",
      content: [
        "Retrieval-Augmented Generation combines information retrieval with generative modeling.",
        "Instead of relying entirely on the model's learned parameters, the application retrieves relevant external information and supplies it as context."
      ],

      process: [
        "User question",
        "Query processing",
        "Query embedding",
        "Vector search",
        "Retrieve relevant chunks",
        "Construct context",
        "Generate response",
        "Return answer"
      ]
    },

    {
      heading: "16. Why RAG Is Useful",
      table: [
        {
          problem: "Private organizational knowledge",
          RAGRole: "Retrieve information from authorized internal sources"
        },
        {
          problem: "Frequently changing information",
          RAGRole: "Retrieve current information from maintained sources"
        },
        {
          problem: "Large document collections",
          RAGRole: "Retrieve only relevant sections"
        },
        {
          problem: "Need for evidence",
          RAGRole: "Provide source context for generation"
        }
      ]
    },

    {
      heading: "17. Tools",
      content: [
        "A tool is an external capability that an AI application can invoke.",
        "Examples include database queries, calculators, search systems, application APIs, code execution environments, and business systems.",
        "The model decides or proposes an action, while the application or tool system performs the actual operation."
      ],

      classificationTree: [
        "AI Tools",
        "├── Information",
        "│   ├── Search",
        "│   └── Database query",
        "├── Computation",
        "│   ├── Calculator",
        "│   └── Code execution",
        "├── Actions",
        "│   ├── Create record",
        "│   └── Update record",
        "└── External APIs"
      ]
    },

    {
      heading: "18. Function Calling",
      content: [
        "Function calling provides a structured mechanism through which a model can request that an application invoke a defined function or tool.",
        "The model typically generates structured arguments, the application validates them, executes the tool, and then provides the result back to the model when appropriate."
      ],

      process: [
        "User request",
        "Model analyzes request",
        "Model requests tool",
        "Application validates arguments",
        "Tool executes",
        "Tool result returned",
        "Model interprets result",
        "Final response"
      ]
    },

    {
      heading: "19. Tool Calling Example",
      table: [
        {
          userRequest: "What is the weather in Hyderabad?",
          modelAction: "Request weather tool"
        },
        {
          toolArguments: "location = Hyderabad",
          modelAction: "Structured request"
        },
        {
          toolResult: "Current weather data",
          modelAction: "Interpret result"
        },
        {
          finalOutput: "Present weather information",
          modelAction: "Respond to user"
        }
      ]
    },

    {
      heading: "20. Workflow vs Agent",
      content: [
        "A workflow follows predefined application logic.",
        "An agent generally has more flexibility to decide which actions or tools to use and may perform multiple steps toward a goal.",
        "The boundary between workflows and agents can vary by framework, so the important engineering distinction is the amount of decision-making delegated to the model."
      ],

      table: [
        {
          approach: "Fixed workflow",
          behavior: "Application determines the sequence"
        },
        {
          approach: "Model-assisted workflow",
          behavior: "Model performs selected decisions inside a defined workflow"
        },
        {
          approach: "Agentic system",
          behavior: "Model has greater autonomy over selecting and sequencing actions"
        }
      ]
    },

    {
      heading: "21. Agent Architecture",
      process: [
        "Goal",
        "Observe context",
        "Reason about next action",
        "Select tool/action",
        "Execute action",
        "Observe result",
        "Decide whether goal is complete",
        "Repeat or finish"
      ]
    },

    {
      heading: "22. Structured Output",
      content: [
        "Many applications need machine-readable results rather than free-form text.",
        "Structured output can use formats such as JSON or schema-constrained responses when supported by the chosen model and API.",
        "Structured output makes downstream application processing easier and can reduce parsing ambiguity."
      ],

      example: {
        task: "Extract a student's course information",
        schema: {
          name: "string",
          course: "string",
          semester: "number",
          subjects: "array"
        }
      }
    },

    {
      heading: "23. Structured Output Pipeline",
      process: [
        "User input",
        "Model instruction",
        "Output schema",
        "Model generation",
        "Schema validation",
        "Application processing"
      ]
    },

    {
      heading: "24. Application Layer",
      content: [
        "The application layer is where the model becomes a usable product.",
        "It handles authentication, user interfaces, business logic, database operations, permissions, validation, error handling, and integration with other services."
      ],

      classificationTree: [
        "AI Application",
        "├── Frontend",
        "├── Backend",
        "├── AI orchestration",
        "├── Database",
        "├── Retrieval",
        "├── Tools",
        "├── Authentication",
        "├── Authorization",
        "├── Evaluation",
        "└── Monitoring"
      ]
    },

    {
      heading: "25. Complete Chat Application Architecture",
      codeBlock: "User\n  ↓\nFrontend\n  ↓\nBackend API\n  ↓\nAuthentication / Authorization\n  ↓\nAI Orchestration\n  ├── Prompt construction\n  ├── Retrieval\n  ├── Tool selection\n  └── Model request\n          ↓\n       LLM\n          ↓\n   Validation / Parsing\n          ↓\n      Backend\n          ↓\n      Frontend\n          ↓\n        User"
    },

    {
      heading: "26. Database Layer",
      content: [
        "Generative AI applications frequently use ordinary databases alongside AI-specific infrastructure.",
        "A relational database may store users, permissions, transactions, application state, and metadata.",
        "A vector database may store embeddings for semantic retrieval.",
        "Some systems use both."
      ],

      table: [
        {
          databaseType: "Relational database",
          typicalUse: "Structured application data"
        },
        {
          databaseType: "Document database",
          typicalUse: "Flexible application documents"
        },
        {
          databaseType: "Vector database",
          typicalUse: "Vector similarity retrieval"
        },
        {
          databaseType: "Cache",
          typicalUse: "Fast temporary or frequently accessed data"
        }
      ]
    },

    {
      heading: "27. AI Orchestration",
      content: [
        "AI orchestration is the application logic that coordinates prompts, models, retrieval, tools, validation, memory, and response handling.",
        "The orchestration layer is often where the majority of application-specific engineering occurs."
      ],

      process: [
        "Receive request",
        "Validate request",
        "Determine context",
        "Retrieve information",
        "Construct prompt",
        "Call model",
        "Handle tool calls",
        "Validate output",
        "Store required state",
        "Return response"
      ]
    },

    {
      heading: "28. Memory",
      content: [
        "AI applications may maintain different forms of state.",
        "Conversation history stores previous messages.",
        "Application memory stores information required by the product.",
        "External knowledge retrieval provides information that may not belong in the conversation history.",
        "These concepts should not automatically be treated as the same thing."
      ],

      classificationTree: [
        "AI Application State",
        "├── Conversation history",
        "├── User/application state",
        "├── Retrieved knowledge",
        "├── Cached information",
        "└── Long-term stored information"
      ]
    },

    {
      heading: "29. Context Management",
      content: [
        "A model has a finite context capacity determined by the specific model and serving configuration.",
        "Applications therefore need to decide what information should be placed into the model context.",
        "Context management can involve summarization, retrieval, truncation, ranking, and selective inclusion."
      ],

      process: [
        "Available information",
        "Filter",
        "Rank",
        "Compress or summarize",
        "Select relevant context",
        "Send to model"
      ]
    },

    {
      heading: "30. Security",
      content: [
        "Generative AI applications introduce security considerations at the application, model, data, and tool layers.",
        "Security must include authentication, authorization, input validation, output validation, secret management, data protection, and safe tool execution."
      ],

      classificationTree: [
        "AI Application Security",
        "├── Authentication",
        "├── Authorization",
        "├── Input validation",
        "├── Output validation",
        "├── Secret management",
        "├── Data protection",
        "├── Tool permissions",
        "├── Logging controls",
        "└── Abuse prevention"
      ]
    },

    {
      heading: "31. Prompt Injection",
      content: [
        "Prompt injection occurs when untrusted content attempts to influence the instructions followed by an AI system.",
        "Applications that combine user input, retrieved documents, and tools need to treat external content carefully.",
        "Security should not rely on the model alone; application-level permission and validation controls are important."
      ]
    },

    {
      heading: "32. Tool Security",
      content: [
        "Tools can perform real operations, so tool permissions should follow the principle of least privilege.",
        "An AI system should not automatically receive unrestricted access to databases, files, APIs, or external actions.",
        "Applications should validate tool arguments and enforce authorization independently of model output."
      ]
    },

    {
      heading: "33. Cost",
      content: [
        "Generative AI applications have costs associated with model inference, infrastructure, storage, retrieval, networking, and monitoring.",
        "Token usage is an important cost factor for many hosted language-model services.",
        "Application architecture should consider cost from the beginning."
      ],

      table: [
        {
          costArea: "Model inference",
          factors: "Input tokens, output tokens, model choice, request volume"
        },
        {
          costArea: "Infrastructure",
          factors: "CPU, GPU, memory, storage"
        },
        {
          costArea: "Retrieval",
          factors: "Embedding generation, vector storage, search"
        },
        {
          costArea: "Tools",
          factors: "External API or service usage"
        },
        {
          costArea: "Operations",
          factors: "Monitoring, logging, deployment"
        }
      ]
    },

    {
      heading: "34. Latency",
      content: [
        "Every additional component in an AI application can contribute latency.",
        "A system that performs retrieval, multiple model calls, and several tools can become slower than a single model call.",
        "Architecture should therefore balance quality, functionality, and response time."
      ],

      process: [
        "Network latency",
        "+ Retrieval latency",
        "+ Model prefill latency",
        "+ Model generation latency",
        "+ Tool latency",
        "+ Post-processing",
        "= Total application latency"
      ]
    },

    {
      heading: "35. Scalability",
      content: [
        "A prototype that works for one user may not automatically work for thousands of concurrent users.",
        "Scaling requires consideration of model capacity, queues, caching, database capacity, rate limits, load balancing, and failure recovery."
      ],

      classificationTree: [
        "Scalability",
        "├── Application servers",
        "├── Model serving",
        "├── Databases",
        "├── Vector search",
        "├── Queues",
        "├── Caching",
        "├── Rate limiting",
        "└── Monitoring"
      ]
    },

    {
      heading: "36. Caching",
      content: [
        "Caching can reduce repeated computation and improve response times.",
        "Potential cache targets include embeddings, retrieval results, model responses where appropriate, and application data.",
        "Caching must respect correctness, freshness, privacy, and authorization requirements."
      ]
    },

    {
      heading: "37. Error Handling",
      content: [
        "AI applications must expect failures.",
        "External model APIs can fail, tools can time out, databases can become unavailable, and generated output can fail validation.",
        "A production system should have explicit error-handling paths."
      ],

      process: [
        "Request",
        "Attempt operation",
        "Success?",
        "Yes → Continue",
        "No → Identify failure",
        "Retry if appropriate",
        "Fallback if appropriate",
        "Return controlled error"
      ]
    },

    {
      heading: "38. Retry Strategy",
      content: [
        "Retries can help with temporary failures.",
        "Retries should not blindly repeat every failure because repeated requests can increase latency and cost.",
        "Applications should distinguish transient failures from permanent validation or authorization errors."
      ]
    },

    {
      heading: "39. Model Selection",
      content: [
        "Model selection should be based on application requirements rather than model popularity alone.",
        "Important dimensions can include capability, latency, context capacity, cost, modality, tool support, deployment requirements, and evaluation results."
      ],

      table: [
        {
          criterion: "Capability",
          question: "Can the model perform the required task?"
        },
        {
          criterion: "Latency",
          question: "Is response speed acceptable?"
        },
        {
          criterion: "Cost",
          question: "Is the economics acceptable?"
        },
        {
          criterion: "Context",
          question: "Can it handle required inputs?"
        },
        {
          criterion: "Modality",
          question: "Does it support required input/output types?"
        },
        {
          criterion: "Deployment",
          question: "Can it be hosted in the required environment?"
        }
      ]
    },

    {
      heading: "40. Model Selection Workflow",
      process: [
        "Define requirements",
        "Shortlist models",
        "Build representative evaluation set",
        "Test quality",
        "Test latency",
        "Measure cost",
        "Test reliability",
        "Compare results",
        "Select according to application requirements"
      ]
    },

    {
      heading: "41. Build vs Buy",
      table: [
        {
          decision: "Use hosted API",
          suitableWhen: "Fast development and reduced infrastructure management are priorities"
        },
        {
          decision: "Self-host",
          suitableWhen: "Control, customization, or deployment constraints justify infrastructure investment"
        },
        {
          decision: "Build custom model",
          suitableWhen: "Specialized requirements justify substantial data, research, and infrastructure effort"
        }
      ]
    },

    {
      heading: "42. Prototype vs Production",
      table: [
        {
          area: "Prototype",
          focus: "Validate idea quickly"
        },
        {
          area: "Production",
          focus: "Reliability, security, scalability, observability, and maintainability"
        }
      ]
    },

    {
      heading: "43. Generative AI Development Lifecycle",
      process: [
        "Identify problem",
        "Define users",
        "Define success criteria",
        "Select model",
        "Build prototype",
        "Create evaluation dataset",
        "Add retrieval/tools if needed",
        "Evaluate",
        "Secure",
        "Deploy",
        "Monitor",
        "Improve"
      ]
    },

    {
      heading: "44. Complete GenAI Application Architecture",
      codeBlock: "                         USER\n                          │\n                          ▼\n                    ┌───────────┐\n                    │ Frontend  │\n                    └─────┬─────┘\n                          │\n                          ▼\n                    ┌───────────┐\n                    │ Backend   │\n                    └─────┬─────┘\n                          │\n                 ┌────────┴────────┐\n                 ▼                 ▼\n          ┌─────────────┐   ┌─────────────┐\n          │ AI Workflow │   │ Application │\n          │ / Orchestr. │   │   Logic     │\n          └──────┬──────┘   └─────────────┘\n                 │\n        ┌────────┼─────────┐\n        ▼        ▼         ▼\n     Prompt   Retrieval   Tools\n        │        │         │\n        │    Vector DB   APIs/DB\n        │        │         │\n        └────────┼─────────┘\n                 ▼\n              ┌───────┐\n              │ Model │\n              └───┬───┘\n                  │\n                  ▼\n            Validation\n                  │\n                  ▼\n               Response\n                  │\n                  ▼\n                User"
    },

    {
      heading: "45. Complete Request Lifecycle",
      process: [
        "1. User submits request",
        "2. Frontend sends request",
        "3. Backend authenticates user",
        "4. Backend validates input",
        "5. Application determines required workflow",
        "6. Retrieval obtains relevant information if needed",
        "7. Tools are selected if needed",
        "8. Prompt/context is constructed",
        "9. Model generates output",
        "10. Tool calls are handled if required",
        "11. Output is validated",
        "12. Evaluation/telemetry signals are recorded",
        "13. Response is returned",
        "14. Frontend displays result"
      ]
    },

    {
      heading: "46. Example: AI Study Assistant",
      content: [
        "Consider an AI study assistant that answers questions from a student's course materials.",
        "The application can combine a frontend, backend API, authentication, document storage, chunking, embeddings, vector retrieval, an LLM, structured output, evaluation, and monitoring."
      ],

      process: [
        "Student asks question",
        "Authenticate student",
        "Search course knowledge",
        "Retrieve relevant content",
        "Construct prompt",
        "Call LLM",
        "Generate explanation",
        "Validate response",
        "Return answer with source context"
      ]
    },

    {
      heading: "47. Example: AI Coding Assistant",
      content: [
        "A coding assistant may use a language model together with repository search, file retrieval, code analysis, and controlled tools.",
        "The application should validate actions and avoid granting unnecessary permissions."
      ],

      classificationTree: [
        "Coding Assistant",
        "├── User request",
        "├── Repository context",
        "├── Code retrieval",
        "├── LLM",
        "├── Code generation",
        "├── Validation",
        "├── Tests",
        "└── User approval / application controls"
      ]
    },

    {
      heading: "48. Example: Customer Support AI",
      process: [
        "Customer message",
        "Identify intent",
        "Retrieve relevant knowledge",
        "Generate response",
        "Check policy constraints",
        "Escalate when required",
        "Return response",
        "Log evaluation signal"
      ]
    },

    {
      heading: "49. Architecture Decision Framework",
      classificationTree: [
        "Need an AI feature?",
        "├── Simple generation?",
        "│   └── Model + prompt",
        "├── Need private/current knowledge?",
        "│   └── Retrieval / RAG",
        "├── Need external action?",
        "│   └── Tools / function calling",
        "├── Need multiple adaptive steps?",
        "│   └── Agentic workflow may be considered",
        "├── Need structured machine output?",
        "│   └── Schema / structured output",
        "└── Need production reliability?",
        "    └── Evaluation + monitoring + security"
      ]
    },

    {
      heading: "50. When Not to Use an LLM",
      content: [
        "Not every software problem requires Generative AI.",
        "If a deterministic algorithm can solve a task more accurately, cheaply, and reliably, it may be preferable.",
        "Examples include simple arithmetic, fixed validation rules, deterministic sorting, and straightforward database operations."
      ]
    },

    {
      heading: "51. Traditional Software vs Generative AI",
      table: [
        {
          aspect: "Traditional deterministic logic",
          behavior: "Explicit rules"
        },
        {
          aspect: "Generative model",
          behavior: "Learned probabilistic behavior"
        },
        {
          aspect: "Traditional validation",
          behavior: "Often exact conditions"
        },
        {
          aspect: "Generative validation",
          behavior: "May require semantic and task-specific evaluation"
        }
      ]
    },

    {
      heading: "52. Hybrid AI Systems",
      content: [
        "Many strong applications combine deterministic software with generative models.",
        "The model can handle language understanding and generation while traditional software handles authentication, arithmetic, database transactions, permissions, and strict validation."
      ],

      classificationTree: [
        "Hybrid AI",
        "├── LLM",
        "│   ├── Understanding",
        "│   └── Generation",
        "└── Traditional Software",
        "    ├── Validation",
        "    ├── Databases",
        "    ├── Authentication",
        "    ├── Permissions",
        "    ├── Business rules",
        "    └── Deterministic computation"
      ]
    },

    {
      heading: "53. The Most Important Architecture Principle",
      content: [
        "Use the model where probabilistic language understanding or generation provides value, and use deterministic software where exact control is required.",
        "This separation makes AI applications easier to test, secure, debug, and maintain."
      ]
    },

    {
      heading: "54. Production Readiness Checklist",
      classificationTree: [
        "Production Readiness",
        "├── Functionality",
        "│   └── Core workflow works",
        "├── Quality",
        "│   └── Evaluation passed",
        "├── Reliability",
        "│   └── Failure handling",
        "├── Security",
        "│   └── Permissions and data protection",
        "├── Performance",
        "│   └── Latency / throughput",
        "├── Economics",
        "│   └── Cost controlled",
        "├── Observability",
        "│   └── Logs / metrics",
        "└── Maintenance",
        "    └── Regression evaluation"
      ]
    },

    {
      heading: "55. Common Mistakes",
      content: [
        "Mistake 1: Treating an LLM as the entire application.",
        "Mistake 2: Giving the model direct unrestricted access to sensitive tools.",
        "Mistake 3: Using RAG without evaluating retrieval.",
        "Mistake 4: Adding agents when a deterministic workflow is sufficient.",
        "Mistake 5: Ignoring structured output validation.",
        "Mistake 6: Ignoring latency.",
        "Mistake 7: Ignoring token and infrastructure costs.",
        "Mistake 8: Building a prototype without an evaluation dataset.",
        "Mistake 9: Assuming the model automatically knows private application data.",
        "Mistake 10: Assuming a successful demo means production readiness.",
        "Mistake 11: Ignoring model and prompt versioning.",
        "Mistake 12: Treating security as only a model-level problem."
      ]
    },

    {
      heading: "56. Interview Questions",
      content: [
        "What is the Generative AI ecosystem?",
        "What is a foundation model?",
        "What is the difference between a model and a model provider?",
        "What is an API?",
        "What is an SDK?",
        "What is an embedding?",
        "What is a vector database?",
        "What is RAG?",
        "What is function calling?",
        "What is a tool?",
        "What is an agent?",
        "What is structured output?",
        "Why is validation important?",
        "What is AI orchestration?",
        "What is context management?",
        "What are important AI application security considerations?",
        "Why is cost an architectural concern?",
        "What is the difference between prototype and production?",
        "When should an application avoid using an LLM?",
        "Why are hybrid AI systems useful?"
      ]
    }
  ],

  formulas: [
    "Application Latency ≈ Network + Retrieval + Model + Tool + Processing latency",
    "Total Cost ≈ Model Cost + Infrastructure Cost + Storage Cost + Tool Cost + Operational Cost",
    "RAG Pipeline = Query → Retrieval → Context → Generation",
    "AI Application = Model + Context + Tools + Application Logic + Evaluation"
  ],

  codeExamples: [
    {
      title: "Generic AI Application Flow",
      language: "python",
      description:
        "A simplified representation of an application-level AI workflow.",
      code: "def ai_application(user_input):\n    validate_input(user_input)\n\n    context = retrieve_context(user_input)\n\n    prompt = build_prompt(\n        user_input=user_input,\n        context=context\n    )\n\n    response = call_model(prompt)\n\n    validated = validate_output(response)\n\n    return validated"
    },
    {
      title: "Simple RAG-Style Workflow",
      language: "python",
      description:
        "A simplified conceptual RAG pipeline.",
      code: "def answer_question(question):\n    query_vector = embed(question)\n\n    documents = vector_search(query_vector)\n\n    context = '\\n'.join(documents)\n\n    prompt = f'''\nAnswer the question using the supplied context.\n\nContext:\n{context}\n\nQuestion:\n{question}\n'''\n\n    return call_model(prompt)"
    },
    {
      title: "Structured Output Validation",
      language: "python",
      description:
        "Illustrate application-level validation of generated data.",
      code: "def validate_result(result):\n    required = ['name', 'course', 'semester']\n\n    for field in required:\n        if field not in result:\n            return False\n\n    if not isinstance(result['semester'], int):\n        return False\n\n    return True"
    },
    {
      title: "Simple Tool Dispatcher",
      language: "python",
      description:
        "Demonstrate the application controlling which tools may execute.",
      code: "def execute_tool(name, arguments):\n    allowed_tools = {\n        'calculator': calculator,\n        'search': search\n    }\n\n    if name not in allowed_tools:\n        raise ValueError('Tool not allowed')\n\n    return allowed_tools[name](**arguments)"
    }
  ],

  mathIntuition: [
    {
      concept: "Vector retrieval",
      explanation:
        "Embeddings convert information into numerical vectors so that similarity-based retrieval can be performed."
    },
    {
      concept: "Latency composition",
      explanation:
        "A multi-stage AI application accumulates latency across its components."
    },
    {
      concept: "Cost composition",
      explanation:
        "The economic cost of an AI system comes from multiple components rather than the model alone."
    },
    {
      concept: "Probability plus deterministic control",
      explanation:
        "The model provides probabilistic behavior while application code can impose deterministic constraints around that behavior."
    }
  ],

  exercises: [
    {
      question:
        "Draw the complete Generative AI ecosystem as a classification tree.",
      difficulty: "Easy"
    },
    {
      question:
        "Explain the difference between a foundation model and an AI application.",
      difficulty: "Easy"
    },
    {
      question:
        "Explain the difference between a hosted model API and a self-hosted model.",
      difficulty: "Medium"
    },
    {
      question:
        "Design a RAG architecture for a university document assistant.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain how function calling works from user request to final response.",
      difficulty: "Medium"
    },
    {
      question:
        "Compare a workflow with an agentic system.",
      difficulty: "Medium"
    },
    {
      question:
        "Design security controls for an AI application that can query a database.",
      difficulty: "Hard"
    },
    {
      question:
        "Design a production architecture for an AI coding assistant.",
      difficulty: "Hard"
    },
    {
      question:
        "Explain when a deterministic program should be preferred over an LLM.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Build a Mini AI Application Architecture",
      task:
        "Create a Python project that separates frontend-style input, application logic, retrieval, model interaction, and output validation.",
      requirements: [
        "Create separate functions for each layer.",
        "Create a mock retrieval function.",
        "Create a mock model function.",
        "Validate the final output.",
        "Handle errors."
      ]
    },
    {
      title: "Build a Mini RAG System",
      task:
        "Create a small document retrieval system using embeddings or a simple similarity function.",
      requirements: [
        "Create at least 10 documents.",
        "Represent documents numerically.",
        "Represent the query numerically.",
        "Calculate similarity.",
        "Return the most relevant documents.",
        "Construct a final context."
      ]
    },
    {
      title: "Build a Tool Calling Simulator",
      task:
        "Create an application where an AI-style controller selects between calculator, search, and database tools.",
      requirements: [
        "Create at least three tools.",
        "Validate tool names.",
        "Validate arguments.",
        "Execute the tool.",
        "Return tool results.",
        "Handle invalid tool requests."
      ]
    },
    {
      title: "Design a Production GenAI Application",
      task:
        "Create an architecture document and prototype for a real-world Generative AI application.",
      requirements: [
        "Define the problem.",
        "Define users.",
        "Choose a model strategy.",
        "Design the prompt layer.",
        "Design retrieval if required.",
        "Design tools if required.",
        "Define security.",
        "Define evaluation.",
        "Define monitoring.",
        "Estimate latency and cost."
      ]
    }
  ],

  summary: [
    "The Generative AI ecosystem contains models, APIs, SDKs, embeddings, retrieval systems, tools, application logic, evaluation, infrastructure, security, and monitoring.",
    "A foundation model is only one component of a complete AI application.",
    "Hosted APIs reduce infrastructure responsibilities, while self-hosting provides additional control at the cost of operational complexity.",
    "Prompts connect application requirements and context to the model.",
    "Embeddings and vector databases support semantic retrieval.",
    "RAG combines retrieval with generation.",
    "Tools allow AI applications to interact with external systems.",
    "Function calling provides a structured way to connect models to application-controlled tools.",
    "Agents provide greater model-driven flexibility than fixed workflows.",
    "Structured output allows generated information to be consumed by application code.",
    "AI orchestration coordinates models, retrieval, prompts, tools, memory, validation, and application logic.",
    "Security must be enforced by application systems rather than relying entirely on model behavior.",
    "Cost and latency are architectural concerns.",
    "Production AI systems require evaluation, observability, error handling, security, and regression testing.",
    "Hybrid systems combine generative models with deterministic software.",
    "Not every problem requires an LLM.",
    "A production Generative AI application is an engineered system, not simply a model call."
  ],

  keyTakeaways: [
    "Think of Generative AI as an ecosystem rather than a single model.",
    "The model is one component inside a larger application architecture.",
    "Use retrieval when the application needs external or changing knowledge.",
    "Use tools when the application needs external actions or computation.",
    "Use structured outputs when downstream software needs predictable data.",
    "Use deterministic application logic for authentication, permissions, validation, and business rules.",
    "Evaluate the complete system rather than only the model.",
    "Design security, cost, latency, and monitoring from the beginning.",
    "Prefer the simplest architecture that satisfies the application's requirements."
  ]
};

export default lesson8;

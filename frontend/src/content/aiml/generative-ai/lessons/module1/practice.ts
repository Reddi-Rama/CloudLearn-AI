const practice = {
  id: "practice",
  moduleId: "module1",

  title: "Module 1 Practice — Generative AI Foundations",

  subtitle:
    "A complete practice system covering Generative AI concepts, models, architecture, training, representations, inference, evaluation, and application engineering.",

  description:
    "This practice module is designed to reinforce all eight lessons of Generative AI Foundations through concept questions, classification exercises, diagram tasks, mathematical problems, debugging tasks, architecture problems, coding exercises, case studies, and interview preparation.",

  learningGoals: [
    "Recall the fundamental concepts of Generative AI.",
    "Explain the difference between generative and predictive systems.",
    "Understand major generative model families.",
    "Explain the training lifecycle.",
    "Understand representations and latent spaces.",
    "Perform basic inference and decoding calculations.",
    "Evaluate generated outputs.",
    "Design a complete Generative AI application architecture."
  ],

  coverage: [
    {
      lesson: "Lesson 1",
      topic: "What Is Generative AI?",
      skills: [
        "Definitions",
        "AI/ML/DL/GenAI relationships",
        "Generative vs predictive systems",
        "Foundation models",
        "RAG basics"
      ]
    },
    {
      lesson: "Lesson 2",
      topic: "Generative Models",
      skills: [
        "Probability distributions",
        "Sampling",
        "Autoregressive models",
        "VAE",
        "GAN",
        "Diffusion"
      ]
    },
    {
      lesson: "Lesson 3",
      topic: "Architecture & Model Families",
      skills: [
        "GenAI stack",
        "Transformer architecture",
        "Model families",
        "Application architecture"
      ]
    },
    {
      lesson: "Lesson 4",
      topic: "Training, Data & Compute",
      skills: [
        "Training pipeline",
        "Loss",
        "Optimization",
        "GPU compute",
        "Pretraining",
        "Fine-tuning"
      ]
    },
    {
      lesson: "Lesson 5",
      topic: "Data Representation & Latent Spaces",
      skills: [
        "Tokens",
        "Embeddings",
        "Vector spaces",
        "Cosine similarity",
        "Latent representations"
      ]
    },
    {
      lesson: "Lesson 6",
      topic: "Inference & Decoding",
      skills: [
        "Logits",
        "Softmax",
        "Temperature",
        "Greedy decoding",
        "Top-k",
        "Top-p",
        "Beam search"
      ]
    },
    {
      lesson: "Lesson 7",
      topic: "Evaluation & Reliability",
      skills: [
        "Correctness",
        "Relevance",
        "Faithfulness",
        "Hallucination",
        "Robustness",
        "Evaluation datasets"
      ]
    },
    {
      lesson: "Lesson 8",
      topic: "Ecosystem & Application Workflow",
      skills: [
        "APIs",
        "RAG",
        "Tools",
        "Agents",
        "Security",
        "Production architecture"
      ]
    }
  ],

  classificationTrees: [
    {
      title: "Generative AI Complete Classification",
      tree: [
        "Generative AI",
        "├── Text",
        "│   ├── Language models",
        "│   └── Code models",
        "├── Image",
        "│   ├── Diffusion",
        "│   └── Other generative models",
        "├── Audio",
        "├── Video",
        "└── Multimodal"
      ]
    },
    {
      title: "Generative Model Families",
      tree: [
        "Generative Models",
        "├── Autoregressive",
        "├── VAE",
        "├── GAN",
        "├── Diffusion",
        "└── Flow-based"
      ]
    },
    {
      title: "Generative AI Application",
      tree: [
        "Application",
        "├── Frontend",
        "├── Backend",
        "├── Prompt",
        "├── Model",
        "├── Retrieval",
        "├── Tools",
        "├── Validation",
        "├── Evaluation",
        "├── Security",
        "└── Monitoring"
      ]
    }
  ],

  processFlows: [
    {
      title: "Complete GenAI Lifecycle",
      steps: [
        "Problem definition",
        "Data / knowledge preparation",
        "Model selection",
        "Prompt / workflow design",
        "Prototype",
        "Evaluation",
        "Security",
        "Deployment",
        "Monitoring",
        "Continuous improvement"
      ]
    },
    {
      title: "LLM Generation",
      steps: [
        "Prompt",
        "Tokenization",
        "Embeddings",
        "Transformer",
        "Logits",
        "Softmax",
        "Decoding",
        "Next token",
        "Repeat",
        "Stop"
      ]
    },
    {
      title: "RAG",
      steps: [
        "Question",
        "Query representation",
        "Retrieval",
        "Relevant context",
        "Prompt construction",
        "Generation",
        "Grounding evaluation",
        "Response"
      ]
    },
    {
      title: "AI Reliability Loop",
      steps: [
        "Define success",
        "Create tests",
        "Evaluate",
        "Deploy",
        "Monitor",
        "Find failures",
        "Add regression tests",
        "Improve"
      ]
    }
  ],

  multipleChoiceQuestions: [
    {
      question: "What is the primary purpose of a generative model?",
      options: [
        "Only classify existing samples",
        "Learn patterns that allow generation of new outputs",
        "Only store documents",
        "Only perform database operations"
      ],
      answer: 1,
      explanation:
        "Generative models learn patterns or distributions that can be used to generate new outputs."
    },
    {
      question: "What do logits represent?",
      options: [
        "Normalized probabilities",
        "Raw model scores",
        "Database rows",
        "Embedding dimensions only"
      ],
      answer: 1,
      explanation:
        "Logits are raw scores before probability normalization."
    },
    {
      question: "Which function commonly converts logits into probabilities?",
      options: [
        "ReLU",
        "Softmax",
        "Hashing",
        "Sorting"
      ],
      answer: 1,
      explanation:
        "Softmax converts a vector of logits into a probability distribution."
    },
    {
      question: "What does top-k sampling do?",
      options: [
        "Keeps the k highest-probability candidates",
        "Keeps exactly k generated sentences",
        "Removes the top k tokens",
        "Changes the model weights"
      ],
      answer: 0,
      explanation:
        "Top-k restricts sampling to the k highest-probability candidates."
    },
    {
      question: "What does top-p sampling use?",
      options: [
        "A fixed number of tokens",
        "A cumulative probability threshold",
        "A database index",
        "A training epoch"
      ],
      answer: 1,
      explanation:
        "Top-p retains candidates until their cumulative probability reaches the specified threshold."
    },
    {
      question: "What is an embedding?",
      options: [
        "A numerical representation",
        "A GPU",
        "A prompt template only",
        "A stopping condition"
      ],
      answer: 0,
      explanation:
        "Embeddings represent information numerically in a vector space."
    },
    {
      question: "What is RAG?",
      options: [
        "Random AI generation",
        "Retrieval-Augmented Generation",
        "Recursive Algorithm Generator",
        "Runtime API Gateway"
      ],
      answer: 1,
      explanation:
        "RAG combines information retrieval with generation."
    },
    {
      question: "What is a tool in an AI application?",
      options: [
        "An external capability the application can invoke",
        "Only a neural network layer",
        "A token",
        "A loss function"
      ],
      answer: 0,
      explanation:
        "Tools provide external capabilities such as search, calculations, databases, or APIs."
    },
    {
      question: "Which is an important distinction in AI evaluation?",
      options: [
        "Fluency equals factuality",
        "Fluency and factuality are different dimensions",
        "Latency equals accuracy",
        "Embeddings equal databases"
      ],
      answer: 1,
      explanation:
        "A response can be fluent while still being incorrect."
    },
    {
      question: "Which component should enforce application authorization?",
      options: [
        "Only the language model",
        "Application security controls",
        "Temperature",
        "Top-p"
      ],
      answer: 1,
      explanation:
        "Authorization should be enforced by deterministic application-level security controls."
    }
  ],

  shortAnswerQuestions: [
    "Define Generative AI.",
    "Explain generative versus discriminative modeling.",
    "What is a foundation model?",
    "What is sampling?",
    "What is latent space?",
    "What is an embedding?",
    "What is cosine similarity?",
    "What is a logit?",
    "What is temperature?",
    "What is greedy decoding?",
    "What is top-k sampling?",
    "What is top-p sampling?",
    "What is beam search?",
    "What is hallucination?",
    "What is grounding?",
    "What is faithfulness?",
    "What is RAG?",
    "What is function calling?",
    "What is structured output?",
    "What is AI orchestration?"
  ],

  longAnswerQuestions: [
    {
      question:
        "Explain the complete evolution from AI to ML to DL to Generative AI using a classification tree.",
      expectedAreas: [
        "Definitions",
        "Relationships",
        "Generative behavior",
        "Examples"
      ]
    },
    {
      question:
        "Explain how an autoregressive language model generates text from a prompt.",
      expectedAreas: [
        "Tokenization",
        "Forward pass",
        "Logits",
        "Softmax",
        "Decoding",
        "Autoregressive loop",
        "Stopping"
      ]
    },
    {
      question:
        "Compare greedy decoding, sampling, top-k, top-p, and beam search.",
      expectedAreas: [
        "Selection method",
        "Randomness",
        "Candidate management",
        "Advantages",
        "Limitations"
      ]
    },
    {
      question:
        "Explain a complete RAG architecture.",
      expectedAreas: [
        "Documents",
        "Chunking",
        "Embeddings",
        "Vector storage",
        "Retrieval",
        "Context",
        "Generation",
        "Evaluation"
      ]
    },
    {
      question:
        "Design a production Generative AI application.",
      expectedAreas: [
        "Frontend",
        "Backend",
        "Model",
        "Prompt",
        "Retrieval",
        "Tools",
        "Security",
        "Evaluation",
        "Monitoring",
        "Cost"
      ]
    }
  ],

  mathematicalProblems: [
    {
      question:
        "Calculate softmax for logits [2, 1, 0].",
      expectedConcepts: [
        "Exponentiation",
        "Normalization",
        "Probability distribution"
      ]
    },
    {
      question:
        "Calculate cosine similarity between vectors [1, 2] and [2, 4].",
      expectedConcepts: [
        "Dot product",
        "Vector norms",
        "Cosine similarity"
      ]
    },
    {
      question:
        "Explain mathematically how temperature modifies logits.",
      expectedConcepts: [
        "z/T",
        "Softmax",
        "Distribution sharpness"
      ]
    },
    {
      question:
        "Given probabilities [0.45, 0.25, 0.15, 0.08, 0.07], identify which tokens remain for top-p = 0.85.",
      expectedConcepts: [
        "Sorting",
        "Cumulative probability",
        "Threshold"
      ]
    },
    {
      question:
        "If 950 of 1000 evaluation cases pass, calculate the success rate.",
      expectedConcepts: [
        "Success rate formula",
        "Percentage calculation"
      ]
    }
  ],

  diagramTasks: [
    "Draw the AI → ML → DL → Generative AI relationship.",
    "Draw the major generative model families.",
    "Draw a transformer-based language generation pipeline.",
    "Draw the autoregressive generation loop.",
    "Draw top-p sampling.",
    "Draw the RAG architecture.",
    "Draw a tool-calling workflow.",
    "Draw an AI agent loop.",
    "Draw a complete production GenAI architecture.",
    "Draw the GenAI evaluation flywheel."
  ],

  comparisonTables: [
    {
      title: "Training vs Inference",
      columns: [
        "Aspect",
        "Training",
        "Inference"
      ]
    },
    {
      title: "Greedy vs Sampling",
      columns: [
        "Aspect",
        "Greedy",
        "Sampling"
      ]
    },
    {
      title: "Top-K vs Top-P",
      columns: [
        "Aspect",
        "Top-K",
        "Top-P"
      ]
    },
    {
      title: "RAG vs Fine-Tuning",
      columns: [
        "Aspect",
        "RAG",
        "Fine-Tuning"
      ]
    },
    {
      title: "Workflow vs Agent",
      columns: [
        "Aspect",
        "Workflow",
        "Agent"
      ]
    },
    {
      title: "Hosted API vs Self-Hosting",
      columns: [
        "Aspect",
        "Hosted API",
        "Self-hosted"
      ]
    }
  ],

  debuggingTasks: [
    {
      title: "Probability Bug",
      problem:
        "A developer treats logits directly as probabilities.",
      task:
        "Identify the conceptual error and explain the correct pipeline."
    },
    {
      title: "RAG Bug",
      problem:
        "The model receives irrelevant document chunks.",
      task:
        "Identify which part of the pipeline should be investigated."
    },
    {
      title: "Structured Output Bug",
      problem:
        "The model returns invalid JSON.",
      task:
        "Design application-level validation and recovery."
    },
    {
      title: "Tool Security Bug",
      problem:
        "The model requests an unauthorized database operation.",
      task:
        "Explain why the application must reject the operation."
    },
    {
      title: "Evaluation Bug",
      problem:
        "The system is judged only by whether its response sounds fluent.",
      task:
        "Design a better evaluation framework."
    }
  ],

  architectureChallenges: [
    {
      title: "University Document Assistant",
      requirements: [
        "Answer questions from course documents.",
        "Use retrieval.",
        "Show evidence.",
        "Support multiple users.",
        "Evaluate factuality."
      ]
    },
    {
      title: "AI Coding Assistant",
      requirements: [
        "Understand repository context.",
        "Retrieve relevant files.",
        "Generate code.",
        "Run controlled tests.",
        "Protect repository access."
      ]
    },
    {
      title: "Customer Support Assistant",
      requirements: [
        "Answer from company knowledge.",
        "Use tools for account information.",
        "Escalate complex cases.",
        "Maintain logs.",
        "Protect customer data."
      ]
    },
    {
      title: "AI Study Planner",
      requirements: [
        "Understand user goals.",
        "Generate study plans.",
        "Store application state.",
        "Provide structured output.",
        "Evaluate plan quality."
      ]
    }
  ],

  codingProjects: [
    {
      title: "Project 1 — Mini Generative AI Simulator",
      objective:
        "Build a toy generative system demonstrating token probabilities and decoding.",
      requirements: [
        "Token vocabulary",
        "Probability distribution",
        "Greedy decoding",
        "Random sampling",
        "Temperature",
        "Top-k",
        "Top-p",
        "Maximum generation length"
      ]
    },
    {
      title: "Project 2 — Mini Semantic Search",
      objective:
        "Build a simple vector-based retrieval system.",
      requirements: [
        "Document collection",
        "Vector representation",
        "Query vector",
        "Cosine similarity",
        "Top results",
        "Ranking"
      ]
    },
    {
      title: "Project 3 — Mini RAG Application",
      objective:
        "Build a complete retrieval-augmented question answering prototype.",
      requirements: [
        "Document ingestion",
        "Chunking",
        "Embedding representation",
        "Retrieval",
        "Prompt construction",
        "Generated response",
        "Source display"
      ]
    },
    {
      title: "Project 4 — AI Evaluation Dashboard",
      objective:
        "Create an evaluation system for generated responses.",
      requirements: [
        "Evaluation dataset",
        "Correctness",
        "Relevance",
        "Grounding",
        "Format compliance",
        "Failure categories",
        "Regression comparison"
      ]
    }
  ],

  interviewPreparation: {
    basic: [
      "What is Generative AI?",
      "What is a generative model?",
      "What is a foundation model?",
      "What is a token?",
      "What is an embedding?",
      "What is a vector database?",
      "What is RAG?",
      "What is inference?"
    ],

    intermediate: [
      "Explain logits and softmax.",
      "Explain temperature.",
      "Compare top-k and top-p.",
      "Explain beam search.",
      "Explain hallucination.",
      "Explain grounding.",
      "Explain model evaluation.",
      "Explain function calling.",
      "Explain AI orchestration."
    ],

    advanced: [
      "Design a production RAG architecture.",
      "Explain how KV caching affects inference.",
      "Design a reliability evaluation framework.",
      "Design security controls for an agentic application.",
      "Compare hosted and self-hosted model architectures.",
      "Design an AI system under latency and cost constraints.",
      "Explain how production failures should become regression tests."
    ]
  },

  finalChallenge: {
    title: "Module 1 Capstone — Design a Complete Generative AI Application",

    scenario:
      "Design a Generative AI application that solves a real problem and demonstrate that you understand the complete stack rather than only the model.",

    requiredSections: [
      "Problem definition",
      "Target users",
      "Functional requirements",
      "Non-functional requirements",
      "Model selection",
      "Prompt architecture",
      "Data / knowledge architecture",
      "Embedding strategy",
      "Vector database strategy",
      "RAG workflow",
      "Tool strategy",
      "Structured output",
      "Backend architecture",
      "Frontend architecture",
      "Authentication",
      "Authorization",
      "Security",
      "Evaluation dataset",
      "Evaluation metrics",
      "Monitoring",
      "Error handling",
      "Latency strategy",
      "Cost strategy",
      "Deployment architecture"
    ],

    expectedArchitecture: [
      "User",
      "Frontend",
      "Backend",
      "Authentication",
      "AI orchestration",
      "Prompt",
      "Retrieval",
      "Vector database",
      "Model",
      "Tools",
      "Validation",
      "Evaluation",
      "Monitoring"
    ]
  },

  revisionChecklist: [
    "I can define Generative AI.",
    "I can explain generative model families.",
    "I understand foundation models.",
    "I understand training versus inference.",
    "I understand representations and embeddings.",
    "I can explain latent spaces.",
    "I can calculate basic cosine similarity.",
    "I understand logits and softmax.",
    "I understand temperature.",
    "I understand greedy decoding.",
    "I understand sampling.",
    "I understand top-k.",
    "I understand top-p.",
    "I understand beam search.",
    "I understand hallucination.",
    "I understand grounding and faithfulness.",
    "I can design an evaluation dataset.",
    "I understand RAG.",
    "I understand tools and function calling.",
    "I understand workflows versus agents.",
    "I understand structured outputs.",
    "I understand AI application security.",
    "I can design a complete GenAI architecture.",
    "I understand latency and cost.",
    "I understand production monitoring."
  ],

  moduleCompletionCriteria: [
    "Complete all lesson exercises.",
    "Complete all mathematical practice.",
    "Draw all required architecture diagrams.",
    "Complete at least one decoding project.",
    "Complete one retrieval project.",
    "Complete one RAG architecture challenge.",
    "Complete the evaluation challenge.",
    "Answer the interview questions.",
    "Complete the final architecture challenge."
  ]
};

export default practice;

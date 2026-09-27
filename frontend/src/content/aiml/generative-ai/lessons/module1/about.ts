const about = {
  id: "about",
  moduleId: "module1",

  title: "About Module 1 — Generative AI Foundations",

  subtitle:
    "Build the conceptual and engineering foundation required to understand modern Generative AI systems.",

  description:
    "Generative AI Foundations introduces the complete mental model needed before moving into advanced LLM engineering. The module begins with what Generative AI is, explains generative model families, architecture, training, data representation, inference and decoding, evaluation and reliability, and finally connects everything into real application architecture.",

  moduleNumber: 1,

  lessonCount: 8,

  estimatedTime: "12–16 hours",

  difficulty: "Beginner → Intermediate",

  purpose: [
    "Build a strong conceptual foundation.",
    "Connect mathematical ideas with practical AI systems.",
    "Understand how models become applications.",
    "Prepare for LLM engineering topics in later modules.",
    "Develop the vocabulary needed for advanced Generative AI development."
  ],

  prerequisites: [
    "Basic Python programming",
    "Basic probability knowledge",
    "Basic machine learning terminology",
    "Basic understanding of neural networks",
    "Basic understanding of APIs is helpful but not mandatory"
  ],

  prerequisiteKnowledgeTree: [
    "Prerequisites",
    "├── Programming",
    "│   └── Python basics",
    "├── Mathematics",
    "│   ├── Probability",
    "│   ├── Vectors",
    "│   └── Basic functions",
    "├── Machine Learning",
    "│   ├── Training",
    "│   ├── Parameters",
    "│   └── Loss",
    "└── Software",
    "    ├── JSON",
    "    └── APIs"
  ],

  learningJourney: [
    {
      lesson: 1,
      title: "What Is Generative AI?",
      purpose:
        "Establish the fundamental definition and mental model."
    },
    {
      lesson: 2,
      title: "Generative Models",
      purpose:
        "Understand how models learn distributions and generate samples."
    },
    {
      lesson: 3,
      title: "Architecture & Model Families",
      purpose:
        "Understand the major generative architectures and the GenAI stack."
    },
    {
      lesson: 4,
      title: "Training, Data & Compute",
      purpose:
        "Understand how generative models are trained."
    },
    {
      lesson: 5,
      title: "Data Representation & Latent Spaces",
      purpose:
        "Understand tokens, embeddings, vector spaces, and representations."
    },
    {
      lesson: 6,
      title: "Inference & Decoding",
      purpose:
        "Understand how models transform probabilities into generated outputs."
    },
    {
      lesson: 7,
      title: "Evaluation, Reliability & Limitations",
      purpose:
        "Understand how to measure and improve system reliability."
    },
    {
      lesson: 8,
      title: "Ecosystem & Application Workflow",
      purpose:
        "Connect all concepts into complete real-world AI applications."
    }
  ],

  visualLearningMap: [
    "                    GENERATIVE AI",
    "                          │",
    "          ┌───────────────┼────────────────┐",
    "          ▼               ▼                ▼",
    "       MODELS          DATA            APPLICATIONS",
    "          │               │                │",
    "     ┌────┼────┐      ┌───┼───┐       ┌────┼─────┐",
    "     ▼    ▼    ▼      ▼   ▼   ▼       ▼    ▼     ▼",
    "    LLM  VAE  GAN   Tokens Embeddings RAG Tools Agents",
    "     │                      │            │",
    "     ▼                      ▼            ▼",
    "  Inference              Retrieval    Workflow",
    "     │                      │            │",
    "     └──────────────┬───────┴────────────┘",
    "                    ▼",
    "               AI APPLICATION",
    "                    │",
    "          ┌─────────┼─────────┐",
    "          ▼         ▼         ▼",
    "      Evaluation  Security  Monitoring"
  ],

  conceptMap: [
    {
      concept: "Generative models",
      connectedTo: [
        "Probability",
        "Sampling",
        "Latent representations",
        "Generation"
      ]
    },
    {
      concept: "LLMs",
      connectedTo: [
        "Tokens",
        "Transformers",
        "Logits",
        "Decoding",
        "Context"
      ]
    },
    {
      concept: "Embeddings",
      connectedTo: [
        "Vector spaces",
        "Similarity",
        "Retrieval",
        "Vector databases"
      ]
    },
    {
      concept: "RAG",
      connectedTo: [
        "Embeddings",
        "Retrieval",
        "Context",
        "LLMs",
        "Grounding"
      ]
    },
    {
      concept: "Evaluation",
      connectedTo: [
        "Correctness",
        "Relevance",
        "Faithfulness",
        "Robustness",
        "Monitoring"
      ]
    },
    {
      concept: "Application engineering",
      connectedTo: [
        "APIs",
        "Tools",
        "Security",
        "Databases",
        "Deployment"
      ]
    }
  ],

  coreConcepts: [
    {
      concept: "Generative AI",
      explanation:
        "Systems capable of producing new content based on learned patterns."
    },
    {
      concept: "Generative model",
      explanation:
        "A model that learns patterns or distributions that can be used to generate samples."
    },
    {
      concept: "Foundation model",
      explanation:
        "A broadly capable pretrained model that can support many downstream tasks."
    },
    {
      concept: "Token",
      explanation:
        "A unit used by language-model processing and generation."
    },
    {
      concept: "Embedding",
      explanation:
        "A numerical representation of information in a vector space."
    },
    {
      concept: "Latent space",
      explanation:
        "A learned representation space in which meaningful structure can emerge."
    },
    {
      concept: "Inference",
      explanation:
        "Using trained parameters to produce predictions or generated outputs."
    },
    {
      concept: "Decoding",
      explanation:
        "The procedure used to transform model probability distributions into generated sequences."
    },
    {
      concept: "RAG",
      explanation:
        "Retrieval-Augmented Generation combines retrieval with generation."
    },
    {
      concept: "Hallucination",
      explanation:
        "Generated content that is unsupported or incorrect relative to the task or available evidence."
    }
  ],

  architectureMap: [
    {
      layer: "1",
      name: "Data",
      examples: [
        "Text",
        "Images",
        "Audio",
        "Video",
        "Code"
      ]
    },
    {
      layer: "2",
      name: "Representation",
      examples: [
        "Tokens",
        "Embeddings",
        "Latent representations"
      ]
    },
    {
      layer: "3",
      name: "Model",
      examples: [
        "Transformer",
        "VAE",
        "GAN",
        "Diffusion"
      ]
    },
    {
      layer: "4",
      name: "Generation",
      examples: [
        "Logits",
        "Sampling",
        "Decoding"
      ]
    },
    {
      layer: "5",
      name: "Context",
      examples: [
        "Prompt",
        "Retrieved information",
        "Conversation state"
      ]
    },
    {
      layer: "6",
      name: "Tools",
      examples: [
        "Search",
        "Database",
        "Calculator",
        "External APIs"
      ]
    },
    {
      layer: "7",
      name: "Application",
      examples: [
        "Frontend",
        "Backend",
        "Authentication",
        "Validation"
      ]
    },
    {
      layer: "8",
      name: "Operations",
      examples: [
        "Evaluation",
        "Monitoring",
        "Security",
        "Deployment"
      ]
    }
  ],

  comparisonFrameworks: [
    {
      title: "Traditional Software vs Generative AI",
      rows: [
        {
          aspect: "Behavior",
          traditional: "Explicit rules",
          generative: "Learned probabilistic behavior"
        },
        {
          aspect: "Output",
          traditional: "Often deterministic",
          generative: "Can vary between runs"
        },
        {
          aspect: "Evaluation",
          traditional: "Often exact",
          generative: "Often multi-dimensional"
        },
        {
          aspect: "Failure mode",
          traditional: "Logic / implementation error",
          generative: "Can include hallucination and instruction failure"
        }
      ]
    },
    {
      title: "Model vs Application",
      rows: [
        {
          aspect: "Model",
          description:
            "Provides learned predictive/generative capability."
        },
        {
          aspect: "Application",
          description:
            "Combines model capability with context, tools, data, security, and business logic."
        }
      ]
    }
  ],

  mathematicalFoundations: [
    {
      topic: "Probability",
      reason:
        "Generative models often represent or approximate probability distributions."
    },
    {
      topic: "Softmax",
      reason:
        "Converts language-model logits into a probability distribution."
    },
    {
      topic: "Vectors",
      reason:
        "Embeddings represent information as numerical vectors."
    },
    {
      topic: "Cosine similarity",
      reason:
        "Provides a common measure of directional similarity between vectors."
    },
    {
      topic: "Loss",
      reason:
        "Training uses mathematical objectives to measure prediction error."
    },
    {
      topic: "Optimization",
      reason:
        "Training updates parameters to improve the selected objective."
    }
  ],

  engineeringSkills: [
    "Read a Generative AI architecture diagram.",
    "Explain an LLM inference pipeline.",
    "Explain how embeddings enable retrieval.",
    "Explain RAG.",
    "Understand decoding controls.",
    "Design an evaluation dataset.",
    "Identify hallucination failure modes.",
    "Design a basic AI backend workflow.",
    "Design tool access boundaries.",
    "Think about latency and cost."
  ],

  practicalWorkflow: [
    "1. Define the problem.",
    "2. Decide whether Generative AI is appropriate.",
    "3. Define required knowledge.",
    "4. Select a model strategy.",
    "5. Design prompts.",
    "6. Add retrieval if needed.",
    "7. Add tools if needed.",
    "8. Validate outputs.",
    "9. Create evaluation cases.",
    "10. Test reliability.",
    "11. Add security.",
    "12. Deploy.",
    "13. Monitor.",
    "14. Improve."
  ],

  imageReferenceAreas: [
    {
      topic: "Generative AI application architecture",
      reason:
        "Useful for visually understanding how frontend, backend, retrieval, models, and databases connect.",
      externalSource:
        "Google Cloud Application Design Center",
      url:
        "https://docs.cloud.google.com/application-design-center/docs/gen-ai-rag-with-sql"
    },
    {
      topic: "RAG architecture",
      reason:
        "Useful for visualizing retrieval followed by grounded generation.",
      externalSource:
        "Hugging Face RAG evaluation material",
      url:
        "https://huggingface.co/learn/cookbook/rag_evaluation"
    },
    {
      topic: "Agent workflow",
      reason:
        "Useful for understanding tool use and agent loops.",
      externalSource:
        "Hugging Face Agents Course",
      url:
        "https://huggingface.co/learn/agents-course/unit1/introduction"
    }
  ],

  industryConnections: [
    {
      area: "Chat applications",
      concepts: [
        "LLMs",
        "Prompts",
        "Conversation state",
        "Streaming"
      ]
    },
    {
      area: "Enterprise search",
      concepts: [
        "Embeddings",
        "Vector databases",
        "RAG",
        "Grounding"
      ]
    },
    {
      area: "AI coding assistants",
      concepts: [
        "Code models",
        "Retrieval",
        "Tools",
        "Validation"
      ]
    },
    {
      area: "Customer support",
      concepts: [
        "RAG",
        "Tools",
        "Evaluation",
        "Escalation"
      ]
    },
    {
      area: "Multimodal applications",
      concepts: [
        "Vision",
        "Audio",
        "Text",
        "Multimodal models"
      ]
    }
  ],

  careerRelevance: [
    {
      role: "Generative AI Engineer",
      skills:
        "LLMs, prompts, RAG, tools, APIs, evaluation"
    },
    {
      role: "LLM Application Engineer",
      skills:
        "Application architecture, model APIs, orchestration, retrieval"
    },
    {
      role: "Machine Learning Engineer",
      skills:
        "Models, training, inference, evaluation, deployment"
    },
    {
      role: "AI Platform Engineer",
      skills:
        "Serving, infrastructure, monitoring, scalability"
    },
    {
      role: "AI Product Engineer",
      skills:
        "Full-stack AI applications and user-focused workflows"
    }
  ],

  recommendedStudyMethod: [
    "Read the theory first.",
    "Study every classification tree.",
    "Recreate the diagrams yourself.",
    "Calculate the mathematical examples manually.",
    "Run the Python examples.",
    "Modify the code examples.",
    "Complete the exercises without looking at the answers.",
    "Build the Module 1 project.",
    "Explain the architecture aloud.",
    "Attempt the interview questions."
  ],

  moduleAssessmentPreparation: [
    "Definitions",
    "Classification trees",
    "Architecture diagrams",
    "Mathematical calculations",
    "Code tracing",
    "Application architecture",
    "RAG reasoning",
    "Evaluation design",
    "Security reasoning",
    "Scenario-based questions"
  ],

  masteryChecklist: [
    "I can explain Generative AI in my own words.",
    "I can distinguish generative and discriminative approaches.",
    "I can explain major generative model families.",
    "I understand foundation models.",
    "I can explain the training lifecycle.",
    "I understand tokens and embeddings.",
    "I understand latent representations.",
    "I can explain logits and softmax.",
    "I can explain temperature.",
    "I can compare greedy decoding and sampling.",
    "I can explain top-k and top-p.",
    "I understand beam search.",
    "I can explain hallucination.",
    "I can distinguish correctness from fluency.",
    "I can design an evaluation dataset.",
    "I understand RAG.",
    "I understand vector databases.",
    "I understand tools and function calling.",
    "I understand workflows and agents.",
    "I can design a complete AI application.",
    "I understand AI application security.",
    "I understand latency and cost.",
    "I understand production monitoring."
  ],

  moduleOutputs: [
    "Strong Generative AI vocabulary",
    "Complete GenAI architecture mental model",
    "Understanding of LLM inference",
    "Understanding of embeddings and retrieval",
    "Understanding of RAG",
    "Understanding of evaluation",
    "Basic AI application architecture skills",
    "A completed practical project"
  ],

  nextModule: {
    title: "Module 2 — Large Language Models",
    transition:
      "After understanding the complete Generative AI foundation, the next module goes deeper into LLMs, their architecture, transformer components, attention, pretraining, instruction tuning, context handling, and practical LLM engineering."
  },

  externalReferences: [
    {
      title: "Google Cloud — Develop a Generative AI Application",
      url:
        "https://docs.cloud.google.com/docs/ai-ml/generative-ai/develop-generative-ai-application",
      relevance:
        "Model selection, grounding, RAG, customization, evaluation, and deployment."
    },
    {
      title: "Google Cloud — Generative AI RAG Architecture",
      url:
        "https://docs.cloud.google.com/application-design-center/docs/gen-ai-rag-with-sql",
      relevance:
        "Example architecture connecting frontend, retrieval, embeddings, databases, and model services."
    },
    {
      title: "Hugging Face — RAG Evaluation",
      url:
        "https://huggingface.co/learn/cookbook/rag_evaluation",
      relevance:
        "Evaluation datasets, groundedness, relevance, and LLM-assisted evaluation."
    },
    {
      title: "Hugging Face — Agents Course",
      url:
        "https://huggingface.co/learn/agents-course/unit1/introduction",
      relevance:
        "Agents, tools, actions, observations, and agent workflows."
    }
  ],

  importantPrinciples: [
    "A model is not an application.",
    "Fluent output is not automatically correct output.",
    "Retrieval can provide external knowledge but still requires evaluation.",
    "Tools should be controlled by application-level permissions.",
    "Evaluation should happen throughout the development lifecycle.",
    "Security should not depend entirely on model behavior.",
    "The simplest architecture that satisfies the requirements is often easier to maintain.",
    "Generative AI engineering combines machine learning with software engineering."
  ],

  completionCriteria: [
    "Complete all eight lessons.",
    "Complete the module practice.",
    "Complete the mathematical exercises.",
    "Draw the major architecture diagrams.",
    "Complete the Module 1 project.",
    "Answer the interview questions.",
    "Explain the complete GenAI application architecture without notes."
  ],

  finalMessage:
    "Completing this module means you have built the foundation required to move from simply using AI models toward engineering complete Generative AI applications."
};

export default about;

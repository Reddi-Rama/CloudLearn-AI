/*
 * CloudLearn — Artificial Intelligence Learning Path
 */

export interface LearningPathTopicGroup {
  title: string;
  items: string[];
}

export interface LearningPathStage {
  id: number;
  title: string;

  topics: string[];

  topicDetails: LearningPathTopicGroup[];

  understanding?: string;
  practice?: string;

  project: string;
  achievement?: string;
}

export interface CertificationGuidance {
  description: string[];
  priority: string[];
  conclusion: string;
}

export interface FinalCapstone {
  title: string;
  description: string;

  components: LearningPathTopicGroup[];

  outcome: string;
}

export interface LearningPathContent {
  title: string;
  subtitle: string;
  description: string;

  overview: string;
  goal: string;

  totalStages: number;

  stages: LearningPathStage[];

  studentProgression: string[];
  studentProgressionNote: string;

  projectProgression: string[];
  projectProgressionNote: string;

  certificationGuidance: CertificationGuidance;

  finalCapstone: FinalCapstone;

  achievementPath: string[];

  learningPhilosophy: string[];

  learningPhilosophyDescription: string;
}

/* ============================================================
   ARTIFICIAL INTELLIGENCE LEARNING PATH
   ============================================================ */

const artificialIntelligencePath: LearningPathContent = {
  /* ============================================================
     PATH INFORMATION
     ============================================================ */

  title: "Artificial Intelligence Learning Path",

  subtitle:
    "From AI Foundations to Modern AI Engineering",

  description:
    "A structured learning path that takes students from the fundamentals of Artificial Intelligence to building, evaluating, deploying, and engineering modern AI systems.",

  overview:
    "The path is designed progressively. Students first understand how AI works, then learn mathematics, data, machine learning, deep learning, computer vision, natural language processing, generative AI, LLMs, RAG, AI agents, deployment, evaluation, safety, and advanced AI engineering.",

  goal:
    "The goal is not to make students memorize algorithms. The goal is to help them understand why AI methods work, when to use them, how to build them, and how to turn them into reliable real-world applications.",

  totalStages: 23,

  /* ============================================================
     STAGES
     ============================================================ */

  stages: [
    {
      id: 1,

      title: "AI Foundations",

      topics: [
        "What Is Artificial Intelligence",
        "AI History & Evolution",
        "AI Problem Solving",
        "Intelligent Agents",
        "AI Applications",
      ],

      topicDetails: [
        {
          title: "AI Foundations",
          items: [
            "What Is Artificial Intelligence",
            "AI History & Evolution",
            "AI Problem Solving",
            "Intelligent Agents",
            "AI Applications",
          ],
        },
      ],

      understanding:
        "Learn what Artificial Intelligence means, how AI systems solve problems, and where AI is used in the real world.",

      practice:
        "Explore simple decision-making systems and understand the difference between traditional programming and AI-based approaches.",

      project: "Build a Rule-Based Intelligent Assistant.",

      achievement: "AI Foundations",
    },

    {
      id: 2,

      title: "Programming for AI",

      topics: [
        "Python Fundamentals",
        "Functions & Modules",
        "Data Structures",
        "NumPy",
        "Pandas",
      ],

      topicDetails: [
        {
          title: "Programming for AI",
          items: [
            "Python Fundamentals",
            "Functions & Modules",
            "Data Structures",
            "NumPy",
            "Pandas",
          ],
        },
      ],

      understanding:
        "Build the programming foundation required for working with AI models and data.",

      practice:
        "Work with Python programs, numerical data, datasets, functions, and reusable modules.",

      project: "Build a Data Analysis Application.",

      achievement: "AI Programming Foundations",
    },

    {
      id: 3,

      title: "Mathematics for AI",

      topics: [
        "Linear Algebra",
        "Probability",
        "Statistics",
        "Calculus Fundamentals",
        "Mathematical Optimization",
      ],

      topicDetails: [
        {
          title: "Mathematics for AI",
          items: [
            "Linear Algebra",
            "Probability",
            "Statistics",
            "Calculus Fundamentals",
            "Mathematical Optimization",
          ],
        },
      ],

      understanding:
        "Learn the mathematical ideas behind data representation, probability, model training, and optimization.",

      practice:
        "Apply mathematical concepts to simple AI and machine learning problems.",

      project: "Build a Mathematical AI Model.",

      achievement: "AI Mathematics Foundations",
    },

    {
      id: 4,

      title: "Data for AI",

      topics: [
        "Data Collection",
        "Data Cleaning",
        "Data Exploration",
        "Feature Engineering",
        "Data Visualization",
      ],

      topicDetails: [
        {
          title: "Data for AI",
          items: [
            "Data Collection",
            "Data Cleaning",
            "Data Exploration",
            "Feature Engineering",
            "Data Visualization",
          ],
        },
      ],

      understanding:
        "Learn why the quality and structure of data strongly influence AI system performance.",

      practice:
        "Clean datasets, explore patterns, prepare features, and visualize important information.",

      project: "Build an End-to-End Data Preparation Pipeline.",

      achievement: "AI Data Foundations",
    },

    {
      id: 5,

      title: "Machine Learning Foundations",

      topics: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Training & Validation",
        "Features & Labels",
        "Model Evaluation",
      ],

      topicDetails: [
        {
          title: "Machine Learning",
          items: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Training & Validation",
            "Features & Labels",
            "Model Evaluation",
          ],
        },
      ],

      understanding:
        "Learn how machines learn patterns from data instead of relying only on explicitly programmed rules.",

      practice:
        "Train simple models and compare their results using appropriate evaluation methods.",

      project: "Build a Machine Learning Prediction System.",

      achievement: "Machine Learning Foundations",
    },

    {
      id: 6,

      title: "Supervised Learning",

      topics: [
        "Linear Regression",
        "Logistic Regression",
        "Decision Trees",
        "Random Forests",
        "Ensemble Methods",
      ],

      topicDetails: [
        {
          title: "Supervised Learning",
          items: [
            "Linear Regression",
            "Logistic Regression",
            "Decision Trees",
            "Random Forests",
            "Ensemble Methods",
          ],
        },
      ],

      understanding:
        "Learn how models use labeled examples to make predictions.",

      practice:
        "Compare different supervised learning approaches and understand their strengths and limitations.",

      project: "Build a Real-World Prediction Application.",

      achievement: "Supervised Machine Learning",
    },

    {
      id: 7,

      title: "Unsupervised Learning",

      topics: [
        "Clustering",
        "K-Means",
        "Dimensionality Reduction",
        "PCA",
        "Anomaly Detection",
      ],

      topicDetails: [
        {
          title: "Unsupervised Learning",
          items: [
            "Clustering",
            "K-Means",
            "Dimensionality Reduction",
            "PCA",
            "Anomaly Detection",
          ],
        },
      ],

      understanding:
        "Learn how AI can discover patterns and structures when labeled examples are unavailable.",

      practice:
        "Group data, reduce dimensionality, and identify unusual patterns.",

      project: "Build a Customer Segmentation System.",

      achievement: "Unsupervised Machine Learning",
    },

    {
      id: 8,

      title: "Machine Learning Engineering",

      topics: [
        "Feature Pipelines",
        "Hyperparameter Tuning",
        "Cross-Validation",
        "Model Selection",
        "Reproducibility",
      ],

      topicDetails: [
        {
          title: "ML Engineering",
          items: [
            "Feature Pipelines",
            "Hyperparameter Tuning",
            "Cross-Validation",
            "Model Selection",
            "Reproducibility",
          ],
        },
      ],

      understanding:
        "Move beyond training individual models and learn how to build repeatable machine learning workflows.",

      practice:
        "Create reproducible experiments and improve models systematically.",

      project: "Build a Production-Ready ML Pipeline.",

      achievement: "Machine Learning Engineering",
    },

    {
      id: 9,

      title: "Deep Learning Foundations",

      topics: [
        "Neural Networks",
        "Perceptrons",
        "Activation Functions",
        "Loss Functions",
        "Backpropagation",
      ],

      topicDetails: [
        {
          title: "Deep Learning Foundations",
          items: [
            "Neural Networks",
            "Perceptrons",
            "Activation Functions",
            "Loss Functions",
            "Backpropagation",
          ],
        },
      ],

      understanding:
        "Learn how neural networks represent patterns and how training adjusts their parameters.",

      practice:
        "Implement and train simple neural networks.",

      project: "Build a Neural Network from Scratch.",

      achievement: "Deep Learning Foundations",
    },

    {
      id: 10,

      title: "Deep Learning",

      topics: [
        "Optimization",
        "Regularization",
        "CNNs",
        "RNNs",
        "Transfer Learning",
      ],

      topicDetails: [
        {
          title: "Deep Learning",
          items: [
            "Optimization",
            "Regularization",
            "CNNs",
            "RNNs",
            "Transfer Learning",
          ],
        },
      ],

      understanding:
        "Learn how deeper neural architectures are trained and applied to different types of data.",

      practice:
        "Train deep learning models and understand when different architectures are appropriate.",

      project: "Build a Deep Learning Application.",

      achievement: "Deep Learning Engineer",
    },

    {
      id: 11,

      title: "Computer Vision",

      topics: [
        "Image Processing",
        "Image Classification",
        "Object Detection",
        "Image Segmentation",
        "Vision Models",
      ],

      topicDetails: [
        {
          title: "Computer Vision",
          items: [
            "Image Processing",
            "Image Classification",
            "Object Detection",
            "Image Segmentation",
            "Vision Models",
          ],
        },
      ],

      understanding:
        "Learn how AI systems interpret and extract information from images.",

      practice:
        "Prepare image datasets, train vision models, and evaluate their predictions.",

      project: "Build a Computer Vision Application.",

      achievement: "Computer Vision Engineer",
    },

    {
      id: 12,

      title: "Natural Language Processing",

      topics: [
        "Text Processing",
        "Tokenization",
        "Text Classification",
        "Word Embeddings",
        "Sequence Models",
      ],

      topicDetails: [
        {
          title: "Natural Language Processing",
          items: [
            "Text Processing",
            "Tokenization",
            "Text Classification",
            "Word Embeddings",
            "Sequence Models",
          ],
        },
      ],

      understanding:
        "Learn how computers process and represent human language.",

      practice:
        "Process text, create representations, classify language, and build basic NLP systems.",

      project: "Build an NLP Text Intelligence System.",

      achievement: "NLP Foundations",
    },

    {
      id: 13,

      title: "Transformers & Attention",

      topics: [
        "Attention Mechanism",
        "Self-Attention",
        "Transformer Architecture",
        "Encoder & Decoder",
        "Modern Language Models",
      ],

      topicDetails: [
        {
          title: "Transformers",
          items: [
            "Attention Mechanism",
            "Self-Attention",
            "Transformer Architecture",
            "Encoder & Decoder",
            "Modern Language Models",
          ],
        },
      ],

      understanding:
        "Learn the architecture behind many modern language and multimodal AI systems.",

      practice:
        "Understand attention, transformer components, and how information flows through transformer models.",

      project: "Build a Transformer-Based NLP Application.",

      achievement: "Transformer AI Engineering",
    },

    {
      id: 14,

      title: "Generative AI",

      topics: [
        "Generative Models",
        "Large Language Models",
        "Prompt Engineering",
        "AI Application Patterns",
        "Multimodal AI",
      ],

      topicDetails: [
        {
          title: "Generative AI",
          items: [
            "Generative Models",
            "Large Language Models",
            "Prompt Engineering",
            "AI Application Patterns",
            "Multimodal AI",
          ],
        },
      ],

      understanding:
        "Learn how modern AI systems generate text, images, code, and other forms of content.",

      practice:
        "Design prompts and build applications around generative models.",

      project: "Build a Generative AI Application.",

      achievement: "Generative AI Developer",
    },

    {
      id: 15,

      title: "LLM Engineering",

      topics: [
        "Tokenization",
        "Embeddings",
        "Vector Representations",
        "LLM Inference & APIs",
        "Context Management",
      ],

      topicDetails: [
        {
          title: "LLM Engineering",
          items: [
            "Tokenization",
            "Embeddings",
            "Vector Representations",
            "LLM Inference & APIs",
            "Context Management",
          ],
        },
      ],

      understanding:
        "Move from simply using an LLM to understanding the components required to build reliable LLM-powered applications.",

      practice:
        "Work with tokens, embeddings, model APIs, context, and inference workflows.",

      project: "Build an LLM-Powered Application.",

      achievement: "LLM Engineer",
    },

    {
      id: 16,

      title: "Retrieval-Augmented Generation",

      topics: [
        "Document Processing",
        "Chunking Strategies",
        "Embeddings",
        "Vector Databases",
        "Semantic Search",
      ],

      topicDetails: [
        {
          title: "RAG",
          items: [
            "Document Processing",
            "Chunking Strategies",
            "Embeddings",
            "Vector Databases",
            "Semantic Search",
          ],
        },
      ],

      understanding:
        "Learn how AI applications can retrieve relevant external information before generating an answer.",

      practice:
        "Process documents, create embeddings, store vectors, perform semantic search, and connect retrieval with generation.",

      project: "Build a Knowledge-Based AI Assistant.",

      achievement: "RAG Engineer",
    },

    {
      id: 17,

      title: "AI Agents & Tool Calling",

      topics: [
        "AI Agents",
        "Tool Calling",
        "Planning",
        "Memory",
        "Agent Workflows",
      ],

      topicDetails: [
        {
          title: "AI Agents",
          items: [
            "AI Agents",
            "Tool Calling",
            "Planning",
            "Memory",
            "Agent Workflows",
          ],
        },
      ],

      understanding:
        "Learn how AI systems can use tools and structured workflows to perform multi-step tasks.",

      practice:
        "Design controlled agent workflows and connect models with useful tools.",

      project: "Build an AI Agent System.",

      achievement: "AI Agent Engineer",
    },

    {
      id: 18,

      title: "Fine-Tuning & Model Adaptation",

      topics: [
        "Fine-Tuning Concepts",
        "Dataset Preparation",
        "LoRA",
        "QLoRA",
        "Model Evaluation",
      ],

      topicDetails: [
        {
          title: "Model Adaptation",
          items: [
            "Fine-Tuning Concepts",
            "Dataset Preparation",
            "LoRA",
            "QLoRA",
            "Model Evaluation",
          ],
        },
      ],

      understanding:
        "Learn when adapting a model is useful and how parameter-efficient approaches can reduce the cost and complexity of model customization.",

      practice:
        "Prepare datasets, understand training configurations, and evaluate adapted models.",

      project: "Build an Adapted Language Model.",

      achievement: "AI Model Adaptation",
    },

    {
      id: 19,

      title: "AI Evaluation & Guardrails",

      topics: [
        "Model Evaluation",
        "Prompt Evaluation",
        "RAG Evaluation",
        "Safety & Guardrails",
        "Reliability",
      ],

      topicDetails: [
        {
          title: "AI Evaluation",
          items: [
            "Model Evaluation",
            "Prompt Evaluation",
            "RAG Evaluation",
            "Safety & Guardrails",
            "Reliability",
          ],
        },
      ],

      understanding:
        "Learn that a successful AI application must be evaluated for quality, reliability, and safety rather than judged only by whether it produces an output.",

      practice:
        "Create evaluation criteria, test AI behavior, measure system quality, and implement appropriate guardrails.",

      project: "Build an Evaluated AI System.",

      achievement: "AI Evaluation & Safety",
    },

    {
      id: 20,

      title: "AI Deployment & MLOps",

      topics: [
        "Model Serving",
        "APIs",
        "Containers",
        "Monitoring",
        "MLOps",
      ],

      topicDetails: [
        {
          title: "AI Deployment",
          items: [
            "Model Serving",
            "APIs",
            "Containers",
            "Monitoring",
            "MLOps",
          ],
        },
      ],

      understanding:
        "Learn how AI models and applications move from experimentation into usable services.",

      practice:
        "Package models, expose them through APIs, deploy services, and monitor their behavior.",

      project: "Build a Deployed AI Service.",

      achievement: "AI Deployment Engineer",
    },

    {
      id: 21,

      title: "AI System Design",

      topics: [
        "AI Architecture",
        "Data & Model Pipelines",
        "Scalability",
        "Cost Optimization",
        "Reliability",
      ],

      topicDetails: [
        {
          title: "AI System Design",
          items: [
            "AI Architecture",
            "Data & Model Pipelines",
            "Scalability",
            "Cost Optimization",
            "Reliability",
          ],
        },
      ],

      understanding:
        "Learn how to design complete AI systems instead of focusing only on individual models.",

      practice:
        "Make architecture decisions involving data, models, APIs, infrastructure, scalability, reliability, and cost.",

      project: "Design a Production AI Architecture.",

      achievement: "AI System Designer",
    },

    {
      id: 22,

      title: "Advanced AI Engineering",

      topics: [
        "Multimodal AI",
        "Advanced Retrieval",
        "AI Infrastructure",
        "Distributed AI Systems",
        "Emerging AI Architectures",
      ],

      topicDetails: [
        {
          title: "Advanced AI",
          items: [
            "Multimodal AI",
            "Advanced Retrieval",
            "AI Infrastructure",
            "Distributed AI Systems",
            "Emerging AI Architectures",
          ],
        },
      ],

      understanding:
        "Explore advanced AI engineering areas and learn how modern AI systems are evolving beyond standalone models.",

      practice:
        "Combine multiple AI capabilities into larger AI systems and evaluate their engineering trade-offs.",

      project: "Build an Advanced AI Platform.",

      achievement: "Advanced AI Engineer",
    },

    {
      id: 23,

      title: "AI Engineer & Architect",

      topics: [
        "Enterprise AI Architecture",
        "AI Product Engineering",
        "AI Governance",
        "Technical Leadership",
        "Enterprise AI Strategy",
      ],

      topicDetails: [
        {
          title: "AI Engineer & Architect",
          items: [
            "Enterprise AI Architecture",
            "AI Product Engineering",
            "AI Governance",
            "Technical Leadership",
            "Enterprise AI Strategy",
          ],
        },
      ],

      understanding:
        "Bring together AI, software engineering, data, infrastructure, evaluation, security, and product thinking to design enterprise AI systems.",

      practice:
        "Make architectural and engineering decisions for large AI applications and platforms.",

      project: "Build an Enterprise AI Platform.",

      achievement: "CloudLearn Certified AI Engineer & Architect",
    },
  ],

  /* ============================================================
     HOW THE STUDENT PROGRESSES
     ============================================================ */

  studentProgression: [
    "Understand AI",
    "Learn Python",
    "Learn Mathematics",
    "Work with Data",
    "Learn Machine Learning",
    "Master Supervised Learning",
    "Master Unsupervised Learning",
    "Learn ML Engineering",
    "Learn Neural Networks",
    "Learn Deep Learning",
    "Explore Computer Vision",
    "Learn NLP",
    "Understand Transformers",
    "Learn Generative AI",
    "Master LLM Engineering",
    "Build RAG Systems",
    "Build AI Agents",
    "Learn Fine-Tuning",
    "Evaluate & Secure AI",
    "Deploy AI Systems",
    "Design Production AI",
    "Become an AI Engineer",
    "Progress Toward AI Architect",
  ],

  studentProgressionNote:
    "Students should not try to learn every AI topic simultaneously. The roadmap deliberately moves from fundamentals to increasingly advanced systems.",

  /* ============================================================
     PROJECT PROGRESSION
     ============================================================ */

  projectProgression: [
    "Rule-Based Intelligent Assistant",
    "Data Analysis Application",
    "Mathematical AI Model",
    "Data Preparation Pipeline",
    "Machine Learning Prediction System",
    "Real-World Prediction Application",
    "Customer Segmentation System",
    "Production ML Pipeline",
    "Neural Network from Scratch",
    "Deep Learning Application",
    "Computer Vision Application",
    "NLP Text Intelligence System",
    "Transformer-Based NLP Application",
    "Generative AI Application",
    "LLM-Powered Application",
    "Knowledge-Based AI Assistant",
    "AI Agent System",
    "Adapted Language Model",
    "Evaluated AI System",
    "Deployed AI Service",
    "Production AI Architecture",
    "Advanced AI Platform",
    "Enterprise AI Capstone",
  ],

  projectProgressionNote:
    "The projects begin with simple AI logic and gradually move toward production-oriented AI systems.",

  /* ============================================================
     CERTIFICATION GUIDANCE
     ============================================================ */

  certificationGuidance: {
    description: [
      "CloudLearn provides achievement credentials throughout the learning path so students can demonstrate their progress.",

      "External certifications can be recommended according to the learner's target role and specialization.",

      "Students do not need to collect every certification.",
    ],

    priority: [
      "Strong fundamentals",
      "Practical projects",
      "AI engineering skills",
      "Evaluation ability",
      "Portfolio",
    ],

    conclusion:
      "Certifications support the journey but do not replace practical AI ability.",
  },

  /* ============================================================
     FINAL CAPSTONE
     ============================================================ */

  finalCapstone: {
    title: "Enterprise AI Platform",

    description:
      "The final project combines the major concepts learned throughout the roadmap.",

    components: [
      {
        title: "AI Product",
        items: [
          "Requirements",
          "User Experience",
          "AI Use Cases",
        ],
      },

      {
        title: "Data",
        items: [
          "Data Collection",
          "Data Processing",
          "Data Storage",
          "Data Quality",
        ],
      },

      {
        title: "Models",
        items: [
          "Model Selection",
          "LLM Integration",
          "Embeddings",
          "Model Adaptation",
        ],
      },

      {
        title: "Knowledge",
        items: [
          "Document Processing",
          "Chunking",
          "Vector Database",
          "Semantic Retrieval",
        ],
      },

      {
        title: "AI Agents",
        items: [
          "Tool Calling",
          "Planning",
          "Memory",
          "Agent Workflows",
        ],
      },

      {
        title: "Evaluation",
        items: [
          "Model Evaluation",
          "RAG Evaluation",
          "Reliability",
          "Guardrails",
        ],
      },

      {
        title: "Engineering",
        items: [
          "APIs",
          "Testing",
          "Deployment",
          "Monitoring",
        ],
      },

      {
        title: "Production",
        items: [
          "Scalability",
          "Security",
          "Cost Optimization",
          "Reliability",
        ],
      },
    ],

    outcome:
      "The learner finishes by demonstrating the ability to design, build, evaluate, deploy, secure, monitor, and improve a modern AI system.",
  },

  /* ============================================================
     ACHIEVEMENT PATH
     ============================================================ */

  achievementPath: [
    "AI Foundations",
    "AI Programming Foundations",
    "AI Mathematics Foundations",
    "AI Data Foundations",
    "Machine Learning Foundations",
    "Supervised Machine Learning",
    "Unsupervised Machine Learning",
    "Machine Learning Engineering",
    "Deep Learning Foundations",
    "Deep Learning Engineer",
    "Computer Vision Engineer",
    "NLP Foundations",
    "Transformer AI Engineering",
    "Generative AI Developer",
    "LLM Engineer",
    "RAG Engineer",
    "AI Agent Engineer",
    "AI Model Adaptation",
    "AI Evaluation & Safety",
    "AI Deployment Engineer",
    "AI System Designer",
    "Advanced AI Engineer",
    "CloudLearn Certified AI Engineer & Architect",
  ],

  /* ============================================================
     LEARNING PHILOSOPHY
     ============================================================ */

  learningPhilosophy: [
    "Understand",
    "Learn",
    "Practice",
    "Experiment",
    "Build",
    "Evaluate",
    "Deploy",
    "Monitor",
    "Improve",
    "Architect",
  ],

  learningPhilosophyDescription:
    "The objective is not simply to teach students how to use AI tools. The objective is to develop AI engineers who understand the foundations behind AI, machine learning, deep learning, transformers, generative AI, LLMs, RAG, agents, evaluation, deployment, and AI system architecture.",
};

export default artificialIntelligencePath;
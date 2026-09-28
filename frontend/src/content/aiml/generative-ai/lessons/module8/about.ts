const aboutModule8 = {
  id: "about",
  moduleId: "module8",

  title: "About Module 8",
  subtitle: "Multimodal Generative AI",

  description:
    "This module teaches how modern generative AI systems understand and generate information across text, images, audio and video. It connects multimodal representations, architectures, prompting, generation, retrieval, agents, evaluation and production engineering.",

  overview:
    "Multimodal Generative AI extends language-based generative systems beyond text. Students learn how different modalities are represented, aligned and processed, how multimodal models reason across information types, and how to engineer reliable multimodal applications.",

  whyThisModuleMatters: [
    "Real-world information is rarely text-only.",
    "Modern AI applications increasingly combine text, images, documents, audio and video.",
    "Multimodal systems require different representation and architecture strategies.",
    "Production applications need grounding, safety, evaluation and cost control.",
    "Multimodal reasoning is becoming an important application-engineering skill."
  ],

  prerequisites: [
    "Generative AI fundamentals",
    "Basic neural-network concepts",
    "Transformer fundamentals",
    "Embeddings and vector representations",
    "Basic Python programming",
    "Basic API and application-development knowledge"
  ],

  learningOutcomes: [
    "Explain what multimodal generative AI is.",
    "Identify the major modalities used by modern AI systems.",
    "Explain how text, image, audio and video data are represented.",
    "Understand modality encoders and projection layers.",
    "Explain multimodal fusion and cross-attention.",
    "Understand multimodal transformer architectures.",
    "Design effective multimodal prompts.",
    "Understand image generation and editing workflows.",
    "Understand speech, audio and video generation systems.",
    "Design multimodal RAG systems.",
    "Understand multimodal agents and tool use.",
    "Evaluate multimodal systems for accuracy and grounding.",
    "Identify multimodal safety and privacy risks.",
    "Design production-ready multimodal architectures."
  ],

  lessonMap: [
    {
      lesson: 1,
      title: "Multimodal Generative AI Foundations",
      focus: "Foundations of multimodal AI and the relationship between different modalities."
    },
    {
      lesson: 2,
      title: "Multimodal Data & Representations",
      focus: "Representations, embeddings, alignment and multimodal fusion."
    },
    {
      lesson: 3,
      title: "Multimodal Model Architectures",
      focus: "Encoders, projection layers, cross-attention and multimodal transformers."
    },
    {
      lesson: 4,
      title: "Multimodal Prompting & Instruction Following",
      focus: "Designing prompts for visual and multimodal reasoning."
    },
    {
      lesson: 5,
      title: "Image Generation, Editing & Diffusion",
      focus: "Diffusion-based image generation and image editing workflows."
    },
    {
      lesson: 6,
      title: "Speech, Audio & Video Generative AI",
      focus: "Speech, audio and video understanding and generation."
    },
    {
      lesson: 7,
      title: "Multimodal RAG & Grounded Multimodal Reasoning",
      focus: "Retrieving and grounding information across multiple modalities."
    },
    {
      lesson: 8,
      title: "Multimodal Agents & Tool Use",
      focus: "Agents that perceive multimodal information and operate tools."
    },
    {
      lesson: 9,
      title: "Multimodal Evaluation, Safety & Production Systems",
      focus: "Evaluation, grounding, safety, privacy, observability and production reliability."
    },
    {
      lesson: 10,
      title: "Multimodal AI Capstone & Production Architecture",
      focus: "Designing an end-to-end multimodal AI application."
    }
  ],

  conceptMap: {
    foundations: [
      "Multimodal AI",
      "Modalities",
      "Representation",
      "Embeddings",
      "Alignment"
    ],

    architectures: [
      "Modality Encoders",
      "Projection Layers",
      "Fusion",
      "Cross-Attention",
      "Multimodal Transformers",
      "Unified Tokens"
    ],

    prompting: [
      "Multimodal Instructions",
      "Visual Grounding",
      "Structured Outputs",
      "Prompt Chaining",
      "Prompt Security"
    ],

    generation: [
      "Diffusion",
      "Image Generation",
      "Image Editing",
      "Speech Generation",
      "Audio Generation",
      "Video Generation"
    ],

    retrieval: [
      "Multimodal Embeddings",
      "Cross-Modal Retrieval",
      "Multimodal RAG",
      "Grounding",
      "Citations"
    ],

    agents: [
      "Perception",
      "Planning",
      "Tool Calling",
      "Multimodal Memory",
      "Agent State"
    ],

    evaluation: [
      "Accuracy",
      "Grounding",
      "Hallucination",
      "Safety",
      "Robustness",
      "Latency",
      "Cost"
    ],

    production: [
      "Security",
      "Privacy",
      "Observability",
      "Caching",
      "Fallbacks",
      "Scalability"
    ]
  },

  mathematics: [
    {
      topic: "Vector Representation",
      formula: "z = f(x)"
    },
    {
      topic: "Cosine Similarity",
      formula: "cos(x,y) = (x · y) / (||x|| ||y||)"
    },
    {
      topic: "Attention",
      formula: "Attention(Q,K,V) = softmax(QKᵀ / √d_k)V"
    },
    {
      topic: "Projection",
      formula: "z' = Wz + b"
    },
    {
      topic: "Attention Complexity",
      formula: "O(n²d)"
    },
    {
      topic: "Word Error Rate",
      formula: "WER = (S + D + I) / N"
    },
    {
      topic: "Latency",
      formula: "T_total = Σ T_stage"
    },
    {
      topic: "Cost",
      formula: "Cost_total = Cost_input + Cost_inference + Cost_output + Cost_storage"
    }
  ],

  programmingSkills: [
    "Python",
    "TypeScript",
    "Vector operations",
    "Embedding processing",
    "API integration",
    "File and media processing",
    "Structured outputs",
    "Evaluation scripts",
    "Logging and observability"
  ],

  architectureSkills: [
    "Multimodal pipelines",
    "Encoder-based architectures",
    "Cross-attention architectures",
    "Multimodal RAG",
    "Multimodal agents",
    "Model routing",
    "Production API design",
    "Caching",
    "Fallback systems",
    "Observability"
  ],

  securitySkills: [
    "Input validation",
    "Prompt injection defense",
    "Untrusted media handling",
    "Privacy-aware processing",
    "Output validation",
    "Access control",
    "Safe logging"
  ],

  evaluationSkills: [
    "Golden datasets",
    "Regression testing",
    "Grounding evaluation",
    "Hallucination analysis",
    "Human evaluation",
    "Automated evaluation",
    "Adversarial testing",
    "Latency measurement",
    "Cost monitoring"
  ],

  assessmentFocus: [
    "Multimodal concepts",
    "Representation and embeddings",
    "Model architectures",
    "Multimodal prompting",
    "Image generation",
    "Audio and video AI",
    "Multimodal RAG",
    "Multimodal agents",
    "Evaluation and safety",
    "Production architecture"
  ],

  completionCriteria: [
    "Complete all 10 lessons.",
    "Complete the module practice activities.",
    "Complete the module project.",
    "Demonstrate understanding of multimodal representations.",
    "Explain major multimodal architectures.",
    "Implement at least one multimodal processing workflow.",
    "Evaluate a multimodal application using defined criteria.",
    "Identify major multimodal security and privacy risks.",
    "Design a production-oriented multimodal architecture."
  ],

  finalOutcome:
    "After completing Module 8, the learner should be able to reason about multimodal AI systems from raw data representation through model architecture, prompting, retrieval, agents, evaluation and production deployment.",

  nextStep:
    "Continue to Module 9 — LLM Application Engineering to move from multimodal model capabilities toward complete production-grade AI application engineering."
};

export default aboutModule8;
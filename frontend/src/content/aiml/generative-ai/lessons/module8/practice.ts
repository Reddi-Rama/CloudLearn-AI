const module8Practice = {
  id: "practice",
  moduleId: "module8",
  title: "Module 8 Practice",
  subtitle: "Multimodal Generative AI — Practice, Engineering, Evaluation & System Design",
  description:
    "Comprehensive practice for Multimodal Generative AI covering multimodal prompting, image generation, audio, video, multimodal RAG, agents, evaluation, safety and production architecture.",

  objectives: [
    "Understand multimodal AI architectures.",
    "Design effective multimodal prompts.",
    "Understand image generation and editing pipelines.",
    "Understand audio and video generative AI.",
    "Build multimodal retrieval workflows.",
    "Design multimodal RAG systems.",
    "Design multimodal agents and tool workflows.",
    "Evaluate multimodal AI systems.",
    "Identify multimodal safety and privacy risks.",
    "Design production-ready multimodal applications."
  ],

  conceptMap: {
    title: "Module 8 Concept Map",
    branches: [
      {
        title: "Multimodal AI",
        children: [
          "Text",
          "Image",
          "Audio",
          "Video",
          "Documents"
        ]
      },
      {
        title: "Generation",
        children: [
          "Image Generation",
          "Image Editing",
          "Speech Generation",
          "Audio Generation",
          "Video Generation"
        ]
      },
      {
        title: "Understanding",
        children: [
          "Vision",
          "OCR",
          "Speech Recognition",
          "Video Understanding",
          "Multimodal Reasoning"
        ]
      },
      {
        title: "Retrieval",
        children: [
          "Multimodal Embeddings",
          "Vector Search",
          "Cross-Modal Retrieval",
          "Multimodal RAG",
          "Grounding"
        ]
      },
      {
        title: "Agents",
        children: [
          "Perception",
          "Planning",
          "Tool Calling",
          "Memory",
          "Action"
        ]
      },
      {
        title: "Production",
        children: [
          "Evaluation",
          "Safety",
          "Privacy",
          "Observability",
          "Cost",
          "Reliability"
        ]
      }
    ]
  },

  sections: [
    {
      id: "foundation-practice",
      title: "Part 1 — Multimodal Foundations",
      questions: [
        "What is multimodal AI?",
        "Why are multiple modalities useful?",
        "What is the difference between multimodal input and multimodal generation?",
        "What is cross-modal understanding?",
        "What is multimodal representation?",
        "What is visual grounding?",
        "What is temporal reasoning?",
        "Why is modality metadata important?"
      ]
    },

    {
      id: "prompting-practice",
      title: "Part 2 — Multimodal Prompting",
      questions: [
        "What makes a multimodal prompt effective?",
        "Why should the task be explicitly defined?",
        "How can evidence and uncertainty be represented?",
        "How should multiple images be compared?",
        "How can charts and tables be analyzed?",
        "How can multimodal prompt injection occur?",
        "How should missing information be handled?",
        "Why are structured outputs useful?"
      ]
    },

    {
      id: "image-practice",
      title: "Part 3 — Image Generation & Editing",
      questions: [
        "Explain the basic diffusion process.",
        "What happens during forward diffusion?",
        "What happens during reverse denoising?",
        "What is conditioning?",
        "What is classifier-free guidance?",
        "What is a random seed?",
        "What is image-to-image generation?",
        "What is inpainting?",
        "What is outpainting?",
        "What is denoising strength?"
      ]
    },

    {
      id: "audio-practice",
      title: "Part 4 — Audio & Speech",
      questions: [
        "What is a waveform?",
        "What is sampling?",
        "What is a spectrogram?",
        "What is an STFT?",
        "What is a mel spectrogram?",
        "What is speech recognition?",
        "What is speaker diarization?",
        "What is text-to-speech?",
        "How can audio generation be evaluated?"
      ]
    },

    {
      id: "video-practice",
      title: "Part 5 — Video AI",
      questions: [
        "Why is video more complex than image?",
        "What is frame sampling?",
        "What is temporal reasoning?",
        "How does video question answering work?",
        "How can video be summarized?",
        "What challenges exist in video generation?",
        "Why is audio-video synchronization important?"
      ]
    },

    {
      id: "rag-practice",
      title: "Part 6 — Multimodal RAG",
      questions: [
        "What is multimodal RAG?",
        "Why can text-only RAG fail?",
        "What is cross-modal retrieval?",
        "How can images be indexed?",
        "How can video segments be indexed?",
        "Why are timestamps important?",
        "What is multimodal context construction?",
        "What is evidence grounding?",
        "How should multimodal retrieval be evaluated?"
      ]
    },

    {
      id: "agent-practice",
      title: "Part 7 — Multimodal Agents",
      questions: [
        "What is a multimodal agent?",
        "What is the perception-action loop?",
        "What is tool calling?",
        "Why should tool execution be controlled?",
        "What is agent memory?",
        "How can multimodal RAG support agents?",
        "What is agent loop detection?",
        "What is least privilege?",
        "How should high-impact tools be protected?"
      ]
    },

    {
      id: "evaluation-practice",
      title: "Part 8 — Evaluation",
      questions: [
        "Why is multimodal evaluation difficult?",
        "What is perception evaluation?",
        "What is retrieval evaluation?",
        "What is grounding evaluation?",
        "What is multimodal hallucination?",
        "How is WER calculated?",
        "How can video understanding be evaluated?",
        "What is a golden dataset?",
        "Why is human evaluation useful?",
        "What is red teaming?"
      ]
    },

    {
      id: "production-practice",
      title: "Part 9 — Production Engineering",
      questions: [
        "What are the main components of a production multimodal architecture?",
        "Why is input validation important?",
        "Why should model outputs be validated?",
        "How can multimodal systems reduce latency?",
        "When should asynchronous processing be used?",
        "How can caching reduce cost?",
        "How should failures be handled?",
        "What should be monitored?",
        "How can privacy be protected?"
      ]
    }
  ],

  mathematicalPractice: [
    {
      title: "Cosine Similarity",
      formula: "cos(q,x) = (q · x) / (||q|| ||x||)",
      task:
        "Calculate cosine similarity for q = [1,2] and x = [2,1]."
    },
    {
      title: "Multimodal Ranking",
      formula:
        "Score = αT + βV + γM",
      task:
        "Calculate a ranking score when T = 0.8, V = 0.7, M = 0.9, α = 0.5, β = 0.4 and γ = 0.1."
    },
    {
      title: "Speech Recognition Error",
      formula:
        "WER = (S + D + I) / N",
      task:
        "Calculate WER for S = 3, D = 2, I = 1 and N = 40."
    },
    {
      title: "Cache Hit Rate",
      formula:
        "Hit Rate = Hits / (Hits + Misses)",
      task:
        "Calculate cache hit rate for 850 hits and 150 misses."
    },
    {
      title: "Multimodal Cost",
      formula:
        "C_total = C_model + C_processing + C_storage + C_tools",
      task:
        "Calculate total workflow cost using a set of hypothetical component costs."
    },
    {
      title: "Multimodal Latency",
      formula:
        "T_total = T_input + T_retrieval + T_model + T_tools",
      task:
        "Calculate total latency and identify the largest contributor."
    }
  ],

  comparisons: [
    {
      title: "Text AI vs Multimodal AI",
      rows: [
        ["Input", "Primarily text", "Text + image + audio + video"],
        ["Representation", "Text tokens", "Multiple representations"],
        ["Retrieval", "Text/vector", "Cross-modal retrieval"],
        ["Reasoning", "Language-focused", "Multimodal reasoning"],
        ["Complexity", "Lower", "Higher"]
      ]
    },
    {
      title: "Multimodal RAG vs Multimodal Agent",
      rows: [
        ["Primary purpose", "Retrieve knowledge", "Achieve tasks"],
        ["Retrieval", "Core", "Optional but useful"],
        ["Tools", "Usually limited", "Core capability"],
        ["Planning", "Limited", "Important"],
        ["Actions", "Usually none", "Can perform controlled actions"]
      ]
    },
    {
      title: "Synchronous vs Asynchronous Processing",
      rows: [
        ["Typical use", "Interactive tasks", "Long-running tasks"],
        ["User waits", "Yes", "Usually no"],
        ["Example", "Image question", "Two-hour video processing"],
        ["Infrastructure", "API request", "Queue + worker"]
      ]
    }
  ],

  diagrams: [
    {
      title: "Multimodal AI Stack",
      flow: [
        "Input",
        "Preprocessing",
        "Representation",
        "Model",
        "Retrieval",
        "Tools",
        "Validation",
        "Response"
      ]
    },
    {
      title: "Multimodal RAG",
      flow: [
        "Query",
        "Query Transformation",
        "Multimodal Retrieval",
        "Ranking",
        "Evidence",
        "Context",
        "Generation",
        "Grounded Answer"
      ]
    },
    {
      title: "Multimodal Agent",
      flow: [
        "Observe",
        "Understand",
        "Plan",
        "Tool Selection",
        "Execute",
        "Observe",
        "Verify",
        "Finish"
      ]
    },
    {
      title: "Production Pipeline",
      flow: [
        "User",
        "API",
        "Validation",
        "Orchestration",
        "AI Services",
        "Safety",
        "Observability",
        "Response"
      ]
    }
  ],

  codingExercises: [
    {
      title: "Multimodal Request Model",
      task:
        "Create a TypeScript type representing a request containing text and optional image, audio, video and document attachments."
    },
    {
      title: "Evidence Ranker",
      task:
        "Implement a Python function that combines text, visual and metadata relevance scores."
    },
    {
      title: "Agent Loop",
      task:
        "Implement an agent loop with a maximum step count and tool execution."
    },
    {
      title: "Cost Calculator",
      task:
        "Create a function that calculates total multimodal workflow cost."
    },
    {
      title: "Evaluation Record",
      task:
        "Create a TypeScript interface for recording model, modality, latency, grounding and success metrics."
    },
    {
      title: "Cache Hit Rate",
      task:
        "Implement a function that calculates cache hit rate."
    }
  ],

  debuggingExercises: [
    {
      problem:
        "The multimodal RAG system retrieves relevant text but irrelevant images.",
      task:
        "Identify possible causes and propose changes to retrieval and ranking."
    },
    {
      problem:
        "The model describes information that is not visible in the image.",
      task:
        "Design a grounding and hallucination evaluation."
    },
    {
      problem:
        "Video processing takes several minutes.",
      task:
        "Design an asynchronous processing pipeline."
    },
    {
      problem:
        "The agent repeatedly calls the same tool.",
      task:
        "Implement loop detection and step limits."
    },
    {
      problem:
        "Multimodal requests are becoming too expensive.",
      task:
        "Identify cost drivers and optimization strategies."
    }
  ],

  architectureExercises: [
    {
      title: "Educational Multimodal Assistant",
      requirements: [
        "Text questions",
        "Image understanding",
        "PDF processing",
        "RAG",
        "Citations",
        "Conversation history"
      ]
    },
    {
      title: "Video Learning Assistant",
      requirements: [
        "Video upload",
        "Transcription",
        "Scene detection",
        "Question answering",
        "Timestamp citations",
        "Study summary"
      ]
    },
    {
      title: "Multimodal Customer Support",
      requirements: [
        "Screenshot analysis",
        "Document processing",
        "Knowledge retrieval",
        "Tool calling",
        "Human escalation"
      ]
    }
  ],

  scenarioExercises: [
    {
      scenario:
        "A user uploads a screenshot and asks why an application is showing an error.",
      task:
        "Design the complete perception, retrieval and response workflow."
    },
    {
      scenario:
        "A user uploads a product image and asks whether the product meets a set of requirements.",
      task:
        "Design the multimodal agent workflow."
    },
    {
      scenario:
        "A student uploads a lecture video and asks for a study guide.",
      task:
        "Design the asynchronous video-processing architecture."
    },
    {
      scenario:
        "A document contains instructions attempting to manipulate the AI assistant.",
      task:
        "Design a prompt-injection defense strategy."
    }
  ],

  interviewQuestions: [
    "What is multimodal AI?",
    "What is multimodal RAG?",
    "What is cross-modal retrieval?",
    "How does image generation work at a high level?",
    "What is diffusion?",
    "What is a spectrogram?",
    "How is video different from image understanding?",
    "What is a multimodal agent?",
    "What is tool calling?",
    "How can multimodal systems be evaluated?",
    "What is multimodal hallucination?",
    "What is grounding?",
    "How can multimodal prompt injection happen?",
    "How would you design a production multimodal AI system?",
    "How would you control multimodal AI costs?",
    "When should video processing be asynchronous?",
    "How would you secure uploaded documents?",
    "How would you monitor a multimodal application?"
  ],

  miniProjects: [
    {
      title: "Image Question Answering Assistant",
      difficulty: "Beginner",
      requirements: [
        "Image upload",
        "Question input",
        "Multimodal model call",
        "Response display"
      ]
    },
    {
      title: "Document Visual Assistant",
      difficulty: "Intermediate",
      requirements: [
        "PDF upload",
        "Text extraction",
        "Image extraction",
        "Question answering",
        "Source references"
      ]
    },
    {
      title: "Video Study Assistant",
      difficulty: "Advanced",
      requirements: [
        "Video upload",
        "Transcript",
        "Frame sampling",
        "Question answering",
        "Timestamp references"
      ]
    }
  ],

  masteryChecklist: [
    "I can explain multimodal AI.",
    "I can design multimodal prompts.",
    "I understand image generation.",
    "I understand image editing.",
    "I understand audio representations.",
    "I understand speech recognition and synthesis.",
    "I understand video processing.",
    "I can design multimodal RAG.",
    "I understand cross-modal retrieval.",
    "I can design grounded answers.",
    "I understand multimodal agents.",
    "I can design controlled tool calling.",
    "I understand multimodal evaluation.",
    "I can identify hallucination and grounding failures.",
    "I understand multimodal security risks.",
    "I can design production observability.",
    "I can reason about multimodal cost and latency.",
    "I can design a complete multimodal application."
  ],

  finalChallenge: {
    title: "Build a Production Multimodal AI Assistant",
    objective:
      "Design a complete multimodal assistant capable of understanding text, images and documents, retrieving grounded knowledge and producing validated responses.",
    requiredComponents: [
      "Frontend",
      "API layer",
      "Input validation",
      "Multimodal processing",
      "Retrieval",
      "Multimodal model",
      "Structured output",
      "Grounding",
      "Safety",
      "Observability"
    ],
    expectedDeliverables: [
      "System architecture",
      "Data flow diagram",
      "API design",
      "Data model",
      "Prompt architecture",
      "Evaluation dataset",
      "Security plan",
      "Cost analysis",
      "Deployment plan"
    ]
  },

  moduleCheck: {
    title: "Module 8 Mastery Check",
    sections: [
      "Multimodal foundations",
      "Multimodal prompting",
      "Image generation",
      "Audio and speech",
      "Video AI",
      "Multimodal RAG",
      "Multimodal agents",
      "Evaluation and safety",
      "Production architecture"
    ],
    recommendedPassingStandard:
      "Demonstrate both conceptual understanding and the ability to design a complete multimodal application."
  },

  summary: `
Module 8 practice should move from individual concepts toward complete system thinking.

The major progression is:

Multimodal Foundations
→ Prompting
→ Image Generation
→ Audio
→ Video
→ Multimodal RAG
→ Agents
→ Evaluation
→ Production

The final goal is not memorization.

The goal is to understand how these components work together to create real multimodal AI systems.
`,

  keyTakeaways: [
    "Multimodal AI combines multiple forms of information.",
    "Different modalities require different representations and processing pipelines.",
    "Multimodal RAG connects heterogeneous evidence with generation.",
    "Agents add controlled action capabilities.",
    "Evaluation must cover perception, retrieval, reasoning, grounding and safety.",
    "Production systems require security, privacy, observability and reliability.",
    "Cost and latency are engineering constraints.",
    "The capstone should integrate the entire module."
  ]
};

export default module8Practice;
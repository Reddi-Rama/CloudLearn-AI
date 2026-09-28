const lesson1 = {
  id: "lesson1",
  moduleId: "module8",
  title: "Multimodal Generative AI Fundamentals",
  subtitle:
    "Understand how modern AI systems learn, represent, reason over, and generate information across text, images, audio, video, and other modalities.",
  description:
    "This lesson introduces multimodal Generative AI from first principles. You will learn what a modality is, how multimodal systems differ from text-only systems, how different data types are represented, how multimodal models combine information, and how multimodal applications are constructed.",

  difficulty: "Intermediate",
  estimatedTime: "3–4 hours",

  learningObjectives: [
    "Define multimodal Generative AI.",
    "Understand the concept of a modality.",
    "Identify major modalities used by modern AI systems.",
    "Understand the difference between unimodal and multimodal models.",
    "Understand how text, images, audio, and video become machine-readable representations.",
    "Understand modality-specific encoders and shared representations.",
    "Understand early, intermediate, and late multimodal fusion.",
    "Understand multimodal input and output pipelines.",
    "Understand the role of multimodal foundation models.",
    "Design a basic multimodal AI application architecture."
  ],

  sections: [
    {
      title: "What Is Multimodal Generative AI?",
      content: [
        "Multimodal Generative AI refers to AI systems that can work with multiple types of information, such as text, images, audio, video, documents, tables, and other structured or sensory data.",
        "A text-only language model primarily receives and produces text tokens. A multimodal system can accept information from multiple modalities and reason across them.",
        "For example, a user may provide a photograph and ask a question about it. The system must process the visual information, connect it with the language instruction, reason over both, and produce a response.",
        "The important idea is not simply supporting many file types. The deeper challenge is creating representations that allow information from different modalities to interact meaningfully."
      ]
    },

    {
      title: "What Is a Modality?",
      content: [
        "A modality is a distinct type or source of information with its own structure and statistical properties.",
        "Text is sequential and symbolic.",
        "Images are spatial and visual.",
        "Audio is temporal and waveform-based.",
        "Video combines spatial and temporal information.",
        "Tables contain structured relationships between rows, columns, values, and labels.",
        "Documents may contain text, images, layout, tables, and metadata simultaneously."
      ],

      classificationTree: [
        "Multimodal Data",
        "├── Text",
        "│   ├── Words",
        "│   ├── Tokens",
        "│   └── Documents",
        "├── Vision",
        "│   ├── Images",
        "│   ├── Screenshots",
        "│   └── Documents",
        "├── Audio",
        "│   ├── Speech",
        "│   ├── Music",
        "│   └── Environmental Sound",
        "├── Video",
        "│   ├── Frames",
        "│   ├── Motion",
        "│   └── Audio Track",
        "└── Structured Data",
        "    ├── Tables",
        "    ├── JSON",
        "    └── Metadata"
      ]
    },

    {
      title: "Unimodal vs Multimodal AI",
      comparison: [
        {
          aspect: "Input",
          unimodal: "One primary modality",
          multimodal: "Multiple modalities"
        },
        {
          aspect: "Representation",
          unimodal: "Specialized representation",
          multimodal: "Multiple or shared representations"
        },
        {
          aspect: "Reasoning",
          unimodal: "Within one information type",
          multimodal: "Across different information types"
        },
        {
          aspect: "Example",
          unimodal: "Text-only language model",
          multimodal: "Text + image understanding model"
        },
        {
          aspect: "Application",
          unimodal: "Text generation",
          multimodal: "Visual question answering"
        }
      ]
    },

    {
      title: "Major Multimodal Tasks",
      content: [
        "Multimodal systems can perform both understanding and generation tasks.",
        "Understanding tasks extract or reason about information from multiple modalities.",
        "Generation tasks create new content in one or more modalities.",
        "Some systems perform cross-modal transformation, such as converting text instructions into images or speech into text."
      ],
      tasks: [
        {
          category: "Vision-Language",
          examples: [
            "Image captioning",
            "Visual question answering",
            "Image understanding",
            "Document understanding"
          ]
        },
        {
          category: "Text-to-Image",
          examples: [
            "Image generation",
            "Image editing",
            "Text-guided visual synthesis"
          ]
        },
        {
          category: "Speech-Language",
          examples: [
            "Speech recognition",
            "Speech understanding",
            "Speech generation"
          ]
        },
        {
          category: "Video-Language",
          examples: [
            "Video understanding",
            "Video question answering",
            "Video summarization"
          ]
        },
        {
          category: "Cross-Modal",
          examples: [
            "Text-to-image",
            "Image-to-text",
            "Text-to-speech",
            "Speech-to-text"
          ]
        }
      ]
    },

    {
      title: "Why Multimodal AI Is Difficult",
      content: [
        "Different modalities have different structures.",
        "Text consists of discrete symbolic units.",
        "Images contain millions of pixel values arranged spatially.",
        "Audio is a continuous temporal signal.",
        "Video contains both spatial and temporal information.",
        "A multimodal model must therefore solve representation alignment in addition to ordinary generation or understanding.",
        "The system must learn how concepts expressed in one modality correspond to concepts expressed in another."
      ]
    },

    {
      title: "From Raw Data to Representation",
      content: [
        "Raw multimodal data is usually transformed before it enters the main reasoning system.",
        "Text can be tokenized and converted into embeddings.",
        "Images can be divided into patches or processed by a vision encoder.",
        "Audio can be transformed into spectrograms or encoded using an audio model.",
        "Video can be represented using frames, temporal features, or specialized video encoders.",
        "These modality-specific representations can then be projected into a shared representation space."
      ],
      architecture: [
        "TEXT",
        "  ↓",
        "Tokenizer",
        "  ↓",
        "Text Embeddings",
        "",
        "IMAGE",
        "  ↓",
        "Vision Encoder",
        "  ↓",
        "Visual Embeddings",
        "",
        "AUDIO",
        "  ↓",
        "Audio Encoder",
        "  ↓",
        "Audio Embeddings",
        "",
        "VIDEO",
        "  ↓",
        "Video Encoder",
        "  ↓",
        "Video Representations",
        "",
        "        ↓",
        "Shared / Aligned Representation",
        "        ↓",
        "Multimodal Reasoning Model",
        "        ↓",
        "Generated Output"
      ]
    },

    {
      title: "Modality-Specific Encoders",
      content: [
        "An encoder transforms raw modality data into a representation suitable for downstream processing.",
        "A text encoder processes tokens.",
        "A vision encoder processes visual information.",
        "An audio encoder processes acoustic information.",
        "A video encoder processes spatial and temporal information.",
        "Using separate encoders is useful because each modality has different structure.",
        "The outputs can later be projected into a representation space where the model can combine them."
      ]
    },

    {
      title: "Shared Representation Spaces",
      content: [
        "A shared representation space attempts to represent information from different modalities in a compatible mathematical space.",
        "For example, an image describing a dog and the sentence 'a dog running through a park' may produce representations that are close to each other.",
        "This allows similarity and cross-modal retrieval.",
        "The quality of the shared space depends on the training objective, architecture, data quality, and alignment strategy."
      ],
      formula:
        "f_text(text) ≈ f_image(image)"
    },

    {
      title: "Cross-Modal Alignment",
      content: [
        "Cross-modal alignment means learning relationships between representations from different modalities.",
        "A model may learn that an image of a bicycle corresponds to words such as bicycle, cycle, wheels, or transportation.",
        "Alignment can be learned through paired data, contrastive objectives, cross-attention, shared latent spaces, or other training strategies.",
        "Good alignment allows the model to connect concepts rather than merely process each modality independently."
      ]
    },

    {
      title: "Contrastive Multimodal Learning",
      content: [
        "Contrastive learning is one important approach for aligning modalities.",
        "The basic idea is to bring matching examples closer in representation space while pushing unrelated examples farther apart.",
        "For example, an image and its correct caption form a positive pair.",
        "An image and an unrelated caption form a negative pair.",
        "The model learns representations that make corresponding information more similar."
      ],
      formula:
        "Similarity(image, matching text) > Similarity(image, unrelated text)"
    },

    {
      title: "Multimodal Fusion",
      content: [
        "Fusion describes how information from different modalities is combined.",
        "There are three useful conceptual levels: early fusion, intermediate fusion, and late fusion.",
        "Early fusion combines representations near the input stage.",
        "Intermediate fusion allows modality-specific processing before cross-modal interaction.",
        "Late fusion processes modalities separately and combines their predictions or representations near the output."
      ],
      classificationTree: [
        "Multimodal Fusion",
        "├── Early Fusion",
        "│   └── Combine representations early",
        "├── Intermediate Fusion",
        "│   └── Cross-modal interaction inside model",
        "└── Late Fusion",
        "    └── Combine modality-specific outputs"
      ]
    },

    {
      title: "Early Fusion",
      content: [
        "Early fusion combines modality representations before substantial downstream processing.",
        "This can allow deep interaction between modalities.",
        "However, it can also create very large representation sequences and may make training more difficult.",
        "The representation dimensions and temporal or spatial structures of different modalities must be made compatible."
      ]
    },

    {
      title: "Intermediate Fusion",
      content: [
        "Intermediate fusion allows each modality to receive specialized processing before cross-modal interaction.",
        "Cross-attention is a common mechanism for allowing one modality to attend to another.",
        "This approach provides a balance between modality-specific representation learning and cross-modal interaction."
      ]
    },

    {
      title: "Late Fusion",
      content: [
        "Late fusion combines information after each modality has already been processed.",
        "This can make systems modular and easier to deploy.",
        "However, late fusion may limit deep interactions between modalities.",
        "The correct fusion strategy depends on the task and architecture."
      ]
    },

    {
      title: "Multimodal Foundation Models",
      content: [
        "A multimodal foundation model is trained to work with multiple modalities and can often support many downstream tasks.",
        "Such systems may accept text, images, audio, documents, or combinations of them.",
        "The model architecture may contain modality-specific encoders, projection layers, cross-modal attention mechanisms, or a shared transformer-based reasoning component.",
        "The exact architecture differs between systems."
      ]
    },

    {
      title: "Understanding vs Generation",
      comparison: [
        {
          aspect: "Multimodal understanding",
          goal: "Interpret information across modalities",
          examples: "Image question answering, document understanding"
        },
        {
          aspect: "Multimodal generation",
          goal: "Create content",
          examples: "Text-to-image, text-to-speech"
        },
        {
          aspect: "Cross-modal transformation",
          goal: "Convert information between modalities",
          examples: "Speech-to-text, image-to-text"
        },
        {
          aspect: "Multimodal reasoning",
          goal: "Combine evidence across modalities",
          examples: "Analyze chart image and answer textual question"
        }
      ]
    },

    {
      title: "Multimodal Application Architecture",
      architecture: [
        "User",
        "  ↓",
        "Frontend",
        "  ↓",
        "Input Validation",
        "  ↓",
        "Modality Detection",
        "  ↓",
        "┌─────────────┬─────────────┬─────────────┐",
        "│ Text        │ Image       │ Audio       │",
        "│ Processing  │ Processing  │ Processing  │",
        "└─────────────┴─────────────┴─────────────┘",
        "              ↓",
        "       Multimodal Model",
        "              ↓",
        "       Output Validation",
        "              ↓",
        "          Response",
        "              ↓",
        "             User"
      ]
    },

    {
      title: "Multimodal Input Pipeline",
      content: [
        "A production application should not send arbitrary files directly to a model.",
        "The input should first be validated.",
        "File type, size, encoding, resolution, duration, and security constraints should be checked.",
        "The application may then preprocess the input.",
        "For example, a large image may be resized, a long audio file may be segmented, or a video may be sampled into representative frames.",
        "The resulting representation is passed to the multimodal model."
      ]
    },

    {
      title: "Multimodal Output",
      content: [
        "Multimodal systems can also generate multiple types of output.",
        "A system may produce text explanations, structured JSON, speech, images, or combinations of outputs.",
        "Output validation becomes especially important when generated content is consumed by another application.",
        "Structured outputs should be validated before being passed to downstream systems."
      ]
    },

    {
      title: "Example: Image Question Answering",
      content: [
        "Suppose a user uploads an image of a classroom and asks, 'How many students are visible?'",
        "The image must be encoded into a representation that the model can reason over.",
        "The text question is represented separately or within the same multimodal input structure.",
        "The model combines both sources of information and generates an answer.",
        "The application then returns the response to the user."
      ],
      workflow: [
        "Image",
        "↓",
        "Vision Encoder",
        "↓",
        "Visual Representation",
        "",
        "Text Question",
        "↓",
        "Text Representation",
        "",
        "Both Representations",
        "↓",
        "Multimodal Reasoning",
        "↓",
        "Answer"
      ]
    },

    {
      title: "Example: Document Understanding",
      content: [
        "A document is often inherently multimodal.",
        "It can contain text, tables, diagrams, images, headings, page layout, and metadata.",
        "A document understanding system must therefore reason about both content and structure.",
        "A simple text extraction pipeline can lose information contained in layout or visual relationships.",
        "Multimodal document understanding attempts to preserve these relationships."
      ]
    },

    {
      title: "Example: Chart Understanding",
      content: [
        "Charts are another important multimodal task.",
        "The system must identify labels, axes, values, legends, spatial relationships, and textual instructions.",
        "A text-only representation may lose important visual structure.",
        "A multimodal model can use the image together with the user's textual question."
      ]
    },

    {
      title: "Multimodal RAG",
      content: [
        "Multimodal RAG extends retrieval-augmented generation beyond text-only evidence.",
        "The knowledge base may contain text passages, images, diagrams, tables, scanned documents, audio, or video.",
        "Retrieval may therefore search across multiple representation types.",
        "The generation model receives the retrieved evidence and produces a grounded response.",
        "Multimodal RAG will be explored in greater depth later in this module."
      ]
    },

    {
      title: "Multimodal System Failure Modes",
      failureModes: [
        {
          failure: "Wrong visual interpretation",
          cause: "The model misinterprets visual information.",
          mitigation: "Use evaluation datasets and validation strategies."
        },
        {
          failure: "Missing modality",
          cause: "One required input is unavailable or corrupted.",
          mitigation: "Validate inputs and provide graceful fallback."
        },
        {
          failure: "Poor cross-modal alignment",
          cause: "Representations do not correspond correctly.",
          mitigation: "Improve alignment training and evaluation."
        },
        {
          failure: "Resolution loss",
          cause: "Important visual information disappears during preprocessing.",
          mitigation: "Use appropriate resizing, cropping, or multi-scale processing."
        },
        {
          failure: "Long audio/video context",
          cause: "Input exceeds practical processing limits.",
          mitigation: "Segment, sample, summarize, or retrieve relevant portions."
        },
        {
          failure: "Unsupported modality combination",
          cause: "Model or application does not support the requested input/output.",
          mitigation: "Validate capabilities before execution."
        }
      ]
    },

    {
      title: "Multimodal Engineering Principles",
      principles: [
        "Validate every modality before processing.",
        "Preserve important information during preprocessing.",
        "Use modality-specific processing where appropriate.",
        "Align representations before cross-modal reasoning.",
        "Choose fusion strategies based on the task.",
        "Treat images, audio, and video as structured information rather than simple files.",
        "Evaluate each modality separately and evaluate cross-modal reasoning.",
        "Design graceful fallbacks for missing or unsupported modalities.",
        "Control input size, latency, and cost.",
        "Validate generated outputs before downstream use."
      ]
    }
  ],

  mathematicalIntuition: [
    {
      title: "Multimodal Representation",
      intuition:
        "Each modality can be transformed into a mathematical representation before the model combines them.",
      formula:
        "z_text = f_text(x_text),  z_image = f_image(x_image)",
      explanation:
        "The modality-specific encoders transform raw inputs into representations that can participate in multimodal reasoning."
    },
    {
      title: "Shared Representation",
      intuition:
        "Representations from different modalities can be projected into a common space.",
      formula:
        "z_shared = P(z_modality)",
      explanation:
        "A projection function can transform modality-specific features into a compatible representation space."
    },
    {
      title: "Cross-Modal Similarity",
      intuition:
        "Matching information across modalities should have higher similarity than unrelated information.",
      formula:
        "sim(z_image, z_text^+) > sim(z_image, z_text^-)",
      explanation:
        "This principle is central to contrastive multimodal representation learning."
    }
  ],

  codeExamples: [
    {
      title: "Representing a Multimodal Request",
      language: "python",
      code: [
        "request = {",
        "    'text': 'Describe this image.',",
        "    'image': 'classroom.jpg'",
        "}",
        "",
        "if not request.get('text'):",
        "    raise ValueError('Text input is required')",
        "",
        "if not request.get('image'):",
        "    raise ValueError('Image input is required')",
        "",
        "print('Multimodal request is valid.')"
      ],
      explanation:
        "A production system should validate multimodal inputs before passing them to a model."
    },
    {
      title: "Simple Modality Router",
      language: "python",
      code: [
        "def detect_modalities(request):",
        "    modalities = []",
        "",
        "    if request.get('text'):",
        "        modalities.append('text')",
        "",
        "    if request.get('image'):",
        "        modalities.append('image')",
        "",
        "    if request.get('audio'):",
        "        modalities.append('audio')",
        "",
        "    if request.get('video'):",
        "        modalities.append('video')",
        "",
        "    return modalities",
        "",
        "request = {",
        "    'text': 'Explain the image',",
        "    'image': 'chart.png'",
        "}",
        "",
        "print(detect_modalities(request))"
      ],
      explanation:
        "This simple router demonstrates how an application can determine which modalities are present."
    },
    {
      title: "Multimodal Request Type",
      language: "typescript",
      code: [
        "type MultimodalRequest = {",
        "  text?: string;",
        "  imageUrl?: string;",
        "  audioUrl?: string;",
        "  videoUrl?: string;",
        "};",
        "",
        "function hasImage(request: MultimodalRequest): boolean {",
        "  return Boolean(request.imageUrl);",
        "}"
      ],
      explanation:
        "Typed request structures make multimodal application interfaces explicit."
    }
  ],

  comparisons: [
    {
      title: "Text-Only vs Multimodal AI",
      rows: [
        {
          aspect: "Input",
          textOnly: "Text",
          multimodal: "Text, image, audio, video, documents, etc."
        },
        {
          aspect: "Representation",
          textOnly: "Token-based",
          multimodal: "Multiple modality representations"
        },
        {
          aspect: "Reasoning",
          textOnly: "Primarily linguistic",
          multimodal: "Cross-modal"
        },
        {
          aspect: "Applications",
          textOnly: "Chat and text generation",
          multimodal: "Vision, speech, documents, media, agents"
        }
      ]
    },
    {
      title: "Early vs Intermediate vs Late Fusion",
      rows: [
        {
          aspect: "Combination point",
          early: "Near input",
          intermediate: "Inside model",
          late: "Near output"
        },
        {
          aspect: "Cross-modal interaction",
          early: "High",
          intermediate: "High",
          late: "Lower"
        },
        {
          aspect: "Modularity",
          early: "Lower",
          intermediate: "Medium",
          late: "Higher"
        },
        {
          aspect: "Complexity",
          early: "Can be high",
          intermediate: "Moderate to high",
          late: "Usually simpler"
        }
      ]
    }
  ],

  exercises: [
    "Define multimodal Generative AI in your own words.",
    "List five different modalities used in modern AI systems.",
    "Explain why images cannot simply be processed as ordinary text.",
    "Compare unimodal and multimodal AI.",
    "Explain the purpose of a modality-specific encoder.",
    "Explain the idea of a shared representation space.",
    "Describe early, intermediate, and late fusion.",
    "Explain why document understanding is naturally multimodal.",
    "Describe a multimodal image question-answering pipeline.",
    "Explain why multimodal preprocessing can affect model accuracy."
  ],

  codingExercises: [
    "Create a Python function that validates text, image, audio, and video inputs.",
    "Build a modality detector.",
    "Create a TypeScript MultimodalRequest interface.",
    "Implement a simple multimodal input router.",
    "Create a representation metadata structure for text and image inputs.",
    "Build a simple multimodal request validation layer."
  ],

  architectureExercises: [
    "Design an image question-answering application.",
    "Design a document understanding pipeline for PDFs containing text, tables, and images.",
    "Design a multimodal chatbot that accepts text and images.",
    "Design a multimodal RAG system containing text and image evidence.",
    "Compare early, intermediate, and late fusion for a document understanding system."
  ],

  scenarioExercises: [
    {
      scenario:
        "A student uploads a screenshot of an error message and asks why the application is failing.",
      tasks: [
        "Identify the modalities.",
        "Design the preprocessing pipeline.",
        "Explain how the model combines the screenshot and question.",
        "Describe the expected output."
      ]
    },
    {
      scenario:
        "A company wants an assistant that understands invoices containing text, tables, logos, and handwritten annotations.",
      tasks: [
        "Identify the multimodal information.",
        "Design the representation pipeline.",
        "Explain why text extraction alone may be insufficient.",
        "Design validation and fallback behavior."
      ]
    }
  ],

  interviewQuestions: [
    "What is multimodal Generative AI?",
    "What is a modality?",
    "What is the difference between unimodal and multimodal AI?",
    "Why are modality-specific encoders useful?",
    "What is a shared representation space?",
    "What is cross-modal alignment?",
    "What is contrastive multimodal learning?",
    "What is early fusion?",
    "What is intermediate fusion?",
    "What is late fusion?",
    "What is multimodal reasoning?",
    "What is multimodal RAG?",
    "Why are documents considered multimodal?",
    "What are common multimodal failure modes?",
    "Why is preprocessing important in multimodal systems?",
    "How would you design an image question-answering system?"
  ],

  commonMistakes: [
    "Treating multimodal AI as simply accepting multiple file formats.",
    "Ignoring the structural differences between modalities.",
    "Assuming all modalities can use the same preprocessing pipeline.",
    "Destroying important information during image or video preprocessing.",
    "Ignoring cross-modal alignment.",
    "Using only text extraction for visually structured documents.",
    "Ignoring missing or corrupted modalities.",
    "Failing to validate generated multimodal outputs.",
    "Ignoring latency and cost from large visual or audio inputs.",
    "Assuming multimodal models always interpret visual information correctly."
  ],

  summary: [
    "Multimodal Generative AI works with multiple information modalities.",
    "Text, images, audio, video, documents, and structured data have different representations.",
    "Modality-specific encoders convert raw information into useful representations.",
    "Multimodal systems need mechanisms for cross-modal alignment.",
    "Shared representation spaces allow information from different modalities to interact.",
    "Fusion can happen early, during intermediate processing, or late in the pipeline.",
    "Multimodal AI supports understanding, generation, transformation, and reasoning.",
    "Multimodal applications require careful validation and preprocessing.",
    "Multimodal RAG extends retrieval beyond text-only evidence.",
    "Production systems must account for accuracy, latency, cost, security, and missing modalities."
  ],

  keyTakeaways: [
    "Multimodal AI is about connecting different information types.",
    "Representation is the bridge between raw data and model reasoning.",
    "Cross-modal alignment is a central challenge.",
    "Fusion strategy strongly affects architecture and behavior.",
    "Documents, charts, screenshots, and media can contain information that text extraction loses.",
    "A production multimodal system requires more than a model; it requires a complete input, processing, validation, and output pipeline."
  ],

  visualReferences: [
    {
      title: "Multimodal AI Overview",
      type: "diagram",
      description:
        "Show text, image, audio, and video entering modality-specific encoders and converging into a multimodal reasoning model."
    },
    {
      title: "Multimodal Fusion Strategies",
      type: "classification",
      description:
        "Compare early, intermediate, and late fusion."
    },
    {
      title: "Multimodal Application Pipeline",
      type: "flowchart",
      description:
        "Show validation, preprocessing, modality encoding, multimodal reasoning, output validation, and response."
    }
  ]
};

export default lesson1;
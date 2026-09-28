const lesson3 = {
  id: "module8-lesson3",
  moduleId: "module8",
  title: "Multimodal Model Architectures",
  subtitle: "How multimodal models connect language, vision, audio and video",
  description:
    "Understand the major architectural patterns used to build multimodal generative AI systems, including modality encoders, projection layers, cross-attention, unified token spaces and multimodal transformer pipelines.",

  sections: [
    {
      title: "1. What Is a Multimodal Model Architecture?",
      content:
        "A multimodal model architecture defines how information from different modalities enters the system, how those representations are aligned or fused, and how the model produces a final prediction or generated response."
    },

    {
      title: "2. General Multimodal Architecture",
      architecture: [
        "Text Input",
        "Image Input",
        "Audio Input",
        "Video Input",
        "Modality Encoders",
        "Projection / Alignment",
        "Multimodal Transformer",
        "Reasoning",
        "Generation"
      ],
      content:
        "A typical architecture separates modality-specific processing from shared reasoning. Specialized encoders convert raw inputs into representations before those representations are combined."
    },

    {
      title: "3. Modality Encoders",
      content:
        "An encoder converts raw information into a representation that can be processed by later neural network layers.",
      table: {
        headers: ["Input", "Possible Encoder", "Output"],
        rows: [
          ["Text", "Language Transformer", "Text embeddings"],
          ["Image", "Vision Transformer", "Visual embeddings"],
          ["Audio", "Audio encoder", "Audio embeddings"],
          ["Video", "Vision + temporal encoder", "Video embeddings"],
          ["Document", "Document / vision encoder", "Layout-aware features"]
        ]
      }
    },

    {
      title: "4. Projection Layers",
      content:
        "Different encoders may produce vectors with different dimensions. Projection layers transform those vectors into a representation compatible with the shared model.",
      formula: "z' = Wz + b",
      bullets: [
        "W is a learned projection matrix.",
        "b is a bias vector.",
        "The projection can change dimensionality.",
        "Projection layers can help align modality-specific features."
      ]
    },

    {
      title: "5. Separate Encoders + Shared Language Model",
      content:
        "One common design uses specialized encoders for non-text modalities and connects their outputs to a language model.",
      architecture: [
        "Image",
        "Vision Encoder",
        "Projection",
        "Language Model",
        "Text Response"
      ],
      bullets: [
        "The vision encoder specializes in visual features.",
        "The projection converts those features into language-model-compatible representations.",
        "The language model performs reasoning and generation."
      ]
    },

    {
      title: "6. Vision-Language Models",
      content:
        "Vision-language models combine visual understanding with language generation. They can answer questions about images, summarize visual content and connect visual evidence with textual instructions.",
      examples: [
        "Image question answering",
        "Image captioning",
        "Visual reasoning",
        "Chart interpretation",
        "Screenshot analysis",
        "Document understanding"
      ]
    },

    {
      title: "7. Cross-Attention Architecture",
      content:
        "Cross-attention allows representations from one modality to selectively retrieve information from another modality.",
      formula:
        "Attention(Q,K,V) = softmax(QKᵀ / √d_k)V",
      bullets: [
        "Queries may originate from language representations.",
        "Keys and values may originate from visual representations.",
        "Attention weights determine which information is relevant."
      ]
    },

    {
      title: "8. Unified Token Architecture",
      content:
        "Another strategy represents multiple modalities as tokens that can be processed within a unified transformer sequence.",
      architecture: [
        "Text Tokens",
        "+",
        "Image Tokens",
        "+",
        "Audio Tokens",
        "+",
        "Special Modality Tokens",
        "↓",
        "Unified Transformer"
      ],
    },

    {
      title: "9. Multimodal Transformer",
      content:
        "A transformer can process multimodal sequences using self-attention, cross-attention or a combination of both.",
      bullets: [
        "Self-attention models relationships within a representation sequence.",
        "Cross-attention connects separate representation streams.",
        "Causal attention can support autoregressive generation.",
        "Bidirectional attention may be useful for understanding tasks."
      ]
    },

    {
      title: "10. Encoder-Only Multimodal Systems",
      content:
        "Encoder-based systems are useful when the primary task is understanding rather than open-ended generation.",
      examples: [
        "Classification",
        "Similarity search",
        "Image-text matching",
        "Document classification",
        "Retrieval"
      ]
    },

    {
      title: "11. Decoder-Only Multimodal Systems",
      content:
        "Decoder-only architectures can combine multimodal context with autoregressive generation.",
      architecture: [
        "Multimodal Context",
        "Transformer Decoder",
        "Next Token Prediction",
        "Generated Output"
      ],
      bullets: [
        "Useful for conversational applications.",
        "Can produce text responses from multimodal inputs.",
        "Can integrate tool calls and structured generation."
      ]
    },

    {
      title: "12. Encoder-Decoder Multimodal Systems",
      content:
        "Encoder-decoder systems separate representation building from generation. An encoder processes the input while a decoder generates the desired output.",
      architecture: [
        "Multimodal Input",
        "Encoder",
        "Encoded Representation",
        "Decoder",
        "Output"
      ]
    },

    {
      title: "13. Fusion Strategies",
      table: {
        headers: ["Strategy", "Where Fusion Happens", "Main Idea"],
        rows: [
          ["Early Fusion", "Before deep reasoning", "Combine representations early"],
          ["Intermediate Fusion", "Inside the model", "Use attention or learned interactions"],
          ["Late Fusion", "After separate models", "Combine predictions"],
          ["Cross-Attention", "During attention", "One modality queries another"],
          ["Unified Tokens", "Shared sequence", "Represent modalities as tokens"]
        ]
      }
    },

    {
      title: "14. Multimodal Generation",
      content:
        "Multimodal generation means the system can generate one or more modalities as output.",
      examples: [
        "Text → image",
        "Text → speech",
        "Image → text",
        "Text + image → text",
        "Text → video",
        "Audio → text"
      ]
    },

    {
      title: "15. Image Generation Architecture",
      architecture: [
        "Text Prompt",
        "Text Encoder",
        "Conditioning Representation",
        "Generative Model",
        "Sampling",
        "Image"
      ],
      content:
        "Image generation systems transform textual or multimodal conditions into visual outputs through a learned generative process."
    },

    {
      title: "16. Multimodal Input Routing",
      content:
        "Production applications often need an input router that determines which modalities are present and which processing pipeline should be activated.",
      architecture: [
        "Incoming Request",
        "Input Validation",
        "Modality Detection",
        "Routing",
        "Text / Vision / Audio / Video Processing",
        "Context Assembly"
      ]
    },

    {
      title: "17. Multimodal Model Context",
      content:
        "The context supplied to a multimodal model must preserve relationships between modalities. A screenshot and the text explaining what part of the screenshot matters should remain associated.",
      bullets: [
        "Preserve ordering when sequence matters.",
        "Preserve timestamps for audio and video.",
        "Preserve page and region information for documents.",
        "Attach metadata to representations.",
        "Avoid losing modality identity during fusion."
      ]
    },

    {
      title: "18. Computational Complexity",
      content:
        "Attention cost generally grows with the number of tokens or representation elements.",
      formula: "Attention Complexity ≈ O(n²d)",
      bullets: [
        "n is the sequence length.",
        "d is the representation dimension.",
        "Images and videos can generate many representation tokens.",
        "Reducing unnecessary tokens can significantly reduce computation."
      ]
    },

    {
      title: "19. Architecture Tradeoffs",
      table: {
        headers: ["Design", "Strength", "Challenge"],
        rows: [
          ["Separate Encoders", "Specialized representations", "Alignment complexity"],
          ["Cross-Attention", "Strong modality interaction", "Additional computation"],
          ["Unified Tokens", "Flexible common representation", "Large context"],
          ["Late Fusion", "Simple integration", "Limited deep interaction"],
          ["Encoder-Decoder", "Clear separation", "More architectural components"],
          ["Decoder-Only", "Strong generation workflow", "Context and compute costs"]
        ]
      }
    },

    {
      title: "20. Production Architecture",
      architecture: [
        "Client",
        "API Gateway",
        "Input Validation",
        "Modality Processing",
        "Model Router",
        "Multimodal Model",
        "Tool / RAG Layer",
        "Output Validation",
        "Response"
      ],
      bullets: [
        "Do not send unvalidated files directly to the model.",
        "Separate preprocessing from orchestration.",
        "Use model routing when different models are appropriate for different tasks.",
        "Validate generated outputs before downstream actions."
      ]
    },

    {
      title: "21. Python Architecture Example",
      code: `class MultimodalPipeline:
    def __init__(self, text_encoder, vision_encoder, model):
        self.text_encoder = text_encoder
        self.vision_encoder = vision_encoder
        self.model = model

    def process(self, text, image):
        text_features = self.text_encoder(text)
        image_features = self.vision_encoder(image)

        context = {
            "text": text_features,
            "image": image_features
        }

        return self.model(context)`
    },

    {
      title: "22. TypeScript Routing Example",
      code: `type MultimodalInput = {
  text?: string;
  image?: File;
  audio?: File;
  video?: File;
};

function detectModalities(input: MultimodalInput) {
  return {
    text: Boolean(input.text),
    image: Boolean(input.image),
    audio: Boolean(input.audio),
    video: Boolean(input.video),
  };
}`
    },

    {
      title: "23. Architecture Selection Principle",
      content:
        "There is no single architecture that is optimal for every multimodal application. Architecture should be selected according to the modalities, task, latency requirements, output type, context size, cost and evaluation requirements."
    }
  ],

  comparisons: [
    {
      title: "Cross-Attention vs Unified Tokens",
      headers: ["Cross-Attention", "Unified Tokens"],
      rows: [
        ["Separate representation streams", "Shared token sequence"],
        ["Explicit modality interaction", "Implicit through transformer attention"],
        ["Can preserve specialized encoders", "Requires compatible token representation"],
        ["Flexible for heterogeneous inputs", "Simple conceptual transformer interface"]
      ]
    }
  ],

  exercises: [
    "Draw a multimodal architecture for image question answering.",
    "Explain the role of modality encoders.",
    "Explain why projection layers are required.",
    "Compare early fusion and late fusion.",
    "Explain how cross-attention connects modalities."
  ],

  codingExercises: [
    "Implement a modality detector in TypeScript.",
    "Create a simple multimodal pipeline class in Python.",
    "Implement cosine similarity between text and image vectors.",
    "Build a basic routing function for text, image, audio and video inputs."
  ],

  architectureExercises: [
    "Design a vision-language assistant.",
    "Design a multimodal document analysis system.",
    "Design an audio-video meeting assistant.",
    "Design a multimodal RAG architecture."
  ],

  scenarioExercises: [
    "A model receives an image but ignores important visual evidence. Identify possible architectural causes.",
    "An application becomes slow when multiple images are uploaded. Design optimizations.",
    "A video assistant exceeds its context budget. Design a representation strategy."
  ],

  interviewQuestions: [
    "What is a multimodal model?",
    "What does a modality encoder do?",
    "Why are projection layers useful?",
    "What is cross-attention?",
    "What is early fusion?",
    "What is late fusion?",
    "What are unified multimodal tokens?",
    "Why can multimodal systems become computationally expensive?",
    "How would you design a production multimodal architecture?"
  ],

  commonMistakes: [
    "Assuming every modality can use the same encoder.",
    "Ignoring modality alignment.",
    "Sending excessive visual or video tokens into the model.",
    "Failing to preserve timestamps or document regions.",
    "Mixing preprocessing, orchestration and generation logic into one component."
  ],

  summary:
    "Multimodal architectures connect specialized modality encoders with shared reasoning and generation components. Projection layers, cross-attention, fusion strategies and unified token representations allow information from text, images, audio and video to interact. Production systems additionally require routing, validation, context management, security and output verification.",

  keyTakeaways: [
    "Encoders transform raw modalities into machine-readable representations.",
    "Projection layers align representations between components.",
    "Cross-attention enables information exchange between modalities.",
    "Fusion can happen early, during reasoning or late.",
    "Unified token architectures provide a common transformer interface.",
    "Architecture should be selected according to task, modality, cost and latency."
  ]
};

export default lesson3;
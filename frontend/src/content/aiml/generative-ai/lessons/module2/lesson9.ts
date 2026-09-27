const lesson9 = {
  id: "lesson9",
  moduleId: "module2",
  lessonNumber: 9,

  title: "Transformer Encoder, Decoder & Encoder–Decoder Architectures",

  subtitle:
    "Understand encoder-only, decoder-only, and encoder–decoder Transformer architectures and why modern LLMs commonly use decoder-style architectures.",

  description:
    "Transformers can be organized into encoder stacks, decoder stacks, or combinations of both. Understanding these architectural families is essential for understanding language models, sequence-to-sequence systems, translation models, and modern generative AI systems.",

  estimatedTime: "4–5 hours",

  difficulty: "Advanced",

  learningObjectives: [
    "Understand the original Transformer encoder–decoder architecture.",
    "Understand the internal structure of a Transformer encoder.",
    "Understand the internal structure of a Transformer decoder.",
    "Understand encoder-only architectures.",
    "Understand decoder-only architectures.",
    "Understand encoder–decoder architectures.",
    "Understand bidirectional and causal attention.",
    "Understand cross-attention.",
    "Understand the difference between self-attention and cross-attention.",
    "Understand why decoder-only architectures are widely used for generative language modeling.",
    "Understand how different architectures map to different tasks.",
    "Trace information flow through encoder and decoder architectures.",
    "Compare encoder-only, decoder-only, and encoder–decoder models.",
    "Implement simplified attention components in Python."
  ],

  sections: [
    {
      heading: "1. Three Major Transformer Architectures",

      content: [
        "Transformer architectures can be broadly organized into three families: encoder-only, decoder-only, and encoder–decoder.",
        "The architecture determines how information flows through the model and therefore influences the types of tasks the model naturally supports.",
        "Encoder-only models primarily create contextual representations of an input sequence.",
        "Decoder-only models are naturally suited to autoregressive generation.",
        "Encoder–decoder models transform one sequence into another."
      ],

      classificationTree: [
        "Transformer Architectures",
        "├── Encoder-only",
        "│   └── Bidirectional self-attention",
        "├── Decoder-only",
        "│   └── Causal self-attention",
        "└── Encoder–Decoder",
        "    ├── Encoder self-attention",
        "    ├── Decoder causal self-attention",
        "    └── Decoder cross-attention"
      ]
    },

    {
      heading: "2. The Original Transformer Architecture",

      content: [
        "The original Transformer architecture was introduced as an encoder–decoder architecture.",
        "The encoder processes the source sequence and creates contextual representations.",
        "The decoder generates the target sequence while using information from the encoder.",
        "This architecture was particularly useful for sequence-to-sequence tasks such as machine translation."
      ],

      process: [
        "Source sequence",
        "↓",
        "Source embeddings",
        "↓",
        "Encoder stack",
        "↓",
        "Contextual encoder representations",
        "↓",
        "Decoder",
        "↑",
        "Target tokens generated autoregressively",
        "↓",
        "Output vocabulary probabilities"
      ],

      visualReferences: [
        {
          title: "Attention Is All You Need",
          url: "https://arxiv.org/abs/1706.03762",
          description:
            "Original Transformer paper describing the encoder–decoder architecture."
        }
      ]
    },

    {
      heading: "3. Transformer Encoder",

      content: [
        "An encoder consists of a stack of encoder blocks.",
        "Each encoder block contains self-attention and a feed-forward network together with normalization and residual connections.",
        "The key property of the standard encoder is that self-attention can access information from both earlier and later positions in the input sequence."
      ],

      process: [
        "Input tokens",
        "↓",
        "Token embeddings",
        "↓",
        "Positional information",
        "↓",
        "Encoder Block 1",
        "↓",
        "Encoder Block 2",
        "↓",
        "⋮",
        "↓",
        "Encoder Block N",
        "↓",
        "Contextual representations"
      ]
    },

    {
      heading: "4. Bidirectional Self-Attention",

      content: [
        "Encoder self-attention is commonly bidirectional.",
        "This means a token can attend to relevant tokens on either side of its position.",
        "For representation-learning tasks, this allows the model to construct a representation using the complete input context."
      ],

      comparisonTables: [
        {
          title: "Bidirectional vs Causal Attention",
          headers: ["Property", "Bidirectional", "Causal"],
          rows: [
            ["Future tokens visible?", "Yes", "No"],
            ["Typical use", "Encoder representations", "Autoregressive generation"],
            ["Mask required?", "Usually no causal mask", "Yes"],
            ["Context direction", "Both directions", "Past and current positions"]
          ]
        }
      ]
    },

    {
      heading: "5. Encoder Block Structure",

      process: [
        "Input hidden states",
        "↓",
        "LayerNorm",
        "↓",
        "Multi-Head Self-Attention",
        "↓",
        "Residual connection",
        "↓",
        "LayerNorm",
        "↓",
        "Feed-Forward Network",
        "↓",
        "Residual connection",
        "↓",
        "Encoder output"
      ],

      formulas: [
        "Y = X + MHA(LN(X))",
        "Z = Y + FFN(LN(Y))"
      ]
    },

    {
      heading: "6. Encoder-Only Models",

      content: [
        "An encoder-only model contains only the encoder portion of the Transformer.",
        "Its main purpose is usually to produce useful contextual representations rather than directly generate long sequences token by token.",
        "Such architectures are useful for classification, semantic representation, token-level prediction, and retrieval-related tasks."
      ],

      classificationTree: [
        "Encoder-only Model",
        "├── Input sequence",
        "├── Bidirectional attention",
        "├── Contextual hidden states",
        "└── Task-specific output head"
      ]
    },

    {
      heading: "7. Decoder-Only Transformer",

      content: [
        "A decoder-only Transformer removes the encoder stack and uses a stack of decoder-style self-attention blocks.",
        "For autoregressive language modeling, self-attention is causal.",
        "Each position can use the current and previous positions but cannot access future tokens.",
        "This architecture naturally supports next-token prediction."
      ],

      process: [
        "Prompt tokens",
        "↓",
        "Token embeddings",
        "↓",
        "Positional information",
        "↓",
        "Causal Transformer Block 1",
        "↓",
        "Causal Transformer Block 2",
        "↓",
        "⋮",
        "↓",
        "Causal Transformer Block N",
        "↓",
        "Vocabulary logits",
        "↓",
        "Next-token probability distribution"
      ]
    },

    {
      heading: "8. Why Causal Masking Is Important",

      content: [
        "During autoregressive training, the model must learn to predict the next token without seeing that future token as input information.",
        "A causal mask prevents information from future positions from leaking into the current prediction.",
        "Without causal masking, the model could directly access information that it is supposed to predict."
      ],

      formulas: [
        "Allowed(i,j) = 1 if j ≤ i",
        "Allowed(i,j) = 0 if j > i"
      ]
    },

    {
      heading: "9. Decoder Block in the Original Encoder–Decoder Transformer",

      content: [
        "The decoder in the original encoder–decoder Transformer contains two different attention mechanisms.",
        "The first is masked self-attention over the target sequence.",
        "The second is cross-attention between the decoder representation and the encoder output.",
        "The decoder also contains a feed-forward network."
      ],

      classificationTree: [
        "Decoder Block",
        "├── Masked Self-Attention",
        "├── Residual + Normalization",
        "├── Cross-Attention",
        "├── Residual + Normalization",
        "├── Feed-Forward Network",
        "└── Residual + Normalization"
      ]
    },

    {
      heading: "10. What Is Cross-Attention?",

      content: [
        "Cross-attention allows one sequence representation to retrieve information from another sequence representation.",
        "In encoder–decoder Transformers, the decoder creates queries from its current hidden states.",
        "The encoder output provides keys and values.",
        "This allows the decoder to selectively use information from the encoded source sequence."
      ],

      formulas: [
        "Q = X_decoder W_Q",
        "K = X_encoder W_K",
        "V = X_encoder W_V",
        "CrossAttention(Q,K,V) = softmax(QKᵀ / √d_k)V"
      ],

      table: {
        headers: ["Tensor", "Source"],
        rows: [
          ["Q", "Decoder hidden states"],
          ["K", "Encoder output"],
          ["V", "Encoder output"]
        ]
      }
    },

    {
      heading: "11. Self-Attention vs Cross-Attention",

      comparisonTables: [
        {
          title: "Attention Mechanism Comparison",
          headers: ["Property", "Self-Attention", "Cross-Attention"],
          rows: [
            ["Q source", "Same sequence", "Decoder sequence"],
            ["K source", "Same sequence", "Encoder sequence"],
            ["V source", "Same sequence", "Encoder sequence"],
            ["Purpose", "Mix information within a sequence", "Retrieve information from another representation"],
            ["Typical encoder use", "Yes", "No"],
            ["Typical encoder–decoder decoder use", "Yes", "Yes"]
          ]
        }
      ]
    },

    {
      heading: "12. Complete Encoder–Decoder Data Flow",

      process: [
        "Source text",
        "↓",
        "Source tokenizer",
        "↓",
        "Encoder embeddings",
        "↓",
        "Encoder stack",
        "↓",
        "Encoder representations",
        "↓",
        "Decoder receives previous target tokens",
        "↓",
        "Masked self-attention",
        "↓",
        "Cross-attention to encoder output",
        "↓",
        "FFN",
        "↓",
        "Vocabulary projection",
        "↓",
        "Next target token"
      ]
    },

    {
      heading: "13. Encoder-Only vs Decoder-Only vs Encoder–Decoder",

      comparisonTables: [
        {
          title: "Architecture Comparison",
          headers: [
            "Property",
            "Encoder-only",
            "Decoder-only",
            "Encoder–decoder"
          ],
          rows: [
            [
              "Attention",
              "Bidirectional",
              "Causal",
              "Encoder bidirectional + decoder causal"
            ],
            [
              "Natural strength",
              "Representation learning",
              "Autoregressive generation",
              "Sequence-to-sequence transformation"
            ],
            [
              "Cross-attention",
              "No",
              "No in basic decoder-only design",
              "Yes"
            ],
            [
              "Typical output",
              "Representations / predictions",
              "Generated sequence",
              "Generated target sequence"
            ],
            [
              "Input-output relationship",
              "Input-focused",
              "Continuation-focused",
              "Source-to-target"
            ]
          ]
        }
      ]
    },

    {
      heading: "14. Choosing the Architecture for a Task",

      content: [
        "Architecture selection depends on the required information flow and output behavior.",
        "Tasks that require a contextual representation of an input may naturally fit encoder-style architectures.",
        "Tasks that require open-ended autoregressive generation naturally fit decoder-only architectures.",
        "Tasks that transform one sequence into another can naturally fit encoder–decoder architectures."
      ],

      table: {
        headers: ["Task type", "Natural architecture family"],
        rows: [
          ["Text classification", "Encoder-only"],
          ["Token classification", "Encoder-only"],
          ["Semantic representation", "Encoder-only"],
          ["Open-ended text generation", "Decoder-only"],
          ["Autoregressive completion", "Decoder-only"],
          ["Translation", "Encoder–decoder"],
          ["Sequence transformation", "Encoder–decoder"],
          ["Conditional generation", "Encoder–decoder or decoder-only depending on design"]
        ]
      }
    },

    {
      heading: "15. Why Decoder-Only Models Are Powerful for LLMs",

      content: [
        "Decoder-only architectures provide a simple autoregressive training objective: predict the next token from previous tokens.",
        "The same basic objective can be applied to large amounts of text.",
        "At inference time, the model can repeatedly predict the next token and append it to the sequence.",
        "This creates a unified mechanism for many generation tasks."
      ],

      formulas: [
        "P(x₁,...,x_T) = Πₜ P(xₜ | x₁,...,xₜ₋₁)"
      ]
    },

    {
      heading: "16. Architecture and Information Flow",

      content: [
        "The most important difference between these architectures is not simply whether a component exists. It is how information is allowed to flow.",
        "Encoder-only architectures allow contextual information to move in both directions.",
        "Decoder-only architectures restrict information flow to the causal direction.",
        "Encoder–decoder architectures create two information pathways: contextual encoding of the source and controlled generation of the target."
      ],

      classificationTree: [
        "Information Flow",
        "├── Encoder-only",
        "│   └── Position ↔ surrounding positions",
        "├── Decoder-only",
        "│   └── Position ← previous positions",
        "└── Encoder–Decoder",
        "    ├── Encoder: bidirectional",
        "    ├── Decoder: causal",
        "    └── Decoder → Encoder information through cross-attention"
      ]
    },

    {
      heading: "17. Parameter Sharing and Architectural Choices",

      content: [
        "Different Transformer implementations make different choices about parameterization, normalization, activation functions, positional information, and attention variants.",
        "The high-level architecture therefore provides a conceptual framework rather than a complete description of every modern LLM."
      ],

      table: {
        headers: ["Design decision", "Possible choices"],
        rows: [
          ["Normalization", "Pre-Norm / Post-Norm"],
          ["Activation", "ReLU / GELU / gated variants"],
          ["Position", "Absolute / relative / rotary approaches"],
          ["Attention", "MHA / MQA / GQA variants"],
          ["Architecture", "Encoder / Decoder / Encoder–Decoder"]
        ]
      }
    },

    {
      heading: "18. Architecture Mental Model",

      content: [
        "Think of an encoder as a system that reads and contextualizes an entire input.",
        "Think of a decoder-only model as a system that reads a prefix and predicts what comes next.",
        "Think of an encoder–decoder system as a system that reads one sequence and generates another while consulting the encoded source."
      ],

      classificationTree: [
        "Transformer Family",
        "├── Read and represent",
        "│   └── Encoder-only",
        "├── Continue and generate",
        "│   └── Decoder-only",
        "└── Transform source → target",
        "    └── Encoder–decoder"
      ]
    },

    {
      heading: "19. Common Misconceptions",

      content: [
        "The term decoder does not automatically mean that a model is generative; the exact attention and training setup matters.",
        "Encoder-only models can still produce predictions through task-specific output heads.",
        "Decoder-only models do not require an encoder in the standard architecture.",
        "Cross-attention is different from self-attention because its keys and values can come from a different representation.",
        "Bidirectional attention is not appropriate for ordinary autoregressive next-token prediction because it would expose future information.",
        "Encoder–decoder and decoder-only architectures can both perform generation, but their information flow is different."
      ]
    },

    {
      heading: "20. Interview Questions",

      content: [
        "What are the three major Transformer architecture families?",
        "What is an encoder-only model?",
        "What is a decoder-only model?",
        "What is an encoder–decoder model?",
        "What is bidirectional attention?",
        "What is causal attention?",
        "Why is causal masking required for autoregressive generation?",
        "What is cross-attention?",
        "Where do Q, K, and V come from in cross-attention?",
        "What is the difference between self-attention and cross-attention?",
        "Why are decoder-only architectures useful for language generation?",
        "Which architecture is naturally suited to sequence-to-sequence tasks?",
        "Why can an encoder representation use future tokens while a causal decoder cannot?"
      ]
    }
  ],

  codeExamples: [
    {
      title: "Causal Mask",
      language: "python",
      code: `import numpy as np

sequence_length = 5

mask = np.tril(
    np.ones((sequence_length, sequence_length))
)

print(mask)`
    },

    {
      title: "Apply a Causal Mask",
      language: "python",
      code: `import numpy as np

scores = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
], dtype=float)

mask = np.triu(
    np.ones_like(scores),
    k=1
).astype(bool)

scores[mask] = -np.inf

print(scores)`
    },

    {
      title: "Cross-Attention Shape Reasoning",
      language: "python",
      code: `batch_size = 2
decoder_length = 16
encoder_length = 32
d_model = 512

print("Decoder states:",
      (batch_size, decoder_length, d_model))

print("Encoder states:",
      (batch_size, encoder_length, d_model))

print("Cross-attention scores:",
      (batch_size, decoder_length, encoder_length))`
    }
  ],

  mathIntuition: [
    {
      concept: "Encoder representation",
      intuition:
        "Every position can build a representation using information from the complete visible input sequence.",
      equation:
        "H_encoder = Encoder(X)"
    },
    {
      concept: "Causal decoder",
      intuition:
        "Each position predicts using only the prefix that is available before or at that position.",
      equation:
        "P(x_t | x_1,...,x_(t-1))"
    },
    {
      concept: "Cross-attention",
      intuition:
        "The decoder queries information stored in the encoder representation.",
      equation:
        "softmax(Q_decoder K_encoderᵀ / √d_k)V_encoder"
    },
    {
      concept: "Sequence-to-sequence generation",
      intuition:
        "The model maps an encoded source sequence into a generated target sequence.",
      equation:
        "P(Y | X) = Πₜ P(y_t | y_<t, X)"
    }
  ],

  exercises: [
    {
      question:
        "What is the key attention difference between encoder-only and decoder-only Transformers?",
      answer:
        "Encoder-only models generally use bidirectional self-attention, while decoder-only language models use causal self-attention."
    },
    {
      question:
        "Why does the original Transformer decoder contain cross-attention?",
      answer:
        "It allows the decoder to retrieve relevant information from the encoder's representation of the source sequence."
    },
    {
      question:
        "Where do Q, K, and V originate in decoder cross-attention?",
      answer:
        "Q comes from the decoder hidden states, while K and V come from the encoder output."
    },
    {
      question:
        "Which architecture naturally supports autoregressive text completion?",
      answer:
        "A decoder-only causal Transformer."
    },
    {
      question:
        "Why can't ordinary bidirectional attention be directly used for next-token prediction during training?",
      answer:
        "Because the current position could access future tokens that it is supposed to predict."
    }
  ],

  codingExercises: [
    {
      title: "Implement a Causal Mask",
      difficulty: "Easy",
      task:
        "Create a NumPy function that generates a lower-triangular causal attention mask."
    },
    {
      title: "Implement Masked Attention",
      difficulty: "Medium",
      task:
        "Implement scaled dot-product attention with a causal mask."
    },
    {
      title: "Implement Cross-Attention Shapes",
      difficulty: "Medium",
      task:
        "Create arrays representing decoder queries and encoder keys/values and verify the resulting attention-score dimensions."
    },
    {
      title: "Compare Attention Directions",
      difficulty: "Advanced",
      task:
        "Create a visualization of bidirectional and causal attention matrices."
    }
  ],

  architectureExercises: [
    {
      title: "Draw Three Architectures",
      task:
        "Draw encoder-only, decoder-only, and encoder–decoder Transformer architectures side by side."
    },
    {
      title: "Trace Translation",
      task:
        "Trace an English sentence through an encoder–decoder architecture until the first target-language token is generated."
    },
    {
      title: "Trace Autoregressive Generation",
      task:
        "Trace a prompt through a decoder-only Transformer and explain how one new token is produced."
    }
  ],

  comparisonTables: [
    {
      title: "Transformer Architecture Families",
      headers: [
        "Feature",
        "Encoder-only",
        "Decoder-only",
        "Encoder–decoder"
      ],
      rows: [
        ["Self-attention", "Bidirectional", "Causal", "Both"],
        ["Cross-attention", "No", "Usually no", "Yes"],
        ["Generation", "Not primary", "Primary", "Primary"],
        ["Representation learning", "Strong", "Also possible", "Possible"],
        ["Sequence-to-sequence", "Not natural", "Possible with prompting/design", "Natural"]
      ]
    }
  ],

  commonMistakes: [
    "Confusing encoder self-attention with decoder causal self-attention.",
    "Forgetting that decoder cross-attention uses encoder outputs.",
    "Thinking cross-attention and self-attention are identical.",
    "Forgetting causal masking in decoder-only language models.",
    "Assuming every Transformer is encoder–decoder.",
    "Assuming encoder-only models cannot make predictions.",
    "Confusing sequence-to-sequence generation with simple next-token continuation."
  ],

  summary: [
    "Transformers can be organized as encoder-only, decoder-only, or encoder–decoder architectures.",
    "Encoder-only models generally use bidirectional self-attention.",
    "Decoder-only language models generally use causal self-attention.",
    "Encoder–decoder models combine an encoder and decoder and use cross-attention.",
    "Cross-attention allows the decoder to retrieve information from encoder representations.",
    "The original Transformer is an encoder–decoder architecture.",
    "Decoder-only architectures naturally support autoregressive next-token prediction.",
    "The major architectural difference is the way information is allowed to flow."
  ],

  keyTakeaways: [
    "Encoder-only = contextual representation.",
    "Decoder-only = causal generation.",
    "Encoder–decoder = source-to-target transformation.",
    "Self-attention = information within a sequence.",
    "Cross-attention = information from another representation.",
    "Causal masking = no future-token leakage."
  ],

  visualReferences: [
    {
      title: "Attention Is All You Need",
      url: "https://arxiv.org/abs/1706.03762",
      description:
        "Original Transformer architecture."
    },
    {
      title: "The Illustrated Transformer",
      url: "https://jalammar.github.io/illustrated-transformer/",
      description:
        "Visual explanation of encoder and decoder components."
    },
    {
      title: "Hugging Face Transformers Documentation",
      url: "https://huggingface.co/docs/transformers/",
      description:
        "Practical documentation for Transformer architectures."
    }
  ]
};

export default lesson9;

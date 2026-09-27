const lesson3 = {
  id: "lesson3",
  moduleId: "module2",
  lessonNumber: 3,

  title: "Tokens, Vocabulary & Language Representation",

  subtitle:
    "Understand how human language is converted into tokens, token IDs, sequences, vocabulary structures, and model-ready representations.",

  description:
    "Before an LLM can process language, text must be converted into a numerical representation. This lesson explains tokenization from first principles, token types, vocabulary construction, token IDs, special tokens, subword tokenization, sequence construction, padding, truncation, attention masks, token counts, multilingual considerations, and the complete text-to-model representation pipeline.",

  estimatedTime: "150–180 min",
  difficulty: "Intermediate",

  learningObjectives: [
    "Understand why LLMs use tokens.",
    "Understand the difference between characters, words, and tokens.",
    "Understand token IDs.",
    "Understand vocabulary.",
    "Understand subword tokenization.",
    "Understand special tokens.",
    "Understand beginning-of-sequence and end-of-sequence concepts.",
    "Understand unknown tokens.",
    "Understand padding and truncation.",
    "Understand attention masks.",
    "Understand token counts and context limits.",
    "Understand how tokenization affects cost and latency.",
    "Understand multilingual tokenization challenges.",
    "Understand the complete text-to-token pipeline.",
    "Implement simple tokenization experiments in Python."
  ],

  sections: [

    {
      heading: "1. Why Do LLMs Need Tokens?",

      content: [
        "Neural networks operate on numerical representations rather than raw human-readable text.",
        "An LLM therefore needs a mechanism that converts text into discrete units that can be mapped to numbers.",
        "These units are commonly called tokens.",
        "Tokenization is the process of converting text into a sequence of tokens."
      ],

      process: [
        "Human text",
        "↓",
        "Tokenizer",
        "↓",
        "Tokens",
        "↓",
        "Token IDs",
        "↓",
        "Embeddings",
        "↓",
        "Transformer"
      ]
    },

    {
      heading: "2. Text Representation Hierarchy",

      classificationTree: [
        "Human Language",
        "│",
        "├── Characters",
        "│",
        "├── Words",
        "│",
        "├── Subwords",
        "│",
        "└── Tokens",
        "    │",
        "    ├── Whole words",
        "    ├── Word fragments",
        "    ├── Punctuation",
        "    ├── Whitespace-related units",
        "    └── Special tokens"
      ]
    },

    {
      heading: "3. Character-Level Representation",

      content: [
        "One simple strategy is to treat every character as a separate unit.",
        "For example, the word 'cat' could become c, a, t.",
        "Character-level representations have very small vocabularies but produce much longer sequences."
      ],

      example: {
        text: "cat",
        representation: ["c", "a", "t"]
      },

      table: [
        {
          advantage: "Very small vocabulary",
          limitation: "Very long sequences"
        },
        {
          advantage: "Can handle unfamiliar words",
          limitation: "Long-range patterns become harder to model"
        }
      ]
    },

    {
      heading: "4. Word-Level Representation",

      content: [
        "A word-level tokenizer treats complete words as tokens.",
        "For example, 'machine learning is useful' can conceptually become four tokens."
      ],

      example: {
        text: "machine learning is useful",
        tokens: [
          "machine",
          "learning",
          "is",
          "useful"
        ]
      },

      table: [
        {
          advantage: "Shorter sequences",
          limitation: "Very large vocabulary"
        },
        {
          advantage: "Tokens may correspond to meaningful words",
          limitation: "Rare or unseen words are difficult to represent"
        }
      ]
    },

    {
      heading: "5. Why Word-Level Tokenization Is Not Enough",

      content: [
        "Natural language contains an enormous number of possible word forms.",
        "Words can be created through prefixes, suffixes, compounds, names, spelling variations, technical terms, and new vocabulary.",
        "A vocabulary containing every possible word would become extremely large."
      ]
    },

    {
      heading: "6. Subword Tokenization",

      content: [
        "Subword tokenization provides a compromise between character-level and word-level representations.",
        "Common words can often be represented efficiently, while uncommon words can be decomposed into smaller units."
      ],

      classificationTree: [
        "Tokenization Strategies",
        "├── Character-level",
        "├── Word-level",
        "└── Subword-level",
        "    ├── BPE-style approaches",
        "    ├── WordPiece-style approaches",
        "    └── Unigram-style approaches"
      ]
    },

    {
      heading: "7. Conceptual Subword Example",

      content: [
        "Consider the word 'unhappiness'.",
        "A subword tokenizer might represent it conceptually as multiple pieces such as 'un', 'happi', and 'ness'.",
        "The exact segmentation depends on the tokenizer vocabulary and algorithm."
      ],

      example: {
        word: "unhappiness",
        conceptualTokens: [
          "un",
          "happi",
          "ness"
        ],
        note:
          "This is an educational example, not a claim about a specific production tokenizer."
      }
    },

    {
      heading: "8. Tokenization Classification",

      table: [
        {
          approach: "Character",
          vocabularySize: "Very small",
          sequenceLength: "Very large"
        },
        {
          approach: "Word",
          vocabularySize: "Very large",
          sequenceLength: "Shorter"
        },
        {
          approach: "Subword",
          vocabularySize: "Moderate",
          sequenceLength: "Moderate"
        }
      ]
    },

    {
      heading: "9. What Is a Vocabulary?",

      content: [
        "A tokenizer vocabulary is a collection of token units that the tokenizer can map to token IDs.",
        "Each token generally has an associated integer identifier.",
        "The vocabulary is part of the model's input representation system."
      ],

      process: [
        "Vocabulary",
        "↓",
        "Token string",
        "↕",
        "Token ID",
        "↓",
        "Embedding lookup"
      ]
    },

    {
      heading: "10. Token IDs",

      content: [
        "A token ID is an integer identifier assigned to a token in a vocabulary.",
        "The integer itself has no inherent semantic meaning.",
        "The model uses the ID to retrieve or construct a learned numerical representation."
      ],

      example: {
        conceptualVocabulary: {
          "<PAD>": 0,
          "<BOS>": 1,
          "<EOS>": 2,
          "cat": 3,
          "dog": 4,
          "runs": 5
        },
        text:
          "cat runs",
        tokenIDs: [
          3,
          5
        ]
      }
    },

    {
      heading: "11. Token ID ≠ Token Meaning",

      content: [
        "Token IDs are indexes, not semantic coordinates.",
        "Token ID 100 is not inherently 'more meaningful' than token ID 20.",
        "Meaningful representations arise after the token IDs are mapped into learned embeddings and transformed through the neural network."
      ]
    },

    {
      heading: "12. Special Tokens",

      content: [
        "Tokenizers and models can use special tokens to represent structural information.",
        "The exact special tokens vary between model families."
      ],

      classificationTree: [
        "Special Tokens",
        "├── Beginning-of-sequence",
        "├── End-of-sequence",
        "├── Padding",
        "├── Unknown",
        "├── Separator",
        "└── Model-specific control tokens"
      ]
    },

    {
      heading: "13. Beginning-of-Sequence",

      content: [
        "A beginning-of-sequence token can explicitly mark the start of a sequence when a particular tokenizer/model design uses one.",
        "It provides structural information to the model."
      ]
    },

    {
      heading: "14. End-of-Sequence",

      content: [
        "An end-of-sequence token can indicate that a sequence or generation should terminate.",
        "During generation, encountering an end-of-sequence token can be one of the stopping conditions."
      ]
    },

    {
      heading: "15. Padding Token",

      content: [
        "Neural-network implementations often process multiple sequences together in a batch.",
        "Because sequences may have different lengths, shorter sequences can be padded to a common length.",
        "Padding tokens are generally masked so that they do not contribute as normal content."
      ],

      process: [
        "Short sequence",
        "↓",
        "Add padding tokens",
        "↓",
        "Equal sequence length",
        "↓",
        "Create attention mask",
        "↓",
        "Batch processing"
      ]
    },

    {
      heading: "16. Padding Example",

      example: {
        sequence1: [
          "I",
          "like",
          "AI",
          "<PAD>",
          "<PAD>"
        ],
        sequence2: [
          "I",
          "like",
          "machine",
          "learning",
          "today"
        ],
        attentionMask1: [
          1,
          1,
          1,
          0,
          0
        ],
        attentionMask2: [
          1,
          1,
          1,
          1,
          1
        ]
      },

      contentAfterExample: [
        "The mask indicates which positions contain meaningful sequence content."
      ]
    },

    {
      heading: "17. Attention Mask",

      content: [
        "An attention mask is a mechanism used to indicate which positions should be considered valid or visible for a particular computation.",
        "Different model implementations can use masks for different purposes."
      ],

      classificationTree: [
        "Masking",
        "├── Padding mask",
        "│   └── Ignore padding positions",
        "└── Causal mask",
        "    └── Prevent access to future positions"
      ]
    },

    {
      heading: "18. Padding Mask vs Causal Mask",

      table: [
        {
          mask: "Padding mask",
          purpose: "Prevent padded positions from being treated as normal content"
        },
        {
          mask: "Causal mask",
          purpose: "Prevent future-token access during autoregressive generation"
        }
      ]
    },

    {
      heading: "19. Truncation",

      content: [
        "A model has a finite context capacity determined by its architecture and serving configuration.",
        "If an input sequence is longer than the allowed limit, an application may need to truncate it or otherwise reduce the amount of context."
      ],

      process: [
        "Long document",
        "↓",
        "Tokenize",
        "↓",
        "Token count exceeds limit",
        "↓",
        "Apply truncation / chunking / summarization strategy",
        "↓",
        "Valid context",
        "↓",
        "Model"
      ]
    },

    {
      heading: "20. Token Count Matters",

      content: [
        "Token count influences context usage, latency, memory requirements, and in many commercial systems, usage cost.",
        "The number of characters or words in a document cannot always be used as an exact substitute for token count."
      ]
    },

    {
      heading: "21. Words Are Not Equal to Tokens",

      content: [
        "A common misconception is that one word always corresponds to one token.",
        "In reality, tokenization depends on the tokenizer and vocabulary.",
        "A single word may correspond to multiple tokens, while some tokens may include spaces, punctuation, or common word fragments."
      ]
    },

    {
      heading: "22. Token Count Pipeline",

      process: [
        "Raw text",
        "↓",
        "Tokenizer",
        "↓",
        "Token sequence",
        "↓",
        "Count tokens",
        "↓",
        "Check context budget",
        "↓",
        "Prepare model input"
      ]
    },

    {
      heading: "23. Tokenization and Cost",

      content: [
        "In systems that charge according to token usage, tokenization directly influences the amount of billable input or output.",
        "Efficient prompts and retrieval systems therefore pay attention to token count."
      ],

      formula:
        "Approximate token usage = input tokens + generated output tokens"
    },

    {
      heading: "24. Tokenization and Latency",

      content: [
        "More input tokens generally mean more computation.",
        "For Transformer-based models, attention-related computation can grow significantly with sequence length.",
        "Output length also matters because autoregressive generation produces tokens sequentially."
      ]
    },

    {
      heading: "25. Multilingual Tokenization",

      content: [
        "Different languages can produce different tokenization behavior.",
        "Writing systems, word boundaries, morphology, vocabulary coverage, and training data distribution can all influence tokenization efficiency."
      ],

      table: [
        {
          factor: "Writing system",
          effect: "Can affect segmentation"
        },
        {
          factor: "Morphology",
          effect: "Can create many word forms"
        },
        {
          factor: "Training data",
          effect: "Influences vocabulary coverage"
        },
        {
          factor: "Tokenizer design",
          effect: "Determines available token units"
        }
      ]
    },

    {
      heading: "26. Code Tokenization",

      content: [
        "Programming languages also need tokenization.",
        "Code tokenization must preserve important structural patterns such as identifiers, operators, punctuation, indentation-related structure where relevant, and syntax."
      ],

      example: {
        code: "total = price * quantity",
        conceptualTokens: [
          "total",
          "=",
          "price",
          "*",
          "quantity"
        ]
      }
    },

    {
      heading: "27. Numbers and Tokenization",

      content: [
        "Numbers can be represented using one or multiple tokens depending on the tokenizer.",
        "This matters because numerical reasoning and exact arithmetic can be challenging for language models."
      ]
    },

    {
      heading: "28. Whitespace and Punctuation",

      content: [
        "Whitespace and punctuation can influence tokenization.",
        "The exact representation is tokenizer-dependent."
      ],

      example: {
        text1: "hello world",
        text2: "hello, world!",
        observation:
          "The token sequences can differ because punctuation contributes to the tokenization process."
      }
    },

    {
      heading: "29. Tokenization Is a Compression Tradeoff",

      content: [
        "A tokenizer attempts to represent text using a manageable vocabulary while avoiding unnecessarily long sequences.",
        "Large vocabulary units can shorten sequences but increase vocabulary size.",
        "Small units reduce vocabulary requirements but increase sequence length."
      ],

      formula:
        "Tokenization tradeoff ≈ vocabulary size ↔ sequence length"
    },

    {
      heading: "30. Tokenization Pipeline in an LLM",

      codeBlock:
        "                 RAW TEXT\n                    │\n                    ▼\n                TOKENIZER\n                    │\n                    ▼\n               TOKEN STRINGS\n                    │\n                    ▼\n                TOKEN IDs\n                    │\n                    ▼\n              EMBEDDING LOOKUP\n                    │\n                    ▼\n             VECTOR REPRESENTATIONS\n                    │\n                    ▼\n             TRANSFORMER LAYERS"
    },

    {
      heading: "31. Batch Construction",

      content: [
        "Training and inference systems frequently process multiple sequences together.",
        "Batch construction converts variable-length sequences into a representation suitable for efficient computation."
      ],

      process: [
        "Multiple sequences",
        "↓",
        "Tokenize",
        "↓",
        "Find batch length",
        "↓",
        "Pad shorter sequences",
        "↓",
        "Create masks",
        "↓",
        "Tensor batch",
        "↓",
        "Model"
      ]
    },

    {
      heading: "32. Tensor Representation",

      content: [
        "After tokenization and batching, token IDs are typically represented as tensors.",
        "For a simple batch, a tensor can conceptually have dimensions corresponding to batch size and sequence length."
      ],

      formula:
        "Input tensor shape ≈ [batch_size, sequence_length]"
    },

    {
      heading: "33. Embedding Lookup Preview",

      content: [
        "Token IDs are used to retrieve rows from a learned embedding matrix.",
        "This converts discrete token identifiers into dense numerical vectors."
      ],

      formula:
        "Embedding matrix E ∈ R^(V × d)",

      contentAfterFormula: [
        "V is the vocabulary size and d is the embedding dimension.",
        "A token ID selects one row of this matrix."
      ]
    },

    {
      heading: "34. Vocabulary Size vs Embedding Dimension",

      table: [
        {
          quantity: "Vocabulary size V",
          meaning: "Number of available token entries"
        },
        {
          quantity: "Embedding dimension d",
          meaning: "Number of numerical features in each token embedding"
        }
      ]
    },

    {
      heading: "35. Why Tokenization Is Important for LLM Engineering",

      content: [
        "Tokenization influences prompt length, context usage, retrieval chunk size, memory requirements, latency, cost, and output limits.",
        "Therefore tokenization is not merely a preprocessing detail. It is part of practical LLM system design."
      ]
    },

    {
      heading: "36. Tokenization and RAG",

      content: [
        "Retrieval systems often split documents into chunks before embedding them.",
        "Chunk size should be considered in token units or another representation appropriate to the embedding/model system.",
        "Very small chunks may lose context, while very large chunks can consume excessive context."
      ],

      process: [
        "Document",
        "↓",
        "Tokenize / estimate token count",
        "↓",
        "Choose chunk size",
        "↓",
        "Create chunks",
        "↓",
        "Embed chunks",
        "↓",
        "Retrieve relevant chunks",
        "↓",
        "Place selected chunks into LLM context"
      ]
    },

    {
      heading: "37. Special Tokens in Chat Systems",

      content: [
        "Modern chat-oriented models often use structured message formats internally or through their serving interfaces.",
        "System, user, assistant, tool, and other roles may be represented through model-specific formatting or control tokens.",
        "The exact representation depends on the model and API."
      ],

      classificationTree: [
        "Conversation Structure",
        "├── System",
        "├── User",
        "├── Assistant",
        "├── Tool",
        "└── Model-specific control information"
      ]
    },

    {
      heading: "38. Tokenization Is Model-Specific",

      content: [
        "There is no universal tokenization scheme shared by every language model.",
        "Different models can use different vocabularies, algorithms, special tokens, and handling of text."
      ]
    },

    {
      heading: "39. Tokenizer + Model Compatibility",

      content: [
        "A tokenizer must be compatible with the model that expects its vocabulary and token ID mapping.",
        "Using an incompatible tokenizer can produce invalid or meaningless model inputs."
      ],

      process: [
        "Text",
        "↓",
        "Correct tokenizer",
        "↓",
        "Expected token IDs",
        "↓",
        "Correct embedding lookup",
        "↓",
        "Model"
      ]
    },

    {
      heading: "40. Common Tokenization Mistakes",

      content: [
        "Mistake 1: Assuming one word equals one token.",
        "Correction: Token boundaries are tokenizer-specific.",
        "Mistake 2: Assuming token IDs contain semantic meaning.",
        "Correction: IDs are vocabulary indexes.",
        "Mistake 3: Ignoring padding.",
        "Correction: Batched variable-length sequences may require padding and masking.",
        "Mistake 4: Ignoring context limits.",
        "Correction: Token count must be monitored.",
        "Mistake 5: Assuming all models use the same tokenizer.",
        "Correction: Tokenizer and model vocabulary must match.",
        "Mistake 6: Treating tokenization as irrelevant to cost.",
        "Correction: Token count can directly affect usage, latency, and context utilization."
      ]
    },

    {
      heading: "41. Interview Questions",

      content: [
        "What is tokenization?",
        "Why do LLMs use tokens?",
        "What is a token ID?",
        "What is a vocabulary?",
        "What is subword tokenization?",
        "Why is word-level tokenization insufficient?",
        "What is a special token?",
        "What is a padding token?",
        "What is an attention mask?",
        "What is truncation?",
        "Why does token count matter?",
        "Why can one word contain multiple tokens?",
        "How does tokenization affect LLM cost?",
        "How does tokenization affect latency?",
        "Why is tokenization model-specific?",
        "How are token IDs converted into embeddings?",
        "What is the difference between padding and causal masking?",
        "Why is tokenization important in RAG?"
      ]
    }
  ],

  formulas: [
    "Input tensor shape ≈ [batch_size, sequence_length]",
    "Embedding matrix E ∈ R^(V × d)",
    "Token usage ≈ input tokens + generated output tokens",
    "Tokenization tradeoff ≈ vocabulary size ↔ sequence length"
  ],

  codeExamples: [
    {
      title: "Simple Character Tokenizer",
      language: "python",
      code:
        "def tokenize_characters(text):\n    return list(text)\n\ntext = \"hello\"\nprint(tokenize_characters(text))"
    },
    {
      title: "Simple Vocabulary",
      language: "python",
      code:
        "vocabulary = {\n    \"<PAD>\": 0,\n    \"<BOS>\": 1,\n    \"<EOS>\": 2,\n    \"hello\": 3,\n    \"world\": 4\n}\n\ntext = [\"hello\", \"world\"]\nids = [vocabulary[token] for token in text]\n\nprint(ids)"
    },
    {
      title: "Padding a Sequence",
      language: "python",
      code:
        "def pad_sequence(tokens, target_length, pad_token=\"<PAD>\"):\n    if len(tokens) >= target_length:\n        return tokens[:target_length]\n\n    return tokens + [pad_token] * (target_length - len(tokens))\n\nprint(pad_sequence([\"I\", \"like\", \"AI\"], 5))"
    },
    {
      title: "Create a Padding Mask",
      language: "python",
      code:
        "def create_padding_mask(tokens, pad_token=\"<PAD>\"):\n    return [0 if token == pad_token else 1 for token in tokens]\n\nsequence = [\"I\", \"like\", \"AI\", \"<PAD>\", \"<PAD>\"]\nprint(create_padding_mask(sequence))"
    }
  ],

  mathIntuition: [
    {
      concept: "Vocabulary",
      explanation:
        "The vocabulary determines which discrete token units can be directly represented by token IDs."
    },
    {
      concept: "Token IDs",
      explanation:
        "Token IDs are integer indexes into the vocabulary rather than semantic coordinates."
    },
    {
      concept: "Embedding matrix",
      explanation:
        "Each token ID selects a learned vector from the embedding matrix."
    },
    {
      concept: "Sequence length",
      explanation:
        "More tokens mean longer model input and potentially greater computational requirements."
    }
  ],

  exercises: [
    {
      question:
        "Explain why LLMs cannot directly process ordinary text strings.",
      difficulty: "Easy"
    },
    {
      question:
        "Compare character, word, and subword tokenization.",
      difficulty: "Easy"
    },
    {
      question:
        "Why are subword tokenizers useful for rare words?",
      difficulty: "Medium"
    },
    {
      question:
        "Explain the difference between a token and a token ID.",
      difficulty: "Easy"
    },
    {
      question:
        "Why are padding tokens masked?",
      difficulty: "Medium"
    },
    {
      question:
        "Differentiate padding masks and causal masks.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain how tokenization affects context-window usage.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain why tokenization affects LLM cost and latency.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Build a Vocabulary",
      task:
        "Write a Python program that creates a vocabulary from a collection of sentences.",
      requirements: [
        "Count token frequency.",
        "Create token IDs.",
        "Reserve IDs for special tokens.",
        "Convert text into IDs."
      ]
    },
    {
      title: "Implement Token Count Analysis",
      task:
        "Analyze several text samples and compare their token counts using your tokenizer implementation.",
      requirements: [
        "Process multiple strings.",
        "Calculate token counts.",
        "Calculate average token count.",
        "Identify the longest sequence."
      ]
    },
    {
      title: "Implement Padding and Truncation",
      task:
        "Create a batch preparation function that pads short sequences and truncates long sequences.",
      requirements: [
        "Accept multiple token sequences.",
        "Determine target length.",
        "Pad short sequences.",
        "Truncate long sequences.",
        "Create attention masks."
      ]
    },
    {
      title: "Mini Tokenizer",
      task:
        "Build a simple subword-inspired tokenizer using frequent character pairs.",
      requirements: [
        "Count character-pair frequencies.",
        "Merge frequent pairs.",
        "Create a small vocabulary.",
        "Tokenize new text."
      ]
    }
  ],

  comparisonTables: [
    {
      title: "Characters vs Words vs Subwords",
      rows: [
        {
          property: "Vocabulary",
          characters: "Small",
          words: "Very large",
          subwords: "Moderate"
        },
        {
          property: "Sequence length",
          characters: "Long",
          words: "Short",
          subwords: "Moderate"
        },
        {
          property: "Rare words",
          characters: "Can represent",
          words: "Problematic",
          subwords: "Can decompose"
        }
      ]
    },
    {
      title: "Token Types",
      rows: [
        {
          type: "Content token",
          purpose: "Represents ordinary text"
        },
        {
          type: "Special token",
          purpose: "Represents structural information"
        },
        {
          type: "Padding token",
          purpose: "Aligns sequences for batching"
        },
        {
          type: "Control token",
          purpose: "Represents model-specific instructions or structure"
        }
      ]
    }
  ],

  summary: [
    "LLMs process numerical representations rather than raw text.",
    "Tokenization converts text into discrete units.",
    "Tokens may represent words, subwords, punctuation, or other units.",
    "Subword tokenization balances vocabulary size and sequence length.",
    "A vocabulary maps token units to token IDs.",
    "Token IDs are indexes and do not inherently contain semantic meaning.",
    "Special tokens can represent sequence boundaries or structural information.",
    "Padding allows variable-length sequences to be batched.",
    "Padding positions are commonly handled using masks.",
    "Causal masks prevent future-token access during autoregressive generation.",
    "Truncation or other context-management strategies are necessary when sequences exceed model limits.",
    "Token count affects context usage, latency, memory, and often cost.",
    "Different models can use different tokenizers and vocabularies.",
    "Token IDs are converted into learned vector representations through embedding lookup."
  ],

  keyTakeaways: [
    "Tokenization is the bridge between human language and neural-network computation.",
    "A token is not necessarily a word.",
    "A token ID is not the token's meaning.",
    "Subword tokenization is important for handling vocabulary efficiently.",
    "Padding and masking are essential for batch processing.",
    "Token count is a major engineering constraint.",
    "Tokenizer and model compatibility is essential.",
    "Tokenization directly connects to embeddings and Transformer computation."
  ],

  visualReferences: [
    {
      title: "Hugging Face Tokenizers",
      url:
        "https://huggingface.co/docs/tokenizers/",
      purpose:
        "Official documentation for tokenizer concepts and implementations."
    },
    {
      title: "Hugging Face LLM Course — Tokenizers",
      url:
        "https://huggingface.co/learn/llm-course/chapter2/4",
      purpose:
        "Detailed educational material on tokenization."
    }
  ]
};

export default lesson3;

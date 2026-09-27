const lesson4 = {
  id: "lesson4",
  moduleId: "module2",
  lessonNumber: 4,

  title: "Embeddings, Positional Information & Hidden States",

  subtitle:
    "Understand how token IDs become dense vectors, how position is represented, and how Transformer layers transform embeddings into contextual hidden states.",

  description:
    "This lesson explains the representation layer inside an LLM. It covers embedding matrices, token embeddings, vector dimensions, semantic geometry, positional representations, contextualization, hidden states, layer transformations, residual streams, normalization, and the distinction between token IDs, embeddings, hidden states, logits, and generated tokens.",

  estimatedTime: "180–210 min",
  difficulty: "Intermediate → Advanced",

  learningObjectives: [
    "Understand what an embedding is.",
    "Understand the embedding matrix.",
    "Understand embedding lookup.",
    "Understand embedding dimensions.",
    "Understand dense vector representations.",
    "Understand semantic similarity conceptually.",
    "Understand why token IDs are not semantic representations.",
    "Understand positional information.",
    "Understand contextual representations.",
    "Understand hidden states.",
    "Understand the difference between embeddings and hidden states.",
    "Understand residual streams.",
    "Understand normalization at a high level.",
    "Understand how representations change across Transformer layers.",
    "Understand how hidden states eventually produce logits."
  ],

  sections: [

    {
      heading: "1. From Token IDs to Vectors",

      content: [
        "Token IDs are discrete integers. Neural networks need continuous numerical representations that can be transformed through matrix operations.",
        "An embedding layer maps each token ID to a learned dense vector."
      ],

      process: [
        "Token",
        "↓",
        "Token ID",
        "↓",
        "Embedding matrix lookup",
        "↓",
        "Dense vector",
        "↓",
        "Transformer"
      ]
    },

    {
      heading: "2. What Is an Embedding?",

      content: [
        "An embedding is a learned numerical representation of an object in a vector space.",
        "For language models, token embeddings provide initial continuous representations for discrete token IDs.",
        "Later Transformer layers transform these representations into contextual hidden states."
      ]
    },

    {
      heading: "3. Embedding Matrix",

      formula:
        "E ∈ R^(V × d)",

      contentAfterFormula: [
        "V is vocabulary size.",
        "d is embedding dimension.",
        "Each row corresponds to a token's learned embedding vector."
      ],

      example: {
        vocabularySize: 50000,
        embeddingDimension: 768,
        conceptualShape:
          "50000 × 768"
      }
    },

    {
      heading: "4. Embedding Lookup",

      content: [
        "Suppose token ID 42 is provided to the model.",
        "The embedding layer retrieves row 42 from the embedding matrix.",
        "The result is a dense vector with d numerical components."
      ],

      codeBlock:
        "Token ID\n   │\n   ▼\nEmbedding Matrix\n   │\n   ├── Row 0\n   ├── Row 1\n   ├── Row 2\n   ├── ...\n   ├── Row 42  ← selected\n   └── ...\n        │\n        ▼\nEmbedding Vector"
    },

    {
      heading: "5. Embedding Example",

      example: {
        vocabulary: {
          "cat": 0,
          "dog": 1,
          "runs": 2
        },
        embeddingMatrix: [
          [0.21, 0.73, -0.11],
          [0.19, 0.68, -0.08],
          [-0.42, 0.15, 0.61]
        ]
      },

      contentAfterExample: [
        "If the token ID for 'cat' is 0, the model retrieves the first row as the initial token representation."
      ]
    },

    {
      heading: "6. Embedding Dimensions",

      content: [
        "The embedding dimension determines how many numerical values represent each token at the embedding layer.",
        "A larger dimension provides more representational capacity but also increases computation and memory requirements."
      ],

      table: [
        {
          concept: "Vocabulary size",
          meaning: "Number of token entries"
        },
        {
          concept: "Embedding dimension",
          meaning: "Number of numerical features per token representation"
        },
        {
          concept: "Embedding matrix",
          meaning: "Collection of all token embeddings"
        }
      ]
    },

    {
      heading: "7. Dense Vector Representation",

      content: [
        "Embeddings are generally dense vectors, meaning many dimensions can contain non-zero values.",
        "These vectors allow neural-network operations such as matrix multiplication, similarity calculations, and learned transformations."
      ]
    },

    {
      heading: "8. Token ID vs Embedding",

      table: [
        {
          property: "Token ID",
          representation: "Integer",
          semanticStructure: "Not inherently meaningful"
        },
        {
          property: "Embedding",
          representation: "Dense vector",
          semanticStructure: "Learned representation"
        }
      ]
    },

    {
      heading: "9. Why Not Use Token IDs Directly?",

      content: [
        "Suppose 'cat' has ID 20 and 'dog' has ID 21.",
        "The numerical difference between 20 and 21 does not mean the words are semantically close.",
        "Token IDs are arbitrary indexes. Embeddings allow the model to learn useful geometric relationships."
      ]
    },

    {
      heading: "10. Vector Geometry",

      content: [
        "Embeddings exist in a high-dimensional vector space.",
        "Geometric relationships between vectors can sometimes capture useful semantic or syntactic patterns.",
        "However, the exact interpretation of individual dimensions is generally not straightforward."
      ],

      formula:
        "Vector v = [v₁, v₂, ..., v_d]"
    },

    {
      heading: "11. Dot Product Similarity",

      formula:
        "a · b = Σᵢ aᵢbᵢ",

      contentAfterFormula: [
        "The dot product measures alignment between two vectors.",
        "Its value depends on both direction and magnitude."
      ]
    },

    {
      heading: "12. Cosine Similarity",

      formula:
        "cos(θ) = (a · b) / (||a|| ||b||)",

      contentAfterFormula: [
        "Cosine similarity compares vector direction.",
        "It is commonly used when comparing embedding vectors."
      ]
    },

    {
      heading: "13. Embedding Similarity Example",

      example: {
        vectorA: [1, 0],
        vectorB: [0.9, 0.1],
        vectorC: [-1, 0],
        observation:
          "A and B point in similar directions, while C points in the opposite direction."
      }
    },

    {
      heading: "14. Important Warning About Embeddings",

      content: [
        "Similarity in an embedding space does not automatically mean that two pieces of text are factually equivalent.",
        "Embedding similarity depends on the model, task, representation, and similarity metric.",
        "For retrieval systems, embeddings should therefore be evaluated on the actual retrieval task."
      ]
    },

    {
      heading: "15. Static vs Contextual Representations",

      classificationTree: [
        "Language Representations",
        "├── Static representation",
        "│   └── Same vector independent of surrounding text",
        "└── Contextual representation",
        "    └── Representation changes according to surrounding context"
      ]
    },

    {
      heading: "16. Why Context Matters",

      content: [
        "The word 'bank' can refer to a financial institution or the side of a river.",
        "A useful language representation should be able to distinguish these contexts."
      ],

      example: {
        sentence1:
          "I deposited money in the bank.",
        sentence2:
          "We sat beside the river bank.",
        observation:
          "The same token can participate in different contextual meanings."
      }
    },

    {
      heading: "17. Token Embedding vs Hidden State",

      table: [
        {
          representation: "Token embedding",
          stage: "Initial representation"
        },
        {
          representation: "Hidden state",
          stage: "Representation after Transformer computation"
        },
        {
          representation: "Logits",
          stage: "Scores used to form the next-token distribution"
        }
      ]
    },

    {
      heading: "18. Hidden States",

      content: [
        "Hidden states are intermediate representations produced inside a neural network.",
        "In a Transformer, token representations are repeatedly transformed through layers.",
        "These hidden states can incorporate information from surrounding context."
      ],

      process: [
        "Token embedding",
        "↓",
        "Transformer block 1",
        "↓",
        "Hidden state 1",
        "↓",
        "Transformer block 2",
        "↓",
        "Hidden state 2",
        "↓",
        "Transformer block 3",
        "↓",
        "Hidden state 3",
        "↓",
        "...",
        "↓",
        "Final hidden state"
      ]
    },

    {
      heading: "19. Representation Evolution",

      content: [
        "The representation of a token is not fixed throughout the Transformer.",
        "Each layer transforms the representation using attention and feed-forward computation.",
        "As the representation moves through layers, it can incorporate increasingly complex contextual information."
      ]
    },

    {
      heading: "20. Layer-by-Layer Representation",

      codeBlock:
        "Token ID\n   ↓\nToken Embedding\n   ↓\nRepresentation 0\n   ↓\nTransformer Layer 1\n   ↓\nRepresentation 1\n   ↓\nTransformer Layer 2\n   ↓\nRepresentation 2\n   ↓\n...\n   ↓\nTransformer Layer N\n   ↓\nFinal Hidden Representation"
    },

    {
      heading: "21. Positional Information",

      content: [
        "Attention allows tokens to interact, but a model must also represent where tokens occur or how their positions relate.",
        "Positional information provides the sequence with an ordering signal."
      ],

      process: [
        "Token embedding",
        "↓",
        "Positional information",
        "↓",
        "Combined representation",
        "↓",
        "Transformer"
      ]
    },

    {
      heading: "22. Combining Token and Position Information",

      formula:
        "X₀ = E_token + E_position",

      contentAfterFormula: [
        "This is a conceptual formulation used by some Transformer designs.",
        "Modern architectures can use alternative position mechanisms."
      ]
    },

    {
      heading: "23. Position Encoding Families",

      classificationTree: [
        "Position Information",
        "├── Absolute positional encoding",
        "│   ├── Fixed / sinusoidal",
        "│   └── Learned",
        "├── Relative position methods",
        "└── Rotary-style position representations"
      ]
    },

    {
      heading: "24. Why Position Changes Meaning",

      content: [
        "Consider:",
        "'The dog chased the cat.'",
        "and",
        "'The cat chased the dog.'",
        "The same words appear, but their relationships and positions differ.",
        "Position information helps the model distinguish these sequences."
      ]
    },

    {
      heading: "25. Rotary Position Representations",

      content: [
        "Rotary-style positional methods incorporate position information by applying position-dependent transformations to query and key representations.",
        "The exact mathematical implementation is architecture-specific."
      ],

      formula:
        "Q' = R(θ)Q",
      contentAfterFormula: [
        "The rotation matrix R(θ) depends on position-related information."
      ]
    },

    {
      heading: "26. Hidden States and Residual Streams",

      content: [
        "Transformer architectures often maintain a representation stream that is updated repeatedly by attention and feed-forward transformations.",
        "Residual connections allow transformations to be added back to the existing representation."
      ],

      formula:
        "x_{l+1} = x_l + F_l(x_l)"
    },

    {
      heading: "27. Why Residual Connections Matter",

      content: [
        "Deep neural networks require mechanisms that make optimization practical.",
        "Residual connections create direct pathways through the network and allow each block to learn a transformation relative to the existing representation."
      ]
    },

    {
      heading: "28. Normalization and Representations",

      content: [
        "Normalization is used in Transformer architectures to control representation statistics and support stable optimization.",
        "The exact placement and type of normalization can vary between architectures."
      ]
    },

    {
      heading: "29. Layer Normalization",

      content: [
        "Layer normalization operates across features of a representation rather than across the batch in the same way as batch normalization.",
        "Transformer architectures commonly use normalization around their major sublayers."
      ],

      formula:
        "LayerNorm(x) = γ ((x - μ) / √(σ² + ε)) + β"
    },

    {
      heading: "30. Representation Pipeline",

      codeBlock:
        "TEXT\n │\n ▼\nTOKENIZER\n │\n ▼\nTOKEN IDs\n │\n ▼\nTOKEN EMBEDDINGS\n │\n +\n │\nPOSITION INFORMATION\n │\n ▼\nINITIAL REPRESENTATION\n │\n ▼\n┌──────────────────────┐\n│ Transformer Layer 1  │\n└──────────┬───────────┘\n           ▼\n     Hidden State 1\n           │\n           ▼\n┌──────────────────────┐\n│ Transformer Layer 2  │\n└──────────┬───────────┘\n           ▼\n     Hidden State 2\n           │\n          ...\n           │\n           ▼\n    Final Hidden State\n           │\n           ▼\n        LOGITS"
    },

    {
      heading: "31. Hidden State to Logits",

      content: [
        "For next-token prediction, the final representation is projected into the vocabulary space.",
        "The resulting values are called logits."
      ],

      formula:
        "logits = hWᵀ + b",

      contentAfterFormula: [
        "If the vocabulary contains V tokens, the output for one position contains approximately V logits."
      ]
    },

    {
      heading: "32. Logits Are Not Probabilities",

      table: [
        {
          representation: "Hidden state",
          meaning: "Learned contextual representation"
        },
        {
          representation: "Logit",
          meaning: "Unnormalized score for a vocabulary token"
        },
        {
          representation: "Probability",
          meaning: "Normalized value produced from logits, commonly using softmax"
        }
      ]
    },

    {
      heading: "33. Logits to Probabilities",

      formula:
        "P(tokenᵢ) = exp(zᵢ) / Σⱼ exp(zⱼ)",

      process: [
        "Final hidden state",
        "↓",
        "Output projection",
        "↓",
        "Logits",
        "↓",
        "Softmax",
        "↓",
        "Token probability distribution"
      ]
    },

    {
      heading: "34. One Token Through the Entire LLM",

      process: [
        "Raw text",
        "↓",
        "Tokenizer",
        "↓",
        "Token ID",
        "↓",
        "Embedding lookup",
        "↓",
        "Position information",
        "↓",
        "Transformer layer",
        "↓",
        "Contextual hidden state",
        "↓",
        "More Transformer layers",
        "↓",
        "Final hidden state",
        "↓",
        "Output projection",
        "↓",
        "Logits",
        "↓",
        "Probability distribution",
        "↓",
        "Decoding"
      ]
    },

    {
      heading: "35. Embedding Space vs Hidden-State Space",

      table: [
        {
          concept: "Embedding space",
          role:
            "Initial learned representation of token identities"
        },
        {
          concept: "Hidden-state space",
          role:
            "Contextual representation after Transformer computation"
        },
        {
          concept: "Logit space",
          role:
            "Vocabulary-level output scores"
        }
      ]
    },

    {
      heading: "36. Why Hidden States Are Contextual",

      content: [
        "Attention allows a token's representation to incorporate information from other positions.",
        "Therefore the hidden state associated with the same token can differ depending on surrounding context."
      ],

      example: {
        word: "bank",
        contextA:
          "The bank approved my loan.",
        contextB:
          "The river bank was covered with trees.",
        observation:
          "The hidden representation can incorporate contextual differences."
      }
    },

    {
      heading: "37. Representation Is Learned",

      content: [
        "Embeddings and internal representations are learned through training.",
        "The model is not manually assigned a fixed semantic definition for each vector dimension.",
        "Optimization gradually adjusts parameters to reduce the training objective."
      ]
    },

    {
      heading: "38. Embeddings and Semantic Similarity",

      content: [
        "Embedding vectors can capture useful relationships because training shapes representations according to the model's learning objective.",
        "However, similarity is task-dependent and should not be treated as a universal semantic truth."
      ]
    },

    {
      heading: "39. Token Embeddings vs Sentence Embeddings",

      table: [
        {
          type: "Token embedding",
          represents: "Individual token representation"
        },
        {
          type: "Sentence embedding",
          represents: "Representation intended to capture a whole sentence"
        },
        {
          type: "Document embedding",
          represents: "Representation intended to capture larger text"
        }
      ]
    },

    {
      heading: "40. Important Distinction: LLM Hidden States vs Retrieval Embeddings",

      content: [
        "An LLM's internal hidden states and a separately designed embedding model's output can both be vectors, but they serve different purposes.",
        "A retrieval embedding model is typically optimized or selected for similarity/search tasks.",
        "An LLM hidden state exists as part of the model's internal computation."
      ]
    },

    {
      heading: "41. Embedding-Based Retrieval",

      process: [
        "Document",
        "↓",
        "Embedding model",
        "↓",
        "Document vector",
        "↓",
        "Vector database",
        "↓",
        "User query",
        "↓",
        "Query embedding",
        "↓",
        "Similarity search",
        "↓",
        "Relevant documents"
      ]
    },

    {
      heading: "42. Why Vector Databases Are Useful",

      content: [
        "Large collections of embedding vectors need efficient similarity-search infrastructure.",
        "A vector database can store vectors together with metadata and support retrieval operations."
      ]
    },

    {
      heading: "43. Representation and RAG",

      content: [
        "RAG systems rely on representations to connect a user query with semantically related information.",
        "The query and documents must be represented in a compatible embedding space for meaningful similarity search."
      ]
    },

    {
      heading: "44. Representation Quality",

      table: [
        {
          factor: "Training data",
          impact:
            "Influences what relationships representations can learn."
        },
        {
          factor: "Architecture",
          impact:
            "Determines how representations are transformed."
        },
        {
          factor: "Training objective",
          impact:
            "Shapes useful representation behavior."
        },
        {
          factor: "Embedding model",
          impact:
            "Determines retrieval representation quality."
        },
        {
          factor: "Domain",
          impact:
            "Specialized vocabulary can affect retrieval."
        }
      ]
    },

    {
      heading: "45. Representation Pipeline Classification",

      classificationTree: [
        "Language Representation",
        "├── Discrete",
        "│   ├── Token",
        "│   └── Token ID",
        "│",
        "└── Continuous",
        "    ├── Token embedding",
        "    ├── Hidden state",
        "    ├── Sentence embedding",
        "    └── Document embedding"
      ]
    },

    {
      heading: "46. Common Mistakes",

      content: [
        "Mistake 1: Thinking token IDs are embeddings.",
        "Correction: Token IDs index the vocabulary; embeddings are learned vectors.",
        "Mistake 2: Assuming every embedding dimension has a human-readable meaning.",
        "Correction: Representations are distributed across dimensions.",
        "Mistake 3: Treating all vector representations as interchangeable.",
        "Correction: Different embeddings and hidden states serve different purposes.",
        "Mistake 4: Assuming similar vectors guarantee identical meaning.",
        "Correction: Similarity depends on representation and task.",
        "Mistake 5: Forgetting position information.",
        "Correction: Sequence order must be represented.",
        "Mistake 6: Assuming hidden states are static.",
        "Correction: Transformer layers repeatedly transform them."
      ]
    },

    {
      heading: "47. Interview Questions",

      content: [
        "What is an embedding?",
        "What is an embedding matrix?",
        "What does V × d represent?",
        "Why can't token IDs be used directly as semantic representations?",
        "What is a hidden state?",
        "What is the difference between an embedding and a hidden state?",
        "Why is positional information required?",
        "What is positional encoding?",
        "What is a residual connection?",
        "What is LayerNorm?",
        "What is a logit?",
        "How are hidden states converted into logits?",
        "What is cosine similarity?",
        "What is the difference between an LLM hidden state and a retrieval embedding?",
        "Why can the representation of the same word change with context?"
      ]
    }
  ],

  formulas: [
    "E ∈ R^(V × d)",
    "Embedding lookup: eᵢ = E[tokenIDᵢ]",
    "Dot product: a · b = Σᵢ aᵢbᵢ",
    "Cosine similarity: cos(θ) = (a · b)/(||a|| ||b||)",
    "Position-aware representation: X₀ = E_token + E_position",
    "Residual transformation: x_{l+1} = x_l + F_l(x_l)",
    "LayerNorm(x) = γ((x - μ)/√(σ² + ε)) + β",
    "Logits = hWᵀ + b",
    "Softmax probability: P(i)=exp(zᵢ)/Σⱼexp(zⱼ)"
  ],

  codeExamples: [
    {
      title: "Embedding Lookup",
      language: "python",
      code:
        "import numpy as np\n\nembedding_matrix = np.array([\n    [0.2, 0.7, -0.1],\n    [0.1, 0.6, -0.2],\n    [-0.4, 0.2, 0.8]\n])\n\ntoken_id = 0\nembedding = embedding_matrix[token_id]\n\nprint(embedding)"
    },
    {
      title: "Dot Product Similarity",
      language: "python",
      code:
        "import numpy as np\n\na = np.array([1.0, 2.0, 3.0])\nb = np.array([2.0, 1.0, 4.0])\n\nsimilarity = np.dot(a, b)\nprint(similarity)"
    },
    {
      title: "Cosine Similarity",
      language: "python",
      code:
        "import numpy as np\n\n\ndef cosine_similarity(a, b):\n    a = np.array(a, dtype=float)\n    b = np.array(b, dtype=float)\n\n    denominator = np.linalg.norm(a) * np.linalg.norm(b)\n\n    if denominator == 0:\n        return 0.0\n\n    return np.dot(a, b) / denominator\n\nprint(cosine_similarity([1, 0], [0.9, 0.1]))"
    },
    {
      title: "Conceptual Token-to-Embedding Pipeline",
      language: "python",
      code:
        "token_ids = [2, 5, 8]\n\nembedding_matrix = {\n    2: [0.1, 0.5, 0.2],\n    5: [0.4, 0.2, 0.8],\n    8: [-0.1, 0.7, 0.3]\n}\n\nembeddings = [embedding_matrix[token_id] for token_id in token_ids]\n\nprint(embeddings)"
    }
  ],

  mathIntuition: [
    {
      concept: "Embedding matrix",
      explanation:
        "Think of the matrix as a table where each row is the learned vector associated with one vocabulary token."
    },
    {
      concept: "Vector space",
      explanation:
        "Each token representation is a point in a high-dimensional space."
    },
    {
      concept: "Cosine similarity",
      explanation:
        "Cosine similarity asks whether two vectors point in similar directions."
    },
    {
      concept: "Hidden state",
      explanation:
        "A hidden state is a continuously transformed representation produced inside the neural network."
    },
    {
      concept: "Logits",
      explanation:
        "Logits are the final unnormalized scores that connect the model's representation to the vocabulary."
    }
  ],

  exercises: [
    {
      question:
        "Why does an LLM need an embedding layer?",
      difficulty: "Easy"
    },
    {
      question:
        "Explain E ∈ R^(V × d).",
      difficulty: "Easy"
    },
    {
      question:
        "Why is token ID 100 not necessarily semantically closer to token ID 101 than token ID 500?",
      difficulty: "Easy"
    },
    {
      question:
        "Calculate the dot product of [1,2] and [3,4].",
      difficulty: "Easy"
    },
    {
      question:
        "Explain cosine similarity geometrically.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain why the representation of 'bank' can depend on context.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain the difference between token embeddings and hidden states.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain the complete transformation from token ID to logits.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Build an Embedding Table",
      task:
        "Create a small vocabulary and randomly initialize a simple embedding matrix.",
      requirements: [
        "Define vocabulary size.",
        "Define embedding dimension.",
        "Initialize vectors.",
        "Implement lookup."
      ]
    },
    {
      title: "Implement Cosine Similarity",
      task:
        "Write cosine similarity without using a machine-learning library.",
      requirements: [
        "Implement dot product.",
        "Implement vector norm.",
        "Handle zero vectors.",
        "Return the similarity."
      ]
    },
    {
      title: "Nearest Vector Search",
      task:
        "Given one query vector and several document vectors, return the most similar document.",
      requirements: [
        "Calculate cosine similarity.",
        "Compare scores.",
        "Return the highest-scoring item."
      ]
    },
    {
      title: "Representation Pipeline Simulator",
      task:
        "Create a Python program that simulates token ID → embedding → transformed hidden state → logits.",
      requirements: [
        "Create token IDs.",
        "Create an embedding matrix.",
        "Apply a matrix transformation.",
        "Produce vocabulary logits.",
        "Identify the highest-scoring token."
      ]
    }
  ],

  comparisonTables: [
    {
      title: "Token ID vs Embedding vs Hidden State vs Logit",
      rows: [
        {
          representation: "Token ID",
          type: "Integer",
          purpose: "Vocabulary index"
        },
        {
          representation: "Token embedding",
          type: "Dense vector",
          purpose: "Initial token representation"
        },
        {
          representation: "Hidden state",
          type: "Dense vector",
          purpose: "Contextual internal representation"
        },
        {
          representation: "Logit",
          type: "Scalar per vocabulary token",
          purpose: "Next-token score"
        }
      ]
    },
    {
      title: "Static vs Contextual Representation",
      rows: [
        {
          aspect: "Context dependence",
          static: "Usually fixed",
          contextual: "Changes with surrounding information"
        },
        {
          aspect: "Typical role",
          static: "Basic representation",
          contextual: "Deep language-model representation"
        }
      ]
    }
  ],

  architectureExercises: [
    {
      title: "Draw the Embedding Pipeline",
      requirements: [
        "Vocabulary",
        "Token ID",
        "Embedding matrix",
        "Embedding vector"
      ]
    },
    {
      title: "Draw Representation Evolution",
      requirements: [
        "Token embedding",
        "Position information",
        "Transformer Layer 1",
        "Hidden state",
        "Transformer Layer 2",
        "Final hidden state",
        "Logits"
      ]
    },
    {
      title: "Draw the Complete LLM Representation Pipeline",
      requirements: [
        "Text",
        "Tokenizer",
        "Token IDs",
        "Embeddings",
        "Position information",
        "Transformer blocks",
        "Hidden states",
        "Output projection",
        "Logits",
        "Probabilities"
      ]
    }
  ],

  summary: [
    "Token IDs are discrete vocabulary indexes.",
    "Embeddings convert token IDs into learned dense vectors.",
    "An embedding matrix has approximately V × d dimensions.",
    "Vector geometry allows representations to be compared using operations such as dot product and cosine similarity.",
    "Token embeddings provide initial representations.",
    "Transformer layers repeatedly transform these representations into contextual hidden states.",
    "Positional information helps the model represent sequence order.",
    "Residual connections allow transformations to be added to existing representations.",
    "Normalization supports stable neural-network computation.",
    "Hidden states are different from token embeddings because they incorporate Transformer computation and context.",
    "The final hidden representation is projected into vocabulary logits.",
    "Logits are not probabilities until normalized by a function such as softmax.",
    "Retrieval embeddings and internal LLM hidden states may both be vectors but serve different purposes."
  ],

  keyTakeaways: [
    "Token IDs are indexes; embeddings are learned vectors.",
    "The embedding matrix connects discrete tokens to continuous representations.",
    "Contextual hidden states are created through Transformer computation.",
    "Position information is essential for sequence understanding.",
    "Representations evolve layer by layer.",
    "The final hidden state connects the Transformer to vocabulary-level logits.",
    "Do not confuse token embeddings, retrieval embeddings, hidden states, and logits."
  ],

  visualReferences: [
    {
      title: "The Illustrated Transformer",
      url:
        "https://jalammar.github.io/illustrated-transformer/",
      purpose:
        "Visual explanation of embeddings, positional encoding, attention, and Transformer representations."
    },
    {
      title: "Hugging Face LLM Course",
      url:
        "https://huggingface.co/learn/llm-course/chapter2/6",
      purpose:
        "Supplementary material on Transformer representations and architecture."
    }
  ]
};

export default lesson4;


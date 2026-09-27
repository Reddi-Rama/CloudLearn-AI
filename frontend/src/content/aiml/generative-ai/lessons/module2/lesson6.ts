const lesson6 = {
  id: "lesson6",
  moduleId: "module2",
  lessonNumber: 6,

  title: "Multi-Head Attention",

  subtitle:
    "Understand how Transformers run multiple attention mechanisms in parallel and combine them into a richer representation.",

  description:
    "This lesson explains multi-head attention from first principles. It covers why multiple heads are useful, separate Q/K/V projections, head dimensions, parallel attention computation, concatenation, output projection, complete matrix dimensions, parameter organization, conceptual attention patterns, implementation with NumPy, and the role of multi-head attention inside Transformer blocks.",

  estimatedTime: "180–220 min",
  difficulty: "Advanced",

  learningObjectives: [
    "Understand why multi-head attention is used.",
    "Understand the difference between single-head and multi-head attention.",
    "Understand per-head Q/K/V projections.",
    "Understand head dimension.",
    "Calculate multi-head attention dimensions.",
    "Understand parallel attention heads.",
    "Understand concatenation.",
    "Understand the output projection.",
    "Understand parameter matrices.",
    "Understand multi-head attention computational flow.",
    "Implement simplified multi-head attention.",
    "Understand common implementation mistakes."
  ],

  sections: [

    {
      heading: "1. Why Do We Need Multiple Attention Heads?",

      content: [
        "A single attention mechanism learns one projection-based way of comparing and combining token representations.",
        "Language contains many types of relationships at the same time.",
        "Different attention heads provide multiple learned representation subspaces in which token relationships can be modeled."
      ],

      example: {
        sentence:
          "The developer deployed the application because it was ready.",
        possibleRelationships: [
          "Syntactic relationships",
          "Entity relationships",
          "Local word relationships",
          "Longer-range contextual relationships"
        ]
      }
    },

    {
      heading: "2. Single-Head vs Multi-Head Attention",

      table: [
        {
          architecture: "Single-head",
          behavior:
            "One attention operation with one set of projections"
        },
        {
          architecture: "Multi-head",
          behavior:
            "Several attention operations using separate learned projections"
        }
      ]
    },

    {
      heading: "3. Multi-Head Attention Classification",

      classificationTree: [
        "Attention",
        "├── Single-head attention",
        "└── Multi-head attention",
        "    ├── Head 1",
        "    ├── Head 2",
        "    ├── Head 3",
        "    ├── ...",
        "    └── Head h"
      ]
    },

    {
      heading: "4. Basic Idea",

      process: [
        "Input representation X",
        "↓",
        "Create multiple Q/K/V projections",
        "↓",
        "Head 1 attention",
        "Head 2 attention",
        "Head 3 attention",
        "...",
        "Head h attention",
        "↓",
        "Concatenate outputs",
        "↓",
        "Output projection",
        "↓",
        "Multi-head attention output"
      ]
    },

    {
      heading: "5. Separate Projections",

      formulas: [
        "Qᵢ = XW_Qᵢ",
        "Kᵢ = XW_Kᵢ",
        "Vᵢ = XW_Vᵢ"
      ],

      contentAfterFormulas: [
        "Each head has its own learned projection parameters."
      ]
    },

    {
      heading: "6. Attention for Each Head",

      formula:
        "headᵢ = Attention(Qᵢ,Kᵢ,Vᵢ)",

      contentAfterFormula: [
        "Each head independently calculates its attention output."
      ]
    },

    {
      heading: "7. Concatenating the Heads",

      formula:
        "MultiHead(Q,K,V) = Concat(head₁,...,head_h)W_O",

      contentAfterFormula: [
        "The outputs of all heads are concatenated and passed through an output projection W_O."
      ]
    },

    {
      heading: "8. Why Concatenate?",

      content: [
        "Each head produces a representation containing information learned in its own projection subspace.",
        "Concatenation combines these representations so that information from all heads is available to the next transformation."
      ]
    },

    {
      heading: "9. Why Output Projection?",

      content: [
        "The concatenated representation is transformed using a learned output projection.",
        "This allows the model to mix information from different heads before passing the result to the next component."
      ]
    },

    {
      heading: "10. Multi-Head Architecture",

      codeBlock:
        "                         INPUT X\n                            │\n          ┌─────────────────┼─────────────────┐\n          ▼                 ▼                 ▼\n       HEAD 1            HEAD 2            HEAD 3       ...\n          │                 │                 │\n       Q₁ K₁ V₁          Q₂ K₂ V₂          Q₃ K₃ V₃\n          │                 │                 │\n          ▼                 ▼                 ▼\n      Attention          Attention          Attention\n          │                 │                 │\n          └─────────────────┼─────────────────┘\n                            ▼\n                       CONCATENATE\n                            │\n                            ▼\n                       OUTPUT W_O\n                            │\n                            ▼\n                          OUTPUT"
    },

    {
      heading: "11. Model Dimension and Head Dimension",

      content: [
        "Suppose the model representation dimension is d_model and there are h attention heads.",
        "A common design divides the representation dimension across heads."
      ],

      formula:
        "d_head ≈ d_model / h",

      contentAfterFormula: [
        "The exact architecture can vary, but this relationship is common in standard multi-head attention designs."
      ]
    },

    {
      heading: "12. Dimension Example",

      example: {
        modelDimension: 768,
        numberOfHeads: 12,
        headDimension:
          "768 / 12 = 64"
      }
    },

    {
      heading: "13. Why Divide the Dimension?",

      content: [
        "Using smaller projections per head allows multiple attention mechanisms to operate in parallel while keeping the combined representation at the model dimension."
      ]
    },

    {
      heading: "14. Head Dimension Table",

      table: [
        {
          d_model: 512,
          heads: 8,
          d_head: 64
        },
        {
          d_model: 768,
          heads: 12,
          d_head: 64
        },
        {
          d_model: 1024,
          heads: 16,
          d_head: 64
        },
        {
          d_model: 2048,
          heads: 16,
          d_head: 128
        }
      ]
    },

    {
      heading: "15. Shape of One Head",

      content: [
        "Let the input sequence contain n tokens."
      ],

      table: [
        {
          object: "X",
          shape: "n × d_model"
        },
        {
          object: "W_Qᵢ",
          shape: "d_model × d_head"
        },
        {
          object: "W_Kᵢ",
          shape: "d_model × d_head"
        },
        {
          object: "W_Vᵢ",
          shape: "d_model × d_head"
        },
        {
          object: "Qᵢ",
          shape: "n × d_head"
        },
        {
          object: "Kᵢ",
          shape: "n × d_head"
        },
        {
          object: "Vᵢ",
          shape: "n × d_head"
        }
      ]
    },

    {
      heading: "16. Attention Output Per Head",

      formula:
        "headᵢ = softmax(QᵢKᵢᵀ / √d_head)Vᵢ",

      contentAfterFormula: [
        "The resulting head output has shape n × d_head."
      ]
    },

    {
      heading: "17. Concatenation Shape",

      content: [
        "If there are h heads and each head produces d_head features, concatenating them gives approximately h × d_head features."
      ],

      formula:
        "h × d_head = d_model"
    },

    {
      heading: "18. Concatenation Example",

      example: {
        heads: 4,
        headDimension: 16,
        concatenatedDimension:
          "4 × 16 = 64"
      }
    },

    {
      heading: "19. Output Projection",

      content: [
        "The concatenated representation is projected back into the model representation space."
      ],

      formula:
        "Y = Concat(head₁,...,head_h)W_O"
    },

    {
      heading: "20. Complete Multi-Head Equation",

      formula:
        "MultiHead(Q,K,V) = Concat(head₁,...,head_h)W_O",

      contentAfterFormula: [
        "where:",
        "headᵢ = Attention(QW_Qᵢ, KW_Kᵢ, VW_Vᵢ)."
      ]
    },

    {
      heading: "21. Complete Expanded Equation",

      formula:
        "headᵢ = softmax((XW_Qᵢ)(XW_Kᵢ)ᵀ / √d_head)(XW_Vᵢ)",

      contentAfterFormula: [
        "Each head therefore has its own learned query, key, and value projections."
      ]
    },

    {
      heading: "22. Multiple Representation Subspaces",

      content: [
        "Each attention head projects the input into its own learned subspace.",
        "This allows the model to learn different patterns without requiring every relationship to be represented using the exact same transformation."
      ]
    },

    {
      heading: "23. Conceptual Head Specialization",

      content: [
        "It is useful to imagine different heads learning different types of relationships.",
        "For example, one head might emphasize nearby syntactic relationships while another may capture longer-distance relationships.",
        "However, individual heads should not automatically be assigned fixed human-interpretable roles. Learned behavior can be distributed and architecture-dependent."
      ]
    },

    {
      heading: "24. Attention Head Example",

      example: {
        sentence:
          "The engineer who designed the system tested it.",
        conceptualHeads: [
          {
            head: "Head A",
            possiblePattern:
              "Local syntactic relationships"
          },
          {
            head: "Head B",
            possiblePattern:
              "Longer-range relationships"
          },
          {
            head: "Head C",
            possiblePattern:
              "Other learned contextual relationships"
          }
        ]
      }
    },

    {
      heading: "25. Important Caution About Head Interpretability",

      content: [
        "The concept of 'one head = one linguistic rule' is an oversimplification.",
        "Models can distribute information across multiple heads and layers.",
        "Attention patterns can be useful for analysis but do not automatically provide a complete explanation of model behavior."
      ]
    },

    {
      heading: "26. Multi-Head Attention Data Flow",

      process: [
        "Input X",
        "↓",
        "Head-specific projections",
        "↓",
        "Qᵢ / Kᵢ / Vᵢ",
        "↓",
        "Scaled dot-product attention",
        "↓",
        "Head output",
        "↓",
        "Repeat for every head",
        "↓",
        "Concatenate",
        "↓",
        "Output projection",
        "↓",
        "Final multi-head output"
      ]
    },

    {
      heading: "27. Parallelism",

      content: [
        "The attention heads can be computed in parallel because they operate on separate projections of the same input.",
        "Modern hardware is well suited to this kind of parallel matrix computation."
      ]
    },

    {
      heading: "28. Parallel Head Visualization",

      codeBlock:
        "                    INPUT\n                      │\n        ┌─────────────┼─────────────┐\n        │             │             │\n        ▼             ▼             ▼\n      HEAD 1        HEAD 2        HEAD 3\n        │             │             │\n        ▼             ▼             ▼\n     Attention     Attention     Attention\n        │             │             │\n        └─────────────┼─────────────┘\n                      ▼\n                  CONCATENATE\n                      │\n                      ▼\n                  PROJECTION\n                      │\n                      ▼\n                    OUTPUT"
    },

    {
      heading: "29. Multi-Head Attention and Causal Masking",

      content: [
        "In a decoder-only LLM, each attention head can use the same causal visibility rule.",
        "Future positions are blocked before the attention probabilities are calculated."
      ],

      process: [
        "Head-specific Q/K/V",
        "↓",
        "Score matrix",
        "↓",
        "Causal mask",
        "↓",
        "Softmax",
        "↓",
        "Weighted values"
      ]
    },

    {
      heading: "30. Multi-Head Attention with Padding",

      content: [
        "When batched sequences contain padding, padding positions also need to be handled appropriately.",
        "The implementation can combine padding and causal restrictions depending on the architecture."
      ]
    },

    {
      heading: "31. Multi-Head Attention in a Transformer Block",

      codeBlock:
        "Input\n  │\n  ▼\nMulti-Head Self-Attention\n  │\n  ▼\nResidual Connection\n  │\n  ▼\nNormalization\n  │\n  ▼\nFeed-Forward Network\n  │\n  ▼\nResidual Connection\n  │\n  ▼\nNormalization\n  │\n  ▼\nOutput"
    },

    {
      heading: "32. Multi-Head Attention vs Feed-Forward Network",

      table: [
        {
          component: "Multi-head attention",
          mainFunction:
            "Mix information across token positions"
        },
        {
          component: "Feed-forward network",
          mainFunction:
            "Apply nonlinear transformation to token representations"
        }
      ]
    },

    {
      heading: "33. Parameter Organization",

      content: [
        "Conceptually, each head has its own Q, K, and V projections.",
        "Implementations may store these parameters separately or combine them into larger matrices for computational efficiency."
      ]
    },

    {
      heading: "34. Combined Projection Implementation",

      content: [
        "Instead of explicitly performing three independent operations for every head, an implementation can project the input into combined Q, K, and V tensors and then reshape them into head dimensions.",
        "This improves practical efficiency."
      ],

      codeBlock:
        "X\n │\n ├── Linear → combined Q\n ├── Linear → combined K\n └── Linear → combined V\n          │\n          ▼\n       Reshape\n          │\n          ▼\n   [batch, heads, seq, head_dim]\n          │\n          ▼\n   Parallel attention"
    },

    {
      heading: "35. Typical Tensor Shape",

      formula:
        "[batch_size, num_heads, sequence_length, head_dimension]",

      contentAfterFormula: [
        "This is a common conceptual layout for multi-head attention implementations."
      ]
    },

    {
      heading: "36. Shape Transformation",

      process: [
        "Input",
        "↓",
        "[batch, sequence, d_model]",
        "↓",
        "Linear projections",
        "↓",
        "[batch, sequence, heads × head_dim]",
        "↓",
        "Reshape / transpose",
        "↓",
        "[batch, heads, sequence, head_dim]",
        "↓",
        "Attention"
      ]
    },

    {
      heading: "37. Why Reshape?",

      content: [
        "The model needs to separate the representation dimension into multiple head dimensions.",
        "For example, a 768-dimensional representation can be interpreted as 12 heads × 64 dimensions."
      ]
    },

    {
      heading: "38. Transpose in Multi-Head Attention",

      content: [
        "Tensor dimensions are rearranged so that attention can be calculated independently across heads.",
        "The exact tensor ordering varies between implementations."
      ]
    },

    {
      heading: "39. Multi-Head Attention Matrix Flow",

      codeBlock:
        "X\n │\n ├─────── WQ ───────→ Q\n │                        │\n ├─────── WK ───────→ K   │\n │                        │\n └─────── WV ───────→ V   │\n                          ▼\n                    Split into heads\n                          │\n          ┌───────────────┼───────────────┐\n          ▼               ▼               ▼\n        Head 1          Head 2          Head h\n          │               │               │\n          ▼               ▼               ▼\n      Attention        Attention        Attention\n          │               │               │\n          └───────────────┼───────────────┘\n                          ▼\n                     Concatenate\n                          │\n                          ▼\n                        W_O\n                          │\n                          ▼\n                        Output"
    },

    {
      heading: "40. Computational Complexity",

      content: [
        "Each head calculates an attention score matrix over sequence positions.",
        "Having multiple heads does not fundamentally remove the quadratic sequence-length interaction of standard self-attention.",
        "The heads divide the representation dimension while retaining the pairwise sequence interaction pattern."
      ],

      formula:
        "Standard attention sequence interaction growth ≈ O(n²)"
    },

    {
      heading: "41. Number of Heads vs Context Length",

      content: [
        "Increasing the number of heads does not automatically increase the context window.",
        "Number of heads and maximum sequence length are separate architectural considerations."
      ]
    },

    {
      heading: "42. Number of Heads vs Model Dimension",

      table: [
        {
          quantity: "d_model",
          meaning: "Overall representation dimension"
        },
        {
          quantity: "num_heads",
          meaning: "Number of parallel attention heads"
        },
        {
          quantity: "d_head",
          meaning: "Representation dimension per head"
        },
        {
          quantity: "sequence_length",
          meaning: "Number of tokens"
        }
      ]
    },

    {
      heading: "43. Worked Dimension Example",

      content: [
        "Suppose:",
        "d_model = 512",
        "number of heads = 8.",
        "Then a common design gives:"
      ],

      formula:
        "d_head = 512 / 8 = 64",

      contentAfterFormula: [
        "Each head works with 64-dimensional Q, K, and V representations."
      ]
    },

    {
      heading: "44. Full Worked Shape Example",

      content: [
        "Suppose:",
        "batch = 2",
        "sequence length = 128",
        "d_model = 512",
        "heads = 8",
        "head dimension = 64."
      ],

      table: [
        {
          stage: "Input",
          shape: "[2, 128, 512]"
        },
        {
          stage: "Split into heads",
          shape: "[2, 8, 128, 64]"
        },
        {
          stage: "Attention scores",
          shape: "[2, 8, 128, 128]"
        },
        {
          stage: "Attention output",
          shape: "[2, 8, 128, 64]"
        },
        {
          stage: "Concatenate heads",
          shape: "[2, 128, 512]"
        }
      ]
    },

    {
      heading: "45. Attention Scores per Head",

      formula:
        "Scores = QKᵀ",

      contentAfterFormula: [
        "For each head, the sequence interaction matrix has shape:",
        "sequence_length × sequence_length."
      ]
    },

    {
      heading: "46. Why Multi-Head Attention Is Powerful",

      content: [
        "The model does not need to compress every possible relationship into one attention projection.",
        "Multiple learned subspaces allow different transformations to operate simultaneously.",
        "The outputs are then combined so later layers receive information from all heads."
      ]
    },

    {
      heading: "47. Multi-Head Attention Mental Model",

      content: [
        "Imagine several researchers looking at the same sentence.",
        "Each researcher is allowed to focus on different relationships.",
        "Their findings are combined into one representation.",
        "The analogy is only for intuition; the actual mechanism is learned linear algebra."
      ]
    },

    {
      heading: "48. Single Head Limitation",

      content: [
        "A single attention head has only one set of Q/K/V projections.",
        "This limits the number of distinct learned projection spaces available in that attention layer.",
        "Multi-head attention provides multiple such spaces."
      ]
    },

    {
      heading: "49. Multi-Head Attention and Representation Learning",

      content: [
        "The heads learn their projections jointly with the rest of the model.",
        "There is no requirement that a developer manually defines what each head should detect."
      ]
    },

    {
      heading: "50. Important Modern Variations",

      classificationTree: [
        "Attention Variants",
        "├── Multi-Head Attention",
        "├── Multi-Query Attention",
        "├── Grouped-Query Attention",
        "└── Other optimized attention mechanisms"
      ]
    },

    {
      heading: "51. Multi-Query Attention",

      content: [
        "Multi-query attention reduces the number of distinct key/value sets while retaining multiple query heads.",
        "This can reduce memory requirements during autoregressive inference."
      ]
    },

    {
      heading: "52. Grouped-Query Attention",

      content: [
        "Grouped-query attention places multiple query heads into groups that share key/value representations.",
        "It provides a compromise between fully separate key/value heads and a single shared key/value set."
      ]
    },

    {
      heading: "53. Attention Architecture Comparison",

      table: [
        {
          architecture: "Multi-Head Attention",
          queries: "Multiple",
          keys: "Multiple",
          values: "Multiple"
        },
        {
          architecture: "Multi-Query Attention",
          queries: "Multiple",
          keys: "Shared",
          values: "Shared"
        },
        {
          architecture: "Grouped-Query Attention",
          queries: "Multiple",
          keys: "Grouped",
          values: "Grouped"
        }
      ]
    },

    {
      heading: "54. Why These Variants Matter",

      content: [
        "Autoregressive inference repeatedly generates tokens.",
        "Key/value representations from previous tokens may need to be stored for efficient decoding.",
        "Reducing the number of key/value sets can reduce memory requirements and improve serving efficiency."
      ]
    },

    {
      heading: "55. Multi-Head Attention in Training vs Inference",

      table: [
        {
          stage: "Training",
          focus:
            "Efficient parallel computation across sequences"
        },
        {
          stage: "Inference",
          focus:
            "Efficient generation and management of cached key/value states"
        }
      ]
    },

    {
      heading: "56. Complete Multi-Head Attention Flow",

      process: [
        "Input representations",
        "↓",
        "Q/K/V projection",
        "↓",
        "Split into heads",
        "↓",
        "Head-specific Q/K/V",
        "↓",
        "Scaled dot-product attention",
        "↓",
        "Mask if required",
        "↓",
        "Softmax",
        "↓",
        "Weighted values",
        "↓",
        "Head outputs",
        "↓",
        "Concatenate",
        "↓",
        "Output projection",
        "↓",
        "Multi-head attention output"
      ]
    },

    {
      heading: "57. Common Mistakes",

      content: [
        "Mistake 1: Thinking multiple heads use exactly the same Q/K/V projections.",
        "Correction: Heads use different learned projections or equivalent combined parameterizations.",
        "Mistake 2: Thinking more heads automatically means a larger model dimension.",
        "Correction: The model dimension can be divided across heads.",
        "Mistake 3: Forgetting the output projection.",
        "Correction: Concatenated head outputs are passed through an output projection.",
        "Mistake 4: Confusing number of heads with context length.",
        "Correction: They are separate architectural properties.",
        "Mistake 5: Assuming every head has a fixed human-readable role.",
        "Correction: Head behavior is learned and can be distributed.",
        "Mistake 6: Assuming multi-head attention removes quadratic attention cost.",
        "Correction: Standard multi-head self-attention still has quadratic sequence interaction growth.",
        "Mistake 7: Mixing up d_model and d_head.",
        "Correction: d_model is the total representation dimension, while d_head is the per-head dimension."
      ]
    },

    {
      heading: "58. Interview Questions",

      content: [
        "What is multi-head attention?",
        "Why do we need multiple attention heads?",
        "How is multi-head attention different from single-head attention?",
        "What are Q, K, and V for each head?",
        "What is d_model?",
        "What is d_head?",
        "How are d_model, number of heads, and d_head related?",
        "Why are head outputs concatenated?",
        "Why is an output projection required?",
        "What is the shape of the attention matrix for each head?",
        "Why doesn't increasing the number of heads eliminate O(n²) attention growth?",
        "What is multi-query attention?",
        "What is grouped-query attention?",
        "Why can MQA or GQA help inference efficiency?",
        "Can every attention head be assigned a fixed linguistic meaning?",
        "How does multi-head attention fit inside a Transformer block?"
      ]
    }
  ],

  formulas: [
    "Qᵢ = XW_Qᵢ",
    "Kᵢ = XW_Kᵢ",
    "Vᵢ = XW_Vᵢ",
    "headᵢ = softmax(QᵢKᵢᵀ/√d_head)Vᵢ",
    "MultiHead(Q,K,V) = Concat(head₁,...,head_h)W_O",
    "d_head ≈ d_model / h",
    "Attention score matrix per head = n × n",
    "Standard sequence interaction growth ≈ O(n²)"
  ],

  codeExamples: [
    {
      title: "Single Attention Head",
      language: "python",
      code:
        "import numpy as np\n\n\ndef softmax(x, axis=-1):\n    x = x - np.max(x, axis=axis, keepdims=True)\n    exp_x = np.exp(x)\n    return exp_x / np.sum(exp_x, axis=axis, keepdims=True)\n\n\ndef attention(Q, K, V):\n    d_k = Q.shape[-1]\n    scores = Q @ K.T / np.sqrt(d_k)\n    weights = softmax(scores)\n    return weights @ V\n\nX = np.random.randn(4, 8)\nWQ = np.random.randn(8, 4)\nWK = np.random.randn(8, 4)\nWV = np.random.randn(8, 4)\n\nQ = X @ WQ\nK = X @ WK\nV = X @ WV\n\noutput = attention(Q, K, V)\nprint(output.shape)"
    },
    {
      title: "Conceptual Multi-Head Attention",
      language: "python",
      code:
        "import numpy as np\n\n\ndef softmax(x, axis=-1):\n    x = x - np.max(x, axis=axis, keepdims=True)\n    exp_x = np.exp(x)\n    return exp_x / np.sum(exp_x, axis=axis, keepdims=True)\n\n\ndef attention(Q, K, V):\n    d_k = Q.shape[-1]\n    scores = Q @ K.T / np.sqrt(d_k)\n    weights = softmax(scores)\n    return weights @ V\n\n\ndef multi_head_attention(X, heads):\n    head_outputs = []\n\n    for WQ, WK, WV in heads:\n        Q = X @ WQ\n        K = X @ WK\n        V = X @ WV\n\n        output = attention(Q, K, V)\n        head_outputs.append(output)\n\n    return np.concatenate(head_outputs, axis=-1)\n\nX = np.random.randn(5, 8)\n\nheads = []\n\nfor _ in range(2):\n    WQ = np.random.randn(8, 4)\n    WK = np.random.randn(8, 4)\n    WV = np.random.randn(8, 4)\n    heads.append((WQ, WK, WV))\n\noutput = multi_head_attention(X, heads)\n\nprint(\"Output shape:\", output.shape)"
    },
    {
      title: "Head Dimension Calculation",
      language: "python",
      code:
        "d_model = 768\nnum_heads = 12\n\nd_head = d_model // num_heads\n\nprint(\"Head dimension:\", d_head)"
    },
    {
      title: "Attention Tensor Shape Calculation",
      language: "python",
      code:
        "batch_size = 2\nnum_heads = 8\nsequence_length = 128\nhead_dimension = 64\n\nshape = (\n    batch_size,\n    num_heads,\n    sequence_length,\n    head_dimension\n)\n\nprint(shape)"
    }
  ],

  mathIntuition: [
    {
      concept: "Multiple projection spaces",
      explanation:
        "Each head transforms the same input into a different learned subspace."
    },
    {
      concept: "Head dimension",
      explanation:
        "The model representation can be divided across several smaller attention representations."
    },
    {
      concept: "Concatenation",
      explanation:
        "Concatenation preserves the information produced by all heads before the output projection mixes it."
    },
    {
      concept: "Output projection",
      explanation:
        "The output projection learns how to combine information from different heads."
    },
    {
      concept: "GQA/MQA",
      explanation:
        "Sharing or grouping key/value representations can reduce inference memory requirements."
    }
  ],

  exercises: [
    {
      question:
        "Why is multi-head attention better suited to learning multiple relationships than a single attention head?",
      difficulty: "Easy"
    },
    {
      question:
        "If d_model = 512 and there are 8 heads, calculate d_head.",
      difficulty: "Easy"
    },
    {
      question:
        "What is the shape of Q for sequence length 100 and head dimension 64?",
      difficulty: "Easy"
    },
    {
      question:
        "Why are head outputs concatenated?",
      difficulty: "Medium"
    },
    {
      question:
        "Why is W_O required?",
      difficulty: "Medium"
    },
    {
      question:
        "Explain why multi-head attention still has quadratic sequence interaction growth.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain the difference between MHA, MQA and GQA.",
      difficulty: "Hard"
    },
    {
      question:
        "Trace the tensor shapes through a complete multi-head attention operation.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Implement Multi-Head Attention",
      task:
        "Implement a simplified multi-head attention layer using NumPy.",
      requirements: [
        "Create input matrix X.",
        "Create separate Q/K/V projections for each head.",
        "Calculate scaled dot-product attention.",
        "Concatenate head outputs.",
        "Apply an output projection."
      ]
    },
    {
      title: "Add Causal Masking",
      task:
        "Modify the multi-head implementation so each head uses a causal mask.",
      requirements: [
        "Create the causal mask.",
        "Apply it before softmax.",
        "Verify future positions receive negligible attention."
      ]
    },
    {
      title: "Visualize Attention Heads",
      task:
        "Generate a separate matrix visualization for each attention head.",
      requirements: [
        "Calculate attention matrices.",
        "Display each head independently.",
        "Compare the resulting patterns."
      ]
    },
    {
      title: "Compare MHA and GQA Memory",
      task:
        "Calculate the number of key/value vectors stored for MHA and GQA configurations.",
      requirements: [
        "Accept number of query heads.",
        "Accept number of KV groups.",
        "Calculate KV representation counts.",
        "Compare memory requirements."
      ]
    }
  ],

  architectureExercises: [
    {
      title: "Draw Multi-Head Attention",
      requirements: [
        "Input",
        "Multiple Q/K/V projections",
        "Head 1",
        "Head 2",
        "Head N",
        "Concatenation",
        "Output projection",
        "Output"
      ]
    },
    {
      title: "Draw Tensor Reshaping",
      requirements: [
        "[batch, sequence, d_model]",
        "Linear projection",
        "[batch, sequence, heads × head_dim]",
        "Reshape",
        "[batch, heads, sequence, head_dim]"
      ]
    },
    {
      title: "Draw MHA vs GQA vs MQA",
      requirements: [
        "Query heads",
        "Key groups",
        "Value groups",
        "Shared KV representations"
      ]
    }
  ],

  comparisonTables: [
    {
      title: "Single-Head vs Multi-Head",
      rows: [
        {
          aspect: "Projection spaces",
          singleHead: "One",
          multiHead: "Multiple"
        },
        {
          aspect: "Attention operations",
          singleHead: "One",
          multiHead: "Several parallel operations"
        },
        {
          aspect: "Representation subspaces",
          singleHead: "One",
          multiHead: "Multiple"
        }
      ]
    },
    {
      title: "MHA vs MQA vs GQA",
      rows: [
        {
          architecture: "MHA",
          queryHeads: "Multiple",
          kvHeads: "Multiple"
        },
        {
          architecture: "MQA",
          queryHeads: "Multiple",
          kvHeads: "One"
        },
        {
          architecture: "GQA",
          queryHeads: "Multiple",
          kvHeads: "Several groups"
        }
      ]
    }
  ],

  summary: [
    "Multi-head attention performs multiple attention operations in parallel.",
    "Each head uses learned projections for queries, keys, and values.",
    "Each head operates in its own representation subspace.",
    "The output of each head has shape related to sequence length × head dimension.",
    "Head outputs are concatenated.",
    "An output projection combines information from the heads.",
    "A common relationship is d_head = d_model / number_of_heads.",
    "Multi-head attention does not eliminate the quadratic sequence interaction of standard attention.",
    "Causal masking can be applied independently across attention heads.",
    "Modern attention variants such as MQA and GQA reduce the number of key/value representations used during inference.",
    "Understanding tensor shapes is essential for implementing attention correctly."
  ],

  keyTakeaways: [
    "Multiple heads provide multiple learned attention subspaces.",
    "Every head has its own Q/K/V projections conceptually.",
    "The head outputs are concatenated.",
    "The output projection mixes information across heads.",
    "d_model is the total representation dimension.",
    "d_head is the representation dimension per head.",
    "MHA, MQA and GQA differ primarily in how query, key and value heads are organized.",
    "Multi-head attention is a core component of Transformer blocks.",
    "Understanding tensor reshaping is essential for real implementation."
  ],

  visualReferences: [
    {
      title: "Attention Is All You Need",
      url:
        "https://arxiv.org/abs/1706.03762",
      purpose:
        "Primary reference for multi-head attention."
    },
    {
      title: "The Illustrated Transformer",
      url:
        "https://jalammar.github.io/illustrated-transformer/",
      purpose:
        "Visual explanation of multi-head attention."
    },
    {
      title: "Harvard Annotated Transformer",
      url:
        "https://nlp.seas.harvard.edu/annotated-transformer/",
      purpose:
        "Implementation-oriented Transformer reference."
    }
  ]
};

export default lesson6;

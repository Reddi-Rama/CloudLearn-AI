const lesson5 = {
  id: "lesson5",
  moduleId: "module2",
  lessonNumber: 5,

  title: "Self-Attention in Depth",

  subtitle:
    "Understand exactly how self-attention connects tokens, calculates attention scores, applies masking, and creates context-aware representations.",

  description:
    "This lesson goes deeper into self-attention and treats it as a complete mathematical and engineering mechanism. It explains queries, keys, values, projection matrices, attention score matrices, scaling, softmax, weighted aggregation, causal masking, padding masking, matrix dimensions, computational complexity, numerical intuition, and a complete implementation of simplified self-attention.",

  estimatedTime: "180–220 min",
  difficulty: "Advanced",

  learningObjectives: [
    "Understand self-attention mathematically.",
    "Understand how Q, K, and V are created.",
    "Understand learned projection matrices.",
    "Understand attention score matrices.",
    "Understand matrix dimensions in attention.",
    "Calculate scaled dot-product attention manually.",
    "Understand the role of softmax.",
    "Understand weighted value aggregation.",
    "Understand causal masking.",
    "Understand padding masking.",
    "Understand attention patterns.",
    "Understand attention complexity.",
    "Understand the relationship between sequence length and attention cost.",
    "Implement simplified self-attention in Python.",
    "Understand the complete self-attention pipeline."
  ],

  sections: [

    {
      heading: "1. What Is Self-Attention?",

      content: [
        "Self-attention is a mechanism that allows every position in a sequence to compute how strongly it should use information from other positions in the same sequence.",
        "Each token creates a query, key, and value representation.",
        "Queries and keys determine compatibility, while values provide the information that is aggregated."
      ],

      process: [
        "Input sequence",
        "↓",
        "Create Q, K, V",
        "↓",
        "Compare Q with K",
        "↓",
        "Calculate attention scores",
        "↓",
        "Scale scores",
        "↓",
        "Apply mask if necessary",
        "↓",
        "Softmax",
        "↓",
        "Attention weights",
        "↓",
        "Weighted sum of V",
        "↓",
        "Context-aware output"
      ]
    },

    {
      heading: "2. The Core Idea",

      content: [
        "Suppose the input is:",
        "\"The student opened the book because she needed information.\"",
        "When processing the representation of 'she', the model can use relationships with other tokens.",
        "Self-attention provides a mathematical mechanism for determining which other positions should contribute more strongly."
      ]
    },

    {
      heading: "3. Self-Attention Classification",

      classificationTree: [
        "Attention",
        "├── Self-Attention",
        "│   ├── Encoder self-attention",
        "│   └── Decoder causal self-attention",
        "│",
        "└── Cross-Attention",
        "    └── Query source differs from Key/Value source"
      ]
    },

    {
      heading: "4. Input Matrix X",

      content: [
        "Let X represent the sequence of input representations.",
        "Each row corresponds to one token position."
      ],

      formula:
        "X ∈ R^(n × d_model)",

      contentAfterFormula: [
        "n = sequence length.",
        "d_model = model representation dimension."
      ]
    },

    {
      heading: "5. Creating Queries, Keys and Values",

      content: [
        "Queries, keys, and values are produced by learned linear transformations of the input representation."
      ],

      formulas: [
        "Q = XW_Q",
        "K = XW_K",
        "V = XW_V"
      ],

      contentAfterFormulas: [
        "W_Q, W_K, and W_V are learned projection matrices."
      ]
    },

    {
      heading: "6. Dimensions of Q, K and V",

      formula:
        "Q, K, V ∈ R^(n × d_k)",

      table: [
        {
          symbol: "n",
          meaning: "Number of tokens"
        },
        {
          symbol: "d_model",
          meaning: "Input representation dimension"
        },
        {
          symbol: "d_k",
          meaning: "Attention key/query dimension"
        }
      ]
    },

    {
      heading: "7. Why Use Different Q, K and V Projections?",

      content: [
        "The model needs different learned transformations for asking what information is relevant, determining how positions match, and representing the information to aggregate.",
        "Using separate projections gives attention flexibility."
      ],

      table: [
        {
          representation: "Q",
          conceptualQuestion: "What am I looking for?"
        },
        {
          representation: "K",
          conceptualQuestion: "What information does this position offer for matching?"
        },
        {
          representation: "V",
          conceptualQuestion: "What information should be passed forward?"
        }
      ]
    },

    {
      heading: "8. Query-Key Compatibility",

      content: [
        "For every query position, the model compares its query vector against key vectors from the available positions.",
        "The result is an attention score."
      ],

      formula:
        "S = QKᵀ"
    },

    {
      heading: "9. Shape of the Attention Score Matrix",

      formula:
        "Q ∈ R^(n × d_k)",
      contentAfterFormula: [
        "Kᵀ ∈ R^(d_k × n)",
        "Therefore:",
        "QKᵀ ∈ R^(n × n)"
      ]
    },

    {
      heading: "10. Why Is the Score Matrix n × n?",

      content: [
        "There is one query for each token position.",
        "Each query compares itself with every available key position.",
        "Therefore n queries produce n scores each."
      ],

      codeBlock:
        "                KEY POSITIONS\n              1   2   3   4\n           ┌───────────────────┐\nQuery 1    │ s11 s12 s13 s14   │\nQuery 2    │ s21 s22 s23 s24   │\nQuery 3    │ s31 s32 s33 s34   │\nQuery 4    │ s41 s42 s43 s44   │\n           └───────────────────┘"
    },

    {
      heading: "11. Attention Score Interpretation",

      content: [
        "Each value Sᵢⱼ represents the compatibility between query position i and key position j.",
        "A larger score generally means the model gives greater attention to that position after normalization, although the final weight also depends on all competing scores."
      ]
    },

    {
      heading: "12. Scaling the Scores",

      formula:
        "S_scaled = QKᵀ / √d_k",

      contentAfterFormula: [
        "The scaling factor reduces the magnitude of dot products when the key/query dimension is large."
      ]
    },

    {
      heading: "13. Why Large Scores Are a Problem",

      content: [
        "Softmax becomes increasingly concentrated when its inputs have large magnitude.",
        "Extremely concentrated distributions can make optimization less stable because gradients can become very small for many positions.",
        "Scaling helps control this behavior."
      ]
    },

    {
      heading: "14. Softmax",

      formula:
        "softmax(zᵢ) = exp(zᵢ) / Σⱼ exp(zⱼ)",

      contentAfterFormula: [
        "Softmax converts a row of scores into normalized attention weights.",
        "Each row sums to approximately 1."
      ]
    },

    {
      heading: "15. Score → Weight Transformation",

      process: [
        "Raw scores",
        "↓",
        "Scale",
        "↓",
        "Apply mask",
        "↓",
        "Softmax",
        "↓",
        "Normalized attention weights"
      ],

      example: {
        scores: [2.0, 1.0, 0.0],
        observation:
          "The first position receives the largest normalized weight because it has the highest score."
      }
    },

    {
      heading: "16. Weighted Value Aggregation",

      content: [
        "Once attention weights are calculated, the model uses them to form a weighted sum of value vectors."
      ],

      formula:
        "Output = A V",

      contentAfterFormula: [
        "A is the attention-weight matrix."
      ]
    },

    {
      heading: "17. Complete Self-Attention Equation",

      formula:
        "Attention(Q,K,V) = softmax(QKᵀ / √d_k)V",

      contentAfterFormula: [
        "This equation combines score calculation, scaling, normalization, and information aggregation."
      ]
    },

    {
      heading: "18. Complete Matrix Pipeline",

      codeBlock:
        "X\n│\n├── × W_Q ──→ Q\n│\n├── × W_K ──→ K\n│\n└── × W_V ──→ V\n\nQ × Kᵀ\n   │\n   ▼\nScore Matrix\n   │\n   ▼\nDivide by √dₖ\n   │\n   ▼\nMask\n   │\n   ▼\nSoftmax\n   │\n   ▼\nAttention Matrix A\n   │\n   ▼\nA × V\n   │\n   ▼\nAttention Output"
    },

    {
      heading: "19. A Small Numerical Example",

      content: [
        "Consider one query Q = [1, 0].",
        "Suppose there are three keys:",
        "K₁ = [1, 0], K₂ = [0, 1], K₃ = [1, 1]."
      ],

      formula:
        "Q·K₁ = 1",

      contentAfterFormula: [
        "Q·K₂ = 0",
        "Q·K₃ = 1"
      ]
    },

    {
      heading: "20. Scaling the Example",

      formula:
        "d_k = 2",
      contentAfterFormula: [
        "√d_k = √2",
        "Therefore the scores become:",
        "[1/√2, 0, 1/√2]"
      ]
    },

    {
      heading: "21. Applying Softmax",

      content: [
        "Softmax converts the scaled scores into a probability-like distribution over the available key positions.",
        "The two positions with equal scores receive equal attention weights."
      ]
    },

    {
      heading: "22. Values",

      content: [
        "Suppose the value vectors are:",
        "V₁ = [10, 0]",
        "V₂ = [0, 10]",
        "V₃ = [5, 5].",
        "The final attention output is the weighted combination of these vectors."
      ]
    },

    {
      heading: "23. Why Attention Is Contextual",

      content: [
        "The output representation for a token depends on the other tokens it attends to.",
        "Therefore the representation of a token can change when the surrounding sentence changes."
      ],

      example: {
        sentenceA:
          "The bat flew through the cave.",
        sentenceB:
          "The player held the bat.",
        observation:
          "Context can influence how the representation of 'bat' develops through the network."
      }
    },

    {
      heading: "24. Causal Self-Attention",

      content: [
        "Autoregressive language models must prevent a token position from accessing future tokens.",
        "A causal mask is therefore applied to the attention scores before softmax."
      ]
    },

    {
      heading: "25. Causal Mask Matrix",

      codeBlock:
        "Visible = 1\nBlocked = 0\n\n        K1 K2 K3 K4\nQ1      1  0  0  0\nQ2      1  1  0  0\nQ3      1  1  1  0\nQ4      1  1  1  1"
    },

    {
      heading: "26. Future Positions",

      content: [
        "For query position 2, positions 3 and 4 are future positions.",
        "Those positions must not contribute to the prediction at position 2 in a causal language model."
      ]
    },

    {
      heading: "27. Masking Before Softmax",

      content: [
        "Blocked attention scores are typically assigned a very large negative value before softmax.",
        "After softmax, those positions receive approximately zero probability."
      ],

      formula:
        "S_masked = S + M",

      contentAfterFormula: [
        "M contains very negative values for blocked positions."
      ]
    },

    {
      heading: "28. Padding Mask",

      content: [
        "Padding masks handle artificial tokens added only to make sequences the same length in a batch.",
        "Padding positions should not contribute as normal content."
      ]
    },

    {
      heading: "29. Causal Mask vs Padding Mask",

      table: [
        {
          mask: "Causal mask",
          blockedPositions: "Future sequence positions",
          reason: "Preserve autoregressive prediction"
        },
        {
          mask: "Padding mask",
          blockedPositions: "Padding positions",
          reason: "Ignore artificial batch padding"
        }
      ]
    },

    {
      heading: "30. Attention Matrix Visualization",

      codeBlock:
        "Example attention distribution:\n\n             Keys\n          1    2    3    4\n       ┌─────────────────────┐\nQ1     │ 0.7  0.3  0.0  0.0 │\nQ2     │ 0.2  0.6  0.2  0.0 │\nQ3     │ 0.1  0.2  0.6  0.1 │\nQ4     │ 0.1  0.1  0.3  0.5 │\n       └─────────────────────┘"
    },

    {
      heading: "31. Reading an Attention Row",

      content: [
        "Each row corresponds to a query position.",
        "For example, if row 2 is [0.2, 0.6, 0.2, 0], query position 2 is assigning the highest weight to key position 2.",
        "The exact interpretation of learned attention patterns should be made carefully; an attention weight is not automatically a complete explanation of model reasoning."
      ]
    },

    {
      heading: "32. Attention Is Not a Single Explanation of Reasoning",

      content: [
        "Attention weights show one part of the information-mixing mechanism.",
        "They should not automatically be treated as a complete explanation of why a model produced a particular answer."
      ]
    },

    {
      heading: "33. Matrix Dimensions",

      table: [
        {
          matrix: "X",
          shape: "n × d_model"
        },
        {
          matrix: "W_Q",
          shape: "d_model × d_k"
        },
        {
          matrix: "W_K",
          shape: "d_model × d_k"
        },
        {
          matrix: "W_V",
          shape: "d_model × d_v"
        },
        {
          matrix: "Q",
          shape: "n × d_k"
        },
        {
          matrix: "K",
          shape: "n × d_k"
        },
        {
          matrix: "V",
          shape: "n × d_v"
        },
        {
          matrix: "QKᵀ",
          shape: "n × n"
        }
      ]
    },

    {
      heading: "34. Dimension Check",

      content: [
        "If X has shape n × d_model and W_Q has shape d_model × d_k, then:"
      ],

      formula:
        "(n × d_model)(d_model × d_k) = n × d_k",

      contentAfterFormula: [
        "The inner dimensions match, so the matrix multiplication is valid."
      ]
    },

    {
      heading: "35. Why Matrix Thinking Matters",

      content: [
        "Transformers operate heavily through matrix multiplication.",
        "Understanding dimensions helps prevent implementation errors and makes the architecture much easier to reason about."
      ]
    },

    {
      heading: "36. Computational Complexity",

      content: [
        "The standard attention score matrix contains n² entries.",
        "This means attention interaction cost grows approximately quadratically with sequence length."
      ],

      formula:
        "Attention interaction count ≈ n²"
    },

    {
      heading: "37. Sequence Length Scaling Example",

      table: [
        {
          sequenceLength: "100",
          pairwiseEntries: "10,000"
        },
        {
          sequenceLength: "1,000",
          pairwiseEntries: "1,000,000"
        },
        {
          sequenceLength: "10,000",
          pairwiseEntries: "100,000,000"
        }
      ]
    },

    {
      heading: "38. Why Long Context Is Expensive",

      content: [
        "As sequence length increases, the number of pairwise attention interactions increases rapidly.",
        "This affects computation and memory requirements.",
        "Long-context systems therefore require careful architectural and systems-level optimization."
      ]
    },

    {
      heading: "39. Attention Computation Flow",

      process: [
        "Input X",
        "↓",
        "Linear projection",
        "↓",
        "Q, K, V",
        "↓",
        "QKᵀ",
        "↓",
        "Scaling",
        "↓",
        "Masking",
        "↓",
        "Softmax",
        "↓",
        "A",
        "↓",
        "A × V",
        "↓",
        "Attention output"
      ]
    },

    {
      heading: "40. Self-Attention vs Convolution",

      table: [
        {
          property: "Self-attention",
          behavior: "Dynamic interaction between positions"
        },
        {
          property: "Convolution",
          behavior: "Uses local learned filters"
        },
        {
          property: "Self-attention context",
          behavior: "Can directly connect distant positions"
        }
      ]
    },

    {
      heading: "41. Self-Attention vs RNN",

      table: [
        {
          property: "RNN",
          mechanism: "Sequential hidden-state recurrence"
        },
        {
          property: "Self-attention",
          mechanism: "Pairwise interaction through Q/K compatibility"
        },
        {
          property: "Long-range path",
          rnn: "Can require many recurrent steps",
          attention: "Can create direct interaction paths"
        }
      ]
    },

    {
      heading: "42. Information Retrieval Analogy",

      content: [
        "A query can be thought of as a search request.",
        "Keys can be viewed as searchable representations.",
        "Values are the information retrieved after matching.",
        "This analogy is useful for intuition, but the actual Transformer operation is learned matrix computation."
      ]
    },

    {
      heading: "43. Self-Attention and Context Construction",

      process: [
        "Token representation",
        "↓",
        "Generate query",
        "↓",
        "Compare against available keys",
        "↓",
        "Determine attention distribution",
        "↓",
        "Retrieve weighted values",
        "↓",
        "Create context-aware representation"
      ]
    },

    {
      heading: "44. Full Decoder Self-Attention",

      codeBlock:
        "Token embeddings\n      │\n      ▼\nPosition-aware representations\n      │\n      ▼\n┌─────────────────────┐\n│ Q = XWQ             │\n│ K = XWK             │\n│ V = XWV             │\n└──────────┬──────────┘\n           ▼\n        QKᵀ\n           ▼\n      Scale / √dₖ\n           ▼\n      Causal Mask\n           ▼\n        Softmax\n           ▼\n    Attention Weights\n           ▼\n          × V\n           ▼\n    Attention Output"
    },

    {
      heading: "45. Practical Implementation Considerations",

      content: [
        "Production Transformer implementations use optimized tensor operations rather than Python loops over individual tokens.",
        "Hardware accelerators perform matrix operations efficiently.",
        "Modern systems can also use specialized attention kernels and memory optimizations."
      ]
    },

    {
      heading: "46. Numerical Stability",

      content: [
        "Softmax can be numerically unstable when values become very large.",
        "Implementations commonly subtract the maximum score before exponentiation."
      ],

      formula:
        "softmax(zᵢ) = exp(zᵢ - max(z)) / Σⱼ exp(zⱼ - max(z))"
    },

    {
      heading: "47. Stable Softmax Example",

      codeBlock:
        "scores = [1000, 999, 998]\n\nm = max(scores)\nshifted = [x - m for x in scores]\n\n# Then apply exp and normalization\n"
    },

    {
      heading: "48. Self-Attention Mental Model",

      content: [
        "For every token:",
        "1. Ask what information is relevant.",
        "2. Compare that request with all available keys.",
        "3. Convert scores into weights.",
        "4. Retrieve information from values.",
        "5. Combine that information into a new representation."
      ]
    },

    {
      heading: "49. Common Mistakes",

      content: [
        "Mistake 1: Thinking Q, K, and V are manually created.",
        "Correction: They are generated using learned projections.",
        "Mistake 2: Forgetting the transpose of K.",
        "Correction: QKᵀ produces pairwise query-key scores.",
        "Mistake 3: Forgetting scaling.",
        "Correction: Standard scaled dot-product attention divides by √d_k.",
        "Mistake 4: Applying softmax before masking.",
        "Correction: Causal masking is normally incorporated into the scores before softmax.",
        "Mistake 5: Confusing attention weights with probabilities of generated tokens.",
        "Correction: Attention weights are distributions over positions, while output token probabilities are distributions over vocabulary tokens.",
        "Mistake 6: Thinking attention has linear sequence complexity.",
        "Correction: Standard self-attention has quadratic pairwise interaction growth.",
        "Mistake 7: Treating attention maps as complete explanations of reasoning.",
        "Correction: Attention is one component of the model's computation."
      ]
    },

    {
      heading: "50. Interview Questions",

      content: [
        "What is self-attention?",
        "Why are Q, K and V needed?",
        "How are Q, K and V calculated?",
        "What is QKᵀ?",
        "Why is K transposed?",
        "Why divide by √d_k?",
        "Why use softmax?",
        "What does one row of the attention matrix represent?",
        "What is causal attention?",
        "Why is causal masking required?",
        "What is a padding mask?",
        "What is the shape of the attention matrix?",
        "Why does standard self-attention have quadratic complexity?",
        "How does self-attention differ from RNN processing?",
        "How does self-attention create contextual representations?",
        "What is the difference between attention weights and output-token probabilities?"
      ]
    }
  ],

  formulas: [
    "Q = XW_Q",
    "K = XW_K",
    "V = XW_V",
    "S = QKᵀ",
    "S_scaled = QKᵀ / √d_k",
    "Attention(Q,K,V) = softmax(QKᵀ/√d_k)V",
    "softmax(zᵢ) = exp(zᵢ)/Σⱼexp(zⱼ)",
    "Stable softmax(zᵢ) = exp(zᵢ-max(z))/Σⱼexp(zⱼ-max(z))",
    "Attention matrix shape = n × n",
    "Standard attention interaction growth ≈ O(n²)"
  ],

  codeExamples: [
    {
      title: "Dot Product",
      language: "python",
      code:
        "def dot(a, b):\n    return sum(x * y for x, y in zip(a, b))\n\nprint(dot([1, 2], [3, 4]))"
    },
    {
      title: "Stable Softmax",
      language: "python",
      code:
        "import math\n\n\ndef softmax(values):\n    maximum = max(values)\n    exp_values = [math.exp(x - maximum) for x in values]\n    total = sum(exp_values)\n    return [x / total for x in exp_values]\n\nprint(softmax([1000, 999, 998]))"
    },
    {
      title: "Scaled Dot-Product Attention",
      language: "python",
      code:
        "import math\n\n\ndef dot(a, b):\n    return sum(x * y for x, y in zip(a, b))\n\n\ndef softmax(values):\n    maximum = max(values)\n    exp_values = [math.exp(x - maximum) for x in values]\n    total = sum(exp_values)\n    return [x / total for x in exp_values]\n\n\ndef attention(query, keys, values):\n    d_k = len(query)\n\n    scores = [\n        dot(query, key) / math.sqrt(d_k)\n        for key in keys\n    ]\n\n    weights = softmax(scores)\n\n    output = [0.0] * len(values[0])\n\n    for weight, value in zip(weights, values):\n        for i, component in enumerate(value):\n            output[i] += weight * component\n\n    return scores, weights, output\n\nq = [1.0, 0.0]\nkeys = [\n    [1.0, 0.0],\n    [0.0, 1.0],\n    [1.0, 1.0]\n]\nvalues = [\n    [10.0, 0.0],\n    [0.0, 10.0],\n    [5.0, 5.0]\n]\n\nscores, weights, output = attention(q, keys, values)\n\nprint(\"Scores:\", scores)\nprint(\"Weights:\", weights)\nprint(\"Output:\", output)"
    },
    {
      title: "Causal Mask",
      language: "python",
      code:
        "def causal_mask(n):\n    mask = []\n\n    for i in range(n):\n        row = []\n        for j in range(n):\n            row.append(1 if j <= i else 0)\n        mask.append(row)\n\n    return mask\n\nfor row in causal_mask(5):\n    print(row)"
    }
  ],

  mathIntuition: [
    {
      concept: "QKᵀ",
      explanation:
        "This creates a compatibility score between every query position and every key position."
    },
    {
      concept: "Scaling",
      explanation:
        "Dividing by √d_k controls the scale of dot products before softmax."
    },
    {
      concept: "Softmax",
      explanation:
        "Softmax converts scores into normalized weights across the available positions."
    },
    {
      concept: "Weighted sum",
      explanation:
        "The attention output is a mixture of value vectors determined by attention weights."
    },
    {
      concept: "Quadratic complexity",
      explanation:
        "Every query compares with every key, producing approximately n² pairwise scores."
    }
  ],

  exercises: [
    {
      question:
        "Given Q=[1,2] and K=[3,4], calculate the dot product.",
      difficulty: "Easy"
    },
    {
      question:
        "Explain why QKᵀ creates an n × n matrix.",
      difficulty: "Easy"
    },
    {
      question:
        "Calculate √d_k when d_k = 64.",
      difficulty: "Easy"
    },
    {
      question:
        "Explain why softmax is applied to attention scores.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain causal masking with a four-token sequence.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain the difference between padding and causal masks.",
      difficulty: "Medium"
    },
    {
      question:
        "Why does attention have O(n²) pairwise interaction growth?",
      difficulty: "Medium"
    },
    {
      question:
        "Derive the complete scaled dot-product attention equation.",
      difficulty: "Hard"
    },
    {
      question:
        "Explain how self-attention creates context-aware token representations.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Manual Attention Calculator",
      task:
        "Build a Python program that calculates attention weights for a single query.",
      requirements: [
        "Create Q.",
        "Create multiple K vectors.",
        "Calculate dot products.",
        "Scale them.",
        "Apply stable softmax.",
        "Display weights."
      ]
    },
    {
      title: "Complete Self-Attention",
      task:
        "Implement self-attention for a small matrix X using NumPy.",
      requirements: [
        "Create W_Q, W_K and W_V.",
        "Calculate Q, K and V.",
        "Calculate QKᵀ.",
        "Apply scaling.",
        "Apply softmax.",
        "Multiply by V."
      ]
    },
    {
      title: "Causal Self-Attention",
      task:
        "Extend your implementation with a causal mask.",
      requirements: [
        "Create an upper-triangular mask.",
        "Block future positions.",
        "Apply the mask before softmax.",
        "Verify future positions receive zero attention."
      ]
    },
    {
      title: "Attention Complexity Experiment",
      task:
        "Calculate n² pairwise attention entries for sequence lengths from 100 to 10,000.",
      requirements: [
        "Use Python.",
        "Generate a table.",
        "Plot sequence length against pairwise interaction count.",
        "Explain the growth."
      ]
    }
  ],

  architectureExercises: [
    {
      title: "Draw Q/K/V Projection",
      requirements: [
        "Input X",
        "W_Q",
        "W_K",
        "W_V",
        "Q",
        "K",
        "V"
      ]
    },
    {
      title: "Draw the Attention Matrix",
      requirements: [
        "Query positions",
        "Key positions",
        "Score matrix",
        "Softmax",
        "Attention weights"
      ]
    },
    {
      title: "Draw Causal Self-Attention",
      requirements: [
        "Input",
        "Q/K/V",
        "QKᵀ",
        "Causal mask",
        "Softmax",
        "Weighted V",
        "Output"
      ]
    }
  ],

  comparisonTables: [
    {
      title: "Self-Attention vs RNN",
      rows: [
        {
          aspect: "Main mechanism",
          selfAttention: "Pairwise attention",
          rnn: "Sequential recurrence"
        },
        {
          aspect: "Long-range interaction",
          selfAttention: "Direct pairwise path",
          rnn: "Through recurrent steps"
        },
        {
          aspect: "Attention matrix",
          selfAttention: "Yes",
          rnn: "No"
        }
      ]
    },
    {
      title: "Attention Weights vs Token Probabilities",
      rows: [
        {
          concept: "Attention weights",
          distributionOver: "Input sequence positions"
        },
        {
          concept: "Token probabilities",
          distributionOver: "Vocabulary tokens"
        }
      ]
    }
  ],

  summary: [
    "Self-attention allows each position to interact with other positions.",
    "Queries, keys, and values are generated through learned projections.",
    "QKᵀ produces pairwise compatibility scores.",
    "The scores are scaled by √d_k.",
    "Softmax converts scores into normalized attention weights.",
    "The attention output is a weighted combination of value vectors.",
    "Causal masking prevents decoder models from accessing future positions.",
    "Padding masks prevent artificial padding positions from contributing as normal content.",
    "The standard attention matrix has n × n entries.",
    "Therefore standard self-attention has approximately quadratic pairwise interaction growth.",
    "Attention weights and vocabulary token probabilities are different distributions.",
    "Self-attention is one of the fundamental mechanisms inside modern Transformer-based LLMs."
  ],

  keyTakeaways: [
    "Remember the complete equation: softmax(QKᵀ/√d_k)V.",
    "Q asks what information is relevant.",
    "K provides representations used for matching.",
    "V provides the information that is aggregated.",
    "Softmax converts scores into attention weights.",
    "Causal masking is essential for autoregressive LLMs.",
    "Every query can potentially compare against every key.",
    "Standard self-attention has quadratic sequence interaction growth.",
    "Understanding matrix dimensions is essential for understanding Transformers."
  ],

  visualReferences: [
    {
      title: "Attention Is All You Need",
      url:
        "https://arxiv.org/abs/1706.03762",
      purpose:
        "Primary reference for scaled dot-product attention and the Transformer architecture."
    },
    {
      title: "The Illustrated Transformer",
      url:
        "https://jalammar.github.io/illustrated-transformer/",
      purpose:
        "Visual explanation of attention, Q/K/V and Transformer computation."
    },
    {
      title: "Harvard NLP — Annotated Transformer",
      url:
        "https://nlp.seas.harvard.edu/annotated-transformer/",
      purpose:
        "Code-oriented explanation of Transformer components."
    }
  ]
};

export default lesson5;

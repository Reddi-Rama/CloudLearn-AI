const lesson2 = {
  id: "lesson2",
  moduleId: "module2",
  lessonNumber: 2,

  title: "Transformer Architecture & Attention",

  subtitle:
    "Understand the architecture that made modern Large Language Models possible, from embeddings and attention to transformer blocks and sequence processing.",

  description:
    "This lesson provides a detailed conceptual and mathematical introduction to the Transformer architecture. It explains why attention was introduced, how queries, keys, and values work, scaled dot-product attention, self-attention, multi-head attention, positional information, feed-forward networks, residual connections, normalization, causal masking, decoder architecture, and the complete flow of a transformer-based language model.",

  estimatedTime: "180–220 min",
  difficulty: "Intermediate → Advanced",

  learningObjectives: [
    "Understand why Transformers were introduced.",
    "Understand the limitations of sequential RNN processing.",
    "Understand attention conceptually.",
    "Understand queries, keys, and values.",
    "Calculate dot-product attention.",
    "Understand scaled dot-product attention.",
    "Understand softmax inside attention.",
    "Understand self-attention.",
    "Understand multi-head attention.",
    "Understand positional information.",
    "Understand feed-forward networks.",
    "Understand residual connections.",
    "Understand normalization.",
    "Understand causal masking.",
    "Understand decoder-only transformer architecture.",
    "Understand the complete flow of an LLM transformer block."
  ],

  sections: [

    {
      heading: "1. Why Do We Need Transformers?",

      content: [
        "Language is highly dependent on relationships between tokens.",
        "A model processing the sentence 'The student who studied for the exam passed it' needs to connect information across different positions.",
        "Earlier sequence models such as recurrent neural networks processed tokens sequentially. Transformers introduced attention as a way to model relationships between positions more directly."
      ]
    },

    {
      heading: "2. Before Transformers: Sequential Models",

      classificationTree: [
        "Sequence Models",
        "├── RNN",
        "│   └── Sequential hidden-state processing",
        "├── LSTM",
        "│   └── Improved long-range information handling",
        "├── GRU",
        "│   └── Simplified gated recurrence",
        "└── Transformer",
        "    └── Attention-based sequence processing"
      ]
    },

    {
      heading: "3. RNN-Style Processing",

      codeBlock:
        "Token 1 → Hidden State 1\n             ↓\nToken 2 → Hidden State 2\n             ↓\nToken 3 → Hidden State 3\n             ↓\nToken 4 → Hidden State 4"
    },

    {
      heading: "4. Limitations of Sequential Processing",

      table: [
        {
          issue: "Sequential dependency",
          explanation:
            "Tokens are processed through a sequential recurrence."
        },
        {
          issue: "Long-range dependencies",
          explanation:
            "Information can become harder to preserve over long sequences."
        },
        {
          issue: "Parallelization",
          explanation:
            "Training can be constrained by sequential computation in recurrent architectures."
        }
      ]
    },

    {
      heading: "5. Transformer Idea",

      content: [
        "The Transformer architecture uses attention to allow representations at different positions to interact.",
        "Instead of relying entirely on a sequential hidden-state chain, attention allows a token representation to assign different importance to other positions."
      ],

      process: [
        "Input tokens",
        "↓",
        "Create representations",
        "↓",
        "Compute relationships between positions",
        "↓",
        "Assign attention weights",
        "↓",
        "Combine information",
        "↓",
        "Create updated representations"
      ]
    },

    {
      heading: "6. What Is Attention?",

      content: [
        "Attention is a mechanism that computes a weighted combination of information from different positions.",
        "The weights determine how strongly each position contributes to the representation being constructed."
      ],

      example: {
        sentence:
          "The animal did not cross the road because it was tired.",
        question:
          "What might 'it' refer to?",
        explanation:
          "An attention mechanism can assign different weights to earlier tokens when constructing a representation for a token."
      }
    },

    {
      heading: "7. Query, Key and Value",

      content: [
        "Attention uses three conceptual representations: queries, keys, and values.",
        "A query represents what the current position is looking for.",
        "A key represents what information a position offers for matching.",
        "A value represents the information that can be aggregated."
      ],

      classificationTree: [
        "Attention",
        "├── Query (Q)",
        "│   └── What am I looking for?",
        "├── Key (K)",
        "│   └── What information is available?",
        "└── Value (V)",
        "    └── What information should be retrieved?"
      ]
    },

    {
      heading: "8. Q, K and V Intuition",

      table: [
        {
          component: "Query",
          intuition: "Search request"
        },
        {
          component: "Key",
          intuition: "Index or matching representation"
        },
        {
          component: "Value",
          intuition: "Information returned after matching"
        }
      ]
    },

    {
      heading: "9. Dot Product Similarity",

      content: [
        "Attention commonly uses dot products to measure compatibility between queries and keys.",
        "A larger dot product generally indicates greater alignment between two vectors."
      ],

      formula:
        "score(Q, K) = QKᵀ",

      contentAfterFormula: [
        "For matrices, multiplying Q by the transpose of K produces a matrix of pairwise compatibility scores."
      ]
    },

    {
      heading: "10. Why Divide by √dₖ?",

      formula:
        "Attention(Q,K,V) = softmax(QKᵀ / √dₖ)V",

      contentAfterFormula: [
        "The scaling factor helps keep attention scores in a numerically manageable range as the key dimension increases.",
        "Without scaling, dot products can become large enough for softmax to become excessively concentrated."
      ]
    },

    {
      heading: "11. Scaled Dot-Product Attention",

      process: [
        "Queries Q",
        "Keys K",
        "Values V",
        "↓",
        "Calculate QKᵀ",
        "↓",
        "Scale by √dₖ",
        "↓",
        "Apply mask if required",
        "↓",
        "Softmax",
        "↓",
        "Attention weights",
        "↓",
        "Multiply by V",
        "↓",
        "Output"
      ]
    },

    {
      heading: "12. Complete Attention Formula",

      formula:
        "Attention(Q,K,V) = softmax((QKᵀ)/√dₖ)V",

      contentAfterFormula: [
        "This equation is one of the most important equations in Transformer architecture.",
        "The first part determines which positions should receive attention.",
        "The multiplication by V combines the information from those positions."
      ]
    },

    {
      heading: "13. Small Numerical Example",

      content: [
        "Suppose a query vector is Q = [1, 0] and a key is K = [1, 1].",
        "Their dot product is:",
        "1×1 + 0×1 = 1.",
        "The score therefore indicates some degree of compatibility.",
        "Real Transformer attention performs this operation across many vectors simultaneously."
      ],

      formula:
        "Q·K = 1(1) + 0(1) = 1"
    },

    {
      heading: "14. Softmax in Attention",

      content: [
        "Attention scores are transformed into normalized weights using softmax.",
        "The weights are non-negative and sum to approximately 1."
      ],

      formula:
        "softmax(zᵢ) = exp(zᵢ) / Σⱼ exp(zⱼ)"
    },

    {
      heading: "15. Why Softmax?",

      content: [
        "Softmax converts raw compatibility scores into a distribution of attention weights.",
        "This allows the model to form a weighted combination of value vectors."
      ],

      example: {
        scores: [2, 1, 0],
        conceptualWeights:
          "The largest score receives the largest attention weight, while all positions contribute according to their normalized scores."
      }
    },

    {
      heading: "16. Self-Attention",

      content: [
        "In self-attention, queries, keys, and values are derived from the same input sequence.",
        "Therefore, each token can use information from other tokens in that sequence, subject to masking rules."
      ],

      codeBlock:
        "Input sequence\n      │\n      ├── Q\n      ├── K\n      └── V\n      │\n      ▼\nSelf-Attention\n      │\n      ▼\nContext-aware representations"
    },

    {
      heading: "17. Why Is It Called Self-Attention?",

      content: [
        "The mechanism is called self-attention because the sequence attends to itself.",
        "Each position can calculate relationships with other positions in the same sequence."
      ]
    },

    {
      heading: "18. Attention Matrix",

      content: [
        "If a sequence contains n tokens, the attention score matrix conceptually contains n × n pairwise interactions before masking.",
        "Each row can be interpreted as the attention distribution produced for one query position."
      ],

      formula:
        "Attention score matrix shape ≈ n × n"
    },

    {
      heading: "19. Attention Example",

      table: [
        {
          queryToken: "The",
          canAttendTo: "Context-dependent positions"
        },
        {
          queryToken: "cat",
          canAttendTo: "Other relevant tokens"
        },
        {
          queryToken: "sat",
          canAttendTo: "Other relevant tokens"
        },
        {
          queryToken: "there",
          canAttendTo: "Other relevant tokens"
        }
      ]
    },

    {
      heading: "20. Multi-Head Attention",

      content: [
        "A single attention operation provides one learned way of relating positions.",
        "Multi-head attention performs several attention operations in parallel using different learned projections.",
        "Different heads can learn different relationship patterns."
      ],

      process: [
        "Input representations",
        "↓",
        "Project into multiple Q/K/V sets",
        "↓",
        "Head 1 attention",
        "Head 2 attention",
        "Head 3 attention",
        "...",
        "Head h attention",
        "↓",
        "Concatenate head outputs",
        "↓",
        "Output projection"
      ]
    },

    {
      heading: "21. Multi-Head Attention Architecture",

      codeBlock:
        "                    INPUT\n                      │\n          ┌───────────┼───────────┐\n          ▼           ▼           ▼\n       Head 1       Head 2      Head 3      ...\n          │           │           │\n          ▼           ▼           ▼\n     Attention    Attention   Attention\n          │           │           │\n          └───────────┼───────────┘\n                      ▼\n                 Concatenate\n                      │\n                      ▼\n               Output Projection"
    },

    {
      heading: "22. Multi-Head Attention Formula",

      formula:
        "headᵢ = Attention(QWᵢᴽ, KWᵢᴷ, VWᵢⱽ)",

      contentAfterFormula: [
        "The individual heads use different learned projection matrices.",
        "The resulting head outputs are concatenated and projected again."
      ]
    },

    {
      heading: "23. Why Multiple Heads?",

      table: [
        {
          idea: "Different relationships",
          explanation:
            "Different heads can represent different interaction patterns."
        },
        {
          idea: "Different representation subspaces",
          explanation:
            "Each projection can emphasize different aspects of the input."
        },
        {
          idea: "Parallel computation",
          explanation:
            "Heads can be computed in parallel."
        }
      ]
    },

    {
      heading: "24. Positional Information",

      content: [
        "Attention itself does not inherently impose the sequential order of tokens.",
        "A Transformer therefore needs a mechanism to represent positional information.",
        "Different Transformer families use different approaches to position information."
      ],

      classificationTree: [
        "Position Information",
        "├── Sinusoidal positional encoding",
        "├── Learned positional embeddings",
        "└── Relative / rotary-style approaches"
      ]
    },

    {
      heading: "25. Why Position Matters",

      content: [
        "The sentences 'Dog bites man' and 'Man bites dog' contain the same words but have different meanings.",
        "A language model therefore needs information about token positions or relative relationships."
      ]
    },

    {
      heading: "26. Sinusoidal Position Encoding",

      formula:
        "PE(pos, 2i) = sin(pos / 10000^(2i/d))",

      contentAfterFormula: [
        "A corresponding cosine expression is used for alternating dimensions.",
        "The original Transformer architecture used deterministic sinusoidal positional encodings."
      ]
    },

    {
      heading: "27. Transformer Block",

      content: [
        "A Transformer is constructed from repeated blocks.",
        "A simplified Transformer block contains attention, residual connections, normalization, and a feed-forward network."
      ],

      classificationTree: [
        "Transformer Block",
        "├── Attention",
        "├── Residual connection",
        "├── Normalization",
        "├── Feed-forward network",
        "├── Residual connection",
        "└── Normalization"
      ]
    },

    {
      heading: "28. Residual Connections",

      formula:
        "Output = x + F(x)",

      contentAfterFormula: [
        "A residual connection allows the original representation x to bypass a transformation F(x).",
        "Residual connections help information and gradients flow through deep networks."
      ]
    },

    {
      heading: "29. Feed-Forward Network",

      content: [
        "After attention, each token representation is transformed by a position-wise feed-forward network.",
        "The same network structure is applied independently to each position, although the inputs at each position differ."
      ],

      formula:
        "FFN(x) = W₂ σ(W₁x + b₁) + b₂"
    },

    {
      heading: "30. Attention vs Feed-Forward Network",

      table: [
        {
          component: "Attention",
          primaryRole:
            "Mix information across token positions"
        },
        {
          component: "Feed-forward network",
          primaryRole:
            "Transform each token representation through learned nonlinear transformations"
        }
      ]
    },

    {
      heading: "31. Normalization",

      content: [
        "Normalization techniques help stabilize neural-network training and are an important component of Transformer architectures.",
        "Modern architectures can differ in exactly where normalization is placed."
      ],

      example: {
        conceptualPurpose: [
          "Improve training stability",
          "Control representation scale",
          "Support deep architectures"
        ]
      }
    },

    {
      heading: "32. Complete Simplified Transformer Block",

      codeBlock:
        "Input x\n  │\n  ▼\nAttention\n  │\n  ▼\nResidual Add\n  │\n  ▼\nNormalization\n  │\n  ▼\nFeed-Forward Network\n  │\n  ▼\nResidual Add\n  │\n  ▼\nNormalization\n  │\n  ▼\nOutput"
    },

    {
      heading: "33. Causal Attention",

      content: [
        "Decoder-style autoregressive language models must not use future tokens when predicting the current token.",
        "Causal masking prevents a token position from attending to future positions."
      ]
    },

    {
      heading: "34. Causal Mask",

      codeBlock:
        "Token positions:   1   2   3   4\n\nPosition 1:        ✓   ✗   ✗   ✗\nPosition 2:        ✓   ✓   ✗   ✗\nPosition 3:        ✓   ✓   ✓   ✗\nPosition 4:        ✓   ✓   ✓   ✓"
    },

    {
      heading: "35. Why Causal Masking Is Necessary",

      content: [
        "Suppose the model is learning to predict token 3.",
        "If token 4 were visible during training, the model could obtain information from the future.",
        "Causal masking preserves the autoregressive training objective."
      ]
    },

    {
      heading: "36. Masked Attention Formula",

      content: [
        "Conceptually, masked positions receive values that prevent them from receiving meaningful attention probability."
      ],

      formula:
        "Attention(Q,K,V) = softmax((QKᵀ + M)/√dₖ)V",

      contentAfterFormula: [
        "M represents the attention mask. Future positions can receive a very negative mask value before softmax."
      ]
    },

    {
      heading: "37. Decoder-Only Transformer",

      content: [
        "Modern autoregressive LLMs commonly use decoder-only Transformer architectures.",
        "They use causal self-attention so that each position can depend on earlier positions but not future positions during autoregressive prediction."
      ],

      codeBlock:
        "Tokens\n  ↓\nToken embeddings\n  ↓\nPosition information\n  ↓\nTransformer block 1\n  ↓\nTransformer block 2\n  ↓\nTransformer block 3\n  ↓\n...\n  ↓\nTransformer block N\n  ↓\nOutput projection\n  ↓\nLogits\n  ↓\nSoftmax / decoding"
    },

    {
      heading: "38. Encoder vs Decoder vs Encoder-Decoder",

      table: [
        {
          architecture: "Encoder-only",
          commonUse:
            "Understanding / representation tasks"
        },
        {
          architecture: "Decoder-only",
          commonUse:
            "Autoregressive generation"
        },
        {
          architecture: "Encoder-decoder",
          commonUse:
            "Sequence-to-sequence transformation"
        }
      ]
    },

    {
      heading: "39. Original Transformer Architecture",

      content: [
        "The original Transformer architecture introduced an encoder-decoder design.",
        "The encoder processes the source sequence, while the decoder generates the target sequence using masked self-attention and attention to encoder representations."
      ],

      codeBlock:
        "SOURCE SEQUENCE\n      │\n      ▼\n  ┌─────────┐\n  │ ENCODER │\n  └────┬────┘\n       │\n       ▼\nEncoder representations\n       │\n       ▼\n  ┌─────────┐\n  │ DECODER │ ← Target context\n  └────┬────┘\n       │\n       ▼\n     Output"
    },

    {
      heading: "40. Self-Attention vs Cross-Attention",

      table: [
        {
          mechanism: "Self-attention",
          relationship:
            "Queries, keys, and values come from the same sequence representation"
        },
        {
          mechanism: "Cross-attention",
          relationship:
            "Queries come from one representation while keys and values come from another"
        }
      ]
    },

    {
      heading: "41. Transformer Data Flow",

      process: [
        "Text",
        "↓",
        "Tokenization",
        "↓",
        "Token IDs",
        "↓",
        "Token embeddings",
        "↓",
        "Position information",
        "↓",
        "Transformer block",
        "↓",
        "Repeated transformer blocks",
        "↓",
        "Output representation",
        "↓",
        "Linear projection",
        "↓",
        "Logits",
        "↓",
        "Decoding"
      ]
    },

    {
      heading: "42. Why Transformers Scale Well for Training",

      content: [
        "A major advantage of Transformer training is that token representations within a sequence can be processed using highly parallelizable matrix operations.",
        "This is particularly suitable for modern accelerator hardware.",
        "Autoregressive inference is still sequential at the token-generation level, although substantial computation inside each step is parallelized."
      ]
    },

    {
      heading: "43. Training Parallelism vs Generation",

      table: [
        {
          stage: "Training",
          characteristic:
            "Many sequence positions can be processed in parallel subject to the architecture and implementation."
        },
        {
          stage: "Autoregressive generation",
          characteristic:
            "New tokens depend on previously generated tokens."
        }
      ]
    },

    {
      heading: "44. Computational Cost of Attention",

      content: [
        "Standard self-attention creates pairwise interactions between sequence positions.",
        "For sequence length n, the attention score matrix has approximately n² entries.",
        "This quadratic relationship is an important consideration for long-context systems."
      ],

      formula:
        "Attention score matrix size = n × n",

      contentAfterFormula: [
        "This is one reason long-context Transformer systems require careful optimization."
      ]
    },

    {
      heading: "45. Memory and Attention",

      content: [
        "The quadratic relationship between sequence length and attention interactions can increase computation and memory requirements as context length grows.",
        "Modern systems use various architectural and systems-level optimizations to make long-context inference more practical."
      ]
    },

    {
      heading: "46. Attention Does Not Mean the Model Has Human Attention",

      content: [
        "The term attention describes a mathematical mechanism for weighting information between representations.",
        "It should not be interpreted as evidence that the model possesses human consciousness or human cognitive attention."
      ]
    },

    {
      heading: "47. Complete Transformer Classification",

      classificationTree: [
        "Transformer Architectures",
        "├── Encoder-only",
        "│   └── Representation-focused models",
        "├── Decoder-only",
        "│   └── Autoregressive generation",
        "└── Encoder-decoder",
        "    └── Sequence-to-sequence transformation"
      ]
    },

    {
      heading: "48. Complete Decoder-Only LLM Architecture",

      codeBlock:
        "                 TEXT INPUT\n                     │\n                     ▼\n                 TOKENIZER\n                     │\n                     ▼\n                  TOKEN IDs\n                     │\n                     ▼\n              TOKEN EMBEDDINGS\n                     │\n                     ▼\n           POSITION INFORMATION\n                     │\n                     ▼\n        ┌─────────────────────────┐\n        │   TRANSFORMER BLOCK 1   │\n        └────────────┬────────────┘\n                     ▼\n        ┌─────────────────────────┐\n        │   TRANSFORMER BLOCK 2   │\n        └────────────┬────────────┘\n                     ▼\n                    ...\n                     ▼\n        ┌─────────────────────────┐\n        │   TRANSFORMER BLOCK N   │\n        └────────────┬────────────┘\n                     ▼\n             OUTPUT PROJECTION\n                     │\n                     ▼\n                   LOGITS\n                     │\n                     ▼\n                  DECODER\n                     │\n                     ▼\n               NEXT TOKEN"
    },

    {
      heading: "49. Attention Calculation Summary",

      process: [
        "Input representations",
        "↓",
        "Linear projections",
        "↓",
        "Q, K, V",
        "↓",
        "QKᵀ",
        "↓",
        "Scale by √dₖ",
        "↓",
        "Apply causal mask if required",
        "↓",
        "Softmax",
        "↓",
        "Attention weights",
        "↓",
        "Weighted sum of V",
        "↓",
        "Attention output"
      ]
    },

    {
      heading: "50. Common Mistakes",

      content: [
        "Mistake 1: Thinking attention simply selects one token.",
        "Correction: Attention usually produces a weighted combination of multiple value vectors.",
        "Mistake 2: Thinking Q, K and V are three different input sequences.",
        "Correction: In self-attention they are different learned projections of the same input representation.",
        "Mistake 3: Forgetting the scaling factor.",
        "Correction: Standard scaled dot-product attention divides scores by √dₖ.",
        "Mistake 4: Ignoring causal masking in decoder-only generation.",
        "Correction: Future-token visibility must be prevented for autoregressive prediction.",
        "Mistake 5: Assuming attention alone forms the entire Transformer block.",
        "Correction: Transformer blocks also contain feed-forward transformations, residual paths, normalization, and other architecture-specific components.",
        "Mistake 6: Assuming all Transformers use identical positional encoding.",
        "Correction: Position-handling mechanisms vary between architectures."
      ]
    },

    {
      heading: "51. Interview Questions",

      content: [
        "Why were Transformers introduced?",
        "What is attention?",
        "What are queries, keys, and values?",
        "Why do we calculate QKᵀ?",
        "Why divide by √dₖ?",
        "Why use softmax?",
        "What is self-attention?",
        "What is multi-head attention?",
        "Why use multiple attention heads?",
        "What is positional information?",
        "Why is positional information necessary?",
        "What is a residual connection?",
        "What is a feed-forward network?",
        "What is normalization?",
        "What is causal masking?",
        "Why does a decoder-only model need causal masking?",
        "What is cross-attention?",
        "What is the difference between encoder-only and decoder-only Transformers?",
        "Why does standard attention have quadratic sequence interaction complexity?",
        "How does a Transformer-based LLM generate text?"
      ]
    }
  ],

  formulas: [
    "Attention(Q,K,V) = softmax(QKᵀ / √dₖ)V",
    "Attention score = QKᵀ",
    "Scaled score = QKᵀ / √dₖ",
    "softmax(zᵢ) = exp(zᵢ) / Σⱼ exp(zⱼ)",
    "FFN(x) = W₂σ(W₁x + b₁) + b₂",
    "Residual(x) = x + F(x)",
    "Attention matrix size ≈ n × n",
    "Original sinusoidal position encoding: PE(pos,2i)=sin(pos/10000^(2i/d))"
  ],

  codeExamples: [
    {
      title: "Simple Softmax",
      language: "python",
      code:
        "import math\n\n\ndef softmax(values):\n    exp_values = [math.exp(x) for x in values]\n    total = sum(exp_values)\n    return [x / total for x in exp_values]\n\nprint(softmax([2, 1, 0]))"
    },
    {
      title: "Simple Dot Product",
      language: "python",
      code:
        "def dot_product(a, b):\n    return sum(x * y for x, y in zip(a, b))\n\nq = [1, 0]\nk = [1, 1]\n\nprint(dot_product(q, k))"
    },
    {
      title: "Conceptual Scaled Attention",
      language: "python",
      description:
        "A simplified single-vector illustration rather than a full optimized Transformer implementation.",
      code:
        "import math\n\n\ndef dot(a, b):\n    return sum(x * y for x, y in zip(a, b))\n\n\ndef softmax(values):\n    exp_values = [math.exp(v) for v in values]\n    total = sum(exp_values)\n    return [v / total for v in exp_values]\n\nq = [1.0, 0.0]\nkeys = [\n    [1.0, 1.0],\n    [0.0, 1.0],\n    [1.0, 0.0]\n]\nvalues = [\n    [10.0, 0.0],\n    [0.0, 10.0],\n    [5.0, 5.0]\n]\n\nd_k = len(q)\n\nscores = [dot(q, k) / math.sqrt(d_k) for k in keys]\nweights = softmax(scores)\n\noutput = [0.0, 0.0]\n\nfor weight, value in zip(weights, values):\n    output[0] += weight * value[0]\n    output[1] += weight * value[1]\n\nprint(\"Scores:\", scores)\nprint(\"Weights:\", weights)\nprint(\"Output:\", output)"
    }
  ],

  mathIntuition: [
    {
      concept: "Dot product",
      explanation:
        "The dot product measures alignment between query and key vectors."
    },
    {
      concept: "Scaling",
      explanation:
        "Dividing by the square root of the key dimension helps control score magnitude."
    },
    {
      concept: "Softmax",
      explanation:
        "Softmax turns compatibility scores into normalized attention weights."
    },
    {
      concept: "Weighted sum",
      explanation:
        "Attention combines value vectors according to their attention weights."
    },
    {
      concept: "Quadratic interaction",
      explanation:
        "For n tokens, standard self-attention forms approximately n² pairwise interactions."
    }
  ],

  exercises: [
    {
      question:
        "Explain attention using a search-engine analogy.",
      difficulty: "Easy"
    },
    {
      question:
        "Explain the roles of Q, K, and V.",
      difficulty: "Easy"
    },
    {
      question:
        "Calculate the dot product of Q=[1,2] and K=[3,4].",
      difficulty: "Easy"
    },
    {
      question:
        "Explain why attention scores are divided by √dₖ.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain how softmax converts attention scores into weights.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain self-attention using a sentence containing a pronoun.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain why causal masking is necessary for autoregressive language models.",
      difficulty: "Medium"
    },
    {
      question:
        "Compare encoder-only, decoder-only, and encoder-decoder Transformers.",
      difficulty: "Hard"
    },
    {
      question:
        "Explain the complete data flow through a decoder-only Transformer.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Implement Dot-Product Attention",
      task:
        "Implement a small attention mechanism using Python lists.",
      requirements: [
        "Create query vectors.",
        "Create key vectors.",
        "Create value vectors.",
        "Calculate dot products.",
        "Scale the scores.",
        "Apply softmax.",
        "Calculate the weighted value output."
      ]
    },
    {
      title: "Implement Causal Masking",
      task:
        "Create an n × n attention mask that prevents each position from attending to future positions.",
      requirements: [
        "Generate the matrix.",
        "Allow current and previous positions.",
        "Block future positions.",
        "Print the resulting matrix."
      ]
    },
    {
      title: "Build a Toy Multi-Head Attention",
      task:
        "Create two or more simplified attention heads and combine their outputs.",
      requirements: [
        "Use separate projections.",
        "Compute attention for each head.",
        "Concatenate results.",
        "Apply an output transformation."
      ]
    }
  ],

  comparisonTables: [
    {
      title: "RNN vs Transformer",
      rows: [
        {
          aspect: "Sequence processing",
          rnn: "Sequential recurrence",
          transformer: "Attention-based interactions"
        },
        {
          aspect: "Long-range relationships",
          rnn: "Can be difficult",
          transformer: "Direct attention paths"
        },
        {
          aspect: "Training parallelism",
          rnn: "More constrained by recurrence",
          transformer: "Highly parallelizable across sequence positions"
        }
      ]
    },
    {
      title: "Self-Attention vs Cross-Attention",
      rows: [
        {
          aspect: "Q source",
          selfAttention: "Same sequence",
          crossAttention: "One representation"
        },
        {
          aspect: "K/V source",
          selfAttention: "Same sequence",
          crossAttention: "Another representation"
        }
      ]
    },
    {
      title: "Encoder vs Decoder",
      rows: [
        {
          aspect: "Main purpose",
          encoder: "Representation",
          decoder: "Autoregressive generation"
        },
        {
          aspect: "Future-token restriction",
          encoder: "Depends on architecture/task",
          decoder: "Causal masking for autoregressive generation"
        }
      ]
    }
  ],

  architectureExercises: [
    {
      title: "Draw a Transformer Block",
      requirements: [
        "Input",
        "Attention",
        "Residual connection",
        "Normalization",
        "Feed-forward network",
        "Second residual connection",
        "Second normalization",
        "Output"
      ]
    },
    {
      title: "Draw Self-Attention",
      requirements: [
        "Input",
        "Q",
        "K",
        "V",
        "QKᵀ",
        "Scaling",
        "Softmax",
        "Weighted V",
        "Output"
      ]
    },
    {
      title: "Draw a Decoder-Only LLM",
      requirements: [
        "Tokenizer",
        "Token embeddings",
        "Position information",
        "Transformer blocks",
        "Output projection",
        "Logits",
        "Decoding"
      ]
    }
  ],

  summary: [
    "Transformers use attention to model relationships between sequence positions.",
    "Attention uses queries, keys, and values.",
    "Scaled dot-product attention is computed as softmax(QKᵀ/√dₖ)V.",
    "Self-attention derives Q, K, and V from the same sequence representation.",
    "Multi-head attention uses multiple learned attention projections.",
    "Position information is required because attention alone does not inherently encode token order.",
    "Transformer blocks combine attention with feed-forward transformations, residual connections, and normalization.",
    "Causal masking prevents decoder-only models from accessing future tokens during autoregressive prediction.",
    "Decoder-only Transformers are widely used for autoregressive language generation.",
    "Standard self-attention has approximately quadratic pairwise interaction growth with sequence length.",
    "The Transformer architecture is a major foundation of modern LLMs."
  ],

  keyTakeaways: [
    "Attention is a mathematical mechanism for combining information across positions.",
    "Q represents what a position is looking for.",
    "K represents what each position offers for matching.",
    "V contains the information that gets aggregated.",
    "Softmax converts attention scores into weights.",
    "Multi-head attention allows multiple learned relationship patterns.",
    "Residual connections help deep Transformer networks train effectively.",
    "Feed-forward networks transform token representations after attention.",
    "Causal masking is essential for autoregressive decoder-only language models.",
    "A Transformer is much more than attention alone."
  ],

  visualReferences: [
    {
      title: "Attention Is All You Need",
      url:
        "https://arxiv.org/abs/1706.03762",
      purpose:
        "Original Transformer research paper containing the architecture and attention formulation."
    },
    {
      title: "The Illustrated Transformer",
      url:
        "https://jalammar.github.io/illustrated-transformer/",
      purpose:
        "Visual explanation of Transformer architecture and attention."
    },
    {
      title: "Hugging Face LLM Course",
      url:
        "https://huggingface.co/learn/llm-course/chapter1/4",
      purpose:
        "Supplementary explanation of Transformer architecture."
    }
  ]
};

export default lesson2;

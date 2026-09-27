const lesson7 = {
  id: "lesson7",
  moduleId: "module2",
  lessonNumber: 7,
  title: "Transformer Feed-Forward Networks & Transformer Blocks",
  subtitle: "Understand what happens after attention and how a complete Transformer block transforms information.",
  description:
    "This lesson explains the position-wise feed-forward network, activation functions, dimensional expansion, parameterization, residual connections, normalization placement, tensor shapes, and the complete structure of a Transformer block.",
  estimatedTime: "3–4 hours",
  difficulty: "Advanced",

  learningObjectives: [
    "Understand why a Transformer needs a feed-forward network after attention.",
    "Explain the structure of a position-wise Feed-Forward Network (FFN).",
    "Understand the purpose of dimensional expansion inside an FFN.",
    "Derive the mathematical equation of a Transformer FFN.",
    "Understand ReLU and GELU activation functions.",
    "Calculate FFN parameter counts.",
    "Understand the difference between attention and feed-forward computation.",
    "Trace tensor shapes through a Transformer block.",
    "Understand residual connections and normalization inside the block.",
    "Compare Pre-LN and Post-LN Transformer designs.",
    "Implement a simple Transformer FFN using NumPy.",
    "Understand the complete data flow inside a decoder-only Transformer block."
  ],

  sections: [
    {
      heading: "1. Why Does a Transformer Need More Than Attention?",
      content: [
        "Self-attention allows tokens to exchange information with one another. A token can look at other tokens and decide which information is useful.",
        "However, attention is primarily an information-mixing mechanism. After information has been collected from other positions, the model still needs a mechanism that can transform and process the representation at each position.",
        "This is the role of the Feed-Forward Network (FFN).",
        "A useful mental model is: attention decides which information to gather, while the FFN transforms the gathered information into a more useful representation."
      ],

      classificationTree: [
        "Transformer Block",
        "├── Multi-Head Self-Attention",
        "│   ├── Query projection",
        "│   ├── Key projection",
        "│   ├── Value projection",
        "│   ├── Attention scores",
        "│   └── Weighted aggregation",
        "├── Residual Connection",
        "├── Normalization",
        "├── Feed-Forward Network",
        "│   ├── Linear expansion",
        "│   ├── Non-linear activation",
        "│   └── Linear projection",
        "├── Residual Connection",
        "└── Normalization"
      ],

      process: [
        "Input hidden states enter the Transformer block.",
        "Multi-head self-attention allows tokens to exchange contextual information.",
        "The attention result is combined with the residual stream.",
        "Normalization stabilizes the representation.",
        "The Feed-Forward Network independently transforms each token representation.",
        "Another residual connection preserves the previous information pathway.",
        "Normalization produces a stable representation for the next block."
      ]
    },

    {
      heading: "2. What Is a Feed-Forward Network?",
      content: [
        "A Feed-Forward Network is a small neural network applied independently to each token position.",
        "Unlike self-attention, the FFN does not directly mix information between different sequence positions.",
        "If the input contains n tokens, the same FFN parameters are applied to every token.",
        "This is why it is called position-wise."
      ],

      formulas: [
        "FFN(x) = W₂ σ(W₁x + b₁) + b₂",
        "x ∈ R^(d_model)",
        "W₁ ∈ R^(d_ff × d_model)",
        "W₂ ∈ R^(d_model × d_ff)",
        "b₁ ∈ R^(d_ff)",
        "b₂ ∈ R^(d_model)"
      ],

      table: {
        headers: ["Component", "Purpose", "Typical Shape"],
        rows: [
          ["Input x", "Token hidden representation", "[d_model]"],
          ["W₁", "Expand representation", "[d_ff × d_model]"],
          ["b₁", "First-layer bias", "[d_ff]"],
          ["Activation", "Introduce non-linearity", "[d_ff]"],
          ["W₂", "Project back", "[d_model × d_ff]"],
          ["b₂", "Output bias", "[d_model]"],
          ["Output", "Transformed token representation", "[d_model]"]
        ]
      }
    },

    {
      heading: "3. Why Is the Hidden Dimension Expanded?",
      content: [
        "A common Transformer design expands d_model into a larger intermediate dimension d_ff.",
        "For example, a model may have d_model = 768 and use d_ff = 3072.",
        "The representation temporarily moves into a larger feature space where the network can perform richer non-linear transformations.",
        "After processing, the second linear layer projects the representation back to d_model."
      ],

      process: [
        "Token representation",
        "↓",
        "d_model dimensions",
        "↓",
        "Linear expansion",
        "↓",
        "d_ff dimensions",
        "↓",
        "Non-linear activation",
        "↓",
        "Linear projection",
        "↓",
        "d_model dimensions"
      ],

      contentAfterProcess: [
        "The important idea is that the FFN does not change the sequence length. If the input contains 100 tokens, the output still contains 100 token representations.",
        "Only the feature dimension temporarily expands and contracts."
      ]
    },

    {
      heading: "4. Position-Wise Processing",
      content: [
        "Suppose a sequence contains five tokens. Attention allows those five positions to interact. The FFN then applies the same neural network independently to each of the five resulting vectors.",
        "The same W₁, W₂, b₁, and b₂ parameters are reused at every position.",
        "Therefore, the FFN is position-wise but parameter-shared."
      ],

      table: {
        headers: ["Operation", "Mixes sequence positions?", "Main purpose"],
        rows: [
          ["Self-Attention", "Yes", "Contextual information exchange"],
          ["Feed-Forward Network", "No", "Feature transformation"],
          ["Residual Connection", "No", "Preserve information and improve gradient flow"],
          ["Layer Normalization", "No", "Normalize features"]
        ]
      }
    },

    {
      heading: "5. Activation Functions",
      content: [
        "Without an activation function, two consecutive linear transformations can be mathematically collapsed into one linear transformation.",
        "The non-linear activation is therefore essential.",
        "Modern Transformer architectures commonly use GELU or closely related gated activation designs, while ReLU is historically important and still useful for understanding the architecture."
      ],

      formulas: [
        "ReLU(x) = max(0, x)",
        "GELU(x) ≈ x Φ(x)",
        "where Φ(x) is the cumulative distribution function of the standard normal distribution.",
        "A commonly used approximation is GELU(x) ≈ 0.5x[1 + tanh(√(2/π)(x + 0.044715x³))]"
      ],

      table: {
        headers: ["Activation", "Main idea", "Behavior"],
        rows: [
          ["ReLU", "Keep positive values", "Negative values become zero"],
          ["GELU", "Smoothly gate values", "Smooth transition around zero"],
          ["SiLU/Swish", "x multiplied by sigmoid(x)", "Smooth non-linearity"]
        ]
      }
    },

    {
      heading: "6. ReLU Example",
      content: [
        "Suppose the intermediate representation is [-2, -0.5, 0, 1.5, 3].",
        "ReLU removes negative activations while preserving positive activations."
      ],

      formulas: [
        "x = [-2, -0.5, 0, 1.5, 3]",
        "ReLU(x) = [0, 0, 0, 1.5, 3]"
      ],

      contentAfterFormula: [
        "This creates a sparse activation pattern in which some features are inactive for a particular input."
      ]
    },

    {
      heading: "7. Attention vs Feed-Forward Network",
      content: [
        "Understanding this distinction is one of the most important concepts in Transformer architecture."
      ],

      comparisonTables: [
        {
          title: "Attention vs FFN",
          headers: ["Property", "Self-Attention", "Feed-Forward Network"],
          rows: [
            ["Primary role", "Mix contextual information", "Transform features"],
            ["Across tokens", "Yes", "No"],
            ["Depends on other positions", "Yes", "No"],
            ["Uses Q/K/V", "Yes", "No"],
            ["Uses activation", "Usually not between attention score and aggregation", "Yes"],
            ["Sequence interaction", "Explicit", "Position-wise"],
            ["Main computation", "Matrix attention", "Linear + activation + linear"]
          ]
        }
      ]
    },

    {
      heading: "8. Complete Feed-Forward Calculation",
      content: [
        "Consider a simplified input vector x with dimension 2 and an intermediate dimension of 3.",
        "Let x = [1, 2].",
        "Assume W₁ and b₁ produce an intermediate vector [3, -1, 2].",
        "After ReLU, the vector becomes [3, 0, 2].",
        "The second linear layer transforms this vector back into the original model dimension."
      ],

      formulas: [
        "x → W₁x + b₁ → activation → W₂h + b₂",
        "x = [1, 2]",
        "h = ReLU(W₁x + b₁)",
        "y = W₂h + b₂"
      ]
    },

    {
      heading: "9. FFN Parameter Count",
      content: [
        "Parameter counting helps estimate model size and memory requirements.",
        "Ignoring biases for a moment, the two main matrices contain d_ff × d_model parameters each."
      ],

      formulas: [
        "Parameters ≈ d_model × d_ff + d_ff × d_model",
        "Parameters ≈ 2 × d_model × d_ff",
        "Including biases:",
        "Parameters = d_model d_ff + d_ff d_model + d_ff + d_model"
      ],

      contentAfterFormula: [
        "If d_model = 768 and d_ff = 3072, the two major matrices contain approximately 4.72 million parameters."
      ]
    },

    {
      heading: "10. Tensor Shapes in a Transformer FFN",
      content: [
        "For a batch of sequences, the hidden-state tensor is commonly represented as [batch_size, sequence_length, d_model]."
      ],

      table: {
        headers: ["Stage", "Tensor shape"],
        rows: [
          ["Input", "[B, T, d_model]"],
          ["First linear layer", "[B, T, d_ff]"],
          ["Activation", "[B, T, d_ff]"],
          ["Second linear layer", "[B, T, d_model]"],
          ["Output", "[B, T, d_model]"]
        ]
      },

      formulas: [
        "X ∈ R^(B × T × d_model)",
        "H = σ(XW₁ + b₁)",
        "H ∈ R^(B × T × d_ff)",
        "Y = HW₂ + b₂",
        "Y ∈ R^(B × T × d_model)"
      ]
    },

    {
      heading: "11. The Transformer Block",
      content: [
        "A Transformer block combines attention, feed-forward transformation, residual pathways, and normalization.",
        "The exact ordering depends on the architecture."
      ],

      process: [
        "Input X",
        "↓",
        "Multi-Head Self-Attention",
        "↓",
        "Residual Connection",
        "↓",
        "Normalization",
        "↓",
        "Feed-Forward Network",
        "↓",
        "Residual Connection",
        "↓",
        "Normalization",
        "↓",
        "Output hidden states"
      ],

      contentAfterProcess: [
        "A decoder-only language model stacks many such blocks. Each block progressively transforms the representation while preserving a residual information pathway."
      ]
    },

    {
      heading: "12. Pre-Norm vs Post-Norm",
      content: [
        "Transformer architectures can place normalization before or after the major sublayer.",
        "The distinction is important when reading architecture diagrams and model implementations."
      ],

      formulas: [
        "Post-Norm style:",
        "X₁ = LayerNorm(X + Attention(X))",
        "Y = LayerNorm(X₁ + FFN(X₁))",
        "",
        "Pre-Norm style:",
        "X₁ = X + Attention(LayerNorm(X))",
        "Y = X₁ + FFN(LayerNorm(X₁))"
      ],

      comparisonTables: [
        {
          title: "Pre-Norm and Post-Norm",
          headers: ["Property", "Pre-Norm", "Post-Norm"],
          rows: [
            ["Normalization position", "Before sublayer", "After residual addition"],
            ["Residual pathway", "Direct", "Interacts with normalization"],
            ["Training behavior", "Often easier for deep stacks", "Historically common"],
            ["Architecture reading", "Look for LN before attention/FFN", "Look for LN after residual"]
          ]
        }
      ]
    },

    {
      heading: "13. Why Residual Connections Matter",
      content: [
        "A residual connection adds the original representation to the output of a transformation.",
        "Instead of forcing every layer to completely reconstruct the representation, the layer can learn an update to the existing representation.",
        "This creates a direct information and gradient pathway through the network."
      ],

      formulas: [
        "Output = Input + Transformation(Input)",
        "Y = X + F(X)"
      ],

      contentAfterFormula: [
        "If F(X) becomes small, the layer can behave approximately like an identity mapping. This makes it easier to stack many transformations."
      ]
    },

    {
      heading: "14. Complete Decoder-Only Transformer Block",
      content: [
        "A simplified decoder-only block can be viewed as two major transformation stages: contextual mixing through causal self-attention and feature transformation through the FFN."
      ],

      process: [
        "Token hidden states",
        "↓",
        "Layer Normalization",
        "↓",
        "Causal Multi-Head Self-Attention",
        "↓",
        "Residual Addition",
        "↓",
        "Layer Normalization",
        "↓",
        "Feed-Forward Network",
        "↓",
        "Residual Addition",
        "↓",
        "Next Transformer Block"
      ]
    },

    {
      heading: "15. Why the Same FFN Is Applied to Every Token",
      content: [
        "Suppose the hidden-state matrix contains T token vectors.",
        "The FFN parameters do not depend on token position.",
        "The same transformation is applied to every row.",
        "Contextual differences have already been incorporated through attention, so the FFN can process each contextualized representation independently."
      ],

      formulas: [
        "X = [x₁, x₂, ..., x_T]",
        "FFN(X) = [FFN(x₁), FFN(x₂), ..., FFN(x_T)]"
      ]
    },

    {
      heading: "16. FFN Computational Complexity",
      content: [
        "For a sequence with T positions, the FFN performs matrix multiplications independently for each token.",
        "Its computation grows approximately linearly with sequence length."
      ],

      formulas: [
        "FFN complexity ≈ O(T × d_model × d_ff)"
      ],

      comparisonTables: [
        {
          title: "Attention vs FFN Complexity",
          headers: ["Component", "Approximate dependency on sequence length"],
          rows: [
            ["Self-Attention", "O(T² × d_model)"],
            ["Feed-Forward Network", "O(T × d_model × d_ff)"]
          ]
        }
      ]
    },

    {
      heading: "17. Why FFNs Are Computationally Important",
      content: [
        "Although attention receives significant attention in Transformer explanations, the FFN can contain a very large fraction of the parameters and computation in a standard Transformer.",
        "This is one reason modern architectures have developed alternatives such as gated feed-forward networks and Mixture-of-Experts layers."
      ]
    },

    {
      heading: "18. Gated Feed-Forward Networks",
      content: [
        "Modern language models often use gated variants instead of the simplest activation-based FFN.",
        "The basic idea is to create an additional learned pathway that controls which intermediate features should contribute to the output."
      ],

      formulas: [
        "A simplified gated form can be represented as:",
        "FFN(x) = W₂(activation(W₁x) ⊙ W₃x)",
        "where ⊙ denotes element-wise multiplication."
      ],

      contentAfterFormula: [
        "Gated designs can provide a more expressive feature transformation than a simple two-layer FFN."
      ]
    },

    {
      heading: "19. Worked Architecture Example",
      content: [
        "Assume a decoder-only Transformer uses batch size B = 2, sequence length T = 8, model dimension d_model = 512, and FFN dimension d_ff = 2048."
      ],

      table: {
        headers: ["Stage", "Shape"],
        rows: [
          ["Input", "[2, 8, 512]"],
          ["First FFN projection", "[2, 8, 2048]"],
          ["Activation", "[2, 8, 2048]"],
          ["Second FFN projection", "[2, 8, 512]"],
          ["Residual output", "[2, 8, 512]"]
        ]
      },

      contentAfterProcess: [
        "Notice that the sequence length remains 8 throughout the FFN. Only the hidden feature dimension changes temporarily."
      ]
    },

    {
      heading: "20. NumPy Implementation",
      content: [
        "The following example demonstrates the mathematical structure of a simple position-wise FFN."
      ],

      codeExamples: [
        {
          title: "Simple Transformer Feed-Forward Network",
          language: "python",
          code: "import numpy as np\n\n\ndef relu(x):\n    return np.maximum(0, x)\n\n\nclass FeedForward:\n    def __init__(self, d_model, d_ff, seed=42):\n        rng = np.random.default_rng(seed)\n        self.W1 = rng.normal(0, 0.02, (d_model, d_ff))\n        self.b1 = np.zeros(d_ff)\n        self.W2 = rng.normal(0, 0.02, (d_ff, d_model))\n        self.b2 = np.zeros(d_model)\n\n    def forward(self, x):\n        hidden = relu(x @ self.W1 + self.b1)\n        output = hidden @ self.W2 + self.b2\n        return output\n\n\nx = np.array([[1.0, 2.0, 3.0]])\nffn = FeedForward(3, 6)\ny = ffn.forward(x)\n\nprint(\"Input shape:\", x.shape)\nprint(\"Output shape:\", y.shape)\nprint(y)"
        }
      ]
    },

    {
      heading: "21. Mathematical Intuition",
      content: [
        "Think of the FFN as a learned feature-processing machine.",
        "The first linear layer creates many intermediate features.",
        "The activation decides which nonlinear combinations become strongly active.",
        "The second linear layer recombines those features into the model's original representation space.",
        "Attention determines which contextual information enters the representation; the FFN determines how that representation is transformed."
      ]
    },

    {
      heading: "22. Common Misconceptions",
      content: [
        "The FFN does not independently process the original token. It processes the contextualized hidden representation produced by the surrounding Transformer computation.",
        "The FFN does not normally change the number of sequence positions.",
        "The same FFN weights are reused for every token position within a layer.",
        "The FFN is not the same thing as the final language-model output head.",
        "Attention and FFN perform different computational roles."
      ]
    },

    {
      heading: "23. Interview Questions",
      content: [
        "What is a position-wise feed-forward network?",
        "Why does the FFN expand the hidden dimension?",
        "Why is a nonlinear activation necessary?",
        "What is the difference between attention and an FFN?",
        "Why are FFN weights shared across sequence positions?",
        "How do you calculate the parameter count of an FFN?",
        "What is d_model?",
        "What is d_ff?",
        "What are Pre-Norm and Post-Norm architectures?",
        "Why are residual connections used?",
        "Why can FFN layers contain a large fraction of Transformer parameters?",
        "What are gated FFNs?"
      ]
    },

    {
      heading: "24. Exercises",
      exercises: [
        "Explain the role of the FFN in a Transformer using your own words.",
        "Draw the complete data flow of a Transformer block.",
        "Explain why the FFN does not mix information between token positions.",
        "Calculate the number of FFN parameters for d_model = 256 and d_ff = 1024.",
        "Explain why nonlinear activation is required.",
        "Compare attention and FFN in terms of information flow.",
        "Explain Pre-Norm and Post-Norm."
      ]
    },

    {
      heading: "25. Coding Exercises",
      codingExercises: [
        "Implement a two-layer FFN using NumPy.",
        "Implement ReLU without using a library activation function.",
        "Implement GELU using its approximate formula.",
        "Write a function that calculates FFN parameter count.",
        "Create a tensor-shape tracker for a Transformer FFN.",
        "Implement a residual FFN block using NumPy.",
        "Compare the outputs of ReLU and GELU for a range of input values."
      ]
    }
  ],

  codeExamples: [
    {
      title: "FFN Parameter Counter",
      language: "python",
      code: "def ffn_parameters(d_model, d_ff, bias=True):\n    total = d_model * d_ff + d_ff * d_model\n\n    if bias:\n        total += d_ff + d_model\n\n    return total\n\n\nprint(ffn_parameters(768, 3072))"
    },
    {
      title: "Residual Transformation",
      language: "python",
      code: "def residual(x, transformation):\n    return x + transformation(x)"
    }
  ],

  mathIntuition: [
    {
      concept: "Linear expansion",
      intuition: "The first projection moves the representation into a larger feature space."
    },
    {
      concept: "Activation",
      intuition: "The nonlinear function allows the network to represent transformations that cannot be represented by a single linear transformation."
    },
    {
      concept: "Projection back",
      intuition: "The second projection compresses the transformed feature representation back to d_model."
    },
    {
      concept: "Residual connection",
      intuition: "The network learns an update to an existing representation rather than replacing the representation completely."
    }
  ],

  architectureExercises: [
    "Draw a Transformer block with labeled tensor shapes.",
    "Trace a [4, 128, 768] tensor through an FFN with d_ff = 3072.",
    "Mark where sequence positions interact and where they do not.",
    "Draw both a Pre-Norm and Post-Norm Transformer block.",
    "Identify which component is responsible for contextual mixing and which performs feature transformation."
  ],

  comparisonTables: [
    {
      title: "Major Transformer Block Components",
      headers: ["Component", "Main responsibility"],
      rows: [
        ["Attention", "Contextual token-to-token information exchange"],
        ["FFN", "Position-wise nonlinear feature transformation"],
        ["Residual", "Information and gradient pathway"],
        ["Normalization", "Activation stabilization"],
        ["Output head", "Map hidden representation to vocabulary logits"]
      ]
    }
  ],

  commonMistakes: [
    "Thinking the FFN performs attention.",
    "Forgetting that the FFN is applied independently at each position.",
    "Confusing d_model with d_ff.",
    "Assuming the sequence length changes inside the FFN.",
    "Forgetting the nonlinear activation.",
    "Confusing the Transformer block with the final language-model head.",
    "Assuming all Transformer architectures use exactly the same normalization ordering."
  ],

  summary: [
    "A Transformer uses attention for contextual information exchange and FFNs for nonlinear feature transformation.",
    "The FFN usually expands d_model into d_ff, applies a nonlinear activation, and projects back to d_model.",
    "The same FFN parameters are applied independently to every token position.",
    "Residual connections preserve information pathways and support optimization.",
    "Normalization stabilizes the hidden representations.",
    "Pre-Norm and Post-Norm refer to different placements of normalization relative to residual connections.",
    "A complete Transformer block combines attention, residual pathways, normalization, and an FFN."
  ],

  keyTakeaways: [
    "Attention mixes information across tokens.",
    "FFNs transform features within each token representation.",
    "The FFN usually expands and then contracts the hidden dimension.",
    "Nonlinear activation is essential.",
    "Residual connections create direct information pathways.",
    "Transformer blocks repeat these operations many times."
  ],

  visualReferences: [
    {
      title: "Attention Is All You Need",
      url: "https://arxiv.org/abs/1706.03762",
      type: "Research paper"
    },
    {
      title: "The Illustrated Transformer",
      url: "https://jalammar.github.io/illustrated-transformer/",
      type: "Architecture visualization"
    },
    {
      title: "Harvard Annotated Transformer",
      url: "https://nlp.seas.harvard.edu/annotated-transformer/",
      type: "Implementation reference"
    }
  ]
};

export default lesson7;

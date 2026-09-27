const lesson10 = {
  id: "lesson10",
  moduleId: "module2",
  lessonNumber: 10,

  title: "Autoregressive Language Modeling & Next-Token Prediction",

  subtitle:
    "Understand how an LLM turns a sequence of tokens into probabilities and repeatedly predicts the next token.",

  description:
    "Autoregressive language modeling is the fundamental training and generation mechanism behind decoder-style language models. This lesson follows the complete mathematical and computational path from token sequences to next-token probabilities and generated text.",

  estimatedTime: "4–5 hours",

  difficulty: "Advanced",

  learningObjectives: [
    "Understand the autoregressive language-modeling objective.",
    "Understand the chain rule of probability for token sequences.",
    "Understand next-token prediction.",
    "Understand input-target shifting.",
    "Understand teacher forcing during training.",
    "Understand logits and vocabulary probabilities.",
    "Understand cross-entropy loss for language modeling.",
    "Understand how one training sequence creates many prediction targets.",
    "Understand causal masking during training.",
    "Understand the difference between training and inference.",
    "Understand iterative token generation.",
    "Understand greedy decoding and sampling at a conceptual level.",
    "Understand perplexity.",
    "Implement a simplified next-token prediction pipeline.",
    "Trace tensor shapes through language-model training."
  ],

  sections: [
    {
      heading: "1. What Is Autoregressive Language Modeling?",

      content: [
        "Autoregressive language modeling predicts the next token using tokens that have already appeared in the sequence.",
        "The model estimates a conditional probability distribution for the next token.",
        "Generation then repeatedly feeds the selected token back into the model as part of the growing context."
      ],

      classificationTree: [
        "Autoregressive Language Modeling",
        "├── Input context",
        "├── Transformer computation",
        "├── Vocabulary logits",
        "├── Probability distribution",
        "├── Token selection",
        "└── Append selected token"
      ]
    },

    {
      heading: "2. The Central Probability Model",

      content: [
        "Suppose a token sequence contains x₁, x₂, ..., x_T.",
        "The probability of the complete sequence can be decomposed into conditional next-token probabilities.",
        "This decomposition is the mathematical foundation of autoregressive language modeling."
      ],

      formulas: [
        "P(x₁,...,x_T) = Πₜ₌₁ᵀ P(x_t | x₁,...,x_(t−1))",
        "P(x_t | x_<t) = next-token probability"
      ],

      contentAfterFormula: [
        "The model does not need to directly learn a probability for every possible complete sentence. Instead, it learns a sequence of conditional next-token distributions."
      ]
    },

    {
      heading: "3. Simple Example of Next-Token Prediction",

      content: [
        "Consider the token sequence: The, cat, is, sleeping.",
        "At the position after 'The', the model predicts a distribution for the next token.",
        "At the position after 'The cat', it predicts the next token again.",
        "At the position after 'The cat is', it predicts what should come next."
      ],

      table: {
        headers: ["Context", "Prediction target"],
        rows: [
          ["The", "cat"],
          ["The cat", "is"],
          ["The cat is", "sleeping"],
          ["The cat is sleeping", "next token / end"]
        ]
      }
    },

    {
      heading: "4. One Sequence Creates Many Training Examples",

      content: [
        "An important property of language modeling is that one token sequence can produce many next-token prediction targets.",
        "For a sequence of length T, multiple positions can contribute to the training objective.",
        "This makes large text datasets highly useful for self-supervised learning because the target tokens already exist in the text."
      ],

      process: [
        "Original sequence",
        "↓",
        "Shift inputs and targets",
        "↓",
        "Position 1 predicts token 2",
        "Position 2 predicts token 3",
        "Position 3 predicts token 4",
        "↓",
        "Compute loss at multiple positions"
      ]
    },

    {
      heading: "5. Input and Target Shifting",

      content: [
        "During training, the input sequence and target sequence are shifted by one token.",
        "The input provides the context available to the model.",
        "The target represents the next token that should be predicted."
      ],

      table: {
        headers: ["Input tokens", "Target tokens"],
        rows: [
          ["I", "love"],
          ["I love", "learning"],
          ["I love learning", "AI"],
          ["I love learning AI", "<EOS>"]
        ]
      },

      formulas: [
        "Input = [x₁, x₂, ..., x_(T−1)]",
        "Target = [x₂, x₃, ..., x_T]"
      ]
    },

    {
      heading: "6. Teacher Forcing",

      content: [
        "During training, the model normally receives the correct previous tokens rather than its own previously generated predictions.",
        "This training strategy is commonly called teacher forcing.",
        "It allows the model to learn many next-token predictions efficiently in parallel."
      ],

      comparisonTables: [
        {
          title: "Training vs Autoregressive Inference",
          headers: ["Property", "Training", "Inference"],
          rows: [
            ["Previous context", "Ground-truth tokens", "Previously generated tokens"],
            ["Parallelization", "Highly parallel", "Sequential generation"],
            ["Targets available", "Yes", "No"],
            ["Purpose", "Learn probability distribution", "Generate new sequence"]
          ]
        }
      ]
    },

    {
      heading: "7. Causal Masking During Training",

      content: [
        "Even though multiple positions are processed in parallel during training, a causal mask prevents each position from seeing future tokens.",
        "This allows the model to compute predictions for many positions simultaneously while maintaining the autoregressive information constraint."
      ],

      process: [
        "Complete training sequence",
        "↓",
        "Create shifted targets",
        "↓",
        "Run sequence through Transformer",
        "↓",
        "Apply causal attention mask",
        "↓",
        "Each position sees only permitted context",
        "↓",
        "Produce logits for all positions"
      ]
    },

    {
      heading: "8. Logits",

      content: [
        "The final hidden representation at each sequence position is transformed into a vector of vocabulary logits.",
        "If the vocabulary contains V tokens, every prediction position produces V logits.",
        "A logit is an unnormalized score rather than a probability."
      ],

      formulas: [
        "logits_t = h_t W_vocab + b",
        "logits_t ∈ R^V"
      ],

      table: {
        headers: ["Tensor", "Meaning"],
        rows: [
          ["h_t", "Hidden representation at position t"],
          ["W_vocab", "Vocabulary projection matrix"],
          ["logits_t", "Score for every vocabulary token"],
          ["V", "Vocabulary size"]
        ]
      }
    },

    {
      heading: "9. From Logits to Probabilities",

      content: [
        "Softmax converts the vocabulary logits into a probability distribution.",
        "The probabilities are positive and sum to approximately one."
      ],

      formulas: [
        "P(x_t = i | context) = exp(z_i) / Σⱼ exp(z_j)"
      ],

      process: [
        "Hidden state",
        "↓",
        "Vocabulary projection",
        "↓",
        "Logits",
        "↓",
        "Softmax",
        "↓",
        "Vocabulary probability distribution"
      ]
    },

    {
      heading: "10. Vocabulary Probability Example",

      content: [
        "Suppose the vocabulary contains five candidate tokens.",
        "The model may assign different probabilities to each candidate based on the current context."
      ],

      table: {
        headers: ["Token", "Illustrative probability"],
        rows: [
          ["the", "0.08"],
          ["model", "0.12"],
          ["learns", "0.62"],
          ["blue", "0.05"],
          ["<EOS>", "0.13"]
        ]
      },

      contentAfterFormula: [
        "The probabilities above are only illustrative. A real model may have thousands or hundreds of thousands of vocabulary entries."
      ]
    },

    {
      heading: "11. Cross-Entropy Loss",

      content: [
        "The model must be trained so that the correct next token receives high probability.",
        "Cross-entropy loss measures how well the predicted probability distribution assigns probability to the correct target token."
      ],

      formulas: [
        "L = −log P(correct token | context)",
        "For T targets: L = −(1/T) Σₜ log P(x_t | x_<t)"
      ],

      contentAfterFormula: [
        "If the model assigns high probability to the correct token, the loss is small.",
        "If the model assigns very low probability to the correct token, the loss becomes large."
      ]
    },

    {
      heading: "12. Why Logarithms Are Used",

      content: [
        "Sequence probabilities are products of many conditional probabilities.",
        "Multiplying many small probabilities can create numerical difficulties.",
        "Taking logarithms converts products into sums, making optimization and mathematical analysis easier."
      ],

      formulas: [
        "log Πₜ P_t = Σₜ log P_t",
        "Negative log-likelihood = −Σₜ log P_t"
      ]
    },

    {
      heading: "13. Maximum Likelihood Training",

      content: [
        "Language-model training can be viewed as maximizing the likelihood assigned to observed training sequences.",
        "Equivalently, minimizing negative log-likelihood maximizes the likelihood of the observed data."
      ],

      formulas: [
        "θ* = argmax_θ Σ_t log P_θ(x_t | x_<t)",
        "Equivalent objective: minimize −Σ_t log P_θ(x_t | x_<t)"
      ]
    },

    {
      heading: "14. Per-Token Loss",

      content: [
        "A training sequence produces a loss at each prediction position.",
        "These losses are usually aggregated into a mean loss across the valid target tokens."
      ],

      formulas: [
        "L_mean = (1/N) Σᵢ Lᵢ"
      ],

      table: {
        headers: ["Prediction", "Correct token", "Probability", "Loss intuition"],
        rows: [
          ["Position 1", "cat", "0.80", "Low"],
          ["Position 2", "is", "0.60", "Moderate"],
          ["Position 3", "sleeping", "0.10", "High"]
        ]
      }
    },

    {
      heading: "15. Backpropagation Through Language Modeling",

      content: [
        "The language-model loss is differentiated with respect to the model parameters.",
        "Gradients flow backward through the vocabulary projection, Transformer blocks, attention, FFNs, embeddings, and other trainable components.",
        "An optimizer then updates the parameters."
      ],

      process: [
        "Input tokens",
        "↓",
        "Forward pass",
        "↓",
        "Logits",
        "↓",
        "Softmax",
        "↓",
        "Cross-entropy loss",
        "↓",
        "Backpropagation",
        "↓",
        "Gradients",
        "↓",
        "Optimizer update"
      ]
    },

    {
      heading: "16. Training Objective in One Equation",

      formulas: [
        "L(θ) = −(1/T) Σₜ log P_θ(x_t | x_<t)"
      ],

      contentAfterFormula: [
        "This equation captures the core training objective of autoregressive language modeling."
      ]
    },

    {
      heading: "17. Training and Inference Are Different",

      content: [
        "During training, many token positions can be processed simultaneously because the complete target sequence is available.",
        "During inference, the future tokens are unknown, so generation normally proceeds one token at a time.",
        "This difference explains why training can be highly parallel while autoregressive generation is sequential."
      ],

      comparisonTables: [
        {
          title: "Language Model Training vs Generation",
          headers: ["Aspect", "Training", "Generation"],
          rows: [
            ["Known future tokens", "Available as targets", "Unknown"],
            ["Processing", "Parallel across positions", "Sequential across generated tokens"],
            ["Loss", "Calculated", "Usually not available for unknown target"],
            ["Model parameters", "Updated", "Fixed"],
            ["Goal", "Learn", "Generate"]
          ]
        }
      ]
    },

    {
      heading: "18. The Autoregressive Generation Loop",

      process: [
        "Start with prompt",
        "↓",
        "Tokenize prompt",
        "↓",
        "Run model",
        "↓",
        "Obtain next-token logits",
        "↓",
        "Convert logits to probabilities",
        "↓",
        "Select next token",
        "↓",
        "Append token to context",
        "↓",
        "Check stopping condition",
        "↓",
        "If not stopped, repeat"
      ]
    },

    {
      heading: "19. One Token at a Time",

      content: [
        "Suppose the prompt is 'The weather is'.",
        "The model produces a probability distribution for the next token.",
        "Suppose the selected token is 'beautiful'.",
        "The new context becomes 'The weather is beautiful'.",
        "The model then predicts another token.",
        "This continues until a stopping condition is reached."
      ],

      table: {
        headers: ["Step", "Current context", "Action"],
        rows: [
          ["1", "The weather is", "Predict next token"],
          ["2", "The weather is beautiful", "Predict next token"],
          ["3", "The weather is beautiful today", "Predict next token"],
          ["4", "The weather is beautiful today.", "Continue or stop"]
        ]
      }
    },

    {
      heading: "20. Greedy Decoding",

      content: [
        "Greedy decoding selects the token with the highest probability at every generation step.",
        "It is simple and deterministic when the model and computation are deterministic."
      ],

      formulas: [
        "x_t = argmax_i P(x_i | x_<t)"
      ],

      contentAfterFormula: [
        "Greedy decoding is easy to understand but does not explore lower-probability alternatives."
      ]
    },

    {
      heading: "21. Sampling",

      content: [
        "Instead of always choosing the highest-probability token, sampling selects a token according to the predicted probability distribution.",
        "Sampling introduces controlled randomness and can produce different outputs from the same prompt."
      ],

      formulas: [
        "x_t ~ P(x_t | x_<t)"
      ],

      comparisonTables: [
        {
          title: "Greedy vs Sampling",
          headers: ["Property", "Greedy", "Sampling"],
          rows: [
            ["Selection", "Highest probability", "Random draw from distribution"],
            ["Variation", "Low", "Potentially higher"],
            ["Determinism", "Usually deterministic", "Usually stochastic"],
            ["Exploration", "Low", "Higher"]
          ]
        }
      ]
    },

    {
      heading: "22. Temperature",

      content: [
        "Temperature modifies the sharpness of the probability distribution before sampling.",
        "A lower temperature makes the distribution more concentrated around high-scoring tokens.",
        "A higher temperature produces a flatter distribution."
      ],

      formulas: [
        "P_i = exp(z_i / T) / Σⱼ exp(z_j / T)"
      ],

      table: {
        headers: ["Temperature", "General effect"],
        rows: [
          ["Low", "More concentrated distribution"],
          ["Around 1", "Standard scaling"],
          ["High", "Flatter distribution"]
        ]
      }
    },

    {
      heading: "23. Token Selection Is a Separate Stage",

      content: [
        "The Transformer produces logits and probabilities. A decoding strategy determines which token is actually selected.",
        "Therefore the model's raw probability distribution and the final generated text are related but not identical concepts."
      ],

      classificationTree: [
        "Model Output",
        "├── Logits",
        "├── Probability distribution",
        "└── Decoding",
        "    ├── Greedy",
        "    ├── Sampling",
        "    ├── Top-k",
        "    └── Top-p"
      ]
    },

    {
      heading: "24. Context Window",

      content: [
        "Autoregressive models operate over a finite context window.",
        "The context window limits how many tokens can be processed as context in a particular model configuration.",
        "Longer contexts increase computational and memory requirements, especially for standard self-attention."
      ],

      formulas: [
        "Context = previously available tokens within the model's allowed window"
      ]
    },

    {
      heading: "25. End-of-Sequence and Stopping Conditions",

      content: [
        "Generation needs a mechanism for deciding when to stop.",
        "A model may generate a special end-of-sequence token, or an application may impose a maximum token limit.",
        "Applications can also use additional stopping conditions depending on the output format."
      ],

      classificationTree: [
        "Generation Stopping",
        "├── EOS token",
        "├── Maximum token limit",
        "├── Application stop sequence",
        "└── Structured-output completion condition"
      ]
    },

    {
      heading: "26. Why Generation Is Computationally Different",

      content: [
        "The model must perform computation for each newly generated token.",
        "Previously generated tokens remain part of the context.",
        "Practical LLM systems therefore use optimization techniques such as key-value caching to avoid unnecessarily recomputing certain attention states."
      ],

      contentAfterProcess: [
        "Key-value caching becomes especially important for long prompts and long generated sequences."
      ]
    },

    {
      heading: "27. Key-Value Cache Concept",

      content: [
        "During autoregressive generation, previously computed keys and values can be stored and reused.",
        "When a new token arrives, the model only needs to compute the new token's query, key, and value representations for the current step while reusing cached information.",
        "This reduces redundant computation during sequential decoding."
      ],

      process: [
        "Generate token 1",
        "↓",
        "Store K/V",
        "↓",
        "Generate token 2",
        "↓",
        "Reuse previous K/V + compute new K/V",
        "↓",
        "Generate token 3",
        "↓",
        "Continue caching"
      ]
    },

    {
      heading: "28. Complete Language Generation Architecture",

      process: [
        "User prompt",
        "↓",
        "Tokenizer",
        "↓",
        "Token IDs",
        "↓",
        "Token + positional representations",
        "↓",
        "Causal Transformer stack",
        "↓",
        "Final hidden state",
        "↓",
        "Vocabulary projection",
        "↓",
        "Logits",
        "↓",
        "Decoding strategy",
        "↓",
        "Selected token",
        "↓",
        "Append token",
        "↓",
        "Repeat"
      ]
    },

    {
      heading: "29. Worked Mathematical Example",

      content: [
        "Suppose the model produces three logits for three possible tokens.",
        "Let the logits be [2.0, 1.0, 0.0].",
        "Softmax converts these scores into probabilities."
      ],

      formulas: [
        "P_i = exp(z_i) / Σⱼ exp(z_j)",
        "z = [2, 1, 0]",
        "P ≈ [0.665, 0.245, 0.090]"
      ],

      contentAfterFormula: [
        "The first token therefore has the highest predicted probability in this illustrative example."
      ]
    },

    {
      heading: "30. Perplexity",

      content: [
        "Perplexity is a commonly used language-model evaluation quantity derived from average negative log-likelihood.",
        "It can be interpreted loosely as the effective uncertainty assigned by the model to the observed sequence.",
        "Lower perplexity on the same evaluation setup indicates that the model assigned higher probability to the observed tokens."
      ],

      formulas: [
        "PPL = exp(L)",
        "where L is average negative log-likelihood"
      ],

      contentAfterFormula: [
        "Perplexity should only be compared carefully when tokenization, dataset, evaluation setup, and normalization are compatible."
      ]
    },

    {
      heading: "31. Self-Supervised Learning",

      content: [
        "Autoregressive language modeling is self-supervised because the training targets can be obtained directly from the input text.",
        "No manually created label is required for every next-token prediction.",
        "The sequence itself supplies the supervision signal."
      ],

      classificationTree: [
        "Text Dataset",
        "↓",
        "Tokenization",
        "↓",
        "Input sequence",
        "↓",
        "Shift by one token",
        "├── Input",
        "└── Target",
        "↓",
        "Next-token prediction"
      ]
    },

    {
      heading: "32. Batch Training",

      content: [
        "Training processes multiple sequences together in a batch.",
        "Sequences are generally represented as tensors containing token IDs.",
        "Padding and attention masks may be required when sequences have different lengths."
      ],

      table: {
        headers: ["Tensor", "Example shape"],
        rows: [
          ["Input IDs", "[B, T]"],
          ["Target IDs", "[B, T]"],
          ["Hidden states", "[B, T, d_model]"],
          ["Logits", "[B, T, V]"]
        ]
      }
    },

    {
      heading: "33. The Most Important Shape in Language Modeling",

      content: [
        "The logits tensor has one vocabulary score vector for every position in every sequence in the batch.",
        "Therefore its shape is typically [batch_size, sequence_length, vocabulary_size]."
      ],

      formulas: [
        "Logits ∈ R^(B × T × V)"
      ],

      contentAfterFormula: [
        "During loss computation, the logits and target IDs are aligned position by position."
      ]
    },

    {
      heading: "34. Complete Training Loop",

      process: [
        "Load text",
        "↓",
        "Tokenize",
        "↓",
        "Create input/target pairs",
        "↓",
        "Batch",
        "↓",
        "Forward pass",
        "↓",
        "Logits",
        "↓",
        "Cross-entropy loss",
        "↓",
        "Backpropagation",
        "↓",
        "Optimizer update",
        "↓",
        "Repeat"
      ]
    },

    {
      heading: "35. Complete Inference Loop",

      process: [
        "Receive prompt",
        "↓",
        "Tokenize",
        "↓",
        "Run model",
        "↓",
        "Take final-position logits",
        "↓",
        "Apply decoding strategy",
        "↓",
        "Select token",
        "↓",
        "Append token",
        "↓",
        "Check stopping condition",
        "↓",
        "Repeat"
      ]
    },

    {
      heading: "36. Training vs Inference: The Core Difference",

      comparisonTables: [
        {
          title: "Training and Inference",
          headers: ["Property", "Training", "Inference"],
          rows: [
            ["Known target", "Yes", "No"],
            ["Loss", "Yes", "Usually no"],
            ["Gradient calculation", "Yes", "No"],
            ["Parameter updates", "Yes", "No"],
            ["Token generation", "Not sequentially required", "Sequential"],
            ["Goal", "Learn parameters", "Use learned parameters"]
          ]
        }
      ]
    },

    {
      heading: "37. Autoregressive Language Modeling Mental Model",

      content: [
        "A simple mental model is: read the available context, calculate a probability distribution for the next token, choose a token, append it, and repeat.",
        "The Transformer itself computes the distribution. The decoding algorithm determines how a token is selected from that distribution.",
        "Training teaches the model how to assign probability to observed next tokens."
      ],

      classificationTree: [
        "Language Model",
        "├── Context",
        "├── Transformer",
        "├── Probability distribution",
        "├── Decoding",
        "└── Generated token"
      ]
    },

    {
      heading: "38. Common Misconceptions",

      content: [
        "The model does not directly predict a complete paragraph in one ordinary autoregressive step.",
        "A single forward pass can produce logits for many training positions, but generation normally selects new tokens sequentially.",
        "A logit is not a probability.",
        "Softmax is not the same as decoding.",
        "Greedy decoding is not the only generation method.",
        "Teacher forcing during training means the model usually receives ground-truth previous tokens rather than its own generated tokens.",
        "Perplexity is not a universal measure of every useful property of a language model.",
        "Lower loss does not automatically mean that every generated response is better for every application."
      ]
    },

    {
      heading: "39. Interview Questions",

      content: [
        "What is autoregressive language modeling?",
        "What is the chain rule of probability?",
        "Why is next-token prediction useful for language modeling?",
        "What are input-target shifts?",
        "What is teacher forcing?",
        "Why is causal masking required?",
        "What are logits?",
        "How are logits converted into probabilities?",
        "What is cross-entropy loss?",
        "Why is negative log-likelihood used?",
        "What is perplexity?",
        "Why is training more parallel than autoregressive inference?",
        "What is greedy decoding?",
        "What is sampling?",
        "What is temperature?",
        "Why is key-value caching useful?"
      ]
    }
  ],

  codeExamples: [
    {
      title: "Next-Token Input and Target Shift",
      language: "python",
      code: `tokens = ["I", "love", "machine", "learning"]

inputs = tokens[:-1]
targets = tokens[1:]

print("Inputs :", inputs)
print("Targets:", targets)`
    },

    {
      title: "Stable Softmax",
      language: "python",
      code: `import numpy as np

def softmax(logits):
    logits = logits - np.max(logits)
    exp_values = np.exp(logits)

    return exp_values / np.sum(exp_values)

logits = np.array([2.0, 1.0, 0.0])

probabilities = softmax(logits)

print(probabilities)
print(probabilities.sum())`
    },

    {
      title: "Cross-Entropy for One Target",
      language: "python",
      code: `import numpy as np

probability_of_correct_token = 0.8

loss = -np.log(probability_of_correct_token)

print("Loss:", loss)`
    },

    {
      title: "Greedy Next-Token Selection",
      language: "python",
      code: `import numpy as np

probabilities = np.array([
    0.10,
    0.15,
    0.60,
    0.15
])

next_token_id = np.argmax(probabilities)

print("Selected token:", next_token_id)`
    },

    {
      title: "Simple Autoregressive Loop",
      language: "python",
      code: `generated_tokens = ["The"]

predictions = [
    "cat",
    "is",
    "sleeping"
]

for token in predictions:
    generated_tokens.append(token)

    print(" ".join(generated_tokens))`
    }
  ],

  mathIntuition: [
    {
      concept: "Chain rule",
      intuition:
        "A complete sequence probability can be decomposed into a product of conditional next-token probabilities.",
      equation:
        "P(x₁,...,x_T) = Πₜ P(x_t | x_<t)"
    },
    {
      concept: "Cross-entropy",
      intuition:
        "The model is penalized when it assigns low probability to the observed next token.",
      equation:
        "L = −log P(correct token)"
    },
    {
      concept: "Softmax",
      intuition:
        "Softmax transforms arbitrary scores into a normalized probability distribution.",
      equation:
        "P_i = exp(z_i) / Σⱼ exp(z_j)"
    },
    {
      concept: "Perplexity",
      intuition:
        "Perplexity is the exponential of average negative log-likelihood.",
      equation:
        "PPL = exp(L)"
    },
    {
      concept: "Autoregressive generation",
      intuition:
        "Every generated token becomes part of the context used to predict the next token.",
      equation:
        "x_t ~ P(x_t | x_<t)"
    }
  ],

  exercises: [
    {
      question:
        "For the sequence [A, B, C, D], what target should correspond to input [A, B, C]?",
      answer:
        "The target is [B, C, D]."
    },
    {
      question:
        "If the model assigns probability 0.9 to the correct token, is the negative log-likelihood relatively high or low?",
      answer:
        "Low, because −log(0.9) is small."
    },
    {
      question:
        "What happens to the loss when the probability assigned to the correct token approaches zero?",
      answer:
        "The negative log-likelihood becomes very large."
    },
    {
      question:
        "Why can training process many positions in parallel?",
      answer:
        "Because the target sequence is known and causal masking prevents each position from seeing future information."
    },
    {
      question:
        "Why is generation sequential?",
      answer:
        "Because the next token becomes part of the context required to predict subsequent tokens."
    },
    {
      question:
        "What does greedy decoding select?",
      answer:
        "The token with the highest predicted probability at each generation step."
    }
  ],

  codingExercises: [
    {
      title: "Calculate Cross-Entropy",
      difficulty: "Easy",
      task:
        "Write a Python function that calculates −log(p) for a supplied correct-token probability."
    },
    {
      title: "Implement Softmax",
      difficulty: "Easy",
      task:
        "Implement numerically stable softmax and verify that the output probabilities sum to one."
    },
    {
      title: "Implement Greedy Decoding",
      difficulty: "Easy",
      task:
        "Given a probability vector, select the token ID with the maximum probability."
    },
    {
      title: "Implement Temperature Scaling",
      difficulty: "Medium",
      task:
        "Modify logits using temperature and compare the resulting probability distributions."
    },
    {
      title: "Build a Tiny Autoregressive Generator",
      difficulty: "Advanced",
      task:
        "Create a small program that repeatedly selects a token from a predefined probability table and appends it to the generated sequence."
    }
  ],

  architectureExercises: [
    {
      title: "Draw the Training Pipeline",
      task:
        "Draw the complete path from tokens to logits, cross-entropy loss, backpropagation, and optimizer update."
    },
    {
      title: "Draw the Inference Pipeline",
      task:
        "Draw the complete path from a user prompt to repeatedly generated tokens."
    },
    {
      title: "Compare Training and Inference",
      task:
        "Create a diagram showing why training can process many positions in parallel while autoregressive generation proceeds sequentially."
    },
    {
      title: "Trace Tensor Shapes",
      task:
        "For B = 8, T = 128, d_model = 768, and V = 50,000, calculate the shapes of input IDs, hidden states, and logits."
    }
  ],

  comparisonTables: [
    {
      title: "Core Language Modeling Concepts",
      headers: ["Concept", "Meaning"],
      rows: [
        ["Logit", "Unnormalized vocabulary score"],
        ["Probability", "Normalized likelihood assigned to a token"],
        ["Loss", "Measure of prediction error"],
        ["Cross-entropy", "Standard next-token prediction loss"],
        ["Perplexity", "Exponential of average negative log-likelihood"],
        ["Decoding", "Method used to select generated tokens"]
      ]
    },
    {
      title: "Generation Strategies",
      headers: ["Method", "Basic idea"],
      rows: [
        ["Greedy", "Choose highest-probability token"],
        ["Sampling", "Sample from probability distribution"],
        ["Temperature", "Modify distribution sharpness before sampling"],
        ["Top-k", "Restrict sampling to highest-scoring k tokens"],
        ["Top-p", "Restrict sampling to a cumulative probability set"]
      ]
    }
  ],

  commonMistakes: [
    "Confusing logits with probabilities.",
    "Forgetting the one-token shift between inputs and targets.",
    "Forgetting causal masking.",
    "Thinking training and generation use exactly the same execution pattern.",
    "Assuming greedy decoding and sampling are identical.",
    "Forgetting that generated tokens become future context.",
    "Calculating sequence probability incorrectly without applying the chain rule.",
    "Ignoring numerical stability when implementing softmax.",
    "Interpreting perplexity without considering the evaluation dataset and tokenizer.",
    "Assuming the decoding strategy changes the model parameters."
  ],

  summary: [
    "Autoregressive language modeling predicts each next token from previous context.",
    "The chain rule decomposes sequence probability into conditional next-token probabilities.",
    "Training uses shifted input and target sequences.",
    "Teacher forcing supplies ground-truth previous tokens during training.",
    "Causal masking prevents future-token leakage.",
    "The Transformer produces vocabulary logits at each prediction position.",
    "Softmax converts logits into probabilities.",
    "Cross-entropy measures the probability assigned to the correct next token.",
    "Training can process many positions in parallel.",
    "Inference generates tokens sequentially.",
    "Greedy decoding selects the highest-probability token.",
    "Sampling draws tokens from the predicted distribution.",
    "Temperature changes the sharpness of the probability distribution.",
    "Perplexity is derived from average negative log-likelihood.",
    "Key-value caching improves autoregressive inference efficiency."
  ],

  keyTakeaways: [
    "Autoregressive modeling = predict the next token from previous context.",
    "Chain rule = sequence probability becomes a product of conditional probabilities.",
    "Training = shifted targets + causal masking + cross-entropy.",
    "Logits are scores; softmax produces probabilities.",
    "Inference = predict → select → append → repeat.",
    "Greedy decoding chooses the maximum-probability token.",
    "Sampling introduces controlled randomness.",
    "Temperature changes distribution sharpness.",
    "KV caching reduces redundant computation during generation."
  ],

  visualReferences: [
    {
      title: "Attention Is All You Need",
      url: "https://arxiv.org/abs/1706.03762",
      description:
        "Original Transformer architecture and autoregressive decoder formulation."
    },
    {
      title: "The Illustrated Transformer",
      url: "https://jalammar.github.io/illustrated-transformer/",
      description:
        "Visual explanation of Transformer computation."
    },
    {
      title: "Hugging Face LLM Course",
      url: "https://huggingface.co/learn/llm-course/",
      description:
        "Practical educational material on language models and tokenization."
    },
    {
      title: "PyTorch Transformer Documentation",
      url: "https://pytorch.org/docs/stable/generated/torch.nn.Transformer.html",
      description:
        "Reference documentation for Transformer implementation concepts."
    }
  ]
};

export default lesson10;

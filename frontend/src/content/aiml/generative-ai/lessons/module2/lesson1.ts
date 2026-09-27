const lesson1 = {
  id: "lesson1",
  moduleId: "module2",
  lessonNumber: 1,

  title: "What Are Large Language Models?",

  subtitle:
    "Understand what an LLM is, how it represents language, why scale matters, and how a language model transforms context into generated text.",

  description:
    "This lesson introduces Large Language Models from first principles. It explains language modeling, probability over token sequences, next-token prediction, autoregressive generation, parameters, training data, context windows, inference, scaling, capabilities, limitations, and the complete conceptual architecture of an LLM-powered application.",

  estimatedTime: "150–180 min",
  difficulty: "Intermediate",

  learningObjectives: [
    "Define a Large Language Model.",
    "Understand what a language model learns.",
    "Understand next-token prediction.",
    "Understand probability over token sequences.",
    "Understand autoregressive generation.",
    "Understand tokens and vocabulary at a high level.",
    "Understand model parameters.",
    "Understand context windows.",
    "Understand training versus inference.",
    "Understand why model scale matters.",
    "Understand emergent and learned capabilities without treating them as magic.",
    "Understand the difference between an LLM and an LLM application.",
    "Understand the high-level architecture of modern LLM systems.",
    "Understand major limitations of LLMs."
  ],

  sections: [

    {
      heading: "1. What Is a Language Model?",

      content: [
        "A language model is a statistical or learned model that assigns probabilities to sequences of language units such as tokens.",
        "At a practical level, a language model estimates what token is likely to occur given the tokens that came before it.",
        "Modern neural language models learn this behavior from very large collections of text and other training data."
      ],

      formula:
        "P(x₁, x₂, ..., xₙ) = ∏ᵢ P(xᵢ | x₁, x₂, ..., xᵢ₋₁)",

      contentAfterFormula: [
        "The chain rule allows the probability of an entire sequence to be expressed as a product of conditional next-token probabilities.",
        "This is one of the mathematical foundations of autoregressive language modeling."
      ]
    },

    {
      heading: "2. What Makes a Language Model Large?",

      content: [
        "The word 'large' generally refers to the scale of the model, its training data, its computation, or combinations of these factors.",
        "A modern LLM can contain millions, billions, or even larger numbers of learned parameters depending on the model.",
        "Large scale can provide greater capacity to represent complex patterns, but increasing scale does not automatically guarantee useful behavior."
      ],

      table: [
        {
          factor: "Parameters",
          meaning: "Learned numerical values inside the neural network"
        },
        {
          factor: "Training data",
          meaning: "Information used to optimize model parameters"
        },
        {
          factor: "Compute",
          meaning: "Hardware and computation used during training and inference"
        },
        {
          factor: "Context",
          meaning: "Information available to the model for a particular prediction"
        }
      ]
    },

    {
      heading: "3. LLM Classification Tree",

      classificationTree: [
        "Language Models",
        "├── Statistical Language Models",
        "│   ├── N-gram models",
        "│   └── Probabilistic models",
        "│",
        "└── Neural Language Models",
        "    ├── RNN-based",
        "    ├── LSTM / GRU-based",
        "    └── Transformer-based",
        "        ├── Encoder-only",
        "        ├── Decoder-only",
        "        └── Encoder-decoder"
      ]
    },

    {
      heading: "4. From Language Modeling to LLMs",

      process: [
        "Text corpus",
        "↓",
        "Tokenization",
        "↓",
        "Token sequences",
        "↓",
        "Neural network",
        "↓",
        "Next-token prediction",
        "↓",
        "Loss calculation",
        "↓",
        "Gradient computation",
        "↓",
        "Parameter updates",
        "↓",
        "Repeated training",
        "↓",
        "Trained language model"
      ]
    },

    {
      heading: "5. The Central LLM Task",

      content: [
        "A decoder-style language model can be understood conceptually as repeatedly answering one question:",
        "Given everything available so far, what token should come next?"
      ],

      example: {
        input: "The sun rises in the",
        candidates: [
          {
            token: "east",
            conceptualProbability: "high"
          },
          {
            token: "morning",
            conceptualProbability: "moderate"
          },
          {
            token: "sky",
            conceptualProbability: "lower"
          }
        ],
        selectedConcept:
          "The model converts its internal scores into a probability distribution and a decoding strategy selects the next token."
      }
    },

    {
      heading: "6. Next-Token Prediction",

      content: [
        "During autoregressive generation, the model receives a sequence of tokens and predicts a probability distribution over possible next tokens.",
        "After a token is selected, that token becomes part of the context for the following prediction."
      ],

      process: [
        "Input: The cat",
        "↓",
        "Predict next token",
        "↓",
        "sat",
        "↓",
        "Context becomes: The cat sat",
        "↓",
        "Predict next token",
        "↓",
        "on",
        "↓",
        "Context becomes: The cat sat on",
        "↓",
        "Continue"
      ]
    },

    {
      heading: "7. Autoregressive Generation",

      formula:
        "P(x₁, ..., xₙ) = P(x₁) × P(x₂|x₁) × ... × P(xₙ|x₁,...,xₙ₋₁)",

      contentAfterFormula: [
        "Each new token depends on the sequence generated so far.",
        "This repeated process is called autoregressive generation."
      ],

      codeBlock:
        "context = prompt\n\nwhile not finished:\n    probabilities = model(context)\n    next_token = decode(probabilities)\n    context = context + next_token"
    },

    {
      heading: "8. Why Does Next-Token Prediction Produce Useful Language?",

      content: [
        "The training objective looks simple, but solving next-token prediction across sufficiently diverse data requires the model to learn many patterns.",
        "These patterns can include syntax, word relationships, common facts, styles, discourse structures, code patterns, and relationships between concepts.",
        "The model does not receive a separate hard-coded rule for every language pattern. Instead, these patterns are represented through learned parameters."
      ]
    },

    {
      heading: "9. What Are Parameters?",

      content: [
        "Parameters are learned numerical values inside a neural network.",
        "During training, optimization changes these values so that the model becomes better at its training objective.",
        "Parameters are not the same thing as stored documents or explicit database records."
      ],

      table: [
        {
          concept: "Parameter",
          meaning: "Learned numerical value"
        },
        {
          concept: "Hyperparameter",
          meaning: "Training or architecture setting selected by engineers"
        },
        {
          concept: "Training example",
          meaning: "Data used to calculate learning signals"
        },
        {
          concept: "Context",
          meaning: "Input information available during a model operation"
        }
      ]
    },

    {
      heading: "10. Parameters as Distributed Knowledge",

      content: [
        "Information learned during training is represented in distributed patterns across model parameters.",
        "This is different from a traditional database where a record can be retrieved directly using a key.",
        "Consequently, asking a model to recall information is not equivalent to performing an exact database lookup."
      ]
    },

    {
      heading: "11. LLMs Do Not Work Like Traditional Databases",

      table: [
        {
          aspect: "Database",
          behavior: "Stores explicit records"
        },
        {
          aspect: "LLM",
          behavior: "Uses learned parameters to produce probabilistic predictions"
        },
        {
          aspect: "Database lookup",
          behavior: "Can return an exact stored value"
        },
        {
          aspect: "LLM generation",
          behavior: "Generates a response based on learned patterns and current context"
        }
      ]
    },

    {
      heading: "12. Tokens",

      content: [
        "LLMs generally process tokens rather than raw characters or complete human words.",
        "A token may correspond to a whole word, part of a word, punctuation, whitespace-related unit, or another piece of text depending on the tokenizer.",
        "Tokenization allows language to be converted into discrete identifiers that a neural network can process."
      ],

      classificationTree: [
        "Text",
        "├── Characters",
        "├── Words",
        "└── Tokens",
        "    ├── Whole words",
        "    ├── Subwords",
        "    ├── Punctuation",
        "    └── Other token units"
      ]
    },

    {
      heading: "13. Tokenization Example",

      content: [
        "Consider a sentence such as:",
        "\"Machine learning is useful.\"",
        "A tokenizer might represent this as a sequence of token units. The exact tokens depend on the tokenizer and vocabulary."
      ],

      example: {
        text: "Machine learning is useful.",
        conceptualTokens: [
          "Machine",
          "learning",
          "is",
          "useful",
          "."
        ],
        note:
          "This is only a conceptual illustration. Real tokenizers may split words differently."
      }
    },

    {
      heading: "14. Vocabulary",

      content: [
        "A vocabulary is the set of token units known to a tokenizer/model interface.",
        "Each token normally corresponds to an integer token ID.",
        "The model operates on these numerical identifiers after tokenization."
      ],

      process: [
        "Human text",
        "↓",
        "Tokenizer",
        "↓",
        "Token IDs",
        "↓",
        "Embedding lookup",
        "↓",
        "Neural network"
      ]
    },

    {
      heading: "15. Token IDs Are Not Meaning",

      content: [
        "A token ID is simply an identifier used to index a vocabulary.",
        "The integer itself does not inherently contain semantic meaning.",
        "Meaningful numerical representations emerge later through learned embeddings and internal transformations."
      ]
    },

    {
      heading: "16. Context Window",

      content: [
        "The context window is the amount of tokenized information that a model can consider within a single model operation, subject to the specific model and serving system.",
        "Context can include instructions, user messages, previous conversation, retrieved documents, tool information, and generated tokens depending on the application."
      ],

      classificationTree: [
        "Model Context",
        "├── System instructions",
        "├── Developer instructions",
        "├── User input",
        "├── Conversation history",
        "├── Retrieved information",
        "├── Tool information",
        "└── Generated sequence"
      ]
    },

    {
      heading: "17. Context Is Not the Same as Long-Term Memory",

      content: [
        "Context is information supplied to a particular model operation.",
        "Long-term application memory is normally stored outside the model in databases or other systems.",
        "An application can retrieve stored information and place selected parts into the current context."
      ]
    },

    {
      heading: "18. High-Level LLM Architecture",

      codeBlock:
        "                 INPUT TEXT\n                      │\n                      ▼\n                ┌───────────┐\n                │ Tokenizer │\n                └─────┬─────┘\n                      │\n                      ▼\n                 Token IDs\n                      │\n                      ▼\n               ┌────────────┐\n               │ Embeddings │\n               └──────┬─────┘\n                      │\n                      ▼\n            ┌────────────────────┐\n            │ Transformer Layers │\n            │                    │\n            │ Attention          │\n            │ Feed Forward       │\n            │ Normalization      │\n            │ Residual Paths     │\n            └─────────┬──────────┘\n                      │\n                      ▼\n                    Logits\n                      │\n                      ▼\n                   Softmax\n                      │\n                      ▼\n               Token Selection\n                      │\n                      ▼\n                Next Token"
    },

    {
      heading: "19. What Happens Inside an LLM?",

      content: [
        "The internal architecture of modern transformer-based LLMs contains repeated neural-network blocks.",
        "At a high level, these blocks transform token representations through attention mechanisms and feed-forward transformations.",
        "The exact architecture varies between models."
      ],

      classificationTree: [
        "Transformer-based LLM",
        "├── Input representation",
        "├── Positional information",
        "├── Repeated transformer blocks",
        "│   ├── Attention",
        "│   ├── Residual connection",
        "│   ├── Normalization",
        "│   ├── Feed-forward network",
        "│   └── Residual connection",
        "└── Output projection"
      ]
    },

    {
      heading: "20. Training vs Inference",

      table: [
        {
          aspect: "Training",
          purpose: "Learn parameters"
        },
        {
          aspect: "Inference",
          purpose: "Use learned parameters to produce predictions"
        },
        {
          aspect: "Training input",
          purpose: "Large training dataset"
        },
        {
          aspect: "Inference input",
          purpose: "User/application context"
        },
        {
          aspect: "Parameter updates",
          purpose: "Training: yes"
        },
        {
          aspect: "Parameter updates",
          purpose: "Inference: normally no"
        }
      ]
    },

    {
      heading: "21. Complete Training-to-Inference Lifecycle",

      process: [
        "Collect training data",
        "↓",
        "Tokenize",
        "↓",
        "Create training sequences",
        "↓",
        "Forward pass",
        "↓",
        "Calculate loss",
        "↓",
        "Backpropagation",
        "↓",
        "Optimizer update",
        "↓",
        "Repeat many times",
        "↓",
        "Trained model",
        "↓",
        "Deploy for inference",
        "↓",
        "User prompt",
        "↓",
        "Generated output"
      ]
    },

    {
      heading: "22. Pretraining",

      content: [
        "Pretraining is the large-scale training stage in which a model learns broad patterns from a large training corpus.",
        "For many decoder-style language models, a central objective is predicting the next token.",
        "Pretraining creates the general model that later stages can adapt to particular tasks or interaction styles."
      ]
    },

    {
      heading: "23. Post-Training",

      content: [
        "After broad pretraining, additional training or optimization can adapt a model toward desired behaviors.",
        "Depending on the model development process, this can include supervised fine-tuning, preference optimization, safety training, or other forms of adaptation."
      ],

      classificationTree: [
        "Model Development",
        "├── Pretraining",
        "│   └── Broad language / multimodal patterns",
        "├── Post-training",
        "│   ├── Supervised fine-tuning",
        "│   ├── Preference optimization",
        "│   └── Safety / behavior adaptation",
        "└── Deployment"
      ]
    },

    {
      heading: "24. Why LLMs Can Perform Many Tasks",

      content: [
        "A sufficiently capable language model can represent many different patterns in a common parameter space.",
        "Because many tasks can be expressed through language or sequences, the same model can sometimes perform tasks such as summarization, question answering, translation, classification, explanation, and code generation."
      ]
    },

    {
      heading: "25. One Model, Many Tasks",

      classificationTree: [
        "Language Model",
        "├── Question answering",
        "├── Summarization",
        "├── Translation",
        "├── Classification",
        "├── Information extraction",
        "├── Code generation",
        "├── Explanation",
        "├── Brainstorming",
        "└── Conversational interaction"
      ]
    },

    {
      heading: "26. In-Context Learning",

      content: [
        "An LLM can sometimes infer the desired pattern from examples supplied inside its current context.",
        "This behavior is commonly called in-context learning.",
        "The model does not necessarily update its parameters during such an interaction."
      ],

      example: {
        instruction:
          "Convert each sentence into a question.",
        examples: [
          "Input: The sky is blue. → Output: Is the sky blue?",
          "Input: The car is fast. → Output: Is the car fast?"
        ],
        newInput:
          "Input: The system is ready.",
        expectedBehavior:
          "The model can infer the requested transformation from the examples."
      }
    },

    {
      heading: "27. Zero-Shot, One-Shot and Few-Shot",

      table: [
        {
          method: "Zero-shot",
          meaning: "Task instruction without demonstration examples"
        },
        {
          method: "One-shot",
          meaning: "One demonstration example"
        },
        {
          method: "Few-shot",
          meaning: "Several demonstration examples"
        }
      ]
    },

    {
      heading: "28. Prompting Is Not Parameter Training",

      content: [
        "Changing a prompt changes the input to the model.",
        "It does not normally update the model's learned parameters.",
        "Fine-tuning and other parameter adaptation methods are different processes."
      ]
    },

    {
      heading: "29. Why Scale Matters",

      content: [
        "Larger models can have greater representational capacity.",
        "Larger training datasets can expose the model to more diverse patterns.",
        "More compute can allow more optimization during training.",
        "However, scale introduces higher training and inference costs and does not eliminate fundamental limitations."
      ],

      table: [
        {
          scalingDimension: "Model scale",
          possibleBenefit: "Greater parameter capacity"
        },
        {
          scalingDimension: "Data scale",
          possibleBenefit: "Broader learned patterns"
        },
        {
          scalingDimension: "Compute scale",
          possibleBenefit: "More optimization and training throughput"
        },
        {
          scalingDimension: "Context scale",
          possibleBenefit: "More information available per operation"
        }
      ]
    },

    {
      heading: "30. Scaling Is Not Magic",

      content: [
        "Increasing model size alone does not solve every problem.",
        "Data quality, training objective, optimization, architecture, inference strategy, evaluation, and application design all influence system quality."
      ]
    },

    {
      heading: "31. Capabilities and Limitations",

      table: [
        {
          capability: "Language generation",
          limitation:
            "Generated language can still contain factual or logical errors."
        },
        {
          capability: "Pattern recognition",
          limitation:
            "Patterns learned from data can contain biases or gaps."
        },
        {
          capability: "Code generation",
          limitation:
            "Generated code can contain bugs or security issues."
        },
        {
          capability: "Question answering",
          limitation:
            "The model may produce unsupported answers."
        },
        {
          capability: "Summarization",
          limitation:
            "Important information can be omitted or distorted."
        }
      ]
    },

    {
      heading: "32. Hallucination",

      content: [
        "Hallucination refers to generated content that is unsupported, incorrect, or inconsistent with the available evidence.",
        "A fluent response is not proof that the response is factually correct.",
        "Applications can reduce some risks through retrieval, constrained generation, validation, evaluation, and appropriate system design."
      ]
    },

    {
      heading: "33. LLM Knowledge vs External Knowledge",

      table: [
        {
          source: "Model parameters",
          role: "Patterns learned during training"
        },
        {
          source: "Prompt",
          role: "Information supplied during the current interaction"
        },
        {
          source: "RAG",
          role: "Retrieved external information"
        },
        {
          source: "Tool",
          role: "Fresh information or external computation"
        },
        {
          source: "Database",
          role: "Application-controlled persistent data"
        }
      ]
    },

    {
      heading: "34. LLM Application Architecture",

      codeBlock:
        "USER\n  │\n  ▼\nFRONTEND\n  │\n  ▼\nBACKEND\n  │\n  ├───────────────┐\n  ▼               ▼\nPROMPT          RETRIEVAL\n  │               │\n  │          VECTOR DATABASE\n  │               │\n  └───────┬───────┘\n          ▼\n        LLM\n          │\n          ▼\n       VALIDATION\n          │\n          ▼\n       RESPONSE"
    },

    {
      heading: "35. LLM vs LLM Application",

      table: [
        {
          component: "LLM",
          responsibility:
            "Generate or predict language"
        },
        {
          component: "Application",
          responsibility:
            "Provide UI, business logic, context, tools, security, validation, and persistence"
        }
      ]
    },

    {
      heading: "36. The LLM Is Usually One Component",

      content: [
        "One of the most important engineering ideas in modern AI development is that the language model is only one part of a larger system.",
        "A production application usually needs deterministic software around the model."
      ],

      classificationTree: [
        "Production LLM Application",
        "├── User Interface",
        "├── Backend",
        "├── Authentication",
        "├── Authorization",
        "├── Prompt system",
        "├── LLM",
        "├── Retrieval",
        "├── Tools",
        "├── Validation",
        "├── Database",
        "├── Evaluation",
        "└── Monitoring"
      ]
    },

    {
      heading: "37. Why Context Engineering Matters",

      content: [
        "The quality of an LLM response depends not only on the model but also on what information is placed into its context.",
        "Context engineering includes selecting relevant instructions, examples, retrieved information, conversation history, tool descriptions, and output requirements."
      ]
    },

    {
      heading: "38. Context Construction",

      process: [
        "User request",
        "↓",
        "Understand task",
        "↓",
        "Collect relevant context",
        "↓",
        "Retrieve information if needed",
        "↓",
        "Add instructions",
        "↓",
        "Add examples if useful",
        "↓",
        "Add output constraints",
        "↓",
        "Send final context to LLM"
      ]
    },

    {
      heading: "39. Deterministic Software Around Probabilistic Models",

      content: [
        "LLMs produce probabilistic outputs, but many application requirements need deterministic control.",
        "Authentication, authorization, database transactions, permissions, input validation, and strict business rules should normally be enforced by application code rather than by trusting model behavior."
      ]
    },

    {
      heading: "40. LLM Failure Categories",

      classificationTree: [
        "LLM Failures",
        "├── Factual",
        "│   └── Incorrect information",
        "├── Reasoning",
        "│   └── Incorrect conclusion",
        "├── Instruction",
        "│   └── Failed to follow requirement",
        "├── Format",
        "│   └── Invalid output structure",
        "├── Context",
        "│   └── Misused supplied information",
        "├── Safety",
        "│   └── Unsafe or inappropriate behavior",
        "└── Application",
        "    └── Integration / tool / retrieval failure"
      ]
    },

    {
      heading: "41. Practical Mental Model",

      content: [
        "Think of an LLM as a very large learned transformation that takes tokenized context and produces probability scores for possible next tokens.",
        "The surrounding application determines what context is supplied, how the output is decoded, whether tools are called, whether the result is valid, and whether the final response should be shown to the user."
      ]
    },

    {
      heading: "42. Complete LLM Mental Model",

      process: [
        "Human intent",
        "↓",
        "Application logic",
        "↓",
        "Context construction",
        "↓",
        "Tokenization",
        "↓",
        "Embeddings",
        "↓",
        "Transformer computation",
        "↓",
        "Logits",
        "↓",
        "Probability distribution",
        "↓",
        "Decoding",
        "↓",
        "Generated token",
        "↓",
        "Repeat",
        "↓",
        "Final output",
        "↓",
        "Application validation",
        "↓",
        "User"
      ]
    },

    {
      heading: "43. Common Misconceptions",

      content: [
        "Misconception 1: An LLM is a database.",
        "Correction: Its learned parameters encode distributed patterns rather than behaving like an ordinary record store.",
        "Misconception 2: A larger model automatically knows everything.",
        "Correction: Model capability depends on data, training, architecture, context, and many other factors.",
        "Misconception 3: Prompting changes model weights.",
        "Correction: Prompting changes the input; it normally does not update parameters.",
        "Misconception 4: Fluent text means correct text.",
        "Correction: Fluency and factual correctness are different properties.",
        "Misconception 5: The LLM is the complete application.",
        "Correction: Production systems require application infrastructure around the model.",
        "Misconception 6: Context is permanent memory.",
        "Correction: Context is supplied to a particular model operation."
      ]
    },

    {
      heading: "44. Interview Questions",

      content: [
        "What is a language model?",
        "What makes an LLM large?",
        "What is next-token prediction?",
        "What is autoregressive generation?",
        "What are model parameters?",
        "What is a vocabulary?",
        "What is a token?",
        "What is a context window?",
        "What is pretraining?",
        "What is post-training?",
        "What is in-context learning?",
        "What is zero-shot prompting?",
        "What is few-shot prompting?",
        "How is an LLM different from a database?",
        "Why can an LLM hallucinate?",
        "Why is an LLM only one part of a production AI application?",
        "What is the difference between prompting and fine-tuning?",
        "Why does scale matter?",
        "What are common LLM failure modes?"
      ]
    }
  ],

  formulas: [
    "P(x₁,...,xₙ) = ∏ᵢ P(xᵢ | x₁,...,xᵢ₋₁)",
    "Next-token prediction: P(xₜ | x₁,...,xₜ₋₁)",
    "Negative log-likelihood = -Σ log P(xₜ | x₁,...,xₜ₋₁)",
    "Autoregressive generation: contextₜ₊₁ = contextₜ + selected_token"
  ],

  codeExamples: [
    {
      title: "Toy Next-Token Generator",
      language: "python",
      description:
        "A conceptual example showing the autoregressive generation loop.",
      code:
        "def generate(model, tokenizer, prompt, max_tokens=20):\n    tokens = tokenizer.encode(prompt)\n\n    for _ in range(max_tokens):\n        probabilities = model.predict_next(tokens)\n        next_token = select_token(probabilities)\n        tokens.append(next_token)\n\n        if next_token == tokenizer.eos_token:\n            break\n\n    return tokenizer.decode(tokens)"
    },
    {
      title: "Sequence Probability",
      language: "python",
      description:
        "Conceptual calculation of a sequence probability from conditional probabilities.",
      code:
        "probabilities = [0.8, 0.5, 0.7]\n\nsequence_probability = 1.0\n\nfor p in probabilities:\n    sequence_probability *= p\n\nprint(sequence_probability)"
    },
    {
      title: "Simple Context Builder",
      language: "python",
      description:
        "Illustrates how an application can construct model context.",
      code:
        "def build_context(system, history, question, retrieved=None):\n    context = []\n\n    context.append(system)\n    context.extend(history)\n\n    if retrieved:\n        context.append(\"Relevant context:\")\n        context.extend(retrieved)\n\n    context.append(question)\n\n    return context"
    }
  ],

  mathIntuition: [
    {
      concept: "Sequence probability",
      explanation:
        "The probability of a complete sequence can be decomposed into conditional next-token probabilities."
    },
    {
      concept: "Next-token prediction",
      explanation:
        "At each generation step, the model produces scores for possible next tokens."
    },
    {
      concept: "Autoregressive generation",
      explanation:
        "Each selected token becomes part of the input context for the next prediction."
    },
    {
      concept: "Parameters",
      explanation:
        "Parameters are learned numerical values that transform representations during neural computation."
    }
  ],

  exercises: [
    {
      question:
        "Explain what a language model predicts.",
      difficulty: "Easy"
    },
    {
      question:
        "Explain why next-token prediction can produce complete sentences.",
      difficulty: "Easy"
    },
    {
      question:
        "Explain the difference between tokens and token IDs.",
      difficulty: "Easy"
    },
    {
      question:
        "Explain why an LLM should not be treated as a traditional database.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain the relationship between training, parameters, and inference.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain how context influences an LLM response.",
      difficulty: "Medium"
    },
    {
      question:
        "Design a complete LLM application around a model.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Implement Sequence Probability",
      task:
        "Write a Python function that receives conditional probabilities and returns the probability of the complete sequence.",
      requirements: [
        "Use multiplication.",
        "Validate probabilities.",
        "Handle an empty sequence."
      ]
    },
    {
      title: "Build a Toy Autoregressive Generator",
      task:
        "Create a small vocabulary and probability table and generate a sequence one token at a time.",
      requirements: [
        "Use a vocabulary.",
        "Store next-token probabilities.",
        "Select a token.",
        "Append the token to context.",
        "Stop at an end token."
      ]
    },
    {
      title: "Context Window Simulator",
      task:
        "Create a program that limits a conversation to a maximum number of tokens.",
      requirements: [
        "Represent messages as token counts.",
        "Track total context.",
        "Remove older messages when the limit is exceeded."
      ]
    }
  ],

  summary: [
    "A language model estimates probabilities over sequences of language units.",
    "Modern LLMs commonly use neural architectures, especially transformer-based architectures.",
    "Next-token prediction is a central objective for many autoregressive LLMs.",
    "Autoregressive generation repeatedly predicts and selects the next token.",
    "Model parameters are learned numerical values rather than ordinary database records.",
    "Tokens are the units processed by language models.",
    "A context window determines the information available to a model operation.",
    "Training learns parameters, while inference uses those parameters.",
    "Pretraining provides broad capabilities and post-training can adapt model behavior.",
    "In-context learning uses examples or instructions inside the current context without normally changing model parameters.",
    "Scale can increase model capacity but does not eliminate limitations.",
    "LLMs can generate fluent outputs that are still incorrect.",
    "An LLM is only one component of a production AI application.",
    "Application code provides context, retrieval, tools, security, validation, and business logic."
  ],

  keyTakeaways: [
    "Think of an LLM as a learned next-token prediction system.",
    "Understand the distinction between tokens, token IDs, embeddings, and parameters.",
    "Understand autoregressive generation.",
    "Understand the difference between training and inference.",
    "Do not treat an LLM as an ordinary database.",
    "Context is a major part of LLM application design.",
    "A production AI application requires deterministic software around the probabilistic model.",
    "Fluent generation is not the same as factual correctness."
  ],

  visualReferences: [
    {
      title: "Transformer architecture reference",
      url:
        "https://arxiv.org/abs/1706.03762",
      purpose:
        "Useful for studying the original Transformer architecture and attention-based sequence modeling."
    },
    {
      title: "Hugging Face LLM course",
      url:
        "https://huggingface.co/learn/llm-course/chapter1/1",
      purpose:
        "Useful supplementary visual and conceptual material for understanding transformer-based language models."
    }
  ]
};

export default lesson1;

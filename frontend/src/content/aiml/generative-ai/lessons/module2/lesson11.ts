const lesson11 = {
  id: "lesson11",
  moduleId: "module2",
  lessonNumber: 11,

  title: "Language Model Training Pipeline & Objectives",

  subtitle:
    "Understand how large language models are trained from raw text through tokenization, batching, forward propagation, loss computation, backpropagation, optimization, evaluation, and checkpointing.",

  description:
    "Training a large language model is a complete computational pipeline rather than a single algorithm. This lesson connects the data pipeline, autoregressive objective, Transformer forward pass, loss function, gradients, optimizer, evaluation, and training infrastructure into one coherent system.",

  estimatedTime: "4–5 hours",

  difficulty: "Advanced",

  learningObjectives: [
    "Understand the complete language-model training pipeline.",
    "Understand pretraining data preparation.",
    "Understand tokenization and sequence packing.",
    "Understand input-target construction.",
    "Understand batches and tensor shapes.",
    "Understand the forward pass of a language model.",
    "Understand logits and next-token loss.",
    "Understand cross-entropy and negative log-likelihood.",
    "Understand backpropagation through a Transformer.",
    "Understand gradient accumulation.",
    "Understand optimizer updates.",
    "Understand learning-rate schedules.",
    "Understand epochs, steps, and tokens processed.",
    "Understand validation and evaluation.",
    "Understand checkpoints and experiment tracking.",
    "Understand overfitting and underfitting in language-model training.",
    "Understand the difference between pretraining and later adaptation."
  ],

  sections: [
    {
      heading: "1. What Does It Mean to Train a Language Model?",

      content: [
        "Training a language model means adjusting its parameters so that the model assigns useful probability distributions to observed language sequences.",
        "For an autoregressive model, the central training objective is next-token prediction.",
        "The model starts with randomly initialized or previously initialized parameters and repeatedly updates them using examples from a training dataset.",
        "The complete process involves data preparation, forward computation, loss calculation, gradient computation, parameter updates, and evaluation."
      ],

      classificationTree: [
        "Language Model Training",
        "├── Data",
        "│   ├── Collection",
        "│   ├── Cleaning",
        "│   ├── Filtering",
        "│   └── Tokenization",
        "├── Training",
        "│   ├── Forward pass",
        "│   ├── Loss",
        "│   ├── Backpropagation",
        "│   └── Optimizer update",
        "├── Evaluation",
        "│   ├── Training metrics",
        "│   └── Validation metrics",
        "└── Infrastructure",
        "    ├── Checkpoints",
        "    ├── Logging",
        "    └── Distributed computation"
      ]
    },

    {
      heading: "2. Complete Training Pipeline",

      process: [
        "Raw data",
        "↓",
        "Data cleaning and filtering",
        "↓",
        "Tokenizer",
        "↓",
        "Token IDs",
        "↓",
        "Sequence construction",
        "↓",
        "Batches",
        "↓",
        "Transformer forward pass",
        "↓",
        "Logits",
        "↓",
        "Cross-entropy loss",
        "↓",
        "Backpropagation",
        "↓",
        "Gradients",
        "↓",
        "Optimizer",
        "↓",
        "Parameter update",
        "↓",
        "Validation",
        "↓",
        "Checkpoint / logging",
        "↓",
        "Repeat"
      ]
    },

    {
      heading: "3. Training Data",

      content: [
        "A language model learns patterns from a collection of training examples.",
        "For large-scale pretraining, the dataset can contain many different forms of text and other supported modalities depending on the model.",
        "The quality and composition of the training data strongly influence what the resulting model can learn.",
        "Data preparation can include filtering, deduplication, normalization, language identification, quality estimation, and removal of unsuitable content."
      ],

      table: {
        headers: ["Data stage", "Purpose"],
        rows: [
          ["Collection", "Gather candidate training material"],
          ["Filtering", "Remove unsuitable or low-quality examples"],
          ["Deduplication", "Reduce repeated information"],
          ["Normalization", "Make data representation consistent where appropriate"],
          ["Tokenization", "Convert text into model-readable token IDs"],
          ["Packing", "Construct efficient training sequences"]
        ]
      }
    },

    {
      heading: "4. Tokenization Before Training",

      content: [
        "Neural language models operate on numerical representations rather than raw strings.",
        "A tokenizer converts text into a sequence of token IDs.",
        "Those IDs are then converted into vectors by the embedding layer.",
        "The tokenizer and model vocabulary must be compatible."
      ],

      formulas: [
        "Text → tokens → token IDs → embeddings"
      ],

      process: [
        "Raw text",
        "↓",
        "Tokenizer",
        "↓",
        "[token_id₁, token_id₂, ..., token_id_T]",
        "↓",
        "Embedding lookup",
        "↓",
        "Hidden vectors"
      ]
    },

    {
      heading: "5. Sequence Construction",

      content: [
        "Training text is divided into sequences that fit the model's supported context length.",
        "A sequence may contain a fixed number of tokens or may be constructed using a packing strategy.",
        "The goal is to provide efficient batches while maintaining the desired training objective."
      ],

      table: {
        headers: ["Concept", "Meaning"],
        rows: [
          ["Sequence length", "Number of tokens in one training example"],
          ["Context length", "Maximum supported context in a model configuration"],
          ["Packing", "Combining examples efficiently into sequences"],
          ["Padding", "Adding placeholder tokens when required"],
          ["Truncation", "Cutting sequences that exceed a chosen limit"]
        ]
      }
    },

    {
      heading: "6. Input-Target Construction",

      content: [
        "For autoregressive training, the input and target sequences are shifted by one token.",
        "The input at position t is used to predict the target at position t.",
        "The target corresponds to the next token in the original sequence."
      ],

      formulas: [
        "Input = [x₁, x₂, ..., x_(T−1)]",
        "Target = [x₂, x₃, ..., x_T]"
      ],

      table: {
        headers: ["Position", "Input context", "Target"],
        rows: [
          ["1", "The", "cat"],
          ["2", "The cat", "sat"],
          ["3", "The cat sat", "down"]
        ]
      }
    },

    {
      heading: "7. Batch Construction",

      content: [
        "Multiple sequences are grouped into a batch so that hardware can process many examples together.",
        "The input IDs commonly have shape [B, T], where B is batch size and T is sequence length."
      ],

      formulas: [
        "Input IDs ∈ R^(B × T)",
        "Hidden states ∈ R^(B × T × d_model)",
        "Logits ∈ R^(B × T × V)"
      ],

      table: {
        headers: ["Symbol", "Meaning"],
        rows: [
          ["B", "Batch size"],
          ["T", "Sequence length"],
          ["d_model", "Hidden dimension"],
          ["V", "Vocabulary size"]
        ]
      }
    },

    {
      heading: "8. Forward Pass",

      content: [
        "The forward pass converts input token IDs into predictions.",
        "Token IDs are transformed into embeddings, processed through Transformer blocks, and finally projected into vocabulary logits.",
        "The forward pass does not update model parameters. It only computes the current predictions."
      ],

      process: [
        "Input IDs",
        "↓",
        "Token embeddings",
        "↓",
        "Positional representation",
        "↓",
        "Transformer blocks",
        "↓",
        "Final hidden states",
        "↓",
        "Vocabulary projection",
        "↓",
        "Logits"
      ]
    },

    {
      heading: "9. Logits During Training",

      content: [
        "For every sequence position, the model produces a score for every vocabulary token.",
        "If the vocabulary contains V tokens, each prediction position has V logits.",
        "These logits are compared with the correct target token when calculating the training loss."
      ],

      formulas: [
        "logits ∈ R^(B × T × V)"
      ],

      contentAfterFormula: [
        "The logits are not probabilities. They are converted into probabilities conceptually through softmax, while optimized language-model implementations may calculate cross-entropy directly from logits for numerical stability."
      ]
    },

    {
      heading: "10. Cross-Entropy Loss",

      content: [
        "Cross-entropy measures how well the predicted distribution assigns probability to the correct target token.",
        "For one prediction, the loss is the negative logarithm of the probability assigned to the correct token."
      ],

      formulas: [
        "L = −log P(correct token | context)",
        "L = −(1/T) Σₜ log P(x_t | x_<t)"
      ],

      table: {
        headers: ["Correct-token probability", "Qualitative loss"],
        rows: [
          ["0.99", "Very low"],
          ["0.80", "Low"],
          ["0.50", "Moderate"],
          ["0.10", "High"],
          ["0.001", "Very high"]
        ]
      }
    },

    {
      heading: "11. Masked Loss",

      content: [
        "Not every position in a training tensor must necessarily contribute to the loss.",
        "Padding positions or intentionally ignored targets can be excluded using a loss mask.",
        "This allows batches with padding to be trained without treating padding tokens as meaningful prediction targets."
      ],

      formulas: [
        "L = Σᵢ mᵢ Lᵢ / Σᵢ mᵢ"
      ],

      contentAfterFormula: [
        "Here mᵢ is typically 1 for a valid target and 0 for an ignored target."
      ]
    },

    {
      heading: "12. Backpropagation",

      content: [
        "After calculating the loss, backpropagation computes how the loss changes with respect to the model parameters.",
        "The resulting gradients indicate how each parameter should be adjusted to reduce the training objective.",
        "Gradients flow backward through the vocabulary projection, Transformer blocks, attention, FFNs, embeddings, and other trainable components."
      ],

      process: [
        "Loss",
        "↓",
        "Gradient of loss",
        "↓",
        "Vocabulary projection gradients",
        "↓",
        "Transformer gradients",
        "↓",
        "Attention + FFN gradients",
        "↓",
        "Embedding gradients",
        "↓",
        "Parameter gradients"
      ]
    },

    {
      heading: "13. Gradient Descent Intuition",

      content: [
        "A gradient indicates the direction in parameter space in which the loss increases most rapidly.",
        "Optimization moves parameters in the opposite direction to reduce the loss.",
        "The learning rate controls the approximate size of each update."
      ],

      formulas: [
        "θ_new = θ_old − η∇θL"
      ],

      contentAfterFormula: [
        "Here θ represents model parameters and η represents the learning rate."
      ]
    },

    {
      heading: "14. Optimizers",

      content: [
        "An optimizer determines how parameter gradients are converted into parameter updates.",
        "Modern neural-network training commonly uses adaptive optimizers such as Adam or AdamW.",
        "Optimizers can maintain additional state such as moving estimates of gradients and squared gradients."
      ],

      comparisonTables: [
        {
          title: "Basic Optimization Concepts",
          headers: ["Concept", "Meaning"],
          rows: [
            ["Gradient", "Direction of greatest local loss increase"],
            ["Learning rate", "Controls update magnitude"],
            ["Optimizer", "Transforms gradients into parameter updates"],
            ["Weight decay", "Regularization mechanism used by some optimizers"],
            ["Momentum", "Uses information from previous gradients"]
          ]
        }
      ]
    },

    {
      heading: "15. Learning Rate",

      content: [
        "The learning rate is one of the most important training hyperparameters.",
        "If it is too large, optimization may become unstable.",
        "If it is too small, training may progress very slowly.",
        "Large language-model training often uses a learning-rate schedule rather than a fixed learning rate."
      ],

      formulas: [
        "θ_(t+1) = θ_t − η_t g_t"
      ]
    },

    {
      heading: "16. Learning-Rate Warmup",

      content: [
        "Warmup gradually increases the learning rate at the beginning of training.",
        "This can help stabilize optimization during the early stages when model parameters and optimizer statistics are still developing."
      ],

      process: [
        "Training starts",
        "↓",
        "Small learning rate",
        "↓",
        "Gradually increase",
        "↓",
        "Reach target learning rate",
        "↓",
        "Follow main learning-rate schedule"
      ]
    },

    {
      heading: "17. Learning-Rate Decay",

      content: [
        "After the initial training stage, the learning rate may be gradually reduced.",
        "The exact schedule depends on the training setup."
      ],

      table: {
        headers: ["Schedule type", "General idea"],
        rows: [
          ["Constant", "Keep learning rate fixed"],
          ["Linear decay", "Reduce approximately linearly"],
          ["Cosine decay", "Follow a cosine-shaped schedule"],
          ["Warmup + decay", "Increase initially, then decrease"]
        ]
      }
    },

    {
      heading: "18. Batch Size, Step and Epoch",

      content: [
        "A batch is a group of training examples processed together.",
        "A training step usually means one optimizer update.",
        "An epoch is one complete pass through the training dataset, although large-scale language-model training is often described more naturally in terms of tokens and training steps."
      ],

      formulas: [
        "steps ≈ number_of_examples / batch_size",
        "tokens_per_step ≈ batch_size × sequence_length"
      ],

      table: {
        headers: ["Term", "Meaning"],
        rows: [
          ["Batch", "Examples processed together"],
          ["Step", "One optimizer update"],
          ["Epoch", "One pass over a dataset"],
          ["Tokens/step", "Approximate number of training tokens processed per step"]
        ]
      }
    },

    {
      heading: "19. Training in Tokens",

      content: [
        "For language models, the number of tokens processed can be a more informative scale than simply counting epochs.",
        "Large corpora may contain vastly more tokens than can be comfortably described as a small number of traditional epochs.",
        "Training progress can therefore be tracked by total tokens processed."
      ],

      formulas: [
        "Total tokens ≈ steps × tokens per step"
      ]
    },

    {
      heading: "20. Gradient Accumulation",

      content: [
        "GPU memory limits may prevent using a very large batch in a single forward/backward pass.",
        "Gradient accumulation allows multiple smaller micro-batches to contribute gradients before performing one optimizer update.",
        "This creates an effective larger batch size without requiring all examples to fit in memory simultaneously."
      ],

      formulas: [
        "Effective batch ≈ micro_batch × accumulation_steps"
      ],

      process: [
        "Micro-batch 1",
        "↓",
        "Compute gradients",
        "↓",
        "Accumulate",
        "↓",
        "Micro-batch 2",
        "↓",
        "Accumulate",
        "↓",
        "⋮",
        "↓",
        "Optimizer update"
      ]
    },

    {
      heading: "21. Training Metrics",

      content: [
        "Training systems record metrics so that optimization behavior can be monitored.",
        "Common metrics include training loss, validation loss, learning rate, gradient statistics, throughput, and tokens processed.",
        "Metrics help identify instability, under-training, overfitting, and infrastructure problems."
      ],

      table: {
        headers: ["Metric", "What it helps monitor"],
        rows: [
          ["Training loss", "Fit to training data"],
          ["Validation loss", "Generalization to held-out data"],
          ["Learning rate", "Optimization schedule"],
          ["Gradient norm", "Gradient magnitude"],
          ["Tokens/sec", "Training throughput"],
          ["Memory usage", "Hardware utilization"]
        ]
      }
    },

    {
      heading: "22. Validation Data",

      content: [
        "A validation dataset is separated from the training examples used for parameter updates.",
        "The model can be evaluated on validation data to estimate how well it generalizes beyond the examples directly used for optimization.",
        "Validation results can help identify overfitting."
      ],

      comparisonTables: [
        {
          title: "Training vs Validation Data",
          headers: ["Property", "Training", "Validation"],
          rows: [
            ["Used for parameter updates", "Yes", "No"],
            ["Used to monitor generalization", "Yes indirectly", "Yes"],
            ["Gradient calculation", "Yes", "No"],
            ["Model selection", "Can contribute", "Often important"]
          ]
        }
      ]
    },

    {
      heading: "23. Overfitting and Underfitting",

      content: [
        "Overfitting occurs when a model becomes too specialized to the training data and performs worse on unseen data.",
        "Underfitting occurs when the model has not learned enough structure to model the training distribution effectively.",
        "For large language models, training dynamics are influenced by model size, data quantity, data quality, optimization, and training duration."
      ],

      classificationTree: [
        "Training Behavior",
        "├── Underfitting",
        "│   └── Insufficient learning",
        "├── Good generalization",
        "│   └── Useful learned structure",
        "└── Overfitting",
        "    └── Excessive specialization"
      ]
    },

    {
      heading: "24. Checkpoints",

      content: [
        "A checkpoint is a saved state of the training process.",
        "It can contain model parameters and may also include optimizer state, scheduler state, training progress, and other metadata.",
        "Checkpoints allow training to resume after interruption and allow evaluation of intermediate model states."
      ],

      table: {
        headers: ["Checkpoint component", "Purpose"],
        rows: [
          ["Model parameters", "Restore learned weights"],
          ["Optimizer state", "Resume optimization"],
          ["Scheduler state", "Resume learning-rate schedule"],
          ["Step counter", "Resume training position"],
          ["Configuration", "Record training setup"]
        ]
      }
    },

    {
      heading: "25. Experiment Tracking",

      content: [
        "Large training runs involve many variables and therefore require systematic tracking.",
        "Important information can include dataset version, tokenizer, model configuration, learning rate, batch size, number of tokens, validation metrics, hardware configuration, and checkpoint locations."
      ],

      process: [
        "Training configuration",
        "↓",
        "Run experiment",
        "↓",
        "Log metrics",
        "↓",
        "Save checkpoint",
        "↓",
        "Compare experiments",
        "↓",
        "Select training configuration"
      ]
    },

    {
      heading: "26. Mixed Precision",

      content: [
        "Modern deep-learning systems can use lower-precision numerical formats to reduce memory usage and improve computational efficiency.",
        "Careful numerical handling is required because some operations are sensitive to reduced precision."
      ],

      table: {
        headers: ["Precision concept", "General benefit"],
        rows: [
          ["Higher precision", "Greater numerical range/accuracy"],
          ["Lower precision", "Lower memory and potentially higher throughput"],
          ["Mixed precision", "Combine precision levels according to operation requirements"]
        ]
      }
    },

    {
      heading: "27. Distributed Training",

      content: [
        "Large models may require multiple accelerators because a single device cannot efficiently hold or process the complete workload.",
        "Training can distribute computation across devices.",
        "Common strategies include data parallelism, model parallelism, tensor parallelism, and pipeline parallelism."
      ],

      classificationTree: [
        "Distributed Training",
        "├── Data Parallelism",
        "├── Model Parallelism",
        "│   ├── Tensor Parallelism",
        "│   └── Pipeline Parallelism",
        "└── Hybrid strategies"
      ]
    },

    {
      heading: "28. Data Parallelism",

      content: [
        "In data parallel training, different devices process different portions of a batch while maintaining synchronized or coordinated model parameters.",
        "Gradients from different devices are combined before parameter updates."
      ],

      process: [
        "Global batch",
        "↓",
        "Split across devices",
        "├── GPU 1",
        "├── GPU 2",
        "├── GPU 3",
        "└── GPU 4",
        "↓",
        "Compute gradients",
        "↓",
        "Synchronize gradients",
        "↓",
        "Parameter update"
      ]
    },

    {
      heading: "29. Pretraining vs Adaptation",

      content: [
        "Pretraining generally refers to learning broad statistical structure from a large dataset using a general objective.",
        "Later adaptation can specialize the model for particular behaviors, domains, or tasks.",
        "These stages have different data, compute, objectives, and evaluation requirements."
      ],

      comparisonTables: [
        {
          title: "Pretraining vs Adaptation",
          headers: ["Property", "Pretraining", "Later adaptation"],
          rows: [
            ["Data scale", "Usually very large", "Usually smaller"],
            ["Goal", "Learn broad representations and language patterns", "Specialize behavior or domain"],
            ["Compute", "Very high", "Often lower"],
            ["Objective", "General training objective", "Task or behavior-specific objective"]
          ]
        }
      ]
    },

    {
      heading: "30. Complete Training Loop",

      process: [
        "Sample batch",
        "↓",
        "Forward pass",
        "↓",
        "Calculate logits",
        "↓",
        "Calculate loss",
        "↓",
        "Backpropagation",
        "↓",
        "Gradient processing",
        "↓",
        "Optimizer update",
        "↓",
        "Log metrics",
        "↓",
        "Save checkpoint when required",
        "↓",
        "Repeat"
      ]
    },

    {
      heading: "31. Mathematical Training Summary",

      formulas: [
        "L(θ) = −(1/T) Σₜ log P_θ(x_t | x_<t)",
        "g_t = ∇_θ L(θ_t)",
        "θ_(t+1) = Optimizer(θ_t, g_t)",
        "tokens_processed ≈ steps × batch_size × sequence_length"
      ]
    },

    {
      heading: "32. Training Pipeline Mental Model",

      content: [
        "Think of language-model training as a feedback loop.",
        "Data produces predictions.",
        "Predictions are compared with targets.",
        "The difference becomes a loss.",
        "The loss produces gradients.",
        "Gradients update parameters.",
        "The updated model is tested again.",
        "This loop repeats across an enormous number of training examples."
      ],

      classificationTree: [
        "Data",
        "↓",
        "Prediction",
        "↓",
        "Error",
        "↓",
        "Gradient",
        "↓",
        "Update",
        "↓",
        "Improved parameters",
        "↓",
        "Repeat"
      ]
    },

    {
      heading: "33. Common Misconceptions",

      content: [
        "Training loss and validation loss are not the same measurement.",
        "A training step is not necessarily the same thing as an epoch.",
        "The optimizer does not replace the loss function; the loss defines the objective while the optimizer updates parameters.",
        "Backpropagation calculates gradients; it does not by itself decide the final parameter update rule.",
        "A checkpoint is more than just a model file when optimizer and scheduler states are included.",
        "More training tokens do not automatically guarantee better behavior without considering data quality and training configuration.",
        "Training and inference have different computational characteristics."
      ]
    },

    {
      heading: "34. Interview Questions",

      content: [
        "What is the language-model pretraining objective?",
        "What is the difference between a batch, step, and epoch?",
        "Why are input and target sequences shifted?",
        "What is cross-entropy loss?",
        "What does backpropagation calculate?",
        "What does an optimizer do?",
        "Why is learning-rate warmup used?",
        "What is gradient accumulation?",
        "What is a checkpoint?",
        "Why is validation data important?",
        "What is data parallelism?",
        "What is mixed-precision training?",
        "Why can training be parallelized more effectively than autoregressive inference?",
        "What is the difference between pretraining and adaptation?"
      ]
    }
  ],

  codeExamples: [
    {
      title: "Shift Input and Target Tokens",
      language: "python",
      code: `tokens = [10, 25, 31, 42, 18]

inputs = tokens[:-1]
targets = tokens[1:]

print("Inputs :", inputs)
print("Targets:", targets)`
    },

    {
      title: "Simple Gradient Descent",
      language: "python",
      code: `import numpy as np

theta = np.array([2.0, -1.0])
gradient = np.array([0.5, -0.25])

learning_rate = 0.1

theta_new = theta - learning_rate * gradient

print(theta_new)`
    },

    {
      title: "Gradient Accumulation Concept",
      language: "python",
      code: `gradients = [
    0.20,
    0.10,
    -0.05,
    0.15
]

accumulated = sum(gradients)

average_gradient = accumulated / len(gradients)

print("Accumulated:", accumulated)
print("Average:", average_gradient)`
    },

    {
      title: "Training Token Calculation",
      language: "python",
      code: `batch_size = 8
sequence_length = 512
steps = 1000

tokens = batch_size * sequence_length * steps

print("Approximate tokens processed:", tokens)`
    }
  ],

  mathIntuition: [
    {
      concept: "Training objective",
      intuition:
        "The model is trained to assign high probability to the observed next tokens.",
      equation:
        "L = −Σₜ log P(x_t | x_<t)"
    },
    {
      concept: "Gradient",
      intuition:
        "The gradient tells the optimizer how the loss changes when parameters change.",
      equation:
        "g = ∇θL"
    },
    {
      concept: "Parameter update",
      intuition:
        "Optimization changes parameters in a direction intended to reduce the loss.",
      equation:
        "θ_new = θ_old − ηg"
    },
    {
      concept: "Token throughput",
      intuition:
        "Training progress can be expressed in terms of how many tokens have been processed.",
      equation:
        "tokens ≈ steps × batch × sequence_length"
    }
  ],

  exercises: [
    {
      question:
        "What is the main objective of autoregressive pretraining?",
      answer:
        "To learn conditional next-token probabilities that assign high probability to observed target tokens."
    },
    {
      question:
        "Why are inputs and targets shifted?",
      answer:
        "Because the model should use the current and previous context to predict the next token."
    },
    {
      question:
        "What happens after the loss is calculated?",
      answer:
        "Backpropagation computes gradients, and the optimizer uses them to update model parameters."
    },
    {
      question:
        "What is gradient accumulation?",
      answer:
        "It combines gradients from multiple micro-batches before performing an optimizer update."
    },
    {
      question:
        "Why is validation data not normally used for parameter updates?",
      answer:
        "It is intended to measure generalization independently of the optimization process."
    },
    {
      question:
        "Why are tokens useful for measuring training progress?",
      answer:
        "They provide a direct measure of how much language-model training data has been processed."
    }
  ],

  codingExercises: [
    {
      title: "Build a Next-Token Dataset",
      difficulty: "Easy",
      task:
        "Write a Python function that converts a token list into shifted input and target sequences."
    },
    {
      title: "Implement Cross-Entropy",
      difficulty: "Medium",
      task:
        "Implement the negative log-likelihood for a batch of correct-token probabilities."
    },
    {
      title: "Implement Gradient Accumulation",
      difficulty: "Medium",
      task:
        "Simulate accumulating gradients over four micro-batches before applying one parameter update."
    },
    {
      title: "Create a Training Loop",
      difficulty: "Advanced",
      task:
        "Create a simplified loop containing batch loading, forward computation, loss calculation, gradient calculation, and parameter updates."
    },
    {
      title: "Track Training Tokens",
      difficulty: "Medium",
      task:
        "Write a program that calculates cumulative tokens processed after every training step."
    }
  ],

  architectureExercises: [
    {
      title: "Draw the Complete Training Pipeline",
      task:
        "Create a diagram from raw text through tokenization, batching, Transformer computation, loss, backpropagation, optimizer update, and checkpointing."
    },
    {
      title: "Training Data Flow",
      task:
        "Show how one text sequence becomes multiple next-token prediction examples."
    },
    {
      title: "Distributed Training",
      task:
        "Draw a data-parallel training system with four GPUs and show how gradients are synchronized."
    }
  ],

  comparisonTables: [
    {
      title: "Training Concepts",
      headers: ["Concept", "Purpose"],
      rows: [
        ["Forward pass", "Compute predictions"],
        ["Loss", "Measure prediction error"],
        ["Backpropagation", "Calculate gradients"],
        ["Optimizer", "Update parameters"],
        ["Validation", "Measure generalization"],
        ["Checkpoint", "Save training state"]
      ]
    },
    {
      title: "Data and Training Scale",
      headers: ["Quantity", "Meaning"],
      rows: [
        ["Batch size", "Sequences processed together"],
        ["Sequence length", "Tokens per sequence"],
        ["Step", "One optimizer update"],
        ["Tokens/step", "Tokens processed per step"],
        ["Total tokens", "Cumulative training tokens"]
      ]
    }
  ],

  commonMistakes: [
    "Confusing a training step with an epoch.",
    "Forgetting to shift input and target sequences.",
    "Calculating loss on padding tokens unintentionally.",
    "Using an excessively large learning rate without a suitable schedule.",
    "Forgetting to clear or correctly accumulate gradients.",
    "Confusing gradients with parameters.",
    "Confusing validation evaluation with training updates.",
    "Ignoring checkpoint and experiment metadata.",
    "Assuming one GPU is always sufficient for large-model training."
  ],

  summary: [
    "Language-model training is a complete pipeline from data preparation to parameter optimization.",
    "Autoregressive training uses shifted input and target sequences.",
    "The forward pass produces vocabulary logits.",
    "Cross-entropy measures the probability assigned to correct target tokens.",
    "Backpropagation calculates parameter gradients.",
    "Optimizers convert gradients into parameter updates.",
    "Learning-rate schedules control optimization dynamics.",
    "Gradient accumulation can create larger effective batches.",
    "Validation measures generalization without updating parameters.",
    "Checkpoints preserve training state.",
    "Distributed and mixed-precision training enable larger and more efficient training workloads.",
    "Pretraining and later adaptation have different objectives and scales."
  ],

  keyTakeaways: [
    "Data → tokens → batches → Transformer → logits → loss → gradients → update.",
    "Cross-entropy is the central next-token training objective.",
    "Backpropagation calculates gradients.",
    "The optimizer updates parameters.",
    "Training progress can be measured in tokens.",
    "Validation helps measure generalization.",
    "Checkpoints make large training runs recoverable.",
    "Large-scale training requires careful data, optimization, and infrastructure design."
  ],

  visualReferences: [
    {
      title: "Attention Is All You Need",
      url: "https://arxiv.org/abs/1706.03762",
      description:
        "Original Transformer paper."
    },
    {
      title: "PyTorch Automatic Differentiation",
      url: "https://pytorch.org/docs/stable/autograd.html",
      description:
        "Documentation for automatic differentiation and gradient computation."
    },
    {
      title: "PyTorch Optimizers",
      url: "https://pytorch.org/docs/stable/optim.html",
      description:
        "Documentation for optimization algorithms."
    },
    {
      title: "Hugging Face Transformers Documentation",
      url: "https://huggingface.co/docs/transformers/",
      description:
        "Practical Transformer training and implementation documentation."
    }
  ]
};

export default lesson11;

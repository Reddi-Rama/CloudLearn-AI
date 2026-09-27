const lesson14 = {
  id: "lesson14",
  moduleId: "module2",
  lessonNumber: 14,

  title: "Language Model Scaling, Parameters & Compute",

  subtitle:
    "Understand model parameters, depth, width, vocabulary size, training tokens, compute, memory, scaling relationships, and the engineering tradeoffs behind large language models.",

  description:
    "The word 'large' in large language models refers to multiple dimensions of scale. This lesson explains parameter count, model width, depth, vocabulary size, sequence length, training tokens, computational cost, memory requirements, throughput, and the tradeoffs involved in scaling Transformer models.",

  estimatedTime: "4–5 hours",

  difficulty: "Advanced",

  learningObjectives: [
    "Understand what a model parameter is.",
    "Understand parameter count versus model size.",
    "Understand Transformer width and depth.",
    "Understand vocabulary size and embedding parameters.",
    "Understand how attention parameters are calculated.",
    "Understand FFN parameter count.",
    "Understand why deeper and wider models require more compute.",
    "Understand training compute at a conceptual level.",
    "Understand inference compute.",
    "Understand memory required for model weights.",
    "Understand activation memory.",
    "Understand optimizer-state memory.",
    "Understand the effect of precision on memory.",
    "Understand throughput and latency.",
    "Understand scaling relationships between model size, data, and compute.",
    "Understand why larger models are not automatically better for every application."
  ],

  sections: [
    {
      heading: "1. What Does 'Large' Mean in LLM?",

      content: [
        "A language model can be large in several different dimensions.",
        "The most visible measurement is parameter count, but model size also depends on hidden dimension, number of layers, vocabulary size, sequence length, training data volume, and computational budget.",
        "A useful understanding of LLM scale therefore requires looking beyond a single parameter-count number."
      ],

      classificationTree: [
        "LLM Scale",
        "├── Parameters",
        "│   ├── Width",
        "│   ├── Depth",
        "│   └── Vocabulary embeddings",
        "├── Data",
        "│   └── Training tokens",
        "├── Context",
        "│   └── Sequence length",
        "├── Compute",
        "│   ├── Training FLOPs",
        "│   └── Inference FLOPs",
        "└── Memory",
        "    ├── Weights",
        "    ├── Activations",
        "    └── Optimizer state"
      ]
    },

    {
      heading: "2. What Is a Parameter?",

      content: [
        "A parameter is a learned numerical value that is adjusted during model training.",
        "Weights and biases in neural-network layers are examples of parameters.",
        "The model learns parameter values through optimization based on the training objective."
      ],

      formulas: [
        "θ = {all trainable weights and biases}"
      ],

      contentAfterFormula: [
        "A model with billions of parameters contains billions of learned numerical values."
      ]
    },

    {
      heading: "3. Parameter Count vs Model Size",

      content: [
        "Parameter count describes how many learned numerical values a model contains.",
        "Model storage size depends additionally on how those parameters are represented numerically.",
        "For example, the same number of parameters requires different storage amounts in different numerical precisions."
      ],

      table: {
        headers: ["Concept", "Meaning"],
        rows: [
          ["Parameter count", "Number of learned values"],
          ["Precision", "Bits used to represent each value"],
          ["Weight memory", "Storage required for model parameters"],
          ["Model file size", "Serialized representation of model state"]
        ]
      }
    },

    {
      heading: "4. Parameter Memory",

      content: [
        "A rough estimate of weight memory can be calculated by multiplying parameter count by bytes per parameter.",
        "This is only the weight memory and does not include activations, optimizer states, temporary buffers, or other runtime requirements."
      ],

      formulas: [
        "Weight memory ≈ parameter_count × bytes_per_parameter"
      ],

      table: {
        headers: ["Precision", "Approximate bytes/value"],
        rows: [
          ["FP32", "4"],
          ["FP16", "2"],
          ["BF16", "2"],
          ["INT8", "1"],
          ["INT4", "0.5"]
        ]
      }
    },

    {
      heading: "5. Example: Weight Memory",

      content: [
        "Suppose a model contains 7 billion parameters.",
        "At a simplified 2-byte-per-parameter representation, the raw parameter storage is approximately 14 billion bytes.",
        "Real model memory requirements can be larger because runtime systems need additional memory."
      ],

      formulas: [
        "7 × 10⁹ × 2 bytes ≈ 14 × 10⁹ bytes"
      ]
    },

    {
      heading: "6. Transformer Width",

      content: [
        "Transformer width usually refers to the hidden dimension d_model.",
        "A larger hidden dimension means each token representation contains more numerical features.",
        "Increasing width generally increases the parameter count of attention and feed-forward layers."
      ],

      formulas: [
        "Hidden state shape = [B, T, d_model]"
      ]
    },

    {
      heading: "7. Transformer Depth",

      content: [
        "Depth refers to the number of Transformer blocks stacked sequentially.",
        "Each additional block performs additional contextual mixing and nonlinear transformation.",
        "Increasing depth therefore increases model capacity and computation."
      ],

      process: [
        "Input",
        "↓",
        "Block 1",
        "↓",
        "Block 2",
        "↓",
        "Block 3",
        "↓",
        "⋮",
        "↓",
        "Block L",
        "↓",
        "Output"
      ]
    },

    {
      heading: "8. Width vs Depth",

      comparisonTables: [
        {
          title: "Width and Depth",
          headers: ["Property", "Width", "Depth"],
          rows: [
            ["Meaning", "Hidden dimension", "Number of layers"],
            ["Controls", "Representation size", "Number of transformation stages"],
            ["Example", "d_model = 4096", "L = 32"],
            ["Effect", "Larger vectors", "More sequential computation"]
          ]
        }
      ]
    },

    {
      heading: "9. Vocabulary Size",

      content: [
        "The vocabulary size V determines how many token entries the model can represent.",
        "The embedding matrix contains one vector for each vocabulary token.",
        "The final vocabulary projection can also contain a large number of parameters."
      ],

      formulas: [
        "Embedding parameters ≈ V × d_model",
        "Output projection parameters ≈ d_model × V"
      ],

      contentAfterFormula: [
        "Some architectures tie input embeddings and output projection weights, which can reduce the total number of independent parameters."
      ]
    },

    {
      heading: "10. Attention Parameter Count",

      content: [
        "A simplified self-attention layer contains learned projection matrices for queries, keys, values, and the output projection.",
        "When the projections use the same model dimension, the total parameter count is approximately proportional to 4d_model², ignoring biases and implementation details."
      ],

      formulas: [
        "W_Q ∈ R^(d_model × d_model)",
        "W_K ∈ R^(d_model × d_model)",
        "W_V ∈ R^(d_model × d_model)",
        "W_O ∈ R^(d_model × d_model)",
        "Attention parameters ≈ 4d_model²"
      ]
    },

    {
      heading: "11. FFN Parameter Count",

      content: [
        "The feed-forward network typically contains an expansion layer and a projection layer.",
        "If the intermediate dimension is d_ff, the two main matrices contribute approximately 2d_model × d_ff parameters."
      ],

      formulas: [
        "W₁ ∈ R^(d_model × d_ff)",
        "W₂ ∈ R^(d_ff × d_model)",
        "FFN parameters ≈ 2d_model d_ff"
      ]
    },

    {
      heading: "12. Simplified Transformer Block Parameters",

      formulas: [
        "Block parameters ≈ 4d_model² + 2d_model d_ff"
      ],

      contentAfterFormula: [
        "This is a simplified estimate. Real architectures can contain additional parameters for normalization, biases, gated activations, different attention structures, and other components."
      ]
    },

    {
      heading: "13. Example Parameter Calculation",

      content: [
        "Suppose d_model = 768 and d_ff = 3072.",
        "The approximate attention and FFN parameter counts can be estimated from the formulas above."
      ],

      formulas: [
        "Attention ≈ 4 × 768²",
        "FFN ≈ 2 × 768 × 3072"
      ],

      table: {
        headers: ["Component", "Approximate parameters"],
        rows: [
          ["Attention projections", "≈ 2.36 million"],
          ["FFN", "≈ 4.72 million"],
          ["Combined", "≈ 7.08 million"]
        ]
      }
    },

    {
      heading: "14. Stacking Layers",

      content: [
        "If a Transformer block contains approximately P parameters and the model contains L similar blocks, the block contribution is roughly L × P.",
        "Embedding and output layers must then be added to estimate the total model size."
      ],

      formulas: [
        "Total parameters ≈ L × block_parameters + embedding_parameters + output_parameters"
      ]
    },

    {
      heading: "15. Compute and FLOPs",

      content: [
        "Floating-point operations, commonly called FLOPs, provide a way to estimate computational work.",
        "Training and inference require large numbers of matrix multiplications and other operations.",
        "Exact FLOP counts depend on the architecture, implementation, sequence length, batch size, and hardware."
      ],

      table: {
        headers: ["Term", "Meaning"],
        rows: [
          ["FLOP", "One floating-point operation"],
          ["FLOPs", "Number of floating-point operations"],
          ["FLOP/s", "Operations performed per second"],
          ["TFLOP/s", "Trillions of FLOPs per second"],
          ["PFLOP/s", "Quadrillions of FLOPs per second"]
        ]
      }
    },

    {
      heading: "16. Training Compute",

      content: [
        "Training requires repeated forward and backward computations over many tokens.",
        "The total training compute therefore depends on model size, training-token count, sequence length, architecture, and optimization details.",
        "A commonly used rough mental model is that training compute scales strongly with both parameter count and number of training tokens."
      ],

      formulas: [
        "Training compute ∝ model_size × training_tokens"
      ],

      contentAfterFormula: [
        "This is a conceptual scaling relationship rather than a universal exact FLOP equation."
      ]
    },

    {
      heading: "17. Inference Compute",

      content: [
        "Inference is the computation required to produce predictions from a trained model.",
        "For autoregressive generation, inference is performed repeatedly for generated tokens.",
        "Prompt processing and token generation have different computational characteristics."
      ],

      process: [
        "Prompt",
        "↓",
        "Prefill computation",
        "↓",
        "KV cache",
        "↓",
        "Decode token",
        "↓",
        "Decode next token",
        "↓",
        "Repeat"
      ]
    },

    {
      heading: "18. Prefill vs Decode",

      comparisonTables: [
        {
          title: "Inference Stages",
          headers: ["Stage", "Purpose", "Typical characteristic"],
          rows: [
            ["Prefill", "Process the input prompt", "Processes many prompt tokens together"],
            ["Decode", "Generate new tokens", "Sequential token generation"]
          ]
        }
      ]
    },

    {
      heading: "19. Memory During Training",

      content: [
        "Training memory includes much more than model weights.",
        "The system may need memory for activations, gradients, optimizer state, temporary tensors, and communication buffers."
      ],

      classificationTree: [
        "Training Memory",
        "├── Model weights",
        "├── Gradients",
        "├── Optimizer states",
        "├── Activations",
        "├── Temporary buffers",
        "└── Communication memory"
      ]
    },

    {
      heading: "20. Optimizer State Memory",

      content: [
        "Some optimizers maintain additional state for each trainable parameter.",
        "For example, Adam-style optimization maintains moving estimates associated with gradients.",
        "Therefore, training memory can be several times larger than the raw weight memory."
      ],

      formulas: [
        "Training memory > weight memory"
      ]
    },

    {
      heading: "21. Activation Memory",

      content: [
        "During training, intermediate activations may need to be stored for backpropagation.",
        "Activation memory depends on batch size, sequence length, model dimensions, number of layers, and implementation techniques.",
        "This is one reason long training sequences can significantly increase memory requirements."
      ],

      formulas: [
        "Activation memory grows with batch size, sequence length, hidden dimensions, and depth"
      ]
    },

    {
      heading: "22. Gradient Checkpointing",

      content: [
        "Gradient checkpointing, also called activation checkpointing, trades additional computation for lower activation memory.",
        "Instead of storing every intermediate activation, selected activations are stored and others are recomputed during the backward pass."
      ],

      comparisonTables: [
        {
          title: "Normal vs Checkpointed Training",
          headers: ["Property", "Standard", "Checkpointing"],
          rows: [
            ["Activation memory", "Higher", "Lower"],
            ["Recomputation", "Lower", "Higher"],
            ["Training speed", "Potentially faster", "Potentially slower"],
            ["Main tradeoff", "Memory", "Compute"]
          ]
        }
      ]
    },

    {
      heading: "23. Precision and Memory",

      content: [
        "Reducing numerical precision can reduce memory required for storing model values.",
        "Modern training and inference systems can use formats such as FP16, BF16, and quantized integer representations depending on the workload."
      ],

      table: {
        headers: ["Representation", "Approximate bytes/value"],
        rows: [
          ["FP32", "4"],
          ["FP16", "2"],
          ["BF16", "2"],
          ["INT8", "1"],
          ["INT4", "0.5"]
        ]
      }
    },

    {
      heading: "24. Quantization",

      content: [
        "Quantization represents model parameters or other tensors using lower-precision numerical formats.",
        "It can reduce memory usage and can sometimes improve inference efficiency.",
        "Quantization introduces approximation, so accuracy and numerical behavior should be evaluated."
      ],

      classificationTree: [
        "Quantization",
        "├── Higher precision",
        "│   └── More memory",
        "└── Lower precision",
        "    ├── Lower memory",
        "    └── Potential numerical approximation"
      ]
    },

    {
      heading: "25. Batch Size and Throughput",

      content: [
        "Throughput measures how much work a system completes per unit time.",
        "For training, this may be measured in tokens per second.",
        "For inference, systems may report tokens per second or requests per second."
      ],

      formulas: [
        "Throughput = work / time",
        "Training token throughput = tokens processed / second"
      ]
    },

    {
      heading: "26. Latency",

      content: [
        "Latency is the time required to produce a result.",
        "Interactive applications often care strongly about latency because users experience it directly.",
        "Throughput and latency are related but are not the same measurement."
      ],

      comparisonTables: [
        {
          title: "Latency vs Throughput",
          headers: ["Metric", "Meaning"],
          rows: [
            ["Latency", "Time for an individual operation/request"],
            ["Throughput", "Amount of work completed per unit time"],
            ["Optimization goal", "Depends on application requirements"]
          ]
        }
      ]
    },

    {
      heading: "27. Scaling Model Dimensions",

      content: [
        "Increasing model width, depth, vocabulary size, or context length changes different aspects of computation and memory.",
        "Scaling one dimension without considering the others can produce inefficient architectures."
      ],

      table: {
        headers: ["Scaling dimension", "Primary consequence"],
        rows: [
          ["Width", "More features and parameters"],
          ["Depth", "More sequential transformations"],
          ["Vocabulary", "Larger embedding/output layers"],
          ["Context length", "More attention interactions and KV memory"],
          ["Training tokens", "More optimization exposure"]
        ]
      }
    },

    {
      heading: "28. Scaling Laws",

      content: [
        "Scaling-law research studies how model performance changes as model size, dataset size, and compute budget change.",
        "A central lesson is that model size should be considered together with training data and compute rather than optimized independently.",
        "The exact relationship depends on the model family, objective, data distribution, and evaluation metric."
      ],

      formulas: [
        "Performance = f(model size, data size, compute, architecture, optimization)"
      ]
    },

    {
      heading: "29. Model Size Is Not the Only Variable",

      content: [
        "A larger model can require more compute and memory while providing diminishing returns on some tasks.",
        "Data quality, architecture, optimization, training duration, inference strategy, and application design also affect practical performance."
      ],

      classificationTree: [
        "Model Quality",
        "├── Architecture",
        "├── Parameter count",
        "├── Training data",
        "├── Training compute",
        "├── Optimization",
        "├── Evaluation",
        "└── Application design"
      ]
    },

    {
      heading: "30. Compute-Optimal Thinking",

      content: [
        "A useful scaling perspective is to ask how to allocate a fixed compute budget between model size and training data.",
        "A model that is too large for the amount of training data available may not use the compute budget efficiently.",
        "Likewise, excessive data with an undersized model can create a different limitation."
      ],

      process: [
        "Available compute budget",
        "↓",
        "Choose model size",
        "↓",
        "Choose training-token budget",
        "↓",
        "Train",
        "↓",
        "Evaluate",
        "↓",
        "Adjust design"
      ]
    },

    {
      heading: "31. Training Compute vs Inference Compute",

      comparisonTables: [
        {
          title: "Training and Inference Cost",
          headers: ["Property", "Training", "Inference"],
          rows: [
            ["Parameter updates", "Yes", "No"],
            ["Backward pass", "Yes", "No"],
            ["Forward pass", "Yes", "Yes"],
            ["Optimizer state", "Required", "Not required"],
            ["Repeated generation", "Not the primary operation", "Central for autoregressive models"],
            ["Main goal", "Learn parameters", "Use parameters"]
          ]
        }
      ]
    },

    {
      heading: "32. Why Large Models Need Specialized Hardware",

      content: [
        "Large-model workloads contain enormous numbers of matrix operations.",
        "Accelerators such as GPUs are designed to execute large amounts of parallel numerical computation efficiently.",
        "Memory bandwidth and accelerator memory capacity are also important because the system must repeatedly move and process large tensors."
      ]
    },

    {
      heading: "33. Hardware Bottlenecks",

      classificationTree: [
        "LLM System Bottlenecks",
        "├── Compute-bound",
        "│   └── Arithmetic operations dominate",
        "├── Memory-bound",
        "│   └── Data movement dominates",
        "├── Memory capacity",
        "│   └── Model/cache does not fit",
        "└── Communication-bound",
        "    └── Distributed synchronization dominates"
      ]
    },

    {
      heading: "34. Model Parallelism",

      content: [
        "When a model cannot fit efficiently on one accelerator, its computation or parameters can be distributed across multiple devices.",
        "Different forms of model parallelism divide the model in different ways."
      ],

      classificationTree: [
        "Model Parallelism",
        "├── Tensor Parallelism",
        "├── Pipeline Parallelism",
        "└── Hybrid strategies"
      ]
    },

    {
      heading: "35. Complete LLM Scaling Picture",

      process: [
        "Architecture",
        "↓",
        "Choose width + depth + vocabulary",
        "↓",
        "Determine parameter count",
        "↓",
        "Choose training-token budget",
        "↓",
        "Estimate compute",
        "↓",
        "Estimate memory",
        "↓",
        "Select hardware",
        "↓",
        "Train",
        "↓",
        "Evaluate",
        "↓",
        "Optimize inference"
      ]
    },

    {
      heading: "36. Practical Engineering Tradeoffs",

      comparisonTables: [
        {
          title: "Scaling Tradeoffs",
          headers: ["Increase", "Potential benefit", "Potential cost"],
          rows: [
            ["Parameters", "Greater capacity", "More memory and compute"],
            ["Depth", "More transformations", "More sequential computation"],
            ["Width", "Larger representations", "More matrix operations"],
            ["Context", "More available information", "More attention/KV resources"],
            ["Precision reduction", "Lower memory", "Potential numerical/quality tradeoffs"],
            ["Batch size", "Higher throughput potential", "More memory"]
          ]
        }
      ]
    },

    {
      heading: "37. Common Misconceptions",

      content: [
        "Parameter count is not the same thing as model file size.",
        "A larger parameter count does not automatically guarantee better performance on every task.",
        "Inference does not require optimizer states.",
        "Training memory is not equal to weight memory.",
        "Context length and parameter count measure different aspects of model scale.",
        "FLOPs measure computational operations, not directly model quality.",
        "Lower precision reduces representation size but can introduce numerical approximation.",
        "Throughput and latency are different performance measurements."
      ]
    },

    {
      heading: "38. Interview Questions",

      content: [
        "What is a model parameter?",
        "What is the difference between model width and depth?",
        "How do you estimate embedding parameters?",
        "How do you estimate attention parameters?",
        "How do you estimate FFN parameters?",
        "Why does increasing d_model increase parameter count?",
        "Why does context length affect attention computation?",
        "What is the difference between training and inference memory?",
        "What is activation memory?",
        "What is optimizer-state memory?",
        "What is gradient checkpointing?",
        "What is quantization?",
        "What is the difference between throughput and latency?",
        "Why is distributed training necessary for very large models?",
        "Why should model size and training-token count be considered together?"
      ]
    }
  ],

  codeExamples: [
    {
      title: "Estimate Weight Memory",
      language: "python",
      code: `parameters = 7_000_000_000
bytes_per_parameter = 2

memory_bytes = parameters * bytes_per_parameter
memory_gb = memory_bytes / 1e9

print("Approximate weight memory:", memory_gb, "GB")`
    },

    {
      title: "Estimate Attention Parameters",
      language: "python",
      code: `d_model = 768

attention_parameters = 4 * d_model * d_model

print(
    "Approximate attention parameters:",
    attention_parameters
)`
    },

    {
      title: "Estimate FFN Parameters",
      language: "python",
      code: `d_model = 768
d_ff = 3072

ffn_parameters = 2 * d_model * d_ff

print(
    "Approximate FFN parameters:",
    ffn_parameters
)`
    },

    {
      title: "Estimate Transformer Block Parameters",
      language: "python",
      code: `d_model = 768
d_ff = 3072
layers = 12

block_parameters = (
    4 * d_model**2
    + 2 * d_model * d_ff
)

total_block_parameters = (
    block_parameters * layers
)

print("One block:", block_parameters)
print("All blocks:", total_block_parameters)`
    },

    {
      title: "Compare Numerical Precision",
      language: "python",
      code: `parameters = 7_000_000_000

precisions = {
    "FP32": 4,
    "FP16": 2,
    "INT8": 1,
    "INT4": 0.5
}

for name, bytes_per_parameter in precisions.items():
    memory_gb = (
        parameters
        * bytes_per_parameter
        / 1e9
    )

    print(name, memory_gb, "GB")`
    },

    {
      title: "Training Token Calculation",
      language: "python",
      code: `steps = 100_000
batch_size = 8
sequence_length = 2048

tokens = (
    steps
    * batch_size
    * sequence_length
)

print("Approximate training tokens:", tokens)`
    }
  ],

  mathIntuition: [
    {
      concept: "Parameter memory",
      intuition:
        "The number of bytes needed for model weights depends on how many parameters exist and how many bytes represent each parameter.",
      equation:
        "Memory ≈ parameters × bytes_per_parameter"
    },
    {
      concept: "Attention parameters",
      intuition:
        "Four major projection matrices contribute roughly four d_model² parameters in a standard attention implementation.",
      equation:
        "Attention ≈ 4d_model²"
    },
    {
      concept: "FFN parameters",
      intuition:
        "The expansion and projection matrices contribute approximately 2d_model d_ff parameters.",
      equation:
        "FFN ≈ 2d_model d_ff"
    },
    {
      concept: "Training token budget",
      intuition:
        "The number of tokens processed depends on steps, batch size, and sequence length.",
      equation:
        "Tokens ≈ steps × batch × sequence_length"
    },
    {
      concept: "Scaling",
      intuition:
        "Model capability and training efficiency depend jointly on model size, data, compute, architecture, and optimization.",
      equation:
        "Quality ≈ f(model, data, compute, architecture, optimization)"
    }
  ],

  exercises: [
    {
      question:
        "If a model has 10 billion parameters and each parameter uses 2 bytes, approximately how much raw weight memory is required?",
      answer:
        "Approximately 20 billion bytes, or about 20 GB using decimal units."
    },
    {
      question:
        "What is the difference between model width and depth?",
      answer:
        "Width is primarily the hidden dimension, while depth is the number of stacked Transformer blocks."
    },
    {
      question:
        "Approximately how many parameters are in the four main attention projections when d_model = 1024?",
      answer:
        "Approximately 4 × 1024² = 4,194,304 parameters, ignoring biases and implementation details."
    },
    {
      question:
        "Why does context length affect attention computation?",
      answer:
        "Standard self-attention creates an approximately T × T interaction matrix."
    },
    {
      question:
        "Why is training memory larger than raw weight memory?",
      answer:
        "Training may require gradients, optimizer states, activations, temporary buffers, and communication memory."
    },
    {
      question:
        "Why can quantization reduce inference memory?",
      answer:
        "Lower-precision representations require fewer bytes per parameter."
    }
  ],

  codingExercises: [
    {
      title: "Parameter Memory Calculator",
      difficulty: "Easy",
      task:
        "Create a Python calculator that estimates raw weight memory for a specified parameter count and precision."
    },
    {
      title: "Transformer Parameter Estimator",
      difficulty: "Medium",
      task:
        "Estimate attention, FFN, embedding, and total block parameters from model dimensions."
    },
    {
      title: "Scaling Comparison",
      difficulty: "Medium",
      task:
        "Compare approximate parameter counts for models with different widths and depths."
    },
    {
      title: "Context Compute Estimator",
      difficulty: "Medium",
      task:
        "Calculate T² attention interaction counts for multiple context lengths."
    },
    {
      title: "Training Token Budget",
      difficulty: "Easy",
      task:
        "Build a program that estimates total tokens processed from steps, batch size, and sequence length."
    }
  ],

  architectureExercises: [
    {
      title: "Draw a Transformer Parameter Map",
      task:
        "Label where parameters exist in embeddings, attention projections, FFN layers, normalization, and output projection."
    },
    {
      title: "Memory Breakdown",
      task:
        "Draw a diagram showing weights, gradients, optimizer states, activations, and temporary memory during training."
    },
    {
      title: "Scaling Architecture",
      task:
        "Create a diagram showing how increasing width, depth, vocabulary, and context changes different system requirements."
    },
    {
      title: "Distributed LLM",
      task:
        "Design a conceptual multi-GPU architecture showing how a large model can be distributed across devices."
    }
  ],

  comparisonTables: [
    {
      title: "Dimensions of LLM Scale",
      headers: ["Dimension", "What increases"],
      rows: [
        ["Parameters", "Learned numerical capacity"],
        ["Depth", "Number of transformation stages"],
        ["Width", "Representation dimension"],
        ["Vocabulary", "Embedding/output vocabulary space"],
        ["Context", "Available token information"],
        ["Training tokens", "Amount of optimization exposure"]
      ]
    },
    {
      title: "Memory Categories",
      headers: ["Memory", "Training", "Inference"],
      rows: [
        ["Weights", "Yes", "Yes"],
        ["Gradients", "Yes", "No"],
        ["Optimizer state", "Often yes", "No"],
        ["Activations", "Yes", "Some runtime activations"],
        ["KV cache", "Not the primary training structure", "Yes during autoregressive generation"]
      ]
    }
  ],

  commonMistakes: [
    "Confusing parameter count with storage size.",
    "Estimating total training memory from weights alone.",
    "Ignoring vocabulary embedding parameters.",
    "Ignoring FFN parameters when estimating Transformer size.",
    "Assuming more parameters always means better results.",
    "Confusing FLOPs with FLOP/s.",
    "Confusing throughput with latency.",
    "Ignoring activation memory during training.",
    "Ignoring KV-cache memory during long-context inference.",
    "Assuming quantization has no quality tradeoffs.",
    "Treating scaling relationships as exact universal formulas."
  ],

  summary: [
    "LLM scale includes parameters, data, context, compute, and memory.",
    "Parameters are learned numerical values optimized during training.",
    "Model width corresponds largely to hidden dimension, while depth corresponds to the number of Transformer blocks.",
    "Attention and FFN layers contribute major portions of Transformer parameters.",
    "Vocabulary size affects embedding and output-projection parameters.",
    "Weight memory depends on parameter count and numerical precision.",
    "Training memory also includes gradients, optimizer states, activations, and temporary buffers.",
    "Context length increases attention interactions and inference memory requirements.",
    "Quantization can reduce model memory by using lower-precision representations.",
    "Throughput and latency measure different aspects of system performance.",
    "Large-scale models often require distributed hardware and careful memory management.",
    "Model size should be considered together with training data and compute."
  ],

  keyTakeaways: [
    "Parameter count = number of learned values.",
    "Width = hidden representation size.",
    "Depth = number of Transformer blocks.",
    "Attention ≈ 4d_model² parameters.",
    "FFN ≈ 2d_model d_ff parameters.",
    "Weight memory depends on precision.",
    "Training requires more memory than weights alone.",
    "Context increases attention and KV-cache requirements.",
    "Scaling requires balancing model size, data, compute, and memory.",
    "Bigger is not automatically better for every application."
  ],

  visualReferences: [
    {
      title: "Attention Is All You Need",
      url: "https://arxiv.org/abs/1706.03762",
      description:
        "Original Transformer architecture."
    },
    {
      title: "Training Compute-Optimal Large Language Models",
      url: "https://arxiv.org/abs/2203.15556",
      description:
        "Research on compute-optimal scaling of language models."
    },
    {
      title: "Hugging Face Transformers Documentation",
      url: "https://huggingface.co/docs/transformers/",
      description:
        "Practical Transformer model documentation."
    },
    {
      title: "PyTorch Distributed Documentation",
      url: "https://pytorch.org/docs/stable/distributed.html",
      description:
        "Documentation for distributed deep-learning computation."
    }
  ]
};

export default lesson14;

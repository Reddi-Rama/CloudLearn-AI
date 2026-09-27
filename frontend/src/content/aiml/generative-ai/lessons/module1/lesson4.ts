const lesson4 = {
  id: "lesson4",
  moduleId: "module1",
  lessonNumber: 4,

  title: "Generative AI Training, Data & Compute",
  subtitle:
    "Understand how generative models are trained, how data becomes training examples, how neural networks learn, and why compute is central to modern AI.",

  description:
    "This lesson explains the complete training pipeline behind Generative AI systems. It covers data preparation, datasets, preprocessing, tokenization, batching, epochs, forward propagation, loss functions, gradients, backpropagation, optimization, checkpoints, accelerators, distributed training, scaling, evaluation, and the difference between training and inference.",

  estimatedTime: "120–150 min",
  difficulty: "Intermediate",

  learningObjectives: [
    "Understand the complete lifecycle of training a generative model.",
    "Explain why data quality is critical to generative AI.",
    "Understand data collection, cleaning, filtering, deduplication, and preprocessing.",
    "Understand training examples, batches, epochs, and iterations.",
    "Explain the forward pass.",
    "Explain loss functions and training objectives.",
    "Understand gradients and backpropagation.",
    "Understand how optimizers update neural-network parameters.",
    "Understand learning rate and its importance.",
    "Understand checkpoints and experiment tracking.",
    "Understand the role of GPUs and other accelerators.",
    "Understand distributed and parallel training at a high level.",
    "Understand compute, memory, throughput, and latency.",
    "Understand training evaluation and validation.",
    "Understand overfitting and underfitting.",
    "Understand the difference between pretraining, fine-tuning, and inference.",
    "Understand why large generative models require substantial infrastructure."
  ],

  sections: [
    {
      heading: "1. The Complete Training Lifecycle",
      content: [
        "Training a Generative AI model is a pipeline rather than a single operation.",
        "The process begins with collecting or obtaining data and continues through cleaning, filtering, transformation, representation, batching, model computation, loss calculation, gradient computation, parameter updates, evaluation, checkpointing, and repeated training iterations.",
        "The quality of the final model depends on interactions between data, architecture, objective, optimization, compute, and evaluation."
      ],
      process: [
        "Data collection",
        "Data cleaning",
        "Data filtering",
        "Data preprocessing",
        "Representation / tokenization",
        "Dataset construction",
        "Batching",
        "Forward pass",
        "Loss calculation",
        "Backpropagation",
        "Parameter update",
        "Evaluation",
        "Checkpointing",
        "Repeat"
      ]
    },

    {
      heading: "2. Why Data Is So Important",
      content: [
        "A generative model learns from examples. Therefore, the data used during training strongly influences what the model can learn.",
        "If training data contains useful patterns, the model has an opportunity to learn them. If the data contains excessive noise, duplication, errors, or undesirable patterns, those characteristics can also influence training.",
        "A larger dataset is not automatically a better dataset. Data quality, diversity, relevance, coverage, and preprocessing all matter."
      ],
      classificationTree: [
        "Training Data Quality",
        "├── Relevance",
        "├── Accuracy",
        "├── Diversity",
        "├── Coverage",
        "├── Consistency",
        "├── Cleanliness",
        "├── Deduplication",
        "├── Appropriate filtering",
        "└── Representation"
      ]
    },

    {
      heading: "3. Data Pipeline",
      content: [
        "Before data reaches a neural network, it commonly passes through multiple preparation stages.",
        "The exact pipeline depends on the modality and project requirements.",
        "Text, image, audio, and video datasets require different preprocessing strategies."
      ],
      process: [
        "Raw data",
        "Quality inspection",
        "Cleaning",
        "Filtering",
        "Deduplication",
        "Normalization / transformation",
        "Representation",
        "Training examples",
        "Dataset storage"
      ]
    },

    {
      heading: "4. Data Cleaning",
      content: [
        "Data cleaning removes or handles problematic examples.",
        "For text data, cleaning can involve handling malformed records, corrupted text, unwanted markup, duplicate content, and other dataset-specific problems.",
        "For images, cleaning can involve detecting corrupted files, unsuitable dimensions, invalid metadata, or inappropriate samples.",
        "Cleaning should be designed according to the purpose of the model rather than applying arbitrary transformations."
      ]
    },

    {
      heading: "5. Data Filtering",
      content: [
        "Filtering determines which examples should remain in the training corpus.",
        "A filtering system may consider language, quality, relevance, duplication, format, metadata, or other project-specific criteria.",
        "Filtering is especially important for large datasets because even a small percentage of unwanted data can represent a very large number of examples."
      ],
      classificationTree: [
        "Filtering",
        "├── Quality filtering",
        "├── Relevance filtering",
        "├── Format filtering",
        "├── Duplicate filtering",
        "├── Language filtering",
        "├── Metadata filtering",
        "└── Project-specific filtering"
      ]
    },

    {
      heading: "6. Deduplication",
      content: [
        "Duplicate examples can cause the model to see the same information repeatedly.",
        "Deduplication attempts to reduce unnecessary repetition.",
        "Exact duplicates are relatively straightforward to identify using hashes or exact comparisons. Near-duplicate detection is more difficult because two examples may contain the same information with small changes.",
        "Deduplication can improve the effective diversity of a dataset and can also reduce certain risks associated with repeated examples."
      ]
    },

    {
      heading: "7. Data Diversity",
      content: [
        "A generative model needs exposure to a useful range of examples.",
        "If a training dataset represents only a narrow slice of the target domain, the model may learn a narrow distribution.",
        "Diversity can involve topics, writing styles, visual appearances, languages, structures, environments, and other factors depending on the task."
      ]
    },

    {
      heading: "8. Training Data and Generalization",
      content: [
        "The purpose of training is not merely to reproduce the training dataset.",
        "A useful model should learn patterns that allow it to handle new inputs and generate outputs beyond exact training examples.",
        "This is the concept of generalization.",
        "The relationship between training performance and unseen-data performance is central to machine learning."
      ],
      classificationTree: [
        "Learning Behavior",
        "├── Underfitting",
        "│   └── Model has not learned enough useful structure",
        "├── Appropriate generalization",
        "│   └── Model captures useful patterns",
        "└── Overfitting",
        "    └── Model becomes too specialized to training data"
      ]
    },

    {
      heading: "9. Dataset Splits",
      content: [
        "Machine-learning workflows often separate data into different subsets for different purposes.",
        "A training set is used to optimize model parameters. Validation data can be used during development to compare configurations and detect issues. A test set can provide a final evaluation under a controlled methodology.",
        "The exact splitting strategy depends on the project."
      ],
      table: [
        {
          split: "Training",
          purpose: "Used to learn model parameters"
        },
        {
          split: "Validation",
          purpose: "Used for development and model-selection decisions"
        },
        {
          split: "Test",
          purpose: "Used for final evaluation under the chosen methodology"
        }
      ]
    },

    {
      heading: "10. Training Example",
      content: [
        "A training example is one unit of data presented to the learning system.",
        "For language modeling, one example can consist of a sequence of tokens.",
        "For image generation, an example may be an image or an image-condition pair.",
        "For instruction tuning, an example may contain an instruction, context, and desired response."
      ]
    },

    {
      heading: "11. Tokenization in Training",
      content: [
        "Language models cannot directly perform neural-network calculations on ordinary text strings.",
        "A tokenizer converts text into tokens, and tokens are represented by numerical IDs.",
        "The training pipeline then constructs sequences from those token IDs.",
        "Tokenization affects sequence length, computational cost, vocabulary behavior, and how information is represented."
      ],
      process: [
        "Raw text",
        "Tokenizer",
        "Tokens",
        "Token IDs",
        "Sequences",
        "Training batches"
      ]
    },

    {
      heading: "12. Sequence Construction",
      content: [
        "After tokenization, text data must be arranged into sequences suitable for training.",
        "A language-model training example can be constructed so that the model learns to predict later tokens from earlier tokens.",
        "The exact sequence construction strategy depends on the model objective and training system."
      ],
      example: {
        input: "Generative AI is changing software development",
        tokens: [
          "Generative",
          "AI",
          "is",
          "changing",
          "software",
          "development"
        ],
        trainingIdea:
          "Use earlier tokens as context and later tokens as prediction targets."
      }
    },

    {
      heading: "13. Batch",
      content: [
        "A batch is a group of training examples processed together during one forward and backward computation.",
        "Processing examples in batches allows modern hardware to perform parallel numerical operations efficiently.",
        "Batch size is therefore an important training configuration."
      ],
      formulas: [
        "Batch = {x_1, x_2, ..., x_B}"
      ]
    },

    {
      heading: "14. Batch Size",
      content: [
        "Batch size is the number of examples processed together.",
        "A larger batch can improve hardware utilization in some situations, but it also requires more memory.",
        "The effective batch size can sometimes be increased using gradient accumulation when the available hardware cannot fit the desired batch directly."
      ],
      table: [
        {
          batchSize: "Small",
          advantage: "Lower memory requirement",
          consideration: "More parameter-update steps may be needed"
        },
        {
          batchSize: "Large",
          advantage: "Efficient parallel computation",
          consideration: "Higher memory requirement"
        }
      ]
    },

    {
      heading: "15. Iteration / Training Step",
      content: [
        "A training step usually refers to processing one batch and using its loss to update model parameters.",
        "If a dataset contains many examples and the batch size is smaller than the dataset, multiple steps are required to process the dataset."
      ],
      formulas: [
        "Approximate steps per epoch = number of training examples / batch size"
      ]
    },

    {
      heading: "16. Epoch",
      content: [
        "An epoch represents one complete pass through the training dataset under the chosen training procedure.",
        "Large-scale foundation-model training is often discussed in terms of tokens processed rather than only epochs because datasets can be enormous and training may involve complex data mixtures and repeated exposure."
      ]
    },

    {
      heading: "17. Forward Pass",
      content: [
        "The forward pass is the computation in which input data moves through the neural network to produce an output.",
        "For a language model, the output can include logits representing scores for possible next tokens.",
        "The forward pass does not by itself update the model parameters."
      ],
      process: [
        "Input batch",
        "Embedding / representation",
        "Neural-network layers",
        "Output representation",
        "Model predictions"
      ]
    },

    {
      heading: "18. Logits",
      content: [
        "A neural network often produces raw scores called logits before probabilities are calculated.",
        "For language modeling, the model can produce one score for each vocabulary token at each relevant sequence position.",
        "A probability transformation such as softmax can convert logits into a probability distribution."
      ],
      formulas: [
        "p_i = exp(z_i) / Σ_j exp(z_j)"
      ],
      contentAfterFormula: [
        "Here z_i represents a logit and p_i represents the resulting probability for candidate i."
      ]
    },

    {
      heading: "19. Loss Function",
      content: [
        "The loss function measures how well the model's predictions match the training objective.",
        "Training attempts to adjust parameters so that the loss improves according to the chosen objective.",
        "Different generative architectures use different losses."
      ],
      classificationTree: [
        "Generative Training Objectives",
        "├── Language modeling loss",
        "├── Reconstruction loss",
        "├── Adversarial loss",
        "├── Denoising loss",
        "└── Task-specific objectives"
      ]
    },

    {
      heading: "20. Cross-Entropy for Language Modeling",
      content: [
        "For a classification-style next-token prediction objective, cross-entropy is commonly used.",
        "The loss penalizes the model when it assigns low probability to the correct target token.",
        "Repeated training teaches the model to assign higher probability to tokens that better match the training objective."
      ],
      formulas: [
        "L = -Σ_i y_i log(p_i)",
        "For one correct class: L = -log(p_correct)"
      ],
      contentAfterFormula: [
        "If the model assigns high probability to the correct target, the loss is smaller. If it assigns very low probability, the loss is larger."
      ]
    },

    {
      heading: "21. Example of Cross-Entropy Intuition",
      table: [
        {
         CorrectTokenProbability: "0.90",
          approximateLoss: "0.105",
          interpretation: "Strong prediction"
        },
        {
         CorrectTokenProbability: "0.50",
          approximateLoss: "0.693",
          interpretation: "Moderate prediction"
        },
        {
         CorrectTokenProbability: "0.10",
          approximateLoss: "2.303",
          interpretation: "Poor prediction"
        }
      ],
      contentAfterTable: [
        "These values illustrate the mathematical relationship between probability assigned to the correct target and negative log-likelihood."
      ]
    },

    {
      heading: "22. Gradient",
      content: [
        "A gradient describes how a function changes with respect to its parameters.",
        "In neural-network training, gradients indicate how model parameters should change to reduce the loss.",
        "The gradient is computed through differentiation and propagated through the network using backpropagation."
      ],
      formulas: [
        "∇_theta L(theta)"
      ]
    },

    {
      heading: "23. Backpropagation",
      content: [
        "Backpropagation is the algorithmic process used to efficiently compute gradients of the loss with respect to neural-network parameters.",
        "It applies the chain rule of calculus through the computational graph.",
        "Backpropagation does not itself decide how parameters should be updated. It provides gradients; an optimization algorithm uses those gradients to update parameters."
      ],
      process: [
        "Forward pass",
        "Calculate loss",
        "Start from loss",
        "Apply chain rule backward",
        "Calculate parameter gradients",
        "Pass gradients to optimizer"
      ]
    },

    {
      heading: "24. Gradient Descent",
      content: [
        "Gradient descent updates parameters in the direction that reduces the loss.",
        "The simplest update rule subtracts a scaled gradient from the current parameters.",
        "The scaling factor is the learning rate."
      ],
      formulas: [
        "theta_new = theta_old - eta × ∇_theta L(theta)"
      ],
      contentAfterFormula: [
        "Here eta represents the learning rate."
      ]
    },

    {
      heading: "25. Learning Rate",
      content: [
        "The learning rate controls how large parameter updates are during optimization.",
        "If the learning rate is too large, training can become unstable or overshoot useful parameter regions.",
        "If it is too small, training can become extremely slow.",
        "Learning-rate schedules can change the learning rate during training."
      ],
      classificationTree: [
        "Learning Rate",
        "├── Too high",
        "│   ├── Instability",
        "│   └── Overshooting",
        "├── Appropriate",
        "│   └── Efficient optimization",
        "└── Too low",
        "    ├── Slow learning",
        "    └── Excessive training time"
      ]
    },

    {
      heading: "26. Optimizers",
      content: [
        "An optimizer determines how model parameters are updated using gradients.",
        "Simple gradient descent is the conceptual foundation. Practical deep-learning systems often use more sophisticated optimizers that maintain additional information about the gradient history.",
        "The optimizer, learning rate, regularization, and other hyperparameters interact strongly."
      ],
      table: [
        {
          optimizer: "SGD",
          idea: "Gradient-based parameter updates"
        },
        {
          optimizer: "Momentum-based methods",
          idea: "Use information from previous gradients"
        },
        {
          optimizer: "Adam-style methods",
          idea: "Adapt updates using gradient statistics"
        }
      ]
    },

    {
      heading: "27. Complete Neural Training Loop",
      process: [
        "Load batch",
        "Run forward pass",
        "Calculate loss",
        "Clear or manage previous gradients",
        "Run backward pass",
        "Compute gradients",
        "Optimizer updates parameters",
        "Record metrics",
        "Repeat"
      ]
    },

    {
      heading: "28. Parameters vs Hyperparameters",
      table: [
        {
          type: "Parameters",
          meaning: "Values learned during training",
          examples: "Weights and biases"
        },
        {
          type: "Hyperparameters",
          meaning: "Configuration values chosen by the training process designer",
          examples: "Learning rate, batch size, number of layers"
        }
      ]
    },

    {
      heading: "29. Model Parameters",
      content: [
        "Neural-network parameters are the learned numerical values that determine how the model transforms inputs.",
        "Modern foundation models can contain extremely large numbers of parameters.",
        "Parameter count alone does not completely determine model quality. Architecture, data, objective, training procedure, and inference behavior also matter."
      ]
    },

    {
      heading: "30. Why Large Models Need Large Compute",
      content: [
        "Neural-network training involves enormous numbers of numerical operations.",
        "Large models contain many parameters, and training requires repeatedly processing large datasets through those parameters.",
        "The combination of model size, training data, sequence length, batch size, and number of optimization steps can create substantial computational requirements."
      ],
      classificationTree: [
        "Compute Requirements",
        "├── Model parameters",
        "├── Training tokens / examples",
        "├── Sequence length",
        "├── Batch size",
        "├── Number of training steps",
        "├── Forward computation",
        "├── Backward computation",
        "└── Optimization overhead"
      ]
    },

    {
      heading: "31. CPU vs GPU",
      content: [
        "CPUs are general-purpose processors designed for a broad range of tasks.",
        "GPUs contain many computational units designed to perform large amounts of parallel numerical work efficiently.",
        "Deep-learning workloads contain matrix and tensor operations that can benefit substantially from GPU acceleration.",
        "Specialized AI accelerators can also be used for training and inference."
      ],
      table: [
        {
          hardware: "CPU",
          strength: "General-purpose computation",
          commonAIUse: "Data processing, orchestration, smaller workloads"
        },
        {
          hardware: "GPU",
          strength: "Highly parallel numerical computation",
          commonAIUse: "Deep-learning training and inference"
        },
        {
          hardware: "Specialized accelerator",
          strength: "AI-specific optimized computation",
          commonAIUse: "Large-scale training or inference"
        }
      ]
    },

    {
      heading: "32. Matrix Computation",
      content: [
        "Neural networks rely heavily on operations involving vectors, matrices, and higher-dimensional tensors.",
        "For example, a simplified neural layer can be represented as a matrix multiplication followed by an activation function.",
        "GPUs are particularly effective at parallelizing these numerical operations."
      ],
      formulas: [
        "y = Wx + b"
      ],
      contentAfterFormula: [
        "Here W represents a parameter matrix, x the input vector, b the bias vector, and y the resulting output before any additional transformation."
      ]
    },

    {
      heading: "33. Memory Requirements",
      content: [
        "Training memory requirements include more than the model parameters.",
        "The system may need memory for parameters, gradients, optimizer states, activations, input batches, temporary tensors, and other runtime structures.",
        "This is why a model that technically contains a certain number of parameters may still require considerably more memory during training."
      ],
      classificationTree: [
        "Training Memory",
        "├── Model parameters",
        "├── Gradients",
        "├── Optimizer states",
        "├── Activations",
        "├── Input batches",
        "└── Temporary computation"
      ]
    },

    {
      heading: "34. Mixed Precision",
      content: [
        "Deep-learning systems can use numerical formats with different precision levels.",
        "Mixed-precision training uses suitable lower-precision operations where possible while maintaining sufficient numerical stability.",
        "This can improve memory efficiency and computational throughput on compatible hardware."
      ]
    },

    {
      heading: "35. Distributed Training",
      content: [
        "A model can become too large or training can become too slow for one accelerator.",
        "Distributed training uses multiple devices working together.",
        "Different parallelism strategies distribute different parts of the computation or model across devices."
      ],
      classificationTree: [
        "Distributed Training",
        "├── Data parallelism",
        "│   └── Replicate model, split batches",
        "├── Model parallelism",
        "│   └── Split model components",
        "├── Pipeline parallelism",
        "│   └── Split layers into stages",
        "└── Hybrid strategies",
        "    └── Combine multiple forms"
      ]
    },

    {
      heading: "36. Data Parallelism",
      content: [
        "In data parallelism, multiple devices maintain copies of the model while processing different portions of a batch.",
        "The gradients are then combined so that the model replicas can remain synchronized according to the training strategy."
      ],
      process: [
        "Global batch",
        "Split batch",
        "GPU 1 → forward/backward",
        "GPU 2 → forward/backward",
        "GPU 3 → forward/backward",
        "GPU 4 → forward/backward",
        "Combine gradients",
        "Update synchronized parameters"
      ]
    },

    {
      heading: "37. Model Parallelism",
      content: [
        "Model parallelism divides the model itself across devices.",
        "This is useful when the entire model or its intermediate computation cannot fit efficiently on one device.",
        "Large-scale models can use combinations of model, tensor, and pipeline parallelism."
      ]
    },

    {
      heading: "38. Throughput",
      content: [
        "Throughput measures how much work a system can process over a period of time.",
        "For language-model training, useful measures can include tokens processed per second or examples processed per second.",
        "Higher throughput can reduce training time, but throughput should be considered together with training stability and final model quality."
      ],
      formulas: [
        "Throughput = processed work / time"
      ]
    },

    {
      heading: "39. Training Compute vs Inference Compute",
      table: [
        {
          stage: "Training",
          characteristics: "Forward pass + backward pass + parameter updates",
          objective: "Learn parameters"
        },
        {
          stage: "Inference",
          characteristics: "Forward computation and generation",
          objective: "Produce output using trained parameters"
        }
      ],
      contentAfterTable: [
        "Training is generally much more computationally intensive because gradients and parameter updates must be computed."
      ]
    },

    {
      heading: "40. Checkpoints",
      content: [
        "A checkpoint is a saved representation of the model's training state.",
        "Checkpoints can contain model parameters and, depending on the training system, optimizer state, scheduler state, training progress, and other information.",
        "Checkpoints allow training to resume after interruption and allow developers to evaluate different stages of training."
      ],
      process: [
        "Training begins",
        "Optimization progresses",
        "Save checkpoint",
        "Continue training",
        "Evaluate checkpoint",
        "Save later checkpoint",
        "Select or continue"
      ]
    },

    {
      heading: "41. Experiment Tracking",
      content: [
        "Training a model involves many configuration choices.",
        "Useful experiment tracking records parameters, datasets or data versions, metrics, checkpoints, code versions, hardware configuration, and other relevant information.",
        "Without tracking, it becomes difficult to reproduce or compare experiments."
      ]
    },

    {
      heading: "42. Evaluation During Training",
      content: [
        "Training loss alone is not enough to understand model quality.",
        "A model can achieve a lower training loss while developing undesirable behavior or failing to generalize.",
        "Evaluation can therefore include validation loss, task-specific metrics, human evaluation, generation-quality analysis, robustness tests, and other methods."
      ],
      classificationTree: [
        "Model Evaluation",
        "├── Training metrics",
        "├── Validation metrics",
        "├── Task metrics",
        "├── Generation quality",
        "├── Robustness",
        "├── Safety evaluation",
        "└── Human evaluation"
      ]
    },

    {
      heading: "43. Overfitting",
      content: [
        "Overfitting occurs when a model becomes too specialized to training data and does not generalize appropriately.",
        "In generative systems, this can appear as excessive similarity to training examples or degraded performance on new distributions.",
        "The appropriate evaluation strategy depends heavily on the application."
      ]
    },

    {
      heading: "44. Underfitting",
      content: [
        "Underfitting occurs when the model or training process has not captured enough useful structure from the data.",
        "The model may perform poorly on both training examples and unseen examples.",
        "Possible causes include insufficient model capacity, inadequate training, poor data representation, or unsuitable optimization settings."
      ]
    },

    {
      heading: "45. Pretraining",
      content: [
        "Pretraining is a large-scale learning stage in which a model learns broad patterns from a large dataset using a general objective.",
        "For language models, pretraining can involve predicting tokens across large text corpora.",
        "The resulting model can then serve as a foundation for downstream adaptation."
      ],
      process: [
        "Large dataset",
        "General objective",
        "Large-scale optimization",
        "Learned parameters",
        "Foundation model"
      ]
    },

    {
      heading: "46. Fine-Tuning",
      content: [
        "Fine-tuning adapts an existing pretrained model using additional training data and a task-specific objective or distribution.",
        "Fine-tuning can specialize model behavior without requiring training a new foundation model from scratch.",
        "Modern workflows also use parameter-efficient approaches that update only a subset or additional parameter structures."
      ]
    },

    {
      heading: "47. Parameter-Efficient Adaptation",
      content: [
        "Updating every parameter of a large model can be expensive.",
        "Parameter-efficient techniques attempt to adapt model behavior while training a much smaller number of parameters or additional components.",
        "Examples include adapter-style methods and low-rank adaptation approaches.",
        "These techniques become important later when studying practical LLM engineering."
      ]
    },

    {
      heading: "48. Training From Scratch vs Adaptation",
      table: [
        {
          approach: "Train from scratch",
          dataNeed: "Usually very large",
          computeNeed: "Very high",
          control: "High"
        },
        {
          approach: "Full fine-tuning",
          dataNeed: "Task/domain-specific data",
          computeNeed: "High",
          control: "High"
        },
        {
          approach: "Parameter-efficient adaptation",
          dataNeed: "Task/domain-specific data",
          computeNeed: "Lower than full fine-tuning in many settings",
          control: "Task-specific"
        },
        {
          approach: "Prompting",
          dataNeed: "No parameter-training dataset required",
          computeNeed: "Inference compute",
          control: "Context-based"
        }
      ]
    },

    {
      heading: "49. Why Training Is Expensive",
      content: [
        "Training cost comes from the combination of model computation, data volume, sequence length, optimization steps, hardware, memory movement, communication between devices, storage, and engineering infrastructure.",
        "Large-scale training can require many accelerators operating for long periods.",
        "The actual cost of a project also includes experimentation, failed runs, evaluation, storage, and deployment preparation."
      ]
    },

    {
      heading: "50. Training Efficiency",
      classificationTree: [
        "Training Efficiency",
        "├── Better data pipeline",
        "├── Efficient batching",
        "├── Hardware acceleration",
        "├── Mixed precision",
        "├── Distributed training",
        "├── Memory optimization",
        "├── Efficient optimizers",
        "├── Checkpoint strategy",
        "└── Experiment tracking"
      ]
    },

    {
      heading: "51. Complete Training Loop",
      process: [
        "Prepare dataset",
        "Create batches",
        "Load batch",
        "Forward pass",
        "Calculate predictions",
        "Calculate loss",
        "Backpropagate",
        "Compute gradients",
        "Optimizer update",
        "Record metrics",
        "Evaluate",
        "Checkpoint",
        "Repeat"
      ]
    },

    {
      heading: "52. Mathematical View of Training",
      content: [
        "Training can be viewed as an optimization problem in which model parameters are adjusted to minimize an objective.",
        "The loss function provides the quantity being optimized, while gradients describe how the loss changes with respect to the parameters."
      ],
      formulas: [
        "theta* = argmin_theta L(theta; D)",
        "g = ∇_theta L(theta; D)",
        "theta_(t+1) = theta_t - eta g_t"
      ]
    },

    {
      heading: "53. A Simple Learning Example",
      content: [
        "Imagine a model with one parameter theta and a simple loss function.",
        "The model begins with an initial value. The gradient indicates which direction changes the loss. The optimizer then updates theta.",
        "Real neural networks contain millions or billions of parameters, but the underlying optimization idea is similar."
      ],
      formulas: [
        "L(theta) = (theta - 5)^2",
        "dL/dtheta = 2(theta - 5)"
      ]
    },

    {
      heading: "54. Why Gradients Matter",
      content: [
        "Without a useful learning signal, the optimizer would not know how to change parameters.",
        "Gradients provide local information about how changing parameters affects the loss.",
        "Backpropagation makes it computationally practical to calculate gradients across deep networks."
      ]
    },

    {
      heading: "55. Training Stability",
      content: [
        "Training large neural networks can be sensitive to optimization configuration.",
        "Problems can include unstable loss, exploding gradients, vanishing gradients, unsuitable learning rates, numerical precision issues, poor data, and hardware or communication problems.",
        "Modern training systems use many techniques to make optimization more stable."
      ]
    },

    {
      heading: "56. Data Quality vs Model Size",
      content: [
        "A larger model does not automatically compensate for poor data.",
        "Model quality depends on interactions between architecture, data, objective, training process, and evaluation.",
        "This is why modern AI engineering treats data engineering as a major part of model development."
      ]
    },

    {
      heading: "57. Compute Scaling",
      content: [
        "As model size and dataset size increase, the amount of computation required can grow dramatically.",
        "Large-scale training therefore becomes an engineering problem involving hardware, distributed systems, networking, storage, software frameworks, and monitoring.",
        "Scaling requires understanding both the mathematical workload and the physical infrastructure executing it."
      ]
    },

    {
      heading: "58. Training Infrastructure",
      classificationTree: [
        "Training Infrastructure",
        "├── Data storage",
        "├── Data preprocessing",
        "├── Compute cluster",
        "│   ├── GPUs",
        "│   └── Other accelerators",
        "├── High-speed networking",
        "├── Distributed training framework",
        "├── Checkpoint storage",
        "├── Experiment tracking",
        "└── Monitoring"
      ]
    },

    {
      heading: "59. Training Monitoring",
      content: [
        "Long training jobs must be monitored.",
        "Useful signals can include training loss, validation metrics, learning rate, gradient statistics, throughput, memory utilization, hardware utilization, checkpoint progress, and system failures.",
        "Monitoring helps engineers distinguish model-learning problems from infrastructure problems."
      ]
    },

    {
      heading: "60. Training vs Inference — Final Comparison",
      table: [
        {
          aspect: "Training",
          description: "Learns or adapts parameters",
          gradientCalculation: "Yes",
          parameterUpdates: "Yes",
          typicalCost: "High"
        },
        {
          aspect: "Inference",
          description: "Uses trained parameters to produce output",
          gradientCalculation: "Normally no",
          parameterUpdates: "Normally no",
          typicalCost: "Lower per operation, but can become large at scale"
        }
      ]
    },

    {
      heading: "61. Practical Generative AI Training Pipeline",
      process: [
        "Define model objective",
        "Collect data",
        "Clean data",
        "Filter data",
        "Deduplicate",
        "Construct training examples",
        "Tokenize or encode",
        "Create dataset",
        "Configure model",
        "Configure optimizer",
        "Configure training schedule",
        "Allocate compute",
        "Train",
        "Evaluate",
        "Checkpoint",
        "Analyze results",
        "Repeat or stop"
      ]
    },

    {
      heading: "62. Common Mistakes",
      content: [
        "Mistake 1: Thinking training means simply uploading data to a model.",
        "Mistake 2: Ignoring data quality.",
        "Mistake 3: Confusing batch size with dataset size.",
        "Mistake 4: Confusing an epoch with a single training step.",
        "Mistake 5: Thinking backpropagation directly updates parameters.",
        "Mistake 6: Ignoring learning rate.",
        "Mistake 7: Assuming more parameters automatically produce a better model.",
        "Mistake 8: Ignoring validation and evaluation.",
        "Mistake 9: Assuming GPUs are only useful because they are faster CPUs.",
        "Mistake 10: Forgetting that training requires memory for more than just model parameters.",
        "Mistake 11: Treating training loss as the only measure of model quality.",
        "Mistake 12: Assuming inference and training have the same computational requirements."
      ]
    },

    {
      heading: "63. Interview Questions",
      content: [
        "What are the major stages of a Generative AI training pipeline?",
        "Why is data quality important?",
        "What is deduplication?",
        "What is a training example?",
        "What is a batch?",
        "What is an epoch?",
        "What is a training step?",
        "What happens during a forward pass?",
        "What are logits?",
        "What is cross-entropy?",
        "What is a gradient?",
        "What is backpropagation?",
        "What is gradient descent?",
        "What is the learning rate?",
        "What is an optimizer?",
        "What is the difference between parameters and hyperparameters?",
        "Why are GPUs useful for deep learning?",
        "What is distributed training?",
        "What is data parallelism?",
        "What is model parallelism?",
        "What is a checkpoint?",
        "What is pretraining?",
        "What is fine-tuning?",
        "What is parameter-efficient adaptation?",
        "Why is training much more expensive than ordinary inference?"
      ]
    }
  ],

  formulas: [
    "y = Wx + b",
    "p_i = exp(z_i) / Σ_j exp(z_j)",
    "L = -Σ_i y_i log(p_i)",
    "L = -log(p_correct)",
    "theta_new = theta_old - eta × ∇_theta L(theta)",
    "theta* = argmin_theta L(theta; D)",
    "Throughput = processed work / time",
    "Approximate steps per epoch = dataset size / batch size"
  ],

  codeExamples: [
    {
      title: "Tiny Gradient Descent Example",
      language: "python",
      description:
        "A minimal implementation showing the basic idea of gradient descent.",
      code: "theta = 0.0\nlearning_rate = 0.1\n\nfor step in range(20):\n    # L(theta) = (theta - 5)^2\n    gradient = 2 * (theta - 5)\n    theta = theta - learning_rate * gradient\n\n    loss = (theta - 5) ** 2\n    print(f'step={step:02d}, theta={theta:.4f}, loss={loss:.6f}')"
    },
    {
      title: "Simple Batch Processing",
      language: "python",
      description:
        "Demonstrates how a dataset can be divided into batches.",
      code: "data = list(range(1, 21))\nbatch_size = 5\n\nfor start in range(0, len(data), batch_size):\n    batch = data[start:start + batch_size]\n    print('Batch:', batch)"
    },
    {
      title: "Simple Cross-Entropy Calculation",
      language: "python",
      description:
        "Calculate the negative log probability of a correct target.",
      code: "import math\n\nprobability_of_correct_token = 0.8\nloss = -math.log(probability_of_correct_token)\n\nprint('Probability:', probability_of_correct_token)\nprint('Loss:', loss)"
    },
    {
      title: "Toy Training Loop",
      language: "python",
      description:
        "Shows the conceptual structure of a training loop.",
      code: "for epoch in range(3):\n    for batch in range(5):\n        print('Forward pass')\n        print('Calculate loss')\n        print('Backward pass')\n        print('Update parameters')\n\n    print('Epoch completed:', epoch + 1)"
    }
  ],

  mathIntuition: [
    {
      concept: "Forward pass",
      explanation:
        "The model transforms an input through its layers to produce predictions."
    },
    {
      concept: "Loss",
      explanation:
        "Loss converts the difference between desired and predicted behavior into a numerical optimization objective."
    },
    {
      concept: "Gradient",
      explanation:
        "The gradient tells the optimizer how the loss changes when model parameters change."
    },
    {
      concept: "Learning rate",
      explanation:
        "The learning rate determines the scale of parameter updates."
    },
    {
      concept: "Optimization",
      explanation:
        "Optimization repeatedly changes parameters to improve the selected objective."
    },
    {
      concept: "Scaling",
      explanation:
        "Large models and datasets require large amounts of computation, memory, and often distributed infrastructure."
    }
  ],

  exercises: [
    {
      question:
        "Draw the complete Generative AI training pipeline from raw data to a trained model.",
      difficulty: "Easy"
    },
    {
      question:
        "Explain why data quality can be more important than simply increasing dataset size.",
      difficulty: "Easy"
    },
    {
      question:
        "Explain batch, iteration, and epoch using a real-world analogy.",
      difficulty: "Easy"
    },
    {
      question:
        "Explain the difference between logits and probabilities.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain cross-entropy using the probability assigned to the correct token.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain backpropagation and gradient descent as separate concepts.",
      difficulty: "Medium"
    },
    {
      question:
        "Why can a large model require more memory during training than the memory required to store its parameters alone?",
      difficulty: "Medium"
    },
    {
      question:
        "Compare data parallelism and model parallelism.",
      difficulty: "Medium"
    },
    {
      question:
        "Design a training infrastructure for a hypothetical large language model.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Implement Gradient Descent",
      task:
        "Implement gradient descent for L(theta) = (theta - 10)^2.",
      requirements: [
        "Start theta at 0.",
        "Use a configurable learning rate.",
        "Run at least 20 steps.",
        "Print theta and loss at every step.",
        "Experiment with three different learning rates."
      ]
    },
    {
      title: "Build a Batch Generator",
      task:
        "Write a Python generator that yields batches from a dataset.",
      requirements: [
        "Accept any list.",
        "Accept configurable batch size.",
        "Handle the final incomplete batch.",
        "Print the number of batches."
      ]
    },
    {
      title: "Training Loop Simulator",
      task:
        "Build a small program that simulates epochs, batches, loss calculation, and parameter updates.",
      requirements: [
        "Use at least 5 epochs.",
        "Use at least 10 batches per epoch.",
        "Generate a simulated decreasing loss.",
        "Save the loss history.",
        "Print the best loss."
      ]
    },
    {
      title: "Compare Learning Rates",
      task:
        "Implement gradient descent with multiple learning rates and compare how quickly they approach the optimum.",
      requirements: [
        "Test at least three learning rates.",
        "Record the final parameter.",
        "Record the final loss.",
        "Explain which learning rates converge slowly or unstably."
      ]
    }
  ],

  summary: [
    "Generative AI training is a complete data, computation, optimization, and evaluation pipeline.",
    "Data must be collected, cleaned, filtered, deduplicated, represented, and organized into training examples.",
    "Batches allow multiple examples to be processed together.",
    "An epoch represents a complete pass through the training dataset under the selected training procedure.",
    "The forward pass produces model predictions.",
    "Loss measures performance according to the training objective.",
    "Backpropagation computes gradients through the network.",
    "Optimizers use gradients to update parameters.",
    "Learning rate controls the scale of parameter updates.",
    "GPUs and other accelerators are important because neural networks perform large amounts of parallel numerical computation.",
    "Large models may require distributed training across multiple devices.",
    "Training requires memory for parameters, gradients, activations, optimizer states, and other computation.",
    "Checkpoints preserve training state and enable recovery and evaluation.",
    "Pretraining learns broad capabilities, while fine-tuning adapts an existing model.",
    "Training and inference have fundamentally different computational workflows."
  ],

  keyTakeaways: [
    "Data is one of the foundations of model quality.",
    "Training is an iterative optimization process.",
    "Forward pass, loss, backpropagation, and optimization form the core learning loop.",
    "Parameters are learned; hyperparameters are configured.",
    "Compute and memory become major engineering constraints as models scale.",
    "Large-scale Generative AI requires both machine-learning knowledge and systems engineering.",
    "Understanding the training pipeline makes later LLM engineering topics much easier to reason about."
  ]
};

export default lesson4;

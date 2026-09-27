const lesson13 = {
  id: "lesson13",
  moduleId: "module2",
  lessonNumber: 13,

  title: "Pretraining, Fine-Tuning & Instruction Tuning",

  subtitle:
    "Understand how a general language model progresses from large-scale pretraining to task specialization and instruction-following behavior.",

  description:
    "Modern language models are commonly developed through multiple stages. Pretraining teaches broad statistical structure from large datasets, while later adaptation stages specialize the model for particular tasks, domains, formats, or interaction patterns.",

  estimatedTime: "4–5 hours",

  difficulty: "Advanced",

  learningObjectives: [
    "Understand the purpose of language-model pretraining.",
    "Understand next-token prediction as a pretraining objective.",
    "Understand pretrained model parameters.",
    "Understand the difference between pretraining and fine-tuning.",
    "Understand supervised fine-tuning.",
    "Understand instruction tuning.",
    "Understand task-specific fine-tuning.",
    "Understand domain adaptation.",
    "Understand parameter-efficient fine-tuning conceptually.",
    "Understand why fine-tuning requires fewer resources than training from scratch in many cases.",
    "Understand training data formats for instruction tuning.",
    "Understand loss masking in instruction-style datasets.",
    "Understand catastrophic forgetting.",
    "Understand evaluation across training stages.",
    "Understand the complete model-development lifecycle."
  ],

  sections: [
    {
      heading: "1. The Lifecycle of a Modern Language Model",

      content: [
        "A large language model is typically developed through multiple stages rather than being trained once for one narrow task.",
        "A general foundation model first learns broad statistical patterns from large-scale data.",
        "Later stages can adapt the model toward instructions, domains, formats, or application-specific behavior.",
        "The exact development pipeline differs between models, but the conceptual separation between broad pretraining and later adaptation is important."
      ],

      classificationTree: [
        "Language Model Development",
        "├── Pretraining",
        "│   └── Learn broad language/statistical structure",
        "├── Adaptation",
        "│   ├── Supervised fine-tuning",
        "│   ├── Instruction tuning",
        "│   └── Domain adaptation",
        "└── Application",
        "    ├── Prompting",
        "    ├── Retrieval",
        "    ├── Tools",
        "    └── Evaluation"
      ]
    },

    {
      heading: "2. What Is Pretraining?",

      content: [
        "Pretraining is the large-scale learning stage in which a model learns general patterns from a broad training corpus.",
        "For decoder-style language models, the central objective is usually autoregressive next-token prediction.",
        "The model learns relationships among tokens, syntax, semantics, patterns, and other statistical regularities present in its training data.",
        "Pretraining does not mean the model has been explicitly taught every downstream task."
      ],

      formulas: [
        "L_pretrain = −(1/T) Σₜ log P_θ(x_t | x_<t)"
      ]
    },

    {
      heading: "3. What Does the Model Learn During Pretraining?",

      content: [
        "The model learns parameter configurations that capture statistical regularities from the training distribution.",
        "These representations can support many downstream capabilities.",
        "The model is not simply storing a list of answers. Its parameters encode distributed numerical patterns learned through optimization."
      ],

      table: {
        headers: ["Pattern type", "Examples"],
        rows: [
          ["Lexical", "Token relationships"],
          ["Syntactic", "Sentence structure"],
          ["Semantic", "Meaning relationships"],
          ["Contextual", "Dependence on surrounding text"],
          ["Format", "Common document and code patterns"],
          ["Task patterns", "Patterns present in training data"]
        ]
      }
    },

    {
      heading: "4. Foundation Models",

      content: [
        "A foundation model is a broadly trained model that can serve as the starting point for multiple downstream applications.",
        "Its value comes from learning general representations and patterns that can later be adapted or used through prompting and application-level systems.",
        "A foundation model is therefore different from a model trained only for one narrow task."
      ],

      classificationTree: [
        "Foundation Model",
        "├── Broad pretraining",
        "├── General representations",
        "├── Multiple possible tasks",
        "└── Adaptation / application layer"
      ]
    },

    {
      heading: "5. Why Not Train Every Application From Scratch?",

      content: [
        "Training a large model from scratch requires enormous amounts of data, compute, engineering effort, and time.",
        "If a useful pretrained model already exists, adapting it can be substantially more efficient.",
        "Fine-tuning starts from parameters that already contain useful learned structure."
      ],

      comparisonTables: [
        {
          title: "Training From Scratch vs Fine-Tuning",
          headers: ["Property", "From scratch", "Fine-tuning"],
          rows: [
            ["Starting parameters", "New/random initialization", "Pretrained parameters"],
            ["Data requirement", "Usually very large", "Often much smaller"],
            ["Compute requirement", "Very high", "Usually lower"],
            ["Goal", "Learn broad model", "Adapt existing model"],
            ["Training duration", "Large", "Usually shorter"]
          ]
        }
      ]
    },

    {
      heading: "6. What Is Fine-Tuning?",

      content: [
        "Fine-tuning means continuing training from an existing pretrained model using a new dataset or objective.",
        "The pretrained parameters provide a strong initialization.",
        "Fine-tuning can specialize the model toward a task, domain, output format, or desired behavior."
      ],

      process: [
        "Pretrained model",
        "↓",
        "Task/domain dataset",
        "↓",
        "Continue optimization",
        "↓",
        "Adapted parameters",
        "↓",
        "Specialized model"
      ]
    },

    {
      heading: "7. Supervised Fine-Tuning",

      content: [
        "Supervised fine-tuning uses examples containing an input and a desired target output.",
        "The model is trained so that its predictions better match the provided target responses.",
        "This makes the model more suitable for a defined task or output style."
      ],

      table: {
        headers: ["Input", "Target"],
        rows: [
          ["Translate 'Hello' to French", "Bonjour"],
          ["Classify sentiment: 'Great product'", "Positive"],
          ["Summarize the passage", "Target summary"],
          ["Answer the question", "Target answer"]
        ]
      }
    },

    {
      heading: "8. Instruction Tuning",

      content: [
        "Instruction tuning is a form of supervised adaptation where examples are structured as instructions or tasks paired with desired responses.",
        "The goal is to improve the model's ability to interpret natural-language instructions and produce appropriate outputs.",
        "Instruction datasets can contain many different task types."
      ],

      classificationTree: [
        "Instruction Example",
        "├── Instruction",
        "├── Optional input/context",
        "└── Desired response"
      ],

      formulas: [
        "P(response | instruction, input)"
      ]
    },

    {
      heading: "9. Instruction Dataset Format",

      content: [
        "A simple instruction dataset can contain an instruction, optional contextual input, and a target response.",
        "The exact serialization depends on the model and training system."
      ],

      codeExamples: [
        {
          title: "Example Instruction Record",
          language: "json",
          code: `{
  "instruction": "Explain binary search.",
  "input": "Use a simple example.",
  "output": "Binary search repeatedly divides..."
}`
        }
      ]
    },

    {
      heading: "10. Chat-Style Training Data",

      content: [
        "Conversational models can be trained using structured message sequences.",
        "Messages may have roles such as system, user, and assistant.",
        "The model learns to generate appropriate assistant-side responses given the preceding context."
      ],

      table: {
        headers: ["Role", "Purpose"],
        rows: [
          ["System", "High-level behavior or instructions"],
          ["User", "Request or input"],
          ["Assistant", "Expected response"],
          ["Tool", "External operation/result when supported"]
        ]
      }
    },

    {
      heading: "11. Loss Masking in Instruction Tuning",

      content: [
        "Not every token in a training example necessarily needs to contribute equally to the optimization objective.",
        "A training pipeline may mask some tokens so that the loss focuses on the desired response portion.",
        "This is especially useful when prompts and responses are combined into one sequence."
      ],

      formulas: [
        "L = −Σᵢ mᵢ log P(xᵢ | x_<i)",
        "mᵢ = 1 for included targets",
        "mᵢ = 0 for ignored targets"
      ],

      process: [
        "Instruction + context + response",
        "↓",
        "Tokenize complete sequence",
        "↓",
        "Create loss mask",
        "↓",
        "Calculate loss on selected target tokens"
      ]
    },

    {
      heading: "12. Task-Specific Fine-Tuning",

      content: [
        "A pretrained model can be adapted to a specific task such as classification, extraction, summarization, or domain-specific generation.",
        "The training data and objective should match the behavior expected during deployment."
      ],

      table: {
        headers: ["Task", "Possible adaptation"],
        rows: [
          ["Classification", "Predict class labels"],
          ["Summarization", "Generate concise summaries"],
          ["Extraction", "Produce structured information"],
          ["Domain generation", "Generate domain-specific text"],
          ["Formatting", "Produce consistent structured output"]
        ]
      }
    },

    {
      heading: "13. Domain Adaptation",

      content: [
        "Domain adaptation specializes a model toward a particular field or distribution.",
        "Examples can include technical documentation, scientific text, legal-style documents, programming material, or organization-specific language.",
        "The goal is to improve usefulness within the target domain while preserving as much general capability as required."
      ]
    },

    {
      heading: "14. Continued Pretraining",

      content: [
        "A model can be further trained on additional domain-specific text using the original language-modeling objective.",
        "This is conceptually different from supervised instruction tuning because the model may continue learning from raw domain text rather than input-output instruction pairs."
      ],

      comparisonTables: [
        {
          title: "Continued Pretraining vs Instruction Tuning",
          headers: ["Property", "Continued pretraining", "Instruction tuning"],
          rows: [
            ["Typical data", "Domain text", "Instruction-response examples"],
            ["Objective", "Language modeling", "Desired task behavior"],
            ["Main goal", "Adapt domain knowledge/distribution", "Improve instruction following"],
            ["Labels required", "Usually no explicit task labels", "Target responses required"]
          ]
        }
      ]
    },

    {
      heading: "15. Parameter-Efficient Fine-Tuning",

      content: [
        "Updating every parameter of a large model can require substantial memory and compute.",
        "Parameter-efficient fine-tuning methods update only a relatively small number of trainable parameters while keeping most pretrained parameters fixed.",
        "This can make adaptation more practical for limited hardware."
      ],

      classificationTree: [
        "Parameter-Efficient Adaptation",
        "├── Freeze most base parameters",
        "├── Add/train small parameter sets",
        "└── Preserve pretrained knowledge"
      ]
    },

    {
      heading: "16. LoRA Concept",

      content: [
        "Low-Rank Adaptation, commonly called LoRA, represents an important parameter-efficient adaptation approach.",
        "Instead of directly updating a large weight matrix in full, the adaptation can be represented using smaller low-rank matrices.",
        "The base model weights can remain frozen while the smaller adaptation parameters are trained."
      ],

      formulas: [
        "W' = W + ΔW",
        "ΔW ≈ BA"
      ],

      contentAfterFormula: [
        "If B and A have lower rank than W, the number of trainable adaptation parameters can be much smaller than the number of parameters in the original matrix."
      ]
    },

    {
      heading: "17. Why Low-Rank Adaptation Helps",

      content: [
        "The central idea is to represent the task-specific parameter update using a compact parameterization.",
        "This reduces the number of parameters that need to receive gradients and optimizer state.",
        "The original model can therefore be reused with different lightweight adapters."
      ],

      table: {
        headers: ["Property", "Full fine-tuning", "Parameter-efficient adaptation"],
        rows: [
          ["Trainable parameters", "Most/all model parameters", "Small subset"],
          ["Optimizer memory", "High", "Lower"],
          ["Adapter portability", "Large model copy/state", "Small adapter possible"],
          ["Base model reuse", "Less lightweight", "Highly reusable"]
        ]
      }
    },

    {
      heading: "18. Catastrophic Forgetting",

      content: [
        "When a model is adapted aggressively to a narrow dataset, it can lose performance on capabilities or distributions that were useful before adaptation.",
        "This phenomenon is commonly discussed as catastrophic forgetting.",
        "The severity depends on the adaptation data, training objective, amount of updating, and other factors."
      ],

      classificationTree: [
        "Adaptation",
        "├── Desired specialization",
        "└── Potential unwanted effect",
        "    └── Loss of previously useful capabilities"
      ]
    },

    {
      heading: "19. Balancing General and Specialized Data",

      content: [
        "An adaptation pipeline may need to balance specialized examples with broader data depending on the desired outcome.",
        "The appropriate strategy depends on whether the objective is domain specialization, instruction following, or maintaining broad capabilities."
      ]
    },

    {
      heading: "20. Fine-Tuning Data Quality",

      content: [
        "Fine-tuning quality depends strongly on the quality of the adaptation dataset.",
        "Examples should be representative of the behavior expected during deployment.",
        "Inconsistent, contradictory, or low-quality targets can teach undesirable patterns."
      ],

      table: {
        headers: ["Data property", "Why it matters"],
        rows: [
          ["Correctness", "Targets should represent desired behavior"],
          ["Consistency", "Similar tasks should follow coherent conventions"],
          ["Coverage", "Important use cases should be represented"],
          ["Format quality", "Output structure should match deployment needs"],
          ["Diversity", "Avoid over-specializing to a tiny pattern set"]
        ]
      }
    },

    {
      heading: "21. Evaluation After Fine-Tuning",

      content: [
        "Fine-tuned models should be evaluated on both the target behavior and important general capabilities.",
        "A model can improve on the adaptation dataset while becoming worse on other tasks.",
        "Evaluation should therefore include appropriate held-out examples and relevant application tests."
      ],

      process: [
        "Base model",
        "↓",
        "Evaluate baseline",
        "↓",
        "Fine-tune",
        "↓",
        "Evaluate target task",
        "↓",
        "Evaluate general behavior",
        "↓",
        "Compare results"
      ]
    },

    {
      heading: "22. Complete Model Development Lifecycle",

      process: [
        "Large-scale data",
        "↓",
        "Pretraining",
        "↓",
        "Foundation model",
        "↓",
        "Domain adaptation / continued training",
        "↓",
        "Instruction tuning",
        "↓",
        "Evaluation",
        "↓",
        "Application integration",
        "↓",
        "Production monitoring"
      ]
    },

    {
      heading: "23. Pretraining vs Fine-Tuning vs Instruction Tuning",

      comparisonTables: [
        {
          title: "Model Training Stages",
          headers: [
            "Property",
            "Pretraining",
            "Fine-tuning",
            "Instruction tuning"
          ],
          rows: [
            [
              "Main goal",
              "Learn broad structure",
              "Specialize",
              "Improve instruction following"
            ],
            [
              "Typical data",
              "Large corpus",
              "Task/domain data",
              "Instruction-response data"
            ],
            [
              "Scale",
              "Very large",
              "Usually smaller",
              "Usually smaller"
            ],
            [
              "Objective",
              "Language modeling",
              "Task-specific/general adaptation",
              "Instruction-response behavior"
            ]
          ]
        }
      ]
    },

    {
      heading: "24. Training Stage Mental Model",

      classificationTree: [
        "Raw Data",
        "↓",
        "Pretraining",
        "↓",
        "Broad Model",
        "├── Continued pretraining",
        "├── Domain adaptation",
        "└── Instruction tuning",
        "↓",
        "Application-ready model",
        "↓",
        "Prompting + Retrieval + Tools"
      ]
    },

    {
      heading: "25. Common Misconceptions",

      content: [
        "Fine-tuning is not the same as training a model from scratch.",
        "Instruction tuning is not simply adding longer prompts.",
        "A fine-tuned model does not automatically retain every capability of the base model.",
        "More fine-tuning examples do not automatically guarantee better results.",
        "Parameter-efficient fine-tuning does not mean that the base model is completely unchanged conceptually; the adapter modifies how the model behaves.",
        "Domain adaptation and instruction tuning solve different problems.",
        "Evaluation should not rely only on the fine-tuning training set."
      ]
    },

    {
      heading: "26. Interview Questions",

      content: [
        "What is pretraining?",
        "What is a foundation model?",
        "What is fine-tuning?",
        "What is supervised fine-tuning?",
        "What is instruction tuning?",
        "What is continued pretraining?",
        "What is domain adaptation?",
        "What is parameter-efficient fine-tuning?",
        "What is LoRA?",
        "Why does LoRA reduce trainable parameters?",
        "What is catastrophic forgetting?",
        "Why is fine-tuning data quality important?",
        "Why should a fine-tuned model be evaluated against the base model?"
      ]
    }
  ],

  codeExamples: [
    {
      title: "Simple Instruction Dataset",
      language: "python",
      code: `dataset = [
    {
        "instruction": "Explain recursion.",
        "input": "Use a simple example.",
        "output": "Recursion is when a function..."
    },
    {
        "instruction": "Explain a stack.",
        "input": "",
        "output": "A stack is a LIFO data structure..."
    }
]

for example in dataset:
    print(example["instruction"])
    print(example["output"])
    print()`
    },

    {
      title: "Conceptual Loss Mask",
      language: "python",
      code: `tokens = [
    "Explain",
    "binary",
    "search",
    ":",
    "Binary",
    "search",
    "divides",
    "the",
    "search",
    "space."
]

# Example:
# 0 = ignore prompt token
# 1 = include response token

loss_mask = [
    0, 0, 0, 0,
    1, 1, 1, 1, 1, 1
]

for token, mask in zip(tokens, loss_mask):
    print(token, mask)`
    },

    {
      title: "Low-Rank Parameter Count",
      language: "python",
      code: `d_in = 4096
d_out = 4096
rank = 8

full_parameters = d_in * d_out

lora_parameters = (
    d_in * rank
    + rank * d_out
)

print("Full parameters:", full_parameters)
print("LoRA parameters:", lora_parameters)`
    }
  ],

  mathIntuition: [
    {
      concept: "Pretraining",
      intuition:
        "The model learns to assign probability to observed next tokens across a broad training distribution.",
      equation:
        "L_pretrain = −Σₜ log P(x_t | x_<t)"
    },
    {
      concept: "Fine-tuning",
      intuition:
        "A pretrained parameter configuration is further optimized using a new dataset or objective.",
      equation:
        "θ_adapted = Optimize(θ_pretrained, D_task)"
    },
    {
      concept: "LoRA",
      intuition:
        "A large parameter update can be approximated using a lower-rank update.",
      equation:
        "W' = W + BA"
    },
    {
      concept: "Instruction tuning",
      intuition:
        "The model learns to map natural-language instructions and context to desired responses.",
      equation:
        "P(response | instruction, context)"
    }
  ],

  exercises: [
    {
      question:
        "What is the primary purpose of pretraining?",
      answer:
        "To learn broad statistical and representational structure from a large training distribution."
    },
    {
      question:
        "How does fine-tuning differ from pretraining?",
      answer:
        "Fine-tuning starts from pretrained parameters and adapts them to a new dataset, task, domain, or behavior."
    },
    {
      question:
        "What is instruction tuning?",
      answer:
        "It is supervised adaptation using instruction-response examples to improve the model's ability to follow natural-language instructions."
    },
    {
      question:
        "Why might loss masking be useful in instruction tuning?",
      answer:
        "It can focus optimization on desired response tokens rather than treating every prompt token as an equally important target."
    },
    {
      question:
        "What is catastrophic forgetting?",
      answer:
        "It is the loss of previously useful capabilities or behaviors during adaptation to a new distribution."
    },
    {
      question:
        "Why can LoRA reduce adaptation memory?",
      answer:
        "Because only a small set of low-rank adapter parameters needs to be trained and maintained instead of updating the complete weight matrices."
    }
  ],

  codingExercises: [
    {
      title: "Create an Instruction Dataset",
      difficulty: "Easy",
      task:
        "Create ten instruction-response examples for a programming tutor."
    },
    {
      title: "Build a Loss Mask",
      difficulty: "Medium",
      task:
        "Write a program that marks prompt tokens with 0 and response tokens with 1."
    },
    {
      title: "Compare Parameter Counts",
      difficulty: "Medium",
      task:
        "Write a program comparing full matrix parameters with a low-rank adaptation."
    },
    {
      title: "Fine-Tuning Data Validator",
      difficulty: "Advanced",
      task:
        "Create a Python validator that checks whether every instruction example contains the required fields and non-empty target responses."
    }
  ],

  architectureExercises: [
    {
      title: "Model Development Lifecycle",
      task:
        "Draw the complete path from pretraining data to a production instruction-following model."
    },
    {
      title: "Instruction Tuning Pipeline",
      task:
        "Draw tokenization, loss masking, forward pass, loss calculation, backpropagation, and parameter update."
    },
    {
      title: "LoRA Architecture",
      task:
        "Draw a frozen base weight matrix with a low-rank trainable update path."
    }
  ],

  comparisonTables: [
    {
      title: "Adaptation Methods",
      headers: ["Method", "Main purpose"],
      rows: [
        ["Continued pretraining", "Adapt to additional data distribution"],
        ["Supervised fine-tuning", "Adapt to labeled target behavior"],
        ["Instruction tuning", "Improve instruction following"],
        ["Parameter-efficient tuning", "Adapt with fewer trainable parameters"]
      ]
    }
  ],

  commonMistakes: [
    "Confusing pretraining with fine-tuning.",
    "Assuming instruction tuning means changing the prompt only.",
    "Training on poor-quality or contradictory target responses.",
    "Evaluating only on the fine-tuning dataset.",
    "Ignoring possible catastrophic forgetting.",
    "Confusing LoRA adapter parameters with the original model parameters.",
    "Assuming parameter-efficient tuning changes no model behavior.",
    "Using a task dataset that does not represent deployment requirements."
  ],

  summary: [
    "Pretraining teaches broad statistical structure from large-scale data.",
    "Foundation models can support many downstream applications.",
    "Fine-tuning continues optimization from pretrained parameters.",
    "Instruction tuning uses instruction-response examples to improve instruction following.",
    "Continued pretraining can adapt a model toward a new domain distribution.",
    "Parameter-efficient methods reduce the number of trainable parameters during adaptation.",
    "LoRA represents parameter updates using lower-rank matrices.",
    "Fine-tuning data quality and evaluation are critical.",
    "Catastrophic forgetting is an important adaptation risk.",
    "A modern model-development lifecycle can contain several stages between raw data and deployment."
  ],

  keyTakeaways: [
    "Pretraining = broad learning.",
    "Fine-tuning = specialization.",
    "Instruction tuning = learning desired instruction-response behavior.",
    "Continued pretraining = domain/distribution adaptation.",
    "LoRA = parameter-efficient adaptation.",
    "Good adaptation requires representative, high-quality data and proper evaluation."
  ],

  visualReferences: [
    {
      title: "LoRA: Low-Rank Adaptation of Large Language Models",
      url: "https://arxiv.org/abs/2106.09685",
      description:
        "Research paper introducing the LoRA adaptation approach."
    },
    {
      title: "Attention Is All You Need",
      url: "https://arxiv.org/abs/1706.03762",
      description:
        "Original Transformer architecture."
    },
    {
      title: "Hugging Face PEFT Documentation",
      url: "https://huggingface.co/docs/peft/",
      description:
        "Practical documentation for parameter-efficient fine-tuning."
    },
    {
      title: "Hugging Face Transformers Documentation",
      url: "https://huggingface.co/docs/transformers/",
      description:
        "Documentation for Transformer models and training workflows."
    }
  ]
};

export default lesson13;

const practice = {
  id: "practice",
  moduleId: "module2",

  title: "Module 2 Practice — Large Language Models",

  subtitle:
    "Comprehensive theory, mathematical, coding, architecture, and interview practice covering the complete Large Language Models module.",

  description:
    "This practice module consolidates the complete Large Language Models course through concept checks, mathematical exercises, coding problems, architecture tasks, debugging questions, and interview preparation.",

  estimatedTime: "8–12 hours",

  difficulty: "Advanced",

  learningObjectives: [
    "Revise the complete Large Language Models module.",
    "Connect tokenization, embeddings, attention, Transformer blocks, training, inference, and evaluation.",
    "Solve numerical questions involving attention and model dimensions.",
    "Practice Python implementations of LLM concepts.",
    "Design Transformer and LLM application architectures.",
    "Analyze common LLM failure modes.",
    "Prepare for technical interviews.",
    "Build a complete mental model of how an LLM works."
  ],

  sections: [
    {
      heading: "1. Module-Wide LLM Architecture",

      process: [
        "Raw text",
        "↓",
        "Tokenizer",
        "↓",
        "Token IDs",
        "↓",
        "Token embeddings",
        "↓",
        "Positional information",
        "↓",
        "Transformer blocks",
        "├── LayerNorm",
        "├── Multi-Head Attention",
        "├── Residual connection",
        "├── LayerNorm",
        "├── Feed-Forward Network",
        "└── Residual connection",
        "↓",
        "Final hidden states",
        "↓",
        "Vocabulary projection",
        "↓",
        "Logits",
        "↓",
        "Softmax / sampling",
        "↓",
        "Generated token"
      ]
    },

    {
      heading: "2. Complete Module Classification",

      classificationTree: [
        "Large Language Models",
        "├── Foundations",
        "│   ├── What is an LLM?",
        "│   └── Transformer architecture",
        "├── Representation",
        "│   ├── Tokens",
        "│   ├── Vocabulary",
        "│   ├── Embeddings",
        "│   ├── Positional information",
        "│   └── Hidden states",
        "├── Attention",
        "│   ├── Self-attention",
        "│   └── Multi-head attention",
        "├── Training",
        "│   ├── Pretraining",
        "│   ├── Loss",
        "│   ├── Backpropagation",
        "│   ├── Optimization",
        "│   └── Fine-tuning",
        "├── Inference",
        "│   ├── Context window",
        "│   ├── KV cache",
        "│   └── Long context",
        "├── Scaling",
        "│   ├── Parameters",
        "│   ├── Compute",
        "│   ├── Memory",
        "│   └── Hardware",
        "└── Reliability",
        "    ├── Hallucination",
        "    ├── Evaluation",
        "    ├── Retrieval",
        "    ├── Tools",
        "    └── Regression testing"
      ]
    },

    {
      heading: "3. Theory Practice",

      content: [
        "Answer the following without referring to notes first. Then verify your answers.",
        "1. What is a large language model?",
        "2. Why are tokens required?",
        "3. What is a vocabulary?",
        "4. What is an embedding?",
        "5. What is a hidden state?",
        "6. Why does a Transformer need positional information?",
        "7. What is self-attention?",
        "8. Why are Q, K, and V used?",
        "9. Why is attention divided by √d_k?",
        "10. What is multi-head attention?",
        "11. What is the purpose of a residual connection?",
        "12. What is the role of LayerNorm?",
        "13. What is the purpose of the FFN?",
        "14. What is causal masking?",
        "15. What is next-token prediction?",
        "16. What is cross-entropy loss?",
        "17. What is backpropagation?",
        "18. What does an optimizer do?",
        "19. What is gradient accumulation?",
        "20. What is pretraining?",
        "21. What is fine-tuning?",
        "22. What is instruction tuning?",
        "23. What is LoRA?",
        "24. What is a context window?",
        "25. What is a KV cache?",
        "26. Why does long context increase resource requirements?",
        "27. What is model width?",
        "28. What is model depth?",
        "29. What is parameter count?",
        "30. What is hallucination?",
        "31. What is groundedness?",
        "32. What is regression testing?"
      ]
    },

    {
      heading: "4. Attention Calculation Practice",

      content: [
        "Given:",
        "Q = [[1, 0], [0, 1]]",
        "K = [[1, 0], [0, 1]]",
        "V = [[10, 0], [0, 20]]",
        "Calculate QKᵀ, apply scaling, calculate the softmax weights, and determine the final attention output.",
        "Then explain what each output row means."
      ],

      formulas: [
        "Attention(Q,K,V) = softmax(QKᵀ / √d_k)V"
      ]
    },

    {
      heading: "5. Tensor Shape Practice",

      content: [
        "Suppose:",
        "Batch size B = 4",
        "Sequence length T = 128",
        "d_model = 768",
        "Number of heads H = 12",
        "Calculate d_head.",
        "Then determine the conceptual shapes of Q, K, and V before and after splitting into heads."
      ],

      formulas: [
        "d_head = d_model / H"
      ]
    },

    {
      heading: "6. Tokenization Practice",

      content: [
        "Create a tokenizer simulation where a small vocabulary maps tokens to integer IDs.",
        "Example vocabulary:",
        "hello → 0",
        "world → 1",
        "machine → 2",
        "learning → 3",
        "model → 4",
        "Then convert a short sentence into token IDs."
      ]
    },

    {
      heading: "7. Embedding Practice",

      content: [
        "Create a small embedding matrix with vocabulary size 5 and embedding dimension 3.",
        "Use token IDs to perform embedding lookup.",
        "Then calculate the cosine similarity between two selected embeddings."
      ],

      formulas: [
        "cos(θ) = (a · b) / (||a|| ||b||)"
      ]
    },

    {
      heading: "8. Training Objective Practice",

      content: [
        "Suppose the correct-token probabilities for five prediction positions are:",
        "[0.8, 0.5, 0.9, 0.25, 0.7]",
        "Calculate the average negative log-likelihood."
      ],

      formulas: [
        "L = −(1/T) Σₜ log P(correct_t)"
      ]
    },

    {
      heading: "9. Model Scaling Practice",

      content: [
        "Consider a Transformer with:",
        "d_model = 1024",
        "d_ff = 4096",
        "L = 24 layers.",
        "Estimate the approximate attention and FFN parameters per block.",
        "Then estimate the combined parameter contribution of all blocks."
      ],

      formulas: [
        "Attention ≈ 4d_model²",
        "FFN ≈ 2d_model d_ff"
      ]
    },

    {
      heading: "10. Memory Practice",

      content: [
        "Estimate raw weight memory for a model containing 13 billion parameters using:",
        "FP32",
        "FP16",
        "INT8",
        "INT4",
        "Then explain why actual runtime memory can be larger or different from the raw weight estimate."
      ]
    },

    {
      heading: "11. KV Cache Practice",

      content: [
        "Suppose:",
        "Batch = 1",
        "Attention heads = 32",
        "Sequence length = 4096",
        "Head dimension = 128.",
        "Estimate the number of K/V elements using both keys and values."
      ],

      formulas: [
        "KV elements ≈ B × H × T × d_head × 2"
      ]
    },

    {
      heading: "12. Context Budget Practice",

      content: [
        "Design a context budget for a model with an 8192-token context.",
        "Reserve tokens for:",
        "System instructions",
        "Conversation history",
        "Retrieved documents",
        "Current user request",
        "Model response",
        "Explain why a generation budget must be reserved before constructing the final prompt."
      ]
    },

    {
      heading: "13. Fine-Tuning Practice",

      content: [
        "Design 10 instruction-response examples for a programming tutor.",
        "Each example should contain:",
        "Instruction",
        "Optional input",
        "Expected response",
        "Then design a loss mask that excludes instruction tokens and focuses training on response tokens."
      ]
    },

    {
      heading: "14. LLM Failure Analysis",

      table: {
        headers: ["Observed output", "Identify the likely failure"],
        rows: [
          [
            "The answer contains a fabricated research paper.",
            "Hallucination"
          ],
          [
            "RAG retrieves irrelevant documents.",
            "Retrieval failure"
          ],
          [
            "Model returns invalid JSON.",
            "Structured-output failure"
          ],
          [
            "Correct arithmetic method but incorrect result.",
            "Computation/reasoning failure"
          ],
          [
            "Model ignores a required field.",
            "Instruction-following failure"
          ],
          [
            "A prompt update breaks previously working examples.",
            "Regression"
          ],
          [
            "Response takes too long after adding huge retrieved context.",
            "Context/latency problem"
          ]
        ]
      }
    },

    {
      heading: "15. RAG Evaluation Practice",

      content: [
        "Create a test set containing 20 questions and known relevant documents.",
        "Measure:",
        "1. Retrieval precision",
        "2. Retrieval recall",
        "3. Groundedness",
        "4. Answer correctness",
        "5. Citation support",
        "Then separate retrieval failures from generation failures."
      ]
    },

    {
      heading: "16. Architecture Challenge",

      content: [
        "Design a production-style LLM application that receives a user question, retrieves relevant information, sends a controlled context to an LLM, validates the output, and records evaluation information.",
        "Your architecture should include:",
        "Frontend",
        "Application server",
        "Prompt construction",
        "Retriever",
        "Vector database",
        "LLM",
        "Output validator",
        "Logging",
        "Evaluation system"
      ],

      process: [
        "User",
        "↓",
        "Application",
        "↓",
        "Retriever",
        "↓",
        "Relevant context",
        "↓",
        "Prompt builder",
        "↓",
        "LLM",
        "↓",
        "Output validator",
        "↓",
        "Application response",
        "↓",
        "Monitoring + evaluation"
      ]
    },

    {
      heading: "17. Debugging Practice",

      content: [
        "Scenario 1: The model produces correct answers in development but fails after a prompt change.",
        "Identify the appropriate engineering response.",
        "Scenario 2: RAG answers are incorrect because the right document is never retrieved.",
        "Identify whether the primary issue is retrieval or generation.",
        "Scenario 3: The model produces correct JSON 95% of the time but occasionally returns prose.",
        "Design a validation and recovery strategy.",
        "Scenario 4: Long conversations become slow.",
        "Identify context and KV-cache considerations.",
        "Scenario 5: A model performs well on the training examples but poorly on unseen examples.",
        "Identify the likely generalization issue."
      ]
    },

    {
      heading: "18. Coding Challenge Set",

      content: [
        "Challenge 1: Implement a tokenizer using a dictionary.",
        "Challenge 2: Implement embedding lookup using NumPy.",
        "Challenge 3: Implement cosine similarity.",
        "Challenge 4: Implement scaled dot-product attention.",
        "Challenge 5: Implement a causal attention mask.",
        "Challenge 6: Implement next-token input/target shifting.",
        "Challenge 7: Implement cross-entropy for selected target tokens.",
        "Challenge 8: Build a context-budget calculator.",
        "Challenge 9: Build a retrieval precision/recall evaluator.",
        "Challenge 10: Build a golden-test regression runner."
      ]
    },

    {
      heading: "19. Mini Project",

      content: [
        "Build a miniature LLM evaluation playground.",
        "The project should accept a collection of test cases and compare two simulated model versions.",
        "For each test case store:",
        "Input",
        "Expected behavior",
        "Model A output",
        "Model B output",
        "Pass/fail",
        "Failure category.",
        "Generate a final report showing regressions and improvements."
      ]
    },

    {
      heading: "20. Final Module Challenge",

      content: [
        "Explain the complete lifecycle of a Large Language Model from raw training data to production inference.",
        "Your answer must connect:",
        "Data",
        "Tokenization",
        "Embeddings",
        "Positional information",
        "Self-attention",
        "Multi-head attention",
        "Transformer blocks",
        "Next-token prediction",
        "Loss",
        "Backpropagation",
        "Optimization",
        "Pretraining",
        "Fine-tuning",
        "Instruction tuning",
        "Context management",
        "KV cache",
        "Scaling",
        "Inference",
        "Evaluation",
        "Reliability"
      ]
    }
  ],

  codingExercises: [
    {
      title: "Tokenizer",
      difficulty: "Easy",
      task:
        "Build a small vocabulary-based tokenizer that converts text into token IDs and reconstructs text from IDs."
    },
    {
      title: "Embedding Similarity",
      difficulty: "Medium",
      task:
        "Create random embeddings and calculate cosine similarity between selected tokens."
    },
    {
      title: "Scaled Dot-Product Attention",
      difficulty: "Advanced",
      task:
        "Implement self-attention using NumPy without using a high-level attention function."
    },
    {
      title: "Causal Mask",
      difficulty: "Medium",
      task:
        "Create a lower-triangular causal mask and apply it to an attention-score matrix."
    },
    {
      title: "Next-Token Dataset",
      difficulty: "Easy",
      task:
        "Convert token sequences into shifted input-target pairs."
    },
    {
      title: "Training Loss",
      difficulty: "Medium",
      task:
        "Implement average negative log-likelihood for selected target tokens."
    },
    {
      title: "Context Manager",
      difficulty: "Medium",
      task:
        "Build a context manager that keeps system instructions, recent history, retrieved documents, and a response budget within a token limit."
    },
    {
      title: "KV Cache Calculator",
      difficulty: "Medium",
      task:
        "Calculate approximate KV-cache memory for different sequence lengths and attention configurations."
    },
    {
      title: "RAG Evaluator",
      difficulty: "Advanced",
      task:
        "Calculate retrieval precision, recall, F1, and answer-grounding results."
    },
    {
      title: "LLM Regression Suite",
      difficulty: "Advanced",
      task:
        "Create a test runner that compares outputs from two model versions and reports regressions."
    }
  ],

  architectureExercises: [
    {
      title: "Transformer From Scratch",
      task:
        "Draw a complete Transformer block including embeddings, positional information, Q/K/V projections, attention, residual connections, LayerNorm, FFN, and output projection."
    },
    {
      title: "LLM Training System",
      task:
        "Draw the full training architecture from dataset ingestion through checkpoint creation."
    },
    {
      title: "LLM Inference System",
      task:
        "Draw prompt processing, prefill, KV caching, autoregressive decoding, and final output."
    },
    {
      title: "RAG Application",
      task:
        "Draw document ingestion, chunking, embeddings, vector storage, retrieval, prompt construction, LLM generation, and validation."
    },
    {
      title: "Production Evaluation System",
      task:
        "Design an evaluation architecture with golden datasets, automated metrics, human review, logging, and regression testing."
    }
  ],

  interviewQuestions: [
    "What is an LLM?",
    "Why do LLMs use tokenization?",
    "What is a vocabulary?",
    "What is an embedding?",
    "What is a hidden state?",
    "Why is positional information required?",
    "Explain self-attention mathematically.",
    "What are Q, K, and V?",
    "Why divide attention scores by √d_k?",
    "What is causal masking?",
    "What is multi-head attention?",
    "What is the role of residual connections?",
    "What does LayerNorm do?",
    "What is an FFN?",
    "What is next-token prediction?",
    "What is cross-entropy?",
    "What is backpropagation?",
    "What does an optimizer do?",
    "What is gradient accumulation?",
    "What is pretraining?",
    "What is fine-tuning?",
    "What is instruction tuning?",
    "What is LoRA?",
    "What is a context window?",
    "What is KV caching?",
    "Why does attention scale quadratically?",
    "What is MHA?",
    "What is GQA?",
    "What is MQA?",
    "What is model width?",
    "What is model depth?",
    "How do you estimate parameter memory?",
    "What is quantization?",
    "What is throughput?",
    "What is latency?",
    "What is hallucination?",
    "What is groundedness?",
    "How do you evaluate an LLM?",
    "What is a golden test set?",
    "What is regression testing?"
  ],

  finalAssessment: [
    {
      question:
        "Explain the complete forward pass of a decoder-only Transformer.",
      expected:
        "Token IDs → embeddings → positional representation → Transformer blocks → hidden states → vocabulary projection → logits."
    },
    {
      question:
        "Derive the scaled dot-product attention equation.",
      expected:
        "Attention(Q,K,V) = softmax(QKᵀ/√d_k)V."
    },
    {
      question:
        "Explain why autoregressive language-model training uses shifted inputs and targets.",
      expected:
        "Each position predicts the next token based on preceding context."
    },
    {
      question:
        "Explain the difference between pretraining and instruction tuning.",
      expected:
        "Pretraining learns broad language/statistical structure, while instruction tuning specializes the model using instruction-response examples."
    },
    {
      question:
        "Explain KV caching.",
      expected:
        "Previously computed keys and values are stored during autoregressive decoding so they can be reused."
    },
    {
      question:
        "Explain the main sources of LLM failure.",
      expected:
        "Hallucination, reasoning errors, context failures, retrieval failures, instruction failures, formatting failures, tool failures, and operational constraints."
    },
    {
      question:
        "Design an evaluation system for a RAG application.",
      expected:
        "Evaluate retrieval quality, groundedness, answer correctness, robustness, latency, and regression behavior."
    }
  ],

  commonMistakes: [
    "Memorizing Transformer equations without understanding tensor shapes.",
    "Confusing token IDs with embeddings.",
    "Confusing embeddings with hidden states.",
    "Forgetting the causal mask in autoregressive models.",
    "Confusing training loss with evaluation quality.",
    "Confusing pretraining with instruction tuning.",
    "Confusing context windows with KV caches.",
    "Estimating training memory using weights alone.",
    "Assuming larger models automatically solve every problem.",
    "Assuming RAG automatically eliminates hallucinations.",
    "Evaluating only average scores instead of analyzing failures.",
    "Changing prompts or models without regression testing."
  ],

  summary: [
    "An LLM converts token IDs into contextual representations using Transformer layers.",
    "Embeddings represent tokens numerically.",
    "Positional information provides sequence-order information.",
    "Self-attention dynamically mixes information across positions.",
    "Multi-head attention provides multiple attention subspaces.",
    "Training commonly uses next-token prediction and cross-entropy.",
    "Backpropagation calculates gradients and optimizers update parameters.",
    "Pretraining creates broad capabilities while later adaptation specializes behavior.",
    "Context management is essential during inference.",
    "KV caching improves autoregressive decoding efficiency.",
    "Model scale involves parameters, data, compute, memory, and context.",
    "Reliable LLM applications require evaluation, validation, retrieval/tool controls, and regression testing."
  ],

  keyTakeaways: [
    "Understand the complete Transformer pipeline rather than isolated components.",
    "Know the mathematics of self-attention.",
    "Know the tensor shapes involved in multi-head attention.",
    "Understand how next-token training works.",
    "Understand pretraining and instruction tuning.",
    "Understand context windows and KV caches.",
    "Understand parameter, compute, and memory scaling.",
    "Understand common LLM failure modes.",
    "Know how to build an evaluation and regression-testing workflow."
  ]
};

export default practice;

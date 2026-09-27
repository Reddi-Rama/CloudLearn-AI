const lesson6 = {
  id: "lesson6",
  moduleId: "module1",
  lessonNumber: 6,

  title: "Generative AI Inference & Decoding",
  subtitle:
    "Understand how a trained generative model turns input into output through logits, probabilities, sampling, decoding strategies, and stopping conditions.",

  description:
    "This lesson explains the complete inference and decoding pipeline used by generative models, especially language models. It covers model loading, tokenization, forward passes, logits, softmax, temperature, greedy decoding, random sampling, top-k, top-p, repetition control, beam search, stopping criteria, maximum generation length, deterministic versus stochastic generation, streaming, caching, and the complete autoregressive generation loop.",

  estimatedTime: "130–160 min",
  difficulty: "Intermediate",

  learningObjectives: [
    "Understand what inference means in Generative AI.",
    "Understand the complete inference pipeline.",
    "Differentiate training from inference.",
    "Understand logits and their relationship to probabilities.",
    "Understand the softmax function.",
    "Understand next-token probability distributions.",
    "Explain greedy decoding.",
    "Explain multinomial sampling.",
    "Understand temperature.",
    "Understand top-k sampling.",
    "Understand top-p or nucleus sampling.",
    "Understand repetition penalties.",
    "Understand maximum generation length.",
    "Understand stopping conditions.",
    "Understand deterministic and stochastic generation.",
    "Understand beam search at a conceptual level.",
    "Understand why decoding affects output quality.",
    "Understand inference caching at a high level.",
    "Understand streaming generation.",
    "Build a complete mental model of autoregressive inference."
  ],

  sections: [
    {
      heading: "1. What Is Inference?",
      content: [
        "Inference is the process of using a trained model to produce an output for new input.",
        "During ordinary inference, the model parameters are not being updated. The learned parameters are used to transform the input into predictions or generated content.",
        "For a language model, inference begins with a prompt and repeatedly produces predictions for the next token."
      ],

      process: [
        "User input",
        "Tokenization",
        "Model input",
        "Forward pass",
        "Logits",
        "Probability distribution",
        "Decoding",
        "Next token",
        "Repeat",
        "Final output"
      ]
    },

    {
      heading: "2. Training vs Inference",
      table: [
        {
          aspect: "Purpose",
          training: "Learn model parameters",
          inference: "Use learned parameters"
        },
        {
          aspect: "Gradients",
          training: "Calculated",
          inference: "Normally not calculated"
        },
        {
          aspect: "Parameter updates",
          training: "Yes",
          inference: "No"
        },
        {
          aspect: "Input",
          training: "Training examples",
          inference: "New user input"
        },
        {
          aspect: "Output",
          training: "Loss and gradients",
          inference: "Prediction or generated content"
        }
      ]
    },

    {
      heading: "3. Complete LLM Inference Pipeline",
      classificationTree: [
        "LLM Inference",
        "├── User Input",
        "│   └── Prompt",
        "├── Tokenization",
        "│   └── Token IDs",
        "├── Model",
        "│   ├── Embeddings",
        "│   ├── Transformer layers",
        "│   └── Output projection",
        "├── Logits",
        "├── Probability distribution",
        "├── Decoding",
        "│   ├── Greedy",
        "│   ├── Sampling",
        "│   ├── Top-k",
        "│   ├── Top-p",
        "│   └── Beam search",
        "├── Selected token",
        "├── Context update",
        "└── Repeat"
      ]
    },

    {
      heading: "4. The First Forward Pass",
      content: [
        "The model receives the tokenized prompt and performs a forward computation.",
        "For an autoregressive language model, the final representation at the relevant position is transformed into scores over the vocabulary.",
        "These raw scores are called logits."
      ],

      process: [
        "Prompt",
        "Token IDs",
        "Embeddings",
        "Transformer blocks",
        "Final hidden representation",
        "Output projection",
        "Logits"
      ]
    },

    {
      heading: "5. What Are Logits?",
      content: [
        "Logits are raw numerical scores produced before converting the scores into probabilities.",
        "A language model can produce one logit for every token in its vocabulary.",
        "The magnitude of a logit affects the relative probability assigned to that token after the probability transformation."
      ],

      example: {
        vocabulary: [
          "AI",
          "model",
          "learns",
          "runs"
        ],
        illustrativeLogits: [
          2.8,
          1.9,
          0.7,
          -0.5
        ],
        note:
          "These values are illustrative and do not represent a real model."
      }
    },

    {
      heading: "6. Logits vs Probabilities",
      table: [
        {
          property: "Logits",
          description: "Raw model scores"
        },
        {
          property: "Probabilities",
          description: "Normalized values representing a probability distribution"
        },
        {
          property: "Sum",
          logits: "No required sum",
          probabilities: "Must sum to 1"
        },
        {
          property: "Typical transformation",
          logits: "Model output",
          probabilities: "Softmax"
        }
      ]
    },

    {
      heading: "7. Softmax",
      content: [
        "Softmax converts a vector of logits into a probability distribution.",
        "The exponential function ensures positive values and the normalization ensures that the resulting probabilities sum to one.",
        "Softmax therefore allows the model's relative scores to become probabilities over possible next tokens."
      ],

      formulas: [
        "P_i = exp(z_i) / Σ_j exp(z_j)"
      ],

      process: [
        "Logits",
        "Exponentiate scores",
        "Calculate total",
        "Divide each score by total",
        "Probability distribution"
      ]
    },

    {
      heading: "8. Softmax Example",
      content: [
        "Consider three illustrative logits: 2, 1, and 0.",
        "Softmax assigns the largest probability to the largest logit while still assigning non-zero probability to the other candidates.",
        "The exact probabilities can be calculated using the exponential function."
      ],

      formulas: [
        "z = [2, 1, 0]",
        "exp(2) ≈ 7.389",
        "exp(1) ≈ 2.718",
        "exp(0) = 1",
        "sum ≈ 11.107",
        "P(2) ≈ 0.665",
        "P(1) ≈ 0.245",
        "P(0) ≈ 0.090"
      ]
    },

    {
      heading: "9. Next-Token Distribution",
      content: [
        "After softmax, the model has a probability distribution over possible next tokens.",
        "The decoder determines how to turn that distribution into an actual token.",
        "This is a crucial point: the model produces a distribution, while decoding determines how that distribution is used."
      ],

      process: [
        "Prompt context",
        "Model",
        "Logits",
        "Softmax",
        "Next-token probabilities",
        "Decoding strategy",
        "Selected token"
      ]
    },

    {
      heading: "10. The Autoregressive Loop",
      content: [
        "The selected token becomes part of the context.",
        "The model then predicts the next token using the expanded context.",
        "This process continues until a stopping condition is reached."
      ],

      process: [
        "Initial prompt",
        "Predict token",
        "Select token",
        "Append token",
        "Predict next token",
        "Select token",
        "Append token",
        "Continue",
        "Stop"
      ]
    },

    {
      heading: "11. Worked Generation Example",
      content: [
        "Suppose the prompt is: 'Machine learning can'.",
        "The model produces a probability distribution over possible next tokens.",
        "For teaching purposes, imagine that the highest-probability candidates are 'help', 'learn', 'predict', and 'be'.",
        "The decoding method determines which candidate is selected.",
        "The selected token is then appended to the prompt and the process continues."
      ],

      table: [
        {
          step: "1",
          context: "Machine learning can",
          action: "Predict next token"
        },
        {
          step: "2",
          context: "Machine learning can help",
          action: "Predict next token"
        },
        {
          step: "3",
          context: "Machine learning can help developers",
          action: "Predict next token"
        },
        {
          step: "4",
          context: "Machine learning can help developers build",
          action: "Continue"
        }
      ]
    },

    {
      heading: "12. Greedy Decoding",
      content: [
        "Greedy decoding selects the token with the highest probability at every generation step.",
        "It is simple and deterministic when the model inputs and configuration are fixed.",
        "Greedy decoding can work well for some tasks but can also produce repetitive or locally optimal sequences."
      ],

      formulas: [
        "x_t = argmax_x P(x | x_1,...,x_{t-1})"
      ],

      process: [
        "Probability distribution",
        "Find highest probability",
        "Select token",
        "Append token",
        "Repeat"
      ]
    },

    {
      heading: "13. Greedy Example",
      table: [
        {
          token: "learn",
          probability: "0.45"
        },
        {
          token: "build",
          probability: "0.30"
        },
        {
          token: "predict",
          probability: "0.15"
        },
        {
          token: "create",
          probability: "0.10"
        }
      ],

      contentAfterTable: [
        "Greedy decoding selects 'learn' because it has the highest probability."
      ]
    },

    {
      heading: "14. Advantages and Limitations of Greedy Decoding",
      table: [
        {
          aspect: "Advantage",
          explanation: "Simple and computationally straightforward"
        },
        {
          aspect: "Advantage",
          explanation: "Reproducible under fixed conditions"
        },
        {
          aspect: "Limitation",
          explanation: "Only considers the best immediate choice"
        },
        {
          aspect: "Limitation",
          explanation: "Can produce repetitive sequences"
        },
        {
          aspect: "Limitation",
          explanation: "May miss a better overall sequence"
        }
      ]
    },

    {
      heading: "15. Sampling",
      content: [
        "Sampling selects a token according to the probability distribution instead of always selecting the highest-probability token.",
        "This introduces controlled randomness into generation.",
        "Sampling can produce more diverse outputs, but unrestricted sampling can also produce lower-quality or incoherent results."
      ],

      formulas: [
        "x_t ~ P(x | x_1,...,x_{t-1})"
      ]
    },

    {
      heading: "16. Greedy vs Sampling",
      table: [
        {
          method: "Greedy",
          selection: "Highest-probability token",
          randomness: "No",
          diversity: "Lower"
        },
        {
          method: "Sampling",
          selection: "Sample from probability distribution",
          randomness: "Yes",
          diversity: "Potentially higher"
        }
      ]
    },

    {
      heading: "17. Temperature",
      content: [
        "Temperature modifies the sharpness of the probability distribution used during sampling.",
        "A lower temperature makes the distribution more concentrated around high-probability candidates.",
        "A higher temperature makes the distribution flatter, increasing the relative chance of lower-probability candidates.",
        "Temperature is normally applied to logits before softmax."
      ],

      formulas: [
        "P_i(T) = exp(z_i / T) / Σ_j exp(z_j / T)"
      ],

      classificationTree: [
        "Temperature",
        "├── Lower T",
        "│   ├── Sharper distribution",
        "│   ├── Less randomness",
        "│   └── More predictable outputs",
        "├── T ≈ 1",
        "│   └── Original distribution scale",
        "└── Higher T",
        "    ├── Flatter distribution",
        "    ├── More randomness",
        "    └── More diverse possibilities"
      ]
    },

    {
      heading: "18. Temperature Example",
      content: [
        "Consider logits [3, 2, 1].",
        "With a lower temperature, the largest logit dominates more strongly.",
        "With a higher temperature, probability mass becomes more evenly distributed."
      ],

      table: [
        {
          temperature: "Low",
          behavior: "Strong preference for high-scoring candidates"
        },
        {
          temperature: "Medium",
          behavior: "Balanced distribution"
        },
        {
          temperature: "High",
          behavior: "More probability assigned to lower-ranked candidates"
        }
      ]
    },

    {
      heading: "19. Important Temperature Principle",
      content: [
        "Temperature does not create new information.",
        "It changes how the model's existing probability distribution is used during sampling.",
        "A higher temperature does not make a model more knowledgeable. It changes output variability."
      ]
    },

    {
      heading: "20. Top-K Sampling",
      content: [
        "Top-k sampling restricts the candidate set to the k highest-probability tokens before sampling.",
        "This removes very low-probability candidates from consideration.",
        "The remaining candidates can then be renormalized and sampled."
      ],

      process: [
        "Full vocabulary probabilities",
        "Sort candidates",
        "Keep top k",
        "Remove remaining candidates",
        "Renormalize",
        "Sample"
      ]
    },

    {
      heading: "21. Top-K Example",
      content: [
        "Suppose a model has a vocabulary containing thousands of possible next tokens.",
        "If k = 5, only the five highest-probability candidates remain available for the sampling step.",
        "The exact implementation and interaction with other generation controls depend on the generation system."
      ],

      table: [
        {
          rank: "1",
          token: "learn",
          probability: "0.35"
        },
        {
          rank: "2",
          token: "build",
          probability: "0.25"
        },
        {
          rank: "3",
          token: "create",
          probability: "0.18"
        },
        {
          rank: "4",
          token: "understand",
          probability: "0.10"
        },
        {
          rank: "5",
          token: "develop",
          probability: "0.07"
        },
        {
          rank: "6+",
          token: "others",
          probability: "remaining"
        }
      ]
    },

    {
      heading: "22. Top-P / Nucleus Sampling",
      content: [
        "Top-p sampling selects the smallest set of high-probability tokens whose cumulative probability reaches a specified threshold.",
        "Unlike top-k, the number of candidates can change from one generation step to another.",
        "This makes top-p adaptive to the shape of the model's probability distribution."
      ],

      process: [
        "Sort tokens by probability",
        "Start with highest probability",
        "Accumulate probabilities",
        "Stop when cumulative probability reaches p",
        "Discard remaining candidates",
        "Renormalize",
        "Sample"
      ]
    },

    {
      heading: "23. Top-P Example",
      content: [
        "Suppose the sorted probabilities are 0.45, 0.25, 0.15, 0.08, 0.04, and 0.03.",
        "With p = 0.85, the system keeps candidates until the cumulative probability reaches the required threshold.",
        "The number of retained tokens depends on the distribution."
      ],

      formulas: [
        "0.45 + 0.25 = 0.70",
        "0.70 + 0.15 = 0.85"
      ],

      contentAfterFormula: [
        "The first three candidates reach the illustrative 0.85 threshold."
      ]
    },

    {
      heading: "24. Top-K vs Top-P",
      table: [
        {
          method: "Top-k",
          rule: "Keep exactly up to k highest-probability candidates",
          candidateCount: "Fixed"
        },
        {
          method: "Top-p",
          rule: "Keep candidates until cumulative probability reaches p",
          candidateCount: "Adaptive"
        }
      ]
    },

    {
      heading: "25. Combining Temperature and Top-P",
      content: [
        "Generation systems can combine multiple decoding controls.",
        "A simplified conceptual pipeline is to modify the logits or probabilities and then restrict the candidate set before sampling.",
        "The exact order and implementation can vary between systems, so developers should consult the generation configuration for the model and library they are using."
      ],

      process: [
        "Model logits",
        "Temperature transformation",
        "Probability distribution",
        "Top-k / Top-p filtering",
        "Renormalization",
        "Sampling",
        "Selected token"
      ]
    },

    {
      heading: "26. Repetition",
      content: [
        "Generative models can sometimes repeat words, phrases, or structures.",
        "Repetition-control techniques modify the scores of tokens that have already appeared or use constraints on repeated sequences.",
        "A repetition penalty is one configurable approach. A value of 1 generally represents no penalty in systems that implement this parameter."
      ]
    },

    {
      heading: "27. Repetition Penalty",
      content: [
        "A repetition penalty changes the relative preference for tokens that have already occurred.",
        "The exact mathematical implementation depends on the generation library.",
        "The goal is to reduce unwanted repetition without destroying legitimate repetition that is necessary for the task."
      ],

      table: [
        {
          setting: "No penalty",
          effect: "Original model preference"
        },
        {
          setting: "Moderate penalty",
          effect: "Discourage repeated tokens"
        },
        {
          setting: "Excessive penalty",
          effect: "May produce unnatural wording"
        }
      ]
    },

    {
      heading: "28. Maximum New Tokens",
      content: [
        "Generation should normally have a bounded output length.",
        "A maximum-new-token limit specifies how many new tokens can be generated beyond the prompt.",
        "This protects applications from unexpectedly long generations and provides predictable resource usage."
      ],

      formulas: [
        "Maximum output tokens = max_new_tokens"
      ]
    },

    {
      heading: "29. Stopping Conditions",
      content: [
        "Generation needs a stopping condition.",
        "A system can stop when the model emits an end-of-sequence token, when a configured stop sequence is detected, when the maximum generation length is reached, or when another application-level stopping condition occurs."
      ],

      classificationTree: [
        "Stopping Conditions",
        "├── End-of-sequence token",
        "├── Stop sequence",
        "├── Maximum new tokens",
        "├── Maximum time",
        "├── Application condition",
        "└── Error / cancellation"
      ]
    },

    {
      heading: "30. Complete Stopping Flow",
      process: [
        "Generate token",
        "Check EOS",
        "Check stop sequence",
        "Check token limit",
        "Check application condition",
        "If stop → return output",
        "Otherwise → continue generation"
      ]
    },

    {
      heading: "31. Deterministic Generation",
      content: [
        "A generation process is deterministic when the same input and configuration produce the same output under the relevant system conditions.",
        "Greedy decoding is naturally deterministic under fixed model state and configuration.",
        "Sampling introduces randomness, although a fixed random seed can make a particular sampling process reproducible in suitable environments."
      ]
    },

    {
      heading: "32. Stochastic Generation",
      content: [
        "Stochastic generation involves randomness in selecting outputs.",
        "Sampling from a probability distribution is a common source of stochasticity.",
        "Stochastic generation can be useful when multiple valid outputs are desirable."
      ]
    },

    {
      heading: "33. Deterministic vs Stochastic",
      table: [
        {
          property: "Deterministic",
          description: "Same conditions tend toward the same selected sequence"
        },
        {
          property: "Stochastic",
          description: "Randomness can produce different valid sequences"
        },
        {
          useCase: "Deterministic",
          example: "Structured extraction or reproducible processing"
        },
        {
          useCase: "Stochastic",
          example: "Creative generation or brainstorming"
        }
      ]
    },

    {
      heading: "34. Beam Search",
      content: [
        "Beam search keeps multiple candidate sequences during generation rather than committing immediately to one token path.",
        "At each step, candidate sequences are expanded and scored, and only a limited number of promising candidates are retained.",
        "This can identify a high-scoring complete sequence that greedy decoding would miss."
      ],

      process: [
        "Start with prompt",
        "Generate candidate tokens",
        "Create multiple candidate sequences",
        "Score sequences",
        "Keep best beams",
        "Expand beams",
        "Repeat",
        "Select final sequence"
      ]
    },

    {
      heading: "35. Greedy vs Beam Search",
      table: [
        {
          method: "Greedy",
          candidatesKept: "One",
          computation: "Lower",
          searchBehavior: "Local choice"
        },
        {
          method: "Beam search",
          candidatesKept: "Multiple",
          computation: "Higher",
          searchBehavior: "Maintains multiple hypotheses"
        }
      ]
    },

    {
      heading: "36. When Beam Search Can Help",
      content: [
        "Beam search can be useful for tasks where finding a high-scoring sequence is more important than generating highly diverse creative text.",
        "Its usefulness depends on the model and task. It should not be treated as automatically better than sampling."
      ]
    },

    {
      heading: "37. Decoding Strategy Classification",
      classificationTree: [
        "Decoding",
        "├── Deterministic",
        "│   ├── Greedy",
        "│   └── Beam search",
        "├── Stochastic",
        "│   ├── Random sampling",
        "│   ├── Temperature sampling",
        "│   ├── Top-k",
        "│   └── Top-p",
        "└── Hybrid / Advanced",
        "    ├── Contrastive methods",
        "    └── Constrained decoding"
      ]
    },

    {
      heading: "38. Decoding Is a Search Problem",
      content: [
        "Language generation can be viewed as a search through an enormous space of possible token sequences.",
        "The model provides probabilities that guide the search.",
        "The decoding algorithm determines which parts of this enormous search space are explored and which candidates are discarded."
      ],

      classificationTree: [
        "Possible Sequences",
        "├── Candidate A",
        "│   ├── continuation",
        "│   └── continuation",
        "├── Candidate B",
        "│   ├── continuation",
        "│   └── continuation",
        "└── Candidate C",
        "    ├── continuation",
        "    └── continuation"
      ]
    },

    {
      heading: "39. Probability vs Decoding",
      content: [
        "The model and decoder have different responsibilities.",
        "The model estimates a probability distribution based on the context.",
        "The decoder decides how to use that distribution.",
        "Changing the decoder can therefore change the output without changing the underlying model parameters."
      ]
    },

    {
      heading: "40. Inference Parameters",
      table: [
        {
          parameter: "temperature",
          purpose: "Controls distribution sharpness during sampling"
        },
        {
          parameter: "top_k",
          purpose: "Restricts sampling to the top k candidates"
        },
        {
          parameter: "top_p",
          purpose: "Restricts sampling to a probability mass"
        },
        {
          parameter: "repetition_penalty",
          purpose: "Discourages repeated tokens"
        },
        {
          parameter: "max_new_tokens",
          purpose: "Limits newly generated tokens"
        },
        {
          parameter: "num_beams",
          purpose: "Controls beam-search width"
        },
        {
          parameter: "do_sample",
          purpose: "Controls whether sampling is used in systems exposing this option"
        }
      ]
    },

    {
      heading: "41. Context Window During Inference",
      content: [
        "During generation, the model needs access to the relevant context.",
        "The context includes the prompt and previously generated tokens, subject to the model's context limitations.",
        "As generation continues, the active sequence grows."
      ],

      process: [
        "Prompt tokens",
        "+ generated token 1",
        "+ generated token 2",
        "+ generated token 3",
        "+ ...",
        "Current context"
      ]
    },

    {
      heading: "42. Key-Value Cache",
      content: [
        "Transformer-based autoregressive generation repeatedly processes related context.",
        "Inference systems can cache certain intermediate attention information so that previously processed tokens do not need to be recomputed in exactly the same way at every generation step.",
        "This is commonly known as a key-value cache.",
        "Caching can substantially improve generation efficiency, although it also consumes memory."
      ],

      classificationTree: [
        "Autoregressive Inference",
        "├── Previous context",
        "│   └── Cached attention information",
        "├── New token",
        "│   └── Newly computed information",
        "└── Updated cache"
      ]
    },

    {
      heading: "43. Prefill and Decode",
      content: [
        "Many inference systems conceptually separate the initial processing of the prompt from the token-by-token generation stage.",
        "The initial stage processes the existing context. The subsequent stage repeatedly generates new tokens.",
        "These stages have different computational characteristics."
      ],

      table: [
        {
          stage: "Prefill",
          purpose: "Process the input prompt/context"
        },
        {
          stage: "Decode",
          purpose: "Generate new tokens autoregressively"
        }
      ]
    },

    {
      heading: "44. Streaming Generation",
      content: [
        "Streaming allows an application to display generated tokens or chunks as they become available rather than waiting for the entire response.",
        "Streaming improves perceived responsiveness for interactive applications.",
        "The underlying model still generates tokens sequentially; streaming changes how results are delivered to the user."
      ],

      process: [
        "Prompt",
        "Generate token/chunk",
        "Send partial output",
        "Generate next token/chunk",
        "Send partial output",
        "Continue",
        "Final response"
      ]
    },

    {
      heading: "45. Inference Latency",
      content: [
        "Inference latency is the time required to produce a response.",
        "Applications may care about time to first token and time to generate the remaining output.",
        "Latency depends on model size, hardware, prompt length, output length, batching, caching, network communication, and other factors."
      ]
    },

    {
      heading: "46. Throughput vs Latency",
      table: [
        {
          metric: "Latency",
          meaning: "Time associated with an individual request"
        },
        {
          metric: "Throughput",
          meaning: "Amount of work processed per unit time"
        }
      ],
      contentAfterTable: [
        "A system can be optimized for low individual-request latency, high total throughput, or a balance depending on the application."
      ]
    },

    {
      heading: "47. Batch Inference",
      content: [
        "Inference can process multiple requests together when the application can tolerate some batching delay.",
        "Batching can improve hardware utilization and throughput.",
        "Interactive applications often need to balance batching efficiency against response latency."
      ]
    },

    {
      heading: "48. Complete Generation Algorithm",
      process: [
        "Receive prompt",
        "Tokenize prompt",
        "Run model",
        "Obtain logits",
        "Apply decoding configuration",
        "Select next token",
        "Append token",
        "Check stopping conditions",
        "If not stopped, run next generation step",
        "Decode token IDs into text",
        "Return response"
      ]
    },

    {
      heading: "49. Pseudocode",
      codeBlock: "tokens = tokenize(prompt)\n\nwhile not stop_condition(tokens):\n    logits = model(tokens)\n    probabilities = softmax(logits)\n    next_token = decode(probabilities)\n    tokens.append(next_token)\n\nreturn detokenize(tokens)"
    },

    {
      heading: "50. Why Decoding Changes Output",
      content: [
        "The model may assign meaningful probability to several possible continuations.",
        "A decoder that always chooses the highest-probability token behaves differently from one that samples among plausible candidates.",
        "Therefore, generation quality is influenced by both the model and the decoding strategy."
      ]
    },

    {
      heading: "51. Example: Same Model, Different Decoding",
      table: [
        {
          strategy: "Greedy",
          possibleBehavior: "Stable, high-probability continuation"
        },
        {
          strategy: "Low-temperature sampling",
          possibleBehavior: "Mostly high-probability choices with limited variation"
        },
        {
          strategy: "Higher-temperature sampling",
          possibleBehavior: "Greater variation"
        },
        {
          strategy: "Top-k",
          possibleBehavior: "Sampling restricted to a fixed candidate set"
        },
        {
          strategy: "Top-p",
          possibleBehavior: "Sampling restricted to an adaptive probability mass"
        }
      ]
    },

    {
      heading: "52. Decoding for Different Tasks",
      table: [
        {
          task: "Creative writing",
          considerations: "Diversity and controlled randomness"
        },
        {
          task: "Structured extraction",
          considerations: "Predictability and format control"
        },
        {
          task: "Translation",
          considerations: "Consistency and task accuracy"
        },
        {
          task: "Question answering",
          considerations: "Grounding, relevance, and reliability"
        },
        {
          task: "Code generation",
          considerations: "Syntax, correctness, constraints, and testing"
        }
      ]
    },

    {
      heading: "53. Decoding Does Not Fix Hallucination",
      content: [
        "Changing temperature or sampling strategy does not turn an unreliable model into a factual database.",
        "Decoding controls how model probabilities are converted into outputs.",
        "Factual reliability may require better models, retrieval, tools, verification, structured workflows, or other application-level mechanisms."
      ]
    },

    {
      heading: "54. Deterministic Output and Evaluation",
      content: [
        "When evaluating a generative application, deterministic settings can make comparisons easier because repeated runs can be more consistent.",
        "However, applications intended for diverse generation may intentionally use sampling.",
        "Evaluation methodology should therefore match the behavior the application is designed to provide."
      ]
    },

    {
      heading: "55. Common Mistakes",
      content: [
        "Mistake 1: Thinking logits are probabilities.",
        "Mistake 2: Thinking temperature changes model knowledge.",
        "Mistake 3: Assuming higher temperature always means better creativity.",
        "Mistake 4: Assuming greedy decoding is always best.",
        "Mistake 5: Assuming top-k and top-p are the same.",
        "Mistake 6: Setting maximum generation length without understanding token counts.",
        "Mistake 7: Ignoring stopping conditions.",
        "Mistake 8: Assuming sampling guarantees quality.",
        "Mistake 9: Confusing model inference with model training.",
        "Mistake 10: Ignoring inference latency and memory.",
        "Mistake 11: Assuming streaming changes the model's actual generation process.",
        "Mistake 12: Believing decoding alone solves hallucination."
      ]
    },

    {
      heading: "56. Interview Questions",
      content: [
        "What is inference?",
        "What is a logit?",
        "How does softmax convert logits to probabilities?",
        "What is greedy decoding?",
        "What is sampling?",
        "What is temperature?",
        "What happens when temperature is lowered?",
        "What is top-k sampling?",
        "What is top-p sampling?",
        "What is repetition penalty?",
        "What is a stopping condition?",
        "What is beam search?",
        "What is the difference between greedy and beam search?",
        "What is deterministic generation?",
        "What is stochastic generation?",
        "What is a key-value cache?",
        "What is streaming generation?",
        "What is the difference between prefill and decode?",
        "What is the difference between latency and throughput?",
        "Why does decoding affect output quality?"
      ]
    }
  ],

  formulas: [
    "P_i = exp(z_i) / Σ_j exp(z_j)",
    "P_i(T) = exp(z_i/T) / Σ_j exp(z_j/T)",
    "x_t = argmax_x P(x | x_1,...,x_{t-1})",
    "x_t ~ P(x | x_1,...,x_{t-1})",
    "Throughput = processed work / time"
  ],

  codeExamples: [
    {
      title: "Softmax From Scratch",
      language: "python",
      description:
        "Implement a simple softmax function.",
      code: "import math\n\n\ndef softmax(logits):\n    exp_values = [math.exp(x) for x in logits]\n    total = sum(exp_values)\n    return [value / total for value in exp_values]\n\nlogits = [2.0, 1.0, 0.0]\nprobabilities = softmax(logits)\n\nfor probability in probabilities:\n    print(round(probability, 4))"
    },
    {
      title: "Greedy Decoding",
      language: "python",
      description:
        "Select the highest-probability candidate.",
      code: "probabilities = {\n    'learn': 0.45,\n    'build': 0.30,\n    'create': 0.15,\n    'run': 0.10\n}\n\nselected = max(probabilities, key=probabilities.get)\n\nprint('Selected token:', selected)"
    },
    {
      title: "Temperature Transformation",
      language: "python",
      description:
        "Demonstrate how temperature changes a softmax distribution.",
      code: "import math\n\n\ndef softmax_temperature(logits, temperature):\n    scaled = [x / temperature for x in logits]\n    exp_values = [math.exp(x) for x in scaled]\n    total = sum(exp_values)\n    return [x / total for x in exp_values]\n\nlogits = [3.0, 2.0, 1.0]\n\nfor temperature in [0.5, 1.0, 2.0]:\n    probabilities = softmax_temperature(logits, temperature)\n    print('Temperature:', temperature)\n    print([round(p, 4) for p in probabilities])"
    },
    {
      title: "Top-K Filtering",
      language: "python",
      description:
        "Keep only the k highest-probability candidates.",
      code: "probabilities = {\n    'learn': 0.35,\n    'build': 0.25,\n    'create': 0.18,\n    'run': 0.10,\n    'understand': 0.07,\n    'other': 0.05\n}\n\ntop_k = 3\n\nselected = sorted(\n    probabilities.items(),\n    key=lambda item: item[1],\n    reverse=True\n)[:top_k]\n\nprint(selected)"
    },
    {
      title: "Simple Sampling",
      language: "python",
      description:
        "Sample from a small probability distribution.",
      code: "import random\n\nwords = ['learn', 'build', 'create', 'run']\nprobabilities = [0.45, 0.30, 0.15, 0.10]\n\nfor _ in range(10):\n    token = random.choices(words, weights=probabilities, k=1)[0]\n    print(token)"
    },
    {
      title: "Toy Autoregressive Generator",
      language: "python",
      description:
        "Demonstrate the repeated generate-append loop.",
      code: "import random\n\ntransitions = {\n    'AI': [('helps', 0.6), ('uses', 0.4)],\n    'helps': [('developers', 0.7), ('students', 0.3)],\n    'uses': [('models', 0.6), ('data', 0.4)],\n    'developers': [('build', 1.0)],\n    'students': [('learn', 1.0)],\n    'models': [('patterns', 1.0)],\n    'data': [('effectively', 1.0)],\n    'build': [('systems', 1.0)],\n    'learn': [('concepts', 1.0)],\n    'patterns': [('.', 1.0)],\n    'effectively': [('.', 1.0)],\n    'systems': [('.', 1.0)],\n    'concepts': [('.', 1.0)]\n}\n\ncurrent = 'AI'\nresult = [current]\n\nfor _ in range(10):\n    choices = transitions.get(current)\n\n    if not choices:\n        break\n\n    words = [item[0] for item in choices]\n    weights = [item[1] for item in choices]\n\n    current = random.choices(words, weights=weights, k=1)[0]\n    result.append(current)\n\n    if current == '.':\n        break\n\nprint(' '.join(result))"
    }
  ],

  mathIntuition: [
    {
      concept: "Logits",
      explanation:
        "Logits are raw scores produced by the model before probability normalization."
    },
    {
      concept: "Softmax",
      explanation:
        "Softmax converts relative scores into a probability distribution."
    },
    {
      concept: "Temperature",
      explanation:
        "Temperature changes the sharpness of the distribution used for sampling."
    },
    {
      concept: "Greedy decoding",
      explanation:
        "Greedy decoding selects the highest-probability next token at every step."
    },
    {
      concept: "Sampling",
      explanation:
        "Sampling selects tokens according to a probability distribution, introducing controlled randomness."
    },
    {
      concept: "Top-k",
      explanation:
        "Top-k limits sampling to a fixed number of highest-probability candidates."
    },
    {
      concept: "Top-p",
      explanation:
        "Top-p keeps the smallest high-probability candidate set whose cumulative probability reaches a threshold."
    }
  ],

  exercises: [
    {
      question:
        "Explain the complete inference pipeline from prompt to final response.",
      difficulty: "Easy"
    },
    {
      question:
        "What is the difference between a logit and a probability?",
      difficulty: "Easy"
    },
    {
      question:
        "Calculate softmax for logits [2, 1, 0].",
      difficulty: "Medium"
    },
    {
      question:
        "Explain how temperature changes a probability distribution.",
      difficulty: "Medium"
    },
    {
      question:
        "Compare greedy decoding, sampling, top-k, and top-p.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain why top-p can keep a different number of tokens at different generation steps.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain beam search using a tree diagram.",
      difficulty: "Medium"
    },
    {
      question:
        "Design decoding settings for a creative writing application and explain your reasoning.",
      difficulty: "Hard"
    },
    {
      question:
        "Design decoding behavior for structured information extraction.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Build a Decoding Playground",
      task:
        "Create a Python program that lets the user experiment with greedy decoding, sampling, temperature, top-k, and top-p on a toy probability distribution.",
      requirements: [
        "Display original probabilities.",
        "Implement temperature.",
        "Implement greedy selection.",
        "Implement top-k.",
        "Implement top-p.",
        "Implement sampling.",
        "Allow repeated experiments."
      ]
    },
    {
      title: "Implement Top-P",
      task:
        "Implement nucleus sampling from scratch.",
      requirements: [
        "Sort candidates by probability.",
        "Calculate cumulative probability.",
        "Keep candidates until the threshold is reached.",
        "Renormalize the remaining probabilities.",
        "Sample one token."
      ]
    },
    {
      title: "Generation Simulator",
      task:
        "Build a complete toy autoregressive generator.",
      requirements: [
        "Start from a prompt token.",
        "Produce a probability distribution at every step.",
        "Apply a decoding strategy.",
        "Append the selected token.",
        "Stop at EOS or maximum length.",
        "Print every generation step."
      ]
    }
  ],

  summary: [
    "Inference uses trained model parameters to produce predictions or generated content.",
    "A language model produces logits over possible next tokens.",
    "Softmax converts logits into probabilities.",
    "Greedy decoding selects the highest-probability token.",
    "Sampling selects according to the probability distribution.",
    "Temperature changes the sharpness of the sampling distribution.",
    "Top-k restricts sampling to a fixed number of candidates.",
    "Top-p restricts sampling to a probability-mass threshold.",
    "Repetition penalties can reduce unwanted repetition.",
    "Maximum-new-token limits and stopping conditions control generation length.",
    "Beam search maintains multiple candidate sequences.",
    "Decoding is effectively a search strategy over possible output sequences.",
    "Key-value caching can make autoregressive generation more efficient.",
    "Streaming changes how output is delivered rather than changing the fundamental generation process.",
    "Latency and throughput are important inference-system metrics.",
    "Decoding controls do not replace factual grounding or application-level reliability mechanisms."
  ],

  keyTakeaways: [
    "The model produces probabilities; the decoder determines how those probabilities become output.",
    "Understanding logits and softmax is essential for understanding LLM generation.",
    "Temperature, top-k, top-p, and repetition controls change generation behavior.",
    "Greedy decoding is predictable, while sampling introduces controlled randomness.",
    "Beam search explores multiple candidate sequences.",
    "Generation is an autoregressive loop of prediction, selection, context update, and repetition.",
    "Inference engineering includes much more than calling a model: caching, streaming, batching, memory, latency, and stopping behavior all matter."
  ]
};

export default lesson6;

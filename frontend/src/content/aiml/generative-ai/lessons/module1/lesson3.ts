const lesson3 = {
  id: "lesson3",
  moduleId: "module1",
  lessonNumber: 3,

  title: "Generative AI Architecture & Model Families",
  subtitle:
    "Understand how modern generative systems are organized, how different model families work, and how models become complete AI applications.",

  description:
    "This lesson develops an architectural understanding of Generative AI. You will move from individual models to complete systems and learn how autoregressive models, VAEs, GANs, diffusion models, transformers, multimodal models, and application components fit together.",

  estimatedTime: "110–140 min",
  difficulty: "Intermediate",

  learningObjectives: [
    "Understand the difference between a model architecture and an AI application architecture.",
    "Identify the major layers of a Generative AI system.",
    "Understand the data, representation, model, decoding, and application layers.",
    "Classify major generative model families.",
    "Understand autoregressive model architecture at a high level.",
    "Understand the encoder-decoder pattern.",
    "Understand the generator-discriminator architecture of GANs.",
    "Understand the forward and reverse processes of diffusion models.",
    "Understand transformer-based generative architectures.",
    "Understand multimodal generative systems.",
    "Understand the difference between base models and application systems.",
    "Understand inference pipelines and production components.",
    "Identify where prompting, retrieval, tools, databases, and validation fit into an AI application."
  ],

  sections: [
    {
      heading: "1. Why Architecture Matters",
      content: [
        "Learning the name of a model is not enough to understand Generative AI. A developer needs to understand how information moves through the system.",
        "Architecture answers questions such as: What enters the system? How is the input represented? Where is context stored? How does the model transform the representation? How is the output generated? How is the output returned to the user?",
        "This lesson therefore studies Generative AI from two levels: model architecture and application architecture."
      ],
      classificationTree: [
        "Generative AI Architecture",
        "├── Model Architecture",
        "│   ├── Inputs",
        "│   ├── Representations",
        "│   ├── Neural-network layers",
        "│   ├── Parameters",
        "│   └── Generation mechanism",
        "└── Application Architecture",
        "    ├── User interface",
        "    ├── Backend",
        "    ├── Context",
        "    ├── Retrieval",
        "    ├── Model API",
        "    ├── Tools",
        "    ├── Validation",
        "    └── Monitoring"
      ]
    },

    {
      heading: "2. Model Architecture vs Application Architecture",
      content: [
        "A model architecture describes how a neural network or generative model processes information internally.",
        "An application architecture describes how the model is integrated into a complete software system.",
        "For example, a transformer is a model architecture. A chatbot containing a web interface, authentication, backend API, prompt construction, retrieval, an LLM, output validation, and logging is an application architecture.",
        "Confusing these two levels leads to poor system design."
      ],
      table: [
        {
          aspect: "Model architecture",
          meaning: "Internal computational structure of the model",
          examples: "Transformer, VAE, GAN, diffusion network"
        },
        {
          aspect: "Application architecture",
          meaning: "Software system surrounding and using the model",
          examples: "Frontend, API, database, retrieval, model service"
        }
      ]
    },

    {
      heading: "3. The Seven-Layer Generative AI Stack",
      content: [
        "A useful way to understand modern Generative AI systems is to divide them into layers. Real systems may combine or omit layers, but this model is useful for architecture analysis."
      ],
      classificationTree: [
        "Generative AI Stack",
        "├── 1. Data Layer",
        "│   ├── Text",
        "│   ├── Images",
        "│   ├── Audio",
        "│   └── Video",
        "├── 2. Representation Layer",
        "│   ├── Tokens",
        "│   ├── Embeddings",
        "│   └── Latent representations",
        "├── 3. Model Layer",
        "│   ├── Transformer",
        "│   ├── VAE",
        "│   ├── GAN",
        "│   └── Diffusion",
        "├── 4. Generation Layer",
        "│   ├── Sampling",
        "│   ├── Decoding",
        "│   └── Denoising",
        "├── 5. Context Layer",
        "│   ├── Prompt",
        "│   ├── Conversation",
        "│   └── Retrieved information",
        "├── 6. Tool Layer",
        "│   ├── Search",
        "│   ├── Databases",
        "│   ├── APIs",
        "│   └── Code execution",
        "└── 7. Application Layer",
        "    ├── UI",
        "    ├── Backend",
        "    ├── Security",
        "    ├── Evaluation",
        "    └── Monitoring"
      ]
    },

    {
      heading: "4. Data Layer",
      content: [
        "Every generative system ultimately operates on some form of data.",
        "Text models process language representations. Image models operate on visual information. Audio models process sound-related representations. Video models must represent both spatial and temporal information.",
        "Data quality strongly influences model quality. Poorly curated or inappropriate training data can introduce noise, bias, duplication, or unwanted behavior."
      ],
      process: [
        "Raw data",
        "Collection",
        "Cleaning",
        "Filtering",
        "Transformation",
        "Training representation"
      ]
    },

    {
      heading: "5. Representation Layer",
      content: [
        "Neural networks generally do not operate directly on high-level human concepts. Information must be represented numerically.",
        "For language, tokenization converts text into token IDs, which are then mapped into vector representations.",
        "For images, pixels or encoded visual features can be transformed into numerical representations.",
        "For other modalities, specialized encoders may transform the original signal into a representation suitable for the model."
      ],
      process: [
        "Human-readable or raw signal",
        "Tokenizer / encoder",
        "Numerical representation",
        "Neural-network processing"
      ]
    },

    {
      heading: "6. Model Layer",
      content: [
        "The model layer contains the learned neural network responsible for transforming representations.",
        "Different generative problems require different architectures.",
        "Language generation commonly uses transformer-based models. Image generation can use diffusion or other architectures. Latent-variable modeling can use VAEs. GANs use generator-discriminator systems.",
        "The model architecture determines how information is processed, while training determines the learned parameter values."
      ]
    },

    {
      heading: "7. Generation Layer",
      content: [
        "After the model computes its internal outputs, the system needs a mechanism for converting those outputs into actual generated content.",
        "For autoregressive language models, this involves decoding from next-token probabilities.",
        "For diffusion models, generation involves repeated denoising steps.",
        "The generation mechanism can strongly influence output quality, diversity, speed, and reproducibility."
      ],
      classificationTree: [
        "Generation Mechanisms",
        "├── Autoregressive decoding",
        "│   ├── Greedy selection",
        "│   ├── Sampling",
        "│   └── Constrained decoding",
        "├── Latent sampling",
        "├── Adversarial generation",
        "└── Iterative denoising"
      ]
    },

    {
      heading: "8. Context Layer",
      content: [
        "Modern AI applications often provide models with context beyond the immediate user request.",
        "Context can include system instructions, conversation history, retrieved documents, structured data, tool results, user preferences, or application state.",
        "Context engineering is therefore a major part of modern Generative AI application development."
      ],
      process: [
        "User input",
        "System instructions",
        "Conversation history",
        "External knowledge",
        "Tool results",
        "Combined context",
        "Model"
      ]
    },

    {
      heading: "9. Tool Layer",
      content: [
        "A generative model by itself may not have direct access to every external capability required by an application.",
        "Tools allow an AI system to interact with external services such as databases, search systems, calculators, APIs, file systems, or other software.",
        "The model can determine when a tool may be useful, while the application executes the tool and provides the result back to the model."
      ],
      classificationTree: [
        "AI Tools",
        "├── Information",
        "│   ├── Search",
        "│   └── Retrieval",
        "├── Data",
        "│   ├── SQL database",
        "│   └── Vector database",
        "├── Computation",
        "│   ├── Calculator",
        "│   └── Code execution",
        "├── External services",
        "│   ├── Weather API",
        "│   ├── Payment API",
        "│   └── Business API",
        "└── Actions",
        "    ├── Create",
        "    ├── Update",
        "    └── Notify"
      ]
    },

    {
      heading: "10. Application Layer",
      content: [
        "The application layer is where users interact with the AI system.",
        "A production application may contain a frontend, backend, authentication, authorization, databases, model APIs, monitoring, evaluation, and security controls.",
        "This layer turns a model capability into a usable software product."
      ]
    },

    {
      heading: "11. Autoregressive Architecture",
      content: [
        "An autoregressive model generates a sequence one element at a time.",
        "For language models, the elements are usually tokens.",
        "At every generation step, the model receives the current context and computes a distribution over possible next tokens.",
        "The selected token is added to the context and the model runs again."
      ],
      process: [
        "Input sequence",
        "Token representations",
        "Neural network",
        "Logits",
        "Probability distribution",
        "Decoding",
        "Next token",
        "Append token",
        "Repeat"
      ]
    },

    {
      heading: "12. Autoregressive Mathematical View",
      content: [
        "The probability of a sequence can be decomposed into conditional probabilities.",
        "This decomposition is one of the foundations of language modeling."
      ],
      formulas: [
        "P(x_1,...,x_T) = P(x_1) × P(x_2|x_1) × ... × P(x_T|x_1,...,x_{T-1})",
        "P(x_t|x_1,...,x_{t-1})"
      ],
      contentAfterFormula: [
        "The second expression represents the probability of the next token given the tokens that came before it."
      ]
    },

    {
      heading: "13. Transformer Architecture",
      content: [
        "Transformers are neural-network architectures built around attention mechanisms.",
        "Attention allows the model to dynamically determine which parts of the available context are relevant when computing representations.",
        "Modern language models commonly use repeated transformer blocks containing attention-related computation, feed-forward computation, residual pathways, and normalization.",
        "The exact architecture differs among model families."
      ],
      classificationTree: [
        "Transformer Block",
        "├── Input representation",
        "├── Attention mechanism",
        "│   ├── Query",
        "│   ├── Key",
        "│   └── Value",
        "├── Residual connection",
        "├── Normalization",
        "├── Feed-forward network",
        "├── Residual connection",
        "└── Normalization"
      ]
    },

    {
      heading: "14. Encoder-Decoder Architecture",
      content: [
        "The encoder-decoder pattern separates representation of the input from generation of the output.",
        "The encoder transforms an input sequence into internal representations. The decoder uses those representations to generate an output sequence.",
        "This pattern is useful for tasks where one sequence must be transformed into another, such as translation and other sequence-to-sequence problems."
      ],
      process: [
        "Input sequence",
        "Encoder",
        "Encoded representation",
        "Decoder",
        "Output generation"
      ]
    },

    {
      heading: "15. Encoder-Only, Decoder-Only, and Encoder-Decoder",
      table: [
        {
          architecture: "Encoder-only",
          generalRole: "Build representations",
          typicalUse: "Understanding or classification tasks"
        },
        {
          architecture: "Decoder-only",
          generalRole: "Autoregressive generation",
          typicalUse: "Text generation and LLM-style applications"
        },
        {
          architecture: "Encoder-decoder",
          generalRole: "Transform one representation into another sequence",
          typicalUse: "Sequence-to-sequence tasks"
        }
      ],
      contentAfterTable: [
        "These are architectural patterns rather than absolute boundaries. Modern model designs can contain additional mechanisms and variations."
      ]
    },

    {
      heading: "16. VAE Architecture",
      content: [
        "A VAE contains an encoder and decoder connected through a probabilistic latent representation.",
        "The encoder maps the input into parameters of a latent distribution. A latent vector is sampled from that distribution. The decoder then attempts to reconstruct or generate the target output."
      ],
      process: [
        "Input",
        "Encoder",
        "Latent distribution",
        "Sampling",
        "Latent vector",
        "Decoder",
        "Generated output"
      ],
      formulas: [
        "z ~ q_phi(z|x)",
        "x_hat = decoder_theta(z)"
      ]
    },

    {
      heading: "17. GAN Architecture",
      content: [
        "GANs contain two networks with competing roles.",
        "The generator maps a source of randomness into synthetic samples.",
        "The discriminator receives samples and estimates whether they resemble real data or generated data.",
        "Training alternates between improving the discriminator and improving the generator."
      ],
      process: [
        "Random noise",
        "Generator",
        "Synthetic sample",
        "Discriminator",
        "Real/fake assessment",
        "Loss",
        "Parameter updates"
      ]
    },

    {
      heading: "18. Diffusion Architecture",
      content: [
        "Diffusion systems generally involve a process for progressively corrupting data with noise and a learned reverse process that removes noise.",
        "For generation, the system starts from a noisy state and repeatedly predicts how the state should be transformed toward the target data distribution.",
        "Modern implementations may operate in different spaces and use sophisticated conditioning mechanisms."
      ],
      process: [
        "Random noise",
        "Denoising model",
        "Denoising step",
        "Updated representation",
        "Repeated denoising",
        "Generated sample"
      ]
    },

    {
      heading: "19. Model Family Classification",
      classificationTree: [
        "Generative Models",
        "├── Autoregressive",
        "│   └── Sequence probability factorization",
        "├── Latent-variable",
        "│   └── VAE",
        "├── Adversarial",
        "│   └── GAN",
        "├── Diffusion",
        "│   └── Iterative denoising",
        "├── Flow-based",
        "│   └── Invertible transformations",
        "└── Hybrid / Multimodal",
        "    └── Multiple mechanisms combined"
      ]
    },

    {
      heading: "20. Flow-Based Generative Models",
      content: [
        "Flow-based models use invertible transformations to map between a simple base distribution and a more complex data distribution.",
        "Because the transformation is invertible, the model can support useful probabilistic calculations involving density estimation.",
        "Flow-based models are an important part of the history and theory of deep generative modeling, even though other model families dominate many current application areas."
      ],
      process: [
        "Simple base distribution",
        "Invertible transformation",
        "Complex learned distribution",
        "Generated sample"
      ]
    },

    {
      heading: "21. Multimodal Generative AI",
      content: [
        "Multimodal systems work with more than one type of information, such as text, images, audio, or video.",
        "A multimodal architecture must provide mechanisms for representing and connecting information from different modalities.",
        "For example, a system may receive an image and text question and produce a text answer.",
        "More advanced systems can generate or transform content across multiple modalities."
      ],
      classificationTree: [
        "Multimodal AI",
        "├── Text → Text",
        "├── Text → Image",
        "├── Image → Text",
        "├── Text → Audio",
        "├── Audio → Text",
        "├── Text → Video",
        "├── Image → Image",
        "└── Multiple modalities → Multiple modalities"
      ]
    },

    {
      heading: "22. Multimodal Application Pipeline",
      process: [
        "User provides multiple inputs",
        "Each modality is processed",
        "Modal representations are aligned",
        "Shared or connected model processes context",
        "Generation mechanism produces output",
        "Output is converted to required modality",
        "Application displays result"
      ]
    },

    {
      heading: "23. Foundation Model Architecture",
      content: [
        "Foundation models are designed to support many downstream tasks rather than one narrow application.",
        "Large-scale pretraining creates a general-purpose learned representation or generation capability.",
        "Applications can then specialize the model using prompting, retrieval, fine-tuning, adapters, tools, structured outputs, or combinations of these techniques."
      ],
      process: [
        "Large dataset",
        "Large-scale pretraining",
        "Foundation model",
        "Application adaptation",
        "Task-specific context",
        "Generated result"
      ]
    },

    {
      heading: "24. Base Model vs AI Application",
      table: [
        {
          component: "Base model",
          responsibility: "Provides learned general capabilities"
        },
        {
          component: "Prompt",
          responsibility: "Provides instructions and task context"
        },
        {
          component: "Retrieval",
          responsibility: "Provides external information"
        },
        {
          component: "Tools",
          responsibility: "Provides external capabilities"
        },
        {
          component: "Application",
          responsibility: "Coordinates the complete user experience"
        }
      ]
    },

    {
      heading: "25. Complete LLM Application Architecture",
      classificationTree: [
        "User",
        "└── Frontend",
        "    └── Backend API",
        "        ├── Authentication",
        "        ├── Input validation",
        "        ├── Prompt construction",
        "        ├── Conversation state",
        "        ├── Retrieval",
        "        │   └── Vector database",
        "        ├── Tool execution",
        "        ├── Model API",
        "        │   └── LLM",
        "        ├── Output validation",
        "        ├── Logging",
        "        └── Monitoring"
      ]
    },

    {
      heading: "26. End-to-End Request Flow",
      process: [
        "User enters a request",
        "Frontend validates basic input",
        "Frontend sends request to backend",
        "Backend authenticates request",
        "Backend validates input",
        "Application retrieves relevant context if required",
        "Application constructs model input",
        "Model processes the request",
        "Model generates output",
        "Application validates the result",
        "Backend returns response",
        "Frontend displays result",
        "System records appropriate telemetry"
      ]
    },

    {
      heading: "27. Prompt Construction",
      content: [
        "The prompt sent to a model can be much more than the raw sentence entered by the user.",
        "An application can combine system instructions, user input, conversation history, retrieved information, tool results, output-format requirements, and other context.",
        "This combined request is often constructed dynamically by the application."
      ],
      classificationTree: [
        "Model Input",
        "├── System instructions",
        "├── Developer instructions",
        "├── User request",
        "├── Conversation history",
        "├── Retrieved context",
        "├── Tool results",
        "└── Output constraints"
      ]
    },

    {
      heading: "28. Output Generation Is Not the End",
      content: [
        "A production application should not necessarily display every model output immediately.",
        "Depending on the application, the output may need schema validation, safety checks, formatting, factual grounding checks, business-rule validation, or tool-result verification.",
        "This is especially important when generated output is consumed by another program rather than directly read by a human."
      ],
      process: [
        "Model output",
        "Parse",
        "Validate",
        "Check constraints",
        "Transform if necessary",
        "Return to user or downstream system"
      ]
    },

    {
      heading: "29. Structured Generation",
      content: [
        "Many applications need machine-readable output rather than free-form text.",
        "For example, a backend might require a JSON object containing a title, summary, and list of actions.",
        "Structured generation reduces ambiguity and makes it easier for software systems to consume model output.",
        "The exact mechanism for enforcing structure depends on the model API and application framework."
      ],
      example: {
        input: "Extract the important fields from this customer request.",
        outputShape: {
          intent: "string",
          priority: "string",
          summary: "string",
          actions: [
            "string"
          ]
        }
      }
    },

    {
      heading: "30. Context Window",
      content: [
        "A model cannot necessarily process unlimited context in one request.",
        "The context window defines how much input and generated context the model can handle within a particular interaction.",
        "Applications therefore need strategies for managing long conversations and large documents.",
        "Common strategies include summarization, retrieval, chunking, selective history, and context compression."
      ]
    },

    {
      heading: "31. Latency and Cost",
      content: [
        "A technically correct architecture may still be unsuitable if it is too slow or expensive.",
        "Generative AI systems must consider model size, number of generated tokens, input context size, retrieval operations, tool calls, network latency, and infrastructure cost.",
        "Architecture is therefore a trade-off between capability, quality, speed, reliability, and cost."
      ],
      table: [
        {
          factor: "Large model",
          potentialEffect: "Higher capability but potentially higher latency and cost"
        },
        {
          factor: "Long context",
          potentialEffect: "More information but greater processing requirements"
        },
        {
          factor: "Multiple tool calls",
          potentialEffect: "More capability but more latency and failure points"
        },
        {
          factor: "Retrieval",
          potentialEffect: "Better access to external knowledge but adds infrastructure"
        }
      ]
    },

    {
      heading: "32. Reliability Architecture",
      content: [
        "Reliability should be designed into the system rather than added after deployment.",
        "A robust architecture can include input validation, retrieval grounding, structured output, deterministic business logic, tool validation, monitoring, evaluation datasets, retries, timeouts, and human review where appropriate."
      ],
      classificationTree: [
        "Reliability",
        "├── Input validation",
        "├── Context quality",
        "├── Retrieval quality",
        "├── Model quality",
        "├── Output validation",
        "├── Tool validation",
        "├── Evaluation",
        "├── Monitoring",
        "└── Recovery mechanisms"
      ]
    },

    {
      heading: "33. Security Architecture",
      content: [
        "Generative AI applications introduce security concerns at both the model and application layers.",
        "Applications need to consider authentication, authorization, data exposure, malicious input, prompt injection, insecure tool access, sensitive information handling, and unsafe downstream actions.",
        "The correct security design depends on the application and its threat model."
      ]
    },

    {
      heading: "34. Where RAG Fits",
      content: [
        "Retrieval-Augmented Generation belongs primarily to the application/context layer rather than being a replacement for the underlying generative model.",
        "The model remains responsible for generating the answer, while retrieval supplies relevant external information.",
        "This distinction becomes important when designing systems that need knowledge beyond the model's internal parameters."
      ],
      process: [
        "Question",
        "Retriever",
        "Relevant chunks",
        "Context builder",
        "Generative model",
        "Grounded response"
      ]
    },

    {
      heading: "35. Where Agents Fit",
      content: [
        "An agent-style system adds decision-making and tool-use loops around a generative model.",
        "Instead of simply generating a single answer, the system can determine a sequence of actions, call tools, inspect results, and continue until the task reaches a defined stopping condition.",
        "Agents therefore represent an application architecture pattern built on top of model capabilities."
      ],
      process: [
        "User goal",
        "Model reasoning or planning",
        "Tool selection",
        "Tool execution",
        "Observe result",
        "Update context",
        "Continue or finish"
      ]
    },

    {
      heading: "36. Model Selection",
      content: [
        "Choosing a generative model should begin with the task rather than the popularity of a model.",
        "Important considerations include modality, quality requirements, context requirements, latency, cost, privacy, deployment constraints, tool support, structured-output support, and evaluation results.",
        "A smaller model can sometimes be more appropriate than a larger model when the task is narrow and latency or cost matters."
      ],
      classificationTree: [
        "Model Selection",
        "├── Task",
        "├── Modality",
        "├── Quality",
        "├── Context",
        "├── Latency",
        "├── Cost",
        "├── Privacy",
        "├── Deployment",
        "├── Tool support",
        "└── Evaluation results"
      ]
    },

    {
      heading: "37. Architecture Decision Example",
      content: [
        "Suppose an organization wants an internal question-answering assistant over company documents.",
        "A reasonable architecture might contain a web interface, authentication, backend API, document ingestion pipeline, chunking, embeddings, vector search, context construction, a language model, response validation, logging, and evaluation.",
        "The important point is that simply connecting a chatbot to a model does not automatically create a reliable document question-answering system."
      ],
      process: [
        "Employee question",
        "Authentication",
        "Question processing",
        "Semantic retrieval",
        "Relevant company documents",
        "Context construction",
        "LLM",
        "Grounded response",
        "Citation or source information",
        "Logging and evaluation"
      ]
    },

    {
      heading: "38. Architecture Trade-Offs",
      table: [
        {
          decision: "Local model vs API",
          consideration: "Privacy, infrastructure, cost, latency, control"
        },
        {
          decision: "Small vs large model",
          consideration: "Capability, cost, latency"
        },
        {
          decision: "RAG vs model-only",
          consideration: "External knowledge and freshness"
        },
        {
          decision: "Single call vs agent loop",
          consideration: "Simplicity versus multi-step capability"
        },
        {
          decision: "Free-form vs structured output",
          consideration: "Human flexibility versus machine reliability"
        }
      ]
    },

    {
      heading: "39. Complete Architecture Mental Model",
      content: [
        "The most useful architecture mental model is to think of Generative AI as a pipeline rather than a single neural network.",
        "Data becomes representations. Representations are processed by a model. The model produces a probability distribution or intermediate result. A generation mechanism converts that into content. The application adds context, tools, validation, and user-facing behavior.",
        "Once this mental model is clear, later topics such as LLMs, embeddings, RAG, agents, and multimodal AI become much easier to understand."
      ],
      process: [
        "DATA",
        "↓",
        "REPRESENTATION",
        "↓",
        "MODEL",
        "↓",
        "GENERATION",
        "↓",
        "CONTEXT + TOOLS",
        "↓",
        "VALIDATION",
        "↓",
        "APPLICATION",
        "↓",
        "USER"
      ]
    },

    {
      heading: "40. Common Mistakes",
      content: [
        "Mistake 1: Treating a model and an application as the same thing.",
        "Mistake 2: Choosing a model before defining the task.",
        "Mistake 3: Ignoring representation and tokenization.",
        "Mistake 4: Sending unlimited conversation history into every request.",
        "Mistake 5: Assuming retrieval automatically guarantees correct answers.",
        "Mistake 6: Allowing a model to directly perform sensitive actions without application-level controls.",
        "Mistake 7: Ignoring latency and cost.",
        "Mistake 8: Returning free-form model output when the backend actually needs structured data.",
        "Mistake 9: Deploying without an evaluation strategy.",
        "Mistake 10: Assuming a bigger model automatically means a better application."
      ]
    },

    {
      heading: "41. Interview Questions",
      content: [
        "What is the difference between model architecture and application architecture?",
        "What are the major layers of a Generative AI system?",
        "What is an autoregressive architecture?",
        "What is a transformer?",
        "What is an encoder-decoder architecture?",
        "How does a VAE work at a high level?",
        "How does a GAN work?",
        "How does diffusion-based generation work?",
        "What is a multimodal model?",
        "What is the difference between a foundation model and an AI application?",
        "Where does RAG fit in a Generative AI architecture?",
        "Where do tools fit?",
        "Why is output validation important?",
        "What factors should be considered when selecting a model?",
        "Why are latency and cost architectural concerns?",
        "What is structured generation?",
        "Why is context management important?"
      ]
    }
  ],

  formulas: [
    "P(x_1,...,x_T) = ∏ P(x_t|x_1,...,x_{t-1})",
    "p_model(x) ≈ p_data(x)",
    "z ~ q_phi(z|x)",
    "x_hat = decoder_theta(z)",
    "cosine_similarity(a,b) = (a · b) / (||a|| ||b||)"
  ],

  codeExamples: [
    {
      title: "Simple Autoregressive Generator",
      language: "python",
      description:
        "A toy example showing how generated output can be constructed one element at a time.",
      code: "import random\n\ntransitions = {\n    'Generative': ['AI', 'models'],\n    'AI': ['can', 'helps'],\n    'models': ['learn', 'generate'],\n    'can': ['generate', 'learn'],\n    'helps': ['developers', 'users'],\n    'learn': ['patterns', 'representations'],\n    'generate': ['content', 'outputs']\n}\n\nword = 'Generative'\nresult = [word]\n\nfor _ in range(8):\n    choices = transitions.get(word, ['.'])\n    word = random.choice(choices)\n    result.append(word)\n\nprint(' '.join(result))"
    },
    {
      title: "Layered AI Application Representation",
      language: "python",
      description:
        "Represent a simplified Generative AI architecture using Python dictionaries.",
      code: "architecture = {\n    'input': 'user prompt',\n    'context': ['instructions', 'history', 'retrieved data'],\n    'model': 'generative model',\n    'generation': 'decoding',\n    'validation': 'schema and application checks',\n    'output': 'response'\n}\n\nfor layer, value in architecture.items():\n    print(f'{layer}: {value}')"
    },
    {
      title: "Simple Structured Output Validation",
      language: "python",
      description:
        "Demonstrates why application code should validate generated structured data.",
      code: "response = {\n    'intent': 'question',\n    'priority': 'medium',\n    'summary': 'Explain Generative AI'\n}\n\nrequired_fields = ['intent', 'priority', 'summary']\n\nvalid = all(field in response for field in required_fields)\n\nprint('Valid response:', valid)"
    }
  ],

  mathIntuition: [
    {
      concept: "Architecture",
      explanation:
        "Architecture describes how computations and information flow through a system."
    },
    {
      concept: "Autoregressive factorization",
      explanation:
        "A complex sequence distribution can be represented as a sequence of conditional predictions."
    },
    {
      concept: "Latent representation",
      explanation:
        "A latent representation captures hidden structure in a numerical space that can support generation."
    },
    {
      concept: "Context",
      explanation:
        "Context changes the information available to the model and therefore influences the generated output."
    },
    {
      concept: "Generation",
      explanation:
        "Generation converts model outputs into actual content using sampling, decoding, denoising, or another mechanism."
    }
  ],

  exercises: [
    {
      question:
        "Explain the difference between a model architecture and an application architecture.",
      difficulty: "Easy"
    },
    {
      question:
        "Draw the seven-layer Generative AI stack.",
      difficulty: "Easy"
    },
    {
      question:
        "Explain how an autoregressive language model generates a paragraph.",
      difficulty: "Medium"
    },
    {
      question:
        "Compare encoder-only, decoder-only, and encoder-decoder architectures.",
      difficulty: "Medium"
    },
    {
      question:
        "Draw a VAE architecture and label every major component.",
      difficulty: "Medium"
    },
    {
      question:
        "Draw the generator-discriminator loop of a GAN.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain the high-level architecture of a diffusion model.",
      difficulty: "Medium"
    },
    {
      question:
        "Design an architecture for an AI assistant that answers questions from university documents.",
      difficulty: "Hard"
    },
    {
      question:
        "Explain where RAG, tools, validation, and monitoring belong in an AI application.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Build an Architecture Map",
      task:
        "Create a Python dictionary representing a complete Generative AI application.",
      requirements: [
        "Include frontend.",
        "Include backend.",
        "Include context.",
        "Include model.",
        "Include retrieval.",
        "Include tools.",
        "Include validation.",
        "Include monitoring."
      ]
    },
    {
      title: "Toy Autoregressive Model",
      task:
        "Create a dictionary-based transition model and generate a sequence one element at a time.",
      requirements: [
        "Use at least 15 transitions.",
        "Generate at least 20 elements.",
        "Allow a configurable starting token.",
        "Stop safely when no transition exists."
      ]
    },
    {
      title: "Architecture Decision Program",
      task:
        "Create a Python program that asks the developer about task requirements and prints architecture considerations.",
      requirements: [
        "Ask whether external knowledge is needed.",
        "Ask whether structured output is needed.",
        "Ask whether tool access is required.",
        "Ask whether low latency is important.",
        "Print the resulting architecture recommendations."
      ]
    }
  ],

  summary: [
    "Generative AI should be understood at both the model and application levels.",
    "A complete AI application contains many components beyond the neural network.",
    "The major layers include data, representation, model, generation, context, tools, and application infrastructure.",
    "Autoregressive models generate sequences step by step.",
    "Transformers use attention-based computation and are central to modern language generation.",
    "VAEs use probabilistic latent representations.",
    "GANs use generator-discriminator competition.",
    "Diffusion models use iterative denoising.",
    "Multimodal systems connect multiple forms of information.",
    "RAG supplies external knowledge to a generative model.",
    "Tools allow AI applications to interact with external systems.",
    "Validation and monitoring are essential parts of production architecture.",
    "Model selection should consider task, quality, latency, cost, privacy, context, and deployment requirements."
  ],

  keyTakeaways: [
    "A model is not the same thing as an AI application.",
    "Architecture is about information flow and system responsibilities.",
    "Different generative model families use different generation mechanisms.",
    "Modern Generative AI applications combine models with context, retrieval, tools, and software infrastructure.",
    "The architecture surrounding a model is often just as important as the model itself.",
    "Understanding this architecture prepares you for the next lessons on LLMs and transformer-based systems."
  ]
};

export default lesson3;

const lesson1 = {
  id: "lesson1",
  moduleId: "module1",
  lessonNumber: 1,

  title: "What Is Generative AI?",
  subtitle:
    "Understand the foundations, evolution, architecture, probability, training, inference, and real-world ecosystem of Generative AI.",

  description:
    "This lesson builds a complete mental model of Generative AI. You will learn how Generative AI fits inside Artificial Intelligence, Machine Learning, and Deep Learning; how generative models differ from predictive models; how generation works probabilistically; how training and inference differ; what foundation models are; and how modern Generative AI applications are constructed.",

  estimatedTime: "90–120 min",
  difficulty: "Beginner → Intermediate",

  learningObjectives: [
    "Define Artificial Intelligence, Machine Learning, Deep Learning, and Generative AI.",
    "Explain where Generative AI fits within the broader AI hierarchy.",
    "Distinguish generative models from discriminative and predictive models.",
    "Understand the concept of learning a data distribution.",
    "Understand conditional probability and next-token prediction at an intuitive level.",
    "Differentiate model training from model inference.",
    "Understand the idea of foundation models.",
    "Identify major Generative AI modalities including text, image, audio, video, and code.",
    "Understand autoregressive generation at a conceptual level.",
    "Understand the major families of generative models.",
    "Understand the high-level architecture of a Generative AI application.",
    "Recognize important limitations such as hallucination, bias, outdated information, and unreliable generation.",
    "Build a foundation for later topics such as LLMs, transformers, embeddings, prompting, RAG, agents, and multimodal AI."
  ],

  sections: [
    {
      heading: "1. Why Generative AI Matters",
      content: [
        "Artificial Intelligence has traditionally focused on systems that classify, predict, detect, recommend, optimize, or make decisions. Generative AI extends this capability by allowing models to produce new content.",
        "A traditional machine-learning model might answer a question such as: Is this image a cat or a dog? A generative system can instead create a new image, write an explanation, generate code, compose audio, or produce another form of content.",
        "The important idea is not simply that the output is new. The model learns patterns from data and uses those learned patterns to construct an output that follows the statistical structure of the data on which it was trained.",
        "This makes Generative AI different from a simple database lookup system. A lookup system retrieves stored information. A generative model computes an output from learned parameters and the current input context."
      ]
    },

    {
      heading: "2. The AI → ML → Deep Learning → Generative AI Relationship",
      content: [
        "Generative AI should be understood as part of a much larger technology ecosystem.",
        "Artificial Intelligence is the broadest concept. Machine Learning is a major approach within AI in which systems learn patterns from data. Deep Learning is a family of machine-learning methods based primarily on neural networks with multiple layers. Modern Generative AI systems frequently rely on deep-learning architectures, although the exact model family depends on the modality and task."
      ],
      process: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Large neural-network architectures",
        "Generative models",
        "Foundation models",
        "Generative AI applications"
      ],
      contentAfterProcess: [
        "The hierarchy is useful as a learning model, but these categories are not perfect mathematical subsets in every historical or technical context. The practical point is that Generative AI builds on many concepts from machine learning, deep learning, probability, optimization, and representation learning."
      ]
    },

    {
      heading: "3. What Is Generative AI?",
      content: [
        "Generative AI refers to AI systems designed to generate new content from patterns learned from data.",
        "The generated content can include natural language, source code, images, audio, music, video, synthetic data, structured information, and other forms of digital content.",
        "A useful high-level abstraction is: input or context → learned generative model → generated output.",
        "The input can be a text prompt, an image, audio, structured data, another piece of content, or a combination of modalities."
      ],
      process: [
        "User input or context",
        "Preprocessing and representation",
        "Generative model",
        "Probability or generation mechanism",
        "Output construction",
        "Generated content"
      ]
    },

    {
      heading: "4. Generative AI vs Traditional Predictive AI",
      content: [
        "Predictive systems generally estimate a target, class, score, probability, or decision from an input.",
        "For example, a classifier may receive an image and predict the class cat with a high probability.",
        "A generative system instead attempts to model enough structure in the data to create an output. For example, a language model can receive a partial sentence and generate a continuation.",
        "The distinction is not simply that one system predicts and another generates. Generation itself involves prediction. Modern language models generate text by repeatedly predicting what token should come next."
      ],
      table: [
        {
          aspect: "Primary purpose",
          predictive: "Predict or classify an outcome",
          generative: "Produce new content"
        },
        {
          aspect: "Typical output",
          predictive: "Class, score, probability, label",
          generative: "Text, image, audio, code, video, structured content"
        },
        {
          aspect: "Example",
          predictive: "Spam or not spam",
          generative: "Write an email response"
        },
        {
          aspect: "Core question",
          predictive: "What is the likely target?",
          generative: "What content can be generated given the context?"
        }
      ]
    },

    {
      heading: "5. Generative AI vs Discriminative Modeling",
      content: [
        "A useful theoretical distinction is between discriminative and generative modeling.",
        "A discriminative model is commonly associated with learning a conditional relationship between inputs and targets, represented as P(y|x).",
        "A generative model may model a distribution such as P(x), a joint distribution P(x,y), or a conditional generation process such as P(x|y), depending on the model and task.",
        "These definitions are mathematical abstractions. Real-world architectures can blur simple textbook boundaries, so the equations should be treated as conceptual tools rather than rigid labels for every modern model."
      ],
      formulas: [
        "P(y|x)",
        "P(x)",
        "P(x,y)",
        "P(x|y)"
      ]
    },

    {
      heading: "6. The Probability Behind Generation",
      content: [
        "Probability is one of the most important foundations of Generative AI.",
        "Suppose a system is generating text. It does not normally choose the entire response as one indivisible object. Instead, a language model can decompose the generation problem into a sequence of conditional predictions.",
        "For a sequence of tokens x1, x2, ..., xT, the probability of the complete sequence can be decomposed using the chain rule of probability.",
        "This gives a mathematical foundation for autoregressive language generation."
      ],
      formulas: [
        "P(x1, x2, ..., xT) = P(x1) P(x2|x1) P(x3|x1,x2) ... P(xT|x1,...,xT-1)",
        "P(x_t | x_1, x_2, ..., x_{t-1})"
      ],
      contentAfterFormula: [
        "The second expression means: given everything that has already appeared in the sequence, estimate the probability of the next token.",
        "This idea becomes central when we study tokenization, language modeling, transformers, and large language models."
      ]
    },

    {
      heading: "7. A Simple Next-Token Example",
      content: [
        "Consider the partial sentence: Machine learning is.",
        "A language model can assign different probabilities to possible next tokens. The probabilities are not fixed facts; they depend on the model, context, vocabulary, decoding configuration, and learned parameters.",
        "For teaching purposes, imagine that the model produces a distribution such as learning, powerful, useful, changing, and other candidates.",
        "The model then selects or samples a token according to the decoding strategy."
      ],
      table: [
        {
          token: "powerful",
          exampleProbability: "0.30",
          meaning: "A possible continuation"
        },
        {
          token: "useful",
          exampleProbability: "0.22",
          meaning: "Another plausible continuation"
        },
        {
          token: "changing",
          exampleProbability: "0.14",
          meaning: "Another candidate"
        },
        {
          token: "and",
          exampleProbability: "0.08",
          meaning: "Another candidate"
        }
      ],
      contentAfterTable: [
        "These numbers are illustrative only. They are not measurements from a particular production model.",
        "After one token is selected, that token becomes part of the context and the model performs another prediction."
      ]
    },

    {
      heading: "8. Autoregressive Generation",
      content: [
        "Autoregressive generation means that the model generates a sequence step by step, using previously generated elements as part of the context for later predictions.",
        "For text, the sequence elements are commonly tokens.",
        "The generation process therefore looks like a feedback loop: context → prediction → selected token → expanded context → prediction again.",
        "This process continues until a stopping condition is reached."
      ],
      process: [
        "Start with the prompt",
        "Tokenize the current text",
        "Run the model",
        "Compute next-token probabilities",
        "Apply a decoding strategy",
        "Select the next token",
        "Append the token to the context",
        "Repeat until stopping"
      ]
    },

    {
      heading: "9. What Is a Token?",
      content: [
        "A token is a unit processed by a language model. A token is not necessarily equal to a complete English word.",
        "Depending on the tokenizer, a word can correspond to one token or several tokens. Punctuation, spaces, word fragments, numbers, and symbols can also be represented as tokens.",
        "Tokenization is important because neural networks operate on numerical representations rather than directly processing raw text strings.",
        "We will study tokenization in detail in Module 3."
      ],
      process: [
        "Human-readable text",
        "Tokenizer",
        "Token IDs",
        "Embeddings",
        "Transformer computation",
        "Output token probabilities"
      ]
    },

    {
      heading: "10. Major Types of Generative AI",
      content: [
        "Generative AI is not a single model type. Different architectures and training objectives are used for different data modalities and generation problems."
      ],
      classificationTree: [
        "Generative AI",
        "├── Text Generation",
        "│   ├── Language Models",
        "│   └── Large Language Models",
        "├── Image Generation",
        "│   ├── Diffusion Models",
        "│   └── Other Generative Architectures",
        "├── Audio Generation",
        "│   ├── Speech",
        "│   └── Music",
        "├── Video Generation",
        "├── Code Generation",
        "└── Multimodal Generation"
      ]
    },

    {
      heading: "11. Autoregressive Models",
      content: [
        "Autoregressive models generate a sequence by modeling conditional probabilities over successive elements.",
        "For language, the model predicts the next token conditioned on previous tokens.",
        "Autoregressive modeling is especially important for modern decoder-style language models.",
        "The major advantage is that the same learned mechanism can be applied repeatedly to construct sequences of arbitrary practical length within the model's context limitations."
      ],
      formulas: [
        "P(x_1,...,x_T) = ∏_{t=1}^{T} P(x_t | x_1,...,x_{t-1})"
      ]
    },

    {
      heading: "12. Variational Autoencoders",
      content: [
        "A Variational Autoencoder, commonly called a VAE, is a generative architecture based on learning a structured latent representation.",
        "A VAE contains an encoder that maps input data toward a latent representation and a decoder that attempts to reconstruct or generate data from that representation.",
        "Unlike a simple deterministic autoencoder, a VAE introduces a probabilistic latent-variable formulation and a regularization objective that encourages a useful latent distribution.",
        "VAEs are important because they provide an intuitive introduction to latent spaces and probabilistic generation."
      ],
      process: [
        "Input data",
        "Encoder",
        "Latent distribution",
        "Latent sample",
        "Decoder",
        "Generated or reconstructed output"
      ]
    },

    {
      heading: "13. Generative Adversarial Networks",
      content: [
        "Generative Adversarial Networks, or GANs, use two neural networks with competing objectives.",
        "The generator attempts to produce synthetic examples, while the discriminator attempts to distinguish generated examples from real examples.",
        "Training creates an adversarial process in which the generator learns to produce increasingly convincing samples.",
        "GANs played a major role in the development of generative image synthesis and remain an important concept even though newer approaches such as diffusion models are widely used for many image-generation tasks."
      ],
      process: [
        "Random input",
        "Generator",
        "Synthetic sample",
        "Discriminator",
        "Real vs generated assessment",
        "Loss",
        "Parameter updates"
      ]
    },

    {
      heading: "14. Diffusion Models",
      content: [
        "Diffusion models are a major family of modern generative models, especially important for image generation.",
        "A simplified intuition is that the training process teaches a model to reverse a progressive corruption or noise process.",
        "During generation, the model starts from a noisy state and repeatedly transforms it toward a structured sample.",
        "The actual mathematics and implementation are more sophisticated than this simplified description, but the denoising intuition is extremely useful."
      ],
      process: [
        "Random noise",
        "Denoising step",
        "Denoising step",
        "Denoising step",
        "Structured representation",
        "Generated image or other content"
      ]
    },

    {
      heading: "15. Transformers and Generative AI",
      content: [
        "Transformers are one of the most important architectural foundations of modern Generative AI, particularly for language and increasingly for multimodal systems.",
        "The transformer architecture introduced a powerful attention-based mechanism for modeling relationships between elements of a sequence.",
        "Large language models commonly use transformer-based architectures because attention allows the model to process relationships between tokens over a context window.",
        "Transformers will be studied deeply in Module 2."
      ],
      classificationTree: [
        "Transformer",
        "├── Token representations",
        "├── Attention",
        "│   ├── Query",
        "│   ├── Key",
        "│   └── Value",
        "├── Feed-forward computation",
        "├── Residual connections",
        "├── Normalization",
        "└── Repeated layers"
      ]
    },

    {
      heading: "16. Training a Generative Model",
      content: [
        "Training is the stage in which the model learns its parameters from data.",
        "A simplified neural-network training loop consists of a forward pass, loss computation, gradient calculation, and parameter update.",
        "The exact objective differs by model family. For a language model, a common objective is next-token prediction using a language-modeling loss.",
        "Training can involve extremely large datasets, substantial compute, distributed systems, accelerators, and careful optimization."
      ],
      process: [
        "Collect and prepare data",
        "Represent the training example",
        "Run the model",
        "Calculate prediction",
        "Calculate loss",
        "Backpropagate gradients",
        "Update parameters",
        "Repeat for many batches and iterations"
      ]
    },

    {
      heading: "17. Inference and Generation",
      content: [
        "Inference is the process of using a trained model to produce an output for new input.",
        "For an LLM, inference starts with the user's prompt. The prompt is tokenized and passed through the model. The model produces a distribution over possible next tokens. A decoding algorithm chooses the next token, and the process repeats.",
        "Inference can be significantly cheaper than training, but large models can still require substantial memory and computational resources."
      ],
      process: [
        "User prompt",
        "Tokenization",
        "Model forward pass",
        "Logits",
        "Probability distribution",
        "Decoding",
        "Next token",
        "Repeated generation",
        "Final response"
      ]
    },

    {
      heading: "18. Training vs Inference",
      table: [
        {
          aspect: "Purpose",
          training: "Learn model parameters",
          inference: "Use learned parameters"
        },
        {
          aspect: "Data",
          training: "Training dataset",
          inference: "New user input"
        },
        {
          aspect: "Gradient updates",
          training: "Yes",
          inference: "Normally no parameter update"
        },
        {
          aspect: "Main concern",
          training: "Learning quality and optimization",
          inference: "Latency, cost, memory, quality"
        },
        {
          aspect: "Typical frequency",
          training: "Periodic or one-time for a model version",
          inference: "Potentially millions of requests"
        }
      ]
    },

    {
      heading: "19. What Is a Foundation Model?",
      content: [
        "A foundation model is a broadly trained model that can serve as a base for many downstream applications and tasks.",
        "Instead of creating an entirely independent model from scratch for every application, developers can use a pretrained foundation model and adapt it through prompting, retrieval, fine-tuning, tool use, or other application techniques.",
        "Foundation models are therefore important not only because of their model capabilities but also because they change how AI applications are engineered."
      ],
      process: [
        "Large-scale pretraining",
        "Foundation model",
        "Prompting",
        "Retrieval",
        "Fine-tuning",
        "Tool integration",
        "Application-specific behavior"
      ]
    },

    {
      heading: "20. Generative AI Application Architecture",
      content: [
        "A real Generative AI product is usually much more than a model call.",
        "A production application can contain a frontend, backend, authentication, prompt construction, retrieval, databases, model APIs, tool execution, validation, logging, monitoring, and evaluation.",
        "Understanding this distinction is critical. A model is one component of an AI application."
      ],
      classificationTree: [
        "Generative AI Application",
        "├── User Interface",
        "├── Application Backend",
        "├── Authentication",
        "├── Prompt Construction",
        "├── Context Management",
        "├── Retrieval",
        "│   └── Vector Database",
        "├── Model Layer",
        "│   └── LLM / Generative Model",
        "├── Tools",
        "├── Output Validation",
        "├── Logging",
        "├── Evaluation",
        "└── Monitoring"
      ]
    },

    {
      heading: "21. Simple LLM Application Flow",
      process: [
        "User enters a prompt",
        "Frontend sends request to backend",
        "Backend validates input",
        "Application constructs model request",
        "Optional context is retrieved",
        "Model receives prompt and context",
        "Model generates output",
        "Backend validates or transforms the output",
        "Frontend displays the response"
      ]
    },

    {
      heading: "22. Generative AI Is Probabilistic",
      content: [
        "Generative models often operate with probability distributions rather than a single deterministic rule for every possible input.",
        "This is why the same prompt can sometimes produce different outputs depending on the model, decoding parameters, random seed, system instructions, context, and other conditions.",
        "Probabilistic generation is useful because it gives models flexibility, but it also means that generated content must not automatically be assumed to be factual."
      ]
    },

    {
      heading: "23. Hallucination",
      content: [
        "A hallucination occurs when a generative model produces content that appears plausible but is unsupported, incorrect, or fabricated.",
        "Hallucination is one of the most important practical problems in Generative AI applications.",
        "A fluent answer is not necessarily a correct answer. This distinction must remain central throughout the course.",
        "Later modules will introduce techniques such as retrieval augmentation, structured outputs, validation, evaluation, and tool use that can reduce particular classes of reliability problems."
      ]
    },

    {
      heading: "24. Other Important Limitations",
      classificationTree: [
        "Generative AI Limitations",
        "├── Hallucination",
        "├── Bias",
        "├── Outdated information",
        "├── Context limitations",
        "├── Ambiguous instructions",
        "├── Prompt sensitivity",
        "├── Computational cost",
        "├── Latency",
        "├── Privacy concerns",
        "├── Security risks",
        "└── Evaluation difficulty"
      ]
    },

    {
      heading: "25. Why Prompt Engineering Matters",
      content: [
        "A generative model responds to the information and instructions provided to it. Prompt engineering is the practice of designing that input so that the model has clear instructions, appropriate context, constraints, examples, and output requirements.",
        "Prompt engineering is not a replacement for understanding models. Good prompting becomes much more effective when the developer understands tokens, attention, context windows, model behavior, retrieval, and evaluation.",
        "Prompt engineering is therefore treated as an engineering skill within this course rather than a collection of magical phrases."
      ]
    },

    {
      heading: "26. Why Embeddings Matter",
      content: [
        "Generative AI applications often need to work with external knowledge that is not directly contained in the model's immediate prompt.",
        "Embeddings convert information into numerical vectors that capture useful semantic relationships.",
        "These vectors can be compared using similarity measures and stored in vector databases for efficient retrieval.",
        "Embeddings become one of the foundations of semantic search and Retrieval-Augmented Generation."
      ],
      formulas: [
        "cosine_similarity(a,b) = (a · b) / (||a|| ||b||)"
      ]
    },

    {
      heading: "27. Why RAG Matters",
      content: [
        "Retrieval-Augmented Generation combines retrieval with generation.",
        "Instead of asking a model to answer using only its internal learned parameters, an application retrieves relevant external information and provides it as context.",
        "The high-level pattern is retrieve relevant information → construct context → generate an answer using that context.",
        "This is particularly useful for private documents, enterprise knowledge, frequently changing information, and domain-specific applications."
      ],
      process: [
        "User question",
        "Create query representation",
        "Search knowledge source",
        "Retrieve relevant documents or chunks",
        "Construct context",
        "Send context to generative model",
        "Generate grounded response"
      ]
    },

    {
      heading: "28. Generative AI Development Stack",
      content: [
        "A modern Generative AI developer may work across several layers rather than using one technology.",
        "The exact stack varies by project. A developer may use Python for model and AI experimentation, a web framework for APIs, a frontend framework for user interfaces, model APIs or open-source models, embedding models, vector databases, evaluation tools, and deployment infrastructure."
      ],
      classificationTree: [
        "Generative AI Stack",
        "├── Programming",
        "│   ├── Python",
        "│   ├── TypeScript / JavaScript",
        "│   └── SQL",
        "├── Model Layer",
        "│   ├── LLM APIs",
        "│   ├── Open-source LLMs",
        "│   └── Multimodal Models",
        "├── AI Frameworks",
        "│   ├── PyTorch",
        "│   └── Transformers",
        "├── Knowledge Layer",
        "│   ├── Embeddings",
        "│   └── Vector Databases",
        "├── Application Layer",
        "│   ├── FastAPI",
        "│   ├── Next.js",
        "│   └── Other Web Frameworks",
        "└── Operations",
        "    ├── Evaluation",
        "    ├── Monitoring",
        "    └── Deployment"
      ]
    },

    {
      heading: "29. A Complete Mental Model",
      content: [
        "The most useful mental model for this course is that Generative AI combines learned representations, probability, neural networks, optimization, context, and application engineering.",
        "A user provides an input. The application may transform that input into a representation, add instructions and external context, send it to a generative model, decode the model output, validate the result, and present the final response.",
        "Every later module will expand one part of this pipeline."
      ],
      process: [
        "Human intent",
        "Application input",
        "Tokenization or representation",
        "Context construction",
        "Generative model",
        "Probability distribution",
        "Decoding",
        "Generated content",
        "Validation",
        "Application response"
      ]
    },

    {
      heading: "30. Mathematical Intuition Summary",
      formulas: [
        "Model: y_hat = f_theta(x)",
        "Training objective: theta* = argmin_theta L(theta)",
        "Conditional generation: P(y|x)",
        "Autoregressive language modeling: P(x_t|x_1,...,x_{t-1})",
        "Sequence probability: P(x_1,...,x_T) = product over t of P(x_t|x_1,...,x_{t-1})",
        "Cosine similarity: cos(a,b) = (a · b) / (||a|| ||b||)"
      ],
      contentAfterFormula: [
        "These equations are the mathematical landmarks for the course. You do not need to memorize every equation immediately. You should understand what each equation represents and where it is used."
      ]
    },

    {
      heading: "31. Practical Workflow for a Generative AI Developer",
      process: [
        "Define the problem",
        "Identify the required modality",
        "Choose an appropriate model",
        "Design the input and output contract",
        "Construct prompts or model inputs",
        "Add external knowledge when required",
        "Implement the model call",
        "Validate generated output",
        "Evaluate quality",
        "Measure latency and cost",
        "Monitor the application",
        "Iterate"
      ]
    },

    {
      heading: "32. Common Mistakes",
      content: [
        "Mistake 1: Thinking Generative AI is the same thing as ChatGPT. Chatbots are applications; Generative AI is a broader technical category.",
        "Mistake 2: Assuming generated text is automatically factual. Generation and factual verification are different problems.",
        "Mistake 3: Thinking the model simply searches a database. Generative models compute outputs using learned parameters and current context.",
        "Mistake 4: Thinking prompting alone solves every AI problem. Some problems require retrieval, fine-tuning, tools, validation, or a different model.",
        "Mistake 5: Ignoring tokenization. Language models do not directly operate on ordinary human-readable sentences.",
        "Mistake 6: Confusing training with inference. Training changes learned parameters; ordinary inference uses the trained parameters.",
        "Mistake 7: Treating a model as the complete application. Production AI systems contain many components around the model."
      ]
    },

    {
      heading: "33. Interview Questions",
      content: [
        "What is Generative AI?",
        "How is Generative AI different from traditional machine learning?",
        "What is the difference between generative and discriminative modeling?",
        "What is autoregressive generation?",
        "What is next-token prediction?",
        "What is a foundation model?",
        "What is the difference between training and inference?",
        "Why are probability distributions important in generative models?",
        "What is hallucination?",
        "Why can the same prompt produce different outputs?",
        "What is RAG?",
        "Why are embeddings useful?",
        "Why is a transformer important to modern Generative AI?",
        "What is the role of tokenization?",
        "Why is model output not automatically trustworthy?"
      ]
    }
  ],

  codeExamples: [
    {
      title: "Simple Probabilistic Text Generator",
      language: "python",
      description:
        "A deliberately small example that demonstrates the idea of probabilistic generation without pretending to be an LLM.",
      code: "import random\n\nnext_words = {\n    'machine': ['learning', 'vision', 'translation'],\n    'learning': ['is', 'models', 'algorithms'],\n    'is': ['powerful', 'useful', 'important'],\n    'powerful': ['technology', 'tool', 'method']\n}\n\nword = 'machine'\nresult = [word]\n\nfor _ in range(6):\n    choices = next_words.get(word, ['.'])\n    word = random.choice(choices)\n    result.append(word)\n\nprint(' '.join(result))"
    },
    {
      title: "A Tiny Next-Token Probability Example",
      language: "python",
      description:
        "Shows how candidate tokens can be represented by probabilities.",
      code: "import random\n\ncandidates = {\n    'powerful': 0.50,\n    'useful': 0.30,\n    'important': 0.20\n}\n\nwords = list(candidates.keys())\nprobabilities = list(candidates.values())\n\nselected = random.choices(words, weights=probabilities, k=1)[0]\nprint('Selected token:', selected)"
    }
  ],

  mathIntuition: [
    {
      concept: "Conditional probability",
      explanation:
        "The model estimates what is likely given the information currently available. In language generation, the current context determines the distribution over possible next tokens."
    },
    {
      concept: "Chain rule",
      explanation:
        "A complete sequence probability can be decomposed into a product of conditional probabilities. This makes sequential generation mathematically manageable."
    },
    {
      concept: "Optimization",
      explanation:
        "During training, model parameters are adjusted so that the model performs better according to a chosen loss function."
    },
    {
      concept: "Vector similarity",
      explanation:
        "Embeddings represent information as vectors. Similar vectors can indicate related semantic content, enabling semantic retrieval."
    }
  ],

  exercises: [
    {
      question:
        "Explain Generative AI in your own words without using the phrase 'AI that creates content'.",
      difficulty: "Easy"
    },
    {
      question:
        "Draw the hierarchy connecting AI, Machine Learning, Deep Learning, Generative Models, Foundation Models, and Generative AI Applications.",
      difficulty: "Easy"
    },
    {
      question:
        "Explain why next-token prediction can eventually produce complete paragraphs.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain the difference between P(y|x) and P(x_t|x_1,...,x_{t-1}).",
      difficulty: "Medium"
    },
    {
      question:
        "Explain why hallucination is possible even when generated text is grammatically correct.",
      difficulty: "Medium"
    },
    {
      question:
        "Design a high-level architecture for a college-document question-answering application.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Build a Tiny Text Generator",
      task:
        "Create a Python program that stores several possible next words and generates a short sentence by repeatedly selecting the next word.",
      requirements: [
        "Use a dictionary.",
        "Use random selection.",
        "Generate at least 10 tokens.",
        "Stop when a maximum length is reached.",
        "Print the generated sequence."
      ]
    },
    {
      title: "Probability-Based Selection",
      task:
        "Create a candidate-token dictionary where each token has a weight. Use random.choices to generate a token according to those weights.",
      requirements: [
        "Use at least five candidate tokens.",
        "Make the weights sum to 1.0.",
        "Generate multiple samples.",
        "Compare how often each candidate appears."
      ]
    },
    {
      title: "Generative AI Architecture Diagram",
      task:
        "Draw the architecture of a simple AI chatbot from user input to generated response.",
      requirements: [
        "Include frontend.",
        "Include backend.",
        "Include prompt construction.",
        "Include model.",
        "Include generated response.",
        "Include output validation."
      ]
    }
  ],

  commonMistakes: [
    "Confusing Generative AI with a single product or chatbot.",
    "Assuming every generated response is factual.",
    "Ignoring probability and treating generation as deterministic lookup.",
    "Skipping tokenization when learning LLMs.",
    "Thinking a foundation model automatically contains every piece of current information.",
    "Assuming prompting can replace all other AI engineering techniques.",
    "Ignoring application-level validation.",
    "Building an AI application without measuring quality, latency, and cost."
  ],

  summary: [
    "Generative AI produces new content using patterns learned from data.",
    "Generative AI builds on concepts from AI, machine learning, deep learning, probability, optimization, and representation learning.",
    "Modern language generation can be understood as repeated conditional next-token prediction.",
    "Autoregressive generation constructs a sequence step by step.",
    "Training learns model parameters; inference uses those learned parameters.",
    "Foundation models provide general capabilities that applications can adapt.",
    "Transformers are a major architectural foundation of modern language-focused Generative AI.",
    "RAG, embeddings, prompting, tools, evaluation, and validation extend the basic model into useful applications.",
    "Generative AI can hallucinate, so fluent output should not automatically be treated as verified truth."
  ],

  keyTakeaways: [
    "Generative AI is a broad technical field, not a single application.",
    "The core idea is learned patterns plus a generation mechanism.",
    "Probability is fundamental to understanding generation.",
    "Next-token prediction is a key foundation for modern LLMs.",
    "Training and inference are fundamentally different stages.",
    "A model is only one component of a production Generative AI system.",
    "The rest of this course will progressively unpack tokens, transformers, prompts, embeddings, RAG, multimodal models, and application engineering."
  ]
};

export default lesson1;

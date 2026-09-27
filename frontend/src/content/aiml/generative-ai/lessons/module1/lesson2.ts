const lesson2 = {
  id: "lesson2",
  moduleId: "module1",
  lessonNumber: 2,

  title: "Generative Models — How Machines Learn to Generate",
  subtitle:
    "Understand data distributions, latent representations, likelihood, sampling, conditional generation, and the major families of generative models.",

  description:
    "This lesson moves from the definition of Generative AI into the central idea behind generative modeling: learning patterns and distributions from data and using those learned representations to generate new samples.",

  estimatedTime: "100–130 min",
  difficulty: "Beginner → Intermediate",

  learningObjectives: [
    "Understand what a generative model attempts to learn.",
    "Explain the difference between a dataset and a learned data distribution.",
    "Understand probability distributions as the foundation of generation.",
    "Explain the difference between sampling and memorization.",
    "Understand unconditional and conditional generation.",
    "Understand latent representations and latent spaces.",
    "Explain likelihood at an intuitive level.",
    "Understand maximum likelihood estimation.",
    "Understand the relationship between training and sampling.",
    "Compare major families of generative models.",
    "Understand autoregressive models, VAEs, GANs, and diffusion models at a conceptual level.",
    "Understand why generated samples can be novel while still following learned patterns.",
    "Identify important trade-offs between different generative-model families."
  ],

  sections: [
    {
      heading: "1. The Central Question of Generative Modeling",
      content: [
        "A generative model attempts to learn the underlying structure of a collection of examples so that it can produce new examples that follow similar patterns.",
        "Suppose we have thousands or millions of images of handwritten digits. The model does not need to store every image as a simple collection of files. Instead, training attempts to adjust model parameters so that the model captures useful statistical regularities in the data.",
        "After training, the model can be used to generate a new sample. The generated sample should resemble the characteristics of the training distribution without simply being a database lookup.",
        "This gives us the central idea of generative modeling: learn a distribution or generative process from examples and then sample from the learned model."
      ],
      process: [
        "Training data",
        "Pattern discovery",
        "Model parameters",
        "Learned representation or distribution",
        "Sampling or generation",
        "New sample"
      ]
    },

    {
      heading: "2. Dataset vs Data Distribution",
      content: [
        "A dataset is a finite collection of observed examples. A data distribution is a mathematical description of how possible examples occur.",
        "For example, a dataset might contain 100,000 photographs of faces. The underlying distribution is much larger: it represents the patterns and variations that can occur in the space of possible face images.",
        "The model sees samples from the distribution during training. Its goal is to learn a useful approximation of the underlying structure.",
        "This distinction is fundamental. Training data is finite, while the space of possible generated outputs can be extremely large."
      ],
      classificationTree: [
        "Real-world phenomenon",
        "├── Underlying data-generating process",
        "│   └── Data distribution",
        "│       ├── Possible samples",
        "│       ├── Probabilities",
        "│       └── Relationships",
        "└── Observed dataset",
        "    ├── Sample 1",
        "    ├── Sample 2",
        "    ├── Sample 3",
        "    └── ..."
      ]
    },

    {
      heading: "3. What Does It Mean to Learn a Distribution?",
      content: [
        "Consider a simple dataset consisting of measurements such as height, weight, or temperature. The values are not completely arbitrary. They tend to occur within particular ranges and have particular relationships.",
        "A model can learn statistical patterns from these observations.",
        "For complex data such as language or images, the distribution is enormously more complicated. A generative neural network therefore uses millions or billions of parameters to represent a highly complex function.",
        "The model does not necessarily learn an explicit table containing every possible output. Instead, the learned parameters define a computational process capable of assigning or producing patterns associated with the training data."
      ],
      formulas: [
        "p_data(x) = underlying data distribution",
        "p_model(x) = distribution represented by the trained model"
      ]
    },

    {
      heading: "4. The Goal of Generative Modeling",
      content: [
        "A simplified goal is to make the model distribution resemble the real data distribution.",
        "If p_data(x) describes the real data and p_model(x) describes the model, training attempts to make p_model behave similarly to p_data according to an objective appropriate for the chosen model family.",
        "Different architectures accomplish this in different ways. Some models explicitly optimize likelihood. Others use adversarial objectives, variational objectives, denoising objectives, or autoregressive prediction objectives."
      ],
      formulas: [
        "p_model(x) ≈ p_data(x)"
      ],
      contentAfterFormula: [
        "The approximation symbol is important. A trained model is an approximation of a complicated real-world distribution, not a perfect copy of reality."
      ]
    },

    {
      heading: "5. Generation Is Not Simple Memorization",
      content: [
        "A common misunderstanding is that a generative model simply stores training examples and retrieves one whenever it receives a request.",
        "A well-designed generative model learns reusable patterns. For an image model, those patterns can include shapes, textures, colors, spatial relationships, and higher-level structures. For a language model, they can include relationships among tokens, syntax, semantic associations, styles, and many other patterns.",
        "Generation combines learned parameters with the current input or context to construct an output.",
        "However, memorization can still occur in some circumstances, especially when models overfit or when particular training examples are strongly represented. Understanding generalization and memorization is therefore an important part of responsible AI engineering."
      ]
    },

    {
      heading: "6. Sampling",
      content: [
        "Sampling is the process of obtaining an output from a probability distribution.",
        "Imagine a simple distribution where three outcomes have different probabilities. Sampling does not always select the most probable outcome. Instead, the probability distribution determines how frequently different outcomes are expected to appear over repeated samples.",
        "Generative models use sampling in different forms depending on their architecture and decoding method.",
        "Sampling is one reason that generative systems can produce multiple different outputs from the same general starting condition."
      ],
      table: [
        {
          concept: "Deterministic selection",
          meaning: "Always choose according to a fixed rule",
          example: "Choose the highest-scoring candidate"
        },
        {
          concept: "Random sampling",
          meaning: "Select according to a probability distribution",
          example: "Sample a candidate according to its probability"
        },
        {
          concept: "Controlled sampling",
          meaning: "Modify or restrict the distribution before selection",
          example: "Temperature or top-k style decoding"
        }
      ]
    },

    {
      heading: "7. A Simple Probability Distribution",
      content: [
        "Suppose a toy generative model assigns probabilities to three colors.",
        "The probabilities must form a valid distribution. Each probability is non-negative and the total probability is 1.",
        "If we repeatedly sample from the model, colors with larger probabilities should generally appear more frequently over a sufficiently large number of trials."
      ],
      formulas: [
        "P(red) = 0.50",
        "P(blue) = 0.30",
        "P(green) = 0.20",
        "P(red) + P(blue) + P(green) = 1.00"
      ],
      contentAfterFormula: [
        "This tiny example is much simpler than a real generative model, but it captures the core idea of probability-based generation."
      ]
    },

    {
      heading: "8. Unconditional Generation",
      content: [
        "Unconditional generation means that the model generates an output without being given a specific conditioning variable describing what the output should be.",
        "For example, an image generator might generate a sample from the learned image distribution without being told to create a particular object.",
        "The model still receives some form of generation input internally, such as random noise or an initial generation state, depending on the architecture."
      ],
      process: [
        "Random source or generation state",
        "Generative model",
        "Learned distribution",
        "Generated sample"
      ]
    },

    {
      heading: "9. Conditional Generation",
      content: [
        "Conditional generation adds information that controls or guides the generated result.",
        "For example, a model might generate an image conditioned on a text description, generate a response conditioned on a user question, or generate speech conditioned on text.",
        "Conditional generation is extremely important for practical applications because users usually want to control what the model produces."
      ],
      formulas: [
        "p(x|c)"
      ],
      contentAfterFormula: [
        "Here x represents the generated output and c represents conditioning information."
      ],
      process: [
        "Condition",
        "Condition representation",
        "Generative model",
        "Conditional distribution",
        "Generated output"
      ]
    },

    {
      heading: "10. Unconditional vs Conditional Generation",
      table: [
        {
          aspect: "Input",
          unconditional: "No explicit task-specific condition",
          conditional: "Additional condition or context"
        },
        {
          aspect: "Control",
          unconditional: "Lower direct control",
          conditional: "Higher control"
        },
        {
          aspect: "Example",
          unconditional: "Generate a random image",
          conditional: "Generate an image from a description"
        },
        {
          aspect: "Typical use",
          unconditional: "Learning a general distribution",
          conditional: "Task-specific generation"
        }
      ]
    },

    {
      heading: "11. Latent Representation",
      content: [
        "A latent representation is an internal representation that captures useful information about data without necessarily representing the data directly in its original form.",
        "Consider an image. The raw image may contain thousands or millions of pixel values. A learned latent representation can encode higher-level structure in a more compact space.",
        "Latent spaces are particularly important in VAEs, GANs, diffusion systems, and many modern generative architectures.",
        "The word latent means that the representation is not directly observed in the original dataset. It is an internal variable or representation inferred by the model."
      ],
      classificationTree: [
        "Observed data",
        "├── Image pixels",
        "├── Audio waveform",
        "├── Text tokens",
        "└── Video frames",
        "",
        "Latent representation",
        "├── Learned features",
        "├── Compressed structure",
        "├── Semantic information",
        "└── Generative factors"
      ]
    },

    {
      heading: "12. Latent Space Intuition",
      content: [
        "Imagine a coordinate system where similar examples are located near one another. A model may learn a latent space in which changing particular latent variables changes meaningful properties of the generated output.",
        "For example, a latent representation for faces could encode factors related to pose, lighting, expression, or other visual characteristics.",
        "This is an intuition rather than a guarantee. Real latent spaces can be highly complex, entangled, and architecture-dependent."
      ],
      process: [
        "Real example",
        "Encoder or learned representation",
        "Latent vector",
        "Modification or sampling",
        "Decoder or generator",
        "Generated example"
      ]
    },

    {
      heading: "13. Probability Density and Likelihood",
      content: [
        "Likelihood asks how compatible observed data is with a model.",
        "Suppose a model assigns a probability to an observed example. A higher probability indicates that the model considers that example more consistent with its learned distribution under the model's assumptions.",
        "Likelihood becomes especially important in explicit probabilistic generative modeling.",
        "The mathematical details differ between discrete and continuous data, so likelihood should be understood as a general modeling concept rather than one single implementation."
      ],
      formulas: [
        "L(theta|D) = product over i of p_theta(x_i)",
        "log L(theta|D) = sum over i of log p_theta(x_i)"
      ]
    },

    {
      heading: "14. Why Log-Likelihood Is Used",
      content: [
        "Products of many probabilities can become extremely small when the dataset contains many observations.",
        "Taking the logarithm converts products into sums, which are easier to work with computationally and mathematically.",
        "For this reason, maximum likelihood objectives are frequently expressed using log-likelihood."
      ],
      formulas: [
        "log(a × b × c) = log(a) + log(b) + log(c)",
        "maximize log L(theta|D)"
      ]
    },

    {
      heading: "15. Maximum Likelihood Estimation",
      content: [
        "Maximum Likelihood Estimation, or MLE, chooses model parameters that make the observed training data as likely as possible under the model.",
        "In neural networks, this becomes an optimization problem.",
        "The model parameters are represented by theta. Training searches for parameters that optimize an objective derived from the likelihood."
      ],
      formulas: [
        "theta* = argmax_theta L(theta|D)",
        "theta* = argmax_theta log L(theta|D)"
      ],
      contentAfterFormula: [
        "In practice, optimization algorithms such as gradient-based methods are used to update parameters."
      ]
    },

    {
      heading: "16. Negative Log-Likelihood",
      content: [
        "Machine-learning optimization is often formulated as minimizing a loss rather than maximizing an objective.",
        "Because maximizing log-likelihood is equivalent to minimizing negative log-likelihood, the two formulations can represent the same underlying optimization goal."
      ],
      formulas: [
        "NLL(theta) = - log L(theta|D)",
        "theta* = argmin_theta NLL(theta)"
      ]
    },

    {
      heading: "17. Generative Modeling and Neural Networks",
      content: [
        "Modern generative models commonly use neural networks as flexible function approximators.",
        "A neural network contains parameters that are adjusted during training. These parameters determine how the network transforms inputs into outputs.",
        "The architecture determines how information flows through the model, while the training objective determines what the model is encouraged to learn.",
        "This distinction is important: architecture and objective are related but not identical."
      ],
      classificationTree: [
        "Generative Neural Network",
        "├── Architecture",
        "│   ├── Layers",
        "│   ├── Connections",
        "│   └── Representations",
        "├── Parameters",
        "│   ├── Weights",
        "│   └── Biases",
        "├── Objective",
        "│   ├── Likelihood",
        "│   ├── Reconstruction",
        "│   ├── Adversarial",
        "│   └── Denoising",
        "└── Generation mechanism"
      ]
    },

    {
      heading: "18. Autoregressive Generative Models",
      content: [
        "Autoregressive models factorize a complex probability distribution into a sequence of conditional distributions.",
        "For a sequence x1 through xT, the complete probability can be represented as the product of each element's conditional probability given the preceding elements.",
        "Language models are a major example. They repeatedly predict the next token conditioned on the preceding context."
      ],
      formulas: [
        "P(x_1,...,x_T) = ∏ P(x_t | x_1,...,x_{t-1})"
      ],
      process: [
        "Context",
        "Predict next element",
        "Select or sample element",
        "Append element",
        "Use expanded context",
        "Predict again"
      ]
    },

    {
      heading: "19. Variational Autoencoders",
      content: [
        "A VAE combines an encoder, a probabilistic latent representation, and a decoder.",
        "The encoder maps an input toward parameters describing a latent distribution. A latent sample is then used by the decoder to reconstruct or generate an output.",
        "The training objective generally balances reconstruction quality with a regularization term that encourages the latent distribution to follow a useful prior structure.",
        "The VAE provides an important conceptual bridge between representation learning and generation."
      ],
      classificationTree: [
        "VAE",
        "├── Encoder",
        "│   └── Input → latent distribution parameters",
        "├── Latent space",
        "│   └── Sample latent vector",
        "└── Decoder",
        "    └── Latent vector → generated output"
      ]
    },

    {
      heading: "20. VAE Objective Intuition",
      content: [
        "A simplified VAE objective contains two competing ideas.",
        "First, the generated reconstruction should resemble the original input. Second, the latent representation should remain well behaved according to the chosen prior.",
        "This creates a balance between reconstruction and latent-space regularization."
      ],
      formulas: [
        "VAE Loss ≈ Reconstruction Loss + KL Divergence"
      ],
      contentAfterFormula: [
        "The exact mathematical formulation depends on the model and notation. The key intuition is that the model is encouraged both to reconstruct data and to organize its latent representation."
      ]
    },

    {
      heading: "21. Generative Adversarial Networks",
      content: [
        "GANs introduce a different strategy for generative modeling.",
        "The generator creates synthetic samples while the discriminator attempts to distinguish real samples from generated samples.",
        "The generator therefore receives an indirect learning signal through the discriminator.",
        "The adversarial interaction can produce high-quality synthetic samples, but GAN training can be difficult and unstable in some settings."
      ],
      classificationTree: [
        "GAN",
        "├── Generator",
        "│   └── Random input → synthetic sample",
        "└── Discriminator",
        "    ├── Real sample → score",
        "    └── Generated sample → score"
      ]
    },

    {
      heading: "22. GAN Training Intuition",
      process: [
        "Sample random noise",
        "Generator creates synthetic data",
        "Discriminator sees real and synthetic examples",
        "Discriminator learns to distinguish them",
        "Generator receives feedback",
        "Generator improves",
        "Repeat"
      ],
      contentAfterProcess: [
        "The generator and discriminator have opposing objectives. This creates the adversarial learning process that gives GANs their name."
      ]
    },

    {
      heading: "23. Diffusion Models",
      content: [
        "Diffusion models use a fundamentally different generation strategy.",
        "A forward process progressively adds noise to data during training. A learned reverse process attempts to remove noise and recover meaningful structure.",
        "During generation, the model can start from a noisy state and repeatedly perform denoising steps until a structured sample emerges.",
        "Diffusion models became particularly important for high-quality image generation."
      ],
      process: [
        "Clean training example",
        "Add noise progressively",
        "Learn the reverse denoising behavior",
        "Start generation from noise",
        "Apply repeated denoising",
        "Produce structured sample"
      ]
    },

    {
      heading: "24. Comparing Major Generative Model Families",
      table: [
        {
          modelFamily: "Autoregressive",
          coreIdea: "Generate sequence elements conditionally",
          commonStrength: "Natural sequence modeling",
          commonChallenge: "Sequential generation can be slower"
        },
        {
          modelFamily: "VAE",
          coreIdea: "Learn probabilistic latent representation",
          commonStrength: "Structured latent spaces",
          commonChallenge: "Generated outputs can be less sharp in some applications"
        },
        {
          modelFamily: "GAN",
          coreIdea: "Generator competes with discriminator",
          commonStrength: "High-quality sample generation",
          commonChallenge: "Training instability and mode collapse"
        },
        {
          modelFamily: "Diffusion",
          coreIdea: "Learn a denoising process",
          commonStrength: "High-quality generation",
          commonChallenge: "Multiple denoising steps can increase computation"
        }
      ]
    },

    {
      heading: "25. What Is Mode Collapse?",
      content: [
        "Mode collapse is a known problem associated particularly with GAN training.",
        "A generator may discover a limited set of outputs that successfully fool the discriminator and then repeatedly produce similar samples rather than covering the diversity of the real data distribution.",
        "For example, an image generator might produce many visually similar samples even though the training dataset contains a wide variety of examples.",
        "Mode collapse demonstrates why generating realistic samples is not the same as learning the entire diversity of a distribution."
      ]
    },

    {
      heading: "26. Diversity vs Quality",
      content: [
        "Generative model evaluation often involves multiple dimensions.",
        "Quality asks whether an individual generated sample looks or behaves realistically.",
        "Diversity asks whether the model can generate many different valid samples rather than repeatedly producing similar outputs.",
        "A useful generative model needs an appropriate balance between quality and coverage of the target distribution."
      ],
      classificationTree: [
        "Generation Quality",
        "├── Fidelity",
        "│   └── Does the sample look plausible?",
        "├── Diversity",
        "│   └── Does the model cover different possibilities?",
        "├── Relevance",
        "│   └── Does it follow the requested condition?",
        "└── Consistency",
        "    └── Does it maintain required structure?"
      ]
    },

    {
      heading: "27. Generalization",
      content: [
        "Generalization means that the model performs meaningfully on examples or situations that were not directly present as identical training examples.",
        "Generative models need to capture reusable patterns rather than simply reproducing a finite training collection.",
        "Generalization is one of the central reasons why the distinction between memorization and learning matters."
      ]
    },

    {
      heading: "28. Overfitting in Generative Models",
      content: [
        "Overfitting occurs when a model becomes too specialized to the training data and fails to generalize appropriately.",
        "In generative systems, overfitting can manifest as excessive similarity to training examples or poor coverage of the broader data distribution.",
        "Regularization, data quality, architecture choices, training procedures, and evaluation all influence this behavior."
      ]
    },

    {
      heading: "29. The Generative Modeling Pipeline",
      process: [
        "Collect data",
        "Clean and preprocess data",
        "Choose representation",
        "Choose model family",
        "Define training objective",
        "Train parameters",
        "Evaluate generated samples",
        "Tune model or training process",
        "Deploy model",
        "Sample or generate outputs",
        "Monitor behavior"
      ]
    },

    {
      heading: "30. A Useful Mental Model",
      content: [
        "Think of a generative model as a learned machine for producing samples.",
        "The training stage attempts to build the machine from examples. The inference stage operates the machine.",
        "The machine does not need to contain a literal list of every possible output. Instead, its parameters define transformations and probabilities that allow it to construct outputs.",
        "Different model families implement this idea differently."
      ],
      process: [
        "Examples",
        "Learning",
        "Parameters",
        "Learned generative behavior",
        "Condition or random state",
        "Sampling",
        "New output"
      ]
    },

    {
      heading: "31. Important Mathematical Vocabulary",
      table: [
        {
          term: "Distribution",
          meaning: "Describes how probability is assigned across possible outcomes"
        },
        {
          term: "Probability",
          meaning: "A numerical measure associated with an outcome or event"
        },
        {
          term: "Likelihood",
          meaning: "Measures how compatible observed data is with model parameters"
        },
        {
          term: "Parameter",
          meaning: "A learned value that determines model behavior"
        },
        {
          term: "Latent variable",
          meaning: "An unobserved variable used to represent hidden structure"
        },
        {
          term: "Sampling",
          meaning: "Obtaining an outcome from a distribution"
        },
        {
          term: "Conditioning",
          meaning: "Generating while taking additional information into account"
        }
      ]
    },

    {
      heading: "32. From Probability to LLMs",
      content: [
        "The ideas in this lesson lead directly to large language models.",
        "An LLM operates over tokens rather than raw characters or entire paragraphs as indivisible objects.",
        "It learns statistical relationships between tokens and contexts during training.",
        "At generation time, it produces a probability distribution over possible next tokens and uses a decoding strategy to construct a sequence.",
        "The next lesson will begin the transition from general generative modeling into the foundations of modern Large Language Models."
      ],
      process: [
        "Text dataset",
        "Tokenization",
        "Token sequences",
        "Language-model training",
        "Learned parameters",
        "Prompt",
        "Next-token probabilities",
        "Decoding",
        "Generated text"
      ]
    },

    {
      heading: "33. Common Misconceptions",
      content: [
        "Misconception 1: A generative model must reproduce training examples. In reality, the objective is generally to learn useful statistical structure and generate new samples.",
        "Misconception 2: Randomness means the model is not intelligent. Sampling is one mechanism used to generate outputs from learned probability distributions.",
        "Misconception 3: Every generative model uses the same architecture. Autoregressive models, VAEs, GANs, diffusion models, and other approaches use different mechanisms.",
        "Misconception 4: Higher probability always means better output. Practical generation often requires balancing probability, diversity, conditioning, constraints, and task requirements.",
        "Misconception 5: A realistic sample proves the model learned the entire data distribution. Quality and distribution coverage are separate evaluation concerns."
      ]
    },

    {
      heading: "34. Interview Questions",
      content: [
        "What is a generative model?",
        "What is the difference between a dataset and a data distribution?",
        "What does p_model(x) ≈ p_data(x) mean?",
        "What is sampling?",
        "What is conditional generation?",
        "What is a latent space?",
        "What is likelihood?",
        "What is maximum likelihood estimation?",
        "Why is log-likelihood useful?",
        "What is an autoregressive model?",
        "What is a VAE?",
        "What is a GAN?",
        "What is the role of the generator and discriminator?",
        "What is mode collapse?",
        "What is a diffusion model?",
        "Why are quality and diversity both important?",
        "What is the difference between memorization and generalization?"
      ]
    }
  ],

  formulas: [
    "p_model(x) ≈ p_data(x)",
    "P(x_1,...,x_T) = ∏ P(x_t | x_1,...,x_{t-1})",
    "theta* = argmax_theta L(theta|D)",
    "theta* = argmax_theta log L(theta|D)",
    "NLL(theta) = -log L(theta|D)",
    "p(x|c) = conditional generation distribution",
    "VAE Loss ≈ Reconstruction Loss + KL Divergence"
  ],

  codeExamples: [
    {
      title: "Sampling From a Simple Distribution",
      language: "python",
      description:
        "A small example showing how probabilities influence repeated sampling.",
      code: "import random\n\noutcomes = ['red', 'blue', 'green']\nweights = [0.50, 0.30, 0.20]\n\nsamples = random.choices(outcomes, weights=weights, k=20)\n\nfor item in samples:\n    print(item)"
    },
    {
      title: "Counting Generated Samples",
      language: "python",
      description:
        "Observe how empirical frequencies approach the specified probabilities as the number of samples increases.",
      code: "import random\nfrom collections import Counter\n\noutcomes = ['red', 'blue', 'green']\nweights = [0.50, 0.30, 0.20]\n\nsamples = random.choices(outcomes, weights=weights, k=10000)\ncounts = Counter(samples)\n\nfor outcome in outcomes:\n    frequency = counts[outcome] / len(samples)\n    print(outcome, frequency)"
    },
    {
      title: "Tiny Conditional Generator",
      language: "python",
      description:
        "Demonstrates the difference between unconditional and conditional generation using a small rule-based example.",
      code: "import random\n\nmodels = {\n    'technology': ['AI', 'robotics', 'software'],\n    'science': ['physics', 'biology', 'chemistry']\n}\n\ncondition = 'technology'\noutput = random.choice(models[condition])\n\nprint('Condition:', condition)\nprint('Generated sample:', output)"
    }
  ],

  mathIntuition: [
    {
      concept: "Distribution",
      explanation:
        "A distribution describes how probability is spread across possible outcomes. Generative modeling attempts to represent useful structure in such distributions."
    },
    {
      concept: "Likelihood",
      explanation:
        "Likelihood asks how compatible observed training examples are with a particular set of model parameters."
    },
    {
      concept: "Maximum likelihood",
      explanation:
        "Maximum likelihood chooses parameters that make the observed data as probable as possible under the model."
    },
    {
      concept: "Latent space",
      explanation:
        "A latent space is an internal representation where a model can organize hidden factors or features associated with observed data."
    },
    {
      concept: "Sampling",
      explanation:
        "Sampling turns a learned probability distribution into an actual generated outcome."
    }
  ],

  exercises: [
    {
      question:
        "Explain the difference between a finite dataset and the underlying data distribution.",
      difficulty: "Easy"
    },
    {
      question:
        "Why does a generative model need to learn patterns instead of simply storing every training example?",
      difficulty: "Easy"
    },
    {
      question:
        "Explain unconditional generation and conditional generation with one example each.",
      difficulty: "Easy"
    },
    {
      question:
        "What does p_model(x) ≈ p_data(x) mean?",
      difficulty: "Medium"
    },
    {
      question:
        "Explain maximum likelihood estimation without using a mathematical equation.",
      difficulty: "Medium"
    },
    {
      question:
        "Compare autoregressive models, VAEs, GANs, and diffusion models.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain why quality and diversity are separate properties of generated samples.",
      difficulty: "Medium"
    },
    {
      question:
        "Design a conditional generative system for generating product descriptions from product metadata.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Probability Sampler",
      task:
        "Create a Python program that samples from at least five outcomes with different probabilities.",
      requirements: [
        "Use random.choices.",
        "Generate 1000 samples.",
        "Count each outcome.",
        "Calculate empirical frequencies.",
        "Compare empirical frequencies with the intended probabilities."
      ]
    },
    {
      title: "Conditional Generator",
      task:
        "Build a small conditional generator that produces different outputs depending on a user-selected category.",
      requirements: [
        "Create at least three conditions.",
        "Give each condition at least five possible outputs.",
        "Use random sampling.",
        "Allow the user to choose the condition."
      ]
    },
    {
      title: "Generative Model Comparison",
      task:
        "Create a structured comparison in Python using dictionaries for autoregressive models, VAEs, GANs, and diffusion models.",
      requirements: [
        "Store the core idea.",
        "Store one strength.",
        "Store one limitation.",
        "Print the comparison clearly."
      ]
    }
  ],

  summary: [
    "Generative modeling is fundamentally about learning useful structure from data and using that learned structure to generate samples.",
    "A dataset is a finite collection of observations, while a data distribution describes the broader space of possible observations.",
    "Sampling converts a learned probability distribution into actual generated outputs.",
    "Conditional generation uses additional information to control the generated result.",
    "Latent representations provide internal spaces where models can capture hidden structure.",
    "Likelihood measures how compatible observed data is with a model.",
    "Maximum likelihood estimates parameters that make observed data likely under the model.",
    "Autoregressive models generate sequences through conditional predictions.",
    "VAEs learn probabilistic latent representations.",
    "GANs use adversarial training between generators and discriminators.",
    "Diffusion models learn a denoising-based generation process.",
    "Generative quality includes more than realism: diversity, relevance, consistency, and coverage also matter."
  ],

  keyTakeaways: [
    "The core problem is learning a useful approximation of a data-generating distribution.",
    "Generation is usually a sampling or decoding process operating on learned model behavior.",
    "Conditional generation gives applications control over what should be produced.",
    "Latent representations are central to many generative architectures.",
    "Different model families solve generation using fundamentally different training and sampling mechanisms.",
    "Understanding probability and optimization is essential before moving into LLM internals.",
    "The next stage is to understand how these ideas become Large Language Models."
  ]
};

export default lesson2;

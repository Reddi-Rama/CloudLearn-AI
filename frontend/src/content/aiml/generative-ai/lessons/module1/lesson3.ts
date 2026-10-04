const lesson3 = {
  id: "lesson3",
  moduleId: "module1",
  lessonNumber: 3,

  title: "Generative AI Architecture & Model Families",
  subtitle:
    "Understand how modern generative systems are organized, how different model families work, and how models become complete AI applications.",

  description:
    "This lesson develops an architectural understanding of Generative AI. You will move from individual models to complete systems and learn how autoregressive models, VAEs, GANs, diffusion models, and multimodal systems are organized. The goal is not only to recognize model names, but to understand what happens between input data, learned representations, model computation, sampling, decoding, and the final application output.",

  estimatedTime: "70–90 minutes",
  difficulty: "Intermediate",

  learningObjectives: [
    "Explain the difference between a generative model and a complete Generative AI application.",
    "Understand the major layers of a Generative AI architecture.",
    "Describe the role of data, preprocessing, representation, model parameters, inference, decoding, and application layers.",
    "Explain the basic architecture of autoregressive generative models.",
    "Understand the encoder–decoder structure of Variational Autoencoders.",
    "Explain the generator and discriminator relationship in GANs.",
    "Understand the forward-noising and reverse-denoising architecture of diffusion models.",
    "Compare autoregressive models, VAEs, GANs, and diffusion models at an architectural level.",
    "Understand conditional generation and how external information controls generation.",
    "Understand latent spaces and why learned representations are useful.",
    "Trace the path from a user request to generated output in a modern AI application.",
    "Identify engineering components surrounding a foundation model, including retrieval, tools, safety, evaluation, and application logic."
  ],

  overview: [
    "A generative model is only one component of a real Generative AI system. A production application usually contains an input interface, preprocessing layer, model or model API, inference configuration, output processing, safety controls, evaluation mechanisms, storage, and application-specific business logic.",
    "Understanding architecture prevents a common beginner mistake: treating every Generative AI system as if it were simply a neural network that receives a prompt and returns an answer. The model performs learned computation, but the surrounding system determines what information reaches the model, how generation is controlled, how outputs are validated, and how the result becomes useful to a user.",
    "Different generative model families solve the generation problem in different ways. Autoregressive models generate sequences step by step. VAEs learn a probabilistic latent representation and decode samples from that representation. GANs train a generator against a discriminator. Diffusion models learn to reverse a controlled corruption process. Each architecture has different mathematical assumptions, training behavior, strengths, and engineering trade-offs."
  ],

  sections: [
    {
      heading: "1. From a Generative Model to a Generative AI System",
      paragraphs: [
        "A neural network that can generate an output is a model. A Generative AI application is a larger system that uses one or more models to solve a user-facing problem. This distinction becomes increasingly important as applications move from demonstrations to production.",
        "Consider a document question-answering application. The user types a question. The application may authenticate the user, normalize the request, retrieve relevant documents, construct context, build a prompt, call a language model, validate the generated response, apply safety rules, store the interaction, and finally display the answer. The language model is central, but it is not the entire application.",
        "The architecture can therefore be viewed as a sequence of transformations. Raw user information becomes structured input. Structured input is converted into a representation suitable for the model. The model produces a probability distribution or intermediate representation. A decoding or sampling procedure turns that distribution into an output. Application logic then determines how that output is presented or used."
      ],

      process: [
        {
          title: "User Input",
          description:
            "A user provides text, an image, audio, structured data, or another input modality.",
          input: "Human intent",
          output: "Raw application input"
        },
        {
          title: "Preprocessing",
          description:
            "The application cleans, validates, tokenizes, normalizes, resizes, or otherwise prepares the input.",
          input: "Raw input",
          output: "Model-ready representation"
        },
        {
          title: "Representation",
          description:
            "The input is transformed into vectors, tokens, tensors, latent variables, or other numerical representations.",
          input: "Prepared input",
          output: "Numerical representation"
        },
        {
          title: "Generative Model",
          description:
            "Learned parameters transform the representation and estimate or construct a distribution over possible outputs.",
          input: "Representation",
          output: "Model distribution or generated representation"
        },
        {
          title: "Sampling / Decoding",
          description:
            "A decoding strategy converts model probabilities or latent representations into an actual output.",
          input: "Model output",
          output: "Candidate generated output"
        },
        {
          title: "Post-processing",
          description:
            "The system validates, filters, formats, transforms, or enriches the generated result.",
          input: "Candidate output",
          output: "Application-ready output"
        },
        {
          title: "Application Layer",
          description:
            "The final result is displayed, stored, sent to another system, or used to perform an action.",
          input: "Processed output",
          output: "User-visible or system-level result"
        }
      ]
    },

    {
      heading: "2. A Layered Architecture for Generative AI",
      paragraphs: [
        "A useful mental model is to organize a Generative AI system into layers. These layers are not universal software standards, but they provide a practical way to reason about system design.",
        "The data layer contains the information from which the model learns or from which the application retrieves context. The representation layer converts raw information into numerical structures. The model layer contains learned parameters and neural-network operations. The inference layer controls generation. The application layer connects the model to a real product. Finally, the governance and evaluation layer measures quality, safety, reliability, and operational behavior.",
        "This layered view also explains why changing a model does not necessarily require rebuilding an entire application. A well-designed system can keep its user interface, retrieval pipeline, validation logic, and monitoring infrastructure while changing the underlying model."
      ],

      classificationTree: {
        title: "Generative AI System Architecture",
        description:
          "A complete application contains multiple cooperating layers rather than only a generative model.",
        children: [
          {
            title: "Data Layer",
            description: "Training data, evaluation data, documents, images, audio, and application data."
          },
          {
            title: "Representation Layer",
            description: "Tokens, embeddings, latent variables, tensors, and other numerical representations."
          },
          {
            title: "Model Layer",
            description: "Transformer, VAE, GAN, diffusion, multimodal, or other generative architectures."
          },
          {
            title: "Inference Layer",
            description: "Sampling, decoding, temperature, top-k, top-p, guidance, batching, and serving."
          },
          {
            title: "Application Layer",
            description: "User interface, APIs, workflows, business logic, storage, and integrations."
          },
          {
            title: "Safety & Evaluation Layer",
            description: "Validation, moderation, testing, monitoring, quality measurement, and feedback."
          }
        ]
      }
    },

    {
      heading: "3. The Mathematical View of Generative Architecture",
      paragraphs: [
        "At a high level, a generative model learns a probability distribution over data. Let x represent an observation such as a sentence, image, sound signal, or structured object. The model attempts to represent a distribution P(x) that captures the patterns present in the training data.",
        "Training adjusts the parameters θ so that the model assigns high probability to realistic examples. The exact objective depends on the architecture, but a general optimization view is:"
      ],
      formulaTitle: "Parameter Optimization",
      formula:
        "θ* = argmin_θ L(θ) = argmin_θ E_{x∼p_data}[ℓ(x; θ)]",
      paragraphsAfterFormula: [
        "Here θ represents the learnable parameters of the model, p_data represents the data distribution, ℓ is a loss function, and θ* represents parameters that minimize the expected training loss.",
        "Generation then uses the learned parameters θ* to construct or sample an output. In other words, training learns the transformation, while inference uses that learned transformation."
      ]
    },

    {
      heading: "4. Autoregressive Generative Models",
      paragraphs: [
        "Autoregressive generation decomposes a sequence into conditional predictions. Instead of producing an entire sequence in one indivisible operation, the model predicts one element at a time while conditioning on previously generated elements.",
        "For a token sequence x₁, x₂, ..., xₜ, the joint probability can be factorized using the chain rule:"
      ],
      formula:
        "P(x₁, x₂, ..., xₜ) = ∏_{i=1}^{t} P(xᵢ | x₁, x₂, ..., xᵢ₋₁)",
      paragraphsAfterFormula: [
        "This equation is one of the most important mathematical ideas behind language generation. The model does not need to directly learn one enormous probability for every possible complete sentence. Instead, it learns conditional next-token distributions.",
        "During inference, the model receives a prefix, predicts a probability distribution for the next token, selects or samples a token, appends that token to the sequence, and repeats the process until a stopping condition is reached."
      ],
      process: [
        {
          title: "Context",
          description: "The model receives the current sequence of tokens.",
          input: "x₁, x₂, ..., xᵢ₋₁",
          output: "Hidden representation"
        },
        {
          title: "Next-token Distribution",
          description: "The model computes logits and converts them into probabilities.",
          input: "Hidden representation",
          output: "P(xᵢ | x₁,...,xᵢ₋₁)"
        },
        {
          title: "Decoding",
          description: "A decoding rule selects or samples the next token.",
          input: "Token probabilities",
          output: "xᵢ"
        },
        {
          title: "Append",
          description: "The generated token becomes part of the context for the next prediction.",
          input: "Previous sequence + xᵢ",
          output: "Updated sequence"
        }
      ]
    },

    {
      heading: "5. Autoregressive Model Architecture",
      paragraphs: [
        "A modern autoregressive language model commonly contains token embeddings, positional information, repeated transformer blocks, a final normalization layer, and an output projection that maps hidden states into vocabulary logits.",
        "Suppose the vocabulary contains V possible tokens and the hidden dimension is d. At each generation step, the model produces a hidden vector hᵢ ∈ ℝᵈ. A linear projection maps this vector into V logits:"
      ],
      formula:
        "zᵢ = hᵢW_out + b_out",
      paragraphsAfterFormula: [
        "The logits are converted into probabilities using softmax:"
      ],
      formula2:
        "P(xᵢ = j | x₁,...,xᵢ₋₁) = exp(zᵢⱼ) / ∑_{k=1}^{V} exp(zᵢₖ)",
      paragraphsAfterFormula2: [
        "The resulting vector contains one probability for every vocabulary token. Decoding then determines which token becomes the next element of the generated sequence."
      ]
    },

    {
      heading: "6. Variational Autoencoders",
      paragraphs: [
        "A Variational Autoencoder, or VAE, uses an encoder–latent–decoder structure. The encoder maps an input into parameters of a probability distribution in latent space. A latent sample is then decoded back into the original data space.",
        "The important idea is that the latent representation is not treated simply as one deterministic compressed vector. Instead, the encoder predicts a distribution, usually represented by a mean μ and standard deviation σ for a Gaussian latent distribution.",
        "For an input x, the encoder produces μ(x) and σ(x). A latent vector z is sampled using the reparameterization trick:"
      ],
      formula:
        "z = μ + σ ⊙ ε,  where  ε ∼ N(0, I)",
      paragraphsAfterFormula: [
        "The decoder then reconstructs or generates an observation from z. During training, the model balances reconstruction quality with a regularization term that encourages the latent distribution to remain well behaved."
      ],
      formula2:
        "L_VAE = L_reconstruction + β D_KL(q_φ(z|x) || p(z))",
      paragraphsAfterFormula2: [
        "The reconstruction term encourages the decoder to reproduce meaningful information from the input. The KL-divergence term encourages the learned latent distribution to remain close to a chosen prior, often N(0, I). The coefficient β controls the relative strength of this regularization."
      ],
      process: [
        {
          title: "Encoder",
          description:
            "The encoder transforms x into distribution parameters μ and σ.",
          input: "Input x",
          output: "μ, σ"
        },
        {
          title: "Latent Sampling",
          description:
            "The reparameterization trick creates a differentiable latent sample.",
          input: "μ, σ, ε",
          output: "z"
        },
        {
          title: "Decoder",
          description:
            "The decoder maps the latent representation into the data space.",
          input: "z",
          output: "x̂"
        },
        {
          title: "Loss",
          description:
            "Reconstruction and KL regularization jointly train the model.",
          input: "x, x̂, q_φ(z|x), p(z)",
          output: "L_VAE"
        }
      ]
    },

    {
      heading: "7. Generative Adversarial Networks",
      paragraphs: [
        "Generative Adversarial Networks use two neural networks with competing objectives: a generator G and a discriminator D. The generator attempts to create synthetic examples that resemble real data. The discriminator attempts to distinguish real examples from generated examples.",
        "The generator receives a latent vector z and produces a synthetic sample G(z). The discriminator receives either a real sample x or a generated sample G(z) and estimates whether the sample came from the real data distribution.",
        "The classical GAN objective can be expressed as:"
      ],
      formula:
        "min_G max_D V(D,G) = E_{x∼p_data}[log D(x)] + E_{z∼p(z)}[log(1 − D(G(z)))]",
      paragraphsAfterFormula: [
        "The adversarial relationship forces the generator to improve as the discriminator becomes better at detecting generated samples. In practice, GAN training can be difficult because the two networks must remain sufficiently balanced."
      ],
      process: [
        {
          title: "Sample Latent Noise",
          description: "Draw a random latent vector z.",
          input: "z ∼ p(z)",
          output: "Latent vector"
        },
        {
          title: "Generate",
          description: "The generator maps z into a synthetic example.",
          input: "z",
          output: "G(z)"
        },
        {
          title: "Discriminate",
          description: "The discriminator evaluates real and generated samples.",
          input: "x or G(z)",
          output: "D(x)"
        },
        {
          title: "Adversarial Update",
          description:
            "Generator and discriminator parameters are updated according to their objectives.",
          input: "Generator/discriminator losses",
          output: "Updated parameters"
        }
      ]
    },

    {
      heading: "8. Diffusion Models",
      paragraphs: [
        "Diffusion models generate data by learning to reverse a gradual corruption process. During training, clean data is progressively transformed into noisy data. The model learns how to estimate the information needed to reverse that corruption.",
        "A simplified forward process can be represented as a sequence of noisy states x₀, x₁, ..., x_T. The final state is close to random noise. Generation begins from noise and repeatedly applies the learned reverse process to obtain a structured sample.",
        "A common forward formulation is:"
      ],
      formula:
        "q(x_t | x_{t−1}) = N(x_t; √(1−β_t)x_{t−1}, β_t I)",
      paragraphsAfterFormula: [
        "The variance schedule β_t controls how much noise is introduced at each step. During generation, the learned model estimates the reverse transition so that the process moves from a noisy representation toward a meaningful sample."
      ],
      process: [
        {
          title: "Clean Data",
          description: "Begin with a real training example.",
          input: "x₀",
          output: "Clean representation"
        },
        {
          title: "Forward Noise",
          description:
            "Gradually add controlled noise according to a schedule.",
          input: "x₀",
          output: "x_t"
        },
        {
          title: "Learn Reverse Process",
          description:
            "Train a neural network to predict information required for denoising.",
          input: "Noisy sample + timestep",
          output: "Noise or denoising estimate"
        },
        {
          title: "Sampling",
          description:
            "Start from noise and repeatedly apply the learned reverse transitions.",
          input: "x_T",
          output: "Generated x₀"
        }
      ]
    },

    {
      heading: "9. Comparing Major Generative Model Families",
      paragraphs: [
        "The model families discussed above all learn to generate data, but they organize the generation problem differently. The distinction is architectural as well as mathematical.",
        "Autoregressive models naturally fit sequences because they explicitly model conditional next-element probabilities. VAEs emphasize continuous latent representations and probabilistic encoding. GANs use adversarial competition. Diffusion models learn an iterative denoising process."
      ],
      comparisonTables: [
        {
          title: "Major Generative Model Families",
          columns: [
            "Model family",
            "Core idea",
            "Generation mechanism",
            "Typical strengths",
            "Typical challenges"
          ],
          rows: [
            [
              "Autoregressive",
              "Factorize probability into conditional predictions",
              "Generate one element at a time",
              "Strong sequence modeling and controllable conditioning",
              "Sequential generation can be computationally expensive"
            ],
            [
              "VAE",
              "Learn a probabilistic latent representation",
              "Sample latent variables and decode",
              "Structured latent spaces and stable training",
              "Outputs may be less sharp depending on objective"
            ],
            [
              "GAN",
              "Generator competes with discriminator",
              "Generate directly from latent noise",
              "Sharp synthetic outputs",
              "Training instability and mode collapse"
            ],
            [
              "Diffusion",
              "Learn reverse of a noise process",
              "Iterative denoising",
              "High-quality image and multimodal generation",
              "Sampling may require many network evaluations"
            ]
          ]
        }
      ]
    },

    {
      heading: "10. Conditional Generation",
      paragraphs: [
        "Generative models can generate unconditionally or conditionally. Unconditional generation attempts to sample from the learned data distribution without an explicit external condition. Conditional generation adds information that guides the generated output.",
        "For example, a text-to-image system may condition an image generator on a text representation c. The conceptual objective becomes modeling P(x|c), where x is the generated image and c represents the conditioning information.",
        "Conditioning can come from class labels, text embeddings, another image, structured metadata, retrieved documents, user preferences, or previous generated content."
      ],
      formula:
        "x̂ ∼ P_θ(x | c)",
      paragraphsAfterFormula: [
        "The conditioning signal does not necessarily determine one unique output. Instead, it changes the probability distribution so that outputs consistent with the condition become more likely."
      ]
    },

    {
      heading: "11. Latent Spaces",
      paragraphs: [
        "A latent space is a learned representation space in which complex observations can be represented using a smaller or more structured set of variables. Latent spaces are useful because many real-world observations contain hidden factors that are easier to reason about in a learned representation than in raw input space.",
        "For an image, for example, raw pixel values are extremely high-dimensional. A learned latent representation may capture higher-level information such as shape, texture, composition, or semantic attributes.",
        "The geometry of a latent space can also support interpolation. If two latent vectors correspond to meaningful samples, moving between those vectors may produce a sequence of outputs that gradually changes between the underlying concepts."
      ],
      formula:
        "z(α) = (1 − α)z₁ + αz₂,  0 ≤ α ≤ 1",
      paragraphsAfterFormula: [
        "This simple linear interpolation is only a conceptual example. Whether interpolation produces semantically smooth results depends on the model architecture and the quality of the learned representation."
      ]
    },

    {
      heading: "12. From Model to Application",
      paragraphs: [
        "A production Generative AI system usually adds significant engineering around the model. The model may be hosted locally, accessed through an API, accelerated on GPUs, or deployed behind an inference service.",
        "The application can add retrieval, tool calling, memory, authentication, logging, caching, rate limiting, safety filtering, structured output validation, and human review. These components transform a model capability into a usable product."
      ],
      processFlow: [
        {
          title: "User",
          description: "Provides a request."
        },
        {
          title: "Application API",
          description: "Authenticates and validates the request."
        },
        {
          title: "Context Builder",
          description: "Adds relevant instructions, retrieved information, and application state."
        },
        {
          title: "Generative Model",
          description: "Computes a conditional probability distribution or generation process."
        },
        {
          title: "Decoder",
          description: "Converts model probabilities or latent states into an output."
        },
        {
          title: "Validator",
          description: "Checks structure, safety, policy, and application constraints."
        },
        {
          title: "Application",
          description: "Displays or uses the result."
        }
      ]
    },

    {
      heading: "13. Worked Architecture Example: AI Writing Assistant",
      paragraphs: [
        "Suppose we are building an AI writing assistant. The user enters a paragraph and requests a clearer version. The application first receives the text through a frontend interface. The backend validates the request and constructs a structured instruction.",
        "The text is tokenized and converted into model representations. The autoregressive model processes the sequence and estimates a next-token distribution. A decoding strategy selects tokens repeatedly until the response is complete.",
        "The application can then validate the response, apply output formatting, store the interaction if appropriate, and display the result. If the application supports organization-specific terminology, a retrieval layer could supply relevant documentation before generation."
      ],
      codeExamples: [
        {
          title: "Conceptual Generative AI Application Pipeline",
          language: "python",
          explanation:
            "This simplified example demonstrates the architecture around a generative model. It intentionally separates application logic from the model call.",
          code: `def generate_response(user_text, model, retriever=None):
    if not user_text.strip():
        raise ValueError("Input cannot be empty")

    context = ""
    if retriever is not None:
        documents = retriever.search(user_text)
        context = "\\n".join(documents)

    prompt = f"""
    Task: Improve the user's writing.
    Context:
    {context}

    User text:
    {user_text}

    Return a clearer version while preserving the original meaning.
    """

    response = model.generate(prompt)

    if not response.strip():
        raise RuntimeError("Model returned an empty response")

    return response`,
          output:
            "The application validates input, optionally retrieves context, constructs a prompt, invokes the model, validates the response, and returns the result."
        }
      ]
    },

    {
      heading: "14. Mathematical Intuition: Why Architecture Matters",
      paragraphs: [
        "Architecture determines how information flows through a model. Two models can receive the same data but learn very different representations because their computational structures impose different inductive biases.",
        "An autoregressive model imposes a sequential factorization. A VAE explicitly introduces a latent random variable. A GAN introduces a two-player adversarial objective. A diffusion model introduces a sequence of noisy states and learns a reverse process.",
        "These architectural choices change the optimization problem. They also influence memory requirements, inference latency, controllability, stability, representation quality, and the type of data for which the model is naturally suited."
      ],
      formula:
        "Architecture → Representation → Objective → Optimization → Generation Behavior",
      paragraphsAfterFormula: [
        "This chain is a useful way to reason about new model architectures. Instead of memorizing names, ask what representation the model uses, what objective it optimizes, what information flows through the network, and how generation is performed."
      ]
    },

    {
      heading: "15. Model Selection as an Engineering Decision",
      paragraphs: [
        "There is no single generative architecture that is automatically appropriate for every problem. Model selection depends on the data modality, quality requirements, latency constraints, available hardware, controllability requirements, training budget, deployment environment, and evaluation criteria.",
        "For a sequence-generation task, autoregressive modeling may provide a natural formulation. For structured latent representations, a VAE may be useful. For certain image-generation tasks, diffusion models are common. GANs remain important historically and conceptually and can still be useful for specialized generation problems.",
        "In modern application development, engineers often consume pretrained foundation models instead of training large generative models from scratch. Understanding model families remains important because it helps engineers reason about capabilities, limitations, inference behavior, and system trade-offs."
      ]
    },

    {
      heading: "16. Common Failure Modes by Architecture",
      paragraphs: [
        "Different architectures fail in different ways. Autoregressive models can produce repetitive or incorrect sequences and may accumulate errors across long generations. VAEs can produce overly smooth outputs when the reconstruction objective does not preserve fine detail. GANs can suffer from mode collapse, where the generator produces insufficiently diverse outputs. Diffusion models can require substantial computation during sampling and may produce outputs that do not perfectly satisfy conditioning information.",
        "Failure analysis should therefore consider both the model and the surrounding application. A poor output can result from the model itself, incorrect preprocessing, inadequate conditioning, poor decoding settings, missing context, data quality problems, or an application-level integration error."
      ]
    },

    {
      heading: "17. Practical Architecture Checklist",
      bullets: [
        "Identify the input modality and representation used by the system.",
        "Identify whether generation is autoregressive, latent-variable based, adversarial, diffusion-based, or another formulation.",
        "Determine what the model actually predicts during training.",
        "Determine what the model receives during inference.",
        "Identify the sampling or decoding strategy.",
        "Identify external context such as retrieved documents or tool outputs.",
        "Identify post-processing and validation mechanisms.",
        "Identify safety and evaluation mechanisms.",
        "Measure latency, memory use, throughput, and output quality.",
        "Document model assumptions and known failure modes."
      ]
    },

    {
      heading: "18. Mini Architecture Exercise",
      paragraphs: [
        "Imagine an application that accepts a text prompt and generates an image. Describe the system from the user's input to the final image. Your answer should identify the text representation, conditioning mechanism, generative model, sampling process, output decoding, and application layer.",
        "Then modify the design so that the user can provide an additional reference image. Explain what changes in the conditioning pathway and why multimodal conditioning requires an appropriate representation for each input modality."
      ]
    }
  ],

  mathIntuition: [
    {
      title: "Probability as the Foundation",
      explanation:
        "Generative modeling can be understood as learning a probability distribution over possible observations. Training adjusts θ so that realistic training examples receive high probability or low generation error."
    },
    {
      title: "Autoregressive Factorization",
      formula:
        "P(x₁,...,xₜ) = ∏_{i=1}^{t} P(xᵢ | x₁,...,xᵢ₋₁)",
      explanation:
        "A complex sequence distribution becomes a chain of conditional predictions. This makes next-token prediction a practical training objective."
    },
    {
      title: "Latent Variable Modeling",
      formula:
        "p(x) = ∫ p_θ(x|z)p(z) dz",
      explanation:
        "A latent-variable model explains observed data through hidden variables z. The decoder generates observations conditioned on the latent representation."
    },
    {
      title: "Optimization",
      formula:
        "θ* = argmin_θ L(θ)",
      explanation:
        "Learning is an optimization problem. The architecture defines the computations used to produce the loss, while optimization changes θ to reduce that loss."
    }
  ],

  codeExamples: [
    {
      title: "Autoregressive Sampling",
      language: "python",
      code: `import random

def sample_next_token(probabilities):
    tokens = list(probabilities.keys())
    weights = list(probabilities.values())
    return random.choices(tokens, weights=weights, k=1)[0]

sequence = ["Generative"]

for _ in range(5):
    probabilities = {
        "AI": 0.45,
        "models": 0.25,
        "systems": 0.20,
        "learn": 0.10,
    }

    token = sample_next_token(probabilities)
    sequence.append(token)

print(" ".join(sequence))`,
      output:
        "A sampled sequence is produced one token at a time. Real language models calculate the probability distribution from a neural network rather than using a manually defined dictionary."
    },
    {
      title: "VAE Reparameterization Intuition",
      language: "python",
      code: `import numpy as np

mu = np.array([0.5, -0.2])
sigma = np.array([0.8, 0.4])

epsilon = np.random.randn(2)

z = mu + sigma * epsilon

print("μ:", mu)
print("σ:", sigma)
print("ε:", epsilon)
print("z:", z)`,
      output:
        "The latent sample z changes because ε is sampled from a standard normal distribution."
    },
    {
      title: "Diffusion Noise Schedule Concept",
      language: "python",
      code: `import numpy as np

x = np.array([0.2, -0.4, 0.7])

beta = 0.2
noise = np.random.randn(*x.shape)

x_noisy = (
    np.sqrt(1 - beta) * x
    + np.sqrt(beta) * noise
)

print("Original:", x)
print("Noisy:", x_noisy)`,
      output:
        "The example demonstrates the intuition of mixing a clean representation with Gaussian noise."
    }
  ],

  comparisonTables: [
    {
      title: "Generation Strategy Comparison",
      columns: [
        "Property",
        "Autoregressive",
        "VAE",
        "GAN",
        "Diffusion"
      ],
      rows: [
        [
          "Primary representation",
          "Sequence / hidden states",
          "Latent distribution",
          "Latent noise",
          "Noisy intermediate states"
        ],
        [
          "Generation",
          "Sequential prediction",
          "Latent sampling + decoding",
          "Generator mapping",
          "Iterative denoising"
        ],
        [
          "Training concept",
          "Likelihood / next-token prediction",
          "Reconstruction + KL regularization",
          "Adversarial objective",
          "Noise prediction / denoising objective"
        ],
        [
          "Typical bottleneck",
          "Sequential inference",
          "Reconstruction quality",
          "Training stability",
          "Sampling computation"
        ]
      ]
    }
  ],

  architecture: {
    title: "End-to-End Generative AI Architecture",
    description:
      "A practical Generative AI system connects data, representations, model computation, inference, application logic, and evaluation.",
    layers: [
      {
        title: "Input",
        components: ["Text", "Image", "Audio", "Structured data"]
      },
      {
        title: "Preprocessing",
        components: ["Validation", "Normalization", "Tokenization", "Resizing"]
      },
      {
        title: "Representation",
        components: ["Tokens", "Embeddings", "Latent vectors", "Tensors"]
      },
      {
        title: "Generative Model",
        components: ["Transformer", "VAE", "GAN", "Diffusion"]
      },
      {
        title: "Inference",
        components: ["Sampling", "Decoding", "Temperature", "Guidance"]
      },
      {
        title: "Application",
        components: ["API", "UI", "Storage", "Business logic"]
      },
      {
        title: "Evaluation & Safety",
        components: ["Validation", "Monitoring", "Testing", "Guardrails"]
      }
    ]
  },

  implementationStages: [
    {
      title: "Define the Generation Task",
      description:
        "Specify what the system receives, what it should generate, and what quality means."
    },
    {
      title: "Select a Model Family",
      description:
        "Choose an architecture based on modality, quality, latency, controllability, and compute requirements."
    },
    {
      title: "Prepare Representations",
      description:
        "Convert raw inputs into tokens, embeddings, tensors, or latent representations."
    },
    {
      title: "Configure Inference",
      description:
        "Choose decoding, sampling, temperature, guidance, maximum length, or other generation parameters."
    },
    {
      title: "Build the Application Layer",
      description:
        "Connect the model to APIs, user interfaces, databases, retrieval systems, and business logic."
    },
    {
      title: "Evaluate and Monitor",
      description:
        "Measure output quality, latency, reliability, safety, cost, and failure modes."
    }
  ],

  exercises: [
    {
      title: "Architecture Identification",
      description:
        "Given a generative application, identify its input, representation, model, inference, post-processing, and application layers."
    },
    {
      title: "Model Family Analysis",
      description:
        "Explain how autoregressive models, VAEs, GANs, and diffusion models differ in their generation process."
    },
    {
      title: "Probability Factorization",
      description:
        "For the sequence x₁, x₂, x₃, x₄, write the autoregressive factorization of P(x₁,x₂,x₃,x₄)."
    },
    {
      title: "System Design",
      description:
        "Design a high-level architecture for a text-to-image application and explain the role of conditioning."
    }
  ],

  codingExercises: [
    {
      title: "Build a Toy Autoregressive Generator",
      description:
        "Create a Python program that stores conditional next-token probabilities and repeatedly samples the next token until a stop token appears.",
      requirements: [
        "Represent the vocabulary using strings.",
        "Store conditional probabilities.",
        "Sample tokens using weighted random selection.",
        "Stop when an end token is generated.",
        "Print the complete generated sequence."
      ]
    },
    {
      title: "Implement a Latent Sampling Experiment",
      description:
        "Generate multiple latent vectors using z = μ + σ ⊙ ε and observe how changing σ affects the spread of generated samples."
    }
  ],

  architectureExercises: [
    {
      title: "Generative AI Assistant Architecture",
      prompt:
        "Design an architecture for an AI assistant that accepts text, retrieves relevant information, generates a response, validates the response, and displays it.",
      expectedComponents: [
        "User interface",
        "Application API",
        "Input validation",
        "Retrieval layer",
        "Context construction",
        "Generative model",
        "Decoding",
        "Output validation",
        "Monitoring"
      ]
    },
    {
      title: "Text-to-Image Architecture",
      prompt:
        "Design a high-level architecture for a text-to-image system with optional reference-image conditioning.",
      expectedComponents: [
        "Text encoder",
        "Image encoder",
        "Conditioning mechanism",
        "Generative model",
        "Sampling process",
        "Image decoder",
        "Safety validation",
        "Application interface"
      ]
    }
  ],

  interviewQuestions: [
    {
      question: "What is the difference between a generative model and a Generative AI application?",
      answer:
        "A generative model learns to produce or model data, while a Generative AI application includes the model plus interfaces, preprocessing, inference logic, validation, safety, storage, and application-specific workflows."
    },
    {
      question: "How does an autoregressive model generate a sequence?",
      answer:
        "It predicts a conditional probability distribution for the next element given previously generated elements, selects or samples one element, appends it to the context, and repeats."
    },
    {
      question: "What is the role of a latent space?",
      answer:
        "A latent space provides a learned representation in which important underlying factors of the data can be represented more compactly or structurally."
    },
    {
      question: "How does a VAE differ from a standard autoencoder?",
      answer:
        "A VAE learns a probability distribution over latent representations and uses probabilistic sampling with a regularization objective rather than only learning a deterministic compressed representation."
    },
    {
      question: "What are the two networks in a GAN?",
      answer:
        "A generator produces synthetic samples and a discriminator attempts to distinguish real samples from generated samples."
    },
    {
      question: "What is the basic idea behind diffusion models?",
      answer:
        "Diffusion models learn to reverse a gradual noise-addition process, starting from noise during generation and iteratively denoising toward a structured sample."
    },
    {
      question: "Why is decoding important?",
      answer:
        "The model typically produces a distribution or intermediate representation rather than directly selecting one final output. Decoding determines how the final output is selected or sampled."
    },
    {
      question: "Why should model architecture and application architecture be separated conceptually?",
      answer:
        "Because the model is only one component of a production system. Separating the concepts makes it easier to change models, add retrieval, apply safety controls, monitor behavior, and maintain application logic."
    }
  ],

  commonMistakes: [
    "Thinking that a foundation model is the same thing as a complete AI application.",
    "Memorizing model names without understanding how generation occurs.",
    "Confusing training architecture with inference architecture.",
    "Assuming every generative model generates outputs in one single step.",
    "Ignoring the role of sampling and decoding.",
    "Treating latent variables as ordinary input features without understanding their probabilistic role.",
    "Assuming GANs and diffusion models use the same training objective.",
    "Ignoring preprocessing and representation layers.",
    "Evaluating a model only by visual or textual quality while ignoring latency, cost, safety, and reliability.",
    "Assuming a better model automatically produces a better application."
  ],

  summary: [
    "Generative AI systems are layered architectures rather than isolated neural networks.",
    "A complete application can contain data processing, representation, model inference, decoding, post-processing, application logic, retrieval, tools, safety, and evaluation.",
    "Autoregressive models factorize a sequence probability into conditional next-element probabilities.",
    "VAEs use probabilistic latent representations and balance reconstruction with latent regularization.",
    "GANs train a generator and discriminator through an adversarial objective.",
    "Diffusion models learn to reverse a controlled noise process.",
    "Conditional generation changes the distribution of possible outputs using additional information.",
    "Latent spaces provide useful learned representations for generation and interpolation.",
    "Architecture affects representation, optimization, inference behavior, controllability, compute requirements, and failure modes.",
    "Production Generative AI engineering requires both model understanding and system-level engineering."
  ],

  keyTakeaways: [
    "Think in terms of systems, not only models.",
    "Understand the probability distribution or generation process that the model learns.",
    "Remember that θ represents learnable model parameters.",
    "Autoregressive generation repeatedly predicts the next element.",
    "VAEs learn probabilistic latent representations.",
    "GANs use generator–discriminator competition.",
    "Diffusion models learn iterative denoising.",
    "Conditioning provides information that guides generation.",
    "Decoding converts model distributions or latent states into concrete outputs.",
    "A production system requires evaluation, safety, monitoring, and application logic around the model."
  ]
};

export default lesson3;

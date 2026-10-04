const lesson2 = {
  id: "lesson2",
  moduleId: "module1",
  lessonNumber: 2,

  title: "Generative Models — How Machines Learn to Generate",

  subtitle:
    "Understand data distributions, latent representations, likelihood, sampling, conditional generation, and the major families of generative models.",

  description:
    "This lesson moves from the definition of Generative AI into the central idea behind generative modeling: learning patterns and distributions from data and using those learned representations to generate new samples. You will study probability distributions, latent spaces, likelihood, sampling, conditional generation, autoregressive models, VAEs, GANs, diffusion models, and the engineering trade-offs between different model families.",

  estimatedTime: "100–130 minutes",

  difficulty: "Intermediate",

  learningObjectives: [
    "Explain what a generative model attempts to learn from a dataset.",
    "Understand the difference between a data distribution and an individual data sample.",
    "Explain likelihood and log-likelihood intuitively.",
    "Understand how model parameters θ define a learned distribution.",
    "Explain latent representations and latent spaces.",
    "Understand the difference between explicit and implicit generative modeling.",
    "Explain sampling and why sampling is central to generation.",
    "Understand conditional probability in generative systems.",
    "Explain autoregressive generative models.",
    "Explain the basic architecture and intuition of variational autoencoders.",
    "Explain the generator and discriminator roles in GANs.",
    "Explain the basic denoising idea behind diffusion models.",
    "Compare major generative model families.",
    "Understand why different model families have different strengths and failure modes.",
    "Connect generative-model theory with practical Generative AI applications."
  ],

  overview: `
A generative model attempts to learn useful structure from a collection of data so that the learned structure can later be used to produce new samples.

Suppose we have a dataset containing photographs. The individual photographs are observations from a much larger space of possible images. A generative model attempts to learn patterns that characterize this space.

The model does not need to memorize every possible photograph. Instead, it learns parameters that allow it to represent statistical relationships in the data.

If X represents a random variable describing the data, then the underlying distribution can be represented conceptually as:

p_data(x)

A parameterized generative model can be written as:

p_θ(x)

where θ represents the model parameters.

Training attempts to find values of θ that make p_θ(x) a useful approximation of the structure present in the training data.

Once training is complete, generation can be viewed as obtaining a new sample from the learned model:

x_new ~ p_θ(x)

This simple notation contains a large amount of intuition.

The model has learned parameters θ.

Those parameters define a learned distribution or generative mechanism.

Sampling from that mechanism produces a new output.

Different families of generative models implement this idea differently.

Autoregressive models generate elements sequentially.

Variational autoencoders learn a structured latent representation and a decoder.

Generative adversarial networks train a generator against a discriminator.

Diffusion models learn a process that can transform noise into structured data through repeated denoising.

The mathematical details differ, but all of these systems attempt to learn useful structure that supports generation.
`,

  sections: [
    {
      id: "data-distribution",
      title: "1. Data Is More Than a Collection of Examples",

      content: `
A dataset is a collection of observations, but a generative model is interested in the structure behind those observations.

Imagine a dataset containing thousands of handwritten digits. Each image is one sample. However, the samples are not arbitrary. They contain repeated patterns associated with the shapes of digits.

The model attempts to learn a representation that captures those patterns.

If X represents a random variable describing an observation, then the data-generating process can be described conceptually using a probability distribution:

p_data(x)

The distribution describes how likely different observations are under the data-generating process.

For a simple one-dimensional example, imagine a dataset of heights. Most values may fall within a particular range, while extremely small or extremely large values occur less frequently.

A generative model attempts to learn the structure of such a distribution.

For high-dimensional data such as images, language, and video, the distribution is enormously complicated.

An image may contain millions of possible pixel configurations.

A sentence may contain many possible combinations of tokens.

A video contains spatial and temporal relationships simultaneously.

The goal of a modern generative model is therefore not merely to memorize examples. It is to learn a parameterized representation of a highly complex distribution.
`,

      formula:
        "p_data(x) → underlying data distribution",

      examples: [
        "A dataset of handwritten digits contains samples generated by human writing patterns.",
        "A text corpus contains sequences generated by human language usage.",
        "An image dataset contains visual patterns involving objects, textures, shapes, and spatial relationships.",
        "An audio dataset contains temporal patterns related to speech, music, and environmental sounds."
      ],

      bullets: [
        "A sample is one observation.",
        "A dataset contains many observations.",
        "A distribution describes statistical structure across possible observations.",
        "A generative model attempts to capture useful structure in that distribution."
      ]
    },

    {
      id: "parameterized-distribution",
      title: "2. The Learned Distribution pθ(x)",

      content: `
A machine learning model does not normally store a probability distribution as a giant lookup table.

Instead, the model contains parameters.

These parameters are represented collectively by θ.

The model can therefore be represented as:

p_θ(x)

The subscript θ means that the distribution represented by the model depends on the learned parameters.

During training, optimization modifies θ.

The objective is to find parameter values that make the model's behavior increasingly compatible with the training data.

Conceptually:

Initial θ
→ model produces poor predictions
→ calculate objective
→ calculate gradients
→ update θ
→ model improves
→ repeat

Eventually the parameters represent useful statistical structure.

The learned distribution does not need to reproduce every training sample exactly. The objective is to learn a useful representation of the underlying patterns.

This distinction is important because memorization and generalization are different concepts.

A model that simply memorizes training examples may fail to generate useful new samples.

A useful generative model should learn patterns that allow it to produce outputs that are related to the training distribution while still being new samples.
`,

      formula:
        "p_θ(x) ≈ p_data(x)",

      contentAfterFormula: `
The approximation symbol is important.

In realistic machine learning, a trained model does not perfectly recover the true data-generating distribution. The model architecture, dataset, optimization procedure, compute budget, and objective all limit what can be learned.

Therefore, generative modeling should be understood as approximation under constraints.
`
    },

    {
      id: "likelihood",
      title: "3. Likelihood: Measuring How Well the Model Explains Data",

      content: `
Likelihood provides one important way to think about whether a model assigns reasonable probability to observed data.

Suppose we observe a dataset:

D = {x₁, x₂, ..., xₙ}

A model with parameters θ assigns a probability to each observation.

The likelihood of the dataset can be represented conceptually as:

L(θ) = ∏ᵢ p_θ(xᵢ)

The training objective can then attempt to maximize the likelihood.

The intuition is straightforward.

If the model assigns high probability to examples that actually occur in the training data, the model is representing important structure in that data.

If it assigns extremely low probability to the training examples, the model is not representing the data effectively.

In practice, the logarithm of likelihood is usually more convenient.

The log-likelihood becomes:

log L(θ) = ∑ᵢ log p_θ(xᵢ)

Products become sums, which makes the objective easier to optimize numerically.

Many language-model objectives can be understood through this likelihood perspective.

For a sequence of tokens, the model learns to assign high probability to the correct next tokens given their context.
`,

      formula:
        "log L(θ) = ∑ᵢ log p_θ(xᵢ)",

      examples: [
        "If a model assigns high probability to observed training examples, its likelihood is higher.",
        "If the model assigns very low probability to many observed examples, the likelihood decreases.",
        "Language-model training can be expressed as maximizing the likelihood of observed token sequences."
      ]
    },

    {
      id: "negative-log-likelihood",
      title: "4. Negative Log-Likelihood and Loss",

      content: `
Machine learning systems are frequently formulated as minimization problems rather than maximization problems.

Instead of maximizing log-likelihood, we can minimize its negative:

J(θ) = -∑ᵢ log p_θ(xᵢ)

This is called negative log-likelihood.

The negative sign converts a maximization objective into a minimization objective.

The intuition is useful.

If the model assigns a high probability to the correct observation, then:

log p_θ(x)

is relatively large.

Its negative is therefore relatively small.

If the model assigns a very small probability to the correct observation, then the negative log probability becomes large.

Therefore:

Good prediction
→ high probability
→ low negative log-likelihood

Poor prediction
→ low probability
→ high negative log-likelihood

This connection between probability and loss is one of the foundations of modern machine learning.
`,

      formula:
        "J(θ) = -∑ᵢ log p_θ(xᵢ)",

      contentAfterFormula: `
For language models, the same intuition appears at the token level.

If the correct next token receives high probability, the loss contribution is small.

If the correct next token receives low probability, the loss contribution is large.

Training repeatedly adjusts θ to reduce the average loss over many examples.
`
    },

    {
      id: "latent-space",
      title: "5. Latent Representations and Latent Space",

      content: `
A latent representation is an internal representation that captures useful structure without necessarily corresponding directly to human-readable variables.

Suppose an image contains a person's face.

The raw image may contain millions of pixel values.

A neural network can transform the image into a lower-dimensional or more structured representation.

That representation may encode information related to facial shape, pose, lighting, texture, and other features.

The individual dimensions do not necessarily have simple human-readable meanings. Instead, useful information can be distributed across many dimensions.

The collection of possible latent representations is called a latent space.

Latent spaces are powerful because operations in that space can sometimes correspond to meaningful changes in generated outputs.

For example, a learned representation might contain directions associated with properties such as:

pose
lighting
style
shape
color

These relationships depend on the model and training process. They should not be assumed to exist perfectly in every latent representation.

Latent-variable models introduce an unobserved variable z.

The generative process can be represented as:

z → decoder → x

The latent variable z captures information from which the model generates an observation x.
`,

      formula:
        "z → decoder → x",

      process: [
        "Sample or obtain a latent representation z.",
        "Transform z using a learned decoder or generator.",
        "Produce a generated observation x.",
        "Evaluate or use x as the generated output."
      ]
    },

    {
      id: "sampling",
      title: "6. Sampling: Turning a Distribution Into an Actual Output",

      content: `
A probability distribution describes possible outcomes, but a user ultimately needs an actual output.

Sampling is the process of selecting an outcome according to a probability distribution.

Suppose a model assigns probabilities:

A → 0.6
B → 0.3
C → 0.1

A sample is more likely to be A, but B and C remain possible.

Repeated sampling can therefore produce different outputs from the same distribution.

This is one reason generative systems can produce multiple different responses to the same input.

Sampling should not be confused with randomness that has no structure.

The randomness is constrained by the learned probability distribution.

If the model strongly prefers one output, that output will be selected more frequently.

If several outputs have similar probabilities, the generated results may vary more.

Different generation algorithms control how the probability distribution is converted into a final output.
`,

      examples: [
        "Language generation samples possible next tokens.",
        "A latent generative model can sample z and decode it into an output.",
        "Image generation can begin from a random latent state and transform it into a structured image.",
        "Different random seeds can produce different outputs from the same generative system."
      ]
    },

    {
      id: "conditional-generation",
      title: "7. Conditional Generative Modeling",

      content: `
Many useful generative systems are conditional.

Instead of modeling only:

p(x)

the model can represent:

p(x|c)

where c is some condition.

The condition can be a class label, text prompt, image, audio signal, user preference, metadata, or another representation.

For example, suppose an image model receives the condition:

c = "a red car on a mountain road"

The goal is to generate an image consistent with that condition.

In language generation, the preceding tokens act as context.

The next token is modeled as:

p(xₜ | x₁, ..., xₜ₋₁)

The condition therefore determines which outputs are more likely.

Conditional generation is extremely important because users generally do not want completely arbitrary content. They want content controlled by an instruction, context, or input.
`,

      formula:
        "p(x|c)",

      examples: [
        "Text prompt → image",
        "Image → caption",
        "Text → speech",
        "Text + image → answer",
        "Class label → generated image",
        "Code context → code completion"
      ]
    },

    {
      id: "autoregressive-models",
      title: "8. Autoregressive Generative Models",

      content: `
Autoregressive models generate a sequence one element at a time.

For language, the elements are tokens.

The model estimates:

p(xₜ | x₁, ..., xₜ₋₁)

After selecting xₜ, the new token becomes part of the context used to generate xₜ₊₁.

Therefore:

x₁
→ x₂
→ x₃
→ ...
→ xₜ

The probability of the complete sequence can be factorized as:

P(x₁, ..., xₜ)
=
∏ₜ P(xₜ | x₁, ..., xₜ₋₁)

This formulation is central to modern large language models.

The transformer architecture makes it possible to process contextual relationships between tokens efficiently during training.

During inference, however, autoregressive generation is sequential because each generated token depends on the previous context.

This creates an important engineering trade-off.

Autoregressive models are powerful and flexible, but generating a long sequence can require many sequential decoding steps.
`,

      process: [
        "Receive initial context.",
        "Encode the current context.",
        "Calculate logits for the next token.",
        "Convert logits into probabilities.",
        "Apply a decoding strategy.",
        "Select the next token.",
        "Append the token to the sequence.",
        "Repeat until the stopping condition is reached."
      ],

      formula:
        "P(x₁, ..., xₜ) = ∏ₜ P(xₜ | x₁, ..., xₜ₋₁)"
    },

    {
      id: "vae",
      title: "9. Variational Autoencoders",

      content: `
A variational autoencoder, commonly called a VAE, is a generative model based on an encoder-decoder architecture.

The encoder maps an input x into a latent distribution.

Instead of mapping x to one fixed latent vector, the encoder predicts parameters of a probability distribution.

A common formulation uses a Gaussian distribution:

q_φ(z|x)

The decoder then attempts to reconstruct or generate an observation from the latent variable:

p_θ(x|z)

The model therefore learns a structured latent space.

The VAE objective contains two major components.

The reconstruction component encourages the generated output to preserve information from the input.

The regularization component encourages the learned latent distribution to remain close to a chosen prior, commonly a standard normal distribution.

This creates a balance between reconstruction quality and a useful continuous latent space.
`,

      formula:
        "L = L_reconstruction + βD_KL(q_φ(z|x) || p(z))",

      contentAfterFormula: `
Here β controls the relative importance of the regularization term.

The Kullback–Leibler divergence measures how different the learned latent distribution is from the chosen prior.

The exact VAE objective can be derived from the evidence lower bound, but the engineering intuition is simpler:

Encode
→ represent
→ regularize latent space
→ decode
→ reconstruct or generate
`,

      process: [
        "Input x enters the encoder.",
        "Encoder estimates latent distribution parameters.",
        "Sample latent representation z.",
        "Decoder receives z.",
        "Decoder reconstructs or generates x.",
        "Calculate reconstruction loss.",
        "Calculate latent regularization loss.",
        "Optimize the combined objective."
      ]
    },

    {
      id: "gan",
      title: "10. Generative Adversarial Networks",

      content: `
A Generative Adversarial Network, or GAN, contains two competing neural networks.

The generator attempts to produce samples that resemble real data.

The discriminator attempts to distinguish real samples from generated samples.

The generator can be represented as:

G(z)

where z is a latent random variable.

The discriminator can be represented as:

D(x)

which estimates whether x is real or generated.

The two networks participate in an adversarial training process.

The generator improves by learning to produce samples that fool the discriminator.

The discriminator improves by learning to distinguish real and generated examples.

This creates a competition:

Random latent vector
→ Generator
→ Fake sample
→ Discriminator

Real sample
→ Discriminator

The discriminator receives both categories during training.

GANs demonstrated that adversarial learning could produce highly realistic synthetic outputs, particularly in image generation.

However, GAN training can be difficult to stabilize.

Issues such as mode collapse can occur when the generator produces limited varieties of outputs.
`,

      formula:
        "min_G max_D V(D,G) = E_x[log D(x)] + E_z[log(1 − D(G(z)))]",

      process: [
        "Sample latent noise z.",
        "Generator produces G(z).",
        "Discriminator receives real samples.",
        "Discriminator receives generated samples.",
        "Discriminator learns to distinguish the two.",
        "Generator learns from discriminator feedback.",
        "Repeat the adversarial optimization process."
      ]
    },

    {
      id: "diffusion",
      title: "11. Diffusion Models",

      content: `
Diffusion models use a different generation strategy.

The central intuition is to define a process that gradually adds noise to data and then learn a reverse process that removes the noise.

Imagine starting with an image.

Noise is progressively added:

Clean image
→ slightly noisy
→ more noisy
→ heavily noisy
→ approximately random noise

The model is trained to learn how to reverse this process.

During generation, the process starts from noise:

Random noise
→ denoise
→ denoise
→ denoise
→ structured representation
→ generated image

This repeated denoising process allows the model to construct complex outputs.

Diffusion models became especially important for high-quality image generation because the iterative denoising framework provides a powerful way to model complex data distributions.

Conditional diffusion models can incorporate text or other information to guide the denoising process.

For example:

Text prompt
+
Noise
→ guided denoising
→ image

The conditioning information influences which structure the final sample should contain.
`,

      process: [
        "Start with clean training data.",
        "Add controlled noise during the forward process.",
        "Train a neural network to predict useful information for reversing the corruption.",
        "Start generation from noise.",
        "Apply the learned denoising process repeatedly.",
        "Produce a structured generated sample."
      ]
    },

    {
      id: "model-families",
      title: "12. Major Generative Model Families",

      content: `
Different generative model families solve related problems using different mathematical mechanisms.

Autoregressive models factorize a sequence into conditional probabilities.

VAEs learn latent representations using an encoder-decoder framework and probabilistic regularization.

GANs use adversarial competition between a generator and discriminator.

Diffusion models learn iterative denoising transformations.

Normalizing flows learn invertible transformations between simple distributions and complex data distributions.

These approaches are not interchangeable in every application.

The appropriate architecture depends on the data modality, quality requirements, controllability, training stability, inference cost, and application goals.
`,

      comparisonTable: {
        title: "Generative Model Families",
        columns: [
          "Model Family",
          "Core Idea",
          "Common Strength",
          "Important Challenge"
        ],
        rows: [
          [
            "Autoregressive",
            "Generate sequentially using conditional probabilities",
            "Strong sequence modeling",
            "Sequential inference"
          ],
          [
            "VAE",
            "Learn structured latent representation",
            "Useful latent spaces",
            "Reconstruction-quality trade-offs"
          ],
          [
            "GAN",
            "Generator competes with discriminator",
            "High-quality synthetic samples",
            "Training stability and mode collapse"
          ],
          [
            "Diffusion",
            "Learn iterative denoising",
            "High-quality generation",
            "Multiple denoising steps"
          ],
          [
            "Normalizing Flow",
            "Learn invertible transformation",
            "Explicit likelihood and tractable transformations",
            "Architectural constraints"
          ]
        ]
      }
    },

    {
      id: "explicit-vs-implicit",
      title: "13. Explicit and Implicit Generative Modeling",

      content: `
A useful conceptual distinction is whether a model explicitly represents a probability density or instead learns a generation mechanism without providing a simple explicit density.

Autoregressive models can define likelihoods directly through conditional probability factorization.

Normalizing flows can also provide explicit likelihoods because their transformations are designed to remain mathematically tractable.

GANs are often described as implicit generative models because the generator provides a mechanism for producing samples without requiring a straightforward tractable likelihood.

Diffusion models can also be understood through a learned generative process rather than simply as a direct probability-density evaluator.

The distinction matters because likelihood evaluation, sampling, and training objectives can have different computational properties.

There is no single generative-model design that is optimal for every objective.

The architecture should be selected based on what the application needs.
`
    },

    {
      id: "mode-collapse",
      title: "14. Failure Modes in Generative Models",

      content: `
Generative models can fail in ways that are different from ordinary classification systems.

One important failure is poor coverage of the data distribution.

A model might generate outputs that look plausible but represent only a narrow subset of possible data.

In GANs, this can appear as mode collapse.

Another failure is low-quality generation, where generated outputs do not resemble the training distribution sufficiently well.

Conditional models can also fail to follow their conditions.

For example, an image generator might produce a realistic image but fail to correctly represent the requested object or relationship.

Autoregressive models can produce coherent local sequences while drifting away from the original instruction over long generations.

Diffusion systems can generate visually plausible outputs while producing incorrect text alignment or structural relationships.

Therefore, generative-model evaluation must consider multiple dimensions:

quality
diversity
condition adherence
factuality
coherence
safety
robustness

A single metric rarely captures all of these properties.
`,

      bullets: [
        "Low sample quality",
        "Limited diversity",
        "Mode collapse",
        "Conditioning failures",
        "Long-range inconsistency",
        "Factual errors",
        "Prompt misalignment",
        "Computational inefficiency"
      ]
    },

    {
      id: "engineering-tradeoffs",
      title: "15. Engineering Trade-offs Between Model Families",

      content: `
Theoretical capability is only one part of model selection.

A production engineer must consider training cost, inference cost, latency, memory requirements, controllability, quality, data requirements, and deployment complexity.

For example, an autoregressive language model may provide excellent sequence modeling but require sequential generation.

A diffusion model may produce high-quality images but require multiple denoising steps.

A GAN may generate outputs quickly after training but can be difficult to train reliably.

A VAE can provide a useful latent representation but may produce outputs that are less sharp than those from other model families in some settings.

The right choice therefore depends on the application.

The goal is not to memorize a ranking of model families.

The goal is to understand the mechanism well enough to reason about engineering consequences.
`,

      table: {
        title: "Engineering Considerations",
        columns: [
          "Consideration",
          "Question"
        ],
        rows: [
          [
            "Quality",
            "How realistic or useful must the generated output be?"
          ],
          [
            "Diversity",
            "Should different runs produce substantially different outputs?"
          ],
          [
            "Latency",
            "How quickly must the application return a result?"
          ],
          [
            "Compute",
            "What training and inference hardware is available?"
          ],
          [
            "Controllability",
            "How precisely must the input condition control the output?"
          ],
          [
            "Scalability",
            "How many users or requests must the system support?"
          ],
          [
            "Evaluation",
            "How will generation quality be measured?"
          ]
        ]
      }
    },

    {
      id: "end-to-end-example",
      title: "16. Worked Example: Building a Text-to-Image System",

      content: `
Consider a simplified text-to-image application.

The user enters:

"A futuristic city at sunset with flying vehicles."

The application sends the prompt to a generative model.

The model converts the text into an internal representation.

A generation process then begins from a noisy representation.

The model repeatedly applies learned transformations that move the representation toward an image consistent with the conditioning information.

Eventually the system produces a final image.

A simplified conceptual flow is:

User prompt
→ text representation
→ conditioning information
→ random noise
→ iterative generation
→ image
→ post-processing
→ user

Several components may exist around the model.

The frontend collects the prompt.

The backend authenticates the request.

The model-serving layer sends the request to the model.

The inference system manages GPU resources.

The application may store metadata such as prompt, generation settings, model version, and timestamps.

The resulting image may be stored in object storage.

This demonstrates why understanding the model family is only one part of Generative AI engineering.
`,

      process: [
        "User enters a text prompt.",
        "Application validates the prompt.",
        "Text is converted into a representation used for conditioning.",
        "A generation process begins from noise or another initial state.",
        "The model iteratively transforms the representation.",
        "The generated representation is decoded into an image.",
        "Application-level validation and post-processing are applied.",
        "The image is returned to the user."
      ]
    },

    {
      id: "mathematical-intuition",
      title: "17. Mathematical Intuition: Why Sampling Works",

      content: `
Suppose a model represents a probability distribution over possible outcomes.

For a simplified distribution:

A → 0.5
B → 0.3
C → 0.2

If we sample once, we may obtain A.

If we sample many times, the frequencies should approximately approach the probabilities, assuming the sampling process is correct and independent.

For N samples, the empirical frequency of A can be represented as:

f_A = count(A) / N

As N becomes large, the empirical frequency tends toward the underlying probability.

This illustrates an important concept.

The model does not necessarily predict one fixed output.

Instead, it defines a distribution from which outputs can be generated.

In a language model, the distribution changes after every generated token because the context changes.

Therefore:

Context₁
→ distribution₁
→ token₁

Context₂
→ distribution₂
→ token₂

Context₃
→ distribution₃
→ token₃

The complete sequence emerges from repeated conditional sampling.
`,

      formula:
        "f_A = count(A) / N",

      contentAfterFormula: `
This simple example is not a complete language model, but it provides the mathematical intuition behind probabilistic generation.
`
    }
  ],

  codeExamples: [
    {
      title: "Sampling From a Probability Distribution",
      language: "python",
      code: `import random

distribution = {
    "A": 0.5,
    "B": 0.3,
    "C": 0.2
}

tokens = list(distribution.keys())
probabilities = list(distribution.values())

samples = []

for _ in range(20):
    sample = random.choices(
        tokens,
        weights=probabilities,
        k=1
    )[0]

    samples.append(sample)

print(samples)
`
    },

    {
      title: "Simple Autoregressive Generator",
      language: "python",
      code: `import random

transitions = {
    "I": {
        "like": 0.7,
        "study": 0.3
    },
    "like": {
        "Python": 0.6,
        "AI": 0.4
    },
    "study": {
        "Generative": 0.7,
        "Python": 0.3
    },
    "Python": {
        "and": 1.0
    },
    "AI": {
        "and": 1.0
    },
    "Generative": {
        "AI": 1.0
    },
    "and": {
        "machine": 1.0
    },
    "machine": {
        "learning": 1.0
    },
    "learning": {
        ".": 1.0
    }
}

def sample_next(context):
    distribution = transitions.get(
        context,
        {".": 1.0}
    )

    tokens = list(distribution.keys())
    probabilities = list(distribution.values())

    return random.choices(
        tokens,
        weights=probabilities,
        k=1
    )[0]

context = "I"
generated = [context]

for _ in range(8):
    token = sample_next(context)
    generated.append(token)
    context = token

print(" ".join(generated))
`
    },

    {
      title: "A Simple Softmax Function",
      language: "python",
      code: `import numpy as np

def softmax(logits):
    logits = np.asarray(logits)

    # Numerical stability:
    # subtract the largest logit before exponentiation.
    shifted = logits - np.max(logits)

    exp_values = np.exp(shifted)

    return exp_values / np.sum(exp_values)

logits = [2.0, 1.0, 0.5]

probabilities = softmax(logits)

print(probabilities)
print("Sum:", probabilities.sum())
`
    },

    {
      title: "Tiny Latent Generator",
      language: "python",
      code: `import numpy as np

def generator(z):
    # Illustrative generator.
    # Real generative models use learned neural networks.
    return np.tanh(z)

z = np.random.randn(5)

sample = generator(z)

print("Latent vector:")
print(z)

print("\\nGenerated representation:")
print(sample)
`
    }
  ],

  mathIntuition: [
    {
      title: "Likelihood",
      explanation: `
For a dataset D = {x₁, x₂, ..., xₙ}, the likelihood is:

L(θ) = ∏ᵢ p_θ(xᵢ)

The model is rewarded when observed examples receive high probability.

Because multiplication of many probabilities can be inconvenient numerically, we use logarithms:

log L(θ) = ∑ᵢ log p_θ(xᵢ)

Maximizing log-likelihood is equivalent to maximizing likelihood because the logarithm is monotonic.
`
    },

    {
      title: "Negative Log-Likelihood",
      explanation: `
The negative log-likelihood is:

J(θ) = -∑ᵢ log p_θ(xᵢ)

A high probability for the correct example produces a smaller loss.

A low probability produces a larger loss.

This is why probability and loss are closely connected in many generative learning objectives.
`
    },

    {
      title: "Gradient-Based Learning",
      explanation: `
Once a loss J(θ) has been defined, optimization attempts to change θ in a direction that reduces the loss.

The gradient is:

∇θJ(θ)

A simplified gradient descent update is:

θ ← θ - η∇θJ(θ)

where η is the learning rate.

The update moves the parameters in the opposite direction of the gradient because the gradient points toward increasing loss locally.
`
    },

    {
      title: "Conditional Probability",
      explanation: `
Conditional generation is represented using:

p(x|c)

The condition c changes the probability distribution over possible outputs.

For language modeling:

p(xₜ | x₁, ..., xₜ₋₁)

The previous tokens provide the condition for the next token.

This is one of the mathematical foundations of autoregressive language models.
`
    }
  ],

  exercises: [
    {
      question:
        "Explain the difference between a data sample and a data distribution.",
      difficulty: "Easy"
    },
    {
      question:
        "Why does a generative model use parameters θ?",
      difficulty: "Medium"
    },
    {
      question:
        "Explain likelihood in your own words.",
      difficulty: "Medium"
    },
    {
      question:
        "Why is log-likelihood commonly used instead of directly multiplying probabilities?",
      difficulty: "Medium"
    },
    {
      question:
        "Explain what a latent representation is.",
      difficulty: "Medium"
    },
    {
      question:
        "Why is sampling important in generative models?",
      difficulty: "Medium"
    },
    {
      question:
        "Explain the difference between p(x) and p(x|c).",
      difficulty: "Medium"
    },
    {
      question:
        "Explain how autoregressive models generate sequences.",
      difficulty: "Hard"
    },
    {
      question:
        "Compare VAEs, GANs, autoregressive models, and diffusion models.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Build a Probability Sampler",
      description:
        "Create a Python program that defines a probability distribution over at least five tokens and samples from it 1,000 times. Calculate the empirical frequency of each token.",
      difficulty: "Medium"
    },
    {
      title: "Implement Softmax",
      description:
        "Implement softmax from scratch using NumPy and verify that the resulting probabilities sum to approximately 1.",
      difficulty: "Medium"
    },
    {
      title: "Build a Markov-Style Text Generator",
      description:
        "Create a dictionary of token transitions and implement a small autoregressive text generator that repeatedly samples the next token.",
      difficulty: "Medium"
    },
    {
      title: "Visualize a Latent Space",
      description:
        "Generate two-dimensional latent vectors and plot them using Matplotlib. Experiment with transformations and observe how the representation changes.",
      difficulty: "Medium"
    }
  ],

  architectureExercises: [
    {
      title: "Compare Generative Model Architectures",
      description:
        "Draw simplified architecture diagrams for an autoregressive model, VAE, GAN, and diffusion model. Label the input, learned components, latent variables where applicable, and generated output.",
      difficulty: "Medium"
    },
    {
      title: "Design a Conditional Generator",
      description:
        "Design an architecture that accepts a text condition and generates an image. Explain where the condition enters the generation pipeline.",
      difficulty: "Hard"
    },
    {
      title: "Production Image Generator",
      description:
        "Design a production architecture containing frontend, backend, authentication, model serving, GPU infrastructure, object storage, metadata database, validation, and monitoring.",
      difficulty: "Hard"
    }
  ],

  interviewQuestions: [
    "What is a generative model?",
    "What does p_θ(x) represent?",
    "What is likelihood?",
    "Why is log-likelihood useful?",
    "What is negative log-likelihood?",
    "What is a latent space?",
    "What is sampling in a generative model?",
    "What is conditional generation?",
    "How do autoregressive models generate sequences?",
    "What is a VAE?",
    "What is the role of the encoder and decoder in a VAE?",
    "What is a GAN?",
    "What are the roles of the generator and discriminator?",
    "What is mode collapse?",
    "What is a diffusion model?",
    "Why do diffusion models start generation from noise?",
    "What are the major differences between GANs and diffusion models?",
    "What are the advantages and challenges of autoregressive generation?",
    "What is the difference between explicit and implicit generative modeling?",
    "How would you choose a generative model architecture for a production system?"
  ],

  commonMistakes: [
    "Thinking that a generative model simply memorizes the training dataset.",
    "Confusing a probability distribution with a single generated sample.",
    "Assuming p_θ(x) exactly equals the true data distribution.",
    "Ignoring the role of θ in defining the learned model.",
    "Confusing likelihood with probability of a model rather than likelihood of observed data given parameters.",
    "Forgetting that autoregressive generation is sequential during inference.",
    "Assuming latent dimensions always have simple human-readable meanings.",
    "Thinking sampling is completely random and independent of the learned distribution.",
    "Assuming every generative model uses the same training objective.",
    "Ignoring mode collapse when discussing GANs.",
    "Assuming diffusion models directly generate the final image in one neural-network operation.",
    "Choosing a model architecture based only on generation quality without considering latency, compute, and deployment cost.",
    "Assuming conditional generation guarantees perfect adherence to the condition.",
    "Using one metric to evaluate every dimension of generative quality."
  ],

  summary: `
Generative models learn useful statistical structure from data and use that learned structure to produce new samples.

A central mathematical representation is:

p_θ(x)

where θ represents the learned parameters.

Training attempts to choose θ so that the model represents important structure in the observed data.

Likelihood provides one way of measuring how well the model explains observed examples:

L(θ) = ∏ᵢ p_θ(xᵢ)

and log-likelihood provides a more convenient equivalent objective:

log L(θ) = ∑ᵢ log p_θ(xᵢ)

Many learning objectives can be expressed as minimizing negative log-likelihood.

Generative systems can also operate conditionally:

p(x|c)

where c controls the generation.

Different generative model families implement these ideas in different ways.

Autoregressive models generate sequences step by step.

VAEs learn structured latent representations.

GANs use adversarial competition.

Diffusion models learn iterative denoising processes.

No model family is universally optimal. Model selection requires reasoning about quality, diversity, conditioning, training complexity, inference cost, latency, compute, and deployment requirements.

The most important mental model is:

Data
→ Distribution
→ Parameterized model p_θ
→ Training objective
→ Optimization
→ Learned representation
→ Sampling / generation
→ New output
`
  ,

  keyTakeaways: [
    "Generative models learn structure from data rather than simply storing examples.",
    "p_θ(x) represents a parameterized model of the data distribution.",
    "θ represents the learned parameters of the model.",
    "Likelihood measures how well observed data is explained by the model.",
    "Negative log-likelihood converts likelihood maximization into a minimization objective.",
    "Latent representations provide internal spaces that can capture useful data structure.",
    "Sampling converts learned probability distributions or generative mechanisms into actual outputs.",
    "Conditional generation uses additional information to control the generated output.",
    "Autoregressive models generate sequences using conditional probabilities.",
    "VAEs combine latent-variable modeling with reconstruction and regularization.",
    "GANs use a generator and discriminator in an adversarial training process.",
    "Diffusion models learn a denoising process that can transform noise into structured samples.",
    "Different model families have different mathematical and engineering trade-offs.",
    "Generative-model quality must be evaluated across quality, diversity, conditioning, robustness, and other application-specific dimensions."
  ]
};

export default lesson2;

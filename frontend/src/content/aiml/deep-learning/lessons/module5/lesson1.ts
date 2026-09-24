const lesson1 = {
  id: "lesson1",
  number: 1,
  title: "Optimization and Deep Learning",

  description:
    "Understand what optimization means in deep learning, how optimization differs from generalization, and why modern neural-network objectives create difficult numerical optimization problems.",

  duration: "100–120 min",
  difficulty: "Advanced",

  prerequisites: [
    "Neural networks",
    "Loss functions",
    "Gradient descent basics",
    "Training and validation concepts",
    "Basic calculus"
  ],

  sections: [
    {
      type: "intro",
      title: "Why Optimization Matters",
      content: `
A neural network does not automatically know which parameter values produce useful predictions.

Training requires repeatedly changing the model parameters so that the loss decreases.

This process is an optimization problem.

At a high level:

Data
↓
Model
↓
Prediction
↓
Loss
↓
Gradient
↓
Parameter Update
↓
Improved Model
      `
    },

    {
      type: "concept",
      title: "1. What Is Optimization?",
      content: `
Optimization is the process of selecting parameter values that minimize or maximize an objective function.

In deep learning, we usually formulate training as a minimization problem.

Let θ represent all model parameters.

Let L(θ) represent the training objective.

The optimization problem can be written as:

minimize L(θ)

The optimizer searches for parameter values that produce a smaller objective.
      `
    },

    {
      type: "concept",
      title: "2. Loss Function as an Objective",
      content: `
A neural network produces predictions.

The loss function measures how different those predictions are from the desired targets.

For a dataset containing n examples:

L(θ)
=
1/n Σ l_i(θ)

where l_i represents the loss associated with an individual training example.

The optimizer attempts to reduce this quantity.
      `
    },

    {
      type: "concept",
      title: "3. Optimization Is Not the Same as Learning",
      content: `
This distinction is extremely important.

Optimization focuses on reducing the objective used during training.

Deep learning ultimately cares about how well the learned model performs on unseen data.

Therefore:

Optimization goal:
reduce training objective.

Learning/generalization goal:
perform well on unseen examples.

A model can have a very low training loss while still generalizing poorly.
      `
    },

    {
      type: "concept",
      title: "4. Training Error vs Generalization Error",
      content: `
Training error is measured using the training dataset.

Generalization error concerns performance on the broader population of data or unseen examples.

Conceptually:

Training data
↓
Empirical risk

Population of possible data
↓
Expected risk

The two quantities are related but are not identical.
      `
    },

    {
      type: "formula",
      title: "5. Empirical Risk",
      content: `
For a training dataset:

S = {(x₁,y₁), ..., (xₙ,yₙ)}

the empirical risk can be written as:

R̂(θ)
=
1/n Σ l(fθ(xᵢ), yᵢ)

This is the average loss measured on the observed training examples.
      `
    },

    {
      type: "formula",
      title: "6. Population Risk",
      content: `
The population risk can be represented conceptually as:

R(θ)
=
E[l(fθ(X), Y)]

The expectation is taken over the underlying data distribution.

In practice, we do not have direct access to the complete population distribution.

Therefore training usually works with finite samples.
      `
    },

    {
      type: "concept",
      title: "7. Why the Two Objectives Can Differ",
      content: `
Suppose a training dataset contains only a limited collection of examples.

A sufficiently flexible model may learn patterns specific to those examples.

It can therefore achieve:

very low training loss

while still producing:

higher unseen-data loss.

This is one reason optimization should not be considered independently from generalization.
      `
    },

    {
      type: "concept",
      title: "8. Optimization in Deep Learning",
      content: `
Deep learning objectives are usually complicated functions of many parameters.

A modern neural network may contain:

thousands,
millions,
or billions

of parameters.

The loss therefore exists in a very high-dimensional parameter space.

Finding useful parameter values requires numerical optimization.
      `
    },

    {
      type: "concept",
      title: "9. Analytical vs Numerical Solutions",
      content: `
Some mathematical optimization problems have closed-form solutions.

For example, certain simple regression problems can be solved analytically.

Deep neural networks generally do not provide such convenient solutions.

Instead, numerical algorithms are used.

Examples include:

• Gradient descent
• SGD
• Momentum
• AdaGrad
• RMSProp
• Adam
      `
    },

    {
      type: "concept",
      title: "10. Parameter Space",
      content: `
Suppose a model has parameters:

θ = [θ₁, θ₂, ..., θ_d]

Then the loss is a function:

L(θ₁, θ₂, ..., θ_d)

Each possible parameter vector corresponds to one point in a high-dimensional parameter space.

Optimization searches this space for useful parameter configurations.
      `
    },

    {
      type: "concept",
      title: "11. The Loss Landscape",
      content: `
The loss landscape describes how the objective changes as model parameters change.

For two parameters, it can be visualized as a surface.

For many parameters, visualization becomes impossible directly.

Nevertheless, the concept remains useful.

Important structures include:

• Minima
• Maxima
• Saddle points
• Flat regions
• Steep regions
• Narrow valleys
      `
    },

    {
      type: "concept",
      title: "12. Local Minimum",
      content: `
A point is a local minimum if nearby parameter values have equal or higher objective values.

A local minimum does not necessarily represent the globally lowest value of the objective.

In a nonconvex objective, many local minima may exist.
      `
    },

    {
      type: "concept",
      title: "13. Global Minimum",
      content: `
A global minimum is a point whose objective value is no larger than the objective value at any other point in the considered domain.

Finding a global minimum can be difficult for complicated nonconvex functions.

Deep learning therefore relies on practical numerical optimization rather than assuming that an exact global solution can always be found.
      `
    },

    {
      type: "concept",
      title: "14. Saddle Points",
      content: `
A saddle point is a location where the function can behave like a minimum in some directions and like a maximum in another direction.

In high-dimensional optimization, saddle points can influence optimization behavior.

A gradient can also become very small around such regions, making optimization progress slow.
      `
    },

    {
      type: "concept",
      title: "15. Vanishing Gradients",
      content: `
If gradients become extremely small, parameter updates can become tiny.

The optimizer may then make very slow progress.

This phenomenon is called vanishing gradients.

It can occur in deep networks and recurrent architectures and is one reason activation functions, initialization, architecture, and optimizer choice matter.
      `
    },

    {
      type: "concept",
      title: "16. Exploding Gradients",
      content: `
The opposite problem occurs when gradients become extremely large.

Then a parameter update can become excessively large.

Possible consequences include:

• unstable training
• rapidly increasing loss
• numerical overflow
• divergence

Gradient clipping is one technique that can control excessive gradient magnitude.
      `
    },

    {
      type: "concept",
      title: "17. Ill-Conditioned Objectives",
      content: `
Different directions in parameter space can have very different curvature.

For example:

Direction A:
very steep

Direction B:
very flat

An optimizer may then move inefficiently, bouncing across a narrow valley rather than progressing directly toward a minimum.

This motivates techniques such as momentum and adaptive scaling.
      `
    },

    {
      type: "concept",
      title: "18. Learning Rate",
      content: `
The learning rate controls how large a parameter update is.

A small learning rate:

• safer updates
• slower progress

A large learning rate:

• faster movement
• risk of overshooting
• possible divergence

Choosing a suitable learning rate is one of the most important optimization decisions.
      `
    },

    {
      type: "formula",
      title: "19. Basic Parameter Update",
      content: `
A generic gradient-descent update is:

θ ← θ - η∇L(θ)

where:

θ = model parameters

η = learning rate

∇L(θ) = gradient of the objective

The negative sign moves the parameters opposite the gradient direction.
      `
    },

    {
      type: "concept",
      title: "20. Why the Negative Gradient?",
      content: `
The gradient points in the direction of greatest local increase of a differentiable function.

Therefore:

+∇L

points toward increasing loss.

Moving in the opposite direction:

-∇L

provides a local direction for decreasing the objective.
      `
    },

    {
      type: "concept",
      title: "21. First-Order Approximation",
      content: `
For a small change Δθ, the objective can be locally approximated as:

L(θ + Δθ)
≈
L(θ) + ∇L(θ)ᵀΔθ

If we choose:

Δθ = -η∇L(θ)

then the first-order term becomes negative:

-η||∇L(θ)||²

which explains why sufficiently small gradient steps can reduce the objective locally.
      `
    },

    {
      type: "concept",
      title: "22. Optimization Challenges in Deep Learning",
      content: `
The source emphasizes several difficult phenomena:

• Local minima
• Saddle points
• Vanishing gradients
• Nonconvex objectives
• Poor conditioning
• Learning-rate sensitivity

These challenges motivate the development of increasingly sophisticated optimization algorithms.
      `
    },

    {
      type: "concept",
      title: "23. Nonconvexity",
      content: `
Many deep learning objectives are nonconvex.

A nonconvex function can contain:

• multiple minima
• saddle points
• curved valleys
• flat regions
• complicated geometry

This makes the behavior of optimization algorithms more complicated than in simple convex problems.
      `
    },

    {
      type: "concept",
      title: "24. Why Convex Problems Are Still Studied",
      content: `
Although deep-learning objectives are generally nonconvex, convex optimization provides useful theoretical intuition.

Convex problems are easier to analyze.

Studying them helps us understand:

• convergence
• learning rates
• gradients
• optimization stability
• stochastic updates
      `
    },

    {
      type: "code",
      language: "python",
      title: "Simple Optimization Loop",
      content: `
import torch

theta = torch.tensor(
    5.0,
    requires_grad=True
)

learning_rate = 0.1

for step in range(20):
    loss = theta ** 2

    loss.backward()

    with torch.no_grad():
        theta -= learning_rate * theta.grad

    theta.grad.zero_()

    print(
        step,
        float(theta),
        float(loss)
    )
`
    },

    {
      type: "concept",
      title: "25. Reading the Optimization Loop",
      content: `
The basic process is:

1. Create parameters.
2. Compute the objective.
3. Compute gradients.
4. Update parameters.
5. Clear old gradients.
6. Repeat.

This pattern is the foundation of neural-network training.
      `
    },

    {
      type: "concept",
      title: "26. Optimizer vs Model",
      content: `
The model defines:

how inputs become predictions.

The loss defines:

how predictions are evaluated.

The optimizer defines:

how model parameters are changed using optimization information.

These are separate concepts and should not be confused.
      `
    },

    {
      type: "concept",
      title: "27. Hyperparameters",
      content: `
Optimization algorithms contain values chosen by the practitioner rather than learned directly from the training objective.

Examples:

• Learning rate
• Batch size
• Momentum coefficient
• Weight decay
• Number of training epochs
• Learning-rate schedule

These are hyperparameters.
      `
    },

    {
      type: "concept",
      title: "28. Optimization Diagnostics",
      content: `
When training fails, inspect:

Loss curve
Gradient magnitude
Learning rate
Parameter magnitude
Validation loss
Training loss
Batch size
Optimizer state

A useful diagnostic process changes one factor at a time whenever possible.
      `
    },

    {
      type: "concept",
      title: "29. Optimization vs Generalization in Practice",
      content: `
Consider two models.

Model A:

training loss = very low
validation loss = high

Model B:

training loss = moderately low
validation loss = lower

Optimization alone may prefer Model A because it focuses on the training objective.

Learning and model selection should also consider generalization.
      `
    },

    {
      type: "exercise",
      title: "Exercise — Learning Rate Experiment",
      content: `
Optimize:

f(x) = x²

Try:

η = 0.01
η = 0.1
η = 0.5
η = 1.1

Record:

• Number of steps
• Final x
• Final loss
• Whether the optimization converges

Explain why different learning rates produce different behavior.
      `
    },

    {
      type: "exercise",
      title: "Exercise — Training vs Generalization",
      content: `
Create a small regression dataset.

Train models with different capacities.

Record:

• Training loss
• Validation loss
• Test loss

Identify cases where decreasing training loss does not necessarily produce an equivalent improvement in unseen-data performance.
      `
    },

    {
      type: "qa",
      question: "What is the main purpose of optimization in deep learning?",
      answer:
        "To find parameter values that reduce the chosen training objective or loss."
    },

    {
      type: "qa",
      question: "Why is optimization not identical to learning?",
      answer:
        "Optimization focuses on minimizing the objective used during training, whereas learning ultimately requires good performance on unseen data."
    },

    {
      type: "qa",
      question: "What happens when the learning rate is too small?",
      answer:
        "Parameter updates become very small and optimization may progress extremely slowly."
    },

    {
      type: "qa",
      question: "What can happen when the learning rate is too large?",
      answer:
        "Updates may overshoot useful regions, causing oscillation or divergence."
    },

    {
      type: "qa",
      question: "Why are deep-learning objectives difficult to optimize?",
      answer:
        "They are generally high-dimensional and nonconvex and can contain difficult regions such as saddle points, flat areas, and poorly conditioned directions."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Optimization is a central component of deep learning training.

The key distinction is:

Optimization:
minimize the training objective.

Learning:
obtain a model that generalizes well.

Deep-learning objectives are usually numerical, high-dimensional, and nonconvex.

Important optimization challenges include:

• Local minima
• Saddle points
• Vanishing gradients
• Exploding gradients
• Poor conditioning
• Learning-rate sensitivity

These challenges motivate the optimization algorithms studied throughout this module.
      `
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Training a neural network is an optimization problem, but minimizing training loss is not the same as achieving good generalization. Understanding this distinction is the foundation for choosing and tuning optimization algorithms."
    }
  ]
};

export default lesson1;
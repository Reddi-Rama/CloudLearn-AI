const lesson9 = {
  id: "lesson9",
  title: "AdaDelta",
  description:
    "Understand AdaDelta, adaptive parameter updates, running averages of gradient and parameter changes, and how AdaDelta evolves from AdaGrad and RMSProp.",
  duration: "105–125 min",
  difficulty: "Advanced",

  prerequisites: [
    "Gradient descent",
    "Minibatch SGD",
    "Momentum",
    "AdaGrad",
    "RMSProp",
    "Exponential moving averages"
  ],

  sections: [
    {
      type: "intro",
      title: "Introduction to AdaDelta",
      content: `
AdaDelta is an adaptive optimization algorithm that builds on ideas from AdaGrad and RMSProp.

The central motivation is to avoid relying on a learning rate that continually becomes smaller.

AdaDelta maintains two moving statistics:

1. A running average of squared gradients.
2. A running average of squared parameter updates.

The second statistic allows AdaDelta to use the magnitude of previous parameter changes when determining the scale of the next update.
`
    },

    {
      type: "concept",
      title: "1. From AdaGrad to RMSProp to AdaDelta",
      content: `
AdaGrad accumulates squared gradients indefinitely.

RMSProp replaces the cumulative sum with a moving average.

AdaDelta goes one step further by tracking not only gradient magnitudes but also the magnitude of previous parameter changes.

The progression is:

AdaGrad
→ accumulated squared gradients

RMSProp
→ moving average of squared gradients

AdaDelta
→ moving average of squared gradients
+
moving average of squared parameter changes
`
    },

    {
      type: "concept",
      title: "2. Why Track Parameter Changes?",
      content: `
The optimizer ultimately changes parameters.

Therefore, instead of relying only on gradient statistics, AdaDelta asks:

How large have recent parameter updates been?

This provides a natural scale for determining how large the next update should be.
`
    },

    {
      type: "concept",
      title: "3. First State Variable",
      content: `
AdaDelta maintains a state commonly represented as:

s_t

This stores a leaky average of squared gradients.

The update is:

s_t
=
ρs_(t-1)
+
(1-ρ)g_t²
`
    },

    {
      type: "concept",
      title: "4. Second State Variable",
      content: `
AdaDelta also maintains:

Δx_t

which stores a running average of squared parameter changes.

Conceptually:

Δx_t
=
ρΔx_(t-1)
+
(1-ρ)(Δx'_t)²

where Δx'_t represents the actual rescaled parameter update.
`
    },

    {
      type: "formula",
      title: "5. Gradient Statistics",
      content: `
s_t
=
ρs_(t-1)
+
(1-ρ)g_t²

The gradient history is therefore exponentially weighted.

Recent gradients receive stronger influence than very old gradients.
`
    },

    {
      type: "formula",
      title: "6. Rescaled Gradient",
      content: `
The rescaled gradient can be expressed conceptually as:

g'_t
=
√(Δx_(t-1) + ε)
/
√(s_t + ε)
·
g_t

The numerator provides a scale based on previous parameter changes.

The denominator represents recent gradient magnitude.
`
    },

    {
      type: "concept",
      title: "7. Parameter Update",
      content: `
The parameters are updated using the rescaled gradient:

x_t
=
x_(t-1)
-
g'_t

Notice that the formulation does not require a conventional explicit learning-rate multiplier in the same way as SGD, AdaGrad, or RMSProp.
`
    },

    {
      type: "concept",
      title: "8. Why Epsilon Is Necessary",
      content: `
A small positive ε is added inside square roots.

This prevents division by zero.

It also improves numerical stability when the running statistics become very small.
`
    },

    {
      type: "concept",
      title: "9. Intuition Behind AdaDelta",
      content: `
Imagine that recent parameter updates have been very small.

AdaDelta uses that information when determining the scale of the next update.

If recent changes have been larger, the scaling behaves differently.

Thus the optimizer adapts using both:

gradient scale

and

historical parameter-update scale.
`
    },

    {
      type: "concept",
      title: "10. No Conventional Learning Rate",
      content: `
One of the notable characteristics of AdaDelta is that its traditional formulation does not require an explicit learning-rate parameter.

Instead, the ratio between:

historical parameter-change scale

and

historical gradient scale

provides the update scale.
`
    },

    {
      type: "concept",
      title: "11. Is AdaDelta Really Learning-Rate Free?",
      content: `
The phrase "learning-rate free" should be understood carefully.

AdaDelta avoids an explicit global learning-rate hyperparameter in its original formulation.

However, optimization still depends on numerical choices such as:

ρ

ε

and the characteristics of the training problem.

Therefore it does not mean that optimization becomes completely independent of all configuration choices.
`
    },

    {
      type: "concept",
      title: "12. Relation to RMSProp",
      content: `
RMSProp tracks:

running squared gradients

AdaDelta tracks:

running squared gradients

plus:

running squared parameter changes.

This gives AdaDelta an additional source of scale information.
`
    },

    {
      type: "code",
      language: "python",
      title: "AdaDelta From Scratch",
      content: `
import torch

x = torch.tensor(
    [10.0],
    requires_grad=True
)

s = torch.zeros_like(x)
delta = torch.zeros_like(x)

rho = 0.9
epsilon = 1e-5

for step in range(30):

    loss = (x - 3) ** 2

    loss.backward()

    with torch.no_grad():

        s = (
            rho * s
            + (1 - rho) * x.grad ** 2
        )

        update = (
            torch.sqrt(delta + epsilon)
            /
            torch.sqrt(s + epsilon)
        ) * x.grad

        x -= update

        delta = (
            rho * delta
            + (1 - rho) * update ** 2
        )

    x.grad.zero_()

    print(
        step,
        x.item(),
        loss.item()
    )
`
    },

    {
      type: "concept",
      title: "13. Two Optimizer States",
      content: `
For every parameter tensor, AdaDelta maintains two state tensors.

If:

W.shape = (100, 50)

then both state tensors generally have:

(100, 50)

This increases optimizer memory compared with plain SGD.
`
    },

    {
      type: "concept",
      title: "14. Decay Parameter ρ",
      content: `
The parameter ρ determines the memory of the moving averages.

Large ρ:

• Longer memory
• Smoother statistics
• Slower response to new gradients

Smaller ρ:

• Shorter memory
• Faster response
• More sensitivity to recent changes
`
    },

    {
      type: "concept",
      title: "15. Half-Life Intuition",
      content: `
For a moving average, the approximate memory scale is related to:

1 / (1 - ρ)

For example:

ρ = 0.9

gives a characteristic scale of roughly:

10 updates.
`
    },

    {
      type: "concept",
      title: "16. AdaDelta and Numerical Stability",
      content: `
Because AdaDelta repeatedly computes ratios involving square roots, numerical stability matters.

Always use:

ε > 0

when implementing the algorithm.

A typical small value is around:

1e-5

but framework defaults may differ.
`
    },

    {
      type: "concept",
      title: "17. PyTorch Implementation",
      content: `
PyTorch provides AdaDelta through:

torch.optim.Adadelta

Example:

optimizer = torch.optim.Adadelta(
    model.parameters(),
    rho=0.9
)

The optimizer manages the internal state automatically.
`
    },

    {
      type: "code",
      language: "python",
      title: "PyTorch AdaDelta",
      content: `
import torch

optimizer = torch.optim.Adadelta(
    model.parameters(),
    rho=0.9
)

for X, y in train_loader:

    optimizer.zero_grad()

    prediction = model(X)

    loss = criterion(
        prediction,
        y
    )

    loss.backward()

    optimizer.step()
`
    },

    {
      type: "concept",
      title: "18. AdaDelta on a Quadratic Function",
      content: `
A simple test objective is:

f(x1, x2)
=
0.1x1²
+
2x2²

The two coordinates have different curvature.

This makes the objective useful for comparing adaptive optimizers.
`
    },

    {
      type: "concept",
      title: "19. AdaDelta vs AdaGrad",
      content: `
AdaGrad:

• Accumulates squared gradients
• Learning rates continually shrink
• Particularly useful for sparse features
• Can become too conservative

AdaDelta:

• Uses moving averages
• Tracks parameter-change magnitude
• Avoids indefinite accumulation
• Does not require the traditional explicit learning rate
`
    },

    {
      type: "concept",
      title: "20. AdaDelta vs RMSProp",
      content: `
RMSProp:

running squared-gradient statistics.

AdaDelta:

running squared-gradient statistics
+
running squared-update statistics.

AdaDelta therefore extends the adaptive scaling idea.
`
    },

    {
      type: "concept",
      title: "21. Common Implementation Mistakes",
      content: `
Typical errors include:

• Updating the state using the wrong gradient
• Forgetting ε
• Mixing old and new state values incorrectly
• Updating the parameter before calculating the required scaling
• Accidentally tracking one scalar instead of a tensor for each parameter
`
    },

    {
      type: "exercise",
      title: "AdaDelta Parameter Experiment",
      content: `
Train a small model with:

ρ = 0.8
ρ = 0.9
ρ = 0.95
ρ = 0.99

Record:

• Training loss
• Validation loss
• Training speed
• Stability

Explain how the decay coefficient changes the behavior.
`
    },

    {
      type: "exercise",
      title: "Optimizer Comparison",
      content: `
Compare:

AdaGrad
RMSProp
AdaDelta

using the same model, dataset, initialization, and training budget.

Focus on:

• Effective update behavior
• Loss convergence
• Stability
• Sensitivity to hyperparameters
`
    },

    {
      type: "qa",
      question: "What are the two main states in AdaDelta?",
      answer:
        "A running average of squared gradients and a running average of squared parameter changes."
    },

    {
      type: "qa",
      question: "Why does AdaDelta use a moving average?",
      answer:
        "The moving average prevents the historical statistics from growing indefinitely and allows the optimizer to adapt to recent training behavior."
    },

    {
      type: "qa",
      question: "Does AdaDelta use the traditional learning-rate parameter?",
      answer:
        "The original AdaDelta formulation avoids an explicit conventional learning-rate parameter by using parameter-change statistics to determine update scale."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
AdaDelta extends adaptive optimization by tracking both gradient magnitudes and parameter-change magnitudes.

Core ideas:

• Exponential moving averages
• Gradient statistics
• Parameter-update statistics
• Coordinate-wise scaling
• Numerical stability
• Adaptive step sizes
• Relation to AdaGrad and RMSProp
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "AdaDelta uses recent gradient statistics together with recent parameter-change statistics to adapt updates without relying on a traditional fixed global learning rate."
    }
  ]
};

export default lesson9;
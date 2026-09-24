const lesson3 = {
  id: "lesson3",
  number: 3,
  title: "Gradient Descent",

  description:
    "Understand the mathematical foundation of gradient descent, learning-rate behavior, one-dimensional and multivariate optimization, preconditioning, and practical implementation.",

  duration: "110–130 min",
  difficulty: "Advanced",

  prerequisites: [
    "Calculus",
    "Gradients",
    "Convexity",
    "Optimization basics",
    "Python and PyTorch"
  ],

  sections: [
    {
      type: "intro",
      title: "Gradient Descent",
      content: `
Gradient descent is one of the most fundamental optimization algorithms in machine learning.

Modern deep-learning systems usually rely on more sophisticated optimizers, but understanding gradient descent is essential because many advanced algorithms build on the same basic principle.

The central idea is simple:

Calculate the gradient.

Move in the opposite direction.

Repeat.
      `
    },

    {
      type: "concept",
      title: "1. Optimization Objective",
      content: `
Suppose we want to minimize:

f(x)

The goal is to find:

x*

such that:

f(x*) is as small as possible.
      `
    },

    {
      type: "concept",
      title: "2. One-Dimensional Gradient",
      content: `
For a one-dimensional function:

f(x)

the derivative:

f'(x)

indicates how the function changes as x changes.

If:

f'(x) > 0

the function is increasing locally.

If:

f'(x) < 0

the function is decreasing locally.
      `
    },

    {
      type: "concept",
      title: "3. Moving Against the Gradient",
      content: `
If the derivative is positive, increasing x increases the objective.

Therefore we should move x downward.

If the derivative is negative, increasing x decreases the objective.

Therefore we should move x upward.

Both cases are represented by:

x ← x - ηf'(x)
      `
    },

    {
      type: "formula",
      title: "4. Gradient Descent Update",
      content: `
x_{t+1}
=
x_t
-
η f'(x_t)

where:

x_t = current parameter value

η = learning rate

f'(x_t) = derivative at the current point
      `
    },

    {
      type: "concept",
      title: "5. Learning Rate",
      content: `
The learning rate η controls the size of each update.

Small η:

small steps

Large η:

large steps

The learning rate therefore controls the speed and stability of optimization.
      `
    },

    {
      type: "concept",
      title: "6. Example: Quadratic Function",
      content: `
Consider:

f(x) = x²

Then:

f'(x) = 2x

Gradient descent becomes:

x ← x - 2ηx

For a suitable η, repeated updates move x toward zero.
      `
    },

    {
      type: "code",
      language: "python",
      title: "Gradient Descent from Scratch",
      content: `
import torch

def gradient_descent(
    learning_rate=0.1,
    steps=20
):
    x = 5.0

    for step in range(steps):
        gradient = 2 * x

        x -= learning_rate * gradient

        print(
            f"step={step}, x={x:.6f}"
        )

gradient_descent()
`
    },

    {
      type: "concept",
      title: "7. Learning Rate Too Small",
      content: `
If η is extremely small:

x changes very slowly.

The optimizer may require a large number of iterations.

The algorithm may technically move toward the optimum but become computationally inefficient.
      `
    },

    {
      type: "concept",
      title: "8. Learning Rate Too Large",
      content: `
If η is excessively large, an update may jump across the minimum.

Instead of approaching the optimum smoothly, the algorithm can:

• Oscillate
• Overshoot
• Diverge

Therefore a larger learning rate is not automatically better.
      `
    },

    {
      type: "concept",
      title: "9. Learning Rate and Convergence",
      content: `
The behavior of gradient descent depends strongly on the geometry of the objective and the selected learning rate.

For simple convex objectives, theory can provide suitable ranges.

For deep neural networks, the correct learning rate is often found experimentally.
      `
    },

    {
      type: "concept",
      title: "10. Local Taylor Approximation",
      content: `
Around a point x, a differentiable function can be approximated locally as:

f(x + ε)
≈
f(x)
+
εf'(x)

If:

ε = -ηf'(x)

then:

f(x + ε)
≈
f(x)
-
η[f'(x)]²

The first-order change is non-positive for η > 0.
      `
    },

    {
      type: "concept",
      title: "11. Why This Is Only a Local Argument",
      content: `
The Taylor approximation ignores higher-order terms.

If the step is small, the approximation can be useful.

If the learning rate produces a very large step, higher-order terms can become important.

Therefore the local decrease argument does not mean every arbitrary learning rate guarantees improvement.
      `
    },

    {
      type: "concept",
      title: "12. Multivariate Gradient Descent",
      content: `
Deep-learning models contain many parameters.

Represent them as:

x =
[x₁, x₂, ..., x_d]

The objective becomes:

f(x₁, x₂, ..., x_d)

The gradient is:

∇f(x)

and contains one partial derivative for each coordinate.
      `
    },

    {
      type: "formula",
      title: "13. Multivariate Update",
      content: `
x_{t+1}
=
x_t
-
η∇f(x_t)

This is the fundamental gradient-descent update used in multiple dimensions.
      `
    },

    {
      type: "concept",
      title: "14. Gradient Vector",
      content: `
The gradient is:

∇f(x)
=
[
∂f/∂x₁,
∂f/∂x₂,
...,
∂f/∂x_d
]

It points in the direction of greatest local increase of the function.
      `
    },

    {
      type: "concept",
      title: "15. Geometric Meaning",
      content: `
Imagine a surface representing the objective.

The gradient at a point indicates the steepest uphill direction.

Therefore:

-gradient

points toward the steepest local decrease.

Gradient descent repeatedly follows this direction.
      `
    },

    {
      type: "concept",
      title: "16. Example: Two-Dimensional Quadratic",
      content: `
Consider:

f(x,y)
=
x² + y²

The gradient is:

∇f(x,y)
=
[2x, 2y]

The minimum is at:

(0,0)

Gradient descent repeatedly moves the point toward the origin.
      `
    },

    {
      type: "code",
      language: "python",
      title: "Two-Dimensional Gradient Descent",
      content: `
import torch

x = torch.tensor(
    [5.0, -4.0]
)

learning_rate = 0.1

for step in range(20):
    gradient = 2 * x

    x -= learning_rate * gradient

    print(
        step,
        x.tolist()
    )
`
    },

    {
      type: "concept",
      title: "17. Contour Visualization",
      content: `
For a two-dimensional objective, contour plots are useful.

Each contour represents a constant objective value.

Gradient descent produces a path across these contours.

This makes optimization behavior easier to visualize than looking only at numerical loss values.
      `
    },

    {
      type: "concept",
      title: "18. Narrow Valleys",
      content: `
Consider an elongated objective landscape.

One direction can be steep while another is relatively flat.

A standard gradient update may move strongly across the steep direction while making slow progress along the flat direction.

This creates inefficient zig-zagging behavior.
      `
    },

    {
      type: "concept",
      title: "19. Conditioning",
      content: `
The relative curvature of different directions influences optimization.

An objective with very different curvature scales can be poorly conditioned.

Poor conditioning can cause gradient descent to converge slowly.
      `
    },

    {
      type: "concept",
      title: "20. Preconditioning",
      content: `
Preconditioning modifies the gradient update so that different parameter directions are appropriately scaled.

Conceptually:

x ← x - ηP∇f(x)

where P is a suitable transformation or scaling matrix.

The goal is to improve optimization geometry.
      `
    },

    {
      type: "concept",
      title: "21. Connection to Adaptive Optimizers",
      content: `
Later algorithms such as AdaGrad and related adaptive methods can be understood partly through the idea of scaling updates differently across parameter coordinates.

Therefore gradient descent provides the conceptual foundation for more advanced optimization methods.
      `
    },

    {
      type: "concept",
      title: "22. Nonconvex Functions",
      content: `
Gradient descent can also be applied to nonconvex functions.

However, the theoretical guarantees are weaker.

The algorithm can encounter:

• Local minima
• Saddle points
• Flat regions
• Multiple basins
• Complicated curvature
      `
    },

    {
      type: "concept",
      title: "23. Example of a Nonconvex Objective",
      content: `
Consider an oscillating function such as:

f(x)
=
x cos(cx)

for a positive constant c.

Such a function can contain multiple local structures.

Different initialization and learning-rate choices can lead optimization toward different regions.
      `
    },

    {
      type: "concept",
      title: "24. Initialization Matters",
      content: `
Gradient descent starts from some initial parameter value.

Therefore the starting point can affect the optimization trajectory.

In modern neural networks, initialization is designed carefully to prevent numerical problems and promote effective gradient flow.
      `
    },

    {
      type: "concept",
      title: "25. Gradient Descent for Neural Networks",
      content: `
For a neural network:

Input
↓
Forward pass
↓
Loss
↓
Backpropagation
↓
Gradient
↓
Parameter update

The optimizer applies gradient information to every trainable parameter.
      `
    },

    {
      type: "code",
      language: "python",
      title: "Manual Parameter Update in PyTorch",
      content: `
import torch

w = torch.tensor(
    5.0,
    requires_grad=True
)

for step in range(20):
    loss = (w - 2) ** 2

    loss.backward()

    with torch.no_grad():
        w -= 0.1 * w.grad

    w.grad.zero_()

print(w.item())
`
    },

    {
      type: "concept",
      title: "26. Why Zero Gradients?",
      content: `
PyTorch accumulates gradients by default.

Therefore after using:

loss.backward()

the gradient remains stored.

Before the next optimization step, gradients must be cleared.

Otherwise information from previous iterations can unintentionally accumulate.
      `
    },

    {
      type: "concept",
      title: "27. Manual Optimization vs Optimizer API",
      content: `
Manual approach:

parameter -= learning_rate * gradient

PyTorch optimizer:

optimizer.step()

The optimizer API handles parameter updates and, for advanced optimizers, maintains additional internal state.
      `
    },

    {
      type: "code",
      language: "python",
      title: "Using PyTorch SGD",
      content: `
import torch
from torch import nn

model = nn.Linear(1, 1)

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.01
)

criterion = nn.MSELoss()

for X, y in data_loader:

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
      title: "28. Optimization Step Order",
      content: `
A standard training iteration is:

optimizer.zero_grad()

↓
forward pass

↓

loss calculation

↓

loss.backward()

↓

optimizer.step()

The order matters.
      `
    },

    {
      type: "concept",
      title: "29. Full-Batch Gradient Descent",
      content: `
In full-batch gradient descent, the gradient is calculated using the entire training dataset before each parameter update.

Advantages:

• More accurate estimate of the full training gradient
• Deterministic update for a fixed dataset and model state

Disadvantages:

• Expensive for large datasets
• Large memory or computation requirement
• One update may take a long time
      `
    },

    {
      type: "concept",
      title: "30. Why Stochastic Methods Are Needed",
      content: `
Large datasets make full-batch updates expensive.

Instead of calculating the gradient using every example, we can estimate it using one example or a subset.

This leads to:

• Stochastic gradient descent
• Minibatch SGD

These methods are studied in the next lessons.
      `
    },

    {
      type: "concept",
      title: "31. Gradient Descent and Training Curves",
      content: `
A useful experiment is to plot:

iteration
vs
training loss

A healthy optimization process often shows a decreasing trend, although the exact curve depends on the objective, optimizer, batch size, and learning rate.
      `
    },

    {
      type: "exercise",
      title: "Exercise — Learning Rate Sweep",
      content: `
Train the same model using:

0.0001
0.001
0.01
0.1

Compare:

• convergence speed
• final training loss
• validation loss
• stability

Plot all training curves.
      `
    },

    {
      type: "exercise",
      title: "Exercise — Gradient Descent Path",
      content: `
Use:

f(x,y) = x² + 5y²

Start at:

(x,y) = (5,5)

Run gradient descent.

Record the trajectory.

Explain why movement in the y direction can behave differently from movement in the x direction.
      `
    },

    {
      type: "exercise",
      title: "Exercise — Overshooting",
      content: `
Use:

f(x) = x²

Try several learning rates.

Find a learning rate that:

1. converges slowly
2. converges quickly
3. oscillates
4. diverges

Explain the observed behavior mathematically.
      `
    },

    {
      type: "qa",
      question: "What direction does the gradient point?",
      answer:
        "The gradient points in the direction of greatest local increase of a differentiable function."
    },

    {
      type: "qa",
      question: "Why does gradient descent use the negative gradient?",
      answer:
        "Because the negative gradient points toward the direction of steepest local decrease."
    },

    {
      type: "qa",
      question: "What does the learning rate control?",
      answer:
        "It controls the magnitude of the parameter update."
    },

    {
      type: "qa",
      question: "What happens when the learning rate is too large?",
      answer:
        "The optimization steps can overshoot useful regions, causing oscillation or divergence."
    },

    {
      type: "qa",
      question: "Why can gradient descent be slow on poorly conditioned objectives?",
      answer:
        "Different directions can have very different curvature, causing inefficient movement through narrow valleys."
    },

    {
      type: "qa",
      question: "Why is gradient descent important even though modern models often use Adam or other optimizers?",
      answer:
        "Because advanced optimizers build on the fundamental idea of using gradients to update model parameters."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Gradient descent repeatedly updates parameters in the direction opposite the gradient.

The central equation is:

θ ← θ - η∇L(θ)

You studied:

• One-dimensional gradient descent
• Learning-rate behavior
• Taylor approximation
• Multivariate gradients
• Optimization geometry
• Poor conditioning
• Preconditioning
• Nonconvex objectives
• Manual PyTorch updates
• SGD optimizer usage
• Full-batch gradient descent

The next lessons build upon this foundation by introducing stochastic and minibatch optimization.
      `
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Gradient descent is the foundational optimization mechanism behind neural-network training: compute how the loss changes with respect to the parameters, then move the parameters in the opposite direction by a controlled step."
    }
  ]
};

export default lesson3;
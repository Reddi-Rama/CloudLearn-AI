const lesson8 = {
  id: "lesson8",
  title: "RMSProp",
  description:
    "Understand RMSProp, exponential moving averages of squared gradients, adaptive coordinate scaling, and how RMSProp addresses AdaGrad's continuously shrinking learning rates.",
  duration: "105–125 min",
  difficulty: "Advanced",

  prerequisites: [
    "AdaGrad",
    "Momentum",
    "Minibatch SGD",
    "Exponential moving averages",
    "Tensor operations"
  ],

  sections: [
    {
      type: "intro",
      title: "Introduction to RMSProp",
      content: `
RMSProp can be understood as a modification of AdaGrad.

AdaGrad accumulates all historical squared gradients:

s_t = s_(t-1) + g_t²

This causes the accumulated value to continually grow.

RMSProp instead uses an exponentially weighted moving average:

s_t
=
γs_(t-1)
+
(1-γ)g_t²

This allows the optimizer to focus more strongly on recent gradient magnitudes.
`
    },

    {
      type: "concept",
      title: "1. The Problem With AdaGrad",
      content: `
AdaGrad remembers the entire history of squared gradients.

As training continues:

s_t ↑

Therefore:

η / √s_t ↓

The effective learning rate can become increasingly small.

RMSProp addresses this using a leaky or exponentially weighted average.
`
    },

    {
      type: "concept",
      title: "2. Exponential Moving Average",
      content: `
RMSProp does not give equal importance to all historical gradients.

Recent gradients receive larger weights.

Older gradients gradually lose influence.

Conceptually:

current gradient
↓
strong influence

older gradient
↓
weaker influence

very old gradient
↓
small influence
`
    },

    {
      type: "formula",
      title: "3. RMSProp State Update",
      content: `
s_t
=
γs_(t-1)
+
(1-γ)g_t²

where:

γ = decay coefficient
g_t = current gradient
s_t = running squared-gradient estimate
`
    },

    {
      type: "formula",
      title: "4. RMSProp Parameter Update",
      content: `
w_t
=
w_(t-1)
-
η
/
√(s_t + ε)
·
g_t

The scaling is performed coordinate-wise.
`
    },

    {
      type: "concept",
      title: "5. What Does γ Control?",
      content: `
The parameter γ controls how long the optimizer remembers historical squared gradients.

Large γ:

Longer memory.

Smaller γ:

Shorter memory.

Therefore γ controls the timescale of the moving average.
`
    },

    {
      type: "concept",
      title: "6. Why Use a Moving Average?",
      content: `
A moving average allows the optimizer to adapt as the training dynamics change.

If recent gradients become larger, the state responds.

If recent gradients become smaller, the state can gradually decrease.

This differs from AdaGrad's permanently accumulating state.
`
    },

    {
      type: "concept",
      title: "7. RMSProp and AdaGrad",
      content: `
AdaGrad:

s_t
=
s_(t-1)
+
g_t²

RMSProp:

s_t
=
γs_(t-1)
+
(1-γ)g_t²

The crucial difference is that RMSProp forgets older observations gradually.
`
    },

    {
      type: "concept",
      title: "8. RMSProp and Momentum",
      content: `
Momentum uses exponential averaging of gradient direction.

RMSProp uses exponential averaging of squared gradient magnitude.

Momentum:

history of gradients

RMSProp:

history of squared gradients
`
    },

    {
      type: "concept",
      title: "9. Combining Direction and Magnitude",
      content: `
Momentum primarily addresses the direction of optimization.

RMSProp primarily adapts the scale of each coordinate.

This distinction is important when understanding why later optimizers can combine multiple ideas.
`
    },

    {
      type: "concept",
      title: "10. Coordinate-Wise Scaling",
      content: `
Suppose:

g = [2, 4]

and:

s = [4, 16]

Then:

√s = [2, 4]

The gradient coordinates receive different scaling.

RMSProp therefore adapts the effective learning rate independently for each parameter coordinate.
`
    },

    {
      type: "concept",
      title: "11. Numerical Stability",
      content: `
RMSProp uses:

√(s_t + ε)

where ε is a small positive constant.

This prevents division by zero and protects against extremely large updates when the state is very small.
`
    },

    {
      type: "concept",
      title: "12. RMSProp From Scratch",
      content: `
The algorithm can be implemented using:

1. Initialize s = 0.
2. Compute gradient.
3. Update the moving average.
4. Scale the gradient.
5. Update parameters.
6. Clear gradients.
7. Repeat.
`
    },

    {
      type: "code",
      language: "python",
      title: "RMSProp From Scratch",
      content: `
import torch

x = torch.tensor(
    [10.0],
    requires_grad=True
)

s = torch.zeros_like(x)

learning_rate = 0.1
gamma = 0.9
epsilon = 1e-6

for step in range(30):

    loss = (x - 3) ** 2

    loss.backward()

    with torch.no_grad():

        s = (
            gamma * s
            + (1 - gamma) * x.grad ** 2
        )

        x -= (
            learning_rate
            * x.grad
            / torch.sqrt(
                s + epsilon
            )
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
      title: "13. PyTorch RMSProp",
      content: `
PyTorch provides RMSProp directly.

Example:

optimizer = torch.optim.RMSprop(
    model.parameters(),
    lr=0.001,
    alpha=0.99
)

The optimizer maintains the moving-average state internally.
`
    },

    {
      type: "code",
      language: "python",
      title: "RMSProp Training",
      content: `
optimizer = torch.optim.RMSprop(
    model.parameters(),
    lr=0.001,
    alpha=0.99
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
      title: "14. Understanding alpha in PyTorch",
      content: `
In PyTorch's RMSprop implementation, the parameter commonly named alpha controls the coefficient used for the moving average.

Conceptually it corresponds to the decay behavior represented by γ in the mathematical formulation.

Always check the optimizer API when translating mathematical notation into framework parameters.
`
    },

    {
      type: "concept",
      title: "15. RMSProp and Learning Rate",
      content: `
RMSProp separates:

global learning rate

from:

coordinate-wise scaling.

The learning rate η remains an explicit hyperparameter.

The moving-average state determines how each coordinate is scaled.
`
    },

    {
      type: "concept",
      title: "16. RMSProp and Nonconvex Optimization",
      content: `
The motivation for RMSProp is particularly relevant to deep learning, where optimization objectives are generally nonconvex.

A permanently decreasing learning rate may become unnecessarily restrictive.

RMSProp's moving average provides a way to adapt coordinate scaling without retaining the entire gradient history equally.
`
    },

    {
      type: "concept",
      title: "17. Half-Life Intuition",
      content: `
The decay coefficient determines how quickly older observations lose influence.

If γ is close to 1:

memory is long.

If γ is smaller:

memory is shorter.

This gives RMSProp a controllable historical window.
`
    },

    {
      type: "concept",
      title: "18. What Happens When γ = 1?",
      content: `
If:

γ = 1

then:

s_t = s_(t-1)

The current gradient contributes nothing to the state update.

The running estimate therefore cannot adapt to new gradients.

This demonstrates why γ must be less than 1.
`
    },

    {
      type: "concept",
      title: "19. What Happens When γ Is Small?",
      content: `
A small γ gives more weight to the current squared gradient.

The optimizer reacts quickly to recent gradient changes.

However, the estimate becomes more sensitive to short-term fluctuations.
`
    },

    {
      type: "concept",
      title: "20. What Happens When γ Is Large?",
      content: `
A large γ retains more historical information.

This creates smoother adaptation.

However, the optimizer reacts more slowly to sudden changes in gradient magnitude.
`
    },

    {
      type: "concept",
      title: "21. RMSProp on an Uneven Objective",
      content: `
Consider:

f(x1, x2)
=
0.1x1²
+
2x2²

The two directions have different curvature.

RMSProp can adapt coordinate-wise using recent squared-gradient statistics.

This makes the example useful for visualizing adaptive optimization.
`
    },

    {
      type: "concept",
      title: "22. RMSProp vs AdaGrad",
      content: `
AdaGrad:

• Accumulates all squared gradients
• Learning rates continually decrease
• Useful for sparse features
• Can become too conservative

RMSProp:

• Uses moving average
• Older gradients gradually lose influence
• Learning rate scaling can remain responsive
• Useful for nonconvex deep-learning optimization
`
    },

    {
      type: "concept",
      title: "23. RMSProp vs Momentum",
      content: `
Momentum:

tracks an exponentially weighted history of gradients.

RMSProp:

tracks an exponentially weighted history of squared gradients.

Therefore:

Momentum → direction smoothing

RMSProp → magnitude-based scaling
`
    },

    {
      type: "concept",
      title: "24. RMSProp as a Building Block",
      content: `
RMSProp is historically important because it illustrates a key idea:

use running statistics of gradients to adapt optimization.

Later adaptive optimizers combine related ideas in more sophisticated ways.
`
    },

    {
      type: "concept",
      title: "25. Optimizer State Memory",
      content: `
For every trainable parameter tensor, RMSProp maintains a state tensor containing the moving estimate of squared gradients.

Therefore:

parameter memory
+
optimizer-state memory

must fit within available hardware memory.
`
    },

    {
      type: "concept",
      title: "26. Debugging RMSProp",
      content: `
Check:

• Learning rate
• Decay coefficient
• Epsilon
• Gradient values
• Loss values
• Parameter magnitudes
• Optimizer state
• Batch size

If the loss becomes NaN, inspect whether gradients or updates become excessively large.
`
    },

    {
      type: "concept",
      title: "27. RMSProp Experiment",
      content: `
Train a small neural network using:

SGD
Momentum
AdaGrad
RMSProp

Keep everything else fixed.

Measure:

• Training loss
• Validation loss
• Accuracy
• Training time
• Stability
`
    },

    {
      type: "concept",
      title: "28. Gamma Experiment",
      content: `
Run RMSProp with different decay values.

For example:

γ = 0.7
γ = 0.8
γ = 0.9
γ = 0.99

Compare:

• Loss curve
• Convergence speed
• Stability
• Final validation performance
`
    },

    {
      type: "exercise",
      title: "Optimization Landscape Exercise",
      content: `
Use the quadratic objective:

f(x1, x2)
=
0.1x1²
+
2x2²

Start from:

(10, 10)

Run:

1. SGD
2. Momentum
3. AdaGrad
4. RMSProp

Plot the parameter trajectories.

Explain how each optimizer changes the movement through the landscape.
`
    },

    {
      type: "exercise",
      title: "Fashion-MNIST Experiment",
      content: `
Train the same neural network on Fashion-MNIST using:

• SGD
• Momentum
• AdaGrad
• RMSProp

Keep the architecture identical.

Compare the optimization behavior rather than changing the model between experiments.
`
    },

    {
      type: "qa",
      question: "What problem does RMSProp address?",
      answer:
        "It addresses the continuously growing accumulated squared-gradient state of AdaGrad by using an exponentially weighted moving average."
    },

    {
      type: "qa",
      question: "What does RMSProp store?",
      answer:
        "It stores a running estimate of the squared gradients for each parameter coordinate."
    },

    {
      type: "qa",
      question: "What does gamma control?",
      answer:
        "It controls how strongly previous squared-gradient information is retained in the moving average."
    },

    {
      type: "qa",
      question: "How is RMSProp related to AdaGrad?",
      answer:
        "Both use squared-gradient information for coordinate-wise scaling, but RMSProp uses a moving average instead of an ever-growing cumulative sum."
    },

    {
      type: "qa",
      question: "How is RMSProp different from momentum?",
      answer:
        "Momentum accumulates gradient direction, while RMSProp uses an exponentially weighted average of squared gradients to adapt the scale of each coordinate."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
RMSProp modifies AdaGrad by replacing cumulative squared-gradient accumulation with an exponentially weighted moving average.

Core equations:

s_t
=
γs_(t-1)
+
(1-γ)g_t²

w_t
=
w_(t-1)
-
ηg_t / √(s_t + ε)

Important concepts:

• Moving averages
• Coordinate-wise scaling
• Decay coefficient
• Learning rate
• Numerical stability
• Adaptive optimization
• AdaGrad limitation
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "RMSProp retains AdaGrad's coordinate-wise adaptation while replacing its ever-growing gradient history with a moving average, allowing the optimizer to remain responsive during long training runs."
    }
  ]
};

export default lesson8;
const lesson6 = {
  id: "lesson6",
  title: "Momentum",
  description:
    "Understand momentum-based optimization, velocity accumulation, smoothing of noisy gradients, accelerated convergence, and practical momentum experiments.",
  duration: "105–125 min",
  difficulty: "Advanced",

  prerequisites: [
    "Gradient descent",
    "Stochastic gradient descent",
    "Minibatch SGD",
    "Vectors and tensors",
    "Basic optimization"
  ],

  sections: [
    {
      type: "intro",
      title: "Why Momentum?",
      content: `
Gradient descent uses the current gradient to determine the next parameter update.

This can cause problems when the optimization landscape has very different curvature in different directions.

The trajectory may:

• Oscillate across a steep direction
• Move slowly along a shallow direction
• Be strongly affected by noisy gradients

Momentum introduces a memory of previous gradients.

Instead of reacting only to the current gradient, the optimizer maintains an accumulated direction.
`
    },

    {
      type: "concept",
      title: "1. Physical Intuition",
      content: `
Imagine a ball moving downhill.

Without momentum:

The ball reacts strongly to the local slope at every point.

With momentum:

The ball has velocity.

Its previous movement influences its current movement.

This provides an intuitive picture of why momentum can smooth optimization trajectories.
`
    },

    {
      type: "formula",
      title: "2. Momentum State",
      content: `
A momentum variable v_t stores accumulated gradient information.

A common form is:

v_t
=
βv_(t-1) + g_t

Then:

x_t
=
x_(t-1) - ηv_t

where:

β = momentum coefficient
η = learning rate
g_t = current gradient
`
    },

    {
      type: "concept",
      title: "3. What Does β Control?",
      content: `
β controls how much historical information is retained.

If β is small:

Recent gradients dominate.

If β is larger:

More historical gradients are retained.

The exact behavior depends on the optimization problem and learning rate.
`
    },

    {
      type: "concept",
      title: "4. Exponential Weighting",
      content: `
Expanding the recurrence:

v_t
=
βv_(t-1) + g_t

produces:

v_t
=
g_t
+
βg_(t-1)
+
β²g_(t-2)
+
...

Older gradients receive progressively smaller weights.
`
    },

    {
      type: "concept",
      title: "5. Why This Smooths Noise",
      content: `
Suppose individual stochastic gradients fluctuate:

g1 → right
g2 → left
g3 → right
g4 → right

Averaging historical information can reduce the effect of short-term fluctuations.

The optimizer obtains a smoother direction than using only the newest gradient.
`
    },

    {
      type: "concept",
      title: "6. Momentum in a Narrow Valley",
      content: `
Consider a long narrow optimization valley.

One direction may have strong curvature.

Another direction may be shallow.

Ordinary gradient descent can oscillate across the steep direction while progressing slowly along the valley.

Momentum can reduce this inefficient behavior by accumulating useful movement along the consistent direction.
`
    },

    {
      type: "concept",
      title: "7. Momentum and Learning Rate",
      content: `
Momentum does not remove the need for a learning rate.

The update still contains:

η

Therefore both:

learning rate

and

momentum coefficient

affect the optimization trajectory.
`
    },

    {
      type: "concept",
      title: "8. Momentum Is Not Simply Larger Learning Rate",
      content: `
Increasing the learning rate changes the scale of the current gradient update.

Momentum changes the update using a history of gradients.

Therefore momentum introduces temporal smoothing rather than simply multiplying the current gradient.
`
    },

    {
      type: "concept",
      title: "9. Momentum With Minibatches",
      content: `
Momentum is commonly combined with minibatch SGD.

Pipeline:

Minibatch
↓
Gradient
↓
Momentum state update
↓
Parameter update
↓
Next minibatch
`
    },

    {
      type: "code",
      language: "python",
      title: "Momentum From Scratch",
      content: `
import torch

x = torch.tensor(
    [10.0],
    requires_grad=True
)

velocity = torch.zeros_like(x)

learning_rate = 0.1
momentum = 0.9

for step in range(30):

    loss = (x - 3) ** 2

    loss.backward()

    with torch.no_grad():

        velocity = (
            momentum * velocity
            + x.grad
        )

        x -= learning_rate * velocity

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
      title: "10. PyTorch Momentum",
      content: `
PyTorch provides momentum through the SGD optimizer.

Example:

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.01,
    momentum=0.9
)

The optimizer maintains the necessary state for each parameter.
`
    },

    {
      type: "code",
      language: "python",
      title: "Training With Momentum",
      content: `
optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.01,
    momentum=0.9
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
      title: "11. Momentum State",
      content: `
Momentum requires additional optimizer state.

For each trainable parameter, the optimizer maintains information related to the accumulated update direction.

Therefore optimizer memory is larger than plain SGD.
`
    },

    {
      type: "concept",
      title: "12. Momentum and Oscillation",
      content: `
Suppose gradients alternate strongly along one direction.

Without momentum:

gradient changes direction
→ update changes direction
→ oscillation

With momentum:

historical gradients influence the update
→ rapid direction changes are smoothed
→ trajectory can become more stable
`
    },

    {
      type: "concept",
      title: "13. Momentum in Consistent Directions",
      content: `
If successive gradients point approximately in the same direction, momentum accumulates them.

This can produce larger effective movement along that direction.

Therefore momentum can accelerate progress when the gradient direction is consistently useful.
`
    },

    {
      type: "concept",
      title: "14. Momentum as a Low-Pass Filter",
      content: `
A useful intuition is to view momentum as filtering rapid changes in the gradient signal.

Fast fluctuations:
reduced influence

Persistent direction:
stronger influence

This is not a literal signal-processing implementation, but it is a useful conceptual model.
`
    },

    {
      type: "concept",
      title: "15. Momentum and Curvature",
      content: `
Optimization landscapes can have different curvature in different directions.

High curvature:

small movement may cause a large loss change.

Low curvature:

larger movement may be required.

Momentum helps the optimizer behave more effectively when these directions interact.
`
    },

    {
      type: "concept",
      title: "16. Quadratic Test Function",
      content: `
A common optimization experiment uses:

f(x1, x2)
=
0.1x1²
+
2x2²

The coefficient difference creates different curvature along the two axes.

This makes it useful for visualizing optimization trajectories.
`
    },

    {
      type: "code",
      language: "python",
      title: "Quadratic Objective",
      content: `
def objective(x1, x2):
    return (
        0.1 * x1 ** 2
        + 2.0 * x2 ** 2
    )
`
    },

    {
      type: "concept",
      title: "17. Momentum Experiment",
      content: `
Start from a point far from the minimum.

Run:

1. Gradient descent
2. SGD
3. Momentum

Plot the optimization trajectories.

Compare:

• Number of steps
• Oscillation
• Final objective
• Stability
`
    },

    {
      type: "concept",
      title: "18. Choosing Momentum",
      content: `
Common momentum values used in practice include values near:

0.8
0.9
0.95
0.99

These are not universal optimal values.

The correct value depends on the model and training problem.
`
    },

    {
      type: "concept",
      title: "19. Too Much Momentum",
      content: `
If historical information dominates excessively, the optimizer may retain too much inertia.

This can contribute to overshooting or instability, particularly if the learning rate is also too large.

Therefore momentum and learning rate should be considered together.
`
    },

    {
      type: "concept",
      title: "20. Momentum and Noisy Gradients",
      content: `
Minibatch gradients contain sampling noise.

Momentum can reduce the effect of some of this noise by aggregating gradient information over time.

This makes momentum particularly useful in stochastic optimization settings.
`
    },

    {
      type: "concept",
      title: "21. Momentum vs SGD",
      content: `
SGD:

v_t = g_t

Momentum:

v_t
=
βv_(t-1) + g_t

The difference is the additional state.

Momentum therefore uses both:

current gradient

and

historical gradients.
`
    },

    {
      type: "concept",
      title: "22. Momentum and Optimization Speed",
      content: `
Momentum can reduce the number of optimization steps required in some problems.

However, the actual speed improvement depends on:

• Learning rate
• Momentum coefficient
• Loss landscape
• Batch size
• Model architecture
• Data
`
    },

    {
      type: "concept",
      title: "23. Practical Training Configuration",
      content: `
A simple starting experiment might use:

optimizer = SGD(
    learning_rate,
    momentum
)

Then compare different configurations systematically rather than changing multiple variables simultaneously.
`
    },

    {
      type: "concept",
      title: "24. Debugging Momentum",
      content: `
Check:

• Learning rate
• Momentum coefficient
• Gradient values
• Parameter values
• Loss curve
• Optimizer state
• Gradient accumulation

If training suddenly becomes unstable, test whether reducing the learning rate changes the behavior.
`
    },

    {
      type: "exercise",
      title: "Momentum Experiment",
      content: `
Train a small neural network using:

1. SGD without momentum
2. SGD with momentum = 0.5
3. SGD with momentum = 0.9
4. SGD with momentum = 0.99

Record:

• Training loss
• Validation loss
• Training time
• Number of epochs
`
    },

    {
      type: "exercise",
      title: "Trajectory Visualization",
      content: `
Use the quadratic objective:

f(x1, x2)
=
0.1x1² + 2x2²

Start from:

x = [10, 10]

Plot the trajectory for:

• Gradient descent
• Momentum

Explain the difference in oscillation and movement.
`
    },

    {
      type: "qa",
      question: "What is momentum in optimization?",
      answer:
        "Momentum maintains a running state based on previous gradients and uses it together with the current gradient to determine the update."
    },

    {
      type: "qa",
      question: "Why can momentum reduce oscillation?",
      answer:
        "Historical gradients smooth rapid changes in the update direction, reducing the effect of short-term gradient fluctuations."
    },

    {
      type: "qa",
      question: "What does the momentum coefficient control?",
      answer:
        "It controls how strongly the previous momentum state contributes to the current update."
    },

    {
      type: "qa",
      question: "Does momentum eliminate the learning rate?",
      answer:
        "No. Momentum still uses a learning rate to scale the parameter update."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Momentum adds memory to gradient-based optimization.

Core idea:

current gradient
+
historical update information
=
momentum-based direction

Important concepts:

• Velocity
• Exponential weighting
• Gradient smoothing
• Oscillation reduction
• Curvature
• Learning rate
• Momentum coefficient
• Optimizer state
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Momentum improves optimization by remembering previous gradients, allowing consistent directions to accumulate while reducing the effect of rapid gradient fluctuations."
    }
  ]
};

export default lesson6;
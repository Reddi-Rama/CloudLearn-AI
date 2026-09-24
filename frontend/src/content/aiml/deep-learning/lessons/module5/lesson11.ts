const lesson11 = {
  id: "lesson11",
  title: "Learning Rate Scheduling",
  description:
    "Learn why learning rates should change during training and understand polynomial decay, factor scheduling, multistep schedules, cosine schedules, and warmup.",
  duration: "110–130 min",
  difficulty: "Advanced",

  prerequisites: [
    "Gradient descent",
    "SGD",
    "Momentum",
    "Adam",
    "Optimization algorithms",
    "Training loops"
  ],

  sections: [
    {
      type: "intro",
      title: "Why Learning Rate Scheduling?",
      content: `
The learning rate determines how strongly an optimizer changes model parameters.

A learning rate that is useful at the beginning of training may become too large near the end.

Early training often benefits from larger updates.

Later training often benefits from smaller, more controlled updates.

Learning-rate scheduling makes the learning rate a function of training progress.
`
    },

    {
      type: "concept",
      title: "1. Fixed Learning Rate",
      content: `
A fixed learning rate has:

η_t = η

for every training step.

This is simple but may not be ideal throughout a long training run.
`
    },

    {
      type: "concept",
      title: "2. Scheduled Learning Rate",
      content: `
A schedule defines:

η_t

as a function of:

• Epoch
• Update number
• Training progress
• Validation behavior

The optimizer therefore changes its step size over time.
`
    },

    {
      type: "concept",
      title: "3. Large Learning Rate Early",
      content: `
At the beginning of training, the parameters may be far from a useful solution.

A larger learning rate can allow faster movement through the optimization landscape.
`
    },

    {
      type: "concept",
      title: "4. Smaller Learning Rate Later",
      content: `
Near a useful solution, very large updates can cause oscillation or prevent refinement.

Reducing the learning rate allows the optimizer to make smaller adjustments.
`
    },

    {
      type: "formula",
      title: "5. Polynomial Decay",
      content: `
A polynomial schedule can be represented conceptually as:

η_t
=
(η_0 - η_T)
(1 - t/T)^p
+
η_T

where:

η_0 = initial learning rate
η_T = final learning rate
T = total number of updates
p = decay exponent
`
    },

    {
      type: "concept",
      title: "6. Effect of the Exponent",
      content: `
The exponent controls the shape of the decay curve.

Different exponents produce different schedules.

Therefore the learning rate can decrease:

• Slowly at first
• More rapidly later

or follow another polynomial shape.
`
    },

    {
      type: "concept",
      title: "7. Factor Scheduler",
      content: `
A multiplicative factor schedule updates:

η_(t+1)
=
αη_t

where:

0 < α < 1

This gradually reduces the learning rate.
`
    },

    {
      type: "formula",
      title: "8. Learning Rate Floor",
      content: `
A practical scheduler can prevent the learning rate from becoming too small:

η_(t+1)
=
max(
η_min,
αη_t
)

This creates a minimum learning-rate boundary.
`
    },

    {
      type: "concept",
      title: "9. Piecewise Constant Scheduling",
      content: `
Another common strategy is to keep the learning rate constant for a period and then reduce it.

Example:

epochs 1–10
→ 0.1

epochs 11–20
→ 0.01

epochs 21–30
→ 0.001
`
    },

    {
      type: "concept",
      title: "10. Multi-Step Scheduler",
      content: `
Suppose the learning rate should change at:

epoch 15
epoch 30

A multiplicative factor can be applied at each milestone.

This produces a piecewise constant learning-rate curve.
`
    },

    {
      type: "code",
      language: "python",
      title: "PyTorch Multi-Step Scheduler",
      content: `
import torch

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.5
)

scheduler = torch.optim.lr_scheduler.MultiStepLR(
    optimizer,
    milestones=[15, 30],
    gamma=0.5
)

for epoch in range(40):

    train_one_epoch()

    scheduler.step()
`
    },

    {
      type: "concept",
      title: "11. Why Delay a Learning-Rate Reduction?",
      content: `
The source gives an important intuition:

optimization can first make progress toward a useful region.

Once progress reaches a plateau, reducing the learning rate can allow finer refinement.

Therefore learning-rate reduction does not necessarily need to happen continuously.
`
    },

    {
      type: "concept",
      title: "12. Validation-Based Scheduling",
      content: `
A schedule can also respond to validation behavior.

If validation performance stops improving, reducing the learning rate may allow the model to continue refining parameters.

This is different from a purely predetermined schedule because it reacts to observed training behavior.
`
    },

    {
      type: "concept",
      title: "13. Cosine Scheduling",
      content: `
Cosine schedules gradually reduce the learning rate following a cosine-shaped curve.

A simplified form is:

η_t
=
η_min
+
1/2(η_max - η_min)
[1 + cos(πt/T)]
`
    },

    {
      type: "concept",
      title: "14. Why Cosine Scheduling?",
      content: `
The cosine shape can avoid reducing the learning rate too aggressively at the beginning.

It then gradually approaches a small learning rate near the end.

The source discusses cosine schedules particularly in the context of computer vision experiments.
`
    },

    {
      type: "code",
      language: "python",
      title: "PyTorch Cosine Scheduler",
      content: `
optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.3
)

scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(
    optimizer,
    T_max=20,
    eta_min=0.01
)

for epoch in range(20):

    train_one_epoch()

    scheduler.step()
`
    },

    {
      type: "concept",
      title: "15. Warmup",
      content: `
Warmup is a strategy in which the learning rate starts small and gradually increases to a desired initial value.

This is useful when a large initial learning rate could make optimization unstable.
`
    },

    {
      type: "concept",
      title: "16. Why Warmup?",
      content: `
At initialization, model parameters may be far from a stable configuration.

A large learning rate can cause:

• Very large parameter changes
• Divergence
• Unstable early optimization

Warmup begins cautiously before reaching the main learning-rate schedule.
`
    },

    {
      type: "formula",
      title: "17. Linear Warmup",
      content: `
A simple warmup schedule increases the learning rate approximately linearly:

η_t
=
η_max
(t / T_w)

for:

0 ≤ t ≤ T_w

where T_w is the warmup duration.
`
    },

    {
      type: "concept",
      title: "18. Warmup Followed by Cosine Decay",
      content: `
A common modern pattern is:

small learning rate
↓
linear warmup
↓
maximum learning rate
↓
cosine decay
↓
small final learning rate

This combines cautious initialization with gradual refinement.
`
    },

    {
      type: "concept",
      title: "19. Warmup Is Not an Optimizer",
      content: `
Warmup controls the learning-rate schedule.

It does not replace:

SGD
Momentum
Adam
RMSProp

Instead, it controls the learning rate used by one of those optimizers.
`
    },

    {
      type: "concept",
      title: "20. Scheduler and Optimizer Relationship",
      content: `
The optimizer determines:

how gradients become parameter updates.

The scheduler determines:

how the learning rate changes over time.

Therefore:

optimizer
+
scheduler
=
complete optimization configuration
`
    },

    {
      type: "concept",
      title: "21. Learning Rate and Generalization",
      content: `
The source emphasizes that learning-rate scheduling can influence more than optimization speed.

Different optimization trajectories can result in different levels of generalization and overfitting even when training error is similar.
`
    },

    {
      type: "concept",
      title: "22. Learning Rate Too Large",
      content: `
Symptoms can include:

• Loss increases
• Loss oscillates strongly
• NaN values
• Extremely large gradients
• Unstable validation performance

Possible response:

reduce the learning rate.
`
    },

    {
      type: "concept",
      title: "23. Learning Rate Too Small",
      content: `
Symptoms:

• Training progresses extremely slowly
• Loss decreases only slightly
• Large number of epochs required
• Model appears stuck

Possible response:

increase the learning rate or use a more suitable schedule.
`
    },

    {
      type: "concept",
      title: "24. Comparing Schedules",
      content: `
Possible schedules:

• Constant
• Polynomial decay
• Factor decay
• Multi-step
• Cosine
• Warmup + decay
• Validation-driven reduction

The appropriate choice depends on the model and problem.
`
    },

    {
      type: "concept",
      title: "25. Scheduler Visualization",
      content: `
Always visualize the learning-rate curve when experimenting.

Plot:

x-axis → epoch/update

y-axis → learning rate

This makes it easy to verify that the scheduler behaves as intended.
`
    },

    {
      type: "code",
      language: "python",
      title: "Inspect Current Learning Rate",
      content: `
current_lr = optimizer.param_groups[0]["lr"]

print(
    "Learning rate:",
    current_lr
)
`
    },

    {
      type: "exercise",
      title: "Scheduler Comparison",
      content: `
Train the same network with:

1. Constant learning rate
2. Multi-step decay
3. Cosine decay
4. Warmup + cosine decay

Compare:

• Training loss
• Validation loss
• Accuracy
• Convergence speed
`
    },

    {
      type: "exercise",
      title: "Warmup Experiment",
      content: `
Train a model using:

1. No warmup
2. 3 warmup epochs
3. 5 warmup epochs
4. 10 warmup epochs

Record early-training loss and final validation performance.
`
    },

    {
      type: "qa",
      question: "Why schedule the learning rate?",
      answer:
        "A changing learning rate can provide larger updates early in training and smaller, more controlled updates later."
    },

    {
      type: "qa",
      question: "What is warmup?",
      answer:
        "Warmup gradually increases the learning rate from a small initial value before applying the main training schedule."
    },

    {
      type: "qa",
      question: "What is a cosine scheduler?",
      answer:
        "It changes the learning rate according to a cosine-shaped decay curve between a maximum and minimum value."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Learning-rate scheduling makes optimization dynamic.

Important schedules include:

• Polynomial decay
• Factor decay
• Multi-step decay
• Cosine decay
• Warmup

The source emphasizes that decreasing the learning rate can improve accuracy, reduce overfitting in some settings, and enable finer optimization near the end of training. :chatgpt-content-reference{index="2"}
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Learning-rate scheduling controls the scale of optimization throughout training, allowing models to move quickly early and refine parameters more carefully later."
    }
  ]
};

export default lesson11;
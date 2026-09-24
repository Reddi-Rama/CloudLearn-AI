const lesson10 = {
  id: "lesson10",
  title: "Adam",
  description:
    "Understand Adam, momentum estimates, second-moment estimates, bias correction, adaptive updates, Yogi, and practical Adam training.",
  duration: "120–140 min",
  difficulty: "Advanced",

  prerequisites: [
    "Minibatch SGD",
    "Momentum",
    "AdaGrad",
    "RMSProp",
    "AdaDelta",
    "Exponential moving averages"
  ],

  sections: [
    {
      type: "intro",
      title: "Introduction to Adam",
      content: `
Adam stands for Adaptive Moment Estimation.

It combines several important ideas from earlier optimization algorithms.

Adam uses:

• Momentum-like first-moment estimation
• RMSProp-like second-moment estimation
• Bias correction
• Coordinate-wise adaptive scaling

This makes Adam a major optimizer in modern deep learning.
`
    },

    {
      type: "concept",
      title: "1. What Adam Combines",
      content: `
The progression is:

SGD
→ stochastic updates

Momentum
→ gradient history

AdaGrad
→ coordinate-wise adaptation

RMSProp
→ moving average of squared gradients

Adam
→ momentum + adaptive second-moment scaling + bias correction
`
    },

    {
      type: "concept",
      title: "2. First Moment",
      content: `
Adam maintains:

v_t

which is an exponentially weighted moving average of gradients.

The update is:

v_t
=
β1v_(t-1)
+
(1-β1)g_t

This behaves similarly to momentum.
`
    },

    {
      type: "concept",
      title: "3. Second Moment",
      content: `
Adam also maintains:

s_t

which tracks an exponentially weighted moving average of squared gradients.

s_t
=
β2s_(t-1)
+
(1-β2)g_t²
`
    },

    {
      type: "formula",
      title: "4. Adam State Equations",
      content: `
First moment:

v_t
=
β1v_(t-1)
+
(1-β1)g_t

Second moment:

s_t
=
β2s_(t-1)
+
(1-β2)g_t²
`
    },

    {
      type: "concept",
      title: "5. Why Two Moments?",
      content: `
The first moment provides directional information.

The second moment provides scale information.

Therefore Adam can be viewed conceptually as:

direction estimate
+
gradient magnitude estimate
=
adaptive update
`
    },

    {
      type: "concept",
      title: "6. Bias From Zero Initialization",
      content: `
Adam commonly initializes:

v_0 = 0

s_0 = 0

At the beginning of training, these moving averages are biased toward zero because they have not yet observed enough gradients.
`
    },

    {
      type: "concept",
      title: "7. Bias Correction",
      content: `
Adam corrects the initial bias.

The corrected first moment is:

v_hat_t
=
v_t
/
(1 - β1^t)

The corrected second moment is:

s_hat_t
=
s_t
/
(1 - β2^t)
`
    },

    {
      type: "formula",
      title: "8. Adam Parameter Update",
      content: `
w_t
=
w_(t-1)
-
η
·
v_hat_t
/
(√s_hat_t + ε)
`
    },

    {
      type: "concept",
      title: "9. Meaning of β1",
      content: `
β1 controls the memory of the first-moment estimate.

A common value is:

β1 = 0.9

Higher values retain more historical gradient information.
`
    },

    {
      type: "concept",
      title: "10. Meaning of β2",
      content: `
β2 controls the memory of the second-moment estimate.

A common value is:

β2 = 0.999

This usually gives the squared-gradient statistic a longer memory than the first-moment estimate.
`
    },

    {
      type: "concept",
      title: "11. Why β2 Is Often Larger",
      content: `
Gradient magnitude estimates can be noisy.

A longer moving-average window produces a smoother estimate.

Therefore β2 is commonly chosen close to 1.
`
    },

    {
      type: "concept",
      title: "12. Epsilon",
      content: `
Adam adds a small ε to the denominator.

This prevents division by zero and improves numerical stability.

The exact default value depends on the framework.
`
    },

    {
      type: "code",
      language: "python",
      title: "Adam From Scratch",
      content: `
import torch

x = torch.tensor(
    [10.0],
    requires_grad=True
)

v = torch.zeros_like(x)
s = torch.zeros_like(x)

lr = 0.01
beta1 = 0.9
beta2 = 0.999
epsilon = 1e-8

for t in range(1, 31):

    loss = (x - 3) ** 2

    loss.backward()

    with torch.no_grad():

        g = x.grad

        v = (
            beta1 * v
            + (1 - beta1) * g
        )

        s = (
            beta2 * s
            + (1 - beta2) * g ** 2
        )

        v_hat = (
            v /
            (1 - beta1 ** t)
        )

        s_hat = (
            s /
            (1 - beta2 ** t)
        )

        x -= (
            lr
            * v_hat
            /
            (torch.sqrt(s_hat) + epsilon)
        )

    x.grad.zero_()

    print(
        t,
        x.item(),
        loss.item()
    )
`
    },

    {
      type: "concept",
      title: "13. Adam in PyTorch",
      content: `
PyTorch provides:

torch.optim.Adam

Example:

optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)

The optimizer maintains moment estimates automatically.
`
    },

    {
      type: "code",
      language: "python",
      title: "Adam Training Loop",
      content: `
optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
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
      title: "14. Adam Optimizer State",
      content: `
Adam stores two main state tensors per parameter:

first moment

and

second moment.

Therefore Adam requires more memory than plain SGD.
`
    },

    {
      type: "concept",
      title: "15. Adam and Minibatches",
      content: `
Adam normally receives gradients generated from minibatches.

The sequence becomes:

minibatch
↓
gradient
↓
first moment
↓
second moment
↓
bias correction
↓
parameter update
`
    },

    {
      type: "concept",
      title: "16. Adam and Noisy Gradients",
      content: `
Minibatch gradients contain sampling noise.

The first-moment moving average smooths gradient direction.

The second-moment moving average estimates gradient magnitude.

Together these statistics can make optimization more adaptive.
`
    },

    {
      type: "concept",
      title: "17. Adam vs Momentum",
      content: `
Momentum mainly maintains a running direction.

Adam maintains:

running direction

plus:

running squared-gradient magnitude.

Therefore Adam adapts the scale of individual coordinates.
`
    },

    {
      type: "concept",
      title: "18. Adam vs RMSProp",
      content: `
RMSProp:

moving average of squared gradients.

Adam:

moving average of squared gradients
+
moving average of gradients
+
bias correction.

Adam can therefore be viewed as combining RMSProp-style scaling with momentum.
`
    },

    {
      type: "concept",
      title: "19. Why Adam Is Popular",
      content: `
Adam is attractive because it provides:

• Adaptive coordinate-wise updates
• Momentum-like behavior
• Bias correction
• Straightforward framework support
• Reasonable default configurations

However, optimizer selection should still be based on the training problem rather than assuming one optimizer is universally appropriate.
`
    },

    {
      type: "concept",
      title: "20. Adam Is Not Perfect",
      content: `
The source discusses situations where Adam can fail to converge because of problems involving its second-moment estimate.

This motivates studying variants such as Yogi.
`
    },

    {
      type: "concept",
      title: "21. Yogi",
      content: `
Yogi modifies the second-moment update used by Adam.

The motivation is to prevent problematic behavior in the accumulated second-moment estimate, especially when gradients have high variance or sparse updates.
`
    },

    {
      type: "formula",
      title: "22. Yogi Second-Moment Idea",
      content: `
Yogi modifies the second-moment update using the sign of the difference between:

g_t²

and:

s_(t-1)

Conceptually:

s_t
=
s_(t-1)
+
(1-β2)
g_t²
·
sign(g_t² - s_(t-1))
`
    },

    {
      type: "concept",
      title: "23. Bias Correction Intuition",
      content: `
Suppose a moving average starts at zero.

Early estimates will be artificially small.

Bias correction compensates for this startup effect.

Without correction, the denominator and numerator estimates could initially be distorted.
`
    },

    {
      type: "concept",
      title: "24. Adam Hyperparameters",
      content: `
Important Adam parameters include:

learning rate

β1

β2

ε

A common starting configuration is approximately:

lr = 0.001
β1 = 0.9
β2 = 0.999

These are starting points, not universal guarantees.
`
    },

    {
      type: "concept",
      title: "25. Adam and Learning Rate",
      content: `
Even though Adam adapts coordinate-wise, the global learning rate still matters.

If the learning rate is too large:

• Training may become unstable.
• Loss may oscillate.
• Parameters may move too aggressively.

If too small:

• Training may become unnecessarily slow.
`
    },

    {
      type: "concept",
      title: "26. Adam and Generalization",
      content: `
An optimizer affects not only how quickly training loss decreases but also how parameter trajectories evolve.

Different optimization algorithms can reach solutions with different generalization behavior.

Therefore training loss alone is not sufficient when evaluating optimization choices.
`
    },

    {
      type: "exercise",
      title: "Adam Learning-Rate Experiment",
      content: `
Train the same network using:

lr = 0.0001
lr = 0.001
lr = 0.01

Keep all other settings unchanged.

Compare:

• Training loss
• Validation loss
• Accuracy
• Stability
`
    },

    {
      type: "exercise",
      title: "Optimizer Comparison",
      content: `
Compare:

SGD
Momentum
RMSProp
Adam

Use the same:

• Dataset
• Model
• Batch size
• Number of epochs
• Evaluation procedure

Then analyze the optimization curves.
`
    },

    {
      type: "qa",
      question: "What does Adam combine?",
      answer:
        "Adam combines momentum-like first-moment estimation with RMSProp-like second-moment estimation and bias correction."
    },

    {
      type: "qa",
      question: "Why does Adam use two state variables?",
      answer:
        "One estimates the mean gradient direction and the other estimates the second moment or squared-gradient magnitude."
    },

    {
      type: "qa",
      question: "Why is bias correction needed?",
      answer:
        "The moving averages start from zero, which biases their early values downward. Bias correction compensates for this startup effect."
    },

    {
      type: "qa",
      question: "What is Yogi?",
      answer:
        "Yogi is a modification of Adam that changes the second-moment update to improve behavior in situations where Adam's variance estimate can cause convergence problems."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Adam combines several optimization ideas.

First moment:

v_t
=
β1v_(t-1)
+
(1-β1)g_t

Second moment:

s_t
=
β2s_(t-1)
+
(1-β2)g_t²

Bias correction:

v_hat_t
=
v_t / (1-β1^t)

s_hat_t
=
s_t / (1-β2^t)

Final update:

w_t
=
w_(t-1)
-
ηv_hat_t/(√s_hat_t+ε)
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Adam combines momentum and adaptive second-moment scaling with bias correction, producing a powerful general-purpose optimization method while still requiring careful learning-rate and training experimentation."
    }
  ]
};

export default lesson10;
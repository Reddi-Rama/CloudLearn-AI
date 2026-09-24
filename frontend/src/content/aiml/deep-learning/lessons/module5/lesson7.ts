const lesson7 = {
  id: "lesson7",
  title: "AdaGrad",
  description:
    "Understand adaptive gradient optimization, per-coordinate learning rates, accumulated squared gradients, preconditioning, sparse features, and AdaGrad's limitations.",
  duration: "110–130 min",
  difficulty: "Advanced",

  prerequisites: [
    "Gradient descent",
    "Minibatch SGD",
    "Momentum",
    "Elementwise tensor operations",
    "Basic matrix calculus"
  ],

  sections: [
    {
      type: "intro",
      title: "Introduction to AdaGrad",
      content: `
AdaGrad stands for Adaptive Gradient.

Its central idea is to assign different effective learning rates to different parameter coordinates.

Instead of applying exactly the same scaling to every parameter, AdaGrad tracks the history of squared gradients for each coordinate.

Large accumulated gradients lead to smaller future updates for those coordinates.

This makes AdaGrad particularly interesting for problems with uneven or sparse feature behavior.
`
    },

    {
      type: "concept",
      title: "1. Why One Learning Rate May Be Insufficient",
      content: `
Imagine a parameter vector:

w = [w1, w2, w3]

Suppose the gradient history is:

coordinate 1 → large gradients
coordinate 2 → small gradients
coordinate 3 → medium gradients

Using one global learning rate treats all three coordinates identically.

AdaGrad adapts the effective learning rate separately for each coordinate.
`
    },

    {
      type: "concept",
      title: "2. Coordinate-Wise Adaptation",
      content: `
AdaGrad maintains an accumulated squared-gradient state.

The state grows according to:

s_t
=
s_(t-1)
+
g_t²

The square is elementwise.
`
    },

    {
      type: "formula",
      title: "3. AdaGrad Update",
      content: `
g_t
=
gradient

s_t
=
s_(t-1) + g_t²

w_t
=
w_(t-1)
-
η
/
√(s_t + ε)
· g_t

Operations are performed coordinate by coordinate.

ε prevents division by zero.
`
    },

    {
      type: "concept",
      title: "4. Why Squared Gradients?",
      content: `
Squaring removes the sign.

For example:

(+2)² = 4

(-2)² = 4

Therefore the state measures the accumulated magnitude of gradient activity rather than cancellation between positive and negative gradients.
`
    },

    {
      type: "concept",
      title: "5. Per-Coordinate Learning Rate",
      content: `
For coordinate i:

effective learning rate

≈

η / √(s_i + ε)

If s_i is large:

effective learning rate becomes smaller.

If s_i is small:

effective learning rate remains relatively larger.
`
    },

    {
      type: "concept",
      title: "6. Intuition",
      content: `
Think of each parameter as having its own learning-rate history.

Frequently receiving large gradients:

→ learning rate is reduced.

Receiving small or infrequent gradients:

→ learning rate is reduced less aggressively.
`
    },

    {
      type: "concept",
      title: "7. Sparse Features",
      content: `
AdaGrad can be useful for sparse features.

Suppose a feature appears rarely.

Its associated parameter receives updates less frequently.

Its accumulated gradient history can remain smaller than parameters associated with frequently occurring features.

Therefore its effective learning rate can remain relatively larger.
`
    },

    {
      type: "concept",
      title: "8. Preconditioning",
      content: `
AdaGrad can be interpreted as a simple form of adaptive preconditioning.

Instead of moving equally in every coordinate, it rescales gradient components based on their historical magnitude.
`
    },

    {
      type: "concept",
      title: "9. Uneven Optimization Landscapes",
      content: `
Consider an objective where one direction is much steeper than another.

The optimizer may benefit from reducing movement along the steep direction while allowing relatively larger movement along the flatter direction.

AdaGrad performs a coordinate-wise scaling based on gradient history.
`
    },

    {
      type: "concept",
      title: "10. AdaGrad State",
      content: `
For every trainable parameter tensor, AdaGrad maintains a state tensor with the same shape.

For example:

parameter:

W shape = (100, 50)

AdaGrad state:

S shape = (100, 50)
`
    },

    {
      type: "code",
      language: "python",
      title: "AdaGrad From Scratch",
      content: `
import torch

x = torch.tensor(
    [10.0],
    requires_grad=True
)

s = torch.zeros_like(x)

learning_rate = 0.5
epsilon = 1e-6

for step in range(30):

    loss = (x - 3) ** 2

    loss.backward()

    with torch.no_grad():

        s += x.grad ** 2

        x -= (
            learning_rate
            * x.grad
            / torch.sqrt(s + epsilon)
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
      title: "11. PyTorch AdaGrad",
      content: `
PyTorch provides AdaGrad directly.

Example:

optimizer = torch.optim.Adagrad(
    model.parameters(),
    lr=0.01
)

The optimizer automatically maintains the accumulated squared-gradient state.
`
    },

    {
      type: "code",
      language: "python",
      title: "AdaGrad Training",
      content: `
optimizer = torch.optim.Adagrad(
    model.parameters(),
    lr=0.01
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
      title: "12. AdaGrad Learning Rate Decay",
      content: `
A major characteristic of AdaGrad is that the accumulated state continually increases.

Therefore:

s_t

does not decrease.

As training continues:

√s_t

generally becomes larger.

Consequently the effective learning rate can continue decreasing.
`
    },

    {
      type: "concept",
      title: "13. Why This Can Be Helpful",
      content: `
Early in training, large updates can be useful.

As optimization progresses, decreasing effective learning rates can make the trajectory more conservative.

This can be useful in certain optimization settings.
`
    },

    {
      type: "concept",
      title: "14. Why This Can Become a Problem",
      content: `
The same mechanism can eventually become too aggressive.

Because the accumulated squared gradients continue growing, the effective learning rate can become extremely small.

Then parameter updates may become too slow.
`
    },

    {
      type: "concept",
      title: "15. AdaGrad vs SGD",
      content: `
SGD:

w ← w - ηg

AdaGrad:

w ←
w - ηg / √(s + ε)

The difference is the adaptive coordinate-wise scaling.
`
    },

    {
      type: "concept",
      title: "16. AdaGrad vs Momentum",
      content: `
Momentum remembers gradient direction through an accumulated velocity.

AdaGrad remembers gradient magnitude through accumulated squared gradients.

Momentum:

direction history

AdaGrad:

magnitude history
`
    },

    {
      type: "concept",
      title: "17. AdaGrad and Curvature",
      content: `
Second derivatives contain information about curvature but can be expensive to compute for large neural networks.

AdaGrad uses gradient magnitudes as a cheaper adaptive signal.

It does not explicitly compute the full Hessian.
`
    },

    {
      type: "concept",
      title: "18. Elementwise Operations",
      content: `
AdaGrad's equations operate coordinate-wise.

For:

g = [2, 4]

g² = [4, 16]

If:

s = [4, 25]

then:

√s = [2, 5]

Each coordinate therefore receives a different scaling.
`
    },

    {
      type: "concept",
      title: "19. Numerical Stability",
      content: `
The small value ε is added:

√(s + ε)

This prevents division by zero when the accumulated state is zero or extremely small.
`
    },

    {
      type: "concept",
      title: "20. Sparse Optimization Example",
      content: `
Consider a text model with many vocabulary-related parameters.

Some features may appear frequently.

Others may be rare.

Adaptive coordinate-wise learning rates can help prevent frequently updated coordinates from dominating the optimization process.
`
    },

    {
      type: "concept",
      title: "21. AdaGrad and Deep Networks",
      content: `
AdaGrad can work for deep learning, but its continually shrinking learning rate can become problematic.

This limitation motivated later adaptive methods that use running averages rather than accumulating every squared gradient indefinitely.
`
    },

    {
      type: "concept",
      title: "22. From AdaGrad to RMSProp",
      content: `
AdaGrad:

accumulates all squared gradients

RMSProp:

uses a moving average of squared gradients

The key difference is how long the optimizer remembers gradient magnitudes.
`
    },

    {
      type: "concept",
      title: "23. AdaGrad Experiment",
      content: `
Use:

f(x1, x2)
=
0.1x1²
+
2x2²

Compare:

• SGD
• Momentum
• AdaGrad

Plot their trajectories.

Observe how coordinate-wise scaling changes the path.
`
    },

    {
      type: "concept",
      title: "24. Hyperparameter Selection",
      content: `
Important AdaGrad parameters include:

learning rate

and

epsilon

The learning rate controls the overall update scale.

Epsilon primarily provides numerical stability.
`
    },

    {
      type: "exercise",
      title: "Sparse Feature Experiment",
      content: `
Create synthetic features with different frequencies.

Train a model using AdaGrad.

Track the effective learning rate associated with:

• Frequently updated parameters
• Rarely updated parameters

Explain the difference.
`
    },

    {
      type: "exercise",
      title: "Compare Optimizers",
      content: `
Train the same model using:

1. SGD
2. Momentum
3. AdaGrad

Keep the dataset and model fixed.

Compare:

• Loss
• Accuracy
• Training time
• Stability
• Parameter trajectories
`
    },

    {
      type: "qa",
      question: "What makes AdaGrad adaptive?",
      answer:
        "It adjusts the effective learning rate separately for each parameter coordinate using accumulated squared gradients."
    },

    {
      type: "qa",
      question: "Why can AdaGrad help sparse features?",
      answer:
        "Parameters associated with infrequently occurring features may accumulate gradient history more slowly, allowing relatively larger effective learning rates."
    },

    {
      type: "qa",
      question: "What is the main limitation of AdaGrad?",
      answer:
        "The accumulated squared-gradient state continually grows, which can cause the effective learning rate to become excessively small."
    },

    {
      type: "qa",
      question: "Why is epsilon added?",
      answer:
        "To maintain numerical stability and prevent division by zero or extremely large updates."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
AdaGrad introduces coordinate-wise adaptive learning rates.

Its core state is:

s_t = s_(t-1) + g_t²

and its update scales each gradient coordinate using:

1 / √(s_t + ε)

The approach is useful for uneven and sparse optimization problems but can reduce learning rates too aggressively over long training runs.
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "AdaGrad adapts learning rates independently for different parameter coordinates by accumulating squared gradients, making it useful for sparse and uneven optimization problems."
    }
  ]
};

export default lesson7;
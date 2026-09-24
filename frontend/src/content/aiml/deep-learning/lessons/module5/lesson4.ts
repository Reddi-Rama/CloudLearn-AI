const lesson4 = {
  id: "lesson4",
  title: "Stochastic Gradient Descent",
  description:
    "Understand stochastic gradient descent, noisy gradients, learning rates, convergence, sampling, and why SGD is important for deep learning optimization.",
  duration: "100–120 min",
  difficulty: "Intermediate",

  prerequisites: [
    "Gradient descent",
    "Derivatives",
    "Loss functions",
    "Basic probability",
    "Neural network training"
  ],

  sections: [
    {
      type: "intro",
      title: "Introduction to Stochastic Gradient Descent",
      content: `
Stochastic Gradient Descent (SGD) is one of the fundamental optimization methods used in machine learning.

Instead of computing the gradient using the entire training dataset at every update, SGD uses a small amount of data to estimate the gradient.

The central idea is:

Data
↓
Estimate gradient
↓
Update parameters
↓
Repeat

This makes each individual update much cheaper than full-batch gradient descent.
`
    },

    {
      type: "concept",
      title: "1. Why Do We Need SGD?",
      content: `
Suppose a dataset contains one million training examples.

Full-batch gradient descent would need to process the entire dataset before making one parameter update.

That can be expensive.

SGD instead uses individual examples or small samples to make frequent updates.

This introduces noise into the gradient estimate, but it can dramatically reduce the computational cost of each update.
`
    },

    {
      type: "concept",
      title: "2. Full-Batch Gradient Descent",
      content: `
For parameters w, suppose the training loss is:

L(w)

Full-batch gradient descent computes:

∇L(w)

using all training examples.

The update is:

w_t = w_(t-1) - η ∇L(w_(t-1))

where:

w = model parameters
η = learning rate
∇L = gradient of the loss
`
    },

    {
      type: "concept",
      title: "3. Stochastic Gradient Idea",
      content: `
Instead of calculating the exact training-set gradient, choose a training example.

For example:

(x_t, y_t)

Then calculate:

g_t = ∇_w l(y_t, f(x_t, w))

The parameter update becomes:

w_t = w_(t-1) - η g_t

The gradient g_t is an estimate of the gradient of the complete objective.
`
    },

    {
      type: "formula",
      title: "4. SGD Update Rule",
      content: `
w_t = w_(t-1) - η g_t

where:

g_t = gradient estimated from the sampled training example

η = learning rate

The important difference from full-batch gradient descent is that g_t is based on a sample rather than the entire dataset.
`
    },

    {
      type: "concept",
      title: "5. Why the Gradient Becomes Noisy",
      content: `
Different training examples generally produce different gradients.

Example:

Example 1 → gradient A
Example 2 → gradient B
Example 3 → gradient C

These gradients do not necessarily point in exactly the same direction.

Therefore SGD updates fluctuate around the direction that would be obtained from the full dataset.
`
    },

    {
      type: "concept",
      title: "6. Gradient as an Estimate",
      content: `
The stochastic gradient is useful because it can be viewed as an estimate of the population or training objective gradient.

With appropriate random sampling, the average behavior of stochastic gradients can approximate the full gradient.

This is why SGD can make progress even though individual updates are noisy.
`
    },

    {
      type: "concept",
      title: "7. SGD and Computational Efficiency",
      content: `
Suppose there are N training examples.

Full-batch gradient descent:

N examples
↓
one gradient
↓
one update

SGD:

1 example
↓
one approximate gradient
↓
one update

The individual update is much cheaper.

However, more updates may be needed before the optimization process settles near a useful solution.
`
    },

    {
      type: "concept",
      title: "8. Learning Rate",
      content: `
The learning rate η controls the size of each parameter update.

If η is too small:

• Updates are tiny.
• Training can become very slow.
• Many iterations may be required.

If η is too large:

• Updates may overshoot useful regions.
• The objective can oscillate.
• Training may become unstable.
• Optimization may diverge.
`
    },

    {
      type: "concept",
      title: "9. Dynamic Learning Rates",
      content: `
A learning rate that works early in training may not be ideal later.

A common strategy is to decrease the learning rate as training progresses.

Conceptually:

large learning rate
↓
faster movement early
↓
smaller learning rate
↓
more controlled refinement
`
    },

    {
      type: "concept",
      title: "10. Why Not Keep the Learning Rate Extremely Small?",
      content: `
A very small learning rate can make optimization inefficient.

Suppose the gradient points toward a useful solution but each update moves only a tiny distance.

The model may require a very large number of iterations.

Therefore learning-rate selection is a trade-off between:

speed of progress

and

stability of optimization.
`
    },

    {
      type: "concept",
      title: "11. Sampling Strategy",
      content: `
SGD requires selecting training examples.

A common practical approach is to shuffle the training dataset and process examples in a new order during each pass.

This reduces systematic ordering effects and provides varied stochastic gradients.
`
    },

    {
      type: "concept",
      title: "12. Sampling With Replacement",
      content: `
Sampling with replacement means an example can be selected multiple times before another example is selected.

This creates an independent sampling process but may repeatedly select some examples.

The source notes that this increases variance and can reduce data efficiency compared with sampling without replacement.
`
    },

    {
      type: "concept",
      title: "13. Sampling Without Replacement",
      content: `
With sampling without replacement, examples are generally shuffled and each example is processed once during an epoch.

After another epoch, the order can be shuffled again.

This is common in practical machine-learning training pipelines.
`
    },

    {
      type: "concept",
      title: "14. SGD and Convex Objectives",
      content: `
For certain convex optimization problems, theoretical convergence results can be established for stochastic gradient methods under appropriate conditions.

These results provide intuition for learning-rate selection and convergence behavior.

Deep neural-network objectives are generally nonconvex, so these guarantees do not transfer directly to arbitrary deep-learning models.
`
    },

    {
      type: "concept",
      title: "15. SGD on Nonconvex Problems",
      content: `
Deep-learning loss surfaces may contain:

• Local minima
• Saddle points
• Flat regions
• Steep regions
• Different curvature along different directions

SGD navigates these surfaces using noisy gradient estimates.

The noise can make the optimization trajectory different from deterministic gradient descent.
`
    },

    {
      type: "concept",
      title: "16. SGD Noise",
      content: `
The randomness of SGD is not merely an implementation detail.

The update direction changes from one sample to another.

This produces a trajectory such as:

↘
  ↘
    ↗
      ↘
        ↘
          ↗

rather than the smooth trajectory of exact full-batch gradient descent.
`
    },

    {
      type: "concept",
      title: "17. Training Loss vs Generalization",
      content: `
Optimization attempts to reduce the training objective.

But successful deep learning is ultimately concerned with performance on unseen data.

Therefore:

optimization goal
≠
complete learning goal

A model can reduce training loss while still having poor generalization.

Regularization, architecture, data quality, and other factors matter in addition to optimization.
`
    },

    {
      type: "concept",
      title: "18. Basic SGD Algorithm",
      content: `
Initialize parameters.

Repeat:

1. Select a training example.
2. Compute prediction.
3. Compute loss.
4. Compute gradient.
5. Update parameters.
6. Continue.

Mathematically:

w ← w - ηg
`
    },

    {
      type: "code",
      language: "python",
      title: "SGD From Scratch",
      content: `
import torch

w = torch.tensor(
    [10.0],
    requires_grad=True
)

learning_rate = 0.1

for step in range(20):
    loss = (w - 3) ** 2

    loss.backward()

    with torch.no_grad():
        w -= learning_rate * w.grad

    w.grad.zero_()

    print(
        step,
        w.item(),
        loss.item()
    )
`
    },

    {
      type: "concept",
      title: "19. Why Zero the Gradient?",
      content: `
In PyTorch, gradients accumulate by default.

Therefore after using:

loss.backward()

the gradient should generally be cleared before the next update.

Common approaches include:

optimizer.zero_grad()

or manually resetting gradients when implementing optimization from scratch.
`
    },

    {
      type: "code",
      language: "python",
      title: "SGD With PyTorch Optimizer",
      content: `
import torch
from torch import nn

model = nn.Linear(10, 1)

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
      title: "20. SGD in a Neural Network",
      content: `
For a neural network:

Input
↓
Forward pass
↓
Prediction
↓
Loss
↓
Backward pass
↓
Gradient
↓
SGD update
↓
New parameters

This cycle repeats many times.
`
    },

    {
      type: "concept",
      title: "21. Epoch, Batch, and Step",
      content: `
Epoch:

One complete pass through the training dataset.

Step:

One optimizer update.

In pure SGD:

one training example
≈
one update

In minibatch SGD:

one minibatch
=
one update
`
    },

    {
      type: "concept",
      title: "22. SGD and Redundant Data",
      content: `
If many training examples are similar, calculating the full gradient every time may involve redundant computation.

SGD can exploit individual observations and make progress without processing the entire dataset for every update.
`
    },

    {
      type: "concept",
      title: "23. Practical Limitations",
      content: `
Pure SGD also has disadvantages.

Because each update uses very little data:

• Gradients are noisy.
• The trajectory may fluctuate.
• Hardware vectorization is limited.
• Individual updates may be inefficient on modern accelerators.
• A suitable learning rate is important.

These limitations motivate minibatch SGD.
`
    },

    {
      type: "concept",
      title: "24. SGD vs Full-Batch Gradient Descent",
      content: `
Full-batch:

Gradient uses all examples.

Advantages:
• Exact training-set gradient
• Smooth trajectory

Disadvantages:
• Expensive updates
• Large datasets are costly

SGD:

Gradient uses a sample.

Advantages:
• Cheap individual updates
• Frequent updates

Disadvantages:
• Noisy gradient
• Less hardware-efficient than minibatches
`
    },

    {
      type: "exercise",
      title: "Practice Exercise",
      content: `
Implement SGD for:

f(x) = x²

Start with:

x = 10

Experiment with:

η = 0.01
η = 0.1
η = 0.5
η = 1.1

Record the value of x after every update.

Explain why the learning-rate choice changes the trajectory.
`
    },

    {
      type: "exercise",
      title: "Experiment",
      content: `
Create a simple regression problem.

Train the same model using:

1. Full-batch gradient descent
2. SGD
3. Minibatch SGD

Record:

• Training time
• Number of updates
• Final training loss
• Validation loss
• Loss curve
`
    },

    {
      type: "qa",
      question: "What is the main idea behind SGD?",
      answer:
        "SGD estimates the gradient using a small amount of training data and updates model parameters frequently."
    },

    {
      type: "qa",
      question: "Why is SGD noisy?",
      answer:
        "Different training examples produce different gradient estimates, so individual updates fluctuate around the direction of the full objective gradient."
    },

    {
      type: "qa",
      question: "What happens if the learning rate is too large?",
      answer:
        "The optimization process can overshoot useful regions, oscillate, or diverge."
    },

    {
      type: "qa",
      question: "Why is SGD important for deep learning?",
      answer:
        "It allows optimization to make inexpensive parameter updates without computing the gradient over the entire training dataset each time."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Stochastic Gradient Descent replaces the exact full-dataset gradient with an estimate obtained from individual training examples.

Important ideas:

• Stochastic gradients
• Learning rate
• Noisy updates
• Sampling
• Convergence
• Learning-rate schedules
• Training vs generalization
• Nonconvex optimization

SGD is conceptually simple and forms the foundation for many more advanced optimization algorithms.
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "SGD trades exact gradients for inexpensive and frequent updates. Its randomness makes optimization noisy, but it provides an efficient foundation for training models on large datasets."
    }
  ]
};

export default lesson4;
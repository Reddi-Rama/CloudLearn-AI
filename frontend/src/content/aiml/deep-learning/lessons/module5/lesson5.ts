const lesson5 = {
  id: "lesson5",
  title: "Minibatch Stochastic Gradient Descent",
  description:
    "Learn how minibatches combine the computational advantages of SGD with efficient vectorized computation and hardware acceleration.",
  duration: "105–125 min",
  difficulty: "Intermediate",

  prerequisites: [
    "Gradient descent",
    "Stochastic gradient descent",
    "Tensor operations",
    "Batch processing",
    "Basic PyTorch"
  ],

  sections: [
    {
      type: "intro",
      title: "Why Minibatches?",
      content: `
Pure SGD processes one example at a time.

Full-batch gradient descent processes the entire dataset at once.

Minibatch stochastic gradient descent provides a practical middle ground.

Instead of:

1 example

or:

entire dataset

we process:

a small batch of examples.

This makes minibatch SGD particularly suitable for vectorized computation and modern hardware.
`
    },

    {
      type: "concept",
      title: "1. The Three Gradient Strategies",
      content: `
Full-batch:

Dataset
↓
Gradient
↓
Update

SGD:

Example
↓
Gradient
↓
Update

Minibatch SGD:

Small batch
↓
Average gradient
↓
Update
`
    },

    {
      type: "concept",
      title: "2. Minibatch Definition",
      content: `
A minibatch is a subset of the training dataset used to calculate one gradient estimate.

Suppose:

dataset size = 100,000

batch size = 128

Then one update processes approximately 128 examples.
`
    },

    {
      type: "formula",
      title: "3. Minibatch Gradient",
      content: `
For minibatch B_t:

g_t
=
(1 / |B_t|)
Σ ∇l_i(w)

The average gradient is then used to update the parameters:

w_t
=
w_(t-1) - ηg_t
`
    },

    {
      type: "concept",
      title: "4. Why Average the Gradients?",
      content: `
Averaging makes the gradient scale relatively stable as the batch size changes.

Without averaging, increasing the batch size would increase the magnitude of the summed gradient.

Most machine-learning training frameworks therefore use an average reduction for common losses.
`
    },

    {
      type: "concept",
      title: "5. Vectorization",
      content: `
Modern processors are designed to perform many numerical operations efficiently.

Instead of processing:

sample 1
sample 2
sample 3
sample 4

individually, a tensor library can process them as one tensor.

For example:

X shape:

(batch_size, features)

This allows matrix operations to process many examples together.
`
    },

    {
      type: "concept",
      title: "6. Why GPUs Prefer Minibatches",
      content: `
GPUs contain many computational units designed for parallel numerical operations.

A sufficiently large minibatch provides many independent calculations that can be executed in parallel.

Very small batches may fail to fully utilize the available hardware.
`
    },

    {
      type: "concept",
      title: "7. Batch Size",
      content: `
Batch size controls how many examples participate in one parameter update.

Small batch:

• More updates per epoch
• More gradient noise
• Lower memory usage

Large batch:

• Fewer updates per epoch
• More stable gradient estimate
• Higher memory usage
• Better hardware utilization in many situations

The ideal batch size depends on the model, data, and hardware.
`
    },

    {
      type: "concept",
      title: "8. Batch Size Is Not a Universal Constant",
      content: `
There is no single batch size that is optimal for every problem.

Possible values include:

16
32
64
128
256
512

The available GPU memory and training behavior should be considered when choosing it.
`
    },

    {
      type: "concept",
      title: "9. Epochs and Minibatches",
      content: `
Suppose:

dataset = 10,000 examples

batch size = 100

Approximately:

10,000 / 100
=
100 batches per epoch

Therefore one epoch contains approximately 100 optimizer updates.
`
    },

    {
      type: "concept",
      title: "10. Data Loader",
      content: `
A data loader handles:

• Batching
• Shuffling
• Iteration
• Optional parallel data loading

In PyTorch, DataLoader is commonly used for this purpose.
`
    },

    {
      type: "code",
      language: "python",
      title: "PyTorch DataLoader",
      content: `
from torch.utils.data import DataLoader

loader = DataLoader(
    dataset,
    batch_size=64,
    shuffle=True
)

for X, y in loader:
    print(X.shape)
    print(y.shape)
`
    },

    {
      type: "concept",
      title: "11. Shuffling",
      content: `
Shuffling changes the order in which training examples appear.

This prevents the model from repeatedly seeing examples in the same ordering.

It also changes minibatch composition between epochs.
`
    },

    {
      type: "concept",
      title: "12. Minibatch Training Loop",
      content: `
A standard training loop is:

for each epoch:

    shuffle dataset

    for each minibatch:

        zero gradients
        forward pass
        calculate loss
        backward pass
        optimizer step
`
    },

    {
      type: "code",
      language: "python",
      title: "Complete Minibatch Training Loop",
      content: `
for epoch in range(num_epochs):

    model.train()

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
      title: "13. Minibatch Gradient Noise",
      content: `
Minibatch gradients are still estimates.

A batch of 32 examples may produce a different gradient from another batch of 32 examples.

Therefore minibatch SGD retains some stochastic behavior while being much more computationally efficient than pure SGD.
`
    },

    {
      type: "concept",
      title: "14. Batch Size and Gradient Variance",
      content: `
Increasing the batch size generally makes the gradient estimate less noisy.

Conceptually:

small batch
→ higher variance

large batch
→ lower variance

However, larger batches require more computation and memory per update.
`
    },

    {
      type: "concept",
      title: "15. Batch Size and Learning Rate",
      content: `
Changing the batch size can change the optimization dynamics.

Therefore learning-rate choices should not be considered independently from batch size.

When experimenting with batch size, track:

• Loss
• Accuracy
• Training speed
• Gradient behavior
`
    },

    {
      type: "concept",
      title: "16. Minibatch and Vectorized Linear Regression",
      content: `
Suppose:

X shape = (batch, features)

Weights:

W shape = (features, output)

Then:

XW

can calculate predictions for the complete minibatch with one matrix operation.
`
    },

    {
      type: "code",
      language: "python",
      title: "Vectorized Prediction",
      content: `
import torch

X = torch.randn(32, 10)

W = torch.randn(10, 1)

b = torch.zeros(1)

y_hat = X @ W + b

print(y_hat.shape)
`
    },

    {
      type: "concept",
      title: "17. Why Vectorization Matters",
      content: `
Vectorization reduces Python-level loops and moves large numerical operations into optimized tensor kernels.

This can dramatically improve performance.

Therefore minibatches are not only a statistical compromise.

They are also a computational strategy.
`
    },

    {
      type: "concept",
      title: "18. Memory Trade-Off",
      content: `
Larger minibatches require more memory.

Memory is consumed by:

• Input tensors
• Activations
• Gradients
• Model parameters
• Optimizer states

If a batch is too large, the hardware may run out of memory.
`
    },

    {
      type: "concept",
      title: "19. Out-of-Memory Error",
      content: `
If GPU memory is insufficient, reduce:

• Batch size
• Image resolution
• Sequence length
• Model size

Other techniques can also help, such as mixed precision or gradient accumulation.
`
    },

    {
      type: "concept",
      title: "20. Gradient Accumulation",
      content: `
Gradient accumulation allows several smaller batches to contribute to one optimizer update.

Conceptually:

batch 1 → gradients
batch 2 → gradients
batch 3 → gradients
batch 4 → gradients
↓
optimizer update

This can approximate a larger effective batch without storing the entire large batch simultaneously.
`
    },

    {
      type: "concept",
      title: "21. Minibatch vs Pure SGD",
      content: `
Pure SGD:

batch size = 1

Minibatch SGD:

batch size > 1

Both use stochastic estimates.

The practical difference is computational organization and the amount of data used for each update.
`
    },

    {
      type: "concept",
      title: "22. Minibatch vs Full Batch",
      content: `
Full batch:

• Exact training-set gradient
• One update per full dataset pass
• High memory/computation per update

Minibatch:

• Approximate gradient
• Many updates per epoch
• Better vectorization
• More practical for large datasets
`
    },

    {
      type: "concept",
      title: "23. Reading Data Efficiently",
      content: `
A training pipeline should avoid making the GPU wait unnecessarily for data.

Important considerations include:

• Data loading workers
• Prefetching
• Efficient storage
• Tensor conversion
• Appropriate batch size

The optimization algorithm and input pipeline should work together.
`
    },

    {
      type: "concept",
      title: "24. Minibatches in Deep Learning",
      content: `
Almost all practical deep-learning training uses minibatches.

Typical pipeline:

Dataset
↓
DataLoader
↓
Minibatch
↓
GPU
↓
Forward
↓
Loss
↓
Backward
↓
Optimizer
`
    },

    {
      type: "code",
      language: "python",
      title: "Minibatch Linear Regression",
      content: `
import torch
from torch import nn

model = nn.Linear(10, 1)

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.01
)

criterion = nn.MSELoss()

for X, y in loader:

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
      title: "25. Common Minibatch Errors",
      content: `
Common mistakes include:

• Incorrect batch dimension
• Forgetting shuffle=True for training
• Using the wrong target shape
• Accidentally accumulating gradients
• Choosing a batch that exceeds memory
• Moving model to GPU but not data
• Using validation data as training data
`
    },

    {
      type: "exercise",
      title: "Batch Size Experiment",
      content: `
Train the same model using:

batch_size = 16
batch_size = 32
batch_size = 64
batch_size = 128

Record:

• Training time
• Number of steps
• Final loss
• Validation performance
• GPU memory usage
`
    },

    {
      type: "exercise",
      title: "Vectorization Exercise",
      content: `
Implement a matrix operation using:

1. Python loops
2. Tensor operations

Compare the execution time.

The objective is to understand why vectorization is central to efficient minibatch training.
`
    },

    {
      type: "qa",
      question: "What is a minibatch?",
      answer:
        "A minibatch is a subset of training examples used to estimate a gradient and perform one parameter update."
    },

    {
      type: "qa",
      question: "Why are minibatches computationally efficient?",
      answer:
        "They allow many examples to be processed simultaneously using vectorized tensor operations and parallel hardware."
    },

    {
      type: "qa",
      question: "What happens when batch size increases?",
      answer:
        "The gradient estimate generally becomes less noisy, but memory and computation per update increase."
    },

    {
      type: "qa",
      question: "Why shuffle the training dataset?",
      answer:
        "Shuffling changes minibatch composition and reduces undesirable effects caused by a fixed ordering of training examples."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Minibatch SGD combines the statistical behavior of stochastic optimization with the computational efficiency of vectorized operations.

Important concepts:

• Minibatches
• Batch size
• Vectorization
• Data loaders
• Shuffling
• GPU utilization
• Memory trade-offs
• Gradient noise
• Gradient accumulation

Minibatches are the practical foundation of most neural-network training pipelines.
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Minibatch SGD is the practical bridge between pure SGD and full-batch gradient descent: it provides noisy but useful gradient estimates while allowing efficient vectorized computation."
    }
  ]
};

export default lesson5;
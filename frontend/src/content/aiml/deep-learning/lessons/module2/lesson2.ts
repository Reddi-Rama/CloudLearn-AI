const lesson2 = {
  id: "lesson2",
  moduleId: "module2",
  lessonNumber: 2,

  title: "Vectorization and Efficient Computation",

  subtitle:
    "Using tensors and matrix operations to make machine learning computation efficient",

  description:
    "Learn why vectorized operations are essential for deep learning and how matrix and tensor operations replace slow element-by-element computation.",

  estimatedTime: "3–4 hours",

  difficulty: "Intermediate",

  learningObjectives: [
    "Understand what vectorization means.",
    "Understand why loops can be inefficient for numerical computation.",
    "Understand vector and matrix operations.",
    "Understand batch computation.",
    "Understand matrix-vector multiplication.",
    "Understand how linear regression can be vectorized.",
    "Use PyTorch tensors for efficient computation.",
    "Compare loop-based and vectorized implementations.",
    "Understand why vectorization becomes increasingly important for deep learning."
  ],

  sections: [
    {
      id: "introduction",
      title: "1. Why Efficient Computation Matters",

      content: `
Deep learning models perform enormous numbers of numerical operations.

A model may process:

• thousands of examples
• millions of parameters
• many layers
• multiple batches
• repeated training iterations

If every operation were performed using slow Python-level loops, training could become unnecessarily expensive.

Deep learning frameworks therefore rely heavily on optimized tensor operations.
`
    },

    {
      id: "vectorization",
      title: "2. What Is Vectorization?",

      content: `
Vectorization means expressing numerical computation using operations on entire arrays, vectors, or tensors instead of processing individual elements one at a time.

Instead of:

for each element
    calculate result

we can perform:

result = tensor_operation(input)

The underlying framework can then use optimized numerical libraries and hardware.
`
    },

    {
      id: "loop",
      title: "3. Element-by-Element Computation",

      content: `
Consider adding two vectors.

A straightforward implementation could process every element separately.

For vectors:

a = [a₁, a₂, a₃]

b = [b₁, b₂, b₃]

the result is:

[a₁+b₁, a₂+b₂, a₃+b₃]

A Python loop performs each addition separately.

This is easy to understand, but it does not take full advantage of optimized tensor computation.
`
    },

    {
      id: "tensor",
      title: "4. Tensor Operations",

      content: `
PyTorch allows the same operation to be expressed directly on tensors.

For example:

a + b

performs elementwise addition.

Likewise:

a * b

performs elementwise multiplication.

Matrix operations can also be expressed directly using tensor operators.

This gives a concise mathematical representation of the computation.
`
    },

    {
      id: "batch",
      title: "5. Batch Computation",

      content: `
Machine learning models usually process multiple examples together.

Suppose:

X

contains multiple examples.

Instead of calculating:

prediction(example 1)
prediction(example 2)
prediction(example 3)

individually, we can process the complete batch at once.

This is one of the central ideas behind efficient neural-network training.
`
    },

    {
      id: "matrix-vector",
      title: "6. Matrix-Vector Multiplication",

      content: `
Suppose:

X

is a matrix containing examples and features.

Suppose:

w

is a parameter vector.

Then:

Xw

computes the weighted combination of features for every example.

This is exactly the type of computation needed by linear regression.

Matrix operations therefore provide a natural representation of machine learning models.
`
    },

    {
      id: "linear-regression",
      title: "7. Vectorized Linear Regression",

      content: `
For a single example:

ŷ = w₁x₁ + w₂x₂ + ... + wₙxₙ + b

For many examples, we can represent the features as a matrix X.

Then the predictions can be written compactly as:

ŷ = Xw + b

Instead of explicitly writing a loop over examples and features, the complete computation can be expressed using tensor operations.
`
    },

    {
      id: "broadcasting",
      title: "8. Broadcasting",

      content: `
Tensor libraries often support broadcasting.

Broadcasting allows compatible tensors with different shapes to participate in operations without manually copying values.

For example, adding a scalar to a tensor applies the scalar across all elements.

Broadcasting is useful when adding biases to batches of model outputs.

Understanding tensor shapes is essential when using broadcasting.
`
    },

    {
      id: "shape",
      title: "9. Tensor Shapes",

      content: `
Before performing vectorized computation, always understand the tensor shapes.

For example:

X.shape = (batch_size, num_features)

w.shape = (num_features, 1)

Then:

X @ w

produces:

(batch_size, 1)

The dimensions must be compatible for matrix multiplication.

Many deep learning errors are ultimately tensor-shape errors.
`
    },

    {
      id: "performance",
      title: "10. Why Vectorization Is Faster",

      content: `
Vectorized operations can be faster because numerical frameworks can delegate computation to highly optimized implementations.

Depending on the hardware and operation, computation may use:

• optimized CPU instructions
• parallel processing
• optimized linear algebra libraries
• GPU kernels

Therefore, vectorization is not merely about shorter code.

It can fundamentally improve computational efficiency.
`
    },

    {
      id: "cpu-gpu",
      title: "11. Vectorization and Hardware",

      content: `
The benefits of vectorized computation become particularly important on GPUs.

GPUs are designed to perform large numbers of similar numerical operations in parallel.

Matrix multiplication and tensor operations map naturally to this type of hardware.

This is one reason modern deep learning frameworks represent data using tensors instead of ordinary Python lists.
`
    },

    {
      id: "example",
      title: "12. Vectorized Example",

      content: `
Suppose we have:

X =
[[1, 2],
 [3, 4],
 [5, 6]]

and:

w =
[10,
 20]

Then:

Xw

computes all three predictions together.

For the first example:

1(10) + 2(20) = 50

For the second:

3(10) + 4(20) = 110

For the third:

5(10) + 6(20) = 170

The entire calculation can be expressed as one matrix operation.
`
    },

    {
      id: "gradient-batch",
      title: "13. Vectorization During Training",

      content: `
Vectorization is not limited to prediction.

During training, we also want to calculate losses and gradients efficiently across batches.

A typical training step is:

Input batch
↓
Vectorized forward pass
↓
Loss computation
↓
Backward pass
↓
Parameter update

This process is repeated many times.

Efficient batch computation is therefore fundamental to practical training.
`
    },

    {
      id: "implementation",
      title: "14. PyTorch Implementation",

      content: `
PyTorch tensors support vectorized operations directly.

For example:

X @ w

performs matrix multiplication.

Likewise:

X + b

can use broadcasting when the shapes are compatible.

These operations form the computational building blocks of neural networks.
`
    },

    {
      id: "loop-vs-vector",
      title: "15. Loop-Based vs Vectorized Thinking",

      content: `
Loop-based thinking:

For every example:
    For every feature:
        calculate contribution

Vectorized thinking:

Represent the complete dataset as tensors.
Represent the complete parameter set as tensors.
Express the computation using tensor operations.

Deep learning programming requires becoming comfortable with the second approach.
`
    },

    {
      id: "practical",
      title: "16. Practical Rules for Vectorized Computation",

      content: `
When implementing numerical code:

1. Represent numerical data as tensors.
2. Understand tensor shapes.
3. Prefer tensor operations over Python loops.
4. Use matrix multiplication where appropriate.
5. Use broadcasting carefully.
6. Process examples in batches.
7. Verify results with small test cases.
8. Profile code when performance matters.

Vectorization should improve both clarity and efficiency.
`
    }
  ],

  codeExamples: [
    {
      title: "Elementwise Vector Addition",
      language: "python",

      code: `import torch

a = torch.tensor([
    1.0,
    2.0,
    3.0
])

b = torch.tensor([
    4.0,
    5.0,
    6.0
])

result = a + b

print(result)`,

      explanation:
        "Adds complete vectors using one tensor operation."
    },

    {
      title: "Vectorized Matrix Multiplication",
      language: "python",

      code: `import torch

X = torch.tensor([
    [1.0, 2.0],
    [3.0, 4.0],
    [5.0, 6.0]
])

w = torch.tensor([
    [10.0],
    [20.0]
])

result = X @ w

print(result)`,

      explanation:
        "Computes predictions for multiple examples using one matrix multiplication."
    },

    {
      title: "Broadcasting",
      language: "python",

      code: `import torch

X = torch.tensor([
    [1.0, 2.0],
    [3.0, 4.0],
    [5.0, 6.0]
])

b = 10.0

result = X + b

print(result)`,

      explanation:
        "The scalar bias is broadcast across every element of the tensor."
    },

    {
      title: "Vectorized Linear Model",
      language: "python",

      code: `import torch

X = torch.tensor([
    [1.0, 2.0],
    [3.0, 4.0],
    [5.0, 6.0]
])

w = torch.tensor([
    [2.0],
    [3.0]
])

b = 1.0

predictions = X @ w + b

print(predictions)`,

      explanation:
        "Computes predictions for an entire batch using matrix multiplication and broadcasting."
    },

    {
      title: "Inspect Tensor Shapes",
      language: "python",

      code: `import torch

X = torch.randn(32, 10)
w = torch.randn(10, 1)

print("X:", X.shape)
print("w:", w.shape)

y_hat = X @ w

print("y_hat:", y_hat.shape)`,

      explanation:
        "Shows how batch size and feature dimensions determine matrix multiplication compatibility."
    }
  ],

  formulas: [
    {
      name: "Matrix-vector product",
      formula: "y = Xw",
      meaning:
        "Computes the weighted combination of features for a batch of examples."
    },

    {
      name: "Vectorized linear regression",
      formula: "ŷ = Xw + b",
      meaning:
        "Computes predictions for an entire batch."
    }
  ],

  exercises: [
    {
      id: "ex1",
      difficulty: "Easy",
      question:
        "What is vectorization?"
    },

    {
      id: "ex2",
      difficulty: "Easy",
      question:
        "Why are tensor operations preferred over Python loops for numerical computation?"
    },

    {
      id: "ex3",
      difficulty: "Medium",
      question:
        "Given X with shape (32, 10) and w with shape (10, 1), what is the shape of X @ w?"
    },

    {
      id: "ex4",
      difficulty: "Medium",
      question:
        "Explain how matrix multiplication can compute predictions for an entire batch."
    },

    {
      id: "ex5",
      difficulty: "Medium",
      question:
        "What role does broadcasting play when adding a bias?"
    },

    {
      id: "ex6",
      difficulty: "Hard",
      question:
        "Explain why vectorization is particularly important when training deep learning models on GPUs."
    }
  ],

  codingExercises: [
    {
      id: "code1",
      title: "Vector Addition",
      task:
        "Create two large tensors and add them using a vectorized operation."
    },

    {
      id: "code2",
      title: "Batch Prediction",
      task:
        "Create a feature matrix and parameter vector and calculate predictions using matrix multiplication."
    },

    {
      id: "code3",
      title: "Broadcasting Experiment",
      task:
        "Create tensors with compatible shapes and experiment with broadcasting."
    },

    {
      id: "code4",
      title: "Vectorized Regression",
      task:
        "Implement a complete forward pass of linear regression using only tensor operations."
    },

    {
      id: "code5",
      title: "Performance Comparison",
      task:
        "Compare a loop-based implementation with a vectorized implementation using a large tensor."
    }
  ],

  debuggingExercises: [
    {
      id: "debug1",
      problem:
        "Matrix multiplication fails because the tensor dimensions are incompatible.",
      task:
        "Inspect both tensor shapes and determine which dimensions must match."
    },

    {
      id: "debug2",
      problem:
        "A bias tensor cannot be added to model output.",
      task:
        "Inspect the shapes and determine whether broadcasting is possible."
    },

    {
      id: "debug3",
      problem:
        "The vectorized implementation produces different results from the loop implementation.",
      task:
        "Compare the calculations on a very small dataset and identify the indexing or shape error."
    }
  ],

  practicalTask: {
    title: "Build a Vectorized Regression Forward Pass",

    objective:
      "Implement the prediction stage of a linear regression model entirely using tensor operations.",

    requirements: [
      "Create a batch of at least 100 examples.",
      "Use at least three features.",
      "Create a weight vector.",
      "Create a bias value.",
      "Calculate predictions using matrix multiplication.",
      "Use broadcasting for the bias.",
      "Print all relevant tensor shapes.",
      "Verify several predictions manually."
    ]
  },

  summary: [
    "Vectorization expresses numerical computation using arrays, vectors, matrices, or tensors.",
    "Vectorized operations avoid unnecessary Python-level loops.",
    "Matrix multiplication naturally represents many machine learning computations.",
    "A batch of examples can be processed simultaneously.",
    "Tensor shapes determine whether operations are valid.",
    "Broadcasting allows compatible tensors with different shapes to interact.",
    "Vectorized computation can take advantage of optimized CPU and GPU hardware.",
    "Efficient tensor computation is fundamental to practical deep learning."
  ],

  keyTakeaways: [
    "Think in tensors rather than individual numbers.",
    "Understand tensor shapes before performing operations.",
    "Prefer vectorized operations for numerical computation.",
    "Matrix multiplication is a fundamental operation in neural networks.",
    "Batch computation allows many examples to be processed together.",
    "Vectorization becomes increasingly important as models and datasets grow."
  ],

  nextLesson: "Linear Regression as a Neural Network"
};

export default lesson2;
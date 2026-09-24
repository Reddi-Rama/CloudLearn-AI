const lesson4 = {
  id: "lesson4",
  moduleId: "module1",
  lessonNumber: 4,

  title: "Linear Algebra for Deep Learning",

  subtitle:
    "Understanding scalars, vectors, matrices, tensors, products, reductions, and norms",

  description:
    "Build the linear algebra foundation required to understand neural network computations and modern deep learning models.",

  estimatedTime: "4–5 hours",

  difficulty: "Beginner to Intermediate",

  learningObjectives: [
    "Understand scalars.",
    "Understand vectors.",
    "Understand matrices.",
    "Understand tensors.",
    "Understand tensor shapes.",
    "Understand transposition.",
    "Understand elementwise operations.",
    "Understand reduction operations.",
    "Understand non-reduction sums.",
    "Understand dot products.",
    "Understand matrix-vector multiplication.",
    "Understand matrix-matrix multiplication.",
    "Understand L1 norms.",
    "Understand L2 norms.",
    "Understand Frobenius norms.",
    "Understand how norms represent magnitude and distance.",
    "Understand why linear algebra is fundamental to deep learning."
  ],

  sections: [
    {
      id: "why-linear-algebra",
      title: "1. Why Linear Algebra Matters",

      content: `
Deep learning models perform large numbers of numerical transformations.

Neural network layers commonly involve:

• vectors
• matrices
• tensors
• matrix multiplication
• elementwise operations
• reductions
• norms

A simple neural network layer can be represented as:

Y = XW + b

This expression already requires several linear algebra concepts.

X represents input data.

W represents model parameters.

b represents a bias.

Y represents the resulting output.

Understanding linear algebra therefore makes neural network computations easier to understand.
`
    },

    {
      id: "scalar",
      title: "2. Scalars",

      content: `
A scalar is a single numerical value.

Examples:

5

−2

3.14

A scalar has zero axes.

In mathematical notation, a scalar can be represented by a single symbol such as:

x

Scalars appear throughout machine learning.

Examples include:

• a single loss value
• a learning rate
• an individual parameter
• a probability
• a single measurement
`
    },

    {
      id: "vector",
      title: "3. Vectors",

      content: `
A vector is an ordered collection of numerical values.

For example:

[2, 4, 6]

A vector has one axis.

A vector containing n values can be viewed as an element of an n-dimensional space.

Vectors are commonly used to represent:

• features
• model parameters
• embeddings
• predictions
• gradients

The number of values determines the vector's dimension.
`
    },

    {
      id: "vector-geometry",
      title: "4. Geometric Intuition for Vectors",

      content: `
A vector can be interpreted geometrically.

In two dimensions:

[x, y]

can represent a point or a directed displacement.

In three dimensions:

[x, y, z]

can represent a position or direction.

Although we cannot directly visualize very high-dimensional vectors, the mathematical operations remain valid.

Deep learning frequently works with vectors containing hundreds, thousands, or more components.
`
    },

    {
      id: "matrix",
      title: "5. Matrices",

      content: `
A matrix contains values organized into rows and columns.

For example:

[1 2 3]
[4 5 6]

This matrix has:

2 rows

and:

3 columns.

Its shape is:

(2, 3)

Matrices are especially important because they can represent transformations between vector spaces.
`
    },

    {
      id: "transpose",
      title: "6. Transpose",

      content: `
The transpose exchanges rows and columns.

Suppose:

A =

[1 2 3]
[4 5 6]

The transpose is:

Aᵀ =

[1 4]
[2 5]
[3 6]

The original shape is:

(2, 3)

The transposed shape is:

(3, 2)

Transpose is frequently used in mathematical derivations and matrix operations.
`
    },

    {
      id: "tensor",
      title: "7. Tensors in Linear Algebra",

      content: `
A tensor generalizes the idea of scalars, vectors, and matrices.

A scalar has zero axes.

A vector has one axis.

A matrix has two axes.

A higher-order tensor can have three or more axes.

Examples:

Scalar:
()

Vector:
(5)

Matrix:
(3, 4)

Higher-order tensor:
(2, 3, 4)

Tensors are the main numerical objects used by deep learning frameworks.
`
    },

    {
      id: "tensor-shape",
      title: "8. Tensor Shape and Axes",

      content: `
The shape describes the length along each axis.

For a tensor with shape:

(2, 3, 4)

there are three axes.

The total number of elements is:

2 × 3 × 4 = 24

The first dimension has size 2.

The second dimension has size 3.

The third dimension has size 4.

Understanding axes is essential when performing reductions and tensor operations.
`
    },

    {
      id: "arithmetic",
      title: "9. Basic Tensor Arithmetic",

      content: `
Tensors can participate in arithmetic operations.

When two tensors have compatible shapes, elementwise operations can be performed.

For example:

X + Y

X − Y

X × Y

X / Y

The important point is that ordinary elementwise multiplication is different from matrix multiplication.

Elementwise multiplication is sometimes called the Hadamard product.

Each value is multiplied by the corresponding value.
`
    },

    {
      id: "hadamard",
      title: "10. Hadamard Product",

      content: `
The Hadamard product performs elementwise multiplication.

Suppose:

X = [1, 2, 3]

Y = [4, 5, 6]

Then:

X ⊙ Y

is:

[4, 10, 18]

The vectors must have compatible shapes for direct elementwise multiplication.

This operation should not be confused with the dot product or matrix multiplication.
`
    },

    {
      id: "reduction",
      title: "11. Reduction",

      content: `
A reduction combines multiple values into fewer values.

For example:

X = [1, 2, 3, 4]

The sum is:

1 + 2 + 3 + 4 = 10

The mean is:

10 / 4 = 2.5

Other reductions include:

• minimum
• maximum
• product

Reductions are useful for summarizing tensor values.
`
    },

    {
      id: "axis-reduction",
      title: "12. Reduction Along an Axis",

      content: `
For a multidimensional tensor, reduction can be performed along a selected axis.

Consider:

X =

[1 2 3]
[4 5 6]

Summing all values produces:

21

But summing along one axis produces a vector.

For example, summing each column gives:

[5, 7, 9]

Summing each row gives:

[6, 15]

The shape changes because one dimension has been reduced.
`
    },

    {
      id: "non-reduction",
      title: "13. Non-Reduction Sum",

      content: `
Sometimes we want to calculate a sum while preserving the dimension.

This can be useful when the result needs to remain compatible with the original tensor shape.

Conceptually:

X
↓
Sum along an axis
↓
Keep the reduced dimension

This is useful when preparing results for subsequent broadcasting or tensor operations.
`
    },

    {
      id: "dot",
      title: "14. Dot Product",

      content: `
The dot product combines two vectors into a scalar.

Suppose:

x = [x₁, x₂, x₃]

and:

y = [y₁, y₂, y₃]

Then:

x · y

is:

x₁y₁ + x₂y₂ + x₃y₃

For example:

x = [1, 2, 3]

y = [4, 5, 6]

Then:

x · y

= 1×4 + 2×5 + 3×6

= 4 + 10 + 18

= 32

The dot product is fundamental to linear models and neural network layers.
`
    },

    {
      id: "dot-intuition",
      title: "15. Geometric Meaning of the Dot Product",

      content: `
The dot product also has a geometric interpretation.

For vectors x and y:

x · y = ||x|| ||y|| cos(θ)

where θ is the angle between the vectors.

This means the dot product contains information about both:

• magnitude
• directional relationship

If two nonzero vectors point in the same direction, their cosine similarity is positive and large.

If they are perpendicular, the dot product is zero.

If they point in opposite directions, the dot product is negative.
`
    },

    {
      id: "matrix-vector",
      title: "16. Matrix-Vector Multiplication",

      content: `
A matrix can transform a vector.

Suppose:

A has shape:

(m, n)

and:

x has shape:

(n)

Then:

Ax

has shape:

(m)

Each output component is obtained using a dot product between a row of A and the vector x.

For example:

A =

[1 2]
[3 4]

x =

[5]
[6]

Then:

Ax =

[1×5 + 2×6]
[3×5 + 4×6]

=

[17]
[39]

Matrix-vector multiplication is fundamental to neural network computation.
`
    },

    {
      id: "matrix-matrix",
      title: "17. Matrix-Matrix Multiplication",

      content: `
Matrix multiplication combines two matrices.

Suppose:

A has shape:

(m, n)

and:

B has shape:

(n, p)

Then:

AB

has shape:

(m, p)

The inner dimensions must match.

For example:

(2, 3) × (3, 4)

is valid.

The result has shape:

(2, 4)

This rule is extremely important when debugging neural network shapes.
`
    },

    {
      id: "matrix-example",
      title: "18. Matrix Multiplication Example",

      content: `
Consider:

A =

[1 2]
[3 4]

and:

B =

[5 6]
[7 8]

Then:

AB =

[1×5 + 2×7    1×6 + 2×8]
[3×5 + 4×7    3×6 + 4×8]

Therefore:

AB =

[19 22]
[43 50]

Notice that matrix multiplication is not elementwise multiplication.

Elementwise multiplication would instead calculate:

[1×5, 2×6]
[3×7, 4×8]

which gives:

[5 12]
[21 32]

These are different operations.
`
    },

    {
      id: "linear-layer",
      title: "19. Connection to Neural Networks",

      content: `
A fully connected neural network layer commonly performs a computation similar to:

Y = XW + b

Here:

X = input matrix

W = weight matrix

b = bias

Y = output

The matrix multiplication:

XW

performs the major linear transformation.

The bias is then added.

An activation function may subsequently transform the result.

Therefore, understanding matrix multiplication is essential for understanding neural network layers.
`
    },

    {
      id: "norms",
      title: "20. Norms",

      content: `
A norm provides a mathematical way to measure magnitude.

For a vector, a norm can be interpreted as a measure of its size.

Norms can also be used to measure the distance between two vectors.

If x and y are vectors, their difference is:

x − y

A norm of the difference can measure how far apart the vectors are.

Norms appear frequently in optimization and machine learning objectives.
`
    },

    {
      id: "l1",
      title: "21. L1 Norm",

      content: `
The L1 norm of a vector is the sum of the absolute values of its components.

For:

x = [x₁, x₂, ..., xₙ]

the L1 norm is:

||x||₁ = |x₁| + |x₂| + ... + |xₙ|

For example:

x = [−2, 3, −4]

Then:

||x||₁

= 2 + 3 + 4

= 9

The L1 norm is less sensitive to large individual values than the L2 norm.
`
    },

    {
      id: "l2",
      title: "22. L2 Norm",

      content: `
The L2 norm is the square root of the sum of squared components.

For:

x = [x₁, x₂, ..., xₙ]

the L2 norm is:

||x||₂ = √(x₁² + x₂² + ... + xₙ²)

For:

x = [3, 4]

we obtain:

||x||₂ = √(3² + 4²)

= √25

= 5

The L2 norm corresponds to the familiar Euclidean length of a vector.
`
    },

    {
      id: "lp",
      title: "23. General Lp Norm",

      content: `
The L1 and L2 norms are special cases of a broader family.

The Lp norm can be written conceptually as:

||x||ₚ = (Σ |xᵢ|ᵖ)^(1/p)

Different choices of p produce different notions of magnitude.

Important cases include:

p = 1 → L1 norm

p = 2 → L2 norm

Norms provide useful mathematical tools for measuring size and distance.
`
    },

    {
      id: "frobenius",
      title: "24. Frobenius Norm",

      content: `
For matrices, the Frobenius norm is defined as the square root of the sum of squared entries.

For matrix X:

||X||F = √(Σᵢ Σⱼ xᵢⱼ²)

For example:

X =

[1 2]
[3 4]

Then:

||X||F

= √(1² + 2² + 3² + 4²)

= √30

The Frobenius norm can be thought of as applying an L2-style measurement to all matrix entries.
`
    },

    {
      id: "distance",
      title: "25. Norms as Distance Measures",

      content: `
Suppose two vectors are:

x

and:

y

Their difference is:

x − y

A norm of this difference can measure their distance.

For example:

distance = ||x − y||₂

This idea appears throughout machine learning.

We may want:

• predictions close to targets
• representations of similar examples close together
• representations of different examples separated
• model parameters constrained in magnitude

Norms therefore provide useful mathematical objectives.
`
    },

    {
      id: "deep-learning",
      title: "26. Linear Algebra Inside Deep Learning",

      content: `
Linear algebra appears throughout neural networks.

Input data can be represented by tensors.

Weights can be represented by matrices.

Biases can be represented by vectors.

Layers perform matrix multiplication.

Activations are often elementwise operations.

Losses may involve reductions.

Regularization can involve norms.

A simplified neural network computation is:

Input Tensor
↓
Matrix Multiplication
↓
Bias Addition
↓
Activation
↓
Next Layer
↓
Output
`
    },

    {
      id: "shape-rules",
      title: "27. Shape Rules to Remember",

      content: `
Several shape rules are especially important.

Vector:

(n)

Matrix:

(m, n)

Matrix-vector multiplication:

(m, n) × (n) → (m)

Matrix-matrix multiplication:

(m, n) × (n, p) → (m, p)

The inner dimensions must match.

For matrix multiplication:

A(m,n) × B(n,p)

the result is:

C(m,p)

When a matrix multiplication error occurs, inspect the shapes of both operands first.
`
    },

    {
      id: "hadamard-vs-matmul",
      title: "28. Hadamard Product vs Matrix Multiplication",

      content: `
These operations must not be confused.

Hadamard product:

X ⊙ Y

multiplies corresponding elements.

Matrix multiplication:

XY

combines rows and columns using dot products.

For example:

Hadamard:

[1 2] ⊙ [3 4]

=

[3 8]

Matrix multiplication:

[1 2] [3]
[4 5] [6]

is calculated through row-column dot products.

The resulting shapes and meanings are different.
`
    },

    {
      id: "computational-cost",
      title: "29. Why Matrix Operations Matter Computationally",

      content: `
Deep learning models perform enormous numbers of matrix and tensor operations.

The computational cost of these operations affects training speed.

Matrix multiplication can become expensive as dimensions increase.

Modern deep learning systems therefore use highly optimized numerical libraries and hardware accelerators.

GPUs are particularly useful because many numerical operations can be executed in parallel.

This is one reason efficient tensor libraries are fundamental to modern deep learning.
`
    },

    {
      id: "complete-picture",
      title: "30. Complete Linear Algebra Picture",

      content: `
The main mathematical objects can be organized as:

Scalar
↓
Vector
↓
Matrix
↓
Tensor

The main operations include:

Elementwise Operations
Reduction
Dot Product
Matrix-Vector Product
Matrix-Matrix Product
Norms

These operations provide the mathematical vocabulary required to understand neural network layers.

The next mathematical topics build on this foundation through calculus and gradients.
`
    }
  ],

  codeExamples: [
    {
      title: "Scalars, Vectors, and Matrices",
      language: "python",

      code: `import torch

scalar = torch.tensor(5)

vector = torch.tensor([
    1,
    2,
    3
])

matrix = torch.tensor([
    [1, 2],
    [3, 4]
])

print(scalar)
print(vector)
print(matrix)`,

      explanation:
        "Creates examples of zero-, one-, and two-dimensional tensors."
    },

    {
      title: "Transpose",
      language: "python",

      code: `import torch

X = torch.tensor([
    [1, 2, 3],
    [4, 5, 6]
])

print(X.T)`,

      output: `tensor([
    [1, 4],
    [2, 5],
    [3, 6]
])`,

      explanation:
        "Transposes a matrix by exchanging rows and columns."
    },

    {
      title: "Reduction",
      language: "python",

      code: `import torch

X = torch.tensor([
    [1.0, 2.0, 3.0],
    [4.0, 5.0, 6.0]
])

print(X.sum())
print(X.sum(dim=0))
print(X.sum(dim=1))`,

      output: `tensor(21.)
tensor([5., 7., 9.])
tensor([ 6., 15.])`,

      explanation:
        "Demonstrates complete and axis-specific reductions."
    },

    {
      title: "Dot Product",
      language: "python",

      code: `import torch

x = torch.tensor([
    1.0,
    2.0,
    3.0
])

y = torch.tensor([
    4.0,
    5.0,
    6.0
])

result = torch.dot(x, y)

print(result)`,

      output: `tensor(32.)`,

      explanation:
        "Calculates the dot product of two vectors."
    },

    {
      title: "Matrix-Vector Product",
      language: "python",

      code: `import torch

A = torch.tensor([
    [1.0, 2.0],
    [3.0, 4.0]
])

x = torch.tensor([
    5.0,
    6.0
])

result = torch.mv(A, x)

print(result)`,

      output: `tensor([17., 39.])`,

      explanation:
        "Multiplies a matrix by a compatible vector."
    },

    {
      title: "Matrix-Matrix Multiplication",
      language: "python",

      code: `import torch

A = torch.tensor([
    [1.0, 2.0],
    [3.0, 4.0]
])

B = torch.tensor([
    [5.0, 6.0],
    [7.0, 8.0]
])

result = torch.mm(A, B)

print(result)`,

      output: `tensor([
    [19., 22.],
    [43., 50.]
])`,

      explanation:
        "Performs matrix multiplication."
    },

    {
      title: "L1 and L2 Norms",
      language: "python",

      code: `import torch

x = torch.tensor([
    3.0,
    4.0
])

l1 = torch.abs(x).sum()
l2 = torch.norm(x)

print(l1)
print(l2)`,

      output: `tensor(7.)
tensor(5.)`,

      explanation:
        "Calculates the L1 and L2 norms of a vector."
    },

    {
      title: "Frobenius Norm",
      language: "python",

      code: `import torch

X = torch.tensor([
    [1.0, 2.0],
    [3.0, 4.0]
])

print(torch.norm(X))`,

      output: `tensor(5.4772)`,

      explanation:
        "Computes the Frobenius norm of the matrix."
    }
  ],

  mathematicalIntuition: [
    {
      title: "Scalar",
      formula: "x",
      explanation:
        "A single numerical value."
    },

    {
      title: "Vector",
      formula: "x = [x₁, x₂, ..., xₙ]",
      explanation:
        "An ordered collection of values along one axis."
    },

    {
      title: "Dot Product",
      formula: "x · y = Σ xᵢyᵢ",
      explanation:
        "Combines two vectors into a scalar."
    },

    {
      title: "Matrix Multiplication",
      formula: "C = AB",
      explanation:
        "Each result entry is obtained from a row-column dot product."
    },

    {
      title: "L1 Norm",
      formula: "||x||₁ = Σ|xᵢ|",
      explanation:
        "Measures vector magnitude using absolute values."
    },

    {
      title: "L2 Norm",
      formula: "||x||₂ = √(Σxᵢ²)",
      explanation:
        "Measures Euclidean vector magnitude."
    },

    {
      title: "Frobenius Norm",
      formula: "||X||F = √(ΣᵢΣⱼxᵢⱼ²)",
      explanation:
        "Measures matrix magnitude using the squared entries."
    }
  ],

  shapePractice: [
    {
      question: "What is the shape of a vector containing 8 values?",
      answer: "(8)"
    },

    {
      question: "What is the shape of a matrix with 3 rows and 5 columns?",
      answer: "(3, 5)"
    },

    {
      question: "What is the result shape of (3,4) × (4,2)?",
      answer: "(3,2)"
    },

    {
      question: "Is (3,4) × (3,2) valid matrix multiplication?",
      answer: "No. The inner dimensions 4 and 3 do not match."
    }
  ],

  exercises: [
    {
      id: "ex1",
      difficulty: "Easy",
      question:
        "Define scalar, vector, matrix, and tensor."
    },

    {
      id: "ex2",
      difficulty: "Easy",
      question:
        "Explain the difference between elementwise multiplication and matrix multiplication."
    },

    {
      id: "ex3",
      difficulty: "Medium",
      question:
        "Calculate the dot product of [1,2,3] and [4,5,6]."
    },

    {
      id: "ex4",
      difficulty: "Medium",
      question:
        "Calculate the L1 and L2 norms of [3,4]."
    },

    {
      id: "ex5",
      difficulty: "Medium",
      question:
        "Determine whether matrices with shapes (2,3) and (3,5) can be multiplied."
    },

    {
      id: "ex6",
      difficulty: "Hard",
      question:
        "Explain why matrix multiplication is central to fully connected neural network layers."
    },

    {
      id: "ex7",
      difficulty: "Hard",
      question:
        "Explain how norms can be used to measure the distance between two representations."
    }
  ],

  codingExercises: [
    {
      id: "code1",
      title: "Vector Calculator",
      task:
        "Create a program that calculates vector addition, subtraction, dot product, L1 norm, and L2 norm."
    },

    {
      id: "code2",
      title: "Matrix Calculator",
      task:
        "Create a program that performs transpose, elementwise multiplication, and matrix multiplication."
    },

    {
      id: "code3",
      title: "Shape Analyzer",
      task:
        "Create a program that prints tensor shapes and determines whether matrix multiplication is valid."
    },

    {
      id: "code4",
      title: "Neural Layer Calculation",
      task:
        "Implement Y = XW + b using PyTorch tensors."
    },

    {
      id: "code5",
      title: "Distance Calculator",
      task:
        "Calculate L1 and L2 distances between two vectors."
    }
  ],

  debuggingExercises: [
    {
      id: "debug1",
      problem:
        "A developer attempts to multiply matrices with shapes (2,3) and (2,4).",
      task:
        "Explain why the operation fails."
    },

    {
      id: "debug2",
      problem:
        "A developer expects elementwise multiplication to produce the same result as matrix multiplication.",
      task:
        "Explain the difference."
    },

    {
      id: "debug3",
      problem:
        "A vector unexpectedly has shape (3,1) instead of (3,).",
      task:
        "Explain why this can affect later matrix operations."
    },

    {
      id: "debug4",
      problem:
        "A developer reduces a matrix along the wrong dimension.",
      task:
        "Explain how inspecting the resulting shape can reveal the mistake."
    }
  ],

  practicalTask: {
    title: "Build a Linear Algebra Laboratory",

    difficulty: "Intermediate",

    objective:
      "Create a Python program that demonstrates the main linear algebra operations used in deep learning.",

    requirements: [
      "Create scalars.",
      "Create vectors.",
      "Create matrices.",
      "Create higher-dimensional tensors.",
      "Display shapes.",
      "Transpose matrices.",
      "Perform elementwise operations.",
      "Perform reductions.",
      "Calculate dot products.",
      "Perform matrix-vector multiplication.",
      "Perform matrix-matrix multiplication.",
      "Calculate L1 norms.",
      "Calculate L2 norms.",
      "Calculate Frobenius norms."
    ]
  },

  summary: [
    "Scalars have zero axes.",
    "Vectors have one axis.",
    "Matrices have two axes.",
    "Tensors generalize these structures to arbitrary numbers of axes.",
    "Elementwise multiplication is different from matrix multiplication.",
    "Reduction operations summarize tensor values.",
    "Dot products combine two vectors into a scalar.",
    "Matrix-vector multiplication transforms vectors.",
    "Matrix-matrix multiplication combines linear transformations.",
    "L1 and L2 norms measure vector magnitude.",
    "The Frobenius norm measures matrix magnitude.",
    "Norms can measure distances between representations.",
    "Linear algebra is fundamental to neural network computation."
  ],

  keyTakeaways: [
    "Understand the hierarchy from scalars to tensors.",
    "Understand tensor shapes and axes.",
    "Distinguish Hadamard products from matrix multiplication.",
    "Understand reductions.",
    "Understand dot products.",
    "Understand matrix-vector products.",
    "Understand matrix-matrix products.",
    "Understand L1 and L2 norms.",
    "Understand the Frobenius norm.",
    "Understand how these operations appear inside neural networks."
  ],

  nextLesson: "Lesson 5 — Calculus for Deep Learning"
};

export default lesson4;
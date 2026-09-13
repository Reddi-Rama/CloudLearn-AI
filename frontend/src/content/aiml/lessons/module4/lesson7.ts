const lesson7 = {
  title: "Matrix Operations & Matrix Computation",

  content: `
# Matrix Operations & Matrix Computation

## What You Will Learn

In this lesson, you will learn how matrices are mathematically combined and transformed in AI systems.

You will learn:

- Matrix addition
- Matrix subtraction
- Scalar multiplication
- Element-wise multiplication
- Matrix multiplication
- Dot products
- Shape compatibility
- Matrix transpose
- Identity matrices
- Matrix-vector multiplication
- Linear transformations
- Weighted feature computation
- NumPy implementation
- Matrix operations in machine learning and neural networks

The central idea is:

Matrix
    ↓
Matrix Operation
    ↓
Numerical Transformation
    ↓
Model Computation
    ↓
AI Output

---

# 1. Matrix Addition

Two matrices can be added when they have the same shape.

Consider:

A =
[
  1 2
  3 4
]

B =
[
  5 6
  7 8
]

Then:

A + B

=
[
  6  8
  10 12
]

Each corresponding element is added.

---

# 2. Matrix Addition With NumPy

Example:

import numpy as np

A = np.array([
    [1, 2],
    [3, 4]
])

B = np.array([
    [5, 6],
    [7, 8]
])

C = A + B

print(C)

Output:

[
 [6 8]
 [10 12]
]

The matrices have the same shape:

(2, 2)

so addition is valid.

---

# 3. Mathematical Definition

If:

A = [aij]

and:

B = [bij]

then:

C = A + B

where:

cij = aij + bij

Addition happens element by element.

---

# 4. Matrix Subtraction

Consider:

A =
[
  5 7
  9 11
]

B =
[
  1 2
  3 4
]

Then:

A - B

=
[
  4 5
  6 7
]

Python:

A = np.array([
    [5, 7],
    [9, 11]
])

B = np.array([
    [1, 2],
    [3, 4]
])

print(
    A - B
)

---

# 5. Scalar Multiplication

A matrix can be multiplied by a scalar.

Example:

A =
[
  1 2
  3 4
]

Multiply by:

3

Then:

3A =
[
  3  6
  9 12
]

Python:

A = np.array([
    [1, 2],
    [3, 4]
])

print(
    3 * A
)

Output:

[
 [3 6]
 [9 12]
]

Every element is multiplied by the scalar.

---

# 6. Element-Wise Matrix Multiplication

Suppose:

A =
[
  1 2
  3 4
]

B =
[
  5 6
  7 8
]

Element-wise multiplication gives:

A * B

=
[
  1×5  2×6
  3×7  4×8
]

=
[
  5 12
  21 32
]

Python:

print(
    A * B
)

Output:

[
 [5 12]
 [21 32]
]

This is NOT matrix multiplication.

It is element-wise multiplication.

---

# 7. Matrix Multiplication

Matrix multiplication is different from element-wise multiplication.

Suppose:

A =
[
  1 2
  3 4
]

and:

B =
[
  5 6
  7 8
]

Then:

AB =
[
  (1×5)+(2×7)   (1×6)+(2×8)
  (3×5)+(4×7)   (3×6)+(4×8)
]

Calculate:

First element:

1×5 + 2×7

= 5 + 14

= 19

Second element:

1×6 + 2×8

= 6 + 16

= 22

Third:

3×5 + 4×7

= 15 + 28

= 43

Fourth:

3×6 + 4×8

= 18 + 32

= 50

Therefore:

AB =
[
  19 22
  43 50
]

---

# 8. Matrix Multiplication With NumPy

Use:

A @ B

Example:

A = np.array([
    [1, 2],
    [3, 4]
])

B = np.array([
    [5, 6],
    [7, 8]
])

C = A @ B

print(C)

Output:

[
 [19 22]
 [43 50]
]

We can also use:

np.matmul(A, B)

---

# 9. Element-Wise vs Matrix Multiplication

For:

A =
[
  1 2
  3 4
]

B =
[
  5 6
  7 8
]

Element-wise:

A * B

gives:

[
  5 12
  21 32
]

Matrix multiplication:

A @ B

gives:

[
  19 22
  43 50
]

These are completely different operations.

This distinction is extremely important in AI mathematics.

---

# 10. Matrix Multiplication Rule

Suppose:

A

has shape:

m × n

and:

B

has shape:

n × p

Then:

AB

is valid and produces:

m × p

matrix.

The inner dimensions must match.

Example:

A:

2 × 3

B:

3 × 4

Then:

AB

has shape:

2 × 4

---

# 11. Shape Compatibility

Suppose:

A.shape = (2, 3)

and:

B.shape = (3, 4)

Then:

A @ B

is valid because:

3 = 3

The result has shape:

(2, 4)

But if:

B.shape = (2, 4)

then:

A @ B

is not valid because:

3 != 2

Therefore:

inner dimensions must match.

---

# 12. Mathematical Interpretation

Suppose:

A ∈ R^(m × n)

and:

B ∈ R^(n × p)

Then:

AB ∈ R^(m × p)

This notation describes the shape compatibility mathematically.

Understanding this becomes essential when working with neural networks.

---

# 13. Matrix-Vector Multiplication

Suppose:

A =
[
  1 2
  3 4
]

and:

x =
[
  5
  6
]

Then:

Ax =
[
  1×5 + 2×6
  3×5 + 4×6
]

=

[
  17
  39
]

Python:

import numpy as np

A = np.array([
    [1, 2],
    [3, 4]
])

x = np.array([
    5,
    6
])

result = A @ x

print(result)

Output:

[17 39]

---

# 14. Matrix-Vector Multiplication in AI

Suppose:

x

is a feature vector:

x =
[
  study_hours
  attendance
]

and:

W

is a matrix of weights.

Then:

Wx

produces a transformed vector.

This provides a mathematical foundation for many machine-learning and neural-network computations.

---

# 15. Linear Transformation

A matrix can transform a vector.

Suppose:

A =
[
  2 0
  0 3
]

and:

x =
[
  1
  2
]

Then:

Ax =
[
  2×1 + 0×2
  0×1 + 3×2
]

=

[
  2
  6
]

The first coordinate is scaled by:

2

and the second by:

3

This is a simple example of a linear transformation.

---

# 16. Weighted Feature Transformation

Suppose:

x =
[
  5
  8
]

and:

W =
[
  2 1
  3 4
]

Then:

Wx

is:

First component:

2×5 + 1×8

= 18

Second:

3×5 + 4×8

= 47

Therefore:

Wx =
[
  18
  47
]

Python:

W = np.array([
    [2, 1],
    [3, 4]
])

x = np.array([
    5,
    8
])

print(
    W @ x
)

Output:

[18 47]

---

# 17. Matrix Addition in Model Parameters

Suppose a parameter matrix:

W

is updated by:

Delta W

Then:

W_new = W + Delta W

This simple mathematical idea appears in optimization.

The exact method used to calculate:

Delta W

depends on the learning algorithm.

---

# 18. Identity Matrix

The identity matrix acts like:

1

in ordinary multiplication.

For:

I =
[
  1 0
  0 1
]

we have:

AI = A

and:

IA = A

for compatible matrices.

Python:

I = np.eye(2)

A = np.array([
    [3, 4],
    [5, 6]
])

print(
    A @ I
)

Output:

[
 [3 4]
 [5 6]
]

---

# 19. Transpose

Recall:

A =
[
  1 2 3
  4 5 6
]

Transpose:

A.T =
[
  1 4
  2 5
  3 6
]

Python:

A = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

print(
    A.T
)

The shape changes from:

(2, 3)

to:

(3, 2)

---

# 20. Transpose and Matrix Multiplication

Suppose:

X

has shape:

(n, d)

Then:

X.T

has shape:

(d, n)

Now:

X.T @ X

has shape:

(d, d)

when dimensions are compatible.

This type of expression appears frequently in linear algebra and machine learning.

---

# 21. A Simple AI Weighted Model

Suppose:

x =
[
  5
  80
]

where:

5 = Study Hours

80 = Attendance

Weights:

w =
[
  8
  0.5
]

The weighted score is:

w · x

=

8×5 + 0.5×80

=

40 + 40

=

80

Add bias:

b = 10

Prediction:

y_hat = 80 + 10

= 90

Python:

x = np.array([
    5,
    80
])

w = np.array([
    8,
    0.5
])

b = 10

prediction = (
    w @ x
    + b
)

print(prediction)

Output:

90.0

The dot product and matrix multiplication ideas therefore connect directly to a simple prediction model.

---

# 22. Batch Computation

Suppose we have multiple observations:

X =
[
  5 80
  6 85
  3 70
]

and:

w =
[
  8
  0.5
]

Then:

Xw

produces one weighted result per row.

Python:

X = np.array([
    [5, 80],
    [6, 85],
    [3, 70]
])

w = np.array([
    8,
    0.5
])

scores = X @ w

print(scores)

Output:

[ 80.   90.5  59. ]

Add a bias:

b = 10

predictions = X @ w + b

print(predictions)

Output:

[90.  100.5 69. ]

This is a very important idea:

One mathematical operation can be applied to many observations simultaneously.

---

# 23. Broadcasting the Bias

Suppose:

X @ w

produces:

[80, 90.5, 59]

and:

b = 10

Then:

X @ w + b

produces:

[90, 100.5, 69]

The scalar bias is added to every prediction.

This is broadcasting.

---

# 24. Matrix Operations in Neural Networks

A simplified neural-network layer can be represented as:

z = Wx + b

where:

W = weight matrix

x = input vector

b = bias vector

z = transformed output

Then an activation function may be applied:

a = f(z)

So:

x
 ↓
Wx + b
 ↓
Activation Function
 ↓
Output

This simple equation is one of the mathematical foundations of neural-network computation.

---

# 25. Complete Neural-Layer Example

Suppose:

W =
[
  2 1
  3 4
]

x =
[
  5
  8
]

b =
[
  1
  2
]

First:

Wx

=

[
  18
  47
]

Then:

Wx + b

=

[
  19
  49
]

Python:

W = np.array([
    [2, 1],
    [3, 4]
])

x = np.array([
    5,
    8
])

b = np.array([
    1,
    2
])

z = W @ x + b

print(z)

Output:

[19 49]

The result is the pre-activation vector.

A later activation function could transform it further.

---

# 26. Matrix Operations and Feature Transformation

Suppose:

X

contains:

100 observations

and:

4 features.

A transformation matrix:

W

can be used to transform the features.

For example:

X.shape = (100, 4)

If:

W.shape = (4, 3)

then:

X @ W

produces:

(100, 3)

because:

100 × 4

multiplied by:

4 × 3

produces:

100 × 3

This is a powerful mathematical pattern in AI.

---

# 27. Dimension Tracking

Suppose:

X ∈ R^(100 × 4)

and:

W ∈ R^(4 × 3)

Then:

XW ∈ R^(100 × 3)

This notation tells us:

100 observations

4 input features

3 transformed features

Dimension tracking is one of the most important habits when working with matrices.

---

# 28. Practical Experiment — Matrix Multiplication

Create:

A =
[
  1 2
  3 4
]

B =
[
  5 6
  7 8
]

Calculate:

1. A + B
2. A - B
3. A * B
4. A @ B
5. A.T

Compare:

A * B

with:

A @ B

and explain why the results are different.

---

# 29. Practical Experiment — AI Layer

Create:

X = [
  [5, 80],
  [6, 85],
  [3, 70]
]

Weights:

W = [
  [8],
  [0.5]
]

Bias:

b = [10]

Calculate:

Z = X @ W + b

Check the shape.

Expected:

X shape:

(3, 2)

W shape:

(2, 1)

Z shape:

(3, 1)

This is a simple example of batch matrix computation.

---

# 30. Practice

## Practice 1

Perform matrix addition.

## Practice 2

Perform matrix subtraction.

## Practice 3

Perform scalar multiplication.

## Practice 4

Compare:

A * B

and:

A @ B

## Practice 5

Multiply:

A =
[
  1 2 3
  4 5 6
]

by:

B =
[
  1
  2
  3
]

## Practice 6

Check the shapes before multiplying:

A:

(2, 3)

B:

(3, 4)

Determine the result shape.

## Practice 7

Determine whether these can be multiplied:

A:

(4, 5)

B:

(5, 2)

C:

(3, 4)

Identify the valid multiplication pairs.

---

# 31. Challenge — Mini Neural Layer

Build a NumPy program representing a simple neural-network layer.

Create:

5 observations

with:

3 input features.

Create:

3 input-to-output weights

for:

2 output neurons.

Then calculate:

Z = XW + b

Your program must:

1. Print X shape.
2. Print W shape.
3. Print b shape.
4. Calculate Z.
5. Print Z shape.
6. Explain why the multiplication is valid.
7. Explain what each dimension represents.

This is a mathematical simulation of a simplified neural-network layer.

---

# Common Mistakes

## Mistake 1 — Confusing * and @

A * B

means element-wise multiplication.

A @ B

means matrix multiplication.

## Mistake 2 — Ignoring Shapes

Always check:

A.shape

and:

B.shape

before matrix multiplication.

## Mistake 3 — Forgetting Inner Dimensions

For:

A(m × n)

and:

B(n × p)

multiplication is valid.

The inner dimensions:

n

must match.

## Mistake 4 — Confusing Dot Product and Matrix Multiplication

The dot product of two vectors produces a scalar.

Matrix multiplication can produce another matrix or vector depending on the shapes.

## Mistake 5 — Ignoring Bias Dimensions

In a model:

Z = XW + b

the bias must be compatible with the resulting shape.

---

# Quick Check

1. When can two matrices be added?

When they have compatible, normally identical, shapes for ordinary element-wise matrix addition.

2. What is scalar multiplication?

Multiplying every element by the same scalar.

3. What does A * B mean in NumPy?

Element-wise multiplication.

4. What does A @ B mean?

Matrix multiplication.

5. What is the matrix multiplication shape rule?

For:

(m × n) @ (n × p)

the result is:

(m × p)

6. What must happen to the inner dimensions?

They must match.

7. What is matrix-vector multiplication?

Multiplying a matrix by a compatible vector to produce a transformed vector.

8. What does:

z = Wx + b

represent?

A weighted linear transformation followed by addition of a bias.

9. Why is matrix multiplication important in neural networks?

Neural-network layers use weight matrices to transform batches of input features into new representations.

10. Why is dimension tracking important?

It ensures that mathematical operations are valid and helps us understand what each dimension represents.

---

# Key Takeaways

- Matrices can be added and subtracted element by element when shapes are compatible.
- Scalar multiplication multiplies every matrix element by the same value.
- NumPy uses * for element-wise multiplication.
- NumPy uses @ for matrix multiplication.
- Matrix multiplication requires compatible inner dimensions.
- Matrix-vector multiplication transforms feature vectors.
- A matrix can represent a linear transformation.
- Weighted AI computations can be represented using:

z = Wx + b

- Batch computations allow one matrix operation to process many observations.
- Matrix multiplication is fundamental to neural-network computation.
- Shape and dimension tracking are essential mathematical skills for AI.

The central progression is:

Feature Matrix
      ↓
Weight Matrix
      ↓
Matrix Multiplication
      ↓
Bias
      ↓
Transformation
      ↓
AI Computation
      ↓
Neural Network
`,
};

export default lesson7;
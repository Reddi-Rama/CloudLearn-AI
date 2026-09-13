const lesson6 = {
  title: "NumPy Arrays & Dimensions",

  content: `
# NumPy Arrays & Dimensions

## What You Will Learn

In this lesson, you will move from ordinary Python data structures to NumPy arrays.

You will learn:

- What NumPy is
- Why AI uses NumPy
- Creating one-dimensional arrays
- Two-dimensional arrays
- Multidimensional arrays
- Array shape
- Number of dimensions
- Array size
- Data types
- Reshaping arrays
- Array construction
- Mathematical interpretation of arrays
- How arrays represent AI observations and feature matrices
- Why NumPy is more suitable for numerical computing than nested Python lists

---

# 1. Why NumPy Matters in AI

AI systems process numerical information continuously.

Consider:

scores = [70, 80, 90, 60]

A Python list can store these values.

But real AI datasets may contain:

- Thousands of observations
- Millions of observations
- Hundreds of features
- Images represented by pixels
- Audio represented by numerical samples
- Embeddings represented by vectors

Working directly with nested Python lists becomes increasingly inconvenient.

NumPy provides a numerical array structure designed for efficient computation.

The progression is:

Python List
     ↓
NumPy Array
     ↓
Numerical Operations
     ↓
Vectorized Computation
     ↓
AI Data Processing

---

# 2. Importing NumPy

NumPy is normally imported as:

import numpy as np

The alias np is simply a common convention.

Now NumPy functions can be accessed using:

np

For example:

np.array()

---

# 3. Creating a One-Dimensional Array

Example:

import numpy as np

scores = np.array([70, 80, 90, 60])

print(scores)

Output:

[70 80 90 60]

This is a one-dimensional NumPy array.

Mathematically:

x = [70, 80, 90, 60]

It can represent one numerical feature containing four observations.

---

# 4. Python List vs NumPy Array

Python list:

scores = [70, 80, 90, 60]

NumPy:

scores = np.array([70, 80, 90, 60])

The important difference is not merely syntax.

NumPy arrays are designed for numerical computation.

For example:

x = np.array([1, 2, 3, 4])

print(x * 2)

Output:

[2 4 6 8]

The multiplication is applied to every element.

A normal Python list behaves differently:

x = [1, 2, 3, 4]

print(x * 2)

Output:

[1, 2, 3, 4, 1, 2, 3, 4]

The list is repeated.

NumPy interprets multiplication mathematically.

---

# 5. Mathematical Meaning of Element-Wise Operations

Suppose:

x = [1, 2, 3, 4]

and:

y = 2x

Then mathematically:

y_i = 2x_i

Therefore:

y_1 = 2(1) = 2

y_2 = 2(2) = 4

y_3 = 2(3) = 6

y_4 = 2(4) = 8

NumPy performs this operation directly:

x = np.array([1, 2, 3, 4])

y = x * 2

print(y)

Output:

[2 4 6 8]

This is the foundation of vectorized computation.

---

# 6. Two-Dimensional Arrays

AI datasets usually contain multiple observations and multiple features.

Example:

data = np.array([
    [20, 5, 92],
    [21, 7, 88],
    [19, 3, 95]
])

print(data)

Output:

[[20  5 92]
 [21  7 88]
 [19  3 95]]

Interpretation:

Column 1:

Age

Column 2:

Study hours

Column 3:

Attendance

Each row is one observation.

---

# 7. Matrix Interpretation

The array:

[
  [20, 5, 92],
  [21, 7, 88],
  [19, 3, 95]
]

can be represented mathematically as:

X =
[
  20  5  92
  21  7  88
  19  3  95
]

There are:

n = 3

observations.

There are:

d = 3

features.

Therefore:

X belongs to R^(3 × 3)

This matrix representation is fundamental to machine learning.

---

# 8. Shape

NumPy provides:

shape

to tell us the dimensions of an array.

Example:

import numpy as np

X = np.array([
    [20, 5, 92],
    [21, 7, 88],
    [19, 3, 95]
])

print(X.shape)

Output:

(3, 3)

The first value:

3

means:

3 rows

The second value:

3

means:

3 columns.

Therefore:

shape = (number of observations, number of features)

for this dataset.

---

# 9. Number of Dimensions

NumPy provides:

ndim

Example:

print(X.ndim)

Output:

2

Why?

Because X has:

rows

and:

columns

Therefore it is a two-dimensional array.

A vector:

[1, 2, 3]

has:

ndim = 1

A matrix:

[
  [1, 2],
  [3, 4]
]

has:

ndim = 2

---

# 10. Array Size

NumPy also provides:

size

Example:

X contains:

3 rows

and:

3 columns

Therefore:

3 × 3 = 9

values.

Python:

print(X.size)

Output:

9

The relationship is:

size = product of all dimensions

---

# 11. Shape vs Size vs Dimensions

For:

X = np.array([
    [10, 20, 30],
    [40, 50, 60]
])

we have:

shape:

(2, 3)

ndim:

2

size:

6

Interpretation:

2 observations

3 values per observation

6 total values

These three properties are extremely important when working with AI datasets.

---

# 12. One-Dimensional Shape

Consider:

x = np.array([10, 20, 30, 40])

print(x.shape)

Output:

(4,)

Notice that there is only one dimension.

The shape means:

4 elements

It is not:

(4, 1)

Those represent different array structures.

---

# 13. Column Vector vs One-Dimensional Array

One-dimensional:

x = np.array([10, 20, 30])

Shape:

(3,)

Column-style two-dimensional array:

x = np.array([
    [10],
    [20],
    [30]
])

Shape:

(3, 1)

Mathematically, the second form resembles:

x =
[
  10
  20
  30
]

Understanding this distinction becomes important in machine learning and linear algebra.

---

# 14. Creating Arrays With arange

NumPy provides:

np.arange()

Example:

x = np.arange(5)

print(x)

Output:

[0 1 2 3 4]

The values begin at:

0

and stop before:

5

Mathematically, this creates a sequence:

0, 1, 2, 3, 4

---

# 15. arange With a Step

Example:

x = np.arange(2, 11, 2)

print(x)

Output:

[ 2  4  6  8 10]

The arguments mean:

start = 2

stop = 11

step = 2

This is useful for generating numerical sequences.

---

# 16. Creating Zeros

NumPy provides:

np.zeros()

Example:

x = np.zeros(5)

print(x)

Output:

[0. 0. 0. 0. 0.]

This creates an array containing five zeros.

Two-dimensional example:

matrix = np.zeros((2, 3))

print(matrix)

Output:

[
  [0. 0. 0.]
  [0. 0. 0.]
]

This is useful when initializing numerical structures.

---

# 17. Creating Ones

Example:

x = np.ones(5)

print(x)

Output:

[1. 1. 1. 1. 1.]

Two-dimensional:

matrix = np.ones((2, 3))

print(matrix)

Output:

[
  [1. 1. 1.]
  [1. 1. 1.]
]

Initialization is common in numerical algorithms.

---

# 18. Creating an Identity Matrix

NumPy provides:

np.eye()

Example:

I = np.eye(3)

print(I)

Output:

[
  [1. 0. 0.]
  [0. 1. 0.]
  [0. 0. 1.]
]

Mathematically:

I =
[
  1 0 0
  0 1 0
  0 0 1
]

This is the identity matrix.

Identity matrices are important in linear algebra and regularization techniques used in machine learning.

---

# 19. Data Types

NumPy arrays have a data type.

Example:

x = np.array([1, 2, 3, 4])

print(x.dtype)

The output may indicate an integer data type.

For decimal values:

x = np.array([1.5, 2.5, 3.5])

print(x.dtype)

The array uses a floating-point type.

The data type matters because numerical computations operate according to the stored representation.

---

# 20. Explicit Data Type

We can specify:

dtype

Example:

x = np.array(
    [1, 2, 3],
    dtype=float
)

print(x)

Output:

[1. 2. 3.]

This can be useful when numerical operations require floating-point values.

---

# 21. Integer vs Floating-Point Data

Suppose:

x = np.array([1, 2, 3])

and:

y = np.array([1.5, 2.5, 3.5])

The first stores integer-like values.

The second stores fractional values.

Machine-learning datasets frequently use floating-point representations because normalized values, probabilities, weights, and model parameters are often fractional.

---

# 22. Reshaping an Array

Suppose:

x = np.arange(6)

Output:

[0 1 2 3 4 5]

We can reshape it:

matrix = x.reshape(2, 3)

print(matrix)

Output:

[
  [0 1 2]
  [3 4 5]
]

The original array contains:

6

values.

The new shape contains:

2 × 3 = 6

positions.

Therefore the number of elements remains constant.

---

# 23. Mathematical Meaning of Reshape

Original:

x =
[0, 1, 2, 3, 4, 5]

Reshaped:

X =
[
  0 1 2
  3 4 5
]

Reshape changes the organization of the values.

It does not change the values themselves.

Therefore:

Number of elements before:

6

Number of elements after:

6

---

# 24. Invalid Reshape

Suppose:

x = np.arange(6)

Trying:

x.reshape(4, 2)

requires:

4 × 2 = 8

positions.

But the array contains only:

6

values.

Therefore NumPy raises an error.

This demonstrates an important rule:

The total number of elements must remain unchanged when reshaping.

---

# 25. Flattening

Suppose:

X = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

We can flatten it:

x = X.flatten()

print(x)

Output:

[1 2 3 4 5 6]

The matrix:

[
  1 2 3
  4 5 6
]

becomes a one-dimensional vector.

This is useful when converting structured numerical data into vector representations.

---

# 26. Transpose

For:

X =
[
  1 2 3
  4 5 6
]

the transpose is:

X^T =
[
  1 4
  2 5
  3 6
]

Python:

X = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

print(X.T)

Output:

[
  [1 4]
  [2 5]
  [3 6]
]

Transpose swaps rows and columns.

---

# 27. Why Transpose Matters in AI

Machine-learning mathematics often involves:

X

and:

X^T

For example, matrix multiplication may require dimensions to align.

If:

X

has shape:

(n, d)

then:

X.T

has shape:

(d, n)

This becomes important in:

- Linear regression
- Neural networks
- Covariance calculations
- Linear algebra
- Optimization

---

# 28. Broadcasting Introduction

NumPy can automatically apply operations between compatible shapes.

Example:

X = np.array([
    [10, 20, 30],
    [40, 50, 60]
])

bias = np.array([1, 2, 3])

print(X + bias)

Output:

[
  [11 22 33]
  [41 52 63]
]

The vector:

[1, 2, 3]

is applied to every row.

This is called broadcasting.

---

# 29. Mathematical View of Broadcasting

Suppose:

X =
[
  x11 x12 x13
  x21 x22 x23
]

and:

b =
[
  b1 b2 b3
]

Then:

X + b

means:

[
  x11+b1   x12+b2   x13+b3
  x21+b1   x22+b2   x23+b3
]

This is extremely useful in machine-learning computations.

---

# 30. Feature Matrix and Bias

Suppose:

X =
[
  2 4
  3 5
  6 8
]

and:

b =
[
  1 10
]

Then:

X + b

produces:

[
  3 14
  4 15
  7 18
]

The same transformation is applied to every observation.

This is one reason NumPy is extremely useful for implementing mathematical models.

---

# 31. Array Arithmetic

Consider:

x = np.array([10, 20, 30])

y = np.array([1, 2, 3])

Then:

print(x + y)
print(x - y)
print(x * y)
print(x / y)

Output:

[11 22 33]

[ 9 18 27]

[10 40 90]

[10. 10. 10.]

These are element-wise operations.

Mathematically:

z_i = x_i + y_i

or:

z_i = x_i y_i

depending on the operation.

---

# 32. Real AI Example — Normalizing a Feature

Suppose temperatures are:

temperatures = np.array([
    20,
    25,
    30,
    35,
    40
])

We want values between:

0

and:

1

Using min-max normalization:

x' = (x - x_min) / (x_max - x_min)

Here:

x_min = 20

x_max = 40

For x = 30:

x' = (30 - 20) / (40 - 20)

= 10 / 20

= 0.5

Python:

minimum = np.min(temperatures)
maximum = np.max(temperatures)

normalized = (
    temperatures - minimum
) / (
    maximum - minimum
)

print(normalized)

Output:

[0.   0.25 0.5  0.75 1.  ]

NumPy applies the entire formula to the array.

---

# 33. Why This Is Powerful

Without NumPy, we would need a loop.

With NumPy:

normalized = (
    temperatures - minimum
) / (
    maximum - minimum
)

The mathematical formula maps directly onto the array.

This is a major advantage when implementing preprocessing operations.

---

# 34. Arrays and Images

A grayscale image can be represented as a two-dimensional array.

Example:

image = np.array([
    [0, 50, 100],
    [150, 200, 255]
])

Each number represents pixel intensity.

A typical grayscale intensity range is:

0 → dark

255 → bright

Therefore:

Image

becomes:

Numerical Matrix

This is a fundamental idea behind computer vision.

---

# 35. Color Images

A color image may contain three channels:

Red

Green

Blue

A simplified representation can have shape:

(height, width, channels)

For example:

(224, 224, 3)

means:

224 pixels high

224 pixels wide

3 color channels

This is a three-dimensional array.

---

# 36. Array Representation of Audio

Audio can also be represented numerically.

A simple audio signal can be:

signal = np.array([
    0.1,
    0.2,
    -0.1,
    0.4
])

Each value represents a sampled signal amplitude.

Therefore:

Real-World Signal

↓

Numerical Array

↓

AI Processing

This demonstrates the general role of numerical arrays in AI.

---

# 37. Arrays and Embeddings

Modern AI systems often represent text, images, and other information as vectors.

For example:

embedding = np.array([
    0.21,
    -0.14,
    0.73,
    0.09
])

This is a numerical vector.

In real systems, embeddings may have hundreds or thousands of dimensions.

NumPy provides a convenient numerical foundation for manipulating such vectors.

---

# 38. Checking Array Properties

A useful debugging pattern is:

print("Shape:", X.shape)
print("Dimensions:", X.ndim)
print("Size:", X.size)
print("Data type:", X.dtype)

This immediately tells us how the numerical data is represented.

Understanding shapes becomes essential when working with machine-learning models.

---

# 39. Practical Experiment

Create:

students = np.array([
    [20, 5, 81],
    [21, 7, 90],
    [19, 3, 72],
    [22, 4, 68],
    [20, 6, 85]
])

Print:

students.shape

students.ndim

students.size

students.dtype

Then calculate:

doubled = students * 2

Print the result.

Observe that every value is multiplied by two.

---

# 40. Practical Experiment — Feature Scaling

Create:

hours = np.array([2, 4, 6, 8, 10])

Calculate:

minimum

maximum

normalized values

using:

x' = (x - x_min) / (x_max - x_min)

Expected normalized values:

[0.   0.25 0.5  0.75 1.  ]

Now explain why scaling can be useful before a machine-learning algorithm processes numerical features.

---

# 41. Practical Experiment — Reshaping

Create:

values = np.arange(12)

Print:

values

Then reshape:

matrix = values.reshape(3, 4)

Print:

matrix

Check:

matrix.shape

Then:

matrix.T

Study how:

(3, 4)

becomes:

(4, 3)

after transpose.

---

# 42. Common Mistakes

## Mistake 1 — Confusing shape with size

For:

X.shape = (3, 4)

the array has:

12

elements.

Therefore:

shape != size

## Mistake 2 — Invalid reshape

The number of elements must remain unchanged.

## Mistake 3 — Forgetting that NumPy operations are usually element-wise

x * y

performs element-wise multiplication.

It is not automatically matrix multiplication.

## Mistake 4 — Ignoring dimensions

An array with shape:

(3,)

is different from:

(3, 1)

and:

(1, 3)

## Mistake 5 — Mixing incompatible shapes

Not every pair of arrays can be combined directly.

Understanding shape compatibility is essential.

---

# 43. Practice Tasks

## Task 1

Create a NumPy array containing:

10 student scores.

Print:

shape

ndim

size

dtype

## Task 2

Create a:

4 × 3

feature matrix.

Calculate:

matrix × 2

matrix + 5

## Task 3

Create a:

3 × 4

matrix and transpose it.

## Task 4

Create a one-dimensional array with 12 values and reshape it into:

3 × 4

## Task 5

Create an array of temperatures and normalize it using min-max scaling.

## Task 6

Create an artificial grayscale image using a NumPy matrix.

Display:

minimum pixel value

maximum pixel value

mean pixel value

---

# 44. Challenge — AI Feature Matrix

Create:

100 observations

with:

4 numerical features

using NumPy.

The final shape must be:

(100, 4)

Then:

1. Print the shape.
2. Print the total number of values.
3. Calculate the mean of every feature.
4. Calculate the minimum of every feature.
5. Calculate the maximum of every feature.
6. Normalize the complete matrix.
7. Verify that the normalized values lie between 0 and 1.

This challenge prepares you for actual machine-learning preprocessing.

---

# 45. Quick Check

What is NumPy?

A Python library designed primarily for efficient numerical and array-based computation.

What does shape represent?

The size of an array along each dimension.

What does ndim represent?

The number of dimensions.

What does size represent?

The total number of elements.

What does reshape do?

It changes the organization of an array while preserving the number of elements.

What does transpose do?

It swaps the axes of a matrix or multidimensional array.

What is broadcasting?

A NumPy mechanism that allows compatible arrays of different shapes to participate in arithmetic operations.

Why are NumPy arrays important in AI?

They provide efficient numerical representations and operations used throughout data processing, machine learning, deep learning, and scientific computing.

---

# 46. Key Takeaways

- NumPy provides a powerful numerical array structure.
- One-dimensional arrays represent vectors or sequences.
- Two-dimensional arrays naturally represent feature matrices.
- Higher-dimensional arrays can represent images, video, and other structured numerical data.
- shape describes the dimensions of an array.
- ndim gives the number of dimensions.
- size gives the total number of elements.
- dtype describes the stored numerical type.
- reshape reorganizes the array without changing the number of elements.
- transpose exchanges rows and columns.
- NumPy supports element-wise mathematical operations.
- Broadcasting allows compatible arrays to interact efficiently.
- Numerical preprocessing such as normalization can be expressed directly using arrays.
- Images, signals, embeddings, and machine-learning features can all be represented numerically.

The central idea is:

Real-World Data
       ↓
Numerical Representation
       ↓
NumPy Array
       ↓
Mathematical Operation
       ↓
AI Computation
`,
};

export default lesson6;

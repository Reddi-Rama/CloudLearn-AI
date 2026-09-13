const lesson6 = {
  title: "Matrices & Matrix Representation in AI",

  content: `
# Matrices & Matrix Representation in AI

## What You Will Learn

In this lesson, you will learn how matrices are used to represent structured numerical information in Artificial Intelligence.

You will learn:

- What a matrix is
- Rows and columns
- Matrix dimensions
- Matrix elements
- Matrix representation of datasets
- Feature matrices
- Row vectors and column vectors
- Matrix shape
- Matrix indexing
- Matrix slicing
- Matrix transpose
- Matrix creation using NumPy
- Matrices in images
- Matrices in machine learning
- Matrices in neural networks
- Mathematical interpretation of matrices

The central idea is:

Individual Observation
        ↓
Feature Vector
        ↓
Multiple Observations
        ↓
Feature Matrix
        ↓
AI Computation

---

# 1. What Is a Matrix?

A matrix is a rectangular arrangement of numbers organized into rows and columns.

Example:

A =
[
  1  2  3
  4  5  6
]

This matrix has:

2 rows

and:

3 columns

Therefore its shape is:

2 × 3

---

# 2. Matrix Dimensions

The dimensions of a matrix are written as:

rows × columns

For:

A =
[
  1  2  3
  4  5  6
]

we have:

2 rows

3 columns

Therefore:

A is a 2 × 3 matrix.

The number of elements is:

2 × 3 = 6

---

# 3. Matrix Elements

Each number inside a matrix is called an element.

For:

A =
[
  1  2  3
  4  5  6
]

we can identify an element using:

row

and:

column

For example:

A(1,2)

in mathematical one-based notation refers to:

2

Python and NumPy use zero-based indexing, so the corresponding access is:

A[0, 1]

---

# 4. Matrix Indexing With NumPy

Example:

import numpy as np

A = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

print(
    A[0, 0]
)

Output:

1

Another example:

print(
    A[1, 2]
)

Output:

6

The first index identifies the row.

The second identifies the column.

---

# 5. Matrix Shape

NumPy provides:

shape

Example:

print(A.shape)

Output:

(2, 3)

This tells us:

2 rows

3 columns

Shape is extremely important in AI because mathematical operations require compatible dimensions.

---

# 6. Matrix Number of Dimensions

Use:

print(A.ndim)

Output:

2

A matrix is a two-dimensional array.

Therefore:

ndim = 2

---

# 7. Matrix Size

Use:

print(A.size)

Output:

6

because:

2 × 3 = 6

Matrix properties can therefore be inspected using:

A.shape

A.ndim

A.size

---

# 8. A Dataset as a Matrix

Suppose we have:

Age

Study Hours

Attendance

for several students.

Data:

20   3   90
21   5   88
19   2   95
22   6   85

This can be represented as:

X =
[
  20  3  90
  21  5  88
  19  2  95
  22  6  85
]

The dataset contains:

4 observations

and:

3 features

Therefore:

X has shape:

4 × 3

This representation is extremely common in machine learning.

---

# 9. Feature Matrix

A feature matrix is a matrix in which:

rows represent observations

columns represent features

For:

X =
[
  20  3  90
  21  5  88
  19  2  95
  22  6  85
]

we can define:

Column 1 → Age

Column 2 → Study Hours

Column 3 → Attendance

Therefore:

X ∈ R^(4 × 3)

This means:

4 observations

3 numerical features

---

# 10. Creating a Feature Matrix

Python:

import numpy as np

X = np.array([
    [20, 3, 90],
    [21, 5, 88],
    [19, 2, 95],
    [22, 6, 85]
])

print(X)

Output:

[
 [20  3 90]
 [21  5 88]
 [19  2 95]
 [22  6 85]
]

---

# 11. Selecting a Row

Use:

X[0]

to select the first observation.

Output:

[20 3 90]

This represents one complete feature vector.

Therefore:

Matrix row

→

Feature vector

This connects the concepts from the previous lessons.

---

# 12. Selecting a Column

Use:

X[:, 0]

This means:

all rows

column 0

Output:

[20 21 19 22]

This extracts the:

Age

feature.

Similarly:

X[:, 1]

extracts:

Study Hours

---

# 13. Matrix Slicing

Suppose:

X = np.array([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
])

Select the first two rows:

print(
    X[0:2, :]
)

Output:

[
 [1 2 3 4]
 [5 6 7 8]
]

Select the last two columns:

print(
    X[:, 2:4]
)

Output:

[
 [3 4]
 [7 8]
 [11 12]
]

---

# 14. Selecting a Submatrix

Example:

print(
    X[0:2, 1:3]
)

Output:

[
 [2 3]
 [6 7]
]

This selects:

rows 0 and 1

columns 1 and 2

A submatrix is simply a smaller matrix extracted from a larger matrix.

---

# 15. Row Vector

A row vector can be written as:

x =
[
  2  4  6
]

Using NumPy:

x = np.array([
    [2, 4, 6]
])

Shape:

(1, 3)

This differs from a one-dimensional array:

np.array([2, 4, 6])

which has shape:

(3,)

---

# 16. Column Vector

A column vector can be written as:

x =
[
  2
  4
  6
]

NumPy:

x = np.array([
    [2],
    [4],
    [6]
])

Shape:

(3, 1)

Understanding the distinction between:

(3,)

(1, 3)

and:

(3, 1)

is important for matrix computation.

---

# 17. Matrix Transpose

The transpose of a matrix swaps rows and columns.

Suppose:

A =
[
  1  2  3
  4  5  6
]

Then:

A^T =
[
  1  4
  2  5
  3  6
]

Using NumPy:

print(
    A.T
)

Output:

[
 [1 4]
 [2 5]
 [3 6]
]

---

# 18. Shape After Transpose

Original:

A.shape

is:

(2, 3)

After transpose:

A.T.shape

is:

(3, 2)

Therefore transpose changes:

rows

into:

columns

and:

columns

into:

rows.

---

# 19. Why Transpose Matters in AI

Suppose:

X

contains:

100 observations

and:

5 features.

Then:

X.shape

is:

(100, 5)

Its transpose:

X.T

has shape:

(5, 100)

Transpose operations appear frequently in machine-learning mathematics.

Examples include:

- Matrix multiplication
- Linear regression
- Covariance calculations
- Neural-network computations
- Optimization

---

# 20. Creating Zero Matrices

NumPy provides:

np.zeros()

Example:

Z = np.zeros(
    (3, 4)
)

print(Z)

This produces a:

3 × 4

matrix containing zeros.

This is useful when initializing numerical structures.

---

# 21. Creating One Matrices

Example:

O = np.ones(
    (2, 3)
)

print(O)

Output:

[
 [1 1 1]
 [1 1 1]
]

This creates a matrix filled with ones.

---

# 22. Identity Matrix

An identity matrix contains:

1

along the main diagonal

and:

0

elsewhere.

Example:

I = np.eye(3)

print(I)

Output:

[
 [1 0 0]
 [0 1 0]
 [0 0 1]
]

Mathematically:

I =
[
  1 0 0
  0 1 0
  0 0 1
]

Identity matrices become important in linear algebra and optimization.

---

# 23. Matrix of a Grayscale Image

Images can also be represented using matrices.

Consider:

image =
[
  0   50  100
  150 200 255
]

Each number represents a pixel intensity.

Therefore:

Image
  ↓
Pixel Values
  ↓
Matrix
  ↓
Numerical Representation
  ↓
AI Processing

This is one of the mathematical foundations of computer vision.

---

# 24. Color Images and Matrices

A color image usually contains multiple channels.

For RGB:

Channel 1 → Red

Channel 2 → Green

Channel 3 → Blue

A color image can therefore be represented using a multidimensional array.

A typical representation has the form:

(height, width, channels)

For example:

(224, 224, 3)

This means:

224 pixels high

224 pixels wide

3 channels

This extends the idea of matrices into higher-dimensional numerical arrays.

---

# 25. Matrix Representation of Embeddings

Suppose we have several embeddings:

Embedding 1:

[0.2, 0.4, 0.6]

Embedding 2:

[0.1, 0.3, 0.7]

Embedding 3:

[0.8, 0.2, 0.1]

These can be stored as:

E =
[
  0.2  0.4  0.6
  0.1  0.3  0.7
  0.8  0.2  0.1
]

Now:

Rows

represent embeddings.

Columns

represent embedding dimensions.

This demonstrates how matrices can store collections of vectors.

---

# 26. Matrix as Collection of Vectors

A feature matrix can be viewed as:

Matrix
  ↓
Collection of Rows
  ↓
Feature Vectors

For:

X =
[
  x1
  x2
  x3
  x4
]

each:

xi

is one observation.

Therefore a matrix can be thought of as many vectors organized into a structured arrangement.

---

# 27. Matrix and Machine Learning

Suppose:

X

contains:

n observations

and:

d features.

Then:

X ∈ R^(n × d)

A machine-learning model receives:

X

and may produce:

y_hat

Mathematically:

y_hat = f(X)

The matrix therefore provides the numerical input structure for the model.

---

# 28. Feature Matrix and Target Vector

Suppose:

X =
[
  20  3
  21  5
  19  2
  22  6
]

and:

y =
[
  70
  85
  65
  92
]

Then:

X

contains two features:

Age

Study Hours

and:

y

contains the target:

Score

This gives:

X → Features

y → Target

This is the standard mathematical representation for many supervised-learning problems.

---

# 29. Matrix Size and Dataset Size

Suppose:

X.shape = (1000, 20)

This means:

1000 observations

20 features

Total numerical values:

1000 × 20

= 20,000

The matrix shape therefore tells us a lot about the dataset.

---

# 30. Matrix Indexing in AI

Suppose:

X[25, 4]

means:

observation 26

feature 5

because Python uses zero-based indexing.

Therefore the matrix index tells us exactly which feature value of which observation we are accessing.

---

# 31. Practical Example — Student Dataset

Create:

import numpy as np

students = np.array([
    [20, 3, 85],
    [21, 5, 90],
    [19, 2, 78],
    [22, 6, 92],
    [20, 4, 88]
])

Columns:

Age

StudyHours

Score

Check:

print(students.shape)

Output:

(5, 3)

Now select:

Age:

print(
    students[:, 0]
)

Study Hours:

print(
    students[:, 1]
)

Score:

print(
    students[:, 2]
)

This demonstrates matrix-based feature extraction.

---

# 32. Matrix Slicing in AI

Suppose:

X

contains:

Age

StudyHours

Attendance

Score

We want only:

StudyHours

and:

Attendance

Use:

features = X[:, 1:3]

This extracts the relevant feature columns.

This type of feature selection is common before model training.

---

# 33. Matrix Reshaping

Suppose:

values = np.arange(12)

Output:

[0 1 2 3 4 5 6 7 8 9 10 11]

We can reshape:

matrix = values.reshape(
    3,
    4
)

Now:

matrix =
[
  0 1 2 3
  4 5 6 7
  8 9 10 11
]

The number of elements remains:

12

before and after reshaping.

---

# 34. Reshape Rule

If an array contains:

n

elements, the new dimensions must satisfy:

rows × columns = n

For:

12 elements:

Possible shapes include:

(3, 4)

(4, 3)

(2, 6)

(6, 2)

(1, 12)

The number of elements must remain constant.

---

# 35. Matrix Flattening

Suppose:

A =
[
  1 2
  3 4
]

Flatten:

A.flatten()

Output:

[1 2 3 4]

This converts the matrix into a one-dimensional array.

Flattening is useful when structured numerical data must be represented as a single vector.

---

# 36. Matrix and AI Data Pipeline

A common representation is:

Raw Dataset
      ↓
Rows and Columns
      ↓
Pandas DataFrame
      ↓
Numerical Features
      ↓
NumPy Matrix
      ↓
AI Model

The matrix is therefore an important bridge between structured data and mathematical model computation.

---

# 37. Complete NumPy Experiment

import numpy as np

X = np.array([
    [20, 3, 90],
    [21, 5, 88],
    [19, 2, 95],
    [22, 6, 85]
])

print("Matrix:")
print(X)

print(
    "Shape:",
    X.shape
)

print(
    "Dimensions:",
    X.ndim
)

print(
    "Size:",
    X.size
)

print(
    "First row:",
    X[0]
)

print(
    "Age column:",
    X[:, 0]
)

print(
    "Study-hours column:",
    X[:, 1]
)

print(
    "Transpose:"
)

print(
    X.T
)

This single example demonstrates:

Matrix creation

Shape

Dimensions

Size

Indexing

Column extraction

Transpose

---

# Practical Experiment

Create a:

5 × 4

student feature matrix containing:

Age

StudyHours

Attendance

PreviousScore

Then:

1. Print the matrix.
2. Print its shape.
3. Print its number of dimensions.
4. Print its size.
5. Extract each feature column.
6. Extract the first student.
7. Extract the last student.
8. Extract the first two features.
9. Transpose the matrix.
10. Reshape a separate array containing 20 values into a 5 × 4 matrix.

---

# Practice

## Practice 1

Create:

A =
[
  1 2 3
  4 5 6
]

Find:

- Shape
- Size
- Dimensions
- A[0, 1]
- A[1, 2]

## Practice 2

Create a:

4 × 3

matrix and extract:

- First row
- Last row
- First column
- Last column

## Practice 3

Create a matrix representing:

5 students

and:

4 features

## Practice 4

Create a grayscale image matrix.

Identify:

- Minimum pixel value
- Maximum pixel value
- Shape

## Practice 5

Create a:

3 × 4

matrix.

Transpose it.

Verify that the new shape is:

4 × 3

---

# Challenge — AI Feature Matrix

Create:

100 observations

with:

5 numerical features.

Your program must:

1. Store the data in a NumPy matrix.
2. Print its shape.
3. Print its size.
4. Extract each feature.
5. Extract the first observation.
6. Extract the first 10 observations.
7. Create a transpose.
8. Select a subset of features.
9. Reshape a separate numerical array.
10. Explain why the matrix representation is useful for machine learning.

---

# Common Mistakes

## Mistake 1 — Confusing Rows and Columns

For:

X.shape = (100, 5)

there are:

100 rows

and:

5 columns.

## Mistake 2 — Forgetting Zero-Based Indexing

Python starts indexing at:

0

## Mistake 3 — Confusing Shape and Size

For:

(4, 5)

shape:

(4, 5)

size:

20

## Mistake 4 — Invalid Reshape

The number of elements must remain unchanged.

## Mistake 5 — Confusing a Matrix With a One-Dimensional Vector

A matrix has two dimensions.

A one-dimensional NumPy array has one dimension.

---

# Quick Check

1. What is a matrix?

A rectangular arrangement of numbers organized into rows and columns.

2. What does matrix shape represent?

The number of rows and columns.

3. What does X.shape = (100, 5) mean?

100 observations and 5 features.

4. What does X[0] return?

The first row.

5. What does X[:, 1] return?

The second column.

6. What does X.T do?

It transposes the matrix.

7. Why are matrices useful in AI?

They provide a structured numerical representation for datasets and many model computations.

8. How can an image be represented?

As a matrix of pixel values for grayscale images or a multidimensional array for multi-channel images.

9. What is a feature matrix?

A matrix whose rows represent observations and columns represent features.

10. Why must reshape preserve the number of elements?

Because reshape reorganizes existing elements rather than creating or deleting them.

---

# Key Takeaways

- Matrices organize numerical values into rows and columns.
- Matrix shape describes rows and columns.
- Rows can represent observations.
- Columns can represent features.
- A feature matrix is a fundamental representation in machine learning.
- NumPy provides efficient matrix and array operations.
- Indexing and slicing allow portions of matrices to be selected.
- Transpose swaps rows and columns.
- Images can be represented as matrices or higher-dimensional arrays.
- Multiple vectors can be organized into a matrix.
- Feature matrices connect structured datasets to mathematical AI models.

The central progression is:

Feature Vectors
      ↓
Multiple Observations
      ↓
Feature Matrix
      ↓
Matrix Computation
      ↓
Machine Learning
`,
};

export default lesson6;
const lesson4 = {
  title: "Vectors & Vector Representation in AI",

  content: `
# Vectors & Vector Representation in AI

## What You Will Learn

In this lesson, you will learn how vectors represent numerical information in Artificial Intelligence.

You will learn:

- What a vector is
- Scalars and vectors
- Vector dimensions
- Feature vectors
- Row and column vectors
- Vector magnitude
- Unit vectors
- Vector normalization
- Vectors as coordinates
- Vectors in machine learning
- Vectors in images and embeddings
- Python and NumPy implementation
- Practical AI examples

The central idea is:

Real-World Data
      ↓
Numerical Features
      ↓
Vector
      ↓
Mathematical Computation
      ↓
AI Representation

---

# 1. What Is a Vector?

A vector is an ordered collection of numerical values.

Example:

v = [2, 4, 6]

A vector can represent several related measurements.

For example:

[age, study_hours, attendance]

could become:

[20, 5, 90]

This is a feature vector.

---

# 2. Scalar vs Vector

A scalar represents a single numerical value.

Example:

temperature = 32

A vector contains multiple numerical values.

Example:

v = [32, 70, 1012]

Therefore:

Scalar

→ One value

Vector

→ Ordered collection of values

AI systems frequently use vectors because one observation often contains multiple features.

---

# 3. Feature Vectors

Suppose a student is described using:

Age = 20

Study Hours = 5

Attendance = 90

We can represent the student as:

x = [20, 5, 90]

This is a feature vector.

Mathematically:

x =
[
20
5
90
]

The vector has:

3

components.

Therefore its dimension is:

3

---

# 4. Vector Dimension

Consider:

x = [4, 7]

This is a two-dimensional vector.

Consider:

x = [4, 7, 2]

This is a three-dimensional vector.

In general:

x = [x1, x2, ..., xd]

where:

d

is the number of components.

In machine learning:

d

often represents the number of features.

---

# 5. Why Vectors Matter in AI

Suppose a machine-learning system receives:

Age

Study Hours

Attendance

Previous Score

These four values can be represented as:

x = [20, 5, 90, 82]

The model receives the vector as one input observation.

Therefore:

Real Observation
      ↓
Feature Values
      ↓
Feature Vector
      ↓
Model

This is one of the most fundamental representations used in machine learning.

---

# 6. Creating a Vector With NumPy

Python:

import numpy as np

x = np.array([
    20,
    5,
    90
])

print(x)

Output:

[20  5 90]

Check its dimension:

print(x.ndim)

Output:

1

Check its shape:

print(x.shape)

Output:

(3,)

The vector contains three values.

---

# 7. Accessing Vector Components

Example:

import numpy as np

x = np.array([
    20,
    5,
    90
])

print(x[0])
print(x[1])
print(x[2])

Output:

20

5

90

The indices are:

0 → 20

1 → 5

2 → 90

Python uses zero-based indexing.

---

# 8. Mathematical Representation

A vector can be written as:

x =
[
x1
x2
x3
]

For:

x = [20, 5, 90]

we have:

x1 = 20

x2 = 5

x3 = 90

Each component corresponds to one feature.

Maintaining the correct feature order is important.

---

# 9. Column Vector

A vector can also be represented as a column:

x =
[
20
5
90
]

Using NumPy:

x = np.array([
    [20],
    [5],
    [90]
])

print(x)

Its shape is:

(3, 1)

This differs from:

np.array([
    20,
    5,
    90
])

whose shape is:

(3,)

Understanding shape becomes important when performing matrix operations.

---

# 10. Row Vector

A row vector can be represented as:

x =
[
20  5  90
]

NumPy:

x = np.array([
    [20, 5, 90]
])

Shape:

(1, 3)

Therefore:

(3,)

(3, 1)

and:

(1, 3)

are different array structures.

---

# 11. Vector Magnitude

The magnitude or length of:

v = [x1, x2, ..., xn]

is:

||v|| =
sqrt(
x1² + x2² + ... + xn²
)

For:

v = [3, 4]

we get:

||v|| =
sqrt(
3² + 4²
)

= sqrt(9 + 16)

= sqrt(25)

= 5

---

# 12. Calculating Magnitude With NumPy

Python:

import numpy as np

v = np.array([
    3,
    4
])

magnitude = np.linalg.norm(v)

print(magnitude)

Output:

5.0

The mathematical operation has been implemented directly using NumPy.

---

# 13. Three-Dimensional Magnitude

Consider:

v = [2, 3, 6]

Then:

||v|| =
sqrt(
2² + 3² + 6²
)

= sqrt(
4 + 9 + 36
)

= sqrt(49)

= 7

Python:

v = np.array([
    2,
    3,
    6
])

print(
    np.linalg.norm(v)
)

Output:

7.0

---

# 14. Unit Vector

A unit vector has magnitude:

1

To convert a non-zero vector into a unit vector:

v_hat = v / ||v||

For:

v = [3, 4]

and:

||v|| = 5

we obtain:

v_hat = [3/5, 4/5]

Therefore:

v_hat = [0.6, 0.8]

Its magnitude is:

sqrt(
0.6² + 0.8²
)

= sqrt(
0.36 + 0.64
)

= 1

---

# 15. Normalizing a Vector With NumPy

Example:

import numpy as np

v = np.array([
    3,
    4
])

magnitude = np.linalg.norm(v)

unit_vector = v / magnitude

print(unit_vector)

Output:

[0.6 0.8]

Check:

print(
    np.linalg.norm(unit_vector)
)

Output:

1.0

---

# 16. Why Normalization Matters

Different features can have very different scales.

Suppose:

Age = 20

Income = 500000

Age and income have very different numerical ranges.

Large-scale features can influence distance calculations differently from small-scale features.

Normalization or scaling can help place numerical features into more comparable ranges.

The appropriate scaling method depends on the model and dataset.

---

# 17. Vector From Real-World Data

Suppose a sensor records:

Temperature = 32.5

Humidity = 68

Pressure = 1012

Represent it as:

x = [32.5, 68, 1012]

Python:

sensor = np.array([
    32.5,
    68,
    1012
])

print(sensor)

This converts one sensor observation into a numerical vector.

---

# 18. Image Representation

A small grayscale image can be represented as a matrix.

For example:

image =
[
  0   100
  150 255
]

The pixel values are numerical.

If the image is flattened, it can become a vector:

[0, 100, 150, 255]

This is another example of converting real-world information into numerical representations.

---

# 19. Text Embeddings

Modern AI systems can represent text using numerical vectors called embeddings.

For example:

embedding = [
    0.21,
    -0.14,
    0.73,
    0.08
]

The values are not human-readable words.

They are numerical coordinates in an embedding space.

Similarity calculations can then be performed between vectors.

Embedding dimensions in real systems may be much larger than this toy example.

---

# 20. Vector Addition

Given:

a = [1, 2, 3]

b = [4, 5, 6]

vector addition is:

a + b

= [5, 7, 9]

Python:

import numpy as np

a = np.array([
    1,
    2,
    3
])

b = np.array([
    4,
    5,
    6
])

print(a + b)

Output:

[5 7 9]

Each component is added independently.

---

# 21. Vector Subtraction

Given:

a = [5, 7, 9]

b = [2, 3, 4]

Then:

a - b

= [3, 4, 5]

Python:

print(
    a - b
)

This operation is useful when comparing two observations.

---

# 22. Difference Between Two Feature Vectors

Suppose:

Student A:

[20, 5, 90]

Student B:

[21, 7, 88]

The difference is:

B - A

= [1, 2, -2]

This tells us:

Age increased by 1

Study hours increased by 2

Attendance decreased by 2

Vector subtraction therefore provides a numerical description of how observations differ.

---

# 23. Practical AI Example

Suppose two data points are:

A = [2, 3]

B = [5, 7]

Difference:

B - A

= [3, 4]

The magnitude of this difference is:

sqrt(
3² + 4²
)

= 5

Therefore:

||B - A|| = 5

This connects vectors directly with distance.

---

# 24. Vector Scaling

A vector can be multiplied by a scalar.

Example:

v = [2, 4, 6]

2v = [4, 8, 12]

Python:

v = np.array([
    2,
    4,
    6
])

print(
    2 * v
)

Output:

[4 8 12]

Scalar multiplication changes the magnitude of the vector.

---

# 25. Negative Scaling

If:

v = [2, 4, 6]

then:

-1v = [-2, -4, -6]

The direction is reversed.

Python:

print(
    -1 * v
)

Output:

[-2 -4 -6]

---

# 26. Vector Length and Feature Space

Suppose:

x = [age, study_hours, attendance]

Then each observation is represented by a point in a three-dimensional feature space.

For example:

x1 = [20, 5, 90]

x2 = [21, 7, 88]

These points can be compared using mathematical operations.

This is the beginning of geometric thinking in machine learning.

---

# 27. Vector Operations and AI

Vectors appear in:

- Feature representation
- Embeddings
- Similarity search
- Recommendation systems
- Computer vision
- Natural language processing
- Clustering
- Nearest-neighbor methods
- Neural-network computations

The reason is simple:

AI data often needs a numerical representation.

Vectors provide one of the most important representations.

---

# 28. Complete NumPy Example

import numpy as np

student = np.array([
    20,
    5,
    90
])

print("Vector:", student)

print(
    "Dimension:",
    student.ndim
)

print(
    "Shape:",
    student.shape
)

print(
    "Magnitude:",
    np.linalg.norm(student)
)

normalized = (
    student
    /
    np.linalg.norm(student)
)

print(
    "Normalized:",
    normalized
)

print(
    "Normalized magnitude:",
    np.linalg.norm(normalized)
)

This program demonstrates:

Vector creation

Dimension

Shape

Magnitude

Normalization

---

# 29. Practice

## Practice 1

Create:

v = [3, 4]

Calculate:

- Magnitude
- Unit vector

Verify using NumPy.

## Practice 2

Create:

a = [1, 2, 3]

b = [4, 5, 6]

Calculate:

- a + b
- a - b
- 2a
- 3b

## Practice 3

Create two student feature vectors.

Calculate their difference.

## Practice 4

Create a sensor vector containing:

temperature

humidity

pressure

Calculate its magnitude.

## Practice 5

Create a vector and normalize it.

Verify that its normalized magnitude equals:

1

---

# Challenge — AI Feature Representation

Create at least five student observations.

Represent each student as:

[Age, StudyHours, Attendance, PreviousScore]

Then:

1. Store all observations.
2. Calculate the magnitude of every feature vector.
3. Normalize every vector.
4. Compare two student vectors.
5. Calculate their difference.
6. Calculate the distance between them.
7. Explain what each vector component represents.

---

# Common Mistakes

## Mistake 1 — Confusing Dimension and Magnitude

For:

v = [3, 4]

dimension:

2

magnitude:

5

These are different concepts.

## Mistake 2 — Ignoring Feature Order

If:

[Age, StudyHours, Attendance]

defines the vector structure, every observation must follow the same order.

## Mistake 3 — Normalizing a Zero Vector

The expression:

v / ||v||

cannot be used when:

||v|| = 0

because division by zero is undefined.

## Mistake 4 — Confusing a Vector With a Matrix

A one-dimensional NumPy array has a different shape from a two-dimensional matrix.

---

# Quick Check

1. What is a vector?

An ordered collection of numerical values.

2. What is a scalar?

A single numerical value.

3. What is vector dimension?

The number of components in the vector.

4. What is vector magnitude?

The length of the vector.

5. What is the magnitude of [3, 4]?

5

6. What is a unit vector?

A vector with magnitude 1.

7. Why are vectors important in AI?

They provide a numerical representation for features, observations, embeddings, and other information.

8. What is vector normalization?

Scaling a non-zero vector so that its magnitude becomes 1.

9. Why does feature order matter?

Each component must consistently represent the same feature across observations.

10. Where are vectors used?

Machine learning, embeddings, similarity search, computer vision, NLP, clustering, and many other AI computations.

---

# Key Takeaways

- A vector is an ordered collection of numerical values.
- AI observations can be represented using feature vectors.
- Vector dimension is the number of components.
- Vector magnitude represents its length.
- Unit vectors have magnitude 1.
- Normalization changes scale while preserving direction for positive scalar normalization.
- NumPy provides convenient tools for vector computation.
- Vector addition and subtraction operate component by component.
- Difference vectors can describe how observations differ.
- Images, sensor observations, features, and embeddings can all be represented numerically using vectors or related array structures.
- Vector representation provides the foundation for the vector operations studied next.

The central progression is:

Real-World Information
       ↓
Features
       ↓
Vector
       ↓
Vector Mathematics
       ↓
AI Representation
`,
};

export default lesson4;
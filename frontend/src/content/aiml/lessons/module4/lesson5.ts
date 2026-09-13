const lesson5 = {
  title: "Vector Operations & Dot Product",

  content: `
# Vector Operations & Dot Product

## What You Will Learn

In this lesson, you will learn how mathematical operations on vectors are used to compare, transform, and combine AI features.

You will learn:

- Vector addition
- Vector subtraction
- Scalar multiplication
- Scalar division
- Element-wise multiplication
- Dot product
- Weighted sums
- Vector magnitude
- Distance
- Cosine similarity
- Vector normalization
- AI examples
- NumPy implementation

The central idea is:

Feature Vector
      ↓
Vector Operation
      ↓
Numerical Result
      ↓
Similarity / Score / Transformation
      ↓
AI Computation

---

# 1. Vector Addition

Consider:

a = [1, 2, 3]

b = [4, 5, 6]

Add corresponding components:

a + b

= [1+4, 2+5, 3+6]

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

result = a + b

print(result)

Output:

[5 7 9]

---

# 2. Mathematical Interpretation

For:

a = [a1, a2, a3]

and:

b = [b1, b2, b3]

vector addition is:

a + b =
[
a1+b1
a2+b2
a3+b3
]

Each component is added independently.

---

# 3. Vector Subtraction

Consider:

a = [5, 7, 9]

b = [2, 3, 4]

Then:

a - b

= [3, 4, 5]

Python:

a = np.array([
    5,
    7,
    9
])

b = np.array([
    2,
    3,
    4
])

print(
    a - b
)

Output:

[3 4 5]

---

# 4. Difference Vectors in AI

Suppose:

Student A:

A = [20, 5, 90]

Student B:

B = [21, 7, 88]

Then:

B - A

= [1, 2, -2]

This provides a numerical description of the difference between the two observations.

The components mean:

Age difference = +1

Study-hour difference = +2

Attendance difference = -2

---

# 5. Scalar Multiplication

A vector can be multiplied by a scalar.

Suppose:

v = [2, 4, 6]

and:

c = 3

Then:

cv = [6, 12, 18]

Python:

v = np.array([
    2,
    4,
    6
])

print(
    3 * v
)

Output:

[6 12 18]

---

# 6. Scalar Division

Suppose:

v = [10, 20, 30]

Then:

v / 10

= [1, 2, 3]

Python:

v = np.array([
    10,
    20,
    30
])

print(
    v / 10
)

Output:

[1. 2. 3.]

This is useful when rescaling numerical data.

---

# 7. Element-Wise Multiplication

Suppose:

a = [2, 3, 4]

b = [5, 6, 7]

Then:

a * b

= [10, 18, 28]

Python:

a = np.array([
    2,
    3,
    4
])

b = np.array([
    5,
    6,
    7
])

print(
    a * b
)

Output:

[10 18 28]

This is element-wise multiplication.

It is different from the dot product.

---

# 8. Dot Product

The dot product of:

a = [a1, a2, ..., an]

and:

b = [b1, b2, ..., bn]

is:

a · b =
a1b1 + a2b2 + ... + anbn

For:

a = [2, 3, 4]

b = [10, 20, 30]

we get:

a · b

= (2)(10) + (3)(20) + (4)(30)

= 20 + 60 + 120

= 200

---

# 9. Dot Product With NumPy

Example:

import numpy as np

a = np.array([
    2,
    3,
    4
])

b = np.array([
    10,
    20,
    30
])

result = np.dot(
    a,
    b
)

print(result)

Output:

200

The same operation can also be written as:

result = a @ b

for compatible one-dimensional vectors.

---

# 10. Why Dot Product Matters in AI

The dot product provides a weighted combination of corresponding values.

Suppose:

features = [5, 8, 2]

weights = [10, 4, 20]

Then:

features · weights

= (5)(10) + (8)(4) + (2)(20)

= 50 + 32 + 40

= 122

Python:

features = np.array([
    5,
    8,
    2
])

weights = np.array([
    10,
    4,
    20
])

score = np.dot(
    features,
    weights
)

print(score)

Output:

122

This is conceptually similar to the weighted sums used by many machine-learning models.

---

# 11. Weighted-Sum Model

A simple model can be written:

y = w1x1 + w2x2 + ... + wnxn + b

In vector notation:

y = w · x + b

where:

x = feature vector

w = weight vector

b = bias

The dot product provides:

w · x

and then the bias is added.

---

# 12. Python Weighted Model

Example:

import numpy as np

x = np.array([
    5,
    8,
    2
])

w = np.array([
    10,
    4,
    20
])

b = 5

prediction = np.dot(
    w,
    x
) + b

print(prediction)

Output:

127

Calculation:

w · x = 122

Then:

122 + 5 = 127

This is a simple mathematical model.

It is not by itself a trained machine-learning model.

---

# 13. Dot Product and Angle

The dot product is also related to the angle between vectors.

For vectors:

a

and:

b

we have:

a · b =
||a||
||b||
cos(theta)

Therefore:

cos(theta) =
(a · b) /
(||a|| ||b||)

This relationship forms the basis of cosine similarity.

---

# 14. Cosine Similarity

Cosine similarity measures the cosine of the angle between two non-zero vectors.

The formula is:

cos(theta) =
(a · b) /
(||a|| ||b||)

Interpretation:

Values close to:

1

mean the vectors point in similar directions.

Values close to:

0

mean they are approximately perpendicular.

Values close to:

-1

mean they point in opposite directions.

The meaning depends on the application and vector representation.

---

# 15. Cosine Similarity Example

Take:

a = [1, 0]

b = [1, 0]

Dot product:

a · b = 1

Magnitudes:

||a|| = 1

||b|| = 1

Therefore:

cos(theta) = 1

The vectors point in exactly the same direction.

---

# 16. Opposite Directions

Consider:

a = [1, 0]

b = [-1, 0]

Dot product:

a · b = -1

Magnitudes:

1

and:

1

Therefore:

cos(theta) = -1

The vectors point in opposite directions.

---

# 17. Perpendicular Vectors

Consider:

a = [1, 0]

b = [0, 1]

Dot product:

a · b

= (1)(0) + (0)(1)

= 0

Therefore:

cos(theta) = 0

The vectors are perpendicular.

---

# 18. Cosine Similarity With NumPy

Example:

import numpy as np

a = np.array([
    1,
    2,
    3
])

b = np.array([
    2,
    4,
    6
])

similarity = (
    np.dot(a, b)
    /
    (
        np.linalg.norm(a)
        *
        np.linalg.norm(b)
    )
)

print(similarity)

Output:

1.0

The vectors point in the same direction because:

b = 2a

---

# 19. Why Cosine Similarity Matters in AI

Cosine similarity is widely useful when the direction of a vector matters more than its magnitude.

For example:

Embedding A

and:

Embedding B

can be compared using cosine similarity.

This idea is useful in areas such as:

- Text similarity
- Semantic search
- Recommendation systems
- Embedding comparison
- Information retrieval

The exact usefulness depends on how the vectors were produced.

---

# 20. Euclidean Distance

For vectors:

a

and:

b

Euclidean distance is:

d(a,b) =
||a-b||

For:

a = [2, 3]

b = [5, 7]

we first calculate:

b - a

= [3, 4]

Then:

distance =
sqrt(
3² + 4²
)

= 5

---

# 21. NumPy Distance

Python:

import numpy as np

a = np.array([
    2,
    3
])

b = np.array([
    5,
    7
])

distance = np.linalg.norm(
    a - b
)

print(distance)

Output:

5.0

This operation is common in:

- Nearest-neighbor algorithms
- Clustering
- Similarity analysis
- Geometric AI problems

---

# 22. Distance vs Similarity

Distance:

Smaller value

→ More similar under that metric.

Similarity:

Larger value

→ More similar under that measure.

For example:

Euclidean distance:

0

means identical vectors.

Cosine similarity:

1

means same direction for non-zero vectors.

These measures answer different mathematical questions.

---

# 23. Vector Normalization

Suppose:

v = [3, 4]

Magnitude:

5

Normalize:

v_hat = v / ||v||

Therefore:

v_hat = [0.6, 0.8]

Python:

v = np.array([
    3,
    4
])

normalized = (
    v
    /
    np.linalg.norm(v)
)

print(normalized)

Output:

[0.6 0.8]

---

# 24. Normalization and Cosine Similarity

Suppose both vectors are normalized:

||a|| = 1

and:

||b|| = 1

Then cosine similarity becomes:

a · b

because:

cos(theta) =
(a · b) / (1 × 1)

= a · b

This makes normalized vectors particularly convenient for some similarity calculations.

---

# 25. Vector Operations and Classification

Suppose an AI system has a feature vector:

x = [study_hours, attendance]

and a weight vector:

w = [8, 0.5]

A weighted score is:

w · x

If:

x = [5, 80]

then:

w · x

= (8)(5) + (0.5)(80)

= 40 + 40

= 80

Add bias:

b = 10

prediction score:

90

This illustrates how vector operations can turn several features into one computed score.

---

# 26. Complete NumPy Example

import numpy as np

x = np.array([
    5,
    80
])

w = np.array([
    8,
    0.5
])

b = 10

weighted_sum = np.dot(
    w,
    x
)

prediction = (
    weighted_sum + b
)

print(
    "Weighted sum:",
    weighted_sum
)

print(
    "Prediction:",
    prediction
)

Output:

Weighted sum: 80.0

Prediction: 90.0

---

# 27. Comparing Two AI Embeddings

Suppose:

a = np.array([
    0.2,
    0.4,
    0.6
])

b = np.array([
    0.3,
    0.6,
    0.9
])

Calculate:

dot product

magnitude

cosine similarity

Euclidean distance

Python:

dot = np.dot(a, b)

magnitude_a = np.linalg.norm(a)

magnitude_b = np.linalg.norm(b)

cosine = (
    dot
    /
    (
        magnitude_a
        *
        magnitude_b
    )
)

distance = np.linalg.norm(
    a - b
)

print("Dot product:", dot)
print("Magnitude A:", magnitude_a)
print("Magnitude B:", magnitude_b)
print("Cosine similarity:", cosine)
print("Distance:", distance)

Because b is proportional to a:

b = 1.5a

their cosine similarity is:

1

even though their magnitudes are different.

This demonstrates an important distinction between direction-based similarity and absolute distance.

---

# 28. Practical Experiment

Create:

a = np.array([
    3,
    4
])

b = np.array([
    6,
    8
])

Calculate:

1. a + b
2. a - b
3. 2a
4. a · b
5. ||a||
6. ||b||
7. Euclidean distance
8. Cosine similarity

Observe that:

b = 2a

Therefore the vectors point in the same direction.

---

# 29. Practical Experiment — Student Features

Create:

student_a = np.array([
    20,
    5,
    90
])

student_b = np.array([
    21,
    7,
    88
])

Calculate:

- Difference vector
- Euclidean distance
- Dot product
- Magnitudes
- Cosine similarity

Then explain what the results mean.

Remember that raw feature scales affect distance and dot-product-based quantities. Scaling may therefore be important before comparison.

---

# 30. Practice

## Practice 1

Create:

a = [1, 2, 3]

b = [4, 5, 6]

Calculate:

- Addition
- Subtraction
- Scalar multiplication
- Element-wise multiplication
- Dot product

## Practice 2

Calculate the magnitude of:

[6, 8]

Expected:

10

## Practice 3

Calculate the Euclidean distance between:

A = [1, 2]

B = [4, 6]

Expected:

5

## Practice 4

Calculate cosine similarity between:

A = [1, 0]

B = [0, 1]

Expected:

0

## Practice 5

Calculate cosine similarity between:

A = [1, 2, 3]

B = [2, 4, 6]

Expected:

1

---

# Challenge — Similarity Engine

Build a small Python program that accepts two vectors and calculates:

- Vector difference
- Euclidean distance
- Dot product
- Magnitude of each vector
- Cosine similarity

Then classify the relationship using simple thresholds.

For example:

Cosine similarity >= 0.8

→ Very similar direction

Cosine similarity >= 0.5

→ Moderately similar direction

Otherwise:

→ Less similar direction

These thresholds are only demonstration rules and should not be treated as universal definitions.

---

# Common Mistakes

## Mistake 1 — Confusing Element-Wise Multiplication and Dot Product

For:

a = [1, 2, 3]

b = [4, 5, 6]

Element-wise multiplication:

a * b

= [4, 10, 18]

Dot product:

a · b

= 4 + 10 + 18

= 32

They are different operations.

---

## Mistake 2 — Forgetting Vector Dimensions

The dot product requires compatible vector dimensions.

A vector with three components cannot normally be dotted with one containing four components.

---

## Mistake 3 — Forgetting the Denominator in Cosine Similarity

Cosine similarity is:

(a · b) /
(||a|| ||b||)

not simply:

a · b

unless both vectors have been normalized to unit magnitude.

---

## Mistake 4 — Dividing by a Zero Magnitude

Cosine similarity is undefined when one of the vectors is the zero vector because its magnitude is zero.

---

# Quick Check

1. What is vector addition?

Component-wise addition of two vectors.

2. What is scalar multiplication?

Multiplying every vector component by the same scalar.

3. What is the dot product?

The sum of corresponding component products.

4. What is the dot product formula?

a · b = Σ ai bi

5. Why is the dot product important in AI?

It provides weighted combinations of features and appears throughout model computation.

6. What is Euclidean distance?

The magnitude of the difference vector.

7. What is cosine similarity?

A measure based on the cosine of the angle between two non-zero vectors.

8. What does cosine similarity near 1 indicate?

The vectors point in similar directions.

9. What does cosine similarity near 0 indicate?

The vectors are approximately perpendicular.

10. What does cosine similarity near -1 indicate?

The vectors point in opposite directions.

11. What is the relationship:

y = w · x + b

?

It is a weighted sum of features plus a bias.

12. Why can normalization matter?

It can reduce the influence of different feature scales and makes some vector comparisons easier to interpret.

---

# Key Takeaways

- Vectors support many fundamental AI computations.
- Addition and subtraction operate component by component.
- Scalar multiplication changes vector magnitude.
- Element-wise multiplication is different from dot product.
- The dot product calculates a weighted combination of corresponding values.
- A simple linear model can be represented as:

y = w · x + b

- Euclidean distance measures geometric separation.
- Cosine similarity measures directional similarity.
- Normalization creates unit vectors.
- Vector operations are used in feature processing, similarity search, embeddings, clustering, recommendation systems, and machine-learning models.
- Understanding these operations prepares you for matrices and matrix computation.

The progression is:

Feature Vector
      ↓
Vector Operations
      ↓
Dot Product
      ↓
Distance / Similarity
      ↓
Weighted Computation
      ↓
Machine Learning
`,
};

export default lesson5;
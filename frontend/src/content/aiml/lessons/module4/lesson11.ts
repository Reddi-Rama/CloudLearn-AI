const lesson11 = {
  title: "Distance & Similarity in AI",

  content: `
# Distance & Similarity in AI

## What You Will Learn

AI systems often need to determine whether two observations are similar or different.

For example:

- Are two customers similar?
- Which image is most similar to another image?
- Which documents have similar embeddings?
- Which data point is closest to a cluster?
- Which student records have similar feature values?

Mathematical distance and similarity measures provide numerical answers to these questions.

You will learn:

- Distance and similarity
- Geometric interpretation
- Euclidean distance
- Manhattan distance
- Squared Euclidean distance
- Distance between vectors
- Similarity measures
- Dot product
- Cosine similarity
- Vector normalization
- Distance and feature scale
- Nearest-neighbor intuition
- Similarity search
- AI embeddings
- NumPy implementation
- Practical AI examples

The central idea is:

Data Point
      ↓
Vector Representation
      ↓
Distance / Similarity
      ↓
Comparison
      ↓
AI Decision

---

# 1. Why Distance Matters in AI

Suppose two students are represented as:

Student A:

[20, 5]

Student B:

[21, 6]

A mathematical distance can tell us how different the feature vectors are.

If two vectors are close:

they may be similar under the selected metric.

If two vectors are far apart:

they may be more different.

This idea appears in many AI algorithms.

---

# 2. Geometric Interpretation

A vector can be treated as a point in a geometric space.

For example:

A = (2, 3)

B = (5, 7)

These are points in two-dimensional space.

The distance between them represents the geometric separation.

This gives us a useful way to think about numerical data.

Vector

↓

Point

↓

Geometry

↓

Distance

↓

Similarity / Difference

---

# 3. Euclidean Distance

Euclidean distance is the straight-line distance between two points.

For:

A = (x1, y1)

B = (x2, y2)

the formula is:

d(A,B) =
sqrt(
(x2 - x1)^2
+
(y2 - y1)^2
)

---

# 4. Euclidean Distance Example

Let:

A = (2, 3)

B = (5, 7)

Then:

d(A,B)
=
sqrt(
(5 - 2)^2
+
(7 - 3)^2
)

=

sqrt(
3^2
+
4^2
)

=

sqrt(
9 + 16
)

=

sqrt(25)

= 5

Therefore:

distance = 5

---

# 5. Euclidean Distance With NumPy

Example:

import numpy as np

A = np.array([
    2,
    3
])

B = np.array([
    5,
    7
])

distance = np.linalg.norm(
    A - B
)

print(distance)

Output:

5.0

The mathematical operation is:

A - B

followed by:

vector magnitude.

Therefore:

d(A,B) = ||A-B||

---

# 6. Distance Between Feature Vectors

Suppose:

student_a = [
    20,
    5,
    90
]

student_b = [
    21,
    7,
    88
]

The difference vector is:

student_b - student_a

=

[1, 2, -2]

The Euclidean distance is:

sqrt(
1^2 + 2^2 + (-2)^2
)

=

sqrt(
1 + 4 + 4
)

=

sqrt(9)

= 3

Python:

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

distance = np.linalg.norm(
    student_a - student_b
)

print(distance)

Output:

3.0

---

# 7. Euclidean Distance in Higher Dimensions

Distance is not limited to two dimensions.

For:

A =
[a1, a2, ..., an]

and:

B =
[b1, b2, ..., bn]

Euclidean distance is:

d(A,B)
=
sqrt(
Σ(ai - bi)^2
)

The same mathematical idea works regardless of the number of dimensions.

This is important because AI feature vectors can contain:

- 2 features
- 10 features
- 100 features
- Thousands of dimensions

---

# 8. Manhattan Distance

Manhattan distance calculates the sum of absolute coordinate differences.

For two dimensions:

d(A,B)
=
|x2-x1|
+
|y2-y1|

For:

A = (2, 3)

B = (5, 7)

we get:

|5-2| + |7-3|

= 3 + 4

= 7

---

# 9. Manhattan Distance With NumPy

Example:

import numpy as np

A = np.array([
    2,
    3
])

B = np.array([
    5,
    7
])

distance = np.sum(
    np.abs(A - B)
)

print(distance)

Output:

7

Manhattan distance measures movement along coordinate directions rather than straight-line distance.

---

# 10. Euclidean vs Manhattan

For:

A = (2,3)

B = (5,7)

Euclidean distance:

5

Manhattan distance:

7

They measure difference differently.

Therefore the choice of distance metric can affect which observations are considered closest.

The appropriate metric depends on the problem.

---

# 11. Squared Euclidean Distance

Sometimes the square root is unnecessary.

Squared Euclidean distance is:

d^2(A,B)
=
Σ(ai-bi)^2

For:

A = (2,3)

B = (5,7)

we obtain:

3^2 + 4^2

= 25

Python:

squared_distance = np.sum(
    (A - B) ** 2
)

print(
    squared_distance
)

Output:

25

Squared distance is often mathematically convenient because it avoids the square-root operation.

---

# 12. Distance and Feature Scale

Consider:

A = [20, 2]

B = [21, 8]

The first feature changes by:

1

The second feature changes by:

6

The second feature contributes much more to Euclidean distance.

Therefore feature scale matters.

Suppose instead:

A = [20, 2000]

B = [21, 8000]

The second feature dominates even more strongly.

This is why feature scaling may be important before distance-based algorithms are used.

---

# 13. Normalizing Features

One simple normalization method is min-max scaling:

x' =
(x - xmin)
/
(xmax - xmin)

Suppose:

minimum = 0

maximum = 100

and:

x = 50

Then:

x' =
(50 - 0)
/
(100 - 0)

= 0.5

After normalization, all values lie between:

0

and:

1

under the standard min-max formula when x lies within the observed range.

---

# 14. Distance After Scaling

Suppose two features have very different units.

Feature A:

0 to 1

Feature B:

0 to 1,000,000

Distance calculations will be dominated by Feature B.

Scaling both features to comparable ranges can reduce this issue.

The exact preprocessing method depends on the dataset and algorithm.

---

# 15. Similarity

Distance asks:

How far apart are two observations?

Similarity asks:

How similar are they?

Different similarity measures answer this question in different ways.

One important similarity measure for vectors is:

Cosine Similarity.

---

# 16. Dot Product

For:

a = [a1, a2, ..., an]

and:

b = [b1, b2, ..., bn]

the dot product is:

a · b
=
Σ ai bi

Example:

a = [2, 3]

b = [4, 5]

Then:

a · b

=

(2)(4) + (3)(5)

=

8 + 15

=

23

Python:

a = np.array([
    2,
    3
])

b = np.array([
    4,
    5
])

print(
    np.dot(a, b)
)

Output:

23

---

# 17. Geometric Meaning of Dot Product

The dot product also satisfies:

a · b
=
||a||
||b||
cos(theta)

where:

theta

is the angle between the vectors.

Therefore the dot product is related to the direction of the vectors.

This leads to cosine similarity.

---

# 18. Cosine Similarity

Cosine similarity is:

cos(theta)
=
(a · b)
/
(
||a||
||b||
)

It measures directional similarity between two non-zero vectors.

Interpretation:

Near:

1

→ similar direction

Near:

0

→ approximately perpendicular

Near:

-1

→ opposite direction

The interpretation depends on the vector representation and application.

---

# 19. Cosine Similarity Example

Consider:

a = [1, 0]

b = [1, 0]

Dot product:

1

Magnitude of a:

1

Magnitude of b:

1

Therefore:

cos(theta)
=
1 / (1 × 1)

= 1

The vectors have the same direction.

---

# 20. Opposite Direction

Consider:

a = [1, 0]

b = [-1, 0]

Dot product:

-1

Magnitude:

1

and:

1

Therefore:

cos(theta) = -1

The vectors point in opposite directions.

---

# 21. Perpendicular Vectors

Consider:

a = [1, 0]

b = [0, 1]

Dot product:

(1)(0) + (0)(1)

= 0

Therefore:

cos(theta) = 0

The vectors are perpendicular.

---

# 22. Cosine Similarity With NumPy

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

cosine_similarity = (
    np.dot(a, b)
    /
    (
        np.linalg.norm(a)
        *
        np.linalg.norm(b)
    )
)

print(
    cosine_similarity
)

Output:

1.0

Why?

Because:

b = 2a

The vectors point in exactly the same direction.

---

# 23. Zero Vector Problem

Cosine similarity requires non-zero vectors.

Consider:

a = [0, 0, 0]

Its magnitude is:

0

The formula becomes:

division by zero

Therefore cosine similarity is undefined for a zero vector.

A practical implementation should check for zero magnitude.

---

# 24. Vector Normalization

Normalize:

v

using:

v_hat = v / ||v||

Suppose:

v = [3, 4]

Magnitude:

5

Therefore:

v_hat = [
3/5,
4/5
]

=

[0.6, 0.8]

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

# 25. Why Normalization Helps Similarity

For a normalized vector:

||v|| = 1

Suppose both:

a

and:

b

are normalized.

Then:

cos(theta)

becomes:

a · b

because:

||a|| = 1

and:

||b|| = 1

Therefore dot product and cosine similarity become directly related for unit vectors.

---

# 26. Distance vs Similarity

Distance:

Smaller

→ closer

Similarity:

Larger

→ more similar

Example:

Euclidean distance:

0

means identical numerical vectors.

Cosine similarity:

1

means same direction for non-zero vectors.

These are different mathematical concepts.

---

# 27. Nearest Neighbor Intuition

Suppose a new data point is:

x = [5, 6]

and we have:

A = [4, 5]

B = [9, 10]

C = [5, 7]

The algorithm can calculate distances:

d(x,A)

d(x,B)

d(x,C)

The smallest distance identifies the nearest observation.

This provides the intuition behind nearest-neighbor methods.

---

# 28. AI Example — Similar Students

Suppose:

Student A:

[20, 5, 90]

Student B:

[21, 6, 88]

Student C:

[30, 1, 60]

A similarity or distance measure can compare them.

Student A and B are likely closer under Euclidean distance than Student A and C.

The exact conclusion depends on feature scaling.

---

# 29. Similarity Search

Suppose documents are converted into embeddings.

Document A:

[0.2, 0.4, 0.6]

Document B:

[0.21, 0.39, 0.59]

Document C:

[-0.7, 0.1, 0.2]

A similarity measure can identify which document embedding is closest or points in the most similar direction.

This provides the basic mathematical intuition behind embedding-based search.

---

# 30. Embeddings

An embedding is a numerical vector representing information.

Examples include:

- Text
- Images
- Products
- Documents
- Users
- Other objects

An embedding may look like:

[0.12, -0.43, 0.77, 0.21]

The individual numbers are not usually interpreted independently by a person.

Instead, the vector as a whole represents information in a numerical space.

---

# 31. Similarity Between Embeddings

Suppose:

query =
[0.2, 0.4, 0.6]

document =
[0.21, 0.39, 0.61]

A similarity function can compare them.

Cosine similarity is frequently useful when comparing vector direction.

The general workflow is:

Query
    ↓
Embedding
    ↓
Compare With Stored Embeddings
    ↓
Similarity Score
    ↓
Rank Results
    ↓
Return Relevant Results

---

# 32. Distance-Based Clustering Intuition

Suppose we have several points.

Points that are close together may form a cluster.

Conceptually:

Data Points
    ↓
Distance Measurement
    ↓
Nearby Points
    ↓
Groups / Clusters

Clustering algorithms use specific mathematical rules to form those groups.

The exact algorithms will be studied later.

---

# 33. Practical NumPy Comparison

Example:

import numpy as np

query = np.array([
    0.2,
    0.4,
    0.6
])

candidate_a = np.array([
    0.21,
    0.39,
    0.61
])

candidate_b = np.array([
    0.8,
    0.1,
    0.2
])

distance_a = np.linalg.norm(
    query - candidate_a
)

distance_b = np.linalg.norm(
    query - candidate_b
)

similarity_a = (
    np.dot(query, candidate_a)
    /
    (
        np.linalg.norm(query)
        *
        np.linalg.norm(candidate_a)
    )
)

similarity_b = (
    np.dot(query, candidate_b)
    /
    (
        np.linalg.norm(query)
        *
        np.linalg.norm(candidate_b)
    )
)

print(
    "Distance A:",
    distance_a
)

print(
    "Distance B:",
    distance_b
)

print(
    "Cosine A:",
    similarity_a
)

print(
    "Cosine B:",
    similarity_b
)

The candidate with the smaller distance is closer under Euclidean distance.

The candidate with the larger cosine similarity points in a more similar direction.

---

# 34. A Simple Similarity Engine

We can create a reusable function.

Example:

import numpy as np

def cosine_similarity(a, b):

    norm_a = np.linalg.norm(a)
    norm_b = np.linalg.norm(b)

    if norm_a == 0 or norm_b == 0:
        return 0.0

    return (
        np.dot(a, b)
        /
        (norm_a * norm_b)
    )

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

print(
    cosine_similarity(
        a,
        b
    )
)

Output:

1.0

The zero-vector check prevents division by zero.

---

# 35. A Simple Distance Function

Example:

def euclidean_distance(a, b):

    return np.linalg.norm(
        a - b
    )

a = np.array([
    2,
    3
])

b = np.array([
    5,
    7
])

print(
    euclidean_distance(
        a,
        b
    )
)

Output:

5.0

Reusable mathematical functions make numerical AI code easier to organize.

---

# 36. Choosing a Distance or Similarity Measure

There is no single measure that is always best.

Consider:

Euclidean distance

Useful for geometric separation.

Manhattan distance

Useful when absolute coordinate differences are important.

Cosine similarity

Useful when directional similarity is important.

The appropriate metric depends on:

- Data representation
- Feature scale
- Problem type
- Algorithm
- Interpretation requirements

---

# 37. Practical Experiment

Create at least five two-dimensional points.

Example:

A = [1, 2]

B = [2, 3]

C = [5, 7]

D = [8, 9]

E = [1, 1]

Calculate:

1. Euclidean distance between every pair.
2. Manhattan distance between selected pairs.
3. Identify the closest point to A.
4. Calculate cosine similarity for selected pairs.
5. Compare the conclusions produced by distance and similarity.

---

# 38. Practice

## Practice 1

Calculate Euclidean distance between:

A = [1, 2]

B = [4, 6]

Expected:

5

## Practice 2

Calculate Manhattan distance between:

A = [1, 2]

B = [4, 6]

Expected:

7

## Practice 3

Calculate the dot product:

A = [2, 3]

B = [4, 5]

Expected:

23

## Practice 4

Calculate cosine similarity between:

A = [1, 0]

B = [1, 0]

Expected:

1

## Practice 5

Calculate cosine similarity between:

A = [1, 0]

B = [0, 1]

Expected:

0

## Practice 6

Normalize:

[3, 4]

Verify the resulting magnitude is:

1

---

# Challenge — AI Similarity Search

Build a small similarity-search system.

Create:

5 to 10 vectors.

Then:

1. Create a query vector.
2. Calculate Euclidean distance to every stored vector.
3. Calculate cosine similarity to every stored vector.
4. Sort the candidates by distance.
5. Sort the candidates by cosine similarity.
6. Display the closest vector.
7. Display the most similar vector.
8. Compare the rankings.
9. Explain why distance and cosine similarity can produce different rankings.

This gives you the mathematical foundation for later vector-search and embedding-based AI systems.

---

# Common Mistakes

## Mistake 1 — Confusing Distance and Similarity

Distance:

Smaller is generally closer.

Similarity:

Larger is generally more similar.

## Mistake 2 — Ignoring Feature Scale

A large-scale feature can dominate Euclidean distance.

Scaling may be required.

## Mistake 3 — Using Cosine Similarity With a Zero Vector

Cosine similarity is undefined for a zero vector.

## Mistake 4 — Assuming Different Metrics Give the Same Ranking

Euclidean distance and cosine similarity measure different properties.

They can produce different rankings.

## Mistake 5 — Assuming High Similarity Means Identical Data

Cosine similarity mainly describes direction.

Two vectors can have the same direction but different magnitudes.

---

# Quick Check

1. What does distance measure?

How far apart two observations are under a chosen metric.

2. What does similarity measure?

How similar two observations are according to a chosen similarity function.

3. What is Euclidean distance?

The straight-line distance between vectors or points.

4. What is Manhattan distance?

The sum of absolute coordinate differences.

5. What is squared Euclidean distance?

The sum of squared coordinate differences without taking the square root.

6. What is the dot product?

The sum of pairwise products of corresponding vector components.

7. What is cosine similarity?

A directional similarity measure based on the cosine of the angle between two non-zero vectors.

8. What does cosine similarity near 1 indicate?

Similar direction.

9. What does cosine similarity near 0 indicate?

Approximately perpendicular directions.

10. Why does feature scaling matter?

Different feature scales can disproportionately influence distance calculations.

11. Why are distance measures useful in AI?

They allow systems to compare observations, find nearby points, identify clusters, and perform similarity-based search.

12. Why are embeddings relevant?

Embeddings represent information as numerical vectors that can be compared mathematically.

---

# Key Takeaways

Distance and similarity provide mathematical ways to compare data.

Euclidean distance measures straight-line separation.

Manhattan distance measures the sum of absolute differences.

Squared Euclidean distance removes the square root.

The dot product combines corresponding vector components.

Cosine similarity measures directional similarity.

Normalization can simplify vector comparisons.

Feature scale can strongly affect distance.

Distance is useful in nearest-neighbor methods and clustering.

Similarity is useful in search, recommendation, embeddings, and comparison tasks.

Vectors provide the numerical representation required for these calculations.

The central progression is:

Data
    ↓
Vector Representation
    ↓
Distance / Similarity
    ↓
Comparison
    ↓
Ranking
    ↓
AI Decision
`,
};

export default lesson11;
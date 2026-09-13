export const lesson14 = {
  id: "lesson-14",
  title: "Distance & Similarity",
  module: "Mathematical Foundations for AI",

  content: String.raw`
# Lesson 14 — Distance & Similarity

## What You Will Learn

AI systems frequently need to determine whether two data points are close, far, similar, or different.

For example:

- Which customer is most similar to this customer?
- Which image is closest to this image?
- Which document is most similar to a query?
- Which data points belong to the same group?

These questions can be converted into mathematical problems using distance and similarity measures.

In this lesson, you will learn:

- Distance between points
- Euclidean distance
- Manhattan distance
- Vector distance
- Similarity
- Dot-product similarity
- Cosine similarity
- NumPy implementation
- Visualization
- AI applications

---

## 1. Distance Intuition

Consider two points:

\[
A=(2,3)
\]

and:

\[
B=(5,7)
\]

The difference between them is:

\[
B-A=(3,4)
\]

The Euclidean distance is:

\[
d(A,B)=\sqrt{3^2+4^2}
\]

\[
=\sqrt{25}
\]

\[
=5
\]

Distance gives an AI system a numerical way to describe how far two representations are from each other.

---

## 2. Euclidean Distance

For two vectors:

\[
A=[a_1,a_2,\ldots,a_n]
\]

and:

\[
B=[b_1,b_2,\ldots,b_n]
\]

Euclidean distance is:

\[
\boxed{
d(A,B)=
\sqrt{\sum_{i=1}^{n}(a_i-b_i)^2}
}
\]

It is the ordinary straight-line distance between two points.

### Python Implementation

\`\`\`python
import numpy as np

A = np.array([2, 3])
B = np.array([5, 7])

distance = np.linalg.norm(A - B)

print(distance)
\`\`\`

Output:

\`\`\`
5.0
\`\`\`

---

## 3. Understanding the Calculation

The NumPy expression:

\`\`\`python
A - B
\`\`\`

first calculates the difference between corresponding components.

Then:

\`\`\`python
np.linalg.norm(A - B)
\`\`\`

calculates the length of the resulting vector.

Therefore:

\[
\text{Vector Difference}
\rightarrow
\text{Vector Magnitude}
\rightarrow
\text{Distance}
\]

This connects the concepts from the previous lessons.

---

## 4. Manhattan Distance

Another important distance measure is Manhattan distance.

For:

\[
A=(2,3)
\]

and:

\[
B=(5,7)
\]

we calculate:

\[
d(A,B)=|5-2|+|7-3|
\]

\[
=3+4
\]

\[
=7
\]

The general formula is:

\[
\boxed{
d(A,B)=
\sum_{i=1}^{n}|a_i-b_i|
}
\]

Python:

\`\`\`python
distance = np.sum(np.abs(A - B))

print(distance)
\`\`\`

Output:

\`\`\`
7
\`\`\`

---

## 5. Euclidean vs Manhattan Distance

For the same two points:

\[
A=(2,3)
\]

\[
B=(5,7)
\]

Euclidean distance:

\[
5
\]

Manhattan distance:

\[
7
\]

The two measures answer slightly different questions.

Euclidean distance:

> How far apart are the points in a straight line?

Manhattan distance:

> How much total coordinate-wise movement separates the points?

The correct choice depends on the application.

---

## 6. Similarity

Distance measures how far two objects are.

Similarity measures how alike they are.

For example:

\[
A=[1,2]
\]

and:

\[
B=[2,4]
\]

have different magnitudes, but they point in the same direction.

This means they have a very similar orientation.

This type of relationship becomes especially important when AI systems represent objects using vectors.

---

## 7. Dot Product and Similarity

The dot product is:

\[
A\cdot B=
\sum_i A_iB_i
\]

For:

\[
A=[1,2]
\]

and:

\[
B=[2,4]
\]

we get:

\[
A\cdot B
=
(1)(2)+(2)(4)
\]

\[
=10
\]

The dot product contains information about the relationship between two vectors.

However, the raw dot product is affected by vector magnitude.

For many similarity problems, we want to focus more on direction.

---

## 8. Cosine Similarity

Cosine similarity measures the cosine of the angle between two vectors:

\[
\boxed{
\cos(\theta)=
\frac{A\cdot B}
{||A||||B||}
}
\]

The basic interpretation is:

- close to \(1\) → similar direction
- close to \(0\) → roughly perpendicular
- close to \(-1\) → opposite direction

For many non-negative feature representations, the value commonly lies between 0 and 1.

---

## 9. Cosine Similarity Example

Consider:

\[
A=[1,2]
\]

and:

\[
B=[2,4]
\]

Since:

\[
B=2A
\]

both vectors point in the same direction.

Therefore:

\[
\cos(\theta)=1
\]

Python:

\`\`\`python
import numpy as np

A = np.array([1, 2])
B = np.array([2, 4])

cosine_similarity = (
    np.dot(A, B)
    /
    (np.linalg.norm(A) * np.linalg.norm(B))
)

print(cosine_similarity)
\`\`\`

The output is approximately:

\`\`\`
1.0
\`\`\`

---

## 10. Distance and Similarity Are Not the Same

Consider two vectors that point in the same direction but have different magnitudes.

Cosine similarity can still be:

\[
1
\]

while Euclidean distance is not zero.

This demonstrates an important principle:

> Two vectors can have similar directions without being numerically identical.

Therefore, we choose a measure based on what "similar" means for the problem.

---

## 11. AI Application — Text Embeddings

Modern AI systems can represent text as numerical vectors called embeddings.

For example:

\[
v_1=
[0.2,0.7,0.4,\ldots]
\]

and:

\[
v_2=
[0.3,0.6,0.5,\ldots]
\]

The vectors can be compared mathematically.

Cosine similarity can help determine whether two representations have similar directions.

This idea appears in:

- semantic search
- document comparison
- recommendation systems
- retrieval systems
- natural language processing
- embedding-based AI applications

The actual embedding generation process will be studied later in the NLP and Generative AI courses.

---

## 12. Nearest-Neighbor Intuition

Suppose we have:

\[
A=(2,3)
\]

\[
B=(3,4)
\]

\[
C=(10,12)
\]

If a new point is close to \(A\), we can search for nearby examples.

The basic workflow is:

\[
\text{New Point}
\rightarrow
\text{Calculate Distances}
\rightarrow
\text{Find Nearby Points}
\rightarrow
\text{Use Nearby Information}
\]

This is the intuition behind nearest-neighbor methods.

---

## 13. Feature Scaling

Distance calculations can be strongly affected by feature scale.

Suppose a data point contains:

\[
Age=20
\]

and:

\[
Income=50000
\]

The income feature has a much larger numerical scale.

Without appropriate preprocessing, it can dominate a distance calculation.

Therefore, distance-based machine-learning methods often require careful feature scaling.

Feature scaling and preprocessing will be studied in detail in the Machine Learning course.

---

## 14. Visualizing Distance

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

A = np.array([2, 3])
B = np.array([5, 7])

plt.scatter([A[0], B[0]], [A[1], B[1]])

plt.plot(
    [A[0], B[0]],
    [A[1], B[1]]
)

plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.title("Euclidean Distance")

plt.show()
\`\`\`

The line between the points represents their direct geometric separation.

---

## 15. Practical AI Example

Suppose an AI system represents customers using:

\[
[\text{Age},\text{Spending Score}]
\]

Customer A:

\[
A=[20,40]
\]

Customer B:

\[
B=[22,43]
\]

Customer C:

\[
C=[50,90]
\]

We can calculate:

\`\`\`python
import numpy as np

A = np.array([20, 40])
B = np.array([22, 43])
C = np.array([50, 90])

distance_AB = np.linalg.norm(A - B)
distance_AC = np.linalg.norm(A - C)

print("A-B:", distance_AB)
print("A-C:", distance_AC)
\`\`\`

If:

\[
d(A,B)<d(A,C)
\]

then B is numerically closer to A than C is.

This is the basic mathematical idea behind similarity-based systems.

---

## Practice

### Practice 1

Calculate the Euclidean distance between:

\[
A=(1,2)
\]

and:

\[
B=(4,6)
\]

First calculate it manually and then using NumPy.

### Practice 2

Calculate the Manhattan distance between the same points.

### Practice 3

Calculate the cosine similarity between:

\[
A=[1,2]
\]

and:

\[
B=[2,4]
\]

### Practice 4

Create five two-dimensional vectors and calculate the distance between a reference vector and each of them.

### Practice 5

Create two numerical feature vectors and compare them using both Euclidean distance and cosine similarity.

---

## Challenge

Build a **Similarity Analyzer**.

The program should:

1. Accept a reference vector.
2. Accept multiple comparison vectors.
3. Calculate Euclidean distance.
4. Calculate Manhattan distance.
5. Calculate cosine similarity.
6. Identify the most similar vector.
7. Display the results.
8. Visualize two-dimensional vectors using Matplotlib.
9. Explain why different similarity measures can produce different interpretations.

---

## Common Mistakes

- Confusing distance with similarity.
- Forgetting to square differences in Euclidean distance.
- Forgetting absolute values in Manhattan distance.
- Comparing vectors with different dimensions.
- Assuming the largest dot product always means the most similar vectors.
- Ignoring feature scaling when using distance-based methods.
- Assuming cosine similarity and Euclidean distance measure exactly the same property.

---

## Quick Check

1. What does distance measure?
2. What is Euclidean distance?
3. What is Manhattan distance?
4. How are Euclidean and Manhattan distance different?
5. What does similarity measure?
6. What is cosine similarity?
7. What does a cosine similarity close to 1 indicate?
8. Why can feature scale affect distance?
9. How can distance be used in machine learning?
10. How can cosine similarity be used with embeddings?
11. Why might an AI system use different distance measures?
12. Why is mathematical understanding important before using a library function?

---

## Key Takeaways

- Distance measures how far apart two vectors are.
- Euclidean distance represents straight-line distance.
- Manhattan distance measures coordinate-wise distance.
- Similarity measures how alike two representations are.
- Cosine similarity focuses on the direction of vectors.
- Dot products form the mathematical basis of cosine similarity.
- Distance and similarity are useful in nearest-neighbor systems, recommendations, search, and embeddings.
- Feature scaling can be important for distance-based algorithms.
- NumPy provides practical implementations of these mathematical operations.
`,

  practiceTask:
    "Implement Euclidean distance, Manhattan distance, and cosine similarity for multiple vectors and compare the results.",

  quickCheck: [
    "What is Euclidean distance?",
    "What is Manhattan distance?",
    "What does cosine similarity measure?",
    "Why can feature scaling affect distance calculations?",
    "How are distance and similarity used in AI?"
  ]
};
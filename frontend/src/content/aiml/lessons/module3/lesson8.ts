const lesson = {
  lesson: "08",
  title: "Numerical Computation with NumPy",

  content: `
# Lesson 08 — Numerical Computation with NumPy

## What You Will Learn

In this lesson, you will learn:

- How NumPy performs numerical computation efficiently.
- Element-wise arithmetic operations.
- Aggregation functions such as sum, mean, minimum, and maximum.
- Vectorized computation.
- Broadcasting.
- Mathematical functions in NumPy.
- Why NumPy is important for AI and machine learning.
- How numerical computation connects to model training.

## 1. Why Numerical Computation Matters in AI

AI systems work with numbers.

Images, text representations, sensor readings, datasets, model parameters, probabilities, and neural-network weights are represented numerically.

For example:

\`\`\`text
Image → Pixel values
Text → Numerical representations
Features → Numerical vectors
Model weights → Numerical matrices
\`\`\`

Python lists can perform numerical operations, but they are not optimized for large-scale numerical computation.

NumPy provides efficient array-based computation.

## 2. Element-Wise Operations

NumPy allows arithmetic operations to be performed element by element.

\`\`\`python
import numpy as np

a = np.array([1, 2, 3])
b = np.array([10, 20, 30])

print(a + b)
print(a - b)
print(a * b)
print(a / b)
\`\`\`

Output:

\`\`\`text
[11 22 33]
[-9 -18 -27]
[10 40 90]
[0.1 0.1 0.1]
\`\`\`

The operations are performed efficiently across the complete array.

## 3. Aggregation Functions

NumPy provides functions for summarizing numerical data.

\`\`\`python
import numpy as np

scores = np.array([72, 85, 91, 68, 95])

print("Sum:", np.sum(scores))
print("Mean:", np.mean(scores))
print("Minimum:", np.min(scores))
print("Maximum:", np.max(scores))
\`\`\`

These operations are useful when analyzing datasets.

## 4. Axis-Based Computation

For multidimensional arrays, NumPy can calculate values along different axes.

\`\`\`python
import numpy as np

data = np.array([
    [10, 20, 30],
    [40, 50, 60]
])

print(np.sum(data, axis=0))
print(np.sum(data, axis=1))
\`\`\`

The axis determines the direction in which the calculation is performed.

## 5. Broadcasting

Broadcasting allows NumPy to perform operations between arrays of compatible shapes.

\`\`\`python
import numpy as np

features = np.array([
    [10, 20],
    [30, 40],
    [50, 60]
])

offset = np.array([1, 2])

result = features + offset

print(result)
\`\`\`

Output:

\`\`\`text
[[11 22]
 [31 42]
 [51 62]]
\`\`\`

Broadcasting is extremely useful in machine learning preprocessing and numerical algorithms.

## 6. Mathematical Functions

NumPy provides many mathematical functions.

\`\`\`python
import numpy as np

x = np.array([1, 4, 9, 16])

print(np.sqrt(x))
print(np.square(x))
print(np.log(x))
print(np.exp(x))
\`\`\`

These functions are used throughout scientific computing and AI.

## 7. Vectorization

Vectorization means applying an operation to an entire array without explicitly writing a Python loop.

Traditional approach:

\`\`\`python
numbers = [1, 2, 3, 4, 5]

result = []

for number in numbers:
    result.append(number * 2)

print(result)
\`\`\`

NumPy approach:

\`\`\`python
import numpy as np

numbers = np.array([1, 2, 3, 4, 5])

result = numbers * 2

print(result)
\`\`\`

Vectorized computation is generally faster and cleaner for numerical workloads.

## 8. Numerical Computation in Machine Learning

Suppose a model calculates:

\`\`\`text
prediction = weight × feature + bias
\`\`\`

NumPy can perform this calculation efficiently.

\`\`\`python
import numpy as np

features = np.array([2, 4, 6])
weights = np.array([0.5, 0.8, 0.3])
bias = 1

prediction = np.sum(features * weights) + bias

print(prediction)
\`\`\`

This idea forms the foundation of many machine-learning computations.

## 9. Practical AI Example

Consider three students represented using:

\`\`\`text
[study_hours, attendance]
\`\`\`

We can represent the data using a matrix.

\`\`\`python
import numpy as np

students = np.array([
    [5, 90],
    [7, 95],
    [3, 70],
    [8, 98]
])

print("Average study hours:",
      np.mean(students[:, 0]))

print("Average attendance:",
      np.mean(students[:, 1]))
\`\`\`

This demonstrates how raw data can be converted into numerical information suitable for further analysis.

## 10. Important Concepts

Remember:

- NumPy provides efficient numerical arrays.
- Operations can be performed element-wise.
- Aggregation functions summarize data.
- Broadcasting allows compatible arrays to interact.
- Vectorization reduces the need for explicit loops.
- NumPy is heavily used in machine learning and scientific computing.

## Mini Practice

1. Create an array containing five temperatures.
2. Calculate the average temperature.
3. Find the highest and lowest temperature.
4. Add 5 to every temperature using vectorization.
5. Calculate the square of every value.

## Key Takeaways

NumPy is one of the fundamental tools used in AI computing.

The ability to efficiently manipulate vectors, matrices, and numerical datasets is essential before moving into machine learning and deep learning.
`,
};

export default lesson;
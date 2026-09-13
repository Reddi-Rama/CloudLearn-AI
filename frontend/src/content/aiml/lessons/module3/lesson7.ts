const lesson7 = {
  title: "NumPy Indexing, Slicing & Vectorized Computation",

  content: `
# NumPy Indexing, Slicing & Vectorized Computation

## What You Will Learn

In this lesson, you will learn how to access, select, modify, and transform parts of NumPy arrays.

You will learn:

- One-dimensional indexing
- Two-dimensional indexing
- Row and column selection
- Slicing
- Multidimensional slicing
- Boolean masking
- Filtering numerical data
- Modifying arrays
- Vectorized operations
- Mathematical transformations
- Comparison with Python loops
- Broadcasting in practical AI computation
- Feature-wise transformations
- Why vectorization is important for large AI datasets

---

# 1. Why Indexing Matters in AI

Suppose an AI dataset contains:

100,000 observations

and:

20 features.

Sometimes we do not want the entire dataset.

We may need:

- One observation
- One feature
- A subset of observations
- A subset of features
- Values satisfying a condition
- A specific region of an image

NumPy indexing and slicing make these operations possible.

---

# 2. One-Dimensional Indexing

Consider:

import numpy as np

scores = np.array([70, 80, 90, 60, 85])

print(scores[0])

Output:

70

Remember:

NumPy uses zero-based indexing.

Therefore:

0 → 70

1 → 80

2 → 90

3 → 60

4 → 85

---

# 3. Negative Indexing

NumPy also supports negative indices.

Example:

print(scores[-1])

Output:

85

The mapping is:

-1 → last element

-2 → second-last element

-3 → third-last element

This is useful when we need values relative to the end of an array.

---

# 4. Mathematical Interpretation

If:

x = [x1, x2, x3, x4, x5]

Python uses:

x[0]

for the first value.

Therefore:

program_index = mathematical_position - 1

This difference is important when translating mathematical notation into code.

---

# 5. Two-Dimensional Indexing

Consider:

X = np.array([
    [20, 5, 92],
    [21, 7, 88],
    [19, 3, 95]
])

To access the first row:

print(X[0])

Output:

[20 5 92]

To access the second row:

print(X[1])

Output:

[21 7 88]

To access the value in row 2, column 3:

print(X[1, 2])

Output:

88

Remember:

row index comes first

column index comes second.

---

# 6. Row and Column Positions

For:

X =
[
  20 5 92
  21 7 88
  19 3 95
]

Indices are:

row 0:

20  5  92

row 1:

21  7  88

row 2:

19  3  95

Column indices:

0 → first column

1 → second column

2 → third column

Therefore:

X[2, 1]

means:

third row

second column

Result:

3

---

# 7. Selecting a Feature Column

Suppose:

column 0 = age

column 1 = study hours

column 2 = attendance

To select all study hours:

print(X[:, 1])

Output:

[5 7 3]

The colon means:

all rows

The second index:

1

selects the study-hours column.

Therefore:

X[:, 1]

means:

all rows, column 1.

---

# 8. Selecting All Rows

Consider:

X[:, :]

This means:

all rows

and:

all columns.

Therefore:

X[:, :]

returns the full array.

This syntax is useful when slicing larger multidimensional arrays.

---

# 9. Selecting a Range of Rows

Suppose:

X = np.array([
    [20, 5, 92],
    [21, 7, 88],
    [19, 3, 95],
    [22, 4, 80]
])

Then:

print(X[0:2])

Output:

[
  [20 5 92]
  [21 7 88]
]

Python slicing uses:

start

to:

stop

where the stop index is excluded.

Therefore:

0:2

selects indices:

0

and:

1

---

# 10. Basic Slicing Rule

For:

array[start:stop]

Python selects:

start

through:

stop - 1

Example:

x = np.array([10, 20, 30, 40, 50])

print(x[1:4])

Output:

[20 30 40]

Indices selected:

1

2

3

Index 4 is excluded.

---

# 11. Slicing With a Step

Example:

x = np.array([10, 20, 30, 40, 50, 60])

print(x[0:6:2])

Output:

[10 30 50]

The syntax is:

[start:stop:step]

Therefore:

0:6:2

means:

start at 0

stop before 6

take every second element.

---

# 12. Reverse an Array

Python allows:

x[::-1]

Example:

x = np.array([10, 20, 30, 40, 50])

print(x[::-1])

Output:

[50 40 30 20 10]

The negative step moves backwards.

This can be useful for reversing sequences.

---

# 13. Two-Dimensional Slicing

Suppose:

X = np.array([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
])

Select the first two rows:

print(X[0:2, :])

Output:

[
  [1 2 3 4]
  [5 6 7 8]
]

Select the last two columns:

print(X[:, 2:4])

Output:

[
  [3 4]
  [7 8]
  [11 12]
]

---

# 14. Selecting a Submatrix

Example:

print(X[0:2, 1:3])

Output:

[
  [2 3]
  [6 7]
]

The first slice:

0:2

selects rows 0 and 1.

The second slice:

1:3

selects columns 1 and 2.

This allows us to extract regions from an array.

---

# 15. Images and Slicing

Suppose an image is represented as:

image

with shape:

(height, width)

A region can be extracted using:

image[100:200, 150:300]

This selects:

rows 100 through 199

and:

columns 150 through 299.

This idea is fundamental in image processing.

---

# 16. Modifying an Array

NumPy arrays can be modified.

Example:

scores = np.array([70, 80, 90, 60])

scores[0] = 75

print(scores)

Output:

[75 80 90 60]

The first value changed from:

70

to:

75.

---

# 17. Modifying a Matrix Element

Example:

X = np.array([
    [10, 20],
    [30, 40]
])

X[1, 0] = 99

print(X)

Output:

[
  [10 20]
  [99 40]
]

The row index:

1

and column index:

0

identify the element being modified.

---

# 18. Vectorized Computation

Vectorization means applying an operation to an entire array without explicitly writing a Python loop for every element.

Example:

x = np.array([1, 2, 3, 4, 5])

y = x * 10

print(y)

Output:

[10 20 30 40 50]

Mathematically:

yi = 10xi

for every i.

The operation is expressed directly on the array.

---

# 19. Loop Version

Without vectorization:

x = [1, 2, 3, 4, 5]

result = []

for value in x:
    result.append(value * 10)

print(result)

This explicitly performs the operation one value at a time.

NumPy allows:

x = np.array([1, 2, 3, 4, 5])

result = x * 10

print(result)

The mathematical intention is much more direct.

---

# 20. Vectorized Addition

Example:

x = np.array([10, 20, 30])
y = np.array([1, 2, 3])

z = x + y

print(z)

Output:

[11 22 33]

Mathematically:

z_i = x_i + y_i

Therefore:

10 + 1 = 11

20 + 2 = 22

30 + 3 = 33

---

# 21. Vectorized Polynomial

Suppose:

y = 3x^2 + 2x + 1

Instead of writing a loop:

x = np.array([1, 2, 3, 4])

y = 3 * x ** 2 + 2 * x + 1

print(y)

Calculate manually:

For x = 1:

y = 3(1)^2 + 2(1) + 1

= 3 + 2 + 1

= 6

For x = 2:

y = 3(2)^2 + 2(2) + 1

= 12 + 4 + 1

= 17

The NumPy expression calculates all values at once.

Output:

[6 17 34 57]

---

# 22. Vectorized Mathematical Transformation

Suppose:

x = np.array([10, 20, 30, 40])

and:

y = 2x + 5

Python:

y = 2 * x + 5

Output:

[25 45 65 85]

Mathematically:

y1 = 2(10) + 5 = 25

y2 = 2(20) + 5 = 45

y3 = 2(30) + 5 = 65

y4 = 2(40) + 5 = 85

This is exactly the type of mathematical transformation used throughout machine learning.

---

# 23. Vectorized Normalization

Suppose:

x = np.array([10, 20, 30, 40, 50])

We want:

x' = (x - x_min) / (x_max - x_min)

Python:

minimum = x.min()
maximum = x.max()

normalized = (
    x - minimum
) / (
    maximum - minimum
)

print(normalized)

Output:

[0.   0.25 0.5  0.75 1.  ]

The formula is applied to every value.

No explicit loop is required.

---

# 24. Boolean Comparisons

NumPy can compare an entire array.

Example:

scores = np.array([45, 72, 81, 55, 90])

result = scores >= 70

print(result)

Output:

[False  True  True False  True]

Each element is tested.

Mathematically:

xi >= 70

for every i.

This produces a Boolean mask.

---

# 25. Boolean Masking

The Boolean result can be used to filter the array.

Example:

scores = np.array([45, 72, 81, 55, 90])

mask = scores >= 70

print(scores[mask])

Output:

[72 81 90]

This means:

select values for which:

score >= 70

is true.

This is extremely useful in data analysis.

---

# 26. Direct Filtering

The operation can also be written:

scores = np.array([45, 72, 81, 55, 90])

print(scores[scores >= 70])

Output:

[72 81 90]

This compact expression performs:

Comparison

then:

Filtering

---

# 27. Multiple Conditions

Suppose we want scores between:

60

and:

90

Use:

scores = np.array([45, 72, 81, 55, 90, 95])

filtered = scores[
    (scores >= 60) &
    (scores <= 90)
]

print(filtered)

Output:

[72 81 90]

The symbol:

&

represents element-wise logical AND.

NumPy uses parentheses around each comparison.

---

# 28. Boolean Masking for AI Data

Suppose:

X = np.array([
    [20, 5, 92],
    [21, 7, 88],
    [19, 3, 95],
    [22, 4, 80]
])

Study hours are column 1.

To select observations where study hours are at least 5:

mask = X[:, 1] >= 5

print(X[mask])

Output:

[
  [20  5 92]
  [21  7 88]
]

The mask selects entire observations.

---

# 29. Feature Filtering

Suppose:

age = X[:, 0]

We can filter by age:

mask = age >= 20

selected = X[mask]

This creates a subset of the dataset.

The general pattern is:

Feature
   ↓
Condition
   ↓
Boolean Mask
   ↓
Selected Observations

This is an important data-analysis technique.

---

# 30. Vectorized Feature Transformation

Suppose study hours are in column 1.

We want to add one hour to every observation.

Instead of a loop:

X[:, 1] = X[:, 1] + 1

This updates the complete feature column.

Mathematically:

x_i' = x_i + 1

for every observation.

---

# 31. Broadcasting in Practice

Suppose:

X = np.array([
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
])

and:

offset = np.array([1, 5, 10])

Then:

Y = X + offset

Output:

[
  [11 25 40]
  [41 55 70]
  [71 85 100]
]

The offset is applied to every row.

---

# 32. Mathematical Interpretation

Let:

X =
[
  x11 x12 x13
  x21 x22 x23
  x31 x32 x33
]

and:

b =
[
  b1 b2 b3
]

Then:

Y = X + b

where:

yij = xij + bj

The same vector:

b

is applied to every observation.

This is broadcasting.

---

# 33. Feature Scaling With Broadcasting

Suppose different features have different scale factors.

Example:

X =
[
  20  5  92
  21  7  88
  19  3  95
]

Suppose we divide by:

scale = [100, 10, 100]

Then:

X_scaled = X / scale

NumPy broadcasts the scale vector across all rows.

This creates:

[
  0.20  0.5  0.92
  0.21  0.7  0.88
  0.19  0.3  0.95
]

This resembles the type of feature scaling performed during preprocessing.

---

# 34. NumPy Mathematical Functions

Vectorized computation is not limited to basic arithmetic.

Example:

x = np.array([1, 4, 9, 16])

print(np.sqrt(x))

Output:

[1. 2. 3. 4.]

The mathematical transformation is:

y = sqrt(x)

for every element.

---

# 35. Exponential Transformation

Example:

x = np.array([0, 1, 2])

print(np.exp(x))

The transformation is:

y_i = e^(x_i)

This type of function appears in machine-learning mathematics.

For example, exponential functions are part of:

softmax

and:

probability transformations.

---

# 36. Logarithmic Transformation

Example:

x = np.array([
    1,
    10,
    100,
    1000
])

print(np.log10(x))

Output:

[0. 1. 2. 3.]

Mathematically:

log10(1) = 0

log10(10) = 1

log10(100) = 2

log10(1000) = 3

Log transformations are often useful when numerical values span very large ranges.

---

# 37. Absolute Values

Example:

errors = np.array([
    -5,
    3,
    -2,
    7
])

absolute_errors = np.abs(errors)

print(absolute_errors)

Output:

[5 3 2 7]

This is useful in error analysis.

Mathematically:

|−5| = 5

|3| = 3

---

# 38. Real AI Example — Prediction Error

Suppose actual values are:

actual = np.array([80, 90, 70, 60])

Predictions:

predicted = np.array([75, 85, 72, 65])

Error:

error = actual - predicted

Python:

error = actual - predicted

print(error)

Output:

[ 5  5 -2 -5]

Absolute error:

absolute_error = np.abs(error)

Output:

[5 5 2 5]

Squared error:

squared_error = error ** 2

Output:

[25 25  4 25]

These operations are directly relevant to machine-learning evaluation.

---

# 39. Mean Squared Error

Suppose:

error = actual - predicted

Mean squared error is:

MSE = (1/n) Σ (yi - y_hat_i)^2

Python:

mse = np.mean(
    (actual - predicted) ** 2
)

For:

errors:

5, 5, -2, -5

Squared values:

25, 25, 4, 25

Therefore:

MSE = (25 + 25 + 4 + 25) / 4

= 79 / 4

= 19.75

The NumPy expression performs the complete calculation compactly.

---

# 40. Why Vectorization Matters

Suppose:

1,000,000

values need to be transformed.

A Python loop requires repeatedly executing Python-level operations.

A NumPy expression can operate on the array using optimized numerical machinery.

For example:

x = np.array(...)

y = 2 * x + 5

This is easier to express and can be much more efficient for numerical workloads.

Exact speedups depend on the operation, data types, hardware, memory layout, and implementation.

The key principle is:

Express numerical computation as array operations whenever practical.

---

# 41. Vectorization vs Loop

Loop:

result = []

for value in values:
    result.append(
        2 * value + 5
    )

Vectorized:

result = 2 * values + 5

Mathematically both perform:

y_i = 2x_i + 5

The NumPy version expresses the mathematics more directly.

---

# 42. Conditional Transformation

Suppose scores are:

scores = np.array([
    45, 65, 82, 91, 55
])

We want:

scores >= 80 → 1

otherwise → 0

One approach is:

labels = (scores >= 80).astype(int)

Output:

[0 0 1 1 0]

This converts Boolean values:

False → 0

True → 1

Such transformations are common when preparing target labels.

---

# 43. AI Connection — Binary Labels

Suppose:

prediction_score >= 80

means:

Strong

and:

prediction_score < 80

means:

Not Strong

The Boolean condition can become numerical labels:

0

or:

1

The pipeline becomes:

Numerical Feature
      ↓
Condition
      ↓
Boolean Mask
      ↓
Numerical Label

This demonstrates how data representation changes during AI preprocessing.

---

# 44. Selecting Rows With Multiple Features

Consider:

X = np.array([
    [20, 5, 92],
    [21, 7, 88],
    [19, 3, 95],
    [22, 4, 80],
    [20, 6, 91]
])

Suppose we want:

study hours >= 5

and:

attendance >= 90

Then:

mask = (
    (X[:, 1] >= 5) &
    (X[:, 2] >= 90)
)

selected = X[mask]

The selected rows satisfy both conditions.

This is a direct example of multi-feature filtering.

---

# 45. Vectorized Distance

Suppose:

x = np.array([2, 4, 6])

and:

center = np.array([3, 3, 3])

We can calculate the element-wise difference:

difference = x - center

Output:

[-1 1 3]

Squared difference:

difference ** 2

Output:

[1 1 9]

Sum:

np.sum(
    (x - center) ** 2
)

Output:

11

This pattern appears in distance calculations and optimization.

---

# 46. Euclidean Distance

For vectors:

x

and:

y

Euclidean distance is:

d(x, y) =
sqrt(
Σ(x_i - y_i)^2
)

Python:

x = np.array([1, 2, 3])

y = np.array([4, 6, 3])

distance = np.sqrt(
    np.sum((x - y) ** 2)
)

print(distance)

Calculate:

x - y:

[-3, -4, 0]

Squared:

[9, 16, 0]

Sum:

25

Square root:

5

Output:

5.0

This connects directly with clustering, nearest-neighbor methods, and AI search heuristics.

---

# 47. Practical Experiment — Vectorized Transformation

Create:

x = np.arange(1, 11)

Calculate:

y = 3 * x ** 2 + 2 * x + 1

Print both arrays.

Then verify the result for:

x = 5

Manually calculate:

y = 3(5)^2 + 2(5) + 1

= 75 + 10 + 1

= 86

The corresponding NumPy element should also be:

86

---

# 48. Practical Experiment — Filtering

Create:

scores = np.array([
    42, 56, 71, 83, 95, 64, 88, 39
])

Perform:

1. Select scores >= 70.
2. Select scores < 50.
3. Select scores between 60 and 90.
4. Count how many scores are >= 70.
5. Calculate the mean of scores >= 70.

This combines:

Boolean masking

Filtering

Aggregation

---

# 49. Practical Experiment — AI Feature Filtering

Create:

X = np.array([
    [20, 5, 92],
    [21, 7, 88],
    [19, 3, 95],
    [22, 4, 80],
    [20, 6, 91],
    [23, 2, 76]
])

Columns:

age

study hours

attendance

Select observations satisfying:

study hours >= 5

and:

attendance >= 90

Print the result.

Then modify the conditions.

Observe how the dataset changes.

---

# 50. Practical Experiment — Prediction Error

Create:

actual = np.array([
    80, 90, 70, 60, 95
])

predicted = np.array([
    78, 88, 75, 64, 90
])

Calculate:

error

absolute error

squared error

mean absolute error

mean squared error

Use NumPy vectorized operations.

Mathematical formulas:

MAE = (1/n) Σ |yi - y_hat_i|

MSE = (1/n) Σ (yi - y_hat_i)^2

This is an important preparation for machine-learning evaluation.

---

# 51. Copy vs View

NumPy slicing can create a view rather than a completely independent copy.

Example:

X = np.array([
    [1, 2],
    [3, 4]
])

part = X[:, 0]

Changing:

part[0] = 99

may also affect X because the slice can refer to the same underlying data.

This is an important implementation detail.

When an independent copy is needed:

part = X[:, 0].copy()

Then modifications to part do not modify the original array.

---

# 52. Why This Matters

Suppose an AI preprocessing step creates:

training_data

from:

original_data

Accidental modification of a shared view could change the original data unexpectedly.

Therefore, understanding whether an operation returns a view or copy is important for reliable numerical programs.

---

# 53. Common Mistakes

## Mistake 1 — Forgetting zero-based indexing

The first element is index 0.

## Mistake 2 — Using the wrong slice endpoint

The stop index is excluded.

## Mistake 3 — Forgetting parentheses with multiple Boolean conditions

Use:

(scores >= 60) & (scores <= 90)

rather than combining conditions incorrectly.

## Mistake 4 — Using Python and instead of NumPy element-wise logic

NumPy arrays normally require:

&

for element-wise AND.

Use:

|

for element-wise OR.

## Mistake 5 — Confusing element-wise multiplication with matrix multiplication

x * y

is element-wise.

Matrix multiplication requires:

x @ y

when the dimensions are compatible.

## Mistake 6 — Accidentally modifying the original data through a view

Use:

.copy()

when an independent array is required.

---

# 54. Practice Tasks

## Task 1

Create a one-dimensional NumPy array with 20 values.

Practice:

- first value
- last value
- first five values
- every second value
- reversed array

## Task 2

Create a:

6 × 4

matrix.

Extract:

- first row
- last row
- first column
- last column
- middle submatrix

## Task 3

Filter numerical values using:

> 50

between:

30 and 70

< 20

## Task 4

Create a feature matrix containing:

age

study hours

attendance

score

Filter observations using multiple conditions.

## Task 5

Implement vectorized normalization.

## Task 6

Calculate MAE and MSE using NumPy.

---

# 55. Challenge — Vectorized AI Preprocessor

Create a NumPy dataset with:

100 observations

and:

4 numerical features.

The program must:

1. Inspect the shape.
2. Separate features and target.
3. Calculate feature means.
4. Calculate feature standard deviations.
5. Normalize the features.
6. Identify observations above a selected threshold.
7. Calculate prediction errors.
8. Compute MAE.
9. Compute MSE.
10. Avoid explicit Python loops for the main numerical operations.

The objective is to express the mathematical workflow as vectorized NumPy operations.

---

# 56. Challenge — Image Region Extraction

Create a:

10 × 10

NumPy matrix representing a grayscale image.

Then:

1. Extract the top-left region.
2. Extract the center region.
3. Reverse the image horizontally.
4. Increase every pixel by 20.
5. Clip values to the valid intensity range.
6. Identify pixels greater than 200.

This demonstrates how indexing, slicing, vectorization, and Boolean masking are used in numerical image processing.

---

# 57. Quick Check

What is indexing?

Accessing a specific array element using its position.

What is slicing?

Selecting a range or region of an array.

What does X[:, 1] mean?

All rows of column 1.

What is vectorization?

Applying numerical operations to arrays directly rather than explicitly looping through each value.

What is a Boolean mask?

An array of True and False values used to select elements satisfying a condition.

What does:

scores[scores >= 70]

do?

It returns only the values satisfying:

score >= 70.

What is broadcasting?

Applying compatible smaller arrays across larger arrays during numerical operations.

What is the difference between * and @?

* performs element-wise multiplication.

@ performs matrix multiplication.

---

# 58. Key Takeaways

- NumPy uses zero-based indexing.
- Negative indices access elements from the end.
- Two-dimensional arrays use row and column indices.
- Slicing selects ranges and subregions.
- Multidimensional slicing is useful for matrices and images.
- Boolean masks provide powerful filtering.
- Vectorized operations express mathematical transformations directly.
- Broadcasting allows compatible arrays to interact efficiently.
- NumPy can calculate transformations, distances, errors, and preprocessing operations without explicit Python loops.
- Numerical operations such as normalization and prediction-error calculation map naturally to array expressions.
- Understanding views and copies helps prevent accidental data modification.
- These capabilities form the bridge between Python programming and practical numerical AI computing.

The central progression is:

Python Loop
      ↓
Element-by-Element Computation
      ↓
NumPy Array Operation
      ↓
Vectorized Computation
      ↓
Efficient AI Data Processing
`,
};

export default lesson7;

const lesson4 = {
  title: "Collections & Data Structures for AI",

  content: `
# Collections & Data Structures for AI

## What You Will Learn

In AI, data rarely exists as a single value. A program may need to process thousands of observations, features, states, labels, or configuration values.

Python provides several structures for organizing this information:

- Lists
- Tuples
- Sets
- Dictionaries
- Nested structures
- Feature vectors
- Records
- Dataset representations

The goal of this lesson is to understand how Python structures real-world information and how those structures eventually become numerical data for AI systems.

---

# 1. Lists

A list stores an ordered collection.

Example:

scores = [70, 80, 90, 60, 85]

print(scores)

Output:

[70, 80, 90, 60, 85]

A list can represent a sequence of observations.

Mathematically:

X = [70, 80, 90, 60, 85]

Lists are useful when:

- Order matters
- Values may change
- Multiple observations need to be stored
- We want to iterate through values

---

# 2. Processing a List

Example:

scores = [70, 80, 90, 60, 85]

total = 0

for score in scores:
    total += score

average = total / len(scores)

print("Average:", average)

Output:

Average: 77.0

Mathematically:

x_bar = (70 + 80 + 90 + 60 + 85) / 5

x_bar = 385 / 5

x_bar = 77

This is a simple example of turning a collection into a mathematical quantity.

The program takes:

Collection
    ↓
Aggregation
    ↓
Average

This same pattern appears repeatedly in AI and data analysis.

---

# 3. Indexing

Python lists use zero-based indexing.

Example:

scores = [70, 80, 90, 60, 85]

print(scores[0])
print(scores[3])

Output:

70
60

The indexing is:

0 → 70
1 → 80
2 → 90
3 → 60
4 → 85

Zero-based indexing is important when converting mathematical data representations into programs.

A common mistake is assuming that the first element is index 1.

In Python:

First element = index 0

---

# 4. Tuples

A tuple is useful for fixed collections.

Example:

position = (4, 7)

print(position)

Mathematically:

s = (4, 7)

This is particularly useful for AI state representation.

For example, in a grid:

(row, column)

can represent one state.

Unlike a list, a tuple communicates that the collection represents a fixed structure.

---

# 5. Moving Between States

Suppose:

state = (3, 5)

Moving right means:

(r, c) → (r, c + 1)

Python:

state = (3, 5)

next_state = (
    state[0],
    state[1] + 1
)

print(next_state)

Output:

(3, 6)

This connects directly to state-transition models used in AI search.

The program receives:

(3, 5)

and produces:

(3, 6)

The state has changed according to a defined action.

---

# 6. Sets

A set stores unique values.

Example:

values = {10, 20, 30, 20, 10}

print(values)

The duplicate values are removed.

Conceptually:

{10, 20, 30, 20, 10}

becomes:

{10, 20, 30}

A set is useful when uniqueness matters.

---

# 7. Sets in Search Algorithms

Sets are particularly useful for tracking visited states.

Example:

visited = set()

visited.add((0, 0))
visited.add((0, 1))
visited.add((1, 1))

if (0, 1) in visited:
    print("Already explored")

Output:

Already explored

This prevents search algorithms from unnecessarily revisiting states.

This is directly connected to BFS, DFS, and other AI search algorithms studied earlier.

---

# 8. Dictionaries

Dictionaries store key-value pairs.

Example:

student = {
    "age": 20,
    "study_hours": 5,
    "attendance": 92,
    "score": 81
}

Access a value:

print(student["study_hours"])

Output:

5

The dictionary is useful because the meaning of each value is explicit.

Instead of remembering:

index 0 = age

index 1 = study hours

we can write:

student["study_hours"]

This makes structured information easier to understand.

---

# 9. Data Records

A dictionary can represent one observation.

Example:

student = {
    "age": 20,
    "study_hours": 5,
    "attendance": 92,
    "score": 81
}

We can identify:

x = [20, 5, 92]

as the input features and:

y = 81

as the target value.

This introduces the basic machine-learning structure:

X → y

where:

X = input features

y = target

This relationship will become central to machine learning.

---

# 10. Dataset as a Collection of Records

A dataset can be represented as a list of dictionaries.

Example:

students = [
    {
        "age": 20,
        "study_hours": 5,
        "score": 81
    },
    {
        "age": 21,
        "study_hours": 7,
        "score": 90
    },
    {
        "age": 19,
        "study_hours": 3,
        "score": 72
    }
]

The outer list represents the dataset.

Each dictionary represents one observation.

This is a natural bridge between real-world records and machine-learning datasets.

---

# 11. Processing Records

Example:

for student in students:
    print(
        student["study_hours"],
        student["score"]
    )

Output:

5 81
7 90
3 72

Calculate the average:

total = 0

for student in students:
    total += student["score"]

average = total / len(students)

print("Average:", average)

Mathematically:

(81 + 90 + 72) / 3

= 243 / 3

= 81

This shows how a collection of structured records can be processed using ordinary Python.

---

# 12. Filtering Records

Suppose we want students who studied at least five hours.

Example:

for student in students:
    if student["study_hours"] >= 5:
        print(student)

The condition is:

study_hours >= 5

This is basic dataset filtering.

The same idea later becomes:

DataFrame filtering

when we use Pandas.

---

# 13. Feature Vectors

A machine-learning system eventually needs numerical input.

Example:

features = [20, 5, 92]

This can represent:

age = 20

study hours = 5

attendance = 92

Mathematically:

x =
[
  20
  5
  92
]

This is called a feature vector.

In general:

x = [x1, x2, ..., xd]

where:

d = number of features.

One observation therefore becomes a point in a d-dimensional feature space.

---

# 14. Feature Matrix

Multiple observations produce a matrix.

Example:

X = [
    [20, 5, 92],
    [21, 7, 88],
    [19, 3, 95]
]

Mathematically:

X belongs to R^(3 × 3)

If there are:

n = 3

observations and:

d = 3

features, then:

X belongs to R^(3 × 3)

The rows represent observations.

The columns represent features.

This representation will soon be converted into a NumPy array.

---

# 15. Why NumPy Is Needed

A Python nested list can represent:

X = [
    [20, 5, 92],
    [21, 7, 88],
    [19, 3, 95]
]

But numerical operations require loops.

For example:

result = []

for row in X:

    new_row = []

    for value in row:
        new_row.append(value * 2)

    result.append(new_row)

The program manually processes every value.

NumPy lets us write:

import numpy as np

X = np.array([
    [20, 5, 92],
    [21, 7, 88],
    [19, 3, 95]
])

result = X * 2

Mathematically:

Y = 2X

NumPy performs the operation across the entire array.

This is the transition from basic Python data structures to numerical computing.

---

# 16. Lists vs Tuples vs Sets vs Dictionaries

Think about the purpose of each structure.

List:

Ordered collection of values.

Tuple:

Fixed structured collection.

Set:

Unique values.

Dictionary:

Named key-value information.

The correct structure depends on the problem.

For example:

Grid state:

tuple

Visited states:

set

Student record:

dictionary

Collection of scores:

list

Feature vector:

list initially, NumPy array later

---

# 17. Nested Data Structures

Python structures can be combined.

Example:

students = [
    {
        "name": "Student A",
        "features": [20, 5, 92]
    },
    {
        "name": "Student B",
        "features": [21, 7, 88]
    }
]

Now:

students

is a list.

Each element is a dictionary.

Each dictionary contains a list.

This is called a nested structure.

Nested structures are useful when raw data contains multiple levels of organization.

---

# 18. Extracting Feature Data

Suppose:

students = [
    {
        "age": 20,
        "study_hours": 5,
        "attendance": 92
    },
    {
        "age": 21,
        "study_hours": 7,
        "attendance": 88
    },
    {
        "age": 19,
        "study_hours": 3,
        "attendance": 95
    }
]

We can create feature vectors:

features = []

for student in students:

    vector = [
        student["age"],
        student["study_hours"],
        student["attendance"]
    ]

    features.append(vector)

print(features)

Result:

[
    [20, 5, 92],
    [21, 7, 88],
    [19, 3, 95]
]

The real-world records have now become a numerical feature matrix.

---

# 19. Mathematical View

Suppose each observation contains:

age

study hours

attendance

Then:

x1 = [20, 5, 92]

x2 = [21, 7, 88]

x3 = [19, 3, 95]

Combine them:

X =
[
  20  5  92
  21  7  88
  19  3  95
]

The transition is:

Real-World Record
      ↓
Python Dictionary
      ↓
Feature Vector
      ↓
Feature Matrix
      ↓
NumPy Array

This is one of the most important transformations in an AI data pipeline.

---

# 20. Practical AI Example

Suppose an AI system wants to analyze students.

Each record contains:

age

study hours

attendance

score

A Python dictionary can represent one record.

A list can represent the dataset.

A feature vector can represent the model input.

A target can represent the value we want to predict.

Therefore:

Record
  ↓
Features + Target
  ↓
X + y
  ↓
Machine-Learning Dataset

This is the foundation of supervised learning data representation.

---

# 21. Common Mistakes

## Mistake 1 — Using the wrong structure

Use a list when ordered observations are needed.

Use a tuple when representing a fixed structure.

Use a set when uniqueness matters.

Use a dictionary when values have named meanings.

## Mistake 2 — Forgetting zero-based indexing

scores[0]

is the first element.

## Mistake 3 — Mixing feature order

If:

[age, study_hours, attendance]

defines the feature order, keep that order consistent.

Do not accidentally create:

[attendance, age, study_hours]

for another observation.

Feature order must remain consistent for numerical models.

## Mistake 4 — Treating raw records as model input

A dictionary may be convenient for humans and programs, but many numerical algorithms require a numerical representation such as a feature matrix.

---

# 22. Practice

Practice 1:

Create a list of 10 numerical observations and calculate the mean.

Practice 2:

Represent a grid position using a tuple.

Practice 3:

Create a set of visited AI states.

Practice 4:

Create a dictionary representing one data record.

Practice 5:

Create a dataset containing at least 10 records.

Practice 6:

Extract the feature values from every record.

Practice 7:

Store the features in a nested list.

Practice 8:

Convert the nested list into a NumPy array.

---

# 23. Quick Check

Which structure is best for ordered collections?

List.

Which structure is useful for fixed coordinates?

Tuple.

Which structure is useful for tracking unique states?

Set.

Which structure is useful for named attributes?

Dictionary.

What is a feature vector?

A numerical representation of the features of one observation.

In mathematical form:

x = [x1, x2, ..., xd]

---

# Key Takeaway

Python data structures provide the bridge:

Real-World Information
        ↓
Python Data Structure
        ↓
Feature Representation
        ↓
Numerical Dataset
        ↓
NumPy
`,
};

export default lesson4;

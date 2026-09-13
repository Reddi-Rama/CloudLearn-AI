const lesson3 = {
  title: "Functions & Reusable AI Code",

  content: `
# Functions & Reusable AI Code

## What You Will Learn

In this lesson, you will learn how functions help us turn mathematical operations and AI logic into reusable computational components.

You will learn:

- What a function is
- Parameters and arguments
- Return values
- Local variables
- Reusable mathematical functions
- Functions for data processing
- Default parameters
- Multiple return values
- Lambda functions
- How functions improve AI program design
- How mathematical functions map directly to Python functions

---

# 1. Why Functions Matter in AI

AI programs perform the same types of operations repeatedly.

For example, suppose we need to calculate:

f(x) = 2x + 5

for several values:

x = 10, 20, 30

Without a function:

x1 = 10
y1 = 2 * x1 + 5

x2 = 20
y2 = 2 * x2 + 5

x3 = 30
y3 = 2 * x3 + 5

This becomes repetitive.

A function allows us to define the computation once:

def f(x):
    return 2 * x + 5

Then:

print(f(10))
print(f(20))
print(f(30))

Output:

25
45
65

Mathematically:

f(10) = 25

f(20) = 45

f(30) = 65

The same computational rule is reused.

---

# 2. Mathematical Function → Python Function

A mathematical function:

y = f(x)

maps an input x to an output y.

For example:

f(x) = x^2

Python:

def square(x):
    return x ** 2

Then:

print(square(4))

Output:

16

because:

f(4) = 4^2 = 16

This is one of the most important connections between mathematics and programming.

Mathematical Function
        ↓
Input
        ↓
Computation
        ↓
Output

becomes:

Python Function
        ↓
Argument
        ↓
Function Body
        ↓
Return Value

---

# 3. Basic Function Syntax

A Python function has the general structure:

def function_name(parameters):
    # computation
    return result

Example:

def add(a, b):
    result = a + b
    return result

Use it:

answer = add(10, 20)

print(answer)

Output:

30

Here:

- a and b are parameters.
- 10 and 20 are arguments.
- result is the computed value.
- return sends the result back.

---

# 4. Parameters and Arguments

Consider:

def multiply(x, y):
    return x * y

When we write:

multiply(5, 4)

the values are assigned:

x = 5

y = 4

Then:

x × y = 5 × 4 = 20

Output:

20

The function itself does not know beforehand which values it will receive.

That makes it reusable.

---

# 5. Functions for AI Mathematics

Suppose we want to calculate squared error:

E = (y - y_hat)^2

Create:

def squared_error(actual, predicted):
    return (actual - predicted) ** 2

Use it:

actual = 80
predicted = 74

error = squared_error(actual, predicted)

print("Squared Error:", error)

Output:

Squared Error: 36

Because:

E = (80 - 74)^2
  = 6^2
  = 36

Now the same function can be reused:

print(squared_error(100, 90))
print(squared_error(50, 45))
print(squared_error(75, 80))

This is much cleaner than rewriting the formula every time.

---

# 6. Functions for Data Processing

Suppose we have:

scores = [70, 80, 90, 60, 75]

We can create a function to calculate the average.

def calculate_average(values):
    total = 0

    for value in values:
        total += value

    return total / len(values)

Use it:

scores = [70, 80, 90, 60, 75]

average = calculate_average(scores)

print("Average:", average)

Output:

Average: 75.0

Mathematically:

x_bar = (70 + 80 + 90 + 60 + 75) / 5

x_bar = 75

The advantage is that the same function can work with another dataset:

temperatures = [28, 31, 30, 29, 32]

print(calculate_average(temperatures))

---

# 7. Returning Multiple Values

A function can return more than one result.

Example:

def analyze(values):
    minimum = min(values)
    maximum = max(values)
    average = sum(values) / len(values)

    return minimum, maximum, average

Use it:

values = [10, 20, 30, 40, 50]

minimum, maximum, average = analyze(values)

print("Minimum:", minimum)
print("Maximum:", maximum)
print("Average:", average)

Output:

Minimum: 10
Maximum: 50
Average: 30.0

This is useful when an AI data-processing function needs to produce several measurements.

---

# 8. Local Variables

Variables created inside a function are generally local to that function.

Example:

def calculate_square(x):
    result = x ** 2
    return result

Here result is created inside the function.

This helps keep different parts of a program independent.

For example:

def calculate_area(length, width):
    area = length * width
    return area

def calculate_perimeter(length, width):
    perimeter = 2 * (length + width)
    return perimeter

Each function has its own internal calculation.

---

# 9. Default Parameters

A function can have a default value.

Example:

def normalize(x, minimum=0, maximum=100):
    return (x - minimum) / (maximum - minimum)

Now:

print(normalize(50))

uses:

minimum = 0

and:

maximum = 100

Therefore:

x' = (50 - 0) / (100 - 0)
   = 0.5

Output:

0.5

We can also specify different boundaries:

print(normalize(75, 50, 100))

Mathematically:

(75 - 50) / (100 - 50)
= 25 / 50
= 0.5

Default parameters make functions flexible while keeping common cases simple.

---

# 10. A Practical AI Normalization Function

Min-max normalization is:

x' = (x - x_min) / (x_max - x_min)

We can implement it:

def normalize(x, minimum, maximum):
    return (x - minimum) / (maximum - minimum)

Then:

values = [10, 20, 30, 40, 50]

for value in values:
    result = normalize(value, 10, 50)
    print(value, "→", result)

Output:

10 → 0.0
20 → 0.25
30 → 0.5
40 → 0.75
50 → 1.0

This demonstrates how a mathematical formula can become a reusable preprocessing function.

Normalization becomes important later when numerical features have very different ranges.

---

# 11. Functions and Decision Logic

Functions can also contain conditions.

Suppose we create a simple classification rule:

def classify_score(score):
    if score >= 80:
        return "Strong"
    elif score >= 60:
        return "Moderate"
    else:
        return "Needs Improvement"

Then:

scores = [55, 65, 82, 91, 74]

for score in scores:
    print(score, "→", classify_score(score))

Output:

55 → Needs Improvement
65 → Moderate
82 → Strong
91 → Strong
74 → Moderate

The function encapsulates the decision logic.

---

# 12. Functions and AI Pipelines

A small AI-oriented program can be divided into functions:

Load Data
    ↓
Clean Data
    ↓
Transform Data
    ↓
Analyze Data
    ↓
Make Decision

In Python:

def load_data():
    ...

def clean_data(data):
    ...

def transform_data(data):
    ...

def analyze_data(data):
    ...

def make_decision(data):
    ...

Each function has a specific responsibility.

This is much better than putting hundreds of lines into one giant block of code.

---

# 13. Practical Example — Data Analysis Pipeline

Example:

def calculate_average(values):
    return sum(values) / len(values)


def find_above_average(values):
    average = calculate_average(values)

    result = []

    for value in values:
        if value > average:
            result.append(value)

    return result


scores = [65, 72, 81, 90, 76]

average = calculate_average(scores)

above_average = find_above_average(scores)

print("Average:", average)
print("Above average:", above_average)

Output:

Average: 76.8

Above average: [81, 90]

Mathematically:

x_bar = (65 + 72 + 81 + 90 + 76) / 5
      = 76.8

Then:

xi > 76.8

selects:

81, 90

The functions allow us to separate the two operations.

---

# 14. Functions That Accept Other Functions

Python functions can be passed as arguments.

For example:

def apply_operation(x, operation):
    return operation(x)

We can create:

def square(x):
    return x ** 2

Then:

result = apply_operation(5, square)

print(result)

Output:

25

Conceptually:

operation(x) = x^2

and:

operation(5) = 25

This idea becomes useful when designing flexible data-processing and machine-learning systems.

A function can therefore treat another function as data.

---

# 15. Lambda Functions

For very small operations, Python provides lambda functions.

Instead of:

def square(x):
    return x ** 2

we can write:

square = lambda x: x ** 2

Then:

print(square(6))

Output:

36

Lambda functions are useful for short transformations, but they should not replace normal functions when the logic becomes complicated.

---

# 16. A Real Data Transformation Example

Suppose:

temperatures = [20, 25, 30, 35]

We want to convert Celsius to Fahrenheit:

F = (9/5)C + 32

Create:

def celsius_to_fahrenheit(celsius):
    return (9 / 5) * celsius + 32

Then:

for temperature in temperatures:
    print(
        temperature,
        "C →",
        celsius_to_fahrenheit(temperature),
        "F"
    )

For:

C = 30

the function calculates:

F = (9/5)(30) + 32
  = 54 + 32
  = 86

Output includes:

30 C → 86.0 F

This is a good example of separating a mathematical transformation from the rest of the program.

---

# 17. Functions for Distance

Distance calculations are fundamental in AI.

For two one-dimensional values:

d = |x1 - x2|

Python:

def distance_1d(x1, x2):
    return abs(x1 - x2)

Example:

print(distance_1d(10, 16))

Output:

6

because:

|10 - 16| = 6

For two-dimensional Euclidean distance:

d = sqrt((x2 - x1)^2 + (y2 - y1)^2)

Python:

import math

def euclidean_distance(x1, y1, x2, y2):
    return math.sqrt(
        (x2 - x1) ** 2 +
        (y2 - y1) ** 2
    )

Example:

distance = euclidean_distance(0, 0, 3, 4)

print(distance)

Output:

5.0

because:

d = sqrt(3^2 + 4^2)

  = sqrt(9 + 16)

  = sqrt(25)

  = 5

This connects directly with distance and heuristic concepts from AI search.

---

# 18. Why Functions Are Important for AI Engineering

Imagine a machine-learning application containing:

1000 lines of code

If every operation is mixed together, debugging becomes difficult.

Instead:

load_data()

clean_data()

normalize_data()

calculate_features()

train_model()

evaluate_model()

predict()

creates a logical pipeline.

Each function becomes a reusable building block.

This makes AI systems:

- easier to understand
- easier to test
- easier to debug
- easier to modify
- easier to reuse

Good function design is therefore part of good AI engineering.

---

# 19. Practical Experiment — Build an AI Utility Library

Create a Python file:

ai_utils.py

Add:

def calculate_average(values):
    return sum(values) / len(values)


def squared_error(actual, predicted):
    return (actual - predicted) ** 2


def normalize(x, minimum, maximum):
    return (x - minimum) / (maximum - minimum)


def classify_score(score):
    if score >= 80:
        return "Strong"
    elif score >= 60:
        return "Moderate"
    else:
        return "Needs Improvement"

Then create:

main.py

and write:

from ai_utils import (
    calculate_average,
    squared_error,
    normalize,
    classify_score
)

scores = [65, 72, 81, 90, 76]

print("Average:", calculate_average(scores))

print("Error:", squared_error(80, 74))

print("Normalized:", normalize(75, 0, 100))

print("Category:", classify_score(82))

This demonstrates a professional programming principle:

Reusable AI Logic
        ↓
Separate Components

---

# 20. Common Mistakes

## Mistake 1 — Forgetting return

Incorrect:

def square(x):
    x ** 2

Correct:

def square(x):
    return x ** 2

## Mistake 2 — Confusing parameters and arguments

Example:

def square(x):

x is the parameter.

When calling:

square(5)

5 is the argument.

## Mistake 3 — Creating overly large functions

A function should ideally have a clear responsibility.

## Mistake 4 — Repeating the same code

If the same calculation appears many times, consider turning it into a function.

## Mistake 5 — Using lambda for complex logic

Lambda functions are best for short, simple operations.

---

# 21. Practice Tasks

## Task 1

Create a function:

f(x) = 3x + 7

Test it for five values.

## Task 2

Create a function that calculates:

E = (y - y_hat)^2

## Task 3

Create a function that calculates the average of a list.

## Task 4

Create a function that returns the minimum, maximum, and average of a dataset.

## Task 5

Create a function that classifies a numerical value into three categories.

---

# Challenge

Build an ai_utils.py file containing at least five reusable mathematical/data-processing functions and use them from a separate main.py.

Try to make every function perform one clearly defined task.

Think about:

Input

      ↓

Validation

      ↓

Computation

      ↓

Return value

This is how reusable AI components are designed.

---

# Quick Check

## 1. What is a function?

A reusable block of code designed to perform a specific operation.

## 2. What is a parameter?

A variable defined in a function declaration that receives an input.

## 3. What is an argument?

The actual value passed to a function.

## 4. What does return do?

It sends a result back to the code that called the function.

## 5. Why are functions important in AI?

They allow repeated mathematical, data-processing, and decision operations to be organized into reusable components.

## 6. What is the difference between a parameter and an argument?

A parameter is part of the function definition.

An argument is the actual value supplied when the function is called.

## 7. Why are local variables useful?

They keep internal calculations contained within the function and help separate different parts of the program.

## 8. What is a default parameter?

A parameter that already has a predefined value when the caller does not provide one.

## 9. Why can a function return multiple values?

A single operation may produce several related results, such as minimum, maximum, and average.

## 10. What is a lambda function?

A compact anonymous function intended mainly for short operations.

---

# Key Takeaway

The most important connection is:

Mathematical Function
        ↓
Python Function
        ↓
Reusable AI Component

The progression is:

Mathematical Idea
        ↓
Python Representation
        ↓
Reusable Function
        ↓
Data Processing Component
        ↓
AI Pipeline

Well-designed functions are the foundation for larger AI programs because they allow mathematical operations, data transformations, and decision logic to be composed into reusable components.
`,
};

export default lesson3;

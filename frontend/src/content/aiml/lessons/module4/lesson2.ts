const lesson2 = {
  title: "Variables, Functions & Mathematical Relationships",

  content: `
# Variables, Functions & Mathematical Relationships

## What You Will Learn

In this lesson, you will learn how mathematical variables and functions are used to represent relationships in AI.

You will learn:

- Variables in mathematical models
- Constants and parameters
- Functions and mappings
- Independent and dependent variables
- Linear relationships
- Non-linear relationships
- Functions as AI models
- Mathematical expressions in Python
- Function parameters
- Predictions
- Rate of change
- Simple feature relationships
- Practical AI examples

The central idea is:

Mathematical Relationship
        ↓
Function
        ↓
Python Implementation
        ↓
AI Computation

---

# 1. Variables in Mathematics

A variable represents a quantity whose value can change.

For example:

x = study hours

If a student studies for:

x = 3

then x has the value:

3

If another student studies for:

x = 6

the variable now represents:

6

Variables allow mathematical models to work with changing inputs.

---

# 2. Variables in AI

AI systems process changing data.

For example:

temperature = 32.5
humidity = 70
pressure = 1012

Each value can be represented by a variable.

Mathematically:

x1 = temperature

x2 = humidity

x3 = pressure

A complete observation can then be represented as:

x = [x1, x2, x3]

For example:

x = [32.5, 70, 1012]

This connects mathematical variables with AI features.

---

# 3. Constants

A constant is a value that remains fixed within a particular expression or model.

Consider:

y = 10x + 40

Here:

10

and:

40

are constants for this particular model.

The value of x can change.

The constants remain fixed unless the model itself is changed.

---

# 4. Parameters in AI

In a model such as:

y = mx + c

the values:

m

and:

c

are parameters.

For example:

y = 8x + 35

Here:

m = 8

c = 35

The parameter m determines the rate of change.

The parameter c determines the starting value when x = 0.

Machine-learning models usually contain parameters whose values are determined during training.

---

# 5. Independent and Dependent Variables

Consider:

y = 10x + 40

Here:

x

is the input.

y

depends on x.

Therefore:

x = independent variable

y = dependent variable

If:

x = 2

then:

y = 60

If:

x = 5

then:

y = 90

Changing x changes y.

This dependency is central to predictive modeling.

---

# 6. Functions

A function maps an input to an output.

Mathematically:

f(x)

For example:

f(x) = 2x + 5

For:

x = 10

we get:

f(10) = 25

The function can be viewed as:

Input
  ↓
Function
  ↓
Output

For AI:

Input Features
      ↓
AI Model
      ↓
Prediction

---

# 7. Python Function

The mathematical function:

f(x) = 2x + 5

becomes:

def f(x):
    return 2 * x + 5

print(f(10))

Output:

25

Python has directly implemented the mathematical function.

---

# 8. Function With Multiple Inputs

A function can depend on several variables.

For example:

y = 2x1 + 3x2 + 5

Here:

x1

and:

x2

are input variables.

Python:

def model(x1, x2):
    return 2 * x1 + 3 * x2 + 5

print(model(4, 6))

Calculate:

2(4) + 3(6) + 5

= 8 + 18 + 5

= 31

Output:

31

This is similar to a simple weighted mathematical model.

---

# 9. Weighted Features

Suppose:

x1 = study hours

x2 = attendance

We create:

y = 8x1 + 0.5x2 + 10

For:

x1 = 5

x2 = 80

we get:

y = 8(5) + 0.5(80) + 10

= 40 + 40 + 10

= 90

Python:

def predict_score(study_hours, attendance):
    return (
        8 * study_hours
        + 0.5 * attendance
        + 10
    )

print(
    predict_score(
        5,
        80
    )
)

Output:

90.0

This demonstrates how several features can contribute to a numerical prediction.

---

# 10. Linear Relationships

A linear relationship can be written as:

y = mx + c

Example:

y = 4x + 2

If:

x = 1

then:

y = 6

If:

x = 2

then:

y = 10

If:

x = 3

then:

y = 14

The change in y for every one-unit increase in x is:

4

Therefore:

m = 4

is the rate of change.

---

# 11. Rate of Change

For:

y = mx + c

the coefficient:

m

describes the rate of change.

Suppose:

y = 5x + 20

If x increases by:

1

then y increases by:

5

Therefore:

Delta y / Delta x = 5

This concept becomes important later when understanding derivatives and optimization.

---

# 12. Intercept

In:

y = mx + c

the constant:

c

is the y-intercept.

Suppose:

y = 5x + 20

When:

x = 0

we get:

y = 20

Therefore the graph crosses the y-axis at:

20

Python:

def model(x):
    return 5 * x + 20

print(model(0))

Output:

20

---

# 13. Non-Linear Relationships

Not all AI relationships are linear.

Consider:

y = x^2

For:

x = 1

y = 1

For:

x = 2

y = 4

For:

x = 3

y = 9

For:

x = 4

y = 16

The change in y is not constant.

Python:

def square(x):
    return x ** 2

for x in [1, 2, 3, 4]:
    print(
        x,
        square(x)
    )

Output:

1 1

2 4

3 9

4 16

Non-linear functions are important because many real-world relationships are not straight lines.

---

# 14. Functions as AI Models

A simple predictive model can be represented as:

y_hat = f(x)

where:

x = input

f = model

y_hat = prediction

For example:

y_hat = 10x + 35

Python:

def predict(x):
    return 10 * x + 35

Now:

predict(5)

produces:

85

This means the model converts an input into a predicted output.

---

# 15. Actual Value vs Prediction

Suppose:

actual = 90

prediction = 85

The model output is:

y_hat = 85

The actual value is:

y = 90

The error is:

e = y - y_hat

Therefore:

e = 90 - 85

e = 5

Python:

actual = 90
prediction = 85

error = actual - prediction

print(error)

Output:

5

This links functions to model evaluation.

---

# 16. Function Composition

Functions can be combined.

Suppose:

f(x) = 2x

and:

g(x) = x + 5

Then:

g(f(x))

means:

First calculate:

f(x)

Then use that result as input to:

g

For:

x = 10

f(10) = 20

g(20) = 25

Therefore:

g(f(10)) = 25

Python:

def f(x):
    return 2 * x

def g(x):
    return x + 5

result = g(
    f(10)
)

print(result)

Output:

25

This concept becomes useful when complex AI pipelines are broken into smaller transformations.

---

# 17. Mathematical Transformation Pipeline

A data-processing pipeline can be:

Raw Input
    ↓
Transformation 1
    ↓
Transformation 2
    ↓
Transformation 3
    ↓
Model Input

For example:

x

↓

normalize(x)

↓

transform(x)

↓

model(x)

Each function performs one mathematical operation.

This makes complex systems easier to understand.

---

# 18. Functions and Feature Scaling

Suppose a feature is:

x

and we want to normalize it:

x' = (x - xmin) / (xmax - xmin)

Python:

def normalize(
    x,
    minimum,
    maximum
):
    return (
        x - minimum
    ) / (
        maximum - minimum
    )

print(
    normalize(
        50,
        0,
        100
    )
)

Output:

0.5

The mathematical transformation has become a reusable Python function.

---

# 19. Functions and Multiple Features

Suppose:

x1 = age

x2 = study hours

x3 = attendance

A model may calculate:

y = w1x1 + w2x2 + w3x3 + b

This is a weighted sum.

The weights:

w1

w2

w3

control how strongly each feature contributes.

The value:

b

is a bias or intercept.

This type of mathematical structure appears throughout machine learning.

---

# 20. Python Implementation of a Weighted Model

Example:

def weighted_model(
    age,
    study_hours,
    attendance
):
    return (
        0.5 * age
        + 8 * study_hours
        + 0.4 * attendance
        + 5
    )

prediction = weighted_model(
    20,
    5,
    90
)

print(prediction)

Break the calculation into parts:

0.5(20) = 10

8(5) = 40

0.4(90) = 36

bias = 5

Total:

10 + 40 + 36 + 5

= 91

Output:

91.0

This is a simple mathematical model.

It is not automatically a trained machine-learning model.

---

# 21. Why Parameters Matter

Suppose:

y = 2x + 5

Changing:

2

changes the slope.

Changing:

5

changes the intercept.

Therefore:

Model parameters

control:

Model behavior

In machine learning, training attempts to find useful parameter values from data.

The mathematical structure becomes:

Data
  ↓
Parameters
  ↓
Prediction
  ↓
Loss
  ↓
Parameter Update

---

# 22. Functions and Reusability

Suppose a project needs to calculate:

prediction

error

normalization

distance

average

Rather than rewriting the formulas repeatedly, create reusable functions.

Example:

def predict(x):
    return 2 * x + 5

def error(actual, predicted):
    return actual - predicted

def normalize(x, minimum, maximum):
    return (
        x - minimum
    ) / (
        maximum - minimum
    )

Now different parts of the program can reuse the mathematical operations.

---

# 23. Practical Experiment

Create:

hours = [1, 2, 3, 4, 5]

Define:

y = 10x + 35

Use a function to calculate predictions.

Then:

1. Print predictions.
2. Create actual scores.
3. Calculate errors.
4. Calculate absolute errors.
5. Calculate mean squared error.
6. Compare predictions with actual values.

---

# 24. Practice

### Practice 1

Create:

f(x) = 4x + 7

Calculate it for:

x = 1, 2, 3, 4, 5

### Practice 2

Create:

f(x) = x^2 + 2x + 1

Calculate it for:

x = 0, 1, 2, 3, 4

### Practice 3

Create a function with two input variables:

y = 3x1 + 5x2 + 2

### Practice 4

Create a normalization function.

### Practice 5

Create a prediction function and calculate the error for at least five observations.

---

# Challenge

Build a mathematical prediction function containing at least three input features.

Your program must:

- Accept feature values.
- Apply weights.
- Add a bias.
- Produce a prediction.
- Compare the prediction with an actual value.
- Calculate the error.
- Calculate squared error.
- Explain how changing a weight changes the prediction.

---

# Common Mistakes

## Mistake 1 — Confusing Variables With Fixed Values

A variable can change.

A constant remains fixed within the particular expression.

## Mistake 2 — Forgetting the Difference Between Prediction and Actual Value

Prediction:

y_hat

Actual:

y

These are not automatically equal.

## Mistake 3 — Assuming Every Function Is Linear

Functions can be:

- Linear
- Polynomial
- Exponential
- Logarithmic
- Other non-linear forms

## Mistake 4 — Assuming a Mathematical Function Is Automatically Machine Learning

A manually created function is simply a mathematical model.

Machine learning involves learning model parameters from data.

---

# Quick Check

1. What is a variable?

A quantity whose value can change.

2. What is a parameter?

A value controlling the behavior of a mathematical model.

3. What is a function?

A mapping from inputs to outputs.

4. What is the general form of a linear function?

y = mx + c

5. What does m represent?

Rate of change or slope.

6. What does c represent?

The y-intercept.

7. What is a prediction?

The output produced by a model for an input.

8. What is prediction error?

The difference between the actual value and predicted value.

9. Why are functions useful in AI?

They allow mathematical transformations and model logic to be reused.

10. Why are weights important?

They determine how strongly individual features contribute to a weighted model.

---

# Key Takeaways

Mathematical variables represent changing quantities.

Parameters control mathematical models.

Functions map inputs to outputs.

Linear functions use:

y = mx + c

Non-linear functions can represent more complex relationships.

AI models can be viewed as mathematical functions.

Weighted sums provide a foundation for many machine-learning models.

Predictions can be compared with actual values using error functions.

Reusable Python functions allow mathematical operations to become computational components.

The progression is:

Variables
    ↓
Mathematical Functions
    ↓
Parameters
    ↓
Python Functions
    ↓
Predictions
    ↓
Error
    ↓
AI Models
`,
};

export default lesson2;
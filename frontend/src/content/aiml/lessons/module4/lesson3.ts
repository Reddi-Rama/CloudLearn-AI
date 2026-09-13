const lesson3 = {
  title: "Graphs & Relationships in AI",

  content: `
# Graphs & Relationships in AI

## What You Will Learn

In this lesson, you will learn how mathematical graphs help AI engineers understand relationships between variables.

You will learn:

- Coordinate systems
- X-axis and Y-axis
- Points
- Functions as graphs
- Linear graphs
- Non-linear graphs
- Slope
- Intercepts
- Positive relationships
- Negative relationships
- Weak relationships
- Data patterns
- Scatter plots
- Mathematical visualization using Python
- NumPy and Matplotlib
- Graph interpretation in AI

The central idea is:

Mathematical Relationship
        ↓
Numerical Data
        ↓
Graph
        ↓
Pattern
        ↓
AI Interpretation

---

# 1. Why Graphs Matter in AI

AI systems work with numerical relationships.

Suppose:

Study Hours:

1, 2, 3, 4, 5

Scores:

45, 55, 64, 75, 86

Looking at the numbers suggests an upward pattern.

A graph makes this pattern easier to see.

Therefore:

Numbers

can become:

Visual Information

This helps humans understand data before building models.

---

# 2. Coordinate System

A two-dimensional graph uses:

X-axis

and:

Y-axis

The x-axis is horizontal.

The y-axis is vertical.

A point is represented as:

(x, y)

For example:

(3, 65)

means:

x = 3

y = 65

If:

x = study hours

and:

y = score

then:

(3, 65)

means:

3 study hours

and:

65 score.

---

# 3. Plotting a Point

A single point can be plotted using Matplotlib.

Example:

import matplotlib.pyplot as plt

x = [3]
y = [65]

plt.scatter(
    x,
    y
)

plt.xlabel("Study Hours")
plt.ylabel("Score")
plt.title("One Observation")

plt.show()

The point represents one observation.

---

# 4. Multiple Data Points

Suppose:

x = [1, 2, 3, 4, 5]

y = [45, 55, 64, 75, 86]

Python:

import matplotlib.pyplot as plt

plt.scatter(
    x,
    y
)

plt.xlabel("Study Hours")
plt.ylabel("Score")
plt.title("Study Hours vs Score")

plt.show()

Each point corresponds to one observation.

The collection of points provides information about the relationship between the variables.

---

# 5. Linear Graph

Consider:

y = 2x + 5

We can generate:

x = [0, 1, 2, 3, 4, 5]

Then:

y = [5, 7, 9, 11, 13, 15]

Matplotlib:

import matplotlib.pyplot as plt

x = [0, 1, 2, 3, 4, 5]

y = [
    5,
    7,
    9,
    11,
    13,
    15
]

plt.plot(
    x,
    y
)

plt.xlabel("x")
plt.ylabel("y")
plt.title("y = 2x + 5")

plt.show()

The result is a straight line.

---

# 6. Slope of a Graph

For:

y = mx + c

m is the slope.

The slope can also be calculated using:

m = Delta y / Delta x

Suppose two points are:

(1, 7)

and:

(3, 11)

Then:

Delta y = 11 - 7

= 4

Delta x = 3 - 1

= 2

Therefore:

m = 4 / 2

= 2

This matches:

y = 2x + 5

---

# 7. Positive Slope

If:

m > 0

the graph rises from left to right.

Example:

y = 3x + 2

As x increases:

y increases.

This represents a positive relationship.

In AI data analysis, we may observe:

Study Hours ↑

Score ↑

This indicates a positive association in the observed data.

---

# 8. Negative Slope

If:

m < 0

the graph falls from left to right.

Example:

y = -2x + 10

For:

x = 1

y = 8

For:

x = 2

y = 6

For:

x = 3

y = 4

As x increases:

y decreases.

This represents a negative relationship.

---

# 9. Zero Slope

If:

m = 0

then:

y = c

The graph is horizontal.

Example:

y = 5

No matter what x is:

y remains 5.

Python:

import matplotlib.pyplot as plt

x = [0, 1, 2, 3, 4]

y = [5, 5, 5, 5, 5]

plt.plot(
    x,
    y
)

plt.xlabel("x")
plt.ylabel("y")
plt.title("Constant Function")

plt.show()

---

# 10. Intercept

For:

y = mx + c

c is the y-intercept.

Example:

y = 2x + 10

When:

x = 0

we obtain:

y = 10

Therefore the graph crosses the y-axis at:

10

The intercept represents the output when the input is zero.

---

# 11. Non-Linear Graph

Consider:

y = x^2

The graph is not a straight line.

Python:

import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(
    -5,
    5,
    100
)

y = x ** 2

plt.plot(
    x,
    y
)

plt.xlabel("x")
plt.ylabel("y")
plt.title("y = x²")

plt.show()

The curve changes direction continuously.

This demonstrates a non-linear mathematical relationship.

---

# 12. Comparing Linear and Non-Linear Relationships

Linear:

y = 2x + 5

The rate of change is constant.

Non-linear:

y = x^2

The rate of change changes with x.

This distinction becomes important because real-world AI relationships are often more complex than simple straight lines.

---

# 13. Scatter Plot vs Line Plot

Scatter plot:

Shows individual observations.

Line plot:

Connects points and often emphasizes a continuous or ordered trend.

For example:

Time and temperature

→ line plot

Study hours and score

→ scatter plot

when the main goal is to inspect the relationship between observations.

Choosing the correct graph depends on the analytical question.

---

# 14. Positive Association

Consider:

Hours:

1, 2, 3, 4, 5

Scores:

45, 55, 65, 75, 85

As hours increase:

scores also increase.

A scatter plot would show points generally moving upward.

This is a positive association.

---

# 15. Negative Association

Consider:

Temperature:

10, 20, 30, 40, 50

Efficiency:

95, 88, 80, 72, 65

As temperature increases:

efficiency decreases.

A graph would generally move downward.

This is a negative association.

---

# 16. Weak Relationship

Suppose:

x = [1, 2, 3, 4, 5]

y = [48, 73, 51, 80, 56]

The points may not follow a clear upward or downward pattern.

This suggests a weak relationship.

Visualization can therefore help determine whether a relationship appears strong, weak, or unclear.

---

# 17. Important Warning — Correlation Is Not Causation

Suppose a graph shows:

Study Hours

and:

Score

increasing together.

We can say:

The dataset shows a positive association.

We cannot automatically conclude:

Studying more causes higher scores.

Other factors may contribute:

- Previous knowledge
- Attendance
- Teaching quality
- Study methods
- Learning environment

Therefore:

Observed Pattern

does not automatically mean:

Causal Relationship

---

# 18. Graphing Real AI Data

Suppose:

import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({
    "StudyHours": [
        1,
        2,
        3,
        4,
        5
    ],
    "Score": [
        45,
        55,
        65,
        78,
        90
    ]
})

plt.scatter(
    df["StudyHours"],
    df["Score"]
)

plt.xlabel("Study Hours")
plt.ylabel("Score")
plt.title("Study Hours vs Score")

plt.show()

The DataFrame stores the data.

Matplotlib visualizes the relationship.

---

# 19. NumPy Function Visualization

NumPy can calculate function values.

Example:

import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(
    -10,
    10,
    200
)

y = 3 * x + 2

plt.plot(
    x,
    y
)

plt.xlabel("x")
plt.ylabel("y")
plt.title("y = 3x + 2")

plt.show()

The mathematical equation becomes a visual graph.

---

# 20. Visualizing a Polynomial

Consider:

y = x^2 + 2x + 1

Python:

import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(
    -5,
    5,
    200
)

y = (
    x ** 2
    + 2 * x
    + 1
)

plt.plot(
    x,
    y
)

plt.xlabel("x")
plt.ylabel("y")
plt.title("Polynomial Function")

plt.show()

The graph represents the mathematical function visually.

---

# 21. Comparing Two Functions

Consider:

y1 = x

and:

y2 = x^2

Python:

import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(
    -3,
    3,
    100
)

y1 = x
y2 = x ** 2

plt.plot(
    x,
    y1,
    label="y = x"
)

plt.plot(
    x,
    y2,
    label="y = x²"
)

plt.xlabel("x")
plt.ylabel("y")
plt.title("Linear vs Non-Linear Function")

plt.legend()

plt.show()

This lets us visually compare different mathematical relationships.

---

# 22. AI Model Visualization

Suppose:

actual scores:

[45, 55, 65, 75, 90]

predicted scores:

[46, 54, 66, 73, 87]

We can compare them:

import numpy as np
import matplotlib.pyplot as plt

hours = np.array([
    1,
    2,
    3,
    4,
    5
])

actual = np.array([
    45,
    55,
    65,
    75,
    90
])

predicted = np.array([
    46,
    54,
    66,
    73,
    87
])

plt.scatter(
    hours,
    actual,
    label="Actual"
)

plt.plot(
    hours,
    predicted,
    label="Predicted"
)

plt.xlabel("Study Hours")
plt.ylabel("Score")
plt.title("Actual vs Predicted")

plt.legend()

plt.show()

The graph provides a visual comparison between observations and model output.

---

# 23. Error Visualization

Suppose:

actual = [80, 70, 90, 60]

predicted = [75, 72, 85, 65]

The errors are:

5

-2

5

-5

Python:

import numpy as np
import matplotlib.pyplot as plt

actual = np.array([
    80,
    70,
    90,
    60
])

predicted = np.array([
    75,
    72,
    85,
    65
])

errors = actual - predicted

print(errors)

A simple graph can visualize:

plt.bar(
    range(len(errors)),
    errors
)

plt.xlabel("Observation")
plt.ylabel("Error")
plt.title("Prediction Errors")

plt.show()

Visualization can show whether errors are generally positive, negative, large, or small.

---

# 24. Graphs and Machine Learning

Graphs are used throughout machine learning.

Examples:

Feature vs target

→ scatter plot

Data distribution

→ histogram

Training loss

→ line plot

Validation loss

→ line plot

Model comparison

→ multiple lines

Category performance

→ bar chart

Therefore mathematical visualization is not separate from AI.

It is part of understanding AI data and model behavior.

---

# 25. Training Loss Graph

Suppose:

Epochs:

1, 2, 3, 4, 5

Loss:

0.9, 0.7, 0.55, 0.42, 0.30

Python:

import matplotlib.pyplot as plt

epochs = [
    1,
    2,
    3,
    4,
    5
]

loss = [
    0.9,
    0.7,
    0.55,
    0.42,
    0.30
]

plt.plot(
    epochs,
    loss
)

plt.xlabel("Epoch")
plt.ylabel("Loss")
plt.title("Training Loss")

plt.show()

The graph shows that the observed loss decreases across these epochs.

Later, such curves become useful for studying model training and optimization.

---

# 26. Choosing a Visualization

Use a:

Line plot

when you want to examine:

- Trend
- Sequence
- Time

Use a:

Scatter plot

when you want to investigate:

- Relationships
- Associations
- Individual observations

Use a:

Bar chart

when you want to compare:

- Categories

Use a:

Histogram

when you want to investigate:

- Distribution

Choosing the correct chart is part of analytical thinking.

---

# 27. Practical Experiment

Create:

hours = np.array([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
])

scores = np.array([
    45,
    52,
    61,
    68,
    75,
    82,
    88,
    94
])

Create:

1. A scatter plot.
2. A line plot.
3. Appropriate axis labels.
4. An informative title.

Then write three observations.

---

# 28. Practice

## Practice 1

Plot:

y = 2x + 3

for:

0 <= x <= 10

---

## Practice 2

Plot:

y = x^2

for:

-5 <= x <= 5

---

## Practice 3

Plot:

y = x^3

and compare it with:

y = x

---

## Practice 4

Create a scatter plot for:

StudyHours

and:

Score

Use at least 20 observations.

---

## Practice 5

Create a training-loss graph.

Use:

Epoch

and:

Loss

---

# Challenge

Build a mathematical visualization program that:

1. Generates numerical data using NumPy.
2. Creates a Pandas DataFrame.
3. Calculates descriptive statistics.
4. Creates a scatter plot.
5. Creates a line plot for a mathematical function.
6. Creates a histogram.
7. Calculates prediction error.
8. Visualizes the error.
9. Writes three evidence-based observations.

For every graph answer:

What question does this graph help answer?

---

# Common Mistakes

## Mistake 1 — Wrong Axis Meaning

Always know what x and y represent.

## Mistake 2 — Using a Line Plot for Every Problem

A line plot is not always appropriate.

Use the graph that matches the analytical question.

## Mistake 3 — Assuming an Upward Pattern Proves Causation

A relationship does not automatically prove cause and effect.

## Mistake 4 — Missing Labels

Graphs without labels are difficult to interpret.

## Mistake 5 — Ignoring Units

A numerical axis should have meaningful units where appropriate.

---

# Quick Check

1. What is a coordinate?

A point represented using values such as (x, y).

2. What does the x-axis usually represent?

The independent or input variable.

3. What does the y-axis usually represent?

The dependent or output variable.

4. What is slope?

The rate of change of y with respect to x.

5. What does positive slope mean?

The graph generally rises as x increases.

6. What does negative slope mean?

The graph generally falls as x increases.

7. What is a scatter plot useful for?

Investigating relationships between numerical variables.

8. What is a line plot useful for?

Showing trends or changes across an ordered sequence.

9. What is a histogram useful for?

Understanding the distribution of numerical values.

10. What is a bar chart useful for?

Comparing categories.

11. Does a graph prove causation?

No.

12. Why are graphs important in AI?

They help humans understand numerical data, relationships, distributions, errors, and model behavior.

---

# Key Takeaways

Graphs convert mathematical relationships into visual information.

Coordinates represent observations.

The slope describes rate of change.

Linear functions produce straight lines.

Non-linear functions produce curves or other non-straight relationships.

Scatter plots help investigate relationships between variables.

Line plots help show trends and ordered changes.

Histograms show distributions.

Bar charts compare categories.

NumPy can generate numerical values.

Pandas can organize structured data.

Matplotlib can visualize mathematical functions and AI datasets.

Visualization helps AI engineers identify patterns and unusual observations.

A visual pattern does not automatically establish causation.

The central progression is:

Mathematical Relationship
       ↓
Numerical Data
       ↓
Graph
       ↓
Pattern
       ↓
Interpretation
       ↓
AI Understanding
`,
};

export default lesson3;
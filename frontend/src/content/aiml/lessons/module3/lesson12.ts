const lesson12 = {
  title: "Data Visualization with Matplotlib",

  content: `
# Data Visualization with Matplotlib

## What You Will Learn

Data in AI is often stored as numbers and tables. However, looking at raw numbers alone does not always make patterns easy to understand.

For example:

Study Hours:  1   2   3   4   5
Score:       45  55  65  78  90

From the values, we can suspect that scores increase as study hours increase.

A graph makes this relationship much easier to see.

In this lesson, you will learn how to use Matplotlib to visualize data and mathematical relationships.

You will learn:

- Why visualization is important in AI
- What Matplotlib is
- Line plots
- Bar charts
- Scatter plots
- Histograms
- Labels, titles, and legends
- Visualizing NumPy arrays
- Visualizing Pandas DataFrames
- Mathematical interpretation of graphs
- Detecting patterns and unusual values
- Choosing the appropriate visualization
- Creating an AI-oriented visualization workflow

---

# 1. Why Data Visualization Matters in AI

AI systems work with large amounts of data.

Imagine a dataset containing thousands of records:

Age   StudyHours   Attendance   Score

20       3            85         72
21       5            90         84
19       2            78         65

Reading thousands of rows manually is difficult.

Visualization converts numerical information into a form that humans can understand quickly.

A typical data-analysis process is:

Raw Data
   ↓
Inspect
   ↓
Clean
   ↓
Analyze
   ↓
Visualize
   ↓
Understand Patterns
   ↓
Prepare for Machine Learning

Visualization can help us discover:

- Trends
- Relationships
- Distributions
- Differences between groups
- Unusual observations
- Possible outliers

Visualization therefore becomes an important part of Exploratory Data Analysis.

---

# 2. What Is Matplotlib?

Matplotlib is a Python library used to create graphs and visualizations.

The commonly used interface is:

import matplotlib.pyplot as plt

Here:

matplotlib → visualization library

pyplot → plotting interface

plt → commonly used alias

A basic graph can be created using:

import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [10, 20, 30, 40, 50]

plt.plot(x, y)

plt.show()

plt.plot() creates the plot.

plt.show() displays it.

---

# 3. Understanding a Graph Mathematically

Consider:

x = [1, 2, 3, 4, 5]

y = [10, 20, 30, 40, 50]

The relationship is:

y = 10x

because:

10(1) = 10

10(2) = 20

10(3) = 30

and so on.

Therefore, the graph is a visual representation of:

y = 10x

A graph allows us to visually inspect mathematical relationships in data.

---

# 4. Line Plot

A line plot connects data points.

Example:

import matplotlib.pyplot as plt

days = [1, 2, 3, 4, 5]

temperature = [
    28,
    30,
    29,
    32,
    31
]

plt.plot(days, temperature)

plt.xlabel("Day")
plt.ylabel("Temperature")
plt.title("Temperature Over Five Days")

plt.show()

The x-axis represents the day.

The y-axis represents temperature.

The connected line shows how temperature changes.

### When to Use a Line Plot

Line plots are useful for:

- Time-series data
- Sensor measurements
- Temperature changes
- Stock values
- Model training progress
- Loss over epochs
- Continuous trends

---

# 5. Understanding the X-Axis and Y-Axis

Every graph should communicate what its axes represent.

For example:

plt.xlabel("Study Hours")

plt.ylabel("Score")

This tells us:

x = Study Hours

y = Score

Without labels, a graph can be difficult to interpret.

Good visualization should allow someone to understand the graph without guessing what the axes mean.

---

# 6. Adding a Title

A title explains what the graph represents.

Example:

plt.title("Study Hours vs Score")

Complete example:

import matplotlib.pyplot as plt

hours = [1, 2, 3, 4, 5]

scores = [
    45,
    55,
    65,
    78,
    90
]

plt.plot(hours, scores)

plt.xlabel("Study Hours")
plt.ylabel("Score")
plt.title("Study Hours and Student Score")

plt.show()

A clear title gives the visualization context.

---

# 7. Scatter Plot

A scatter plot displays individual observations as separate points.

It is particularly useful for investigating relationships between two numerical variables.

Example:

import matplotlib.pyplot as plt

hours = [1, 2, 3, 4, 5]

scores = [
    45,
    55,
    65,
    78,
    90
]

plt.scatter(hours, scores)

plt.xlabel("Study Hours")
plt.ylabel("Score")
plt.title("Study Hours vs Score")

plt.show()

Each point represents one observation.

For example:

(3, 65)

represents:

Study Hours = 3

Score = 65

---

# 8. Mathematical Intuition — Relationship Between Variables

Suppose:

x = Study Hours

and:

y = Score

If increasing x generally corresponds to increasing y, the scatter plot may show an upward pattern.

For example:

Study Hours →   1   2   3   4   5
Score       →  45  55  65  78  90

The points would generally move upward.

This suggests a positive relationship.

However, visualization alone does not prove causation.

There may be other factors influencing the score.

Therefore:

Visualization helps us discover patterns; it does not automatically prove why those patterns exist.

---

# 9. Bar Chart

A bar chart is generally used to compare categories.

Example:

import matplotlib.pyplot as plt

departments = [
    "IT",
    "CSE",
    "ECE",
    "EEE"
]

students = [
    120,
    150,
    100,
    80
]

plt.bar(
    departments,
    students
)

plt.xlabel("Department")
plt.ylabel("Number of Students")
plt.title("Students by Department")

plt.show()

The height of each bar represents the corresponding value.

### Practical Applications

Bar charts can be used to compare:

- Sales by product
- Students by department
- Customers by region
- Predictions by class
- Average scores by group

---

# 10. Horizontal Bar Chart

Matplotlib also provides:

barh()

Example:

import matplotlib.pyplot as plt

departments = [
    "IT",
    "CSE",
    "ECE",
    "EEE"
]

students = [
    120,
    150,
    100,
    80
]

plt.barh(
    departments,
    students
)

plt.xlabel("Number of Students")
plt.ylabel("Department")
plt.title("Students by Department")

plt.show()

Horizontal bars can be useful when category names are long.

---

# 11. Histogram

A histogram shows the distribution of numerical data.

Example:

import matplotlib.pyplot as plt

scores = [
    45, 52, 55, 60, 61,
    65, 68, 70, 72, 75,
    78, 80, 82, 85, 90
]

plt.hist(scores)

plt.xlabel("Score")
plt.ylabel("Frequency")
plt.title("Distribution of Scores")

plt.show()

The histogram groups numerical values into intervals called bins.

---

# 12. Mathematical Intuition Behind a Histogram

Suppose scores are divided into intervals:

40–49

50–59

60–69

70–79

80–89

90–99

The histogram counts how many observations fall into each interval.

For example:

Frequency(70–79) = 3

means three observations fall between 70 and 79.

A histogram therefore helps us understand the distribution of a numerical variable.

We can investigate:

- Where values are concentrated
- How widely values are spread
- Whether the distribution is symmetric
- Whether the distribution is skewed
- Whether unusual values exist

---

# 13. Controlling Histogram Bins

We can control the number of bins:

plt.hist(
    scores,
    bins=5
)

plt.xlabel("Score")
plt.ylabel("Frequency")
plt.title("Score Distribution")

plt.show()

The choice of bins affects what we see.

Too few bins may hide patterns.

Too many bins may make the distribution unnecessarily noisy.

Therefore, bin selection should be appropriate for the dataset and purpose of analysis.

---

# 14. Visualizing NumPy Arrays

Matplotlib works naturally with NumPy.

Example:

import numpy as np
import matplotlib.pyplot as plt

x = np.arange(
    1,
    11
)

y = x ** 2

plt.plot(
    x,
    y
)

plt.xlabel("x")
plt.ylabel("x^2")
plt.title("Square Function")

plt.show()

Mathematically:

y = x^2

NumPy generates the numerical values and Matplotlib visualizes them.

The workflow is:

NumPy
   ↓
Numerical Computation
   ↓
Matplotlib
   ↓
Visualization

---

# 15. Visualizing Mathematical Functions

Consider:

y = x^2

Example:

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
plt.title("y = x^2")

plt.show()

np.linspace(-5, 5, 100)

creates 100 evenly spaced values between -5 and 5.

The many closely spaced points produce a smooth-looking curve.

---

# 16. Why linspace() Is Useful

Suppose we use only:

-5, -4, -3, ..., 5

There are relatively few points.

Instead:

np.linspace(
    -5,
    5,
    100
)

generates many points.

This is useful when visualizing:

- Mathematical functions
- Loss functions
- Optimization functions
- Probability curves
- Activation functions

The same numerical principle becomes useful when studying mathematical foundations for AI.

---

# 17. Plotting Multiple Lines

We can compare multiple datasets on one graph.

Example:

import matplotlib.pyplot as plt

x = [
    1,
    2,
    3,
    4,
    5
]

model_a = [
    50,
    60,
    70,
    80,
    90
]

model_b = [
    45,
    65,
    68,
    82,
    88
]

plt.plot(
    x,
    model_a,
    label="Model A"
)

plt.plot(
    x,
    model_b,
    label="Model B"
)

plt.xlabel("Iteration")
plt.ylabel("Score")
plt.title("Model Performance Comparison")

plt.legend()

plt.show()

The label values identify each line.

plt.legend() displays those labels.

This is useful when comparing algorithms or models.

---

# 18. Practical AI Example — Training Loss

Machine-learning models often calculate a loss value during training.

Suppose:

Epoch: 1    2    3    4    5

Loss:  0.9  0.7  0.5  0.4  0.3

We can visualize it:

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
    0.5,
    0.4,
    0.3
]

plt.plot(
    epochs,
    loss
)

plt.xlabel("Epoch")
plt.ylabel("Loss")
plt.title("Training Loss")

plt.show()

The decreasing curve indicates that training loss is decreasing over these iterations.

Later, when you study machine learning and deep learning, loss curves become an important tool for understanding model training.

---

# 19. Visualizing Pandas DataFrames

Pandas DataFrames can be passed directly to Matplotlib.

Example:

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

Here:

Pandas stores the structured data.

Matplotlib visualizes selected columns.

---

# 20. Pandas + NumPy + Matplotlib

These libraries are often used together.

Example:

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

np.random.seed(42)

hours = np.arange(
    1,
    11
)

scores = (
    hours * 8
    + np.random.randint(
        -5,
        6,
        10
    )
)

df = pd.DataFrame({
    "StudyHours": hours,
    "Score": scores
})

print(df)

print(
    "\\nAverage score:"
)

print(
    np.mean(
        df["Score"]
    )
)

plt.scatter(
    df["StudyHours"],
    df["Score"]
)

plt.xlabel("Study Hours")
plt.ylabel("Score")
plt.title("Study Hours vs Score")

plt.show()

The workflow is:

NumPy
  ↓
Generate Numerical Data
  ↓
Pandas
  ↓
Organize and Analyze Data
  ↓
Matplotlib
  ↓
Visualize Data

This is an important foundation for future machine-learning workflows.

---

# 21. Grouped Data Visualization

Pandas can group data before visualization.

Example:

import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({
    "Department": [
        "IT",
        "IT",
        "CSE",
        "CSE",
        "ECE"
    ],
    "Score": [
        80,
        90,
        70,
        85,
        75
    ]
})

average_scores = df.groupby(
    "Department"
)["Score"].mean()

print(average_scores)

Output:

Department
CSE    77.5
ECE    75.0
IT     85.0
Name: Score, dtype: float64

We can visualize it:

average_scores.plot(
    kind="bar"
)

plt.xlabel("Department")
plt.ylabel("Average Score")
plt.title("Average Score by Department")

plt.show()

Here:

Pandas

   ↓

Group Data

   ↓

Calculate Average

   ↓

Matplotlib

   ↓

Visualize Comparison

---

# 22. Multiple Visualizations

One graph does not always provide enough information.

Suppose we have a student-performance dataset.

Different questions require different visualizations.

### Question 1

How are scores distributed?

Use:

Histogram

### Question 2

Is study time related to score?

Use:

Scatter Plot

### Question 3

Which department has the highest average score?

Use:

Bar Chart

### Question 4

How does performance change over time?

Use:

Line Plot

The visualization should therefore be selected according to the question we are trying to answer.

---

# 23. Subplots

Matplotlib can display multiple graphs in one figure.

Example:

import matplotlib.pyplot as plt

x = [
    1,
    2,
    3,
    4,
    5
]

y = [
    10,
    20,
    30,
    40,
    50
]

plt.figure(
    figsize=(10, 4)
)

plt.subplot(
    1,
    2,
    1
)

plt.plot(
    x,
    y
)

plt.title(
    "Line Plot"
)

plt.subplot(
    1,
    2,
    2
)

plt.scatter(
    x,
    y
)

plt.title(
    "Scatter Plot"
)

plt.tight_layout()

plt.show()

The same data is being viewed using two different visualization approaches.

---

# 24. Detecting Unusual Values

Visualization can help identify unusual observations.

Consider:

import matplotlib.pyplot as plt

scores = [
    65, 68, 70, 72, 74,
    75, 78, 80, 82, 150
]

plt.hist(
    scores,
    bins=5
)

plt.xlabel("Score")
plt.ylabel("Frequency")
plt.title("Score Distribution")

plt.show()

The value:

150

is very different from the other values.

The graph tells us that this observation should be investigated.

However, we should not automatically delete it.

It could be:

- An incorrect entry
- A measurement error
- A valid value under a different definition
- A special case

Visualization helps identify the problem; data analysis determines how it should be handled.

---

# 25. Visualization Does Not Prove Causation

Suppose a scatter plot shows that students who study more tend to have higher scores.

We might observe:

StudyHours increases

and:

Score increases

But this does not automatically prove:

StudyHours causes Score.

Other variables could influence the result:

- Previous knowledge
- Attendance
- Teaching quality
- Learning environment
- Study methods

Therefore:

Correlation or visual association should not automatically be interpreted as causation.

This is an important principle in responsible AI and data science.

---

# 26. Good Visualization Principles

A useful visualization should:

- Have a clear purpose
- Use an appropriate chart type
- Contain meaningful labels
- Have an informative title
- Represent the data honestly
- Avoid unnecessary complexity
- Make important patterns visible
- Be easy to interpret

The goal is not to make the graph look impressive.

The goal is:

Data → Understanding

---

# 27. Complete AI Data Visualization Example

The following program combines Python, NumPy, Pandas, and Matplotlib.

Example:

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

np.random.seed(42)

study_hours = np.arange(
    1,
    11
)

scores = (
    study_hours * 8
    + np.random.randint(
        -5,
        6,
        10
    )
)

df = pd.DataFrame({
    "StudyHours": study_hours,
    "Score": scores
})

print("Dataset:")
print(df)

print("\\nStatistics:")
print(df.describe())

print("\\nAverage Score:")
print(
    np.mean(
        df["Score"]
    )
)

plt.scatter(
    df["StudyHours"],
    df["Score"]
)

plt.xlabel("Study Hours")
plt.ylabel("Score")
plt.title("Study Hours vs Student Score")

plt.show()

This demonstrates:

Python
   ↓
NumPy
   ↓
Generate Numerical Data
   ↓
Pandas
   ↓
Create Structured Dataset
   ↓
Statistical Analysis
   ↓
Matplotlib
   ↓
Visualization
   ↓
Interpretation

---

# 28. Practical Experiment — Student Performance Dataset

Create a dataset containing at least 20 records with:

StudyHours

Attendance

PreviousScore

FinalScore

Then perform:

### Step 1 — Load the Data

Load it into a Pandas DataFrame.

### Step 2 — Inspect

Display:

df.shape

df.columns

df.dtypes

df.describe()

### Step 3 — Analyze

Calculate:

- Mean
- Minimum
- Maximum
- Standard deviation

for important numerical columns.

### Step 4 — Visualize

Create:

1. Histogram of FinalScore
2. Scatter plot of StudyHours vs FinalScore
3. Scatter plot of Attendance vs FinalScore

If your dataset contains categories, create an appropriate bar chart as well.

### Step 5 — Interpret

Write observations explaining:

- Where the scores are concentrated
- Whether study hours appear related to scores
- Whether attendance appears related to scores
- Whether unusual values exist

Do not simply write:

"The graph is good."

Explain what the graph actually tells you.

---

# 29. Practice 1 — Line Plot

Create a line plot showing temperature over seven days.

Include:

- X-axis label
- Y-axis label
- Title

---

# 30. Practice 2 — Bar Chart

Create a bar chart showing the number of students in five departments.

---

# 31. Practice 3 — Scatter Plot

Create a dataset containing study hours and scores.

Create a scatter plot and explain the pattern you observe.

---

# 32. Practice 4 — Histogram

Generate 100 random values using NumPy.

Display their distribution using a histogram.

Use a fixed random seed.

---

# 33. Practice 5 — Mathematical Function

Visualize:

y = x^2

for:

-10 <= x <= 10

Use:

np.linspace()

to generate the x values.

---

# 34. Practice 6 — Model Comparison

Create two artificial model-performance datasets.

Plot both on the same graph.

Use labels and a legend to distinguish them.

---

# 35. Practice 7 — Pandas + Matplotlib

Create a Pandas DataFrame with at least 10 records.

Select two numerical columns and create a scatter plot.

---

# Challenge — AI Data Visualization System

Build a Python program that:

1. Loads a CSV dataset.
2. Inspects its structure.
3. Calculates descriptive statistics.
4. Checks for missing values.
5. Performs appropriate data cleaning.
6. Creates a histogram.
7. Creates a scatter plot.
8. Creates a bar chart where appropriate.
9. Displays important numerical statistics.
10. Displays the visualizations.
11. Provides at least three observations about the dataset.

Use:

Python

NumPy

Pandas

Matplotlib

For every visualization, answer:

What question does this visualization help answer?

---

# Common Mistakes

## Mistake 1 — Missing Axis Labels

Avoid:

plt.plot(
    x,
    y
)

when the meaning of x and y is unclear.

Prefer:

plt.plot(
    x,
    y
)

plt.xlabel("Study Hours")
plt.ylabel("Score")
plt.title("Study Hours vs Score")

---

# Mistake 2 — Choosing the Wrong Chart

Histogram:

Numerical distribution

Bar chart:

Category comparison

Scatter plot:

Relationship between numerical variables

Line plot:

Trend or sequence

---

# Mistake 3 — Ignoring Outliers

An unusual observation should be investigated rather than automatically removed.

---

# Mistake 4 — Treating Visualization as Proof

A graph can show a pattern, but it does not automatically prove causation.

---

# Mistake 5 — Creating Graphs Without a Question

Every visualization should have a purpose.

Before creating a graph, ask:

What am I trying to understand?

---

# Quick Check

1. What is Matplotlib used for?

A Python library for creating visualizations.

2. What does plt.plot() do?

It creates a line plot.

3. What does plt.show() do?

It displays the figure.

4. When is a line plot appropriate?

For trends, sequences, and time-dependent data.

5. When is a scatter plot appropriate?

For investigating relationships between numerical variables.

6. What does a histogram show?

The distribution of numerical values.

7. What is a bar chart mainly used for?

Comparing categories.

8. Why are axis labels important?

They tell the viewer what the plotted variables represent.

9. Why is np.linspace() useful for mathematical visualization?

It creates many evenly spaced values, allowing mathematical functions to be plotted smoothly.

10. How can visualization help identify unusual values?

A graph can make observations that differ strongly from the rest of the dataset visually apparent.

11. Does a scatter plot prove causation?

No.

12. How do NumPy and Matplotlib work together?

NumPy generates or transforms numerical data, while Matplotlib visualizes it.

13. How do Pandas and Matplotlib work together?

Pandas organizes and analyzes structured data, while Matplotlib visualizes selected columns or summaries.

14. Which visualization is useful for examining the distribution of a numerical feature?

Histogram.

15. Which visualization is useful for comparing categories?

Bar chart.

16. Which visualization is useful for investigating the relationship between two numerical variables?

Scatter plot.

17. Why should numerical analysis and visualization be used together?

Numerical analysis summarizes the data quantitatively, while visualization helps humans identify patterns and relationships.

---

# Key Takeaways

- Matplotlib is a Python library for data visualization.
- Line plots are useful for trends and sequential data.
- Scatter plots help investigate relationships between numerical variables.
- Bar charts compare categories.
- Histograms show numerical distributions.
- NumPy can generate and transform numerical data for visualization.
- Pandas organizes and prepares structured data for visualization.
- Visualization can reveal trends, distributions, relationships, and unusual observations.
- A graph should communicate useful information rather than simply decorate a project.
- Visualization does not automatically establish causation.
- The best visualization depends on the question being investigated.
- NumPy + Pandas + Matplotlib form an important foundation for practical AI data analysis.

The complete workflow is:

Python
   ↓
NumPy
   ↓
Numerical Computation
   ↓
Pandas
   ↓
Data Inspection & Manipulation
   ↓
Matplotlib
   ↓
Visualization
   ↓
Pattern Discovery
   ↓
AI Data Understanding
`,
};

export default lesson12;

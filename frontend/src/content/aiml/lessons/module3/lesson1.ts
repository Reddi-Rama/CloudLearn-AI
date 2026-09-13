const lesson1 = {
  title: "Python Environment for AI Development",

  content: `
# Python Environment for AI Development

## What You Will Learn

In this lesson, you will learn:

- Why Python is widely used in Artificial Intelligence
- How Python fits into an AI development workflow
- Python interpreter and Python scripts
- Interactive execution and notebooks
- Python packages and libraries
- pip and package management
- Virtual environments
- Jupyter Notebook
- VS Code for AI development
- How to create and run a basic AI-oriented Python program
- How Python connects with NumPy, Pandas, Matplotlib, and machine-learning libraries

---

# 1. Introduction

Artificial Intelligence is not implemented only through mathematical formulas or machine-learning algorithms. A practical AI system requires a programming environment in which data can be loaded, processed, analyzed, visualized, and eventually given to an AI model.

Python has become one of the most widely used programming languages for this purpose.

The important point is:

Python is not an AI algorithm. Python is the programming foundation used to build and operate AI systems.

A typical AI workflow can be represented as:

Data
  ↓
Python
  ↓
Numerical Computation
  ↓
Data Processing
  ↓
Visualization
  ↓
AI / ML Algorithm
  ↓
Evaluation
  ↓
Application

Python provides the connection between these stages.

---

# 2. Why Python Is Used in AI

Python is particularly useful for AI because it combines a relatively simple programming syntax with a large ecosystem of scientific and AI libraries.

Important libraries include:

- NumPy — numerical computation
- Pandas — data manipulation and analysis
- Matplotlib — visualization
- scikit-learn — classical machine learning
- PyTorch — deep learning
- TensorFlow — machine learning and deep learning
- Transformers — modern NLP and generative-AI workflows

You will not learn all of these in this lesson. They will be introduced progressively throughout the course.

The important idea is that Python provides the base layer, while specialized libraries provide capabilities required for different AI tasks.

---

# 3. Python as a Computational Tool

Consider a mathematical calculation:

y = 2x + 5

If:

x = 10

then:

y = 2(10) + 5 = 25

The same calculation can be expressed in Python:

x = 10
y = 2 * x + 5

print(y)

Output:

25

This illustrates an important relationship:

Mathematical idea
→
Computational representation
→
Python program

This connection becomes increasingly important when we later implement vectors, matrices, probability, loss functions, and machine-learning algorithms.

---

# 4. How Python Executes a Program

A Python program is usually stored in a file with the extension:

.py

For example:

hello_ai.py

The file may contain:

print("AI development with Python")

When Python executes the program, the instructions are processed and the output is produced.

From the user's perspective:

Python source code
       ↓
Python interpreter
       ↓
Execution
       ↓
Output

The Python interpreter is the program responsible for executing Python code.

---

# 5. Python Script vs Interactive Execution

Python can be used in different environments.

## Python Script

A script is a saved .py file.

Example:

temperature = 32

if temperature > 30:
    print("High temperature")
else:
    print("Normal temperature")

This is useful for building reusable programs and applications.

## Interactive Python

Python can also execute commands interactively.

For example:

>>> 5 + 3

8

Then:

>>> 10 * 4

40

This is useful when experimenting with small pieces of code.

---

# 6. Python for AI Experimentation

AI development involves experimentation.

You may want to ask questions such as:

- What does my dataset look like?
- What is the average value?
- Are there missing values?
- Which features are related?
- What happens if I change a parameter?
- How does an algorithm behave?

It is inconvenient to create a complete application for every small experiment.

This is why interactive environments such as Jupyter Notebook are widely used in data science and AI.

---

# 7. Jupyter Notebook

Jupyter Notebook provides an interactive environment in which code, output, explanations, mathematical expressions, and visualizations can be placed together.

A notebook can contain:

Explanation
     ↓
Python Code
     ↓
Output
     ↓
Visualization
     ↓
Analysis

For example:

numbers = [10, 20, 30, 40, 50]

average = sum(numbers) / len(numbers)

print("Average:", average)

Output:

Average: 30.0

You can then write an explanation below the result.

This makes notebooks particularly useful for:

- AI experiments
- data analysis
- mathematical demonstrations
- visualization
- machine-learning experiments
- documenting computational results

---

# 8. VS Code for AI Development

Visual Studio Code (VS Code) is a code editor that can be used for Python development.

It is useful when working on larger projects containing multiple files.

For example:

ai-project/
│
├── main.py
├── data.py
├── analysis.py
├── model.py
└── data/
    └── dataset.csv

A project can therefore move from experimentation in a notebook toward organized Python source files.

A practical workflow is often:

Experiment in Notebook
        ↓
Understand the idea
        ↓
Write reusable Python code
        ↓
Organize into project files
        ↓
Build the AI application

---

# 9. Python Packages and Libraries

Python's standard installation provides many built-in capabilities.

However, AI requires additional functionality.

For example, Python itself does not provide the complete functionality of NumPy.

Therefore, we install packages.

A package is a collection of Python code that provides additional functionality.

A library is a reusable collection of functionality that programmers can use in their applications.

For example:

import numpy as np

allows a program to use NumPy.

Later:

import pandas as pd

allows the program to use Pandas.

And:

import matplotlib.pyplot as plt

allows the program to create visualizations.

---

# 10. Installing Packages with pip

Python commonly uses pip to install packages.

For example:

pip install numpy

To install several libraries:

pip install numpy pandas matplotlib

After installation, Python programs can import them:

import numpy
import pandas
import matplotlib

The basic relationship is:

Python
  ↓
pip
  ↓
Install package
  ↓
import package
  ↓
Use package in program

---

# 11. Why Virtual Environments Matter

Different AI projects may require different versions of libraries.

For example:

Project A
    NumPy version A
    Pandas version A

Project B
    NumPy version B
    Pandas version B

Installing everything globally can create conflicts.

A virtual environment creates an isolated Python environment for a project.

A typical workflow on Windows is:

python -m venv .venv

Activate it:

.venv\Scripts\activate

Then install project dependencies:

pip install numpy pandas matplotlib

The project now has its own environment.

---

# 12. Why Environment Management Matters in AI

AI projects often depend on many libraries.

Consider:

AI Project
│
├── Python
├── NumPy
├── Pandas
├── Matplotlib
├── scikit-learn
└── other dependencies

If one project requires a different package version from another project, isolated environments reduce conflicts.

This becomes even more important in advanced AI development, where projects may involve:

- machine-learning frameworks
- GPU libraries
- deep-learning frameworks
- model libraries
- data-processing packages

Therefore, environment management is not merely a setup detail. It is part of professional AI development.

---

# 13. First AI-Oriented Python Program

Let us create a very small program that performs a simple analysis.

temperatures = [28, 31, 35, 30, 27]

average = sum(temperatures) / len(temperatures)

print("Temperatures:", temperatures)
print("Average temperature:", average)

Output:

Temperatures: [28, 31, 35, 30, 27]
Average temperature: 30.2

Although this is not machine learning, it represents an important AI/data-processing pattern:

Input Data
    ↓
Representation
    ↓
Computation
    ↓
Result

AI systems perform much more sophisticated versions of this process.

---

# 14. From Python Lists to AI Data

Suppose we have information about students:

students = [
    [20, 3, 72],
    [21, 5, 81],
    [19, 7, 91],
    [22, 2, 65]
]

We can interpret each row as:

["age", "study hours", "score"]

For example:

x1 = [20, 3, 72]

The complete dataset can be viewed mathematically as a matrix:

X =
[
  [20, 3, 72]
  [21, 5, 81]
  [19, 7, 91]
  [22, 2, 65]
]

This is the beginning of data representation for AI.

Later, NumPy will provide a more powerful representation of this type of numerical data.

---

# 15. From Python to NumPy

Core Python can represent numerical data:

data = [
    [20, 3, 72],
    [21, 5, 81],
    [19, 7, 91]
]

NumPy provides a specialized numerical array:

import numpy as np

data = np.array([
    [20, 3, 72],
    [21, 5, 81],
    [19, 7, 91]
])

print(data)
print(data.shape)

Output:

[[20  3 72]
 [21  5 81]
 [19  7 91]]

(3, 3)

The shape:

(3, 3)

means the array contains:

- 3 observations
- 3 values/features per observation

NumPy will be studied in detail in later lessons.

---

# 16. Python → NumPy → Pandas → Matplotlib

The tools introduced in this module have different responsibilities.

## Python

Provides:

- programming logic
- functions
- loops
- conditions
- data structures
- file handling

## NumPy

Provides:

- multidimensional arrays
- numerical operations
- vectorized computation
- linear algebra operations

## Pandas

Provides:

- DataFrames
- data loading
- filtering
- cleaning
- transformation
- statistical analysis

## Matplotlib

Provides:

- line plots
- bar charts
- scatter plots
- histograms
- mathematical visualization

Together:

             Python
                │
       ┌────────┼────────┐
       ↓        ↓        ↓
    NumPy    Pandas   Matplotlib
       │        │        │
       └────────┼────────┘
                ↓
          AI Data Workflow

---

# 17. A Basic AI Development Workflow

A practical AI project commonly follows a process similar to:

Step 1 — Set up the environment

Install Python and required packages.

Step 2 — Obtain data

Data may come from:

- files
- databases
- APIs
- sensors
- applications

Step 3 — Load the data

Python and Pandas can be used to load the data.

Step 4 — Inspect the data

Determine:

- number of records
- features
- data types
- missing values
- unusual values

Step 5 — Process the data

Clean and transform the information.

Step 6 — Analyze the data

Calculate statistics and investigate relationships.

Step 7 — Visualize the data

Use plots to discover patterns.

Step 8 — Build an AI model

Later in the course, machine-learning algorithms will be introduced.

Step 9 — Evaluate

Determine how well the system performs.

This lesson focuses primarily on the computational foundation before model building.

---

# 18. Practical Experiment

Create a Python program containing a small dataset:

scores = [65, 72, 81, 90, 76, 88, 95]

average = sum(scores) / len(scores)

minimum = min(scores)
maximum = max(scores)

print("Scores:", scores)
print("Average:", average)
print("Minimum:", minimum)
print("Maximum:", maximum)

Now modify the program to calculate how many scores are greater than the average.

count = 0

for score in scores:
    if score > average:
        count += 1

print("Scores above average:", count)

This experiment introduces three fundamental computational operations:

Aggregation

Comparison

Counting

These operations will later be performed on much larger datasets using specialized libraries.

---

# 19. Common Mistakes

## Mistake 1 — Thinking Python itself performs AI

Python is a programming language. AI functionality comes from algorithms, models, and specialized libraries.

## Mistake 2 — Installing packages without understanding the environment

Packages should ideally be installed in the environment associated with the project.

## Mistake 3 — Confusing Jupyter with Python

Jupyter is an interactive development environment. Python is the programming language being executed.

## Mistake 4 — Using libraries without understanding the underlying idea

For example, learning:

np.mean(data)

is useful, but you should also understand what mean means mathematically:

x̄ = (1/n) Σ xi

The course will follow this principle throughout the module.

## Mistake 5 — Treating environment setup as unrelated to AI

Professional AI development depends heavily on reproducible environments and correctly managed dependencies.

---

# 20. Practice Tasks

## Task 1 — Python Environment

Create a Python project and verify that Python is installed correctly.

## Task 2 — Basic Computation

Write a program that calculates:

- sum
- average
- minimum
- maximum

for a numerical dataset.

## Task 3 — AI-Oriented Dataset

Create a small dataset containing at least three numerical features for ten observations.

Represent it using Python lists.

## Task 4 — Data Analysis

Calculate the average of one feature and identify the observations above that average.

## Task 5 — Environment

Create a virtual environment and install:

NumPy

Pandas

Matplotlib

Then verify that each library can be imported successfully.

## Challenge

Create a Python program that accepts a collection of numerical observations and produces:

- Number of observations
- Minimum
- Maximum
- Average
- Number above average
- Number below average

Try to design the program so that the analysis can be reused for different datasets.

---

# 21. Quick Check

1. What is Python?

A general-purpose programming language widely used for AI, data science, automation, and software development.

2. Why is Python popular in AI?

Because it provides readable programming syntax and a large ecosystem of numerical, data-processing, visualization, and AI libraries.

3. What is a Python interpreter?

A program that executes Python code.

4. What is a .py file?

A Python source-code file.

5. What is Jupyter Notebook useful for?

Interactive coding, experimentation, data analysis, visualization, and documenting computational work.

6. What does pip do?

It is commonly used to install and manage Python packages.

7. Why use a virtual environment?

To isolate project dependencies and reduce conflicts between projects.

8. What is NumPy primarily used for?

Numerical and multidimensional-array computation.

9. What is Pandas primarily used for?

Data manipulation and analysis.

10. What is Matplotlib primarily used for?

Data visualization.

---

# 22. Key Takeaways

- Python provides the programming foundation for practical AI development.
- AI development requires more than Python syntax; it requires computational thinking.
- Python can represent mathematical operations directly.
- Jupyter is useful for experimentation and interactive analysis.
- VS Code is useful for developing organized Python projects.
- Packages extend Python's capabilities.
- Virtual environments help maintain isolated project dependencies.
- NumPy will provide efficient numerical representations and computation.
- Pandas will provide tools for working with datasets.
- Matplotlib will provide tools for visualizing data.
- Professional AI development follows a workflow from data → computation → analysis → visualization → modeling.
- The next lessons will build these capabilities progressively rather than treating Python libraries as isolated tools.

The central workflow is:

Python Environment
       ↓
Python Programming
       ↓
Data Representation
       ↓
Numerical Computing
       ↓
Data Processing
       ↓
Visualization
       ↓
AI Data Workflow
`,
};

export default lesson1;

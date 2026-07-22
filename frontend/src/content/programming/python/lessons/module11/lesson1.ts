const lesson1 = {
  id: "lesson1",
  title: "Introduction to Libraries",
  previousLesson: "/lesson/python-development/module11/about",
  nextLesson: "/lesson/python-development/module11/lesson2",

  content: `# Introduction to Libraries

One of Python's greatest strengths is its vast collection of libraries. Instead of writing every piece of code from scratch, developers use libraries that provide ready-made solutions for common programming problems.

Libraries contain pre-written, tested, and optimized code that helps developers build applications faster and more efficiently.

Modern software development depends heavily on libraries, making them an essential part of every Python programmer's toolkit.

---

# What is a Library?

A **library** is a collection of pre-written code that solves specific programming problems.

A library may contain:

- Functions
- Classes
- Modules
- Utilities
- Constants

Rather than implementing these features yourself, you simply import the library and use its functionality.

---

# Why Were Libraries Created?

Imagine creating a program to draw charts.

Without libraries, you would need to:

- Draw axes manually.
- Position labels correctly.
- Calculate graph coordinates.
- Render shapes and colors.

This requires a large amount of code.

Libraries such as **Matplotlib** perform all of these tasks automatically, allowing developers to create professional charts using only a few lines of code.

---

# Types of Python Libraries

Python provides libraries for almost every field of software development.

Some common categories include:

- Data Science
- Machine Learning
- Artificial Intelligence
- Web Development
- Automation
- Cybersecurity
- Networking
- Cloud Computing
- Scientific Computing

This rich ecosystem is one of the main reasons Python is widely used across industries.

---

# Built-in vs Third-Party Libraries

Python libraries can be divided into two categories.

## Built-in Libraries

These libraries come pre-installed with Python.

Examples include:

- math
- random
- datetime
- os
- statistics

They can be imported directly without installation.

---

## Third-Party Libraries

These libraries are created by the Python community and can be installed using **pip**.

Popular examples include:

- NumPy
- Pandas
- Matplotlib
- Flask
- FastAPI
- TensorFlow
- Scikit-Learn

These libraries extend Python's capabilities far beyond the standard library.

---

# Real-World Example

Consider a cybersecurity analyst.

Instead of creating networking tools from scratch, they use libraries for:

- Packet analysis
- Network scanning
- Log processing
- Threat detection

Similarly, a Data Scientist uses:

- Pandas for data cleaning.
- NumPy for numerical calculations.
- Matplotlib for visualization.

Libraries dramatically reduce development time.

---

# Advantages of Libraries

## Faster Development

Developers solve complex problems with only a few lines of code.

---

## Code Reusability

Libraries provide reusable components that can be used in multiple projects.

---

## Reliability

Popular libraries are thoroughly tested and maintained by experienced developers.

---

## Improved Productivity

Developers spend more time solving business problems instead of writing common functionality.

---

# IMPORTANT

Before writing your own implementation, always check whether an existing Python library already provides the required functionality.

Using well-maintained libraries saves time, reduces bugs, and follows professional development practices.

---

# Common Beginner Mistakes

- Writing functionality that already exists in a library.
- Using a library without understanding its purpose.
- Installing unnecessary libraries.
- Ignoring official documentation.
- Choosing outdated or poorly maintained libraries.

---

# Best Practices

- Prefer reliable and well-maintained libraries.
- Read the documentation before using a library.
- Install only the libraries your project requires.
- Keep libraries updated responsibly.
- Learn commonly used libraries in your field.

---

# Real-World Applications

Python libraries are used in:

- Artificial Intelligence
- Machine Learning
- Data Science
- Web Development
- Automation
- Cybersecurity
- Cloud Computing
- Scientific Research
- Financial Analysis
- Internet of Things (IoT)

Nearly every professional Python application relies on one or more libraries.

---

# Key Points

- A library is a collection of pre-written code.
- Libraries contain functions, classes, modules, and utilities.
- Python offers both built-in and third-party libraries.
- Libraries increase productivity and reduce development time.
- Professional developers build applications by effectively combining powerful libraries.
`,

  examples: [
    {
      title: "Example 1: Using a Built-in Library",
      code: `import math

print(math.sqrt(81))`,
      output: `9.0`,
    },
    {
      title: "Example 2: Using the Random Library",
      code: `import random

print(random.randint(1, 10))`,
      output: `7  # Output may vary`,
    },
    {
      title: "Example 3: Importing a Third-Party Library",
      code: `import pandas as pd

print("Pandas library imported successfully.")`,
      output: `Pandas library imported successfully.`,
    },
    {
      title: "Example 4: Real-World Library Usage",
      code: `import matplotlib.pyplot as plt

print("Ready to create charts.")`,
      output: `Ready to create charts.`,
    },
  ],
};

export default lesson1;
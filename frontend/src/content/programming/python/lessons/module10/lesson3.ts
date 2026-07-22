const lesson3 = {
  id: "lesson3",
  title: "Importing Modules",
  previousLesson: "/lesson/python-development/module10/lesson2",
  nextLesson: "/lesson/python-development/module10/lesson4",

  content: `# Importing Modules

Creating modules is only the first step. To use the functionality inside a module, Python provides the **import** statement.

Importing allows one Python file to access variables, functions, classes, and other objects defined in another module. This promotes code reuse and helps developers build organized, maintainable applications.

Instead of rewriting existing code, developers simply import the required module and use its functionality.

---

# What is Importing?

Importing is the process of loading a module into a Python program.

When Python encounters an **import** statement, it automatically:

1. Searches for the module.
2. Loads the module into memory.
3. Makes its contents available for use.

Once imported, the program can access everything defined inside that module.

---

# Importing an Entire Module

The simplest way to import a module is by using the **import** keyword.

Example:

import math

The module name is used whenever one of its functions or variables is accessed.

Example:

math.sqrt(25)

This clearly indicates that the function belongs to the **math** module.

---

# Importing Specific Functions

Sometimes a program needs only one or two functions from a module.

Instead of importing the entire module, Python allows importing specific functions.

This reduces unnecessary typing and improves readability.

Example:

from math import sqrt

Now the function can be used directly without writing the module name every time.

---

# Using Aliases

Some module names are long.

Python allows assigning a shorter name using the **as** keyword.

Example:

import pandas as pd

Now, instead of writing:

pandas.read_csv()

developers simply write:

pd.read_csv()

Aliases are widely used in Data Science, Machine Learning, and professional Python projects.

Some common aliases include:

- numpy as np
- pandas as pd
- matplotlib.pyplot as plt

---

# Wildcard Imports

Python also supports importing everything from a module.

Example:

from math import *

This imports all public functions and variables.

Although valid, this approach is generally discouraged because:

- It can create naming conflicts.
- It reduces code readability.
- It becomes difficult to identify where functions originate.

Professional developers rarely use wildcard imports.

---

# Real-World Example

A Machine Learning application may require several libraries.

Example imports:

- NumPy for numerical computing.
- Pandas for data analysis.
- Matplotlib for visualization.

Instead of building these tools from scratch, developers simply import the required libraries and begin solving business problems.

This demonstrates the power of Python's import system.

---

# Advantages of Importing Modules

## Code Reusability

Developers reuse existing code instead of writing it again.

---

## Better Organization

Applications remain modular and easier to understand.

---

## Faster Development

Using existing modules significantly reduces development time.

---

## Improved Readability

Imports clearly show which external functionality is being used.

---

# IMPORTANT

Import only the modules and functions that your program actually needs.

Unnecessary imports increase memory usage, reduce readability, and make applications more difficult to maintain.

---

# Common Beginner Mistakes

- Forgetting to import a required module.
- Using wildcard imports unnecessarily.
- Importing unused modules.
- Giving confusing alias names.
- Importing the same module multiple times unnecessarily.

---

# Best Practices

- Import only required modules.
- Prefer importing specific functions when appropriate.
- Use meaningful aliases like **pd**, **np**, and **plt**.
- Avoid wildcard imports.
- Keep import statements at the beginning of the file.

---

# Real-World Applications

Importing modules is used in:

- Web Development
- Data Science
- Artificial Intelligence
- Machine Learning
- Cloud Computing
- Automation
- Cybersecurity
- Scientific Computing

Every professional Python application imports modules and libraries.

---

# Key Points

- The **import** statement loads a module into a program.
- Entire modules or specific functions can be imported.
- Aliases improve readability.
- Wildcard imports are generally discouraged.
- Importing modules encourages reusable and maintainable code.
`,

  examples: [
    {
      title: "Example 1: Importing an Entire Module",
      code: `import math

print(math.sqrt(25))
print(math.factorial(5))`,
      output: `5.0
120`,
    },
    {
      title: "Example 2: Importing a Specific Function",
      code: `from math import sqrt

print(sqrt(64))`,
      output: `8.0`,
    },
    {
      title: "Example 3: Using an Alias",
      code: `import pandas as pd

print("Pandas imported successfully.")`,
      output: `Pandas imported successfully.`,
    },
    {
      title: "Example 4: Importing a Custom Module",
      code: `# discount.py

def calculate_discount(price):
    return price * 0.10

# main.py

import discount

print(discount.calculate_discount(4000))`,
      output: `400.0`,
    },
  ],
};

export default lesson3;
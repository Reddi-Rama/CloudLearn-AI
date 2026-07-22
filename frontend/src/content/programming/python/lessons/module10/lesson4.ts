const lesson4 = {
  id: "lesson4",
  title: "Built-in Modules",
  previousLesson: "/lesson/python-development/module10/lesson3",
  nextLesson: "/lesson/python-development/module10/lesson5",

  content: `# Built-in Modules

Python comes with a large collection of ready-to-use modules known as **built-in modules** or the **Python Standard Library**. These modules provide solutions for many common programming tasks, allowing developers to build applications faster without writing everything from scratch.

Python's standard library is often described as **"Batteries Included"** because it provides a wide variety of useful functionality immediately after installation.

---

# What are Built-in Modules?

Built-in modules are modules that are included with Python by default.

Unlike third-party libraries, they do not need to be installed separately using **pip**.

They can be used simply by importing them into your program.

Examples include:

- math
- random
- datetime
- os
- statistics
- sys

These modules cover everything from mathematical calculations to file management and operating system interactions.

---

# The math Module

The **math** module provides mathematical functions and constants.

Some commonly used features include:

- sqrt()
- factorial()
- pow()
- ceil()
- floor()
- pi

This module is useful for scientific calculations, engineering applications, and data analysis.

---

# The random Module

The **random** module generates random numbers and selections.

It is commonly used in:

- Games
- Simulations
- Password generators
- Lottery systems
- Testing applications

Functions include:

- randint()
- random()
- choice()
- shuffle()

---

# The datetime Module

The **datetime** module is used to work with dates and times.

Developers use it to:

- Display the current date
- Measure time
- Schedule tasks
- Calculate age
- Generate timestamps

Almost every professional application works with dates and times.

---

# The os Module

The **os** module allows Python to interact with the operating system.

Common operations include:

- Getting the current working directory
- Creating folders
- Renaming files
- Deleting files
- Accessing environment variables

This module is widely used in automation and system administration.

---

# The statistics Module

The **statistics** module performs basic statistical calculations.

It provides functions such as:

- mean()
- median()
- mode()
- variance()

It is useful for:

- Student result analysis
- Business reports
- Data Science
- Machine Learning preprocessing

---

# Why Use Built-in Modules?

Without built-in modules, developers would have to implement common functionality manually.

For example:

- Mathematical calculations
- Random number generation
- Date handling
- File system operations
- Statistical calculations

Using Python's standard library saves development time and reduces errors.

---

# Real-World Example

Suppose you are building an online examination system.

You can use:

- **random** to shuffle questions.
- **datetime** to record exam start and end times.
- **statistics** to calculate average marks.
- **os** to manage report files.
- **math** to perform calculations.

Instead of writing these features yourself, Python already provides reliable built-in modules.

---

# IMPORTANT

Before writing your own solution, always check whether Python's Standard Library already provides the required functionality.

Using built-in modules results in cleaner, faster, and more reliable code.

---

# Common Beginner Mistakes

- Rewriting functionality that already exists in the Standard Library.
- Forgetting to import the required module.
- Using third-party libraries when a built-in module is sufficient.
- Importing unnecessary modules.
- Not exploring the available functions inside a module.

---

# Best Practices

- Prefer built-in modules whenever possible.
- Read the official Python documentation.
- Import only the modules you need.
- Learn commonly used modules like **math**, **random**, **datetime**, **os**, and **statistics**.
- Avoid reinventing existing functionality.

---

# Real-World Applications

Built-in modules are used in:

- Banking Applications
- Data Science
- Machine Learning
- Automation Scripts
- Cloud Computing
- Cybersecurity
- Web Development
- Scientific Computing

Nearly every Python application relies on one or more built-in modules.

---

# Key Points

- Built-in modules come with Python.
- No installation is required.
- The Standard Library provides ready-to-use functionality.
- Common modules include **math**, **random**, **datetime**, **os**, and **statistics**.
- Using built-in modules saves time and improves code quality.
`,

  examples: [
    {
      title: "Example 1: Using the math Module",
      code: `import math

print(math.factorial(5))
print(math.pi)`,
      output: `120
3.141592653589793`,
    },
    {
      title: "Example 2: Using the random Module",
      code: `import random

print(random.randint(1, 100))`,
      output: `57  # Output may vary`,
    },
    {
      title: "Example 3: Using the datetime Module",
      code: `from datetime import datetime

current_time = datetime.now()
print(current_time)`,
      output: `2026-07-19 10:35:42.123456  # Output will vary`,
    },
    {
      title: "Example 4: Using the statistics Module",
      code: `import statistics

marks = [78, 85, 91, 88]

print(statistics.mean(marks))`,
      output: `85.5`,
    },
  ],
};

export default lesson4;
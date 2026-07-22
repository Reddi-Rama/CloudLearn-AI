const lesson7 = {
  id: "lesson7",
  title: "Absolute and Relative Imports",
  previousLesson: "/lesson/python-development/module10/lesson6",
  nextLesson: "/lesson/python-development/module10/lesson8",

  content: `# Absolute and Relative Imports

As Python projects become larger, different modules often need to access one another. Python provides two ways to import modules within a project:

- Absolute Imports
- Relative Imports

Understanding both approaches is important for developing well-organized and maintainable Python applications.

---

# Why Do We Need Different Import Types?

Imagine a project containing dozens of packages and hundreds of modules.

Modules frequently need to communicate with one another by importing classes, functions, or variables.

Python provides two import styles to make this possible:

- Absolute imports
- Relative imports

Each has its own advantages depending on the project's structure.

---

# What are Absolute Imports?

An **absolute import** specifies the complete path to a module starting from the project's top-level package.

Example:

from cloudlearn.courses.python import PythonCourse

Python begins searching from the root package (**cloudlearn**) and follows the complete path to the required module.

Absolute imports clearly show where a module is located.

---

# Advantages of Absolute Imports

Absolute imports offer several benefits:

- Easy to understand
- Explicit and readable
- Less likely to create confusion
- Preferred in professional software projects

Because the full path is visible, developers can quickly locate the imported module.

---

# What are Relative Imports?

A **relative import** uses dots (.) to specify the location of another module relative to the current package.

Examples:

from .courses import PythonCourse

from ..payments.invoice import generate_invoice

Here:

- . (single dot) represents the current package.
- .. (double dots) represent the parent package.

Relative imports are commonly used inside packages.

---

# Understanding the Dot Notation

Python uses dots to indicate package hierarchy.

Single Dot (.)

Represents the current package.

Example:

from .courses import PythonCourse

Double Dots (..)

Represent the parent package.

Example:

from ..payments.invoice import generate_invoice

This notation makes it easy to navigate between related packages.

---

# Real-World Example

Consider the following project:

cloudlearn/

- courses/
  - python.py

- certificates/
  - generator.py

Suppose the certificate generator needs information from the Python course module.

This can be achieved using either:

- An absolute import from the project root.
- A relative import from the current package.

Both approaches achieve the same goal, but absolute imports are generally easier to read.

---

# Absolute vs Relative Imports

Absolute Imports

- Start from the project root.
- More readable.
- Preferred for large projects.
- Easier to understand.

Relative Imports

- Start from the current package.
- Shorter in some situations.
- Useful within the same package.
- Require understanding of package hierarchy.

Both are valid, but choosing the appropriate style improves project organization.

---

# IMPORTANT

Professional Python projects usually prefer **absolute imports** because they make the source of imported modules immediately clear.

Relative imports should be used carefully and mainly within well-structured packages.

---

# Common Beginner Mistakes

- Mixing absolute and relative imports inconsistently.
- Using incorrect numbers of dots in relative imports.
- Importing from the wrong package.
- Creating confusing project structures.
- Assuming relative imports work in every situation.

---

# Best Practices

- Prefer absolute imports in large projects.
- Use relative imports only when they improve clarity.
- Keep package structures simple.
- Follow a consistent import style throughout the project.
- Organize modules logically before writing imports.

---

# Real-World Applications

Absolute and relative imports are used extensively in:

- Django Projects
- Flask Applications
- FastAPI Services
- Machine Learning Projects
- Enterprise Software
- Cloud Platforms
- Data Science Applications
- Open Source Python Libraries

Proper import management makes large applications easier to maintain.

---

# Key Points

- Python supports absolute and relative imports.
- Absolute imports begin from the project root.
- Relative imports use dots to represent package locations.
- Absolute imports are generally preferred in professional applications.
- A well-designed import structure improves readability and maintainability.
`,

  examples: [
    {
      title: "Example 1: Absolute Import",
      code: `from cloudlearn.courses.python import PythonCourse

course = PythonCourse()`,
      output: `Python imports the module using the complete package path.`,
    },
    {
      title: "Example 2: Relative Import Using a Single Dot",
      code: `from .courses import PythonCourse`,
      output: `Imports the module from the current package.`,
    },
    {
      title: "Example 3: Relative Import Using Double Dots",
      code: `from ..payments.invoice import generate_invoice`,
      output: `Imports a module from the parent package.`,
    },
    {
      title: "Example 4: Project Structure",
      code: `cloudlearn/

courses/
    python.py

payments/
    invoice.py

certificates/
    generator.py`,
      output: `Modules communicate using absolute or relative imports depending on the project structure.`,
    },
  ],
};

export default lesson7;
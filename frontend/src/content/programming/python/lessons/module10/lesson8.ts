const lesson8 = {
  id: "lesson8",
  title: "Module Search Path",
  previousLesson: "/lesson/python-development/module10/lesson7",
  nextLesson: "/lesson/python-development/module10/lesson9",

  content: `# Module Search Path

Whenever Python encounters an **import** statement, it must determine where the requested module is located. Python does not search randomly. Instead, it follows a predefined list of locations called the **Module Search Path**.

Understanding the module search path helps developers troubleshoot import errors and organize projects more effectively.

---

# What is the Module Search Path?

The **Module Search Path** is the list of directories that Python searches when importing a module.

When Python executes an import statement, it checks these locations one by one until the required module is found.

If Python cannot locate the module, it raises an error.

---

# Search Order

Python typically searches modules in the following order:

1. The current working directory.
2. Installed third-party packages.
3. Python Standard Library modules.
4. Environment-specific directories.

If the required module exists in one of these locations, Python imports it successfully.

---

# ModuleNotFoundError

If Python cannot find the requested module, it raises the following exception:

**ModuleNotFoundError**

This usually happens because:

- The module does not exist.
- The module is stored in the wrong directory.
- The package is not installed.
- The module name is incorrect.

Always verify the module name and its location before importing it.

---

# Viewing the Search Path

Python stores the module search locations inside **sys.path**.

The **sys** module provides access to this list.

Printing **sys.path** displays every directory that Python searches while importing modules.

This is useful for debugging import-related problems.

---

# Adding Custom Paths

Sometimes organizations maintain shared libraries stored in custom directories.

Developers can temporarily add these directories to the module search path using **sys.path.append()**.

Once the path is added, Python can import modules from that location.

Although this is possible, it should only be used when absolutely necessary.

---

# Why is the Module Search Path Important?

Understanding the module search path helps developers:

- Debug import errors.
- Organize projects correctly.
- Share reusable libraries.
- Understand how Python loads modules.

Professional developers frequently use this knowledge while working on large software systems.

---

# Real-World Example

Suppose a company develops several internal utility libraries.

Instead of copying these libraries into every project, the shared directory can be added to Python's module search path.

Multiple applications can then reuse the same code without duplication.

---

# IMPORTANT

Avoid modifying **sys.path** unless it is truly required.

A well-organized package structure and virtual environments are usually better solutions than manually changing the search path.

---

# Common Beginner Mistakes

- Misspelling the module name.
- Assuming Python searches every folder automatically.
- Forgetting to install required packages.
- Modifying **sys.path** unnecessarily.
- Ignoring **ModuleNotFoundError** messages.

---

# Best Practices

- Keep project files properly organized.
- Use packages instead of manually changing search paths.
- Prefer virtual environments for dependency management.
- Verify module names before importing.
- Use **sys.path** mainly for debugging purposes.

---

# Real-World Applications

Understanding the module search path is useful in:

- Enterprise Software Development
- Data Science Projects
- Machine Learning Applications
- Automation Scripts
- Cloud Computing
- Python Framework Development
- API Development
- Shared Library Management

Professional developers regularly troubleshoot module search path issues while working on large applications.

---

# Key Points

- Python searches specific directories when importing modules.
- The search order is called the Module Search Path.
- Search locations are stored in **sys.path**.
- Missing modules result in **ModuleNotFoundError**.
- Proper project organization reduces import problems.
`,

  examples: [
    {
      title: "Example 1: Viewing the Module Search Path",
      code: `import sys

print(sys.path)`,
      output: `['C:\\Projects', 'Python Installation Directory', ...]`,
    },
    {
      title: "Example 2: Adding a Custom Search Path",
      code: `import sys

sys.path.append("C:\\CloudLearn\\Utilities")`,
      output: `Python can now search for modules inside the specified directory.`,
    },
    {
      title: "Example 3: Importing a Module from the Search Path",
      code: `import utilities

print("Module imported successfully.")`,
      output: `Module imported successfully.`,
    },
    {
      title: "Example 4: Module Not Found",
      code: `import unknown_module`,
      output: `ModuleNotFoundError: No module named 'unknown_module'`,
    },
  ],
};

export default lesson8;
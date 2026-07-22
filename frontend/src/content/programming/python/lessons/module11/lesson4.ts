const lesson4 = {
  id: "lesson4",
  title: "Virtual Environments",
  previousLesson: "/lesson/python-development/module11/lesson3",
  nextLesson: "/lesson/python-development/module11/lesson5",

  content: `
# Virtual Environments

As Python developers work on multiple projects, they often need different versions of the same library. Installing all libraries globally can lead to conflicts and unexpected errors.

Python solves this problem using **Virtual Environments**, which create isolated environments for individual projects. Each project can have its own Python packages and versions without affecting other projects.

Virtual environments are considered a standard practice in professional Python development.

---

# Why Do We Need Virtual Environments?

Imagine you have two projects.

Project A requires:

- pandas 2.2

Project B requires:

- pandas 1.5

If both versions are installed globally, one project may stop working because of version conflicts.

A virtual environment allows each project to maintain its own dependencies independently.

---

# What is a Virtual Environment?

A **Virtual Environment** is an isolated Python environment created for a specific project.

Each virtual environment contains:

- Its own Python interpreter
- Its own installed packages
- Its own package versions
- Independent project dependencies

Changes made inside one virtual environment do not affect other projects.

---

# Creating a Virtual Environment

Python provides the **venv** module to create virtual environments.

Command:

python -m venv venv

This creates a new folder named **venv** containing an isolated Python environment.

The folder includes:

- Python executable
- Package installer (pip)
- Installed libraries
- Configuration files

---

# Activating a Virtual Environment

Before using the virtual environment, it must be activated.

### Windows

venv\\Scripts\\activate

### Linux and macOS

source venv/bin/activate

After activation, all installed packages remain inside that environment.

---

# Installing Packages

Once the environment is activated, packages can be installed normally.

Example:

pip install pandas

Only the current virtual environment receives the installation.

Other projects remain unaffected.

---

# Deactivating a Virtual Environment

When work is complete, the environment can be deactivated.

Command:

deactivate

The system returns to the global Python environment.

---

# Advantages of Virtual Environments

## Dependency Isolation

Each project has its own package versions.

---

## No Version Conflicts

Different projects can safely use different versions of the same library.

---

## Cleaner System

Global Python installation remains uncluttered.

---

## Easier Collaboration

Every developer on a team can use the same project dependencies.

---

# Real-World Example

Suppose a software company develops three applications:

- Banking System
- AI Chatbot
- Data Analytics Dashboard

Each application uses different versions of libraries.

By creating separate virtual environments, each project remains stable and independent.

Professional software teams create a virtual environment for every Python project.

---

# IMPORTANT

Never install project-specific libraries globally unless absolutely necessary.

Using virtual environments prevents dependency conflicts and ensures projects remain reproducible across different computers.

---

# Common Beginner Mistakes

- Installing packages globally.
- Forgetting to activate the virtual environment.
- Deleting the virtual environment accidentally.
- Using one virtual environment for multiple unrelated projects.
- Forgetting to recreate the environment after cloning a project.

---

# Best Practices

- Create a virtual environment for every project.
- Activate it before installing packages.
- Keep project dependencies inside the environment.
- Use requirements.txt to share dependencies.
- Remove unused virtual environments to save disk space.

---

# Real-World Applications

Virtual environments are used in:

- Data Science Projects
- Machine Learning Applications
- Web Development
- API Development
- Cloud Computing
- Automation Scripts
- Enterprise Software
- Open Source Projects

Nearly every professional Python project uses a virtual environment.

---

# Key Points

- A virtual environment is an isolated Python environment.
- It prevents dependency conflicts.
- The **venv** module creates virtual environments.
- Activate the environment before installing packages.
- Professional developers create one virtual environment for each project.
`,

  examples: [
    {
      title: "Example 1: Creating a Virtual Environment",
      code: `python -m venv venv`,
      output: `A new virtual environment named "venv" is created.`,
    },
    {
      title: "Example 2: Activating the Environment (Windows)",
      code: `venv\\Scripts\\activate`,
      output: `(venv) C:\\Projects>`,
    },
    {
      title: "Example 3: Installing a Package",
      code: `pip install pandas`,
      output: `The pandas package is installed inside the active virtual environment.`,
    },
    {
      title: "Example 4: Deactivating the Environment",
      code: `deactivate`,
      output: `The virtual environment is deactivated and Python returns to the global environment.`,
    },
  ],
};

export default lesson4;
const lesson5 = {
  id: "lesson5",
  title: "Dependency Management",
  previousLesson: "/lesson/python-development/module11/lesson4",
  nextLesson: "/lesson/python-development/module11/lesson6",

  content: `
# Dependency Management

Modern Python applications rarely rely only on the Python Standard Library. Most projects use external libraries such as **NumPy**, **Pandas**, **Flask**, or **TensorFlow**. These external libraries are called **dependencies** because the application depends on them to function correctly.

Managing these dependencies properly is known as **Dependency Management**. It is an essential skill for every professional Python developer.

---

# What are Dependencies?

A **dependency** is an external package or library that a project requires to run successfully.

For example, a Data Science project may depend on:

- NumPy
- Pandas
- Matplotlib
- Scikit-Learn

Without these libraries, the project cannot perform its intended tasks.

---

# Why is Dependency Management Important?

Imagine two developers working on the same project.

Developer A has:

- pandas 2.3.0

Developer B has:

- pandas 1.5.0

Even though both developers are working on the same code, the application may behave differently because of version differences.

Proper dependency management ensures that everyone uses the same package versions.

---

# Viewing Installed Dependencies

Python provides the **pip list** command to display all installed packages.

This command shows:

- Package names
- Installed versions

It helps developers verify the libraries available in their environment.

---

# Exporting Dependencies

Python allows developers to export all installed packages using the following command:

pip freeze

The output displays installed packages along with their version numbers.

Example:

pandas==2.3.0

numpy==2.1.1

requests==2.32.0

This information can later be saved into a requirements file.

---

# Why Export Dependencies?

Suppose a new developer joins your team.

Instead of installing packages one by one, they can install the exact versions used in the project.

This ensures:

- Consistent environments
- Fewer compatibility issues
- Easier project setup

Dependency management makes collaboration much simpler.

---

# Benefits of Dependency Management

## Consistency

Every developer works with the same package versions.

---

## Easy Collaboration

Projects become easier to share among team members.

---

## Reliable Deployment

Applications behave consistently during development, testing, and production.

---

## Easier Maintenance

Tracking installed libraries becomes straightforward.

---

# Real-World Example

A Machine Learning project may require:

- NumPy
- Pandas
- Scikit-Learn
- Matplotlib

Proper dependency management ensures every team member uses the same versions, reducing unexpected errors and making the project more reliable.

---

# IMPORTANT

Always track your project's dependencies carefully.

Installing random package versions without documentation can lead to compatibility problems, deployment failures, and difficult-to-debug issues.

---

# Common Beginner Mistakes

- Installing packages without checking versions.
- Forgetting which libraries a project requires.
- Installing unnecessary packages.
- Ignoring dependency updates.
- Sharing projects without dependency information.

---

# Best Practices

- Install only required packages.
- Keep dependencies updated responsibly.
- Use virtual environments.
- Record package versions.
- Regularly review installed dependencies.

---

# Real-World Applications

Dependency management is essential in:

- Data Science
- Machine Learning
- Artificial Intelligence
- Web Development
- Cloud Computing
- Automation
- Cybersecurity
- Enterprise Software

Every professional Python project depends on proper dependency management.

---

# Key Points

- Dependencies are external libraries required by a project.
- Dependency management ensures consistent environments.
- **pip list** displays installed packages.
- **pip freeze** lists package versions.
- Proper dependency management improves collaboration and deployment.
`,

  examples: [
    {
      title: "Example 1: Viewing Installed Packages",
      code: `pip list`,
      output: `Package        Version
pandas        2.3.0
numpy         2.1.1
requests      2.32.0`,
    },
    {
      title: "Example 2: Exporting Dependencies",
      code: `pip freeze`,
      output: `pandas==2.3.0
numpy==2.1.1
requests==2.32.0`,
    },
    {
      title: "Example 3: Machine Learning Project Dependencies",
      code: `numpy
pandas
matplotlib
scikit-learn`,
      output: `These libraries are required for the Machine Learning project.`,
    },
    {
      title: "Example 4: Dependency Consistency",
      code: `Developer A

pandas==2.3.0

Developer B

pandas==2.3.0`,
      output: `Both developers use the same package versions, ensuring consistent application behavior.`,
    },
  ],
};

export default lesson5;
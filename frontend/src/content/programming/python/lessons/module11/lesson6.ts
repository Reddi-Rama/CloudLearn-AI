const lesson6 = {
  id: "lesson6",
  title: "Requirements Files",
  previousLesson: "/lesson/python-development/module11/lesson5",
  nextLesson: "/lesson/python-development/module11/lesson7",

  content: `
# Requirements Files

As Python projects grow, they often depend on multiple external libraries. Installing these libraries one by one on another computer can be time-consuming and may lead to version mismatches.

Python solves this problem using a **requirements.txt** file. This file stores all the dependencies required by a project, making it easy for developers to recreate the same development environment.

Requirements files are considered a standard part of professional Python projects.

---

# What is requirements.txt?

The **requirements.txt** file is a text file that contains a list of all the packages required by a Python project.

Each package is usually written along with its version number.

Example:

pandas==2.3.0

numpy==2.1.1

requests==2.32.0

Using version numbers ensures that everyone working on the project uses the same library versions.

---

# Why Do We Need requirements.txt?

Imagine you have developed a web application using several external libraries.

If another developer downloads your project, they also need all those libraries.

Without a requirements file, they must install each package manually, which can lead to:

- Missing packages
- Wrong package versions
- Compatibility issues
- Application errors

The **requirements.txt** file solves these problems by listing all required dependencies.

---

# Creating a Requirements File

Python provides an easy way to generate a requirements file.

Command:

pip freeze > requirements.txt

The **pip freeze** command lists all installed packages along with their versions.

The output is automatically saved into the **requirements.txt** file.

---

# Installing Packages from requirements.txt

Once a requirements file is available, another developer can install every dependency with a single command.

Command:

pip install -r requirements.txt

Python automatically:

- Reads the file.
- Downloads required packages.
- Installs the correct versions.

This ensures that every developer works in the same environment.

---

# Why is requirements.txt Important?

The requirements file provides several benefits.

It helps with:

- Team collaboration
- Project sharing
- Deployment
- Reproducibility
- Version consistency

Without it, different developers may install different package versions, causing unexpected behavior.

---

# Real-World Example

Suppose a project requires:

- pandas
- numpy
- requests
- matplotlib

Instead of asking every developer to install them manually, the project includes a **requirements.txt** file.

Running one command installs everything automatically.

This makes project setup quick and reliable.

---

# Advantages of Requirements Files

## Easy Project Setup

Developers can install all dependencies with a single command.

---

## Consistent Environments

Every developer uses the same package versions.

---

## Simplified Deployment

Deployment servers can install dependencies automatically.

---

## Better Collaboration

Team members can easily work on the same project without dependency issues.

---

# IMPORTANT

Always update the **requirements.txt** file whenever you add, remove, or update project dependencies.

Keeping this file accurate ensures that everyone uses the correct libraries and versions.

---

# Common Beginner Mistakes

- Forgetting to create a requirements file.
- Sharing projects without dependency information.
- Not updating the file after installing new packages.
- Including unnecessary packages.
- Ignoring version numbers.

---

# Best Practices

- Generate requirements.txt using **pip freeze**.
- Commit the file to version control.
- Keep only necessary dependencies.
- Update the file whenever dependencies change.
- Use virtual environments along with requirements files.

---

# Real-World Applications

Requirements files are widely used in:

- Web Development
- Data Science
- Machine Learning
- Artificial Intelligence
- Cloud Computing
- DevOps
- Enterprise Software
- Automation Projects

Nearly every professional Python project includes a **requirements.txt** file.

---

# Key Points

- **requirements.txt** stores project dependencies.
- Each dependency usually includes its version number.
- **pip freeze** creates the file.
- **pip install -r requirements.txt** installs all dependencies.
- Requirements files improve collaboration and deployment.
`,

  examples: [
    {
      title: "Example 1: Creating a Requirements File",
      code: `pip freeze > requirements.txt`,
      output: `A requirements.txt file containing all installed packages is created.`,
    },
    {
      title: "Example 2: Sample requirements.txt",
      code: `pandas==2.3.0
numpy==2.1.1
requests==2.32.0`,
      output: `The file lists all required packages and their versions.`,
    },
    {
      title: "Example 3: Installing Dependencies",
      code: `pip install -r requirements.txt`,
      output: `All packages listed in the requirements file are installed successfully.`,
    },
    {
      title: "Example 4: Sharing a Project",
      code: `Project/

main.py
requirements.txt`,
      output: `Other developers can install all project dependencies using the requirements file.`,
    },
  ],
};

export default lesson6;
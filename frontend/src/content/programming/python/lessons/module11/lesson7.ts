const lesson7 = {
  id: "lesson7",
  title: "Package Versioning",
  previousLesson: "/lesson/python-development/module11/lesson6",
  nextLesson: "/lesson/python-development/module11/lesson8",

  content: `
# Package Versioning

Software is continuously evolving. Developers regularly release new versions of their libraries to introduce new features, improve performance, fix bugs, and address security vulnerabilities. However, updating a library without proper planning may also introduce compatibility issues.

**Package versioning** helps developers identify and manage different versions of a package, ensuring applications remain stable and reliable.

---

# Why Does Package Versioning Matter?

Imagine a project that uses:

pandas==2.3.0

After some time, a newer version becomes available:

pandas==3.0.0

The newer version may include:

- New features
- Performance improvements
- Security fixes
- Bug fixes

However, it may also remove or modify existing functionality, causing older programs to stop working.

For this reason, developers carefully manage package versions.

---

# Installing a Specific Version

Python allows developers to install an exact version of a package.

Example:

pip install pandas==2.3.0

This ensures that the project always uses the expected version.

Installing exact versions is common in professional software development.

---

# Installing Minimum Versions

Sometimes developers want to allow any version greater than a certain release.

Example:

pip install pandas>=2.0.0

This installs version 2.0.0 or any newer compatible version.

This approach provides flexibility while ensuring the project has the required features.

---

# Installing Version Ranges

Projects often specify a range of supported versions.

Example:

pip install pandas>=2.0.0,<3.0.0

This command installs:

- Version 2.0.0 or newer
- Any version below 3.0.0

Version ranges help avoid breaking changes introduced in major releases.

---

# Semantic Versioning

Most Python packages follow **Semantic Versioning**.

The format is:

MAJOR.MINOR.PATCH

Example:

2.3.1

Where:

- **Major** → Breaking changes
- **Minor** → New features and improvements
- **Patch** → Bug fixes and small updates

Understanding semantic versioning helps developers decide whether an update is safe.

---

# Why Professional Teams Use Versioning

Large software teams often work on the same project for months or years.

If every developer installs different library versions, the application may behave differently on each computer.

Versioning ensures:

- Consistent development
- Reliable testing
- Stable deployment
- Predictable application behavior

---

# Real-World Example

Suppose an AI application depends on TensorFlow.

The project was tested with:

tensorflow==2.18.0

If a developer upgrades directly to a future major version without testing, the application may fail because of compatibility changes.

Pinning the package version prevents unexpected issues.

---

# Advantages of Package Versioning

## Stability

Applications behave consistently across different systems.

---

## Better Collaboration

Every developer uses the same package versions.

---

## Easier Maintenance

Developers know exactly which versions are supported.

---

## Reliable Deployment

Production servers install the correct package versions.

---

# IMPORTANT

Always test your application before upgrading to a new major version of a package.

Major releases may contain breaking changes that require code modifications.

---

# Common Beginner Mistakes

- Installing the latest version without testing.
- Ignoring package version numbers.
- Mixing different package versions across team members.
- Using very old package versions.
- Forgetting to update dependency files after changing versions.

---

# Best Practices

- Pin package versions in production projects.
- Upgrade packages carefully.
- Test applications after updates.
- Understand Semantic Versioning.
- Keep dependency files updated.

---

# Real-World Applications

Package versioning is essential in:

- Enterprise Software
- Machine Learning Projects
- Web Development
- Cloud Applications
- Data Science
- DevOps
- Artificial Intelligence
- Open Source Projects

Every professional software team carefully manages package versions.

---

# Key Points

- Package versioning manages different versions of libraries.
- Developers can install exact versions or version ranges.
- Most Python packages follow Semantic Versioning.
- Major updates may introduce breaking changes.
- Proper version management improves stability and collaboration.
`,

  examples: [
    {
      title: "Example 1: Installing an Exact Version",
      code: `pip install pandas==2.3.0`,
      output: `Pandas version 2.3.0 is installed.`,
    },
    {
      title: "Example 2: Installing a Minimum Version",
      code: `pip install pandas>=2.0.0`,
      output: `Pandas version 2.0.0 or a newer compatible version is installed.`,
    },
    {
      title: "Example 3: Installing a Version Range",
      code: `pip install pandas>=2.0.0,<3.0.0`,
      output: `A supported version between 2.0.0 and 3.0.0 is installed.`,
    },
    {
      title: "Example 4: Semantic Versioning",
      code: `Package Version

2.3.1

Major = 2
Minor = 3
Patch = 1`,
      output: `The version follows the MAJOR.MINOR.PATCH format.`,
    },
  ],
};

export default lesson7;
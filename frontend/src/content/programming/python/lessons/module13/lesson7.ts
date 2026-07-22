const lesson7 = {
  id: "lesson7",
  title: "System Automation",
  previousLesson: "/lesson/python-development/module13/lesson6",
  nextLesson: "/lesson/python-development/module13/lesson8",
  content: `
# System Automation

System automation is the process of using software to perform operating system tasks automatically without manual intervention. Python provides powerful libraries that allow developers to automate file management, monitor system resources, execute system commands, manage processes, and perform routine maintenance.

System automation is widely used by system administrators, DevOps engineers, software developers, cybersecurity professionals, and IT support teams to improve efficiency and reduce repetitive work.

Python's simplicity and extensive standard library make it one of the best languages for system automation.

---

# What is System Automation?

System automation involves writing programs that interact directly with the operating system to perform repetitive tasks automatically.

Instead of manually performing maintenance every day, Python scripts can execute these operations automatically.

Examples include:

- Creating backups.
- Monitoring disk usage.
- Managing files and folders.
- Running system commands.
- Checking system information.
- Cleaning temporary files.
- Scheduling maintenance tasks.

Automation improves efficiency and reduces manual effort.

---

# Python Modules for System Automation

Python provides several built-in modules for system automation.

Some commonly used modules include:

- os
- shutil
- pathlib
- subprocess
- platform
- psutil
- logging

These modules allow Python programs to communicate with the operating system and perform administrative tasks.

---

# The os Module

The **os** module provides functions for interacting with the operating system.

It can be used to:

- Create directories.
- Rename files.
- Delete files.
- Navigate folders.
- Read environment variables.
- Execute basic operating system tasks.

Example:

\`\`\`python
import os

print(os.getcwd())
\`\`\`

The program displays the current working directory.

---

# Executing System Commands

Python can execute operating system commands using the **subprocess** module.

Example:

\`\`\`python
import subprocess

subprocess.run(["echo", "System Automation"])
\`\`\`

This allows Python programs to interact with system utilities and external applications.

---

# Monitoring System Information

Automation scripts often collect system information such as:

- Operating system name.
- Processor information.
- Available memory.
- Disk usage.
- CPU utilization.
- Network statistics.

This information helps administrators monitor system health.

Example:

\`\`\`python
import platform

print(platform.system())
\`\`\`

---

# File Cleanup Automation

Many systems generate temporary files that consume storage space.

Python scripts can automatically:

- Delete temporary files.
- Remove duplicate files.
- Organize folders.
- Archive old files.
- Create backups.

Regular cleanup helps maintain system performance.

---

# Real-World Example

Suppose an IT department manages hundreds of office computers.

Instead of checking each computer manually, a Python automation script can:

- Collect system information.
- Check available disk space.
- Identify missing backups.
- Generate maintenance reports.
- Notify administrators about problems.

This significantly reduces manual work while improving system reliability.

---

# IMPORTANT

System automation scripts may modify important operating system files.

Before running automation scripts:

- Test them on a sample system.
- Create backups.
- Verify file paths.
- Handle exceptions properly.
- Avoid executing unknown system commands.

Incorrect automation can affect the stability of the operating system.

---

# Best Practices

Follow these best practices while developing system automation scripts:

- Test scripts before deployment.
- Create backups before modifying files.
- Handle exceptions properly.
- Use meaningful variable names.
- Log important operations.
- Avoid unnecessary system commands.
- Write modular and readable code.

These practices help build reliable automation programs.

---

# Common Beginner Mistakes

Many beginners make mistakes such as:

- Running scripts without testing.
- Deleting important files accidentally.
- Ignoring exceptions.
- Hardcoding system paths.
- Running unsafe commands.
- Forgetting to create backups.
- Assuming every operating system behaves the same.

Avoiding these mistakes helps create safe and reliable automation scripts.

---

# Key Points

- System automation performs operating system tasks automatically.
- Python provides several modules for system automation.
- The os module interacts with the operating system.
- The subprocess module executes system commands.
- Automation improves productivity and reduces manual work.
- Always create backups before modifying important files.
- Test automation scripts carefully before using them on production systems.
`,
  examples: [
    {
      title: "Example 1: Display Current Working Directory",
      code: `import os

print(os.getcwd())`,
      output: `/home/user/projects`,
    },
    {
      title: "Example 2: Display Operating System Name",
      code: `import platform

print(platform.system())`,
      output: `Windows`,
    },
    {
      title: "Example 3: Execute a System Command",
      code: `import subprocess

subprocess.run(["echo", "System Automation"])`,
      output: `System Automation`,
    },
    {
      title: "Example 4: Display Python Version",
      code: `import platform

print(platform.python_version())`,
      output: `3.13.0`,
    },
  ],
};

export default lesson7;
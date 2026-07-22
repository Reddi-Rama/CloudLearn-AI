const lesson2 = {
  id: "lesson2",
  title: "Automating File Operations",
  previousLesson: "/lesson/python-development/module13/lesson1",
  nextLesson: "/lesson/python-development/module13/lesson3",
  content: `
# Automating File Operations

File management is one of the most common automation tasks performed using Python. Instead of manually creating folders, renaming files, copying documents, or deleting unnecessary files, Python can perform these operations automatically.

Python provides several built-in modules such as **os**, **shutil**, and **pathlib** that make working with files and folders simple and efficient.

Automating file operations saves time, reduces human errors, and improves productivity.

---

# Why Automate File Operations?

Managing hundreds or thousands of files manually can be slow and error-prone.

Automation helps by:

- Organizing files automatically.
- Creating folders.
- Renaming files.
- Copying important documents.
- Moving files to different locations.
- Deleting unnecessary files.
- Backing up important data.

These operations can be completed within seconds using Python.

---

# The os Module

The **os** module allows Python programs to interact with the operating system.

It provides functions to:

- Create folders.
- Delete folders.
- Rename files.
- Get the current working directory.
- List files inside a folder.
- Navigate between directories.

Example:

\`\`\`python
import os

print(os.getcwd())
\`\`\`

The program displays the current working directory.

---

# Creating Directories

Python can automatically create new folders.

Example:

\`\`\`python
import os

os.mkdir("Reports")
\`\`\`

If the folder does not already exist, Python creates it.

For creating multiple nested folders, you can use:

\`\`\`python
os.makedirs("Projects/Python/Reports")
\`\`\`

---

# Listing Files

The **listdir()** function displays all files and folders inside a directory.

Example:

\`\`\`python
import os

files = os.listdir()

print(files)
\`\`\`

This returns a list containing all files and folders in the current directory.

---

# Renaming Files

Files can be renamed automatically.

Example:

\`\`\`python
import os

os.rename("old.txt", "new.txt")
\`\`\`

Automation scripts commonly rename hundreds of files in just a few seconds.

---

# Moving and Copying Files

The **shutil** module provides functions for moving and copying files.

Example:

\`\`\`python
import shutil

shutil.copy("report.pdf", "Backup")
\`\`\`

Moving a file:

\`\`\`python
shutil.move("report.pdf", "Documents")
\`\`\`

These functions are useful for creating automatic backups.

---

# Deleting Files

Python can also remove unnecessary files.

Example:

\`\`\`python
import os

os.remove("old_report.txt")
\`\`\`

Folders can also be deleted when they are no longer needed.

Always verify the file before deleting it.

---

# Real-World Example

Suppose a company receives hundreds of invoices every day.

Instead of manually sorting them, a Python script can:

- Read all files from the Downloads folder.
- Identify PDF invoices.
- Create monthly folders.
- Move invoices into the correct folder.
- Create a backup copy.

This process saves hours of manual work every day.

---

# IMPORTANT

File operations can permanently modify or delete important data.

Before running automation scripts:

- Test them on sample files.
- Create backups.
- Verify file paths.
- Handle exceptions properly.
- Confirm files exist before deleting them.

A small mistake in file automation can affect many files at once.

---

# Best Practices

Follow these best practices while automating file operations:

- Use meaningful folder names.
- Check whether files exist before accessing them.
- Handle exceptions properly.
- Create backups before modifying files.
- Avoid hardcoding file paths.
- Test scripts using sample folders.
- Keep automation scripts simple and organized.

These practices improve reliability and reduce the risk of accidental data loss.

---

# Common Beginner Mistakes

Many beginners make mistakes such as:

- Deleting files without backups.
- Using incorrect file paths.
- Ignoring exception handling.
- Assuming folders already exist.
- Hardcoding absolute paths.
- Renaming important files accidentally.
- Running scripts on real data without testing.

Avoiding these mistakes helps create safe and reliable automation scripts.

---

# Key Points

- Python can automate many file management tasks.
- The os module interacts with the operating system.
- shutil is used for copying and moving files.
- Automation saves time and reduces manual effort.
- Always create backups before modifying important files.
- Test automation scripts carefully before using them on real data.
`,
  examples: [
    {
      title: "Example 1: Display Current Directory",
      code: `import os

print(os.getcwd())`,
      output: `/home/user/projects`,
    },
    {
      title: "Example 2: Create a Folder",
      code: `import os

os.mkdir("Reports")

print("Folder Created")`,
      output: `Folder Created`,
    },
    {
      title: "Example 3: List Files in Current Directory",
      code: `import os

files = os.listdir()

print(files)`,
      output: `['report.pdf', 'data.csv', 'notes.txt']`,
    },
    {
      title: "Example 4: Copy a File",
      code: `import shutil

shutil.copy("report.pdf", "Backup")

print("File Copied Successfully")`,
      output: `File Copied Successfully`,
    },
  ],
};

export default lesson2;
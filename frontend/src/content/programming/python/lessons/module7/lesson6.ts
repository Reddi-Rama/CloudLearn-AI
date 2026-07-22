const lesson6 = {
  id: "lesson6",

  title: "File Modes",

  previousLesson: "/lesson/python-development/module7/lesson5",

  nextLesson: "/lesson/python-development/module7/lesson7",

  content: `
# File Modes

In the previous lesson, you learned how to append data to files without deleting existing content. However, before performing any file operation, Python needs to know **how** the file should be opened.

This is done using **file modes**. A file mode tells Python whether you want to read a file, write new data, append information, or perform multiple operations.

Selecting the correct file mode is extremely important because using the wrong mode may overwrite valuable information or prevent the program from performing the intended operation.

## Why Do We Need File Modes?

Imagine you are working with a monthly sales report.

Sometimes you only need to read the report.

Sometimes you need to create a new report.

Sometimes you need to add today's sales without removing yesterday's data.

Each situation requires a different file mode.

IMPORTANT: File modes determine how Python interacts with a file.

## Common File Modes

Python provides several file modes.

### Read Mode ("r")

Opens an existing file for reading.

Example:

file = open("report.txt", "r")

Features:

- Reads existing data.
- Does not allow writing.
- Generates FileNotFoundError if the file does not exist.

### Write Mode ("w")

Opens a file for writing.

Example:

file = open("report.txt", "w")

Features:

- Creates a new file if necessary.
- Removes existing contents.
- Writes new information.

IMPORTANT: Write mode permanently deletes previous contents before writing new data.

### Append Mode ("a")

Opens a file for appending.

Example:

file = open("report.txt", "a")

Features:

- Keeps existing data.
- Adds new information at the end.
- Creates the file if it does not exist.

### Create Mode ("x")

Creates a completely new file.

Example:

file = open("config.txt", "x")

If the file already exists, Python raises an error.

This mode prevents accidental overwriting.

### Read and Write Mode ("r+")

Allows both reading and writing.

Example:

file = open("report.txt", "r+")

The file must already exist.

### Append and Read Mode ("a+")

Allows reading and appending.

Example:

file = open("report.txt", "a+")

New data is always written at the end.

## Choosing the Correct File Mode

Use:

- "r" for reading reports.
- "w" for creating new reports.
- "a" for log files.
- "x" for creating configuration files.
- "r+" for modifying existing files.
- "a+" for reading and adding new information.

Choosing the correct mode prevents accidental data loss.

## Real-World Applications

File modes are used in:

- Banking systems.
- Cloud monitoring.
- Server log management.
- Data Science.
- Machine Learning.
- Automation.
- Business reporting.
- Cybersecurity.

For example, monitoring software uses append mode to continuously update log files without deleting previous entries.

## Advantages of Understanding File Modes

Using file modes correctly:

- Prevents accidental overwriting.
- Protects important data.
- Improves application reliability.
- Makes file operations efficient.
- Supports different business requirements.

## Common Beginner Mistakes

Some common mistakes include:

- Using "w" instead of "a".
- Reading a file opened in write mode.
- Creating existing files using "x".
- Forgetting which mode is appropriate.

IMPORTANT: Always verify the selected file mode before opening a file.

## Best Practices

- Use the simplest file mode required.
- Avoid write mode unless overwriting is intended.
- Use append mode for logs.
- Close files after use.
- Prefer the **with** statement whenever possible.

## Key Points

- File modes control file operations.
- "r" reads files.
- "w" writes and overwrites.
- "a" appends data.
- "x" creates new files.
- "r+" allows reading and writing.
- "a+" allows reading and appending.

IMPORTANT: Choosing the correct file mode is one of the most important aspects of file handling because it protects your data and ensures correct program behavior.
`,

  examples: [
    {
      title: "Example 1: Read Mode",

      code: `file = open("report.txt", "r")
print("Reading File")
file.close()`,

      output: `Reading File`,
    },

    {
      title: "Example 2: Write Mode",

      code: `file = open("report.txt", "w")
print("Writing File")
file.close()`,

      output: `Writing File`,
    },

    {
      title: "Example 3: Append Mode",

      code: `file = open("report.txt", "a")
print("Appending Data")
file.close()`,

      output: `Appending Data`,
    },

    {
      title: "Example 4: Create Mode",

      code: `file = open("config.txt", "x")
print("File Created")
file.close()`,

      output: `File Created`,
    },
  ],
};

export default lesson6;
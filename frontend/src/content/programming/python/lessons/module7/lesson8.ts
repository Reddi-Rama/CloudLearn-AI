const lesson8 = {
  id: "lesson8",

  title: "Handling File Exceptions",

  previousLesson: "/lesson/python-development/module7/lesson7",

  nextLesson: "/lesson/python-development/module7/lesson9",

  content: `
# Handling File Exceptions

In the previous lesson, you learned how the **with** statement automatically manages files by opening and closing them safely. However, even when files are handled correctly, file operations may still fail for various reasons.

For example, a program may try to open a file that does not exist, access a protected file, or read from an invalid file path. If these situations are not handled properly, the program may terminate unexpectedly.

Python provides **Exception Handling** to deal with such situations gracefully.

## Why Do File Exceptions Occur?

File operations can fail because of several reasons, including:

- File does not exist.
- Incorrect file path.
- Permission denied.
- File is already in use.
- Disk errors.
- Corrupted files.

Instead of allowing the program to crash, Python lets us handle these errors and display meaningful messages.

IMPORTANT: Exception handling makes applications more reliable and user-friendly.

## What is Exception Handling?

Exception handling is the process of detecting runtime errors and responding to them without stopping the program.

Python uses the **try** and **except** blocks for this purpose.

Syntax:

try:
    statements

except ExceptionType:
    statements

If an exception occurs inside the **try** block, Python executes the matching **except** block.

## Handling FileNotFoundError

One of the most common file exceptions is **FileNotFoundError**.

Example:

try:
    file = open("sales_report.txt", "r")
    content = file.read()
    print(content)

except FileNotFoundError:
    print("File not found.")

Output:

File not found.

Instead of crashing, the program continues running normally.

## Handling Multiple File Operations

Exception handling can also protect programs performing multiple file operations.

For example:

- Reading reports.
- Loading configuration files.
- Processing datasets.
- Opening log files.

If one file is unavailable, the program can display an error and continue executing other tasks.

## Real-World Applications

File exception handling is used in:

- Banking applications.
- Cloud monitoring systems.
- Cybersecurity tools.
- Backup software.
- Machine Learning pipelines.
- Business analytics.
- Automation scripts.
- Enterprise applications.

These applications must continue operating even if a file is temporarily unavailable.

## Advantages of File Exception Handling

Using exception handling provides several benefits:

- Prevents application crashes.
- Displays meaningful error messages.
- Improves user experience.
- Makes software more reliable.
- Handles unexpected situations gracefully.
- Simplifies debugging.

## Common Beginner Mistakes

Some common mistakes include:

- Ignoring possible file errors.
- Forgetting to use try-except.
- Displaying confusing error messages.
- Assuming every file always exists.

IMPORTANT: Never assume that a file will always be available. Always prepare for possible errors.

## Best Practices

Follow these guidelines:

- Use try-except around file operations.
- Display meaningful error messages.
- Handle expected exceptions only.
- Keep exception handling simple.
- Continue program execution whenever possible.

## Key Points

- File operations may fail unexpectedly.
- Python uses try and except to handle errors.
- FileNotFoundError occurs when a file cannot be located.
- Exception handling prevents application crashes.
- Professional applications always handle expected file errors.

IMPORTANT: Proper exception handling improves application reliability and provides a better experience for users by preventing unexpected program failures.
`,

  examples: [
    {
      title: "Example 1: Handling FileNotFoundError",

      code: `try:
    file = open("sales_report.txt", "r")
    content = file.read()
    print(content)

except FileNotFoundError:
    print("File not found.")`,

      output: `File not found.`,
    },

    {
      title: "Example 2: Reading a Log File Safely",

      code: `try:
    file = open("system.log", "r")
    print(file.read())

except FileNotFoundError:
    print("Log file not found.")`,

      output: `Log file not found.`,
    },

    {
      title: "Example 3: Opening a Configuration File",

      code: `try:
    file = open("config.txt", "r")
    print(file.read())

except FileNotFoundError:
    print("Configuration file missing.")`,

      output: `Configuration file missing.`,
    },

    {
      title: "Example 4: Reading Student Records",

      code: `try:
    file = open("students.txt", "r")
    print(file.read())

except FileNotFoundError:
    print("Student records not found.")`,

      output: `Student records not found.`,
    },
  ],
};

export default lesson8;
const lesson2 = {
  id: "lesson2",

  title: "Opening Files",

  previousLesson: "/lesson/python-development/module7/lesson1",

  nextLesson: "/lesson/python-development/module7/lesson3",

  content: `
# Opening Files

In the previous lesson, you learned why file handling is essential for storing information permanently. Before a program can read data from a file or write data into it, the file must first be opened.

Python provides the built-in **open()** function to open files. Once a file is opened, Python returns a file object that allows the program to perform various file operations such as reading, writing, or appending data.

Opening a file is the first step in every file handling operation.

## Why Do We Need to Open Files?

Imagine a librarian retrieving a book from a library shelf. Before reading or writing information inside the book, it must first be opened.

Similarly, Python must open a file before it can perform any operation on it.

Without opening a file, Python cannot access its contents.

IMPORTANT: Every file operation begins with opening the file.

## The open() Function

Python uses the **open()** function to open files.

Syntax:

file_object = open("filename.txt", "mode")

The function accepts two important arguments:

- File name
- File mode

After opening the file, Python returns a file object that is used for further operations.

Example:

file = open("report.txt", "r")

Here:

- report.txt is the file name.
- "r" represents Read Mode.

## Opening a File for Reading

Read mode is represented by **"r"**.

Syntax:

file = open("report.txt", "r")

This mode:

- Opens an existing file.
- Allows only reading.
- Does not modify the file.

If the file does not exist, Python raises a **FileNotFoundError**.

## Opening a File for Writing

Write mode is represented by **"w"**.

Syntax:

file = open("report.txt", "w")

Write mode:

- Creates a new file if it does not exist.
- Overwrites the existing contents if the file already exists.
- Allows writing new information.

IMPORTANT: Using "w" mode removes all existing data from the file before writing new content.

## Opening a File for Appending

Append mode is represented by **"a"**.

Syntax:

file = open("report.txt", "a")

Append mode:

- Opens the file for writing.
- Preserves existing data.
- Adds new information at the end of the file.

This mode is commonly used for log files and reports.

## Closing Files

After completing file operations, the file should be closed.

Syntax:

file.close()

Closing a file:

- Releases system resources.
- Saves pending changes.
- Prevents data corruption.
- Allows other programs to access the file safely.

Example:

file = open("server.log", "r")

print("File Opened Successfully")

file.close()

Output:

File Opened Successfully

## Choosing the Correct File Mode

Different situations require different file modes.

Use:

- "r" to read existing files.
- "w" to create or overwrite files.
- "a" to add new information without deleting existing data.

Choosing the correct mode prevents accidental loss of important information.

## Real-World Applications

Opening files is used in almost every software application.

Examples include:

- Reading customer records.
- Generating monthly reports.
- Writing application logs.
- Saving configuration settings.
- Processing datasets.
- Creating backup files.
- Recording transaction history.
- Loading machine learning datasets.

Every file operation begins by opening the appropriate file.

## Advantages of Using Proper File Modes

Using the correct file mode provides several benefits:

- Prevents accidental data loss.
- Makes applications more reliable.
- Supports different types of file operations.
- Improves program organization.
- Enables efficient file management.

Understanding file modes is an essential skill for professional Python developers.

## Common Beginner Mistakes

Some common mistakes include:

- Forgetting to close files.
- Using "w" mode when data should be preserved.
- Attempting to read a file that does not exist.
- Opening files with the wrong mode.
- Keeping files open longer than necessary.

IMPORTANT: Always verify that the selected file mode matches the intended operation.

## Best Practices

Follow these guidelines while opening files:

- Use the correct file mode.
- Close files after completing operations.
- Use meaningful file names.
- Avoid leaving files open unnecessarily.
- Prefer the **with** statement for automatic file closing (covered later in this module).

These practices improve program reliability and reduce resource usage.

## Key Points

- Python uses the open() function to access files.
- Every file must be opened before reading or writing.
- "r" opens files for reading.
- "w" opens files for writing and overwrites existing data.
- "a" opens files for appending new information.
- Files should always be closed after use.

IMPORTANT: Opening files correctly is the foundation of all file handling operations in Python and is widely used in automation, analytics, cloud computing, and enterprise software development.
`,

  examples: [
    {
      title: "Example 1: Opening a File for Reading",

      code: `file = open("report.txt", "r")

print("File Opened Successfully")

file.close()`,

      output: `File Opened Successfully`,
    },

    {
      title: "Example 2: Opening a File for Writing",

      code: `file = open("report.txt", "w")

print("Ready to Write")

file.close()`,

      output: `Ready to Write`,
    },

    {
      title: "Example 3: Opening a File for Appending",

      code: `file = open("application.log", "a")

print("Ready to Append")

file.close()`,

      output: `Ready to Append`,
    },

    {
      title: "Example 4: Choosing Different File Modes",

      code: `print("Read Mode  : r")
print("Write Mode : w")
print("Append Mode: a")`,

      output: `Read Mode  : r
Write Mode : w
Append Mode: a`,
    },
  ],
};

export default lesson2;
const lesson1 = {
  id: "lesson1",

  title: "Introduction to File Handling",

  previousLesson: "/lesson/python-development/module7/about",

  nextLesson: "/lesson/python-development/module7/lesson2",

  content: `
# Introduction to File Handling

In the previous module, you learned about Python data structures and how they help organize data while a program is running. However, data stored in variables exists only in memory. Once the program closes, all that information is lost.

Modern applications need a way to store information permanently so that it can be accessed even after the application is restarted. Python provides **File Handling** to solve this problem.

File handling enables programs to create, read, write, update, and manage files stored on a computer. It is one of the most important concepts in Python because almost every real-world application works with files.

## Why Do We Need File Handling?

Imagine you are building a customer management system.

Example:

customer_name = "Alex"

The customer name is stored only in memory. If the application is closed, this information disappears.

Instead, we can save customer information inside a file so it remains available the next time the application runs.

File handling allows applications to store important information permanently.

IMPORTANT: Variables provide temporary storage, while files provide permanent storage.

## What is File Handling?

File handling is the process of creating, opening, reading, writing, updating, and deleting files using Python.

Files are stored on disk, allowing information to remain available even after the program finishes execution.

Using file handling, developers can:

- Store user information.
- Generate reports.
- Save application logs.
- Process datasets.
- Maintain configuration files.
- Create backups.
- Save transaction history.
- Exchange data between applications.

## Types of Files

Python can work with many different types of files.

Some commonly used file types include:

- Text Files (.txt)
- CSV Files (.csv)
- JSON Files (.json)
- Log Files (.log)
- Configuration Files (.cfg)

Each file type is designed for a specific purpose.

For example:

- Text files store plain text.
- CSV files store tabular data.
- JSON files store structured data.
- Log files record application events.
- Configuration files store application settings.

## How File Handling Works

File handling usually follows these steps:

1. Open a file.
2. Perform an operation such as reading or writing.
3. Close the file.

Python also provides the **with** statement, which automatically closes files after use. You will learn about this later in the module.

IMPORTANT: Always ensure files are properly closed after completing file operations.

## Real-World Applications

File handling is used in almost every software application.

Examples include:

- Banking systems storing transaction records.
- E-commerce websites generating invoices.
- Machine Learning projects loading datasets.
- Cybersecurity tools analyzing log files.
- Cloud platforms maintaining server logs.
- Automation scripts creating reports.
- Web applications loading configuration settings.
- Business analytics systems processing CSV files.

Without file handling, these applications would lose all their information whenever they stopped running.

## Advantages of File Handling

Using file handling provides many benefits:

- Stores data permanently.
- Supports large amounts of information.
- Enables report generation.
- Simplifies automation.
- Allows data sharing between applications.
- Improves application reliability.
- Supports backup and recovery.

These advantages make file handling an essential part of professional software development.

## Common Beginner Mistakes

Some common mistakes include:

- Assuming variables permanently store data.
- Forgetting to close files.
- Using the wrong file mode.
- Ignoring file errors.
- Overwriting important files accidentally.

Learning proper file handling techniques helps prevent these problems.

IMPORTANT: Always choose the correct file operation and handle possible errors gracefully.

## Best Practices

Follow these guidelines while working with files:

- Store important information in files instead of variables.
- Organize files using meaningful names.
- Choose the correct file format.
- Close files after use.
- Use the **with** statement whenever possible.
- Handle exceptions to avoid program crashes.

These practices improve program reliability and maintainability.

## Key Points

- File handling stores information permanently.
- Files remain available after a program closes.
- Python supports multiple file formats.
- File handling is used in almost every software application.
- Proper file management improves reliability and prevents data loss.

IMPORTANT: File handling is one of the foundational skills for Data Science, Machine Learning, Automation, Cybersecurity, Cloud Computing, and Enterprise Application Development.
`,

  examples: [
    {
      title: "Example 1: Temporary Variable Storage",

      code: `customer_name = "Alex"

print(customer_name)`,

      output: `Alex`,
    },

    {
      title: "Example 2: Types of Files",

      code: `text_file = "report.txt"
csv_file = "employees.csv"
json_file = "config.json"

print(text_file)
print(csv_file)
print(json_file)`,

      output: `report.txt
employees.csv
config.json`,
    },

    {
      title: "Example 3: Simple File Handling Workflow",

      code: `print("1. Open File")
print("2. Read or Write Data")
print("3. Close File")`,

      output: `1. Open File
2. Read or Write Data
3. Close File`,
    },

    {
      title: "Example 4: Real-World Log Entry",

      code: `log_entry = "2026-07-12 10:20:15 Server Started"

print(log_entry)`,

      output: `2026-07-12 10:20:15 Server Started`,
    },
  ],
};

export default lesson1;
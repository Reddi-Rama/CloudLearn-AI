const lesson4 = {
  id: "lesson4",

  title: "Writing Files",

  previousLesson: "/lesson/python-development/module7/lesson3",

  nextLesson: "/lesson/python-development/module7/lesson5",

  content: `
# Writing Files

In the previous lesson, you learned how to read information from files using methods such as **read()**, **readline()**, and **readlines()**. Reading files allows a program to retrieve existing information. However, many applications also need to create new files and store information for future use.

Python provides the **write()** method to write data into files. Writing files enables applications to save reports, generate logs, export data, and permanently store important information.

Writing files is one of the most common operations performed in automation, business applications, and data processing systems.

## Why Do We Need to Write Files?

Imagine a company generating its monthly sales report.

The application calculates the revenue and profit successfully. If the report is displayed only on the screen, the information disappears after the program closes.

Instead, the application should save the report into a file so that managers can review it later.

Writing files allows programs to permanently store important information.

IMPORTANT: Writing data to files ensures that information remains available even after the program stops running.

## Writing Data to Files

Python uses the **write()** method to store data inside a file.

Before writing, the file must be opened in an appropriate mode such as **"w"**.

Syntax:

file = open("report.txt", "w")

file.write("Monthly Sales Report")

file.close()

If the file does not exist, Python creates it automatically.

If the file already exists, its previous contents are removed before writing new data.

## Writing Multiple Lines

A file can contain multiple lines of information.

The newline character **\\n** is used to move the cursor to the next line.

Example:

file = open("report.txt", "w")

file.write("Monthly Sales Report\\n")
file.write("Revenue: 2500000\\n")
file.write("Profit: 450000\\n")

file.close()

Each call to **write()** adds the specified text into the file.

## Overwriting Existing Files

The **"w"** mode always starts with an empty file.

Suppose **report.txt** already contains previous data.

Opening the file using:

file = open("report.txt", "w")

removes all existing content before writing new information.

IMPORTANT: Use **"w"** mode carefully because it permanently overwrites existing data.

## Writing Different Types of Information

The **write()** method stores text.

If you want to write numbers or other data types, convert them into strings.

Example:

revenue = 2500000

file = open("sales.txt", "w")

file.write("Revenue: " + str(revenue))

file.close()

The **str()** function converts numeric values into strings before writing.

## Real-World Applications

Writing files is widely used in:

- Report generation.
- Invoice creation.
- Log management.
- Data export.
- Configuration generation.
- Backup systems.
- Automation scripts.
- Machine Learning preprocessing.

For example, a cloud monitoring application may generate a daily health report containing CPU usage, memory usage, and network statistics.

## Advantages of Writing Files

Writing files provides several benefits:

- Stores information permanently.
- Automatically creates new files.
- Generates reports efficiently.
- Supports automation tasks.
- Enables data sharing between applications.
- Preserves important business information.

These advantages make writing files an essential part of software development.

## Common Beginner Mistakes

Some common mistakes include:

- Forgetting to close the file.
- Using **"w"** mode when existing data should be preserved.
- Forgetting newline characters.
- Attempting to write unsupported data types directly.
- Assuming files are saved automatically without closing them.

IMPORTANT: Always verify the selected file mode before writing data to avoid accidental loss of important information.

## Best Practices

Follow these guidelines while writing files:

- Close files after writing.
- Use meaningful file names.
- Add newline characters where appropriate.
- Convert non-string values before writing.
- Use append mode instead of write mode when previous data should be preserved.
- Prefer the **with** statement for automatic file management.

These practices improve program reliability and maintainability.

## Key Points

- The **write()** method stores information inside files.
- Files must be opened before writing.
- The **"w"** mode creates new files and overwrites existing ones.
- The newline character **\\n** improves readability.
- Convert numbers into strings before writing.
- Writing files is widely used in automation, analytics, reporting, and enterprise applications.

IMPORTANT: Writing files allows applications to permanently store valuable information, making it one of the most important skills in Python programming.
`,

  examples: [
    {
      title: "Example 1: Writing a Single Line",

      code: `file = open("report.txt", "w")

file.write("Monthly Sales Report")

file.close()`,

      output: `The file "report.txt" is created (or overwritten) and contains:
Monthly Sales Report`,
    },

    {
      title: "Example 2: Writing Multiple Lines",

      code: `file = open("report.txt", "w")

file.write("Monthly Sales Report\\n")
file.write("Revenue: 2500000\\n")
file.write("Profit: 450000\\n")

file.close()`,

      output: `The file contains:
Monthly Sales Report
Revenue: 2500000
Profit: 450000`,
    },

    {
      title: "Example 3: Writing Numeric Data",

      code: `revenue = 2500000

file = open("sales.txt", "w")

file.write("Revenue: " + str(revenue))

file.close()`,

      output: `The file "sales.txt" contains:
Revenue: 2500000`,
    },

    {
      title: "Example 4: Generating a System Status Report",

      code: `file = open("status_report.txt", "w")

file.write("System Status: Healthy\\n")
file.write("CPU Usage: 65%\\n")
file.write("Memory Usage: 72%\\n")

file.close()`,

      output: `The file "status_report.txt" contains:
System Status: Healthy
CPU Usage: 65%
Memory Usage: 72%`,
    },
  ],
};

export default lesson4;
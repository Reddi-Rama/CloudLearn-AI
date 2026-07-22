const lesson3 = {
  id: "lesson3",

  title: "Reading Files",

  previousLesson: "/lesson/python-development/module7/lesson2",

  nextLesson: "/lesson/python-development/module7/lesson4",

  content: `
# Reading Files

In the previous lesson, you learned how to open files using the **open()** function. After opening a file, the next step is to read the information stored inside it.

Reading files allows Python programs to retrieve previously stored information and use it for processing, analysis, reporting, and decision-making.

Python provides several built-in methods for reading files, each designed for different situations.

## Why Do We Need to Read Files?

Imagine an online shopping application that stores customer orders in a file. Whenever an administrator wants to view the orders, the application must read the file.

Similarly, many real-world applications need to retrieve information from files before performing operations.

Examples include:

- Reading student records.
- Loading application settings.
- Processing server logs.
- Reading machine learning datasets.
- Displaying saved reports.
- Loading configuration files.

Without reading files, applications cannot access previously stored information.

IMPORTANT: Reading files allows applications to retrieve permanently stored data whenever required.

## Reading an Entire File

Python provides the **read()** method to read the complete contents of a file.

Syntax:

file = open("report.txt", "r")

content = file.read()

print(content)

file.close()

The **read()** method reads every character from the file and stores it as a single string.

This method is suitable for:

- Small text files.
- Configuration files.
- Reports.
- Notes.

However, it is not recommended for extremely large files because it loads the entire file into memory.

## Reading One Line at a Time

Sometimes applications only need one line from a file.

Python provides the **readline()** method.

Syntax:

file = open("server.log", "r")

line = file.readline()

print(line)

file.close()

The **readline()** method reads only the next available line.

This approach is useful for:

- Processing log files.
- Reading configuration settings.
- Sequential data processing.

## Reading All Lines

Python also provides the **readlines()** method.

Syntax:

file = open("tasks.txt", "r")

lines = file.readlines()

print(lines)

file.close()

The **readlines()** method reads every line and stores them inside a list.

Example Output:

['Task 1\\n', 'Task 2\\n', 'Task 3\\n']

Each element of the list represents one line from the file.

This method is useful when individual lines need separate processing.

## Choosing the Right Reading Method

Python provides different reading methods because different situations require different approaches.

Use:

- **read()** for small files.
- **readline()** when processing one line at a time.
- **readlines()** when each line should be handled separately.

Choosing the correct method improves program performance.

IMPORTANT: Avoid using **read()** for very large files because it loads the entire file into memory.

## Real-World Applications

Reading files is one of the most common operations in software development.

Examples include:

- Reading server logs.
- Processing customer records.
- Loading machine learning datasets.
- Reading CSV reports.
- Displaying saved invoices.
- Loading configuration files.
- Reading transaction history.
- Processing cybersecurity logs.

For example, a cybersecurity application may continuously read log files to detect suspicious login attempts.

## Advantages of Reading Files

Reading files provides many benefits:

- Retrieves permanently stored information.
- Enables report generation.
- Supports data analysis.
- Makes automation possible.
- Allows applications to process historical data.
- Simplifies large-scale data processing.

These advantages make reading files an essential programming skill.

## Common Beginner Mistakes

Some common mistakes include:

- Forgetting to close the file.
- Using **read()** for extremely large files.
- Attempting to read files that do not exist.
- Opening files using the wrong mode.
- Assuming all files contain valid data.

Learning proper reading techniques helps build reliable applications.

IMPORTANT: Always ensure the file exists before attempting to read its contents.

## Best Practices

Follow these guidelines while reading files:

- Use **read()** for small files.
- Use **readline()** for sequential processing.
- Use **readlines()** when working with individual lines.
- Close files after reading.
- Handle possible file exceptions.
- Prefer the **with** statement for automatic file management.

These practices improve efficiency and reliability.

## Key Points

- Python provides multiple methods for reading files.
- **read()** reads the complete file.
- **readline()** reads one line at a time.
- **readlines()** returns all lines as a list.
- Different reading methods are suitable for different situations.
- Reading files is widely used in automation, analytics, machine learning, and enterprise applications.

IMPORTANT: Reading files efficiently is an essential skill for building scalable Python applications that work with real-world data.
`,

  examples: [
    {
      title: "Example 1: Reading an Entire File",

      code: `file = open("report.txt", "r")

content = file.read()

print(content)

file.close()`,

      output: `Monthly Sales Report
Revenue: 2500000
Profit: 450000`,
    },

    {
      title: "Example 2: Reading One Line",

      code: `file = open("server.log", "r")

line = file.readline()

print(line)

file.close()`,

      output: `2026-07-12 10:20:15 Server Started`,
    },

    {
      title: "Example 3: Reading All Lines",

      code: `file = open("tasks.txt", "r")

lines = file.readlines()

print(lines)

file.close()`,

      output: `['Task 1\\n', 'Task 2\\n', 'Task 3\\n']`,
    },

    {
      title: "Example 4: Reading a Security Log",

      code: `file = open("security.log", "r")

logs = file.read()

print(logs)

file.close()`,

      output: `User Login Successful
Password Changed
Backup Completed`,
    },
  ],
};

export default lesson3;
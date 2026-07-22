const lesson9 = {
  id: "lesson9",

  title: "Working with CSV Files",

  previousLesson: "/lesson/python-development/module7/lesson8",

  nextLesson: "/lesson/python-development/module7/lesson10",

  content: `
# Working with CSV Files

In the previous lesson, you learned how to safely handle file-related errors using exception handling. One of the most common file formats used in software development, data science, and business applications is the **CSV file**.

CSV stands for **Comma Separated Values**.

CSV files store information in rows and columns, making them easy to read, edit, and exchange between different applications.

Python provides the built-in **csv** module to work efficiently with CSV files.

## Why Do We Need CSV Files?

Many organizations store large amounts of structured data.

Examples include:

- Employee records.
- Student information.
- Sales reports.
- Customer details.
- Financial transactions.
- Product inventories.

CSV files provide a simple way to organize this information.

IMPORTANT: CSV is one of the most widely used data formats in Data Science and Machine Learning.

## What is a CSV File?

A CSV file stores tabular data where each value is separated by a comma.

Example:

ID,Name,Department

101,Alex,AI

102,Sara,Cybersecurity

Each line represents one record.

## Reading CSV Files

Python uses the **csv.reader()** function.

Example:

import csv

with open("employees.csv", "r") as file:

    reader = csv.reader(file)

    for row in reader:

        print(row)

Each row is returned as a list.

## Writing CSV Files

Python uses **csv.writer()**.

Example:

import csv

with open("employees.csv", "w", newline="") as file:

    writer = csv.writer(file)

    writer.writerow(["ID", "Name", "Department"])

    writer.writerow([101, "Alex", "AI"])

This creates a CSV file containing employee information.

## Why are CSV Files Important?

CSV files are widely used because they:

- Are simple to understand.
- Can be opened in spreadsheet software.
- Are supported by almost every programming language.
- Are easy to exchange between applications.

## Real-World Applications

CSV files are used in:

- Data Science.
- Machine Learning.
- Business Analytics.
- Banking.
- Sales reporting.
- Inventory management.
- Automation.
- Research.

Many public datasets are distributed in CSV format.

## Advantages of CSV Files

Using CSV files provides several benefits:

- Easy to create.
- Easy to edit.
- Lightweight.
- Portable.
- Compatible with many applications.
- Excellent for structured data.

## Common Beginner Mistakes

Some common mistakes include:

- Forgetting to import the csv module.
- Incorrectly formatting rows.
- Forgetting newline="" while writing.
- Assuming every CSV file has the same structure.

IMPORTANT: Always verify the format of a CSV file before processing it.

## Best Practices

Follow these guidelines:

- Always import the csv module.
- Use the with statement.
- Keep column names meaningful.
- Validate data before processing.
- Handle exceptions while reading files.

## Key Points

- CSV stands for Comma Separated Values.
- CSV stores tabular data.
- csv.reader() reads CSV files.
- csv.writer() writes CSV files.
- CSV files are widely used in Data Science, Machine Learning, and Business Analytics.

IMPORTANT: Learning to work with CSV files is an essential skill for developers, data analysts, and machine learning engineers because many real-world datasets are stored in CSV format.
`,

  examples: [
    {
      title: "Example 1: Reading a CSV File",

      code: `import csv

with open("employees.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)`,

      output: `['ID', 'Name', 'Department']
['101', 'Alex', 'AI']`,
    },

    {
      title: "Example 2: Writing a CSV File",

      code: `import csv

with open("employees.csv", "w", newline="") as file:
    writer = csv.writer(file)

    writer.writerow(["ID", "Name", "Department"])
    writer.writerow([101, "Alex", "AI"])`,

      output: `employees.csv is created with employee records.`,
    },

    {
      title: "Example 3: Writing Student Data",

      code: `import csv

with open("students.csv", "w", newline="") as file:
    writer = csv.writer(file)

    writer.writerow(["Roll No", "Name", "Course"])
    writer.writerow([1, "John", "Python"])`,

      output: `students.csv is created successfully.`,
    },

    {
      title: "Example 4: Reading Sales Records",

      code: `import csv

with open("sales.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)`,

      output: `Displays every row from sales.csv.`,
    },
  ],
};

export default lesson9;
const lesson3 = {
  id: "lesson3",
  title: "Working with Excel Files",
  previousLesson: "/lesson/python-development/module13/lesson2",
  nextLesson: "/lesson/python-development/module13/lesson4",
  content: `
# Working with Excel Files

Microsoft Excel is one of the most widely used applications for storing, organizing, and analyzing data. Businesses, schools, hospitals, banks, and many other organizations use Excel spreadsheets to manage information.

Python allows developers to automate Excel-related tasks such as reading data, writing data, updating worksheets, creating reports, and processing thousands of records automatically.

One of the most popular libraries for working with Excel files is **openpyxl**.

---

# What is openpyxl?

**openpyxl** is a Python library used to read, create, modify, and save Excel files in the **.xlsx** format.

Using openpyxl, you can:

- Create new Excel workbooks.
- Open existing workbooks.
- Read worksheet data.
- Write new data.
- Modify existing cells.
- Format worksheets.
- Save changes automatically.

It is one of the most commonly used libraries for Excel automation.

---

# Installing openpyxl

Before using the library, install it using pip.

Example:

\`\`\`python
pip install openpyxl
\`\`\`

Once installed, it can be imported into Python programs.

Example:

\`\`\`python
import openpyxl
\`\`\`

---

# Creating a Workbook

A workbook represents an Excel file.

Example:

\`\`\`python
from openpyxl import Workbook

workbook = Workbook()

workbook.save("students.xlsx")
\`\`\`

The program creates a new Excel file named **students.xlsx**.

---

# Opening an Existing Workbook

Existing Excel files can be opened using **load_workbook()**.

Example:

\`\`\`python
from openpyxl import load_workbook

workbook = load_workbook("students.xlsx")
\`\`\`

The workbook is now ready for reading or editing.

---

# Accessing Worksheets

Every workbook contains one or more worksheets.

Example:

\`\`\`python
sheet = workbook.active
\`\`\`

The **active** property returns the currently active worksheet.

You can also access worksheets by name.

Example:

\`\`\`python
sheet = workbook["Sheet"]
\`\`\`

---

# Reading Cell Values

Individual cells can be accessed using their cell references.

Example:

\`\`\`python
print(sheet["A1"].value)
\`\`\`

You can also use row and column numbers.

Example:

\`\`\`python
print(sheet.cell(row=1, column=1).value)
\`\`\`

This retrieves the value stored in the specified cell.

---

# Writing Data to Cells

Python can write new values into Excel worksheets.

Example:

\`\`\`python
sheet["A1"] = "Student Name"
sheet["B1"] = "Marks"
\`\`\`

The worksheet is updated in memory until it is saved.

---

# Saving Changes

After making changes, the workbook should be saved.

Example:

\`\`\`python
workbook.save("students.xlsx")
\`\`\`

Without saving, all modifications will be lost.

---

# Real-World Example

Suppose a school stores student marks in an Excel workbook.

A Python automation script can:

- Read student names.
- Calculate total marks.
- Compute averages.
- Identify toppers.
- Generate report cards.
- Save updated results automatically.

Instead of manually processing hundreds of records, Python completes the work within seconds.

---

# IMPORTANT

When working with Excel files:

- Always create a backup before modifying important files.
- Ensure the workbook exists before opening it.
- Save changes after updating data.
- Close Excel files before running automation scripts.
- Handle exceptions properly.

Following these precautions helps prevent data loss.

---

# Best Practices

Follow these best practices while automating Excel tasks:

- Use meaningful worksheet names.
- Validate data before writing it.
- Save workbooks regularly.
- Handle file-related exceptions.
- Avoid overwriting important files.
- Keep spreadsheet layouts organized.
- Test scripts using sample workbooks.

These practices improve reliability and maintainability.

---

# Common Beginner Mistakes

Many beginners make mistakes such as:

- Forgetting to save the workbook.
- Opening incorrect file paths.
- Writing data to the wrong cells.
- Assuming worksheets always exist.
- Modifying original files without backups.
- Ignoring exceptions while loading files.

Avoiding these mistakes helps create reliable Excel automation scripts.

---

# Key Points

- openpyxl is a popular library for Excel automation.
- A workbook represents an Excel file.
- Worksheets store data inside workbooks.
- Python can read and write Excel cells.
- Changes must be saved to the workbook.
- Excel automation saves time and reduces manual work.
- Always create backups before modifying important spreadsheets.
`,
  examples: [
    {
      title: "Example 1: Creating a Workbook",
      code: `from openpyxl import Workbook

workbook = Workbook()

workbook.save("students.xlsx")

print("Workbook Created")`,
      output: `Workbook Created`,
    },
    {
      title: "Example 2: Writing Data to Cells",
      code: `from openpyxl import Workbook

workbook = Workbook()
sheet = workbook.active

sheet["A1"] = "Name"
sheet["B1"] = "Marks"

print(sheet["A1"].value)
print(sheet["B1"].value)`,
      output: `Name
Marks`,
    },
    {
      title: "Example 3: Reading a Cell Value",
      code: `from openpyxl import Workbook

workbook = Workbook()
sheet = workbook.active

sheet["A1"] = "Python"

print(sheet["A1"].value)`,
      output: `Python`,
    },
    {
      title: "Example 4: Saving a Workbook",
      code: `from openpyxl import Workbook

workbook = Workbook()

workbook.save("report.xlsx")

print("Workbook Saved Successfully")`,
      output: `Workbook Saved Successfully`,
    },
  ],
};

export default lesson3;
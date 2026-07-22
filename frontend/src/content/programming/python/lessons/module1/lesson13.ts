const lesson13 = {
  id: "lesson13",

  title: "Escape Characters",

  previousLesson:
    "/lesson/python-development/module1/lesson12",

  nextLesson:
    "/lesson/python-development/module2/about",

  content: `
# What are Escape Characters?

Escape characters are special characters used to perform formatting inside strings.

They begin with a backslash (\\) followed by a character that represents a specific action.

Escape characters help create cleaner, more readable, and professional output.

# New Line Character (\\n)

The \\n character moves the output to the next line.

It is commonly used in reports, invoices, logs, and formatted messages.

# Tab Character (\\t)

The \\t character inserts a horizontal tab space between values.

It is useful for displaying structured information.

# Single Quote (\\')

The single quote escape character is used when a string contains a single quotation mark.

# Double Quote (\\")

The double quote escape character is used when a string contains double quotation marks.

# Backslash (\\\\)

The backslash escape character is used to display an actual backslash.

This is commonly used while working with Windows file paths.

# Common Escape Characters

• \\n → New Line

• \\t → Tab Space

• \\' → Single Quote

• \\" → Double Quote

• \\\\ → Backslash


# Best Practices

• Use \\n to improve output readability.

• Use \\t when displaying aligned information.

• Escape quotation marks only when required.

• Use \\\\ while working with file paths.


# Real World Usage

Escape characters are commonly used in:

- Generating reports
- Creating invoices
- Formatting logs
- Displaying messages
- Handling file paths


# Lesson Summary

Escape characters make program output cleaner, properly formatted, and easier for users to understand.

They are an important part of writing professional Python programs.


# Module Completion

Congratulations!

You have successfully completed Module 1: Python Fundamentals.

You are now ready to continue learning advanced Python concepts in Module 2.
`,

  examples: [
    {
      title: "New Line Example",

      code: `print("Server Started\\nDatabase Connected\\nApplication Ready")`,

      output: `Server Started
Database Connected
Application Ready`,
    },


    {
      title: "Tab Example",

      code: `print("Employee ID\\tEmployee Name\\tDepartment")
print("101\\t\\tAlex\\t\\tCybersecurity")`,

      output: `Employee ID    Employee Name    Department
101            Alex             Cybersecurity`,
    },


    {
      title: "Single Quote Example",

      code: `print('Today\\'s sales report is ready.')`,

      output: `Today's sales report is ready.`,
    },


    {
      title: "Double Quote Example",

      code: `print("The system displayed \\"Access Granted\\".")`,

      output: `The system displayed "Access Granted".`,
    },


    {
      title: "Backslash Example",

      code: `print("C:\\\\Users\\\\Documents\\\\Reports")`,

      output: `C:\\Users\\Documents\\Reports`,
    },


    {
      title: "Real World Invoice Example",

      code: `print("Invoice Summary")
print("----------------")
print("Product:\\tLaptop")
print("Quantity:\\t2")
print("Status:\\t\\t\\"Paid\\"")`,

      output: `Invoice Summary
----------------
Product:    Laptop
Quantity:   2
Status:     "Paid"`,
    },
  ],
};

export default lesson13;
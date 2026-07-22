const lesson7 = {
  id: "lesson7",

  title: "Using the with Statement",

  previousLesson: "/lesson/python-development/module7/lesson6",

  nextLesson: "/lesson/python-development/module7/lesson8",

  content: `
# Using the with Statement

In the previous lesson, you learned about different file modes. Whenever a file is opened, it should also be closed after completing the required operations.

Forgetting to close files is one of the most common mistakes made by beginners. Unclosed files consume system resources and may even prevent other programs from accessing them.

Python solves this problem using the **with** statement.

The **with** statement automatically closes the file after all operations inside the block are completed, even if an unexpected error occurs.

## Why Do We Need the with Statement?

Consider the following program:

file = open("report.txt", "r")

content = file.read()

print(content)

If **file.close()** is forgotten, the file remains open.

This may lead to:

- Memory leaks.
- Locked files.
- Resource wastage.
- Unreliable programs.

IMPORTANT: The **with** statement automatically closes files, making programs safer and more reliable.

## Syntax

with open("report.txt", "r") as file:

    content = file.read()

    print(content)

After the block finishes executing, Python automatically closes the file.

No separate call to **close()** is required.

## How the with Statement Works

Python performs these steps automatically:

1. Opens the file.
2. Performs the required operations.
3. Closes the file automatically.

This simplifies file handling and reduces programming mistakes.

## Advantages of Using with

Using the **with** statement provides several benefits:

- Automatically closes files.
- Prevents resource leaks.
- Produces cleaner code.
- Reduces programming errors.
- Improves readability.
- Makes programs more reliable.

## Real-World Applications

The **with** statement is used in:

- Data Science.
- Machine Learning.
- Cloud Computing.
- Automation.
- Web Development.
- Log processing.
- Report generation.
- Configuration management.

Professional Python developers almost always use **with** for file operations.

## Common Beginner Mistakes

Some common mistakes include:

- Forgetting to close files.
- Using open() without close().
- Mixing indentation inside with blocks.
- Assuming files close automatically without using with.

IMPORTANT: Even if an error occurs, the **with** statement still closes the file automatically.

## Best Practices

- Prefer the **with** statement over manual close().
- Keep the with block properly indented.
- Perform all file operations inside the block.
- Handle exceptions whenever necessary.

These practices improve program reliability and readability.

## Key Points

- The **with** statement automatically manages files.
- No need to call close().
- Files are closed automatically.
- Code becomes cleaner and safer.
- Professional Python applications commonly use **with**.

IMPORTANT: The **with** statement is considered the recommended way to work with files in modern Python development.
`,

  examples: [
    {
      title: "Example 1: Reading Using with",

      code: `with open("report.txt", "r") as file:
    content = file.read()

print(content)`,

      output: `Displays the contents of report.txt`,
    },

    {
      title: "Example 2: Writing Using with",

      code: `with open("report.txt", "w") as file:
    file.write("Monthly Report")`,

      output: `The file report.txt contains:
Monthly Report`,
    },

    {
      title: "Example 3: Appending Using with",

      code: `with open("application.log", "a") as file:
    file.write("User Login Successful\\n")`,

      output: `The new log entry is appended successfully.`,
    },

    {
      title: "Example 4: Reading a Configuration File",

      code: `with open("config.txt", "r") as file:
    settings = file.read()

print(settings)`,

      output: `Displays the contents of config.txt`,
    },
  ],
};

export default lesson7;
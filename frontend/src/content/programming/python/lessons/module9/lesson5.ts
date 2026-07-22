const lesson5 = {
  id: "lesson5",

  title: "finally Block",

  previousLesson: "/lesson/python-development/module9/lesson4",

  nextLesson: "/lesson/python-development/module9/lesson6",

  content: `# finally Block

In the previous lesson, you learned how the **else** block executes only when no exception occurs. However, some operations must always be performed regardless of whether an error occurs or not.

For example:

- Closing files.
- Closing database connections.
- Releasing network resources.
- Cleaning temporary files.
- Disconnecting from servers.

Python provides the **finally** block for such situations.

The **finally** block always executes, whether an exception occurs or not. This makes it the ideal place for cleanup operations.

## Why Do We Need the finally Block?

Imagine a program that opens a file for reading.

If an exception occurs before the file is closed, the file remains open, wasting system resources.

Similarly, if a database connection is not closed properly, the application may eventually run out of available connections.

The finally block guarantees that cleanup code always executes.

IMPORTANT: The finally block executes regardless of whether an exception occurs.

## What is the finally Block?

The finally block is an optional part of Python's exception handling mechanism.

It contains cleanup code that must always run after the try and except blocks.

Syntax:

try:
    risky_code

except ExceptionType:
    error_handling

finally:
    cleanup_code

Whether the program succeeds or fails, Python executes the finally block before continuing.

## How finally Works

Python executes the statements in the following order:

1. Execute the try block.
2. If an exception occurs, execute the matching except block.
3. Execute the finally block.
4. Continue with the remaining program.

Even if no exception occurs, the finally block still executes.

## Example Using finally

Example:

try:
    file = open("report.txt", "r")
    content = file.read()

except FileNotFoundError:
    print("File not found.")

finally:
    print("Closing resources.")

Output:

File not found.
Closing resources.

Although the file could not be opened, Python still executed the finally block.

## finally Without Exceptions

The finally block also executes when no exception occurs.

Example:

try:
    print("Processing completed successfully.")

finally:
    print("Cleanup completed.")

Output:

Processing completed successfully.
Cleanup completed.

This demonstrates that finally always executes.

## Real-World Applications

The finally block is commonly used in:

- Closing files.
- Closing database connections.
- Disconnecting from cloud services.
- Closing network sockets.
- Releasing memory resources.
- Cleaning temporary files.
- Ending user sessions.
- Automation scripts.

For example, banking systems always close database connections after completing transactions, regardless of whether the transaction succeeds or fails.

## Advantages of the finally Block

Using the finally block provides several benefits:

- Prevents resource leaks.
- Ensures proper cleanup.
- Improves application stability.
- Reduces memory and resource consumption.
- Makes applications more reliable.

## Common Beginner Mistakes

Some common mistakes include:

- Forgetting to close files.
- Placing cleanup code inside the try block.
- Assuming finally executes only when an exception occurs.
- Writing business logic inside finally.

IMPORTANT: Use the finally block only for cleanup operations, not for normal business processing.

## Best Practices

Follow these guidelines:

- Always release important resources.
- Close files after use.
- Close database connections properly.
- Keep cleanup code simple.
- Avoid writing unnecessary logic inside finally.

## Key Points

- The finally block always executes.
- It runs whether an exception occurs or not.
- It is primarily used for cleanup operations.
- It helps prevent resource leaks.
- Professional applications rely on finally to manage system resources safely.

IMPORTANT: The finally block plays a critical role in building reliable, stable, and resource-efficient Python applications by ensuring that important cleanup tasks are never skipped.`,

  examples: [
    {
      title: "Example 1: Basic finally Block",

      code: `try:
    file = open("report.txt", "r")
    content = file.read()

except FileNotFoundError:
    print("File not found.")

finally:
    print("Closing resources.")`,

      output: `File not found.
Closing resources.`,
    },

    {
      title: "Example 2: finally Without Exception",

      code: `try:
    print("Processing completed successfully.")

finally:
    print("Cleanup completed.")`,

      output: `Processing completed successfully.
Cleanup completed.`,
    },

    {
      title: "Example 3: Closing a Database Connection",

      code: `try:
    print("Connecting to database...")

except Exception:
    print("Connection failed.")

finally:
    print("Database connection closed.")`,

      output: `Connecting to database...
Database connection closed.`,
    },

    {
      title: "Example 4: Cleaning Temporary Resources",

      code: `try:
    print("Generating report...")

except Exception:
    print("Error while generating report.")

finally:
    print("Temporary files removed.")`,

      output: `Generating report...
Temporary files removed.`,
    },
  ],
};

export default lesson5;
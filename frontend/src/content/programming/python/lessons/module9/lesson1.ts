const lesson1 = {
  id: "lesson1",

  title: "Introduction to Exceptions",

  previousLesson: "/lesson/python-development/module9/about",

  nextLesson: "/lesson/python-development/module9/lesson2",

  content: `# Introduction to Exceptions

In the previous lesson, you learned why exception handling is essential for building reliable software. Every real-world application encounters unexpected situations during execution, and a good developer prepares for these situations instead of assuming everything will always work correctly.

Python provides a powerful exception handling mechanism that allows applications to detect runtime errors and respond appropriately instead of crashing.

Understanding exceptions is the first step toward writing robust, professional-quality Python programs.

## Why Do We Need Exceptions?

Consider the following situations:

- A user enters text instead of a number.
- A required file is missing.
- A network connection is interrupted.
- A database server is unavailable.
- A program attempts to divide a number by zero.

If these problems are not handled properly, the application immediately stops executing.

Exception handling allows applications to recover from such situations and continue working whenever possible.

IMPORTANT: Professional software expects failures and handles them gracefully instead of assuming everything will always work correctly.

## What is an Exception?

An exception is an error that occurs while a program is running.

Unlike syntax errors, exceptions occur during program execution. The program starts successfully but encounters a problem while performing a particular operation.

For example, dividing a number by zero causes Python to raise an exception.

Example:

number = 10

result = number / 0

print(result)

Output:

ZeroDivisionError: division by zero

Python immediately stops the program because division by zero is mathematically impossible.

## Syntax Errors vs Exceptions

It is important to understand the difference between syntax errors and exceptions.

### Syntax Error

A syntax error occurs before the program starts running because Python cannot understand the code.

Example:

if True
    print("Hello")

Output:

SyntaxError

The program cannot begin execution until the syntax error is corrected.

### Exception

An exception occurs after the program has already started.

Example:

value = int("Python")

Output:

ValueError: invalid literal for int()

The program begins execution successfully but fails when trying to convert text into an integer.

## Common Exceptions in Python

Python provides many built-in exceptions.

Some commonly encountered exceptions include:

- ZeroDivisionError
- ValueError
- TypeError
- IndexError
- KeyError
- FileNotFoundError

Each exception represents a different type of runtime problem.

Learning these exceptions helps developers identify and solve problems more effectively.

## Understanding Runtime Errors

Runtime errors occur only when a particular line of code is executed.

For example:

numbers = [10, 20, 30]

print(numbers[5])

Output:

IndexError: list index out of range

The program starts successfully but fails because index 5 does not exist.

## Real-World Applications

Exceptions are handled in almost every software application.

Examples include:

- Banking applications validating account information.
- E-commerce websites processing customer orders.
- Online learning platforms verifying course enrollment.
- Cloud platforms monitoring server availability.
- Machine learning systems loading datasets.
- Cybersecurity tools reading security logs.

For example, if an online payment fails because of a temporary network issue, the application should display a helpful message instead of terminating unexpectedly.

## Advantages of Understanding Exceptions

Learning about exceptions provides several benefits:

- Helps prevent unexpected program crashes.
- Improves software reliability.
- Makes debugging easier.
- Creates better user experiences.
- Forms the foundation of professional error handling.

## Common Beginner Mistakes

Some common mistakes include:

- Confusing syntax errors with exceptions.
- Assuming user input will always be valid.
- Ignoring possible runtime failures.
- Not understanding different exception types.
- Writing programs that terminate immediately after encountering an error.

IMPORTANT: Always assume that users, files, networks, and external systems may produce unexpected errors.

## Best Practices

Follow these guidelines:

- Expect runtime errors while designing programs.
- Learn common built-in exception types.
- Validate user input whenever possible.
- Write software that handles failures gracefully.
- Prepare for unexpected situations instead of assuming ideal conditions.

## Key Points

- An exception is a runtime error.
- Exceptions occur after the program starts executing.
- Syntax errors prevent a program from running.
- Python provides many built-in exception types.
- Understanding exceptions is the first step toward writing reliable software.

IMPORTANT: Exception handling is not about preventing errors from occurring. It is about responding to errors intelligently so that applications remain stable, secure, and user-friendly.`,

  examples: [
    {
      title: "Example 1: ZeroDivisionError",

      code: `number = 10

result = number / 0

print(result)`,

      output: `ZeroDivisionError: division by zero`,
    },

    {
      title: "Example 2: ValueError",

      code: `value = int("Python")

print(value)`,

      output: `ValueError: invalid literal for int()`,
    },

    {
      title: "Example 3: IndexError",

      code: `numbers = [10, 20, 30]

print(numbers[5])`,

      output: `IndexError: list index out of range`,
    },

    {
      title: "Example 4: FileNotFoundError",

      code: `file = open("student_report.txt", "r")

print(file.read())`,

      output: `FileNotFoundError: [Errno 2] No such file or directory: 'student_report.txt'`,
    },
  ],
};

export default lesson1;
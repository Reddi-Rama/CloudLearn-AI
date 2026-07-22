const lesson8 = {
  id: "lesson8",

  title: "Exception Hierarchy",

  previousLesson: "/lesson/python-development/module9/lesson7",

  nextLesson: "/lesson/python-development/module9/lesson9",

  content: `# Exception Hierarchy

In the previous lesson, you learned how to create **Custom Exceptions** for application-specific problems. Since custom exceptions inherit from Python's built-in **Exception** class, it is important to understand how Python organizes all exceptions.

Python arranges exceptions in a structured hierarchy, allowing developers to catch broad categories of errors or handle very specific exceptions.

Understanding the exception hierarchy helps you write cleaner, more maintainable, and more reliable error-handling code.

## Why Do We Need an Exception Hierarchy?

Python contains many different exception types.

Examples include:

- ValueError
- TypeError
- ZeroDivisionError
- IndexError
- KeyError
- FileNotFoundError

Instead of treating every exception independently, Python organizes them into a hierarchy.

This hierarchy allows developers to:

- Handle specific exceptions.
- Handle groups of related exceptions.
- Catch all application exceptions when necessary.

IMPORTANT: Almost every built-in exception in Python ultimately inherits from the Exception class.

## Understanding the Exception Hierarchy

A simplified version of Python's exception hierarchy looks like this:

BaseException

├── Exception

  ├── ValueError

  ├── TypeError

  ├── IndexError

  ├── KeyError

  ├── FileNotFoundError

  └── ZeroDivisionError

The **BaseException** class is the parent of all exceptions.

The **Exception** class is the parent of most application-level exceptions that developers normally handle.

Each specific exception inherits from the Exception class.

## Catching the Exception Class

Since many exceptions inherit from Exception, catching Exception also catches its child exceptions.

Example:

try:
    value = int("Python")

except Exception:
    print("An error occurred.")

Output:

An error occurred.

Here, Python raises a ValueError, but the Exception class catches it because ValueError is its child.

## Why Catching Everything is Not Recommended

Although catching Exception is possible, it is usually not the best approach.

Example:

try:
    value = int("Python")

except Exception:
    print("Error")

This hides useful information about the actual problem.

Instead, handle specific exceptions whenever possible.

Example:

try:
    value = int("Python")

except ValueError:
    print("Please enter a valid number.")

Output:

Please enter a valid number.

Specific exception handling produces clearer and more meaningful messages.

IMPORTANT: Catch specific exceptions whenever possible instead of relying on the generic Exception class.

## When Should We Catch Exception?

Sometimes professional applications need a general safety mechanism to prevent unexpected crashes.

Examples include:

- Logging unexpected errors.
- Preventing server shutdown.
- Displaying a generic error page.
- Recording unknown failures.

Even in these situations, developers usually log the original exception for debugging.

## Real-World Applications

Understanding the exception hierarchy is useful in:

- Web applications.
- Banking systems.
- Cloud computing platforms.
- REST APIs.
- Machine Learning applications.
- Data Science projects.
- Automation tools.
- Cybersecurity software.

For example, a web server may catch unexpected exceptions to prevent the entire website from crashing while recording the error in a log file.

## Advantages of Understanding Exception Hierarchy

Learning the exception hierarchy provides several benefits:

- Produces cleaner error handling.
- Improves debugging.
- Makes applications easier to maintain.
- Helps catch appropriate exceptions.
- Prevents unnecessary application failures.

## Common Beginner Mistakes

Some common mistakes include:

- Catching every exception using Exception.
- Ignoring specific exception types.
- Displaying generic error messages.
- Hiding useful debugging information.
- Assuming every exception should be handled the same way.

IMPORTANT: Generic exception handling should be used only when absolutely necessary.

## Best Practices

Follow these guidelines:

- Handle specific exceptions whenever possible.
- Learn the common built-in exception types.
- Use the Exception class only for general fallback handling.
- Display meaningful error messages.
- Log unexpected exceptions for debugging.

## Key Points

- Python organizes exceptions in a hierarchy.
- Most application exceptions inherit from the Exception class.
- Specific exceptions should be handled whenever possible.
- Generic exception handling should be used carefully.
- Understanding the hierarchy improves software reliability.

IMPORTANT: A good understanding of Python's exception hierarchy helps developers build professional applications that handle errors intelligently without hiding important debugging information.`,

  examples: [
    {
      title: "Example 1: Catching the Exception Class",

      code: `try:
    value = int("Python")

except Exception:
    print("An error occurred.")`,

      output: `An error occurred.`,
    },

    {
      title: "Example 2: Catching a Specific Exception",

      code: `try:
    value = int("Python")

except ValueError:
    print("Please enter a valid number.")`,

      output: `Please enter a valid number.`,
    },

    {
      title: "Example 3: Handling FileNotFoundError",

      code: `try:
    file = open("config.txt", "r")

except FileNotFoundError:
    print("Configuration file not found.")`,

      output: `Configuration file not found.`,
    },

    {
      title: "Example 4: Handling Multiple Specific Exceptions",

      code: `try:
    number = int(input("Enter a number: "))
    result = 100 / number

except ValueError:
    print("Invalid number.")

except ZeroDivisionError:
    print("Division by zero is not allowed.")`,

      output: `Enter a number: 0
Division by zero is not allowed.`,
    },
  ],
};

export default lesson8;
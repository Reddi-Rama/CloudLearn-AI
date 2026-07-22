const lesson9 = {
  id: "lesson9",

  title: "Logging Exceptions",

  previousLesson: "/lesson/python-development/module9/lesson8",

  nextLesson: "/lesson/python-development/module9/lesson10",

  content: `# Logging Exceptions

In the previous lesson, you learned about Python's exception hierarchy and why handling specific exceptions is important. While displaying error messages on the screen is useful during development, professional applications require a better way to record errors for future analysis.

Python provides the **logging** module to record exceptions and important application events in log files or the console.

Logging helps developers identify, analyze, and fix problems without interrupting users.

## Why Do We Need Logging?

Imagine an online banking application with thousands of users.

If an unexpected error occurs, simply displaying an error message on the user's screen is not enough. The developers also need information about:

- When the error occurred.
- Which error occurred.
- Where the error occurred.
- What caused the error.

Without logs, finding and fixing problems becomes difficult.

IMPORTANT: Logging records errors permanently, making debugging and maintenance much easier.

## What is Logging?

Logging is the process of recording application events while the program is running.

These events may include:

- Information messages.
- Warning messages.
- Error messages.
- Critical system failures.
- Exception details.

Python provides the built-in **logging** module to perform logging.

Example:

import logging

logging.basicConfig(level=logging.ERROR)

## Logging an Exception

Exceptions can be recorded inside an except block.

Example:

import logging

logging.basicConfig(level=logging.ERROR)

try:
    result = 10 / 0

except ZeroDivisionError:
    logging.error("Division by zero occurred.")

Output:

ERROR:root:Division by zero occurred.

Instead of printing the message, it is recorded by the logging system.

## Logging Exception Details

Python can also record the actual exception object.

Example:

import logging

logging.basicConfig(level=logging.ERROR)

try:
    number = int("Python")

except ValueError as error:
    logging.error(error)

Output:

ERROR:root:invalid literal for int() with base 10: 'Python'

This provides more detailed information for debugging.

## Logging Levels

Python supports different logging levels based on the importance of the message.

Common logging levels include:

- DEBUG – Detailed debugging information.
- INFO – General program information.
- WARNING – Indicates a possible issue.
- ERROR – Records application errors.
- CRITICAL – Records serious system failures.

Choosing the appropriate logging level helps developers monitor applications effectively.

## Real-World Applications

Logging exceptions is essential in:

- Banking applications.
- E-commerce websites.
- Hospital management systems.
- Cloud computing platforms.
- Web servers.
- Machine Learning pipelines.
- Data Science applications.
- Cybersecurity monitoring systems.

For example, an e-commerce website may log payment failures so developers can investigate the issue later without affecting customers.

## Advantages of Logging Exceptions

Using logging provides several benefits:

- Records errors permanently.
- Simplifies debugging.
- Improves application maintenance.
- Helps monitor production systems.
- Assists developers in identifying recurring problems.

## Common Beginner Mistakes

Some common mistakes include:

- Using only print() for error messages.
- Ignoring exception details.
- Logging unnecessary information.
- Forgetting to configure the logging module.
- Logging sensitive user information such as passwords.

IMPORTANT: Never log confidential information like passwords, PINs, or personal data.

## Best Practices

Follow these guidelines:

- Use the logging module instead of print() for errors.
- Choose appropriate logging levels.
- Write meaningful log messages.
- Log unexpected exceptions.
- Protect sensitive user information.

## Key Points

- Logging records application events and exceptions.
- The logging module is built into Python.
- Logs help developers debug applications.
- Different logging levels represent different message priorities.
- Professional applications rely heavily on logging for maintenance.

IMPORTANT: Logging is one of the most valuable debugging tools in professional software development because it provides a permanent record of application behavior and errors.`,

  examples: [
    {
      title: "Example 1: Basic Error Logging",

      code: `import logging

logging.basicConfig(level=logging.ERROR)

try:
    result = 10 / 0

except ZeroDivisionError:
    logging.error("Division by zero occurred.")`,

      output: `ERROR:root:Division by zero occurred.`,
    },

    {
      title: "Example 2: Logging Exception Details",

      code: `import logging

logging.basicConfig(level=logging.ERROR)

try:
    number = int("Python")

except ValueError as error:
    logging.error(error)`,

      output: `ERROR:root:invalid literal for int() with base 10: 'Python'`,
    },

    {
      title: "Example 3: Logging a File Error",

      code: `import logging

logging.basicConfig(level=logging.ERROR)

try:
    file = open("config.txt", "r")

except FileNotFoundError:
    logging.error("Configuration file not found.")`,

      output: `ERROR:root:Configuration file not found.`,
    },

    {
      title: "Example 4: Logging Different Levels",

      code: `import logging

logging.basicConfig(level=logging.INFO)

logging.info("Application started.")
logging.warning("Low disk space.")
logging.error("Unable to connect to the server.")`,

      output: `INFO:root:Application started.
WARNING:root:Low disk space.
ERROR:root:Unable to connect to the server.`,
    },
  ],
};

export default lesson9;
const lesson3 = {
  id: "lesson3",

  title: "Handling Multiple Exceptions",

  previousLesson: "/lesson/python-development/module9/lesson2",

  nextLesson: "/lesson/python-development/module9/lesson4",

  content: `# Handling Multiple Exceptions

In the previous lesson, you learned how the **try** and **except** blocks allow programs to handle runtime errors gracefully. However, a single block of code can sometimes generate different types of exceptions depending on the situation.

For example, a program that accepts user input and performs mathematical calculations may encounter invalid input or division by zero. Instead of treating every error the same way, Python allows developers to handle each exception separately.

Handling multiple exceptions makes applications more reliable, easier to debug, and more user-friendly.

## Why Do We Need Multiple Exception Handling?

Consider an online banking application where a customer enters an amount for withdrawal.

Several problems may occur:

- The customer enters text instead of a number.
- The customer enters zero, causing a division calculation to fail.
- A required file containing account information is missing.

Each problem is different and should display a different message.

Handling multiple exceptions allows the application to respond appropriately to each situation.

IMPORTANT: Different exceptions represent different problems, so they should usually be handled separately.

## Handling Multiple Exceptions

Python allows multiple **except** blocks after a single **try** block.

Syntax:

try:
    risky_code

except ValueError:
    value_error_handling

except ZeroDivisionError:
    division_error_handling

except FileNotFoundError:
    file_error_handling

Python checks each except block one by one and executes the one that matches the exception.

## Example

try:
    number = int(input("Enter a number: "))
    result = 100 / number

except ValueError:
    print("Please enter a valid integer.")

except ZeroDivisionError:
    print("Division by zero is not allowed.")

If the user enters:

abc

Output:

Please enter a valid integer.

If the user enters:

0

Output:

Division by zero is not allowed.

The program responds differently depending on the type of error.

## Grouping Multiple Exceptions

Sometimes multiple exceptions require the same handling.

Instead of writing separate except blocks, Python allows multiple exceptions to be grouped together.

Syntax:

try:
    risky_code

except (ValueError, TypeError):
    print("Invalid data received.")

Both ValueError and TypeError will execute the same error-handling code.

Grouping exceptions helps reduce duplicate code when different errors require identical responses.

## How Python Chooses an Exception Block

When an exception occurs:

1. Python checks the first except block.
2. If it matches the exception, that block executes.
3. Remaining except blocks are skipped.
4. If it does not match, Python checks the next except block.
5. If no matching block exists, the program terminates with an error.

This ensures that only the appropriate exception handler executes.

## Real-World Applications

Handling multiple exceptions is widely used in:

- Banking applications validating transactions.
- Online learning platforms processing student information.
- Cloud applications reading configuration files.
- REST APIs processing client requests.
- Machine learning applications loading datasets.
- Cybersecurity tools analyzing security logs.

For example, an API client may encounter invalid responses, timeout errors, or authentication failures. Each situation requires a different recovery strategy.

## Advantages of Handling Multiple Exceptions

Using multiple exception handling provides several benefits:

- Handles different errors appropriately.
- Improves software reliability.
- Makes debugging easier.
- Produces meaningful error messages.
- Enhances user experience.
- Reduces application crashes.

## Common Beginner Mistakes

Some common mistakes include:

- Using one generic except block for every error.
- Displaying the same message for all exceptions.
- Catching exceptions that cannot occur.
- Ignoring important runtime errors.
- Writing unnecessary duplicate exception handlers.

IMPORTANT: Handle exceptions separately whenever they require different recovery actions.

## Best Practices

Follow these guidelines:

- Catch specific exceptions whenever possible.
- Group exceptions only when they require identical handling.
- Display meaningful error messages.
- Keep exception handlers simple and readable.
- Avoid catching every exception using a generic except block.

## Key Points

- A single try block can generate multiple exceptions.
- Python allows multiple except blocks.
- Each exception can have its own recovery strategy.
- Multiple exceptions can be grouped together.
- Specific exception handling improves code quality and maintainability.

IMPORTANT: Professional applications handle different errors differently, allowing software to recover intelligently instead of displaying the same response for every problem.`,

  examples: [
    {
      title: "Example 1: Handling ValueError and ZeroDivisionError",

      code: `try:
    number = int(input("Enter a number: "))
    result = 100 / number

except ValueError:
    print("Please enter a valid integer.")

except ZeroDivisionError:
    print("Division by zero is not allowed.")`,

      output: `Input: abc

Please enter a valid integer.

Input: 0

Division by zero is not allowed.`,
    },

    {
      title: "Example 2: Handling FileNotFoundError",

      code: `try:
    file = open("config.txt", "r")

except FileNotFoundError:
    print("Configuration file not found.")`,

      output: `Configuration file not found.`,
    },

    {
      title: "Example 3: Grouping Multiple Exceptions",

      code: `try:
    value = int("Python")

except (ValueError, TypeError):
    print("Invalid data received.")`,

      output: `Invalid data received.`,
    },

    {
      title: "Example 4: Multiple Exception Types",

      code: `try:
    numbers = [10, 20]
    print(numbers[5])

except ValueError:
    print("Invalid value.")

except IndexError:
    print("Index is out of range.")`,

      output: `Index is out of range.`,
    },
  ],
};

export default lesson3;
const lesson6 = {
  id: "lesson6",

  title: "Raising Exceptions",

  previousLesson: "/lesson/python-development/module9/lesson5",

  nextLesson: "/lesson/python-development/module9/lesson7",

  content: `# Raising Exceptions

In the previous lesson, you learned how the **finally** block guarantees that cleanup operations always execute. While Python automatically raises many exceptions, there are situations where developers must detect invalid conditions themselves and stop the program from performing an incorrect operation.

Python allows developers to intentionally generate exceptions using the **raise** statement.

Raising exceptions helps enforce business rules, validate data, and protect applications from invalid operations.

## Why Do We Need to Raise Exceptions?

Python automatically raises exceptions such as:

- ZeroDivisionError
- ValueError
- TypeError
- FileNotFoundError

However, Python cannot automatically determine whether your application's business rules have been violated.

For example:

- A student's marks cannot be greater than 100.
- A person's age cannot be negative.
- A bank account cannot withdraw more than its available balance.
- A course completion percentage cannot exceed 100%.
- An online order cannot have a negative quantity.

These conditions are specific to the application and must be checked by the developer.

IMPORTANT: Use the **raise** statement whenever your program detects an invalid business operation.

## What is the raise Statement?

The **raise** statement allows developers to manually generate an exception.

When Python encounters a raise statement, it immediately stops normal execution and generates the specified exception.

Syntax:

raise ExceptionType("Error Message")

The exception can then be handled using a try-except block if required.

## Example of Raising an Exception

Example:

age = -5

if age < 0:
    raise ValueError(
        "Age cannot be negative."
    )

Output:

ValueError:
Age cannot be negative.

Instead of allowing invalid data into the program, Python immediately stops execution.

## Raising Exceptions for Validation

Input validation is one of the most common uses of the raise statement.

Example:

marks = 120

if marks > 100:
    raise ValueError(
        "Marks cannot exceed 100."
    )

Output:

ValueError:
Marks cannot exceed 100.

The application protects itself from invalid information.

## Raising Different Exception Types

Different situations require different exception types.

Examples include:

- ValueError for invalid values.
- TypeError for incorrect data types.
- PermissionError for unauthorized access.
- RuntimeError for unexpected runtime conditions.

Choosing the appropriate exception makes debugging much easier.

## Real-World Applications

The raise statement is widely used in:

- Banking applications validating transactions.
- E-commerce platforms checking product quantities.
- Online learning systems validating examination scores.
- Hospital management systems validating patient information.
- Cloud computing platforms validating configuration settings.
- Machine Learning applications validating datasets.
- Cybersecurity tools checking authentication rules.
- REST APIs validating incoming requests.

For example, a banking application may raise an exception when a customer attempts to withdraw more money than is available in the account.

## Advantages of Raising Exceptions

Using the raise statement provides several benefits:

- Prevents invalid data from entering the system.
- Protects business rules.
- Improves application reliability.
- Simplifies debugging.
- Produces meaningful error messages.

## Common Beginner Mistakes

Some common mistakes include:

- Ignoring invalid input.
- Raising generic exceptions unnecessarily.
- Using unclear error messages.
- Choosing the wrong exception type.
- Raising exceptions for situations that are not actually errors.

IMPORTANT: Always raise the most appropriate exception type with a clear and meaningful message.

## Best Practices

Follow these guidelines:

- Validate important user input.
- Raise exceptions only for genuine errors.
- Use meaningful exception messages.
- Select the correct exception type.
- Keep validation logic simple and readable.

## Key Points

- The raise statement generates exceptions manually.
- Developers use raise to enforce business rules.
- Raising exceptions prevents invalid operations.
- Meaningful exception messages improve debugging.
- Professional applications frequently use raise for input validation.

IMPORTANT: Raising exceptions helps ensure that applications accept only valid data, making software more reliable, secure, and easier to maintain.`,

  examples: [
    {
      title: "Example 1: Raising a ValueError",

      code: `age = -5

if age < 0:
    raise ValueError(
        "Age cannot be negative."
    )`,

      output: `ValueError:
Age cannot be negative.`,
    },

    {
      title: "Example 2: Validating Marks",

      code: `marks = 120

if marks > 100:
    raise ValueError(
        "Marks cannot exceed 100."
    )`,

      output: `ValueError:
Marks cannot exceed 100.`,
    },

    {
      title: "Example 3: Checking Product Quantity",

      code: `quantity = -2

if quantity < 0:
    raise ValueError(
        "Quantity cannot be negative."
    )`,

      output: `ValueError:
Quantity cannot be negative.`,
    },

    {
      title: "Example 4: Bank Withdrawal Validation",

      code: `balance = 5000
withdraw_amount = 7000

if withdraw_amount > balance:
    raise ValueError(
        "Insufficient account balance."
    )`,

      output: `ValueError:
Insufficient account balance.`,
    },
  ],
};

export default lesson6;
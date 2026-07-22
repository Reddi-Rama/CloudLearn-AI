const lesson7 = {
  id: "lesson7",

  title: "Custom Exceptions",

  previousLesson: "/lesson/python-development/module9/lesson6",

  nextLesson: "/lesson/python-development/module9/lesson8",

  content: `# Custom Exceptions

In the previous lesson, you learned how to manually generate exceptions using the **raise** statement. Python provides many built-in exceptions such as **ValueError**, **TypeError**, and **FileNotFoundError**, but these exceptions may not always describe application-specific problems clearly.

For large applications, developers often create their own exceptions that represent business-specific situations. These are called **Custom Exceptions**.

Custom exceptions make programs easier to understand, easier to debug, and easier to maintain.

## Why Do We Need Custom Exceptions?

Consider an online learning platform.

Some business-specific problems might include:

- A course has reached its maximum capacity.
- A student's subscription has expired.
- A certificate cannot be generated because the course is incomplete.
- A quiz has already been submitted.
- An assignment submission deadline has passed.

Although these are errors, Python has no built-in exceptions for them.

Developers create custom exceptions to represent these situations clearly.

IMPORTANT: Custom exceptions describe problems that are unique to your application's business logic.

## What is a Custom Exception?

A custom exception is a user-defined exception class.

It is created by inheriting from Python's built-in **Exception** class.

Syntax:

class CustomExceptionName(Exception):
    pass

The **pass** statement indicates that the class currently contains no additional code.

Once created, the custom exception behaves like any built-in Python exception.

## Creating a Custom Exception

Example:

class CourseCapacityError(Exception):
    pass

A new exception named **CourseCapacityError** has now been created.

It can be raised whenever a course has no available seats.

## Raising a Custom Exception

Example:

class CourseCapacityError(Exception):
    pass

available_seats = 0

if available_seats == 0:
    raise CourseCapacityError(
        "No seats available."
    )

Output:

CourseCapacityError:
No seats available.

The program immediately raises the custom exception with the specified message.

## Handling a Custom Exception

Custom exceptions can be handled using the same try-except mechanism used for built-in exceptions.

Example:

class CourseCapacityError(Exception):
    pass

try:
    raise CourseCapacityError(
        "No seats available."
    )

except CourseCapacityError as error:
    print(error)

Output:

No seats available.

This allows applications to recover gracefully from business-specific problems.

## Benefits of Custom Exceptions

Using custom exceptions provides several advantages:

- Makes code easier to understand.
- Represents business rules clearly.
- Simplifies debugging.
- Improves maintainability.
- Creates meaningful error messages.
- Makes large applications easier to manage.

## Real-World Applications

Custom exceptions are widely used in:

- Banking applications.
- Online learning platforms.
- E-commerce websites.
- Hospital management systems.
- Airline reservation systems.
- Cloud computing platforms.
- Cybersecurity tools.
- Enterprise software.

Examples of custom exceptions include:

- EnrollmentClosedException
- InvalidCouponException
- InsufficientCreditsException
- CourseExpiredException
- PaymentFailedException

These names immediately explain what went wrong.

## Common Beginner Mistakes

Some common mistakes include:

- Creating custom exceptions for very simple problems.
- Forgetting to inherit from Exception.
- Using unclear exception names.
- Creating too many unnecessary custom exceptions.
- Raising custom exceptions without meaningful messages.

IMPORTANT: Create custom exceptions only for meaningful business-specific situations that cannot be represented well using built-in exceptions.

## Best Practices

Follow these guidelines:

- Always inherit from the Exception class.
- Use descriptive exception names.
- Provide meaningful error messages.
- Create custom exceptions only when necessary.
- Keep exception classes simple and focused.

## Key Points

- Custom exceptions are user-defined exceptions.
- They inherit from Python's Exception class.
- They represent application-specific problems.
- They improve readability and debugging.
- Professional software frequently uses custom exceptions for business rules.

IMPORTANT: Custom exceptions help transform generic error messages into meaningful business-specific messages, making professional applications easier to develop, debug, and maintain.`,

  examples: [
    {
      title: "Example 1: Creating a Custom Exception",

      code: `class CourseCapacityError(Exception):
    pass

print("Custom exception created successfully.")`,

      output: `Custom exception created successfully.`,
    },

    {
      title: "Example 2: Raising a Custom Exception",

      code: `class CourseCapacityError(Exception):
    pass

available_seats = 0

if available_seats == 0:
    raise CourseCapacityError(
        "No seats available."
    )`,

      output: `CourseCapacityError:
No seats available.`,
    },

    {
      title: "Example 3: Handling a Custom Exception",

      code: `class CourseCapacityError(Exception):
    pass

try:
    raise CourseCapacityError(
        "No seats available."
    )

except CourseCapacityError as error:
    print(error)`,

      output: `No seats available.`,
    },

    {
      title: "Example 4: Custom Exception for Banking",

      code: `class InsufficientBalanceError(Exception):
    pass

balance = 5000
withdraw_amount = 7000

if withdraw_amount > balance:
    raise InsufficientBalanceError(
        "Insufficient account balance."
    )`,

      output: `InsufficientBalanceError:
Insufficient account balance.`,
    },
  ],
};

export default lesson7;
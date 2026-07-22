const lesson2 = {
  id: "lesson2",

  title: "Creating Functions",

  previousLesson: "/lesson/python-development/module5/lesson1",

  nextLesson: "/lesson/python-development/module5/lesson3",

  content: `# Creating Functions

In the previous lesson, you learned that functions allow us to reuse code instead of writing the same logic repeatedly.

Python allows developers to create their own functions using the **def** keyword. Once a function is created, it can be called whenever needed, making programs more organized, readable, and maintainable.

Creating your own functions is one of the first steps toward writing professional Python programs.

## Why Do We Need to Create Functions?

Imagine developing an application that sends welcome emails to new users.

Without functions, you would need to write the same email-sending code every time a new user registers.

This results in:

- Repeated code.
- Difficult maintenance.
- Increased chances of errors.
- Poor readability.

Instead, you can create one function and call it whenever a new user signs up.

IMPORTANT: Functions allow developers to write code once and execute it as many times as required.

## Creating Your First Function

In Python, a function is created using the **def** keyword.

Syntax:

def function_name():
    statements

Here:

- **def** tells Python that a function is being created.
- **function_name** is the name of the function.
- The indented statements form the function body.

Example:

def display_welcome():
    print("Welcome to CloudLearn AI")

display_welcome()

Output:

Welcome to CloudLearn AI

## Understanding Function Creation

When Python encounters a function definition, it only stores the function in memory.

The function does **not** execute immediately.

Example:

def initialize_server():
    print("Starting Server...")

At this point, nothing is displayed because the function has not been called.

The function executes only after:

initialize_server()

Output:

Starting Server...

IMPORTANT: Creating a function and calling a function are two different operations.

## Calling a Function Multiple Times

One of the biggest advantages of functions is reusability.

Example:

def generate_report():
    print("Generating Monthly Report")

generate_report()
generate_report()
generate_report()

Output:

Generating Monthly Report
Generating Monthly Report
Generating Monthly Report

The same function can be called any number of times without rewriting the code.

## Function Naming Rules

A function name should clearly describe the task it performs.

Good examples:

- calculate_salary()
- generate_invoice()
- validate_user()
- send_email()
- create_backup()

Poor examples:

- abc()
- test()
- data()
- temp()

Meaningful names make programs easier to understand and maintain.

## Function Naming Conventions

Python programmers generally follow the **snake_case** naming style.

Examples:

calculate_total()
send_notification()
process_payment()

Avoid:

CalculateTotal()
ProcessPayment()
MyFunction()

Using consistent naming conventions improves code readability.

## Real-World Applications

Functions are used in almost every software application.

Examples include:

- User registration.
- Payment processing.
- Cloud backup.
- Database connections.
- API requests.
- Report generation.
- File processing.
- Email notifications.
- Authentication systems.

For example, a cloud storage application may have separate functions for:

- Uploading files.
- Downloading files.
- Deleting files.
- Sharing documents.

Each function performs one well-defined task.

## Advantages of Creating Functions

Functions provide several benefits:

- Improve code organization.
- Encourage code reuse.
- Reduce duplication.
- Simplify maintenance.
- Improve debugging.
- Make large projects easier to manage.

## Common Beginner Mistakes

Some common mistakes include:

- Forgetting to call the function.
- Incorrect indentation inside the function.
- Using unclear function names.
- Writing one function that performs many unrelated tasks.

IMPORTANT: Python uses indentation to determine which statements belong to a function.

## Best Practices

Follow these best practices while creating functions:

- Use meaningful function names.
- Keep each function focused on one task.
- Follow snake_case naming convention.
- Avoid writing extremely large functions.
- Reuse existing functions whenever possible.
- Write clean and readable code.

## Key Points

- Functions are created using the **def** keyword.
- A function executes only when it is called.
- The same function can be reused multiple times.
- Use meaningful names for functions.
- Keep functions small, focused, and reusable.

IMPORTANT: Creating well-designed functions is the foundation of modular programming and professional software development.`,

  examples: [
    {
      title: "Example 1: Creating Your First Function",

      code: `def display_welcome():
    print("Welcome to CloudLearn AI")

display_welcome()`,

      output: `Welcome to CloudLearn AI`,
    },

    {
      title: "Example 2: Creating a Server Function",

      code: `def initialize_server():
    print("Starting Server...")

initialize_server()`,

      output: `Starting Server...`,
    },

    {
      title: "Example 3: Calling a Function Multiple Times",

      code: `def generate_report():
    print("Generating Monthly Report")

generate_report()
generate_report()
generate_report()`,

      output: `Generating Monthly Report
Generating Monthly Report
Generating Monthly Report`,
    },

    {
      title: "Example 4: Real-World Example",

      code: `def perform_backup():
    print("Creating System Backup...")
    print("Backup Completed Successfully.")

perform_backup()`,

      output: `Creating System Backup...
Backup Completed Successfully.`,
    },
  ],
};

export default lesson2;
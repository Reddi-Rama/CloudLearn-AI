const lesson1 = {
  id: "lesson1",

  title: "Introduction to Functions",

  previousLesson: "/lesson/python-development/module5/about",

  nextLesson: "/lesson/python-development/module5/lesson2",

  content: `# Introduction to Functions

As programs grow larger, developers often need to perform the same task multiple times. For example, an online shopping application may repeatedly display product details, calculate discounts, validate payments, and generate invoices.

Writing the same code again and again makes programs longer, difficult to maintain, and increases the chances of errors.

Functions solve this problem by allowing developers to write a block of code once and reuse it whenever required.

A function is one of the most important concepts in programming because it promotes code reusability, modularity, and maintainability.

## Why Do We Need Functions?

Imagine building a cloud monitoring application that checks the health of multiple servers.

Without functions, you would write the same monitoring code for every server.

This leads to:

- Duplicate code.
- Difficult debugging.
- Poor readability.
- Increased maintenance effort.
- Higher chances of introducing bugs.

Functions allow us to write the monitoring logic once and simply call it whenever it is needed.

IMPORTANT: One of the biggest advantages of functions is **"Write Once, Use Many Times."**

## What is a Function?

A function is a reusable block of code that performs a specific task.

Instead of rewriting the same instructions repeatedly, developers place them inside a function and call that function whenever the task needs to be performed.

You can think of a function as a machine:

- It accepts input (optional).
- It performs a specific operation.
- It produces an output (optional).

Functions help divide large programs into smaller, manageable pieces.

## Built-in Functions

Python provides many ready-to-use functions called **built-in functions**.

Some commonly used built-in functions include:

- print()
- input()
- len()
- type()
- range()
- max()
- min()
- sum()

Example:

print("Welcome to CloudLearn AI")

print(len("Python"))

Output:

Welcome to CloudLearn AI

6

These functions are already available, so developers can use them without creating them.

## User-Defined Functions

Python also allows developers to create their own functions.

These are called **user-defined functions**.

Example:

def display_welcome():
    print("Welcome to CloudLearn AI")

display_welcome()

Output:

Welcome to CloudLearn AI

Here,

- def is the keyword used to create a function.
- display_welcome is the function name.
- The statements inside the function are called the function body.
- display_welcome() calls the function.

Once created, the same function can be called multiple times.

## How Functions Work

The lifecycle of a function is simple:

1. Create the function.
2. Store the function in memory.
3. Call the function whenever needed.
4. Execute the statements inside the function.
5. Return control back to the main program.

IMPORTANT: Creating a function does not execute it. A function runs only when it is called.

## Advantages of Functions

Functions provide many benefits:

- Reduce code duplication.
- Improve readability.
- Simplify debugging.
- Make programs modular.
- Improve maintainability.
- Encourage code reuse.
- Reduce development time.
- Make teamwork easier in large projects.

## Real-World Applications

Functions are used in almost every software application.

Examples include:

- Login authentication.
- Online payment processing.
- Email notification systems.
- Cloud resource management.
- Machine Learning pipelines.
- Database operations.
- Banking applications.
- Hospital management systems.
- E-commerce platforms.

For example, an online banking application may have separate functions for:

- Checking account balance.
- Depositing money.
- Withdrawing money.
- Transferring funds.
- Generating transaction history.

Each function performs one specific task.

## Common Beginner Mistakes

Some common mistakes include:

- Forgetting to call the function after creating it.
- Giving unclear function names.
- Writing very large functions that perform many tasks.
- Repeating code instead of creating reusable functions.

IMPORTANT: A good function should perform one specific task only.

## Best Practices

Follow these guidelines while creating functions:

- Use meaningful function names.
- Keep functions short and focused.
- Design functions for one responsibility.
- Reuse functions whenever possible.
- Avoid duplicating code.
- Write readable and well-organized code.

## Key Points

- A function is a reusable block of code.
- Functions reduce code duplication.
- Python provides both built-in and user-defined functions.
- Functions improve readability and maintainability.
- Large applications are built using thousands of functions working together.

IMPORTANT: Functions are one of the most fundamental concepts in programming. Mastering them will help you build scalable, modular, and professional Python applications.`,

  examples: [
    {
      title: "Example 1: Using Built-in Functions",

      code: `print("Welcome to CloudLearn AI")

print(len("Python"))`,

      output: `Welcome to CloudLearn AI
6`,
    },

    {
      title: "Example 2: Creating Your First Function",

      code: `def display_welcome():
    print("Welcome to CloudLearn AI")

display_welcome()`,

      output: `Welcome to CloudLearn AI`,
    },

    {
      title: "Example 3: Calling a Function Multiple Times",

      code: `def display_message():
    print("System Running Successfully")

display_message()
display_message()
display_message()`,

      output: `System Running Successfully
System Running Successfully
System Running Successfully`,
    },

    {
      title: "Example 4: Real-World Example",

      code: `def send_alert():
    print("⚠️ Server CPU Usage is High")

send_alert()`,

      output: `⚠️ Server CPU Usage is High`,
    },
  ],
};

export default lesson1;
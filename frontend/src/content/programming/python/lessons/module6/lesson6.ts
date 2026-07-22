const lesson6 = {
  id: "lesson6",

  title: "List Comprehensions",

  previousLesson: "/lesson/python-development/module6/lesson5",

  nextLesson: "/lesson/python-development/module6/lesson7",

  content: `
# List Comprehensions

In the previous lesson, you learned how dictionaries store information using key-value pairs. While working with lists, you may often need to create a new list by processing or filtering existing data.

Traditionally, this is done using loops. However, writing multiple lines of code for simple list creation can make programs longer than necessary.

Python provides **List Comprehensions**, which offer a shorter, cleaner, and more readable way to create lists.

List comprehensions are widely used in data analysis, machine learning, automation, web development, and many other professional Python applications.

## Why Do We Need List Comprehensions?

Suppose you want to create a list containing the squares of numbers from 1 to 5.

Using a traditional loop:

squares = []

for number in range(1, 6):
    squares.append(number * number)

print(squares)

Although this approach works, it requires multiple lines of code.

Using a list comprehension, the same task can be completed in a single line.

IMPORTANT: List comprehensions help write cleaner and more readable code for creating lists.

## What is a List Comprehension?

A **List Comprehension** is a concise way of creating a list using a single statement.

Syntax:

[
    expression
    for item in iterable
]

Python evaluates the expression for every item in the iterable and stores the results in a new list.

Example:

squares = [
    number * number
    for number in range(1, 6)
]

print(squares)

Output:

[1, 4, 9, 16, 25]

The output is exactly the same as the traditional approach.

## Traditional Approach vs List Comprehension

Traditional approach:

numbers = []

for value in range(1, 6):
    numbers.append(value)

List comprehension:

numbers = [
    value
    for value in range(1, 6)
]

Both produce identical results, but list comprehensions require less code.

## Using Conditions

List comprehensions can also filter data by using conditions.

Example:

even_numbers = [
    number
    for number in range(1, 11)
    if number % 2 == 0
]

print(even_numbers)

Output:

[2, 4, 6, 8, 10]

Only numbers satisfying the condition are included in the new list.

IMPORTANT: Conditions make list comprehensions powerful for filtering data.

## Real-World Example

Suppose a cloud monitoring system records CPU usage percentages.

cpu_usage = [45, 92, 67, 95, 81]

You want to identify overloaded servers whose CPU usage is greater than 80%.

Example:

high_usage = [
    usage
    for usage in cpu_usage
    if usage > 80
]

print(high_usage)

Output:

[92, 95, 81]

This creates a new list containing only the required values.

## Real-World Applications

List comprehensions are widely used in:

- Data Analysis
- Machine Learning
- Artificial Intelligence
- Automation scripts
- Web applications
- API data processing
- Cloud monitoring systems
- Scientific computing

For example, data scientists frequently use list comprehensions to clean and transform datasets before training machine learning models.

## Advantages of List Comprehensions

Using list comprehensions provides several benefits:

- Produces shorter code.
- Improves readability.
- Reduces unnecessary loops.
- Makes list creation easier.
- Simplifies data filtering and transformation.
- Widely accepted in professional Python development.

## Common Beginner Mistakes

Some common mistakes include:

- Writing very complex expressions.
- Forgetting the order of expression and loop.
- Ignoring readability.
- Using list comprehensions for tasks that require multiple statements.

IMPORTANT: If the logic becomes difficult to understand, prefer a normal loop instead of a complex list comprehension.

## Best Practices

Follow these guidelines while using list comprehensions:

- Use them for simple transformations.
- Keep expressions short and readable.
- Use conditions only when necessary.
- Avoid deeply nested comprehensions.
- Prioritize readability over shorter code.

## Key Points

- List comprehensions create lists using a single statement.
- They reduce the amount of code.
- They improve readability.
- Conditions can be added for filtering.
- They are widely used in professional Python applications.

IMPORTANT: List comprehensions are an essential Python feature that helps developers write clean, efficient, and readable code while working with collections of data.
`,

  examples: [
    {
      title: "Example 1: Traditional Approach",

      code: `squares = []

for number in range(1, 6):
    squares.append(number * number)

print(squares)`,

      output: `[1, 4, 9, 16, 25]`,
    },

    {
      title: "Example 2: Using List Comprehension",

      code: `squares = [
    number * number
    for number in range(1, 6)
]

print(squares)`,

      output: `[1, 4, 9, 16, 25]`,
    },

    {
      title: "Example 3: Filtering Even Numbers",

      code: `even_numbers = [
    number
    for number in range(1, 11)
    if number % 2 == 0
]

print(even_numbers)`,

      output: `[2, 4, 6, 8, 10]`,
    },

    {
      title: "Example 4: Cloud Monitoring System",

      code: `cpu_usage = [45, 92, 67, 95, 81]

high_usage = [
    usage
    for usage in cpu_usage
    if usage > 80
]

print(high_usage)`,

      output: `[92, 95, 81]`,
    },
  ],
};

export default lesson6;
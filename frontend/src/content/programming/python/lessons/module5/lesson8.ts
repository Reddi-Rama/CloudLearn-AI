const lesson8 = {
  id: "lesson8",

  title: "Lambda Functions",

  previousLesson: "/lesson/python-development/module5/lesson7",

  nextLesson: "/lesson/python-development/module5/lesson9",

  content: `# Lambda Functions

In the previous lesson, you learned how variable length arguments allow functions to accept any number of values. While normal functions are ideal for most programming tasks, sometimes developers only need a very small function that is used once.

Creating a complete function using the **def** keyword for a simple operation can make the code unnecessarily long.

Python provides **Lambda Functions** to solve this problem.

A lambda function is a small anonymous function that can be created in a single line without using the **def** keyword.

Lambda functions are commonly used for short calculations, sorting, filtering, and data processing.

## Why Do We Need Lambda Functions?

Consider a situation where you only need to calculate the square of a number once.

Using a normal function:

def square(number):
    return number * number

print(square(5))

Although this works perfectly, it requires multiple lines of code.

The same task can be completed using a lambda function in just one line.

IMPORTANT: Lambda functions are best suited for simple operations that are used only once.

## What is a Lambda Function?

A lambda function is an anonymous function created without using the **def** keyword.

Anonymous simply means the function does not have a separate name.

Syntax:

lambda arguments: expression

Python automatically returns the result of the expression.

Example:

square = lambda number: number * number

print(square(5))

Output:

25

This performs the same task as a normal function but with less code.

## Lambda Function with Multiple Arguments

Lambda functions can accept multiple arguments.

Example:

calculate_total = lambda price, quantity: price * quantity

print(calculate_total(1500, 3))

Output:

4500

Multiple arguments make lambda functions useful for small calculations.

## Lambda vs Normal Functions

Normal functions are suitable for:

- Complex business logic.
- Multiple statements.
- Large reusable programs.
- Professional application development.

Lambda functions are suitable for:

- Small calculations.
- One-time operations.
- Sorting.
- Filtering.
- Simple transformations.

IMPORTANT: Lambda functions can contain only a single expression.

## Lambda Functions with Sorting

One of the most common uses of lambda functions is sorting data.

Example:

employees = [
    ("Alice", 75000),
    ("Bob", 65000),
    ("Charlie", 90000)
]

employees.sort(key=lambda employee: employee[1])

print(employees)

Output:

[
('Bob', 65000),
('Alice', 75000),
('Charlie', 90000)
]

The list is sorted according to employee salary.

## Real-World Applications

Lambda functions are widely used in:

- Data Analysis
- Machine Learning
- Artificial Intelligence
- Web Development
- Sorting records
- Filtering data
- Automation scripts
- Cloud applications
- Data transformation pipelines

For example, data scientists frequently use lambda functions while processing large datasets using libraries such as Pandas.

## Advantages of Lambda Functions

Using lambda functions provides several benefits:

- Short and concise syntax.
- Reduces unnecessary code.
- Easy to use for simple operations.
- Useful with sorting and filtering.
- Improves code readability for small tasks.

## Common Beginner Mistakes

Some common mistakes include:

- Using lambda functions for complex logic.
- Writing very long expressions.
- Forgetting that lambda functions automatically return values.
- Replacing every normal function with a lambda function.

IMPORTANT: If the function performs multiple operations, use a normal function instead of a lambda function.

## Best Practices

Follow these guidelines while using lambda functions:

- Use lambda only for small operations.
- Prefer normal functions for complex tasks.
- Keep lambda expressions short and readable.
- Use lambda with sorting, filtering, and mapping operations.
- Avoid nesting complex lambda expressions.

## Key Points

- Lambda functions are anonymous functions.
- They are created without using the def keyword.
- They consist of a single expression.
- Lambda functions automatically return the result.
- They are commonly used with sorting and data processing.

IMPORTANT: Lambda functions provide a clean and concise way to write small reusable operations, making Python code simpler and easier to read.`,

  examples: [
    {
      title: "Example 1: Creating a Lambda Function",

      code: `square = lambda number: number * number

print(square(5))`,

      output: `25`,
    },

    {
      title: "Example 2: Lambda Function with Multiple Arguments",

      code: `calculate_total = lambda price, quantity: price * quantity

print(calculate_total(1500, 3))`,

      output: `4500`,
    },

    {
      title: "Example 3: Calculating Tax",

      code: `calculate_tax = lambda amount: amount * 0.18

print(calculate_tax(25000))`,

      output: `4500.0`,
    },

    {
      title: "Example 4: Sorting Using Lambda",

      code: `employees = [
    ("Alice", 75000),
    ("Bob", 65000),
    ("Charlie", 90000)
]

employees.sort(key=lambda employee: employee[1])

print(employees)`,

      output: `[('Bob', 65000), ('Alice', 75000), ('Charlie', 90000)]`,
    },
  ],
};

export default lesson8;
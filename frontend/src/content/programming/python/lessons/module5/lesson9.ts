const lesson9 = {
  id: "lesson9",

  title: "Recursion",

  previousLesson: "/lesson/python-development/module5/lesson8",

  nextLesson: "/lesson/python-development/module6/about",

  content: `# Recursion

In the previous lesson, you learned how lambda functions provide a concise way to write small functions. Another powerful programming technique used in Python is **recursion**.

Recursion is a method in which a function calls itself to solve a problem. Instead of solving the entire problem at once, the function repeatedly solves smaller versions of the same problem until it reaches a stopping condition.

Recursion is widely used in algorithms, data structures, artificial intelligence, and system programming.

## Why Do We Need Recursion?

Some problems are naturally recursive and become easier to solve using recursion than loops.

Examples include:

- Directory traversal in file systems.
- Tree traversal algorithms.
- Graph algorithms.
- Mathematical calculations.
- Parsing nested data structures.
- Searching hierarchical information.

For these types of problems, recursion often provides a cleaner and more elegant solution.

IMPORTANT: Recursion is useful when a problem can be broken into smaller versions of itself.

## What is Recursion?

Recursion is a programming technique where a function calls itself until a specific condition is met.

Every recursive function has two important parts:

### Base Case

The base case is the stopping condition that prevents the function from calling itself forever.

### Recursive Case

The recursive case is where the function calls itself with a smaller or simpler version of the problem.

Without a base case, recursion never stops.

## Countdown Example

Example:

def countdown(number):
    if number == 0:
        print("Launch Initiated")
        return

    print(number)
    countdown(number - 1)

countdown(5)

Output:

5
4
3
2
1
Launch Initiated

The function continues calling itself until the number becomes 0.

## Factorial Using Recursion

The factorial of a number is calculated as:

5! = 5 × 4 × 3 × 2 × 1

Recursive implementation:

def factorial(number):
    if number == 1:
        return 1

    return number * factorial(number - 1)

print(factorial(5))

Output:

120

Each function call waits for the next recursive call to finish before calculating the final answer.

## How Recursion Works

For factorial(5), Python performs:

factorial(5)

↓

5 × factorial(4)

↓

4 × factorial(3)

↓

3 × factorial(2)

↓

2 × factorial(1)

↓

1

Python then returns back through each function call and computes the final result.

## Recursion vs Loops

Both recursion and loops are used for repetition.

Loops are generally preferred for simple repetitive tasks such as displaying numbers or processing lists.

Recursion is preferred for problems involving:

- Trees
- Graphs
- Nested folders
- Mathematical recursion
- Divide-and-conquer algorithms

IMPORTANT: Use recursion only when it makes the solution simpler and easier to understand.

## Real-World Applications

Recursion is widely used in:

- File system traversal.
- Search algorithms.
- Artificial Intelligence.
- Machine Learning.
- Tree traversal.
- Graph processing.
- Compiler design.
- Backtracking algorithms.
- Dynamic programming.

For example, file explorers use recursion to display folders inside folders.

## Advantages of Recursion

Using recursion provides several benefits:

- Simplifies complex problems.
- Produces elegant solutions.
- Works naturally with hierarchical data.
- Reduces code complexity for recursive problems.
- Commonly used in algorithms and data structures.

## Common Beginner Mistakes

Some common mistakes include:

- Forgetting the base case.
- Creating infinite recursion.
- Not reducing the problem size in recursive calls.
- Using recursion when a simple loop is sufficient.

Example:

def countdown(number):
    print(number)
    countdown(number - 1)

This eventually produces:

RecursionError: maximum recursion depth exceeded

IMPORTANT: Every recursive function must contain a base case that stops further recursive calls.

## Best Practices

Follow these guidelines while using recursion:

- Always define a base case.
- Ensure every recursive call moves closer to the base case.
- Keep recursive functions simple.
- Prefer loops for simple repetition.
- Use recursion only where it improves readability.

## Key Points

- Recursion is a function calling itself.
- Every recursive function needs a base case.
- The recursive case solves a smaller version of the problem.
- Recursion is useful for trees, graphs, and nested structures.
- Proper recursion makes complex problems easier to solve.

IMPORTANT: Recursion is one of the most powerful concepts in computer science and is widely used in professional software development, algorithms, artificial intelligence, and data structures.`,

  examples: [
    {
      title: "Example 1: Countdown Using Recursion",

      code: `def countdown(number):
    if number == 0:
        print("Launch Initiated")
        return

    print(number)
    countdown(number - 1)

countdown(5)`,

      output: `5
4
3
2
1
Launch Initiated`,
    },

    {
      title: "Example 2: Factorial Using Recursion",

      code: `def factorial(number):
    if number == 1:
        return 1

    return number * factorial(number - 1)

print(factorial(5))`,

      output: `120`,
    },

    {
      title: "Example 3: Sum of Numbers Using Recursion",

      code: `def sum_numbers(number):
    if number == 1:
        return 1

    return number + sum_numbers(number - 1)

print(sum_numbers(5))`,

      output: `15`,
    },

    {
      title: "Example 4: Recursive Power Function",

      code: `def power(base, exponent):
    if exponent == 0:
        return 1

    return base * power(base, exponent - 1)

print(power(2, 5))`,

      output: `32`,
    },
  ],
};

export default lesson9;
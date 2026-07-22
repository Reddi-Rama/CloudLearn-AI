const lesson4 = {
  id: "lesson4",

  title: "range() Function",

  previousLesson: "/lesson/python-development/module3/lesson3",

  nextLesson: "/lesson/python-development/module3/lesson5",

  content: `# range() Function

The range() function is one of the most commonly used built-in functions in Python. It generates a sequence of numbers and is primarily used with the for loop to execute a block of code a specific number of times.

Instead of manually writing repetitive code, the range() function automatically produces a sequence of values that the loop processes one by one.

The range() function makes loops more efficient, readable, and easier to maintain.

## Why Use range()?

Suppose you want to display a message five times. Without range(), you would need to write the same statement repeatedly.

Using range(), Python automatically generates the required sequence of numbers, allowing the loop to execute the desired number of times.

This greatly reduces code duplication and improves program readability.

IMPORTANT: The range() function is mainly used with for loops when the number of iterations is known in advance.

## Syntax of range()

The simplest syntax is:

range(stop)

Python automatically starts from 0 and stops before the specified value.

General syntax:

range(start, stop)

You can specify both the starting and ending values.

Complete syntax:

range(start, stop, step)

The step value determines how much the sequence increases or decreases after each iteration.

## Understanding range(stop)

When only one value is provided, Python starts counting from 0.

Example:

range(5)

Generated sequence:

0
1
2
3
4

Notice that 5 is not included in the sequence.

## Understanding range(start, stop)

You can specify where the sequence should begin.

Example:

range(1, 6)

Generated sequence:

1
2
3
4
5

The sequence starts from 1 and stops before 6.

## Understanding range(start, stop, step)

The step value controls how much the value changes during each iteration.

Positive step values generate numbers in increasing order.

Example:

range(2, 11, 2)

Generated sequence:

2
4
6
8
10

Negative step values generate numbers in decreasing order.

Example:

range(5, 0, -1)

Generated sequence:

5
4
3
2
1

## Real-World Applications

The range() function is widely used in:

- Data processing
- Automation scripts
- Report generation
- Cloud server management
- Batch processing
- Testing systems
- Machine Learning
- Web development

For example, a report generation system can automatically create reports for multiple months using range().

## Common Beginner Mistakes

Some common mistakes include:

- Assuming the ending value is included.
- Using an incorrect step value.
- Forgetting that a negative step is required for reverse counting.
- Providing invalid start and stop values.

IMPORTANT: The stop value is never included in the generated sequence.

## Best Practices

- Use meaningful loop variable names.
- Choose an appropriate step value.
- Keep loops simple and readable.
- Use range() whenever the number of iterations is known.
- Avoid unnecessary calculations inside loops.

## Key Points

- range() generates a sequence of numbers.
- It is commonly used with for loops.
- The stop value is excluded.
- You can specify start, stop, and step values.
- It makes repetitive tasks simple and efficient.

IMPORTANT: The range() function is one of the most frequently used Python functions and forms the foundation of many looping operations in automation, data analysis, and software development.`,

  examples: [
    {
      title: "Example 1: Using range(stop)",

      code: `for number in range(5):
    print(number)`,

      output: `0
1
2
3
4`,
    },

    {
      title: "Example 2: Using range(start, stop)",

      code: `for month in range(1, 6):
    print(f"Generating Report for Month {month}")`,

      output: `Generating Report for Month 1
Generating Report for Month 2
Generating Report for Month 3
Generating Report for Month 4
Generating Report for Month 5`,
    },

    {
      title: "Example 3: Using range(start, stop, step)",

      code: `for port in range(8000, 8006, 2):
    print(port)`,

      output: `8000
8002
8004`,
    },

    {
      title: "Example 4: Reverse Counting",

      code: `for countdown in range(5, 0, -1):
    print(countdown)`,

      output: `5
4
3
2
1`,
    },
  ],
};

export default lesson4;
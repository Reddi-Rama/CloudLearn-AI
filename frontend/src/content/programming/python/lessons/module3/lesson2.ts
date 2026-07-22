const lesson2 = {
  id: "lesson2",

  title: "for Loop",

  previousLesson: "/lesson/python-development/module3/lesson1",

  nextLesson: "/lesson/python-development/module3/lesson3",

  content: `# for Loop

The for loop is one of the most commonly used loops in Python. It is used to execute a block of code repeatedly for every item in a sequence or for a fixed number of iterations.

Unlike some other programming languages, Python's for loop works directly with collections such as lists, tuples, strings, and ranges, making it simple, readable, and efficient.

The for loop is widely used in automation, data processing, web development, machine learning, and cloud computing applications.

## Syntax of for Loop

The basic syntax of a for loop is:

for variable in sequence:
    statements

The variable stores each value from the sequence one by one, and the statements inside the loop execute for every iteration.

IMPORTANT: Remember to place a colon (:) after the for statement and maintain proper indentation inside the loop.

## Understanding the for Loop

During each iteration, the loop variable receives the next value from the sequence.

Once all the values are processed, the loop automatically stops.

This makes the for loop ideal when the number of iterations is already known.

## Using range() with for Loop

The range() function is commonly used with the for loop to repeat a block of code a specific number of times.

Example:

for number in range(5):
    print(number)

The loop starts from 0 and ends at 4 because range(5) generates the numbers 0, 1, 2, 3, and 4.

## Using for Loop with Lists

The for loop can also process every item stored inside a list.

Instead of accessing each item manually, the loop automatically visits every element one after another.

This feature is widely used when processing customer records, product lists, files, or datasets.

## Real-World Applications

The for loop is commonly used in:

- Processing large datasets
- Reading files
- Automation scripts
- Cloud server monitoring
- Sending bulk emails
- Generating reports
- Machine Learning
- Cybersecurity tools
- Web applications

For example, a cloud monitoring system can automatically check the status of hundreds of servers using a single loop.

## Common Beginner Mistakes

Some common mistakes while using the for loop include:

- Forgetting the colon (:)
- Incorrect indentation
- Using unclear variable names
- Modifying the sequence unnecessarily during iteration

IMPORTANT: Python uses indentation to identify the body of the loop. Incorrect indentation results in an IndentationError.

## Best Practices

- Use meaningful loop variable names.
- Keep the loop body short and readable.
- Avoid unnecessary operations inside loops.
- Use loops instead of writing repetitive code.
- Use range() when the number of iterations is known.

## Key Points

- The for loop repeats a block of code.
- It processes one item at a time from a sequence.
- It works efficiently with lists, strings, tuples, and range().
- It automatically stops after processing all elements.
- It is one of the most important looping constructs in Python.

IMPORTANT: The for loop is preferred whenever the number of iterations is known because it is simpler, safer, and more readable than manually controlling a loop.`,

  examples: [
    {
      title: "Example 1: Using range() with for Loop",

      code: `for number in range(5):
    print("Processing Request")`,

      output: `Processing Request
Processing Request
Processing Request
Processing Request
Processing Request`,
    },

    {
      title: "Example 2: Displaying Numbers",

      code: `for server_id in range(5):
    print(server_id)`,

      output: `0
1
2
3
4`,
    },

    {
      title: "Example 3: Iterating Through a List",

      code: `services = ["Authentication", "Payments", "Analytics"]

for service in services:
    print(service)`,

      output: `Authentication
Payments
Analytics`,
    },

    {
      title: "Example 4: Real-World Example - Server Monitoring",

      code: `servers = ["Server-A", "Server-B", "Server-C"]

for server in servers:
    print(f"Checking {server}")`,

      output: `Checking Server-A
Checking Server-B
Checking Server-C`,
    },
  ],
};

export default lesson2;
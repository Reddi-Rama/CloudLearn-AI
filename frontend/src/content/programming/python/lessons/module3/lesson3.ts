const lesson3 = {
  id: "lesson3",

  title: "while Loop",

  previousLesson: "/lesson/python-development/module3/lesson2",

  nextLesson: "/lesson/python-development/module3/lesson4",

  content: `# while Loop

The while loop is another important looping statement in Python. It executes a block of code repeatedly as long as a specified condition remains True.

Unlike the for loop, which is generally used when the number of iterations is known, the while loop is used when the number of repetitions depends on a condition that changes during program execution.

The while loop is commonly used in applications such as login systems, monitoring software, retry mechanisms, games, and real-time systems where the program must continue running until a particular condition is satisfied.

## Syntax of while Loop

The basic syntax of a while loop is:

while condition:
    statements

Before every iteration, Python checks the given condition.

- If the condition is True, the loop executes.
- If the condition becomes False, the loop stops automatically.

IMPORTANT: A while loop continues running only while its condition evaluates to True.

## How a while Loop Works

A while loop usually uses a variable whose value changes during each iteration.

Python first checks the condition.

If the condition is True:

- The statements inside the loop execute.
- The loop variable is updated.
- Python checks the condition again.

This process continues until the condition becomes False.

## Updating the Loop Variable

A while loop must include a statement that changes the value used in the condition.

Without updating the variable, the condition may never become False, causing the program to run forever.

Example:

count = 1

while count <= 5:
    print(count)
    count += 1

Here, the value of count increases after every iteration, allowing the loop to stop correctly.

## Infinite Loops

If the condition never becomes False, the loop runs forever.

Example:

while True:
    print("Running...")

This is known as an Infinite Loop.

Infinite loops are useful in some situations, such as:

- Web servers
- Game engines
- Monitoring systems
- Operating systems
- Real-time applications

However, accidental infinite loops should always be avoided because they can consume system resources unnecessarily.

IMPORTANT: Always ensure that the loop condition eventually becomes False unless an infinite loop is intentionally required.

## Real-World Applications

The while loop is widely used in many real-world programs, including:

- Login systems
- ATM software
- Chat applications
- Database connection retries
- Network communication
- Cloud monitoring systems
- Download managers
- Online gaming servers

For example, a cloud application may repeatedly check whether a database connection has been established before continuing execution.

## Common Beginner Mistakes

Some common mistakes while using a while loop include:

- Forgetting to update the loop variable.
- Writing an incorrect loop condition.
- Creating accidental infinite loops.
- Incorrect indentation.

These mistakes often cause programs to behave unexpectedly or never stop executing.

## Best Practices

- Always update the loop variable.
- Write simple and meaningful conditions.
- Keep the loop body easy to read.
- Avoid unnecessary computations inside the loop.
- Use while loops only when the number of iterations is unknown.

## Key Points

- A while loop executes as long as a condition remains True.
- The condition is checked before every iteration.
- The loop stops automatically when the condition becomes False.
- It is ideal when the number of repetitions is not known beforehand.
- Proper variable updates are essential to avoid infinite loops.

IMPORTANT: The while loop is best suited for condition-based repetition where execution depends on changing values rather than a fixed number of iterations.`,

  examples: [
    {
      title: "Example 1: Basic while Loop",

      code: `attempt = 1

while attempt <= 3:
    print("Connecting to Server...")
    attempt += 1`,

      output: `Connecting to Server...
Connecting to Server...
Connecting to Server...`,
    },

    {
      title: "Example 2: Updating the Loop Variable",

      code: `active_users = 5

while active_users > 0:
    print("User Session Active")
    active_users -= 1`,

      output: `User Session Active
User Session Active
User Session Active
User Session Active
User Session Active`,
    },

    {
      title: "Example 3: Database Connection Retry",

      code: `database_connected = False

while not database_connected:
    print("Attempting Connection...")
    database_connected = True`,

      output: `Attempting Connection...`,
    },

    {
      title: "Example 4: Counting Numbers",

      code: `count = 1

while count <= 5:
    print(count)
    count += 1`,

      output: `1
2
3
4
5`,
    },
  ],
};

export default lesson3;
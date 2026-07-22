const lesson7 = {
  id: "lesson7",

  title: "continue Statement",

  previousLesson: "/lesson/python-development/module3/lesson6",

  nextLesson: "/lesson/python-development/module3/lesson8",

  content: `# continue Statement

The continue statement is used to skip the current iteration of a loop and immediately move to the next iteration.

Unlike the break statement, which completely terminates the loop, the continue statement only skips the remaining statements of the current iteration while allowing the loop to continue executing normally.

The continue statement is particularly useful when certain values or conditions should be ignored without stopping the entire loop.

## Why Do We Need continue?

In many real-world applications, some data should be skipped while processing the remaining information.

For example:

- Ignoring inactive users while generating reports.
- Skipping corrupted records during data processing.
- Ignoring devices that are under maintenance.
- Skipping invalid input values.
- Ignoring unavailable servers during health monitoring.

Instead of stopping the entire loop, the continue statement simply skips the unwanted iteration and processes the remaining data.

IMPORTANT: The continue statement skips only the current iteration and immediately starts the next iteration of the loop.

## Syntax of continue Statement

The continue statement is generally used inside a conditional statement.

Syntax:

for variable in sequence:
    if condition:
        continue

    statements

If the condition becomes True, Python skips the remaining statements in that iteration and moves directly to the next iteration.

## How continue Works

The execution flow of the continue statement is:

1. Python starts executing the loop.
2. The condition is evaluated.
3. If the condition becomes True, continue is executed.
4. The remaining statements in the current iteration are skipped.
5. Python immediately starts the next iteration.

This allows the program to ignore only specific cases while continuing to process all other data.

## Difference Between break and continue

Although both statements are used inside loops, they behave differently.

- break completely terminates the loop.
- continue skips only the current iteration.

Use break when processing should stop completely.

Use continue when only certain values or conditions should be ignored while the remaining iterations continue normally.

IMPORTANT: Choosing between break and continue depends on whether you want to stop the entire loop or simply skip a particular iteration.

## Real-World Applications

The continue statement is widely used in:

- Data filtering
- Input validation
- Automation scripts
- Cloud monitoring systems
- Network scanning
- Report generation
- Machine Learning data preprocessing
- Cybersecurity applications

For example, a monitoring system may skip servers that are currently under maintenance while continuing to check the remaining servers.

## Advantages of continue

Using continue provides several benefits:

- Simplifies loop logic.
- Avoids deeply nested if statements.
- Improves code readability.
- Allows selective processing of data.
- Makes filtering operations easier.

## Common Beginner Mistakes

Some common mistakes include:

- Confusing continue with break.
- Using continue outside a loop.
- Writing unnecessary continue statements.
- Skipping important processing unintentionally.

Understanding when to use continue helps create cleaner and more efficient programs.

## Best Practices

- Use continue only when certain iterations should be skipped.
- Keep the skipping condition simple and meaningful.
- Avoid excessive use of continue as it may reduce readability.
- Write descriptive conditions so it is clear why an iteration is skipped.

## Key Points

- continue skips only the current iteration.
- The loop continues executing the remaining iterations.
- It is useful for filtering unwanted data.
- It improves readability by simplifying loop logic.
- It is commonly used in automation, validation, and monitoring systems.

IMPORTANT: Use continue when you want to ignore only specific cases while allowing the loop to process all remaining data.`,

  examples: [
    {
      title: "Example 1: Skipping a Request",

      code: `for request_id in range(1, 6):
    if request_id == 3:
        continue

    print(f"Processing Request {request_id}")`,

      output: `Processing Request 1
Processing Request 2
Processing Request 4
Processing Request 5`,
    },

    {
      title: "Example 2: Skipping Devices Under Maintenance",

      code: `devices = ["Online", "Maintenance", "Online", "Online"]

for status in devices:
    if status == "Maintenance":
        continue

    print("Running Health Check")`,

      output: `Running Health Check
Running Health Check
Running Health Check`,
    },

    {
      title: "Example 3: Ignoring Even Numbers",

      code: `for number in range(1, 11):
    if number % 2 == 0:
        continue

    print(number)`,

      output: `1
3
5
7
9`,
    },

    {
      title: "Example 4: Skipping Empty Usernames",

      code: `users = ["Alice", "", "John", "", "David"]

for user in users:
    if user == "":
        continue

    print(user)`,

      output: `Alice
John
David`,
    },
  ],
};

export default lesson7;
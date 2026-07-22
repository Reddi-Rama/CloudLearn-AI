const lesson4 = {
  id: "lesson4",

  title: "if else Statement",

  previousLesson:
    "/lesson/python-development/module2/lesson3",

  nextLesson:
    "/lesson/python-development/module2/lesson5",

  content: `
# Learning Objectives

After completing this lesson, you will be able to:

• Understand the purpose of the if else statement.

• Learn the syntax of an if else statement.

• Execute one block of code when a condition is True and another when it is False.

• Understand real-world applications of if else statements.

• Write Python programs using if else statements.

# What is an if else Statement?

The if else statement is a decision-making statement in Python that allows a program to choose between two possible actions.

If the condition is True, the statements inside the if block are executed.

If the condition is False, the statements inside the else block are executed.

Unlike the simple if statement, one of the two blocks is always executed.

# Syntax of if else Statement

The basic syntax is:

if condition:
    statement(s)
else:
    statement(s)

Notice that both if and else end with a colon (:).

The statements inside both blocks must be properly indented.

# How the if else Statement Works

Step 1

Python evaluates the condition.

Step 2

If the condition is True, the if block executes.

Step 3

If the condition is False, the else block executes.

Only one block executes during a single program execution.

# Flow of Execution

Condition → True → Execute if block

Condition → False → Execute else block

This makes the if else statement useful whenever there are exactly two possible outcomes.

# Real-World Example: Login System

When a user enters a password, the application compares it with the stored password.

If the password is correct, access is granted.

Otherwise, access is denied.

# Real-World Example: ATM Withdrawal

An ATM checks whether the account has sufficient balance.

If enough balance exists, the withdrawal is processed.

Otherwise, an "Insufficient Balance" message is displayed.

# Real-World Example: Student Result

An examination portal checks whether a student has passed.

If the marks satisfy the passing criteria, the student passes.

Otherwise, the student fails.

# Real-World Example: Course Certificate

A learning platform checks whether the student scored at least 70%.

If the score is 70 or higher, a certificate is generated.

Otherwise, a course completion certificate may be provided.

# Advantages of if else Statement

• Makes programs intelligent.

• Handles two possible outcomes.

• Improves user interaction.

• Reduces unnecessary program complexity.

• Forms the foundation for advanced decision-making.

# Common Mistakes

• Forgetting the colon (:).

• Incorrect indentation.

• Using = instead of == for comparison.

• Writing else with a condition.

IMPORTANT:

The else block does not require a condition.

It automatically executes whenever the if condition becomes False.

# Best Practices

• Keep conditions simple.

• Use meaningful variable names.

• Maintain proper indentation.

• Test both True and False cases.

• Write clear and readable code.

# Lesson Summary

In this lesson, you learned:

• What an if else statement is.

• The syntax of the if else statement.

• How Python executes either the if block or the else block.

• Real-world applications of if else statements.

The if else statement allows programs to choose between two possible actions, making applications interactive and intelligent.
`,

  examples: [
    {
      title: "Example 1: Student Result",

      code: `marks = 72

if marks >= 35:
    print("Pass")
else:
    print("Fail")`,

      output: `Pass`,
    },

    {
      title: "Example 2: ATM Withdrawal",

      code: `balance = 3000
withdraw = 5000

if balance >= withdraw:
    print("Transaction Successful")
else:
    print("Insufficient Balance")`,

      output: `Insufficient Balance`,
    },

    {
      title: "Example 3: Login System",

      code: `password = "Python123"

if password == "Python123":
    print("Login Successful")
else:
    print("Invalid Password")`,

      output: `Login Successful`,
    },

    {
      title: "Example 4: Course Certificate",

      code: `score = 65

if score >= 70:
    print("Certificate Generated")
else:
    print("Course Completion Certificate")`,

      output: `Course Completion Certificate`,
    },

    {
      title: "Example 5: Online Shopping",

      code: `payment_successful = False

if payment_successful:
    print("Order Confirmed")
else:
    print("Payment Failed")`,

      output: `Payment Failed`,
    },

    {
      title: "Example 6: Age Verification",

      code: `age = 16

if age >= 18:
    print("Eligible to Vote")
else:
    print("Not Eligible to Vote")`,

      output: `Not Eligible to Vote`,
    },

    {
      title: "Example 7: Temperature Check",

      code: `temperature = 35

if temperature > 37:
    print("High Temperature")
else:
    print("Normal Temperature")`,

      output: `Normal Temperature`,
    },

    {
      title: "Example 8: Stock Availability",

      code: `stock = 20

if stock > 0:
    print("Product Available")
else:
    print("Out of Stock")`,

      output: `Product Available`,
    },
  ],
};

export default lesson4;
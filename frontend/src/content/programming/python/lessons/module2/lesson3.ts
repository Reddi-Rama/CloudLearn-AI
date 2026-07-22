const lesson3 = {
  id: "lesson3",

  title: "if Statement",

  previousLesson:
    "/lesson/python-development/module2/lesson2",

  nextLesson:
    "/lesson/python-development/module2/lesson4",

  content: `
# Learning Objectives

After completing this lesson, you will be able to:

• Understand the purpose of the if statement.

• Learn the syntax of the if statement.

• Understand indentation in Python.

• Execute code only when a condition is True.

• Write simple decision-making programs using if statements.

# What is an if Statement?

The if statement is the simplest decision-making statement in Python.

It checks whether a condition is True.

If the condition is True, the block of code inside the if statement is executed.

If the condition is False, Python skips the block and continues with the remaining program.

The if statement allows programs to make intelligent decisions based on conditions.

# Syntax of if Statement

The basic syntax of an if statement is:

if condition:
    statement

Notice the colon (:) after the condition.

Also notice that the statements inside the if block are indented.

Python uses indentation instead of braces to identify code blocks.

# Understanding Indentation

Indentation means leaving spaces before writing the statements inside a block.

Python usually uses four spaces for indentation.

Incorrect indentation causes an IndentationError.

Always maintain consistent indentation throughout your program.

# How the if Statement Works

Step 1

Python evaluates the condition.

Step 2

If the condition is True, the statements inside the if block execute.

Step 3

If the condition is False, Python skips the block.

Step 4

The remaining program continues to execute.

# Flow of Execution

Condition → True → Execute if block

Condition → False → Skip if block

Only one condition is checked in a simple if statement.

# Real-World Example: ATM System

Suppose an ATM checks whether the entered PIN is correct.

If the PIN is correct, access is granted.

Otherwise, nothing happens because only an if statement is used.

# Real-World Example: Course Certificate

A learning platform generates certificates only if a student's score is greater than or equal to 70.

If the condition is satisfied, the certificate is generated.

Otherwise, no action is taken.

# Real-World Example: Banking

Before allowing a withdrawal, the system checks whether the account has sufficient balance.

If sufficient balance exists, the withdrawal is processed.

# Real-World Example: Online Shopping

If payment is successful, the order confirmation message is displayed.

Otherwise, the confirmation is not shown.

# Common Mistakes

• Forgetting the colon (:)

• Incorrect indentation

• Using = instead of == while comparing values

• Writing True and False in lowercase

IMPORTANT:

An if statement executes its block only when the condition evaluates to True.

If the condition is False, the block is skipped completely.

# Best Practices

• Keep conditions simple and readable.

• Use meaningful variable names.

• Maintain proper indentation.

• Test your program with both True and False conditions.

• Avoid writing overly complex conditions in a single if statement.

# Lesson Summary

In this lesson, you learned:

• What an if statement is.

• The syntax of an if statement.

• The importance of indentation.

• How Python evaluates conditions.

• Real-world applications of if statements.

The if statement is the foundation of decision making in Python. Every intelligent application uses if statements to perform actions based on conditions.
`,

  examples: [
    {
      title: "Example 1: Simple if Statement",

      code: `age = 20

if age >= 18:
    print("Eligible to Vote")`,

      output: `Eligible to Vote`,
    },

    {
      title: "Example 2: Student Result",

      code: `marks = 85

if marks >= 35:
    print("Student Passed")`,

      output: `Student Passed`,
    },

    {
      title: "Example 3: ATM PIN Verification",

      code: `pin_correct = True

if pin_correct:
    print("Access Granted")`,

      output: `Access Granted`,
    },

    {
      title: "Example 4: Certificate Generation",

      code: `score = 76

if score >= 70:
    print("Certificate Generated")`,

      output: `Certificate Generated`,
    },

    {
      title: "Example 5: Banking System",

      code: `balance = 15000
withdraw = 5000

if balance >= withdraw:
    print("Transaction Successful")`,

      output: `Transaction Successful`,
    },

    {
      title: "Example 6: Inventory Check",

      code: `stock = 120

if stock > 100:
    print("Stock Available")`,

      output: `Stock Available`,
    },

    {
      title: "Example 7: Online Shopping",

      code: `payment_successful = True

if payment_successful:
    print("Order Confirmed")`,

      output: `Order Confirmed`,
    },

    {
      title: "Example 8: Temperature Check",

      code: `temperature = 39

if temperature > 37:
    print("High Temperature Detected")`,

      output: `High Temperature Detected`,
    },
  ],
};

export default lesson3;
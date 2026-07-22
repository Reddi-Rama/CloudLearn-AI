const lesson4 = {
  id: "lesson4",

  title: "Comments",

  previousLesson:
    "/lesson/python-development/module1/lesson3",

  nextLesson:
    "/lesson/python-development/module1/lesson5",

  content: `
# Learning Objectives

• Understand what comments are.
• Write single-line comments.
• Write multi-line comments.
• Understand why comments are important.

# What are Comments?

Comments are notes written inside a program to explain code.

Python ignores comments during execution.

Comments are written for humans, not computers.

# Why are Comments Important?

Comments help developers:

• Explain business logic.
• Improve readability.
• Make maintenance easier.
• Help other developers understand code.

# Single-Line Comments

Single-line comments start with the # symbol.

# Multi-Line Comments

Triple quotes are commonly used for longer explanations.

# Avoid Unnecessary Comments

Good comments explain WHY something is done.

Bad comments explain WHAT is already obvious.

# Best Practices

• Keep comments meaningful.
• Explain complex logic.
• Update comments when code changes.
• Avoid obvious comments.

# Remember

Code is written once but read many times.
`,

  examples: [
    {
      title: "Single Line Comment",
      code: `# This program displays a welcome message
print("Welcome to Python Development")`,
      output: `Welcome to Python Development`,
    },

    {
      title: "Commenting Variables",
      code: `# Store customer account balance
account_balance = 25000

# Display customer balance
print(account_balance)`,
      output: `25000`,
    },

    {
      title: "Multi Line Comment",
      code: `"""
This program calculates
monthly sales revenue
for the finance department.
"""

monthly_sales = 1250000
print(monthly_sales)`,
      output: `1250000`,
    },
  ],
};

export default lesson4;
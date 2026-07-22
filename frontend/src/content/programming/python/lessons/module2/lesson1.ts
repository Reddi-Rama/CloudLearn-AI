const lesson1 = {
  id: "lesson1",

  title: "Introduction to Decision Making",

  previousLesson:
    "/lesson/python-development/module2/about",

  nextLesson:
    "/lesson/python-development/module2/lesson2",

  content: `
# Learning Objectives

After completing this lesson, you will be able to:

• Understand what Decision Making is.

• Understand why Decision Making is important in programming.

• Understand how programs evaluate conditions.

• Learn about True and False conditions.

• Identify real-world applications of Decision Making.

# What is Decision Making?

Decision Making is the ability of a program to choose different actions based on certain conditions.

In our daily life, we make decisions continuously.

For example:

• If it is raining, carry an umbrella.

• If the traffic signal is green, drive forward.

• If your phone battery is low, charge it.

Computers work in exactly the same way.

A program checks whether a condition is True or False and then decides what action should be performed.

Decision Making makes programs intelligent instead of simply executing instructions one after another.

# Why Do Programs Need Decision Making?

Imagine an online banking application.

The system cannot approve every transaction automatically.

It first checks several conditions such as:

• Is the customer logged in?

• Is the account active?

• Is there sufficient balance?

• Is the transaction within the daily limit?

Only if all required conditions are satisfied does the bank allow the transaction.

Without Decision Making, every transaction would either always succeed or always fail, making the application useless.

# Understanding Conditions

A condition is an expression that evaluates to one of two values:

• True

• False

Programs use these values to determine which action should be executed.

Comparison operators such as >, <, >=, <=, == and != are commonly used to create conditions.

# How Decision Making Works

Every decision follows three simple steps.

Step 1

Evaluate the condition.

Step 2

Determine whether the result is True or False.

Step 3

Execute the appropriate block of code.

This simple process powers almost every intelligent software application.

# Real-World Example: Course Certificate

Suppose a learning platform generates certificates only for students who score at least 70 marks.

The program checks the student's score before generating the certificate.

If the score satisfies the requirement, the certificate is issued.

Otherwise, the student is informed that they are not yet eligible.

# Real-World Example: Inventory Monitoring

A warehouse application constantly monitors available stock.

If stock falls below the minimum required quantity, the system alerts the administrator to reorder products.

Otherwise, normal operations continue.

# Where is Decision Making Used?

Decision Making is one of the most frequently used concepts in software development.

It is used in:

• Login Systems

• ATM Machines

• Banking Applications

• Online Shopping Websites

• Hospital Management Systems

• Attendance Systems

• Cybersecurity Applications

• AI Systems

• Cloud Computing Platforms

• Mobile Applications

Without Decision Making, software would not be able to react to changing situations.

# Best Practices

• Use meaningful variable names.

• Keep conditions simple.

• Think about both possible outcomes.

• Design logic using real-world scenarios.

• Test conditions carefully before deployment.

IMPORTANT:

Every if statement, loop, login system, payment gateway, recommendation engine, and authentication system relies on Decision Making.

Understanding this concept is essential before learning if, else, and loops.

# Lesson Summary

In this lesson, you learned:

• What Decision Making is.

• Why programs require Decision Making.

• What conditions are.

• How programs evaluate conditions.

• Where Decision Making is used in real-world applications.

Decision Making is one of the most important concepts in programming because it enables software to respond intelligently to different situations.
`,

  examples: [
    {
      title: "Example 1: Simple Condition",

      code: `print(85 > 60)`,

      output: `True`,
    },

    {
      title: "Example 2: Another Condition",

      code: `print(5000 < 1000)`,

      output: `False`,
    },

    {
      title: "Example 3: Course Certificate Eligibility",

      code: `final_score = 82

print(final_score >= 70)`,

      output: `True`,
    },

    {
      title: "Example 4: Inventory Monitoring",

      code: `available_stock = 25
minimum_required_stock = 50

print(available_stock < minimum_required_stock)`,

      output: `True`,
    },

    {
      title: "Example 5: Banking Transaction",

      code: `account_balance = 12000
withdraw_amount = 5000

print(account_balance >= withdraw_amount)`,

      output: `True`,
    },

    {
      title: "Example 6: Login Verification",

      code: `entered_password = "Cloud123"
stored_password = "Cloud123"

print(entered_password == stored_password)`,

      output: `True`,
    },
  ],
};

export default lesson1;
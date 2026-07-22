const lesson5 = {
  id: "lesson5",

  title: "if elif else Statement",

  previousLesson:
    "/lesson/python-development/module2/lesson4",

  nextLesson:
    "/lesson/python-development/module2/lesson6",

  content: `
# Learning Objectives

After completing this lesson, you will be able to:

• Understand the purpose of the if elif else statement.

• Learn the syntax of if elif else.

• Execute different blocks of code based on multiple conditions.

• Understand the order in which Python checks conditions.

• Write programs with more than two possible outcomes.

# What is an if elif else Statement?

The if elif else statement is used when a program needs to choose between multiple possible outcomes.

Instead of checking only one condition, Python can evaluate several conditions one after another.

As soon as one condition becomes True, Python executes that block and skips the remaining conditions.

If none of the conditions are True, the else block is executed.

# Why Do We Need elif?

Consider a grading system.

A student can receive:

• Grade A

• Grade B

• Grade C

• Grade D

• Grade F

Using only if and else would make this difficult.

The elif statement allows us to check multiple conditions efficiently.

# Syntax of if elif else

The basic syntax is:

if condition1:
    statement(s)

elif condition2:
    statement(s)

elif condition3:
    statement(s)

else:
    statement(s)

There can be multiple elif blocks, but only one if block and one optional else block.

# How Python Executes if elif else

Step 1

Python checks the if condition.

Step 2

If it is True, the corresponding block executes and the remaining conditions are skipped.

Step 3

If it is False, Python checks the first elif condition.

Step 4

Python continues checking each elif until one becomes True.

Step 5

If none of the conditions are True, the else block executes.

Only one block is executed during a program run.

# Real-World Example: Student Grading

A university assigns grades based on marks.

• 90 and above → Grade A

• 75 to 89 → Grade B

• 60 to 74 → Grade C

• 35 to 59 → Grade D

• Below 35 → Fail

The program checks each condition until the correct grade is found.

# Real-World Example: Income Tax

A tax application calculates tax based on different income ranges.

Different tax rates apply to different salary brackets.

This is an ideal situation for using if elif else.

# Real-World Example: Movie Ticket Pricing

A theatre charges different ticket prices for:

• Children

• Students

• Adults

• Senior Citizens

The program determines the correct price by checking multiple conditions.

# Advantages of if elif else

• Handles multiple decisions.

• Makes code easier to understand.

• Eliminates unnecessary nested if statements.

• Improves readability.

• Suitable for real-world business logic.

# Common Mistakes

• Forgetting the colon (:).

• Incorrect indentation.

• Writing else with a condition.

• Using multiple if statements instead of elif when only one result is required.

IMPORTANT:

Python stops checking conditions as soon as one condition becomes True.

The remaining elif conditions are ignored.

# Best Practices

• Arrange conditions from most specific to most general.

• Avoid unnecessary elif blocks.

• Keep conditions readable.

• Test all possible cases.

• Always include an else block whenever appropriate.

# Lesson Summary

In this lesson, you learned:

• What an if elif else statement is.

• Why it is used.

• How Python evaluates multiple conditions.

• The syntax of if elif else.

• Real-world applications of multiple decision-making.

The if elif else statement is widely used in grading systems, banking software, shopping websites, hospital management systems, and many other real-world applications where multiple decisions are required.
`,

  examples: [
    {
      title: "Example 1: Student Grade",

      code: `marks = 82

if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 60:
    print("Grade C")
elif marks >= 35:
    print("Grade D")
else:
    print("Fail")`,

      output: `Grade B`,
    },

    {
      title: "Example 2: Age Category",

      code: `age = 65

if age < 13:
    print("Child")
elif age < 20:
    print("Teenager")
elif age < 60:
    print("Adult")
else:
    print("Senior Citizen")`,

      output: `Senior Citizen`,
    },

    {
      title: "Example 3: Income Tax Slab",

      code: `salary = 850000

if salary <= 300000:
    print("No Tax")
elif salary <= 700000:
    print("5% Tax")
elif salary <= 1000000:
    print("10% Tax")
else:
    print("20% Tax")`,

      output: `10% Tax`,
    },

    {
      title: "Example 4: Movie Ticket",

      code: `age = 16

if age < 12:
    print("Child Ticket")
elif age < 18:
    print("Student Ticket")
elif age < 60:
    print("Adult Ticket")
else:
    print("Senior Citizen Ticket")`,

      output: `Student Ticket`,
    },

    {
      title: "Example 5: Weather Advisory",

      code: `temperature = 41

if temperature < 20:
    print("Cold Weather")
elif temperature < 30:
    print("Pleasant Weather")
elif temperature < 40:
    print("Hot Weather")
else:
    print("Extreme Heat")`,

      output: `Extreme Heat`,
    },

    {
      title: "Example 6: Shopping Discount",

      code: `purchase = 7500

if purchase >= 10000:
    print("30% Discount")
elif purchase >= 5000:
    print("20% Discount")
elif purchase >= 2000:
    print("10% Discount")
else:
    print("No Discount")`,

      output: `20% Discount`,
    },

    {
      title: "Example 7: Login Attempts",

      code: `attempts = 3

if attempts == 1:
    print("First Attempt")
elif attempts == 2:
    print("Second Attempt")
elif attempts == 3:
    print("Final Attempt")
else:
    print("Account Locked")`,

      output: `Final Attempt`,
    },

    {
      title: "Example 8: Battery Status",

      code: `battery = 12

if battery >= 80:
    print("Battery Full")
elif battery >= 50:
    print("Battery Medium")
elif battery >= 20:
    print("Battery Low")
else:
    print("Charge Immediately")`,

      output: `Charge Immediately`,
    },
  ],
};

export default lesson5;

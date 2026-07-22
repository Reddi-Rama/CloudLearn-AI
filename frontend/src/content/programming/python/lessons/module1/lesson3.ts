const lesson3 = {
  id: "lesson3",

  title: "Understanding print()",

  previousLesson:
    "/lesson/python-development/module1/lesson2",

  nextLesson:
    "/lesson/python-development/module1/lesson4",

  content: `
# Learning Objectives

• Understand the purpose of the print() function.
• Display different types of information on the screen.
• Print multiple values in a single statement.
• Customize output using sep and end.
• Use print() effectively for debugging and monitoring.

# What is print()?

The print() function is used to display information on the screen.

It is usually the first function every Python programmer learns because it allows us to see the results produced by our programs.

# Why is print() Important?

Professional developers use print() regularly to:

• Display information to users.
• Show reports and summaries.
• Verify program execution.
• Debug applications.
• Monitor system behavior.

# Printing Different Types of Data

The print() function can display text, numbers, and decimal values.

# Printing Multiple Values

Multiple values can be displayed using a single print() statement.

# Using the sep Parameter

The sep parameter changes the separator placed between values.

# Using the end Parameter

By default, print() moves to a new line after displaying output.

The end parameter changes this behavior.

# Using print() for Debugging

Developers often use print() to verify whether a program is working correctly.

# Common Beginner Mistakes

IMPORTANT:

Always use quotation marks around text values.

Always use parentheses with print().

# Lesson Summary

• What print() is.
• Why it is important.
• Printing multiple values.
• Using sep and end.
• Debugging using print().
`,

  examples: [
    {
      title: "Basic Example",
      code: `print("Welcome to Python Development")`,
      output: `Welcome to Python Development`,
    },

    {
      title: "Printing Different Types",
      code: `print("CloudLearn AI")
print(1500)
print(4.8)`,
      output: `CloudLearn AI
1500
4.8`,
    },

    {
      title: "Printing Multiple Values",
      code: `course_name = "Python Development"
duration_weeks = 12

print(course_name, duration_weeks)`,
      output: `Python Development 12`,
    },

    {
      title: "sep Example",
      code: `print("Python","AI","Cybersecurity",sep=" | ")`,
      output: `Python | AI | Cybersecurity`,
    },

    {
      title: "end Example",
      code: `print("Loading", end="...")
print("Completed")`,
      output: `Loading...Completed`,
    },

    {
      title: "Debugging Example",
      code: `total_amount = 5000
discount = 1000

print("Total Amount:", total_amount)
print("Discount:", discount)`,
      output: `Total Amount: 5000
Discount: 1000`,
    },
  ],
};

export default lesson3;
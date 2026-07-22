const lesson5 = {
  id: "lesson5",

  title: "Variables",

  previousLesson:
    "/lesson/python-development/module1/lesson4",

  nextLesson:
    "/lesson/python-development/module1/lesson6",

  content: `
# What are Variables?

Variables are used to store information in a program.

A variable acts like a labeled container.

# Why Do We Need Variables?

Applications need to remember:

• Customer names
• Prices
• Addresses
• Account balances

# Creating Variables

Syntax:

variable_name = value

# Accessing Variables

Variables can be used anywhere after they are created.

# Updating Variables

Variable values can change during execution.

# Variable Naming Rules

• Use letters, numbers and underscores.
• Cannot start with a number.
• Cannot contain spaces.
• Cannot use Python keywords.

# Meaningful Variable Names

Good names make programs easier to understand.

Professional developers spend time choosing names carefully.

# Best Practices

• Use meaningful names.
• Keep names simple.
• Use lowercase and underscores.
• Avoid abbreviations.

# Lesson Summary

Variables store and manage information efficiently.
`,

  examples: [
    {
      title: "Creating Variables",
      code: `customer_name = "Arjun"
account_balance = 25000
account_number = 123456789`,
    },

    {
      title: "Accessing Variables",
      code: `course_name = "Python Development"
print(course_name)`,
      output: `Python Development`,
    },

    {
      title: "Updating Variables",
      code: `available_seats = 50
available_seats = 49

print(available_seats)`,
      output: `49`,
    },

    {
      title: "Employee Example",
      code: `employee_name = "Arjun"
department = "Cybersecurity"
monthly_salary = 85000

print(employee_name)
print(department)
print(monthly_salary)`,
      output: `Arjun
Cybersecurity
85000`,
    },
  ],
};

export default lesson5;
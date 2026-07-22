const lesson12 = {
  id: "lesson12",

  title: "String Formatting",

  previousLesson:
    "/lesson/python-development/module1/lesson11",

  nextLesson:
    "/lesson/python-development/module1/lesson13",

  content: `
# What is String Formatting?

String formatting is the process of inserting values into a string.

Real applications combine variables and text to create meaningful messages.

# Using Commas in print()

The simplest way to display variables with text is by using commas.

# Using String Concatenation

Strings can be combined using the + operator.

When combining strings and numbers, convert numbers using str().

# Using f-Strings

The modern and recommended method is using f-strings.

Syntax:

f"text {variable}"

F-strings are easier to read and are widely used in professional software development.

# Formatting Expressions

F-strings can also evaluate expressions.

# Common Beginner Mistakes

IMPORTANT:

Python cannot combine strings and integers directly.

Always convert numbers to strings or use f-strings.

# Best Practices

• Prefer f-strings for modern development.
• Use meaningful messages.
• Avoid complex formatting.
• Improve readability of output.
`,

  examples: [
    {
      title: "Using Commas",
      code: `employee_name = "Arjun"
department = "Cybersecurity"

print("Employee:", employee_name)
print("Department:", department)`,
      output: `Employee: Arjun
Department: Cybersecurity`,
    },

    {
      title: "String Concatenation",
      code: `course_name = "Python Development"

print("Welcome to " + course_name)`,
      output: `Welcome to Python Development`,
    },

    {
      title: "f-String Example",
      code: `customer_name = "Priya"
account_balance = 25000

print(f"Welcome {customer_name}")
print(f"Available Balance: ₹{account_balance}")`,
      output: `Welcome Priya
Available Balance: ₹25000`,
    },

    {
      title: "Expression Formatting",
      code: `price = 1200
quantity = 3

print(f"Total Amount: ₹{price * quantity}")`,
      output: `Total Amount: ₹3600`,
    },

    {
      title: "Course Enrollment Example",
      code: `student_name = "Ananya"
course_name = "Python Development"

print(f"Congratulations {student_name}!")
print(f"You have successfully enrolled in {course_name}.")`,
      output: `Congratulations Ananya!
You have successfully enrolled in Python Development.`,
    }
  ]
};

export default lesson12;
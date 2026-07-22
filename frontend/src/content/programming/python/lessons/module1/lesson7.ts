const lesson7 = {
  id: "lesson7",

  title: "User Input",

  previousLesson:
    "/lesson/python-development/module1/lesson6",

  nextLesson:
    "/lesson/python-development/module1/lesson8",

  content: `
# What is User Input?

User Input allows applications to collect information from users while the program is running.

Examples include:

• Login Forms
• Registration Systems
• ATM Machines
• Shopping Websites
• Banking Applications

# The input() Function

Python provides the input() function to accept information from users.

Syntax:

variable_name = input("Message")

# Displaying User Input

The value entered by the user can be displayed or reused later in the program.

# Accepting Multiple Inputs

Real-world applications often require multiple pieces of information from users.

# Important Note

The input() function always returns data as a string.

Even if the user enters a number, Python stores it as text.

This is why type conversion becomes important.

# Common Beginner Mistakes

• Forgetting parentheses.
• Using unclear prompts.
• Using poor variable names.

# Best Practices

• Write meaningful prompts.
• Store input in meaningful variables.
• Validate user input when necessary.
`,

  examples: [
    {
      title: "Basic Input Example",
      code: `customer_name = input("Enter customer name: ")
print(customer_name)`,
      output: `Enter customer name: Arjun
Arjun`
    },

    {
      title: "Displaying User Input",
      code: `customer_name = input("Enter customer name: ")
print("Welcome", customer_name)`,
      output: `Enter customer name: Arjun
Welcome Arjun`
    },

    {
      title: "Multiple Inputs Example",
      code: `employee_name = input("Enter employee name: ")
department = input("Enter department: ")

print("Employee:", employee_name)
print("Department:", department)`,
      output: `Employee: Priya
Department: Cybersecurity`
    },

    {
      title: "Checking Input Type",
      code: `age = input("Enter age: ")
print(type(age))`,
      output: `<class 'str'>`
    }
  ]
};

export default lesson7;
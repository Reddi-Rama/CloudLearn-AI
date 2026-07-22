const lesson11 = {
  id: "lesson11",

  title: "Assignment Operators",

  previousLesson:
    "/lesson/python-development/module1/lesson10",

  nextLesson:
    "/lesson/python-development/module1/lesson12",

  content: `
# What are Assignment Operators?

Assignment operators are used to assign values to variables.

The most common assignment operator is:

salary = 50000

Here, the value 50000 is assigned to the variable salary.

# Assignment Operator (=)

The = operator stores a value inside a variable.

# Addition Assignment (+=)

The += operator adds a value to the existing value.

Instead of:

total_sales = total_sales + 25000

You can write:

total_sales += 25000

# Subtraction Assignment (-=)

The -= operator subtracts a value from the existing value.

# Multiplication Assignment (*=)

The *= operator multiplies the current value.

# Division Assignment (/=)

The /= operator divides the current value.

# Modulus Assignment (%=)

The %= operator stores the remainder after division.

# Floor Division Assignment (//=)

The //= operator performs floor division and updates the variable.

# Exponent Assignment (**=)

The **= operator raises the value to a power and stores the result.

# Common Beginner Mistake

IMPORTANT:

count =+ 5 is different from count += 5.

Always use += when performing addition assignment.

# Best Practices

• Use assignment operators to make code shorter.
• Use meaningful variable names.
• Prefer assignment operators when updating values repeatedly.
• Use them in counters and analytics systems.
`,

  examples: [
    {
      title: "Assignment Operator",
      code: `course_name = "Python Development"
available_seats = 120`,
    },

    {
      title: "Addition Assignment Example",
      code: `website_visitors = 1500
website_visitors += 250

print(website_visitors)`,
      output: `1750`,
    },

    {
      title: "Subtraction Assignment Example",
      code: `inventory_stock = 500
inventory_stock -= 25

print(inventory_stock)`,
      output: `475`,
    },

    {
      title: "Multiplication Assignment Example",
      code: `investment = 100000
investment *= 2

print(investment)`,
      output: `200000`,
    },

    {
      title: "Division Assignment Example",
      code: `monthly_budget = 120000
monthly_budget /= 12

print(monthly_budget)`,
      output: `10000.0`,
    },

    {
      title: "Warehouse Example",
      code: `available_laptops = 250
available_laptops -= 15

print("Available Laptops:", available_laptops)`,
      output: `Available Laptops: 235`,
    }
  ]
};

export default lesson11;
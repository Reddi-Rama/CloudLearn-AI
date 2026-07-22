const lesson9 = {
  id: "lesson9",

  title: "Arithmetic Operators",

  previousLesson:
    "/lesson/python-development/module1/lesson8",

  nextLesson:
    "/lesson/python-development/module1/lesson10",

  content: `
# What are Arithmetic Operators?

Arithmetic operators are used to perform mathematical calculations.

They are used in billing systems, salary calculations, banking software and analytics systems.

# Addition Operator (+)

Adds two values.

# Subtraction Operator (-)

Finds the difference between values.

# Multiplication Operator (*)

Multiplies values.

# Division Operator (/)

Divides one value by another.

# Floor Division Operator (//)

Returns only the whole number portion.

# Modulus Operator (%)

Returns the remainder after division.

# Exponent Operator (**)

Raises a number to a power.

# Best Practices

• Use meaningful variable names.
• Break complex calculations into smaller steps.
• Use parentheses for readability.
`,

  examples: [
    {
      title: "Addition Example",
      code: `monthly_sales = 850000
online_sales = 250000

total_sales = monthly_sales + online_sales

print(total_sales)`,
      output: `1100000`
    },

    {
      title: "Multiplication Example",
      code: `product_price = 1500
quantity = 4

total_amount = product_price * quantity

print(total_amount)`,
      output: `6000`
    },

    {
      title: "Division Example",
      code: `annual_profit = 2400000
months = 12

average_monthly_profit = annual_profit / months

print(average_monthly_profit)`,
      output: `200000.0`
    },

    {
      title: "Modulus Example",
      code: `total_servers = 25
servers_per_rack = 4

remaining_servers = total_servers % servers_per_rack

print(remaining_servers)`,
      output: `1`
    },

    {
      title: "Exponent Example",
      code: `storage_per_server = 2
total_storage = storage_per_server ** 3

print(total_storage)`,
      output: `8`
    }
  ]
};

export default lesson9;
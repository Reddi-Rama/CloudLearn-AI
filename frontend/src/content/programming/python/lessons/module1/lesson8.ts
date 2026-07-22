const lesson8 = {
  id: "lesson8",

  title: "Type Conversion",

  previousLesson:
    "/lesson/python-development/module1/lesson7",

  nextLesson:
    "/lesson/python-development/module1/lesson9",

  content: `
# Why Do We Need Type Conversion?

The input() function always returns strings.

When calculations are required, we must convert values into the correct type.

# int()

Converts values into integers.

Used for whole numbers.

# float()

Converts values into decimal numbers.

Used for ratings, prices and percentages.

# str()

Converts values into text.

Used when combining numbers and strings.

# bool()

Converts values into True or False.

# Common Beginner Mistakes

• Forgetting type conversion.
• Using int() for decimal values.
• Mixing strings and numbers.

# Best Practices

• Use int() for whole numbers.
• Use float() for decimal values.
• Convert values immediately after reading input.
`,

  examples: [
    {
      title: "Integer Conversion",
      code: `price = int(input("Enter product price: "))
final_price = price + 500

print(final_price)`,
      output: `3000`
    },

    {
      title: "Float Conversion",
      code: `rating = float(input("Enter product rating: "))
print(rating)`,
      output: `4.8`
    },

    {
      title: "String Conversion",
      code: `order_id = 1024
message = "Order Number: " + str(order_id)

print(message)`,
      output: `Order Number: 1024`
    },

    {
      title: "Boolean Conversion",
      code: `print(bool(1))
print(bool(0))`,
      output: `True
False`
    }
  ]
};

export default lesson8;
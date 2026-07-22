const lesson10 = {
  id: "lesson10",

  title: "Comparison Operators",

  previousLesson:
    "/lesson/python-development/module1/lesson9",

  nextLesson:
    "/lesson/python-development/module1/lesson11",

  content: `
# What are Comparison Operators?

Comparison operators compare two values.

The result is always:

• True
• False

# Equal To (==)

Checks whether two values are equal.

# Not Equal To (!=)

Checks whether two values are different.

# Greater Than (>)

Checks whether one value is greater than another.

# Less Than (<)

Checks whether one value is smaller than another.

# Greater Than or Equal To (>=)

Checks whether a value is greater than or equal to another value.

# Less Than or Equal To (<=)

Checks whether a value is less than or equal to another value.

# Common Beginner Mistakes

• Confusing = and ==.
• Comparing incompatible data types.

# Best Practices

• Use meaningful variable names.
• Store comparison results in descriptive variables.
• Compare compatible data types only.
`,

  examples: [
    {
      title: "Equal To Example",
      code: `entered_otp = 4589
generated_otp = 4589

print(entered_otp == generated_otp)`,
      output: `True`
    },

    {
      title: "Not Equal Example",
      code: `entered_password = "admin123"
stored_password = "admin456"

print(entered_password != stored_password)`,
      output: `True`
    },

    {
      title: "Greater Than Example",
      code: `current_stock = 150
minimum_stock = 100

print(current_stock > minimum_stock)`,
      output: `True`
    },

    {
      title: "Greater Than Or Equal Example",
      code: `attendance_percentage = 82

print(attendance_percentage >= 75)`,
      output: `True`
    },

    {
      title: "Certificate Eligibility Example",
      code: `final_score = 78
certificate_eligible = final_score >= 70

print(certificate_eligible)`,
      output: `True`
    }
  ]
};

export default lesson10;
const lesson6 = {
  id: "lesson6",

  title: "Data Types",

  previousLesson:
    "/lesson/python-development/module1/lesson5",

  nextLesson:
    "/lesson/python-development/module1/lesson7",

  content: `
# What are Data Types?

Python uses data types to identify the kind of information stored inside variables.

# Why are Data Types Important?

Applications store:

• Names
• Prices
• Ratings
• Payment Status

Each requires a different type.

# Integer (int)

Integers represent whole numbers.

# Float (float)

Floats represent decimal values.

# String (str)

Strings represent text information.

# Boolean (bool)

Booleans represent:

• True
• False

# Using Multiple Data Types Together

Real applications use multiple data types together.

# The type() Function

The type() function identifies the type of a variable.

# Best Practices

• Use meaningful names.
• Choose correct data types.
• Use type() if unsure.

# Lesson Summary

Data types help Python understand how data should be stored and processed.
`,

  examples: [
    {
      title: "Integer Example",
      code: `employees = 250
print(type(employees))`,
      output: `<class 'int'>`,
    },

    {
      title: "Float Example",
      code: `course_rating = 4.8
print(type(course_rating))`,
      output: `<class 'float'>`,
    },

    {
      title: "String Example",
      code: `course_name = "Python Development"
print(type(course_name))`,
      output: `<class 'str'>`,
    },

    {
      title: "Boolean Example",
      code: `payment_successful = True
print(type(payment_successful))`,
      output: `<class 'bool'>`,
    },

    {
      title: "Multiple Data Types Example",
      code: `course_name = "Python Development"
students_enrolled = 1500
course_rating = 4.9
certificate_available = True

print(course_name)
print(students_enrolled)
print(course_rating)
print(certificate_available)`,
      output: `Python Development
1500
4.9
True`,
    },
  ],
};

export default lesson6;
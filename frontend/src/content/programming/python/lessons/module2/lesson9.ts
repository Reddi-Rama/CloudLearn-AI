const lesson9 = {
  id: "lesson9",

  title: "Identity Operators",

  previousLesson:
    "/lesson/python-development/module2/lesson8",

  nextLesson:
    "/lesson/python-development/module2/lesson10",

  content: `
# Learning Objectives

After completing this lesson, you will be able to:

• Understand what identity operators are.

• Learn the two identity operators in Python.

• Understand the difference between identity operators and comparison operators.

• Use identity operators correctly with None.

• Apply identity operators in real-world Python programs.

# What are Identity Operators?

Identity operators are used to determine whether two variables refer to the same object in memory.

Unlike comparison operators, identity operators do not compare values.

Instead, they compare the actual objects stored in memory.

Python provides two identity operators:

• is

• is not

Identity operators are especially useful when checking whether a variable contains None.

# The is Operator

The is operator returns True if both variables refer to the same object in memory.

One of its most common uses is checking whether a variable is None.

# The is not Operator

The is not operator returns True if two variables do not refer to the same object.

It is commonly used to verify that an object contains a valid value before performing further operations.

# Identity Operators vs Comparison Operators

Many beginners confuse identity operators with comparison operators.

Comparison operators compare values.

Identity operators compare memory references.

Example:

x = 100

y = 100

x == y checks whether both variables have equal values.

x is y checks whether both variables refer to the same object.

Although Python sometimes returns True for small integers because of internal optimization, identity operators should never be used to compare numbers or strings.

Always use == when comparing values.

Use is only when checking object identity, especially None.

# Real-World Example: API Response

Suppose an application requests data from a web server.

If no response is received, the response variable contains None.

The program checks this using the is operator before processing the data.

# Real-World Example: Database Record

A database query may return None if a record is not found.

The application checks whether the returned object is None before displaying user information.

# Real-World Example: User Profile

A user profile may not exist for a newly registered account.

The application verifies whether the profile object is None before loading profile information.

# When Should You Use Identity Operators?

Identity operators are commonly used when working with:

• None values

• API responses

• Database queries

• Optional function parameters

• Object references

• File handling

• Authentication systems

# Common Mistakes

• Using is instead of == for comparing numbers.

• Using is instead of == for comparing strings.

• Assuming identity operators compare values.

IMPORTANT:

Use:

is

and

is not

primarily when comparing with None.

For numbers, strings, and other values, always use comparison operators such as == or !=.

# Best Practices

• Use is when checking for None.

• Use is not when verifying an object exists.

• Use == when comparing values.

• Write meaningful variable names.

• Keep conditions simple and readable.

# Lesson Summary

In this lesson, you learned:

• What identity operators are.

• The is operator.

• The is not operator.

• The difference between identity operators and comparison operators.

• Real-world applications of identity operators.

Identity operators are widely used in professional Python applications for handling missing data, validating objects, processing API responses, and working with database records.
`,

  examples: [
    {
      title: "Example 1: Using is with None",

      code: `server_status = None

if server_status is None:
    print("Server status is not available.")`,

      output: `Server status is not available.`,
    },

    {
      title: "Example 2: Using is not",

      code: `api_response = "Success"

if api_response is not None:
    print("Response received from API.")`,

      output: `Response received from API.`,
    },

    {
      title: "Example 3: Database Record",

      code: `student_record = None

if student_record is None:
    print("Student record not found.")`,

      output: `Student record not found.`,
    },

    {
      title: "Example 4: User Profile",

      code: `user_profile = None

if user_profile is None:
    print("User profile does not exist.")`,

      output: `User profile does not exist.`,
    },

    {
      title: "Example 5: Comparison Operator",

      code: `x = 50
y = 50

print(x == y)`,

      output: `True`,
    },

    {
      title: "Example 6: Identity Operator",

      code: `value = None

if value is None:
    print("Value is empty.")`,

      output: `Value is empty.`,
    },

    {
      title: "Example 7: File Object",

      code: `file = None

if file is None:
    print("No file selected.")`,

      output: `No file selected.`,
    },

    {
      title: "Example 8: Login Session",

      code: `session = "Active"

if session is not None:
    print("User session available.")`,

      output: `User session available.`,
    },
  ],
};

export default lesson9;
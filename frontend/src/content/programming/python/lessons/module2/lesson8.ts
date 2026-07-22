const lesson8 = {
  id: "lesson8",

  title: "Membership Operators",

  previousLesson:
    "/lesson/python-development/module2/lesson7",

  nextLesson:
    "/lesson/python-development/module2/lesson9",

  content: `
# Learning Objectives

After completing this lesson, you will be able to:

• Understand what membership operators are.

• Learn the two membership operators in Python.

• Use the in operator.

• Use the not in operator.

• Check whether a value exists inside a collection.

• Apply membership operators in real-world applications.

# What are Membership Operators?

Membership operators are used to check whether a value exists inside a collection such as a string, list, tuple, or set.

Instead of comparing values one by one, membership operators quickly determine whether an element is present.

Python provides two membership operators:

• in

• not in

These operators are commonly used in search systems, authentication systems, filtering applications, and data validation.

# The in Operator

The in operator checks whether a value exists inside a collection.

If the value is found, the result is True.

Otherwise, it returns False.

This operator is useful whenever you need to search for an element inside a collection.

# The not in Operator

The not in operator checks whether a value does not exist inside a collection.

If the value is absent, the result is True.

Otherwise, it returns False.

This operator is useful when restricting access or validating user input.

# Membership Operators with Lists

Lists are one of the most common collections used with membership operators.

A program can quickly determine whether an item is available without manually checking every element.

# Membership Operators with Strings

Membership operators also work with strings.

Python searches for a character or substring inside the given string.

This technique is commonly used in email validation, password validation, and keyword searching.

# Membership Operators with Tuples and Sets

The same operators work with tuples and sets.

Python automatically searches the collection and returns either True or False.

# Real-World Example: Course Availability

An online learning platform stores all available programming courses in a list.

When a student searches for a course, Python checks whether that course exists.

# Real-World Example: Email Validation

Before creating a user account, the application checks whether the email contains the '@' symbol.

If it exists, the email format is considered valid.

# Real-World Example: Access Control

Some countries may be blocked from accessing a website.

The application checks whether the user's country is present in the blocked list.

# Real-World Example: Product Search

An online shopping website checks whether a requested product exists in the inventory before displaying it.

# Advantages of Membership Operators

• Simple and easy to read.

• Fast searching inside collections.

• Useful for validation.

• Reduces unnecessary loops.

• Improves program readability.

IMPORTANT:

Membership operators work with collections such as:

• Lists

• Tuples

• Sets

• Strings

• Dictionaries (checks keys)

They cannot be used directly with individual numbers.

# Best Practices

• Use descriptive collection names.

• Use in when checking whether an item exists.

• Use not in when checking whether an item is absent.

• Avoid unnecessary comparisons when membership operators can solve the problem.

• Keep collection names meaningful and readable.

# Lesson Summary

In this lesson, you learned:

• What membership operators are.

• The in operator.

• The not in operator.

• How membership operators work with strings and collections.

• Real-world applications of membership operators.

Membership operators make Python programs smarter by allowing them to search, validate, and verify information efficiently.
`,

  examples: [
    {
      title: "Example 1: Using in with a List",

      code: `available_languages = ["Python", "Java", "C++", "JavaScript"]

if "Python" in available_languages:
    print("Course Available")`,

      output: `Course Available`,
    },

    {
      title: "Example 2: Using not in with a List",

      code: `blocked_countries = ["Country A", "Country B", "Country C"]

if "India" not in blocked_countries:
    print("Access Allowed")`,

      output: `Access Allowed`,
    },

    {
      title: "Example 3: Membership in a String",

      code: `email = "student@cloudlearn.ai"

if "@" in email:
    print("Valid Email Format")`,

      output: `Valid Email Format`,
    },

    {
      title: "Example 4: Product Search",

      code: `products = ["Laptop", "Keyboard", "Mouse", "Monitor"]

if "Mouse" in products:
    print("Product Found")`,

      output: `Product Found`,
    },

    {
      title: "Example 5: Student Registration",

      code: `registered_students = ["Arjun", "Sneha", "Rahul"]

if "Sneha" in registered_students:
    print("Student Registered")`,

      output: `Student Registered`,
    },

    {
      title: "Example 6: Restricted Username",

      code: `restricted_users = ["admin", "root", "system"]

if "guest" not in restricted_users:
    print("Username Available")`,

      output: `Username Available`,
    },

    {
      title: "Example 7: Tuple Membership",

      code: `months = ("January", "February", "March")

if "March" in months:
    print("Month Found")`,

      output: `Month Found`,
    },

    {
      title: "Example 8: Set Membership",

      code: `permissions = {"Read", "Write", "Execute"}

if "Write" in permissions:
    print("Permission Granted")`,

      output: `Permission Granted`,
    },
  ],
};

export default lesson8;
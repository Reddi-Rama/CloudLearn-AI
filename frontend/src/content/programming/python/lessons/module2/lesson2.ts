const lesson2 = {
  id: "lesson2",

  title: "Boolean Values",

  previousLesson:
    "/lesson/python-development/module2/lesson1",

  nextLesson:
    "/lesson/python-development/module2/lesson3",

  content: `
# Learning Objectives

After completing this lesson, you will be able to:

• Understand what Boolean values are.

• Understand the two Boolean values in Python.

• Learn why Boolean values are important.

• Create Boolean variables.

• Generate Boolean values using comparison operators.

• Use the bool() function.

# What are Boolean Values?

Boolean values represent the simplest form of data in programming.

A Boolean value can have only one of two possible values:

• True

• False

Almost every decision made by a computer is based on these two values.

Whenever a program asks a question, the answer will usually be either True or False.

# Why are Boolean Values Important?

Boolean values are the foundation of Decision Making.

Without Boolean values, software cannot determine what action should be performed.

For example:

• Is the password correct?

• Has the payment been completed?

• Is the user logged in?

• Is the server running?

• Is the student eligible for a certificate?

Every one of these questions produces either True or False.

# Creating Boolean Variables

Boolean variables store either True or False.

Python provides these values as built-in keywords.

Remember that both words begin with capital letters.

# Understanding True and False

A Boolean value represents the state of something.

For example, a payment may be successful.

A user may already be logged in.

A course certificate may be generated.

Each of these situations can be represented using Boolean values.

# Real-World Example: Examination Portal

An online examination system checks whether the examination fee has been paid.

If the fee is paid, the student is allowed to attend the examination.

Otherwise, access is denied.

# Real-World Example: Course Certificate

Many learning platforms generate certificates only after students successfully complete the course.

The system stores this information using a Boolean value.

# Real-World Example: Order Tracking

An online shopping website tracks whether an order has been delivered.

If the order is delivered, the customer receives a confirmation message.

Otherwise, the system continues tracking the shipment.

# Boolean Values from Comparisons

Comparison operators automatically generate Boolean values.

Whenever two values are compared, Python returns either True or False.

This makes Boolean values the backbone of every decision-making program.

# Using the bool() Function

Python provides the bool() function to convert values into Boolean values.

In Python:

• 0 becomes False.

• Non-zero numbers become True.

• Empty collections become False.

• Non-empty collections become True.

# Common Beginner Mistakes

IMPORTANT:

True and False are Python keywords.

Always write them with the first letter capitalized.

Incorrect:

true

false

Correct:

True

False

# Best Practices

• Use meaningful Boolean variable names.

• Boolean variables should describe a state or answer a question.

Good examples:

is_logged_in

payment_completed

certificate_generated

server_online

Avoid unclear names such as:

status

flag

value

Meaningful names make programs easier to read and maintain.

# Lesson Summary

In this lesson, you learned:

• What Boolean values are.

• Why Boolean values are important.

• How to create Boolean variables.

• How comparisons generate Boolean values.

• How to use the bool() function.

Boolean values are the foundation of every intelligent Python program because they allow software to make decisions based on conditions.
`,

  examples: [
    {
      title: "Creating Boolean Variables",

      code: `is_server_running = True
payment_successful = False

print(is_server_running)
print(payment_successful)`,

      output: `True
False`,
    },

    {
      title: "Course Certificate Example",

      code: `certificate_eligible = True

print(certificate_eligible)`,

      output: `True`,
    },

    {
      title: "Order Tracking Example",

      code: `order_delivered = False

print(order_delivered)`,

      output: `False`,
    },

    {
      title: "Boolean Values from Comparisons",

      code: `course_score = 82

print(course_score >= 70)`,

      output: `True`,
    },

    {
      title: "Comparison Returning False",

      code: `available_balance = 2500

print(available_balance >= 5000)`,

      output: `False`,
    },

    {
      title: "Using bool() Function",

      code: `print(bool(1))
print(bool(0))
print(bool(100))
print(bool(-5))`,

      output: `True
False
True
True`,
    },

    {
      title: "Login Status Example",

      code: `is_logged_in = True

print(is_logged_in)`,

      output: `True`,
    },

    {
      title: "Payment Status Example",

      code: `payment_completed = False

print(payment_completed)`,

      output: `False`,
    },
  ],
};

export default lesson2;
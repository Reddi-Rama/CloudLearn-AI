const lesson6 = {
  id: "lesson6",

  title: "Encapsulation",

  previousLesson: "/lesson/python-development/module8/lesson5",

  nextLesson: "/lesson/python-development/module8/lesson7",

  content: `# Encapsulation

In the previous lesson, you learned how methods define the behavior of objects. While methods allow objects to perform actions, they also provide a way to protect an object's data. This concept is known as **Encapsulation**.

Encapsulation is one of the four fundamental principles of Object-Oriented Programming (OOP). It helps prevent unauthorized or accidental modification of an object's internal data by restricting direct access.

Instead of allowing users to change important values directly, encapsulation provides controlled methods to access and modify data safely.

## Why Do We Need Encapsulation?

Imagine a banking application.

Every bank account contains sensitive information such as:

- Account Number
- Account Balance
- PIN
- Customer Details

If anyone could directly modify the account balance, the banking system would become insecure.

Instead, users should interact with the account only through approved actions such as:

- Deposit Money
- Withdraw Money
- Check Balance

This controlled access is the main idea behind encapsulation.

IMPORTANT: Encapsulation protects an object's data by hiding its internal implementation.

## What is Encapsulation?

Encapsulation is the process of combining data and methods into a single unit while restricting direct access to the object's internal data.

In simple words:

- Hide internal data.
- Allow controlled access through methods.

This improves security, reliability, and maintainability.

## Creating Private Variables

Python uses **double underscores (__)** before a variable name to indicate that it should not be accessed directly from outside the class.

Example:

class BankAccount:

    def __init__(self, balance):
        self.__balance = balance

Here, **__balance** is a private instance variable.

## Access Restriction

Attempting to access a private variable directly produces an error.

Example:

class BankAccount:

    def __init__(self, balance):
        self.__balance = balance

account = BankAccount(50000)

print(account.__balance)

Output:

AttributeError:
'BankAccount' object has no attribute '__balance'

Python prevents direct access to the private variable.

IMPORTANT: Private variables should always be accessed through methods instead of directly.

## Controlled Access Using Methods

Instead of exposing private data directly, methods can safely provide access.

Example:

class BankAccount:

    def __init__(self, balance):
        self.__balance = balance

    def get_balance(self):
        return self.__balance

account = BankAccount(50000)

print(account.get_balance())

Output:

50000

The balance is accessed safely without exposing the internal variable.

## Why is Encapsulation Important?

Encapsulation provides many advantages:

- Protects sensitive information.
- Prevents accidental modification.
- Improves code security.
- Makes applications easier to maintain.
- Provides controlled access to data.

These advantages are especially important in large enterprise applications.

## Real-World Applications

Encapsulation is widely used in:

- Banking applications.
- Hospital management systems.
- Employee management software.
- E-commerce platforms.
- School management systems.
- Cloud computing platforms.
- Cybersecurity applications.

For example, an online banking system allows users to view their balance but prevents them from directly changing it.

## Advantages of Encapsulation

Using encapsulation provides several benefits:

- Protects object data.
- Improves application security.
- Reduces programming errors.
- Simplifies maintenance.
- Encourages modular software design.

## Common Beginner Mistakes

Some common mistakes include:

- Accessing private variables directly.
- Forgetting to use methods for controlled access.
- Making every variable private unnecessarily.
- Ignoring data protection for sensitive information.

IMPORTANT: Encapsulation is most useful for protecting important or sensitive data.

## Best Practices

Follow these guidelines while using encapsulation:

- Make sensitive data private.
- Provide getter methods to read private values.
- Provide setter methods when controlled updates are required.
- Avoid exposing internal implementation details.
- Keep object data secure and consistent.

## Key Points

- Encapsulation protects object data.
- Private variables are created using double underscores (__).
- Methods provide controlled access to private data.
- Encapsulation improves security and maintainability.
- Modern software applications heavily rely on encapsulation.

IMPORTANT: Encapsulation is one of the core pillars of Object-Oriented Programming because it helps build secure, reliable, and maintainable software systems by protecting an object's internal data.`,

  examples: [
    {
      title: "Example 1: Creating a Private Variable",

      code: `class BankAccount:

    def __init__(self, balance):
        self.__balance = balance

account = BankAccount(50000)`,

      output: `Private variable created successfully.`,
    },

    {
      title: "Example 2: Accessing a Private Variable Directly",

      code: `class BankAccount:

    def __init__(self, balance):
        self.__balance = balance

account = BankAccount(50000)

print(account.__balance)`,

      output: `AttributeError:
'BankAccount' object has no attribute '__balance'`,
    },

    {
      title: "Example 3: Accessing Data Using a Getter Method",

      code: `class BankAccount:

    def __init__(self, balance):
        self.__balance = balance

    def get_balance(self):
        return self.__balance

account = BankAccount(50000)

print(account.get_balance())`,

      output: `50000`,
    },

    {
      title: "Example 4: Student Information",

      code: `class Student:

    def __init__(self, marks):
        self.__marks = marks

    def get_marks(self):
        return self.__marks

student = Student(92)

print(student.get_marks())`,

      output: `92`,
    },
  ],
};

export default lesson6;
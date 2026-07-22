const lesson5 = {
  id: "lesson5",

  title: "Methods",

  previousLesson: "/lesson/python-development/module8/lesson4",

  nextLesson: "/lesson/python-development/module8/lesson6",

  content: `# Methods

In the previous lesson, you learned that **instance variables** store the data belonging to an object. While data describes an object, an object also needs the ability to perform actions. These actions are defined using **methods**.

A method is simply a function that is defined inside a class. Methods describe what an object can do and allow objects to interact with their data.

For example, a Course object may store the course name, while a method can display the course details. Similarly, a BankAccount object stores the account balance, while methods allow users to deposit or withdraw money.

## Why Do We Need Methods?

Imagine creating a Product object that stores:

- Product Name
- Price
- Stock

Besides storing information, the product should also perform actions such as:

- Display Product Details
- Update Stock
- Apply Discount

Without methods, these operations would need to be written as separate functions, making programs difficult to organize.

Methods keep related data and functionality together inside the same class.

IMPORTANT: Methods define the behavior of an object.

## What are Methods?

Methods are functions created inside a class.

They perform operations using the object's data.

Syntax:

class ClassName:

    def method_name(self):
        statements

The **self** parameter refers to the object that calls the method.

## Creating a Simple Method

Example:

class Course:

    def display_course(self):
        print("Welcome to Python Development")

course = Course()

course.display_course()

Output:

Welcome to Python Development

The method belongs to the Course object and is called using dot notation.

## Methods Accessing Instance Variables

Methods can access instance variables using the **self** keyword.

Example:

class Course:

    def __init__(self, name):
        self.name = name

    def display_course(self):
        print(f"Course Name: {self.name}")

course = Course("Python Development")

course.display_course()

Output:

Course Name: Python Development

The method retrieves the value stored inside the object.

## Methods with Parameters

Methods can also accept additional parameters.

Example:

class Calculator:

    def add(self, number1, number2):
        print(number1 + number2)

calculator = Calculator()

calculator.add(25, 15)

Output:

40

This allows methods to perform calculations using values provided by the user.

IMPORTANT: Every instance method must include the **self** parameter as its first parameter.

## Understanding self in Methods

Suppose the following statement is executed:

course.display_course()

Internally, Python performs something similar to:

Course.display_course(course)

This is why the method can access the object's instance variables using self.

The self keyword always refers to the object calling the method.

## Why Are Methods Important?

Consider an online shopping application.

Every Product object can perform actions such as:

- Display Details
- Update Stock
- Apply Discount

Instead of creating separate functions for every product, methods allow each object to manage its own behavior.

This makes applications easier to organize and maintain.

## Real-World Applications

Methods are used in almost every software application.

Examples include:

- Banking applications for deposits and withdrawals.
- E-commerce platforms for updating inventory.
- Learning platforms for enrolling students.
- Hospital management systems for scheduling appointments.
- Ride-sharing applications for booking rides.
- Social media platforms for posting content.
- Cloud platforms for starting and stopping servers.

For example, an Employee object may use methods to calculate salary, update department, or display employee information.

## Advantages of Methods

Using methods provides several benefits:

- Keeps related functionality inside the class.
- Improves code organization.
- Promotes code reuse.
- Makes software easier to maintain.
- Represents real-world behavior naturally.

## Common Beginner Mistakes

Some common mistakes include:

- Forgetting the self parameter.
- Calling methods without creating an object.
- Accessing instance variables without using self.
- Creating methods that perform too many unrelated tasks.

IMPORTANT: Methods should perform one specific responsibility whenever possible.

## Best Practices

Follow these guidelines while creating methods:

- Use meaningful method names.
- Use verbs for method names.

Examples:

- calculate_total()
- display_details()
- update_stock()
- generate_report()

- Keep methods short and focused.
- Use self to access object data.
- Avoid writing unnecessary code inside methods.

## Key Points

- Methods are functions defined inside a class.
- Methods describe an object's behavior.
- Methods access object data using self.
- Methods are called using dot notation.
- Every object can use its own methods independently.

IMPORTANT: Methods bring objects to life by allowing them to perform actions using their own data, making Object-Oriented Programming powerful and closely aligned with real-world systems.`,

  examples: [
    {
      title: "Example 1: Simple Method",

      code: `class Course:

    def display_course(self):
        print("Welcome to Python Development")

course = Course()

course.display_course()`,

      output: `Welcome to Python Development`,
    },

    {
      title: "Example 2: Method Accessing Instance Variables",

      code: `class Course:

    def __init__(self, name):
        self.name = name

    def display_course(self):
        print(f"Course Name: {self.name}")

course = Course("Python Development")

course.display_course()`,

      output: `Course Name: Python Development`,
    },

    {
      title: "Example 3: Method with Parameters",

      code: `class Calculator:

    def add(self, number1, number2):
        print(number1 + number2)

calculator = Calculator()

calculator.add(25, 15)`,

      output: `40`,
    },

    {
      title: "Example 4: Product Stock Method",

      code: `class Product:

    def __init__(self, name, stock):
        self.name = name
        self.stock = stock

    def display_stock(self):
        print(f"{self.name} Stock: {self.stock}")

product = Product(
    "Laptop",
    25
)

product.display_stock()`,

      output: `Laptop Stock: 25`,
    },
  ],
};

export default lesson5;
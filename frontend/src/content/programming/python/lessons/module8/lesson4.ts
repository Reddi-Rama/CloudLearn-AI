const lesson4 = {
  id: "lesson4",

  title: "Instance Variables",

  previousLesson: "/lesson/python-development/module8/lesson3",

  nextLesson: "/lesson/python-development/module8/lesson5",

  content: `# Instance Variables

In the previous lesson, you learned how constructors automatically initialize objects using the **__init__()** method. The values assigned inside the constructor become part of the object itself. These values are called **Instance Variables**.

Instance variables store information that belongs to a specific object. Every object created from a class maintains its own separate copy of these variables.

For example, every student in a learning platform has a different name, roll number, and course. Although all students belong to the same Student class, each student stores their own information independently.

## Why Do We Need Instance Variables?

Imagine developing an online learning platform.

Every student has:

- Name
- Roll Number
- Course
- Email

If all students shared the same values, the application would not work correctly.

Instance variables ensure that every object stores its own unique data.

IMPORTANT: Instance variables belong to individual objects, not to the class itself.

## What are Instance Variables?

Instance variables are variables that belong to an object.

They are usually created inside the constructor using the **self** keyword.

Syntax:

class ClassName:

    def __init__(self):
        self.variable_name = value

The **self** keyword stores the variable inside the object being created.

## Creating Instance Variables

Example:

class Student:

    def __init__(self, name, course):
        self.name = name
        self.course = course

student1 = Student(
    "Alex",
    "Python Development"
)

print(student1.name)
print(student1.course)

Output:

Alex
Python Development

The variables **name** and **course** belong only to **student1**.

## Multiple Objects with Different Data

Each object maintains its own values.

Example:

class Student:

    def __init__(self, name, course):
        self.name = name
        self.course = course

student1 = Student(
    "Alex",
    "Python Development"
)

student2 = Student(
    "Sophia",
    "Cybersecurity"
)

print(student1.name)
print(student2.name)

Output:

Alex
Sophia

Although both objects belong to the same class, each object stores different information.

## Accessing Instance Variables

Instance variables are accessed using **dot notation**.

Syntax:

object_name.variable_name

Example:

print(student1.course)

Output:

Python Development

Dot notation allows us to retrieve information stored inside an object.

## Modifying Instance Variables

Instance variables can also be modified after an object has been created.

Example:

class Student:

    def __init__(self, name):
        self.name = name

student = Student("Alex")

student.name = "Sophia"

print(student.name)

Output:

Sophia

The object's data has been updated successfully.

IMPORTANT: Modifying one object's instance variables does not affect other objects.

## Why Are Instance Variables Important?

Consider a ride-sharing application.

Every driver has:

- Driver Name
- Vehicle Number
- Rating
- Current Location

Every driver object stores different values.

Without instance variables, all drivers would share the same information, making the application useless.

Instance variables allow each object to represent a unique real-world entity.

## Real-World Applications

Instance variables are used in almost every software application.

Examples include:

- Student information systems.
- Banking applications.
- E-commerce platforms.
- Hospital management software.
- Employee management systems.
- Social media applications.
- Cloud infrastructure management.

For example, every product in an online store stores its own name, price, stock quantity, and category using instance variables.

## Advantages of Instance Variables

Using instance variables provides several benefits:

- Every object stores its own data.
- Makes applications flexible.
- Improves code organization.
- Supports reusable classes.
- Represents real-world entities naturally.

## Common Beginner Mistakes

Some common mistakes include:

- Forgetting to use the self keyword.
- Trying to access instance variables without creating an object.
- Assuming all objects share the same values.
- Using unclear variable names.

IMPORTANT: Always access instance variables using an object and dot notation.

## Best Practices

Follow these guidelines:

- Create instance variables inside constructors.
- Use meaningful variable names.
- Store only object-specific information.
- Keep object data organized.
- Initialize all required variables during object creation.

## Key Points

- Instance variables belong to individual objects.
- They are usually created inside the __init__() constructor.
- The self keyword refers to the current object.
- Every object maintains its own copy of instance variables.
- Instance variables represent the state of an object.

IMPORTANT: Instance variables are one of the core building blocks of Object-Oriented Programming because they allow every object to store its own independent information.`,

  examples: [
    {
      title: "Example 1: Creating Instance Variables",

      code: `class Student:

    def __init__(self, name, course):
        self.name = name
        self.course = course

student = Student(
    "Alex",
    "Python Development"
)

print(student.name)
print(student.course)`,

      output: `Alex
Python Development`,
    },

    {
      title: "Example 2: Multiple Objects",

      code: `class Student:

    def __init__(self, name):
        self.name = name

student1 = Student("Alex")
student2 = Student("Sophia")

print(student1.name)
print(student2.name)`,

      output: `Alex
Sophia`,
    },

    {
      title: "Example 3: Modifying an Instance Variable",

      code: `class Employee:

    def __init__(self, department):
        self.department = department

employee = Employee("Cybersecurity")

employee.department = "Cloud Computing"

print(employee.department)`,

      output: `Cloud Computing`,
    },

    {
      title: "Example 4: Accessing Instance Variables",

      code: `class Product:

    def __init__(self, name, price):
        self.name = name
        self.price = price

product = Product(
    "Laptop",
    75000
)

print(product.name)
print(product.price)`,

      output: `Laptop
75000`,
    },
  ],
};

export default lesson4;
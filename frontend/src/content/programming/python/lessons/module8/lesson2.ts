const lesson2 = {
  id: "lesson2",

  title: "Classes and Objects",

  previousLesson: "/lesson/python-development/module8/lesson1",

  nextLesson: "/lesson/python-development/module8/lesson3",

  content: `# Classes and Objects

In the previous lesson, you learned that Object-Oriented Programming organizes software using objects. But before creating objects, we need something that defines what those objects should look like. This is where **classes** come into the picture.

A class acts as a blueprint, while an object is the actual entity created from that blueprint.

For example, an architect first prepares a blueprint before constructing a building. Similarly, programmers first create a class and then use it to create multiple objects.

## Why Do We Need Classes?

Imagine developing an online shopping application.

Without classes, you may create separate variables like:

product1_name
product1_price
product1_stock

product2_name
product2_price
product2_stock

As the number of products increases, managing all these variables becomes difficult.

Instead, we can create a single **Product** class and then create thousands of product objects from it.

IMPORTANT: Classes help organize similar data and behavior into a single reusable template.

## What is a Class?

A class is a blueprint or template used to create objects.

It defines:

- What data an object should store.
- What operations an object can perform.

A class itself does not represent a real object. It only describes the structure.

Syntax:

class ClassName:
    pass

Example:

class Course:
    pass

The class has been created but it does not yet contain any data or methods.

## What is an Object?

An object is an actual instance of a class.

When an object is created, memory is allocated for it, and it becomes an independent entity.

Example:

class Course:
    pass

python_course = Course()
ai_course = Course()

Here, two different objects are created from the same Course class.

Although both belong to the same class, they are separate objects.

## Creating Multiple Objects

One of the biggest advantages of classes is that they allow developers to create multiple objects.

Example:

class Student:
    pass

student1 = Student()
student2 = Student()
student3 = Student()

All three objects belong to the Student class but are completely independent.

This makes software scalable because thousands of objects can be created from a single class.

## Verifying Object Type

Python provides the type() function to determine the class of an object.

Example:

class Course:
    pass

python_course = Course()

print(type(python_course))

Output:

<class '__main__.Course'>

This confirms that the object belongs to the Course class.

## Why Are Classes Important?

Classes provide structure to applications.

Without classes:

- Code becomes disorganized.
- Similar logic gets repeated.
- Managing data becomes difficult.

Using classes provides:

- Better organization
- Code reusability
- Easier maintenance
- Improved scalability

IMPORTANT: Classes are the foundation of Object-Oriented Programming because every object is created from a class.

## Real-World Applications

Classes and objects are used in almost every software application.

Examples include:

- Banking Systems
    - Customer
    - Account
    - Transaction

- Learning Platforms
    - Student
    - Course
    - Instructor

- E-commerce Platforms
    - Product
    - Customer
    - Order

- Hospital Management Systems
    - Doctor
    - Patient
    - Appointment

These applications create thousands or even millions of objects during execution.

## Advantages of Classes and Objects

Using classes and objects provides many benefits:

- Reusable code.
- Better organization.
- Easier debugging.
- Simplified maintenance.
- Improved scalability.
- Natural representation of real-world entities.

## Common Beginner Mistakes

Some common mistakes include:

- Confusing classes with objects.
- Creating unnecessary classes.
- Forgetting that objects are created from classes.
- Giving class names that are not meaningful.

IMPORTANT: Remember that a class is only a blueprint, while an object is the actual entity created from that blueprint.

## Best Practices

Follow these guidelines:

- Use singular nouns for class names.
- Follow PascalCase naming convention.

Examples:

Student
Employee
Course
Product
Vehicle

- Group related information together.
- Design classes around real-world entities.
- Keep classes focused on a single responsibility.

## Key Points

- A class is a blueprint.
- An object is an instance of a class.
- Multiple objects can be created from one class.
- Classes improve organization and reusability.
- Classes form the foundation of Object-Oriented Programming.

IMPORTANT: Almost every modern software framework internally creates and manages thousands of objects, making classes and objects one of the most important concepts in Python programming.`,

  examples: [
    {
      title: "Example 1: Creating a Simple Class",

      code: `class Course:
    pass`,

      output: `A Course class is created successfully.`,
    },

    {
      title: "Example 2: Creating Objects",

      code: `class Course:
    pass

python_course = Course()
ai_course = Course()

print(type(python_course))
print(type(ai_course))`,

      output: `<class '__main__.Course'>
<class '__main__.Course'>`,
    },

    {
      title: "Example 3: Creating Multiple Student Objects",

      code: `class Student:
    pass

student1 = Student()
student2 = Student()
student3 = Student()

print(type(student1))`,

      output: `<class '__main__.Student'>`,
    },

    {
      title: "Example 4: Product Class",

      code: `class Product:
    pass

laptop = Product()
mobile = Product()

print(type(laptop))
print(type(mobile))`,

      output: `<class '__main__.Product'>
<class '__main__.Product'>`,
    },
  ],
};

export default lesson2;
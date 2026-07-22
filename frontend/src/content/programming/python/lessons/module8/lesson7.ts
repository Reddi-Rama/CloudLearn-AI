const lesson7 = {
  id: "lesson7",

  title: "Inheritance",

  previousLesson: "/lesson/python-development/module8/lesson6",

  nextLesson: "/lesson/python-development/module8/lesson8",

  content: `# Inheritance

In the previous lesson, you learned how encapsulation protects an object's internal data. Another important feature of Object-Oriented Programming is **Inheritance**, which allows one class to reuse the properties and methods of another class.

Inheritance is one of the four pillars of Object-Oriented Programming and helps developers avoid writing the same code repeatedly. Instead of creating similar code in multiple classes, a child class can inherit common features from a parent class.

This makes programs easier to maintain, extend, and organize.

## Why Do We Need Inheritance?

Imagine developing an online learning platform.

Every user has common information such as:

- Name
- Email
- Login Functionality

The platform also has different types of users:

- Student
- Instructor
- Administrator

All of them need the common features listed above. Writing the same code for every class would create unnecessary duplication.

Inheritance allows these common features to be written once in a parent class and reused by child classes.

IMPORTANT: Inheritance promotes code reuse and reduces duplication.

## What is Inheritance?

Inheritance is the process by which one class acquires the properties and methods of another class.

There are two main types of classes:

- Parent Class (Base Class)
- Child Class (Derived Class)

The child class automatically inherits the members of the parent class and can also add its own features.

## Creating a Parent and Child Class

Example:

class User:

    def login(self):
        print("User Logged In")

class Student(User):
    pass

student = Student()

student.login()

Output:

User Logged In

The Student class inherited the login() method from the User class.

## Adding New Features to the Child Class

A child class can also define its own methods.

Example:

class User:

    def login(self):
        print("Login Successful")

class Student(User):

    def submit_assignment(self):
        print("Assignment Submitted")

student = Student()

student.login()
student.submit_assignment()

Output:

Login Successful
Assignment Submitted

The child class can use both inherited methods and its own methods.

## Why is Inheritance Important?

Inheritance offers several advantages:

- Reduces duplicate code.
- Makes programs easier to maintain.
- Encourages code reuse.
- Simplifies software development.
- Makes applications easier to extend.

Large applications often contain hundreds of related classes that share common functionality through inheritance.

IMPORTANT: Inheritance allows developers to write common functionality only once.

## Understanding the "Is-A" Relationship

Inheritance should be used only when an **"is-a"** relationship exists.

Examples:

- Student is a User.
- Car is a Vehicle.
- SavingsAccount is a BankAccount.
- Manager is an Employee.

Incorrect examples:

- Student is a Classroom.
- Car is an Engine.

Choosing the correct relationship helps create better software designs.

## Real-World Applications

Inheritance is widely used in:

- Banking applications.
- Educational platforms.
- Employee management systems.
- E-commerce platforms.
- Hospital management systems.
- Game development.
- Cloud computing platforms.
- Machine learning frameworks.

For example, in a banking application, different account types such as SavingsAccount and CurrentAccount inherit common features from the BankAccount class.

## Advantages of Inheritance

Using inheritance provides several benefits:

- Promotes code reusability.
- Reduces code duplication.
- Improves maintainability.
- Makes applications scalable.
- Simplifies software architecture.

## Common Beginner Mistakes

Some common mistakes include:

- Using inheritance when classes are unrelated.
- Creating very deep inheritance hierarchies.
- Duplicating code instead of inheriting.
- Forgetting that child classes inherit parent methods.

IMPORTANT: Use inheritance only when there is a genuine "is-a" relationship between classes.

## Best Practices

Follow these guidelines while using inheritance:

- Place common functionality inside parent classes.
- Keep inheritance hierarchies simple.
- Avoid unnecessary inheritance.
- Use meaningful class names.
- Extend parent classes only when required.

## Key Points

- Inheritance allows one class to inherit another class.
- The parent class provides common functionality.
- The child class can reuse and extend parent features.
- Inheritance promotes code reuse.
- Modern software systems rely heavily on inheritance.

IMPORTANT: Inheritance is one of the most powerful concepts in Object-Oriented Programming because it enables developers to build scalable applications by reusing existing code instead of rewriting it.`,

  examples: [
    {
      title: "Example 1: Basic Inheritance",

      code: `class User:

    def login(self):
        print("User Logged In")

class Student(User):
    pass

student = Student()

student.login()`,

      output: `User Logged In`,
    },

    {
      title: "Example 2: Child Class with Additional Method",

      code: `class User:

    def login(self):
        print("Login Successful")

class Student(User):

    def submit_assignment(self):
        print("Assignment Submitted")

student = Student()

student.login()
student.submit_assignment()`,

      output: `Login Successful
Assignment Submitted`,
    },

    {
      title: "Example 3: Vehicle Inheritance",

      code: `class Vehicle:

    def start(self):
        print("Vehicle Started")

class Car(Vehicle):
    pass

car = Car()

car.start()`,

      output: `Vehicle Started`,
    },

    {
      title: "Example 4: Employee Inheritance",

      code: `class Employee:

    def work(self):
        print("Employee Working")

class Manager(Employee):

    def conduct_meeting(self):
        print("Meeting Started")

manager = Manager()

manager.work()
manager.conduct_meeting()`,

      output: `Employee Working
Meeting Started`,
    },
  ],
};

export default lesson7;
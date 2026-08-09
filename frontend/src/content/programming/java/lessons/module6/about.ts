const about = {

  title: "Module 6: Inheritance and Polymorphism",

  description: `

# About This Module


Imagine a university.


Every person in the university has some common information:


• Name

• Age

• Address



However, different people also have their own unique characteristics.



A Student has:


• Roll Number

• Department

• Marks



A Teacher has:


• Employee ID

• Subject

• Salary



A Principal has:


• Office Number

• Administrative Responsibilities



Instead of writing the same code repeatedly for every class, Java provides Inheritance, which allows one class to reuse the properties and methods of another class.



As software becomes larger, developers also need flexibility.



Suppose every employee in a company has a calculateSalary() method.



Although the method name is the same, the implementation differs:


• Full-time employee

• Part-time employee

• Contract employee



Java solves this using Polymorphism, allowing one interface to have multiple implementations.



Inheritance and Polymorphism are two of the most powerful features of Object-Oriented Programming.



They promote:


• Code reuse

• Flexibility

• Scalability

• Maintainability



These concepts are essential in professional software development.



By the end of this module, you will be able to:


• Design class hierarchies.

• Reuse existing code effectively.

• Override methods.

• Achieve runtime polymorphism.

• Apply abstraction in real-world Java applications.



`,

  learningObjectives: [

    "Understand inheritance and why it is needed",

    "Learn parent and child class relationships",

    "Use the extends keyword",

    "Understand different types of inheritance",

    "Implement method overriding",

    "Use the super keyword",

    "Understand compile-time and runtime polymorphism",

    "Apply upcasting and downcasting safely",

    "Use final keyword appropriately",

    "Create abstract classes and interfaces",

    "Understand the Object class",

    "Perform runtime type checking using instanceof",

    "Create nested classes",

    "Clone Java objects",

    "Build professional object-oriented Java applications"

  ],


  industryPerspective: `

# Industry Perspective


Inheritance and Polymorphism are fundamental concepts in enterprise Java development.



Frameworks such as:


• Spring Boot

• Hibernate

• JavaFX

• Android SDK

• Jakarta EE



use inheritance extensively to provide reusable base classes and polymorphism to build flexible, extensible systems.



Mastering this module prepares you for advanced Java topics such as:


• Collections Framework

• Exception Handling

• Multithreading

• JDBC

• Spring Boot

• Design Patterns



where inheritance and polymorphism are used extensively.



`,

  topics: [

    "Introduction to Inheritance",

    "Types of Inheritance in Java",

    "The extends Keyword",

    "Method Overriding",

    "The super Keyword",

    "Polymorphism",

    "Upcasting and Downcasting",

    "The final Keyword",

    "Abstract Classes",

    "Interfaces",

    "The Object Class",

    "The instanceof Operator",

    "Nested Classes",

    "Object Cloning",

    "Employee Management System Project"

  ]

};


export default about;
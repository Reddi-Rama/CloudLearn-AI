const lesson1 = {

  id: "lesson1",

  title: "Introduction to Object-Oriented Programming (OOP)",

  content: `

# Introduction to Object-Oriented Programming (OOP)


## Introduction


Object-Oriented Programming (OOP) is one of the most important programming concepts used in modern software development.


Java is a powerful object-oriented programming language designed around the concept of objects.



OOP allows developers to organize programs by representing real-world entities as objects.



Examples of real-world entities:


- Student.
- Bank Account.
- Employee.
- Product.
- Vehicle.



Each object contains:


- Data (attributes).
- Behavior (methods).



# What is Object-Oriented Programming?


Object-Oriented Programming is a programming approach where programs are designed using objects that interact with each other.



An object represents a real-world entity.



Example:


A Student object may contain:


Data:


- Name.
- Roll Number.
- Marks.



Behavior:


- Calculate Result.
- Display Details.



In Java:


Student


↓

Attributes


- name
- rollNumber
- marks


↓

Methods


- calculateResult()
- displayDetails()



# Why Was OOP Introduced?


Before OOP, many programs were developed using procedural programming.



Procedural programming focuses mainly on:


- Functions.
- Procedures.
- Data processing.



As applications became larger, procedural programs became difficult to:


- Maintain.
- Modify.
- Debug.
- Extend.



OOP solved these problems by combining data and methods into objects.



# Procedural Programming vs Object-Oriented Programming



## Procedural Programming


Focus:


Functions and procedures.



Data and functions are separate.



Example:


calculateSalary()


printReport()



## Object-Oriented Programming


Focus:


Objects.



Data and methods are combined together.



Example:


Employee object:


Data:


- employeeName
- salary


Methods:


- calculateSalary()
- displayReport()



# Advantages of OOP



## 1. Code Reusability


OOP allows existing code to be reused.


Reusable classes and objects reduce development time.



Example:


A Payment class can be reused in multiple applications.



# 2. Data Security


OOP protects data using concepts like encapsulation.



Sensitive information can be hidden from direct access.



Example:


Bank account balance should not be modified directly.



# 3. Easy Maintenance


Large applications become easier to manage because code is organized into classes.



# 4. Flexibility


OOP allows developers to modify and extend applications easily.



# 5. Real-World Modeling


OOP represents real-world objects naturally.



Example:


Hospital System:


Objects:


- Patient.
- Doctor.
- Appointment.



# Core Concepts of OOP


Java OOP is based on four major concepts:



## 1. Encapsulation


Encapsulation means wrapping data and methods together into a single unit called a class.



Example:


A BankAccount class contains:


Data:


- accountNumber.
- balance.


Methods:


- deposit().
- withdraw().



Benefits:


- Data protection.
- Better control.



# 2. Inheritance


Inheritance allows one class to acquire properties and behaviors from another class.



Example:


Parent Class:


Vehicle



Child Class:


Car



Car can use features of Vehicle.



Benefits:


- Code reuse.
- Reduced duplication.



# 3. Polymorphism


Polymorphism means one thing having multiple forms.



Example:


A payment method may work differently for:


- Credit Card.
- UPI.
- Net Banking.



Benefits:


- Flexibility.
- Easy extension.



# 4. Abstraction


Abstraction means hiding internal implementation details and showing only important information.



Example:


ATM machine:


User sees:


- Withdraw.
- Deposit.



Internal banking process is hidden.



# Classes and Objects Relationship


A class is a blueprint.


An object is an instance of a class.



Example:


Class:


Car



Objects:


- Car1.
- Car2.
- Car3.



A single class can create multiple objects.



# Real-World Example of OOP


Consider an Online Shopping System.



Classes:


Product


Customer


Cart


Order



Product Object:


Data:


- Product name.
- Price.
- Category.



Methods:


- Display product.
- Calculate discount.



Customer Object:


Data:


- Name.
- Email.



Methods:


- Place order.
- View history.



# OOP Example in Java


class Student

{

    String name;

    int marks;


    void display()

    {

        System.out.println(name);

        System.out.println(marks);

    }

}



Here:


Student is a class.



name and marks are attributes.



display() is a method.



# Creating Objects


Objects are created using the new keyword.



Example:


class Student

{

    String name;


    void display()

    {

        System.out.println(name);

    }


    public static void main(String[] args)

    {

        Student student1 = new Student();


        student1.name = "Alex";


        student1.display();

    }

}



Output:


Alex



# OOP Example: Banking System


Class:


BankAccount



Attributes:


- Account number.
- Balance.



Methods:


- Deposit.
- Withdraw.
- Check balance.



Objects:


- Customer account 1.
- Customer account 2.



# OOP Example: E-Commerce System


Class:


Product



Attributes:


- Product name.
- Price.



Methods:


- Calculate discount.
- Display product.



Objects:


- Laptop product.
- Mobile product.



# OOP Example: Student Management System


Class:


Student



Attributes:


- Name.
- Roll number.
- Marks.



Methods:


- Calculate grade.
- Display result.



Objects:


- Student1.
- Student2.



# Advantages of Java as an OOP Language


Java provides:


- Classes.
- Objects.
- Encapsulation.
- Inheritance.
- Polymorphism.
- Abstraction.



These features make Java suitable for large-scale software development.



# Applications of OOP


## Enterprise Applications


Used for:


- Banking systems.
- Business applications.
- Management software.



## Android Applications


Android development heavily uses Java OOP concepts.



## Web Applications


Frameworks like Spring use OOP principles.



## Game Development


Games represent:


- Players.
- Characters.
- Weapons.


as objects.



## Artificial Intelligence Applications


AI systems use objects for:


- Models.
- Data.
- Processing components.



# Common Mistakes


## Thinking Class and Object are Same


Class is a blueprint.


Object is the actual instance.



## Creating Very Large Classes


Classes should have clear responsibilities.



## Ignoring Object Design


Good object design improves application quality.



# Best Practices


Follow these practices:


- Create meaningful classes.
- Give objects clear responsibilities.
- Keep data protected.
- Reuse existing classes.
- Design programs around real-world entities.



# Key Points


Remember:


- OOP organizes programs using objects.
- Objects contain data and behavior.
- Classes are blueprints for objects.
- Java supports all major OOP concepts.
- Encapsulation protects data.
- Inheritance improves reuse.
- Polymorphism provides flexibility.
- Abstraction hides complexity.



# Summary


Object-Oriented Programming is the foundation of professional Java development.


It helps developers build:


- Large applications.
- Maintainable software.
- Reusable components.
- Real-world software systems.



Understanding OOP is essential before learning advanced Java concepts such as inheritance, polymorphism, interfaces, and design patterns.

`

};


export default lesson1;
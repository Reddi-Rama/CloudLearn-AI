const lesson1 = {

  id: "lesson1",

  title: "Introduction to Object-Oriented Programming",

  content: `

# Introduction to Object-Oriented Programming


## Introduction

Object-Oriented Programming, commonly known as OOP, is a programming approach that organizes software using objects.

Instead of focusing only on functions and procedures, OOP focuses on objects that contain both data and behavior.


An object represents a real-world entity in a program.


Examples:

- Student
- Bank Account
- Employee
- Vehicle
- Product


Each object contains:

- Data
- Functions that operate on that data


## Why Do We Need OOP?

Traditional programming approaches mainly focus on functions.

For small programs, this approach works well.

However, large software applications contain thousands of lines of code and huge amounts of data.

Managing such applications becomes difficult.


OOP solves this problem by combining related data and functions into a single unit called an object.


## Procedural Programming vs Object-Oriented Programming


Procedural Programming:

- Focuses on functions.
- Data and functions are separate.
- Suitable for small applications.


Object-Oriented Programming:

- Focuses on objects.
- Data and functions are combined.
- Suitable for large applications.


## What is an Object?

An object is an instance of a class that represents a real-world entity.


An object contains:


### Data

Information stored inside the object.


Example:

Student object data:

- Roll Number
- Name
- CGPA


### Behavior

Actions performed by the object.


Example:

Student object behavior:

- Register Course
- View Result
- Update Details


## What is a Class?

A class is a blueprint used to create objects.

It defines:

- Data members
- Member functions


Example:


class Student

{

    int rollNumber;

    string name;

};


Here Student is a class.


Objects can be created from this class.


## Basic Concepts of OOP


### Encapsulation

Encapsulation means combining data and functions inside a single unit.

It also protects data from unauthorized access.


Example:

Bank account:

Data:

- Balance


Functions:

- Deposit()
- Withdraw()



### Inheritance

Inheritance allows one class to acquire properties of another class.


Example:


Vehicle


|

Car


The Car class can reuse features of Vehicle.


### Polymorphism

Polymorphism means one operation having different behaviors.


Example:

A payment system may support:

- Credit Card Payment
- UPI Payment
- Cash Payment



### Abstraction

Abstraction hides unnecessary implementation details and shows only required information.


Example:

A user can drive a car without knowing the internal engine mechanism.


## Advantages of OOP


### Code Reusability

Existing classes can be reused using inheritance.


### Better Organization

Large programs are divided into smaller objects.


### Security

Data can be protected using access control.


### Easy Maintenance

Changes can be made easily without affecting the complete system.


### Scalability

Large applications can be expanded easily.


## Applications of OOP


OOP is used in:


### Banking Systems

Objects:

- Customer
- Account
- Transaction


### Game Development

Objects:

- Player
- Weapon
- Character


### E-Commerce Applications

Objects:

- Product
- Customer
- Order


### Hospital Management Systems

Objects:

- Patient
- Doctor
- Appointment


## Example of Object-Oriented Design


Consider a Student class:


class Student

{

    int rollNumber;

    string name;


    void display()

    {

    }

};


Objects:


Student student1;

Student student2;


Each object stores different information.


## Importance of OOP in C++


C++ is one of the most popular object-oriented programming languages.

OOP features make C++ suitable for:

- Enterprise software.
- Game engines.
- Operating systems.
- Embedded systems.


## Key Points


Remember:

- OOP is based on objects.
- Classes are blueprints.
- Objects are real instances.
- Objects contain data and behavior.
- OOP improves software design.


Object-Oriented Programming is the foundation of modern software development and an essential concept for professional C++ programmers.

`

};


export default lesson1;
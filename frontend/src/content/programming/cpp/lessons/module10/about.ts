const about = {

  id: "about",

  title: "About This Module",

  content: `

# Module 10: Inheritance


## About This Module


Inheritance is one of the most important concepts in Object-Oriented Programming.

In real-world software development, many objects share common characteristics but also have their own unique features.

Creating separate classes with repeated code increases development time and makes applications difficult to maintain.

C++ provides Inheritance to solve this problem by allowing one class to acquire the properties and behaviors of another class.



## What is Inheritance?


Inheritance is an object-oriented programming mechanism that allows one class to reuse the features of another class.


The existing class is called:


Base Class

or

Parent Class



The new class that inherits the features is called:


Derived Class

or

Child Class



A derived class can:

- Reuse existing data members.
- Reuse member functions.
- Add new features.
- Modify existing behavior.



## Real-World Example


Consider a university management system.


A common Person class can store:


- Name
- Age
- Address
- Mobile Number


A Student class can inherit Person and add:


- Roll Number
- Course
- CGPA


A Faculty class can inherit Person and add:


- Employee ID
- Department
- Salary


Instead of writing common information repeatedly, inheritance allows code reuse.



## Why Do We Need Inheritance?


Inheritance provides:


### Code Reusability

Existing code can be reused instead of rewriting similar functionality.


### Reduced Duplicate Code

Common features are written once in the base class.


### Better Maintainability

Changes in the base class can automatically affect derived classes.


### Easy Expansion

New classes can be created by extending existing classes.



## Types of Inheritance in C++


C++ supports different inheritance models:


### Single Inheritance

One derived class inherits from one base class.


Example:

Person → Student



### Multiple Inheritance

One derived class inherits from multiple base classes.


Example:

Teacher + Researcher → Professor



### Multilevel Inheritance

A derived class becomes the base class for another class.


Example:

Person → Employee → Manager



### Hierarchical Inheritance

Multiple derived classes inherit from one base class.


Example:

Person → Student

Person → Teacher

Person → Staff



### Hybrid Inheritance

Combination of multiple inheritance types.



## Important Concepts Covered


In this module, you will learn:


### Inheritance Types

Different ways classes can inherit from each other.



### Inheritance Modes

How public, protected, and private inheritance affect accessibility.



### Diamond Problem

A common ambiguity issue in multiple inheritance.



### Virtual Base Classes

A solution to remove duplicate base class copies.



### Function Overriding

Allowing derived classes to provide their own implementation.



### Virtual Functions

Enabling runtime polymorphism.



### Pure Virtual Functions

Creating common interfaces for derived classes.



### Abstract Classes

Designing classes that act as blueprints.



## Applications of Inheritance


Inheritance is widely used in:


### Banking Systems

Account

↓

Savings Account

Current Account



### Hospital Management Systems

Person

↓

Doctor

Patient

Nurse



### Educational Systems

Person

↓

Student

Faculty

Administrator



### Enterprise Applications

Employee

↓

Manager

Developer

HR Executive



## Advantages of Inheritance


Inheritance provides:


- Code reusability.
- Better software organization.
- Reduced development time.
- Easier maintenance.
- Scalable application design.
- Support for polymorphism.



## Learning Outcome


After completing this module, you will understand:


- How inheritance works in C++.
- Different inheritance models.
- Access control during inheritance.
- Solving inheritance-related problems.
- Runtime polymorphism using virtual functions.
- Designing reusable class hierarchies.



## Importance in Professional Development


Inheritance and polymorphism are widely used in modern software systems.

They help developers create applications that are:

- Flexible.
- Maintainable.
- Extensible.
- Reusable.


A strong understanding of inheritance is essential for becoming a professional C++ developer.

`

};


export default about;
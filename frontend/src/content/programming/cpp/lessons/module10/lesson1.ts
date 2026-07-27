const lesson1 = {

  id: "lesson1",

  title: "Introduction to Inheritance",

  content: `

# Introduction to Inheritance


## Introduction


One of the greatest strengths of Object-Oriented Programming is code reusability.

In real-world software development, many objects share common characteristics but also have their own unique features.

Creating separate classes for every object without reusing common functionality leads to:

- Duplicate code.
- Increased development time.
- Difficult maintenance.


To overcome these problems, C++ provides Inheritance.


## What is Inheritance?


Inheritance is an Object-Oriented Programming mechanism that allows one class to acquire the properties and behaviors of another class.


The existing class is called:


Base Class

or

Parent Class



The class that inherits the features is called:


Derived Class

or

Child Class



A derived class can:

- Reuse accessible data members.
- Reuse member functions.
- Add new features.
- Extend existing functionality.



## Basic Terminology


### Base Class


A class whose properties are inherited by another class is called a base class.


Example:


class Person

{

};



### Derived Class


A class that inherits properties from another class is called a derived class.


Example:


class Student : public Person

{

};



## Syntax of Inheritance


class BaseClass

{

    // Members

};


class DerivedClass : accessSpecifier BaseClass

{

    // Additional Members

};



The access specifier can be:

- public
- protected
- private



## Real-World Analogy


Consider a university management system.


Every person has common information:


- Name
- Age
- Address
- Mobile Number


A Student has additional details:


- Roll Number
- Course
- CGPA


A Faculty member has:


- Employee ID
- Department
- Salary


Instead of creating separate classes with repeated information, a common Person class can be created.

Student and Faculty classes can inherit common properties from Person.



## Example Program


#include<iostream>

using namespace std;


class Person

{

public:


    string name;

    int age;


    void displayPerson()

    {

        cout << name << endl;

        cout << age << endl;

    }

};



class Student : public Person

{

public:


    int rollNumber;


    void displayStudent()

    {

        displayPerson();

        cout << rollNumber;

    }

};



int main()

{

    Student student1;


    student1.name = "Alex";

    student1.age = 20;

    student1.rollNumber = 101;


    student1.displayStudent();


    return 0;

}



## Advantages of Inheritance


Inheritance provides:


### Code Reusability

Existing functionality can be reused without rewriting code.



### Reduced Duplicate Code

Common features are written only once.



### Better Maintenance

Changes in the base class can be reflected in derived classes.



### Easy Expansion

New classes can be created easily.



### Supports Polymorphism

Inheritance forms the foundation for runtime polymorphism.



## Applications of Inheritance


Inheritance is used in:


### Banking Applications

Account

↓

Savings Account

Current Account



### Hospital Systems

Person

↓

Doctor

Patient



### Educational Systems

Person

↓

Student

Faculty



### Enterprise Software

Employee

↓

Manager

Developer



## Key Points


Remember:


- Inheritance allows one class to acquire another class features.
- Base class provides common functionality.
- Derived class extends existing functionality.
- It improves code reuse and maintainability.


Inheritance is one of the most powerful features of C++ that helps developers build scalable and organized software systems.

`

};


export default lesson1;
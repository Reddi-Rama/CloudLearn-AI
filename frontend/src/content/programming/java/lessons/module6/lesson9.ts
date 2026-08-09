const lesson9 = {

  id: "lesson9",

  title: "Abstract Classes in Java",

  content: `

# Abstract Classes in Java


## Introduction


Abstraction is one of the four major principles of Object-Oriented Programming.



The four OOP principles are:


- Encapsulation.
- Inheritance.
- Polymorphism.
- Abstraction.



Abstraction focuses on hiding implementation details and showing only essential information.



Java provides abstract classes and interfaces to achieve abstraction.



# What is Abstraction?


Abstraction means hiding internal implementation details and showing only the required functionality.



Example:


When driving a car:


You use:


- Accelerator.
- Brake.
- Steering.



You do not need to know:


- How the engine works internally.
- How fuel is processed.



The internal complexity is hidden.



# What is an Abstract Class?


An abstract class is a class declared using the keyword:


abstract



An abstract class can contain:


- Abstract methods.
- Normal methods.
- Variables.
- Constructors.



Syntax:


abstract class ClassName

{

    // members

}



# Abstract Method


An abstract method is a method without a body.



Syntax:


abstract returnType methodName();



Example:


abstract void display();



The child class must provide the implementation.



# Creating Abstract Class


Example:


abstract class Animal

{

    abstract void sound();


    void eat()

    {

        System.out.println("Animal eats");

    }

}



Here:


sound() is an abstract method.


eat() is a normal method.



# Implementing Abstract Class


A child class extends the abstract class and provides implementation.



Example:


class Dog extends Animal

{

    void sound()

    {

        System.out.println("Dog barks");

    }

}



# Complete Abstract Class Example


abstract class Animal

{

    abstract void sound();


    void sleep()

    {

        System.out.println("Animal sleeps");

    }

}



class Dog extends Animal

{

    void sound()

    {

        System.out.println("Dog barks");

    }


    public static void main(String[] args)

    {

        Dog dog = new Dog();


        dog.sound();

        dog.sleep();

    }

}



Output:


Dog barks

Animal sleeps



# Can We Create Objects of Abstract Classes?


No.



Abstract classes cannot be instantiated directly.



Example:


Animal animal = new Animal();



This gives a compilation error.



Reason:


Abstract classes contain incomplete methods.



# Using Abstract Class Reference


Although abstract classes cannot create objects, they can have references.



Example:


Animal animal = new Dog();



This supports runtime polymorphism.



# Abstract Class with Constructor


Abstract classes can have constructors.



Example:


abstract class Animal

{

    Animal()

    {

        System.out.println("Animal Constructor");

    }

}



Child classes call the abstract class constructor.



# Constructor Execution Order


When creating child object:


Dog dog = new Dog();



Execution:


1. Abstract class constructor executes.


2. Child class constructor executes.



# Abstract Class with Variables


Abstract classes can contain variables.



Example:


abstract class Employee

{

    String name;

}



Child classes can use inherited variables.



# Abstract Class Example: Banking System


Abstract Class:


Account



Methods:


abstract calculateInterest()



Child Classes:


SavingsAccount


CurrentAccount



Each child provides different interest calculation.



Example:


abstract class Account

{

    abstract void calculateInterest();

}



class SavingsAccount extends Account

{

    void calculateInterest()

    {

        System.out.println("Savings Interest");

    }

}



# Abstract Class Example: E-Commerce System


Abstract Class:


Payment



Abstract Method:


processPayment()



Child Classes:


CardPayment


UPIPayment



Each provides its own implementation.



# Abstract Class Example: Student Management System


Abstract Class:


Person



Abstract Method:


displayDetails()



Child Classes:


Student


Teacher



Each displays details differently.



# Rules of Abstract Classes



## Rule 1


An abstract class must be declared using abstract keyword.



## Rule 2


An abstract class can have abstract and non-abstract methods.



## Rule 3


An abstract class cannot be instantiated.



## Rule 4


A child class must implement all abstract methods.



## Rule 5


If child does not implement methods, it must also be abstract.



# Abstract Class with Multiple Methods


Example:


abstract class Shape

{

    abstract void draw();

    abstract void calculateArea();

}



Child classes implement both methods.



# Abstract Class vs Normal Class



## Abstract Class


- Declared using abstract keyword.
- Cannot create objects.
- Can contain abstract methods.
- Used for incomplete designs.



## Normal Class


- Regular class.
- Objects can be created.
- Contains complete implementation.



# Abstract Class vs Interface



## Abstract Class


- Can have constructors.
- Can have instance variables.
- Can contain normal methods.
- Supports partial abstraction.



## Interface


- Mainly defines a contract.
- Supports multiple inheritance.
- Used for complete abstraction.



# Advantages of Abstract Classes



## Code Reusability


Common functionality can be written once.



## Better Design


Defines common behavior for related classes.



## Supports Polymorphism


Parent references can represent child objects.



## Security


Hides implementation details.



# Common Mistakes



## Creating Object of Abstract Class


Not allowed.



## Forgetting to Implement Abstract Methods


Child class becomes invalid.



## Using Abstract Classes for Unrelated Classes


Abstract classes should represent common behavior.



# Best Practices


Follow these practices:


- Use abstract classes for closely related classes.
- Keep common functionality in parent class.
- Use meaningful abstract methods.
- Combine with inheritance and polymorphism.
- Use interfaces when multiple behaviors are required.



# Real-World Applications



## Banking Systems


Abstract Class:


Account



Child Classes:


SavingsAccount


CurrentAccount



## E-Commerce Systems


Abstract Class:


Payment



Child Classes:


CardPayment


UPIPayment



## Education Systems


Abstract Class:


Person



Child Classes:


Student


Teacher



# Key Points


Remember:


- Abstract classes provide abstraction.
- Declared using abstract keyword.
- Cannot create objects directly.
- Can contain abstract and normal methods.
- Child classes implement abstract methods.
- Abstract classes support inheritance and polymorphism.



# Summary


Abstract classes allow developers to create incomplete base classes that define common behavior for related classes.


They improve software design by hiding complexity, encouraging code reuse, and supporting flexible object-oriented programming.

`

};


export default lesson9;
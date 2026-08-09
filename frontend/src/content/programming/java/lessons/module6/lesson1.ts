const lesson1 = {

  id: "lesson1",

  title: "Introduction to Inheritance in Java",

  content: `

# Introduction to Inheritance in Java


## Introduction


Inheritance is one of the most important concepts of Object-Oriented Programming (OOP).



It allows one class to acquire the properties and behaviors of another class.



Inheritance helps developers:


- Reuse existing code.
- Reduce code duplication.
- Create relationships between classes.
- Build flexible applications.



In Java, inheritance allows a new class to use the fields and methods of an existing class.



# What is Inheritance?


Inheritance is the mechanism by which one class acquires the properties and behaviors of another class.



The existing class is called:


Parent Class / Super Class / Base Class



The new class that inherits from the parent class is called:


Child Class / Sub Class / Derived Class



Example:



Parent Class:


Animal



Child Class:


Dog



A Dog inherits common features of Animal.



# Real-World Example of Inheritance


Consider different types of vehicles.



Common features:


- Speed.
- Color.
- Engine.



These features can be placed inside a Vehicle class.



Vehicle:


- start()
- stop()
- accelerate()



Child classes:


Car


Bike


Truck



Each child class can reuse Vehicle features.



# Why Do We Need Inheritance?


Without inheritance:


Every class must define common properties again and again.



Example:


Car class:


- speed
- color
- start()



Bike class:


- speed
- color
- start()



This creates duplicate code.



With inheritance:


Vehicle class:


- speed
- color
- start()



Car inherits Vehicle.


Bike inherits Vehicle.



Code becomes reusable.



# Basic Syntax of Inheritance


Java uses the extends keyword for inheritance.



Syntax:


class ChildClass extends ParentClass

{

    // child class members

}



Example:


class Animal

{

    void eat()

    {

        System.out.println("Eating");

    }

}



class Dog extends Animal

{

    void bark()

    {

        System.out.println("Barking");

    }

}



Here:


Animal is the parent class.


Dog is the child class.



# Accessing Parent Class Members


A child class can access inherited members directly.



Example:


class Animal

{

    String name = "Animal";


    void eat()

    {

        System.out.println("Eating");

    }

}



class Dog extends Animal

{

    void display()

    {

        System.out.println(name);

        eat();

    }

}



Output:


Animal

Eating



# Inheritance Relationship


Inheritance represents an "is-a" relationship.



Examples:


Dog is an Animal.


Car is a Vehicle.


Student is a Person.



If the relationship does not represent "is-a", inheritance should not be used.



# Types of Inheritance in Java


Java supports different inheritance structures:



## Single Inheritance


One child class inherits from one parent class.



Example:


Animal


  |

 Dog



## Multilevel Inheritance


A class inherits from another inherited class.



Example:


Animal


  |

Dog


  |

Puppy



## Hierarchical Inheritance


Multiple child classes inherit from one parent class.



Example:


       Animal

       /   \

     Dog   Cat



## Multiple Inheritance


One class inherits from multiple classes.



Java does not support multiple inheritance through classes because it can create ambiguity.



However, Java supports multiple inheritance through interfaces.



# Simple Inheritance Example


class Vehicle

{

    void start()

    {

        System.out.println("Vehicle starts");

    }

}



class Car extends Vehicle

{

    void drive()

    {

        System.out.println("Car is driving");

    }

}



class Main

{

    public static void main(String[] args)

    {

        Car car = new Car();


        car.start();

        car.drive();

    }

}



Output:


Vehicle starts

Car is driving



# How Inheritance Works in Memory


Example:


Car car = new Car();



Memory contains:


Car Object:


Inherited Vehicle members


+

Car own members



The child object contains parent features also.



# Inheritance Example: Banking System


Parent Class:


Account



Common fields:


- Account number.
- Balance.



Methods:


- Deposit.
- Withdraw.



Child Classes:


SavingsAccount


CurrentAccount



They inherit common account operations.



# Inheritance Example: E-Commerce System


Parent Class:


Product



Common fields:


- Product name.
- Price.



Child Classes:


ElectronicProduct


ClothingProduct



They inherit product details.



# Inheritance Example: Student Management System


Parent Class:


Person



Fields:


- Name.
- Age.



Child Class:


Student



Additional fields:


- Roll number.
- Marks.



# Advantages of Inheritance



## Code Reusability


Existing code can be reused.



## Less Duplication


Common features are written once.



## Easy Maintenance


Changes in parent class can affect child classes automatically.



## Better Organization


Classes are arranged logically.



## Extensibility


New features can be added easily.



# Common Mistakes



## Using Inheritance for Wrong Relationships


Not every class relationship requires inheritance.



## Creating Deep Inheritance Hierarchies


Too many levels make code difficult.



## Making Parent Classes Too Large


Parent classes should contain common features only.



# Best Practices


Follow these practices:


- Use inheritance only for "is-a" relationships.
- Keep parent classes focused.
- Avoid unnecessary inheritance.
- Use meaningful class names.
- Prefer composition when inheritance is not suitable.



# Real-World Applications



## Banking Applications


Account


↓

SavingsAccount



Account


↓

LoanAccount



## E-Commerce Applications


Product


↓

ElectronicProduct



Product


↓

ClothingProduct



## Education Applications


Person


↓

Student



Person


↓

Teacher



# Key Points


Remember:


- Inheritance allows one class to acquire another class properties.
- Parent class provides common features.
- Child class extends parent functionality.
- Java uses extends keyword.
- Inheritance improves code reuse.
- Inheritance represents an "is-a" relationship.



# Summary


Inheritance is a powerful OOP feature that allows developers to create relationships between classes and reuse existing code.


By using inheritance correctly, Java applications become more organized, flexible, and easier to maintain.

`

};


export default lesson1;
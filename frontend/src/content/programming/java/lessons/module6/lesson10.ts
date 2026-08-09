const lesson10 = {

  id: "lesson10",

  title: "Interfaces in Java",

  content: `

# Interfaces in Java


## Introduction


Interfaces are one of the most important features of Object-Oriented Programming in Java.



They are used to achieve:


- Abstraction.
- Multiple inheritance.
- Loose coupling.
- Flexible software design.



An interface defines a contract that classes must follow.



It tells:


"What a class should do"



but not:


"How a class should do it".



# What is an Interface?


An interface is a blueprint of a class that contains method declarations and constants.



A class implements an interface and provides the method definitions.



Syntax:


interface InterfaceName

{

    // abstract methods

}



Example:


interface Animal

{

    void sound();

}



Here:


sound() defines behavior but does not provide implementation.



# Implementing an Interface


A class uses the keyword:


implements



to use an interface.



Syntax:


class ClassName implements InterfaceName

{

    // method implementation

}



Example:


interface Animal

{

    void sound();

}



class Dog implements Animal

{

    public void sound()

    {

        System.out.println("Dog barks");

    }

}



# Complete Interface Example


interface Animal

{

    void sound();

}



class Dog implements Animal

{

    public void sound()

    {

        System.out.println("Dog barks");

    }


    public static void main(String[] args)

    {

        Dog dog = new Dog();


        dog.sound();

    }

}



Output:


Dog barks



# Why Do We Need Interfaces?


Interfaces solve many design problems.



Without interfaces:


A program becomes tightly connected to specific classes.



Example:


Payment system directly depends on CreditCard class.



Adding new payment methods becomes difficult.



With interfaces:


Payment interface:


pay()



Implementations:


CreditCardPayment


UPIPayment



New payment methods can be added easily.



# Interface Methods


Traditionally, interfaces contain:


- Abstract methods.
- Constants.



Example:


interface Vehicle

{

    void start();

}



The implementing class must provide the implementation.



# Interface Variables


Variables inside interfaces are automatically:



- public.
- static.
- final.



Example:


interface Student

{

    int MAX_MARKS = 100;

}



Equivalent to:


public static final int MAX_MARKS = 100;



# Interface Example with Multiple Classes


interface Payment

{

    void pay();

}



class CardPayment implements Payment

{

    public void pay()

    {

        System.out.println("Card Payment");

    }

}



class UPIPayment implements Payment

{

    public void pay()

    {

        System.out.println("UPI Payment");

    }

}



# Interface and Runtime Polymorphism


Interfaces support polymorphism.



Example:


Payment payment = new CardPayment();


payment.pay();



Output:


Card Payment



The same reference can store different implementations.



# Multiple Inheritance Using Interfaces


Java does not support multiple inheritance using classes.



But it supports multiple inheritance using interfaces.



Example:


interface A

{

    void methodA();

}



interface B

{

    void methodB();

}



class C implements A,B

{

    public void methodA()

    {

        System.out.println("Method A");

    }


    public void methodB()

    {

        System.out.println("Method B");

    }

}



Class C gets behavior from both interfaces.



# Interface Inheritance


An interface can inherit another interface using:


extends



Example:


interface Animal

{

    void eat();

}



interface Dog extends Animal

{

    void bark();

}



A class implementing Dog must implement both methods.



# Default Methods in Interfaces


Java 8 introduced default methods.



Default methods have implementation inside interfaces.



Example:


interface Vehicle

{

    default void start()

    {

        System.out.println("Vehicle Starts");

    }

}



Classes can use the default implementation.



# Static Methods in Interfaces


Interfaces can contain static methods.



Example:


interface Utility

{

    static void display()

    {

        System.out.println("Utility Method");

    }

}



Called using:


Utility.display();



# Functional Interfaces


An interface with exactly one abstract method is called a functional interface.



Example:


interface Calculator

{

    int add(int a,int b);

}



Functional interfaces are used with lambda expressions.



# Interface Example: Banking System


Interface:


AccountOperations



Methods:


deposit()


withdraw()



Classes:


SavingsAccount


CurrentAccount



Each class implements operations differently.



# Interface Example: E-Commerce System


Interface:


Payment



Methods:


pay()



Classes:


CardPayment


UPIPayment


NetBankingPayment



# Interface Example: Student Management System


Interface:


Report



Method:


generateReport()



Classes:


StudentReport


TeacherReport



# Difference Between Abstract Class and Interface



## Abstract Class


- Uses abstract keyword.
- Can contain constructors.
- Can contain variables.
- Supports partial abstraction.
- Uses extends.



## Interface


- Uses interface keyword.
- No constructors.
- Variables are public static final.
- Provides complete abstraction.
- Uses implements.



# Advantages of Interfaces



## Multiple Inheritance


A class can implement multiple interfaces.



## Loose Coupling


Classes depend on behavior instead of implementation.



## Flexibility


New implementations can be added easily.



## Better Design


Encourages clean architecture.



# Common Mistakes



## Forgetting public in Implemented Methods


Interface methods are public, so implementations must also be public.



## Creating Objects of Interfaces


Interfaces cannot create objects directly.



## Adding Too Many Methods


Large interfaces become difficult to implement.



# Best Practices


Follow these practices:


- Use interfaces for common behaviors.
- Keep interfaces small.
- Prefer interfaces for flexible designs.
- Use meaningful method names.
- Program to interfaces, not implementations.



# Real-World Applications



## Banking Applications


Interface:


Payment



Implementations:


UPI


Card


Net Banking



## E-Commerce Applications


Interface:


Delivery



Implementations:


ExpressDelivery


StandardDelivery



## Education Applications


Interface:


Evaluation



Implementations:


StudentEvaluation


CourseEvaluation



# Key Points


Remember:


- Interfaces define contracts.
- Classes implement interfaces.
- Interfaces support abstraction.
- Interfaces support multiple inheritance.
- Interface methods are public.
- Interfaces enable polymorphism.
- Interfaces create flexible designs.



# Summary


Interfaces are powerful Java features used to define common behaviors without specifying implementation.


They improve abstraction, flexibility, and scalability, making them essential for professional Java application development.

`

};


export default lesson10;
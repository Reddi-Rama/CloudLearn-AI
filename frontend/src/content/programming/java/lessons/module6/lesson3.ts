const lesson3 = {

  id: "lesson3",

  title: "The extends Keyword in Java",

  content: `

# The extends Keyword in Java


## Introduction


Inheritance is implemented in Java using a special keyword called:


extends



The extends keyword allows one class to inherit the properties and methods of another class.



It creates an inheritance relationship between:


- Parent class.
- Child class.



Using extends, a child class can reuse existing code and add new features.



# What is the extends Keyword?


The extends keyword is used to create a child class from an existing parent class.



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

        System.out.println("Animal eats");

    }

}



class Dog extends Animal

{

    void bark()

    {

        System.out.println("Dog barks");

    }

}



Here:


Animal is the parent class.


Dog is the child class.



Dog inherits the eat() method from Animal.



# How extends Works?


When a class extends another class:


- Child class gets accessible members of parent class.
- Child class can add new members.
- Child class can override parent methods.
- Child class can use inherited functionality.



Example:


Animal


   |


   ↓


Dog



Dog contains:


Inherited:


eat()



Own:


bark()



# Simple extends Example


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

        System.out.println("Car drives");

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

Car drives



# Accessing Parent Class Members


A child class can directly access public and protected members of the parent class.



Example:


class Person

{

    String name = "Alex";


    void displayName()

    {

        System.out.println(name);

    }

}



class Student extends Person

{

    void display()

    {

        displayName();

    }

}



The Student class uses the inherited method.



# extends with Fields


Parent classes can contain variables that child classes inherit.



Example:


class Employee

{

    String name;

    int salary;

}



class Manager extends Employee

{

    String department;

}



Manager contains:


Inherited:


name


salary



Own:


department



# extends with Methods


Methods defined in parent classes can be reused.



Example:


class Animal

{

    void eat()

    {

        System.out.println("Eating");

    }

}



class Cat extends Animal

{

    void sound()

    {

        System.out.println("Meow");

    }

}



Cat can call:


cat.eat();



because it inherited the method.



# Creating Objects of Child Classes


When a child object is created, parent class features are also initialized.



Example:


Dog dog = new Dog();



The Dog object contains:


Animal part


+


Dog part



# Constructor Execution with extends


When a child object is created:


1. Parent constructor executes.


2. Child constructor executes.



Example:


class Animal

{

    Animal()

    {

        System.out.println("Animal Constructor");

    }

}



class Dog extends Animal

{

    Dog()

    {

        System.out.println("Dog Constructor");

    }

}



Output:


Animal Constructor

Dog Constructor



# extends and Method Reuse


Example:


class Calculator

{

    void add(int a, int b)

    {

        System.out.println(a+b);

    }

}



class ScientificCalculator extends Calculator

{

    void square(int n)

    {

        System.out.println(n*n);

    }

}



ScientificCalculator can use:


add()


and


square()



# extends Example: Banking System


Parent Class:


Account



class Account

{

    double balance;


    void deposit()

    {

        System.out.println("Deposit");

    }

}



Child Class:


SavingsAccount



class SavingsAccount extends Account

{

    void calculateInterest()

    {

        System.out.println("Interest Calculation");

    }

}



SavingsAccount inherits account operations.



# extends Example: E-Commerce System


Parent Class:


Product



class Product

{

    String name;

    double price;

}



Child Class:


ElectronicProduct



class ElectronicProduct extends Product

{

    int warranty;

}



ElectronicProduct inherits product information.



# extends Example: Student Management System


Parent Class:


Person



class Person

{

    String name;

    int age;

}



Child Class:


Student



class Student extends Person

{

    int rollNumber;

}



Student gets:


name


age


from Person.



# The Object Class and extends


Every Java class automatically extends the Object class.



Example:


class Student

{

}



Internally:


class Student extends Object

{

}



The Object class is the root class of Java inheritance.



# Limitations of extends


A class can extend only one class.



Example:


class Child extends Parent

{

}



Valid.



But:


class Child extends Parent1, Parent2

{

}



Invalid.



# extends and Access Modifiers


Inherited members depend on access modifiers.



public:


Accessible everywhere.



protected:


Accessible in child classes.



default:


Accessible in same package.



private:


Not directly inherited.



# Advantages of extends



## Code Reusability


Existing code can be reused.



## Reduced Duplication


Common functionality exists in one place.



## Better Structure


Classes are organized logically.



## Easy Extension


New features can be added easily.



# Common Mistakes



## Extending Unrelated Classes


Inheritance should represent an "is-a" relationship.



## Trying Multiple Class Extension


Java allows only single class inheritance.



## Forgetting Parent Constructors


Parent initialization happens first.



# Best Practices


Follow these practices:


- Use extends for true inheritance relationships.
- Keep parent classes meaningful.
- Avoid unnecessary inheritance.
- Use interfaces for multiple behaviors.
- Keep class hierarchy simple.



# Key Points


Remember:


- extends creates inheritance relationships.
- Child classes inherit parent features.
- Java supports single class inheritance.
- Constructors execute from parent to child.
- Every class indirectly extends Object.
- extends improves code reuse.



# Summary


The extends keyword is the foundation of inheritance in Java.


It allows developers to create child classes that reuse and extend existing functionality, making applications more organized, reusable, and maintainable.

`

};


export default lesson3;
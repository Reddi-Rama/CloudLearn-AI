const lesson5 = {

  id: "lesson5",

  title: "The super Keyword in Java",

  content: `

# The super Keyword in Java


## Introduction


In inheritance, a child class inherits properties and methods from a parent class.



Sometimes, a child class needs to access members of its parent class directly.



Java provides a special keyword called:


super



The super keyword is used to refer to the immediate parent class object.



# What is the super Keyword?


The super keyword is a reference variable that refers to the parent class object.



In simple words:


super means "the parent class object".



It is mainly used when:


- Parent and child classes have variables with the same name.
- Child class wants to call parent class methods.
- Child class wants to call parent class constructors.



# Uses of super Keyword


The super keyword has three main uses:



1. Access parent class variables.


2. Call parent class methods.


3. Call parent class constructors.



# 1. Accessing Parent Class Variables Using super


When parent and child classes have variables with the same name, super is used to access the parent variable.



Example:


class Animal

{

    String name = "Animal";

}



class Dog extends Animal

{

    String name = "Dog";


    void display()

    {

        System.out.println(name);

        System.out.println(super.name);

    }

}



class Main

{

    public static void main(String[] args)

    {

        Dog dog = new Dog();


        dog.display();

    }

}



Output:


Dog

Animal



Explanation:


name refers to child class variable.


super.name refers to parent class variable.



# Why Do We Need super for Variables?


Example without super:


class Parent

{

    int value = 10;

}



class Child extends Parent

{

    int value = 20;


    void display()

    {

        System.out.println(value);

    }

}



Output:


20



The child variable hides the parent variable.



To access parent value:


System.out.println(super.value);



# 2. Calling Parent Class Methods Using super


A child class can call a parent class method using super.



Example:


class Animal

{

    void sound()

    {

        System.out.println("Animal Sound");

    }

}



class Dog extends Animal

{

    void sound()

    {

        super.sound();

        System.out.println("Dog Sound");

    }

}



class Main

{

    public static void main(String[] args)

    {

        Dog dog = new Dog();


        dog.sound();

    }

}



Output:


Animal Sound

Dog Sound



Explanation:


super.sound() calls the parent method.



# Why Use super for Methods?


Sometimes a child overrides a parent method but still needs the original parent behavior.



Example:


class Account

{

    void display()

    {

        System.out.println("Account Details");

    }

}



class SavingsAccount extends Account

{

    void display()

    {

        super.display();

        System.out.println("Savings Account Details");

    }

}



The child extends the parent behavior instead of completely replacing it.



# 3. Calling Parent Constructor Using super()


The super() method is used to call the parent class constructor.



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

        super();

        System.out.println("Dog Constructor");

    }

}



Output:


Animal Constructor

Dog Constructor



# Constructor Execution Order


When creating a child object:


Dog dog = new Dog();



Execution:


1. Parent constructor executes.


2. Child constructor executes.



Reason:


The parent part of the object must be initialized first.



# Rules of super()


Important rules:


- super() must be the first statement inside a constructor.
- super() calls the immediate parent constructor.
- If not written, Java automatically inserts super().



# Automatic super() Call


Example:


class Parent

{

    Parent()

    {

        System.out.println("Parent");

    }

}



class Child extends Parent

{

    Child()

    {

        System.out.println("Child");

    }

}



Internally Java adds:


super();



Output:


Parent

Child



# Parameterized Parent Constructor Using super()


A child class can call a parameterized parent constructor.



Example:


class Person

{

    Person(String name)

    {

        System.out.println(name);

    }

}



class Student extends Person

{

    Student()

    {

        super("Alex");

    }

}



Output:


Alex



# super Keyword Example: Banking System


class Account

{

    double balance;


    Account(double balance)

    {

        this.balance = balance;

    }


    void display()

    {

        System.out.println(balance);

    }

}



class SavingsAccount extends Account

{

    SavingsAccount(double balance)

    {

        super(balance);

    }

}



The child class uses the parent constructor to initialize balance.



# super Keyword Example: E-Commerce System


class Product

{

    String name;


    Product(String name)

    {

        this.name = name;

    }

}



class ElectronicProduct extends Product

{

    ElectronicProduct(String name)

    {

        super(name);

    }

}



The child class initializes inherited product data.



# super Keyword Example: Student Management System


class Person

{

    String name;


    Person(String name)

    {

        this.name = name;

    }

}



class Student extends Person

{

    int rollNumber;


    Student(String name, int roll)

    {

        super(name);

        rollNumber = roll;

    }

}



Student uses parent constructor.



# Difference Between this and super



## this


Refers to:


Current class object.



Used for:


- Current class variables.
- Current class methods.
- Current class constructors.



Example:


this.name



## super


Refers to:


Parent class object.



Used for:


- Parent variables.
- Parent methods.
- Parent constructors.



Example:


super.name



# Advantages of super Keyword



## Access Parent Features


Allows child classes to use parent functionality.



## Supports Constructor Chaining


Helps initialize inherited data.



## Avoids Variable Conflicts


Resolves same-name variables.



## Improves Code Reuse


Allows extending parent behavior.



# Common Mistakes



## Using super Outside Child Classes


super only works with inheritance.



## Calling super() After Statements


super() must be first.



## Confusing this and super


this = current class.


super = parent class.



# Best Practices


Follow these practices:


- Use super when accessing parent members.
- Use super() for parent initialization.
- Avoid unnecessary use of super.
- Keep inheritance hierarchy clear.
- Understand parent-child relationships.



# Real-World Applications



## Banking Systems


Account:


displayBalance()



SavingsAccount:


super.displayBalance()



## E-Commerce Systems


Product:


product details.



ElectronicProduct:


uses super to initialize product data.



## Education Systems


Person:


common information.



Student:


uses super to initialize inherited details.



# Key Points


Remember:


- super refers to the immediate parent class.
- super accesses parent variables.
- super calls parent methods.
- super() calls parent constructors.
- super() must be the first statement in constructors.
- It is used in inheritance relationships.



# Summary


The super keyword provides a way for child classes to communicate with their parent classes.


It helps access inherited members, call parent constructors, and extend existing functionality while maintaining clean inheritance design.

`

};


export default lesson5;
const lesson2 = {

  id: "lesson2",

  title: "Types of Inheritance in Java",

  content: `

# Types of Inheritance in Java


## Introduction


Inheritance allows one class to acquire properties and behaviors from another class.



Depending on how classes are connected, inheritance can have different structures.



These structures are called:


Types of Inheritance



Inheritance helps developers design relationships between classes and reuse common functionality.



# Types of Inheritance in Java


Java supports the following inheritance types:



1. Single Inheritance


2. Multilevel Inheritance


3. Hierarchical Inheritance


4. Multiple Inheritance (through interfaces)



Java does not support multiple inheritance using classes.



# 1. Single Inheritance


## Definition


Single inheritance occurs when one child class inherits from one parent class.



Structure:



Parent Class


     |


     ↓


Child Class



Example:


Animal


   |


   ↓


Dog



The Dog class inherits properties and methods from Animal.



# Single Inheritance Example


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



class Main

{

    public static void main(String[] args)

    {

        Dog dog = new Dog();


        dog.eat();

        dog.bark();

    }

}



Output:


Animal eats

Dog barks



Explanation:


Dog inherits eat() from Animal.



# Real-World Example: Single Inheritance


Vehicle



      |



      ↓



Car



Vehicle contains:


- Speed.
- Start method.



Car contains:


- Drive method.



Car can use Vehicle features.



# 2. Multilevel Inheritance


## Definition


Multilevel inheritance occurs when a class inherits from another class, and another class inherits from it.



Structure:



Grandparent Class


        |


        ↓


Parent Class


        |


        ↓


Child Class



Example:


Animal


   |


   ↓


Dog


   |


   ↓


Puppy



# Multilevel Inheritance Example


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



class Puppy extends Dog

{

    void play()

    {

        System.out.println("Playing");

    }

}



class Main

{

    public static void main(String[] args)

    {

        Puppy puppy = new Puppy();


        puppy.eat();

        puppy.bark();

        puppy.play();

    }

}



Output:


Eating

Barking

Playing



Explanation:


Puppy gets features from Dog and Animal.



# Real-World Example: Multilevel Inheritance


Person


   |


   ↓


Employee


   |


   ↓


Manager



Person contains:


- Name.
- Age.



Employee contains:


- Employee ID.



Manager contains:


- Team details.



Manager can access all inherited features.



# 3. Hierarchical Inheritance


## Definition


Hierarchical inheritance occurs when multiple child classes inherit from one parent class.



Structure:



        Parent Class


        /       \


       /         \


 Child 1       Child 2



Example:


        Animal


        /    \


      Dog    Cat



# Hierarchical Inheritance Example


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



class Cat extends Animal

{

    void meow()

    {

        System.out.println("Meowing");

    }

}



class Main

{

    public static void main(String[] args)

    {

        Dog dog = new Dog();

        Cat cat = new Cat();


        dog.eat();

        dog.bark();


        cat.eat();

        cat.meow();

    }

}



Output:


Eating

Barking

Eating

Meowing



Explanation:


Dog and Cat both inherit Animal features.



# Real-World Example: Hierarchical Inheritance


          Vehicle


          /     \


        Car    Bike



Vehicle contains:


- Start().
- Stop().



Car and Bike use common vehicle features.



# 4. Multiple Inheritance


## Definition


Multiple inheritance occurs when one class inherits from multiple parent classes.



Structure:



Parent A      Parent B


     \        /


      \      /


      Child



Example:


A class trying to inherit from both:


class A


and


class B



# Multiple Inheritance Using Classes in Java


Java does NOT support multiple inheritance using classes.



Example:



class A

{

}



class B

{

}



class C extends A, B

{

}



This produces an error.



# Why Java Does Not Support Multiple Class Inheritance?


The main reason is ambiguity.



Example:



Class A:


display()


Class B:


display()



Class C inherits both.



Which display() should C use?



This creates confusion called:


Diamond Problem



# Multiple Inheritance Using Interfaces


Java supports multiple inheritance through interfaces.



Example:


interface A

{

    void display();

}



interface B

{

    void show();

}



class C implements A, B

{

    public void display()

    {

        System.out.println("Display");

    }


    public void show()

    {

        System.out.println("Show");

    }

}



Now C can use features from both interfaces.



# Hybrid Inheritance


Hybrid inheritance is a combination of multiple inheritance types.



Java does not support hybrid inheritance through classes.



It can be achieved using interfaces.



# Comparison of Inheritance Types



## Single Inheritance


One parent → One child



Example:


Animal → Dog



## Multilevel Inheritance


Parent → Child → Grandchild



Example:


Animal → Dog → Puppy



## Hierarchical Inheritance


One parent → Multiple children



Example:


Animal → Dog, Cat



## Multiple Inheritance


Multiple parents → One child



Not supported using classes.



# Inheritance Examples in Real Applications



## Banking System


Account


   |


   ↓


SavingsAccount



Account


   |


   ↓


CurrentAccount



Both inherit common account operations.



# E-Commerce System


Product


   |


   ↓


ElectronicProduct



Product


   |


   ↓


ClothingProduct



# Student Management System


Person


   |


   ↓


Student



Person


   |


   ↓


Teacher



# Advantages of Different Inheritance Types



## Single Inheritance


- Simple structure.
- Easy maintenance.



## Multilevel Inheritance


- Provides layered design.
- Supports gradual specialization.



## Hierarchical Inheritance


- Promotes code reuse among related classes.



## Interface-Based Multiple Inheritance


- Provides flexibility.
- Avoids ambiguity.



# Common Mistakes



## Using Multiple Class Inheritance


Java does not allow it.



## Creating Too Many Levels


Deep inheritance becomes difficult to manage.



## Incorrect Relationships


Inheritance should represent an "is-a" relationship.



# Best Practices


Follow these practices:


- Use inheritance only when relationships are clear.
- Keep inheritance hierarchy simple.
- Avoid unnecessary inheritance levels.
- Use interfaces for multiple behaviors.
- Prefer composition when appropriate.



# Key Points


Remember:


- Java supports single, multilevel, and hierarchical inheritance.
- Java does not support multiple inheritance using classes.
- Interfaces provide multiple inheritance capability.
- Inheritance structures define class relationships.
- Choose inheritance type based on application design.



# Summary


Different types of inheritance help developers organize relationships between classes.



Single inheritance provides simple reuse, multilevel inheritance creates layers, hierarchical inheritance shares features among multiple classes, and interfaces provide flexible multiple inheritance in Java.

`

};


export default lesson2;
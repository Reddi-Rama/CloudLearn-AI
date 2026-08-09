const lesson4 = {

  id: "lesson4",

  title: "Method Overriding in Java",

  content: `

# Method Overriding in Java


## Introduction


Method overriding is one of the most important concepts in Java inheritance.



It allows a child class to provide its own implementation of a method that already exists in the parent class.



Method overriding is mainly used to achieve:


- Runtime polymorphism.
- Flexible program design.
- Customized behavior.



# What is Method Overriding?


Method overriding occurs when a child class defines a method with the same:


- Name.
- Return type.
- Parameters.



as a method in its parent class.



The child class replaces the behavior of the inherited method.



# Syntax of Method Overriding


class Parent

{

    void methodName()

    {

        // parent implementation

    }

}



class Child extends Parent

{

    void methodName()

    {

        // child implementation

    }

}



# Simple Method Overriding Example


class Animal

{

    void sound()

    {

        System.out.println("Animal makes sound");

    }

}



class Dog extends Animal

{

    void sound()

    {

        System.out.println("Dog barks");

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


Dog barks



Explanation:


Dog overrides the sound() method of Animal.



# Why Do We Need Method Overriding?


Suppose different animals produce different sounds.



Without overriding:


Every animal may require a different method name.



Example:


dogSound()


catSound()



This becomes difficult to manage.



With overriding:


All classes use the same method:


sound()



Each class provides its own implementation.



# Rules of Method Overriding



## 1. Same Method Name


Parent and child methods must have the same name.



Example:


display()



## 2. Same Parameters


Method parameters must be identical.



Example:


display(int value)



## 3. Same or Compatible Return Type


The return type must be the same or a subtype.



## 4. Access Modifier Cannot Be More Restrictive


A child method cannot reduce accessibility.



Example:


Parent:


public method



Child:


private method



Not allowed.



# Example with @Override Annotation


The @Override annotation tells the compiler that a method is being overridden.



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

    @Override

    void sound()

    {

        System.out.println("Dog Sound");

    }

}



Benefits:


- Prevents mistakes.
- Improves readability.
- Confirms overriding.



# Method Overriding and Inheritance


Method overriding requires inheritance.



Example:



Parent Class:


Vehicle



Method:


start()



Child Class:


Car



Overrides:


start()



# Method Overriding Example: Vehicle System


class Vehicle

{

    void start()

    {

        System.out.println("Vehicle starts");

    }

}



class Car extends Vehicle

{

    @Override

    void start()

    {

        System.out.println("Car starts with key");

    }

}



Output:


Car starts with key



# Method Overriding Example: Banking System


class Account

{

    void calculateInterest()

    {

        System.out.println("General Interest");

    }

}



class SavingsAccount extends Account

{

    @Override

    void calculateInterest()

    {

        System.out.println("Savings Account Interest");

    }

}



Explanation:


Different account types calculate interest differently.



# Method Overriding Example: E-Commerce System


class Product

{

    void calculatePrice()

    {

        System.out.println("Product Price");

    }

}



class DiscountProduct extends Product

{

    @Override

    void calculatePrice()

    {

        System.out.println("Discounted Price");

    }

}



# Method Overriding Example: Student Management System


class Person

{

    void displayRole()

    {

        System.out.println("Person");

    }

}



class Student extends Person

{

    @Override

    void displayRole()

    {

        System.out.println("Student");

    }

}



# Runtime Polymorphism Using Method Overriding


Method overriding enables runtime polymorphism.



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

        System.out.println("Dog Sound");

    }

}



class Main

{

    public static void main(String[] args)

    {

        Animal animal = new Dog();


        animal.sound();

    }

}



Output:


Dog Sound



Explanation:


Reference type:


Animal



Object type:


Dog



The JVM decides which method to execute at runtime.



# Overriding Static Methods


Static methods cannot be overridden.



They are hidden, not overridden.



Example:


class Parent

{

    static void display()

    {

        System.out.println("Parent");

    }

}



class Child extends Parent

{

    static void display()

    {

        System.out.println("Child");

    }

}



This is method hiding.



# Overriding Final Methods


Final methods cannot be overridden.



Example:


class Parent

{

    final void display()

    {

    }

}



Child cannot change this method.



# Overriding Private Methods


Private methods are not inherited.



Therefore, they cannot be overridden.



# Difference Between Method Overloading and Method Overriding



## Method Overloading


- Same class.
- Same method name.
- Different parameters.
- Compile-time polymorphism.



Example:


add(int,int)


add(double,double)



## Method Overriding


- Parent-child relationship.
- Same method signature.
- Different implementation.
- Runtime polymorphism.



Example:


Animal.sound()


Dog.sound()



# Advantages of Method Overriding



## Runtime Flexibility


Program decides behavior during execution.



## Code Reusability


Parent provides common behavior.



## Customization


Child classes provide specialized behavior.



## Better Design


Supports flexible applications.



# Common Mistakes



## Changing Method Parameters


It becomes overloading, not overriding.



## Reducing Access Level


Not allowed.



## Forgetting Inheritance


Overriding requires parent-child relationship.



# Best Practices


Follow these practices:


- Use @Override annotation.
- Keep overridden methods meaningful.
- Follow proper method signatures.
- Override only when behavior needs to change.
- Use polymorphism effectively.



# Real-World Applications



## Banking Systems


Account:


calculateInterest()



SavingsAccount:


calculateInterest()



CurrentAccount:


calculateInterest()



## E-Commerce Systems


Product:


calculateDiscount()



ElectronicProduct:


calculateDiscount()



## Education Systems


Person:


displayDetails()



Student:


displayDetails()



# Key Points


Remember:


- Method overriding happens between parent and child classes.
- Child provides a new implementation of inherited method.
- Method signature must be the same.
- @Override improves reliability.
- Overriding enables runtime polymorphism.
- Static, private, and final methods cannot be overridden.



# Summary


Method overriding allows Java programs to provide different implementations for the same method.


It is a powerful inheritance feature that enables runtime polymorphism and helps developers build flexible, extensible applications.

`

};


export default lesson4;
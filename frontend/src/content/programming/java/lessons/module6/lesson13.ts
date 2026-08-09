const lesson13 = {

  id: "lesson13",

  title: "Nested Classes in Java",

  content: `

# Nested Classes in Java


## Introduction


Java allows a class to be declared inside another class.



A class defined inside another class is called a:


Nested Class



Nested classes are useful for:


- Grouping related classes.
- Improving code organization.
- Controlling access between classes.
- Creating logical structures.



Example:


A Car class may contain an Engine class because Engine is strongly related to Car.



# What is a Nested Class?


A nested class is a class declared inside another class.



Syntax:


class OuterClass

{

    class InnerClass

    {

    }

}



Here:


OuterClass:


The class containing another class.



InnerClass:


The class inside the outer class.



# Why Do We Need Nested Classes?


Nested classes are used when:



## Logical Grouping


Classes that are closely related can be kept together.



## Better Encapsulation


The inner class can access outer class members.



## Improved Readability


Related functionality stays in one place.



## Access Control


Inner classes can hide implementation details.



# Types of Nested Classes


Java supports four types of nested classes:



1. Static Nested Class


2. Inner Class


3. Local Inner Class


4. Anonymous Inner Class



The first two are member classes.



# 1. Static Nested Class


A static nested class is declared using the static keyword inside another class.



Syntax:


class Outer

{

    static class Inner

    {

    }

}



A static nested class does not require an object of the outer class.



# Static Nested Class Example


class Outer

{

    static int value = 100;


    static class Inner

    {

        void display()

        {

            System.out.println(value);

        }

    }


    public static void main(String[] args)

    {

        Outer.Inner obj = new Outer.Inner();


        obj.display();

    }

}



Output:


100



Explanation:


The inner class accesses static members of the outer class.



# 2. Inner Class (Non-static Nested Class)


An inner class is a class without the static keyword inside another class.



Syntax:


class Outer

{

    class Inner

    {

    }

}



An inner class requires an object of the outer class.



# Inner Class Example


class Outer

{

    int value = 50;


    class Inner

    {

        void display()

        {

            System.out.println(value);

        }

    }


    public static void main(String[] args)

    {

        Outer outer = new Outer();


        Outer.Inner inner = outer.new Inner();


        inner.display();

    }

}



Output:


50



Explanation:


The inner class can access outer class instance variables.



# Accessing Outer Class Members


Inner classes can access:


- Private variables.
- Private methods.
- Instance members.
- Static members.



Example:


class Bank

{

    private double balance = 5000;


    class AccountDetails

    {

        void display()

        {

            System.out.println(balance);

        }

    }

}



The inner class can access private data.



# 3. Local Inner Class


A local inner class is declared inside a method.



Example:


class Outer

{

    void display()

    {

        class Inner

        {

            void show()

            {

                System.out.println("Local Inner Class");

            }

        }


        Inner obj = new Inner();


        obj.show();

    }

}



Output:


Local Inner Class



The class exists only inside that method.



# 4. Anonymous Inner Class


An anonymous inner class is a class without a name.



It is used when a class is required only once.



Example:


interface Animal

{

    void sound();

}



class Main

{

    public static void main(String[] args)

    {

        Animal animal = new Animal()

        {

            public void sound()

            {

                System.out.println("Animal Sound");

            }

        };


        animal.sound();

    }

}



Output:


Animal Sound



# Nested Classes and Access Modifiers


Nested classes can have:


- public.
- private.
- protected.
- default.



Example:


class Outer

{

    private class Inner

    {

    }

}



A private nested class cannot be accessed outside the outer class.



# Nested Class Example: Banking System


Outer Class:


Bank



Inner Class:


AccountDetails



Example:


class Bank

{

    String bankName;


    class Account

    {

        void display()

        {

            System.out.println(bankName);

        }

    }

}



The Account class is closely related to Bank.



# Nested Class Example: E-Commerce System


Outer Class:


ShoppingCart



Inner Class:


CartItem



Example:


class ShoppingCart

{

    class CartItem

    {

        String productName;

    }

}



CartItem belongs only to ShoppingCart.



# Nested Class Example: Student Management System


Outer Class:


Student



Inner Class:


Address



Example:


class Student

{

    String name;


    class Address

    {

        String city;

    }

}



Address information belongs to Student.



# Difference Between Inner Class and Static Nested Class



## Inner Class


- Non-static.
- Requires outer object.
- Can access instance members.
- More tightly connected with outer object.



## Static Nested Class


- Uses static keyword.
- Does not require outer object.
- Can access only static members directly.



# Advantages of Nested Classes



## Better Organization


Related classes stay together.



## Improved Encapsulation


Implementation details can be hidden.



## Easy Maintenance


Code becomes more structured.



## Access Outer Class Data


Inner classes can access private members.



# Common Mistakes



## Creating Inner Class Object Incorrectly


Non-static inner classes require outer objects.



## Making Everything Nested


Use nested classes only when there is a strong relationship.



## Confusing Static Nested and Inner Classes


They behave differently.



# Best Practices


Follow these practices:


- Use nested classes for closely related functionality.
- Prefer static nested classes when outer object access is unnecessary.
- Keep nested classes small.
- Avoid excessive nesting.
- Use meaningful class names.



# Real-World Applications



## Banking Systems


Bank:


AccountDetails



The account details belong to a bank.



## E-Commerce Systems


Order:


OrderItem



Items belong to an order.



## Student Systems


Student:


Address



Address belongs to a student.



# Key Points


Remember:


- A class inside another class is called a nested class.
- Java has four types of nested classes.
- Inner classes can access outer class members.
- Static nested classes do not require outer objects.
- Anonymous classes are used for one-time implementations.
- Nested classes improve code organization.



# Summary


Nested classes allow developers to logically group related classes together.


They improve organization, encapsulation, and readability when used properly in Java applications.

`

};


export default lesson13;
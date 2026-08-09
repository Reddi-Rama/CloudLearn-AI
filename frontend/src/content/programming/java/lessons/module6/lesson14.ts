const lesson14 = {

  id: "lesson14",

  title: "Object Cloning in Java",

  content: `

# Object Cloning in Java


## Introduction


In Java, sometimes we need to create an exact copy of an existing object.



Instead of creating a new object and manually copying every value, Java provides a feature called:


Object Cloning



Object cloning creates a duplicate object with the same state as the original object.



# What is Object Cloning?


Object cloning is the process of creating a copy of an existing object.



The copied object contains:


- Same values.
- Same data.
- Same state.



The original object and cloned object are separate objects in memory.



# Why Do We Need Object Cloning?


Creating objects manually can be time-consuming.



Example:


Student student1 = new Student();


student1.name = "Alex";


Creating another object:


Student student2 = new Student();


student2.name = student1.name;



Cloning provides an easier way.



# clone() Method in Java


Java provides a method called:


clone()



The clone() method is defined in the Object class.



Syntax:


protected Object clone() throws CloneNotSupportedException



It creates and returns a copy of an object.



# Cloneable Interface


To use cloning, a class must implement:


Cloneable interface



Cloneable is a marker interface.



It does not contain any methods.



It tells the JVM that an object can be cloned.



# Steps to Clone an Object


Steps:



## Step 1


Implement Cloneable interface.



## Step 2


Override clone() method.



## Step 3


Call super.clone().



# Simple Object Cloning Example


class Student implements Cloneable

{

    String name;


    Student(String name)

    {

        this.name = name;

    }


    public Object clone() throws CloneNotSupportedException

    {

        return super.clone();

    }


    public static void main(String[] args) throws CloneNotSupportedException

    {

        Student student1 = new Student("Alex");


        Student student2 = (Student)student1.clone();


        System.out.println(student2.name);

    }

}



Output:


Alex



Explanation:


student2 is a copy of student1.



# How Cloning Works in Memory


Original object:



student1


    ↓


Student Object



After cloning:



student1


    ↓


Student Object 1



student2


    ↓


Student Object 2



Both objects have the same data but different memory locations.



# Shallow Copy


By default, Java performs:


Shallow Copy



In shallow copy:


- Primitive values are copied.
- Object references are copied.



Example:



Original:


Student


name


Address reference



Clone:


Student


name


Same Address reference



Both objects share referenced objects.



# Shallow Copy Example


class Address

{

    String city;

}



class Student implements Cloneable

{

    String name;

    Address address;


    public Object clone() throws CloneNotSupportedException

    {

        return super.clone();

    }

}



The cloned object shares the same Address object.



# Deep Copy


Deep copy creates completely independent copies of objects.



In deep copy:


- Primitive values are copied.
- Referenced objects are also copied.



Example:



Original Student:


Name


Address Object 1



Cloned Student:


Name


Address Object 2



Both have separate address objects.



# Difference Between Shallow Copy and Deep Copy



## Shallow Copy


- Copies object values.
- Copies references.
- Faster.
- Shared referenced objects.



## Deep Copy


- Copies complete object structure.
- Creates new referenced objects.
- More memory usage.
- Completely independent objects.



# Overriding clone() Method


Example:


class Employee implements Cloneable

{

    int id;


    public Employee clone() throws CloneNotSupportedException

    {

        return (Employee)super.clone();

    }

}



The method returns Employee type instead of Object.



# CloneNotSupportedException


If a class does not implement Cloneable, cloning causes:



CloneNotSupportedException



Example:


class Student

{

}



student.clone();



This produces an error.



# Object Cloning Example: Banking System


class Account implements Cloneable

{

    int accountNumber;

    double balance;


    public Object clone() throws CloneNotSupportedException

    {

        return super.clone();

    }

}



A duplicate account object can be created.



# Object Cloning Example: E-Commerce System


class Product implements Cloneable

{

    String productName;

    double price;


    public Object clone() throws CloneNotSupportedException

    {

        return super.clone();

    }

}



A product copy can be created quickly.



# Object Cloning Example: Student Management System


class Student implements Cloneable

{

    String name;

    int marks;


    public Object clone() throws CloneNotSupportedException

    {

        return super.clone();

    }

}



A duplicate student record can be created.



# Advantages of Object Cloning



## Faster Object Creation


Copies existing objects quickly.



## Reduces Code


No need to manually assign every field.



## Preserves Object State


The cloned object starts with the same values.



## Useful for Complex Objects


Helpful when objects contain many fields.



# Limitations of Object Cloning



## Shallow Copy Problem


Referenced objects may be shared.



## clone() Method Design Issues


The clone mechanism is considered less flexible.



## Requires Cloneable Interface


Without Cloneable, cloning fails.



# Clone vs Object Creation



## Normal Creation


Uses:


new keyword



Creates:


A completely new object.



## Cloning


Uses:


clone()



Creates:


A copy of an existing object.



# Common Mistakes



## Forgetting Cloneable


clone() will fail.



## Not Handling Exception


clone() throws CloneNotSupportedException.



## Assuming Deep Copy


Java performs shallow copy by default.



# Best Practices


Follow these practices:


- Use cloning carefully.
- Understand shallow and deep copy.
- Override clone() properly.
- Consider copy constructors as an alternative.
- Avoid unnecessary cloning.



# Alternative to Cloning: Copy Constructor


Many developers prefer copy constructors.



Example:


class Student

{

    String name;


    Student(Student other)

    {

        this.name = other.name;

    }

}



Advantages:


- More control.
- Easier customization.
- Better readability.



# Real-World Applications



## Banking Systems


Cloning can copy:


- Account templates.
- Transaction objects.



## E-Commerce Systems


Cloning can copy:


- Product templates.
- Shopping cart items.



## Student Systems


Cloning can copy:


- Student records.
- Report objects.



# Key Points


Remember:


- Object cloning creates copies of objects.
- clone() method comes from Object class.
- Cloneable interface enables cloning.
- Java performs shallow copy by default.
- Deep copy creates independent objects.
- Copy constructors are often preferred.



# Summary


Object cloning allows Java programs to create duplicate objects efficiently.


Understanding cloning, shallow copy, and deep copy helps developers manage object creation and memory effectively in object-oriented applications.

`

};


export default lesson14;
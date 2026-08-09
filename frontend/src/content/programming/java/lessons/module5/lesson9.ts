const lesson9 = {

  id: "lesson9",

  title: "Object References and Memory Allocation in Java",

  content: `

# Object References and Memory Allocation in Java


## Introduction


In Java, objects are created dynamically during program execution.


When an object is created, Java allocates memory for that object and provides a way to access it.



This process involves two important concepts:


- Object Memory Allocation.
- Object References.



Understanding these concepts helps developers understand how Java manages objects internally.



# What Happens When an Object is Created?


Consider this statement:


Student student = new Student();



This statement performs three operations:


1. Creates an object in memory.


2. Allocates memory for the object.


3. Stores the reference of that object in a variable.



# Object Memory Allocation


Java stores objects in a special memory area called the Heap.



The Heap memory is used for:


- Objects.
- Instance variables.
- Arrays.



Example:


Student student = new Student();



Memory:


Heap:


Student Object



Stack:


student reference



# Stack and Heap Memory


Java uses two important memory areas:



## Stack Memory


Stores:


- Local variables.
- Method calls.
- Object references.



Example:


Student student;



The variable student is stored in stack memory.



## Heap Memory


Stores:


- Actual objects.
- Instance variables.



Example:


new Student()



The Student object is stored in heap memory.



# Object Reference


A reference variable stores the address of an object.



Example:


Student student = new Student();



Here:


student:


Reference variable.



new Student():


Actual object.



The reference connects the stack variable with the heap object.



# Understanding References


Example:


class Student

{

    String name;

}



Creating object:


Student student1 = new Student();



Memory:


Stack:


student1


↓

Heap:


Student Object



# Multiple References to Same Object


Multiple reference variables can point to the same object.



Example:


class Example

{

    int value = 100;


    public static void main(String[] args)

    {

        Example obj1 = new Example();


        Example obj2 = obj1;


        System.out.println(obj2.value);

    }

}



Output:


100



Explanation:


Both obj1 and obj2 refer to the same object.



Memory:


obj1


  \


   → Object


  /


obj2



# Changing Object Through Reference


If one reference changes object data, the change is visible through other references.



Example:


class Example

{

    int value;


    public static void main(String[] args)

    {

        Example obj1 = new Example();


        Example obj2 = obj1;


        obj2.value = 50;


        System.out.println(obj1.value);

    }

}



Output:


50



Explanation:


Both references point to the same object.



# Object Creation Using new Keyword


The new keyword creates objects dynamically.



Example:


Student student = new Student();



Steps:


1. Memory is allocated in heap.


2. Constructor is called.


3. Object reference is returned.



# Object Without Reference


Java allows creating objects without storing references.



Example:


new Student();



Such objects cannot be accessed later because there is no reference.



# Null Reference


A reference variable can store null.



Example:


Student student = null;



Meaning:


The variable does not point to any object.



# Using Null Reference


Example:


class Example

{

    public static void main(String[] args)

    {

        Example obj = null;


        System.out.println(obj.value);

    }

}



Output:


NullPointerException



Reason:


The reference does not point to an object.



# Object Lifetime


An object exists as long as it is reachable through references.



Example:


Student student = new Student();



The object remains alive while student refers to it.



# Removing Object Reference


Example:


Student student = new Student();


student = null;



Now:


The object has no reference.



It becomes eligible for garbage collection.



# Garbage Collection and Objects


Java automatically removes unused objects using Garbage Collection.



Example:


Student student = new Student();


student = null;



The object is no longer required.


The garbage collector may remove it.



# Object Reference Example: Banking System


class BankAccount

{

    String holderName;

    double balance;

}



Object creation:


BankAccount account = new BankAccount();



Memory:


Stack:


account reference



Heap:


BankAccount object



# Object Reference Example: E-Commerce System


class Product

{

    String productName;

    double price;

}



Object:


Product product = new Product();



Reference:


product



Object:


Product details stored in heap.



# Object Reference Example: Student Management System


class Student

{

    String name;

    int marks;

}



Object:


Student student = new Student();



Reference:


student



Object:


Student information stored in heap.



# Passing Objects to Methods


Objects can be passed as method arguments.



Example:


class Student

{

    int marks;


    static void display(Student student)

    {

        System.out.println(student.marks);

    }


    public static void main(String[] args)

    {

        Student s = new Student();


        s.marks = 90;


        display(s);

    }

}



Output:


90



Explanation:


The method receives the object reference.



# Returning Objects from Methods


Methods can return objects.



Example:


class Student

{

    static Student createStudent()

    {

        Student s = new Student();


        return s;

    }

}



The method returns an object reference.



# Reference Comparison


Objects can be compared using:


==



Example:


Student s1 = new Student();


Student s2 = new Student();



System.out.println(s1 == s2);



Output:


false



Explanation:


They are different objects.



# Comparing Same Reference


Example:


Student s1 = new Student();


Student s2 = s1;



System.out.println(s1 == s2);



Output:


true



Explanation:


Both references point to the same object.



# Advantages of Object References



## Efficient Memory Usage


Objects are accessed using references.



## Object Sharing


Multiple references can use the same object.



## Dynamic Object Creation


Objects can be created during execution.



## Better Program Design


References allow flexible object management.



# Common Mistakes



## Using Null References


Accessing null objects causes errors.



## Creating Unnecessary Objects


Consumes memory.



## Confusing Reference and Object


Reference stores address, object stores data.



# Best Practices


Follow these practices:


- Initialize references properly.
- Avoid unnecessary object creation.
- Check for null before accessing objects.
- Understand object lifetime.
- Use objects efficiently.



# Real-World Applications



## Banking Systems


References manage:


- Customer objects.
- Account objects.
- Transaction objects.



## E-Commerce Systems


References manage:


- Product objects.
- Cart objects.
- Order objects.



## Student Systems


References manage:


- Student objects.
- Course objects.
- Result objects.



# Key Points


Remember:


- Objects are stored in heap memory.
- References are stored in stack memory.
- References point to objects.
- Multiple references can point to one object.
- Null means no object reference.
- Unused objects are removed by garbage collection.



# Summary


Object references and memory allocation explain how Java creates and manages objects internally.


Understanding stack, heap, and references helps developers write efficient and reliable object-oriented Java programs.

`

};


export default lesson9;
const lesson14 = {

  id: "lesson14",

  title: "Nested Classes",

  content: `

# Nested Classes


## Introduction

C++ allows one class to be declared inside another class.

A class defined inside another class is called a nested class.

Nested classes are useful when two classes have a strong relationship and the inner class is only meaningful within the outer class.


## What is a Nested Class?

A nested class is a class that is declared inside the scope of another class.


Syntax:


class OuterClass
{

public:


    class InnerClass
    {

    };


};


Here:

- OuterClass is the main class.
- InnerClass is the nested class.


## Creating a Nested Class


Example:


class University
{

public:


    class Department
    {

    public:


        void display()

        {

            cout<<"Department Details";

        }

    };

};


Here Department is created inside University.



## Accessing Nested Classes


A nested class is accessed using the scope resolution operator.


Syntax:


OuterClass::InnerClass objectName;



Example:


University::Department department;



## Example Program


#include<iostream>

using namespace std;


class University
{

public:


    class Department

    {

    public:


        void display()

        {

            cout<<"Computer Science Department";

        }

    };


};


int main()

{

    University::Department department;


    department.display();


    return 0;

}



Output:


Computer Science Department



## Relationship Between Outer and Inner Class


A nested class is created when one class is logically dependent on another class.


Example:


University

    |

    Department



A department exists as a part of a university.

Therefore, keeping Department inside University improves organization.



## Advantages of Nested Classes


### Better Organization

Related classes are grouped together.


### Improved Encapsulation

Implementation details can be hidden inside another class.


### Logical Representation

The relationship between classes becomes clearer.



## Applications of Nested Classes


Nested classes are used in:


### Banking Systems

Bank

- Account
- Transaction


### Computer Systems

Computer

- Processor
- Memory


### University Systems

University

- Department
- Course



## Limitations of Nested Classes


Nested classes:

- Should only be used when classes are closely related.
- Can increase complexity if used unnecessarily.
- Cannot directly access non-static members of the outer class.


## Nested Class vs Normal Class


Nested Class:

- Defined inside another class.
- Strong relationship with outer class.
- Used for better organization.


Normal Class:

- Independent.
- Can be reused anywhere.
- Suitable for general purposes.



## Key Points


Remember:


- A class inside another class is called a nested class.
- Nested classes are accessed using scope resolution operator.
- They improve code organization.
- They should be used only for closely related classes.


Nested classes are useful for designing clean and structured object-oriented programs in C++.

`

};


export default lesson14;
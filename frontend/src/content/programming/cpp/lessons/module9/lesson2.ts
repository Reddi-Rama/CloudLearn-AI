const lesson2 = {

  id: "lesson2",

  title: "Classes and Objects",

  content: `

# Classes and Objects


## Introduction

Classes and objects are the foundation of Object-Oriented Programming in C++.

A class defines the structure and behavior of an object, while an object is an actual entity created from a class.


In simple terms:


Class = Blueprint

Object = Real instance created from the blueprint


Example:

A building design is a blueprint.

The actual buildings created using that design are objects.


## What is a Class?


A class is a user-defined data type that groups data members and member functions together.


A class contains:


Data Members:

Variables that store information.


Member Functions:

Functions that define the behavior of objects.


Syntax:


class ClassName

{

    data members;

    member functions;

};


Example:


class Student

{

public:

    int rollNumber;

    string name;


    void display()

    {

    }

};


Here:

Student is the class.

rollNumber and name are data members.

display() is a member function.



## What is an Object?


An object is an instance of a class.

When an object is created, memory is allocated for its data members.


Syntax:


ClassName objectName;


Example:


Student student1;


Here:

Student is the class.

student1 is the object.


## Creating Multiple Objects


A single class can create multiple objects.


Example:


Student student1;

Student student2;

Student student3;


Each object has separate memory and stores different values.


Example:


student1:

Name: Alex


student2:

Name: John



## Accessing Class Members


Objects access class members using the dot operator.


Syntax:


objectName.memberName;


Example:


student1.name;


student1.display();



## Example Program


#include<iostream>

using namespace std;


class Student

{

public:

    int rollNumber;

    string name;


    void display()

    {

        cout << rollNumber << endl;

        cout << name;

    }

};


int main()

{

    Student student1;


    student1.rollNumber = 101;

    student1.name = "Rahul";


    student1.display();


    return 0;

}


Output:


101

Rahul



## Difference Between Class and Object


Class:

- Blueprint for creating objects.
- Defines properties and behaviors.
- Does not represent a real entity.


Object:

- Instance of a class.
- Represents a real-world entity.
- Occupies memory.


## Real World Example


Bank Account System:


Class:


Account


Objects:


account1

account2

account3


Each account object stores different account details.


## Advantages of Classes and Objects


Classes and objects provide:


- Better organization of code.
- Data security.
- Code reusability.
- Easy maintenance.
- Real-world modeling.


## Applications


Classes and objects are used in:


Banking Systems:

Objects:

- Customer
- Account
- Transaction


Game Development:

Objects:

- Player
- Weapon
- Character


E-Commerce:

Objects:

- Product
- Order
- Customer


## Key Points


Remember:


- Class is a blueprint.
- Object is an instance of a class.
- One class can create many objects.
- Objects contain data and behavior.


Classes and objects are the core concepts that make C++ an object-oriented programming language.

`

};


export default lesson2;
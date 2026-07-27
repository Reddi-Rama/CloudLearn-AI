const lesson6 = {

  id: "lesson6",

  title: "Multiple Inheritance",

  content: `

# Multiple Inheritance


## Introduction


Multiple inheritance is a type of inheritance where one derived class inherits features from more than one base class.


It allows a class to combine functionalities from multiple classes.


Structure:


Base Class A       Base Class B


        \\          /


          Derived Class



## Syntax of Multiple Inheritance


class DerivedClass : public BaseClass1, public BaseClass2

{

};



A derived class can inherit from multiple base classes by separating them with commas.



## Example Program


#include<iostream>

using namespace std;


class Teacher

{

public:


    void teaching()

    {

        cout<<"Teaching Skills"<<endl;

    }

};



class Researcher

{

public:


    void research()

    {

        cout<<"Research Skills"<<endl;

    }

};



class Professor : public Teacher, public Researcher

{

public:


    void display()

    {

        cout<<"Professor Details";

    }

};



int main()

{

    Professor professor1;


    professor1.teaching();

    professor1.research();

    professor1.display();


    return 0;

}



Output:


Teaching Skills

Research Skills

Professor Details



## Working of Multiple Inheritance


In this example:


Base Class 1:

Teacher


Contains:

- Teaching skills


Base Class 2:

Researcher


Contains:

- Research skills


Derived Class:

Professor


Combines both functionalities.



## Real World Example


Consider a university system.


A Professor may have:


Teacher Features:

- Conduct classes.
- Prepare lessons.


Researcher Features:

- Publish papers.
- Conduct research.



Professor inherits both roles.



## Advantages of Multiple Inheritance


Multiple inheritance provides:


### Code Reusability

Features from multiple classes can be reused.


### Combination of Features

A class can combine different behaviors.


### Better Modeling

Complex real-world relationships can be represented.



## Problems in Multiple Inheritance


Multiple inheritance can create ambiguity problems.


Example:


       Person


       /    \


 Student   Employee


       \    /


     Manager



If both Student and Employee inherit Person, Manager may receive duplicate Person information.


This problem is called the Diamond Problem.



## Handling Ambiguity


C++ provides virtual base classes to solve diamond problems.



## Applications


Multiple inheritance is used in:


### Software Systems


Combining different capabilities into one class.


### Interface Design


A class can implement multiple interfaces.


### Enterprise Applications


Complex object relationships.



## Multiple Inheritance vs Single Inheritance


Single Inheritance:

- One base class.
- Simple relationship.


Multiple Inheritance:

- Multiple base classes.
- Combines different functionalities.



## Key Points


Remember:


- Multiple inheritance allows inheritance from multiple classes.
- It combines features from different base classes.
- It may create ambiguity.
- Virtual inheritance solves duplicate inheritance problems.


Multiple inheritance is powerful but should be used carefully to maintain clear program design.

`

};


export default lesson6;
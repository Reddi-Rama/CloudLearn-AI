const lesson12 = {

  id: "lesson12",

  title: "Virtual Functions",

  content: `

# Virtual Functions


## Introduction


Virtual functions are one of the most important features of Object-Oriented Programming in C++.

They are used to achieve runtime polymorphism.


A virtual function allows a derived class function to be called through a base class pointer or reference.



## What is a Virtual Function?


A virtual function is a member function in the base class that is declared using the virtual keyword.


Syntax:


class Base

{

public:


    virtual void functionName()

    {

    }

};



The virtual keyword tells C++ to decide the function call during runtime.



## Need for Virtual Functions


Without virtual functions, C++ decides function calls during compile time.


With virtual functions, C++ decides function calls during runtime.


This allows the program to choose the correct function based on the actual object type.



## Example Without Virtual Function


#include<iostream>

using namespace std;


class Animal

{

public:


    void sound()

    {

        cout<<"Animal sound";

    }

};


class Dog : public Animal

{

public:


    void sound()

    {

        cout<<"Dog bark";

    }

};



int main()

{

    Animal *ptr;


    Dog dog1;


    ptr = &dog1;


    ptr->sound();


    return 0;

}



Output:


Animal sound



The base class function is called because the function is not virtual.



## Example With Virtual Function


#include<iostream>

using namespace std;


class Animal

{

public:


    virtual void sound()

    {

        cout<<"Animal sound";

    }

};



class Dog : public Animal

{

public:


    void sound()

    {

        cout<<"Dog bark";

    }

};



int main()

{

    Animal *ptr;


    Dog dog1;


    ptr = &dog1;


    ptr->sound();


    return 0;

}



Output:


Dog bark



The derived class function is called because sound() is virtual.



## Runtime Polymorphism


Virtual functions enable runtime polymorphism.


The decision of which function to execute is made while the program is running.



## Pure Virtual Functions


A virtual function can be made pure by assigning zero.


Syntax:


virtual void functionName() = 0;



A class containing a pure virtual function becomes an abstract class.



## Applications of Virtual Functions


Virtual functions are used in:


### Game Development


Different objects have different behaviors.


Example:

Character

↓

Player

Enemy



### Banking Systems


Different account types implement different operations.



### Graphics Applications


Different shapes implement their own drawing methods.



## Advantages of Virtual Functions


They provide:


- Runtime flexibility.
- Dynamic method selection.
- Better software design.
- Support for polymorphism.



## Virtual Function Rules


Remember:


- Declared using virtual keyword.
- Works through pointers and references.
- Supports runtime polymorphism.
- Can be overridden in derived classes.



## Key Points


Remember:


- Virtual functions decide function calls at runtime.
- They allow derived classes to provide their own behavior.
- They are the foundation of runtime polymorphism.
- They make programs more flexible.


Virtual functions are essential for designing advanced and extensible C++ applications.

`

};


export default lesson12;
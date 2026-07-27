const lesson13 = {

  id: "lesson13",

  title: "Pure Virtual Functions",

  content: `

# Pure Virtual Functions


## Introduction


A pure virtual function is a virtual function that does not have any implementation in the base class.


It is used when a base class only defines a common interface and forces derived classes to provide their own implementation.


Pure virtual functions are mainly used to create abstract classes.



## Syntax


virtual returnType functionName() = 0;



The assignment of zero (= 0) makes a virtual function pure.



## Example


class Shape

{

public:


    virtual void draw() = 0;


};



Here:

draw() is a pure virtual function.



## Abstract Classes


A class that contains at least one pure virtual function is called an abstract class.


An abstract class:

- Cannot create objects directly.
- Provides a blueprint for derived classes.
- Requires derived classes to implement pure virtual functions.



Example:


class Shape

{

public:


    virtual void draw() = 0;


};



The following is not allowed:


Shape shape1;



Because Shape is an abstract class.



## Implementing Pure Virtual Functions


Derived classes must provide implementation for pure virtual functions.


Example:


#include<iostream>

using namespace std;


class Shape

{

public:


    virtual void draw() = 0;

};



class Circle : public Shape

{

public:


    void draw()

    {

        cout<<"Drawing Circle";

    }

};



int main()

{

    Circle circle1;


    circle1.draw();


    return 0;

}



Output:


Drawing Circle



## Why Use Pure Virtual Functions?


Pure virtual functions provide:


### Common Interface


All derived classes follow the same structure.


### Better Design


Base classes define what should be done, while derived classes decide how it is done.


### Runtime Polymorphism


They support dynamic behavior through virtual functions.



## Real World Example


Consider a payment system.


Base Class:


Payment


Function:


processPayment()



Different payment methods:


Credit Card

UPI

Net Banking



Each derived class provides its own implementation.



## Advantages of Pure Virtual Functions


They provide:


- Standard interface.
- Better abstraction.
- Flexible design.
- Runtime polymorphism.
- Improved software architecture.



## Pure Virtual Function Rules


Remember:


- Declared using virtual keyword.
- Ends with = 0.
- Makes a class abstract.
- Must be overridden by derived classes.



## Applications


Pure virtual functions are used in:


### Framework Development

Creating common interfaces.


### Game Development

Different objects implement different behaviors.


### Software Libraries

Providing standard structures.



## Key Points


Remember:


- Pure virtual functions have no definition in base class.
- Abstract classes cannot create objects.
- Derived classes must implement pure virtual functions.
- They support abstraction and polymorphism.


Pure virtual functions help developers create flexible and scalable C++ designs.

`

};


export default lesson13;
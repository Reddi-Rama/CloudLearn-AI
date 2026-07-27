const lesson14 = {

  id: "lesson14",

  title: "Abstract Classes",

  content: `

# Abstract Classes


## Introduction


An abstract class is a class that cannot be used to create objects directly.

It is designed to act as a base class for other classes.


Abstract classes are created using pure virtual functions.



## What is an Abstract Class?


A class containing at least one pure virtual function is called an abstract class.


Example:


class Vehicle

{

public:


    virtual void start() = 0;


};



Vehicle is an abstract class.



## Why Use Abstract Classes?


Abstract classes provide a common design structure for derived classes.


They define:

- What functionality must exist.
- What operations derived classes should implement.



## Example Program


#include<iostream>

using namespace std;


class Vehicle

{

public:


    virtual void start() = 0;


};



class Car : public Vehicle

{

public:


    void start()

    {

        cout<<"Car starts with key";

    }

};



class Bike : public Vehicle

{

public:


    void start()

    {

        cout<<"Bike starts with button";

    }

};



int main()

{

    Car car1;

    Bike bike1;


    car1.start();

    bike1.start();


    return 0;

}



Output:


Car starts with key

Bike starts with button



## Features of Abstract Classes


Abstract classes:


- Cannot create objects.
- Can contain normal functions.
- Can contain data members.
- Can contain constructors.
- Provide common functionality.



## Abstract Class with Normal Functions


An abstract class can contain both:

- Pure virtual functions.
- Normal member functions.



Example:


class Shape

{

public:


    void display()

    {

        cout<<"Shape";

    }


    virtual void draw() = 0;


};



## Real World Example


Consider a payment application.


Abstract Class:


Payment


Common function:


displayReceipt()



Pure virtual function:


makePayment()



Derived Classes:


CreditCard

UPI

Cash



Each class provides its own payment method.



## Advantages of Abstract Classes


Abstract classes provide:


### Abstraction


Hide unnecessary implementation details.


### Code Reusability


Common functionality can be written once.


### Standard Design


All derived classes follow the same structure.


### Flexibility


New derived classes can be added easily.



## Abstract Class vs Normal Class


Normal Class:

- Objects can be created.
- Complete implementation may exist.


Abstract Class:

- Objects cannot be created.
- Contains at least one pure virtual function.
- Used as a blueprint.



## Applications


Abstract classes are used in:


### Software Frameworks

Defining common interfaces.


### Game Development

Creating common object behaviors.


### Enterprise Applications

Designing reusable systems.



## Key Points


Remember:


- Abstract classes cannot create objects.
- They contain pure virtual functions.
- Derived classes must implement required functions.
- They provide abstraction and flexibility.


Abstract classes are an important feature of C++ that helps developers design large and maintainable software systems.

`

};


export default lesson14;
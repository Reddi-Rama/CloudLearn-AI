const lesson11 = {

  id: "lesson11",

  title: "Function Overriding",

  content: `

# Function Overriding


## Introduction


Function overriding is an important concept in Object-Oriented Programming.

It allows a derived class to provide its own implementation of a function that is already defined in the base class.


In function overriding:

- Base class contains a function.
- Derived class creates a function with the same name and parameters.
- Derived class implementation replaces the base class implementation.



## Why Do We Need Function Overriding?


Sometimes a derived class needs different behavior from its base class.


Example:


A Vehicle class may have:


display()


function.


A Car class may need its own display() behavior.


Function overriding allows this customization.



## Rules of Function Overriding


For overriding:


- Function name must be same.
- Parameters must be same.
- Function must exist in the base class.
- Derived class provides a new implementation.



## Syntax


class Base

{

public:


    void display()

    {

    }

};



class Derived : public Base

{

public:


    void display()

    {

    }

};



## Example Program


#include<iostream>

using namespace std;


class Animal

{

public:


    void sound()

    {

        cout<<"Animal makes sound";

    }

};



class Dog : public Animal

{

public:


    void sound()

    {

        cout<<"Dog barks";

    }

};



int main()

{

    Dog dog1;


    dog1.sound();


    return 0;

}



Output:


Dog barks



## Working of Function Overriding


In this example:


Base Class:

Animal


Function:

sound()



Derived Class:

Dog


New implementation:

sound()



The Dog class overrides the sound() function of Animal.



## Calling Base Class Function


A derived class can access the base class version using scope resolution operator.


Example:


Dog dog1;


dog1.Animal::sound();



This calls the base class function.



## Function Overriding with Virtual Functions


Normal overriding is resolved at compile time.


To achieve runtime polymorphism, virtual functions are used.


Example:


class Animal

{

public:


    virtual void sound()

    {

    }

};



The virtual keyword enables dynamic binding.



## Real World Applications


Function overriding is used in:


### Payment Systems


Payment class:


processPayment()



Derived classes:


CreditCardPayment

UPIPayment



Each provides its own implementation.



### Vehicle Systems


Vehicle:


startEngine()



Derived:


Car

Bike



## Advantages of Function Overriding


Provides:


- Runtime flexibility.
- Customized behavior.
- Better code organization.
- Support for polymorphism.



## Difference Between Overloading and Overriding


Function Overloading:

- Same function name.
- Different parameters.
- Same class.


Function Overriding:

- Same function name.
- Same parameters.
- Base and derived classes.



## Key Points


Remember:


- Overriding allows derived classes to redefine functions.
- Function signature must match.
- Virtual functions enable runtime overriding.
- It supports polymorphism.


Function overriding allows C++ programs to achieve flexible and extensible designs.

`

};


export default lesson11;
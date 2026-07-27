const lesson12 = {

  id: "lesson12",

  title: "this Pointer",

  content: `

# this Pointer


## Introduction


In C++, every object has its own memory location.

When a member function is called, C++ provides a special pointer called the this pointer.


The this pointer stores the address of the current object that is calling the function.


## What is this Pointer?


The this pointer is an implicit pointer available inside all non-static member functions.


It points to the current object.


Example:


class Student

{

public:


    void display()

    {

        cout << this;

    }

};



Here this stores the address of the object that called display().



## Need for this Pointer


The this pointer is mainly used to:


- Differentiate between local variables and class members.
- Return the current object.
- Access current object data.
- Implement method chaining.



## Example: Using this Pointer


#include<iostream>

using namespace std;


class Student

{

private:


    int rollNumber;


public:


    void setRollNumber(int rollNumber)

    {

        this->rollNumber = rollNumber;

    }


    void display()

    {

        cout << rollNumber;

    }

};


int main()

{

    Student student1;


    student1.setRollNumber(101);


    student1.display();


    return 0;

}



Output:


101



## Understanding this-> Operator


Consider:


this->rollNumber = rollNumber;



Left side:


this->rollNumber


represents the class data member.


Right side:


rollNumber


represents the function parameter.



The this pointer removes the confusion between both variables.



## Returning Current Object


The this pointer can return the current object.


Example:


Student& display()

{

    return *this;

}



This allows function chaining.



## Method Chaining


Example:


object.setName().setAge();



Multiple functions can be called together using the returned object.



## Applications of this Pointer


The this pointer is used in:


### Constructor Initialization

Initializing members using parameters.


### Operator Overloading

Working with current objects.


### Method Chaining

Calling multiple functions together.



## Limitations


The this pointer:

- Cannot be used inside static member functions.
- Always refers to the current object.
- Is automatically provided by C++.



## Key Points


Remember:


- this stores the current object's address.
- It is available inside non-static member functions.
- this-> accesses current object members.
- It helps avoid naming conflicts.


The this pointer is an important feature that provides better control over objects in C++.

`

};


export default lesson12;
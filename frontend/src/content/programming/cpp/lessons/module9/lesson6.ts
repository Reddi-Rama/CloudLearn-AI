const lesson6 = {

  id: "lesson6",

  title: "Constructors",

  content: `

# Constructors


## Introduction


A constructor is a special member function of a class that is automatically called when an object is created.


The main purpose of a constructor is to initialize object data.


Unlike normal functions, constructors:

- Have the same name as the class.
- Do not have a return type.
- Execute automatically.


## Syntax of Constructor


class ClassName

{

public:


    ClassName()

    {

    }


};



The constructor name must exactly match the class name.


## Example of Constructor


class Student

{

public:


    Student()

    {

        cout<<"Object Created";

    }


};



When an object is created, the constructor executes automatically.



## Simple Constructor Example


#include<iostream>

using namespace std;


class Student

{

public:


    Student()

    {

        cout<<"Student object created";

    }

};


int main()

{

    Student student1;


    return 0;

}



Output:


Student object created



## Types of Constructors


C++ provides different types of constructors:


- Default Constructor
- Parameterized Constructor
- Copy Constructor



# Default Constructor


A constructor without parameters is called a default constructor.


Example:


class Employee

{

public:


    Employee()

    {

        cout<<"Default Constructor";

    }

};



# Parameterized Constructor


A constructor that accepts arguments is called a parameterized constructor.


Example:


class Student

{

public:


    int rollNumber;


    Student(int value)

    {

        rollNumber = value;

    }

};



Object creation:


Student student1(101);



# Copy Constructor


A constructor that creates an object by copying another object is called a copy constructor.


Example:


Student student2(student1);



## Advantages of Constructors


Constructors provide:


- Automatic initialization.
- Cleaner code.
- Better object management.
- Reduced repetition.



## Real World Example


Bank Account:


When an account object is created:

- Account number can be initialized.
- Customer details can be assigned.
- Default values can be set.



## Important Points


Remember:


- Constructor name is same as class name.
- Constructor has no return type.
- Constructor runs automatically.
- Constructors initialize objects.


Constructors are essential for creating properly initialized objects in C++.

`

};


export default lesson6;
const lesson7 = {

  id: "lesson7",

  title: "Types of Constructors",

  content: `

# Types of Constructors


## Introduction


Constructors are used to initialize objects when they are created.

C++ provides different types of constructors to support different initialization requirements.


The main types are:


- Default Constructor
- Parameterized Constructor
- Copy Constructor



# Default Constructor


## Definition


A constructor that does not accept any arguments is called a default constructor.


It initializes objects with default values.


## Example


#include<iostream>

using namespace std;


class Student

{

public:


    Student()

    {

        cout<<"Default Constructor Called";

    }

};


int main()

{

    Student student1;


    return 0;

}



Output:


Default Constructor Called



## Usage


Default constructors are useful when:

- Default values are required.
- Objects need simple initialization.
- No external data is provided.



# Parameterized Constructor


## Definition


A constructor that accepts parameters is called a parameterized constructor.


It allows different objects to be initialized with different values.



## Example


class Student

{

public:


    int rollNumber;


    Student(int roll)

    {

        rollNumber = roll;

    }

};



Object creation:


Student student1(101);



The value 101 is passed to the constructor.



## Advantages


Parameterized constructors provide:


- Flexible initialization.
- Different values for different objects.
- Better object creation.



# Copy Constructor


## Definition


A copy constructor initializes one object using another object of the same class.


Syntax:


ClassName(const ClassName &object)

{

}



## Example


class Student

{

public:


    int marks;


    Student(int value)

    {

        marks = value;

    }


    Student(const Student &obj)

    {

        marks = obj.marks;

    }

};



Object creation:


Student student1(90);


Student student2(student1);



student2 receives the same values as student1.



## Constructor Overloading


C++ allows multiple constructors in the same class.

This is called constructor overloading.


Example:


class Student

{

public:


    Student()

    {

    }


    Student(int id)

    {

    }


};



Different objects can use different constructors.



## Comparison of Constructors


Default Constructor:

- No parameters.
- Provides default initialization.


Parameterized Constructor:

- Accepts parameters.
- Provides custom initialization.


Copy Constructor:

- Copies existing object.
- Used for object duplication.



## Real World Example


Employee System:


Default Constructor:

Creates empty employee record.


Parameterized Constructor:

Creates employee with given details.


Copy Constructor:

Creates duplicate employee record.



## Best Practices


While using constructors:


- Initialize all important data.
- Avoid unnecessary complexity.
- Use constructor overloading carefully.
- Prefer initialization lists in advanced C++.



## Key Points


Remember:


- Default constructor has no arguments.
- Parameterized constructor receives values.
- Copy constructor copies objects.
- Constructors execute automatically.


Constructors make object creation easier, safer, and more organized in C++.

`

};


export default lesson7;
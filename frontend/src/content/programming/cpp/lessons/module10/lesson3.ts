const lesson3 = {

  id: "lesson3",

  title: "Inheritance Modes",

  content: `

# Inheritance Modes


## Introduction


In C++, inheritance modes control how the members of a base class are inherited by a derived class.


The inheritance mode is specified while creating a derived class.


C++ provides three inheritance modes:


- Public Inheritance
- Protected Inheritance
- Private Inheritance



## Syntax


class DerivedClass : accessSpecifier BaseClass

{

};


Example:


class Student : public Person

{

};



The access specifier determines the accessibility of inherited members.



# Public Inheritance


## Definition


In public inheritance:

- Public members of the base class remain public in the derived class.
- Protected members remain protected.
- Private members cannot be accessed directly.


Example:


class Person

{

public:

    string name;


protected:

    int age;


private:

    int password;

};



class Student : public Person

{

};



Accessibility:


name → public

age → protected

password → not accessible



## Usage


Public inheritance represents an "is-a" relationship.


Examples:


Student is a Person.


Car is a Vehicle.



# Protected Inheritance


## Definition


In protected inheritance:


- Public members of the base class become protected.
- Protected members remain protected.
- Private members are not accessible.


Example:


class Student : protected Person

{

};



Accessibility:


Public members → Protected

Protected members → Protected

Private members → Not accessible



## Usage


Protected inheritance is used when derived classes need access but outside users should not access inherited members.



# Private Inheritance


## Definition


In private inheritance:


- Public members become private.
- Protected members become private.
- Private members are not accessible.


Example:


class Student : private Person

{

};



Accessibility:


Public members → Private

Protected members → Private

Private members → Not accessible



## Comparison of Inheritance Modes


Public Inheritance:


- Public remains public.
- Protected remains protected.
- Represents an "is-a" relationship.


Protected Inheritance:


- Public becomes protected.
- Used for controlled inheritance.


Private Inheritance:


- Public and protected become private.
- Used for implementation purposes.



## Example Program


#include<iostream>

using namespace std;


class Person

{

public:


    string name;


    void display()

    {

        cout << name;

    }

};



class Student : public Person

{

public:


    int rollNumber;

};



int main()

{

    Student student1;


    student1.name = "Alex";


    student1.display();


    return 0;

}



Output:


Alex



## Importance of Inheritance Modes


Inheritance modes provide:


- Data protection.
- Controlled accessibility.
- Better class design.
- Improved security.



## Real World Example


Banking System:


Public inheritance:


Account → Savings Account


Protected inheritance:


Internal banking modules.


Private inheritance:


Implementation-based relationships.



## Key Points


Remember:


- Public inheritance keeps accessibility open.
- Protected inheritance restricts access.
- Private inheritance hides inherited members.
- Inheritance modes control class relationships.


Choosing the correct inheritance mode helps developers design secure and maintainable C++ applications.

`

};


export default lesson3;
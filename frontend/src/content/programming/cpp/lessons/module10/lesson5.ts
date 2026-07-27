const lesson5 = {

  id: "lesson5",

  title: "Single Inheritance",

  content: `

# Single Inheritance


## Introduction


Single inheritance is the simplest type of inheritance in C++.

In single inheritance, one derived class inherits properties and behaviors from one base class.


Structure:


Base Class

    |

    |

Derived Class



Example:


Person

    |

    |

Student



The Student class can use features of the Person class.



## Syntax of Single Inheritance


class BaseClass

{

};


class DerivedClass : public BaseClass

{

};



The derived class inherits members from the base class using the inheritance symbol (:).



## Example Program


#include<iostream>

using namespace std;


class Person

{

public:


    string name;


    void displayName()

    {

        cout << name << endl;

    }

};



class Student : public Person

{

public:


    int rollNumber;


    void displayStudent()

    {

        cout << rollNumber;

    }

};



int main()

{

    Student student1;


    student1.name = "Alex";

    student1.rollNumber = 101;


    student1.displayName();

    student1.displayStudent();


    return 0;

}



Output:


Alex

101



## Working of Single Inheritance


In the above example:


Base Class:

Person


Contains:

- name
- displayName()


Derived Class:

Student


Contains:

- rollNumber
- displayStudent()



Student can access the public members of Person because it inherits Person.



## Real World Example


Consider a vehicle system.


Base Class:


Vehicle


Properties:

- Speed
- Color
- Model



Derived Class:


Car


Additional properties:

- Number of doors
- Fuel type



Car inherits common vehicle features.



## Advantages of Single Inheritance


Single inheritance provides:


### Code Reusability

Common features are written once and reused.


### Simple Design

The relationship between classes is easy to understand.


### Better Maintenance

Changes in the base class automatically affect derived classes.



## Applications


Single inheritance is used in:


### Educational Systems


Person

↓

Student



### Banking Systems


Account

↓

Savings Account



### Transport Systems


Vehicle

↓

Car



## Important Points


Remember:


- Single inheritance has one base class.
- One derived class inherits from it.
- It is simple and commonly used.
- It supports code reuse.


Single inheritance is the foundation for understanding advanced inheritance concepts in C++.

`

};


export default lesson5;
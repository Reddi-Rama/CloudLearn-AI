const lesson7 = {

  id: "lesson7",

  title: "Multilevel Inheritance",

  content: `

# Multilevel Inheritance


## Introduction


Multilevel inheritance is a type of inheritance where a class is derived from another derived class.


In this inheritance type, inheritance happens in multiple levels.


Structure:


Base Class


    |


Derived Class


    |


Another Derived Class



Example:


Person


    |


Employee


    |


Manager



Here:

- Employee inherits Person.
- Manager inherits Employee.



## Syntax of Multilevel Inheritance


class BaseClass

{

};



class DerivedClass : public BaseClass

{

};



class NewDerivedClass : public DerivedClass

{

};



## Example Program


#include<iostream>

using namespace std;


class Person

{

public:


    string name;


    void displayPerson()

    {

        cout << name << endl;

    }

};



class Employee : public Person

{

public:


    int employeeId;


    void displayEmployee()

    {

        cout << employeeId << endl;

    }

};



class Manager : public Employee

{

public:


    string department;


    void displayManager()

    {

        cout << department;

    }

};



int main()

{

    Manager manager1;


    manager1.name = "Arun";

    manager1.employeeId = 101;

    manager1.department = "IT";


    manager1.displayPerson();

    manager1.displayEmployee();

    manager1.displayManager();


    return 0;

}



Output:


Arun

101

IT



## Working of Multilevel Inheritance


In the above example:


Level 1:


Person


Contains:

- Name
- displayPerson()



Level 2:


Employee


Inherits Person and adds:

- Employee ID
- displayEmployee()



Level 3:


Manager


Inherits Employee and adds:

- Department
- displayManager()



Manager can access features of both Person and Employee.



## Real World Example


Consider an organization system.


Person:

Common details:

- Name
- Age


Employee:

Additional details:

- Employee ID
- Salary


Manager:

Additional details:

- Department
- Team Size



The Manager class receives features from both previous classes.



## Advantages of Multilevel Inheritance


Multilevel inheritance provides:


### Code Reusability

Existing classes can be reused at different levels.


### Logical Hierarchy

Relationships between classes become clear.


### Easy Expansion

New levels can be added when required.



## Applications


Multilevel inheritance is used in:


### Company Management


Person

↓

Employee

↓

Manager



### Vehicle Systems


Vehicle

↓

Car

↓

Sports Car



### Educational Systems


Person

↓

Student

↓

Graduate Student



## Limitations


Multilevel inheritance can become complex when:

- Too many levels are created.
- Class relationships become difficult to understand.


A good design should maintain a reasonable inheritance depth.



## Key Points


Remember:


- Multilevel inheritance creates a chain of inheritance.
- A derived class can become a base class.
- It supports hierarchical software design.
- It improves code reuse.


Multilevel inheritance helps developers represent step-by-step relationships between classes in C++.

`

};


export default lesson7;
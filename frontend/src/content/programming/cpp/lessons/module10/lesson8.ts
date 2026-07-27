const lesson8 = {

  id: "lesson8",

  title: "Hierarchical Inheritance",

  content: `

# Hierarchical Inheritance


## Introduction


Hierarchical inheritance occurs when multiple derived classes inherit from a single base class.


In this type of inheritance, one parent class provides common features to multiple child classes.


Structure:


             Base Class


          /      |      \\


    Derived  Derived  Derived



Example:


              Person


          /          \\


      Student       Teacher



## Syntax of Hierarchical Inheritance


class BaseClass

{

};



class DerivedClass1 : public BaseClass

{

};



class DerivedClass2 : public BaseClass

{

};



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

        cout << rollNumber << endl;

    }

};



class Teacher : public Person

{

public:


    string subject;


    void displayTeacher()

    {

        cout << subject;

    }

};



int main()

{

    Student student1;


    student1.name = "Rahul";

    student1.rollNumber = 101;


    student1.displayName();

    student1.displayStudent();



    Teacher teacher1;


    teacher1.name = "Priya";

    teacher1.subject = "Computer Science";


    teacher1.displayName();

    teacher1.displayTeacher();


    return 0;

}



Output:


Rahul

101

Priya

Computer Science



## Working of Hierarchical Inheritance


In this example:


Base Class:


Person


Common features:

- Name
- displayName()



Derived Class 1:


Student


Additional features:

- Roll Number



Derived Class 2:


Teacher


Additional features:

- Subject



Both Student and Teacher reuse the features of Person.



## Real World Example


Consider a university management system.


Base Class:


Person


Contains:

- Name
- Age
- Address



Derived Classes:


Student:

- Roll Number
- Course


Faculty:

- Employee ID
- Department


Administrator:

- Role
- Permissions



## Advantages of Hierarchical Inheritance


Hierarchical inheritance provides:


### Code Reuse

Common functionality is written once.


### Better Organization

Related classes are grouped under one parent class.


### Easy Maintenance

Changes in the base class affect all derived classes.



## Applications


Hierarchical inheritance is used in:


### Educational Systems


Person

↓

Student

Teacher



### Banking Systems


Account

↓

Savings Account

Current Account



### Transportation Systems


Vehicle

↓

Car

Bike



## Difference Between Multilevel and Hierarchical Inheritance


Multilevel Inheritance:

- Creates a chain.
- One class inherits another derived class.


Example:

A → B → C



Hierarchical Inheritance:

- Multiple classes inherit one base class.


Example:

A → B

A → C



## Key Points


Remember:


- One base class can have multiple derived classes.
- Common features are stored in the base class.
- It improves code reuse.
- It represents parent-child relationships.


Hierarchical inheritance is useful when multiple classes share common properties but have different behaviors.

`

};


export default lesson8;
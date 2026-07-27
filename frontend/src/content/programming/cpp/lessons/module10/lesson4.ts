const lesson4 = {

  id: "lesson4",

  title: "Access Control in Inheritance",

  content: `

# Access Control in Inheritance


## Introduction


Access control defines how class members can be accessed after inheritance.


When a class inherits another class, the accessibility of members depends on:

- Original access level.
- Type of inheritance used.


Understanding access control is important for designing secure class hierarchies.



## Access Levels in C++


C++ provides three access levels:


## Public Members


Public members can be accessed from anywhere through objects.


Example:


class Person

{

public:

    string name;

};



## Protected Members


Protected members can be accessed:

- Inside the same class.
- Inside derived classes.


They cannot be accessed directly using objects.


Example:


class Person

{

protected:

    int age;

};



## Private Members


Private members can only be accessed inside the same class.


Derived classes cannot directly access private members.


Example:


class Person

{

private:

    int password;

};



## Access Control Table


Public Inheritance:


Base public → Derived public

Base protected → Derived protected

Base private → Not accessible



Protected Inheritance:


Base public → Derived protected

Base protected → Derived protected

Base private → Not accessible



Private Inheritance:


Base public → Derived private

Base protected → Derived private

Base private → Not accessible



## Example Program


#include<iostream>

using namespace std;


class Person

{

protected:


    int age;


public:


    string name;


};



class Student : public Person

{

public:


    void setData()

    {

        name = "Rahul";

        age = 20;

    }


    void display()

    {

        cout << name << endl;

        cout << age;

    }

};



int main()

{

    Student student1;


    student1.setData();


    student1.display();


    return 0;

}



Output:


Rahul

20



## Private Members in Inheritance


Private members are inherited internally but cannot be directly accessed by derived classes.


Example:


class Person

{

private:


    int id;

};



class Student : public Person

{

};



Student cannot directly use id.



## Using Public Functions to Access Private Data


Private data can be accessed through public member functions.


Example:


class Person

{

private:


    int age;


public:


    void setAge(int value)

    {

        age = value;

    }

};



This maintains data security.



## Importance of Access Control


Access control provides:


### Data Protection

Prevents unauthorized access.


### Better Design

Creates clear relationships between classes.


### Security

Controls how inherited features are used.



## Real World Example


Hospital System:


Person class:


Protected:

- Name
- Age


Private:

- Medical ID


Doctor class:

Can access allowed information but cannot directly modify private details.



## Key Points


Remember:


- Public members are accessible widely.
- Protected members support inheritance.
- Private members are hidden.
- Inheritance type changes accessibility.


Access control in inheritance helps create secure and well-structured object-oriented programs.

`

};


export default lesson4;
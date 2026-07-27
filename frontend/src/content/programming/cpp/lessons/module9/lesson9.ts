const lesson9 = {

  id: "lesson9",

  title: "Constructor and Destructor Execution Order",

  content: `

# Constructor and Destructor Execution Order


## Introduction


When multiple objects are created in a program, constructors and destructors follow a specific execution order.


Understanding this order is important for managing resources correctly.


## Constructor Execution Order


Constructors are executed when objects are created.


The order depends on the order in which objects are declared.


Example:


Student student1;

Student student2;



Execution order:


1. Constructor of student1 executes.

2. Constructor of student2 executes.



## Destructor Execution Order


Destructors execute in the reverse order of object creation.


This follows the Last In First Out principle.


Example:


Student student1;

Student student2;



Creation order:


student1

then

student2



Destruction order:


student2

then

student1



## Example Program


#include<iostream>

using namespace std;


class Demo

{

public:


    Demo()

    {

        cout<<"Constructor"<<endl;

    }


    ~Demo()

    {

        cout<<"Destructor"<<endl;

    }

};


int main()

{

    Demo object1;

    Demo object2;


    return 0;

}



Output:


Constructor

Constructor

Destructor

Destructor



## Local Objects


Local objects are destroyed automatically when they leave their scope.


Example:


void function()

{

    Demo object1;

}



When the function ends:

- object1 is destroyed.
- Destructor is called.



## Multiple Objects Example


#include<iostream>

using namespace std;


class Employee

{

public:


    Employee()

    {

        cout<<"Employee Created"<<endl;

    }


    ~Employee()

    {

        cout<<"Employee Removed"<<endl;

    }

};


int main()

{

    Employee employee1;

    Employee employee2;

    Employee employee3;


    return 0;

}



Execution:


Creation:

employee1

employee2

employee3



Destruction:

employee3

employee2

employee1



## Dynamic Objects


Objects created using new are destroyed using delete.


Example:


Employee *employee1 = new Employee();


delete employee1;



The destructor executes when delete is used.



## Importance of Execution Order


Understanding execution order helps in:


- Managing memory.
- Releasing resources correctly.
- Debugging programs.
- Designing efficient applications.



## Real World Example


Consider a banking system:


Constructor:

Creates account object.


Destructor:

Closes resources when account object is removed.



## Key Points


Remember:


- Constructors execute during object creation.
- Destructors execute during object destruction.
- Destruction happens in reverse order.
- Dynamic objects require delete.



Constructor and destructor execution order is important for writing reliable object-oriented C++ programs.

`

};


export default lesson9;
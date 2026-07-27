const lesson3 = {

  id: "lesson3",

  title: "Data Members and Member Functions",

  content: `

# Data Members and Member Functions


## Introduction


A class contains two major components:


- Data Members
- Member Functions


Together, they define the properties and behavior of objects.


## Data Members


Data members are variables declared inside a class.

They store information related to an object.


Example:


class Employee

{

public:

    int id;

    string name;

    double salary;

};


Here:


id

name

salary


are data members.


They represent employee information.


## Member Functions


Member functions are functions defined inside a class.

They describe the actions that an object can perform.


Example:


class Employee

{

public:


    void display()

    {

    }

};


display() is a member function.



## Combining Data Members and Member Functions


Example:


class Student

{

public:


    int rollNumber;

    string name;


    void display()

    {

        cout << rollNumber;

        cout << name;

    }

};


This class contains:


Data:

- rollNumber
- name


Behavior:

- display()



## Accessing Data Members


Objects access data members using the dot operator.


Example:


student1.name;


student1.rollNumber;



## Calling Member Functions


Member functions are called using objects.


Example:


student1.display();



The object requests the function execution.



## Complete Example


#include<iostream>

using namespace std;


class Employee

{

public:


    int id;

    string name;

    double salary;


    void display()

    {

        cout << id << endl;

        cout << name << endl;

        cout << salary;

    }

};



int main()

{

    Employee employee1;


    employee1.id = 101;

    employee1.name = "Arun";

    employee1.salary = 60000;


    employee1.display();


    return 0;

}



Output:


101

Arun

60000



## Types of Member Functions


Common member functions include:


Display Functions:

Used to show object information.


Example:


display();



Update Functions:

Used to modify object data.


Example:


updateSalary();



Calculation Functions:

Used to perform operations.


Example:


calculateAmount();



Validation Functions:

Used to check data correctness.


Example:


validateData();



## Real World Example


Bank Account Class:


Data Members:


- Account Number
- Holder Name
- Balance


Member Functions:


- Deposit()
- Withdraw()
- CheckBalance()



## Advantages of Member Functions


Member functions provide:


- Better code organization.
- Data protection.
- Code reuse.
- Easy maintenance.
- Improved readability.



## Key Points


Remember:


- Data members store object information.
- Member functions define object behavior.
- Classes combine data and functions.
- Objects access class members.


Data members and member functions together create the structure and behavior of objects in C++.

`

};


export default lesson3;
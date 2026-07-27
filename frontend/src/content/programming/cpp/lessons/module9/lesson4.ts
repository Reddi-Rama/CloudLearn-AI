const lesson4 = {

  id: "lesson4",

  title: "Access Specifiers",

  content: `

# Access Specifiers


## Introduction


Access specifiers are keywords in C++ that control the visibility and accessibility of class members.


They determine:

- Who can access data members.
- Who can access member functions.
- How data security is maintained.


C++ provides three main access specifiers:


- public
- private
- protected


## Public Access Specifier


Members declared as public can be accessed from anywhere in the program.


Example:


class Student

{

public:

    int rollNumber;

    void display();

};


Here, rollNumber and display() can be accessed using objects.


Example:


student1.rollNumber;

student1.display();



## Private Access Specifier


Private members can only be accessed inside the class.

They cannot be directly accessed using objects.


Example:


class Account

{

private:

    double balance;

};


The following is not allowed:


account1.balance;



Private access provides data security.


## Protected Access Specifier


Protected members can be accessed:

- Inside the same class.
- Inside derived classes.


They cannot be accessed directly using objects.


Example:


class Parent

{

protected:

    int value;

};



## Default Access in Class


In C++, class members are private by default.


Example:


class Student

{

    int rollNumber;

};


Here rollNumber is private.



## Access Specifiers Example


#include<iostream>

using namespace std;


class Employee

{

private:

    double salary;


public:


    string name;


    void setSalary(double amount)

    {

        salary = amount;

    }


    void display()

    {

        cout << name << endl;

        cout << salary;

    }

};


int main()

{

    Employee employee1;


    employee1.name = "Arun";


    employee1.setSalary(50000);


    employee1.display();


    return 0;

}



Output:


Arun

50000



## Why Use Access Specifiers?


Access specifiers provide:


### Data Security


Private data cannot be modified directly.


### Controlled Access


Functions can control how data is changed.


### Better Program Design


Classes become easier to maintain.



## Public vs Private vs Protected


Public:

- Accessible everywhere.
- Less security.
- Used for functions available to users.


Private:

- Accessible only inside class.
- Provides maximum data protection.


Protected:

- Accessible inside class and derived classes.
- Mainly used in inheritance.



## Real World Example


Bank Account:


Private Data:

- Balance
- Account PIN


Public Functions:

- Deposit()
- Withdraw()
- CheckBalance()



The user cannot directly change the balance.



## Key Points


Remember:


- public allows external access.
- private hides data from outside.
- protected supports inheritance.
- Access specifiers improve security.


Access specifiers are an important part of encapsulation and object-oriented programming in C++.

`

};


export default lesson4;
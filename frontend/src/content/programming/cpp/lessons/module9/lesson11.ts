const lesson11 = {

  id: "lesson11",

  title: "Friend Functions",

  content: `

# Friend Functions


## Introduction


Normally, private and protected members of a class cannot be accessed outside the class.


However, C++ provides a special feature called a friend function that allows an external function to access private and protected members.


A friend function is not a member of the class but has special permission to access its data.



## Syntax


class ClassName

{

private:

    data;


public:

    friend returnType functionName();

};



The keyword friend is used inside the class declaration.



## Example of Friend Function


#include<iostream>

using namespace std;


class Student

{

private:


    int marks;


public:


    Student()

    {

        marks = 95;

    }


    friend void display(Student);

};



void display(Student student)

{

    cout << student.marks;

}



int main()

{

    Student student1;


    display(student1);


    return 0;

}



Output:


95



## Characteristics of Friend Functions


A friend function:


- Is not a class member.
- Can access private data.
- Is declared using friend keyword.
- Is called like a normal function.



## Why Use Friend Functions?


Friend functions are useful when:


- Two or more classes need to share information.
- External functions need controlled access.
- Operator overloading is required.



## Friend Function with Multiple Classes


A single friend function can access private members of multiple classes.


Example:


class Student

{

friend void compare(Student, Teacher);

};



This allows cooperation between different classes.



## Advantages of Friend Functions


Friend functions provide:


- Controlled access to private data.
- Better communication between classes.
- Support for operator overloading.
- Improved flexibility.



## Disadvantages


Friend functions may reduce encapsulation because they allow external access to private members.


Therefore, they should be used carefully.



## Real World Example


Banking System:


Class:

Account


Private Data:

- Balance


Friend Function:

Calculate interest between accounts.



## Friend Function vs Member Function


Member Function:

- Belongs to the class.
- Called using objects.
- Has access to all class members.


Friend Function:

- Does not belong to the class.
- Called like a normal function.
- Has special permission to access private members.



## Applications


Friend functions are used in:


- Operator overloading.
- Mathematical operations.
- Communication between classes.
- Complex data processing.



## Key Points


Remember:


- Friend functions are outside class functions.
- They can access private members.
- They are declared using friend keyword.
- They should be used only when necessary.


Friend functions provide controlled flexibility while working with classes in C++.

`

};


export default lesson11;
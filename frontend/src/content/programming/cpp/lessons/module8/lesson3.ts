const lesson3 = {

  id: "lesson3",

  title: "Accessing Structure Members",

  content: `
# Accessing Structure Members


## Introduction

After creating a structure and its variables, the next step is accessing the data stored inside the structure.

C++ provides operators to access structure members.

The most commonly used operator is the dot operator (.).


## Dot Operator (.)

The dot operator is used to access members of a structure variable.


Syntax:


\`\`\`cpp
structureVariable.memberName;
\`\`\`


Example:


\`\`\`cpp
student.name;
\`\`\`


Here:

- student is the structure variable.
- name is the structure member.


## Accessing Structure Data


Consider:


\`\`\`cpp
struct Student
{
    int rollNumber;
    string name;
    float marks;
};


Student student1;
\`\`\`


The members can be accessed as:


\`\`\`cpp
student1.rollNumber;

student1.name;

student1.marks;
\`\`\`


## Example Program


\`\`\`cpp
#include<iostream>
using namespace std;


struct Student
{
    int rollNumber;
    string name;
    float marks;
};


int main()
{
    Student student1;


    student1.rollNumber = 10;

    student1.name = "Kiran";

    student1.marks = 92.5;


    cout<<"Roll Number : "
        <<student1.rollNumber
        <<endl;


    cout<<"Name : "
        <<student1.name
        <<endl;


    cout<<"Marks : "
        <<student1.marks;


    return 0;
}
\`\`\`


Output:


\`\`\`
Roll Number : 10

Name : Kiran

Marks : 92.5
\`\`\`


## Modifying Structure Members

Structure members can be modified after creation.


Example:


\`\`\`cpp
student1.marks = 95;
\`\`\`


The existing value is replaced with the new value.


## Taking Input for Structure Members

User input can also be stored directly inside structures.


Example:


\`\`\`cpp
cin>>student1.rollNumber;

cin>>student1.name;

cin>>student1.marks;
\`\`\`


## Multiple Structure Variables

Different variables of the same structure type can store different information.


Example:


\`\`\`cpp
Student student1;

Student student2;
\`\`\`


Accessing:


\`\`\`cpp
student1.name;

student2.name;
\`\`\`


Each variable maintains its own data.


## Structure Member Access with Pointers

Pointers can also access structure members using the arrow operator (->).


Example:


\`\`\`cpp
Student *ptr = &student1;


ptr->name;
\`\`\`


The arrow operator is used when a pointer stores the address of a structure variable.


## Applications

Accessing structure members is used in:

- Database records.
- Employee systems.
- Banking applications.
- Hospital management systems.


## Best Practices

While accessing structure members:

- Use meaningful member names.
- Keep related data together.
- Initialize members properly.
- Avoid unnecessary duplication.


## Key Points

Remember:

- Dot operator accesses normal structure variables.
- Arrow operator accesses structure members through pointers.
- Structure members can store and modify data.
- Each structure variable has separate memory.


Accessing structure members allows programs to work with organized real-world data efficiently.
`

};

export default lesson3;
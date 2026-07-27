const lesson4 = {

  id: "lesson4",

  title: "Arrays of Structures",

  content: `
# Arrays of Structures


## Introduction

A single structure variable stores information about one object.

However, real-world applications usually need to manage multiple objects.

Examples:

- A college stores information about thousands of students.
- A company manages many employees.
- A shop maintains many products.


Creating separate structure variables for every object is inefficient.

Arrays of structures solve this problem by allowing multiple structure records to be stored together.


## What is an Array of Structures?

An array of structures is a collection of structure variables stored in an array.

Each array element represents one complete record.


Example:


\`\`\`cpp
struct Student
{
    int rollNumber;
    string name;
};


Student students[100];
\`\`\`


This creates an array that can store information about 100 students.


## Syntax

The general syntax is:


\`\`\`cpp
structName arrayName[size];
\`\`\`


Example:


\`\`\`cpp
Employee employees[50];
\`\`\`


## Accessing Array Elements

Individual structure objects are accessed using indexes.


Example:


\`\`\`cpp
students[0].name;

students[1].rollNumber;
\`\`\`


Here:

- students[0] represents the first student.
- name accesses the member of that structure.


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
    Student students[3];


    students[0].rollNumber = 101;
    students[0].name = "Alex";
    students[0].marks = 85.5;


    students[1].rollNumber = 102;
    students[1].name = "John";
    students[1].marks = 90.0;


    students[2].rollNumber = 103;
    students[2].name = "David";
    students[2].marks = 78.5;


    for(int i = 0; i < 3; i++)
    {
        cout<<"Roll Number : "
            <<students[i].rollNumber
            <<endl;

        cout<<"Name : "
            <<students[i].name
            <<endl;

        cout<<"Marks : "
            <<students[i].marks
            <<endl;

        cout<<endl;
    }


    return 0;
}
\`\`\`


Output:


\`\`\`
Roll Number : 101
Name : Alex
Marks : 85.5

Roll Number : 102
Name : John
Marks : 90

Roll Number : 103
Name : David
Marks : 78.5
\`\`\`


## Taking Input Using Array of Structures

Structure arrays can also store user input.


Example:


\`\`\`cpp
for(int i = 0; i < 5; i++)
{
    cin>>students[i].name;
    cin>>students[i].marks;
}
\`\`\`


## Applications

Arrays of structures are used in:

- Student management systems.
- Employee databases.
- Banking applications.
- Inventory systems.
- Customer management systems.


## Advantages

Arrays of structures provide:

- Organized storage of multiple records.
- Easy searching and sorting.
- Better data management.
- Efficient processing using loops.


## Key Points

Remember:

- Structure stores one record.
- Array of structures stores multiple records.
- Each element has its own structure members.
- Loops are commonly used for processing.


Arrays of structures are widely used in real-world applications where multiple similar records need to be managed efficiently.
`

};

export default lesson4;
const lesson1 = {

  id: "lesson1",

  title: "Introduction to Structures",

  content: `
# Introduction to Structures


## Introduction

Until now, we have used variables and arrays to store data.

Variables store a single value, while arrays store multiple values of the same data type.


Example:

\`\`\`cpp
int marks[5];
\`\`\`


An array can store only integer values.

However, real-world objects contain different types of information.


For example, a student record contains:

- Roll Number.
- Name.
- Branch.
- CGPA.
- Phone Number.


These values belong to different data types.


To solve this problem, C++ provides structures.


## What is a Structure?

A structure is a user-defined data type that allows multiple variables of different data types to be grouped together under a single name.


General Syntax:


\`\`\`cpp
struct StructureName
{
    dataType member1;
    dataType member2;
};
\`\`\`


Example:


\`\`\`cpp
struct Student
{
    int rollNumber;
    string name;
    double cgpa;
};
\`\`\`


Here, Student becomes a new data type containing multiple related members.


## Why Do We Need Structures?

Without structures, information about a student may be stored separately:


\`\`\`cpp
int rollNumber;

string name;

double cgpa;

string branch;
\`\`\`


For multiple students, managing these variables becomes difficult.


Structures combine all related information into one unit.


Example:


\`\`\`cpp
Student student1;
\`\`\`


Now the complete student record can be accessed using one variable.


## Creating Structure Variables

Defining a structure only creates a blueprint.

Memory is allocated when structure variables are created.


Example:


\`\`\`cpp
struct Student
{
    int rollNumber;
    string name;
    double cgpa;
};


Student student1;
\`\`\`


The variable student1 now contains memory for:

- rollNumber.
- name.
- cgpa.


## Example Program


\`\`\`cpp
#include<iostream>
using namespace std;


struct Student
{
    int rollNumber;
    string name;
    double cgpa;
};


int main()
{
    Student student1;


    student1.rollNumber = 101;

    student1.name = "Rahul Kumar";

    student1.cgpa = 8.75;


    cout<<"Roll Number : "
        <<student1.rollNumber
        <<endl;


    cout<<"Name : "
        <<student1.name
        <<endl;


    cout<<"CGPA : "
        <<student1.cgpa;


    return 0;
}
\`\`\`


Output:


\`\`\`
Roll Number : 101

Name : Rahul Kumar

CGPA : 8.75
\`\`\`


## Advantages of Structures

Structures provide:

- Better organization of data.
- Improved readability.
- Easier maintenance.
- Real-world data representation.


## Applications of Structures

Structures are used in:

### Banking Systems

Storing:

- Account number.
- Customer name.
- Balance.


### Hospital Management Systems

Storing:

- Patient details.
- Medical information.
- Appointment data.


### Inventory Systems

Storing:

- Product name.
- Price.
- Quantity.


### Student Management Systems

Storing:

- Roll number.
- Name.
- Academic details.


## Structures and Object-Oriented Programming

Structures are an important step toward object-oriented programming.

They allow developers to combine related data into meaningful entities.

Later, classes extend this idea by adding functions and advanced features.


## Key Points

Remember:

- Structures are user-defined data types.
- Structures can store different data types together.
- Structure variables represent complete records.
- Structures improve program organization.


Structures are one of the most important concepts in C++ because they allow programs to model real-world entities effectively.
`

};

export default lesson1;
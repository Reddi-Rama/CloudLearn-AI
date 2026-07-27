const lesson2 = {

  id: "lesson2",

  title: "Declaring and Defining Structures",

  content: `
# Declaring and Defining Structures


## Introduction

A structure must be created before it can be used in a program.

Creating a structure involves two steps:

- Structure declaration.
- Structure variable definition.


The declaration creates a new user-defined data type, while the definition creates actual variables using that type.


## Structure Declaration

The general syntax of declaring a structure is:


\`\`\`cpp
struct StructureName
{
    dataType member1;
    dataType member2;
};
\`\`\`


Example:


\`\`\`cpp
struct Employee
{
    int id;
    string name;
    double salary;
};
\`\`\`


Here:

- Employee is the structure name.
- id, name, and salary are structure members.


## Structure Members

The variables declared inside a structure are called members.

Example:


\`\`\`cpp
struct Product
{
    int productId;
    string productName;
    float price;
};
\`\`\`


Members represent the properties of an object.


A product has:

- Product ID.
- Product Name.
- Price.


## Defining Structure Variables

After declaring a structure, variables of that structure type can be created.


Example:


\`\`\`cpp
Employee employee1;
Employee employee2;
\`\`\`


Here:

- employee1 and employee2 are structure variables.
- Both contain id, name, and salary members.


## Declaring Variables During Structure Creation

Structure variables can also be declared while defining the structure.


Example:


\`\`\`cpp
struct Student
{
    int rollNumber;
    string name;

} student1, student2;
\`\`\`


The variables are created immediately after the structure definition.


## Accessing Structure Members

The dot operator (.) is used to access structure members.


Syntax:


\`\`\`cpp
structureVariable.memberName;
\`\`\`


Example:


\`\`\`cpp
student1.rollNumber;
\`\`\`


## Complete Example


\`\`\`cpp
#include<iostream>
using namespace std;


struct Employee
{
    int id;
    string name;
    double salary;
};


int main()
{
    Employee employee1;


    employee1.id = 101;

    employee1.name = "Arjun";

    employee1.salary = 60000;


    cout<<"Employee ID : "
        <<employee1.id
        <<endl;


    cout<<"Employee Name : "
        <<employee1.name
        <<endl;


    cout<<"Salary : "
        <<employee1.salary;


    return 0;
}
\`\`\`


Output:


\`\`\`
Employee ID : 101

Employee Name : Arjun

Salary : 60000
\`\`\`


## Initializing Structures

Structures can also be initialized during variable creation.


Example:


\`\`\`cpp
Student student1 =
{
    101,
    "Rahul",
    8.5
};
\`\`\`


Values are assigned according to the order of members.


## Importance of Structure Definition

Proper structure definition helps in:

- Organizing complex data.
- Representing real-world entities.
- Improving code readability.
- Reducing data management complexity.


## Applications

Structure declaration and definition are used in:

- Banking software.
- Student management systems.
- Inventory applications.
- Employee databases.


## Key Points

Remember:

- Structure declaration creates a data type.
- Structure variables create actual storage.
- Members are accessed using the dot operator.
- Structures can contain different data types.


Proper structure declaration is the foundation for designing organized and efficient C++ programs.
`

};

export default lesson2;
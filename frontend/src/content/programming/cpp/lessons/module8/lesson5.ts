const lesson5 = {

  id: "lesson5",

  title: "Nested Structures",

  content: `
# Nested Structures


## Introduction

A structure can contain variables of different data types.

C++ also allows one structure to contain another structure as a member.

This concept is called a nested structure.


Nested structures help represent complex real-world relationships more effectively.


## Why Nested Structures?

Many real-world entities contain smaller related entities.


Example:

A student record may contain:

- Personal details.
- Address details.


Instead of placing all members inside one structure, we can create separate structures.


## Example Without Nested Structures


\`\`\`cpp
struct Student
{
    int rollNumber;
    string name;

    string city;
    string state;
};
\`\`\`


This works, but large programs become difficult to manage.


## Using Nested Structures


Example:


\`\`\`cpp
struct Address
{
    string city;
    string state;
};


struct Student
{
    int rollNumber;
    string name;
    Address address;
};
\`\`\`


Here:

- Address is one structure.
- Student contains Address as a member.


## Accessing Nested Members

The dot operator is used multiple times.


Syntax:


\`\`\`cpp
object.member1.member2;
\`\`\`


Example:


\`\`\`cpp
student.address.city;
\`\`\`


## Complete Example


\`\`\`cpp
#include<iostream>
using namespace std;


struct Address
{
    string city;
    string state;
};


struct Student
{
    int rollNumber;
    string name;
    Address address;
};


int main()
{
    Student student1;


    student1.rollNumber = 101;

    student1.name = "Arun";

    student1.address.city = "Hyderabad";

    student1.address.state = "Telangana";


    cout<<"Roll Number : "
        <<student1.rollNumber
        <<endl;


    cout<<"Name : "
        <<student1.name
        <<endl;


    cout<<"City : "
        <<student1.address.city
        <<endl;


    cout<<"State : "
        <<student1.address.state;


    return 0;
}
\`\`\`


Output:


\`\`\`
Roll Number : 101

Name : Arun

City : Hyderabad

State : Telangana
\`\`\`


## Multiple Levels of Nesting

Structures can also contain structures that contain other structures.


Example:


\`\`\`cpp
struct Company
{
    struct Employee employee;
};
\`\`\`


However, excessive nesting should be avoided because it reduces readability.


## Applications

Nested structures are used in:

- Employee management systems.
- Banking applications.
- Hospital systems.
- E-commerce applications.
- Address management systems.


## Advantages

Nested structures provide:

- Better organization.
- Logical grouping of related data.
- Improved readability.
- Easier maintenance.


## Best Practices

While using nested structures:

- Keep relationships meaningful.
- Avoid unnecessary nesting.
- Use clear structure names.
- Separate complex data into smaller structures.


## Key Points

Remember:

- A structure can contain another structure.
- Nested members are accessed using multiple dot operators.
- They help model complex real-world objects.


Nested structures are an important technique for designing well-organized data models in C++.
`

};

export default lesson5;
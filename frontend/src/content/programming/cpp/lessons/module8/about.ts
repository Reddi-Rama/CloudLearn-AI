const about = {

  id: "about",

  title: "About This Module",

  content: `
# Module 8: Structures and Unions


## About This Module

Until now, we have worked with variables and arrays that store values belonging to a single data type.

For example:

- An integer variable stores numbers.
- A floating-point variable stores decimal values.
- A character variable stores characters.
- An array stores multiple values of the same data type.


However, real-world entities rarely contain only one type of information.


Consider a student record.

A student record may contain:

- Roll Number
- Name
- Branch
- CGPA
- Phone Number


These values belong to different data types and cannot be stored efficiently using normal arrays or individual variables.


This limitation led to the introduction of user-defined data types.


## What are Structures?

A structure is a user-defined data type that allows multiple variables of different data types to be grouped together under a single name.


Example:

\`\`\`cpp
struct Student
{
    int rollNumber;
    string name;
    double cgpa;
};
\`\`\`


The complete student information becomes a single logical unit.


## Why Do We Need Structures?

Without structures:

\`\`\`cpp
int rollNumber;

string name;

double cgpa;

string branch;
\`\`\`


Managing multiple records becomes difficult.


Using structures:

\`\`\`cpp
Student student1;
\`\`\`


All related information is organized together.


## What are Unions?

A union is a user-defined data type similar to a structure.

The main difference is that all members of a union share the same memory location.


Example:

\`\`\`cpp
union Data
{
    int number;
    float salary;
};
\`\`\`


Only one member can contain a meaningful value at a time.


## What You Will Learn

In this module, you will learn:

- Introduction to Structures.
- Declaring Structure Variables.
- Accessing Structure Members.
- Arrays of Structures.
- Nested Structures.
- Structures with Functions.
- Passing Structures by Reference.
- Introduction to Unions.
- Difference Between Structures and Unions.
- Anonymous Structures and Typedef.
- Best Practices for Structures and Unions.


## By The End Of This Module You Will Be Able To

- Create custom data types.
- Store related information together.
- Design real-world data models.
- Use structures with functions.
- Understand memory-efficient unions.
- Choose between structures and unions based on requirements.


## Real World Applications

Structures and unions are used in:

- Banking Systems.
- Hospital Management Systems.
- Student Information Systems.
- Inventory Applications.
- Payroll Systems.
- Embedded Systems.
- Device Drivers.


Structures represent real-world entities more naturally and form an important foundation before learning Object-Oriented Programming in C++.

Unions provide efficient memory usage when only one value needs to be stored at a time.


Understanding structures and unions helps developers move from simple programming concepts toward advanced software design.
`

};

export default about;
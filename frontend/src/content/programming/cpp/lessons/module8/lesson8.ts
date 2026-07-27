const lesson8 = {

  id: "lesson8",

  title: "Introduction to Unions",

  content: `
# Introduction to Unions


## Introduction

Like structures, unions are also user-defined data types in C++.

A union allows different data types to be stored under one name.

However, unlike structures, all members of a union share the same memory location.


This makes unions useful when memory efficiency is important.


## What is a Union?

A union is a user-defined data type that allows multiple variables of different data types to share the same memory space.


Syntax:


\`\`\`cpp
union UnionName
{
    dataType member1;
    dataType member2;
};
\`\`\`


Example:


\`\`\`cpp
union Data
{
    int number;
    float salary;
};
\`\`\`


Here, number and salary share the same memory location.


## Structure vs Union Memory Concept

Structure:


\`\`\`
Member 1 → Separate memory

Member 2 → Separate memory

Member 3 → Separate memory
\`\`\`


Union:


\`\`\`
Member 1
   |
   |
Shared Memory Location
   |
   |
Member 2
\`\`\`


Only one member can contain a meaningful value at a time.


## Declaring Union Variables

Example:


\`\`\`cpp
union Data
{
    int number;
    float value;
};


Data data1;
\`\`\`


data1 is a union variable.


## Accessing Union Members

The dot operator is used to access union members.


Example:


\`\`\`cpp
data1.number;
\`\`\`


## Example Program


\`\`\`cpp
#include<iostream>
using namespace std;


union Data
{
    int number;
    float value;
};


int main()
{
    Data data;


    data.number = 100;


    cout<<"Number : "
        <<data.number;


    return 0;
}
\`\`\`


Output:


\`\`\`
Number : 100
\`\`\`


## Replacing Union Values

When a new member value is assigned, the previous value is overwritten.


Example:


\`\`\`cpp
data.number = 100;

data.value = 5.5;
\`\`\`


After assigning value:

- number is no longer reliable.
- value contains the current data.


## Memory Allocation in Unions

The size of a union is equal to the size of its largest member.


Example:


\`\`\`cpp
union Data
{
    int number;
    double salary;
};
\`\`\`


Memory is allocated based on double because it requires more space.


## Applications of Unions

Unions are used in:

- Embedded systems.
- Hardware programming.
- Memory-efficient applications.
- Operating systems.


## Advantages of Unions

Unions provide:

- Efficient memory usage.
- Flexible data representation.
- Better control over memory.


## Limitations

Unions have some limitations:

- Only one member can be used at a time.
- Data is overwritten when another member is assigned.
- Less commonly used in normal applications.


## Key Points

Remember:

- Union members share memory.
- Only one value is stored at a time.
- Union saves memory.
- Dot operator accesses members.


Unions are useful when memory optimization is more important than storing multiple values simultaneously.
`

};

export default lesson8;
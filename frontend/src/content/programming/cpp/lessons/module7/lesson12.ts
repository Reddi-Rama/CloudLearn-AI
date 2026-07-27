const lesson12 = {

  id: "lesson12",

  title: "Double Pointers",

  content: `
# Double Pointers


## Introduction

A pointer stores the address of a normal variable.

C++ also allows a pointer to store the address of another pointer.

Such a pointer is called a double pointer or pointer to pointer.


## What is a Double Pointer?

A double pointer is a pointer variable that stores the address of another pointer variable.


Example:

\`\`\`cpp
int value = 100;

int *ptr = &value;

int **doublePtr = &ptr;
\`\`\`


Here:

- value stores the actual data.
- ptr stores the address of value.
- doublePtr stores the address of ptr.


## Syntax of Double Pointer

The syntax is:


\`\`\`cpp
dataType **pointerName;
\`\`\`


Example:

\`\`\`cpp
int **ptr;
\`\`\`


The two asterisks indicate that it is a pointer to a pointer.


## Memory Representation

Example:


\`\`\`cpp
int number = 50;

int *ptr = &number;

int **doublePtr = &ptr;
\`\`\`


Memory relationship:


\`\`\`
number

Value : 50


ptr

Stores address of number


doublePtr

Stores address of ptr
\`\`\`


## Accessing Value Using Double Pointer

Example:

\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int number = 50;


    int *ptr = &number;


    int **doublePtr = &ptr;


    cout<<number<<endl;

    cout<<*ptr<<endl;

    cout<<**doublePtr;


    return 0;
}
\`\`\`


Output:

\`\`\`
50
50
50
\`\`\`


## Understanding Dereferencing Levels

Single pointer:

\`\`\`cpp
*ptr
\`\`\`

Accesses the value stored by the pointer.


Double pointer:

\`\`\`cpp
**doublePtr
\`\`\`

Accesses the value through two levels of addresses.


## Modifying Value Using Double Pointer

Example:


\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int value = 10;


    int *ptr = &value;


    int **doublePtr = &ptr;


    **doublePtr = 100;


    cout<<value;


    return 0;
}
\`\`\`


Output:

\`\`\`
100
\`\`\`


The original variable changes because the double pointer reaches the actual memory location.


## Applications of Double Pointers

Double pointers are used in:

- Dynamic memory allocation.
- Linked lists.
- Trees.
- Operating systems.
- Managing pointers inside functions.


## Example: Modifying Pointer Inside Function

Double pointers allow a function to modify a pointer itself.


Example:

\`\`\`cpp
void createMemory(int **ptr)
{
    *ptr = new int(100);
}
\`\`\`


The function can change where the original pointer points.


## Best Practices

While using double pointers:

- Understand memory levels clearly.
- Avoid unnecessary complexity.
- Initialize pointers properly.
- Use nullptr checks.


Double pointers provide advanced memory control and are important for implementing complex data structures in C++.
`

};

export default lesson12;
const lesson1 = {

  id: "lesson1",

  title: "Introduction to Pointers",

  content: `
# Introduction to Pointers


## Understanding Memory

Every variable created in a C++ program occupies a location in computer memory.

For example:

\`\`\`cpp
int marks = 95;
\`\`\`

The variable marks stores the value 95.

However, internally:

- The value 95 is stored in RAM.
- That storage location has a unique address.


Example:

\`\`\`
Variable      Value        Address

marks         95           2000
\`\`\`


The address may change every time the program executes because memory allocation is managed by the operating system.


## What is a Pointer?

A pointer is a variable that stores the memory address of another variable.

Unlike normal variables, pointers do not store actual data values.

They store the location where the data exists.


Example:

\`\`\`cpp
int marks = 95;

int *ptr = &marks;
\`\`\`


Here:

- marks stores value 95.
- &marks represents the address of marks.
- ptr stores the address of marks.


The relationship can be represented as:


\`\`\`
marks  → 95

address of marks → 2000

ptr → 2000
\`\`\`


The pointer stores the address, not the actual value.


## Declaring a Pointer

The general syntax for declaring a pointer is:


\`\`\`cpp
dataType *pointerName;
\`\`\`


Example:

\`\`\`cpp
int *ptr;
\`\`\`


This creates a pointer capable of storing the address of an integer variable.


Other examples:

\`\`\`cpp
double *salaryPointer;

char *characterPointer;
\`\`\`


The pointer data type should match the variable type.


## Creating a Pointer

A pointer is initialized using the address operator (&).


Example:

\`\`\`cpp
#include<iostream>
using namespace std;

int main()
{
    int employeeID = 1001;

    int *employeePointer;

    employeePointer = &employeeID;


    cout<<"Employee ID : "
        <<employeeID
        <<endl;


    cout<<"Address Stored In Pointer : "
        <<employeePointer;


    return 0;
}
\`\`\`


Output:

\`\`\`
Employee ID : 1001

Address Stored In Pointer : 0x61ff08
\`\`\`


The address value may be different on different systems.


## Why Are Pointers Important?

Pointers provide direct access to memory.

They are essential for:

- Dynamic memory allocation.
- Efficient data processing.
- Creating linked lists.
- Creating trees and graphs.
- Low-level programming.


## Applications of Pointers

Pointers are used in:

### Operating Systems

Managing memory and system resources.


### Game Engines

Handling thousands of objects efficiently.


### Embedded Systems

Communicating directly with hardware.


### Data Structures

Building:

- Linked Lists.
- Stacks.
- Queues.
- Trees.


## Key Points

Remember:

- A variable stores a value.
- A pointer stores an address.
- The & operator gives an address.
- The * symbol is used for pointers.


Understanding pointers begins with understanding the relationship between variables and memory.
`

};

export default lesson1;
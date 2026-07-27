const lesson10 = {

  id: "lesson10",

  title: "Dynamic Memory Allocation",

  content: `
# Dynamic Memory Allocation


## Introduction

Normally, memory for variables is allocated automatically when a program starts.

This type of memory allocation is called static memory allocation.


Example:

\`\`\`cpp
int number = 100;
\`\`\`


The memory size is decided during compilation.


However, many real-world applications require memory to be created during program execution.

This is called dynamic memory allocation.


## Why Dynamic Memory Allocation?

The amount of memory required is not always known before execution.


Examples:

- User creates a list with unknown size.
- A game creates objects during runtime.
- A database stores changing amounts of data.


Dynamic memory allocation provides flexibility by allowing programs to request memory when needed.


## Heap Memory

Dynamic memory is allocated from a memory area called the heap.

Heap memory:

- Exists during program execution.
- Can be created and released manually.
- Provides flexible memory management.


## new Operator

C++ uses the new operator to allocate memory dynamically.


Syntax:

\`\`\`cpp
dataType *pointer = new dataType;
\`\`\`


Example:

\`\`\`cpp
int *ptr = new int;
\`\`\`


Memory is allocated during runtime and its address is stored in ptr.


## Storing Value in Dynamic Memory

Example:

\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int *number = new int;


    *number = 50;


    cout<<"Value: "
        <<*number;


    return 0;
}
\`\`\`


Output:

\`\`\`
Value: 50
\`\`\`


## delete Operator

Memory allocated using new must be released after use.

The delete operator frees dynamically allocated memory.


Example:

\`\`\`cpp
delete number;
\`\`\`


This prevents unnecessary memory consumption.


## Complete Example

\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int *salary = new int;


    *salary = 50000;


    cout<<"Salary: "
        <<*salary
        <<endl;


    delete salary;


    return 0;
}
\`\`\`


## Dynamic Memory for Arrays

Arrays can also be created dynamically.


Example:

\`\`\`cpp
int size = 5;

int *numbers = new int[size];
\`\`\`


Memory is created based on the required size.


After use:

\`\`\`cpp
delete[] numbers;
\`\`\`


## Applications

Dynamic memory allocation is used in:

- Linked lists.
- Trees.
- Graphs.
- Database systems.
- Operating systems.


## Advantages

Dynamic memory provides:

- Efficient memory usage.
- Runtime flexibility.
- Ability to create large data structures.


## Best Practices

While using dynamic memory:

- Always release memory using delete.
- Avoid memory leaks.
- Use nullptr after deleting pointers.
- Allocate only required memory.


Dynamic memory allocation is one of the main reasons C++ provides powerful control over computer resources.
`

};

export default lesson10;
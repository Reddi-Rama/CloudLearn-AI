const lesson14 = {

  id: "lesson14",

  title: "Dangling Pointers and Memory Leaks",

  content: `
# Dangling Pointers and Memory Leaks


## Introduction

Pointers provide powerful control over memory, but incorrect usage can create serious problems.

Two common pointer-related issues are:

- Dangling Pointers.
- Memory Leaks.


Understanding these problems is essential for writing safe and reliable C++ programs.


# Dangling Pointers


## What is a Dangling Pointer?

A dangling pointer is a pointer that stores the address of memory that is no longer valid.

The pointer still contains an address, but the memory location has already been released or destroyed.


Example:


\`\`\`cpp
int *ptr = new int(100);

delete ptr;
\`\`\`


After deletion:


\`\`\`
ptr → invalid memory location
\`\`\`


The pointer is now dangling.


## Example of Dangling Pointer

\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int *number = new int(50);


    delete number;


    cout<<*number;


    return 0;
}
\`\`\`


The program tries to access memory that has already been released.


## Preventing Dangling Pointers

After deleting memory, assign nullptr to the pointer.


Example:


\`\`\`cpp
delete number;

number = nullptr;
\`\`\`


Now the pointer clearly indicates that it does not point to valid memory.


# Memory Leaks


## What is a Memory Leak?

A memory leak occurs when dynamically allocated memory is not released after use.

The memory remains occupied even though the program no longer needs it.


Example:


\`\`\`cpp
int *ptr = new int(100);
\`\`\`


If we never write:


\`\`\`cpp
delete ptr;
\`\`\`


The allocated memory remains reserved.


## Effects of Memory Leaks

Memory leaks can cause:

- Increased memory usage.
- Reduced performance.
- Application crashes.
- System instability.


## Example


Incorrect:


\`\`\`cpp
void createData()
{
    int *value = new int(100);
}
\`\`\`


The memory is allocated but never released.


Correct:


\`\`\`cpp
void createData()
{
    int *value = new int(100);


    delete value;
}
\`\`\`


## Importance in Real Applications

Memory management is critical in:

- Operating systems.
- Game engines.
- Embedded systems.
- Large software applications.


## Best Practices

To avoid pointer problems:

- Release dynamically allocated memory.
- Use nullptr after deleting pointers.
- Avoid accessing deleted memory.
- Track every new with a corresponding delete.


## Modern C++ Approach

Modern C++ provides smart pointers that automatically manage memory.

Examples:

- unique_ptr
- shared_ptr


They reduce manual memory management problems.


## Summary

Dangling pointers and memory leaks are common memory management issues.

A good C++ developer must understand how to allocate, use, and release memory correctly.
`

};

export default lesson14;
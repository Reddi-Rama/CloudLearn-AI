const lesson6 = {

  id: "lesson6",

  title: "Pointer Arithmetic",

  content: `
# Pointer Arithmetic


## Introduction

Pointers store memory addresses.

Since memory locations are arranged sequentially, C++ allows certain arithmetic operations to be performed on pointers.

This is called pointer arithmetic.


Pointer arithmetic is mainly used when working with:

- Arrays.
- Dynamic memory.
- Data structures.


## Pointer Increment

When a pointer is increased, it moves to the next memory location of its data type.


Example:

\`\`\`cpp
int numbers[3] = {10,20,30};

int *ptr = numbers;


ptr++;
\`\`\`


After increment:


Before:

\`\`\`
ptr → numbers[0]
\`\`\`


After:

\`\`\`
ptr → numbers[1]
\`\`\`


## Example

\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int numbers[3] =
    {
        10,
        20,
        30
    };


    int *ptr = numbers;


    cout<<*ptr<<endl;


    ptr++;


    cout<<*ptr;


    return 0;
}
\`\`\`


Output:

\`\`\`
10
20
\`\`\`


## Pointer Decrement

A pointer can also be decreased to move backward.


Example:

\`\`\`cpp
ptr--;
\`\`\`


It moves the pointer to the previous element.


## Adding Values to Pointers

Pointers can move multiple positions.


Example:


\`\`\`cpp
ptr + 2;
\`\`\`


This moves the pointer two elements forward.


## Pointer Arithmetic with Arrays

Arrays and pointers are closely related.

Example:


\`\`\`cpp
int numbers[5] =
{
    5,10,15,20,25
};


int *ptr = numbers;


cout<<*(ptr+2);
\`\`\`


Output:


\`\`\`
15
\`\`\`


Because:

\`\`\`
ptr+2
\`\`\`

points to the third element.


## Valid Pointer Operations

C++ supports:

- Increment (++).

- Decrement (--).

- Addition (+).

- Subtraction (-).

- Comparing pointers.


## Applications

Pointer arithmetic is used in:

- Array processing.
- Dynamic memory handling.
- Operating systems.
- Embedded systems.
- Data structure implementation.


## Important Note

Pointer arithmetic depends on the data type.

Example:

For an integer pointer:

\`\`\`
ptr++
\`\`\`

moves to the next integer location, not just the next byte.


## Best Practices

While using pointer arithmetic:

- Stay within valid memory boundaries.
- Avoid accessing invalid locations.
- Understand array size.
- Use carefully in modern applications.


Pointer arithmetic provides powerful control over memory and is an important concept in advanced C++ programming.
`

};

export default lesson6;
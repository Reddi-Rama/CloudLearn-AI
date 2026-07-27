const lesson4 = {

  id: "lesson4",

  title: "Dereferencing Pointers",

  content: `
# Dereferencing Pointers


## Introduction

A pointer stores the address of a variable.

However, sometimes we need to access the actual value stored at that address.

This process is called dereferencing.


The dereference operator (*) is used to access the value stored at a pointer's address.


## Dereference Operator (*)

The * symbol has two different purposes in C++:


### During Declaration

It indicates that a variable is a pointer.


Example:

\`\`\`cpp
int *ptr;
\`\`\`


### During Access

It retrieves the value stored at the address.


Example:

\`\`\`cpp
*ptr;
\`\`\`


## Example of Dereferencing

\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int number = 100;


    int *ptr = &number;


    cout<<"Value using variable: "
        <<number
        <<endl;


    cout<<"Value using pointer: "
        <<*ptr;


    return 0;
}
\`\`\`


Output:

\`\`\`
Value using variable: 100

Value using pointer: 100
\`\`\`


Both methods access the same value.


## How Dereferencing Works

Consider:


\`\`\`cpp
int value = 50;

int *ptr = &value;
\`\`\`


Memory representation:


\`\`\`
value

Address: 2000
Value: 50


ptr

Stores: 2000
\`\`\`


When we write:


\`\`\`cpp
*ptr
\`\`\`


The compiler goes to address 2000 and retrieves the value 50.


## Modifying Values Using Dereferencing

Pointers can modify original variables.


Example:


\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int marks = 80;


    int *ptr = &marks;


    *ptr = 95;


    cout<<"Updated Marks: "
        <<marks;


    return 0;
}
\`\`\`


Output:

\`\`\`
Updated Marks: 95
\`\`\`


The original variable changes because the pointer directly accesses its memory location.


## Importance of Dereferencing

Dereferencing is used for:

- Updating variables through pointers.
- Dynamic memory management.
- Passing data efficiently.
- Building advanced data structures.


## Common Mistake

Dereferencing an uninitialized pointer can cause errors.


Incorrect:

\`\`\`cpp
int *ptr;

cout<<*ptr;
\`\`\`


Correct:

\`\`\`cpp
int value = 10;

int *ptr = &value;

cout<<*ptr;
\`\`\`


## Real World Applications

Dereferencing is heavily used in:

- Operating systems.
- Game engines.
- Linked lists.
- Memory management systems.


Understanding dereferencing is one of the most important steps in mastering pointers.
`

};

export default lesson4;
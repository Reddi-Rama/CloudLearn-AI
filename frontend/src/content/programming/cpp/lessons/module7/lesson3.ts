const lesson3 = {

  id: "lesson3",

  title: "Pointer Declaration and Initialization",

  content: `
# Pointer Declaration and Initialization


## Introduction

A pointer is a special variable that stores the address of another variable.

Before using a pointer, it must be declared and initialized properly.

A pointer declaration tells the compiler:

- The pointer name.
- The type of data it points to.


## Pointer Declaration

The general syntax is:


\`\`\`cpp
dataType *pointerName;
\`\`\`


Example:

\`\`\`cpp
int *numberPointer;
\`\`\`


Here:

- int specifies the type of data.
- * indicates that the variable is a pointer.
- numberPointer is the pointer name.


## Different Types of Pointers

Integer pointer:

\`\`\`cpp
int *ptr;
\`\`\`


Floating-point pointer:

\`\`\`cpp
float *ptr;
\`\`\`


Character pointer:

\`\`\`cpp
char *ptr;
\`\`\`


The pointer type should match the variable whose address it stores.


## Pointer Initialization

After declaration, a pointer should be initialized with a valid address.


Example:


\`\`\`cpp
int number = 100;

int *ptr = &number;
\`\`\`


Here:

- number stores value 100.
- &number gives the address.
- ptr stores that address.


## Complete Example


\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int value = 50;


    int *pointer = &value;


    cout<<"Value : "
        <<value
        <<endl;


    cout<<"Address : "
        <<pointer;


    return 0;
}
\`\`\`


Output:

\`\`\`
Value : 50

Address : 0x61ff08
\`\`\`


## Accessing Value Through Pointer

A pointer can access the value stored at its address using the dereference operator (*).


Example:

\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int number = 25;

    int *ptr = &number;


    cout<<*ptr;


    return 0;
}
\`\`\`


Output:

\`\`\`
25
\`\`\`


The * operator retrieves the value stored at the address.


## Uninitialized Pointers

A pointer should never be used without initialization.


Example:

\`\`\`cpp
int *ptr;

cout<<*ptr;
\`\`\`


This creates an unsafe situation because ptr does not contain a valid address.


## Null Pointer Initialization

A pointer can be initialized with nullptr when it does not point to any memory location.


Example:

\`\`\`cpp
int *ptr = nullptr;
\`\`\`


This indicates that the pointer is currently empty.


## Best Practices

While using pointers:

- Always initialize pointers.
- Use nullptr for empty pointers.
- Match pointer type with variable type.
- Avoid accessing invalid addresses.


## Real World Applications

Pointer initialization is important in:

- Dynamic memory allocation.
- Data structures.
- System programming.
- Resource management.


Proper declaration and initialization are essential for writing safe and reliable C++ programs using pointers.
`

};

export default lesson3;
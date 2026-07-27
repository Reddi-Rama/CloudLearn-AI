const lesson2 = {

  id: "lesson2",

  title: "Memory Addresses and Address Operator",

  content: `
# Memory Addresses and Address Operator


## Introduction

Every variable created in a C++ program is stored in computer memory.

Memory is divided into small storage locations called memory addresses.

Each memory location has a unique address that helps the processor identify where data is stored.


Example:

\`\`\`cpp
int age = 20;
\`\`\`


The variable age stores the value 20, but internally the computer also assigns a memory location to store that value.


## Understanding Memory Addresses

Consider the following example:


\`\`\`cpp
int marks = 95;
\`\`\`


The memory representation may look like:


\`\`\`
Variable       Value        Address

marks          95           2000
\`\`\`


Here:

- marks is the variable name.
- 95 is the stored value.
- 2000 is the memory address.


The actual address is assigned by the system and may change each time the program runs.


## Address Operator (&)

C++ provides the address operator (&) to find the memory address of a variable.


Syntax:

\`\`\`cpp
&variableName;
\`\`\`


Example:

\`\`\`cpp
#include<iostream>
using namespace std;

int main()
{
    int number = 50;


    cout<<"Value : "
        <<number
        <<endl;


    cout<<"Address : "
        <<&number;


    return 0;
}
\`\`\`


Output:

\`\`\`
Value : 50

Address : 0x61ff08
\`\`\`


The address value may be different on different computers.


## Importance of Address Operator

The address operator is mainly used when working with pointers.

It allows programmers to:

- Find where data is stored.
- Store addresses inside pointers.
- Pass memory locations to functions.
- Perform dynamic memory operations.


## Address and Pointer Relationship

Example:


\`\`\`cpp
int value = 100;

int *pointer;

pointer = &value;
\`\`\`


Memory relationship:


\`\`\`
value

100

Address: 3000


pointer

stores: 3000
\`\`\`


The pointer contains the address of the variable.


## Example with Multiple Variables

\`\`\`cpp
#include<iostream>
using namespace std;

int main()
{
    int a = 10;
    int b = 20;


    cout<<"Address of a : "
        <<&a
        <<endl;


    cout<<"Address of b : "
        <<&b;


    return 0;
}
\`\`\`


Each variable receives a different memory address.


## Real World Applications

Memory addresses are important in:

- Operating systems.
- Embedded programming.
- Device drivers.
- Database engines.
- Performance-critical applications.


## Key Points

Remember:

- Every variable has a memory address.
- The & operator gives the address of a variable.
- Addresses are stored using pointers.
- Memory addresses allow direct memory access.


Understanding memory addresses is the foundation for mastering pointers in C++.
`

};

export default lesson2;
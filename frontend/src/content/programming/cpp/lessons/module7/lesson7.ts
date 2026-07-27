const lesson7 = {

  id: "lesson7",

  title: "Pointers and Arrays",

  content: `
# Pointers and Arrays


## Introduction

Arrays and pointers are closely connected in C++.

The name of an array represents the address of its first element.

Because of this relationship, pointers can be used to access and process array elements.


## Relationship Between Arrays and Pointers

Consider:

\`\`\`cpp
int numbers[5] =
{
    10,20,30,40,50
};
\`\`\`


The array name stores the address of the first element.


Example:

\`\`\`cpp
numbers
\`\`\`

represents:

\`\`\`
Address of numbers[0]
\`\`\`


## Accessing Array Elements Using Pointers

Example:


\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int numbers[5] =
    {
        10,20,30,40,50
    };


    int *ptr = numbers;


    cout<<*ptr;


    return 0;
}
\`\`\`


Output:

\`\`\`
10
\`\`\`


The pointer accesses the first element of the array.


## Traversing Array Using Pointer

Pointers can be combined with pointer arithmetic to traverse arrays.


Example:


\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int numbers[5] =
    {
        10,20,30,40,50
    };


    int *ptr = numbers;


    for(int i = 0; i < 5; i++)
    {
        cout<<*(ptr+i)<<endl;
    }


    return 0;
}
\`\`\`


Output:

\`\`\`
10
20
30
40
50
\`\`\`


## Explanation

Expression:

\`\`\`cpp
*(ptr+i)
\`\`\`

means:

- Move pointer i positions forward.
- Access the value at that location.


## Passing Arrays Using Pointers

Arrays can be passed to functions using pointers.


Example:


\`\`\`cpp
void display(int *ptr, int size)
{
    for(int i = 0; i < size; i++)
    {
        cout<<*(ptr+i);
    }
}
\`\`\`


The function receives the address of the first element.


## Dynamic Arrays and Pointers

Pointers are used when arrays need dynamic memory allocation.


Example:


\`\`\`cpp
int *numbers = new int[5];
\`\`\`


Memory is allocated during program execution.


## Applications

Pointers and arrays are used in:

- Data structures.
- Image processing.
- Game development.
- Scientific computing.
- Memory management.


## Advantages

Using pointers with arrays provides:

- Faster data access.
- Efficient memory handling.
- Better control over storage.
- Support for dynamic arrays.


## Best Practices

While using pointers and arrays:

- Maintain correct boundaries.
- Release dynamically allocated memory.
- Avoid invalid pointer movement.
- Prefer safer containers when possible.


The connection between pointers and arrays is one of the most important concepts in C++ because many advanced data structures are built using this relationship.
`

};

export default lesson7;
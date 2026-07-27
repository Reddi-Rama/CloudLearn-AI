const lesson11 = {

  id: "lesson11",

  title: "Dynamic Arrays Using Pointers",

  content: `
# Dynamic Arrays Using Pointers


## Introduction

Normal arrays require their size to be known during compilation.

Example:

\`\`\`cpp
int marks[100];
\`\`\`


The size is fixed and cannot be changed during program execution.


Dynamic arrays solve this problem by allowing the size to be decided at runtime.


## Creating Dynamic Arrays

Dynamic arrays are created using pointers and the new operator.


Syntax:

\`\`\`cpp
dataType *pointer = new dataType[size];
\`\`\`


Example:

\`\`\`cpp
int *numbers = new int[5];
\`\`\`


This creates an integer array of size 5 during execution.


## Accessing Dynamic Array Elements

Dynamic arrays are accessed like normal arrays.


Example:

\`\`\`cpp
numbers[0] = 10;

numbers[1] = 20;
\`\`\`


## Example Program

\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int size;


    cout<<"Enter size: ";

    cin>>size;


    int *numbers = new int[size];


    for(int i = 0; i < size; i++)
    {
        numbers[i] = i * 10;
    }


    for(int i = 0; i < size; i++)
    {
        cout<<numbers[i]<<endl;
    }


    delete[] numbers;


    return 0;
}
\`\`\`


## Output Example

Input:

\`\`\`
5
\`\`\`


Output:

\`\`\`
0
10
20
30
40
\`\`\`


## Releasing Dynamic Arrays

Memory created using new[] must be released using delete[].


Example:

\`\`\`cpp
delete[] numbers;
\`\`\`


This returns the allocated memory back to the system.


## Advantages of Dynamic Arrays

Dynamic arrays provide:

- Flexible size.
- Better memory utilization.
- Runtime memory allocation.
- Support for large datasets.


## Static Array vs Dynamic Array


Static Array:

- Size fixed during compilation.
- Simple to use.
- Limited flexibility.


Dynamic Array:

- Size decided during execution.
- More flexible.
- Requires manual memory management.


## Applications

Dynamic arrays are used in:

- Data structures.
- Image processing.
- Scientific applications.
- Game development.
- Large-scale software systems.


## Common Mistakes

Avoid:

- Forgetting delete[].
- Accessing outside allocated memory.
- Using deleted pointers.
- Allocating unnecessary memory.


## Best Practices

When using dynamic arrays:

- Store the size separately.
- Release memory after use.
- Initialize values properly.
- Use modern C++ containers when possible.


Dynamic arrays provide powerful memory flexibility and are an important application of pointers in C++ programming.
`

};

export default lesson11;
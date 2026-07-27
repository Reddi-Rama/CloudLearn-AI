const lesson2 = {

  id: "lesson2",

  title: "Declaring and Initializing Arrays",

  content: `
# Declaring and Initializing Arrays


## Declaring an Array

Before using an array, it must be declared.

The declaration tells the compiler:

- Name of the array.
- Type of data stored.
- Number of elements.


## Syntax

\`\`\`cpp
dataType arrayName[size];
\`\`\`


Example:

\`\`\`cpp
int marks[5];
\`\`\`


This creates an integer array capable of storing five values.


## Array Memory Allocation

When an array is created, memory is allocated continuously.

Example:

\`\`\`cpp
int numbers[4];
\`\`\`

Memory allocation:

\`\`\`
numbers[0]
numbers[1]
numbers[2]
numbers[3]
\`\`\`


Each element receives its own memory location.


## Initializing Arrays

Initialization means assigning values to an array when it is created.


Example:

\`\`\`cpp
int marks[5] = {85,90,78,88,92};
\`\`\`


The values are stored in order:

\`\`\`
marks[0] = 85
marks[1] = 90
marks[2] = 78
marks[3] = 88
marks[4] = 92
\`\`\`


## Size Can Be Automatically Determined

C++ can automatically calculate the size of an array.


Example:

\`\`\`cpp
int numbers[] = {10,20,30,40};
\`\`\`


The compiler automatically creates an array of size 4.


## Partial Initialization

An array can also be initialized with fewer values than its size.


Example:

\`\`\`cpp
int marks[5] = {90,80};
\`\`\`


Remaining elements are automatically initialized with zero.


Result:

\`\`\`
marks[0] = 90
marks[1] = 80
marks[2] = 0
marks[3] = 0
marks[4] = 0
\`\`\`


## Accessing Initialized Arrays

Array elements can be accessed using indexes.


Example:

\`\`\`cpp
#include<iostream>
using namespace std;

int main()
{
    int marks[3] = {90,85,95};

    cout<<marks[0]<<endl;
    cout<<marks[1]<<endl;
    cout<<marks[2]<<endl;

    return 0;
}
\`\`\`


Output:

\`\`\`
90
85
95
\`\`\`


## Real World Applications

Arrays with initialization are commonly used in:

- Student grade systems.
- Product price storage.
- Game score management.
- Scientific data processing.


## Best Practices

While working with arrays:

- Always define the correct size.
- Avoid accessing indexes outside the array range.
- Use meaningful array names.
- Initialize arrays before using them.


Proper declaration and initialization create a strong foundation for efficient array operations.
`

};

export default lesson2;
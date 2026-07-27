const lesson3 = {

  id: "lesson3",

  title: "Accessing Array Elements",

  content: `
# Accessing Array Elements


## Introduction

An array stores multiple values, but each individual value must be accessed separately when performing operations.

C++ uses indexes to access array elements.


## Array Indexing

Array indexing starts from zero.

For an array of size 5:

\`\`\`cpp
int numbers[5];
\`\`\`

The indexes are:

\`\`\`
0  1  2  3  4
\`\`\`


The first element is stored at index 0, and the last element is stored at index:

\`\`\`
size - 1
\`\`\`


## Accessing Elements

Syntax:

\`\`\`cpp
arrayName[index];
\`\`\`


Example:

\`\`\`cpp
int marks[5] = {85,90,78,88,92};

cout<<marks[0];
\`\`\`


Output:

\`\`\`
85
\`\`\`


Another example:

\`\`\`cpp
cout<<marks[3];
\`\`\`

Output:

\`\`\`
88
\`\`\`


## Updating Array Elements

Array values can be modified using their indexes.


Example:

\`\`\`cpp
int marks[3] = {70,80,90};

marks[1] = 95;

cout<<marks[1];
\`\`\`


Output:

\`\`\`
95
\`\`\`


The original value 80 is replaced with 95.


## Accessing Arrays Using Loops

Arrays are usually processed using loops because they contain multiple values.


Example:

\`\`\`cpp
#include<iostream>
using namespace std;

int main()
{
    int marks[5] = {85,90,78,88,92};

    for(int i = 0; i < 5; i++)
    {
        cout<<marks[i]<<endl;
    }

    return 0;
}
\`\`\`


Output:

\`\`\`
85
90
78
88
92
\`\`\`


## Importance of Correct Indexing

Accessing an invalid index can cause unexpected behavior.


Example:

\`\`\`cpp
int numbers[5];

cout<<numbers[10];
\`\`\`


The index 10 does not exist because valid indexes are:

\`\`\`
0 to 4
\`\`\`


## Real World Applications

Array accessing is used in:

- Student record systems.
- Image processing.
- Database operations.
- Game development.
- Data analysis.


## Best Practices

When accessing array elements:

- Always use valid indexes.
- Use loops for large arrays.
- Avoid manual indexing errors.
- Understand array boundaries.


Efficient array access is one of the most important skills required for programming and data structure development.
`

};

export default lesson3;
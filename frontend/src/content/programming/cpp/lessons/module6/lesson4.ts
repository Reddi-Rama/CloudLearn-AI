const lesson4 = {

  id: "lesson4",

  title: "Traversing Arrays Using Loops",

  content: `
# Traversing Arrays Using Loops


## Introduction

Traversing an array means visiting each element of the array one by one and performing some operation on them.

Since arrays contain multiple values, manually accessing every element is inefficient.

Loops provide an easier way to process all array elements automatically.


## Why Do We Need Array Traversal?

Consider an array containing hundreds of values.

Accessing each element individually:

- Increases code length.
- Creates repetition.
- Makes maintenance difficult.

Loops solve this problem by automatically moving through array indexes.


## Traversing Using for Loop

The for loop is the most commonly used loop for array traversal.


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


## How Traversal Works

For the above example:

First iteration:

\`\`\`
i = 0
marks[0] is accessed
\`\`\`

Second iteration:

\`\`\`
i = 1
marks[1] is accessed
\`\`\`

The process continues until all elements are processed.


## Using while Loop

Arrays can also be traversed using a while loop.


Example:

\`\`\`cpp
int numbers[5] = {10,20,30,40,50};

int i = 0;

while(i < 5)
{
    cout<<numbers[i]<<endl;

    i++;
}
\`\`\`


## Applications of Array Traversal

Array traversal is used in:

- Searching elements.
- Calculating totals.
- Sorting data.
- Updating values.
- Displaying records.


## Real World Example

A student management system can traverse an array of marks to:

- Display marks.
- Calculate average.
- Find highest score.
- Generate reports.


## Best Practices

While traversing arrays:

- Always maintain correct loop limits.
- Start indexing from zero.
- Avoid accessing invalid positions.
- Use loops instead of repeated statements.


Array traversal is a fundamental operation because almost every array-based algorithm depends on visiting elements efficiently.
`

};

export default lesson4;
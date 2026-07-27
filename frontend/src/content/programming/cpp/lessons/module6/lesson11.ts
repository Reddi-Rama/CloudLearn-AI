const lesson11 = {

  id: "lesson11",

  title: "Passing Arrays to Functions",

  content: `
# Passing Arrays to Functions


## Introduction

Functions allow programs to divide complex tasks into smaller modules.

Just like normal variables, arrays can also be passed to functions.

Passing arrays to functions allows different parts of a program to process collections of data.


## Why Pass Arrays to Functions?

Consider an application that calculates the average marks of students.

Instead of writing all operations inside main(), a separate function can process the array.

Benefits:

- Code reuse.
- Better organization.
- Easier testing.
- Improved readability.


## Syntax

When passing an array to a function, the array name is passed as an argument.


Example:

\`\`\`cpp
void display(int numbers[], int size)
{
    statements;
}
\`\`\`


## Example

\`\`\`cpp
#include<iostream>
using namespace std;


void displayMarks(int marks[], int size)
{
    for(int i = 0; i < size; i++)
    {
        cout<<marks[i]<<endl;
    }
}


int main()
{
    int marks[5] = {85,90,78,88,92};


    displayMarks(marks,5);


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


## How Array Passing Works

When an array is passed to a function:

- The function receives the address of the first element.
- The original array can be accessed.
- Changes may affect the original data.


## Modifying Arrays Inside Functions

Example:

\`\`\`cpp
void update(int numbers[])
{
    numbers[0] = 100;
}
\`\`\`


Changes made inside the function affect the original array.


## Applications

Passing arrays to functions is used in:

- Sorting algorithms.
- Searching algorithms.
- Data analysis.
- Student management systems.
- Scientific applications.


## Best Practices

When passing arrays:

- Always pass the size along with the array.
- Avoid accessing invalid indexes.
- Use meaningful function names.
- Keep functions focused on one task.


Passing arrays to functions is an important concept because it allows large collections of data to be processed efficiently using modular programming.
`

};

export default lesson11;
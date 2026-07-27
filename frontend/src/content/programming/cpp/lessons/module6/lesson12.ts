const lesson12 = {

  id: "lesson12",

  title: "Two Dimensional Arrays",

  content: `
# Two Dimensional Arrays


## Introduction

Until now, we have worked with one-dimensional arrays that store data in a single list.

However, many real-world problems require data to be stored in rows and columns.

Examples:

- Student marks in different subjects.
- Matrix operations.
- Game boards.
- Tables and spreadsheets.


Two-dimensional arrays are used to represent such data.


## What is a Two Dimensional Array?

A two-dimensional array is an array that contains rows and columns.

It can be considered as a table where each element has two indexes:

- Row index.
- Column index.


## Syntax

\`\`\`cpp
dataType arrayName[rows][columns];
\`\`\`


Example:

\`\`\`cpp
int marks[3][4];
\`\`\`


This creates:

- 3 rows.
- 4 columns.


## Initializing Two Dimensional Arrays

Example:

\`\`\`cpp
int matrix[2][3] =
{
    {10,20,30},
    {40,50,60}
};
\`\`\`


Representation:

\`\`\`
10 20 30

40 50 60
\`\`\`


## Accessing Elements

Two-dimensional arrays use two indexes.

Syntax:

\`\`\`cpp
arrayName[row][column];
\`\`\`


Example:

\`\`\`cpp
cout << matrix[0][1];
\`\`\`


Output:

\`\`\`
20
\`\`\`


## Traversing Two Dimensional Arrays

Nested loops are used to access every element.


Example:

\`\`\`cpp
#include<iostream>
using namespace std;

int main()
{
    int matrix[2][3] =
    {
        {10,20,30},
        {40,50,60}
    };


    for(int i = 0; i < 2; i++)
    {
        for(int j = 0; j < 3; j++)
        {
            cout<<matrix[i][j]<<" ";
        }

        cout<<endl;
    }


    return 0;
}
\`\`\`


Output:

\`\`\`
10 20 30
40 50 60
\`\`\`


## Applications of Two Dimensional Arrays

They are used in:

- Matrix calculations.
- Image processing.
- Database tables.
- Game development.
- Scientific applications.


## Advantages

Two-dimensional arrays provide:

- Organized data storage.
- Easy table representation.
- Efficient processing using loops.


Two-dimensional arrays are an important step toward understanding advanced data structures and matrix-based problems.
`

};

export default lesson12;
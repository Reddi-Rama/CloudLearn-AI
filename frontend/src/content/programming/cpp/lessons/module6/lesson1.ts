const lesson1 = {

  id: "lesson1",

  title: "Introduction to Arrays",

  content: `
# Introduction to Arrays


## What is an Array?

An array is a collection of multiple values stored under a single variable name.

All elements in an array must belong to the same data type.

Each element occupies a separate memory location.


## Why Do We Need Arrays?

Real-world applications often handle large collections of data.

Examples:

- Student marks.
- Employee salaries.
- Product prices.
- Player scores.


Without arrays, we would need separate variables for every value.


Example:

\`\`\`cpp
int marks1 = 85;
int marks2 = 78;
int marks3 = 92;
int marks4 = 88;
int marks5 = 75;
\`\`\`


This approach becomes difficult when the amount of data increases.


## Using Arrays

The same data can be stored using an array:

\`\`\`cpp
int marks[5] = {85,78,92,88,75};
\`\`\`


Now all values are stored together under one name:

\`\`\`
marks
\`\`\`


## Array Indexing

Each element in an array is accessed using an index.

C++ uses zero-based indexing.


Example:

\`\`\`cpp
int marks[5] = {85,78,92,88,75};
\`\`\`


Memory representation:

| Value | Index |
|------|------|
| 85 | 0 |
| 78 | 1 |
| 92 | 2 |
| 88 | 3 |
| 75 | 4 |


The first element always starts at index 0.

The last element is stored at:

\`\`\`
size - 1
\`\`\`


## Accessing Array Elements

Individual values can be accessed using their index.


Example:

\`\`\`cpp
cout << marks[0];
\`\`\`


Output:

\`\`\`
85
\`\`\`


Another example:

\`\`\`cpp
cout << marks[2];
\`\`\`


Output:

\`\`\`
92
\`\`\`


## Real World Example

A university examination system can store marks of students using an array.


\`\`\`cpp
int studentMarks[5] =
{
    85,
    78,
    92,
    88,
    75
};
\`\`\`


The system can easily process all student marks using loops and array operations.


## Applications of Arrays

Arrays are widely used in:

- Student Record Systems.
- Inventory Management.
- Scientific Calculations.
- Data Processing Applications.
- Gaming Applications.


## Importance of Arrays

Arrays are one of the most important data structures because they allow programs to organize and process large amounts of related data efficiently.

Understanding arrays is essential before learning advanced concepts like:

- Searching Algorithms.
- Sorting Algorithms.
- Data Structures.
`

};

export default lesson1;
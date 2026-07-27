const lesson14 = {

  id: "lesson14",

  title: "Array of Strings",

  content: `
# Array of Strings


## Introduction

Many applications need to store multiple strings together.

Examples:

- List of student names.
- Product names.
- Employee names.
- City names.


An array of strings allows multiple text values to be stored using a single variable name.


## Declaring Array of Strings

Syntax:

\`\`\`cpp
string arrayName[size];
\`\`\`


Example:

\`\`\`cpp
string students[5];
\`\`\`


This creates an array that can store five string values.


## Initializing Array of Strings

Example:

\`\`\`cpp
string names[5] =
{
    "Alex",
    "John",
    "David",
    "Emma",
    "Sarah"
};
\`\`\`


Each string is stored at a different index.


## Accessing String Array Elements

Elements are accessed using indexes.

Example:

\`\`\`cpp
cout<<names[0];
\`\`\`


Output:

\`\`\`
Alex
\`\`\`


Another example:

\`\`\`cpp
cout<<names[3];
\`\`\`


Output:

\`\`\`
Emma
\`\`\`


## Traversing String Arrays

Loops can be used to display all string values.


Example:

\`\`\`cpp
#include<iostream>
#include<string>

using namespace std;

int main()
{
    string courses[3] =
    {
        "C++",
        "Python",
        "Java"
    };


    for(int i = 0; i < 3; i++)
    {
        cout<<courses[i]<<endl;
    }


    return 0;
}
\`\`\`


Output:

\`\`\`
C++
Python
Java
\`\`\`


## Applications

Array of strings are used in:

- Student management systems.
- Contact applications.
- Product catalogs.
- Search systems.
- Database applications.


## Advantages

Array of strings provide:

- Organized storage of text data.
- Easy processing using loops.
- Efficient handling of multiple values.


## Real World Example

An online learning platform can store course names using an array of strings:

\`\`\`cpp
string courses[4] =
{
    "C++",
    "Python",
    "Data Structures",
    "Web Development"
};
\`\`\`


Array of strings are important because they allow programs to manage collections of textual information efficiently.
`

};

export default lesson14;
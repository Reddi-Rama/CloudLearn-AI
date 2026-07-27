const lesson10 = {

  id: "lesson10",

  title: "Character Arrays",

  content: `
# Character Arrays


## Introduction

Before the introduction of the C++ string class, text was commonly stored using character arrays.

A character array is an array that stores individual characters instead of complete words or sentences.


Example:

\`\`\`cpp
char name[10] = "Computer";
\`\`\`


Here, each character is stored separately in memory.


## Character Array Structure

A string stored as a character array always ends with a special character:

\`\`\`
\\\\0
\`\`\`

This is called the null character.

It indicates the end of the string.


Example:

\`\`\`cpp
char text[] = "Hello";
\`\`\`


Memory representation:

\`\`\`
H  e  l  l  o  \\\\0
\`\`\`


## Declaring Character Arrays

Syntax:

\`\`\`cpp
char arrayName[size];
\`\`\`


Example:

\`\`\`cpp
char city[20];
\`\`\`


## Initializing Character Arrays

A character array can be initialized during declaration.


Example:

\`\`\`cpp
char language[] = "C++";
\`\`\`


The compiler automatically adds the null character at the end.


## Accessing Characters

Individual characters can be accessed using indexes.


Example:

\`\`\`cpp
char word[] = "Hello";

cout<<word[0];
\`\`\`


Output:

\`\`\`
H
\`\`\`


## Traversing Character Arrays

Characters can be processed using loops.


Example:

\`\`\`cpp
#include<iostream>
using namespace std;

int main()
{
    char name[] = "C++";

    for(int i = 0; name[i] != '\\\\0'; i++)
    {
        cout<<name[i]<<endl;
    }

    return 0;
}
\`\`\`


## Character Arrays vs Strings

Character Arrays:

- Store characters individually.
- Require manual handling.
- Use null character termination.


Strings:

- Easier to use.
- Provide built-in functions.
- Automatically manage memory.


## Applications of Character Arrays

Character arrays are used in:

- Embedded systems.
- Low-level programming.
- Operating systems.
- Legacy C programs.


## Best Practices

While using character arrays:

- Allocate enough memory.
- Always include space for the null character.
- Avoid accessing outside the array boundary.
- Prefer string class for modern C++ applications.


Character arrays provide a foundation for understanding how text is stored internally in computers.
`

};

export default lesson10;
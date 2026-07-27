const lesson9 = {

  id: "lesson9",

  title: "Tokens in C++",

  previousLesson:
    "/lesson/cpp-development/module1/lesson8",

  nextLesson:
    "/lesson/cpp-development/module1/lesson10",


  content: `
# Tokens in C++

Tokens are the smallest individual elements of a C++ program that have a meaningful purpose.

Every C++ program is created using different types of tokens.

The compiler analyzes these tokens to understand and execute the program.



## Types of Tokens in C++

C++ tokens are divided into:

- Keywords

- Identifiers

- Constants

- Strings

- Operators

- Special Symbols



## Keywords

Keywords are reserved words that have predefined meanings in C++.

They cannot be used as variable names or identifiers.

Examples:

\`\`\`
int

float

class

return

if

while
\`\`\`



Example:

\`\`\`cpp
int age = 20;
\`\`\`

Here, int is a keyword.



## Identifiers

Identifiers are names created by programmers.

They are used for:

- Variables

- Functions

- Classes

- Objects


Examples:

\`\`\`
studentAge

calculateTotal

employeeName
\`\`\`



## Constants

Constants are fixed values that cannot be changed during program execution.

Examples:

\`\`\`
100

3.14

'A'
\`\`\`



Example:

\`\`\`cpp
const int value = 100;
\`\`\`



## Strings

Strings represent a group of characters.

Example:

\`\`\`cpp
"Hello C++"
\`\`\`



## Operators

Operators perform operations on values.

Examples:

Arithmetic operators:

\`\`\`
+

-

*

/
\`\`\`


Assignment operator:

\`\`\`
=
\`\`\`



## Special Symbols

Special symbols have specific meanings in C++.

Examples:

\`\`\`
{

}

;

()

#
\`\`\`



## Why Learn Tokens?

Understanding tokens helps developers understand how:

- Compilers analyze programs.

- Code is structured.

- Programming languages work internally.



## Real-World Example

Consider:

\`\`\`cpp
int salary = 50000;
\`\`\`

Tokens are:

\`\`\`
int

salary

=

50000

;
\`\`\`



## Best Practices

- Use meaningful identifiers.

- Understand keywords properly.

- Write clean expressions.

- Follow naming conventions.



## Key Points

- Tokens are the building blocks of C++ programs.

- Keywords have predefined meanings.

- Identifiers are programmer-defined names.

- Operators perform operations.



## Lesson Summary

Tokens are the fundamental elements that make up every C++ program.

Understanding tokens helps developers write better programs and understand how compilers process code.
`,


  examples: [

    {
      title: "Token Identification Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int number = 10;

    cout << number;

    return 0;
}
`,

      output:
`
10
`,
    },


    {
      title: "Using Different Tokens",

      code: `
int marks = 95;
`,

      output:
`
Tokens:

int

marks

=

95

;
`,
    },

  ],

};


export default lesson9;
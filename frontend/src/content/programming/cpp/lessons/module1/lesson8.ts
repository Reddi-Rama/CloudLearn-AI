const lesson8 = {

  id: "lesson8",

  title: "Comments in C++",

  previousLesson:
    "/lesson/cpp-development/module1/lesson7",

  nextLesson:
    "/lesson/cpp-development/module1/lesson9",


  content: `
# Comments in C++

Comments are notes written inside a program to explain the code.

They are ignored by the compiler and do not affect program execution.

Comments improve code readability, documentation, and maintenance.



## Why Are Comments Important?

Comments help developers:

- Explain complex logic.

- Document programs.

- Improve collaboration.

- Understand code easily.

- Maintain large applications.



## Single Line Comments

Single line comments are used to write explanations in one line.

They begin with:

\`\`\`cpp
//
\`\`\`


Example:

\`\`\`cpp
// Display welcome message

cout << "Welcome to C++";
\`\`\`


Everything written after // is ignored by the compiler.



## Multi-Line Comments

Multi-line comments are used when explanations require multiple lines.

They begin with:

\`\`\`cpp
/*
\`\`\`

and end with:

\`\`\`cpp
*/
\`\`\`


Example:

\`\`\`cpp
/*
This program displays
a welcome message
*/

cout << "Welcome";
\`\`\`



## Comments in Real-World Projects

Large software applications may contain thousands of lines of code.

Comments help developers understand:

- Why a particular approach was used.

- How complex logic works.

- Important design decisions.



## Types of Comments

C++ mainly supports:

Single Line Comments

\`\`\`cpp
// Comment
\`\`\`


Multi-Line Comments

\`\`\`cpp
/*
Comment
*/
\`\`\`



## Best Practices

- Write comments that explain why, not only what.

- Keep comments updated.

- Avoid unnecessary comments.

- Use comments for complex logic.

- Maintain clean documentation.



## Key Points

- Comments are ignored by the compiler.

- Comments improve program readability.

- C++ supports single and multi-line comments.

- Good comments help software maintenance.



## Lesson Summary

Comments are an important part of professional programming.

They improve communication between developers and make programs easier to understand and maintain.
`,


  examples: [

    {
      title: "Single Line Comment Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    // Display message

    cout << "Hello C++";

    return 0;
}
`,

      output:
`
Hello C++
`,
    },


    {
      title: "Multi-Line Comment Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    /*
    This program
    displays a message
    */

    cout << "Learning C++";

    return 0;
}
`,

      output:
`
Learning C++
`,
    },

  ],

};


export default lesson8;
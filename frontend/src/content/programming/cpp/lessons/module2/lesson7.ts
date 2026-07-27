const lesson7 = {

  id: "lesson7",

  title: "Character Data Type",

  previousLesson:
    "/lesson/cpp-development/module2/lesson6",

  nextLesson:
    "/lesson/cpp-development/module2/lesson8",


  content: `
# Character Data Type

Programs often need to store individual characters.

Examples include:

- Examination grades.
- Menu choices.
- Status codes.
- Symbols.
- Keyboard inputs.

For storing a single character, C++ provides the char data type.



## What is char?

The char data type stores exactly one character.

A character is written inside single quotation marks.

Example:

\`\`\`cpp
char grade = 'A';
\`\`\`



## Character Storage

A char variable usually occupies 1 byte of memory.

Examples:

\`\`\`cpp
char gender = 'F';

char option = 'Y';

char symbol = '$';
\`\`\`



## Character vs String

A character and a string are different.

Character:

\`\`\`cpp
char letter = 'C';
\`\`\`

String:

\`\`\`cpp
string name = "C++";
\`\`\`

Single quotes represent characters.

Double quotes represent strings.



## ASCII Values

Internally, C++ stores characters using ASCII values.

Each character has a corresponding numeric value.



Example:

\`\`\`cpp
char letter = 'A';

cout << (int)letter;
\`\`\`


Output:

\`\`\`
65
\`\`\`



## Common Uses of char

The char data type is used in:

- Text processing.
- Encryption systems.
- Communication protocols.
- Compiler design.
- User input handling.



## Character Input

Characters can also be taken from users.

Example:

\`\`\`cpp
char choice;

cin >> choice;
\`\`\`



## Real-World Example

An examination system may store grades:

\`\`\`cpp
char grade = 'A';
\`\`\`

A menu system may store user selection:

\`\`\`cpp
char option = 'Y';
\`\`\`



## Best Practices

- Use single quotes for characters.
- Remember the difference between char and string.
- Choose meaningful variable names.
- Understand ASCII representation.



## Key Points

- char stores a single character.
- Characters use single quotes.
- C++ internally represents characters using ASCII values.
- char is useful for text processing.



## Lesson Summary

The char data type is a basic but important data type in C++.

Understanding characters helps developers work with text processing, user input, and low-level programming concepts.
`,


  examples: [

    {
      title: "Character Variable Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    char grade = 'A';

    cout << grade;

    return 0;
}
`,

      output:
`
A
`,
    },


    {
      title: "ASCII Value Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    char letter = 'A';

    cout << (int)letter;

    return 0;
}
`,

      output:
`
65
`,
    },

  ],

};


export default lesson7;
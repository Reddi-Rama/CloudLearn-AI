const lesson9 = {

  id: "lesson9",

  title: "Constants and Literals",

  previousLesson:
    "/lesson/cpp-development/module2/lesson8",

  nextLesson:
    "/lesson/cpp-development/module2/lesson10",


  content: `
# Constants and Literals

During program execution, some values should remain unchanged.

Examples:

- Value of Pi.
- Tax percentage.
- Maximum user limit.
- Configuration values.

C++ provides constants to protect these values from accidental modification.



## What is a Constant?

A constant is a value that cannot be changed after it is initialized.

Constants improve:

- Program safety.
- Readability.
- Maintainability.
- Error prevention.



## Creating Constants

Constants are created using the const keyword.

Example:

\`\`\`cpp
const double PI = 3.14159;
\`\`\`

The value of PI cannot be modified later.



## Example of Constant

\`\`\`cpp
const int MAX_USERS = 100;
\`\`\`

If we try to change this value:

\`\`\`cpp
MAX_USERS = 200;
\`\`\`

The compiler will generate an error.



## Advantages of Constants

Constants help developers:

- Prevent accidental changes.
- Make programs easier to understand.
- Reduce logical errors.
- Simplify maintenance.



## What are Literals?

A literal is a fixed value written directly inside a program.

Examples:

Integer literal:

\`\`\`
100
\`\`\`

Floating point literal:

\`\`\`
3.14
\`\`\`

Character literal:

\`\`\`
'A'
\`\`\`

String literal:

\`\`\`
"Hello"
\`\`\`

Boolean literal:

\`\`\`
true
\`\`\`



## Types of Literals in C++

C++ supports:

- Integer Literals.
- Floating Point Literals.
- Character Literals.
- String Literals.
- Boolean Literals.



## Constants vs Literals

Constant:

\`\`\`cpp
const int LIMIT = 100;
\`\`\`

Literal:

\`\`\`cpp
100
\`\`\`

A constant has a name, while a literal is a direct value.



## Real-World Example

A billing application may use:

\`\`\`cpp
const double TAX_RATE = 0.18;

double price = 500;

double tax = price * TAX_RATE;
\`\`\`

Using a constant makes the program easier to update.



## Best Practices

- Use constants for fixed values.
- Avoid repeating the same literal multiple times.
- Use meaningful constant names.
- Prefer uppercase names for constants.



## Key Points

- Constants cannot be modified.
- const keyword creates constants.
- Literals are fixed values written directly.
- Constants improve program reliability.



## Lesson Summary

Constants and literals help developers manage fixed values effectively.

Using constants improves readability, reduces errors, and makes programs easier to maintain.
`,


  examples: [

    {
      title: "Constant Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    const double PI = 3.14159;

    cout << PI;

    return 0;
}
`,

      output:
`
3.14159
`,
    },


    {
      title: "Literal Example",

      code: `
#include <iostream>

using namespace cout;

int main()
{
    cout << 100;

    return 0;
}
`,

      output:
`
100
`,
    },

  ],

};


export default lesson9;
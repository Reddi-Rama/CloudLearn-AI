const lesson12 = {

  id: "lesson12",

  title: "Scope of Variables",

  previousLesson:
    "/lesson/cpp-development/module2/lesson11",

  nextLesson:
    "/lesson/cpp-development/module2/lesson13",


  content: `
# Scope of Variables

A variable cannot be accessed from every part of a program.

The region of a program where a variable is visible and can be accessed is called its scope.

Understanding scope is important because it controls data accessibility and prevents unwanted changes to variables.



## Why is Variable Scope Important?

Scope helps developers:

- Control variable accessibility.
- Avoid naming conflicts.
- Improve program organization.
- Create modular applications.



## Types of Variable Scope in C++

C++ mainly provides:

- Local Scope.
- Global Scope.



## Local Scope

A variable declared inside a function or block has local scope.

It can only be accessed within that specific block.

Example:

\`\`\`cpp
void display()
{
    int marks = 90;

    cout << marks;
}
\`\`\`

Here, marks exists only inside the display function.



## Block Scope

Variables declared inside a block using braces have block scope.

Example:

\`\`\`cpp
if(true)
{
    int value = 10;
}
\`\`\`

The variable value cannot be accessed outside the block.



## Global Scope

A variable declared outside all functions has global scope.

Example:

\`\`\`cpp
int count = 0;

int main()
{
    cout << count;
}
\`\`\`

The variable can be accessed throughout the program.



## Local vs Global Variables

Local Variables:

- Exist inside a specific block.
- Have limited accessibility.
- Improve program safety.


Global Variables:

- Accessible throughout the program.
- Remain available during execution.
- Should be used carefully.



## Why Avoid Excessive Global Variables?

Too many global variables can make programs:

- Difficult to debug.
- Hard to maintain.
- More prone to errors.



## Real-World Example

A banking application may use local variables for:

- Transaction amount.
- Temporary calculations.


Global variables may store:

- System configuration values.



## Best Practices

- Prefer local variables.
- Avoid unnecessary global variables.
- Keep variables close to where they are used.
- Use clear variable names.



## Key Points

- Scope defines where a variable can be accessed.
- Local variables exist inside blocks.
- Global variables are accessible throughout programs.
- Proper scope improves maintainability.



## Lesson Summary

Understanding variable scope helps developers write organized and reliable C++ programs.

Good scope management prevents errors and improves software design.
`,



  examples: [

    {
      title: "Local Variable Example",

      code: `
#include <iostream>

using namespace std;

void display()
{
    int value = 50;

    cout << value;
}

int main()
{
    display();

    return 0;
}
`,

      output:
`
50
`,
    },


    {
      title: "Global Variable Example",

      code: `
#include <iostream>

using namespace std;

int count = 10;

int main()
{
    cout << count;

    return 0;
}
`,

      output:
`
10
`,
    },

  ],

};


export default lesson12;
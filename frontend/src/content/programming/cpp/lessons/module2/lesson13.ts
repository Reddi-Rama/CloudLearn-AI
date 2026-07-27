const lesson13 = {

  id: "lesson13",

  title: "Storage Classes",

  previousLesson:
    "/lesson/cpp-development/module2/lesson12",

  nextLesson:
    "/lesson/cpp-development/module2/lesson14",


  content: `
# Storage Classes

Variables in C++ differ not only by their data type but also by their lifetime and visibility.

Storage classes control:

- Where a variable is stored.
- How long it exists.
- Where it can be accessed.



## Types of Storage Classes

C++ provides different storage classes:

- auto
- register
- static
- extern



## auto Storage Class

The auto storage class is the default storage class for local variables.

Example:

\`\`\`cpp
auto int value = 10;
\`\`\`

The compiler automatically determines the variable type.



## static Storage Class

A static variable preserves its value throughout the lifetime of the program.

Example:

\`\`\`cpp
void counter()
{
    static int count = 0;

    count++;

    cout << count;
}
\`\`\`

Each function call keeps the previous value.



## extern Storage Class

The extern keyword is used to access variables declared in another source file.

It is useful in large projects containing multiple files.



Example:

File 1:

\`\`\`cpp
int total = 100;
\`\`\`

File 2:

\`\`\`cpp
extern int total;
\`\`\`



## register Storage Class

The register keyword suggests storing a variable in CPU registers for faster access.

Example:

\`\`\`cpp
register int count;
\`\`\`

Modern compilers usually handle optimization automatically.



## Importance of Storage Classes

Storage classes help developers understand:

- Variable lifetime.
- Memory management.
- Program organization.
- Large project development.



## Real-World Applications

Storage classes are useful in:

- Large software projects.
- Multi-file applications.
- System programming.
- Performance optimization.



## Best Practices

- Understand variable lifetime.
- Use static variables carefully.
- Avoid unnecessary global storage.
- Let modern compilers optimize when possible.



## Key Points

- Storage classes define variable behavior.
- static preserves values between function calls.
- extern allows sharing variables between files.
- Storage classes are important in advanced C++ development.



## Lesson Summary

Storage classes control how variables behave during program execution.

Understanding them helps developers manage memory and build efficient applications.
`,



  examples: [

    {
      title: "Static Variable Example",

      code: `
#include <iostream>

using namespace std;

void counter()
{
    static int count = 0;

    count++;

    cout << count << endl;
}

int main()
{
    counter();

    counter();

    return 0;
}
`,

      output:
`
1

2
`,
    },


    {
      title: "Auto Variable Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    auto number = 100;

    cout << number;

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


export default lesson13;
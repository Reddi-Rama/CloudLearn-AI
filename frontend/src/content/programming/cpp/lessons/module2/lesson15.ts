const lesson15 = {

  id: "lesson15",

  title: "Multiple Variable Declaration and Initialization",

  previousLesson:
    "/lesson/cpp-development/module2/lesson14",

  nextLesson:
    "/lesson/cpp-development/module3/about",


  content: `
# Multiple Variable Declaration and Initialization

As programs become larger, developers often need to create multiple variables of the same data type.

Writing separate statements for every variable can make programs longer and harder to maintain.

C++ allows multiple variables of the same type to be declared in a single statement.



## Multiple Variable Declaration

Multiple variables can be declared together using commas.

Example:

\`\`\`cpp
int marks1, marks2, marks3;
\`\`\`

Here, three integer variables are created in one statement.



## Multiple Variable Initialization

Variables can also be initialized during declaration.

Example:

\`\`\`cpp
int mathematics = 90,
    physics = 85,
    chemistry = 88;
\`\`\`



## Initializing Multiple Variables With Same Value

Multiple variables can store the same initial value.

Example:

\`\`\`cpp
int x = 0, y = 0, z = 0;
\`\`\`



## Advantages

Multiple declarations can:

- Reduce unnecessary code.
- Group related variables together.
- Improve readability in simple cases.



## Problems With Excessive Declaration

Declaring too many variables in one statement can reduce readability.

Example:

\`\`\`cpp
int a, b, c, d, e, f, g;
\`\`\`

It becomes difficult to understand what each variable represents.



## Professional Approach

Developers prefer:

- Meaningful variable names.
- Grouping related variables.
- Keeping declarations readable.



Example:

Good:

\`\`\`cpp
int mathematicsMarks;

int physicsMarks;

int chemistryMarks;
\`\`\`



Poor:

\`\`\`cpp
int a,b,c;
\`\`\`



## Real-World Example

A student management system may store:

\`\`\`cpp
int mathMarks = 90;

int physicsMarks = 85;

int chemistryMarks = 88;
\`\`\`



## Best Practices

- Declare related variables together.
- Avoid extremely long declarations.
- Use descriptive names.
- Prefer readability over shorter code.



## Key Points

- C++ allows multiple variables in one declaration.
- Variables can be initialized during declaration.
- Too many variables in one line reduce readability.
- Meaningful names improve maintainability.



## Lesson Summary

Multiple variable declaration is a useful feature of C++.

When used properly, it improves code organization while maintaining readability.
`,



  examples: [

    {
      title: "Multiple Variable Declaration Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int a = 10, b = 20, c = 30;

    cout << a << endl;
    cout << b << endl;
    cout << c;

    return 0;
}
`,

      output:
`
10

20

30
`,
    },


    {
      title: "Student Marks Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int math = 90,
        physics = 85,
        chemistry = 88;

    cout << math;

    return 0;
}
`,

      output:
`
90
`,
    },

  ],

};


export default lesson15;
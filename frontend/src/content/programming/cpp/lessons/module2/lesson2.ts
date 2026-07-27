const lesson2 = {

  id: "lesson2",

  title: "Declaring Variables",

  previousLesson:
    "/lesson/cpp-development/module2/lesson1",

  nextLesson:
    "/lesson/cpp-development/module2/lesson3",


  content: `
# Declaring Variables

Before a variable can be used in a C++ program, it must be declared.

Variable declaration informs the compiler about:

- The variable name.
- The type of data it will store.
- The memory required for storing the value.



## Variable Declaration Syntax

The general syntax for declaring a variable is:

\`\`\`cpp
data_type variable_name;
\`\`\`

Example:

\`\`\`cpp
int marks;
float salary;
char grade;
\`\`\`

Here:

- int stores integer values.
- float stores decimal values.
- char stores single characters.



## Variable Initialization

A variable can be assigned a value during declaration.

This process is called initialization.

Example:

\`\`\`cpp
int age = 19;

float price = 499.99;

char grade = 'A';
\`\`\`



## Declaration Without Initialization

A variable can also be declared without assigning a value.

Example:

\`\`\`cpp
int number;
\`\`\`

However, using an uninitialized variable may produce unexpected results because it may contain a garbage value.



## Importance of Initialization

Initializing variables improves:

- Program reliability.
- Code readability.
- Error prevention.
- Program safety.



Incorrect example:

\`\`\`cpp
int value;

cout << value;
\`\`\`

The output may contain unpredictable data.



Correct example:

\`\`\`cpp
int value = 0;

cout << value;
\`\`\`



## Multiple Variable Declaration

C++ allows multiple variables of the same data type to be declared together.

Example:

\`\`\`cpp
int math, physics, chemistry;
\`\`\`



Multiple variables can also be initialized:

\`\`\`cpp
int x = 10, y = 20, z = 30;
\`\`\`



## Real-World Example

A student management system may store:

\`\`\`cpp
string name = "Alex";

int age = 20;

float percentage = 85.5;
\`\`\`

Each variable stores different types of information.



## Best Practices

- Initialize variables whenever possible.
- Use meaningful variable names.
- Declare variables close to where they are used.
- Avoid unnecessary variables.



## Key Points

- Variables must be declared before use.
- Initialization assigns an initial value.
- Uninitialized variables may contain unpredictable values.
- Proper declaration improves program reliability.



## Lesson Summary

Variable declaration tells the compiler what information a variable will store.

Proper declaration and initialization are essential for writing safe and reliable C++ programs.
`,


  examples: [

    {
      title: "Variable Declaration Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int age;

    age = 20;

    cout << age;

    return 0;
}
`,

      output:
`
20
`,
    },


    {
      title: "Variable Initialization Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int score = 95;

    cout << score;

    return 0;
}
`,

      output:
`
95
`,
    },

  ],

};


export default lesson2;
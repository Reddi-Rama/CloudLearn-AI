const lesson1 = {

  id: "lesson1",

  title: "Introduction to Variables",

  previousLesson:
    "/lesson/cpp-development/module2/about",

  nextLesson:
    "/lesson/cpp-development/module2/lesson2",


  content: `
# Introduction to Variables

Programs continuously work with different types of information.

Examples include:

- Student names.
- Employee salaries.
- Product prices.
- Account balances.
- Temperature values.

For a program to use this information, it must store these values somewhere in memory.

This is where variables become important.



## What is a Variable?

A variable is a named memory location used to store data during program execution.

Instead of working with complex memory addresses, programmers use meaningful names to access stored information.

Example:

\`\`\`cpp
int age = 20;
\`\`\`

Here:

- age is the variable name.
- int is the data type.
- 20 is the value stored in memory.



## Why Are Variables Important?

Variables allow programs to:

- Store information.
- Perform calculations.
- Process user input.
- Maintain application state.
- Modify data during execution.



Without variables, programs would not be able to remember information or perform meaningful operations.



## How Variables Work in Memory

When a variable is created, the compiler reserves a specific memory location for storing its value.

Example:

\`\`\`cpp
int marks = 95;
\`\`\`

The computer allocates memory space to store the integer value 95.

The variable name allows programmers to access this memory location easily.



## Real-World Example

Consider an online shopping application.

The application may need to store:

- Product price.
- Quantity.
- Discount percentage.
- Final amount.


Example:

\`\`\`cpp
double price = 999.99;

int quantity = 2;

double discount = 10.5;
\`\`\`



Each piece of information is stored using a separate variable.



## Variables in Different Applications

Variables are used in almost every software system.

Examples:

Banking System:

- Account balance.
- Transaction amount.

Hospital System:

- Patient age.
- Medical records.

Gaming Application:

- Player score.
- Level number.

E-commerce Application:

- Product price.
- Stock quantity.



## Characteristics of Variables

A variable has:

- A name.
- A data type.
- A stored value.
- A memory location.



## Best Practices

- Use meaningful variable names.
- Initialize variables properly.
- Choose suitable data types.
- Avoid unnecessary variables.
- Keep variable names consistent.



Example:

Good:

\`\`\`cpp
double accountBalance;
\`\`\`

Poor:

\`\`\`cpp
double x;
\`\`\`



## Key Points

- Variables store information in memory.
- Every variable has a name and data type.
- Variables allow programs to process data.
- Variables are the foundation of programming.



## Lesson Summary

Variables are one of the most important concepts in C++ programming.

They allow applications to store, modify, and process information during execution.

Understanding variables is the first step toward creating useful software applications.
`,


  examples: [

    {
      title: "Basic Variable Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int age = 20;

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
      title: "Multiple Variables Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    string name = "Alex";

    int score = 95;

    cout << name << endl;
    cout << score;

    return 0;
}
`,

      output:
`
Alex

95
`,
    },

  ],

};


export default lesson1;
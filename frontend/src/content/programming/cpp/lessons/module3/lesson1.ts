const lesson1 = {

  id: "lesson1",

  title: "Introduction to Operators",

  previousLesson:
    "/lesson/cpp-development/module3/about",

  nextLesson:
    "/lesson/cpp-development/module3/lesson2",


  content: `
# Introduction to Operators

Programs need to perform different operations on data.

A program may need to:

- Calculate values.
- Compare information.
- Assign new values.
- Make logical decisions.

C++ provides operators to perform these operations.



## What is an Operator?

An operator is a special symbol that instructs the compiler to perform a specific operation on data.

Example:

\`\`\`cpp
int sum = 10 + 20;
\`\`\`

Here:

- + is the operator.
- 10 and 20 are operands.
- sum stores the result.



## Components of an Operation

Every operation contains:

- Operator.
- Operand.
- Result.



Example:

\`\`\`cpp
int result = 15 * 5;
\`\`\`

Here:

- * is the operator.
- 15 and 5 are operands.
- 75 is the result.



## Why Are Operators Important?

Operators allow programs to:

- Perform calculations.
- Compare values.
- Make decisions.
- Modify data.
- Control program execution.



Without operators, programs would only store information without being able to process it.



## Categories of Operators in C++

C++ provides several categories of operators:

- Arithmetic Operators.
- Relational Operators.
- Logical Operators.
- Assignment Operators.
- Increment and Decrement Operators.
- Bitwise Operators.
- Conditional Operator.
- Special Operators.



## Arithmetic Operators

Arithmetic operators perform mathematical operations.

Examples:

\`\`\`
+
-
*
/
%
\`\`\`

They are used for:

- Addition.
- Subtraction.
- Multiplication.
- Division.
- Finding remainder.



## Relational Operators

Relational operators compare two values.

Examples:

\`\`\`
==
!=
>
<
>=
<=
\`\`\`

They return true or false.



## Logical Operators

Logical operators combine multiple conditions.

Examples:

\`\`\`
&&
||
!
\`\`\`



## Assignment Operators

Assignment operators store values inside variables.

Example:

\`\`\`cpp
int age = 20;
\`\`\`



## Real-World Example

A payroll system may use:

- Arithmetic operators to calculate salary.
- Relational operators to check eligibility.
- Logical operators to verify conditions.



## Best Practices

- Use operators clearly.
- Avoid unnecessarily complex expressions.
- Use parentheses when needed.
- Write readable calculations.



## Key Points

- Operators perform operations on data.
- Operands are values used by operators.
- C++ provides different categories of operators.
- Operators are essential for program logic.



## Lesson Summary

Operators are the foundation of programming logic.

They allow C++ programs to calculate, compare, modify, and process information efficiently.
`,


  examples: [

    {
      title: "Basic Addition Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int a = 10;

    int b = 20;

    int sum = a + b;

    cout << sum;

    return 0;
}
`,

      output:
`
30
`,
    },


    {
      title: "Comparison Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int age = 20;

    cout << (age >= 18);

    return 0;
}
`,

      output:
`
1
`,
    },

  ],

};


export default lesson1;
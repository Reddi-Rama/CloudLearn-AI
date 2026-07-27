const about = {

  id: "about",

  title: "Operators and Expressions",

  previousLesson:
    "/lesson/cpp-development/module2/lesson17",

  nextLesson:
    "/lesson/cpp-development/module3/lesson1",


  content: `
# Operators and Expressions

A program becomes useful only when it can perform operations on data.

Variables store information, but operators allow programs to manipulate that information, perform calculations, compare values, and make decisions.

Consider real-world applications:

- Banking systems calculate interest.
- E-commerce platforms compute discounts.
- Games calculate player scores.
- Payroll systems determine employee salaries.

All these operations depend on operators and expressions.



## What Are Operators?

An operator is a special symbol that performs an operation on one or more values.

The values on which operators work are called operands.

Example:

\`\`\`cpp
int total = 10 + 20;
\`\`\`

Here:

- + is the operator.
- 10 and 20 are operands.
- 30 is the result.



## What Are Expressions?

An expression is a combination of:

- Variables.
- Constants.
- Operators.
- Function calls.

that produces a value.

Example:

\`\`\`cpp
int result = a + b;
\`\`\`

Here:

\`\`\`
a + b
\`\`\`

is an expression that produces a result.



## Why Are Operators Important?

Operators allow programs to:

- Perform mathematical calculations.
- Compare values.
- Make decisions.
- Update data.
- Manipulate memory.
- Process logical conditions.



Without operators, programs could only store information but could not process or transform data.



## Categories of Operators in C++

C++ provides different types of operators:

- Arithmetic Operators.
- Relational Operators.
- Logical Operators.
- Assignment Operators.
- Increment and Decrement Operators.
- Bitwise Operators.
- Conditional Operator.
- Special Operators.



## Real-World Applications

Operators are used in almost every software application.

Examples:

Banking System:

- Arithmetic operators calculate interest.
- Relational operators verify conditions.


Shopping Application:

- Arithmetic operators calculate price and discounts.
- Assignment operators update values.


Gaming Applications:

- Increment operators update scores.
- Logical operators control game conditions.



## What You Will Learn

In this module, you will learn:

- Introduction to Operators.
- Arithmetic Operators.
- Relational Operators.
- Logical Operators.
- Assignment Operators.
- Increment and Decrement Operators.
- Bitwise Operators.
- Conditional Operator.
- Operator Precedence.
- Expressions in C++.
- Special Operators.



## By the End of This Module You Will Be Able To

- Perform calculations efficiently.
- Create decision-making logic.
- Write complex expressions.
- Understand evaluation rules.
- Build more advanced C++ programs.



## Importance in Software Development

Operators form the language through which programs communicate instructions to the processor.

Every application, from simple calculators to large enterprise systems, depends on operators to process information.



## Module Summary

Operators and expressions are fundamental concepts in C++ programming.

They allow developers to transform stored data into meaningful results and create programs that can calculate, compare, and make decisions.
`,



  examples: [

    {
      title: "Basic Operator Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int a = 10;
    int b = 20;

    int result = a + b;

    cout << result;

    return 0;
}
`,

      output:
`
30
`,
    },


    {
      title: "Expression Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int price = 500;
    int discount = 50;

    int finalPrice = price - discount;

    cout << finalPrice;

    return 0;
}
`,

      output:
`
450
`,
    },

  ],

};


export default about;
const lesson10 = {

  id: "lesson10",

  title: "Expressions in C++",

  previousLesson:
    "/lesson/cpp-development/module3/lesson9",

  nextLesson:
    "/lesson/cpp-development/module3/lesson11",


  content: `
# Expressions in C++

Expressions are one of the most important building blocks of programming logic.

They allow programs to combine values, variables, and operators to produce meaningful results.



## What is an Expression?

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

is an expression.



## Why Are Expressions Important?

Expressions allow programs to:

- Perform calculations.
- Compare values.
- Make decisions.
- Process data.
- Generate results.



Without expressions, programs cannot transform input data into useful information.



## Types of Expressions in C++

C++ supports different types of expressions:

- Arithmetic Expressions.
- Relational Expressions.
- Logical Expressions.
- Assignment Expressions.



## Arithmetic Expressions

Arithmetic expressions perform mathematical calculations.

Example:

\`\`\`cpp
a + b * c
\`\`\`

Applications:

- Calculating totals.
- Finding averages.
- Processing measurements.



## Relational Expressions

Relational expressions compare values.

Example:

\`\`\`cpp
marks >= 35
\`\`\`

Result:

\`\`\`
true or false
\`\`\`



Applications:

- Checking eligibility.
- Validating conditions.
- Comparing data.



## Logical Expressions

Logical expressions combine multiple conditions.

Example:

\`\`\`cpp
(age >= 18) && (citizen == true)
\`\`\`

They are used for complex decisions.



## Assignment Expressions

Assignment expressions assign values to variables.

Example:

\`\`\`cpp
salary += bonus;
\`\`\`



## Real-World Applications

Expressions are used everywhere.

### Banking Application

Calculating:

\`\`\`cpp
balance + deposit - withdrawal
\`\`\`



### Shopping Application

Calculating:

\`\`\`cpp
price - discount + deliveryCharge
\`\`\`



### Payroll System

Calculating:

\`\`\`cpp
basicSalary + allowance - tax
\`\`\`



## Writing Good Expressions

Professional developers follow these practices:

- Keep expressions simple.
- Use meaningful variable names.
- Use parentheses when required.
- Avoid confusing calculations.



## Complex Expressions

Although C++ allows complex expressions:

\`\`\`cpp
result = a + b * c - d / e;
\`\`\`

breaking them into smaller parts improves readability.



## Best Practices

- Prefer clarity over short code.
- Avoid unnecessary complexity.
- Use comments for difficult logic.
- Test expressions carefully.



## Key Points

- Expressions produce values.
- They combine operators and operands.
- Different types of expressions solve different problems.
- Expressions form the foundation of program logic.



## Lesson Summary

Expressions allow C++ programs to process information and produce meaningful results.

Every practical C++ application depends on expressions to perform calculations and decisions.
`,



  examples: [

    {
      title: "Arithmetic Expression Example",

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
      title: "Logical Expression Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int age = 20;

    bool result = (age >= 18);

    cout << result;

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


export default lesson10;
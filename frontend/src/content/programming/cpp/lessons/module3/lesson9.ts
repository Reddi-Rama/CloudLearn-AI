const lesson9 = {

  id: "lesson9",

  title: "Operator Precedence and Associativity",

  previousLesson:
    "/lesson/cpp-development/module3/lesson8",

  nextLesson:
    "/lesson/cpp-development/module3/lesson10",


  content: `
# Operator Precedence and Associativity

C++ programs often contain expressions with multiple operators.

When multiple operators appear together, the compiler needs rules to decide which operation should be performed first.

These rules are called operator precedence and associativity.



## What is Operator Precedence?

Operator precedence determines the priority of operators during expression evaluation.

The operator with higher precedence is evaluated first.



Example:

\`\`\`cpp
int result = 10 + 5 * 2;
\`\`\`

Many beginners may think:

\`\`\`
(10 + 5) * 2 = 30
\`\`\`

But C++ evaluates multiplication first:

\`\`\`
10 + (5 * 2)
\`\`\`

Result:

\`\`\`
20
\`\`\`



## Common Precedence Order

Higher priority operators are evaluated first.

Order:

1. Parentheses

2. Multiplication, Division, Modulus

3. Addition and Subtraction

4. Relational Operators

5. Logical Operators

6. Assignment Operators



## Importance of Parentheses

Parentheses can change the order of evaluation.

Example:

Without parentheses:

\`\`\`cpp
10 + 5 * 2
\`\`\`

Result:

\`\`\`
20
\`\`\`


With parentheses:

\`\`\`cpp
(10 + 5) * 2
\`\`\`

Result:

\`\`\`
30
\`\`\`



## What is Associativity?

Associativity determines the direction in which operators with the same precedence are evaluated.



Most arithmetic operators follow:

\`\`\`
Left to Right
\`\`\`



Example:

\`\`\`cpp
20 / 5 * 2
\`\`\`

Evaluation:

\`\`\`
(20 / 5) * 2
\`\`\`

Result:

\`\`\`
8
\`\`\`



## Why Precedence Matters?

Understanding precedence helps developers:

- Write correct expressions.
- Avoid logical errors.
- Debug programs easily.
- Improve code readability.



## Real-World Example

A billing application may calculate:

\`\`\`cpp
total = price * quantity - discount;
\`\`\`

The order of evaluation affects the final amount.



## Best Practices

- Use parentheses for clarity.
- Avoid very complex expressions.
- Do not depend only on precedence rules.
- Write readable code.



## Key Points

- Precedence decides operator priority.
- Associativity decides evaluation direction.
- Parentheses improve clarity.
- Correct expression evaluation prevents errors.



## Lesson Summary

Operator precedence and associativity control how C++ evaluates expressions.

Understanding these rules helps developers write accurate and maintainable programs.
`,



  examples: [

    {
      title: "Precedence Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int result = 10 + 5 * 2;

    cout << result;

    return 0;
}
`,

      output:
`
20
`,
    },


    {
      title: "Parentheses Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int result = (10 + 5) * 2;

    cout << result;

    return 0;
}
`,

      output:
`
30
`,
    },

  ],

};


export default lesson9;
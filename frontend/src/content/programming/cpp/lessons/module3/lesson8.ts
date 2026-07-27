const lesson8 = {

  id: "lesson8",

  title: "Conditional Operator",

  previousLesson:
    "/lesson/cpp-development/module3/lesson7",

  nextLesson:
    "/lesson/cpp-development/module3/lesson9",


  content: `
# Conditional Operator

Programs often need to choose between two values based on a condition.

C++ provides a shorter alternative to simple if-else statements called the conditional operator.



## What is Conditional Operator?

The conditional operator is also known as the ternary operator because it uses three operands.

Syntax:

\`\`\`cpp
condition ? value1 : value2;
\`\`\`

If the condition is true, value1 is selected.

If the condition is false, value2 is selected.



## Example

\`\`\`cpp
int age = 20;

string result =
(age >= 18) ? "Eligible" : "Not Eligible";
\`\`\`

Since the condition is true:

Output:

\`\`\`
Eligible
\`\`\`



## Equivalent if-else Statement

The same logic can be written as:

\`\`\`cpp
if(age >= 18)
{
    result = "Eligible";
}
else
{
    result = "Not Eligible";
}
\`\`\`



## Advantages of Conditional Operator

The conditional operator:

- Reduces code length.
- Makes simple decisions compact.
- Improves readability for small conditions.



## Applications

The conditional operator is commonly used for:

- Eligibility checking.
- Finding maximum values.
- Status messages.
- Simple assignments.



## Finding Maximum Value

Example:

\`\`\`cpp
int max =
(a > b) ? a : b;
\`\`\`

If a is greater, a is selected.

Otherwise, b is selected.



## Real-World Example

An online examination system may use:

\`\`\`cpp
result =
marks >= 35 ? "Pass" : "Fail";
\`\`\`

The program immediately assigns the correct result.



## When Not to Use It

Avoid using the conditional operator for complex logic.

Example:

Multiple nested conditions reduce readability.



## Best Practices

- Use it for simple decisions.
- Avoid deeply nested ternary expressions.
- Prefer readability.
- Use if-else for complex logic.



## Key Points

- Conditional operator is a short form of if-else.
- It uses three operands.
- It returns one of two values based on a condition.



## Lesson Summary

The conditional operator provides a concise way to write simple decision-making logic in C++.

It improves code efficiency when used properly.
`,



  examples: [

    {
      title: "Conditional Operator Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int age = 20;

    string result =
    (age >= 18) ? "Eligible" : "Not Eligible";

    cout << result;

    return 0;
}
`,

      output:
`
Eligible
`,
    },


    {
      title: "Maximum Value Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int a = 10;

    int b = 20;

    int max = (a > b) ? a : b;

    cout << max;

    return 0;
}
`,

      output:
`
20
`,
    },

  ],

};


export default lesson8;
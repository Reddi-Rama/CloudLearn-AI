const lesson4 = {

  id: "lesson4",

  title: "Nested if Statement",

  previousLesson:
    "/lesson/cpp-development/module4/lesson3",

  nextLesson:
    "/lesson/cpp-development/module4/lesson5",


  content: `
# Nested if Statement

Real-world applications often require multiple levels of decision-making.

A single condition may not be enough to solve complex problems.

For example:

A scholarship system may first check whether a candidate passed the examination and then verify additional eligibility conditions.



## What is Nested if?

A nested if statement means placing one if statement inside another if statement.

The inner if statement executes only when the outer if condition is true.



## Syntax

\`\`\`cpp
if(condition1)
{
    if(condition2)
    {
        statements;
    }
}
\`\`\`



## How Nested if Works?

Execution process:

1. Outer condition is checked.
2. If it is true, the inner condition is evaluated.
3. If the inner condition is true, the inner block executes.
4. Otherwise, it is skipped.



## Example

\`\`\`cpp
int marks = 90;

if(marks >= 40)
{
    cout << "Passed";

    if(marks >= 85)
    {
        cout << "Eligible for Scholarship";
    }
}
\`\`\`

Output:

\`\`\`
Passed

Eligible for Scholarship
\`\`\`



## Real-World Applications

Nested if statements are used in:

- Loan approval systems.
- Banking applications.
- Admission portals.
- Insurance systems.
- Employee promotion systems.



## Example: Scholarship System

A university may check:

First condition:

\`\`\`
Student passed examination
\`\`\`

Second condition:

\`\`\`
Marks are above required percentage
\`\`\`

Only then scholarship is approved.



## Advantages

Nested if allows:

- Handling complex conditions.
- Implementing multiple verification levels.
- Creating detailed decision systems.



## Limitations

Too many nested conditions can make programs difficult to understand.

Example:

\`\`\`cpp
if()
{
    if()
    {
        if()
        {
        }
    }
}
\`\`\`

Such code becomes difficult to maintain.



## Best Practices

- Avoid excessive nesting.
- Keep conditions simple.
- Use logical operators when possible.
- Divide complex logic into functions.



## Key Points

- Nested if means an if statement inside another if statement.
- Inner conditions depend on outer conditions.
- It is useful for multi-level decision making.



## Lesson Summary

Nested if statements allow programs to handle complex decision-making scenarios by checking multiple conditions step by step.
`,



  examples: [

    {
      title: "Nested if Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int marks = 90;

    if(marks >= 40)
    {
        cout << "Passed" << endl;

        if(marks >= 85)
        {
            cout << "Scholarship Eligible";
        }
    }

    return 0;
}
`,

      output:
`
Passed

Scholarship Eligible
`,
    },


    {
      title: "Login Verification Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    bool usernameCorrect = true;
    bool passwordCorrect = true;

    if(usernameCorrect)
    {
        if(passwordCorrect)
        {
            cout << "Login Successful";
        }
    }

    return 0;
}
`,

      output:
`
Login Successful
`,
    },

  ],

};


export default lesson4;
const lesson2 = {

  id: "lesson2",

  title: "The if Statement",

  previousLesson:
    "/lesson/cpp-development/module4/lesson1",

  nextLesson:
    "/lesson/cpp-development/module4/lesson3",


  content: `
# The if Statement

The if statement is the simplest decision-making statement in C++.

It allows a block of code to execute only when a specified condition becomes true.



## Why Do We Need if Statement?

Many real-world applications require checking conditions before performing actions.

Examples:

- Checking user eligibility.
- Validating login details.
- Confirming payments.
- Checking available inventory.



The if statement allows programs to make decisions based on conditions.



## Syntax of if Statement

The general syntax is:

\`\`\`cpp
if(condition)
{
    statements;
}
\`\`\`



The statements inside the if block execute only when the condition is true.



## How if Statement Works?

The execution process:

1. Condition is evaluated.
2. If the condition is true, the block executes.
3. If the condition is false, the block is skipped.



## Example

\`\`\`cpp
int marks = 80;

if(marks >= 40)
{
    cout << "Pass";
}
\`\`\`

Output:

\`\`\`
Pass
\`\`\`



## Real-World Example

An examination system can check whether a candidate has passed.

Condition:

\`\`\`cpp
marks >= 40
\`\`\`

If the condition is true:

\`\`\`
Pass message is displayed.
\`\`\`



## Applications of if Statement

The if statement is used in:

- Login validation.
- Eligibility checking.
- Payment confirmation.
- Admission systems.
- Security verification.



## Example: Login System

A login application may check:

\`\`\`cpp
if(passwordCorrect)
{
    cout << "Access Granted";
}
\`\`\`



## Advantages of if Statement

The if statement:

- Provides decision-making ability.
- Improves program flexibility.
- Allows conditional execution.
- Forms the foundation of complex logic.



## Best Practices

- Keep conditions clear.
- Use proper indentation.
- Avoid unnecessary conditions.
- Use meaningful variable names.



## Key Points

- if executes code only when a condition is true.
- It is the simplest decision-making structure.
- It is the foundation of all conditional logic.



## Lesson Summary

The if statement allows programs to make simple decisions.

It is one of the most important building blocks of programming and is used in almost every software application.
`,


  examples: [

    {
      title: "if Statement Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int marks;

    cout << "Enter marks: ";

    cin >> marks;

    if(marks >= 40)
    {
        cout << "You Passed";
    }

    return 0;
}
`,

      output:
`
Enter marks: 80

You Passed
`,
    },


    {
      title: "Eligibility Check",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int age = 20;

    if(age >= 18)
    {
        cout << "Eligible";
    }

    return 0;
}
`,

      output:
`
Eligible
`,
    },

  ],

};


export default lesson2;
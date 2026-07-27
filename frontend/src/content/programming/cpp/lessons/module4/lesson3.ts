const lesson3 = {

  id: "lesson3",

  title: "The if-else Statement",

  previousLesson:
    "/lesson/cpp-development/module4/lesson2",

  nextLesson:
    "/lesson/cpp-development/module4/lesson4",


  content: `
# The if-else Statement

Many real-world situations involve two possible outcomes.

Examples:

- A transaction is approved or rejected.
- A student passes or fails.
- A customer receives a discount or does not receive one.

The if-else statement is designed to handle such situations.



## What is if-else Statement?

The if-else statement allows a program to execute one block of code when a condition is true and another block when the condition is false.



## Syntax

\`\`\`cpp
if(condition)
{
    statements;
}
else
{
    statements;
}
\`\`\`



## How if-else Works?

Execution process:

1. Condition is evaluated.
2. If the condition is true, the if block executes.
3. If the condition is false, the else block executes.
4. Only one block executes during program execution.



## Example

\`\`\`cpp
int age = 16;

if(age >= 18)
{
    cout << "Eligible";
}
else
{
    cout << "Not Eligible";
}
\`\`\`

Output:

\`\`\`
Not Eligible
\`\`\`



## Real-World Example

A banking system checks whether a withdrawal request can be processed.

Condition:

\`\`\`cpp
withdrawAmount <= balance
\`\`\`

If true:

- Transaction is completed.

Otherwise:

- Transaction is rejected.



## Applications of if-else Statement

The if-else statement is used in:

- Banking systems.
- Authentication systems.
- Reservation systems.
- Examination portals.
- E-commerce applications.



## Advantages

The if-else statement:

- Handles alternative situations.
- Makes programs interactive.
- Improves decision-making capability.



## Best Practices

- Keep conditions simple.
- Avoid unnecessary nesting.
- Use meaningful conditions.
- Maintain proper indentation.



## Key Points

- if-else handles two possible outcomes.
- Only one block executes at a time.
- It is widely used in real-world applications.



## Lesson Summary

The if-else statement allows programs to choose between two different execution paths based on a condition.
`,



  examples: [

    {
      title: "Pass or Fail Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int marks = 35;

    if(marks >= 40)
    {
        cout << "Pass";
    }
    else
    {
        cout << "Fail";
    }

    return 0;
}
`,

      output:
`
Fail
`,
    },


    {
      title: "Balance Verification Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int balance = 5000;
    int amount = 3000;

    if(amount <= balance)
    {
        cout << "Transaction Successful";
    }
    else
    {
        cout << "Insufficient Balance";
    }

    return 0;
}
`,

      output:
`
Transaction Successful
`,
    },

  ],

};


export default lesson3;
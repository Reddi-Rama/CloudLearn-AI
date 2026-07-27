const about = {

  id: "about",

  title: "Control Statements",

  previousLesson:
    "/lesson/cpp-development/module3/lesson14",

  nextLesson:
    "/lesson/cpp-development/module4/lesson1",


  content: `
# Control Statements

Until now, the programs we created executed statements in a simple sequential order.

The processor starts from the first statement and executes each statement one after another until the program ends.

However, real-world software does not work only in a sequential manner.

Applications need to make decisions, repeat operations, and respond to changing situations.



## Why Do We Need Control Statements?

Consider real-world applications:

- A banking application approves loans only when eligibility conditions are satisfied.
- An examination system determines pass or fail based on marks.
- An e-commerce platform applies discounts based on conditions.
- A game repeatedly updates player information during execution.

All these applications require control over program execution.



## What Are Control Statements?

Control statements are statements that control the flow of program execution.

They allow programs to:

- Make decisions.
- Execute code repeatedly.
- Change the normal execution flow.



Without control statements, programs would only execute instructions from top to bottom and would not be able to react intelligently.



## Types of Control Statements in C++

C++ control statements are divided into three major categories:

## Decision Making Statements

These statements allow programs to choose between different execution paths.

Examples:

- if Statement
- if-else Statement
- Nested if
- else-if Ladder
- switch Statement



## Looping Statements

Looping statements execute a block of code repeatedly.

Examples:

- for Loop
- while Loop
- do-while Loop



## Jump Statements

Jump statements transfer control from one part of a program to another.

Examples:

- break Statement
- continue Statement
- goto Statement



## Real-World Applications

Control statements are used in almost every software application.

Examples:

Banking Systems:

- Loan approval.
- Transaction verification.


Authentication Systems:

- Password checking.
- Access control.


E-commerce Applications:

- Discount calculation.
- Order validation.


Games:

- Player movement.
- Score updates.



## What You Will Learn

In this module, you will learn:

- Introduction to Control Statements.
- if Statement.
- if-else Statement.
- Nested if Statement.
- else-if Ladder.
- switch Statement.
- for Loop.
- while Loop.
- do-while Loop.
- break Statement.
- continue Statement.
- goto Statement.
- Infinite Loops.
- Best Practices.



## By the End of This Module You Will Be Able To

- Build decision-making programs.
- Create repetitive operations.
- Control program execution flow.
- Develop interactive applications.
- Write efficient C++ programs.



## Importance of Control Statements

Control statements transform simple programs into intelligent applications.

They allow software to:

- Analyze situations.
- Respond to users.
- Perform repeated tasks.
- Handle complex logic.



## Module Summary

Control statements are one of the most important concepts in programming.

They provide the ability to control execution flow and build software systems that can make decisions and perform operations dynamically.
`,


  examples: [

    {
      title: "Decision Making Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int marks = 80;

    if(marks >= 40)
    {
        cout << "Pass";
    }

    return 0;
}
`,

      output:
`
Pass
`,
    },


    {
      title: "Loop Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    for(int i = 1; i <= 5; i++)
    {
        cout << i << endl;
    }

    return 0;
}
`,

      output:
`
1
2
3
4
5
`,
    },

  ],

};


export default about;
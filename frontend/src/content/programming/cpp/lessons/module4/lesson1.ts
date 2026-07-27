const lesson1 = {

  id: "lesson1",

  title: "Introduction to Control Statements",

  previousLesson:
    "/lesson/cpp-development/module4/about",

  nextLesson:
    "/lesson/cpp-development/module4/lesson2",


  content: `
# Introduction to Control Statements

Until now, the programs we created followed a simple sequential flow.

The compiler starts from the first statement and executes every instruction one after another until the program ends.

This approach is suitable for basic programs, but real-world applications require more flexibility.



## Why Do We Need Control Statements?

Modern software applications need to make decisions and repeat operations.

Examples:

- A banking application checks whether sufficient balance exists before withdrawal.
- An examination system determines pass or fail based on marks.
- An online shopping application applies discounts based on conditions.
- A game continuously updates player information.



These situations require programs to change their execution path based on conditions.



## What Are Control Statements?

Control statements are programming statements that control the order in which instructions are executed.

They allow programs to:

- Make decisions.
- Repeat tasks.
- Change execution flow.



Without control statements, programs would only execute from top to bottom and could not respond to different situations.



## Categories of Control Statements

C++ control statements are mainly divided into three categories:



## Decision Making Statements

Decision-making statements allow programs to execute different blocks of code based on conditions.

Examples:

- if Statement.
- if-else Statement.
- Nested if.
- else-if Ladder.
- switch Statement.



## Looping Statements

Looping statements allow a block of code to execute repeatedly.

Examples:

- for Loop.
- while Loop.
- do-while Loop.



## Jump Statements

Jump statements transfer control from one part of the program to another.

Examples:

- break Statement.
- continue Statement.
- goto Statement.



## Real-World Applications

Control statements are used in:

- Authentication systems.
- Banking applications.
- Inventory management systems.
- Examination portals.
- Operating systems.
- Games.



## Example: ATM System

An ATM machine checks:

- Whether the PIN is correct.
- Whether sufficient balance exists.
- Whether the transaction is allowed.

Based on these conditions, the program chooses the correct execution path.



## Importance of Control Statements

Control statements make programs intelligent by allowing them to:

- Analyze conditions.
- React to user input.
- Perform repeated operations.
- Handle complex logic.



## Best Practices

- Keep conditions simple.
- Use meaningful variable names.
- Avoid unnecessary nesting.
- Choose the correct control structure.



## Key Points

- Control statements manage program execution flow.
- They help programs make decisions and repeat operations.
- They are essential for building real-world applications.



## Lesson Summary

Control statements are the foundation of intelligent programming.

They transform simple sequential programs into dynamic applications capable of making decisions and handling complex situations.
`,


  examples: [

    {
      title: "Simple Decision Example",

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


export default lesson1;
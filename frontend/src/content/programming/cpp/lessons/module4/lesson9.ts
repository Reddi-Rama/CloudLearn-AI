const lesson9 = {

  id: "lesson9",

  title: "The do-while Loop",

  previousLesson:
    "/lesson/cpp-development/module4/lesson8",

  nextLesson:
    "/lesson/cpp-development/module4/lesson10",


  content: `
# The do-while Loop

In programming, there are situations where a block of code must execute at least once before checking any condition.

The do-while loop is designed for such situations.

Unlike the while loop, which checks the condition before execution, the do-while loop checks the condition after executing the loop body.



## What is do-while Loop?

The do-while loop is a looping statement that executes a block of code first and then checks the condition.

Because the condition is checked at the end, the loop body always executes at least once.



## Syntax

\`\`\`cpp
do
{
    statements;
}
while(condition);
\`\`\`



## How do-while Loop Works?

Execution process:

1. Loop body executes.
2. Condition is evaluated.
3. If the condition is true, the loop repeats.
4. If the condition is false, the loop terminates.



## Example

\`\`\`cpp
int number = 1;

do
{
    cout << number << endl;

    number++;

}
while(number <= 5);
\`\`\`

Output:

\`\`\`
1
2
3
4
5
\`\`\`



## Difference Between while and do-while

while Loop:

- Condition is checked before execution.
- Loop may execute zero times.


do-while Loop:

- Condition is checked after execution.
- Loop executes at least once.



## Real-World Applications

The do-while loop is commonly used in:

- ATM systems.
- Menu-driven programs.
- User input validation.
- Interactive applications.



## Example: ATM Menu

An ATM should display the menu at least once before checking whether the user wants to exit.

This makes do-while suitable for menu-based applications.



## Advantages of do-while Loop

The do-while loop:

- Guarantees one execution.
- Works well for user interaction.
- Provides condition-based repetition.



## Best Practices

- Use do-while when first execution is required.
- Ensure the condition can eventually become false.
- Avoid unnecessary infinite loops.



## Key Points

- do-while checks the condition after execution.
- It executes at least once.
- It is useful for interactive programs.



## Lesson Summary

The do-while loop is an important looping structure in C++ that allows programs to perform an operation at least once before checking the continuation condition.
`,


  examples: [

    {
      title: "do-while Counter Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int count = 1;

    do
    {
        cout << count << endl;

        count++;

    }while(count <= 5);


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


    {
      title: "Menu Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int choice;

    do
    {
        cout << "1. Start" << endl;
        cout << "2. Exit" << endl;

        cin >> choice;

    }while(choice != 2);


    cout << "Program Ended";

    return 0;
}
`,

      output:
`
1. Start
2. Exit
Program Ended
`,
    },

  ],

};


export default lesson9;
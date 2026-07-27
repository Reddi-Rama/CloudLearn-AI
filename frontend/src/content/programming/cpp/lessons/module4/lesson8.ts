const lesson8 = {

  id: "lesson8",

  title: "The while Loop",

  previousLesson:
    "/lesson/cpp-development/module4/lesson7",

  nextLesson:
    "/lesson/cpp-development/module4/lesson9",


  content: `
# The while Loop

In many programming situations, the number of repetitions is not known before execution begins.

Examples:

- A login system continues until correct credentials are entered.
- An ATM continues until the user selects exit.
- A program reads data until no more information is available.

Such situations are handled using the while loop.



## What is while Loop?

The while loop repeatedly executes a block of code as long as a specified condition remains true.



## Syntax

\`\`\`cpp
while(condition)
{
    statements;
}
\`\`\`



## How while Loop Works?

Execution process:

1. Condition is checked.
2. If the condition is true, the loop body executes.
3. After execution, the condition is checked again.
4. The process continues until the condition becomes false.



## Example

\`\`\`cpp
int count = 1;

while(count <= 5)
{
    cout << count << endl;

    count++;
}
\`\`\`

Output:

\`\`\`
1
2
3
4
5
\`\`\`



## while Loop vs for Loop

The major difference:

for loop:

- Used when the number of iterations is known.

while loop:

- Used when the number of iterations is unknown.



## Real-World Applications

The while loop is commonly used in:

- Authentication systems.
- Input validation.
- Network communication.
- Menu-driven applications.
- File processing.



## Example: Login System

A login system may continue asking for a password until the correct password is entered.



## Advantages of while Loop

The while loop:

- Handles unknown repetitions.
- Provides flexible control.
- Works well with condition-based execution.



## Best Practices

- Always update variables inside the loop.
- Ensure the condition eventually becomes false.
- Avoid accidental infinite loops.
- Keep loop logic simple.



## Key Points

- while loop checks the condition before execution.
- It may execute zero or more times.
- It is useful when iterations are unknown.



## Lesson Summary

The while loop allows programs to repeat operations based on conditions.

It is widely used in applications where execution depends on dynamic situations.
`,


  examples: [

    {
      title: "Counter Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int count = 1;

    while(count <= 5)
    {
        cout << count << endl;

        count++;
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


    {
      title: "User Input Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int number = 1;

    while(number != 0)
    {
        cout << "Enter number: ";

        cin >> number;
    }

    return 0;
}
`,

      output:
`
Enter number:
`,
    },

  ],

};


export default lesson8;
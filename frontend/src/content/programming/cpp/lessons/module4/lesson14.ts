const lesson14 = {

  id: "lesson14",

  title: "Infinite Loops",

  previousLesson:
    "/lesson/cpp-development/module4/lesson13",

  nextLesson:
    "/lesson/cpp-development/module4/lesson15",


  content: `
# Infinite Loops

An infinite loop is a loop that never stops because its termination condition never becomes false.

The loop continues executing continuously until the program is stopped manually or an external condition terminates it.



## What is an Infinite Loop?

An infinite loop occurs when the loop condition always remains true.

Example:

\`\`\`cpp
while(true)
{
    cout << "Running";
}
\`\`\`

Since the condition is always true, the loop never ends.



## Why Do Infinite Loops Occur?

Infinite loops usually happen because of:

- Incorrect conditions.
- Missing update statements.
- Incorrect termination logic.



## Accidental Infinite Loop

Example:

\`\`\`cpp
int i = 1;

while(i <= 10)
{
    cout << i;
}
\`\`\`

Here, the value of i never changes.

Therefore, the condition always remains true.



## Intentional Infinite Loops

Not all infinite loops are errors.

Many systems intentionally run continuously.

Examples:

- Operating systems.
- Web servers.
- Database servers.
- Network systems.
- Game servers.



## Real-World Example

A server continuously waits for requests from users.

The server should keep running until it is manually stopped.

This behavior is implemented using controlled infinite loops.



## How To Avoid Unwanted Infinite Loops?

Developers should:

- Update loop variables properly.
- Check loop conditions carefully.
- Ensure termination conditions exist.
- Test loops with different inputs.



## Applications

Infinite loops are used in:

- Embedded systems.
- Operating systems.
- Server applications.
- Real-time systems.



## Best Practices

- Use infinite loops only when required.
- Always provide an exit mechanism when possible.
- Avoid accidental infinite execution.
- Test loop conditions carefully.



## Key Points

- Infinite loops never terminate automatically.
- They can be intentional or accidental.
- Proper loop design prevents unwanted infinite execution.



## Lesson Summary

Infinite loops are powerful programming techniques when used correctly.

Professional developers carefully design loop conditions to avoid unnecessary resource consumption while maintaining continuous system operation.
`,


  examples: [

    {
      title: "Intentional Infinite Loop",

      code: `
#include <iostream>

using namespace std;

int main()
{
    while(true)
    {
        cout << "Server Running" << endl;

        break;
    }

    return 0;
}
`,

      output:
`
Server Running
`,
    },


    {
      title: "Correct Loop Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int i = 1;

    while(i <= 5)
    {
        cout << i << endl;

        i++;
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


export default lesson14;
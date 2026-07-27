const lesson12 = {

  id: "lesson12",

  title: "The continue Statement",

  previousLesson:
    "/lesson/cpp-development/module4/lesson11",

  nextLesson:
    "/lesson/cpp-development/module4/lesson13",


  content: `
# The continue Statement

During loop execution, sometimes we do not want to terminate the complete loop.

Instead, we may want to skip only the current iteration and continue with the next iteration.

The continue statement is used for this purpose.



## What is continue Statement?

The continue statement skips the remaining statements of the current loop iteration and transfers control to the next iteration.



## Syntax

\`\`\`cpp
continue;
\`\`\`



## How continue Works?

Execution process:

1. Loop starts execution.
2. Condition is checked.
3. Loop body executes.
4. When continue is encountered, remaining statements are skipped.
5. The next iteration begins.



## Example

\`\`\`cpp
for(int i = 1; i <= 5; i++)
{
    if(i == 3)
    {
        continue;
    }

    cout << i << endl;
}
\`\`\`

Output:

\`\`\`
1
2
4
5
\`\`\`

The value 3 is skipped because continue moved directly to the next iteration.



## break vs continue

break:

- Terminates the complete loop.
- Control moves outside the loop.


continue:

- Skips only the current iteration.
- Loop continues executing.



## Real-World Example

Consider an attendance processing system.

If a student is absent:

- The current record can be skipped.
- Remaining attendance records can continue processing.

The continue statement is useful in such situations.



## Applications of continue Statement

continue is used in:

- Data filtering.
- Record processing.
- Input validation.
- Data analysis.
- File processing.



## Advantages

The continue statement:

- Avoids unnecessary execution.
- Makes filtering operations easier.
- Provides better loop control.



## Best Practices

- Use continue only when it improves readability.
- Avoid excessive skipping logic.
- Keep loop conditions clear.



## Key Points

- continue skips the current iteration.
- It does not terminate the loop.
- It is useful for ignoring specific cases.



## Lesson Summary

The continue statement provides better control over loops by allowing developers to skip selected iterations while continuing the remaining execution.
`,


  examples: [

    {
      title: "continue Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    for(int i = 1; i <= 5; i++)
    {
        if(i == 3)
        {
            continue;
        }

        cout << i << endl;
    }

    return 0;
}
`,

      output:
`
1
2
4
5
`,
    },


    {
      title: "Skipping Even Numbers",

      code: `
#include <iostream>

using namespace std;

int main()
{
    for(int i = 1; i <= 10; i++)
    {
        if(i % 2 == 0)
        {
            continue;
        }

        cout << i << endl;
    }

    return 0;
}
`,

      output:
`
1
3
5
7
9
`,
    },

  ],

};


export default lesson12;
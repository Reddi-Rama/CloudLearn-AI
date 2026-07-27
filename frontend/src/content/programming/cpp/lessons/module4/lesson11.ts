const lesson11 = {

  id: "lesson11",

  title: "The break Statement",

  previousLesson:
    "/lesson/cpp-development/module4/lesson10",

  nextLesson:
    "/lesson/cpp-development/module4/lesson12",


  content: `
# The break Statement

During loop execution, sometimes a program needs to stop the loop immediately.

For example:

- Searching for an account number.
- Finding a particular record.
- Stopping a login attempt after success.

The break statement provides this functionality.



## What is break Statement?

The break statement is used to terminate a loop or switch statement immediately.

After break executes, control moves to the statement following the loop.



## Syntax

\`\`\`cpp
break;
\`\`\`



## How break Works?

Execution process:

1. Loop starts normally.
2. A condition is checked.
3. When break executes, the loop terminates immediately.
4. Remaining iterations are skipped.



## Example

\`\`\`cpp
for(int i = 1; i <= 10; i++)
{
    if(i == 5)
    {
        break;
    }

    cout << i << endl;
}
\`\`\`

Output:

\`\`\`
1
2
3
4
\`\`\`



## Real-World Example

Consider an employee search system.

The program searches through employee records.

When the required employee is found:

- Further searching is unnecessary.
- The loop can be terminated using break.



## Applications of break Statement

break is used in:

- Search algorithms.
- Menu-driven programs.
- Authentication systems.
- File processing.
- Data searching.



## break in switch Statement

The break statement is also used with switch cases.

Example:

\`\`\`cpp
switch(choice)
{
    case 1:
        cout << "Option 1";
        break;
}
\`\`\`

It prevents execution from continuing into the next case.



## Advantages

The break statement:

- Saves unnecessary processing.
- Improves efficiency.
- Provides better control over loops.



## Best Practices

- Use break only when required.
- Avoid excessive use.
- Keep program flow understandable.



## Key Points

- break immediately exits loops.
- It can be used in loops and switch statements.
- It improves execution control.



## Lesson Summary

The break statement allows developers to stop execution early when continuing the loop is unnecessary.

It is an important control statement used in many real-world applications.
`,


  examples: [

    {
      title: "Break in Loop Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    for(int i = 1; i <= 10; i++)
    {
        if(i == 6)
        {
            break;
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
3
4
5
`,
    },


    {
      title: "Search Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int numbers[] = {10,20,30,40};

    for(int i = 0; i < 4; i++)
    {
        if(numbers[i] == 30)
        {
            cout << "Found";
            break;
        }
    }

    return 0;
}
`,

      output:
`
Found
`,
    },

  ],

};


export default lesson11;
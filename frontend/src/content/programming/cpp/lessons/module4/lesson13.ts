const lesson13 = {

  id: "lesson13",

  title: "The goto Statement",

  previousLesson:
    "/lesson/cpp-development/module4/lesson12",

  nextLesson:
    "/lesson/cpp-development/module4/lesson14",


  content: `
# The goto Statement

The goto statement is one of the oldest control statements in programming.

It allows program execution to jump directly from one part of the program to another using labels.



## What is goto Statement?

The goto statement transfers control to a labeled statement in the program.

It changes the normal sequential flow of execution.



## Syntax

\`\`\`cpp
goto labelName;

labelName:
    statements;
\`\`\`



## Example

\`\`\`cpp
goto message;

cout << "This will be skipped";

message:

cout << "Welcome";
\`\`\`

Output:

\`\`\`
Welcome
\`\`\`



## How goto Works?

Execution process:

1. Program reaches goto statement.
2. Control jumps to the specified label.
3. Statements after the label execute normally.



## Real-World Example

An old login system may use goto to return to the password input section when incorrect credentials are entered.



## Why goto Is Discouraged?

Although goto works correctly, excessive usage creates problems.

It can make programs:

- Difficult to understand.
- Difficult to debug.
- Difficult to maintain.



Programs with many goto statements are often called:

Spaghetti Code

because the execution flow becomes complicated.



## Alternatives to goto

Most problems solved using goto can be handled using:

- Loops.
- Functions.
- Exception handling.



## Applications of goto

goto may still appear in:

- Legacy software.
- Old programming systems.
- Low-level programming.



## Best Practices

- Avoid unnecessary goto usage.
- Prefer structured programming techniques.
- Use loops and functions whenever possible.



## Key Points

- goto transfers control using labels.
- It changes normal execution flow.
- Modern programming rarely uses goto.



## Lesson Summary

The goto statement provides direct control transfer, but professional developers usually avoid it because structured programming techniques produce cleaner and maintainable code.
`,


  examples: [

    {
      title: "goto Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int number = 1;

start:

    cout << number << endl;

    number++;

    if(number <= 3)
    {
        goto start;
    }

    return 0;
}
`,

      output:
`
1
2
3
`,
    },


    {
      title: "Login Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int password;

login:

    cout << "Enter Password: ";

    cin >> password;


    if(password != 1234)
    {
        goto login;
    }


    cout << "Login Successful";

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


export default lesson13;
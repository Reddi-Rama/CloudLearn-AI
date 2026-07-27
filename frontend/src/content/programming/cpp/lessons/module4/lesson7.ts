const lesson7 = {

  id: "lesson7",

  title: "The for Loop",

  previousLesson:
    "/lesson/cpp-development/module4/lesson6",

  nextLesson:
    "/lesson/cpp-development/module4/lesson8",


  content: `
# The for Loop

Many programming problems require the same operation to be performed repeatedly.

Examples:

- Printing employee reports.
- Processing customer records.
- Calculating monthly sales.
- Displaying numbers.

Writing the same statements again and again makes programs longer and difficult to maintain.

Loops solve this problem by allowing a block of code to execute repeatedly.



## What is a for Loop?

The for loop is a looping statement used to execute a block of code multiple times.

It is generally used when the number of repetitions is already known.



## Syntax

\`\`\`cpp
for(initialization; condition; update)
{
    statements;
}
\`\`\`



## Components of for Loop

A for loop contains three important parts.



## Initialization

Initialization creates and assigns the starting value of the loop variable.

Example:

\`\`\`cpp
int i = 1;
\`\`\`



## Condition

The condition decides whether the loop should continue.

Example:

\`\`\`cpp
i <= 10;
\`\`\`



## Update

The update changes the loop variable after every iteration.

Example:

\`\`\`cpp
i++;
\`\`\`



## Execution Flow

The execution process is:

1. Initialization executes once.
2. Condition is checked.
3. Loop body executes.
4. Update happens.
5. Condition is checked again.



## Example

\`\`\`cpp
for(int i = 1; i <= 5; i++)
{
    cout << i << endl;
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



## Real-World Applications

The for loop is used in:

- Array traversal.
- Data processing.
- Report generation.
- Searching algorithms.
- Sorting algorithms.



## Advantages of for Loop

The for loop:

- Provides compact syntax.
- Is easy to understand.
- Works efficiently with fixed iterations.



## Best Practices

- Use meaningful loop variables.
- Avoid unnecessary calculations inside loops.
- Ensure loop conditions eventually become false.
- Maintain proper indentation.



## Key Points

- for loop is used for repeated execution.
- It is best when the number of iterations is known.
- It contains initialization, condition, and update.



## Lesson Summary

The for loop is one of the most commonly used looping structures in C++.

It helps developers automate repetitive tasks and write efficient programs.
`,


  examples: [

    {
      title: "Printing Numbers Example",

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


    {
      title: "Table Generation Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int number = 5;

    for(int i = 1; i <= 10; i++)
    {
        cout << number * i << endl;
    }

    return 0;
}
`,

      output:
`
5
10
15
20
25
30
35
40
45
50
`,
    },

  ],

};


export default lesson7;
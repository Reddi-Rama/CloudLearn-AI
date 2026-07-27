const lesson10 = {

  id: "lesson10",

  title: "Difference Between for, while, and do-while Loops",

  previousLesson:
    "/lesson/cpp-development/module4/lesson9",

  nextLesson:
    "/lesson/cpp-development/module4/lesson11",


  content: `
# Difference Between for, while, and do-while Loops

C++ provides three major looping structures:

- for Loop
- while Loop
- do-while Loop

All three loops perform repeated execution, but each one is suitable for different situations.



## Why Do We Have Different Loops?

Different programming problems require different approaches.

For example:

- Printing numbers from 1 to 100 requires a known number of repetitions.
- Reading user input requires condition-based repetition.
- Menu systems require at least one execution.

Different loops help developers solve these problems efficiently.



## for Loop

The for loop is generally used when the number of iterations is known before execution.

Example:

\`\`\`cpp
for(int i = 1; i <= 10; i++)
{
    cout << i;
}
\`\`\`

Common uses:

- Array traversal.
- Number generation.
- Report processing.



## while Loop

The while loop is used when the number of iterations is not known beforehand.

Example:

\`\`\`cpp
while(condition)
{
    statements;
}
\`\`\`

Common uses:

- Login systems.
- Input validation.
- Reading data continuously.



## do-while Loop

The do-while loop executes the block at least once before checking the condition.

Example:

\`\`\`cpp
do
{
    statements;
}
while(condition);
\`\`\`

Common uses:

- Menu-driven programs.
- Interactive applications.
- User input systems.



## Comparison Between Loops

for Loop:

- Condition checked before execution.
- Minimum executions: 0.
- Best for known iterations.



while Loop:

- Condition checked before execution.
- Minimum executions: 0.
- Best for unknown iterations.



do-while Loop:

- Condition checked after execution.
- Minimum executions: 1.
- Best when first execution is mandatory.



## Choosing the Correct Loop

Professional developers select loops based on requirements.

Use:

- for loop when repetitions are fixed.
- while loop when repetition depends on conditions.
- do-while loop when execution must happen once.



## Real-World Applications

Loops are used in:

- Data processing.
- Games.
- Banking systems.
- Web applications.
- Operating systems.



## Best Practices

- Choose loops based on the problem.
- Keep loop conditions simple.
- Avoid unnecessary nesting.
- Ensure loops terminate properly.



## Key Points

- All loops perform repetition.
- Each loop has different use cases.
- Selecting the correct loop improves code quality.



## Lesson Summary

Understanding the differences between for, while, and do-while loops helps developers choose the correct looping structure for different programming problems.
`,


  examples: [

    {
      title: "for Loop Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    for(int i = 1; i <= 3; i++)
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
`,
    },


    {
      title: "do-while Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int i = 1;

    do
    {
        cout << i << endl;

        i++;

    }while(i <= 3);

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

  ],

};


export default lesson10;
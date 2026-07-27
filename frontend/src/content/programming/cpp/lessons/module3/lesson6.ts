const lesson6 = {

  id: "lesson6",

  title: "Increment and Decrement Operators",

  previousLesson:
    "/lesson/cpp-development/module3/lesson5",

  nextLesson:
    "/lesson/cpp-development/module3/lesson7",


  content: `
# Increment and Decrement Operators

Many programs need to increase or decrease values repeatedly.

Examples:

- Counting website visitors.
- Updating game scores.
- Processing items in loops.
- Tracking transactions.

C++ provides increment and decrement operators to simplify these operations.



## Increment Operator (++)

The increment operator increases the value of a variable by one.

Example:

\`\`\`cpp
int count = 10;

count++;
\`\`\`

After execution:

\`\`\`
count = 11
\`\`\`



## Decrement Operator (--)

The decrement operator decreases the value of a variable by one.

Example:

\`\`\`cpp
int count = 10;

count--;
\`\`\`

After execution:

\`\`\`
count = 9
\`\`\`



## Types of Increment and Decrement

C++ provides two forms:

- Pre-Increment.
- Post-Increment.
- Pre-Decrement.
- Post-Decrement.



## Pre-Increment (++value)

In pre-increment, the value is increased first and then used.

Example:

\`\`\`cpp
int x = 5;

cout << ++x;
\`\`\`

Output:

\`\`\`
6
\`\`\`



## Post-Increment (value++)

In post-increment, the current value is used first and increased afterward.

Example:

\`\`\`cpp
int x = 5;

cout << x++;
\`\`\`

Output:

\`\`\`
5
\`\`\`

After execution:

\`\`\`
x = 6
\`\`\`



## Pre-Decrement (--value)

The value decreases before use.

Example:

\`\`\`cpp
int x = 5;

cout << --x;
\`\`\`

Output:

\`\`\`
4
\`\`\`



## Post-Decrement (value--)

The value is used first and decreased afterward.

Example:

\`\`\`cpp
int x = 5;

cout << x--;
\`\`\`

Output:

\`\`\`
5
\`\`\`



## Applications

Increment and decrement operators are used in:

- Loops.
- Counters.
- Array traversal.
- Iterative algorithms.



## Real-World Example

A game application may update score:

\`\`\`cpp
score++;
\`\`\`

A visitor counter may track users:

\`\`\`cpp
visitors++;
\`\`\`



## Best Practices

- Understand pre and post operations.
- Avoid confusing expressions.
- Use them clearly in loops.
- Prefer readability.



## Key Points

- ++ increases value by one.
- -- decreases value by one.
- Pre-operation happens before use.
- Post-operation happens after use.



## Lesson Summary

Increment and decrement operators provide a simple way to update values.

They are essential for counters, loops, and iterative programming in C++.
`,



  examples: [

    {
      title: "Increment Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int count = 10;

    count++;

    cout << count;

    return 0;
}
`,

      output:
`
11
`,
    },


    {
      title: "Pre and Post Increment Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int x = 5;

    cout << x++ << endl;

    cout << x;

    return 0;
}
`,

      output:
`
5

6
`,
    },

  ],

};


export default lesson6;
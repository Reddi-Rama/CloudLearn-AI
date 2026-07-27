const lesson10 = {

  id: "lesson10",

  title: "Type Modifiers",

  previousLesson:
    "/lesson/cpp-development/module2/lesson9",

  nextLesson:
    "/lesson/cpp-development/module2/lesson11",


  content: `
# Type Modifiers

Different applications require different ranges of values and memory requirements.

A small application storing attendance data does not require the same storage capacity as a scientific application handling very large calculations.

C++ provides type modifiers to customize the size and range of fundamental data types.



## What are Type Modifiers?

Type modifiers are keywords that modify the size, range, or behavior of basic data types.

They allow developers to control memory usage and store different ranges of values.



## Types of Type Modifiers

C++ provides four main type modifiers:

- short

- long

- signed

- unsigned



## short Modifier

The short modifier is used when smaller memory usage is required.

Example:

\`\`\`cpp
short int age = 20;
\`\`\`

It stores smaller integer values compared to int.



## long Modifier

The long modifier is used to store larger values.

Example:

\`\`\`cpp
long int population = 1500000;
\`\`\`

It is useful when normal integer range is not enough.



## signed Modifier

The signed modifier allows storing both positive and negative values.

Example:

\`\`\`cpp
signed int temperature = -15;
\`\`\`



## unsigned Modifier

The unsigned modifier stores only positive values.

Example:

\`\`\`cpp
unsigned int users = 5000;
\`\`\`

Since negative values are not stored, it can represent a larger positive range.



## Combining Type Modifiers

Modifiers can be combined with data types.

Examples:

\`\`\`cpp
short int count;

long int distance;

unsigned int total;

long long int population;
\`\`\`



## Choosing the Correct Modifier

The correct modifier depends on the application.

Examples:

- short int for small counters.
- int for general calculations.
- long int for large values.
- unsigned int for values that cannot be negative.



## Real-World Applications

Type modifiers are useful in:

- Embedded systems.
- Game development.
- Operating systems.
- High-performance applications.



## Best Practices

- Choose data types based on expected values.
- Avoid unnecessary large data types.
- Consider memory efficiency.
- Use unsigned values when negative numbers are impossible.



## Key Points

- Type modifiers change the range of data types.
- short reduces storage requirements.
- long increases value capacity.
- signed supports negative values.
- unsigned stores only positive values.



## Lesson Summary

Type modifiers provide flexibility in memory management and value storage.

They help developers create efficient programs by selecting suitable data representations.
`,



  examples: [

    {
      title: "Type Modifier Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    short int age = 20;

    long int population = 1500000;

    cout << age << endl;
    cout << population;

    return 0;
}
`,

      output:
`
20

1500000
`,
    },


    {
      title: "Unsigned Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    unsigned int visitors = 5000;

    cout << visitors;

    return 0;
}
`,

      output:
`
5000
`,
    },

  ],

};


export default lesson10;
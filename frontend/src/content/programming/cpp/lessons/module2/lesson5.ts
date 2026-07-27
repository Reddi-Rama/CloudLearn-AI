const lesson5 = {

  id: "lesson5",

  title: "Integer Data Types",

  previousLesson:
    "/lesson/cpp-development/module2/lesson4",

  nextLesson:
    "/lesson/cpp-development/module2/lesson6",


  content: `
# Integer Data Types

Integer data types are used to store whole numbers without decimal values.

Examples include:

- Age.
- Number of students.
- Population.
- Product quantity.
- Transaction count.



## Integer Types in C++

C++ provides different integer types based on memory size and value range.

Common integer types are:

- short int
- int
- long int
- long long int



## int Data Type

The int data type is the most commonly used integer type.

It usually occupies 4 bytes of memory.

Example:

\`\`\`cpp
int students = 120;
\`\`\`

It is suitable for most general-purpose calculations.



## short int

The short int type stores smaller integer values.

Example:

\`\`\`cpp
short int age = 20;
\`\`\`

It uses less memory compared to int.



## long int

The long int type stores larger integer values.

Example:

\`\`\`cpp
long int population = 1500000;
\`\`\`

It is useful when larger ranges are required.



## long long int

The long long int type is used for very large numbers.

Example:

\`\`\`cpp
long long int distance = 9876543210;
\`\`\`



## Why Multiple Integer Types Exist?

Different applications require different ranges.

Examples:

- Student attendance can use int.
- Population statistics may use long.
- Scientific calculations may use long long.



## Signed Integers

Signed integers can store both positive and negative values.

Example:

\`\`\`cpp
int temperature = -5;
\`\`\`



## Unsigned Integers

Unsigned integers store only positive values.

Example:

\`\`\`cpp
unsigned int users = 5000;
\`\`\`

Because negative values are not stored, unsigned integers can represent larger positive numbers.



## Choosing Integer Types

Developers should select integer types based on expected values.

Examples:

- Use int for normal calculations.
- Use long for larger values.
- Use long long for very large calculations.



## Real-World Applications

Integer data types are used in:

- Banking systems.
- Inventory management.
- Gaming scores.
- User counts.
- Transaction records.



## Best Practices

- Use int for most situations.
- Choose larger types only when required.
- Consider memory efficiency.
- Avoid storing unnecessary large ranges.



## Key Points

- Integers store whole numbers.
- C++ provides multiple integer types.
- Signed integers support negative values.
- Unsigned integers store only positive values.



## Lesson Summary

Integer data types allow C++ programs to store and process whole numbers efficiently.

Choosing the correct integer type improves memory usage and program performance.
`,


  examples: [

    {
      title: "Integer Types Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int age = 20;

    long population = 1500000;

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
      title: "Signed and Unsigned Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int temperature = -10;

    unsigned int users = 5000;

    cout << temperature << endl;
    cout << users;

    return 0;
}
`,

      output:
`
-10

5000
`,
    },

  ],

};


export default lesson5;
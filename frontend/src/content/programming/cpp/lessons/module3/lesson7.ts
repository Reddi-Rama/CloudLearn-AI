const lesson7 = {

  id: "lesson7",

  title: "Bitwise Operators",

  previousLesson:
    "/lesson/cpp-development/module3/lesson6",

  nextLesson:
    "/lesson/cpp-development/module3/lesson8",


  content: `
# Bitwise Operators

Most operators work with complete values, but bitwise operators work directly with individual bits stored in memory.

Computers internally represent all information in binary form, making bitwise operations extremely efficient.



## What are Bitwise Operators?

Bitwise operators perform operations on individual bits of integer values.

They are mainly used in:

- System programming.
- Embedded systems.
- Device drivers.
- Networking software.
- Cryptography.



## Bitwise Operators in C++

C++ provides the following bitwise operators:

| Operator | Meaning |
|----------|---------|
| & | Bitwise AND |
| | | Bitwise OR |
| ^ | Bitwise XOR |
| ~ | Bitwise NOT |
| << | Left Shift |
| >> | Right Shift |



## Bitwise AND (&)

The AND operator compares each bit.

The result bit becomes 1 only when both bits are 1.

Example:

\`\`\`
5 & 3
\`\`\`

Binary:

\`\`\`
5 = 101

3 = 011

Result = 001
\`\`\`

Output:

\`\`\`
1
\`\`\`



## Bitwise OR (|)

The OR operator returns 1 if at least one bit is 1.

Example:

\`\`\`
5 | 3
\`\`\`

Binary:

\`\`\`
101

011

111
\`\`\`

Result:

\`\`\`
7
\`\`\`



## Bitwise XOR (^)

XOR returns 1 when both bits are different.

Example:

\`\`\`
5 ^ 3
\`\`\`



## Bitwise NOT (~)

The NOT operator reverses all bits.

Example:

\`\`\`cpp
~5
\`\`\`



## Left Shift Operator (<<)

The left shift operator moves bits toward the left.

Example:

\`\`\`cpp
5 << 1
\`\`\`

Result:

\`\`\`
10
\`\`\`



## Right Shift Operator (>>)

The right shift operator moves bits toward the right.

Example:

\`\`\`cpp
8 >> 1
\`\`\`

Result:

\`\`\`
4
\`\`\`



## Applications of Bitwise Operators

Bitwise operators are used in:

- Operating systems.
- Embedded devices.
- Network programming.
- Hardware control.
- Performance optimization.



## Real-World Example

Embedded systems often use bits to control device settings.

Example:

- Turning sensors ON/OFF.
- Managing hardware flags.
- Controlling memory registers.



## Best Practices

- Understand binary representation.
- Use bitwise operations carefully.
- Prefer readability over unnecessary optimization.
- Use comments for complex bit operations.



## Key Points

- Bitwise operators work on individual bits.
- They provide efficient low-level operations.
- They are important in system-level programming.



## Lesson Summary

Bitwise operators provide direct control over binary data.

They are powerful tools for developers working with hardware, memory, and performance-critical applications.
`,



  examples: [

    {
      title: "Bitwise AND Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int result = 5 & 3;

    cout << result;

    return 0;
}
`,

      output:
`
1
`,
    },


    {
      title: "Left Shift Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int value = 5 << 1;

    cout << value;

    return 0;
}
`,

      output:
`
10
`,
    },

  ],

};


export default lesson7;
const lesson2 = {

  id: "lesson2",

  title: "Arithmetic Operators",

  previousLesson:
    "/lesson/cpp-development/module3/lesson1",

  nextLesson:
    "/lesson/cpp-development/module3/lesson3",


  content: `
# Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations on numeric values.

They are among the most frequently used operators in programming.



## Why Are Arithmetic Operators Needed?

Applications perform calculations every day.

Examples:

- Calculating totals.
- Computing discounts.
- Calculating interest.
- Generating reports.
- Processing measurements.



## Arithmetic Operators in C++

C++ provides the following arithmetic operators:

| Operator | Meaning |
|----------|---------|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus |



## Addition Operator (+)

The addition operator adds two values.

Example:

\`\`\`cpp
int result = 10 + 20;
\`\`\`

Output:

\`\`\`
30
\`\`\`



## Subtraction Operator (-)

The subtraction operator finds the difference between values.

Example:

\`\`\`cpp
int result = 20 - 10;
\`\`\`

Output:

\`\`\`
10
\`\`\`



## Multiplication Operator (*)

The multiplication operator multiplies values.

Example:

\`\`\`cpp
int result = 5 * 4;
\`\`\`

Output:

\`\`\`
20
\`\`\`



## Division Operator (/)

The division operator divides values.

Example:

\`\`\`cpp
int result = 20 / 5;
\`\`\`

Output:

\`\`\`
4
\`\`\`



## Integer Division

When both values are integers, the decimal part is removed.

Example:

\`\`\`cpp
cout << 10 / 3;
\`\`\`

Output:

\`\`\`
3
\`\`\`

To get decimal output:

\`\`\`cpp
cout << 10.0 / 3;
\`\`\`

Output:

\`\`\`
3.33333
\`\`\`



## Modulus Operator (%)

The modulus operator returns the remainder after division.

Example:

\`\`\`cpp
cout << 17 % 5;
\`\`\`

Output:

\`\`\`
2
\`\`\`



## Applications of Modulus Operator

The modulus operator is used for:

- Checking even and odd numbers.
- Circular indexing.
- Scheduling algorithms.
- Cryptographic operations.



## Real-World Example

An e-commerce application may use arithmetic operators to calculate:

\`\`\`cpp
finalAmount = price - discount;
\`\`\`

A banking system may calculate:

\`\`\`cpp
interest = amount * rate;
\`\`\`



## Best Practices

- Use appropriate data types.
- Understand integer division.
- Avoid unnecessary calculations.
- Keep expressions readable.



## Key Points

- Arithmetic operators perform mathematical operations.
- + adds values.
- - subtracts values.
- * multiplies values.
- / divides values.
- % gives the remainder.



## Lesson Summary

Arithmetic operators allow C++ programs to perform numerical calculations.

They are essential for building applications that process and transform data.
`,


  examples: [

    {
      title: "Arithmetic Operations Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int a = 20;

    int b = 5;

    cout << a + b << endl;

    cout << a - b << endl;

    cout << a * b << endl;

    cout << a / b << endl;

    cout << a % b;

    return 0;
}
`,

      output:
`
25

15

100

4

0
`,
    },


    {
      title: "Modulus Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int number = 10;

    cout << number % 2;

    return 0;
}
`,

      output:
`
0
`,
    },

  ],

};


export default lesson2;
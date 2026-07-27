const lesson11 = {

  id: "lesson11",

  title: "Type Conversion",

  previousLesson:
    "/lesson/cpp-development/module2/lesson10",

  nextLesson:
    "/lesson/cpp-development/module2/lesson12",


  content: `
# Type Conversion

In many programs, values of one data type need to be converted into another data type.

For example, an integer value may need to be converted into a decimal value during calculations.

This process is called type conversion.



## Why Do We Need Type Conversion?

Type conversion is useful when:

- Performing calculations with different data types.
- Processing user input.
- Working with mathematical operations.
- Converting data between systems.



## Types of Type Conversion

C++ supports two types of conversion:

- Implicit Type Conversion.
- Explicit Type Conversion.



## Implicit Type Conversion

Implicit conversion happens automatically by the compiler.

It occurs when converting a smaller or compatible type into a larger type.



Example:

\`\`\`cpp
int number = 10;

double result = number;
\`\`\`

Here, the integer value is automatically converted into a double value.



## Explicit Type Conversion

Explicit conversion is performed manually by the programmer.

It is also called type casting.



Example:

\`\`\`cpp
double price = 499.99;

int amount = (int)price;
\`\`\`

Output:

\`\`\`
499
\`\`\`

The decimal part is removed.



## Data Loss During Conversion

Some conversions may cause loss of information.

Example:

\`\`\`cpp
double marks = 89.75;

int finalMarks = (int)marks;
\`\`\`

Result:

\`\`\`
89
\`\`\`

The decimal value is removed permanently.



## Common Type Conversion Examples

Integer to Double:

\`\`\`cpp
int value = 20;

double result = value;
\`\`\`


Double to Integer:

\`\`\`cpp
double price = 99.99;

int amount = (int)price;
\`\`\`



## Real-World Applications

Type conversion is used in:

- Banking calculations.
- Data processing.
- Scientific applications.
- User input handling.
- Mathematical operations.



## Best Practices

- Understand possible data loss.
- Use explicit conversion carefully.
- Choose suitable data types.
- Avoid unnecessary conversions.



## Key Points

- Type conversion changes one data type into another.
- Implicit conversion is automatic.
- Explicit conversion is controlled by programmers.
- Incorrect conversions may lose information.



## Lesson Summary

Type conversion allows C++ programs to work with different data types effectively.

Understanding conversion rules helps developers write accurate and reliable programs.
`,



  examples: [

    {
      title: "Implicit Conversion Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int number = 10;

    double result = number;

    cout << result;

    return 0;
}
`,

      output:
`
10
`,
    },


    {
      title: "Explicit Conversion Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    double value = 45.75;

    int result = (int)value;

    cout << result;

    return 0;
}
`,

      output:
`
45
`,
    },

  ],

};


export default lesson11;
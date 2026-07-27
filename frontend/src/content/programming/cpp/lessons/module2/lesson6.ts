const lesson6 = {

  id: "lesson6",

  title: "Floating Point Data Types",

  previousLesson:
    "/lesson/cpp-development/module2/lesson5",

  nextLesson:
    "/lesson/cpp-development/module2/lesson7",


  content: `
# Floating Point Data Types

Many applications work with values that contain decimal points.

Examples include:

- Product prices.
- Interest rates.
- Scientific measurements.
- Temperatures.
- Engineering calculations.

To store decimal values, C++ provides floating point data types.



## Floating Point Types in C++

C++ provides three floating point data types:

- float
- double
- long double



## float Data Type

The float data type stores decimal values with moderate precision.

It usually occupies 4 bytes of memory.

Example:

\`\`\`cpp
float temperature = 36.5;
\`\`\`

It is commonly used when memory efficiency is important.



## double Data Type

The double data type provides higher precision compared to float.

It usually occupies 8 bytes of memory.

Example:

\`\`\`cpp
double pi = 3.141592653;
\`\`\`

Double is the preferred choice for most professional applications.



## long double Data Type

The long double type provides greater precision than double.

It is mainly used in:

- Scientific applications.
- Engineering calculations.
- Advanced numerical analysis.



Example:

\`\`\`cpp
long double value = 123456.789012345;
\`\`\`



## Why Do Multiple Floating Point Types Exist?

Different applications have different accuracy requirements.

Examples:

A game displaying object positions may use float because moderate precision is enough.

A banking system calculating financial values may use double because higher accuracy is required.



## Precision Comparison

float:

- Less memory usage.
- Lower precision.

double:

- More memory usage.
- Higher precision.
- Commonly used.

long double:

- Highest precision.
- Used for specialized calculations.



## Real-World Applications

Floating point values are used in:

- Banking systems.
- Weather applications.
- Scientific software.
- Graphics applications.
- Engineering systems.



## Best Practices

- Use double for most decimal calculations.
- Use float when memory optimization is required.
- Choose precision based on application requirements.
- Avoid unnecessary precision.



## Key Points

- Floating point types store decimal values.
- float uses less memory.
- double provides better precision.
- long double is used for advanced calculations.



## Lesson Summary

Floating point data types allow C++ programs to handle decimal values accurately.

Choosing the correct floating point type improves performance and maintains calculation accuracy.
`,


  examples: [

    {
      title: "Floating Point Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    float temperature = 36.5;

    double salary = 75000.75;

    cout << temperature << endl;
    cout << salary;

    return 0;
}
`,

      output:
`
36.5

75000.8
`,
    },


    {
      title: "Precision Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    double pi = 3.141592653;

    cout << pi;

    return 0;
}
`,

      output:
`
3.14159
`,
    },

  ],

};


export default lesson6;
const lesson13 = {

  id: "lesson13",

  title: "sizeof Operator",

  previousLesson:
    "/lesson/cpp-development/module3/lesson12",

  nextLesson:
    "/lesson/cpp-development/module3/lesson14",


  content: `
# sizeof Operator

Memory management is one of the most important features of C++.

Developers often need to know how much memory a variable or data type occupies.

The sizeof operator provides this information.



## What is sizeof Operator?

The sizeof operator returns the amount of memory occupied by a variable or data type.

The result is measured in bytes.



## Syntax

Using data type:

\`\`\`cpp
sizeof(data_type)
\`\`\`

Using variable:

\`\`\`cpp
sizeof(variable_name)
\`\`\`



## Example

\`\`\`cpp
cout << sizeof(int);
\`\`\`

Possible Output:

\`\`\`
4
\`\`\`

This means an integer occupies 4 bytes of memory.



## Using sizeof with Variables

Example:

\`\`\`cpp
double salary = 55000.50;

cout << sizeof(salary);
\`\`\`

Output:

\`\`\`
8
\`\`\`



## Memory Size of Common Data Types

char:

1 Byte


bool:

1 Byte


int:

4 Bytes


float:

4 Bytes


double:

8 Bytes



The exact size depends on:

- Compiler.
- Operating system.
- Processor architecture.



## sizeof with Arrays

The sizeof operator can also determine the total memory occupied by arrays.

Example:

\`\`\`cpp
int numbers[5];

cout << sizeof(numbers);
\`\`\`

If one integer occupies 4 bytes:

\`\`\`
5 × 4 = 20 bytes
\`\`\`



## Applications of sizeof Operator

The sizeof operator is used in:

- Memory optimization.
- Array size calculation.
- Data structure design.
- System programming.
- Embedded development.



## Real-World Importance

Applications such as operating systems and embedded devices require accurate memory calculations.

Developers use sizeof to understand and optimize memory usage.



## Best Practices

- Use sizeof when memory information is required.
- Understand that sizes may differ between systems.
- Avoid assuming fixed memory sizes.
- Use it for portable code.



## Key Points

- sizeof returns memory size in bytes.
- It works with variables and data types.
- It is important for memory management.
- Size may vary depending on the environment.



## Lesson Summary

The sizeof operator helps C++ developers understand memory usage.

It is an important tool for writing efficient and optimized programs.
`,


  examples: [

    {
      title: "sizeof Data Type Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    cout << sizeof(int);

    return 0;
}
`,

      output:
`
4
`,
    },


    {
      title: "sizeof Variable Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    double price = 99.99;

    cout << sizeof(price);

    return 0;
}
`,

      output:
`
8
`,
    },

  ],

};


export default lesson13;
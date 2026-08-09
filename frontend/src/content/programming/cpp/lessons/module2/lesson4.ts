const lesson4 = {

  id: "lesson4",

  title: "Data Types in C++",

  previousLesson:
    "/lesson/cpp-development/module2/lesson3",

  nextLesson:
    "/lesson/cpp-development/module2/lesson5",


  content: `
# Data Types in C++

Different types of information require different types of storage.

For example:

- Age is stored as an integer.
- Salary is stored as a decimal value.
- Grade is stored as a character.
- Status is stored as true or false.

Data types define what type of information a variable can store.



## Why Are Data Types Important?

Data types help the compiler:

- Allocate memory efficiently.
- Understand stored values.
- Perform valid operations.
- Detect errors during compilation.

Choosing the correct data type improves program performance and memory usage.



## Categories of Data Types

C++ data types are mainly divided into three categories:

- Fundamental Data Types.
- Derived Data Types.
- User Defined Data Types.



## Fundamental Data Types

Fundamental data types are provided directly by the C++ language.

Common examples:

- int
- float
- double
- char
- bool



Example:

\`\`\`cpp
int age = 20;

float price = 99.5;

char grade = 'A';

bool status = true;
\`\`\`



## Integer Data Type

The int data type stores whole numbers.

Example:

\`\`\`cpp
int students = 100;
\`\`\`

Used for:

- Age.
- Quantity.
- Count values.



## Floating Point Data Types

Floating point types store decimal values.

Examples:

- float
- double
- long double



Example:

\`\`\`cpp
double salary = 45000.75;
\`\`\`



## Character Data Type

The char data type stores a single character.

Example:

\`\`\`cpp
char grade = 'A';
\`\`\`



## Boolean Data Type

The bool data type stores logical values.

It can contain:

- true
- false



Example:

\`\`\`cpp
bool isActive = true;
\`\`\`



## Derived Data Types

Derived data types are created from fundamental data types.

Examples:

- Arrays.
- Pointers.
- References.



## User Defined Data Types

User defined data types are created by programmers.

Examples:

- Classes.
- Structures.
- Enumerations.



## Real-World Example

A student management system may use:

\`\`\`cpp
string name = "Alex";

int age = 20;

float percentage = 85.5;

char grade = 'A';
\`\`\`

Each variable uses a suitable data type.



## Best Practices

- Select appropriate data types.
- Avoid unnecessary memory usage.
- Understand value ranges.
- Use meaningful variable names.



## Key Points

- Data types define the type of stored information.
- Different data requires different storage.
- C++ provides built-in and user-defined data types.
- Proper selection improves efficiency.



## Lesson Summary

Data types are the foundation of C++ programming.

They help programs store information correctly and allow the compiler to manage memory efficiently.
`,



  examples: [

    {
      title: "Different Data Types Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int age = 20;

    float height = 5.8;

    char grade = 'A';

    bool passed = true;

    cout << age << endl;
    cout << height << endl;
    cout << grade << endl;
    cout << passed;

    return 0;
}
`,

      output:
`
20

5.8

A

1
`,
    },

  ],

};


export default lesson4;
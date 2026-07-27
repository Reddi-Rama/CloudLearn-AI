const lesson5 = {

  id: "lesson5",

  title: "Assignment Operators",

  previousLesson:
    "/lesson/cpp-development/module3/lesson4",

  nextLesson:
    "/lesson/cpp-development/module3/lesson6",


  content: `
# Assignment Operators

Assignment operators are used to store values inside variables.

The most commonly used assignment operator in C++ is:

\`\`\`
=
\`\`\`

It assigns the value on the right side to the variable on the left side.



## Simple Assignment Operator (=)

The assignment operator stores a value inside a variable.

Example:

\`\`\`cpp
int marks = 90;
\`\`\`

Here:

- marks is the variable.
- 90 is the assigned value.



## Compound Assignment Operators

C++ provides compound assignment operators that combine calculations with assignment.

They reduce code length and improve readability.



## Addition Assignment (+=)

The += operator adds a value to an existing variable.

Example:

\`\`\`cpp
int salary = 50000;

salary += 5000;
\`\`\`

Equivalent to:

\`\`\`cpp
salary = salary + 5000;
\`\`\`



## Subtraction Assignment (-=)

The -= operator subtracts a value.

Example:

\`\`\`cpp
int balance = 10000;

balance -= 2000;
\`\`\`

Equivalent to:

\`\`\`cpp
balance = balance - 2000;
\`\`\`



## Multiplication Assignment (*=)

The *= operator multiplies the variable value.

Example:

\`\`\`cpp
int price = 100;

price *= 5;
\`\`\`



## Division Assignment (/=)

The /= operator divides the variable value.

Example:

\`\`\`cpp
int value = 100;

value /= 10;
\`\`\`



## Modulus Assignment (%=)

The %= operator stores the remainder.

Example:

\`\`\`cpp
int number = 20;

number %= 3;
\`\`\`



## Real-World Applications

Assignment operators are used in:

- Banking systems.
- Inventory management.
- Billing applications.
- Game score updates.



Example:

Banking system:

\`\`\`cpp
balance += depositAmount;
\`\`\`


Inventory system:

\`\`\`cpp
stock -= soldQuantity;
\`\`\`



## Advantages of Compound Assignment Operators

They:

- Reduce code length.
- Improve readability.
- Make updates easier.
- Reduce repeated expressions.



## Best Practices

- Use compound operators when appropriate.
- Keep expressions simple.
- Avoid unnecessary complexity.
- Choose meaningful variable names.



## Key Points

- Assignment operators store values.
- = assigns a value.
- Compound operators combine calculation and assignment.
- They make code shorter and cleaner.



## Lesson Summary

Assignment operators help programs update and manage values efficiently.

They are widely used in almost every C++ application.
`,



  examples: [

    {
      title: "Simple Assignment Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int marks;

    marks = 90;

    cout << marks;

    return 0;
}
`,

      output:
`
90
`,
    },


    {
      title: "Compound Assignment Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int balance = 5000;

    balance += 2000;

    cout << balance;

    return 0;
}
`,

      output:
`
7000
`,
    },

  ],

};


export default lesson5;
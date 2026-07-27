const lesson3 = {

  id: "lesson3",

  title: "Relational Operators",

  previousLesson:
    "/lesson/cpp-development/module3/lesson2",

  nextLesson:
    "/lesson/cpp-development/module3/lesson4",


  content: `
# Relational Operators

Programs often need to compare values before making decisions.

Examples:

- Checking whether a user is eligible.
- Comparing marks.
- Validating passwords.
- Checking available inventory.

These comparisons are performed using relational operators.



## What are Relational Operators?

Relational operators compare two values and return a boolean result.

The result can be:

- true
- false



Example:

\`\`\`cpp
int age = 20;

cout << (age >= 18);
\`\`\`

Output:

\`\`\`
1
\`\`\`

The condition is true.



## Relational Operators in C++

C++ provides the following relational operators:

| Operator | Meaning |
|----------|---------|
| == | Equal To |
| != | Not Equal To |
| > | Greater Than |
| < | Less Than |
| >= | Greater Than or Equal To |
| <= | Less Than or Equal To |



## Equal To Operator (==)

The equal operator checks whether two values are the same.

Example:

\`\`\`cpp
10 == 10
\`\`\`

Result:

\`\`\`
true
\`\`\`



## Not Equal Operator (!=)

The not equal operator checks whether values are different.

Example:

\`\`\`cpp
10 != 5
\`\`\`

Result:

\`\`\`
true
\`\`\`



## Greater Than Operator (>)

Checks whether the left value is greater.

Example:

\`\`\`cpp
20 > 10
\`\`\`

Result:

\`\`\`
true
\`\`\`



## Less Than Operator (<)

Checks whether the left value is smaller.

Example:

\`\`\`cpp
5 < 10
\`\`\`

Result:

\`\`\`
true
\`\`\`



## Greater Than or Equal To (>=)

Checks whether a value is greater or equal.

Example:

\`\`\`cpp
marks >= 35
\`\`\`

Used to check passing criteria.



## Less Than or Equal To (<=)

Checks whether a value is smaller or equal.

Example:

\`\`\`cpp
age <= 60
\`\`\`



## Real-World Applications

Relational operators are used in:

- Login systems.
- Examination portals.
- Banking applications.
- Inventory systems.
- Access control systems.



Example:

A result system may use:

\`\`\`cpp
marks >= 35
\`\`\`

to determine whether a candidate passes.



## Importance of Relational Operators

They are the foundation of:

- Decision making.
- Loops.
- Validation.
- Authentication.



## Best Practices

- Use correct comparison operators.
- Avoid confusing = with ==.
- Write readable conditions.
- Use meaningful variables.



## Key Points

- Relational operators compare values.
- They return true or false.
- They are used heavily in decision making.
- They form the base of program logic.



## Lesson Summary

Relational operators allow C++ programs to compare information and respond based on conditions.
`,



  examples: [

    {
      title: "Comparison Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int marks = 80;

    cout << (marks >= 35);

    return 0;
}
`,

      output:
`
1
`,
    },


    {
      title: "Equality Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int password = 1234;

    cout << (password == 1234);

    return 0;
}
`,

      output:
`
1
`,
    },

  ],

};


export default lesson3;
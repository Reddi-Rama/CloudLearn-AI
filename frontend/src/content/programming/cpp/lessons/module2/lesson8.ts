const lesson8 = {

  id: "lesson8",

  title: "Boolean Data Type",

  previousLesson:
    "/lesson/cpp-development/module2/lesson7",

  nextLesson:
    "/lesson/cpp-development/module2/lesson9",


  content: `
# Boolean Data Type

Many programs need to make decisions based on conditions.

Examples:

- User is logged in or not.
- Payment is successful or not.
- File exists or not.
- A condition is true or false.

To represent these situations, C++ provides the bool data type.



## What is bool?

The bool data type stores only two possible values:

- true

- false



Example:

\`\`\`cpp
bool isLoggedIn = true;

bool paymentCompleted = false;
\`\`\`



## Internal Representation

Although developers use true and false, internally C++ stores boolean values as numbers.

true is represented as:

\`\`\`
1
\`\`\`

false is represented as:

\`\`\`
0
\`\`\`



Example:

\`\`\`cpp
bool status = true;

cout << status;
\`\`\`

Output:

\`\`\`
1
\`\`\`



## Importance of Boolean Values

Boolean variables are the foundation of:

- Decision making.
- Loops.
- Conditions.
- Program control flow.



Example:

\`\`\`cpp
bool passwordCorrect = true;

if(passwordCorrect)
{
    cout << "Access Granted";
}
\`\`\`



## Real-World Applications

Boolean values are used in:

- Login systems.
- Payment verification.
- Online examinations.
- Security systems.
- Permission management.



Example:

Online shopping system:

\`\`\`cpp
bool paymentVerified = true;
\`\`\`

The program checks this value before completing an order.



## Naming Boolean Variables

Professional developers use meaningful names for boolean variables.

Common prefixes:

- is
- has
- can
- should



Examples:

\`\`\`
isActive

hasPermission

canVote

shouldRetry
\`\`\`



## Best Practices

- Use meaningful boolean names.
- Use boolean variables for conditions.
- Avoid unclear names.
- Use true and false instead of numeric values.



## Key Points

- bool stores true or false values.
- Boolean values control program decisions.
- true represents 1.
- false represents 0.
- Boolean logic is used throughout software development.



## Lesson Summary

The boolean data type allows C++ programs to represent logical conditions.

It plays an important role in decision making and controlling program execution.
`,


  examples: [

    {
      title: "Boolean Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    bool isOnline = true;

    cout << isOnline;

    return 0;
}
`,

      output:
`
1
`,
    },


    {
      title: "Decision Using Boolean",

      code: `
#include <iostream>

using namespace std;

int main()
{
    bool loginSuccess = true;

    if(loginSuccess)
    {
        cout << "Login Successful";
    }

    return 0;
}
`,

      output:
`
Login Successful
`,
    },

  ],

};


export default lesson8;
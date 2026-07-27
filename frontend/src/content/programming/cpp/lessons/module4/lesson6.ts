const lesson6 = {

  id: "lesson6",

  title: "switch Statement",

  previousLesson:
    "/lesson/cpp-development/module4/lesson5",

  nextLesson:
    "/lesson/cpp-development/module4/lesson7",


  content: `
# switch Statement

Programs often need to select one option from several fixed choices.

Examples:

- Selecting menu options.
- Choosing departments.
- Selecting operations in a calculator.
- ATM menu systems.

Using a long else-if ladder for these situations can make programs difficult to read.

The switch statement provides a cleaner solution.



## What is switch Statement?

The switch statement is a decision-making statement that executes a block of code based on the value of an expression.

It compares the expression value with different cases.



## Syntax

\`\`\`cpp
switch(expression)
{
    case value1:
        statements;
        break;

    case value2:
        statements;
        break;

    default:
        statements;
}
\`\`\`



## Components of switch Statement

## Expression

The value that is compared.

Example:

\`\`\`cpp
switch(choice)
\`\`\`



## case

Represents a possible value.

Example:

\`\`\`cpp
case 1:
\`\`\`



## break

Stops execution of the current case.

Without break, execution continues into the next case.



## default

Executes when no case matches.



## Example

\`\`\`cpp
int choice = 2;

switch(choice)
{
    case 1:
        cout << "C++";
        break;

    case 2:
        cout << "Python";
        break;

    default:
        cout << "Invalid Choice";
}
\`\`\`

Output:

\`\`\`
Python
\`\`\`



## Real-World Applications

switch statement is commonly used in:

- ATM systems.
- Calculator programs.
- Menu-driven applications.
- Management software.
- Game menus.



## switch vs else-if Ladder

switch is preferred when:

- One variable has fixed values.
- Options are known in advance.

else-if is preferred when:

- Conditions involve ranges.
- Complex comparisons are required.



## Advantages

switch statement:

- Improves readability.
- Makes menu programs easier.
- Provides organized decision handling.



## Best Practices

- Always use break unless fall-through is required.
- Provide a default case.
- Keep cases simple.
- Avoid unnecessary nesting.



## Key Points

- switch selects one option from multiple choices.
- case defines possible values.
- break prevents unwanted execution.
- default handles invalid choices.



## Lesson Summary

The switch statement provides an organized way to handle multiple fixed choices and is widely used in real-world C++ applications.
`,


  examples: [

    {
      title: "Menu Selection Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int choice = 2;

    switch(choice)
    {
        case 1:
            cout << "Addition";
            break;

        case 2:
            cout << "Subtraction";
            break;

        case 3:
            cout << "Multiplication";
            break;

        default:
            cout << "Invalid Choice";
    }

    return 0;
}
`,

      output:
`
Subtraction
`,
    },


    {
      title: "Department Selection Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int department = 3;

    switch(department)
    {
        case 1:
            cout << "Computer Science";
            break;

        case 2:
            cout << "Information Technology";
            break;

        case 3:
            cout << "Electronics";
            break;

        default:
            cout << "Invalid Department";
    }

    return 0;
}
`,

      output:
`
Electronics
`,
    },

  ],

};


export default lesson6;
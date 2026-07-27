const lesson7 = {

  id: "lesson7",

  title: "Functions with No Arguments and No Return Value",

  content: `
# Functions with No Arguments and No Return Value

This is the simplest type of function available in C++.

Such functions neither receive information from the caller nor return results back.

Their main purpose is to perform a specific task.


## Syntax

\`\`\`cpp
void functionName()
{
    statements;
}
\`\`\`


## Example

Consider a hospital management system that displays the application banner when the program starts.

\`\`\`cpp
#include<iostream>
using namespace std;

void displayHeader()
{
    cout<<"----------------------------"<<endl;
    cout<<"Hospital Management System"<<endl;
    cout<<"Version 1.0"<<endl;
    cout<<"----------------------------"<<endl;
}

int main()
{
    displayHeader();

    cout<<"System Ready"<<endl;

    return 0;
}
\`\`\`


The function performs its task without requiring any information from the caller.


## Characteristics

Functions with no arguments and no return value:

- Do not accept input.
- Do not return output.
- Perform a predefined task.


## Common Applications

These functions are commonly used for:

- Displaying menus.
- Showing welcome screens.
- Printing reports.
- Initializing resources.
- Logging system events.


## Advantages

They improve:

- Program organization.
- Code readability.
- Reusability.
- Maintainability.


## Limitations

Since these functions cannot receive data or return results, they are suitable only for specific tasks.

For complex calculations, functions with parameters and return values are usually preferred.


## Real World Example

A software application may use such functions for:

- Displaying application headers.
- Showing help messages.
- Printing system information.


Although simple, these functions play an important role in creating structured and organized programs.
`

};

export default lesson7;
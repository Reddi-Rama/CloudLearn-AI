const lesson3 = {

  id: "lesson3",

  title: "Calling a Function",

  content: `
# Calling a Function

Creating a function alone is not enough.

A function must be invoked whenever its functionality is required.

This process is known as function calling.


## What Happens During a Function Call?

When a function call occurs:

- Control transfers from the calling function to the called function.
- The function executes its statements.
- Control returns back to the original location after execution.


## Example

Consider a university result processing system.

\`\`\`cpp
#include<iostream>
using namespace std;

void displayWelcome()
{
    cout<<"University Result Portal"<<endl;
    cout<<"Semester Result Processing Started"<<endl;
}

int main()
{
    displayWelcome();

    cout<<"Processing Student Records..."<<endl;

    return 0;
}
\`\`\`


When the statement:

\`\`\`cpp
displayWelcome();
\`\`\`

executes, the program moves to the displayWelcome() function, executes its code, and then returns back to main().


## Importance of Function Calling

Function calls improve program readability because complex operations can be represented using meaningful names.


Examples:

- calculateSalary()
- generateReport()
- processPayment()
- validateUser()


These names immediately explain the purpose of the operation.


## Real World Applications

Functions are called in almost every software system.

Examples:

- Banking systems call transaction functions.
- E-commerce systems call payment functions.
- Hospital systems call appointment functions.
- Games call rendering and physics functions.


## Best Practice

Use meaningful function names because they make programs easier to understand and maintain.

A well-designed function call makes complex programs look simple and organized.
`

};

export default lesson3;
const lesson11 = {

  id: "lesson11",

  title: "Function Prototypes",

  content: `
# Function Prototypes

As programs become larger, functions are often defined after the main() function for better organization.

However, if the compiler encounters a function call before seeing the actual function definition, it produces an error because it does not know about the function.

Function prototypes solve this problem.


## What is a Function Prototype?

A function prototype informs the compiler about a function before its actual implementation appears.

It provides information about:

- Function name
- Return type
- Number of parameters
- Parameter data types


## Syntax

\`\`\`cpp
returnType functionName(parameters);
\`\`\`


## Example

\`\`\`cpp
#include<iostream>
using namespace std;


double calculateArea(double);


int main()
{
    cout<<calculateArea(5);

    return 0;
}


double calculateArea(double radius)
{
    return 3.14 * radius * radius;
}
\`\`\`


The statement:

\`\`\`cpp
double calculateArea(double);
\`\`\`

is called the function prototype.


## Why Are Function Prototypes Needed?

Without a prototype, the compiler may not recognize a function that is called before its definition.


## Advantages of Function Prototypes

Function prototypes provide:

- Better code organization.
- Support for modular programming.
- Easy management of large projects.
- Reduced compiler errors.
- Support for multi-file applications.


## Function Prototypes in Large Projects

Professional C++ applications usually separate:

Header files:

\`\`\`
.h files
\`\`\`

and implementation files:

\`\`\`
.cpp files
\`\`\`


Header files contain declarations, while source files contain definitions.


## Real World Importance

Large software systems may contain hundreds or thousands of functions.

Function prototypes allow developers to organize these functions efficiently and help multiple developers work on the same project.


Function prototypes are an essential part of professional C++ development.
`

};

export default lesson11;
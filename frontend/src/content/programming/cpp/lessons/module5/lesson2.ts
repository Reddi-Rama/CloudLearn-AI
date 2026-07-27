const lesson2 = {

  id: "lesson2",

  title: "Function Declaration and Definition",

  content: `
# Function Declaration and Definition

Before a function can be used, the compiler must know about its existence.

This information is provided through function declarations and function definitions.


## Function Declaration

A function declaration informs the compiler about:

- Function name
- Return type
- Parameters


Example:

\`\`\`cpp
int add(int, int);
\`\`\`


The above statement tells the compiler that a function named add exists and accepts two integer values.


## Function Definition

The function definition contains the actual implementation of the function.

Example:

\`\`\`cpp
int add(int a, int b)
{
    return a + b;
}
\`\`\`


The definition contains the statements that execute when the function is called.


## Declaration and Definition Difference

Function Declaration:

- Provides information about the function.
- Does not contain implementation.
- Ends with a semicolon.


Function Definition:

- Contains actual code.
- Performs the required operation.
- Does not end with a semicolon after the function body.


## Importance in Large Projects

In professional C++ applications, declarations and definitions are usually separated.

Declarations are placed inside header files:

\`\`\`
function.h
\`\`\`

Definitions are placed inside source files:

\`\`\`
function.cpp
\`\`\`


## Advantages of Separation

Separating declarations and definitions provides:

- Better project organization.
- Faster compilation.
- Easier maintenance.
- Improved modularity.


## Real World Example

Large applications may contain thousands of functions.

Separating function declarations and definitions allows multiple developers to work on different parts of the same project efficiently.


Professional C++ applications almost always follow this approach because it improves scalability and code management.
`

};

export default lesson2;
const lesson5 = {

  id: "lesson5",

  title: "Compilation and Execution Process",

  previousLesson:
    "/lesson/cpp-development/module1/lesson4",

  nextLesson:
    "/lesson/cpp-development/module1/lesson6",


  content: `
# Compilation and Execution Process

Unlike interpreted languages, C++ programs must be compiled before they can run.

The compiler converts human-readable source code into machine-understandable instructions.



## How Does a C++ Program Run?

The complete process contains several stages:

- Writing Source Code

- Preprocessing

- Compilation

- Linking

- Execution



## Step 1: Writing Source Code

Developers write C++ instructions inside a source file.

Example:

\`\`\`
main.cpp
\`\`\`

The .cpp extension represents a C++ source file.



## Step 2: Preprocessing

During preprocessing, the compiler processes instructions such as:

\`\`\`cpp
#include <iostream>
\`\`\`

Header files are included and macros are expanded.



## Step 3: Compilation

The compiler converts source code into object code.

Example:

\`\`\`
g++ main.cpp
\`\`\`

During compilation, the compiler checks for:

- Syntax errors

- Type errors

- Language rule violations



## Step 4: Linking

The linker combines:

- Object files

- Library files

- External references


It creates the final executable program.



## Step 5: Execution

After successful linking, the operating system loads the executable into memory.

Execution starts from:

\`\`\`cpp
int main()
\`\`\`



## Complete Execution Flow

\`\`\`
Source Code

↓

Preprocessor

↓

Compiler

↓

Object Code

↓

Linker

↓

Executable File

↓

Program Execution
\`\`\`



## Why Compilation Is Important

Compilation provides:

- Faster execution

- Performance optimization

- Error detection

- Better program reliability



## Real-World Example

Large software projects may contain:

- Thousands of source files

- Multiple libraries

- Millions of lines of code


The compiler and linker combine all components into a working application.



## Compiler Examples

Popular C++ compilers include:

- GCC

- Clang

- Microsoft Visual C++ Compiler



## Key Points

- C++ uses a compilation process.

- The compiler converts source code into machine code.

- Linking combines different program components.

- Execution begins from the main function.



## Lesson Summary

The compilation and execution process explains how C++ code becomes a running application.

Understanding this process helps developers write better programs and solve errors effectively.
`,


  examples: [

    {
      title: "Compilation Example",

      code:
`
main.cpp

#include <iostream>

using namespace std;

int main()
{
    cout << "Program Compiled Successfully";

    return 0;
}
`,

      output:
`Program Compiled Successfully`,
    },


    {
      title: "Compiler Command",

      code:
`
g++ main.cpp
`,

      output:
`
Executable file created
`,
    },

  ],

};


export default lesson5;
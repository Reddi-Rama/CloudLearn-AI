const lesson4 = {

  id: "lesson4",

  title: "Structure of a C++ Program",

  previousLesson:
    "/lesson/cpp-development/module1/lesson3",

  nextLesson:
    "/lesson/cpp-development/module1/lesson5",


  content: `
# Structure of a C++ Program

Every C++ program follows a specific structure.

Understanding this structure is important because every application, from simple programs to large enterprise systems, follows the basic building blocks provided by C++.



## Basic Structure of a C++ Program

A simple C++ program contains:

- Header Files

- Namespace

- Main Function

- Program Statements

- Return Statement



## Example Program

\`\`\`cpp
#include <iostream>

using namespace std;

int main()
{
    cout << "Welcome to C++";

    return 0;
}
\`\`\`



## Header File

\`\`\`cpp
#include <iostream>
\`\`\`

Header files provide additional functionality to the program.

The iostream header provides input and output operations.

It allows the use of:

- cout

- cin



## Namespace

\`\`\`cpp
using namespace std;
\`\`\`

The namespace avoids writing the complete standard library name repeatedly.

Without namespace:

\`\`\`cpp
std::cout << "Hello";
\`\`\`

With namespace:

\`\`\`cpp
cout << "Hello";
\`\`\`



## Main Function

\`\`\`cpp
int main()
\`\`\`

The main function is the starting point of every C++ program.

Program execution always begins from the main function.



## Output Statement

\`\`\`cpp
cout << "Welcome to C++";
\`\`\`

The cout statement displays output on the screen.



## Return Statement

\`\`\`cpp
return 0;
\`\`\`

It indicates that the program executed successfully.



## Program Execution Flow

A C++ program follows this process:

Source Code

↓

Preprocessing

↓

Compilation

↓

Linking

↓

Execution



## Importance of Understanding Program Structure

Understanding the structure helps developers:

- Write organized programs.

- Debug errors easily.

- Understand compiler processes.

- Build larger applications.



## Key Points

- Every C++ program has a main function.

- Header files provide additional features.

- Namespace simplifies library usage.

- cout is used for output.

- return 0 indicates successful execution.



## Lesson Summary

The structure of a C++ program provides the foundation for writing software applications.

Understanding these basic components is the first step toward becoming a professional C++ developer.
`,


  examples: [

    {
      title: "Basic C++ Program",

      code: `
#include <iostream>

using namespace std;

int main()
{
    cout << "Learning C++";

    return 0;
}
`,

      output:
`Learning C++`,
    },


    {
      title: "Displaying Multiple Messages",

      code: `
#include <iostream>

using namespace std;

int main()
{
    cout << "Welcome";
    cout << " to C++ Programming";

    return 0;
}
`,

      output:
`Welcome to C++ Programming`,
    },

  ],

};


export default lesson4;
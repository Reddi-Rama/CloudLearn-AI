const lesson7 = {

  id: "lesson7",

  title: "Writing Your First C++ Program",

  previousLesson:
    "/lesson/cpp-development/module1/lesson6",

  nextLesson:
    "/lesson/cpp-development/module1/lesson8",


  content: `
# Writing Your First C++ Program

The first program written in almost every programming language is the Hello World program.

Although it is a simple program, it introduces the basic structure and execution flow of C++.



## The First C++ Program

A simple C++ program is:

\`\`\`cpp
#include <iostream>

using namespace std;

int main()
{
    cout << "Hello World";

    return 0;
}
\`\`\`



## Program Output

\`\`\`
Hello World
\`\`\`



## Understanding the Program



## Header File

\`\`\`cpp
#include <iostream>
\`\`\`

The iostream header provides input and output functionality.

It allows the use of:

- cout

- cin



## Namespace

\`\`\`cpp
using namespace std;
\`\`\`

The namespace allows direct access to standard library features.



## Main Function

\`\`\`cpp
int main()
\`\`\`

The main function is the entry point of every C++ program.

Program execution always begins from this function.



## Output Statement

\`\`\`cpp
cout << "Hello World";
\`\`\`

The cout object displays information on the screen.



## Return Statement

\`\`\`cpp
return 0;
\`\`\`

It indicates successful completion of the program.



## Why Is Hello World Important?

This simple program introduces:

- Header files

- Namespaces

- Functions

- Output statements

- Program execution



## Best Practices

- Maintain proper indentation.

- Use meaningful formatting.

- Write clean code from the beginning.

- Understand every line of the program.



## Key Points

- Every C++ program starts from main function.

- cout is used for displaying output.

- Header files provide additional features.

- return 0 indicates successful execution.



## Lesson Summary

Writing the first C++ program is the beginning of programming with C++.

Understanding this basic structure helps developers create more complex applications in the future.
`,



  examples: [

    {
      title: "Hello World Program",

      code: `
#include <iostream>

using namespace std;

int main()
{
    cout << "Hello World";

    return 0;
}
`,

      output:
`
Hello World
`,
    },


    {
      title: "Displaying Multiple Messages",

      code: `
#include <iostream>

using namespace std;

int main()
{
    cout << "Welcome to C++";
    cout << " Programming";

    return 0;
}
`,

      output:
`
Welcome to C++ Programming
`,
    },

  ],

};


export default lesson7;
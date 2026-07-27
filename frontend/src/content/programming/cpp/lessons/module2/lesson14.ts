const lesson14 = {

  id: "lesson14",

  title: "Input and Output using cin and cout",

  previousLesson:
    "/lesson/cpp-development/module2/lesson13",

  nextLesson:
    "/lesson/cpp-development/module2/lesson15",


  content: `
# Input and Output using cin and cout

Programs become useful when they can communicate with users.

A calculator needs numbers from users, a banking application needs account information, and an online system needs user details.

C++ provides input and output operations to allow communication between the user and the program.



## The iostream Header File

C++ provides input and output functionality through the iostream header file.

Example:

\`\`\`cpp
#include <iostream>
\`\`\`

It provides two important objects:

- cout for output.
- cin for input.



## Output using cout

The cout object is used to display information on the screen.

Example:

\`\`\`cpp
cout << "Welcome to C++";
\`\`\`

Output:

\`\`\`
Welcome to C++
\`\`\`



## Input using cin

The cin object is used to receive input from the user.

Example:

\`\`\`cpp
int age;

cin >> age;
\`\`\`

If the user enters:

\`\`\`
20
\`\`\`

The value is stored inside the variable age.



## Insertion Operator

The operator:

\`\`\`cpp
<<
\`\`\`

is called the insertion operator.

It sends data to the output stream.

Example:

\`\`\`cpp
cout << "Hello";
\`\`\`



## Extraction Operator

The operator:

\`\`\`cpp
>>
\`\`\`

is called the extraction operator.

It receives data from the input stream.

Example:

\`\`\`cpp
cin >> number;
\`\`\`



## Combining cin and cout

Input and output operations can be combined to create interactive programs.

Example:

\`\`\`cpp
int age;

cout << "Enter age: ";

cin >> age;

cout << "Your age is " << age;
\`\`\`



## Real-World Applications

cin and cout are used in:

- Banking systems.
- Registration forms.
- Billing applications.
- Student management systems.
- Games.



## Best Practices

- Display clear input messages.
- Use meaningful variable names.
- Validate user input when required.
- Format output properly.



## Key Points

- cout displays output.
- cin accepts input.
- << is the insertion operator.
- >> is the extraction operator.
- iostream provides input and output features.



## Lesson Summary

Input and output operations make C++ programs interactive.

Using cin and cout, programs can communicate with users and process real-world information.
`,


  examples: [

    {
      title: "Taking User Input",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int age;

    cout << "Enter age: ";

    cin >> age;

    cout << age;

    return 0;
}
`,

      output:
`
Enter age: 20

20
`,
    },


    {
      title: "Simple Addition Program",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int a, b;

    cin >> a >> b;

    cout << a + b;

    return 0;
}
`,

      output:
`
10

20

30
`,
    },

  ],

};


export default lesson14;
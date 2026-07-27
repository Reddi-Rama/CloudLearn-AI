const lesson9 = {

  id: "lesson9",

  title: "String Operations in C++",

  content: `
# String Operations in C++


## Introduction

Strings are not only used for storing text but also for performing various operations.

Applications frequently need to:

- Combine text.
- Find length.
- Compare values.
- Extract information.
- Modify text.


C++ provides built-in string operations to handle these tasks efficiently.


## Finding String Length

The length of a string can be found using the length() function.


Example:

\`\`\`cpp
#include<iostream>
#include<string>

using namespace std;

int main()
{
    string name = "Programming";

    cout<<name.length();

    return 0;
}
\`\`\`


Output:

\`\`\`
11
\`\`\`


## String Concatenation

Concatenation means joining two or more strings together.

Example:

\`\`\`cpp
string firstName = "John";

string lastName = "Smith";

string fullName = firstName + lastName;
\`\`\`


Output:

\`\`\`
JohnSmith
\`\`\`


Spaces can also be added:

\`\`\`cpp
string fullName =
firstName + " " + lastName;
\`\`\`


Result:

\`\`\`
John Smith
\`\`\`


## Comparing Strings

Strings can be compared using comparison operators.


Example:

\`\`\`cpp
string password = "abc123";

if(password == "abc123")
{
    cout<<"Login Successful";
}
\`\`\`


This comparison is commonly used in authentication systems.


## Accessing Characters

Individual characters can be accessed using indexes.

Example:

\`\`\`cpp
string word = "Hello";

cout<<word[0];
\`\`\`


Output:

\`\`\`
H
\`\`\`


## Modifying Characters

Characters can be changed using indexes.

Example:

\`\`\`cpp
string name = "Hello";

name[0] = 'Y';

cout<<name;
\`\`\`


Output:

\`\`\`
Yello
\`\`\`


## Common String Functions

Some commonly used string functions are:

- length() - Finds string length.
- append() - Adds another string.
- substr() - Extracts part of a string.
- find() - Searches for text.
- replace() - Replaces characters.


## Real World Applications

String operations are used in:

- Search engines.
- Login systems.
- Text editors.
- Chat applications.
- Data processing systems.


## Best Practices

While working with strings:

- Validate user input.
- Use meaningful variable names.
- Handle empty strings properly.
- Avoid unnecessary string copies.


String operations are essential for building interactive and user-friendly applications.
`

};

export default lesson9;
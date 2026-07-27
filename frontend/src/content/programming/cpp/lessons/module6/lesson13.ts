const lesson13 = {

  id: "lesson13",

  title: "String Functions in C++",

  content: `
# String Functions in C++


## Introduction

Strings are used to store and manipulate textual information.

C++ provides many built-in functions that make string processing easier and more efficient.


These functions are available through the string library.


## Including String Library

To use string functions:

\`\`\`cpp
#include<string>
\`\`\`


Example:

\`\`\`cpp
#include<iostream>
#include<string>

using namespace std;
\`\`\`


## length() Function

The length() function returns the number of characters present in a string.


Example:

\`\`\`cpp
string name = "Programming";

cout<<name.length();
\`\`\`


Output:

\`\`\`
11
\`\`\`


## append() Function

The append() function adds another string at the end of an existing string.


Example:

\`\`\`cpp
string first = "Cloud";

first.append("Learn");

cout<<first;
\`\`\`


Output:

\`\`\`
CloudLearn
\`\`\`


## substr() Function

The substr() function extracts a part of a string.


Example:

\`\`\`cpp
string text = "Programming";

cout<<text.substr(0,7);
\`\`\`


Output:

\`\`\`
Program
\`\`\`


## find() Function

The find() function searches for a particular character or word inside a string.


Example:

\`\`\`cpp
string text = "C++ Programming";

cout<<text.find("Programming");
\`\`\`


Output:

\`\`\`
4
\`\`\`


## replace() Function

The replace() function replaces a part of a string with another value.


Example:

\`\`\`cpp
string text = "Hello World";

text.replace(0,5,"Hi");

cout<<text;
\`\`\`


Output:

\`\`\`
Hi World
\`\`\`


## Common String Functions

Important string functions:

- length() - Finds size of string.
- append() - Adds another string.
- substr() - Extracts part of text.
- find() - Searches text.
- replace() - Modifies string.


## Real World Applications

String functions are used in:

- Search engines.
- Text editors.
- Login systems.
- Chat applications.
- Data processing applications.


## Best Practices

While using string functions:

- Check string length before accessing indexes.
- Handle empty strings properly.
- Use meaningful variable names.
- Validate user input.


String functions make text processing simple and powerful in C++ applications.
`

};

export default lesson13;
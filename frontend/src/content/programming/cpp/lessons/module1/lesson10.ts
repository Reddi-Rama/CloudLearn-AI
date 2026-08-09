const lesson10 = {

  id: "lesson10",

  title: "Keywords and Identifiers",

  previousLesson:
    "/lesson/cpp-development/module1/lesson9",

  nextLesson:
    "/lesson/cpp-development/module1/lesson11",


  content: `
# Keywords and Identifiers

Every C++ program uses special words and names to represent different parts of the program.

Keywords and identifiers are important building blocks of C++ programming.



## Keywords in C++

Keywords are reserved words that have predefined meanings in the C++ language.

The compiler already understands the purpose of these words.

Keywords cannot be used as names for:

- Variables

- Functions

- Classes

- Objects



## Examples of C++ Keywords

Some commonly used keywords are:

- int

- float

- double

- char

- class

- return

- if

- else

- while

- for

- public

- private



Example:

int age = 20;

Here, int is a keyword used to define an integer variable.



## Invalid Use of Keywords

Keywords cannot be used as identifiers.

Incorrect example:

int class = 10;


The compiler generates an error because class is a reserved keyword.



## Identifiers in C++

Identifiers are names created by programmers to identify different program elements.

Identifiers are used for:

- Variables

- Functions

- Classes

- Objects

- Arrays



Examples:

studentName

calculateTotal

employeeSalary




## Rules for Identifiers

C++ follows specific rules for creating identifiers.

### Rule 1: Must Begin With Letter or Underscore

Valid:

age

_student

totalMarks


Invalid:

2value



### Rule 2: Cannot Contain Spaces

Invalid:

student name

Valid:

studentName



### Rule 3: Cannot Use Keywords

Invalid:

int class;



### Rule 4: Case Sensitive

C++ treats uppercase and lowercase letters differently.

Example:

Age

age

Both are different identifiers.



## Naming Best Practices

Good identifiers make programs easier to understand.

Prefer:

- Meaningful names.

- Clear descriptions.

- Consistent naming style.



Example:

Good:

employeeSalary

Poor:

es



## Real-World Example

Consider a banking application:

double accountBalance;

string customerName;

int accountNumber;

These identifiers clearly describe their purpose.



## Key Points

- Keywords are reserved words in C++.

- Identifiers are programmer-defined names.

- Keywords cannot be used as identifiers.

- Identifiers should be meaningful.

- C++ identifiers are case-sensitive.



## Lesson Summary

Keywords and identifiers help programmers communicate with the compiler.

Understanding their rules helps developers write clean, readable, and error-free C++ programs.
`,



  examples: [

    {
      title: "Using Keywords and Identifiers",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int studentAge = 20;

    cout << studentAge;

    return 0;
}
`,

      output:
`
20
`,
    },


    {
      title: "Multiple Identifiers",

      code: `
#include <iostream>

using namespace std;

int main()
{
    string name = "Alex";

    int marks = 90;

    cout << name << endl;
    cout << marks;

    return 0;
}
`,

      output:
`
Alex

90
`,
    },

  ],

};


export default lesson10;
const lesson3 = {

  id: "lesson3",

  title: "Rules for Naming Variables",

  previousLesson:
    "/lesson/cpp-development/module2/lesson2",

  nextLesson:
    "/lesson/cpp-development/module2/lesson4",


  content: `
# Rules for Naming Variables

Choosing proper variable names is an important part of writing clean and understandable programs.

A good variable name should clearly describe the purpose of the stored information.



## What is a Variable Name?

A variable name is the identifier used by programmers to access a value stored in memory.

Example:

\`\`\`cpp
int studentAge = 20;
\`\`\`

Here:

\`\`\`
studentAge
\`\`\`

is the variable name.



## Rules for Variable Names

C++ follows specific rules when creating variable names.



## Rule 1: Can Contain Letters

Variable names can contain alphabetic characters.

Example:

\`\`\`cpp
int marks;
\`\`\`



## Rule 2: Can Contain Digits

Numbers can be included in variable names, but they cannot be the first character.

Valid:

\`\`\`
student1
marks2
\`\`\`



Invalid:

\`\`\`
1student
\`\`\`



## Rule 3: Cannot Contain Spaces

Spaces are not allowed in variable names.

Invalid:

\`\`\`
student name
\`\`\`

Valid:

\`\`\`
studentName
\`\`\`



## Rule 4: Cannot Start With a Digit

A variable name must begin with a letter or underscore.

Invalid:

\`\`\`
2marks
\`\`\`

Valid:

\`\`\`
marks2
\`\`\`



## Rule 5: Cannot Use Keywords

Reserved keywords cannot be used as variable names.

Invalid:

\`\`\`cpp
int class = 10;
\`\`\`

Because class is a C++ keyword.



## Case Sensitivity

C++ is case-sensitive.

Example:

\`\`\`cpp
int marks = 50;

int Marks = 80;
\`\`\`

These are considered two different variables.



## Naming Conventions

Professional developers follow naming styles to improve readability.



## Camel Case

The first word starts with lowercase and following words start with uppercase.

Examples:

\`\`\`
studentName

accountBalance

courseDuration
\`\`\`



## Snake Case

Words are separated using underscores.

Examples:

\`\`\`
student_name

account_balance

course_duration
\`\`\`



## Good Variable Names

Examples:

\`\`\`
employeeSalary

totalMarks

productPrice
\`\`\`



## Poor Variable Names

Examples:

\`\`\`
x

a

temp1
\`\`\`

These names do not clearly describe their purpose.



## Best Practices

- Use meaningful names.
- Avoid unnecessary abbreviations.
- Follow one naming style.
- Keep names readable.
- Use names that describe the data.



## Key Points

- Variable names should be meaningful.
- C++ is case-sensitive.
- Keywords cannot be used as names.
- Spaces are not allowed.
- Good naming improves readability.



## Lesson Summary

Proper variable naming is an important programming skill.

Good variable names make programs easier to understand, maintain, and collaborate on.
`,


  examples: [

    {
      title: "Valid Variable Names",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int studentAge = 20;

    float accountBalance = 5000.50;

    cout << studentAge << endl;
    cout << accountBalance;

    return 0;
}
`,

      output:
`
20

5000.5
`,
    },


    {
      title: "Case Sensitivity Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int marks = 50;

    int Marks = 80;

    cout << marks << endl;
    cout << Marks;

    return 0;
}
`,

      output:
`
50

80
`,
    },

  ],

};


export default lesson3;
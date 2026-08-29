const lesson10 = {
  id: "lesson10",

  title: "Keywords and Identifiers",

  content: `

# Lesson 10: Keywords and Identifiers

## Introduction

When writing a C program, we use different types of words, names, numbers, and symbols.

Consider the statement:

\`\`\`c
int marks = 90;
\`\`\`

Here, \`int\` and \`marks\` have different roles.

\`\`\`text
int
↓
Keyword

marks
↓
Identifier
\`\`\`

**Keywords** are reserved words that already have a specific meaning in C, while **identifiers** are names given by the programmer to program elements such as variables and functions.

Understanding the difference between them is important because C follows specific rules for naming identifiers.

# 1. What Are Keywords?

Keywords are words that have a predefined meaning in the C language.

The compiler recognizes these words as part of the language syntax.

For example:

\`\`\`c
int number;
\`\`\`

Here:

\`\`\`text
int
\`\`\`

is a keyword.

It tells the compiler that \`number\` is an integer.

Since \`int\` already has a special meaning, it cannot normally be used as the name of a variable.

# 2. Common C Keywords

Some commonly used C keywords are:

\`\`\`text
auto
break
case
char
const
continue
default
do
double
else
enum
extern
float
for
goto
if
inline
int
long
register
restrict
return
short
signed
sizeof
static
struct
switch
typedef
union
unsigned
void
volatile
while
\`\`\`

The exact set of keywords depends on the C standard being used.

You will encounter these keywords throughout the course.

For example:

\`\`\`c
int age;
\`\`\`

uses \`int\`.

\`\`\`c
if (age >= 18)
\`\`\`

uses \`if\`.

\`\`\`c
return 0;
\`\`\`

uses \`return\`.

# 3. Why Are Keywords Reserved?

Consider:

\`\`\`c
int number = 10;
\`\`\`

The compiler understands:

\`\`\`text
int
↓
Keyword

number
↓
Identifier
\`\`\`

If a programmer could use \`int\` as an ordinary variable name, the compiler would have difficulty determining whether \`int\` was being used as the language keyword or as a programmer-defined name.

Therefore, keywords are reserved.

This is invalid:

\`\`\`c
int int = 10;
\`\`\`

because \`int\` is already a keyword.

# Identifiers

## 4. What Is an Identifier?

An **identifier** is a name given to a program element.

Identifiers can be used for:

- Variables
- Functions
- Arrays
- Structures
- Enumerations
- Other declared entities

For example:

\`\`\`c
int age;
\`\`\`

Here:

\`\`\`text
int
↓
Keyword

age
↓
Identifier
\`\`\`

The programmer selected \`age\` as the name of the variable.

# 5. Examples of Identifiers

Consider:

\`\`\`c
int age;
float salary;
char grade;
\`\`\`

The identifiers are:

\`\`\`text
age
salary
grade
\`\`\`

Another example:

\`\`\`c
int calculateTotal(int price, int tax)
{
    int total = price + tax;

    return total;
}
\`\`\`

Identifiers in this program include:

\`\`\`text
calculateTotal
price
tax
total
\`\`\`

Function names are also identifiers.

# 6. Rules for Naming Identifiers

C has specific rules for identifiers.

An identifier can contain:

- Uppercase letters
- Lowercase letters
- Digits
- Underscore \`_\`

For example:

\`\`\`c
student
student1
total_marks
number2
\`\`\`

are valid identifiers.

# 7. An Identifier Cannot Start With a Digit

A digit can appear inside an identifier, but it cannot be the first character.

This is invalid:

\`\`\`c
int 2number;
\`\`\`

because the identifier starts with \`2\`.

This is valid:

\`\`\`c
int number2;
\`\`\`

Another valid example is:

\`\`\`c
int student2026;
\`\`\`

# 8. Underscore Can Be Used

The underscore character is allowed in identifiers.

For example:

\`\`\`c
int total_marks;
int student_count;
int maximum_value;
\`\`\`

This is useful when an identifier contains multiple words.

Instead of:

\`\`\`text
student count
\`\`\`

which is invalid because it contains a space, we can write:

\`\`\`text
student_count
\`\`\`

# 9. Spaces Are Not Allowed

An identifier cannot contain spaces.

This is invalid:

\`\`\`c
int student marks;
\`\`\`

The compiler treats \`student\` and \`marks\` as separate tokens.

Instead, use:

\`\`\`c
int student_marks;
\`\`\`

or:

\`\`\`c
int studentMarks;
\`\`\`

Both are valid identifiers.

# 10. C Is Case-Sensitive

C distinguishes between uppercase and lowercase letters.

Therefore:

\`\`\`text
marks
Marks
MARKS
\`\`\`

are three different identifiers.

For example:

\`\`\`c
int marks = 90;
int Marks = 80;
\`\`\`

These are technically different variables.

Although this is valid, using names that differ only by capitalization can make a program confusing.

# 11. Keywords Cannot Be Used as Identifiers

A keyword cannot normally be used as an identifier.

For example:

\`\`\`c
int return = 10;
\`\`\`

is invalid because \`return\` is a keyword.

Similarly:

\`\`\`c
int while = 5;
\`\`\`

is invalid because \`while\` is a keyword.

Instead, use meaningful names:

\`\`\`c
int result = 10;
int count = 5;
\`\`\`

# 12. Meaningful Identifier Names

Identifiers should describe what they represent.

Compare:

\`\`\`c
int x;
\`\`\`

with:

\`\`\`c
int student_count;
\`\`\`

The second name gives the reader useful information immediately.

For example:

\`\`\`c
float average_marks;
int total_students;
int maximum_marks;
\`\`\`

are easier to understand.

Meaningful names become especially important when programs become larger.

# 13. Function Names Are Also Identifiers

Identifiers are not limited to variables.

Function names are identifiers too.

For example:

\`\`\`c
void displayResult(void)
{
    printf("Result");
}
\`\`\`

Here:

\`\`\`text
displayResult
\`\`\`

is an identifier.

Compare this with:

\`\`\`c
void f(void)
{
    printf("Result");
}
\`\`\`

Both may be valid, but \`displayResult\` clearly communicates the purpose of the function.

# 14. Common Naming Styles

There are different naming styles programmers commonly use.

### Snake Case

\`\`\`c
student_name
total_marks
average_salary
\`\`\`

### Camel Case

\`\`\`c
studentName
totalMarks
averageSalary
\`\`\`

C does not force you to use one particular naming style.

The important thing is to choose a consistent style and use meaningful names.

# 15. Identifier Length

Identifiers should be descriptive without becoming unnecessarily long.

Good:

\`\`\`c
int total_marks;
\`\`\`

Too vague:

\`\`\`c
int x;
\`\`\`

when the variable represents total marks.

At the same time, unnecessarily long names can make code difficult to read.

A good identifier should be:

\`\`\`text
Clear
Meaningful
Readable
Reasonably concise
\`\`\`

# 16. Keywords vs Identifiers

Consider:

\`\`\`c
int total = 100;
\`\`\`

We can classify the different parts:

\`\`\`text
int
↓
Keyword

total
↓
Identifier

=
↓
Operator

100
↓
Integer constant

;
↓
Punctuator
\`\`\`

The difference can be summarized as:

| Keywords | Identifiers |
| --- | --- |
| Defined by the C language | Chosen by the programmer |
| Reserved words | Programmer-defined names |
| Have predefined meanings | Name program elements |
| Cannot normally be reused as names | Must follow identifier rules |
| Example: \`int\` | Example: \`total\` |

# 17. Identifiers in a Complete Program

Consider:

\`\`\`c
#include <stdio.h>

int calculateTotal(int price, int tax)
{
    int total = price + tax;

    return total;
}

int main(void)
{
    int price = 100;
    int tax = 10;

    int result = calculateTotal(price, tax);

    printf("%d\\n", result);

    return 0;
}
\`\`\`

### Keywords

Some keywords in this program are:

\`\`\`text
int
return
\`\`\`

### Identifiers

Some identifiers are:

\`\`\`text
calculateTotal
price
tax
total
main
result
printf
\`\`\`

The compiler uses the rules of C to determine the role of each token.

# 18. Underscore-Prefixed Identifiers

C implementations and the standard library reserve certain names, especially some identifiers beginning with underscores.

As a general programming habit, avoid creating ordinary application identifiers such as:

\`\`\`c
__internal
_Internal
\`\`\`

unless you specifically understand the relevant naming rules.

This reduces the possibility of conflicts with names used by the compiler or standard library implementation.

# 19. Keywords, Identifiers and Tokens

This lesson connects directly with the previous lesson on tokens.

Remember:

\`\`\`text
Characters
    ↓
Tokens
    ↓
Keywords / Identifiers / Constants / Operators / Punctuators
    ↓
Expressions and Statements
    ↓
Complete Program
\`\`\`

For example:

\`\`\`c
unsigned int student_count = 50;
\`\`\`

contains:

\`\`\`text
unsigned       → Keyword
int            → Keyword
student_count  → Identifier
=              → Operator
50             → Integer constant
;              → Punctuator
\`\`\`

# 20. Practical Example

Consider:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int first_number = 10;
    int second_number = 20;

    int total = first_number + second_number;

    printf("Total = %d\\n", total);

    return 0;
}
\`\`\`

### Keywords

\`\`\`text
int
return
\`\`\`

### Identifiers

\`\`\`text
main
first_number
second_number
total
printf
\`\`\`

### Constants

\`\`\`text
10
20
\`\`\`

### Operators

\`\`\`text
=
+
\`\`\`

### Punctuators

\`\`\`text
(
)
{
}
;
\`\`\`

This example shows how different types of tokens work together to form a valid C program.

# Common Beginner Mistakes

## Mistake 1 — Starting With a Number

Incorrect:

\`\`\`c
int 1value;
\`\`\`

Correct:

\`\`\`c
int value1;
\`\`\`

## Mistake 2 — Using a Keyword as a Name

Incorrect:

\`\`\`c
int return;
\`\`\`

Correct:

\`\`\`c
int result;
\`\`\`

## Mistake 3 — Using Spaces

Incorrect:

\`\`\`c
int total marks;
\`\`\`

Correct:

\`\`\`c
int total_marks;
\`\`\`

## Mistake 4 — Ignoring Case

\`\`\`c
int Total = 100;

printf("%d", total);
\`\`\`

\`Total\` and \`total\` are different identifiers.

The capitalization must match.

## Mistake 5 — Using Unclear Names

Instead of:

\`\`\`c
int a;
int b;
int c;
\`\`\`

when the variables represent meaningful information, prefer:

\`\`\`c
int first_number;
int second_number;
int total;
\`\`\`

This makes the program easier to understand.

# Lesson Summary

In this lesson, you learned that:

- **Keywords** are reserved words defined by the C language.
- **Identifiers** are names selected by the programmer.
- Identifiers can contain letters, digits, and underscores.
- An identifier cannot begin with a digit.
- Spaces cannot be used inside identifiers.
- C identifiers are case-sensitive.
- Keywords cannot normally be used as identifiers.
- Function names and variable names are identifiers.
- Meaningful names improve readability.
- Consistent naming conventions make larger programs easier to maintain.
- Some underscore-prefixed names are reserved for the implementation.

The key difference to remember is:

\`\`\`text
Keyword
   ↓
Defined by C

Identifier
   ↓
Defined by the Programmer
\`\`\`

# Module 1 Progress

\`\`\`text
✓ Lesson 1 — Introduction to C Programming
✓ Lesson 2 — History of C
✓ Lesson 3 — Features of C
✓ Lesson 4 — C Program Structure
✓ Lesson 5 — Compilation Process
✓ Lesson 6 — Compiler and IDE Setup
✓ Lesson 7 — First C Program
✓ Lesson 8 — main() Function
✓ Lesson 9 — Comments
✓ Lesson 10 — Keywords and Identifiers
→ Lesson 11 — Character Set
  Lesson 12 — Tokens in C
  Lesson 13 — Syntax Rules
  Lesson 14 — Command Line Compilation
  Lesson 15 — Mini Project — Simple Calculator
\`\`\`

# Lesson 10 Complete

You are now ready for **Lesson 11 — Character Set**.

`,
};

export default lesson10;
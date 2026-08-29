const lesson6 = {
  id: "lesson6",

  title: "Literals",

  content: `

# Lesson 6: Literals

## Introduction

In C programming, a program contains many values that are written directly in the source code.

For example:

\`\`\`c
int age = 20;
float temperature = 36.5f;
char grade = 'A';
\`\`\`

The values:

\`\`\`text
20
36.5f
'A'
\`\`\`

are written directly in the program.

These are called literals.

A literal is a fixed value written directly in C source code.

---

# 1. What Is a Literal?

A literal is a value that appears directly in the source code and represents a specific value.

For example:

\`\`\`c
int number = 100;
\`\`\`

Here:

\`\`\`text
number
↓
Variable

100
↓
Integer literal
\`\`\`

The literal 100 directly represents the value one hundred.

Other examples include:

\`\`\`text
25
3.14
'A'
"Hello"
\`\`\`

Each represents a particular kind of value.

---

# 2. Types of Literals

Common literal categories in C include:

\`\`\`text
Integer literals
Floating-point literals
Character constants
String literals
\`\`\`

We will examine each one separately.

---

# 3. Integer Literals

An integer literal represents a whole-number value.

Examples:

\`\`\`text
10
25
100
500
-20
\`\`\`

For example:

\`\`\`c
int age = 20;
\`\`\`

Here:

\`\`\`text
20
↓
Integer literal
\`\`\`

Integer literals can be written using different number systems.

---

# 4. Decimal Integer Literals

The most common integer literals are written in decimal notation.

Examples:

\`\`\`c
int a = 10;
int b = 25;
int c = 100;
\`\`\`

These values use base 10.

The digits used are:

\`\`\`text
0 1 2 3 4 5 6 7 8 9
\`\`\`

---

# 5. Octal Integer Literals

An integer literal beginning with 0 can represent an octal value.

For example:

\`\`\`c
int number = 012;
\`\`\`

The value 012 is interpreted as octal, not decimal.

Octal uses:

\`\`\`text
0 1 2 3 4 5 6 7
\`\`\`

For example:

\`\`\`text
012 (octal) = 10 (decimal)
\`\`\`

Because of this, leading zeroes should be used carefully.

---

# 6. Hexadecimal Integer Literals

Hexadecimal literals begin with:

\`\`\`text
0x
\`\`\`

or:

\`\`\`text
0X
\`\`\`

For example:

\`\`\`c
int number = 0x10;
\`\`\`

Hexadecimal uses:

\`\`\`text
0 1 2 3 4 5 6 7 8 9
A B C D E F
\`\`\`

For example:

\`\`\`text
0x10 = 16 in decimal
\`\`\`

Hexadecimal notation is commonly used when working with memory addresses, bit patterns, and low-level programming.

---

# 7. Binary Integer Literals

Modern C standards can support binary integer constants using the 0b or 0B prefix where the implementation supports the corresponding language standard.

For example:

\`\`\`c
int number = 0b1010;
\`\`\`

represents:

\`\`\`text
10
\`\`\`

in decimal.

Binary notation is particularly useful when discussing bitwise operations.

---

# 8. Integer Suffixes

Integer literals can have suffixes that specify their type.

For example:

\`\`\`c
long number = 100L;
unsigned int count = 100U;
unsigned long value = 100UL;
long long big = 100LL;
\`\`\`

Common suffixes include:

\`\`\`text
U → unsigned
L → long
LL → long long
\`\`\`

They can be combined where appropriate.

---

# 9. Floating-Point Literals

Floating-point literals represent values that may contain a fractional part.

Examples:

\`\`\`text
3.14
10.5
0.25
99.99
\`\`\`

For example:

\`\`\`c
double price = 99.99;
\`\`\`

Here:

\`\`\`text
99.99
↓
Floating-point literal
\`\`\`

---

# 10. float Literal

A floating-point literal without a suffix normally has type double.

For example:

\`\`\`c
double value = 3.14;
\`\`\`

If you want the literal to have type float, use the f or F suffix:

\`\`\`c
float value = 3.14f;
\`\`\`

For example:

\`\`\`c
float temperature = 36.5f;
\`\`\`

---

# 11. long double Literals

The suffix:

\`\`\`text
L
\`\`\`

can be used for a long double floating constant.

For example:

\`\`\`c
long double value = 3.141592653589793238L;
\`\`\`

The actual precision provided by long double depends on the implementation.

---

# 12. Scientific Notation

C allows floating-point literals to be written using scientific notation.

For example:

\`\`\`c
double value = 1.5e3;
\`\`\`

This means:

\`\`\`text
1.5 × 10³
\`\`\`

which is:

\`\`\`text
1500
\`\`\`

Another example:

\`\`\`c
double value = 2.5e-2;
\`\`\`

which represents:

\`\`\`text
0.025
\`\`\`

Scientific notation is useful for very large or very small values.

---

# 13. Character Constants

A character constant represents a single character and is written using single quotation marks.

For example:

\`\`\`c
char grade = 'A';
\`\`\`

Here:

\`\`\`text
'A'
↓
Character constant
\`\`\`

Other examples:

\`\`\`c
char letter = 'B';
char symbol = '#';
char digit = '7';
\`\`\`

---

# 14. Escape Sequences

C provides escape sequences for special characters.

For example:

\`\`\`text
\\n
\\t
\\\\
\\'
\\"
\\0
\`\`\`

Some common meanings are:

\`\`\`text
\\n    Newline
\\t    Horizontal tab
\\\\    Backslash
\\'    Single quotation mark
\\"    Double quotation mark
\\0    Null character
\`\`\`

Example:

\`\`\`c
printf("Hello\\nWorld");
\`\`\`

The \\n moves the output to the next line.

---

# 15. String Literals

A string literal is a sequence of characters enclosed in double quotation marks.

Example:

\`\`\`c
printf("Hello");
\`\`\`

Here:

\`\`\`text
"Hello"
↓
String literal
\`\`\`

Another example:

\`\`\`c
char name[] = "Ravi";
\`\`\`

The string is represented as characters followed by a terminating null character:

\`\`\`text
'R' 'a' 'v' 'i' '\\0'
\`\`\`

C does not have a separate built-in string primitive type.

Strings are represented using arrays of characters.

---

# 16. Difference Between Character and String

This is an important distinction.

Character:

\`\`\`text
'A'
\`\`\`

String:

\`\`\`text
"A"
\`\`\`

The first represents a character constant.

The second is a string literal containing the character A followed by the terminating null character when stored as an array.

For example:

\`\`\`c
char grade = 'A';
char name[] = "A";
\`\`\`

These are different declarations.

---

# 17. Boolean Values

With:

\`\`\`c
#include <stdbool.h>
\`\`\`

C provides:

\`\`\`text
true
false
\`\`\`

For example:

\`\`\`c
bool passed = true;
\`\`\`

Here:

\`\`\`text
true
↓
Macro representing a Boolean value
\`\`\`

Boolean values are especially useful for conditions and logical operations.

---

# 18. Constants vs Literals

A literal is a value written directly in the source code.

For example:

\`\`\`c
int age = 20;
\`\`\`

Here:

\`\`\`text
20
↓
Literal
\`\`\`

A constant object is different:

\`\`\`c
const int MAX_AGE = 100;
\`\`\`

Here:

\`\`\`text
MAX_AGE
↓
const-qualified object

100
↓
Integer literal used to initialize it
\`\`\`

So a literal and a const object are not the same concept.

---

# 19. Literal Examples

Consider:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 20;
    float temperature = 36.5f;
    double price = 99.99;
    char grade = 'A';

    printf("Age = %d\\n", age);
    printf("Temperature = %.1f\\n", temperature);
    printf("Price = %.2f\\n", price);
    printf("Grade = %c\\n", grade);

    return 0;
}
\`\`\`

The literals include:

\`\`\`text
20
36.5f
99.99
'A'
"Age = %d\\n"
"Temperature = %.1f\\n"
"Price = %.2f\\n"
"Grade = %c\\n"
\`\`\`

Each literal has its own type and representation.

---

# 20. Why Literals Matter

Literals are used throughout C programs.

For example:

\`\`\`c
int count = 10;
\`\`\`

uses an integer literal.

\`\`\`c
double rate = 0.18;
\`\`\`

uses a floating-point literal.

\`\`\`c
char grade = 'A';
\`\`\`

uses a character constant.

\`\`\`c
printf("Passed");
\`\`\`

uses a string literal.

Without literals, programs would have to obtain every value from variables, input, files, or other sources.

---

# Common Beginner Mistakes

## Mistake 1 — Using Double Quotes for a Character

Incorrect:

\`\`\`c
char grade = "A";
\`\`\`

Correct:

\`\`\`c
char grade = 'A';
\`\`\`

---

## Mistake 2 — Using Single Quotes for a String

Incorrect:

\`\`\`c
printf('Hello');
\`\`\`

Correct:

\`\`\`c
printf("Hello");
\`\`\`

---

## Mistake 3 — Forgetting the f Suffix

Remember:

\`\`\`c
float value = 3.14f;
\`\`\`

The unsuffixed form:

\`\`\`text
3.14
\`\`\`

has type double.

---

## Mistake 4 — Confusing Number Systems

For example:

\`\`\`c
int a = 10;
int b = 010;
\`\`\`

These are not the same value.

\`\`\`text
10  → decimal 10
010 → octal 8
\`\`\`

---

# Lesson Summary

In this lesson, you learned:

- A literal is a fixed value written directly in source code.
- Integer literals represent whole-number values.
- Integer literals can be written in decimal, octal, hexadecimal, and supported binary forms.
- Integer suffixes such as U, L, and LL can specify types.
- Floating-point literals represent fractional values.
- f can be used for float literals.
- L can be used for long double literals.
- Character constants use single quotation marks.
- String literals use double quotation marks.
- Escape sequences represent special characters.
- Literals are different from const-qualified objects.

The key idea is:

\`\`\`text
Literal
   ↓
A value written directly in the source code
\`\`\`

Examples:

\`\`\`text
100
3.14
'A'
"Hello"
\`\`\`

---

# Module 2 Progress

✓ Module 1 — C Fundamentals Complete

✓ Lesson 1 — Primitive Data Types
✓ Lesson 2 — Non-Primitive Data Types
✓ Lesson 3 — Variables
✓ Lesson 4 — Variable Scope
✓ Lesson 5 — Constants
→ Lesson 6 — Literals
  Lesson 7 — Type Conversion
  Lesson 8 — Type Casting
  Lesson 9 — Arithmetic Operators
  Lesson 10 — Relational Operators
  Lesson 11 — Logical Operators
  Lesson 12 — Assignment Operators
  Lesson 13 — Unary Operators
  Lesson 14 — Bitwise Operators
  Lesson 15 — Operator Precedence

Lesson 6 Complete

Next: Lesson 7 — Type Conversion.

`,
};

export default lesson6;
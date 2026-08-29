const lesson11 = {
  id: "lesson11",

  title: "Character Set in C",

  content: `

# Lesson 11: Character Set in C

## Introduction

Before a C program can be understood by a compiler, the compiler must be able to recognize the characters used to write that program.

The **C character set** is the collection of characters that can be used in C source programs.

These characters are used to form identifiers, constants, operators, strings, comments, and other parts of the program.

For example:

\`\`\`c
int total = 100;
\`\`\`

contains letters, a space, an assignment operator, digits, and a semicolon.

Understanding the character set is useful because it forms one of the basic building blocks of C syntax.

## 1. Letters

The basic alphabetic characters used in C include uppercase and lowercase English letters:

\`\`\`text
A B C D E F G H I J K L M
N O P Q R S T U V W X Y Z
\`\`\`

and:

\`\`\`text
a b c d e f g h i j k l m
n o p q r s t u v w x y z
\`\`\`

C is case-sensitive, so:

\`\`\`text
A
\`\`\`

and:

\`\`\`text
a
\`\`\`

are different characters.

This is why these identifiers are different:

\`\`\`c
int value;

int Value;
\`\`\`

## 2. Digits

The decimal digits are:

\`\`\`text
0 1 2 3 4 5 6 7 8 9
\`\`\`

They are used extensively in numeric constants.

For example:

\`\`\`c
int age = 20;
\`\`\`

Here 2 and 0 are digits.

Digits can also appear in identifiers, but an identifier cannot begin with a digit.

Valid:

\`\`\`c
int value2;
\`\`\`

Invalid:

\`\`\`c
int 2value;
\`\`\`

## 3. White-Space Characters

C source code can contain whitespace characters such as:

- Space
- Horizontal tab
- Vertical tab
- Form feed
- Newline

Whitespace is often used to separate tokens and make programs readable.

For example:

\`\`\`c
int number = 10;
\`\`\`

is much easier to read than:

\`\`\`c
int number=10;
\`\`\`

Both can be valid because whitespace around operators is generally not significant.

## 4. Special Characters and Punctuators

C uses many special characters to give structure and meaning to a program.

Examples include:

\`\`\`text
+  -  *  /  %
=  <  >
!  &
|  ^
~  ?
:  ;
,  .
\`\`\`

There are also characters used to group expressions and blocks:

\`\`\`text
( )
[ ]
{ }
\`\`\`

For example:

\`\`\`c
if (number > 10)
{
    printf("Large");
}
\`\`\`

Here:

\`\`\`text
( )
{ }
>
\`\`\`

all have syntactic meaning.

## 5. String and Character Delimiters

C uses quotation marks for strings and character constants.

A string:

\`\`\`c
printf("Hello");
\`\`\`

uses:

\`\`\`text
"
\`\`\`

A character constant:

\`\`\`c
char grade = 'A';
\`\`\`

uses:

\`\`\`text
'
\`\`\`

The two are different:

\`\`\`text
"Hello"
\`\`\`

is a string literal, while:

\`\`\`text
'A'
\`\`\`

is a character constant.

We will study these in greater detail when we reach data types and input/output.

## 6. Escape Characters

Some characters cannot conveniently be represented directly inside a string or character constant.

C therefore provides **escape sequences**.

For example:

\`\`\`c
printf("Hello\\nWorld");
\`\`\`

The \\n represents a newline.

Some commonly encountered escape sequences are:

\`\`\`text
\\n    Newline
\\t    Horizontal tab
\\\\    Backslash
\\"    Double quotation mark
\\'    Single quotation mark
\\0    Null character
\`\`\`

For example:

\`\`\`c
printf("Name:\\tJohn\\n");
\`\`\`

produces output using a tab and a new line.

## 7. Backslash

The backslash:

\`\`\`text
\\\\
\`\`\`

has a special role in C.

It is commonly used to introduce escape sequences.

For example:

\`\`\`text
"\\n"
\`\`\`

contains a backslash followed by n.

The backslash can also be written inside a string using:

\`\`\`c
"\\\\"
\`\`\`

which represents a single backslash character.

## 8. Operators as Characters

Many C operators are made from one or more characters.

Examples:

\`\`\`text
+
-
*
/
%
=
==
!=
<
>
<=
>=
&&
||
++
--
\`\`\`

For example:

\`\`\`c
if (age >= 18)
\`\`\`

contains the relational operator:

\`\`\`text
>=
\`\`\`

It is important to distinguish individual characters from the larger tokens formed from them.

That distinction becomes important in the next lesson on **tokens**.

## 9. Punctuators

Certain symbols are used to separate or structure parts of a C program.

For example:

\`\`\`c
int main(void)
{
    printf("Hello");
}
\`\`\`

contains:

\`\`\`text
( )
{ }
;
\`\`\`

These characters help the compiler understand the structure of the program.

The semicolon:

\`\`\`text
;
\`\`\`

marks the end of many statements.

## 10. Character Constants

A character constant is written inside single quotation marks.

Examples:

\`\`\`text
'A'
'7'
'+'
'\\n'
\`\`\`

For example:

\`\`\`c
char grade = 'A';
\`\`\`

Here 'A' represents a character constant.

Notice the difference between:

\`\`\`text
'A'
\`\`\`

and:

\`\`\`text
"A"
\`\`\`

The first is a character constant; the second is a string literal.

## 11. Source Character Set and Modern C

The details of the characters accepted by C have evolved as the language standards have evolved.

Traditional C source code is based heavily on a basic set of letters, digits, whitespace characters, and punctuation.

Modern C implementations can also support extended characters and universal character names in appropriate contexts.

However, when learning the fundamentals, you should first become comfortable with the basic characters used in ordinary C programs.

## 12. Why Character Set Matters

The character set is not something you normally think about while writing a program.

However, it forms the foundation for everything else.

For example:

\`\`\`c
int total = 100;
\`\`\`

is constructed from individual characters.

Those characters are then grouped into meaningful units called **tokens**.

The relationship is:

\`\`\`text
Characters
    ↓
Tokens
    ↓
Expressions / Statements
    ↓
C Program
\`\`\`

This leads directly to our next topic.

## Example

Consider:

\`\`\`c
int total = 25;
\`\`\`

The characters include:

\`\`\`text
i n t
t o t a l
=
2 5
;
\`\`\`

The compiler does not treat all of these characters independently when analyzing the program.

It recognizes groups such as:

\`\`\`text
int
total
=
25
;
\`\`\`

These are tokens.

That is the subject of Lesson 12.

## Common Mistakes

### Confusing Character and String

\`\`\`text
'A'
\`\`\`

is a character constant.

\`\`\`text
"A"
\`\`\`

is a string literal.

### Starting an Identifier with a Digit

\`\`\`c
int 5value;
\`\`\`

is invalid.

Use:

\`\`\`c
int value5;
\`\`\`

### Forgetting Case Sensitivity

\`\`\`c
int Total;

int total;
\`\`\`

are different identifiers.

### Forgetting Escape Sequences

If you want a newline inside a string, use:

\`\`\`text
\\n
\`\`\`

For example:

\`\`\`c
printf("Hello\\nWorld");
\`\`\`

## Lesson Summary

The C character set provides the basic characters from which source programs are constructed.

You should now be familiar with:

- Letters
- Digits
- Whitespace
- Special characters
- Operators
- Punctuators
- Single and double quotation marks
- Backslash
- Escape sequences
- Character constants

The important idea is:

\`\`\`text
Characters
    ↓
Tokens
    ↓
Statements
    ↓
Program
\`\`\`

The next lesson explains the second step in this sequence: **tokens in C**.

## Module 1 Progress

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

✓ Lesson 11 — Character Set

→ Lesson 12 — Tokens in C

  Lesson 13 — Syntax Rules

  Lesson 14 — Command Line Compilation

  Lesson 15 — Mini Project — Simple Calculator

`,
};

export default lesson11;
const lesson13 = {
  id: "lesson13",

  title: "Syntax Rules in C",

  content: `

# Lesson 13: Syntax Rules in C

## Introduction

In the previous lesson, we saw that a C program is made from tokens. But simply having the correct tokens is not enough.

The tokens must be arranged according to the rules of the C language.

These rules are called **syntax**.

Just as a sentence in English must follow grammatical rules, a C program must follow the grammar defined by the language.

For example:

\`\`\`c
int number = 10;
\`\`\`

follows valid C syntax.

But:

\`\`\`c
int = number 10;
\`\`\`

does not.

The individual words and symbols exist, but they are arranged incorrectly.

---

# 1. What Is Syntax?

Syntax is the set of rules that determines how different elements of a programming language can be combined.

In C, syntax determines things such as:

- How statements are written
- Where semicolons are required
- How expressions are formed
- How functions are defined
- How blocks are created
- How declarations are written
- How control statements are structured

A compiler checks these rules while processing your program.

---

# 2. Statements

A statement represents an instruction in a C program.

For example:

\`\`\`c
int number = 10;
\`\`\`

and:

\`\`\`c
printf("%d\\n", number);
\`\`\`

are statements.

Many C statements end with a semicolon:

\`\`\`text
;
\`\`\`

For example:

\`\`\`c
int age = 20;

age = age + 1;

printf("%d", age);
\`\`\`

---

# 3. The Semicolon

The semicolon is one of the most common pieces of C syntax.

Consider:

\`\`\`c
int number = 10;
\`\`\`

The semicolon marks the end of the declaration statement.

Similarly:

\`\`\`c
printf("Hello\\n");
\`\`\`

ends with a semicolon.

If you forget it:

\`\`\`c
printf("Hello\\n")
\`\`\`

the compiler will usually report an error.

A common beginner mistake is to think the semicolon belongs only to variables. It is actually required after many different kinds of C statements.

---

# 4. Blocks

A block is a group of statements enclosed in curly braces:

\`\`\`text
{
    statement1;
    statement2;
    statement3;
}
\`\`\`

For example:

\`\`\`c
int main(void)
{
    int number = 10;
    printf("%d\\n", number);
    return 0;
}
\`\`\`

The statements between { and } form the body of main().

Blocks are also used with control structures such as if, for, and while.

---

# 5. Function Syntax

A function definition has a general structure like:

\`\`\`text
return_type function_name(parameters)
{
    statements
}
\`\`\`

For example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

Here:

\`\`\`text
int
↓
Return type

add
↓
Function name

(int a, int b)
↓
Parameters

{ ... }
↓
Function body
\`\`\`

Each part has a specific syntactic role.

---

# 6. Expressions

An expression is a combination of operands and operators that produces a value.

For example:

\`\`\`text
a + b
\`\`\`

is an expression.

Another example:

\`\`\`text
price * quantity
\`\`\`

is an expression.

Expressions can be used inside statements:

\`\`\`c
int total = price * quantity;
\`\`\`

Here:

\`\`\`text
price * quantity
\`\`\`

is the expression being evaluated.

---

# 7. Declarations

A declaration introduces an identifier and specifies information about it.

For example:

\`\`\`c
int number;

float average;

char grade;
\`\`\`

These declarations tell the compiler the type of each object.

A declaration can also include an initial value:

\`\`\`c
int number = 25;
\`\`\`

---

# 8. Assignment Syntax

The assignment operator is:

\`\`\`text
=
\`\`\`

For example:

\`\`\`c
number = 50;
\`\`\`

This assigns the value 50 to number.

Do not confuse:

\`\`\`text
=
\`\`\`

with:

\`\`\`text
==
\`\`\`

They have different meanings.

\`\`\`text
=
\`\`\`

is used for assignment.

\`\`\`text
==
\`\`\`

is used to test equality.

For example:

\`\`\`c
number = 10;
\`\`\`

and:

\`\`\`c
if (number == 10)
\`\`\`

are completely different operations.

---

# 9. Parentheses

Parentheses are used in several places in C.

For example:

\`\`\`c
int main(void)
\`\`\`

uses parentheses around the function parameter list.

They are also used in expressions:

\`\`\`c
result = (a + b) * c;
\`\`\`

and in control statements:

\`\`\`c
if (number > 0)
{
    printf("Positive");
}
\`\`\`

Parentheses can also control the order in which an expression is evaluated.

---

# 10. Brackets

Square brackets are commonly used with arrays.

For example:

\`\`\`c
int marks[5];
\`\`\`

Here:

\`\`\`text
[5]
\`\`\`

specifies the array size.

Later, an individual element can be accessed using an index:

\`\`\`c
marks[0]
\`\`\`

Arrays will be covered in detail in a later module.

---

# 11. Curly Braces

Curly braces define blocks.

For example:

\`\`\`c
if (age >= 18)
{
    printf("Allowed");
}
\`\`\`

The braces tell the compiler which statements belong to the if statement.

They are also used for function definitions:

\`\`\`c
int main(void)
{
    return 0;
}
\`\`\`

---

# 12. Case Sensitivity

C is case-sensitive.

Therefore:

\`\`\`text
main
Main
MAIN
\`\`\`

are different identifiers.

Likewise:

\`\`\`c
int number;

int Number;
\`\`\`

declare two different identifiers.

This applies to keywords and library function names as well.

For example:

\`\`\`c
printf()
\`\`\`

is correct, while:

\`\`\`c
Printf()
\`\`\`

does not refer to the same function.

---

# 13. Whitespace

Spaces, tabs, and newlines are commonly used to make code readable.

For example:

\`\`\`c
int number = 10;
\`\`\`

and:

\`\`\`text
int     number     =     10;
\`\`\`

contain essentially the same tokens.

Good formatting is therefore primarily for the benefit of programmers, not the compiler.

Prefer readable code:

\`\`\`c
int total = price + tax;
\`\`\`

rather than deliberately writing:

\`\`\`c
int total=price+tax;
\`\`\`

Both can be valid, but the first is much easier to read.

---

# 14. Indentation

C does not require indentation to understand a block, but proper indentation makes the structure obvious.

Compare:

\`\`\`c
if (number > 0)
{
printf("Positive");
}
\`\`\`

with:

\`\`\`c
if (number > 0)
{
    printf("Positive");
}
\`\`\`

The second version is easier to read.

As programs become larger, consistent indentation becomes increasingly important.

---

# 15. Comments and Syntax

Comments can appear in source code without becoming part of the program's executable logic.

For example:

\`\`\`c
// Display the result

printf("%d\\n", result);
\`\`\`

The comment does not change the meaning of the printf() statement.

Similarly:

\`\`\`c
/*
    Calculate the total
*/

int total = price + tax;
\`\`\`

Comments are useful for documentation, but they do not replace valid syntax.

---

# 16. Function Calls

A function call generally consists of the function name followed by parentheses.

For example:

\`\`\`c
printf("Hello");
\`\`\`

Here:

\`\`\`text
printf
\`\`\`

is the function being called.

The arguments are placed inside the parentheses.

Another example:

\`\`\`c
result = add(10, 20);
\`\`\`

The function add() is called with two arguments.

---

# 17. Nested Structures

C syntax allows structures to appear inside other structures.

For example:

\`\`\`c
if (number > 0)
{
    if (number < 100)
    {
        printf("Valid");
    }
}
\`\`\`

Here one if block is inside another.

Proper indentation makes the nesting clear.

---

# 18. Syntax Errors

When your program violates the grammar of C, the compiler generally reports a syntax error or related diagnostic.

For example:

\`\`\`c
int main(void)
{
    printf("Hello\\n"
    return 0;
}
\`\`\`

The printf() statement is incomplete.

Another example:

\`\`\`c
int number = ;
\`\`\`

does not contain a valid expression after the assignment operator.

The compiler will reject such code.

---

# 19. Syntax vs Logic

It is important to understand the difference between a syntax error and a logical error.

## Syntax Error

The program does not follow the rules of C.

Example:

\`\`\`c
int number =
\`\`\`

The program cannot be compiled successfully as written.

## Logical Error

The program is syntactically valid but produces the wrong result.

For example:

\`\`\`c
int total = price - tax;
\`\`\`

may compile perfectly even if the intended operation was addition.

So:

\`\`\`text
Syntax Correct
      ↓
Program Compiles
      ↓
But Logic May Still Be Wrong
\`\`\`

Compilation does not guarantee that your program does what you intended.

---

# 20. Putting the Rules Together

Consider:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int first = 10;
    int second = 20;
    int total = first + second;

    printf("Total = %d\\n", total);

    return 0;
}
\`\`\`

This program follows several syntax rules at once:

- Header inclusion
- Function definition
- Block structure
- Declarations
- Assignment
- Expression
- Function call
- Semicolons
- Return statement

Once these rules become familiar, writing C programs becomes much more natural.

---

# Common Beginner Mistakes

## Missing Semicolon

\`\`\`c
int number = 10
\`\`\`

Correct:

\`\`\`c
int number = 10;
\`\`\`

## Using = Instead of ==

Incorrect when testing equality:

\`\`\`c
if (number = 10)
\`\`\`

The assignment operator and equality operator have different meanings.

## Missing Braces

Be careful with blocks:

\`\`\`c
if (number > 0)
{
    printf("Positive");
}
\`\`\`

## Incorrect Capitalization

\`\`\`c
Printf("Hello");
\`\`\`

is not the same as:

\`\`\`c
printf("Hello");
\`\`\`

## Unbalanced Parentheses

Incorrect:

\`\`\`c
printf("Hello";
\`\`\`

Correct:

\`\`\`c
printf("Hello");
\`\`\`

---

# Lesson Summary

Syntax is the grammar of the C language.

You should now understand:

- Statements
- Semicolons
- Blocks
- Function definitions
- Expressions
- Declarations
- Assignment
- Parentheses
- Square brackets
- Curly braces
- Case sensitivity
- Whitespace
- Indentation
- Function calls
- Syntax errors
- The difference between syntax and logic errors

The next lesson puts this knowledge into practice by using the **command line to compile C programs directly**.

---

# Module 1 Progress

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

✓ Lesson 12 — Tokens in C

✓ Lesson 13 — Syntax Rules

→ Lesson 14 — Command Line Compilation

  Lesson 15 — Mini Project — Simple Calculator

`,
};

export default lesson13;
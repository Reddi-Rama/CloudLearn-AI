const lesson4 = {
  id: "lesson4",

  title: "C Program Structure",

  content: `

# Lesson 4: C Program Structure

## Introduction

Before writing larger C programs, you should be able to look at a simple program and recognize what each part is doing.

A C program is not just a collection of statements. It has a structure, and different parts of the program serve different purposes.

Consider this example:

\`\`\`c
#include <stdio.h>

int main()
{
    printf("Hello, C Programming!\\\\n");
    return 0;
}
\`\`\`

We will use this program to understand the basic structure of C.

## 1. Preprocessor Directives

The first line is:

\`\`\`c
#include <stdio.h>
\`\`\`

This is a **preprocessor directive**.

The #include directive tells the preprocessor to make the contents of the specified header available to the program.

In this case:

\`\`\`text
stdio.h
\`\`\`

is the standard input/output header.

It contains declarations needed for functions such as printf() and scanf().

## 2. Header Files

Header files are used to provide declarations and other information that can be shared between source files.

Some commonly used headers are:

- stdio.h
- stdlib.h
- string.h
- math.h
- ctype.h

For example:

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
\`\`\`

A program can include more than one header when required.

## 3. The main() Function

The next important part is:

\`\`\`c
int main()
{
    ...
}
\`\`\`

For a hosted C program, main() is the function where program execution begins.

When the program starts, control is transferred to main().

The body of the function is enclosed between:

\`\`\`text
{
}
\`\`\`

## 4. Return Type of main()

In:

\`\`\`c
int main()
\`\`\`

the keyword int specifies the return type of the function.

The statement:

\`\`\`c
return 0;
\`\`\`

returns an integer value from main().

A return value of zero conventionally indicates successful termination.

## 5. Statements

Inside the function body, we write statements.

For example:

\`\`\`c
printf("Hello, C Programming!\\\\n");
\`\`\`

This statement calls printf() to display text.

Many C statements end with a semicolon:

\`\`\`text
;
\`\`\`

For example:

\`\`\`c
int number = 10;

printf("%d", number);
\`\`\`

## 6. Curly Braces

Curly braces define a block of code.

For example:

\`\`\`c
int main()
{
    printf("Hello");
    return 0;
}
\`\`\`

Everything between { and } belongs to the body of main().

Curly braces are also used with control structures such as:

- if
- for
- while

You will use them extensively throughout the course.

## 7. Functions

A C program can contain many functions.

For example:

\`\`\`c
#include <stdio.h>

void greet()
{
    printf("Hello\\\\n");
}

int main()
{
    greet();
    return 0;
}
\`\`\`

Here there are two functions:

- greet()
- main()

main() calls greet().

As programs become larger, functions allow us to divide the program into manageable pieces.

## 8. Function Declaration

A function can be declared before its definition.

For example:

\`\`\`c
#include <stdio.h>

void greet();

int main()
{
    greet();
    return 0;
}

void greet()
{
    printf("Hello\\\\n");
}
\`\`\`

The line:

\`\`\`c
void greet();
\`\`\`

is a function declaration, also commonly called a **function prototype**.

It tells the compiler about the function before the function is used.

## 9. Global Declarations

Declarations can appear outside functions.

For example:

\`\`\`c
#include <stdio.h>

int count = 10;

int main()
{
    printf("%d\\\\n", count);
    return 0;
}
\`\`\`

Here:

\`\`\`c
int count = 10;
\`\`\`

is declared at file scope, outside main().

Such an object has broader scope than a variable declared inside a function.

## 10. Local Variables

Variables declared inside a function have local scope.

For example:

\`\`\`c
int main()
{
    int number = 25;
    printf("%d\\\\n", number);
    return 0;
}
\`\`\`

Here number is declared inside main().

It belongs to that block and is not directly accessible from unrelated functions.

## 11. Comments

Comments can be included in a C program to explain the code.

Single-line comment:

\`\`\`c
// Display the result
\`\`\`

Multi-line comment:

\`\`\`c
/*
   Calculate the total
   and display it.
*/
\`\`\`

Comments are ignored during the compilation of the program's executable logic.

We will study comments separately in Lesson 9.

## 12. A Complete Example

Consider:

\`\`\`c
#include <stdio.h>

int total = 100;

void display()
{
    printf("Total = %d\\\\n", total);
}

int main()
{
    int number = 25;

    printf("Number = %d\\\\n", number);

    display();

    return 0;
}
\`\`\`

This program contains several different parts:

Header

↓

Global declaration

↓

Function definition

↓

main()

↓

Local variable

↓

Statements

## Understanding the Execution

When the program starts, execution begins in main().

In the example above:

main()

↓

Create number

↓

printf()

↓

display()

↓

printf()

↓

return 0

Notice that the display() function is defined before main() in this example, so no separate prototype is needed for that call.

## 13. Whitespace and Formatting

C generally ignores extra spaces and line breaks where they do not affect token separation.

For example:

\`\`\`c
int number = 10;
\`\`\`

and:

\`\`\`c
int     number     =     10;
\`\`\`

are equivalent from the compiler's point of view.

However, good formatting is extremely important for humans reading the program.

Prefer:

\`\`\`c
int main()
{
    printf("Hello\\\\n");
    return 0;
}
\`\`\`

rather than putting everything on one line.

Readable code is easier to debug and maintain.

## 14. Case Sensitivity

C is case-sensitive.

For example:

- number
- Number
- NUMBER

represent different identifiers.

Likewise:

\`\`\`c
printf()
\`\`\`

and:

\`\`\`c
Printf()
\`\`\`

are not the same.

This is a common source of mistakes when beginning C programming.

## 15. Semicolons

Many C statements end with a semicolon.

For example:

\`\`\`c
int number = 10;

printf("%d", number);

return 0;
\`\`\`

If a required semicolon is missing, the compiler will generally report an error.

Do not think of ; as decoration. It is part of the syntax of many C statements.

## 16. A Useful Structural View

You can think about a basic C source file like this:

Comments / Documentation

↓

Preprocessor Directives

↓

Global Declarations

↓

Function Declarations

↓

main()

↓

Other Function Definitions

Not every program must contain all of these sections.

The exact organization depends on the program.

## 17. A More Realistic Program

As your programs become larger, the structure may look like:

\`\`\`c
#include <stdio.h>

int calculateTotal(int a, int b);

int main()
{
    int first = 10;
    int second = 20;

    int total = calculateTotal(first, second);

    printf("Total = %d\\\\n", total);

    return 0;
}

int calculateTotal(int a, int b)
{
    return a + b;
}
\`\`\`

Here you can identify:

#include

↓

Function Prototype

↓

main()

↓

Function Call

↓

Function Definition

This structure will become much more familiar once we reach functions and larger programs.

## Common Beginner Mistakes

### Missing semicolon

Incorrect:

\`\`\`c
printf("Hello")
\`\`\`

Correct:

\`\`\`c
printf("Hello");
\`\`\`

### Incorrect capitalization

Incorrect:

\`\`\`c
Printf("Hello");
\`\`\`

Correct:

\`\`\`c
printf("Hello");
\`\`\`

### Missing braces

Be careful when defining blocks:

\`\`\`c
int main()
{
    ...
}
\`\`\`

### Using a function without understanding its declaration

When a function is used before the compiler has seen an appropriate declaration, compilation problems can occur depending on the situation and language standard.

Using a proper function prototype is the normal solution.

## Lesson Summary

A basic C program is built from several components:

- Preprocessor directives.
- Header files.
- Function declarations.
- Global declarations.
- main().
- Local variables.
- Statements.
- Function definitions.
- Comments.

The most important thing at this stage is to recognize the role of each part rather than simply memorizing a template.

Once you understand the structure, the next question is naturally:

**How does this source code become an executable program?**

That is exactly what we will examine in the next lesson on the **C compilation process**.

`,
};

export default lesson4;
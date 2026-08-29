const lesson1 = {
  id: "lesson1",

  title: "Introduction to Functions",

  content: `

# Lesson 1: Introduction to Functions

## Introduction

A function is a **named block of code designed to perform a specific task**.

In C, instead of writing all the instructions inside main(), we can divide a program into smaller functions.

For example, a program that performs addition can have a separate function for addition.

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

The function can then be called whenever addition is required.

---

## 1. Why Do We Need Functions?

Consider a large program containing hundreds of statements.

If everything is written inside main(), the program can become difficult to read, understand, and maintain.

Functions allow us to divide the program into smaller parts.

\`\`\`text
Large Program

        ↓

   ┌────┴────┬──────────┬──────────┐
   ↓         ↓          ↓          ↓
 Input   Calculation  Output   Validation
   ↓         ↓          ↓          ↓
Function  Function   Function  Function
\`\`\`

Each function can concentrate on one particular task.

---

## 2. Simple Function Example

\`\`\`c
#include <stdio.h>

void greet(void)
{
    printf("Welcome to C Programming\\n");
}

int main(void)
{
    greet();

    return 0;
}
\`\`\`

### Output

\`\`\`text
Welcome to C Programming
\`\`\`

Here:

\`\`\`c
void greet(void)
\`\`\`

defines a function named greet.

The function is executed when we write:

\`\`\`c
greet();
\`\`\`

inside main().

---

## 3. Function Structure

A function generally consists of:

\`\`\`text
Return Type
     ↓
Function Name
     ↓
Parameters
     ↓
Function Body
\`\`\`

For example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

Here:

- int → Return type
- add → Function name
- int a, int b → Parameters
- return... → Function body

---

## 4. Function Name

The function name identifies the function.

Example:

\`\`\`c
void display(void)
{
    printf("Hello\\n");
}
\`\`\`

Here:

\`\`\`text
display
\`\`\`

is the function name.

A meaningful function name makes the program easier to understand.

Examples:

- calculateSum()
- findMaximum()
- displayMenu()
- calculateArea()

---

## 5. Return Type

The return type specifies the type of value returned by the function.

For example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

The function returns an int.

A function that does not return a value can use:

\`\`\`c
void
\`\`\`

Example:

\`\`\`c
void display(void)
{
    printf("Hello\\n");
}
\`\`\`

---

## 6. Function Body

The statements written between { and } form the function body.

\`\`\`c
void display(void)
{
    printf("Hello\\n");
    printf("Welcome\\n");
}
\`\`\`

The function body contains the instructions that should be executed when the function is called.

---

## 7. Calling a Function

Defining a function does not execute it.

The function must be called.

\`\`\`c
#include <stdio.h>

void display(void)
{
    printf("Hello\\n");
}

int main(void)
{
    display();

    return 0;
}
\`\`\`

The statement:

\`\`\`c
display();
\`\`\`

is the function call.

The execution flow is:

\`\`\`text
main()
  ↓
display()
  ↓
Execute function body
  ↓
Return to main()
\`\`\`

---

## 8. Calling a Function Multiple Times

A function can be called more than once.

\`\`\`c
#include <stdio.h>

void message(void)
{
    printf("C Programming\\n");
}

int main(void)
{
    message();
    message();
    message();

    return 0;
}
\`\`\`

### Output

\`\`\`text
C Programming
C Programming
C Programming
\`\`\`

This is one of the major benefits of functions: **code can be reused**.

---

## 9. Function With No Return Value

A function can perform a task without returning a value.

Example:

\`\`\`c
#include <stdio.h>

void welcome(void)
{
    printf("Welcome to the program\\n");
}

int main(void)
{
    welcome();

    return 0;
}
\`\`\`

The return type is:

\`\`\`text
void
\`\`\`

because the function does not return a value.

---

## 10. Function With a Return Value

A function can calculate something and return the result.

\`\`\`c
#include <stdio.h>

int square(int number)
{
    return number * number;
}

int main(void)
{
    int result;

    result = square(5);

    printf("Square = %d\\n", result);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Square = 25
\`\`\`

The function:

\`\`\`text
square(5)
\`\`\`

returns:

\`\`\`text
25
\`\`\`

---

## 11. Functions Make Programs Easier to Understand

Without functions:

\`\`\`c
int main(void)
{
    /* many statements */
    /* input */
    /* calculations */
    /* validation */
    /* output */
}
\`\`\`

With functions:

\`\`\`c
int main(void)
{
    getInput();
    calculate();
    displayResult();

    return 0;
}
\`\`\`

The second structure makes the purpose of each part easier to identify.

---

## 12. Example — Addition Function

\`\`\`c
#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int main(void)
{
    int result;

    result = add(10, 20);

    printf("Sum = %d\\n", result);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Sum = 30
\`\`\`

The addition operation is separated from the main program.

---

## 13. Functions and main()

The main() function is also a function.

For example:

\`\`\`c
int main(void)
{
    printf("Hello\\n");

    return 0;
}
\`\`\`

The program begins execution from main().

Other functions can be called from main().

\`\`\`text
main()
  ↓
Function 1
  ↓
Function 2
  ↓
Function 3
\`\`\`

---

## 14. Advantages of Functions

### 1. Code Reusability

A function can be called multiple times.

### 2. Modularity

A large program can be divided into smaller parts.

### 3. Readability

Functions make the program easier to understand.

### 4. Easier Debugging

Errors can be located more easily when the program is divided into functions.

### 5. Easier Maintenance

A particular task can be modified without changing the entire program.

---

## Lesson Summary

A function is a named block of code that performs a specific task.

Basic structure:

\`\`\`c
return_type function_name(parameters)
{
    statements;
}
\`\`\`

A function is executed by calling it:

\`\`\`c
function_name();
\`\`\`

Important ideas:

\`\`\`text
Function
   ↓
Has a name
   ↓
Performs a task
   ↓
Can receive data
   ↓
Can return a value
\`\`\`

Functions help make C programs **modular, reusable, readable, and easier to maintain**.

---

# Module 4 Progress

✓ Lesson 1 — Introduction to Functions

→ Lesson 2 — Need and Advantages of Functions

  Lesson 3 — Function Declaration

  Lesson 4 — Function Definition

  Lesson 5 — Function Calling

  Lesson 6 — Parameters and Arguments

  Lesson 7 — Return Values

  Lesson 8 — Types of Functions

  Lesson 9 — Function Prototypes

  Lesson 10 — Passing Arguments to Functions

  Lesson 11 — Local and Global Variables

  Lesson 12 — Scope and Lifetime of Variables

  Lesson 13 — Recursive Functions

  Lesson 14 — Library Functions

  Lesson 15 — Mini Project — Calculator Using Functions

Lesson 1 Complete

`,
};

export default lesson1;
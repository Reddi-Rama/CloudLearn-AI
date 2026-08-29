const lesson3 = {
  id: "lesson3",

  title: "Function Declaration",

  content: `

# Lesson 3: Function Declaration

## Introduction

A **function declaration** tells the compiler about a function before the function is called.

It specifies the function's:

- Return type
- Function name
- Parameters

A function declaration is also called a **function prototype**.

---

## 1. Syntax of Function Declaration

The general syntax is:

\`\`\`c
return_type function_name(parameter_list);
\`\`\`

Example:

\`\`\`c
int add(int a, int b);
\`\`\`

This declaration tells the compiler that:

- The function name is \`add\`.
- The function returns an integer.
- The function accepts two integer parameters.

---

## 2. Simple Function Declaration

Example:

\`\`\`c
#include <stdio.h>

void display(void);

int main(void)
{
    display();

    return 0;
}

void display(void)
{
    printf("Hello from C");
}
\`\`\`

### Output

\`\`\`text
Hello from C
\`\`\`

The declaration:

\`\`\`c
void display(void);
\`\`\`

appears before \`main()\`, so the compiler knows about the function before it is called.

---

## 3. Function Declaration With Parameters

A function declaration can contain parameters.

Example:

\`\`\`c
int add(int a, int b);
\`\`\`

This tells the compiler that the function:

- Is named \`add\`.
- Accepts two integers.
- Returns an integer.

The function can later be defined as:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

---

## 4. Function Declaration Without Parameters

A function that does not accept parameters can be declared using \`void\`.

Example:

\`\`\`c
void message(void);
\`\`\`

Definition:

\`\`\`c
void message(void)
{
    printf("Welcome");
}
\`\`\`

Calling the function:

\`\`\`c
message();
\`\`\`

---

## 5. Function Declaration With Different Return Types

Functions can have different return types.

Examples:

\`\`\`c
void display(void);

int add(int a, int b);

float calculateAverage(float a, float b);

char getGrade(int marks);
\`\`\`

The return type describes the type of value returned by the function.

---

## 6. Declaration Before main()

A common structure of a C program is:

\`\`\`text
Header Files
     ↓
Function Declarations
     ↓
main()
     ↓
Function Definitions
\`\`\`

Example:

\`\`\`c
#include <stdio.h>

int multiply(int a, int b);

int main(void)
{
    int result;

    result = multiply(5, 4);

    printf("Result = %d", result);

    return 0;
}

int multiply(int a, int b)
{
    return a * b;
}
\`\`\`

### Output

\`\`\`text
Result = 20
\`\`\`

---

## 7. Declaration and Definition

A declaration only informs the compiler about a function.

Example:

\`\`\`c
int add(int a, int b);
\`\`\`

A definition contains the actual implementation.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

Therefore:

\`\`\`text
Declaration
    ↓
Information about the function

Definition
    ↓
Actual implementation
\`\`\`

---

## 8. Parameter Names in Declarations

Parameter names may be included in a declaration.

Example:

\`\`\`c
int add(int a, int b);
\`\`\`

They may also be omitted:

\`\`\`c
int add(int, int);
\`\`\`

Both describe a function that accepts two integer parameters and returns an integer.

Using parameter names often makes the declaration easier to understand.

---

## 9. Why Function Declarations Are Useful

Function declarations are useful because they:

- Tell the compiler about a function.
- Specify the return type.
- Specify parameter types.
- Allow functions to be called before their definitions.
- Help the compiler check function calls.
- Improve program organization.

---

## 10. Function Declaration in Larger Programs

In larger programs, declarations are often placed in header files.

For example:

\`\`\`c
int add(int a, int b);
int subtract(int a, int b);
int multiply(int a, int b);
\`\`\`

Source files can include the header and use these functions.

This makes large programs easier to organize.

---

## 11. Important Rules

While declaring a function:

- Specify the return type.
- Specify the function name.
- Specify the parameter types when parameters are present.
- End the declaration with a semicolon.
- Make sure the declaration is compatible with the function definition.

Example:

\`\`\`c
int calculate(int a, int b);
\`\`\`

The semicolon is important because this is a declaration, not a definition.

---

## 12. Declaration vs Function Call

Declaration:

\`\`\`c
int add(int a, int b);
\`\`\`

Function call:

\`\`\`c
add(10, 20);
\`\`\`

The declaration tells the compiler about the function, while the call requests execution of the function.

---

## 13. Complete Example

\`\`\`c
#include <stdio.h>

int square(int number);

int main(void)
{
    int result;

    result = square(6);

    printf("Square = %d", result);

    return 0;
}

int square(int number)
{
    return number * number;
}
\`\`\`

### Output

\`\`\`text
Square = 36
\`\`\`

---

## Lesson Summary

A **function declaration** provides information about a function before it is used.

General syntax:

\`\`\`c
return_type function_name(parameter_list);
\`\`\`

Example:

\`\`\`c
int add(int a, int b);
\`\`\`

A declaration does not contain the function body.

The function body is provided by the function definition.

---

# Module 4 Progress

✓ Lesson 1 — Introduction to Functions

✓ Lesson 2 — Need and Advantages of Functions

✓ Lesson 3 — Function Declaration

→ Lesson 4 — Function Definition

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

Lesson 3 Complete

`,
};

export default lesson3;
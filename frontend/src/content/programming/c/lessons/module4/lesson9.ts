const lesson9 = {
  id: "lesson9",

  title: "Function Prototypes",

  content: `

# Lesson 9: Function Prototypes

## Introduction

A **function prototype** is a declaration that tells the compiler about a function before the function is called.

It specifies:

- Return type
- Function name
- Number of parameters
- Types of parameters

Example:

\`\`\`c
int add(int a, int b);
\`\`\`

This tells the compiler that \`add()\` returns an integer and accepts two integer parameters.

---

## 1. Basic Function Prototype

The general syntax is:

\`\`\`c
return_type function_name(parameter_list);
\`\`\`

Example:

\`\`\`c
int multiply(int a, int b);
\`\`\`

The semicolon indicates that this is a declaration.

---

## 2. Why Function Prototypes Are Needed

A function prototype allows the compiler to know about a function before it is used.

Example:

\`\`\`c
#include <stdio.h>

int add(int a, int b);

int main(void)
{
    printf("%d", add(10, 20));

    return 0;
}

int add(int a, int b)
{
    return a + b;
}
\`\`\`

### Output

\`\`\`text
30
\`\`\`

The prototype appears before \`main()\`, while the function definition appears later.

---

## 3. Prototype Before main()

A common program structure is:

\`\`\`text
Header Files
     ↓
Function Prototypes
     ↓
main()
     ↓
Function Definitions
\`\`\`

Example:

\`\`\`c
#include <stdio.h>

int square(int number);

int main(void)
{
    printf("%d", square(5));

    return 0;
}

int square(int number)
{
    return number * number;
}
\`\`\`

---

## 4. Prototype With Multiple Parameters

Example:

\`\`\`c
int calculate(int a, int b, int c);
\`\`\`

This tells the compiler that the function:

- Is named \`calculate\`.
- Returns an integer.
- Accepts three integer parameters.

The definition can be:

\`\`\`c
int calculate(int a, int b, int c)
{
    return a + b + c;
}
\`\`\`

---

## 5. Prototype Without Parameters

For a function that accepts no arguments:

\`\`\`c
void display(void);
\`\`\`

The corresponding definition is:

\`\`\`c
void display(void)
{
    printf("Hello");
}
\`\`\`

Using \`void\` inside the parameter list explicitly indicates that the function takes no parameters.

---

## 6. Prototype With Different Return Types

Examples:

\`\`\`c
int add(int a, int b);

float average(float a, float b);

char getGrade(int marks);

void display(void);
\`\`\`

The return type in the prototype must correspond to the function definition.

---

## 7. Parameter Names Are Optional

A prototype can include parameter names:

\`\`\`c
int add(int a, int b);
\`\`\`

Or the names can be omitted:

\`\`\`c
int add(int, int);
\`\`\`

Both indicate two integer parameters.

Including parameter names can make the prototype easier to read.

---

## 8. Prototype and Function Definition

Prototype:

\`\`\`c
int add(int a, int b);
\`\`\`

Definition:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

The prototype ends with a semicolon.

The definition contains the function body and does not place a semicolon after the parameter list.

---

## 9. Prototype and Function Call

Consider:

\`\`\`c
int add(int a, int b);
\`\`\`

The function can be called using:

\`\`\`c
int result = add(10, 20);
\`\`\`

The compiler uses the prototype to understand how the function should be called.

---

## 10. Multiple Function Prototypes

A program can contain several function prototypes.

Example:

\`\`\`c
#include <stdio.h>

int add(int a, int b);
int subtract(int a, int b);
int multiply(int a, int b);

int main(void)
{
    printf("%d\\n", add(10, 5));
    printf("%d\\n", subtract(10, 5));
    printf("%d\\n", multiply(10, 5));

    return 0;
}

int add(int a, int b)
{
    return a + b;
}

int subtract(int a, int b)
{
    return a - b;
}

int multiply(int a, int b)
{
    return a * b;
}
\`\`\`

### Output

\`\`\`text
15
5
50
\`\`\`

---

## 11. Function Prototypes in Header Files

In larger programs, function prototypes are commonly placed in header files.

For example:

\`\`\`c
int add(int a, int b);
int subtract(int a, int b);
int multiply(int a, int b);
\`\`\`

A source file can include the header and use these functions.

This helps organize larger programs.

---

## 12. Compiler Checking

Function prototypes allow the compiler to check whether a function call is compatible with the declared function.

For example:

\`\`\`c
int add(int a, int b);
\`\`\`

The compiler knows that \`add()\` expects two integer arguments and returns an integer.

This helps detect incorrect function usage during compilation.

---

## 13. Common Mistakes

### Missing Semicolon

Incorrect:

\`\`\`c
int add(int a, int b)
\`\`\`

as a prototype.

Correct:

\`\`\`c
int add(int a, int b);
\`\`\`

### Incorrect Return Type

If the function is defined as:

\`\`\`c
float average(float a, float b)
{
    return (a + b) / 2.0f;
}
\`\`\`

the prototype should also use \`float\`:

\`\`\`c
float average(float a, float b);
\`\`\`

### Mismatched Parameters

The prototype and definition should describe the same function interface.

---

## 14. Complete Example

\`\`\`c
#include <stdio.h>

int findMaximum(int a, int b);

int main(void)
{
    int result;

    result = findMaximum(45, 30);

    printf("Maximum = %d", result);

    return 0;
}

int findMaximum(int a, int b)
{
    if (a > b)
    {
        return a;
    }

    return b;
}
\`\`\`

### Output

\`\`\`text
Maximum = 45
\`\`\`

---

## 15. Important Points

A function prototype:

- Declares a function before it is used.
- Specifies the return type.
- Specifies parameter types.
- Ends with a semicolon.
- Helps the compiler check function calls.
- Allows a function definition to appear later in the source file.

Example:

\`\`\`c
int add(int a, int b);
\`\`\`

The complete flow is:

\`\`\`text
Prototype
    ↓
Function Call
    ↓
Function Definition
    ↓
Function Executes
    ↓
Return Value
\`\`\`

---

## Lesson Summary

A **function prototype** is a declaration that provides the compiler with information about a function before the function is called.

Example:

\`\`\`c
int add(int a, int b);
\`\`\`

It specifies the function's return type, name, and parameter types.

Function prototypes are especially useful when function definitions are placed after \`main()\` or when functions are organized across multiple source files.

---

# Module 4 Progress

✓ Lesson 1 — Introduction to Functions

✓ Lesson 2 — Need and Advantages of Functions

✓ Lesson 3 — Function Declaration

✓ Lesson 4 — Function Definition

✓ Lesson 5 — Function Calling

✓ Lesson 6 — Parameters and Arguments

✓ Lesson 7 — Return Values

✓ Lesson 8 — Types of Functions

✓ Lesson 9 — Function Prototypes

→ Lesson 10 — Passing Arguments to Functions

  Lesson 11 — Local and Global Variables

  Lesson 12 — Scope and Lifetime of Variables

  Lesson 13 — Recursive Functions

  Lesson 14 — Library Functions

  Lesson 15 — Mini Project — Calculator Using Functions

Lesson 9 Complete

`,
};

export default lesson9;
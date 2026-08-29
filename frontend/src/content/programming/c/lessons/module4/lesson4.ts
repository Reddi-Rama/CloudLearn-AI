const lesson4 = {
  id: "lesson4",

  title: "Function Definition",

  content: `

# Lesson 4: Function Definition

## Introduction

A **function definition** contains the actual statements that perform the task of a function.

A function definition specifies:

- Return type
- Function name
- Parameters
- Function body

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

---

## 1. Syntax of Function Definition

The general syntax is:

\`\`\`c
return_type function_name(parameter_list)
{
    statements;
}
\`\`\`

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

Here:

- \`int\` is the return type.
- \`add\` is the function name.
- \`a\` and \`b\` are parameters.
- \`return a + b;\` is the statement inside the function.

---

## 2. Function Body

The statements between the braces \`{\` and \`}\` form the function body.

Example:

\`\`\`c
void display(void)
{
    printf("Welcome to C Programming");
    printf("Learning Functions");
}
\`\`\`

The function body contains two statements.

When the function is called, these statements are executed.

---

## 3. Function With No Return Value

A function that does not return a value can use the \`void\` return type.

Example:

\`\`\`c
void display(void)
{
    printf("Hello from C");
}
\`\`\`

Complete program:

\`\`\`c
#include <stdio.h>

void display(void)
{
    printf("Hello from C");
}

int main(void)
{
    display();

    return 0;
}
\`\`\`

### Output

\`\`\`text
Hello from C
\`\`\`

---

## 4. Function With a Return Value

A function can calculate a value and return it.

Example:

\`\`\`c
int square(int number)
{
    return number * number;
}
\`\`\`

If the function is called with:

\`\`\`c
square(5);
\`\`\`

the returned value is:

\`\`\`text
25
\`\`\`

---

## 5. Function With Parameters

A function can accept one or more parameters.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

Here:

\`\`\`text
a → first parameter
b → second parameter
\`\`\`

The function adds the two values and returns the result.

---

## 6. Function With Local Variables

A function can contain variables declared inside its body.

Example:

\`\`\`c
int calculate(int a, int b)
{
    int result;

    result = a + b;

    return result;
}
\`\`\`

The variable \`result\` is declared inside the function.

It is a local variable.

---

## 7. Complete Example

\`\`\`c
#include <stdio.h>

int multiply(int a, int b)
{
    return a * b;
}

int main(void)
{
    int result;

    result = multiply(6, 5);

    printf("Product = %d", result);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Product = 30
\`\`\`

---

## 8. Function Definition After main()

A function can be defined after \`main()\` if it has been declared before \`main()\`.

Example:

\`\`\`c
#include <stdio.h>

int add(int a, int b);

int main(void)
{
    int result;

    result = add(10, 20);

    printf("Sum = %d", result);

    return 0;
}

int add(int a, int b)
{
    return a + b;
}
\`\`\`

### Output

\`\`\`text
Sum = 30
\`\`\`

---

## 9. Multiple Function Definitions

A C program can contain multiple functions.

Example:

\`\`\`c
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

Each function performs a separate task.

The program can call these functions when required.

---

## 10. Returning a Value

A function with a return type other than \`void\` can use the \`return\` statement.

Example:

\`\`\`c
int subtract(int a, int b)
{
    return a - b;
}
\`\`\`

Calling:

\`\`\`c
int result = subtract(20, 8);
\`\`\`

stores the returned value in \`result\`.

The value is:

\`\`\`text
12
\`\`\`

---

## 11. Function Definition and Function Call

Consider:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

The function can be called using:

\`\`\`c
int result = add(10, 20);
\`\`\`

The execution flow is:

\`\`\`text
main()
   ↓
add(10, 20)
   ↓
Function body executes
   ↓
30 is returned
   ↓
result receives 30
\`\`\`

---

## 12. Function Definition With Multiple Statements

A function can contain several statements.

Example:

\`\`\`c
void displayDetails(void)
{
    printf("C Programming");
    printf("Functions");
    printf("Function Definition");
}
\`\`\`

All statements execute when the function is called.

---

## 13. Difference Between Declaration and Definition

A function declaration:

\`\`\`c
int add(int a, int b);
\`\`\`

only informs the compiler about the function.

A function definition:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

contains the actual implementation.

Therefore:

\`\`\`text
Declaration
     ↓
Tells the compiler about the function

Definition
     ↓
Contains the function body

Call
     ↓
Executes the function
\`\`\`

---

## 14. Important Rules

When defining a function:

- Specify the return type.
- Use a valid function name.
- Specify the required parameters.
- Place statements inside the function body.
- Use \`return\` when a value needs to be returned.
- Make sure the definition matches the declaration.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

---

## 15. Practical Example

A function can calculate the area of a rectangle.

\`\`\`c
#include <stdio.h>

int calculateArea(int length, int width)
{
    return length * width;
}

int main(void)
{
    int length = 10;
    int width = 5;
    int area;

    area = calculateArea(length, width);

    printf("Area = %d", area);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Area = 50
\`\`\`

---

## Lesson Summary

A **function definition** contains the actual implementation of a function.

General syntax:

\`\`\`c
return_type function_name(parameter_list)
{
    statements;
}
\`\`\`

A function definition can:

- Perform calculations.
- Process data.
- Display information.
- Accept parameters.
- Return values.
- Use local variables.

The important distinction is:

\`\`\`text
Declaration → Information about the function

Definition  → Actual implementation

Call        → Execution of the function
\`\`\`

---

# Module 4 Progress

✓ Lesson 1 — Introduction to Functions

✓ Lesson 2 — Need and Advantages of Functions

✓ Lesson 3 — Function Declaration

✓ Lesson 4 — Function Definition

→ Lesson 5 — Function Calling

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

Lesson 4 Complete

`,
};

export default lesson4;
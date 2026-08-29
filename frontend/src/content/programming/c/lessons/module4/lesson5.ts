const lesson5 = {
  id: "lesson5",

  title: "Function Calling",

  content: `

# Lesson 5: Function Calling

## Introduction

A **function call** is used to execute a function.

Defining a function does not execute it automatically. The function must be called from another part of the program.

Example:

\`\`\`c
void display(void)
{
    printf("Hello");
}
\`\`\`

The function can be executed using:

\`\`\`c
display();
\`\`\`

---

## 1. Basic Function Call

Example:

\`\`\`c
#include <stdio.h>

void display(void)
{
    printf("Welcome to C Programming");
}

int main(void)
{
    display();

    return 0;
}
\`\`\`

### Output

\`\`\`text
Welcome to C Programming
\`\`\`

The statement:

\`\`\`c
display();
\`\`\`

is the function call.

---

## 2. Function Call Flow

When a function is called, program control moves to that function.

After the function finishes, control returns to the calling code.

The flow is:

\`\`\`text
main()
   ↓
Function Call
   ↓
Function Executes
   ↓
Return to Calling Function
\`\`\`

---

## 3. Calling a Function With Arguments

Consider the function:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

It can be called as:

\`\`\`c
add(10, 20);
\`\`\`

The values are passed to the parameters:

\`\`\`text
10 → a
20 → b
\`\`\`

The function calculates:

\`\`\`text
10 + 20 = 30
\`\`\`

---

## 4. Storing the Returned Value

When a function returns a value, that value can be stored in a variable.

Example:

\`\`\`c
int result;

result = add(10, 20);
\`\`\`

After the function executes:

\`\`\`text
result = 30
\`\`\`

---

## 5. Complete Example

\`\`\`c
#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int main(void)
{
    int result;

    result = add(15, 25);

    printf("Sum = %d", result);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Sum = 40
\`\`\`

---

## 6. Calling a Function Multiple Times

A function can be called more than once.

Example:

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

The same function is reused three times.

---

## 7. Calling Different Functions

A program can call different functions.

Example:

\`\`\`c
#include <stdio.h>

void input(void)
{
    printf("Input\\n");
}

void process(void)
{
    printf("Processing\\n");
}

void output(void)
{
    printf("Output\\n");
}

int main(void)
{
    input();
    process();
    output();

    return 0;
}
\`\`\`

### Output

\`\`\`text
Input
Processing
Output
\`\`\`

The functions execute in the order in which they are called.

---

## 8. Calling a Function With Variables

Arguments can be variables instead of direct values.

Example:

\`\`\`c
#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int main(void)
{
    int x = 10;
    int y = 20;
    int result;

    result = add(x, y);

    printf("Result = %d", result);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Result = 30
\`\`\`

Here:

\`\`\`text
x → a
y → b
\`\`\`

---

## 9. Function Call in an Expression

A function that returns a value can be used inside an expression.

Example:

\`\`\`c
#include <stdio.h>

int square(int number)
{
    return number * number;
}

int main(void)
{
    int result;

    result = square(5) + square(3);

    printf("Result = %d", result);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Result = 34
\`\`\`

The function calls produce:

\`\`\`text
square(5) → 25
square(3) → 9
\`\`\`

Therefore:

\`\`\`text
25 + 9 = 34
\`\`\`

---

## 10. Calling a Function From Another Function

One function can call another function.

Example:

\`\`\`c
#include <stdio.h>

void second(void)
{
    printf("Second function\\n");
}

void first(void)
{
    printf("First function\\n");
    second();
}

int main(void)
{
    first();

    return 0;
}
\`\`\`

### Output

\`\`\`text
First function
Second function
\`\`\`

The execution flow is:

\`\`\`text
main()
   ↓
first()
   ↓
second()
   ↓
return to first()
   ↓
return to main()
\`\`\`

---

## 11. Calling Functions in Sequence

Functions can be called in a specific order.

Example:

\`\`\`c
readData();
calculate();
displayResult();
\`\`\`

The execution order is:

\`\`\`text
readData()
    ↓
calculate()
    ↓
displayResult()
\`\`\`

This is useful when dividing a large task into smaller tasks.

---

## 12. Function Call and Return Value

Consider:

\`\`\`c
int multiply(int a, int b)
{
    return a * b;
}
\`\`\`

The function can be called using:

\`\`\`c
int result = multiply(5, 4);
\`\`\`

The flow is:

\`\`\`text
main()
   ↓
multiply(5, 4)
   ↓
5 × 4
   ↓
20
   ↓
return 20
   ↓
result = 20
\`\`\`

---

## 13. Complete Program With Multiple Functions

\`\`\`c
#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int subtract(int a, int b)
{
    return a - b;
}

int main(void)
{
    int x = 20;
    int y = 5;

    printf("Sum = %d\\n", add(x, y));
    printf("Difference = %d\\n", subtract(x, y));

    return 0;
}
\`\`\`

### Output

\`\`\`text
Sum = 25
Difference = 15
\`\`\`

---

## 14. Common Mistakes

### Forgetting to Call the Function

Defining a function does not execute it.

Example:

\`\`\`c
void display(void)
{
    printf("Hello");
}
\`\`\`

The function must be called:

\`\`\`c
display();
\`\`\`

### Passing Incorrect Arguments

If a function expects two integer parameters:

\`\`\`c
int add(int a, int b);
\`\`\`

the call should provide appropriate arguments:

\`\`\`c
add(10, 20);
\`\`\`

### Ignoring a Needed Return Value

If a function returns a value that is needed by the program, the returned value should be used appropriately.

---

## 15. Important Points

The general form of a function call is:

\`\`\`c
function_name(arguments);
\`\`\`

For example:

\`\`\`c
display();
\`\`\`

or:

\`\`\`c
int result = add(10, 20);
\`\`\`

The general flow is:

\`\`\`text
Function Call
      ↓
Arguments Passed
      ↓
Function Executes
      ↓
Return Value
      ↓
Calling Code Continues
\`\`\`

---

## Lesson Summary

A **function call** is used to execute a function.

Functions can be called:

- From \`main()\`.
- From other functions.
- Multiple times.
- With direct values.
- With variables.
- As part of expressions.

For example:

\`\`\`c
int result = add(10, 20);
\`\`\`

calls \`add()\`, passes two arguments, receives the returned value, and stores it in \`result\`.

Understanding function calling is important before learning about parameters and arguments in greater detail.

---

# Module 4 Progress

✓ Lesson 1 — Introduction to Functions

✓ Lesson 2 — Need and Advantages of Functions

✓ Lesson 3 — Function Declaration

✓ Lesson 4 — Function Definition

✓ Lesson 5 — Function Calling

→ Lesson 6 — Parameters and Arguments

  Lesson 7 — Return Values

  Lesson 8 — Types of Functions

  Lesson 9 — Function Prototypes

  Lesson 10 — Passing Arguments to Functions

  Lesson 11 — Local and Global Variables

  Lesson 12 — Scope and Lifetime of Variables

  Lesson 13 — Recursive Functions

  Lesson 14 — Library Functions

  Lesson 15 — Mini Project — Calculator Using Functions

Lesson 5 Complete

`,
};

export default lesson5;
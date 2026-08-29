const lesson8 = {
  id: "lesson8",

  title: "Types of Functions",

  content: `

# Lesson 8: Types of Functions

## Introduction

Functions in C can be classified based on whether they accept arguments and whether they return a value.

A common classification gives four basic types:

\`\`\`text
Functions
    ↓
┌───────────────┬───────────────┐
│               │               │
No Arguments    Arguments
│               │
├───────┐       ├───────┐
│       │       │       │
No      Return  No      Return
Return  Value   Return  Value
\`\`\`

These four types help us understand how functions receive and return data.

---

## 1. No Arguments and No Return Value

This type of function:

- Does not accept arguments.
- Does not return a value.

Example:

\`\`\`c
void display(void)
{
    printf("Hello from C");
}
\`\`\`

Call:

\`\`\`c
display();
\`\`\`

### Complete Example

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

## 2. Arguments but No Return Value

This type of function:

- Accepts arguments.
- Does not return a value.

Example:

\`\`\`c
void displayNumber(int number)
{
    printf("Number = %d", number);
}
\`\`\`

Call:

\`\`\`c
displayNumber(25);
\`\`\`

### Complete Example

\`\`\`c
#include <stdio.h>

void displayNumber(int number)
{
    printf("Number = %d", number);
}

int main(void)
{
    displayNumber(25);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Number = 25
\`\`\`

---

## 3. No Arguments but Returns a Value

This type of function:

- Does not accept arguments.
- Returns a value.

Example:

\`\`\`c
int getNumber(void)
{
    return 100;
}
\`\`\`

Call:

\`\`\`c
int number = getNumber();
\`\`\`

### Complete Example

\`\`\`c
#include <stdio.h>

int getNumber(void)
{
    return 100;
}

int main(void)
{
    int number;

    number = getNumber();

    printf("Number = %d", number);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Number = 100
\`\`\`

---

## 4. Arguments and Return Value

This type of function:

- Accepts arguments.
- Returns a value.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

Call:

\`\`\`c
int result = add(10, 20);
\`\`\`

### Complete Example

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

    printf("Sum = %d", result);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Sum = 30
\`\`\`

---

## 5. Four Basic Types

The four common types can be summarized as:

### Type 1

\`\`\`text
No Arguments
No Return Value
\`\`\`

Example:

\`\`\`c
void display(void);
\`\`\`

### Type 2

\`\`\`text
Arguments
No Return Value
\`\`\`

Example:

\`\`\`c
void displayNumber(int number);
\`\`\`

### Type 3

\`\`\`text
No Arguments
Returns a Value
\`\`\`

Example:

\`\`\`c
int getNumber(void);
\`\`\`

### Type 4

\`\`\`text
Arguments
Returns a Value
\`\`\`

Example:

\`\`\`c
int add(int a, int b);
\`\`\`

---

## 6. Why Function Types Matter

Different problems require different ways of communicating with a function.

For example:

If a function only displays something:

\`\`\`c
void display(void);
\`\`\`

If a function needs input:

\`\`\`c
void displayNumber(int number);
\`\`\`

If a function needs to produce a value:

\`\`\`c
int getNumber(void);
\`\`\`

If it needs input and produces a result:

\`\`\`c
int add(int a, int b);
\`\`\`

---

## 7. Example: No Arguments, No Return

\`\`\`c
#include <stdio.h>

void welcome(void)
{
    printf("Welcome to C Programming");
}

int main(void)
{
    welcome();

    return 0;
}
\`\`\`

### Output

\`\`\`text
Welcome to C Programming
\`\`\`

---

## 8. Example: Arguments, No Return

\`\`\`c
#include <stdio.h>

void printSum(int a, int b)
{
    printf("Sum = %d", a + b);
}

int main(void)
{
    printSum(10, 20);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Sum = 30
\`\`\`

The function receives two arguments but does not return a value.

---

## 9. Example: No Arguments, Return Value

\`\`\`c
#include <stdio.h>

int getValue(void)
{
    return 50;
}

int main(void)
{
    int value;

    value = getValue();

    printf("Value = %d", value);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Value = 50
\`\`\`

---

## 10. Example: Arguments and Return Value

\`\`\`c
#include <stdio.h>

int multiply(int a, int b)
{
    return a * b;
}

int main(void)
{
    int result;

    result = multiply(6, 7);

    printf("Product = %d", result);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Product = 42
\`\`\`

---

## 11. Choosing a Function Type

The choice depends on what the function needs to do.

\`\`\`text
Does the function need input?
          ↓
      Yes / No
          ↓
Does it need to return a result?
          ↓
      Yes / No
\`\`\`

For example:

Display information:

\`\`\`text
No arguments + No return
\`\`\`

Display a supplied number:

\`\`\`text
Arguments + No return
\`\`\`

Generate a fixed value:

\`\`\`text
No arguments + Return value
\`\`\`

Calculate a result:

\`\`\`text
Arguments + Return value
\`\`\`

---

## 12. Functions Can Be Reused

Regardless of the type, functions allow code to be reused.

Example:

\`\`\`c
int square(int number)
{
    return number * number;
}
\`\`\`

It can be called several times:

\`\`\`c
square(2);
square(5);
square(10);
\`\`\`

The same function performs the same operation on different arguments.

---

## 13. Combining Different Function Types

A program can contain different types of functions.

Example:

\`\`\`c
#include <stdio.h>

void welcome(void)
{
    printf("Calculator\\n");
}

void displayResult(int result)
{
    printf("Result = %d\\n", result);
}

int add(int a, int b)
{
    return a + b;
}

int main(void)
{
    int result;

    welcome();

    result = add(10, 20);

    displayResult(result);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Calculator
Result = 30
\`\`\`

---

## 14. Important Points

Remember the four basic combinations:

\`\`\`text
1. No arguments + No return value

2. Arguments + No return value

3. No arguments + Return value

4. Arguments + Return value
\`\`\`

The function declaration and definition should correctly describe the parameters and return type.

---

## 15. Practical Example

A simple calculator can use functions.

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

    printf("Addition = %d\\n", add(x, y));
    printf("Subtraction = %d\\n", subtract(x, y));

    return 0;
}
\`\`\`

### Output

\`\`\`text
Addition = 25
Subtraction = 15
\`\`\`

---

## Lesson Summary

Functions can commonly be classified into four types based on arguments and return values:

1. **No arguments, no return value**
2. **Arguments, no return value**
3. **No arguments, returns a value**
4. **Arguments, returns a value**

Understanding these types helps you choose the correct function design for a particular problem.

The most commonly useful type is a function that accepts arguments and returns a value because it can receive data, process it, and send the result back to the caller.

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

→ Lesson 9 — Function Prototypes

  Lesson 10 — Passing Arguments to Functions

  Lesson 11 — Local and Global Variables

  Lesson 12 — Scope and Lifetime of Variables

  Lesson 13 — Recursive Functions

  Lesson 14 — Library Functions

  Lesson 15 — Mini Project — Calculator Using Functions

Lesson 8 Complete

`,
};

export default lesson8;
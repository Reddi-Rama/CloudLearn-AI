const lesson7 = {
  id: "lesson7",

  title: "Return Values",

  content: `

# Lesson 7: Return Values

## Introduction

A function can perform an operation and send a result back to the part of the program that called it.

This result is called a **return value**.

The \`return\` statement is used to send a value back from a function.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

When called:

\`\`\`c
int result = add(10, 20);
\`\`\`

the function returns \`30\`.

---

## 1. The return Statement

The basic form is:

\`\`\`c
return expression;
\`\`\`

Example:

\`\`\`c
return a + b;
\`\`\`

The expression is evaluated and its value is returned to the caller.

---

## 2. Function Returning an Integer

Example:

\`\`\`c
int square(int number)
{
    return number * number;
}
\`\`\`

Call:

\`\`\`c
int result = square(5);
\`\`\`

The function returns:

\`\`\`text
25
\`\`\`

---

## 3. Complete Example

\`\`\`c
#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int main(void)
{
    int result;

    result = add(20, 30);

    printf("Result = %d", result);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Result = 50
\`\`\`

---

## 4. Return Value Stored in a Variable

A returned value can be stored in a variable.

Example:

\`\`\`c
int result = add(10, 15);
\`\`\`

The execution is:

\`\`\`text
add(10, 15)
     ↓
10 + 15
     ↓
25
     ↓
result = 25
\`\`\`

---

## 5. Return Value Used Directly

The returned value does not always have to be stored.

It can be used directly.

Example:

\`\`\`c
printf("Sum = %d", add(10, 20));
\`\`\`

The function returns \`30\`, which is then passed to \`printf()\`.

---

## 6. Returning Different Data Types

Functions can return different types of values.

### Integer

\`\`\`c
int getNumber(void)
{
    return 10;
}
\`\`\`

### Floating-Point Value

\`\`\`c
float getPrice(void)
{
    return 25.5f;
}
\`\`\`

### Character

\`\`\`c
char getGrade(void)
{
    return 'A';
}
\`\`\`

The return type of the function must match the kind of value being returned.

---

## 7. void Functions

A function with a \`void\` return type does not return a value.

Example:

\`\`\`c
void display(void)
{
    printf("Hello");
}
\`\`\`

The function is called as:

\`\`\`c
display();
\`\`\`

There is no returned value to store.

---

## 8. Returning From a void Function

A \`void\` function can use \`return;\` to end its execution early.

Example:

\`\`\`c
void checkNumber(int number)
{
    if (number < 0)
    {
        return;
    }

    printf("Positive number");
}
\`\`\`

Here, \`return;\` exits the function without returning a value.

---

## 9. Returning a Value From Different Conditions

A function can return different values depending on a condition.

Example:

\`\`\`c
int maximum(int a, int b)
{
    if (a > b)
    {
        return a;
    }

    return b;
}
\`\`\`

If:

\`\`\`text
a = 30
b = 20
\`\`\`

the function returns:

\`\`\`text
30
\`\`\`

---

## 10. Returning an Expression

The return statement can contain an expression.

Example:

\`\`\`c
int calculate(int a, int b)
{
    return (a * b) + 10;
}
\`\`\`

Call:

\`\`\`c
int result = calculate(5, 4);
\`\`\`

Calculation:

\`\`\`text
5 × 4 + 10
= 20 + 10
= 30
\`\`\`

---

## 11. Returning a Character

A function can return a character.

Example:

\`\`\`c
char getGrade(int marks)
{
    if (marks >= 90)
    {
        return 'A';
    }

    return 'B';
}
\`\`\`

Call:

\`\`\`c
char grade = getGrade(95);
\`\`\`

The returned value is:

\`\`\`text
A
\`\`\`

---

## 12. Returning a Floating-Point Value

Example:

\`\`\`c
float average(float a, float b)
{
    return (a + b) / 2.0f;
}
\`\`\`

Call:

\`\`\`c
float result = average(80.0f, 90.0f);
\`\`\`

The result is:

\`\`\`text
85.00
\`\`\`

---

## 13. Function Return Flow

The flow of a function returning a value is:

\`\`\`text
Function Call
      ↓
Arguments Passed
      ↓
Function Executes
      ↓
return Statement
      ↓
Value Sent Back
      ↓
Calling Code Receives Value
\`\`\`

Example:

\`\`\`c
int result = square(6);
\`\`\`

Flow:

\`\`\`text
square(6)
   ↓
6 × 6
   ↓
36
   ↓
result = 36
\`\`\`

---

## 14. Important Rules

When using return values:

- The function's return type should be appropriate for the returned value.
- A non-\`void\` function should return an appropriate value.
- The returned value can be stored, printed, or used in an expression.
- A \`void\` function does not return a value.
- \`return;\` can be used to exit a \`void\` function early.

---

## 15. Complete Example

\`\`\`c
#include <stdio.h>

float calculateAverage(float a, float b, float c)
{
    return (a + b + c) / 3.0f;
}

int main(void)
{
    float average;

    average = calculateAverage(80.0f, 90.0f, 85.0f);

    printf("Average = %.2f", average);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Average = 85.00
\`\`\`

---

## Lesson Summary

A **return value** is the value sent from a function back to the calling code.

Example:

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

The function returns \`30\`.

Functions can return values of different types, including:

- \`int\`
- \`float\`
- \`double\`
- \`char\`

A \`void\` function does not return a value.

---

# Module 4 Progress

✓ Lesson 1 — Introduction to Functions

✓ Lesson 2 — Need and Advantages of Functions

✓ Lesson 3 — Function Declaration

✓ Lesson 4 — Function Definition

✓ Lesson 5 — Function Calling

✓ Lesson 6 — Parameters and Arguments

✓ Lesson 7 — Return Values

→ Lesson 8 — Types of Functions

  Lesson 9 — Function Prototypes

  Lesson 10 — Passing Arguments to Functions

  Lesson 11 — Local and Global Variables

  Lesson 12 — Scope and Lifetime of Variables

  Lesson 13 — Recursive Functions

  Lesson 14 — Library Functions

  Lesson 15 — Mini Project — Calculator Using Functions

Lesson 7 Complete

`,
};

export default lesson7;
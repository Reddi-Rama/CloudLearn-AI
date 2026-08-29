const lesson9 = {
  id: "lesson9",

  title: "Arithmetic Operators",

  content: `

# Lesson 9: Arithmetic Operators

## Introduction

Arithmetic operations are at the heart of many C programs.

A program may need to:

- Add values
- Subtract values
- Multiply values
- Divide values
- Find a remainder

C provides arithmetic operators to perform these operations.

The basic arithmetic operators are:

\`\`\`text
+    Addition
-    Subtraction
*    Multiplication
/    Division
%    Remainder
\`\`\`

These operators can be used with arithmetic data types.

---

# 1. Addition Operator +

The + operator is used to add two values.

Example:

\`\`\`c
int a = 10;
int b = 20;
int result = a + b;
\`\`\`

The result is:

\`\`\`text
30
\`\`\`

The + operator can also be used with floating-point values:

\`\`\`c
double a = 10.5;
double b = 2.5;
double result = a + b;
\`\`\`

The result is:

\`\`\`text
13.0
\`\`\`

---

# 2. Subtraction Operator -

The - operator subtracts one value from another.

Example:

\`\`\`c
int a = 20;
int b = 8;
int result = a - b;
\`\`\`

Result:

\`\`\`text
12
\`\`\`

It can also produce a negative result:

\`\`\`c
int result = 8 - 20;
\`\`\`

Result:

\`\`\`text
-12
\`\`\`

---

# 3. Multiplication Operator *

The * operator performs multiplication.

Example:

\`\`\`c
int price = 100;
int quantity = 5;
int total = price * quantity;
\`\`\`

Result:

\`\`\`text
500
\`\`\`

Floating-point multiplication is also possible:

\`\`\`c
double length = 5.5;
double width = 2.0;
double area = length * width;
\`\`\`

Result:

\`\`\`text
11.0
\`\`\`

---

# 4. Division Operator /

The / operator performs division.

Example:

\`\`\`c
int a = 20;
int b = 5;
int result = a / b;
\`\`\`

Result:

\`\`\`text
4
\`\`\`

However, the result depends on the types of the operands.

---

# 5. Integer Division

When both operands are integers, C performs integer division.

For example:

\`\`\`c
int result = 10 / 3;
\`\`\`

Result:

\`\`\`text
3
\`\`\`

The fractional part is discarded.

Another example:

\`\`\`c
int result = 7 / 2;
\`\`\`

Result:

\`\`\`text
3
\`\`\`

It does not produce 3.5.

---

# 6. Floating-Point Division

If at least one operand is a floating-point value, the calculation can produce a fractional result.

For example:

\`\`\`c
double result = 10.0 / 3;
\`\`\`

Result:

\`\`\`text
3.333333...
\`\`\`

Similarly:

\`\`\`c
double result = (double)10 / 3;
\`\`\`

produces a floating-point result.

This connects directly with the type-casting lesson.

---

# 7. Remainder Operator %

The % operator calculates the remainder of integer division.

For example:

\`\`\`c
int result = 10 % 3;
\`\`\`

The result is:

\`\`\`text
1
\`\`\`

because:

\`\`\`text
10 ÷ 3 = 3 remainder 1
\`\`\`

Another example:

\`\`\`c
int result = 20 % 5;
\`\`\`

Result:

\`\`\`text
0
\`\`\`

The remainder operator requires integer operands.

---

# 8. Practical Uses of %

The remainder operator is useful for checking whether a number is even or odd.

For example:

\`\`\`c
int number = 10;

if (number % 2 == 0)
{
    printf("Even");
}
\`\`\`

If:

\`\`\`text
number % 2
\`\`\`

is 0, the number is divisible by 2.

For an odd number:

\`\`\`text
11 % 2 = 1
\`\`\`

This technique is commonly used in programming.

---

# 9. Arithmetic Expressions

Multiple arithmetic operators can be used in one expression.

For example:

\`\`\`c
int result = 10 + 5 * 2;
\`\`\`

The multiplication is performed before addition according to operator precedence.

Therefore:

\`\`\`text
5 × 2 = 10

10 + 10 = 20
\`\`\`

So:

\`\`\`text
result = 20
\`\`\`

---

# 10. Using Parentheses

Parentheses can be used to control the order of evaluation.

For example:

\`\`\`c
int result = (10 + 5) * 2;
\`\`\`

First:

\`\`\`text
10 + 5 = 15
\`\`\`

Then:

\`\`\`text
15 × 2 = 30
\`\`\`

Therefore:

\`\`\`text
result = 30
\`\`\`

Compare:

\`\`\`c
10 + 5 * 2
\`\`\`

with:

\`\`\`c
(10 + 5) * 2
\`\`\`

They produce different results.

---

# 11. Combining Arithmetic Operators

Consider:

\`\`\`c
int a = 20;
int b = 5;
int c = 2;

int result = a + b * c;
\`\`\`

According to operator precedence:

\`\`\`text
b * c
 ↓
5 × 2
 ↓
10

a + 10
 ↓
20 + 10
 ↓
30
\`\`\`

Therefore:

\`\`\`text
result = 30
\`\`\`

---

# 12. Negative Values

The subtraction operator can produce negative values.

For example:

\`\`\`c
int balance = 500;
int expense = 700;
int remaining = balance - expense;
\`\`\`

Result:

\`\`\`text
-200
\`\`\`

Signed integer types can represent negative values.

---

# 13. Arithmetic With Variables

Arithmetic operators become useful when variables are involved.

Example:

\`\`\`c
int length = 10;
int width = 5;
int area = length * width;
\`\`\`

Result:

\`\`\`text
50
\`\`\`

Another example:

\`\`\`c
int marks1 = 80;
int marks2 = 90;
int marks3 = 70;

int total = marks1 + marks2 + marks3;
\`\`\`

Result:

\`\`\`text
240
\`\`\`

---

# 14. Arithmetic With Floating-Point Values

Example:

\`\`\`c
double price = 99.50;
double tax = 10.50;
double total = price + tax;
\`\`\`

Result:

\`\`\`text
110.00
\`\`\`

Another example:

\`\`\`c
double distance = 150.0;
double time = 3.0;
double speed = distance / time;
\`\`\`

Result:

\`\`\`text
50.0
\`\`\`

---

# 15. Arithmetic and Data Types

The data type of an expression affects its result.

Compare:

\`\`\`c
int result1 = 10 / 4;
\`\`\`

with:

\`\`\`c
double result2 = 10.0 / 4;
\`\`\`

Results:

\`\`\`text
result1 = 2
result2 = 2.5
\`\`\`

The operators are the same, but the operand types are different.

---

# 16. Arithmetic Assignment

Arithmetic can be combined with assignment.

For example:

\`\`\`c
int number = 10;

number = number + 5;
\`\`\`

After execution:

\`\`\`text
number = 15
\`\`\`

Similarly:

\`\`\`c
number = number - 3;
\`\`\`

gives:

\`\`\`text
number = 12
\`\`\`

The shorthand forms of these operations will be covered when we study assignment operators.

---

# 17. Division by Zero

Division by zero must be avoided.

For example:

\`\`\`c
int a = 10;
int b = 0;
int result = a / b;
\`\`\`

This is not a valid integer division operation and results in undefined behavior.

Therefore, programs should check the divisor before performing a division when it may be zero.

For example:

\`\`\`c
if (b != 0)
{
    result = a / b;
}
\`\`\`

---

# 18. Remainder by Zero

The same caution applies to %.

This is invalid:

\`\`\`c
int result = 10 % 0;
\`\`\`

The divisor must not be zero.

---

# 19. Arithmetic Expression Example

Consider:

\`\`\`c
int a = 10;
int b = 3;

int sum = a + b;
int difference = a - b;
int product = a * b;
int quotient = a / b;
int remainder = a % b;
\`\`\`

The results are:

\`\`\`text
sum        = 13
difference = 7
product    = 30
quotient   = 3
remainder  = 1
\`\`\`

This example demonstrates all five basic arithmetic operators.

---

# 20. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 20;
    int b = 6;

    printf("Addition = %d\\n", a + b);
    printf("Subtraction = %d\\n", a - b);
    printf("Multiplication = %d\\n", a * b);
    printf("Division = %d\\n", a / b);
    printf("Remainder = %d\\n", a % b);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Addition = 26
Subtraction = 14
Multiplication = 120
Division = 3
Remainder = 2
\`\`\`

---

# 21. Arithmetic Operator Summary

| Operator | Operation | Example | Result |
| --- | --- | --- | --- |
| + | Addition | 10 + 5 | 15 |
| - | Subtraction | 10 - 5 | 5 |
| * | Multiplication | 10 * 5 | 50 |
| / | Division | 10 / 5 | 2 |
| % | Remainder | 10 % 3 | 1 |

---

# Common Beginner Mistakes

## Mistake 1 — Expecting Decimal Integer Division

\`\`\`c
int result = 5 / 2;
\`\`\`

Result:

\`\`\`text
2
\`\`\`

not:

\`\`\`text
2.5
\`\`\`

---

## Mistake 2 — Dividing by Zero

Avoid:

\`\`\`c
result = number / 0;
\`\`\`

Always ensure the divisor is not zero.

---

## Mistake 3 — Using % With Floating-Point Values

The % operator is for integer operands.

For floating-point remainder calculations, the standard library provides functions such as \`fmod()\`.

---

## Mistake 4 — Ignoring Operator Precedence

Remember:

\`\`\`c
10 + 5 * 2
\`\`\`

is evaluated as:

\`\`\`c
10 + (5 * 2)
\`\`\`

not:

\`\`\`c
(10 + 5) * 2
\`\`\`

Use parentheses when you want the order to be explicit.

---

# Lesson Summary

In this lesson, you learned the five basic arithmetic operators in C:

\`\`\`text
+    Addition
-    Subtraction
*    Multiplication
/    Division
%    Remainder
\`\`\`

You also learned:

- Integer division discards the fractional part.
- Floating-point division can produce fractional results.
- % gives the remainder of integer division.
- Parentheses can change the order of evaluation.
- Arithmetic operators can work with variables and expressions.
- Division by zero must be avoided.
- The types of operands affect the result of arithmetic operations.
- Operator precedence determines the order in which arithmetic expressions are evaluated.

The basic pattern is:

\`\`\`text
Operands
   ↓
Arithmetic Operator
   ↓
Expression
   ↓
Result
\`\`\`

For example:

\`\`\`c
int total = price * quantity;
\`\`\`

---

# Module 2 Progress

✓ Module 1 — C Fundamentals Complete

✓ Lesson 1 — Primitive Data Types
✓ Lesson 2 — Non-Primitive Data Types
✓ Lesson 3 — Variables
✓ Lesson 4 — Variable Scope
✓ Lesson 5 — Constants
✓ Lesson 6 — Literals
✓ Lesson 7 — Type Conversion
✓ Lesson 8 — Type Casting
→ Lesson 9 — Arithmetic Operators
  Lesson 10 — Relational Operators
  Lesson 11 — Logical Operators
  Lesson 12 — Assignment Operators
  Lesson 13 — Unary Operators
  Lesson 14 — Bitwise Operators
  Lesson 15 — Operator Precedence

Lesson 9 Complete

Next: Lesson 10 — Relational Operators.

`,
};

export default lesson9;
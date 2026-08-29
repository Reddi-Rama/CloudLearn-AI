const lesson12 = {
  id: "lesson12",

  title: "Assignment Operators",

  content: `

# Lesson 12: Assignment Operators

## Introduction

In C programming, we frequently need to **store values in variables and update those values**.

For example:

\`\`\`c
int marks = 80;
\`\`\`

The = operator assigns the value 80 to marks.

C also provides shorthand assignment operators that combine an arithmetic or bitwise operation with assignment.

The main assignment operators are:

\`\`\`text
=       Simple assignment
+=      Addition assignment
-=      Subtraction assignment
*=      Multiplication assignment
/=      Division assignment
%=      Remainder assignment
\`\`\`

Bitwise assignment operators will be discussed along with bitwise operations.

---

# 1. Simple Assignment =

The = operator assigns the value on the right to the object on the left.

Example:

\`\`\`c
int number = 10;
\`\`\`

Here:

\`\`\`text
number
   ↓
10
\`\`\`

The value of number can later be changed:

\`\`\`c
number = 25;
\`\`\`

Now:

\`\`\`text
number = 25
\`\`\`

---

# 2. Assignment From Another Variable

One variable can be assigned to another.

\`\`\`c
int first = 20;
int second;

second = first;
\`\`\`

Now:

\`\`\`text
first  = 20
second = 20
\`\`\`

The value is copied to second.

Changing first later does not automatically change second.

---

# 3. Addition Assignment +=

The += operator adds a value to an existing variable.

For example:

\`\`\`c
int number = 10;

number += 5;
\`\`\`

This is equivalent to:

\`\`\`c
number = number + 5;
\`\`\`

The final value is:

\`\`\`text
number = 15
\`\`\`

---

# 4. Subtraction Assignment -=

The -= operator subtracts a value from a variable.

Example:

\`\`\`c
int number = 20;

number -= 5;
\`\`\`

Equivalent to:

\`\`\`c
number = number - 5;
\`\`\`

Result:

\`\`\`text
number = 15
\`\`\`

---

# 5. Multiplication Assignment *=

The *= operator multiplies the current value by another value.

Example:

\`\`\`c
int number = 10;

number *= 3;
\`\`\`

Equivalent to:

\`\`\`c
number = number * 3;
\`\`\`

Result:

\`\`\`text
number = 30
\`\`\`

---

# 6. Division Assignment /=

The /= operator divides a variable by another value.

Example:

\`\`\`c
int number = 20;

number /= 4;
\`\`\`

Equivalent to:

\`\`\`c
number = number / 4;
\`\`\`

Result:

\`\`\`text
number = 5
\`\`\`

Remember that if the operands are integers, integer division is performed.

For example:

\`\`\`c
int number = 10;

number /= 3;
\`\`\`

results in:

\`\`\`text
number = 3
\`\`\`

---

# 7. Remainder Assignment %=

The %= operator calculates the remainder and stores it back in the variable.

Example:

\`\`\`c
int number = 10;

number %= 3;
\`\`\`

Equivalent to:

\`\`\`c
number = number % 3;
\`\`\`

Result:

\`\`\`text
number = 1
\`\`\`

The divisor must not be zero.

---

# 8. Assignment Operators With Variables

Assignment operators are especially useful when repeatedly updating values.

Example:

\`\`\`c
int score = 50;

score += 10;
score -= 5;
score *= 2;
score /= 5;
\`\`\`

Each operation updates the current value of score.

This is useful in calculations, counters, totals, and loops.

---

# 9. Assignment Operators in Programs

Consider a shopping calculation:

\`\`\`c
int total = 100;

total += 50;
total += 25;
\`\`\`

The final value is:

\`\`\`text
total = 175
\`\`\`

Instead of repeatedly writing:

\`\`\`c
total = total + 50;
total = total + 25;
\`\`\`

the shorthand form is easier to read.

---

# 10. Assignment Is an Expression

An important feature of C is that an assignment itself is an expression and has a value.

For example:

\`\`\`c
int a;
int b;

a = b = 10;
\`\`\`

The assignment is evaluated from right to left:

\`\`\`text
b = 10
   ↓
a = 10
\`\`\`

Therefore both variables contain 10.

This is possible because the assignment expression has the value assigned.

---

# 11. Chained Assignment

You can write:

\`\`\`c
int a, b, c;

a = b = c = 100;
\`\`\`

The assignments occur from right to left:

\`\`\`text
c = 100
 ↓
b = 100
 ↓
a = 100
\`\`\`

All three variables become 100.

Although this is valid C, separate assignments can sometimes be clearer in more complicated code.

---

# 12. Assignment and Data Types

Assignment can also involve type conversion.

For example:

\`\`\`c
double value;
int number = 10;

value = number;
\`\`\`

The integer value is converted to double.

Similarly:

\`\`\`c
double value = 10.75;
int number;

number = value;
\`\`\`

The floating-point value is converted to int, so the fractional part is discarded.

---

# 13. Assignment Operators Summary

| Operator | Meaning | Equivalent |
| --- | --- | --- |
| = | Assignment | a = b |
| += | Add and assign | a = a + b |
| -= | Subtract and assign | a = a - b |
| *= | Multiply and assign | a = a * b |
| /= | Divide and assign | a = a / b |
| %= | Remainder and assign | a = a % b |

---

# 14. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 20;

    printf("Initial = %d\\n", number);

    number += 10;
    printf("After += = %d\\n", number);

    number -= 5;
    printf("After -= = %d\\n", number);

    number *= 2;
    printf("After *= = %d\\n", number);

    number /= 5;
    printf("After /= = %d\\n", number);

    number %= 3;
    printf("After %%= = %d\\n", number);

    return 0;
}
\`\`\`

The program demonstrates how each assignment operator modifies the current value.

---

# Common Beginner Mistakes

## Mistake 1 — Confusing = and ==

Remember:

\`\`\`text
=   → assignment
==  → equality comparison
\`\`\`

For example:

\`\`\`c
number = 10;
\`\`\`

assigns a value.

\`\`\`c
number == 10
\`\`\`

checks equality.

---

## Mistake 2 — Forgetting the Existing Value

\`\`\`c
number += 5;
\`\`\`

means:

\`\`\`c
number = number + 5;
\`\`\`

It does not simply assign 5.

---

## Mistake 3 — Division by Zero

Avoid:

\`\`\`c
number /= 0;
\`\`\`

The divisor must not be zero.

---

# Lesson Summary

Assignment operators allow variables to be assigned and updated efficiently.

The main operators are:

\`\`\`text
=       Assignment
+=      Addition assignment
-=      Subtraction assignment
*=      Multiplication assignment
/=      Division assignment
%=      Remainder assignment
\`\`\`

The key idea is:

\`\`\`text
a += b
\`\`\`

means:

\`\`\`text
a = a + b
\`\`\`

and similarly for the other compound assignment operators.

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
✓ Lesson 9 — Arithmetic Operators
✓ Lesson 10 — Relational Operators
✓ Lesson 11 — Logical Operators
→ Lesson 12 — Assignment Operators
  Lesson 13 — Unary Operators
  Lesson 14 — Bitwise Operators
  Lesson 15 — Operator Precedence

Lesson 12 Complete

Next: Lesson 13 — Unary Operators.

`,
};

export default lesson12;
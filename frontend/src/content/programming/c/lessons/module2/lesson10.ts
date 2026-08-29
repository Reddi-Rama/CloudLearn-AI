const lesson10 = {
  id: "lesson10",

  title: "Relational Operators",

  content: `

# Lesson 10: Relational Operators

## Introduction

In programming, we often need to **compare two values**.

For example:

- Is one number greater than another?
- Are two values equal?
- Is a student's mark less than the pass mark?

C provides **relational operators** for performing these comparisons.

The result of a relational expression is an integer value:

\`\`\`text
1 → condition is true
0 → condition is false
\`\`\`

The main relational operators are:

\`\`\`text
>     Greater than
<     Less than
>=    Greater than or equal to
<=    Less than or equal to
==    Equal to
!=    Not equal to
\`\`\`

---

# 1. Greater Than >

The > operator checks whether the left operand is greater than the right operand.

Example:

\`\`\`c
int a = 20;
int b = 10;

printf("%d\\n", a > b);
\`\`\`

Output:

\`\`\`text
1
\`\`\`

Because:

\`\`\`text
20 > 10
\`\`\`

is true.

If:

\`\`\`c
printf("%d\\n", 10 > 20);
\`\`\`

the result is:

\`\`\`text
0
\`\`\`

because the condition is false.

---

# 2. Less Than <

The < operator checks whether the left operand is less than the right operand.

Example:

\`\`\`c
int a = 10;
int b = 20;

printf("%d\\n", a < b);
\`\`\`

Output:

\`\`\`text
1
\`\`\`

because:

\`\`\`text
10 < 20
\`\`\`

is true.

---

# 3. Greater Than or Equal To >=

The >= operator checks whether the left operand is greater than or equal to the right operand.

Example:

\`\`\`c
int marks = 75;

printf("%d\\n", marks >= 40);
\`\`\`

Output:

\`\`\`text
1
\`\`\`

because:

\`\`\`text
75 >= 40
\`\`\`

is true.

It also returns true when the values are equal:

\`\`\`c
printf("%d\\n", 40 >= 40);
\`\`\`

Output:

\`\`\`text
1
\`\`\`

---

# 4. Less Than or Equal To <=

The <= operator checks whether the left operand is less than or equal to the right operand.

Example:

\`\`\`c
int age = 15;

printf("%d\\n", age <= 18);
\`\`\`

Output:

\`\`\`text
1
\`\`\`

because:

\`\`\`text
15 <= 18
\`\`\`

is true.

Equality also satisfies the condition:

\`\`\`c
printf("%d\\n", 18 <= 18);
\`\`\`

Output:

\`\`\`text
1
\`\`\`

---

# 5. Equal To ==

The == operator checks whether two operands are equal.

Example:

\`\`\`c
int a = 10;
int b = 10;

printf("%d\\n", a == b);
\`\`\`

Output:

\`\`\`text
1
\`\`\`

because both values are equal.

If:

\`\`\`c
int a = 10;
int b = 20;

printf("%d\\n", a == b);
\`\`\`

the result is:

\`\`\`text
0
\`\`\`

---

# 6. Not Equal To !=

The != operator checks whether two operands have different values.

Example:

\`\`\`c
int a = 10;
int b = 20;

printf("%d\\n", a != b);
\`\`\`

Output:

\`\`\`text
1
\`\`\`

because:

\`\`\`text
10 != 20
\`\`\`

is true.

If:

\`\`\`c
printf("%d\\n", 10 != 10);
\`\`\`

the result is:

\`\`\`text
0
\`\`\`

---

# 7. Relational Operators With Variables

Relational operators are commonly used with variables.

Example:

\`\`\`c
int age = 20;

if (age >= 18)
{
    printf("Eligible\\n");
}
\`\`\`

The expression:

\`\`\`text
age >= 18
\`\`\`

is evaluated first.

Since age is 20:

\`\`\`text
20 >= 18
\`\`\`

is true.

---

# 8. Relational Operators With Floating-Point Values

Relational operators can also compare floating-point values.

Example:

\`\`\`c
double price = 99.50;

if (price > 50.0)
{
    printf("Price is high\\n");
}
\`\`\`

The comparison:

\`\`\`text
99.50 > 50.0
\`\`\`

is true.

However, direct equality comparisons between floating-point calculations should be used carefully because floating-point representation can introduce small differences.

---

# 9. Relational Operators With Characters

Characters can also be compared.

For example:

\`\`\`c
char grade = 'A';

if (grade == 'A')
{
    printf("Excellent\\n");
}
\`\`\`

The comparison uses the character values represented by the execution character set.

---

# 10. Relational Operators in if

One of the most common uses of relational operators is decision-making.

Example:

\`\`\`c
int marks = 75;

if (marks >= 40)
{
    printf("Pass\\n");
}
\`\`\`

The relational expression:

\`\`\`text
marks >= 40
\`\`\`

determines whether the statement inside the if block executes.

---

# 11. Relational Operators in Loops

Relational operators are also used in loops.

For example:

\`\`\`c
int i;

for (i = 1; i <= 5; i++)
{
    printf("%d\\n", i);
}
\`\`\`

The condition:

\`\`\`text
i <= 5
\`\`\`

is checked repeatedly.

The loop continues while the condition is true.

---

# 12. Relational Operator Table

| Operator | Meaning | Example | Result |
| --- | --- | --- | --- |
| > | Greater than | 10 > 5 | 1 |
| < | Less than | 5 < 10 | 1 |
| >= | Greater than or equal | 10 >= 10 | 1 |
| <= | Less than or equal | 5 <= 10 | 1 |
| == | Equal to | 10 == 10 | 1 |
| != | Not equal to | 10 != 5 | 1 |

---

# 13. = vs ==

This is one of the most important distinctions for beginners.

The operator:

\`\`\`c
=
\`\`\`

is the **assignment operator**.

Example:

\`\`\`c
int number = 10;
\`\`\`

It assigns 10 to number.

The operator:

\`\`\`c
==
\`\`\`

is the **equality operator**.

Example:

\`\`\`c
if (number == 10)
{
    printf("Number is 10\\n");
}
\`\`\`

It checks whether number is equal to 10.

Remember:

\`\`\`text
=   → assignment
==  → comparison
\`\`\`

---

# 14. Relational Expressions

A relational expression compares values.

For example:

\`\`\`c
a > b
\`\`\`

The expression produces:

\`\`\`text
1 → true
0 → false
\`\`\`

Example:

\`\`\`c
int a = 15;
int b = 20;

int result = a < b;
\`\`\`

Now:

\`\`\`text
result = 1
\`\`\`

because 15 < 20.

---

# 15. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 20;
    int b = 10;

    printf("a > b  = %d\\n", a > b);
    printf("a < b  = %d\\n", a < b);
    printf("a >= b = %d\\n", a >= b);
    printf("a <= b = %d\\n", a <= b);
    printf("a == b = %d\\n", a == b);
    printf("a != b = %d\\n", a != b);

    return 0;
}
\`\`\`

Output:

\`\`\`text
a > b  = 1
a < b  = 0
a >= b = 1
a <= b = 0
a == b = 0
a != b = 1
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Using = Instead of ==

Incorrect when testing equality:

\`\`\`c
if (age = 18)
\`\`\`

This performs an assignment.

Correct:

\`\`\`c
if (age == 18)
\`\`\`

---

## Mistake 2 — Confusing >= With >

These are different:

\`\`\`text
>   → strictly greater
>=  → greater or equal
\`\`\`

For example:

\`\`\`text
40 > 40   → false
40 >= 40  → true
\`\`\`

---

## Mistake 3 — Confusing <= With <

Similarly:

\`\`\`text
<   → strictly less
<=  → less or equal
\`\`\`

---

# Lesson Summary

In this lesson, you learned the six relational operators:

\`\`\`text
>     Greater than
<     Less than
>=    Greater than or equal to
<=    Less than or equal to
==    Equal to
!=    Not equal to
\`\`\`

They are used to compare values.

The result of a comparison is:

\`\`\`text
1 → true
0 → false
\`\`\`

Relational operators are especially important in:

- if statements
- loops
- decision-making
- logical expressions

The most important distinction to remember is:

\`\`\`text
=   → assignment
==  → equality comparison
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
✓ Lesson 9 — Arithmetic Operators
→ Lesson 10 — Relational Operators
  Lesson 11 — Logical Operators
  Lesson 12 — Assignment Operators
  Lesson 13 — Unary Operators
  Lesson 14 — Bitwise Operators
  Lesson 15 — Operator Precedence

Lesson 10 Complete

Next: Lesson 11 — Logical Operators.

`,
};

export default lesson10;
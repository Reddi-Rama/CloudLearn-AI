const lesson11 = {
  id: "lesson11",

  title: "Logical Operators",

  content: `

# Lesson 11: Logical Operators

## Introduction

Relational operators allow us to compare two values.

But many programming problems require **more than one condition**.

For example:

A student must have marks >= 40 AND attendance >= 75.

A user can continue if age >= 18 OR permission == true.

A condition may need to be reversed.

C provides **logical operators** to combine or modify conditions.

The three logical operators are:

\`\`\`text
&&    Logical AND
||    Logical OR
!     Logical NOT
\`\`\`

They are mainly used with conditions and expressions that produce true or false results.

---

# 1. Logical AND &&

The && operator returns true only when **both operands are true**.

Example:

\`\`\`c
int age = 20;
int marks = 75;

if (age >= 18 && marks >= 40)
{
    printf("Conditions satisfied\\n");
}
\`\`\`

Both conditions are true:

\`\`\`text
age >= 18
    ↓
true

marks >= 40
    ↓
true
\`\`\`

Therefore:

\`\`\`text
true && true
      ↓
     true
\`\`\`

---

# 2. AND Truth Table

The truth table for && is:

| A | B | A && B |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

The important rule is:

\`\`\`text
AND
 ↓
Both conditions must be true
\`\`\`

---

# 3. Logical OR ||

The || operator returns true when **at least one operand is true**.

Example:

\`\`\`c
int day = 6;

if (day == 6 || day == 7)
{
    printf("Weekend\\n");
}
\`\`\`

The first condition:

\`\`\`text
day == 6
\`\`\`

is true.

Therefore the entire expression is true.

---

# 4. OR Truth Table

The truth table for || is:

| A | B | A || B |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

The important rule is:

\`\`\`text
OR
 ↓
At least one condition must be true
\`\`\`

---

# 5. Logical NOT !

The ! operator reverses the logical value of an expression.

For example:

\`\`\`c
int result = 1;

printf("%d\\n", !result);
\`\`\`

Output:

\`\`\`text
0
\`\`\`

Because:

\`\`\`text
1 → true

!true → false
\`\`\`

Similarly:

\`\`\`c
printf("%d\\n", !0);
\`\`\`

produces:

\`\`\`text
1
\`\`\`

because:

\`\`\`text
0 → false

!false → true
\`\`\`

---

# 6. NOT Truth Table

The truth table for ! is:

| A | !A |
| --- | --- |
| 0 | 1 |
| 1 | 0 |

The rule is:

\`\`\`text
!
 ↓
Reverses the logical result
\`\`\`

---

# 7. Combining Relational and Logical Operators

Logical operators are commonly combined with relational operators.

For example:

\`\`\`c
int age = 20;
int marks = 80;

if (age >= 18 && marks >= 40)
{
    printf("Eligible\\n");
}
\`\`\`

Here:

\`\`\`text
age >= 18
\`\`\`

is one relational expression.

And:

\`\`\`text
marks >= 40
\`\`\`

is another.

The && operator combines them.

---

# 8. Multiple Conditions With AND

Consider:

\`\`\`c
int marks = 85;
int attendance = 80;

if (marks >= 40 && attendance >= 75)
{
    printf("Student passed\\n");
}
\`\`\`

Both conditions must be true:

\`\`\`text
marks >= 40
attendance >= 75
\`\`\`

Since both are true, the statement executes.

---

# 9. Multiple Conditions With OR

Consider:

\`\`\`c
int day = 7;

if (day == 6 || day == 7)
{
    printf("Weekend\\n");
}
\`\`\`

Only one condition needs to be true.

Here:

\`\`\`text
day == 6 → false

day == 7 → true
\`\`\`

Therefore:

\`\`\`text
false || true
      ↓
     true
\`\`\`

---

# 10. Combining AND and OR

Logical operators can be combined.

For example:

\`\`\`c
if ((age >= 18 && marks >= 40) || permission == 1)
{
    printf("Allowed\\n");
}
\`\`\`

The expression contains:

\`\`\`text
AND
 ↓
&&

OR
 ↓
||
\`\`\`

Parentheses make the intended grouping clear.

---

# 11. Importance of Parentheses

Consider:

\`\`\`c
a && b || c
\`\`\`

C's logical AND operator has higher precedence than logical OR.

So it is interpreted as:

\`\`\`text
(a && b) || c
\`\`\`

Even though this follows the language rules, parentheses can make the intention easier to read:

\`\`\`c
(a && b) || c
\`\`\`

For complicated conditions, explicit parentheses are strongly recommended.

---

# 12. Short-Circuit Evaluation

One of the most important properties of C's logical operators is **short-circuit evaluation**.

For &&:

If the left operand is false, the right operand is not evaluated.

For example:

\`\`\`c
if (x != 0 && 10 / x > 2)
{
    printf("Condition true\\n");
}
\`\`\`

If:

\`\`\`text
x != 0
\`\`\`

is false, the second expression is not evaluated.

This can prevent division by zero.

---

# 13. Short-Circuit Evaluation With OR

For ||:

If the left operand is true, the right operand is not evaluated.

Example:

\`\`\`c
if (x == 0 || 10 / x > 2)
{
    printf("Condition satisfied\\n");
}
\`\`\`

If:

\`\`\`text
x == 0
\`\`\`

is true, the right side is not evaluated.

This is useful when the first condition is enough to determine the result.

---

# 14. Logical Operators and Zero/Non-Zero Values

In C:

\`\`\`text
0
\`\`\`

represents false in a logical context.

Any nonzero value represents true.

For example:

\`\`\`c
if (5)
{
    printf("True\\n");
}
\`\`\`

The condition is considered true.

Similarly:

\`\`\`c
if (-10)
{
    printf("True\\n");
}
\`\`\`

is also true.

Only zero is false.

---

# 15. Logical Operators Produce 0 or 1

Although any nonzero value is treated as true in a condition, the result of a logical operator is an int value that is either:

\`\`\`text
0
\`\`\`

or:

\`\`\`text
1
\`\`\`

For example:

\`\`\`c
int result = 5 && 10;
\`\`\`

Both operands are nonzero, so:

\`\`\`text
result = 1
\`\`\`

---

# 16. Logical NOT With Nonzero Values

Consider:

\`\`\`c
printf("%d\\n", !5);
\`\`\`

Because 5 is logically true:

\`\`\`text
!5
 ↓
0
\`\`\`

Similarly:

\`\`\`c
printf("%d\\n", !(-10));
\`\`\`

produces:

\`\`\`text
0
\`\`\`

because -10 is also nonzero.

---

# 17. Practical Example — Eligibility

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 20;
    int marks = 75;

    if (age >= 18 && marks >= 40)
    {
        printf("Eligible\\n");
    }
    else
    {
        printf("Not eligible\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Eligible
\`\`\`

Both conditions are satisfied.

---

# 18. Practical Example — Weekend

\`\`\`c
#include <stdio.h>

int main(void)
{
    int day = 7;

    if (day == 6 || day == 7)
    {
        printf("Weekend\\n");
    }
    else
    {
        printf("Weekday\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Weekend
\`\`\`

---

# 19. Practical Example — NOT

\`\`\`c
#include <stdio.h>

int main(void)
{
    int loggedIn = 0;

    if (!loggedIn)
    {
        printf("Please log in\\n");
    }

    return 0;
}
\`\`\`

Since:

\`\`\`text
loggedIn = 0
\`\`\`

means false, the ! operator changes it to true.

---

# 20. Logical Operator Table

| Operator | Meaning | Example |
| --- | --- | --- |
| && | Logical AND | a > 0 && b > 0 |
| || | Logical OR | a == 1 || b == 1 |
| ! | Logical NOT | !(a > 0) |

---

# Common Beginner Mistakes

## Mistake 1 — Using & Instead of &&

These are different operators:

\`\`\`text
&   → bitwise AND
&&  → logical AND
\`\`\`

For conditions, use:

\`\`\`c
if (age >= 18 && marks >= 40)
\`\`\`

---

## Mistake 2 — Using | Instead of ||

Similarly:

\`\`\`text
|   → bitwise OR
||  → logical OR
\`\`\`

For logical conditions, use:

\`\`\`c
if (a == 1 || b == 1)
\`\`\`

---

## Mistake 3 — Forgetting Short-Circuit Behavior

The right side of:

\`\`\`text
A && B
\`\`\`

may not be evaluated when A is false.

Likewise, the right side of:

\`\`\`text
A || B
\`\`\`

may not be evaluated when A is true.

This behavior is important when expressions have side effects or depend on safe evaluation order.

---

## Mistake 4 — Writing Complicated Conditions Without Parentheses

Instead of:

\`\`\`c
if (a && b || c && d)
\`\`\`

consider:

\`\`\`c
if ((a && b) || (c && d))
\`\`\`

when that matches the intended logic.

This makes the condition easier to understand.

---

# Lesson Summary

In this lesson, you learned the three logical operators:

\`\`\`text
&&    Logical AND
||    Logical OR
!     Logical NOT
\`\`\`

**AND**

\`\`\`text
true && true → true
\`\`\`

Both conditions must be true.

**OR**

\`\`\`text
true || false → true
\`\`\`

At least one condition must be true.

**NOT**

\`\`\`text
!true → false
!false → true
\`\`\`

The logical result is reversed.

You also learned:

- 0 is false in a logical context.
- Any nonzero value is true in a logical context.
- Logical operators produce 0 or 1.
- && and || use short-circuit evaluation.
- Logical operators are commonly combined with relational operators.
- Parentheses can make complex conditions clearer.

The basic pattern is:

\`\`\`text
Relational Conditions
        ↓
Logical Operators
        ↓
Combined Condition
        ↓
Decision
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
✓ Lesson 10 — Relational Operators
→ Lesson 11 — Logical Operators
  Lesson 12 — Assignment Operators
  Lesson 13 — Unary Operators
  Lesson 14 — Bitwise Operators
  Lesson 15 — Operator Precedence

Lesson 11 Complete

Next: Lesson 12 — Assignment Operators.

`,
};

export default lesson11;
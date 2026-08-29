const lesson15 = {
  id: "lesson15",

  title: "Operator Precedence",

  content: `

# Lesson 15: Operator Precedence

## Introduction

C programs often contain expressions with several operators.

For example:

\`\`\`c
int result = 10 + 5 * 2;
\`\`\`

There are two operators here:

\`\`\`text
+
*
\`\`\`

Which operation should happen first?

C uses **operator precedence** and **associativity** to determine how an expression is grouped and evaluated.

Understanding these rules is essential for writing correct expressions.

---

# 1. What Is Operator Precedence?

**Operator precedence** determines which operators are grouped more tightly when an expression contains different operators.

For example:

\`\`\`c
int result = 10 + 5 * 2;
\`\`\`

Multiplication has higher precedence than addition.

Therefore the expression is interpreted as:

\`\`\`text
10 + (5 * 2)
\`\`\`

First:

\`\`\`text
5 × 2 = 10
\`\`\`

Then:

\`\`\`text
10 + 10 = 20
\`\`\`

So:

\`\`\`text
result = 20
\`\`\`

---

# 2. Why Precedence Matters

Consider:

\`\`\`c
int result = 10 + 20 / 5;
\`\`\`

If addition were performed first:

\`\`\`text
(10 + 20) / 5
= 6
\`\`\`

But division has higher precedence than addition.

Therefore:

\`\`\`text
10 + (20 / 5)
\`\`\`

which gives:

\`\`\`text
10 + 4
= 14
\`\`\`

So the result is:

\`\`\`text
14
\`\`\`

---

# 3. Parentheses Have High Priority

Parentheses can be used to explicitly control grouping.

For example:

\`\`\`c
int result = (10 + 20) / 5;
\`\`\`

First:

\`\`\`text
10 + 20 = 30
\`\`\`

Then:

\`\`\`text
30 / 5 = 6
\`\`\`

Therefore:

\`\`\`text
result = 6
\`\`\`

Compare:

\`\`\`c
10 + 20 / 5
\`\`\`

with:

\`\`\`c
(10 + 20) / 5
\`\`\`

The results are different.

---

# 4. Arithmetic Operator Precedence

Among the basic arithmetic operators:

\`\`\`text
*    /    %
\`\`\`

have higher precedence than:

\`\`\`text
+    -
\`\`\`

For example:

\`\`\`c
int result = 10 + 20 * 3;
\`\`\`

is interpreted as:

\`\`\`text
10 + (20 * 3)
\`\`\`

Result:

\`\`\`text
70
\`\`\`

---

# 5. Multiplication, Division and Remainder

The operators:

\`\`\`text
*
/
%
\`\`\`

have the same precedence.

When operators have the same precedence, associativity determines grouping.

For example:

\`\`\`c
int result = 20 / 5 * 2;
\`\`\`

These operators associate from left to right:

\`\`\`text
(20 / 5) * 2
\`\`\`

Therefore:

\`\`\`text
4 * 2
= 8
\`\`\`

---

# 6. Addition and Subtraction

The operators:

\`\`\`text
+
-
\`\`\`

also have the same precedence and associate from left to right.

For example:

\`\`\`c
int result = 20 - 5 + 2;
\`\`\`

It is grouped as:

\`\`\`text
(20 - 5) + 2
\`\`\`

Result:

\`\`\`text
17
\`\`\`

It is not:

\`\`\`text
20 - (5 + 2)
\`\`\`

---

# 7. Relational Operators

Relational operators have lower precedence than arithmetic operators.

For example:

\`\`\`c
int result = 10 + 5 > 12;
\`\`\`

The arithmetic operation happens first:

\`\`\`text
10 + 5
 ↓
15
\`\`\`

Then:

\`\`\`text
15 > 12
\`\`\`

which is true.

Therefore:

\`\`\`text
result = 1
\`\`\`

---

# 8. Equality Operators

The equality operators are:

\`\`\`text
==
!=
\`\`\`

They have lower precedence than the relational operators:

\`\`\`text
<
>
<=
>=
\`\`\`

For example:

\`\`\`c
a < b == c < d
\`\`\`

is grouped according to the precedence and associativity rules.

For readability, it is better to use parentheses when expressions contain several comparison operators.

---

# 9. Logical AND and OR

Logical AND:

\`\`\`text
&&
\`\`\`

has higher precedence than logical OR:

\`\`\`text
||
\`\`\`

Therefore:

\`\`\`c
a && b || c
\`\`\`

is interpreted as:

\`\`\`text
(a && b) || c
\`\`\`

For complicated expressions, parentheses should still be used to make the intended logic obvious.

---

# 10. Assignment Has Low Precedence

Assignment operators such as:

\`\`\`text
=
+=
-=
*=
/=
%=
\`\`\`

have lower precedence than most arithmetic, relational, and logical operators.

For example:

\`\`\`c
int result = 10 + 5;
\`\`\`

The addition is performed before assignment:

\`\`\`text
10 + 5
 ↓
15
\`\`\`

Then:

\`\`\`text
result = 15
\`\`\`

---

# 11. Assignment Associativity

Assignment operators associate from **right to left**.

For example:

\`\`\`c
a = b = c = 10;
\`\`\`

is grouped as:

\`\`\`text
a = (b = (c = 10))
\`\`\`

So:

\`\`\`text
c = 10
b = 10
a = 10
\`\`\`

This is why chained assignments are possible.

---

# 12. Increment and Decrement

The prefix forms:

\`\`\`text
++a
--a
\`\`\`

have high precedence.

The postfix forms:

\`\`\`text
a++
a--
\`\`\`

have even higher precedence.

For example:

\`\`\`c
int a = 5;
int b = a++;
\`\`\`

The postfix increment is applied according to its postfix semantics.

After the statement:

\`\`\`text
a = 6
b = 5
\`\`\`

---

# 13. Unary Operators

Unary operators such as:

\`\`\`text
+
-
!
~
++
--
\`\`\`

generally have higher precedence than binary arithmetic operators.

For example:

\`\`\`c
int result = -5 + 10;
\`\`\`

The unary minus applies to 5:

\`\`\`text
(-5) + 10
\`\`\`

Result:

\`\`\`text
5
\`\`\`

---

# 14. A Simplified Precedence Table

The following table gives a useful overview of commonly used C operators.

| Priority | Operators | Associativity |
| --- | --- | --- |
| Highest | () [] postfix ++ -- | Left to right |
| | Unary ++ -- + - ! ~ sizeof | Right to left |
| | * / % | Left to right |
| | + - | Left to right |
| | << >> | Left to right |
| | < <= > >= | Left to right |
| | == != | Left to right |
| | & | Left to right |
| | ^ | Left to right |
| | | | Left to right |
| | && | Left to right |
| | || | Left to right |
| | ?: | Right to left |
| Lowest | Assignment operators | Right to left |

This is a simplified learning table. C has additional operators and more detailed rules that should be consulted when writing complex expressions.

---

# 15. Example of Multiple Operators

Consider:

\`\`\`c
int result = 10 + 5 * 2 > 15 && 20 != 10;
\`\`\`

The expression is handled according to precedence.

First:

\`\`\`text
5 * 2
 ↓
10
\`\`\`

Then:

\`\`\`text
10 + 10
 ↓
20
\`\`\`

Then:

\`\`\`text
20 > 15
 ↓
1
\`\`\`

And:

\`\`\`text
20 != 10
 ↓
1
\`\`\`

Finally:

\`\`\`text
1 && 1
 ↓
1
\`\`\`

Therefore:

\`\`\`text
result = 1
\`\`\`

---

# 16. Parentheses Make Expressions Clear

Instead of writing:

\`\`\`c
if (a + b * c > d && e != f)
\`\`\`

you can write:

\`\`\`c
if (((a + (b * c)) > d) && (e != f))
\`\`\`

The second form makes the intended grouping obvious.

You do not need to add parentheses everywhere, but they are useful when the expression is difficult to read.

---

# 17. Precedence Does Not Mean "Execution Order"

A common misunderstanding is that precedence tells us the exact order in which every part of a program executes.

It does not.

Precedence determines how an expression is **parsed and grouped**.

For example:

\`\`\`c
a + b * c
\`\`\`

is grouped as:

\`\`\`text
a + (b * c)
\`\`\`

But the compiler may evaluate independent parts in an order allowed by the language.

Therefore, precedence should be understood primarily as a rule for determining expression structure.

---

# 18. Associativity

When two operators have the same precedence, **associativity** determines how they are grouped.

For example:

\`\`\`c
a - b - c
\`\`\`

The subtraction operator associates from left to right:

\`\`\`text
(a - b) - c
\`\`\`

Assignment operators associate from right to left:

\`\`\`c
a = b = c;
\`\`\`

is grouped as:

\`\`\`text
a = (b = c);
\`\`\`

---

# 19. Arithmetic Example

Consider:

\`\`\`c
int result = 100 - 20 / 5 + 3;
\`\`\`

First:

\`\`\`text
20 / 5
 ↓
4
\`\`\`

Then:

\`\`\`text
100 - 4 + 3
\`\`\`

The - and + operators have the same precedence and associate left to right:

\`\`\`text
(100 - 4) + 3
\`\`\`

Therefore:

\`\`\`text
96 + 3
= 99
\`\`\`

---

# 20. Using Parentheses to Change the Result

Consider:

\`\`\`c
int result = (100 - 20) / 5;
\`\`\`

First:

\`\`\`text
100 - 20
 ↓
80
\`\`\`

Then:

\`\`\`text
80 / 5
 ↓
16
\`\`\`

Without parentheses:

\`\`\`c
int result = 100 - 20 / 5;
\`\`\`

the result is:

\`\`\`text
100 - 4
= 96
\`\`\`

Parentheses therefore provide explicit control over grouping.

---

# 21. Logical Expression Example

Consider:

\`\`\`c
if (age >= 18 && marks >= 40 || specialPermission)
{
    printf("Allowed\\n");
}
\`\`\`

Because && has higher precedence than ||, it is grouped as:

\`\`\`text
(age >= 18 && marks >= 40) || specialPermission
\`\`\`

For readability, it is better to write the grouping explicitly:

\`\`\`c
if ((age >= 18 && marks >= 40) || specialPermission)
{
    printf("Allowed\\n");
}
\`\`\`

---

# 22. Practical Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 10;
    int b = 5;
    int c = 2;

    int result = a + b * c;

    printf("Result = %d\\n", result);

    return 0;
}
\`\`\`

The expression:

\`\`\`text
a + b * c
\`\`\`

is interpreted as:

\`\`\`text
a + (b * c)
\`\`\`

Therefore:

\`\`\`text
10 + (5 × 2)
= 20
\`\`\`

Output:

\`\`\`text
Result = 20
\`\`\`

---

# 23. Best Practice

When an expression is complicated, do not depend entirely on memorizing precedence rules.

Use parentheses to communicate your intention.

For example:

\`\`\`c
int result = (a + b) * c;
\`\`\`

is much clearer than expecting every reader to remember the precedence of + and *.

Good programmers write code that is easy to read, not merely code that happens to compile.

---

# Common Beginner Mistakes

## Mistake 1 — Assuming Addition Happens Before Multiplication

Incorrect assumption:

\`\`\`text
10 + 5 * 2
\`\`\`

means:

\`\`\`text
(10 + 5) * 2
\`\`\`

Correct:

\`\`\`text
10 + (5 * 2)
\`\`\`

Result:

\`\`\`text
20
\`\`\`

---

## Mistake 2 — Confusing = and ==

Remember:

\`\`\`text
=  → assignment
== → equality comparison
\`\`\`

---

## Mistake 3 — Forgetting Left-to-Right Associativity

For:

\`\`\`text
20 / 5 * 2
\`\`\`

the grouping is:

\`\`\`text
(20 / 5) * 2
\`\`\`

not:

\`\`\`text
20 / (5 * 2)
\`\`\`

---

## Mistake 4 — Writing Complex Expressions Without Parentheses

Even when you know the precedence rules, parentheses can make the code easier to understand.

Prefer:

\`\`\`c
if ((a > b) && (c != d))
\`\`\`

when clarity matters.

---

# Lesson Summary

In this lesson, you learned:

- **Operator precedence** determines how operators are grouped in an expression.
- **Associativity** determines grouping when operators have the same precedence.
- Multiplication, division, and remainder have higher precedence than addition and subtraction.
- Relational operators have lower precedence than arithmetic operators.
- Equality operators have lower precedence than relational operators.
- Logical AND has higher precedence than logical OR.
- Assignment operators have relatively low precedence.
- Assignment associates from right to left.
- Most arithmetic and comparison operators associate from left to right.
- Parentheses can be used to explicitly control grouping.
- Precedence determines expression structure, not necessarily the exact runtime order of every evaluation.

The most important rule is:

\`\`\`text
When in doubt → use parentheses.
\`\`\`

For example:

\`\`\`c
result = (a + b) * c;
\`\`\`

is clearer and safer than relying on the reader to remember the precedence of every operator.

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
✓ Lesson 12 — Assignment Operators
✓ Lesson 13 — Unary Operators
✓ Lesson 14 — Bitwise Operators
✓ Lesson 15 — Operator Precedence

Module 2 Complete

---

# Module 2 Complete

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
✓ Lesson 12 — Assignment Operators
✓ Lesson 13 — Unary Operators
✓ Lesson 14 — Bitwise Operators
✓ Lesson 15 — Operator Precedence

→ Module 3 — Next

`,
};

export default lesson15;
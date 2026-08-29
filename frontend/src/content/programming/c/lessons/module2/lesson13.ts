const lesson13 = {
  id: "lesson13",

  title: "Unary Operators",

  content: `

# Lesson 13: Unary Operators

## Introduction

Most arithmetic operators work with two operands.

For example:

\`\`\`c
a + b
\`\`\`

Here there are two operands:

\`\`\`text
a
b
\`\`\`

A **unary operator**, on the other hand, works with only **one operand**.

C provides several unary operators, including:

\`\`\`text
+       Unary plus
-       Unary minus
++      Increment
--      Decrement
!       Logical NOT
~       Bitwise NOT
&       Address-of
*       Indirection
sizeof  Size of
\`\`\`

Some of these operators will be studied in greater detail in later lessons.

---

# 1. Unary Plus +

The unary + operator indicates the positive value of its operand.

Example:

\`\`\`c
int number = 10;
int result = +number;
\`\`\`

The value of result is:

\`\`\`text
10
\`\`\`

Unary plus generally does not change the value.

It is different from binary addition:

\`\`\`c
a + b
\`\`\`

where + has two operands.

---

# 2. Unary Minus -

The unary - operator changes the sign of its operand.

Example:

\`\`\`c
int number = 10;
int result = -number;
\`\`\`

Result:

\`\`\`text
-10
\`\`\`

Another example:

\`\`\`c
int number = -20;
int result = -number;
\`\`\`

Result:

\`\`\`text
20
\`\`\`

Unary minus is useful when changing the sign of a numeric value.

---

# 3. Increment Operator ++

The ++ operator increases the value of an object by one.

Example:

\`\`\`c
int count = 5;

count++;
\`\`\`

Now:

\`\`\`text
count = 6
\`\`\`

It is equivalent in effect to:

\`\`\`c
count = count + 1;
\`\`\`

The increment operator is frequently used with loops and counters.

---

# 4. Decrement Operator --

The -- operator decreases the value of an object by one.

Example:

\`\`\`c
int count = 5;

count--;
\`\`\`

Now:

\`\`\`text
count = 4
\`\`\`

It is equivalent in effect to:

\`\`\`c
count = count - 1;
\`\`\`

The decrement operator is also commonly used with loops.

---

# 5. Prefix Increment

When ++ appears before the variable, it is called **prefix increment**.

Example:

\`\`\`c
int count = 5;

int result = ++count;
\`\`\`

The increment happens before the value is used in the larger expression.

Conceptually:

\`\`\`text
count
  ↓
6

result
  ↓
6
\`\`\`

After the statement:

\`\`\`text
count = 6
result = 6
\`\`\`

---

# 6. Postfix Increment

When ++ appears after the variable, it is called **postfix increment**.

Example:

\`\`\`c
int count = 5;

int result = count++;
\`\`\`

The old value is used for the expression, and then count is incremented.

After the statement:

\`\`\`text
count = 6
result = 5
\`\`\`

This is the main difference between:

\`\`\`text
++count
\`\`\`

and:

\`\`\`text
count++
\`\`\`

---

# 7. Prefix vs Postfix Increment

Consider:

\`\`\`c
int a = 5;
int b = ++a;
\`\`\`

Result:

\`\`\`text
a = 6
b = 6
\`\`\`

Now:

\`\`\`c
int a = 5;
int b = a++;
\`\`\`

Result:

\`\`\`text
a = 6
b = 5
\`\`\`

Remember:

\`\`\`text
++a
 ↓
increment first, then use

a++
 ↓
use first, then increment
\`\`\`

---

# 8. Prefix Decrement

The same principle applies to --.

Example:

\`\`\`c
int count = 5;

int result = --count;
\`\`\`

The value is decremented before it is used.

Result:

\`\`\`text
count = 4
result = 4
\`\`\`

---

# 9. Postfix Decrement

Example:

\`\`\`c
int count = 5;

int result = count--;
\`\`\`

The old value is used first, and then count is decremented.

Result:

\`\`\`text
count = 4
result = 5
\`\`\`

---

# 10. Prefix vs Postfix Decrement

Prefix:

\`\`\`c
int a = 5;
int b = --a;
\`\`\`

Result:

\`\`\`text
a = 4
b = 4
\`\`\`

Postfix:

\`\`\`c
int a = 5;
int b = a--;
\`\`\`

Result:

\`\`\`text
a = 4
b = 5
\`\`\`

The difference is the point at which the original value is used.

---

# 11. Logical NOT !

The ! operator performs logical negation.

It changes a true logical value to false and a false logical value to true.

For example:

\`\`\`c
int value = 0;

printf("%d\\n", !value);
\`\`\`

Output:

\`\`\`text
1
\`\`\`

because:

\`\`\`text
0 → false

!false → true
\`\`\`

Similarly:

\`\`\`c
int value = 10;

printf("%d\\n", !value);
\`\`\`

produces:

\`\`\`text
0
\`\`\`

because any nonzero value is true in a logical context.

---

# 12. Bitwise NOT ~

The ~ operator performs a **bitwise complement**.

For example:

\`\`\`c
unsigned int value = 5;
unsigned int result = ~value;
\`\`\`

The bits of value are inverted:

\`\`\`text
0 → 1
1 → 0
\`\`\`

The exact resulting value depends on the width of the type.

Bitwise operations will be studied in detail in Lesson 14.

---

# 13. Address-of Operator &

The unary & operator obtains the address of an object.

Example:

\`\`\`c
int number = 10;

printf("%p\\n", (void *)&number);
\`\`\`

Here:

\`\`\`text
&number
   ↓
address of number
\`\`\`

The address-of operator is especially important when working with pointers.

---

# 14. Indirection Operator *

The unary * operator can be used to access the object pointed to by a pointer.

Example:

\`\`\`c
int number = 10;

int *ptr = &number;

printf("%d\\n", *ptr);
\`\`\`

Here:

\`\`\`text
ptr
 ↓
address of number

*ptr
 ↓
value stored in number
\`\`\`

Output:

\`\`\`text
10
\`\`\`

Pointers will be studied more thoroughly later in the course.

---

# 15. sizeof Operator

The sizeof operator determines the size, in bytes, of a type or object.

Example:

\`\`\`c
int number;

printf("%zu\\n", sizeof(number));
\`\`\`

You can also use:

\`\`\`c
printf("%zu\\n", sizeof(int));
\`\`\`

The exact size depends on the implementation.

sizeof is particularly useful when working with arrays, structures, and dynamic memory.

---

# 16. Unary Operators in Expressions

Unary operators can be combined with other operators.

For example:

\`\`\`c
int a = 5;

int result = -a + 10;
\`\`\`

First:

\`\`\`text
-a
 ↓
-5
\`\`\`

Then:

\`\`\`text
-5 + 10
 ↓
5
\`\`\`

Therefore:

\`\`\`text
result = 5
\`\`\`

---

# 17. Increment in a Loop

The increment operator is commonly used in for loops.

Example:

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    printf("%d\\n", i);
}
\`\`\`

The:

\`\`\`text
i++
\`\`\`

increments i after each iteration.

The output is:

\`\`\`text
1
2
3
4
5
\`\`\`

---

# 18. Decrement in a Loop

A decrement operator can also be used:

\`\`\`c
for (int i = 5; i >= 1; i--)
{
    printf("%d\\n", i);
}
\`\`\`

Output:

\`\`\`text
5
4
3
2
1
\`\`\`

---

# 19. Avoid Complicated Increment Expressions

Although expressions such as:

\`\`\`c
a = i++ + ++i;
\`\`\`

may look clever, they can lead to undefined behavior because the same scalar object is modified more than once without the required sequencing.

For example, avoid writing code where a variable is modified multiple times in a single expression without a clear sequencing rule.

Prefer simple statements:

\`\`\`c
i++;
i++;
\`\`\`

or:

\`\`\`c
i++;

int value = i;
\`\`\`

Clear code is easier to understand and maintain.

---

# 20. Practical Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int count = 5;

    printf("Original = %d\\n", count);

    printf("Prefix increment = %d\\n", ++count);

    printf("Postfix increment = %d\\n", count++);

    printf("Current value = %d\\n", count);

    printf("Prefix decrement = %d\\n", --count);

    printf("Postfix decrement = %d\\n", count--);

    printf("Final value = %d\\n", count);

    return 0;
}
\`\`\`

This program demonstrates the difference between prefix and postfix forms.

---

# 21. Unary Operator Summary

| Operator | Purpose |
| --- | --- |
| + | Unary plus |
| - | Unary minus |
| ++ | Increment |
| -- | Decrement |
| ! | Logical NOT |
| ~ | Bitwise NOT |
| & | Address-of |
| * | Indirection |
| sizeof | Size of type/object |

---

# Common Beginner Mistakes

## Mistake 1 — Confusing Prefix and Postfix

\`\`\`c
int a = 5;
int b = ++a;
\`\`\`

gives:

\`\`\`text
a = 6
b = 6
\`\`\`

while:

\`\`\`c
int a = 5;
int b = a++;
\`\`\`

gives:

\`\`\`text
a = 6
b = 5
\`\`\`

---

## Mistake 2 — Confusing ! and ~

They are completely different:

\`\`\`text
! → logical NOT
~ → bitwise NOT
\`\`\`

---

## Mistake 3 — Confusing & and &&

\`\`\`text
&  → address-of when used as a unary operator
&& → logical AND
\`\`\`

The same & symbol also has a bitwise AND meaning when used with two operands.

---

## Mistake 4 — Writing Unsafe Expressions

Avoid modifying the same variable multiple times within one expression unless you fully understand C's sequencing rules.

Prefer simple, separate statements.

---

# Lesson Summary

Unary operators operate on a single operand.

Important unary operators include:

\`\`\`text
+       Unary plus
-       Unary minus
++      Increment
--      Decrement
!       Logical NOT
~       Bitwise NOT
&       Address-of
*       Indirection
sizeof  Size of
\`\`\`

You also learned:

- Prefix increment changes the value before it is used.
- Postfix increment uses the old value before incrementing.
- Prefix and postfix decrement work similarly.
- ! reverses a logical value.
- ~ complements individual bits.
- & can obtain the address of an object.
- * can access the object pointed to by a pointer.
- sizeof determines the size of a type or object.
- Complicated expressions involving multiple modifications should be avoided.

The key difference to remember is:

\`\`\`text
++a
 ↓
increment first

a++
 ↓
use first
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
✓ Lesson 11 — Logical Operators
✓ Lesson 12 — Assignment Operators
→ Lesson 13 — Unary Operators
  Lesson 14 — Bitwise Operators
  Lesson 15 — Operator Precedence

Lesson 13 Complete

Next: Lesson 14 — Bitwise Operators.

`,
};

export default lesson13;
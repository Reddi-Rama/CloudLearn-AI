const lesson14 = {
  id: "lesson14",

  title: "Bitwise Operators",

  content: `

# Lesson 14: Bitwise Operators

## Introduction

Bitwise operators work directly with the **individual bits** of integer values.

Every integer is represented internally using a sequence of binary bits.

For example:

\`\`\`text
Decimal:  5
Binary:   0101
\`\`\`

Bitwise operators allow a programmer to manipulate these individual bits.

The main bitwise operators in C are:

\`\`\`text
&     Bitwise AND
|     Bitwise OR
^     Bitwise XOR
~     Bitwise NOT
<<    Left Shift
>>    Right Shift
\`\`\`

These operators are commonly used in low-level programming, embedded systems, device programming, flags, masks, and performance-sensitive code.

---

# 1. Binary Representation

Before understanding bitwise operators, it is important to understand binary numbers.

Binary uses only two digits:

\`\`\`text
0
1
\`\`\`

For example:

\`\`\`text
Decimal    Binary

0          0000
1          0001
2          0010
3          0011
4          0100
5          0101
6          0110
7          0111
\`\`\`

Each position represents a power of two.

For example:

\`\`\`text
0101

0 × 8
1 × 4
0 × 2
1 × 1

= 5
\`\`\`

---

# 2. Bitwise AND &

The & operator performs AND on each corresponding pair of bits.

The basic rule is:

\`\`\`text
1 & 1 → 1

Everything else → 0
\`\`\`

Truth table:

| A | B | A & B |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Consider:

\`\`\`text
  0101
& 0011
------
  0001
\`\`\`

Therefore:

\`\`\`c
int result = 5 & 3;
\`\`\`

gives:

\`\`\`text
result = 1
\`\`\`

---

# 3. Bitwise OR |

The | operator performs OR on each corresponding pair of bits.

The rule is:

\`\`\`text
0 | 0 → 0

Everything else → 1
\`\`\`

Truth table:

| A | B | A | B |
| --- | --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

Example:

\`\`\`text
  0101
| 0011
------
  0111
\`\`\`

Therefore:

\`\`\`c
int result = 5 | 3;
\`\`\`

gives:

\`\`\`text
result = 7
\`\`\`

---

# 4. Bitwise XOR ^

The ^ operator performs exclusive OR.

The result is 1 when the two bits are different.

Truth table:

| A | B | A ^ B |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Example:

\`\`\`text
  0101
^ 0011
------
  0110
\`\`\`

Therefore:

\`\`\`c
int result = 5 ^ 3;
\`\`\`

gives:

\`\`\`text
result = 6
\`\`\`

---

# 5. Bitwise NOT ~

The ~ operator reverses every bit.

\`\`\`text
0 → 1
1 → 0
\`\`\`

For example, using four bits:

\`\`\`text
  0101
    ↓
  1010
\`\`\`

Therefore:

\`\`\`text
~5
\`\`\`

inverts the bits of the integer representation of 5.

The exact numerical result depends on the width and representation of the integer type.

For signed integers, the result is best understood in terms of the type's actual representation rather than assuming a fixed number of bits.

---

# 6. Left Shift <<

The left-shift operator moves the bits to the left.

For example:

\`\`\`text
0101 << 1
\`\`\`

produces:

\`\`\`text
1010
\`\`\`

For an unsigned integer, shifting left by one position corresponds to multiplying by two when the result remains representable.

For example:

\`\`\`c
unsigned int value = 5;
unsigned int result = value << 1;
\`\`\`

The result is:

\`\`\`text
10
\`\`\`

because:

\`\`\`text
0101
  ↓
1010
\`\`\`

---

# 7. Left Shift by Multiple Positions

Consider:

\`\`\`c
unsigned int value = 5;
unsigned int result = value << 2;
\`\`\`

Binary:

\`\`\`text
0101
\`\`\`

Shift left by two:

\`\`\`text
0101
  ↓
010100
\`\`\`

The mathematical result is:

\`\`\`text
5 × 4 = 20
\`\`\`

when the shifted value is representable.

---

# 8. Right Shift >>

The right-shift operator moves bits to the right.

For example:

\`\`\`text
0100 >> 1
\`\`\`

produces:

\`\`\`text
0010
\`\`\`

For an unsigned integer, right shifting by one position corresponds to dividing by two and discarding the remainder.

Example:

\`\`\`c
unsigned int value = 10;
unsigned int result = value >> 1;
\`\`\`

Result:

\`\`\`text
5
\`\`\`

---

# 9. Right Shift by Multiple Positions

Consider:

\`\`\`c
unsigned int value = 20;
unsigned int result = value >> 2;
\`\`\`

Conceptually:

\`\`\`text
20
 ↓
10100
 ↓
00101
 ↓
5
\`\`\`

Therefore:

\`\`\`text
result = 5
\`\`\`

For unsigned integers, right shifting by two positions corresponds to integer division by four.

---

# 10. Bitwise Operators vs Logical Operators

This is an important distinction.

**Bitwise AND**

\`\`\`text
a & b
\`\`\`

works on individual bits.

**Logical AND**

\`\`\`text
a && b
\`\`\`

works on logical truth values.

For example:

\`\`\`text
5 & 3
\`\`\`

performs a bitwise operation.

But:

\`\`\`text
5 && 3
\`\`\`

checks whether both values are logically true.

Since both 5 and 3 are nonzero:

\`\`\`text
5 && 3 → 1
\`\`\`

while:

\`\`\`text
5 & 3 → 1
\`\`\`

The results happen to be the same in this example, but the operations are fundamentally different.

---

# 11. Bitwise OR vs Logical OR

Similarly:

\`\`\`text
|  → Bitwise OR
|| → Logical OR
\`\`\`

For example:

\`\`\`text
5 | 3
\`\`\`

produces:

\`\`\`text
7
\`\`\`

while:

\`\`\`text
5 || 3
\`\`\`

produces:

\`\`\`text
1
\`\`\`

because both operands are logically true.

---

# 12. Bit Masks

Bitwise AND is often used with **masks**.

A mask selects particular bits from a value.

For example:

\`\`\`c
unsigned int value = 13;
unsigned int mask = 1;
unsigned int result = value & mask;
\`\`\`

Binary:

\`\`\`text
value:

1101

mask:

0001

AND:

----
0001
\`\`\`

The result is:

\`\`\`text
1
\`\`\`

This allows the program to examine a particular bit.

---

# 13. Checking Whether a Bit Is Set

Suppose we want to check the least significant bit.

We can use:

\`\`\`c
if (value & 1)
{
    printf("Least significant bit is set\\n");
}
\`\`\`

For example:

\`\`\`text
13 → 1101

1  → 0001

Then:

1101
0001
----
0001
\`\`\`

The result is nonzero, so the bit is set.

This technique is also related to checking whether an integer is odd.

---

# 14. Setting a Bit

The bitwise OR operator can be used to set selected bits.

For example:

\`\`\`c
value = value | mask;
\`\`\`

or:

\`\`\`c
value |= mask;
\`\`\`

If a bit in mask is 1, the corresponding bit in value becomes 1.

This is commonly used when managing flags.

---

# 15. Clearing a Bit

A bit can be cleared using a mask together with bitwise NOT and AND.

For example:

\`\`\`c
value = value & ~mask;
\`\`\`

or:

\`\`\`c
value &= ~mask;
\`\`\`

The bits represented by mask are cleared.

This technique is commonly used when working with flags and hardware registers.

---

# 16. Toggling a Bit

XOR can be used to toggle selected bits.

For example:

\`\`\`c
value ^= mask;
\`\`\`

If a selected bit is:

\`\`\`text
0 → becomes 1
1 → becomes 0
\`\`\`

Therefore, XOR is useful when a program needs to switch a bit between two states.

---

# 17. Bitwise Assignment Operators

C provides assignment forms for bitwise operations.

They include:

\`\`\`text
&=
|=
^=
<<=
>>=
\`\`\`

For example:

\`\`\`c
value &= mask;
\`\`\`

is equivalent in effect to:

\`\`\`c
value = value & mask;
\`\`\`

Similarly:

\`\`\`c
value |= mask;
\`\`\`

performs bitwise OR and assignment.

---

# 18. Example Program

\`\`\`c
#include <stdio.h>

int main(void)
{
    unsigned int a = 5;
    unsigned int b = 3;

    printf("AND = %u\\n", a & b);
    printf("OR = %u\\n", a | b);
    printf("XOR = %u\\n", a ^ b);
    printf("Left Shift = %u\\n", a << 1);
    printf("Right Shift = %u\\n", a >> 1);

    return 0;
}
\`\`\`

Output:

\`\`\`text
AND = 1
OR = 7
XOR = 6
Left Shift = 10
Right Shift = 2
\`\`\`

---

# 19. Bitwise Operator Summary

| Operator | Operation |
| --- | --- |
| & | Bitwise AND |
| | | Bitwise OR |
| ^ | Bitwise XOR |
| ~ | Bitwise NOT |
| << | Left shift |
| >> | Right shift |

---

# Common Beginner Mistakes

## Mistake 1 — Confusing & and &&

\`\`\`text
&  → Bitwise AND
&& → Logical AND
\`\`\`

---

## Mistake 2 — Confusing | and ||

\`\`\`text
|  → Bitwise OR
|| → Logical OR
\`\`\`

---

## Mistake 3 — Assuming Shifts Are Always Simple Multiplication or Division

For unsigned values, shifts have useful mathematical interpretations when the result is representable.

For signed values, especially right shifts of negative numbers, the behavior requires more care.

Do not blindly assume that every shift is equivalent to ordinary multiplication or division.

---

## Mistake 4 — Ignoring Integer Width

Bitwise operations depend on the representation and width of the type.

For portable code, prefer unsigned integer types when you are deliberately manipulating bits.

---

# Lesson Summary

In this lesson, you learned how C can manipulate individual bits using:

\`\`\`text
&     Bitwise AND
|     Bitwise OR
^     Bitwise XOR
~     Bitwise NOT
<<    Left Shift
>>    Right Shift
\`\`\`

You also learned:

- Bitwise operators work on integer representations.
- AND can be used to test or clear bits.
- OR can be used to set bits.
- XOR can be used to toggle bits.
- Shift operators move bits left or right.
- Bit masks are commonly used to select particular bits.
- Bitwise operators are different from logical operators.
- Bitwise assignment operators provide shorthand forms.

The key idea is:

\`\`\`text
Integer Value
      ↓
Binary Representation
      ↓
Bitwise Operation
      ↓
New Integer Value
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
✓ Lesson 13 — Unary Operators
→ Lesson 14 — Bitwise Operators
  Lesson 15 — Operator Precedence

Lesson 14 Complete

Next: Lesson 15 — Operator Precedence.

`,
};

export default lesson14;
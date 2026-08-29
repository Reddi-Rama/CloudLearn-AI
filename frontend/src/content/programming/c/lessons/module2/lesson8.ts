const lesson8 = {
  id: "lesson8",

  title: "Type Casting",

  content: `

# Lesson 8: Type Casting

## Introduction

In the previous lesson, we learned about **type conversion**, where C changes a value from one data type to another.

Sometimes, however, we want to tell the compiler explicitly which type should be used.

This is called **type casting**.

For example:

\`\`\`c
int a = 10;
int b = 3;
double result = (double)a / b;
\`\`\`

Here:

\`\`\`text
(double)
   ↓
Explicitly converts a to double
\`\`\`

Type casting gives the programmer direct control over the type used in an expression.

---

# 1. What Is Type Casting?

Type casting is the explicit conversion of a value from one type to another using a cast operator.

The general syntax is:

\`\`\`c
(type) expression
\`\`\`

For example:

\`\`\`c
(double)number
\`\`\`

If:

\`\`\`c
int number = 10;
\`\`\`

then:

\`\`\`c
(double)number
\`\`\`

produces the value 10.0 with type double.

---

# 2. Basic Syntax

The general form is:

\`\`\`c
(target_type) expression
\`\`\`

Examples:

\`\`\`c
(int)3.14
(double)10
(float)25
(char)65
\`\`\`

The cast applies to the expression immediately following it.

---

# 3. Integer to Floating-Point Casting

Consider:

\`\`\`c
int number = 10;
double value = (double)number;
\`\`\`

The cast:

\`\`\`c
(double)number
\`\`\`

converts the integer value to double.

Conceptually:

\`\`\`text
10
 ↓
(double)
 ↓
10.0
\`\`\`

---

# 4. Floating-Point to Integer Casting

A floating-point value can also be explicitly converted to an integer.

For example:

\`\`\`c
double price = 99.75;
int value = (int)price;
\`\`\`

The result is:

\`\`\`text
99
\`\`\`

The fractional part is discarded.

It is not rounded to the nearest integer.

For example:

\`\`\`c
(int)9.99
\`\`\`

↓

\`\`\`text
9
\`\`\`

and:

\`\`\`c
(int)25.75
\`\`\`

↓

\`\`\`text
25
\`\`\`

---

# 5. Type Casting for Division

One of the most useful applications of type casting is integer division.

Consider:

\`\`\`c
int a = 10;
int b = 3;

double result = a / b;
\`\`\`

Because both operands are integers:

\`\`\`text
10 / 3
   ↓
3
\`\`\`

Therefore:

\`\`\`text
result = 3.0
\`\`\`

This is usually not what we want if we need the fractional result.

Instead:

\`\`\`c
double result = (double)a / b;
\`\`\`

Now:

\`\`\`text
(double)a
   ↓
10.0

10.0 / 3
   ↓
3.333333...
\`\`\`

This is a very common use of type casting.

---

# 6. Casting One Operand Is Enough

You do not need to cast both operands.

For example:

\`\`\`c
double result = (double)a / b;
\`\`\`

is sufficient.

You could also write:

\`\`\`c
double result = a / (double)b;
\`\`\`

Both cause the division to be performed using floating-point arithmetic.

There is generally no need to write:

\`\`\`c
double result = (double)a / (double)b;
\`\`\`

unless you specifically want to make both conversions obvious.

---

# 7. Character Casting

A character can be explicitly converted to an integer type.

For example:

\`\`\`c
char ch = 'A';
int value = (int)ch;
\`\`\`

The resulting integer corresponds to the character's execution character set representation.

On an ASCII-based system, this commonly gives:

\`\`\`text
'A' → 65
\`\`\`

Portable C code should not assume ASCII unless the environment guarantees it.

---

# 8. Integer to Character Casting

An integer can also be converted to char.

For example:

\`\`\`c
int value = 65;
char ch = (char)value;
\`\`\`

On a typical ASCII system, ch will represent:

\`\`\`text
'A'
\`\`\`

The exact result depends on the character representation and whether the value is representable in the destination type.

---

# 9. Casting Between Numeric Types

Type casting can be used between many arithmetic types.

Examples:

\`\`\`c
int a = 10;

float b = (float)a;
double c = (double)a;
long d = (long)a;
\`\`\`

The programmer explicitly requests the destination type.

---

# 10. Casting Does Not Change the Original Variable

Consider:

\`\`\`c
int number = 10;
double value = (double)number;
\`\`\`

The cast does not change number.

After the statement:

\`\`\`text
number = 10
value  = 10.0
\`\`\`

The original variable is still an int.

The cast produces a converted value for use in the expression.

---

# 11. Casting During an Expression

A cast can be placed inside a larger expression.

For example:

\`\`\`c
int total = 450;
int students = 7;

double average = (double)total / students;
\`\`\`

The cast is applied before the division.

The calculation becomes approximately:

\`\`\`text
450.0 / 7
   ↓
64.285714...
\`\`\`

This is useful when calculating averages and percentages.

---

# 12. Casting and Data Loss

Casting does not magically preserve information.

For example:

\`\`\`c
double value = 123.456;
int number = (int)value;
\`\`\`

The result is:

\`\`\`text
123
\`\`\`

The fractional portion is lost.

Similarly, converting a value to an integer type that cannot represent it may produce a result that requires careful consideration.

Therefore, type casting should be used deliberately.

---

# 13. Type Casting vs Type Conversion

These terms are related but should not be confused.

**Type Conversion**

The broader process of changing a value from one type to another.

It may happen automatically:

\`\`\`c
int number = 10;
double value = number;
\`\`\`

**Type Casting**

An explicit conversion requested by the programmer:

\`\`\`c
double value = (double)number;
\`\`\`

A simple way to remember:

\`\`\`text
Type Conversion
      ↓
General concept

Type Casting
      ↓
Explicit conversion written by the programmer
\`\`\`

---

# 14. Example: Calculating Percentage

Suppose:

\`\`\`c
int obtained = 475;
int total = 500;
\`\`\`

If we write:

\`\`\`c
double percentage = obtained / total * 100;
\`\`\`

both obtained and total are integers.

Therefore:

\`\`\`text
475 / 500
   ↓
0
\`\`\`

and the result becomes:

\`\`\`text
0
\`\`\`

Instead, write:

\`\`\`c
double percentage = (double)obtained / total * 100;
\`\`\`

Now:

\`\`\`text
475.0 / 500
     ↓
0.95

0.95 × 100
     ↓
95.0
\`\`\`

This gives the expected percentage.

---

# 15. Example Program

\`\`\`c
#include <stdio.h>

int main(void)
{
    int obtained = 475;
    int total = 500;

    double percentage = (double)obtained / total * 100;

    printf("Obtained = %d\\n", obtained);
    printf("Total = %d\\n", total);
    printf("Percentage = %.2f%%\\n", percentage);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Obtained = 475
Total = 500
Percentage = 95.00%
\`\`\`

---

# 16. Casting in Calculations

Consider:

\`\`\`c
int a = 5;
int b = 2;

double result = (double)a / b;
\`\`\`

The cast changes the type of a for this expression.

The calculation is effectively:

\`\`\`text
5.0 / 2
   ↓
2.5
\`\`\`

But:

\`\`\`c
int a = 5;
int b = 2;

int result = (double)a / b;
\`\`\`

still stores the final result in an int.

The floating-point result is converted to int when assigned:

\`\`\`text
2.5
 ↓
2
\`\`\`

This shows that both the expression type and destination type matter.

---

# 17. Cast Has High Priority in an Expression

A cast applies to the expression immediately following it.

For example:

\`\`\`c
(double)a + b
\`\`\`

means:

\`\`\`c
((double)a) + b
\`\`\`

Parentheses can make the intended operation clearer when expressions become complicated.

For example:

\`\`\`c
(double)(a + b)
\`\`\`

first calculates:

\`\`\`text
a + b
\`\`\`

and then converts the result to double.

These two expressions are not always equivalent:

\`\`\`c
(double)a + b
\`\`\`

and:

\`\`\`c
(double)(a + b)
\`\`\`

---

# 18. Practical Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 10;
    int b = 4;

    double result1 = (double)a / b;
    double result2 = (double)(a + b);

    printf("Division = %.2f\\n", result1);
    printf("Sum = %.2f\\n", result2);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Division = 2.50
Sum = 14.00
\`\`\`

---

# 19. Casting to char

Consider:

\`\`\`c
int number = 65;
char letter = (char)number;

printf("%c\\n", letter);
\`\`\`

On an ASCII-based system, the output is commonly:

\`\`\`text
A
\`\`\`

This demonstrates how explicit conversion can be used when working with character representations.

---

# 20. Explicit Casting Should Be Used Carefully

Type casting is useful, but it should not be used simply to silence compiler warnings.

For example:

\`\`\`c
int result = (int)large_value;
\`\`\`

may hide the fact that the program is deliberately discarding information.

Before using a cast, ask:

\`\`\`text
Why is the conversion necessary?

Can information be lost?

Is the destination type appropriate?

Will the resulting value be meaningful?
\`\`\`

This is good programming practice.

---

# Common Beginner Mistakes

## Mistake 1 — Casting After Integer Division

This does not give the desired fractional result:

\`\`\`c
double result = (double)(10 / 3);
\`\`\`

The division happens first:

\`\`\`text
10 / 3
  ↓
3

(double)3
  ↓
3.0
\`\`\`

Instead:

\`\`\`c
double result = (double)10 / 3;
\`\`\`

gives:

\`\`\`text
3.333333...
\`\`\`

---

## Mistake 2 — Assuming Casting Rounds

\`\`\`c
int number = (int)9.99;
\`\`\`

produces:

\`\`\`text
9
\`\`\`

not 10.

---

## Mistake 3 — Thinking Casting Changes the Original Variable

\`\`\`c
int number = 10;
double value = (double)number;
\`\`\`

number remains an int.

Only the value used in the cast expression is converted.

---

# Lesson Summary

In this lesson, you learned:

- Type casting is explicit type conversion.
- The syntax is:

\`\`\`c
(type) expression
\`\`\`

- Casting is useful when controlling the type used in an expression.
- Casting can prevent unwanted integer division.
- Floating-point values converted to integers lose their fractional part.
- A cast does not change the original variable.
- Casting one operand can be enough to change the type of an arithmetic expression.
- (double)a / b and (double)(a / b) produce different results.
- Casting should be used deliberately because conversions can lose information.

The most important example is:

\`\`\`c
double average = (double)total / count;
\`\`\`

which allows integer data to participate in floating-point division.

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
→ Lesson 8 — Type Casting
  Lesson 9 — Arithmetic Operators
  Lesson 10 — Relational Operators
  Lesson 11 — Logical Operators
  Lesson 12 — Assignment Operators
  Lesson 13 — Unary Operators
  Lesson 14 — Bitwise Operators
  Lesson 15 — Operator Precedence

Lesson 8 Complete

Next: Lesson 9 — Arithmetic Operators.

`,
};

export default lesson8;
const lesson7 = {
  id: "lesson7",

  title: "Type Conversion",

  content: `

# Lesson 7: Type Conversion

## Introduction

In C programming, different data types are often used together in expressions.

For example:

\`\`\`c
int number = 10;
double value = number;
\`\`\`

Here, an integer value is converted to a double value.

This process is called **type conversion**.

Type conversion is the process of changing a value from one data type to another.

C supports both:

- Implicit type conversion
- Explicit type conversion

---

# 1. What Is Type Conversion?

Type conversion occurs when a value of one data type is changed into another data type.

For example:

\`\`\`c
int number = 10;
double value = number;
\`\`\`

The integer value:

\`\`\`text
10
 ↓
double
 ↓
10.0
\`\`\`

The conversion allows the value to be used as another type.

---

# 2. Implicit Type Conversion

Implicit type conversion happens automatically.

The programmer does not explicitly request the conversion.

For example:

\`\`\`c
int number = 10;
double value = number;
\`\`\`

C automatically converts the integer value to double.

Conceptually:

\`\`\`text
int
 ↓
automatic conversion
 ↓
double
\`\`\`

---

# 3. Integer to Floating-Point Conversion

An integer can be automatically converted to a floating-point type.

For example:

\`\`\`c
int number = 25;
double value = number;
\`\`\`

The value becomes:

\`\`\`text
25
 ↓
25.0
\`\`\`

This conversion normally preserves the integer value.

---

# 4. Floating-Point to Integer Conversion

A floating-point value can also be converted to an integer type.

For example:

\`\`\`c
double price = 99.75;
int value = price;
\`\`\`

The fractional part is discarded.

Therefore:

\`\`\`text
99.75
 ↓
99
\`\`\`

The value is not rounded to the nearest integer.

---

# 5. Conversion During Arithmetic

Type conversion can occur when different arithmetic types are used together.

For example:

\`\`\`c
int a = 10;
double b = 3.5;

double result = a + b;
\`\`\`

The integer value is converted so that the arithmetic can be performed using a compatible type.

Conceptually:

\`\`\`text
10
 ↓
10.0

10.0 + 3.5
 ↓
13.5
\`\`\`

---

# 6. Integer Division and Type Conversion

Consider:

\`\`\`c
int a = 10;
int b = 3;

double result = a / b;
\`\`\`

Both operands are integers.

Therefore:

\`\`\`text
10 / 3
 ↓
3
\`\`\`

The result is then stored as double:

\`\`\`text
3
 ↓
3.0
\`\`\`

The fractional part is already lost.

This is an important point.

Simply storing an integer division result in a double does not make the division floating-point.

---

# 7. Floating-Point Division

To obtain a fractional result, at least one operand must be converted to a floating-point type before division.

For example:

\`\`\`c
int a = 10;
int b = 3;

double result = (double)a / b;
\`\`\`

Now the calculation becomes:

\`\`\`text
10.0 / 3
 ↓
3.333333...
\`\`\`

The explicit conversion used here is called type casting and will be studied in the next lesson.

---

# 8. Usual Arithmetic Conversions

When arithmetic operations involve different arithmetic types, C applies rules to determine a common type for the operation.

For example:

\`\`\`c
int a = 10;
float b = 2.5f;

float result = a + b;
\`\`\`

The integer value participates in the operation using a compatible floating-point type.

The important idea is:

\`\`\`text
Different operand types
        ↓
Common arithmetic type
        ↓
Operation
        ↓
Result
\`\`\`

---

# 9. Character Conversion

Characters can participate in arithmetic expressions.

For example:

\`\`\`c
char ch = 'A';
int value = ch;
\`\`\`

The character value is converted to an integer value corresponding to its execution character set representation.

On an ASCII-based system:

\`\`\`text
'A'
 ↓
65
\`\`\`

Portable C code should not assume ASCII unless the environment guarantees it.

---

# 10. Integer to Character Conversion

An integer can also be assigned to a character object.

For example:

\`\`\`c
int value = 65;
char ch = value;
\`\`\`

On a typical ASCII system, the character represented will commonly be:

\`\`\`text
A
\`\`\`

The exact result depends on the character representation and whether the value is representable in the destination type.

---

# 11. Conversion Between Integer Types

C supports conversion between different integer types.

For example:

\`\`\`c
int number = 100;
long value = number;
\`\`\`

The integer value is converted to long.

Similarly:

\`\`\`c
long number = 100;
int value = number;
\`\`\`

The long value is converted to int.

When converting to a type that cannot represent the original value, the result must be considered carefully.

---

# 12. Conversion Between Floating-Point Types

Floating-point types can also be converted.

For example:

\`\`\`c
float value = 10.5f;
double result = value;
\`\`\`

The float value is converted to double.

The reverse is also possible:

\`\`\`c
double value = 10.75;
float result = value;
\`\`\`

Conversion to a type with less precision may lose information.

---

# 13. Assignment Conversion

Type conversion can happen during assignment.

For example:

\`\`\`c
int number = 10;
double value;

value = number;
\`\`\`

The integer is converted to double before being stored.

Similarly:

\`\`\`c
double number = 10.75;
int value;

value = number;
\`\`\`

The fractional portion is discarded during conversion to int.

---

# 14. Conversion in Function Calls

Conversions can also occur when values are passed to functions, depending on the function parameter types.

For example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 10;

    printf("%.2f\\n", (double)number);

    return 0;
}
\`\`\`

Here the integer is explicitly converted to double before being passed to printf.

---

# 15. Conversion and Data Loss

Not every conversion preserves all information.

For example:

\`\`\`c
double value = 123.456;
int number = value;
\`\`\`

The result is:

\`\`\`text
123
\`\`\`

The fractional part is lost.

Similarly, converting a large integer to a smaller integer type may result in a value that cannot represent the original value.

Therefore, conversions should be used carefully.

---

# 16. Implicit vs Explicit Conversion

There are two important forms of conversion.

**Implicit conversion**

C performs the conversion automatically.

Example:

\`\`\`c
int number = 10;
double value = number;
\`\`\`

**Explicit conversion**

The programmer requests the conversion.

Example:

\`\`\`c
double value = (double)number;
\`\`\`

The explicit form is called type casting.

---

# 17. Example Program

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 10;
    double value = number;

    printf("Integer = %d\\n", number);
    printf("Double = %.2f\\n", value);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Integer = 10
Double = 10.00
\`\`\`

---

# 18. Example of Data Loss

Consider:

\`\`\`c
#include <stdio.h>

int main(void)
{
    double value = 25.75;
    int number = value;

    printf("Original = %.2f\\n", value);
    printf("Converted = %d\\n", number);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Original = 25.75
Converted = 25
\`\`\`

The fractional portion is lost.

---

# 19. Type Conversion in Expressions

Consider:

\`\`\`c
int a = 5;
double b = 2.0;

double result = a / b;
\`\`\`

Because one operand is double, the integer operand participates in the operation as a floating-point value.

Conceptually:

\`\`\`text
5
 ↓
5.0

5.0 / 2.0
 ↓
2.5
\`\`\`

Therefore:

\`\`\`text
result = 2.5
\`\`\`

---

# 20. Practical Example

Suppose we want to calculate an average.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int total = 450;
    int count = 7;

    double average = (double)total / count;

    printf("Average = %.2f\\n", average);

    return 0;
}
\`\`\`

The conversion allows the division to produce a fractional result.

---

# Common Beginner Mistakes

## Mistake 1 — Expecting Integer Division to Produce a Decimal

Incorrect assumption:

\`\`\`c
double result = 10 / 3;
\`\`\`

This produces:

\`\`\`text
3.0
\`\`\`

not:

\`\`\`text
3.333333...
\`\`\`

because both operands are integers.

---

## Mistake 2 — Thinking Assignment to Double Changes the Division

\`\`\`c
double result = 10 / 3;
\`\`\`

The division occurs first.

\`\`\`text
10 / 3
 ↓
3
 ↓
3.0
\`\`\`

---

## Mistake 3 — Assuming Conversion Always Preserves Information

For example:

\`\`\`c
int number = 99.99;
\`\`\`

produces an integer value after conversion, with the fractional part discarded.

---

# Lesson Summary

In this lesson, you learned:

- Type conversion changes a value from one data type to another.
- Implicit conversion is performed automatically by C.
- Explicit conversion is requested by the programmer.
- Integer values can be converted to floating-point values.
- Floating-point values converted to integers can lose their fractional part.
- Different arithmetic types can participate in the same expression.
- Integer division remains integer division when both operands are integers.
- Assignment to a different type can cause conversion.
- Character values can participate in integer conversions.
- Conversions may result in information loss.

The key idea is:

\`\`\`text
Original Type
      ↓
Type Conversion
      ↓
Destination Type
      ↓
Converted Value
\`\`\`

For example:

\`\`\`c
int number = 10;
double value = number;
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
→ Lesson 7 — Type Conversion
  Lesson 8 — Type Casting
  Lesson 9 — Arithmetic Operators
  Lesson 10 — Relational Operators
  Lesson 11 — Logical Operators
  Lesson 12 — Assignment Operators
  Lesson 13 — Unary Operators
  Lesson 14 — Bitwise Operators
  Lesson 15 — Operator Precedence

Lesson 7 Complete

Next: Lesson 8 — Type Casting.

`,
};

export default lesson7;
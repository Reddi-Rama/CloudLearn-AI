const lesson1 = {
  id: "lesson1",

  title: "Primitive Data Types",

  content: `

# Lesson 1: Primitive Data Types

## Introduction

A program works with different kinds of information.

For example:

\`\`\`text
10
25
3.14
'A'
\`\`\`

These values are not all the same type.

10 is a whole number, 3.14 contains a fractional part, and 'A' represents a character.

C provides data types to tell the compiler what kind of data a program is working with and how that data should be represented.

Primitive data types are the fundamental data types provided by C.

---

# 1. What Is a Data Type?

A data type specifies the kind of value that an object can hold.

For example:

\`\`\`c
int age = 20;
\`\`\`

Here:

\`\`\`text
int
↓
Data type

age
↓
Identifier

20
↓
Value
\`\`\`

The int type tells the compiler that age is intended to hold an integer value.

---

# 2. Why Are Data Types Important?

Data types are important because different values require different representations.

For example:

\`\`\`c
int students = 50;
float temperature = 36.5f;
char grade = 'A';
\`\`\`

Here:

\`\`\`text
students
↓
Integer

temperature
↓
Floating-point value

grade
↓
Character
\`\`\`

Choosing the appropriate type helps the compiler interpret and operate on the data correctly.

---

# 3. Main Primitive Data Types

The fundamental C data types include:

\`\`\`text
char
int
float
double
void
_Bool
\`\`\`

C also provides type modifiers such as:

\`\`\`text
short
long
signed
unsigned
\`\`\`

These can be combined with appropriate integer or floating-point types to represent different ranges and forms of values.

---

# 4. char Data Type

The char type is used to store a character.

Example:

\`\`\`c
char grade = 'A';
\`\`\`

The character is written using single quotation marks:

\`\`\`text
'A'
\`\`\`

Other examples:

\`\`\`c
char letter = 'B';
char symbol = '#';
char digit = '7';
\`\`\`

Remember that:

\`\`\`text
'A'
\`\`\`

is a character constant, while:

\`\`\`text
"A"
\`\`\`

is a string literal.

---

# 5. Character Values and Integer Representation

In C, a char object occupies one byte, and character values are represented using integer values according to the execution character set.

For example:

\`\`\`c
char letter = 'A';
\`\`\`

The character 'A' has an associated integer representation.

This allows characters to participate in certain arithmetic and comparison operations.

For example:

\`\`\`c
char ch = 'A';
ch = ch + 1;
\`\`\`

The result depends on the character set representation, but for the ordinary execution character set, this kind of operation is commonly used with character codes.

---

# 6. int Data Type

The int type is used for integer values.

Examples:

\`\`\`c
int age = 20;
int count = 100;
int temperature = -5;
\`\`\`

Integers do not contain a fractional part.

For example:

\`\`\`text
10
25
100
-50
\`\`\`

are integer values.

---

# 7. Signed Integers

The int type is signed by default.

Therefore, it can represent both positive and negative values.

For example:

\`\`\`c
int balance = -500;
int temperature = 25;
\`\`\`

The exact range of int depends on the implementation.

You can determine the limits of integer types using the facilities provided by the standard library, such as <limits.h>.

---

# 8. float Data Type

The float type is used for single-precision floating-point values.

Example:

\`\`\`c
float temperature = 36.5f;
\`\`\`

Other examples:

\`\`\`c
float price = 99.99f;
float height = 175.5f;
\`\`\`

The f suffix is commonly used to indicate that a floating-point constant has type float.

Without the suffix:

\`\`\`text
36.5
\`\`\`

the constant has type double.

---

# 9. Floating-Point Values

Floating-point types are useful when values can contain a fractional part.

For example:

\`\`\`text
10.5
3.14
99.75
0.25
\`\`\`

Unlike integers, floating-point values are represented approximately in general.

Therefore, calculations involving floating-point values can sometimes produce small rounding differences.

This becomes important when performing precise numerical calculations.

---

# 10. double Data Type

The double type provides double-precision floating-point representation.

Example:

\`\`\`c
double pi = 3.141592653589793;
\`\`\`

It can represent floating-point values with greater precision than float on typical implementations.

For example:

\`\`\`c
double distance = 12345.6789;
\`\`\`

A double is commonly preferred when more floating-point precision is required.

---

# 11. void Data Type

The void type represents the absence of a value.

It is commonly used with functions.

For example:

\`\`\`c
void displayMessage(void)
{
    printf("Hello\\n");
}
\`\`\`

This function does not return a value.

The void type can also be used with pointers:

\`\`\`c
void *ptr;
\`\`\`

A void * is a pointer to an object type whose specific type is not yet specified.

Pointers will be studied in detail later in the course.

---

# 12. _Bool Data Type

C provides the _Bool type for representing Boolean values.

Example:

\`\`\`c
_Bool isReady = 1;
\`\`\`

A _Bool object can represent:

\`\`\`text
0 → false
1 → true
\`\`\`

The header:

\`\`\`c
#include <stdbool.h>
\`\`\`

provides the more convenient bool name along with:

\`\`\`text
true
false
\`\`\`

For example:

\`\`\`c
#include <stdbool.h>

bool isReady = true;
\`\`\`

This is much easier to read.

---

# 13. Integer Type Modifiers

C provides several modifiers for integer types.

These include:

\`\`\`text
short
long
signed
unsigned
\`\`\`

For example:

\`\`\`c
short int smallNumber;
long int largeNumber;
unsigned int count;
\`\`\`

The exact size and range depend on the implementation, but the language guarantees relationships between the ranges of the standard integer types.

---

# 14. short

short is used for a short integer type.

For example:

\`\`\`c
short int age = 20;
\`\`\`

It can also commonly be written as:

\`\`\`c
short age = 20;
\`\`\`

The implementation determines the exact size, but short is designed to use no more storage than int.

---

# 15. long

long is used for a long integer type.

Example:

\`\`\`c
long population = 1000000L;
\`\`\`

The suffix L can be used to indicate that an integer constant has type long when appropriate.

You may also encounter:

\`\`\`c
long long largeNumber;
\`\`\`

which provides an integer type with at least 64 bits on conforming implementations.

---

# 16. unsigned

The unsigned modifier is used for integer types that should represent non-negative values.

Example:

\`\`\`c
unsigned int count = 100;
\`\`\`

Unlike a signed integer, an unsigned integer does not represent negative values.

Because the representation is used for non-negative values, it provides a larger positive range than the corresponding signed type of the same width.

---

# 17. signed

The signed modifier explicitly indicates a signed integer type.

For example:

\`\`\`c
signed int temperature = -10;
\`\`\`

For ordinary int, signedness is already the default, so:

\`\`\`c
int temperature = -10;
\`\`\`

is sufficient.

---

# 18. Common Integer Combinations

Some commonly used integer declarations are:

\`\`\`c
short int a;
int b;
long int c;
long long int d;

unsigned short int e;
unsigned int f;
unsigned long int g;
unsigned long long int h;
\`\`\`

The language specifies minimum ranges and ordering relationships, while the exact representation and size can vary between systems.

---

# 19. sizeof Operator

You can use the sizeof operator to determine the size, in bytes, of a type or object.

Example:

\`\`\`c
printf("%zu\\n", sizeof(int));
\`\`\`

You can also write:

\`\`\`c
int number;
printf("%zu\\n", sizeof(number));
\`\`\`

The result is implementation-dependent.

This is an important point:

Do not assume that int is always exactly 4 bytes on every C implementation.

Modern systems commonly use 4-byte integers, but C does not require that exact size.

---

# 20. Data Type Example

Consider this program:

\`\`\`c
#include <stdio.h>
#include <stdbool.h>

int main(void)
{
    int age = 20;
    float temperature = 36.5f;
    double price = 125.75;
    char grade = 'A';
    bool passed = true;

    printf("Age = %d\\n", age);
    printf("Temperature = %.1f\\n", temperature);
    printf("Price = %.2f\\n", price);
    printf("Grade = %c\\n", grade);
    printf("Passed = %d\\n", passed);

    return 0;
}
\`\`\`

Different variables are used for different kinds of data.

---

# 21. Choosing the Right Type

The choice of data type should depend on the information being stored.

For example:

\`\`\`text
Number of students
        ↓
int

Temperature with decimal part
        ↓
float / double

Grade such as A
        ↓
char

True or false condition
        ↓
bool
\`\`\`

Choosing an appropriate type makes the program clearer and helps prevent incorrect operations.

---

# 22. Data Type and Memory

Different data types can require different amounts of storage.

For example:

\`\`\`c
char grade;
int age;
double salary;
\`\`\`

The amount of memory used by each object depends on the implementation.

You can inspect the size using:

\`\`\`text
sizeof(grade)
sizeof(age)
sizeof(salary)
\`\`\`

For example:

\`\`\`c
printf("%zu\\n", sizeof(char));
printf("%zu\\n", sizeof(int));
printf("%zu\\n", sizeof(double));
\`\`\`

The results can differ between platforms.

---

# 23. Data Type and Operations

The type of a value also affects how operations are performed.

Consider:

\`\`\`c
int a = 10;
int b = 3;

int result = a / b;
\`\`\`

The result is:

\`\`\`text
3
\`\`\`

because both operands are integers.

Now consider:

\`\`\`c
double a = 10.0;
double b = 3.0;

double result = a / b;
\`\`\`

The result is approximately:

\`\`\`text
3.333333...
\`\`\`

The data type therefore affects the behavior of expressions.

---

# 24. Practical Example

\`\`\`c
#include <stdio.h>
#include <stdbool.h>

int main(void)
{
    int students = 50;
    float average = 85.5f;
    char grade = 'A';
    bool result = true;

    printf("Students = %d\\n", students);
    printf("Average = %.1f\\n", average);
    printf("Grade = %c\\n", grade);
    printf("Result = %d\\n", result);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Students = 50
Average = 85.5
Grade = A
Result = 1
\`\`\`

Here true is represented by 1 when printed with %d.

---

# Common Beginner Mistakes

## Mistake 1 — Using an Integer for Decimal Data

\`\`\`c
int price = 99.50;
\`\`\`

This is not an appropriate way to represent a fractional value.

Use a floating-point type when a fractional part is required:

\`\`\`c
double price = 99.50;
\`\`\`

---

## Mistake 2 — Confusing Character and String

Character:

\`\`\`c
char grade = 'A';
\`\`\`

String:

\`\`\`text
"A"
\`\`\`

They are different kinds of values.

---

## Mistake 3 — Assuming Every int Has the Same Size

Do not assume:

\`\`\`text
int = 4 bytes
\`\`\`

on every C implementation.

Use:

\`\`\`c
sizeof(int)
\`\`\`

when the actual size matters.

---

## Mistake 4 — Forgetting the f Suffix

This is a floating-point constant of type double:

\`\`\`text
3.14
\`\`\`

This is a floating-point constant of type float:

\`\`\`text
3.14f
\`\`\`

---

# Lesson Summary

In this lesson, you learned about the fundamental data types available in C:

\`\`\`text
char
int
float
double
void
_Bool
\`\`\`

You also learned about integer type modifiers:

\`\`\`text
short
long
signed
unsigned
\`\`\`

Important points to remember:

- char is used for character values.
- int is used for integer values.
- float provides single-precision floating-point representation.
- double provides double-precision floating-point representation.
- void represents the absence of a value.
- _Bool represents Boolean values.
- short and long modify integer types.
- signed and unsigned control the signedness of integer types.
- The exact size of a type depends on the C implementation.
- sizeof can be used to determine the size of a type or object.
- The data type affects how values and expressions are handled.

---

# Module 2 Progress

✓ Module 1 — C Fundamentals Complete

→ Lesson 1 — Primitive Data Types
  Lesson 2 — Non-Primitive Data Types
  Lesson 3 — Variables
  Lesson 4 — Variable Scope
  Lesson 5 — Constants
  Lesson 6 — Literals
  Lesson 7 — Type Conversion
  Lesson 8 — Type Casting
  Lesson 9 — Arithmetic Operators
  Lesson 10 — Relational Operators
  Lesson 11 — Logical Operators
  Lesson 12 — Assignment Operators
  Lesson 13 — Unary Operators
  Lesson 14 — Bitwise Operators
  Lesson 15 — Operator Precedence

`,
};

export default lesson1;
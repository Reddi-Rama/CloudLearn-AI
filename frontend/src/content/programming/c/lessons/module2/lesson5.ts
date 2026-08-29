const lesson5 = {
  id: "lesson5",

  title: "Constants",

  content: `

# Lesson 5: Constants

## Introduction

A program often contains values that should remain unchanged.

For example:

- Number of days in a week
- Value of PI used by a calculation
- Maximum allowed attempts
- Tax rate defined for a particular calculation

If a value should not be modified accidentally, C provides ways to represent it as a constant.

A constant is a value that does not change during the relevant use of the program.

In C, constants can be represented in several ways, including:

- const-qualified objects
- enumeration constants
- preprocessor macros
- literal constants

In this lesson, we will focus mainly on const and how constants are used in programs.

---

# 1. What Is a Constant?

A constant represents a value that should not be modified.

For example:

\`\`\`c
const int DAYS_IN_WEEK = 7;
\`\`\`

Here:

\`\`\`text
const
↓
Indicates that the object is not modifiable through this identifier

DAYS_IN_WEEK
↓
Identifier

7
↓
Initial value
\`\`\`

The program can read the value, but it cannot modify the object through that const-qualified identifier.

---

# 2. Why Use Constants?

Constants make programs easier to understand and maintain.

Consider:

\`\`\`c
int total = price * 7;
\`\`\`

A reader may not immediately know what 7 represents.

Instead:

\`\`\`c
const int DAYS_IN_WEEK = 7;

int total = price * DAYS_IN_WEEK;
\`\`\`

The meaning is much clearer.

Constants also help avoid accidental changes to important values.

---

# 3. Declaring a const Object

The const qualifier is used when declaring an object.

For example:

\`\`\`c
const int MAX_STUDENTS = 50;
\`\`\`

Another example:

\`\`\`c
const double PI = 3.141592653589793;
\`\`\`

The object can be read:

\`\`\`c
printf("%d\\n", MAX_STUDENTS);
\`\`\`

But an assignment such as:

\`\`\`c
MAX_STUDENTS = 100;
\`\`\`

is not allowed.

---

# 4. Initialization of Constants

A const object should normally be initialized when it is declared.

For example:

\`\`\`c
const int MAX_ATTEMPTS = 3;
\`\`\`

You can then use:

\`\`\`c
printf("%d\\n", MAX_ATTEMPTS);
\`\`\`

A const object cannot later be assigned a new value through that identifier.

---

# 5. const Does Not Mean Compile-Time Constant in Every Context

This is an important C concept.

Consider:

\`\`\`c
const int size = 10;
\`\`\`

This creates a read-only object through the identifier size.

It does not mean that size is automatically an integer constant expression in every context.

For example, the rules for array bounds and constant expressions have their own requirements.

So remember:

\`\`\`text
const object
↓
Object cannot be modified through that identifier

Constant expression
↓
Expression that satisfies C's rules for a constant expression
\`\`\`

These are related concepts, but they are not identical.

---

# 6. Integer Constants

C allows integer constants to be written directly in source code.

For example:

\`\`\`c
int age = 20;
\`\`\`

The value:

\`\`\`text
20
\`\`\`

is an integer constant.

Other examples:

\`\`\`text
0
10
25
100
-50
\`\`\`

Different integer bases are also supported.

For example:

\`\`\`c
int decimal = 25;
int hexadecimal = 0x19;
int octal = 031;
\`\`\`

The notation used determines how the constant is interpreted.

---

# 7. Floating-Point Constants

Floating-point constants represent values with fractional parts.

Examples:

\`\`\`c
float price = 99.5f;
double pi = 3.14159;
\`\`\`

Examples include:

\`\`\`text
3.14
10.5
0.25
99.99
\`\`\`

By default, a decimal floating constant such as:

\`\`\`text
3.14
\`\`\`

has type double.

Adding f:

\`\`\`text
3.14f
\`\`\`

makes it a float constant.

---

# 8. Character Constants

Character constants are written using single quotation marks.

For example:

\`\`\`c
char grade = 'A';
\`\`\`

Here:

\`\`\`text
'A'
\`\`\`

is a character constant.

Other examples:

\`\`\`text
'B'
'7'
'+'
'\\n'
\`\`\`

A character constant is different from a string literal.

\`\`\`text
'A'
\`\`\`

is a character constant.

\`\`\`text
"A"
\`\`\`

is a string literal.

---

# 9. String Literals

A sequence of characters enclosed in double quotation marks is a string literal.

For example:

\`\`\`c
printf("Hello");
\`\`\`

Here:

\`\`\`text
"Hello"
\`\`\`

is a string literal.

String literals are stored as character arrays with a terminating null character.

For example:

\`\`\`c
char name[] = "Ravi";
\`\`\`

is stored conceptually as:

\`\`\`text
'R' 'a' 'v' 'i' '\\0'
\`\`\`

---

# 10. Enumeration Constants

C provides enumerations using the enum keyword.

For example:

\`\`\`c
enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY
};
\`\`\`

The names:

\`\`\`text
MONDAY
TUESDAY
WEDNESDAY
\`\`\`

are enumeration constants.

For example:

\`\`\`c
enum Day today = TUESDAY;
\`\`\`

Enumeration constants have type int.

They are useful when a program needs a fixed set of named values.

---

# 11. #define Constants

The preprocessor can also be used to define symbolic constants.

For example:

\`\`\`c
#define MAX_STUDENTS 50
\`\`\`

Then:

\`\`\`c
int students[MAX_STUDENTS];
\`\`\`

Before compilation proper, the preprocessor replaces occurrences of MAX_STUDENTS according to the macro definition.

Another example:

\`\`\`c
#define PI 3.14159
\`\`\`

Then:

\`\`\`c
double area = PI * radius * radius;
\`\`\`

This is a macro, not a const object.

---

# 12. const vs #define

Consider:

\`\`\`c
const int MAX = 100;
\`\`\`

and:

\`\`\`c
#define MAX 100
\`\`\`

They are not the same.

## const

\`\`\`c
const int MAX = 100;
\`\`\`

creates a typed object that cannot be modified through the identifier.

## #define

\`\`\`c
#define MAX 100
\`\`\`

defines a preprocessor macro.

The preprocessor performs textual replacement before the compiler processes the resulting source.

A simple comparison:

\`\`\`text
const
Creates a typed object
Handled by the compiler
Has a type
Respects C scope rules
Useful for typed read-only data

#define
Creates a macro
Handled by the preprocessor
Macro itself has no C type
Macro visibility follows preprocessing rules
Useful for preprocessing substitution
\`\`\`

For ordinary typed constants, const is often clearer.

---

# 13. Constants in Calculations

Constants can be used directly in expressions.

For example:

\`\`\`c
const double TAX_RATE = 0.18;

double tax = price * TAX_RATE;
\`\`\`

The value of TAX_RATE remains unchanged.

This makes the calculation easier to understand.

Compare:

\`\`\`c
double tax = price * 0.18;
\`\`\`

with:

\`\`\`c
const double TAX_RATE = 0.18;
double tax = price * TAX_RATE;
\`\`\`

The second version clearly explains what 0.18 represents.

---

# 14. Constants Improve Maintainability

Suppose a program uses the same value in many places:

\`\`\`text
price * 0.18
salary * 0.18
total * 0.18
\`\`\`

If the value changes, every occurrence would need to be updated.

Instead:

\`\`\`c
const double TAX_RATE = 0.18;
\`\`\`

and then:

\`\`\`c
price * TAX_RATE
salary * TAX_RATE
total * TAX_RATE
\`\`\`

Now the value is defined in one place.

This makes maintenance easier.

---

# 15. Constant Pointers

The const qualifier can also be used with pointers.

For example:

\`\`\`c
const int *ptr;
\`\`\`

This means the pointed-to int cannot be modified through ptr.

Another form is:

\`\`\`c
int *const ptr = &number;
\`\`\`

Here the pointer itself cannot be changed to point somewhere else after initialization.

These concepts become important when we study pointers.

For now, remember that the position of const affects what is read-only.

---

# 16. Example Program

\`\`\`c
#include <stdio.h>

int main(void)
{
    const double TAX_RATE = 0.18;

    double price = 1000.0;
    double tax = price * TAX_RATE;
    double total = price + tax;

    printf("Price = %.2f\\n", price);
    printf("Tax = %.2f\\n", tax);
    printf("Total = %.2f\\n", total);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Price = 1000.00
Tax = 180.00
Total = 1180.00
\`\`\`

The tax rate is clearly identified as a value that should not be modified.

---

# 17. Choosing Good Constant Names

Constants should have meaningful names.

For example:

\`\`\`c
const int MAX_USERS = 100;
const int DAYS_IN_WEEK = 7;
const double TAX_RATE = 0.18;
\`\`\`

These names immediately communicate the purpose of the values.

A common convention is to write symbolic constants in uppercase with underscores.

This is a naming convention, not a C language requirement.

---

# 18. Constants vs Variables

Consider:

\`\`\`c
int age = 20;
age = 21;
\`\`\`

This is valid because age is an ordinary modifiable object.

Now:

\`\`\`c
const int DAYS = 7;
DAYS = 8;
\`\`\`

The second assignment is invalid because DAYS is const-qualified.

The distinction is:

\`\`\`text
Variable
↓
Normally modifiable

const-qualified object
↓
Not modifiable through that identifier
\`\`\`

---

# 19. Practical Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    const int PASS_MARKS = 40;

    int student_marks = 75;

    if (student_marks >= PASS_MARKS)
    {
        printf("Student passed\\n");
    }

    return 0;
}
\`\`\`

Here:

\`\`\`text
PASS_MARKS
↓
Constant

student_marks
↓
Variable
\`\`\`

The variable can change, but the pass mark is intended to remain fixed.

---

# Common Beginner Mistakes

## Mistake 1 — Trying to Modify a const Object

Incorrect:

\`\`\`c
const int MAX = 100;

MAX = 200;
\`\`\`

The object cannot be modified through MAX.

---

## Mistake 2 — Confusing const With #define

These are different mechanisms:

\`\`\`c
const int MAX = 100;
\`\`\`

and:

\`\`\`c
#define MAX 100
\`\`\`

Do not treat them as exactly the same.

---

## Mistake 3 — Confusing Character Constants With Strings

Character:

\`\`\`text
'A'
\`\`\`

String:

\`\`\`text
"A"
\`\`\`

They have different types and representations.

---

## Mistake 4 — Using Unclear Magic Numbers

Instead of:

\`\`\`c
if (marks >= 40)
\`\`\`

you may prefer:

\`\`\`c
const int PASS_MARKS = 40;

if (marks >= PASS_MARKS)
\`\`\`

when the value has a meaningful role in the program.

---

# Lesson Summary

In this lesson, you learned:

- A constant represents a value that should not be modified.
- const can create a read-only object through a particular identifier.
- Integer, floating-point, and character constants can appear directly in C source code.
- Enumeration constants provide named integer values.
- #define creates preprocessor macros and is different from const.
- Meaningful constant names improve readability.
- Constants reduce repeated magic numbers.
- const can also be used with pointers.
- A const object is not automatically the same thing as a compile-time constant expression.

The main idea is:

\`\`\`text
Variable
↓
Value can normally change

Constant
↓
Value is intended to remain unchanged
\`\`\`

---

# Module 2 Progress

✓ Module 1 — C Fundamentals Complete

✓ Lesson 1 — Primitive Data Types
✓ Lesson 2 — Non-Primitive Data Types
✓ Lesson 3 — Variables
✓ Lesson 4 — Variable Scope
→ Lesson 5 — Constants
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

Lesson 5 Complete

Next: Lesson 6 — Literals.

`,
};

export default lesson5;
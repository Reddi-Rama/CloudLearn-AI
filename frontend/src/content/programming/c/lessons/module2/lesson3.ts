const lesson3 = {
  id: "lesson3",

  title: "Variables",

  content: `

# Lesson 3: Variables

## Introduction

A program often needs to store information while it is running.

For example:

- Student age
- Product price
- Number of employees
- Temperature
- Exam marks

C uses variables to store values that can be changed during program execution.

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
Variable name

20
↓
Initial value
\`\`\`

Variables are one of the most frequently used concepts in C programming.

---

# 1. What Is a Variable?

A variable is a named object that can store a value.

For example:

\`\`\`c
int age = 20;
\`\`\`

The variable:

\`\`\`text
age
\`\`\`

stores the value:

\`\`\`text
20
\`\`\`

The value can later be changed:

\`\`\`c
age = 21;
\`\`\`

Now age contains:

\`\`\`text
21
\`\`\`

---

# 2. Why Do We Need Variables?

Without variables, programs would have difficulty working with changing information.

Consider:

\`\`\`c
printf("%d\\n", 20);
\`\`\`

This simply prints a fixed value.

But:

\`\`\`c
int age = 20;

printf("%d\\n", age);
\`\`\`

allows the program to work with the stored value.

The value can later change:

\`\`\`c
age = 21;
\`\`\`

This makes variables essential for calculations, input processing, loops, data structures, and almost every useful program.

---

# 3. Declaring a Variable

A variable declaration tells the compiler the variable's type and name.

For example:

\`\`\`c
int age;
\`\`\`

Here:

\`\`\`text
int
↓
Type

age
↓
Identifier
\`\`\`

Another example:

\`\`\`c
float temperature;
\`\`\`

And:

\`\`\`c
char grade;
\`\`\`

At this point, the variables have been declared, but no value has been explicitly assigned to them.

---

# 4. Initializing a Variable

A variable can be given an initial value when it is declared.

For example:

\`\`\`c
int age = 20;
\`\`\`

This is called initialization.

Other examples:

\`\`\`c
float temperature = 36.5f;
char grade = 'A';
double price = 99.99;
\`\`\`

Initialization is often preferable because it gives the variable a known starting value.

---

# 5. Declaration and Initialization

These two operations can be written separately:

\`\`\`c
int age;
age = 20;
\`\`\`

Or together:

\`\`\`c
int age = 20;
\`\`\`

The second form is usually more concise.

The distinction is:

\`\`\`text
Declaration
↓
Introduces the variable

Initialization
↓
Provides its initial value
\`\`\`

---

# 6. Assigning a New Value

Once a variable exists, its value can be changed.

Example:

\`\`\`c
int score = 50;

score = 75;
\`\`\`

After the assignment:

\`\`\`text
score = 75
\`\`\`

The assignment operator is:

\`\`\`text
=
\`\`\`

It stores the value on the right side into the object on the left side.

---

# 7. Multiple Variables

You can declare multiple variables:

\`\`\`c
int age;
int marks;
int total;
\`\`\`

You can also initialize them:

\`\`\`c
int age = 20;
int marks = 85;
int total = 105;
\`\`\`

Each variable has its own stored value.

---

# 8. Multiple Variables in One Declaration

C also allows multiple variables of the same type to be declared in one statement:

\`\`\`c
int age, marks, total;
\`\`\`

They can also be initialized:

\`\`\`c
int age = 20, marks = 85, total = 105;
\`\`\`

However, when declarations become complicated, using one variable declaration per line can improve readability.

For example:

\`\`\`c
int age = 20;
int marks = 85;
int total = 105;
\`\`\`

is often easier to read.

---

# 9. Variables of Different Types

A program can contain variables of different types.

For example:

\`\`\`c
int age = 20;
float average = 85.5f;
double salary = 45000.75;
char grade = 'A';
\`\`\`

Each variable has a type appropriate for the value it represents.

---

# 10. Variable Names

Variable names must follow the rules for identifiers.

Valid examples:

\`\`\`text
age
student_count
totalMarks
number1
_average
\`\`\`

They can contain letters, digits, and underscores, subject to C's identifier rules.

Invalid examples include:

\`\`\`text
2number
student count
total-marks
\`\`\`

A variable name should also be meaningful.

Prefer:

\`\`\`c
int student_count;
\`\`\`

over:

\`\`\`c
int x;
\`\`\`

when the variable represents a student count.

---

# 11. Variables and Memory

A variable represents an object stored somewhere in memory.

For example:

\`\`\`c
int number = 100;
\`\`\`

Conceptually:

\`\`\`text
Memory
┌──────────────┐
│ number       │
│      100     │
└──────────────┘
\`\`\`

The compiler determines how the object is represented and where it is stored according to the program and implementation.

You can obtain the address of an object using the address-of operator:

\`\`\`c
&number
\`\`\`

Pointers will be covered in detail later.

---

# 12. Changing Variable Values

Variables are called variables because their stored values can change.

Example:

\`\`\`c
int count = 10;

count = 20;
count = 30;
count = 40;
\`\`\`

The final value is:

\`\`\`text
40
\`\`\`

Each assignment replaces the previous stored value.

---

# 13. Variables in Calculations

Variables can participate in expressions.

For example:

\`\`\`c
int a = 10;
int b = 20;

int total = a + b;
\`\`\`

The result is:

\`\`\`text
total = 30
\`\`\`

Another example:

\`\`\`c
int price = 100;
int quantity = 5;

int total = price * quantity;
\`\`\`

Now:

\`\`\`text
total = 500
\`\`\`

This is one of the main reasons variables are important.

---

# 14. Using scanf() With Variables

Variables can store input received from the user.

For example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Age = %d\\n", age);

    return 0;
}
\`\`\`

The user enters a value, and that value is stored in:

\`\`\`text
age
\`\`\`

The &age expression provides the address where scanf() should store the input.

---

# 15. Constants vs Variables

A normal variable can be changed:

\`\`\`c
int age = 20;

age = 21;
\`\`\`

A constant can be used when a value should not be modified through that identifier.

For example:

\`\`\`c
const int DAYS = 7;
\`\`\`

The details of const will be covered in Lesson 5.

For now, remember:

\`\`\`text
Variable
↓
Value can normally be modified

Constant-qualified object
↓
Modification through that identifier is not allowed
\`\`\`

---

# 16. Local Variables

A variable declared inside a function or block is generally a local variable.

For example:

\`\`\`c
int main(void)
{
    int age = 20;

    printf("%d\\n", age);

    return 0;
}
\`\`\`

Here:

\`\`\`text
age
\`\`\`

is local to the block containing its declaration.

Its accessibility is limited to the appropriate scope.

Variable scope will be studied in the next lesson.

---

# 17. Global Variables

A variable defined outside all functions has file scope.

For example:

\`\`\`c
#include <stdio.h>

int count = 10;

int main(void)
{
    printf("%d\\n", count);

    return 0;
}
\`\`\`

Here:

\`\`\`text
count
\`\`\`

is defined outside main().

Such variables have a broader scope than ordinary block-local variables, although visibility can also be affected by declarations and linkage.

Global variables should be used carefully because excessive use can make large programs harder to understand and maintain.

---

# 18. Variable Initialization Matters

Consider:

\`\`\`c
int number;
printf("%d\\n", number);
\`\`\`

For an automatic local variable such as number, no initial value is automatically provided.

Reading an uninitialized automatic object can result in an indeterminate value and may lead to undefined behavior depending on how it is used.

A safer approach is:

\`\`\`c
int number = 0;
\`\`\`

Then the variable has a known initial value.

---

# 19. Assignment Between Variables

A value can be copied from one variable to another.

For example:

\`\`\`c
int first = 10;
int second;

second = first;
\`\`\`

Now:

\`\`\`text
first  = 10
second = 10
\`\`\`

The assignment copies the value represented by first into second.

Changing first afterward does not change second:

\`\`\`c
first = 20;
\`\`\`

Now:

\`\`\`text
first  = 20
second = 10
\`\`\`

For ordinary integer objects, each variable contains its own value.

---

# 20. Variables With Expressions

The right side of an assignment can contain an expression.

For example:

\`\`\`c
int a = 10;
int b = 20;

int result = a + b * 2;
\`\`\`

The expression is evaluated according to C's operator rules.

The resulting value is then stored in:

\`\`\`text
result
\`\`\`

Operator precedence will be studied later in this module.

---

# 21. Example Program

\`\`\`c
#include <stdio.h>

int main(void)
{
    int price = 100;
    int quantity = 3;
    int total;

    total = price * quantity;

    printf("Price = %d\\n", price);
    printf("Quantity = %d\\n", quantity);
    printf("Total = %d\\n", total);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Price = 100
Quantity = 3
Total = 300
\`\`\`

This simple program demonstrates:

\`\`\`text
Declaration
Initialization
Assignment
Variables
Expression
Output
\`\`\`

---

# 22. Good Variable Naming

Good names make programs easier to maintain.

Prefer:

\`\`\`c
int student_count;
float average_marks;
double product_price;
\`\`\`

instead of:

\`\`\`c
int x;
float y;
double z;
\`\`\`

when the purpose of the values is important.

Good variable names answer the question:

\`\`\`text
"What does this value represent?"
\`\`\`

---

# 23. Variable Naming Conventions

A project should generally use a consistent naming convention.

For example, with snake case:

\`\`\`c
int student_count;
int total_marks;
float average_marks;
\`\`\`

Or camel case:

\`\`\`c
int studentCount;
int totalMarks;
float averageMarks;
\`\`\`

C does not require one particular style.

Consistency within a project is the important part.

---

# Common Beginner Mistakes

## Mistake 1 — Using a Variable Before Proper Initialization

Avoid:

\`\`\`c
int total;
printf("%d\\n", total);
\`\`\`

Instead:

\`\`\`c
int total = 0;
printf("%d\\n", total);
\`\`\`

---

## Mistake 2 — Confusing = With Equality

This:

\`\`\`c
number = 10;
\`\`\`

assigns a value.

This:

\`\`\`text
number == 10
\`\`\`

tests equality.

They are different operations.

---

## Mistake 3 — Changing a Constant

If you declare:

\`\`\`c
const int DAYS = 7;
\`\`\`

you should not attempt:

\`\`\`c
DAYS = 8;
\`\`\`

The const rules will be covered in more detail later.

---

## Mistake 4 — Poor Variable Names

Instead of:

\`\`\`c
int x;
\`\`\`

prefer:

\`\`\`c
int student_count;
\`\`\`

when that is what the variable represents.

---

# Lesson Summary

In this lesson, you learned:

- A variable is a named object used to store a value.
- Variables have a specific data type.
- Variables can be declared and initialized.
- Their values can normally be changed during execution.
- Variables can participate in expressions and calculations.
- Variables can receive input using functions such as scanf().
- Local variables have limited scope.
- Variables defined outside functions have file scope.
- Automatic local variables should be initialized before their values are read.
- Meaningful variable names improve program readability.
- The = operator is used for assignment.

The basic pattern to remember is:

\`\`\`text
Data Type + Variable Name + Value

        ↓

int age = 20;
\`\`\`

---

# Module 2 Progress

✓ Module 1 — C Fundamentals Complete

✓ Lesson 1 — Primitive Data Types
✓ Lesson 2 — Non-Primitive Data Types
→ Lesson 3 — Variables
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

Lesson 3 Complete

Next: Lesson 4 — Variable Scope.

`,
};

export default lesson3;
const lesson2 = {
  id: "lesson2",

  title: "Non-Primitive Data Types",

  content: `

# Lesson 2: Non-Primitive Data Types

## Introduction

In the previous lesson, we studied the fundamental data types provided by C, such as:

\`\`\`text
char
int
float
double
_Bool
\`\`\`

These types are used to represent individual values.

But real programs often need to work with collections of values or more complex data.

For example:

- A list of student marks
- A person's name
- Employee information
- A collection of related values

C provides several ways to create these more complex data structures.

These are commonly discussed as derived and user-defined data types.

In this lesson, we will understand arrays, pointers, structures, unions, enumerations, and other non-primitive forms used in C.

---

# 1. What Are Non-Primitive Data Types?

Non-primitive data types are types that are built from or used to organize fundamental data types.

For example:

\`\`\`c
int marks[5];
\`\`\`

Here, int is a fundamental type, while:

\`\`\`text
marks
\`\`\`

represents an array containing multiple integers.

Similarly:

\`\`\`c
struct Student
{
    int age;
    float marks;
};
\`\`\`

creates a structure that combines multiple pieces of information.

A simple view is:

\`\`\`text
Primitive Types
      ↓
char, int, float, double, ...
      ↓
Used to build
      ↓
Derived / User-Defined Types
      ↓
Arrays, Pointers, Structures, Unions, Enumerations
\`\`\`

---

# 2. Arrays

An array is a collection of elements of the same type stored under one name.

For example:

\`\`\`c
int marks[5];
\`\`\`

creates an array capable of storing five integers.

Instead of creating:

\`\`\`c
int mark1;
int mark2;
int mark3;
int mark4;
int mark5;
\`\`\`

we can use:

\`\`\`c
int marks[5];
\`\`\`

This becomes especially useful when handling large amounts of similar data.

---

# 3. Array Elements

Each element of an array has an index.

C arrays use zero-based indexing.

For:

\`\`\`c
int marks[5];
\`\`\`

the indexes are:

\`\`\`text
0
1
2
3
4
\`\`\`

The elements can be accessed using:

\`\`\`c
marks[0]
marks[1]
marks[2]
marks[3]
marks[4]
\`\`\`

For example:

\`\`\`c
int marks[5] = {80, 75, 90, 85, 95};
\`\`\`

Then:

\`\`\`text
marks[0] → 80
marks[1] → 75
marks[2] → 90
marks[3] → 85
marks[4] → 95
\`\`\`

Arrays will be studied in much greater detail later in the course.

---

# 4. Multidimensional Arrays

C also supports arrays with more than one dimension.

For example:

\`\`\`c
int matrix[2][3];
\`\`\`

This represents a two-dimensional array with:

\`\`\`text
2 rows
3 columns
\`\`\`

It can be initialized as:

\`\`\`c
int matrix[2][3] =
{
    {1, 2, 3},
    {4, 5, 6}
};
\`\`\`

The elements can be accessed using two indexes:

\`\`\`c
matrix[0][0]
matrix[1][2]
\`\`\`

Multidimensional arrays are useful for matrices, tables, grids, and similar data.

---

# 5. Strings in C

C does not have a separate built-in string primitive data type.

Instead, strings are represented using arrays of characters.

For example:

\`\`\`c
char name[] = "Ravi";
\`\`\`

The characters are stored as an array ending with a special null character:

\`\`\`text
'R' 'a' 'v' 'i' '\\0'
\`\`\`

The '\\0' marks the end of the string.

String handling will be covered more thoroughly when we study arrays and strings.

---

# 6. Pointers

A pointer is an object that stores the address of another object or function, depending on its type and use.

For example:

\`\`\`c
int number = 10;
int *ptr = &number;
\`\`\`

Here:

\`\`\`text
number
↓
stores 10

ptr
↓
stores the address of number
\`\`\`

The * is used in the declaration:

\`\`\`c
int *ptr;
\`\`\`

and & obtains the address of an object:

\`\`\`c
&number
\`\`\`

Pointers are one of the most important features of C and will be studied in detail later.

---

# 7. Structure

A structure allows different types of data to be grouped together under one type.

For example:

\`\`\`c
struct Student
{
    int age;
    float marks;
    char grade;
};
\`\`\`

A variable of this structure type can be declared as:

\`\`\`c
struct Student student1;
\`\`\`

Now student1 can contain:

\`\`\`text
age
marks
grade
\`\`\`

This is useful for representing real-world entities.

For example:

\`\`\`text
Student
 ├── Name
 ├── Age
 ├── Marks
 └── Grade
\`\`\`

Structures will become very important when we build larger C programs.

---

# 8. Accessing Structure Members

The dot operator:

\`\`\`text
.
\`\`\`

is used to access a member of a structure object.

For example:

\`\`\`c
student1.age = 20;
student1.marks = 85.5f;
student1.grade = 'A';
\`\`\`

Here:

\`\`\`text
student1.age
student1.marks
student1.grade
\`\`\`

refer to individual members of the structure.

---

# 9. Union

A union is similar to a structure, but its members share the same memory location.

For example:

\`\`\`c
union Data
{
    int number;
    float value;
    char letter;
};
\`\`\`

A union variable can be declared as:

\`\`\`c
union Data data;
\`\`\`

The members:

\`\`\`text
number
value
letter
\`\`\`

share storage.

Only one member's stored value should generally be treated as the currently active value at a time, subject to the rules of C.

---

# 10. Structure vs Union

The main difference is how their members are stored.

## Structure

\`\`\`c
struct Student
{
    int age;
    float marks;
    char grade;
};
\`\`\`

Each member has its own storage within the structure.

Conceptually:

\`\`\`text
Structure
┌──────────┐
│ age      │
├──────────┤
│ marks    │
├──────────┤
│ grade    │
└──────────┘
\`\`\`

## Union

\`\`\`c
union Data
{
    int number;
    float value;
    char letter;
};
\`\`\`

Members share storage:

\`\`\`text
Union
┌──────────┐
│ shared   │
│ storage  │
└──────────┘
\`\`\`

Unions are useful when different representations need to occupy the same storage.

---

# 11. Enumeration

An enumeration, declared using enum, allows a programmer to define a set of named integer constants.

For example:

\`\`\`c
enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY
};
\`\`\`

A variable can then be declared:

\`\`\`c
enum Day today;
\`\`\`

The names make code easier to understand than using unexplained numeric values.

For example:

\`\`\`c
today = WEDNESDAY;
\`\`\`

is much clearer than:

\`\`\`c
today = 2;
\`\`\`

The exact integer representation is implementation-defined, but enumeration constants have type int.

---

# 12. typedef

The typedef keyword can be used to create an alias for an existing type.

For example:

\`\`\`c
typedef unsigned int uint;
\`\`\`

Now:

\`\`\`c
uint count;
\`\`\`

can be used as an alias for:

\`\`\`c
unsigned int count;
\`\`\`

typedef is especially useful with structures.

For example:

\`\`\`c
typedef struct
{
    int age;
    float marks;
} Student;
\`\`\`

Now we can write:

\`\`\`c
Student student1;
\`\`\`

instead of:

\`\`\`c
struct Student student1;
\`\`\`

---

# 13. Function Types

Functions also have types.

For example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

This function returns an int.

Its function type is determined by its return type and parameter types.

Functions can also be associated with pointers.

For example:

\`\`\`c
int (*operation)(int, int);
\`\`\`

This declares operation as a pointer to a function that takes two int arguments and returns an int.

Function pointers are an advanced topic and will be studied later.

---

# 14. Derived and User-Defined Types

It is useful to distinguish between types that C derives from existing types and types that programmers define.

## Derived types

Examples include:

\`\`\`text
Arrays
Pointers
Function types
\`\`\`

## User-defined types

Examples include:

\`\`\`text
Structures
Unions
Enumerations
typedef aliases
\`\`\`

These categories help organize the different ways C can represent data.

---

# 15. Why Non-Primitive Types Are Important

Suppose we want to store the marks of 100 students.

Using individual variables would be impractical:

\`\`\`c
int mark1;
int mark2;
int mark3;
/* ... */
int mark100;
\`\`\`

An array is much more suitable:

\`\`\`c
int marks[100];
\`\`\`

Now suppose we need to represent one student:

\`\`\`text
Name
Age
Marks
Grade
\`\`\`

A structure is more appropriate:

\`\`\`c
struct Student
{
    char name[50];
    int age;
    float marks;
    char grade;
};
\`\`\`

This shows why non-primitive types are important.

---

# 16. Example Using an Array

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks[5] = {80, 75, 90, 85, 95};

    printf("First mark = %d\\n", marks[0]);
    printf("Third mark = %d\\n", marks[2]);

    return 0;
}
\`\`\`

Output:

\`\`\`text
First mark = 80
Third mark = 90
\`\`\`

---

# 17. Example Using a Structure

\`\`\`c
#include <stdio.h>

struct Student
{
    int age;
    float marks;
};

int main(void)
{
    struct Student student1;

    student1.age = 20;
    student1.marks = 85.5f;

    printf("Age = %d\\n", student1.age);
    printf("Marks = %.1f\\n", student1.marks);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Age = 20
Marks = 85.5
\`\`\`

This program combines two different types of information into one structure.

---

# 18. Choosing the Appropriate Type

Different situations require different types.

\`\`\`text
One whole number
        ↓
int

Several whole numbers
        ↓
Array of int

One character
        ↓
char

Sequence of characters
        ↓
Character array

Different types belonging to one entity
        ↓
Structure

Different possible representations sharing storage
        ↓
Union

Named set of integer constants
        ↓
Enumeration
\`\`\`

The ability to select an appropriate type is an important programming skill.

---

# 19. Important Point About "Non-Primitive"

You may see textbooks classify C types in slightly different ways.

Some describe:

\`\`\`text
Primitive
Non-Primitive
\`\`\`

while C language references more commonly discuss:

\`\`\`text
Basic types
Derived types
Enumeration types
Structure and union types
\`\`\`

So when working professionally with C, it is useful to know the standard terminology.

The important concept is that C provides several mechanisms for building more complex types from fundamental types.

---

# Lesson Summary

In this lesson, you learned how C represents more complex forms of data.

Important concepts include:

- Arrays store multiple values of the same type.
- Multidimensional arrays organize data into multiple dimensions.
- C represents strings using character arrays.
- Pointers store addresses.
- Structures group different types of data together.
- Unions allow members to share storage.
- Enumerations define named integer constants.
- typedef creates aliases for existing types.
- Functions also have types and can be referenced using function pointers.
- C commonly describes these using terms such as derived types and user-defined types.

The key idea is:

\`\`\`text
Basic Data Types
      ↓
Building Blocks
      ↓
Arrays / Pointers / Structures / Unions / Enums
      ↓
Complex Data Representation
\`\`\`

---

# Module 2 Progress

✓ Module 1 — C Fundamentals Complete

✓ Lesson 1 — Primitive Data Types
→ Lesson 2 — Non-Primitive Data Types
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

Lesson 2 Complete

Next: Lesson 3 — Variables.

`,
};

export default lesson2;
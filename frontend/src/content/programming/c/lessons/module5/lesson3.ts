const lesson3 = {
  id: "lesson3",

  title: "Array Declaration",

  content: `

# Lesson 3: Array Declaration

---

## Introduction

Before using an array, it must be **declared**.

Array declaration tells the compiler:

- The data type of the elements.
- The name of the array.
- The number of elements the array can store.

The basic syntax is:

\`\`\`text
data_type array_name[size];
\`\`\`

---

# 1. Basic Array Declaration

Example:

\`\`\`c
int numbers[5];
\`\`\`

Here:

\`\`\`text
int       → Data type
numbers   → Array name
5         → Array size
\`\`\`

The array can store five integer values.

The valid indexes are:

\`\`\`text
0  1  2  3  4
\`\`\`

---

# 2. Declaring a Float Array

\`\`\`c
float prices[10];
\`\`\`

This creates an array named prices that can store ten float values.

Indexes:

\`\`\`text
0  1  2  3  4  5  6  7  8  9
\`\`\`

---

# 3. Declaring a Character Array

\`\`\`c
char letters[5];
\`\`\`

This creates an array capable of storing five characters.

For example:

\`\`\`text
letters[0]
letters[1]
letters[2]
letters[3]
letters[4]
\`\`\`

Character arrays are particularly important when we study strings.

---

# 4. Declaring Different Arrays

Some examples:

\`\`\`c
int marks[50];
float temperatures[7];
double measurements[20];
char letters[10];
\`\`\`

The data type determines the type of value that each element can store.

---

# 5. Array Size

The number inside the square brackets specifies the number of elements.

\`\`\`c
int numbers[5];
\`\`\`

means the array contains five elements.

\`\`\`c
int numbers[10];
\`\`\`

means the array contains ten elements.

For:

\`\`\`c
int numbers[10];
\`\`\`

the valid indexes are:

\`\`\`text
0 through 9
\`\`\`

---

# 6. Array Index and Size

It is important not to confuse the size with the last index.

For:

\`\`\`c
int numbers[5];
\`\`\`

we have:

\`\`\`text
Number of elements → 5
First index         → 0
Last valid index    → 4
\`\`\`

The last valid index is:

\`\`\`text
size - 1
\`\`\`

---

# 7. Declaring an Array and Assigning Values Later

An array can be declared first and its elements assigned later.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[5];

    numbers[0] = 10;
    numbers[1] = 20;
    numbers[2] = 30;
    numbers[3] = 40;
    numbers[4] = 50;

    printf("%d\\n", numbers[0]);

    return 0;
}
\`\`\`

Output:

\`\`\`text
10
\`\`\`

---

# 8. Declaring Multiple Arrays

A program can contain several arrays.

\`\`\`c
int marks[5];
float prices[10];
char grades[5];
\`\`\`

Each array has its own name, size, and element type.

---

# 9. Array Declaration With a Constant Size

It is common to use a constant to represent the array size.

\`\`\`c
#define SIZE 5

int numbers[SIZE];
\`\`\`

This makes the size easier to change later.

For example:

\`\`\`c
#define SIZE 100

int numbers[SIZE];
\`\`\`

Now the array can hold 100 elements.

---

# 10. Variable Length Arrays

C also supports variable length arrays in versions of the language that provide them.

Example:

\`\`\`c
int size;

scanf("%d", &size);

int numbers[size];
\`\`\`

Here, the array size is determined at runtime.

However, variable length arrays have limitations and are not supported by every compiler configuration, so fixed-size arrays are often preferred for beginner programs.

---

# 11. Array Declaration in a Function

An array can also be declared inside a function.

\`\`\`c
void process(void)
{
    int numbers[10];

    /* use numbers here */
}
\`\`\`

The array is local to that function block.

---

# 12. Array Declaration With Different Data Types

**Integer**

\`\`\`c
int numbers[5];
\`\`\`

**Float**

\`\`\`c
float values[5];
\`\`\`

**Double**

\`\`\`c
double measurements[5];
\`\`\`

**Character**

\`\`\`c
char letters[5];
\`\`\`

---

# 13. Important Rule — Same Data Type

All elements of an array have the same declared data type.

For:

\`\`\`c
int numbers[5];
\`\`\`

the elements are:

\`\`\`text
numbers[0] → int
numbers[1] → int
numbers[2] → int
numbers[3] → int
numbers[4] → int
\`\`\`

The array cannot be used as a mixed collection of unrelated data types.

---

# 14. Example Program

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks[5];

    marks[0] = 85;
    marks[1] = 72;
    marks[2] = 91;
    marks[3] = 68;
    marks[4] = 80;

    for (int i = 0; i < 5; i++)
    {
        printf("marks[%d] = %d\\n", i, marks[i]);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
marks[0] = 85
marks[1] = 72
marks[2] = 91
marks[3] = 68
marks[4] = 80
\`\`\`

---

# 15. Important Points to Remember

When declaring an array:

\`\`\`c
int numbers[5];
\`\`\`

remember:

\`\`\`text
Array name       → numbers
Element type     → int
Number of elements → 5
First index      → 0
Last valid index → 4
\`\`\`

General form:

\`\`\`text
data_type array_name[size];
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Using the Size as the Last Index

For:

\`\`\`c
int numbers[5];
\`\`\`

this is not a valid element:

\`\`\`c
numbers[5]
\`\`\`

The last valid element is:

\`\`\`c
numbers[4]
\`\`\`

---

## Mistake 2 — Forgetting the Square Brackets

Correct:

\`\`\`c
int numbers[5];
\`\`\`

Not:

\`\`\`c
int numbers(5);
\`\`\`

---

## Mistake 3 — Using Different Types in One Array

An array has one declared element type.

For example:

\`\`\`c
float prices[5];
\`\`\`

is a floating-point array.

---

# Lesson Summary

Array declaration tells the compiler the type, name, and size of an array.

General syntax:

\`\`\`text
data_type array_name[size];
\`\`\`

Example:

\`\`\`c
int marks[5];
\`\`\`

This creates an integer array with five elements.

The indexes are:

\`\`\`text
0  1  2  3  4
\`\`\`

Array declaration is the first step toward storing and processing collections of data in C.

---

# Module 5 Progress

✓ Lesson 1 — Introduction to Arrays  
✓ Lesson 2 — Need and Advantages of Arrays  
✓ Lesson 3 — Array Declaration  
→ Lesson 4 — Array Initialization  
  Lesson 5 — Accessing Array Elements  
  Lesson 6 — One-Dimensional Arrays  
  Lesson 7 — Input and Output of Arrays  
  Lesson 8 — Traversing an Array  
  Lesson 9 — Finding Sum and Average  
  Lesson 10 — Finding Maximum and Minimum  
  Lesson 11 — Searching in an Array  
  Lesson 12 — Sorting an Array  
  Lesson 13 — Two-Dimensional Arrays  
  Lesson 14 — Multidimensional Arrays  
  Lesson 15 — Mini Project — Student Marks Analyzer

Lesson 3 Complete

Next: Lesson 4 — Array Initialization.

`,
};

export default lesson3;
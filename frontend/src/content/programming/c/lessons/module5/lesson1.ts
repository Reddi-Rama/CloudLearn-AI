const lesson1 = {
  id: "lesson1",

  title: "Introduction to Arrays",

  content: `

# Lesson 1: Introduction to Arrays

---

## Introduction

An **array** is a collection of elements of the **same data type** stored under a single variable name.

Suppose we want to store marks of five students.

Without an array, we would need separate variables:

\`\`\`c
int mark1;
int mark2;
int mark3;
int mark4;
int mark5;
\`\`\`

With an array, we can store all five values using one variable:

\`\`\`c
int marks[5];
\`\`\`

The individual values are accessed using an **index**.

---

# 1. Why Do We Need Arrays?

Consider a program that needs to store the marks of 100 students.

Creating 100 separate variables would make the program unnecessarily long and difficult to manage.

Instead:

\`\`\`c
int marks[100];
\`\`\`

Now all 100 marks belong to the same array.

\`\`\`text
marks

   ↓

┌────┬────┬────┬────┬────┬─────┐
│ 80 │ 75 │ 91 │ 68 │ 84 │ ... │
└────┴────┴────┴────┴────┴─────┘

  0    1    2    3    4
       Index
\`\`\`

---

# 2. Important Characteristics of Arrays

An array has several important characteristics:

## Same Data Type

All elements of an array have the same data type.

\`\`\`c
int numbers[5];
\`\`\`

stores integers.

\`\`\`c
float prices[5];
\`\`\`

stores floating-point values.

\`\`\`c
char letters[5];
\`\`\`

stores characters.

---

## Single Variable Name

All elements are represented using one name.

For example:

\`\`\`c
int marks[5];
\`\`\`

The array name is:

\`\`\`text
marks
\`\`\`

---

## Indexed Elements

Each element has an index that identifies its position.

For an array of five elements:

\`\`\`text
Index:     0    1    2    3    4

           ┌────┬────┬────┬────┬────┐
marks:     │ 80 │ 75 │ 91 │ 68 │ 84 │
           └────┴────┴────┴────┴────┘
\`\`\`

---

# 3. Array Index Starts From Zero

One of the most important rules in C is that **array indexing starts from 0**.

For:

\`\`\`c
int numbers[5];
\`\`\`

the valid indexes are:

\`\`\`text
0
1
2
3
4
\`\`\`

There is no valid index 5.

So:

\`\`\`text
numbers[0]
\`\`\`

refers to the first element.

\`\`\`text
numbers[4]
\`\`\`

refers to the fifth element.

---

# 4. Simple Array Declaration

The basic syntax is:

\`\`\`text
data_type array_name[size];
\`\`\`

Example:

\`\`\`c
int numbers[5];
\`\`\`

Here:

\`\`\`text
int       → Data type
numbers   → Array name
5         → Number of elements
\`\`\`

Another example:

\`\`\`c
float temperatures[7];
\`\`\`

This creates an array capable of storing seven float values.

---

# 5. Accessing an Array Element

Individual elements are accessed using the array name and index.

Example:

\`\`\`c
int marks[5];
\`\`\`

We can access:

\`\`\`text
marks[0]
marks[1]
marks[2]
marks[3]
marks[4]
\`\`\`

For example:

\`\`\`c
marks[0] = 80;
marks[1] = 75;
\`\`\`

Now the first two elements contain:

\`\`\`text
marks[0] = 80
marks[1] = 75
\`\`\`

---

# 6. Simple Example

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
    printf("%d\\n", numbers[1]);
    printf("%d\\n", numbers[2]);
    printf("%d\\n", numbers[3]);
    printf("%d\\n", numbers[4]);

    return 0;
}
\`\`\`

Output:

\`\`\`text
10
20
30
40
50
\`\`\`

---

# 7. Array as a Collection

An array can be visualized as a row of storage locations.

For:

\`\`\`c
int numbers[5];
\`\`\`

we can imagine:

\`\`\`text
             numbers
                ↓

Index       Value

  0           10
  1           20
  2           30
  3           40
  4           50
\`\`\`

The index tells the program which element we want to access.

---

# 8. Arrays and Loops

Arrays are particularly useful with loops.

Instead of writing:

\`\`\`c
printf("%d\\n", numbers[0]);
printf("%d\\n", numbers[1]);
printf("%d\\n", numbers[2]);
printf("%d\\n", numbers[3]);
printf("%d\\n", numbers[4]);
\`\`\`

we can use a loop:

\`\`\`c
for (int i = 0; i < 5; i++)
{
    printf("%d\\n", numbers[i]);
}
\`\`\`

This becomes especially useful when arrays contain many elements.

---

# 9. Example With a Loop

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[5] = {10, 20, 30, 40, 50};

    for (int i = 0; i < 5; i++)
    {
        printf("%d\\n", numbers[i]);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
10
20
30
40
50
\`\`\`

The loop variable i acts as the array index.

---

# 10. Array Size

When we write:

\`\`\`c
int numbers[5];
\`\`\`

the array has space for **5 elements**.

The indexes are:

\`\`\`text
0 → First
1 → Second
2 → Third
3 → Fourth
4 → Fifth
\`\`\`

The size and the last index are therefore different.

\`\`\`text
Number of elements = 5
Last valid index   = 4
\`\`\`

---

# 11. Different Types of Arrays

Arrays can store different data types.

## Integer Array

\`\`\`c
int numbers[5];
\`\`\`

## Float Array

\`\`\`c
float values[5];
\`\`\`

## Character Array

\`\`\`c
char letters[5];
\`\`\`

The type determines the type of every element in the array.

---

# 12. Example — Student Marks

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks[5] = {85, 72, 90, 68, 78};

    printf("First mark = %d\\n", marks[0]);
    printf("Third mark = %d\\n", marks[2]);

    return 0;
}
\`\`\`

Output:

\`\`\`text
First mark = 85
Third mark = 90
\`\`\`

---

# 13. Advantages of Arrays

Arrays provide several advantages:

## 1. Store Multiple Values

Many values can be stored under one variable name.

## 2. Easy Data Processing

Loops can process all elements efficiently.

## 3. Organized Data

Related values can be grouped together.

## 4. Easy Access

Elements can be accessed directly using their indexes.

## 5. Useful for Large Data Sets

Arrays are suitable for storing collections such as marks, prices, temperatures, and scores.

---

# 14. Important Rules

Remember these rules when working with arrays:

1. All elements have the same data type.
2. Array indexing starts from 0.
3. The size determines the number of elements.
4. The last valid index is size - 1.
5. Elements are accessed using an index.

For example:

\`\`\`c
int numbers[10];
\`\`\`

has:

\`\`\`text
Number of elements → 10
First index         → 0
Last valid index    → 9
\`\`\`

---

# 15. Simple Practical Program

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks[5] = {80, 75, 90, 85, 70};

    printf("Student Marks:\\n");

    for (int i = 0; i < 5; i++)
    {
        printf("Mark %d = %d\\n", i + 1, marks[i]);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Student Marks:
Mark 1 = 80
Mark 2 = 75
Mark 3 = 90
Mark 4 = 85
Mark 5 = 70
\`\`\`

Notice that i + 1 is used only for displaying the student number, while marks[i] uses the actual array index.

---

# Common Beginner Mistakes

## Mistake 1 — Starting the Index at 1

Incorrect:

\`\`\`c
numbers[1]
\`\`\`

as the first element.

The first element is:

\`\`\`c
numbers[0]
\`\`\`

---

## Mistake 2 — Accessing Beyond the Array

For:

\`\`\`c
int numbers[5];
\`\`\`

this is outside the valid index range:

\`\`\`c
numbers[5]
\`\`\`

The valid indexes are 0 through 4.

---

## Mistake 3 — Mixing Data Types

An integer array is designed to contain integer elements:

\`\`\`c
int numbers[5];
\`\`\`

All its elements are of type int.

---

# Lesson Summary

An array is a collection of elements of the same data type stored under one name.

Basic declaration:

\`\`\`text
data_type array_name[size];
\`\`\`

Example:

\`\`\`c
int marks[5];
\`\`\`

The array contains five elements:

\`\`\`text
marks[0]
marks[1]
marks[2]
marks[3]
marks[4]
\`\`\`

The most important rule to remember is:

**Array indexing in C starts from 0.**

Arrays become especially powerful when combined with loops, which we will use extensively in the upcoming lessons.

---

# Module 5 Progress

✓ Lesson 1 — Introduction to Arrays  
→ Lesson 2 — Need and Advantages of Arrays  
  Lesson 3 — Array Declaration  
  Lesson 4 — Array Initialization  
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

Lesson 1 Complete

Next: Lesson 2 — Need and Advantages of Arrays.

`,
};

export default lesson1;
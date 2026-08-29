const lesson4 = {
  id: "lesson4",
  title: "calloc()",

  content: `

# Lesson 4: calloc()

---

## Introduction

calloc() is a dynamic memory allocation function in C.

The name calloc comes from **contiguous allocation**.

It is used to allocate memory for multiple elements and initializes all allocated bytes to zero.

---

# 1. Header File

calloc() is declared in:

\`\`\`c
#include <stdlib.h>
\`\`\`

Example:

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
\`\`\`

---

# 2. Syntax of calloc()

The syntax is:

\`\`\`c
calloc(number_of_elements, size_of_each_element);
\`\`\`

Example:

\`\`\`c
int *numbers;

numbers = calloc(5, sizeof(int));
\`\`\`

This allocates memory for **5 integers**.

---

# 3. Return Value

calloc() returns:

- Pointer to the allocated memory
- NULL if the allocation fails

Therefore:

\`\`\`c
int *numbers;

numbers = calloc(5, sizeof(*numbers));

if (numbers == NULL)
{
    printf("Memory allocation failed.\\n");
    return 1;
}
\`\`\`

---

# 4. calloc() Initializes Memory to Zero

This is one of the main differences between calloc() and malloc().

Example:

\`\`\`c
int *numbers;

numbers = calloc(5, sizeof(*numbers));
\`\`\`

The allocated bytes are initialized to zero.

For an array of int, this means the elements have the value 0.

Conceptually:

\`\`\`
numbers

   ↓

┌────┬────┬────┬────┬────┐
│  0 │  0 │  0 │  0 │  0 │
└────┴────┴────┴────┴────┘
\`\`\`

---

# 5. Example With Five Integers

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *numbers;

    numbers = calloc(5, sizeof(*numbers));

    if (numbers == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    for (int i = 0; i < 5; i++)
    {
        printf("%d ", numbers[i]);
    }

    printf("\\n");

    free(numbers);

    return 0;
}
\`\`\`

Output:

\`\`\`
0 0 0 0 0
\`\`\`

---

# 6. Allocating Memory Based on User Input

The number of elements can be determined at runtime.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int n;
    int *numbers;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    if (n <= 0)
    {
        printf("Invalid size.\\n");
        return 1;
    }

    numbers = calloc((size_t)n, sizeof(*numbers));

    if (numbers == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    for (int i = 0; i < n; i++)
    {
        printf("%d ", numbers[i]);
    }

    printf("\\n");

    free(numbers);

    return 0;
}
\`\`\`

If the user enters:

\`\`\`
5
\`\`\`

the allocated elements initially contain:

\`\`\`
0 0 0 0 0
\`\`\`

---

# 7. Using calloc() for a Dynamic Array

We can allocate the array and then assign values.

\`\`\`c
int *numbers;

numbers = calloc(5, sizeof(*numbers));

if (numbers == NULL)
{
    return 1;
}

for (int i = 0; i < 5; i++)
{
    numbers[i] = (i + 1) * 10;
}

free(numbers);
\`\`\`

The array becomes:

\`\`\`
10 20 30 40 50
\`\`\`

---

# 8. calloc() With Structures

calloc() can also allocate multiple structures.

\`\`\`c
typedef struct
{
    int rollNumber;
    float marks;
} Student;

Student *students;

students = calloc(10, sizeof(*students));
\`\`\`

This creates space for 10 Student objects, with the allocated bytes initialized to zero.

---

# 9. Checking for Failure

Always check the returned pointer:

\`\`\`c
if (students == NULL)
{
    printf("Memory allocation failed.\\n");
    return 1;
}
\`\`\`

Only use the allocated memory after checking that allocation succeeded.

---

# 10. Releasing calloc() Memory

Memory allocated by calloc() is released using:

\`\`\`c
free(numbers);
\`\`\`

Example:

\`\`\`c
int *numbers = calloc(5, sizeof(*numbers));

if (numbers != NULL)
{
    /* Use numbers */

    free(numbers);

    numbers = NULL;
}
\`\`\`

---

# 11. calloc() and Zero Initialization

It is important to understand that calloc() initializes the **allocated bytes to zero**.

For ordinary integer arrays, this gives zero-valued integers.

For other object types, the exact interpretation of all-bits-zero should not be casually generalized to every possible C type. For example, pointers and floating-point representations can have implementation-specific details.

---

# 12. Complete Example

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int n;
    int *marks;

    printf("Enter number of students: ");
    scanf("%d", &n);

    if (n <= 0)
    {
        printf("Invalid number.\\n");
        return 1;
    }

    marks = calloc((size_t)n, sizeof(*marks));

    if (marks == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    printf("Initial marks:\\n");

    for (int i = 0; i < n; i++)
    {
        printf("%d ", marks[i]);
    }

    printf("\\n");

    free(marks);

    return 0;
}
\`\`\`

Example output:

\`\`\`
Enter number of students: 4

Initial marks:
0 0 0 0
\`\`\`

---

# 13. Advantages of calloc()

Dynamic allocation

↓

Number of elements can be decided at runtime

↓

calloc()

↓

Allocates multiple elements

↓

Initializes allocated bytes to zero

It is convenient when memory needs to start in a zeroed state.

---

# 14. calloc() vs Fixed Array

Fixed array:

\`\`\`c
int numbers[100];
\`\`\`

Dynamic array:

\`\`\`c
int *numbers;

numbers = calloc(n, sizeof(*numbers));
\`\`\`

The second approach allows the number of elements to be determined at runtime.

---

# 15. Important Points

calloc()

↓

Contiguous allocation

Syntax:

\`\`\`c
calloc(number_of_elements,
       size_of_each_element);
\`\`\`

Returns:

↓

Pointer to allocated memory

or

NULL

Initialization:

↓

Allocated bytes are initialized to zero

After use:

↓

free(pointer)

---

# Lesson Summary

calloc() dynamically allocates memory for multiple elements.

Syntax:

\`\`\`c
int *numbers = calloc(n, sizeof(*numbers));
\`\`\`

It differs from malloc() because calloc() initializes the allocated bytes to zero.

Always:

\`\`\`c
if (numbers == NULL)
{
    /* Handle failure */
}
\`\`\`

and release the memory when finished:

\`\`\`c
free(numbers);
\`\`\`

---

# Module 10 Progress

✓ Lesson 1 — Introduction to Dynamic Memory

✓ Lesson 2 — Stack Memory vs Heap Memory

✓ Lesson 3 — malloc()

✓ Lesson 4 — calloc()

→ Lesson 5 — malloc() vs calloc()

  Lesson 6 — realloc()

  Lesson 7 — free()

  Lesson 8 — Dynamic Arrays

  Lesson 9 — Dynamic Strings

  Lesson 10 — Dynamic Structures

  Lesson 11 — Dynamic Memory and Pointers

  Lesson 12 — Dynamic 2D Arrays

  Lesson 13 — Memory Leaks and Common Errors

  Lesson 14 — Practical Applications

  Lesson 15 — Mini Project — Dynamic Student Record System

---

# Lesson 4 Complete

`,
};

export default lesson4;
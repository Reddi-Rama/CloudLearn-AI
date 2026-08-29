const lesson5 = {
  id: "lesson5",
  title: "malloc() vs calloc()",

  content: `

# Lesson 5: malloc() vs calloc()

---

## Introduction

Both malloc() and calloc() are used for dynamic memory allocation.

The major difference is how their arguments are specified and how the allocated bytes are initialized.

---

# 1. malloc()

Syntax:

\`\`\`c
malloc(number_of_bytes);
\`\`\`

Example:

\`\`\`c
int *numbers;

numbers = malloc(5 * sizeof(*numbers));
\`\`\`

malloc() allocates the requested number of bytes, but the allocated bytes have **indeterminate values**.

---

# 2. calloc()

Syntax:

\`\`\`c
calloc(number_of_elements,
       size_of_each_element);
\`\`\`

Example:

\`\`\`c
int *numbers;

numbers = calloc(5, sizeof(*numbers));
\`\`\`

calloc() allocates space for the specified number of elements and initializes the allocated bytes to zero.

---

# 3. Basic Comparison

## malloc()

- Takes the total number of bytes as its argument.
- Allocated bytes are not initialized.
- Commonly used for general memory allocation.
- Declared in <stdlib.h>.
- Returns NULL when allocation fails.
- Memory is released using free().

## calloc()

- Takes the number of elements and size of each element.
- Allocated bytes are initialized to zero.
- Convenient when zero-initialized memory is required.
- Declared in <stdlib.h>.
- Returns NULL when allocation fails.
- Memory is released using free().

---

# 4. Example With malloc()

\`\`\`c
int *numbers;

numbers = malloc(5 * sizeof(*numbers));

if (numbers == NULL)
{
    return 1;
}
\`\`\`

The memory is allocated, but the integers should be assigned values before they are read.

---

# 5. Example With calloc()

\`\`\`c
int *numbers;

numbers = calloc(5, sizeof(*numbers));

if (numbers == NULL)
{
    return 1;
}
\`\`\`

The allocated bytes are initialized to zero, so the integer elements start with value 0.

---

# 6. Visual Comparison

## malloc()

\`\`\`
┌────┬────┬────┬────┬────┐
│ ?? │ ?? │ ?? │ ?? │ ?? │
└────┴────┴────┴────┴────┘
\`\`\`

The allocated bytes have indeterminate values.

## calloc()

\`\`\`
┌────┬────┬────┬────┬────┐
│  0 │  0 │  0 │  0 │  0 │
└────┴────┴────┴────┴────┘
\`\`\`

The allocated bytes are initialized to zero.

---

# 7. When to Use malloc()

Use malloc() when:

You only need memory allocation

↓

You will immediately initialize the data

↓

Zero initialization is unnecessary

Example:

\`\`\`c
int *numbers = malloc(n * sizeof(*numbers));

if (numbers == NULL)
{
    return 1;
}

for (int i = 0; i < n; i++)
{
    numbers[i] = i + 1;
}
\`\`\`

---

# 8. When to Use calloc()

Use calloc() when:

You need multiple elements

↓

You want allocated bytes initialized to zero

Example:

\`\`\`c
int *counts = calloc(n, sizeof(*counts));

if (counts == NULL)
{
    return 1;
}
\`\`\`

This is convenient for arrays that are intended to start with zero-valued integer elements.

---

# 9. Both Use Dynamic Memory

\`\`\`
              Dynamic Memory
                     │
             ┌───────┴───────┐
             ↓               ↓
          malloc()        calloc()
             │               │
             └───────┬───────┘
                     ↓
                  Pointer
                     ↓
                   free()
\`\`\`

Both functions allocate dynamically.

---

# 10. Example Program

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *a;
    int *b;

    a = malloc(5 * sizeof(*a));
    b = calloc(5, sizeof(*b));

    if (a == NULL || b == NULL)
    {
        free(a);
        free(b);
        return 1;
    }

    for (int i = 0; i < 5; i++)
    {
        a[i] = i + 1;
    }

    printf("malloc array:\\n");

    for (int i = 0; i < 5; i++)
    {
        printf("%d ", a[i]);
    }

    printf("\\n");

    printf("calloc array:\\n");

    for (int i = 0; i < 5; i++)
    {
        printf("%d ", b[i]);
    }

    printf("\\n");

    free(a);
    free(b);

    return 0;
}
\`\`\`

Output:

\`\`\`
malloc array:
1 2 3 4 5

calloc array:
0 0 0 0 0
\`\`\`

---

# 11. Important Difference in Syntax

malloc():

\`\`\`c
malloc(n * sizeof(*ptr));
\`\`\`

calloc():

\`\`\`c
calloc(n, sizeof(*ptr));
\`\`\`

Both can allocate enough memory for n objects of the pointed-to type.

---

# 12. Common Mistake

Do not assume malloc() initializes memory to zero.

Incorrect assumption:

\`\`\`c
int *numbers = malloc(5 * sizeof(*numbers));

printf("%d\\n", numbers[0]);
\`\`\`

Reading an uninitialized allocated object like this can result in undefined behavior.

Initialize it first:

\`\`\`c
for (int i = 0; i < 5; i++)
{
    numbers[i] = 0;
}
\`\`\`

or use calloc() when zero initialization is appropriate:

\`\`\`c
int *numbers = calloc(5, sizeof(*numbers));
\`\`\`

---

# 13. Both Must Be Checked

Whether using malloc():

\`\`\`c
int *ptr = malloc(n * sizeof(*ptr));

if (ptr == NULL)
{
    return 1;
}
\`\`\`

or calloc():

\`\`\`c
int *ptr = calloc(n, sizeof(*ptr));

if (ptr == NULL)
{
    return 1;
}
\`\`\`

the returned pointer should be checked before use.

---

# 14. Both Must Be Released

Memory obtained from either function is released with:

\`\`\`c
free(ptr);
\`\`\`

Example:

\`\`\`c
int *ptr = calloc(10, sizeof(*ptr));

if (ptr != NULL)
{
    /* Use ptr */

    free(ptr);
    ptr = NULL;
}
\`\`\`

---

# 15. Quick Comparison

malloc()

↓

Number of bytes

↓

Memory not initialized

calloc()

↓

Number of elements + size

↓

Allocated bytes initialized to zero

Both

↓

Return pointer or NULL

↓

Use memory

↓

free()

---

# Lesson Summary

The key difference is:

malloc()

→ Allocates memory

→ Does not initialize allocated bytes

calloc()

→ Allocates memory for multiple elements

→ Initializes allocated bytes to zero

Examples:

\`\`\`c
int *a = malloc(10 * sizeof(*a));

int *b = calloc(10, sizeof(*b));
\`\`\`

Both should be checked and eventually released using:

\`\`\`c
free(a);
free(b);
\`\`\`

---

# Module 10 Progress

✓ Lesson 1 — Introduction to Dynamic Memory

✓ Lesson 2 — Stack Memory vs Heap Memory

✓ Lesson 3 — malloc()

✓ Lesson 4 — calloc()

✓ Lesson 5 — malloc() vs calloc()

→ Lesson 6 — realloc()

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

# Lesson 5 Complete

`,
};

export default lesson5;
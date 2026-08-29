const lesson3 = {
  id: "lesson3",
  title: "malloc()",

  content: `

# Lesson 3: malloc()

---

## Introduction

malloc() is one of the most important functions used for dynamic memory allocation in C.

The name malloc comes from **memory allocation**.

It requests a block of memory from the heap and returns a pointer to the allocated memory.

---

# 1. Header File

malloc() is declared in:

\`\`\`c
#include <stdlib.h>
\`\`\`

Therefore:

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
\`\`\`

is commonly used when a program needs both input/output and dynamic memory.

---

# 2. Syntax of malloc()

The basic syntax is:

\`\`\`c
malloc(number_of_bytes);
\`\`\`

Example:

\`\`\`c
int *ptr;

ptr = malloc(sizeof(int));
\`\`\`

Here, sizeof(int) determines how many bytes are needed for an int object.

---

# 3. What Does malloc() Return?

malloc() returns:

- A pointer to the allocated memory
- NULL if the allocation cannot be satisfied

Example:

\`\`\`c
int *ptr;

ptr = malloc(sizeof(int));

if (ptr == NULL)
{
    printf("Memory allocation failed.\\n");
    return 1;
}
\`\`\`

---

# 4. Allocating One Integer

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *ptr;

    ptr = malloc(sizeof(int));

    if (ptr == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    *ptr = 100;

    printf("Value: %d\\n", *ptr);

    free(ptr);

    return 0;
}
\`\`\`

Output:

\`\`\`
Value: 100
\`\`\`

---

# 5. Why Use sizeof()?

Instead of manually writing the number of bytes:

\`\`\`c
ptr = malloc(4);
\`\`\`

use:

\`\`\`c
ptr = malloc(sizeof(int));
\`\`\`

The second form is preferable because the size of int can vary between implementations.

---

# 6. Allocating an Array

Suppose we need memory for five integers.

\`\`\`c
int *numbers;

numbers = malloc(5 * sizeof(*numbers));
\`\`\`

Conceptually:

\`\`\`
numbers

   │
   ▼

┌────┬────┬────┬────┬────┐
│    │    │    │    │    │
└────┴────┴────┴────┴────┘

       Heap
\`\`\`

The allocated block is large enough for five int objects.

---

# 7. Using a Dynamically Allocated Array

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *numbers;

    numbers = malloc(5 * sizeof(*numbers));

    if (numbers == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    for (int i = 0; i < 5; i++)
    {
        numbers[i] = (i + 1) * 10;
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
10 20 30 40 50
\`\`\`

---

# 8. Dynamic Array Size From User

One major advantage is that the size can be determined during execution.

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

    numbers = malloc((size_t)n * sizeof(*numbers));

    if (numbers == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    for (int i = 0; i < n; i++)
    {
        numbers[i] = i + 1;
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

the program allocates space for five integers.

---

# 9. malloc() Does Not Initialize the Memory

This is very important.

When malloc() allocates memory, the bytes in the allocated region have **indeterminate values**.

For example:

\`\`\`c
int *numbers = malloc(5 * sizeof(*numbers));
\`\`\`

does not initialize the five integers to zero.

Therefore, assign values before reading them:

\`\`\`c
for (int i = 0; i < 5; i++)
{
    numbers[i] = 0;
}
\`\`\`

If zero-initialization is required directly during allocation, calloc() can be used.

---

# 10. malloc() With Structures

Dynamic memory can be allocated for a structure.

\`\`\`c
typedef struct
{
    int id;
    float marks;
} Student;

Student *student;

student = malloc(sizeof(*student));
\`\`\`

Then:

\`\`\`c
student->id = 101;
student->marks = 85.5f;
\`\`\`

After use:

\`\`\`c
free(student);
\`\`\`

---

# 11. malloc() and Pointers

The pointer returned by malloc() can be used to access the allocated object.

Example:

\`\`\`c
int *ptr = malloc(sizeof(*ptr));

if (ptr != NULL)
{
    *ptr = 50;

    printf("%d\\n", *ptr);

    free(ptr);
}
\`\`\`

The pointer stores the address of the dynamically allocated object.

---

# 12. malloc() and sizeof(*ptr)

A useful style is:

\`\`\`c
int *ptr = malloc(sizeof(*ptr));
\`\`\`

For an array:

\`\`\`c
int *numbers = malloc(n * sizeof(*numbers));
\`\`\`

This avoids repeating the type name and remains correct if the pointer's type is changed later.

---

# 13. Checking for Allocation Failure

Always check:

\`\`\`c
if (ptr == NULL)
{
    /* Allocation failed */
}
\`\`\`

Example:

\`\`\`c
int *numbers = malloc(n * sizeof(*numbers));

if (numbers == NULL)
{
    printf("Unable to allocate memory.\\n");
    return 1;
}
\`\`\`

Using the returned pointer before checking it can result in invalid memory access.

---

# 14. Releasing Allocated Memory

After the allocated memory is no longer needed:

\`\`\`c
free(numbers);
\`\`\`

Example:

\`\`\`c
int *numbers = malloc(5 * sizeof(*numbers));

if (numbers == NULL)
{
    return 1;
}

/* Use numbers */

free(numbers);

numbers = NULL;
\`\`\`

---

# 15. Complete Example

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

    numbers = malloc((size_t)n * sizeof(*numbers));

    if (numbers == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    printf("Enter %d numbers:\\n", n);

    for (int i = 0; i < n; i++)
    {
        scanf("%d", &numbers[i]);
    }

    printf("Numbers are:\\n");

    for (int i = 0; i < n; i++)
    {
        printf("%d ", numbers[i]);
    }

    printf("\\n");

    free(numbers);

    return 0;
}
\`\`\`

Example:

\`\`\`
Enter number of elements: 4

Enter 4 numbers:
10 20 30 40

Numbers are:
10 20 30 40
\`\`\`

---

# 16. Important Points

malloc()

↓

Allocates a block of memory

↓

Returns:

Pointer to allocated memory

or

NULL if allocation fails

malloc() memory:

↓

Not initialized

After use:

↓

free(pointer)

Common forms:

\`\`\`c
malloc(sizeof(int));
\`\`\`

and:

\`\`\`c
malloc(n * sizeof(*ptr));
\`\`\`

---

# Lesson Summary

malloc() dynamically allocates a block of memory.

Example:

\`\`\`c
int *numbers = malloc(n * sizeof(*numbers));
\`\`\`

Always check:

\`\`\`c
if (numbers == NULL)
{
    /* Handle failure */
}
\`\`\`

Use the allocated memory, then release it:

\`\`\`c
free(numbers);
\`\`\`

Remember:

malloc() allocates memory, but it does **not** initialize the allocated bytes.

---

# Module 10 Progress

✓ Lesson 1 — Introduction to Dynamic Memory

✓ Lesson 2 — Stack Memory vs Heap Memory

✓ Lesson 3 — malloc()

→ Lesson 4 — calloc()

  Lesson 5 — malloc() vs calloc()

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

# Lesson 3 Complete

`,
};

export default lesson3;
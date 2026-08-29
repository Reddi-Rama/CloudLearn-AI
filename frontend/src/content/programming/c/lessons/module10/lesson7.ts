const lesson7 = {
  id: "lesson7",
  title: "free()",

  content: `

# Lesson 7: free()

---

## Introduction

The free() function is used to **release dynamically allocated memory** when it is no longer needed.

Memory allocated using:

- malloc()
- calloc()
- realloc()

should eventually be released using:

\`\`\`c
free();
\`\`\`

---

# 1. Syntax of free()

\`\`\`c
free(pointer);
\`\`\`

Example:

\`\`\`c
int *ptr;

ptr = malloc(sizeof(*ptr));

if (ptr != NULL)
{
    *ptr = 100;
    free(ptr);
}
\`\`\`

---

# 2. Why Is free() Important?

Dynamically allocated memory remains allocated until it is released or the program terminates.

If a program repeatedly allocates memory without releasing it, it can cause a **memory leak**.

Example:

\`\`\`c
int *ptr = malloc(100 * sizeof(*ptr));

/* Memory is used */

/* Forgot to call free(ptr) */
\`\`\`

The allocated memory is no longer accessible through ptr, but it remains allocated for the lifetime of the process.

---

# 3. Basic Memory Management Cycle

Allocate

↓

malloc()

calloc()

↓

Use memory

↓

realloc() if necessary

↓

Finish using memory

↓

free()

---

# 4. Simple Example

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *ptr;

    ptr = malloc(sizeof(*ptr));

    if (ptr == NULL)
    {
        return 1;
    }

    *ptr = 50;

    printf("Value: %d\\n", *ptr);

    free(ptr);

    return 0;
}
\`\`\`

Output:

\`\`\`
Value: 50
\`\`\`

---

# 5. Freeing a Dynamic Array

Suppose:

\`\`\`c
int *numbers;

numbers = malloc(5 * sizeof(*numbers));
\`\`\`

After using the array:

\`\`\`c
free(numbers);
\`\`\`

The entire allocated block is released.

You **do not** need:

\`\`\`c
free(numbers[0]);
free(numbers[1]);
free(numbers[2]);
\`\`\`

because the individual elements were not separately allocated.

---

# 6. Setting the Pointer to NULL

After freeing memory, it is often useful to do:

\`\`\`c
free(ptr);
ptr = NULL;
\`\`\`

Example:

\`\`\`c
int *ptr = malloc(sizeof(*ptr));

if (ptr != NULL)
{
    *ptr = 100;

    free(ptr);

    ptr = NULL;
}
\`\`\`

This helps prevent accidentally using the old pointer value later.

---

# 7. What Happens After free()?

After:

\`\`\`c
free(ptr);
\`\`\`

the allocated object is no longer valid.

Therefore, this is incorrect:

\`\`\`c
free(ptr);

printf("%d\\n", *ptr);
\`\`\`

The pointer must not be dereferenced after the object has been freed.

---

# 8. Double Free

Do not call free() twice on the same allocation.

Incorrect:

\`\`\`c
free(ptr);
free(ptr);
\`\`\`

This results in undefined behavior.

A useful pattern is:

\`\`\`c
free(ptr);
ptr = NULL;
\`\`\`

Then:

\`\`\`c
free(ptr);
\`\`\`

is safe because free(NULL) does nothing.

---

# 9. Freeing NULL

It is valid to call:

\`\`\`c
free(NULL);
\`\`\`

The C standard specifies that free() has no effect when its argument is a null pointer.

Therefore:

\`\`\`c
int *ptr = NULL;

free(ptr);
\`\`\`

is valid.

---

# 10. Freeing Different Allocations

If several blocks were separately allocated:

\`\`\`c
int *a = malloc(5 * sizeof(*a));
int *b = malloc(10 * sizeof(*b));
\`\`\`

they should be released separately:

\`\`\`c
free(a);
free(b);
\`\`\`

---

# 11. realloc() and free()

If realloc() succeeds, the returned pointer represents the resized allocation.

Example:

\`\`\`c
int *temp;

temp = realloc(ptr, new_size);

if (temp != NULL)
{
    ptr = temp;
}
\`\`\`

When the allocation is no longer needed:

\`\`\`c
free(ptr);
\`\`\`

---

# 12. Complete Example

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

    numbers = NULL;

    return 0;
}
\`\`\`

Output:

\`\`\`
10 20 30 40 50
\`\`\`

---

# 13. Common Memory Errors

Some important errors are:

## Memory Leak

↓

Allocated memory is never released.

## Use-After-Free

↓

Memory is accessed after free().

## Double Free

↓

Same allocation is freed more than once.

## Invalid Free

↓

free() is called on a pointer that does not refer to a valid dynamic allocation.

These problems can lead to undefined behavior or program instability.

---

# 14. Correct Pattern

\`\`\`c
int *ptr = malloc(size);

if (ptr == NULL)
{
    /* Handle failure */
}

/* Use ptr */

free(ptr);

ptr = NULL;
\`\`\`

This simple pattern is fundamental to dynamic memory management.

---

# 15. Important Points

malloc()

calloc()

realloc()

↓

Dynamic memory

↓

Use memory

↓

free()

↓

Memory released

Remember:

\`\`\`c
free(ptr);
ptr = NULL;
\`\`\`

---

# Lesson Summary

free() releases dynamically allocated memory.

It should be used for memory obtained from:

- malloc()
- calloc()
- realloc()

The basic pattern is:

\`\`\`c
int *ptr = malloc(sizeof(*ptr));

if (ptr != NULL)
{
    /* Use ptr */

    free(ptr);

    ptr = NULL;
}
\`\`\`

Avoid:

- Use-after-free
- Double free
- Invalid free
- Memory leaks

---

# Module 10 Progress

✓ Lesson 1 — Introduction to Dynamic Memory

✓ Lesson 2 — Stack Memory vs Heap Memory

✓ Lesson 3 — malloc()

✓ Lesson 4 — calloc()

✓ Lesson 5 — malloc() vs calloc()

✓ Lesson 6 — realloc()

✓ Lesson 7 — free()

→ Lesson 8 — Dynamic Arrays

  Lesson 9 — Dynamic Strings

  Lesson 10 — Dynamic Structures

  Lesson 11 — Dynamic Memory and Pointers

  Lesson 12 — Dynamic 2D Arrays

  Lesson 13 — Memory Leaks and Common Errors

  Lesson 14 — Practical Applications

  Lesson 15 — Mini Project — Dynamic Student Record System

---

# Lesson 7 Complete

`,
};

export default lesson7;
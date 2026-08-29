const lesson13 = {
  id: "lesson13",
  title: "Memory Leaks and Common Errors",

  content: `

# Lesson 13: Memory Leaks and Common Errors

---

## Introduction

Dynamic memory gives a C program flexibility, but it also requires careful memory management.

If dynamically allocated memory is used incorrectly, problems such as:

- Memory leaks
- Dangling pointers
- Use-after-free
- Double free
- Invalid memory access

can occur.

---

# 1. Memory Leak

A memory leak occurs when dynamically allocated memory is no longer accessible to the program but has not been released.

Example:

\`\`\`c
int *ptr;

ptr = malloc(100 * sizeof(*ptr));

if (ptr == NULL)
{
    return 1;
}

/* Use ptr */

/* Forgot to call free(ptr) */
\`\`\`

If the pointer is lost without freeing the allocation:

\`\`\`
Allocated memory
       ↓
Pointer lost
       ↓
Memory still occupied
       ↓
Memory leak
\`\`\`

---

# 2. Correctly Releasing Memory

Correct:

\`\`\`c
int *ptr;

ptr = malloc(100 * sizeof(*ptr));

if (ptr == NULL)
{
    return 1;
}

/* Use ptr */

free(ptr);
ptr = NULL;
\`\`\`

The allocation is released when it is no longer needed.

---

# 3. Dangling Pointer

A dangling pointer is a pointer that still contains the address of memory that has already been released.

Example:

\`\`\`c
int *ptr = malloc(sizeof(*ptr));

if (ptr != NULL)
{
    *ptr = 100;

    free(ptr);

    /* ptr should no longer be dereferenced */
}
\`\`\`

A useful practice is:

\`\`\`c
free(ptr);
ptr = NULL;
\`\`\`

---

# 4. Use-After-Free

Using dynamically allocated memory after it has been released is an error.

Incorrect:

\`\`\`c
int *ptr = malloc(sizeof(*ptr));

if (ptr != NULL)
{
    *ptr = 50;

    free(ptr);

    printf("%d\\n", *ptr);
}
\`\`\`

The memory has already been released when *ptr is accessed.

---

# 5. Double Free

A double free occurs when the same allocation is released more than once.

Incorrect:

\`\`\`c
int *ptr = malloc(sizeof(*ptr));

if (ptr != NULL)
{
    free(ptr);
    free(ptr);
}
\`\`\`

This causes undefined behavior.

Safer:

\`\`\`c
free(ptr);
ptr = NULL;
\`\`\`

Then calling:

\`\`\`c
free(ptr);
\`\`\`

again is harmless because ptr is NULL.

---

# 6. Invalid Free

free() should only be used with:

- A pointer returned by malloc(), calloc(), or realloc() that represents the current allocation.
- NULL.

Incorrect:

\`\`\`c
int number = 100;

free(&number);
\`\`\`

The variable number was not dynamically allocated.

---

# 7. Uninitialized Pointer

An uninitialized pointer contains an indeterminate value.

Incorrect:

\`\`\`c
int *ptr;

*ptr = 100;
\`\`\`

ptr has not been made to point to a valid object.

Correct:

\`\`\`c
int number;

int *ptr = &number;

*ptr = 100;
\`\`\`

Or dynamically:

\`\`\`c
int *ptr = malloc(sizeof(*ptr));

if (ptr != NULL)
{
    *ptr = 100;
}
\`\`\`

---

# 8. NULL Pointer Dereference

Incorrect:

\`\`\`c
int *ptr = NULL;

*ptr = 100;
\`\`\`

A NULL pointer does not point to a valid object.

Always check an allocation:

\`\`\`c
int *ptr = malloc(sizeof(*ptr));

if (ptr == NULL)
{
    return 1;
}

*ptr = 100;
\`\`\`

---

# 9. Array Out-of-Bounds Access

Suppose:

\`\`\`c
int *numbers = malloc(5 * sizeof(*numbers));
\`\`\`

Valid indexes are:

\`\`\`
0
1
2
3
4
\`\`\`

This is invalid:

\`\`\`c
numbers[5] = 100;
\`\`\`

because the allocated array contains only five elements.

---

# 10. Incorrect realloc() Usage

Avoid:

\`\`\`c
ptr = realloc(ptr, new_size);

if (ptr == NULL)
{
    /* Original pointer may have been lost */
}
\`\`\`

Use a temporary pointer:

\`\`\`c
int *temp;

temp = realloc(ptr, new_size);

if (temp == NULL)
{
    /* ptr is still valid */
}
else
{
    ptr = temp;
}
\`\`\`

This preserves access to the original allocation if the reallocation fails.

---

# 11. Memory Leak in a Loop

This can create repeated leaks:

\`\`\`c
for (int i = 0; i < 1000; i++)
{
    int *ptr = malloc(100 * sizeof(*ptr));

    if (ptr == NULL)
    {
        break;
    }

    /* Forgot free(ptr) */
}
\`\`\`

Each iteration allocates memory without releasing it.

Correct:

\`\`\`c
for (int i = 0; i < 1000; i++)
{
    int *ptr = malloc(100 * sizeof(*ptr));

    if (ptr == NULL)
    {
        break;
    }

    /* Use ptr */

    free(ptr);
}
\`\`\`

---

# 12. Memory Leak With Structures

Suppose:

\`\`\`c
struct Student
{
    int id;
    char *name;
};
\`\`\`

and:

\`\`\`c
struct Student *student;

student = malloc(sizeof(*student));

if (student != NULL)
{
    student->name = malloc(50 * sizeof(*student->name));
}
\`\`\`

There are two separate allocations:

- Student structure
- Student name

Both must be released:

\`\`\`c
free(student->name);
free(student);
\`\`\`

---

# 13. Common Dynamic Memory Errors

\`\`\`
Dynamic Memory Errors
          │
   ┌──────┼──────────────┐
   ↓      ↓              ↓
  Leak   Invalid       Pointer
         Access        Problems
            │              │
            ├── Out of     ├── Dangling
            │   bounds     ├── Use-after-free
            ├── NULL       └── Double free
            │   dereference
            └── Invalid free
\`\`\`

---

# 14. Good Memory Management Practices

Follow these rules:

1. Check every allocation.

2. Initialize memory before reading it.

3. Do not access memory outside its bounds.

4. Do not use memory after free().

5. Do not free the same allocation twice.

6. Free every allocation when it is no longer needed.

7. Use a temporary pointer with realloc().

8. Set pointers to NULL after freeing when appropriate.

---

# 15. Safe Dynamic Memory Pattern

\`\`\`c
#include <stdlib.h>

int main(void)
{
    int *numbers;

    numbers = malloc(5 * sizeof(*numbers));

    if (numbers == NULL)
    {
        return 1;
    }

    for (int i = 0; i < 5; i++)
    {
        numbers[i] = i + 1;
    }

    /* Use numbers */

    free(numbers);
    numbers = NULL;

    return 0;
}
\`\`\`

---

# Lesson Summary

The major dynamic memory errors are:

- Memory leak
- Dangling pointer
- Use-after-free
- Double free
- Invalid free
- NULL pointer dereference
- Out-of-bounds access

A reliable program follows:

\`\`\`
Allocate
   ↓
Check
   ↓
Initialize
   ↓
Use safely
   ↓
Free
   ↓
Set pointer to NULL when appropriate
\`\`\`

Careful memory management is essential for writing reliable C programs.

---

# Module 10 Progress

✓ Lesson 1 — Introduction to Dynamic Memory

✓ Lesson 2 — Stack Memory vs Heap Memory

✓ Lesson 3 — malloc()

✓ Lesson 4 — calloc()

✓ Lesson 5 — malloc() vs calloc()

✓ Lesson 6 — realloc()

✓ Lesson 7 — free()

✓ Lesson 8 — Dynamic Arrays

✓ Lesson 9 — Dynamic Strings

✓ Lesson 10 — Dynamic Structures

✓ Lesson 11 — Dynamic Memory and Pointers

✓ Lesson 12 — Dynamic 2D Arrays

✓ Lesson 13 — Memory Leaks and Common Errors

→ Lesson 14 — Practical Applications

  Lesson 15 — Mini Project — Dynamic Student Record System

---

# Lesson 13 Complete

`,
};

export default lesson13;
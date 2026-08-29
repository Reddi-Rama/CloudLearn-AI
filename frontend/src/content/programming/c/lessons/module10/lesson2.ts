const lesson2 = {
  id: "lesson2",
  title: "Stack Memory vs Heap Memory",

  content: `

# Lesson 2: Stack Memory vs Heap Memory

---

## Introduction

C programs use different areas of memory for different purposes.

Two important areas are:

- Stack
- Heap

Understanding the difference is important when working with dynamic memory.

---

# 1. Stack Memory

The stack is commonly used for:

- Local variables
- Function parameters
- Function call information

Example:

\`\`\`c
void display(void)
{
    int number = 100;
}
\`\`\`

The local variable number has automatic storage duration and is associated with the function's execution.

When the function finishes, its local variable's lifetime ends.

---

# 2. Heap Memory

The heap is used for dynamically allocated memory.

Example:

\`\`\`c
int *ptr;

ptr = malloc(sizeof(int));
\`\`\`

The allocated object exists until it is released using:

\`\`\`c
free(ptr);
\`\`\`

or until the program terminates, although relying on program termination to release memory is not a substitute for correct memory management.

---

# 3. Basic Comparison

## Stack

- Used for automatic storage.
- Managed automatically according to scope and storage duration.
- Local variables commonly use it.
- Lifetime is tied to storage duration.
- No explicit free() for ordinary local variables.

## Heap

- Used for dynamic allocation.
- Managed explicitly by the programmer.
- malloc(), calloc(), and realloc() obtain memory from it.
- Lifetime continues until released.
- Must release allocated objects with free().

---

# 4. Example

Consider:

\`\`\`c
#include <stdlib.h>

int main(void)
{
    int number = 10;
    int *ptr;

    ptr = malloc(sizeof(int));

    if (ptr == NULL)
    {
        return 1;
    }

    *ptr = 20;

    free(ptr);

    return 0;
}
\`\`\`

Conceptually:

\`\`\`
Stack

┌──────────────┐
│ number = 10  │
│ ptr          │────────┐
└──────────────┘        │
                        ▼
Heap                ┌──────────┐
                    │ *ptr =20 │
                    └──────────┘
\`\`\`

---

# 5. Lifetime Difference

A local variable:

\`\`\`c
void function(void)
{
    int number = 10;
}
\`\`\`

has a lifetime associated with the execution of that function/block.

Dynamic memory:

\`\`\`c
int *ptr = malloc(sizeof(int));
\`\`\`

remains allocated until the program releases it:

\`\`\`c
free(ptr);
\`\`\`

This gives the programmer more control over how long dynamically allocated data remains available.

---

# 6. Why Use Heap Memory?

Suppose the number of elements is entered by the user:

\`\`\`
Enter number of students: 500
\`\`\`

The program can dynamically allocate enough memory for those students.

\`\`\`c
Student *students;

students = malloc(500 * sizeof(Student));
\`\`\`

The allocation size can be determined at runtime.

---

# 7. Stack Array vs Dynamic Array

## Stack-Based Array

\`\`\`c
int numbers[100];
\`\`\`

The array has a fixed size determined by its declaration.

## Dynamically Allocated Array

\`\`\`c
int *numbers;

numbers = malloc(100 * sizeof(int));
\`\`\`

The memory is obtained dynamically.

The size can instead be based on a runtime value:

\`\`\`c
int n;

scanf("%d", &n);

numbers = malloc(n * sizeof(int));
\`\`\`

---

# 8. Stack Size Considerations

The stack is typically limited in size.

Very large local objects can cause problems depending on the implementation and environment.

For example:

\`\`\`c
int hugeArray[10000000];
\`\`\`

may require a very large amount of automatic storage.

Dynamic allocation may be more appropriate for large data, provided allocation succeeds.

---

# 9. Heap Allocation Can Fail

Dynamic memory is not unlimited.

For example:

\`\`\`c
int *ptr = malloc(1000000000ULL);
\`\`\`

may fail.

Therefore:

\`\`\`c
if (ptr == NULL)
{
    printf("Allocation failed.\\n");
}
\`\`\`

is important.

---

# 10. Stack and Heap Conceptual Diagram

\`\`\`
                 Process Memory
                       │
          ┌────────────┴────────────┐
          │                         │
        STACK                      HEAP
          │                         │
          ▼                         ▼
   Local variables          Dynamically allocated
   Function calls                 objects
                                    │
                       ┌────────────┼────────────┐
                       ▼            ▼            ▼
                    malloc()     calloc()     realloc()
                                    │
                                    ▼
                                  free()
\`\`\`

---

# 11. Pointer Does Not Mean Heap

An important distinction:

\`\`\`c
int *ptr;
\`\`\`

declares a pointer.

It does not automatically allocate heap memory.

Similarly:

\`\`\`c
int *ptr = NULL;
\`\`\`

does not allocate memory.

Heap memory is obtained by functions such as:

- malloc()
- calloc()
- realloc()

---

# 12. Pointer to a Local Variable

A pointer can point to a normal local variable:

\`\`\`c
int number = 10;

int *ptr = &number;
\`\`\`

Here, ptr points to the local variable.

No heap allocation is involved.

---

# 13. Pointer to Dynamically Allocated Memory

A pointer can also point to dynamically allocated memory:

\`\`\`c
int *ptr = malloc(sizeof(int));
\`\`\`

Now ptr points to an allocated object in dynamically managed storage.

---

# 14. Releasing Heap Memory

When the dynamically allocated object is no longer needed:

\`\`\`c
free(ptr);
\`\`\`

A common pattern is:

\`\`\`c
int *ptr = malloc(sizeof(int));

if (ptr == NULL)
{
    return 1;
}

/* Use ptr */

free(ptr);
ptr = NULL;
\`\`\`

Setting the pointer to NULL afterward is often useful to avoid accidentally reusing the old address through that pointer.

---

# 15. Important Points

## STACK

↓

Automatic storage

↓

Local variables and function-related data

## HEAP

↓

Dynamic allocation

↓

malloc()

calloc()

realloc()

↓

free()

Remember:

\`\`\`c
int *ptr;
\`\`\`

only creates a pointer.

Whereas:

\`\`\`c
ptr = malloc(sizeof(int));
\`\`\`

requests dynamic memory.

---

# Lesson Summary

The stack and heap serve different purposes.

Stack

↓

Automatic storage

Heap

↓

Dynamic storage

Dynamic memory is accessed through pointers and is explicitly managed using:

malloc()

calloc()

realloc()

free()

Understanding this difference is essential before learning the allocation functions in detail.

---

# Module 10 Progress

✓ Lesson 1 — Introduction to Dynamic Memory

✓ Lesson 2 — Stack Memory vs Heap Memory

→ Lesson 3 — malloc()

  Lesson 4 — calloc()

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

# Lesson 2 Complete

`,

};

export default lesson2;
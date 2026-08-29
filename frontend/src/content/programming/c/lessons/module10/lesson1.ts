const lesson1 = {
  id: "lesson1",
  title: "Introduction to Dynamic Memory",

  content: `

# Lesson 1: Introduction to Dynamic Memory

---

## Introduction

In C programming, memory is used to store variables and data while a program is running.

For example:

\`\`\`c
int marks = 85;
\`\`\`

The memory required for marks is determined when the variable is declared.

However, sometimes we do not know how much memory will be needed before the program starts.

Dynamic memory allocation allows a program to request memory during execution.

---

# 1. What Is Dynamic Memory Allocation?

Dynamic memory allocation is the process of obtaining memory while the program is running.

For example, suppose a program needs to store marks for students.

If we know there are exactly 50 students:

\`\`\`c
int marks[50];
\`\`\`

But if the number of students is entered by the user:

\`\`\`
Enter number of students: 120
\`\`\`

we may want to allocate memory according to that number.

Dynamic memory allows us to do this.

---

# 2. Static vs Dynamic Memory

## Fixed-Size Allocation

\`\`\`c
int numbers[100];
\`\`\`

The size is fixed when the array is declared.

\`\`\`
Program
   ↓
Array[100]
   ↓
Fixed amount of storage
\`\`\`

## Dynamic Allocation

\`\`\`
Program starts
      ↓
User enters required size
      ↓
Program requests memory
      ↓
Memory is allocated
      ↓
Program uses memory
      ↓
Memory is released
\`\`\`

---

# 3. Why Do We Need Dynamic Memory?

Dynamic memory is useful when:

- The required size is unknown.
- The required size changes during execution.
- Large amounts of memory are needed.
- Data structures grow or shrink.
- Memory should be used only when required.

Examples include:

- Dynamic arrays
- Linked lists
- Trees
- Graphs
- Dynamic strings
- Dynamic structures

---

# 4. Heap Memory

Dynamic memory is generally allocated from an area called the heap.

Conceptually:

\`\`\`
                 Program Memory
                       │
          ┌────────────┴────────────┐
          │                         │
        Stack                      Heap
          │                         │
    Local variables          Dynamic memory
    Function calls           malloc()
                              calloc()
                              realloc()
                              free()
\`\`\`

The heap is used for memory that is requested dynamically during program execution.

---

# 5. Pointer and Dynamic Memory

A pointer is normally used to access dynamically allocated memory.

For example:

\`\`\`c
int *ptr;
\`\`\`

Initially, ptr does not automatically point to allocated memory.

We can request memory and store its address in ptr:

\`\`\`c
ptr = malloc(sizeof(int));
\`\`\`

Now:

\`\`\`
ptr
 │
 ▼
┌─────────┐
│   int   │
└─────────┘
   Heap
\`\`\`

---

# 6. Header File

The functions for dynamic memory allocation are declared in:

\`\`\`c
#include <stdlib.h>
\`\`\`

For example:

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
\`\`\`

The important functions are:

- malloc()
- calloc()
- realloc()
- free()

---

# 7. Basic Dynamic Memory Process

The general process is:

Declare pointer

↓

Allocate memory

↓

Check allocation

↓

Use memory

↓

Release memory

Example:

\`\`\`c
int *ptr;

ptr = malloc(sizeof(int));

if (ptr == NULL)
{
    return 1;
}

/* Use memory */

free(ptr);
\`\`\`

---

# 8. What Is malloc()?

malloc() stands for memory allocation.

It requests a specified number of bytes from the heap.

Basic form:

\`\`\`c
ptr = malloc(number_of_bytes);
\`\`\`

For example:

\`\`\`c
int *ptr;

ptr = malloc(sizeof(int));
\`\`\`

This requests enough memory for one int.

malloc() will be covered in detail in Lesson 3.

---

# 9. What Is calloc()?

calloc() is another dynamic memory allocation function.

It allocates memory for multiple elements and initializes the allocated bytes to zero.

Example:

\`\`\`c
int *numbers;

numbers = calloc(5, sizeof(int));
\`\`\`

This requests space for five int objects.

calloc() will be covered in detail in Lesson 4.

---

# 10. What Is realloc()?

Sometimes a program needs to change the size of an already allocated memory block.

realloc() is used for this.

Example:

\`\`\`c
ptr = realloc(ptr, new_size);
\`\`\`

It can be used to grow or shrink an existing allocation, subject to the rules of the function.

---

# 11. What Is free()?

When dynamically allocated memory is no longer needed, it should be released using:

\`\`\`c
free(ptr);
\`\`\`

Example:

\`\`\`c
int *ptr = malloc(sizeof(int));

if (ptr != NULL)
{
    *ptr = 100;
    free(ptr);
}
\`\`\`

After free(ptr), the allocated object is no longer available for use through that pointer.

---

# 12. Checking Allocation

Memory allocation can fail.

Therefore, always check the returned pointer before using it.

\`\`\`c
int *ptr;

ptr = malloc(sizeof(int));

if (ptr == NULL)
{
    printf("Memory allocation failed.\\n");
    return 1;
}
\`\`\`

A NULL return indicates that the requested allocation was unsuccessful.

---

# 13. Simple Example

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

# 14. Dynamic Memory vs Normal Variables

Normal variable:

\`\`\`c
int number = 50;
\`\`\`

The variable is automatically managed according to its storage duration.

Dynamic allocation:

\`\`\`c
int *ptr = malloc(sizeof(int));
\`\`\`

The program explicitly requests the memory.

Then:

\`\`\`c
free(ptr);
\`\`\`

releases it.

So the programmer is responsible for managing the lifetime of the dynamically allocated object.

---

# 15. Important Points

Dynamic Memory

↓

Allocated during program execution

↓

Usually obtained from the heap

↓

Accessed through pointers

↓

stdlib.h

↓

malloc()

calloc()

realloc()

free()

Remember the basic pattern:

\`\`\`c
int *ptr = malloc(sizeof(int));

if (ptr == NULL)
{
    /* Handle allocation failure */
}

/* Use ptr */

free(ptr);
\`\`\`

---

# Lesson Summary

Dynamic memory allocation allows a C program to obtain memory while it is running.

The main functions are:

malloc() → Allocate memory

calloc() → Allocate and initialize memory

realloc() → Resize an allocation

free() → Release allocated memory

Dynamic memory is especially useful when the amount of required memory is not known beforehand.

---

# Module 10 Progress

✓ Lesson 1 — Introduction to Dynamic Memory

→ Lesson 2 — Stack Memory vs Heap Memory

  Lesson 3 — malloc()

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

# Lesson 1 Complete

`,

};

export default lesson1;
const lesson11 = {
  id: "lesson11",
  title: "Dynamic Memory and Pointers",

  content: `

# Lesson 11: Dynamic Memory and Pointers

---

## Introduction

Pointers and dynamic memory allocation are closely connected in C.

A pointer stores the address of an object, while functions such as malloc(), calloc(), and realloc() return pointers to dynamically allocated memory.

Understanding this relationship is essential for working with dynamic arrays, strings, and structures.

---

# 1. Pointer and Dynamic Memory

Consider:

\`\`\`c
int *ptr;

ptr = malloc(sizeof(*ptr));
\`\`\`

The pointer ptr stores the address of the dynamically allocated integer.

Conceptually:

\`\`\`
ptr
 │
 ▼
┌─────────┐
│   100   │
└─────────┘
 Dynamic
 Memory
\`\`\`

---

# 2. Dereferencing the Pointer

The * operator can be used to access the object pointed to by ptr.

\`\`\`c
*ptr = 100;

printf("%d", *ptr);
\`\`\`

Here:

- ptr contains the address.
- *ptr accesses the value stored at that address.

---

# 3. Pointer Arithmetic and Dynamic Arrays

Suppose:

\`\`\`c
int *numbers;

numbers = malloc(5 * sizeof(*numbers));
\`\`\`

The allocated memory can be accessed using:

\`\`\`c
numbers[0]
numbers[1]
numbers[2]
numbers[3]
numbers[4]
\`\`\`

or pointer arithmetic:

\`\`\`c
*(numbers + 0)
*(numbers + 1)
*(numbers + 2)
*(numbers + 3)
*(numbers + 4)
\`\`\`

---

# 4. Pointer Diagram

\`\`\`
numbers
   │
   ▼
┌────┬────┬────┬────┬────┐
│ 10 │ 20 │ 30 │ 40 │ 50 │
└────┴────┴────┴────┴────┘
  ↑
  First element
\`\`\`

numbers points to the first element.

---

# 5. malloc() Returns a Pointer

When malloc() successfully allocates memory, it returns a pointer to the allocated block.

Example:

\`\`\`c
int *ptr;

ptr = malloc(sizeof(*ptr));
\`\`\`

If allocation fails:

\`\`\`c
ptr == NULL
\`\`\`

Therefore, the returned pointer should be checked before using it.

---

# 6. Pointer to Structure

Pointers can also refer to dynamically allocated structures.

Example:

\`\`\`c
struct Student
{
    int id;
    float marks;
};

struct Student *student;

student = malloc(sizeof(*student));
\`\`\`

Members can be accessed using:

\`\`\`c
student->id
student->marks
\`\`\`

---

# 7. Pointer to Pointer

A pointer can itself have an address stored in another pointer.

Example:

\`\`\`c
int value = 10;
int *ptr = &value;
int **pptr = &ptr;
\`\`\`

Conceptually:

\`\`\`
pptr
 │
 ▼
 ptr
 │
 ▼
value
 │
10
\`\`\`

A pointer to pointer is useful in some dynamic memory operations and data structures.

---

# 8. Passing a Pointer to a Function

A dynamically allocated object can be passed to a function through a pointer.

Example:

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

void display(int *ptr)
{
    printf("Value: %d\\n", *ptr);
}

int main(void)
{
    int *number;

    number = malloc(sizeof(*number));

    if (number == NULL)
    {
        return 1;
    }

    *number = 100;

    display(number);

    free(number);

    return 0;
}
\`\`\`

Output:

\`\`\`
Value: 100
\`\`\`

---

# 9. Passing Dynamic Arrays to Functions

A dynamic array can be passed to a function using a pointer.

Example:

\`\`\`c
void display(int *numbers, int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", numbers[i]);
    }
}
\`\`\`

Call:

\`\`\`c
display(numbers, n);
\`\`\`

The function receives a pointer to the first element.

---

# 10. Changing a Pointer Inside a Function

If a function needs to change the caller's pointer itself, a pointer to pointer can be used.

Example:

\`\`\`c
void allocate(int **ptr)
{
    *ptr = malloc(sizeof(**ptr));
}
\`\`\`

Call:

\`\`\`c
int *number = NULL;

allocate(&number);
\`\`\`

Here:

\`\`\`
&number
   ↓
int **
\`\`\`

The function can therefore modify number.

---

# 11. Dynamic Memory and const

A pointer can point to data that should not be modified through that pointer.

Example:

\`\`\`c
const char *text = "Hello";
\`\`\`

The characters should not be modified through text.

The const qualifier is useful when working with strings and function parameters.

---

# 12. NULL Pointer

A NULL pointer does not point to a valid object.

Example:

\`\`\`c
int *ptr = NULL;
\`\`\`

Before dereferencing a pointer, make sure it points to valid storage.

Incorrect:

\`\`\`c
int *ptr = NULL;

*ptr = 10;
\`\`\`

The pointer must first refer to valid memory.

---

# 13. Dangling Pointer

A pointer that still contains the address of memory after that memory has been released is commonly called a dangling pointer.

Example:

\`\`\`c
int *ptr = malloc(sizeof(*ptr));

free(ptr);

/* ptr should no longer be dereferenced */
\`\`\`

A useful practice is:

\`\`\`c
free(ptr);
ptr = NULL;
\`\`\`

---

# 14. Dynamic Memory and Pointer Relationships

The main relationship is:

\`\`\`
Pointer
   ↓
Address of Dynamic Memory
   ↓
Allocated Object
\`\`\`

For an array:

\`\`\`
Pointer
   ↓
First Element
   ↓
Remaining Elements
\`\`\`

For a structure:

\`\`\`
Pointer
   ↓
Dynamic Structure
   ↓
Members
\`\`\`

---

# 15. Complete Example

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

void display(int *numbers, int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", numbers[i]);
    }

    printf("\\n");
}

int main(void)
{
    int n = 5;
    int *numbers;

    numbers = malloc((size_t)n * sizeof(*numbers));

    if (numbers == NULL)
    {
        return 1;
    }

    for (int i = 0; i < n; i++)
    {
        numbers[i] = (i + 1) * 10;
    }

    display(numbers, n);

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

# 16. Important Rules

When using pointers with dynamic memory:

- Always initialize pointers appropriately.
- Check allocation results.
- Dereference only valid pointers.
- Stay within allocated bounds.
- Do not use memory after free().
- Avoid double free.
- Release dynamically allocated memory when it is no longer needed.

---

# Lesson Summary

Pointers provide the connection between a C program and dynamically allocated memory.

malloc(), calloc(), and realloc() return pointers to allocated memory.

Pointers can be used to:

- Access dynamically allocated objects.
- Access dynamic arrays.
- Access dynamic structures.
- Pass dynamic memory to functions.
- Modify dynamically allocated data.

The basic relationship is:

\`\`\`
Pointer
   ↓
Dynamic Memory
   ↓
Data
\`\`\`

Understanding pointers is therefore essential for mastering dynamic memory management in C.

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

→ Lesson 12 — Dynamic 2D Arrays

  Lesson 13 — Memory Leaks and Common Errors

  Lesson 14 — Practical Applications

  Lesson 15 — Mini Project — Dynamic Student Record System

---

# Lesson 11 Complete

`,
};

export default lesson11;
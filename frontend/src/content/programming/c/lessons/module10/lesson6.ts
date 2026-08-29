const lesson6 = {
  id: "lesson6",
  title: "realloc()",

  content: `

# Lesson 6: realloc()

---

## Introduction

Sometimes a program needs to **change the size of dynamically allocated memory** after it has already been allocated.

The realloc() function is used for this purpose.

It can resize an existing allocation.

---

# 1. Syntax of realloc()

The syntax is:

\`\`\`c
realloc(pointer, new_size);
\`\`\`

Example:

\`\`\`c
int *numbers;

numbers = malloc(5 * sizeof(*numbers));

numbers = realloc(numbers,
                  10 * sizeof(*numbers));
\`\`\`

The requested allocation size is changed to accommodate 10 int objects.

---

# 2. Why Use realloc()?

Suppose a program initially needs space for:

5 integers

Later, it needs:

10 integers

Instead of allocating a completely separate array, realloc() can be used to request a new size for the existing allocation.

Conceptually:

Before:

\`\`\`
┌────┬────┬────┬────┐
│    │    │    │    │
└────┴────┴────┴────┘
\`\`\`

After realloc():

\`\`\`
┌────┬────┬────┬────┬────┬────┬────┬────┐
│    │    │    │    │    │    │    │    │
└────┴────┴────┴────┴────┴────┴────┴────┘
\`\`\`

---

# 3. realloc() Can Move the Allocation

An important point is that realloc() may:

- Resize the existing allocation in place
- Or allocate a new block
- Copy the preserved data
- Release the old block
- Return the new address

Therefore, the pointer returned by realloc() should be treated as the pointer to the resized allocation.

---

# 4. Return Value

On success:

realloc()

↓

Pointer to resized allocation

On failure:

NULL

If realloc() fails for a nonzero requested size, the original allocation remains valid and unchanged.

---

# 5. Safe Use of realloc()

Avoid directly doing:

\`\`\`c
ptr = realloc(ptr, new_size);
\`\`\`

if you need to preserve the original pointer in case the reallocation fails.

A safer pattern is:

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

---

# 6. Complete Example

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *numbers;
    int *temp;

    numbers = malloc(5 * sizeof(*numbers));

    if (numbers == NULL)
    {
        return 1;
    }

    for (int i = 0; i < 5; i++)
    {
        numbers[i] = i + 1;
    }

    temp = realloc(numbers,
                   10 * sizeof(*numbers));

    if (temp == NULL)
    {
        printf("Reallocation failed.\\n");
        free(numbers);
        return 1;
    }

    numbers = temp;

    for (int i = 5; i < 10; i++)
    {
        numbers[i] = i + 1;
    }

    for (int i = 0; i < 10; i++)
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
1 2 3 4 5 6 7 8 9 10
\`\`\`

---

# 7. Preserving Existing Data

When an allocation is successfully resized to a larger size, the values that fit within both the old and new sizes are preserved.

Example:

Before realloc():

\`\`\`
1 2 3 4 5
\`\`\`

After increasing size:

\`\`\`
1 2 3 4 5 _ _ _ _ _
\`\`\`

The new portion has indeterminate values; it must be initialized before being read.

---

# 8. Shrinking Memory

realloc() can also reduce the size.

Example:

\`\`\`c
int *temp;

temp = realloc(numbers,
               3 * sizeof(*numbers));
\`\`\`

If successful, the allocation is resized to hold three integers.

Conceptually:

Before:

\`\`\`
1 2 3 4 5
\`\`\`

After:

\`\`\`
1 2 3
\`\`\`

Data beyond the new size is no longer part of the allocation.

---

# 9. realloc() With calloc()

Memory initially allocated using calloc() can also be resized using realloc().

Example:

\`\`\`c
int *numbers;

numbers = calloc(5, sizeof(*numbers));

if (numbers == NULL)
{
    return 1;
}
\`\`\`

Then:

\`\`\`c
int *temp;

temp = realloc(numbers,
                10 * sizeof(*numbers));
\`\`\`

---

# 10. realloc() With User Input

A program can dynamically grow an array.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *numbers = NULL;
    int count = 0;
    int value;

    while (1)
    {
        printf("Enter number (-1 to stop): ");
        scanf("%d", &value);

        if (value == -1)
        {
            break;
        }

        int *temp = realloc(numbers,
                            (size_t)(count + 1) *
                            sizeof(*numbers));

        if (temp == NULL)
        {
            printf("Memory allocation failed.\\n");
            free(numbers);
            return 1;
        }

        numbers = temp;
        numbers[count] = value;
        count++;
    }

    printf("Numbers:\\n");

    for (int i = 0; i < count; i++)
    {
        printf("%d ", numbers[i]);
    }

    printf("\\n");

    free(numbers);

    return 0;
}
\`\`\`

This allows the array to grow as new values are entered.

---

# 11. realloc() With a NULL Pointer

An important property of realloc() is:

\`\`\`c
realloc(NULL, size);
\`\`\`

behaves like:

\`\`\`c
malloc(size);
\`\`\`

So this is valid:

\`\`\`c
int *numbers = NULL;

numbers = realloc(numbers,
                  5 * sizeof(*numbers));
\`\`\`

This can be useful when building a dynamically growing array.

---

# 12. realloc() With Size Zero

Code should avoid relying on implementation-specific behavior for:

\`\`\`c
realloc(ptr, 0);
\`\`\`

Instead, if the intention is simply to release the allocation, use:

\`\`\`c
free(ptr);
ptr = NULL;
\`\`\`

This makes the program's intention clear.

---

# 13. Common Mistake

Unsafe pattern:

\`\`\`c
ptr = realloc(ptr, new_size);

if (ptr == NULL)
{
    printf("Failed.\\n");
}
\`\`\`

If the allocation fails, the original pointer value has already been overwritten, potentially causing the program to lose access to the original allocation.

Safer:

\`\`\`c
int *temp;

temp = realloc(ptr, new_size);

if (temp == NULL)
{
    printf("Failed.\\n");
}
else
{
    ptr = temp;
}
\`\`\`

---

# 14. Memory Flow

\`\`\`
Existing allocation
        ↓
     realloc()
        ↓
   ┌────┴────┐
   ↓         ↓
Success    Failure
   ↓         ↓
New pointer  Original
             allocation
             remains valid
\`\`\`

---

# 15. Important Points

realloc()

↓

Changes size of an existing allocation

Can:

↓

Increase size

Decrease size

Move allocation

Returns:

↓

New pointer on success

NULL on failure

Safe pattern:

↓

Temporary pointer

↓

Check result

↓

Assign original pointer

---

# Lesson Summary

realloc() is used to resize dynamically allocated memory.

Example:

\`\`\`c
int *temp;

temp = realloc(numbers,
               new_size);

if (temp != NULL)
{
    numbers = temp;
}
\`\`\`

Existing data within the new allocation's range is preserved.

When increasing the size, the newly added portion is **not automatically initialized**.

A key rule is:

Use a temporary pointer when calling realloc() so that an allocation failure does not overwrite the only pointer to the original memory.

---

# Module 10 Progress

✓ Lesson 1 — Introduction to Dynamic Memory

✓ Lesson 2 — Stack Memory vs Heap Memory

✓ Lesson 3 — malloc()

✓ Lesson 4 — calloc()

✓ Lesson 5 — malloc() vs calloc()

✓ Lesson 6 — realloc()

→ Lesson 7 — free()

  Lesson 8 — Dynamic Arrays

  Lesson 9 — Dynamic Strings

  Lesson 10 — Dynamic Structures

  Lesson 11 — Dynamic Memory and Pointers

  Lesson 12 — Dynamic 2D Arrays

  Lesson 13 — Memory Leaks and Common Errors

  Lesson 14 — Practical Applications

  Lesson 15 — Mini Project — Dynamic Student Record System

---

# Lesson 6 Complete

`,
};

export default lesson6;
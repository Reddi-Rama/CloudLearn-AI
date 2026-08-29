const lesson8 = {
  id: "lesson8",
  title: "Dynamic Arrays",

  content: `

# Lesson 8: Dynamic Arrays

---

## Introduction

A **dynamic array** is an array whose memory is allocated during program execution.

Instead of specifying a fixed size:

\`\`\`c
int numbers[100];
\`\`\`

we can determine the required size at runtime.

For example:

\`\`\`
Enter number of elements: 5
\`\`\`

The program can then allocate memory for exactly five integers.

---

# 1. Creating a Dynamic Array

Use malloc():

\`\`\`c
int *numbers;

numbers = malloc(5 * sizeof(*numbers));
\`\`\`

Or use calloc() when zero initialization is appropriate:

\`\`\`c
numbers = calloc(5, sizeof(*numbers));
\`\`\`

---

# 2. Dynamic Array Diagram

\`\`\`
numbers

   │
   ▼

┌────┬────┬────┬────┬────┐
│ 10 │ 20 │ 30 │ 40 │ 50 │
└────┴────┴────┴────┴────┘

       Dynamic Memory
\`\`\`

The pointer numbers points to the first element.

---

# 3. Accessing Elements

A dynamically allocated array can be accessed using normal array notation:

\`\`\`c
numbers[0]
numbers[1]
numbers[2]
\`\`\`

Example:

\`\`\`c
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
\`\`\`

Pointer notation is also possible:

\`\`\`c
*(numbers + 0)
*(numbers + 1)
*(numbers + 2)
\`\`\`

---

# 4. Dynamic Array With User Input

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

    printf("Array elements:\\n");

    for (int i = 0; i < n; i++)
    {
        printf("%d ", numbers[i]);
    }

    printf("\\n");

    free(numbers);

    numbers = NULL;

    return 0;
}
\`\`\`

---

# 5. Example

Input:

\`\`\`
Enter number of elements: 5

Enter 5 numbers:

10 20 30 40 50
\`\`\`

Output:

\`\`\`
Array elements:

10 20 30 40 50
\`\`\`

---

# 6. Dynamic Array Using calloc()

\`\`\`c
int *numbers;

numbers = calloc(5, sizeof(*numbers));

if (numbers == NULL)
{
    return 1;
}
\`\`\`

Initially, the allocated bytes are zeroed, so the integer elements start at zero.

\`\`\`
0 0 0 0 0
\`\`\`

---

# 7. Growing a Dynamic Array

Suppose the program initially allocates:

5 elements

and later needs:

10 elements

Use realloc():

\`\`\`c
int *temp;

temp = realloc(numbers,
                10 * sizeof(*numbers));

if (temp == NULL)
{
    /* numbers remains valid */
}
else
{
    numbers = temp;
}
\`\`\`

---

# 8. Dynamic Array Growth

Conceptually:

Initial

\`\`\`
┌────┬────┬────┬────┬────┐
│ 10 │ 20 │ 30 │ 40 │ 50 │
└────┴────┴────┴────┴────┘
\`\`\`

↓

realloc()

↓

Expanded

\`\`\`
┌────┬────┬────┬────┬────┬────┬────┬────┬────┬────┐
│ 10 │ 20 │ 30 │ 40 │ 50 │    │    │    │    │    │
└────┴────┴────┴────┴────┴────┴────┴────┴────┴────┘
\`\`\`

The original values are preserved within the new allocation.

---

# 9. Dynamic Array for Student Marks

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int n;
    float *marks;

    printf("Enter number of students: ");
    scanf("%d", &n);

    if (n <= 0)
    {
        return 1;
    }

    marks = malloc((size_t)n * sizeof(*marks));

    if (marks == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    for (int i = 0; i < n; i++)
    {
        printf("Enter marks for student %d: ", i + 1);
        scanf("%f", &marks[i]);
    }

    printf("\\nMarks:\\n");

    for (int i = 0; i < n; i++)
    {
        printf("%.2f ", marks[i]);
    }

    printf("\\n");

    free(marks);

    return 0;
}
\`\`\`

---

# 10. Calculating Sum

Dynamic arrays can be processed like ordinary arrays.

\`\`\`c
int sum = 0;

for (int i = 0; i < n; i++)
{
    sum += numbers[i];
}
\`\`\`

---

# 11. Finding the Largest Element

\`\`\`c
int largest = numbers[0];

for (int i = 1; i < n; i++)
{
    if (numbers[i] > largest)
    {
        largest = numbers[i];
    }
}
\`\`\`

---

# 12. Dynamic Array With realloc()

A dynamic array can grow as new values are entered.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *numbers = NULL;
    size_t count = 0;
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
                            (count + 1) *
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

    printf("\\nNumbers:\\n");

    for (size_t i = 0; i < count; i++)
    {
        printf("%d ", numbers[i]);
    }

    printf("\\n");

    free(numbers);

    return 0;
}
\`\`\`

---

# 13. Advantages of Dynamic Arrays

Runtime size

↓

Memory allocated according to requirement

↓

Can grow using realloc()

↓

Can release memory when finished

They are useful when the number of elements is unknown or changes during execution.

---

# 14. Important Precautions

Always:

Check allocation

↓

Use valid indexes

↓

Resize carefully

↓

Free the allocation

Never access:

\`\`\`c
numbers[n]
\`\`\`

when valid indexes are only:

\`\`\`
0 to n-1
\`\`\`

---

# 15. Important Points

Dynamic Array

↓

Pointer

↓

malloc() / calloc()

↓

Array indexing

↓

realloc() if required

↓

free()

---

# Lesson Summary

A dynamic array allows the program to determine its required size at runtime.

Basic creation:

\`\`\`c
int *numbers = malloc(n * sizeof(*numbers));
\`\`\`

Resizing:

\`\`\`c
int *temp = realloc(numbers,
                    new_n * sizeof(*numbers));
\`\`\`

Releasing:

\`\`\`c
free(numbers);
\`\`\`

Dynamic arrays are an important practical application of pointers and dynamic memory allocation.

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

→ Lesson 9 — Dynamic Strings

  Lesson 10 — Dynamic Structures

  Lesson 11 — Dynamic Memory and Pointers

  Lesson 12 — Dynamic 2D Arrays

  Lesson 13 — Memory Leaks and Common Errors

  Lesson 14 — Practical Applications

  Lesson 15 — Mini Project — Dynamic Student Record System

---

# Lesson 8 Complete

`,
};

export default lesson8;
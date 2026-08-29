const lesson12 = {
  id: "lesson12",
  title: "Dynamic 2D Arrays",

  content: `

# Lesson 12: Dynamic 2D Arrays

---

## Introduction

A two-dimensional array stores data in rows and columns.

A fixed 2D array can be declared as:

\`\`\`c
int matrix[3][4];
\`\`\`

But sometimes the number of rows and columns is known only during program execution.

In that case, dynamic memory can be used.

---

# 1. Fixed 2D Array

Example:

\`\`\`c
int matrix[3][4];
\`\`\`

This represents:

\`\`\`
┌────┬────┬────┬────┐
│    │    │    │    │
├────┼────┼────┼────┤
│    │    │    │    │
├────┼────┼────┼────┤
│    │    │    │    │
└────┴────┴────┴────┘
\`\`\`

There are:

- 3 rows
- 4 columns

---

# 2. Dynamic 2D Array Using Pointers

One common approach is a pointer to pointers:

\`\`\`c
int **matrix;
\`\`\`

First allocate the row pointers:

\`\`\`c
matrix = malloc(rows * sizeof(*matrix));
\`\`\`

Then allocate each row:

\`\`\`c
for (int i = 0; i < rows; i++)
{
    matrix[i] = malloc(cols * sizeof(*matrix[i]));
}
\`\`\`

---

# 3. Memory Structure

Conceptually:

\`\`\`
matrix
   │
   ▼
┌────────┬────────┬────────┐
│ row 0  │ row 1  │ row 2  │
└───┬────┴───┬────┴───┬────┘
    │        │        │
    ▼        ▼        ▼
┌────┬────┐ ┌────┬────┐ ┌────┬────┐
│    │    │ │    │    │ │    │    │
└────┴────┘ └────┴────┘ └────┴────┘
\`\`\`

Each row is separately allocated.

---

# 4. Complete Example

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int rows;
    int cols;
    int **matrix;

    printf("Enter rows: ");
    scanf("%d", &rows);

    printf("Enter columns: ");
    scanf("%d", &cols);

    if (rows <= 0 || cols <= 0)
    {
        printf("Invalid dimensions.\\n");
        return 1;
    }

    matrix = malloc((size_t)rows * sizeof(*matrix));

    if (matrix == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    for (int i = 0; i < rows; i++)
    {
        matrix[i] = malloc((size_t)cols * sizeof(*matrix[i]));

        if (matrix[i] == NULL)
        {
            for (int j = 0; j < i; j++)
            {
                free(matrix[j]);
            }

            free(matrix);
            return 1;
        }
    }

    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            matrix[i][j] = (i + 1) * (j + 1);
        }
    }

    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            printf("%d ", matrix[i][j]);
        }

        printf("\\n");
    }

    for (int i = 0; i < rows; i++)
    {
        free(matrix[i]);
    }

    free(matrix);

    return 0;
}
\`\`\`

---

# 5. Example Output

If the user enters:

\`\`\`
Enter rows: 3
Enter columns: 4
\`\`\`

Output:

\`\`\`
1 2 3 4
2 4 6 8
3 6 9 12
\`\`\`

---

# 6. Why Multiple free() Calls?

In this approach, memory was allocated separately for:

- Row pointers
- Each row

Therefore, each allocation must be released.

First:

\`\`\`c
for (int i = 0; i < rows; i++)
{
    free(matrix[i]);
}
\`\`\`

Then:

\`\`\`c
free(matrix);
\`\`\`

---

# 7. Dynamic 2D Array With calloc()

We can also use calloc():

\`\`\`c
matrix = calloc(rows, sizeof(*matrix));
\`\`\`

Then:

\`\`\`c
for (int i = 0; i < rows; i++)
{
    matrix[i] = calloc(cols, sizeof(*matrix[i]));
}
\`\`\`

The allocated bytes are initialized to zero.

---

# 8. Accessing Elements

Once the matrix is allocated, elements can be accessed using:

\`\`\`c
matrix[i][j]
\`\`\`

For example:

\`\`\`c
matrix[0][0] = 10;
matrix[1][2] = 50;
matrix[2][3] = 100;
\`\`\`

---

# 9. Dynamic Matrix Addition

Two dynamic matrices can be added.

The basic operation is:

\`\`\`c
result[i][j] = matrixA[i][j] + matrixB[i][j];
\`\`\`

For example:

\`\`\`
Matrix A       Matrix B       Result

1 2            5 6            6  8
3 4      +     7 8      =     10 12
\`\`\`

---

# 10. Dynamic Matrix Multiplication

Matrix multiplication can also be performed using dynamically allocated matrices.

The basic formula is:

\`\`\`c
result[i][j] += A[i][k] * B[k][j];
\`\`\`

The dimensions of the matrices must be appropriate for multiplication.

---

# 11. Alternative: Contiguous 2D Allocation

Another approach is to allocate one contiguous block:

\`\`\`c
int *matrix;

matrix = malloc((size_t)rows * cols * sizeof(*matrix));
\`\`\`

An element can then be accessed using:

\`\`\`c
matrix[i * cols + j]
\`\`\`

---

# 12. Contiguous Memory Diagram

For a matrix with 2 rows and 3 columns:

\`\`\`
matrix
   │
   ▼
┌────┬────┬────┬────┬────┬────┐
│0,0 │0,1 │0,2 │1,0 │1,1 │1,2 │
└────┴────┴────┴────┴────┴────┘
\`\`\`

The expression:

\`\`\`c
matrix[i * cols + j]
\`\`\`

represents the element at row i and column j.

---

# 13. Accessing a Contiguous Matrix

Example:

\`\`\`c
matrix[0 * cols + 0] = 10;
matrix[1 * cols + 2] = 50;
\`\`\`

This is another way of representing a dynamically allocated 2D matrix.

---

# 14. Freeing a Contiguous Matrix

Because the entire matrix was allocated using one malloc(), only one free() is required:

\`\`\`c
free(matrix);
matrix = NULL;
\`\`\`

This differs from the pointer-to-pointer approach, where each row must be freed separately.

---

# 15. Important Points

Dynamic 2D Array

        ↓

Determine rows and columns

        ↓

Allocate memory

        ↓

Access matrix[i][j]

        ↓

Use matrix

        ↓

Free every allocation

For the pointer-to-pointer approach:

\`\`\`c
matrix = malloc(rows * sizeof(*matrix));

for (int i = 0; i < rows; i++)
{
    matrix[i] = malloc(cols * sizeof(*matrix[i]));
}
\`\`\`

Finally:

\`\`\`c
for (int i = 0; i < rows; i++)
{
    free(matrix[i]);
}

free(matrix);
\`\`\`

---

# Lesson Summary

Dynamic 2D arrays allow the number of rows and columns to be determined at runtime.

A common method is:

\`\`\`c
int **matrix;

matrix = malloc(rows * sizeof(*matrix));

for (int i = 0; i < rows; i++)
{
    matrix[i] = malloc(cols * sizeof(*matrix[i]));
}
\`\`\`

Then access elements normally:

\`\`\`c
matrix[i][j]
\`\`\`

Because the rows are separately allocated, each row must be freed before freeing the row-pointer array.

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

→ Lesson 13 — Memory Leaks and Common Errors

  Lesson 14 — Practical Applications

  Lesson 15 — Mini Project — Dynamic Student Record System

---

# Lesson 12 Complete

`,
};

export default lesson12;
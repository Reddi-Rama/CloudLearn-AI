const lesson11 = {
  id: "lesson11",

  title: "Nested Loops",

  content: `

# Lesson 11: Nested Loops

## Introduction

A loop placed inside another loop is called a **nested loop**.

In C, one loop can contain another loop.

For example:

\`\`\`c
for (int i = 1; i <= 3; i++)
{
    for (int j = 1; j <= 3; j++)
    {
        printf("%d %d\\n", i, j);
    }
}
\`\`\`

Here:

\`\`\`text
Outer loop
    ↓
Inner loop
    ↓
Repeated execution
\`\`\`

The inner loop completes all of its iterations for every one iteration of the outer loop.

---

# 1. What Is a Nested Loop?

A nested loop is a loop inside another loop.

The outer loop controls the larger repetition.

The inner loop executes repeatedly for each iteration of the outer loop.

Basic structure:

\`\`\`c
for (...)
{
    for (...)
    {
        statements;
    }
}
\`\`\`

---

# 2. Simple Nested for Loop

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;
    int j;

    for (i = 1; i <= 3; i++)
    {
        for (j = 1; j <= 3; j++)
        {
            printf("%d %d\\n", i, j);
        }
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
\`\`\`

---

# 3. How Nested Loops Execute

Consider:

\`\`\`c
for (i = 1; i <= 2; i++)
{
    for (j = 1; j <= 3; j++)
    {
        printf("%d %d\\n", i, j);
    }
}
\`\`\`

Execution:

\`\`\`text
i = 1
 ↓
j = 1 → print 1 1
j = 2 → print 1 2
j = 3 → print 1 3
 ↓
i = 2
 ↓
j = 1 → print 2 1
j = 2 → print 2 2
j = 3 → print 2 3
\`\`\`

The inner loop runs completely before the outer loop moves to its next iteration.

---

# 4. Nested while Loops

Nested loops are not limited to for loops.

A while loop can contain another while loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 3)
    {
        int j = 1;

        while (j <= 3)
        {
            printf("%d %d\\n", i, j);
            j++;
        }

        i++;
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
\`\`\`

---

# 5. Nested do-while Loops

A do-while loop can also contain another do-while loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    do
    {
        int j = 1;

        do
        {
            printf("%d %d\\n", i, j);
            j++;
        }
        while (j <= 3);

        i++;
    }
    while (i <= 3);

    return 0;
}
\`\`\`

---

# 6. Printing a Rectangle of Stars

Nested loops are commonly used to print patterns.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;
    int j;

    for (i = 1; i <= 4; i++)
    {
        for (j = 1; j <= 5; j++)
        {
            printf("* ");
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
* * * * *
* * * * *
* * * * *
* * * * *
\`\`\`

The outer loop controls the rows.

The inner loop controls the columns.

---

# 7. Printing a Number Pattern

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;
    int j;

    for (i = 1; i <= 4; i++)
    {
        for (j = 1; j <= 5; j++)
        {
            printf("%d ", j);
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
\`\`\`

---

# 8. Printing Increasing Star Pattern

The inner loop can depend on the outer loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;
    int j;

    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("* ");
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
*
* *
* * *
* * * *
* * * * *
\`\`\`

Here, the number of columns depends on the current row.

---

# 9. Printing Decreasing Star Pattern

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;
    int j;

    for (i = 5; i >= 1; i--)
    {
        for (j = 1; j <= i; j++)
        {
            printf("* ");
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
* * * * *
* * * *
* * *
* *
*
\`\`\`

---

# 10. Multiplication Tables Using Nested Loops

Nested loops can generate multiple multiplication tables.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;
    int j;

    for (i = 1; i <= 3; i++)
    {
        printf("Table of %d\\n", i);

        for (j = 1; j <= 5; j++)
        {
            printf("%d x %d = %d\\n",
                   i,
                   j,
                   i * j);
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Table of 1
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5

Table of 2
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10

Table of 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
\`\`\`

---

# 11. Nested Loops With Conditions

An if statement can be used inside nested loops.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;
    int j;

    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= 5; j++)
        {
            if (i == j)
            {
                printf("1 ");
            }
            else
            {
                printf("0 ");
            }
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0
0 0 0 0 1
\`\`\`

---

# 12. Nested Loops and Two-Dimensional Arrays

Nested loops are commonly used to process two-dimensional arrays.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int matrix[2][3] =
    {
        {1, 2, 3},
        {4, 5, 6}
    };

    int i;
    int j;

    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 3; j++)
        {
            printf("%d ", matrix[i][j]);
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 3
4 5 6
\`\`\`

The outer loop processes rows.

The inner loop processes columns.

---

# 13. Sum of Elements in a Matrix

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int matrix[2][3] =
    {
        {1, 2, 3},
        {4, 5, 6}
    };

    int sum = 0;
    int i;
    int j;

    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 3; j++)
        {
            sum += matrix[i][j];
        }
    }

    printf("Sum = %d\\n", sum);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Sum = 21
\`\`\`

---

# 14. Nested Loop With while

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 3)
    {
        int j = 1;

        while (j <= i)
        {
            printf("* ");
            j++;
        }

        printf("\\n");
        i++;
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
*
* *
* * *
\`\`\`

---

# 15. Three-Level Nested Loop

C allows more than two levels of nesting.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;
    int j;
    int k;

    for (i = 1; i <= 2; i++)
    {
        for (j = 1; j <= 2; j++)
        {
            for (k = 1; k <= 2; k++)
            {
                printf("%d %d %d\\n", i, j, k);
            }
        }
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 1 1
1 1 2
1 2 1
1 2 2
2 1 1
2 1 2
2 2 1
2 2 2
\`\`\`

Each inner loop completes before the next outer iteration.

---

# 16. Number of Iterations in Nested Loops

Consider:

\`\`\`c
for (i = 1; i <= 3; i++)
{
    for (j = 1; j <= 4; j++)
    {
        printf("* ");
    }
}
\`\`\`

The outer loop executes 3 times.

The inner loop executes 4 times for each outer iteration.

Therefore:

\`\`\`text
3 × 4 = 12
\`\`\`

The statement inside the inner loop executes 12 times.

---

# 17. Nested Loops and Patterns

Nested loops are especially useful for generating patterns.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;
    int j;

    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= 5; j++)
        {
            printf("%d ", i);
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 1 1 1 1
2 2 2 2 2
3 3 3 3 3
4 4 4 4 4
5 5 5 5 5
\`\`\`

---

# 18. Nested Loops and Coordinates

Nested loops can represent rows and columns.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int row;
    int column;

    for (row = 1; row <= 3; row++)
    {
        for (column = 1; column <= 4; column++)
        {
            printf("(%d,%d) ", row, column);
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
(1,1) (1,2) (1,3) (1,4)
(2,1) (2,2) (2,3) (2,4)
(3,1) (3,2) (3,3) (3,4)
\`\`\`

---

# 19. Nested Loops and break

A break statement inside an inner loop exits that loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;
    int j;

    for (i = 1; i <= 3; i++)
    {
        for (j = 1; j <= 5; j++)
        {
            if (j == 3)
            {
                break;
            }

            printf("%d ", j);
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2
1 2
1 2
\`\`\`

The break exits the inner loop, not the outer loop.

---

# 20. Nested Loops and continue

A continue statement inside an inner loop skips the remaining statements of the current inner iteration.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;
    int j;

    for (i = 1; i <= 3; i++)
    {
        for (j = 1; j <= 5; j++)
        {
            if (j == 3)
            {
                continue;
            }

            printf("%d ", j);
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 4 5
1 2 4 5
1 2 4 5
\`\`\`

---

# 21. Practical Example — Rectangle

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int rows = 3;
    int columns = 6;
    int i;
    int j;

    for (i = 1; i <= rows; i++)
    {
        for (j = 1; j <= columns; j++)
        {
            printf("* ");
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
* * * * * *
* * * * * *
* * * * * *
\`\`\`

---

# 22. Practical Example — Triangle

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int rows = 5;
    int i;
    int j;

    for (i = 1; i <= rows; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("* ");
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
*
* *
* * *
* * * *
* * * * *
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting to Reset the Inner Loop Variable

Incorrect:

\`\`\`c
int j = 1;

for (i = 1; i <= 3; i++)
{
    for (; j <= 3; j++)
    {
        printf("%d %d\\n", i, j);
    }
}
\`\`\`

After the first inner loop finishes, j is already greater than 3.

A common approach is to initialize the inner loop variable for every outer iteration:

\`\`\`c
for (i = 1; i <= 3; i++)
{
    for (j = 1; j <= 3; j++)
    {
        printf("%d %d\\n", i, j);
    }
}
\`\`\`

---

## Mistake 2 — Confusing Rows and Columns

Usually:

\`\`\`text
Outer loop → rows
Inner loop → columns
\`\`\`

This is especially important when working with matrices and patterns.

---

## Mistake 3 — Incorrect Loop Limits

Small changes such as:

\`\`\`c
j < 5
\`\`\`

and:

\`\`\`c
j <= 5
\`\`\`

produce different numbers of iterations.

---

## Mistake 4 — Misunderstanding break

A break inside an inner loop normally exits the nearest enclosing loop.

It does not automatically terminate all outer loops.

---

# Lesson Summary

In this lesson, you learned:

- A nested loop is a loop inside another loop.
- The inner loop executes completely for each iteration of the outer loop.
- for, while, and do-while loops can be nested.
- Nested loops are useful for patterns.
- Nested loops are commonly used with two-dimensional arrays.
- The outer loop commonly represents rows.
- The inner loop commonly represents columns.
- Multiple levels of nesting are possible.
- break exits the nearest enclosing loop.
- continue affects the current loop iteration.
- The total number of iterations can often be calculated by multiplying the iteration counts of nested loops.

The key structure is:

\`\`\`text
Outer Loop
    ↓
    Inner Loop
        ↓
      Body
        ↓
    Inner Loop repeats
        ↓
Outer Loop repeats
\`\`\`

---

# Module 3 Progress

✓ Lesson 1 — Conditional Statements

✓ Lesson 2 — if Statement

✓ Lesson 3 — if-else Statement

✓ Lesson 4 — else-if Ladder

✓ Lesson 5 — Nested if

✓ Lesson 6 — switch Statement

✓ Lesson 7 — Conditional Operator

✓ Lesson 8 — for Loop

✓ Lesson 9 — while Loop

✓ Lesson 10 — do-while Loop

✓ Lesson 11 — Nested Loops

→ Lesson 12 — break

  Lesson 13 — continue
  Lesson 14 — goto
  Lesson 15 — Loop Control

Lesson 11 Complete

Next: Lesson 12 — break.

`,
};

export default lesson11;
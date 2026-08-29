const lesson12 = {
  id: "lesson12",

  title: "Nested Loops",

  content: `

# Lesson 12: Nested Loops

## Introduction

A loop placed inside another loop is called a **nested loop**.

Nested loops are useful when a program needs to repeat one set of operations for every iteration of another loop.

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

For every iteration of the outer loop, the inner loop completes all of its iterations.

---

# 1. What Is a Nested Loop?

A nested loop is simply a loop inside another loop.

General structure:

\`\`\`c
for (initialization; condition; update)
{
    for (initialization; condition; update)
    {
        statements;
    }
}
\`\`\`

The outer loop controls the larger repetition.

The inner loop performs repeated operations for each outer-loop iteration.

---

# 2. Basic Nested for Loop

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 3; i++)
    {
        for (int j = 1; j <= 3; j++)
        {
            printf("i = %d, j = %d\\n", i, j);
        }
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
\`\`\`

---

# 3. How Nested Loops Execute

Consider:

\`\`\`c
for (int i = 1; i <= 2; i++)
{
    for (int j = 1; j <= 3; j++)
    {
        printf("%d %d\\n", i, j);
    }
}
\`\`\`

Execution:

\`\`\`text
i = 1
 ↓
j = 1 → print
j = 2 → print
j = 3 → print
 ↓
i = 2
 ↓
j = 1 → print
j = 2 → print
j = 3 → print
\`\`\`

The inner loop runs completely for every value of i.

Therefore:

\`\`\`text
Outer iterations = 2
Inner iterations = 3

Total executions = 2 × 3
                 = 6
\`\`\`

---

# 4. Nested Loop With Rows and Columns

Nested loops are commonly used to represent rows and columns.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int row = 1; row <= 3; row++)
    {
        for (int column = 1; column <= 4; column++)
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
* * * *
* * * *
* * * *
\`\`\`

The outer loop controls the rows.

The inner loop controls the columns.

---

# 5. Printing a Square Pattern

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int row = 1; row <= 5; row++)
    {
        for (int column = 1; column <= 5; column++)
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
* * * * *
\`\`\`

There are:

\`\`\`text
5 rows
5 columns
\`\`\`

So the inner statement executes:

\`\`\`text
5 × 5 = 25 times
\`\`\`

---

# 6. Printing Numbers in Rows

Nested loops can print numbers instead of symbols.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int row = 1; row <= 3; row++)
    {
        for (int column = 1; column <= 5; column++)
        {
            printf("%d ", column);
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
\`\`\`

---

# 7. Printing Row Numbers

The outer-loop variable can be used inside the inner loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int row = 1; row <= 5; row++)
    {
        for (int column = 1; column <= 5; column++)
        {
            printf("%d ", row);
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

# 8. Number Triangle

Nested loops can be used to create patterns.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int row = 1; row <= 5; row++)
    {
        for (int column = 1; column <= row; column++)
        {
            printf("%d ", column);
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
\`\`\`

The inner loop limit depends on the current value of row.

---

# 9. Star Triangle

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int row = 1; row <= 5; row++)
    {
        for (int column = 1; column <= row; column++)
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

# 10. Reverse Star Triangle

The inner loop can start with a larger number and decrease.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int row = 5; row >= 1; row--)
    {
        for (int column = 1; column <= row; column++)
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

# 11. Multiplication Tables

Nested loops can generate multiple multiplication tables.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int number = 1; number <= 3; number++)
    {
        for (int multiplier = 1; multiplier <= 5; multiplier++)
        {
            printf("%d x %d = %d\\n",
                   number,
                   multiplier,
                   number * multiplier);
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10

3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
\`\`\`

---

# 12. Nested while Loops

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
            printf("i = %d, j = %d\\n", i, j);
            j++;
        }

        i++;
    }

    return 0;
}
\`\`\`

The same nesting concept applies.

---

# 13. Nested do-while Loops

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
            printf("i = %d, j = %d\\n", i, j);
            j++;
        }
        while (j <= 3);

        i++;
    }
    while (i <= 2);

    return 0;
}
\`\`\`

Output:

\`\`\`text
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
\`\`\`

---

# 14. Nested Loops and break

A break statement terminates the loop in which it appears.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 3; i++)
    {
        for (int j = 1; j <= 5; j++)
        {
            if (j == 3)
            {
                break;
            }

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
2 1
2 2
3 1
3 2
\`\`\`

The break exits the inner loop only.

The outer loop continues.

---

# 15. Nested Loops and continue

The continue statement affects the loop in which it appears.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 3; i++)
    {
        for (int j = 1; j <= 5; j++)
        {
            if (j == 3)
            {
                continue;
            }

            printf("%d %d\\n", i, j);
        }
    }

    return 0;
}
\`\`\`

The value 3 is skipped for every inner-loop iteration.

---

# 16. Nested Loop With Conditions

Conditions can be used inside nested loops.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int row = 1; row <= 5; row++)
    {
        for (int column = 1; column <= 5; column++)
        {
            if (row == column)
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

# 17. Nested Loops for a Multiplication Grid

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int row = 1; row <= 5; row++)
    {
        for (int column = 1; column <= 5; column++)
        {
            printf("%3d ", row * column);
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
  1   2   3   4   5
  2   4   6   8  10
  3   6   9  12  15
  4   8  12  16  20
  5  10  15  20  25
\`\`\`

Nested loops are useful for creating such row-and-column calculations.

---

# 18. Three-Level Nested Loops

More than two loops can be nested.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 2; i++)
    {
        for (int j = 1; j <= 2; j++)
        {
            for (int k = 1; k <= 2; k++)
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

If each loop runs 2 times:

\`\`\`text
2 × 2 × 2 = 8
\`\`\`

total iterations occur in the innermost body.

---

# 19. Nested Loops and Execution Count

Suppose:

\`\`\`c
for (int i = 1; i <= 10; i++)
{
    for (int j = 1; j <= 20; j++)
    {
        printf("%d %d\\n", i, j);
    }
}
\`\`\`

The outer loop runs:

\`\`\`text
10 times
\`\`\`

The inner loop runs:

\`\`\`text
20 times
\`\`\`

Therefore, the inner statement executes:

\`\`\`text
10 × 20 = 200 times
\`\`\`

This concept becomes important when studying algorithm efficiency.

---

# 20. Practical Example — Pattern

\`\`\`c
#include <stdio.h>

int main(void)
{
    int rows = 5;

    for (int row = 1; row <= rows; row++)
    {
        for (int column = 1; column <= row; column++)
        {
            printf("%d ", row);
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
\`\`\`

The outer loop controls the row number.

The inner loop determines how many values appear in that row.

---

# 21. Practical Example — Coordinate Pairs

Nested loops are useful for generating combinations.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int x = 1; x <= 3; x++)
    {
        for (int y = 1; y <= 3; y++)
        {
            printf("(%d, %d)\\n", x, y);
        }
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
(1, 1)
(1, 2)
(1, 3)
(2, 1)
(2, 2)
(2, 3)
(3, 1)
(3, 2)
(3, 3)
\`\`\`

---

# 22. Practical Example — Simple Pattern

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int row = 1; row <= 5; row++)
    {
        for (int column = 1; column <= 5; column++)
        {
            if (row == 1 || row == 5 ||
                column == 1 || column == 5)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }

        printf("\\n");
    }

    return 0;
}
\`\`\`

This demonstrates how conditions can be combined with nested loops to produce structured patterns.

---

# 23. Scope of Nested Loop Variables

Variables declared in separate loop headers have separate scopes.

Example:

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
i → outer loop variable
j → inner loop variable
\`\`\`

The inner loop can access i because the inner loop is inside the scope of the outer loop.

---

# 24. Choosing Meaningful Variable Names

Nested loops are easier to understand when meaningful names are used.

For example:

\`\`\`c
for (int row = 1; row <= 5; row++)
{
    for (int column = 1; column <= 5; column++)
    {
        printf("* ");
    }

    printf("\\n");
}
\`\`\`

This is clearer than using unclear variable names when working with rows and columns.

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting That the Inner Loop Restarts

For every iteration of the outer loop, the inner loop starts again.

---

## Mistake 2 — Using the Wrong Loop Variable

Be careful about using:

\`\`\`c
i
\`\`\`

and:

\`\`\`c
j
\`\`\`

in the correct loop.

---

## Mistake 3 — Forgetting to Update the Inner Loop

Incorrect:

\`\`\`c
for (int j = 1; j <= 5;)
{
    printf("%d ", j);
}
\`\`\`

The inner loop never progresses.

---

## Mistake 4 — Assuming break Exits Every Loop

A break statement exits only the nearest enclosing loop or switch statement.

---

## Mistake 5 — Creating Too Many Nested Levels

Deeply nested loops can make code difficult to understand and may indicate that the problem can be structured differently.

---

# Lesson Summary

In this lesson, you learned:

- A nested loop is a loop inside another loop.
- The inner loop executes completely for each iteration of the outer loop.
- Nested loops are useful for rows and columns.
- They are commonly used for patterns and tables.
- for, while, and do-while loops can all be nested.
- break affects the nearest enclosing loop.
- continue affects the loop in which it appears.
- Multiple levels of nesting are possible.
- The number of inner executions depends on the number of outer and inner iterations.
- Meaningful loop-variable names make nested loops easier to understand.

The key structure is:

\`\`\`text
Outer Loop
    ↓
    Inner Loop
        ↓
        Statements
    ↑
    Inner loop repeats
↑
Outer loop repeats
\`\`\`

The most important idea is:

\`\`\`text
For every outer-loop iteration
        ↓
The inner loop runs completely
\`\`\`

---

# Module 3 Progress

✓ Lesson 1 — Conditional Statements

✓ Lesson 2 — if Statement

✓ Lesson 3 — if-else Statement

✓ Lesson 4 — Nested if

✓ Lesson 5 — else-if Ladder

✓ Lesson 6 — switch Statement

✓ Lesson 7 — Nested switch

✓ Lesson 8 — Conditional Operator

✓ Lesson 9 — while Loop

✓ Lesson 10 — do-while Loop

✓ Lesson 11 — for Loop

→ Lesson 12 — Nested Loops

  Lesson 13 — break Statement

  Lesson 14 — continue Statement

  Lesson 15 — Mini Project — Menu-Driven Program

Lesson 12 Complete

Next: Lesson 13 — break Statement.

`,
};

export default lesson12;
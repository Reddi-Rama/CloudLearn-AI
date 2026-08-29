const lesson14 = {
  id: "lesson14",

  title: "continue Statement",

  content: `

# Lesson 14: continue Statement

## Introduction

The **continue statement** is used to skip the remaining statements of the current loop iteration and move to the next iteration of the loop.

The basic syntax is:

\`\`\`c
continue;
\`\`\`

Unlike the **break statement**, continue does not terminate the loop.

The difference is:

\`\`\`text
break
  ↓
Terminates the loop

continue
  ↓
Skips current iteration
  ↓
Next iteration
\`\`\`

The continue statement can be used with:

\`\`\`text
for loops
while loops
do-while loops
\`\`\`

---

# 1. What Is the continue Statement?

The continue statement tells C to stop executing the remaining statements in the current iteration.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 5; i++)
    {
        if (i == 3)
        {
            continue;
        }

        printf("%d\\n", i);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1
2
4
5
\`\`\`

When i becomes 3:

\`\`\`text
i == 3
   ↓
continue
   ↓
skip printf()
   ↓
next iteration
\`\`\`

The loop continues after skipping 3.

---

# 2. Basic Syntax

The syntax is:

\`\`\`c
continue;
\`\`\`

It is normally used inside a loop.

Example:

\`\`\`c
for (int i = 1; i <= 10; i++)
{
    if (condition)
    {
        continue;
    }

    statements;
}
\`\`\`

When the condition is true, the remaining statements in that iteration are skipped.

---

# 3. continue in a for Loop

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 10; i++)
    {
        if (i == 5)
        {
            continue;
        }

        printf("%d\\n", i);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1
2
3
4
6
7
8
9
10
\`\`\`

Only the iteration where i is 5 is skipped.

---

# 4. continue Does Not Terminate the Loop

Consider:

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    if (i == 3)
    {
        continue;
    }

    printf("%d\\n", i);
}
\`\`\`

The loop still executes for:

\`\`\`text
1
2
4
5
\`\`\`

Therefore:

\`\`\`text
continue
    ↓
skip current iteration
    ↓
loop continues
\`\`\`

---

# 5. continue in a while Loop

The continue statement can also be used with a while loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 0;

    while (i < 5)
    {
        i++;

        if (i == 3)
        {
            continue;
        }

        printf("%d\\n", i);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1
2
4
5
\`\`\`

The value 3 is skipped.

The increment is placed before continue so that the loop can continue making progress.

---

# 6. continue in a do-while Loop

continue can also be used in a do-while loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 0;

    do
    {
        i++;

        if (i == 3)
        {
            continue;
        }

        printf("%d\\n", i);
    }
    while (i < 5);

    return 0;
}
\`\`\`

Output:

\`\`\`text
1
2
4
5
\`\`\`

The current iteration is skipped when i is 3.

---

# 7. continue and for Loop Update

There is an important difference between continue in a for loop and continue in a while loop.

Consider:

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    if (i == 3)
    {
        continue;
    }

    printf("%d\\n", i);
}
\`\`\`

When continue executes, control proceeds to the loop's update expression:

\`\`\`text
continue
   ↓
i++
   ↓
condition check
   ↓
next iteration
\`\`\`

Therefore the loop progresses normally.

---

# 8. continue in a while Loop

With a while loop, continue moves control to the loop condition.

Example:

\`\`\`c
int i = 0;

while (i < 5)
{
    i++;

    if (i == 3)
    {
        continue;
    }

    printf("%d\\n", i);
}
\`\`\`

The update must occur before continue.

If the variable were not updated appropriately, the loop could become infinite.

---

# 9. Skipping Even Numbers

continue is useful when certain values should be ignored.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 10; i++)
    {
        if (i % 2 == 0)
        {
            continue;
        }

        printf("%d\\n", i);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1
3
5
7
9
\`\`\`

The even numbers are skipped.

---

# 10. Skipping Odd Numbers

The same idea can be used to skip odd numbers.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 10; i++)
    {
        if (i % 2 != 0)
        {
            continue;
        }

        printf("%d\\n", i);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
2
4
6
8
10
\`\`\`

---

# 11. Skipping Multiples of a Number

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 20; i++)
    {
        if (i % 5 == 0)
        {
            continue;
        }

        printf("%d\\n", i);
    }

    return 0;
}
\`\`\`

Output excludes:

\`\`\`text
5
10
15
20
\`\`\`

---

# 12. continue With Conditions

Multiple conditions can be used.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 20; i++)
    {
        if (i < 5)
        {
            continue;
        }

        printf("%d\\n", i);
    }

    return 0;
}
\`\`\`

Values less than 5 are skipped.

The output begins with:

\`\`\`text
5
6
7
...
\`\`\`

---

# 13. continue When Processing Input

continue can be useful when invalid input values should be ignored.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    for (int i = 1; i <= 5; i++)
    {
        printf("Enter number: ");
        scanf("%d", &number);

        if (number < 0)
        {
            printf("Negative value skipped\\n");
            continue;
        }

        printf("Accepted value = %d\\n", number);
    }

    return 0;
}
\`\`\`

Negative values are skipped while the loop continues to process the remaining inputs.

---

# 14. continue With Arrays

continue can be useful when processing only selected array elements.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[] = {10, -5, 20, -3, 30};

    for (int i = 0; i < 5; i++)
    {
        if (numbers[i] < 0)
        {
            continue;
        }

        printf("%d\\n", numbers[i]);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
10
20
30
\`\`\`

Negative values are skipped.

---

# 15. continue in Nested Loops

In nested loops, continue affects the **nearest enclosing loop**.

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
i = 1, j = 4
i = 1, j = 5
i = 2, j = 1
i = 2, j = 2
i = 2, j = 4
i = 2, j = 5
i = 3, j = 1
i = 3, j = 2
i = 3, j = 4
i = 3, j = 5
\`\`\`

The inner loop skips j = 3.

The outer loop continues normally.

---

# 16. continue Does Not Exit Nested Loops

Consider:

\`\`\`c
for (int i = 1; i <= 3; i++)
{
    for (int j = 1; j <= 3; j++)
    {
        if (j == 2)
        {
            continue;
        }

        printf("%d %d\\n", i, j);
    }

    printf("Outer iteration complete\\n");
}
\`\`\`

The continue affects only the inner loop.

The outer loop is not terminated.

---

# 17. continue vs break

This is one of the most important differences.

### break

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    if (i == 3)
    {
        break;
    }

    printf("%d\\n", i);
}
\`\`\`

Output:

\`\`\`text
1
2
\`\`\`

The loop terminates.

### continue

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    if (i == 3)
    {
        continue;
    }

    printf("%d\\n", i);
}
\`\`\`

Output:

\`\`\`text
1
2
4
5
\`\`\`

The loop continues.

Remember:

\`\`\`text
break
↓
Exit loop

continue
↓
Skip iteration
↓
Continue loop
\`\`\`

---

# 18. Practical Example — Print Valid Numbers

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[] = {10, -2, 25, -8, 40, 15};

    for (int i = 0; i < 6; i++)
    {
        if (numbers[i] < 0)
        {
            continue;
        }

        printf("Valid number: %d\\n", numbers[i]);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Valid number: 10
Valid number: 25
Valid number: 40
Valid number: 15
\`\`\`

---

# 19. Practical Example — Print Numbers Except Multiples of 3

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 15; i++)
    {
        if (i % 3 == 0)
        {
            continue;
        }

        printf("%d ", i);
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 4 5 7 8 10 11 13 14
\`\`\`

---

# 20. Practical Example — Process Positive Values

\`\`\`c
#include <stdio.h>

int main(void)
{
    int values[] = {5, -2, 8, -4, 12, 7};

    for (int i = 0; i < 6; i++)
    {
        if (values[i] <= 0)
        {
            continue;
        }

        printf("Positive value = %d\\n", values[i]);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Positive value = 5
Positive value = 8
Positive value = 12
Positive value = 7
\`\`\`

---

# 21. Avoiding an Infinite Loop

Be especially careful when using continue in while loops.

Incorrect:

\`\`\`c
int i = 0;

while (i < 5)
{
    if (i == 3)
    {
        continue;
    }

    i++;
}
\`\`\`

When i becomes 3, continue executes repeatedly and i never changes.

This creates an infinite loop.

A safer structure is:

\`\`\`c
int i = 0;

while (i < 5)
{
    i++;

    if (i == 3)
    {
        continue;
    }

    printf("%d\\n", i);
}
\`\`\`

The loop variable continues to progress.

---

# 22. continue and Program Structure

continue can make code easier to read when unwanted cases should simply be skipped.

For example:

\`\`\`c
for (int i = 0; i < 10; i++)
{
    if (i < 5)
    {
        continue;
    }

    printf("%d\\n", i);
}
\`\`\`

This avoids placing the main operation inside a large nested condition.

---

# Common Beginner Mistakes

## Mistake 1 — Thinking continue Terminates the Loop

continue does not terminate the loop.

It skips the current iteration.

---

## Mistake 2 — Confusing continue With break

Remember:

\`\`\`text
break
→ exit loop

continue
→ skip current iteration
\`\`\`

---

## Mistake 3 — Creating an Infinite while Loop

Be careful that the loop-control variable still changes when continue executes.

---

## Mistake 4 — Forgetting That continue Affects the Nearest Loop

In nested loops, continue applies to the nearest enclosing loop.

---

# Lesson Summary

In this lesson, you learned:

- continue skips the remaining statements of the current iteration.
- The loop itself continues running.
- continue can be used with for loops.
- continue can be used with while loops.
- continue can be used with do-while loops.
- In a for loop, continue proceeds to the update expression.
- In a while loop, continue proceeds to the condition check.
- continue is useful for skipping unwanted values.
- In nested loops, continue affects the nearest enclosing loop.
- Care must be taken to avoid infinite loops.

The key idea is:

\`\`\`text
Loop starts
    ↓
Condition checked
    ↓
continue encountered
    ↓
Remaining statements skipped
    ↓
Next iteration
\`\`\`

Remember:

\`\`\`text
break
↓
Terminate

continue
↓
Skip current iteration
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

✓ Lesson 12 — Nested Loops

✓ Lesson 13 — break Statement

→ Lesson 14 — continue Statement

  Lesson 15 — Mini Project — Menu-Driven Program

Lesson 14 Complete

Next: Lesson 15 — Mini Project — Menu-Driven Program.

`,
};

export default lesson14;
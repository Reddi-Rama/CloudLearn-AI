const lesson13 = {
  id: "lesson13",

  title: "continue Statement",

  content: `

# Lesson 13: continue Statement

## Introduction

The continue statement is used inside a loop to skip the remaining statements of the current iteration and move to the next iteration of the loop.

The syntax is:

\`\`\`c
continue;
\`\`\`

The continue statement can be used with:

\`\`\`text
for loops
while loops
do-while loops
\`\`\`

Unlike break, continue does not terminate the loop.

---

# 1. What Is the continue Statement?

The continue statement skips the remaining part of the current iteration.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 5; i++)
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

When i becomes 3, continue is executed.

The printf statement is skipped for that iteration.

The loop then continues with the next iteration.

---

# 2. Syntax of continue

The syntax is:

\`\`\`c
continue;
\`\`\`

It is normally used with a condition:

\`\`\`c
if (condition)
{
    continue;
}
\`\`\`

---

# 3. continue in a for Loop

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 10; i++)
    {
        if (i == 5)
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
1 2 3 4 6 7 8 9 10
\`\`\`

Only the iteration where i is 5 is skipped.

The loop continues normally afterward.

---

# 4. continue in a while Loop

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

        printf("%d ", i);
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 4 5
\`\`\`

The increment is performed before continue.

This is important when using continue inside a while loop.

---

# 5. continue in a do-while Loop

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

        printf("%d ", i);
    }
    while (i < 5);

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 4 5
\`\`\`

The current iteration is skipped when i becomes 3.

---

# 6. continue and for Loop Execution

Consider:

\`\`\`c
for (i = 1; i <= 5; i++)
{
    if (i == 3)
    {
        continue;
    }

    printf("%d ", i);
}
\`\`\`

When i becomes 3:

\`\`\`text
continue
   ↓
skip remaining statements
   ↓
loop iteration expression
   ↓
i++
   ↓
next iteration
\`\`\`

This is one important difference between continue in a for loop and continue in a while loop.

---

# 7. Skipping Even Numbers

continue can be used to skip unwanted values.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 10; i++)
    {
        if (i % 2 == 0)
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
1 3 5 7 9
\`\`\`

The even numbers are skipped.

---

# 8. Skipping Odd Numbers

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 10; i++)
    {
        if (i % 2 != 0)
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
2 4 6 8 10
\`\`\`

The odd numbers are skipped.

---

# 9. continue With an Array

continue can be useful when processing arrays.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[] = {10, -5, 20, -3, 30};
    int i;

    for (i = 0; i < 5; i++)
    {
        if (numbers[i] < 0)
        {
            continue;
        }

        printf("%d ", numbers[i]);
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
10 20 30
\`\`\`

Negative values are skipped.

---

# 10. continue With User Input

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    for (int i = 1; i <= 5; i++)
    {
        printf("Enter a number: ");
        scanf("%d", &number);

        if (number < 0)
        {
            printf("Negative number skipped.\\n");
            continue;
        }

        printf("Number = %d\\n", number);
    }

    return 0;
}
\`\`\`

When a negative number is entered, the remaining statements in that iteration are skipped.

The loop then asks for the next value.

---

# 11. continue in Nested Loops

When continue is used inside nested loops, it affects the nearest enclosing loop.

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

The continue affects only the inner loop.

The outer loop continues normally.

---

# 12. continue Does Not Terminate the Loop

Consider:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 5; i++)
    {
        if (i == 3)
        {
            continue;
        }

        printf("%d ", i);
    }

    printf("\\nProgram continues.\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 4 5
Program continues.
\`\`\`

The loop does not terminate when continue is executed.

Only the current iteration is skipped.

---

# 13. continue vs break

The difference between continue and break is very important.

### continue

Skips the current iteration.

\`\`\`c
if (condition)
{
    continue;
}
\`\`\`

The loop continues with its next iteration.

### break

Terminates the nearest enclosing loop.

\`\`\`c
if (condition)
{
    break;
}
\`\`\`

The loop ends immediately.

Remember:

\`\`\`text
continue
   ↓
Skip current iteration
   ↓
Next iteration

break
   ↓
Exit loop
\`\`\`

---

# 14. Practical Example — Print Positive Numbers

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[] = {10, -2, 15, -5, 20};
    int i;

    for (i = 0; i < 5; i++)
    {
        if (numbers[i] <= 0)
        {
            continue;
        }

        printf("%d ", numbers[i]);
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
10 15 20
\`\`\`

---

# 15. Practical Example — Skip a Specific Number

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 10; i++)
    {
        if (i == 7)
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
1 2 3 4 5 6 8 9 10
\`\`\`

---

# 16. Practical Example — Skip Multiples of 3

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 15; i++)
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

# 17. Important Point About while Loops

When using continue in a while loop, make sure the loop-control variable is updated appropriately.

For example:

\`\`\`c
int i = 0;

while (i < 5)
{
    i++;

    if (i == 3)
    {
        continue;
    }

    printf("%d ", i);
}
\`\`\`

The increment occurs before continue.

If the loop-control variable is never updated because of a continue path, the loop can become infinite.

---

# 18. Example of an Infinite Loop Problem

Be careful with code such as:

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

When i becomes 3, continue executes.

The statement:

\`\`\`c
i++;
\`\`\`

is skipped.

Therefore, i remains 3 and the loop does not progress.

The general lesson is:

Make sure the loop-control variable can still change when continue is executed.

---

# 19. continue With Conditional Processing

continue is useful when only certain values should be processed.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 20; i++)
    {
        if (i % 5 != 0)
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
5 10 15 20
\`\`\`

Only multiples of 5 are processed.

---

# 20. Practical Example — Skip Invalid Values

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[] = {5, 10, 0, 15, 20};
    int i;

    for (i = 0; i < 5; i++)
    {
        if (numbers[i] == 0)
        {
            continue;
        }

        printf("Value = %d\\n", numbers[i]);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Value = 5
Value = 10
Value = 15
Value = 20
\`\`\`

The zero value is ignored.

---

# Common Beginner Mistakes

## Mistake 1 — Thinking continue Terminates the Loop

Incorrect understanding:

\`\`\`text
continue → stop loop
\`\`\`

Correct:

\`\`\`text
continue → skip current iteration
\`\`\`

---

## Mistake 2 — Confusing continue With break

Remember:

\`\`\`text
break
→ exits the loop

continue
→ skips current iteration
\`\`\`

---

## Mistake 3 — Creating an Infinite while Loop

Always make sure the loop-control variable is updated correctly.

---

## Mistake 4 — Forgetting That continue Affects the Nearest Loop

In nested loops, continue affects the nearest enclosing loop.

---

# Lesson Summary

In this lesson, you learned:

- continue skips the remaining statements of the current iteration.
- continue does not terminate the loop.
- continue can be used with for loops.
- continue can be used with while loops.
- continue can be used with do-while loops.
- continue is useful for skipping unwanted values.
- continue is useful when processing arrays.
- continue inside a nested loop affects the nearest enclosing loop.
- Special care is needed when using continue inside while loops.
- break and continue have different purposes.

The key idea is:

\`\`\`text
Loop iteration
      ↓
   condition
      ↓
   continue
      ↓
Skip remaining statements
      ↓
Next iteration
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

✓ Lesson 12 — break

✓ Lesson 13 — continue

→ Lesson 14 — goto

  Lesson 15 — Loop Control

Lesson 13 Complete

Next: Lesson 14 — goto.

`,
};

export default lesson13;

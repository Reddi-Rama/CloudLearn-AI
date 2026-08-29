const lesson15 = {
  id: "lesson15",

  title: "Loop Control",

  content: `

# Lesson 15: Loop Control

## Introduction

Loop control refers to the techniques used to control how loops execute.

In C, loops can be controlled using statements such as:

\`\`\`text
break
continue
\`\`\`

The loop condition also determines whether a loop continues or terminates.

Understanding loop control is important for writing efficient and predictable programs.

---

# 1. What Is Loop Control?

Loop control determines:

- When a loop starts
- When a loop continues
- When an iteration is skipped
- When a loop terminates

For example:

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    printf("%d ", i);
}
\`\`\`

The loop continues while:

\`\`\`text
i <= 5
\`\`\`

When the condition becomes false, the loop terminates.

---

# 2. Loop Condition

Every conditional loop has a condition that controls whether it continues.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 5)
    {
        printf("%d ", i);
        i++;
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 3 4 5
\`\`\`

The loop continues while:

\`\`\`text
i <= 5
\`\`\`

When i becomes 6, the condition becomes false.

---

# 3. Loop Control Using for

A for loop provides three important parts:

\`\`\`c
for (initialization; condition; update)
{
    statements;
}
\`\`\`

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 5; i++)
    {
        printf("%d ", i);
    }

    printf("\\n");

    return 0;
}
\`\`\`

The parts are:

\`\`\`text
Initialization
      ↓
Condition
      ↓
Loop body
      ↓
Update
      ↓
Condition
      ↓
...
\`\`\`

---

# 4. Loop Control Using while

A while loop checks its condition before each iteration.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 5)
    {
        printf("%d ", i);
        i++;
    }

    printf("\\n");

    return 0;
}
\`\`\`

The condition is checked before the body executes.

Therefore, a while loop may execute zero times if its condition is initially false.

---

# 5. Loop Control Using do-while

A do-while loop executes its body before checking the condition.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    do
    {
        printf("%d ", i);
        i++;
    }
    while (i <= 5);

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 3 4 5
\`\`\`

The body executes at least once.

---

# 6. break Statement

The break statement immediately terminates the nearest enclosing loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 10; i++)
    {
        if (i == 6)
        {
            break;
        }

        printf("%d ", i);
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 3 4 5
\`\`\`

When i becomes 6, break terminates the loop.

---

# 7. continue Statement

The continue statement skips the remaining statements of the current iteration.

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

Only the current iteration is skipped.

The loop continues with the next iteration.

---

# 8. break vs continue

These statements have different purposes.

### break

Terminates the loop.

\`\`\`text
break
 ↓
Exit loop
\`\`\`

### continue

Skips the current iteration.

\`\`\`text
continue
 ↓
Skip remaining statements
 ↓
Next iteration
\`\`\`

Example:

\`\`\`c
for (int i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        continue;
    }

    if (i == 8)
    {
        break;
    }

    printf("%d ", i);
}
\`\`\`

Output:

\`\`\`text
1 2 3 4 6 7
\`\`\`

The value 5 is skipped.

The loop terminates when i becomes 8.

---

# 9. Controlling a Loop With a Counter

A counter variable is commonly used to control the number of iterations.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int count = 1;

    while (count <= 5)
    {
        printf("Iteration %d\\n", count);
        count++;
    }

    return 0;
}
\`\`\`

The counter changes on every iteration.

This ensures that the loop eventually reaches its termination condition.

---

# 10. Avoiding Infinite Loops

An infinite loop occurs when the termination condition never becomes false.

For example:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
}
\`\`\`

The value of i never changes.

Therefore:

\`\`\`text
i <= 5
\`\`\`

remains true.

The loop continues indefinitely.

A corrected version is:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
    i++;
}
\`\`\`

---

# 11. Using a Flag to Control a Loop

A flag variable can be used to control when a loop should stop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int running = 1;
    int count = 1;

    while (running)
    {
        printf("%d ", count);

        count++;

        if (count > 5)
        {
            running = 0;
        }
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 3 4 5
\`\`\`

When running becomes 0, the loop condition becomes false.

---

# 12. Using break With a Flag

A loop can also be terminated using break.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; ; i++)
    {
        if (i > 5)
        {
            break;
        }

        printf("%d ", i);
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 3 4 5
\`\`\`

The for loop has no condition in its header, so it would otherwise continue indefinitely.

The break statement provides the termination condition.

---

# 13. Loop Control With User Input

Loop control is often used when repeatedly processing user input.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    while (1)
    {
        printf("Enter a positive number, or 0 to stop: ");
        scanf("%d", &number);

        if (number == 0)
        {
            break;
        }

        if (number < 0)
        {
            continue;
        }

        printf("Accepted: %d\\n", number);
    }

    return 0;
}
\`\`\`

Here:

\`\`\`text
0
↓
break
↓
Exit loop

Negative number
↓
continue
↓
Skip current iteration

Positive number
↓
Process value
\`\`\`

---

# 14. Loop Control With Nested Loops

When loops are nested, break and continue affect the nearest enclosing loop.

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

The break terminates only the inner loop.

The outer loop continues.

---

# 15. Loop Control With Conditions

Conditions can be used to decide when an iteration should be processed.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 20; i++)
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
1 3 5 7 9 11 13 15 17 19
\`\`\`

The continue statement skips even numbers.

---

# 16. Loop Control With a Search

break is commonly used when searching for a value.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[] = {10, 20, 30, 40, 50};
    int target = 30;
    int found = 0;

    for (int i = 0; i < 5; i++)
    {
        if (numbers[i] == target)
        {
            found = 1;
            break;
        }
    }

    if (found)
    {
        printf("Value found.\\n");
    }
    else
    {
        printf("Value not found.\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Value found.
\`\`\`

Once the target is found, there is no need to continue searching.

---

# 17. Loop Control With Validation

Loops can repeatedly request valid input.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age;

    while (1)
    {
        printf("Enter an age between 1 and 100: ");
        scanf("%d", &age);

        if (age >= 1 && age <= 100)
        {
            break;
        }

        printf("Invalid age. Try again.\\n");
    }

    printf("Accepted age = %d\\n", age);

    return 0;
}
\`\`\`

The loop continues until a valid value is entered.

---

# 18. Loop Control and Nested Loops

For nested loops, a break or continue statement affects the nearest loop containing it.

Example:

\`\`\`c
for (int i = 1; i <= 3; i++)
{
    for (int j = 1; j <= 3; j++)
    {
        if (j == 2)
        {
            continue;
        }

        printf("(%d, %d) ", i, j);
    }
}
\`\`\`

Output:

\`\`\`text
(1, 1) (1, 3) (2, 1) (2, 3) (3, 1) (3, 3)
\`\`\`

The continue affects the inner loop.

---

# 19. Choosing the Appropriate Loop

Different loops are useful in different situations.

### for loop

Useful when the number of iterations is known or controlled by a counter.

Example:

\`\`\`c
for (int i = 1; i <= 10; i++)
{
    printf("%d ", i);
}
\`\`\`

### while loop

Useful when repetition depends primarily on a condition.

Example:

\`\`\`c
while (condition)
{
    statements;
}
\`\`\`

### do-while loop

Useful when the body must execute at least once.

Example:

\`\`\`c
do
{
    statements;
}
while (condition);
\`\`\`

---

# 20. Practical Example — Number Processing

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 20; i++)
    {
        if (i % 2 == 0)
        {
            continue;
        }

        if (i > 15)
        {
            break;
        }

        printf("%d ", i);
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 3 5 7 9 11 13 15
\`\`\`

The program:

- Skips even numbers.
- Stops when the value becomes greater than 15.
- Processes only the required values.

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting to Update the Loop Variable

Incorrect:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d ", i);
}
\`\`\`

The loop variable never changes.

Correct:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d ", i);
    i++;
}
\`\`\`

---

## Mistake 2 — Confusing break and continue

Remember:

\`\`\`text
break
→ terminate loop

continue
→ skip current iteration
\`\`\`

---

## Mistake 3 — Forgetting Nested Loop Behavior

A break or continue normally affects the nearest enclosing loop.

---

## Mistake 4 — Creating an Unintended Infinite Loop

Always check whether the loop can eventually reach its terminating condition.

---

# Lesson Summary

In this lesson, you learned:

- Loop control determines how loops execute.
- Loop conditions determine whether iterations continue.
- Counter variables can control the number of iterations.
- break terminates the nearest enclosing loop.
- continue skips the remaining part of the current iteration.
- Flags can be used to control loops.
- User input can be used to control repetition.
- break is useful when searching for a value.
- continue is useful when skipping unwanted values.
- Nested loops require careful understanding of which loop a control statement affects.
- Infinite loops should be avoided unless intentionally created.

The key idea is:

\`\`\`text
Loop
 ↓
Condition
 ↓
Process
 ↓
Control statement
 ↓
Continue / Skip / Exit
\`\`\`

A useful rule to remember:

\`\`\`text
break
   ↓
Stop the loop

continue
   ↓
Skip this iteration

loop condition
   ↓
Decide whether another iteration occurs
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

✓ Lesson 14 — goto

✓ Lesson 15 — Loop Control

Module 3 Complete

Next: Module 4 — Functions.

`,
};

export default lesson15;
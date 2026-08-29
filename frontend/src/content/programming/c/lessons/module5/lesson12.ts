const lesson12 = {
  id: "lesson12",

  title: "break Statement",

  content: `

# Lesson 12: break Statement

## Introduction

The break statement is used to **immediately terminate the nearest enclosing loop or switch statement**.

When break is executed, program control moves to the statement immediately following that loop or switch.

The basic syntax is:

\`\`\`c
break;
\`\`\`

The break statement is commonly used with:

\`\`\`text
for loops
while loops
do-while loops
switch statements
\`\`\`

---

# 1. What Is the break Statement?

The break statement stops the execution of the nearest enclosing loop or switch.

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
            break;
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
\`\`\`

When i becomes 5, break is executed and the loop terminates.

---

# 2. Syntax of break

The syntax is simple:

\`\`\`c
break;
\`\`\`

It does not require a condition by itself.

Usually, it is placed inside a conditional statement:

\`\`\`c
if (condition)
{
    break;
}
\`\`\`

---

# 3. break in a for Loop

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

The loop stops when i becomes 6.

---

# 4. break in a while Loop

The break statement can also terminate a while loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 10)
    {
        if (i == 6)
        {
            break;
        }

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

---

# 5. break in a do-while Loop

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    do
    {
        if (i == 5)
        {
            break;
        }

        printf("%d ", i);
        i++;
    }
    while (i <= 10);

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 3 4
\`\`\`

When i becomes 5, break terminates the loop immediately.

---

# 6. break With User Input

break can be useful when input determines when a loop should stop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    while (1)
    {
        printf("Enter a number (0 to stop): ");
        scanf("%d", &number);

        if (number == 0)
        {
            break;
        }

        printf("You entered %d\\n", number);
    }

    return 0;
}
\`\`\`

The loop continues until the user enters 0.

---

# 7. break in an Infinite Loop

An infinite loop can be intentionally terminated using break.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (1)
    {
        printf("%d\\n", i);

        if (i == 5)
        {
            break;
        }

        i++;
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
5
\`\`\`

The condition of the while loop is always true, but break provides a controlled exit.

---

# 8. break in a switch Statement

The break statement is also commonly used in switch statements.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice = 2;

    switch (choice)
    {
        case 1:
            printf("One\\n");
            break;

        case 2:
            printf("Two\\n");
            break;

        case 3:
            printf("Three\\n");
            break;

        default:
            printf("Invalid choice\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Two
\`\`\`

Here, break prevents execution from continuing into the following cases.

---

# 9. break and switch Fall-Through

Consider:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice = 1;

    switch (choice)
    {
        case 1:
            printf("One\\n");

        case 2:
            printf("Two\\n");

        case 3:
            printf("Three\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
One
Two
Three
\`\`\`

Because there are no break statements, execution continues into the following cases.

This behavior is called **fall-through**.

Using break can prevent this when fall-through is not intended.

---

# 10. break in Nested Loops

When break is used inside nested loops, it terminates the **nearest enclosing loop**.

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

# 11. Breaking the Outer Loop

A single break cannot directly exit multiple nested loops.

For example:

\`\`\`c
for (i = 1; i <= 3; i++)
{
    for (j = 1; j <= 3; j++)
    {
        if (condition)
        {
            break;
        }
    }
}
\`\`\`

The break exits only the inner loop.

The outer loop continues normally.

If multiple levels need to be exited, other control techniques can be considered, such as a flag or a carefully designed function return.

---

# 12. break With a Search

break is useful when searching for a value.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[] = {10, 20, 30, 40, 50};
    int target = 30;
    int i;

    for (i = 0; i < 5; i++)
    {
        if (numbers[i] == target)
        {
            printf("Found at index %d\\n", i);
            break;
        }
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Found at index 2
\`\`\`

Once the target is found, there is no need to continue searching.

---

# 13. break and Input Validation

break can be used to stop input processing when a special value is entered.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    while (1)
    {
        printf("Enter a positive number (-1 to stop): ");
        scanf("%d", &number);

        if (number == -1)
        {
            break;
        }

        if (number > 0)
        {
            printf("Valid number: %d\\n", number);
        }
    }

    return 0;
}
\`\`\`

The special value -1 acts as a termination value.

---

# 14. break and Menu Programs

break is useful in menu-driven programs.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice;

    while (1)
    {
        printf("\\n1. Add\\n");
        printf("2. Display\\n");
        printf("3. Exit\\n");
        printf("Enter choice: ");

        scanf("%d", &choice);

        if (choice == 3)
        {
            break;
        }

        if (choice == 1)
        {
            printf("Add selected\\n");
        }
        else if (choice == 2)
        {
            printf("Display selected\\n");
        }
        else
        {
            printf("Invalid choice\\n");
        }
    }

    return 0;
}
\`\`\`

The loop ends when the user selects option 3.

---

# 15. break Does Not Stop the Entire Program

The break statement terminates the nearest enclosing loop or switch.

It does not automatically terminate the entire program.

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
            break;
        }

        printf("%d\\n", i);
    }

    printf("Program continues.\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1
2
Program continues.
\`\`\`

The loop ends, but the program continues executing subsequent statements.

---

# 16. break vs continue

These statements have different purposes.

### break

Terminates the nearest enclosing loop or switch.

Example:

\`\`\`c
if (condition)
{
    break;
}
\`\`\`

### continue

Skips the remaining statements in the current loop iteration and proceeds to the next iteration.

Example:

\`\`\`c
if (condition)
{
    continue;
}
\`\`\`

Remember:

\`\`\`text
break
 ↓
Exit loop

continue
 ↓
Skip current iteration
 ↓
Next iteration
\`\`\`

---

# 17. Practical Example — Find First Even Number

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[] = {11, 15, 17, 20, 25};
    int i;

    for (i = 0; i < 5; i++)
    {
        if (numbers[i] % 2 == 0)
        {
            printf("First even number = %d\\n", numbers[i]);
            break;
        }
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
First even number = 20
\`\`\`

Once the first even number is found, the loop terminates.

---

# 18. Practical Example — Stop at Negative Number

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[] = {10, 20, 30, -5, 40};
    int i;

    for (i = 0; i < 5; i++)
    {
        if (numbers[i] < 0)
        {
            break;
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

The loop stops when it encounters the negative value.

---

# 19. Practical Example — Find a Number

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[] = {5, 10, 15, 20, 25};
    int target = 15;
    int found = 0;
    int i;

    for (i = 0; i < 5; i++)
    {
        if (numbers[i] == target)
        {
            found = 1;
            break;
        }
    }

    if (found)
    {
        printf("Number found\\n");
    }
    else
    {
        printf("Number not found\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Number found
\`\`\`

---

# 20. Important Rule

The most important rule to remember is:

**break exits only the nearest enclosing loop or switch.**

For example:

\`\`\`c
for (...)
{
    for (...)
    {
        break;
    }
}
\`\`\`

The break exits the inner loop.

It does not automatically exit the outer loop.

---

# Common Beginner Mistakes

## Mistake 1 — Using break Outside a Loop or switch

A break statement must appear inside an appropriate loop or switch context.

---

## Mistake 2 — Thinking break Skips One Iteration

break does not skip one iteration.

It terminates the nearest enclosing loop or switch.

Use continue when the intention is to skip the current loop iteration.

---

## Mistake 3 — Thinking break Exits All Nested Loops

A break exits only the nearest enclosing loop.

Example:

\`\`\`c
for (...)
{
    for (...)
    {
        break;
    }
}
\`\`\`

Only the inner loop is terminated.

---

## Mistake 4 — Forgetting break in switch

Without break, execution may continue into subsequent cases.

Use break when you want to stop after the matching case.

---

# Lesson Summary

In this lesson, you learned:

- break immediately terminates the nearest enclosing loop or switch.
- break can be used with for loops.
- break can be used with while loops.
- break can be used with do-while loops.
- break is commonly used in switch statements.
- break can terminate an infinite loop when a suitable condition is reached.
- break inside a nested loop exits only the nearest enclosing loop.
- break is useful when searching for a value.
- break is useful in input validation and menu-driven programs.
- break does not terminate the entire program.

The key idea is:

\`\`\`text
Loop
 ↓
Condition becomes true
 ↓
break;
 ↓
Exit nearest loop
 ↓
Continue with next statement
\`\`\`

Remember:

\`\`\`text
break
   ↓
Exit loop

continue
   ↓
Skip current iteration
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

→ Lesson 13 — continue

  Lesson 14 — goto
  Lesson 15 — Loop Control

Lesson 12 Complete

Next: Lesson 13 — continue.

`,
};

export default lesson12;
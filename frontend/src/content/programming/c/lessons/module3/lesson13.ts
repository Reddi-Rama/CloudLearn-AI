const lesson13 = {
  id: "lesson13",

  title: "break Statement",

  content: `

# Lesson 13: break Statement

## Introduction

The break statement is used to **immediately terminate** a loop or switch statement.

When the program encounters break, execution moves outside the nearest enclosing loop or switch.

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

For example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 10; i++)
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

When i becomes 5:

\`\`\`text
i == 5
 ↓
break
 ↓
loop terminates
\`\`\`

---

# 2. Basic Syntax

The syntax is simply:

\`\`\`c
break;
\`\`\`

It is normally placed inside a loop or switch.

Example:

\`\`\`c
while (condition)
{
    if (someCondition)
    {
        break;
    }
}
\`\`\`

When the break statement executes, the loop ends immediately.

---

# 3. break in a for Loop

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 10; i++)
    {
        if (i == 6)
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
5
\`\`\`

The loop would normally continue to 10, but break stops it when i reaches 6.

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
        if (i == 5)
        {
            break;
        }

        printf("%d\\n", i);
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
\`\`\`

When i becomes 5, break terminates the loop.

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

        printf("%d\\n", i);
        i++;
    }
    while (i <= 10);

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

The break statement terminates the do-while loop immediately.

---

# 6. break With a Condition

A common use of break is to stop a loop when a particular condition becomes true.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    for (int i = 1; i <= 10; i++)
    {
        printf("Enter number: ");
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

Entering 0 terminates the loop.

---

# 7. Searching With break

The break statement is useful when searching for a value.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int target = 7;

    for (int i = 1; i <= 10; i++)
    {
        if (i == target)
        {
            printf("Found %d\\n", target);
            break;
        }
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Found 7
\`\`\`

Once the target is found, there is no need to continue searching.

---

# 8. Searching an Array

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[] = {4, 8, 12, 7, 15};
    int target = 7;
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
        printf("Value found\\n");
    }
    else
    {
        printf("Value not found\\n");
    }

    return 0;
}
\`\`\`

When the target is found, break avoids unnecessary iterations.

---

# 9. break in switch

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

Here, break prevents execution from continuing into the following case.

---

# 10. break Prevents Fall-Through in switch

Consider:

\`\`\`c
switch (choice)
{
    case 1:
        printf("One\\n");

    case 2:
        printf("Two\\n");

    case 3:
        printf("Three\\n");
}
\`\`\`

If choice is 1, execution can continue into case 2 and case 3 because there are no break statements.

This is called **fall-through**.

Adding break:

\`\`\`c
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
}
\`\`\`

causes execution to leave the switch after the matching case.

---

# 11. break in Nested Loops

A break statement terminates only the nearest enclosing loop.

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
i = 2, j = 1
i = 2, j = 2
i = 3, j = 1
i = 3, j = 2
\`\`\`

The break terminates the inner loop.

The outer loop continues.

---

# 12. break Does Not Terminate Every Nested Loop

Consider:

\`\`\`c
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

    printf("Outer loop continues\\n");
}
\`\`\`

The outer loop continues after the inner loop terminates.

Therefore:

\`\`\`text
break
 ↓
nearest enclosing loop
 ↓
inner loop ends
 ↓
outer loop continues
\`\`\`

---

# 13. break in an Infinite Loop

A break statement can be used to exit an intentionally infinite loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    for (;;)
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

The loop has no condition in its header, so break provides the termination condition.

---

# 14. Menu Program With break

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice;

    while (1)
    {
        printf("\\n1. Start\\n");
        printf("2. Settings\\n");
        printf("3. Exit\\n");
        printf("Enter choice: ");

        scanf("%d", &choice);

        if (choice == 1)
        {
            printf("Starting...\\n");
        }
        else if (choice == 2)
        {
            printf("Settings selected\\n");
        }
        else if (choice == 3)
        {
            break;
        }
        else
        {
            printf("Invalid choice\\n");
        }
    }

    printf("Program ended\\n");

    return 0;
}
\`\`\`

When the user selects 3, break exits the loop.

---

# 15. break and Loop Update

When break executes inside a for loop, the normal update expression is not performed for that iteration.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 10; i++)
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

When i is 5, break executes immediately.

The loop does not continue to its update expression and then check the condition.

Instead, control moves outside the loop.

---

# 16. break vs continue

These statements have different purposes.

break:

\`\`\`text
Terminate the loop
      ↓
Exit loop
\`\`\`

continue:

\`\`\`text
Skip current iteration
      ↓
Continue with next iteration
\`\`\`

Example:

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

With break:

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

---

# 17. Practical Example — Stop at Negative Number

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    for (int i = 1; i <= 10; i++)
    {
        printf("Enter number: ");
        scanf("%d", &number);

        if (number < 0)
        {
            printf("Negative number encountered\\n");
            break;
        }

        printf("Accepted: %d\\n", number);
    }

    return 0;
}
\`\`\`

The loop stops as soon as a negative number is entered.

---

# 18. Practical Example — Find First Even Number

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[] = {9, 7, 5, 8, 11, 12};

    for (int i = 0; i < 6; i++)
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
First even number = 8
\`\`\`

Once the first even number is found, the loop terminates.

---

# 19. Practical Example — Stop When Sum Reaches a Limit

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int sum = 0;

    for (int i = 1; i <= 10; i++)
    {
        sum += i;

        if (sum >= 15)
        {
            break;
        }
    }

    printf("Sum = %d\\n", sum);

    return 0;
}
\`\`\`

The loop stops as soon as the sum reaches or exceeds 15.

---

# 20. Practical Example — Prime Number Check

A break statement can stop a search when a divisor is found.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 29;
    int isPrime = 1;

    if (number < 2)
    {
        isPrime = 0;
    }
    else
    {
        for (int i = 2; i * i <= number; i++)
        {
            if (number % i == 0)
            {
                isPrime = 0;
                break;
            }
        }
    }

    if (isPrime)
    {
        printf("%d is prime\\n", number);
    }
    else
    {
        printf("%d is not prime\\n", number);
    }

    return 0;
}
\`\`\`

If a divisor is found, there is no need to continue checking.

---

# 21. break With Nested switch and Loop

A break inside a switch terminates the switch, not necessarily the surrounding loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 3; i++)
    {
        switch (i)
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
        }

        printf("Loop continues\\n");
    }

    return 0;
}
\`\`\`

The break statements terminate the switch cases.

The for loop continues.

---

# 22. Important Rule

The break statement always affects the **nearest enclosing loop or switch**.

For example:

\`\`\`text
outer loop
    ↓
    switch
        ↓
        break
\`\`\`

The break exits the switch.

Similarly:

\`\`\`text
outer loop
    ↓
    inner loop
        ↓
        break
\`\`\`

The break exits the inner loop.

---

# Common Beginner Mistakes

## Mistake 1 — Thinking break Skips Only One Iteration

break does not skip one iteration.

It terminates the loop completely.

Use continue when you only want to skip the current iteration.

---

## Mistake 2 — Thinking break Exits All Nested Loops

A normal break exits only the nearest enclosing loop or switch.

---

## Mistake 3 — Forgetting break in switch

Without break, execution can fall through into subsequent cases.

---

## Mistake 4 — Using break Without Understanding the Control Flow

Before using break, identify exactly which loop or switch it will terminate.

---

# Lesson Summary

In this lesson, you learned:

- break immediately terminates the nearest enclosing loop or switch.
- break can be used with for loops.
- break can be used with while loops.
- break can be used with do-while loops.
- break is commonly used in switch statements.
- break can stop a search once the required value is found.
- In nested loops, break affects only the nearest enclosing loop.
- break can terminate an infinite loop.
- break is different from continue.
- break in switch prevents unwanted fall-through.

The key idea is:

\`\`\`text
Loop
 ↓
Condition becomes true
 ↓
break;
 ↓
Exit nearest loop
\`\`\`

Remember:

\`\`\`text
break
↓
Terminate loop

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

→ Lesson 13 — break Statement

  Lesson 14 — continue Statement

  Lesson 15 — Mini Project — Menu-Driven Program

Lesson 13 Complete

Next: Lesson 14 — continue Statement.

`,
};

export default lesson13;
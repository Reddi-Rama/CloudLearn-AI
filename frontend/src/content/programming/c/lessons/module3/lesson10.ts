const lesson10 = {
  id: "lesson10",

  title: "do-while Loop",

  content: `

# Lesson 10: do-while Loop

## Introduction

The do-while loop is a looping statement used to execute a block of code repeatedly.

It is different from the while loop because the condition is checked **after** the loop body executes.

Therefore, the body of a do-while loop always executes at least once.

The general syntax is:

\`\`\`c
do
{
    statements;
}
while (condition);
\`\`\`

Notice the semicolon after the while condition.

---

# 1. What Is a do-while Loop?

A do-while loop executes the loop body first and checks the condition afterward.

Basic structure:

\`\`\`c
do
{
    // statements
}
while (condition);
\`\`\`

The execution flow is:

\`\`\`text
Execute body
     ↓
Check condition
     ↓
True?
 /   \\
Yes   No
 ↓     ↓
Repeat Exit
\`\`\`

Because the body executes before the condition is checked, the loop always executes at least once.

---

# 2. Simple do-while Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    do
    {
        printf("%d\\n", i);
        i++;
    }
    while (i <= 5);

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

---

# 3. How the do-while Loop Works

Consider:

\`\`\`c
int i = 1;

do
{
    printf("%d\\n", i);
    i++;
}
while (i <= 5);
\`\`\`

Execution:

\`\`\`text
i = 1
 ↓
Execute body
 ↓
Print 1
 ↓
i becomes 2
 ↓
2 <= 5 → true
 ↓
Execute body
 ↓
Print 2
 ↓
...
 ↓
Print 5
 ↓
i becomes 6
 ↓
6 <= 5 → false
 ↓
Loop ends
\`\`\`

---

# 4. Body Executes At Least Once

This is the most important feature of the do-while loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 10;

    do
    {
        printf("Value = %d\\n", i);
        i++;
    }
    while (i < 5);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Value = 10
\`\`\`

Even though:

\`\`\`text
10 < 5
↓
false
\`\`\`

the body executes once before the condition is checked.

---

# 5. do-while vs while

Consider a while loop:

\`\`\`c
int i = 10;

while (i < 5)
{
    printf("%d\\n", i);
}
\`\`\`

The condition is false initially, so the body executes zero times.

Now consider:

\`\`\`c
int i = 10;

do
{
    printf("%d\\n", i);
}
while (i < 5);
\`\`\`

The body executes once before the condition is checked.

Therefore:

\`\`\`text
while
↓
condition first
↓
body may execute zero times

do-while
↓
body first
↓
condition afterward
↓
body executes at least once
\`\`\`

---

# 6. Counting With do-while

A do-while loop can count upward.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    do
    {
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
5
6
7
8
9
10
\`\`\`

---

# 7. Counting Down

The loop can also count downward.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 5;

    do
    {
        printf("%d\\n", i);
        i--;
    }
    while (i >= 1);

    return 0;
}
\`\`\`

Output:

\`\`\`text
5
4
3
2
1
\`\`\`

---

# 8. Printing Even Numbers

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 2;

    do
    {
        printf("%d\\n", i);
        i += 2;
    }
    while (i <= 10);

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

# 9. Sum of Numbers

A do-while loop can be used to calculate a sum.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;
    int sum = 0;

    do
    {
        sum += i;
        i++;
    }
    while (i <= 5);

    printf("Sum = %d\\n", sum);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Sum = 15
\`\`\`

---

# 10. Taking User Input

The do-while loop is particularly useful when an action must happen at least once.

For example, asking the user for input:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    do
    {
        printf("Enter a positive number: ");
        scanf("%d", &number);
    }
    while (number <= 0);

    printf("You entered %d\\n", number);

    return 0;
}
\`\`\`

The user is asked at least once.

The loop continues while the entered number is not positive.

---

# 11. Menu-Driven Programs

One of the most common uses of do-while is a menu that should be displayed at least once.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice;

    do
    {
        printf("\\n1. Add\\n");
        printf("2. Subtract\\n");
        printf("3. Exit\\n");

        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                printf("Addition selected\\n");
                break;

            case 2:
                printf("Subtraction selected\\n");
                break;

            case 3:
                printf("Exiting...\\n");
                break;

            default:
                printf("Invalid choice\\n");
        }

    }
    while (choice != 3);

    return 0;
}
\`\`\`

The menu appears at least once and continues until the user selects 3.

---

# 12. do-while With break

The break statement can terminate the loop immediately.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    do
    {
        if (i == 4)
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
\`\`\`

When i becomes 4, break exits the loop.

---

# 13. do-while With continue

The continue statement skips the remaining part of the current iteration.

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

The value 3 is skipped.

The update of i occurs before continue, so the loop can still progress.

---

# 14. Nested do-while Loops

A do-while loop can contain another do-while loop.

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

# 15. Factorial Using do-while

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int n = 5;
    int i = 1;
    int factorial = 1;

    do
    {
        factorial *= i;
        i++;
    }
    while (i <= n);

    printf("Factorial = %d\\n", factorial);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Factorial = 120
\`\`\`

---

# 16. Reverse a Number

A do-while loop can process the digits of a number.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 12345;
    int reverse = 0;

    do
    {
        int digit = number % 10;

        reverse = reverse * 10 + digit;

        number /= 10;
    }
    while (number > 0);

    printf("Reverse = %d\\n", reverse);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Reverse = 54321
\`\`\`

---

# 17. do-while With Logical Conditions

Multiple conditions can be used.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    do
    {
        printf("Enter a number between 1 and 100: ");
        scanf("%d", &number);
    }
    while (number < 1 || number > 100);

    printf("Valid number = %d\\n", number);

    return 0;
}
\`\`\`

The loop continues while the number is outside the valid range.

---

# 18. Infinite do-while Loop

A do-while loop can also be intentionally infinite.

Example:

\`\`\`c
do
{
    printf("Running\\n");
}
while (1);
\`\`\`

Since 1 is always true, the loop continues indefinitely.

A break statement can be used to terminate such a loop.

---

# 19. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;
    int sum = 0;

    do
    {
        printf("Enter a positive number (0 to stop): ");
        scanf("%d", &number);

        if (number > 0)
        {
            sum += number;
        }
    }
    while (number != 0);

    printf("Total = %d\\n", sum);

    return 0;
}
\`\`\`

The program continues accepting positive numbers until the user enters 0.

---

# 20. When to Use do-while

A do-while loop is useful when the operation must happen at least once.

Common examples include:

- Menu-driven programs
- User input validation
- Repeated prompts
- Programs that must display something before checking whether to continue
- Processing where the first iteration is guaranteed

For example:

\`\`\`c
do
{
    displayMenu();
    scanf("%d", &choice);
}
while (choice != 3);
\`\`\`

The menu must be displayed at least once.

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting the Semicolon

A do-while loop requires a semicolon after the condition.

Correct:

\`\`\`c
do
{
    printf("Hello\\n");
}
while (condition);
\`\`\`

Do not forget the final semicolon.

---

## Mistake 2 — Thinking the Condition Is Checked First

In a do-while loop:

\`\`\`c
do
{
    statements;
}
while (condition);
\`\`\`

the body executes first.

---

## Mistake 3 — Creating an Infinite Loop

Make sure the variables controlling the condition are updated appropriately.

---

## Mistake 4 — Forgetting to Update Before continue

If continue is used, make sure the loop can still make progress toward termination.

---

# Lesson Summary

In this lesson, you learned:

- The do-while loop executes its body before checking the condition.
- The body executes at least once.
- The condition is checked after every iteration.
- A do-while loop is useful for menus and input validation.
- break can terminate the loop.
- continue can skip the current iteration.
- do-while loops can be nested.
- The loop can count upward or downward.
- The do-while statement requires a semicolon after the while condition.

The basic structure is:

\`\`\`text
Execute body
     ↓
Check condition
     ↓
True?
 /   \\
Yes   No
 ↓     ↓
Repeat Exit
\`\`\`

The most important difference is:

\`\`\`text
while
↓
condition first
↓
body may execute zero times

do-while
↓
body first
↓
condition afterward
↓
body executes at least once
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

→ Lesson 10 — do-while Loop

  Lesson 11 — for Loop

  Lesson 12 — Nested Loops

  Lesson 13 — break Statement

  Lesson 14 — continue Statement

  Lesson 15 — Mini Project — Menu-Driven Program

Lesson 10 Complete

Next: Lesson 11 — for Loop.

`,
};

export default lesson10;
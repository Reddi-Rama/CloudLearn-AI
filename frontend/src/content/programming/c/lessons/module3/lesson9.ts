const lesson9 = {
  id: "lesson9",

  title: "while Loop",

  content: `

# Lesson 9: while Loop

## Introduction

Loops are used when a program needs to execute a block of code repeatedly.

For example, if we want to print numbers from 1 to 5, we could write five separate printf statements.

But that would be repetitive.

A loop allows us to repeat the same block of code efficiently.

The while loop is one of the basic looping statements in C.

Its general form is:

\`\`\`c
while (condition)
{
    statements;
}
\`\`\`

The statements inside the loop are executed repeatedly while the condition is true.

---

# 1. What Is a while Loop?

A while loop repeatedly executes a block of statements as long as its condition remains true.

Basic structure:

\`\`\`c
while (condition)
{
    // statements
}
\`\`\`

The condition is checked before every iteration.

Therefore, the while loop is called an **entry-controlled loop**.

---

# 2. Simple while Loop

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 5)
    {
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
5
\`\`\`

---

# 3. How the while Loop Works

Consider:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
    i++;
}
\`\`\`

Execution:

\`\`\`text
i = 1
 ↓
1 <= 5 → true
 ↓
print 1
 ↓
i becomes 2
 ↓
2 <= 5 → true
 ↓
print 2
 ↓
i becomes 3
 ↓
...
 ↓
5 <= 5 → true
 ↓
print 5
 ↓
i becomes 6
 ↓
6 <= 5 → false
 ↓
Loop ends
\`\`\`

---

# 4. Condition Is Checked First

The while loop checks its condition before executing the body.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 10;

    while (i < 5)
    {
        printf("%d\\n", i);
        i++;
    }

    return 0;
}
\`\`\`

The condition:

\`\`\`text
10 < 5
↓
false
\`\`\`

Therefore, the body does not execute even once.

This is an important characteristic of the while loop.

---

# 5. Infinite while Loop

If the condition never becomes false, the loop continues indefinitely.

Example:

\`\`\`c
while (1)
{
    printf("Running\\n");
}
\`\`\`

Since 1 is always logically true, the loop is infinite.

Infinite loops can sometimes be intentional, but accidental infinite loops are a common beginner mistake.

---

# 6. Updating the Loop Variable

A loop variable is often used to control how many times the loop executes.

Example:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
    i++;
}
\`\`\`

The statement:

\`\`\`c
i++;
\`\`\`

changes the loop variable.

Without it, the condition may remain true forever.

---

# 7. Counting Down

A while loop can also count backwards.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 5;

    while (i >= 1)
    {
        printf("%d\\n", i);
        i--;
    }

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

A while loop can be used to print even numbers.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 2;

    while (i <= 10)
    {
        printf("%d\\n", i);
        i += 2;
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

# 9. Printing Odd Numbers

Similarly, odd numbers can be printed.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 10)
    {
        printf("%d\\n", i);
        i += 2;
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

---

# 10. Sum of Numbers

A while loop can be used to calculate the sum of numbers.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;
    int sum = 0;

    while (i <= 5)
    {
        sum += i;
        i++;
    }

    printf("Sum = %d\\n", sum);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Sum = 15
\`\`\`

The calculation is:

\`\`\`text
1 + 2 + 3 + 4 + 5
↓
15
\`\`\`

---

# 11. Reading User Input Repeatedly

A while loop can repeatedly accept input.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 1;

    while (number != 0)
    {
        printf("Enter a number (0 to stop): ");
        scanf("%d", &number);

        if (number != 0)
        {
            printf("You entered %d\\n", number);
        }
    }

    printf("Program ended\\n");

    return 0;
}
\`\`\`

The loop continues until the user enters 0.

---

# 12. Factorial Using while Loop

The factorial of a positive integer n is:

\`\`\`text
n! = n × (n-1) × (n-2) × ... × 1
\`\`\`

Example:

\`\`\`text
5! = 5 × 4 × 3 × 2 × 1
   = 120
\`\`\`

Program:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int n = 5;
    int i = 1;
    int factorial = 1;

    while (i <= n)
    {
        factorial *= i;
        i++;
    }

    printf("Factorial = %d\\n", factorial);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Factorial = 120
\`\`\`

---

# 13. while Loop With a Condition

The condition can contain relational operators.

Example:

\`\`\`c
int number = 10;

while (number > 0)
{
    printf("%d\\n", number);
    number--;
}
\`\`\`

The loop continues while:

\`\`\`text
number > 0
\`\`\`

is true.

---

# 14. while Loop With Logical Operators

Multiple conditions can be combined.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 10 && i != 6)
    {
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
5
\`\`\`

The loop stops when either condition becomes false.

---

# 15. Nested while Loops

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

Nested loops will be studied in greater detail later.

---

# 16. while Loop With break

The break statement can immediately terminate a loop.

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
5
\`\`\`

When i becomes 6, break exits the loop.

---

# 17. while Loop With continue

The continue statement skips the remaining statements in the current iteration and proceeds to the next iteration.

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

---

# 18. Practical Example — Counting Digits

A while loop can be used to count the digits of a positive integer.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 12345;
    int count = 0;

    while (number > 0)
    {
        number /= 10;
        count++;
    }

    printf("Number of digits = %d\\n", count);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Number of digits = 5
\`\`\`

Each division by 10 removes one decimal digit.

---

# 19. Practical Example — Reverse a Number

A while loop can also be used to reverse the digits of a positive integer.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 12345;
    int reverse = 0;

    while (number > 0)
    {
        int digit = number % 10;

        reverse = reverse * 10 + digit;

        number /= 10;
    }

    printf("Reverse = %d\\n", reverse);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Reverse = 54321
\`\`\`

---

# 20. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;
    int sum = 0;

    printf("Enter a positive number: ");
    scanf("%d", &number);

    while (number > 0)
    {
        sum += number % 10;
        number /= 10;
    }

    printf("Sum of digits = %d\\n", sum);

    return 0;
}
\`\`\`

For input:

\`\`\`text
Enter a positive number: 1234
\`\`\`

Output:

\`\`\`text
Sum of digits = 10
\`\`\`

Because:

\`\`\`text
1 + 2 + 3 + 4 = 10
\`\`\`

---

# 21. while vs do-while

The main difference is when the condition is checked.

while:

\`\`\`c
while (condition)
{
    statements;
}
\`\`\`

The condition is checked before the body.

Therefore, the body may execute zero times.

do-while:

\`\`\`c
do
{
    statements;
}
while (condition);
\`\`\`

The body executes before the condition is checked.

Therefore, the body executes at least once.

The do-while loop will be studied in the next lesson.

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting to Update the Loop Variable

Incorrect:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
}
\`\`\`

The value of i never changes, so the condition remains true.

Correct:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
    i++;
}
\`\`\`

---

## Mistake 2 — Starting With the Wrong Value

Always initialize the loop variable appropriately.

Example:

\`\`\`c
int i = 1;
\`\`\`

before:

\`\`\`c
while (i <= 5)
\`\`\`

---

## Mistake 3 — Accidentally Creating an Infinite Loop

Make sure the loop condition can eventually become false.

---

## Mistake 4 — Forgetting That while May Execute Zero Times

Because the condition is checked first:

\`\`\`c
while (condition)
\`\`\`

the body does not execute if the initial condition is false.

---

# Lesson Summary

In this lesson, you learned:

- A while loop repeatedly executes statements while a condition is true.
- The condition is checked before every iteration.
- A while loop may execute zero times.
- The loop variable should normally be updated so the loop can terminate.
- while loops can count upward or downward.
- while loops can calculate sums and factorials.
- while loops can process digits of numbers.
- break can terminate a loop immediately.
- continue can skip the current iteration.
- while loops can be nested.
- while is an entry-controlled loop.

The basic structure is:

\`\`\`text
Initialize
   ↓
Check condition
   ↓
True?
 /   \\
Yes   No
 ↓     ↓
Body   Exit
 ↓
Update
 ↓
Check again
\`\`\`

Basic example:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
    i++;
}
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

→ Lesson 9 — while Loop

  Lesson 10 — do-while Loop

  Lesson 11 — for Loop

  Lesson 12 — Nested Loops

  Lesson 13 — break Statement

  Lesson 14 — continue Statement

  Lesson 15 — Mini Project — Menu-Driven Program

Lesson 9 Complete

Next: Lesson 10 — do-while Loop.

`,
};

export default lesson9;
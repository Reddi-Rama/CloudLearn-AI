const lesson10 = {
  id: "lesson10",

  title: "do-while Loop",

  content: `

# Lesson 10: do-while Loop

## Introduction

The do-while loop is a repetition statement in C.

It is similar to the while loop, but there is one important difference:

**The body of a do-while loop executes at least once.**

The condition is checked after the loop body executes.

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

A do-while loop executes its body first and checks the condition afterward.

The execution can be represented as:

\`\`\`text
      Execute body
           ↓
      Check condition
           ↓
      ┌────┴────┐
    true       false
      ↓           ↓
    Repeat       Exit
      ↓
 Execute body
\`\`\`

This makes the do-while loop different from the while loop.

---

# 2. Basic Syntax

The syntax is:

\`\`\`c
do
{
    statements;
}
while (condition);
\`\`\`

The semicolon after:

\`\`\`c
while (condition);
\`\`\`

is required.

---

# 3. Simple do-while Loop

Example:

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

# 4. Execution of a do-while Loop

Consider:

\`\`\`c
int i = 1;

do
{
    printf("%d\\n", i);
    i++;
}
while (i <= 3);
\`\`\`

Execution:

\`\`\`text
i = 1
 ↓
Execute body
 ↓
Print 1
 ↓
i = 2
 ↓
Check 2 <= 3
 ↓
true
 ↓
Execute body
 ↓
Print 2
 ↓
i = 3
 ↓
Check 3 <= 3
 ↓
true
 ↓
Execute body
 ↓
Print 3
 ↓
i = 4
 ↓
Check 4 <= 3
 ↓
false
 ↓
Exit
\`\`\`

---

# 5. The Important Difference From while

Consider a while loop:

\`\`\`c
int i = 10;

while (i < 5)
{
    printf("%d\\n", i);
}
\`\`\`

The condition is false before the body executes.

Therefore, nothing is printed.

Now consider a do-while loop:

\`\`\`c
int i = 10;

do
{
    printf("%d\\n", i);
}
while (i < 5);
\`\`\`

The body executes before the condition is checked.

Output:

\`\`\`text
10
\`\`\`

Therefore:

\`\`\`text
while
↓
condition first

do-while
↓
body first
\`\`\`

---

# 6. do-while Executes At Least Once

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 100;

    do
    {
        printf("Number = %d\\n", number);
    }
    while (number < 10);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Number = 100
\`\`\`

Although the condition is false, the body executes once.

---

# 7. Counting With do-while

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
    while (i <= 10);

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 3 4 5 6 7 8 9 10
\`\`\`

---

# 8. Counting Backward

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 10;

    do
    {
        printf("%d ", i);
        i--;
    }
    while (i >= 1);

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
10 9 8 7 6 5 4 3 2 1
\`\`\`

---

# 9. Sum Using do-while

Example:

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
    while (i <= 10);

    printf("Sum = %d\\n", sum);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Sum = 55
\`\`\`

---

# 10. Multiplication Table

A do-while loop can generate a multiplication table.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 5;
    int i = 1;

    do
    {
        printf("%d x %d = %d\\n",
               number,
               i,
               number * i);

        i++;
    }
    while (i <= 10);

    return 0;
}
\`\`\`

Output:

\`\`\`text
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
\`\`\`

---

# 11. User Input With do-while

The do-while loop is especially useful when a user must enter something at least once.

Example:

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

The user is asked for input at least once.

If an invalid value is entered, the loop repeats.

---

# 12. Menu-Driven Program

A common use of do-while is a menu that should be displayed at least once.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice;

    do
    {
        printf("\\nMenu\\n");
        printf("1. Add\\n");
        printf("2. Subtract\\n");
        printf("3. Exit\\n");
        printf("Enter your choice: ");

        scanf("%d", &choice);

        if (choice == 1)
        {
            printf("Addition selected\\n");
        }
        else if (choice == 2)
        {
            printf("Subtraction selected\\n");
        }
        else if (choice == 3)
        {
            printf("Exiting...\\n");
        }
        else
        {
            printf("Invalid choice\\n");
        }

    }
    while (choice != 3);

    return 0;
}
\`\`\`

The menu appears at least once and continues until the user chooses 3.

---

# 13. Even Numbers Using do-while

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 2;

    do
    {
        printf("%d ", i);
        i += 2;
    }
    while (i <= 20);

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
2 4 6 8 10 12 14 16 18 20
\`\`\`

---

# 14. Factorial Using do-while

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

# 15. Processing Digits

A do-while loop can process the digits of a number.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 12345;

    do
    {
        int digit = number % 10;

        printf("%d ", digit);

        number /= 10;
    }
    while (number != 0);

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
5 4 3 2 1
\`\`\`

The do-while structure is useful here because the body should execute even when the number becomes zero after processing.

---

# 16. Reversing a Number

Example:

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
    while (number != 0);

    printf("Reverse = %d\\n", reverse);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Reverse = 54321
\`\`\`

---

# 17. do-while With if Statement

A do-while loop can contain conditional statements.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    do
    {
        if (i % 2 == 0)
        {
            printf("%d is even\\n", i);
        }
        else
        {
            printf("%d is odd\\n", i);
        }

        i++;
    }
    while (i <= 5);

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 is odd
2 is even
3 is odd
4 is even
5 is odd
\`\`\`

---

# 18. do-while With Multiple Conditions

Logical operators can be used in the condition.

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
    while (i <= 10 && i != 6);

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 3 4 5
\`\`\`

The loop stops when one of the conditions becomes false.

---

# 19. Infinite do-while Loop

A do-while loop can be made infinite.

Example:

\`\`\`c
do
{
    printf("Running\\n");
}
while (1);
\`\`\`

Since the condition is always true, the loop continues indefinitely unless it is exited.

---

# 20. do-while and break

The break statement can be used to exit a do-while loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    do
    {
        printf("%d\\n", i);

        if (i == 5)
        {
            break;
        }

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
\`\`\`

The break statement immediately terminates the loop.

---

# 21. do-while vs while

The main difference is the order of condition checking.

### while Loop

\`\`\`c
while (condition)
{
    statements;
}
\`\`\`

The condition is checked first.

Therefore:

\`\`\`text
Condition
   ↓
Body
\`\`\`

The body may execute zero times.

### do-while Loop

\`\`\`c
do
{
    statements;
}
while (condition);
\`\`\`

The body executes first.

Therefore:

\`\`\`text
Body
  ↓
Condition
\`\`\`

The body executes at least once.

---

# 22. while and do-while Example

Consider:

\`\`\`c
int i = 10;

while (i < 5)
{
    printf("while\\n");
}
\`\`\`

Output:

\`\`\`text
No output
\`\`\`

Now:

\`\`\`c
int i = 10;

do
{
    printf("do-while\\n");
}
while (i < 5);
\`\`\`

Output:

\`\`\`text
do-while
\`\`\`

This clearly demonstrates the difference.

---

# 23. Practical Example — Input Validation

A do-while loop can repeatedly request input until it satisfies a condition.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks;

    do
    {
        printf("Enter marks between 0 and 100: ");
        scanf("%d", &marks);
    }
    while (marks < 0 || marks > 100);

    printf("Valid marks = %d\\n", marks);

    return 0;
}
\`\`\`

The input is requested at least once.

The loop continues while the value is outside the valid range.

---

# 24. Practical Example — Simple Menu

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice;

    do
    {
        printf("\\n1. Hello\\n");
        printf("2. Welcome\\n");
        printf("3. Exit\\n");
        printf("Enter choice: ");

        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                printf("Hello\\n");
                break;

            case 2:
                printf("Welcome\\n");
                break;

            case 3:
                printf("Goodbye\\n");
                break;

            default:
                printf("Invalid choice\\n");
        }

    }
    while (choice != 3);

    return 0;
}
\`\`\`

The menu continues until the user selects option 3.

---

# 25. Choosing Between Loops

Different loops are useful in different situations.

### for Loop

Useful when the loop count is generally known.

Example:

\`\`\`c
for (int i = 1; i <= 10; i++)
{
    printf("%d\\n", i);
}
\`\`\`

### while Loop

Useful when the condition should be checked before entering the body.

Example:

\`\`\`c
while (condition)
{
    statements;
}
\`\`\`

### do-while Loop

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

# Common Beginner Mistakes

## Mistake 1 — Forgetting the Semicolon

Incorrect:

\`\`\`c
do
{
    printf("Hello");
}
while (condition)
\`\`\`

Correct:

\`\`\`c
do
{
    printf("Hello");
}
while (condition);
\`\`\`

The semicolon after the while condition is required.

---

## Mistake 2 — Confusing while With do-while

Remember:

\`\`\`c
while (condition)
{
    statements;
}
\`\`\`

checks the condition first.

But:

\`\`\`c
do
{
    statements;
}
while (condition);
\`\`\`

executes the body first.

---

## Mistake 3 — Forgetting to Update the Variable

Example:

\`\`\`c
int i = 1;

do
{
    printf("%d\\n", i);
}
while (i <= 5);
\`\`\`

The value of i never changes.

This can result in an infinite loop.

Correct:

\`\`\`c
int i = 1;

do
{
    printf("%d\\n", i);
    i++;
}
while (i <= 5);
\`\`\`

---

# Lesson Summary

In this lesson, you learned:

- A do-while loop repeats a block of statements.
- The loop body executes before the condition is checked.
- A do-while loop executes at least once.
- The condition is checked after each iteration.
- A semicolon is required after the while condition.
- do-while loops are useful for input validation.
- They are commonly used for menu-driven programs.
- They can be used for counting, summing, factorials, and digit processing.
- break can be used to exit a do-while loop.
- A do-while loop can be infinite if its condition remains true.

The key structure is:

\`\`\`c
do
{
    statements;
}
while (condition);
\`\`\`

The key difference is:

\`\`\`text
while
   ↓
Condition → Body

do-while
   ↓
Body → Condition
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

→ Lesson 11 — Nested Loops

  Lesson 12 — break
  Lesson 13 — continue
  Lesson 14 — goto
  Lesson 15 — Loop Control

Lesson 10 Complete

Next: Lesson 11 — Nested Loops.

`,
};

export default lesson10;
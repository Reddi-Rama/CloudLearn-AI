const lesson3 = {
  id: "lesson3",

  title: "if-else Statement",

  content: `

# Lesson 3: if-else Statement

## Introduction

The if-else statement is used when a program needs to choose between two possible alternatives.

The if block executes when the condition is true.

The else block executes when the condition is false.

For example:

\`\`\`c
if (marks >= 40)
{
    printf("Pass\\n");
}
else
{
    printf("Fail\\n");
}
\`\`\`

Exactly one of these two blocks is executed.

---

# 1. Syntax of if-else

The general syntax is:

\`\`\`c
if (condition)
{
    statements;
}
else
{
    statements;
}
\`\`\`

The condition is checked first.

If it is true, the if block executes.

If it is false, the else block executes.

---

# 2. Simple Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 10;

    if (number > 0)
    {
        printf("Positive number\\n");
    }
    else
    {
        printf("Not a positive number\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Positive number
\`\`\`

Since number is 10, the condition is true.

---

# 3. Example With False Condition

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = -5;

    if (number > 0)
    {
        printf("Positive number\\n");
    }
    else
    {
        printf("Not a positive number\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Not a positive number
\`\`\`

The condition is false, so the else block executes.

---

# 4. Checking Pass or Fail

A common use of if-else is checking whether a student has passed.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks = 65;

    if (marks >= 40)
    {
        printf("Pass\\n");
    }
    else
    {
        printf("Fail\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Pass
\`\`\`

---

# 5. Checking Even or Odd

The if-else statement can be combined with the remainder operator.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 7;

    if (number % 2 == 0)
    {
        printf("Even number\\n");
    }
    else
    {
        printf("Odd number\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Odd number
\`\`\`

If the remainder after division by 2 is zero, the number is even.

Otherwise, it is odd.

---

# 6. Checking Positive or Negative

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = -20;

    if (number >= 0)
    {
        printf("Positive or zero\\n");
    }
    else
    {
        printf("Negative number\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Negative number
\`\`\`

---

# 7. Using User Input

The if-else statement can be used with input provided by the user.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    printf("Enter a number: ");
    scanf("%d", &number);

    if (number % 2 == 0)
    {
        printf("Even number\\n");
    }
    else
    {
        printf("Odd number\\n");
    }

    return 0;
}
\`\`\`

The result depends on the number entered.

---

# 8. How if-else Works

The flow is:

\`\`\`text
              Start
                ↓
        Check condition
                ↓
          ┌──────────┐
          │  True?   │
          └──────────┘
           /        \\
        Yes          No
         ↓            ↓
    if block      else block
         \\            /
          \\          /
            Continue
\`\`\`

Only one block is executed.

---

# 9. Multiple Statements

Both the if and else blocks can contain multiple statements.

Example:

\`\`\`c
int marks = 80;

if (marks >= 40)
{
    printf("Pass\\n");
    printf("Good performance\\n");
}
else
{
    printf("Fail\\n");
    printf("Better luck next time\\n");
}
\`\`\`

---

# 10. Using Logical Operators

Conditions can contain logical operators.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 20;
    int hasID = 1;

    if (age >= 18 && hasID)
    {
        printf("Access allowed\\n");
    }
    else
    {
        printf("Access denied\\n");
    }

    return 0;
}
\`\`\`

Both conditions must be true for the if block to execute.

---

# 11. Comparing Two Values

The if-else statement can compare two values.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 25;
    int b = 15;

    if (a > b)
    {
        printf("a is greater than b\\n");
    }
    else
    {
        printf("a is not greater than b\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
a is greater than b
\`\`\`

---

# 12. Finding the Greater Number

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 30;
    int b = 50;

    if (a > b)
    {
        printf("a is greater\\n");
    }
    else
    {
        printf("b is greater or equal\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
b is greater or equal
\`\`\`

---

# 13. if-else With Character Values

The condition can also compare characters.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char grade = 'A';

    if (grade == 'A')
    {
        printf("Excellent\\n");
    }
    else
    {
        printf("Grade is not A\\n");
    }

    return 0;
}
\`\`\`

---

# 14. if-else and Nonzero Values

In C, zero represents false in a logical context.

Nonzero values represent true.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int value = 5;

    if (value)
    {
        printf("True\\n");
    }
    else
    {
        printf("False\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
True
\`\`\`

---

# 15. if-else With Zero

\`\`\`c
#include <stdio.h>

int main(void)
{
    int value = 0;

    if (value)
    {
        printf("True\\n");
    }
    else
    {
        printf("False\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
False
\`\`\`

---

# 16. Difference Between if and if-else

The if statement:

\`\`\`c
if (condition)
{
    statement;
}
\`\`\`

executes a block only when the condition is true.

The if-else statement:

\`\`\`c
if (condition)
{
    statement1;
}
else
{
    statement2;
}
\`\`\`

provides an alternative block when the condition is false.

---

# 17. Practical Example — Eligibility

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age;

    printf("Enter age: ");
    scanf("%d", &age);

    if (age >= 18)
    {
        printf("Eligible\\n");
    }
    else
    {
        printf("Not eligible\\n");
    }

    return 0;
}
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Using = Instead of ==

Incorrect:

\`\`\`c
if (number = 10)
\`\`\`

Correct:

\`\`\`c
if (number == 10)
\`\`\`

---

## Mistake 2 — Adding a Semicolon After if

Incorrect:

\`\`\`c
if (number > 0);
{
    printf("Positive\\n");
}
else
{
    printf("Negative\\n");
}
\`\`\`

Correct:

\`\`\`c
if (number > 0)
{
    printf("Positive\\n");
}
else
{
    printf("Negative\\n");
}
\`\`\`

---

## Mistake 3 — Forgetting Braces

For multiple statements, use braces to clearly define each block.

---

# Lesson Summary

In this lesson, you learned:

- The if-else statement provides two possible execution paths.
- The if block executes when the condition is true.
- The else block executes when the condition is false.
- Exactly one of the two blocks executes.
- if-else can be used with relational and logical operators.
- It can be used for checking even/odd, positive/negative, pass/fail, and comparisons.
- if-else can be combined with user input.

The basic idea is:

\`\`\`text
Condition
   ↓
True ──→ if block
   ↓
False ─→ else block
\`\`\`

---

# Module 3 Progress

✓ Lesson 1 — Conditional Statements

✓ Lesson 2 — if Statement

→ Lesson 3 — if-else Statement

  Lesson 4 — Nested if

  Lesson 5 — else-if Ladder

  Lesson 6 — switch Statement

  Lesson 7 — Nested switch

  Lesson 8 — Conditional Operator

  Lesson 9 — while Loop

  Lesson 10 — do-while Loop

  Lesson 11 — for Loop

  Lesson 12 — Nested Loops

  Lesson 13 — break Statement

  Lesson 14 — continue Statement

  Lesson 15 — Mini Project — Menu-Driven Program

Lesson 3 Complete

Next: Lesson 4 — Nested if.

`,
};

export default lesson3;
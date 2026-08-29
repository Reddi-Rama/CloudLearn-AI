const lesson4 = {
  id: "lesson4",

  title: "Nested if",

  content: `

# Lesson 4: Nested if

## Introduction

A nested if is an if statement placed inside another if statement.

It is useful when one decision depends on another decision.

For example, a program may first check whether a person is eligible and then perform another check.

Example:

\`\`\`c
if (age >= 18)
{
    if (hasID)
    {
        printf("Access allowed\\n");
    }
}
\`\`\`

The inner if is checked only when the outer if condition is true.

---

# 1. What Is a Nested if?

When one if statement is written inside another if statement, it is called a nested if.

General structure:

\`\`\`c
if (condition1)
{
    if (condition2)
    {
        statements;
    }
}
\`\`\`

Here:

\`\`\`text
condition1
    ↓
  True
    ↓
condition2
    ↓
  True
    ↓
Execute statements
\`\`\`

---

# 2. Simple Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 10;

    if (number > 0)
    {
        if (number < 100)
        {
            printf("Number is between 1 and 99\\n");
        }
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Number is between 1 and 99
\`\`\`

The outer condition is true.

Therefore, the inner condition is checked.

The inner condition is also true, so the message is displayed.

---

# 3. Outer Condition False

Consider:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = -10;

    if (number > 0)
    {
        if (number < 100)
        {
            printf("Number is between 1 and 99\\n");
        }
    }

    return 0;
}
\`\`\`

The outer condition:

\`\`\`c
number > 0
\`\`\`

is false.

Therefore, the inner if statement is never executed.

---

# 4. How Nested if Works

The basic flow is:

\`\`\`text
              Start
                ↓
        Outer condition
                ↓
             True?
            /     \\
          No       Yes
          ↓         ↓
        Skip    Inner condition
                    ↓
                  True?
                 /     \\
               No       Yes
               ↓         ↓
             Skip     Execute
\`\`\`

The inner condition is reached only when the outer condition is true.

---

# 5. Nested if With Age

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 20;

    if (age >= 18)
    {
        if (age <= 60)
        {
            printf("Age is within the specified range\\n");
        }
    }

    return 0;
}
\`\`\`

Both conditions must be true before the message is displayed.

---

# 6. Nested if With Two Values

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 20;
    int b = 10;

    if (a > 0)
    {
        if (b > 0)
        {
            printf("Both numbers are positive\\n");
        }
    }

    return 0;
}
\`\`\`

The outer if checks a.

The inner if checks b.

---

# 7. Nested if With User Input

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age;
    int hasID;

    printf("Enter age: ");
    scanf("%d", &age);

    printf("Enter 1 if you have an ID, otherwise 0: ");
    scanf("%d", &hasID);

    if (age >= 18)
    {
        if (hasID)
        {
            printf("Access allowed\\n");
        }
    }

    return 0;
}
\`\`\`

The program first checks the age.

Only if the age condition is true does it check the ID condition.

---

# 8. Nested if With else

An inner if can also contain an else.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 20;

    if (age >= 18)
    {
        if (age >= 60)
        {
            printf("Senior adult\\n");
        }
        else
        {
            printf("Adult\\n");
        }
    }

    return 0;
}
\`\`\`

The inner if-else determines which message is displayed after the outer condition succeeds.

---

# 9. Nested if-else

Both the outer and inner if statements can have else blocks.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 25;

    if (number >= 0)
    {
        if (number % 2 == 0)
        {
            printf("Positive even number\\n");
        }
        else
        {
            printf("Positive odd number\\n");
        }
    }
    else
    {
        printf("Negative number\\n");
    }

    return 0;
}
\`\`\`

The outer condition first determines whether the number is negative or nonnegative.

If it is nonnegative, the inner if determines whether it is even or odd.

---

# 10. Multiple Levels of Nesting

An if statement can contain another if, which can contain another if.

For example:

\`\`\`c
if (condition1)
{
    if (condition2)
    {
        if (condition3)
        {
            printf("All conditions are true\\n");
        }
    }
}
\`\`\`

However, excessive nesting can make a program difficult to read.

---

# 11. Practical Example — Admission Check

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks = 80;
    int entrancePassed = 1;

    if (marks >= 60)
    {
        if (entrancePassed)
        {
            printf("Eligible for admission\\n");
        }
    }

    return 0;
}
\`\`\`

The applicant must satisfy both conditions.

---

# 12. Practical Example — Number Classification

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 12;

    if (number >= 0)
    {
        if (number % 2 == 0)
        {
            printf("Non-negative even number\\n");
        }
        else
        {
            printf("Non-negative odd number\\n");
        }
    }
    else
    {
        printf("Negative number\\n");
    }

    return 0;
}
\`\`\`

---

# 13. Nested if vs Logical Operators

Sometimes nested if statements can be replaced with logical operators.

Nested version:

\`\`\`c
if (age >= 18)
{
    if (marks >= 40)
    {
        printf("Eligible\\n");
    }
}
\`\`\`

Equivalent logical expression:

\`\`\`c
if (age >= 18 && marks >= 40)
{
    printf("Eligible\\n");
}
\`\`\`

Both can express conditions that must be true together.

The appropriate choice depends on the program's structure and readability.

---

# 14. Important Point About Nesting

The inner if does not execute independently.

For example:

\`\`\`c
if (condition1)
{
    if (condition2)
    {
        printf("Both true\\n");
    }
}
\`\`\`

The execution order is:

\`\`\`text
Check condition1
       ↓
   Is it true?
       ↓
      Yes
       ↓
Check condition2
       ↓
   Is it true?
       ↓
      Yes
       ↓
Execute statement
\`\`\`

If condition1 is false, condition2 is never checked.

---

# 15. Practical Example — Login Check

\`\`\`c
#include <stdio.h>

int main(void)
{
    int usernameCorrect = 1;
    int passwordCorrect = 1;

    if (usernameCorrect)
    {
        if (passwordCorrect)
        {
            printf("Login successful\\n");
        }
        else
        {
            printf("Incorrect password\\n");
        }
    }
    else
    {
        printf("Incorrect username\\n");
    }

    return 0;
}
\`\`\`

The program first checks the username.

If the username is correct, it then checks the password.

---

# Common Beginner Mistakes

## Mistake 1 — Incorrect Braces

Always make the nesting clear:

\`\`\`c
if (condition1)
{
    if (condition2)
    {
        printf("Both true\\n");
    }
}
\`\`\`

---

## Mistake 2 — Too Much Nesting

Avoid unnecessarily creating many levels:

\`\`\`c
if (a)
{
    if (b)
    {
        if (c)
        {
            if (d)
            {
                printf("Done\\n");
            }
        }
    }
}
\`\`\`

If the conditions simply need to be true together, a logical expression may be clearer:

\`\`\`c
if (a && b && c && d)
{
    printf("Done\\n");
}
\`\`\`

---

# Lesson Summary

A nested if is an if statement placed inside another if statement.

Important points:

- The inner if is reached only when the outer condition allows execution to reach it.
- Nested if statements can contain else blocks.
- Multiple levels of nesting are possible.
- Nested conditions are useful when decisions depend on earlier decisions.
- Logical operators can sometimes provide a simpler alternative.
- Excessive nesting should be avoided when it reduces readability.

The basic structure is:

\`\`\`text
Outer Condition
       ↓
      True
       ↓
Inner Condition
       ↓
      True
       ↓
Execute Statement
\`\`\`

---

# Module 3 Progress

✓ Lesson 1 — Conditional Statements

✓ Lesson 2 — if Statement

✓ Lesson 3 — if-else Statement

→ Lesson 4 — Nested if

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

Lesson 4 Complete

Next: Lesson 5 — else-if Ladder.

`,
};

export default lesson4;
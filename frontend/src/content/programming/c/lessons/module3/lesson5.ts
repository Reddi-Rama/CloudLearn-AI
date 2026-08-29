const lesson5 = {
  id: "lesson5",

  title: "else-if Ladder",

  content: `

# Lesson 5: else-if Ladder

## Introduction

When a program needs to check multiple conditions, writing many separate if statements can become difficult to manage.

C provides the **else-if ladder** for checking multiple conditions one after another.

For example:

\`\`\`c
if (marks >= 90)
{
    printf("Grade A\\n");
}
else if (marks >= 75)
{
    printf("Grade B\\n");
}
else if (marks >= 60)
{
    printf("Grade C\\n");
}
else
{
    printf("Grade D\\n");
}
\`\`\`

The conditions are checked from top to bottom.

As soon as one condition is true, its block executes and the remaining conditions are skipped.

---

# 1. What Is an else-if Ladder?

An else-if ladder is a sequence of conditions connected using:

\`\`\`c
if
else if
else if
else
\`\`\`

The general syntax is:

\`\`\`c
if (condition1)
{
    statements;
}
else if (condition2)
{
    statements;
}
else if (condition3)
{
    statements;
}
else
{
    statements;
}
\`\`\`

The final else is optional.

---

# 2. How an else-if Ladder Works

The conditions are evaluated from top to bottom.

For example:

\`\`\`text
Condition 1
    ↓
  False
    ↓
Condition 2
    ↓
  False
    ↓
Condition 3
    ↓
  True
    ↓
Execute condition 3 block
    ↓
Skip remaining conditions
\`\`\`

Only one block in the ladder is executed.

---

# 3. Simple Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 10;

    if (number > 20)
    {
        printf("Greater than 20\\n");
    }
    else if (number > 5)
    {
        printf("Greater than 5\\n");
    }
    else
    {
        printf("5 or less\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Greater than 5
\`\`\`

The first condition is false.

The second condition is true.

Therefore, the second block executes.

---

# 4. Multiple Conditions

An else-if ladder can contain many conditions.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 75;

    if (number >= 90)
    {
        printf("Excellent\\n");
    }
    else if (number >= 75)
    {
        printf("Very good\\n");
    }
    else if (number >= 50)
    {
        printf("Good\\n");
    }
    else
    {
        printf("Needs improvement\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Very good
\`\`\`

---

# 5. Grade Calculation

One of the most common applications of an else-if ladder is grade classification.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks = 82;

    if (marks >= 90)
    {
        printf("Grade A\\n");
    }
    else if (marks >= 80)
    {
        printf("Grade B\\n");
    }
    else if (marks >= 70)
    {
        printf("Grade C\\n");
    }
    else if (marks >= 60)
    {
        printf("Grade D\\n");
    }
    else
    {
        printf("Grade F\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Grade B
\`\`\`

---

# 6. Checking Positive, Negative, or Zero

An else-if ladder can classify a number into multiple categories.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 0;

    if (number > 0)
    {
        printf("Positive\\n");
    }
    else if (number < 0)
    {
        printf("Negative\\n");
    }
    else
    {
        printf("Zero\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Zero
\`\`\`

---

# 7. Finding the Largest of Three Numbers

An else-if ladder can be used to compare values.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 30;
    int b = 50;
    int c = 20;

    if (a >= b && a >= c)
    {
        printf("a is largest\\n");
    }
    else if (b >= a && b >= c)
    {
        printf("b is largest\\n");
    }
    else
    {
        printf("c is largest\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
b is largest
\`\`\`

---

# 8. Using User Input

The conditions can be based on values entered by the user.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks;

    printf("Enter marks: ");
    scanf("%d", &marks);

    if (marks >= 90)
    {
        printf("Grade A\\n");
    }
    else if (marks >= 75)
    {
        printf("Grade B\\n");
    }
    else if (marks >= 60)
    {
        printf("Grade C\\n");
    }
    else if (marks >= 40)
    {
        printf("Grade D\\n");
    }
    else
    {
        printf("Fail\\n");
    }

    return 0;
}
\`\`\`

The output depends on the entered marks.

---

# 9. Order of Conditions Matters

The order of conditions is important.

Consider:

\`\`\`c
int marks = 95;

if (marks >= 40)
{
    printf("Pass\\n");
}
else if (marks >= 90)
{
    printf("Excellent\\n");
}
\`\`\`

The first condition is already true:

\`\`\`text
95 >= 40
↓
true
\`\`\`

Therefore, the second condition is never reached.

A better ordering is:

\`\`\`c
if (marks >= 90)
{
    printf("Excellent\\n");
}
else if (marks >= 40)
{
    printf("Pass\\n");
}
else
{
    printf("Fail\\n");
}
\`\`\`

More specific conditions should generally be checked before broader conditions when their ranges overlap.

---

# 10. else-if Without Final else

The final else is optional.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 10;

    if (number > 100)
    {
        printf("Large number\\n");
    }
    else if (number > 50)
    {
        printf("Medium number\\n");
    }

    return 0;
}
\`\`\`

If none of the conditions is true, nothing is printed.

---

# 11. Multiple else-if Conditions

There is no fixed limit requiring only two or three conditions.

Example:

\`\`\`c
if (marks >= 90)
{
    printf("A\\n");
}
else if (marks >= 80)
{
    printf("B\\n");
}
else if (marks >= 70)
{
    printf("C\\n");
}
else if (marks >= 60)
{
    printf("D\\n");
}
else if (marks >= 50)
{
    printf("E\\n");
}
else
{
    printf("F\\n");
}
\`\`\`

The program checks each condition in order.

---

# 12. else-if Ladder vs Nested if

An else-if ladder:

\`\`\`c
if (marks >= 90)
{
    printf("A\\n");
}
else if (marks >= 75)
{
    printf("B\\n");
}
else
{
    printf("C\\n");
}
\`\`\`

is useful when the program needs to choose one option from several alternatives.

A nested if:

\`\`\`c
if (condition1)
{
    if (condition2)
    {
        printf("Both conditions satisfied\\n");
    }
}
\`\`\`

is useful when one decision depends on another.

---

# 13. Practical Example — Temperature

\`\`\`c
#include <stdio.h>

int main(void)
{
    int temperature = 35;

    if (temperature >= 40)
    {
        printf("Very hot\\n");
    }
    else if (temperature >= 30)
    {
        printf("Hot\\n");
    }
    else if (temperature >= 20)
    {
        printf("Moderate\\n");
    }
    else
    {
        printf("Cool\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Hot
\`\`\`

---

# 14. Practical Example — Age Classification

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 25;

    if (age < 13)
    {
        printf("Child\\n");
    }
    else if (age < 20)
    {
        printf("Teenager\\n");
    }
    else if (age < 60)
    {
        printf("Adult\\n");
    }
    else
    {
        printf("Senior\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Adult
\`\`\`

---

# 15. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks;

    printf("Enter marks: ");
    scanf("%d", &marks);

    if (marks >= 90)
    {
        printf("Excellent performance\\n");
    }
    else if (marks >= 75)
    {
        printf("Very good performance\\n");
    }
    else if (marks >= 60)
    {
        printf("Good performance\\n");
    }
    else if (marks >= 40)
    {
        printf("Passed\\n");
    }
    else
    {
        printf("Failed\\n");
    }

    return 0;
}
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Incorrect Ordering

Avoid putting a broad condition before a more specific condition.

Incorrect:

\`\`\`c
if (marks >= 40)
{
    printf("Pass\\n");
}
else if (marks >= 90)
{
    printf("Excellent\\n");
}
\`\`\`

The second condition will never be reached for marks of 90 or above.

---

## Mistake 2 — Using Separate if Statements

These are different:

\`\`\`c
if (marks >= 90)
{
    printf("A\\n");
}

if (marks >= 80)
{
    printf("B\\n");
}
\`\`\`

For marks of 90, both conditions are true and both blocks can execute.

With an else-if ladder:

\`\`\`c
if (marks >= 90)
{
    printf("A\\n");
}
else if (marks >= 80)
{
    printf("B\\n");
}
\`\`\`

only the first matching block executes.

---

## Mistake 3 — Forgetting the Final else

The final else is optional.

If no condition is true and there is no final else, no block is executed.

---

# Lesson Summary

In this lesson, you learned:

- An else-if ladder checks multiple conditions in sequence.
- Conditions are checked from top to bottom.
- Once a condition is true, its block executes and the remaining conditions are skipped.
- The final else is optional.
- The order of conditions is important.
- else-if ladders are useful for grading, classification, ranges, and multiple alternatives.
- An else-if ladder differs from separate if statements because only one matching branch is selected.

The basic structure is:

\`\`\`text
if
 ↓
else if
 ↓
else if
 ↓
else
\`\`\`

The key rule is:

**First true condition → execute its block → skip the remaining ladder.**

---

# Module 3 Progress

✓ Lesson 1 — Conditional Statements

✓ Lesson 2 — if Statement

✓ Lesson 3 — if-else Statement

✓ Lesson 4 — Nested if

→ Lesson 5 — else-if Ladder

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

Lesson 5 Complete

Next: Lesson 6 — switch Statement.

`,
};

export default lesson5;
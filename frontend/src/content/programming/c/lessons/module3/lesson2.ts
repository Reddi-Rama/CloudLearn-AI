const lesson2 = {
  id: "lesson2",

  title: "if Statement",

  content: `

# Lesson 2: if Statement

## Introduction

The if statement is one of the most basic and important decision-making statements in C.

It allows a program to execute a block of statements only when a specified condition is true.

For example:

\`\`\`c
if (marks >= 40)
{
    printf("Pass\\n");
}
\`\`\`

If marks is greater than or equal to 40, the message is displayed.

If the condition is false, the statement inside the if block is skipped.

---

# 1. Syntax of if Statement

The general syntax is:

\`\`\`c
if (condition)
{
    statements;
}
\`\`\`

The condition is evaluated first.

If it is true, the statements inside the block are executed.

If it is false, the block is skipped.

---

# 2. Simple Example

Consider:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 20;

    if (age >= 18)
    {
        printf("Adult\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Adult
\`\`\`

The condition:

\`\`\`c
age >= 18
\`\`\`

is true because age is 20.

Therefore, the printf statement executes.

---

# 3. if Statement With a False Condition

Consider:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 15;

    if (age >= 18)
    {
        printf("Adult\\n");
    }

    return 0;
}
\`\`\`

Here:

\`\`\`text
15 >= 18
↓
False
\`\`\`

Therefore, the printf statement is skipped.

There is no output from the if block.

---

# 4. How if Works

The basic flow is:

\`\`\`text
Start
  ↓
Evaluate condition
  ↓
Is condition true?
  /       \\
Yes       No
 ↓         ↓
Execute   Skip
block     block
  \\       /
   Continue
\`\`\`

Only the true branch contains an action in a simple if statement.

---

# 5. Conditions Using Relational Operators

The condition of an if statement can use relational operators.

For example:

\`\`\`c
if (number > 0)
{
    printf("Positive\\n");
}
\`\`\`

Other examples:

\`\`\`c
if (number < 0)
{
    printf("Negative\\n");
}

if (number == 0)
{
    printf("Zero\\n");
}

if (marks >= 40)
{
    printf("Pass\\n");
}

if (age <= 18)
{
    printf("Age condition satisfied\\n");
}
\`\`\`

---

# 6. if With Variables

The condition can be based on variables.

For example:

\`\`\`c
int marks = 75;

if (marks >= 40)
{
    printf("Pass\\n");
}
\`\`\`

Since marks contains 75:

\`\`\`text
75 >= 40
↓
True
\`\`\`

Therefore, the statement executes.

---

# 7. if With Logical Operators

Multiple conditions can be combined using logical operators.

For example:

\`\`\`c
int age = 20;
int marks = 75;

if (age >= 18 && marks >= 40)
{
    printf("Eligible\\n");
}
\`\`\`

Both conditions must be true.

Another example:

\`\`\`c
if (age >= 18 || permission == 1)
{
    printf("Allowed\\n");
}
\`\`\`

At least one condition must be true.

---

# 8. if With Nonzero Values

In C, zero represents false in a logical context.

Any nonzero value represents true.

For example:

\`\`\`c
int value = 5;

if (value)
{
    printf("Condition is true\\n");
}
\`\`\`

Since value is nonzero, the condition is considered true.

---

# 9. if With Zero

Consider:

\`\`\`c
int value = 0;

if (value)
{
    printf("Condition is true\\n");
}
\`\`\`

Because value is zero, the condition is false.

Therefore, the printf statement is not executed.

---

# 10. Using Braces

The statements controlled by an if statement are normally placed inside braces.

For example:

\`\`\`c
if (marks >= 40)
{
    printf("Pass\\n");
    printf("Congratulations\\n");
}
\`\`\`

Both statements execute when the condition is true.

Using braces makes the structure clear and reduces mistakes.

---

# 11. Multiple Statements in an if Block

An if block can contain multiple statements.

Example:

\`\`\`c
int marks = 85;

if (marks >= 40)
{
    printf("Pass\\n");
    printf("You have passed the examination.\\n");
    printf("Well done!\\n");
}
\`\`\`

All three statements execute because the condition is true.

---

# 12. if With User Input

The if statement can be used with values entered by the user.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    printf("Enter a number: ");
    scanf("%d", &number);

    if (number > 0)
    {
        printf("Positive number\\n");
    }

    return 0;
}
\`\`\`

If the user enters a positive number, the message is displayed.

---

# 13. Checking Even Numbers

The remainder operator can be combined with if.

For example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 10;

    if (number % 2 == 0)
    {
        printf("Even number\\n");
    }

    return 0;
}
\`\`\`

The condition:

\`\`\`c
number % 2 == 0
\`\`\`

checks whether the remainder after division by 2 is zero.

---

# 14. Checking Positive Numbers

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 25;

    if (number > 0)
    {
        printf("Positive number\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Positive number
\`\`\`

---

# 15. Checking a Passing Mark

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks = 72;

    if (marks >= 40)
    {
        printf("Pass\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Pass
\`\`\`

---

# 16. Multiple Independent if Statements

A program can contain multiple if statements.

For example:

\`\`\`c
int number = 10;

if (number > 0)
{
    printf("Positive\\n");
}

if (number % 2 == 0)
{
    printf("Even\\n");
}
\`\`\`

Output:

\`\`\`text
Positive
Even
\`\`\`

Both conditions are checked independently.

---

# 17. if vs if-else

An if statement executes a block only when the condition is true.

\`\`\`c
if (condition)
{
    statement;
}
\`\`\`

An if-else statement provides an alternative when the condition is false.

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

Use if when no alternative action is required.

Use if-else when both outcomes need to be handled.

---

# 18. Nested if

An if statement can contain another if statement.

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

The inner if is reached only when the outer condition is true.

Nested if statements are covered in detail in the next lesson.

---

# 19. Practical Example

Consider checking whether a number is greater than 100.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 150;

    if (number > 100)
    {
        printf("Number is greater than 100\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Number is greater than 100
\`\`\`

---

# 20. Practical Example — Eligibility

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 20;

    if (age >= 18)
    {
        printf("Eligible\\n");
    }

    return 0;
}
\`\`\`

The condition determines whether the message is displayed.

---

# Common Beginner Mistakes

## Mistake 1 — Using = Instead of ==

Incorrect:

\`\`\`c
if (number = 10)
\`\`\`

This performs assignment.

For comparison, use:

\`\`\`c
if (number == 10)
\`\`\`

---

## Mistake 2 — Forgetting Braces

For multiple statements, use braces:

\`\`\`c
if (condition)
{
    statement1;
    statement2;
}
\`\`\`

---

## Mistake 3 — Writing an Unnecessary Semicolon

Avoid:

\`\`\`c
if (number > 0);
{
    printf("Positive\\n");
}
\`\`\`

The semicolon terminates the if statement.

Correct:

\`\`\`c
if (number > 0)
{
    printf("Positive\\n");
}
\`\`\`

---

## Mistake 4 — Confusing = and ==

Remember:

\`\`\`text
= 
↓
Assignment

==
↓
Comparison
\`\`\`

---

# Lesson Summary

In this lesson, you learned:

- The if statement is used for decision-making.
- The statements inside an if block execute only when its condition is true.
- Conditions commonly use relational operators.
- Logical operators can combine multiple conditions.
- Zero is false in a logical context.
- Any nonzero value is true in a logical context.
- An if block can contain multiple statements.
- Multiple independent if statements can be used when conditions must be checked separately.
- Braces make the structure of an if statement clear.
- The if statement can be combined with user input and arithmetic operations.

The basic structure is:

\`\`\`text
if (condition)
{
    statements;
}
\`\`\`

The key idea is:

\`\`\`text
Condition
    ↓
True?
 /   \\
Yes   No
 ↓     ↓
Execute Skip
\`\`\`

---

# Module 3 Progress

✓ Lesson 1 — Conditional Statements

→ Lesson 2 — if Statement

  Lesson 3 — if-else Statement

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

Lesson 2 Complete

Next: Lesson 3 — if-else Statement.

`,
};

export default lesson2;
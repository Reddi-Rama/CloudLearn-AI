const lesson1 = {
  id: "lesson1",

  title: "Conditional Statements",

  content: `

# Lesson 1: Conditional Statements

## Introduction

In C programming, a program normally executes statements from top to bottom.

However, real-world programs often need to make decisions.

For example:

- If marks are greater than or equal to 40, display Pass.
- If marks are below 40, display Fail.
- If a number is positive, perform one operation.
- Otherwise, perform another operation.

These decisions are handled using conditional statements.

Conditional statements allow a program to execute different statements depending on whether a condition is true or false.

---

# 1. What Is a Conditional Statement?

A conditional statement allows a program to make a decision based on a condition.

The basic idea is:

\`\`\`text
Condition
    ↓
 ┌─────────┐
 │  True?  │
 └─────────┘
    ↓
   Yes
    ↓
Execute statements
\`\`\`

If the condition is false, the program can skip the statements or execute another block.

---

# 2. Conditions in C

A condition is usually created using relational operators.

For example:

\`\`\`c
marks >= 40
\`\`\`

Other examples:

\`\`\`c
age >= 18
number > 0
price <= 100
value == 10
number != 0
\`\`\`

These expressions produce a logical result.

In C:

\`\`\`text
0
↓
False

Nonzero value
↓
True
\`\`\`

---

# 3. Types of Conditional Statements

C provides several ways to make decisions.

The important conditional structures are:

\`\`\`text
if
if-else
nested if
else-if ladder
switch
conditional operator
\`\`\`

Each structure is useful for a different type of decision.

---

# 4. if Statement

The if statement executes a block of code when a condition is true.

General syntax:

\`\`\`c
if (condition)
{
    statements;
}
\`\`\`

For example:

\`\`\`c
if (marks >= 40)
{
    printf("Pass\\n");
}
\`\`\`

If marks is 40 or greater, the message is displayed.

If the condition is false, the block is skipped.

---

# 5. if-else Statement

The if-else statement provides two possible paths.

General syntax:

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

One of the two blocks is executed.

---

# 6. Nested if

An if statement can be placed inside another if statement.

This is called a nested if.

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

The inner condition is checked only when the outer condition allows execution to reach it.

---

# 7. else-if Ladder

An else-if ladder is useful when there are multiple possible conditions.

General structure:

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

For example:

\`\`\`c
if (marks >= 90)
{
    printf("A\\n");
}
else if (marks >= 75)
{
    printf("B\\n");
}
else if (marks >= 60)
{
    printf("C\\n");
}
else
{
    printf("Fail\\n");
}
\`\`\`

The conditions are checked from top to bottom.

The first true condition determines which block executes.

---

# 8. switch Statement

The switch statement is useful when a program needs to select one option from several fixed choices.

For example:

\`\`\`c
switch (choice)
{
    case 1:
        printf("Add\\n");
        break;

    case 2:
        printf("Subtract\\n");
        break;

    default:
        printf("Invalid choice\\n");
}
\`\`\`

The switch expression is compared with the case values.

---

# 9. Conditional Operator

C also provides the conditional operator:

\`\`\`text
?:
\`\`\`

It provides a compact way to choose between two expressions.

General syntax:

\`\`\`c
condition ? expression1 : expression2
\`\`\`

For example:

\`\`\`c
int result = (marks >= 40) ? 1 : 0;
\`\`\`

If the condition is true, expression1 is selected.

Otherwise, expression2 is selected.

---

# 10. Conditions and Logical Operators

Multiple conditions can be combined using logical operators.

For example:

\`\`\`c
if (age >= 18 && marks >= 40)
{
    printf("Eligible\\n");
}
\`\`\`

Here both conditions must be true.

Another example:

\`\`\`c
if (day == 6 || day == 7)
{
    printf("Weekend\\n");
}
\`\`\`

Here at least one condition must be true.

---

# 11. Decision-Making Flow

A conditional statement can be visualized as:

\`\`\`text
              Start
                ↓
          Check condition
                ↓
          ┌───────────┐
          │   True?   │
          └───────────┘
           /         \\
        Yes           No
         ↓             ↓
   Execute block    Skip/Else
         \\             /
          \\           /
             Continue
\`\`\`

The exact flow depends on the conditional statement being used.

---

# 12. Practical Example

Consider a program that checks whether a number is positive.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 10;

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

The condition:

\`\`\`c
number > 0
\`\`\`

is true because number contains 10.

---

# 13. Conditional Statements With User Input

Conditional statements can be combined with input.

For example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks;

    printf("Enter marks: ");
    scanf("%d", &marks);

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

The result depends on the value entered by the user.

---

# 14. Choosing the Correct Conditional Structure

Use:

\`\`\`text
if
↓
When one condition needs to be checked.

if-else
↓
When there are two possible alternatives.

nested if
↓
When one decision depends on another decision.

else-if ladder
↓
When there are multiple conditions or ranges.

switch
↓
When selecting between several fixed values.

conditional operator
↓
When a simple two-way choice can be expressed compactly.
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Confusing = and ==

Remember:

\`\`\`text
=
↓
Assignment

==
↓
Equality comparison
\`\`\`

For example:

\`\`\`c
if (number == 10)
{
    printf("Number is 10\\n");
}
\`\`\`

---

## Mistake 2 — Forgetting Braces

Although braces can sometimes be omitted for a single statement, using braces makes the structure clearer.

Prefer:

\`\`\`c
if (marks >= 40)
{
    printf("Pass\\n");
}
\`\`\`

---

## Mistake 3 — Using Separate if Statements for Mutually Exclusive Choices

If only one result should be selected, an if-else or else-if ladder is often more appropriate.

---

# Lesson Summary

In this lesson, you learned:

- Conditional statements allow programs to make decisions.
- Conditions commonly use relational operators.
- Zero is false in a logical context.
- Nonzero values are true in a logical context.
- C provides if, if-else, nested if, else-if, switch, and conditional operator structures.
- Different conditional structures are appropriate for different decision-making situations.
- Logical operators can combine multiple conditions.

The key idea is:

\`\`\`text
Condition
    ↓
Decision
    ↓
Execute appropriate statements
\`\`\`

---

# Module 3 Progress

→ Lesson 1 — Conditional Statements

  Lesson 2 — if Statement

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

Lesson 1 Complete

Next: Lesson 2 — if Statement.

`,
};

export default lesson1;
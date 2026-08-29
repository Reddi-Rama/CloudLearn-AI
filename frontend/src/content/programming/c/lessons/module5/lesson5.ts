const lesson5 = {
  id: "lesson5",

  title: "Nested if",

  content: `

# Lesson 5: Nested if

## Introduction

A nested if statement is an if statement placed inside another if statement.

It is useful when one condition must be satisfied before another condition is checked.

For example:

\`\`\`c
int age = 20;
int marks = 75;

if (age >= 18)
{
    if (marks >= 40)
    {
        printf("Eligible\\n");
    }
}
\`\`\`

Here, the inner if is checked only when the outer if condition is true.

The basic structure is:

\`\`\`text
Outer if
   ↓
Condition is true?
   ↓
Inner if
   ↓
Second condition
   ↓
Statement
\`\`\`

---

# 1. What Is a Nested if?

A nested if is an if statement written inside another if statement.

The general syntax is:

\`\`\`c
if (condition1)
{
    if (condition2)
    {
        statements;
    }
}
\`\`\`

The outer if is checked first.

If condition1 is false, the inner if is skipped.

If condition1 is true, the inner if is checked.

---

# 2. Simple Nested if Example

Consider:

\`\`\`c
int age = 20;
int marks = 75;

if (age >= 18)
{
    if (marks >= 40)
    {
        printf("Eligible\\n");
    }
}
\`\`\`

First, the outer condition is checked:

\`\`\`text
age >= 18
20 >= 18
↓
true
\`\`\`

Therefore, the inner if is checked:

\`\`\`text
marks >= 40
75 >= 40
↓
true
\`\`\`

Therefore:

\`\`\`text
Eligible
\`\`\`

is printed.

---

# 3. Execution Flow of Nested if

The execution can be represented as:

\`\`\`text
Start
  ↓
Check outer condition
  ↓
Is it true?
  ├── No → Skip inner if
  │
  └── Yes
       ↓
   Check inner condition
       ↓
   Is it true?
       ├── No → Skip statement
       │
       └── Yes
            ↓
       Execute statement
\`\`\`

The important idea is that the inner condition depends on reaching the inner if.

---

# 4. Nested if With else

An inner if can contain an else statement.

Example:

\`\`\`c
int age = 20;
int marks = 30;

if (age >= 18)
{
    if (marks >= 40)
    {
        printf("Eligible\\n");
    }
    else
    {
        printf("Marks are insufficient\\n");
    }
}
\`\`\`

Here, the outer condition checks the age.

If the age condition is true, the inner condition checks the marks.

Since:

\`\`\`text
30 >= 40
↓
false
\`\`\`

the inner else executes.

Output:

\`\`\`text
Marks are insufficient
\`\`\`

---

# 5. Nested if With Outer else

The outer if can also contain an else.

Example:

\`\`\`c
int age = 16;
int marks = 75;

if (age >= 18)
{
    if (marks >= 40)
    {
        printf("Eligible\\n");
    }
}
else
{
    printf("Age requirement not satisfied\\n");
}
\`\`\`

Since:

\`\`\`text
16 >= 18
↓
false
\`\`\`

the outer else executes.

The inner if is never checked.

---

# 6. Nested if With Both else Statements

Both the outer and inner if statements can have else blocks.

Example:

\`\`\`c
int age = 20;
int marks = 30;

if (age >= 18)
{
    if (marks >= 40)
    {
        printf("Eligible\\n");
    }
    else
    {
        printf("Marks are insufficient\\n");
    }
}
else
{
    printf("Age requirement not satisfied\\n");
}
\`\`\`

There are two separate decisions:

1. Check the age.
2. If the age is valid, check the marks.

This allows the program to give a more specific result.

---

# 7. Multiple Levels of Nested if

An if statement can contain another if statement, which can contain another if statement.

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

Here there are three levels of decision making.

The innermost statement executes only when all three conditions are true.

---

# 8. Example With Three Conditions

Consider:

\`\`\`c
int age = 20;
int marks = 80;
int attendance = 85;

if (age >= 18)
{
    if (marks >= 40)
    {
        if (attendance >= 75)
        {
            printf("Eligible\\n");
        }
    }
}
\`\`\`

The execution is:

\`\`\`text
age >= 18
   ↓
marks >= 40
   ↓
attendance >= 75
   ↓
Eligible
\`\`\`

Since all three conditions are true, the output is:

\`\`\`text
Eligible
\`\`\`

---

# 9. Nested if vs Logical AND

A nested if can sometimes be replaced by the logical AND operator.

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

Using logical AND:

\`\`\`c
if (age >= 18 && marks >= 40)
{
    printf("Eligible\\n");
}
\`\`\`

Both versions require both conditions to be true.

However, nested if may be useful when different actions are required at different stages.

---

# 10. When Nested if Is Useful

Nested if is useful when the second decision should only be made after the first decision succeeds.

For example:

\`\`\`c
if (accountExists)
{
    if (passwordCorrect)
    {
        printf("Access granted\\n");
    }
}
\`\`\`

The password condition is checked only when the account exists.

Another example:

\`\`\`c
if (age >= 18)
{
    if (hasPermission)
    {
        printf("Access allowed\\n");
    }
}
\`\`\`

The second condition depends on the first condition.

---

# 11. Nested if With else-if

A nested if can contain an else-if ladder.

Example:

\`\`\`c
int marks = 85;

if (marks >= 40)
{
    if (marks >= 75)
    {
        printf("Distinction\\n");
    }
    else if (marks >= 60)
    {
        printf("First Class\\n");
    }
    else
    {
        printf("Pass\\n");
    }
}
else
{
    printf("Fail\\n");
}
\`\`\`

The outer if first determines whether the marks are at least 40.

Then the inner structure determines the category.

---

# 12. Matching else With Nested if

An important rule in C is that an else belongs to the nearest unmatched if.

Consider:

\`\`\`c
if (a)
{
    if (b)
    {
        printf("A and B\\n");
    }
    else
    {
        printf("A but not B\\n");
    }
}
\`\`\`

The else belongs to:

\`\`\`c
if (b)
\`\`\`

because it is the nearest unmatched if.

Using braces makes this relationship clear.

---

# 13. Importance of Braces

Braces are strongly recommended when writing nested if statements.

Instead of:

\`\`\`c
if (age >= 18)
    if (marks >= 40)
        printf("Eligible\\n");
\`\`\`

prefer:

\`\`\`c
if (age >= 18)
{
    if (marks >= 40)
    {
        printf("Eligible\\n");
    }
}
\`\`\`

The second version clearly shows the nesting structure.

---

# 14. Practical Example — Eligibility

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 20;
    int marks = 75;

    if (age >= 18)
    {
        if (marks >= 40)
        {
            printf("Eligible\\n");
        }
        else
        {
            printf("Marks are insufficient\\n");
        }
    }
    else
    {
        printf("Age requirement not satisfied\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Eligible
\`\`\`

---

# 15. Practical Example — Number Classification

A nested if can be used to classify a number.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 10;

    if (number >= 0)
    {
        if (number == 0)
        {
            printf("Zero\\n");
        }
        else
        {
            printf("Positive number\\n");
        }
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
Positive number
\`\`\`

The outer if checks whether the number is non-negative.

The inner if then distinguishes zero from positive numbers.

---

# 16. Practical Example — Largest of Three Numbers

Nested if statements can be used to find the largest of three numbers.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 25;
    int b = 40;
    int c = 15;

    if (a >= b)
    {
        if (a >= c)
        {
            printf("a is largest\\n");
        }
        else
        {
            printf("c is largest\\n");
        }
    }
    else
    {
        if (b >= c)
        {
            printf("b is largest\\n");
        }
        else
        {
            printf("c is largest\\n");
        }
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
b is largest
\`\`\`

---

# 17. Nested if With Input

Nested if statements can work with values entered by the user.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age;
    int marks;

    printf("Enter age: ");
    scanf("%d", &age);

    printf("Enter marks: ");
    scanf("%d", &marks);

    if (age >= 18)
    {
        if (marks >= 40)
        {
            printf("Eligible\\n");
        }
        else
        {
            printf("Marks are insufficient\\n");
        }
    }
    else
    {
        printf("Age requirement not satisfied\\n");
    }

    return 0;
}
\`\`\`

The conditions depend on the values entered by the user.

---

# 18. Nested if With Logical Operators

Nested if is not the only way to handle multiple conditions.

For example:

\`\`\`c
if (age >= 18)
{
    if (marks >= 40)
    {
        printf("Eligible\\n");
    }
}
\`\`\`

can be written as:

\`\`\`c
if (age >= 18 && marks >= 40)
{
    printf("Eligible\\n");
}
\`\`\`

The second version is shorter.

However, nested if can be useful when each condition has its own action.

For example:

\`\`\`c
if (age >= 18)
{
    if (marks >= 40)
    {
        printf("Eligible\\n");
    }
    else
    {
        printf("Marks are insufficient\\n");
    }
}
else
{
    printf("Age requirement not satisfied\\n");
}
\`\`\`

---

# 19. Avoid Excessive Nesting

Although nested if statements are useful, too many levels can make a program difficult to read.

For example:

\`\`\`c
if (condition1)
{
    if (condition2)
    {
        if (condition3)
        {
            if (condition4)
            {
                if (condition5)
                {
                    printf("Success\\n");
                }
            }
        }
    }
}
\`\`\`

Such code can become difficult to maintain.

When possible, consider using:

- Logical operators
- else-if structures
- Separate functions
- Simpler decision structures

---

# 20. Decision Tree Representation

A nested if structure can be represented as a decision tree.

For example:

\`\`\`text
             age >= 18?
              /      \\
            Yes       No
             |         |
        marks >= 40   Not eligible
          /     \\
        Yes      No
         |        |
     Eligible   Marks insufficient
\`\`\`

This representation makes the flow of decisions easier to understand.

---

# 21. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 21;
    int marks = 82;
    int attendance = 80;

    if (age >= 18)
    {
        if (marks >= 40)
        {
            if (attendance >= 75)
            {
                printf("Student is eligible\\n");
            }
            else
            {
                printf("Attendance requirement not satisfied\\n");
            }
        }
        else
        {
            printf("Marks requirement not satisfied\\n");
        }
    }
    else
    {
        printf("Age requirement not satisfied\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Student is eligible
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting Braces

Nested structures can become difficult to understand without braces.

Prefer:

\`\`\`c
if (condition1)
{
    if (condition2)
    {
        printf("Valid\\n");
    }
}
\`\`\`

---

## Mistake 2 — Making the Inner if Independent

If the second condition depends on the first, it should be placed inside the outer if.

For example:

\`\`\`c
if (age >= 18)
{
    if (marks >= 40)
    {
        printf("Eligible\\n");
    }
}
\`\`\`

---

## Mistake 3 — Misunderstanding else

Remember:

\`\`\`text
else
↓
belongs to the nearest unmatched if
\`\`\`

Braces make the intended structure clearer.

---

## Mistake 4 — Excessive Nesting

Avoid unnecessary levels of nested if statements.

If several conditions simply need to be true, consider:

\`\`\`c
if (age >= 18 && marks >= 40)
{
    printf("Eligible\\n");
}
\`\`\`

---

# Lesson Summary

In this lesson, you learned:

- A nested if is an if statement inside another if statement.
- The outer condition is checked first.
- The inner if is reached only when the outer condition is true.
- Nested if statements can contain else and else-if structures.
- Multiple levels of nesting are possible.
- Braces make nested conditions easier to understand.
- Nested if can sometimes be replaced with logical AND.
- Nested if is useful when one decision depends on another.
- Excessive nesting can make code difficult to read.
- Decision trees can help visualize nested conditions.

The key idea is:

\`\`\`text
Outer Condition
      ↓
   true?
      ↓
Inner Condition
      ↓
   true?
      ↓
Execute Statement
\`\`\`

---

# Module 3 Progress

✓ Lesson 1 — Conditional Statements

✓ Lesson 2 — if Statement

✓ Lesson 3 — if-else Statement

✓ Lesson 4 — else-if Ladder

→ Lesson 5 — Nested if

  Lesson 6 — switch Statement
  Lesson 7 — Conditional Operator
  Lesson 8 — for Loop
  Lesson 9 — while Loop
  Lesson 10 — do-while Loop
  Lesson 11 — Nested Loops
  Lesson 12 — break
  Lesson 13 — continue
  Lesson 14 — goto
  Lesson 15 — Loop Control

Lesson 5 Complete

Next: Lesson 6 — switch Statement.

`,
};

export default lesson5;
const lesson6 = {
  id: "lesson6",

  title: "switch Statement",

  content: `

# Lesson 6: switch Statement

## Introduction

The switch statement is a selection statement used when a program needs to choose one block of code from several possible options.

It is especially useful when a single expression is compared against several constant values.

For example:

\`\`\`c
int choice = 2;

switch (choice)
{
    case 1:
        printf("Option 1\\n");
        break;

    case 2:
        printf("Option 2\\n");
        break;

    case 3:
        printf("Option 3\\n");
        break;

    default:
        printf("Invalid option\\n");
}
\`\`\`

Since choice is 2, case 2 is selected.

---

# 1. What Is a switch Statement?

A switch statement allows a program to select one case from multiple possible cases.

General syntax:

\`\`\`c
switch (expression)
{
    case constant1:
        statements;
        break;

    case constant2:
        statements;
        break;

    case constant3:
        statements;
        break;

    default:
        statements;
}
\`\`\`

The expression is evaluated and compared with the case values.

---

# 2. Basic switch Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice = 2;

    switch (choice)
    {
        case 1:
            printf("Option 1\\n");
            break;

        case 2:
            printf("Option 2\\n");
            break;

        case 3:
            printf("Option 3\\n");
            break;

        default:
            printf("Invalid option\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Option 2
\`\`\`

---

# 3. How switch Works

The execution process is:

\`\`\`text
Evaluate expression
       ↓
Compare with case values
       ↓
Find matching case
       ↓
Execute statements
       ↓
break
       ↓
Exit switch
\`\`\`

If no case matches, the default case is executed if it is present.

---

# 4. case Labels

Each case represents a possible value of the switch expression.

Example:

\`\`\`c
switch (number)
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

If:

\`\`\`c
number = 2;
\`\`\`

then case 2 is selected.

---

# 5. break Statement

The break statement terminates the switch statement.

Example:

\`\`\`c
switch (choice)
{
    case 1:
        printf("One\\n");
        break;

    case 2:
        printf("Two\\n");
        break;
}
\`\`\`

When case 1 is selected, its statements execute and break exits the switch.

---

# 6. What Happens Without break?

If break is omitted, execution continues into the following case.

This is called **fall-through**.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 1;

    switch (number)
    {
        case 1:
            printf("One\\n");

        case 2:
            printf("Two\\n");

        case 3:
            printf("Three\\n");
            break;
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
One
Two
Three
\`\`\`

Because there is no break after case 1 or case 2.

---

# 7. default Case

The default case is executed when none of the case values match.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice = 5;

    switch (choice)
    {
        case 1:
            printf("Option 1\\n");
            break;

        case 2:
            printf("Option 2\\n");
            break;

        default:
            printf("Invalid choice\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Invalid choice
\`\`\`

The default case is optional, but it is useful for handling unexpected values.

---

# 8. Multiple Cases

A switch can contain many case labels.

Example:

\`\`\`c
switch (day)
{
    case 1:
        printf("Monday\\n");
        break;

    case 2:
        printf("Tuesday\\n");
        break;

    case 3:
        printf("Wednesday\\n");
        break;

    case 4:
        printf("Thursday\\n");
        break;

    case 5:
        printf("Friday\\n");
        break;

    case 6:
        printf("Saturday\\n");
        break;

    case 7:
        printf("Sunday\\n");
        break;

    default:
        printf("Invalid day\\n");
}
\`\`\`

---

# 9. switch With Character Values

A switch expression can also be a character.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    char grade = 'A';

    switch (grade)
    {
        case 'A':
            printf("Excellent\\n");
            break;

        case 'B':
            printf("Good\\n");
            break;

        case 'C':
            printf("Average\\n");
            break;

        case 'D':
            printf("Pass\\n");
            break;

        default:
            printf("Invalid grade\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Excellent
\`\`\`

---

# 10. switch With User Input

A switch is commonly used with menu-driven programs.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice;

    printf("1. Add\\n");
    printf("2. Subtract\\n");
    printf("3. Multiply\\n");
    printf("4. Divide\\n");

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
            printf("Multiplication selected\\n");
            break;

        case 4:
            printf("Division selected\\n");
            break;

        default:
            printf("Invalid choice\\n");
    }

    return 0;
}
\`\`\`

---

# 11. switch With Arithmetic Operations

A switch can be used to select an arithmetic operation.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 20;
    int b = 5;
    int choice;

    printf("1. Addition\\n");
    printf("2. Subtraction\\n");
    printf("3. Multiplication\\n");
    printf("4. Division\\n");

    printf("Enter choice: ");
    scanf("%d", &choice);

    switch (choice)
    {
        case 1:
            printf("Result = %d\\n", a + b);
            break;

        case 2:
            printf("Result = %d\\n", a - b);
            break;

        case 3:
            printf("Result = %d\\n", a * b);
            break;

        case 4:
            if (b != 0)
            {
                printf("Result = %d\\n", a / b);
            }
            else
            {
                printf("Division by zero is not allowed\\n");
            }
            break;

        default:
            printf("Invalid choice\\n");
    }

    return 0;
}
\`\`\`

---

# 12. Grouping Multiple Cases

Multiple case labels can execute the same block of code.

Example:

\`\`\`c
switch (day)
{
    case 6:
    case 7:
        printf("Weekend\\n");
        break;

    default:
        printf("Weekday\\n");
}
\`\`\`

If day is 6 or 7, the same statement executes.

This is intentional fall-through.

---

# 13. switch vs if-else

A switch is useful when a single expression is compared against specific values.

Example:

\`\`\`c
switch (choice)
{
    case 1:
        printf("One\\n");
        break;

    case 2:
        printf("Two\\n");
        break;
}
\`\`\`

An if-else statement is more suitable for ranges and complex conditions.

Example:

\`\`\`c
if (marks >= 90)
{
    printf("A\\n");
}
else if (marks >= 75)
{
    printf("B\\n");
}
\`\`\`

The switch statement does not replace if-else in every situation.

---

# 14. What Can Be Used in switch?

The controlling expression of a traditional C switch must have an integer type, including character and enumeration types.

For example:

\`\`\`c
int choice = 2;

switch (choice)
{
    case 1:
        printf("One\\n");
        break;

    case 2:
        printf("Two\\n");
        break;
}
\`\`\`

A character can also be used because char is an integer type.

\`\`\`c
char option = 'A';

switch (option)
{
    case 'A':
        printf("Selected A\\n");
        break;

    case 'B':
        printf("Selected B\\n");
        break;
}
\`\`\`

---

# 15. Case Values Must Be Constant

Case labels must use integer constant expressions.

Correct:

\`\`\`c
case 1:
case 2:
case 10:
\`\`\`

A variable cannot normally be used directly as a case label:

\`\`\`c
int x = 2;

case x:
\`\`\`

This is not a valid case label.

---

# 16. Duplicate Case Values

Two cases cannot have the same value.

Incorrect:

\`\`\`c
switch (choice)
{
    case 1:
        printf("First\\n");
        break;

    case 1:
        printf("Second\\n");
        break;
}
\`\`\`

The compiler will report a duplicate case value.

Each case value must be unique within the same switch.

---

# 17. Nested switch

A switch statement can contain another switch statement.

Example:

\`\`\`c
switch (category)
{
    case 1:

        switch (choice)
        {
            case 1:
                printf("Category 1 - Option 1\\n");
                break;

            case 2:
                printf("Category 1 - Option 2\\n");
                break;
        }

        break;
}
\`\`\`

Nested switch statements will be studied separately in the next lesson.

---

# 18. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int day;

    printf("Enter day number (1-7): ");
    scanf("%d", &day);

    switch (day)
    {
        case 1:
            printf("Monday\\n");
            break;

        case 2:
            printf("Tuesday\\n");
            break;

        case 3:
            printf("Wednesday\\n");
            break;

        case 4:
            printf("Thursday\\n");
            break;

        case 5:
            printf("Friday\\n");
            break;

        case 6:
            printf("Saturday\\n");
            break;

        case 7:
            printf("Sunday\\n");
            break;

        default:
            printf("Invalid day number\\n");
    }

    return 0;
}
\`\`\`

Example output:

\`\`\`text
Enter day number (1-7): 4
Thursday
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting break

Without break, execution may fall through into later cases.

---

## Mistake 2 — Using Conditions in case

This is not the normal use of switch:

\`\`\`c
case age >= 18:
\`\`\`

Use if-else for conditions and ranges.

---

## Mistake 3 — Duplicate Case Values

Do not write:

\`\`\`c
case 1:
case 1:
\`\`\`

Each case value must be unique.

---

## Mistake 4 — Forgetting default

A default case is useful for handling values that do not match any case.

---

# Lesson Summary

In this lesson, you learned:

- switch is a selection statement.
- It selects one case based on the value of an expression.
- case labels represent possible values.
- break normally exits the switch.
- Omitting break can cause fall-through.
- default handles unmatched values.
- Multiple cases can intentionally share the same block.
- switch can work with integer and character values.
- Case labels must be integer constant expressions.
- Duplicate case values are not allowed.
- switch is especially useful for menu-driven programs.
- if-else is generally better for ranges and complex conditions.

The basic structure is:

\`\`\`text
switch (expression)
       ↓
   Compare cases
       ↓
  Matching case
       ↓
    Execute
       ↓
      break
       ↓
      Exit
\`\`\`

---

# Module 3 Progress

✓ Lesson 1 — Conditional Statements

✓ Lesson 2 — if Statement

✓ Lesson 3 — if-else Statement

✓ Lesson 4 — Nested if

✓ Lesson 5 — else-if Ladder

→ Lesson 6 — switch Statement

  Lesson 7 — Nested switch

  Lesson 8 — Conditional Operator

  Lesson 9 — while Loop

  Lesson 10 — do-while Loop

  Lesson 11 — for Loop

  Lesson 12 — Nested Loops

  Lesson 13 — break Statement

  Lesson 14 — continue Statement

  Lesson 15 — Mini Project — Menu-Driven Program

Lesson 6 Complete

Next: Lesson 7 — Nested switch.

`,
};

export default lesson6;
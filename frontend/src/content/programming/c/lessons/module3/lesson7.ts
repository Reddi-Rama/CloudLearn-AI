const lesson7 = {
  id: "lesson7",

  title: "Nested switch",

  content: `

# Lesson 7: Nested switch

## Introduction

A nested switch is a switch statement placed inside another switch statement.

It is useful when one selection depends on another selection.

For example, a program may first ask the user to select a category and then use another switch to select an option within that category.

Example:

\`\`\`c
switch (category)
{
    case 1:
        switch (choice)
        {
            case 1:
                printf("Option 1\\n");
                break;

            case 2:
                printf("Option 2\\n");
                break;
        }
        break;
}
\`\`\`

Here, the inner switch is executed only when the outer switch selects the appropriate case.

---

# 1. What Is a Nested switch?

A nested switch is a switch statement written inside another switch statement.

General structure:

\`\`\`c
switch (expression1)
{
    case value1:

        switch (expression2)
        {
            case valueA:
                statements;
                break;

            case valueB:
                statements;
                break;
        }

        break;

    case value2:
        statements;
        break;
}
\`\`\`

The outer switch controls the first level of selection.

The inner switch controls another level of selection.

---

# 2. Simple Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int category = 1;
    int choice = 2;

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

                default:
                    printf("Invalid option\\n");
            }

            break;

        default:
            printf("Invalid category\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Category 1 - Option 2
\`\`\`

The outer switch selects category 1.

The inner switch then selects option 2.

---

# 3. How Nested switch Works

The execution flow is:

\`\`\`text
Start
  ↓
Evaluate outer switch
  ↓
Select outer case
  ↓
Evaluate inner switch
  ↓
Select inner case
  ↓
Execute statements
  ↓
Continue after inner switch
  ↓
Continue after outer switch
\`\`\`

The inner switch is not evaluated unless execution reaches it.

---

# 4. Outer switch With Multiple Cases

An outer switch can contain several cases.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int category = 2;
    int choice = 1;

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

                default:
                    printf("Invalid option\\n");
            }

            break;

        case 2:

            switch (choice)
            {
                case 1:
                    printf("Category 2 - Option 1\\n");
                    break;

                case 2:
                    printf("Category 2 - Option 2\\n");
                    break;

                default:
                    printf("Invalid option\\n");
            }

            break;

        default:
            printf("Invalid category\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Category 2 - Option 1
\`\`\`

---

# 5. Nested switch With User Input

Nested switches can be used with values entered by the user.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int category;
    int choice;

    printf("1. Food\\n");
    printf("2. Drinks\\n");
    printf("Enter category: ");
    scanf("%d", &category);

    printf("Enter choice: ");
    scanf("%d", &choice);

    switch (category)
    {
        case 1:

            switch (choice)
            {
                case 1:
                    printf("Pizza selected\\n");
                    break;

                case 2:
                    printf("Sandwich selected\\n");
                    break;

                default:
                    printf("Invalid food choice\\n");
            }

            break;

        case 2:

            switch (choice)
            {
                case 1:
                    printf("Juice selected\\n");
                    break;

                case 2:
                    printf("Water selected\\n");
                    break;

                default:
                    printf("Invalid drink choice\\n");
            }

            break;

        default:
            printf("Invalid category\\n");
    }

    return 0;
}
\`\`\`

---

# 6. Nested switch and break

The break statement belongs to the switch in which it appears.

Consider:

\`\`\`c
switch (category)
{
    case 1:

        switch (choice)
        {
            case 1:
                printf("Option 1\\n");
                break;

            case 2:
                printf("Option 2\\n");
                break;
        }

        break;
}
\`\`\`

The first break exits the inner switch.

The second break exits the outer switch.

This distinction is important.

---

# 7. Inner switch Without break

If the inner switch case does not contain break, execution can fall through to the following inner cases.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int category = 1;
    int choice = 1;

    switch (category)
    {
        case 1:

            switch (choice)
            {
                case 1:
                    printf("Option 1\\n");

                case 2:
                    printf("Option 2\\n");
                    break;
            }

            break;
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Option 1
Option 2
\`\`\`

The inner switch falls through from case 1 to case 2.

---

# 8. default in Nested switch

Both the outer and inner switch can have default cases.

Example:

\`\`\`c
switch (category)
{
    case 1:

        switch (choice)
        {
            case 1:
                printf("Option 1\\n");
                break;

            default:
                printf("Invalid option\\n");
        }

        break;

    default:
        printf("Invalid category\\n");
}
\`\`\`

The outer default handles an invalid category.

The inner default handles an invalid option within a valid category.

---

# 9. Practical Example — Main Menu and Submenu

\`\`\`c
#include <stdio.h>

int main(void)
{
    int mainChoice;
    int subChoice;

    printf("===== MAIN MENU =====\\n");
    printf("1. Account\\n");
    printf("2. Settings\\n");
    printf("Enter choice: ");
    scanf("%d", &mainChoice);

    switch (mainChoice)
    {
        case 1:

            printf("===== ACCOUNT =====\\n");
            printf("1. View account\\n");
            printf("2. Update account\\n");
            printf("Enter choice: ");
            scanf("%d", &subChoice);

            switch (subChoice)
            {
                case 1:
                    printf("Viewing account\\n");
                    break;

                case 2:
                    printf("Updating account\\n");
                    break;

                default:
                    printf("Invalid account option\\n");
            }

            break;

        case 2:

            printf("===== SETTINGS =====\\n");
            printf("1. Display settings\\n");
            printf("2. System settings\\n");
            printf("Enter choice: ");
            scanf("%d", &subChoice);

            switch (subChoice)
            {
                case 1:
                    printf("Display settings selected\\n");
                    break;

                case 2:
                    printf("System settings selected\\n");
                    break;

                default:
                    printf("Invalid settings option\\n");
            }

            break;

        default:
            printf("Invalid main menu choice\\n");
    }

    return 0;
}
\`\`\`

---

# 10. Nested switch vs Nested if

A nested switch is useful when decisions are based on discrete values.

Example:

\`\`\`c
switch (category)
{
    case 1:
        switch (choice)
        {
            case 1:
                printf("Selected\\n");
                break;
        }
        break;
}
\`\`\`

A nested if is useful when decisions involve conditions.

Example:

\`\`\`c
if (age >= 18)
{
    if (marks >= 40)
    {
        printf("Eligible\\n");
    }
}
\`\`\`

The choice depends on the type of decision the program needs to make.

---

# 11. Multiple Levels of Nested switch

Technically, a switch can contain another switch, and that switch can contain another switch.

Example:

\`\`\`c
switch (a)
{
    case 1:

        switch (b)
        {
            case 1:

                switch (c)
                {
                    case 1:
                        printf("All selections matched\\n");
                        break;
                }

                break;
        }

        break;
}
\`\`\`

However, too many nesting levels can make the program difficult to read.

Keep the structure as simple as possible.

---

# 12. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int department;
    int option;

    printf("===== DEPARTMENTS =====\\n");
    printf("1. Academic\\n");
    printf("2. Administration\\n");
    printf("Enter department: ");
    scanf("%d", &department);

    switch (department)
    {
        case 1:

            printf("===== ACADEMIC =====\\n");
            printf("1. Courses\\n");
            printf("2. Exams\\n");
            printf("Enter option: ");
            scanf("%d", &option);

            switch (option)
            {
                case 1:
                    printf("Courses selected\\n");
                    break;

                case 2:
                    printf("Exams selected\\n");
                    break;

                default:
                    printf("Invalid academic option\\n");
            }

            break;

        case 2:

            printf("===== ADMINISTRATION =====\\n");
            printf("1. Fees\\n");
            printf("2. Documents\\n");
            printf("Enter option: ");
            scanf("%d", &option);

            switch (option)
            {
                case 1:
                    printf("Fees selected\\n");
                    break;

                case 2:
                    printf("Documents selected\\n");
                    break;

                default:
                    printf("Invalid administration option\\n");
            }

            break;

        default:
            printf("Invalid department\\n");
    }

    return 0;
}
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Confusing Inner and Outer break

Remember:

\`\`\`c
break;
\`\`\`

inside the inner switch exits the inner switch.

It does not automatically execute as a break for the outer switch.

---

## Mistake 2 — Forgetting break in Inner Cases

Without break, the inner switch can fall through to later cases.

---

## Mistake 3 — Excessive Nesting

Avoid creating many levels of nested switches when a simpler design can express the same logic.

---

## Mistake 4 — Forgetting default

Use default when invalid or unexpected selections need to be handled.

---

# Lesson Summary

In this lesson, you learned:

- A nested switch is a switch statement inside another switch statement.
- The outer switch performs the first selection.
- The inner switch performs another selection.
- The inner switch executes only when execution reaches it.
- break exits the switch in which it occurs.
- Inner and outer switches can each have their own default case.
- Fall-through can occur when break is omitted.
- Nested switches are useful for menus, categories, and subcategories.
- Excessive nesting can reduce readability.

The basic structure is:

\`\`\`text
Outer switch
     ↓
  Outer case
     ↓
Inner switch
     ↓
 Inner case
     ↓
 Execute
\`\`\`

---

# Module 3 Progress

✓ Lesson 1 — Conditional Statements

✓ Lesson 2 — if Statement

✓ Lesson 3 — if-else Statement

✓ Lesson 4 — Nested if

✓ Lesson 5 — else-if Ladder

✓ Lesson 6 — switch Statement

→ Lesson 7 — Nested switch

  Lesson 8 — Conditional Operator

  Lesson 9 — while Loop

  Lesson 10 — do-while Loop

  Lesson 11 — for Loop

  Lesson 12 — Nested Loops

  Lesson 13 — break Statement

  Lesson 14 — continue Statement

  Lesson 15 — Mini Project — Menu-Driven Program

Lesson 7 Complete

Next: Lesson 8 — Conditional Operator.

`,
};

export default lesson7;
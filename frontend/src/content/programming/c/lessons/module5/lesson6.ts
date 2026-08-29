const lesson6 = {
  id: "lesson6",

  title: "switch Statement",

  content: `

# Lesson 6: switch Statement

## Introduction

The switch statement is a decision-making statement in C.

It is useful when a program needs to compare one expression against several possible constant values.

For example:

\`\`\`c
int choice = 2;

switch (choice)
{
    case 1:
        printf("Add\\n");
        break;

    case 2:
        printf("Subtract\\n");
        break;

    case 3:
        printf("Multiply\\n");
        break;

    default:
        printf("Invalid choice\\n");
}
\`\`\`

Here, the value of choice is compared with the case values.

Since:

\`\`\`text
choice = 2
\`\`\`

the second case is selected.

---

# 1. What Is a switch Statement?

A switch statement allows a program to select one block of code from several possible cases.

The general syntax is:

\`\`\`c
switch (expression)
{
    case constant1:
        statements;
        break;

    case constant2:
        statements;
        break;

    default:
        statements;
}
\`\`\`

The expression is evaluated and compared with the case constants.

---

# 2. Basic switch Example

Consider:

\`\`\`c
int day = 2;

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

    default:
        printf("Invalid day\\n");
}
\`\`\`

Since:

\`\`\`text
day = 2
\`\`\`

the matching case is:

\`\`\`text
case 2
\`\`\`

Therefore:

\`\`\`text
Tuesday
\`\`\`

is printed.

---

# 3. The switch Expression

The expression inside switch determines which case is selected.

For example:

\`\`\`c
switch (choice)
\`\`\`

The expression is evaluated when the switch statement is entered.

The resulting value is compared against the case values.

---

# 4. case Labels

A case label specifies a possible value.

Example:

\`\`\`c
case 1:
    printf("One\\n");
    break;
\`\`\`

If the switch expression equals 1, this case is selected.

Another example:

\`\`\`c
case 10:
    printf("Ten\\n");
    break;
\`\`\`

Case labels must be integer constant expressions.

---

# 5. The break Statement

The break statement is commonly used at the end of a case.

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

The break statement exits the switch statement.

Without break, execution may continue into the following case.

---

# 6. What Happens Without break?

Consider:

\`\`\`c
int number = 1;

switch (number)
{
    case 1:
        printf("One\\n");

    case 2:
        printf("Two\\n");

    case 3:
        printf("Three\\n");
}
\`\`\`

Since case 1 matches, execution begins at case 1.

Because there is no break, execution continues into case 2 and case 3.

Output:

\`\`\`text
One
Two
Three
\`\`\`

This behavior is called fall-through.

---

# 7. Fall-Through

Fall-through means that after a matching case begins executing, execution continues into subsequent cases until a break or the end of the switch is reached.

For example:

\`\`\`c
switch (number)
{
    case 1:
        printf("One\\n");

    case 2:
        printf("Two\\n");
        break;
}
\`\`\`

If number is 1, the output is:

\`\`\`text
One
Two
\`\`\`

Fall-through can be useful when it is intentional.

---

# 8. Using Multiple Cases Together

Multiple case labels can execute the same block of code.

For example:

\`\`\`c
int day = 6;

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

This is a common way to group multiple choices.

---

# 9. The default Label

The default label is executed when no case matches.

Example:

\`\`\`c
int choice = 10;

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
\`\`\`

Since there is no case 10, the default section executes.

Output:

\`\`\`text
Invalid choice
\`\`\`

The default label is optional.

---

# 10. switch With User Input

A switch statement can be combined with scanf().

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice;

    printf("Enter choice: ");
    scanf("%d", &choice);

    switch (choice)
    {
        case 1:
            printf("Add\\n");
            break;

        case 2:
            printf("Subtract\\n");
            break;

        case 3:
            printf("Multiply\\n");
            break;

        case 4:
            printf("Divide\\n");
            break;

        default:
            printf("Invalid choice\\n");
    }

    return 0;
}
\`\`\`

The selected operation depends on the value entered by the user.

---

# 11. switch With Characters

A switch expression can also use a character.

Example:

\`\`\`c
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

    default:
        printf("Invalid grade\\n");
}
\`\`\`

The character value is compared with the case labels.

---

# 12. switch vs if-else

Both switch and if-else are used for decision making, but they are useful in different situations.

A switch is suitable for several exact choices:

\`\`\`c
switch (choice)
{
    case 1:
        printf("Add\\n");
        break;

    case 2:
        printf("Subtract\\n");
        break;

    case 3:
        printf("Multiply\\n");
        break;
}
\`\`\`

An if-else ladder is generally better for ranges and complex conditions:

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

---

# 13. switch and Ranges

A standard switch statement is not designed to directly express range conditions such as:

\`\`\`text
marks >= 75
marks < 90
\`\`\`

For range-based decisions, an if-else ladder is generally more suitable.

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
else if (marks >= 60)
{
    printf("C\\n");
}
else
{
    printf("D\\n");
}
\`\`\`

---

# 14. switch Case Values

Case labels must be integer constant expressions.

For example:

\`\`\`c
#define OPTION 2

switch (choice)
{
    case OPTION:
        printf("Selected\\n");
        break;
}
\`\`\`

A normal variable cannot be used directly as a case label.

For example:

\`\`\`c
int value = 2;

switch (choice)
{
    case value:
        printf("Selected\\n");
        break;
}
\`\`\`

This is invalid because value is not an integer constant expression.

---

# 15. Duplicate Case Values

Two case labels cannot have the same value within one switch.

Incorrect:

\`\`\`c
switch (number)
{
    case 1:
        printf("One\\n");
        break;

    case 1:
        printf("Another One\\n");
        break;
}
\`\`\`

The value 1 appears twice.

This results in a compilation error.

---

# 16. Nested switch

A switch statement can contain another switch statement.

Example:

\`\`\`c
int category = 1;
int choice = 2;

switch (category)
{
    case 1:
        switch (choice)
        {
            case 1:
                printf("Category 1, Choice 1\\n");
                break;

            case 2:
                printf("Category 1, Choice 2\\n");
                break;
        }
        break;

    default:
        printf("Invalid category\\n");
}
\`\`\`

Nested switches are possible, but excessive nesting can make programs harder to read.

---

# 17. switch With break

A typical switch structure is:

\`\`\`c
switch (expression)
{
    case 1:
        statements;
        break;

    case 2:
        statements;
        break;

    default:
        statements;
}
\`\`\`

The break statements prevent unintended fall-through.

---

# 18. Practical Example — Menu

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice = 3;

    printf("1. Add\\n");
    printf("2. Subtract\\n");
    printf("3. Multiply\\n");
    printf("4. Divide\\n");

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

Output:

\`\`\`text
1. Add
2. Subtract
3. Multiply
4. Divide
Multiplication selected
\`\`\`

---

# 19. Practical Example — Days

\`\`\`c
#include <stdio.h>

int main(void)
{
    int day = 3;

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

    return 0;
}
\`\`\`

Output:

\`\`\`text
Wednesday
\`\`\`

---

# 20. Practical Example — Calculator

A switch statement can be used to select an arithmetic operation.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 20;
    int b = 5;
    char operator = '+';

    switch (operator)
    {
        case '+':
            printf("Result = %d\\n", a + b);
            break;

        case '-':
            printf("Result = %d\\n", a - b);
            break;

        case '*':
            printf("Result = %d\\n", a * b);
            break;

        case '/':
            if (b != 0)
            {
                printf("Result = %d\\n", a / b);
            }
            else
            {
                printf("Cannot divide by zero\\n");
            }
            break;

        default:
            printf("Invalid operator\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Result = 25
\`\`\`

---

# 21. switch Execution Flow

The execution process can be represented as:

\`\`\`text
Evaluate expression
       ↓
Compare with case values
       ↓
Matching case?
   /          \\
 Yes           No
  ↓             ↓
Execute       Check cases
case             ↓
  ↓           No match
break?            ↓
  ↓            default
Exit              ↓
switch         Exit switch
\`\`\`

---

# 22. Intentional Fall-Through

Fall-through can be intentionally used to group cases.

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

If day is 6, execution reaches case 6 and then continues to case 7.

Since case 7 contains the common statement, "Weekend" is printed.

---

# 23. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice;

    printf("Enter a number from 1 to 3: ");
    scanf("%d", &choice);

    switch (choice)
    {
        case 1:
            printf("You selected One\\n");
            break;

        case 2:
            printf("You selected Two\\n");
            break;

        case 3:
            printf("You selected Three\\n");
            break;

        default:
            printf("Invalid selection\\n");
    }

    return 0;
}
\`\`\`

If the user enters:

\`\`\`text
2
\`\`\`

the output is:

\`\`\`text
You selected Two
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting break

Without break, execution can fall through into later cases.

Use:

\`\`\`c
case 1:
    printf("One\\n");
    break;
\`\`\`

when fall-through is not intended.

---

## Mistake 2 — Using Variables as Case Labels

Incorrect:

\`\`\`c
int value = 2;

switch (choice)
{
    case value:
        printf("Selected\\n");
        break;
}
\`\`\`

Case labels must be integer constant expressions.

---

## Mistake 3 — Duplicate Case Values

Do not write:

\`\`\`c
case 1:
    ...
case 1:
    ...
\`\`\`

Each case value must be unique within the switch.

---

## Mistake 4 — Expecting switch to Handle General Conditions

A switch is mainly designed for matching discrete constant values.

For example:

\`\`\`c
case 1:
case 2:
case 3:
\`\`\`

is appropriate.

For conditions such as:

\`\`\`c
marks >= 75
\`\`\`

an if-else structure is generally more suitable.

---

# Lesson Summary

In this lesson, you learned:

- The switch statement is used for multi-way selection.
- The switch expression is evaluated and compared with case values.
- case labels specify possible constant values.
- break exits the switch.
- Without break, fall-through can occur.
- Multiple case labels can share the same code.
- default handles unmatched cases.
- switch can work with integer-compatible expressions, including character values.
- Case labels must be constant expressions.
- Duplicate case values are not allowed.
- switch is generally useful for discrete choices.
- if-else is generally better for ranges and complex conditions.
- Nested switch statements are possible but should be used carefully.

The key structure is:

\`\`\`text
switch (expression)
       ↓
   case values
       ↓
Matching case
       ↓
Execute statements
       ↓
break
       ↓
Exit switch
\`\`\`

---

# Module 3 Progress

✓ Lesson 1 — Conditional Statements

✓ Lesson 2 — if Statement

✓ Lesson 3 — if-else Statement

✓ Lesson 4 — else-if Ladder

✓ Lesson 5 — Nested if

→ Lesson 6 — switch Statement

  Lesson 7 — Conditional Operator
  Lesson 8 — for Loop
  Lesson 9 — while Loop
  Lesson 10 — do-while Loop
  Lesson 11 — Nested Loops
  Lesson 12 — break
  Lesson 13 — continue
  Lesson 14 — goto
  Lesson 15 — Loop Control

Lesson 6 Complete

Next: Lesson 7 — Conditional Operator.

`,
};

export default lesson6;
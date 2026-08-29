const lesson15 = {
  id: "lesson15",

  title: "Mini Project — Menu-Driven Program",

  content: `

# Lesson 15: Mini Project — Menu-Driven Program

## Introduction

In this lesson, we will combine the concepts learned throughout Module 3 to build a simple **menu-driven C program**.

A menu-driven program presents the user with several choices.

For example:

\`\`\`text
===== MENU =====

1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit
\`\`\`

The user selects an option, and the program performs the corresponding operation.

This project combines:

\`\`\`text
Variables
Input and output
if-else
switch
Loops
break
continue
Arithmetic operators
Conditions
\`\`\`

---

# 1. What Is a Menu-Driven Program?

A menu-driven program allows the user to choose an operation from a list of available options.

The general flow is:

\`\`\`text
Display menu
    ↓
Read choice
    ↓
Process choice
    ↓
Perform operation
    ↓
Display result
    ↓
Show menu again
    ↓
Exit when requested
\`\`\`

A loop is useful because the menu can be displayed repeatedly.

---

# 2. Basic Menu Structure

A simple menu can be displayed using printf():

\`\`\`c
printf("\\n===== MENU =====\\n");
printf("1. Add\\n");
printf("2. Subtract\\n");
printf("3. Multiply\\n");
printf("4. Divide\\n");
printf("5. Exit\\n");
\`\`\`

The user can then enter a choice.

---

# 3. Reading the User's Choice

Example:

\`\`\`c
int choice;

printf("Enter your choice: ");
scanf("%d", &choice);
\`\`\`

The value entered by the user is stored in choice.

For example:

\`\`\`text
Enter your choice: 1

choice
  ↓
1
\`\`\`

---

# 4. Using switch for the Menu

A switch statement is well suited for processing menu choices.

Example:

\`\`\`c
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

    case 5:
        printf("Exiting...\\n");
        break;

    default:
        printf("Invalid choice\\n");
}
\`\`\`

Each case represents one menu option.

---

# 5. Why break Is Important

The break statement prevents fall-through between switch cases.

For example:

\`\`\`c
case 1:
    printf("Add\\n");
    break;
\`\`\`

After the addition option is processed, break exits the switch.

Without break, execution could continue into the following cases.

---

# 6. Repeating the Menu

A loop can be used to display the menu repeatedly.

Example:

\`\`\`c
while (1)
{
    printf("\\n===== MENU =====\\n");

    printf("1. Add\\n");
    printf("2. Subtract\\n");
    printf("3. Multiply\\n");
    printf("4. Divide\\n");
    printf("5. Exit\\n");

    scanf("%d", &choice);

    ...
}
\`\`\`

The loop continues indefinitely until an explicit break is used.

---

# 7. Exit Option

The exit option can use break.

Example:

\`\`\`c
case 5:
    printf("Exiting program...\\n");
    break;
\`\`\`

However, that break exits only the switch.

To exit the surrounding while loop, another control mechanism is needed.

A common approach is:

\`\`\`c
case 5:
    running = 0;
    break;
\`\`\`

Then:

\`\`\`c
while (running)
\`\`\`

controls the program.

---

# 8. Complete Basic Menu

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice;
    int running = 1;

    while (running)
    {
        printf("\\n===== MENU =====\\n");
        printf("1. Add\\n");
        printf("2. Subtract\\n");
        printf("3. Multiply\\n");
        printf("4. Divide\\n");
        printf("5. Exit\\n");

        printf("Enter your choice: ");
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

            case 5:
                printf("Exiting program...\\n");
                running = 0;
                break;

            default:
                printf("Invalid choice\\n");
        }
    }

    return 0;
}
\`\`\`

---

# 9. Adding Two Numbers

We can modify the program so that the addition option actually performs an operation.

Example:

\`\`\`c
int a;
int b;

printf("Enter two numbers: ");
scanf("%d %d", &a, &b);

printf("Result = %d\\n", a + b);
\`\`\`

This can be placed inside case 1.

---

# 10. Complete Calculator Menu

The menu can now perform arithmetic operations.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice;
    int a;
    int b;
    int running = 1;

    while (running)
    {
        printf("\\n===== CALCULATOR =====\\n");
        printf("1. Add\\n");
        printf("2. Subtract\\n");
        printf("3. Multiply\\n");
        printf("4. Divide\\n");
        printf("5. Exit\\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                printf("Enter two numbers: ");
                scanf("%d %d", &a, &b);

                printf("Result = %d\\n", a + b);
                break;

            case 2:
                printf("Enter two numbers: ");
                scanf("%d %d", &a, &b);

                printf("Result = %d\\n", a - b);
                break;

            case 3:
                printf("Enter two numbers: ");
                scanf("%d %d", &a, &b);

                printf("Result = %d\\n", a * b);
                break;

            case 4:
                printf("Enter two numbers: ");
                scanf("%d %d", &a, &b);

                if (b == 0)
                {
                    printf("Cannot divide by zero.\\n");
                }
                else
                {
                    printf("Result = %d\\n", a / b);
                }

                break;

            case 5:
                printf("Exiting program...\\n");
                running = 0;
                break;

            default:
                printf("Invalid choice. Try again.\\n");
        }
    }

    return 0;
}
\`\`\`

---

# 11. How the Calculator Works

The program starts with:

\`\`\`text
running = 1
\`\`\`

Therefore:

\`\`\`c
while (running)
\`\`\`

is true.

The menu is displayed.

The user enters a choice.

The switch statement selects the appropriate operation.

For example:

\`\`\`text
Choice = 1
   ↓
case 1
   ↓
Addition
\`\`\`

After the operation, the loop starts again.

---

# 12. Exit Flow

When the user chooses 5:

\`\`\`text
choice = 5
    ↓
case 5
    ↓
running = 0
    ↓
switch ends
    ↓
while condition checked
    ↓
0 = false
    ↓
loop terminates
\`\`\`

The program then reaches:

\`\`\`c
return 0;
\`\`\`

and terminates.

---

# 13. Using continue for Invalid Choices

continue can also be used in a menu program.

For example:

\`\`\`c
if (choice < 1 || choice > 5)
{
    printf("Invalid choice\\n");
    continue;
}
\`\`\`

This skips the remaining statements of the current loop iteration and displays the menu again.

---

# 14. Menu Using continue

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice;

    while (1)
    {
        printf("\\n===== MENU =====\\n");
        printf("1. Start\\n");
        printf("2. Settings\\n");
        printf("3. Exit\\n");

        printf("Enter choice: ");
        scanf("%d", &choice);

        if (choice < 1 || choice > 3)
        {
            printf("Invalid choice\\n");
            continue;
        }

        if (choice == 3)
        {
            break;
        }

        if (choice == 1)
        {
            printf("Starting...\\n");
        }
        else
        {
            printf("Settings selected\\n");
        }
    }

    return 0;
}
\`\`\`

Here:

\`\`\`text
Invalid choice
     ↓
continue
     ↓
show menu again
\`\`\`

While:

\`\`\`text
choice == 3
     ↓
break
     ↓
exit loop
\`\`\`

---

# 15. Adding Floating-Point Division

Integer division discards the fractional part.

For example:

\`\`\`c
10 / 3
\`\`\`

produces:

\`\`\`text
3
\`\`\`

To obtain a fractional result, use floating-point arithmetic.

Example:

\`\`\`c
double result;

result = (double)a / b;
\`\`\`

---

# 16. Improved Calculator

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice;
    double a;
    double b;

    while (1)
    {
        printf("\\n===== CALCULATOR =====\\n");
        printf("1. Add\\n");
        printf("2. Subtract\\n");
        printf("3. Multiply\\n");
        printf("4. Divide\\n");
        printf("5. Exit\\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                printf("Enter two numbers: ");
                scanf("%lf %lf", &a, &b);

                printf("Result = %.2f\\n", a + b);
                break;

            case 2:
                printf("Enter two numbers: ");
                scanf("%lf %lf", &a, &b);

                printf("Result = %.2f\\n", a - b);
                break;

            case 3:
                printf("Enter two numbers: ");
                scanf("%lf %lf", &a, &b);

                printf("Result = %.2f\\n", a * b);
                break;

            case 4:
                printf("Enter two numbers: ");
                scanf("%lf %lf", &a, &b);

                if (b == 0.0)
                {
                    printf("Cannot divide by zero.\\n");
                }
                else
                {
                    printf("Result = %.2f\\n", a / b);
                }

                break;

            case 5:
                printf("Exiting calculator...\\n");
                return 0;

            default:
                printf("Invalid choice.\\n");
        }
    }
}
\`\`\`

This version supports fractional results.

---

# 17. Combining Module 3 Concepts

This project uses many concepts from the module.

### Variables

\`\`\`c
int choice;
int running;
\`\`\`

### while Loop

\`\`\`c
while (running)
\`\`\`

### switch

\`\`\`c
switch (choice)
\`\`\`

### break

\`\`\`c
break;
\`\`\`

### continue

\`\`\`c
continue;
\`\`\`

### if-else

\`\`\`c
if (b == 0)
{
    ...
}
else
{
    ...
}
\`\`\`

### Arithmetic Operators

\`\`\`c
a + b
a - b
a * b
a / b
\`\`\`

The project therefore combines the major control-flow concepts learned in Module 3.

---

# 18. Program Flow

The complete flow can be represented as:

\`\`\`text
Start
  ↓
Display Menu
  ↓
Read Choice
  ↓
Validate Choice
  ↓
Select Operation
  ↓
Perform Operation
  ↓
Display Result
  ↓
Exit?
  ├── No ──→ Display Menu
  │
  └── Yes ─→ End
\`\`\`

---

# 19. Complete Mini Project

The following program combines the concepts into one menu-driven calculator.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice;
    double a;
    double b;

    while (1)
    {
        printf("\\n=========================\\n");
        printf("     CALCULATOR MENU\\n");
        printf("=========================\\n");
        printf("1. Addition\\n");
        printf("2. Subtraction\\n");
        printf("3. Multiplication\\n");
        printf("4. Division\\n");
        printf("5. Exit\\n");
        printf("=========================\\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        if (choice < 1 || choice > 5)
        {
            printf("Invalid choice. Please try again.\\n");
            continue;
        }

        if (choice == 5)
        {
            printf("Thank you for using the calculator.\\n");
            break;
        }

        printf("Enter first number: ");
        scanf("%lf", &a);

        printf("Enter second number: ");
        scanf("%lf", &b);

        switch (choice)
        {
            case 1:
                printf("Result = %.2f\\n", a + b);
                break;

            case 2:
                printf("Result = %.2f\\n", a - b);
                break;

            case 3:
                printf("Result = %.2f\\n", a * b);
                break;

            case 4:
                if (b == 0.0)
                {
                    printf("Error: Division by zero is not allowed.\\n");
                }
                else
                {
                    printf("Result = %.2f\\n", a / b);
                }

                break;
        }
    }

    return 0;
}
\`\`\`

---

# 20. Example Execution

A possible execution is:

\`\`\`text
=========================
     CALCULATOR MENU
=========================
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit
=========================
Enter your choice: 1

Enter first number: 25
Enter second number: 15

Result = 40.00
\`\`\`

The menu appears again because the program is inside the loop.

The user can select another operation.

---

# 21. Another Execution

For division:

\`\`\`text
Enter your choice: 4

Enter first number: 10
Enter second number: 4

Result = 2.50
\`\`\`

Because the variables are double, floating-point division is performed.

---

# 22. Handling Division by Zero

If the user enters:

\`\`\`text
Enter first number: 10
Enter second number: 0
\`\`\`

the program checks:

\`\`\`c
if (b == 0.0)
\`\`\`

and displays:

\`\`\`text
Error: Division by zero is not allowed.
\`\`\`

The program continues running.

---

# 23. Exiting the Program

When the user selects:

\`\`\`text
5
\`\`\`

the program executes:

\`\`\`c
break;
\`\`\`

The surrounding while loop terminates.

The program then reaches:

\`\`\`c
return 0;
\`\`\`

and ends.

---

# 24. Why This Project Is Important

This project demonstrates how individual programming concepts work together.

A real program rarely uses only one concept.

Instead, it combines:

\`\`\`text
Variables
    +
Conditions
    +
Loops
    +
switch
    +
break
    +
continue
    +
Operators
    ↓
Complete Program
\`\`\`

Understanding how these concepts interact is an important step toward writing larger programs.

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting break in switch

Without break, cases may fall through.

---

## Mistake 2 — Using break When continue Is Needed

Remember:

\`\`\`text
break
→ exit loop

continue
→ skip current iteration
\`\`\`

---

## Mistake 3 — Division by Zero

Always check the divisor before performing division when zero is possible.

---

## Mistake 4 — Forgetting the Loop

If the menu should appear repeatedly, place the menu and processing logic inside a loop.

---

## Mistake 5 — Incorrect Exit Logic

Make sure the exit option actually terminates the surrounding loop.

---

# Lesson Summary

In this lesson, you built a menu-driven calculator using C.

You learned how to combine:

- Variables
- Input and output
- if statements
- if-else
- switch
- while loops
- break
- continue
- Arithmetic operators
- Conditions

The general structure of a menu-driven program is:

\`\`\`text
Start
 ↓
Display Menu
 ↓
Read Choice
 ↓
Validate Choice
 ↓
Process Choice
 ↓
Perform Operation
 ↓
Display Result
 ↓
Repeat
 ↓
Exit
\`\`\`

The most important lesson is that programming concepts are not isolated.

They work together to create complete programs.

---

# Module 3 Complete

✓ Lesson 1 — Conditional Statements

✓ Lesson 2 — if Statement

✓ Lesson 3 — if-else Statement

✓ Lesson 4 — Nested if

✓ Lesson 5 — else-if Ladder

✓ Lesson 6 — switch Statement

✓ Lesson 7 — Nested switch

✓ Lesson 8 — Conditional Operator

✓ Lesson 9 — while Loop

✓ Lesson 10 — do-while Loop

✓ Lesson 11 — for Loop

✓ Lesson 12 — Nested Loops

✓ Lesson 13 — break Statement

✓ Lesson 14 — continue Statement

✓ Lesson 15 — Mini Project — Menu-Driven Program

# Module 3 Complete

Next: **Module 4 — Functions**

`,
};

export default lesson15;
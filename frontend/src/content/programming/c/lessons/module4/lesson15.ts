const lesson15 = {
  id: "lesson15",

  title: "Mini Project — Calculator Using Functions",

  content: `

# Lesson 15: Mini Project — Calculator Using Functions

## Introduction

In this final lesson of Module 4, we will combine the concepts learned throughout the module to build a **Calculator Using Functions**.

The project will use:

- Functions
- Function declarations
- Function definitions
- Function calls
- Parameters
- Return values
- Conditional statements
- switch statement
- Arithmetic operators
- User input
- Library functions

The goal is to organize the calculator into separate functions instead of writing all operations inside \`main()\`.

---

# 1. Project Objective

The calculator will allow the user to perform:

1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit

The basic flow is:

\`\`\`text
Start
  ↓
Display Menu
  ↓
Read Choice
  ↓
Select Operation
  ↓
Read Numbers
  ↓
Call Function
  ↓
Display Result
  ↓
Return to Menu
  ↓
Exit
\`\`\`

---

# 2. Functions Used

We will create separate functions for the arithmetic operations.

\`\`\`text
add()
subtract()
multiply()
divide()
\`\`\`

Each function receives two numbers and returns the calculated result.

---

# 3. Addition Function

The addition function receives two numbers.

\`\`\`c
double add(double a, double b)
{
    return a + b;
}
\`\`\`

For example:

\`\`\`text
add(10, 5)
    ↓
15
\`\`\`

---

# 4. Subtraction Function

The subtraction function is:

\`\`\`c
double subtract(double a, double b)
{
    return a - b;
}
\`\`\`

For example:

\`\`\`text
subtract(10, 5)
    ↓
5
\`\`\`

---

# 5. Multiplication Function

The multiplication function is:

\`\`\`c
double multiply(double a, double b)
{
    return a * b;
}
\`\`\`

For example:

\`\`\`text
multiply(10, 5)
    ↓
50
\`\`\`

---

# 6. Division Function

The division function is:

\`\`\`c
double divide(double a, double b)
{
    return a / b;
}
\`\`\`

However, division by zero must be prevented.

Therefore, the program should check the denominator before calling the division operation.

---

# 7. Function Prototypes

Before \`main()\`, we can declare the functions using prototypes.

\`\`\`c
double add(double a, double b);
double subtract(double a, double b);
double multiply(double a, double b);
double divide(double a, double b);
\`\`\`

These declarations tell the compiler about the functions before they are used.

---

# 8. Function Definitions

The functions can then be defined:

\`\`\`c
double add(double a, double b)
{
    return a + b;
}

double subtract(double a, double b)
{
    return a - b;
}

double multiply(double a, double b)
{
    return a * b;
}

double divide(double a, double b)
{
    return a / b;
}
\`\`\`

Each function performs one specific operation.

---

# 9. Menu

The calculator can display:

\`\`\`text
===== Calculator =====

1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit

Enter choice:
\`\`\`

The user selects an operation using a number.

---

# 10. Using switch

A \`switch\` statement can select the required operation.

Example:

\`\`\`c
switch (choice)
{
    case 1:
        result = add(first, second);
        break;

    case 2:
        result = subtract(first, second);
        break;

    case 3:
        result = multiply(first, second);
        break;

    case 4:
        result = divide(first, second);
        break;

    case 5:
        printf("Exiting...\\n");
        break;

    default:
        printf("Invalid choice.\\n");
}
\`\`\`

---

# 11. Handling Division by Zero

Before division, we should check:

\`\`\`c
if (second == 0)
{
    printf("Division by zero is not allowed.\\n");
}
else
{
    result = divide(first, second);
    printf("Result = %.2f\\n", result);
}
\`\`\`

This prevents an invalid division operation.

---

# 12. Complete Mini Project

\`\`\`c
#include <stdio.h>

double add(double a, double b);
double subtract(double a, double b);
double multiply(double a, double b);
double divide(double a, double b);

double add(double a, double b)
{
    return a + b;
}

double subtract(double a, double b)
{
    return a - b;
}

double multiply(double a, double b)
{
    return a * b;
}

double divide(double a, double b)
{
    return a / b;
}

int main(void)
{
    int choice;
    double first;
    double second;
    double result;

    do
    {
        printf("\\n===== Calculator =====\\n");
        printf("1. Addition\\n");
        printf("2. Subtraction\\n");
        printf("3. Multiplication\\n");
        printf("4. Division\\n");
        printf("5. Exit\\n");
        printf("Enter choice: ");

        if (scanf("%d", &choice) != 1)
        {
            printf("Invalid input.\\n");
            return 1;
        }

        switch (choice)
        {
            case 1:
            case 2:
            case 3:
            case 4:

                printf("Enter first number: ");

                if (scanf("%lf", &first) != 1)
                {
                    printf("Invalid input.\\n");
                    return 1;
                }

                printf("Enter second number: ");

                if (scanf("%lf", &second) != 1)
                {
                    printf("Invalid input.\\n");
                    return 1;
                }

                switch (choice)
                {
                    case 1:
                        result = add(first, second);

                        printf("Result = %.2f\\n",
                               result);
                        break;

                    case 2:
                        result = subtract(first, second);

                        printf("Result = %.2f\\n",
                               result);
                        break;

                    case 3:
                        result = multiply(first, second);

                        printf("Result = %.2f\\n",
                               result);
                        break;

                    case 4:
                        if (second == 0)
                        {
                            printf("Division by zero is not allowed.\\n");
                        }
                        else
                        {
                            result = divide(first, second);

                            printf("Result = %.2f\\n",
                                   result);
                        }

                        break;
                }

                break;

            case 5:
                printf("Exiting calculator...\\n");
                break;

            default:
                printf("Invalid choice.\\n");
        }

    } while (choice != 5);

    return 0;
}
\`\`\`

---

# 13. Example Execution

Example 1:

\`\`\`text
===== Calculator =====
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit
Enter choice: 1

Enter first number: 20
Enter second number: 10

Result = 30.00
\`\`\`

Example 2:

\`\`\`text
===== Calculator =====
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit
Enter choice: 4

Enter first number: 20
Enter second number: 5

Result = 4.00
\`\`\`

Example 3:

\`\`\`text
===== Calculator =====
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit
Enter choice: 4

Enter first number: 20
Enter second number: 0

Division by zero is not allowed.
\`\`\`

---

# 14. Concepts Used in the Project

The project combines the major concepts learned in Module 4.

\`\`\`text
                 MODULE 4
                     ↓
                 FUNCTIONS
                     ↓
        ┌────────────┼────────────┐
        ↓            ↓            ↓
   Parameters    Return Value   Calling
        │            │            │
        └────────────┼────────────┘
                     ↓
              Calculator
                     ↓
          ┌──────────┼──────────┐
          ↓          ↓          ↓
       Addition  Subtraction  Multiplication
                                  │
                                  ↓
                              Division
\`\`\`

The project also uses:

\`\`\`text
Variables
Operators
Input
Output
switch
do-while
Functions
\`\`\`

---

# 15. Final Module Summary

Module 4 introduced functions and showed how they can be used to organize C programs.

We learned:

- Introduction to functions.
- Why functions are useful.
- Function declarations.
- Function definitions.
- Function calls.
- Parameters and arguments.
- Return values.
- Different types of functions.
- Function prototypes.
- Passing arguments.
- Local and global variables.
- Scope and lifetime.
- Recursive functions.
- Library functions.
- Building a practical project using functions.

The most important idea is that a large program can be divided into smaller functions.

For example:

\`\`\`text
Large Program
      ↓
Small Functions
      ↓
Each Function Performs One Task
      ↓
Functions Work Together
      ↓
Organized Program
\`\`\`

---

# Module 4 Complete

✓ Lesson 1 — Introduction to Functions

✓ Lesson 2 — Need and Advantages of Functions

✓ Lesson 3 — Function Declaration

✓ Lesson 4 — Function Definition

✓ Lesson 5 — Function Calling

✓ Lesson 6 — Parameters and Arguments

✓ Lesson 7 — Return Values

✓ Lesson 8 — Types of Functions

✓ Lesson 9 — Function Prototypes

✓ Lesson 10 — Passing Arguments to Functions

✓ Lesson 11 — Local and Global Variables

✓ Lesson 12 — Scope and Lifetime of Variables

✓ Lesson 13 — Recursive Functions

✓ Lesson 14 — Library Functions

✓ Lesson 15 — Mini Project — Calculator Using Functions

# 🎉 Module 4 Complete!

You have completed the Functions module and built a practical calculator using functions.

Next: Continue to the next C programming module.

`,
};

export default lesson15;
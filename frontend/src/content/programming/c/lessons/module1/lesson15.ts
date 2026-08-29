const lesson15 = {
  id: "lesson15",

  title: "Mini Project — Simple Calculator",

  content: `

# Lesson 15: Mini Project — Simple Calculator

## Introduction

You have reached the final lesson of **Module 1**.

So far, you have learned:

- What C is
- How C evolved
- Features of C
- C program structure
- Compilation
- Compiler and IDE setup
- Your first C program
- main()
- Comments
- Keywords and identifiers
- Character set
- Tokens
- Syntax
- Command-line compilation

Now we will combine these fundamentals into a small project: a **Simple Calculator**.

The purpose of this project is not to build a complete calculator application. The purpose is to use the basic C concepts you have learned so far in one working program.

---

# 1. Project Objective

We will create a calculator that can perform four basic operations:

- Addition
- Subtraction
- Multiplication
- Division

For example:

\`\`\`text
Enter first number: 20
Enter second number: 5

Addition       = 25
Subtraction    = 15
Multiplication = 100
Division       = 4
\`\`\`

---

# 2. Concepts Used

This project uses several concepts from Module 1:

- #include
- main()
- Comments
- Variables
- Identifiers
- Constants
- Operators
- printf()
- scanf()
- Statements
- Blocks
- Compilation

Some of these concepts will be studied in greater depth in later modules.

---

# 3. Creating the Project

Create a file named:

\`\`\`text
calculator.c
\`\`\`

Start with:

\`\`\`c
#include <stdio.h>

int main(void)
{
    return 0;
}
\`\`\`

This gives us the basic structure of our program.

---

# 4. Adding Variables

We need two numbers.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int first_number;
    int second_number;

    return 0;
}
\`\`\`

Here:

\`\`\`text
first_number

second_number
\`\`\`

are identifiers representing our two values.

---

# 5. Taking Input

We can use scanf() to read values from the user.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int first_number;
    int second_number;

    printf("Enter first number: ");
    scanf("%d", &first_number);

    printf("Enter second number: ");
    scanf("%d", &second_number);

    return 0;
}
\`\`\`

The program now accepts two integer values.

---

# 6. Performing Calculations

We can calculate the four operations:

\`\`\`c
int addition = first_number + second_number;

int subtraction = first_number - second_number;

int multiplication = first_number * second_number;
\`\`\`

For division:

\`\`\`c
int division = first_number / second_number;
\`\`\`

Since these variables are integers, integer division is performed.

For example:

\`\`\`text
10 / 3
\`\`\`

produces:

\`\`\`text
3
\`\`\`

rather than 3.333....

We will study data types and floating-point calculations properly in the next module.

---

# 7. Displaying the Results

Use printf() to display the calculated values:

\`\`\`c
printf("Addition = %d\\n", addition);

printf("Subtraction = %d\\n", subtraction);

printf("Multiplication = %d\\n", multiplication);

printf("Division = %d\\n", division);
\`\`\`

---

# 8. Complete Calculator

Here is the complete program:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int first_number;
    int second_number;

    printf("Enter first number: ");
    scanf("%d", &first_number);

    printf("Enter second number: ");
    scanf("%d", &second_number);

    int addition = first_number + second_number;
    int subtraction = first_number - second_number;
    int multiplication = first_number * second_number;

    printf("\\nResults\\n");

    printf("Addition       = %d\\n", addition);
    printf("Subtraction    = %d\\n", subtraction);
    printf("Multiplication = %d\\n", multiplication);

    if (second_number != 0)
    {
        int division = first_number / second_number;

        printf("Division       = %d\\n", division);
    }
    else
    {
        printf("Division       = Cannot divide by zero\\n");
    }

    return 0;
}
\`\`\`

---

# 9. Understanding the Program

Let's break the program into sections.

## Header

\`\`\`c
#include <stdio.h>
\`\`\`

Provides the declarations needed for input/output functions such as:

\`\`\`text
printf()

scanf()
\`\`\`

---

## main()

\`\`\`c
int main(void)
{
    ...
}
\`\`\`

This is where execution begins for a normal hosted C program.

---

## Variables

\`\`\`c
int first_number;

int second_number;
\`\`\`

These store the two numbers entered by the user.

---

## Input

\`\`\`c
scanf("%d", &first_number);
\`\`\`

reads an integer from the input.

The %d conversion specification indicates that an integer is expected.

---

## Operators

The calculator uses:

\`\`\`text
+
-
*
/
\`\`\`

for:

\`\`\`text
Addition
Subtraction
Multiplication
Division
\`\`\`

---

## Conditional Check

We use:

\`\`\`c
if (second_number != 0)
\`\`\`

before performing integer division.

This prevents the program from attempting to divide by zero.

You will study if statements in detail in Module 3.

---

# 10. Example Execution

Suppose you enter:

\`\`\`text
Enter first number: 20
Enter second number: 5
\`\`\`

The output will be:

\`\`\`text
Results

Addition       = 25
Subtraction    = 15
Multiplication = 100
Division       = 4
\`\`\`

---

# 11. Another Example

Input:

\`\`\`text
Enter first number: 15
Enter second number: 4
\`\`\`

Output:

\`\`\`text
Results

Addition       = 19
Subtraction    = 11
Multiplication = 60
Division       = 3
\`\`\`

Remember that 15 / 4 is integer division because both operands are integers.

---

# 12. Testing Division by Zero

Try:

\`\`\`text
Enter first number: 20
Enter second number: 0
\`\`\`

The program should display:

\`\`\`text
Division       = Cannot divide by zero
\`\`\`

The check:

\`\`\`c
if (second_number != 0)
\`\`\`

ensures that division is performed only when the second number is not zero.

---

# 13. Compiling the Project

Open the terminal in the directory containing:

\`\`\`text
calculator.c
\`\`\`

Compile it with GCC:

\`\`\`bash
gcc -Wall -Wextra calculator.c -o calculator
\`\`\`

If there are no compilation errors, run the executable.

On Windows:

\`\`\`text
.\\calculator.exe
\`\`\`

On Linux/macOS:

\`\`\`text
./calculator
\`\`\`

---

# 14. What You Have Practiced

This small project brings together many ideas from Module 1:

\`\`\`text
Source File
    ↓
Preprocessor Directive
    ↓
main()
    ↓
Variables
    ↓
Input
    ↓
Expressions
    ↓
Operators
    ↓
Output
    ↓
Compilation
    ↓
Execution
\`\`\`

You have now moved from simply reading C syntax to actually building a working program.

---

# 15. Try Improving the Calculator

Now make some changes yourself.

## Challenge 1

Add the remainder operation:

\`\`\`text
%
\`\`\`

For example:

\`\`\`text
20 % 3 = 2
\`\`\`

---

## Challenge 2

Add another number and calculate the total of three numbers.

---

## Challenge 3

Change the program so that it performs only one selected operation.

For example:

\`\`\`text
1. Addition
2. Subtraction
3. Multiplication
4. Division
\`\`\`

The user selects an option.

You will learn the control-flow concepts needed for this properly in Module 3.

---

## Challenge 4

Modify the calculator to work with decimal numbers.

For example:

\`\`\`text
10.5 + 2.5 = 13.0
\`\`\`

This will require floating-point data types, which you will learn in the next module.

---

# 16. What This Project Does Not Cover Yet

The calculator is intentionally simple.

We have not yet covered many important C concepts in detail, such as:

- Data Types
- Type Conversion
- Loops
- Functions
- Arrays
- Strings
- Pointers
- Structures
- Dynamic Memory
- File Handling

Those topics will be introduced progressively throughout the remaining modules.

So don't worry if the calculator feels limited right now.

It is supposed to be.

---

# Module 1 Final Summary

You have completed all 15 lessons of Module 1.

You started with:

\`\`\`text
What is C?
\`\`\`

and reached:

\`\`\`text
Building and running a working C program
\`\`\`

The complete progression was:

\`\`\`text
C Fundamentals
      ↓
Program Structure
      ↓
Compilation
      ↓
First Program
      ↓
Syntax
      ↓
Tokens
      ↓
Command Line
      ↓
Mini Project
\`\`\`

---

# Module 1 — Completed

✓ Lesson 1 — Introduction to C Programming

✓ Lesson 2 — History of C

✓ Lesson 3 — Features of C

✓ Lesson 4 — C Program Structure

✓ Lesson 5 — Compilation Process

✓ Lesson 6 — Compiler and IDE Setup

✓ Lesson 7 — First C Program

✓ Lesson 8 — main() Function

✓ Lesson 9 — Comments

✓ Lesson 10 — Keywords and Identifiers

✓ Lesson 11 — Character Set

✓ Lesson 12 — Tokens in C

✓ Lesson 13 — Syntax Rules

✓ Lesson 14 — Command Line Compilation

✓ Lesson 15 — Mini Project — Simple Calculator

# Module 1 Complete

You now have the foundation required to move into **Module 2 — Variables, Data Types & Operators**.

The next module will move from understanding the structure of C programs to understanding how C **stores, represents, and manipulates data**.

`,
};

export default lesson15;
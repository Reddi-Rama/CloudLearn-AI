const lesson9 = {
  id: "lesson9",

  title: "Comments in C",

  content: `

# Lesson 9: Comments in C

## Introduction

When you write a program, the code itself tells the computer what to do. But a program also needs to be understandable to the person reading it.

This is where **comments** are useful.

A comment is text written inside the source code to explain something to the programmer. The compiler does not treat the comment as an instruction to execute.

For example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    // Display a welcome message
    printf("Welcome to C Programming\\\\n");

    return 0;
}
\`\`\`

The line beginning with // is a comment.

## 1. Why Do We Use Comments?

Comments are mainly used to explain the purpose or reasoning behind code.

They can help you:

- Explain complicated logic.
- Describe what a section of code does.
- Leave notes for future changes.
- Document functions.
- Make larger programs easier to maintain.

A good comment explains something that may not be obvious from the code itself.

## 2. Single-Line Comments

A single-line comment begins with:

\`\`\`text
//
\`\`\`

Everything after // on that line is treated as a comment.

Example:

\`\`\`c
int number = 10;  // Store the initial value
\`\`\`

You can also place the comment on its own line:

\`\`\`c
// Calculate the total

int total = price + tax;
\`\`\`

The compiler does not execute the comment.

## 3. Multi-Line Comments

C also supports comments that span multiple lines.

They begin with:

\`\`\`text
/*
\`\`\`

and end with:

\`\`\`text
*/
\`\`\`

Example:

\`\`\`c
/*
    This program calculates
    the total of two numbers.
*/
\`\`\`

You can also use them within a program:

\`\`\`c
#include <stdio.h>

int main(void)
{
    /*
        Display the result
        on the screen.
    */

    printf("Result = 100\\\\n");

    return 0;
}
\`\`\`

Everything between /* and */ is treated as a comment.

## 4. Commenting Out Code

Comments are sometimes temporarily used to prevent a line of code from being compiled.

For example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    printf("First message\\\\n");

    // printf("Second message\\\\n");

    return 0;
}
\`\`\`

The second printf() is commented out, so it will not execute.

This can be useful while testing different parts of a program.

However, comments should not become a permanent substitute for removing obsolete code.

## 5. Comments Do Not Affect Program Output

Consider:

\`\`\`c
#include <stdio.h>

int main(void)
{
    // This line explains the next statement
    printf("Hello\\\\n");

    return 0;
}
\`\`\`

The output is simply:

\`\`\`text
Hello
\`\`\`

The comment does not appear in the output.

## 6. Comments Can Explain Why

Compare these two examples.

### Less useful comment

\`\`\`c
// Add 10 to number
number = number + 10;
\`\`\`

The code already makes this obvious.

### More useful comment

\`\`\`c
// Apply the 10-point bonus before calculating the final score.
number = number + 10;
\`\`\`

The second comment explains the reason behind the operation.

This is a useful principle:

**Comment the reasoning when the reasoning is not obvious from the code.**

## 7. Comments for Functions

When a function performs an important operation, a comment can describe its purpose.

\`\`\`c
/*
    Calculates the total cost after
    adding the delivery charge.
*/

int calculateTotal(int price, int delivery)
{
    return price + delivery;
}
\`\`\`

This becomes particularly useful in larger projects.

## 8. Comments and Documentation

Comments can also be used to provide information about a source file.

For example:

\`\`\`c
/*
    Program: Simple Calculator
    Purpose: Performs basic arithmetic operations
*/
\`\`\`

This tells another programmer what the file is intended to do.

## 9. Avoid Excessive Comments

Comments are helpful, but more comments do not automatically mean better code.

Avoid writing comments that simply repeat the code:

\`\`\`c
int age = 20;  // Set age to 20
\`\`\`

The code already tells us this.

Instead, comments are more useful when they explain context or reasoning:

\`\`\`c
int age = 20;  // Minimum age required for this operation
\`\`\`

The exact usefulness depends on the program.

## 10. Comments and Maintenance

Programs change over time.

A comment that was correct when it was written can become misleading if the code changes and the comment is not updated.

For example:

\`\`\`c
// Calculate a 10% discount
price = price * 0.20;
\`\`\`

The comment and code disagree.

This is worse than having no comment because it can mislead someone reading the program.

Therefore, comments should be maintained along with the code.

## 11. Nested Comments

C block comments cannot be nested in the normal way.

For example, this is problematic:

\`\`\`c
/*
    Outer comment

    /*
        Inner comment
    */

*/
\`\`\`

The /* inside the comment does not create a separate nested comment structure.

When using block comments, keep the beginning and ending delimiters clear.

## 12. Comments and Compilation

Comments are removed or ignored as part of the processing of the source before the compiler generates the program's executable code.

Conceptually:

Source Code

↓

Comments / Preprocessor Handling

↓

Compilation

↓

Executable

This is why comments have no direct effect on the program's runtime behavior.

## Good Commenting Style

A good C program usually follows these principles:

Explain intent

↓

Avoid obvious comments

↓

Keep comments accurate

↓

Update comments when code changes

The goal is to make the program easier to understand, not to fill every line with explanations.

## Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    /*
        Display the heading before
        printing the calculation.
    */

    printf("Simple Calculator\\\\n");

    // Store two values
    int first = 10;
    int second = 20;

    printf("Total = %d\\\\n", first + second);

    return 0;
}
\`\`\`

Here both styles of comments are being used:

\`\`\`c
/*
   Multi-line comment
*/
\`\`\`

and:

\`\`\`c
// Single-line comment
\`\`\`

## Lesson Summary

You should now understand:

- What comments are.
- Why comments are useful.
- Single-line comments using //.
- Multi-line comments using /* ... */.
- How comments can temporarily disable code.
- Why comments should explain intent rather than obvious syntax.
- Why comments need to be kept accurate.
- Why block comments should not be treated as nested comments.

Comments are a small part of C syntax, but learning to document code properly is an important programming habit.

`,
};

export default lesson9;
const lesson8 = {
  id: "lesson8",

  title: "Conditional Operator",

  content: `

# Lesson 8: Conditional Operator

## Introduction

The conditional operator is a special operator in C that provides a short way to choose between two expressions based on a condition.

It is also called the **ternary operator** because it works with three operands.

The syntax is:

\`\`\`c
condition ? expression1 : expression2;
\`\`\`

If the condition is true, expression1 is selected.

If the condition is false, expression2 is selected.

For example:

\`\`\`c
int number = 10;

int result = (number > 0) ? 1 : 0;
\`\`\`

Since number is greater than zero:

\`\`\`text
condition
   ↓
true
   ↓
1
\`\`\`

Therefore:

\`\`\`text
result = 1
\`\`\`

---

# 1. What Is the Conditional Operator?

The conditional operator provides a compact alternative to a simple if-else statement.

General syntax:

\`\`\`c
condition ? value_if_true : value_if_false;
\`\`\`

It contains three parts:

\`\`\`text
condition
    ↓
?
    ↓
value if true
    ↓
:
    ↓
value if false
\`\`\`

---

# 2. Simple Example

Consider:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 20;

    int result = (age >= 18) ? 1 : 0;

    printf("Result = %d\\n", result);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Result = 1
\`\`\`

The condition:

\`\`\`c
age >= 18
\`\`\`

is true.

Therefore, 1 is selected.

---

# 3. Conditional Operator With if-else

Consider this if-else statement:

\`\`\`c
int number = 10;
int result;

if (number > 0)
{
    result = 1;
}
else
{
    result = 0;
}
\`\`\`

The same logic can be written using the conditional operator:

\`\`\`c
int number = 10;

int result = (number > 0) ? 1 : 0;
\`\`\`

The conditional operator is useful when the logic is simple.

---

# 4. Finding the Greater Number

The conditional operator can be used to select the larger of two values.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 20;
    int b = 35;

    int greater = (a > b) ? a : b;

    printf("Greater = %d\\n", greater);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Greater = 35
\`\`\`

The condition:

\`\`\`c
a > b
\`\`\`

is false.

Therefore, b is selected.

---

# 5. Finding the Smaller Number

The same technique can find the smaller value.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 20;
    int b = 35;

    int smaller = (a < b) ? a : b;

    printf("Smaller = %d\\n", smaller);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Smaller = 20
\`\`\`

---

# 6. Checking Even or Odd

The conditional operator can be combined with the remainder operator.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 7;

    const char *result =
        (number % 2 == 0) ? "Even" : "Odd";

    printf("%s\\n", result);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Odd
\`\`\`

The condition checks whether the remainder is zero.

---

# 7. Positive or Negative

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = -10;

    const char *result =
        (number >= 0) ? "Non-negative" : "Negative";

    printf("%s\\n", result);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Negative
\`\`\`

---

# 8. Checking Pass or Fail

The conditional operator can be used for simple pass/fail decisions.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks = 75;

    const char *result =
        (marks >= 40) ? "Pass" : "Fail";

    printf("%s\\n", result);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Pass
\`\`\`

---

# 9. Assigning Different Values

The two expressions do not have to be numbers.

Example:

\`\`\`c
int age = 20;

const char *message =
    (age >= 18) ? "Adult" : "Minor";
\`\`\`

The conditional operator selects one of the two string literals.

---

# 10. Conditional Operator With printf

The conditional operator can be used directly in an expression.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 10;

    printf("%s\\n",
           (number % 2 == 0) ? "Even" : "Odd");

    return 0;
}
\`\`\`

Output:

\`\`\`text
Even
\`\`\`

---

# 11. Conditional Operator With Arithmetic

The selected expression can participate in calculations.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 10;
    int b = 20;

    int larger = (a > b) ? a : b;

    int result = larger + 5;

    printf("Result = %d\\n", result);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Result = 25
\`\`\`

---

# 12. Nested Conditional Operator

A conditional operator can be placed inside another conditional operator.

For example:

\`\`\`c
int marks = 85;

const char *grade =
    (marks >= 90) ? "A" :
    (marks >= 75) ? "B" :
    (marks >= 60) ? "C" :
    (marks >= 40) ? "D" :
                    "F";
\`\`\`

The conditions are checked from top to bottom.

For marks equal to 85:

\`\`\`text
marks >= 90
↓
false

marks >= 75
↓
true

Grade = B
\`\`\`

Although nested conditional operators are valid, too many levels can make code difficult to read.

---

# 13. Conditional Operator and Data Types

The two result expressions participate in determining the type of the overall conditional expression.

For example:

\`\`\`c
int a = 10;
double b = 20.5;

double result = (a > 5) ? a : b;
\`\`\`

The selected value is represented using the appropriate common type for the conditional expression.

---

# 14. Conditional Operator vs if-else

Consider:

\`\`\`c
if (number > 0)
{
    result = 1;
}
else
{
    result = 0;
}
\`\`\`

The conditional equivalent is:

\`\`\`c
result = (number > 0) ? 1 : 0;
\`\`\`

The conditional operator is concise.

The if-else form is often easier to read when several statements or complex logic are involved.

---

# 15. When to Use the Conditional Operator

The conditional operator is useful when:

- The decision is simple.
- One of two values needs to be selected.
- The result is used directly in an expression.
- A short assignment is appropriate.

Example:

\`\`\`c
int max = (a > b) ? a : b;
\`\`\`

This is concise and easy to understand.

---

# 16. When to Prefer if-else

Use if-else when the branches contain multiple statements or complicated logic.

Prefer:

\`\`\`c
if (marks >= 40)
{
    printf("Pass\\n");
    printf("Congratulations\\n");
}
else
{
    printf("Fail\\n");
    printf("Try again\\n");
}
\`\`\`

rather than trying to put complicated operations into one conditional expression.

---

# 17. Practical Example — Absolute Value

A simple absolute-value calculation can be written using the conditional operator.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = -25;

    int absolute =
        (number < 0) ? -number : number;

    printf("Absolute value = %d\\n", absolute);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Absolute value = 25
\`\`\`

---

# 18. Practical Example — Maximum of Three Values

A conditional operator can be nested to find the largest of three values.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 20;
    int b = 50;
    int c = 35;

    int max =
        (a > b)
            ? ((a > c) ? a : c)
            : ((b > c) ? b : c);

    printf("Maximum = %d\\n", max);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Maximum = 50
\`\`\`

For more complicated decisions, an if-else ladder may be easier to understand.

---

# 19. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    printf("Enter a number: ");
    scanf("%d", &number);

    const char *result =
        (number > 0) ? "Positive" :
        (number < 0) ? "Negative" :
                       "Zero";

    printf("%s\\n", result);

    return 0;
}
\`\`\`

Example output:

\`\`\`text
Enter a number: -5
Negative
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting the Colon

Incorrect:

\`\`\`c
result = (a > b) ? a b;
\`\`\`

Correct:

\`\`\`c
result = (a > b) ? a : b;
\`\`\`

---

## Mistake 2 — Using if Syntax Inside the Operator

Incorrect:

\`\`\`c
result = if (a > b) ? a : b;
\`\`\`

Correct:

\`\`\`c
result = (a > b) ? a : b;
\`\`\`

---

## Mistake 3 — Making the Expression Too Complicated

Avoid deeply nested conditional operators when they reduce readability.

Instead, use if-else or another clearer structure.

---

# Lesson Summary

In this lesson, you learned:

- The conditional operator is also called the ternary operator.
- It uses three operands.
- Its syntax is:

\`\`\`c
condition ? expression1 : expression2
\`\`\`

- If the condition is true, the first expression is selected.
- If the condition is false, the second expression is selected.
- It can provide a concise alternative to simple if-else statements.
- It can be used for selecting values, checking conditions, and performing simple classifications.
- Nested conditional operators are possible but should be used carefully.
- if-else is usually clearer for complex or multi-statement decisions.

The key idea is:

\`\`\`text
Condition
   ↓
 ┌───────┐
 │ True? │
 └───────┘
   /   \\
 Yes    No
 ↓       ↓
Expr1   Expr2
\`\`\`

Basic example:

\`\`\`c
int max = (a > b) ? a : b;
\`\`\`

---

# Module 3 Progress

✓ Lesson 1 — Conditional Statements

✓ Lesson 2 — if Statement

✓ Lesson 3 — if-else Statement

✓ Lesson 4 — Nested if

✓ Lesson 5 — else-if Ladder

✓ Lesson 6 — switch Statement

✓ Lesson 7 — Nested switch

→ Lesson 8 — Conditional Operator

  Lesson 9 — while Loop

  Lesson 10 — do-while Loop

  Lesson 11 — for Loop

  Lesson 12 — Nested Loops

  Lesson 13 — break Statement

  Lesson 14 — continue Statement

  Lesson 15 — Mini Project — Menu-Driven Program

Lesson 8 Complete

Next: Lesson 9 — while Loop.

`,
};

export default lesson8;
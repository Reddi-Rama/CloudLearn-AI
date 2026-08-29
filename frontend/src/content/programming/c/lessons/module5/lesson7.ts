const lesson7 = {
  id: "lesson7",

  title: "Conditional Operator",

  content: `

# Lesson 7: Conditional Operator

## Introduction

The conditional operator is a special operator in C that provides a short way to write a simple if-else decision.

It is also called the ternary operator because it uses three operands.

The general syntax is:

\`\`\`c
condition ? expression1 : expression2;
\`\`\`

The condition is evaluated first.

If the condition is true, expression1 is selected.

If the condition is false, expression2 is selected.

For example:

\`\`\`c
int age = 20;

const char *result = (age >= 18) ? "Adult" : "Minor";

printf("%s\\n", result);
\`\`\`

Output:

\`\`\`text
Adult
\`\`\`

---

# 1. What Is the Conditional Operator?

The conditional operator allows a program to choose between two expressions based on a condition.

The general form is:

\`\`\`c
condition ? true_expression : false_expression
\`\`\`

For example:

\`\`\`c
int result = (10 > 5) ? 10 : 5;
\`\`\`

Since:

\`\`\`text
10 > 5
↓
true
\`\`\`

the first expression is selected.

Therefore:

\`\`\`text
result = 10
\`\`\`

---

# 2. Why Is It Called the Ternary Operator?

The conditional operator uses three operands.

For example:

\`\`\`c
condition ? expression1 : expression2
\`\`\`

The three operands are:

\`\`\`text
1. condition
2. expression1
3. expression2
\`\`\`

Therefore, it is called a ternary operator.

The symbols used are:

\`\`\`text
? :
\`\`\`

---

# 3. Basic Syntax

The general syntax is:

\`\`\`c
condition ? expression1 : expression2;
\`\`\`

The execution can be represented as:

\`\`\`text
             condition
                 ↓
          ┌──────┴──────┐
        true           false
         ↓               ↓
 expression1       expression2
         └──────┬────────┘
                ↓
             result
\`\`\`

---

# 4. Simple Example

Consider:

\`\`\`c
int number = 10;

int result = (number > 0) ? 1 : 0;

printf("%d\\n", result);
\`\`\`

The condition is:

\`\`\`text
number > 0
10 > 0
↓
true
\`\`\`

Therefore:

\`\`\`text
result = 1
\`\`\`

Output:

\`\`\`text
1
\`\`\`

---

# 5. Conditional Operator With Assignment

The conditional operator is commonly used to assign one of two values to a variable.

Example:

\`\`\`c
int a = 10;
int b = 20;

int max = (a > b) ? a : b;

printf("Maximum = %d\\n", max);
\`\`\`

Since:

\`\`\`text
10 > 20
↓
false
\`\`\`

the value of b is selected.

Output:

\`\`\`text
Maximum = 20
\`\`\`

---

# 6. Conditional Operator vs if-else

The following if-else statement:

\`\`\`c
int age = 20;

if (age >= 18)
{
    printf("Adult\\n");
}
else
{
    printf("Minor\\n");
}
\`\`\`

can be written using the conditional operator:

\`\`\`c
int age = 20;

printf("%s\\n", (age >= 18) ? "Adult" : "Minor");
\`\`\`

The conditional operator is useful when the decision is simple.

For larger blocks of statements, if-else is usually clearer.

---

# 7. Finding the Larger Number

The conditional operator can be used to find the larger of two numbers.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 25;
    int b = 40;

    int largest = (a > b) ? a : b;

    printf("Largest = %d\\n", largest);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Largest = 40
\`\`\`

---

# 8. Finding the Smaller Number

Similarly, it can find the smaller number.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 25;
    int b = 40;

    int smallest = (a < b) ? a : b;

    printf("Smallest = %d\\n", smallest);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Smallest = 25
\`\`\`

---

# 9. Checking Even or Odd

The conditional operator can be used with the remainder operator.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 12;

    const char *result =
        (number % 2 == 0) ? "Even" : "Odd";

    printf("%s\\n", result);

    return 0;
}
\`\`\`

Since:

\`\`\`text
12 % 2 = 0
\`\`\`

the condition is true.

Output:

\`\`\`text
Even
\`\`\`

---

# 10. Checking Positive or Negative

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = -8;

    const char *result =
        (number >= 0) ? "Non-negative" : "Negative";

    printf("%s\\n", result);

    return 0;
}
\`\`\`

Since:

\`\`\`text
-8 >= 0
↓
false
\`\`\`

the second expression is selected.

Output:

\`\`\`text
Negative
\`\`\`

---

# 11. Conditional Operator With Characters

The conditional operator can also select characters.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks = 80;

    char grade = (marks >= 50) ? 'P' : 'F';

    printf("Grade = %c\\n", grade);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Grade = P
\`\`\`

---

# 12. Conditional Operator With User Input

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    printf("Enter a number: ");
    scanf("%d", &number);

    const char *result =
        (number % 2 == 0) ? "Even" : "Odd";

    printf("%s\\n", result);

    return 0;
}
\`\`\`

If the user enters:

\`\`\`text
15
\`\`\`

the output is:

\`\`\`text
Odd
\`\`\`

---

# 13. Nested Conditional Operator

A conditional operator can contain another conditional operator.

Example:

\`\`\`c
int marks = 85;

char grade =
    (marks >= 90) ? 'A' :
    (marks >= 75) ? 'B' :
    (marks >= 50) ? 'C' :
                     'F';
\`\`\`

The conditions are checked from left to right.

For 85:

\`\`\`text
85 >= 90 → false
85 >= 75 → true
\`\`\`

Therefore:

\`\`\`text
grade = 'B'
\`\`\`

Nested conditional operators should be used carefully because excessive nesting can reduce readability.

---

# 14. Conditional Operator as an Expression

The conditional operator produces a value.

For example:

\`\`\`c
int result = (5 > 3) ? 100 : 200;
\`\`\`

The conditional expression produces:

\`\`\`text
100
\`\`\`

Therefore:

\`\`\`text
result = 100
\`\`\`

---

# 15. Conditional Operator With Function Arguments

The result of a conditional expression can be passed directly to a function.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 20;

    printf("%s\\n",
           (age >= 18) ? "Eligible" : "Not eligible");

    return 0;
}
\`\`\`

The conditional operator produces one of the two strings, and that result is passed to printf().

---

# 16. Conditional Operator With Arithmetic Expressions

The expressions selected by the conditional operator can contain calculations.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 10;
    int b = 20;

    int result = (a > b) ? (a + b) : (b - a);

    printf("Result = %d\\n", result);

    return 0;
}
\`\`\`

Since a is not greater than b:

\`\`\`text
b - a
20 - 10
↓
10
\`\`\`

Output:

\`\`\`text
Result = 10
\`\`\`

---

# 17. Conditional Operator and Parentheses

Parentheses can make expressions easier to understand.

For example:

\`\`\`c
int maximum = (a > b) ? a : b;
\`\`\`

This clearly shows the complete conditional expression.

Parentheses are especially useful when the expression is part of a larger expression.

---

# 18. Practical Example — Largest of Three Numbers

A conditional operator can be combined to find the largest of three numbers.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 25;
    int b = 40;
    int c = 30;

    int largest = (a > b)
                    ? ((a > c) ? a : c)
                    : ((b > c) ? b : c);

    printf("Largest = %d\\n", largest);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Largest = 40
\`\`\`

Although this works, an if-else structure may be easier to read for more complex decisions.

---

# 19. Practical Example — Pass or Fail

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks = 72;

    const char *result =
        (marks >= 40) ? "Pass" : "Fail";

    printf("Result = %s\\n", result);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Result = Pass
\`\`\`

---

# 20. Practical Example — Absolute Value

The conditional operator can be used to obtain the absolute value of an integer.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = -25;

    int absolute = (number < 0) ? -number : number;

    printf("Absolute value = %d\\n", absolute);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Absolute value = 25
\`\`\`

---

# 21. When to Use the Conditional Operator

The conditional operator is useful when:

- There are only two possible choices.
- The selected result is simple.
- A value needs to be assigned based on a condition.
- A short expression is preferred.

Example:

\`\`\`c
int max = (a > b) ? a : b;
\`\`\`

---

# 22. When to Prefer if-else

Use if-else when the decision contains several statements or becomes difficult to read.

For example:

\`\`\`c
if (marks >= 40)
{
    printf("Pass\\n");
    printf("Student cleared the examination.\\n");
}
else
{
    printf("Fail\\n");
    printf("Student did not clear the examination.\\n");
}
\`\`\`

Using a conditional operator for large blocks would make the code unnecessarily complicated.

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting the Colon

Incorrect:

\`\`\`c
result = (a > b) ? a;
\`\`\`

Correct:

\`\`\`c
result = (a > b) ? a : b;
\`\`\`

Both true and false expressions are required.

---

## Mistake 2 — Confusing the Conditional Operator With if-else

The conditional operator produces a value:

\`\`\`c
int max = (a > b) ? a : b;
\`\`\`

An if statement controls the execution of statements:

\`\`\`c
if (a > b)
{
    printf("a is larger\\n");
}
\`\`\`

---

## Mistake 3 — Using Too Many Nested Conditional Operators

Although nested conditional operators are valid, excessive nesting can make the code difficult to understand.

Prefer if-else when the decision becomes complicated.

---

## Mistake 4 — Forgetting That It Is an Expression

The conditional operator can be used wherever an expression is appropriate.

For example:

\`\`\`c
printf("%d\\n", (a > b) ? a : b);
\`\`\`

---

# Lesson Summary

In this lesson, you learned:

- The conditional operator is written using ? and :.
- It is also called the ternary operator.
- It has three operands.
- It selects one of two expressions.
- It can be used for simple decisions.
- It can be used in assignments.
- It can be used with function arguments.
- It can be used with arithmetic expressions.
- Nested conditional operators are possible.
- Excessive nesting can reduce readability.
- if-else is generally better for complex decisions.

The key idea is:

\`\`\`text
condition ? true_expression : false_expression
\`\`\`

If the condition is true:

\`\`\`text
true_expression
\`\`\`

is selected.

If the condition is false:

\`\`\`text
false_expression
\`\`\`

is selected.

---

# Module 3 Progress

✓ Lesson 1 — Conditional Statements

✓ Lesson 2 — if Statement

✓ Lesson 3 — if-else Statement

✓ Lesson 4 — else-if Ladder

✓ Lesson 5 — Nested if

✓ Lesson 6 — switch Statement

✓ Lesson 7 — Conditional Operator

→ Lesson 8 — for Loop

  Lesson 9 — while Loop
  Lesson 10 — do-while Loop
  Lesson 11 — Nested Loops
  Lesson 12 — break
  Lesson 13 — continue
  Lesson 14 — goto
  Lesson 15 — Loop Control

Lesson 7 Complete

Next: Lesson 8 — for Loop.

`,
};

export default lesson7;
const lesson13 = {
  id: "lesson13",

  title: "Recursive Functions",

  content: `

# Lesson 13: Recursive Functions

## Introduction

A **recursive function** is a function that calls itself.

Recursion is useful when a problem can be divided into smaller problems of the same type.

A recursive function must have a **base condition** that stops the recursive calls.

The basic idea is:

Function
↓
Calls itself
↓
Smaller problem
↓
Calls itself
↓
Base condition
↓
Stops

---

# 1. What Is Recursion?

Consider a function that displays numbers from 5 down to 1.

Instead of writing separate statements, a function can call itself with a smaller value.

Example:

\`\`\`c
#include <stdio.h>

void countDown(int number)
{
    if (number == 0)
    {
        return;
    }

    printf("%d\\n", number);

    countDown(number - 1);
}

int main(void)
{
    countDown(5);

    return 0;
}
\`\`\`

Output:

\`\`\`text
5
4
3
2
1
\`\`\`

---

# 2. Base Condition

The **base condition** is the condition that stops recursion.

In the previous example:

\`\`\`c
if (number == 0)
{
    return;
}
\`\`\`

When \`number\` becomes 0, the function stops calling itself.

Without a suitable base condition, recursive calls may continue until the program runs out of call-stack space.

---

# 3. Recursive Case

The **recursive case** is the part of the function where the function calls itself.

Example:

\`\`\`c
countDown(number - 1);
\`\`\`

The value becomes smaller during each call.

Therefore:

\`\`\`text
5
↓
4
↓
3
↓
2
↓
1
↓
0
↓
Stop
\`\`\`

---

# 4. Factorial Using Recursion

The factorial of a positive integer is calculated as:

\`\`\`text
5! = 5 × 4 × 3 × 2 × 1
\`\`\`

The recursive relationship is:

\`\`\`text
n! = n × (n - 1)!
\`\`\`

Example:

\`\`\`c
#include <stdio.h>

int factorial(int number)
{
    if (number <= 1)
    {
        return 1;
    }

    return number * factorial(number - 1);
}

int main(void)
{
    int result;

    result = factorial(5);

    printf("Factorial = %d\\n", result);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Factorial = 120
\`\`\`

---

# 5. How Factorial Recursion Works

When we call:

\`\`\`c
factorial(5);
\`\`\`

the function calls itself:

\`\`\`text
factorial(5)
    ↓
5 × factorial(4)
    ↓
4 × factorial(3)
    ↓
3 × factorial(2)
    ↓
2 × factorial(1)
    ↓
1
\`\`\`

The result is then returned through the function calls.

---

# 6. Sum of Natural Numbers

Recursion can also be used to calculate the sum of natural numbers.

Example:

\`\`\`c
#include <stdio.h>

int sum(int number)
{
    if (number == 0)
    {
        return 0;
    }

    return number + sum(number - 1);
}

int main(void)
{
    int result;

    result = sum(5);

    printf("Sum = %d\\n", result);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Sum = 15
\`\`\`

Because:

\`\`\`text
5 + 4 + 3 + 2 + 1 = 15
\`\`\`

---

# 7. Fibonacci Using Recursion

The Fibonacci sequence begins:

\`\`\`text
0 1 1 2 3 5 8 13 ...
\`\`\`

Each number after the first two is obtained by adding the previous two numbers.

Example:

\`\`\`c
#include <stdio.h>

int fibonacci(int number)
{
    if (number <= 1)
    {
        return number;
    }

    return fibonacci(number - 1)
         + fibonacci(number - 2);
}

int main(void)
{
    int result;

    result = fibonacci(6);

    printf("Fibonacci = %d\\n", result);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Fibonacci = 8
\`\`\`

---

# 8. Recursive Function for Counting

Recursion can also be used without mathematical calculations.

Example:

\`\`\`c
#include <stdio.h>

void display(int number)
{
    if (number > 5)
    {
        return;
    }

    printf("%d ", number);

    display(number + 1);
}

int main(void)
{
    display(1);

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 3 4 5
\`\`\`

---

# 9. Recursion and the Call Stack

Every function call is managed using the program's call stack.

For example:

\`\`\`text
display(3)
    ↓
display(2)
    ↓
display(1)
    ↓
display(0)
\`\`\`

When the base condition is reached, the function calls return in reverse order.

This is why recursion is closely related to the function-call stack.

---

# 10. Recursion vs Loops

Many recursive problems can also be solved using loops.

Recursive factorial:

\`\`\`c
int factorial(int number)
{
    if (number <= 1)
    {
        return 1;
    }

    return number * factorial(number - 1);
}
\`\`\`

The same calculation using a loop:

\`\`\`c
int factorial(int number)
{
    int result = 1;

    for (int i = 1; i <= number; i++)
    {
        result *= i;
    }

    return result;
}
\`\`\`

Both approaches can produce the same result.

---

# 11. Advantages of Recursion

Recursion can:

- Make some problems easier to express.
- Provide a natural solution for problems that contain smaller versions of themselves.
- Be useful for hierarchical data structures.
- Make certain algorithms shorter and easier to describe.

---

# 12. Disadvantages of Recursion

Recursion can:

- Use additional stack memory.
- Be harder to understand for beginners.
- Create many function calls.
- Cause stack overflow when recursion becomes too deep.

Therefore, recursion should be used when it makes the solution clearer or more suitable.

---

# 13. Common Recursion Mistake

A recursive function must make progress toward its base condition.

Incorrect example:

\`\`\`c
void display(int number)
{
    printf("%d", number);

    display(number);
}
\`\`\`

The value of \`number\` never changes.

Therefore, the function does not move toward a stopping condition.

A better example is:

\`\`\`c
void display(int number)
{
    if (number == 0)
    {
        return;
    }

    printf("%d ", number);

    display(number - 1);
}
\`\`\`

---

# 14. Power Using Recursion

A recursive function can calculate a power.

Example:

\`\`\`c
#include <stdio.h>

int power(int base, int exponent)
{
    if (exponent == 0)
    {
        return 1;
    }

    return base * power(base, exponent - 1);
}

int main(void)
{
    int result;

    result = power(2, 4);

    printf("Result = %d\\n", result);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Result = 16
\`\`\`

---

# 15. Important Points

Remember:

- A recursive function calls itself.
- Every recursive function needs a base condition.
- The base condition stops recursion.
- The recursive case calls the function again.
- The recursive case should move toward the base condition.
- Recursive calls use the call stack.
- Many recursive problems can also be solved using loops.
- Excessive recursion can cause stack overflow.

---

# Lesson Summary

Recursion is a technique in which a function calls itself to solve a smaller version of a problem.

A recursive function generally contains:

\`\`\`text
Base Condition
      +
Recursive Case
\`\`\`

For example:

\`\`\`c
int factorial(int number)
{
    if (number <= 1)
    {
        return 1;
    }

    return number * factorial(number - 1);
}
\`\`\`

Recursion is an important concept in C and becomes especially useful when working with algorithms and data structures.

---

# Module 4 Progress

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

→ Lesson 14 — Library Functions

  Lesson 15 — Mini Project — Calculator Using Functions

Lesson 13 Complete

`,
};

export default lesson13;
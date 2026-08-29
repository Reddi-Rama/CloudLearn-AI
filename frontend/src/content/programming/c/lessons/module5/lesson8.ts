const lesson8 = {
  id: "lesson8",

  title: "for Loop",

  content: `

# Lesson 8: for Loop

## Introduction

A for loop is a repetition statement in C.

It is used when a block of code needs to be executed repeatedly.

For example:

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    printf("%d\\n", i);
}
\`\`\`

Output:

\`\`\`text
1
2
3
4
5
\`\`\`

The loop repeats while the condition remains true.

---

# 1. What Is a for Loop?

A for loop repeatedly executes a block of statements.

The general syntax is:

\`\`\`c
for (initialization; condition; update)
{
    statements;
}
\`\`\`

The three main parts are:

\`\`\`text
initialization
      ↓
  condition
      ↓
   statements
      ↓
     update
      ↓
   condition
      ↓
    repeat
\`\`\`

---

# 2. Parts of a for Loop

Consider:

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    printf("%d\\n", i);
}
\`\`\`

### Initialization

\`\`\`c
int i = 1
\`\`\`

This executes once before the loop begins.

### Condition

\`\`\`c
i <= 5
\`\`\`

This is checked before every iteration.

### Update

\`\`\`c
i++
\`\`\`

This executes after each iteration.

---

# 3. Execution of a for Loop

For:

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    printf("%d\\n", i);
}
\`\`\`

the execution is:

\`\`\`text
Initialize i = 1
       ↓
Check i <= 5
       ↓
Execute body
       ↓
Increment i
       ↓
Check condition again
       ↓
Repeat
       ↓
Condition becomes false
       ↓
Exit loop
\`\`\`

---

# 4. Simple for Loop

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 5; i++)
    {
        printf("Hello\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Hello
Hello
Hello
Hello
Hello
\`\`\`

The loop body executes five times.

---

# 5. Printing Numbers

A for loop can print a sequence of numbers.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 10; i++)
    {
        printf("%d\\n", i);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1
2
3
4
5
6
7
8
9
10
\`\`\`

---

# 6. Counting Backward

The update expression can decrease the loop variable.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 10; i >= 1; i--)
    {
        printf("%d\\n", i);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
10
9
8
7
6
5
4
3
2
1
\`\`\`

---

# 7. Incrementing by More Than One

The update expression does not have to be i++.

For example:

\`\`\`c
for (int i = 0; i <= 10; i += 2)
{
    printf("%d\\n", i);
}
\`\`\`

Output:

\`\`\`text
0
2
4
6
8
10
\`\`\`

Here, the value increases by 2 after every iteration.

---

# 8. Starting From Zero

It is common to start loops from zero, especially when working with arrays.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 0; i < 5; i++)
    {
        printf("%d\\n", i);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
0
1
2
3
4
\`\`\`

Notice the condition:

\`\`\`c
i < 5
\`\`\`

rather than:

\`\`\`c
i <= 5
\`\`\`

---

# 9. for Loop With a Sum

A for loop can be used to calculate a sum.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int sum = 0;

    for (int i = 1; i <= 10; i++)
    {
        sum += i;
    }

    printf("Sum = %d\\n", sum);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Sum = 55
\`\`\`

The variable sum stores the accumulated result.

---

# 10. for Loop With Multiplication

A loop can also calculate a product.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int product = 1;

    for (int i = 1; i <= 5; i++)
    {
        product *= i;
    }

    printf("Product = %d\\n", product);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Product = 120
\`\`\`

---

# 11. Multiplication Table

A for loop is useful for generating multiplication tables.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 5;

    for (int i = 1; i <= 10; i++)
    {
        printf("%d x %d = %d\\n", number, i, number * i);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
\`\`\`

---

# 12. for Loop With User Input

A loop can repeat based on a value entered by the user.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int n;

    printf("Enter a number: ");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++)
    {
        printf("%d\\n", i);
    }

    return 0;
}
\`\`\`

If the user enters 5:

\`\`\`text
1
2
3
4
5
\`\`\`

is printed.

---

# 13. for Loop With Multiple Statements

The loop body can contain multiple statements.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 3; i++)
    {
        printf("Iteration = %d\\n", i);
        printf("Inside the loop\\n");
    }

    return 0;
}
\`\`\`

Each statement inside the braces executes during every iteration.

---

# 14. Multiple Variables in a for Loop

A for loop can contain multiple expressions separated by commas.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1, j = 5; i <= 5; i++, j--)
    {
        printf("i = %d, j = %d\\n", i, j);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
i = 1, j = 5
i = 2, j = 4
i = 3, j = 3
i = 4, j = 2
i = 5, j = 1
\`\`\`

Both variables are updated after each iteration.

---

# 15. Omitting Parts of a for Loop

The initialization, condition, and update expressions can technically be omitted.

For example:

\`\`\`c
int i = 1;

for (; i <= 5; i++)
{
    printf("%d\\n", i);
}
\`\`\`

The initialization is outside the loop.

Another example:

\`\`\`c
for (int i = 1; ; i++)
{
    printf("%d\\n", i);

    if (i == 5)
    {
        break;
    }
}
\`\`\`

Here, the condition is omitted.

A for loop with all three expressions omitted is:

\`\`\`c
for (;;)
{
    statements;
}
\`\`\`

This creates an infinite loop unless something inside the loop causes it to terminate.

---

# 16. Infinite for Loop

An infinite loop repeatedly executes without naturally reaching a false condition.

Example:

\`\`\`c
for (;;)
{
    printf("Running\\n");
}
\`\`\`

This continues indefinitely unless the program is stopped or the loop is exited.

An infinite loop should be used intentionally.

---

# 17. for Loop and if Statement

A for loop can contain an if statement.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 10; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d\\n", i);
        }
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
2
4
6
8
10
\`\`\`

The loop visits all numbers, while the if statement selects the even numbers.

---

# 18. Finding Even Numbers

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 20; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d ", i);
        }
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
2 4 6 8 10 12 14 16 18 20
\`\`\`

---

# 19. Finding Odd Numbers

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 20; i++)
    {
        if (i % 2 != 0)
        {
            printf("%d ", i);
        }
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 3 5 7 9 11 13 15 17 19
\`\`\`

---

# 20. Factorial Using for Loop

The factorial of a positive integer n is:

\`\`\`text
n! = n × (n-1) × (n-2) × ... × 1
\`\`\`

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int n = 5;
    int factorial = 1;

    for (int i = 1; i <= n; i++)
    {
        factorial *= i;
    }

    printf("Factorial = %d\\n", factorial);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Factorial = 120
\`\`\`

---

# 21. Reverse Counting

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 10; i >= 1; i--)
    {
        printf("%d ", i);
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
10 9 8 7 6 5 4 3 2 1
\`\`\`

---

# 22. for Loop With Character Values

A for loop can also work with characters.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (char ch = 'A'; ch <= 'Z'; ch++)
    {
        printf("%c ", ch);
    }

    printf("\\n");

    return 0;
}
\`\`\`

This prints the characters from A through Z in implementations where the execution character set has the expected ordering.

---

# 23. Nested for Loop Preview

A for loop can contain another for loop.

Example:

\`\`\`c
for (int i = 1; i <= 3; i++)
{
    for (int j = 1; j <= 3; j++)
    {
        printf("%d %d\\n", i, j);
    }
}
\`\`\`

The inner loop executes completely for each iteration of the outer loop.

Nested loops will be studied in detail later.

---

# 24. Practical Example — Sum of Even Numbers

\`\`\`c
#include <stdio.h>

int main(void)
{
    int sum = 0;

    for (int i = 1; i <= 10; i++)
    {
        if (i % 2 == 0)
        {
            sum += i;
        }
    }

    printf("Sum of even numbers = %d\\n", sum);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Sum of even numbers = 30
\`\`\`

---

# 25. Practical Example — Count Positive Numbers

\`\`\`c
#include <stdio.h>

int main(void)
{
    int values[] = {10, -5, 8, -2, 15};
    int count = 0;

    for (int i = 0; i < 5; i++)
    {
        if (values[i] > 0)
        {
            count++;
        }
    }

    printf("Positive numbers = %d\\n", count);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Positive numbers = 3
\`\`\`

---

# 26. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int n = 10;
    int sum = 0;

    for (int i = 1; i <= n; i++)
    {
        sum += i;
    }

    printf("Numbers from 1 to %d\\n", n);
    printf("Sum = %d\\n", sum);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Numbers from 1 to 10
Sum = 55
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting the Update

Be careful with:

\`\`\`c
for (int i = 1; i <= 10; i++)
\`\`\`

The update:

\`\`\`c
i++
\`\`\`

allows the loop variable to change.

---

## Mistake 2 — Wrong Condition

For printing 1 through 10:

Correct:

\`\`\`c
for (int i = 1; i <= 10; i++)
\`\`\`

Using:

\`\`\`c
i < 10
\`\`\`

would stop at 9.

---

## Mistake 3 — Accidental Infinite Loop

Be careful with:

\`\`\`c
for (int i = 1; i <= 10;)
{
    printf("%d\\n", i);
}
\`\`\`

The value of i never changes, so the condition remains true.

---

## Mistake 4 — Off-by-One Errors

Compare:

\`\`\`c
i < 5
\`\`\`

with:

\`\`\`c
i <= 5
\`\`\`

The first allows five iterations when starting at zero:

\`\`\`text
0 1 2 3 4
\`\`\`

The second allows six iterations:

\`\`\`text
0 1 2 3 4 5
\`\`\`

---

# Lesson Summary

In this lesson, you learned:

- A for loop repeats a block of code.
- A for loop has initialization, condition, and update expressions.
- Initialization executes once before the loop.
- The condition is checked before every iteration.
- The update executes after each iteration.
- for loops can count upward or downward.
- The update can increase or decrease by different amounts.
- Multiple variables can be used in a for loop.
- Parts of the for loop can be omitted.
- An omitted condition can create an infinite loop.
- for loops can be combined with if statements.
- for loops are commonly used for counting, summing, searching, and processing data.
- for loops can be nested.

The key structure is:

\`\`\`text
for (initialization; condition; update)
{
    statements;
}
\`\`\`

Execution:

\`\`\`text
Initialization
      ↓
  Condition
      ↓
    Body
      ↓
   Update
      ↓
  Condition
      ↓
   Repeat
\`\`\`

---

# Module 3 Progress

✓ Lesson 1 — Conditional Statements

✓ Lesson 2 — if Statement

✓ Lesson 3 — if-else Statement

✓ Lesson 4 — else-if Ladder

✓ Lesson 5 — Nested if

✓ Lesson 6 — switch Statement

✓ Lesson 7 — Conditional Operator

✓ Lesson 8 — for Loop

→ Lesson 9 — while Loop

  Lesson 10 — do-while Loop
  Lesson 11 — Nested Loops
  Lesson 12 — break
  Lesson 13 — continue
  Lesson 14 — goto
  Lesson 15 — Loop Control

Lesson 8 Complete

Next: Lesson 9 — while Loop.

`,
};

export default lesson8;
const lesson11 = {
  id: "lesson11",

  title: "for Loop",

  content: `

# Lesson 11: for Loop

## Introduction

The for loop is one of the most commonly used looping statements in C.

It is especially useful when the number of iterations is known or can be controlled using a counter.

For example, to print numbers from 1 to 5:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 5; i++)
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
\`\`\`

The for loop combines initialization, condition checking, and updating in one loop header.

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

The three parts are:

\`\`\`text
initialization
      ↓
condition
      ↓
body
      ↓
update
      ↓
condition again
\`\`\`

---

# 2. Basic for Loop

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 5; i++)
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
\`\`\`

---

# 3. Parts of a for Loop

Consider:

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    printf("%d\\n", i);
}
\`\`\`

It contains:

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

This executes after each iteration of the loop body.

---

# 4. Execution Flow

The execution order is:

\`\`\`text
Initialization
      ↓
Condition
      ↓
  True?
 /     \\
Yes     No
 ↓       ↓
Body    Exit
 ↓
Update
 ↓
Condition
 ↓
Repeat
\`\`\`

For:

\`\`\`c
for (int i = 1; i <= 3; i++)
\`\`\`

the sequence is:

\`\`\`text
i = 1
 ↓
1 <= 3 → true
 ↓
body
 ↓
i++
 ↓
i = 2
 ↓
2 <= 3 → true
 ↓
body
 ↓
i++
 ↓
i = 3
 ↓
3 <= 3 → true
 ↓
body
 ↓
i++
 ↓
i = 4
 ↓
4 <= 3 → false
 ↓
exit
\`\`\`

---

# 5. Printing Numbers

The for loop is commonly used to print a sequence.

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 10; i++)
    {
        printf("%d ", i);
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 3 4 5 6 7 8 9 10
\`\`\`

---

# 6. Counting Backward

The update expression does not have to be an increment.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 5; i >= 1; i--)
    {
        printf("%d\\n", i);
    }

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

# 7. Incrementing by More Than One

The update expression can change the variable by any appropriate amount.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 2; i <= 10; i += 2)
    {
        printf("%d\\n", i);
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

This prints even numbers.

---

# 8. Printing Odd Numbers

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 10; i += 2)
    {
        printf("%d\\n", i);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1
3
5
7
9
\`\`\`

---

# 9. Sum of Numbers

A for loop can calculate the sum of numbers.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int sum = 0;

    for (int i = 1; i <= 5; i++)
    {
        sum += i;
    }

    printf("Sum = %d\\n", sum);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Sum = 15
\`\`\`

The calculation is:

\`\`\`text
1 + 2 + 3 + 4 + 5 = 15
\`\`\`

---

# 10. Factorial Using for Loop

The factorial of 5 is:

\`\`\`text
5 × 4 × 3 × 2 × 1 = 120
\`\`\`

Program:

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

# 11. for Loop With User Input

The loop limit can be obtained from the user.

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

If the user enters:

\`\`\`text
5
\`\`\`

the output is:

\`\`\`text
1
2
3
4
5
\`\`\`

---

# 12. Multiple Statements in the Initialization

More than one expression can appear in the initialization section using the comma operator.

Example:

\`\`\`c
for (int i = 1, j = 10; i <= 5; i++, j--)
{
    printf("i = %d, j = %d\\n", i, j);
}
\`\`\`

Output:

\`\`\`text
i = 1, j = 10
i = 2, j = 9
i = 3, j = 8
i = 4, j = 7
i = 5, j = 6
\`\`\`

---

# 13. Multiple Update Expressions

The update section can also contain multiple expressions.

Example:

\`\`\`c
for (int i = 1, j = 10; i <= 5; i++, j--)
{
    printf("%d %d\\n", i, j);
}
\`\`\`

Here:

\`\`\`c
i++
j--
\`\`\`

both execute after each iteration.

---

# 14. for Loop Without Braces

If the loop body contains only one statement, braces may be omitted.

Example:

\`\`\`c
for (int i = 1; i <= 5; i++)
    printf("%d\\n", i);
\`\`\`

This is valid C.

However, braces are often preferred because they make the loop body clearer and reduce mistakes when adding more statements later.

---

# 15. Infinite for Loop

All three sections of a for loop are optional.

For example:

\`\`\`c
for (;;)
{
    printf("Running\\n");
}
\`\`\`

This creates an infinite loop because there is no condition that becomes false.

A break statement can be used to terminate it.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    for (;;)
    {
        printf("%d\\n", i);

        if (i == 5)
        {
            break;
        }

        i++;
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
\`\`\`

---

# 16. for Loop With break

The break statement immediately terminates the loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 10; i++)
    {
        if (i == 6)
        {
            break;
        }

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
\`\`\`

---

# 17. for Loop With continue

The continue statement skips the remaining statements in the current iteration.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 5; i++)
    {
        if (i == 3)
        {
            continue;
        }

        printf("%d\\n", i);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
1
2
4
5
\`\`\`

The iteration where i is 3 is skipped.

---

# 18. Nested for Loops

A for loop can contain another for loop.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 1; i <= 3; i++)
    {
        for (int j = 1; j <= 3; j++)
        {
            printf("i = %d, j = %d\\n", i, j);
        }
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
\`\`\`

Nested loops are commonly used for patterns, tables, and two-dimensional data.

---

# 19. Multiplication Table

A for loop can generate a multiplication table.

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

# 20. Counting Digits With for Loop

A for loop can also process digits.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 12345;
    int count = 0;

    for (; number > 0; number /= 10)
    {
        count++;
    }

    printf("Number of digits = %d\\n", count);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Number of digits = 5
\`\`\`

The initialization section is empty because number has already been initialized.

---

# 21. for Loop vs while Loop

Both loops can perform repeated operations.

A for loop is often convenient when initialization, condition, and update naturally belong together.

Example:

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    printf("%d\\n", i);
}
\`\`\`

The equivalent while loop is:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
    i++;
}
\`\`\`

Both produce the same sequence.

The choice depends on which form makes the code clearer.

---

# 22. for Loop vs do-while

The for loop checks its condition before executing the body.

The do-while loop executes the body first.

For example:

\`\`\`c
for (int i = 10; i < 5; i++)
{
    printf("%d\\n", i);
}
\`\`\`

The body executes zero times.

But:

\`\`\`c
int i = 10;

do
{
    printf("%d\\n", i);
    i++;
}
while (i < 5);
\`\`\`

The body executes once.

---

# 23. Scope of the Loop Variable

When a variable is declared inside the for initialization:

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    printf("%d\\n", i);
}
\`\`\`

the variable i has scope limited to the for statement and its associated body.

Therefore, this is invalid after the loop:

\`\`\`c
printf("%d\\n", i);
\`\`\`

If the variable needs to be used after the loop, declare it before the loop.

Example:

\`\`\`c
int i;

for (i = 1; i <= 5; i++)
{
    printf("%d\\n", i);
}

printf("Final i = %d\\n", i);
\`\`\`

---

# 24. Practical Example — Sum of Even Numbers

\`\`\`c
#include <stdio.h>

int main(void)
{
    int sum = 0;

    for (int i = 2; i <= 10; i += 2)
    {
        sum += i;
    }

    printf("Sum of even numbers = %d\\n", sum);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Sum of even numbers = 30
\`\`\`

Because:

\`\`\`text
2 + 4 + 6 + 8 + 10 = 30
\`\`\`

---

# 25. Practical Example — Reverse Counting

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

# 26. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    int n;

    printf("Enter a positive integer: ");
    scanf("%d", &n);

    printf("Numbers from 1 to %d:\\n", n);

    for (int i = 1; i <= n; i++)
    {
        printf("%d ", i);
    }

    printf("\\n");

    return 0;
}
\`\`\`

For input:

\`\`\`text
Enter a positive integer: 5
\`\`\`

Output:

\`\`\`text
Numbers from 1 to 5:
1 2 3 4 5
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting the Semicolons in the Header

The three sections are separated by semicolons.

Correct:

\`\`\`c
for (int i = 1; i <= 5; i++)
\`\`\`

---

## Mistake 2 — Forgetting the Update

Incorrect:

\`\`\`c
for (int i = 1; i <= 5;)
{
    printf("%d\\n", i);
}
\`\`\`

The loop variable never changes, so the condition remains true.

---

## Mistake 3 — Using the Wrong Condition

Be careful about:

\`\`\`c
i < 5
\`\`\`

versus:

\`\`\`c
i <= 5
\`\`\`

The first stops before 5, while the second includes 5.

---

## Mistake 4 — Modifying the Loop Variable Unexpectedly

Avoid unnecessary modifications of the loop variable inside the body because they can make the loop difficult to understand.

---

## Mistake 5 — Forgetting the Scope of i

A variable declared in:

\`\`\`c
for (int i = 1; ...)
\`\`\`

cannot normally be used after the loop.

---

# Lesson Summary

In this lesson, you learned:

- The for loop repeatedly executes a block of code.
- A for loop normally contains initialization, condition, and update.
- Initialization executes once.
- The condition is checked before every iteration.
- The update executes after each iteration.
- A for loop can count upward or downward.
- The update can increment by values other than one.
- for loops can calculate sums and factorials.
- for loops can work with user input.
- break can terminate a for loop.
- continue can skip an iteration.
- for loops can be nested.
- A loop variable declared in the for header has limited scope.
- A for loop can be written as an infinite loop using \`for (;;)\`.

The basic structure is:

\`\`\`text
Initialization
      ↓
Condition
      ↓
  True?
 /     \\
Yes     No
 ↓       ↓
Body    Exit
 ↓
Update
 ↓
Condition
\`\`\`

The most common form is:

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    printf("%d\\n", i);
}
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

✓ Lesson 8 — Conditional Operator

✓ Lesson 9 — while Loop

✓ Lesson 10 — do-while Loop

→ Lesson 11 — for Loop

  Lesson 12 — Nested Loops

  Lesson 13 — break Statement

  Lesson 14 — continue Statement

  Lesson 15 — Mini Project — Menu-Driven Program

Lesson 11 Complete

Next: Lesson 12 — Nested Loops.

`,
};

export default lesson11;
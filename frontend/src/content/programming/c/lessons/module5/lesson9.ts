const lesson9 = {
  id: "lesson9",

  title: "while Loop",

  content: `

# Lesson 9: while Loop

## Introduction

The while loop is a repetition statement in C.

It is used to repeatedly execute a block of statements as long as a specified condition remains true.

The general syntax is:

\`\`\`c
while (condition)
{
    statements;
}
\`\`\`

For example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 5)
    {
        printf("%d\\n", i);
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

# 1. What Is a while Loop?

A while loop repeatedly executes a block of code while its condition is true.

The basic structure is:

\`\`\`c
while (condition)
{
    statements;
}
\`\`\`

The condition is checked before every iteration.

Therefore, the while loop is called a **pre-test loop**.

---

# 2. Basic Syntax

The syntax of a while loop is:

\`\`\`c
while (condition)
{
    statements;
}
\`\`\`

The execution can be represented as:

\`\`\`text
       Condition
           ↓
     ┌─────┴─────┐
   true        false
     ↓             ↓
   Body           Exit
     ↓
 Condition
     ↓
   Repeat
\`\`\`

---

# 3. Simple while Loop

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 5)
    {
        printf("%d\\n", i);
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

The variable i is increased after every iteration.

---

# 4. Execution of a while Loop

Consider:

\`\`\`c
int i = 1;

while (i <= 3)
{
    printf("%d\\n", i);
    i++;
}
\`\`\`

Execution:

\`\`\`text
i = 1
 ↓
1 <= 3 → true
 ↓
Print 1
 ↓
i = 2
 ↓
2 <= 3 → true
 ↓
Print 2
 ↓
i = 3
 ↓
3 <= 3 → true
 ↓
Print 3
 ↓
i = 4
 ↓
4 <= 3 → false
 ↓
Exit
\`\`\`

---

# 5. while Loop for Counting

A while loop can be used to count numbers.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 10)
    {
        printf("%d ", i);
        i++;
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

The loop variable can also be decreased.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 10;

    while (i >= 1)
    {
        printf("%d ", i);
        i--;
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

# 7. while Loop With User Input

A while loop is useful when the number of repetitions depends on user input.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int n;
    int i = 1;

    printf("Enter a number: ");
    scanf("%d", &n);

    while (i <= n)
    {
        printf("%d\\n", i);
        i++;
    }

    return 0;
}
\`\`\`

If the user enters:

\`\`\`text
5
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

# 8. Sum Using while Loop

A while loop can calculate the sum of numbers.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;
    int sum = 0;

    while (i <= 10)
    {
        sum += i;
        i++;
    }

    printf("Sum = %d\\n", sum);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Sum = 55
\`\`\`

---

# 9. Even Numbers Using while Loop

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 2;

    while (i <= 20)
    {
        printf("%d ", i);
        i += 2;
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

# 10. Odd Numbers Using while Loop

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 20)
    {
        printf("%d ", i);
        i += 2;
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

# 11. while Loop With if Statement

A while loop can contain an if statement.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 10)
    {
        if (i % 2 == 0)
        {
            printf("%d ", i);
        }

        i++;
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
2 4 6 8 10
\`\`\`

---

# 12. Multiplication Table Using while

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 5;
    int i = 1;

    while (i <= 10)
    {
        printf("%d x %d = %d\\n",
               number,
               i,
               number * i);

        i++;
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

# 13. Factorial Using while Loop

The factorial of a positive integer n is:

\`\`\`text
n! = n × (n-1) × ... × 1
\`\`\`

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int n = 5;
    int i = 1;
    int factorial = 1;

    while (i <= n)
    {
        factorial *= i;
        i++;
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

# 14. Reading Input Until a Condition Is Met

A while loop can continue until a particular condition becomes false.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    printf("Enter a positive number: ");
    scanf("%d", &number);

    while (number > 0)
    {
        printf("You entered %d\\n", number);

        printf("Enter another positive number: ");
        scanf("%d", &number);
    }

    printf("Loop ended.\\n");

    return 0;
}
\`\`\`

The loop continues while the entered number is greater than zero.

---

# 15. Infinite while Loop

A while loop can become infinite if its condition never becomes false.

Example:

\`\`\`c
while (1)
{
    printf("Running\\n");
}
\`\`\`

Since 1 is considered true in a C condition, the loop continues indefinitely unless it is exited.

Infinite loops should be used intentionally.

---

# 16. Avoiding an Infinite Loop

Consider:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
}
\`\`\`

This is problematic because i is never changed.

The condition:

\`\`\`text
i <= 5
\`\`\`

remains true.

Correct version:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
    i++;
}
\`\`\`

---

# 17. while Loop With a Counter

A counter keeps track of how many times the loop has executed.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int count = 1;

    while (count <= 5)
    {
        printf("Iteration %d\\n", count);
        count++;
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5
\`\`\`

---

# 18. while Loop With Multiple Conditions

Logical operators can be used in a while condition.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i <= 10 && i != 5)
    {
        printf("%d ", i);
        i++;
    }

    printf("\\n");

    return 0;
}
\`\`\`

The loop stops when either condition becomes false.

---

# 19. Processing Digits of a Number

A while loop can be used to process the digits of an integer.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 12345;

    while (number > 0)
    {
        int digit = number % 10;

        printf("%d ", digit);

        number /= 10;
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
5 4 3 2 1
\`\`\`

The digits are processed from right to left.

---

# 20. Counting Digits

A while loop can count the number of digits in an integer.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 12345;
    int count = 0;

    while (number != 0)
    {
        number /= 10;
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

---

# 21. Reversing a Number

A while loop can also be used to reverse the digits of an integer.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 12345;
    int reverse = 0;

    while (number != 0)
    {
        int digit = number % 10;

        reverse = reverse * 10 + digit;

        number /= 10;
    }

    printf("Reverse = %d\\n", reverse);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Reverse = 54321
\`\`\`

---

# 22. while Loop and Arrays

A while loop can be used to traverse an array.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[] = {10, 20, 30, 40, 50};
    int i = 0;

    while (i < 5)
    {
        printf("%d ", numbers[i]);
        i++;
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
10 20 30 40 50
\`\`\`

---

# 23. while Loop vs for Loop

Both loops can perform repetition.

A for loop is commonly convenient when the number of iterations and loop control are known.

Example:

\`\`\`c
for (int i = 1; i <= 5; i++)
{
    printf("%d\\n", i);
}
\`\`\`

The same logic using while is:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
    i++;
}
\`\`\`

The while loop is often convenient when the termination condition is more naturally described without putting all loop-control expressions in the for header.

---

# 24. Practical Example — Sum of Digits

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 12345;
    int sum = 0;

    while (number != 0)
    {
        int digit = number % 10;

        sum += digit;

        number /= 10;
    }

    printf("Sum of digits = %d\\n", sum);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Sum of digits = 15
\`\`\`

---

# 25. Practical Example — Palindrome Number

A number is a palindrome if it reads the same forward and backward.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 121;
    int original = number;
    int reverse = 0;

    while (number != 0)
    {
        int digit = number % 10;

        reverse = reverse * 10 + digit;

        number /= 10;
    }

    if (original == reverse)
    {
        printf("Palindrome\\n");
    }
    else
    {
        printf("Not a palindrome\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Palindrome
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting to Update the Variable

Incorrect:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
}
\`\`\`

Correct:

\`\`\`c
int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
    i++;
}
\`\`\`

---

## Mistake 2 — Using the Wrong Condition

Always check whether the condition represents the desired number of iterations.

For example:

\`\`\`c
while (i < 5)
\`\`\`

and:

\`\`\`c
while (i <= 5)
\`\`\`

produce different results.

---

## Mistake 3 — Forgetting the Braces

For multiple statements, use braces:

\`\`\`c
while (i <= 5)
{
    printf("%d\\n", i);
    i++;
}
\`\`\`

---

## Mistake 4 — Accidentally Creating an Infinite Loop

Make sure that something inside the loop can eventually make the condition false.

---

# Lesson Summary

In this lesson, you learned:

- A while loop repeatedly executes statements while a condition is true.
- The condition is checked before each iteration.
- A while loop is a pre-test loop.
- A counter can control the loop.
- The loop variable can increase or decrease.
- while loops can process user input.
- while loops can calculate sums and factorials.
- while loops can process digits.
- while loops can traverse arrays.
- A while loop can be infinite if its condition never becomes false.
- Proper loop control is important to avoid infinite loops.
- while loops can be combined with if statements and logical operators.

The key structure is:

\`\`\`c
while (condition)
{
    statements;
}
\`\`\`

The execution is:

\`\`\`text
Check condition
      ↓
   true?
   ↙   ↘
 yes    no
  ↓      ↓
Body    Exit
  ↓
Update
  ↓
Check again
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

✓ Lesson 9 — while Loop

→ Lesson 10 — do-while Loop

  Lesson 11 — Nested Loops
  Lesson 12 — break
  Lesson 13 — continue
  Lesson 14 — goto
  Lesson 15 — Loop Control

Lesson 9 Complete

Next: Lesson 10 — do-while Loop.

`,
};

export default lesson9;
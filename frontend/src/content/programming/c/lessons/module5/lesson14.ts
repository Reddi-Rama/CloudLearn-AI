const lesson14 = {
  id: "lesson14",

  title: "goto Statement",

  content: `

# Lesson 14: goto Statement

## Introduction

The goto statement is a control-flow statement in C that transfers program execution directly to a labeled statement.

The basic form is:

\`\`\`c
goto label;

label:
    statement;
\`\`\`

When the goto statement executes, control moves to the statement marked with the specified label.

---

# 1. What Is the goto Statement?

The goto statement allows the program to jump from one part of a function to another part of the same function.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    printf("Start\\n");

    goto message;

    printf("This statement is skipped.\\n");

message:
    printf("End\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
Start
End
\`\`\`

The goto statement transfers control directly to the label named message.

---

# 2. Syntax of goto

The syntax is:

\`\`\`c
goto label;

label:
    statement;
\`\`\`

The label is followed by a colon:

\`\`\`c
label:
\`\`\`

The goto statement refers to that label:

\`\`\`c
goto label;
\`\`\`

---

# 3. Simple goto Example

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    printf("Statement 1\\n");

    goto skip;

    printf("Statement 2\\n");

skip:
    printf("Statement 3\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
Statement 1
Statement 3
\`\`\`

Statement 2 is skipped because execution jumps to skip.

---

# 4. Labels in C

A label identifies a location in a function.

Example:

\`\`\`c
start:
    printf("Hello\\n");
\`\`\`

The label is:

\`\`\`text
start
\`\`\`

The colon separates the label from the statement.

A goto can transfer control to it:

\`\`\`c
goto start;
\`\`\`

---

# 5. Forward goto

A goto can jump forward to a label.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    goto end;

    printf("This will not execute.\\n");

end:
    printf("Program ended.\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
Program ended.
\`\`\`

The label appears after the goto statement.

---

# 6. Backward goto

A goto can also jump backward to a label.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int count = 1;

start:
    printf("%d\\n", count);

    count++;

    if (count <= 5)
    {
        goto start;
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

The goto repeatedly transfers control back to start.

This creates a loop-like behavior.

---

# 7. goto and Conditions

goto is often combined with an if statement.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 10;

    if (number > 0)
    {
        goto positive;
    }

    printf("The number is not positive.\\n");
    goto end;

positive:
    printf("The number is positive.\\n");

end:
    printf("Program finished.\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
The number is positive.
Program finished.
\`\`\`

---

# 8. goto for Repetition

A backward goto can repeat a section of code.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int i = 1;

repeat:
    printf("%d ", i);

    i++;

    if (i <= 5)
    {
        goto repeat;
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
1 2 3 4 5
\`\`\`

However, loops such as for and while are generally clearer for repetition.

---

# 9. goto and Input Validation

goto can be used to repeat input when input is invalid.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

input:
    printf("Enter a positive number: ");

    if (scanf("%d", &number) != 1)
    {
        printf("Invalid input.\\n");
        return 1;
    }

    if (number <= 0)
    {
        printf("Invalid input. Try again.\\n");
        goto input;
    }

    printf("You entered %d\\n", number);

    return 0;
}
\`\`\`

The program jumps back to input when the value is invalid.

---

# 10. goto and Error Handling

One traditional use of goto in C is handling cleanup or error paths.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int success = 0;

    if (!success)
    {
        goto error;
    }

    printf("Operation completed.\\n");

    return 0;

error:
    printf("Operation failed.\\n");

    return 1;
}
\`\`\`

Output:

\`\`\`text
Operation failed.
\`\`\`

This demonstrates how goto can provide a direct path to an error-handling section.

---

# 11. goto Can Jump Only Within a Function

A goto statement cannot transfer control to a label in another function.

The label must belong to the same function as the goto statement.

Example:

\`\`\`c
void function1(void)
{
    goto label;
}

void function2(void)
{
label:
    printf("Hello\\n");
}
\`\`\`

This is not valid because label belongs to another function.

---

# 12. goto Does Not Have a Condition

The goto statement itself does not contain a condition.

For example:

\`\`\`c
goto start;
\`\`\`

always transfers control to start when executed.

A condition can be used around it:

\`\`\`c
if (condition)
{
    goto start;
}
\`\`\`

---

# 13. goto With Multiple Labels

A function can contain multiple labels.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int choice = 2;

    if (choice == 1)
    {
        goto first;
    }

    if (choice == 2)
    {
        goto second;
    }

    goto end;

first:
    printf("First option\\n");
    goto end;

second:
    printf("Second option\\n");

end:
    printf("Finished\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
Second option
Finished
\`\`\`

---

# 14. goto vs break

The two statements are different.

### break

Terminates the nearest enclosing loop or switch.

Example:

\`\`\`c
for (...)
{
    if (condition)
    {
        break;
    }
}
\`\`\`

### goto

Transfers control to a specified label.

Example:

\`\`\`c
goto label;

label:
    statement;
\`\`\`

Remember:

\`\`\`text
break
 ↓
Exit nearest loop or switch

goto
 ↓
Jump to specified label
\`\`\`

---

# 15. goto vs continue

continue skips the remaining statements of the current loop iteration.

goto transfers control to a label.

Example:

\`\`\`c
if (condition)
{
    continue;
}
\`\`\`

versus:

\`\`\`c
if (condition)
{
    goto label;
}
\`\`\`

They serve different purposes.

---

# 16. Using goto Carefully

Although goto is part of the C language, excessive use can make a program difficult to understand.

For example, many jumps can create confusing control flow.

Structured constructs such as:

\`\`\`text
if
else
for
while
do-while
break
continue
functions
\`\`\`

are usually preferred when they express the required control flow clearly.

---

# 17. A Controlled goto Example

A simple example with a single error path:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = -5;

    if (number < 0)
    {
        goto error;
    }

    printf("Valid number.\\n");

    return 0;

error:
    printf("Invalid number.\\n");

    return 1;
}
\`\`\`

Output:

\`\`\`text
Invalid number.
\`\`\`

The goto provides a direct path to the error-handling section.

---

# 18. goto and Cleanup

In larger C programs, goto can sometimes be used to move control to a common cleanup section when several operations can fail.

A simplified example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int resource1 = 1;
    int resource2 = 1;

    if (!resource1)
    {
        goto cleanup;
    }

    if (!resource2)
    {
        goto cleanup;
    }

    printf("All operations successful.\\n");

cleanup:
    printf("Cleanup section.\\n");

    return 0;
}
\`\`\`

The example demonstrates the idea of having a common section for final actions.

---

# 19. Common Problems With goto

Excessive use of goto can make programs difficult to follow.

When many jumps are present, the control flow becomes difficult to understand.

For this reason, goto should generally be used carefully and only when it improves the structure of the code.

---

# Common Beginner Mistakes

## Mistake 1 — Forgetting the Colon

Incorrect:

\`\`\`c
start
    printf("Hello");
\`\`\`

Correct:

\`\`\`c
start:
    printf("Hello");
\`\`\`

---

## Mistake 2 — Using an Undefined Label

Incorrect:

\`\`\`c
goto start;
\`\`\`

without a corresponding label.

The target label must exist in the same function.

---

## Mistake 3 — Creating an Unintended Infinite Loop

Example:

\`\`\`c
start:
    printf("Hello\\n");
    goto start;
\`\`\`

This repeatedly jumps to start and never reaches a terminating condition.

---

## Mistake 4 — Using goto When a Loop Is Clearer

Instead of:

\`\`\`c
start:
    ...
    goto start;
\`\`\`

a loop such as:

\`\`\`c
while (condition)
{
    ...
}
\`\`\`

is often easier to understand.

---

# Lesson Summary

In this lesson, you learned:

- goto transfers program control to a labeled statement.
- A label is written with a colon.
- goto can jump forward or backward.
- A goto target must be in the same function.
- goto can be combined with conditions.
- goto can be used for controlled repetition.
- goto can be used for error-handling paths.
- goto can sometimes be useful for common cleanup sections.
- Excessive use of goto can make code difficult to understand.
- Structured control statements are generally preferred when they express the required logic clearly.

The basic structure is:

\`\`\`text
goto label;

...

label:
    statement;
\`\`\`

The key idea is:

\`\`\`text
goto
 ↓
Transfer control
 ↓
Specified label
 ↓
Continue execution
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

✓ Lesson 10 — do-while Loop

✓ Lesson 11 — Nested Loops

✓ Lesson 12 — break

✓ Lesson 13 — continue

✓ Lesson 14 — goto

→ Lesson 15 — Loop Control

Lesson 14 Complete

Next: Lesson 15 — Loop Control.

`,
};

export default lesson14;
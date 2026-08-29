const lesson8 = {
  id: "lesson8",

  title: "main() Function",

  content: `

# Lesson 8: main() Function

## Introduction

You have already used main() several times:

\`\`\`c
int main()
{
    ...
}
\`\`\`

It may look like just another function, but it has a special role in a C program.

For a normal hosted C program, execution begins by calling main().

Understanding its return type, parameters, and return value will help you write C programs correctly.

## 1. The Basic Form

The most familiar form is:

\`\`\`c
int main()
{
    return 0;
}
\`\`\`

Here:

**int**

↓

Return type

**main**

↓

Function name

**()**

↓

Parameter list

**{}**

↓

Function body

## 2. Why Is main() Special?

Most functions are called by other functions.

For example:

\`\`\`c
void display()
{
    printf("Hello");
}
\`\`\`

A function such as display() normally needs to be called:

\`\`\`c
display();
\`\`\`

But main() is different.

The execution environment invokes main() when the program starts.

A simplified view is:

Operating Environment

↓

main()

↓

Program Logic

↓

Program Ends

## 3. Return Type of main()

The standard forms of main() return int.

For example:

\`\`\`c
int main()
{
    return 0;
}
\`\`\`

The integer returned by main() is made available to the environment that started the program.

A return value of zero is conventionally used to indicate successful termination.

## 4. Returning a Non-Zero Value

You can return a different integer:

\`\`\`c
int main()
{
    return 1;
}
\`\`\`

A non-zero value is commonly used to indicate that something went wrong.

The exact meaning of a non-zero status can depend on the program and environment.

The important convention is:

\`\`\`text
0       → success
non-zero → some form of failure/status
\`\`\`

## 5. return 0 and return

A common beginner question is whether this is necessary:

\`\`\`c
int main()
{
    printf("Hello");
    return 0;
}
\`\`\`

For a function returning int, an explicit return statement is normally how you specify the value to return.

There is a special rule for reaching the closing } of main(): reaching the end of main() is equivalent to returning zero.

So this is valid:

\`\`\`c
int main()
{
    printf("Hello");
}
\`\`\`

and it has the same termination status as:

\`\`\`c
int main()
{
    printf("Hello");
    return 0;
}
\`\`\`

Even so, writing return 0; explicitly can make the intended status clearer to beginners.

## 6. main() With Arguments

There is another standard form of main():

\`\`\`c
int main(int argc, char *argv[])
{
    ...
}
\`\`\`

This form allows the program to receive **command-line arguments**.

For example, if a program is executed with:

\`\`\`text
program hello 123
\`\`\`

the command-line information can be accessed through argc and argv.

We will study command-line arguments later in the course.

For now, remember the two important forms:

\`\`\`c
int main(void)
\`\`\`

and:

\`\`\`c
int main(int argc, char *argv[])
\`\`\`

## 7. int main(void) vs int main()

In modern C, if you want to explicitly say that a function takes no parameters, use:

\`\`\`c
int main(void)
\`\`\`

For example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    printf("Hello\\\\n");
    return 0;
}
\`\`\`

This clearly specifies that main takes no arguments.

By contrast, in a function declaration, an empty parameter list such as:

\`\`\`c
int function()
\`\`\`

has a different meaning in C than int function(void).

In a function declaration, void explicitly means no parameters.

This distinction becomes important when we study functions in detail.

## 8. main() Is a Function

Although main() has a special role, it is still a function.

It has:

- A return type.
- A name.
- Parameters.
- A body.
- Statements.

For example:

\`\`\`c
int main(void)
{
    int number = 10;
    printf("%d\\\\n", number);
    return 0;
}
\`\`\`

The same basic function concepts you learn later apply to main() as well.

## 9. What Happens Inside main()?

Consider:

\`\`\`c
#include <stdio.h>

int main(void)
{
    printf("Starting program\\\\n");
    printf("Program is running\\\\n");
    printf("Program is ending\\\\n");
    return 0;
}
\`\`\`

The execution flow is:

Program starts

↓

main()

↓

First printf()

↓

Second printf()

↓

Third printf()

↓

return 0

↓

Program terminates

The statements execute sequentially unless a control structure changes the flow.

## 10. Calling Other Functions From main()

A common pattern is to use main() to coordinate other functions.

\`\`\`c
#include <stdio.h>

void greet(void)
{
    printf("Hello!\\\\n");
}

int main(void)
{
    greet();
    return 0;
}
\`\`\`

The flow becomes:

main()

↓

greet()

↓

return to main()

↓

return 0

As your programs become larger, this pattern becomes increasingly important.

## 11. main() Should Not Be Your Entire Program

For a small program, putting everything inside main() is acceptable.

For example:

\`\`\`c
int main(void)
{
    int a = 10;
    int b = 20;
    printf("%d\\\\n", a + b);
    return 0;
}
\`\`\`

But as a program grows, it is better to divide responsibilities among functions.

For example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}

int main(void)
{
    int result = add(10, 20);
    printf("%d\\\\n", result);
    return 0;
}
\`\`\`

This becomes much easier to organize as the program grows.

## 12. A Practical Example

Consider:

\`\`\`c
#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int main(void)
{
    int result;

    result = add(15, 25);

    printf("Result = %d\\\\n", result);

    return 0;
}
\`\`\`

The execution begins in main().

main() calls add().

add() calculates and returns the result.

Control returns to main().

Finally, main() returns 0.

## 13. The Operating Environment and Return Status

When a program terminates, its return status can be observed by the environment that launched it.

For example:

\`\`\`c
int main(void)
{
    return 0;
}
\`\`\`

communicates a successful status.

This becomes useful in scripting and command-line environments where one program may need to determine whether another program completed successfully.

## 14. Common Mistakes

### Wrong Return Type

For a standard hosted C program, use:

\`\`\`c
int main(void)
\`\`\`

rather than inventing a different return type.

### Forgetting the Function Body

Incorrect:

\`\`\`c
int main(void)
\`\`\`

A function definition needs a body:

\`\`\`c
int main(void)
{
    return 0;
}
\`\`\`

### Incorrect Capitalization

C is case-sensitive:

\`\`\`text
main
Main
MAIN
\`\`\`

are different identifiers.

The standard entry-point function is written as:

\`\`\`text
main
\`\`\`

### Treating main() Like a Normally Named Function

You do not normally call main() yourself to start the program.

The execution environment invokes it.

## 15. main() in the Overall Program

Think of main() as the coordinator of your program:

\`\`\`text
             main()
                |
        ┌───────┼───────┐
        ↓       ↓       ↓
      Input  Processing Output
        |       |       |
        └───────┼───────┘
                ↓
              return
\`\`\`

It does not have to contain all of the actual work.

Its job can simply be to organize the flow of the application.

## Lesson Summary

You should now understand that:

- main() is the entry point of a normal hosted C program.
- The standard return type is int.
- main() can be written as int main(void).
- A standard form with command-line arguments is int main(int argc, char *argv[]).
- return 0; indicates successful termination by convention.
- Reaching the end of main() is equivalent to returning zero.
- main() can call other functions.
- Larger programs should not put all their logic into main().
- The return status can be observed by the environment that launched the program.

The next lesson is about **comments** and how to document C code without changing what the program does.

`,
};

export default lesson8;
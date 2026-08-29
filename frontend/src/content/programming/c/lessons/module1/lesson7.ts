const lesson7 = {
  id: "lesson7",

  title: "First C Program",

  content: `

# Lesson 7: First C Program

## Introduction

You have already seen the basic structure of a C program. Now it is time to write and run one yourself.

Our first program will be deliberately simple:

\`\`\`c
#include <stdio.h>

int main()
{
    printf("Hello, C Programming!\\\\n");
    return 0;
}
\`\`\`

There is not much code here, but almost every line introduces something that you will use repeatedly throughout the course.

## 1. Creating the Source File

Create a new file named:

\`\`\`text
hello.c
\`\`\`

The .c extension tells the compiler that this is a C source file.

Open the file in your editor and enter:

\`\`\`c
#include <stdio.h>

int main()
{
    printf("Hello, C Programming!\\\\n");
    return 0;
}
\`\`\`

Save the file.

## 2. Understanding the Program

Let's examine it one part at a time.

### #include <stdio.h>

\`\`\`c
#include <stdio.h>
\`\`\`

This includes the standard input/output header.

We need it because we are going to use:

\`\`\`c
printf()
\`\`\`

which is declared in stdio.h.

## 3. The main() Function

\`\`\`c
int main()
{
    ...
}
\`\`\`

main() is the starting point of a normal hosted C program.

When the program is executed, control eventually reaches this function.

For now, think of main() as the entry point of your program.

We will study the function in much greater detail in Lesson 8.

## 4. Printing Output

Inside main() we have:

\`\`\`c
printf("Hello, C Programming!\\\\n");
\`\`\`

printf() sends formatted output to the standard output stream.

In a normal console program, this appears in the terminal.

The text:

\`\`\`text
Hello, C Programming!
\`\`\`

is the string being printed.

## 5. What Does \\n Mean?

The \\n at the end means **new line**.

So:

\`\`\`c
printf("Hello\\\\n");
printf("World\\\\n");
\`\`\`

produces:

\`\`\`text
Hello
World
\`\`\`

Without \\n:

\`\`\`c
printf("Hello");
printf("World");
\`\`\`

the output will normally appear as:

\`\`\`text
HelloWorld
\`\`\`

Escape sequences such as \\n will be covered more thoroughly later when we study input and output.

## 6. return 0;

The last statement is:

\`\`\`c
return 0;
\`\`\`

It returns the value 0 from main().

A zero return value conventionally indicates that the program terminated successfully.

## 7. Compile the Program

If you are using GCC, open a terminal in the directory containing hello.c.

Run:

\`\`\`bash
gcc hello.c -o hello
\`\`\`

If there are no errors, GCC creates the executable.

On Windows, the resulting file will commonly be:

\`\`\`text
hello.exe
\`\`\`

On Unix-like systems, it may simply be:

\`\`\`text
hello
\`\`\`

## 8. Run the Program

After successful compilation, run the executable using the appropriate command for your operating system.

On Windows Command Prompt:

\`\`\`text
hello
\`\`\`

or:

\`\`\`text
.\\hello.exe
\`\`\`

On many Unix-like terminals:

\`\`\`bash
./hello
\`\`\`

You should see:

\`\`\`text
Hello, C Programming!
\`\`\`

Congratulations — you have just compiled and executed your first C program.

## 9. Changing the Program

Now change the message:

\`\`\`c
#include <stdio.h>

int main()
{
    printf("I am learning C programming.\\\\n");
    return 0;
}
\`\`\`

Compile it again:

\`\`\`bash
gcc hello.c -o hello
\`\`\`

Then run it.

The important thing to notice is that **changing the source code requires rebuilding the executable** before the new version can be executed.

## 10. Printing Multiple Lines

You can use multiple printf() statements:

\`\`\`c
#include <stdio.h>

int main()
{
    printf("Welcome to C Programming\\\\n");
    printf("This is my first program\\\\n");
    printf("I am learning step by step\\\\n");
    return 0;
}
\`\`\`

Output:

\`\`\`text
Welcome to C Programming
This is my first program
I am learning step by step
\`\`\`

Each printf() produces one line because of \\n.

## 11. Printing Numbers

printf() can also display values.

For an integer:

\`\`\`c
#include <stdio.h>

int main()
{
    printf("%d\\\\n", 25);
    return 0;
}
\`\`\`

Output:

\`\`\`text
25
\`\`\`

Here %d is a **conversion specification** for an integer.

You will study format specifications properly when we reach variables and input/output.

## 12. A Small Calculation

C can perform calculations before displaying the result.

\`\`\`c
#include <stdio.h>

int main()
{
    printf("%d\\\\n", 10 + 20);
    return 0;
}
\`\`\`

Output:

\`\`\`text
30
\`\`\`

The expression:

\`\`\`text
10 + 20
\`\`\`

is evaluated, and the resulting value is passed to printf().

## 13. Common Mistakes

### Forgetting the Header

If you use printf() without properly including the required declaration:

\`\`\`c
#include <stdio.h>
\`\`\`

you can encounter compiler diagnostics.

### Missing Semicolon

Incorrect:

\`\`\`c
printf("Hello\\\\n")
\`\`\`

Correct:

\`\`\`c
printf("Hello\\\\n");
\`\`\`

### Incorrect Capitalization

C is case-sensitive.

Correct:

\`\`\`c
printf("Hello");
\`\`\`

Incorrect:

\`\`\`c
Printf("Hello");
\`\`\`

### Missing Braces

Correct:

\`\`\`c
int main()
{
    printf("Hello");
    return 0;
}
\`\`\`

The braces define the body of main().

## 14. A More Complete First Program

Now let's combine several ideas:

\`\`\`c
#include <stdio.h>

int main()
{
    printf("================================\\\\n");
    printf("      C PROGRAMMING COURSE       \\\\n");
    printf("================================\\\\n");
    printf("Welcome to CloudLearn AI!\\\\n");
    return 0;
}
\`\`\`

Output:

\`\`\`text
================================
      C PROGRAMMING COURSE
================================
Welcome to CloudLearn AI!
\`\`\`

This is still a very simple program, but you are already using:

- A header file.
- main().
- Function calls.
- String literals.
- Escape sequences.
- Statements.
- A return value.

## 15. What Actually Happens When You Run It?

The complete process is:

hello.c

↓

Preprocessing

↓

Compilation

↓

Assembly

↓

Linking

↓

Executable

↓

Operating System

↓

main()

↓

printf()

↓

Output

This connects the previous lesson on compilation with the program you have just written.

## Practice

Try changing the program so that it displays:

\`\`\`text
My name is ...

I am learning C.

I will build projects with C.
\`\`\`

Then compile and execute it yourself.

Do not simply copy the program. Type it, make a small mistake intentionally, observe the compiler message, correct it, and run it again.

That process is part of learning programming.

## Lesson Summary

In this lesson, you:

- Created a .c source file.
- Wrote your first complete C program.
- Used #include <stdio.h>.
- Used main().
- Used printf().
- Learned the purpose of \\n.
- Used return 0.
- Compiled a C program with GCC.
- Ran the resulting executable.
- Observed how source-code changes require recompilation.
- Practiced basic output.

The next lesson focuses specifically on the **main() function**, because understanding it properly is important before we move further into C syntax.

`,
};

export default lesson7;
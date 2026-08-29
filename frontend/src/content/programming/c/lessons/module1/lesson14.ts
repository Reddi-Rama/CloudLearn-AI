const lesson14 = {
  id: "lesson14",

  title: "Command Line Compilation",

  content: `

# Lesson 14: Command Line Compilation

## Introduction

You have already seen commands such as:

\`\`\`bash
gcc hello.c -o hello
\`\`\`

Now it is time to understand what these commands actually mean.

Although an IDE can compile your programs with a button, learning to compile from the command line is valuable because it gives you direct control over the build process.

It also makes the compilation stages discussed earlier much more concrete.

---

# 1. What Is the Command Line?

The command line is an interface where you interact with the operating system by typing commands.

On Windows, you might use:

- Command Prompt
- PowerShell

On Linux and macOS, you normally use a terminal.

Instead of clicking a button to compile a program, you can explicitly tell the compiler what to do.

---

# 2. A Basic C Program

Create a file called:

\`\`\`text
hello.c
\`\`\`

with:

\`\`\`c
#include <stdio.h>

int main(void)
{
    printf("Hello from C!\\n");
    return 0;
}
\`\`\`

Open your terminal in the directory containing the file.

---

# 3. Basic GCC Command

Compile the program using:

\`\`\`bash
gcc hello.c -o hello
\`\`\`

The command can be understood as:

\`\`\`text
gcc
  ↓
C compiler

hello.c
  ↓
Input source file

-o hello
  ↓
Name the output program "hello"
\`\`\`

If compilation succeeds, an executable is produced.

---

# 4. Running the Program

On Windows, you may run:

\`\`\`text
hello
\`\`\`

or:

\`\`\`text
.\\hello.exe
\`\`\`

On Linux or macOS:

\`\`\`text
./hello
\`\`\`

The exact command depends on the operating system and shell.

The important distinction is:

\`\`\`text
Compile
   ↓
Create executable

Run
   ↓
Execute executable
\`\`\`

---

# 5. What If You Don't Specify -o?

You can also run:

\`\`\`bash
gcc hello.c
\`\`\`

GCC will use its default output naming convention.

On many Unix-like systems, this produces an executable named:

\`\`\`text
a.out
\`\`\`

On Windows toolchains, the behavior and generated filename can differ.

Using -o is usually clearer:

\`\`\`bash
gcc hello.c -o hello
\`\`\`

because you explicitly choose the output name.

---

# 6. Compiling With Warnings

A very useful GCC option is:

\`\`\`bash
gcc -Wall hello.c -o hello
\`\`\`

-Wall enables a useful set of compiler warnings.

Warnings are valuable because they can point out suspicious code even when the compiler can technically build the program.

For learning C, paying attention to warnings is a good habit.

---

# 7. Treating Warnings More Strictly

You can also use:

\`\`\`bash
gcc -Wall -Wextra hello.c -o hello
\`\`\`

This requests additional warning diagnostics.

You may see more messages than before, but that is often useful while learning.

The exact warnings depend on your compiler version and source code.

---

# 8. Choosing the C Standard

C has evolved through several language standards.

GCC allows you to specify a standard using the -std option.

For example:

\`\`\`bash
gcc -std=c17 hello.c -o hello
\`\`\`

This asks GCC to compile the program according to the C17 language standard.

Similarly, a compiler that supports C23 can be invoked with an appropriate C23 option.

The exact support depends on the compiler version.

---

# 9. Compilation Errors

Suppose your program contains:

\`\`\`c
#include <stdio.h>

int main(void)
{
    printf("Hello\\n"
    return 0;
}
\`\`\`

Now run:

\`\`\`bash
gcc hello.c -o hello
\`\`\`

The compiler will report an error.

The executable will not be successfully produced from this invalid source.

Read the error message carefully.

It normally contains information such as:

- File name
- Line number
- Diagnostic message

---

# 10. Finding the Error

Suppose the compiler reports a problem around:

\`\`\`text
hello.c:5
\`\`\`

The first thing to do is inspect that line.

However, do not automatically assume the exact line shown is where the original mistake occurred.

For example, if you forget a closing parenthesis on the previous line, the compiler may only realize something is wrong when it reaches the next statement.

So when reading compiler diagnostics:

\`\`\`text
Check the reported line
        ↓
Look at the previous line too
        ↓
Check brackets and punctuation
        ↓
Compile again
\`\`\`

---

# 11. Compilation of Multiple Files

Suppose your project contains:

\`\`\`text
main.c
calculator.c
\`\`\`

You can compile both together:

\`\`\`bash
gcc main.c calculator.c -o calculator
\`\`\`

GCC compiles the source files and links them into one executable.

For larger projects, you can also compile each source file separately.

For example:

\`\`\`bash
gcc -c main.c
\`\`\`

\`\`\`bash
gcc -c calculator.c
\`\`\`

This produces object files.

Then link them:

\`\`\`bash
gcc main.o calculator.o -o calculator
\`\`\`

The process becomes:

\`\`\`text
main.c
─────→ main.o ────┐
                  ├──→ Linker → calculator
calculator.c ─→ calculator.o ─┘
\`\`\`

---

# 12. What Does -c Mean?

The option:

\`\`\`text
-c
\`\`\`

tells GCC to compile the source file into an object file without performing the final linking step.

For example:

\`\`\`bash
gcc -c main.c
\`\`\`

produces an object file such as:

\`\`\`text
main.o
\`\`\`

This is particularly useful for multi-file projects.

---

# 13. Viewing the Preprocessed Output

GCC can also stop after preprocessing.

For example:

\`\`\`bash
gcc -E hello.c
\`\`\`

The -E option tells GCC to preprocess the source and output the result rather than continuing through the complete build.

This is useful when learning how directives such as:

\`\`\`text
#include
#define
\`\`\`

are handled.

---

# 14. Generating Assembly

You can ask GCC to stop after generating assembly:

\`\`\`bash
gcc -S hello.c
\`\`\`

This produces an assembly source file.

The overall idea becomes:

\`\`\`text
hello.c
  ↓
gcc -E
  ↓
Preprocessed source

hello.c
  ↓
gcc -S
  ↓
Assembly
\`\`\`

You do not need to memorize every compiler option right now. The purpose is to understand that GCC gives you control over the different stages of compilation.

---

# 15. Object Files

You can create an object file with:

\`\`\`bash
gcc -c hello.c
\`\`\`

The result is commonly:

\`\`\`text
hello.o
\`\`\`

on Unix-like systems.

The object file is not normally the final program.

It needs to be linked to create the executable.

---

# 16. Linking Manually

Suppose you have:

\`\`\`text
hello.o
\`\`\`

You can use GCC to perform the final linking step:

\`\`\`bash
gcc hello.o -o hello
\`\`\`

This produces the executable.

So a simplified manual workflow is:

\`\`\`text
hello.c
   ↓
gcc -c
   ↓
hello.o
   ↓
gcc
   ↓
hello
\`\`\`

---

# 17. A Useful Debug Build

When learning and debugging C, it is common to include debugging information.

For example:

\`\`\`bash
gcc -Wall -Wextra -g hello.c -o hello
\`\`\`

The -g option asks GCC to include debugging information useful to a debugger.

This does not mean the program automatically becomes “debug mode”; it provides information that debugging tools can use.

---

# 18. Optimization

Compilers can optimize programs.

For example:

\`\`\`bash
gcc -O2 hello.c -o hello
\`\`\`

The -O2 option enables a level of optimization.

Optimization can make programs faster or smaller, but while learning and debugging, it is often useful to keep compilation straightforward.

You will learn more about optimization when performance becomes relevant.

---

# 19. A Practical Command-Line Workflow

For normal development, a simple workflow is:

\`\`\`bash
gcc -Wall -Wextra program.c -o program
\`\`\`

Then run the resulting program.

If the compiler reports an error:

\`\`\`text
Read the message
      ↓
Locate the problem
      ↓
Fix the source
      ↓
Compile again
\`\`\`

This cycle is something you will use throughout your C programming career.

---

# 20. Why Command-Line Skills Matter

Command-line compilation becomes especially useful when working with:

- Multiple source files
- Libraries
- Build systems
- Automated testing
- Scripts
- Continuous integration
- Different compiler options

Even when you eventually use professional IDEs and build systems, knowing what the compiler is doing underneath is valuable.

---

# Practical Exercise

Create:

\`\`\`text
calculator.c
\`\`\`

with:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 20;
    int b = 10;

    printf("Sum = %d\\n", a + b);
    printf("Difference = %d\\n", a - b);

    return 0;
}
\`\`\`

Compile it with:

\`\`\`bash
gcc -Wall -Wextra calculator.c -o calculator
\`\`\`

Run it and verify the output.

Then intentionally remove a semicolon and compile again.

Read the compiler diagnostic, fix the error, and compile once more.

This is a much better way to become comfortable with the compiler than simply memorizing commands.

---

# Lesson Summary

You should now be comfortable with the basic GCC workflow:

\`\`\`bash
gcc program.c -o program
\`\`\`

and understand useful options such as:

\`\`\`text
-Wall       Enable a useful set of warnings
-Wextra     Enable additional warnings
-std=c17    Select the C17 standard
-c          Produce object code without linking
-E          Stop after preprocessing
-S          Stop after generating assembly
-g          Include debugging information
-O2         Enable an optimization level
\`\`\`

You also learned how to:

- Compile one source file.
- Compile multiple source files.
- Create object files.
- Link object files.
- Read compiler diagnostics.
- Build with warnings.
- Inspect different stages of compilation.

The next lesson is the final lesson of Module 1, where you will bring these fundamentals together by building a **Simple Calculator**.

---

# Module 1 Progress

✓ Lesson 1 — Introduction to C Programming

✓ Lesson 2 — History of C

✓ Lesson 3 — Features of C

✓ Lesson 4 — C Program Structure

✓ Lesson 5 — Compilation Process

✓ Lesson 6 — Compiler and IDE Setup

✓ Lesson 7 — First C Program

✓ Lesson 8 — main() Function

✓ Lesson 9 — Comments

✓ Lesson 10 — Keywords and Identifiers

✓ Lesson 11 — Character Set

✓ Lesson 12 — Tokens in C

✓ Lesson 13 — Syntax Rules

✓ Lesson 14 — Command Line Compilation

→ Lesson 15 — Mini Project — Simple Calculator

`,
};

export default lesson14;
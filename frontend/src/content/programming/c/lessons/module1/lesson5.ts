const lesson5 = {
  id: "lesson5",

  title: "Compilation Process",

  content: `

# Lesson 5: Compilation Process

## Introduction

When you write a C program, the code you type is called **source code**. The processor of your computer does not directly execute those C statements.

Before the program can run, the source code has to pass through a series of stages that eventually produce an executable program.

The overall process is:

Source Code

↓

Preprocessing

↓

Compilation

↓

Assembly

↓

Linking

↓

Executable Program

Understanding this process will make compiler errors, header files, libraries, and command-line compilation much easier to understand.

## 1. Source Code

Suppose you create a file called:

\`\`\`text
hello.c
\`\`\`

and write:

\`\`\`c
#include <stdio.h>

int main()
{
    printf("Hello, C!\\\\n");
    return 0;
}
\`\`\`

This is the **source code**.

It is written for humans to read and for a C compiler to translate.

The .c extension tells us that the file contains C source code.

## 2. Preprocessing

The first major stage is **preprocessing**.

The C preprocessor handles directives beginning with #.

For example:

\`\`\`c
#include <stdio.h>
\`\`\`

and:

\`\`\`c
#define MAX 100
\`\`\`

are processed before the actual compilation stage.

Common preprocessor directives include:

\`\`\`text
#include
#define
#ifdef
#ifndef
#if
#else
#endif
\`\`\`

## What Does #include Mean?

Consider:

\`\`\`c
#include <stdio.h>
\`\`\`

Your program uses printf().

The declaration needed for printf() is provided through the standard input/output header.

The preprocessor processes the #include directive so that the compiler has the necessary declarations available while compiling your program.

Conceptually:

hello.c

↓

Preprocessor

↓

Expanded source

The preprocessed result is still C source code. It has not yet become machine code.

## 3. Compilation

After preprocessing, the compiler analyzes the resulting C code.

It checks whether the program follows the rules of the C language and translates it into a lower-level representation, commonly assembly code as an intermediate stage.

Conceptually:

Preprocessed C

↓

Compiler

↓

Assembly Code

For example, if you write:

\`\`\`c
int number = ;
\`\`\`

the compiler will detect that something is wrong with the syntax.

This is why compilation errors are usually associated with mistakes in the source code.

## 4. Assembly

The assembly representation is then converted into **object code** by an assembler.

Assembly Code

↓

Assembler

↓

Object Code

The resulting object file is typically stored with an extension such as:

\`\`\`text
.o
\`\`\`

on many Unix-like systems.

On Windows toolchains, you may commonly see:

\`\`\`text
.obj
\`\`\`

The object file contains machine-level information that will later be used by the linker.

## 5. Linking

Consider this line:

\`\`\`c
printf("Hello, C!\\\\n");
\`\`\`

You did not write the implementation of printf() yourself.

The implementation is provided through the C standard library.

The **linker** connects your compiled program with the required library components and resolves references between different object files and libraries.

Conceptually:

Object Files

+

Libraries

↓

Linker

↓

Executable

This stage is particularly important when a program consists of multiple source files.

## 6. Executable Program

After successful linking, the system has an executable program.

The complete process can be viewed as:

hello.c

↓

Preprocessing

↓

Compilation

↓

Assembly

↓

hello.o

↓

Linking

↓

Executable

The operating system can then load the executable and begin running it.

## A Complete Picture

\`\`\`text
┌──────────────────────┐
│       hello.c        │
│     Source Code      │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│     Preprocessor     │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│       Compiler       │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│      Assembler       │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│     Object File      │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│        Linker        │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│      Executable      │
└──────────┬───────────┘
           ↓
         Execution
\`\`\`

## Compilation and Execution Are Different

These two terms should not be confused.

### Compilation

Compilation is the process of building a program from source code.

Source Code

↓

Build Process

↓

Executable

### Execution

Execution happens after the program has been built.

Executable

↓

Operating System

↓

CPU

↓

Program Runs

## 7. Compilation Errors

Suppose you write:

\`\`\`c
#include <stdio.h>

int main()
{
    printf("Hello\\\\n")
    return 0;
}
\`\`\`

There is a missing semicolon after printf().

When you compile the program, the compiler will report an error.

The important lesson is that the compiler is not merely translating your program. It is also checking the source code against the language rules.

## 8. Linker Errors

Not every build error comes directly from the compiler.

A program may pass compilation but fail during linking.

For example, imagine that you declare a function:

\`\`\`c
int calculate(int a, int b);
\`\`\`

but never provide a corresponding definition and then call it.

The source may be syntactically valid, but the linker may not be able to find the implementation required to build the final executable.

So:

Compilation

↓

Successful

↓

Linking

↓

Error

is possible.

## 9. Runtime Errors

A program can also build successfully and still contain a problem that appears only when it runs.

For example, a program might:

- Access invalid memory.
- Perform an invalid operation.
- Produce incorrect results.
- Handle input incorrectly.

These are runtime problems.

Therefore:

Compiles successfully

≠

Program is automatically correct

Compilation is only one part of software development.

## 10. Multiple Source Files

Real C programs are often larger than a single .c file.

For example:

\`\`\`text
Project
│
├── main.c
├── calculator.c
└── calculator.h
\`\`\`

The source files can be compiled separately and then linked together.

Conceptually:

\`\`\`text
main.c              calculator.c
   ↓                     ↓
main.o              calculator.o
       \\              /
        \\            /
             Linker
                ↓
           Executable
\`\`\`

This approach makes large programs easier to organize.

## 11. GCC and the Build Process

GCC can perform several stages of the build process for you.

For example:

\`\`\`bash
gcc hello.c -o hello
\`\`\`

This command asks GCC to build an executable from hello.c.

You do not normally have to manually perform preprocessing, compilation, assembly, and linking for every small program.

The compiler driver handles the appropriate stages for you.

Later, when you work with command-line compilation, you will learn how to control these stages individually.

## Why Should You Understand This?

If you only use an IDE's **Run** button, you might never think about what happens underneath.

But when something goes wrong, understanding the build process becomes extremely useful.

For example:

Header problem

↓

Preprocessing / Compilation

Syntax problem

↓

Compilation

Missing definition

↓

Linking

Invalid memory access

↓

Runtime

This gives you a better way to locate problems.

## Lesson Summary

A C program generally passes through these stages:

Source Code

↓

Preprocessing

↓

Compilation

↓

Assembly

↓

Object Code

↓

Linking

↓

Executable

↓

Execution

The most important distinction is that **preprocessing, compilation, assembly, and linking are part of building the program**, while execution happens after the executable has been produced.

`,
};

export default lesson5;
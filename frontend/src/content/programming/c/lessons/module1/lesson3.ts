const lesson3 = {
  id: "lesson3",

  title: "Features of C",

  content: `

# Lesson 3: Features of C

## Introduction

C became widely used because it provides a useful combination of efficiency, portability, structured programming, and control over computer resources.

The language is relatively small, but it provides the fundamental features needed to build many different kinds of software.

Understanding these features helps explain why C remains important even though many newer programming languages exist.

## 1. General-Purpose Language

C is a general-purpose programming language.

It can be used to develop different kinds of software rather than being restricted to one particular application area.

C can be used in:

- Operating systems.
- Embedded systems.
- Compilers.
- Networking software.
- Database systems.
- System utilities.
- Performance-sensitive applications.

## 2. Procedural Programming

C primarily follows the **procedural programming paradigm**.

Programs can be organized into functions that perform specific tasks.

For example:

\`\`\`c
#include <stdio.h>

void greet()
{
    printf("Hello\\\\n");
}

int main()
{
    greet();
    return 0;
}
\`\`\`

Here, the main() function calls the greet() function.

As programs become larger, functions can be used to divide the program into smaller and more manageable parts.

## 3. Efficiency

One of the important strengths of C is performance.

C can produce highly efficient programs because the language provides relatively direct control over memory and system resources.

This makes C suitable for applications where performance is important.

## 4. Portability

C is considered a portable programming language.

A C program can often be compiled for different systems with appropriate compiler support.

This does not mean that every C program will work everywhere without modification.

However, programs written using standard C features can often be moved between systems more easily than programs that depend heavily on a particular machine.

## 5. Memory Control

C provides significant control over memory.

Pointers allow programmers to work with memory addresses.

Dynamic memory allocation allows programs to request memory during execution.

For example, later in the course you will learn concepts such as:

- Pointers.
- Addresses.
- Dynamic memory allocation.
- Memory management.

This level of control is one of the reasons C is widely used for system programming.

## 6. Simplicity

The core C language is relatively small compared with many larger programming languages.

This makes it possible to learn the fundamental language features without having to understand a huge collection of built-in concepts.

The basic building blocks include:

- Variables.
- Functions.
- Arrays.
- Pointers.
- Structures.
- Control statements.

These features can be combined to create larger programs.

## 7. System Programming

C is particularly well suited to system programming.

It can interact closely with operating systems and hardware while still providing structured programming features.

This makes C useful for:

- Operating systems.
- Device software.
- Embedded systems.
- Compilers.
- System utilities.

## 8. Structured Programming

C supports structured programming through:

- Functions.
- Conditional statements.
- Loops.
- Blocks of code.

Large programs can therefore be divided into smaller logical sections.

This improves readability and makes programs easier to understand and maintain.

## 9. Low-Level Access

C provides features that allow programmers to work close to the underlying machine.

Pointers are an important example.

A programmer can work with memory addresses and manipulate data stored in memory.

This makes C useful for understanding how computers work internally.

## 10. Rich Operators

C provides a wide range of operators for performing different operations.

These include:

- Arithmetic operators.
- Relational operators.
- Logical operators.
- Assignment operators.
- Bitwise operators.
- Increment and decrement operators.

These operators allow programmers to write expressions for calculations, comparisons, and logical operations.

## 11. Functions

Functions are an important feature of C.

A program can be divided into multiple functions, with each function responsible for a particular task.

This improves:

- Reusability.
- Organization.
- Readability.
- Maintainability.

For example:

\`\`\`c
#include <stdio.h>

void displayMessage()
{
    printf("Welcome to C Programming!\\\\n");
}

int main()
{
    displayMessage();
    return 0;
}
\`\`\`

The main() function calls displayMessage() instead of placing all the code directly inside main().

## 12. Pointers

Pointers are one of the most important features of C.

A pointer stores the address of another variable.

For example:

\`\`\`c
int number = 10;
int *ptr = &number;
\`\`\`

Here:

- number stores the value 10.
- &number gives the address of number.
- ptr stores that address.

Pointers become especially important when studying:

- Dynamic memory.
- Arrays.
- Functions.
- Structures.
- Data structures.

## 13. Arrays

C provides arrays for storing collections of values of the same data type.

For example:

\`\`\`c
int marks[5];
\`\`\`

This creates an array capable of storing five integer values.

Arrays are fundamental to many programming problems and are used extensively in algorithms and data structures.

## 14. Structures

C provides structures for grouping related data together.

For example:

\`\`\`c
struct Student
{
    int id;
    float marks;
};
\`\`\`

A structure can combine different types of information into one logical unit.

Structures become particularly useful when building larger applications and implementing data structures.

## 15. No Built-In Garbage Collector

Unlike some modern programming languages, C does not provide a built-in garbage collector.

The programmer is responsible for managing dynamically allocated memory correctly.

This gives the programmer more control but also creates more responsibility.

Incorrect memory management can lead to problems such as memory leaks and invalid memory access.

## Advantages of C

The major strengths of C include:

- High performance.
- Portability.
- Memory control.
- Simplicity.
- Structured programming.
- System-level access.
- Efficient execution.
- Support for functions, arrays, pointers, and structures.

## Limitations of C

C also has some limitations.

For example:

- Memory often has to be managed manually.
- Incorrect pointer usage can cause serious problems.
- There is no built-in garbage collector.
- C does not provide classes or built-in object-oriented programming.
- Ordinary arrays do not automatically perform bounds checking.

Understanding these limitations is part of understanding how C works.

## Real-World Importance

The combination of these features makes C useful in areas such as:

- Operating systems.
- Embedded systems.
- Device software.
- Compilers.
- Networking.
- Database systems.
- System utilities.
- Performance-sensitive applications.

C remains valuable because it provides a strong balance between structured programming and low-level control.

## Lesson Summary

In this lesson, you learned that C:

- Is a general-purpose language.
- Primarily follows procedural programming.
- Supports structured programming.
- Provides high performance.
- Is portable.
- Provides significant memory control.
- Supports pointers.
- Supports arrays and structures.
- Provides functions for modular programming.
- Offers low-level access.
- Is widely used for system programming.
- Does not provide a built-in garbage collector.

The next lesson will explain the **structure of a C program and the purpose of its major components**.

`,
};

export default lesson3;
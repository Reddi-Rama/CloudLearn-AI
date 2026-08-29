const about = {
  id: "about",
  title: "Dynamic Memory Management in C",

  content: `

## About the Module

In previous modules, we learned how to store data using variables, arrays, structures, and files. However, many programs cannot know in advance exactly how much memory they will need.

Dynamic memory management allows a C program to request memory while the program is running and release it when it is no longer needed.

---

# What You Will Learn

## Dynamic Memory Fundamentals

You will learn:

- Introduction to Dynamic Memory
- Stack Memory vs Heap Memory
- malloc()
- calloc()
- malloc() vs calloc()
- realloc()
- free()

## Dynamic Data

You will learn:

- Dynamic Arrays
- Dynamic Strings
- Dynamic Structures
- Dynamic Memory and Pointers
- Dynamic 2D Arrays

## Memory Management

You will learn:

- Memory Leaks and Common Errors
- Practical Applications of Dynamic Memory

## Mini Project

At the end of the module, you will build a Dynamic Student Record System using structures, pointers, malloc(), realloc(), free(), dynamic arrays, searching, updating, and deleting.

---

# Module Structure

Lesson 1 — Introduction to Dynamic Memory

Lesson 2 — Stack Memory vs Heap Memory

Lesson 3 — malloc()

Lesson 4 — calloc()

Lesson 5 — malloc() vs calloc()

Lesson 6 — realloc()

Lesson 7 — free()

Lesson 8 — Dynamic Arrays

Lesson 9 — Dynamic Strings

Lesson 10 — Dynamic Structures

Lesson 11 — Dynamic Memory and Pointers

Lesson 12 — Dynamic 2D Arrays

Lesson 13 — Memory Leaks and Common Errors

Lesson 14 — Practical Applications

Lesson 15 — Mini Project — Dynamic Student Record System

---

# Module Goal

By the end of Module 10, you should be able to:

- Understand dynamic memory allocation in C.
- Understand the difference between stack memory and heap memory.
- Allocate memory using malloc().
- Allocate and initialize memory using calloc().
- Understand the difference between malloc() and calloc().
- Resize dynamically allocated memory using realloc().
- Release dynamically allocated memory using free().
- Create and use dynamic arrays.
- Create and manage dynamic strings.
- Allocate and work with dynamic structures.
- Understand the relationship between pointers and dynamic memory.
- Create and use dynamic 2D arrays.
- Identify and avoid memory leaks and common memory errors.
- Apply dynamic memory concepts to practical C programs.
- Build a Dynamic Student Record System.

---

# Why Dynamic Memory Is Important

Dynamic memory is important because many programs cannot know the required amount of memory before execution.

For example, if the number of students is entered by the user:

\`\`\`c
int n;

scanf("%d", &n);
\`\`\`

The program can allocate memory according to the number entered:

\`\`\`c
int *numbers;

numbers = malloc(n * sizeof(*numbers));
\`\`\`

The program can then use the allocated memory and release it when it is no longer needed:

\`\`\`c
free(numbers);
\`\`\`

Dynamic memory is especially useful when the amount of data is unknown or changes during program execution.

---

# Important Dynamic Memory Functions

## malloc()

malloc() is used to allocate a block of memory.

\`\`\`c
int *ptr = malloc(sizeof(*ptr));
\`\`\`

The allocated bytes are not initialized.

## calloc()

calloc() is used to allocate memory for multiple elements and initializes the allocated bytes to zero.

\`\`\`c
int *numbers = calloc(5, sizeof(*numbers));
\`\`\`

## realloc()

realloc() is used to change the size of an existing dynamic allocation.

\`\`\`c
int *temp;

temp = realloc(numbers, new_size);

if (temp != NULL)
{
    numbers = temp;
}
\`\`\`

## free()

free() releases dynamically allocated memory.

\`\`\`c
free(numbers);
numbers = NULL;
\`\`\`

---

# Dynamic Memory Process

The basic dynamic memory process is:

Allocate memory

↓

Check allocation

↓

Initialize memory

↓

Use memory

↓

Resize if required

↓

Release memory

A common pattern is:

\`\`\`c
int *ptr = malloc(sizeof(*ptr));

if (ptr == NULL)
{
    /* Handle allocation failure */
}

/* Use ptr */

free(ptr);
ptr = NULL;
\`\`\`

---

# Module 10 Progress

→ Lesson 1 — Introduction to Dynamic Memory

  Lesson 2 — Stack Memory vs Heap Memory

  Lesson 3 — malloc()

  Lesson 4 — calloc()

  Lesson 5 — malloc() vs calloc()

  Lesson 6 — realloc()

  Lesson 7 — free()

  Lesson 8 — Dynamic Arrays

  Lesson 9 — Dynamic Strings

  Lesson 10 — Dynamic Structures

  Lesson 11 — Dynamic Memory and Pointers

  Lesson 12 — Dynamic 2D Arrays

  Lesson 13 — Memory Leaks and Common Errors

  Lesson 14 — Practical Applications

  Lesson 15 — Mini Project — Dynamic Student Record System

---

# Module 10 Complete

After completing this module, you will have a strong foundation in dynamic memory management, pointers, dynamic arrays, dynamic strings, dynamic structures, and safe memory handling in C.

You will also be able to apply these concepts in practical programs such as dynamic student record systems and other data structures that require memory to be allocated during program execution.

Next: Lesson 1 — Introduction to Dynamic Memory.

`,
};

export default about;
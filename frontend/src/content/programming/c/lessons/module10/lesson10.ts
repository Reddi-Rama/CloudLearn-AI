const lesson10 = {
  id: "lesson10",
  title: "Dynamic Structures",

  content: `

# Lesson 10: Dynamic Structures

---

## Introduction

Structures allow a C program to group related data of different types into a single object.

For example:

\`\`\`c
struct Student
{
    int id;
    char name[50];
    float marks;
};
\`\`\`

A structure can also be dynamically allocated using malloc(), calloc(), and realloc().

---

# 1. Dynamic Structure

A pointer to a structure can be declared:

\`\`\`c
struct Student *student;
\`\`\`

Memory can then be allocated:

\`\`\`c
student = malloc(sizeof(*student));
\`\`\`

---

# 2. Checking Allocation

Always check the result:

\`\`\`c
if (student == NULL)
{
    printf("Memory allocation failed.\\n");
    return 1;
}
\`\`\`

---

# 3. Accessing Members

When using a structure pointer, the arrow operator -> is used.

Example:

\`\`\`c
student->id = 101;
student->marks = 85.5;
\`\`\`

This is equivalent to:

\`\`\`c
(*student).id = 101;
(*student).marks = 85.5;
\`\`\`

---

# 4. Complete Example

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

struct Student
{
    int id;
    char name[50];
    float marks;
};

int main(void)
{
    struct Student *student;

    student = malloc(sizeof(*student));

    if (student == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    student->id = 101;
    student->marks = 88.5;

    printf("ID: %d\\n", student->id);
    printf("Marks: %.2f\\n", student->marks);

    free(student);

    student = NULL;

    return 0;
}
\`\`\`

Output:

\`\`\`
ID: 101
Marks: 88.50
\`\`\`

---

# 5. Dynamic Array of Structures

Memory can be allocated for multiple structures.

Example:

\`\`\`c
struct Student *students;

students = malloc(5 * sizeof(*students));
\`\`\`

Now memory is available for five Student structures.

---

# 6. Accessing an Array of Structures

The elements can be accessed using array notation:

\`\`\`c
students[0].id = 101;
students[1].id = 102;
students[2].id = 103;
\`\`\`

The structure pointer can therefore be used like a dynamically allocated array.

---

# 7. Complete Example

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

struct Student
{
    int id;
    char name[50];
    float marks;
};

int main(void)
{
    int n;
    struct Student *students;

    printf("Enter number of students: ");
    scanf("%d", &n);

    if (n <= 0)
    {
        return 1;
    }

    students = malloc((size_t)n * sizeof(*students));

    if (students == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    for (int i = 0; i < n; i++)
    {
        printf("\\nEnter details for student %d\\n", i + 1);

        printf("ID: ");
        scanf("%d", &students[i].id);

        printf("Marks: ");
        scanf("%f", &students[i].marks);
    }

    printf("\\nStudent Details\\n");

    for (int i = 0; i < n; i++)
    {
        printf("ID: %d, Marks: %.2f\\n",
               students[i].id,
               students[i].marks);
    }

    free(students);

    return 0;
}
\`\`\`

---

# 8. Growing a Structure Array

Suppose the program initially stores five students but later needs more.

realloc() can be used:

\`\`\`c
struct Student *temp;

temp = realloc(students,
               new_count * sizeof(*students));

if (temp == NULL)
{
    /* Original allocation remains valid */
}
else
{
    students = temp;
}
\`\`\`

This allows the structure array to grow dynamically.

---

# 9. Dynamically Allocated String Inside a Structure

A structure can contain a pointer to dynamically allocated memory.

Example:

\`\`\`c
struct Student
{
    int id;
    char *name;
    float marks;
};
\`\`\`

Memory can then be allocated for the name separately:

\`\`\`c
student->name = malloc(strlen(source) + 1);
\`\`\`

After using it, both allocations must be released:

\`\`\`c
free(student->name);
free(student);
\`\`\`

---

# 10. Important Memory Rule

If a structure contains dynamically allocated members, each dynamically allocated block must be released.

For example:

\`\`\`
Student
   │
   ├── id
   ├── marks
   └── name ─────► Dynamic Memory
\`\`\`

The name allocation and the structure allocation are separate memory blocks.

---

# 11. Dynamic Linked Data

Dynamic structures are also an important foundation for data structures such as:

- Linked lists
- Stacks
- Queues
- Trees
- Graphs

For example, a linked-list node can be dynamically allocated:

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

Then:

\`\`\`c
struct Node *node;

node = malloc(sizeof(*node));
\`\`\`

---

# 12. Releasing Dynamic Structures

A dynamically allocated structure should eventually be released:

\`\`\`c
free(student);
student = NULL;
\`\`\`

If it contains dynamically allocated members, release those members first.

Example:

\`\`\`c
free(student->name);
free(student);
student = NULL;
\`\`\`

---

# 13. Common Mistakes

Avoid:

## Forgetting to check malloc()

\`\`\`c
student = malloc(sizeof(*student));

student->id = 101;
\`\`\`

If allocation fails, dereferencing student is invalid.

---

## Forgetting to free()

This can create a memory leak.

---

## Using a structure after free()

\`\`\`c
free(student);

student->id = 101;
\`\`\`

This is invalid because the structure is no longer allocated.

---

# 14. Dynamic Structure Memory Flow

\`\`\`
struct pointer
      ↓
   malloc()
      ↓
Structure allocated
      ↓
Access members
      ↓
realloc() if required
      ↓
     free()
      ↓
Memory released
\`\`\`

---

# Lesson Summary

Structures can be dynamically allocated just like other objects.

Single structure:

\`\`\`c
struct Student *student;

student = malloc(sizeof(*student));
\`\`\`

Access members:

\`\`\`c
student->id
student->marks
\`\`\`

Dynamic structure array:

\`\`\`c
students = malloc(n * sizeof(*students));
\`\`\`

Release:

\`\`\`c
free(student);
\`\`\`

Dynamic structures are especially useful when the number of records is determined during program execution.

---

# Module 10 Progress

✓ Lesson 1 — Introduction to Dynamic Memory

✓ Lesson 2 — Stack Memory vs Heap Memory

✓ Lesson 3 — malloc()

✓ Lesson 4 — calloc()

✓ Lesson 5 — malloc() vs calloc()

✓ Lesson 6 — realloc()

✓ Lesson 7 — free()

✓ Lesson 8 — Dynamic Arrays

✓ Lesson 9 — Dynamic Strings

✓ Lesson 10 — Dynamic Structures

→ Lesson 11 — Dynamic Memory and Pointers

  Lesson 12 — Dynamic 2D Arrays

  Lesson 13 — Memory Leaks and Common Errors

  Lesson 14 — Practical Applications

  Lesson 15 — Mini Project — Dynamic Student Record System

---

# Lesson 10 Complete

`,
};

export default lesson10;
const lesson14 = {
  id: "lesson14",
  title: "Practical Applications of Dynamic Memory",

  content: `

# Lesson 14: Practical Applications of Dynamic Memory

---

## Introduction

Dynamic memory is used in many C programs where the amount of data is not known beforehand or needs to change during execution.

It is especially useful for:

- Dynamic arrays
- Dynamic strings
- Student records
- Linked lists
- Stacks
- Queues
- Trees
- Graphs

---

# 1. Dynamic Student Records

Suppose the number of students is entered by the user:

\`\`\`
Enter number of students: 100
\`\`\`

We can allocate exactly enough space:

\`\`\`c
struct Student *students;

students = malloc(100 * sizeof(*students));
\`\`\`

The program can then store 100 student records.

---

# 2. Growing Student Records

Suppose the program initially has:

\`\`\`
10 students
\`\`\`

and later needs:

\`\`\`
20 students
\`\`\`

We can resize:

\`\`\`c
struct Student *temp;

temp = realloc(students,
               20 * sizeof(*students));

if (temp != NULL)
{
    students = temp;
}
\`\`\`

This is useful in applications where the number of records changes.

---

# 3. Dynamic Contact List

A contact structure might be:

\`\`\`c
struct Contact
{
    char *name;
    char *phone;
};
\`\`\`

A dynamic array can store contacts:

\`\`\`c
struct Contact *contacts;

contacts = malloc(n * sizeof(*contacts));
\`\`\`

Each contact can then have dynamically allocated strings for its name and phone number.

---

# 4. Dynamic String Storage

Suppose a program does not know the required string length.

Instead of:

\`\`\`c
char text[100];
\`\`\`

it can allocate memory based on the required size:

\`\`\`c
char *text;

text = malloc((length + 1) * sizeof(*text));
\`\`\`

The extra byte provides space for '\\0'.

---

# 5. Dynamic Array for User Input

A program can continue accepting numbers and increase the array as required.

\`\`\`
Start
  ↓
Allocate space
  ↓
Read value
  ↓
Need more space?
  ↓
realloc()
  ↓
Continue
  ↓
Finish
  ↓
free()
\`\`\`

This is useful for programs where the final number of inputs is unknown.

---

# 6. Dynamic Matrix

Dynamic memory can be used for matrices whose dimensions are determined at runtime.

For example:

\`\`\`
Rows = 100
Columns = 50
\`\`\`

The program can allocate the matrix according to those values.

A pointer-to-pointer implementation can use:

\`\`\`c
int **matrix;
\`\`\`

and allocate each row dynamically.

---

# 7. Linked Lists

Dynamic memory is fundamental to linked lists.

A node can be defined as:

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

A new node can be dynamically allocated:

\`\`\`c
struct Node *newNode;

newNode = malloc(sizeof(*newNode));
\`\`\`

Then:

\`\`\`c
newNode->data = 10;
newNode->next = NULL;
\`\`\`

---

# 8. Linked List Memory Structure

Conceptually:

\`\`\`
head
 │
 ▼
┌─────────────┐
│ data = 10   │
│ next ───────┼─────┐
└─────────────┘     │
                    ▼
              ┌─────────────┐
              │ data = 20   │
              │ next ───────┼─────┐
              └─────────────┘     │
                                  ▼
                                 NULL
\`\`\`

Each node can be allocated as it is needed.

---

# 9. Dynamic Stack

A stack can be implemented using a dynamic array.

\`\`\`c
int *stack;

stack = malloc(capacity * sizeof(*stack));
\`\`\`

When the stack becomes full, realloc() can be used to increase its capacity.

---

# 10. Dynamic Queue

A queue can also use dynamically allocated storage.

The queue can grow when additional elements are required.

Conceptually:

\`\`\`
Enqueue
   ↓
Need more memory?
   ↓
realloc()
   ↓
Add element
   ↓
Dequeue
\`\`\`

---

# 11. Dynamic Trees

Tree nodes are commonly created dynamically.

Example:

\`\`\`c
struct TreeNode
{
    int data;
    struct TreeNode *left;
    struct TreeNode *right;
};
\`\`\`

A node can be created using:

\`\`\`c
struct TreeNode *node;

node = malloc(sizeof(*node));
\`\`\`

---

# 12. Dynamic Graphs

Dynamic memory can also be used to represent graphs.

For example, an adjacency-list representation can dynamically create lists of neighboring vertices.

Conceptually:

\`\`\`
Graph

 ├── Vertex 1 → Vertex 2 → Vertex 4
 │
 ├── Vertex 2 → Vertex 3
 │
 └── Vertex 3 → Vertex 4
\`\`\`

The number of connections can vary, making dynamic memory useful.

---

# 13. Dynamic Memory in File Applications

Dynamic memory can work together with file handling.

For example:

\`\`\`
File
 ↓
Read number of records
 ↓
Allocate memory
 ↓
Load records
 ↓
Process records
 ↓
Release memory
\`\`\`

A program could read student records from a file and allocate enough memory to store them.

---

# 14. Example — Dynamic Student Array

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

struct Student
{
    int rollNumber;
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

    students = malloc((size_t)n *
                      sizeof(*students));

    if (students == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    for (int i = 0; i < n; i++)
    {
        printf("Enter roll number: ");
        scanf("%d",
              &students[i].rollNumber);

        printf("Enter marks: ");
        scanf("%f",
              &students[i].marks);
    }

    for (int i = 0; i < n; i++)
    {
        printf("%d %.2f\\n",
               students[i].rollNumber,
               students[i].marks);
    }

    free(students);

    return 0;
}
\`\`\`

---

# 15. Important Points

Dynamic memory is useful whenever:

Data size is unknown

OR

Data size changes

OR

Objects must be created during execution

Common applications include:

- Dynamic arrays
- Strings
- Student records
- Linked lists
- Stacks
- Queues
- Trees
- Graphs
- Matrices
- File-based applications

---

# Lesson Summary

Dynamic memory is not limited to simple arrays.

It is a fundamental building block for many data structures and applications.

The general pattern remains:

\`\`\`
Determine required memory
        ↓
Allocate
        ↓
Check allocation
        ↓
Use memory
        ↓
Resize if necessary
        ↓
Free memory
\`\`\`

Understanding these applications helps connect dynamic memory management with practical C programming.

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

✓ Lesson 11 — Dynamic Memory and Pointers

✓ Lesson 12 — Dynamic 2D Arrays

✓ Lesson 13 — Memory Leaks and Common Errors

✓ Lesson 14 — Practical Applications

→ Lesson 15 — Mini Project — Dynamic Student Record System

---

# Lesson 14 Complete

`,
};

export default lesson14;
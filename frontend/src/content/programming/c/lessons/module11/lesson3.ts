const lesson3 = {
  id: "lesson3",
  title: "Structures as Data Structures",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 3: Structures as Data Structures

---

# Introduction

A **structure** in C is a user-defined data type that allows multiple related variables, possibly of different types, to be grouped together.

Structures are important in data structures because they can be used to create complex objects such as:

- Student
- Employee
- Book
- Product
- Node

They also form the foundation for linked lists, trees, graphs, and other dynamic data structures.

---

# 1. Defining a Structure

Example:

\`\`\`c
struct Student
{
    int rollNumber;
    char name[50];
    float marks;
};
\`\`\`

This defines the structure type.

It contains:

\`\`\`
rollNumber → int
name       → char array
marks      → float
\`\`\`

---

# 2. Creating a Structure Variable

After defining the structure:

\`\`\`c
struct Student student1;
\`\`\`

Now student1 contains all three members.

---

# 3. Assigning Values

Use the . operator:

\`\`\`c
student1.rollNumber = 101;

student1.marks = 85.5f;
\`\`\`

For the name:

\`\`\`c
strcpy(student1.name, "Student");
\`\`\`

The strcpy() function requires:

\`\`\`c
#include <string.h>
\`\`\`

---

# 4. Complete Example

\`\`\`c
#include <stdio.h>
#include <string.h>

struct Student
{
    int rollNumber;
    char name[50];
    float marks;
};

int main(void)
{
    struct Student student1;

    student1.rollNumber = 101;
    strcpy(student1.name, "Student");
    student1.marks = 85.5f;

    printf("Roll Number: %d\\n",
           student1.rollNumber);

    printf("Name: %s\\n",
           student1.name);

    printf("Marks: %.2f\\n",
           student1.marks);

    return 0;
}
\`\`\`

Output:

\`\`\`
Roll Number: 101
Name: Student
Marks: 85.50
\`\`\`

---

# 5. Structure and Array

An array can contain structures.

Example:

\`\`\`c
struct Student students[3];
\`\`\`

Conceptually:

\`\`\`
students
   ↓

┌──────────┬──────────┬──────────┐
│ Student1 │ Student2 │ Student3 │
└──────────┴──────────┴──────────┘
\`\`\`

Each element contains all the members of the structure.

---

# 6. Array of Structures

Example:

\`\`\`c
#include <stdio.h>

struct Student
{
    int rollNumber;
    float marks;
};

int main(void)
{
    struct Student students[3];

    students[0].rollNumber = 101;
    students[0].marks = 85.5f;

    students[1].rollNumber = 102;
    students[1].marks = 91.0f;

    students[2].rollNumber = 103;
    students[2].marks = 78.5f;

    for (int i = 0; i < 3; i++)
    {
        printf("%d %.2f\\n",
               students[i].rollNumber,
               students[i].marks);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`
101 85.50
102 91.00
103 78.50
\`\`\`

---

# 7. typedef With Structures

Instead of repeatedly writing:

\`\`\`c
struct Student
\`\`\`

we can use typedef.

\`\`\`c
typedef struct
{
    int rollNumber;
    char name[50];
    float marks;
} Student;
\`\`\`

Now:

\`\`\`c
Student student1;
\`\`\`

is enough.

---

# 8. Structure Pointer

A pointer can point to a structure:

\`\`\`c
Student *ptr;
\`\`\`

For example:

\`\`\`c
Student student1;

ptr = &student1;
\`\`\`

Members can be accessed using:

\`\`\`c
ptr->rollNumber
ptr->marks
\`\`\`

---

# 9. . vs ->

Use . when you have a structure variable:

\`\`\`c
student1.marks
\`\`\`

Use -> when you have a pointer to a structure:

\`\`\`c
ptr->marks
\`\`\`

Conceptually:

\`\`\`
Structure variable
       ↓
      .

Structure pointer
       ↓
      ->
\`\`\`

---

# 10. Dynamic Structure

Structures can be dynamically allocated.

\`\`\`c
Student *student;

student = malloc(sizeof(*student));
\`\`\`

Then:

\`\`\`c
if (student != NULL)
{
    student->rollNumber = 101;
    student->marks = 90.0f;
}
\`\`\`

Finally:

\`\`\`c
free(student);
\`\`\`

This connects structures directly with the dynamic memory concepts from Module 10.

---

# 11. Structures as Nodes

A major use of structures in data structures is creating a **node**.

Example:

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

Each node contains:

- data
- pointer to another node

Conceptually:

\`\`\`
┌──────────┬──────────┐
│   data   │   next   │
└──────────┴──────────┘
\`\`\`

This forms the foundation of a linked list.

---

# 12. Creating a Node Dynamically

\`\`\`c
struct Node *node;

node = malloc(sizeof(*node));

if (node == NULL)
{
    return 1;
}

node->data = 10;
node->next = NULL;
\`\`\`

Memory:

\`\`\`
node
  ↓

┌────────┬────────┐
│   10   │  NULL  │
└────────┴────────┘
\`\`\`

---

# 13. Connecting Two Nodes

Create two nodes:

\`\`\`c
struct Node *first;
struct Node *second;
\`\`\`

Allocate them:

\`\`\`c
first = malloc(sizeof(*first));
second = malloc(sizeof(*second));
\`\`\`

Then:

\`\`\`c
first->data = 10;
first->next = second;

second->data = 20;
second->next = NULL;
\`\`\`

Conceptually:

\`\`\`
first

  ↓

┌──────┬──────┐
│  10  │ ─────┼─────┐
└──────┴──────┘     │
                     ▼
                ┌──────┬──────┐
                │  20  │ NULL │
                └──────┴──────┘
\`\`\`

This is a simple linked list.

---

# 14. Freeing Structure Nodes

Since both nodes were dynamically allocated:

\`\`\`c
free(first);
free(second);
\`\`\`

When a linked list contains many nodes, every dynamically allocated node must eventually be released.

---

# 15. Importance of Structures in Data Structures

Structures provide the building blocks for:

\`\`\`
Linked List
     ↓
Node + Pointer

Stack
     ↓
Elements + Management information

Queue
     ↓
Elements + Front/Rear information

Tree
     ↓
Node + Left/Right pointers

Graph
     ↓
Vertices + Connections
\`\`\`

---

# Lesson Summary

Structures allow related data to be grouped together.

Basic structure:

\`\`\`c
typedef struct
{
    int data;
    float value;
} Data;
\`\`\`

Structure variable:

\`\`\`c
Data item;
\`\`\`

Structure pointer:

\`\`\`c
Data *ptr;
\`\`\`

Access:

\`\`\`c
item.data
\`\`\`

or:

\`\`\`c
ptr->data
\`\`\`

Structures become especially important when combined with pointers:

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

This is the foundation for the linked-list lessons that follow.

---

# Module 11 Progress

✓ Lesson 1 — Introduction to Data Structures

✓ Lesson 2 — Types of Data Structures

✓ Lesson 3 — Structures as Data Structures

→ Lesson 4 — Self-Referential Structures

  Lesson 5 — Introduction to Linked Lists

  Lesson 6 — Creating a Singly Linked List

  Lesson 7 — Traversing a Linked List

  Lesson 8 — Insertion in a Linked List

  Lesson 9 — Deletion in a Linked List

  Lesson 10 — Searching and Updating Linked Lists

  Lesson 11 — Introduction to Stacks

  Lesson 12 — Stack Implementation Using Arrays

  Lesson 13 — Stack Implementation Using Linked Lists

  Lesson 14 — Introduction to Queues

  Lesson 15 — Mini Project — Linked List Based Student Records

**Lesson 3 Complete**

`,
};

export default lesson3;
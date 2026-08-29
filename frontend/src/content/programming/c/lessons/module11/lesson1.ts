const lesson1 = {
  id: "lesson1",
  title: "Introduction to Data Structures",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 1: Introduction to Data Structures

---

# Introduction

A **data structure** is a way of organizing and storing data so that it can be used efficiently by a program.

In C programming, data structures help us manage collections of data instead of working with individual variables separately.

For example:

\`\`\`c
int marks1 = 80;
int marks2 = 75;
int marks3 = 90;
\`\`\`

This becomes difficult to manage when the amount of data increases.

An array provides a better way:

\`\`\`c
int marks[3] = {80, 75, 90};
\`\`\`

For more complex relationships, we can use structures such as:

- Linked Lists
- Stacks
- Queues
- Trees
- Graphs

---

# 1. What Is a Data Structure?

A data structure is a method of organizing data in memory so that operations such as:

- Insertion
- Deletion
- Searching
- Sorting
- Updating
- Traversal

can be performed efficiently.

Conceptually:

\`\`\`
Data
  ↓
Organize
  ↓
Data Structure
  ↓
Efficient Operations
\`\`\`

---

# 2. Why Do We Need Data Structures?

Consider a program storing information about 10,000 students.

If every student is stored as a separate variable:

\`\`\`
student1
student2
student3
...
student10000
\`\`\`

managing the data becomes difficult.

Instead, a data structure can organize the records:

\`\`\`
Student Records

       ↓

┌──────┬──────┬──────┬──────┐
│  S1  │  S2  │  S3  │ ...  │
└──────┴──────┴──────┴──────┘
\`\`\`

This makes operations easier to implement.

---

# 3. Examples of Data Structures

Important data structures include:

- Array
- Structure
- Linked List
- Stack
- Queue
- Tree
- Graph

Each one is suitable for different types of problems.

---

# 4. Array

An array stores elements of the same type in a sequence.

Example:

\`\`\`c
int numbers[5] = {10, 20, 30, 40, 50};
\`\`\`

Conceptually:

\`\`\`
numbers
   ↓

┌────┬────┬────┬────┬────┐
│ 10 │ 20 │ 30 │ 40 │ 50 │
└────┴────┴────┴────┴────┘
  0    1    2    3    4
\`\`\`

Elements are accessed using an index:

\`\`\`c
numbers[0]
numbers[1]
numbers[2]
\`\`\`

---

# 5. Structure

A structure allows different types of data to be grouped together.

Example:

\`\`\`c
struct Student
{
    int rollNumber;
    char name[50];
    float marks;
};
\`\`\`

A student can contain:

\`\`\`
Student
 ├── rollNumber → int
 ├── name       → char array
 └── marks      → float
\`\`\`

---

# 6. Linked List

A linked list consists of nodes connected using pointers.

A node can be defined as:

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

Conceptually:

\`\`\`
┌───────┬──────┐
│ data  │ next ├─────┐
└───────┴──────┘     │
                     ▼
                ┌───────┬──────┐
                │ data  │ next ├─────┐
                └───────┴──────┘     │
                                     ▼
                                    NULL
\`\`\`

Linked lists are useful when elements need to be inserted or removed dynamically.

---

# 7. Stack

A stack is a linear data structure that follows:

**LIFO**

**LIFO = Last In, First Out**

Example:

\`\`\`
       ┌────┐
       │ 30 │ ← Top
       ├────┤
       │ 20 │
       ├────┤
       │ 10 │
       └────┘
\`\`\`

If 30 was inserted last, it is removed first.

Common operations:

- push()
- pop()
- peek()

---

# 8. Queue

A queue is a linear data structure that generally follows:

**FIFO**

**FIFO = First In, First Out**

Example:

\`\`\`
Front                       Rear
  ↓                           ↓

┌────┬────┬────┬────┐
│ 10 │ 20 │ 30 │ 40 │
└────┴────┴────┴────┘
\`\`\`

The first element inserted is the first element removed.

Common operations:

- enqueue()
- dequeue()

---

# 9. Tree

A tree is a hierarchical data structure.

Example:

\`\`\`
             10
            /  \\
           5    20
          / \\  / \\
         2  7 15 25
\`\`\`

The top element is called the **root**.

Other important terms include:

- Root
- Parent
- Child
- Leaf
- Subtree

---

# 10. Graph

A graph consists of vertices and edges.

Example:

\`\`\`
     A
    / \\
   B---C
    \\ /
     D
\`\`\`

Here:

A, B, C, D

are vertices, while the connections between them are edges.

Graphs can represent relationships such as:

- Computer networks
- Road networks
- Social networks
- Maps
- Dependencies

---

# 11. Linear Data Structures

In a linear data structure, elements are arranged sequentially.

Examples:

- Array
- Linked List
- Stack
- Queue

Conceptually:

\`\`\`
Element 1 → Element 2 → Element 3 → Element 4
\`\`\`

---

# 12. Non-Linear Data Structures

In non-linear data structures, elements are not arranged in one simple sequence.

Examples:

- Tree
- Graph

For example:

\`\`\`
       A
      / \\
     B   C
    / \\
   D   E
\`\`\`

One element can be connected to multiple elements.

---

# 13. Static vs Dynamic Data Structures

## Static

The size is generally fixed.

Example:

\`\`\`c
int numbers[100];
\`\`\`

## Dynamic

The amount of memory can change during execution.

Example:

\`\`\`c
int *numbers;

numbers = malloc(n * sizeof(*numbers));
\`\`\`

Linked lists are a common example of a dynamically managed data structure.

---

# 14. Operations on Data Structures

Common operations include:

## Insertion

Adding a new element.

\`\`\`
10 → 20 → 30

Insert 15

10 → 15 → 20 → 30
\`\`\`

## Deletion

Removing an element.

\`\`\`
10 → 20 → 30

Delete 20

10 → 30
\`\`\`

## Searching

Finding a particular element.

\`\`\`
10 → 20 → 30 → 40

Search 30
       ↑
     Found
\`\`\`

## Traversal

Visiting elements one by one.

\`\`\`
10 → 20 → 30 → 40

↓     ↓     ↓     ↓

Visit each element
\`\`\`

---

# 15. Choosing a Data Structure

Need indexed access?

\`\`\`
      ↓

    Array
\`\`\`

Need dynamic insertion/deletion?

\`\`\`
      ↓

 Linked List
\`\`\`

Need LIFO?

\`\`\`
      ↓

    Stack
\`\`\`

Need FIFO?

\`\`\`
      ↓

    Queue
\`\`\`

Need hierarchy?

\`\`\`
      ↓

     Tree
\`\`\`

Need relationships/networks?

\`\`\`
      ↓

    Graph
\`\`\`

---

# Lesson Summary

A data structure organizes data so that it can be stored and processed effectively.

Important examples:

\`\`\`
Array        → Sequential collection

Structure    → Groups different data types

Linked List  → Dynamically connected nodes

Stack        → LIFO

Queue        → FIFO

Tree         → Hierarchical data

Graph        → Network of relationships
\`\`\`

Data structures are fundamental to writing efficient and organized C programs.

---

# Module 11 Progress

✓ Lesson 1 — Introduction to Data Structures

→ Lesson 2 — Types of Data Structures

  Lesson 3 — Structures as Data Structures

  Lesson 4 — Self-Referential Structures

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

**Lesson 1 Complete**

`,
};

export default lesson1;
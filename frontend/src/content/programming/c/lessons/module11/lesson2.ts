const lesson2 = {
  id: "lesson2",
  title: "Types of Data Structures",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 2: Types of Data Structures

---

# Introduction

Data structures can be classified in different ways depending on how data is organized and how memory is managed.

The major classifications are:

\`\`\`
Data Structures
      │
      ├── Primitive
      │
      └── Non-Primitive
              │
              ├── Linear
              └── Non-Linear
\`\`\`

---

# 1. Primitive Data Structures

Primitive data types are the basic data types provided by C.

Examples:

- int
- char
- float
- double

Example:

\`\`\`c
int age = 20;

char grade = 'A';

float marks = 85.5f;
\`\`\`

These are the fundamental building blocks used to construct more complex data structures.

---

# 2. Non-Primitive Data Structures

Non-primitive structures are built using primitive data types.

Examples:

- Array
- Structure
- Linked List
- Stack
- Queue
- Tree
- Graph

They allow programs to organize collections of data.

---

# 3. Linear Data Structures

A linear data structure stores elements in a sequential arrangement.

Examples:

- Array
- Linked List
- Stack
- Queue

Conceptually:

\`\`\`
10 → 20 → 30 → 40 → 50
\`\`\`

Each element has a logical position in a sequence.

---

# 4. Array

An array stores elements in contiguous memory.

Example:

\`\`\`c
int numbers[5] = {10, 20, 30, 40, 50};
\`\`\`

Diagram:

\`\`\`
┌────┬────┬────┬────┬────┐
│ 10 │ 20 │ 30 │ 40 │ 50 │
└────┴────┴────┴────┴────┘
\`\`\`

Advantages:

- Fast indexed access
- Simple implementation
- Contiguous storage

---

# 5. Linked List

A linked list contains nodes.

Each node stores:

- Data
- Pointer to next node

Example:

\`\`\`
┌──────┬──────┐
│  10  │ ─────┼────┐
└──────┴──────┘    │
                    ▼
               ┌──────┬──────┐
               │  20  │ ─────┼───┐
               └──────┴──────┘   │
                                  ▼
                                 NULL
\`\`\`

---

# 6. Stack

A stack follows:

**LIFO**

The last element inserted is the first element removed.

Example:

\`\`\`
Push 10

Push 20

Push 30

       Top
        ↓
      ┌────┐
      │ 30 │
      ├────┤
      │ 20 │
      ├────┤
      │ 10 │
      └────┘
\`\`\`

Removing an element removes 30 first.

---

# 7. Queue

A queue follows:

**FIFO**

The first element inserted is the first element removed.

Example:

\`\`\`
Front                    Rear
  ↓                        ↓

┌────┬────┬────┬────┐
│ 10 │ 20 │ 30 │ 40 │
└────┴────┴────┴────┘
\`\`\`

10 is removed first.

---

# 8. Non-Linear Data Structures

Non-linear structures organize data hierarchically or as interconnected relationships.

Examples:

- Tree
- Graph

---

# 9. Tree

A tree represents hierarchical relationships.

Example:

\`\`\`
          A
        /   \\
       B     C
      / \\     \\
     D   E     F
\`\`\`

A tree contains nodes connected by edges.

---

# 10. Graph

A graph represents relationships between objects.

Example:

\`\`\`
     A
    / \\
   B---C
    \\ /
     D
\`\`\`

A graph consists of:

- Vertices
- Edges

---

# 11. Static Data Structures

A static data structure generally has a fixed size.

Example:

\`\`\`c
int numbers[100];
\`\`\`

The array has space for 100 integers.

Its size does not automatically change during execution.

---

# 12. Dynamic Data Structures

A dynamic data structure can change its size during execution.

Example:

\`\`\`c
int *numbers;

numbers = malloc(n * sizeof(*numbers));
\`\`\`

The amount of memory is determined at runtime.

Linked lists are especially useful for dynamic collections.

---

# 13. Classification Diagram

\`\`\`
                    DATA STRUCTURES
                           │
             ┌─────────────┴─────────────┐
             │                           │
         PRIMITIVE                 NON-PRIMITIVE
             │                           │
      ┌──────┼──────┐             ┌──────┴──────┐
      │      │      │             │             │
     int    char   float        LINEAR       NON-LINEAR
                                      │             │
                              ┌───────┼──────┐    ┌─┴──┐
                              │       │      │    │    │
                            Array   Stack  Queue Tree Graph
                                      │
                                 Linked List
\`\`\`

---

# 14. Comparison

## Array

Organization:

Linear

Main characteristic:

Indexed access

## Linked List

Organization:

Linear

Main characteristic:

Nodes connected by pointers

## Stack

Organization:

Linear

Main characteristic:

LIFO

## Queue

Organization:

Linear

Main characteristic:

FIFO

## Tree

Organization:

Non-linear

Main characteristic:

Hierarchical

## Graph

Organization:

Non-linear

Main characteristic:

Relationships

---

# 15. Choosing the Right Type

Sequential data:

\`\`\`
      ↓

Array / Linked List
\`\`\`

Last-in-first-out:

\`\`\`
      ↓

Stack
\`\`\`

First-in-first-out:

\`\`\`
      ↓

Queue
\`\`\`

Hierarchical information:

\`\`\`
      ↓

Tree
\`\`\`

Complex relationships:

\`\`\`
      ↓

Graph
\`\`\`

---

# Lesson Summary

Data structures can be classified as:

\`\`\`
Primitive
    ↓
int, char, float, double
\`\`\`

and:

\`\`\`
Non-Primitive
       ↓
   ┌───┴────┐
   ↓        ↓
Linear   Non-Linear
   ↓        ↓
Array     Tree
Linked    Graph
List
Stack
Queue
\`\`\`

They can also be viewed as:

\`\`\`
Static
  ↓
Fixed-size structures

Dynamic
  ↓
Structures whose storage can change
\`\`\`

Choosing the correct data structure depends on how the data needs to be stored and what operations need to be performed.

---

# Module 11 Progress

✓ Lesson 1 — Introduction to Data Structures

✓ Lesson 2 — Types of Data Structures

→ Lesson 3 — Structures as Data Structures

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

**Lesson 2 Complete**

`,
};

export default lesson2;
const about = {
  id: "about",
  title: "Data Structures in C",

  content: `

## About the Module

Data structures are an important part of C programming because they allow programs to organize, store, and manage collections of data efficiently.

In the previous modules, you learned about pointers, structures, and dynamic memory allocation. Module 11 builds on those concepts and introduces important data structures such as linked lists, stacks, and queues.

In this module, you will learn how structures and pointers can be combined to create dynamic data structures and how these structures can be used to solve practical programming problems.

---

# What You Will Learn

## Data Structures

You will learn:

- Introduction to Data Structures
- Types of Data Structures
- Linear and non-linear data structures
- Static and dynamic data structures
- Common data-structure operations

## Structures and Nodes

You will learn:

- Structures as data structures
- Structure pointers
- Self-referential structures
- Creating nodes
- Connecting nodes dynamically

## Linked Lists

You will learn:

- Introduction to linked lists
- Creating a singly linked list
- Traversing a linked list
- Insertion in a linked list
- Deletion in a linked list
- Searching linked lists
- Updating linked-list nodes

## Stacks

You will learn:

- Introduction to stacks
- LIFO principle
- Push operation
- Pop operation
- Peek operation
- Stack implementation using arrays
- Stack implementation using linked lists
- Stack overflow and underflow

## Queues

You will learn:

- Introduction to queues
- FIFO principle
- Enqueue operation
- Dequeue operation
- Front and rear
- Queue implementation concepts

## Mini Project

At the end of the module, you will apply structures, pointers, dynamic memory, and linked-list concepts to build a practical **Linked List Based Student Records** project.

---

# Module Structure

Lesson 1 — Introduction to Data Structures

Lesson 2 — Types of Data Structures

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

---

# Module Goal

By the end of Module 11, you should be able to:

- Understand the purpose of data structures.
- Identify different types of data structures.
- Distinguish between linear and non-linear data structures.
- Understand static and dynamic data structures.
- Use structures to organize related data.
- Create self-referential structures.
- Create and connect nodes using pointers.
- Create singly linked lists dynamically.
- Traverse linked lists.
- Insert nodes into linked lists.
- Delete nodes from linked lists.
- Search for values in linked lists.
- Update values stored in linked-list nodes.
- Understand the LIFO principle of stacks.
- Implement stacks using arrays.
- Implement stacks using linked lists.
- Understand the FIFO principle of queues.
- Understand enqueue and dequeue operations.
- Use dynamic memory safely with data structures.
- Build a practical student-record system using a linked list.

---

# Why Data Structures Are Important

Data structures determine how data is organized and how efficiently a program can perform operations on that data.

For example, a program may store a collection of values using an array:

\`\`\`c
int numbers[5] = {10, 20, 30, 40, 50};
\`\`\`

For dynamically changing data, a linked list can be used:

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

A program may also need to follow a particular order when processing data.

A stack follows:

\`\`\`
Last In → First Out
\`\`\`

while a queue follows:

\`\`\`
First In → First Out
\`\`\`

These concepts allow programs to organize and process data according to the requirements of a problem.

---

# Data Structures Covered

## Array

Stores elements in a sequential collection and provides indexed access.

## Structure

Groups related variables of different data types into a single user-defined type.

## Linked List

Uses dynamically allocated nodes connected through pointers.

## Stack

Uses the LIFO principle.

\`\`\`
Last In
   ↓
First Out
\`\`\`

## Queue

Uses the FIFO principle.

\`\`\`
First In
   ↓
First Out
\`\`\`

## Tree

Organizes data hierarchically.

## Graph

Represents relationships between connected objects.

---

# Module 11 Concept Map

                    MODULE 11

               DATA STRUCTURES IN C

                         │

        ┌────────────────┼────────────────┐
        │                │                │
   STRUCTURES       LINKED LISTS        STACKS
        │                │                │
        │          ┌─────┼─────┐      ┌───┴───┐
        │          │     │     │      │       │
      Nodes     Create Traverse Insert Array Linked
        │                │     │      │       │
        │                │   Delete   └───────┘
        │                │
        │             Search
        │                │
        │             Update
        │
        └────────────┬───┘
                     │
                 POINTERS
                     │
                     ▼
              DYNAMIC MEMORY
                     │
                     ▼
                  QUEUES
                     │
                     ▼
          STUDENT RECORD PROJECT

---

# Module 11 Progress

→ Lesson 1 — Introduction to Data Structures

  Lesson 2 — Types of Data Structures

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

---

# Final Module of C Programming

Module 11 is the final module of the C Programming course.

After completing this module, you will have covered the major concepts required to build a strong foundation in C programming, from basic programming concepts through pointers, structures, dynamic memory, and data structures.

The final project brings these concepts together by building a practical student-record system using a singly linked list.

---

# Module 11 Complete

After completing Module 11, you will have a strong foundation in:

- Data organization
- Structures
- Pointers
- Dynamic memory
- Self-referential structures
- Linked lists
- Stacks
- Queues
- Data-structure operations
- Practical C programming

This completes the **C Programming Course**.

Next: Lesson 1 — Introduction to Data Structures.

`,
};

export default about;
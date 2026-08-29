const lesson4 = {
  id: "lesson4",
  title: "Self-Referential Structures",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 4: Self-Referential Structures

---

# Introduction

A **self-referential structure** is a structure that contains a pointer to another structure of the **same type**.

It is one of the most important concepts in data structures because it is used to create:

- Linked Lists
- Stacks using Linked Lists
- Queues using Linked Lists
- Trees
- Graphs

---

# 1. Basic Self-Referential Structure

Example:

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

Here:

\`\`\`
data
 ↓
Stores the actual value

next
 ↓
Stores the address of another Node
\`\`\`

---

# 2. Why Is It Called Self-Referential?

The structure contains a pointer whose type is the same structure type.

\`\`\`c
struct Node *next;
\`\`\`

The structure is:

\`\`\`
struct Node
      │
      ├── data
      │
      └── next ──────► struct Node
\`\`\`

Therefore, the structure can refer to another object of its own type.

---

# 3. Why Can't We Write This?

This is incorrect:

\`\`\`c
struct Node
{
    int data;
    struct Node next;
};
\`\`\`

The problem is that next would contain another complete struct Node, which would contain another complete struct Node, and so on forever.

Instead, we use a pointer:

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

A pointer has a fixed size, so the structure can be defined.

---

# 4. Creating a Node

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

Create a variable:

\`\`\`c
struct Node node1;
\`\`\`

Assign its data:

\`\`\`c
node1.data = 10;
node1.next = NULL;
\`\`\`

Conceptually:

\`\`\`
node1

┌──────────┬──────────┐
│ data=10  │ next=NULL│
└──────────┴──────────┘
\`\`\`

---

# 5. Connecting Two Nodes

Create two nodes:

\`\`\`c
struct Node node1;
struct Node node2;
\`\`\`

Set their values:

\`\`\`c
node1.data = 10;
node2.data = 20;
\`\`\`

Connect them:

\`\`\`c
node1.next = &node2;
node2.next = NULL;
\`\`\`

Conceptually:

\`\`\`
node1

  │
  ▼

┌──────┬─────────┐
│  10  │ ────────┼─────┐
└──────┴─────────┘     │
                       ▼
                  ┌──────┬──────┐
                  │  20  │ NULL │
                  └──────┴──────┘
\`\`\`

This is the basic idea behind a linked list.

---

# 6. Dynamic Node Creation

Self-referential structures are commonly allocated dynamically.

\`\`\`c
struct Node *node;

node = malloc(sizeof(*node));
\`\`\`

Always check the allocation:

\`\`\`c
if (node == NULL)
{
    return 1;
}
\`\`\`

Then:

\`\`\`c
node->data = 10;
node->next = NULL;
\`\`\`

---

# 7. Complete Example

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *next;
};

int main(void)
{
    struct Node *node;

    node = malloc(sizeof(*node));

    if (node == NULL)
    {
        return 1;
    }

    node->data = 10;
    node->next = NULL;

    printf("Data: %d\\n", node->data);

    free(node);
    node = NULL;

    return 0;
}
\`\`\`

Output:

\`\`\`
Data: 10
\`\`\`

---

# 8. Creating Multiple Dynamic Nodes

\`\`\`c
struct Node *first;
struct Node *second;

first = malloc(sizeof(*first));
second = malloc(sizeof(*second));
\`\`\`

Assign values:

\`\`\`c
first->data = 10;
second->data = 20;
\`\`\`

Connect them:

\`\`\`c
first->next = second;
second->next = NULL;
\`\`\`

Diagram:

\`\`\`
first

  │
  ▼

┌──────┬──────┐
│  10  │ ─────┼──────┐
└──────┴──────┘      │
                     ▼
                ┌──────┬──────┐
                │  20  │ NULL │
                └──────┴──────┘
\`\`\`

---

# 9. Freeing the Nodes

Both nodes were dynamically allocated, so both must be released:

\`\`\`c
free(second);
free(first);
\`\`\`

For a larger linked list, nodes are normally freed one by one by traversing the list.

---

# 10. typedef Version

A convenient form is:

\`\`\`c
typedef struct Node
{
    int data;
    struct Node *next;
} Node;
\`\`\`

Now we can write:

\`\`\`c
Node *first;
Node *second;
\`\`\`

instead of:

\`\`\`c
struct Node *first;
struct Node *second;
\`\`\`

---

# 11. Self-Referential Structure for a Tree

Self-referential structures are not limited to linked lists.

A binary tree node can be defined as:

\`\`\`c
typedef struct TreeNode
{
    int data;
    struct TreeNode *left;
    struct TreeNode *right;
} TreeNode;
\`\`\`

Each node can point to two other nodes of the same type.

\`\`\`
             10
            /  \\
           5    20
\`\`\`

The left and right members are pointers to other TreeNode objects.

---

# 12. Different Self-Referential Structures

## Singly Linked List

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

## Doubly Linked List

\`\`\`c
struct Node
{
    int data;
    struct Node *prev;
    struct Node *next;
};
\`\`\`

## Binary Tree

\`\`\`c
struct TreeNode
{
    int data;
    struct TreeNode *left;
    struct TreeNode *right;
};
\`\`\`

---

# 13. Importance

Self-referential structures provide the ability to create structures whose size and connections can change dynamically.

They are the foundation for:

\`\`\`
Node
  ↓
Pointer to another node
  ↓
Multiple connected nodes
  ↓
Dynamic data structure
\`\`\`

---

# 14. Important Operators

For a structure variable:

\`\`\`c
node.data
\`\`\`

For a structure pointer:

\`\`\`c
node->data
\`\`\`

For the next node:

\`\`\`c
node->next
\`\`\`

To access the next node's data:

\`\`\`c
node->next->data
\`\`\`

---

# 15. Important Points

\`\`\`
Self-Referential Structure
          ↓
Structure contains a pointer
          ↓
Pointer points to same structure type
          ↓
Creates connected nodes
          ↓
Used in:
Linked Lists
Trees
Graphs
Stacks
Queues
\`\`\`

---

# Lesson Summary

A self-referential structure contains a pointer to another object of the same structure type.

Basic form:

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

Dynamic node:

\`\`\`c
struct Node *node =
    malloc(sizeof(*node));
\`\`\`

Access:

\`\`\`c
node->data
node->next
\`\`\`

A self-referential structure is the fundamental building block of linked lists and many other dynamic data structures.

---

# Module 11 Progress

✓ Lesson 1 — Introduction to Data Structures

✓ Lesson 2 — Types of Data Structures

✓ Lesson 3 — Structures as Data Structures

✓ Lesson 4 — Self-Referential Structures

→ Lesson 5 — Introduction to Linked Lists

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

**Lesson 4 Complete**

`,
};

export default lesson4;
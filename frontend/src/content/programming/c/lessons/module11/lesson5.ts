const lesson5 = {
  id: "lesson5",
  title: "Introduction to Linked Lists",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 5: Introduction to Linked Lists

---

# Introduction

A **linked list** is a linear data structure made up of a sequence of nodes.

Unlike an array, linked-list nodes do not have to occupy contiguous memory locations.

Each node contains:

- Data
- Pointer to the next node

---

# 1. Basic Node

A singly linked-list node can be defined as:

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

Conceptually:

\`\`\`
┌──────────┬──────────┐
│   data   │   next   │
└──────────┴──────────┘
\`\`\`

---

# 2. Linked List Structure

Multiple nodes can be connected:

\`\`\`
head
  ↓

┌────┬─────┐     ┌────┬─────┐     ┌────┬──────┐
│ 10 │ ────┼────►│ 20 │ ────┼────►│ 30 │ NULL │
└────┴─────┘     └────┴─────┘     └────┴──────┘
\`\`\`

The pointer called **head** stores the address of the first node.

---

# 3. Why Use a Linked List?

Arrays have a fixed-size limitation when declared normally:

\`\`\`c
int numbers[100];
\`\`\`

Linked lists can grow and shrink dynamically.

A linked list can have:

\`\`\`
1 node
  ↓
2 nodes
  ↓
3 nodes
  ↓
...
\`\`\`

Nodes are created as required.

---

# 4. Array vs Linked List

## Array

- Elements are stored contiguously.
- Direct index access is available.
- Insertion can require shifting.
- Deletion can require shifting.
- Fixed-size arrays have fixed capacity.

## Linked List

- Nodes can be located separately.
- Access normally requires sequential traversal.
- Insertion can be efficient when the position is known.
- Deletion can be efficient when node links are managed.
- Can grow dynamically.

---

# 5. Creating the First Node

\`\`\`c
struct Node *head;

head = malloc(sizeof(*head));
\`\`\`

Check the allocation:

\`\`\`c
if (head == NULL)
{
    return 1;
}
\`\`\`

Then:

\`\`\`c
head->data = 10;
head->next = NULL;
\`\`\`

Diagram:

\`\`\`
head
  ↓

┌──────┬──────┐
│  10  │ NULL │
└──────┴──────┘
\`\`\`

---

# 6. Creating Two Nodes

\`\`\`c
struct Node *head;
struct Node *second;

head = malloc(sizeof(*head));
second = malloc(sizeof(*second));
\`\`\`

Set values:

\`\`\`c
head->data = 10;
second->data = 20;
\`\`\`

Connect them:

\`\`\`c
head->next = second;
second->next = NULL;
\`\`\`

Diagram:

\`\`\`
head
  ↓

┌────┬─────┐     ┌────┬──────┐
│ 10 │ ────┼────►│ 20 │ NULL │
└────┴─────┘     └────┴──────┘
\`\`\`

---

# 7. Creating a Third Node

\`\`\`c
struct Node *third;

third = malloc(sizeof(*third));

third->data = 30;
third->next = NULL;

second->next = third;
\`\`\`

Now:

\`\`\`
head
  ↓

10 → 20 → 30 → NULL
\`\`\`

---

# 8. Complete Example

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
    struct Node *head;
    struct Node *second;
    struct Node *third;

    head = malloc(sizeof(*head));
    second = malloc(sizeof(*second));
    third = malloc(sizeof(*third));

    if (head == NULL ||
        second == NULL ||
        third == NULL)
    {
        free(head);
        free(second);
        free(third);
        return 1;
    }

    head->data = 10;
    head->next = second;

    second->data = 20;
    second->next = third;

    third->data = 30;
    third->next = NULL;

    printf("%d\\n", head->data);
    printf("%d\\n", head->next->data);
    printf("%d\\n", head->next->next->data);

    free(third);
    free(second);
    free(head);

    return 0;
}
\`\`\`

Output:

\`\`\`
10
20
30
\`\`\`

---

# 9. The head Pointer

The head pointer is very important.

It points to the first node:

\`\`\`
head
  ↓
Node 1 → Node 2 → Node 3 → NULL
\`\`\`

If:

\`\`\`c
head == NULL
\`\`\`

the linked list is empty.

---

# 10. Empty Linked List

An empty list is represented by:

\`\`\`c
struct Node *head = NULL;
\`\`\`

Diagram:

\`\`\`
head
  ↓
NULL
\`\`\`

When the first node is added:

\`\`\`
head
  ↓

┌────┬──────┐
│ 10 │ NULL │
└────┴──────┘
\`\`\`

---

# 11. Dynamic Nature of Linked Lists

Unlike a fixed-size array:

\`\`\`
Array
  ↓
Fixed capacity
\`\`\`

a linked list can dynamically create nodes:

\`\`\`
head
  ↓
Node → Node → Node → NULL
  ↑
New nodes can be allocated as needed
\`\`\`

Each node can be created with:

\`\`\`c
malloc(sizeof(*node));
\`\`\`

---

# 12. Traversing the Concept

To visit every node, start from head and follow next.

\`\`\`c
struct Node *current = head;

while (current != NULL)
{
    printf("%d ", current->data);
    current = current->next;
}
\`\`\`

Conceptually:

\`\`\`
head
  ↓
10 → 20 → 30 → NULL
↓     ↓     ↓
Visit each node
\`\`\`

Traversal will be covered in detail in Lesson 7.

---

# 13. Advantages

Linked lists provide:

- Dynamic size
- Easy insertion and deletion when links are known
- No requirement for contiguous node storage
- Useful foundation for other data structures

---

# 14. Disadvantages

Linked lists also have limitations:

- No direct index-based access
- Extra memory required for pointers
- Sequential traversal is required
- Pointer management is more complex

For example, to reach the third node, we normally start from head and follow links.

---

# 15. Important Points

\`\`\`
Linked List
     ↓
Collection of nodes
     ↓
Each node contains:
     ├── Data
     └── Next pointer
              ↓
          Next node
              ↓
             NULL
\`\`\`

The first node is accessed through:

\`\`\`c
head
\`\`\`

An empty linked list:

\`\`\`c
head = NULL;
\`\`\`

---

# Lesson Summary

A singly linked list is a collection of dynamically allocated nodes.

Basic node:

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

Basic list:

\`\`\`
head
  ↓
10 → 20 → 30 → NULL
\`\`\`

The head pointer identifies the first node, while each next pointer connects one node to the next.

---

# Module 11 Progress

✓ Lesson 1 — Introduction to Data Structures

✓ Lesson 2 — Types of Data Structures

✓ Lesson 3 — Structures as Data Structures

✓ Lesson 4 — Self-Referential Structures

✓ Lesson 5 — Introduction to Linked Lists

→ Lesson 6 — Creating a Singly Linked List

  Lesson 7 — Traversing a Linked List

  Lesson 8 — Insertion in a Linked List

  Lesson 9 — Deletion in a Linked List

  Lesson 10 — Searching and Updating Linked Lists

  Lesson 11 — Introduction to Stacks

  Lesson 12 — Stack Implementation Using Arrays

  Lesson 13 — Stack Implementation Using Linked Lists

  Lesson 14 — Introduction to Queues

  Lesson 15 — Mini Project — Linked List Based Student Records

**Lesson 5 Complete**

`,
};

export default lesson5;
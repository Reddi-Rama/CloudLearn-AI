const lesson6 = {
  id: "lesson6",
  title: "Creating a Singly Linked List",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 6: Creating a Singly Linked List

---

# Introduction

A **singly linked list** consists of nodes where each node contains:

- Data
- Pointer to the next node

The last node points to:

\`\`\`
NULL
\`\`\`

A complete list looks like:

\`\`\`
head
  ↓
10 → 20 → 30 → 40 → NULL
\`\`\`

---

# 1. Define the Node

\`\`\`c
struct Node
{
    int data;
    struct Node *next;
};
\`\`\`

Using typedef:

\`\`\`c
typedef struct Node
{
    int data;
    struct Node *next;
} Node;
\`\`\`

Now we can simply write:

\`\`\`c
Node *head;
\`\`\`

---

# 2. Initialize the Head

Before creating any nodes:

\`\`\`c
Node *head = NULL;
\`\`\`

This represents an empty linked list.

\`\`\`
head
  ↓
NULL
\`\`\`

---

# 3. Create the First Node

Allocate memory:

\`\`\`c
Node *newNode;

newNode = malloc(sizeof(*newNode));
\`\`\`

Check:

\`\`\`c
if (newNode == NULL)
{
    return 1;
}
\`\`\`

Set values:

\`\`\`c
newNode->data = 10;
newNode->next = NULL;
\`\`\`

Then:

\`\`\`c
head = newNode;
\`\`\`

Now:

\`\`\`
head
  ↓

┌────┬──────┐
│ 10 │ NULL │
└────┴──────┘
\`\`\`

---

# 4. Create the Second Node

Create another node:

\`\`\`c
Node *second;

second = malloc(sizeof(*second));
\`\`\`

Set:

\`\`\`c
second->data = 20;
second->next = NULL;
\`\`\`

Connect:

\`\`\`c
head->next = second;
\`\`\`

Now:

\`\`\`
head
  ↓
10 → 20 → NULL
\`\`\`

---

# 5. Create the Third Node

\`\`\`c
Node *third;

third = malloc(sizeof(*third));
\`\`\`

Check the allocation:

\`\`\`c
if (third == NULL)
{
    /* Handle allocation failure */
}
\`\`\`

Set:

\`\`\`c
third->data = 30;
third->next = NULL;
\`\`\`

Connect:

\`\`\`c
second->next = third;
\`\`\`

Now:

\`\`\`
head
  ↓
10 → 20 → 30 → NULL
\`\`\`

---

# 6. Complete Program

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *next;
} Node;

int main(void)
{
    Node *head = NULL;
    Node *second = NULL;
    Node *third = NULL;

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

    printf("First node: %d\\n",
           head->data);

    printf("Second node: %d\\n",
           head->next->data);

    printf("Third node: %d\\n",
           head->next->next->data);

    free(third);
    free(second);
    free(head);

    return 0;
}
\`\`\`

Output:

\`\`\`
First node: 10
Second node: 20
Third node: 30
\`\`\`

---

# 7. Creating Nodes With a Function

Instead of repeatedly writing allocation code, we can create a function:

\`\`\`c
Node *createNode(int data)
{
    Node *newNode;

    newNode = malloc(sizeof(*newNode));

    if (newNode == NULL)
    {
        return NULL;
    }

    newNode->data = data;
    newNode->next = NULL;

    return newNode;
}
\`\`\`

Then:

\`\`\`c
Node *head = createNode(10);
\`\`\`

Another node:

\`\`\`c
head->next = createNode(20);
\`\`\`

---

# 8. Complete Program Using createNode()

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *next;
} Node;

Node *createNode(int data)
{
    Node *newNode;

    newNode = malloc(sizeof(*newNode));

    if (newNode == NULL)
    {
        return NULL;
    }

    newNode->data = data;
    newNode->next = NULL;

    return newNode;
}

int main(void)
{
    Node *head;
    Node *second;
    Node *third;

    head = createNode(10);
    second = createNode(20);
    third = createNode(30);

    if (head == NULL ||
        second == NULL ||
        third == NULL)
    {
        free(head);
        free(second);
        free(third);
        return 1;
    }

    head->next = second;
    second->next = third;

    printf("%d → %d → %d → NULL\\n",
           head->data,
           head->next->data,
           head->next->next->data);

    free(third);
    free(second);
    free(head);

    return 0;
}
\`\`\`

Output:

\`\`\`
10 → 20 → 30 → NULL
\`\`\`

---

# 9. Creating a List From User Input

We can create nodes according to user input.

Example:

\`\`\`
Enter number of nodes: 4

Enter data:

10
20
30
40
\`\`\`

The resulting list:

\`\`\`
head
  ↓
10 → 20 → 30 → 40 → NULL
\`\`\`

---

# 10. Adding Nodes at the End

To add a new node at the end, we need to find the last node.

Conceptually:

\`\`\`
head
  ↓
10 → 20 → 30 → NULL
               ↑
             Last node
\`\`\`

Then:

\`\`\`c
last->next = newNode;
\`\`\`

The new node becomes the last node.

---

# 11. Complete Append Function

\`\`\`c
void append(Node **head, int data)
{
    Node *newNode;
    Node *current;

    newNode = createNode(data);

    if (newNode == NULL)
    {
        return;
    }

    if (*head == NULL)
    {
        *head = newNode;
        return;
    }

    current = *head;

    while (current->next != NULL)
    {
        current = current->next;
    }

    current->next = newNode;
}
\`\`\`

Notice:

\`\`\`c
Node **head
\`\`\`

is used because the function may need to change the caller's head pointer when the list is empty.

---

# 12. Using append()

\`\`\`c
Node *head = NULL;

append(&head, 10);
append(&head, 20);
append(&head, 30);
append(&head, 40);
\`\`\`

The list becomes:

\`\`\`
head
  ↓
10 → 20 → 30 → 40 → NULL
\`\`\`

---

# 13. Traversing the Created List

Use a temporary pointer:

\`\`\`c
Node *current = head;

while (current != NULL)
{
    printf("%d ", current->data);
    current = current->next;
}
\`\`\`

Output:

\`\`\`
10 20 30 40
\`\`\`

Detailed traversal will be covered in Lesson 7.

---

# 14. Freeing the Entire List

Every dynamically allocated node must be released.

\`\`\`c
Node *current = head;
Node *nextNode;

while (current != NULL)
{
    nextNode = current->next;

    free(current);

    current = nextNode;
}

head = NULL;
\`\`\`

The important part is saving the next node **before** freeing the current node.

---

# 15. Important Points

\`\`\`
Create Node
    ↓
malloc()
    ↓
Store data
    ↓
Set next
    ↓
Connect nodes
    ↓
head → node → node → NULL
\`\`\`

A singly linked list always has:

\`\`\`
head
  ↓
First node
  ↓
Second node
  ↓
...
  ↓
NULL
\`\`\`

---

# Lesson Summary

A singly linked list is created using dynamically allocated nodes.

Node:

\`\`\`c
typedef struct Node
{
    int data;
    struct Node *next;
} Node;
\`\`\`

Create:

\`\`\`c
Node *newNode =
    malloc(sizeof(*newNode));
\`\`\`

Connect:

\`\`\`c
node1->next = node2;
\`\`\`

The last node points to:

\`\`\`
NULL
\`\`\`

Finally, every dynamically allocated node must be freed.

---

# Module 11 Progress

✓ Lesson 1 — Introduction to Data Structures

✓ Lesson 2 — Types of Data Structures

✓ Lesson 3 — Structures as Data Structures

✓ Lesson 4 — Self-Referential Structures

✓ Lesson 5 — Introduction to Linked Lists

✓ Lesson 6 — Creating a Singly Linked List

→ Lesson 7 — Traversing a Linked List

  Lesson 8 — Insertion in a Linked List

  Lesson 9 — Deletion in a Linked List

  Lesson 10 — Searching and Updating Linked Lists

  Lesson 11 — Introduction to Stacks

  Lesson 12 — Stack Implementation Using Arrays

  Lesson 13 — Stack Implementation Using Linked Lists

  Lesson 14 — Introduction to Queues

  Lesson 15 — Mini Project — Linked List Based Student Records

**Lesson 6 Complete**

`,
};

export default lesson6;
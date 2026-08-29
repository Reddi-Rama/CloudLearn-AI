const lesson8 = {
  id: "lesson8",
  title: "Insertion in a Linked List",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 8: Insertion in a Linked List

---

# Introduction

**Insertion** means adding a new node to a linked list.

In a singly linked list, a node can be inserted:

- At the beginning
- At the end
- At a specific position

Consider:

    10 → 20 → 30 → NULL

If we insert 15 between 10 and 20:

    10 → 15 → 20 → 30 → NULL

The links must be changed correctly so that no node is lost.

---

# 1. Insertion at the Beginning

Suppose:

    head
      ↓
    20 → 30 → NULL

We want to insert 10.

First create a new node:

    newNode
       ↓
      10

The new node should point to the current head:

    newNode->next = head;

Then make the new node the head:

    head = newNode;

Result:

    head
      ↓
    10 → 20 → 30 → NULL

---

# 2. Function for Insertion at Beginning

    void insertAtBeginning(Node **head, int data)
    {
        Node *newNode;

        newNode = createNode(data);

        if (newNode == NULL)
        {
            return;
        }

        newNode->next = *head;
        *head = newNode;
    }

We use:

    Node **head

because the function needs to modify the actual head pointer.

---

# 3. Why Node ** Is Used

Suppose:

    head
      ↓
    20 → 30 → NULL

After inserting a node at the beginning:

    head
      ↓
    10 → 20 → 30 → NULL

The value stored in \`head\` has changed.

Therefore, the function needs access to the original head pointer.

That is why we pass:

    &head

and receive:

    Node **head

---

# 4. Insertion at the End

Suppose:

    head
      ↓
    10 → 20 → 30 → NULL

We want to insert 40.

Create:

    40 → NULL

Find the last node:

    10 → 20 → 30 → NULL
                  ↑
                last

Then:

    last->next = newNode;

Result:

    head
      ↓
    10 → 20 → 30 → 40 → NULL

---

# 5. Function for Insertion at End

    void insertAtEnd(Node **head, int data)
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

---

# 6. Insertion at a Specific Position

Suppose:

    10 → 20 → 30 → NULL

We want to insert 15 after 10.

Before insertion:

    10 → 20 → 30

Create:

    15

We need to connect:

    10 → 15 → 20 → 30

The important operations are:

    newNode->next = current->next;

    current->next = newNode;

---

# 7. Why the Order Matters

Suppose:

    current = node containing 10

and:

    current->next = node containing 20

Create node 15.

First:

    newNode->next = current->next;

Now:

    15 → 20

Then:

    current->next = newNode;

Now:

    10 → 15 → 20

If we change \`current->next\` first without saving the original link, we can lose access to the remaining list.

---

# 8. Function to Insert After a Given Position

For a zero-based position where position 0 means the first node:

    int insertAtPosition(Node **head,
                         int data,
                         int position)
    {
        Node *newNode;
        Node *current;
        int i;

        if (position < 0)
        {
            return 0;
        }

        if (position == 0)
        {
            insertAtBeginning(head, data);
            return 1;
        }

        if (*head == NULL)
        {
            return 0;
        }

        current = *head;

        for (i = 0; i < position - 1; i++)
        {
            if (current->next == NULL)
            {
                return 0;
            }

            current = current->next;
        }

        newNode = createNode(data);

        if (newNode == NULL)
        {
            return 0;
        }

        newNode->next = current->next;
        current->next = newNode;

        return 1;
    }

---

# 9. Example

Initial list:

    10 → 20 → 30 → NULL

Insert 15 at position 1.

The resulting list:

    10 → 15 → 20 → 30 → NULL

Another example:

Insert 5 at position 0:

    5 → 10 → 15 → 20 → 30 → NULL

---

# 10. Complete Program

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

    void insertAtBeginning(Node **head, int data)
    {
        Node *newNode;

        newNode = createNode(data);

        if (newNode == NULL)
        {
            return;
        }

        newNode->next = *head;
        *head = newNode;
    }

    void insertAtEnd(Node **head, int data)
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

    void display(Node *head)
    {
        Node *current = head;

        while (current != NULL)
        {
            printf("%d ", current->data);
            current = current->next;
        }

        printf("\\n");
    }

    void freeList(Node *head)
    {
        Node *current = head;
        Node *nextNode;

        while (current != NULL)
        {
            nextNode = current->next;
            free(current);
            current = nextNode;
        }
    }

    int main(void)
    {
        Node *head = NULL;

        insertAtEnd(&head, 10);
        insertAtEnd(&head, 20);
        insertAtEnd(&head, 30);

        printf("Original list: ");
        display(head);

        insertAtBeginning(&head, 5);

        printf("After beginning insertion: ");
        display(head);

        insertAtEnd(&head, 40);

        printf("After end insertion: ");
        display(head);

        freeList(head);

        return 0;
    }

Output:

    Original list: 10 20 30
    After beginning insertion: 5 10 20 30
    After end insertion: 5 10 20 30 40

---

# 11. Complexity of Insertion

## Beginning

Insertion at the beginning only requires changing a few pointers.

    Time Complexity = O(1)

## End

Without a tail pointer, we normally traverse the list to find the last node.

    Time Complexity = O(n)

## Specific Position

We may need to traverse the list to reach the required position.

    Time Complexity = O(n)

If the required node is already known, changing the links themselves takes constant time.

---

# 12. Important Pointer Changes

## Beginning

    newNode->next = *head;
    *head = newNode;

## End

    last->next = newNode;

## Middle

    newNode->next = current->next;
    current->next = newNode;

These pointer operations are the most important part of linked-list insertion.

---

# Lesson Summary

Insertion means adding a new node to a linked list.

Three common forms are:

    Beginning
    End
    Specific position

Beginning:

    newNode->next = *head;
    *head = newNode;

Middle:

    newNode->next = current->next;
    current->next = newNode;

The links must be updated carefully to prevent losing the remaining nodes.

---

# Module 11 Progress

✓ Lesson 1 — Introduction to Data Structures

✓ Lesson 2 — Types of Data Structures

✓ Lesson 3 — Structures as Data Structures

✓ Lesson 4 — Self-Referential Structures

✓ Lesson 5 — Introduction to Linked Lists

✓ Lesson 6 — Creating a Singly Linked List

✓ Lesson 7 — Traversing a Linked List

✓ Lesson 8 — Insertion in a Linked List

→ Lesson 9 — Deletion in a Linked List

  Lesson 10 — Searching and Updating Linked Lists

  Lesson 11 — Introduction to Stacks

  Lesson 12 — Stack Implementation Using Arrays

  Lesson 13 — Stack Implementation Using Linked Lists

  Lesson 14 — Introduction to Queues

  Lesson 15 — Mini Project — Linked List Based Student Records

**Lesson 8 Complete**

`,
};

export default lesson8;
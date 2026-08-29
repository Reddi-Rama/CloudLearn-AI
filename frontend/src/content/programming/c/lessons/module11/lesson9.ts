const lesson9 = {
  id: "lesson9",
  title: "Deletion in a Linked List",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 9: Deletion in a Linked List

---

# Introduction

**Deletion** means removing a node from a linked list.

Suppose the list is:

    10 → 20 → 30 → 40 → NULL

If we delete 20:

    10 → 30 → 40 → NULL

The node is removed and the links must be updated correctly.

Since nodes are dynamically allocated, the removed node should also be released using:

    free()

---

# 1. Deletion at the Beginning

Consider:

    head
      ↓
    10 → 20 → 30 → NULL

We want to delete 10.

First move head to the second node:

    head = head->next;

Now:

    head
      ↓
    20 → 30 → NULL

But the original first node was dynamically allocated, so it must be freed.

A safe sequence is:

    Node *temp = *head;

    *head = (*head)->next;

    free(temp);

---

# 2. Function for Beginning Deletion

    void deleteAtBeginning(Node **head)
    {
        Node *temp;

        if (*head == NULL)
        {
            return;
        }

        temp = *head;
        *head = (*head)->next;

        free(temp);
    }

If the list is empty, there is nothing to delete.

---

# 3. Why Node ** Is Used

Deleting the first node changes the head pointer.

Before:

    head
      ↓
    10 → 20 → 30 → NULL

After:

    head
      ↓
    20 → 30 → NULL

Therefore, the function must be able to modify the caller's head pointer.

So we use:

    Node **head

and call:

    deleteAtBeginning(&head);

---

# 4. Deletion at the End

Suppose:

    10 → 20 → 30 → NULL

We want to delete 30.

We must find the node before the last node.

    10 → 20 → 30 → NULL
          ↑      ↑
       previous last

Set:

    previous->next = NULL;

Then free the last node.

Result:

    10 → 20 → NULL

---

# 5. Function for End Deletion

    void deleteAtEnd(Node **head)
    {
        Node *current;
        Node *previous;

        if (*head == NULL)
        {
            return;
        }

        if ((*head)->next == NULL)
        {
            free(*head);
            *head = NULL;
            return;
        }

        current = *head;
        previous = NULL;

        while (current->next != NULL)
        {
            previous = current;
            current = current->next;
        }

        previous->next = NULL;

        free(current);
    }

---

# 6. Deleting a Node at a Specific Position

Suppose:

    10 → 20 → 30 → 40 → NULL

Delete the node containing 20.

We need to connect:

    10 → 30

The pointer of the previous node must skip the deleted node.

Before:

    10 → 20 → 30 → 40

After:

    10 ─────────► 30 → 40

Then the deleted node can be freed.

---

# 7. Pointer Operation

Suppose:

    previous
       ↓
      10 → 20 → 30
            ↑
           temp

To remove 20:

    previous->next = temp->next;

Now:

    10 → 30

Then:

    free(temp);

---

# 8. Function for Position Deletion

Using a zero-based position:

    int deleteAtPosition(Node **head, int position)
    {
        Node *current;
        Node *previous;
        int i;

        if (*head == NULL || position < 0)
        {
            return 0;
        }

        if (position == 0)
        {
            deleteAtBeginning(head);
            return 1;
        }

        current = *head;

        for (i = 0; i < position; i++)
        {
            if (current == NULL)
            {
                return 0;
            }

            if (i == position - 1)
            {
                break;
            }

            current = current->next;
        }

        if (current == NULL ||
            current->next == NULL)
        {
            return 0;
        }

        previous = current;
        current = current->next;

        previous->next = current->next;

        free(current);

        return 1;
    }

---

# 9. Simpler Position Deletion

A clearer implementation is:

    int deleteAtPosition(Node **head, int position)
    {
        Node *current;
        Node *temp;
        int i;

        if (*head == NULL || position < 0)
        {
            return 0;
        }

        if (position == 0)
        {
            deleteAtBeginning(head);
            return 1;
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

        if (current->next == NULL)
        {
            return 0;
        }

        temp = current->next;
        current->next = temp->next;

        free(temp);

        return 1;
    }

This version directly finds the node before the node that should be deleted.

---

# 10. Example

Initial list:

    10 → 20 → 30 → 40 → NULL

Delete position 2.

Position numbering:

    Position:  0    1    2    3
               ↓    ↓    ↓    ↓
    Data:     10 → 20 → 30 → 40

Node 30 is removed.

Result:

    10 → 20 → 40 → NULL

---

# 11. Complete Program

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

    void deleteAtBeginning(Node **head)
    {
        Node *temp;

        if (*head == NULL)
        {
            return;
        }

        temp = *head;
        *head = (*head)->next;

        free(temp);
    }

    void deleteAtEnd(Node **head)
    {
        Node *current;
        Node *previous;

        if (*head == NULL)
        {
            return;
        }

        if ((*head)->next == NULL)
        {
            free(*head);
            *head = NULL;
            return;
        }

        current = *head;
        previous = NULL;

        while (current->next != NULL)
        {
            previous = current;
            current = current->next;
        }

        previous->next = NULL;
        free(current);
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
        insertAtEnd(&head, 40);

        printf("Original list: ");
        display(head);

        deleteAtBeginning(&head);

        printf("After deleting first node: ");
        display(head);

        deleteAtEnd(&head);

        printf("After deleting last node: ");
        display(head);

        freeList(head);

        return 0;
    }

Output:

    Original list: 10 20 30 40
    After deleting first node: 20 30 40
    After deleting last node: 20 30

---

# 12. Memory Management

Deletion in a dynamically allocated linked list has two important steps:

    1. Update the links.
    2. Free the removed node.

For example:

    temp = current->next;
    current->next = temp->next;
    free(temp);

If we update the links but do not call \`free()\`, the allocated memory is not released.

---

# 13. Deleting the Only Node

Consider:

    head
      ↓
    10 → NULL

Delete the only node.

After:

    head
      ↓
    NULL

The correct operation is:

    free(*head);
    *head = NULL;

The list becomes empty.

---

# 14. Deleting From an Empty List

If:

    head == NULL

there is no node to delete.

Therefore, deletion functions should check:

    if (*head == NULL)
    {
        return;
    }

This prevents dereferencing a NULL pointer.

---

# 15. Complexity

## Beginning

Only the head needs to be changed.

    Time Complexity = O(1)

## End

Without a tail pointer, traversal is needed to find the last node.

    Time Complexity = O(n)

## Specific Position

We may need to traverse to the required position.

    Time Complexity = O(n)

---

# 16. Important Pointer Operations

## Beginning

    temp = *head;
    *head = (*head)->next;
    free(temp);

## End

    previous->next = NULL;
    free(current);

## Middle

    temp = current->next;
    current->next = temp->next;
    free(temp);

These operations form the foundation of linked-list deletion.

---

# Lesson Summary

Deletion removes a node from a linked list.

Common forms:

    Delete from beginning
    Delete from end
    Delete from a specific position

After removing a dynamically allocated node, use:

    free()

The most important rule is:

    Update links
        ↓
    Save the removed node
        ↓
    free() the removed node

For a singly linked list without a tail pointer, deletion at the end or at an arbitrary position generally requires traversal.

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

✓ Lesson 9 — Deletion in a Linked List

→ Lesson 10 — Searching and Updating Linked Lists

  Lesson 11 — Introduction to Stacks

  Lesson 12 — Stack Implementation Using Arrays

  Lesson 13 — Stack Implementation Using Linked Lists

  Lesson 14 — Introduction to Queues

  Lesson 15 — Mini Project — Linked List Based Student Records

**Lesson 9 Complete**

`,
};

export default lesson9;
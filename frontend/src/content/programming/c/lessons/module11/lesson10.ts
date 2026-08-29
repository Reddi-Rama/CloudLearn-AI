const lesson10 = {
  id: "lesson10",
  title: "Searching and Updating Linked Lists",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 10: Searching and Updating Linked Lists

---

# Introduction

After learning how to create, traverse, insert, and delete nodes, two important operations are **searching** and **updating**.

For example:

    head
      ↓
    10 → 20 → 30 → 40 → NULL

We may want to:

- Find a particular value.
- Check whether a value exists.
- Update the value stored in a node.

---

# 1. Searching a Linked List

Searching means checking nodes one by one until the required value is found.

For:

    10 → 20 → 30 → 40 → NULL

To search for 30:

    10 → 20 → 30
              ↑
            Found

---

# 2. Search Function

    int search(Node *head, int value)
    {
        Node *current = head;

        while (current != NULL)
        {
            if (current->data == value)
            {
                return 1;
            }

            current = current->next;
        }

        return 0;
    }

Usage:

    if (search(head, 30))
    {
        printf("Value found\\n");
    }
    else
    {
        printf("Value not found\\n");
    }

The function returns:

    1 → Value found
    0 → Value not found

---

# 3. Returning the Node

Instead of returning only 1 or 0, we can return the address of the matching node.

    Node *findNode(Node *head, int value)
    {
        Node *current = head;

        while (current != NULL)
        {
            if (current->data == value)
            {
                return current;
            }

            current = current->next;
        }

        return NULL;
    }

Then:

    Node *result = findNode(head, 30);

    if (result != NULL)
    {
        printf("Found: %d\\n", result->data);
    }

Returning the node pointer is useful when we want to perform another operation on the found node.

---

# 4. Updating a Node

Suppose:

    10 → 20 → 30 → 40 → NULL

We want to change 30 to 35.

After updating:

    10 → 20 → 35 → 40 → NULL

The node itself does not need to be recreated.

We simply change:

    current->data = 35;

---

# 5. Update Function

    int updateValue(Node *head,
                    int oldValue,
                    int newValue)
    {
        Node *current = head;

        while (current != NULL)
        {
            if (current->data == oldValue)
            {
                current->data = newValue;
                return 1;
            }

            current = current->next;
        }

        return 0;
    }

Usage:

    updateValue(head, 30, 35);

The list changes from:

    10 → 20 → 30 → 40

to:

    10 → 20 → 35 → 40

---

# 6. Searching and Updating Together

Searching and updating can also be performed in the same traversal.

    Node *current = head;

    while (current != NULL)
    {
        if (current->data == 30)
        {
            current->data = 35;
            break;
        }

        current = current->next;
    }

Result:

Before:

    10 → 20 → 30 → 40 → NULL

After:

    10 → 20 → 35 → 40 → NULL

---

# 7. Searching by Position

Sometimes we want to find the node at a particular position.

    Node *getNode(Node *head, int position)
    {
        Node *current = head;
        int index = 0;

        while (current != NULL)
        {
            if (index == position)
            {
                return current;
            }

            index++;
            current = current->next;
        }

        return NULL;
    }

For:

    10 → 20 → 30 → 40

position 2 gives:

    30

Here positions are zero-based:

    Position:  0    1    2    3
               ↓    ↓    ↓    ↓
    Data:     10 → 20 → 30 → 40

---

# 8. Finding the Maximum Value

Traversal can also be used to find the largest value.

    int findMaximum(Node *head)
    {
        int maximum;
        Node *current;

        if (head == NULL)
        {
            return 0;
        }

        maximum = head->data;
        current = head->next;

        while (current != NULL)
        {
            if (current->data > maximum)
            {
                maximum = current->data;
            }

            current = current->next;
        }

        return maximum;
    }

For:

    10 → 45 → 20 → 30

the maximum is:

    45

---

# 9. Finding the Minimum Value

Similarly, we can find the smallest value.

    int findMinimum(Node *head)
    {
        int minimum;
        Node *current;

        if (head == NULL)
        {
            return 0;
        }

        minimum = head->data;
        current = head->next;

        while (current != NULL)
        {
            if (current->data < minimum)
            {
                minimum = current->data;
            }

            current = current->next;
        }

        return minimum;
    }

For:

    10 → 45 → 20 → 30

the minimum is:

    10

---

# 10. Complete Example

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

    int search(Node *head, int value)
    {
        Node *current = head;

        while (current != NULL)
        {
            if (current->data == value)
            {
                return 1;
            }

            current = current->next;
        }

        return 0;
    }

    int updateValue(Node *head,
                    int oldValue,
                    int newValue)
    {
        Node *current = head;

        while (current != NULL)
        {
            if (current->data == oldValue)
            {
                current->data = newValue;
                return 1;
            }

            current = current->next;
        }

        return 0;
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
        Node *head = createNode(10);

        if (head == NULL)
        {
            return 1;
        }

        head->next = createNode(20);
        head->next->next = createNode(30);

        printf("Original list: ");
        display(head);

        if (search(head, 20))
        {
            printf("20 found\\n");
        }

        updateValue(head, 30, 35);

        printf("Updated list: ");
        display(head);

        freeList(head);

        return 0;
    }

Output:

    Original list: 10 20 30
    20 found
    Updated list: 10 20 35

---

# 11. Searching and Updating Complexity

For a singly linked list:

    Search              → O(n)
    Update by value     → O(n)
    Find minimum        → O(n)
    Find maximum        → O(n)
    Traversal           → O(n)

The reason is that we may need to visit every node.

---

# 12. Searching Process

The search process is:

    Start at head
          ↓
    Compare data
          ↓
    Is it the required value?
       ↙          ↘
     Yes           No
      ↓             ↓
    Found      Move to next
                    ↓
                  Repeat
                    ↓
                   NULL

---

# 13. Updating Process

The updating process is:

    Start at head
          ↓
    Compare data
          ↓
    Value found?
       ↙       ↘
     Yes        No
      ↓          ↓
    Change    Move next
     data
      ↓
    Complete

---

# 14. Important Points

When searching:

- Start from \`head\`.
- Compare the current node's data.
- Move using \`current->next\`.
- Stop when the value is found or \`current == NULL\`.

When updating:

- Find the required node.
- Change its data.
- The node itself does not need to be recreated.

---

# Lesson Summary

Searching allows us to find a particular node or value.

Basic search:

    while (current != NULL)
    {
        if (current->data == value)
        {
            return 1;
        }

        current = current->next;
    }

Updating changes the data stored in an existing node.

    current->data = newValue;

Linked-list searching and updating generally require:

    O(n)

time because the required node may be anywhere in the list.

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

✓ Lesson 10 — Searching and Updating Linked Lists

→ Lesson 11 — Introduction to Stacks

  Lesson 12 — Stack Implementation Using Arrays

  Lesson 13 — Stack Implementation Using Linked Lists

  Lesson 14 — Introduction to Queues

  Lesson 15 — Mini Project — Linked List Based Student Records

**Lesson 10 Complete**

`,
};

export default lesson10;
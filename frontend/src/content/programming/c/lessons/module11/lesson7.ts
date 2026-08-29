const lesson7 = {
  id: "lesson7",
  title: "Traversing a Linked List",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 7: Traversing a Linked List

---

# Introduction

**Traversal** means visiting each node of a linked list one by one.

Consider:

    head
      ↓
    10 → 20 → 30 → 40 → NULL

During traversal, we start from the **head** and follow the \`next\` pointer until we reach \`NULL\`.

---

# 1. Basic Traversal

The basic logic is:

    Node *current = head;

    while (current != NULL)
    {
        printf("%d ", current->data);
        current = current->next;
    }

The pointer \`current\` moves from one node to the next.

---

# 2. How Traversal Works

Suppose the list is:

    head
      ↓
    10 → 20 → 30 → NULL

Initially:

    current = head

So:

    current
       ↓
      10 → 20 → 30 → NULL

After:

    current = current->next;

we get:

    10 → current
             ↓
             20 → 30 → NULL

Again:

    current = current->next;

Now:

    10 → 20 → current
                    ↓
                    30 → NULL

Finally:

    current = current->next;

Now:

    current = NULL

The loop stops.

---

# 3. Complete Traversal Program

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
        Node *current;

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

        current = head;

        while (current != NULL)
        {
            printf("%d ", current->data);
            current = current->next;
        }

        printf("\\n");

        free(third);
        free(second);
        free(head);

        return 0;
    }

Output:

    10 20 30

---

# 4. Traversal Using a Function

Traversal can be placed inside a separate function.

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

Call it using:

    display(head);

---

# 5. Why Use a Temporary Pointer?

We should normally not move the \`head\` pointer while traversing.

For example, avoid:

    while (head != NULL)
    {
        printf("%d ", head->data);
        head = head->next;
    }

After this operation:

    head == NULL

The original reference to the list is lost.

Instead use:

    Node *current = head;

Then move:

    current = current->next;

The head remains unchanged.

---

# 6. Traversing an Empty List

Suppose:

    Node *head = NULL;

Then:

    Node *current = head;

means:

    current = NULL

Therefore:

    while (current != NULL)

does not execute.

An empty list produces no node output.

---

# 7. Counting Nodes During Traversal

Traversal can also be used to count nodes.

    int count = 0;
    Node *current = head;

    while (current != NULL)
    {
        count++;
        current = current->next;
    }

After traversal, \`count\` contains the number of nodes.

For:

    10 → 20 → 30 → NULL

the result is:

    count = 3

---

# 8. Finding the Sum of Nodes

We can calculate the sum while traversing.

    int sum = 0;
    Node *current = head;

    while (current != NULL)
    {
        sum += current->data;
        current = current->next;
    }

For:

    10 → 20 → 30 → NULL

the sum is:

    10 + 20 + 30 = 60

---

# 9. Finding a Particular Value

Traversal can also be used to search for a value.

    int key = 20;
    Node *current = head;

    while (current != NULL)
    {
        if (current->data == key)
        {
            printf("Found");
            break;
        }

        current = current->next;
    }

The search stops when the value is found or when \`current\` becomes \`NULL\`.

Searching will be covered in more detail in Lesson 10.

---

# 10. Traversal Algorithm

The general algorithm is:

    Step 1: Start from head.

    Step 2: Check whether current is NULL.

    Step 3: If it is not NULL, process the node.

    Step 4: Move current to current->next.

    Step 5: Repeat until current becomes NULL.

In simple form:

    current = head

    while current != NULL
        process current
        current = current->next

---

# 11. Time Complexity

If a linked list contains \`n\` nodes, traversal visits every node.

Therefore:

    Time Complexity = O(n)

The amount of extra space used by the traversal pointer is:

    Space Complexity = O(1)

---

# 12. Important Points

Remember:

- Traversal starts from \`head\`.
- Use a temporary pointer such as \`current\`.
- Process the current node.
- Move using \`current = current->next\`.
- Stop when \`current == NULL\`.
- Do not lose the original \`head\` pointer.

Basic pattern:

    Node *current = head;

    while (current != NULL)
    {
        /* Process current node */

        current = current->next;
    }

---

# Lesson Summary

Traversal means visiting all nodes in a linked list.

For example:

    head
      ↓
    10 → 20 → 30 → NULL

The standard traversal is:

    Node *current = head;

    while (current != NULL)
    {
        printf("%d ", current->data);
        current = current->next;
    }

Traversal is used for displaying, counting, searching, calculating sums, and performing other operations on linked lists.

For \`n\` nodes:

    Time Complexity = O(n)
    Extra Space = O(1)

---

# Module 11 Progress

✓ Lesson 1 — Introduction to Data Structures

✓ Lesson 2 — Types of Data Structures

✓ Lesson 3 — Structures as Data Structures

✓ Lesson 4 — Self-Referential Structures

✓ Lesson 5 — Introduction to Linked Lists

✓ Lesson 6 — Creating a Singly Linked List

✓ Lesson 7 — Traversing a Linked List

→ Lesson 8 — Insertion in a Linked List

  Lesson 9 — Deletion in a Linked List

  Lesson 10 — Searching and Updating Linked Lists

  Lesson 11 — Introduction to Stacks

  Lesson 12 — Stack Implementation Using Arrays

  Lesson 13 — Stack Implementation Using Linked Lists

  Lesson 14 — Introduction to Queues

  Lesson 15 — Mini Project — Linked List Based Student Records

**Lesson 7 Complete**

`,
};

export default lesson7;
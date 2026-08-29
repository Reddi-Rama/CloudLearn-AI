const lesson13 = {
  id: "lesson13",
  title: "Stack Implementation Using Linked Lists",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 13: Stack Implementation Using Linked Lists

---

# Introduction

A stack can be implemented not only using an array but also using a **linked list**.

The linked-list implementation is useful when we do not want to keep a fixed maximum size.

The stack still follows the same principle:

    LIFO
    Last In, First Out

The main difference is how memory is managed.

An array stack uses:

    int stack[MAX];

A linked-list stack uses dynamically created nodes.

---

# 1. Stack Node

A node can be defined as:

    typedef struct Node
    {
        int data;
        struct Node *next;
    } Node;

Each node contains:

- Data
- Pointer to the next node

Example:

    ┌──────┬──────┐
    │ data │ next │
    └──────┴──────┘

---

# 2. Top Pointer

Instead of using an integer index like an array stack, a linked-list stack uses a pointer:

    Node *top = NULL;

Initially:

    top = NULL

This means the stack is empty.

---

# 3. Push Operation

In a linked-list stack, a new node is inserted at the beginning of the linked list.

Suppose the stack is:

    top
     ↓
    20 → 10 → NULL

Now perform:

    push(30)

A new node containing 30 is created.

    30 → 20 → 10 → NULL
    ↑
   top

The new node becomes the top.

---

# 4. Steps of Push

The push operation performs these steps:

1. Allocate memory for a new node.
2. Store the value in the node.
3. Make the new node point to the current top.
4. Move top to the new node.

The important statements are:

    newNode->data = value;

    newNode->next = top;

    top = newNode;

---

# 5. Push Function

    void push(int value)
    {
        Node *newNode;

        newNode = malloc(sizeof(*newNode));

        if (newNode == NULL)
        {
            printf("Memory allocation failed\\n");
            return;
        }

        newNode->data = value;
        newNode->next = top;
        top = newNode;
    }

The new node is always inserted at the top.

---

# 6. Pop Operation

Pop removes the node at the top.

Suppose:

    top
     ↓
    30 → 20 → 10 → NULL

After:

    pop()

30 is removed.

The new stack becomes:

    top
     ↓
    20 → 10 → NULL

---

# 7. Steps of Pop

The pop operation performs these steps:

1. Check whether the stack is empty.
2. Store the current top node.
3. Move top to the next node.
4. Free the old top node.

Example:

    Node *temp = top;

    top = top->next;

    free(temp);

---

# 8. Pop Function

    int pop(void)
    {
        Node *temp;
        int value;

        if (top == NULL)
        {
            printf("Stack underflow\\n");
            return -1;
        }

        temp = top;
        value = temp->data;
        top = top->next;

        free(temp);

        return value;
    }

---

# 9. Peek Operation

Peek returns the value at the top without removing the node.

    int peek(void)
    {
        if (top == NULL)
        {
            printf("Stack is empty\\n");
            return -1;
        }

        return top->data;
    }

If:

    top
     ↓
    40 → 30 → 20 → 10 → NULL

then:

    peek()

returns:

    40

The stack remains unchanged.

---

# 10. Displaying the Stack

To display the stack, start at top and move through the linked list.

    void display(void)
    {
        Node *current = top;

        if (current == NULL)
        {
            printf("Stack is empty\\n");
            return;
        }

        while (current != NULL)
        {
            printf("%d ", current->data);
            current = current->next;
        }

        printf("\\n");
    }

---

# 11. Complete Program

    #include <stdio.h>
    #include <stdlib.h>

    typedef struct Node
    {
        int data;
        struct Node *next;
    } Node;

    Node *top = NULL;

    void push(int value)
    {
        Node *newNode;

        newNode = malloc(sizeof(*newNode));

        if (newNode == NULL)
        {
            printf("Memory allocation failed\\n");
            return;
        }

        newNode->data = value;
        newNode->next = top;
        top = newNode;
    }

    int pop(void)
    {
        Node *temp;
        int value;

        if (top == NULL)
        {
            printf("Stack underflow\\n");
            return -1;
        }

        temp = top;
        value = temp->data;

        top = top->next;

        free(temp);

        return value;
    }

    int peek(void)
    {
        if (top == NULL)
        {
            printf("Stack is empty\\n");
            return -1;
        }

        return top->data;
    }

    void display(void)
    {
        Node *current = top;

        if (current == NULL)
        {
            printf("Stack is empty\\n");
            return;
        }

        while (current != NULL)
        {
            printf("%d ", current->data);
            current = current->next;
        }

        printf("\\n");
    }

    void freeStack(void)
    {
        while (top != NULL)
        {
            pop();
        }
    }

    int main(void)
    {
        push(10);
        push(20);
        push(30);

        printf("Stack: ");
        display();

        printf("Top: %d\\n", peek());

        printf("Popped: %d\\n", pop());

        printf("Stack after pop: ");
        display();

        freeStack();

        return 0;
    }

Output:

    Stack: 30 20 10
    Top: 30
    Popped: 30
    Stack after pop: 20 10

---

# 12. Stack Using Array vs Linked List

Array implementation:

    int stack[MAX];
    int top = -1;

Linked-list implementation:

    Node *top = NULL;

Array stack has a fixed capacity.

Linked-list stack grows dynamically as nodes are allocated.

---

# 13. Advantages

A linked-list stack provides:

- Dynamic memory allocation
- No fixed array capacity
- Push operation at the beginning
- Pop operation at the beginning
- Efficient memory usage based on the number of elements

---

# 14. Important Point

Although the implementation changes, the stack principle does not change.

Both implementations follow:

    LIFO

For example:

    Push 10
    Push 20
    Push 30

The stack becomes:

    30
    20
    10

Pop removes:

    30

Then:

    20
    10

---

# 15. Time Complexity

For a linked-list stack:

    Push → O(1)

    Pop → O(1)

    Peek → O(1)

    Display → O(n)

Push and pop are efficient because insertion and deletion occur directly at the top.

---

# Lesson Summary

A stack can be implemented using a linked list.

The main pointer is:

    Node *top = NULL;

Push creates a new node and places it at the top.

Pop removes the top node.

Peek returns the top value without removing it.

A linked-list stack does not require a fixed array size.

The main operations push, pop, and peek take:

    O(1)

time.

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

✓ Lesson 11 — Introduction to Stacks

✓ Lesson 12 — Stack Implementation Using Arrays

✓ Lesson 13 — Stack Implementation Using Linked Lists

→ Lesson 14 — Introduction to Queues

  Lesson 15 — Mini Project — Linked List Based Student Records

**Lesson 13 Complete**

`,
};

export default lesson13;
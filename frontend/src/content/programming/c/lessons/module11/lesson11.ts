const lesson11 = {
  id: "lesson11",
  title: "Introduction to Stacks",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 11: Introduction to Stacks

---

# Introduction

A **stack** is a linear data structure that follows the **LIFO** principle.

**LIFO = Last In, First Out**

The element inserted last is the first element removed.

A simple real-world example is a stack of books.

    ┌────────┐
    │ Book 3 │ ← Top
    ├────────┤
    │ Book 2 │
    ├────────┤
    │ Book 1 │
    └────────┘

Book 3 was added last, so it is removed first.

---

# 1. Basic Stack

Consider:

    ┌────┐
    │ 30 │ ← Top
    ├────┤
    │ 20 │
    ├────┤
    │ 10 │
    └────┘

The top element is 30.

If we remove one element, 30 is removed first.

---

# 2. LIFO Principle

LIFO means:

    Last In
       ↓
    First Out

Suppose we perform:

    Push 10
    Push 20
    Push 30

The stack becomes:

    30 ← Top
    20
    10

Now:

    Pop

removes:

    30

The remaining stack is:

    20 ← Top
    10

---

# 3. Main Stack Operations

The main operations are:

- \`push()\`
- \`pop()\`
- \`peek()\`

## Push

Adds an element to the top of the stack.

## Pop

Removes the top element from the stack.

## Peek

Returns the top element without removing it.

---

# 4. Push Operation

Start with an empty stack:

    ┌────┐
    │    │
    └────┘

Push 10:

    ┌────┐
    │ 10 │ ← Top
    └────┘

Push 20:

    ┌────┐
    │ 20 │ ← Top
    ├────┤
    │ 10 │
    └────┘

Push 30:

    ┌────┐
    │ 30 │ ← Top
    ├────┤
    │ 20 │
    ├────┤
    │ 10 │
    └────┘

Every new element is added at the top.

---

# 5. Pop Operation

Starting with:

    ┌────┐
    │ 30 │ ← Top
    ├────┤
    │ 20 │
    ├────┤
    │ 10 │
    └────┘

After:

    pop()

30 is removed.

Result:

    ┌────┐
    │ 20 │ ← Top
    ├────┤
    │ 10 │
    └────┘

---

# 6. Peek Operation

Starting with:

    ┌────┐
    │ 20 │ ← Top
    ├────┤
    │ 10 │
    └────┘

Calling:

    peek()

returns:

    20

but does not remove it.

The stack remains:

    ┌────┐
    │ 20 │ ← Top
    ├────┤
    │ 10 │
    └────┘

---

# 7. Stack Terminology

Important terms include:

**Top**

The current top element of the stack.

**Push**

Adds an element.

**Pop**

Removes the top element.

**Peek**

Views the top element without removing it.

**Overflow**

Occurs when an element is pushed into a full fixed-size stack.

**Underflow**

Occurs when an element is removed from an empty stack.

---

# 8. Example of Stack Operations

Perform:

    Push 10
    Push 20
    Push 30

Stack:

    30 ← Top
    20
    10

Perform:

    Pop

Stack:

    20 ← Top
    10

Perform:

    Pop

Stack:

    10 ← Top

The last inserted elements are removed first.

---

# 9. Applications of Stacks

Stacks are used in many areas of computer programming.

Examples include:

- Function calls
- Recursion
- Expression evaluation
- Undo operations
- Parentheses matching
- Backtracking
- Depth-first search

For example, function calls use a stack to keep track of active function execution.

---

# 10. Stack Using an Array

A stack can be implemented using an array.

For example:

    #define MAX 100

    int stack[MAX];
    int top = -1;

The array stores the stack elements.

The variable \`top\` identifies the current top position.

Initially:

    top = -1

This represents an empty stack.

---

# 11. Push Using an Array

A basic push operation is:

    void push(int value)
    {
        if (top == MAX - 1)
        {
            printf("Stack overflow\\n");
            return;
        }

        stack[++top] = value;
    }

The operation:

    ++top

moves the top position upward.

Then the value is stored at:

    stack[top]

---

# 12. Pop Using an Array

A basic pop operation is:

    int pop(void)
    {
        if (top == -1)
        {
            printf("Stack underflow\\n");
            return -1;
        }

        return stack[top--];
    }

The current top value is returned and then \`top\` is decreased.

---

# 13. Peek Using an Array

A basic peek operation is:

    int peek(void)
    {
        if (top == -1)
        {
            printf("Stack is empty\\n");
            return -1;
        }

        return stack[top];
    }

Unlike \`pop()\`, \`peek()\` does not modify \`top\`.

---

# 14. Stack Diagram

    STACK
      │
      ├───────────────┐
      ↓               ↓
    PUSH             POP
      │               │
      ↓               ↓
    Add at          Remove from
      TOP              TOP
      │
      ↓
    PEEK
      │
      ↓
    View TOP value

All three operations work with the top of the stack.

---

# 15. Complete Array Stack Example

    #include <stdio.h>

    #define MAX 5

    int stack[MAX];
    int top = -1;

    void push(int value)
    {
        if (top == MAX - 1)
        {
            printf("Stack overflow\\n");
            return;
        }

        stack[++top] = value;
    }

    int pop(void)
    {
        if (top == -1)
        {
            printf("Stack underflow\\n");
            return -1;
        }

        return stack[top--];
    }

    int peek(void)
    {
        if (top == -1)
        {
            printf("Stack is empty\\n");
            return -1;
        }

        return stack[top];
    }

    void display(void)
    {
        int i;

        if (top == -1)
        {
            printf("Stack is empty\\n");
            return;
        }

        for (i = top; i >= 0; i--)
        {
            printf("%d\\n", stack[i]);
        }
    }

    int main(void)
    {
        push(10);
        push(20);
        push(30);

        printf("Stack:\\n");
        display();

        printf("Top: %d\\n", peek());

        printf("Popped: %d\\n", pop());

        printf("Stack after pop:\\n");
        display();

        return 0;
    }

Output:

    Stack:
    30
    20
    10

    Top: 30

    Popped: 30

    Stack after pop:
    20
    10

---

# Lesson Summary

A stack is a linear data structure based on:

    LIFO
    Last In, First Out

Main operations:

    push  → Add to top
    pop   → Remove from top
    peek  → View top

A stack can be implemented using arrays or linked lists.

A fixed-size array implementation uses:

    int stack[MAX];
    int top = -1;

Important conditions:

    top == -1
        ↓
    Stack is empty

    top == MAX - 1
        ↓
    Stack is full

Push, pop, and peek operations can generally be performed in:

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

→ Lesson 12 — Stack Implementation Using Arrays

  Lesson 13 — Stack Implementation Using Linked Lists

  Lesson 14 — Introduction to Queues

  Lesson 15 — Mini Project — Linked List Based Student Records

**Lesson 11 Complete**

`,
};

export default lesson11;
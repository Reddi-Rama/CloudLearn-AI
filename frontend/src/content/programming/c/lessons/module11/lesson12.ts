const lesson12 = {
  id: "lesson12",
  title: "Stack Implementation Using Arrays",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 12: Stack Implementation Using Arrays

---

# Introduction

An array provides a simple way to implement a stack.

Suppose:

    #define MAX 5

    int stack[MAX];

The array contains five possible positions.

We use:

    int top = -1;

to keep track of the top element.

Initially, the stack is empty.

---

# 1. Initial State

Initially:

    top = -1

Stack:

    ┌────┐
    │    │
    ├────┤
    │    │
    ├────┤
    │    │
    ├────┤
    │    │
    ├────┤
    │    │
    └────┘

There are no elements in the stack.

---

# 2. Push 10

The operation is:

    stack[++top] = 10;

Before:

    top = -1

After increasing top:

    top = 0

The value is stored at:

    stack[0]

Stack:

    ┌────┐
    │ 10 │ ← Top
    ├────┤
    │    │
    ├────┤
    │    │
    ├────┤
    │    │
    ├────┤
    │    │
    └────┘

---

# 3. Push 20

Execute:

    stack[++top] = 20;

Now:

    top = 1

Stack:

    ┌────┐
    │ 20 │ ← Top
    ├────┤
    │ 10 │
    ├────┤
    │    │
    ├────┤
    │    │
    ├────┤
    │    │
    └────┘

---

# 4. Push 30

Execute:

    stack[++top] = 30;

Now:

    top = 2

Stack:

    ┌────┐
    │ 30 │ ← Top
    ├────┤
    │ 20 │
    ├────┤
    │ 10 │
    ├────┤
    │    │
    ├────┤
    │    │
    └────┘

The most recently inserted element is always at \`stack[top]\`.

---

# 5. Pop Operation

Suppose:

    top = 2

and:

    stack[2] = 30

The operation:

    stack[top--]

returns 30 and then decreases \`top\`.

Before:

    top = 2

    30 ← Top
    20
    10

After:

    top = 1

    20 ← Top
    10

The popped value is:

    30

---

# 6. Push Function

A complete push function is:

    void push(int value)
    {
        if (top >= MAX - 1)
        {
            printf("Stack overflow\\n");
            return;
        }

        top++;
        stack[top] = value;
    }

It can also be written as:

    stack[++top] = value;

after checking for overflow.

---

# 7. Pop Function

The pop function is:

    int pop(void)
    {
        if (top < 0)
        {
            printf("Stack underflow\\n");
            return -1;
        }

        return stack[top--];
    }

The function:

1. Checks whether the stack is empty.
2. Returns the top value.
3. Decreases \`top\`.

---

# 8. Peek Function

The peek function is:

    int peek(void)
    {
        if (top < 0)
        {
            printf("Stack is empty\\n");
            return -1;
        }

        return stack[top];
    }

Unlike pop, peek does not remove the element.

---

# 9. Display Function

To display the stack from top to bottom:

    void display(void)
    {
        int i;

        if (top < 0)
        {
            printf("Stack is empty\\n");
            return;
        }

        for (i = top; i >= 0; i--)
        {
            printf("%d ", stack[i]);
        }

        printf("\\n");
    }

The loop starts at \`top\` because the top element should be displayed first.

---

# 10. Complete Stack Program

    #include <stdio.h>

    #define MAX 5

    int stack[MAX];
    int top = -1;

    void push(int value)
    {
        if (top >= MAX - 1)
        {
            printf("Stack overflow\\n");
            return;
        }

        stack[++top] = value;
    }

    int pop(void)
    {
        if (top < 0)
        {
            printf("Stack underflow\\n");
            return -1;
        }

        return stack[top--];
    }

    int peek(void)
    {
        if (top < 0)
        {
            printf("Stack is empty\\n");
            return -1;
        }

        return stack[top];
    }

    void display(void)
    {
        int i;

        if (top < 0)
        {
            printf("Stack is empty\\n");
            return;
        }

        for (i = top; i >= 0; i--)
        {
            printf("%d ", stack[i]);
        }

        printf("\\n");
    }

    int main(void)
    {
        push(10);
        push(20);
        push(30);
        push(40);

        printf("Stack: ");
        display();

        printf("Peek: %d\\n", peek());

        printf("Popped: %d\\n", pop());

        printf("Stack after pop: ");
        display();

        return 0;
    }

Output:

    Stack: 40 30 20 10
    Peek: 40
    Popped: 40
    Stack after pop: 30 20 10

---

# 11. Stack Overflow

With:

    #define MAX 5

the stack can contain at most five elements.

Suppose the stack is full:

    40
    30
    20
    10
     5

Now:

    top = 4

If we execute:

    push(50);

there is no available array position.

The program should report:

    Stack overflow

The overflow check is:

    if (top >= MAX - 1)

---

# 12. Stack Underflow

If:

    top = -1

the stack is empty.

Calling:

    pop();

would attempt to remove an element that does not exist.

Therefore, we check:

    if (top < 0)

and report:

    Stack underflow

---

# 13. Advantages of an Array Stack

An array-based stack provides:

- Simple implementation
- Easy memory organization
- Fast push operation
- Fast pop operation
- Fast peek operation

The main operations generally take:

    O(1)

time.

---

# 14. Limitation of an Array Stack

A fixed-size array has a predetermined capacity.

For example:

    #define MAX 100

allows a maximum of 100 elements.

Even if additional memory is available, this particular fixed-size implementation cannot automatically grow beyond MAX.

A dynamically allocated or linked-list implementation can overcome this limitation.

---

# 15. Stack Operation Summary

    STACK
      │
      ├──────────────┬──────────────┐
      ↓              ↓              ↓
    PUSH            POP            PEEK
      │              │              │
      ↓              ↓              ↓
     Add           Remove          View
     at TOP        from TOP        TOP

Example:

    Push 10
    Push 20
    Push 30

Stack:

    30 ← Top
    20
    10

Pop:

    30

Remaining:

    20
    10

This demonstrates the LIFO principle.

---

# 16. Important Concepts

Remember:

    top = -1
        ↓
    Empty stack

    top = MAX - 1
        ↓
    Full stack

    stack[++top] = value
        ↓
    Push

    stack[top--]
        ↓
    Pop

    stack[top]
        ↓
    Peek

---

# Lesson Summary

An array can be used to implement a stack.

The important variables are:

    int stack[MAX];
    int top = -1;

The main operations are:

    push()
    pop()
    peek()
    display()

Push adds an element at the top.

Pop removes the top element.

Peek views the top element without removing it.

A fixed-size array stack must handle:

    Overflow
    Underflow

Push, pop, and peek generally have:

    Time Complexity = O(1)

The main limitation is the fixed capacity of the array.

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

→ Lesson 13 — Stack Implementation Using Linked Lists

  Lesson 14 — Introduction to Queues

  Lesson 15 — Mini Project — Linked List Based Student Records

**Lesson 12 Complete**

`,
};

export default lesson12;
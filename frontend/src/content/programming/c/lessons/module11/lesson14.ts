const lesson14 = {
  id: "lesson14",
  title: "Introduction to Queues",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 14: Introduction to Queues

---

# Introduction

A **queue** is a linear data structure that follows the **FIFO** principle.

**FIFO = First In, First Out**

The element inserted first is removed first.

A simple real-world example is a queue of people waiting for a service.

    First person → Served first

Similarly, in a queue data structure, the first inserted element leaves first.

---

# 1. Basic Queue

Suppose we insert:

    10
    20
    30

The queue becomes:

    FRONT                  REAR
      ↓                      ↓
    10 → 20 → 30 → NULL

The first element is at the front.

The last element is at the rear.

---

# 2. FIFO Principle

FIFO means:

    First In
       ↓
    First Out

Suppose:

    Enqueue 10
    Enqueue 20
    Enqueue 30

Queue:

    FRONT              REAR
      ↓                  ↓
    10 → 20 → 30

Now:

    Dequeue

removes:

    10

Remaining queue:

    FRONT          REAR
      ↓              ↓
    20 → 30

The first element inserted is the first element removed.

---

# 3. Main Queue Operations

The main queue operations are:

- \`enqueue()\`
- \`dequeue()\`
- \`peek()\`

## Enqueue

Adds an element to the rear of the queue.

## Dequeue

Removes an element from the front of the queue.

## Peek

Views the front element without removing it.

---

# 4. Enqueue Operation

Start with an empty queue.

Perform:

    enqueue(10)

Queue:

    FRONT
      ↓
    10
      ↑
     REAR

Now:

    enqueue(20)

Queue:

    FRONT       REAR
      ↓           ↓
    10 → 20

Now:

    enqueue(30)

Queue:

    FRONT              REAR
      ↓                  ↓
    10 → 20 → 30

New elements are always added at the rear.

---

# 5. Dequeue Operation

Suppose:

    FRONT              REAR
      ↓                  ↓
    10 → 20 → 30

Perform:

    dequeue()

The front element 10 is removed.

Result:

    FRONT          REAR
      ↓              ↓
    20 → 30

---

# 6. Peek Operation

Suppose:

    FRONT          REAR
      ↓              ↓
    20 → 30

Calling:

    peek()

returns:

    20

The queue remains unchanged.

---

# 7. Queue Terminology

Important terms include:

**Front**

The position from which elements are removed.

**Rear**

The position where new elements are inserted.

**Enqueue**

Adds an element to the rear.

**Dequeue**

Removes an element from the front.

**Overflow**

Can occur when a fixed-size queue is full and another element is inserted.

**Underflow**

Occurs when an attempt is made to remove an element from an empty queue.

---

# 8. Queue Using an Array

A simple array-based queue can be declared as:

    #define MAX 5

    int queue[MAX];

We can maintain:

    int front = -1;
    int rear = -1;

Initially:

    front = -1
    rear = -1

This represents an empty queue.

---

# 9. Enqueue Using an Array

A basic enqueue operation is:

    void enqueue(int value)
    {
        if (rear == MAX - 1)
        {
            printf("Queue overflow\\n");
            return;
        }

        if (front == -1)
        {
            front = 0;
        }

        rear++;
        queue[rear] = value;
    }

The first inserted element sets:

    front = 0

Then the rear position increases for every new element.

---

# 10. Dequeue Using an Array

A basic dequeue operation is:

    int dequeue(void)
    {
        int value;

        if (front == -1 || front > rear)
        {
            printf("Queue underflow\\n");
            return -1;
        }

        value = queue[front];
        front++;

        return value;
    }

The element at the front is removed logically by moving:

    front++

---

# 11. Peek Using an Array

    int peek(void)
    {
        if (front == -1 || front > rear)
        {
            printf("Queue is empty\\n");
            return -1;
        }

        return queue[front];
    }

The front element is returned without changing the queue.

---

# 12. Displaying a Queue

    void display(void)
    {
        int i;

        if (front == -1 || front > rear)
        {
            printf("Queue is empty\\n");
            return;
        }

        for (i = front; i <= rear; i++)
        {
            printf("%d ", queue[i]);
        }

        printf("\\n");
    }

The display starts from front and continues to rear.

---

# 13. Complete Queue Program

    #include <stdio.h>

    #define MAX 5

    int queue[MAX];
    int front = -1;
    int rear = -1;

    void enqueue(int value)
    {
        if (rear == MAX - 1)
        {
            printf("Queue overflow\\n");
            return;
        }

        if (front == -1)
        {
            front = 0;
        }

        queue[++rear] = value;
    }

    int dequeue(void)
    {
        int value;

        if (front == -1 || front > rear)
        {
            printf("Queue underflow\\n");
            return -1;
        }

        value = queue[front++];

        if (front > rear)
        {
            front = -1;
            rear = -1;
        }

        return value;
    }

    int peek(void)
    {
        if (front == -1)
        {
            printf("Queue is empty\\n");
            return -1;
        }

        return queue[front];
    }

    void display(void)
    {
        int i;

        if (front == -1)
        {
            printf("Queue is empty\\n");
            return;
        }

        for (i = front; i <= rear; i++)
        {
            printf("%d ", queue[i]);
        }

        printf("\\n");
    }

    int main(void)
    {
        enqueue(10);
        enqueue(20);
        enqueue(30);

        printf("Queue: ");
        display();

        printf("Front: %d\\n", peek());

        printf("Dequeued: %d\\n", dequeue());

        printf("Queue after dequeue: ");
        display();

        return 0;
    }

Output:

    Queue: 10 20 30
    Front: 10
    Dequeued: 10
    Queue after dequeue: 20 30

---

# 14. Applications of Queues

Queues are commonly used in:

- Printer scheduling
- CPU scheduling
- Keyboard input buffering
- Network data handling
- Breadth-first search
- Task scheduling
- Customer-service systems

Whenever items need to be processed in the order they arrive, a queue can be useful.

---

# 15. Stack vs Queue

A stack follows:

    LIFO

A queue follows:

    FIFO

Stack:

    Insert → TOP
    Remove → TOP

Queue:

    Insert → REAR
    Remove → FRONT

Example:

Stack:

    30
    20
    10

Remove:

    30

Queue:

    10 → 20 → 30

Remove:

    10

---

# 16. Queue Process

    ENQUEUE
       ↓
      REAR
       ↓
    [10][20][30]
     ↑          ↑
   FRONT       REAR
     ↓
   DEQUEUE

New elements enter from the rear.

Elements leave from the front.

---

# 17. Queue Complexity

For a properly implemented queue:

    Enqueue → O(1)

    Dequeue → O(1)

    Peek → O(1)

    Display → O(n)

The exact implementation can affect the details, but the basic queue operations are designed to be efficient.

---

# Lesson Summary

A queue is a linear data structure that follows:

    FIFO
    First In, First Out

The main operations are:

    enqueue()
    dequeue()
    peek()

Enqueue adds an element at the rear.

Dequeue removes an element from the front.

Peek views the front element without removing it.

Queues are useful when elements must be processed in their arrival order.

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

✓ Lesson 14 — Introduction to Queues

→ Lesson 15 — Mini Project — Linked List Based Student Records

**Lesson 14 Complete**

`,
};

export default lesson14;
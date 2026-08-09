const lesson7 = {

  id: "lesson7",

  title: "Queue",

  content: `

# Queue

## Introduction

A Queue is a collection designed to hold elements before they are processed.

The most common queue principle is:

FIFO — First In, First Out

This means the element added first is generally the element processed first.

Example:

First In

↓

[A] [B] [C]

↑

First Out

If A enters first, A leaves first.

Queues are useful when tasks need to be processed in an orderly sequence.

---

# Real-World Examples

Queues appear in many situations:

- Print jobs
- Customer service requests
- Task scheduling
- Network requests
- Message processing
- CPU task management
- Background job processing

For example:

Task 1

↓

Task 2

↓

Task 3

↓

Processing

Task 1 is processed before Task 2, and Task 2 before Task 3.

---

# Queue Interface

Queue is an interface in:

java.util

Import:

\`\`\`java
import java.util.Queue;
\`\`\`

The simplified hierarchy is:

Collection
    ↓
  Queue
    ├── LinkedList
    ├── PriorityQueue
    └── other implementations

A Deque also extends Queue.

---

# Creating a Queue

Because Queue is an interface, you create it using an implementation.

Example:

\`\`\`java
Queue<String> tasks =
        new LinkedList<>();
\`\`\`

Here:

Queue<String>
     ↓
Interface

LinkedList<>
     ↓
Implementation

---

# Adding Elements

There are two commonly used methods:

- add()
- offer()

Both add an element to the queue, but their behavior differs if the queue cannot accept the element.

---

# add()

The add() method inserts an element into the queue.

Example:

\`\`\`java
Queue<String> tasks =
        new LinkedList<>();

tasks.add("Task 1");
tasks.add("Task 2");
tasks.add("Task 3");
\`\`\`

The queue becomes:

\`\`\`text
[Task 1, Task 2, Task 3]
\`\`\`

add() throws an exception if the queue cannot accept the element.

---

# offer()

The offer() method attempts to add an element.

Example:

\`\`\`java
tasks.offer("Task 4");
\`\`\`

If the queue cannot accept the element, offer() returns:

\`\`\`text
false
\`\`\`

instead of throwing an exception for capacity-related rejection.

For queues where capacity can be restricted, offer() is often useful when you want to handle rejection explicitly.

---

# Retrieving the Head Element

There are two main pairs of methods for retrieving/removing or inspecting the queue head.

Retrieves and removes:

poll()
remove()

Retrieves without removing:

peek()
element()

---

# poll()

poll() retrieves and removes the head element.

Example:

\`\`\`java
System.out.println(
        tasks.poll());
\`\`\`

If the queue is:

\`\`\`text
[Task 1, Task 2, Task 3]
\`\`\`

then:

\`\`\`text
Task 1
\`\`\`

is returned and removed.

The queue becomes:

\`\`\`text
[Task 2, Task 3]
\`\`\`

If the queue is empty:

poll()

↓

returns null

---

# remove()

remove() also retrieves and removes the head element.

Example:

\`\`\`java
System.out.println(
        tasks.remove());
\`\`\`

The important difference is what happens when the queue is empty.

poll()

↓

returns null

remove()

↓

throws exception

---

# peek()

peek() retrieves the head element without removing it.

Example:

\`\`\`java
Queue<String> tasks =
        new LinkedList<>();

tasks.offer("Task 1");
tasks.offer("Task 2");

System.out.println(
        tasks.peek());

System.out.println(tasks);
\`\`\`

Output:

\`\`\`text
Task 1
[Task 1, Task 2]
\`\`\`

The queue remains unchanged.

If the queue is empty:

peek()

↓

returns null

---

# element()

element() also retrieves the head element without removing it.

Example:

\`\`\`java
System.out.println(
        tasks.element());
\`\`\`

The difference appears when the queue is empty.

peek()

↓

returns null

element()

↓

throws exception

---

# Queue Method Summary

Insert:

add()
↔
offer()

Remove:

remove()
↔
poll()

Examine:

element()
↔
peek()

A useful way to remember:

add     ↔ offer

remove  ↔ poll

element ↔ peek

The right-side methods generally provide special return values instead of exceptions for failure or empty cases.

---

# Complete Queue Example

\`\`\`java
import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {

    public static void main(String[] args) {

        Queue<String> tasks =
                new LinkedList<>();

        tasks.offer("Compile");
        tasks.offer("Test");
        tasks.offer("Deploy");

        System.out.println(
                "Queue: " + tasks);

        System.out.println(
                "Head: " + tasks.peek());

        System.out.println(
                "Processing: "
                + tasks.poll());

        System.out.println(
                "Queue: " + tasks);

    }

}
\`\`\`

Output:

\`\`\`text
Queue: [Compile, Test, Deploy]
Head: Compile
Processing: Compile
Queue: [Test, Deploy]
\`\`\`

---

# Processing a Queue

A common pattern is:

\`\`\`java
while (!tasks.isEmpty()) {

    String task =
            tasks.poll();

    System.out.println(
            "Processing: " + task);
}
\`\`\`

If the queue contains:

\`\`\`text
[Task 1, Task 2, Task 3]
\`\`\`

the processing order is:

Task 1

Task 2

Task 3

This demonstrates FIFO behavior.

---

# Queue with Integers

Queues can store any object type.

Example:

\`\`\`java
Queue<Integer> numbers =
        new LinkedList<>();

numbers.offer(10);
numbers.offer(20);
numbers.offer(30);

System.out.println(
        numbers.poll());
\`\`\`

Output:

\`\`\`text
10
\`\`\`

---

# Queue with Custom Objects

Queues are especially useful for processing objects.

Example:

\`\`\`java
class Task {

    String name;

    Task(String name) {

        this.name = name;

    }

}
\`\`\`

Create a queue:

\`\`\`java
Queue<Task> tasks =
        new LinkedList<>();
\`\`\`

Add objects:

\`\`\`java
tasks.offer(
        new Task("Compile"));

tasks.offer(
        new Task("Test"));

tasks.offer(
        new Task("Deploy"));
\`\`\`

The queue can then process each task in order.

---

# Queue Implementations

Several classes can provide queue behavior.

Important examples include:

Queue
  │
  ├── LinkedList
  │
  ├── PriorityQueue
  │
  └── other specialized implementations

PriorityQueue is covered in the next lesson.

---

# Queue vs Stack

Queue:

FIFO

First In
   ↓
First Out

Stack:

LIFO

Last In
   ↓
First Out

Example:

Queue:

\`\`\`text
A → B → C

poll() → A
\`\`\`

Stack:

\`\`\`text
A → B → C

pop() → C
\`\`\`

---

# Queue vs List

A List is primarily designed around:

- Ordered elements
- Index-based access
- Duplicate elements

A Queue is designed around:

- Processing order
- Head element
- Adding and removing according to queue semantics

Therefore, choose a Queue when the main requirement is processing elements in queue order.

---

# FIFO Processing Example

Suppose requests arrive:

Request A

Request B

Request C

They are placed into a queue:

\`\`\`text
[A] [B] [C]
\`\`\`

Processing:

\`\`\`text
A → B → C
\`\`\`

The first request received is processed first.

---

# Real-World Example: Print Queue

Imagine three documents waiting to be printed:

Document 1

Document 2

Document 3

Queue:

\`\`\`text
[Document 1]
[Document 2]
[Document 3]
\`\`\`

Processing:

Document 1

↓

Document 2

↓

Document 3

This follows FIFO behavior.

---

# Real-World Example: Background Tasks

Suppose an application receives:

Task A

Task B

Task C

A queue can store them:

\`\`\`text
[Task A] [Task B] [Task C]
\`\`\`

The application processes:

Task A

↓

Task B

↓

Task C

---

# Important Queue Behavior

A normal FIFO Queue generally processes elements according to insertion order.

However, not every Queue implementation follows simple FIFO ordering.

For example:

PriorityQueue

↓

Priority-based ordering

This is why the implementation matters.

---

# Common Mistakes

## 1. Confusing Queue and Stack

Remember:

Queue → FIFO

Stack → LIFO

---

## 2. Using peek() When You Want Removal

peek() only examines the head.

It does not remove the element.

Use:

\`\`\`java
poll();
\`\`\`

when you want to retrieve and remove the head.

---

## 3. Using remove() Without Considering an Empty Queue

remove() throws an exception when the queue is empty.

If you want a special return value instead:

\`\`\`java
poll();
\`\`\`

returns null when the queue is empty.

---

## 4. Assuming Every Queue Is FIFO

The Queue interface allows different ordering policies.

For example:

PriorityQueue

uses priority ordering.

Always understand the implementation being used.

---

# Best Practices

- Use Queue when the problem requires processing order.
- Prefer the Queue interface for variable declarations when appropriate.
- Use offer() when explicit rejection handling is useful.
- Use poll() when you want a safe empty-queue result.
- Use peek() when you only want to inspect the head.
- Understand the difference between add()/offer(), remove()/poll(), and element()/peek().
- Do not assume every Queue implementation is simple FIFO.
- Choose the implementation according to the required ordering behavior.

---

# Interview Questions

## Q1. What is a Queue?

A Queue is a collection designed to hold elements before they are processed according to a defined ordering policy.

---

## Q2. What does FIFO mean?

FIFO means:

First In, First Out.

The element added first is generally processed first in a FIFO queue.

---

## Q3. What is the difference between add() and offer()?

Both attempt to add an element.

add() throws an exception if the queue cannot accept the element.

offer() returns false when insertion cannot be accepted.

---

## Q4. What is the difference between remove() and poll()?

Both retrieve and remove the head.

remove() throws an exception if the queue is empty.

poll() returns null if the queue is empty.

---

## Q5. What is the difference between peek() and element()?

Both inspect the head without removing it.

peek() returns null if the queue is empty.

element() throws an exception if the queue is empty.

---

## Q6. Can a Queue store objects?

Yes.

A Queue can store objects such as String, Integer, or custom classes.

---

## Q7. Is every Queue FIFO?

No.

The Queue interface supports different ordering policies.

For example, PriorityQueue uses priority-based ordering.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain the Queue interface.
- Understand FIFO behavior.
- Create a Queue.
- Add elements using add() and offer().
- Remove elements using remove() and poll().
- Inspect the head using peek() and element().
- Understand the differences between these method pairs.
- Process tasks using a Queue.
- Store objects in queues.
- Compare queues with stacks and lists.
- Understand why queue implementations can have different ordering policies.

---

# Module Progress

✓ Lesson 1 — Introduction to Collections

✓ Lesson 2 — Collection Interfaces

✓ Lesson 3 — List Interface

✓ Lesson 4 — ArrayList

✓ Lesson 5 — LinkedList

✓ Lesson 6 — Vector & Stack

✓ Lesson 7 — Queue

→ Lesson 8 — PriorityQueue

Lesson 9 — Deque

Lesson 10 — Set Interface

Lesson 11 — HashSet

Lesson 12 — LinkedHashSet

Lesson 13 — TreeSet

Lesson 14 — Collection Algorithms

Lesson 15 — Student Record Management System

---

# Next Lesson

## Lesson 8 — PriorityQueue

You will learn:

- What PriorityQueue is
- Priority-based processing
- Natural ordering
- Comparator-based ordering
- Adding elements
- Retrieving elements
- offer()
- poll()
- peek()
- PriorityQueue with numbers
- PriorityQueue with custom objects
- PriorityQueue vs normal Queue
- Important ordering behavior
- Practical examples
- Best Practices
- Interview Questions
- Key Takeaways

`
};

export default lesson7;
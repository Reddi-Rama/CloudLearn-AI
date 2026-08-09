const lesson8 = {

  id: "lesson8",

  title: "PriorityQueue",

  content: `

# PriorityQueue

## Introduction

A PriorityQueue is a queue implementation in which elements are processed according to their priority, rather than simply according to insertion order.

A normal FIFO queue generally processes:

First In

↓

First Out

A PriorityQueue instead selects the element according to its ordering rule.

For example, with numbers:

Added:

30

10

20

The smallest element has the highest priority under the default natural ordering.

So:

poll() → 10

poll() → 20

poll() → 30

---

# What Is PriorityQueue?

PriorityQueue is a class in:

java.util

It implements:

Queue
   ↓
PriorityQueue

Import:

\`\`\`java
import java.util.PriorityQueue;
\`\`\`

---

# Creating a PriorityQueue

Example:

\`\`\`java
PriorityQueue<Integer> numbers =
        new PriorityQueue<>();
\`\`\`

Add elements:

\`\`\`java
numbers.offer(30);
numbers.offer(10);
numbers.offer(20);
\`\`\`

---

# Natural Ordering

By default, a PriorityQueue uses the natural ordering of its elements.

For numbers:

\`\`\`text
10 < 20 < 30
\`\`\`

So the smallest element has the highest priority.

Example:

\`\`\`java
PriorityQueue<Integer> numbers =
        new PriorityQueue<>();

numbers.offer(30);
numbers.offer(10);
numbers.offer(20);

System.out.println(
        numbers.poll());

System.out.println(
        numbers.poll());

System.out.println(
        numbers.poll());
\`\`\`

Output:

\`\`\`text
10
20
30
\`\`\`

---

# Important: PriorityQueue Is Not a Sorted List

A very important point:

PriorityQueue does not guarantee that iterating through it will produce elements in sorted order.

Its main guarantee is about the head element.

For example:

\`\`\`java
System.out.println(
        numbers.peek());
\`\`\`

returns the element with the highest priority according to the queue's ordering.

But:

\`\`\`java
for (Integer number :
        numbers) {

    System.out.println(number);

}
\`\`\`

should not be treated as a sorted traversal.

The priority applies to the queue's head, not to every iteration position.

---

# PriorityQueue Internal Idea

Conceptually, PriorityQueue is implemented using a heap data structure.

For a min-priority queue, the smallest element is kept at the head.

A simplified view is:

\`\`\`text
          10
        /    \\
      20      30
     /  \\
   40    50
\`\`\`

The exact internal arrangement depends on the elements and operations.

The important property is that the highest-priority element is available at the head.

---

# offer()

offer() adds an element.

Example:

\`\`\`java
PriorityQueue<Integer> numbers =
        new PriorityQueue<>();

numbers.offer(30);
numbers.offer(10);
numbers.offer(20);
\`\`\`

The queue now contains the elements according to its internal priority structure.

---

# add()

You can also use:

\`\`\`java
numbers.add(20);
\`\`\`

Like other Queue implementations, add() and offer() both attempt to insert elements, with different failure semantics for bounded queues.

---

# peek()

peek() returns the highest-priority element without removing it.

Example:

\`\`\`java
PriorityQueue<Integer> numbers =
        new PriorityQueue<>();

numbers.offer(30);
numbers.offer(10);
numbers.offer(20);

System.out.println(
        numbers.peek());

System.out.println(numbers);
\`\`\`

The first output is:

\`\`\`text
10
\`\`\`

The 10 remains in the queue.

---

# poll()

poll() retrieves and removes the highest-priority element.

Example:

\`\`\`java
System.out.println(
        numbers.poll());
\`\`\`

If the highest-priority element is 10:

\`\`\`text
10
\`\`\`

Afterward, 10 is no longer in the queue.

---

# Processing a PriorityQueue

A common pattern is:

\`\`\`java
while (!numbers.isEmpty()) {

    System.out.println(
            numbers.poll());

}
\`\`\`

If the queue contains:

30

10

20

5

the output using natural ordering is:

\`\`\`text
5
10
20
30
\`\`\`

This is because each poll() removes the current highest-priority element.

---

# PriorityQueue with Strings

Strings can also be stored.

Example:

\`\`\`java
PriorityQueue<String> languages =
        new PriorityQueue<>();

languages.offer("Python");
languages.offer("C++");
languages.offer("Java");
\`\`\`

Strings use their natural ordering.

When processed:

\`\`\`java
while (!languages.isEmpty()) {

    System.out.println(
            languages.poll());

}
\`\`\`

the elements are returned according to their natural ordering.

---

# Custom Priority Using Comparator

You can define a different ordering using a Comparator.

For example, suppose you want larger numbers to have higher priority.

Use:

\`\`\`java
PriorityQueue<Integer> numbers =
        new PriorityQueue<>(
                Comparator.reverseOrder());
\`\`\`

Then:

\`\`\`java
numbers.offer(10);
numbers.offer(30);
numbers.offer(20);
\`\`\`

Processing:

\`\`\`java
while (!numbers.isEmpty()) {

    System.out.println(
            numbers.poll());

}
\`\`\`

Output:

\`\`\`text
30
20
10
\`\`\`

---

# Min-Priority vs Max-Priority

## Default PriorityQueue

\`\`\`java
PriorityQueue<Integer> numbers =
        new PriorityQueue<>();
\`\`\`

Result:

\`\`\`text
5
10
20
30
\`\`\`

The smallest value has the highest priority.

---

## Reverse Ordering

\`\`\`java
PriorityQueue<Integer> numbers =
        new PriorityQueue<>(
                Comparator.reverseOrder());
\`\`\`

Result:

\`\`\`text
30
20
10
5
\`\`\`

The largest value has the highest priority.

---

# PriorityQueue with Custom Objects

Suppose you have:

\`\`\`java
class Task {

    String name;
    int priority;

    Task(
            String name,
            int priority) {

        this.name = name;
        this.priority = priority;

    }

}
\`\`\`

You can create a priority queue using a Comparator.

\`\`\`java
PriorityQueue<Task> tasks =
        new PriorityQueue<>(
                Comparator.comparingInt(
                        task -> task.priority));
\`\`\`

Now tasks with smaller priority values will be processed first.

---

# Example: Task Priority

\`\`\`java
import java.util.Comparator;
import java.util.PriorityQueue;

class Task {

    String name;
    int priority;

    Task(
            String name,
            int priority) {

        this.name = name;
        this.priority = priority;

    }

    @Override
    public String toString() {

        return name
                + " - Priority "
                + priority;

    }

}

public class PriorityQueueExample {

    public static void main(String[] args) {

        PriorityQueue<Task> tasks =
                new PriorityQueue<>(
                        Comparator.comparingInt(
                                task ->
                                        task.priority));

        tasks.offer(
                new Task(
                        "Backup",
                        3));

        tasks.offer(
                new Task(
                        "Security",
                        1));

        tasks.offer(
                new Task(
                        "Report",
                        2));

        while (!tasks.isEmpty()) {

            System.out.println(
                    tasks.poll());

        }

    }

}
\`\`\`

Output:

\`\`\`text
Security - Priority 1
Report - Priority 2
Backup - Priority 3
\`\`\`

---

# PriorityQueue vs Normal Queue

Normal Queue:

\`\`\`text
First In
   ↓
First Out
\`\`\`

PriorityQueue:

\`\`\`text
Highest Priority
       ↓
    Process
\`\`\`

For example:

Normal Queue:

\`\`\`text
30 → 10 → 20

poll() → 30
\`\`\`

PriorityQueue with natural ordering:

\`\`\`text
30
10
20

poll() → 10
\`\`\`

The insertion order does not determine the processing order in a PriorityQueue.

---

# Practical Example: Task Scheduling

Suppose tasks have priorities:

Task A → Priority 3

Task B → Priority 1

Task C → Priority 2

The queue processes:

Priority 1

↓

Priority 2

↓

Priority 3

So:

Task B

↓

Task C

↓

Task A

This is useful when important tasks should be processed before lower-priority tasks.

---

# Practical Example: Hospital Queue

A simplified system could assign priority levels:

Critical → 1

Urgent → 2

Normal → 3

The system can process lower-numbered priorities first.

This is only a programming model; real-world healthcare systems require much more complex rules.

---

# PriorityQueue and Duplicates

PriorityQueue allows duplicate elements.

Example:

\`\`\`java
PriorityQueue<Integer> numbers =
        new PriorityQueue<>();

numbers.offer(10);
numbers.offer(10);
numbers.offer(20);
\`\`\`

The queue can contain:

\`\`\`text
10
10
20
\`\`\`

---

# PriorityQueue and Null

PriorityQueue does not allow null elements.

This is invalid:

\`\`\`java
numbers.offer(null);
\`\`\`

A NullPointerException is thrown.

---

# PriorityQueue Performance

For a typical heap-based PriorityQueue:

offer()

→ O(log n)

poll()

→ O(log n)

peek()

→ O(1)

These are typical complexity characteristics of the heap-based implementation.

---

# Common Mistakes

## 1. Assuming PriorityQueue Is Fully Sorted

This is incorrect:

PriorityQueue

↓

Every iteration is sorted

The important guarantee is the ordering of the head element.

---

## 2. Assuming Insertion Order Is Preserved

Suppose:

\`\`\`java
offer(30);
offer(10);
offer(20);
\`\`\`

You should not expect iteration to return:

\`\`\`text
30
10
20
\`\`\`

or any other specific insertion-order sequence.

---

## 3. Forgetting Comparator Requirements

If custom objects do not have a natural ordering, you need an appropriate Comparator or comparable implementation.

---

## 4. Adding null

PriorityQueue does not allow null elements.

---

# Best Practices

- Use PriorityQueue when priority-based processing is required.
- Use natural ordering when the element type has the desired ordering.
- Use a Comparator when you need custom priority rules.
- Use peek() to inspect the highest-priority element.
- Use poll() to retrieve and remove it.
- Do not rely on iteration order being sorted.
- Do not insert null.
- Keep the priority rule clear and consistent.
- Use custom comparators when working with objects that need application-specific priority rules.

---

# Interview Questions

## Q1. What is PriorityQueue?

PriorityQueue is a queue implementation that orders elements according to their natural ordering or a supplied Comparator.

---

## Q2. Does PriorityQueue follow FIFO?

Not necessarily.

Its processing order is determined by its priority ordering rather than simple insertion order.

---

## Q3. What is the default priority for numbers?

With natural ordering, smaller numbers have higher priority.

---

## Q4. Does PriorityQueue allow duplicates?

Yes.

---

## Q5. Does PriorityQueue allow null?

No.

---

## Q6. Is PriorityQueue fully sorted?

No.

The head element has the appropriate priority, but iteration should not be treated as sorted traversal.

---

## Q7. How can you make the largest number have the highest priority?

Use a reverse-order Comparator:

\`\`\`java
PriorityQueue<Integer> numbers =
        new PriorityQueue<>(
                Comparator.reverseOrder());
\`\`\`

---

## Q8. What is the typical complexity of poll()?

For a typical heap-based PriorityQueue:

\`\`\`text
O(log n)
\`\`\`

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain PriorityQueue.
- Understand priority-based processing.
- Create a PriorityQueue.
- Use natural ordering.
- Add elements using offer().
- Inspect the head using peek().
- Remove the highest-priority element using poll().
- Use Comparator for custom ordering.
- Build priority queues for custom objects.
- Understand min-priority and max-priority behavior.
- Compare PriorityQueue with a normal FIFO queue.
- Understand why iteration is not guaranteed to be sorted.
- Understand basic performance characteristics.
- Avoid common PriorityQueue mistakes.

---

# Module Progress

✓ Lesson 1 — Introduction to Collections

✓ Lesson 2 — Collection Interfaces

✓ Lesson 3 — List Interface

✓ Lesson 4 — ArrayList

✓ Lesson 5 — LinkedList

✓ Lesson 6 — Vector & Stack

✓ Lesson 7 — Queue

✓ Lesson 8 — PriorityQueue

→ Lesson 9 — Deque

Lesson 10 — Set Interface

Lesson 11 — HashSet

Lesson 12 — LinkedHashSet

Lesson 13 — TreeSet

Lesson 14 — Collection Algorithms

Lesson 15 — Student Record Management System

---

# Next Lesson

## Lesson 9 — Deque

You will learn:

- What a Deque is
- Double-ended queue concept
- Deque interface
- addFirst()
- addLast()
- offerFirst()
- offerLast()
- removeFirst()
- removeLast()
- pollFirst()
- pollLast()
- peekFirst()
- peekLast()
- ArrayDeque
- LinkedList as a Deque
- Deque as a Queue
- Deque as a Stack
- Practical examples
- Best Practices
- Interview Questions
- Key Takeaways

`
};

export default lesson8;
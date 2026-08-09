const lesson9 = {

  id: "lesson9",

  title: "Deque",

  content: `

# Deque

## Introduction

Deque stands for Double-Ended Queue.

Unlike a normal queue, which mainly processes elements from one end and adds them at the other, a Deque allows elements to be added and removed from both ends.

Front                         Rear
  ↓                             ↓
[A] [B] [C] [D]
  ↑                             ↑
Add / Remove               Add / Remove

A Deque can therefore behave as:

- A normal queue.
- A stack.
- A double-ended collection.

---

# What Is Deque?

Deque is an interface in:

java.util

It extends the Queue interface.

The relationship is:

Collection
    ↓
  Queue
    ↓
  Deque

Import:

\`\`\`java
import java.util.Deque;
\`\`\`

---

# Deque Implementations

Common implementations include:

Deque
  ├── ArrayDeque
  └── LinkedList

For many general-purpose deque operations, ArrayDeque is a good modern choice.

---

# Creating a Deque

Using ArrayDeque:

\`\`\`java
Deque<String> deque =
        new ArrayDeque<>();
\`\`\`

Import:

\`\`\`java
import java.util.ArrayDeque;
\`\`\`

You can also use LinkedList:

\`\`\`java
Deque<String> deque =
        new LinkedList<>();
\`\`\`

---

# Adding to the Front

Use:

\`\`\`java
deque.addFirst("Java");
\`\`\`

Example:

Before:

\`\`\`text
[Python, C++]
\`\`\`

addFirst("Java")

After:

\`\`\`text
[Java, Python, C++]
\`\`\`

---

# Adding to the Rear

Use:

\`\`\`java
deque.addLast("Java");
\`\`\`

Example:

Before:

\`\`\`text
[Python, C++]
\`\`\`

addLast("Java")

After:

\`\`\`text
[Python, C++, Java]
\`\`\`

---

# offerFirst()

offerFirst() attempts to add an element at the front.

Example:

\`\`\`java
deque.offerFirst("Java");
\`\`\`

It returns:

\`\`\`text
true
\`\`\`

if the element is successfully added.

---

# offerLast()

offerLast() attempts to add an element at the rear.

Example:

\`\`\`java
deque.offerLast("Python");
\`\`\`

---

# Adding from Both Ends

Example:

\`\`\`java
Deque<String> deque =
        new ArrayDeque<>();

deque.addFirst("Java");
deque.addLast("Python");
deque.addFirst("C++");
deque.addLast("SQL");

System.out.println(deque);
\`\`\`

Output:

\`\`\`text
[C++, Java, Python, SQL]
\`\`\`

---

# Removing from the Front

Use:

\`\`\`java
deque.removeFirst();
\`\`\`

If:

\`\`\`text
[C++, Java, Python]
\`\`\`

then:

\`\`\`text
[Java, Python]
\`\`\`

---

# Removing from the Rear

Use:

\`\`\`java
deque.removeLast();
\`\`\`

If:

\`\`\`text
[C++, Java, Python]
\`\`\`

then:

\`\`\`text
[C++, Java]
\`\`\`

---

# pollFirst()

pollFirst() retrieves and removes the first element.

Example:

\`\`\`java
String item =
        deque.pollFirst();
\`\`\`

If the deque is empty, it returns:

\`\`\`text
null
\`\`\`

---

# pollLast()

pollLast() retrieves and removes the last element.

Example:

\`\`\`java
String item =
        deque.pollLast();
\`\`\`

If the deque is empty, it returns:

\`\`\`text
null
\`\`\`

---

# peekFirst()

peekFirst() returns the first element without removing it.

Example:

\`\`\`java
String first =
        deque.peekFirst();
\`\`\`

If the deque is empty, it returns:

\`\`\`text
null
\`\`\`

---

# peekLast()

peekLast() returns the last element without removing it.

Example:

\`\`\`java
String last =
        deque.peekLast();
\`\`\`

The element is not removed.

---

# Deque Method Groups

The main methods can be remembered in groups:

Add

│
├── addFirst()
├── addLast()
├── offerFirst()
└── offerLast()

Remove

│
├── removeFirst()
├── removeLast()
├── pollFirst()
└── pollLast()

Inspect

│
├── peekFirst()
└── peekLast()

---

# Exception vs Special Return

Similar to Queue, there are method pairs with different behavior.

\`\`\`text
addFirst()    ↔ offerFirst()
addLast()     ↔ offerLast()

removeFirst() ↔ pollFirst()
removeLast()  ↔ pollLast()
\`\`\`

The remove... methods throw an exception when appropriate if the deque is empty.

The poll... methods return null when the deque is empty.

---

# Complete Deque Example

\`\`\`java
import java.util.ArrayDeque;
import java.util.Deque;

public class DequeExample {

    public static void main(String[] args) {

        Deque<String> deque =
                new ArrayDeque<>();

        deque.addFirst("Java");
        deque.addLast("Python");
        deque.addFirst("C++");

        System.out.println(
                "Deque: " + deque);

        System.out.println(
                "First: "
                + deque.peekFirst());

        System.out.println(
                "Last: "
                + deque.peekLast());

        System.out.println(
                "Removed First: "
                + deque.pollFirst());

        System.out.println(
                "Removed Last: "
                + deque.pollLast());

        System.out.println(
                "Deque: " + deque);

    }

}
\`\`\`

Output:

\`\`\`text
Deque: [C++, Java, Python]
First: C++
Last: Python
Removed First: C++
Removed Last: Python
Deque: [Java]
\`\`\`

---

# Deque as a Queue

A Deque can behave like a normal FIFO queue.

Add elements at the rear:

\`\`\`java
deque.offerLast("Task 1");
deque.offerLast("Task 2");
deque.offerLast("Task 3");
\`\`\`

Remove from the front:

\`\`\`java
deque.pollFirst();
\`\`\`

Processing order:

Task 1

Task 2

Task 3

This gives FIFO behavior.

---

# Deque as a Stack

A Deque can also provide LIFO stack behavior.

Push elements at the front:

\`\`\`java
deque.push("A");
deque.push("B");
deque.push("C");
\`\`\`

The deque behaves like:

C  ← Top
B
A

Then:

\`\`\`java
deque.pop();
\`\`\`

returns:

\`\`\`text
C
\`\`\`

This is LIFO behavior.

---

# Why Deque Can Replace Stack

The legacy Stack class exists in Java, but for new stack-oriented code, a Deque implementation such as ArrayDeque is generally preferred.

Example:

\`\`\`java
Deque<String> stack =
        new ArrayDeque<>();

stack.push("Java");
stack.push("Python");
stack.push("C++");

System.out.println(
        stack.pop());
\`\`\`

Output:

\`\`\`text
C++
\`\`\`

---

# ArrayDeque

ArrayDeque is a resizable-array implementation of Deque.

It supports efficient operations at both ends.

Example:

\`\`\`java
Deque<Integer> numbers =
        new ArrayDeque<>();

numbers.addFirst(10);
numbers.addLast(20);
numbers.addFirst(5);

System.out.println(numbers);
\`\`\`

Output:

\`\`\`text
[5, 10, 20]
\`\`\`

---

# ArrayDeque Does Not Allow Null

Unlike some general collection implementations, ArrayDeque does not permit null elements.

This is invalid:

\`\`\`java
Deque<String> deque =
        new ArrayDeque<>();

deque.add(null);
\`\`\`

It results in a NullPointerException.

---

# LinkedList vs ArrayDeque as Deque

Both can implement Deque.

ArrayDeque:

- Implements Deque.
- Adds and removes at both ends.
- Does not allow null.
- Uses a resizable array.
- Is a common modern choice for deque operations.

LinkedList:

- Implements Deque.
- Adds and removes at both ends.
- Allows null.
- Uses linked nodes.
- Useful when linked-list behavior is needed.

For straightforward queue, deque, or stack operations, ArrayDeque is often a strong choice.

---

# Deque Performance

For ArrayDeque, operations at the ends are designed to be efficient.

Common operations such as:

- addFirst()
- addLast()
- removeFirst()
- removeLast()
- peekFirst()
- peekLast()

are typically O(1) amortized or constant-time operations depending on the exact operation and implementation details.

---

# Practical Example: Browser Navigation

A simplified navigation model can use two stacks:

Back History        Current        Forward History
     ↓                 ↓                  ↓
   Page A           Page C              Page D

Stack-like behavior can help model moving backward and forward through pages.

This is a conceptual example; real browsers use more complex navigation systems.

---

# Practical Example: Palindrome Checking

A deque can be useful for checking whether a sequence reads the same from both ends.

For:

\`\`\`text
LEVEL
\`\`\`

Compare:

Front → L
Rear  → L

Front → E
Rear  → E

Front → V

The sequence is a palindrome.

A deque provides convenient access to both ends.

---

# Practical Example: Task Processing

A system may add urgent tasks to the front and normal tasks to the rear.

\`\`\`java
Deque<String> tasks =
        new ArrayDeque<>();

tasks.addLast("Normal Task");
tasks.addLast("Another Task");

tasks.addFirst("Urgent Task");
\`\`\`

Result:

\`\`\`text
[Urgent Task, Normal Task, Another Task]
\`\`\`

The system can process from the front.

---

# Common Mistakes

## 1. Confusing Queue and Deque

A queue generally focuses on processing from one end and adding at the other.

A deque supports operations at both ends.

---

## 2. Using the Wrong End

If you want FIFO behavior:

Add → Rear

Remove → Front

If you want LIFO behavior:

Add → Front

Remove → Front

---

## 3. Assuming ArrayDeque Allows Null

It does not.

Avoid:

\`\`\`java
deque.add(null);
\`\`\`

---

## 4. Using removeFirst() on an Empty Deque

This can throw an exception.

If you want a null result when empty, use:

\`\`\`java
pollFirst();
\`\`\`

---

# Best Practices

- Use Deque when operations at both ends are required.
- Prefer ArrayDeque for many general-purpose deque and stack use cases.
- Use offerFirst() and offerLast() when insertion failure should be handled through a return value.
- Use pollFirst() and pollLast() when empty deques should return null.
- Use peekFirst() and peekLast() when you only want to inspect elements.
- Do not add null to an ArrayDeque.
- Choose the operation direction carefully when implementing FIFO or LIFO behavior.

---

# Interview Questions

## Q1. What is Deque?

Deque is a double-ended queue that allows insertion and removal of elements from both ends.

---

## Q2. What does Deque stand for?

Deque stands for:

Double-Ended Queue.

---

## Q3. Can Deque behave like a stack?

Yes.

A Deque can provide LIFO behavior using operations such as push() and pop().

---

## Q4. Can Deque behave like a queue?

Yes.

A Deque can provide FIFO behavior by adding at one end and removing from the other.

---

## Q5. What is ArrayDeque?

ArrayDeque is a resizable-array implementation of the Deque interface.

---

## Q6. Does ArrayDeque allow null?

No.

---

## Q7. What is the difference between pollFirst() and removeFirst()?

Both retrieve and remove the first element.

pollFirst() returns null when empty, while removeFirst() throws an exception.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain Deque.
- Understand double-ended queue behavior.
- Create a Deque.
- Add elements at both ends.
- Remove elements from both ends.
- Inspect elements at both ends.
- Understand ArrayDeque.
- Use Deque as a queue.
- Use Deque as a stack.
- Compare ArrayDeque and LinkedList.
- Understand the main deque method pairs.
- Avoid common deque mistakes.

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

✓ Lesson 9 — Deque

→ Lesson 10 — Set Interface

Lesson 11 — HashSet

Lesson 12 — LinkedHashSet

Lesson 13 — TreeSet

Lesson 14 — Collection Algorithms

Lesson 15 — Student Record Management System

---

# Next Lesson

## Lesson 10 — Set Interface

You will learn:

- What a Set is
- Set characteristics
- Unique elements
- Set interface
- Duplicate handling
- add()
- remove()
- contains()
- size()
- isEmpty()
- clear()
- Set implementations
- HashSet
- LinkedHashSet
- TreeSet
- Set vs List
- Practical examples
- Best Practices
- Interview Questions
- Key Takeaways

`
};

export default lesson9;
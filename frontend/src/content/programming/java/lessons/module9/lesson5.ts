const lesson5 = {

id: "lesson5",

title: "LinkedList",

content: `

# LinkedList

## Introduction

LinkedList is another implementation of the List interface in Java.

Unlike ArrayList, which uses a dynamically resizable array internally, LinkedList is based on linked nodes.

A linked list stores elements as separate nodes that are connected to one another.

[Node A] ⇄ [Node B] ⇄ [Node C] ⇄ [Node D]

Each node contains an element and links to neighboring nodes.

# What Is LinkedList?

LinkedList is a class from:

java.util

It implements:

- List
- Deque
- Queue

The simplified relationship is:

List
  │
  └── LinkedList

Deque
  │
  └── LinkedList

Import:

\`\`\`java
import java.util.LinkedList;
\`\`\`

# Creating a LinkedList

Example:

\`\`\`java
LinkedList<String> languages =
        new LinkedList<>();
\`\`\`

You can also program to the interface:

\`\`\`java
List<String> languages =
        new LinkedList<>();
\`\`\`

If you need Deque operations:

\`\`\`java
Deque<String> languages =
        new LinkedList<>();
\`\`\`

# Basic Example

\`\`\`java
import java.util.LinkedList;

public class LinkedListExample {

    public static void main(String[] args) {

        LinkedList<String> languages =
                new LinkedList<>();

        languages.add("Java");
        languages.add("Python");
        languages.add("C++");

        System.out.println(languages);

    }

}
\`\`\`

Output:

\`\`\`text
[Java, Python, C++]
\`\`\`

# How a LinkedList Works

Conceptually, a doubly linked list can be represented as:

null
  ↑
[Java]
 prev → null
 next ──────────┐
                ↓
             [Python]
             prev ← Java
             next ─────────┐
                           ↓
                        [C++]
                        prev ← Python
                        next → null

Each node conceptually contains:

Previous reference
        +
Element
        +
Next reference

This allows nodes to be connected together.

# LinkedList as a List

Because LinkedList implements List, you can use common list operations.

\`\`\`java
LinkedList<String> languages =
        new LinkedList<>();

languages.add("Java");
languages.add("Python");
languages.add("C++");

System.out.println(
        languages.get(1));
\`\`\`

Output:

\`\`\`text
Python
\`\`\`

# Adding Elements

The normal add() method adds an element to the end.

\`\`\`java
languages.add("Java");
languages.add("Python");
languages.add("C++");
\`\`\`

Result:

\`\`\`text
[Java, Python, C++]
\`\`\`

# Adding at a Specific Index

You can insert an element at a particular index.

\`\`\`java
languages.add(
        1,
        "JavaScript");
\`\`\`

Before:

\`\`\`text
[Java, Python, C++]
\`\`\`

After:

\`\`\`text
[Java, JavaScript, Python, C++]
\`\`\`

# Adding at the Beginning

LinkedList provides:

\`\`\`java
addFirst()
\`\`\`

Example:

\`\`\`java
languages.addFirst("C");
\`\`\`

Before:

\`\`\`text
[Java, Python, C++]
\`\`\`

After:

\`\`\`text
[C, Java, Python, C++]
\`\`\`

# Adding at the End

Use:

\`\`\`java
addLast()
\`\`\`

Example:

\`\`\`java
languages.addLast("JavaScript");
\`\`\`

Result:

\`\`\`text
[Java, Python, C++, JavaScript]
\`\`\`

# Accessing the First Element

Use:

\`\`\`java
getFirst()
\`\`\`

Example:

\`\`\`java
System.out.println(
        languages.getFirst());
\`\`\`

# Accessing the Last Element

Use:

\`\`\`java
getLast()
\`\`\`

Example:

\`\`\`java
System.out.println(
        languages.getLast());
\`\`\`

# Removing the First Element

Use:

\`\`\`java
removeFirst()
\`\`\`

Example:

\`\`\`java
languages.removeFirst();
\`\`\`

If the list is:

\`\`\`text
[Java, Python, C++]
\`\`\`

it becomes:

\`\`\`text
[Python, C++]
\`\`\`

# Removing the Last Element

Use:

\`\`\`java
removeLast()
\`\`\`

Example:

\`\`\`java
languages.removeLast();
\`\`\`

Result:

\`\`\`text
[Java, Python]
\`\`\`

# Peek Operations

LinkedList also provides deque-style methods.

## peekFirst()

Returns the first element without removing it.

\`\`\`java
languages.peekFirst();
\`\`\`

## peekLast()

Returns the last element without removing it.

\`\`\`java
languages.peekLast();
\`\`\`

These methods return null when the deque is empty.

# Poll Operations

## pollFirst()

Retrieves and removes the first element.

\`\`\`java
languages.pollFirst();
\`\`\`

## pollLast()

Retrieves and removes the last element.

\`\`\`java
languages.pollLast();
\`\`\`

These methods return null when the deque is empty.

# LinkedList as a Queue

Because LinkedList implements Queue, it can be used as a queue.

\`\`\`java
Queue<String> tasks =
        new LinkedList<>();
\`\`\`

Add elements:

\`\`\`java
tasks.offer("Task 1");
tasks.offer("Task 2");
tasks.offer("Task 3");
\`\`\`

Queue:

Task 1 → Task 2 → Task 3

# Queue Operations

You can use:

- offer()
- peek()
- poll()

Example:

\`\`\`java
System.out.println(
        tasks.peek());

System.out.println(
        tasks.poll());
\`\`\`

Output:

\`\`\`text
Task 1
Task 1
\`\`\`

After poll():

\`\`\`text
[Task 2, Task 3]
\`\`\`

# LinkedList as a Deque

Because LinkedList implements Deque, it supports both-end operations.

\`\`\`java
Deque<String> deque =
        new LinkedList<>();
\`\`\`

You can use:

- addFirst()
- addLast()
- removeFirst()
- removeLast()
- peekFirst()
- peekLast()

# Example: Deque

\`\`\`java
import java.util.Deque;
import java.util.LinkedList;

public class LinkedListDequeExample {

    public static void main(String[] args) {

        Deque<String> deque =
                new LinkedList<>();

        deque.addFirst("Java");
        deque.addLast("Python");
        deque.addFirst("C++");

        System.out.println(deque);

    }

}
\`\`\`

Output:

\`\`\`text
[C++, Java, Python]
\`\`\`

# LinkedList with Objects

You can store custom objects in a LinkedList.

Example:

\`\`\`java
class Product {

    String name;
    double price;

    Product(
            String name,
            double price) {

        this.name = name;
        this.price = price;

    }

}
\`\`\`

Create the list:

\`\`\`java
LinkedList<Product> products =
        new LinkedList<>();
\`\`\`

Add objects:

\`\`\`java
products.add(
        new Product(
                "Laptop",
                55000));

products.add(
        new Product(
                "Mouse",
                800));
\`\`\`

# ArrayList vs LinkedList

Both implement List, but their internal structures are different.

ArrayList:

- Uses a resizable array.
- Fast index access.
- Efficient addition at the end.
- Requires shifting for middle insertion/removal.
- Does not implement Deque.
- Good for random access.

LinkedList:

- Uses doubly linked nodes.
- Index access is generally slower.
- Efficient operations at the ends.
- Can be useful for operations at both ends.
- Implements Deque.
- Not a strong choice for frequent random access.

# Important Performance Point

It is common to say that insertion and deletion in a linked list are O(1).

That is only true once the correct node position is already known.

If you first need to traverse a long linked list to find that position, locating the position can take O(n) time.

Therefore:

Find position
     ↓
    O(n)

Modify links
     ↓
    O(1)

This distinction is important in interviews.

# When Should You Use LinkedList?

LinkedList can be useful when:

- You need operations at the beginning or end.
- You need Queue behavior.
- You need Deque behavior.
- You specifically need linked-list semantics.

For general-purpose lists with frequent random access, ArrayList is often a better default.

# Example: Task Queue

\`\`\`java
import java.util.LinkedList;
import java.util.Queue;

public class TaskQueue {

    public static void main(String[] args) {

        Queue<String> tasks =
                new LinkedList<>();

        tasks.offer("Compile");
        tasks.offer("Test");
        tasks.offer("Deploy");

        while (!tasks.isEmpty()) {

            System.out.println(
                    "Processing: "
                    + tasks.poll());

        }

    }

}
\`\`\`

Output:

\`\`\`text
Processing: Compile
Processing: Test
Processing: Deploy
\`\`\`

# Common Mistakes

## 1. Assuming LinkedList Is Always Faster

LinkedList is not automatically faster than ArrayList.

For many applications, ArrayList performs better because of efficient index access and better memory locality.

## 2. Assuming Index Access Is Fast

Unlike ArrayList, linked-list index access is generally O(n).

## 3. Using LinkedList for Everything

Do not choose LinkedList simply because insertion and deletion are possible.

Choose it based on the actual access and modification pattern.

# Best Practices

- Prefer List as the variable type when only list operations are required.
- Consider Deque or Queue when queue operations are the actual requirement.
- Use ArrayList for general-purpose lists when frequent index access is needed.
- Use LinkedList when its deque behavior or linked structure provides a meaningful advantage.
- Do not assume linked-list operations are automatically faster.
- Consider both traversal cost and modification cost.

# Interview Questions

## Q1. What is LinkedList?

LinkedList is a Java collection class that implements List, Deque, and Queue and is based on linked nodes.

## Q2. Is LinkedList indexed?

It supports index-based methods because it implements List, but index access is generally slower than in ArrayList.

## Q3. Does LinkedList allow duplicates?

Yes. Like other List implementations, it allows duplicate elements.

## Q4. Can LinkedList be used as a Queue?

Yes. LinkedList implements Queue.

## Q5. Can LinkedList be used as a Deque?

Yes. LinkedList implements Deque.

## Q6. What is the main difference between ArrayList and LinkedList?

ArrayList is backed by a dynamically resizable array, while LinkedList uses linked nodes.

# Key Takeaways

After completing this lesson, you should be able to:

- Explain LinkedList.
- Understand its node-based structure.
- Create a LinkedList.
- Add elements.
- Add elements at the beginning and end.
- Access the first and last elements.
- Remove elements from both ends.
- Use peekFirst() and peekLast().
- Use pollFirst() and pollLast().
- Use LinkedList as a Queue.
- Use LinkedList as a Deque.
- Compare LinkedList and ArrayList.
- Understand the basic performance characteristics.
- Choose LinkedList appropriately.

# Module Progress

✓ Lesson 1 — Introduction to Collections

✓ Lesson 2 — Collection Interfaces

✓ Lesson 3 — List Interface

✓ Lesson 4 — ArrayList

✓ Lesson 5 — LinkedList

→ Lesson 6 — Vector & Stack

Lesson 7 — Queue

Lesson 8 — PriorityQueue

Lesson 9 — Deque

Lesson 10 — Set Interface

Lesson 11 — HashSet

Lesson 12 — LinkedHashSet

Lesson 13 — TreeSet

Lesson 14 — Collection Algorithms

Lesson 15 — Student Record Management System

# Next Lesson

## Lesson 6 — Vector & Stack

You will learn:

- What Vector is.
- Characteristics of Vector.
- Vector methods.
- Thread-safety considerations.
- What Stack is.
- LIFO behavior.
- push().
- pop().
- peek().
- empty().
- search().
- Vector vs ArrayList.
- Stack vs Deque.
- Practical examples.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson5;
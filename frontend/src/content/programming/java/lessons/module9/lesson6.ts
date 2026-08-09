const lesson6 = {

  id: "lesson6",

  title: "Vector & Stack",

  content: `

# Vector & Stack

## Introduction

Vector and Stack are older collection classes that are still part of the Java Collections Framework.

They are important to understand because you may encounter them in:

- Existing Java applications
- Older codebases
- Legacy APIs
- Interview questions

However, for new development, there are often more modern alternatives.

---

# Vector

Vector is a dynamically resizable array implementation.

It is similar to ArrayList because both provide list-like behavior.

The basic relationship is:

List
  │
  ├── ArrayList
  │
  └── Vector

Import:

\`\`\`java
import java.util.Vector;
\`\`\`

---

# Creating a Vector

Example:

\`\`\`java
Vector<String> languages =
        new Vector<>();
\`\`\`

Add elements:

\`\`\`java
languages.add("Java");
languages.add("Python");
languages.add("C++");
\`\`\`

Output:

\`\`\`text
[Java, Python, C++]
\`\`\`

---

# Vector Characteristics

Vector:

- Maintains insertion order
- Allows duplicate elements
- Supports index-based access
- Can dynamically grow
- Implements List
- Provides synchronized methods for many operations

---

# Basic Vector Example

\`\`\`java
import java.util.Vector;

public class VectorExample {

    public static void main(String[] args) {

        Vector<String> languages =
                new Vector<>();

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

---

# Adding Elements

Use:

\`\`\`java
add()
\`\`\`

Example:

\`\`\`java
languages.add("JavaScript");
\`\`\`

You can also use:

\`\`\`java
addElement()
\`\`\`

Example:

\`\`\`java
languages.addElement("SQL");
\`\`\`

addElement() is a legacy method associated with Vector.

For modern collection code, add() is generally preferred.

---

# Accessing Elements

Use:

\`\`\`java
get(index)
\`\`\`

Example:

\`\`\`java
System.out.println(
        languages.get(0));
\`\`\`

Output:

\`\`\`text
Java
\`\`\`

---

# Updating Elements

Use:

\`\`\`java
set(index, element)
\`\`\`

Example:

\`\`\`java
languages.set(
        1,
        "JavaScript");
\`\`\`

Before:

\`\`\`text
[Java, Python, C++]
\`\`\`

After:

\`\`\`text
[Java, JavaScript, C++]
\`\`\`

---

# Removing Elements

You can remove an element by index:

\`\`\`java
languages.remove(1);
\`\`\`

You can also remove an element by object:

\`\`\`java
languages.remove("Java");
\`\`\`

---

# Vector Size

Use:

\`\`\`java
languages.size();
\`\`\`

This returns the number of elements currently stored.

Example:

\`\`\`java
Vector<String> languages =
        new Vector<>();

languages.add("Java");
languages.add("Python");

System.out.println(
        languages.size());
\`\`\`

Output:

\`\`\`text
2
\`\`\`

---

# Vector Capacity

Vector also has a concept of internal capacity.

You can inspect it using:

\`\`\`java
languages.capacity();
\`\`\`

For example:

\`\`\`java
Vector<String> languages =
        new Vector<>(10);
\`\`\`

The initial capacity is 10.

But:

\`\`\`java
languages.size();
\`\`\`

is still:

\`\`\`text
0
\`\`\`

Therefore:

**Size** = number of elements currently stored.

**Capacity** = amount of storage currently available internally.

---

# Vector Initial Capacity

You can specify an initial capacity:

\`\`\`java
Vector<String> languages =
        new Vector<>(20);
\`\`\`

You can also specify an initial capacity and capacity increment:

\`\`\`java
Vector<String> languages =
        new Vector<>(
                10,
                5);
\`\`\`

Here:

- 10 = initial capacity
- 5 = capacity increment

The second value specifies how much the capacity grows when expansion is required.

This is a legacy API detail and is rarely needed in modern application code.

---

# Vector vs ArrayList

Both provide dynamic list behavior.

ArrayList:

- Dynamic array
- Implements List
- Allows duplicates
- Maintains insertion order
- Supports index access
- Does not provide synchronized methods by default
- Usually preferred for modern general-purpose list usage

Vector:

- Dynamic array
- Implements List
- Allows duplicates
- Maintains insertion order
- Supports index access
- Provides synchronized methods
- Mostly encountered in legacy code

---

# Synchronization in Vector

One historical feature of Vector is that many of its methods are synchronized.

This was designed to provide synchronization at the individual method level.

However, synchronization does not automatically make every multi-step operation on a Vector safe.

For modern concurrent programming, Java provides more specialized concurrency utilities.

You will study concurrency in Module 11 — Multithreading & Concurrency.

---

# Stack

Stack represents a Last In, First Out collection.

LIFO means:

**Last In, First Out**

Imagine a stack of plates:

    [Plate 3]  ← Top
    [Plate 2]
    [Plate 1]

The last plate placed on the stack is the first plate removed.

---

# Stack Hierarchy

Stack extends Vector.

Vector
   │
   ↓
 Stack

Import:

\`\`\`java
import java.util.Stack;
\`\`\`

---

# Creating a Stack

Example:

\`\`\`java
Stack<String> stack =
        new Stack<>();
\`\`\`

---

# Push

The push() method adds an element to the top of the stack.

Example:

\`\`\`java
stack.push("Java");
stack.push("Python");
stack.push("C++");
\`\`\`

Stack:

\`\`\`text
C++  ← Top
Python
Java
\`\`\`

The most recently added element is at the top.

---

# Pop

The pop() method removes and returns the top element.

Example:

\`\`\`java
String language =
        stack.pop();
\`\`\`

The removed value is:

\`\`\`text
C++
\`\`\`

The stack becomes:

\`\`\`text
Python  ← Top
Java
\`\`\`

---

# Peek

The peek() method returns the top element without removing it.

Example:

\`\`\`java
System.out.println(
        stack.peek());
\`\`\`

If the stack is:

\`\`\`text
C++  ← Top
Python
Java
\`\`\`

then:

\`\`\`text
peek()
\`\`\`

returns:

\`\`\`text
C++
\`\`\`

The stack remains unchanged.

---

# Empty

Use:

\`\`\`java
stack.empty();
\`\`\`

to check whether the stack contains no elements.

Example:

\`\`\`java
if (stack.empty()) {
    System.out.println(
            "Stack is empty");
}
\`\`\`

You can also use:

\`\`\`java
stack.isEmpty();
\`\`\`

because it is inherited from the collection hierarchy.

---

# Search

Stack provides:

\`\`\`java
search()
\`\`\`

It searches for an element relative to the top of the stack.

Example:

\`\`\`java
int position =
        stack.search("Java");
\`\`\`

The top element has position:

\`\`\`text
1
\`\`\`

The next element:

\`\`\`text
2
\`\`\`

and so on.

If the element is not found:

\`\`\`text
-1
\`\`\`

is returned.

---

# Complete Stack Example

\`\`\`java
import java.util.Stack;

public class StackExample {

    public static void main(String[] args) {

        Stack<String> stack =
                new Stack<>();

        stack.push("Java");
        stack.push("Python");
        stack.push("C++");

        System.out.println(
                stack.peek());

        System.out.println(
                stack.pop());

        System.out.println(
                stack);

    }

}
\`\`\`

Output:

\`\`\`text
C++
C++
[Java, Python]
\`\`\`

---

# Stack Processing Flow

First:

push Java

\`\`\`text
[Java]
\`\`\`

Then:

push Python

\`\`\`text
[Python]
[Java]
\`\`\`

Then:

push C++

\`\`\`text
[C++]
[Python]
[Java]
\`\`\`

Then:

pop

\`\`\`text
[C++] removed

[Python]
[Java]
\`\`\`

The last element inserted is removed first.

---

# Stack and LIFO

The key rule is:

Last In
   ↓
First Out

Example:

Push A

Push B

Push C

Stack:

\`\`\`text
C
B
A
\`\`\`

Then:

\`\`\`text
Pop → C
Pop → B
Pop → A
\`\`\`

Therefore, Stack follows **LIFO**.

---

# Stack vs Queue

Stack and Queue follow different processing rules.

## Stack

LIFO

Last In
   ↓
First Out

Example:

\`\`\`text
A → B → C

Pop → C
\`\`\`

## Queue

FIFO

First In
   ↓
First Out

Example:

\`\`\`text
A → B → C

Poll → A
\`\`\`

Remember:

**Stack → LIFO**

**Queue → FIFO**

---

# Stack vs Deque

Although Stack is still available in Java, modern Java code commonly uses Deque for stack behavior.

Example:

\`\`\`java
Deque<String> stack =
        new ArrayDeque<>();
\`\`\`

Then:

\`\`\`java
stack.push("Java");
stack.push("Python");
stack.push("C++");
\`\`\`

To remove the top element:

\`\`\`java
stack.pop();
\`\`\`

This provides stack behavior without using the legacy Stack class.

---

# Why Prefer Deque for New Stack Code?

Stack is a legacy class that extends Vector.

For new code, Deque implementations such as ArrayDeque are generally preferred for stack operations because they are designed for double-ended queue operations.

Example:

\`\`\`java
Deque<String> stack =
        new ArrayDeque<>();
\`\`\`

The Deque interface will be covered in more detail in Lesson 9.

---

# Practical Example: Browser History

A stack-like structure can model a simplified browser history.

Suppose pages are visited:

Home
  ↓
Products
  ↓
Details

The most recently visited page is:

Details

A back operation removes the latest page:

Details → removed

Current page:

Products

This demonstrates the LIFO concept.

---

# Practical Example: Undo Operations

Undo systems can use stack-like behavior.

Suppose the following actions occur:

Action 1

Action 2

Action 3

Undo should reverse the most recent action first:

\`\`\`text
Undo → Action 3
Undo → Action 2
Undo → Action 1
\`\`\`

This is naturally modeled using LIFO behavior.

---

# Common Mistakes

## 1. Confusing Stack and Queue

Remember:

Stack → LIFO

Queue → FIFO

---

## 2. Using peek() When You Want Removal

peek() only looks at the top element.

\`\`\`java
stack.peek();
\`\`\`

It does not remove the element.

If you want to retrieve and remove the top element, use:

\`\`\`java
stack.pop();
\`\`\`

---

## 3. Confusing Size and Capacity

For Vector:

\`\`\`java
size()
\`\`\`

returns the number of elements currently stored.

While:

\`\`\`java
capacity()
\`\`\`

returns the current internal capacity.

These values are not necessarily the same.

---

## 4. Assuming Vector Synchronization Makes Everything Thread-Safe

Vector provides synchronization for many individual methods.

However, multiple operations performed together may still require additional synchronization or appropriate concurrency utilities.

---

## 5. Choosing Stack for Every LIFO Requirement

Stack is a legacy class.

For new stack-oriented code, consider a Deque implementation such as ArrayDeque.

---

# Best Practices

- Prefer ArrayList for most general-purpose list requirements.
- Understand that Vector is mainly encountered in legacy code.
- Understand that Stack follows LIFO.
- Use push(), pop(), and peek() correctly.
- Prefer Deque implementations such as ArrayDeque for new stack-oriented code.
- Do not assume synchronization of individual methods makes complex operations automatically thread-safe.
- Choose the collection based on the actual problem rather than familiarity.

---

# Interview Questions

## Q1. What is Vector?

Vector is a dynamically resizable array implementation of the List interface and is a legacy collection class with synchronized methods.

---

## Q2. What is Stack?

Stack is a legacy Java collection class that extends Vector and provides LIFO operations.

---

## Q3. What does LIFO mean?

LIFO means:

**Last In, First Out.**

The most recently added element is removed first.

---

## Q4. What is the difference between peek() and pop()?

peek() returns the top element without removing it.

pop() returns and removes the top element.

---

## Q5. What is the difference between Stack and Queue?

Stack follows LIFO.

Queue follows FIFO.

Stack:

\`\`\`text
Last In → First Out
\`\`\`

Queue:

\`\`\`text
First In → First Out
\`\`\`

---

## Q6. Why is Deque often preferred over Stack?

Deque implementations such as ArrayDeque are designed for double-ended operations and are generally preferred for new stack implementations.

---

## Q7. Is Vector synchronized?

Many methods of Vector are synchronized, providing synchronization at the individual method level.

---

## Q8. What is the difference between ArrayList and Vector?

Both are dynamically resizable list implementations.

Vector is a legacy synchronized collection, while ArrayList is the usual modern general-purpose choice when synchronization is not specifically required.

---

## Q9. What is the difference between size() and capacity() in Vector?

size() returns the number of elements currently stored.

capacity() returns the current internal capacity.

---

## Q10. What does Stack.search() return?

search() returns the position of an element relative to the top of the stack.

The top element has position 1.

If the element is not found, it returns -1.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain Vector.
- Understand its relationship with List.
- Create a Vector.
- Add elements to a Vector.
- Access Vector elements.
- Update Vector elements.
- Remove Vector elements.
- Understand Vector size.
- Understand Vector capacity.
- Understand the historical synchronization behavior of Vector.
- Explain Stack.
- Understand Stack inheritance from Vector.
- Understand LIFO behavior.
- Use push().
- Use pop().
- Use peek().
- Use empty().
- Use search().
- Compare Stack and Queue.
- Compare Stack and Deque.
- Understand why Deque is generally preferred for new stack implementations.

---

# Module Progress

✓ Lesson 1 — Introduction to Collections

✓ Lesson 2 — Collection Interfaces

✓ Lesson 3 — List Interface

✓ Lesson 4 — ArrayList

✓ Lesson 5 — LinkedList

✓ Lesson 6 — Vector & Stack

→ Lesson 7 — Queue

Lesson 8 — PriorityQueue

Lesson 9 — Deque

Lesson 10 — Set Interface

Lesson 11 — HashSet

Lesson 12 — LinkedHashSet

Lesson 13 — TreeSet

Lesson 14 — Collection Algorithms

Lesson 15 — Student Record Management System

---

# Next Lesson

## Lesson 7 — Queue

You will learn:

- What a Queue is
- FIFO principle
- Queue interface
- offer()
- add()
- poll()
- remove()
- peek()
- element()
- Queue implementations
- Processing tasks with queues
- Practical examples
- Best Practices
- Interview Questions
- Key Takeaways

`
};

export default lesson6;
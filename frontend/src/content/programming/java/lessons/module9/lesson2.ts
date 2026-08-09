const lesson2 = {

id: "lesson2",

title: "Collection Interfaces",

content: `

# Collection Interfaces

## Introduction

The Java Collections Framework is built around a set of interfaces.



An interface defines the operations that a collection should support, while different classes provide the actual implementation.



The most important collection interfaces for this module are:



Iterable

↓

Collection

├── List

├── Set

└── Queue

        ↓

      Deque



Understanding these interfaces is important because it helps you choose the right collection type without immediately depending on a specific implementation.



# What Is an Interface?

An interface defines a contract for classes.



For example:

\`\`\`java
interface Animal {

    void sound();

}
\`\`\`



A class can implement that interface:

\`\`\`java
class Dog implements Animal {

    public void sound() {

        System.out.println("Bark");

    }

}
\`\`\`



The interface describes:

What the class can do.



The implementation determines:

How it does it.



# Why Collection Interfaces?

Suppose you need a collection of names.



You could declare:

\`\`\`java
ArrayList<String> names =
        new ArrayList<>();
\`\`\`



But you can also declare:

\`\`\`java
List<String> names =
        new ArrayList<>();
\`\`\`



The second approach uses the interface as the variable type.



This provides greater flexibility.



You can later change the implementation:

\`\`\`java
List<String> names =
        new LinkedList<>();
\`\`\`



without changing the rest of the code that only depends on List operations.



# Programming to an Interface

Consider:

\`\`\`java
List<String> languages =
        new ArrayList<>();
\`\`\`



Here:

List<String>

↓

Interface reference



ArrayList<String>

↓

Implementation



This separates:

What the collection should do

from:

How the collection is implemented.



# Iterable Interface

At the top of the basic collection hierarchy is:

Iterable



It represents something that can be iterated over.



An important method is:

\`\`\`java
iterator();
\`\`\`



The enhanced for loop works with objects that are iterable.



Example:

\`\`\`java
for (String name : names) {

    System.out.println(name);

}
\`\`\`



Conceptually:

Iterable

↓

Can be traversed

↓

Element by element



# Collection Interface

Collection is a core interface in the Java Collections Framework.



It represents a group of objects.



It provides common operations such as:

- add()
- remove()
- contains()
- size()
- isEmpty()
- clear()



The major interfaces extending Collection include:



Collection

├── List

├── Set

└── Queue



# Common Collection Methods

Many collection types inherit common methods from Collection.



## add()

Adds an element.



Example:

\`\`\`java
collection.add("Java");
\`\`\`



## remove()

Removes an element.



Example:

\`\`\`java
collection.remove("Java");
\`\`\`



## contains()

Checks whether an element exists.



Example:

\`\`\`java
collection.contains("Java");
\`\`\`



## size()

Returns the number of elements.



Example:

\`\`\`java
collection.size();
\`\`\`



## isEmpty()

Checks whether the collection contains no elements.



Example:

\`\`\`java
collection.isEmpty();
\`\`\`



## clear()

Removes all elements.



Example:

\`\`\`java
collection.clear();
\`\`\`



# List Interface

List represents an ordered collection.



Important characteristics:

- Ordered.
- Indexed.
- Duplicates allowed.



Example:

\`\`\`text
Index
  0        1        2        3
  ↓        ↓        ↓        ↓
Java    Python     Java      C++
\`\`\`



The List interface provides methods such as:

- add()
- get()
- set()
- remove()
- indexOf()
- lastIndexOf()



# Example of List

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class ListExample {

    public static void main(String[] args) {

        List<String> languages =
                new ArrayList<>();

        languages.add("Java");
        languages.add("Python");
        languages.add("C++");

        System.out.println(
                languages.get(1));

    }

}
\`\`\`



Output:

\`\`\`text
Python
\`\`\`



The variable is declared using List while ArrayList provides the implementation.



# Set Interface

Set represents a collection that does not allow duplicate elements.



Example:

\`\`\`java
Set<String> languages =
        new HashSet<>();
\`\`\`



Adding:

\`\`\`java
languages.add("Java");
languages.add("Python");
languages.add("Java");
\`\`\`



The collection contains unique elements.



The exact iteration order depends on the specific Set implementation.



# Set Implementations

The major implementations covered in this module are:



Set

│

├── HashSet

├── LinkedHashSet

└── TreeSet



They differ mainly in characteristics such as:

- Ordering.
- Sorting.
- Performance characteristics.



# Queue Interface

Queue represents a collection designed for holding elements before processing.



A common Queue follows:

FIFO

First In, First Out



Example:

\`\`\`text
First In

↓

[A] [B] [C]

↑

First Out
\`\`\`



The first element added is generally the first element processed in a FIFO queue.



# Queue Methods

Important Queue methods include:

- add()
- offer()
- remove()
- poll()
- element()
- peek()



These methods are useful for:

- Adding elements.
- Removing elements.
- Inspecting the head element.



# Queue Example

\`\`\`java
import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {

    public static void main(String[] args) {

        Queue<String> tasks =
                new LinkedList<>();

        tasks.offer("Task 1");
        tasks.offer("Task 2");
        tasks.offer("Task 3");

        System.out.println(
                tasks);

        System.out.println(
                tasks.poll());

    }

}
\`\`\`



Output:

\`\`\`text
[Task 1, Task 2, Task 3]
Task 1
\`\`\`



# Deque Interface

Deque means:

Double Ended Queue



A Deque allows insertion and removal from both ends.



Conceptually:

Front                     Rear

  ↓                         ↓

[A] [B] [C] [D]

  ↑                         ↑

Add/Remove              Add/Remove



Deque is related to Queue but provides additional operations for both ends.



# Deque Example

\`\`\`java
import java.util.ArrayDeque;
import java.util.Deque;

public class DequeExample {

    public static void main(String[] args) {

        Deque<String> items =
                new ArrayDeque<>();

        items.addFirst("Java");
        items.addLast("Python");

        System.out.println(items);

        items.removeFirst();

        System.out.println(items);

    }

}
\`\`\`



Possible output:

\`\`\`text
[Java, Python]
[Python]
\`\`\`



# Collection Interface Hierarchy

The basic hierarchy can be represented as:



Iterable

↓

Collection

├── List

├── Set

└── Queue

        ↓

      Deque



Then implementations provide the actual collection behavior.



# List Implementations

Common List implementations covered in this module are:



List

│

├── ArrayList

├── LinkedList

├── Vector

└── Stack



They all implement List behavior but have different characteristics.



# Set Implementations

Common Set implementations are:



Set

│

├── HashSet

├── LinkedHashSet

└── TreeSet



Their major differences include:

- Ordering.
- Sorting.
- Performance characteristics.



# Queue Implementations

Queue can be implemented using classes such as:

- LinkedList.
- PriorityQueue.
- ArrayDeque.



Different implementations can provide different ordering behavior.



# Interface vs Implementation

This is one of the most important concepts in the Collections Framework.



Interface:

\`\`\`java
List<String>
\`\`\`



Implementation:

\`\`\`java
ArrayList<String>
\`\`\`



Complete declaration:

\`\`\`java
List<String> languages =
        new ArrayList<>();
\`\`\`



Think of it as:



Interface

↓

Defines what operations are available



Implementation

↓

Defines how those operations work



# Why Program to Interfaces?

Programming to interfaces reduces dependence on a specific implementation.



Example:

\`\`\`java
List<String> languages =
        new ArrayList<>();
\`\`\`



Later you can change:

\`\`\`java
List<String> languages =
        new LinkedList<>();
\`\`\`



The rest of the code can continue using List operations.



This improves:

- Flexibility.
- Maintainability.
- Readability.
- Replaceability.



# Choosing the Correct Interface

First determine what behavior you need.



Need ordered elements?

↓

List



Need unique elements?

↓

Set



Need queue-based processing?

↓

Queue



Need operations at both ends?

↓

Deque



Then choose an appropriate implementation.



# Ordering Characteristics

Different collection interfaces and implementations have different ordering behavior.



List

↓

Maintains element order



Set

↓

Depends on implementation



HashSet

↓

No guaranteed insertion order



LinkedHashSet

↓

Maintains insertion order



TreeSet

↓

Sorted order



Queue

↓

Uses its defined ordering policy



PriorityQueue

↓

Priority-based ordering



# Duplicate Characteristics

List

↓

Duplicates allowed



Set

↓

Duplicates not allowed



Queue

↓

Depends on the implementation and element-handling rules



Deque

↓

Can contain duplicate elements unless the implementation or application imposes another restriction



# Common Mistakes

## 1. Confusing Interface and Class

Incorrect understanding:

List = class

ArrayList = interface



Correct:

List

↓

Interface



ArrayList

↓

Class



# 2. Expecting Indexing in Set

This is not valid:

\`\`\`java
set.get(0);
\`\`\`



A Set does not provide list-style index access.



# 3. Assuming All Sets Preserve Order

Different Set implementations have different ordering characteristics.



HashSet

↓

No guaranteed insertion order



LinkedHashSet

↓

Maintains insertion order



TreeSet

↓

Sorted order



# 4. Choosing an Implementation Before Understanding the Requirement

Do not automatically use:

ArrayList



for every problem.



First determine whether you need:

- List.
- Set.
- Queue.
- Deque.



Then choose an appropriate implementation.



# Collection vs Collections

Remember:



Collection

↓

Interface



Collections

↓

Utility Class



For example:

\`\`\`java
Collections.sort(list);
\`\`\`



uses the Collections utility class.



It does not refer to the Collection interface.



# Best Practices

Follow these practices:

- Program to interfaces where practical.
- Understand the behavior required before selecting an implementation.
- Use generics with collection interfaces.
- Do not assume all collections support indexing.
- Understand ordering characteristics.
- Understand duplicate-element behavior.
- Use the narrowest interface that provides the operations your code actually needs.



# Interview Questions

## Q1. What is the Collection interface?

### Answer:

Collection is a core interface representing a group of objects and providing common operations for working with those objects.



## Q2. What is the difference between List and Set?

### Answer:

List is ordered and generally allows duplicates, while Set does not allow duplicate elements.



## Q3. What is the difference between Queue and Deque?

### Answer:

A Queue is designed for queue-based processing, while a Deque supports insertion and removal at both ends.



## Q4. Why should you program to an interface?

### Answer:

Programming to an interface reduces dependence on a specific implementation and makes it easier to replace the implementation when needed.



## Q5. What is the difference between Collection and Collections?

### Answer:

Collection is an interface, while Collections is a utility class containing static methods for operating on collections.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain the role of collection interfaces.
- Understand Iterable.
- Understand the Collection interface.
- Understand List.
- Understand Set.
- Understand Queue.
- Understand Deque.
- Identify common methods of each interface.
- Understand interface versus implementation.
- Program to collection interfaces.
- Choose an interface based on the required behavior.
- Understand basic ordering rules.
- Understand duplicate-element rules.



# Module Progress

✓ Lesson 1 — Introduction to Collections

✓ Lesson 2 — Collection Interfaces

→ Lesson 3 — List Interface

Lesson 4 — ArrayList

Lesson 5 — LinkedList

Lesson 6 — Vector & Stack

Lesson 7 — Queue

Lesson 8 — PriorityQueue

Lesson 9 — Deque

Lesson 10 — Set Interface

Lesson 11 — HashSet

Lesson 12 — LinkedHashSet

Lesson 13 — TreeSet

Lesson 14 — Collection Algorithms

Lesson 15 — Student Record Management System & Assessment



# Next Lesson

## Lesson 3 — List Interface

You will learn:

- What a List is.
- Characteristics of lists.
- Index-based access.
- Duplicate elements.
- add().
- get().
- set().
- remove().
- contains().
- indexOf().
- lastIndexOf().
- Iterating through lists.
- Practical examples.
- Interview questions.
- Key Takeaways.

`

};

export default lesson2;
const lesson4 = {

id: "lesson4",

title: "ArrayList",

content: `

# ArrayList

## Introduction

ArrayList is one of the most commonly used collection classes in Java.

It is an implementation of the List interface and provides a dynamically resizable array.

Instead of using a fixed-size array:

\`\`\`java
String[] languages =
        new String[5];
\`\`\`

you can use:

\`\`\`java
ArrayList<String> languages =
        new ArrayList<>();
\`\`\`

The ArrayList can grow as elements are added.

# What Is ArrayList?

ArrayList is a class in:

java.util

It implements the List interface.

The relationship is:

List
  │
  └── ArrayList

Import:

\`\`\`java
import java.util.ArrayList;
\`\`\`

# Creating an ArrayList

Syntax:

\`\`\`java
ArrayList<Type> list =
        new ArrayList<>();
\`\`\`

Example:

\`\`\`java
ArrayList<String> languages =
        new ArrayList<>();
\`\`\`

A more flexible declaration is:

\`\`\`java
List<String> languages =
        new ArrayList<>();
\`\`\`

The second form is generally preferred when you only need List operations.

# Example 1: Basic ArrayList

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class ArrayListExample1 {

    public static void main(String[] args) {

        List<String> languages =
                new ArrayList<>();

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

# Dynamic Size

One major advantage of ArrayList is that its size can grow dynamically.

Example:

\`\`\`java
List<String> languages =
        new ArrayList<>();
\`\`\`

Initially:

\`\`\`text
[]
\`\`\`

After adding:

\`\`\`text
[Java]
\`\`\`

Then:

\`\`\`text
[Java, Python]
\`\`\`

Then:

\`\`\`text
[Java, Python, C++]
\`\`\`

You do not need to specify a fixed maximum number of elements when creating the list.

# ArrayList and Arrays

Compare:

## Array

\`\`\`java
String[] languages =
        new String[3];
\`\`\`

The size is fixed.

## ArrayList

\`\`\`java
ArrayList<String> languages =
        new ArrayList<>();
\`\`\`

The collection can dynamically grow and shrink.

# Adding Elements

Use:

\`\`\`java
add()
\`\`\`

Example:

\`\`\`java
languages.add("Java");
languages.add("Python");
languages.add("C++");
\`\`\`

Result:

\`\`\`text
[Java, Python, C++]
\`\`\`

# Adding at an Index

You can insert an element at a specific position.

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

The elements after the insertion point are shifted.

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

# Updating Elements

Use:

\`\`\`java
set(index, element)
\`\`\`

Example:

\`\`\`java
languages.set(
        1,
        "SQL");
\`\`\`

Before:

\`\`\`text
[Java, Python, C++]
\`\`\`

After:

\`\`\`text
[Java, SQL, C++]
\`\`\`

# Removing Elements

You can remove by index:

\`\`\`java
languages.remove(1);
\`\`\`

or by object:

\`\`\`java
languages.remove("Python");
\`\`\`

The behavior is inherited from the List interface.

# Example 2: Basic Operations

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class ArrayListExample2 {

    public static void main(String[] args) {

        List<String> languages =
                new ArrayList<>();

        languages.add("Java");
        languages.add("Python");
        languages.add("C++");

        System.out.println(
                languages.get(1));

        languages.set(
                1,
                "JavaScript");

        languages.remove(2);

        System.out.println(languages);

    }

}
\`\`\`

Output:

\`\`\`text
Python
[Java, JavaScript]
\`\`\`

# Checking Size

Use:

\`\`\`java
languages.size();
\`\`\`

Example:

\`\`\`java
System.out.println(
        languages.size());
\`\`\`

# Checking for an Element

Use:

\`\`\`java
languages.contains("Java");
\`\`\`

Example:

\`\`\`java
if (languages.contains("Java")) {

    System.out.println(
            "Java is available.");

}
\`\`\`

# Finding an Element

Use:

\`\`\`java
languages.indexOf("Python");
\`\`\`

If the element exists, its index is returned.

If it does not exist:

\`\`\`text
-1
\`\`\`

is returned.

# Iterating Through ArrayList

## Enhanced For Loop

\`\`\`java
for (String language :
        languages) {

    System.out.println(language);

}
\`\`\`

## Traditional For Loop

\`\`\`java
for (int i = 0;
     i < languages.size();
     i++) {

    System.out.println(
            languages.get(i));

}
\`\`\`

## forEach

\`\`\`java
languages.forEach(
        language ->
                System.out.println(language));
\`\`\`

# ArrayList with Integers

Use wrapper classes:

\`\`\`java
ArrayList<Integer> numbers =
        new ArrayList<>();
\`\`\`

Example:

\`\`\`java
numbers.add(10);
numbers.add(20);
numbers.add(30);
\`\`\`

Output:

\`\`\`text
[10, 20, 30]
\`\`\`

Java automatically boxes the primitive int values into Integer objects in this context.

# ArrayList with Objects

You can store custom objects.

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

Create a list:

\`\`\`java
List<Product> products =
        new ArrayList<>();
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

This allows an application to manage many product objects together.

# ArrayList Capacity

Internally, an ArrayList uses an array-like structure.

It maintains:

Size

and

Internal storage capacity.

When the current internal storage is insufficient, the implementation expands its internal array and copies the existing elements into the larger storage.

You normally do not need to manage this resizing yourself.

# Size vs Capacity

These concepts are different.

## Size

Size is the number of elements currently stored.

Example:

\`\`\`text
[Java, Python, C++]

Size:
3
\`\`\`

## Capacity

Capacity is the amount of internal storage currently available before another resize is needed.

Capacity is an implementation detail and should not be confused with the number of elements currently stored.

# Initial Capacity

You can provide an initial capacity:

\`\`\`java
ArrayList<String> languages =
        new ArrayList<>(100);
\`\`\`

This does not mean the list contains 100 elements.

It means the implementation starts with room intended for that many elements before needing to resize.

The size is still:

\`\`\`text
0
\`\`\`

# Example 3: Initial Capacity

\`\`\`java
import java.util.ArrayList;

public class ArrayListCapacityExample {

    public static void main(String[] args) {

        ArrayList<String> languages =
                new ArrayList<>(100);

        System.out.println(
                languages.size());

    }

}
\`\`\`

Output:

\`\`\`text
0
\`\`\`

The list is empty even though an initial capacity was specified.

# ArrayList and Index Access

ArrayList provides efficient direct access by index in typical usage.

Example:

\`\`\`java
languages.get(500);
\`\`\`

The implementation can directly access the corresponding position in its underlying array structure.

This is one of the main reasons ArrayList is useful when frequent index-based access is required.

# Insertion and Removal

Index-based insertion or removal in the middle of an ArrayList can require elements after that position to be shifted.

Example:

Before:

\`\`\`text
[A] [B] [C] [D]
\`\`\`

Insert X at index 1:

\`\`\`text
[A] [X] [B] [C] [D]
\`\`\`

Elements after the insertion point need to move.

Similarly, removing an element from the middle can require elements to shift left.

# Performance Overview

For typical ArrayList behavior:

Access by index
→ O(1)

Add at end
→ O(1) amortized

Insert in middle
→ O(n)

Remove from middle
→ O(n)

Search with contains()
→ O(n)

Search with indexOf()
→ O(n)

These are typical complexity characteristics, not guarantees that every operation always takes exactly that amount of time.

# ArrayList vs Array

Array:

- Fixed size.
- Can store primitives directly.
- Basic structure.
- Uses .length.
- Limited built-in operations.
- Can be more lightweight.

ArrayList:

- Dynamically resizable.
- Stores objects.
- Collection class.
- Uses .size().
- Provides many collection methods.
- More flexible for collection operations.

# ArrayList vs LinkedList

Both implement List.

## ArrayList

Uses a dynamically resizable array internally.

Good when:

- Index-based access is frequent.
- Random access is important.
- Most additions happen near the end.

## LinkedList

Uses linked nodes.

Good when:

- You need operations at the ends.
- Queue or deque behavior is useful.
- You specifically need linked-list semantics.

For many general-purpose list use cases, ArrayList is a strong default choice.

# Example 4: Student Names

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class StudentListExample {

    public static void main(String[] args) {

        List<String> names =
                new ArrayList<>();

        names.add("Alex");
        names.add("Jordan");
        names.add("Taylor");
        names.add("Morgan");

        System.out.println(
                "Total: "
                + names.size());

        System.out.println(
                "First: "
                + names.get(0));

        System.out.println(
                "Contains Jordan: "
                + names.contains("Jordan"));

        for (String name : names) {

            System.out.println(name);

        }

    }

}
\`\`\`

# Example 5: Removing Data

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class ArrayListRemoveExample {

    public static void main(String[] args) {

        List<String> tasks =
                new ArrayList<>();

        tasks.add("Study");
        tasks.add("Practice");
        tasks.add("Project");

        tasks.remove("Practice");

        System.out.println(tasks);

    }

}
\`\`\`

Output:

\`\`\`text
[Study, Project]
\`\`\`

# Common Mistakes

## 1. Using List<int>

Incorrect:

\`\`\`java
List<int> numbers;
\`\`\`

Correct:

\`\`\`java
List<Integer> numbers;
\`\`\`

## 2. Confusing Size and Capacity

This:

\`\`\`java
new ArrayList<>(100);
\`\`\`

does not create 100 elements.

The list still has:

\`\`\`text
size = 0
\`\`\`

## 3. Accessing an Invalid Index

If the list contains:

\`\`\`text
[A, B, C]
\`\`\`

then:

\`\`\`java
list.get(3);
\`\`\`

is invalid.

Valid indexes are:

\`\`\`text
0
1
2
\`\`\`

## 4. Removing the Wrong Integer

For:

\`\`\`java
List<Integer> numbers =
        new ArrayList<>();
\`\`\`

this:

\`\`\`java
numbers.remove(1);
\`\`\`

removes the element at index 1.

To remove the value 1:

\`\`\`java
numbers.remove(
        Integer.valueOf(1));
\`\`\`

# Best Practices

- Prefer List as the variable type when possible.
- Use ArrayList when frequent index-based access is required.
- Use generics for type safety.
- Provide an initial capacity when you have a reasonable estimate of the expected size.
- Avoid unnecessary insertion and removal in the middle of very large lists.
- Do not confuse size() with internal capacity.
- Use enhanced for loops when you do not need indexes.
- Use get() when index-based access is actually required.

# Interview Questions

## Q1. What is ArrayList?

ArrayList is a resizable-array implementation of the List interface.

## Q2. Does ArrayList allow duplicates?

Yes. ArrayList allows duplicate elements.

## Q3. Does ArrayList maintain insertion order?

Yes. Elements are maintained according to their list order.

## Q4. Is ArrayList dynamically sized?

Yes. Its internal storage can grow as elements are added.

## Q5. What is the typical time complexity of get() in ArrayList?

O(1) for direct index access.

## Q6. What happens when an element is inserted into the middle of an ArrayList?

Elements after the insertion position may need to be shifted to make room.

## Q7. What is the difference between size and capacity?

Size is the number of elements currently stored.

Capacity is the amount of internal storage available before another resize is needed.

# Key Takeaways

After completing this lesson, you should be able to:

- Explain what ArrayList is.
- Understand its relationship with List.
- Create an ArrayList.
- Add elements.
- Insert elements at a specific index.
- Access elements using get().
- Update elements using set().
- Remove elements.
- Search for elements.
- Iterate through an ArrayList.
- Store primitive wrapper types.
- Store custom objects.
- Understand dynamic resizing.
- Understand size and capacity.
- Understand basic performance characteristics.
- Compare ArrayList with arrays.
- Compare ArrayList with LinkedList.

# Module Progress

✓ Lesson 1 — Introduction to Collections

✓ Lesson 2 — Collection Interfaces

✓ Lesson 3 — List Interface

✓ Lesson 4 — ArrayList

→ Lesson 5 — LinkedList

Lesson 6 — Vector & Stack

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

## Lesson 5 — LinkedList

You will learn:

- What LinkedList is.
- Linked-list structure.
- Nodes.
- Doubly linked lists.
- Creating a LinkedList.
- Adding elements.
- Removing elements.
- Accessing elements.
- First and last element operations.
- LinkedList as a List.
- LinkedList as a Queue.
- LinkedList as a Deque.
- ArrayList vs LinkedList.
- Performance characteristics.
- Practical examples.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson4;
const lesson3 = {

id: "lesson3",

title: "List Interface",

content: `

# List Interface

## Introduction

A List is one of the most commonly used interfaces in the Java Collections Framework.

A list represents an ordered collection of elements.

Unlike a Set, a List:

- Maintains element order.
- Allows duplicate elements.
- Provides index-based access.
- Allows elements to be inserted or removed at specific positions.

Example:

Index
  0        1        2        3
  ↓        ↓        ↓        ↓
Java    Python     Java      C++

Here, Java appears twice because lists allow duplicate elements.

# List Interface

The List interface belongs to:

java.util

Import:

\`\`\`java
import java.util.List;
\`\`\`

The List interface is implemented by several classes, including:

List
 │
 ├── ArrayList
 ├── LinkedList
 ├── Vector
 └── Stack

You will study these implementations throughout this module.

# Creating a List

Because List is an interface, you normally create an object using one of its implementations.

Example:

\`\`\`java
List<String> languages =
        new ArrayList<>();
\`\`\`

Here:

List<String>
     ↓
Interface reference

ArrayList<>
     ↓
Implementation

# Example 1: Creating a List

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class ListExample1 {

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

# Characteristics of a List

A list has several important characteristics.

## 1. Ordered

The elements maintain their order.

\`\`\`text
[Java, Python, C++]
\`\`\`

The order is:

Java → Python → C++

## 2. Allows Duplicates

You can add the same value multiple times.

\`\`\`java
languages.add("Java");
languages.add("Java");
\`\`\`

The list can contain:

\`\`\`text
[Java, Java]
\`\`\`

## 3. Index-Based

Every element has an index.

\`\`\`text
Index
  0        1        2
  ↓        ↓        ↓
Java    Python     C++
\`\`\`

Indexes start at 0.

## 4. Dynamic Size

Unlike a normal array, a list can grow and shrink as elements are added or removed.

Add
 ↓
List grows

Remove
 ↓
List shrinks

# Adding Elements

The add() method adds an element to the list.

\`\`\`java
languages.add("Java");
\`\`\`

Example:

\`\`\`java
List<String> languages =
        new ArrayList<>();

languages.add("Java");
languages.add("Python");
languages.add("C++");
\`\`\`

Result:

\`\`\`text
[Java, Python, C++]
\`\`\`

# Adding at a Specific Index

You can insert an element at a particular position.

Syntax:

\`\`\`java
list.add(index, element);
\`\`\`

Example:

\`\`\`java
languages.add(1, "JavaScript");
\`\`\`

Before:

\`\`\`text
[Java, Python, C++]
\`\`\`

After:

\`\`\`text
[Java, JavaScript, Python, C++]
\`\`\`

The existing elements are shifted to make room.

# Example 2: Adding at an Index

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class ListExample2 {

    public static void main(String[] args) {

        List<String> languages =
                new ArrayList<>();

        languages.add("Java");
        languages.add("Python");
        languages.add("C++");

        languages.add(
                1,
                "JavaScript");

        System.out.println(languages);

    }

}
\`\`\`

Output:

\`\`\`text
[Java, JavaScript, Python, C++]
\`\`\`

# Accessing Elements

Use:

\`\`\`java
get(index)
\`\`\`

Example:

\`\`\`java
String language =
        languages.get(1);
\`\`\`

If the list is:

\`\`\`text
[Java, Python, C++]
\`\`\`

then:

\`\`\`java
languages.get(1);
\`\`\`

returns:

\`\`\`text
Python
\`\`\`

# Example 3: Accessing Elements

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class ListExample3 {

    public static void main(String[] args) {

        List<String> languages =
                new ArrayList<>();

        languages.add("Java");
        languages.add("Python");
        languages.add("C++");

        System.out.println(
                languages.get(0));

        System.out.println(
                languages.get(2));

    }

}
\`\`\`

Output:

\`\`\`text
Java
C++
\`\`\`

# Updating an Element

Use:

\`\`\`java
set(index, element)
\`\`\`

to replace an existing element.

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

# Example 4: Updating a List

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class ListExample4 {

    public static void main(String[] args) {

        List<String> languages =
                new ArrayList<>();

        languages.add("Java");
        languages.add("Python");
        languages.add("C++");

        languages.set(
                1,
                "JavaScript");

        System.out.println(languages);

    }

}
\`\`\`

Output:

\`\`\`text
[Java, JavaScript, C++]
\`\`\`

# Removing Elements

There are different ways to remove elements from a list.

You can remove by index:

\`\`\`java
languages.remove(1);
\`\`\`

or remove a specific object:

\`\`\`java
languages.remove("Python");
\`\`\`

# Removing by Index

Suppose:

\`\`\`text
[Java, Python, C++]
\`\`\`

Then:

\`\`\`java
languages.remove(1);
\`\`\`

produces:

\`\`\`text
[Java, C++]
\`\`\`

# Removing by Object

Suppose:

\`\`\`text
[Java, Python, C++]
\`\`\`

Then:

\`\`\`java
languages.remove("Python");
\`\`\`

produces:

\`\`\`text
[Java, C++]
\`\`\`

The first matching occurrence is removed.

# Important Integer Example

When working with List<Integer>, be careful about:

\`\`\`java
list.remove(1);
\`\`\`

This refers to removing the element at index 1.

If you want to remove the integer value 1, use:

\`\`\`java
list.remove(Integer.valueOf(1));
\`\`\`

This distinction occurs because of method overloading.

# Checking for an Element

Use:

\`\`\`java
contains()
\`\`\`

Example:

\`\`\`java
if (languages.contains("Java")) {

    System.out.println(
            "Java is present.");

}
\`\`\`

The method returns:

\`\`\`text
true
\`\`\`

or:

\`\`\`text
false
\`\`\`

# Finding an Element's Index

Use:

\`\`\`java
indexOf()
\`\`\`

Example:

\`\`\`java
int index =
        languages.indexOf("Python");
\`\`\`

If the list is:

\`\`\`text
[Java, Python, C++]
\`\`\`

the result is:

\`\`\`text
1
\`\`\`

If the element does not exist, indexOf() returns:

\`\`\`text
-1
\`\`\`

# lastIndexOf()

When duplicates exist, lastIndexOf() returns the index of the last matching occurrence.

Example:

\`\`\`java
List<String> languages =
        new ArrayList<>();

languages.add("Java");
languages.add("Python");
languages.add("Java");
\`\`\`

The list is:

\`\`\`text
[Java, Python, Java]
\`\`\`

Then:

\`\`\`java
languages.indexOf("Java");
\`\`\`

returns:

\`\`\`text
0
\`\`\`

while:

\`\`\`java
languages.lastIndexOf("Java");
\`\`\`

returns:

\`\`\`text
2
\`\`\`

# Checking the Size

Use:

\`\`\`java
languages.size();
\`\`\`

Example:

\`\`\`java
System.out.println(
        languages.size());
\`\`\`

For:

\`\`\`text
[Java, Python, C++]
\`\`\`

the result is:

\`\`\`text
3
\`\`\`

# Checking Whether a List Is Empty

Use:

\`\`\`java
languages.isEmpty();
\`\`\`

Example:

\`\`\`java
if (languages.isEmpty()) {

    System.out.println(
            "List is empty.");

}
\`\`\`

# Removing All Elements

Use:

\`\`\`java
languages.clear();
\`\`\`

Before:

\`\`\`text
[Java, Python, C++]
\`\`\`

After:

\`\`\`text
[]
\`\`\`

# Iterating Through a List

The enhanced for loop is a simple way to process every element.

\`\`\`java
for (String language : languages) {

    System.out.println(language);

}
\`\`\`

Output:

\`\`\`text
Java
Python
C++
\`\`\`

# Using a Traditional for Loop

Because lists support indexes, you can also use:

\`\`\`java
for (int i = 0;
     i < languages.size();
     i++) {

    System.out.println(
            languages.get(i));

}
\`\`\`

This is useful when you need the index.

# Example 5: Iterating Through a List

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class ListExample5 {

    public static void main(String[] args) {

        List<String> languages =
                new ArrayList<>();

        languages.add("Java");
        languages.add("Python");
        languages.add("C++");

        for (int i = 0;
             i < languages.size();
             i++) {

            System.out.println(
                    i + ": "
                    + languages.get(i));

        }

    }

}
\`\`\`

Output:

\`\`\`text
0: Java
1: Python
2: C++
\`\`\`

# Using forEach()

You can also use:

\`\`\`java
languages.forEach(
        language ->
                System.out.println(language));
\`\`\`

This is useful for concise iteration.

# Replacing Elements

The set() method replaces an element at a specific index.

\`\`\`java
list.set(
        0,
        "New Value");
\`\`\`

It does not increase the size of the list.

For example:

Before:

\`\`\`text
[Java, Python, C++]
\`\`\`

set(1, "SQL")

After:

\`\`\`text
[Java, SQL, C++]
\`\`\`

# List and Null Values

Most general-purpose list implementations allow null values.

Example:

\`\`\`java
List<String> values =
        new ArrayList<>();

values.add("Java");
values.add(null);
values.add("Python");
\`\`\`

Result:

\`\`\`text
[Java, null, Python]
\`\`\`

Whether null is permitted and how it behaves can depend on the particular implementation or API being used.

# List of Integers

Collections use wrapper classes for primitive values.

Use:

\`\`\`java
List<Integer> numbers =
        new ArrayList<>();
\`\`\`

not:

\`\`\`java
List<int>
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

Java automatically handles boxing between int and Integer in these common cases.

# List of Objects

Lists can store custom objects.

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

Then:

\`\`\`java
List<Product> products =
        new ArrayList<>();
\`\`\`

You can add objects:

\`\`\`java
products.add(
        new Product(
                "Laptop",
                55000));

products.add(
        new Product(
                "Keyboard",
                1500));
\`\`\`

This is one of the most important real-world uses of lists.

# List Methods Summary

add()
→ Adds an element

add(index, element)
→ Inserts at an index

get()
→ Retrieves an element

set()
→ Replaces an element

remove()
→ Removes an element

contains()
→ Checks whether an element exists

indexOf()
→ Finds the first matching index

lastIndexOf()
→ Finds the last matching index

size()
→ Returns the number of elements

isEmpty()
→ Checks whether the list is empty

clear()
→ Removes all elements

# Common Mistakes

## 1. Accessing an Invalid Index

For:

\`\`\`text
[Java, Python, C++]
\`\`\`

this is invalid:

\`\`\`java
languages.get(3);
\`\`\`

Valid indexes are:

\`\`\`text
0
1
2
\`\`\`

An invalid index results in an IndexOutOfBoundsException.

## 2. Confusing remove() Overloads

With integer lists:

\`\`\`java
list.remove(1);
\`\`\`

means remove the element at index 1.

To remove the value 1:

\`\`\`java
list.remove(Integer.valueOf(1));
\`\`\`

## 3. Using set() to Add a New Element

This is incorrect if the index does not already exist:

\`\`\`java
list.set(5, "Java");
\`\`\`

set() replaces an existing element.

Use:

\`\`\`java
list.add("Java");
\`\`\`

to add a new element.

# Best Practices

- Use the List interface when the implementation does not need to be exposed.
- Use generics to maintain type safety.
- Use get() only with valid indexes.
- Use set() for replacement.
- Use add() for insertion.
- Understand the difference between removing by index and removing by object.
- Choose the list implementation according to application requirements.

# Interview Questions

## Q1. What is a List?

A List is an ordered collection that generally allows duplicate elements and supports index-based access.

## Q2. Does List allow duplicates?

Yes. A List generally allows duplicate elements.

## Q3. Does List maintain insertion order?

Yes. Lists maintain their defined element order.

## Q4. What is the difference between get() and set()?

get() retrieves an element, while set() replaces an existing element at a specified index.

## Q5. What is the difference between add() and set()?

add() inserts an element, while set() replaces an existing element.

# Key Takeaways

After completing this lesson, you should be able to:

- Explain the List interface.
- Understand list characteristics.
- Create lists using implementations such as ArrayList.
- Add elements.
- Insert elements at a specific index.
- Access elements using get().
- Update elements using set().
- Remove elements.
- Search using contains().
- Find indexes using indexOf() and lastIndexOf().
- Check list size.
- Check whether a list is empty.
- Clear a list.
- Iterate through a list.
- Store objects in lists.
- Understand common List mistakes.

# Module Progress

✓ Lesson 1 — Introduction to Collections

✓ Lesson 2 — Collection Interfaces

✓ Lesson 3 — List Interface

→ Lesson 4 — ArrayList

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

Lesson 15 — Student Record Management System

# Next Lesson

## Lesson 4 — ArrayList

You will learn:

- What ArrayList is.
- Internal working concept.
- Dynamic resizing.
- Creating an ArrayList.
- Adding elements.
- Accessing elements.
- Updating elements.
- Removing elements.
- Searching.
- Iteration.
- Performance characteristics.
- ArrayList vs Array.
- ArrayList vs LinkedList.
- Practical examples.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson3;
const lesson12 = {

  id: "lesson12",

  title: "LinkedHashSet",

  content: `

# LinkedHashSet

## Introduction

LinkedHashSet is an implementation of the Set interface that stores unique elements while maintaining insertion order.

It combines the uniqueness behavior of a Set with predictable insertion-order iteration.

Set

↓

LinkedHashSet

---

# What Is LinkedHashSet?

LinkedHashSet is a class in:

java.util

Import:

\`\`\`java
import java.util.LinkedHashSet;
\`\`\`

Create one:

\`\`\`java
LinkedHashSet<String> languages =
        new LinkedHashSet<>();
\`\`\`

Or use the interface:

\`\`\`java
Set<String> languages =
        new LinkedHashSet<>();
\`\`\`

---

# Main Characteristics

A LinkedHashSet:

- Stores unique elements.
- Maintains insertion order during iteration.
- Supports normal set operations.
- Does not provide index-based access.
- Uses hashing for membership and uniqueness.
- Maintains additional links to preserve insertion order.

---

# HashSet vs LinkedHashSet

Consider:

\`\`\`java
Set<String> languages =
        new HashSet<>();
\`\`\`

and:

\`\`\`java
Set<String> languages =
        new LinkedHashSet<>();
\`\`\`

Both prevent duplicates.

The important difference is:

HashSet

↓

No guaranteed insertion order

LinkedHashSet

↓

Insertion order maintained

---

# Example: Insertion Order

\`\`\`java
import java.util.LinkedHashSet;
import java.util.Set;

public class LinkedHashSetExample {

    public static void main(String[] args) {

        Set<String> languages =
                new LinkedHashSet<>();

        languages.add("Java");
        languages.add("Python");
        languages.add("C++");
        languages.add("SQL");

        for (String language :
                languages) {

            System.out.println(language);

        }

    }

}
\`\`\`

Output:

\`\`\`text
Java
Python
C++
SQL
\`\`\`

The iteration follows insertion order.

---

# Duplicate Elements

Like all sets, LinkedHashSet does not retain duplicate elements.

Example:

\`\`\`java
languages.add("Java");
languages.add("Python");
languages.add("Java");
\`\`\`

Only one logical "Java" element is retained.

---

# add() Return Value

The add() method returns:

true

when a new element is added.

It returns:

false

when the element already exists.

Example:

\`\`\`java
System.out.println(
        languages.add("Java"));

System.out.println(
        languages.add("Java"));
\`\`\`

Output:

\`\`\`text
true
false
\`\`\`

---

# Checking Elements

Use:

\`\`\`java
languages.contains("Java");
\`\`\`

Example:

\`\`\`java
if (languages.contains("Java")) {

    System.out.println(
            "Java exists.");

}
\`\`\`

---

# Removing Elements

Use:

\`\`\`java
languages.remove("Python");
\`\`\`

The specified element is removed if it exists.

The remaining elements continue to follow their insertion-order relationship.

---

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

---

# Checking Whether It Is Empty

Use:

\`\`\`java
languages.isEmpty();
\`\`\`

This checks whether the set contains no elements.

---

# Clearing the Set

Use:

\`\`\`java
languages.clear();
\`\`\`

This removes all elements.

---

# Iterating Through LinkedHashSet

You can use:

\`\`\`java
for (String language :
        languages) {

    System.out.println(language);

}
\`\`\`

Unlike HashSet, LinkedHashSet provides predictable insertion-order iteration.

---

# No Index-Based Access

Even though insertion order is maintained, LinkedHashSet is still a Set.

Therefore, this is invalid:

\`\`\`java
languages.get(0);
\`\`\`

If you need index-based operations, use a List.

---

# LinkedHashSet and Null

LinkedHashSet permits a single null element.

Example:

\`\`\`java
Set<String> values =
        new LinkedHashSet<>();

values.add(null);
values.add(null);
\`\`\`

Only one null is retained.

---

# How LinkedHashSet Maintains Order

Conceptually, LinkedHashSet uses:

Hash-based storage

+

Linked ordering information

The hash-based structure supports efficient membership operations, while linked ordering information allows iteration to follow insertion order.

---

# Simplified Internal Concept

Suppose elements are inserted:

Java

Python

C++

The structure conceptually maintains:

Java → Python → C++

while also using hash-based lookup.

The actual implementation is more detailed, but this model helps understand why LinkedHashSet can provide predictable insertion-order iteration.

---

# LinkedHashSet with Integers

Example:

\`\`\`java
Set<Integer> numbers =
        new LinkedHashSet<>();

numbers.add(30);
numbers.add(10);
numbers.add(20);
numbers.add(10);
\`\`\`

Iteration produces:

30

10

20

The duplicate 10 is ignored.

Notice that the values are not sorted.

The order is based on insertion:

30 → 10 → 20

---

# LinkedHashSet vs TreeSet

Consider:

LinkedHashSet

↓

Insertion order

TreeSet

↓

Sorted order

Example:

\`\`\`java
Set<Integer> numbers =
        new LinkedHashSet<>();

numbers.add(30);
numbers.add(10);
numbers.add(20);
\`\`\`

Iteration:

30

10

20

With TreeSet:

\`\`\`java
Set<Integer> numbers =
        new TreeSet<>();

numbers.add(30);
numbers.add(10);
numbers.add(20);
\`\`\`

Iteration:

10

20

30

---

# Set Implementation Comparison

HashSet:

- Duplicates → No
- Insertion order → Not guaranteed
- Sorted order → No
- Index access → No
- Main idea → Hashing

LinkedHashSet:

- Duplicates → No
- Insertion order → Yes
- Sorted order → No
- Index access → No
- Main idea → Hashing + insertion order

TreeSet:

- Duplicates → No
- Insertion order → No
- Sorted order → Yes
- Index access → No
- Main idea → Sorted tree structure

---

# LinkedHashSet with Custom Objects

You can store custom objects:

\`\`\`java
class Product {

    String name;

    Product(String name) {
        this.name = name;
    }

}
\`\`\`

Then:

\`\`\`java
Set<Product> products =
        new LinkedHashSet<>();
\`\`\`

For logical duplicate detection, custom classes should implement equals() and hashCode() consistently.

---

# Example with Custom Objects

\`\`\`java
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

class Product {

    String name;

    Product(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object obj) {

        if (this == obj) {
            return true;
        }

        if (!(obj instanceof Product)) {
            return false;
        }

        Product other =
                (Product) obj;

        return Objects.equals(
                name,
                other.name);
    }

    @Override
    public int hashCode() {

        return Objects.hash(name);

    }

    @Override
    public String toString() {

        return name;

    }

}

public class LinkedHashSetObjectExample {

    public static void main(String[] args) {

        Set<Product> products =
                new LinkedHashSet<>();

        products.add(
                new Product("Laptop"));

        products.add(
                new Product("Mouse"));

        products.add(
                new Product("Laptop"));

        System.out.println(products);

    }

}
\`\`\`

The output maintains insertion order while eliminating the duplicate logical product.

---

# Removing and Re-Adding an Element

Suppose:

\`\`\`text
[Java, Python, C++]
\`\`\`

Remove Python:

\`\`\`java
languages.remove("Python");
\`\`\`

Then add it again:

\`\`\`java
languages.add("Python");
\`\`\`

The resulting insertion order is:

\`\`\`text
[Java, C++, Python]
\`\`\`

The re-added element is treated as a new insertion for ordering purposes.

---

# Practical Example: Recent Search Terms

Suppose an application wants to:

- Remove duplicate search terms.
- Preserve the order in which terms were first encountered.

A LinkedHashSet is suitable.

\`\`\`java
Set<String> searches =
        new LinkedHashSet<>();

searches.add("Java");
searches.add("Python");
searches.add("Java");
searches.add("Collections");
searches.add("Python");

System.out.println(searches);
\`\`\`

The resulting order is:

Java

Python

Collections

---

# Practical Example: Unique Skills in Entered Order

\`\`\`java
Set<String> skills =
        new LinkedHashSet<>();

skills.add("Python");
skills.add("SQL");
skills.add("Java");
skills.add("Python");
skills.add("C++");
\`\`\`

The resulting iteration order is:

Python

SQL

Java

C++

Duplicates are removed while the first insertion order is preserved.

---

# Performance Characteristics

Typical average-case characteristics for basic hash-based operations are similar to HashSet.

add() → O(1)

remove() → O(1)

contains() → O(1)

size() → O(1)

The implementation has additional overhead compared with HashSet because it maintains insertion-order links.

---

# When Should You Use LinkedHashSet?

Use LinkedHashSet when:

- Duplicate elements must be removed.
- Insertion order must be preserved.
- You need predictable iteration order.
- You do not need index-based access.
- You do not need sorted order.

---

# When Should You Use HashSet Instead?

Use HashSet when:

- Uniqueness matters.
- Insertion order does not matter.
- You want a simpler hash-based set implementation.

---

# When Should You Use TreeSet Instead?

Use TreeSet when:

- Uniqueness matters.
- Sorted order is required.
- You need ordered set operations based on natural ordering or a comparator.

---

# Common Mistakes

## 1. Confusing Insertion Order with Sorted Order

LinkedHashSet preserves insertion order.

It does not automatically sort elements.

Inserted:

30, 10, 20

LinkedHashSet:

30, 10, 20

TreeSet:

10, 20, 30

---

## 2. Expecting Index-Based Access

This is invalid:

\`\`\`java
set.get(0);
\`\`\`

A LinkedHashSet is still a Set.

---

## 3. Assuming Duplicates Are Stored

Duplicates are not retained.

\`\`\`java
set.add("Java");
set.add("Java");
\`\`\`

Only one logical "Java" remains.

---

## 4. Forgetting equals() and hashCode()

When storing custom objects, consistent equality and hashing are important for duplicate detection.

---

# Best Practices

- Use LinkedHashSet when uniqueness and insertion order are both required.
- Use HashSet when order does not matter.
- Use TreeSet when sorted order is required.
- Use generics.
- Do not expect index-based access.
- Implement equals() and hashCode() consistently for custom objects.
- Remember that insertion order is different from sorted order.

---

# Interview Questions

## Q1. What is LinkedHashSet?

LinkedHashSet is a Set implementation that stores unique elements and maintains insertion order during iteration.

---

## Q2. What is the difference between HashSet and LinkedHashSet?

HashSet does not guarantee insertion order, while LinkedHashSet maintains insertion order.

---

## Q3. Does LinkedHashSet allow duplicates?

No.

---

## Q4. Does LinkedHashSet sort elements?

No.

It preserves insertion order rather than sorting elements.

---

## Q5. Does LinkedHashSet support index-based access?

No.

---

## Q6. Does LinkedHashSet allow null?

Yes.

It permits a single null element.

---

## Q7. When should you use LinkedHashSet?

Use it when you need unique elements and predictable insertion-order iteration.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain LinkedHashSet.
- Create a LinkedHashSet.
- Store unique elements.
- Preserve insertion order.
- Add and remove elements.
- Search for elements.
- Iterate in insertion order.
- Understand how it differs from HashSet.
- Understand how it differs from TreeSet.
- Use LinkedHashSet with custom objects.
- Understand the role of equals() and hashCode().
- Choose LinkedHashSet when both uniqueness and insertion order are required.

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

✓ Lesson 10 — Set Interface

✓ Lesson 11 — HashSet

✓ Lesson 12 — LinkedHashSet

→ Lesson 13 — TreeSet

Lesson 14 — Collection Algorithms

Lesson 15 — Student Record Management System

---

# Next Lesson

## Lesson 13 — TreeSet

You will learn:

- What TreeSet is
- Sorted sets
- Natural ordering
- Comparator ordering
- Adding elements
- Removing elements
- Searching
- First and last elements
- higher()
- lower()
- ceiling()
- floor()
- TreeSet with custom objects
- TreeSet vs HashSet
- TreeSet vs LinkedHashSet
- Performance characteristics
- Practical examples
- Best Practices
- Interview Questions
- Key Takeaways

`
};

export default lesson12;
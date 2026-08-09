const lesson11 = {

  id: "lesson11",

  title: "HashSet",

  content: `

# HashSet

## Introduction

HashSet is one of the most commonly used implementations of the Set interface.

It is designed to store unique elements and uses a hash table internally to provide efficient operations for adding, removing, and checking elements.

Set

↓

HashSet

A HashSet does not guarantee insertion order.

---

# What Is HashSet?

HashSet is a class from:

java.util

Import:

\`\`\`java
import java.util.HashSet;
\`\`\`

Create a HashSet:

\`\`\`java
HashSet<String> languages =
        new HashSet<>();
\`\`\`

A common interface-based declaration is:

\`\`\`java
Set<String> languages =
        new HashSet<>();
\`\`\`

---

# Main Characteristics

A HashSet:

- Stores unique elements.
- Does not guarantee insertion order.
- Allows one null element.
- Provides efficient average-case basic operations.
- Uses hashing internally.
- Does not provide index-based access.

---

# Creating a HashSet

Example:

\`\`\`java
import java.util.HashSet;
import java.util.Set;

public class HashSetExample {

    public static void main(String[] args) {

        Set<String> languages =
                new HashSet<>();

        languages.add("Java");
        languages.add("Python");
        languages.add("C++");

        System.out.println(languages);

    }

}
\`\`\`

The output contains the three unique elements.

The exact order should not be relied upon.

---

# Adding Elements

Use:

\`\`\`java
languages.add("Java");
\`\`\`

Example:

\`\`\`java
languages.add("Java");
languages.add("Python");
languages.add("C++");
\`\`\`

---

# Adding Duplicate Elements

Suppose:

\`\`\`java
languages.add("Java");
languages.add("Python");
languages.add("Java");
\`\`\`

The second "Java" is not added as a new element.

The add() method returns:

true

when the set changes and:

false

when the element already exists according to the set's equality rules.

---

# Example: Duplicate Detection

\`\`\`java
import java.util.HashSet;
import java.util.Set;

public class DuplicateExample {

    public static void main(String[] args) {

        Set<String> languages =
                new HashSet<>();

        System.out.println(
                languages.add("Java"));

        System.out.println(
                languages.add("Python"));

        System.out.println(
                languages.add("Java"));

    }

}
\`\`\`

Output:

\`\`\`text
true
true
false
\`\`\`

---

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

---

# Removing an Element

Use:

\`\`\`java
languages.remove("Python");
\`\`\`

If the element exists, it is removed.

The method returns a boolean indicating whether an element was removed.

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

# Checking Whether HashSet Is Empty

Use:

\`\`\`java
languages.isEmpty();
\`\`\`

Example:

\`\`\`java
if (languages.isEmpty()) {

    System.out.println(
            "Set is empty.");

}
\`\`\`

---

# Removing All Elements

Use:

\`\`\`java
languages.clear();
\`\`\`

After this operation, the set contains no elements.

---

# Iterating Through HashSet

Use an enhanced for loop:

\`\`\`java
for (String language : languages) {

    System.out.println(language);

}
\`\`\`

Remember:

Do not assume the iteration order of a HashSet.

---

# HashSet Does Not Support Indexing

This is invalid:

\`\`\`java
languages.get(0);
\`\`\`

HashSet does not provide list-style index-based access.

If you need index-based access, use a List.

---

# Hashing Concept

HashSet uses hashing to organize elements.

A simplified concept is:

Element

↓

hashCode()

↓

Hash value

↓

Hash table location

This allows the collection to locate elements efficiently in typical cases.

---

# hashCode()

Every Java object inherits a hashCode() method from Object.

Example:

\`\`\`java
String language = "Java";

System.out.println(
        language.hashCode());
\`\`\`

The actual integer value is generated according to the object's hash-code implementation.

---

# equals() and hashCode()

Hash-based collections use both hashCode() and equals() when determining logical equality.

Conceptually:

Object

↓

hashCode()

↓

Candidate location

↓

equals()

↓

Equality check

For objects that are equal according to equals(), their hash codes must be equal.

---

# HashSet with Strings

Strings already provide appropriate equals() and hashCode() implementations.

Therefore:

\`\`\`java
Set<String> languages =
        new HashSet<>();

languages.add("Java");
languages.add("Java");
\`\`\`

results in only one logical "Java" element.

---

# HashSet with Integers

Example:

\`\`\`java
Set<Integer> numbers =
        new HashSet<>();

numbers.add(10);
numbers.add(20);
numbers.add(10);
numbers.add(30);
\`\`\`

The duplicate 10 is not stored as another distinct element.

---

# HashSet and Null

A HashSet permits a single null element.

Example:

\`\`\`java
Set<String> values =
        new HashSet<>();

values.add(null);
values.add(null);
\`\`\`

The set contains at most one null.

---

# HashSet with Custom Objects

Consider:

\`\`\`java
class Product {

    String name;

    Product(String name) {
        this.name = name;
    }

}
\`\`\`

You can create:

\`\`\`java
Set<Product> products =
        new HashSet<>();
\`\`\`

However, if you want two Product objects with the same logical data to be considered duplicates, you should implement equals() and hashCode() consistently.

---

# Custom Object Example

\`\`\`java
import java.util.HashSet;
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

public class HashSetObjectExample {

    public static void main(String[] args) {

        Set<Product> products =
                new HashSet<>();

        products.add(
                new Product("Laptop"));

        products.add(
                new Product("Laptop"));

        products.add(
                new Product("Mouse"));

        System.out.println(products);

    }

}
\`\`\`

Because equality is based on name, the two "Laptop" objects are considered equal.

---

# HashSet vs ArrayList

HashSet:

- Duplicate elements → Not allowed.
- Index-based access → No.
- Insertion order → Not guaranteed.
- Membership testing → Efficient on average.
- Main purpose → Uniqueness.

ArrayList:

- Duplicate elements → Allowed.
- Index-based access → Yes.
- Insertion order → Maintained.
- Membership testing → Usually linear search.
- Main purpose → Ordered sequence.

---

# HashSet vs LinkedHashSet

Both store unique elements.

The main difference is ordering.

HashSet

↓

No guaranteed insertion order

LinkedHashSet

↓

Insertion order maintained

Example:

\`\`\`java
Set<String> languages =
        new LinkedHashSet<>();
\`\`\`

Use LinkedHashSet when insertion order matters.

---

# HashSet vs TreeSet

HashSet

↓

Unique elements

No guaranteed insertion order

TreeSet

↓

Unique elements

Sorted order

Use TreeSet when you need sorted unique elements.

---

# Performance Characteristics

Typical average-case complexity for common HashSet operations is:

add() → O(1)

remove() → O(1)

contains() → O(1)

size() → O(1)

Worst-case behavior can differ depending on collisions and implementation details.

---

# Hash Collisions

Sometimes different objects can produce the same hash value.

This is called a hash collision.

Conceptually:

Object A

↓

Hash 25

Object B

↓

Hash 25

The collection then uses equality checks to determine whether the objects are actually equal.

A collision does not automatically mean the objects are equal.

---

# Practical Example: Unique Skills

\`\`\`java
import java.util.HashSet;
import java.util.Set;

public class SkillsExample {

    public static void main(String[] args) {

        Set<String> skills =
                new HashSet<>();

        skills.add("Python");
        skills.add("Java");
        skills.add("Python");
        skills.add("SQL");
        skills.add("Java");

        System.out.println(
                skills);

    }

}
\`\`\`

The set contains only unique skills.

---

# Practical Example: Removing Duplicate Values

Suppose:

10

20

10

30

20

40

You can use:

\`\`\`java
Set<Integer> uniqueNumbers =
        new HashSet<>();

uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(10);
uniqueNumbers.add(30);
uniqueNumbers.add(20);
uniqueNumbers.add(40);
\`\`\`

The set contains:

10

20

30

40

The iteration order is not guaranteed.

---

# Common Mistakes

## 1. Expecting Insertion Order

Do not write code that depends on a particular HashSet iteration order.

---

## 2. Using get()

This is invalid:

\`\`\`java
set.get(0);
\`\`\`

Use:

\`\`\`java
set.contains(value);
\`\`\`

for membership testing.

---

## 3. Forgetting equals() and hashCode()

When using custom objects, inconsistent equality and hash-code implementations can cause unexpected set behavior.

---

## 4. Assuming Hash Collisions Mean Duplicate Values

Two objects can have the same hash code without being equal.

The equality check is still important.

---

# Best Practices

- Use HashSet when uniqueness is important and insertion order is not required.
- Use generics.
- Use contains() for membership checks.
- Do not rely on iteration order.
- Implement equals() and hashCode() consistently for custom objects.
- Use LinkedHashSet when insertion order matters.
- Use TreeSet when sorted unique elements are required.

---

# Interview Questions

## Q1. What is HashSet?

HashSet is a Set implementation that stores unique elements using hashing.

---

## Q2. Does HashSet allow duplicates?

No.

---

## Q3. Does HashSet maintain insertion order?

No.

It does not guarantee insertion order.

---

## Q4. Does HashSet allow null?

Yes.

It permits a single null element.

---

## Q5. Why are equals() and hashCode() important?

They help hash-based collections determine logical equality between objects.

---

## Q6. What is the average complexity of contains() in HashSet?

Typically O(1) average-case.

---

## Q7. Can two objects have the same hash code but be different?

Yes.

A hash collision can occur.

Equal objects must have equal hash codes, but equal hash codes do not necessarily mean the objects are equal.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain HashSet.
- Create and use a HashSet.
- Add and remove elements.
- Prevent duplicate values.
- Check whether an element exists.
- Understand hashing.
- Understand hashCode().
- Understand the role of equals().
- Use HashSet with custom objects.
- Understand hash collisions.
- Compare HashSet with ArrayList.
- Compare HashSet with LinkedHashSet and TreeSet.
- Understand typical performance characteristics.

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

→ Lesson 12 — LinkedHashSet

Lesson 13 — TreeSet

Lesson 14 — Collection Algorithms

Lesson 15 — Student Record Management System

---

# Next Lesson

## Lesson 12 — LinkedHashSet

You will learn:

- What LinkedHashSet is
- How it differs from HashSet
- Unique elements
- Insertion order
- Creating a LinkedHashSet
- Adding and removing elements
- Iteration
- equals() and hashCode()
- LinkedHashSet vs HashSet
- LinkedHashSet vs TreeSet
- Practical examples
- Best Practices
- Interview Questions
- Key Takeaways

`
};

export default lesson11;
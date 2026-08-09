const lesson10 = {

  id: "lesson10",

  title: "Set Interface",

  content: `

# Set Interface

## Introduction

A Set is a collection that is designed to store unique elements.

Unlike a List, a Set does not allow duplicate elements.

Example:

Input:

Java

Python

Java

C++

Set:

Java

Python

C++

The second occurrence of Java does not create another distinct element in the set.

---

# What Is Set?

Set is an interface in:

java.util

Import:

\`\`\`java
import java.util.Set;
\`\`\`

The simplified relationship is:

Collection
    ↓
   Set
    ├── HashSet
    ├── LinkedHashSet
    └── TreeSet

These implementations differ in their ordering and sorting behavior.

---

# Main Characteristics of Set

A Set generally has these important characteristics:

- Duplicate elements are not allowed.
- It does not provide list-style index-based access.
- It is useful for uniqueness and membership testing.
- Different implementations provide different ordering behavior.

---

# Set vs List

Consider a list:

\`\`\`text
List:
[Java, Python, Java, C++]
\`\`\`

Duplicates are allowed.

A set:

\`\`\`text
Set:
[Java, Python, C++]
\`\`\`

does not contain duplicate Java entries.

---

# Creating a Set

Because Set is an interface, you create it using an implementation.

Example:

\`\`\`java
Set<String> languages =
        new HashSet<>();
\`\`\`

The variable type is:

\`\`\`text
Set<String>
\`\`\`

and the implementation is:

\`\`\`text
HashSet<>
\`\`\`

---

# Adding Elements

Use:

\`\`\`java
set.add("Java");
\`\`\`

Example:

\`\`\`java
Set<String> languages =
        new HashSet<>();

languages.add("Java");
languages.add("Python");
languages.add("C++");
\`\`\`

The set contains:

Java

Python

C++

---

# Adding Duplicate Elements

Suppose:

\`\`\`java
languages.add("Java");
languages.add("Java");
languages.add("Python");
\`\`\`

The set still contains only one Java.

The add() method returns a boolean:

true

if the set changed because the element was added.

It returns:

false

if the element was already present.

---

# Example: Detecting Duplicates

\`\`\`java
import java.util.HashSet;
import java.util.Set;

public class SetExample {

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

The third insertion returns false because Java already exists.

---

# Checking an Element

Use:

\`\`\`java
set.contains("Java");
\`\`\`

Example:

\`\`\`java
if (languages.contains("Java")) {

    System.out.println(
            "Java is present.");

}
\`\`\`

The result is:

\`\`\`text
true
\`\`\`

or:

\`\`\`text
false
\`\`\`

---

# Removing Elements

Use:

\`\`\`java
set.remove("Java");
\`\`\`

Example:

\`\`\`java
languages.remove("Python");
\`\`\`

The specified element is removed if it exists.

---

# Checking the Size

Use:

\`\`\`java
set.size();
\`\`\`

Example:

\`\`\`java
System.out.println(
        languages.size());
\`\`\`

If the set contains:

Java

Python

C++

the result is:

\`\`\`text
3
\`\`\`

---

# Checking Whether a Set Is Empty

Use:

\`\`\`java
set.isEmpty();
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
set.clear();
\`\`\`

After:

\`\`\`text
[]
\`\`\`

the set contains no elements.

---

# Iterating Through a Set

You can use an enhanced for loop:

\`\`\`java
for (String language : languages) {

    System.out.println(language);

}
\`\`\`

However, the iteration order depends on the specific Set implementation.

---

# Important: Set Has No List-Style Index

This is invalid:

\`\`\`java
set.get(0);
\`\`\`

A Set does not provide the List interface's index-based get() method.

If you need direct index-based access, a List may be more appropriate.

---

# Set Implementations

The three major implementations covered in this module are:

Set
  │
  ├── HashSet
  │
  ├── LinkedHashSet
  │
  └── TreeSet

Their key characteristics differ.

---

# HashSet

HashSet stores unique elements using hashing.

Typical characteristics:

- Unique elements.
- No guaranteed insertion order.
- Fast average-case membership operations.

Example:

\`\`\`java
Set<String> languages =
        new HashSet<>();

languages.add("Java");
languages.add("Python");
languages.add("C++");
\`\`\`

---

# LinkedHashSet

LinkedHashSet maintains unique elements while preserving insertion order.

Example:

\`\`\`java
Set<String> languages =
        new LinkedHashSet<>();

languages.add("Java");
languages.add("Python");
languages.add("C++");
\`\`\`

Its iteration order follows insertion order:

Java

Python

C++

---

# TreeSet

TreeSet stores unique elements in sorted order according to its ordering rules.

Example:

\`\`\`java
Set<Integer> numbers =
        new TreeSet<>();

numbers.add(30);
numbers.add(10);
numbers.add(20);
\`\`\`

Iteration produces sorted order:

\`\`\`text
10
20
30
\`\`\`

---

# Set Comparison

HashSet:

- Duplicates → No
- Ordering → No guaranteed insertion order

LinkedHashSet:

- Duplicates → No
- Ordering → Insertion order

TreeSet:

- Duplicates → No
- Ordering → Sorted order

This distinction is extremely important when choosing a Set implementation.

---

# Set and Duplicate Removal

A common use of Set is removing duplicate values.

Suppose:

Java

Python

Java

C++

Python

A set can produce:

Java

Python

C++

Example:

\`\`\`java
Set<String> uniqueLanguages =
        new HashSet<>();

uniqueLanguages.add("Java");
uniqueLanguages.add("Python");
uniqueLanguages.add("Java");
uniqueLanguages.add("C++");
uniqueLanguages.add("Python");
\`\`\`

Only unique values remain.

---

# Converting a List to a Set

Suppose:

\`\`\`java
List<String> languages =
        new ArrayList<>();

languages.add("Java");
languages.add("Python");
languages.add("Java");
\`\`\`

You can create a set:

\`\`\`java
Set<String> uniqueLanguages =
        new HashSet<>(languages);
\`\`\`

The duplicate Java is eliminated.

---

# Converting a Set to a List

You can also convert a set into a list:

\`\`\`java
List<String> languages =
        new ArrayList<>(set);
\`\`\`

The resulting list contains the set's elements.

The resulting order depends on the source set's ordering characteristics.

---

# Set Operations

Sets are useful for mathematical-style operations.

For example:

- Union
- Intersection
- Difference

Suppose:

\`\`\`text
A = {1, 2, 3}

B = {3, 4, 5}
\`\`\`

Union:

\`\`\`text
{1, 2, 3, 4, 5}
\`\`\`

Intersection:

\`\`\`text
{3}
\`\`\`

Difference:

\`\`\`text
A - B = {1, 2}
\`\`\`

These operations can be performed using collection methods such as:

- addAll()
- retainAll()
- removeAll()

---

# Union with addAll()

Example:

\`\`\`java
Set<Integer> a =
        new HashSet<>();

Set<Integer> b =
        new HashSet<>();

a.add(1);
a.add(2);
a.add(3);

b.add(3);
b.add(4);
b.add(5);

a.addAll(b);
\`\`\`

Now a contains:

1

2

3

4

5

---

# Intersection with retainAll()

To keep only elements present in both sets:

\`\`\`java
a.retainAll(b);
\`\`\`

If:

\`\`\`text
A = {1, 2, 3}

B = {3, 4, 5}
\`\`\`

then A becomes:

\`\`\`text
{3}
\`\`\`

---

# Difference with removeAll()

To remove elements found in another set:

\`\`\`java
a.removeAll(b);
\`\`\`

If:

\`\`\`text
A = {1, 2, 3}

B = {3, 4, 5}
\`\`\`

then A becomes:

\`\`\`text
{1, 2}
\`\`\`

---

# Example: Unique Names

\`\`\`java
import java.util.HashSet;
import java.util.Set;

public class UniqueNamesExample {

    public static void main(String[] args) {

        Set<String> names =
                new HashSet<>();

        names.add("Alex");
        names.add("Jordan");
        names.add("Alex");
        names.add("Taylor");

        System.out.println(names);

    }

}
\`\`\`

The duplicate Alex is not stored as another distinct element.

---

# Set with Custom Objects

Sets can store custom objects.

Example:

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

However, when using custom objects with sets, understanding equals() and hashCode() becomes important for defining logical equality.

This topic becomes especially important when working with HashSet.

---

# equals() and hashCode()

For hash-based collections such as HashSet, Java uses hashCode() and equals() to determine whether objects should be treated as equal.

Conceptually:

Object

↓

hashCode()

↓

Possible location

↓

equals()

↓

Determine equality

If two objects are logically equal, their hashCode() values should also be consistent with that equality.

---

# Set vs List

List:

- Duplicate elements → Allowed
- Index-based access → Yes
- Ordering → Maintained
- Membership testing → Supported
- Common implementations → ArrayList, LinkedList

Set:

- Duplicate elements → Not allowed
- Index-based access → No
- Ordering → Depends on implementation
- Membership testing → Core use case
- Common implementations → HashSet, LinkedHashSet, TreeSet

---

# When Should You Use Set?

Use a Set when:

- Duplicate values should not be stored.
- You need membership testing.
- You need unique categories.
- You need to remove duplicates.
- You need set operations.
- You need sorted unique elements using TreeSet.
- You need insertion-order unique elements using LinkedHashSet.

---

# Practical Example: Unique Skills

Suppose an application collects skills:

Python

Java

Python

C++

Java

SQL

A set can store:

Python

Java

C++

SQL

This avoids duplicate skill entries.

---

# Practical Example: Unique IDs

Suppose an application receives IDs:

101

102

101

103

102

A set can be used to determine the unique IDs:

101

102

103

---

# Common Mistakes

## 1. Expecting Index-Based Access

This is invalid:

\`\`\`java
set.get(0);
\`\`\`

Use iteration or another appropriate operation.

---

## 2. Assuming HashSet Preserves Insertion Order

Do not rely on:

HashSet

↓

Insertion order

HashSet does not guarantee insertion order.

---

## 3. Assuming All Sets Are Sorted

Only implementations such as TreeSet provide sorted ordering according to their ordering rules.

---

## 4. Forgetting equals() and hashCode() for Custom Objects

When custom objects are stored in hash-based sets, logical equality should be implemented consistently with hashCode().

---

# Best Practices

- Use Set when uniqueness is the primary requirement.
- Use HashSet when ordering is not required.
- Use LinkedHashSet when insertion order matters.
- Use TreeSet when sorted unique elements are required.
- Use generics for type safety.
- Do not depend on HashSet iteration order.
- Understand equals() and hashCode() when using custom objects.
- Choose the implementation according to ordering and performance requirements.

---

# Interview Questions

## Q1. What is a Set?

A Set is a collection that does not allow duplicate elements.

---

## Q2. Does Set support index-based access?

No.

The Set interface does not provide list-style index-based access.

---

## Q3. What is the difference between List and Set?

A List allows duplicates and supports index-based access, while a Set is designed to store unique elements and does not provide list-style indexing.

---

## Q4. What is the difference between HashSet, LinkedHashSet, and TreeSet?

HashSet provides unique elements without guaranteeing insertion order.

LinkedHashSet maintains insertion order.

TreeSet maintains sorted order according to its ordering rules.

---

## Q5. Why are equals() and hashCode() important for HashSet?

They help hash-based collections determine whether objects are logically equal.

---

## Q6. Can a Set contain duplicate objects?

A set does not retain duplicate elements according to its equality rules.

For custom objects, those equality rules depend on methods such as equals() and hashCode().

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain the Set interface.
- Understand why sets are used.
- Understand uniqueness.
- Add and remove elements.
- Check whether an element exists.
- Check the size of a set.
- Clear a set.
- Iterate through a set.
- Understand why sets do not provide list-style indexing.
- Compare HashSet, LinkedHashSet, and TreeSet.
- Remove duplicates using sets.
- Perform basic set operations.
- Understand the importance of equals() and hashCode().
- Choose an appropriate Set implementation.

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

→ Lesson 11 — HashSet

Lesson 12 — LinkedHashSet

Lesson 13 — TreeSet

Lesson 14 — Collection Algorithms

Lesson 15 — Student Record Management System

---

# Next Lesson

## Lesson 11 — HashSet

You will learn:

- What HashSet is
- Hashing concept
- How HashSet stores unique elements
- Creating a HashSet
- Adding elements
- Removing elements
- Searching
- Iteration
- Duplicate handling
- equals() and hashCode()
- HashSet with custom objects
- HashSet vs ArrayList
- HashSet vs LinkedHashSet
- Performance characteristics
- Practical examples
- Best Practices
- Interview Questions
- Key Takeaways

`
};

export default lesson10;
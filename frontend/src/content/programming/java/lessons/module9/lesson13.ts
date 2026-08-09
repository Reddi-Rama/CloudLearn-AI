const lesson13 = {

  id: "lesson13",

  title: "TreeSet",

  content: `

# TreeSet

## Introduction

TreeSet is a Set implementation that stores unique elements in sorted order.

Unlike HashSet, which does not guarantee an order, and LinkedHashSet, which preserves insertion order, TreeSet maintains elements according to their ordering rules.

HashSet

↓

Unique elements

No guaranteed order


LinkedHashSet

↓

Unique elements

Insertion order


TreeSet

↓

Unique elements

Sorted order

---

# What Is TreeSet?

TreeSet belongs to:

java.util

Import:

\`\`\`java
import java.util.TreeSet;
\`\`\`

You can create one using:

\`\`\`java
TreeSet<Integer> numbers =
        new TreeSet<>();
\`\`\`

Or program to the interface:

\`\`\`java
Set<Integer> numbers =
        new TreeSet<>();
\`\`\`

---

# Main Characteristics

A TreeSet:

- Stores unique elements.
- Maintains sorted order.
- Does not provide index-based access.
- Supports natural ordering.
- Can use a Comparator for custom ordering.
- Provides navigation methods such as higher(), lower(), ceiling(), and floor().

---

# Creating a TreeSet

Example:

\`\`\`java
import java.util.Set;
import java.util.TreeSet;

public class TreeSetExample {

    public static void main(String[] args) {

        Set<Integer> numbers =
                new TreeSet<>();

        numbers.add(30);
        numbers.add(10);
        numbers.add(20);

        System.out.println(numbers);

    }

}
\`\`\`

Output:

\`\`\`text
[10, 20, 30]
\`\`\`

The elements are sorted automatically.

---

# Natural Ordering

By default, TreeSet uses the natural ordering of its elements.

For integers:

10 < 20 < 30

For strings, natural ordering is based on their ordering rules.

Example:

\`\`\`java
TreeSet<String> languages =
        new TreeSet<>();

languages.add("Python");
languages.add("Java");
languages.add("C++");

System.out.println(languages);
\`\`\`

The elements are maintained according to their natural ordering.

---

# Duplicate Elements

Like every Set, TreeSet does not retain duplicate elements.

Example:

\`\`\`java
TreeSet<Integer> numbers =
        new TreeSet<>();

numbers.add(10);
numbers.add(20);
numbers.add(10);
\`\`\`

The result contains:

\`\`\`text
[10, 20]
\`\`\`

The second 10 is not added as another distinct element.

---

# add()

The add() method inserts an element according to the set's ordering rules.

Example:

\`\`\`java
numbers.add(40);
\`\`\`

It returns:

true

if the set changes.

If the element is already present according to the set's comparison rules:

false

is returned.

---

# remove()

Use:

\`\`\`java
numbers.remove(20);
\`\`\`

This removes the specified element if it exists.

Example:

Before:

\`\`\`text
[10, 20, 30]
\`\`\`

remove(20)

After:

\`\`\`text
[10, 30]
\`\`\`

---

# contains()

Use:

\`\`\`java
numbers.contains(30);
\`\`\`

Example:

\`\`\`java
if (numbers.contains(30)) {

    System.out.println(
            "Number exists.");

}
\`\`\`

---

# size()

Use:

\`\`\`java
numbers.size();
\`\`\`

to determine how many elements are stored.

---

# isEmpty()

Use:

\`\`\`java
numbers.isEmpty();
\`\`\`

to check whether the set contains no elements.

---

# clear()

Use:

\`\`\`java
numbers.clear();
\`\`\`

to remove all elements.

---

# Iterating Through TreeSet

A TreeSet can be traversed using an enhanced for loop:

\`\`\`java
for (Integer number : numbers) {

    System.out.println(number);

}
\`\`\`

The elements are visited in sorted order.

---

# First Element

Use:

\`\`\`java
numbers.first();
\`\`\`

Example:

\`\`\`java
TreeSet<Integer> numbers =
        new TreeSet<>();

numbers.add(30);
numbers.add(10);
numbers.add(20);

System.out.println(
        numbers.first());
\`\`\`

Output:

\`\`\`text
10
\`\`\`

---

# Last Element

Use:

\`\`\`java
numbers.last();
\`\`\`

Example:

\`\`\`java
System.out.println(
        numbers.last());
\`\`\`

Output:

\`\`\`text
30
\`\`\`

---

# higher()

higher() returns the least element that is strictly greater than the specified element.

Example:

\`\`\`java
TreeSet<Integer> numbers =
        new TreeSet<>();

numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(40);

numbers.higher(20);
\`\`\`

returns:

\`\`\`text
30
\`\`\`

---

# lower()

lower() returns the greatest element that is strictly less than the specified element.

Example:

\`\`\`java
numbers.lower(30);
\`\`\`

returns:

\`\`\`text
20
\`\`\`

---

# ceiling()

ceiling() returns the smallest element that is greater than or equal to the specified value.

Example:

\`\`\`java
numbers.ceiling(20);
\`\`\`

returns:

\`\`\`text
20
\`\`\`

If 20 did not exist but 30 did:

\`\`\`java
numbers.ceiling(20);
\`\`\`

could return:

\`\`\`text
30
\`\`\`

---

# floor()

floor() returns the greatest element that is less than or equal to the specified value.

Example:

\`\`\`java
TreeSet<Integer> numbers =
        new TreeSet<>();

numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(40);

System.out.println(
        numbers.floor(25));
\`\`\`

Output:

\`\`\`text
20
\`\`\`

Because 20 is the greatest element less than or equal to 25.

---

# Navigation Methods

TreeSet provides useful navigation operations.

higher(x)

↓

Smallest element strictly greater than x


lower(x)

↓

Greatest element strictly less than x


ceiling(x)

↓

Smallest element greater than or equal to x


floor(x)

↓

Greatest element less than or equal to x

---

# Complete Navigation Example

\`\`\`java
import java.util.TreeSet;

public class NavigationExample {

    public static void main(String[] args) {

        TreeSet<Integer> numbers =
                new TreeSet<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);

        System.out.println(
                "Higher: "
                + numbers.higher(20));

        System.out.println(
                "Lower: "
                + numbers.lower(30));

        System.out.println(
                "Ceiling: "
                + numbers.ceiling(25));

        System.out.println(
                "Floor: "
                + numbers.floor(25));

    }

}
\`\`\`

Output:

\`\`\`text
Higher: 30
Lower: 20
Ceiling: 30
Floor: 20
\`\`\`

---

# Custom Ordering with Comparator

TreeSet can use a Comparator to define custom ordering.

Example:

\`\`\`java
TreeSet<Integer> numbers =
        new TreeSet<>(
                Comparator.reverseOrder());
\`\`\`

Now larger numbers appear first.

Example:

\`\`\`java
numbers.add(10);
numbers.add(30);
numbers.add(20);

System.out.println(numbers);
\`\`\`

Output:

\`\`\`text
[30, 20, 10]
\`\`\`

---

# TreeSet with Strings

Example:

\`\`\`java
TreeSet<String> languages =
        new TreeSet<>();

languages.add("Java");
languages.add("Python");
languages.add("C++");
languages.add("SQL");

System.out.println(languages);
\`\`\`

The strings are maintained according to their natural ordering.

---

# TreeSet with Custom Objects

TreeSet can store custom objects when the objects provide an appropriate ordering.

You can use:

- Comparable
- Comparator

For example:

\`\`\`java
class Product {

    String name;
    int price;

    Product(
            String name,
            int price) {

        this.name = name;
        this.price = price;

    }

}
\`\`\`

You can then provide a Comparator:

\`\`\`java
TreeSet<Product> products =
        new TreeSet<>(
                Comparator.comparingInt(
                        product ->
                                product.price));
\`\`\`

The products are ordered by price.

---

# TreeSet with Custom Comparator

Complete example:

\`\`\`java
import java.util.Comparator;
import java.util.TreeSet;

class Product {

    String name;
    int price;

    Product(
            String name,
            int price) {

        this.name = name;
        this.price = price;

    }

    @Override
    public String toString() {

        return name
                + " - "
                + price;

    }

}

public class ProductTreeSetExample {

    public static void main(String[] args) {

        TreeSet<Product> products =
                new TreeSet<>(
                        Comparator.comparingInt(
                                product ->
                                        product.price));

        products.add(
                new Product(
                        "Keyboard",
                        1200));

        products.add(
                new Product(
                        "Mouse",
                        700));

        products.add(
                new Product(
                        "Monitor",
                        8000));

        for (Product product :
                products) {

            System.out.println(product);

        }

    }

}
\`\`\`

Output:

\`\`\`text
Mouse - 700
Keyboard - 1200
Monitor - 8000
\`\`\`

---

# TreeSet vs HashSet

HashSet:

- Unique elements.
- No guaranteed ordering.
- Hash-based structure.
- Good for uniqueness and membership testing.

TreeSet:

- Unique elements.
- Sorted order.
- Tree-based structure.
- Useful when sorted data and navigation are required.

---

# TreeSet vs LinkedHashSet

LinkedHashSet:

↓

Unique elements

↓

Insertion order


TreeSet:

↓

Unique elements

↓

Sorted order

Example:

Inserted:

30

10

20

LinkedHashSet:

\`\`\`text
30
10
20
\`\`\`

TreeSet:

\`\`\`text
10
20
30
\`\`\`

---

# Performance Characteristics

Typical TreeSet operations have logarithmic complexity.

Common operations:

add() → O(log n)

remove() → O(log n)

contains() → O(log n)

first() → O(log n)

last() → O(log n)

Navigation operations such as:

higher()

lower()

ceiling()

floor()

are also typically O(log n).

---

# Practical Example: Sorted Scores

Suppose an application stores scores:

\`\`\`text
85
72
95
60
90
\`\`\`

A TreeSet automatically maintains:

\`\`\`text
60
72
85
90
95
\`\`\`

This is useful when unique scores need to remain sorted.

---

# Practical Example: Sorted Prices

Suppose a product system receives prices:

1000

500

2500

1000

750

TreeSet stores:

\`\`\`text
500
750
1000
2500
\`\`\`

The duplicate 1000 is removed and the values remain sorted.

---

# Common Mistakes

## 1. Confusing TreeSet with LinkedHashSet

LinkedHashSet preserves insertion order.

TreeSet maintains sorted order.

---

## 2. Expecting Index-Based Access

This is invalid:

\`\`\`java
numbers.get(0);
\`\`\`

TreeSet is a Set and does not provide index-based access.

---

## 3. Forgetting Ordering Requirements

TreeSet needs an ordering mechanism.

For standard types, natural ordering is available.

For custom types, use Comparable or a Comparator as appropriate.

---

## 4. Assuming TreeSet Is the Same as Sorted List

TreeSet provides unique sorted elements.

A sorted List can contain duplicates.

---

# Best Practices

- Use TreeSet when unique elements must remain sorted.
- Use natural ordering when the default ordering is appropriate.
- Use Comparator for custom ordering.
- Use navigation methods when range-related operations are required.
- Use HashSet when sorting is unnecessary.
- Use LinkedHashSet when insertion order matters.
- Understand the ordering rules when storing custom objects.
- Do not expect index-based access.

---

# Interview Questions

## Q1. What is TreeSet?

TreeSet is a Set implementation that stores unique elements in sorted order.

---

## Q2. Does TreeSet allow duplicates?

No.

---

## Q3. Does TreeSet maintain insertion order?

No.

It maintains sorted order.

---

## Q4. What is the difference between HashSet and TreeSet?

HashSet does not guarantee ordering, while TreeSet maintains sorted order.

---

## Q5. What is the difference between LinkedHashSet and TreeSet?

LinkedHashSet maintains insertion order.

TreeSet maintains sorted order.

---

## Q6. What does higher() do?

It returns the least element strictly greater than the specified element.

---

## Q7. What does lower() do?

It returns the greatest element strictly less than the specified element.

---

## Q8. What does ceiling() do?

It returns the smallest element greater than or equal to the specified element.

---

## Q9. What does floor() do?

It returns the greatest element less than or equal to the specified element.

---

## Q10. What is the typical complexity of TreeSet operations?

Common operations such as add(), remove(), and contains() are typically O(log n).

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain TreeSet.
- Create a TreeSet.
- Store unique elements.
- Maintain sorted order.
- Understand natural ordering.
- Use Comparator ordering.
- Add and remove elements.
- Search for elements.
- Retrieve first and last elements.
- Use higher().
- Use lower().
- Use ceiling().
- Use floor().
- Use TreeSet with custom objects.
- Compare TreeSet with HashSet.
- Compare TreeSet with LinkedHashSet.
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

✓ Lesson 12 — LinkedHashSet

✓ Lesson 13 — TreeSet

→ Lesson 14 — Collection Algorithms

Lesson 15 — Student Record Management System

---

# Next Lesson

## Lesson 14 — Collection Algorithms

You will learn:

- What collection algorithms are
- Collections utility class
- Sorting collections
- Searching collections
- Reversing collections
- Shuffling collections
- Finding minimum and maximum
- Frequency counting
- Replacing elements
- Rotating collections
- Binary search
- Practical examples
- Best Practices
- Interview Questions
- Key Takeaways

`
};

export default lesson13;
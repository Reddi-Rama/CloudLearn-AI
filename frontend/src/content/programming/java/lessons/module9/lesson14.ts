const lesson14 = {

  id: "lesson14",

  title: "Collection Algorithms",

  content: `

# Collection Algorithms

## Introduction

Java provides the Collections utility class to perform common operations on collections.

Instead of writing these operations manually, you can use ready-made methods for tasks such as:

- Sorting
- Searching
- Reversing
- Shuffling
- Finding minimum values
- Finding maximum values
- Counting occurrences
- Replacing elements
- Rotating elements
- Binary searching

The utility class belongs to:

java.util

Import:

\`\`\`java
import java.util.Collections;
\`\`\`

---

# Collections Utility Class

Collections is a utility class containing static methods that operate on collection objects.

Example:

\`\`\`java
Collections.sort(list);
\`\`\`

Here:

Collections

↓

Utility class

sort()

↓

Static method

list

↓

Collection being processed

---

# Sorting a List

The sort() method sorts a list according to its natural ordering.

Example:

\`\`\`java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SortExample {

    public static void main(String[] args) {

        List<Integer> numbers =
                new ArrayList<>();

        numbers.add(30);
        numbers.add(10);
        numbers.add(20);

        Collections.sort(numbers);

        System.out.println(numbers);

    }

}
\`\`\`

Output:

\`\`\`text
[10, 20, 30]
\`\`\`

---

# Sorting in Reverse Order

You can use a Comparator to sort in reverse order.

Example:

\`\`\`java
Collections.sort(
        numbers,
        Collections.reverseOrder());
\`\`\`

If the list is:

\`\`\`text
[10, 20, 30]
\`\`\`

the result becomes:

\`\`\`text
[30, 20, 10]
\`\`\`

---

# Reverse a List

The reverse() method reverses the order of elements.

Example:

\`\`\`java
List<String> languages =
        new ArrayList<>();

languages.add("Java");
languages.add("Python");
languages.add("C++");

Collections.reverse(languages);

System.out.println(languages);
\`\`\`

Output:

\`\`\`text
[C++, Python, Java]
\`\`\`

---

# Shuffle a List

The shuffle() method randomly rearranges the elements.

Example:

\`\`\`java
Collections.shuffle(languages);
\`\`\`

The resulting order can change each time.

Example:

Before:

\`\`\`text
[Java, Python, C++]
\`\`\`

After shuffle:

\`\`\`text
[Python, C++, Java]
\`\`\`

The exact result is not guaranteed.

---

# Finding Minimum

Use:

\`\`\`java
Collections.min(list);
\`\`\`

Example:

\`\`\`java
List<Integer> numbers =
        new ArrayList<>();

numbers.add(30);
numbers.add(10);
numbers.add(20);

System.out.println(
        Collections.min(numbers));
\`\`\`

Output:

\`\`\`text
10
\`\`\`

---

# Finding Maximum

Use:

\`\`\`java
Collections.max(list);
\`\`\`

Example:

\`\`\`java
System.out.println(
        Collections.max(numbers));
\`\`\`

Output:

\`\`\`text
30
\`\`\`

---

# Searching with Binary Search

Collections provides:

\`\`\`java
Collections.binarySearch(
        list,
        value);
\`\`\`

Binary search is an efficient searching technique.

Important:

The list must be sorted according to the same ordering before binarySearch() is used.

Example:

\`\`\`java
List<Integer> numbers =
        new ArrayList<>();

numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(40);

int index =
        Collections.binarySearch(
                numbers,
                30);

System.out.println(index);
\`\`\`

Output:

\`\`\`text
2
\`\`\`

The element 30 is at index 2.

---

# Why Must the List Be Sorted?

Binary search repeatedly divides the search range.

Conceptually:

\`\`\`text
[10, 20, 30, 40, 50]

        ↓

Check middle

        ↓

Search only required half
\`\`\`

Because the algorithm relies on ordering, the list must be sorted appropriately.

---

# Frequency

The frequency() method counts how many times a particular element occurs.

Example:

\`\`\`java
List<String> languages =
        new ArrayList<>();

languages.add("Java");
languages.add("Python");
languages.add("Java");
languages.add("C++");
languages.add("Java");

int count =
        Collections.frequency(
                languages,
                "Java");

System.out.println(count);
\`\`\`

Output:

\`\`\`text
3
\`\`\`

---

# Replace All Elements

The replaceAll() method replaces every occurrence of a specified value.

Example:

\`\`\`java
List<String> languages =
        new ArrayList<>();

languages.add("Java");
languages.add("Python");
languages.add("Java");

Collections.replaceAll(
        languages,
        "Java",
        "C++");

System.out.println(languages);
\`\`\`

Output:

\`\`\`text
[C++, Python, C++]
\`\`\`

---

# Fill a List

The fill() method replaces every element with the specified value.

Example:

\`\`\`java
List<Integer> numbers =
        new ArrayList<>();

numbers.add(10);
numbers.add(20);
numbers.add(30);

Collections.fill(
        numbers,
        0);

System.out.println(numbers);
\`\`\`

Output:

\`\`\`text
[0, 0, 0]
\`\`\`

---

# Copy Elements

Collections.copy() copies elements from one list into another.

Example:

\`\`\`java
List<String> source =
        new ArrayList<>();

source.add("Java");
source.add("Python");
source.add("C++");

List<String> destination =
        new ArrayList<>();

destination.add("");
destination.add("");
destination.add("");

Collections.copy(
        destination,
        source);

System.out.println(
        destination);
\`\`\`

Output:

\`\`\`text
[Java, Python, C++]
\`\`\`

Important:

The destination list must have enough elements to receive the copied values.

---

# Swap Elements

The swap() method exchanges two positions in a list.

Example:

\`\`\`java
List<String> languages =
        new ArrayList<>();

languages.add("Java");
languages.add("Python");
languages.add("C++");

Collections.swap(
        languages,
        0,
        2);

System.out.println(languages);
\`\`\`

Output:

\`\`\`text
[C++, Python, Java]
\`\`\`

---

# Rotate a List

The rotate() method shifts elements by a specified distance.

Example:

\`\`\`java
List<Integer> numbers =
        new ArrayList<>();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);

Collections.rotate(
        numbers,
        1);

System.out.println(numbers);
\`\`\`

The elements are rotated according to the specified distance.

---

# Complete Algorithms Example

\`\`\`java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CollectionAlgorithmsExample {

    public static void main(String[] args) {

        List<Integer> numbers =
                new ArrayList<>();

        numbers.add(40);
        numbers.add(10);
        numbers.add(30);
        numbers.add(20);

        Collections.sort(numbers);

        System.out.println(
                "Sorted: " + numbers);

        System.out.println(
                "Minimum: "
                + Collections.min(numbers));

        System.out.println(
                "Maximum: "
                + Collections.max(numbers));

        Collections.reverse(numbers);

        System.out.println(
                "Reversed: " + numbers);

    }

}
\`\`\`

Output:

\`\`\`text
Sorted: [10, 20, 30, 40]
Minimum: 10
Maximum: 40
Reversed: [40, 30, 20, 10]
\`\`\`

---

# Collections vs Collection

A common interview question is the difference between:

Collection

and:

Collections

## Collection

Collection is an interface.

It is part of the Java Collections Framework.

Examples:

List

Set

Queue

---

## Collections

Collections is a utility class.

It provides static methods for operating on collections.

Examples:

\`\`\`java
Collections.sort();
Collections.reverse();
Collections.shuffle();
Collections.min();
Collections.max();
\`\`\`

Remember:

Collection

↓

Interface


Collections

↓

Utility class

---

# Practical Example: Ranking Scores

Suppose an application stores scores:

\`\`\`text
75
90
60
85
95
\`\`\`

You can sort them:

\`\`\`java
Collections.sort(scores);
\`\`\`

Result:

\`\`\`text
[60, 75, 85, 90, 95]
\`\`\`

Then:

\`\`\`java
Collections.reverse(scores);
\`\`\`

Result:

\`\`\`text
[95, 90, 85, 75, 60]
\`\`\`

---

# Practical Example: Finding the Highest Score

Given:

\`\`\`text
[75, 90, 60, 85, 95]
\`\`\`

Use:

\`\`\`java
Collections.max(scores);
\`\`\`

Result:

\`\`\`text
95
\`\`\`

---

# Practical Example: Counting Repeated Values

Suppose:

\`\`\`text
[Java, Python, Java, C++, Java]
\`\`\`

Use:

\`\`\`java
Collections.frequency(
        languages,
        "Java");
\`\`\`

Result:

\`\`\`text
3
\`\`\`

---

# Practical Example: Randomizing Questions

Suppose an application has a list of questions.

\`\`\`java
Collections.shuffle(
        questions);
\`\`\`

The questions are rearranged randomly.

This can be useful when creating randomized practice sessions.

---

# Common Mistakes

## 1. Using Binary Search on an Unsorted List

This is incorrect:

\`\`\`java
Collections.binarySearch(
        unsortedList,
        value);
\`\`\`

Sort the list first using the same ordering.

---

## 2. Confusing Collection and Collections

Remember:

Collection → Interface

Collections → Utility class

---

## 3. Assuming shuffle() Produces the Same Order

shuffle() rearranges elements randomly.

The exact order can change.

---

## 4. Using copy() with an Empty Destination

The destination list must already contain enough positions for the copied elements.

---

## 5. Forgetting That Algorithms Often Modify the List

Methods such as:

- sort()
- reverse()
- shuffle()
- fill()
- replaceAll()
- swap()
- rotate()

modify the supplied list.

---

# Best Practices

- Use Collections utility methods instead of manually implementing common operations.
- Sort before using binarySearch().
- Understand whether an operation modifies the original collection.
- Use min() and max() when simple extreme-value lookup is required.
- Use frequency() for counting occurrences.
- Use shuffle() when randomized ordering is required.
- Use appropriate comparators when custom ordering is needed.
- Remember the difference between Collection and Collections.

---

# Interview Questions

## Q1. What is Collections?

Collections is a utility class in java.util that provides static methods for operating on collections.

---

## Q2. What is the difference between Collection and Collections?

Collection is an interface.

Collections is a utility class.

---

## Q3. What does Collections.sort() do?

It sorts a list according to its natural ordering or a supplied comparator.

---

## Q4. What does Collections.reverse() do?

It reverses the order of elements in a list.

---

## Q5. What does Collections.shuffle() do?

It randomly rearranges the elements of a list.

---

## Q6. What does Collections.min() return?

It returns the minimum element according to the collection's ordering.

---

## Q7. What does Collections.max() return?

It returns the maximum element according to the collection's ordering.

---

## Q8. What is binarySearch() used for?

It searches for an element in a sorted list using binary search.

---

## Q9. What does frequency() do?

It counts how many times an element occurs in a collection.

---

## Q10. Does Collections.sort() modify the original list?

Yes.

It sorts the supplied list.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain the Collections utility class.
- Sort collections.
- Reverse lists.
- Shuffle lists.
- Find minimum elements.
- Find maximum elements.
- Perform binary search.
- Count element frequency.
- Replace elements.
- Fill lists.
- Copy lists.
- Swap elements.
- Rotate lists.
- Understand Collection vs Collections.
- Use collection algorithms effectively.
- Avoid common algorithm mistakes.

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

✓ Lesson 14 — Collection Algorithms

→ Lesson 15 — Student Record Management System

---

# Next Lesson

## Lesson 15 — Student Record Management System

You will build a practical Java application using the concepts learned throughout the module.

The project will combine:

- Collections
- List
- Set
- Queue
- PriorityQueue
- Deque
- HashSet
- LinkedHashSet
- TreeSet
- Collection algorithms
- Searching
- Sorting
- Data processing

The project will help you understand how Java Collections are used together in a real application.

`
};

export default lesson14;
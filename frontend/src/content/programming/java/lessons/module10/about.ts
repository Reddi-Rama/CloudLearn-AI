const about = {
  id: "about",

  title: "Maps & Generics",

  content: `

# Module 10: Maps & Generics

## About This Module

Welcome to Module 10: Maps & Generics.

In the previous module, you learned how to work with the Java Collections Framework using:

- List.
- ArrayList.
- LinkedList.
- Vector.
- Stack.
- Queue.
- PriorityQueue.
- Deque.
- Set.
- HashSet.
- LinkedHashSet.
- TreeSet.
- Collection algorithms.

You learned how to store, search, sort, and manage collections of objects.

But applications often need another important way of storing information.

Consider this data:

101 → Java

102 → Python

103 → C++

Here, each value is associated with a unique key.

This is called:

Key-Value Storage

Java provides the Map interface for this purpose.

At the same time, applications often need reusable code that can work with different data types.

For example:

A Box should be able to store:

Integer

String

Double

or other types.

Java provides:

Generics

Generics allow you to create reusable and type-safe classes and methods.

In this module, you will learn both:

Maps

and

Generics

You will also learn how to control the ordering of objects using:

- Comparable.
- Comparator.

Finally, you will combine these concepts to build a complete:

Inventory Management System

# Why Do We Need Maps?

Imagine an application storing course information.

A List could store:

Java

Python

C++

But what if you need to associate each course with a unique course ID?

You need:

101 → Java

102 → Python

103 → C++

Now you can retrieve a course using its key.

Example:

map.get(101)

Result:

Java

This key-value relationship is the main purpose of a Map.

# Why Do We Need Generics?

Suppose you create a class that stores a value.

Without Generics, you may need to work with Object.

This can require casting and can reduce type safety.

With Generics:

Box<Integer>

Box<String>

Box<Double>

The same class can work with different types while maintaining compile-time type safety.

# Real-World Applications

Maps and Generics are heavily used in real-world Java applications.

## Student Management

Student ID

↓

Student Record

Example:

101 → Student A

102 → Student B

103 → Student C

## Banking

Account Number

↓

Account Details

Example:

10001 → Account

10002 → Account

10003 → Account

## E-Commerce

Product ID

↓

Product

Example:

501 → Laptop

502 → Keyboard

503 → Mouse

## Inventory Systems

Product ID

↓

Product Information

Example:

1001 → Product

1002 → Product

1003 → Product

## Caching

Key

↓

Cached Data

Maps are commonly used for fast key-based lookup.

# What You Will Learn

In this module, you will learn how to:

- Understand the Map interface.
- Store data using key-value pairs.
- Work with HashMap.
- Work with LinkedHashMap.
- Work with TreeMap.
- Understand Hashtable.
- Create generic classes.
- Create generic methods.
- Use bounded Generics.
- Understand wildcards.
- Work with Comparable.
- Work with Comparator.
- Sort objects using different criteria.
- Understand immutable collections.
- Combine Maps and Generics.
- Build practical collection-based applications.

# Module Roadmap

This module contains 15 lessons.

## Lesson 1: Introduction to Maps

Learn:

- What is a Map?
- Key-value pairs.
- Map interface.
- Unique keys.
- Duplicate values.
- Basic Map operations.
- Map implementations.

## Lesson 2: HashMap

Learn:

- HashMap.
- Creating HashMap.
- Adding elements.
- Retrieving elements.
- Updating values.
- Removing elements.
- Searching.
- Iterating.
- HashMap characteristics.

## Lesson 3: LinkedHashMap

Learn:

- LinkedHashMap.
- Insertion order.
- Key-value storage.
- Iteration.
- Differences from HashMap.
- Practical applications.

## Lesson 4: TreeMap

Learn:

- TreeMap.
- Sorted keys.
- Natural ordering.
- Custom ordering.
- Navigation methods.
- TreeMap vs HashMap.

## Lesson 5: Hashtable

Learn:

- Hashtable.
- Key-value storage.
- Hashtable characteristics.
- Synchronization.
- Null restrictions.
- Hashtable vs HashMap.

## Lesson 6: Generic Classes

Learn:

- What are Generics?
- Generic classes.
- Type parameters.
- Generic fields.
- Generic constructors.
- Multiple type parameters.
- Type safety.

## Lesson 7: Generic Methods

Learn:

- Generic methods.
- Type parameters.
- Generic return values.
- Multiple type parameters.
- Type inference.
- Generic methods with collections.

## Lesson 8: Bounded Generics

Learn:

- Why bounds are needed.
- Upper bounds.
- extends.
- Bounded type parameters.
- Generic classes with bounds.
- Generic methods with bounds.
- Multiple bounds.

## Lesson 9: Wildcards

Learn:

- Wildcards.
- Unbounded wildcard.
- <?>
- Upper-bounded wildcard.
- <? extends T>
- Lower-bounded wildcard.
- <? super T>
- PECS principle.

## Lesson 10: Comparable

Learn:

- Comparable interface.
- Natural ordering.
- compareTo().
- Sorting custom objects.
- Implementing Comparable.

## Lesson 11: Comparator

Learn:

- Comparator interface.
- Custom ordering.
- compare().
- Lambda expressions.
- Multiple sorting strategies.

## Lesson 12: Sorting Objects

Learn:

- Sorting custom objects.
- Comparable.
- Comparator.
- Sorting by different fields.
- Ascending order.
- Descending order.
- Practical examples.

## Lesson 13: Immutable Collections

Learn:

- Immutable collections.
- Immutable Lists.
- Immutable Sets.
- Immutable Maps.
- List.of().
- Set.of().
- Map.of().
- Unmodifiable collections.

## Lesson 14: Maps & Generics in Practice

Learn:

- Combining Maps and Generics.
- Generic repositories.
- Nested generic collections.
- Map utility methods.
- computeIfAbsent().
- getOrDefault().
- putIfAbsent().
- replace().
- merge().

## Lesson 15: Inventory Management System

Build:

Inventory Management System

Using:

- Maps.
- Generics.
- Generic classes.
- Generic methods.
- Custom objects.
- Searching.
- Updating.
- Removing.
- Sorting.
- Comparators.
- Immutable collections.
- Lambda expressions.

# Maps and Generics Learning Flow

Maps

↓

Map Interface

↓

HashMap

↓

LinkedHashMap

↓

TreeMap

↓

Hashtable

↓

Generics

↓

Generic Classes

↓

Generic Methods

↓

Bounded Generics

↓

Wildcards

↓

Object Ordering

↓

Comparable

↓

Comparator

↓

Sorting Objects

↓

Immutable Collections

↓

Maps & Generics in Practice

↓

Inventory Management System

# Industry Importance

Maps and Generics are fundamental concepts in professional Java development.

They are widely used in:

- Spring Boot.
- Hibernate.
- JDBC.
- Android.
- REST APIs.
- Enterprise applications.
- Microservices.
- Data processing systems.
- E-commerce applications.
- Banking applications.

Maps are commonly used when applications need key-based lookup.

Generics are used throughout the Java Collections Framework and many modern Java APIs to provide type safety and reusable code.

# Skills You Will Gain

After completing this module, you will be able to:

- Store data using key-value pairs.
- Select appropriate Map implementations.
- Use HashMap.
- Use LinkedHashMap.
- Use TreeMap.
- Understand Hashtable.
- Create generic classes.
- Create generic methods.
- Use bounded type parameters.
- Use wildcards.
- Define natural ordering.
- Create custom ordering.
- Sort custom objects.
- Work with immutable collections.
- Combine Maps and Generics.
- Build reusable collection-based components.
- Build practical Java applications.

# Module Learning Outcomes

After completing Module 10, you will be able to:

- Explain the Map interface.
- Understand key-value storage.
- Differentiate HashMap, LinkedHashMap, TreeMap, and Hashtable.
- Create type-safe generic classes.
- Create reusable generic methods.
- Apply bounded Generics.
- Use wildcards correctly.
- Implement Comparable.
- Implement Comparator.
- Sort objects using multiple criteria.
- Work with immutable collections.
- Combine Maps and Generics in practical applications.
- Build an Inventory Management System.

# Final Project

## Inventory Management System

The final project combines the major concepts of Module 10.

Product

↓

Product ID

↓

Map<Integer, Product>

↓

Inventory

The system will support:

- Add Product.
- View Product.
- View All Products.
- Update Product.
- Remove Product.
- Search Product.
- Sort Products.
- Check Inventory.

The project will demonstrate how Maps, Generics, custom objects, Comparators, and collection operations work together in a practical Java application.

# Module 10 Conclusion

Maps provide an efficient way to organize information using:

Key → Value

Generics provide:

Reusable Code

+

Type Safety

Comparable and Comparator provide:

Object Ordering

+

Flexible Sorting

Immutable collections provide:

Safe Fixed Data

Together, these concepts allow you to build more powerful, reusable, type-safe, and maintainable Java applications.

By completing this module, you will move beyond basic collection usage and learn how Java applications organize structured data and reusable components.

# Module Progress

→ Lesson 1 — Introduction to Maps

Lesson 2 — HashMap

Lesson 3 — LinkedHashMap

Lesson 4 — TreeMap

Lesson 5 — Hashtable

Lesson 6 — Generic Classes

Lesson 7 — Generic Methods

Lesson 8 — Bounded Generics

Lesson 9 — Wildcards

Lesson 10 — Comparable

Lesson 11 — Comparator

Lesson 12 — Sorting Objects

Lesson 13 — Immutable Collections

Lesson 14 — Maps & Generics in Practice

Lesson 15 — Inventory Management System

# Next Lesson

## Lesson 1 — Introduction to Maps

You will learn:

- What is a Map?
- Key-value pairs.
- Map interface.
- Unique keys.
- Duplicate values.
- Creating a Map.
- Adding data.
- Retrieving data.
- Updating values.
- Removing data.
- Searching.
- Iterating through a Map.
- Practical examples.
- Common mistakes.
- Best practices.
- Interview questions.

`,
};

export default about;
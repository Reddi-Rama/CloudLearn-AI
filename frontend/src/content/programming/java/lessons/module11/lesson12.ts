const lesson12 = {

  id: "lesson12",

  title: "Concurrent Collections",

  content: `

# Concurrent Collections

## Introduction

In multithreaded applications, multiple threads often need to access collections such as lists, sets, queues, and maps.



For example:



Thread 1 ──┐

Thread 2 ──┼──> Shared Collection

Thread 3 ──┘



Regular collections such as ArrayList, HashMap, and HashSet are generally not designed for concurrent modification by multiple threads without external coordination.



Java provides the Concurrent Collections Framework to make common collection operations safer and more suitable for concurrent applications.



Important concurrent collections include:



- ConcurrentHashMap.
- CopyOnWriteArrayList.
- CopyOnWriteArraySet.
- BlockingQueue.
- ConcurrentLinkedQueue.
- ConcurrentLinkedDeque.



# Why Concurrent Collections Are Needed

Suppose multiple threads access a normal ArrayList.



List<Integer> numbers =
        new ArrayList<>();



If multiple threads modify it concurrently without proper coordination, the application can experience inconsistent behavior.



Conceptually:



Thread 1 → add()

Thread 2 → remove()

Thread 3 → iterate()

              ↓

        Shared Collection



Concurrent collections provide specialized mechanisms for handling concurrent access.



# Thread-Safe vs Concurrent

These terms are related but not identical.



A collection may be thread-safe because access is protected by synchronization.



However, a concurrent collection is generally designed specifically to allow useful concurrent operations with less unnecessary blocking.



The goal is not simply:



"Make everything synchronized"



Instead:



Allow multiple threads

        +

Protect shared state

        +

Maintain useful concurrency



# ConcurrentHashMap

One of the most important concurrent collections is:



ConcurrentHashMap<K, V>



It is a concurrent implementation of the Map interface.



Example:



import java.util.concurrent.ConcurrentHashMap;



ConcurrentHashMap<String, Integer> scores =
        new ConcurrentHashMap<>();



You can store key-value pairs:



scores.put("Java", 90);

scores.put("Python", 85);



# Basic ConcurrentHashMap Example

import java.util.concurrent.ConcurrentHashMap;

public class MapExample {

    public static void main(
            String[] args) {

        ConcurrentHashMap<String, Integer> map =
                new ConcurrentHashMap<>();

        map.put("Java", 90);

        map.put("Python", 85);

        map.put("C++", 88);


        System.out.println(
                map.get("Java"));

    }

}



Output:



90



# Why ConcurrentHashMap?

A normal HashMap is not designed for concurrent modification by multiple threads without external synchronization.



ConcurrentHashMap is designed specifically for concurrent access.



It allows multiple threads to perform many operations concurrently while maintaining the map's internal consistency.



# ConcurrentHashMap with Multiple Threads

ConcurrentHashMap<String, Integer> map =
        new ConcurrentHashMap<>();



Thread first =
        new Thread(() -> {

            map.put("Java", 90);

        });



Thread second =
        new Thread(() -> {

            map.put("Python", 85);

        });



first.start();

second.start();



Both threads can work with the same concurrent map.



# Important ConcurrentHashMap Methods

Some useful methods include:



put()

get()

remove()

containsKey()

putIfAbsent()

compute()

computeIfAbsent()

computeIfPresent()

merge()

replace()



These methods are useful when performing atomic map operations.



# putIfAbsent()

Suppose you only want to add a value if the key does not already exist.



map.putIfAbsent(
        "Java",
        90);



If "Java" already exists, the existing value is preserved.



This is useful in concurrent programs because the operation is designed for concurrent access.



# computeIfAbsent()

You can calculate a value only when a key is missing.



map.computeIfAbsent(
        "Java",
        key -> 90);



Conceptually:



Key exists?

   │

 ┌─┴─┐

Yes  No

 │    │

Do    Calculate

nothing value



# compute()

You can update a value using:



map.compute(
        "Java",
        (key, value) -> value == null
                ? 1
                : value + 1);



This is useful for concurrent counting patterns.



# merge()

Another useful operation is:



map.merge(
        "Java",
        1,
        Integer::sum);



If the key does not exist, 1 is inserted.



If it exists, the old value and 1 are combined using Integer::sum.



This is useful for frequency counting.



# Concurrent Frequency Counter

ConcurrentHashMap<String, Integer> counts =
        new ConcurrentHashMap<>();



counts.merge(
        "Java",
        1,
        Integer::sum);



counts.merge(
        "Java",
        1,
        Integer::sum);



System.out.println(
        counts.get("Java"));



Output:



2



# CopyOnWriteArrayList

Java provides:



CopyOnWriteArrayList<E>



It is useful when:



Reads are frequent

+

Writes are relatively rare



Example:



import java.util.concurrent.CopyOnWriteArrayList;



CopyOnWriteArrayList<String> names =
        new CopyOnWriteArrayList<>();



# How CopyOnWriteArrayList Works

When the list is modified, a new internal copy is created.



Conceptually:



Original List

[A, B, C]



Write Operation

      ↓

Create New Copy

      ↓

[A, B, C, D]



Existing readers can continue using the previous snapshot while the modification takes place.



# Example

CopyOnWriteArrayList<String> items =
        new CopyOnWriteArrayList<>();



items.add("A");

items.add("B");

items.add("C");



for (String item : items) {

    System.out.println(item);

}



Output:



A

B

C



# CopyOnWriteArrayList and Iteration

One useful characteristic is that its iterators do not throw ConcurrentModificationException simply because another thread modifies the list after the iterator is created.



The iterator works over the array snapshot associated with its creation.



This makes it useful for read-heavy scenarios.



# When to Use CopyOnWriteArrayList

Good use cases include:



- Configuration data.
- Listener lists.
- Frequently read collections.
- Collections with rare modifications.



It is generally not a good choice for collections with frequent writes because copying the underlying array can be expensive.



# CopyOnWriteArraySet

Java also provides:



CopyOnWriteArraySet<E>



It is a thread-safe set based on copy-on-write behavior.



Example:



CopyOnWriteArraySet<String> languages =
        new CopyOnWriteArraySet<>();



languages.add("Java");

languages.add("Python");

languages.add("C++");



It is appropriate for similar read-heavy scenarios where set semantics are needed.



# BlockingQueue

A very important concurrent collection is:



BlockingQueue



It is especially useful for the producer-consumer pattern.



Producer

   ↓

BlockingQueue

   ↓

Consumer



The queue provides blocking operations when appropriate.



# Basic BlockingQueue Example

import java.util.concurrent.ArrayBlockingQueue;

import java.util.concurrent.BlockingQueue;



BlockingQueue<String> queue =
        new ArrayBlockingQueue<>(5);



The number 5 represents the queue capacity.



# Producer

A producer can add an item:



queue.put("Task 1");



If the queue is full, put() waits until space becomes available.



Conceptually:



Queue Full

    ↓

Producer waits

    ↓

Consumer removes item

    ↓

Space available

    ↓

Producer continues



# Consumer

A consumer can retrieve an item:



String task =
        queue.take();



If the queue is empty, take() waits until an element becomes available.



Conceptually:



Queue Empty

    ↓

Consumer waits

    ↓

Producer adds item

    ↓

Consumer continues



# Producer-Consumer Example

import java.util.concurrent.ArrayBlockingQueue;

import java.util.concurrent.BlockingQueue;


public class ProducerConsumerExample {

    public static void main(
            String[] args) {

        BlockingQueue<String> queue =
                new ArrayBlockingQueue<>(3);


        Thread producer =
                new Thread(() -> {

                    try {

                        queue.put("Task 1");

                        queue.put("Task 2");

                        queue.put("Task 3");

                    } catch (InterruptedException e) {

                        Thread.currentThread()
                                .interrupt();

                    }

                });


        Thread consumer =
                new Thread(() -> {

                    try {

                        System.out.println(
                                queue.take());

                        System.out.println(
                                queue.take());

                    } catch (InterruptedException e) {

                        Thread.currentThread()
                                .interrupt();

                    }

                });


        producer.start();

        consumer.start();

    }

}



# Important BlockingQueue Implementations

Common implementations include:



ArrayBlockingQueue

LinkedBlockingQueue

PriorityBlockingQueue

DelayQueue

SynchronousQueue



Each is designed for different use cases.



# ArrayBlockingQueue

ArrayBlockingQueue<E>



is a bounded blocking queue backed by an array.



Example:



ArrayBlockingQueue<Integer> queue =
        new ArrayBlockingQueue<>(10);



It has a fixed capacity.



# LinkedBlockingQueue

LinkedBlockingQueue<E>



is a blocking queue based on linked nodes.



Example:



LinkedBlockingQueue<Integer> queue =
        new LinkedBlockingQueue<>();



It can be bounded if a capacity is specified.



# PriorityBlockingQueue

PriorityBlockingQueue<E>



is a blocking queue that orders elements according to their priority or comparator.



Example:



PriorityBlockingQueue<Integer> queue =
        new PriorityBlockingQueue<>();



queue.put(30);

queue.put(10);

queue.put(20);



System.out.println(
        queue.take());



Output:



10



The smallest integer is retrieved first using the natural ordering.



# ConcurrentLinkedQueue

Java provides:



ConcurrentLinkedQueue<E>



for a non-blocking, thread-safe FIFO queue.



Example:



ConcurrentLinkedQueue<String> queue =
        new ConcurrentLinkedQueue<>();



queue.offer("A");

queue.offer("B");

queue.offer("C");



System.out.println(
        queue.poll());



Output:



A



# ConcurrentLinkedQueue vs BlockingQueue

## ConcurrentLinkedQueue



Thread-safe

+

Non-blocking

+

FIFO



Operations return immediately rather than waiting for space or data.



## BlockingQueue



Thread-safe

+

Can block

+

Producer-consumer friendly



Operations such as put() and take() can wait.



# ConcurrentLinkedDeque

Java also provides:



ConcurrentLinkedDeque<E>



It is a thread-safe double-ended queue.



You can add or remove elements from both ends.



Front

  ↓

[A] [B] [C]

          ↑

         Back



# Choosing the Right Concurrent Collection

Use:



ConcurrentHashMap

→ Concurrent key-value data



CopyOnWriteArrayList

→ Read-heavy list



CopyOnWriteArraySet

→ Read-heavy set



BlockingQueue

→ Producer-consumer communication



ConcurrentLinkedQueue

→ Non-blocking concurrent FIFO



ConcurrentLinkedDeque

→ Non-blocking concurrent double-ended queue



# Concurrent Collections vs Synchronized Collections

Java also provides wrappers such as:



Collections.synchronizedList(...)



For example:



List<String> list =
        Collections.synchronizedList(
                new ArrayList<>());



This provides synchronized access to the wrapped collection.



However, concurrent collections are specifically designed for concurrent use cases and can provide better scalability or more suitable concurrency semantics depending on the collection.



# Iteration Considerations

Concurrent collections have different iterator behavior from ordinary collections.



For example, ConcurrentHashMap iterators are designed to tolerate concurrent modifications without throwing ConcurrentModificationException.



However, the iterator does not necessarily represent one immutable snapshot of the entire map.



Therefore:



Concurrent

≠

Always a fixed snapshot



Understand the consistency guarantees of the specific collection.



# Thread Safety Does Not Mean Every Operation Is Atomic

Consider:



if (!map.containsKey("Java")) {

    map.put("Java", 90);

}



Even though both individual operations are thread-safe, the combination may not be atomic.



Another thread can modify the map between them.



Prefer an atomic compound operation when one is available:



map.putIfAbsent(
        "Java",
        90);



# Concurrent Collections and Performance

Concurrent collections are designed to allow useful concurrency.



The goal is to avoid unnecessarily locking an entire data structure for every operation.



Conceptually:



Traditional Broad Lock

       ↓

More threads may wait



Concurrent Design

       ↓

More independent operations

       ↓

Better concurrency



Actual performance depends on workload and contention.



# ConcurrentHashMap Atomic Operations

ConcurrentHashMap provides several useful compound operations.



For example:



putIfAbsent()



compute()



computeIfAbsent()



computeIfPresent()



merge()



replace()



These methods allow common conditional updates to be expressed safely as concurrent map operations.



# Producer-Consumer Pattern

The producer-consumer pattern is one of the most important applications of BlockingQueue.



Producer

   ↓

Creates Work

   ↓

BlockingQueue

   ↓

Consumer

   ↓

Processes Work



This separates the production of work from the processing of work.



# Example: Task Processing

BlockingQueue<String> queue =
        new ArrayBlockingQueue<>(5);



Producer:



queue.put("Download File");



Consumer:



String task =
        queue.take();



The producer does not need to directly coordinate with the consumer using manual synchronization.



The queue provides the coordination mechanism.



# Concurrent Collections in Real Applications

## Web Applications

Multiple requests may access shared application data.



Requests

   ↓

ConcurrentHashMap

   ↓

Shared Data



## Download Manager

Download tasks can be placed into:



BlockingQueue



Workers can then process the tasks.



## Caching

ConcurrentHashMap can be used for shared cache data.



## Event Systems

CopyOnWriteArrayList can be useful for listener lists that are read frequently and modified rarely.



## Background Processing

BlockingQueue can connect producers and worker consumers.



# Best Practices

- Choose the collection based on the access pattern.
- Use ConcurrentHashMap for concurrent map operations.
- Use BlockingQueue for producer-consumer designs.
- Use CopyOnWriteArrayList only when its read-heavy characteristics fit the workload.
- Prefer atomic compound methods such as putIfAbsent() when appropriate.
- Understand iterator consistency guarantees.
- Avoid unnecessary external synchronization around concurrent collections.
- Do not assume every combination of operations is automatically atomic.
- Measure performance under realistic workloads.



# Interview Questions

## Q1. What are concurrent collections?

Collections specifically designed to support safe and useful concurrent access by multiple threads.



## Q2. What is ConcurrentHashMap?

A concurrent implementation of the Map interface designed for concurrent access.



## Q3. When should CopyOnWriteArrayList be used?

When reads are frequent and modifications are relatively rare.



## Q4. What is BlockingQueue?

A thread-safe queue that provides blocking operations useful for producer-consumer systems.



## Q5. What happens when take() is called on an empty BlockingQueue?

The calling thread waits until an element becomes available or it is interrupted.



## Q6. What happens when put() is called on a full bounded BlockingQueue?

The calling thread waits until space becomes available or it is interrupted.



## Q7. What is ConcurrentLinkedQueue?

A thread-safe, non-blocking FIFO queue.



## Q8. What is the difference between BlockingQueue and ConcurrentLinkedQueue?

BlockingQueue supports blocking operations, while ConcurrentLinkedQueue provides non-blocking concurrent queue operations.



## Q9. Why use putIfAbsent() instead of containsKey() followed by put()?

putIfAbsent() performs the intended conditional insertion as one concurrent map operation.



## Q10. Is every sequence of thread-safe collection operations automatically atomic?

No. Multiple individually safe operations can still form a non-atomic compound operation.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain concurrent collections.
- Understand ConcurrentHashMap.
- Use putIfAbsent().
- Use computeIfAbsent().
- Use merge().
- Understand CopyOnWriteArrayList.
- Understand CopyOnWriteArraySet.
- Understand BlockingQueue.
- Use ArrayBlockingQueue.
- Understand LinkedBlockingQueue.
- Understand PriorityBlockingQueue.
- Understand ConcurrentLinkedQueue.
- Understand ConcurrentLinkedDeque.
- Choose appropriate concurrent collections.
- Understand concurrent iteration.
- Understand atomic compound operations.



# Module Progress

✓ Lesson 1 — Introduction to Multithreading

✓ Lesson 2 — Thread Class

✓ Lesson 3 — Runnable

✓ Lesson 4 — Thread Lifecycle

✓ Lesson 5 — Synchronization

✓ Lesson 6 — Deadlock

✓ Lesson 7 — Inter-thread Communication

✓ Lesson 8 — Executor Framework

✓ Lesson 9 — Callable & Future

✓ Lesson 10 — Thread Pools

✓ Lesson 11 — Fork/Join Framework

✓ Lesson 12 — Concurrent Collections

→ Lesson 13 — Atomic Classes

Lesson 14 — Multithreading Best Practices

Lesson 15 — Download Manager Project



# Next Lesson

## Lesson 13 — Atomic Classes

You will learn:

- What does atomic mean?
- The problem with count++.
- AtomicInteger.
- AtomicLong.
- AtomicBoolean.
- AtomicReference.
- incrementAndGet().
- getAndIncrement().
- addAndGet().
- getAndAdd().
- compareAndSet().
- Compare-And-Set.
- Atomic arrays.
- Atomic classes vs synchronization.
- Atomicity and visibility.
- LongAdder.
- Lock-free concepts.
- Choosing atomic classes.
- Best Practices.
- Interview Questions.

`

};

export default lesson12;
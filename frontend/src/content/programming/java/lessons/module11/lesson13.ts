const lesson13 = {

  id: "lesson13",

  title: "Atomic Classes",

  content: `

# Atomic Classes

## Introduction

In multithreaded programs, multiple threads may need to update the same variable.



Consider:



int count = 0;



If multiple threads execute:



count++;



at the same time, the result may be incorrect because the operation involves multiple steps.



Java provides atomic classes to perform certain operations safely without requiring a traditional synchronized block.



# What Does Atomic Mean?

An operation is atomic when it behaves as one indivisible operation from the perspective of other threads.



Conceptually:



Thread 1

   ↓

Atomic Operation

   ↓

Complete



Another thread cannot observe the operation as partially completed.



# The Problem with count++

Consider:



count++;



Conceptually:



Read count

   ↓

Add 1

   ↓

Write count



Two threads can interleave these operations.



Example:



Initial count = 0



Thread 1 → reads 0

Thread 2 → reads 0



Thread 1 → writes 1

Thread 2 → writes 1



Expected:



2



Possible result:



1



This is a race condition.



# AtomicInteger

Java provides:



AtomicInteger



in:



java.util.concurrent.atomic



Example:



import java.util.concurrent.atomic.AtomicInteger;



AtomicInteger count =
        new AtomicInteger(0);



You can increment it safely:



count.incrementAndGet();



# Basic AtomicInteger Example

import java.util.concurrent.atomic.AtomicInteger;

public class AtomicExample {

    public static void main(String[] args) {

        AtomicInteger count =
                new AtomicInteger(0);


        count.incrementAndGet();


        System.out.println(
                count.get());

    }

}



Output:



1



# Important AtomicInteger Methods

Common methods include:



get()

set()

incrementAndGet()

getAndIncrement()

decrementAndGet()

getAndDecrement()

addAndGet()

getAndAdd()

compareAndSet()



# get()

Retrieves the current value.



Example:



int value =
        count.get();



# set()

Sets a new value.



Example:



count.set(100);



Now:



System.out.println(
        count.get());



Output:



100



# incrementAndGet()

This method increments the value and returns the updated value.



Example:



int result =
        count.incrementAndGet();



If the original value is:



10



the result is:



11



# getAndIncrement()

This method returns the current value and then increments it.



Example:



int result =
        count.getAndIncrement();



If the original value is:



10



then:



result = 10

count = 11



# Difference Between Increment Methods

## incrementAndGet()



Increment

   ↓

Return new value



## getAndIncrement()



Return old value

   ↓

Increment



Example:



AtomicInteger count =
        new AtomicInteger(10);



System.out.println(
        count.incrementAndGet());



Output:



11



But:



AtomicInteger count =
        new AtomicInteger(10);



System.out.println(
        count.getAndIncrement());



Output:



10



The value becomes 11 afterward.



# addAndGet()

Adds a value and returns the updated value.



Example:



count.addAndGet(5);



If:



count = 10



then:



count = 15



# getAndAdd()

Returns the old value and then adds the specified amount.



Example:



int old =
        count.getAndAdd(5);



If:



count = 10



then:



old = 10

count = 15



# compareAndSet()

One of the most important atomic operations is:



compareAndSet(expected, newValue)



It changes the value only if the current value equals the expected value.



Example:



AtomicInteger count =
        new AtomicInteger(10);



boolean changed =
        count.compareAndSet(
                10,
                20);



Since the current value is 10:



10 == expected 10



the update succeeds.



The value becomes:



20



# Failed compareAndSet()

Suppose:



AtomicInteger count =
        new AtomicInteger(10);



Then:



boolean changed =
        count.compareAndSet(
                5,
                20);



The current value is 10, not 5.



Therefore, the update fails.



Current = 10

Expected = 5



10 != 5



Update does not happen.



# CAS

compareAndSet() is commonly associated with:



CAS



which stands for:



Compare-And-Set



The conceptual operation is:



Read current value

       ↓

Compare with expected value

       ↓

If equal → update

If not equal → fail



This enables lock-free algorithms for certain operations.



# AtomicInteger with Multiple Threads

Example:



AtomicInteger count =
        new AtomicInteger(0);



Runnable task = () -> {

    for (int i = 0; i < 1000; i++) {

        count.incrementAndGet();

    }

};



Create threads:



Thread first =
        new Thread(task);



Thread second =
        new Thread(task);



Start them:



first.start();

second.start();



Wait:



first.join();

second.join();



Then:



System.out.println(
        count.get());



Expected:



2000



The increment operation is atomic.



# AtomicLong

For larger integer values, Java provides:



AtomicLong



Example:



import java.util.concurrent.atomic.AtomicLong;



AtomicLong total =
        new AtomicLong(0);



total.incrementAndGet();



It provides atomic operations for long values.



# AtomicBoolean

Java also provides:



AtomicBoolean



It is useful when multiple threads need to coordinate through a boolean value.



Example:



import java.util.concurrent.atomic.AtomicBoolean;



AtomicBoolean running =
        new AtomicBoolean(false);



Set:



running.set(true);



Read:



boolean state =
        running.get();



# compareAndSet() with AtomicBoolean

You can perform a conditional state transition:



if (running.compareAndSet(
        false,
        true)) {

    System.out.println(
            "State changed");

}



This means:



If running == false

        ↓

Change it to true



as one atomic operation.



# AtomicReference

Java provides:



AtomicReference<V>



for atomic operations on object references.



Example:



AtomicReference<String> status =
        new AtomicReference<>(
                "READY");



Update:



status.set("RUNNING");



Read:



System.out.println(
        status.get());



# compareAndSet() with AtomicReference

Example:



AtomicReference<String> status =
        new AtomicReference<>(
                "READY");



boolean changed =
        status.compareAndSet(
                "READY",
                "RUNNING");



If the current value is "READY", the update succeeds.



# Other Atomic Classes

Java provides several atomic classes.



Important examples include:



AtomicInteger

AtomicLong

AtomicBoolean

AtomicReference

AtomicIntegerArray

AtomicLongArray

AtomicReferenceArray



There are also advanced atomic classes such as:



AtomicIntegerFieldUpdater

AtomicLongFieldUpdater

AtomicReferenceFieldUpdater



These are useful in more specialized situations.



# Atomic Arrays

Java provides:



AtomicIntegerArray



for atomic operations on integer array elements.



Example:



AtomicIntegerArray numbers =
        new AtomicIntegerArray(5);



Update an element:



numbers.incrementAndGet(0);



Read:



System.out.println(
        numbers.get(0));



# AtomicInteger vs synchronized

You can protect a counter using synchronization:



synchronized void increment() {

    count++;

}



Or use:



AtomicInteger count =
        new AtomicInteger();



count.incrementAndGet();



Both approaches can provide thread-safe behavior, but they are suited to different situations.



# When Atomic Classes Are Useful

Atomic classes are useful for simple shared state such as:



- Counters.
- Flags.
- Sequence numbers.
- Statistics.
- State transitions.
- Object references.



For example:



Number of completed tasks

Number of errors

Application running state

Next generated ID



# Atomic Classes vs Synchronization

## Atomic Classes

Good for:



Simple independent state



Examples:



Increment counter

Change flag

Compare and update value



## Synchronization

Useful for:



Multiple related variables

Complex invariants

Multiple operations that must happen together



For example:



Check balance

+

Update balance

+

Update transaction state



may require a coordinated critical section rather than a single atomic variable.



# Atomicity Does Not Mean Everything Is Thread-Safe

Suppose you have:



AtomicInteger count =
        new AtomicInteger();



The individual atomic operations are safe.



But a sequence such as:



Read value

Perform unrelated operation

Read again

Make decision



may still require higher-level coordination depending on the application logic.



Atomic variables do not automatically make an entire application thread-safe.



# Atomic Operations and Visibility

Atomic classes also provide appropriate memory-visibility guarantees for their operations.



When one thread updates an atomic variable, other threads using that atomic variable can observe the change according to the Java Memory Model.



This makes atomic classes useful for communicating simple state between threads.



# Example: Task Counter

AtomicInteger completedTasks =
        new AtomicInteger(0);



Whenever a task finishes:



completedTasks.incrementAndGet();



Later:



System.out.println(
        "Completed: "
        + completedTasks.get());



This is a common use case.



# Example: Application State

AtomicBoolean running =
        new AtomicBoolean(true);



A worker can check:



while (running.get()) {

    // Work

}



Another thread can request a stop:



running.set(false);



This provides a simple shared state flag.



For production interruption handling, however, thread interruption is often preferable for interruptible blocking operations.



# AtomicInteger and LongAdder

For extremely high-contention counters, Java also provides:



LongAdder



LongAdder is designed to provide good scalability for frequently updated counters under contention.



Example:



LongAdder counter =
        new LongAdder();



counter.increment();



System.out.println(
        counter.sum());



# AtomicInteger vs LongAdder

## AtomicInteger

Useful when you need:



Atomic updates

+

Exact current value

+

compareAndSet



## LongAdder

Useful for:



High-contention counters

+

Frequent updates



LongAdder does not provide the same compare-and-set style operations as AtomicInteger.



# Atomic Classes and CAS

Many atomic operations are implemented using low-level atomic primitives such as compare-and-set.



Conceptually:



Current Value

     ↓

Compare

     ↓

Expected?



 ┌───┴───┐

Yes      No

 ↓        ↓

Update   Retry / Fail



This can avoid the need for a traditional lock for certain operations.



# Lock-Free Does Not Mean Wait-Free

This is an advanced but important distinction.



A lock-free algorithm guarantees that system-wide progress can continue even if some individual operation is delayed.



A wait-free algorithm provides a stronger guarantee that every operation completes within a bounded number of its own steps.



Atomic classes can be used to build lock-free algorithms, but "atomic" does not automatically mean that every algorithm using them is wait-free.



# Common Mistake: Using AtomicInteger for Complex State

Suppose you need to update:



balance

transactionStatus

lastTransaction



as one consistent operation.



Using three separate atomic variables does not automatically make the entire update atomic.



You may need:



Synchronization



or



A lock



or



An atomic reference to a combined state object



depending on the design.



# AtomicReference for Combined State

Conceptually, instead of several independently updated fields, you can represent related state as one immutable object.



AtomicReference<AccountState> state;



Then use:



compareAndSet(
        oldState,
        newState);



This can make a multi-field state transition atomic.



This is an advanced concurrency design technique.



# Best Practices

- Use atomic classes for simple shared state.
- Prefer AtomicInteger for simple counters requiring atomic updates.
- Use AtomicBoolean for simple shared flags.
- Use AtomicReference for atomic reference/state transitions.
- Use compareAndSet() when conditional atomic updates are needed.
- Do not assume atomic variables make complex multi-variable operations atomic.
- Use synchronization or locks when multiple operations must form one critical section.
- Consider LongAdder for highly contended counters.
- Understand the difference between atomicity, lock-free, and wait-free behavior.



# Interview Questions

## Q1. What is an atomic operation?

An operation that appears indivisible to other threads.



## Q2. Why is count++ unsafe for concurrent updates?

Because it consists of multiple steps and can suffer from race conditions.



## Q3. What is AtomicInteger?

A class that provides atomic operations on an integer value.



## Q4. What does incrementAndGet() do?

It atomically increments the value and returns the updated value.



## Q5. What does getAndIncrement() do?

It returns the current value and then atomically increments it.



## Q6. What is compareAndSet?

It updates the value only when the current value matches the expected value.



## Q7. What is CAS?

CAS stands for Compare-And-Set, a fundamental atomic update technique.



## Q8. What is AtomicBoolean used for?

It provides atomic operations on a boolean value, often useful for shared state flags.



## Q9. What is AtomicReference?

It provides atomic operations on an object reference.



## Q10. When should synchronization be preferred over atomic variables?

When multiple related operations or variables must be protected as one consistent operation.



## Q11. What is LongAdder?

A concurrency utility designed for efficient high-contention counters.



## Q12. Does using AtomicInteger make an entire application thread-safe?

No. It only provides atomic operations for that particular atomic variable.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain atomic operations.
- Understand the problem with count++.
- Use AtomicInteger.
- Use AtomicLong.
- Use AtomicBoolean.
- Use AtomicReference.
- Use incrementAndGet().
- Use getAndIncrement().
- Use addAndGet().
- Use getAndAdd().
- Understand compareAndSet().
- Understand CAS.
- Use atomic arrays.
- Understand when atomic classes are appropriate.
- Distinguish atomic classes from synchronization.
- Understand LongAdder.
- Understand basic lock-free concepts.



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

✓ Lesson 13 — Atomic Classes

→ Lesson 14 — Multithreading Best Practices

Lesson 15 — Download Manager Project



# Next Lesson

## Lesson 14 — Multithreading Best Practices

You will learn:

- Higher-level concurrency utilities.
- Avoiding unnecessary thread creation.
- Shared mutable state.
- Immutability.
- Protecting shared data.
- Critical sections.
- Lock ordering.
- Nested locking.
- InterruptedException.
- volatile.
- Atomic classes.
- Concurrent collections.
- BlockingQueue.
- Busy waiting.
- sleep() and coordination.
- Executor shutdown.
- Execution order.
- Interruption.
- Future.get().
- Performance measurement.
- Common multithreading problems.
- Multithreading design checklist.
- Best Practices.
- Interview Questions.

`

};

export default lesson13;
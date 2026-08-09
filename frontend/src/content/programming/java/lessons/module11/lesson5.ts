const lesson5 = {

  id: "lesson5",

  title: "Synchronization",

  content: `

# Synchronization

## Introduction

When multiple threads access the same shared data, they can interfere with each other.



For example:



Thread 1 ──┐

           │

           ▼

       Shared Data

           ▲

           │

Thread 2 ──┘



If both threads modify the same data at the same time, the final result may be incorrect.



Synchronization is a mechanism used to control access to shared resources and help prevent inconsistent results.



# The Shared Resource Problem

Consider a counter:



int count = 0;



Suppose two threads both execute:



count++;



It may look like one simple operation, but conceptually it involves:



Read count

    ↓

Add 1

    ↓

Write count



If two threads interleave these operations, updates can be lost.



# Race Condition

A race condition occurs when the result depends on the timing or interleaving of concurrent operations.



For example:



Initial count = 0



Thread 1 → reads 0

Thread 2 → reads 0

Thread 1 → writes 1

Thread 2 → writes 1



Expected:

2



Possible result:

1



This is why shared mutable data requires careful synchronization.



# What Is Synchronization?

Synchronization controls access to a critical section so that only an appropriate thread can enter the protected section at a time.



Conceptually:



Thread 1 ──┐

           ▼

        [LOCK]

           │

           ▼

    Critical Section

           │

           ▼

        [UNLOCK]



Another thread trying to acquire the same lock must wait until the lock becomes available.



# The synchronized Keyword

Java provides:



synchronized



for synchronization.



It can be applied to:

- Instance methods.
- Static methods.
- Code blocks.



# Synchronized Method

Example:



class Counter {

    private int count = 0;

    public synchronized void increment() {

        count++;

    }

    public int getCount() {

        return count;

    }

}



The synchronized keyword ensures that only one thread at a time can execute the synchronized instance method for the same object monitor.



# Using the Counter

Create the shared object:



Counter counter =
        new Counter();



Multiple threads can use:



counter.increment();



The increment operation is protected by synchronization.



# Complete Example

class Counter {

    private int count = 0;

    public synchronized void increment() {

        count++;

    }

    public int getCount() {

        return count;

    }

}



class Worker implements Runnable {

    private Counter counter;

    Worker(Counter counter) {

        this.counter = counter;

    }

    @Override
    public void run() {

        for (int i = 0; i < 1000; i++) {

            counter.increment();

        }

    }

}



public class SynchronizationExample {

    public static void main(
            String[] args)
            throws InterruptedException {

        Counter counter =
                new Counter();

        Thread first =
                new Thread(
                        new Worker(counter));

        Thread second =
                new Thread(
                        new Worker(counter));

        first.start();

        second.start();

        first.join();

        second.join();

        System.out.println(
                counter.getCount());

    }

}



Expected output:



2000



because the increment operation is protected.



# Instance-Level Synchronization

When you use:



public synchronized void increment()



the lock is associated with the particular object instance.



For example:



Counter Object

      │

      └── Object Monitor Lock



Two threads using the same Counter object must coordinate when entering its synchronized instance methods.



# Important: Different Objects Have Different Locks

Consider:



Counter first =
        new Counter();



Counter second =
        new Counter();



Each object has its own monitor.



Therefore, synchronization on first does not automatically block synchronization on second.



first

 ↓

Lock A



second

 ↓

Lock B



# Synchronized Block

Instead of synchronizing an entire method, you can synchronize only a specific section.



Syntax:



synchronized (object) {

    // critical section

}



Example:



class Counter {

    private int count = 0;

    public void increment() {

        synchronized (this) {

            count++;

        }

    }

    public int getCount() {

        return count;

    }

}



# Why Use a Synchronized Block?

A synchronized block allows you to protect only the critical section.



For example:



public void process() {

    // Code that does not require locking

    synchronized (this) {

        // Shared data operation

    }

    // More non-critical work

}



This can reduce the amount of time a lock is held.



# Synchronizing on a Dedicated Lock

Instead of using this, you can use a private lock object.



class Counter {

    private int count = 0;

    private final Object lock =
            new Object();

    public void increment() {

        synchronized (lock) {

            count++;

        }

    }

}



This can provide better encapsulation because outside code cannot directly access the private lock.



# Why a Private Lock Can Be Useful

Suppose you write:



synchronized (this)



external code could potentially synchronize on the same object:



synchronized (counter) {

    // external code

}



Using:



private final Object lock =
        new Object();



keeps the lock private to the class.



# Static Synchronization

A static synchronized method locks on the Class object rather than an individual instance.



Example:



class Counter {

    private static int count = 0;

    public static synchronized void increment() {

        count++;

    }

}



The lock is associated with:



Counter.class



Conceptually:



Counter.class

      ↓

Class-level Lock



# Instance vs Static Synchronization

## Instance synchronized method



public synchronized void method() {

}



Locks the current object instance.



## Static synchronized method



public static synchronized void method() {

}



Locks the corresponding Class object.



# Synchronization and Mutual Exclusion

Synchronization provides mutual exclusion for the protected monitor.



This means that only one thread at a time can own a particular monitor lock.



Lock

 │

 ├── Thread 1 → inside critical section

 │

 └── Thread 2 → waits



When Thread 1 exits the synchronized region, another waiting thread can acquire the lock.



# Critical Section

A critical section is a portion of code that accesses shared state and requires coordinated access.



Example:



synchronized (lock) {

    count++;

}



Here:



count++



is the protected operation.



# Synchronization Does Not Make Everything Safe

Consider:



public synchronized void increment() {

    count++;

}



public int getCount() {

    return count;

}



If other code modifies or accesses count without the same synchronization strategy, the overall design may still have concurrency problems.



Thread safety requires consistent protection of shared state.



# Example: Shared Bank Account

Suppose an account has:



private double balance;



Two threads might attempt to modify the balance.



A synchronized method can protect the operation:



class Account {

    private double balance;

    public synchronized void deposit(
            double amount) {

        balance += amount;

    }

    public synchronized double getBalance() {

        return balance;

    }

}



Both methods use the same object's monitor.



# Synchronization and Object Locks

Every Java object can be associated with a monitor used by synchronized operations.



When a thread enters:



synchronized (object) {

    // protected code

}



it must acquire that object's monitor.



When the synchronized block exits, the monitor is released.



# Automatic Lock Release

Java releases the monitor when execution leaves the synchronized block or method, including when an exception causes control to leave the synchronized region.



Example:



synchronized (lock) {

    // protected code

}



You do not manually unlock it.



# Synchronized Method Example

class Printer {

    public synchronized void print(
            String message) {

        for (int i = 1; i <= 3; i++) {

            System.out.println(
                    message
                    + " "
                    + i);

        }

    }

}



If multiple threads use the same Printer object, only one can execute the synchronized method at a time.



# Synchronized Block Example

class Printer {

    public void print(
            String message) {

        synchronized (this) {

            for (int i = 1; i <= 3; i++) {

                System.out.println(
                        message
                        + " "
                        + i);

            }

        }

    }

}



The critical section is explicitly protected.



# Synchronization with Runnable

class Counter {

    private int count;

    public synchronized void increment() {

        count++;

    }

    public int getCount() {

        return count;

    }

}



class CounterTask
        implements Runnable {

    private Counter counter;

    CounterTask(Counter counter) {

        this.counter = counter;

    }

    @Override
    public void run() {

        for (int i = 0; i < 1000; i++) {

            counter.increment();

        }

    }

}



Create shared data:



Counter counter =
        new Counter();



Create tasks:



Thread first =
        new Thread(
                new CounterTask(counter));



Thread second =
        new Thread(
                new CounterTask(counter));



Start them:



first.start();

second.start();



# Synchronization and Performance

Synchronization provides safety, but it also has a cost.



If too much code is synchronized:



Thread 1

   ↓

Large Critical Section

   ↓

Other Threads Wait



This can reduce concurrency.



Therefore, synchronize only what needs protection.



# Coarse-Grained Synchronization

A large method may be synchronized:



public synchronized void process() {

    // Many operations

}



This is simple, but it may keep the lock for longer than necessary.



# Fine-Grained Synchronization

Only the shared operation is synchronized:



public void process() {

    // Non-critical work

    synchronized (lock) {

        // Shared data

    }

    // More non-critical work

}



This can allow more concurrent execution.



However, finer-grained synchronization can also make code more complex, so it should be used carefully.



# Synchronization and Atomicity

Synchronization can make a group of operations behave as one protected critical section.



For example:



synchronized (lock) {

    if (balance >= amount) {

        balance -= amount;

    }

}



The check and update occur under the same lock.



Without appropriate coordination, another thread could change the shared state between these operations.



# Synchronization and Visibility

Synchronization also provides memory-visibility guarantees between threads that use the same monitor correctly.



When one thread exits a synchronized block and another later acquires the same monitor, changes made before releasing the lock become visible according to Java's memory model.



This is one reason synchronization is more than simply "making one thread wait."



# Common Mistake: Synchronizing Different Objects

This does not protect shared data correctly:



synchronized (new Object()) {

    count++;

}



Each execution creates a different lock object.



Thread 1 → Lock A

Thread 2 → Lock B



The threads are not coordinating on the same monitor.



Use a shared lock instead:



private final Object lock =
        new Object();



Then:



synchronized (lock) {

    count++;

}



# Common Mistake: Inconsistent Locking

Suppose one method uses:



synchronized (lock)



but another method accesses the same shared state without using the same synchronization strategy.



The shared data may still be unsafe.



The important rule is:



Shared State

     ↓

Consistent Synchronization Strategy



# Synchronization vs volatile

These concepts are different.



synchronized provides:

- Mutual exclusion.
- Memory visibility.
- Coordination around critical sections.



volatile provides visibility guarantees for a variable but does not generally provide compound-operation atomicity.



For example:



count++;



is not made atomic merely by declaring:



volatile int count;



For counters, atomic classes such as AtomicInteger can be appropriate depending on the design.



Atomic classes will be covered in Lesson 13.



# Synchronization vs Atomic Classes

For a simple counter, you might use:



AtomicInteger count =
        new AtomicInteger();



instead of synchronization.



But synchronization remains useful when several related operations must be protected together.



For example:



Check condition

      +

Update multiple fields



may require a critical section.



# Reentrant Synchronization

Java's intrinsic monitor locks are reentrant.



This means a thread that already owns a monitor can enter another synchronized method or block guarded by the same monitor.



Conceptually:



Thread

  ↓

Acquires Lock

  ↓

Calls another synchronized method

  ↓

Same Thread acquires same monitor again



The JVM keeps track of the monitor ownership.



# Example

class Example {

    public synchronized void first() {

        second();

    }

    public synchronized void second() {

        System.out.println(
                "Second method");

    }

}



The same thread can enter second() because it already owns the object's monitor.



# Synchronization and Deadlock

Synchronization must be designed carefully.



If multiple locks are acquired in inconsistent orders, deadlock can occur.



Example concept:



Thread 1

   ↓

Lock A

   ↓

Waits for Lock B



Thread 2

   ↓

Lock B

   ↓

Waits for Lock A



Both can wait indefinitely.



Deadlocks are covered in Lesson 6.



# Best Practices

- Protect shared mutable state consistently.
- Keep critical sections small.
- Use the same lock when protecting the same shared state.
- Prefer private lock objects when appropriate.
- Do not synchronize on publicly accessible objects without a good reason.
- Avoid unnecessary synchronization.
- Do not assume volatile replaces synchronization.
- Avoid inconsistent locking strategies.
- Be careful when using multiple locks.
- Consider concurrent collections and atomic classes when they fit the problem.



# Interview Questions

## Q1. What is synchronization?

Synchronization is a mechanism used to coordinate access to shared resources among multiple threads.



## Q2. What keyword is used for synchronization?

synchronized



## Q3. What is a critical section?

A portion of code that accesses shared state and needs coordinated execution.



## Q4. What is a race condition?

A situation where concurrent execution causes the result to depend on timing or interleaving of operations.



## Q5. What does a synchronized instance method lock?

It locks the monitor associated with the current object.



## Q6. What does a static synchronized method lock?

It locks the monitor associated with the corresponding Class object.



## Q7. What is a synchronized block?

A specific block of code protected by a monitor:



synchronized (lock) {

    // critical section

}



## Q8. Why should critical sections be kept small?

To reduce lock contention and allow other threads to make progress.



## Q9. Does synchronization provide memory visibility?

Yes, correctly paired monitor operations provide the relevant happens-before guarantees.



## Q10. Can synchronization prevent deadlocks automatically?

No.

Poor lock design can still result in deadlocks.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain synchronization.
- Understand race conditions.
- Identify shared resources.
- Use the synchronized keyword.
- Create synchronized methods.
- Create synchronized blocks.
- Understand object-level locking.
- Understand class-level locking.
- Use private lock objects.
- Understand critical sections.
- Understand mutual exclusion.
- Understand synchronization and visibility.
- Distinguish synchronization from volatile.
- Understand synchronization and atomic operations.
- Recognize how poor locking can cause deadlocks.



# Module Progress

✓ Lesson 1 — Introduction to Multithreading

✓ Lesson 2 — Thread Class

✓ Lesson 3 — Runnable

✓ Lesson 4 — Thread Lifecycle

✓ Lesson 5 — Synchronization

→ Lesson 6 — Deadlock

Lesson 7 — Inter-thread Communication

Lesson 8 — Executor Framework

Lesson 9 — Callable & Future

Lesson 10 — Thread Pools

Lesson 11 — Fork/Join Framework

Lesson 12 — Concurrent Collections

Lesson 13 — Atomic Classes

Lesson 14 — Multithreading Best Practices

Lesson 15 — Download Manager Project



# Next Lesson

## Lesson 6 — Deadlock

You will learn:

- What is deadlock?
- Deadlock conditions.
- Mutual exclusion.
- Hold and wait.
- No preemption.
- Circular wait.
- Creating a deadlock.
- Deadlock vs race condition.
- Deadlock vs starvation.
- Deadlock vs livelock.
- Lock ordering.
- Deadlock prevention.
- Lock timeouts.
- Deadlock detection.
- Best Practices.
- Interview Questions.

`

};

export default lesson5;
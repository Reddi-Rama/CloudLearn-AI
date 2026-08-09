const lesson6 = {

  id: "lesson6",

  title: "Deadlock",

  content: `

# Deadlock

## Introduction

When multiple threads work with shared resources, they sometimes need to acquire multiple locks.



If threads acquire those locks in an unfortunate order, they can end up waiting for each other forever.



This situation is called:



Deadlock



Conceptually:



Thread 1

   ↓

Owns Lock A

   ↓

Waiting for Lock B

           ↑

           │

Thread 2

   ↓

Owns Lock B

   ↓

Waiting for Lock A



Neither thread can continue.



# What Is Deadlock?

A deadlock occurs when two or more threads become permanently blocked because each thread is waiting for a resource held by another thread.



A simple example:



Thread 1 → Lock A → waits for Lock B



Thread 2 → Lock B → waits for Lock A



The result is:



Thread 1 → WAIT

Thread 2 → WAIT



Neither can proceed.



# Simple Real-World Example

Imagine two people each holding one item and waiting for the other:



Person A

   ↓

Has Book

   ↓

Needs Pen



Person B

   ↓

Has Pen

   ↓

Needs Book



Neither person can complete the task.



This is similar to a deadlock between threads.



# Deadlock Conditions

Deadlock is traditionally associated with four conditions.



## 1. Mutual Exclusion

A resource can be held by only one thread at a time.



Lock A

  ↓

Thread 1 owns it



Another thread cannot acquire the same resource until it becomes available.



# 2. Hold and Wait

A thread holds one resource while waiting for another.



Thread 1

  ↓

Holds Lock A

  ↓

Waits for Lock B



This creates the possibility of a circular dependency.



# 3. No Preemption

A resource cannot simply be forcibly taken away from the thread holding it.



The thread generally has to release the resource itself.



# 4. Circular Wait

There is a circular dependency.



Thread 1

   ↓

waits for Thread 2's resource

   ↓

Thread 2

   ↓

waits for Thread 1's resource



Together, these conditions can allow a deadlock to occur.



# Basic Deadlock Example

Consider:



class Resource {

    private final String name;

    Resource(String name) {

        this.name = name;

    }

}



Create two resources:



Resource resourceA =
        new Resource("A");



Resource resourceB =
        new Resource("B");



Now imagine two threads trying to acquire them in opposite orders.



# Deadlock Example

class DeadlockExample {

    private static final Object lockA =
            new Object();

    private static final Object lockB =
            new Object();

    public static void main(
            String[] args) {

        Thread first =
                new Thread(() -> {

                    synchronized (lockA) {

                        System.out.println(
                                "Thread 1 acquired Lock A");

                        synchronized (lockB) {

                            System.out.println(
                                    "Thread 1 acquired Lock B");

                        }

                    }

                });



        Thread second =
                new Thread(() -> {

                    synchronized (lockB) {

                        System.out.println(
                                "Thread 2 acquired Lock B");

                        synchronized (lockA) {

                            System.out.println(
                                    "Thread 2 acquired Lock A");

                        }

                    }

                });



        first.start();

        second.start();

    }

}



# How the Deadlock Happens

Suppose Thread 1 executes first:



Thread 1

   ↓

Acquires Lock A



Then Thread 2 executes:



Thread 2

   ↓

Acquires Lock B



Now:



Thread 1 → owns A → wants B



Thread 2 → owns B → wants A



Neither can continue.



Conceptually:



        ┌─────────────┐

        │             ↓

Thread 1             Lock B

   ↑                    │

   │                    ↓

 Lock A ←────────── Thread 2



The program can remain stuck.



# Why Deadlock Is Dangerous

Deadlocks can cause:

- Threads to stop making progress.
- Tasks to remain unfinished.
- Applications to appear frozen.
- Resources to remain locked.
- Requests to wait indefinitely.
- Difficult debugging situations.



A deadlock can be especially problematic in applications that handle many concurrent operations.



# Deadlock vs Race Condition

These concepts are different.



## Race Condition

The result may depend on the timing of concurrent operations.



Multiple Threads

      ↓

Shared Data

      ↓

Incorrect/Inconsistent Result



## Deadlock

Threads become stuck waiting for each other.



Thread 1 → waits for Thread 2



Thread 2 → waits for Thread 1



# Deadlock vs Starvation

Starvation occurs when a thread repeatedly fails to obtain the resources or execution opportunity it needs because other threads keep getting access.



Thread A → keeps getting resource



Thread B → keeps waiting



The difference is:



Deadlock

→ Threads wait for each other



Starvation

→ A thread is repeatedly denied progress



# Deadlock vs Livelock

In a livelock, threads are not blocked, but they keep responding to each other without making useful progress.



Conceptually:



Thread 1 → changes action

Thread 2 → changes action

Thread 1 → changes action

Thread 2 → changes action



The threads remain active, but the task does not progress.



# Avoiding Deadlock

One of the most important techniques is to acquire multiple locks in a consistent order.



For example:



Always acquire:



Lock A

   ↓

Lock B



Every thread follows the same order.



# Correct Lock Ordering

Instead of:



Thread 1:

A → B



Thread 2:

B → A



use:



Thread 1:

A → B



Thread 2:

A → B



Now Thread 2 may have to wait for A, but a circular dependency is avoided.



# Example with Consistent Lock Ordering

class SafeExample {

    private static final Object lockA =
            new Object();

    private static final Object lockB =
            new Object();

    public static void main(
            String[] args) {

        Thread first =
                new Thread(() -> {

                    synchronized (lockA) {

                        synchronized (lockB) {

                            System.out.println(
                                    "Thread 1 completed");

                        }

                    }

                });



        Thread second =
                new Thread(() -> {

                    synchronized (lockA) {

                        synchronized (lockB) {

                            System.out.println(
                                    "Thread 2 completed");

                        }

                    }

                });



        first.start();

        second.start();

    }

}



Both threads use:



Lock A → Lock B



There is no circular lock-order dependency.



# Avoid Unnecessary Locks

A simple way to reduce deadlock risk is to avoid acquiring multiple locks unless necessary.



Instead of:



Thread

 ↓

Lock A

 ↓

Lock B

 ↓

Work



consider whether the task can be redesigned to require only one lock.



Fewer locks generally mean fewer opportunities for lock-order problems.



# Keep Critical Sections Small

Long critical sections increase the time other threads may have to wait.



Avoid:



synchronized (lock) {

    // Large amount of unrelated work

}



Prefer:



// Non-critical work



synchronized (lock) {

    // Only shared-state operation

}



// More non-critical work



when that design is correct.



# Avoid Calling Unknown Code While Holding Locks

Be careful about calling external or complex methods while holding a lock.



For example:



synchronized (lock) {

    externalOperation();

}



If externalOperation() tries to acquire another lock, it can increase the risk of lock-order problems.



Keep synchronized regions predictable when possible.



# Lock Timeout Concept

Explicit lock APIs such as ReentrantLock provide mechanisms such as:



tryLock()



which can attempt to acquire a lock without waiting forever.



For example:



if (lock.tryLock()) {

    try {

        // Protected work

    } finally {

        lock.unlock();

    }

}



This can be useful in designs where indefinite waiting is undesirable.



ReentrantLock will be discussed more as your concurrency knowledge develops.



# Deadlock Detection

Deadlocks can sometimes be detected using monitoring and diagnostic tools.



In a running application, tools such as Java's thread diagnostics can help identify:



Thread A

  ↓

waiting for Lock B



Thread B

  ↓

waiting for Lock A



Thread dumps are especially useful when diagnosing applications that appear to be frozen.



# Practical Deadlock Prevention Strategy

When multiple locks are necessary:



1. Identify all locks.

       ↓

2. Define a global lock order.

       ↓

3. Always acquire locks in that order.

       ↓

4. Keep critical sections short.

       ↓

5. Avoid unnecessary nested locking.



# Common Deadlock Mistake

Thread 1:



synchronized (lockA) {

    synchronized (lockB) {

        // work

    }

}



Thread 2:



synchronized (lockB) {

    synchronized (lockA) {

        // work

    }

}



This opposite ordering creates a potential circular wait.



# Better Design

Use the same ordering:



synchronized (lockA) {

    synchronized (lockB) {

        // work

    }

}



for both threads when both locks are required.



# Deadlock and synchronized

The synchronized keyword itself is not bad.



The problem is usually how multiple locks are designed and acquired.



Good design:



Consistent lock ordering

        +

Small critical sections

        +

Minimal shared state



reduces the risk.



# Best Practices

- Avoid unnecessary locking.
- Avoid unnecessary multiple locks.
- Establish a consistent lock acquisition order.
- Keep critical sections small.
- Avoid holding locks while performing long operations.
- Be careful when calling external code while holding locks.
- Prefer higher-level concurrency utilities when appropriate.
- Use lock timeouts where appropriate.
- Learn to inspect thread dumps when debugging.
- Design shared-state access carefully.



# Interview Questions

## Q1. What is deadlock?

A situation where threads become permanently unable to proceed because each is waiting for resources held by another.



## Q2. What are the four classic conditions associated with deadlock?

- Mutual Exclusion.
- Hold and Wait.
- No Preemption.
- Circular Wait.



## Q3. How can deadlock be prevented?

One common approach is to acquire multiple locks in a consistent global order.



## Q4. What is circular wait?

A situation where threads form a cycle of dependencies, with each waiting for a resource held by another thread in the cycle.



## Q5. What is the difference between deadlock and starvation?

Deadlock prevents a group of threads from progressing because of circular waiting, while starvation occurs when a thread is repeatedly denied the resources or scheduling opportunity it needs.



## Q6. What is livelock?

Threads remain active and respond to each other but fail to make useful progress.



## Q7. Why should critical sections be small?

To reduce contention and reduce the time locks remain held.



## Q8. Can synchronized code cause deadlock?

Yes.

Deadlock can occur when multiple synchronized locks are acquired in conflicting orders.



# Key Takeaways

After completing this lesson, you should be able to:

- Define deadlock.
- Understand how deadlocks occur.
- Explain the four classic deadlock conditions.
- Create and identify a deadlock scenario.
- Distinguish deadlock from race conditions.
- Distinguish deadlock from starvation.
- Distinguish deadlock from livelock.
- Understand consistent lock ordering.
- Reduce deadlock risk through good synchronization design.
- Understand the purpose of lock timeouts.
- Recognize the importance of thread diagnostics.



# Module Progress

✓ Lesson 1 — Introduction to Multithreading

✓ Lesson 2 — Thread Class

✓ Lesson 3 — Runnable

✓ Lesson 4 — Thread Lifecycle

✓ Lesson 5 — Synchronization

✓ Lesson 6 — Deadlock

→ Lesson 7 — Inter-thread Communication

Lesson 8 — Executor Framework

Lesson 9 — Callable & Future

Lesson 10 — Thread Pools

Lesson 11 — Fork/Join Framework

Lesson 12 — Concurrent Collections

Lesson 13 — Atomic Classes

Lesson 14 — Multithreading Best Practices

Lesson 15 — Download Manager Project



# Next Lesson

## Lesson 7 — Inter-thread Communication

You will learn:

- Why threads need communication.
- wait().
- notify().
- notifyAll().
- Object monitor.
- Producer-consumer problem.
- Waiting conditions.
- Using while with wait().
- Shared resources.
- Thread coordination.
- Practical producer-consumer example.
- Best Practices.
- Interview Questions.

`

};

export default lesson6;
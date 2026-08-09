const lesson14 = {

  id: "lesson14",

  title: "Multithreading Best Practices",

  content: `

# Multithreading Best Practices

## Introduction

Multithreading can improve performance and responsiveness, but poorly designed concurrent code can introduce difficult problems.



Common problems include:



- Race Conditions.
- Deadlocks.
- Starvation.
- Livelocks.
- Data Inconsistency.
- Excessive Thread Creation.



Good multithreading design focuses on:



Correctness

    +

Safety

    +

Performance

    +

Maintainability



# 1. Prefer Higher-Level Concurrency Utilities

Java provides many concurrency utilities that are safer and easier to manage than manually creating threads.



Instead of repeatedly doing:



new Thread(task).start();



consider:



ExecutorService executor =
        Executors.newFixedThreadPool(4);



executor.submit(task);



Higher-level utilities include:



ExecutorService

Future

BlockingQueue

ConcurrentHashMap

AtomicInteger

ForkJoinPool



Choose the abstraction that matches the problem.



# 2. Avoid Unnecessary Thread Creation

Creating too many threads can consume system resources.



Avoid:



for (int i = 0; i < 10000; i++) {

    new Thread(task).start();

}



A better approach is to use a controlled executor:



ExecutorService executor =
        Executors.newFixedThreadPool(10);



Then submit the tasks.



# 3. Keep Shared Mutable State to a Minimum

Shared mutable state is one of the major sources of concurrency problems.



For example:



Thread 1 ──┐

Thread 2 ──┼──> Shared Mutable Data

Thread 3 ──┘



The more shared state you have, the more synchronization and coordination may be required.



Prefer:



Immutable Data

+

Local Variables

+

Controlled Shared State



whenever practical.



# 4. Prefer Immutability

An immutable object cannot be changed after it is created.



For example:



final class User {

    private final String name;


    User(String name) {

        this.name = name;

    }


    public String getName() {

        return name;

    }

}



Once created, the name reference cannot be reassigned.



Immutable objects are easier to share between threads because threads cannot modify their state.



# 5. Protect Shared Mutable Data

When multiple threads modify shared mutable state, use an appropriate concurrency mechanism.



Possible choices include:



synchronized

Lock

Atomic Classes

Concurrent Collections



Choose based on the problem.



For a simple counter:



AtomicInteger count =
        new AtomicInteger();



count.incrementAndGet();



For a complex critical section:



synchronized (lock) {

    // Shared-state operation

}



# 6. Keep Critical Sections Small

A critical section is a section of code where shared state is accessed under synchronization or a lock.



Avoid unnecessarily large sections:



synchronized (lock) {

    // Long calculation

    // File operation

    // Network operation

    // Shared state update

}



Prefer protecting only the shared-state operation when possible:



Perform independent work

        ↓

Acquire lock

        ↓

Small shared-state update

        ↓

Release lock



Smaller critical sections can reduce contention.



# 7. Maintain Consistent Lock Ordering

When multiple locks are required, always acquire them in a consistent order.



Bad design:



Thread 1:

Lock A → Lock B



Thread 2:

Lock B → Lock A



This can create a deadlock.



Better:



Thread 1:

Lock A → Lock B



Thread 2:

Lock A → Lock B



A consistent ordering helps prevent circular waiting.



# 8. Avoid Nested Locking When Possible

Nested locks increase complexity.



For example:



synchronized (lockA) {

    synchronized (lockB) {

        // Work

    }

}



If the design can be simplified to use one lock, that may reduce the possibility of deadlock.



When multiple locks are necessary, define and follow a clear ordering strategy.



# 9. Handle InterruptedException Correctly

Many concurrency methods can throw:



InterruptedException



For example:



try {

    Thread.sleep(1000);

} catch (InterruptedException e) {

    Thread.currentThread()
            .interrupt();

}



Restoring the interrupt status is often appropriate when the current method cannot fully handle the interruption.



Do not simply ignore interruption:



catch (InterruptedException e) {

}



unless there is a deliberate reason and the interruption has been handled appropriately.



# 10. Use volatile Correctly

The volatile keyword can provide visibility guarantees for a variable between threads.



Example:



private volatile boolean running =
        true;



If one thread changes:



running = false;



other threads accessing that volatile variable can observe the updated value according to the Java Memory Model.



# volatile Does Not Make Compound Operations Atomic

This is important.



Consider:



volatile int count;



count++;



volatile does not make:



read

+

increment

+

write



one atomic operation.



For a shared counter, an atomic class may be more appropriate:



AtomicInteger count =
        new AtomicInteger();



count.incrementAndGet();



# 11. Choose Atomic Classes for Simple State

For simple shared variables, atomic classes are often appropriate.



Examples:



AtomicInteger

AtomicLong

AtomicBoolean

AtomicReference



For example:



AtomicInteger completed =
        new AtomicInteger();



completed.incrementAndGet();



This is simpler than using a lock for a single counter.



# 12. Use Concurrent Collections

When multiple threads need to work with shared collections, consider concurrent collections.



Examples:



ConcurrentHashMap

CopyOnWriteArrayList

BlockingQueue

ConcurrentLinkedQueue



For example:



ConcurrentHashMap<String, Integer> map =
        new ConcurrentHashMap<>();



Use the collection that matches the workload.



# 13. Use BlockingQueue for Producer-Consumer Systems

Instead of manually implementing a shared buffer with wait() and notify(), a BlockingQueue can simplify the design.



Producer

   ↓

BlockingQueue

   ↓

Consumer



Example:



BlockingQueue<String> queue =
        new ArrayBlockingQueue<>(10);



Producer:



queue.put("Task");



Consumer:



String task =
        queue.take();



This provides built-in coordination.



# 14. Avoid Busy Waiting

Busy waiting repeatedly checks a condition without doing useful work.



Avoid:



while (!ready) {

    // Keep checking

}



This can waste CPU resources.



Prefer appropriate coordination mechanisms such as:



wait()

BlockingQueue

Future

CountDownLatch

Condition



depending on the problem.



# 15. Avoid Using sleep() for Coordination

This is fragile:



Thread.sleep(2000);



and then assuming another thread has completed.



The other thread might:



- Finish earlier.
- Take longer.
- Be interrupted.
- Be delayed by system scheduling.



Use proper synchronization or concurrency utilities instead.



# 16. Avoid Holding Locks During Slow Operations

Be careful with:



synchronized (lock) {

    downloadFile();

}



If downloadFile() takes a long time, other threads may remain blocked unnecessarily.



Prefer:



Perform slow operation

        ↓

Acquire lock

        ↓

Update shared state

        ↓

Release lock



when the application design allows it.



# 17. Shut Down Executors Properly

When an executor is no longer needed:



executor.shutdown();



For more controlled shutdown:



try {

    executor.shutdown();


    if (!executor.awaitTermination(
            10,
            TimeUnit.SECONDS)) {

        executor.shutdownNow();

    }

} catch (InterruptedException e) {

    executor.shutdownNow();

    Thread.currentThread()
            .interrupt();

}



This helps prevent resources from remaining active unnecessarily.



# 18. Do Not Assume Execution Order

Suppose:



executor.submit(
        () -> System.out.println("A"));



executor.submit(
        () -> System.out.println("B"));



You should not generally assume the output will always be:



A

B



unless the executor and task design specifically guarantee that order.



Concurrent tasks can execute in different orders.



# 19. Use Synchronization Only Where Needed

Too little synchronization can cause incorrect results.



Too much synchronization can reduce concurrency.



The goal is:



Enough synchronization

        ↓

Correctness

        +

Maximum reasonable concurrency



Do not synchronize large sections of code without understanding why the lock is necessary.



# 20. Avoid Synchronizing on Public Objects

Avoid using publicly accessible objects as locks:



synchronized (somePublicObject) {

    // Work

}



Another part of the application could synchronize on the same object and create unexpected lock interactions.



Prefer a private lock:



private final Object lock =
        new Object();



Then:



synchronized (lock) {

    // Protected work

}



# 21. Prefer Higher-Level APIs

Before manually implementing complex synchronization, check whether Java already provides a suitable utility.



For example:



Need a task executor?

→ ExecutorService



Need task result?

→ Callable + Future



Need producer-consumer?

→ BlockingQueue



Need concurrent map?

→ ConcurrentHashMap



Need atomic counter?

→ AtomicInteger



Need divide-and-conquer?

→ ForkJoinPool



This often produces simpler and more maintainable code.



# 22. Design for Interruption

Long-running tasks should respond appropriately to interruption.



Example:



while (!Thread.currentThread()
        .isInterrupted()) {

    // Perform work

}



If the task is blocked in an interruptible operation, handle InterruptedException appropriately.



Interruption is a cooperative mechanism.



# 23. Avoid Swallowing Exceptions

Do not silently ignore exceptions from concurrent tasks.



Bad:



try {

    future.get();

} catch (Exception e) {

}



Instead, handle the failure meaningfully.



For example:



try {

    future.get();

} catch (InterruptedException e) {

    Thread.currentThread()
            .interrupt();

} catch (ExecutionException e) {

    System.out.println(
            "Task failed: "
            + e.getCause());

}



# 24. Be Careful with Future.get()

Calling:



future.get();



can block.



If you call it immediately after submitting every task, you may accidentally make your program behave more sequentially.



For example:



Submit Task 1

   ↓

get()

   ↓

Wait

   ↓

Submit Task 2



Instead, when appropriate:



Submit Task 1

Submit Task 2

Submit Task 3

        ↓

Collect Results



This can allow more concurrency.



# 25. Measure Performance

Do not assume that adding more threads automatically makes an application faster.



Performance depends on:



- CPU.
- Memory.
- I/O.
- Task Size.
- Thread Count.
- Contention.
- Synchronization.
- System Load.



Too many threads can actually reduce performance.



Always measure important workloads.



# 26. Understand the Difference Between Safety and Performance

A concurrent program must first be correct.



For example:



Fast + Incorrect

      ↓

Not useful



The goal is:



Correct

  ↓

Thread-safe

  ↓

Efficient



Optimize concurrency only after correctness is established.



# 27. Document Concurrency Assumptions

When writing concurrent code, document important assumptions.



For example:



This map is accessed concurrently.



This field is protected by lock.



Tasks are executed by the executor.



Only one thread updates this state.



Clear documentation makes concurrent code easier to maintain.



# 28. Common Multithreading Problems

## Race Condition

Multiple threads

      ↓

Shared state

      ↓

Unexpected result



## Deadlock

Thread A waits for B

Thread B waits for A



## Starvation

A thread repeatedly fails to obtain required resources.



## Livelock

Threads remain active but make no useful progress.



# Multithreading Design Checklist

Before finalizing concurrent code, ask:



□ Is shared state necessary?

□ Can data be immutable?

□ Can an executor manage the tasks?

□ Is synchronization required?

□ Can an atomic class solve the problem?

□ Can a concurrent collection help?

□ Can BlockingQueue simplify communication?

□ Could this create a deadlock?

□ Are locks acquired consistently?

□ Are critical sections small?

□ Are interruptions handled?

□ Is the executor shut down?

□ Have performance assumptions been measured?



# Best Practices Summary

1. Prefer high-level concurrency APIs.

2. Avoid unnecessary threads.

3. Minimize shared mutable state.

4. Prefer immutable objects.

5. Protect shared state correctly.

6. Keep critical sections small.

7. Maintain consistent lock ordering.

8. Handle interruption correctly.

9. Use atomic classes for simple state.

10. Use concurrent collections when appropriate.

11. Use BlockingQueue for producer-consumer designs.

12. Avoid busy waiting.

13. Avoid sleep-based coordination.

14. Shut down executors properly.

15. Measure performance.



# Interview Questions

## Q1. Why should thread creation be limited?

Threads consume system resources, and excessive thread creation can increase memory usage and scheduling overhead.



## Q2. Why is immutability useful in multithreading?

Immutable objects cannot be modified after creation, making them easier and safer to share between threads.



## Q3. Why should critical sections be small?

Small critical sections reduce the amount of time other threads must wait for a lock and can reduce contention.



## Q4. How can deadlocks be reduced?

Use consistent lock ordering, avoid unnecessary nested locking, and minimize the number of locks held at the same time.



## Q5. Why should InterruptedException not be ignored?

Ignoring interruption can prevent cooperative cancellation and shutdown from working correctly.



## Q6. Does volatile make operations atomic?

No. volatile provides visibility guarantees, but it does not make compound operations such as count++ atomic.



## Q7. Why use AtomicInteger?

It provides atomic operations for a shared integer without requiring a traditional synchronized block for each operation.



## Q8. Why use BlockingQueue?

It provides built-in coordination for producer-consumer designs.



## Q9. Why should sleep() not be used for coordination?

Because timing assumptions are unreliable and the other thread may finish earlier, take longer, or be delayed.



## Q10. Why should executors be shut down?

To release executor resources and prevent worker threads from remaining active unnecessarily.



## Q11. Why should concurrent programs be measured?

Because more threads do not automatically mean better performance. Contention, task size, CPU, I/O, and scheduling all affect performance.



## Q12. What is the difference between race condition and deadlock?

A race condition produces incorrect or unpredictable results because threads access shared state without proper coordination.



A deadlock occurs when threads wait indefinitely for resources held by each other.



# Key Takeaways

After completing this lesson, you should be able to:



- Apply multithreading best practices.
- Prefer higher-level concurrency APIs.
- Avoid unnecessary thread creation.
- Minimize shared mutable state.
- Use immutable objects.
- Protect shared state correctly.
- Keep critical sections small.
- Maintain consistent lock ordering.
- Handle InterruptedException correctly.
- Understand volatile.
- Use atomic classes appropriately.
- Use concurrent collections.
- Use BlockingQueue for producer-consumer systems.
- Avoid busy waiting.
- Avoid sleep-based coordination.
- Shut down executors properly.
- Handle concurrent task failures.
- Understand Future.get().
- Measure concurrency performance.
- Identify common multithreading problems.
- Design safer concurrent applications.



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

✓ Lesson 14 — Multithreading Best Practices

→ Lesson 15 — Download Manager Project



# Next Lesson

## Lesson 15 — Download Manager Project

In the final lesson, you will build a practical:

Download Manager



The project will combine concepts learned throughout the module, including:



- Threads.
- Runnable.
- Synchronization.
- Inter-thread communication.
- ExecutorService.
- Callable.
- Future.
- Thread pools.
- Fork/Join.
- Concurrent collections.
- Atomic classes.
- Exception handling.
- Multithreading best practices.



You will use these concepts together to build a practical multithreaded Java application.

`

};

export default lesson14;
const lesson10 = {

  id: "lesson10",

  title: "Thread Pools",

  content: `

# Thread Pools

## Introduction

In the previous lessons, you learned how ExecutorService, Runnable, Callable, and Future can be used to manage concurrent tasks.



When an application has many tasks, creating a new thread for every task can be inefficient.



For example:



Task 1 → New Thread

Task 2 → New Thread

Task 3 → New Thread

Task 4 → New Thread

Task 5 → New Thread



A better approach is to use a thread pool.



A thread pool maintains a group of reusable worker threads.



                 Tasks

                   │

        ┌──────────┼──────────┐

        ↓          ↓          ↓

     Task 1     Task 2     Task 3

        │          │          │

        └──────────┼──────────┘

                   ↓

              Thread Pool

           ┌───────┼───────┐

           ↓       ↓       ↓

        Thread 1 Thread 2 Thread 3



# What Is a Thread Pool?

A thread pool is a collection of worker threads that are created and managed by an executor to execute submitted tasks.



Instead of repeatedly creating and destroying threads, worker threads can be reused.



Task A → Worker 1

Task B → Worker 2

Task C → Worker 3



After completion:



Task D → Worker 1

Task E → Worker 2



This reduces the overhead associated with repeatedly creating threads.



# Why Use Thread Pools?

Thread pools provide several advantages:



- Reuse worker threads.
- Control the number of concurrently executing tasks.
- Reduce thread creation overhead.
- Manage large numbers of tasks.
- Improve application structure.
- Prevent uncontrolled creation of threads.



A useful principle is:



Many Tasks

    ↓

Controlled Number of Threads

    ↓

Better Resource Management



# Thread Pool Architecture

Consider a fixed thread pool containing three workers:



                 Executor

                     │

              ┌──────┴──────┐

              ↓             ↓

          Task Queue      Workers

                         ┌───┼───┐

                         ↓   ↓   ↓

                      Thread 1

                      Thread 2

                      Thread 3



If all three workers are busy, additional tasks wait until a worker becomes available.



# Fixed Thread Pool

The most common basic thread pool is created using:



Executors.newFixedThreadPool(3);



Example:



import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class FixedPoolExample {

    public static void main(
            String[] args) {

        ExecutorService executor =
                Executors.newFixedThreadPool(3);

        for (int i = 1; i <= 6; i++) {

            int taskNumber = i;

            executor.submit(() -> {

                System.out.println(
                        "Task "
                        + taskNumber
                        + " running on "
                        + Thread.currentThread()
                                .getName());

            });

        }

        executor.shutdown();

    }

}



There are six tasks but only three worker threads.



The workers are reused as tasks complete.



# How a Fixed Thread Pool Works

Suppose there are:



3 Threads

6 Tasks



Initially:



Thread 1 → Task 1

Thread 2 → Task 2

Thread 3 → Task 3



The remaining tasks wait:



Queue:

Task 4

Task 5

Task 6



When Thread 1 finishes:



Thread 1 → Task 4



When Thread 2 finishes:



Thread 2 → Task 5



The same worker threads are reused.



# Thread Reuse

One of the major advantages of a thread pool is thread reuse.



Without a pool:



Create Thread

     ↓

Execute Task

     ↓

Destroy Thread



Repeated many times.



With a pool:



Create Worker

     ↓

Task 1

     ↓

Task 2

     ↓

Task 3

     ↓

Task 4



The worker can execute multiple tasks.



# Single Thread Executor

A single-thread executor has one worker thread.



ExecutorService executor =
        Executors.newSingleThreadExecutor();



Example:



ExecutorService executor =
        Executors.newSingleThreadExecutor();



executor.submit(
        () -> System.out.println(
                "Task 1"));



executor.submit(
        () -> System.out.println(
                "Task 2"));



executor.submit(
        () -> System.out.println(
                "Task 3"));



executor.shutdown();



The tasks execute using one worker thread.



# When Is a Single Thread Executor Useful?

It can be useful when tasks should be processed one at a time.



For example:



Task 1

  ↓

Task 2

  ↓

Task 3

  ↓

Task 4



It can simplify situations where concurrent execution is unnecessary but background execution is useful.



# Cached Thread Pool

Java also provides:



Executors.newCachedThreadPool();



A cached thread pool can create worker threads as needed and reuse previously created threads when possible.



Example:



ExecutorService executor =
        Executors.newCachedThreadPool();



for (int i = 1; i <= 5; i++) {

    int taskNumber = i;

    executor.submit(() -> {

        System.out.println(
                "Task "
                + taskNumber);

    });

}



executor.shutdown();



# Important Note About Cached Thread Pools

A cached thread pool does not have a fixed maximum number of worker threads like a fixed thread pool.



If many tasks are submitted at once, it can create many threads.



Therefore, you should choose it carefully.



Cached Pool

    ↓

Flexible thread creation

    ↓

Potentially many threads



For workloads where the number of concurrent tasks must be strictly controlled, a bounded or fixed-size design is often more appropriate.



# Scheduled Thread Pool

Java provides:



Executors.newScheduledThreadPool(...)



for tasks that need delayed or periodic execution.



Example:



ScheduledExecutorService scheduler =
        Executors.newScheduledThreadPool(2);



Schedule a task:



scheduler.schedule(
        () -> System.out.println(
                "Task executed"),
        5,
        TimeUnit.SECONDS);



The task runs after the specified delay.



# Periodic Tasks

You can execute a task repeatedly:



scheduler.scheduleAtFixedRate(
        () -> System.out.println(
                "Running periodically"),
        0,
        5,
        TimeUnit.SECONDS);



Conceptually:



Run

 ↓

Wait

 ↓

Run

 ↓

Wait

 ↓

Run



This is useful for periodic operations such as monitoring or scheduled maintenance.



# Thread Pool Size

Choosing the pool size is important.



Suppose:



Thread Pool = 100 threads



but the application only has a small number of tasks.



Many threads may be unnecessary.



On the other hand:



Thread Pool = 1 thread



may prevent independent tasks from executing concurrently.



Therefore:



Pool Size

    ↓

Should match

    ↓

Workload + Resource Constraints



There is no single pool size that is optimal for every application.



# CPU-Bound Tasks

CPU-bound tasks spend most of their time performing calculations.



Examples:



- Large calculations.
- Image processing.
- Complex data processing.



Creating an extremely large number of threads for CPU-bound work can increase context switching and reduce performance.



A relatively small pool is often appropriate.



Conceptually:



CPU Work

   ↓

Limited Worker Count

   ↓

Efficient CPU Usage



# I/O-Bound Tasks

I/O-bound tasks spend significant time waiting for external operations.



Examples:



- File operations.
- Network requests.
- Database operations.



While one task waits, another worker can potentially make progress.



Therefore, the appropriate pool size may differ from CPU-bound workloads.



The exact choice depends on the application and its resource limits.



# CPU-Bound vs I/O-Bound

## CPU-Bound



Mostly computation

      ↓

CPU is busy

      ↓

Relatively small pool may be appropriate



## I/O-Bound



Waiting for external resources

      ↓

Worker may be blocked

      ↓

Different pool sizing may be appropriate



The important idea is:



Workload

   +

Resource Constraints

   ↓

Pool Configuration



# Task Queue

When all workers are busy, submitted tasks generally wait in a queue associated with the executor.



Example:



Workers:



Thread 1 → Busy

Thread 2 → Busy

Thread 3 → Busy



Queue:



Task 4

Task 5

Task 6

Task 7



When a worker becomes available:



Thread 1 → Task 4



# Thread Pool Lifecycle

A thread pool generally follows:



Create Pool

     ↓

Submit Tasks

     ↓

Execute Tasks

     ↓

Finish Work

     ↓

Shutdown



Always consider the executor's lifecycle in your application design.



# Shutting Down a Thread Pool

Use:



executor.shutdown();



This prevents new tasks from being submitted while allowing previously submitted tasks to finish.



If immediate interruption is appropriate:



executor.shutdownNow();



may be used.



Remember that shutdownNow() is a request, not a guarantee that all running tasks stop immediately.



# Waiting for Pool Termination

You can wait for termination:



executor.shutdown();



try {

    if (!executor.awaitTermination(
            10,
            TimeUnit.SECONDS)) {

        executor.shutdownNow();

    }

} catch (InterruptedException e) {

    executor.shutdownNow();

    Thread.currentThread().interrupt();

}



This provides a structured shutdown pattern.



# Thread Pool with Callable

Thread pools can execute Callable tasks too.



ExecutorService executor =
        Executors.newFixedThreadPool(2);



Future<Integer> result =
        executor.submit(
                () -> 25 * 4);



System.out.println(
        result.get());



executor.shutdown();



The worker thread executes the Callable and the Future represents its result.



# Thread Pool with Multiple Callable Tasks

ExecutorService executor =
        Executors.newFixedThreadPool(3);



Future<Integer> first =
        executor.submit(
                () -> 10);



Future<Integer> second =
        executor.submit(
                () -> 20);



Future<Integer> third =
        executor.submit(
                () -> 30);



System.out.println(
        first.get());



System.out.println(
        second.get());



System.out.println(
        third.get());



executor.shutdown();



The pool controls the worker threads while the Futures represent the results.



# Thread Pool with Runnable

ExecutorService executor =
        Executors.newFixedThreadPool(2);



Runnable task =
        () -> System.out.println(
                "Processing task");



executor.submit(task);



executor.shutdown();



The Runnable does not directly return a result.



# Thread Pool vs Individual Threads

## Individual Threads



Task 1 → Thread 1

Task 2 → Thread 2

Task 3 → Thread 3

Task 4 → Thread 4

...



The application directly manages many threads.



## Thread Pool



Task 1 ─┐

Task 2 ─┤

Task 3 ─┤

Task 4 ─┤

Task 5 ─┘

     ↓

Thread Pool

     ↓

Controlled Workers



The executor manages the worker threads.



# Common Mistake: Creating Too Many Threads

This approach can be problematic:



for (int i = 0; i < 10000; i++) {

    new Thread(
            () -> {

                // work

            }).start();

}



Creating huge numbers of threads can consume significant system resources and increase scheduling overhead.



A thread pool can provide better control:



ExecutorService executor =
        Executors.newFixedThreadPool(10);



# Common Mistake: Forgetting Shutdown

This is incomplete:



ExecutorService executor =
        Executors.newFixedThreadPool(3);



executor.submit(task);



The executor should eventually be shut down when it is no longer needed:



executor.shutdown();



# Modern Java Consideration

For production systems, you should choose executor configuration carefully rather than blindly using convenience factory methods.



In more advanced applications, explicitly configured ThreadPoolExecutor instances can provide finer control over:



- Core pool size.
- Maximum pool size.
- Keep-alive time.
- Work queue.
- Thread factory.
- Rejection policy.



These options become important when designing high-load systems.



# ThreadPoolExecutor

Java provides the class:



ThreadPoolExecutor



It gives more control over thread pool behavior than the simple Executors factory methods.



Conceptually:



ThreadPoolExecutor

       │

       ├── Core Threads

       ├── Maximum Threads

       ├── Work Queue

       ├── Keep-Alive Time

       └── Rejection Policy



You do not always need to configure these manually, but understanding them is useful for advanced Java development.



# Core Pool Size

Core pool size represents the number of core worker threads maintained by the executor.



Conceptually:



ThreadPoolExecutor

       ↓

Core Workers



The exact behavior depends on the executor configuration and workload.



# Maximum Pool Size

The maximum pool size limits how many worker threads the executor can create under its configured behavior.



Conceptually:



Core Threads

     +

Additional Threads

     ↓

Maximum Threads



This becomes important when the workload increases.



# Keep-Alive Time

Keep-alive time controls how long certain extra idle threads may remain available before being removed.



Conceptually:



Worker becomes idle

      ↓

Keep-Alive Period

      ↓

Worker may be removed



This helps manage resources in dynamically sized pools.



# Work Queue

The work queue stores tasks waiting for available workers.



Conceptually:



Submitted Tasks

      ↓

Work Queue

      ↓

Available Worker



The queue is an important part of thread pool behavior.



# Rejection of Tasks

A thread pool may reject a task when it cannot accept additional work, depending on its configuration and state.



Java provides rejection policies such as:



AbortPolicy

CallerRunsPolicy

DiscardPolicy

DiscardOldestPolicy



These are relevant when using a configured ThreadPoolExecutor.



# AbortPolicy

AbortPolicy rejects the task by throwing a rejection exception.



Conceptually:



Task

 ↓

Pool Cannot Accept

 ↓

Rejected



This makes the rejection visible to the caller.



# CallerRunsPolicy

CallerRunsPolicy can make the calling thread execute the task when the executor cannot accept it.



Conceptually:



Executor Busy

     ↓

Caller Executes Task



This can provide a form of natural backpressure.



# DiscardPolicy

DiscardPolicy silently discards the rejected task.



Therefore, it should be used only when losing such tasks is acceptable.



# DiscardOldestPolicy

DiscardOldestPolicy removes the oldest queued task and then attempts to submit the new task.



The choice of rejection policy depends on application requirements.



# Thread Pool with Download Tasks

Thread pools are especially useful for applications that perform many independent tasks.



For example:



Download 1

Download 2

Download 3

Download 4

Download 5



Instead of creating five separate threads:



Tasks

   ↓

Thread Pool

   ↓

Worker 1

Worker 2

Worker 3



The final Download Manager Project will use these concurrency concepts.



# Best Practices

- Use thread pools instead of creating large numbers of threads manually.
- Choose pool size based on workload and resource constraints.
- Avoid unnecessarily large pools.
- Use fixed pools when concurrency needs to be controlled.
- Use scheduled pools for delayed or periodic work.
- Shut down executors properly.
- Handle interruption correctly.
- Monitor long-running tasks.
- Avoid blocking operations inside small pools unless the pool is designed for them.
- Use ThreadPoolExecutor when you need detailed control over pool behavior.



# Interview Questions

## Q1. What is a thread pool?

A collection of reusable worker threads used to execute submitted tasks.



## Q2. Why are thread pools useful?

They reduce thread creation overhead and provide controlled concurrent execution.



## Q3. What is a fixed thread pool?

A thread pool with a fixed number of worker threads.



## Q4. What is a single-thread executor?

An executor that uses one worker thread to execute submitted tasks.



## Q5. What is a cached thread pool?

An executor that can dynamically create and reuse threads as needed.



## Q6. What is a scheduled thread pool?

A pool designed for delayed and periodic task execution.



## Q7. What happens when all worker threads are busy?

Additional submitted tasks generally wait in the executor's work queue until a worker becomes available.



## Q8. Why shouldn't you create thousands of threads unnecessarily?

Because threads consume resources and excessive thread creation can cause scheduling and memory overhead.



## Q9. What is ThreadPoolExecutor?

A configurable implementation of ExecutorService that provides detailed control over thread pool behavior.



## Q10. Should a thread pool be shut down?

Yes, when it is no longer needed.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain thread pools.
- Understand worker thread reuse.
- Create fixed thread pools.
- Create single-thread executors.
- Understand cached thread pools.
- Use scheduled thread pools.
- Understand task queues.
- Choose pool sizes thoughtfully.
- Execute Runnable and Callable tasks through pools.
- Shut down thread pools correctly.
- Understand ThreadPoolExecutor.
- Understand basic task rejection concepts.



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

→ Lesson 11 — Fork/Join Framework

Lesson 12 — Concurrent Collections

Lesson 13 — Atomic Classes

Lesson 14 — Multithreading Best Practices

Lesson 15 — Download Manager Project



# Next Lesson

## Lesson 11 — Fork/Join Framework

You will learn:

- What is Fork/Join?
- Divide-and-conquer.
- Fork.
- Join.
- ForkJoinPool.
- Work stealing.
- ForkJoinTask.
- RecursiveTask.
- RecursiveAction.
- compute().
- Base cases.
- Recursive cases.
- fork().
- join().
- invoke().
- invokeAll().
- Fork/Join vs ExecutorService.
- Practical examples.
- Best Practices.
- Interview Questions.

`

};

export default lesson10;
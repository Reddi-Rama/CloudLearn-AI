const lesson8 = {

  id: "lesson8",

  title: "Executor Framework",

  content: `

# Executor Framework

## Introduction

Creating and managing individual Thread objects is useful for learning, but large applications may need to execute many tasks.



For example:



Application

    │

    ├── Task 1

    ├── Task 2

    ├── Task 3

    ├── Task 4

    ├── Task 5

    └── Task 6



Creating a separate thread manually for every task can make the application difficult to manage.



Java provides the Executor Framework to separate:



Task Creation

      ↓

Task Execution

      ↓

Thread Management



Instead of manually managing every thread, you submit tasks to an executor.



# What Is the Executor Framework?

The Executor Framework is a set of Java concurrency APIs that provides a higher-level way to execute and manage tasks.



Important interfaces and classes include:



Executor

   ↓

ExecutorService

   ↓

Executors



It also works with:



Runnable

Callable

Future

Thread Pools



# Why Use Executor Framework?

Without an executor:



Create Thread

     ↓

Start Thread

     ↓

Manage Thread

     ↓

Finish



For many tasks, this becomes repetitive.



With an executor:



Create Task

     ↓

Submit Task

     ↓

Executor

     ↓

Thread Pool

     ↓

Execute Task



The executor handles much of the thread-management work.



# Executor Interface

The simplest executor interface is:



Executor



It provides:



void execute(Runnable command)



Example:



Executor executor =
        command -> command.run();



executor.execute(
        () -> System.out.println(
                "Task running"));



In practical applications, ExecutorService is usually more useful because it provides lifecycle management and task submission features.



# ExecutorService

ExecutorService extends Executor.



It provides methods for:

- Submitting tasks.
- Managing execution.
- Shutting down the executor.
- Working with Future.
- Executing multiple tasks.



Example:



ExecutorService executor =
        Executors.newSingleThreadExecutor();



# Submitting a Runnable

You can submit a Runnable task:



Runnable task =
        () -> System.out.println(
                "Task running");



executor.submit(task);



The executor chooses an appropriate thread to execute the task.



# execute() vs submit()

Both can be used with Runnable tasks.



## execute()



executor.execute(task);



It submits a Runnable for execution but does not return a Future.



## submit()



Future<?> future =
        executor.submit(task);



It returns a Future representing the submitted task.



This becomes especially useful when working with Callable.



# Creating a Single Thread Executor

Java provides:



Executors.newSingleThreadExecutor()



Example:



ExecutorService executor =
        Executors.newSingleThreadExecutor();



executor.submit(
        () -> System.out.println(
                "Task 1"));



executor.submit(
        () -> System.out.println(
                "Task 2"));



executor.shutdown();



Only one worker thread executes the tasks.



The tasks are processed sequentially by that executor.



# Single Thread Executor Flow



Task 1

   ↓

Task 2

   ↓

Task 3

   ↓

Single Worker Thread



The executor manages the worker thread instead of you manually creating and controlling it.



# Fixed Thread Pool

You can create a fixed-size thread pool:



ExecutorService executor =
        Executors.newFixedThreadPool(3);



This creates an executor with a fixed number of worker threads.



Conceptually:



           Executor

              │

      ┌───────┼───────┐

      ↓       ↓       ↓

   Thread 1 Thread 2 Thread 3



If more tasks are submitted than available worker threads, the extra tasks wait in the executor's queue.



# Example: Fixed Thread Pool

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



Three worker threads can execute tasks concurrently, while additional tasks wait until a worker becomes available.



# Thread Pool Concept

A thread pool is a collection of reusable worker threads.



Tasks

 │

 ├── Task 1

 ├── Task 2

 ├── Task 3

 ├── Task 4

 └── Task 5

       │

       ▼

   Thread Pool

       │

   ┌───┼───┐

   ↓   ↓   ↓

  T1  T2  T3



Instead of repeatedly creating new threads, existing worker threads can execute multiple tasks.



# Why Reuse Threads?

Manual approach:



Task 1

  ↓

new Thread()



Task 2

  ↓

new Thread()



Task 3

  ↓

new Thread()



This can create unnecessary thread-management overhead.



With a thread pool:



Task 1 ─┐

Task 2 ─┤

Task 3 ─┤

Task 4 ─┤

Task 5 ─┘

    ↓

Thread Pool

    ↓

Reusable Worker Threads



# Executor Lifecycle

An executor has a lifecycle.



Conceptually:



Create Executor

      ↓

Submit Tasks

      ↓

Execute Tasks

      ↓

Shutdown



You should properly shut down executors when they are no longer needed.



# shutdown()

Use:



executor.shutdown();



This tells the executor to stop accepting new tasks while allowing previously submitted tasks to finish.



Flow:



shutdown()

    ↓

No New Tasks

    ↓

Existing Tasks Finish

    ↓

Executor Terminates



# shutdownNow()

You can also use:



executor.shutdownNow();



It attempts to stop actively executing tasks by interrupting their worker threads and returns tasks that were waiting to execute.



It does not guarantee that currently running tasks will immediately stop.



Tasks should respond properly to interruption.



# shutdown() vs shutdownNow()

## shutdown()



Stop accepting new tasks

        ↓

Finish submitted tasks

        ↓

Terminate



## shutdownNow()



Attempt interruption

        ↓

Running tasks may stop if they cooperate

        ↓

Queued tasks are returned



In most normal cases, graceful shutdown with shutdown() is preferred.



# Checking Executor Shutdown

You can check:



executor.isShutdown();



This tells you whether shutdown has been initiated.



You can also use:



executor.isTerminated();



to check whether all tasks have completed after shutdown.



# Waiting for Termination

You can use:



executor.awaitTermination(
        10,
        TimeUnit.SECONDS);



This allows the current thread to wait for the executor to terminate for up to the specified duration.



It can throw:



InterruptedException



# Complete Executor Example

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorExample {

    public static void main(
            String[] args) {

        ExecutorService executor =
                Executors.newFixedThreadPool(2);

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

    }

}



# Executor with Runnable

A Runnable task can be submitted directly.



class DataTask
        implements Runnable {

    @Override
    public void run() {

        System.out.println(
                "Processing data");

    }

}



Then:



ExecutorService executor =
        Executors.newFixedThreadPool(2);



executor.submit(
        new DataTask());



executor.shutdown();



# Executor with Multiple Tasks

ExecutorService executor =
        Executors.newFixedThreadPool(3);



for (int i = 1; i <= 10; i++) {

    int number = i;

    executor.submit(() -> {

        System.out.println(
                "Processing task "
                + number);

    });

}



executor.shutdown();



The executor manages the available worker threads.



# Why Executors Are Better for Many Tasks

Manual approach:



Task 1 → new Thread()

Task 2 → new Thread()

Task 3 → new Thread()

Task 4 → new Thread()

...



Executor approach:



Task 1 ─┐

Task 2 ─┤

Task 3 ─┤

Task 4 ─┤

Task 5 ─┘

     ↓

Executor

     ↓

Worker Threads



This makes thread management more centralized.



# Scheduled Executor

Java also provides:



ScheduledExecutorService



It can execute tasks after a delay or periodically.



Example:



ScheduledExecutorService scheduler =
        Executors.newScheduledThreadPool(1);



You can schedule a task:



scheduler.schedule(
        () -> System.out.println(
                "Delayed task"),
        3,
        TimeUnit.SECONDS);



The task executes after approximately three seconds.



# Periodic Tasks

A scheduled executor can also execute tasks periodically.



Example:



scheduler.scheduleAtFixedRate(
        () -> System.out.println(
                "Running periodically"),
        0,
        5,
        TimeUnit.SECONDS);



This is useful for recurring tasks such as periodic monitoring.



Remember to shut down the scheduler when it is no longer needed.



# Executor Framework Architecture



             Tasks

               │

       ┌───────┴────────┐

       │                │

    Runnable         Callable

       │                │

       └───────┬────────┘

               ↓

        ExecutorService

               ↓

          Thread Pool

               ↓

         Worker Threads



This architecture separates task creation from thread management.



# ExecutorService and Callable

ExecutorService can also execute Callable tasks.



Example:



Callable<Integer> task =
        () -> 100;



Future<Integer> result =
        executor.submit(task);



The Future can later be used to retrieve the result.



This will be covered in detail in Lesson 9.



# Executor vs ExecutorService

## Executor

Provides basic task execution:



void execute(Runnable command)



## ExecutorService

Provides more features:

- Task submission.
- Lifecycle management.
- shutdown().
- shutdownNow().
- Future support.
- Multiple task execution.



Therefore:



Executor

    ↓

Basic execution



ExecutorService

    ↓

Execution + Management



# Task Submission Flow

The general flow is:



Create ExecutorService

        ↓

Create Task

        ↓

Submit Task

        ↓

Executor Queue

        ↓

Worker Thread

        ↓

Task Execution

        ↓

Task Complete



# Choosing an Executor

Different workloads may require different executor configurations.



For sequential execution:



newSingleThreadExecutor()



For a fixed number of concurrent workers:



newFixedThreadPool(n)



For delayed or periodic tasks:



newScheduledThreadPool(n)



The appropriate choice depends on the workload and application requirements.



# Best Practices

- Prefer executors over manually creating many threads.
- Choose an appropriate executor type for the workload.
- Always shut down executors when they are no longer needed.
- Prefer graceful shutdown when possible.
- Handle interruption correctly.
- Avoid creating unnecessarily large thread pools.
- Do not assume task execution order unless your executor/task design guarantees it.
- Keep tasks focused and manageable.
- Use Callable when tasks need to return results.
- Use scheduled executors for delayed or periodic work.



# Interview Questions

## Q1. What is the Executor Framework?

It is a Java concurrency framework for submitting and managing tasks without manually controlling every thread.



## Q2. What is ExecutorService?

ExecutorService is an interface that extends Executor and provides task submission and executor lifecycle management.



## Q3. What is the difference between execute() and submit()?

execute() accepts a Runnable and does not return a Future, while submit() returns a Future representing the submitted task.



## Q4. What does shutdown() do?

It stops accepting new tasks while allowing previously submitted tasks to complete.



## Q5. What does shutdownNow() do?

It attempts to interrupt running tasks and returns tasks that were waiting in the executor's queue.



## Q6. What is a thread pool?

A collection of reusable worker threads used to execute submitted tasks.



## Q7. What is newFixedThreadPool()?

It creates an executor with a fixed number of worker threads.



## Q8. Why are executors useful?

They separate task submission from thread management and allow threads to be reused.



## Q9. What is ScheduledExecutorService?

An executor service designed for delayed and periodic task execution.



## Q10. Should an ExecutorService be shut down?

Yes, when it is no longer needed, it should be properly shut down.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain the Executor Framework.
- Understand Executor.
- Understand ExecutorService.
- Submit Runnable tasks.
- Use execute().
- Use submit().
- Create single-thread executors.
- Create fixed thread pools.
- Understand executor lifecycle.
- Use shutdown().
- Understand shutdownNow().
- Check executor termination.
- Understand scheduled executors.
- Understand how executors work with Callable and Future.



# Module Progress

✓ Lesson 1 — Introduction to Multithreading

✓ Lesson 2 — Thread Class

✓ Lesson 3 — Runnable

✓ Lesson 4 — Thread Lifecycle

✓ Lesson 5 — Synchronization

✓ Lesson 6 — Deadlock

✓ Lesson 7 — Inter-thread Communication

✓ Lesson 8 — Executor Framework

→ Lesson 9 — Callable & Future

Lesson 10 — Thread Pools

Lesson 11 — Fork/Join Framework

Lesson 12 — Concurrent Collections

Lesson 13 — Atomic Classes

Lesson 14 — Multithreading Best Practices

Lesson 15 — Download Manager Project



# Next Lesson

## Lesson 9 — Callable & Future

You will learn:

- Why Runnable cannot directly return a result.
- Callable.
- call().
- Callable vs Runnable.
- Future.
- Asynchronous computation.
- future.get().
- get() with timeout.
- isDone().
- isCancelled().
- cancel().
- Callable exceptions.
- ExecutionException.
- Multiple Callable tasks.
- Combining results.
- Callable with thread pools.
- invokeAll().
- invokeAny().
- Best Practices.
- Interview Questions.

`

};

export default lesson8;
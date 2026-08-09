const lesson9 = {

  id: "lesson9",

  title: "Callable & Future",

  content: `

# Callable & Future

## Introduction

In the previous lesson, you learned how ExecutorService can execute Runnable tasks.



A Runnable task is useful when you only need to perform an operation:



Runnable

   ↓

Perform Task

   ↓

No Direct Result



But what if a background task needs to calculate something and return the result?



For this purpose, Java provides:



Callable

   +

Future



# What Is Callable?

Callable is a functional interface in:



java.util.concurrent



It is similar to Runnable, but it can:



- Return a value.
- Throw checked exceptions.



Its main method is:



V call()



where V represents the result type.



For example:



Callable<Integer> task =
        () -> {

            return 100;

        };



The Callable produces an Integer result.



# Runnable vs Callable

## Runnable

Runnable task =
        () -> {

            System.out.println(
                    "Task running");

        };



Its method:



void run()



It does not return a result.



## Callable

Callable<Integer> task =
        () -> {

            return 100;

        };



Its method:



V call()



It returns a result.



It can also throw checked exceptions.



# Basic Callable Example

Callable<Integer> task =
        () -> {

            return 50 + 50;

        };



The task produces:



100



But the result is not immediately returned from submit().



Instead, you receive a Future.



# What Is Future?

Future represents the result of an asynchronous computation.



When you submit a Callable:



Future<Integer> future =
        executor.submit(task);



the executor begins processing the task.



You can later retrieve the result:



Integer result =
        future.get();



Conceptually:



Callable

   ↓

Executor

   ↓

Background Task

   ↓

Future

   ↓

Result



# Future Is Not the Result

This is an important concept.



Future<Integer> future



does not contain the actual Integer result immediately.



Instead:



future

   ↓

Represents computation



Then:



future.get()

   ↓

Actual Result



For example:



Future<Integer> future =
        executor.submit(
                () -> 100);



Here:



future

↓

represents the pending or completed computation



future.get()

↓

100



# Complete Callable Example

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class CallableExample {

    public static void main(
            String[] args)
            throws Exception {

        ExecutorService executor =
                Executors.newSingleThreadExecutor();

        Callable<Integer> task =
                () -> 50 + 50;

        Future<Integer> future =
                executor.submit(task);

        Integer result =
                future.get();

        System.out.println(
                "Result: " + result);

        executor.shutdown();

    }

}



Output:



Result: 100



# How Callable and Future Work

Create Callable

      ↓

Submit to Executor

      ↓

Executor starts task

      ↓

Future returned immediately

      ↓

Task performs calculation

      ↓

Result becomes available

      ↓

future.get()

      ↓

Result received



# Asynchronous Computation

The task can execute independently from the thread that submitted it.



For example:



Main Thread

     │

     ├── Submit Callable

     │

     └── Continue other work

              │

              ▼

        Worker Thread

              │

              ▼

          Calculation



The Future acts as a handle to the eventual result.



# get()

The most commonly used Future method is:



future.get();



It returns the result when available.



If the task has not finished, the calling thread waits until the result becomes available or the computation fails or is cancelled.



# Example

Callable<String> task =
        () -> {

            Thread.sleep(2000);

            return "Completed";

        };



Submit:



Future<String> future =
        executor.submit(task);



Then:



String result =
        future.get();



The call to get() waits if necessary.



# Blocking Behavior of get()

This is important.



Suppose:



Future<Integer> future =
        executor.submit(
                () -> {

                    Thread.sleep(3000);

                    return 100;

                });



Then:



Integer result =
        future.get();



The calling thread waits until the result is available.



Therefore:



Future

   ↓

get()

   ↓

May block



If indefinite waiting is undesirable, use timed get().



# get() with Timeout

You can specify a maximum waiting time:



future.get(
        2,
        TimeUnit.SECONDS);



Possible exceptions include:



TimeoutException

InterruptedException

ExecutionException



This is useful when you do not want to wait indefinitely.



# isDone()

The method:



future.isDone()



checks whether the task has completed.



Example:



if (future.isDone()) {

    System.out.println(
            "Task completed");

}



It returns:



true



or



false



# Checking Before Getting

Example:



if (future.isDone()) {

    Integer result =
            future.get();

    System.out.println(result);

}



This avoids blocking on get() in this specific pattern because the task is already known to be complete.



However, concurrent application state can change between operations, so Future should still be used carefully.



# isCancelled()

You can check whether the task was cancelled:



future.isCancelled()



It returns true if the Future's task was cancelled before completion.



Example:



if (future.isCancelled()) {

    System.out.println(
            "Task was cancelled");

}



# cancel()

You can request cancellation:



future.cancel(true);



The boolean parameter indicates whether the executor should attempt to interrupt the thread running the task if it is already running.



Cancellation is cooperative.



It does not guarantee that arbitrary code will immediately stop.



# Example of Cancellation

Callable<String> task =
        () -> {

            Thread.sleep(5000);

            return "Completed";

        };



Future<String> future =
        executor.submit(task);



Thread.sleep(1000);



future.cancel(true);



The task receives an interruption request.



A task should respond appropriately to interruption.



# cancel(false) vs cancel(true)

## cancel(false)

Requests cancellation without requesting interruption of a currently running task.



## cancel(true)

Requests cancellation and asks the running thread to be interrupted if the task has started.



Neither option guarantees that arbitrary code will immediately terminate.



# Callable Can Throw Exceptions

Callable can throw checked exceptions.



Example:



Callable<Integer> task =
        () -> {

            if (true) {

                throw new Exception(
                        "Calculation failed");

            }

            return 100;

        };



When the task fails, the exception is represented through the Future.



# ExecutionException

If the Callable throws an exception, calling:



future.get();



can throw:



ExecutionException



You can inspect its cause:



try {

    Integer result =
            future.get();

} catch (ExecutionException e) {

    System.out.println(
            e.getCause());

}



The original exception can be accessed through:



e.getCause()



# Complete Exception Example

import java.util.concurrent.*;

public class CallableExceptionExample {

    public static void main(
            String[] args) {

        ExecutorService executor =
                Executors.newSingleThreadExecutor();

        Callable<Integer> task =
                () -> {

                    throw new Exception(
                            "Task failed");

                };

        Future<Integer> future =
                executor.submit(task);

        try {

            Integer result =
                    future.get();

            System.out.println(result);

        } catch (InterruptedException e) {

            Thread.currentThread()
                    .interrupt();

        } catch (ExecutionException e) {

            System.out.println(
                    "Cause: "
                    + e.getCause());

        } finally {

            executor.shutdown();

        }

    }

}



# Multiple Callable Tasks

You can submit multiple Callable tasks.



Callable<Integer> first =
        () -> 10;



Callable<Integer> second =
        () -> 20;



Callable<Integer> third =
        () -> 30;



Submit them:



Future<Integer> result1 =
        executor.submit(first);



Future<Integer> result2 =
        executor.submit(second);



Future<Integer> result3 =
        executor.submit(third);



Retrieve:



System.out.println(
        result1.get());



System.out.println(
        result2.get());



System.out.println(
        result3.get());



# Multiple Results

The results can be combined:



int total =
        result1.get()
        + result2.get()
        + result3.get();



Output:



60



Conceptually:



Callable 1 → 10

Callable 2 → 20

Callable 3 → 30

       ↓

   Futures

       ↓

Retrieve Results

       ↓

10 + 20 + 30

       ↓

60



# Callable with Thread Pool

Callable works naturally with an ExecutorService.



ExecutorService executor =
        Executors.newFixedThreadPool(3);



Submit:



Future<Integer> future =
        executor.submit(
                () -> 25 * 4);



Retrieve:



System.out.println(
        future.get());



The worker thread performs the computation while Future represents the result.



# Future as a Handle

A useful way to understand Future is:



Future

  ↓

Handle to a computation

  ↓

Check status

  ↓

Wait for result

  ↓

Retrieve result

  ↓

Cancel task if needed



The Future itself is not the result.



It represents the eventual result of the task.



# Future Methods

Important methods include:



get()

get(timeout, unit)

isDone()

isCancelled()

cancel()



These provide control over asynchronous computations.



# invokeAll()

ExecutorService also provides:



invokeAll()



It can submit a collection of Callable tasks and return a list of Futures.



Example:



List<Callable<Integer>> tasks =
        Arrays.asList(
                () -> 10,
                () -> 20,
                () -> 30
        );



List<Future<Integer>> results =
        executor.invokeAll(tasks);



You can then retrieve each result.



Conceptually:



Callable 1

Callable 2

Callable 3

   ↓

invokeAll()

   ↓

Future List

   ↓

Results



# invokeAny()

Another useful method is:



invokeAny()



It executes a collection of Callable tasks and returns the result of one task that completes successfully.



This can be useful when multiple alternative computations are available and only one successful result is needed.



# Example

List<Callable<String>> tasks =
        Arrays.asList(
                () -> "Server A",
                () -> "Server B",
                () -> "Server C"
        );



String result =
        executor.invokeAny(tasks);



The returned result comes from a successfully completed task.



# Runnable vs Callable

## Runnable



run()

   ↓

returns void

   ↓

does not declare checked exceptions



## Callable



call()

   ↓

returns a value

   ↓

can throw checked exceptions



# Callable in a Download Manager

Callable is especially useful for tasks that need to report a result.



For example:



Download Task

      ↓

Download File

      ↓

Return Download Result

      ↓

Future



The result could conceptually represent:



Success

Failure

File Information

Downloaded Size



This idea will be useful in the final Download Manager Project.



# Real-World Applications

## File Processing

File Task

   ↓

Process File

   ↓

Return Result

   ↓

Future



## Database Operations

Database Task

   ↓

Execute Query

   ↓

Return Data

   ↓

Future



## Network Requests

Request

   ↓

Background Execution

   ↓

Response

   ↓

Future



## Download Manager

Download

   ↓

Worker Thread

   ↓

Download Result

   ↓

Future



# Best Practices

- Use Callable when a task needs to return a result.
- Use Future to track asynchronous computation.
- Avoid calling get() too early if you want other work to continue concurrently.
- Use timed get() when indefinite waiting is undesirable.
- Handle InterruptedException correctly.
- Handle ExecutionException when a Callable fails.
- Use cancellation when task cancellation is part of the application design.
- Always shut down the executor when it is no longer needed.
- Prefer higher-level concurrency abstractions when they simplify the design.



# Interview Questions

## Q1. What is Callable?

Callable is a functional interface representing a task that returns a value and can throw checked exceptions.



## Q2. What method does Callable provide?

V call()



## Q3. What is Future?

Future represents the result of an asynchronous computation and provides methods to retrieve, monitor, and cancel that computation.



## Q4. What does future.get() do?

It returns the task's result, waiting if necessary.



## Q5. What does isDone() do?

It checks whether the computation has completed.



## Q6. What does isCancelled() do?

It checks whether the task was cancelled.



## Q7. What does cancel(true) do?

It requests cancellation and asks the running thread to be interrupted if the task has already started.



## Q8. Can Callable throw checked exceptions?

Yes.



## Q9. What is ExecutionException?

It indicates that a task submitted through the Future failed with an exception; the original exception is available as its cause.



## Q10. What is the difference between Runnable and Callable?

Runnable returns no result, while Callable returns a result and can throw checked exceptions.



## Q11. What is invokeAll()?

It submits multiple Callable tasks and returns Futures representing their results.



## Q12. What is invokeAny()?

It executes multiple Callable tasks and returns one successfully completed result.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain Callable.
- Explain Future.
- Understand call().
- Understand Callable vs Runnable.
- Submit Callable tasks to an ExecutorService.
- Retrieve results using Future.
- Use get().
- Use timed get().
- Check completion with isDone().
- Check cancellation with isCancelled().
- Request cancellation using cancel().
- Handle ExecutionException.
- Understand invokeAll().
- Understand invokeAny().
- Use Callable and Future in real-world concurrent applications.



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

→ Lesson 10 — Thread Pools

Lesson 11 — Fork/Join Framework

Lesson 12 — Concurrent Collections

Lesson 13 — Atomic Classes

Lesson 14 — Multithreading Best Practices

Lesson 15 — Download Manager Project



# Next Lesson

## Lesson 10 — Thread Pools

You will learn:

- What is a thread pool?
- Why thread pools are required.
- Thread pool architecture.
- Fixed thread pools.
- Single-thread executors.
- Cached thread pools.
- Scheduled thread pools.
- Task queues.
- Thread reuse.
- Choosing pool size.
- CPU-bound tasks.
- I/O-bound tasks.
- Thread pool lifecycle.
- Callable and Runnable with pools.
- ThreadPoolExecutor.
- Task rejection.
- Best Practices.
- Interview Questions.

`

};

export default lesson9;
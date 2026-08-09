const lesson11 = {

  id: "lesson11",

  title: "Fork/Join Framework",

  content: `

# Fork/Join Framework

## Introduction

Some problems can be divided into smaller independent problems.



For example, suppose you need to process a large collection of numbers.



Instead of processing everything as one large task:



Large Task

    ↓

Process Everything



You can divide it:



                 Large Task

                     │

          ┌──────────┴──────────┐

          ↓                     ↓

       Task A                 Task B

          │                     │

      ┌───┴───┐             ┌───┴───┐

      ↓       ↓             ↓       ↓

     A1      A2             B1      B2



The Fork/Join Framework is designed for this type of divide-and-conquer problem.



# What Is Fork/Join?

The Fork/Join Framework is a Java concurrency framework designed for tasks that can be recursively divided into smaller subtasks.



The basic idea is:



Fork

  ↓

Split Task

  ↓

Process Smaller Tasks

  ↓

Join

  ↓

Combine Results



# Divide and Conquer

The framework is based on a divide-and-conquer approach.



Suppose you need to process:



[1 2 3 4 5 6 7 8]



You can divide it:



[1 2 3 4]    [5 6 7 8]



Then:



[1 2] [3 4]    [5 6] [7 8]



Continue until the subtasks are small enough to process directly.



The results can then be combined.



# Fork

Fork means splitting a task into smaller tasks that can be executed independently.



Main Task

   ↓

Fork

 ┌─┴─┐

 ↓   ↓

 A   B



In Java, the fork() method schedules a task for asynchronous execution in a ForkJoinPool.



Example:



task.fork();



The task is scheduled for execution.



# Join

Join means waiting for a forked task to complete and obtaining its result when applicable.



Task A ──┐

         │

Task B ──┼── Join

         │

Task C ──┘

          ↓

      Final Result



In Java:



task.join();



can be used to wait for a forked task.



# ForkJoinPool

The central execution component is:



ForkJoinPool



Example:



ForkJoinPool pool =
        new ForkJoinPool();



It manages worker threads that execute Fork/Join tasks.



# Work Stealing

One of the important features of ForkJoinPool is work stealing.



Suppose:



Worker 1 → Busy

Worker 2 → No Work

Worker 3 → Busy

Worker 4 → No Work



An idle worker can take available work from another worker's queue.



Conceptually:



Worker A

   ↓

Has tasks



Worker B

   ↓

Idle

   ↓

Steals available task



This helps keep workers busy and improves utilization for suitable workloads.



# ForkJoinTask

Tasks used by the Fork/Join Framework are based on:



ForkJoinTask



Two important subclasses are:



RecursiveTask<V>

RecursiveAction



# RecursiveTask

Use RecursiveTask<V> when the computation returns a result.



Example:



class SumTask
        extends RecursiveTask<Integer> {

}



The generic type represents the result.



RecursiveTask<Integer>

        ↓

Returns Integer



# RecursiveAction

Use RecursiveAction when the task performs work but does not return a result.



Example:



class ProcessingTask
        extends RecursiveAction {

}



Conceptually:



RecursiveTask

    ↓

Returns result



RecursiveAction

    ↓

No result



# RecursiveTask Structure

A typical RecursiveTask follows:



compute()

   ↓

Is task small enough?

   │

   ├── Yes → Perform computation

   │

   └── No

        ↓

      Split

        ↓

    Fork subtasks

        ↓

    Join subtasks

        ↓

  Combine results



# Basic RecursiveTask Example

Suppose we want to calculate the sum of an array.



import java.util.concurrent.RecursiveTask;

class SumTask
        extends RecursiveTask<Integer> {

    private int[] numbers;

    private int start;

    private int end;


    SumTask(
            int[] numbers,
            int start,
            int end) {

        this.numbers = numbers;
        this.start = start;
        this.end = end;

    }


    @Override
    protected Integer compute() {

        if (end - start <= 2) {

            int sum = 0;

            for (int i = start;
                 i < end;
                 i++) {

                sum += numbers[i];

            }

            return sum;

        }


        int middle =
                (start + end) / 2;


        SumTask left =
                new SumTask(
                        numbers,
                        start,
                        middle);


        SumTask right =
                new SumTask(
                        numbers,
                        middle,
                        end);


        left.fork();


        int rightResult =
                right.compute();


        int leftResult =
                left.join();


        return leftResult
                + rightResult;

    }

}



# Running the RecursiveTask

public class ForkJoinExample {

    public static void main(
            String[] args) {

        int[] numbers = {
                1, 2, 3, 4,
                5, 6, 7, 8
        };


        ForkJoinPool pool =
                new ForkJoinPool();


        SumTask task =
                new SumTask(
                        numbers,
                        0,
                        numbers.length);


        int result =
                pool.invoke(task);


        System.out.println(
                "Sum: " + result);


        pool.shutdown();

    }

}



Output:



Sum: 36



# Understanding the Example

The initial task is:



[1 2 3 4 5 6 7 8]



It splits:



[1 2 3 4]

[5 6 7 8]



Then:



[1 2] [3 4]

[5 6] [7 8]



Each small section can be processed directly.



The results are combined:



3 + 7 + 11 + 15

        ↓

        36



# Base Case

Every recursive Fork/Join task needs a condition that stops further splitting.



Example:



if (end - start <= 2) {

    // Direct computation

}



This is called the:



Base Case



Without a proper base case, the task could continue splitting indefinitely.



# Recursive Case

If the task is too large:



Large Task

    ↓

Split

    ↓

Left Task + Right Task



The recursive case creates smaller tasks.



# compute()

Both RecursiveTask and RecursiveAction require you to implement:



compute()



For RecursiveTask:



protected V compute()



returns a result.



For RecursiveAction:



protected void compute()



does not return a result.



# fork()

The method:



task.fork();



schedules the task for asynchronous execution.



Example:



left.fork();



The left task can be processed by a ForkJoinPool worker.



# join()

The method:



task.join();



waits for the task to complete and returns its result for tasks that produce one.



Example:



int result =
        left.join();



# invoke()

Instead of manually calling fork() for the root task, you can use:



pool.invoke(task);



This submits the task and waits for its completion.



Example:



int result =
        pool.invoke(task);



# Fork vs Join

Remember:



fork()

  ↓

Start / schedule subtask asynchronously



join()

  ↓

Wait for subtask result/completion



Together:



Fork

  ↓

Parallel Subtask

  ↓

Join

  ↓

Result



# RecursiveAction

Suppose you want to process data but don't need a return value.



You can use:



class ProcessingTask
        extends RecursiveAction {

    @Override
    protected void compute() {

        // Processing

    }

}



# RecursiveAction Example

import java.util.concurrent.RecursiveAction;

class PrintTask
        extends RecursiveAction {

    private int[] numbers;

    private int start;

    private int end;


    PrintTask(
            int[] numbers,
            int start,
            int end) {

        this.numbers = numbers;
        this.start = start;
        this.end = end;

    }


    @Override
    protected void compute() {

        if (end - start <= 2) {

            for (int i = start;
                 i < end;
                 i++) {

                System.out.println(
                        numbers[i]);

            }

            return;

        }


        int middle =
                (start + end) / 2;


        PrintTask left =
                new PrintTask(
                        numbers,
                        start,
                        middle);


        PrintTask right =
                new PrintTask(
                        numbers,
                        middle,
                        end);


        invokeAll(left, right);

    }

}



# invokeAll()

Within a Fork/Join task, you can use:



invokeAll(left, right);



to fork multiple subtasks and wait for them to complete.



This can be clearer than manually calling:



left.fork();

right.fork();

left.join();

right.join();



# RecursiveTask vs RecursiveAction

## RecursiveTask



Input

  ↓

Divide

  ↓

Process

  ↓

Return Result



Use when the task needs to produce a value.



## RecursiveAction



Input

  ↓

Divide

  ↓

Process

  ↓

No Result



Use when the task only performs an action.



# Fork/Join vs ExecutorService

Both are concurrency tools, but they are designed for somewhat different task structures.



## ExecutorService

Best suited to general independent tasks:



Task 1

Task 2

Task 3

Task 4



## Fork/Join

Especially useful for recursively divisible tasks:



Large Task

   ↓

Small Task A

Small Task B

   ↓

Smaller Tasks



# Example Comparison

Suppose you have 1,000 independent network requests.



An executor with a suitable thread pool may be a natural choice.



Suppose you need to process a huge array by recursively splitting it into smaller sections.



Fork/Join may be a better fit.



Independent Tasks

       ↓

ExecutorService



Divide-and-Conquer

       ↓

ForkJoinPool



# Work-Stealing Concept

ForkJoinPool workers maintain task queues.



Conceptually:



Worker 1

┌──────────────┐

│ Task A       │

│ Task B       │

│ Task C       │

└──────────────┘



Worker 2

┌──────────────┐

│ No tasks     │

└──────────────┘



Worker 2 may steal an available task from Worker 1.



This is called:



Work Stealing



# Why Work Stealing Helps

Without work stealing:



Worker 1 → Many tasks

Worker 2 → Idle

Worker 3 → Idle



With work stealing:



Worker 1 → Some tasks

Worker 2 → Steals task

Worker 3 → Steals task



This can improve utilization for suitable workloads.



# Threshold

A recursive task should not continue splitting forever.



You normally define a threshold:



if (end - start <= THRESHOLD) {

    // Process directly

}



For example:



private static final int THRESHOLD = 100;



Then:



Large Task

   ↓

Split until

   ↓

Task size <= 100

   ↓

Process directly



The appropriate threshold depends on the task and workload.



# Why Threshold Matters

If you split too aggressively:



Huge Number of Tiny Tasks



the overhead of creating and scheduling tasks may outweigh the benefits of parallelism.



If you split too little:



Very Large Tasks



you may not expose enough parallel work.



Therefore:



Good Threshold

    ↓

Balance Parallelism + Overhead



# Fork/Join for Array Processing

A common use case is processing large arrays.



Large Array

     ↓

Split

 ┌───┴───┐

 ↓       ↓

Half    Half

 ↓       ↓

Split   Split

 ↓       ↓

Process Process



Examples include:



- Searching.
- Summation.
- Transformation.
- Aggregation.
- Certain sorting algorithms.



# Fork/Join for Recursive Algorithms

Fork/Join can also be useful for recursive divide-and-conquer algorithms.



Examples include:



- Parallel Merge Sort.
- Parallel Search.
- Parallel Array Processing.
- Recursive Computations.



The problem must be suitable for decomposition.



# When Fork/Join Is Not Ideal

Fork/Join is not automatically better for every problem.



It may be a poor fit when:



- Tasks cannot be meaningfully divided.
- Tasks are highly dependent.
- The workload is dominated by blocking I/O.
- Task creation overhead is larger than the computation.
- The problem is already simple and sequential.



Choose the concurrency model based on the workload.



# Blocking Operations

Fork/Join workers are designed primarily for computational tasks.



Long blocking operations can reduce the number of workers available to perform useful computation.



Therefore, be careful about placing long blocking I/O operations inside Fork/Join tasks.



# Best Practices

- Use Fork/Join for suitable divide-and-conquer problems.
- Define a sensible base case.
- Use an appropriate threshold.
- Avoid creating unnecessarily tiny tasks.
- Use RecursiveTask when a result is required.
- Use RecursiveAction when no result is required.
- Use fork() to schedule subtasks.
- Use join() to wait for results.
- Use invokeAll() when convenient for multiple subtasks.
- Avoid long blocking operations in Fork/Join workers.
- Measure performance rather than assuming parallel execution will always be faster.



# Interview Questions

## Q1. What is the Fork/Join Framework?

It is a Java concurrency framework designed for recursively dividing tasks into smaller subtasks and combining their results.



## Q2. What is divide and conquer?

A strategy where a large problem is divided into smaller problems, solved separately, and combined.



## Q3. What is ForkJoinPool?

A specialized executor that manages worker threads for Fork/Join tasks.



## Q4. What is RecursiveTask?

A Fork/Join task that returns a result.



## Q5. What is RecursiveAction?

A Fork/Join task that performs work without returning a result.



## Q6. What does fork() do?

It schedules a Fork/Join task for asynchronous execution.



## Q7. What does join() do?

It waits for a forked task to complete and obtains its result when applicable.



## Q8. What is work stealing?

A mechanism where an idle Fork/Join worker can take available tasks from another worker's queue.



## Q9. Why is a threshold important?

It prevents excessive task splitting and balances parallelism against task-management overhead.



## Q10. When is Fork/Join useful?

It is particularly useful for computational problems that can be recursively divided into independent subtasks.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain the Fork/Join Framework.
- Understand divide-and-conquer processing.
- Use ForkJoinPool.
- Understand ForkJoinTask.
- Use RecursiveTask.
- Use RecursiveAction.
- Implement compute().
- Understand fork().
- Understand join().
- Use invokeAll().
- Understand work stealing.
- Understand thresholds.
- Choose between ExecutorService and Fork/Join for suitable workloads.
- Recognize when Fork/Join is not appropriate.



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

→ Lesson 12 — Concurrent Collections

Lesson 13 — Atomic Classes

Lesson 14 — Multithreading Best Practices

Lesson 15 — Download Manager Project



# Next Lesson

## Lesson 12 — Concurrent Collections

You will learn:

- Why concurrent collections are needed.
- Thread-safe vs concurrent collections.
- ConcurrentHashMap.
- putIfAbsent().
- computeIfAbsent().
- compute().
- merge().
- CopyOnWriteArrayList.
- CopyOnWriteArraySet.
- BlockingQueue.
- ArrayBlockingQueue.
- LinkedBlockingQueue.
- PriorityBlockingQueue.
- ConcurrentLinkedQueue.
- ConcurrentLinkedDeque.
- Producer-consumer pattern.
- Concurrent iteration.
- Atomic compound operations.
- Choosing the correct concurrent collection.
- Best Practices.
- Interview Questions.

`

};

export default lesson11;
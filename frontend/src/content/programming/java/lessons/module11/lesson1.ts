const lesson1 = {

  id: "lesson1",

  title: "Introduction to Multithreading",

  content: `

# Introduction to Multithreading

## Introduction

A Java program normally executes instructions one after another.

This is called:

Single-Threaded Execution



For example:

Task 1

↓

Task 2

↓

Task 3

↓

Task 4



If Task 1 takes a long time, the following tasks have to wait.



Multithreading allows a program to have multiple threads that can execute tasks concurrently.



              ┌── Task 1

              │

Program ──────┼── Task 2

              │

              └── Task 3



Multithreading is an important concept for building responsive and efficient Java applications.



# What Is a Process?

A process is a running instance of a program.



For example, when you open a Java application, the operating system creates a process for that application.



A process has its own resources, including:

- Memory.
- System resources.
- Threads.



Process

   │

   ├── Memory

   ├── Resources

   └── Threads



# What Is a Thread?

A thread is a lightweight unit of execution within a process.



A single process can contain multiple threads.



Process

   │

   ├── Thread 1

   ├── Thread 2

   └── Thread 3



Threads within the same process can share many resources, including the process's memory.



# Process vs Thread

A process is a complete running program, while a thread is an execution path within a process.



Process

↓

Contains resources

↓

Contains one or more threads



A thread is generally lighter to create and manage than a separate process.



# What Is Multithreading?

Multithreading is the execution of multiple threads within a program.



For example:



Main Thread

     │

     ├── Thread 1 → Task A

     ├── Thread 2 → Task B

     └── Thread 3 → Task C



Each thread can perform a different task.



# Single-Threaded Execution

In a single-threaded program:



Task A

↓

Task B

↓

Task C



Task B starts after Task A progresses through its execution, and Task C follows Task B.



If Task A takes a long time, it can delay the work that follows.



# Multithreaded Execution

With multiple threads:



Thread 1 → Task A

Thread 2 → Task B

Thread 3 → Task C



The tasks can make progress concurrently.



The exact execution order is controlled by the operating system and JVM scheduling mechanisms.



Therefore, you should not assume that one thread will always finish before another.



# Concurrency

Concurrency means multiple tasks can make progress during overlapping periods of time.



For example:



Task A ────────

      Task B ────────

           Task C ────────



The tasks overlap in their execution periods.



Concurrency does not necessarily mean that all tasks are literally executing at the exact same instant.



# Parallelism

Parallelism means multiple tasks are actually executing at the same time, typically on multiple processor cores.



For example:



CPU Core 1 → Task A

CPU Core 2 → Task B

CPU Core 3 → Task C



Parallel execution depends on available hardware and the runtime environment.



# Concurrency vs Parallelism

The concepts are related but different.



## Concurrency

Multiple tasks are being managed so they can make progress during overlapping periods.



## Parallelism

Multiple tasks are executing simultaneously.



A useful way to remember:



Concurrency

↓

Dealing with multiple tasks



Parallelism

↓

Executing multiple tasks at the same time



# Why Is Multithreading Needed?

Multithreading is useful when an application has multiple independent or long-running tasks.



For example:



Application

    │

    ├── Process user input

    ├── Download data

    ├── Perform calculations

    └── Update progress



Running suitable tasks concurrently can improve responsiveness and resource utilization.



# Real-World Examples

Multithreading can be useful in:

- Download managers.
- Web servers.
- File processing applications.
- Network applications.
- Background tasks.
- Data processing systems.
- Games.
- Desktop applications.
- Messaging systems.



# Example: Download Manager

Imagine a Download Manager with three files:



File A

File B

File C



A sequential approach might process them one after another.



With suitable concurrency:



Thread 1 → File A

Thread 2 → File B

Thread 3 → File C



The downloads can make progress concurrently.



This concept will become important in the final Download Manager Project.



# Example: Background Task

Suppose an application needs to perform a time-consuming operation.



If that operation blocks the main thread unnecessarily:



Main Thread

↓

Long Task

↓

User interaction waits



With an appropriate background task:



Main Thread → User interaction

       │

       └── Worker Thread → Long Task



The application can remain responsive while the background work progresses.



# Main Thread

When a Java application starts, execution begins with a main thread.



Consider:

class MainExample {

    public static void main(
            String[] args) {

        System.out.println(
                "Program started");

    }

}



The main() method is executed by the initial application thread.



# Identifying the Current Thread

Java provides:

Thread.currentThread()



to obtain the currently executing thread.



Example:

class CurrentThreadExample {

    public static void main(
            String[] args) {

        Thread thread =
                Thread.currentThread();

        System.out.println(
                thread.getName());

    }

}



The initial thread is commonly named:

main



# Thread Name

A thread has a name.



You can retrieve it using:

getName()



Example:

Thread thread =
        Thread.currentThread();

System.out.println(
        thread.getName());



You can also assign a name when working with threads:

thread.setName(
        "Worker");



Thread names are useful when debugging multithreaded applications.



# Creating a Thread

Java provides the Thread class for working with threads.



A basic example:

class Worker extends Thread {

    @Override
    public void run() {

        System.out.println(
                "Worker is running");

    }

}



Create the thread:

Worker worker =
        new Worker();



Start it:

worker.start();



The details of the Thread class will be covered in Lesson 2.



# start() vs run()

This distinction is extremely important.



Calling:

worker.start();



requests that the new thread begin execution.



Calling:

worker.run();



is simply a normal method call and does not itself create a new thread.



You will study this in detail in the next lesson.



# Advantages of Multithreading

## 1. Better Responsiveness

A long-running task can be performed independently from other work when the design allows it.



## 2. Better Resource Utilization

Multiple tasks can make progress while other tasks are waiting for operations such as I/O.



## 3. Concurrent Task Execution

Independent tasks can execute concurrently.



## 4. Useful for I/O-Based Applications

Applications that spend time waiting for external operations can benefit from concurrency.



# Challenges of Multithreading

Multithreading also introduces complexity.



Important problems include:



Race Conditions

↓

Synchronization Problems

↓

Deadlocks

↓

Thread Coordination

↓

Debugging Difficulty



These topics will be covered throughout the module.



# Race Condition

A race condition can occur when multiple threads access shared mutable data and the result depends on the timing of their operations.



For example:



Thread 1 ──┐

           ├── Shared Data

Thread 2 ──┘



If both threads modify the same data without appropriate coordination, the final result may be incorrect.



You will study how synchronization and atomic classes help address such problems later in this module.



# Shared Resources

Threads within a process can access shared resources.



For example:



Thread 1 ──┐

Thread 2 ──┼── Shared Resource

Thread 3 ──┘



Shared mutable data needs careful design because multiple threads may access it concurrently.



# Thread Safety

A component is considered thread-safe when it can be used correctly by multiple threads under its documented concurrency conditions.



Thread safety can involve:

- Synchronization.
- Immutability.
- Atomic operations.
- Concurrent collections.
- Proper coordination.



You will learn each of these concepts later.



# Multithreading Architecture

A simplified view is:



Java Application

       │

       ▼

     Process

       │

       ├──────────────┐

       │              │

       ▼              ▼

   Thread 1       Thread 2

       │              │

       ▼              ▼

     Task A         Task B



A process can contain multiple threads, and each thread represents an execution path.



# Thread Scheduling

When multiple threads are ready to execute, the operating system and JVM work together with the underlying platform to schedule their execution.



Therefore, you should not assume:



Thread 1

always finishes before

Thread 2



unless your program explicitly establishes such coordination.



# Example of Unpredictable Ordering

Consider:

class Worker extends Thread {

    private String name;

    Worker(String name) {

        this.name = name;

    }

    @Override
    public void run() {

        System.out.println(
                name);

    }

}



public class ThreadOrderExample {

    public static void main(
            String[] args) {

        Worker first =
                new Worker("Task A");

        Worker second =
                new Worker("Task B");

        first.start();
        second.start();

    }

}



The output order is not something you should rely on.



You might see:

Task A

Task B



or:

Task B

Task A



The scheduling order is not guaranteed.



# When Should You Use Multithreading?

Multithreading is useful when:

- Tasks can operate independently.
- Work can be performed in the background.
- An application needs concurrent task processing.
- Tasks spend significant time waiting for external resources.
- Parallel computation can benefit from multiple cores.



However, not every task should automatically be placed in a separate thread.



# When Multithreading May Not Help

Creating threads has overhead.



If a task is extremely small, creating a separate thread may provide little benefit and can make the program more complicated.



Therefore:



More Threads

     ≠

Always Better Performance



Good concurrency design is about choosing an appropriate execution strategy.



# Multithreading and Modern Java

Although Java allows direct creation of Thread objects, larger applications commonly use higher-level concurrency utilities.



You will learn:



Thread

↓

Runnable

↓

ExecutorService

↓

Callable & Future

↓

Thread Pools

↓

Fork/Join

↓

Concurrent Collections

↓

Atomic Classes



These tools help structure concurrent applications more effectively.



# Best Practices

- Use threads only when concurrency provides a meaningful benefit.
- Do not assume thread execution order.
- Avoid unnecessary shared mutable state.
- Keep concurrent tasks focused and manageable.
- Prefer higher-level concurrency utilities for larger applications.
- Give worker threads meaningful names when debugging.
- Design shared data carefully.
- Always consider thread safety.



# Interview Questions

## Q1. What is a thread?

A thread is a lightweight unit of execution within a process.



## Q2. What is multithreading?

Multithreading is the use of multiple threads within a program to perform tasks concurrently.



## Q3. What is a process?

A process is a running instance of a program with its own resources.



## Q4. What is concurrency?

Concurrency is the ability to manage multiple tasks so that they can make progress during overlapping periods.



## Q5. What is parallelism?

Parallelism is the simultaneous execution of multiple tasks, typically using multiple processor cores.



## Q6. What is the main thread?

It is the initial thread that executes the main() method of a Java application.



## Q7. How can you get the current thread?

Use:

Thread.currentThread()



## Q8. What is a race condition?

A race condition occurs when concurrent access to shared mutable data can produce different or incorrect results depending on execution timing.



## Q9. Does creating more threads always improve performance?

No.

Threads have overhead, and excessive threads can reduce performance and increase complexity.



## Q10. Why is thread safety important?

Because multiple threads may access shared resources concurrently, potentially causing incorrect results without appropriate coordination.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain processes and threads.
- Define multithreading.
- Understand concurrency.
- Understand parallelism.
- Distinguish concurrency from parallelism.
- Explain the main thread.
- Identify the current thread.
- Understand shared resources.
- Explain race conditions.
- Understand thread safety.
- Recognize the advantages and challenges of multithreading.
- Understand when concurrency is useful.
- Explain why excessive threads can be harmful.



# Module Progress

✓ Lesson 1 — Introduction to Multithreading

→ Lesson 2 — Thread Class

Lesson 3 — Runnable

Lesson 4 — Thread Lifecycle

Lesson 5 — Synchronization

Lesson 6 — Deadlock

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

## Lesson 2 — Thread Class

You will learn:

- The Thread class.
- Extending Thread.
- The run() method.
- The start() method.
- start() vs run().
- Thread names.
- Thread priorities.
- sleep().
- currentThread().
- isAlive().
- Basic thread programs.
- Best Practices.
- Interview Questions.

`

};

export default lesson1;
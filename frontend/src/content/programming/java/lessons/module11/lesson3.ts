const lesson3 = {

  id: "lesson3",

  title: "Runnable",

  content: `

# Runnable

## Introduction

Another common way to create a thread in Java is by implementing the Runnable interface.



Instead of making your class extend Thread, you define the task separately using Runnable.



Runnable

   ↓

Represents a task

   ↓

Thread

   ↓

Executes the task



This separation between the task and the thread is one of the main advantages of Runnable.



# What Is Runnable?

Runnable is a functional interface in:

java.lang



It contains one abstract method:

void run();



A class can implement it:

class Worker implements Runnable {

    @Override
    public void run() {

        System.out.println(
                "Task is running");

    }

}



# Creating a Thread with Runnable

Creating a Runnable object:

Worker worker =
        new Worker();



Then create a Thread:

Thread thread =
        new Thread(worker);



Finally:

thread.start();



The structure is:



Worker

   ↓

implements Runnable

   ↓

Task

   ↓

Thread(worker)

   ↓

start()

   ↓

run()



# Complete Example

class Worker implements Runnable {

    @Override
    public void run() {

        System.out.println(
                "Worker is running");

    }

}



public class RunnableExample {

    public static void main(
            String[] args) {

        Worker worker =
                new Worker();

        Thread thread =
                new Thread(worker);

        thread.start();

    }

}



# Why Use Runnable?

One important advantage is that Java supports single inheritance.



Suppose a class already extends another class:

class Employee extends Person {

}



It cannot also extend Thread:

class Employee
        extends Person, Thread {

}



Java does not support multiple class inheritance.



But the class can implement Runnable:

class Employee
        extends Person
        implements Runnable {

    @Override
    public void run() {

        // task

    }

}



This allows the class to inherit from another class while also defining a runnable task.



# Runnable Separates Task from Thread

With Thread inheritance:



Worker

   ↓

Thread + Task



The class itself represents a specialized Thread.



With Runnable:



Worker

   ↓

Task



Thread

   ↓

Execution mechanism



This separation is generally more flexible.



# Passing Runnable to Thread

The Thread constructor can receive a Runnable.



Example:

Runnable task =
        new Worker();



Thread thread =
        new Thread(task);



thread.start();



The Thread executes the Runnable's run() method.



# Thread Name with Runnable

You can provide a thread name:

Runnable task =
        new Worker();



Thread thread =
        new Thread(
                task,
                "WorkerThread");



thread.start();



This is useful for debugging.



# Example

class Worker implements Runnable {

    @Override
    public void run() {

        System.out.println(
                "Running on: "
                + Thread.currentThread()
                        .getName());

    }

}



public class RunnableNameExample {

    public static void main(
            String[] args) {

        Runnable task =
                new Worker();

        Thread thread =
                new Thread(
                        task,
                        "WorkerThread");

        thread.start();

    }

}



Possible output:

Running on: WorkerThread



# Runnable with Multiple Threads

The same Runnable object can be passed to different Thread objects.



Example:

class Worker implements Runnable {

    @Override
    public void run() {

        System.out.println(
                Thread.currentThread()
                        .getName()
                + " is running");

    }

}



public class MultipleRunnableExample {

    public static void main(
            String[] args) {

        Runnable task =
                new Worker();

        Thread first =
                new Thread(
                        task,
                        "Worker-1");

        Thread second =
                new Thread(
                        task,
                        "Worker-2");

        first.start();
        second.start();

    }

}



The two threads execute the same task definition.



# Runnable with Lambda Expressions

Because Runnable is a functional interface, you can use a lambda expression.



Instead of:

Runnable task =
        new Runnable() {

            @Override
            public void run() {

                System.out.println(
                        "Task running");

            }

        };



You can write:

Runnable task =
        () -> System.out.println(
                "Task running");



Then:

Thread thread =
        new Thread(task);



thread.start();



# Complete Lambda Example

public class RunnableLambdaExample {

    public static void main(
            String[] args) {

        Runnable task =
                () -> {

                    System.out.println(
                            "Task running");

                };

        Thread thread =
                new Thread(task);

        thread.start();

    }

}



# Direct Lambda with Thread

You can make it even shorter:

Thread thread =
        new Thread(
                () -> System.out.println(
                        "Task running"));



thread.start();



This is common in small examples and simple tasks.



# Runnable and sleep()

A Runnable can also use:

Thread.sleep()



Example:

class Worker implements Runnable {

    @Override
    public void run() {

        for (int i = 1; i <= 5; i++) {

            System.out.println(
                    "Count: " + i);

            try {

                Thread.sleep(500);

            } catch (InterruptedException e) {

                Thread.currentThread()
                        .interrupt();

                return;

            }

        }

    }

}



The Runnable does not own the thread.



The currently executing Thread performs the sleep.



# Runnable and currentThread()

Because Runnable is only a task definition, use:

Thread.currentThread()



to access the executing thread.



Example:

class Worker implements Runnable {

    @Override
    public void run() {

        Thread current =
                Thread.currentThread();

        System.out.println(
                current.getName());

    }

}



# Runnable vs Thread

This is an important comparison.



## Extending Thread

class Worker extends Thread {

    @Override
    public void run() {

        // task

    }

}



## Implementing Runnable

class Worker implements Runnable {

    @Override
    public void run() {

        // task

    }

}



The Runnable approach separates the task from the execution mechanism.



# Why Runnable Is Often Preferred

Runnable provides several design advantages:

- Your class can extend another class.
- Task logic is separated from thread management.
- The same task can be given to different threads.
- It works naturally with Executor Framework.
- It encourages better separation of responsibilities.



# Runnable with ExecutorService

Runnable becomes especially useful when working with the Executor Framework.



For example:

Runnable task =
        () -> System.out.println(
                "Task running");



ExecutorService executor =
        Executors.newSingleThreadExecutor();



executor.submit(task);



executor.shutdown();



You will study ExecutorService in Lesson 8.



# Runnable Does Not Return a Result

The run() method has:

void run()



Therefore, a Runnable task does not directly return a result.



If you need a task that produces a result, Java provides:

Callable



You will study Callable and Future in Lesson 9.



# Runnable vs Callable

## Runnable

void run()



Used when the task does not directly return a result.



## Callable

V call()



Used when the task needs to return a result and can throw checked exceptions.



Conceptually:



Runnable

   ↓

Task

   ↓

No direct result



Callable

   ↓

Task

   ↓

Returns result



# Runnable and Exception Handling

The run() method cannot declare checked exceptions in its interface signature.



Therefore, checked exceptions generally need to be handled inside the Runnable task.



Example:

class Worker implements Runnable {

    @Override
    public void run() {

        try {

            Thread.sleep(1000);

        } catch (InterruptedException e) {

            Thread.currentThread()
                    .interrupt();

        }

    }

}



# Practical Example: Data Processing

Suppose an application needs to process data in the background.



class DataProcessor
        implements Runnable {

    @Override
    public void run() {

        System.out.println(
                "Processing data...");

    }

}



Create the task:

Runnable task =
        new DataProcessor();



Create the Thread:

Thread thread =
        new Thread(
                task,
                "DataProcessor");



Start:

thread.start();



# Practical Example: Multiple Tasks

class Task implements Runnable {

    private String name;

    Task(String name) {

        this.name = name;

    }

    @Override
    public void run() {

        System.out.println(
                name
                + " running on "
                + Thread.currentThread()
                        .getName());

    }

}



public class TaskExample {

    public static void main(
            String[] args) {

        Thread first =
                new Thread(
                        new Task("Task A"),
                        "Worker-1");

        Thread second =
                new Thread(
                        new Task("Task B"),
                        "Worker-2");

        first.start();
        second.start();

    }

}



The tasks can execute concurrently.



# Anonymous Runnable

Before lambda expressions, anonymous classes were commonly used.



Example:

Thread thread =
        new Thread(
                new Runnable() {

                    @Override
                    public void run() {

                        System.out.println(
                                "Task running");

                    }

                });



thread.start();



This is still valid Java, although a lambda is often shorter when the task is simple.



# Runnable as a Task Object

A useful mental model is:



Runnable

   ↓

"What should be done?"



Thread

   ↓

"Which execution path performs it?"



This separation makes the design easier to reuse.



# Thread vs Runnable Example

## Thread approach

class DownloadTask extends Thread {

    @Override
    public void run() {

        // download work

    }

}



## Runnable approach

class DownloadTask
        implements Runnable {

    @Override
    public void run() {

        // download work

    }

}



Then:

Thread thread =
        new Thread(
                new DownloadTask());



thread.start();



The second design separates the download task from the thread object.



# Reusing a Runnable Task

A Runnable object can be passed to multiple Thread instances.



Runnable task =
        () -> System.out.println(
                Thread.currentThread()
                        .getName());



Thread first =
        new Thread(task, "Worker-1");



Thread second =
        new Thread(task, "Worker-2");



first.start();
second.start();



The task logic is shared, while each Thread provides its own execution context.



# Important Warning

A Runnable object is not itself a Thread.



This:

Runnable task =
        new Worker();



does not start anything.



You need:

Thread thread =
        new Thread(task);



thread.start();



# Runnable Lifecycle

A Runnable itself does not have the complete lifecycle states of a Thread.



The Thread executing the Runnable has the lifecycle.



Runnable

   ↓

Passed to Thread

   ↓

Thread.start()

   ↓

Thread executes run()



This distinction is useful when understanding Java concurrency.



# Best Practices

- Prefer Runnable when you are defining a task rather than a specialized Thread.
- Keep task logic separate from thread management.
- Use meaningful thread names.
- Handle InterruptedException correctly.
- Restore interruption status when appropriate.
- Use lambdas for simple Runnable tasks.
- Use ExecutorService for managing many tasks instead of manually creating large numbers of Threads.
- Use Callable when a task needs to return a result.



# Interview Questions

## Q1. What is Runnable?

Runnable is a functional interface representing a task that can be executed by a thread.



## Q2. Which method does Runnable provide?

void run();



## Q3. How do you execute a Runnable?

Create a Thread with the Runnable and call:

thread.start();



## Q4. Is Runnable a Thread?

No.

Runnable represents the task; Thread provides the execution mechanism.



## Q5. Why is Runnable often preferred over extending Thread?

It separates task logic from thread management and allows the class to extend another class.



## Q6. Can a Runnable be used with lambda expressions?

Yes.

Runnable is a functional interface.



## Q7. Can Runnable return a value?

No.

Its run() method returns void.



## Q8. What should you use when a task needs to return a result?

Callable together with appropriate Future/Executor APIs.



## Q9. Can the same Runnable be passed to multiple Threads?

Yes.



## Q10. Does creating a Runnable start a thread?

No.

A Thread must be started.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain the Runnable interface.
- Implement Runnable.
- Create a Thread using Runnable.
- Understand task vs thread separation.
- Use thread names with Runnable.
- Use multiple Threads with Runnable.
- Use lambda expressions with Runnable.
- Use Thread.sleep() inside Runnable tasks.
- Use Thread.currentThread().
- Understand Runnable vs Thread.
- Understand Runnable vs Callable.
- Use Runnable with ExecutorService.
- Understand why Runnable is useful in modern Java concurrency.



# Module Progress

✓ Lesson 1 — Introduction to Multithreading

✓ Lesson 2 — Thread Class

✓ Lesson 3 — Runnable

→ Lesson 4 — Thread Lifecycle

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

## Lesson 4 — Thread Lifecycle

You will learn:

- Thread states.
- NEW.
- RUNNABLE.
- BLOCKED.
- WAITING.
- TIMED_WAITING.
- TERMINATED.
- Thread state transitions.
- getState().
- Lifecycle with sleep().
- Lifecycle with join().
- Lifecycle with synchronization.
- BLOCKED vs WAITING.
- WAITING vs TIMED_WAITING.
- State transition flow.
- Best Practices.
- Interview Questions.

`

};

export default lesson3;
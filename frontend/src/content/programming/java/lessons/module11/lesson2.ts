const lesson2 = {

  id: "lesson2",

  title: "Thread Class",

  content: `

# Thread Class

## Introduction

The Thread class is one of the basic ways to create and work with threads in Java.



It belongs to:

java.lang



Therefore, no import is required.



A thread represents an independent path of execution within a Java program.



Java Program

     │

     ├── Main Thread

     │

     ├── Worker Thread

     │

     └── Another Thread



# Creating a Thread by Extending Thread

One way to create a thread is to extend the Thread class.



class Worker extends Thread {

    @Override
    public void run() {

        System.out.println(
                "Worker thread is running");

    }

}



Here:



Worker

↓

extends Thread

↓

inherits Thread functionality



# The run() Method

The run() method contains the task that the thread should perform.



Example:

class Worker extends Thread {

    @Override
    public void run() {

        System.out.println(
                "Task is running");

    }

}



The code inside run() represents the thread's work.



# The start() Method

To actually start a new thread, call:

worker.start();



Example:

public class ThreadExample {

    public static void main(
            String[] args) {

        Worker worker =
                new Worker();

        worker.start();

    }

}



Calling start() causes the JVM to arrange for the new thread to execute its run() method.



# start() vs run()

This is one of the most important concepts in Java multithreading.



## Using start()

worker.start();



This starts a new thread.



Conceptually:



Main Thread

     │

     └── start()

           ↓

      New Thread

           ↓

         run()



## Calling run() Directly

worker.run();



This is simply a normal method call.



It does not create a new thread.



Conceptually:



Main Thread

     │

     └── run()

           ↓

      Same Thread



# Example: start()

class Worker extends Thread {

    @Override
    public void run() {

        System.out.println(
                "Running in worker");

    }

}



public class StartExample {

    public static void main(
            String[] args) {

        Worker worker =
                new Worker();

        worker.start();

        System.out.println(
                "Main thread");

    }

}



The exact output order should not be assumed because the threads execute concurrently.



# Example: Calling run() Directly

class Worker extends Thread {

    @Override
    public void run() {

        System.out.println(
                "Running in worker");

    }

}



public class RunExample {

    public static void main(
            String[] args) {

        Worker worker =
                new Worker();

        worker.run();

        System.out.println(
                "Main thread");

    }

}



Here run() is called like an ordinary method by the main thread.



No new thread is started.



# Thread Names

Every Thread has a name.



You can retrieve it using:

getName()



Example:

class Worker extends Thread {

    @Override
    public void run() {

        System.out.println(
                getName());

    }

}



# Setting a Thread Name

You can set a name using:

setName()



Example:

Worker worker =
        new Worker();

worker.setName(
        "DownloadWorker");

worker.start();



Inside the thread:

System.out.println(
        Thread.currentThread()
                .getName());



# Why Thread Names Are Useful

Thread names are especially useful while debugging.



Instead of seeing:

Thread-0

Thread-1

Thread-2



you can use meaningful names:

DownloadWorker

FileProcessor

DataProcessor



This makes logs easier to understand.



# currentThread()

Java provides:

Thread.currentThread()



to obtain the thread that is currently executing.



Example:

public class CurrentThreadExample {

    public static void main(
            String[] args) {

        Thread current =
                Thread.currentThread();

        System.out.println(
                current.getName());

    }

}



The initial application thread is commonly named:

main



# Complete Thread Name Example

class Worker extends Thread {

    @Override
    public void run() {

        System.out.println(
                "Thread: "
                + Thread.currentThread()
                        .getName());

    }

}



public class ThreadNameExample {

    public static void main(
            String[] args) {

        Worker worker =
                new Worker();

        worker.setName(
                "WorkerThread");

        worker.start();

    }

}



Possible output:

Thread: WorkerThread



# sleep()

The Thread.sleep() method pauses the currently executing thread for a specified amount of time.



Example:

Thread.sleep(1000);



The value is measured in milliseconds.



1000 milliseconds

=

1 second



# Example Using sleep()

class Worker extends Thread {

    @Override
    public void run() {

        for (int i = 1; i <= 5; i++) {

            System.out.println(
                    "Count: " + i);

            try {

                Thread.sleep(1000);

            } catch (InterruptedException e) {

                Thread.currentThread()
                        .interrupt();

            }

        }

    }

}



The thread pauses between iterations.



# Why Does sleep() Need Exception Handling?

Thread.sleep() can throw:

InterruptedException



Therefore, Java requires the exception to be handled or declared.



A common practice when catching interruption is:

Thread.currentThread()
        .interrupt();



This restores the thread's interrupted status.



# isAlive()

The isAlive() method checks whether a thread has started and has not yet terminated.



Example:

Worker worker =
        new Worker();



System.out.println(
        worker.isAlive());



worker.start();



System.out.println(
        worker.isAlive());



Before starting, the thread is not alive.



After starting, it may be alive while its run() method is still executing.



# Thread Priority

Java provides thread priorities.



You can retrieve the priority using:

getPriority()



and set it using:

setPriority()



Example:

worker.setPriority(7);



Java defines priorities from:



1 → Minimum

5 → Normal

10 → Maximum



The default priority is commonly 5.



# Important Note About Priorities

Thread priority should not be treated as a guarantee that one thread will execute before another.



The actual scheduling behavior depends on the JVM and underlying operating system.



Therefore, do not use thread priority to establish program correctness.



Use proper synchronization and coordination mechanisms instead.



# Multiple Threads

You can create multiple Thread objects.



class Worker extends Thread {

    private String task;

    Worker(String task) {

        this.task = task;

    }

    @Override
    public void run() {

        System.out.println(
                task
                + " is running");

    }

}



Create:

Worker first =
        new Worker("Task A");

Worker second =
        new Worker("Task B");

Worker third =
        new Worker("Task C");



Start:

first.start();

second.start();

third.start();



# Multiple Thread Execution

The conceptual structure is:



                 Main Thread

                     │

       ┌─────────────┼─────────────┐

       ↓             ↓             ↓

    Thread 1      Thread 2      Thread 3

       ↓             ↓             ↓

    Task A         Task B         Task C



The execution order is not guaranteed.



# Example: Multiple Threads

class Worker extends Thread {

    private String task;

    Worker(String task) {

        this.task = task;

    }

    @Override
    public void run() {

        System.out.println(
                task
                + " running on "
                + getName());

    }

}



public class MultipleThreadsExample {

    public static void main(
            String[] args) {

        Worker first =
                new Worker("Task A");

        Worker second =
                new Worker("Task B");

        Worker third =
                new Worker("Task C");

        first.setName("Worker-1");
        second.setName("Worker-2");
        third.setName("Worker-3");

        first.start();
        second.start();
        third.start();

    }

}



Possible output:

Task A running on Worker-1

Task C running on Worker-3

Task B running on Worker-2



The order may differ.



# join()

The join() method allows one thread to wait for another thread to finish.



Example:

worker.start();

worker.join();



Conceptually:



Main Thread

     │

     ├── Start Worker

     │

     ├── Wait

     │

     └── Continue

              ↑

        Worker finishes



# Example with join()

class Worker extends Thread {

    @Override
    public void run() {

        for (int i = 1; i <= 3; i++) {

            System.out.println(
                    "Worker: " + i);

        }

    }

}



public class JoinExample {

    public static void main(
            String[] args)
            throws InterruptedException {

        Worker worker =
                new Worker();

        worker.start();

        worker.join();

        System.out.println(
                "Worker completed");

    }

}



Here, the main thread waits for worker to finish before printing the final message.



# join() with a Timeout

You can specify a maximum waiting time:

worker.join(1000);



This means the current thread waits for up to approximately the specified duration.



It does not guarantee that the worker will finish within that time.



# Thread State

You can inspect the current state using:

getState()



Example:

System.out.println(
        worker.getState());



Possible states include:

- NEW.
- RUNNABLE.
- BLOCKED.
- WAITING.
- TIMED_WAITING.
- TERMINATED.



The complete lifecycle will be discussed in Lesson 4.



# Thread Interruption

A thread can be requested to stop waiting or otherwise respond to interruption using:

interrupt()



Example:

worker.interrupt();



This does not forcibly kill the thread.



Instead, it sets the thread's interrupted status and can cause interruptible operations such as sleep() or wait() to throw InterruptedException.



# Why You Should Not Forcefully Stop Threads

A thread may be holding resources or updating shared data.



Abruptly stopping execution can leave the application in an inconsistent state.



Modern Java code should use cooperative cancellation and interruption rather than trying to forcibly terminate a thread.



# Example: Interrupting a Sleeping Thread

class Worker extends Thread {

    @Override
    public void run() {

        try {

            System.out.println(
                    "Worker sleeping");

            Thread.sleep(5000);

        } catch (InterruptedException e) {

            System.out.println(
                    "Worker interrupted");

            Thread.currentThread()
                    .interrupt();

        }

    }

}



public class InterruptExample {

    public static void main(
            String[] args)
            throws InterruptedException {

        Worker worker =
                new Worker();

        worker.start();

        Thread.sleep(1000);

        worker.interrupt();

    }

}



The worker can respond to the interruption and finish gracefully.



# Thread Class Methods

Some important methods are:

- start().
- run().
- sleep().
- join().
- interrupt().
- isAlive().
- getName().
- setName().
- getPriority().
- setPriority().
- currentThread().
- getState().



These methods provide basic control and information about threads.



# Complete Thread Example

class Worker extends Thread {

    Worker(String name) {

        super(name);

    }

    @Override
    public void run() {

        for (int i = 1; i <= 5; i++) {

            System.out.println(
                    getName()
                    + " → "
                    + i);

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



public class CompleteThreadExample {

    public static void main(
            String[] args)
            throws InterruptedException {

        Worker worker =
                new Worker(
                        "WorkerThread");

        System.out.println(
                "Before start: "
                + worker.isAlive());

        worker.start();

        System.out.println(
                "After start: "
                + worker.isAlive());

        worker.join();

        System.out.println(
                "After completion: "
                + worker.isAlive());

    }

}



# Important Concepts

Remember these relationships:



Thread

↓

run()

↓

Contains the task



start()

↓

Starts a new thread



sleep()

↓

Pauses current thread temporarily



join()

↓

Waits for another thread



interrupt()

↓

Requests interruption



isAlive()

↓

Checks whether thread is still alive



# Best Practices

- Use start() when you want a new thread.
- Do not call run() when your intention is to start a new thread.
- Give important worker threads meaningful names.
- Do not depend on thread scheduling order.
- Use join() when one thread must wait for another to finish.
- Handle InterruptedException properly.
- Restore the interrupted status when appropriate.
- Do not rely on thread priority for correctness.
- Avoid creating unnecessary threads.
- For larger applications, prefer higher-level concurrency utilities such as ExecutorService.



# Interview Questions

## Q1. What is the Thread class?

Thread is a Java class used to represent and control a thread of execution.



## Q2. How do you create a thread by extending Thread?

class Worker extends Thread {

    @Override
    public void run() {

        // task

    }

}



## Q3. What is the purpose of run()?

It contains the code that the thread executes.



## Q4. What is the purpose of start()?

It starts a new thread and causes its run() method to be executed by that thread.



## Q5. What happens if run() is called directly?

It behaves like a normal method call and does not create a new thread.



## Q6. What does sleep() do?

It pauses the currently executing thread for a specified duration.



## Q7. What does join() do?

It allows one thread to wait for another thread to terminate.



## Q8. What does isAlive() do?

It checks whether a thread has started and has not yet terminated.



## Q9. What does interrupt() do?

It requests that a thread respond to interruption; it does not forcibly kill the thread.



## Q10. What is the default thread priority?

The normal/default priority is 5.



## Q11. Can thread priority guarantee execution order?

No.



## Q12. How can you get the current thread?

Thread.currentThread();



# Key Takeaways

After completing this lesson, you should be able to:

- Create threads by extending Thread.
- Override run().
- Start threads using start().
- Explain start() vs run().
- Name threads.
- Get the current thread.
- Use sleep().
- Use join().
- Check thread status with isAlive().
- Understand thread priorities.
- Use interrupt().
- Inspect thread states.
- Create multiple threads.
- Understand basic thread control.



# Module Progress

✓ Lesson 1 — Introduction to Multithreading

✓ Lesson 2 — Thread Class

→ Lesson 3 — Runnable

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

## Lesson 3 — Runnable

You will learn:

- Runnable interface.
- Implementing Runnable.
- Creating a Thread using Runnable.
- Task vs thread separation.
- Thread names with Runnable.
- Multiple Threads with Runnable.
- Lambda expressions with Runnable.
- Thread.sleep().
- Thread.currentThread().
- Runnable vs Thread.
- Runnable vs Callable.
- Runnable with ExecutorService.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson2;
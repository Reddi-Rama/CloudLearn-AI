const lesson4 = {

  id: "lesson4",

  title: "Thread Lifecycle",

  content: `

# Thread Lifecycle

## Introduction

A thread does not remain in one state throughout its execution.



From the moment a Thread object is created until it finishes, it moves through different states.



New

↓

Runnable

↓

Running

↓

Terminated



Depending on what the thread is doing, it can also enter states such as:

- BLOCKED.
- WAITING.
- TIMED_WAITING.



Understanding the thread lifecycle is important for controlling and debugging multithreaded programs.



# Thread States in Java

Java defines the following official thread states through the Thread.State enum:



NEW

RUNNABLE

BLOCKED

WAITING

TIMED_WAITING

TERMINATED



A simplified view is:



                 ┌──────────────┐

                 │     NEW      │

                 └──────┬───────┘

                        │ start()

                        ↓

                 ┌──────────────┐

                 │   RUNNABLE   │

                 └──────┬───────┘

                        │

               ┌────────┼────────┐

               ↓        ↓        ↓

           BLOCKED    WAITING  TIMED_WAITING

               │        │        │

               └────────┼────────┘

                        ↓

                 ┌──────────────┐

                 │   RUNNABLE   │

                 └──────┬───────┘

                        ↓

                 ┌──────────────┐

                 │  TERMINATED  │

                 └──────────────┘



Important:



Java's RUNNABLE state includes threads that are ready to run and threads that are actually running.



Java does not expose a separate RUNNING state through Thread.State.



# 1. NEW State

A Thread is in the NEW state after the Thread object is created but before start() is called.



Example:

Thread thread =
        new Thread(
                () -> System.out.println(
                        "Task running"));



At this point:



Thread object created

        ↓

start() not called

        ↓

NEW



You can check the state:

System.out.println(
        thread.getState());



Output:

NEW



# 2. RUNNABLE State

After calling:

thread.start();



the thread enters the RUNNABLE state.



NEW

↓

start()

↓

RUNNABLE



The JVM and operating system scheduler determine when the thread actually gets CPU time.



Example:

Thread thread =
        new Thread(
                () -> {

                    System.out.println(
                            "Task running");

                });



thread.start();



# RUNNABLE Includes Running

This is an important Java-specific detail.



Java's Thread.State does not contain a separate:

RUNNING



state.



Instead:

RUNNABLE



represents a thread that is ready to run or is actually running.



So when you call:

thread.getState();



you may see:

RUNNABLE



while the thread is executing.



# 3. BLOCKED State

A thread enters the BLOCKED state when it is waiting to acquire a monitor lock.



This usually occurs with synchronized code.



For example:

synchronized (lock) {

    // critical section

}



If one thread already owns the lock and another thread tries to enter the synchronized block, the second thread may become:

BLOCKED



Conceptually:



Thread 1

   ↓

Owns Lock

   ↓

Critical Section



Thread 2

   ↓

Requests Same Lock

   ↓

BLOCKED



When the lock becomes available, the waiting thread can become RUNNABLE again.



Synchronization will be covered in detail in Lesson 5.



# 4. WAITING State

A thread enters the WAITING state when it waits indefinitely for another thread to perform a particular action.



Methods that can cause waiting include:

- wait().
- join() without a timeout.



For example:

thread.join();



The thread calling join() waits until the target thread terminates.



# Example of Waiting with join()

class Worker extends Thread {

    @Override
    public void run() {

        System.out.println(
                "Worker running");

    }

}



public class WaitingExample {

    public static void main(
            String[] args)
            throws InterruptedException {

        Worker worker =
                new Worker();

        worker.start();

        worker.join();

        System.out.println(
                "Worker finished");

    }

}



The main thread waits for the worker to finish.



# 5. TIMED_WAITING State

A thread enters the TIMED_WAITING state when it waits for a specified amount of time.



Common examples include:

Thread.sleep(1000);



and:

thread.join(1000);



Conceptually:



RUNNABLE

   ↓

sleep(1000)

   ↓

TIMED_WAITING

   ↓

Time expires

   ↓

RUNNABLE



# Example of TIMED_WAITING

class Worker extends Thread {

    @Override
    public void run() {

        try {

            Thread.sleep(2000);

        } catch (InterruptedException e) {

            Thread.currentThread()
                    .interrupt();

        }

    }

}



During the sleep period, the thread is in:

TIMED_WAITING



# 6. TERMINATED State

A thread enters the TERMINATED state after its execution has completed.



For example:

class Worker extends Thread {

    @Override
    public void run() {

        System.out.println(
                "Task completed");

    }

}



After run() finishes:



RUNNABLE

↓

run() completes

↓

TERMINATED



A terminated thread cannot be started again.



# Example

Worker worker =
        new Worker();



worker.start();



worker.join();



System.out.println(
        worker.getState());



Output:

TERMINATED



# Complete Lifecycle Example

class Worker extends Thread {

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



public class LifecycleExample {

    public static void main(
            String[] args)
            throws InterruptedException {

        Worker worker =
                new Worker();

        System.out.println(
                "Before start: "
                + worker.getState());

        worker.start();

        System.out.println(
                "After start: "
                + worker.getState());

        worker.join();

        System.out.println(
                "After completion: "
                + worker.getState());

    }

}



A typical sequence is:



Before start: NEW

After start: RUNNABLE

After completion: TERMINATED



The exact state observed immediately after start() can depend on timing, so you should not rely on a particular instantaneous observation.



# getState()

Java provides:

getState()



to obtain the current state of a Thread.



Example:

Thread.State state =
        thread.getState();



System.out.println(state);



Possible values:

NEW

RUNNABLE

BLOCKED

WAITING

TIMED_WAITING

TERMINATED



# Thread Lifecycle with sleep()

Consider:

class Worker extends Thread {

    @Override
    public void run() {

        try {

            System.out.println(
                    "Working...");

            Thread.sleep(3000);

            System.out.println(
                    "Finished waiting");

        } catch (InterruptedException e) {

            Thread.currentThread()
                    .interrupt();

        }

    }

}



The conceptual lifecycle is:



NEW

↓

start()

↓

RUNNABLE

↓

sleep()

↓

TIMED_WAITING

↓

sleep finishes

↓

RUNNABLE

↓

run() completes

↓

TERMINATED



# Thread Lifecycle with join()

Suppose the main thread starts a worker:

worker.start();



Then:

worker.join();



The main thread waits for the worker.



Worker:



RUNNABLE

↓

Completes

↓

TERMINATED



Main:



RUNNABLE

↓

join()

↓

WAITING

↓

Worker completes

↓

RUNNABLE



# Thread Lifecycle with Synchronization

When synchronization is involved, a thread may become BLOCKED.



Thread A

   ↓

Acquires lock

   ↓

Critical section



Thread B

   ↓

Requests same lock

   ↓

BLOCKED



After Thread A releases the lock:



BLOCKED

↓

RUNNABLE



# Important Difference: BLOCKED vs WAITING

These states are often confused.



## BLOCKED

The thread is waiting to acquire a monitor lock.



Waiting for:

Lock



## WAITING

The thread is waiting indefinitely for another thread to perform an action.



Waiting for:

Another thread / event



# Important Difference: WAITING vs TIMED_WAITING

## WAITING

No specific timeout.



Example:

thread.join();



## TIMED_WAITING

A maximum waiting time is specified.



Example:

thread.join(1000);



or:

Thread.sleep(1000);



# State Transition Summary

NEW

 │

 │ start()

 ↓

RUNNABLE

 │

 ├───────────────┐

 │               │

 │ lock unavailable

 ↓               │

BLOCKED ─────────┘

 │

 │ lock acquired

 ↓

RUNNABLE



RUNNABLE

 │

 │ wait() / join()

 ↓

WAITING

 │

 │ notification / target finishes

 ↓

RUNNABLE



RUNNABLE

 │

 │ sleep() / timed join()

 ↓

TIMED_WAITING

 │

 │ time expires

 ↓

RUNNABLE



RUNNABLE

 │

 │ run() completes

 ↓

TERMINATED



# Thread Lifecycle Example with Multiple States

class Worker extends Thread {

    private final Object lock;

    Worker(Object lock) {

        this.lock = lock;

    }

    @Override
    public void run() {

        synchronized (lock) {

            try {

                Thread.sleep(2000);

            } catch (InterruptedException e) {

                Thread.currentThread()
                        .interrupt();

            }

        }

    }

}



This type of program can demonstrate how a thread may move through RUNNABLE and TIMED_WAITING while another thread may become BLOCKED while waiting for the same lock.



# Why Thread Lifecycle Matters

Understanding thread states helps you:

- Debug multithreaded programs.
- Understand why a thread is waiting.
- Identify lock contention.
- Understand sleeping threads.
- Detect completed threads.
- Analyze concurrency problems.
- Understand synchronization behavior.



# Common Mistakes

## Mistake 1: Assuming RUNNING Is a Java Thread.State

Java does not expose RUNNING as a separate Thread.State.



Use RUNNABLE to represent threads that are ready to run or running.



## Mistake 2: Confusing BLOCKED and WAITING

BLOCKED means waiting for a monitor lock.



WAITING means waiting indefinitely for another thread or event.



## Mistake 3: Confusing WAITING and TIMED_WAITING

WAITING has no timeout.



TIMED_WAITING has a specified waiting duration.



## Mistake 4: Assuming State Checks Are Permanent

A thread can change state quickly.



For example:

RUNNABLE

↓

TIMED_WAITING

↓

RUNNABLE



Therefore, a call to getState() gives a snapshot of the state at that moment.



## Mistake 5: Trying to Restart a Terminated Thread

A terminated Thread cannot be started again.



# Best Practices

- Understand the difference between all six official thread states.
- Do not assume a separate RUNNING state exists.
- Use getState() mainly for observation and debugging.
- Do not rely on a single state check for program correctness.
- Understand why a thread is blocked or waiting.
- Use synchronization and coordination mechanisms correctly.
- Handle InterruptedException properly.
- Avoid unnecessary thread creation.
- Use higher-level concurrency utilities for larger applications.



# Interview Questions

## Q1. What are the official Java thread states?

Java defines:

- NEW.
- RUNNABLE.
- BLOCKED.
- WAITING.
- TIMED_WAITING.
- TERMINATED.



## Q2. What is the NEW state?

A Thread is NEW after its object is created but before start() is called.



## Q3. What happens after start()?

The thread enters RUNNABLE and becomes eligible for execution.



## Q4. Does Java have a separate RUNNING state?

No.

Java's Thread.State uses RUNNABLE for both ready-to-run and currently running threads.



## Q5. When does a thread become BLOCKED?

When it is waiting to acquire a monitor lock.



## Q6. When does a thread enter WAITING?

When it waits indefinitely for another thread or event, such as with wait() or join() without a timeout.



## Q7. When does a thread enter TIMED_WAITING?

When it waits for a specified amount of time, such as with sleep() or timed join().



## Q8. When does a thread become TERMINATED?

After its execution has completed.



## Q9. Can a terminated thread be started again?

No.



## Q10. What method returns a thread's current state?

getState()



# Key Takeaways

After completing this lesson, you should be able to:

- Explain the Java thread lifecycle.
- Identify all six official thread states.
- Understand NEW.
- Understand RUNNABLE.
- Understand BLOCKED.
- Understand WAITING.
- Understand TIMED_WAITING.
- Understand TERMINATED.
- Use getState().
- Understand state transitions.
- Explain the lifecycle with sleep().
- Explain the lifecycle with join().
- Understand lifecycle behavior with synchronization.
- Distinguish BLOCKED from WAITING.
- Distinguish WAITING from TIMED_WAITING.
- Understand why Java does not expose RUNNING as a separate state.



# Module Progress

✓ Lesson 1 — Introduction to Multithreading

✓ Lesson 2 — Thread Class

✓ Lesson 3 — Runnable

✓ Lesson 4 — Thread Lifecycle

→ Lesson 5 — Synchronization

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

## Lesson 5 — Synchronization

You will learn:

- Shared data.
- Race conditions.
- Critical sections.
- synchronized methods.
- synchronized blocks.
- Object locks.
- Monitor locks.
- Thread-safe access.
- Synchronization examples.
- Common synchronization problems.
- Best Practices.
- Interview Questions.

`

};

export default lesson4;
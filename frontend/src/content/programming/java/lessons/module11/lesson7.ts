const lesson7 = {

  id: "lesson7",

  title: "Inter-thread Communication",

  content: `

# Inter-thread Communication

## Introduction

Sometimes threads need to coordinate with one another.



For example, one thread may produce data while another thread consumes it.



Producer Thread

      ↓

Produces Data

      ↓

Shared Resource

      ↓

Consumes Data

      ↓

Consumer Thread



Java provides mechanisms for threads to wait for conditions and notify one another.



The traditional monitor-based mechanisms include:



wait()

notify()

notifyAll()



These methods are used for inter-thread communication.



# Why Do Threads Need Communication?

Consider a producer-consumer system.



The producer creates data:



Producer

   ↓

Data



The consumer needs that data:



Data

   ↓

Consumer



If the consumer tries to consume when no data is available, it should wait rather than repeatedly checking in a tight loop.



Similarly, if the producer creates data while the consumer is waiting, the producer can notify the waiting consumer.



# The Three Main Methods

Java's Object class provides:



wait()

notify()

notifyAll()



These methods are associated with an object's monitor.



# wait()

A thread calls:



object.wait();



to wait until another thread performs an appropriate notification or the thread is otherwise interrupted.



When wait() is called while holding the object's monitor, the thread:



1. Releases that monitor.

2. Enters the WAITING state.

3. Waits for notification or interruption.

4. Attempts to reacquire the monitor before continuing.



Conceptually:



Thread

   ↓

Owns Monitor

   ↓

wait()

   ↓

Releases Monitor

   ↓

WAITING

   ↓

Notification

   ↓

Reacquire Monitor

   ↓

Continue



# notify()

The method:



object.notify();



signals one thread waiting on that object's monitor.



It does not immediately transfer the lock to the notified thread.



The notified thread must reacquire the monitor before it can continue.



Conceptually:



Thread 1

   ↓

WAITING



Thread 2

   ↓

notify()



Thread 1

   ↓

Wakes Up

   ↓

Attempts to reacquire Monitor

   ↓

Continues



# notifyAll()

The method:



object.notifyAll();



signals all threads currently waiting on that object's monitor.



The awakened threads then compete to reacquire the monitor.



Conceptually:



Waiting Threads

   │

   ├── Thread 1

   ├── Thread 2

   └── Thread 3

          ↓

      notifyAll()

          ↓

   All become eligible

          ↓

   Compete for Monitor



# Important Rule

wait(), notify(), and notifyAll() must be called while the current thread owns the object's monitor.



Correct:



synchronized (lock) {

    lock.wait();

}



This is correct because the thread owns the monitor of lock.



Incorrect:



lock.wait();



when the current thread does not own the lock.



This results in:



IllegalMonitorStateException



# Basic Communication Example

class Message {

    private String message;

    private boolean available =
            false;

    public synchronized void put(
            String message) {

        this.message = message;

        available = true;

        notify();

    }

    public synchronized String get()
            throws InterruptedException {

        while (!available) {

            wait();

        }

        available = false;

        return message;

    }

}



This class allows one thread to provide a message and another thread to retrieve it.



# How the Example Works

Producer:



put("Hello");



Inside put():



Store Message

      ↓

available = true

      ↓

notify()



Consumer:



get()



The consumer checks:



while (!available)



If data is not available:



wait()



When the producer provides the data:



notify()



The waiting consumer can continue after reacquiring the monitor.



# Why Use while Instead of if?

A waiting condition should normally be checked using:



while (!condition) {

    wait();

}



rather than:



if (!condition) {

    wait();

}



Why?



Because after waking up, the thread should re-check whether the condition it needs is actually true.



The condition may have changed before the thread reacquires the lock.



Therefore:



Check Condition

      ↓

Condition False?

      ↓

wait()

      ↓

Wake Up

      ↓

Check Condition Again

      ↓

Continue if True



# Producer-Consumer Pattern

The producer:



Create Data

    ↓

Store Data

    ↓

Notify Consumer



The consumer:



Check Data

    ↓

No Data?

    ↓

Wait

    ↓

Receive Notification

    ↓

Check Again

    ↓

Consume Data



This is one of the most important examples of inter-thread communication.



# Complete Producer-Consumer Example

class MessageBox {

    private String message;

    private boolean available =
            false;

    public synchronized void put(
            String message) {

        while (available) {

            try {

                wait();

            } catch (InterruptedException e) {

                Thread.currentThread()
                        .interrupt();

                return;

            }

        }

        this.message = message;

        available = true;

        notifyAll();

    }



    public synchronized String get() {

        while (!available) {

            try {

                wait();

            } catch (InterruptedException e) {

                Thread.currentThread()
                        .interrupt();

                return null;

            }

        }

        String result =
                message;

        available = false;

        notifyAll();

        return result;

    }

}



# Producer Task

class Producer
        implements Runnable {

    private MessageBox box;

    Producer(MessageBox box) {

        this.box = box;

    }

    @Override
    public void run() {

        box.put(
                "Message from producer");

    }

}



# Consumer Task

class Consumer
        implements Runnable {

    private MessageBox box;

    Consumer(MessageBox box) {

        this.box = box;

    }

    @Override
    public void run() {

        String message =
                box.get();

        System.out.println(
                "Received: "
                + message);

    }

}



# Complete Program

class MessageBox {

    private String message;

    private boolean available =
            false;

    public synchronized void put(
            String message) {

        while (available) {

            try {

                wait();

            } catch (InterruptedException e) {

                Thread.currentThread()
                        .interrupt();

                return;

            }

        }

        this.message = message;

        available = true;

        notifyAll();

    }



    public synchronized String get() {

        while (!available) {

            try {

                wait();

            } catch (InterruptedException e) {

                Thread.currentThread()
                        .interrupt();

                return null;

            }

        }

        String result =
                message;

        available = false;

        notifyAll();

        return result;

    }

}



class Producer
        implements Runnable {

    private MessageBox box;

    Producer(MessageBox box) {

        this.box = box;

    }

    @Override
    public void run() {

        box.put(
                "Message from producer");

    }

}



class Consumer
        implements Runnable {

    private MessageBox box;

    Consumer(MessageBox box) {

        this.box = box;

    }

    @Override
    public void run() {

        String message =
                box.get();

        System.out.println(
                "Received: "
                + message);

    }

}



public class CommunicationExample {

    public static void main(
            String[] args)
            throws InterruptedException {

        MessageBox box =
                new MessageBox();

        Thread producer =
                new Thread(
                        new Producer(box));

        Thread consumer =
                new Thread(
                        new Consumer(box));

        consumer.start();

        producer.start();

        producer.join();

        consumer.join();

    }

}



Possible output:



Received: Message from producer



# Communication Flow

The complete flow is:



Consumer

   ↓

Checks available

   ↓

No data

   ↓

wait()

   ↓

WAITING



Producer

   ↓

Creates data

   ↓

Stores data

   ↓

available = true

   ↓

notifyAll()



Consumer

   ↓

Wakes

   ↓

Reacquires monitor

   ↓

Checks condition again

   ↓

Reads data



# wait() vs sleep()

These two methods are different.



## wait()

- Belongs to Object.
- Used for thread communication.
- Releases the object's monitor when called while holding it.
- Thread enters WAITING state until appropriate notification/interruption.



## sleep()

- Belongs to Thread.
- Used to pause execution for a specified time.
- Does not release monitors held by the thread.



Conceptually:



wait()

   ↓

Releases associated monitor

   ↓

Waits for condition/notification



sleep()

   ↓

Pauses execution

   ↓

Keeps monitors it already owns



# notify() vs notifyAll()

## notify()

Signals one waiting thread.



notifyAll()

Signals all waiting threads on the monitor.



Use the appropriate method based on the coordination design.



# Monitor-Based Communication

Java's wait(), notify(), and notifyAll() mechanisms are based on object monitors.



Conceptually:



Object

  ↓

Monitor

  ↓

Waiting Threads

  ↓

Communication



A thread must own the monitor before calling these methods.



# Handling InterruptedException

wait() can throw:



InterruptedException



A common approach is:



catch (InterruptedException e) {

    Thread.currentThread()
            .interrupt();

}



This restores the thread's interrupted status.



# Common Mistake: Calling wait() Without Synchronization

Incorrect:



lock.wait();



Correct:



synchronized (lock) {

    lock.wait();

}



The current thread must own the object's monitor.



# Common Mistake: Using if Instead of while

Avoid:



if (!available) {

    wait();

}



Prefer:



while (!available) {

    wait();

}



The condition should always be checked again after waking.



# Common Mistake: Forgetting the Shared Condition

Communication should be based on a meaningful condition.



For example:



boolean available;



The waiting thread checks the condition:



while (!available) {

    wait();

}



The producing thread changes the condition:



available = true;



and then notifies waiting threads.



# Real-World Applications

## Producer-Consumer Systems

Producer

   ↓

Queue

   ↓

Consumer



Examples include:

- Background job processing.
- Message processing.
- File processing.
- Data pipelines.



# Logging System

Application Threads

      ↓

Log Messages

      ↓

Logging Queue

      ↓

Logger Thread

      ↓

Log File



The application can produce log messages while another thread processes them.



# Download Processing

Download Task

     ↓

Downloaded Data

     ↓

Processing Queue

     ↓

Processing Thread



Producer-consumer communication can coordinate these operations.



# Best Practices

- Call wait(), notify(), and notifyAll() only while owning the correct monitor.
- Protect the condition and shared state with the same synchronization strategy.
- Use while rather than if when waiting for a condition.
- Handle InterruptedException properly.
- Prefer notifyAll() when multiple waiting conditions or threads make the design safer.
- Keep communication logic simple.
- Avoid unnecessary shared state.
- Make the waiting condition explicit.
- Avoid busy waiting.
- Use higher-level concurrency utilities when they better fit the problem.



# Interview Questions

## Q1. What is inter-thread communication?

It is a mechanism that allows threads to coordinate their execution and wait for or signal conditions.



## Q2. Which methods are traditionally used for thread communication?

wait(), notify(), and notifyAll().



## Q3. Where are wait(), notify(), and notifyAll() defined?

They are methods of the Object class.



## Q4. What happens when wait() is called?

The thread releases the associated monitor, enters WAITING, and waits until it is notified or interrupted.



## Q5. What does notify() do?

It signals one thread waiting on the object's monitor.



## Q6. What does notifyAll() do?

It signals all threads waiting on the object's monitor.



## Q7. Why must wait() be called inside synchronized code?

Because the current thread must own the object's monitor.



## Q8. What happens if wait() is called without owning the monitor?

IllegalMonitorStateException can occur.



## Q9. Why is while preferred over if around wait()?

Because the condition must be checked again after the thread wakes up.



## Q10. What is the producer-consumer pattern?

A concurrency pattern where one or more threads produce data and other threads consume that data using coordinated shared resources.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain inter-thread communication.
- Understand wait().
- Understand notify().
- Understand notifyAll().
- Understand object monitors.
- Understand WAITING state.
- Explain producer-consumer communication.
- Use wait() correctly.
- Use notify() correctly.
- Use notifyAll() correctly.
- Understand why synchronization is required.
- Use while for waiting conditions.
- Handle InterruptedException.
- Distinguish wait() from sleep().
- Distinguish notify() from notifyAll().
- Identify common communication mistakes.



# Module Progress

✓ Lesson 1 — Introduction to Multithreading

✓ Lesson 2 — Thread Class

✓ Lesson 3 — Runnable

✓ Lesson 4 — Thread Lifecycle

✓ Lesson 5 — Synchronization

✓ Lesson 6 — Deadlock

✓ Lesson 7 — Inter-thread Communication

→ Lesson 8 — Executor Framework

Lesson 9 — Callable & Future

Lesson 10 — Thread Pools

Lesson 11 — Fork/Join Framework

Lesson 12 — Concurrent Collections

Lesson 13 — Atomic Classes

Lesson 14 — Multithreading Best Practices

Lesson 15 — Download Manager Project



# Next Lesson

## Lesson 8 — Executor Framework

You will learn:

- Why manually creating many threads becomes difficult.
- Executor interface.
- ExecutorService.
- Executors class.
- execute().
- submit().
- Single-thread executor.
- Fixed thread pool.
- Thread pool concept.
- Executor lifecycle.
- shutdown().
- shutdownNow().
- awaitTermination().
- ScheduledExecutorService.
- Delayed tasks.
- Periodic tasks.
- Executor with Runnable.
- Executor with Callable.
- Best Practices.
- Interview Questions.

`

};

export default lesson7;
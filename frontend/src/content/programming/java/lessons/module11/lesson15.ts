const lesson15 = {

  id: "lesson15",

  title: "Download Manager Project",

  content: `

# Download Manager Project

## Final Course Project

Welcome to the final lesson of the Java Mastery Course.



Throughout this course, you have learned Java from its fundamentals to advanced Object-Oriented Programming, collections, exception handling, file handling, generics, and multithreading.



Now it is time to combine those skills into one practical project:



Download Manager



The Download Manager demonstrates how Java can be used to build an application that manages multiple download tasks concurrently.



This project brings together the most important concepts from Module 11 — Multithreading & Concurrency and reinforces concepts learned throughout the course.



# Project Objective

The goal is to build a console-based Download Manager capable of:



- Managing multiple download tasks.
- Running downloads concurrently.
- Tracking download status.
- Handling download failures.
- Cancelling downloads.
- Retrying failed downloads.
- Maintaining download statistics.
- Managing worker threads efficiently.



The project should demonstrate proper use of Java concurrency features rather than manually creating a new thread for every download.



# Project Architecture

                         Download Manager

                                │

                                ↓

                         ExecutorService

                                │

                   ┌────────────┼────────────┐

                   ↓            ↓            ↓

               Worker 1     Worker 2     Worker 3

                   │            │            │

                   ↓            ↓            ↓

               Download     Download     Download

                  Task          Task         Task

                   │            │            │

                   └────────────┼────────────┘

                                ↓

                          Future Results

                                │

                   ┌────────────┴────────────┐

                   ↓                         ↓

            Atomic Statistics       Concurrent Results



# Project Features

The final Download Manager should provide:



1. Add Download

2. Start Downloads

3. View Active Downloads

4. View Completed Downloads

5. View Failed Downloads

6. Cancel Download

7. Retry Failed Download

8. Show Statistics

9. Exit



# Step 1: Create DownloadRequest

The DownloadRequest class represents a download that needs to be processed.



class DownloadRequest {

    private final String fileName;

    private final int fileSize;


    public DownloadRequest(
            String fileName,
            int fileSize) {

        this.fileName = fileName;

        this.fileSize = fileSize;

    }


    public String getFileName() {

        return fileName;

    }


    public int getFileSize() {

        return fileSize;

    }

}



The fields are final, making the request information immutable after creation.



# Step 2: Create DownloadResult

The result represents the outcome of a download.



class DownloadResult {

    private final String fileName;

    private final boolean successful;


    public DownloadResult(
            String fileName,
            boolean successful) {

        this.fileName = fileName;

        this.successful = successful;

    }


    public String getFileName() {

        return fileName;

    }


    public boolean isSuccessful() {

        return successful;

    }

}



DownloadResult tells the manager whether a download was successful.



# Step 3: Create DownloadTask

Because the download operation needs to return a result, use Callable.



class DownloadTask
        implements Callable<DownloadResult> {

    private final DownloadRequest request;


    public DownloadTask(
            DownloadRequest request) {

        this.request = request;

    }


    @Override
    public DownloadResult call() {

        System.out.println(
                "Starting: "
                + request.getFileName());


        return new DownloadResult(
                request.getFileName(),
                true);

    }

}



The task implements:



Callable<DownloadResult>



because the download operation needs to return a DownloadResult.



# Step 4: Simulate Download Processing

For this learning project, the download operation can be simulated.



@Override

public DownloadResult call() {

    try {

        System.out.println(
                "Downloading: "
                + request.getFileName());


        Thread.sleep(2000);


        System.out.println(
                "Completed: "
                + request.getFileName());


        return new DownloadResult(
                request.getFileName(),
                true);


    } catch (InterruptedException e) {

        Thread.currentThread()
                .interrupt();


        return new DownloadResult(
                request.getFileName(),
                false);

    }

}



The sleep() call represents time spent performing the download.



In a real application, this section would perform actual file or network operations.



# Step 5: Create the Thread Pool

Use ExecutorService to manage download workers.



ExecutorService executor =
        Executors.newFixedThreadPool(3);



This allows up to three download tasks to execute concurrently.



Worker 1 → Download A

Worker 2 → Download B

Worker 3 → Download C



Additional tasks wait until a worker becomes available.



# Step 6: Submit Download Tasks

Create download requests.



DownloadRequest first =
        new DownloadRequest(
                "document.pdf",
                100);



DownloadRequest second =
        new DownloadRequest(
                "image.jpg",
                200);



DownloadRequest third =
        new DownloadRequest(
                "notes.txt",
                50);



Submit the tasks.



Future<DownloadResult> firstResult =
        executor.submit(
                new DownloadTask(first));



Future<DownloadResult> secondResult =
        executor.submit(
                new DownloadTask(second));



Future<DownloadResult> thirdResult =
        executor.submit(
                new DownloadTask(third));



Each Future represents one asynchronous download task.



# Step 7: Collect Results

The results can be retrieved using:



DownloadResult result =
        future.get();



The get() method waits if the task has not completed yet.



Download Task

      ↓

Future

      ↓

get()

      ↓

DownloadResult



# Step 8: Track Completed Downloads

Use AtomicInteger for the completed-download counter.



AtomicInteger completed =
        new AtomicInteger(0);



When a download succeeds:



completed.incrementAndGet();



Later:



System.out.println(
        "Completed Downloads: "
        + completed.get());



AtomicInteger allows the counter to be safely updated by concurrent tasks.



# Step 9: Store Results

A concurrent collection can be used to store completed results.



ConcurrentLinkedQueue<DownloadResult>
        results =
        new ConcurrentLinkedQueue<>();



Add a result:



results.add(result);



This allows multiple worker threads to safely work with the result collection.



# Step 10: Handle Failures

A download may fail during execution.



Handle the result using:



try {

    DownloadResult result =
            future.get();


} catch (InterruptedException e) {

    Thread.currentThread()
            .interrupt();


} catch (ExecutionException e) {

    System.out.println(
            "Download failed: "
            + e.getCause());

}



This demonstrates proper exception handling for concurrent tasks.



# Step 11: Cancel a Download

Because each download is represented by a Future, the manager can request cancellation.



future.cancel(true);



Conceptually:



Download Running

       ↓

Cancel Requested

       ↓

Future.cancel(true)

       ↓

Interrupt Requested

       ↓

Task Responds



The download task should respond properly to interruption.



# Step 12: Handle Interruption

A task should not silently ignore interruption.



try {

    Thread.sleep(500);


} catch (InterruptedException e) {

    Thread.currentThread()
            .interrupt();


    return new DownloadResult(
            request.getFileName(),
            false);

}



This allows the task to recognize that cancellation or interruption has been requested.



# Step 13: Multiple Downloads

The manager should support multiple download requests.



DownloadRequest[] requests = {

        new DownloadRequest(
                "document.pdf",
                100),


        new DownloadRequest(
                "image.jpg",
                200),


        new DownloadRequest(
                "notes.txt",
                50),


        new DownloadRequest(
                "report.pdf",
                150)

};



The executor can process these tasks using its worker threads.



# Step 14: Submit All Tasks Before Collecting Results

A better concurrent design is to submit the tasks first.



List<Future<DownloadResult>> futures =
        new ArrayList<>();



for (DownloadRequest request :
        requests) {

    futures.add(
            executor.submit(
                    new DownloadTask(
                            request)));

}



Then collect the results:



for (Future<DownloadResult> future :
        futures) {

    try {

        DownloadResult result =
                future.get();


        results.add(result);


        if (result.isSuccessful()) {

            completed.incrementAndGet();

        }


    } catch (InterruptedException e) {

        Thread.currentThread()
                .interrupt();

        break;


    } catch (ExecutionException e) {

        System.out.println(
                "Download failed: "
                + e.getCause());

    }

}



This allows multiple downloads to execute concurrently.



# Step 15: Shut Down the Executor

When all work is complete:



executor.shutdown();



A more controlled shutdown can be used:



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



This ensures that the executor is properly managed.



# Final Project Flow

Add Downloads

      ↓

Create Download Requests

      ↓

Submit Callable Tasks

      ↓

ExecutorService

      ↓

Thread Pool

      ↓

Concurrent Downloads

      ↓

Future Objects

      ↓

Collect Results

      ↓

Update Atomic Statistics

      ↓

Store Results

      ↓

Display Summary

      ↓

Shutdown Executor



# Console Menu

The final application can provide a menu such as:



================================

       DOWNLOAD MANAGER

================================



1. Add Download

2. Start Downloads

3. View Active Downloads

4. View Completed Downloads

5. View Failed Downloads

6. Cancel Download

7. Retry Failed Download

8. Show Statistics

9. Exit



Enter your choice:



# Example Output

A possible execution could look like:



================================

       DOWNLOAD MANAGER

================================



Starting downloads...



Downloading: document.pdf

Downloading: image.jpg

Downloading: notes.txt



Completed: document.pdf

Completed: image.jpg

Completed: notes.txt



Downloading: report.pdf



Completed: report.pdf



--------------------------------

Download Statistics

--------------------------------

Total Downloads     : 4

Completed Downloads : 4

Failed Downloads    : 0

Cancelled Downloads : 0

--------------------------------



The exact order of messages may vary because the tasks execute concurrently.



# Concepts Used in This Project

This project brings together the concepts learned throughout Module 11.



## Lesson 1

Introduction to Multithreading

↓

Multiple downloads can execute concurrently.



## Lesson 2

Thread Class

↓

Understanding worker threads.



## Lesson 3

Runnable

↓

Alternative task representation.



## Lesson 4

Thread Lifecycle

↓

Understanding task and thread states.



## Lesson 5

Synchronization

↓

Protecting complex shared state.



## Lesson 6

Deadlock

↓

Avoiding unsafe lock designs.



## Lesson 7

Inter-thread Communication

↓

Coordinating concurrent tasks.



## Lesson 8

Executor Framework

↓

Managing task execution.



## Lesson 9

Callable & Future

↓

Returning download results.



## Lesson 10

Thread Pools

↓

Managing download workers.



## Lesson 11

Fork/Join Framework

↓

Understanding divide-and-conquer concurrency.



## Lesson 12

Concurrent Collections

↓

Safely storing results.



## Lesson 13

Atomic Classes

↓

Tracking statistics.



## Lesson 14

Multithreading Best Practices

↓

Applying safe concurrency design.



# Project Challenges

## Challenge 1 — Download Progress

Display progress such as:



document.pdf → 20%

document.pdf → 40%

document.pdf → 60%

document.pdf → 80%

document.pdf → 100%



# Challenge 2 — Cancellation

Allow a running download to be cancelled.



Use:



future.cancel(true);



and make the task respond to interruption.



# Challenge 3 — Retry Failed Downloads

Implement:



Attempt 1 → Failed

Attempt 2 → Failed

Attempt 3 → Success



with a maximum retry limit.



# Challenge 4 — Download Statistics

Track:



Total Downloads

Completed Downloads

Failed Downloads

Cancelled Downloads



Use atomic counters where appropriate.



# Challenge 5 — Download Queue

Use:



BlockingQueue<DownloadRequest>



to manage pending download requests.



Requests

   ↓

BlockingQueue

   ↓

Worker Threads

   ↓

Downloads



# Challenge 6 — Download History

Store completed downloads in a concurrent collection and display their history.



# Suggested Project Structure

DownloadManager/

│

├── DownloadRequest.java

├── DownloadResult.java

├── DownloadTask.java

├── DownloadManager.java

└── Main.java



Each class should have a clear responsibility.



# Final Project Requirements

Your completed Download Manager should demonstrate:



✓ Multiple concurrent tasks

✓ ExecutorService

✓ Thread Pool

✓ Callable

✓ Future

✓ Exception Handling

✓ Interruption Handling

✓ Task Cancellation

✓ Atomic Counters

✓ Concurrent Collection

✓ Proper Executor Shutdown



# Course Completion Challenge

Before considering the Java course complete, you should be able to explain:



What is a thread?



What is Runnable?



What is Callable?



What is a Future?



What is synchronization?



What is a deadlock?



What is inter-thread communication?



What is ExecutorService?



What is a thread pool?



What is Fork/Join?



What are concurrent collections?



What are atomic classes?



How do you design safe concurrent code?



# Final Java Mastery Check

You have progressed through:



Java Fundamentals

        ↓

Variables & Data Types

        ↓

Control Flow

        ↓

Methods

        ↓

Object-Oriented Programming

        ↓

Advanced OOP

        ↓

Exception Handling

        ↓

File Handling & I/O

        ↓

Collections

        ↓

Maps & Generics

        ↓

Multithreading & Concurrency

        ↓

Download Manager Project



# Java Mastery Course Complete

Congratulations!



You have reached the final lesson of the complete Java Mastery Course.



You have now progressed from Java fundamentals to advanced concurrency and practical application development.

`

};

export default lesson15;